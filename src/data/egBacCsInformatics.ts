import type { Branch } from '../types/curriculum';
import { egBacCsInformaticsCh1Databank } from './databanks/egbac/egBacCsInformaticsCh1Databank';
import { egBacCsInformaticsCh2Databank } from './databanks/egbac/egBacCsInformaticsCh2Databank';
import { egBacCsInformaticsCh3Databank } from './databanks/egbac/egBacCsInformaticsCh3Databank';
import { egBacCsInformaticsCh4Databank } from './databanks/egbac/egBacCsInformaticsCh4Databank';
import { egBacCsInformaticsCh5Databank } from './databanks/egbac/egBacCsInformaticsCh5Databank';
import { egBacCsInformaticsCh6Databank } from './databanks/egbac/egBacCsInformaticsCh6Databank';
import { egBacCsInformaticsCh7Databank } from './databanks/egbac/egBacCsInformaticsCh7Databank';
import { egBacCsInformaticsCh8Databank } from './databanks/egbac/egBacCsInformaticsCh8Databank';
import { egBacCsInformaticsCh9Databank } from './databanks/egbac/egBacCsInformaticsCh9Databank';
import { egBacCsInformaticsCh10Databank } from './databanks/egbac/egBacCsInformaticsCh10Databank';
import { egBacCsInformaticsCh1SolvedExamples, egBacCsInformaticsCh1Exercises } from './textbook/egbac/egBacCsInformaticsCh1Textbook';
import { egBacCsInformaticsCh2SolvedExamples, egBacCsInformaticsCh2Exercises } from './textbook/egbac/egBacCsInformaticsCh2Textbook';
import { egBacCsInformaticsCh3SolvedExamples, egBacCsInformaticsCh3Exercises } from './textbook/egbac/egBacCsInformaticsCh3Textbook';
import { egBacCsInformaticsCh4SolvedExamples, egBacCsInformaticsCh4Exercises } from './textbook/egbac/egBacCsInformaticsCh4Textbook';
import { egBacCsInformaticsCh5SolvedExamples, egBacCsInformaticsCh5Exercises } from './textbook/egbac/egBacCsInformaticsCh5Textbook';
import { egBacCsInformaticsCh6SolvedExamples, egBacCsInformaticsCh6Exercises } from './textbook/egbac/egBacCsInformaticsCh6Textbook';
import { egBacCsInformaticsCh7SolvedExamples, egBacCsInformaticsCh7Exercises } from './textbook/egbac/egBacCsInformaticsCh7Textbook';
import { egBacCsInformaticsCh8SolvedExamples, egBacCsInformaticsCh8Exercises } from './textbook/egbac/egBacCsInformaticsCh8Textbook';
import { egBacCsInformaticsCh9SolvedExamples, egBacCsInformaticsCh9Exercises } from './textbook/egbac/egBacCsInformaticsCh9Textbook';
import { egBacCsInformaticsCh10SolvedExamples, egBacCsInformaticsCh10Exercises } from './textbook/egbac/egBacCsInformaticsCh10Textbook';

export const egBacCsInformaticsBranch: Branch = {
  id: "egbac_cs_informatics",
  titleEn: "Computer Science, Informatics & AI",
  titleAr: "علوم الحاسب والمعلوماتية والذكاء الاصطناعي",
  categoryEn: "Advanced Computational & Emerging Technologies Division",
  categoryAr: "شعبة الحوسبة المتقدمة والتقنيات الناشئة",
  iconName: "Binary",
  colorGradient: "from-violet-600 via-indigo-600 to-cyan-600",
  chapters: [
    {
      id: "egbac_cs_ch1",
      chapterNumber: 1,
      titleEn: "Unit 1: Digital Logic, Hardware Architecture & Processor Internals",
      titleAr: "الباب الأول: المنطق الرقمي وبنية الحاسب والمعالج الدقيق",
      descriptionEn: "Boolean algebra, universal logic gates, half/full adders, Von Neumann architecture, CPU registers, system buses, and fetch-decode-execute cycle.",
      descriptionAr: "الجبر البوليني، البوابات المنطقية الشاملة، دوائر الجمع، معمارية فون نيومان، سجلات المعالج، نواقل النظام، ودورة جلب وتنفيذ التعليمات.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_cs_ch1_l1",
          titleEn: "Logic Gates, Boolean Algebra & Universal Circuit Synthesis",
          titleAr: "البوابات المنطقية والجبر البوليني والتوليف المنطقي الشامل",
          summaryEn: "Truth tables of elementary gates (AND, OR, NOT, XOR, NAND, NOR), De Morgan’s laws, and constructing universal circuits using NAND/NOR gates.",
          summaryAr: "جداول الصواب للبوابات الأساسية، قوانين دي مورجان، وبناء أي دائرة منطقية بالاعتماد حصرياً على بوابات NAND و NOR.",
          theoryContentEn: "### 1. Fundamental Boolean Logic Gates\n- **AND Gate ($Y = A \\cdot B$):** Output is 1 if and only if both inputs are 1.\n- **OR Gate ($Y = A + B$):** Output is 1 if at least one input is 1.\n- **NOT Gate ($Y = \\overline{A}$):** Inverts the binary logic level.\n- **XOR Gate ($Y = A \\oplus B = A\\overline{B} + \\overline{A}B$):** Output is 1 if inputs are strictly different.\n- **NAND Gate ($Y = \\overline{A \\cdot B}$):** Universal gate capable of synthesizing all Boolean functions.\n- **NOR Gate ($Y = \\overline{A + B}$):** Universal dual gate for complete logic synthesis.\n\n### 2. De Morgan's Theorems & Algebraic Simplification\n1. $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$\n2. $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$\n- **Double Inversion:** $\\overline{\\overline{A}} = A$\n- **Distributive Law:** $A + (B \\cdot C) = (A + B) \\cdot (A + C)$",
          theoryContentAr: "### ١. البوابات المنطقية الأساسية والجداول الحسابية\n- **بوابة AND ($Y = A \\cdot B$):** ينتج الخرج 1 إذا وفقط إذا كان كلا المدخلين 1.\n- **بوابة OR ($Y = A + B$):** ينتج الخرج 1 عند وجود قيمة 1 في أي من المدخلين.\n- **بوابة NOT ($Y = \\overline{A}$):** تقوم بعكس القيمة المنطقية الثنائية.\n- **بوابة XOR ($Y = A \\oplus B$):** ينتج الخرج 1 إذا كان المدخلان مختلفين تماماً.\n- **بوابة NAND ($Y = \\overline{A \\cdot B}$):** بوابة شاملة تتيح بناء كافة الدوال المنطقية.\n- **بوابة NOR ($Y = \\overline{A + B}$):** بوابة شاملة ثنائية تكافئ كافة العمليات المنطقية.\n\n### ٢. قوانين دي مورجان والتبسيط البوليني\n١. $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$\n٢. $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$\n- **النفي المزدوج:** $\\overline{\\overline{A}} = A$\n- **قانون التوزيع:** $A + (B \\cdot C) = (A + B) \\cdot (A + C)$",
          formulas: [
          {
                    "labelEn": "De Morgan's First Law",
                    "labelAr": "قانون دي مورجان الأول",
                    "latex": "\\overline{A \\cdot B} = \\overline{A} + \\overline{B}"
          },
          {
                    "labelEn": "XOR Boolean Expansion",
                    "labelAr": "المفكوك البوليني لبوابة الاختيار الحصري",
                    "latex": "A \\oplus B = A\\overline{B} + \\overline{A}B"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 5-40"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Logic Gates, Boolean Algebra & Universal Circuit Synthesis",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "البوابات المنطقية والجبر البوليني والتوليف المنطقي الشامل",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C1-L1",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch1_l1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Logic Gates, Boolean Algebra & Universal Circuit Synthesis",
            titleAr: "ورقة عمل تقييمية وزارية: " + "البوابات المنطقية والجبر البوليني والتوليف المنطقي الشامل",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch1_l1_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Logic Gates, Boolean Algebra & Universal Circuit Synthesis",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "البوابات المنطقية والجبر البوليني والتوليف المنطقي الشامل",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch1_l1_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Logic Gates, Boolean Algebra & Universal Circuit Synthesis",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "البوابات المنطقية والجبر البوليني والتوليف المنطقي الشامل",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_logic_circuit",
            titleEn: "Digital Logic & Circuit Builder Studio",
            titleAr: "استوديو بناء واختبار الدوائر المنطقية الرقمية",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        },
        {
          id: "egbac_cs_ch1_l2",
          titleEn: "Von Neumann Architecture, CPU Registers & The Execution Cycle",
          titleAr: "معمارية فون نيومان، سجلات المعالج ودورة جلب وتنفيذ التعليمات",
          summaryEn: "Program Counter (PC), MAR, MDR, CIR, Accumulator, system buses (Address, Data, Control), and instruction pipelining.",
          summaryAr: "عداد البرنامج، سجلات الذاكرة، المركم، نواقل النظام الثلاثية، وتقنيات خطوط أنابيب المعالجة (Pipelining).",
          theoryContentEn: "### 1. Von Neumann Architecture Components\n- **Unified Memory:** Code and data share a single physical memory address space.\n- **Central Processing Unit (CPU):** Comprises Arithmetic Logic Unit (ALU), Control Unit (CU), and dedicated Registers.\n- **System Bus Triad:**\n  - *Address Bus:* Unidirectional; carries target memory locations from CPU to RAM.\n  - *Data Bus:* Bidirectional; transfers instructions and operand data.\n  - *Control Bus:* Transmits synchronization signals (Read, Write, Clock, Interrupts).\n\n### 2. Dedicated CPU Registers & Instruction Cycle\n1. **Fetch:**\n   - PC holds address of next instruction $\\rightarrow$ copied to MAR.\n   - CU triggers Memory Read $\\rightarrow$ instruction placed on Data Bus into MDR.\n   - Instruction loaded into Current Instruction Register (CIR); PC increments ($PC \\leftarrow PC + 1$).\n2. **Decode:** Control Unit decodes opcode and addressing modes.\n3. **Execute:** ALU executes mathematical/logical operations; results stored in Accumulator (ACC) or RAM.",
          theoryContentAr: "### ١. مكونات معمارية فون نيومان ونظام النواقل\n- **الذاكرة الموحدة:** تشترك أوامر البرنامج والبيانات في نفس نطاق العناوين الفيزيائي بالذاكرة.\n- **وحدة المعالجة المركزية (CPU):** تتألف من وحدة الحساب والمنطق (ALU)، وحدة التحكم (CU)، والسجلات المتخصصة.\n- **النواقل الثلاثية للنظام:**\n  - *ناقل العناوين (Address Bus):* أحادي الاتجاه؛ ينقل عناوين الذاكرة من المعالج إلى الذاكرة.\n  - *ناقل البيانات (Data Bus):* ثنائي الاتجاه؛ ينقل التعليمات ومعاملات البيانات.\n  - *ناقل التحكم (Control Bus):* ينقل إشارات التزامن (قراءة، كتابة، نبضات الساعة، مقاطعات).\n\n### ٢. سجلات المعالج ودورة الجلب والتنفيذ (Fetch-Decode-Execute)\n١. **الجلب (Fetch):**\n   - عداد البرنامج (PC) يحمل عنوان التعليمة $\\rightarrow$ يُنسخ إلى سجل عنوان الذاكرة (MAR).\n   - إشارة قراءة الذاكرة $\\rightarrow$ تنتقل التعليمة عبر ناقل البيانات إلى سجل بيانات الذاكرة (MDR).\n   - تُحمل التعليمة إلى سجل التعليمة الحالي (CIR)؛ ويتزايد عداد البرنامج ($PC \\leftarrow PC + 1$).\n٢. **فك التشفير (Decode):** تقوم وحدة التحكم بفك تشفير كود العملية ونمط العنونة.\n٣. **التنفيذ (Execute):** تجري وحدة ALU العمليات وتخزن الناتج في المركم (Accumulator) أو الذاكرة.",
          formulas: [
          {
                    "labelEn": "Instruction Fetch Clock Equation",
                    "labelAr": "معادلة تردد نبضات المعالج ودورة الجلب",
                    "latex": "T_{\\text{cycle}} = \\frac{1}{f_{\\text{clk}}}, \\quad \\text{CPI} = \\frac{\\text{Cycles}}{\\text{Instructions}}"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 5-40"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Von Neumann Architecture, CPU Registers & The Execution Cycle",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "معمارية فون نيومان، سجلات المعالج ودورة جلب وتنفيذ التعليمات",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C1-L2",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch1_l2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Von Neumann Architecture, CPU Registers & The Execution Cycle",
            titleAr: "ورقة عمل تقييمية وزارية: " + "معمارية فون نيومان، سجلات المعالج ودورة جلب وتنفيذ التعليمات",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch1_l2_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Von Neumann Architecture, CPU Registers & The Execution Cycle",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "معمارية فون نيومان، سجلات المعالج ودورة جلب وتنفيذ التعليمات",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch1_l2_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Von Neumann Architecture, CPU Registers & The Execution Cycle",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "معمارية فون نيومان، سجلات المعالج ودورة جلب وتنفيذ التعليمات",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_logic_circuit",
            titleEn: "Digital Logic & Circuit Builder Studio",
            titleAr: "استوديو بناء واختبار الدوائر المنطقية الرقمية",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        }
      ],
      databank: egBacCsInformaticsCh1Databank,
      solvedExamples: egBacCsInformaticsCh1SolvedExamples,
      exerciseProblems: egBacCsInformaticsCh1Exercises
    },
    {
      id: "egbac_cs_ch2",
      chapterNumber: 2,
      titleEn: "Unit 2: Data Representation, Number Systems & Memory Organization",
      titleAr: "الباب الثاني: تمثيل البيانات والأنظمة العددية وتنظيم الذاكرة",
      descriptionEn: "Binary, octal, hexadecimal conversion, two’s complement signed integers, IEEE 754 floating-point, character encoding (ASCII, Unicode UTF-8), and memory hierarchy.",
      descriptionAr: "التحويل بين الأنظمة العددية، المكمل الثنائي للأعداد السالبة، التمثيل العشري IEEE 754، ترميز الحروف، وهرمية الذاكرة والتخزين المؤقت.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_cs_ch2_l1",
          titleEn: "Positional Number Systems, Conversions & Two’s Complement Arithmetic",
          titleAr: "الأنظمة العددية الموضعية والتحويلات وحسابات المكمل الثنائي",
          summaryEn: "Base conversions (Base 2, 8, 10, 16), addition/subtraction in two’s complement, and detecting arithmetic overflow.",
          summaryAr: "التحويل بين الأنظمة العددية، الجمع والطرح باستخدام المكمل الثاني، واكتشاف طفح الحسابات (Arithmetic Overflow).",
          theoryContentEn: "### 1. Positional Number Systems\n- **Binary (Base 2):** Uses digits ${0, 1}$. Weight of $i$-th bit is $2^i$.\n- **Hexadecimal (Base 16):** Uses ${0-9, A-F}$. 1 hex digit corresponds precisely to 4 binary bits (nibble).\n- **Two's Complement Representation ($N$ bits):**\n  - Range: $[-2^{N-1}, 2^{N-1}-1]$.\n  - To negate integer $X$: invert all bits (one's complement) and add 1 ($X^* = \\sim X + 1$).\n  - Prevents dual-zero ambiguity and enables unified adder/subtractor hardware.",
          theoryContentAr: "### ١. الأنظمة العددية الموضعية وحساباتها\n- **النظام الثنائي (Base 2):** يعتمد الرموز ${0, 1}$؛ وزن البت هو $2^i$.\n- **النظام السداسي عشر (Base 16):** يعتمد ${0-9, A-F}$؛ كل خانة تمثل 4 بتات ثنائية بدقة.\n- **تمثيل المكمل الثاني للأعداد ذات الإشارة (Two's Complement):**\n  - النطاق للأعداد الممثلة في $N$ بت هو: $[-2^{N-1}, 2^{N-1}-1]$.\n  - لإيجاد القيمة السالبة للعدد: قلب كافة البتات وإضافة 1 ($X^* = \\sim X + 1$).\n  - يمنع ازدواجية الصفر ويوحد دوائر الجمع والطرح بالمعالج.",
          formulas: [
          {
                    "labelEn": "Two's Complement Inversion",
                    "labelAr": "معادلة المكمل الثنائي للعدد السالب",
                    "latex": "-X = \\overline{X} + 1"
          },
          {
                    "labelEn": "Signed Range Formula",
                    "labelAr": "نطاق الأعداد ذات الإشارة في N بت",
                    "latex": "R = [-2^{N-1}, \\; 2^{N-1} - 1]"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 30-65"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Positional Number Systems, Conversions & Two’s Complement Arithmetic",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "الأنظمة العددية الموضعية والتحويلات وحسابات المكمل الثنائي",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C2-L1",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch2_l1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Positional Number Systems, Conversions & Two’s Complement Arithmetic",
            titleAr: "ورقة عمل تقييمية وزارية: " + "الأنظمة العددية الموضعية والتحويلات وحسابات المكمل الثنائي",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch2_l1_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Positional Number Systems, Conversions & Two’s Complement Arithmetic",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "الأنظمة العددية الموضعية والتحويلات وحسابات المكمل الثنائي",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch2_l1_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Positional Number Systems, Conversions & Two’s Complement Arithmetic",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "الأنظمة العددية الموضعية والتحويلات وحسابات المكمل الثنائي",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_logic_circuit",
            titleEn: "Number System & IEEE 754 Representation Tool",
            titleAr: "أداة تمثيل الأنظمة العددية والفاصلة العائمة IEEE 754",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        },
        {
          id: "egbac_cs_ch2_l2",
          titleEn: "IEEE 754 Floating-Point Standard & Memory Hierarchy Organization",
          titleAr: "معيار الفاصلة العائمة IEEE 754 وتنظيم هرمية الذاكرة",
          summaryEn: "Sign bit, exponent with bias, mantissa (significand), cache levels (L1, L2, L3), SRAM vs DRAM, and virtual memory page tables.",
          summaryAr: "بت الإشارة، الأس المنحاز، الكسر العشري، مستويات الذاكرة المخبأة، مقارنة SRAM و DRAM، وجداول صفحات الذاكرة الظاهرية.",
          theoryContentEn: "### 1. IEEE 754 Single-Precision (32-bit) Floating-Point\n- **Sign (1 bit):** 0 for positive, 1 for negative.\n- **Biased Exponent (8 bits):** Bias $B = 127$. Actual exponent $E = \\text{Stored} - 127$.\n- **Mantissa / Fraction (23 bits):** Normalized with implicit leading 1: $1.M$.\n- **Value:** $(-1)^S \\times 1.M \\times 2^{E - 127}$.\n\n### 2. The Computer Memory Hierarchy\n- **L0 Registers:** Sub-nanosecond latency, directly integrated into CPU datapath.\n- **L1/L2/L3 SRAM Caches:** Static RAM (flip-flop based, fast, no refresh needed).\n- **Main Memory DRAM:** Dynamic RAM (capacitor + transistor cell; requires periodic refresh).\n- **Secondary Storage:** NVMe SSDs / HDDs with non-volatile block storage.",
          theoryContentAr: "### ١. معيار IEEE 754 للفاصلة العائمة الأحادية (32-bit)\n- **بت الإشارة (1 bit):** 0 للموجب، 1 للسالب.\n- **الأس المنحاز (8 bits):** قيمة الانحياز $127$؛ الأس الحقيقي $E = \\text{Stored} - 127$.\n- **الجزء الكسري (23 bits):** قياسي مع 1 ضمني في البداية: $1.M$.\n- **القيمة العددية:** $(-1)^S \\times 1.M \\times 2^{E - 127}$.\n\n### ٢. هرمية الذاكرة وسرعات الوصول\n- **السجلات L0:** زمن وصول أقل من نانوثانية، متصلة مباشرة بمسار البيانات.\n- **ذاكرة الكاش L1/L2/L3 (SRAM):** خلايا قلابات سريعة لا تحتاج إنعاشاً دورياً.\n- **الذاكرة الرئيسية (DRAM):** خلايا مكثف وترانزستور تحتاج إنعاشاً دورياً مستمراً.\n- **وسائط التخزين الثانوية:** أقراص NVMe SSD والتخزين غير المتطاير.",
          formulas: [
          {
                    "labelEn": "IEEE 754 Floating-Point Value",
                    "labelAr": "قيمة عدد الفاصلة العائمة",
                    "latex": "V = (-1)^s \\times (1 + M) \\times 2^{E - 127}"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 30-65"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "IEEE 754 Floating-Point Standard & Memory Hierarchy Organization",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "معيار الفاصلة العائمة IEEE 754 وتنظيم هرمية الذاكرة",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C2-L2",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch2_l2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "IEEE 754 Floating-Point Standard & Memory Hierarchy Organization",
            titleAr: "ورقة عمل تقييمية وزارية: " + "معيار الفاصلة العائمة IEEE 754 وتنظيم هرمية الذاكرة",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch2_l2_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "IEEE 754 Floating-Point Standard & Memory Hierarchy Organization",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "معيار الفاصلة العائمة IEEE 754 وتنظيم هرمية الذاكرة",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch2_l2_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "IEEE 754 Floating-Point Standard & Memory Hierarchy Organization",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "معيار الفاصلة العائمة IEEE 754 وتنظيم هرمية الذاكرة",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_logic_circuit",
            titleEn: "Number System & IEEE 754 Representation Tool",
            titleAr: "أداة تمثيل الأنظمة العددية والفاصلة العائمة IEEE 754",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        }
      ],
      databank: egBacCsInformaticsCh2Databank,
      solvedExamples: egBacCsInformaticsCh2SolvedExamples,
      exerciseProblems: egBacCsInformaticsCh2Exercises
    },
    {
      id: "egbac_cs_ch3",
      chapterNumber: 3,
      titleEn: "Unit 3: Linear & Non-Linear Data Structures: Stacks, Queues, Trees",
      titleAr: "الباب الثالث: هياكل البيانات الخطية وغير الخطية: المكدسات والصفوف والأشجار",
      descriptionEn: "Arrays, singly/doubly linked lists, Stack (LIFO), Queue (FIFO), Binary Search Trees (BST), AVL balanced trees, and hash tables with collision resolution.",
      descriptionAr: "المصفوفات، القوائم المترابطة، المكدس (LIFO)، الطابور (FIFO)، أشجار البحث الثنائية (BST)، أشجار AVL المتوازنة، وجداول التجزئة وتفادي التصادم.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_cs_ch3_l1",
          titleEn: "Linear Data Structures: Dynamic Arrays, Linked Lists, Stacks & Queues",
          titleAr: "هياكل البيانات الخطية: المصفوفات الديناميكية، القوائم، المكدس والرتل",
          summaryEn: "Array contiguous allocation, linked list pointer manipulation, Stack LIFO (Push, Pop, Peek), Queue FIFO (Enqueue, Dequeue), and circular queues.",
          summaryAr: "تخصيص الذاكرة المتجاور، مؤشرات القوائم المترابطة، عمليات المكدس، وعمليات الطابور الدائري.",
          theoryContentEn: "### 1. Dynamic Arrays vs. Linked Lists\n- **Arrays:** Contiguous memory blocks; $O(1)$ random access by index; $O(N)$ insertion/deletion requiring element shifting.\n- **Linked Lists:** Nodes connected via pointers; $O(1)$ head insertion; $O(N)$ sequential traversal.\n\n### 2. Stacks & Queues\n- **Stack (LIFO - Last In, First Out):**\n  - Operations: `push(item)`, `pop()`, `peek()`, `isEmpty()` — all $O(1)$.\n  - Applications: Function call stack frames, parenthesis balancing, undo/redo mechanisms.\n- **Queue (FIFO - First In, First Out):**\n  - Operations: `enqueue(item)`, `dequeue()`, `front()` — all $O(1)$ in circular buffers.\n  - Applications: CPU process scheduling, print queues, BFS graph traversal.",
          theoryContentAr: "### ١. المصفوفات الديناميكية مقابل القوائم المترابطة\n- **المصفوفات:** كتل ذاكرة متجاورة؛ وصول عشوائي بالدليل في $O(1)$؛ إدراج وحذف في $O(N)$ لتطلب إزاحة العناصر.\n- **القوائم المترابطة:** عقد مرتبطة بمؤشرات؛ إدراج عند الرأس في $O(1)$؛ تتبع تسلسلي في $O(N)$.\n\n### ٢. المكدسات والصفوف\n- **المكدس (Stack - LIFO):**\n  - العمليات: `push`, `pop`, `peek` — جميعها بزمن ثابت $O(1)$.\n  - التطبيقات: مكدس استدعاء الدوال، موازنة الأقواس، التراجع والتقدم.\n- **الرتل أو الطابور (Queue - FIFO):**\n  - العمليات: `enqueue`, `dequeue` — بزمن ثابت $O(1)$ في الطابور الدائري.\n  - التطبيقات: جدولة المعالج، طوابير الطباعة، والبحث بالاتساع أولاً (BFS).",
          formulas: [
          {
                    "labelEn": "Stack Pointer State",
                    "labelAr": "حالة مؤشر المكدس بعد الإدراج",
                    "latex": "\\text{SP} \\leftarrow \\text{SP} + 1, \\quad \\text{Stack}[\\text{SP}] = x"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 55-90"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Linear Data Structures: Dynamic Arrays, Linked Lists, Stacks & Queues",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "هياكل البيانات الخطية: المصفوفات الديناميكية، القوائم، المكدس والرتل",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C3-L1",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch3_l1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Linear Data Structures: Dynamic Arrays, Linked Lists, Stacks & Queues",
            titleAr: "ورقة عمل تقييمية وزارية: " + "هياكل البيانات الخطية: المصفوفات الديناميكية، القوائم، المكدس والرتل",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch3_l1_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Linear Data Structures: Dynamic Arrays, Linked Lists, Stacks & Queues",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "هياكل البيانات الخطية: المصفوفات الديناميكية، القوائم، المكدس والرتل",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch3_l1_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Linear Data Structures: Dynamic Arrays, Linked Lists, Stacks & Queues",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "هياكل البيانات الخطية: المصفوفات الديناميكية، القوائم، المكدس والرتل",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_algorithm_visualizer",
            titleEn: "Data Structures Interactive Visualizer",
            titleAr: "المحاكي البصري التفاعلي لهياكل البيانات والأشجار",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        },
        {
          id: "egbac_cs_ch3_l2",
          titleEn: "Non-Linear Structures: Binary Search Trees, AVL Trees & Hash Maps",
          titleAr: "الهياكل غير الخطية: أشجار البحث الثنائية، أشجار AVL المتوازنة وجداول التجزئة",
          summaryEn: "BST invariant, in-order/pre-order/post-order traversals, AVL height balance factor, tree rotations, hash functions, and collision resolution (chaining vs open addressing).",
          summaryAr: "خاصية شجرة البحث الثنائية، مسارات التجوال الثلاثة، معامل توازن AVL ودوران الشجرة، ودوال التجزئة ومعالجة التصادم.",
          theoryContentEn: "### 1. Binary Search Tree (BST) & Traversals\n- **BST Invariant:** For every node $X$: all keys in left subtree $< X.key$, and all keys in right subtree $> X.key$.\n- **Traversals:**\n  - *In-Order (Left, Root, Right):* Visits keys in sorted ascending order.\n  - *Pre-Order (Root, Left, Right):* Used for tree serialization.\n  - *Post-Order (Left, Right, Root):* Used for bottom-up node deletion.\n\n### 2. AVL Balanced Trees & Hash Maps\n- **AVL Balance Factor:** $BF(Node) = Height(Left) - Height(Right) \\in \\{-1, 0, +1\\}$.\n- Self-balancing via Single (LL, RR) or Double (LR, RL) rotations ensures $O(\\log N)$ worst-case search.\n- **Hash Table:** Maps key to bucket index via $h(k) = k \\pmod M$. Average $O(1)$ lookup.",
          theoryContentAr: "### ١. شجرة البحث الثنائية (BST) وطرق التجوال\n- **خاصية BST:** لكل عقدة $X$: مفاتيح الشجرة الفرعية اليسرى أصغر، واليمنى أكبر.\n- **طرق التجوال (Traversals):**\n  - *تجوال وسطي (In-Order):* يزور المفاتيح بترتيب تصاعدي مرتب.\n  - *تجوال أمامي (Pre-Order):* يستخدم لنسخ الشجرة وحفظ بنيتها.\n  - *تجوال خلفي (Post-Order):* يستخدم لحذف العقد وحساب أحجام الأدلة.\n\n### ٢. أشجار AVL وجداول التجزئة (Hash Tables)\n- **معامل توازن AVL:** $BF = Height(Left) - Height(Right) \\in \\{-1, 0, +1\\}$.\n- إعادة التوازن عبر الدوران يضمن بحثاً في أسوأ الحالات بزمن $O(\\log N)$.\n- **جدول التجزئة:** يعين المفتاح إلى دليل عبر $h(k) = k \\pmod M$؛ وصول بمتوسط زمن $O(1)$.",
          formulas: [
          {
                    "labelEn": "AVL Balance Factor",
                    "labelAr": "معامل توازن عقدة AVL",
                    "latex": "BF(u) = h(u_{\\text{left}}) - h(u_{\\text{right}}) \\in \\{-1, 0, 1\\}"
          },
          {
                    "labelEn": "Division Hash Function",
                    "labelAr": "دالة التجزئة بطريقة القسمة",
                    "latex": "h(k) = k \\pmod m"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 55-90"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Non-Linear Structures: Binary Search Trees, AVL Trees & Hash Maps",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "الهياكل غير الخطية: أشجار البحث الثنائية، أشجار AVL المتوازنة وجداول التجزئة",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C3-L2",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch3_l2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Non-Linear Structures: Binary Search Trees, AVL Trees & Hash Maps",
            titleAr: "ورقة عمل تقييمية وزارية: " + "الهياكل غير الخطية: أشجار البحث الثنائية، أشجار AVL المتوازنة وجداول التجزئة",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch3_l2_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Non-Linear Structures: Binary Search Trees, AVL Trees & Hash Maps",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "الهياكل غير الخطية: أشجار البحث الثنائية، أشجار AVL المتوازنة وجداول التجزئة",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch3_l2_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Non-Linear Structures: Binary Search Trees, AVL Trees & Hash Maps",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "الهياكل غير الخطية: أشجار البحث الثنائية، أشجار AVL المتوازنة وجداول التجزئة",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_algorithm_visualizer",
            titleEn: "Data Structures Interactive Visualizer",
            titleAr: "المحاكي البصري التفاعلي لهياكل البيانات والأشجار",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        }
      ],
      databank: egBacCsInformaticsCh3Databank,
      solvedExamples: egBacCsInformaticsCh3SolvedExamples,
      exerciseProblems: egBacCsInformaticsCh3Exercises
    },
    {
      id: "egbac_cs_ch4",
      chapterNumber: 4,
      titleEn: "Unit 4: Algorithms, Pseudocode & Computational Complexity",
      titleAr: "الباب الرابع: الخوارزميات، الكود الزائف والتعقيد الحسابي",
      descriptionEn: "Big-O, Big-Omega, Big-Theta notation, linear vs binary search, sorting algorithms (Bubble, Insertion, MergeSort, QuickSort), divide-and-conquer, and recursion.",
      descriptionAr: "تحليل التعقيد الزماني والمكاني، البحث الخطي والثنائي، خوارزميات الترتيب، مبدأ فرّق تسد، والتعاود الحسابي (Recursion).",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_cs_ch4_l1",
          titleEn: "Asymptotic Analysis & Formal Complexity Classes",
          titleAr: "التحليل التقاربي ورتب التعقيد الحسابي الرسمية",
          summaryEn: "Big-O upper bounds, Omega lower bounds, Theta tight bounds, time vs space tradeoffs, and best/worst/average case evaluations.",
          summaryAr: "رتبة Big-O للحد الأعلى، وأوميجا للحد الأدنى، وثيتا للحد الدقيق، وموازنة الزمن والمساحة في الذاكرة.",
          theoryContentEn: "### 1. Asymptotic Notations\n- **Big-O ($O(g(n))$):** Upper bound. $f(n) \\le c \\cdot g(n)$ for all $n \\ge n_0$. Represents worst-case ceiling.\n- **Big-Omega ($\\Omega(g(n))$):** Lower bound. $f(n) \\ge c \\cdot g(n)$ for all $n \\ge n_0$.\n- **Big-Theta ($\\Theta(g(n))$):** Tight bound. $c_1 g(n) \\le f(n) \\le c_2 g(n)$.\n\n### 2. Common Complexity Orders\n- $O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(2^n) < O(n!)$\n- **Master Theorem:** For recurrences $T(n) = aT(n/b) + f(n)$.",
          theoryContentAr: "### ١. الترميز التقاربي الحسابي\n- **رمز Big-O ($O(g(n))$):** الحد الأعلى للنمو الزمني؛ يمثل أقصى استهلاك في أسوأ الحالات.\n- **رمز أوميجا ($\\Omega(g(n))$):** الحد الأدنى؛ يمثل أقل زمن ممكن للتنفيذ.\n- **رمز ثيتا ($\\Theta(g(n))$):** الحد المطابق والدقيق لسلوك الخوارزمية.\n\n### ٢. التدرج المعياري لرتب التعقيد\n- $O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(2^n) < O(n!)$\n- **النظرية الرئيسية (Master Theorem):** لحل العلاقات التعاودية $T(n) = aT(n/b) + f(n)$.",
          formulas: [
          {
                    "labelEn": "Big-O Formal Definition",
                    "labelAr": "التعريف الرياضي لـ Big-O",
                    "latex": "f(n) = O(g(n)) \\iff \\exists c > 0, n_0 > 0 : \\forall n \\ge n_0, f(n) \\le c \\cdot g(n)"
          },
          {
                    "labelEn": "Master Theorem Recurrence",
                    "labelAr": "معادلة النظرية الرئيسية للتعاود",
                    "latex": "T(n) = a T\\left(\\frac{n}{b}\\right) + \\Theta(n^k \\log^p n)"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 80-115"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Asymptotic Analysis & Formal Complexity Classes",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "التحليل التقاربي ورتب التعقيد الحسابي الرسمية",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C4-L1",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch4_l1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Asymptotic Analysis & Formal Complexity Classes",
            titleAr: "ورقة عمل تقييمية وزارية: " + "التحليل التقاربي ورتب التعقيد الحسابي الرسمية",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch4_l1_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Asymptotic Analysis & Formal Complexity Classes",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "التحليل التقاربي ورتب التعقيد الحسابي الرسمية",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch4_l1_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Asymptotic Analysis & Formal Complexity Classes",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "التحليل التقاربي ورتب التعقيد الحسابي الرسمية",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_algorithm_visualizer",
            titleEn: "Sorting & Searching Visualizer",
            titleAr: "المحاكي البصري لخوارزميات الترتيب والبحث والمقارنة",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        },
        {
          id: "egbac_cs_ch4_l2",
          titleEn: "Searching & Sorting Paradigms: QuickSort, MergeSort & Binary Search",
          titleAr: "خوارزميات البحث والترتيب: الترتيب السريع والدمج والبحث الثنائي",
          summaryEn: "Binary search on sorted arrays ($O(\\log n)$), MergeSort divide-and-conquer ($O(n \\log n)$ guaranteed), and QuickSort partitioning.",
          summaryAr: "البحث الثنائي في القوائم المرتبة، والترتيب بالدمج، وخوارزمية الترتيب السريع واختيار المحور.",
          theoryContentEn: "### 1. Searching Algorithms\n- **Linear Search:** Sequential check from index 0 to $N-1$; $O(n)$ worst case; requires no sorting.\n- **Binary Search:** Repeatedly halves sorted search interval; $O(\\log n)$ comparisons.\n\n### 2. Sorting Algorithms Comparison\n- **Insertion Sort:** $O(n^2)$ worst; adaptive $O(n)$ on nearly-sorted data.\n- **Merge Sort:** Divide-and-conquer; stable; guaranteed $O(n \\log n)$ time; requires $O(n)$ auxiliary memory.\n- **QuickSort:** In-place partitioning around pivot; average $O(n \\log n)$; worst-case $O(n^2)$ with poor pivot selection.",
          theoryContentAr: "### ١. خوارزميات البحث\n- **البحث الخطي:** فحص تسلسلي من البداية؛ تعقيد $O(n)$؛ لا يشترط ترتيب البيانات.\n- **البحث الثنائي:** تنصيف متكرر لنطاق البحث في مصفوفة مرتبة؛ تعقيد $O(\\log n)$.\n\n### ٢. مقارنة خوارزميات الترتيب\n- **الترتيب بالإدراج (Insertion Sort):** $O(n^2)$؛ يتكيف مع البيانات شبه المرتبة في $O(n)$.\n- **الترتيب بالدمج (Merge Sort):** مستقر؛ يضمن زمناً قدره $O(n \\log n)$؛ يتطلب ذاكرة إضافية $O(n)$.\n- **الترتيب السريع (QuickSort):** تقسيم موضعي حول محور؛ متوسط $O(n \\log n)$؛ وأسوأ حالة $O(n^2)$.",
          formulas: [
          {
                    "labelEn": "Binary Search Recurrence",
                    "labelAr": "علاقة تعاود البحث الثنائي",
                    "latex": "T(n) = T(n/2) + O(1) \\implies T(n) = O(\\log n)"
          },
          {
                    "labelEn": "MergeSort Recurrence",
                    "labelAr": "علاقة تعاود الترتيب بالدمج",
                    "latex": "T(n) = 2T(n/2) + O(n) \\implies T(n) = O(n \\log n)"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 80-115"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Searching & Sorting Paradigms: QuickSort, MergeSort & Binary Search",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "خوارزميات البحث والترتيب: الترتيب السريع والدمج والبحث الثنائي",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C4-L2",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch4_l2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Searching & Sorting Paradigms: QuickSort, MergeSort & Binary Search",
            titleAr: "ورقة عمل تقييمية وزارية: " + "خوارزميات البحث والترتيب: الترتيب السريع والدمج والبحث الثنائي",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch4_l2_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Searching & Sorting Paradigms: QuickSort, MergeSort & Binary Search",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "خوارزميات البحث والترتيب: الترتيب السريع والدمج والبحث الثنائي",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch4_l2_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Searching & Sorting Paradigms: QuickSort, MergeSort & Binary Search",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "خوارزميات البحث والترتيب: الترتيب السريع والدمج والبحث الثنائي",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_algorithm_visualizer",
            titleEn: "Sorting & Searching Visualizer",
            titleAr: "المحاكي البصري لخوارزميات الترتيب والبحث والمقارنة",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        }
      ],
      databank: egBacCsInformaticsCh4Databank,
      solvedExamples: egBacCsInformaticsCh4SolvedExamples,
      exerciseProblems: egBacCsInformaticsCh4Exercises
    },
    {
      id: "egbac_cs_ch5",
      chapterNumber: 5,
      titleEn: "Unit 5: Structured & Object-Oriented Programming with Python",
      titleAr: "الباب الخامس: البرمجة الهيكلية والشيئية بلغة بايثون",
      descriptionEn: "Python control flow, functions, recursion, classes, object lifecycle, encapsulation, inheritance, polymorphism, abstract base classes, and exception handling.",
      descriptionAr: "مسار التحكم في بايثون، الدوال والتعاود، الفئات والكائنات، التغليف، الوراثة، تعدد الأشكال، الفئات التجريدية، ومعالجة الاستثناءات.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_cs_ch5_l1",
          titleEn: "Functional Decomposition, Recursion & Memory Scoping in Python",
          titleAr: "التقسيم الوظيفي، التعاود الحسابي ومستويات النطاق في بايثون",
          summaryEn: "Pure functions, parameter passing (call by object reference), recursive base cases, LEGB variable scope resolution, and lambda expressions.",
          summaryAr: "الدوال النقية، تمرير المعاملات بالإسناد، الحالات الأساسية للتعاود، نطاقات المتغيرات (LEGB)، وتعبيرات لامبدا.",
          theoryContentEn: "### 1. Function Execution & Parameter Passing\n- **Call by Object Reference:** Mutable objects (lists, dicts) are modified in-place; immutable types (ints, strings, tuples) create new bindings.\n- **LEGB Rule for Scoping:**\n  1. *Local:* Within current function block.\n  2. *Enclosing:* Outer nested function scope.\n  3. *Global:* Module-level namespace.\n  4. *Built-in:* Python pre-defined builtins (`len`, `range`, etc.).\n\n### 2. Recursion Principles\n- Must satisfy:\n  1. **Base Case:** Halts recursion without self-invocation.\n  2. **Recursive Step:** Progresses strictly toward the base condition.\n  3. **Call Stack Limit:** Prevents RecursionError via bounded depth.",
          theoryContentAr: "### ١. تنفيذ الدوال وتمرير المعاملات\n- **التمرير بإسناد الكائن:** الكائنات القابلة للتعديل (القوائم) تعدل في مكانها؛ غير القابلة (الأعداد والنصوص) تنشئ مراجع جديدة.\n- **قاعدة نطاق المتغيرات (LEGB):**\n  ١. *المحلي (Local):* داخل الدالة الحالية.\n  ٢. *الحاوي (Enclosing):* في الدوال الحاوية المتداخلة.\n  ٣. *العام (Global):* على مستوى الملف أو الوحدة.\n  ٤. *المدمج (Built-in):* الدوال المدمجة مسبقاً في لغة بايثون.\n\n### ٢. مبادئ التعاود البرمجي (Recursion)\n- يتطلب شرطين حاسمين:\n  ١. **الحالة الأساسية (Base Case):** توقف التعاود دون استدعاء ذاتي.\n  ٢. **الخطوة التعاودية:** تقريب المدخلات نحو الحالة الأساسية.\n  ٣. **حد مكدس الاستدعاء:** لتجنب فيض المكدس (Stack Overflow).",
          formulas: [
          {
                    "labelEn": "Factorial Recurrence Relation",
                    "labelAr": "علاقة مضروب العدد التعاودية",
                    "latex": "n! = \\begin{cases} 1 & \\text{if } n = 0 \\\\ n \\times (n-1)! & \\text{if } n > 0 \\end{cases}"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 105-140"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Functional Decomposition, Recursion & Memory Scoping in Python",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "التقسيم الوظيفي، التعاود الحسابي ومستويات النطاق في بايثون",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C5-L1",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch5_l1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Functional Decomposition, Recursion & Memory Scoping in Python",
            titleAr: "ورقة عمل تقييمية وزارية: " + "التقسيم الوظيفي، التعاود الحسابي ومستويات النطاق في بايثون",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch5_l1_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Functional Decomposition, Recursion & Memory Scoping in Python",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "التقسيم الوظيفي، التعاود الحسابي ومستويات النطاق في بايثون",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch5_l1_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Functional Decomposition, Recursion & Memory Scoping in Python",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "التقسيم الوظيفي، التعاود الحسابي ومستويات النطاق في بايثون",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_algorithm_visualizer",
            titleEn: "Python Code Execution & Object Model Trace",
            titleAr: "محلل تنفيذ أكواد بايثون وتتبع النموذج الشيئي",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        },
        {
          id: "egbac_cs_ch5_l2",
          titleEn: "Object-Oriented Programming: Encapsulation, Inheritance & Polymorphism",
          titleAr: "البرمجة كائنية التوجه: التغليف، الوراثة وتعدد الأشكال",
          summaryEn: "Class definition, constructors (`__init__`), private attributes (name mangling), subclassing (`super()`), method overriding, and polymorphism.",
          summaryAr: "تعريف الفئات، دوال البناء، الخصائص الخاصة، التوريث باستخدام super()، إعادة كتابة الدوال، والتعامل متعدد الأشكال.",
          theoryContentEn: "### 1. The Four Pillars of OOP\n- **Encapsulation:** Bundling data and methods within a class; protecting internal state via private attributes (`__attr`).\n- **Abstraction:** Hiding implementation complexity behind public interfaces and abstract methods.\n- **Inheritance:** Deriving child classes from a parent class to promote code reuse and hierarchical classification.\n- **Polymorphism:** Calling the same method signature on different object types with runtime dispatch.\n\n### 2. Python OOP Syntax & Dunder Methods\n```python\nclass BankAccount:\n    def __init__(self, owner: str, balance: float):\n        self.owner = owner\n        self.__balance = balance  # Private attribute\n\n    def deposit(self, amount: float):\n        if amount > 0:\n            self.__balance += amount\n\n    def get_balance(self) -> float:\n        return self.__balance\n```",
          theoryContentAr: "### ١. الأركان الأربعة للبرمجة كائنية التوجه (OOP)\n- **التغليف (Encapsulation):** جمع البيانات والدوال داخل الفئة وحماية المتغيرات الحساسة (`__attr`).\n- **التجريد (Abstraction):** إخفاء التفاصيل البرمجية المعقدة خلف واجهات استخدام بسيطة.\n- **الوراثة (Inheritance):** اشتقاق فئات فرعية من فئة أصلية لتعزيز إعادة استخدام الشيفرة.\n- **تعدد الأشكال (Polymorphism):** تنفيذ نفس اسم الدالة على كائنات مختلفة بسلوك مخصص لكل نوع.\n\n### ٢. نموذج الفئات ودوال البناء في بايثون\n```python\nclass BankAccount:\n    def __init__(self, owner: str, balance: float):\n        self.owner = owner\n        self.__balance = balance\n\n    def deposit(self, amount: float):\n        if amount > 0:\n            self.__balance += amount\n```",
          formulas: [
          {
                    "labelEn": "OOP Class Specialization",
                    "labelAr": "تخصيص الفئات في الوراثة",
                    "latex": "\\text{SubClass} \\subseteq \\text{SuperClass} \\implies f_{\\text{override}}(x) \\neq f_{\\text{base}}(x)"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 105-140"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Object-Oriented Programming: Encapsulation, Inheritance & Polymorphism",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "البرمجة كائنية التوجه: التغليف، الوراثة وتعدد الأشكال",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C5-L2",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch5_l2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Object-Oriented Programming: Encapsulation, Inheritance & Polymorphism",
            titleAr: "ورقة عمل تقييمية وزارية: " + "البرمجة كائنية التوجه: التغليف، الوراثة وتعدد الأشكال",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch5_l2_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Object-Oriented Programming: Encapsulation, Inheritance & Polymorphism",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "البرمجة كائنية التوجه: التغليف، الوراثة وتعدد الأشكال",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch5_l2_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Object-Oriented Programming: Encapsulation, Inheritance & Polymorphism",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "البرمجة كائنية التوجه: التغليف، الوراثة وتعدد الأشكال",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_algorithm_visualizer",
            titleEn: "Python Code Execution & Object Model Trace",
            titleAr: "محلل تنفيذ أكواد بايثون وتتبع النموذج الشيئي",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        }
      ],
      databank: egBacCsInformaticsCh5Databank,
      solvedExamples: egBacCsInformaticsCh5SolvedExamples,
      exerciseProblems: egBacCsInformaticsCh5Exercises
    },
    {
      id: "egbac_cs_ch6",
      chapterNumber: 6,
      titleEn: "Unit 6: Relational Databases, Normalization & Advanced SQL",
      titleAr: "الباب السادس: قواعد البيانات العلائقية والمعيارية ولغة الاستعلام SQL",
      descriptionEn: "Relational data model, primary and foreign keys, ERDs, normalization (1NF, 2NF, 3NF), SQL DDL/DML, JOIN operations, aggregation, indexing, and ACID transactions.",
      descriptionAr: "النموذج العلائقي، المفاتيح الأساسية والأجنبية، مخططات ERD، المعيارية، استعلامات SQL، عمليات الربط JOIN، والخصائص الأربع ACID للمعاملات.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_cs_ch6_l1",
          titleEn: "Relational Schema Design, ER Modeling & Normalization (1NF–3NF)",
          titleAr: "تصميم المخطط العلائقي، نمذجة ER والمعيارية (الأشكال المعيارية 1NF حتى 3NF)",
          summaryEn: "Entities, attributes, relationships (1:1, 1:N, M:N), primary/foreign keys, functional dependencies, and decomposing anomalies through 1NF, 2NF, and 3NF.",
          summaryAr: "الكيانات والعلاقات، المفاتيح الأساسية والأجنبية، الاعتماديات الوظيفية، ومعالجة عيوب التكرار عبر الأشكال المعيارية الثلاثة.",
          theoryContentEn: "### 1. Relational Database Concepts\n- **Relation (Table):** Set of tuples (rows) with defined attributes (columns).\n- **Primary Key (PK):** Unique, non-null identifier for each tuple.\n- **Foreign Key (FK):** Attribute in one relation referencing PK in another, enforcing referential integrity.\n\n### 2. Normalization Stages\n1. **1NF (First Normal Form):** All attribute values are atomic; no repeating groups.\n2. **2NF (Second Normal Form):** In 1NF + no partial functional dependency on composite primary key.\n3. **3NF (Third Normal Form):** In 2NF + no transitive dependencies ($A \\rightarrow B \\rightarrow C$).",
          theoryContentAr: "### ١. مفاهيم قواعد البيانات العلائقية\n- **الجدول (Relation):** مجموعة من الصفوف (السجلات) ذات الأعمدة (الحقول) المحددة.\n- **المفتاح الأساسي (PK):** حقل وحيد لا يقبل التكرار ولا القيم الفارغة لتمييز السجل.\n- **المفتاح الأجنبي (FK):** حقل يشير لمفتاح أساسي في جدول آخر لضمان التكامل المرجعي.\n\n### ٢. مراحل المعيارية وتفكيك الجداول\n١. **الشكل المعياري الأول (1NF):** كافة القيم ذرية غير قابلة للتجزئة ودون مجموعات مكررة.\n٢. **الشكل المعياري الثاني (2NF):** في 1NF مع خلو الجدول من أي اعتمادية جزئية على مفتاح مركب.\n٣. **الشكل المعياري الثالث (3NF):** في 2NF مع خلو الجدول من الاعتماديات المتعدية ($A \\rightarrow B \\rightarrow C$).",
          formulas: [
          {
                    "labelEn": "Functional Dependency",
                    "labelAr": "الاعتمادية الوظيفية",
                    "latex": "X \\rightarrow Y \\iff \\forall t_1, t_2: t_1[X] = t_2[X] \\implies t_1[Y] = t_2[Y]"
          },
          {
                    "labelEn": "Transitive Dependency Violation in 3NF",
                    "labelAr": "الاعتمادية المتعدية المحظورة في 3NF",
                    "latex": "X \\rightarrow Y \\land Y \\rightarrow Z \\implies X \\rightarrow Z \\; (Y \\not\\subset X, Y \\text{ not superkey})"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 130-165"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Relational Schema Design, ER Modeling & Normalization (1NF–3NF)",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "تصميم المخطط العلائقي، نمذجة ER والمعيارية (الأشكال المعيارية 1NF حتى 3NF)",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C6-L1",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch6_l1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Relational Schema Design, ER Modeling & Normalization (1NF–3NF)",
            titleAr: "ورقة عمل تقييمية وزارية: " + "تصميم المخطط العلائقي، نمذجة ER والمعيارية (الأشكال المعيارية 1NF حتى 3NF)",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch6_l1_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Relational Schema Design, ER Modeling & Normalization (1NF–3NF)",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "تصميم المخطط العلائقي، نمذجة ER والمعيارية (الأشكال المعيارية 1NF حتى 3NF)",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch6_l1_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Relational Schema Design, ER Modeling & Normalization (1NF–3NF)",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "تصميم المخطط العلائقي، نمذجة ER والمعيارية (الأشكال المعيارية 1NF حتى 3NF)",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_sql_sandbox",
            titleEn: "Interactive SQL Query Sandbox & Schema Visualizer",
            titleAr: "محرر ومختبر استعلامات SQL التفاعلي ومخططات الجداول",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        },
        {
          id: "egbac_cs_ch6_l2",
          titleEn: "SQL Queries, Joins, Aggregation & ACID Transaction Mechanics",
          titleAr: "استعلامات SQL وعمليات الربط والتجميع وخصائص معاملات ACID",
          summaryEn: "SELECT, WHERE, GROUP BY, HAVING, ORDER BY, INNER/LEFT/RIGHT JOINs, subqueries, B-tree indexes, and ACID guarantees.",
          summaryAr: "استعلامات التحديد والفرز والتجميع، أنواع الربط JOIN، الفهارس، ومبادئ المعاملات البنكية (الذرية، الاتساق، العزل، والاستدامة).",
          theoryContentEn: "### 1. SQL Query Structure & Execution Order\n```sql\nSELECT department_id, COUNT(*) AS emp_count, AVG(salary) AS avg_sal\nFROM employees\nWHERE hire_date >= '2020-01-01'\nGROUP BY department_id\nHAVING AVG(salary) > 50000\nORDER BY avg_sal DESC;\n```\n- *Logical Order:* FROM $\\rightarrow$ WHERE $\\rightarrow$ GROUP BY $\\rightarrow$ HAVING $\\rightarrow$ SELECT $\\rightarrow$ ORDER BY.\n\n### 2. Relational JOINs & ACID Guarantees\n- **INNER JOIN:** Returns matching rows in both tables.\n- **LEFT JOIN:** Returns all rows from left table and matched rows from right table (NULL otherwise).\n- **ACID Properties:**\n  - **Atomicity:** All operations in transaction succeed, or all roll back.\n  - **Consistency:** Database transitions only between valid states conforming to constraints.\n  - **Isolation:** Concurrent transactions execute without interfering.\n  - **Durability:** Committed transactions persist even across system crashes.",
          theoryContentAr: "### ١. بنية استعلامات SQL وترتيب التنفيذ المنطقي\n- ترتيب التنفيذ الداخلي للمحرك:\n  `FROM` $\\rightarrow$ `WHERE` $\\rightarrow$ `GROUP BY` $\\rightarrow$ `HAVING` $\\rightarrow$ `SELECT` $\\rightarrow$ `ORDER BY`.\n\n### ٢. عمليات الربط (JOINs) وخصائص ACID للمعاملات\n- **الربط الداخلي (INNER JOIN):** يعيد فقط السجلات المتطابقة في كلا الجدولين.\n- **الربط الأيسر (LEFT JOIN):** يعيد كافة سجلات الجدول الأيسر مع ما يطابقها من الأيمن.\n- **خصائص معاملات ACID:**\n  - **الذرية (Atomicity):** تنفيذ كافة خطوات المعاملة بنجاح أو التراجع التام (Rollback).\n  - **الاتساق (Consistency):** الحفاظ على سلامة قيود قاعدة البيانات قبل وبعد التنفيذ.\n  - **العزل (Isolation):** تنفيذ المعاملات المتزامنة دون تداخل في البيانات المشتركة.\n  - **الاستدامة (Durability):** ثبات البيانات المعتمدة نهائياً حتى عند انقطاع التيار الكهربائي.",
          formulas: [
          {
                    "labelEn": "Relational Join Cardinality",
                    "labelAr": "حجم الناتج لعملية الربط العلائقي",
                    "latex": "|R \\bowtie S| \\le |R| \\times |S|"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 130-165"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "SQL Queries, Joins, Aggregation & ACID Transaction Mechanics",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "استعلامات SQL وعمليات الربط والتجميع وخصائص معاملات ACID",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C6-L2",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch6_l2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "SQL Queries, Joins, Aggregation & ACID Transaction Mechanics",
            titleAr: "ورقة عمل تقييمية وزارية: " + "استعلامات SQL وعمليات الربط والتجميع وخصائص معاملات ACID",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch6_l2_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "SQL Queries, Joins, Aggregation & ACID Transaction Mechanics",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "استعلامات SQL وعمليات الربط والتجميع وخصائص معاملات ACID",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch6_l2_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "SQL Queries, Joins, Aggregation & ACID Transaction Mechanics",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "استعلامات SQL وعمليات الربط والتجميع وخصائص معاملات ACID",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_sql_sandbox",
            titleEn: "Interactive SQL Query Sandbox & Schema Visualizer",
            titleAr: "محرر ومختبر استعلامات SQL التفاعلي ومخططات الجداول",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        }
      ],
      databank: egBacCsInformaticsCh6Databank,
      solvedExamples: egBacCsInformaticsCh6SolvedExamples,
      exerciseProblems: egBacCsInformaticsCh6Exercises
    },
    {
      id: "egbac_cs_ch7",
      chapterNumber: 7,
      titleEn: "Unit 7: Full-Stack Web Technologies & Client-Server Architecture",
      titleAr: "الباب السابع: تقنيات الويب الشاملة ومعمارية العميل والخادم",
      descriptionEn: "Semantic HTML5, CSS Flexbox/Grid layouts, JavaScript ES6+ DOM manipulation, HTTP/HTTPS request-response cycles, REST APIs, and asynchronous fetch/async-await.",
      descriptionAr: "هيكلة HTML5 الدلالية، تنسيقات CSS المرنة والشبكية، التفاعل مع شجرة DOM بلغة جافاسكريبت، بروتوكولات HTTP/HTTPS، وواجهات البرمجة RESTful.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_cs_ch7_l1",
          titleEn: "Frontend Architecture: Semantic HTML5, Modern CSS & DOM Tree Interaction",
          titleAr: "معمارية الواجهات الأمامية: هيكلة HTML5 الدلالية وتنسيق CSS وشجرة DOM",
          summaryEn: "Semantic elements, CSS Box Model, Flexbox vs Grid, DOM node traversal, event bubbling/capturing, and event-driven programming.",
          summaryAr: "العناصر الدلالية، نموذج الصندوق في CSS، التخطيط الشبكي والمرن، شجرة DOM، وانتشار الأحداث (Event Bubbling).",
          theoryContentEn: "### 1. Semantic HTML5 & Modern Layouts\n- **Semantic Tags:** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` enhance SEO and screen reader accessibility.\n- **CSS Box Model:** Content $\\rightarrow$ Padding $\\rightarrow$ Border $\\rightarrow$ Margin.\n- **Layout Engines:**\n  - *Flexbox:* One-dimensional axis alignment (`justify-content`, `align-items`).\n  - *CSS Grid:* Two-dimensional row and column template layouts.\n\n### 2. DOM & Event Delegation\n- The Browser parses HTML into a hierarchical **Document Object Model (DOM)** tree.\n- **Event Flow:** Capturing phase $\\rightarrow$ Target phase $\\rightarrow$ Bubbling phase.\n- Event delegation attaches a single listener to a common ancestor to optimize memory.",
          theoryContentAr: "### ١. هيكلة HTML5 الدلالية وتنسيقات CSS الحديثة\n- **العناصر الدلالية:** توفر معنى واضحاً لبنية الصفحة وتدعم محركات البحث والوصولية.\n- **نموذج الصندوق (Box Model):** المحتوى الداخلي $\\rightarrow$ الحشوة (Padding) $\\rightarrow$ الإطار (Border) $\\rightarrow$ الهامش الخارجي (Margin).\n- **محركات التخطيط:**\n  - *Flexbox:* محاذاة العناصر في بعد واحد (صف أو عمود).\n  - *CSS Grid:* تخطيط ثنائي الأبعاد في شبكة من الصفوف والأعمدة.\n\n### ٢. شجرة كائنات المستند (DOM) وتدفق الأحداث\n- يقوم المتصفح ببناء شجرة كائنات هيكلية تمثل كافة وسوم وعناصر الصفحة.\n- **مراحل الحدث:** مرحلة الالتقاط (Capture) $\\rightarrow$ الهدف $\\rightarrow$ مرحلة الفقاعة (Bubbling).\n- تفويض الأحداث يتيح مراقبة العناصر عبر عنصر أب مشترك لتوفير استهلاك الذاكرة.",
          formulas: [
          {
                    "labelEn": "Total Box Width Formula",
                    "labelAr": "عرض العنصر الإجمالي في نموذج الصندوق",
                    "latex": "W_{\\text{total}} = \\text{width} + 2(\\text{padding} + \\text{border} + \\text{margin})"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 155-190"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Frontend Architecture: Semantic HTML5, Modern CSS & DOM Tree Interaction",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "معمارية الواجهات الأمامية: هيكلة HTML5 الدلالية وتنسيق CSS وشجرة DOM",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C7-L1",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch7_l1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Frontend Architecture: Semantic HTML5, Modern CSS & DOM Tree Interaction",
            titleAr: "ورقة عمل تقييمية وزارية: " + "معمارية الواجهات الأمامية: هيكلة HTML5 الدلالية وتنسيق CSS وشجرة DOM",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch7_l1_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Frontend Architecture: Semantic HTML5, Modern CSS & DOM Tree Interaction",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "معمارية الواجهات الأمامية: هيكلة HTML5 الدلالية وتنسيق CSS وشجرة DOM",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch7_l1_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Frontend Architecture: Semantic HTML5, Modern CSS & DOM Tree Interaction",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "معمارية الواجهات الأمامية: هيكلة HTML5 الدلالية وتنسيق CSS وشجرة DOM",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_sql_sandbox",
            titleEn: "Web Architecture & API Request Simulator",
            titleAr: "محاكي طلبات الويب وواجهات برمجة التطبيقات RESTful",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        },
        {
          id: "egbac_cs_ch7_l2",
          titleEn: "Client-Server Communication, HTTP/S Protocol & RESTful API Consumption",
          titleAr: "الاتصال بين العميل والخادم، بروتوكول HTTP/S واستهلاك واجهات REST",
          summaryEn: "HTTP verbs (GET, POST, PUT, DELETE), status codes (200, 404, 500), TLS encryption handshake, JSON payloads, and async/await fetch API.",
          summaryAr: "أفعال بروتوكول HTTP، رموز الحالة، تشفير اتصالات TLS، تبادل بيانات JSON، والتعامل مع الدوال غير التزامنية (async/await).",
          theoryContentEn: "### 1. HTTP/HTTPS Protocol & Methods\n- **Stateless Request-Response:** Client sends request headers + body; server responds with status code + data.\n- **Core HTTP Verbs:**\n  - `GET`: Safe, idempotent retrieval of resource.\n  - `POST`: Creates a new resource on server.\n  - `PUT` / `PATCH`: Updates existing resource.\n  - `DELETE`: Removes resource.\n- **Status Codes:** `2xx` (Success), `3xx` (Redirection), `4xx` (Client Error, e.g. 404 Not Found), `5xx` (Server Error).\n\n### 2. Asynchronous API Consumption in JavaScript\n```javascript\nasync function fetchUserData(userId) {\n  try {\n    const res = await fetch(`https://api.example.com/users/${userId}`);\n    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error('Fetch failed:', err);\n  }\n}\n```",
          theoryContentAr: "### ١. بروتوكول HTTP/HTTPS ورموز الحالة\n- **طبيعة البروتوكول عديم الحالة (Stateless):** يرسل العميل الترويسات ومحتوى الطلب؛ ويرد الخادم برمز الحالة والبيانات.\n- **أفعال HTTP الأساسية:**\n  - `GET`: جلب البيانات بأمان دون تعديل على الخادم.\n  - `POST`: إنشاء مورد جديد.\n  - `PUT` / `PATCH`: تعديل وتحديث مورد قائم.\n  - `DELETE`: حذف المورد.\n- **رموز الحالة:** `200` (نجاح)، `404` (غير موجود)، `500` (خطأ في الخادم).\n\n### ٢. استدعاء واجهات البرمجة غير التزامنية في جافاسكريبت\n- استخدام `async/await` و `fetch` للتعامل مع الوعود (Promises) دون حظر مسار التنفيذ الرئيسي في المتصفح.",
          formulas: [
          {
                    "labelEn": "Round-Trip Latency",
                    "labelAr": "زمن الذهاب والعودة للطلب عبر الشبكة",
                    "latex": "\\text{RTT} = t_{\\text{response}} - t_{\\text{request}}"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 155-190"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Client-Server Communication, HTTP/S Protocol & RESTful API Consumption",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "الاتصال بين العميل والخادم، بروتوكول HTTP/S واستهلاك واجهات REST",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C7-L2",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch7_l2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Client-Server Communication, HTTP/S Protocol & RESTful API Consumption",
            titleAr: "ورقة عمل تقييمية وزارية: " + "الاتصال بين العميل والخادم، بروتوكول HTTP/S واستهلاك واجهات REST",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch7_l2_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Client-Server Communication, HTTP/S Protocol & RESTful API Consumption",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "الاتصال بين العميل والخادم، بروتوكول HTTP/S واستهلاك واجهات REST",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch7_l2_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Client-Server Communication, HTTP/S Protocol & RESTful API Consumption",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "الاتصال بين العميل والخادم، بروتوكول HTTP/S واستهلاك واجهات REST",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_sql_sandbox",
            titleEn: "Web Architecture & API Request Simulator",
            titleAr: "محاكي طلبات الويب وواجهات برمجة التطبيقات RESTful",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        }
      ],
      databank: egBacCsInformaticsCh7Databank,
      solvedExamples: egBacCsInformaticsCh7SolvedExamples,
      exerciseProblems: egBacCsInformaticsCh7Exercises
    },
    {
      id: "egbac_cs_ch8",
      chapterNumber: 8,
      titleEn: "Unit 8: Computer Networking, OSI/TCP-IP Protocols & Routing",
      titleAr: "الباب الثامن: شبكات الحاسب، بروتوكولات OSI/TCP-IP والتوجيه الشبكي",
      descriptionEn: "OSI 7-layer and TCP/IP 4-layer architectures, MAC vs IP addressing, IPv4 subnetting (CIDR), TCP reliable delivery (3-way handshake) vs UDP, and routing protocols.",
      descriptionAr: "معمارية طبقات OSI السبع و TCP/IP، عناوين MAC و IP، تقسيم الشبكات الفرعية IPv4 وحسابات CIDR، وبروتوكولات التوجيه ونقل البيانات.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_cs_ch8_l1",
          titleEn: "Network Architecture Models: OSI 7-Layer & TCP/IP Protocol Stack",
          titleAr: "نماذج المعمارية الشبكية: طبقات OSI السبع ومكدس بروتوكولات TCP/IP",
          summaryEn: "Encapsulation and decapsulation, Physical, Data Link, Network, Transport, Session, Presentation, and Application layer responsibilities.",
          summaryAr: "تغليف وفك تغليف حزم البيانات، ووظائف طبقات الربط، الشبكة، النقل، والتطبيقات.",
          theoryContentEn: "### 1. OSI 7-Layer Reference Model\n1. **Physical:** Transmission of raw bits over physical media (voltage, optical fiber, RF).\n2. **Data Link:** Framing, MAC physical addressing, CSMA/CD, error detection (CRC).\n3. **Network:** Logical IP addressing, packet forwarding, routing (OSPF, BGP).\n4. **Transport:** End-to-end process-to-process delivery, flow control, segmenting (TCP, UDP).\n5. **Session:** Dialog control and connection maintenance.\n6. **Presentation:** Data formatting, compression, encryption/decryption (TLS).\n7. **Application:** User interface network services (HTTP, DNS, SMTP, FTP).\n\n### 2. TCP vs. UDP Transport Protocols\n- **TCP (Transmission Control Protocol):** Connection-oriented; reliable; 3-way handshake (SYN, SYN-ACK, ACK); guarantees in-order packet delivery via sequence numbers and retransmissions.\n- **UDP (User Datagram Protocol):** Connectionless; unreliable; lightweight; ideal for real-time video streaming, DNS queries, and online gaming.",
          theoryContentAr: "### ١. طبقات نموذج OSI السبع ومسؤولياتها\n١. **الفيزيائية (Physical):** نقل البتات الخام عبر الوسائط السلكية واللاسلكية.\n٢. **ربط البيانات (Data Link):** تأطير البيانات، عناوين MAC الفيزيائية، واكتشاف الأخطاء (CRC).\n٣. **الشبكة (Network):** العنونة المنطقية IP وتوجيه الحزم بين الشبكات.\n٤. **النقل (Transport):** النقل بين العمليات وضبط التدفق (TCP/UDP).\n٥. **الجلسة (Session):** إدارة وفتح وإغلاق جلسات الاتصال.\n٦. **التقديم (Presentation):** تنسيق وضغط وتشفير البيانات (TLS).\n٧. **التطبيقات (Application):** بروتوكولات الخدمات المباشرة (HTTP, DNS, SMTP).\n\n### ٢. المقارنة بين بروتوكولي TCP و UDP\n- **بروتوكول TCP:** موجه بالاتصال؛ موثوق؛ مصافحة ثلاثية (SYN, SYN-ACK, ACK)؛ يضمن وصول الحزم مرتبة.\n- **بروتوكول UDP:** غير موجه بالاتصال؛ خفيف وسريع دون تأكيد استلام؛ مثالي للبث المباشر والألعاب.",
          formulas: [
          {
                    "labelEn": "Bandwidth-Delay Product",
                    "labelAr": "حاصل ضرب النطاق الترددي في زمن التأخير",
                    "latex": "\\text{BDP} = \\text{Bandwidth} \\times \\text{RTT}"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 180-215"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Network Architecture Models: OSI 7-Layer & TCP/IP Protocol Stack",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "نماذج المعمارية الشبكية: طبقات OSI السبع ومكدس بروتوكولات TCP/IP",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C8-L1",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch8_l1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Network Architecture Models: OSI 7-Layer & TCP/IP Protocol Stack",
            titleAr: "ورقة عمل تقييمية وزارية: " + "نماذج المعمارية الشبكية: طبقات OSI السبع ومكدس بروتوكولات TCP/IP",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch8_l1_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Network Architecture Models: OSI 7-Layer & TCP/IP Protocol Stack",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "نماذج المعمارية الشبكية: طبقات OSI السبع ومكدس بروتوكولات TCP/IP",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch8_l1_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Network Architecture Models: OSI 7-Layer & TCP/IP Protocol Stack",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "نماذج المعمارية الشبكية: طبقات OSI السبع ومكدس بروتوكولات TCP/IP",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_network_subnet",
            titleEn: "IPv4 Subnetting & CIDR Network Calculator",
            titleAr: "حاسبة ومحاكي تقسيم الشبكات الفرعية IPv4 وبروتوكولات CIDR",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        },
        {
          id: "egbac_cs_ch8_l2",
          titleEn: "IPv4 Subnetting, CIDR Notation & Routing Table Computation",
          titleAr: "تقسيم الشبكات الفرعية IPv4 وترميز CIDR وحساب جداول التوجيه",
          summaryEn: "IPv4 32-bit dotted-decimal structure, subnet masks, calculating Network ID, Broadcast ID, usable host range ($2^{32-prefix}-2$), and CIDR slicing.",
          summaryAr: "بنية عناوين IPv4، أقنعة الشبكة، حساب عنوان الشبكة والبث الموجه، وعدد المضيفين المتاحين في كل شبكة فرعية.",
          theoryContentEn: "### 1. IPv4 Addressing & CIDR Subnetting\n- An IPv4 address comprises 32 bits divided into **Network ID** and **Host ID**.\n- **CIDR Prefix (/N):** Indicates the first $N$ bits belong to the network portion.\n- **Subnet Formulas for Prefix /P:**\n  - Host bits: $H = 32 - P$.\n  - Total IP addresses: $2^H$.\n  - Usable host addresses: $2^H - 2$ (excluding Network ID and Broadcast ID).\n\n### 2. Worked Example: 192.168.10.0 /26\n- Prefix $/26 \\implies$ Host bits $H = 32 - 26 = 6$.\n- Usable hosts: $2^6 - 2 = 64 - 2 = 62$ hosts per subnet.\n- Subnet Mask: $255.255.255.192$ (Binary: $11111111.11111111.11111111.11000000$).\n- Block size: $256 - 192 = 64$.\n- Subnet 1: `192.168.10.0` to `192.168.10.63` (Hosts: .1 to .62, Broadcast: .63).",
          theoryContentAr: "### ١. عنونة IPv4 وتقسيم الشبكات الفرعية بترميز CIDR\n- يتكون عنوان IPv4 من 32 بتاً مقسمة بين **معرف الشبكة** و**معرف الجهاز المضيف**.\n- **ترميز CIDR (/N):** يحدد أن أول $N$ بت مخصصة للشبكة.\n- **قوانين الحساب للبادئة /P:**\n  - بتات المضيف: $H = 32 - P$.\n  - إجمالي العناوين: $2^H$.\n  - العناوين القابلة للاستخدام: $2^H - 2$ (باستثناء عنوان الشبكة وعنوان البث العام).\n\n### ٢. مثال تطبيقي: شبكة 192.168.10.0/26\n- البادئة $/26 \\implies$ بتات المضيف $H = 32 - 26 = 6$.\n- الأجهزة المتاحة: $2^6 - 2 = 62$ جهازاً.\n- قناع الشبكة: $255.255.255.192$.\n- النطاق للشبكة الفرعية الأولى: من `.1` حتى `.62`، وعنوان البث هو `.63`.",
          formulas: [
          {
                    "labelEn": "Usable Hosts in Subnet",
                    "labelAr": "عدد الأجهزة الصالحة في الشبكة الفرعية",
                    "latex": "N_{\\text{hosts}} = 2^{32 - P} - 2"
          },
          {
                    "labelEn": "Subnet Network ID Extraction",
                    "labelAr": "استخراج عنوان الشبكة بعملية AND المنطقية",
                    "latex": "\\text{NetID} = \\text{IP} \\;\\&\\; \\text{SubnetMask}"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 180-215"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "IPv4 Subnetting, CIDR Notation & Routing Table Computation",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "تقسيم الشبكات الفرعية IPv4 وترميز CIDR وحساب جداول التوجيه",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C8-L2",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch8_l2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "IPv4 Subnetting, CIDR Notation & Routing Table Computation",
            titleAr: "ورقة عمل تقييمية وزارية: " + "تقسيم الشبكات الفرعية IPv4 وترميز CIDR وحساب جداول التوجيه",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch8_l2_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "IPv4 Subnetting, CIDR Notation & Routing Table Computation",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "تقسيم الشبكات الفرعية IPv4 وترميز CIDR وحساب جداول التوجيه",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch8_l2_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "IPv4 Subnetting, CIDR Notation & Routing Table Computation",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "تقسيم الشبكات الفرعية IPv4 وترميز CIDR وحساب جداول التوجيه",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_network_subnet",
            titleEn: "IPv4 Subnetting & CIDR Network Calculator",
            titleAr: "حاسبة ومحاكي تقسيم الشبكات الفرعية IPv4 وبروتوكولات CIDR",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        }
      ],
      databank: egBacCsInformaticsCh8Databank,
      solvedExamples: egBacCsInformaticsCh8SolvedExamples,
      exerciseProblems: egBacCsInformaticsCh8Exercises
    },
    {
      id: "egbac_cs_ch9",
      chapterNumber: 9,
      titleEn: "Unit 9: Cybersecurity, Cryptography & Threat Prevention",
      titleAr: "الباب التاسع: الأمن السيبراني وعلم التشفير والحماية من التهديدات",
      descriptionEn: "CIA triad, symmetric vs asymmetric encryption (AES, RSA), cryptographic hash functions (SHA-256), digital signatures, public key infrastructure (PKI), and threat defense.",
      descriptionAr: "ثالوث أمن المعلومات CIA، التشفير المتماثل وغير المتماثل، دوال التجزئة الرقمية، التوقيعات والشهادات الرقمية، وسبل الحماية من الهجمات السيبرانية.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_cs_ch9_l1",
          titleEn: "Cryptographic Foundations: Symmetric, Asymmetric Ciphers & Hashing",
          titleAr: "أسس التشفير: التشفير المتماثل وغير المتماثل ودوال التجزئة الرقمية",
          summaryEn: "Symmetric shared-key ciphers (AES), asymmetric key pairs (RSA public/private keys), mathematical foundations (modular arithmetic), and SHA-256 collision resistance.",
          summaryAr: "التشفير بالمفتاح المشترك (AES)، التشفير بمفتاحين عام وخاص (RSA)، الحساب النمطي، وخصائص دوال التجزئة المقاومة للتصادم.",
          theoryContentEn: "### 1. The CIA Security Triad\n- **Confidentiality:** Preventing unauthorized disclosure of information (achieved via Encryption).\n- **Integrity:** Guaranteeing data has not been altered or tampered with (achieved via Hashing and Signatures).\n- **Availability:** Ensuring timely and reliable access to systems for authorized users (mitigating DDoS).\n\n### 2. Symmetric vs. Asymmetric Encryption\n- **Symmetric Encryption (AES-256):**\n  - Same secret key used for encryption and decryption.\n  - Ultra-fast; suitable for bulk data transfer. Key distribution problem.\n- **Asymmetric Encryption (RSA, ECC):**\n  - Public key encrypts; corresponding Private key decrypts.\n  - Solves key distribution; slower computation based on prime factorization.\n- **Cryptographic Hash Functions (SHA-256):**\n  - One-way deterministic mapping; fixed 256-bit digest; avalanche effect; collision resistant.",
          theoryContentAr: "### ١. ثالوث أمن المعلومات (CIA Triad)\n- **السرية (Confidentiality):** منع الاطلاع غير المصرح به على البيانات (يتحقق بالتشفير).\n- **السلامة (Integrity):** ضمان عدم تحريف أو تعديل محتوى البيانات (يتحقق بدوال التجزئة والتوقيع الرقمي).\n- **التوافر (Availability):** ضمان بقاء الخدمات متاحة للمستخدمين المصرح لهم دون انقطاع.\n\n### ٢. التشفير المتماثل وغير المتماثل ودوال التجزئة\n- **التشفير المتماثل (AES-256):** مفتاح سري واحد للتشفير وفك التشفير؛ فائق السرعة لمعالجة البيانات الضخمة.\n- **التشفير غير المتماثل (RSA):** زوج من المفاتيح (مفتاح عام للتشفير ومفتاح خاص لفك التشفير).\n- **دوال التجزئة المشفرة (SHA-256):** دالة أحادية الاتجاه تنتج بصمة رقمية ثابتة بطول 256 بت وتتميز بظاهرة الانهيار الثلجي (Avalanche Effect).",
          formulas: [
          {
                    "labelEn": "RSA Encryption & Decryption",
                    "labelAr": "معادلة التشفير وفك التشفير في خوارزمية RSA",
                    "latex": "C = M^e \\pmod n, \\quad M = C^d \\pmod n"
          },
          {
                    "labelEn": "Cryptographic Hash Property",
                    "labelAr": "خاصية الاتجاه الواحد لدوال التجزئة",
                    "latex": "H(M) = h \\not\\implies M = H^{-1}(h)"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 205-240"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Cryptographic Foundations: Symmetric, Asymmetric Ciphers & Hashing",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "أسس التشفير: التشفير المتماثل وغير المتماثل ودوال التجزئة الرقمية",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C9-L1",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch9_l1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Cryptographic Foundations: Symmetric, Asymmetric Ciphers & Hashing",
            titleAr: "ورقة عمل تقييمية وزارية: " + "أسس التشفير: التشفير المتماثل وغير المتماثل ودوال التجزئة الرقمية",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch9_l1_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Cryptographic Foundations: Symmetric, Asymmetric Ciphers & Hashing",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "أسس التشفير: التشفير المتماثل وغير المتماثل ودوال التجزئة الرقمية",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch9_l1_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Cryptographic Foundations: Symmetric, Asymmetric Ciphers & Hashing",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "أسس التشفير: التشفير المتماثل وغير المتماثل ودوال التجزئة الرقمية",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_logic_circuit",
            titleEn: "Cryptographic Cipher & Hashing Playground",
            titleAr: "مختبر التشفير الرقمي وخوارزميات التجزئة والتوقيع الإلكتروني",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        },
        {
          id: "egbac_cs_ch9_l2",
          titleEn: "Threat Vectors, Injection Attacks & Zero-Trust Defense Mechanisms",
          titleAr: "نواقل التهديدات وهجمات الحقن وآليات دفاع انعدام الثقة (Zero-Trust)",
          summaryEn: "SQL Injection, Cross-Site Scripting (XSS), Man-in-the-Middle (MitM), DDoS attacks, parameterized queries, and multi-factor authentication (MFA).",
          summaryAr: "هجمات حقن SQL، والبرمجة عبر المواقع XSS، وهجمات حجب الخدمة DDoS، واستخدام الاستعلامات المعيارية والمصادقة متعددة العوامل.",
          theoryContentEn: "### 1. Major Web Application Attack Vectors\n- **SQL Injection (SQLi):** Malicious SQL fragments injected into form inputs.\n  - *Vulnerable:* `SELECT * FROM users WHERE user = '` + input + `'`\n  - *Remediation:* Prepared Statements / Parameterized Queries prevent interpreting input as code.\n- **Cross-Site Scripting (XSS):** Injecting malicious JavaScript executed in victims' browsers.\n  - *Remediation:* Context-aware output encoding and Content Security Policy (CSP).\n- **Distributed Denial of Service (DDoS):** Flooding servers with malicious traffic from botnets.\n\n### 2. Zero-Trust Security Architecture\n- Core principle: *\"Never trust, always verify.\"*\n- Requires explicit verification of every access request, least-privilege role-based access control (RBAC), and continuous monitoring.",
          theoryContentAr: "### ١. أبرز ثغرات وتكتيكات الهجمات السيبرانية\n- **هجوم حقن قواعد البيانات (SQL Injection):** إدخال شيفرات SQL خبيثة عبر حقول الإدخال.\n  - *الحماية:* استخدام الاستعلامات المعيارية (Parameterized Queries) لمنع تفسير المدخلات كأوامر تنفيذية.\n- **هجمات البرمجة عبر المواقع (XSS):** حقن نصوص برمجية خبيثة تنفذ في متصفح المستخدم الضحية.\n  - *الحماية:* تعقيم وترميز المدخلات وتفعيل سياسة أمان المحتوى (CSP).\n- **هجمات حجب الخدمة الموزعة (DDoS):** إغراق خوادم الخدمة بسيل من الطلبات الوهمية من شبكات مخترقة.\n\n### ٢. نموذج أمن انعدام الثقة (Zero-Trust Architecture)\n- الشعار الحاكم: *«لا تثق بأي طرف إطلاقاً، وتحقق دائماً»*.\n- يتطلب التحقق الصارم من كل طلب وصول، وتطبيق مبدأ الحد الأدنى من الصلاحيات (Least Privilege).",
          formulas: [
          {
                    "labelEn": "Authentication Entropy",
                    "labelAr": "عشوائية كلمات المرور وإنتروبيا الأمان",
                    "latex": "H = L \\log_2(N) \\quad [\\text{bits}]"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 205-240"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Threat Vectors, Injection Attacks & Zero-Trust Defense Mechanisms",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "نواقل التهديدات وهجمات الحقن وآليات دفاع انعدام الثقة (Zero-Trust)",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C9-L2",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch9_l2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Threat Vectors, Injection Attacks & Zero-Trust Defense Mechanisms",
            titleAr: "ورقة عمل تقييمية وزارية: " + "نواقل التهديدات وهجمات الحقن وآليات دفاع انعدام الثقة (Zero-Trust)",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch9_l2_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Threat Vectors, Injection Attacks & Zero-Trust Defense Mechanisms",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "نواقل التهديدات وهجمات الحقن وآليات دفاع انعدام الثقة (Zero-Trust)",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch9_l2_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Threat Vectors, Injection Attacks & Zero-Trust Defense Mechanisms",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "نواقل التهديدات وهجمات الحقن وآليات دفاع انعدام الثقة (Zero-Trust)",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_logic_circuit",
            titleEn: "Cryptographic Cipher & Hashing Playground",
            titleAr: "مختبر التشفير الرقمي وخوارزميات التجزئة والتوقيع الإلكتروني",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        }
      ],
      databank: egBacCsInformaticsCh9Databank,
      solvedExamples: egBacCsInformaticsCh9SolvedExamples,
      exerciseProblems: egBacCsInformaticsCh9Exercises
    },
    {
      id: "egbac_cs_ch10",
      chapterNumber: 10,
      titleEn: "Unit 10: Artificial Intelligence, Machine Learning & Digital Ethics",
      titleAr: "الباب العاشر: الذكاء الاصطناعي وتعلم الآلة والأخلاقيات الرقمية",
      descriptionEn: "Supervised vs unsupervised learning, Artificial Neural Networks (ANN), activation functions, gradient descent, overfitting, ethics of AI, and intellectual property.",
      descriptionAr: "التعلم الخاضع للإشراف وغير الخاضع، الشبكات العصبية الاصطناعية، دوال التنشيط، الانحدار التدريجي، فرط التخصيص، وأخلاقيات الذكاء الاصطناعي.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_cs_ch10_l1",
          titleEn: "Machine Learning Paradigms & Artificial Neural Network Architecture",
          titleAr: "نماذج تعلم الآلة ومعمارية الشبكات العصبية الاصطناعية",
          summaryEn: "Supervised (Regression, Classification), Unsupervised (Clustering, PCA), Perceptron model, Multi-Layer Perceptrons (MLP), and activation functions (ReLU, Sigmoid).",
          summaryAr: "التعلم الخاضع للإشراف، التعلم غير الخاضع، نموذج البيرسبترون، الشبكات متعددة الطبقات، ودوال التنشيط غير الخطية.",
          theoryContentEn: "### 1. Core Machine Learning Paradigms\n- **Supervised Learning:** Trained on labeled data pairs $(x_i, y_i)$.\n  - *Regression:* Predicts continuous numeric output.\n  - *Classification:* Assigns input to discrete category labels.\n- **Unsupervised Learning:** Discovers latent structure in unlabeled data (e.g. K-Means clustering).\n- **Reinforcement Learning:** Agent learns optimal policies via reward/penalty signals.\n\n### 2. Artificial Neuron (Perceptron) Mechanics\n- A neuron computes a weighted sum of inputs plus bias, passed through non-linear activation $\\sigma$:\n  $$z = \\sum_{i=1}^n w_i x_i + b, \\quad a = \\sigma(z)$$\n- **Activation Functions:**\n  - *Sigmoid:* $\\sigma(z) = \\frac{1}{1 + e^{-z}} \\in (0, 1)$\n  - *ReLU (Rectified Linear Unit):* $f(z) = \\max(0, z)$ — avoids vanishing gradients.",
          theoryContentAr: "### ١. النماذج الرئيسية لتعلم الآلة\n- **التعلم الخاضع للإشراف (Supervised):** التدريب على بيانات موسومة مسبقاً $(x_i, y_i)$.\n  - *الانحدار (Regression):* التنبؤ بقيمة عددية متصلة.\n  - *التصنيف (Classification):* فرز المدخلات إلى فئات وتصنيفات محددة.\n- **التعلم غير الخاضع للإشراف (Unsupervised):** اكتشاف الأنماط والتجمعات دون تصنيف مسبق (K-Means).\n- **التعلم المعزز (Reinforcement Learning):** تعلم الوكيل الذكي للسياسات عبر المكافآت والعقوبات.\n\n### ٢. العصبون الاصطناعي (Perceptron) ودوال التنشيط\n- يحسب العصبون المجموع الموزون للمدخلات مضافاً إليه الانحياز (Bias)، ثم يمرر عبر دالة التنشيط:\n  $$z = \\sum_{i=1}^n w_i x_i + b, \\quad a = \\sigma(z)$$\n- **دوال التنشيط الشهيرة:**\n  - *دالة السيجمويد (Sigmoid):* تحصر الخرج بين 0 و 1.\n  - *دالة ReLU:* $f(z) = \\max(0, z)$ — تتفادى تلاشي التدرج الحسابي في الشبكات العميقة.",
          formulas: [
          {
                    "labelEn": "Neuron Activation Equation",
                    "labelAr": "معادلة تنشيط العصبون الاصطناعي",
                    "latex": "a = \\sigma\\left(\\sum_{j=1}^m w_j x_j + b\\right)"
          },
          {
                    "labelEn": "Sigmoid Activation Function",
                    "labelAr": "دالة التنشيط السيجمويدية",
                    "latex": "\\sigma(z) = \\frac{1}{1 + e^{-z}}"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 230-265"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Machine Learning Paradigms & Artificial Neural Network Architecture",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "نماذج تعلم الآلة ومعمارية الشبكات العصبية الاصطناعية",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C10-L1",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch10_l1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Machine Learning Paradigms & Artificial Neural Network Architecture",
            titleAr: "ورقة عمل تقييمية وزارية: " + "نماذج تعلم الآلة ومعمارية الشبكات العصبية الاصطناعية",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch10_l1_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Machine Learning Paradigms & Artificial Neural Network Architecture",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "نماذج تعلم الآلة ومعمارية الشبكات العصبية الاصطناعية",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch10_l1_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Machine Learning Paradigms & Artificial Neural Network Architecture",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "نماذج تعلم الآلة ومعمارية الشبكات العصبية الاصطناعية",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_neural_playground",
            titleEn: "Neural Network & Decision Boundary Playground",
            titleAr: "مختبر الشبكات العصبية الاصطناعية ورسم حدود القرار التفاعلي",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        },
        {
          id: "egbac_cs_ch10_l2",
          titleEn: "Gradient Descent, Model Generalization & Ethical AI Frameworks",
          titleAr: "الانحدار التدريجي، تعميم النماذج والأطر الأخلاقية للذكاء الاصطناعي",
          summaryEn: "Loss functions (MSE, Cross-Entropy), Backpropagation with gradient descent, Overfitting vs Underfitting, regularization (L1/L2, Dropout), and AI algorithmic bias.",
          summaryAr: "دوال الخسارة، التراجع الخلفي، فرط التخصيص وضعف الملاءمة، تقنيات المعايرة، وتحيزات الخوارزميات والمسؤولية القانونية.",
          theoryContentEn: "### 1. Training Neural Networks: Loss & Gradient Descent\n- **Loss Function:** Measures prediction discrepancy ($J(W, b)$).\n- **Weight Update Rule:** $W \\leftarrow W - \\alpha \\nabla_W J$, where $\\alpha$ is learning rate.\n- **Backpropagation:** Computes partial derivatives $\\frac{\\partial J}{\\partial W}$ efficiently via chain rule.\n\n### 2. Generalization & Model Diagnostics\n- **Underfitting (High Bias):** Model is too simple to capture underlying trend.\n- **Overfitting (High Variance):** Model memorizes training noise; poor test accuracy.\n  - *Countermeasures:* L2 Weight Decay, Dropout, early stopping, cross-validation.\n\n### 3. Digital Ethics & Algorithmic Accountability\n- Addressing training data bias to prevent discriminatory outcomes.\n- Transparency, explainable AI (XAI), and protecting intellectual property and privacy.",
          theoryContentAr: "### ١. تدريب الشبكات العصبية: دوال الخسارة والانحدار التدريجي\n- **دالة الخسارة (Loss Function):** تقيس الفارق بين التنبؤات والنتائج الحقيقية.\n- **قاعدة تحديث الأوزان:** $W \\leftarrow W - \\alpha \\nabla_W J$ حيث $\\alpha$ معدل التعلم.\n- **التراجع الخلفي (Backpropagation):** حساب المشتقات الجزئية للأوزان باستخدام قاعدة السلسلة.\n\n### ٢. تعميم النماذج وتشخيص الأداء\n- **ضعف الملاءمة (Underfitting):** نموذج شديد البساطة يعجز عن استيعاب العلاقات الأساسية.\n- **فرط التخصيص (Overfitting):** نموذج يحفظ بيانات التدريب بما فيها من ضوضاء ويفشل في التعميم.\n  - *العلاج:* إضافة شروط التنظيم (L2 Regularization)، تقنية الإسقاط العشوائي (Dropout).\n\n### ٣. الأخلاقيات الرقمية ومسؤولية الذكاء الاصطناعي\n- معالجة التحيز الخوارزمي في بيانات التدريب لمنع القرارات التمييزية.\n- الشفافية، الذكاء الاصطناعي القابل للتفسير (XAI)، وحماية حقوق الملكية الفكرية والخصوصية.",
          formulas: [
          {
                    "labelEn": "Gradient Descent Weight Update",
                    "labelAr": "قاعدة تحديث الأوزان بالانحدار التدريجي",
                    "latex": "W^{(t+1)} = W^{(t)} - \\alpha \\frac{\\partial J}{\\partial W}"
          },
          {
                    "labelEn": "Mean Squared Error Loss",
                    "labelAr": "دالة متوسط مربع الخطأ",
                    "latex": "J(W, b) = \\frac{1}{2m} \\sum_{i=1}^m (\\hat{y}^{(i)} - y^{(i)})^2"
          }
],
          moeRef: {
            bookTitleEn: "New Egyptian Baccalaureate Computer Science & Informatics",
            bookTitleAr: "كتاب البكالوريا المصرية في علوم الحاسب والمعلوماتية",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "EGBAC-CS-G12-2025",
            pageRange: "pp. 230-265"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Gradient Descent, Model Generalization & Ethical AI Frameworks",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "الانحدار التدريجي، تعميم النماذج والأطر الأخلاقية للذكاء الاصطناعي",
            gradeLevel: "Grade 12 / 3rd Secondary (Computer Science Division)",
            durationMinutes: 45,
            moeCode: "LP-CS-G12-C10-L2",
            bloomsObjectivesEn: [
              "Understand core concepts and technical taxonomy",
              "Apply algorithmic logic and mathematical models",
              "Analyze system behaviors and complexity bounds",
              "Synthesize optimized computational architectures",
              "Evaluate security, efficiency, and ethical implications"
            ],
            bloomsObjectivesAr: [
              "فهم المفاهيم الجوهرية والمصطلحات التقنية المعتمدة",
              "تطبيق المنطق الخوارزمي والنماذج الرياضية في الحلول البرمجية",
              "تحليل سلوك الأنظمة ورتب التعقيد الحسابي بدقة",
              "بناء وتوليف معماريات حوسبية محسنة ومستقرة",
              "تقييم جوانب الأمان والكفاءة والأبعاد الأخلاقية الرقمية"
            ],
            prerequisitesEn: ["Foundational logic reasoning", "High school algebra & discrete math", "Basic computational literacy"],
            prerequisitesAr: ["التفكير المنطقي التأسيسي", "الجبر والرياضيات المتقطعة بالمرحلة الثانوية", "مبادئ الثقافة الرقمية والحوسبة"],
            keyVocabularyEn: [
              { term: "Abstraction", definition: "Hiding implementation complexity to highlight essential architectural behavior" },
              { term: "Algorithmic Efficiency", definition: "Minimizing time and memory resources required for computational execution" },
              { term: "Determinism", definition: "Property where identical input sequences reliably produce identical output states" }
            ],
            keyVocabularyAr: [
              { term: "التجريد", definition: "إخفاء التفاصيل التنفيذية المعقدة للتركيز على السلوك الجوهري للنظام" },
              { term: "الكفاءة الخوارزمية", definition: "تقليل الموارد الزمنية والمكانية المستهلكة أثناء تنفيذ البرامج" },
              { term: "الحتمية", definition: "خاصية تضمن إنتاج نفس المخرجات بدقة عند إدخال نفس المدخلات" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Inquiry problem presenting a real-world computational bottleneck or architectural challenge.",
                activitiesAr: "عرض مسألة استكشافية واقعية توضح تحدياً برمجياً أو معمارياً وتثير التفكير الناقد."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Step-by-step conceptual deconstruction using interactive simulation widgets and code traces.",
                activitiesAr: "تفكيك وبناء المفاهيم خطوة بخطوة بالاعتماد على أدوات المحاكاة التفاعلية وتتبع الشيفرات."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided analysis of ministerial databank questions and algorithmic optimization strategies.",
                activitiesAr: "حل مسائل نموذجية من بنك الأسئلة الوزاري وتطبيق استراتيجيات التحسين والتبسيط."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit ticket and debriefing common exam pitfalls and best practices.",
                activitiesAr: "بطاقة الخروج التشخيصية ومناقشة أبرز الأخطاء الشائعة في الامتحانات الرسمية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing time complexity with actual execution wall-clock time in seconds.",
              "Assuming higher clock frequency alone guarantees higher instruction throughput without considering pipelining."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين التعقيد الزماني المجرد والزمن الفعلي المنقضي بالثواني على العتاد.",
              "الاعتقاد الخاطئ بأن زيادة تردد المعالج فقط تعني بالضرورة أداءً أسرع دون مراعاة خطوط الأنابيب والمعمارية."
            ],
            differentiationEn: {
              struggling: "Provide step-by-step trace tables, visual flowcharts, and concrete numerical examples.",
              advanced: "Challenge students with edge cases, amortized analysis, and multi-core synchronization problems."
            },
            differentiationAr: {
              struggling: "تقديم جداول تتبع خطوة بخطوة ومخططات انسيابية وأمثلة عددية مبسطة.",
              advanced: "تكليف الطلاب بتحليل الحالات الحرجة والتحليل الاستهلاكي وخوارزميات التزامن متعدد الأنوية."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing algorithmic logic and architectural principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من أسئلة اختيار من متعدد يقيس التفكير الخوارزمي والمفاهيم المعمارية.",
            exitTicketQuestion: {
              questionEn: "What decisive criteria dictates the selection of an algorithm when memory space is strictly constrained?",
              questionAr: "ما المعيار الحاسم لاختيار خوارزمية المعالجة عندما تكون مساحة الذاكرة المتاحة محدودة للغاية؟",
              solutionEn: "Prioritizing in-place algorithms with O(1) auxiliary space complexity over algorithms requiring recursive stack frames or helper buffers.",
              solutionAr: "إعطاء الأولوية للخوارزميات الموضعية التي لا تتطلب ذاكرة مساعدة إضافية O(1) مقارنة بالخوارزميات التي تحتاج مساحات تخزين مؤقتة."
            }
          },
          worksheet: {
            id: "egbac_cs_ch10_l2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Gradient Descent, Model Generalization & Ethical AI Frameworks",
            titleAr: "ورقة عمل تقييمية وزارية: " + "الانحدار التدريجي، تعميم النماذج والأطر الأخلاقية للذكاء الاصطناعي",
            descriptionEn: "Structured ministerial practice worksheet covering key computational objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية في علوم الحاسب والمعلوماتية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_cs_ch10_l2_ws_q1",
                titleEn: "Diagnostic Assessment Problem 1",
                titleAr: "مسألة تقييمية تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the foundational diagnostic principle governing: " + "Gradient Descent, Model Generalization & Ethical AI Frameworks",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الحاسوبي التالي: " + "الانحدار التدريجي، تعميم النماذج والأطر الأخلاقية للذكاء الاصطناعي",
                correctAnswer: "Empirically validated computational specification adhering strictly to national curriculum standards.",
                optionsEn: [
                  "Empirically validated computational specification adhering strictly to national curriculum standards.",
                  "Non-deterministic heuristic violating IEEE architectural constraints",
                  "Deprecated legacy method causing unbounded memory exhaustion",
                  "Unverified theoretical proposition incompatible with binary logic"
                ],
                optionsAr: [
                  "المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية.",
                  "طريقة حدسية غير حتمية تتعارض مع المعايير القياسية العالمية لهندسة الحوسبة",
                  "أسلوب برمجي قديم مهمل يتسبب في استنزاف غير محدود لذاكرة النظام",
                  "افتراض نظري غير مؤكد لا يتوافق مع مبادئ المنطق الثنائي الرقمي"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core computational principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: Empirically validated computational specification adhering strictly to national curriculum standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والمفهوم الحاسوبي الأساسي.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: المبدأ العلمي والتقني المعتمد المتوافق بدقة مع معايير وزارة التربية والتعليم الوطنية."
                ]
              },
              {
                id: "egbac_cs_ch10_l2_ws_q2",
                titleEn: "Diagnostic Assessment Problem 2",
                titleAr: "مسألة تقييمية تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does algorithmic efficiency or architectural design dictate execution behavior in: " + "Gradient Descent, Model Generalization & Ethical AI Frameworks",
                questionAr: "كيف تؤثر الكفاءة الخوارزمية أو التصميم المعماري في سلوك النظام لـ: " + "الانحدار التدريجي، تعميم النماذج والأطر الأخلاقية للذكاء الاصطناعي",
                correctAnswer: "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                optionsEn: [
                  "Strict architectural decoupling and mathematical optimization minimize instruction latency and prevent resource deadlocks.",
                  "Execution speed is entirely arbitrary and decoupled from algorithmic asymptotic complexity",
                  "Resource utilization grows infinitely regardless of algorithmic structure",
                  "Microarchitectural pipelines fail unconditionally when processing conditional logic"
                ],
                optionsAr: [
                  "الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير ويمنعان حدوث اختناقات الموارد.",
                  "سرعة التنفيذ عشوائية تماماً ولا ترتبط بالتعقيد التقاربي للخوارزمية المنفذة",
                  "استهلاك موارد النظام يتزايد بلا حدود بغض النظر عن بنية الخوارزمية المستخدمة",
                  "تتعطل خطوط أنابيب المعالجة حتماً عند التعامل مع الجمل الشرطية والمنطقية"
                ],
                correctIndex: 0,
                hintEn: "Focus on optimization principles and microarchitectural efficiency.",
                hintAr: "ركز على مبادئ التحسين والكفاءة المعمارية للخوارزميات والأنظمة.",
                stepByStepSolutionEn: [
                  "1. Analyze the system constraints and computational resource tradeoffs.",
                  "2. Apply structural optimization principles.",
                  "3. Conclude verified outcome: Strict architectural decoupling and mathematical optimization minimize instruction latency."
                ],
                stepByStepSolutionAr: [
                  "١. تحليل قيود النظام والموازنة بين الموارد الحوسبية.",
                  "٢. تطبيق مبادئ التحسين الهيكلي في التصميم.",
                  "٣. استنتاج النتيجة المؤكدة: الفصل المعماري الدقيق والتحسين الرياضي يقللان من زمن التأخير."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "cs_neural_playground",
            titleEn: "Neural Network & Decision Boundary Playground",
            titleAr: "مختبر الشبكات العصبية الاصطناعية ورسم حدود القرار التفاعلي",
            descriptionEn: "Interactive simulation laboratory for exploring computer science, algorithms, circuits, databases, and AI models.",
            descriptionAr: "مختبر محاكاة تفاعلي لاستكشاف علوم الحاسب والخوارزميات والدوائر وقواعد البيانات ونماذج الذكاء الاصطناعي."
          }
        }
      ],
      databank: egBacCsInformaticsCh10Databank,
      solvedExamples: egBacCsInformaticsCh10SolvedExamples,
      exerciseProblems: egBacCsInformaticsCh10Exercises
    }
  ]
};
