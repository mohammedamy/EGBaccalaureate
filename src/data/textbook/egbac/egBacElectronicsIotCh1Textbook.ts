import type { SolvedProblem } from '../../../types/curriculum';

export const egbac_electronics_iot_ch1SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_electronics_iot_ch1_solved_1",
    "titleEn": "Solved Example 1: Nanometer FinFET Scaling, Short-Channel Effects & DIBL",
    "titleAr": "مثال محلول 1: تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design and evaluate an electronic circuit or IoT subsystem applying Nanometer FinFET Scaling, Short-Channel Effects & DIBL. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 1] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.\nStep 3: Execute numerical evaluation: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
      "Perform calculation: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
      "الحساب العددي الدقيق: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Nanometer FinFET Scaling, Short-Channel Effects & DIBL.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Nanometer FinFET Scaling, Short-Channel Effects & DIBL.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL."
  },
  {
    "id": "egbac_electronics_iot_ch1_solved_2",
    "titleEn": "Solved Example 2: Static CMOS Inverter Noise Margins, VTC & Sizing Ratio",
    "titleAr": "مثال محلول 2: هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design and evaluate an electronic circuit or IoT subsystem applying Static CMOS Inverter Noise Margins, VTC & Sizing Ratio. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 2] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.\nStep 3: Execute numerical evaluation: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.\nالخطوة ٣: التعويض العددي وحساب النتائج: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
      "Perform calculation: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
      "الحساب العددي الدقيق: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Static CMOS Inverter Noise Margins, VTC & Sizing Ratio.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Static CMOS Inverter Noise Margins, VTC & Sizing Ratio.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات."
  },
  {
    "id": "egbac_electronics_iot_ch1_solved_3",
    "titleEn": "Solved Example 3: CMOS Dynamic Power Dissipation & Clock Gating Optimization",
    "titleAr": "مثال محلول 3: استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design and evaluate an electronic circuit or IoT subsystem applying CMOS Dynamic Power Dissipation & Clock Gating Optimization. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 3] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.\nStep 3: Execute numerical evaluation: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.\nالخطوة ٣: التعويض العددي وحساب النتائج: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
      "Perform calculation: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
      "الحساب العددي الدقيق: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for CMOS Dynamic Power Dissipation & Clock Gating Optimization.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating CMOS Dynamic Power Dissipation & Clock Gating Optimization.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة."
  },
  {
    "id": "egbac_electronics_iot_ch1_solved_4",
    "titleEn": "Solved Example 4: Nanometer FinFET Scaling, Short-Channel Effects & DIBL",
    "titleAr": "مثال محلول 4: تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design and evaluate an electronic circuit or IoT subsystem applying Nanometer FinFET Scaling, Short-Channel Effects & DIBL. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 4] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.\nStep 3: Execute numerical evaluation: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
      "Perform calculation: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
      "الحساب العددي الدقيق: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Nanometer FinFET Scaling, Short-Channel Effects & DIBL.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Nanometer FinFET Scaling, Short-Channel Effects & DIBL.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL."
  },
  {
    "id": "egbac_electronics_iot_ch1_solved_5",
    "titleEn": "Solved Example 5: Static CMOS Inverter Noise Margins, VTC & Sizing Ratio",
    "titleAr": "مثال محلول 5: هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design and evaluate an electronic circuit or IoT subsystem applying Static CMOS Inverter Noise Margins, VTC & Sizing Ratio. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 5] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.\nStep 3: Execute numerical evaluation: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.\nالخطوة ٣: التعويض العددي وحساب النتائج: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
      "Perform calculation: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
      "الحساب العددي الدقيق: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Static CMOS Inverter Noise Margins, VTC & Sizing Ratio.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Static CMOS Inverter Noise Margins, VTC & Sizing Ratio.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات."
  },
  {
    "id": "egbac_electronics_iot_ch1_solved_6",
    "titleEn": "Solved Example 6: CMOS Dynamic Power Dissipation & Clock Gating Optimization",
    "titleAr": "مثال محلول 6: استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design and evaluate an electronic circuit or IoT subsystem applying CMOS Dynamic Power Dissipation & Clock Gating Optimization. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 6] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.\nStep 3: Execute numerical evaluation: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.\nالخطوة ٣: التعويض العددي وحساب النتائج: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
      "Perform calculation: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
      "الحساب العددي الدقيق: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for CMOS Dynamic Power Dissipation & Clock Gating Optimization.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating CMOS Dynamic Power Dissipation & Clock Gating Optimization.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة."
  },
  {
    "id": "egbac_electronics_iot_ch1_solved_7",
    "titleEn": "Solved Example 7: Nanometer FinFET Scaling, Short-Channel Effects & DIBL",
    "titleAr": "مثال محلول 7: تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design and evaluate an electronic circuit or IoT subsystem applying Nanometer FinFET Scaling, Short-Channel Effects & DIBL. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 7] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.\nStep 3: Execute numerical evaluation: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
      "Perform calculation: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
      "الحساب العددي الدقيق: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Nanometer FinFET Scaling, Short-Channel Effects & DIBL.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Nanometer FinFET Scaling, Short-Channel Effects & DIBL.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL."
  },
  {
    "id": "egbac_electronics_iot_ch1_solved_8",
    "titleEn": "Solved Example 8: Static CMOS Inverter Noise Margins, VTC & Sizing Ratio",
    "titleAr": "مثال محلول 8: هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design and evaluate an electronic circuit or IoT subsystem applying Static CMOS Inverter Noise Margins, VTC & Sizing Ratio. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 8] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.\nStep 3: Execute numerical evaluation: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.\nالخطوة ٣: التعويض العددي وحساب النتائج: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
      "Perform calculation: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
      "الحساب العددي الدقيق: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Static CMOS Inverter Noise Margins, VTC & Sizing Ratio.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Static CMOS Inverter Noise Margins, VTC & Sizing Ratio.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات."
  },
  {
    "id": "egbac_electronics_iot_ch1_solved_9",
    "titleEn": "Solved Example 9: CMOS Dynamic Power Dissipation & Clock Gating Optimization",
    "titleAr": "مثال محلول 9: استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design and evaluate an electronic circuit or IoT subsystem applying CMOS Dynamic Power Dissipation & Clock Gating Optimization. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 9] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.\nStep 3: Execute numerical evaluation: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.\nالخطوة ٣: التعويض العددي وحساب النتائج: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
      "Perform calculation: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
      "الحساب العددي الدقيق: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for CMOS Dynamic Power Dissipation & Clock Gating Optimization.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating CMOS Dynamic Power Dissipation & Clock Gating Optimization.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة."
  },
  {
    "id": "egbac_electronics_iot_ch1_solved_10",
    "titleEn": "Solved Example 10: Nanometer FinFET Scaling, Short-Channel Effects & DIBL",
    "titleAr": "مثال محلول 10: تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design and evaluate an electronic circuit or IoT subsystem applying Nanometer FinFET Scaling, Short-Channel Effects & DIBL. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 10] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.\nStep 3: Execute numerical evaluation: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
      "Perform calculation: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
      "الحساب العددي الدقيق: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Nanometer FinFET Scaling, Short-Channel Effects & DIBL.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Nanometer FinFET Scaling, Short-Channel Effects & DIBL.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL."
  }
];

export const egbac_electronics_iot_ch1ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_electronics_iot_ch1_ex_1",
    "titleEn": "Exercise Problem 1: Nanometer FinFET Scaling, Short-Channel Effects & DIBL",
    "titleAr": "تمرين 1: تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] An embedded hardware engineer is required to optimize a subsystem involving Nanometer FinFET Scaling, Short-Channel Effects & DIBL. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.\n- Calculation & Results: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.\n- خطوات الحساب والنتيجة: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
      "Calculate final values: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
      "حساب الناتج النهائي: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
    "hintAr": "طبق القانون الأساسي: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_2",
    "titleEn": "Exercise Problem 2: Static CMOS Inverter Noise Margins, VTC & Sizing Ratio",
    "titleAr": "تمرين 2: هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] An embedded hardware engineer is required to optimize a subsystem involving Static CMOS Inverter Noise Margins, VTC & Sizing Ratio. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.\n- Calculation & Results: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.\n- خطوات الحساب والنتيجة: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
      "Calculate final values: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
      "حساب الناتج النهائي: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
    "hintAr": "طبق القانون الأساسي: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_3",
    "titleEn": "Exercise Problem 3: CMOS Dynamic Power Dissipation & Clock Gating Optimization",
    "titleAr": "تمرين 3: استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] An embedded hardware engineer is required to optimize a subsystem involving CMOS Dynamic Power Dissipation & Clock Gating Optimization. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.\n- Calculation & Results: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.\n- خطوات الحساب والنتيجة: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
      "Calculate final values: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
      "حساب الناتج النهائي: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
    "hintAr": "طبق القانون الأساسي: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_4",
    "titleEn": "Exercise Problem 4: Nanometer FinFET Scaling, Short-Channel Effects & DIBL",
    "titleAr": "تمرين 4: تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] An embedded hardware engineer is required to optimize a subsystem involving Nanometer FinFET Scaling, Short-Channel Effects & DIBL. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.\n- Calculation & Results: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.\n- خطوات الحساب والنتيجة: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
      "Calculate final values: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
      "حساب الناتج النهائي: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
    "hintAr": "طبق القانون الأساسي: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_5",
    "titleEn": "Exercise Problem 5: Static CMOS Inverter Noise Margins, VTC & Sizing Ratio",
    "titleAr": "تمرين 5: هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] An embedded hardware engineer is required to optimize a subsystem involving Static CMOS Inverter Noise Margins, VTC & Sizing Ratio. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.\n- Calculation & Results: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.\n- خطوات الحساب والنتيجة: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
      "Calculate final values: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
      "حساب الناتج النهائي: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
    "hintAr": "طبق القانون الأساسي: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_6",
    "titleEn": "Exercise Problem 6: CMOS Dynamic Power Dissipation & Clock Gating Optimization",
    "titleAr": "تمرين 6: استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] An embedded hardware engineer is required to optimize a subsystem involving CMOS Dynamic Power Dissipation & Clock Gating Optimization. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.\n- Calculation & Results: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.\n- خطوات الحساب والنتيجة: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
      "Calculate final values: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
      "حساب الناتج النهائي: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
    "hintAr": "طبق القانون الأساسي: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_7",
    "titleEn": "Exercise Problem 7: Nanometer FinFET Scaling, Short-Channel Effects & DIBL",
    "titleAr": "تمرين 7: تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] An embedded hardware engineer is required to optimize a subsystem involving Nanometer FinFET Scaling, Short-Channel Effects & DIBL. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.\n- Calculation & Results: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.\n- خطوات الحساب والنتيجة: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
      "Calculate final values: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
      "حساب الناتج النهائي: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
    "hintAr": "طبق القانون الأساسي: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_8",
    "titleEn": "Exercise Problem 8: Static CMOS Inverter Noise Margins, VTC & Sizing Ratio",
    "titleAr": "تمرين 8: هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] An embedded hardware engineer is required to optimize a subsystem involving Static CMOS Inverter Noise Margins, VTC & Sizing Ratio. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.\n- Calculation & Results: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.\n- خطوات الحساب والنتيجة: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
      "Calculate final values: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
      "حساب الناتج النهائي: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
    "hintAr": "طبق القانون الأساسي: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_9",
    "titleEn": "Exercise Problem 9: CMOS Dynamic Power Dissipation & Clock Gating Optimization",
    "titleAr": "تمرين 9: استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] An embedded hardware engineer is required to optimize a subsystem involving CMOS Dynamic Power Dissipation & Clock Gating Optimization. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.\n- Calculation & Results: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.\n- خطوات الحساب والنتيجة: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
      "Calculate final values: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
      "حساب الناتج النهائي: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
    "hintAr": "طبق القانون الأساسي: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_10",
    "titleEn": "Exercise Problem 10: Nanometer FinFET Scaling, Short-Channel Effects & DIBL",
    "titleAr": "تمرين 10: تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] An embedded hardware engineer is required to optimize a subsystem involving Nanometer FinFET Scaling, Short-Channel Effects & DIBL. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.\n- Calculation & Results: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.\n- خطوات الحساب والنتيجة: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
      "Calculate final values: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
      "حساب الناتج النهائي: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
    "hintAr": "طبق القانون الأساسي: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_11",
    "titleEn": "Exercise Problem 11: Static CMOS Inverter Noise Margins, VTC & Sizing Ratio",
    "titleAr": "تمرين 11: هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] An embedded hardware engineer is required to optimize a subsystem involving Static CMOS Inverter Noise Margins, VTC & Sizing Ratio. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.\n- Calculation & Results: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.\n- خطوات الحساب والنتيجة: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
      "Calculate final values: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
      "حساب الناتج النهائي: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
    "hintAr": "طبق القانون الأساسي: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_12",
    "titleEn": "Exercise Problem 12: CMOS Dynamic Power Dissipation & Clock Gating Optimization",
    "titleAr": "تمرين 12: استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] An embedded hardware engineer is required to optimize a subsystem involving CMOS Dynamic Power Dissipation & Clock Gating Optimization. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.\n- Calculation & Results: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.\n- خطوات الحساب والنتيجة: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
      "Calculate final values: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
      "حساب الناتج النهائي: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
    "hintAr": "طبق القانون الأساسي: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_13",
    "titleEn": "Exercise Problem 13: Nanometer FinFET Scaling, Short-Channel Effects & DIBL",
    "titleAr": "تمرين 13: تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] An embedded hardware engineer is required to optimize a subsystem involving Nanometer FinFET Scaling, Short-Channel Effects & DIBL. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تقليص أبعاد ترانزستورات FinFET النانومترية، تأثيرات القناة القصيرة وانخفاض الحاجز المستحث بالصرف DIBL. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.\n- Calculation & Results: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.\n- خطوات الحساب والنتيجة: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
      "Calculate final values: In a 7nm FinFET where threshold shifts from $V_{TH1} = 280\\text{ mV}$ at $V_{DS1} = 0.05\\text{ V}$ to $V_{TH2} = 220\\text{ mV}$ at $V_{DS2} = 0.85\\text{ V}$, the DIBL coefficient is $\\frac{280 - 220}{0.85 - 0.05} = \\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
      "حساب الناتج النهائي: في FinFET بدقة 7 نانومتر حيث تتغير عتبة الجهد من $280\\text{ mV}$ عند $V_{DS} = 0.05\\text{ V}$ إلى $220\\text{ mV}$ عند $V_{DS} = 0.85\\text{ V}$، يبلغ معامل DIBL مقدار $\\frac{60\\text{ mV}}{0.8\\text{ V}} = 75\\text{ mV/V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Drain-Induced Barrier Lowering (DIBL) occurs when high drain voltages lower the potential barrier at the source, quantified as $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ in $\\text{mV/V}$.",
    "hintAr": "طبق القانون الأساسي: يحدث انخفاض الحاجز المستحث بالصرف (DIBL) عندما يؤدي جهد الصرف المرتفع إلى خفض حاجز الجهد عند المصدر، ويقاس بـ $\\text{DIBL} = \\frac{\\Delta V_{TH}}{\\Delta V_{DS}}$ بوحدة $\\text{mV/V}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_14",
    "titleEn": "Exercise Problem 14: Static CMOS Inverter Noise Margins, VTC & Sizing Ratio",
    "titleAr": "تمرين 14: هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] An embedded hardware engineer is required to optimize a subsystem involving Static CMOS Inverter Noise Margins, VTC & Sizing Ratio. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن هوامش الضوضاء لعواكس CMOS الساكنة، منحنى نقل الجهد ونسب تحجيم الترانزستورات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.\n- Calculation & Results: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.\n- خطوات الحساب والنتيجة: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
      "Calculate final values: For a $V_{DD} = 1.0\\text{ V}$ CMOS gate with $V_{IL} = 0.40\\text{ V}$, $V_{IH} = 0.65\\text{ V}$, $V_{OL} = 0.05\\text{ V}$, and $V_{OH} = 0.95\\text{ V}$, the noise margins are $NM_L = V_{IL} - V_{OL} = 0.40 - 0.05 = 0.35\\text{ V}$ and $NM_H = V_{OH} - V_{IH} = 0.95 - 0.65 = 0.30\\text{ V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
      "حساب الناتج النهائي: لبوابة CMOS بجهد $V_{DD} = 1.0\\text{ V}$ ومعالم $V_{IL}=0.40\\text{V}$، $V_{IH}=0.65\\text{V}$، $V_{OL}=0.05\\text{V}$، و $V_{OH}=0.95\\text{V}$، فإن هوامش الضوضاء هي $NM_L = 0.35\\text{ V}$ و $NM_H = 0.30\\text{ V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Symmetric switching threshold $V_M = \\frac{V_{DD}}{2}$ requires transconductance matching $k_p = k_n$, dictating channel width ratio $\\frac{W_p}{W_n} \\approx \\frac{\\mu_n}{\\mu_p} \\approx 2.5$ due to lower hole mobility.",
    "hintAr": "طبق القانون الأساسي: تتطلب عتبة التبديل المتناظرة $V_M = \\frac{V_{DD}}{2}$ تطابق معامل $k_p = k_n$، مما يفرض نسبة عرض قناة $\\frac{W_p}{W_n} \\approx 2.5$ نظراً لانخفاض حركية الفجوات مقارنة بالإلكترونات.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch1_ex_15",
    "titleEn": "Exercise Problem 15: CMOS Dynamic Power Dissipation & Clock Gating Optimization",
    "titleAr": "تمرين 15: استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] An embedded hardware engineer is required to optimize a subsystem involving CMOS Dynamic Power Dissipation & Clock Gating Optimization. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن استهلاك القدرة الديناميكية في دوائر CMOS وتقنية حجب إشارة الساعة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.\n- Calculation & Results: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.\n- خطوات الحساب والنتيجة: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
      "Calculate final values: An IoT SoC operating at $V_{DD} = 1.2\\text{ V}$, clock frequency $f_{clk} = 200\\text{ MHz}$, activity factor $\\alpha = 0.2$, and total switched capacitance $C_L = 500\\text{ pF}$ consumes dynamic power $P = 0.2 \\times (500 \\times 10^{-12}) \\times (1.2)^2 \\times (200 \\times 10^6) = 28.8\\text{ mW}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
      "حساب الناتج النهائي: معالج إنترنت أشياء يعمل بجهد $V_{DD} = 1.2\\text{ V}$ وتردد $f_{clk} = 200\\text{ MHz}$ ومعامل نشاط $\\alpha = 0.2$ وسعة $C_L = 500\\text{ pF}$، يستهلك قدرة ديناميكية $P = 0.2 \\times 500\\text{pF} \\times 1.44 \\times 200\\text{MHz} = 28.8\\text{ mW}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Clock gating disables the clock network feeding idle registers using an integrated clock gating cell (ICG), reducing activity factor $\\alpha$ to zero.",
    "hintAr": "طبق القانون الأساسي: تعمل تقنية حجب الساعة (Clock Gating) على تعطيل وصول نبضات الساعة إلى السجلات الخاملة، مما يخفض معامل النشاط $\\alpha$ إلى الصفر ويوفر الطاقة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  }
];
