import type { Branch, Chapter } from '../types/curriculum';
import { egBacBusinessCh1Databank } from './databanks/egbac/egBacBusinessCh1Databank';
import { egBacBusinessCh1SolvedExamples, egBacBusinessCh1Exercises } from './textbook/egbac/egBacBusinessCh1Textbook';
import { egBacBusinessCh2Databank } from './databanks/egbac/egBacBusinessCh2Databank';
import { egBacBusinessCh2SolvedExamples, egBacBusinessCh2Exercises } from './textbook/egbac/egBacBusinessCh2Textbook';
import { egBacBusinessCh3Databank } from './databanks/egbac/egBacBusinessCh3Databank';
import { egBacBusinessCh3SolvedExamples, egBacBusinessCh3Exercises } from './textbook/egbac/egBacBusinessCh3Textbook';
import { egBacBusinessCh4Databank } from './databanks/egbac/egBacBusinessCh4Databank';
import { egBacBusinessCh4SolvedExamples, egBacBusinessCh4Exercises } from './textbook/egbac/egBacBusinessCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'egbac_bus_ch1',
    chapterNumber: 1,
    titleEn: "Module 1: Strategic Management, Corporate Governance & Competitive Advantage",
    titleAr: "الوحدة الأولى: الإدارة الاستراتيجية، حوكمة الشركات وبناء الميزة التنافسية",
    descriptionEn: "Porter's Five Forces, Resource-Based View (RBV), VRIO framework, corporate governance, ESG criteria, fiduciary duties of boards, and Blue Ocean value innovation.",
    descriptionAr: "نموذج القوى الخمس لبورتر، الرؤية القائمة على الموارد وإطار VRIO، حوكمة الشركات ونظرية الوكالة، معايير الاستدامة البيئية والاجتماعية والحوكمة (ESG)، واستراتيجيات المحيط الأزرق.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_bus_ch1_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Strategic Analysis of Porter's Five Forces Framework and Competitive Structural Analysis",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ نموذج القوى التنافسية الخمس لمايكل بورتر والتحليل الهيكلي لجاذبية الصناعة",
        summaryEn: "Comprehensive conceptual and applied mastery of Porter's Five Forces Framework and Competitive Structural Analysis, Resource-Based View (RBV) of the Firm and VRIO Competitive Advantage Evaluation, and Corporate Governance, Agency Conflicts, and Board Fiduciary Duties.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ نموذج القوى التنافسية الخمس لمايكل بورتر والتحليل الهيكلي لجاذبية الصناعة، الرؤية القائمة على الموارد (RBV) وإطار تقييم الميزة التنافسية المستدامة VRIO، و حوكمة الشركات، نظرية الوكالة وتضارب المصالح، والواجبات الائتمانية لمجلس الإدارة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Porter's Five Forces Framework and Competitive Structural Analysis\nPorter's Five Forces evaluates industry attractiveness through competitive rivalry, threat of new entrants, substitute products, supplier power, and buyer power.\n\nHigh barriers to entry—such as capital intensity, proprietary economies of scale, and patent rights—protect existing profit margins from competitive market erosion.\n\nWhen buyers and suppliers possess asymmetric bargaining leverage, industry economic rents are siphoned away, necessitating strategic vertical integration or switching-cost architectures.\n\n#### 2. Resource-Based View (RBV) of the Firm and VRIO Competitive Advantage Evaluation\nThe Resource-Based View (RBV) posits that internal tangible and intangible resources dictate long-term competitive positioning and corporate profitability.\n\nUnder the VRIO framework, an asset must be Valuable, Rare, Inimitable, and Organizationally embedded to yield a sustained competitive advantage.\n\nCausal ambiguity and social complexity serve as vital isolating mechanisms, preventing competitors from duplicating unique organizational routines and dynamic capabilities.\n\n#### 3. Corporate Governance, Agency Conflicts, and Board Fiduciary Duties\nCorporate governance aligns managerial actions with shareholder wealth preservation through board oversight, independent auditing, and transparent disclosure.\n\nThe Principal-Agent problem arises when managers (agents) pursue short-term bonuses or prestige rather than maximizing long-term shareholder (principal) value.\n\nIndependent board committees (audit, risk, compensation) and executive clawback provisions mitigate moral hazard, institutionalizing fiduciary care and strategic stewardship.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. نموذج القوى التنافسية الخمس لمايكل بورتر والتحليل الهيكلي لجاذبية الصناعة\nيحلل نموذج بورتر جاذبية ربحية الصناعة عبر دراسة شدة المنافسة، تهديد الداخلين الجدد، البدائل المتاحة، وقوة تفاوض الموردين والعملاء.\n\nتوفر حواجز الدخول العالية (ككثافة رأس المال واقتصادات الحجم وبراءات الاختراع) حماية لربحية الشركات القائمة من تآكل الحصص السوقية.\n\nعندما يمتلك الموردون أو المشترون قوة تفاوضية غير متكافئة، تتسرب الفوائض الاقتصادية، مما يستوجب بناء تكاليف تحويل عالية أو تكاملاً رأسياً استراتيجياً.\n\n#### ٢. الرؤية القائمة على الموارد (RBV) وإطار تقييم الميزة التنافسية المستدامة VRIO\nترى النظرية القائمة على الموارد أن الموارد المادية وغير المادية الفريدة للشركة هي المنبع الحقيقي للتفوق التنافسي والربحية طويلة المدى.\n\nوفق إطار VRIO، يجب أن يكون المورد ذا قيمة سوقية، ونادراً، وغير قابل للتقليد بسهولة، ومدمجاً في تنظيم مؤسسي فعال لضمان ميزة تنافسية مستدامة.\n\nيمثل الغموض السببي والتعقيد الاجتماعي آليات عزل جوهرية تحول دون قدرة المنافسين على استنساخ القدرات الديناميكية وثقافة الابتكار المؤسسية.\n\n#### ٣. حوكمة الشركات، نظرية الوكالة وتضارب المصالح، والواجبات الائتمانية لمجلس الإدارة\nتضمن حوكمة الشركات التزام الإدارة التنفيذية بحماية أموال المساهمين عبر رقابة مجلس الإدارة والتدقيق المستقل والشفافية المالية التامة.\n\nتنشأ معضلة الوكالة عندما يسعى المديرون التنفيذيون إلى مصالح ومكافآت قصيرة الأجل تتعارض مع تعظيم ثروة المساهمين والمستثمرين على المدى الطويل.\n\n#### ٣. حوكمة الشركات، نظرية الوكالة وتضارب المصالح، والواجبات الائتمانية لمجلس الإدارة\nتسهم اللجان المستقلة لمجلس الإدارة (المراجعة، المخاطر، الترشيحات) وبنود استرداد الحوافز في كبح المخاطر الأخلاقية وترسيخ الأمانة الائتمانية.",
        formulas: [
          {
            labelEn: "Porter's Five Forces Framework and Competitive Structural Analysis",
            labelAr: "نموذج القوى التنافسية الخمس لمايكل بورتر والتحليل الهيكلي لجاذبية الصناعة",
            latex: "\\text{Core Rule: } Porter's Five Forces Framework"
          },
          {
            labelEn: "Resource-Based View (RBV) of the Firm and VRIO Competitive Advantage Evaluation",
            labelAr: "الرؤية القائمة على الموارد (RBV) وإطار تقييم الميزة التنافسية المستدامة VRIO",
            latex: "\\text{Applied Maxim: } Resource-Based View (RBV) of t"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Business Administration & Entrepreneurship",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-BUS-CH01-L1",
          pageRange: '5-40'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Strategic Analysis of Porter's Five Forces Framework and Competitive Structural Analysis",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ نموذج القوى التنافسية الخمس لمايكل بورتر والتحليل الهيكلي لجاذبية الصناعة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-BUS-CH01-L1",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Porter's Five Forces Framework and Competitive Structural Analysis",
            "Apply strategic analytical thinking to Resource-Based View (RBV) of the Firm and VRIO Competitive Advantage Evaluation",
            "Synthesize managerial resolutions for Corporate Governance, Agency Conflicts, and Board Fiduciary Duties"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ نموذج القوى التنافسية الخمس لمايكل بورتر والتحليل الهيكلي لجاذبية الصناعة",
            "تطبيق التفكير التحليلي الناقد في مسألة الرؤية القائمة على الموارد (RBV) وإطار تقييم الميزة التنافسية المستدامة VRIO",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ حوكمة الشركات، نظرية الوكالة وتضارب المصالح، والواجبات الائتمانية لمجلس الإدارة"
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
            questionEn: "What is the accredited curriculum determination regarding Porter's Five Forces Framework and Competitive Structural Analysis?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (نموذج القوى التنافسية الخمس لمايكل بورتر والتحليل الهيكلي لجاذبية الصناعة)؟",
            solutionEn: "Porter's Five Forces evaluates industry attractiveness through competitive rivalry, threat of new entrants, substitute products, supplier power, and buyer power.",
            solutionAr: "يحلل نموذج بورتر جاذبية ربحية الصناعة عبر دراسة شدة المنافسة، تهديد الداخلين الجدد، البدائل المتاحة، وقوة تفاوض الموردين والعملاء."
          }
        },
        worksheet: {
          id: 'egbac_bus_ch1_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Strategic Analysis of Porter's Five Forces Framework and Competitive Structural Analysis",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ نموذج القوى التنافسية الخمس لمايكل بورتر والتحليل الهيكلي لجاذبية الصناعة",
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
        id: 'egbac_bus_ch1_l2',
        titleEn: "Lesson 2: Operational Applications and Real-World Evaluation of Mergers, Acquisitions (M&A), and Strategic Synergies: Integration vs. Value Destruction",
        titleAr: "الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ الاندماجات والاستحواذات الاستراتيجية (M&A): خلق التآزر ومخاطر تدمير القيمة",
        summaryEn: "Comprehensive conceptual and applied mastery of Mergers, Acquisitions (M&A), and Strategic Synergies: Integration vs. Value Destruction, Environmental, Social, and Governance (ESG) Criteria and Sustainable Value Creation, and Blue Ocean Strategy and Value Innovation in Saturated Markets.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ الاندماجات والاستحواذات الاستراتيجية (M&A): خلق التآزر ومخاطر تدمير القيمة، معايير الاستدامة البيئية والاجتماعية والحوكمة (ESG) وخلق القيمة المؤسسية المستدامة، و استراتيجية المحيط الأزرق وابتكار القيمة لفتح آفاق أسواق جديدة غير مستغلة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Mergers, Acquisitions (M&A), and Strategic Synergies: Integration vs. Value Destruction\nA merger combines two distinct corporations into a single entity, whereas an acquisition involves one company purchasing controlling equity in another.\n\nOperational synergies stem from economies of scale and cross-selling, while financial synergies reduce overall cost of capital through diversified corporate cash flows.\n\nEmpirical data shows over 60% of M&A transactions fail to create shareholder value due to culture clash, overpayment from executive hubris, and clumsy post-merger integration.\n\n#### 2. Environmental, Social, and Governance (ESG) Criteria and Sustainable Value Creation\nESG criteria evaluate a company's carbon footprint (Environmental), labor standards and diversity (Social), and executive integrity and transparency (Governance).\n\nGlobal institutional funds increasingly integrate ESG scoring into portfolio screening, penalizing firms with elevated regulatory or climate risk with higher borrowing costs.\n\nTrue ESG integration moves beyond marketing greenwashing by structurally linking executive remuneration packages directly to verifiable carbon reduction and social equity KPIs.\n\n#### 3. Blue Ocean Strategy and Value Innovation in Saturated Markets\nBlue Ocean Strategy seeks to render competition irrelevant by creating uncontested market space rather than fighting in bloody, hyper-competitive \"Red Oceans\".\n\nValue Innovation achieves cost reduction and buyer value elevation simultaneously, breaking the traditional trade-off between differentiation and low-cost focus.\n\nUtilizing the Four Actions Framework (Eliminate, Reduce, Raise, Create) reconstructs industry boundary definitions, radically reshaping the strategic canvas.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. الاندماجات والاستحواذات الاستراتيجية (M&A): خلق التآزر ومخاطر تدمير القيمة\nيمثل الاندماج اتحاد شركتين لتشكيل كيان جديد واحد، بينما يتضمن الاستحواذ شراء شركة لحصة مسيطرة في أسهم وأصول شركة أخرى.\n\nتتحقق فوائض التآزر التشغيلي عبر وفورات الحجم وتكامل قنوات التوزيع، بينما يقلل التآزر المالي من تكلفة رأس المال عبر تنويع التدفقات النقدية.\n\nتثبت الدراسات أن أكثر من ٦٠٪ من صفقات الاستحواذ تفشل في توليد قيمة حقيقية نتيجة صدمة الثقافات التنظيمية، والمبالغة في تقييم أصول الشركة المستهدفة.\n\n#### ٢. معايير الاستدامة البيئية والاجتماعية والحوكمة (ESG) وخلق القيمة المؤسسية المستدامة\nتقيس معايير ESG البصمة الكربونية للشركة (بيئياً)، وحقوق العمال والمساواة (اجتماعياً)، ونزاهة القيادة والشفافية (حوكمة).\n\nتعتمد صناديق الاستثمار العالمية تقييمات ESG في قرارات التمويل، مما يرفع تكلفة الاقتراض على الشركات ذات المخاطر البيئية أو الحوكمية المرتفعة.\n\nيتطلب التطبيق الأصيل لمعايير ESG تجاوز الترويج الزائف (Greenwashing) عبر ربط مكافآت القيادات التنفيذية مباشرة بمؤشرات خفض الانبعاثات والعدالة المجتمعية.\n\n#### ٣. استراتيجية المحيط الأزرق وابتكار القيمة لفتح آفاق أسواق جديدة غير مستغلة\nتهدف استراتيجية المحيط الأزرق إلى جعل المنافسة التقليدية بلا جدوى من خلال فتح مساحات وأسواق بكر جديدة بدلاً من التنافس في \"محيطات حمراء\" دامية.\n\nيحقق ابتكار القيمة خفض التكاليف التشغيلية ورفع المنفعة للعميل في آن واحد، كاسراً المعادلة التقليدية للاختيار الحصري بين التميز أو قيادة التكلفة.\n\n#### ٣. استراتيجية المحيط الأزرق وابتكار القيمة لفتح آفاق أسواق جديدة غير مستغلة\nيعيد تطبيق مصفوفة الإجراءات الأربعة (الاستبعاد، التقليل، الزيادة، الابتكار) رسم منحنى القيمة للصناعة لإنتاج طلب جديد وتغيير قواعد اللعبة تماماً.",
        formulas: [
          {
            labelEn: "Mergers, Acquisitions (M&A), and Strategic Synergies: Integration vs. Value Destruction",
            labelAr: "الاندماجات والاستحواذات الاستراتيجية (M&A): خلق التآزر ومخاطر تدمير القيمة",
            latex: "\\text{Core Rule: } \\text{Mergers, Acquisitions (M\\&A)}"
          },
          {
            labelEn: "Environmental, Social, and Governance (ESG) Criteria and Sustainable Value Creation",
            labelAr: "معايير الاستدامة البيئية والاجتماعية والحوكمة (ESG) وخلق القيمة المؤسسية المستدامة",
            latex: "\\text{Applied Maxim: } Environmental, Social, and Gov"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Business Administration & Entrepreneurship",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-BUS-CH01-L2",
          pageRange: '25-60'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Operational Applications and Real-World Evaluation of Mergers, Acquisitions (M&A), and Strategic Synergies: Integration vs. Value Destruction",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ الاندماجات والاستحواذات الاستراتيجية (M&A): خلق التآزر ومخاطر تدمير القيمة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-BUS-CH01-L2",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Mergers, Acquisitions (M&A), and Strategic Synergies: Integration vs. Value Destruction",
            "Apply strategic analytical thinking to Environmental, Social, and Governance (ESG) Criteria and Sustainable Value Creation",
            "Synthesize managerial resolutions for Blue Ocean Strategy and Value Innovation in Saturated Markets"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ الاندماجات والاستحواذات الاستراتيجية (M&A): خلق التآزر ومخاطر تدمير القيمة",
            "تطبيق التفكير التحليلي الناقد في مسألة معايير الاستدامة البيئية والاجتماعية والحوكمة (ESG) وخلق القيمة المؤسسية المستدامة",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ استراتيجية المحيط الأزرق وابتكار القيمة لفتح آفاق أسواق جديدة غير مستغلة"
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
            questionEn: "What is the accredited curriculum determination regarding Mergers, Acquisitions (M&A), and Strategic Synergies: Integration vs. Value Destruction?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (الاندماجات والاستحواذات الاستراتيجية (M&A): خلق التآزر ومخاطر تدمير القيمة)؟",
            solutionEn: "A merger combines two distinct corporations into a single entity, whereas an acquisition involves one company purchasing controlling equity in another.",
            solutionAr: "يمثل الاندماج اتحاد شركتين لتشكيل كيان جديد واحد، بينما يتضمن الاستحواذ شراء شركة لحصة مسيطرة في أسهم وأصول شركة أخرى."
          }
        },
        worksheet: {
          id: 'egbac_bus_ch1_l2_ws',
          titleEn: "Worksheet: Lesson 2: Operational Applications and Real-World Evaluation of Mergers, Acquisitions (M&A), and Strategic Synergies: Integration vs. Value Destruction",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ الاندماجات والاستحواذات الاستراتيجية (M&A): خلق التآزر ومخاطر تدمير القيمة",
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
    databank: egBacBusinessCh1Databank,
    solvedExamples: egBacBusinessCh1SolvedExamples,
    exerciseProblems: egBacBusinessCh1Exercises
  },
  {
    id: 'egbac_bus_ch2',
    chapterNumber: 2,
    titleEn: "Module 2: Corporate Finance, Capital Structure & Investment Valuation",
    titleAr: "الوحدة الثانية: الإدارة المالية، هيكل رأس المال وتقييم الاستثمارات الرأسمالية",
    descriptionEn: "Time value of money, DCF valuation, NPV, IRR, WACC, Capital Asset Pricing Model (CAPM), working capital optimization, cash conversion cycle, and DuPont ratio analysis.",
    descriptionAr: "القيمة الزمنية للنقود، التدفقات النقدية المخصومة، صافي القيمة الحالية (NPV)، معدل العائد الداخلي (IRR)، تكلفة رأس المال المرجحة (WACC)، نموذج CAPM، وتحليل نسب دوبونت.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_bus_ch2_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Strategic Analysis of Time Value of Money (TVM), Discounted Cash Flow (DCF), and Capital Budgeting (NPV & IRR)",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ القيمة الزمنية للنقود، التدفقات النقدية المخصومة، ومعايير تقييم الاستثمارات (NPV & IRR)",
        summaryEn: "Comprehensive conceptual and applied mastery of Time Value of Money (TVM), Discounted Cash Flow (DCF), and Capital Budgeting (NPV & IRR), Weighted Average Cost of Capital (WACC) and Optimal Capital Structure Decisions, and Capital Asset Pricing Model (CAPM), Systematic Risk (Beta), and Required Rate of Return.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ القيمة الزمنية للنقود، التدفقات النقدية المخصومة، ومعايير تقييم الاستثمارات (NPV & IRR)، تكلفة رأس المال المرجحة (WACC) وقرارات الهيكل التمويلي الأمثل للشركات، و نموذج تسعير الأصول الرأسمالية (CAPM)، المخاطر المنتظمة (بيتا)، ومعدل العائد المطلوب.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Time Value of Money (TVM), Discounted Cash Flow (DCF), and Capital Budgeting (NPV & IRR)\nA pound today is worth more than a pound tomorrow due to potential earning capacity and inflationary purchasing power erosion.\n\nNet Present Value (NPV) calculates the difference between discounted incoming cash flows and initial capital outlays; projects with NPV > 0 generate shareholder wealth.\n\nInternal Rate of Return (IRR) is the discount rate setting NPV = 0; however, in mutually exclusive projects with non-conventional cash flows, NPV supersedes IRR due to reinvestment rate assumptions.\n\n#### 2. Weighted Average Cost of Capital (WACC) and Optimal Capital Structure Decisions\nWACC reflects the blended average cost of financing an enterprise through a combination of common equity, preferred stock, and corporate debt.\n\nBecause interest expenses on debt are tax-deductible, corporate debt enjoys a \"tax shield\", lowering the after-tax cost of debt relative to equity financing.\n\nModigliani-Miller theorem under corporate taxes indicates optimal capital structure balances the debt tax shield against expected costs of financial distress and bankruptcy risks.\n\n#### 3. Capital Asset Pricing Model (CAPM), Systematic Risk (Beta), and Required Rate of Return\nCAPM models the relationship between systematic market risk and the required return on equity: E(Ri) = Rf + Beta * [E(Rm) - Rf].\n\nBeta measures the volatility of an individual stock compared to the overall market portfolio; a beta > 1 signifies amplified systematic market sensitivity.\n\nUnsystematic firm-specific risk can be eradicated via portfolio diversification; therefore, efficient financial markets only compensate investors for bearing non-diversifiable systematic risk.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. القيمة الزمنية للنقود، التدفقات النقدية المخصومة، ومعايير تقييم الاستثمارات (NPV & IRR)\nالجنيه اليوم أكثر قيمة من الجنيه غداً نظراً لقدرته على التوليد الاستثماري ولآثار التضخم التي تؤدي إلى تآكل القوة الشرائية للنقود عبر الزمن.\n\nيحسب صافي القيمة الحالية (NPV) الفرق بين القيمة المخصومة للتدفقات النقدية الداخلة وتكلفة الاستثمار المبدئية؛ والمشاريع ذات NPV > 0 تخلق قيمة للمساهمين.\n\nيمثل معدل العائد الداخلي (IRR) سعر الخصم الذي يجعل NPV صفراً؛ وعند تعارض المشاريع الاستثمارية يقدم معيار NPV على IRR لدقة افتراض إعادة الاستثمار.\n\n#### ٢. تكلفة رأس المال المرجحة (WACC) وقرارات الهيكل التمويلي الأمثل للشركات\nتمثل تكلفة رأس المال المرجحة (WACC) متوسط تكلفة التمويل الذي تتحمله الشركة عبر مزيج حقوق الملكية والأسهم الممتازة والديون البنكية والسندات.\n\nتتميز فوائد الديون بخاصية الخصم الضريبي مما يوفر للشركة \"درعاً ضريبياً\" يخفض التكلفة الفعلية للاقتراض مقارنة بتكلفة إصدار أسهم ملكية جديدة.\n\nتوضح نظرية موديجلياني-ميلر مع الضرائب أن الهيكل التمويلي الأمثل يتحقق عند نقطة التوازن بين منافع الوفر الضريبي وتكاليف أعباء التعثر والإفلاس المالي.\n\n#### ٣. نموذج تسعير الأصول الرأسمالية (CAPM)، المخاطر المنتظمة (بيتا)، ومعدل العائد المطلوب\nيحدد نموذج CAPM العائد العادل المطلوب على السهم وفق علاقته بالمخاطر المنتظمة للسوق عبر المعادلة: E(Ri) = Rf + Beta * [E(Rm) - Rf].\n\nيقيس معامل بيتا درجة حساسية وتقلب عائد السهم مقارنة بحركة السوق ككل؛ وتشير بيتا الأكبر من ١ إلى حساسية ومخاطر تقلب أعلى من المتوسط.\n\n#### ٣. نموذج تسعير الأصول الرأسمالية (CAPM)، المخاطر المنتظمة (بيتا)، ومعدل العائد المطلوب\nيمكن القضاء على المخاطر غير المنتظمة الخاصة بالشركة عبر التنويع الاستثماري، ولذا فإن الأسواق الكفؤة لا تكافئ المستثمر إلا على تحمله المخاطر المنتظمة.",
        formulas: [
          {
            labelEn: "Time Value of Money (TVM), Discounted Cash Flow (DCF), and Capital Budgeting (NPV & IRR)",
            labelAr: "القيمة الزمنية للنقود، التدفقات النقدية المخصومة، ومعايير تقييم الاستثمارات (NPV & IRR)",
            latex: "\\text{Core Rule: } Time Value of Money (TVM), Dis"
          },
          {
            labelEn: "Weighted Average Cost of Capital (WACC) and Optimal Capital Structure Decisions",
            labelAr: "تكلفة رأس المال المرجحة (WACC) وقرارات الهيكل التمويلي الأمثل للشركات",
            latex: "\\text{Applied Maxim: } Weighted Average Cost of Capit"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Business Administration & Entrepreneurship",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-BUS-CH02-L1",
          pageRange: '45-80'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Strategic Analysis of Time Value of Money (TVM), Discounted Cash Flow (DCF), and Capital Budgeting (NPV & IRR)",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ القيمة الزمنية للنقود، التدفقات النقدية المخصومة، ومعايير تقييم الاستثمارات (NPV & IRR)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-BUS-CH02-L1",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Time Value of Money (TVM), Discounted Cash Flow (DCF), and Capital Budgeting (NPV & IRR)",
            "Apply strategic analytical thinking to Weighted Average Cost of Capital (WACC) and Optimal Capital Structure Decisions",
            "Synthesize managerial resolutions for Capital Asset Pricing Model (CAPM), Systematic Risk (Beta), and Required Rate of Return"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ القيمة الزمنية للنقود، التدفقات النقدية المخصومة، ومعايير تقييم الاستثمارات (NPV & IRR)",
            "تطبيق التفكير التحليلي الناقد في مسألة تكلفة رأس المال المرجحة (WACC) وقرارات الهيكل التمويلي الأمثل للشركات",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ نموذج تسعير الأصول الرأسمالية (CAPM)، المخاطر المنتظمة (بيتا)، ومعدل العائد المطلوب"
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
            questionEn: "What is the accredited curriculum determination regarding Time Value of Money (TVM), Discounted Cash Flow (DCF), and Capital Budgeting (NPV & IRR)?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (القيمة الزمنية للنقود، التدفقات النقدية المخصومة، ومعايير تقييم الاستثمارات (NPV & IRR))؟",
            solutionEn: "A pound today is worth more than a pound tomorrow due to potential earning capacity and inflationary purchasing power erosion.",
            solutionAr: "الجنيه اليوم أكثر قيمة من الجنيه غداً نظراً لقدرته على التوليد الاستثماري ولآثار التضخم التي تؤدي إلى تآكل القوة الشرائية للنقود عبر الزمن."
          }
        },
        worksheet: {
          id: 'egbac_bus_ch2_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Strategic Analysis of Time Value of Money (TVM), Discounted Cash Flow (DCF), and Capital Budgeting (NPV & IRR)",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ القيمة الزمنية للنقود، التدفقات النقدية المخصومة، ومعايير تقييم الاستثمارات (NPV & IRR)",
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
        id: 'egbac_bus_ch2_l2',
        titleEn: "Lesson 2: Operational Applications and Real-World Evaluation of Working Capital Management, Operating Cycles, and the Cash Conversion Cycle (CCC)",
        titleAr: "الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ إدارة رأس المال العامل، دورة التشغيل، ودورة التحول النقدي (Cash Conversion Cycle)",
        summaryEn: "Comprehensive conceptual and applied mastery of Working Capital Management, Operating Cycles, and the Cash Conversion Cycle (CCC), Financial Statement Analysis: Liquidity, Solvency, and Integrated DuPont Decomposition, and Enterprise Valuation Methods: DCF Discounting, Comparable Multiples (P/E, EV/EBITDA), and Terminal Value.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ إدارة رأس المال العامل، دورة التشغيل، ودورة التحول النقدي (Cash Conversion Cycle)، التحليل المالي المتقدم: نسب السيولة والملاءة وتحليل دوبونت المتكامل للعائد على حقوق الملكية، و طرق تقييم الشركات: التدفقات النقدية المخصومة، مضاعفات السوق، والقيمة المتبقية المستدامة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Working Capital Management, Operating Cycles, and the Cash Conversion Cycle (CCC)\nWorking capital represents the liquidity cushion (Current Assets minus Current Liabilities) necessary to maintain day-to-day corporate operations.\n\nCash Conversion Cycle (CCC) measures time elapsed from purchasing inventory to collecting cash: CCC = DIO + DSO - DPO.\n\nNegative cash conversion cycles (as engineered by Dell and Amazon) allow firms to fund rapid operational expansion using vendor credit rather than costly external capital.\n\n#### 2. Financial Statement Analysis: Liquidity, Solvency, and Integrated DuPont Decomposition\nFinancial ratio analysis evaluates an enterprise's liquidity, asset efficiency, solvency leverage, and profitability through standardized accounting metrics.\n\nThe DuPont formula breaks down Return on Equity (ROE) into Net Profit Margin (Profitability), Asset Turnover (Efficiency), and Equity Multiplier (Leverage).\n\nArtificially inflating ROE solely via debt-driven equity multiplier expansion introduces severe financial fragility, which DuPont decomposition immediately unmasks.\n\n#### 3. Enterprise Valuation Methods: DCF Discounting, Comparable Multiples (P/E, EV/EBITDA), and Terminal Value\nValuation estimates the intrinsic economic worth of a company or operating asset for mergers, public listings (IPOs), or investment underwriting.\n\nMarket multiples (such as EV/EBITDA and Price-to-Earnings) benchmark valuation against peers, offering rapid relative market comparability.\n\nIn DCF models, Terminal Value often represents over 70% of total Enterprise Value, making the final valuation exquisitely sensitive to perpetual growth rate (g) and cost of capital (WACC) assumptions.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. إدارة رأس المال العامل، دورة التشغيل، ودورة التحول النقدي (Cash Conversion Cycle)\nرأس المال العامل هو الفائض من الأصول المتداولة بعد سداد الالتزامات المتداولة، وهو شريان السيولة اللازم لتسيير العمليات التشغيلية اليومية.\n\nتقيس دورة التحول النقدي (CCC) الفترة الزمنية من شراء المواد الخام حتى تحصيل النقد من العملاء: CCC = DIO + DSO - DPO.\n\nتتيح دورة التحول النقدي السالبة للشركات تمويل نموها وتوسعها التشغيلي بأموال الموردين قبل سداد مستحقاتهم، دون الحاجة للاقتراض البنكي المكلف.\n\n#### ٢. التحليل المالي المتقدم: نسب السيولة والملاءة وتحليل دوبونت المتكامل للعائد على حقوق الملكية\nيقيم تحليل النسب المالية كفاءة إدارة الأصول، والسيولة النقدية، والملاءة، وربحية المنشأة من خلال تفكيك القوائم المالية المعتمدة.\n\nيفكك تحليل دوبونت العائد على حقوق الملكية (ROE) إلى ثلاثة محركات: هامش صافي الربح (الربحية)، ومعدل دوران الأصول (الكفاءة)، ومضاعف الملكية (الرافعة).\n\nيكشف تحليل دوبونت بدقة المخاطر الخفية؛ فزيادة العائد على الملكية الناتجة عن الاقتراض المفرط ترفع الهشاشة المالية للشركة وتكشف تراجع الكفاءة التشغيلية.\n\n#### ٣. طرق تقييم الشركات: التدفقات النقدية المخصومة، مضاعفات السوق، والقيمة المتبقية المستدامة\nالتقييم المالي هو التقدير العلمي للقيمة الاقتصادية العادلة للشركة أو أصولها التشغيلية لأغراض الاستثمار، الاندماج، أو الطرح في البورصة.\n\nتقارن مضاعفات السوق (مثل مكرر الربحية P/E ومضاعف EV/EBITDA) أداء الشركة مع نظيراتها المدرجة لتقديم تسعير نسبي سريع لأسهم الشركة.\n\n#### ٣. طرق تقييم الشركات: التدفقات النقدية المخصومة، مضاعفات السوق، والقيمة المتبقية المستدامة\nتمثل القيمة المتبقية (Terminal Value) في نماذج DCF أكثر من ٧٠٪ من القيمة الإجمالية للمنشأة، مما يجعل التقييم شديد الحساسية لافتراضات معدل النمو الدائم وتكلفة WACC.",
        formulas: [
          {
            labelEn: "Working Capital Management, Operating Cycles, and the Cash Conversion Cycle (CCC)",
            labelAr: "إدارة رأس المال العامل، دورة التشغيل، ودورة التحول النقدي (Cash Conversion Cycle)",
            latex: "\\text{Core Rule: } Working Capital Management, Op"
          },
          {
            labelEn: "Financial Statement Analysis: Liquidity, Solvency, and Integrated DuPont Decomposition",
            labelAr: "التحليل المالي المتقدم: نسب السيولة والملاءة وتحليل دوبونت المتكامل للعائد على حقوق الملكية",
            latex: "\\text{Applied Maxim: } Financial Statement Analysis: "
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Business Administration & Entrepreneurship",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-BUS-CH02-L2",
          pageRange: '65-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Operational Applications and Real-World Evaluation of Working Capital Management, Operating Cycles, and the Cash Conversion Cycle (CCC)",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ إدارة رأس المال العامل، دورة التشغيل، ودورة التحول النقدي (Cash Conversion Cycle)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-BUS-CH02-L2",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Working Capital Management, Operating Cycles, and the Cash Conversion Cycle (CCC)",
            "Apply strategic analytical thinking to Financial Statement Analysis: Liquidity, Solvency, and Integrated DuPont Decomposition",
            "Synthesize managerial resolutions for Enterprise Valuation Methods: DCF Discounting, Comparable Multiples (P/E, EV/EBITDA), and Terminal Value"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ إدارة رأس المال العامل، دورة التشغيل، ودورة التحول النقدي (Cash Conversion Cycle)",
            "تطبيق التفكير التحليلي الناقد في مسألة التحليل المالي المتقدم: نسب السيولة والملاءة وتحليل دوبونت المتكامل للعائد على حقوق الملكية",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ طرق تقييم الشركات: التدفقات النقدية المخصومة، مضاعفات السوق، والقيمة المتبقية المستدامة"
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
            questionEn: "What is the accredited curriculum determination regarding Working Capital Management, Operating Cycles, and the Cash Conversion Cycle (CCC)?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (إدارة رأس المال العامل، دورة التشغيل، ودورة التحول النقدي (Cash Conversion Cycle))؟",
            solutionEn: "Working capital represents the liquidity cushion (Current Assets minus Current Liabilities) necessary to maintain day-to-day corporate operations.",
            solutionAr: "رأس المال العامل هو الفائض من الأصول المتداولة بعد سداد الالتزامات المتداولة، وهو شريان السيولة اللازم لتسيير العمليات التشغيلية اليومية."
          }
        },
        worksheet: {
          id: 'egbac_bus_ch2_l2_ws',
          titleEn: "Worksheet: Lesson 2: Operational Applications and Real-World Evaluation of Working Capital Management, Operating Cycles, and the Cash Conversion Cycle (CCC)",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ إدارة رأس المال العامل، دورة التشغيل، ودورة التحول النقدي (Cash Conversion Cycle)",
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
    databank: egBacBusinessCh2Databank,
    solvedExamples: egBacBusinessCh2SolvedExamples,
    exerciseProblems: egBacBusinessCh2Exercises
  },
  {
    id: 'egbac_bus_ch3',
    chapterNumber: 3,
    titleEn: "Module 3: Lean Startup, Innovation Dynamics & Venture Capital",
    titleAr: "الوحدة الثالثة: ريادة الأعمال الرشيقة، ديناميكيات الابتكار ورأس المال المخاطر",
    descriptionEn: "Lean startup methodology, Build-Measure-Learn feedback loop, Lean Canvas architecture, MVP design, Venture Capital funding rounds, Cap Tables, term sheets, and investor term sheets.",
    descriptionAr: "منهجية الشركات الناشئة الرشيقة، حلقة البناء والقياس والتعلم، مخطط نموذج العمل (Lean Canvas)، تصميم المنتج الأدنى (MVP)، جولات تمويل رأس المال المخاطر، وجداول توزيع الحصص (Cap Tables).",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_bus_ch3_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Strategic Analysis of The Lean Startup Framework and the Build-Measure-Learn Iterative Feedback Loop",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ منهجية الشركات الناشئة الرشيقة (Lean Startup) وحلقة البناء والقياس والتعلم التكرارية",
        summaryEn: "Comprehensive conceptual and applied mastery of The Lean Startup Framework and the Build-Measure-Learn Iterative Feedback Loop, Lean Canvas Architecture: Deconstructing Business Models on a Single Dynamic Page, and Minimum Viable Product (MVP) Prototyping and Product-Market Fit (PMF) Validation.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ منهجية الشركات الناشئة الرشيقة (Lean Startup) وحلقة البناء والقياس والتعلم التكرارية، هندسة مخطط نموذج العمل الرشيق (Lean Canvas) وتحليل العناصر التسعة على صفحة واحدة، و تصميم المنتج الأدنى القابل للتطبيق (MVP) ومؤشرات التحقق من ملاءمة المنتج للسوق (PMF).",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. The Lean Startup Framework and the Build-Measure-Learn Iterative Feedback Loop\nLean startup methodology eliminates startup failure by rapidly testing core business hypotheses through iterative customer feedback rather than lengthy business plans.\n\nThe Build-Measure-Learn loop dictates turning ideas into prototypes (Build), tracking user behavior through actionable metrics (Measure), and deciding whether to pivot or persevere (Learn).\n\nDistinguishing vanity metrics (page views, registered users) from actionable metrics (cohort retention, activation rate, repeat purchase) is pivotal to validated learning.\n\n#### 2. Lean Canvas Architecture: Deconstructing Business Models on a Single Dynamic Page\nLean Canvas is a one-page business modeling framework tailored for startups, replacing static business plans with a fast, actionable visual layout of 9 building blocks.\n\nCore blocks include: Problem, Customer Segments, Unique Value Proposition (UVP), Solution, Channels, Revenue Streams, Cost Structure, Key Metrics, and Unfair Advantage.\n\nAn Unfair Advantage is a proprietary barrier (such as network effects, patents, insider domain expertise) that cannot be easily copied, bought, or engineered by competitors.\n\n#### 3. Minimum Viable Product (MVP) Prototyping and Product-Market Fit (PMF) Validation\nAn MVP is the version of a new product that enables a team to collect the maximum amount of validated learning about customers with the least development effort.\n\nProduct-Market Fit (PMF) is achieved when a startup's product satisfies a strong market demand, proven by sustained organic retention and referral growth.\n\nSean Ellis test dictates that if over 40% of surveyed active users state they would be \"very disappointed\" if the product disappeared tomorrow, the startup has achieved PMF.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. منهجية الشركات الناشئة الرشيقة (Lean Startup) وحلقة البناء والقياس والتعلم التكرارية\nتحمي منهجية الشركات الناشئة الرشيقة رواد الأعمال من الفشل عبر اختبار الفرضيات التسويقية بسرعة مع العملاء بدلاً من إعداد خطط عمل نظرية مطولة.\n\nتعتمد حلقة (ابنِ - قس - تعلم) على تحويل الأفكار إلى نماذج أولية، وقياس استجابة المستخدمين بمؤشرات دقيقة، ثم التعلم لاتخاذ قرار التحول الاستراتيجي أو الاستمرار.\n\nيعد التمييز الصارم بين \"المؤشرات الزائفة\" (كعدد الزيارات والتنزيلات) وبين \"المؤشرات الحقيقية\" (كمعدل الاحتفاظ بالعملاء وتكرار الشراء) جوهر التعلم الموثق للشركات الناشئة.\n\n#### ٢. هندسة مخطط نموذج العمل الرشيق (Lean Canvas) وتحليل العناصر التسعة على صفحة واحدة\nمخطط نموذج العمل الرشيق (Lean Canvas) هو أداة تلخص عناصر المشروع الريادي في ٩ مربعات مترابطة على صفحة واحدة لاختبار فرضيات النجاح بسرعة.\n\nتشمل المربعات: المشكلة، شرائح العملاء، عرض القيمة الفريد (UVP)، الحل المقترح، قنوات الوصول، مصادر الإيرادات، هيكل التكاليف، المؤشرات الرئيسية، والميزة الحصرية الصعبة.\n\nالميزة التنافسية الحصرية (Unfair Advantage) هي الميزة الأصيلة التي لا يمكن للمنافسين شراؤها أو تقليدها بسهولة، كبراءات الاختراع أو تأثيرات الشبكة أو الخبرة الحصرية النادرة.\n\n#### ٣. تصميم المنتج الأدنى القابل للتطبيق (MVP) ومؤشرات التحقق من ملاءمة المنتج للسوق (PMF)\nالمنتج الأدنى القابل للتطبيق (MVP) هو نسخة أولية تحتوي على الخصائص الجوهرية الأساسية لحل مشكلة العميل واختبار تجاوبه بأقل تكلفة وجهد برمجي.\n\nتتحقق ملاءمة المنتج للسوق (PMF) عندما يلقى المنتج طلباً حقيقياً متزايداً من شريحة مستهدفة واسعة، ويظهر ذلك في استقرار معدلات الاستخدام والنمو العضوي.\n\n#### ٣. تصميم المنتج الأدنى القابل للتطبيق (MVP) ومؤشرات التحقق من ملاءمة المنتج للسوق (PMF)\nيقضي اختبار شون إليس بأن الشركة الناشئة حققت ملاءمة المنتج للسوق إذا أفاد أكثر من ٤٠٪ من مستخدميها النشطين بأنهم \"سيشعرون بخيبة أمل شديدة\" لو توقفت الخدمة غداً.",
        formulas: [
          {
            labelEn: "The Lean Startup Framework and the Build-Measure-Learn Iterative Feedback Loop",
            labelAr: "منهجية الشركات الناشئة الرشيقة (Lean Startup) وحلقة البناء والقياس والتعلم التكرارية",
            latex: "\\text{Core Rule: } The Lean Startup Framework and"
          },
          {
            labelEn: "Lean Canvas Architecture: Deconstructing Business Models on a Single Dynamic Page",
            labelAr: "هندسة مخطط نموذج العمل الرشيق (Lean Canvas) وتحليل العناصر التسعة على صفحة واحدة",
            latex: "\\text{Applied Maxim: } Lean Canvas Architecture: Deco"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Business Administration & Entrepreneurship",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-BUS-CH03-L1",
          pageRange: '85-120'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Strategic Analysis of The Lean Startup Framework and the Build-Measure-Learn Iterative Feedback Loop",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ منهجية الشركات الناشئة الرشيقة (Lean Startup) وحلقة البناء والقياس والتعلم التكرارية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-BUS-CH03-L1",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of The Lean Startup Framework and the Build-Measure-Learn Iterative Feedback Loop",
            "Apply strategic analytical thinking to Lean Canvas Architecture: Deconstructing Business Models on a Single Dynamic Page",
            "Synthesize managerial resolutions for Minimum Viable Product (MVP) Prototyping and Product-Market Fit (PMF) Validation"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ منهجية الشركات الناشئة الرشيقة (Lean Startup) وحلقة البناء والقياس والتعلم التكرارية",
            "تطبيق التفكير التحليلي الناقد في مسألة هندسة مخطط نموذج العمل الرشيق (Lean Canvas) وتحليل العناصر التسعة على صفحة واحدة",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ تصميم المنتج الأدنى القابل للتطبيق (MVP) ومؤشرات التحقق من ملاءمة المنتج للسوق (PMF)"
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
            questionEn: "What is the accredited curriculum determination regarding The Lean Startup Framework and the Build-Measure-Learn Iterative Feedback Loop?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (منهجية الشركات الناشئة الرشيقة (Lean Startup) وحلقة البناء والقياس والتعلم التكرارية)؟",
            solutionEn: "Lean startup methodology eliminates startup failure by rapidly testing core business hypotheses through iterative customer feedback rather than lengthy business plans.",
            solutionAr: "تحمي منهجية الشركات الناشئة الرشيقة رواد الأعمال من الفشل عبر اختبار الفرضيات التسويقية بسرعة مع العملاء بدلاً من إعداد خطط عمل نظرية مطولة."
          }
        },
        worksheet: {
          id: 'egbac_bus_ch3_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Strategic Analysis of The Lean Startup Framework and the Build-Measure-Learn Iterative Feedback Loop",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ منهجية الشركات الناشئة الرشيقة (Lean Startup) وحلقة البناء والقياس والتعلم التكرارية",
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
        id: 'egbac_bus_ch3_l2',
        titleEn: "Lesson 2: Operational Applications and Real-World Evaluation of Venture Capital Financing: Funding Lifecycles (Seed, Series A/B/C) and Cap Table Management",
        titleAr: "الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ تمويل رأس المال المخاطر: دورة حياة جولات التمويل (بذري، أ، ب، ج) وإدارة جدول الحصص (Cap Table)",
        summaryEn: "Comprehensive conceptual and applied mastery of Venture Capital Financing: Funding Lifecycles (Seed, Series A/B/C) and Cap Table Management, Investor Term Sheets, Liquidation Preferences, and Anti-Dilution Protection Mechanisms, and Pivot Dynamics: Structural Strategic Realignments When Core Hypotheses Fail.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ تمويل رأس المال المخاطر: دورة حياة جولات التمويل (بذري، أ، ب، ج) وإدارة جدول الحصص (Cap Table)، اتفاقيات الشروط الاستثمارية (Term Sheets)، أولوية التصفية، وحماية المستستثمر من تخفيف الحصص، و ديناميكيات التحول الاستراتيجي (Pivot) عند تعثر فرضيات نموذج العمل الأولي.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Venture Capital Financing: Funding Lifecycles (Seed, Series A/B/C) and Cap Table Management\nVenture capital (VC) provides institutional equity capital to high-growth, high-risk startups in exchange for minority equity stakes and board governance rights.\n\nFunding stages progress from Pre-Seed/Seed (MVP and initial traction) to Series A (PMF and unit economics) and Series B/C (rapid international scaling).\n\nEquity dilution across successive rounds requires careful Cap Table modeling; issuing employee stock ownership plans (ESOP) must balance incentive alignment against founder control dilution.\n\n#### 2. Investor Term Sheets, Liquidation Preferences, and Anti-Dilution Protection Mechanisms\nA Term Sheet is a non-binding legal agreement summarizing the financial valuation, ownership percentages, voting rights, and terms of a venture capital investment.\n\nA 1x non-participating liquidation preference guarantees investors recoup their invested capital first before common equity holders receive proceeds in an exit or liquidation.\n\nBroad-based weighted average anti-dilution protects investors against down-rounds far more equitably than punitive full-ratchet clauses, which devastate founder equity.\n\n#### 3. Pivot Dynamics: Structural Strategic Realignments When Core Hypotheses Fail\nA pivot is a structured course correction designed to test a new strategic hypothesis about the product, customer segment, or engine of growth without changing overall vision.\n\nPivot types include: Zoom-In (focusing on a single popular feature), Customer Segment (re-targeting enterprise instead of B2C), and Technology Pivot.\n\nThe runway-to-pivot ratio is a startup's lifeline: dividing remaining liquid reserves by the net monthly cash burn rate dictates how many strategic iterations remain before insolvency.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. تمويل رأس المال المخاطر: دورة حياة جولات التمويل (بذري، أ، ب، ج) وإدارة جدول الحصص (Cap Table)\nرأس المال المخاطر (VC) هو تمويل استثماري تقدمه صناديق متخصصة للشركات الناشئة سريعة النمو مقابل حصص ملكية ومقاعد في مجالس الإدارة لتحقيق عوائد مضاعفة.\n\nتتدرج جولات التمويل من مرحلة البذرة (Seed) لبناء النموذج واختباره، ثم الجولة (أ) بعد إثبات ملاءمة السوق، تليها الجولات (ب) و(ج) لتمويل التوسع والانتشار الدولي السريع.\n\nتفرض جولات التمويل المتتالية تخفيفاً لحصص الملكية (Dilution)، مما يتطلب إدارة احترافية لجدول الحصص (Cap Table) وتخصيص أسهم الموظفين (ESOP) دون فقدان المؤسسين للسيطرة.\n\n#### ٢. اتفاقيات الشروط الاستثمارية (Term Sheets)، أولوية التصفية، وحماية المستستثمر من تخفيف الحصص\nاتفاقية الشروط (Term Sheet) هي وثيقة تحدد الإطار الاستثماري المبدئي بما يشمل تقييم الشركة، نسبة الحصص، حقوق التصويت، وشروط الحوكمة قبل إبرام العقود النهائية.\n\nتضمن أولوية التصفية (Liquidation Preference) استرداد المستثمر لأمواله المستثمرة أولاً عند بيع أو تصفية الشركة قبل توزيع أي عوائد على المؤسسين وحملة الأسهم العادية.\n\nتحمي صيغة المتوسط المرجح لحماية المستثمر من جولات التمويل الهابطة (Down-rounds) حقوق المستثمر بعدالة دون شطب حصص المؤسسين كما تفعل بنود Full-Ratchet القاسية.\n\n#### ٣. ديناميكيات التحول الاستراتيجي (Pivot) عند تعثر فرضيات نموذج العمل الأولي\nالتحول الاستراتيجي (Pivot) هو تعديل مسار الشركة الناشئة لاختبار فرضية جديدة حول المنتج أو شريحة العملاء أو نموذج الإيرادات مع الحفاظ على الرؤية الكبرى.\n\nتتنوع أنماط التحول: كالتركيز على خاصية فريدة واحدة (Zoom-in Pivot)، أو تحويل الجمهور المستهدف من الأفراد إلى الشركات (B2B)، أو تغيير المنصة التقنية بالكامل.\n\n#### ٣. ديناميكيات التحول الاستراتيجي (Pivot) عند تعثر فرضيات نموذج العمل الأولي\nيحدد مدرج السيولة (Runway) عدد التحولات المتاحة للشركة الناشئة، ويُحسب بقسمة الرصيد النقدي المتبقي على معدل الحرق الشهري (Burn Rate) قبل نفاد السيولة بالكامل.",
        formulas: [
          {
            labelEn: "Venture Capital Financing: Funding Lifecycles (Seed, Series A/B/C) and Cap Table Management",
            labelAr: "تمويل رأس المال المخاطر: دورة حياة جولات التمويل (بذري، أ، ب، ج) وإدارة جدول الحصص (Cap Table)",
            latex: "\\text{Core Rule: } Venture Capital Financing: Fun"
          },
          {
            labelEn: "Investor Term Sheets, Liquidation Preferences, and Anti-Dilution Protection Mechanisms",
            labelAr: "اتفاقيات الشروط الاستثمارية (Term Sheets)، أولوية التصفية، وحماية المستستثمر من تخفيف الحصص",
            latex: "\\text{Applied Maxim: } Investor Term Sheets, Liquidat"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Business Administration & Entrepreneurship",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-BUS-CH03-L2",
          pageRange: '105-140'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Operational Applications and Real-World Evaluation of Venture Capital Financing: Funding Lifecycles (Seed, Series A/B/C) and Cap Table Management",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ تمويل رأس المال المخاطر: دورة حياة جولات التمويل (بذري، أ، ب، ج) وإدارة جدول الحصص (Cap Table)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-BUS-CH03-L2",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Venture Capital Financing: Funding Lifecycles (Seed, Series A/B/C) and Cap Table Management",
            "Apply strategic analytical thinking to Investor Term Sheets, Liquidation Preferences, and Anti-Dilution Protection Mechanisms",
            "Synthesize managerial resolutions for Pivot Dynamics: Structural Strategic Realignments When Core Hypotheses Fail"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ تمويل رأس المال المخاطر: دورة حياة جولات التمويل (بذري، أ، ب، ج) وإدارة جدول الحصص (Cap Table)",
            "تطبيق التفكير التحليلي الناقد في مسألة اتفاقيات الشروط الاستثمارية (Term Sheets)، أولوية التصفية، وحماية المستستثمر من تخفيف الحصص",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ ديناميكيات التحول الاستراتيجي (Pivot) عند تعثر فرضيات نموذج العمل الأولي"
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
            questionEn: "What is the accredited curriculum determination regarding Venture Capital Financing: Funding Lifecycles (Seed, Series A/B/C) and Cap Table Management?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (تمويل رأس المال المخاطر: دورة حياة جولات التمويل (بذري، أ، ب، ج) وإدارة جدول الحصص (Cap Table))؟",
            solutionEn: "Venture capital (VC) provides institutional equity capital to high-growth, high-risk startups in exchange for minority equity stakes and board governance rights.",
            solutionAr: "رأس المال المخاطر (VC) هو تمويل استثماري تقدمه صناديق متخصصة للشركات الناشئة سريعة النمو مقابل حصص ملكية ومقاعد في مجالس الإدارة لتحقيق عوائد مضاعفة."
          }
        },
        worksheet: {
          id: 'egbac_bus_ch3_l2_ws',
          titleEn: "Worksheet: Lesson 2: Operational Applications and Real-World Evaluation of Venture Capital Financing: Funding Lifecycles (Seed, Series A/B/C) and Cap Table Management",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ تمويل رأس المال المخاطر: دورة حياة جولات التمويل (بذري، أ، ب، ج) وإدارة جدول الحصص (Cap Table)",
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
    databank: egBacBusinessCh3Databank,
    solvedExamples: egBacBusinessCh3SolvedExamples,
    exerciseProblems: egBacBusinessCh3Exercises
  },
  {
    id: 'egbac_bus_ch4',
    chapterNumber: 4,
    titleEn: "Module 4: Digital Transformation, FinTech & Global Business Scalability",
    titleAr: "الوحدة الرابعة: التحول الرقمي، التكنولوجيا المالية وقابلية التوسع العالمي",
    descriptionEn: "Platform business models, two-sided networks, FinTech ecosystems, embedded finance, unit economics scalability (CAC vs. LTV), cross-border e-commerce logistics, and AI in corporate operations.",
    descriptionAr: "نماذج أعمال المنصات الرقمية وتأثيرات الشبكة ثنائية الجانب، منظومة التكنولوجيا المالية والمدفوعات، اقتصاديات الوحدة (تكلفة الاستقطاب مقابل القيمة الدائمة للعميل)، والتجارة العالمية المدعومة بالذكاء الاصطناعي.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_bus_ch4_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Strategic Analysis of Platform Business Models, Two-Sided Market Dynamics, and Direct/Indirect Network Effects",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ نماذج أعمال المنصات الرقمية، الأسواق ثنائية الجانب، وتأثيرات الشبكة المباشرة وغير المباشرة",
        summaryEn: "Comprehensive conceptual and applied mastery of Platform Business Models, Two-Sided Market Dynamics, and Direct/Indirect Network Effects, FinTech Architecture: Digital Payment Rails, Open Banking APIs, and Embedded Finance, and Unit Economics Scalability: Customer Acquisition Cost (CAC) vs. Customer Lifetime Value (LTV).",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ نماذج أعمال المنصات الرقمية، الأسواق ثنائية الجانب، وتأثيرات الشبكة المباشرة وغير المباشرة، معمارية التكنولوجيا المالية (FinTech): مسارات الدفع الرقمي، واجهات Open Banking، والتمويل المدمج، و اقتصاديات الوحدة (Unit Economics): تكلفة استقطاب العميل (CAC) مقابل القيمة الدائمة (LTV).",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Platform Business Models, Two-Sided Market Dynamics, and Direct/Indirect Network Effects\nPlatform models create value by facilitating direct interactions and exchanges between interdependent groups, typically producers and consumers.\n\nDirect network effects occur when value increases with more users on the same side; indirect network effects happen when more producers attract more buyers in a virtuous cycle.\n\nSubsidizing the price-sensitive \"money-losing\" market side solves the chicken-and-egg launch dilemma, unlocking self-sustaining liquidity and winner-take-most dominance.\n\n#### 2. FinTech Architecture: Digital Payment Rails, Open Banking APIs, and Embedded Finance\nFinTech leverages software and algorithms to automate, modernize, and unbundle traditional banking and financial services for consumers and corporations.\n\nOpen Banking enables third-party developers to build applications around financial institutions through secure application programming interfaces (APIs).\n\nEmbedded finance integrates lending, insurance, or payments natively into non-financial software workflows (such as Shopify or Uber), transforming customer retention economics.\n\n#### 3. Unit Economics Scalability: Customer Acquisition Cost (CAC) vs. Customer Lifetime Value (LTV)\nUnit economics evaluates the direct revenues and costs associated with a single fundamental unit of business, usually a single customer or completed transaction.\n\nThe LTV/CAC ratio benchmarks sustainable scalability: healthy venture businesses require an LTV / CAC >= 3.0 alongside a CAC payback period under 12 months.\n\nHigh early revenue growth masks flawed unit economics if customer churn is elevated; scaling an enterprise with negative contribution margin accelerates cash burn toward bankruptcy.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. نماذج أعمال المنصات الرقمية، الأسواق ثنائية الجانب، وتأثيرات الشبكة المباشرة وغير المباشرة\nتخلق المنصات الرقمية القيمة عبر تسهيل التبادل المباشر بين أطراف متعددة ومترابطة (كمزودي الخدمات والمستهلكين) دون امتلاك الأصول المادية مباشرة.\n\nتحدث تأثيرات الشبكة المباشرة عندما تزداد قيمة المنصة بزيادة مستخدمي نفس الطرف، بينما تجتذب تأثيرات الشبكة غير المباشرة مزيداً من البائعين مع تزايد المشترين.\n\nيحل دعم الطرف الأكثر حساسية للسعر (كتقديم الخدمة مجاناً للمستهلك) معضلة \"البيضة والدجاجة\" عند إطلاق المنصة، محققاً سيولة تتيح الاستحواذ شبه الاحتكاري على السوق.\n\n#### ٢. معمارية التكنولوجيا المالية (FinTech): مسارات الدفع الرقمي، واجهات Open Banking، والتمويل المدمج\nالتكنولوجيا المالية (FinTech) هي توظيف البرمجيات والحوسبة لتطوير وتسهيل الخدمات المصرفية والمالية وإتاحتها للجميع بسرعة وكفاءة.\n\nتتيح الخدمات المصرفية المفتوحة (Open Banking) للشركات الناشئة والمطورين بناء تطبيقات مالية مبتكرة وربطها مع البنوك عبر واجهات برمجة التطبيقات (APIs) الآمنة.\n\nيدمج \"التمويل المدمج\" (Embedded Finance) خدمات الدفع والإقراض والتقسيط بسلاسة داخل التطبيقات غير المصرفية، مما يضاعف القيمة الدائمة للعملاء وهوامش ربح المنصة.\n\n#### ٣. اقتصاديات الوحدة (Unit Economics): تكلفة استقطاب العميل (CAC) مقابل القيمة الدائمة (LTV)\nاقتصاديات الوحدة هي الحسابات المالية الدقيقة للإيرادات والتكاليف المباشرة المرتبطة بوحدة واحدة من النشاط التجاري (كالعميل الواحد أو الطلب الواحد).\n\nيقيس معدل LTV / CAC كفاءة استدامة النمو؛ وتتطلب الشركات الناشئة الناجحة نسبة تتجاوز 3.0 مع فترة استرداد لتكلفة الاستقطاب تقل عن ١٢ شهراً.\n\n#### ٣. اقتصاديات الوحدة (Unit Economics): تكلفة استقطاب العميل (CAC) مقابل القيمة الدائمة (LTV)\nيخفي النمو السريع في المبيعات خللاً قاتلاً إذا كان معدل تسرب العملاء (Churn) مرتفعاً؛ فضخ أموال التسويق في نموذج ذي هامش مساهمة سالب يعجل بنفاد السيولة والإفلاس.",
        formulas: [
          {
            labelEn: "Platform Business Models, Two-Sided Market Dynamics, and Direct/Indirect Network Effects",
            labelAr: "نماذج أعمال المنصات الرقمية، الأسواق ثنائية الجانب، وتأثيرات الشبكة المباشرة وغير المباشرة",
            latex: "\\text{Core Rule: } Platform Business Models, Two-"
          },
          {
            labelEn: "FinTech Architecture: Digital Payment Rails, Open Banking APIs, and Embedded Finance",
            labelAr: "معمارية التكنولوجيا المالية (FinTech): مسارات الدفع الرقمي، واجهات Open Banking، والتمويل المدمج",
            latex: "\\text{Applied Maxim: } FinTech Architecture: Digital "
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Business Administration & Entrepreneurship",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-BUS-CH04-L1",
          pageRange: '125-160'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Strategic Analysis of Platform Business Models, Two-Sided Market Dynamics, and Direct/Indirect Network Effects",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ نماذج أعمال المنصات الرقمية، الأسواق ثنائية الجانب، وتأثيرات الشبكة المباشرة وغير المباشرة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-BUS-CH04-L1",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Platform Business Models, Two-Sided Market Dynamics, and Direct/Indirect Network Effects",
            "Apply strategic analytical thinking to FinTech Architecture: Digital Payment Rails, Open Banking APIs, and Embedded Finance",
            "Synthesize managerial resolutions for Unit Economics Scalability: Customer Acquisition Cost (CAC) vs. Customer Lifetime Value (LTV)"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ نماذج أعمال المنصات الرقمية، الأسواق ثنائية الجانب، وتأثيرات الشبكة المباشرة وغير المباشرة",
            "تطبيق التفكير التحليلي الناقد في مسألة معمارية التكنولوجيا المالية (FinTech): مسارات الدفع الرقمي، واجهات Open Banking، والتمويل المدمج",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ اقتصاديات الوحدة (Unit Economics): تكلفة استقطاب العميل (CAC) مقابل القيمة الدائمة (LTV)"
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
            questionEn: "What is the accredited curriculum determination regarding Platform Business Models, Two-Sided Market Dynamics, and Direct/Indirect Network Effects?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (نماذج أعمال المنصات الرقمية، الأسواق ثنائية الجانب، وتأثيرات الشبكة المباشرة وغير المباشرة)؟",
            solutionEn: "Platform models create value by facilitating direct interactions and exchanges between interdependent groups, typically producers and consumers.",
            solutionAr: "تخلق المنصات الرقمية القيمة عبر تسهيل التبادل المباشر بين أطراف متعددة ومترابطة (كمزودي الخدمات والمستهلكين) دون امتلاك الأصول المادية مباشرة."
          }
        },
        worksheet: {
          id: 'egbac_bus_ch4_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Strategic Analysis of Platform Business Models, Two-Sided Market Dynamics, and Direct/Indirect Network Effects",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل الاستراتيجي لـ نماذج أعمال المنصات الرقمية، الأسواق ثنائية الجانب، وتأثيرات الشبكة المباشرة وغير المباشرة",
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
        id: 'egbac_bus_ch4_l2',
        titleEn: "Lesson 2: Operational Applications and Real-World Evaluation of Global Cross-Border E-Commerce, International Logistics, and IncoTerms Trade Standards",
        titleAr: "الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ التجارة الإلكترونية الدولية العابرة للحدود، سلاسل الإمداد العالمية، وقواعد التجارة الدولية (IncoTerms)",
        summaryEn: "Comprehensive conceptual and applied mastery of Global Cross-Border E-Commerce, International Logistics, and IncoTerms Trade Standards, Artificial Intelligence, Big Data, and Algorithmic Operations in Corporate Decision-Making, and Global Business Scaling: International Market Entry Modes and Cross-Cultural Strategy.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ التجارة الإلكترونية الدولية العابرة للحدود، سلاسل الإمداد العالمية، وقواعد التجارة الدولية (IncoTerms)، الذكاء الاصطناعي وتحليلات البيانات الضخمة في العمليات التشغيلية واتخاذ القرار المؤسسي الخوارزمي، و استراتيجيات التوسع والنمو العالمي: أساليب دخول الأسواق الدولية وإدارة الثقافات المتعددة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Global Cross-Border E-Commerce, International Logistics, and IncoTerms Trade Standards\nCross-border e-commerce enables online businesses to sell and fulfill physical and digital goods to international buyers across multiple currencies and customs jurisdictions.\n\nInternational Commercial Terms (IncoTerms) such as FOB, CIF, and DDP standardize delivery responsibilities, risks, and transport insurance allocations between exporter and importer.\n\nCurrency hedging, local payment gateway integrations, and decentralized cross-dock fulfillment hubs are prerequisite infrastructure to prevent cross-border margin wipeouts.\n\n#### 2. Artificial Intelligence, Big Data, and Algorithmic Operations in Corporate Decision-Making\nEnterprise AI deploys predictive machine learning models and robotic process automation (RPA) to automate repetitive workflows and discover actionable business insights.\n\nPredictive analytics optimizes dynamic pricing, inventory demand forecasting, and predictive machinery maintenance, substantially curtailing operational downtime.\n\nAlgorithmic governance introduces systemic risks: algorithmic bias, black-box hallucination, and data privacy breaches demand rigorous ethical auditing and human-in-the-loop oversight.\n\n#### 3. Global Business Scaling: International Market Entry Modes and Cross-Cultural Strategy\nInternational expansion enables a mature enterprise to penetrate overseas jurisdictions to capture new demand, diversify revenues, and achieve global scale.\n\nForeign market entry modes span low-risk exporting, licensing, franchising, joint ventures, up to wholly-owned foreign direct investments (Greenfield ventures).\n\nGlocal strategy (Think Global, Act Local) successfully balances global operational efficiencies against critical adaptations to nuanced local regulatory and cultural realities.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. التجارة الإلكترونية الدولية العابرة للحدود، سلاسل الإمداد العالمية، وقواعد التجارة الدولية (IncoTerms)\nالتجارة الإلكترونية العابرة للحدود هي بيع وشحن المنتجات الرقمية والمادية للمستهلكين حول العالم عبر منصات الإنترنت مع تسوية المدفوعات والجمارك دولياً.\n\nتوحد مصطلحات التجارة الدولية (IncoTerms) كـ FOB وCIF وDDP المسؤوليات والمخاطر وتكاليف الشحن والتأمين بين المصدر والمستورد لضمان التجارة العالمية.\n\nتعد أدوات التحوط ضد تقلبات العملات، وتوفير بوابات الدفع المحلية، ومستودعات التوزيع الإقليمية، ركائز حاسمة لحماية هوامش أرباح التجارة الدولية من التآكل المفاجئ.\n\n#### ٢. الذكاء الاصطناعي وتحليلات البيانات الضخمة في العمليات التشغيلية واتخاذ القرار المؤسسي الخوارزمي\nالذكاء الاصطناعي المؤسسي هو توظيف خوارزميات التعلم الآلي والبيانات الضخمة لأتمتة العمليات المتكررة واستخراج رؤى تنبؤية تدعم سرعة القرار الاستثماري.\n\nتحسن التحليلات التنبؤية التسعير الديناميكي للسلع، وتتوقع بدقة حجم الطلب على المخزون، وتوجه الصيانة الوقائية للآلات قبل تعطلها، مما يوفر مليارات الدولارات.\n\nتفرض الإدارة الخوارزمية مخاطر جديدة كتحيز النماذج، ومخاطر حماية البيانات والخصوصية، مما يستوجب رقابة بشرية مستمرة (Human-in-the-Loop) وتدقيقاً أخلاقياً صارماً.\n\n#### ٣. استراتيجيات التوسع والنمو العالمي: أساليب دخول الأسواق الدولية وإدارة الثقافات المتعددة\nالتوسع العالمي هو انتقال المؤسسة الناجحة للمنافسة في أسواق خارجية جديدة لتنويع مصادر الدخل والاستفادة من وفورات الحجم والطلب العالمي.\n\nتتدرج أساليب دخول الأسواق الأجنبية من التصدير المباشر منخفض المخاطر، والترخيص، والفرنشايز، إلى الشراكات الاستراتيجية، ثم الاستثمار الأجنبي المباشر الكامل.\n\n#### ٣. استراتيجيات التوسع والنمو العالمي: أساليب دخول الأسواق الدولية وإدارة الثقافات المتعددة\nتوازن استراتيجية \"التفكير عالمياً والتنفيذ محلياً\" (Glocal) ببراعة بين وفورات الحجم والإنتاج العالمي وبين المواءمة الدقيقة للخصوصيات الثقافية والتشريعية المحلية.",
        formulas: [
          {
            labelEn: "Global Cross-Border E-Commerce, International Logistics, and IncoTerms Trade Standards",
            labelAr: "التجارة الإلكترونية الدولية العابرة للحدود، سلاسل الإمداد العالمية، وقواعد التجارة الدولية (IncoTerms)",
            latex: "\\text{Core Rule: } Global Cross-Border E-Commerce"
          },
          {
            labelEn: "Artificial Intelligence, Big Data, and Algorithmic Operations in Corporate Decision-Making",
            labelAr: "الذكاء الاصطناعي وتحليلات البيانات الضخمة في العمليات التشغيلية واتخاذ القرار المؤسسي الخوارزمي",
            latex: "\\text{Applied Maxim: } Artificial Intelligence, Big D"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Business Administration & Entrepreneurship",
          bookTitleAr: "إدارة الأعمال وريادة الأعمال للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-BUS-CH04-L2",
          pageRange: '145-180'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Operational Applications and Real-World Evaluation of Global Cross-Border E-Commerce, International Logistics, and IncoTerms Trade Standards",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ التجارة الإلكترونية الدولية العابرة للحدود، سلاسل الإمداد العالمية، وقواعد التجارة الدولية (IncoTerms)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-BUS-CH04-L2",
          bloomsObjectivesEn: [
            "Demonstrate deep understanding of Global Cross-Border E-Commerce, International Logistics, and IncoTerms Trade Standards",
            "Apply strategic analytical thinking to Artificial Intelligence, Big Data, and Algorithmic Operations in Corporate Decision-Making",
            "Synthesize managerial resolutions for Global Business Scaling: International Market Entry Modes and Cross-Cultural Strategy"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ التجارة الإلكترونية الدولية العابرة للحدود، سلاسل الإمداد العالمية، وقواعد التجارة الدولية (IncoTerms)",
            "تطبيق التفكير التحليلي الناقد في مسألة الذكاء الاصطناعي وتحليلات البيانات الضخمة في العمليات التشغيلية واتخاذ القرار المؤسسي الخوارزمي",
            "بناء رؤى إدارية واستراتيجية متكاملة لـ استراتيجيات التوسع والنمو العالمي: أساليب دخول الأسواق الدولية وإدارة الثقافات المتعددة"
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
            questionEn: "What is the accredited curriculum determination regarding Global Cross-Border E-Commerce, International Logistics, and IncoTerms Trade Standards?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (التجارة الإلكترونية الدولية العابرة للحدود، سلاسل الإمداد العالمية، وقواعد التجارة الدولية (IncoTerms))؟",
            solutionEn: "Cross-border e-commerce enables online businesses to sell and fulfill physical and digital goods to international buyers across multiple currencies and customs jurisdictions.",
            solutionAr: "التجارة الإلكترونية العابرة للحدود هي بيع وشحن المنتجات الرقمية والمادية للمستهلكين حول العالم عبر منصات الإنترنت مع تسوية المدفوعات والجمارك دولياً."
          }
        },
        worksheet: {
          id: 'egbac_bus_ch4_l2_ws',
          titleEn: "Worksheet: Lesson 2: Operational Applications and Real-World Evaluation of Global Cross-Border E-Commerce, International Logistics, and IncoTerms Trade Standards",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات التشغيلية والتقييم الواقعي لـ التجارة الإلكترونية الدولية العابرة للحدود، سلاسل الإمداد العالمية، وقواعد التجارة الدولية (IncoTerms)",
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
    databank: egBacBusinessCh4Databank,
    solvedExamples: egBacBusinessCh4SolvedExamples,
    exerciseProblems: egBacBusinessCh4Exercises
  }
];

export const egBacBusinessBranch: Branch = {
  id: 'egbac_business',
  titleEn: "Egyptian Baccalaureate Business Administration & Entrepreneurship",
  titleAr: "إدارة الأعمال وريادة الأعمال للبكالوريا المصرية",
  categoryEn: "Egyptian Baccalaureate Business & Management",
  categoryAr: "إدارة الأعمال والعلوم الإدارية للبكالوريا",
  iconName: 'Briefcase',
  colorGradient: 'from-sky-950 via-indigo-950 to-slate-950',
  chapters
};
