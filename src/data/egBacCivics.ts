import type { Branch, Chapter } from '../types/curriculum';
import { egBacCivicsCh1Databank } from './databanks/egbac/egBacCivicsCh1Databank';
import { egBacCivicsCh1SolvedExamples, egBacCivicsCh1Exercises } from './textbook/egbac/egBacCivicsCh1Textbook';
import { egBacCivicsCh2Databank } from './databanks/egbac/egBacCivicsCh2Databank';
import { egBacCivicsCh2SolvedExamples, egBacCivicsCh2Exercises } from './textbook/egbac/egBacCivicsCh2Textbook';
import { egBacCivicsCh3Databank } from './databanks/egbac/egBacCivicsCh3Databank';
import { egBacCivicsCh3SolvedExamples, egBacCivicsCh3Exercises } from './textbook/egbac/egBacCivicsCh3Textbook';
import { egBacCivicsCh4Databank } from './databanks/egbac/egBacCivicsCh4Databank';
import { egBacCivicsCh4SolvedExamples, egBacCivicsCh4Exercises } from './textbook/egbac/egBacCivicsCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'egbac_civics_ch1',
    chapterNumber: 1,
    titleEn: "Constitutional Jurisprudence, Judicial Review & Dynamic Separation of Powers",
    titleAr: "الفقه الدستوري، الرقابة القضائية والتوازن الديناميكي بين السلطات",
    descriptionEn: "Kelsenian normative hierarchy, comparative models of judicial review, Supreme Constitutional Court jurisprudence, and emergency proportionality review.",
    descriptionAr: "تدرج القواعد القانونية لكلسن، النماذج المقارنة للرقابة الدستورية، فقه المحكمة الدستورية العليا، وضمانات حالة الطوارئ والتناسبية.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'civics_constitution_lab',
        titleEn: "Constitutional Review & Supreme Court Judicial Simulator",
        titleAr: "استوديو الرقابة القضائية وأحكام المحكمة الدستورية العليا",
        descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_civics_ch1_l1',
        titleEn: "Kelsenian Normative Hierarchy & Comparative Models of Constitutional Review",
        titleAr: "التدرج المعياري لكلسن والنماذج المقارنة للرقابة القضائية على دستورية القوانين",
        summaryEn: "Hans Kelsen’s pyramid of norms and Grundnorm, decentralized American review (Marbury v. Madison) vs centralized European courts, and Egypt’s specialized adjudication.",
        summaryAr: "هرم كلسن المعياري والقاعدة الأساسية، نموذج الرقابة اللامركزية الأمريكية مقابل المحاكم المركزية الأوروبية، والنموذج المصري المتخصص ذي الحجية المطلقة للكافة.",
        theoryContentEn: "### 1. Kelsenian Normative Hierarchy & Structural Constitutional Supremacy\n- **Fundamental Principle:** Hans Kelsen’s pyramid of norms establishes that constitutional rules occupy the supreme apex, binding and validating all subordinate statutory and administrative acts.\n- **Institutional Impact:** Substantive constitutional supremacy dictates that no lower statute may conflict with constitutional rights, while formal supremacy requires adherence to special amendment hurdles.\n- **Constitutional Perspective:** The Kelsenian Grundnorm represents the ultimate non-statutory postulate from which the entire legal order derives its binding normative validity, anchoring judicial review against arbitrary legislation.\n\n### 2. Comparative Judicial Review: Centralized European vs. Decentralized American Models\n- **Statutory Framework:** Decentralized review (American model, Marbury v. Madison 1803) empowers any trial judge to refrain from applying an unconstitutional law in a specific case.\n- **Democratic Dynamic:** Centralized review (European Kelsenian model) concentrates constitutional adjudicative power exclusively in a specialized Constitutional Court whose judgments hold erga omnes effect.\n- **High-Order Synthesis:** Egypt adopts a hybrid centralized model: while ordinary judges cannot strike down statutes, they identify constitutional questions and refer them to the Supreme Constitutional Court for final binding erga omnes determination.\n\n### 3. Jurisprudence on Fundamental Rights: Proportionality, Equality, and Non-Retroactivity\n- **Normative Foundation:** The Egyptian Supreme Constitutional Court asserts that constitutional equality requires equal protection under identical factual and legal circumstances.\n- **Judicial Analysis:** The constitutional principle of non-retroactivity of criminal statutes protects personal liberty by ensuring no crime or penalty exists without prior legislative text (Nullum crimen sine lege).\n- **Advanced Jurisprudence:** The Court applies a strict three-tier proportionality test (Suitability, Necessity, and Strict Proportionality / Balancing) whenever statutory legislation infringes or limits constitutional liberties.",
        theoryContentAr: "### ١. تدرج القواعد القانونية لكلسن ومبدأ السمو الموضوعي والشكلي للدستور\n- **المنطلق التأسيسي:** يقرر هرم كلسن المعياري أن القواعد الدستورية تحتل قمة التدرج التشريعي، مما يجعلها المرجع الأعلى لصحة وسريان جميع القوانين واللوائح التنفيذية الأدنى درجة.\n- **الأثر المؤسسي:** يقتضي السمو الموضوعي للدستور عدم تعارض مضامين التشريعات العادية مع الحقوق الدستورية، بينما يفرض السمو الشكلي اتباع إجراءات مشددة لتعديل الوثيقة الدستورية.\n- **الرؤية الدستورية العليا:** تمثل القاعدة الأساسية (Grundnorm) عند كلسن الفرضية المنطقية العليا التي يستمد منها النظام القانوني بأكمله مشروعيته الملزمة، وتؤسس للرقابة القضائية ضد التعسف التشريعي.\n\n### ٢. النماذج المقارنة للرقابة الدستورية: النموذج الأوروبي المركزي مقابل الأمريكي اللامركزي\n- **الإطار التشريعي:** يمنح نموذج الرقابة اللامركزية (الأمريكي المنبثق عن سابقة ماربوري ضد ماديسون 1803) كل قاضٍ في الدولة حق الامتناع عن تطبيق أي قانون مخالف للدستور في الدعوى المعروضة أمامه.\n- **الديناميات الديمقراطية:** يقصر نموذج الرقابة المركزية الأوروبي (الكلسني) الفصل في دستورية القوانين على محكمة دستورية عليا متخصصة واحدة تتمتع أحكامها بحجية مطلقة كاشفة للكافة (Erga Omnes).\n- **التحليل التطبيقي:** تتبنى مصر نموذجاً مركزياً محكماً؛ حيث تلتزم المحاكم الموضوعية بإحالة الدفوع الجدية بعدم الدستورية حصراً إلى المحكمة الدستورية العليا لتقضي بإلغاء النص بحجية مطلقة كاشفة ملزمة لسائر السلطات.\n\n### ٣. فقه الحقوق الدستورية الأساسية: مبدأ التناسبية، المساواة وعدم رجعية القوانين العقابية\n- **الأساس المعياري:** يقرر قضاء المحكمة الدستورية العليا المصرية أن مبدأ المساواة الدستورية يعني معاملة المراكز القانونية المتماثلة على قدم المساواة دون تمييز تحكمي أو غير مبرر.\n- **الرقابة القضائية:** يكفل مبدأ عدم رجعية القوانين الجنائية الحرية الشخصية، فلا جريمة ولا عقوبة إلا بنص تشريعي سابق على ارتكاب الفعل، صوناً للأمن القانوني وحرمة الحقوق والحريات.\n- **آفاق الفقه المعاصر:** تطبق المحكمة الدستورية العليا معيار التناسبية الثلاثي الصارم (الملاءمة، الضرورة، والتناسب بمفهومه الضيق بين الوسيلة والغاية) لمراقبة دستورية القيود التشريعية المفروضة على الحريات.",
        formulas: [
          {
            labelEn: "Kelsenian Normative Hierarchy & Structural Constitutional Supremacy",
            labelAr: "تدرج القواعد القانونية لكلسن ومبدأ السمو الموضوعي والشكلي للدستور",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Comparative Judicial Review: Centralized European vs. Decentralized American Models",
            labelAr: "النماذج المقارنة للرقابة الدستورية: النموذج الأوروبي المركزي مقابل الأمريكي اللامركزي",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Jurisprudence on Fundamental Rights: Proportionality, Equality, and Non-Retroactivity",
            labelAr: "فقه الحقوق الدستورية الأساسية: مبدأ التناسبية، المساواة وعدم رجعية القوانين العقابية",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Comparative Constitutional Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في الفقه الدستوري والحوكمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-CIV-CH01-L1',
          pageRange: '5-25'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Kelsenian Normative Hierarchy & Comparative Models of Constitutional Review",
          titleAr: "خطة الدرس التوجيهية: التدرج المعياري لكلسن والنماذج المقارنة للرقابة القضائية على دستورية القوانين",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-CIV-CH01-L1',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Kelsenian Normative Hierarchy & Structural Constitutional Supremacy",
            "Evaluate institutional checks, balances, and statutory limits in Comparative Judicial Review: Centralized European vs. Decentralized American Models",
            "Analyze constitutional jurisprudence and rights guarantees in Jurisprudence on Fundamental Rights: Proportionality, Equality, and Non-Retroactivity"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ تدرج القواعد القانونية لكلسن ومبدأ السمو الموضوعي والشكلي للدستور",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ النماذج المقارنة للرقابة الدستورية: النموذج الأوروبي المركزي مقابل الأمريكي اللامركزي",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ فقه الحقوق الدستورية الأساسية: مبدأ التناسبية، المساواة وعدم رجعية القوانين العقابية"
          ],
          prerequisitesEn: ['Foundations of Civics', 'Constitutional Law', 'Social Contract Theory'],
          prerequisitesAr: ['مبادئ التربية الوطنية', 'مدخل العلوم القانونية', 'المفاهيم الدستورية العامة'],
          keyVocabularyEn: [
            { term: 'Constitution', definition: 'The supreme fundamental law of the sovereign state' },
            { term: 'Rule of Law', definition: 'Equality of all citizens and organs before valid statutes' }
          ],
          keyVocabularyAr: [
            { term: 'الدستور', definition: 'القانون الأسمى للبلاد الذي يحدد شكل الدولة ونظام الحكم وحقوق المواطنين' },
            { term: 'سيادة القانون', definition: 'خضوع كافة الأفراد وسلطات الدولة لأحكام القانون والمساواة أمامه' }
          ],
          teachingPacing: [
            { phaseEn: 'Engage & Explore', phaseAr: 'التهيئة والاستكشاف', duration: '20 min', activitiesEn: 'Constitutional scenario review and legal inquiry', activitiesAr: 'مناقشة سيناريو دستوري وتدريب استكشافي' },
            { phaseEn: 'Analysis & Practice', phaseAr: 'التحليل والتطبيق', duration: '70 min', activitiesEn: 'Statutory derivation, solved problems, and databank assessment', activitiesAr: 'تحليل النصوص، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating ordinary statutes with supreme constitutional provisions rather than recognizing constitutional normative supremacy and supermajority amendment requirements'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نصوص القوانين العادية والنصوص الدستورية العليا التي تتمتع بالسمو التشريعي وتتطلب إجراءات تعديل مشددة واستفتاء شعبي'
          ],
          differentiationEn: {
            struggling: 'Provide guided constitutional article roadmaps and structured summaries.',
            advanced: 'Assign comparative constitutional review essays and judicial opinion critiques.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط مفاهيمية لنصوص الدستور وملخصات إرشادية.',
            advanced: 'تكليف بدراسة مقارنة لأحكام المحكمة الدستورية وتحليل الفقه القضائي.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring civics and constitutional principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب المفاهيم الدستورية.',
          exitTicketQuestion: {
            questionEn: "What is the primary constitutional principle governing Kelsenian Normative Hierarchy & Structural Constitutional Supremacy?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في تدرج القواعد القانونية لكلسن ومبدأ السمو الموضوعي والشكلي للدستور؟",
            solutionEn: "Hans Kelsen’s pyramid of norms establishes that constitutional rules occupy the supreme apex, binding and validating all subordinate statutory and administrative acts.",
            solutionAr: "يقرر هرم كلسن المعياري أن القواعد الدستورية تحتل قمة التدرج التشريعي، مما يجعلها المرجع الأعلى لصحة وسريان جميع القوانين واللوائح التنفيذية الأدنى درجة."
          }
        },
        worksheet: {
          id: 'egbac_civics_ch1_l1_ws',
          titleEn: "Worksheet: Kelsenian Normative Hierarchy & Comparative Models of Constitutional Review",
          titleAr: "ورقة عمل: التدرج المعياري لكلسن والنماذج المقارنة للرقابة القضائية على دستورية القوانين",
          descriptionEn: 'Formative assessment and problem solving worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتقييم تكويني للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'civics_constitution_lab',
          titleEn: "Constitutional Review & Supreme Court Judicial Simulator",
          titleAr: "استوديو الرقابة القضائية وأحكام المحكمة الدستورية العليا",
          descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
        }
      },
      {
        id: 'egbac_civics_ch1_l2',
        titleEn: "Constitutional Rights Jurisprudence, Proportionality Doctrine & Emergency Powers",
        titleAr: "فقه الحقوق الدستورية الأساسية، معيار التناسبية الثلاثي، وضوابط سلطات الطوارئ",
        summaryEn: "Equality jurisprudence, strict three-tier proportionality review (suitability, necessity, strict balancing), non-retroactivity of criminal statutes, and Article 154 emergency limits.",
        summaryAr: "قضاء المساواة الدستورية، اختبار التناسبية الثلاثي للقيود التشريعية، عدم رجعية القوانين العقابية، والضوابط الصارمة لحالات الطوارئ والحقوق غير القابلة للتعليق بالمادة 154.",
        theoryContentEn: "### 1. Dynamic Separation of Powers and Inter-Branch Checks and Balances\n- **Fundamental Principle:** Montesquieu’s doctrine of separation of powers prevents tyranny by distributing state sovereignty across legislative, executive, and judicial branches.\n- **Institutional Impact:** Modern constitutionalism replaces rigid separation with flexible, dynamic checks and balances where each branch exercises reciprocal constitutional oversight.\n- **Constitutional Perspective:** Analyzing Egyptian constitutional mechanisms: the legislature can interpellate ministers and withdraw confidence, the executive introduces draft legislation, and the judiciary annuls unconstitutional statutes.\n\n### 2. Constitutional Hermeneutics: Textualism, Originalism, and the Living Constitution Doctrine\n- **Statutory Framework:** Textualism interprets constitutional articles strictly according to the ordinary public meaning of their words at the time of enactment.\n- **Democratic Dynamic:** Originalism seeks the original subjective intent of the constitutional drafters as recorded in preparatory works and constituent assembly debates.\n- **High-Order Synthesis:** The Living Constitution doctrine posits that constitutional provisions must be interpreted dynamically to accommodate evolving societal values, technological disruptions, and emerging human rights norms.\n\n### 3. Emergency Powers, Derogation Clauses, and the Rule of Law in Crises\n- **Normative Foundation:** Article 4 of the International Covenant on Civil and Political Rights (ICCPR) permits states to derogate from certain rights only in officially proclaimed national emergencies.\n- **Judicial Analysis:** Non-derogable peremptory rights (Jus Cogens) can never be suspended under any circumstance, including the right to life, freedom from torture, and freedom from retroactive penal laws.\n- **Advanced Jurisprudence:** Under Article 154 of the Egyptian Constitution, proclaiming a state of emergency requires Cabinet approval, mandatory parliamentary ratification within 7 days, and an absolute cap of three months extendable only by a two-thirds majority and popular referendum.",
        theoryContentAr: "### ١. الفصل المتوازن بين السلطات وآليات الرقابة المتبادلة في الفكر الدستوري المعاصر\n- **المنطلق التأسيسي:** تستهدف نظرية الفصل بين السلطات لمونتسكيو منع الاستبداد وصون الحريات من خلال توزيع وظائف الدولة السيادية بين سلطات ثلاث: تشريعية، تنفيذية، وقضائية.\n- **الأثر المؤسسي:** استبدل الفكر الدستوري المعاصر الفصل الجامد بنظام التوازن والرقابة المتبادلة (Checks and Balances)؛ حيث تراقب كل سلطة نظيرتها لمنع تركيز النفوذ أو إساءة استخدام السلطة.\n- **الرؤية الدستورية العليا:** تحليل المنظومة المصرية يكشف توازناً مؤسسياً: يستجوب البرلمان الوزراء ويسحب الثقة، وتقترح الحكومة مشروعات القوانين، وتلغي المحكمة الدستورية التشريعات المعيبة بعوار عدم الدستورية.\n\n### ٢. مناهج التفسير الدستوري: النصية، قصد المشرع التأسيسي ونظرية الدستور الحي\n- **الإطار التشريعي:** يركز المنهج النصي في التفسير الدستوري على المعنى اللغوي المباشر والظاهر لألفاظ النص الدستوري وفق السياق العام لقواعد اللغة.\n- **الديناميات الديمقراطية:** يبحث منهج القصد الأصلي (Originalism) عن نية المشرع الدستوري التأسيسي من خلال استقراء الأعمال التحضيرية ومناقشات الجمعية التأسيسية إبان صياغة الوثيقة.\n- **التحليل التطبيقي:** تؤكد نظرية \"الدستور الحي\" (Living Constitution) ضرورة تفسير المبادئ الدستورية بصورة ديناميكية متطورة تستوعب المتغيرات المجتمعية والتحولات التكنولوجية ومعايير حقوق الإنسان المعاصرة.\n\n### ٣. سلطات الطوارئ، شروط تعليق الحقوق والضوابط الصارمة لسيادة القانون أثناء الأزمات\n- **الأساس المعياري:** تسمح المادة الرابعة من العهد الدولي للحقوق المدنية والسياسية للدول بتعليق بعض الالتزامات الحقوقية في حالات الطوارئ العامة الاستثنائية المعلنة رسمياً.\n- **الرقابة القضائية:** تُحظر تماماً أي مخالفة للحقوق القطعية غير القابلة للتعليق (Jus Cogens) حتى في أشد حالات الطوارئ والحروب، مثل الحق في الحياة، وحظر التعذيب، وعدم رجعية العقوبات الجنائية.\n- **آفاق الفقه المعاصر:** تضبط المادة 154 من الدستور المصري إعلان الطوارئ بإلزام موافقة مجلس الوزراء، وعرض الأمر على البرلمان خلال 7 أيام لإقراره بأغلبية الأعضاء، ولمدة محددة لا تتجاوز 3 أشهر تجدد فقط بموافقة ثلثي البرلمان.",
        formulas: [
          {
            labelEn: "Dynamic Separation of Powers and Inter-Branch Checks and Balances",
            labelAr: "الفصل المتوازن بين السلطات وآليات الرقابة المتبادلة في الفكر الدستوري المعاصر",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Constitutional Hermeneutics: Textualism, Originalism, and the Living Constitution Doctrine",
            labelAr: "مناهج التفسير الدستوري: النصية، قصد المشرع التأسيسي ونظرية الدستور الحي",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Emergency Powers, Derogation Clauses, and the Rule of Law in Crises",
            labelAr: "سلطات الطوارئ، شروط تعليق الحقوق والضوابط الصارمة لسيادة القانون أثناء الأزمات",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Comparative Constitutional Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في الفقه الدستوري والحوكمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-CIV-CH01-L2',
          pageRange: '26-48'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Constitutional Rights Jurisprudence, Proportionality Doctrine & Emergency Powers",
          titleAr: "خطة الدرس التوجيهية: فقه الحقوق الدستورية الأساسية، معيار التناسبية الثلاثي، وضوابط سلطات الطوارئ",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-CIV-CH01-L2',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Dynamic Separation of Powers and Inter-Branch Checks and Balances",
            "Evaluate institutional checks, balances, and statutory limits in Constitutional Hermeneutics: Textualism, Originalism, and the Living Constitution Doctrine",
            "Analyze constitutional jurisprudence and rights guarantees in Emergency Powers, Derogation Clauses, and the Rule of Law in Crises"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ الفصل المتوازن بين السلطات وآليات الرقابة المتبادلة في الفكر الدستوري المعاصر",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ مناهج التفسير الدستوري: النصية، قصد المشرع التأسيسي ونظرية الدستور الحي",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ سلطات الطوارئ، شروط تعليق الحقوق والضوابط الصارمة لسيادة القانون أثناء الأزمات"
          ],
          prerequisitesEn: ['Foundations of Civics', 'Constitutional Law', 'Social Contract Theory'],
          prerequisitesAr: ['مبادئ التربية الوطنية', 'مدخل العلوم القانونية', 'المفاهيم الدستورية العامة'],
          keyVocabularyEn: [
            { term: 'Constitution', definition: 'The supreme fundamental law of the sovereign state' },
            { term: 'Rule of Law', definition: 'Equality of all citizens and organs before valid statutes' }
          ],
          keyVocabularyAr: [
            { term: 'الدستور', definition: 'القانون الأسمى للبلاد الذي يحدد شكل الدولة ونظام الحكم وحقوق المواطنين' },
            { term: 'سيادة القانون', definition: 'خضوع كافة الأفراد وسلطات الدولة لأحكام القانون والمساواة أمامه' }
          ],
          teachingPacing: [
            { phaseEn: 'Engage & Explore', phaseAr: 'التهيئة والاستكشاف', duration: '20 min', activitiesEn: 'Constitutional scenario review and legal inquiry', activitiesAr: 'مناقشة سيناريو دستوري وتدريب استكشافي' },
            { phaseEn: 'Analysis & Practice', phaseAr: 'التحليل والتطبيق', duration: '70 min', activitiesEn: 'Statutory derivation, solved problems, and databank assessment', activitiesAr: 'تحليل النصوص، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating ordinary statutes with supreme constitutional provisions rather than recognizing constitutional normative supremacy and supermajority amendment requirements'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نصوص القوانين العادية والنصوص الدستورية العليا التي تتمتع بالسمو التشريعي وتتطلب إجراءات تعديل مشددة واستفتاء شعبي'
          ],
          differentiationEn: {
            struggling: 'Provide guided constitutional article roadmaps and structured summaries.',
            advanced: 'Assign comparative constitutional review essays and judicial opinion critiques.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط مفاهيمية لنصوص الدستور وملخصات إرشادية.',
            advanced: 'تكليف بدراسة مقارنة لأحكام المحكمة الدستورية وتحليل الفقه القضائي.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring civics and constitutional principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب المفاهيم الدستورية.',
          exitTicketQuestion: {
            questionEn: "What is the primary constitutional principle governing Dynamic Separation of Powers and Inter-Branch Checks and Balances?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في الفصل المتوازن بين السلطات وآليات الرقابة المتبادلة في الفكر الدستوري المعاصر؟",
            solutionEn: "Montesquieu’s doctrine of separation of powers prevents tyranny by distributing state sovereignty across legislative, executive, and judicial branches.",
            solutionAr: "تستهدف نظرية الفصل بين السلطات لمونتسكيو منع الاستبداد وصون الحريات من خلال توزيع وظائف الدولة السيادية بين سلطات ثلاث: تشريعية، تنفيذية، وقضائية."
          }
        },
        worksheet: {
          id: 'egbac_civics_ch1_l2_ws',
          titleEn: "Worksheet: Constitutional Rights Jurisprudence, Proportionality Doctrine & Emergency Powers",
          titleAr: "ورقة عمل: فقه الحقوق الدستورية الأساسية، معيار التناسبية الثلاثي، وضوابط سلطات الطوارئ",
          descriptionEn: 'Formative assessment and problem solving worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتقييم تكويني للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'civics_constitution_lab',
          titleEn: "Constitutional Review & Supreme Court Judicial Simulator",
          titleAr: "استوديو الرقابة القضائية وأحكام المحكمة الدستورية العليا",
          descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
        }
      }
    ],
    databank: egBacCivicsCh1Databank,
    solvedExamples: egBacCivicsCh1SolvedExamples,
    exerciseProblems: egBacCivicsCh1Exercises
  },
  {
    id: 'egbac_civics_ch2',
    chapterNumber: 2,
    titleEn: "Democratic Governance, Rule of Law & International Human Rights Frameworks",
    titleAr: "الحكم الديمقراطي الرشيد، سيادة القانون والمواثيق الدولية لحقوق الإنسان",
    descriptionEn: "Formal vs substantive rule of law, Habermas deliberative democracy, international human rights covenants, anti-corruption frameworks, and transitional justice.",
    descriptionAr: "سيادة القانون الشكلية والموضوعية، الديمقراطية التداولية لهابرماس، المواثيق الدولية لحقوق الإنسان، وأطر مكافحة الفساد والعدالة الانتقالية.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'civics_constitution_lab',
        titleEn: "Democratic Pillars & Human Rights Compliance Matrix",
        titleAr: "مصفوفة الركائز الديمقراطية والامتثال لحقوق الإنسان",
        descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_civics_ch2_l1',
        titleEn: "Substantive Rule of Law, Deliberative Democracy & International Human Rights Integration",
        titleAr: "سيادة القانون الموضوعية، الديمقراطية التداولية، وإدماج المواثيق الدولية لحقوق الإنسان",
        summaryEn: "Fuller, Raz, and Bingham doctrines on substantive legality, Habermasian communicative action and ideal speech situations, and Article 93 treaty incorporation.",
        summaryAr: "نظريات فولر وراز وبنغهام في سيادة القانون الموضوعية، العقلانية التواصلية والديمقراطية التداولية لهابرماس، وعقيدة نفاذ المعاهدات الدولية لحقوق الإنسان بالمادة 93.",
        theoryContentEn: "### 1. Substantive vs. Formal Rule of Law: Fuller, Raz, and Bingham Doctrines\n- **Fundamental Principle:** The formal rule of law focuses on procedural legality, predictability, clarity, and non-retroactivity, irrespective of the moral content of statutes.\n- **Institutional Impact:** Lon Fuller’s \"internal morality of law\" posits that an arbitrary decree lacking generality, promulgation, clarity, and congruence cannot be recognized as valid law.\n- **Constitutional Perspective:** Lord Bingham’s substantive rule of law synthesis requires that laws must not only be clear and accessible, but must substantively protect fundamental human rights recognized in international law.\n\n### 2. Deliberative Democracy & Habermasian Communicative Rationality\n- **Statutory Framework:** Deliberative democracy asserts that political legitimacy emanates not from raw aggregate voting, but from authentic, reasoned public deliberation among equal citizens.\n- **Democratic Dynamic:** Jürgen Habermas models the \"ideal speech situation\" where arguments prevail solely by the unforced force of the better reason, shielded from coercion and manipulative power.\n- **High-Order Synthesis:** Deliberative institutional design counters media disinformation and populist polarization by establishing institutional citizens' assemblies, public hearings, and structured policy deliberative councils.\n\n### 3. The International Bill of Human Rights & Monist vs. Dualist Incorporation\n- **Normative Foundation:** The International Bill of Human Rights comprises the Universal Declaration of Human Rights (1948), the ICCPR (1966), and the ICESCR (1966).\n- **Judicial Analysis:** In Monist legal traditions, ratified international treaties automatically become integral, supreme components of the domestic legal order without secondary enacting statutes.\n- **Advanced Jurisprudence:** Under Article 93 of the Egyptian Constitution, international human rights agreements ratified by Egypt possess statutory domestic force, binding administrative and judicial bodies to international standards.",
        theoryContentAr: "### ١. سيادة القانون الشكلية والموضوعية: نظريات فولر، راز، وبنغهام\n- **المنطلق التأسيسي:** تركز سيادة القانون الشكلية على سلامة الإجراءات ووضوح النصوص القانونية وتوقعها وعدم رجعيتها، بصرف النظر عن المضمون الأخلاقي والعدالي للتشريع.\n- **الأثر المؤسسي:** تؤكد نظرية لون فولر في \"الأخلاقية الباطنية للقانون\" أن الأوامر التعسفية الفاقدة للعمومية والنشر والوضوح والتطابق لا تكتسب وصف القانون المشروع أبداً.\n- **الرؤية الدستورية العليا:** يقرر مذهب اللورد بنغهام في سيادة القانون الموضوعية أن القانون لا يكتفي بالشكليات الإجرائية، بل يجب أن يكفل جوهرياً الحماية الفعالة للحقوق الأساسية وفق المواثيق الدولية.\n\n### ٢. الديمقراطية التداولية والعقلانية التواصلية في فكر يورغن هابرماس\n- **الإطار التشريعي:** تؤكد الديمقراطية التداولية أن المشروعية السياسية لا تنبع من مجرد عد الأصوات بالأغلبية الحسابية، بل من الحوار التداولي العقلاني الحر بين مواطنين متساوين.\n- **الديناميات الديمقراطية:** يقدم يورغن هابرماس نموذج \"وضعية الكلام المثالية\"؛ حيث تسود الحجة البرهانية الأقوى بذاتها متحررة من كل إكراه أو تزييف سلطوي لإنتاج توافق ديمقراطي رشيد.\n- **التحليل التطبيقي:** يوظف التصميم المؤسسي التداولي لمواجهة التضليل والاستقطاب الشعبوي من خلال إنشاء المجالس الشعبية الاستشارية، وجلسات الاستماع العامة، ولجان الحوار الوطني المنظمة.\n\n### ٣. الشرعة الدولية لحقوق الإنسان وعقيدتا الإدماج الأحادي والثنائي في القانون الدستوري\n- **الأساس المعياري:** تتشكل الشرعة الدولية لحقوق الإنسان من ثلاثة مواثيق تأسيسية: الإعلان العالمي لحقوق الإنسان (1948)، والعهد الدولي للحقوق المدنية والسياسية، والعهد الدولي للحقوق الاقتصادية والاجتماعية.\n- **الرقابة القضائية:** في المذهب الأحادي (Monism)، تنفذ المعاهدات الدولية المصدق عليها تلقائياً وتندمج في البنية القانونية الوطنية مباشرة وتعلو على القوانين العادية دون تشريع وسيط.\n- **آفاق الفقه المعاصر:** تجسد المادة 93 من الدستور المصري التزام الدولة بالاتفاقيات والعهود الدولية لحقوق الإنسان المصدق عليها، حيث تصبح نافذة وتكتسب قوة القانون وتلتزم بها المحاكم الوطنية.",
        formulas: [
          {
            labelEn: "Substantive vs. Formal Rule of Law: Fuller, Raz, and Bingham Doctrines",
            labelAr: "سيادة القانون الشكلية والموضوعية: نظريات فولر، راز، وبنغهام",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Deliberative Democracy & Habermasian Communicative Rationality",
            labelAr: "الديمقراطية التداولية والعقلانية التواصلية في فكر يورغن هابرماس",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "The International Bill of Human Rights & Monist vs. Dualist Incorporation",
            labelAr: "الشرعة الدولية لحقوق الإنسان وعقيدتا الإدماج الأحادي والثنائي في القانون الدستوري",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Comparative Constitutional Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في الفقه الدستوري والحوكمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-CIV-CH02-L1',
          pageRange: '5-25'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Substantive Rule of Law, Deliberative Democracy & International Human Rights Integration",
          titleAr: "خطة الدرس التوجيهية: سيادة القانون الموضوعية، الديمقراطية التداولية، وإدماج المواثيق الدولية لحقوق الإنسان",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-CIV-CH02-L1',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Substantive vs. Formal Rule of Law: Fuller, Raz, and Bingham Doctrines",
            "Evaluate institutional checks, balances, and statutory limits in Deliberative Democracy & Habermasian Communicative Rationality",
            "Analyze constitutional jurisprudence and rights guarantees in The International Bill of Human Rights & Monist vs. Dualist Incorporation"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ سيادة القانون الشكلية والموضوعية: نظريات فولر، راز، وبنغهام",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ الديمقراطية التداولية والعقلانية التواصلية في فكر يورغن هابرماس",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ الشرعة الدولية لحقوق الإنسان وعقيدتا الإدماج الأحادي والثنائي في القانون الدستوري"
          ],
          prerequisitesEn: ['Foundations of Civics', 'Constitutional Law', 'Social Contract Theory'],
          prerequisitesAr: ['مبادئ التربية الوطنية', 'مدخل العلوم القانونية', 'المفاهيم الدستورية العامة'],
          keyVocabularyEn: [
            { term: 'Constitution', definition: 'The supreme fundamental law of the sovereign state' },
            { term: 'Rule of Law', definition: 'Equality of all citizens and organs before valid statutes' }
          ],
          keyVocabularyAr: [
            { term: 'الدستور', definition: 'القانون الأسمى للبلاد الذي يحدد شكل الدولة ونظام الحكم وحقوق المواطنين' },
            { term: 'سيادة القانون', definition: 'خضوع كافة الأفراد وسلطات الدولة لأحكام القانون والمساواة أمامه' }
          ],
          teachingPacing: [
            { phaseEn: 'Engage & Explore', phaseAr: 'التهيئة والاستكشاف', duration: '20 min', activitiesEn: 'Constitutional scenario review and legal inquiry', activitiesAr: 'مناقشة سيناريو دستوري وتدريب استكشافي' },
            { phaseEn: 'Analysis & Practice', phaseAr: 'التحليل والتطبيق', duration: '70 min', activitiesEn: 'Statutory derivation, solved problems, and databank assessment', activitiesAr: 'تحليل النصوص، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating ordinary statutes with supreme constitutional provisions rather than recognizing constitutional normative supremacy and supermajority amendment requirements'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نصوص القوانين العادية والنصوص الدستورية العليا التي تتمتع بالسمو التشريعي وتتطلب إجراءات تعديل مشددة واستفتاء شعبي'
          ],
          differentiationEn: {
            struggling: 'Provide guided constitutional article roadmaps and structured summaries.',
            advanced: 'Assign comparative constitutional review essays and judicial opinion critiques.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط مفاهيمية لنصوص الدستور وملخصات إرشادية.',
            advanced: 'تكليف بدراسة مقارنة لأحكام المحكمة الدستورية وتحليل الفقه القضائي.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring civics and constitutional principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب المفاهيم الدستورية.',
          exitTicketQuestion: {
            questionEn: "What is the primary constitutional principle governing Substantive vs. Formal Rule of Law: Fuller, Raz, and Bingham Doctrines?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في سيادة القانون الشكلية والموضوعية: نظريات فولر، راز، وبنغهام؟",
            solutionEn: "The formal rule of law focuses on procedural legality, predictability, clarity, and non-retroactivity, irrespective of the moral content of statutes.",
            solutionAr: "تركز سيادة القانون الشكلية على سلامة الإجراءات ووضوح النصوص القانونية وتوقعها وعدم رجعيتها، بصرف النظر عن المضمون الأخلاقي والعدالي للتشريع."
          }
        },
        worksheet: {
          id: 'egbac_civics_ch2_l1_ws',
          titleEn: "Worksheet: Substantive Rule of Law, Deliberative Democracy & International Human Rights Integration",
          titleAr: "ورقة عمل: سيادة القانون الموضوعية، الديمقراطية التداولية، وإدماج المواثيق الدولية لحقوق الإنسان",
          descriptionEn: 'Formative assessment and problem solving worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتقييم تكويني للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'civics_constitution_lab',
          titleEn: "Democratic Pillars & Human Rights Compliance Matrix",
          titleAr: "مصفوفة الركائز الديمقراطية والامتثال لحقوق الإنسان",
          descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
        }
      },
      {
        id: 'egbac_civics_ch2_l2',
        titleEn: "Anti-Corruption Architecture, Civic Republicanism & Transitional Justice Frameworks",
        titleAr: "المنظومة المؤسسية للحوكمة ومكافحة الفساد، الفلسفة الجمهورية، والعدالة الانتقالية",
        summaryEn: "UNCAC metrics and Article 218 anti-corruption strategies, Rawlsian veil of ignorance, communitarian civic virtue, and truth, reconciliation, and reparations under Article 241.",
        summaryAr: "معايير اتفاقية مكافحة الفساد والمادة 218، نظرية العدالة لرولز والفضيلة الجمهورية، وأعمدة العدالة الانتقالية الأربعة (الحقيقة، المساءلة، جبر الضرر، وإصلاح المؤسسات).",
        theoryContentEn: "### 1. Institutional Anti-Corruption Architecture: UNCAC and Good Governance Metrics\n- **Fundamental Principle:** The United Nations Convention Against Corruption (UNCAC) establishes a binding global framework criminalizing bribery, embezzlement, money laundering, and illicit enrichment.\n- **Institutional Impact:** Good governance relies on core structural pillars: institutional transparency, public accountability, merit-based administrative integrity, and independent anti-graft watchdogs.\n- **Constitutional Perspective:** Analyzing Article 218 of the Egyptian Constitution mandates state dedication to combating corruption, obligating public authorities to formulate multi-year national anti-corruption strategies with independent oversight.\n\n### 2. Civic Republicanism vs. Communitarianism and Rawlsian Liberal Justice\n- **Statutory Framework:** Civic republicanism highlights that genuine liberty requires active citizen participation in self-governance and an unwavering commitment to the public common good.\n- **Democratic Dynamic:** Communitarianism argues that individual identity and moral agency are intrinsically rooted in community belonging, challenging hyper-individualistic liberal constructs.\n- **High-Order Synthesis:** John Rawls’s \"Veil of Ignorance\" and Difference Principle mandate that social and economic inequalities are permissible only if they maximize the welfare of the least-advantaged societal members.\n\n### 3. Transitional Justice, Reconciliation Truth Commissions, and Constitutional Continuity\n- **Normative Foundation:** Transitional justice represents a judicial and non-judicial framework adopted by societies undergoing political transitions to address legacy mass human rights grievances.\n- **Judicial Analysis:** The four interdependent pillars of transitional justice are truth-seeking, criminal prosecutions, comprehensive victim reparations, and institutional vetting/reforms.\n- **Advanced Jurisprudence:** Under Article 241 of the Egyptian Constitution, the House of Representatives was mandated to enact a transitional justice law ensuring the revelation of truth, accountability, national reconciliation, and victim redress.",
        theoryContentAr: "### ١. المنظومة المؤسسية لمكافحة الفساد: اتفاقية الأمم المتحدة ومعايير الحوكمة الرشيدة\n- **المنطلق التأسيسي:** تمثل اتفاقية الأمم المتحدة لمكافحة الفساد (UNCAC) الإطار الدولي الملزم لتجريم الرشوة واختلاس المال العام وغسل الأموال واستغلال النفوذ والكسب غير المشروع.\n- **الأثر المؤسسي:** ترتكز الحوكمة الرشيدة على الشفافية الإدارية، إتاحة المعلومات، حماية المبلغين، والمساءلة النزيهة عبر أجهزة رقابية مستقلة مثل هيئة الرقابة الإدارية والجهاز المركزي للمحاسبات.\n- **الرؤية الدستورية العليا:** تلزم المادة 218 من الدستور المصري الدولة بمكافحة الفساد، وتوجب على أجهزة الرقابة المختصة التنسيق لوضع وتطبيق الاستراتيجية الوطنية لمكافحة الفساد بمؤشرات قياس شفافة.\n\n### ٢. الجمهورية المدنية، المذهب الجماعاتي ونظرية العدالة التوزيعية لرولز\n- **الإطار التشريعي:** تؤكد الفلسفة الجمهورية المدنية أن الحرية الحقيقية للمواطن تتحقق من خلال ممارسة الفضيلة المدنية والمشاركة الفاعلة في تسيير الشأن العام وإيثار الصالح المشترك.\n- **الديناميات الديمقراطية:** يرى الاتجاه الجماعاتي (Communitarianism) أن هوية الفرد الأخلاقية تنبع من انتمائه لمجتمعه وروابطه الأهلية، منتقداً النزعة الفردية المطلقة المجردة من المسؤولية الاجتماعية.\n- **التحليل التطبيقي:** يقرر جون رولز في نظريته للعدالة تحت \"حجاب الجهالة\" أن التفاوتات الاجتماعية والاقتصادية لا تكون عادلة ومشروعة إلا إذا حققت أقصى منفعة ممكنة للفئات الأكثر هشاشة وضعفاً في المجتمع.\n\n### ٣. العدالة الانتقالية، لجان تقصي الحقائق والمصالحة وضمانات عدم التكرار\n- **الأساس المعياري:** تُعرف العدالة الانتقالية بأنها حزمة متكاملة من التدابير القضائية وغير القضائية تعالج بها المجتمعات إرث الانتهاكات والنزاعات أثناء التحول السياسي لتحقيق السلم المجتمعي.\n- **الرقابة القضائية:** ترتكز العدالة الانتقالية على أربع دعائم مترابطة: كشف الحقيقة، المساءلة الجنائية العادلة، جبر الضرر والتعويض الشامل للضحايا، وإصلاح المؤسسات لضمان عدم التكرار.\n- **آفاق الفقه المعاصر:** ألزمت المادة 241 من الدستور المصري البرلمان بإصدار قانون للعدالة الانتقالية يكفل كشف الحقيقة والمساءلة واقتراح أطر المصالحة الوطنية وجبر الضرر وفق المعايير الدولية.",
        formulas: [
          {
            labelEn: "Institutional Anti-Corruption Architecture: UNCAC and Good Governance Metrics",
            labelAr: "المنظومة المؤسسية لمكافحة الفساد: اتفاقية الأمم المتحدة ومعايير الحوكمة الرشيدة",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Civic Republicanism vs. Communitarianism and Rawlsian Liberal Justice",
            labelAr: "الجمهورية المدنية، المذهب الجماعاتي ونظرية العدالة التوزيعية لرولز",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Transitional Justice, Reconciliation Truth Commissions, and Constitutional Continuity",
            labelAr: "العدالة الانتقالية، لجان تقصي الحقائق والمصالحة وضمانات عدم التكرار",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Comparative Constitutional Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في الفقه الدستوري والحوكمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-CIV-CH02-L2',
          pageRange: '26-48'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Anti-Corruption Architecture, Civic Republicanism & Transitional Justice Frameworks",
          titleAr: "خطة الدرس التوجيهية: المنظومة المؤسسية للحوكمة ومكافحة الفساد، الفلسفة الجمهورية، والعدالة الانتقالية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-CIV-CH02-L2',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Institutional Anti-Corruption Architecture: UNCAC and Good Governance Metrics",
            "Evaluate institutional checks, balances, and statutory limits in Civic Republicanism vs. Communitarianism and Rawlsian Liberal Justice",
            "Analyze constitutional jurisprudence and rights guarantees in Transitional Justice, Reconciliation Truth Commissions, and Constitutional Continuity"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ المنظومة المؤسسية لمكافحة الفساد: اتفاقية الأمم المتحدة ومعايير الحوكمة الرشيدة",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ الجمهورية المدنية، المذهب الجماعاتي ونظرية العدالة التوزيعية لرولز",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ العدالة الانتقالية، لجان تقصي الحقائق والمصالحة وضمانات عدم التكرار"
          ],
          prerequisitesEn: ['Foundations of Civics', 'Constitutional Law', 'Social Contract Theory'],
          prerequisitesAr: ['مبادئ التربية الوطنية', 'مدخل العلوم القانونية', 'المفاهيم الدستورية العامة'],
          keyVocabularyEn: [
            { term: 'Constitution', definition: 'The supreme fundamental law of the sovereign state' },
            { term: 'Rule of Law', definition: 'Equality of all citizens and organs before valid statutes' }
          ],
          keyVocabularyAr: [
            { term: 'الدستور', definition: 'القانون الأسمى للبلاد الذي يحدد شكل الدولة ونظام الحكم وحقوق المواطنين' },
            { term: 'سيادة القانون', definition: 'خضوع كافة الأفراد وسلطات الدولة لأحكام القانون والمساواة أمامه' }
          ],
          teachingPacing: [
            { phaseEn: 'Engage & Explore', phaseAr: 'التهيئة والاستكشاف', duration: '20 min', activitiesEn: 'Constitutional scenario review and legal inquiry', activitiesAr: 'مناقشة سيناريو دستوري وتدريب استكشافي' },
            { phaseEn: 'Analysis & Practice', phaseAr: 'التحليل والتطبيق', duration: '70 min', activitiesEn: 'Statutory derivation, solved problems, and databank assessment', activitiesAr: 'تحليل النصوص، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating ordinary statutes with supreme constitutional provisions rather than recognizing constitutional normative supremacy and supermajority amendment requirements'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نصوص القوانين العادية والنصوص الدستورية العليا التي تتمتع بالسمو التشريعي وتتطلب إجراءات تعديل مشددة واستفتاء شعبي'
          ],
          differentiationEn: {
            struggling: 'Provide guided constitutional article roadmaps and structured summaries.',
            advanced: 'Assign comparative constitutional review essays and judicial opinion critiques.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط مفاهيمية لنصوص الدستور وملخصات إرشادية.',
            advanced: 'تكليف بدراسة مقارنة لأحكام المحكمة الدستورية وتحليل الفقه القضائي.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring civics and constitutional principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب المفاهيم الدستورية.',
          exitTicketQuestion: {
            questionEn: "What is the primary constitutional principle governing Institutional Anti-Corruption Architecture: UNCAC and Good Governance Metrics?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في المنظومة المؤسسية لمكافحة الفساد: اتفاقية الأمم المتحدة ومعايير الحوكمة الرشيدة؟",
            solutionEn: "The United Nations Convention Against Corruption (UNCAC) establishes a binding global framework criminalizing bribery, embezzlement, money laundering, and illicit enrichment.",
            solutionAr: "تمثل اتفاقية الأمم المتحدة لمكافحة الفساد (UNCAC) الإطار الدولي الملزم لتجريم الرشوة واختلاس المال العام وغسل الأموال واستغلال النفوذ والكسب غير المشروع."
          }
        },
        worksheet: {
          id: 'egbac_civics_ch2_l2_ws',
          titleEn: "Worksheet: Anti-Corruption Architecture, Civic Republicanism & Transitional Justice Frameworks",
          titleAr: "ورقة عمل: المنظومة المؤسسية للحوكمة ومكافحة الفساد، الفلسفة الجمهورية، والعدالة الانتقالية",
          descriptionEn: 'Formative assessment and problem solving worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتقييم تكويني للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'civics_constitution_lab',
          titleEn: "Democratic Pillars & Human Rights Compliance Matrix",
          titleAr: "مصفوفة الركائز الديمقراطية والامتثال لحقوق الإنسان",
          descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
        }
      }
    ],
    databank: egBacCivicsCh2Databank,
    solvedExamples: egBacCivicsCh2SolvedExamples,
    exerciseProblems: egBacCivicsCh2Exercises
  },
  {
    id: 'egbac_civics_ch3',
    chapterNumber: 3,
    titleEn: "Comparative Political Regimes, Party System Engineering & Public Policy Cycles",
    titleAr: "الأنظمة السياسية المقارنة، هندسة التعددية الحزبية وصناعة السياسات العامة",
    descriptionEn: "Presidential, parliamentary, and semi-presidential systems, Duverger’s laws, Sartori party typology, campaign finance, and the public policy cycle.",
    descriptionAr: "الأنظمة السياسية الرئاسية والبرلمانية والمختلطة، قوانين دوفيرجيه ومصفوفة سارتوري، تمويل الحملات ودورة السياسات العامة.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'civics_party_matrix',
        titleEn: "Political Spectrum & Comparative Party System Matrix",
        titleAr: "مصفوفة الطيف السياسي والأنظمة الحزبية المقارنة",
        descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_civics_ch3_l1',
        titleEn: "Comparative Political Regimes, Duverger’s Laws & Sartori’s Party System Typology",
        titleAr: "الأنظمة السياسية المقارنة، قوانين دوفيرجيه ومصفوفة سارتوري لتصنيف المنظومات الحزبية",
        summaryEn: "Presidential vs parliamentary vs semi-presidential systems, Duverger’s mechanical effect on two-party vs multi-party systems, and polarized vs moderate pluralism.",
        summaryAr: "النظام الرئاسي والبرلماني وشبه الرئاسي المزدوج، قوانين دوفيرجيه وأثر النظام الانتخابي، وتصنيف سارتوري بين التعددية المستقطبة الطاردة والتعددية المعتدلة.",
        theoryContentEn: "### 1. Comparative Regimes: Presidential, Parliamentary, and Semi-Presidential Systems\n- **Fundamental Principle:** The Presidential system (e.g., USA) features a directly elected executive independent of legislative tenure with no vote of no confidence.\n- **Institutional Impact:** The Parliamentary system (e.g., UK) features executive emergence from and accountability to parliament, led by a Prime Minister subject to confidence votes.\n- **Constitutional Perspective:** The Semi-Presidential / Dual-Executive system (e.g., France, Egypt) combines a directly elected President holding strategic sovereign portfolios with a Prime Minister leading a government accountable to parliament.\n\n### 2. Duverger’s Law and Sartori’s Party System Typology\n- **Statutory Framework:** Duverger’s Law states that simple-majority single-ballot electoral systems (First-Past-The-Post) favor a stable two-party system.\n- **Democratic Dynamic:** Proportional representation systems mechanically generate multi-party systems by translating voting shares accurately into legislative seats.\n- **High-Order Synthesis:** Giovanni Sartori distinguishes Polarized Pluralism (characterized by centrifugal competition, anti-system parties, and ideological distance) from Moderate Pluralism (centripetal competition and coalition stability).\n\n### 3. Lipset-Rokkan Societal Cleavage Theory and Modern Value Transitions\n- **Normative Foundation:** Lipset and Rokkan identified four historical societal cleavages that structured European parties: Center-Periphery, State-Church, Urban-Rural, and Owner-Worker.\n- **Judicial Analysis:** The \"Freezing Hypothesis\" suggested that party systems remained frozen around historic industrial-era cleavages for several decades.\n- **Advanced Jurisprudence:** Ronald Inglehart’s post-materialist value shift demonstrates how contemporary cleavages center on environmental sustainability, identity rights, and digital privacy.",
        theoryContentAr: "### ١. الأنظمة السياسية المقارنة: النظام الرئاسي، البرلماني، والمختلط (شبه الرئاسي)\n- **المنطلق التأسيسي:** يقوم النظام الرئاسي (كالنموذج الأمريكي) على فصل صارم بين السلطات ورئيس منتخب مباشرة يقود السلطة التنفيذية ومستقل في بقائه عن الثقة البرلمانية.\n- **الأثر المؤسسي:** يتميز النظام البرلماني (كالنموذج البريطاني) باندماج مرن بين السلطتين؛ حيث تنبثق الحكومة من الأغلبية البرلمانية وتخضع لمساءلتها وسحب الثقة المستمر.\n- **الرؤية الدستورية العليا:** يجمع النظام شبه الرئاسي أو التنفيذي المزدوج (كالنموذج الفرنسي والدستور المصري) بين رئيس منتخب يتولى السياسات العليا ورئيس وزراء يقود حكومة مسؤولة أمام البرلمان.\n\n### ٢. قوانين دوفيرجيه ومصفوفة جيوفاني سارتوري لتصنيف المنظومات الحزبية\n- **الإطار التشريعي:** ينص قانون دوفيرجيه الشهير على أن نظام الانتخاب بالأغلبية البسيطة في دورة واحدة بدائرة فردية يؤدي بنيوياً إلى نشوء نظام الحزبين الكبيرين المتنافسين.\n- **الديناميات الديمقراطية:** تؤدي أنظمة التمثيل النسبي ميكانيكياً إلى نشوء منظومات متعددة الأحزاب تعكس بدقة التنوع السياسي والاجتماعي في توزيع المقاعد النيابية.\n- **التحليل التطبيقي:** يميز عالم السياسة سارتوري بين التعددية الحزبية المستقطبة (التي تتسم بالتنافس الطارد نحو الأطراف الراديكالية) والتعددية الحزبية المعتدلة (التنافس الجاذب نحو الوسط والاستقرار الائتلافي).\n\n### ٣. نظرية الانقسامات المجتمعية لليست وروكان وتحولات القيم السياسية\n- **الأساس المعياري:** حددت نظرية ليبست وروكان أربعة انقسامات مجتمعية تاريخية أنتجت الأحزاب: المركز والهامش، الدولة والدين، الريف والحضر، والعمال وأصحاب الأعمال.\n- **الرقابة القضائية:** افترضت فرضية \"تجميد الصراعات الحزبية\" أن الأنظمة الحزبية ظلت لعقود تعبر عن انقسامات الثورة الصناعية والتحولات القومية القديمة.\n- **آفاق الفقه المعاصر:** يبرهن تحول القيم لما بعد المادية (رونالد إنجلهارت) على نشأة انقسامات جديدة في القرن الـ21 تمحورت حول قضايا البيئة، الحريات الفردية، وحوكمة البيانات الرقمية.",
        formulas: [
          {
            labelEn: "Comparative Regimes: Presidential, Parliamentary, and Semi-Presidential Systems",
            labelAr: "الأنظمة السياسية المقارنة: النظام الرئاسي، البرلماني، والمختلط (شبه الرئاسي)",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Duverger’s Law and Sartori’s Party System Typology",
            labelAr: "قوانين دوفيرجيه ومصفوفة جيوفاني سارتوري لتصنيف المنظومات الحزبية",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Lipset-Rokkan Societal Cleavage Theory and Modern Value Transitions",
            labelAr: "نظرية الانقسامات المجتمعية لليست وروكان وتحولات القيم السياسية",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Comparative Constitutional Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في الفقه الدستوري والحوكمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-CIV-CH03-L1',
          pageRange: '5-25'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Comparative Political Regimes, Duverger’s Laws & Sartori’s Party System Typology",
          titleAr: "خطة الدرس التوجيهية: الأنظمة السياسية المقارنة، قوانين دوفيرجيه ومصفوفة سارتوري لتصنيف المنظومات الحزبية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-CIV-CH03-L1',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Comparative Regimes: Presidential, Parliamentary, and Semi-Presidential Systems",
            "Evaluate institutional checks, balances, and statutory limits in Duverger’s Law and Sartori’s Party System Typology",
            "Analyze constitutional jurisprudence and rights guarantees in Lipset-Rokkan Societal Cleavage Theory and Modern Value Transitions"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ الأنظمة السياسية المقارنة: النظام الرئاسي، البرلماني، والمختلط (شبه الرئاسي)",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ قوانين دوفيرجيه ومصفوفة جيوفاني سارتوري لتصنيف المنظومات الحزبية",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ نظرية الانقسامات المجتمعية لليست وروكان وتحولات القيم السياسية"
          ],
          prerequisitesEn: ['Foundations of Civics', 'Constitutional Law', 'Social Contract Theory'],
          prerequisitesAr: ['مبادئ التربية الوطنية', 'مدخل العلوم القانونية', 'المفاهيم الدستورية العامة'],
          keyVocabularyEn: [
            { term: 'Constitution', definition: 'The supreme fundamental law of the sovereign state' },
            { term: 'Rule of Law', definition: 'Equality of all citizens and organs before valid statutes' }
          ],
          keyVocabularyAr: [
            { term: 'الدستور', definition: 'القانون الأسمى للبلاد الذي يحدد شكل الدولة ونظام الحكم وحقوق المواطنين' },
            { term: 'سيادة القانون', definition: 'خضوع كافة الأفراد وسلطات الدولة لأحكام القانون والمساواة أمامه' }
          ],
          teachingPacing: [
            { phaseEn: 'Engage & Explore', phaseAr: 'التهيئة والاستكشاف', duration: '20 min', activitiesEn: 'Constitutional scenario review and legal inquiry', activitiesAr: 'مناقشة سيناريو دستوري وتدريب استكشافي' },
            { phaseEn: 'Analysis & Practice', phaseAr: 'التحليل والتطبيق', duration: '70 min', activitiesEn: 'Statutory derivation, solved problems, and databank assessment', activitiesAr: 'تحليل النصوص، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating ordinary statutes with supreme constitutional provisions rather than recognizing constitutional normative supremacy and supermajority amendment requirements'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نصوص القوانين العادية والنصوص الدستورية العليا التي تتمتع بالسمو التشريعي وتتطلب إجراءات تعديل مشددة واستفتاء شعبي'
          ],
          differentiationEn: {
            struggling: 'Provide guided constitutional article roadmaps and structured summaries.',
            advanced: 'Assign comparative constitutional review essays and judicial opinion critiques.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط مفاهيمية لنصوص الدستور وملخصات إرشادية.',
            advanced: 'تكليف بدراسة مقارنة لأحكام المحكمة الدستورية وتحليل الفقه القضائي.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring civics and constitutional principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب المفاهيم الدستورية.',
          exitTicketQuestion: {
            questionEn: "What is the primary constitutional principle governing Comparative Regimes: Presidential, Parliamentary, and Semi-Presidential Systems?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في الأنظمة السياسية المقارنة: النظام الرئاسي، البرلماني، والمختلط (شبه الرئاسي)؟",
            solutionEn: "The Presidential system (e.g., USA) features a directly elected executive independent of legislative tenure with no vote of no confidence.",
            solutionAr: "يقوم النظام الرئاسي (كالنموذج الأمريكي) على فصل صارم بين السلطات ورئيس منتخب مباشرة يقود السلطة التنفيذية ومستقل في بقائه عن الثقة البرلمانية."
          }
        },
        worksheet: {
          id: 'egbac_civics_ch3_l1_ws',
          titleEn: "Worksheet: Comparative Political Regimes, Duverger’s Laws & Sartori’s Party System Typology",
          titleAr: "ورقة عمل: الأنظمة السياسية المقارنة، قوانين دوفيرجيه ومصفوفة سارتوري لتصنيف المنظومات الحزبية",
          descriptionEn: 'Formative assessment and problem solving worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتقييم تكويني للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'civics_party_matrix',
          titleEn: "Political Spectrum & Comparative Party System Matrix",
          titleAr: "مصفوفة الطيف السياسي والأنظمة الحزبية المقارنة",
          descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
        }
      },
      {
        id: 'egbac_civics_ch3_l2',
        titleEn: "Campaign Finance Governance, The Public Policy Cycle & Pluralist Interest Intermediation",
        titleAr: "حوكمة تمويل الحملات، دورة صناعة السياسات العامة، ونماذج وساطة المصالح",
        summaryEn: "Statutory spending caps, public subsidies, dark money mitigation, Lasswell-Anderson 5-stage policy cycle, and competitive lobbying vs neo-corporatist tripartite bargaining.",
        summaryAr: "سقوف الإنفاق والتمويل العام ومكافحة الأموال المظلمة، دورة السياسات العامة الخماسية (الأجندة، الصياغة، الإقرار، التنفيذ، التقييم)، واللوبيات التعددية مقابل الشراكة الكوربوراتية.",
        theoryContentEn: "### 1. Campaign Finance Governance, Dark Money, and Anti-Oligarchic Safeguards\n- **Fundamental Principle:** Statutory spending caps in election campaigns prevent wealthy candidates from unfairly dominating democratic discourse.\n- **Institutional Impact:** Public party financing provides state subsidies tied to electoral performance, diminishing dependence on private special interest donations.\n- **Constitutional Perspective:** Combatting \"Dark Money\" (untraced funds channeled via non-profits) requires real-time mandatory electronic donor disclosures, forensic accounting audits, and strict third-party spending prohibitions.\n\n### 2. The Public Policy Cycle: Lasswell-Anderson Heuristic Framework\n- **Statutory Framework:** The public policy cycle begins with Agenda Setting, where societal issues gain sufficient prominence to capture government attention.\n- **Democratic Dynamic:** Subsequent stages involve Policy Formulation (generating alternatives), Decision Adoption (statutory approval), and Program Implementation by administrative agencies.\n- **High-Order Synthesis:** Empirical Policy Evaluation employs quantitative randomized controlled trials and cost-benefit econometric analyses to terminate failed initiatives or iterate successful policies.\n\n### 3. Interest Groups, Pluralist Lobbying Transparency vs. Neo-Corporatist Tripartite Bargaining\n- **Normative Foundation:** Interest groups and trade unions represent specialized citizen interests to influence policy-making without seeking executive office.\n- **Judicial Analysis:** Pluralist lobbying relies on competitive, decentralized access to lawmakers governed by mandatory lobbyist registration registries.\n- **Advanced Jurisprudence:** Neo-Corporatism integrates state officials, peak employer confederations, and peak trade unions into institutionalized tripartite wage and social policy negotiations.",
        theoryContentAr: "### ١. حوكمة تمويل الحملات الانتخابية، الأموال المظلمة وضمانات منع الاحتكار السياسي\n- **المنطلق التأسيسي:** تستهدف السقوف القانونية للإنفاق في الحملات الانتخابية منع الهيمنة المالية للأثرياء وضمان تكافؤ الفرص التنافسية بين المرشحين المستقلين والأحزاب.\n- **الأثر المؤسسي:** يوفر التمويل العام المباشر للأحزاب دعماً حكومياً محايداً يرتبط بعدد الأصوات، لتقليص ارتهان الأحزاب لمصالح رجال الأعمال وجماعات الضغط الخاصة.\n- **الرؤية الدستورية العليا:** تتطلب محاربة \"الأموال المظلمة\" غير المتبعة إلزام الإفصاح المالي الإلكتروني الفوري عن التبرعات، والتدقيق المحاسبي الجنائي، وحظر الإنفاق غير المباشر للمنصات المشبوهة.\n\n### ٢. دورة صناعة السياسات العامة: نموذج لاسويل وأندرسون التحليلي الخماسي\n- **الإطار التشريعي:** تبدأ دورة السياسات العامة بمرحلة \"بناء الأجندة\" (Agenda Setting)؛ حيث يفرض المجتمع مشكلة معينة لتصبح في صدارة اهتمام صانع القرار الحكومي.\n- **الديناميات الديمقراطية:** تتوالى مراحل السياسة العامة عبر: صياغة البدائل والحلول، إقرار السياسة دستورياً وتشريعياً، ثم التنفيذ الفعلي بواسطة الأجهزة البيروقراطية والتنفيذية.\n- **التحليل التطبيقي:** تعتمد مرحلة \"تقييم السياسات العامة\" على المنهج التجريبي وتحليلات التكلفة والعائد لقياس الأثر الحقيقي للسياسة وتعديلها أو إنهائها علمياً.\n\n### ٣. جماعات المصالح: شفافية اللوبيات التعددية مقابل المساومة الكوربوراتية الثلاثية\n- **الأساس المعياري:** تسعى جماعات المصالح والنقابات المهنية والعمالية إلى التأثير في صنع القرار والتشريعات دون أن تستهدف التنافس على تولي السلطة التنفيذية.\n- **الرقابة القضائية:** يقوم نموذج اللوبي التعددي على التنافس المفتوح والمتكافئ لجماعات الضغط لعرض رؤاها أمام المشرعين تحت مظلة سجلات الإفصاح العلني الإلزامي.\n- **آفاق الفقه المعاصر:** يقوم نموذج الشراكة الكوربوراتية الحديثة (Neo-Corporatism) على مفاوضات ثلاثية ملزمة ومؤسسية تجمع الدولة، واتحاد أصحاب الأعمال، والاتحاد العام لنقابات العمال.",
        formulas: [
          {
            labelEn: "Campaign Finance Governance, Dark Money, and Anti-Oligarchic Safeguards",
            labelAr: "حوكمة تمويل الحملات الانتخابية، الأموال المظلمة وضمانات منع الاحتكار السياسي",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "The Public Policy Cycle: Lasswell-Anderson Heuristic Framework",
            labelAr: "دورة صناعة السياسات العامة: نموذج لاسويل وأندرسون التحليلي الخماسي",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Interest Groups, Pluralist Lobbying Transparency vs. Neo-Corporatist Tripartite Bargaining",
            labelAr: "جماعات المصالح: شفافية اللوبيات التعددية مقابل المساومة الكوربوراتية الثلاثية",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Comparative Constitutional Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في الفقه الدستوري والحوكمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-CIV-CH03-L2',
          pageRange: '26-48'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Campaign Finance Governance, The Public Policy Cycle & Pluralist Interest Intermediation",
          titleAr: "خطة الدرس التوجيهية: حوكمة تمويل الحملات، دورة صناعة السياسات العامة، ونماذج وساطة المصالح",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-CIV-CH03-L2',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Campaign Finance Governance, Dark Money, and Anti-Oligarchic Safeguards",
            "Evaluate institutional checks, balances, and statutory limits in The Public Policy Cycle: Lasswell-Anderson Heuristic Framework",
            "Analyze constitutional jurisprudence and rights guarantees in Interest Groups, Pluralist Lobbying Transparency vs. Neo-Corporatist Tripartite Bargaining"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ حوكمة تمويل الحملات الانتخابية، الأموال المظلمة وضمانات منع الاحتكار السياسي",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ دورة صناعة السياسات العامة: نموذج لاسويل وأندرسون التحليلي الخماسي",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ جماعات المصالح: شفافية اللوبيات التعددية مقابل المساومة الكوربوراتية الثلاثية"
          ],
          prerequisitesEn: ['Foundations of Civics', 'Constitutional Law', 'Social Contract Theory'],
          prerequisitesAr: ['مبادئ التربية الوطنية', 'مدخل العلوم القانونية', 'المفاهيم الدستورية العامة'],
          keyVocabularyEn: [
            { term: 'Constitution', definition: 'The supreme fundamental law of the sovereign state' },
            { term: 'Rule of Law', definition: 'Equality of all citizens and organs before valid statutes' }
          ],
          keyVocabularyAr: [
            { term: 'الدستور', definition: 'القانون الأسمى للبلاد الذي يحدد شكل الدولة ونظام الحكم وحقوق المواطنين' },
            { term: 'سيادة القانون', definition: 'خضوع كافة الأفراد وسلطات الدولة لأحكام القانون والمساواة أمامه' }
          ],
          teachingPacing: [
            { phaseEn: 'Engage & Explore', phaseAr: 'التهيئة والاستكشاف', duration: '20 min', activitiesEn: 'Constitutional scenario review and legal inquiry', activitiesAr: 'مناقشة سيناريو دستوري وتدريب استكشافي' },
            { phaseEn: 'Analysis & Practice', phaseAr: 'التحليل والتطبيق', duration: '70 min', activitiesEn: 'Statutory derivation, solved problems, and databank assessment', activitiesAr: 'تحليل النصوص، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating ordinary statutes with supreme constitutional provisions rather than recognizing constitutional normative supremacy and supermajority amendment requirements'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نصوص القوانين العادية والنصوص الدستورية العليا التي تتمتع بالسمو التشريعي وتتطلب إجراءات تعديل مشددة واستفتاء شعبي'
          ],
          differentiationEn: {
            struggling: 'Provide guided constitutional article roadmaps and structured summaries.',
            advanced: 'Assign comparative constitutional review essays and judicial opinion critiques.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط مفاهيمية لنصوص الدستور وملخصات إرشادية.',
            advanced: 'تكليف بدراسة مقارنة لأحكام المحكمة الدستورية وتحليل الفقه القضائي.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring civics and constitutional principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب المفاهيم الدستورية.',
          exitTicketQuestion: {
            questionEn: "What is the primary constitutional principle governing Campaign Finance Governance, Dark Money, and Anti-Oligarchic Safeguards?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في حوكمة تمويل الحملات الانتخابية، الأموال المظلمة وضمانات منع الاحتكار السياسي؟",
            solutionEn: "Statutory spending caps in election campaigns prevent wealthy candidates from unfairly dominating democratic discourse.",
            solutionAr: "تستهدف السقوف القانونية للإنفاق في الحملات الانتخابية منع الهيمنة المالية للأثرياء وضمان تكافؤ الفرص التنافسية بين المرشحين المستقلين والأحزاب."
          }
        },
        worksheet: {
          id: 'egbac_civics_ch3_l2_ws',
          titleEn: "Worksheet: Campaign Finance Governance, The Public Policy Cycle & Pluralist Interest Intermediation",
          titleAr: "ورقة عمل: حوكمة تمويل الحملات، دورة صناعة السياسات العامة، ونماذج وساطة المصالح",
          descriptionEn: 'Formative assessment and problem solving worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتقييم تكويني للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'civics_party_matrix',
          titleEn: "Political Spectrum & Comparative Party System Matrix",
          titleAr: "مصفوفة الطيف السياسي والأنظمة الحزبية المقارنة",
          descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
        }
      }
    ],
    databank: egBacCivicsCh3Databank,
    solvedExamples: egBacCivicsCh3SolvedExamples,
    exerciseProblems: egBacCivicsCh3Exercises
  },
  {
    id: 'egbac_civics_ch4',
    chapterNumber: 4,
    titleEn: "Electoral Engineering, Seat Allocation Algorithms & Digital Democracy",
    titleAr: "هندسة النظم الانتخابية، خوارزميات توزيع المقاعد والديمقراطية الرقمية",
    descriptionEn: "Proportional seat allocation algorithms (D’Hondt, Sainte-Laguë, Hare quota), public choice calculus of voting, encrypted electronic voting, and anti-disinformation.",
    descriptionAr: "خوارزميات توزيع المقاعد في القوائم النسبية (هوندت، سانت ليغو، كوتا هير)، نظرية الاختيار العام، وأمن التصويت الرقمي المشفر ومواجهة التزييف العميق.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'civics_electoral_simulator',
        titleEn: "Electoral Systems & Seat Allocation Calculator",
        titleAr: "حاسبة النظم الانتخابية وتوزيع المقاعد البرلمانية",
        descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_civics_ch4_l1',
        titleEn: "Electoral Mathematics: Proportional Representation & Seat Allocation Algorithms",
        titleAr: "الرياضيات الانتخابية: التمثيل النسبي وخوارزميات تخصيص المقاعد البرلمانية",
        summaryEn: "Mathematical formulation of largest remainder (Hare, Droop quotas) vs highest average divisors (D’Hondt, Sainte-Laguë), and electoral threshold implications.",
        summaryAr: "الصياغة الرياضية لطرق البواقي الأكبر (كوتا هير ودروب) والمتوسطات الأكبر (خوارزمية دي هوندت وسانت ليغو)، وأثر العتبة الانتخابية على تفتت البرلمان.",
        theoryContentEn: "### 1. Seat Allocation Mathematics: D’Hondt and Sainte-Laguë / Webster Divisor Methods\n- **Fundamental Principle:** The D’Hondt method is a highest-averages divisor system dividing party vote counts sequentially by integers: $V / 1, V / 2, V / 3, \\dots$\n- **Institutional Impact:** The Sainte-Laguë (Webster) method divides votes by odd integers: $V / 1, V / 3, V / 5, \\dots$, producing more proportional outcomes for medium and small parties.\n- **Constitutional Perspective:** Mathematical comparative proof: D’Hondt inherently favors larger parties due to smaller initial divisors, whereas pure Sainte-Laguë minimizes the Gallagher Disproportionality Index.\n\n### 2. Quota Allocations: Hare, Droop, and Imperiali Largest Remainder Methods\n- **Statutory Framework:** The Hare Quota calculates the exact price of one seat by dividing total valid votes by total available seats: $Q_{\\text{Hare}} = \\frac{V}{S}$.\n- **Democratic Dynamic:** The Droop Quota sets the quota at $Q_{\\text{Droop}} = \\lfloor \\frac{V}{S + 1} \\rfloor + 1$, establishing the mathematical threshold guaranteed to fill seats without surplus.\n- **High-Order Synthesis:** The Largest Remainder stage allocates unassigned seats to parties with the greatest fractional vote remainders, which can occasionally trigger the Alabama Paradox in variable-sized assemblies.\n\n### 3. Electoral Engineering: Single-Member, Majoritarian, and Mixed-Member Proportional (MMP)\n- **Normative Foundation:** First-Past-The-Post (FPTP) awards victory to the plurality winner, creating exaggerated legislative seat majorities for leading parties.\n- **Judicial Analysis:** Two-Round systems require a runoff between top candidates if no candidate secures an absolute majority (>50%) in the initial balloting round.\n- **Advanced Jurisprudence:** Mixed-Member Proportional (MMP, German model) allows voters two votes: one for a local district representative and one for a national party list, using \"overhang seats\" (Überhangmandate) to preserve overall proportionality.",
        theoryContentAr: "### ١. رياضيات توزيع المقاعد البرلمانية: خوارزميات هوندت وسانت ليغو ديفايزور\n- **المنطلق التأسيسي:** تعتمد طريقة هوندت (D’Hondt) على قسمة أصوات كل حزب تتابعياً على الأعداد الصحيحة: $V/1, V/2, V/3, \\dots$ لمنح المقاعد لأعلى حواصل قسمة ناتجة.\n- **الأثر المؤسسي:** تستخدم طريقة سانت ليغو (Sainte-Laguë) القواسم الفردية: $V/1, V/3, V/5, \\dots$ مما يقلل الانحياز للأحزاب الكبيرة ويحقق تمثيلاً أكثر عدالة للأحزاب المتوسطة والصغيرة.\n- **الرؤية الدستورية العليا:** البرهان الرياضي المقارن: تنحاز خوارزمية هوندت موضوعياً للأحزاب الكبرى لضيق فوارق القواسم، بينما تحقق خوارزمية سانت ليغو أدنى قيمة لمؤشر جالاجر لعدم التناسب الانتخابي.\n\n### ٢. طرق الكوتا الانتخابية والباقي الأكبر: كوتا هير، دروب، وإمبريالي\n- **الإطار التشريعي:** تحسب كوتا هير (Hare Quota) السعر الانتخابي للمقعد بقسمة إجمالي الأصوات الصحيحة على عدد المقاعد المتاحة بالكامل: $Q = V / S$.\n- **الديناميات الديمقراطية:** تحدد كوتا دروب (Droop Quota) الحصة الانتخابية بالمعادلة $Q = \\lfloor V / (S+1) \\rfloor + 1$ لضمان عدم تجاوز عدد المقاعد الموزعة للحد الأقصى المتاح.\n- **التحليل التطبيقي:** توزع المقاعد المتبقية في نظام الكوتا وفق طريقة الباقي الأكبر، والتي قد تؤدي نظرياً إلى ظواهر غير متوقعة مثل مفارقة ألاباما (Alabama Paradox) عند زيادة عدد المقاعد.\n\n### ٣. هندسة النظم الانتخابية: الأغلبية البسيطة، الجولتان، والنظام المختلط الألماني (MMP)\n- **الأساس المعياري:** يمنح نظام الفائز الأول (FPTP) المقعد للمرشح الحاصل على أكبر عدد من الأصوات وإن لم يحقق الأغلبية المطلقة، مما يضخم مقاعد الحزب الفائز.\n- **الرقابة القضائية:** يفرض نظام الجولتين إعادة الانتخاب بين أعلى مرشحين إذا عجز أي مرشح عن كسر حاجز الأغلبية المطلقة (أكثر من 50%) في الجولة الأولى.\n- **آفاق الفقه المعاصر:** يمنح النظام المختلط التناسبي (MMP الألماني) الناخب صوتين: صوتاً لمرشح دائرته وصوتاً لقائمة حزبه الوطنية، مع إضافة مقاعد تعويضية إضافية للحفاظ على التناسبية الدقيقة.",
        formulas: [
          {
            labelEn: "Seat Allocation Mathematics: D’Hondt and Sainte-Laguë / Webster Divisor Methods",
            labelAr: "رياضيات توزيع المقاعد البرلمانية: خوارزميات هوندت وسانت ليغو ديفايزور",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Quota Allocations: Hare, Droop, and Imperiali Largest Remainder Methods",
            labelAr: "طرق الكوتا الانتخابية والباقي الأكبر: كوتا هير، دروب، وإمبريالي",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Electoral Engineering: Single-Member, Majoritarian, and Mixed-Member Proportional (MMP)",
            labelAr: "هندسة النظم الانتخابية: الأغلبية البسيطة، الجولتان، والنظام المختلط الألماني (MMP)",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Comparative Constitutional Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في الفقه الدستوري والحوكمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-CIV-CH04-L1',
          pageRange: '5-25'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Electoral Mathematics: Proportional Representation & Seat Allocation Algorithms",
          titleAr: "خطة الدرس التوجيهية: الرياضيات الانتخابية: التمثيل النسبي وخوارزميات تخصيص المقاعد البرلمانية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-CIV-CH04-L1',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Seat Allocation Mathematics: D’Hondt and Sainte-Laguë / Webster Divisor Methods",
            "Evaluate institutional checks, balances, and statutory limits in Quota Allocations: Hare, Droop, and Imperiali Largest Remainder Methods",
            "Analyze constitutional jurisprudence and rights guarantees in Electoral Engineering: Single-Member, Majoritarian, and Mixed-Member Proportional (MMP)"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ رياضيات توزيع المقاعد البرلمانية: خوارزميات هوندت وسانت ليغو ديفايزور",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ طرق الكوتا الانتخابية والباقي الأكبر: كوتا هير، دروب، وإمبريالي",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ هندسة النظم الانتخابية: الأغلبية البسيطة، الجولتان، والنظام المختلط الألماني (MMP)"
          ],
          prerequisitesEn: ['Foundations of Civics', 'Constitutional Law', 'Social Contract Theory'],
          prerequisitesAr: ['مبادئ التربية الوطنية', 'مدخل العلوم القانونية', 'المفاهيم الدستورية العامة'],
          keyVocabularyEn: [
            { term: 'Constitution', definition: 'The supreme fundamental law of the sovereign state' },
            { term: 'Rule of Law', definition: 'Equality of all citizens and organs before valid statutes' }
          ],
          keyVocabularyAr: [
            { term: 'الدستور', definition: 'القانون الأسمى للبلاد الذي يحدد شكل الدولة ونظام الحكم وحقوق المواطنين' },
            { term: 'سيادة القانون', definition: 'خضوع كافة الأفراد وسلطات الدولة لأحكام القانون والمساواة أمامه' }
          ],
          teachingPacing: [
            { phaseEn: 'Engage & Explore', phaseAr: 'التهيئة والاستكشاف', duration: '20 min', activitiesEn: 'Constitutional scenario review and legal inquiry', activitiesAr: 'مناقشة سيناريو دستوري وتدريب استكشافي' },
            { phaseEn: 'Analysis & Practice', phaseAr: 'التحليل والتطبيق', duration: '70 min', activitiesEn: 'Statutory derivation, solved problems, and databank assessment', activitiesAr: 'تحليل النصوص، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating ordinary statutes with supreme constitutional provisions rather than recognizing constitutional normative supremacy and supermajority amendment requirements'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نصوص القوانين العادية والنصوص الدستورية العليا التي تتمتع بالسمو التشريعي وتتطلب إجراءات تعديل مشددة واستفتاء شعبي'
          ],
          differentiationEn: {
            struggling: 'Provide guided constitutional article roadmaps and structured summaries.',
            advanced: 'Assign comparative constitutional review essays and judicial opinion critiques.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط مفاهيمية لنصوص الدستور وملخصات إرشادية.',
            advanced: 'تكليف بدراسة مقارنة لأحكام المحكمة الدستورية وتحليل الفقه القضائي.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring civics and constitutional principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب المفاهيم الدستورية.',
          exitTicketQuestion: {
            questionEn: "What is the primary constitutional principle governing Seat Allocation Mathematics: D’Hondt and Sainte-Laguë / Webster Divisor Methods?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في رياضيات توزيع المقاعد البرلمانية: خوارزميات هوندت وسانت ليغو ديفايزور؟",
            solutionEn: "The D’Hondt method is a highest-averages divisor system dividing party vote counts sequentially by integers: $V / 1, V / 2, V / 3, \\dots$",
            solutionAr: "تعتمد طريقة هوندت (D’Hondt) على قسمة أصوات كل حزب تتابعياً على الأعداد الصحيحة: $V/1, V/2, V/3, \\dots$ لمنح المقاعد لأعلى حواصل قسمة ناتجة."
          }
        },
        worksheet: {
          id: 'egbac_civics_ch4_l1_ws',
          titleEn: "Worksheet: Electoral Mathematics: Proportional Representation & Seat Allocation Algorithms",
          titleAr: "ورقة عمل: الرياضيات الانتخابية: التمثيل النسبي وخوارزميات تخصيص المقاعد البرلمانية",
          descriptionEn: 'Formative assessment and problem solving worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتقييم تكويني للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'civics_electoral_simulator',
          titleEn: "Electoral Systems & Seat Allocation Calculator",
          titleAr: "حاسبة النظم الانتخابية وتوزيع المقاعد البرلمانية",
          descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
        }
      },
      {
        id: 'egbac_civics_ch4_l2',
        titleEn: "Institutional Electoral Integrity, Cryptographic Voting & Countering Digital Disinformation",
        titleAr: "النزاهة المؤسسية للانتخابات، التصويت المشفر الآمن، ومكافحة التضليل الرقمي",
        summaryEn: "Venice Commission standards, zero-knowledge verifiable cryptographic electronic voting, deepfake threats to electoral deliberation, and autonomous election management.",
        summaryAr: "معايير لجنة البندقية لنزاهة الانتخابات، تقنيات الاقتراع الإلكتروني المشفر مع الحفاظ على سرية التصويت، مخاطر التزييف العميق والذكاء الاصطناعي، واستقلالية الهيئات المشرفة.",
        theoryContentEn: "### 1. Redistricting Geometry, Malapportionment, and the Efficiency Gap Gerrymandering Metric\n- **Fundamental Principle:** Malapportionment occurs when electoral districts contain substantially unequal numbers of voters, violating the constitutional \"one person, one vote\" principle.\n- **Institutional Impact:** Partisan Gerrymandering intentionally manipulates constituency boundary lines to pack or crack opposing voters to entrench a specific party in power.\n- **Constitutional Perspective:** Stephanopoulos & McGhee’s Efficiency Gap metric ($EG = \\frac{W_A - W_B}{V_{\\text{total}}}$) mathematically quantifies unearned legislative seat bias by comparing total wasted votes between competing parties.\n\n### 2. Public Choice Theory, the Calculus of Voting, and Arrow’s Impossibility Theorem\n- **Statutory Framework:** Anthony Downs’s calculus of voting ($R = P \\cdot B - C + D$) asserts that rational voting depends on civic duty ($D$) exceeding the net costs of voting.\n- **Democratic Dynamic:** The voting paradox states that since the probability ($P$) of a single vote breaking a national tie is near zero, voting is driven primarily by civic ethics rather than narrow instrumental benefit.\n- **High-Order Synthesis:** Kenneth Arrow’s Impossibility Theorem mathematically demonstrates that no ranked-order voting system can simultaneously satisfy all democratic fairness criteria (Unrestricted domain, Non-dictatorship, Pareto efficiency, and Independence of irrelevant alternatives).\n\n### 3. Digital Democracy, End-to-End Verifiable Cryptographic Voting, and AI Threat Mitigations\n- **Normative Foundation:** End-to-End Verifiable (E2E-V) voting systems allow each voter to verify that their ballot was recorded as cast and counted without violating secret ballot privacy.\n- **Judicial Analysis:** Homomorphic encryption enables the direct mathematical summation of encrypted ballots so total results are computed without ever decrypting individual voter ballots.\n- **Advanced Jurisprudence:** Protecting democratic sovereignty against AI-generated deepfakes and automated foreign micro-targeting requires cryptographic content provenance (C2PA watermarking) and legally mandated transparency in algorithmic political feeds.",
        theoryContentAr: "### ١. هندسة الدوائر الانتخابية، تفاوت التمثيل ومقياس فجوة الكفاءة (Efficiency Gap)\n- **المنطلق التأسيسي:** يحدث عوار تفاوت التمثيل (Malapportionment) عندما تتباين أعداد الناخبين في الدوائر الانتخابية تفاوتاً جسيماً، مما يخل بمبدأ \"صوت واحد لكل ناخب\".\n- **الأثر المؤسسي:** يُعرف التلاعب بالدوائر (Gerrymandering) بإعادة رسم الحدود الجغرافية للدوائر الانتخابية بخبث لحشر ناخبي الخصم أو تشتيتهم لضمان فوز الحزب الحاكم.\n- **الرؤية الدستورية العليا:** يقيس مؤشر \"فجوة الكفاءة\" (Efficiency Gap) الانحياز الانتخابي بحساب الفرق بين الأصوات الضائعة للحزبين وقسمتها على إجمالي الأصوات لاكتشاف التلاعب بالدوائر أمام القضاء.\n\n### ٢. نظرية الاختيار العام، معادلة داونز للمشاركة ومبرهنة كينيث أرو للاستحالة\n- **الإطار التشريعي:** تفسر معادلة أنتوني داونز ($R = P \\cdot B - C + D$) تصويت الناخب الرشيد بأن شعوره بالواجب المدني والوطني ($D$) يعوض تكلفة الإدلاء بالصوت ويرجح قرار المشاركة.\n- **الديناميات الديمقراطية:** تؤكد مفارقة التصويت أن احتمالية ترجيح صوت فردي واحد لنتيجة انتخابات قومية تكاد تكون منعدمة رياضياً، مما يثبت أن الدافع الحقيقي للاقتراع هو الضمير والواجب الأخلاقي.\n- **التحليل التطبيقي:** تبرهن نظرية الاستحالة لكينيث أرو رياضياً على استحالة وجود أي نظام انتخابي ترتيبي قادر على استيفاء جميع معايير العدالة الديمقراطية الخمسة دون الوقوع في التناقض أو الديكتاتورية.\n\n### ٣. الديمقراطية الرقمية، التصويت المشفر القابل للتحقق ومواجهة تهديدات الذكاء الاصطناعي\n- **الأساس المعياري:** تتيح أنظمة التصويت الرقمي المشفرة القابلة للتحقق من البداية للنهاية (E2E-V) لكل ناخب التأكد من تسجيل صوته واحتسابه بدقة دون كشف سرية اختياره.\n- **الرقابة القضائية:** يتيح التشفير التماثلي (Homomorphic Encryption) جمع نتائج بطاقات الاقتراع المشفرة رياضياً وحساب الفائزين مباشرة دون الحاجة لفك تشفير بطاقة أي ناخب بمفرده.\n- **آفاق الفقه المعاصر:** يتطلب صون السيادة الديمقراطية ضد حملات التزييف العميق والتدخلات الرقمية الموجهة إلزام البصمات المشفرة لمنشأ المحتوى (C2PA) والشفافية القانونية لخوارزميات المنصات الرقمية.",
        formulas: [
          {
            labelEn: "Redistricting Geometry, Malapportionment, and the Efficiency Gap Gerrymandering Metric",
            labelAr: "هندسة الدوائر الانتخابية، تفاوت التمثيل ومقياس فجوة الكفاءة (Efficiency Gap)",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Public Choice Theory, the Calculus of Voting, and Arrow’s Impossibility Theorem",
            labelAr: "نظرية الاختيار العام، معادلة داونز للمشاركة ومبرهنة كينيث أرو للاستحالة",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Digital Democracy, End-to-End Verifiable Cryptographic Voting, and AI Threat Mitigations",
            labelAr: "الديمقراطية الرقمية، التصويت المشفر القابل للتحقق ومواجهة تهديدات الذكاء الاصطناعي",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Comparative Constitutional Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في الفقه الدستوري والحوكمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-CIV-CH04-L2',
          pageRange: '26-48'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Institutional Electoral Integrity, Cryptographic Voting & Countering Digital Disinformation",
          titleAr: "خطة الدرس التوجيهية: النزاهة المؤسسية للانتخابات، التصويت المشفر الآمن، ومكافحة التضليل الرقمي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-CIV-CH04-L2',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Redistricting Geometry, Malapportionment, and the Efficiency Gap Gerrymandering Metric",
            "Evaluate institutional checks, balances, and statutory limits in Public Choice Theory, the Calculus of Voting, and Arrow’s Impossibility Theorem",
            "Analyze constitutional jurisprudence and rights guarantees in Digital Democracy, End-to-End Verifiable Cryptographic Voting, and AI Threat Mitigations"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ هندسة الدوائر الانتخابية، تفاوت التمثيل ومقياس فجوة الكفاءة (Efficiency Gap)",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ نظرية الاختيار العام، معادلة داونز للمشاركة ومبرهنة كينيث أرو للاستحالة",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ الديمقراطية الرقمية، التصويت المشفر القابل للتحقق ومواجهة تهديدات الذكاء الاصطناعي"
          ],
          prerequisitesEn: ['Foundations of Civics', 'Constitutional Law', 'Social Contract Theory'],
          prerequisitesAr: ['مبادئ التربية الوطنية', 'مدخل العلوم القانونية', 'المفاهيم الدستورية العامة'],
          keyVocabularyEn: [
            { term: 'Constitution', definition: 'The supreme fundamental law of the sovereign state' },
            { term: 'Rule of Law', definition: 'Equality of all citizens and organs before valid statutes' }
          ],
          keyVocabularyAr: [
            { term: 'الدستور', definition: 'القانون الأسمى للبلاد الذي يحدد شكل الدولة ونظام الحكم وحقوق المواطنين' },
            { term: 'سيادة القانون', definition: 'خضوع كافة الأفراد وسلطات الدولة لأحكام القانون والمساواة أمامه' }
          ],
          teachingPacing: [
            { phaseEn: 'Engage & Explore', phaseAr: 'التهيئة والاستكشاف', duration: '20 min', activitiesEn: 'Constitutional scenario review and legal inquiry', activitiesAr: 'مناقشة سيناريو دستوري وتدريب استكشافي' },
            { phaseEn: 'Analysis & Practice', phaseAr: 'التحليل والتطبيق', duration: '70 min', activitiesEn: 'Statutory derivation, solved problems, and databank assessment', activitiesAr: 'تحليل النصوص، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating ordinary statutes with supreme constitutional provisions rather than recognizing constitutional normative supremacy and supermajority amendment requirements'
          ],
          commonMisconceptionsAr: [
            'الخلط بين نصوص القوانين العادية والنصوص الدستورية العليا التي تتمتع بالسمو التشريعي وتتطلب إجراءات تعديل مشددة واستفتاء شعبي'
          ],
          differentiationEn: {
            struggling: 'Provide guided constitutional article roadmaps and structured summaries.',
            advanced: 'Assign comparative constitutional review essays and judicial opinion critiques.'
          },
          differentiationAr: {
            struggling: 'تقديم خرائط مفاهيمية لنصوص الدستور وملخصات إرشادية.',
            advanced: 'تكليف بدراسة مقارنة لأحكام المحكمة الدستورية وتحليل الفقه القضائي.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring civics and constitutional principles.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من أسئلة الاختيار من متعدد لقياس استيعاب المفاهيم الدستورية.',
          exitTicketQuestion: {
            questionEn: "What is the primary constitutional principle governing Redistricting Geometry, Malapportionment, and the Efficiency Gap Gerrymandering Metric?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في هندسة الدوائر الانتخابية، تفاوت التمثيل ومقياس فجوة الكفاءة (Efficiency Gap)؟",
            solutionEn: "Malapportionment occurs when electoral districts contain substantially unequal numbers of voters, violating the constitutional \"one person, one vote\" principle.",
            solutionAr: "يحدث عوار تفاوت التمثيل (Malapportionment) عندما تتباين أعداد الناخبين في الدوائر الانتخابية تفاوتاً جسيماً، مما يخل بمبدأ \"صوت واحد لكل ناخب\"."
          }
        },
        worksheet: {
          id: 'egbac_civics_ch4_l2_ws',
          titleEn: "Worksheet: Institutional Electoral Integrity, Cryptographic Voting & Countering Digital Disinformation",
          titleAr: "ورقة عمل: النزاهة المؤسسية للانتخابات، التصويت المشفر الآمن، ومكافحة التضليل الرقمي",
          descriptionEn: 'Formative assessment and problem solving worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتقييم تكويني للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'civics_electoral_simulator',
          titleEn: "Electoral Systems & Seat Allocation Calculator",
          titleAr: "حاسبة النظم الانتخابية وتوزيع المقاعد البرلمانية",
          descriptionEn: 'Interactive real-time constitutional and civic simulation studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة العمليات الدستورية والحزبية والانتخابية.'
        }
      }
    ],
    databank: egBacCivicsCh4Databank,
    solvedExamples: egBacCivicsCh4SolvedExamples,
    exerciseProblems: egBacCivicsCh4Exercises
  }
];

export const egBacCivicsBranch: Branch = {
  id: 'egbac_civics',
  titleEn: "New Egyptian Baccalaureate: Advanced Comparative Civics & Constitutional Law",
  titleAr: "البكالوريا المصرية: الفقه الدستوري المقارن، الحوكمة والأخلاقيات المدنية",
  categoryEn: "Egyptian Baccalaureate Core Subject",
  categoryAr: "المادة القومية الأساسية للبكالوريا",
  iconName: 'Scale',
  colorGradient: 'from-emerald-950 via-teal-900 to-slate-900',
  chapters
};
