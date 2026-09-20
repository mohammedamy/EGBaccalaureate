import type { SolvedProblem } from '../../../types/curriculum';

export const egbac_electronics_iot_ch3SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_electronics_iot_ch3_solved_1",
    "titleEn": "Solved Example 1: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs",
    "titleAr": "مثال محلول 1: التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design and evaluate an electronic circuit or IoT subsystem applying Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 1] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.\nStep 3: Execute numerical evaluation: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.\nالخطوة ٣: التعويض العددي وحساب النتائج: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "Perform calculation: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "الحساب العددي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة."
  },
  {
    "id": "egbac_electronics_iot_ch3_solved_2",
    "titleEn": "Solved Example 2: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers",
    "titleAr": "مثال محلول 2: معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design and evaluate an electronic circuit or IoT subsystem applying Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 2] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.\nStep 3: Execute numerical evaluation: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.\nالخطوة ٣: التعويض العددي وحساب النتائج: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "Perform calculation: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "الحساب العددي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت."
  },
  {
    "id": "egbac_electronics_iot_ch3_solved_3",
    "titleEn": "Solved Example 3: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming",
    "titleAr": "مثال محلول 3: النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design and evaluate an electronic circuit or IoT subsystem applying Direct Memory Access (DMA) Zero-CPU Peripheral Streaming. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 3] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.\nStep 3: Execute numerical evaluation: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).\nالخطوة ٣: التعويض العددي وحساب النتائج: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "Perform calculation: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "الحساب العددي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج."
  },
  {
    "id": "egbac_electronics_iot_ch3_solved_4",
    "titleEn": "Solved Example 4: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs",
    "titleAr": "مثال محلول 4: التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design and evaluate an electronic circuit or IoT subsystem applying Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 4] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.\nStep 3: Execute numerical evaluation: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.\nالخطوة ٣: التعويض العددي وحساب النتائج: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "Perform calculation: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "الحساب العددي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة."
  },
  {
    "id": "egbac_electronics_iot_ch3_solved_5",
    "titleEn": "Solved Example 5: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers",
    "titleAr": "مثال محلول 5: معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design and evaluate an electronic circuit or IoT subsystem applying Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 5] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.\nStep 3: Execute numerical evaluation: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.\nالخطوة ٣: التعويض العددي وحساب النتائج: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "Perform calculation: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "الحساب العددي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت."
  },
  {
    "id": "egbac_electronics_iot_ch3_solved_6",
    "titleEn": "Solved Example 6: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming",
    "titleAr": "مثال محلول 6: النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design and evaluate an electronic circuit or IoT subsystem applying Direct Memory Access (DMA) Zero-CPU Peripheral Streaming. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 6] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.\nStep 3: Execute numerical evaluation: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).\nالخطوة ٣: التعويض العددي وحساب النتائج: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "Perform calculation: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "الحساب العددي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج."
  },
  {
    "id": "egbac_electronics_iot_ch3_solved_7",
    "titleEn": "Solved Example 7: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs",
    "titleAr": "مثال محلول 7: التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design and evaluate an electronic circuit or IoT subsystem applying Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 7] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.\nStep 3: Execute numerical evaluation: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.\nالخطوة ٣: التعويض العددي وحساب النتائج: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "Perform calculation: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "الحساب العددي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة."
  },
  {
    "id": "egbac_electronics_iot_ch3_solved_8",
    "titleEn": "Solved Example 8: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers",
    "titleAr": "مثال محلول 8: معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design and evaluate an electronic circuit or IoT subsystem applying Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 8] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.\nStep 3: Execute numerical evaluation: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.\nالخطوة ٣: التعويض العددي وحساب النتائج: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "Perform calculation: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "الحساب العددي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت."
  },
  {
    "id": "egbac_electronics_iot_ch3_solved_9",
    "titleEn": "Solved Example 9: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming",
    "titleAr": "مثال محلول 9: النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design and evaluate an electronic circuit or IoT subsystem applying Direct Memory Access (DMA) Zero-CPU Peripheral Streaming. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 9] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.\nStep 3: Execute numerical evaluation: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).\nالخطوة ٣: التعويض العددي وحساب النتائج: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "Perform calculation: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "الحساب العددي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج."
  },
  {
    "id": "egbac_electronics_iot_ch3_solved_10",
    "titleEn": "Solved Example 10: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs",
    "titleAr": "مثال محلول 10: التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design and evaluate an electronic circuit or IoT subsystem applying Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 10] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.\nStep 3: Execute numerical evaluation: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.\nالخطوة ٣: التعويض العددي وحساب النتائج: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "Perform calculation: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "الحساب العددي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة."
  }
];

export const egbac_electronics_iot_ch3ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_electronics_iot_ch3_ex_1",
    "titleEn": "Exercise Problem 1: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs",
    "titleAr": "تمرين 1: التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] An embedded hardware engineer is required to optimize a subsystem involving Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.\n- Calculation & Results: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.\n- خطوات الحساب والنتيجة: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "Calculate final values: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "حساب الناتج النهائي: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
    "hintAr": "طبق القانون الأساسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_2",
    "titleEn": "Exercise Problem 2: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers",
    "titleAr": "تمرين 2: معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] An embedded hardware engineer is required to optimize a subsystem involving Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.\n- Calculation & Results: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.\n- خطوات الحساب والنتيجة: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "Calculate final values: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "حساب الناتج النهائي: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
    "hintAr": "طبق القانون الأساسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_3",
    "titleEn": "Exercise Problem 3: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming",
    "titleAr": "تمرين 3: النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] An embedded hardware engineer is required to optimize a subsystem involving Direct Memory Access (DMA) Zero-CPU Peripheral Streaming. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.\n- Calculation & Results: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).\n- خطوات الحساب والنتيجة: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "Calculate final values: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "حساب الناتج النهائي: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
    "hintAr": "طبق القانون الأساسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_4",
    "titleEn": "Exercise Problem 4: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs",
    "titleAr": "تمرين 4: التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] An embedded hardware engineer is required to optimize a subsystem involving Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.\n- Calculation & Results: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.\n- خطوات الحساب والنتيجة: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "Calculate final values: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "حساب الناتج النهائي: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
    "hintAr": "طبق القانون الأساسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_5",
    "titleEn": "Exercise Problem 5: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers",
    "titleAr": "تمرين 5: معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] An embedded hardware engineer is required to optimize a subsystem involving Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.\n- Calculation & Results: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.\n- خطوات الحساب والنتيجة: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "Calculate final values: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "حساب الناتج النهائي: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
    "hintAr": "طبق القانون الأساسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_6",
    "titleEn": "Exercise Problem 6: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming",
    "titleAr": "تمرين 6: النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] An embedded hardware engineer is required to optimize a subsystem involving Direct Memory Access (DMA) Zero-CPU Peripheral Streaming. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.\n- Calculation & Results: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).\n- خطوات الحساب والنتيجة: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "Calculate final values: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "حساب الناتج النهائي: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
    "hintAr": "طبق القانون الأساسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_7",
    "titleEn": "Exercise Problem 7: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs",
    "titleAr": "تمرين 7: التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] An embedded hardware engineer is required to optimize a subsystem involving Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.\n- Calculation & Results: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.\n- خطوات الحساب والنتيجة: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "Calculate final values: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "حساب الناتج النهائي: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
    "hintAr": "طبق القانون الأساسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_8",
    "titleEn": "Exercise Problem 8: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers",
    "titleAr": "تمرين 8: معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] An embedded hardware engineer is required to optimize a subsystem involving Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.\n- Calculation & Results: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.\n- خطوات الحساب والنتيجة: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "Calculate final values: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "حساب الناتج النهائي: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
    "hintAr": "طبق القانون الأساسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_9",
    "titleEn": "Exercise Problem 9: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming",
    "titleAr": "تمرين 9: النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] An embedded hardware engineer is required to optimize a subsystem involving Direct Memory Access (DMA) Zero-CPU Peripheral Streaming. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.\n- Calculation & Results: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).\n- خطوات الحساب والنتيجة: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "Calculate final values: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "حساب الناتج النهائي: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
    "hintAr": "طبق القانون الأساسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_10",
    "titleEn": "Exercise Problem 10: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs",
    "titleAr": "تمرين 10: التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] An embedded hardware engineer is required to optimize a subsystem involving Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.\n- Calculation & Results: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.\n- خطوات الحساب والنتيجة: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "Calculate final values: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "حساب الناتج النهائي: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
    "hintAr": "طبق القانون الأساسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_11",
    "titleEn": "Exercise Problem 11: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers",
    "titleAr": "تمرين 11: معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] An embedded hardware engineer is required to optimize a subsystem involving Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.\n- Calculation & Results: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.\n- خطوات الحساب والنتيجة: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "Calculate final values: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "حساب الناتج النهائي: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
    "hintAr": "طبق القانون الأساسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_12",
    "titleEn": "Exercise Problem 12: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming",
    "titleAr": "تمرين 12: النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] An embedded hardware engineer is required to optimize a subsystem involving Direct Memory Access (DMA) Zero-CPU Peripheral Streaming. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.\n- Calculation & Results: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).\n- خطوات الحساب والنتيجة: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "Calculate final values: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "حساب الناتج النهائي: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
    "hintAr": "طبق القانون الأساسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_13",
    "titleEn": "Exercise Problem 13: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs",
    "titleAr": "تمرين 13: التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] An embedded hardware engineer is required to optimize a subsystem involving Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.\n- Calculation & Results: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.\n- خطوات الحساب والنتيجة: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "Calculate final values: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "حساب الناتج النهائي: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
    "hintAr": "طبق القانون الأساسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_14",
    "titleEn": "Exercise Problem 14: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers",
    "titleAr": "تمرين 14: معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] An embedded hardware engineer is required to optimize a subsystem involving Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.\n- Calculation & Results: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.\n- خطوات الحساب والنتيجة: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "Calculate final values: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "حساب الناتج النهائي: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
    "hintAr": "طبق القانون الأساسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch3_ex_15",
    "titleEn": "Exercise Problem 15: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming",
    "titleAr": "تمرين 15: النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] An embedded hardware engineer is required to optimize a subsystem involving Direct Memory Access (DMA) Zero-CPU Peripheral Streaming. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.\n- Calculation & Results: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).\n- خطوات الحساب والنتيجة: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "Calculate final values: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "حساب الناتج النهائي: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
    "hintAr": "طبق القانون الأساسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  }
];
