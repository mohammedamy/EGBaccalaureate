import type { Branch, Chapter } from '../types/curriculum';
import { civicsCh1Databank } from './databanks/thanaweya/civicsCh1Databank';
import { civicsCh1SolvedExamples, civicsCh1Exercises } from './textbook/thanaweya/civicsCh1Textbook';
import { civicsCh2Databank } from './databanks/thanaweya/civicsCh2Databank';
import { civicsCh2SolvedExamples, civicsCh2Exercises } from './textbook/thanaweya/civicsCh2Textbook';
import { civicsCh3Databank } from './databanks/thanaweya/civicsCh3Databank';
import { civicsCh3SolvedExamples, civicsCh3Exercises } from './textbook/thanaweya/civicsCh3Textbook';
import { civicsCh4Databank } from './databanks/thanaweya/civicsCh4Databank';
import { civicsCh4SolvedExamples, civicsCh4Exercises } from './textbook/thanaweya/civicsCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'th_civics_ch1',
    chapterNumber: 1,
    titleEn: "The Law and Constitution: Concepts, Sources & Judicial Review",
    titleAr: "القانون والدستور: المفهوم، المصادر والرقابة القضائية",
    descriptionEn: "The legal rule, its characteristics and sources, classification of constitutions, methods of establishment and amendment, and competencies of the Egyptian Supreme Constitutional Court.",
    descriptionAr: "القاعدة القانونية وخصائصها ومصادرها، تصنيف الدساتير وطرق نشأتها وتعديلها، واختصاصات المحكمة الدستورية العليا في مصر.",
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
        id: 'th_civics_ch1_l1',
        titleEn: "The Legal Rule: Concept, Characteristics, and Formal Sources of Egyptian Law",
        titleAr: "القاعدة القانونية: المفهوم والخصائص والمصادر الرسمية للقانون المصري",
        summaryEn: "Fundamental definition of the legal rule, its social and abstract nature, sanction mechanisms, and the hierarchy of legislation, custom, Sharia, and equity.",
        summaryAr: "التعريف التأسيسي للقاعدة القانونية، خصائص العمومية والتجريد والإلزام والجزاء، وتدرج مصادر القانون المصري من التشريع والعرف والشريعة والعدالة.",
        theoryContentEn: "### 1. Characteristics of the Legal Rule: General, Abstract, Social, and Binding\n- **Fundamental Principle:** The legal rule is defined as a general and abstract rule of social conduct that is binding and coupled with a material sanction enforced by the public authority.\n- **Institutional Impact:** The legal sanction differs from religious and moral sanctions because it is material, worldly, and applied immediately by the state judicial and executive organs.\n- **Constitutional Perspective:** Analyzing the abstract nature of legal rules ensures they apply objectively to categories and conditions rather than specific individuals, guaranteeing constitutional equality before the law.\n\n### 2. Official Sources of Egyptian Law: Legislation, Custom, Sharia, and Equity\n- **Statutory Framework:** Legislation is the primary formal source of law in Egypt, consisting of written legal rules enacted by the competent constitutional legislative authority.\n- **Democratic Dynamic:** Custom constitutes a formal supplementary source of law, requiring two elements: a long-standing public material practice and an internal psychological conviction of its obligatoriness.\n- **High-Order Synthesis:** According to Article 1 of the Egyptian Civil Code, judges must rule according to legislative provisions; if absent, by custom; if absent, by Islamic Sharia principles; and then by principles of natural law and rules of equity.\n\n### 3. Classification of Constitutions: Written vs. Customary and Rigid vs. Flexible\n- **Normative Foundation:** Constitutions are classified into written constitutions codified in an official constitutional document and customary unwritten constitutions based on established historical conventions.\n- **Judicial Analysis:** Rigid constitutions require special, more stringent procedures for their amendment than ordinary laws, whereas flexible constitutions can be amended by the ordinary legislative process.\n- **Advanced Jurisprudence:** Evaluating the constitutional amendment procedure under Article 226 of the Egyptian Constitution reveals its rigid nature: requiring an approved request by the President or one-fifth of MPs, a two-thirds parliamentary vote, and mandatory popular referendum approval.",
        theoryContentAr: "### ١. خصائص القاعدة القانونية: عامة مجردة، سلوك اجتماعي، وملزمة مقترنة بجزاء\n- **المنطلق التأسيسي:** تُعرف القاعدة القانونية بأنها قاعدة عامة مجردة تنظم السلوك الاجتماعي وتتسم بالإلزام لاقترانها بجزاء مادي توقعه السلطة العامة جبراً عند مخالفتها.\n- **الأثر المؤسسي:** يتميز الجزاء القانوني عن الجزاء الأخلاقي والديني بكونه جزاءً مادياً دنيوياً محسوساً توقعه السلطة العامة فور ثبوت المخالفة لحفظ النظام العام.\n- **الرؤية الدستورية العليا:** تحليل خاصية التجريد في القاعدة القانونية يبرهن على أنها لا تخاطب أشخاصاً بذواتهم بل بصفاتهم وشروط موضوعية، مما يرسخ مبدأ المساواة الدستورية أمام القانون.\n\n### ٢. المصادر الرسمية للقانون المصري: التشريع، العرف، الشريعة الإسلامية، والعدالة\n- **الإطار التشريعي:** يعد التشريع المصدر الرسمي الأصلي للقانون في مصر، وهو القواعد القانونية المكتوبة الصادرة عن السلطة التشريعية المختصة دستورياً.\n- **الديناميات الديمقراطية:** يشكل العرف مصدراً رسمياً احتياطياً للقانون ويتطلب ركنين: ركناً مادياً يتمثل في الاعتياد والسلوك المستقر، وركناً معنوياً يتمثل في الشعور بإلزامه قانوناً.\n- **التحليل التطبيقي:** تنص المادة الأولى من القانون المدني المصري على أن القاضي يقضي بنصوص التشريع، فإن لم يجد فبمقتضى العرف، فإن لم يجد فبمبادئ الشريعة الإسلامية، فإن لم يجد فبمقتضى مبادئ القانون الطبيعي وقواعد العدالة.\n\n### ٣. تصنيف الدساتير: مكتوبة وعرفية، وجامدة ومرنة\n- **الأساس المعياري:** تُصنف الدساتير من حيث تدوينها إلى دساتير مكتوبة مدونة في وثيقة رسمية (مثل الدستور المصري)، ودساتير غير مكتوبة (عرفية) كالدستور البريطاني.\n- **الرقابة القضائية:** تتطلب الدساتير الجامدة إجراءات مشددة وخاصة لتعديلها تفوق إجراءات تعديل القوانين العادية (مثل دستور مصر)، بينما تُعدل الدساتير المرنة بذات إجراءات القوانين العادية.\n- **آفاق الفقه المعاصر:** يثبت نص المادة 226 من الدستور المصري جمود الدستور بإلزام موافقة رئيس الجمهورية أو خمس أعضاء مجلس النواب لطلب التعديل، وموافقة ثلثي البرلمان، ثم الاستفتاء الشعبي الإلزامي.",
        formulas: [
          {
            labelEn: "Characteristics of the Legal Rule: General, Abstract, Social, and Binding",
            labelAr: "خصائص القاعدة القانونية: عامة مجردة، سلوك اجتماعي، وملزمة مقترنة بجزاء",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Official Sources of Egyptian Law: Legislation, Custom, Sharia, and Equity",
            labelAr: "المصادر الرسمية للقانون المصري: التشريع، العرف، الشريعة الإسلامية، والعدالة",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Classification of Constitutions: Written vs. Customary and Rigid vs. Flexible",
            labelAr: "تصنيف الدساتير: مكتوبة وعرفية، وجامدة ومرنة",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 National Civics & Constitution',
          bookTitleAr: 'كتاب التربية الوطنية والدستور الرسمي - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-CIV-CH01-L1',
          pageRange: '5-25'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: The Legal Rule: Concept, Characteristics, and Formal Sources of Egyptian Law",
          titleAr: "خطة الدرس التوجيهية: القاعدة القانونية: المفهوم والخصائص والمصادر الرسمية للقانون المصري",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-CIV-CH01-L1',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Characteristics of the Legal Rule: General, Abstract, Social, and Binding",
            "Evaluate institutional checks, balances, and statutory limits in Official Sources of Egyptian Law: Legislation, Custom, Sharia, and Equity",
            "Analyze constitutional jurisprudence and rights guarantees in Classification of Constitutions: Written vs. Customary and Rigid vs. Flexible"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ خصائص القاعدة القانونية: عامة مجردة، سلوك اجتماعي، وملزمة مقترنة بجزاء",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ المصادر الرسمية للقانون المصري: التشريع، العرف، الشريعة الإسلامية، والعدالة",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ تصنيف الدساتير: مكتوبة وعرفية، وجامدة ومرنة"
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
            questionEn: "What is the primary constitutional principle governing Characteristics of the Legal Rule: General, Abstract, Social, and Binding?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في خصائص القاعدة القانونية: عامة مجردة، سلوك اجتماعي، وملزمة مقترنة بجزاء؟",
            solutionEn: "The legal rule is defined as a general and abstract rule of social conduct that is binding and coupled with a material sanction enforced by the public authority.",
            solutionAr: "تُعرف القاعدة القانونية بأنها قاعدة عامة مجردة تنظم السلوك الاجتماعي وتتسم بالإلزام لاقترانها بجزاء مادي توقعه السلطة العامة جبراً عند مخالفتها."
          }
        },
        worksheet: {
          id: 'th_civics_ch1_l1_ws',
          titleEn: "Worksheet: The Legal Rule: Concept, Characteristics, and Formal Sources of Egyptian Law",
          titleAr: "ورقة عمل: القاعدة القانونية: المفهوم والخصائص والمصادر الرسمية للقانون المصري",
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
        id: 'th_civics_ch1_l2',
        titleEn: "Constitutions & Supreme Judicial Review: Typology, Origins, and Constitutional Adjudication",
        titleAr: "الدساتير والرقابة القضائية العليا: التصنيف، طرق النشأة، واختصاصات المحكمة الدستورية",
        summaryEn: "Written vs customary constitutions, rigidity and amendment rules under Article 226, constituent assembly methods, and the judicial review of the Supreme Constitutional Court.",
        summaryAr: "تصنيف الدساتير المكتوبة والجامدة، وضوابط التعديل وفق المادة 226، وطرق النشأة الديمقراطية، واختصاصات المحكمة الدستورية العليا في الرقابة على القوانين.",
        theoryContentEn: "### 1. Methods of Establishing Constitutions: Democratic vs. Non-Democratic Means\n- **Fundamental Principle:** Democratic methods of establishing constitutions include the elected Constituent Assembly and the Popular Constitutional Referendum.\n- **Institutional Impact:** Non-democratic methods include the Royal Grant (Charte Octroyée), where the monarch voluntarily concedes authority, and the Contract/Compact between ruler and representatives.\n- **Constitutional Perspective:** The Egyptian Constitution of 2014 was drafted through a dedicated democratic constituent drafting committee representing societal spectrums and ratified through binding nationwide popular referendum.\n\n### 2. The Supreme Constitutional Court: Composition and Judicial Review Competencies\n- **Statutory Framework:** The Supreme Constitutional Court of Egypt is an independent judicial body exclusively competent to decide on the constitutionality of laws and regulations.\n- **Democratic Dynamic:** The Court exercises judicial review via constitutional pleas raised in active litigation, direct reference by courts of merit, or authorized administrative actions.\n- **High-Order Synthesis:** Beyond unconstitutionality rulings, the Court is constitutionally tasked with settling jurisdictional conflicts between judicial bodies, reconciling contradictory final judgments, and providing binding interpretations of legislative texts.\n\n### 3. Constitutional History of Modern Egypt: Milestones from 1882 to 2014/2019\n- **Normative Foundation:** Modern Egyptian constitutional history dates back to the Fundamental Law of 1882 during the Orabi movement, establishing early ministerial accountability.\n- **Judicial Analysis:** The 1923 Constitution laid the foundations for Egyptian parliamentary democracy, three independent powers, and fundamental civil rights following the 1919 Revolution.\n- **Advanced Jurisprudence:** The 2014 Constitution, amended in 2019, solidified social justice guarantees, established women quotas (minimum 25% in parliament), revived the Senate, and affirmed judicial autonomy.",
        theoryContentAr: "### ١. أساليب نشأة الدساتير: الطرق الديمقراطية (الجمعية التأسيسية والاستفتاء) وغير الديمقراطية\n- **المنطلق التأسيسي:** تشمل الطرق الديمقراطية لنشأة الدساتير أسلوب الجمعية التأسيسية المنتخبة من الشعب وأسلوب الاستفتاء الدستوري الشعبي الحر.\n- **الأثر المؤسسي:** تشمل الطرق غير الديمقراطية لنشأة الدساتير أسلوب المنحة من الحاكم الفرد بإرادته المنفردة، وأسلوب العقد أو الميثاق الاتفاقي بين الحاكم وممثلي الشعب.\n- **الرؤية الدستورية العليا:** تأسس دستور مصر لعام 2014 بأسلوب ديمقراطي مركب جمع بين لجنة إعداد مجتمعية تمثل أطياف الوطن واستفتاء شعبي عام حاز موافقة الغالبية الساحقة للشعب المصري.\n\n### ٢. المحكمة الدستورية العليا المصرية: التشكيل، الاختصاصات والرقابة على القوانين\n- **الإطار التشريعي:** المحكمة الدستورية العليا هي جهة قضائية مستقلة قائمة بذاتها، تختص دون غيرها بالفصل في دستورية القوانين واللوائح في جمهورية مصر العربية.\n- **الديناميات الديمقراطية:** تباشر المحكمة الدستورية رقابتها القضائية عن طريق الدفع بعدم الدستورية أثناء نظر دعوى موضوعية، أو بالإحالة المباشرة من محكمة الموضوع، أو الدعوى المباشرة المقررة قانوناً.\n- **التحليل التطبيقي:** تمتد اختصاصات المحكمة الدستورية العليا وفق قانونها والدستور إلى الفصل في تنازع الاختصاص بين الجهات القضائية، وفض تناقض الأحكام النهائية، وتفسير نصوص القوانين بطلب رسمي من وزير العدل.\n\n### ٣. التاريخ الدستوري لمصر الحديثة: المحطات الكبرى من اللائحة الأساسية 1882 حتى 2014/2019\n- **الأساس المعياري:** يعود التاريخ الدستوري الحديث لمصر إلى اللائحة الأساسية لعام 1882 إبان الثورة العرابية، والتي رسخت مبكراً المسؤولية الوزارية أمام المجلس النيابي.\n- **الرقابة القضائية:** أرسى دستور 1923 دعائم النظام البرلماني والتعددية الحزبية والفصل بين السلطات وضمان الحريات العامة استجابة لمكتسبات ثورة 1919 الوطنية.\n- **آفاق الفقه المعاصر:** رسخ دستور 2014 المعدل في 2019 دولة المواطنة وسيادة القانون، وكفل حصة دستورية للمرأة (25% على الأقل في النواب)، وأعاد تنظيم مجلس الشيوخ ودعم استقلال السلطة القضائية.",
        formulas: [
          {
            labelEn: "Methods of Establishing Constitutions: Democratic vs. Non-Democratic Means",
            labelAr: "أساليب نشأة الدساتير: الطرق الديمقراطية (الجمعية التأسيسية والاستفتاء) وغير الديمقراطية",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "The Supreme Constitutional Court: Composition and Judicial Review Competencies",
            labelAr: "المحكمة الدستورية العليا المصرية: التشكيل، الاختصاصات والرقابة على القوانين",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Constitutional History of Modern Egypt: Milestones from 1882 to 2014/2019",
            labelAr: "التاريخ الدستوري لمصر الحديثة: المحطات الكبرى من اللائحة الأساسية 1882 حتى 2014/2019",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 National Civics & Constitution',
          bookTitleAr: 'كتاب التربية الوطنية والدستور الرسمي - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-CIV-CH01-L2',
          pageRange: '26-48'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Constitutions & Supreme Judicial Review: Typology, Origins, and Constitutional Adjudication",
          titleAr: "خطة الدرس التوجيهية: الدساتير والرقابة القضائية العليا: التصنيف، طرق النشأة، واختصاصات المحكمة الدستورية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-CIV-CH01-L2',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Methods of Establishing Constitutions: Democratic vs. Non-Democratic Means",
            "Evaluate institutional checks, balances, and statutory limits in The Supreme Constitutional Court: Composition and Judicial Review Competencies",
            "Analyze constitutional jurisprudence and rights guarantees in Constitutional History of Modern Egypt: Milestones from 1882 to 2014/2019"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ أساليب نشأة الدساتير: الطرق الديمقراطية (الجمعية التأسيسية والاستفتاء) وغير الديمقراطية",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ المحكمة الدستورية العليا المصرية: التشكيل، الاختصاصات والرقابة على القوانين",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ التاريخ الدستوري لمصر الحديثة: المحطات الكبرى من اللائحة الأساسية 1882 حتى 2014/2019"
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
            questionEn: "What is the primary constitutional principle governing Methods of Establishing Constitutions: Democratic vs. Non-Democratic Means?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في أساليب نشأة الدساتير: الطرق الديمقراطية (الجمعية التأسيسية والاستفتاء) وغير الديمقراطية؟",
            solutionEn: "Democratic methods of establishing constitutions include the elected Constituent Assembly and the Popular Constitutional Referendum.",
            solutionAr: "تشمل الطرق الديمقراطية لنشأة الدساتير أسلوب الجمعية التأسيسية المنتخبة من الشعب وأسلوب الاستفتاء الدستوري الشعبي الحر."
          }
        },
        worksheet: {
          id: 'th_civics_ch1_l2_ws',
          titleEn: "Worksheet: Constitutions & Supreme Judicial Review: Typology, Origins, and Constitutional Adjudication",
          titleAr: "ورقة عمل: الدساتير والرقابة القضائية العليا: التصنيف، طرق النشأة، واختصاصات المحكمة الدستورية",
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
    databank: civicsCh1Databank,
    solvedExamples: civicsCh1SolvedExamples,
    exerciseProblems: civicsCh1Exercises
  },
  {
    id: 'th_civics_ch2',
    chapterNumber: 2,
    titleEn: "Democracy and Citizenship: Historical Evolution, Principles & Constitutional Rights",
    titleAr: "الديمقراطية والمواطنة: التطور التاريخي، المبادئ والحقوق الدستورية",
    descriptionEn: "Linguistic and conceptual democracy, historical evolution, forms and pillars, and citizenship dimensions, duties, and constitutional rights.",
    descriptionAr: "المفهوم اللغوي والاصطلاحي للديمقراطية، مراحل تطورها، صورها ومقوماتها، ومفهوم المواطنة وأبعادها وحقوقها الدستورية.",
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
        id: 'th_civics_ch2_l1',
        titleEn: "Democracy: Conceptual Foundations, Historical Evolution & Modern Pillars",
        titleAr: "الديمقراطية: المفهوم اللغوي والاصطلاحي، التطور التاريخي، والمقومات الحديثة",
        summaryEn: "Linguistic origins of democracy (Rule of the People), Egyptian Ma'at and Athenian models, representative institutions, political pluralism, and rule of law.",
        summaryAr: "الأصول اللغوية للديمقراطية (حكم الشعب)، إرث العدالة الفرعوني (ماعت)، النماذج النيابية، التعددية السياسية، وسيادة القانون والتداول السلمي للسلطة.",
        theoryContentEn: "### 1. Linguistic and Conceptual Definition of Democracy\n- **Fundamental Principle:** Democracy originates from the Greek words \"Demos\" (people) and \"Kratos\" (rule), linguistically and conceptually meaning \"Rule of the People\".\n- **Institutional Impact:** In modern political science, democracy signifies a political regime founded on popular sovereignty, equal citizenship rights, and regular peaceful rotation of power.\n- **Constitutional Perspective:** Modern democratic legitimacy requires balancing majoritarian decisions with the entrenched protection of minority rights and fundamental individual constitutional freedoms.\n\n### 2. Historical Evolution of Democracy: Ancient Civilizations to the Modern Social Contract\n- **Statutory Framework:** Ancient Egyptian civilization established early governance principles based on Ma'at (truth, justice, and cosmic order) and institutional court systems.\n- **Democratic Dynamic:** Athenian democracy represented early direct democracy for free citizens, while Islamic civilization introduced Shura (consultation) as a binding governance pillar.\n- **High-Order Synthesis:** Enlightenment social contract theorists (Locke, Rousseau, Montesquieu) reformulated sovereignty from divine right to the consent of the governed, cementing modern constitutionalism.\n\n### 3. Forms of Democracy: Direct, Indirect (Representative), and Semi-Direct\n- **Normative Foundation:** Direct democracy allows all citizens to assemble and vote directly on state laws and policies without intermediaries or representatives.\n- **Judicial Analysis:** Indirect or representative democracy is the prevalent modern system where citizens elect parliamentary deputies to formulate laws and oversee the government.\n- **Advanced Jurisprudence:** Semi-direct democracy combines representative parliaments with popular empowerment mechanisms such as constitutional referendums, popular initiatives, and legislative recall petitions.",
        theoryContentAr: "### ١. المفهوم اللغوي والاصطلاحي للديمقراطية وسيادة الشعب\n- **المنطلق التأسيسي:** تتكون كلمة ديمقراطية لغوياً من مقطعين يونانيين: \"ديموس\" وتعني الشعب، و\"كراتوس\" وتعني الحكم، واصطلاحاً تعني حكم الشعب بالشعب ولصالح الشعب.\n- **الأثر المؤسسي:** تعني الديمقراطية في الفكر السياسي الحديث نظام حكم يقوم على سيادة الشعب وحماية الحريات العامة والتداول السلمي الدوري للسلطة عبر انتخابات نزيهة.\n- **الرؤية الدستورية العليا:** تقوم شرعية الديمقراطية الحديثة على معادلة دستورية دقيقة توازن بين حكم الأغلبية وحماية حقوق الأقلية وضمان الحريات الأساسية غير القابلة للمساس.\n\n### ٢. التطور التاريخي للديمقراطية: من الحضارات القديمة إلى العقد الاجتماعي الحديث\n- **الإطار التشريعي:** رعت الحضارة المصرية القديمة قيم العدالة وسيادة القانون من خلال مفهوم \"ماعت\" (رمز الحق والعدالة)، وتأسيس نظام قضائي مستقل يضمن إنصاف المظلوم.\n- **الديناميات الديمقراطية:** قدمت أثينا نموذجاً أولياً للديمقراطية المباشرة للمواطنين الأحرار، بينما رسخت الحضارة الإسلامية مبدأ الشورى كفريضة وركيزة سياسية ملزمة في الحكم الرشيد.\n- **التحليل التطبيقي:** أعاد فلاسفة العقد الاجتماعي (جون لوك، روسو، مونتسكيو) صياغة السيادة بنقلها من الحق الإلهي المطلق إلى إرادة المحكومين ورضاهم، مما أسس للشرعية الدستورية المعاصرة.\n\n### ٣. صور الديمقراطية: المباشرة، غير المباشرة (النيابية)، وشبه المباشرة\n- **الأساس المعياري:** تتحقق الديمقراطية المباشرة عندما يمارس جميع المواطنين السلطة التشريعية بأنفسهم دون نواب أو ممثلين (كما كان في المدن الإغريقية القديمة).\n- **الرقابة القضائية:** الديمقراطية غير المباشرة (النيابية) هي النظام المعاصر السائد الذي ينتخب فيه الشعب نواباً يمثلونه في البرلمان لتشريع القوانين ومراقبة أعمال الحكومة.\n- **آفاق الفقه المعاصر:** تجمع الديمقراطية شبه المباشرة بين البرلمان المنتخب وأدوات المشاركة الشعبية المباشرة؛ مثل الاستفتاء الشعبي، الاقتراح الشعبي للقوانين، وحق الاعتراض أو إقالة النواب.",
        formulas: [
          {
            labelEn: "Linguistic and Conceptual Definition of Democracy",
            labelAr: "المفهوم اللغوي والاصطلاحي للديمقراطية وسيادة الشعب",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Historical Evolution of Democracy: Ancient Civilizations to the Modern Social Contract",
            labelAr: "التطور التاريخي للديمقراطية: من الحضارات القديمة إلى العقد الاجتماعي الحديث",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Forms of Democracy: Direct, Indirect (Representative), and Semi-Direct",
            labelAr: "صور الديمقراطية: المباشرة، غير المباشرة (النيابية)، وشبه المباشرة",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 National Civics & Constitution',
          bookTitleAr: 'كتاب التربية الوطنية والدستور الرسمي - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-CIV-CH02-L1',
          pageRange: '5-25'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Democracy: Conceptual Foundations, Historical Evolution & Modern Pillars",
          titleAr: "خطة الدرس التوجيهية: الديمقراطية: المفهوم اللغوي والاصطلاحي، التطور التاريخي، والمقومات الحديثة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-CIV-CH02-L1',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Linguistic and Conceptual Definition of Democracy",
            "Evaluate institutional checks, balances, and statutory limits in Historical Evolution of Democracy: Ancient Civilizations to the Modern Social Contract",
            "Analyze constitutional jurisprudence and rights guarantees in Forms of Democracy: Direct, Indirect (Representative), and Semi-Direct"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ المفهوم اللغوي والاصطلاحي للديمقراطية وسيادة الشعب",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ التطور التاريخي للديمقراطية: من الحضارات القديمة إلى العقد الاجتماعي الحديث",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ صور الديمقراطية: المباشرة، غير المباشرة (النيابية)، وشبه المباشرة"
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
            questionEn: "What is the primary constitutional principle governing Linguistic and Conceptual Definition of Democracy?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في المفهوم اللغوي والاصطلاحي للديمقراطية وسيادة الشعب؟",
            solutionEn: "Democracy originates from the Greek words \"Demos\" (people) and \"Kratos\" (rule), linguistically and conceptually meaning \"Rule of the People\".",
            solutionAr: "تتكون كلمة ديمقراطية لغوياً من مقطعين يونانيين: \"ديموس\" وتعني الشعب، و\"كراتوس\" وتعني الحكم، واصطلاحاً تعني حكم الشعب بالشعب ولصالح الشعب."
          }
        },
        worksheet: {
          id: 'th_civics_ch2_l1_ws',
          titleEn: "Worksheet: Democracy: Conceptual Foundations, Historical Evolution & Modern Pillars",
          titleAr: "ورقة عمل: الديمقراطية: المفهوم اللغوي والاصطلاحي، التطور التاريخي، والمقومات الحديثة",
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
        id: 'th_civics_ch2_l2',
        titleEn: "Citizenship: Core Dimensions, Legal Equality & Constitutional Rights under the 2014 Constitution",
        titleAr: "المواطنة: المقومات والأبعاد، المساواة القانونية، والحقوق والواجبات الدستورية",
        summaryEn: "Pillars of citizenship (belonging, equality, active participation), civil liberties and socio-economic rights under Article 53, and mandatory public duties.",
        summaryAr: "مقومات المواطنة (الانتماء، المساواة، والمشاركة الإيجابية)، الحريات المدنية والحقوق الاقتصادية وفق المادة 53، والواجبات الدستورية العامة لصون الوطن.",
        theoryContentEn: "### 1. Pillars of Democratic Governance: Pluralism, Rule of Law, and Separation of Powers\n- **Fundamental Principle:** Political pluralism is an indispensable pillar of democracy, acknowledging diverse ideological currents, political parties, and civic organizations.\n- **Institutional Impact:** The rule of law mandates that all citizens, public officials, and state organs are equally subordinate to valid constitutional and statutory enactments.\n- **Constitutional Perspective:** Peaceful rotation of power ensures that executive leadership transitions smoothly via transparent, periodic, and judicially monitored competitive electoral mandates.\n\n### 2. Concept, Pillars, and Dimensions of Citizenship\n- **Statutory Framework:** Citizenship denotes the legal and political relationship between the individual and the state, defined by mutual rights, constitutional duties, and allegiance.\n- **Democratic Dynamic:** The core pillars of citizenship are national belonging, absolute legal equality, active civic participation, and social responsibility without discrimination.\n- **High-Order Synthesis:** Citizenship encompasses complementary dimensions: a legal-constitutional dimension (equality), a political dimension (voting and rights), and a socio-cultural dimension (shared values and solidarity).\n\n### 3. Constitutional Rights and Duties of the Egyptian Citizen under the 2014 Constitution\n- **Normative Foundation:** Article 53 of the Egyptian Constitution affirms that all citizens are equal before the law, enjoying equal rights and duties without any discrimination.\n- **Judicial Analysis:** Constitutional rights span civil liberties (freedom of expression and belief), political rights (suffrage and candidacy), and socio-economic rights (health, education, and social security).\n- **Advanced Jurisprudence:** Constitutional duties balance individual rights: defending the nation and military conscription is a sacred honor, paying taxes is a mandatory obligation, and safeguarding public property is a civic imperative.",
        theoryContentAr: "### ١. مقومات الديمقراطية: التعددية السياسية، سيادة القانون، والتبادل السلمي للسلطة\n- **المنطلق التأسيسي:** تعد التعددية السياسية ركيزة لا غنى عنها للديمقراطية، حيث تتيح تعبير التيارات الفكرية والأحزاب ومنظمات المجتمع المدني عن رؤاها بحرية ومشروعية.\n- **الأثر المؤسسي:** يفرض مبدأ سيادة القانون خضوع جميع المواطنين ومسؤولي الدولة ومؤسساتها الحاكمة للقانون المعمول به، دون أي تمييز أو حصانة غير دستورية.\n- **الرؤية الدستورية العليا:** يضمن التداول السلمي للسلطة انتقال القيادة التنفيذية والحكومية بسلاسة ومسؤولية عبر صناديق الاقتراع الدوري النزيه الخاضع للرقابة القضائية والمجتمعية.\n\n### ٢. مفهوم المواطنة، مقوماتها (الانتماء، المساواة، والمشاركة) وأبعادها\n- **الإطار التشريعي:** تُعرف المواطنة بأنها الرابطة القانونية والسياسية الوثيقة بين الفرد والدولة، والتي تتحدد بموجبها حقوق المواطن وواجباته الدستورية والتزامه بالولاء الوطني.\n- **الديناميات الديمقراطية:** تتمثل مقومات المواطنة الفاعلة في الانتماء الصادق، المساواة المطلقة أمام القانون، المشاركة الإيجابية في الشأن العام، والتكافل والمسؤولية المجتمعية دون تمييز.\n- **التحليل التطبيقي:** تتكامل أبعاد المواطنة لتشمل: بعداً قانونياً ودستورياً (المساواة والعدالة)، وبعداً سياسياً (حقوق التصويت والترشح)، وبعداً اجتماعياً وثقافياً (التضامن وصون الهوية الوطنية).\n\n### ٣. الحقوق والواجبات الدستورية للمواطن المصري في دستور 2014\n- **الأساس المعياري:** تنص المادة 53 من الدستور المصري على أن المواطنين لدى القانون سواء، وهم متساوون في الحقوق والحريات والواجبات العامة، لا تمييز بينهم لأي سبب.\n- **الرقابة القضائية:** تتنوع الحقوق الدستورية بين حريات مدنية (حرية التعبير والاعتقاد)، وحقوق سياسية (الانتخاب والترشح)، وحقوق اقتصادية واجتماعية (التعليم المجاني والصحة والضمان الاجتماعي).\n- **آفاق الفقه المعاصر:** تتوازن الحقوق بالواجبات العامة الملزمة؛ حيث يُعد الدفاع عن الوطن والتجنيد الإجباري شرفاً وواجباً مقدساً، وأداء الضرائب واجباً، وحماية الملكية العامة التزاماً وطنياً.",
        formulas: [
          {
            labelEn: "Pillars of Democratic Governance: Pluralism, Rule of Law, and Separation of Powers",
            labelAr: "مقومات الديمقراطية: التعددية السياسية، سيادة القانون، والتبادل السلمي للسلطة",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Concept, Pillars, and Dimensions of Citizenship",
            labelAr: "مفهوم المواطنة، مقوماتها (الانتماء، المساواة، والمشاركة) وأبعادها",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Constitutional Rights and Duties of the Egyptian Citizen under the 2014 Constitution",
            labelAr: "الحقوق والواجبات الدستورية للمواطن المصري في دستور 2014",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 National Civics & Constitution',
          bookTitleAr: 'كتاب التربية الوطنية والدستور الرسمي - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-CIV-CH02-L2',
          pageRange: '26-48'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Citizenship: Core Dimensions, Legal Equality & Constitutional Rights under the 2014 Constitution",
          titleAr: "خطة الدرس التوجيهية: المواطنة: المقومات والأبعاد، المساواة القانونية، والحقوق والواجبات الدستورية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-CIV-CH02-L2',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Pillars of Democratic Governance: Pluralism, Rule of Law, and Separation of Powers",
            "Evaluate institutional checks, balances, and statutory limits in Concept, Pillars, and Dimensions of Citizenship",
            "Analyze constitutional jurisprudence and rights guarantees in Constitutional Rights and Duties of the Egyptian Citizen under the 2014 Constitution"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ مقومات الديمقراطية: التعددية السياسية، سيادة القانون، والتبادل السلمي للسلطة",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ مفهوم المواطنة، مقوماتها (الانتماء، المساواة، والمشاركة) وأبعادها",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ الحقوق والواجبات الدستورية للمواطن المصري في دستور 2014"
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
            questionEn: "What is the primary constitutional principle governing Pillars of Democratic Governance: Pluralism, Rule of Law, and Separation of Powers?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في مقومات الديمقراطية: التعددية السياسية، سيادة القانون، والتبادل السلمي للسلطة؟",
            solutionEn: "Political pluralism is an indispensable pillar of democracy, acknowledging diverse ideological currents, political parties, and civic organizations.",
            solutionAr: "تعد التعددية السياسية ركيزة لا غنى عنها للديمقراطية، حيث تتيح تعبير التيارات الفكرية والأحزاب ومنظمات المجتمع المدني عن رؤاها بحرية ومشروعية."
          }
        },
        worksheet: {
          id: 'th_civics_ch2_l2_ws',
          titleEn: "Worksheet: Citizenship: Core Dimensions, Legal Equality & Constitutional Rights under the 2014 Constitution",
          titleAr: "ورقة عمل: المواطنة: المقومات والأبعاد، المساواة القانونية، والحقوق والواجبات الدستورية",
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
    databank: civicsCh2Databank,
    solvedExamples: civicsCh2SolvedExamples,
    exerciseProblems: civicsCh2Exercises
  },
  {
    id: 'th_civics_ch3',
    chapterNumber: 3,
    titleEn: "Political Parties: Concepts, Statutory Conditions, Functions & Egyptian Evolution",
    titleAr: "الأحزاب السياسية: المفهوم، الشروط، الوظائف ومراحل التطور بمصر",
    descriptionEn: "Definition of political party, founding conditions, objectives, functions, principles, and historical phases of party life in Egypt.",
    descriptionAr: "تعريف الحزب السياسي وشروطه وأهدافه ووظائفه ومبادئه، والمراحل التاريخية للأحزاب في مصر.",
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
        id: 'th_civics_ch3_l1',
        titleEn: "Political Parties: Structural Concept, Founding Conditions & Legal Framework",
        titleAr: "الأحزاب السياسية: المفهوم البنائي، الشروط الدستورية، والإطار التشريعي للتأسيس",
        summaryEn: "Definition and characteristics of political parties, statutory criteria under Law 40/1977, prohibition of religious/military factions, and notification rights under Article 74.",
        summaryAr: "تعريف الحزب السياسي وخصائصه التنظيمية، شروط التأسيس بقانون 40 لسنة 1977، حظر الأحزاب الدينية أو العسكرية، وحق التأسيس بالإخطار والحماية القضائية بالمادة 74.",
        theoryContentEn: "### 1. Definition and Core Characteristics of a Political Party\n- **Fundamental Principle:** A political party is an organized civic group operating under an official program to participate in public affairs and compete peacefully for governance.\n- **Institutional Impact:** Key structural characteristics of political parties include temporal continuity, organized geographic spread, clear political vision, and an active popular base.\n- **Constitutional Perspective:** Differentiating political parties from civil society NGOs: parties explicitly seek public governing power through electoral competition, whereas NGOs focus on advocacy and services without seeking office.\n\n### 2. Statutory Conditions for Founding Political Parties under Egyptian Law\n- **Statutory Framework:** Egyptian Law No. 40 of 1977 requires that a new party must present a unique program distinct from existing political parties.\n- **Democratic Dynamic:** The Constitution strictly forbids founding political parties based on religious discrimination, military/paramilitary structure, sectarian segregation, or regional bias.\n- **High-Order Synthesis:** Article 74 of the Egyptian Constitution grants citizens the right to form parties by mere notification, establishing judicial review by the Supreme Administrative Court as the exclusive authority for dissolution.\n\n### 3. Strategic Objectives and Public Functions of Political Parties\n- **Normative Foundation:** Preserving human rights and fundamental constitutional freedoms is a primary strategic objective of democratic political parties.\n- **Judicial Analysis:** Political parties perform vital socialization functions by educating citizens, recruiting and training qualified future leaders, and formulating actionable public policies.\n- **Advanced Jurisprudence:** Opposition parties vitalize democratic governance by exercising constructive parliamentary scrutiny, offering policy alternatives, and holding executive officials accountable.",
        theoryContentAr: "### ١. تعريف الحزب السياسي وخصائصه الأساسية (الاستمرارية، التنظيم، والرؤية)\n- **المنطلق التأسيسي:** الحزب السياسي هو كل تنظيم وطني جامع يؤسس وفقاً للقانون ويسعى للمشاركة في الحياة العامة وتولي الحكم أو المشاركة فيه بالوسائل الديمقراطية السلمية.\n- **الأثر المؤسسي:** تشمل الخصائص البنائية للحزب السياسي: الاستمرارية التنظيمية، الانتشار الجغرافي، وجود رؤية وبرنامج سياسي معلن، والسعي للحصول على التأييد الشعبي.\n- **الرؤية الدستورية العليا:** يتميز الحزب السياسي عن منظمات المجتمع المدني والجمعيات الأهلية بسعيه الصريح للتداول على السلطة والمنافسة في الانتخابات العامة، بينما تحظر القوانين على الجمعيات ممارسة العمل الحزبي.\n\n### ٢. الشروط القانونية والدستورية لتأسيس الأحزاب السياسية في القانون المصري\n- **الإطار التشريعي:** يشترط قانون الأحزاب السياسية المصري رقم 40 لسنة 1977 وتعديلاته أن يكون للحزب برنامج متميز ومغاير لبرامج الأحزاب القائمة.\n- **الديناميات الديمقراطية:** يحظر الدستور والقانون تماماً تأسيس أي حزب سياسي على أساس ديني أو طائفي أو فئوي أو جغرافي، أو ممارسة نشاط سري أو ذي طابع عسكري أو شبه عسكري.\n- **التحليل التطبيقي:** كفلت المادة 74 من الدستور المصري حق تكوين الأحزاب بمجرد الإخطار الذي ينظمه القانون، وحصنت الأحزاب من الحل الإداري؛ حيث لا يجوز حلها إلا بحكم قضائي بات من المحكمة الإدارية العليا.\n\n### ٣. الأهداف الإستراتيجية والوظائف الحيوية للأحزاب السياسية في المجتمع\n- **الأساس المعياري:** يعد دعم الديمقراطية وصون حقوق الإنسان والحريات العامة الأساسية في صدارة الأهداف الإستراتيجية للأحزاب السياسية الوطنية.\n- **الرقابة القضائية:** تمارس الأحزاب وظائف حيوية تشمل التنشئة والتثقيف السياسي للمواطنين، إعداد وتأهيل الكوادر القيادية، وبلورة مشروعات سياسات عامة قابلة للتنفيذ.\n- **آفاق الفقه المعاصر:** تثري أحزاب المعارضة الممارسة الديمقراطية من خلال الرقابة البرلمانية البناءة، وتقديم البدائل والحلول للسياسات الحكومية، ومحاسبة السلطة التنفيذية باعتدال وموضوعية.",
        formulas: [
          {
            labelEn: "Definition and Core Characteristics of a Political Party",
            labelAr: "تعريف الحزب السياسي وخصائصه الأساسية (الاستمرارية، التنظيم، والرؤية)",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Statutory Conditions for Founding Political Parties under Egyptian Law",
            labelAr: "الشروط القانونية والدستورية لتأسيس الأحزاب السياسية في القانون المصري",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Strategic Objectives and Public Functions of Political Parties",
            labelAr: "الأهداف الإستراتيجية والوظائف الحيوية للأحزاب السياسية في المجتمع",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 National Civics & Constitution',
          bookTitleAr: 'كتاب التربية الوطنية والدستور الرسمي - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-CIV-CH03-L1',
          pageRange: '5-25'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Political Parties: Structural Concept, Founding Conditions & Legal Framework",
          titleAr: "خطة الدرس التوجيهية: الأحزاب السياسية: المفهوم البنائي، الشروط الدستورية، والإطار التشريعي للتأسيس",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-CIV-CH03-L1',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Definition and Core Characteristics of a Political Party",
            "Evaluate institutional checks, balances, and statutory limits in Statutory Conditions for Founding Political Parties under Egyptian Law",
            "Analyze constitutional jurisprudence and rights guarantees in Strategic Objectives and Public Functions of Political Parties"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ تعريف الحزب السياسي وخصائصه الأساسية (الاستمرارية، التنظيم، والرؤية)",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ الشروط القانونية والدستورية لتأسيس الأحزاب السياسية في القانون المصري",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ الأهداف الإستراتيجية والوظائف الحيوية للأحزاب السياسية في المجتمع"
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
            questionEn: "What is the primary constitutional principle governing Definition and Core Characteristics of a Political Party?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في تعريف الحزب السياسي وخصائصه الأساسية (الاستمرارية، التنظيم، والرؤية)؟",
            solutionEn: "A political party is an organized civic group operating under an official program to participate in public affairs and compete peacefully for governance.",
            solutionAr: "الحزب السياسي هو كل تنظيم وطني جامع يؤسس وفقاً للقانون ويسعى للمشاركة في الحياة العامة وتولي الحكم أو المشاركة فيه بالوسائل الديمقراطية السلمية."
          }
        },
        worksheet: {
          id: 'th_civics_ch3_l1_ws',
          titleEn: "Worksheet: Political Parties: Structural Concept, Founding Conditions & Legal Framework",
          titleAr: "ورقة عمل: الأحزاب السياسية: المفهوم البنائي، الشروط الدستورية، والإطار التشريعي للتأسيس",
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
        id: 'th_civics_ch3_l2',
        titleEn: "Party Functions, Democratic Principles & Historical Evolution in Egypt",
        titleAr: "وظائف الأحزاب السياسية، المبادئ الحاكمة، ومسيرة التعددية الحزبية في مصر",
        summaryEn: "Political socialization, leadership recruitment, opposition scrutiny, tolerance and financial transparency, and historical milestones from 1923 to contemporary coalitions.",
        summaryAr: "التثقيف والتنشئة السياسية، تأهيل الكوادر، الرقابة المعارضة البناءة، الشفافية المالية، ومحطات التعددية من دستور 1923 والمنابر السياسية حتى التحالفات المعاصرة.",
        theoryContentEn: "### 1. Principles Governing Democratic Party Action\n- **Fundamental Principle:** Tolerance and acceptance of the other are ethical imperatives ensuring peaceful coexistence between competing political party ideologies.\n- **Institutional Impact:** The principle of peaceful democratic competition strictly obligates parties to renounce all forms of violence, hatred, extremism, and incitement.\n- **Constitutional Perspective:** Financial transparency dictates that parties must rely exclusively on declared public and member resources, banning all foreign donations to safeguard national sovereignty.\n\n### 2. Historical Evolution of Egyptian Parties: From Pre-1952 Pluralism to 1977\n- **Statutory Framework:** The pre-1952 phase featured vibrant national party pluralism led by the Wafd Party, the National Party, and diverse constitutional factions.\n- **Democratic Dynamic:** Between 1953 and 1976, party pluralism was legally suspended in favor of a single national political organization (Liberation Rally, National Union, Socialist Union).\n- **High-Order Synthesis:** President Anwar Sadat initiated the return to multi-party democracy in 1976 through three ideological political platforms (Right, Center, Left), formalized into parties via Law 40/1977.\n\n### 3. Contemporary Egyptian Party Landscape: Post-2011/2013 Dynamics and Proportionality\n- **Normative Foundation:** Following 2011 and the 2014 Constitution, hundreds of political parties formed to reflect diverse generational, civic, and economic viewpoints.\n- **Judicial Analysis:** The modern Egyptian Parliament features broad party representation through coalitions, including Majority parties, independent deputies, and active opposition.\n- **Advanced Jurisprudence:** Analyzing party alliances in electoral list systems illustrates how multi-party coalitions consolidate seats while ensuring quota representation for youth, women, and workers.",
        theoryContentAr: "### ١. المبادئ الحاكمة للعمل الحزبي: التسامح، قبول الآخر، ونبذ العنف\n- **المنطلق التأسيسي:** يمثل التسامح وقبول الآخر ضرورة أخلاقية ودستورية تضمن التعايش السلمي والتنافس الحضاري بين مختلف التيارات والبرامج الحزبية.\n- **الأثر المؤسسي:** يوجب مبدأ التنافس الديمقراطي السلمي على جميع الأحزاب النبذ التام للعنف وخطاب الكراهية والتطرف، والالتزام بالقنوات الشرعية وصناديق الاقتراع.\n- **الرؤية الدستورية العليا:** تفرض الشفافية المالية خضوع أموال الأحزاب ومصادر تمويلها لرقابة الجهاز المركزي للمحاسبات، مع حظر تلقي أي تمويل أو تبرع خارجي صوناً للسيادة الوطنية.\n\n### ٢. التطور التاريخي للأحزاب بمصر: من التعددية الليبرالية قبل 1952 حتى إعادة التعددية 1977\n- **الإطار التشريعي:** شهدت مرحلة ما قبل 1952 تعددية حزبية وطنية حافلة تصدرها حزب الوفد والحزب الوطني وأحزاب الأقلية في كفاحها ضد الاحتلال الإنجليزي.\n- **الديناميات الديمقراطية:** تم تعليق التعددية الحزبية عقب ثورة 1952 لصالح تنظيم سياسي جامع (هيئة التحرير، الاتحاد القومي، ثم الاتحاد الاشتراكي العربي) لحشد الطاقات الوطنية.\n- **التحليل التطبيقي:** دشن الرئيس الراحل أنور السادات العودة للتعددية الحزبية في عام 1976 عبر تأسيس المنابر السياسية الثلاثة (يمين، وسط، يسار) والتي تحولت لأحزاب رسمية بقانون 1977.\n\n### ٣. المشهد الحزبي المصري المعاصر: ديناميات ما بعد 2011/2013 والتوازن البرلماني\n- **الأساس المعياري:** شهدت مصر بعد 2011 ودستور 2014 نشأة واسعة لأحزاب سياسية جديدة عبّرت عن تطلعات الشباب ومختلف القوى المدنية والوطنية في المجتمع.\n- **الرقابة القضائية:** يتميز البرلمان المصري المعاصر بتمثيل حزبي واسع يضم ائتلافات الأغلبية الحزبية إلى جانب نواب مستقلين وكتل معارضة وطنية فاعلة.\n- **آفاق الفقه المعاصر:** يوضح تحليل التحالفات الحزبية في القوائم الانتخابية كيف تنجح القوائم الوطنية الموحدة في حصد المقاعد مع ضمان التمثيل الدستوري للشباب والمرأة وذوي الإعاقة والعمال.",
        formulas: [
          {
            labelEn: "Principles Governing Democratic Party Action",
            labelAr: "المبادئ الحاكمة للعمل الحزبي: التسامح، قبول الآخر، ونبذ العنف",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Historical Evolution of Egyptian Parties: From Pre-1952 Pluralism to 1977",
            labelAr: "التطور التاريخي للأحزاب بمصر: من التعددية الليبرالية قبل 1952 حتى إعادة التعددية 1977",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Contemporary Egyptian Party Landscape: Post-2011/2013 Dynamics and Proportionality",
            labelAr: "المشهد الحزبي المصري المعاصر: ديناميات ما بعد 2011/2013 والتوازن البرلماني",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 National Civics & Constitution',
          bookTitleAr: 'كتاب التربية الوطنية والدستور الرسمي - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-CIV-CH03-L2',
          pageRange: '26-48'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Party Functions, Democratic Principles & Historical Evolution in Egypt",
          titleAr: "خطة الدرس التوجيهية: وظائف الأحزاب السياسية، المبادئ الحاكمة، ومسيرة التعددية الحزبية في مصر",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-CIV-CH03-L2',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Principles Governing Democratic Party Action",
            "Evaluate institutional checks, balances, and statutory limits in Historical Evolution of Egyptian Parties: From Pre-1952 Pluralism to 1977",
            "Analyze constitutional jurisprudence and rights guarantees in Contemporary Egyptian Party Landscape: Post-2011/2013 Dynamics and Proportionality"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ المبادئ الحاكمة للعمل الحزبي: التسامح، قبول الآخر، ونبذ العنف",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ التطور التاريخي للأحزاب بمصر: من التعددية الليبرالية قبل 1952 حتى إعادة التعددية 1977",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ المشهد الحزبي المصري المعاصر: ديناميات ما بعد 2011/2013 والتوازن البرلماني"
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
            questionEn: "What is the primary constitutional principle governing Principles Governing Democratic Party Action?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في المبادئ الحاكمة للعمل الحزبي: التسامح، قبول الآخر، ونبذ العنف؟",
            solutionEn: "Tolerance and acceptance of the other are ethical imperatives ensuring peaceful coexistence between competing political party ideologies.",
            solutionAr: "يمثل التسامح وقبول الآخر ضرورة أخلاقية ودستورية تضمن التعايش السلمي والتنافس الحضاري بين مختلف التيارات والبرامج الحزبية."
          }
        },
        worksheet: {
          id: 'th_civics_ch3_l2_ws',
          titleEn: "Worksheet: Party Functions, Democratic Principles & Historical Evolution in Egypt",
          titleAr: "ورقة عمل: وظائف الأحزاب السياسية، المبادئ الحاكمة، ومسيرة التعددية الحزبية في مصر",
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
    databank: civicsCh3Databank,
    solvedExamples: civicsCh3SolvedExamples,
    exerciseProblems: civicsCh3Exercises
  },
  {
    id: 'th_civics_ch4',
    chapterNumber: 4,
    titleEn: "Political Participation & Electoral Practice: Motives, Systems & National Authority",
    titleAr: "المشاركة السياسية والممارسة الانتخابية: الدوافع، النظم والهيئة الوطنية",
    descriptionEn: "Concept of political participation, motives and levels, electoral systems, National Elections Authority competencies, and ballot integrity guarantees.",
    descriptionAr: "مفهوم المشاركة السياسية ودوافعها ومستوياتها، النظم الانتخابية، واختصاصات الهيئة الوطنية للانتخابات وضمانات نزاهة الاقتراع.",
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
        id: 'th_civics_ch4_l1',
        titleEn: "Political Participation: Concepts, Multi-Dimensional Drivers & Participation Hierarchy",
        titleAr: "المشاركة السياسية: المفهوم الدستوري، الدوافع المتعددة، ومستويات الانخراط المدني",
        summaryEn: "Civic duty of participation under Article 87, psychological, social, and political motives, and hierarchical levels from passive media consumption to elective candidacy.",
        summaryAr: "المشاركة السياسية كواجب وطني بالمادة 87، الدوافع النفسية والاجتماعية والوطنية، ومستويات السلم التشاركي من المتابعة السلبية حتى الترشح للمناصب النيابية.",
        theoryContentEn: "### 1. Concept and Constitutional Value of Political Participation\n- **Fundamental Principle:** Political participation is the voluntary civic activity through which citizens influence the selection of leaders and public decision-making.\n- **Institutional Impact:** Active political participation legitimizes democratic institutions, strengthens social stability, and promotes responsive governance.\n- **Constitutional Perspective:** Article 87 of the Egyptian Constitution designates participation in public life as a national duty, guaranteeing the right to vote, run for office, and express opinions in referendums.\n\n### 2. Motives for Political Participation: Psychological, Social, and Political Drivers\n- **Statutory Framework:** Psychological motives stem from the citizen’s desire for self-realization, civic efficacy, and a tangible sense of individual value in society.\n- **Democratic Dynamic:** Social motives arise from the need to address community challenges, defend shared neighborhood/labor interests, and promote public welfare.\n- **High-Order Synthesis:** Political motives represent conscious civic patriotism: exercising constitutional rights, defending sovereignty, and consolidating democratic rule of law.\n\n### 3. Hierarchy of Political Participation: From Passive Observation to Public Office\n- **Normative Foundation:** The lowest level of political participation consists of passive interest, such as following political news and civic public events.\n- **Judicial Analysis:** The intermediate level entails active discourse: engaging in political debates, joining civic associations, and participating in polling and referendums.\n- **Advanced Jurisprudence:** The highest level involves dedicated political activism: seeking elective public office, leading party formations, and directly shaping state policy.",
        theoryContentAr: "### ١. مفهوم المشاركة السياسية وقيمتها الدستورية في بناء الدولة الديمقراطية\n- **المنطلق التأسيسي:** المشاركة السياسية هي الأنشطة الإيجابية والتطوعية التي يمارسها المواطنون للتأثير في صنع القرارات وتحديد السياسات واختيار القيادات السياسية.\n- **الأثر المؤسسي:** تمنح المشاركة السياسية النشطة المؤسساتِ الدستوريةَ شرعيتها الشعبية، وتعزز الاستقرار المجتمعي، وتجعل القرارات الحكومية معبرة عن تطلعات المواطنين.\n- **الرؤية الدستورية العليا:** تؤكد المادة 87 من الدستور المصري أن مشاركة المواطن في الحياة العامة واجب وطني، وتكفل الدولة حق الانتخاب والترشح وإبداء الرأي في الاستفتاءات بحياد ونزاهة.\n\n### ٢. دوافع المشاركة السياسية: النفسية، الاجتماعية، والسياسية الوطنية\n- **الإطار التشريعي:** تنبع الدوافع النفسية للمشاركة السياسية من حاجة الفرد لإثبات ذاته وشعوره بالفاعلية والتأثير وقيمته في المجتمع كشريك في صناعة القرار.\n- **الديناميات الديمقراطية:** تنشأ الدوافع الاجتماعية من الرغبة في خدمة قضايا المجتمع المحلي، وحل مشكلات الحي والبيئة، والدفاع عن المصالح النقابية والفئوية المشتركة.\n- **التحليل التطبيقي:** تمثل الدوافع السياسية قمة الوعي الوطني؛ حيث يمارس المواطن حقوقه الدستورية حفاظاً على أمن الوطن، وتطويراً لمنظومة الحكم الرشيد وصناديق الديمقراطية.\n\n### ٣. مستويات المشاركة السياسية: من المتابعة والاهتمام إلى التصويت والترشح\n- **الأساس المعياري:** يمثل مستوى الاهتمام والمتابعة السلبية القاعدة العريضة للمشاركة، حيث يكتفي المواطن بمتابعة الأخبار والبرامج والشؤون السياسية العامة.\n- **الرقابة القضائية:** يشمل المستوى المتوسط المشاركة الإيجابية في النقاشات، والتصويت الدوري في الانتخابات والاستفتاءات، والعضوية في الأحزاب ومنظمات المجتمع المدني.\n- **آفاق الفقه المعاصر:** يمثل قمة هرم المشاركة الانخراطُ المباشر في الترشح للانتخابات البرلمانية والمحلية، وقيادة الكوادر الحزبية، وتولي المسؤوليات والوظائف القيادية في الدولة.",
        formulas: [
          {
            labelEn: "Concept and Constitutional Value of Political Participation",
            labelAr: "مفهوم المشاركة السياسية وقيمتها الدستورية في بناء الدولة الديمقراطية",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "Motives for Political Participation: Psychological, Social, and Political Drivers",
            labelAr: "دوافع المشاركة السياسية: النفسية، الاجتماعية، والسياسية الوطنية",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Hierarchy of Political Participation: From Passive Observation to Public Office",
            labelAr: "مستويات المشاركة السياسية: من المتابعة والاهتمام إلى التصويت والترشح",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 National Civics & Constitution',
          bookTitleAr: 'كتاب التربية الوطنية والدستور الرسمي - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-CIV-CH04-L1',
          pageRange: '5-25'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Political Participation: Concepts, Multi-Dimensional Drivers & Participation Hierarchy",
          titleAr: "خطة الدرس التوجيهية: المشاركة السياسية: المفهوم الدستوري، الدوافع المتعددة، ومستويات الانخراط المدني",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-CIV-CH04-L1',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Concept and Constitutional Value of Political Participation",
            "Evaluate institutional checks, balances, and statutory limits in Motives for Political Participation: Psychological, Social, and Political Drivers",
            "Analyze constitutional jurisprudence and rights guarantees in Hierarchy of Political Participation: From Passive Observation to Public Office"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ مفهوم المشاركة السياسية وقيمتها الدستورية في بناء الدولة الديمقراطية",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ دوافع المشاركة السياسية: النفسية، الاجتماعية، والسياسية الوطنية",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ مستويات المشاركة السياسية: من المتابعة والاهتمام إلى التصويت والترشح"
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
            questionEn: "What is the primary constitutional principle governing Concept and Constitutional Value of Political Participation?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في مفهوم المشاركة السياسية وقيمتها الدستورية في بناء الدولة الديمقراطية؟",
            solutionEn: "Political participation is the voluntary civic activity through which citizens influence the selection of leaders and public decision-making.",
            solutionAr: "المشاركة السياسية هي الأنشطة الإيجابية والتطوعية التي يمارسها المواطنون للتأثير في صنع القرارات وتحديد السياسات واختيار القيادات السياسية."
          }
        },
        worksheet: {
          id: 'th_civics_ch4_l1_ws',
          titleEn: "Worksheet: Political Participation: Concepts, Multi-Dimensional Drivers & Participation Hierarchy",
          titleAr: "ورقة عمل: المشاركة السياسية: المفهوم الدستوري، الدوافع المتعددة، ومستويات الانخراط المدني",
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
        id: 'th_civics_ch4_l2',
        titleEn: "Electoral Systems, The National Elections Authority & Guarantees of Judicial Oversight",
        titleAr: "النظم الانتخابية، الهيئة الوطنية للانتخابات، وضمانات الإشراف القضائي النزيه",
        summaryEn: "Individual vs list systems (absolute closed lists and quota representation), NEA judicial composition, voter database verification, and Article 210 judicial oversight.",
        summaryAr: "النظام الفردي والقوائم المطلقة المغلقة وكوتة الفئات الدستورية، تشكيل الهيئة الوطنية للانتخابات من كبار القضاة، وضمانات الإشراف القضائي الكامل بنص المادة 210.",
        theoryContentEn: "### 1. Electoral Systems: Single-Member Majoritarian vs. Proportional Party List Systems\n- **Fundamental Principle:** In the single-member individual system, the candidate who receives the required majority of valid votes in a geographic constituency wins the seat.\n- **Institutional Impact:** The closed absolute list system awards all constituency seats to the single party or coalition list that wins an absolute majority (50% + 1) of valid votes.\n- **Constitutional Perspective:** Egypt adopts a balanced mixed system: 50% of parliamentary seats are allocated via closed absolute lists (ensuring constitutional minority/women quotas) and 50% via individual single-member races.\n\n### 2. The National Elections Authority: Independence, Composition, and Constitutional Mandate\n- **Statutory Framework:** The National Elections Authority is an independent public body exclusively responsible for administering all presidential, parliamentary, and local elections and referendums.\n- **Democratic Dynamic:** The Authority’s board consists entirely of senior judges selected from the Court of Cassation, Council of State, State Council, and State Lawsuits Authority.\n- **High-Order Synthesis:** Article 210 of the Egyptian Constitution establishes mandatory judicial supervision over all ballot voting and counting by judges, ensuring total electoral integrity.\n\n### 3. Operational Lifecycle of Elections: From Voter Registration to Judicial Appeals\n- **Normative Foundation:** The electoral process commences with updating and auditing the national voter database to guarantee every eligible citizen’s right to vote.\n- **Judicial Analysis:** Subsequent stages include candidate vetting, monitoring regulated campaign spending and media equality, and orchestrating in-person secret balloting.\n- **Advanced Jurisprudence:** Election results remain provisional until all judicial appeals are resolved by the Supreme Administrative Court (or Court of Cassation), whose rulings are final and binding.",
        theoryContentAr: "### ١. النظم الانتخابية: النظام الفردي بالأغلبية ونظام القوائم الحزبية (المغلقة والنسبية)\n- **المنطلق التأسيسي:** في النظام الفردي، يفوز بمقعد الدائرة المرشح الذي يحصل على الأغلبية المطلوبة من الأصوات الصحيحة للناخبين في دائرته الانتخابية.\n- **الأثر المؤسسي:** في نظام القائمة المطلقة المغلقة، تفوز القائمة التي تحصل على الأغلبية المطلقة (50% + 1) من الأصوات بكافة مقاعد الدائرة دون تقسيم نسبي.\n- **الرؤية الدستورية العليا:** يتبنى النظام الانتخابي المصري نموذجاً مختلطاً متوازناً يخصص 50% من مقاعد البرلمان للقوائم المطلقة المغلقة (لضمان كوتة المرأة والشباب)، و50% للنظام الفردي المفتوح.\n\n### ٢. الهيئة الوطنية للانتخابات بمصر: الاستقلالية، التشكيل القضائي والاختصاصات\n- **الإطار التشريعي:** الهيئة الوطنية للانتخابات هي هيئة مستقلة تختص دون غيرها بإدارة الاستفتاءات والانتخابات الرئاسية والنيابية والمحلية في مصر إدارة كاملة.\n- **الديناميات الديمقراطية:** يُشكل مجلس إدارة الهيئة حصراً من عشرة قضاة من كبار رجال القضاء يمثلون محكمة النقض ومجلس الدولة وهيئة قضايا الدولة والنيابة الإدارية لضمان الحيدة التامة.\n- **التحليل التطبيقي:** توجب المادة 210 من الدستور إشراف أعضاء الهيئات القضائية الكامل على لجان الاقتراع والفرز وإعلان الحصر العددي للأصوات، كضمانة مطلقة للنزاهة والشفافية.\n\n### ٣. العملية الانتخابية: من قاعدة بيانات الناخبين والترشح حتى الفرز والطعون القضائية\n- **الأساس المعياري:** تبدأ العملية الانتخابية بتحديث وتدقيق قاعدة بيانات الناخبين استناداً للرقم القومي لضمان حق كل مواطن بلغ 18 عاماً في الإدلاء بصوته.\n- **الرقابة القضائية:** تتوالى مراحل الانتخابات عبر فحص أوراق المرشحين، تحديد فترات وضوابط الدعاية، مراقبة سقف التبرعات، وإجراء الاقتراع السري المباشر تحت حماية القانون.\n- **آفاق الفقه المعاصر:** تتوج العملية الانتخابية بفرز الأصوات وإعلان النتائج، مع كفالة حق الطعن القضائي أمام المحكمة الإدارية العليا ومحكمة النقض للفصل في صحة العضوية بحكم بات.",
        formulas: [
          {
            labelEn: "Electoral Systems: Single-Member Majoritarian vs. Proportional Party List Systems",
            labelAr: "النظم الانتخابية: النظام الفردي بالأغلبية ونظام القوائم الحزبية (المغلقة والنسبية)",
            latex: "\\text{Constitutional Article } 1: \\text{Rule of Law}"
          },
          {
            labelEn: "The National Elections Authority: Independence, Composition, and Constitutional Mandate",
            labelAr: "الهيئة الوطنية للانتخابات بمصر: الاستقلالية، التشكيل القضائي والاختصاصات",
            latex: "\\text{Constitutional Article } 2: \\text{Rule of Law}"
          },
          {
            labelEn: "Operational Lifecycle of Elections: From Voter Registration to Judicial Appeals",
            labelAr: "العملية الانتخابية: من قاعدة بيانات الناخبين والترشح حتى الفرز والطعون القضائية",
            latex: "\\text{Constitutional Article } 3: \\text{Rule of Law}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 National Civics & Constitution',
          bookTitleAr: 'كتاب التربية الوطنية والدستور الرسمي - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-CIV-CH04-L2',
          pageRange: '26-48'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Electoral Systems, The National Elections Authority & Guarantees of Judicial Oversight",
          titleAr: "خطة الدرس التوجيهية: النظم الانتخابية، الهيئة الوطنية للانتخابات، وضمانات الإشراف القضائي النزيه",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-CIV-CH04-L2',
          bloomsObjectivesEn: [
            "Synthesize foundational principles of Electoral Systems: Single-Member Majoritarian vs. Proportional Party List Systems",
            "Evaluate institutional checks, balances, and statutory limits in The National Elections Authority: Independence, Composition, and Constitutional Mandate",
            "Analyze constitutional jurisprudence and rights guarantees in Operational Lifecycle of Elections: From Voter Registration to Judicial Appeals"
          ],
          bloomsObjectivesAr: [
            "استيعاب المبادئ الدستورية والقانونية لـ النظم الانتخابية: النظام الفردي بالأغلبية ونظام القوائم الحزبية (المغلقة والنسبية)",
            "تقييم أدوار السلطات الدستورية وضوابط التوازن المؤسسي لـ الهيئة الوطنية للانتخابات بمصر: الاستقلالية، التشكيل القضائي والاختصاصات",
            "تحليل أحكام المحكمة الدستورية وضمانات الحقوق والحريات لـ العملية الانتخابية: من قاعدة بيانات الناخبين والترشح حتى الفرز والطعون القضائية"
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
            questionEn: "What is the primary constitutional principle governing Electoral Systems: Single-Member Majoritarian vs. Proportional Party List Systems?",
            questionAr: "ما هو المبدأ الدستوري الحاكم في النظم الانتخابية: النظام الفردي بالأغلبية ونظام القوائم الحزبية (المغلقة والنسبية)؟",
            solutionEn: "In the single-member individual system, the candidate who receives the required majority of valid votes in a geographic constituency wins the seat.",
            solutionAr: "في النظام الفردي، يفوز بمقعد الدائرة المرشح الذي يحصل على الأغلبية المطلوبة من الأصوات الصحيحة للناخبين في دائرته الانتخابية."
          }
        },
        worksheet: {
          id: 'th_civics_ch4_l2_ws',
          titleEn: "Worksheet: Electoral Systems, The National Elections Authority & Guarantees of Judicial Oversight",
          titleAr: "ورقة عمل: النظم الانتخابية، الهيئة الوطنية للانتخابات، وضمانات الإشراف القضائي النزيه",
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
    databank: civicsCh4Databank,
    solvedExamples: civicsCh4SolvedExamples,
    exerciseProblems: civicsCh4Exercises
  }
];

export const thanaweyaCivicsBranch: Branch = {
  id: 'thanaweya_civics',
  titleEn: "Thanaweya Amma: National Civics & Constitutional Studies",
  titleAr: "الثانوية العامة: التربية الوطنية، الدستور والمواطنة",
  categoryEn: "National Core Subject",
  categoryAr: "المادة القومية الأساسية للثانوية العامة",
  iconName: 'Scale',
  colorGradient: 'from-emerald-950 via-teal-900 to-slate-900',
  chapters
};
