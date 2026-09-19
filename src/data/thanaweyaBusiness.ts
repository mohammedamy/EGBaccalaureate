import type { Branch, Chapter } from '../types/curriculum';
import { businessCh1Databank } from './databanks/thanaweya/businessCh1Databank';
import { businessCh1SolvedExamples, businessCh1Exercises } from './textbook/thanaweya/businessCh1Textbook';
import { businessCh2Databank } from './databanks/thanaweya/businessCh2Databank';
import { businessCh2SolvedExamples, businessCh2Exercises } from './textbook/thanaweya/businessCh2Textbook';
import { businessCh3Databank } from './databanks/thanaweya/businessCh3Databank';
import { businessCh3SolvedExamples, businessCh3Exercises } from './textbook/thanaweya/businessCh3Textbook';
import { businessCh4Databank } from './databanks/thanaweya/businessCh4Databank';
import { businessCh4SolvedExamples, businessCh4Exercises } from './textbook/thanaweya/businessCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'th_bus_ch1',
    chapterNumber: 1,
    titleEn: "Principles of Management, Planning & Organizational Structures",
    titleAr: "مبادئ الإدارة، التخطيط المؤسسي والهياكل التنظيمية",
    descriptionEn: "Core functions of management (planning, organizing, directing, controlling), strategic planning, organizational structures, delegation of authority, and corporate governance.",
    descriptionAr: "الوظائف الإدارية الأربع (التخطيط، التنظيم، التوجيه، والرقابة)، التخطيط الاستراتيجي، الهياكل التنظيمية وتفويض الصلاحيات، وحوكمة المؤسسات وأخلاقيات الأعمال.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_bus_ch1_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Strategic Analysis of Management Functions: The Interdependent Cycle of Planning, Organizing, Directing, and Controlling",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ وظائف الإدارة الأساسية: التكامل الوظيفي بين التخطيط، التنظيم، التوجيه، والرقابة",
        summaryEn: "Comprehensive conceptual and applied mastery of Management Functions: The Interdependent Cycle of Planning, Organizing, Directing, and Controlling, Organizational Structures: Functional, Divisional, Matrix, and Dynamic Spans of Control, and Strategic Planning and Environmental Analysis: SWOT Matrix and PESTLE Macro-Drivers.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ وظائف الإدارة الأساسية: التكامل الوظيفي بين التخطيط، التنظيم، التوجيه، والرقابة، الهياكل التنظيمية: الهيكل الوظيفي، القطاعي، المصفوفي، ونطاق الإشراف الإداري، و التخطيط الاستراتيجي والتحليل البيئي: مصفوفة SWOT ومحركات التحليل البيئي الكلي PESTLE.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Management Functions: The Interdependent Cycle of Planning, Organizing, Directing, and Controlling\nManagement is the process of coordinating organizational resources through planning, organizing, directing, and controlling to achieve predetermined goals efficiently and effectively.\n\nEfficiency denotes optimal resource utilization with minimal waste (doing things right), whereas effectiveness measures the degree to which strategic objectives are fulfilled (doing the right things).\n\nThe managerial cycle operates as an ongoing feedback loop: controlling data reveals deviations from operational standards, directly triggering corrective interventions in future planning cycles.\n\n#### 2. Organizational Structures: Functional, Divisional, Matrix, and Dynamic Spans of Control\nAn organizational structure formally defines job roles, reporting hierarchies, communication channels, and division of operational labor across an enterprise.\n\nA functional structure maximizes specialized technical expertise, while a matrix structure overlays project teams across functional departments, creating dual reporting relationships.\n\nDetermining the optimal span of control balances hierarchical agility against managerial overhead: flat organizations empower frontline employees but demand highly autonomous competence.\n\n#### 3. Strategic Planning and Environmental Analysis: SWOT Matrix and PESTLE Macro-Drivers\nStrategic planning articulates an organization's long-term vision, mission, and actionable pathways to navigate competitive market dynamics.\n\nA SWOT analysis diagnoses internal strengths and weaknesses while mapping external market opportunities and threats to formulate defensive and aggressive strategic postures.\n\nIntegrating PESTLE drivers with internal capabilities prevents strategic inertia by identifying emerging regulatory, geopolitical, technological, and environmental disruptions.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. وظائف الإدارة الأساسية: التكامل الوظيفي بين التخطيط، التنظيم، التوجيه، والرقابة\nالإدارة هي عملية تنسيق واستثمار الموارد المؤسسية من خلال التخطيط والتنظيم والتوجيه والرقابة لتحقيق الأهداف بكفاءة وفاعلية.\n\nتعني الكفاءة الاستغلال الأمثل للموارد بأقل هدر ممكن (أداء العمل بطريقة صحيحة)، بينما تقيس الفاعلية مدى تحقيق الأهداف والنتائج المرجوة (أداء العمل الصحيح).\n\nتعمل الدورة الإدارية كحلقة تغذية راجعة ديناميكية مستمرة، حيث تكشف مخرجات الرقابة عن الانحرافات التشغيلية لتعيد توجيه وتصحيح مسارات التخطيط المستقبلي.\n\n#### ٢. الهياكل التنظيمية: الهيكل الوظيفي، القطاعي، المصفوفي، ونطاق الإشراف الإداري\nالهيكل التنظيمي هو الإطار الرسمي الذي يحدد تقسيم المهام، وخطوط السلطة، وقنوات الاتصال، والمسؤوليات بين مختلف الوحدات في المنشأة.\n\nيحقق الهيكل الوظيفي أعلى كفاءة تخصصية، في حين يجمع الهيكل المصفوفي بين التخصص الوظيفي وفرق المشاريع، مما ينشئ ازدواجية في التبعية الإدارية تتطلب تنسيقاً عالياً.\n\nيتطلب تحديد نطاق الإشراف موازنة بين سرعة اتخاذ القرار وتكلفة المستويات الإدارية؛ فالهياكل المسطحة تمكن الموظفين لكنها تتطلب كفاءات ذاتية واستقلالية عالية.\n\n#### ٣. التخطيط الاستراتيجي والتحليل البيئي: مصفوفة SWOT ومحركات التحليل البيئي الكلي PESTLE\nالتخطيط الاستراتيجي هو رسم الرؤية والرسالة طويلة الأجل للمؤسسة وتحديد مسارات العمل لتحقيق التفوق ومواكبة تغيرات السوق.\n\nتشخص مصفوفة SWOT نقاط القوة والضعف الداخلية وتستكشف الفرص والتهديدات الخارجية لبناء استراتيجيات هجومية أو دفاعية متوازنة.\n\n#### ٣. التخطيط الاستراتيجي والتحليل البيئي: مصفوفة SWOT ومحركات التحليل البيئي الكلي PESTLE\nيحمي دمج مؤشرات PESTLE الكلية مع القدرات الداخلية المنشأة من الجمود الاستراتيجي عبر الاستشراف المبكر للمتغيرات التشريعية والتقنية والبيئية.",
        formulas: [
          {
            labelEn: "Management Functions: The Interdependent Cycle of Planning, Organizing, Directing, and Controlling",
            labelAr: "وظائف الإدارة الأساسية: التكامل الوظيفي بين التخطيط، التنظيم، التوجيه، والرقابة",
            latex: "\\text{Core Rule: } Management Functions: The Inte"
          },
          {
            labelEn: "Organizational Structures: Functional, Divisional, Matrix, and Dynamic Spans of Control",
            labelAr: "الهياكل التنظيمية: الهيكل الوظيفي، القطاعي، المصفوفي، ونطاق الإشراف الإداري",
            latex: "\\text{Applied Maxim: } Organizational Structures: Fun"
          }
        ],
        moeRef: {
          bookTitleEn: "Business Administration & Entrepreneurship Grade 12",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-BUS-CH01-L1",
          pageRange: '5-40'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Strategic Analysis of Management Functions: The Interdependent Cycle of Planning, Organizing, Directing, and Controlling",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ وظائف الإدارة الأساسية: التكامل الوظيفي بين التخطيط، التنظيم، التوجيه، والرقابة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-BUS-CH01-L1",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Management Functions: The Interdependent Cycle of Planning, Organizing, Directing, and Controlling",
            "Apply strategic analytical thinking to Organizational Structures: Functional, Divisional, Matrix, and Dynamic Spans of Control",
            "Synthesize managerial resolutions for Strategic Planning and Environmental Analysis: SWOT Matrix and PESTLE Macro-Drivers"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ وظائف الإدارة الأساسية: التكامل الوظيفي بين التخطيط، التنظيم، التوجيه، والرقابة",
            "تطبيق التفكير التحليلي الناقد في مسألة الهياكل التنظيمية: الهيكل الوظيفي، القطاعي، المصفوفي، ونطاق الإشراف الإداري",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ التخطيط الاستراتيجي والتحليل البيئي: مصفوفة SWOT ومحركات التحليل البيئي الكلي PESTLE"
          ],
          prerequisitesEn: ['Principles of Economics', 'Foundational Mathematics & Statistics'],
          prerequisitesAr: ['مبادئ علم الاقتصاد والإحصاء', 'مهارات الإحصاء والتحليل المالي الأساسية'],
          keyVocabularyEn: [
            { term: 'Return on Equity (ROE)', definition: 'Net income divided by shareholders equity measuring financial profitability' },
            { term: 'Competitive Advantage', definition: 'Unique capabilities and resources allowing an enterprise to outperform competitors' }
          ],
          keyVocabularyAr: [
            { term: 'العائد على حقوق الملكية (ROE)', definition: 'صافي الربح مقسوماً على حقوق الملكية لقياس كفاءة توليد الأرباح' },
            { term: 'الميزة التنافسية', definition: 'القدرات والموارد الفريدة التي تمكن المنشأة من التفوق المستدام على منافسيها' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Case Context', phaseAr: 'التهيئة ودراسة الحالة الواقعية', duration: '15 min', activitiesEn: 'Review of real-world corporate case studies and open diagnostic dialogue', activitiesAr: 'استعراض دراسة حالة لشركة حقيقية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Modeling', phaseAr: 'التحليل المفاهيمي والنمذجة الرياضية', duration: '75 min', activitiesEn: 'Strategic modeling, solved numerical examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل الحسابية والتقييم، واختبار بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing accounting revenue growth with positive net cash flow and sustainable unit economics'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نمو الإيرادات المحاسبية وبين التدفق النقدي التشغيلي الموجب واقتصاديات الوحدة المستدامة'
          ],
          differentiationEn: {
            struggling: 'Provide guided visual formula templates, financial ratio cheat sheets, and step-by-step calculation guides.',
            advanced: 'Assign complex multi-scenario DCF valuations and cross-border M&A case competition simulations.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وجداول مبسطة للنسب المالية وخطوات حسابية متدرجة.',
            advanced: 'تكليف بنمذجة تقييم تدفقات نقدية DCF معقدة ودراسة صفقات اندماج واستحواذ دولية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring conceptual comprehension and business problem-solving.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل المالي والإداري.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Management Functions: The Interdependent Cycle of Planning, Organizing, Directing, and Controlling?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (وظائف الإدارة الأساسية: التكامل الوظيفي بين التخطيط، التنظيم، التوجيه، والرقابة)؟",
            solutionEn: "Management is the process of coordinating organizational resources through planning, organizing, directing, and controlling to achieve predetermined goals efficiently and effectively.",
            solutionAr: "الإدارة هي عملية تنسيق واستثمار الموارد المؤسسية من خلال التخطيط والتنظيم والتوجيه والرقابة لتحقيق الأهداف بكفاءة وفاعلية."
          }
        },
        worksheet: {
          id: 'th_bus_ch1_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Strategic Analysis of Management Functions: The Interdependent Cycle of Planning, Organizing, Directing, and Controlling",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ وظائف الإدارة الأساسية: التكامل الوظيفي بين التخطيط، التنظيم، التوجيه، والرقابة",
          descriptionEn: 'Formative assessment, strategic case analysis, and numerical practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وحسابي لدراسة الحالات الإدارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'business_modeling_studio',
          titleEn: "Business Modeling & Strategy Studio",
          titleAr: "استوديو النمذجة وإدارة الأعمال الاستراتيجية",
          descriptionEn: 'Interactive Business Modeling Studio featuring DCF valuation, break-even simulation, Lean Canvas generation, and supply chain optimization.',
          descriptionAr: 'استوديو نمذجة إدارة الأعمال التفاعلي لمحاكاة تقييم التدفقات النقدية، تحليل نقطة التعادل، ومخطط نموذج العمل وسلاسل الإمداد.'
        }
      },
      {
        id: 'th_bus_ch1_l2',
        titleEn: "Lesson 2: Operational Applications and Real-World Evaluation of Delegation of Authority, Centralization vs. Decentralization, and Accountability Mechanics",
        titleAr: "الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ تفويض السلطة، المركزية واللامركزية، ومسؤولية المساءلة الإدارية",
        summaryEn: "Comprehensive conceptual and applied mastery of Delegation of Authority, Centralization vs. Decentralization, and Accountability Mechanics, Managerial Control Systems: Feedforward, Concurrent, and Feedback Mechanisms, and Corporate Governance, Business Ethics, and Corporate Social Responsibility (CSR).",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ تفويض السلطة، المركزية واللامركزية، ومسؤولية المساءلة الإدارية، نظم الرقابة الإدارية: الرقابة السابقة، المتزامنة، واللاحقة ومعايير مؤشرات الأداء، و حوكمة الشركات، أخلاقيات الأعمال، والمسؤولية الاجتماعية للمؤسسات (CSR).",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Delegation of Authority, Centralization vs. Decentralization, and Accountability Mechanics\nDelegation is the downward transfer of formal operational authority from a superior to a subordinate while ultimate accountability remains with the delegator.\n\nCentralized organizations concentrate strategic decision-making at top corporate tiers, whereas decentralized models empower distributed local units to respond rapidly to client demands.\n\nThe parity of authority and responsibility principle dictates that assigning responsibility without corresponding decision-making authority creates systemic organizational paralysis.\n\n#### 2. Managerial Control Systems: Feedforward, Concurrent, and Feedback Mechanisms\nManagerial control is the systematic process of monitoring performance, comparing outcomes against benchmarked targets, and applying corrective adjustments.\n\nFeedforward control prevents errors before production initiates, concurrent control monitors live workflows in real-time, and feedback control assesses final outputs post-execution.\n\nEffective control systems avoid excessive micro-management by focusing on exception reporting and critical milestone thresholds that directly safeguard organizational solvency.\n\n#### 3. Corporate Governance, Business Ethics, and Corporate Social Responsibility (CSR)\nBusiness ethics governs the moral principles and transparent conduct expected of an enterprise in its relationships with consumers, employees, and society.\n\nCorporate governance provides the regulatory and structural framework that balances the interests of shareholders, executive management, customers, and regulatory bodies.\n\nModern Corporate Social Responsibility (CSR) shifts corporate philosophy from unilateral Milton Friedman shareholder primacy to multidimensional stakeholder value creation.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. تفويض السلطة، المركزية واللامركزية، ومسؤولية المساءلة الإدارية\nتفويض السلطة هو إسناد جزء من الصلاحيات التنفيذية من الرئيس إلى المرؤوسين لتنفيذ مهام محددة، مع بقاء المسؤولية النهائية على عاتق المفوض.\n\nتركز المنظمات المركزية اتخاذ القرار لدى الإدارة العليا لضمان التماسك، بينما تمنح اللامركزية مرونة للوحدات الميدانية للاستجابة السريعة للمتعاملين.\n\nينص مبدأ تكافؤ السلطة والمسؤولية على أن تحميل الموظف مسؤولية نتائج محددة دون منحه الصلاحيات الكافية يقود حتماً إلى العجز والشلل التنظيمي.\n\n#### ٢. نظم الرقابة الإدارية: الرقابة السابقة، المتزامنة، واللاحقة ومعايير مؤشرات الأداء\nالرقابة الإدارية هي قياس الأداء الفعلي ومقارنته بالمعايير والخطط المستهدفة لاكتشاف أي انحرافات واتخاذ الإجراءات التصحيحية فوراً.\n\nتعمل الرقابة السابقة على منع الأخطاء قبل حدوثها، بينما تراقب الرقابة المتزامنة سير العمل لحظياً، وتقوم الرقابة اللاحقة بتقييم النتائج النهائية.\n\nتتجنب النظم الرقابية الذكية الرقابة البيروقراطية الخانقة، معتمدة على مبدأ الرقابة بالاستثناء للتركيز الحصري على الانحرافات الجوهرية المؤثرة.\n\n#### ٣. حوكمة الشركات، أخلاقيات الأعمال، والمسؤولية الاجتماعية للمؤسسات (CSR)\nأخلاقيات الأعمال هي منظومة القيم والمبادئ الأخلاقية التي تلتزم بها المؤسسة في تعاملاتها مع المستهلكين والموظفين والبيئة المحيطة.\n\nتمثل حوكمة الشركات الإطار المؤسسي والقانوني الذي يحمي حقوق المساهمين وينظم صلاحيات مجلس الإدارة والإدارة التنفيذية ويضمن الإفصاح والنزاهة.\n\n#### ٣. حوكمة الشركات، أخلاقيات الأعمال، والمسؤولية الاجتماعية للمؤسسات (CSR)\nينقل مفهوم المسؤولية الاجتماعية الحديث فلسفة الأعمال من تعظيم أرباح المساهمين حصراً إلى خلق قيمة مضافة مستدامة لجميع أصحاب المصلحة والمجتمع.",
        formulas: [
          {
            labelEn: "Delegation of Authority, Centralization vs. Decentralization, and Accountability Mechanics",
            labelAr: "تفويض السلطة، المركزية واللامركزية، ومسؤولية المساءلة الإدارية",
            latex: "\\text{Core Rule: } Delegation of Authority, Centr"
          },
          {
            labelEn: "Managerial Control Systems: Feedforward, Concurrent, and Feedback Mechanisms",
            labelAr: "نظم الرقابة الإدارية: الرقابة السابقة، المتزامنة، واللاحقة ومعايير مؤشرات الأداء",
            latex: "\\text{Applied Maxim: } Managerial Control Systems: Fe"
          }
        ],
        moeRef: {
          bookTitleEn: "Business Administration & Entrepreneurship Grade 12",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-BUS-CH01-L2",
          pageRange: '25-60'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Operational Applications and Real-World Evaluation of Delegation of Authority, Centralization vs. Decentralization, and Accountability Mechanics",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ تفويض السلطة، المركزية واللامركزية، ومسؤولية المساءلة الإدارية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-BUS-CH01-L2",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Delegation of Authority, Centralization vs. Decentralization, and Accountability Mechanics",
            "Apply strategic analytical thinking to Managerial Control Systems: Feedforward, Concurrent, and Feedback Mechanisms",
            "Synthesize managerial resolutions for Corporate Governance, Business Ethics, and Corporate Social Responsibility (CSR)"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ تفويض السلطة، المركزية واللامركزية، ومسؤولية المساءلة الإدارية",
            "تطبيق التفكير التحليلي الناقد في مسألة نظم الرقابة الإدارية: الرقابة السابقة، المتزامنة، واللاحقة ومعايير مؤشرات الأداء",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ حوكمة الشركات، أخلاقيات الأعمال، والمسؤولية الاجتماعية للمؤسسات (CSR)"
          ],
          prerequisitesEn: ['Principles of Economics', 'Foundational Mathematics & Statistics'],
          prerequisitesAr: ['مبادئ علم الاقتصاد والإحصاء', 'مهارات الإحصاء والتحليل المالي الأساسية'],
          keyVocabularyEn: [
            { term: 'Return on Equity (ROE)', definition: 'Net income divided by shareholders equity measuring financial profitability' },
            { term: 'Competitive Advantage', definition: 'Unique capabilities and resources allowing an enterprise to outperform competitors' }
          ],
          keyVocabularyAr: [
            { term: 'العائد على حقوق الملكية (ROE)', definition: 'صافي الربح مقسوماً على حقوق الملكية لقياس كفاءة توليد الأرباح' },
            { term: 'الميزة التنافسية', definition: 'القدرات والموارد الفريدة التي تمكن المنشأة من التفوق المستدام على منافسيها' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Case Context', phaseAr: 'التهيئة ودراسة الحالة الواقعية', duration: '15 min', activitiesEn: 'Review of real-world corporate case studies and open diagnostic dialogue', activitiesAr: 'استعراض دراسة حالة لشركة حقيقية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Modeling', phaseAr: 'التحليل المفاهيمي والنمذجة الرياضية', duration: '75 min', activitiesEn: 'Strategic modeling, solved numerical examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل الحسابية والتقييم، واختبار بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing accounting revenue growth with positive net cash flow and sustainable unit economics'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نمو الإيرادات المحاسبية وبين التدفق النقدي التشغيلي الموجب واقتصاديات الوحدة المستدامة'
          ],
          differentiationEn: {
            struggling: 'Provide guided visual formula templates, financial ratio cheat sheets, and step-by-step calculation guides.',
            advanced: 'Assign complex multi-scenario DCF valuations and cross-border M&A case competition simulations.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وجداول مبسطة للنسب المالية وخطوات حسابية متدرجة.',
            advanced: 'تكليف بنمذجة تقييم تدفقات نقدية DCF معقدة ودراسة صفقات اندماج واستحواذ دولية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring conceptual comprehension and business problem-solving.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل المالي والإداري.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Delegation of Authority, Centralization vs. Decentralization, and Accountability Mechanics?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (تفويض السلطة، المركزية واللامركزية، ومسؤولية المساءلة الإدارية)؟",
            solutionEn: "Delegation is the downward transfer of formal operational authority from a superior to a subordinate while ultimate accountability remains with the delegator.",
            solutionAr: "تفويض السلطة هو إسناد جزء من الصلاحيات التنفيذية من الرئيس إلى المرؤوسين لتنفيذ مهام محددة، مع بقاء المسؤولية النهائية على عاتق المفوض."
          }
        },
        worksheet: {
          id: 'th_bus_ch1_l2_ws',
          titleEn: "Worksheet: Lesson 2: Operational Applications and Real-World Evaluation of Delegation of Authority, Centralization vs. Decentralization, and Accountability Mechanics",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ تفويض السلطة، المركزية واللامركزية، ومسؤولية المساءلة الإدارية",
          descriptionEn: 'Formative assessment, strategic case analysis, and numerical practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وحسابي لدراسة الحالات الإدارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'business_modeling_studio',
          titleEn: "Business Modeling & Strategy Studio",
          titleAr: "استوديو النمذجة وإدارة الأعمال الاستراتيجية",
          descriptionEn: 'Interactive Business Modeling Studio featuring DCF valuation, break-even simulation, Lean Canvas generation, and supply chain optimization.',
          descriptionAr: 'استوديو نمذجة إدارة الأعمال التفاعلي لمحاكاة تقييم التدفقات النقدية، تحليل نقطة التعادل، ومخطط نموذج العمل وسلاسل الإمداد.'
        }
      }
    ],
    databank: businessCh1Databank,
    solvedExamples: businessCh1SolvedExamples,
    exerciseProblems: businessCh1Exercises
  },
  {
    id: 'th_bus_ch2',
    chapterNumber: 2,
    titleEn: "Marketing Strategy, Market Research & Consumer Behavior",
    titleAr: "استراتيجيات التسويق، بحوث السوق وسلوك المستهلك",
    descriptionEn: "Marketing mix (4Ps & 7Ps), market segmentation, targeting, brand positioning (STP), consumer buying journey, market research methodologies, and digital marketing channels.",
    descriptionAr: "المزيج التسويقي السلعي والخدمي، تجزئة السوق واستهداف الشرائح والتموضع الذهني (STP)، مراحل سلوك المستهلك، أساليب بحوث السوق، ومنظومة التسويق الرقمي الحديث.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_bus_ch2_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Strategic Analysis of The Marketing Mix: Product, Price, Place, Promotion (4Ps) and Extended Service Mix (7Ps)",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ المزيج التسويقي السلعي (4Ps) وتوسعات مزيج الخدمات (7Ps: الأفراد، العمليات، والدليل المادي)",
        summaryEn: "Comprehensive conceptual and applied mastery of The Marketing Mix: Product, Price, Place, Promotion (4Ps) and Extended Service Mix (7Ps), Segmentation, Targeting, and Brand Positioning (The STP Framework), and The Consumer Buying Decision Process and Cognitive Biases.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ المزيج التسويقي السلعي (4Ps) وتوسعات مزيج الخدمات (7Ps: الأفراد، العمليات، والدليل المادي)، استراتيجية التجزئة والاستهداف والتموضع الذهني (إطار STP التسويقي)، و مراحل عملية اتخاذ القرار الشرائي للمستهلك والانحيازات الإدراكية المصاحبة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. The Marketing Mix: Product, Price, Place, Promotion (4Ps) and Extended Service Mix (7Ps)\nThe marketing mix is the tactical toolkit of controllable marketing variables used by a company to elicit desired buyer responses in a target market.\n\nThe 4Ps encompass Product, Price, Place, and Promotion; service marketing expands this with People, Process, and Physical Evidence to address intangibility.\n\nPricing strategy directly communicates positioning: value-based pricing extracts maximum willingness-to-pay, whereas penetration pricing builds early network market share.\n\n#### 2. Segmentation, Targeting, and Brand Positioning (The STP Framework)\nSTP requires dividing a heterogeneous market into distinct segments, selecting the most lucrative segments, and establishing a unique brand position in consumer minds.\n\nSegmentation criteria span geographic, demographic, psychographic (lifestyle and values), and behavioral variables (usage rate, brand loyalty).\n\nEffective brand positioning carves a defensible \"Point of Difference\" (POD) while maintaining necessary \"Points of Parity\" (POP) against established incumbents.\n\n#### 3. The Consumer Buying Decision Process and Cognitive Biases\nThe consumer buying journey follows five stages: Problem Recognition, Information Search, Evaluation of Alternatives, Purchase Decision, and Post-Purchase Evaluation.\n\nCognitive dissonance often surfaces post-purchase when consumers experience second thoughts, mitigated by reassurance, warranties, and post-sale onboarding.\n\nHigh-involvement purchases involve extensive cognitive evaluation and perceived risk, whereas low-involvement repeat FMCG goods rely predominantly on heuristic habit and brand salient cues.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. المزيج التسويقي السلعي (4Ps) وتوسعات مزيج الخدمات (7Ps: الأفراد، العمليات، والدليل المادي)\nالمزيج التسويقي هو مجموعة الأدوات والمتغيرات التسويقية التي تتحكم بها المنشأة لتحفيز الاستجابة الشرائية لدى جمهورها المستهدف.\n\nيتكون المزيج التقليدي من المنتج والسعر والتوزيع والترويج، بينما يضيف تسويق الخدمات عناصر الأفراد والعمليات والدليل المادي للتغلب على طبيعتها غير الملموسة.\n\nتعكس استراتيجية التسعير المكانة الذهنية للعلامة التجارية؛ فالتسعير القائم على القيمة يستخرج أعلى عائد، بينما يهدف تسعير الاختراق إلى الاستحواذ السريع على الحصة السوقية.\n\n#### ٢. استراتيجية التجزئة والاستهداف والتموضع الذهني (إطار STP التسويقي)\nيتضمن إطار STP تقسيم السوق إلى شرائح متجانسة، واختيار الشرائح الأكثر جاذبية، وبناء مكانة ذهنية فريدة للعلامة التجارية في عقل المستهلك.\n\nتتعدد معايير التجزئة لتشمل المعايير الجغرافية، الديموغرافية، النفسية والسلوكية (كأنماط الحياة، معدل الاستخدام، ومستوى الولاء للعلامة التجارية).\n\nيرتكز التموضع الناجح على ترسيخ \"نقاط التمايز الجوهرية\" (POD) للعلامة مع الحفاظ على \"نقاط التكافؤ المعيارية\" (POP) التي تشترطها الصناعة كحد أدنى.\n\n#### ٣. مراحل عملية اتخاذ القرار الشرائي للمستهلك والانحيازات الإدراكية المصاحبة\nتمر رحلة الشراء بخمس مراحل: إدراك الحاجة، البحث عن المعلومات، تقييم البدائل، قرار الشراء، وسلوك ما بعد الشراء.\n\nينشأ التنافر المعرفي لدى المستهلك عقب الشراء في صورة قلق من صواب الاختيار، وتواجهه الشركات برسائل الطمأنة، وتأكيد الضمان، والخدمة المتميزة.\n\n#### ٣. مراحل عملية اتخاذ القرار الشرائي للمستهلك والانحيازات الإدراكية المصاحبة\nتتطلب مشتريات الالتزام العالي تدقيقاً عقلانياً معمقاً لارتفاع المخاطر، بينما تعتمد السلع الاستهلاكية السريعة على العادات الذهنية التلقائية والبروز البصري للعلامة.",
        formulas: [
          {
            labelEn: "The Marketing Mix: Product, Price, Place, Promotion (4Ps) and Extended Service Mix (7Ps)",
            labelAr: "المزيج التسويقي السلعي (4Ps) وتوسعات مزيج الخدمات (7Ps: الأفراد، العمليات، والدليل المادي)",
            latex: "\\text{Core Rule: } The Marketing Mix: Product, Pr"
          },
          {
            labelEn: "Segmentation, Targeting, and Brand Positioning (The STP Framework)",
            labelAr: "استراتيجية التجزئة والاستهداف والتموضع الذهني (إطار STP التسويقي)",
            latex: "\\text{Applied Maxim: } Segmentation, Targeting, and B"
          }
        ],
        moeRef: {
          bookTitleEn: "Business Administration & Entrepreneurship Grade 12",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-BUS-CH02-L1",
          pageRange: '45-80'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Strategic Analysis of The Marketing Mix: Product, Price, Place, Promotion (4Ps) and Extended Service Mix (7Ps)",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ المزيج التسويقي السلعي (4Ps) وتوسعات مزيج الخدمات (7Ps: الأفراد، العمليات، والدليل المادي)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-BUS-CH02-L1",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of The Marketing Mix: Product, Price, Place, Promotion (4Ps) and Extended Service Mix (7Ps)",
            "Apply strategic analytical thinking to Segmentation, Targeting, and Brand Positioning (The STP Framework)",
            "Synthesize managerial resolutions for The Consumer Buying Decision Process and Cognitive Biases"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ المزيج التسويقي السلعي (4Ps) وتوسعات مزيج الخدمات (7Ps: الأفراد، العمليات، والدليل المادي)",
            "تطبيق التفكير التحليلي الناقد في مسألة استراتيجية التجزئة والاستهداف والتموضع الذهني (إطار STP التسويقي)",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ مراحل عملية اتخاذ القرار الشرائي للمستهلك والانحيازات الإدراكية المصاحبة"
          ],
          prerequisitesEn: ['Principles of Economics', 'Foundational Mathematics & Statistics'],
          prerequisitesAr: ['مبادئ علم الاقتصاد والإحصاء', 'مهارات الإحصاء والتحليل المالي الأساسية'],
          keyVocabularyEn: [
            { term: 'Return on Equity (ROE)', definition: 'Net income divided by shareholders equity measuring financial profitability' },
            { term: 'Competitive Advantage', definition: 'Unique capabilities and resources allowing an enterprise to outperform competitors' }
          ],
          keyVocabularyAr: [
            { term: 'العائد على حقوق الملكية (ROE)', definition: 'صافي الربح مقسوماً على حقوق الملكية لقياس كفاءة توليد الأرباح' },
            { term: 'الميزة التنافسية', definition: 'القدرات والموارد الفريدة التي تمكن المنشأة من التفوق المستدام على منافسيها' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Case Context', phaseAr: 'التهيئة ودراسة الحالة الواقعية', duration: '15 min', activitiesEn: 'Review of real-world corporate case studies and open diagnostic dialogue', activitiesAr: 'استعراض دراسة حالة لشركة حقيقية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Modeling', phaseAr: 'التحليل المفاهيمي والنمذجة الرياضية', duration: '75 min', activitiesEn: 'Strategic modeling, solved numerical examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل الحسابية والتقييم، واختبار بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing accounting revenue growth with positive net cash flow and sustainable unit economics'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نمو الإيرادات المحاسبية وبين التدفق النقدي التشغيلي الموجب واقتصاديات الوحدة المستدامة'
          ],
          differentiationEn: {
            struggling: 'Provide guided visual formula templates, financial ratio cheat sheets, and step-by-step calculation guides.',
            advanced: 'Assign complex multi-scenario DCF valuations and cross-border M&A case competition simulations.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وجداول مبسطة للنسب المالية وخطوات حسابية متدرجة.',
            advanced: 'تكليف بنمذجة تقييم تدفقات نقدية DCF معقدة ودراسة صفقات اندماج واستحواذ دولية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring conceptual comprehension and business problem-solving.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل المالي والإداري.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding The Marketing Mix: Product, Price, Place, Promotion (4Ps) and Extended Service Mix (7Ps)?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (المزيج التسويقي السلعي (4Ps) وتوسعات مزيج الخدمات (7Ps: الأفراد، العمليات، والدليل المادي))؟",
            solutionEn: "The marketing mix is the tactical toolkit of controllable marketing variables used by a company to elicit desired buyer responses in a target market.",
            solutionAr: "المزيج التسويقي هو مجموعة الأدوات والمتغيرات التسويقية التي تتحكم بها المنشأة لتحفيز الاستجابة الشرائية لدى جمهورها المستهدف."
          }
        },
        worksheet: {
          id: 'th_bus_ch2_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Strategic Analysis of The Marketing Mix: Product, Price, Place, Promotion (4Ps) and Extended Service Mix (7Ps)",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ المزيج التسويقي السلعي (4Ps) وتوسعات مزيج الخدمات (7Ps: الأفراد، العمليات، والدليل المادي)",
          descriptionEn: 'Formative assessment, strategic case analysis, and numerical practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وحسابي لدراسة الحالات الإدارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'financial_valuation_lab',
          titleEn: "Financial Valuation & Marketing Mix Lab",
          titleAr: "مختبر التقييم المالي والمزيج التسويقي المتقدم",
          descriptionEn: 'Interactive Business Modeling Studio featuring DCF valuation, break-even simulation, Lean Canvas generation, and supply chain optimization.',
          descriptionAr: 'استوديو نمذجة إدارة الأعمال التفاعلي لمحاكاة تقييم التدفقات النقدية، تحليل نقطة التعادل، ومخطط نموذج العمل وسلاسل الإمداد.'
        }
      },
      {
        id: 'th_bus_ch2_l2',
        titleEn: "Lesson 2: Operational Applications and Real-World Evaluation of Market Research Methodologies: Primary vs. Secondary Intelligence and Quantitative Sampling",
        titleAr: "الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ منهجيات بحوث السوق: البيانات الأولية والثانوية، وأساليب جمع وتحليل المعلومات",
        summaryEn: "Comprehensive conceptual and applied mastery of Market Research Methodologies: Primary vs. Secondary Intelligence and Quantitative Sampling, Digital Marketing Channels, Search Engine Optimization (SEO), and Social Commerce, and Customer Relationship Management (CRM) and Building Long-Term Brand Equity.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ منهجيات بحوث السوق: البيانات الأولية والثانوية، وأساليب جمع وتحليل المعلومات، قنوات التسويق الرقمي، تحسين محركات البحث (SEO)، والتجارة عبر منصات التواصل، و إدارة علاقات العملاء (CRM) وبناء القيمة الرأسمالية للعلامة التجارية.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Market Research Methodologies: Primary vs. Secondary Intelligence and Quantitative Sampling\nMarket research systematically gathers, records, and analyzes data concerning market problems, trends, consumer tastes, and competitive behavior.\n\nPrimary research collects new, bespoke data via surveys and focus groups, whereas secondary research leverages existing census reports, trade data, and corporate filings.\n\nSampling bias and non-response distortions in quantitative market research threaten strategic validity, mandating statistically stratified probability sampling designs.\n\n#### 2. Digital Marketing Channels, Search Engine Optimization (SEO), and Social Commerce\nDigital marketing utilizes electronic channels—search engines, websites, email, and social networks—to connect with target audiences across digital touchpoints.\n\nSEO optimizes on-page content and technical web architecture to capture organic intent-driven search traffic without direct media spend per click.\n\nOmnichannel marketing orchestrates unified consumer data across offline stores and digital platforms, delivering seamless attribution and personalized conversion funnels.\n\n#### 3. Customer Relationship Management (CRM) and Building Long-Term Brand Equity\nCRM is a strategic approach that leverages customer data to cultivate long-term satisfaction, repeat patronage, and brand loyalty.\n\nRetaining existing customers costs significantly less than acquiring new ones; loyal brand advocates amplify organic word-of-mouth referral velocity.\n\nBrand equity represents the premium value a recognizable brand name confers on products, allowing price inelasticity and resilient corporate cash flows.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. منهجيات بحوث السوق: البيانات الأولية والثانوية، وأساليب جمع وتحليل المعلومات\nبحوث السوق هي الجمع والتحليل المنظم للبيانات والمعلومات المتعلقة بالفرص التسويقية والمستهلكين والمنافسين لدعم اتخاذ القرار.\n\nتجمع البحوث الأولية بيانات جديدة ومخصصة ميدانياً عبر الاستبيانات ومجموعات التركيز، بينما تستند البحوث الثانوية إلى التقارير والإحصاءات المنشورة مسبقاً.\n\nيهدد التحيز الإحصائي في العينات سلامة القرارات التسويقية، مما يفرض استخدام العينات العشوائية الطبقية لتمثيل مجتمع البحث تمثيلاً دقيقاً.\n\n#### ٢. قنوات التسويق الرقمي، تحسين محركات البحث (SEO)، والتجارة عبر منصات التواصل\nالتسويق الرقمي هو استخدام الوسائط الإلكترونية كمنصات التواصل ومحركات البحث والبريد الإلكتروني للوصول إلى العملاء وبناء التفاعل معهم.\n\nيهدف تحسين محركات البحث (SEO) إلى تصدر النتائج المجانية الأولى عبر جودة المحتوى والروابط الموثوقة لتوليد زيارات مستدامة دون تكلفة مباشرة للنقرة.\n\nيحقق التسويق متعدد القنوات (Omnichannel) تجربة متناغمة للمستهلك بدمج بيانات المتاجر الواقعية والمنصات الرقمية لرفع كفاءة مسار التحويل الشرائي.\n\n#### ٣. إدارة علاقات العملاء (CRM) وبناء القيمة الرأسمالية للعلامة التجارية\nإدارة علاقات العملاء هي استراتيجية تركز على استخدام بيانات المستهلكين لتعزيز رضاهم وزيادة المبيعات المتكررة وترسيخ ولائهم للعلامة.\n\nتكلفة الحفاظ على العميل الحالي أقل بكثير من تكلفة اكتساب عميل جديد؛ فالعملاء المخلصون يمثلون سفراء للعلامة يضاعفون المبيعات عبر التوصية الشفهية.\n\n#### ٣. إدارة علاقات العملاء (CRM) وبناء القيمة الرأسمالية للعلامة التجارية\nتمثل القيمة الرأسمالية للعلامة التجارية (Brand Equity) الأثر التفاضلي المعنوي والمالي الذي يمنحه اسم العلامة، مما يتيح فرض هوامش ربح أعلى ومرونة أقل للأسعار.",
        formulas: [
          {
            labelEn: "Market Research Methodologies: Primary vs. Secondary Intelligence and Quantitative Sampling",
            labelAr: "منهجيات بحوث السوق: البيانات الأولية والثانوية، وأساليب جمع وتحليل المعلومات",
            latex: "\\text{Core Rule: } Market Research Methodologies:"
          },
          {
            labelEn: "Digital Marketing Channels, Search Engine Optimization (SEO), and Social Commerce",
            labelAr: "قنوات التسويق الرقمي، تحسين محركات البحث (SEO)، والتجارة عبر منصات التواصل",
            latex: "\\text{Applied Maxim: } Digital Marketing Channels, Se"
          }
        ],
        moeRef: {
          bookTitleEn: "Business Administration & Entrepreneurship Grade 12",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-BUS-CH02-L2",
          pageRange: '65-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Operational Applications and Real-World Evaluation of Market Research Methodologies: Primary vs. Secondary Intelligence and Quantitative Sampling",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ منهجيات بحوث السوق: البيانات الأولية والثانوية، وأساليب جمع وتحليل المعلومات",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-BUS-CH02-L2",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Market Research Methodologies: Primary vs. Secondary Intelligence and Quantitative Sampling",
            "Apply strategic analytical thinking to Digital Marketing Channels, Search Engine Optimization (SEO), and Social Commerce",
            "Synthesize managerial resolutions for Customer Relationship Management (CRM) and Building Long-Term Brand Equity"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ منهجيات بحوث السوق: البيانات الأولية والثانوية، وأساليب جمع وتحليل المعلومات",
            "تطبيق التفكير التحليلي الناقد في مسألة قنوات التسويق الرقمي، تحسين محركات البحث (SEO)، والتجارة عبر منصات التواصل",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ إدارة علاقات العملاء (CRM) وبناء القيمة الرأسمالية للعلامة التجارية"
          ],
          prerequisitesEn: ['Principles of Economics', 'Foundational Mathematics & Statistics'],
          prerequisitesAr: ['مبادئ علم الاقتصاد والإحصاء', 'مهارات الإحصاء والتحليل المالي الأساسية'],
          keyVocabularyEn: [
            { term: 'Return on Equity (ROE)', definition: 'Net income divided by shareholders equity measuring financial profitability' },
            { term: 'Competitive Advantage', definition: 'Unique capabilities and resources allowing an enterprise to outperform competitors' }
          ],
          keyVocabularyAr: [
            { term: 'العائد على حقوق الملكية (ROE)', definition: 'صافي الربح مقسوماً على حقوق الملكية لقياس كفاءة توليد الأرباح' },
            { term: 'الميزة التنافسية', definition: 'القدرات والموارد الفريدة التي تمكن المنشأة من التفوق المستدام على منافسيها' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Case Context', phaseAr: 'التهيئة ودراسة الحالة الواقعية', duration: '15 min', activitiesEn: 'Review of real-world corporate case studies and open diagnostic dialogue', activitiesAr: 'استعراض دراسة حالة لشركة حقيقية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Modeling', phaseAr: 'التحليل المفاهيمي والنمذجة الرياضية', duration: '75 min', activitiesEn: 'Strategic modeling, solved numerical examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل الحسابية والتقييم، واختبار بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing accounting revenue growth with positive net cash flow and sustainable unit economics'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نمو الإيرادات المحاسبية وبين التدفق النقدي التشغيلي الموجب واقتصاديات الوحدة المستدامة'
          ],
          differentiationEn: {
            struggling: 'Provide guided visual formula templates, financial ratio cheat sheets, and step-by-step calculation guides.',
            advanced: 'Assign complex multi-scenario DCF valuations and cross-border M&A case competition simulations.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وجداول مبسطة للنسب المالية وخطوات حسابية متدرجة.',
            advanced: 'تكليف بنمذجة تقييم تدفقات نقدية DCF معقدة ودراسة صفقات اندماج واستحواذ دولية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring conceptual comprehension and business problem-solving.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل المالي والإداري.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Market Research Methodologies: Primary vs. Secondary Intelligence and Quantitative Sampling?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (منهجيات بحوث السوق: البيانات الأولية والثانوية، وأساليب جمع وتحليل المعلومات)؟",
            solutionEn: "Market research systematically gathers, records, and analyzes data concerning market problems, trends, consumer tastes, and competitive behavior.",
            solutionAr: "بحوث السوق هي الجمع والتحليل المنظم للبيانات والمعلومات المتعلقة بالفرص التسويقية والمستهلكين والمنافسين لدعم اتخاذ القرار."
          }
        },
        worksheet: {
          id: 'th_bus_ch2_l2_ws',
          titleEn: "Worksheet: Lesson 2: Operational Applications and Real-World Evaluation of Market Research Methodologies: Primary vs. Secondary Intelligence and Quantitative Sampling",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ منهجيات بحوث السوق: البيانات الأولية والثانوية، وأساليب جمع وتحليل المعلومات",
          descriptionEn: 'Formative assessment, strategic case analysis, and numerical practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وحسابي لدراسة الحالات الإدارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'financial_valuation_lab',
          titleEn: "Financial Valuation & Marketing Mix Lab",
          titleAr: "مختبر التقييم المالي والمزيج التسويقي المتقدم",
          descriptionEn: 'Interactive Business Modeling Studio featuring DCF valuation, break-even simulation, Lean Canvas generation, and supply chain optimization.',
          descriptionAr: 'استوديو نمذجة إدارة الأعمال التفاعلي لمحاكاة تقييم التدفقات النقدية، تحليل نقطة التعادل، ومخطط نموذج العمل وسلاسل الإمداد.'
        }
      }
    ],
    databank: businessCh2Databank,
    solvedExamples: businessCh2SolvedExamples,
    exerciseProblems: businessCh2Exercises
  },
  {
    id: 'th_bus_ch3',
    chapterNumber: 3,
    titleEn: "Operations, Supply Chain & Total Quality Management (TQM)",
    titleAr: "إدارة العمليات، سلاسل الإمداد وإدارة الجودة الشاملة",
    descriptionEn: "Operations planning, inventory management models (EOQ), supply chain logistics, Just-In-Time (JIT), Total Quality Management (TQM), Kaizen continuous improvement, and Six Sigma methodology.",
    descriptionAr: "تخطيط العمليات الإنتاجية، نماذج مراقبة المخزون وكمية الطلب الاقتصادية (EOQ)، لوجستيات سلاسل الإمداد، الإنتاج الآني (JIT)، إدارة الجودة الشاملة (TQM)، فلسفة كايزن، ومنهجية حيود ستة سيجما.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_bus_ch3_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Strategic Analysis of Operations Strategy, Capacity Planning, and Facility Layout Configurations",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ استراتيجيات إدارة العمليات، تخطيط الطاقة الإنتاجية، وتصميم المنشآت الصناعية والخدمية",
        summaryEn: "Comprehensive conceptual and applied mastery of Operations Strategy, Capacity Planning, and Facility Layout Configurations, Inventory Management and the Economic Order Quantity (EOQ) Mathematical Model, and Supply Chain Integration, Logistics Networks, and Just-In-Time (JIT) Manufacturing.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ استراتيجيات إدارة العمليات، تخطيط الطاقة الإنتاجية، وتصميم المنشآت الصناعية والخدمية، إدارة ومراقبة المخزون ونموذج كمية الطلب الاقتصادية (EOQ) الرياضي، و تكامل سلاسل الإمداد، الشبكات اللوجستية، ونظام الإنتاج في الوقت المحدد تماماً (JIT).",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Operations Strategy, Capacity Planning, and Facility Layout Configurations\nOperations management oversees the transformation of raw inputs into finished goods and delivered services with maximum productivity and quality.\n\nFacility layout configurations (process, product, cellular, fixed-position) are selected based on production volume and product standardization vs. customization.\n\nDiseconomies of scale emerge when capacity expansion outstrips managerial coordination, leading to bureaucratic logjams, material bottlenecks, and escalated unit costs.\n\n#### 2. Inventory Management and the Economic Order Quantity (EOQ) Mathematical Model\nInventory management ensures sufficient materials are available for uninterrupted production without tying up excessive working capital in idle stock.\n\nThe EOQ model calculates the optimal order size that minimizes total inventory costs: EOQ = sqrt(2DS / H), balancing ordering costs against holding costs.\n\nSafety stock calculations buffer against demand volatility and lead-time variability, safeguarding the service fill-rate against catastrophic stockout penalties.\n\n#### 3. Supply Chain Integration, Logistics Networks, and Just-In-Time (JIT) Manufacturing\nA supply chain encompasses the entire network of entities, resources, activities, and technologies involved in moving a product from raw source to end consumer.\n\nJust-In-Time (JIT) philosophy, pioneered by Toyota, pulls parts through assembly only when needed, driving work-in-progress (WIP) inventory toward zero.\n\nThe Bullwhip Effect amplifies order variability upstream along supply chains due to demand misforecasting, batching, and lack of real-time POS data visibility.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. استراتيجيات إدارة العمليات، تخطيط الطاقة الإنتاجية، وتصميم المنشآت الصناعية والخدمية\nإدارة العمليات هي الإشراف على تحويل المدخلات من مواد وطاقة وجهد بشري إلى سلع وخدمات تامة الصنع بأعلى إنتاجية وجودة ممكنة.\n\nيتحدد تصميم المصنع أو المنشأة (تصميم حسب المنتج، أو حسب العملية، أو خلوي) وفقاً لحجم الإنتاج ودرجة التنميط مقابل التخصيص المطلوب.\n\nتظهر سلبيات وفورات الحجم (Diseconomies of Scale) عندما يتجاوز التوسع الإنتاجي قدرة التنسيق الإداري، مسبباً اختناقات تشغيلية وارتفاعاً في تكلفة الوحدة.\n\n#### ٢. إدارة ومراقبة المخزون ونموذج كمية الطلب الاقتصادية (EOQ) الرياضي\nإدارة المخزون تضمن توفير المواد اللازمة لاستمرار خطوط الإنتاج والمبيعات دون تعطيل مبالغ نقدية ضخمة في مخزون راكد ومكلف.\n\nيحدد نموذج كمية الطلب الاقتصادية (EOQ) الحجم الأمثل للطلبية لتقليل التكاليف الإجمالية: EOQ = sqrt(2DS / H) بموازنة تكلفة إصدار الطلب وتكلفة التخزين.\n\nيحمي مخزون الأمان المنشأة من تقلبات الطلب وتأخر الموردين، مما يمنع تكاليف نفاد المخزون الباهظة وفقدان ثقة العملاء بالسوق.\n\n#### ٣. تكامل سلاسل الإمداد، الشبكات اللوجستية، ونظام الإنتاج في الوقت المحدد تماماً (JIT)\nسلسلة الإمداد هي الشبكة المتكاملة من الموردين والمصانع ومراكز التوزيع التي تتعاون لإيصال المنتج النهائي من المصدر إلى يد المستهلك.\n\nيقوم نظام الإنتاج الآني (JIT) على سحب المواد للأقسام فقط عند الحاجة الفعلية إليها، مما يخفض المخزون تحت التشغيل إلى الصفر تقريباً ويوفر المساحات.\n\n#### ٣. تكامل سلاسل الإمداد، الشبكات اللوجستية، ونظام الإنتاج في الوقت المحدد تماماً (JIT)\nتنتج \"ظاهرة السوط\" (Bullwhip Effect) عن تضخم تقلبات الطلب المتراكمة كلما ابتعدنا عن المستهلك نحو الموردين الأوائل، نتيجة ضعف الشفافية وغياب الربط الرقمي اللحظي.",
        formulas: [
          {
            labelEn: "Operations Strategy, Capacity Planning, and Facility Layout Configurations",
            labelAr: "استراتيجيات إدارة العمليات، تخطيط الطاقة الإنتاجية، وتصميم المنشآت الصناعية والخدمية",
            latex: "\\text{Core Rule: } Operations Strategy, Capacity "
          },
          {
            labelEn: "Inventory Management and the Economic Order Quantity (EOQ) Mathematical Model",
            labelAr: "إدارة ومراقبة المخزون ونموذج كمية الطلب الاقتصادية (EOQ) الرياضي",
            latex: "\\text{Applied Maxim: } Inventory Management and the E"
          }
        ],
        moeRef: {
          bookTitleEn: "Business Administration & Entrepreneurship Grade 12",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-BUS-CH03-L1",
          pageRange: '85-120'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Strategic Analysis of Operations Strategy, Capacity Planning, and Facility Layout Configurations",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ استراتيجيات إدارة العمليات، تخطيط الطاقة الإنتاجية، وتصميم المنشآت الصناعية والخدمية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-BUS-CH03-L1",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Operations Strategy, Capacity Planning, and Facility Layout Configurations",
            "Apply strategic analytical thinking to Inventory Management and the Economic Order Quantity (EOQ) Mathematical Model",
            "Synthesize managerial resolutions for Supply Chain Integration, Logistics Networks, and Just-In-Time (JIT) Manufacturing"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ استراتيجيات إدارة العمليات، تخطيط الطاقة الإنتاجية، وتصميم المنشآت الصناعية والخدمية",
            "تطبيق التفكير التحليلي الناقد في مسألة إدارة ومراقبة المخزون ونموذج كمية الطلب الاقتصادية (EOQ) الرياضي",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ تكامل سلاسل الإمداد، الشبكات اللوجستية، ونظام الإنتاج في الوقت المحدد تماماً (JIT)"
          ],
          prerequisitesEn: ['Principles of Economics', 'Foundational Mathematics & Statistics'],
          prerequisitesAr: ['مبادئ علم الاقتصاد والإحصاء', 'مهارات الإحصاء والتحليل المالي الأساسية'],
          keyVocabularyEn: [
            { term: 'Return on Equity (ROE)', definition: 'Net income divided by shareholders equity measuring financial profitability' },
            { term: 'Competitive Advantage', definition: 'Unique capabilities and resources allowing an enterprise to outperform competitors' }
          ],
          keyVocabularyAr: [
            { term: 'العائد على حقوق الملكية (ROE)', definition: 'صافي الربح مقسوماً على حقوق الملكية لقياس كفاءة توليد الأرباح' },
            { term: 'الميزة التنافسية', definition: 'القدرات والموارد الفريدة التي تمكن المنشأة من التفوق المستدام على منافسيها' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Case Context', phaseAr: 'التهيئة ودراسة الحالة الواقعية', duration: '15 min', activitiesEn: 'Review of real-world corporate case studies and open diagnostic dialogue', activitiesAr: 'استعراض دراسة حالة لشركة حقيقية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Modeling', phaseAr: 'التحليل المفاهيمي والنمذجة الرياضية', duration: '75 min', activitiesEn: 'Strategic modeling, solved numerical examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل الحسابية والتقييم، واختبار بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing accounting revenue growth with positive net cash flow and sustainable unit economics'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نمو الإيرادات المحاسبية وبين التدفق النقدي التشغيلي الموجب واقتصاديات الوحدة المستدامة'
          ],
          differentiationEn: {
            struggling: 'Provide guided visual formula templates, financial ratio cheat sheets, and step-by-step calculation guides.',
            advanced: 'Assign complex multi-scenario DCF valuations and cross-border M&A case competition simulations.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وجداول مبسطة للنسب المالية وخطوات حسابية متدرجة.',
            advanced: 'تكليف بنمذجة تقييم تدفقات نقدية DCF معقدة ودراسة صفقات اندماج واستحواذ دولية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring conceptual comprehension and business problem-solving.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل المالي والإداري.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Operations Strategy, Capacity Planning, and Facility Layout Configurations?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (استراتيجيات إدارة العمليات، تخطيط الطاقة الإنتاجية، وتصميم المنشآت الصناعية والخدمية)؟",
            solutionEn: "Operations management oversees the transformation of raw inputs into finished goods and delivered services with maximum productivity and quality.",
            solutionAr: "إدارة العمليات هي الإشراف على تحويل المدخلات من مواد وطاقة وجهد بشري إلى سلع وخدمات تامة الصنع بأعلى إنتاجية وجودة ممكنة."
          }
        },
        worksheet: {
          id: 'th_bus_ch3_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Strategic Analysis of Operations Strategy, Capacity Planning, and Facility Layout Configurations",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ استراتيجيات إدارة العمليات، تخطيط الطاقة الإنتاجية، وتصميم المنشآت الصناعية والخدمية",
          descriptionEn: 'Formative assessment, strategic case analysis, and numerical practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وحسابي لدراسة الحالات الإدارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'lean_canvas_builder',
          titleEn: "Lean Canvas & Startup Studio",
          titleAr: "مخطط نموذج العمل الرشيق واستوديو الشركات الناشئة",
          descriptionEn: 'Interactive Business Modeling Studio featuring DCF valuation, break-even simulation, Lean Canvas generation, and supply chain optimization.',
          descriptionAr: 'استوديو نمذجة إدارة الأعمال التفاعلي لمحاكاة تقييم التدفقات النقدية، تحليل نقطة التعادل، ومخطط نموذج العمل وسلاسل الإمداد.'
        }
      },
      {
        id: 'th_bus_ch3_l2',
        titleEn: "Lesson 2: Operational Applications and Real-World Evaluation of Total Quality Management (TQM), Kaizen Philosophy, and the Deming PDCA Cycle",
        titleAr: "الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ إدارة الجودة الشاملة (TQM)، فلسفة كايزن اليابانية، ودورة ديمنج للتحسين المستمر (PDCA)",
        summaryEn: "Comprehensive conceptual and applied mastery of Total Quality Management (TQM), Kaizen Philosophy, and the Deming PDCA Cycle, Six Sigma Methodology (DMAIC), Statistical Process Control, and Defect Elimination, and Lean Manufacturing, Value Stream Mapping (VSM), and Elimination of the 7 Operational Wastes (Muda).",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ إدارة الجودة الشاملة (TQM)، فلسفة كايزن اليابانية، ودورة ديمنج للتحسين المستمر (PDCA)، منهجية حيود ستة سيجما (DMAIC)، الرقابة الإحصائية على العمليات، والقضاء على العيوب، و التصنيع الرشيق (Lean)، خرائط تدفق القيمة (VSM)، والقضاء على أشكال الهدر السبعة (Muda).",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Total Quality Management (TQM), Kaizen Philosophy, and the Deming PDCA Cycle\nTotal Quality Management (TQM) is an organization-wide commitment to continuous improvement in products, processes, and corporate culture to exceed customer expectations.\n\nThe Deming Cycle structures quality enhancement into four iterative phases: Plan (identify issues), Do (test solution), Check (measure results), and Act (standardize gains).\n\nKaizen empowers frontline operators to implement incremental daily enhancements, dismantling top-down executive complacency through participatory workplace ownership.\n\n#### 2. Six Sigma Methodology (DMAIC), Statistical Process Control, and Defect Elimination\nSix Sigma is a disciplined data-driven approach designed to eliminate defects and process variations, achieving no more than 3.4 defects per million opportunities (DPMO).\n\nThe DMAIC roadmap drives improvement through: Define (problem and goals), Measure (baseline data), Analyze (root causes), Improve (implement fixes), and Control (sustain gains).\n\nStatistical Process Control (SPC) uses control charts with upper and lower control limits (UCL/LCL) to distinguish common-cause variations from assignable special-cause disruptions.\n\n#### 3. Lean Manufacturing, Value Stream Mapping (VSM), and Elimination of the 7 Operational Wastes (Muda)\nLean thinking focuses relentlessly on maximizing customer value while eliminating all non-value-adding activities (waste/muda) across production workflows.\n\nThe seven classic operational wastes (TIMWOOD) comprise: Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, and Defects.\n\nValue Stream Mapping (VSM) visually maps the lifecycle of production information and material flows, pinpointing cycle time delays to unlock rapid inventory throughput velocity.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. إدارة الجودة الشاملة (TQM)، فلسفة كايزن اليابانية، ودورة ديمنج للتحسين المستمر (PDCA)\nإدارة الجودة الشاملة (TQM) هي التزام مؤسسي شامل بالتحسين المستمر في المنتجات والعمليات وثقافة العمل لإرضاء وتجاوز تطلعات العملاء.\n\nتنتظم الجودة في دورة ديمنج عبر أربع خطوات مستمرة: خطط (Plan)، نفذ (Do)، افحص وقس النتائج (Check)، وتصرف وثبّت التحسين (Act).\n\nتمكن فلسفة كايزن العمال والمهندسين في خطوط الإنتاج من إجراء تحسينات يومية تراكمية صغيرة ومستمرة، مما يصنع ثقافة جودة متجذرة لا تعتمد فقط على القرارات الفوقية.\n\n#### ٢. منهجية حيود ستة سيجما (DMAIC)، الرقابة الإحصائية على العمليات، والقضاء على العيوب\nستة سيجما هي منهجية إحصائية صارمة تهدف إلى القضاء على العيوب وتقليل التباين في العمليات للوصول إلى دقة تفوق ٩٩.٩٩٩٦٪ (أقل من ٣.٤ عيب لكل مليون فرصة).\n\nتتبع ستة سيجما مسار DMAIC الإجرائي: حدد المشكلة (Define)، قس الأداء (Measure)، حلل الأسباب الجذرية (Analyze)، حسّن العملية (Improve)، واضبط النتائج (Control).\n\nتميز خرائط الرقابة الإحصائية (SPC) بحدودها العليا والدنيا بين التباين الطبيعي المعتاد في العملية وبين الانحرافات الاستثنائية التي تستدعي تدخلاً هندسياً فورياً.\n\n#### ٣. التصنيع الرشيق (Lean)، خرائط تدفق القيمة (VSM)، والقضاء على أشكال الهدر السبعة (Muda)\nيركز الفكر الرشيق (Lean) على تعظيم القيمة المقدمة للعميل من خلال القضاء الصارم على كافة الأنشطة التي تستهلك وقتاً وموارداً دون إضافة قيمة حقيقية (الهدر).\n\nتتحدد أشكال الهدر السبعة الكلاسيكية في: النقل الزائد، المخزون الراكد، الحركة غير الضرورية، الانتظار، الإفراط في الإنتاج، المعالجة الزائدة، والعيوب المصنعية.\n\n#### ٣. التصنيع الرشيق (Lean)، خرائط تدفق القيمة (VSM)، والقضاء على أشكال الهدر السبعة (Muda)\nتكشف خرائط تدفق القيمة (VSM) عن مسارات المواد وتدفق المعلومات، مما يحدد بدقة نقاط الاختناق لتقليص زمن دورة الإنتاج الإجمالية وتسريع تسليم الطلبيات.",
        formulas: [
          {
            labelEn: "Total Quality Management (TQM), Kaizen Philosophy, and the Deming PDCA Cycle",
            labelAr: "إدارة الجودة الشاملة (TQM)، فلسفة كايزن اليابانية، ودورة ديمنج للتحسين المستمر (PDCA)",
            latex: "\\text{Core Rule: } Total Quality Management (TQM)"
          },
          {
            labelEn: "Six Sigma Methodology (DMAIC), Statistical Process Control, and Defect Elimination",
            labelAr: "منهجية حيود ستة سيجما (DMAIC)، الرقابة الإحصائية على العمليات، والقضاء على العيوب",
            latex: "\\text{Applied Maxim: } Six Sigma Methodology (DMAIC),"
          }
        ],
        moeRef: {
          bookTitleEn: "Business Administration & Entrepreneurship Grade 12",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-BUS-CH03-L2",
          pageRange: '105-140'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Operational Applications and Real-World Evaluation of Total Quality Management (TQM), Kaizen Philosophy, and the Deming PDCA Cycle",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ إدارة الجودة الشاملة (TQM)، فلسفة كايزن اليابانية، ودورة ديمنج للتحسين المستمر (PDCA)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-BUS-CH03-L2",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Total Quality Management (TQM), Kaizen Philosophy, and the Deming PDCA Cycle",
            "Apply strategic analytical thinking to Six Sigma Methodology (DMAIC), Statistical Process Control, and Defect Elimination",
            "Synthesize managerial resolutions for Lean Manufacturing, Value Stream Mapping (VSM), and Elimination of the 7 Operational Wastes (Muda)"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ إدارة الجودة الشاملة (TQM)، فلسفة كايزن اليابانية، ودورة ديمنج للتحسين المستمر (PDCA)",
            "تطبيق التفكير التحليلي الناقد في مسألة منهجية حيود ستة سيجما (DMAIC)، الرقابة الإحصائية على العمليات، والقضاء على العيوب",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ التصنيع الرشيق (Lean)، خرائط تدفق القيمة (VSM)، والقضاء على أشكال الهدر السبعة (Muda)"
          ],
          prerequisitesEn: ['Principles of Economics', 'Foundational Mathematics & Statistics'],
          prerequisitesAr: ['مبادئ علم الاقتصاد والإحصاء', 'مهارات الإحصاء والتحليل المالي الأساسية'],
          keyVocabularyEn: [
            { term: 'Return on Equity (ROE)', definition: 'Net income divided by shareholders equity measuring financial profitability' },
            { term: 'Competitive Advantage', definition: 'Unique capabilities and resources allowing an enterprise to outperform competitors' }
          ],
          keyVocabularyAr: [
            { term: 'العائد على حقوق الملكية (ROE)', definition: 'صافي الربح مقسوماً على حقوق الملكية لقياس كفاءة توليد الأرباح' },
            { term: 'الميزة التنافسية', definition: 'القدرات والموارد الفريدة التي تمكن المنشأة من التفوق المستدام على منافسيها' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Case Context', phaseAr: 'التهيئة ودراسة الحالة الواقعية', duration: '15 min', activitiesEn: 'Review of real-world corporate case studies and open diagnostic dialogue', activitiesAr: 'استعراض دراسة حالة لشركة حقيقية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Modeling', phaseAr: 'التحليل المفاهيمي والنمذجة الرياضية', duration: '75 min', activitiesEn: 'Strategic modeling, solved numerical examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل الحسابية والتقييم، واختبار بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing accounting revenue growth with positive net cash flow and sustainable unit economics'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نمو الإيرادات المحاسبية وبين التدفق النقدي التشغيلي الموجب واقتصاديات الوحدة المستدامة'
          ],
          differentiationEn: {
            struggling: 'Provide guided visual formula templates, financial ratio cheat sheets, and step-by-step calculation guides.',
            advanced: 'Assign complex multi-scenario DCF valuations and cross-border M&A case competition simulations.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وجداول مبسطة للنسب المالية وخطوات حسابية متدرجة.',
            advanced: 'تكليف بنمذجة تقييم تدفقات نقدية DCF معقدة ودراسة صفقات اندماج واستحواذ دولية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring conceptual comprehension and business problem-solving.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل المالي والإداري.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Total Quality Management (TQM), Kaizen Philosophy, and the Deming PDCA Cycle?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (إدارة الجودة الشاملة (TQM)، فلسفة كايزن اليابانية، ودورة ديمنج للتحسين المستمر (PDCA))؟",
            solutionEn: "Total Quality Management (TQM) is an organization-wide commitment to continuous improvement in products, processes, and corporate culture to exceed customer expectations.",
            solutionAr: "إدارة الجودة الشاملة (TQM) هي التزام مؤسسي شامل بالتحسين المستمر في المنتجات والعمليات وثقافة العمل لإرضاء وتجاوز تطلعات العملاء."
          }
        },
        worksheet: {
          id: 'th_bus_ch3_l2_ws',
          titleEn: "Worksheet: Lesson 2: Operational Applications and Real-World Evaluation of Total Quality Management (TQM), Kaizen Philosophy, and the Deming PDCA Cycle",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ إدارة الجودة الشاملة (TQM)، فلسفة كايزن اليابانية، ودورة ديمنج للتحسين المستمر (PDCA)",
          descriptionEn: 'Formative assessment, strategic case analysis, and numerical practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وحسابي لدراسة الحالات الإدارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'lean_canvas_builder',
          titleEn: "Lean Canvas & Startup Studio",
          titleAr: "مخطط نموذج العمل الرشيق واستوديو الشركات الناشئة",
          descriptionEn: 'Interactive Business Modeling Studio featuring DCF valuation, break-even simulation, Lean Canvas generation, and supply chain optimization.',
          descriptionAr: 'استوديو نمذجة إدارة الأعمال التفاعلي لمحاكاة تقييم التدفقات النقدية، تحليل نقطة التعادل، ومخطط نموذج العمل وسلاسل الإمداد.'
        }
      }
    ],
    databank: businessCh3Databank,
    solvedExamples: businessCh3SolvedExamples,
    exerciseProblems: businessCh3Exercises
  },
  {
    id: 'th_bus_ch4',
    chapterNumber: 4,
    titleEn: "Human Resource Management, Leadership & Organizational Dynamics",
    titleAr: "إدارة الموارد البشرية، القيادة المؤسسية وديناميكيات السلوك التنظيمي",
    descriptionEn: "Strategic human resource planning, talent acquisition, performance appraisal (KPIs & 360-degree feedback), motivation theories (Maslow, Herzberg), leadership styles, and change management.",
    descriptionAr: "التخطيط الاستراتيجي للموارد البشرية، استقطاب واختيار الكفاءات، تقييم الأداء ومؤشرات KPIs والتقييم الشامل، نظريات التحفيز والرضا الوظيفي، أنماط القيادة، وإدارة التغيير المؤسسي.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_bus_ch4_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Strategic Analysis of Strategic Human Resource Planning, Job Analysis, and Talent Acquisition Pipelines",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ التخطيط الاستراتيجي للموارد البشرية، التحليل الوظيفي، وبناء مسارات استقطاب الكفاءات",
        summaryEn: "Comprehensive conceptual and applied mastery of Strategic Human Resource Planning, Job Analysis, and Talent Acquisition Pipelines, Performance Appraisal Systems, Key Performance Indicators (KPIs), and 360-Degree Feedback, and Motivation Theories: Maslow's Hierarchy, Herzberg's Motivator-Hygiene Theory, and Vroom's Expectancy.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ التخطيط الاستراتيجي للموارد البشرية، التحليل الوظيفي، وبناء مسارات استقطاب الكفاءات، نظم تقييم الأداء الوظيفي، مؤشرات الأداء الرئيسية (KPIs)، ومنهج التقييم الشامل (360 درجة)، و نظريات التحفيز الإداري: هرم ماسلو، نظرية العاملين لهيرزبرج، ونظرية التوقع لفروم.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Strategic Human Resource Planning, Job Analysis, and Talent Acquisition Pipelines\nHuman Resource Management (HRM) maximizes employee productivity, engagement, and development to advance organizational strategic objectives.\n\nJob analysis yields two essential outputs: Job Description (duties, working conditions) and Job Specification (human qualifications, skills, and experience required).\n\nAligning HR forecasting models with corporate growth strategies prevents costly understaffing operational bottlenecks and bloated labor expense overheads.\n\n#### 2. Performance Appraisal Systems, Key Performance Indicators (KPIs), and 360-Degree Feedback\nPerformance appraisal systematically evaluates employee job contributions, competencies, and developmental growth over a specified review cycle.\n\nKey Performance Indicators (KPIs) measure quantifiable operational outcomes, while 360-degree feedback synthesizes multi-rater evaluations from peers, supervisors, and direct reports.\n\nMitigating cognitive evaluation biases—such as the halo effect, recency bias, and central tendency—requires objective rubrics and continuous calibrated performance conversations.\n\n#### 3. Motivation Theories: Maslow's Hierarchy, Herzberg's Motivator-Hygiene Theory, and Vroom's Expectancy\nEmployee motivation drives the energy, commitment, and creativity that personnel apply to their work tasks and team responsibilities.\n\nHerzberg differentiates hygiene factors (salary, job security, which prevent dissatisfaction) from true motivators (achievement, recognition, which ignite peak performance).\n\nVroom's Expectancy Theory mathematically models motivation as: Motivation = Expectancy * Instrumentality * Valence; a breakdown in any single link reduces total motivation to zero.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. التخطيط الاستراتيجي للموارد البشرية، التحليل الوظيفي، وبناء مسارات استقطاب الكفاءات\nإدارة الموارد البشرية هي الاستثمار الاستراتيجي في رأس المال البشري عبر الاستقطاب والتطوير والتحفيز لتحقيق أهداف المؤسسة بكفاءة عالية.\n\nينتج عن التحليل الوظيفي وثيقتان أساسيتان: الوصف الوظيفي (يحدد الواجبات والمهام وظروف العمل)، والتوصيف الوظيفي (يحدد المؤهلات والمهارات والخبرات المطلوبة في شاغل الوظيفة).\n\nيحمي التنبؤ الدقيق باحتياجات القوى العاملة المؤسسة من عجز العمالة الذي يعطل المشروعات، ومن التوظيف الزائد الذي يرفع التكاليف الثابتة ويهدر الأرباح.\n\n#### ٢. نظم تقييم الأداء الوظيفي، مؤشرات الأداء الرئيسية (KPIs)، ومنهج التقييم الشامل (360 درجة)\nتقييم الأداء هو التقدير المنهجي لكفاءة وإنجازات الموظف لمهامه الوظيفية لتحديد نقاط القوة ومجالات التطوير واحتياجات التدريب والمكافآت.\n\nتقيس مؤشرات KPIs المخرجات الكمية المحددة، بينما يجمع تقييم 360 درجة الآراء من الرؤساء والزملاء والمرؤوسين والعملاء لتقديم رؤية تقييمية متكاملة ومنصفة.\n\nيتطلب تحصين تقييم الأداء من التحيزات الذاتية (كأثر الهالة وحداثة التجربة والميل للوسطية) اعتماد معايير رقمية محددة وحوارات تقييمية مستمرة طوال العام.\n\n#### ٣. نظريات التحفيز الإداري: هرم ماسلو، نظرية العاملين لهيرزبرج، ونظرية التوقع لفروم\nالتحفيز هو القوى والدوافع الداخلية والخارجية التي تشعل حماس الموظف وتوجه سلوكه نحو تحقيق إنجازات استثنائية لصالح المؤسسة.\n\nيفرق هيرزبرج بين \"عوامل الوقاية\" كالراتب والأمان الوظيفي (عدم توفرها يسبب استياءً ولكن توفرها لا يحفز بذاته) وبين \"المحفزات الحقيقية\" كالتقدير والإنجاز والترقي.\n\n#### ٣. نظريات التحفيز الإداري: هرم ماسلو، نظرية العاملين لهيرزبرج، ونظرية التوقع لفروم\nتصيغ نظرية التوقع لفروم التحفيز كحاصل ضرب: التوقع * الوسيلة * القيمة؛ فإذا اعتقد الموظف أن جهده لن يؤدي للنتيجة، تتلاشى دوافعه تماماً مهما كانت المكافأة.",
        formulas: [
          {
            labelEn: "Strategic Human Resource Planning, Job Analysis, and Talent Acquisition Pipelines",
            labelAr: "التخطيط الاستراتيجي للموارد البشرية، التحليل الوظيفي، وبناء مسارات استقطاب الكفاءات",
            latex: "\\text{Core Rule: } Strategic Human Resource Plann"
          },
          {
            labelEn: "Performance Appraisal Systems, Key Performance Indicators (KPIs), and 360-Degree Feedback",
            labelAr: "نظم تقييم الأداء الوظيفي، مؤشرات الأداء الرئيسية (KPIs)، ومنهج التقييم الشامل (360 درجة)",
            latex: "\\text{Applied Maxim: } Performance Appraisal Systems,"
          }
        ],
        moeRef: {
          bookTitleEn: "Business Administration & Entrepreneurship Grade 12",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-BUS-CH04-L1",
          pageRange: '125-160'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Strategic Analysis of Strategic Human Resource Planning, Job Analysis, and Talent Acquisition Pipelines",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ التخطيط الاستراتيجي للموارد البشرية، التحليل الوظيفي، وبناء مسارات استقطاب الكفاءات",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-BUS-CH04-L1",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Strategic Human Resource Planning, Job Analysis, and Talent Acquisition Pipelines",
            "Apply strategic analytical thinking to Performance Appraisal Systems, Key Performance Indicators (KPIs), and 360-Degree Feedback",
            "Synthesize managerial resolutions for Motivation Theories: Maslow's Hierarchy, Herzberg's Motivator-Hygiene Theory, and Vroom's Expectancy"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ التخطيط الاستراتيجي للموارد البشرية، التحليل الوظيفي، وبناء مسارات استقطاب الكفاءات",
            "تطبيق التفكير التحليلي الناقد في مسألة نظم تقييم الأداء الوظيفي، مؤشرات الأداء الرئيسية (KPIs)، ومنهج التقييم الشامل (360 درجة)",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ نظريات التحفيز الإداري: هرم ماسلو، نظرية العاملين لهيرزبرج، ونظرية التوقع لفروم"
          ],
          prerequisitesEn: ['Principles of Economics', 'Foundational Mathematics & Statistics'],
          prerequisitesAr: ['مبادئ علم الاقتصاد والإحصاء', 'مهارات الإحصاء والتحليل المالي الأساسية'],
          keyVocabularyEn: [
            { term: 'Return on Equity (ROE)', definition: 'Net income divided by shareholders equity measuring financial profitability' },
            { term: 'Competitive Advantage', definition: 'Unique capabilities and resources allowing an enterprise to outperform competitors' }
          ],
          keyVocabularyAr: [
            { term: 'العائد على حقوق الملكية (ROE)', definition: 'صافي الربح مقسوماً على حقوق الملكية لقياس كفاءة توليد الأرباح' },
            { term: 'الميزة التنافسية', definition: 'القدرات والموارد الفريدة التي تمكن المنشأة من التفوق المستدام على منافسيها' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Case Context', phaseAr: 'التهيئة ودراسة الحالة الواقعية', duration: '15 min', activitiesEn: 'Review of real-world corporate case studies and open diagnostic dialogue', activitiesAr: 'استعراض دراسة حالة لشركة حقيقية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Modeling', phaseAr: 'التحليل المفاهيمي والنمذجة الرياضية', duration: '75 min', activitiesEn: 'Strategic modeling, solved numerical examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل الحسابية والتقييم، واختبار بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing accounting revenue growth with positive net cash flow and sustainable unit economics'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نمو الإيرادات المحاسبية وبين التدفق النقدي التشغيلي الموجب واقتصاديات الوحدة المستدامة'
          ],
          differentiationEn: {
            struggling: 'Provide guided visual formula templates, financial ratio cheat sheets, and step-by-step calculation guides.',
            advanced: 'Assign complex multi-scenario DCF valuations and cross-border M&A case competition simulations.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وجداول مبسطة للنسب المالية وخطوات حسابية متدرجة.',
            advanced: 'تكليف بنمذجة تقييم تدفقات نقدية DCF معقدة ودراسة صفقات اندماج واستحواذ دولية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring conceptual comprehension and business problem-solving.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل المالي والإداري.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Strategic Human Resource Planning, Job Analysis, and Talent Acquisition Pipelines?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (التخطيط الاستراتيجي للموارد البشرية، التحليل الوظيفي، وبناء مسارات استقطاب الكفاءات)؟",
            solutionEn: "Human Resource Management (HRM) maximizes employee productivity, engagement, and development to advance organizational strategic objectives.",
            solutionAr: "إدارة الموارد البشرية هي الاستثمار الاستراتيجي في رأس المال البشري عبر الاستقطاب والتطوير والتحفيز لتحقيق أهداف المؤسسة بكفاءة عالية."
          }
        },
        worksheet: {
          id: 'th_bus_ch4_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Strategic Analysis of Strategic Human Resource Planning, Job Analysis, and Talent Acquisition Pipelines",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ التخطيط الاستراتيجي للموارد البشرية، التحليل الوظيفي، وبناء مسارات استقطاب الكفاءات",
          descriptionEn: 'Formative assessment, strategic case analysis, and numerical practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وحسابي لدراسة الحالات الإدارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'supply_chain_simulator',
          titleEn: "Supply Chain & Unit Economics Simulator",
          titleAr: "محاكي سلاسل الإمداد واقتصاديات الوحدة الرقمية",
          descriptionEn: 'Interactive Business Modeling Studio featuring DCF valuation, break-even simulation, Lean Canvas generation, and supply chain optimization.',
          descriptionAr: 'استوديو نمذجة إدارة الأعمال التفاعلي لمحاكاة تقييم التدفقات النقدية، تحليل نقطة التعادل، ومخطط نموذج العمل وسلاسل الإمداد.'
        }
      },
      {
        id: 'th_bus_ch4_l2',
        titleEn: "Lesson 2: Operational Applications and Real-World Evaluation of Leadership Typologies: Transformational, Transactional, Situational, and Servant Models",
        titleAr: "الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ أنماط القيادة الإدارية: القيادة التحويلية، الإجرائية، الموقفية، والقيادة الخادمة",
        summaryEn: "Comprehensive conceptual and applied mastery of Leadership Typologies: Transformational, Transactional, Situational, and Servant Models, Organizational Change Management, Kotter's 8-Stage Process, and Resistance Dynamics, and Workplace Conflict Resolution, Negotiation Architectures, and Principled Bargaining.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ أنماط القيادة الإدارية: القيادة التحويلية، الإجرائية، الموقفية، والقيادة الخادمة، إدارة التغيير المؤسسي، نموذج كوتر ذو المراحل الثماني، وديناميكيات مقاومة التغيير، و فض النزاعات الإدارية، استراتيجيات التفاوض، وأسلوب هارفارد للتفاوض القائم على المبادئ.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Leadership Typologies: Transformational, Transactional, Situational, and Servant Models\nLeadership is the interpersonal influence process of inspiring, guiding, and mobilizing team members toward achieving shared organizational aspirations.\n\nTransformational leaders inspire followers through intellectual stimulation and vision; transactional leaders manage via contingent rewards and corrective exceptions.\n\nHersey-Blanchard Situational Leadership demonstrates effective leaders dynamically adapt their style (Directing, Coaching, Supporting, Delegating) to match team developmental maturity.\n\n#### 2. Organizational Change Management, Kotter's 8-Stage Process, and Resistance Dynamics\nChange management guides how organizations prepare, equip, and successfully support individuals to adopt organizational, operational, and cultural changes.\n\nKotter's model sequences transformation: Establishing Urgency, Creating a Guiding Coalition, Developing a Vision, Communicating, Empowering Action, Generating Short-Term Wins, Consolidating, and Anchoring in Culture.\n\nEmployee resistance to change stems primarily from fear of incompetence, loss of status, and communication vacuums; proactive participation converts skeptics into champions.\n\n#### 3. Workplace Conflict Resolution, Negotiation Architectures, and Principled Bargaining\nConflict resolution utilizes structured communication and problem-solving techniques to resolve organizational disputes constructively and equitably.\n\nThomas-Kilmann conflict modes span Competing, Accommodating, Avoiding, Compromising, and Collaborating, selected based on relationship importance and assertiveness.\n\nHarvard Principled Negotiation separates the people from the problem, focuses on underlying interests rather than rigid positions, and establishes objective criteria and BATNA.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. أنماط القيادة الإدارية: القيادة التحويلية، الإجرائية، الموقفية، والقيادة الخادمة\nالقيادة هي القدرة على التأثير الإيجابي في الأفراد وتوجيه طاقاتهم وإلهامهم لتحقيق الرؤية المشتركة والأهداف المؤسسية برغبة وحماس.\n\nيلهم القائد التحويلي فريق العمل برؤية ملهمة ويحفز تفكيرهم الابتكاري، بينما يعتمد القائد الإجرائي على المكافآت المشروطة والالتزام الصارم بالقواعد والإجراءات.\n\nتثبت القيادة الموقفية لهرسي وبلانشارد أن القائد البارع يكيف أسلوبه الإداري (توجيه، تدريب، مساندة، تفويض) وفق مستوى النضج المهني والاستقلالية لكل موظف.\n\n#### ٢. إدارة التغيير المؤسسي، نموذج كوتر ذو المراحل الثماني، وديناميكيات مقاومة التغيير\nإدارة التغيير هي المنهجية التي تتبعها المؤسسات لإعداد وتأهيل ودعم فرق العمل لتبني التحولات التقنية والإدارية بنجاح وتقليل الاضطرابات.\n\nيرتب نموذج كوتر خطوات التغيير: خلق شعور بالإلحاح، بناء تحالف قيادي، صياغة الرؤية، نشرها، تمكين العاملين، تحقيق مكاسب سريعة، تثبيت المكتسبات، وترسيخ التغيير في الثقافة.\n\nتنبع مقاومة التغيير أساساً من الخوف من المجهول، وفقدان النفوذ، وغياب الشفافية؛ وإشراك الموظفين في صياغة الحلول يحول المقاومين إلى قادة وداعمين للتغيير.\n\n#### ٣. فض النزاعات الإدارية، استراتيجيات التفاوض، وأسلوب هارفارد للتفاوض القائم على المبادئ\nإدارة وفض النزاعات هي استخدام الحوار البناء وتقنيات الوساطة لحل الخلافات في بيئة العمل بما يحافظ على العلاقات ويزيد تماسك الفريق.\n\nتتحدد أساليب إدارة النزاع وفق مصفوفة توماس-كيلمان في خمسة أنماط: التنافس، التنازل، التجنب، التسوية، والتعاون (Win-Win) وفق أهمية العلاقة وموضوع الخلاف.\n\n#### ٣. فض النزاعات الإدارية، استراتيجيات التفاوض، وأسلوب هارفارد للتفاوض القائم على المبادئ\nيرتكز تفاوض هارفارد على فصل الأشخاص عن المشكلة، والتركيز على المصالح الجوهرية لا المواقف المتصلبة، وتحديد البديل الأفضل خارج طاولة التفاوض (BATNA).",
        formulas: [
          {
            labelEn: "Leadership Typologies: Transformational, Transactional, Situational, and Servant Models",
            labelAr: "أنماط القيادة الإدارية: القيادة التحويلية، الإجرائية، الموقفية، والقيادة الخادمة",
            latex: "\\text{Core Rule: } Leadership Typologies: Transfo"
          },
          {
            labelEn: "Organizational Change Management, Kotter's 8-Stage Process, and Resistance Dynamics",
            labelAr: "إدارة التغيير المؤسسي، نموذج كوتر ذو المراحل الثماني، وديناميكيات مقاومة التغيير",
            latex: "\\text{Applied Maxim: } Organizational Change Manageme"
          }
        ],
        moeRef: {
          bookTitleEn: "Business Administration & Entrepreneurship Grade 12",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-BUS-CH04-L2",
          pageRange: '145-180'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Operational Applications and Real-World Evaluation of Leadership Typologies: Transformational, Transactional, Situational, and Servant Models",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ أنماط القيادة الإدارية: القيادة التحويلية، الإجرائية، الموقفية، والقيادة الخادمة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-BUS-CH04-L2",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Leadership Typologies: Transformational, Transactional, Situational, and Servant Models",
            "Apply strategic analytical thinking to Organizational Change Management, Kotter's 8-Stage Process, and Resistance Dynamics",
            "Synthesize managerial resolutions for Workplace Conflict Resolution, Negotiation Architectures, and Principled Bargaining"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ أنماط القيادة الإدارية: القيادة التحويلية، الإجرائية، الموقفية، والقيادة الخادمة",
            "تطبيق التفكير التحليلي الناقد في مسألة إدارة التغيير المؤسسي، نموذج كوتر ذو المراحل الثماني، وديناميكيات مقاومة التغيير",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ فض النزاعات الإدارية، استراتيجيات التفاوض، وأسلوب هارفارد للتفاوض القائم على المبادئ"
          ],
          prerequisitesEn: ['Principles of Economics', 'Foundational Mathematics & Statistics'],
          prerequisitesAr: ['مبادئ علم الاقتصاد والإحصاء', 'مهارات الإحصاء والتحليل المالي الأساسية'],
          keyVocabularyEn: [
            { term: 'Return on Equity (ROE)', definition: 'Net income divided by shareholders equity measuring financial profitability' },
            { term: 'Competitive Advantage', definition: 'Unique capabilities and resources allowing an enterprise to outperform competitors' }
          ],
          keyVocabularyAr: [
            { term: 'العائد على حقوق الملكية (ROE)', definition: 'صافي الربح مقسوماً على حقوق الملكية لقياس كفاءة توليد الأرباح' },
            { term: 'الميزة التنافسية', definition: 'القدرات والموارد الفريدة التي تمكن المنشأة من التفوق المستدام على منافسيها' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Case Context', phaseAr: 'التهيئة ودراسة الحالة الواقعية', duration: '15 min', activitiesEn: 'Review of real-world corporate case studies and open diagnostic dialogue', activitiesAr: 'استعراض دراسة حالة لشركة حقيقية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Modeling', phaseAr: 'التحليل المفاهيمي والنمذجة الرياضية', duration: '75 min', activitiesEn: 'Strategic modeling, solved numerical examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل الحسابية والتقييم، واختبار بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing accounting revenue growth with positive net cash flow and sustainable unit economics'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نمو الإيرادات المحاسبية وبين التدفق النقدي التشغيلي الموجب واقتصاديات الوحدة المستدامة'
          ],
          differentiationEn: {
            struggling: 'Provide guided visual formula templates, financial ratio cheat sheets, and step-by-step calculation guides.',
            advanced: 'Assign complex multi-scenario DCF valuations and cross-border M&A case competition simulations.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وجداول مبسطة للنسب المالية وخطوات حسابية متدرجة.',
            advanced: 'تكليف بنمذجة تقييم تدفقات نقدية DCF معقدة ودراسة صفقات اندماج واستحواذ دولية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring conceptual comprehension and business problem-solving.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل المالي والإداري.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Leadership Typologies: Transformational, Transactional, Situational, and Servant Models?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (أنماط القيادة الإدارية: القيادة التحويلية، الإجرائية، الموقفية، والقيادة الخادمة)؟",
            solutionEn: "Leadership is the interpersonal influence process of inspiring, guiding, and mobilizing team members toward achieving shared organizational aspirations.",
            solutionAr: "القيادة هي القدرة على التأثير الإيجابي في الأفراد وتوجيه طاقاتهم وإلهامهم لتحقيق الرؤية المشتركة والأهداف المؤسسية برغبة وحماس."
          }
        },
        worksheet: {
          id: 'th_bus_ch4_l2_ws',
          titleEn: "Worksheet: Lesson 2: Operational Applications and Real-World Evaluation of Leadership Typologies: Transformational, Transactional, Situational, and Servant Models",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ أنماط القيادة الإدارية: القيادة التحويلية، الإجرائية، الموقفية، والقيادة الخادمة",
          descriptionEn: 'Formative assessment, strategic case analysis, and numerical practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وحسابي لدراسة الحالات الإدارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'supply_chain_simulator',
          titleEn: "Supply Chain & Unit Economics Simulator",
          titleAr: "محاكي سلاسل الإمداد واقتصاديات الوحدة الرقمية",
          descriptionEn: 'Interactive Business Modeling Studio featuring DCF valuation, break-even simulation, Lean Canvas generation, and supply chain optimization.',
          descriptionAr: 'استوديو نمذجة إدارة الأعمال التفاعلي لمحاكاة تقييم التدفقات النقدية، تحليل نقطة التعادل، ومخطط نموذج العمل وسلاسل الإمداد.'
        }
      }
    ],
    databank: businessCh4Databank,
    solvedExamples: businessCh4SolvedExamples,
    exerciseProblems: businessCh4Exercises
  }
];

export const thanaweyaBusinessBranch: Branch = {
  id: 'thanaweya_business',
  titleEn: "Thanaweya Amma Business Administration & Entrepreneurship",
  titleAr: "إدارة الأعمال وريادة الأعمال للثانوية العامة",
  categoryEn: "National Commercial & Management Division",
  categoryAr: "الشعبة التجارية والإدارية للثانوية العامة",
  iconName: 'Briefcase',
  colorGradient: 'from-sky-950 via-indigo-950 to-slate-950',
  chapters
};
