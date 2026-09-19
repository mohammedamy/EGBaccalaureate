import type { Branch, Chapter } from '../types/curriculum';
import { egBacSpanishCh1Databank } from './databanks/egbac/egBacSpanishCh1Databank';
import { egBacSpanishCh1SolvedExamples, egBacSpanishCh1Exercises } from './textbook/egbac/egBacSpanishCh1Textbook';
import { egBacSpanishCh2Databank } from './databanks/egbac/egBacSpanishCh2Databank';
import { egBacSpanishCh2SolvedExamples, egBacSpanishCh2Exercises } from './textbook/egbac/egBacSpanishCh2Textbook';
import { egBacSpanishCh3Databank } from './databanks/egbac/egBacSpanishCh3Databank';
import { egBacSpanishCh3SolvedExamples, egBacSpanishCh3Exercises } from './textbook/egbac/egBacSpanishCh3Textbook';
import { egBacSpanishCh4Databank } from './databanks/egbac/egBacSpanishCh4Databank';
import { egBacSpanishCh4SolvedExamples, egBacSpanishCh4Exercises } from './textbook/egbac/egBacSpanishCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'egbac_es_ch1',
    chapterNumber: 1,
    titleEn: "Unidad 1: Sintaxis Académica, Discurso Formal y Estructuras Universitarias Hispanas",
    titleAr: "الوحدة الأولى: التركيب اللغوي الأكاديمي، الخطاب الرسمي والمؤسسات الجامعية",
    descriptionEn: "Formal academic discourse, causal and consecutive connectors (puesto que, ya que, dado que), university degrees and scholarship structures in Spain and Latin America.",
    descriptionAr: "الخطاب الأكاديمي الرسمي، الروابط السببية والاستنتاجية المتقدمة (puesto que, ya que, dado que)، ونظام التعليم الجامعي والساعات المعتمدة في إسبانيا والعالم الإسباني.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'spanish_language_lab',
        titleEn: "Spanish Grammar & Future Projects Studio",
        titleAr: "استوديو قواعد الإسبانية والمشاريع المستقبلية",
        descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_es_ch1_l1',
        titleEn: "Estructuras del Discurso Académico Formal y Registros Universitarios Hispanos",
        titleAr: "بنية الخطاب الأكاديمي الرسمي والأنماط الجامعية في العالم الإسباني",
        summaryEn: "Hispanic academic syntax prioritizes formal nominalizations, complex clause subordination, and objective third-person perspectives.",
        summaryAr: "تعتمد الصياغة الأكاديمية في الإسبانية على التراكيب الاسمية الرسمية، الربط المعقد بين الجمل، واعتماد منظور الغائب المحايد.",
        theoryContentEn: "### 1. Estructuras del Discurso Académico Formal y Registros Universitarios Hispanos\n- **Core Rule:** Hispanic academic syntax prioritizes formal nominalizations, complex clause subordination, and objective third-person perspectives.\n- **Syntactic Structure:** Formal research essays employ passive and impersonal structures with \"se\" (se observa que, se concluye que) to ensure methodological neutrality.\n- **Analytical Perspective:** Synthesizing literary and scientific abstracts requires adherence to European academic citation styles and precise scholarly terminology.\n\n### 2. Conectores Causales Formales en el Discurso Académico: Puesto que, Ya que y Dado que\n- **Linguistic Principle:** Formal causal connectors such as \"puesto que\", \"ya que\", and \"dado que\" indicate proven justifications and govern the indicative mood.\n- **Grammar Application:** The connector \"ya que\" is frequently placed at the opening of an explanatory clause to articulate a mutually acknowledged premise.\n- **Advanced Context:** Contrasting formal connectors (puesto que, dado que) with basic colloquial conjunctions (porque) demonstrates high-level stylistic maturity.\n\n### 3. Conectores Consecutivos y de Conclusión: Por consiguiente, Por lo tanto y De ahí que (+ Subjuntivo)\n- **Communicative Function:** Consecutive connectors express logical consequences: \"por lo tanto\" and \"por consiguiente\" introduce deductive outcomes in the indicative.\n- **Usage Matrix:** The connective locution \"de ahí que\" strictly requires the subjunctive mood because it highlights the rationale behind a recognized phenomenon (De ahí que sea necesario...).\n- **Exam Strategy:** Mastery of \"de ahí que + subjuntivo\" vs. \"por lo tanto + indicativo\" represents an essential benchmark in advanced linguistic certification.",
        theoryContentAr: "### ١. بنية الخطاب الأكاديمي الرسمي والأنماط الجامعية في العالم الإسباني\n- **القاعدة الأساسية:** تعتمد الصياغة الأكاديمية في الإسبانية على التراكيب الاسمية الرسمية، الربط المعقد بين الجمل، واعتماد منظور الغائب المحايد.\n- **التركيب النحوي:** تستخدم المقالات والبحوث الأكاديمية صيغ المبني للمجهول والضمائر غير المحددة مع se (يُلاحظ أن se observa، يُستنتج أن se concluye) لضمان الموضوعية.\n- **التحليل المتقدم:** تتطلب صياغة الملخصات العلمية والأدبية الالتزام بقواعد التوثيق والرجوع إلى المصادر وفق المعايير الجامعية الدولية.\n\n### ٢. الروابط السببية الرسمية في الخطاب الأكاديمي: puesto que و ya que و dado que\n- **المبدأ اللغوي:** توضح الروابط السببية الرسمية مثل puesto que و ya que و dado que العلة والأسباب المثبتة وتلزم استخدام صيغة اليقين (Indicativo).\n- **التطبيق الإعرابي:** تأتي الأداة ya que في مقدمة الجمل التوضيحية لتقديم مقدمة منطقية متفق عليها يترتب عليها الحكم التالي.\n- **السياق النموذجي:** يعكس التفريق الدقيق بين الروابط الأكاديمية الرسمية (puesto que, dado que) والأداة الشائعة (porque) نضجاً لغوياً وأسلوبياً راقياً.\n\n### ٣. الروابط الاستنتاجية والتعقيبية: por consiguiente و por lo tanto و de ahí que (+ صيغة الشك)\n- **الوظيفة التواصلية:** تعبر الروابط الاستنتاجية عن النتيجة المنطقية الحتمية: مثل por lo tanto و por consiguiente اللتين تأخذان صيغة Indicativo.\n- **مصفوفة الاستخدام:** تتطلب العبارة الاستنتاجية de ahí que وجوب استخدام صيغة الشك (Subjuntivo) لأنها تفسر المنطلق وراء ظاهرة مسلم بها (ومن هنا كان ضرورياً de ahí que sea).\n- **استراتيجية الامتحان:** يعد التمييز النحوي بين de ahí que (+ subjuntivo) و por lo tanto (+ indicativo) معياراً رفيعاً في اختبارات الكفاءة المتقدمة (DELE B2).",
        formulas: [
          {
            labelEn: "Estructuras del Discurso Académico Formal y Registros Universitarios Hispanos",
            labelAr: "بنية الخطاب الأكاديمي الرسمي والأنماط الجامعية في العالم الإسباني",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Conectores Causales Formales en el Discurso Académico: Puesto que, Ya que y Dado que",
            labelAr: "الروابط السببية الرسمية في الخطاب الأكاديمي: puesto que و ya que و dado que",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Conectores Consecutivos y de Conclusión: Por consiguiente, Por lo tanto y De ahí que (+ Subjuntivo)",
            labelAr: "الروابط الاستنتاجية والتعقيبية: por consiguiente و por lo tanto و de ahí que (+ صيغة الشك)",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Spanish Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية للغة الإسبانية المتقدمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-ES-CH01-L1',
          pageRange: '5-24'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Estructuras del Discurso Académico Formal y Registros Universitarios Hispanos",
          titleAr: "خطة الدرس التوجيهية: بنية الخطاب الأكاديمي الرسمي والأنماط الجامعية في العالم الإسباني",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-ES-CH01-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Estructuras del Discurso Académico Formal y Registros Universitarios Hispanos",
            "Distinguish morpho-syntactic nuances in Conectores Causales Formales en el Discurso Académico: Puesto que, Ya que y Dado que",
            "Apply communicative strategies in Conectores Consecutivos y de Conclusión: Por consiguiente, Por lo tanto y De ahí que (+ Subjuntivo)"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ بنية الخطاب الأكاديمي الرسمي والأنماط الجامعية في العالم الإسباني",
            "التمييز بين الفروق الصرفية والتركيبية في الروابط السببية الرسمية في الخطاب الأكاديمي: puesto que و ya que و dado que",
            "تطبيق مهارات التواصل الشفهي والكتابي في الروابط الاستنتاجية والتعقيبية: por consiguiente و por lo tanto و de ahí que (+ صيغة الشك)"
          ],
          prerequisitesEn: ['Basic Spanish Grammar', 'A1/A2 Spanish Vocabulary', 'General Secondary Language Skills'],
          prerequisitesAr: ['قواعد الإسبانية للمستوى التأسيسي', 'المفردات العامة A1/A2', 'المهارات اللغوية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'El Futuro Simple', definition: 'Tense expressing future projects, promises, and present hypotheses' },
            { term: 'El Subjuntivo', definition: 'Mood expressing doubt, emotion, influence, and counterfactual states' }
          ],
          keyVocabularyAr: [
            { term: 'المستقبل البسيط', definition: 'زمن يدل على النوايا والمشاريع المستقبلية والوعود والتخمين في الحاضر' },
            { term: 'صيغة الشك والرجاء (Subjuntivo)', definition: 'صيغة تدل على الرجاء، الرغبة، الشك، والانفعال النفسي في الجمل التابعة' }
          ],
          teachingPacing: [
            { phaseEn: 'Warm-up & Situational Context', phaseAr: 'التهيئة واستعراض الموقف اللغوي', duration: '15 min', activitiesEn: 'Listening dialogue review and phonetic drills', activitiesAr: 'استماع للحوار ونطق الكلمات المفتاحية' },
            { phaseEn: 'Grammar Deep Dive & Practice', phaseAr: 'التحليل النحوي والتطبيق العملي', duration: '75 min', activitiesEn: 'Conjugation rules, solved problems, and databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating SER and ESTAR or confusing POR with PARA in duration versus destination'
          ],
          commonMisconceptionsAr: [
            'الخلط بين استخدامات ser و estar أو الخلط بين حرفي الجر por و para في العلة والهدف'
          ],
          differentiationEn: {
            struggling: 'Provide verb conjugation charts and vocabulary visual flashcards.',
            advanced: 'Assign comparative subjunctive translation exercises and DELE reading tasks.'
          },
          differentiationAr: {
            struggling: 'توفير جداول تصريف الأفعال وبطاقات مفردات مصورة إرشادية.',
            advanced: 'تكليف بتدريبات ترجمة متقدمة ونصوص فهم مقروء بمستوى DELE B2.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring grammar and situational skills.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من 4 خيارات لقياس استيعاب القواعد والمواقف الوزارية.',
          exitTicketQuestion: {
            questionEn: "What is the core grammatical rule governing Estructuras del Discurso Académico Formal y Registros Universitarios Hispanos?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ بنية الخطاب الأكاديمي الرسمي والأنماط الجامعية في العالم الإسباني؟",
            solutionEn: "Hispanic academic syntax prioritizes formal nominalizations, complex clause subordination, and objective third-person perspectives.",
            solutionAr: "تعتمد الصياغة الأكاديمية في الإسبانية على التراكيب الاسمية الرسمية، الربط المعقد بين الجمل، واعتماد منظور الغائب المحايد."
          }
        },
        worksheet: {
          id: 'egbac_es_ch1_l1_ws',
          titleEn: "Worksheet: Estructuras del Discurso Académico Formal y Registros Universitarios Hispanos",
          titleAr: "ورقة عمل: بنية الخطاب الأكاديمي الرسمي والأنماط الجامعية في العالم الإسباني",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق لغوي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'spanish_language_lab',
          titleEn: "Spanish Grammar & Future Projects Studio",
          titleAr: "استوديو قواعد الإسبانية والمشاريع المستقبلية",
          descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
        }
      },
      {
        id: 'egbac_es_ch1_l2',
        titleEn: "El Sistema Universitario en el Espacio Europeo de Educación Superior (EEES) y América Latina",
        titleAr: "النظام الجامعي في فضاء التعليم العالي الأوروبي وأمريكا اللاتينية",
        summaryEn: "The European Higher Education Area (EEES) structures university degrees into Grado (4 years), Máster (1-2 years), and Doctorado.",
        summaryAr: "ينظم فضاء التعليم العالي الأوروبي (EEES) الدرجات الجامعية إلى: الليسانس/البكالوريوس Grado، الماجستير Máster، والدكتوراه Doctorado.",
        theoryContentEn: "### 1. El Sistema Universitario en el Espacio Europeo de Educación Superior (EEES) y América Latina\n- **Core Rule:** The European Higher Education Area (EEES) structures university degrees into Grado (4 years), Máster (1-2 years), and Doctorado.\n- **Syntactic Structure:** Academic progress is measured using ECTS credits (Sistema Europeo de Transferencia de Créditos), where one credit represents 25-30 hours of total study.\n- **Analytical Perspective:** Comparative analysis highlights mobility programs such as Erasmus+ and bilateral academic agreements connecting Spanish and Latin American universities.\n\n### 2. Sintaxis de Cortesía y Fórmulas Epistolares en la Correspondencia Oficial\n- **Linguistic Principle:** Official letters begin with formal greetings such as \"Estimado/a señor/a\" or \"Muy señor mío\" and address the recipient as \"usted\" or \"ustedes\".\n- **Grammar Application:** Closing formulas reflect strict administrative etiquette: \"Atentamente\", \"Le saluda atentamente\", or \"Quedo a su entera disposición\".\n- **Advanced Context:** Applying courteous conditional forms (le agradecería que me informara) softens requests while preserving formal institutional deference.\n\n### 3. Diversidad Lingüística y Dialectología del Español: Peninsular vs. Hispanoamericano\n- **Communicative Function:** Spanish encompasses notable phonetic variations, prominently the distinction between [θ] and [s] in northern Spain versus \"seseo\" across Latin America.\n- **Usage Matrix:** Pronominal dynamics include \"voseo\" (use of \"vos\" instead of \"tú\") in the Southern Cone (Argentina, Uruguay) and Central America.\n- **Exam Strategy:** Linguistic unity is preserved by the Real Academia Española (RAE) through consensus pan-Hispanic norm policies (política lingüística panhispánica).",
        theoryContentAr: "### ١. النظام الجامعي في فضاء التعليم العالي الأوروبي وأمريكا اللاتينية\n- **القاعدة الأساسية:** ينظم فضاء التعليم العالي الأوروبي (EEES) الدرجات الجامعية إلى: الليسانس/البكالوريوس Grado، الماجستير Máster، والدكتوراه Doctorado.\n- **التركيب النحوي:** يقاس التقدم الدراسي بنظام الساعات الأوروبية المعتمدة (ECTS)، حيث تعادل الساعة الواحدة نحو 25 إلى 30 ساعة عمل دراسي شامل.\n- **التحليل المتقدم:** يبرز التحليل المقارن برامج التبادل الطلابي مثل إيراسموس بلس والاتفاقيات الأكاديمية الثنائية التي تربط الجامعات الإسبانية واللاتينية.\n\n### ٢. أساليب اللباقة والمراسلات الرسمية في المخاطبات والخطابات الإدارية\n- **المبدأ اللغوي:** تبدأ المخاطبات الرسمية بعبارات التقدير مثل Estimado/a señor/a أو Muy señor mío وتعتمد ضمير المخاطب الرسمي usted / ustedes.\n- **التطبيق الإعرابي:** تعكس خواتيم الرسائل الرسمية البروتوكول الدبلوماسي: مثل Atentamente (مع فائق الاحترام) أو Quedo a su entera disposición (تحت تصرفكم).\n- **السياق النموذجي:** يساهم استخدام صيغ الشرط اللبقة (le agradecería que...) في تلطيف الطلب مع الاحتفاظ بالوقار الإداري والمؤسسي الرصين.\n\n### ٣. التنوع اللغوي وفقه اللهجات في الإسبانية: الإسبانية الأوروبية مقابل الأمريكية اللاتينية\n- **الوظيفة التواصلية:** تتميز الإسبانية بتنوع لهجي صوتي بارز، وأهمه التمييز بين حرف الثاء والسين في شمال إسبانيا وظاهرة السيسيو seseo الشاملة في أمريكا اللاتينية.\n- **مصفوفة الاستخدام:** تشمل الديناميات الصرفية ظاهرة الفوسيو voseo (استخدام vos بدلاً من tú) في دول المخروط الجنوبي كالأرجنتين وأوروجواي وأمريكا الوسطى.\n- **استراتيجية الامتحان:** تحافظ الأكاديمية الملكية الإسبانية (RAE) على وحدة اللغة العالمية عبر سياسات المعيار اللغوي المشترك بين كافة المجامع الإسبانية.",
        formulas: [
          {
            labelEn: "El Sistema Universitario en el Espacio Europeo de Educación Superior (EEES) y América Latina",
            labelAr: "النظام الجامعي في فضاء التعليم العالي الأوروبي وأمريكا اللاتينية",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Sintaxis de Cortesía y Fórmulas Epistolares en la Correspondencia Oficial",
            labelAr: "أساليب اللباقة والمراسلات الرسمية في المخاطبات والخطابات الإدارية",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Diversidad Lingüística y Dialectología del Español: Peninsular vs. Hispanoamericano",
            labelAr: "التنوع اللغوي وفقه اللهجات في الإسبانية: الإسبانية الأوروبية مقابل الأمريكية اللاتينية",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Spanish Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية للغة الإسبانية المتقدمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-ES-CH01-L2',
          pageRange: '25-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: El Sistema Universitario en el Espacio Europeo de Educación Superior (EEES) y América Latina",
          titleAr: "خطة الدرس التوجيهية: النظام الجامعي في فضاء التعليم العالي الأوروبي وأمريكا اللاتينية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-ES-CH01-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of El Sistema Universitario en el Espacio Europeo de Educación Superior (EEES) y América Latina",
            "Distinguish morpho-syntactic nuances in Sintaxis de Cortesía y Fórmulas Epistolares en la Correspondencia Oficial",
            "Apply communicative strategies in Diversidad Lingüística y Dialectología del Español: Peninsular vs. Hispanoamericano"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ النظام الجامعي في فضاء التعليم العالي الأوروبي وأمريكا اللاتينية",
            "التمييز بين الفروق الصرفية والتركيبية في أساليب اللباقة والمراسلات الرسمية في المخاطبات والخطابات الإدارية",
            "تطبيق مهارات التواصل الشفهي والكتابي في التنوع اللغوي وفقه اللهجات في الإسبانية: الإسبانية الأوروبية مقابل الأمريكية اللاتينية"
          ],
          prerequisitesEn: ['Basic Spanish Grammar', 'A1/A2 Spanish Vocabulary', 'General Secondary Language Skills'],
          prerequisitesAr: ['قواعد الإسبانية للمستوى التأسيسي', 'المفردات العامة A1/A2', 'المهارات اللغوية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'El Futuro Simple', definition: 'Tense expressing future projects, promises, and present hypotheses' },
            { term: 'El Subjuntivo', definition: 'Mood expressing doubt, emotion, influence, and counterfactual states' }
          ],
          keyVocabularyAr: [
            { term: 'المستقبل البسيط', definition: 'زمن يدل على النوايا والمشاريع المستقبلية والوعود والتخمين في الحاضر' },
            { term: 'صيغة الشك والرجاء (Subjuntivo)', definition: 'صيغة تدل على الرجاء، الرغبة، الشك، والانفعال النفسي في الجمل التابعة' }
          ],
          teachingPacing: [
            { phaseEn: 'Warm-up & Situational Context', phaseAr: 'التهيئة واستعراض الموقف اللغوي', duration: '15 min', activitiesEn: 'Listening dialogue review and phonetic drills', activitiesAr: 'استماع للحوار ونطق الكلمات المفتاحية' },
            { phaseEn: 'Grammar Deep Dive & Practice', phaseAr: 'التحليل النحوي والتطبيق العملي', duration: '75 min', activitiesEn: 'Conjugation rules, solved problems, and databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating SER and ESTAR or confusing POR with PARA in duration versus destination'
          ],
          commonMisconceptionsAr: [
            'الخلط بين استخدامات ser و estar أو الخلط بين حرفي الجر por و para في العلة والهدف'
          ],
          differentiationEn: {
            struggling: 'Provide verb conjugation charts and vocabulary visual flashcards.',
            advanced: 'Assign comparative subjunctive translation exercises and DELE reading tasks.'
          },
          differentiationAr: {
            struggling: 'توفير جداول تصريف الأفعال وبطاقات مفردات مصورة إرشادية.',
            advanced: 'تكليف بتدريبات ترجمة متقدمة ونصوص فهم مقروء بمستوى DELE B2.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring grammar and situational skills.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من 4 خيارات لقياس استيعاب القواعد والمواقف الوزارية.',
          exitTicketQuestion: {
            questionEn: "What is the core grammatical rule governing El Sistema Universitario en el Espacio Europeo de Educación Superior (EEES) y América Latina?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ النظام الجامعي في فضاء التعليم العالي الأوروبي وأمريكا اللاتينية؟",
            solutionEn: "The European Higher Education Area (EEES) structures university degrees into Grado (4 years), Máster (1-2 years), and Doctorado.",
            solutionAr: "ينظم فضاء التعليم العالي الأوروبي (EEES) الدرجات الجامعية إلى: الليسانس/البكالوريوس Grado، الماجستير Máster، والدكتوراه Doctorado."
          }
        },
        worksheet: {
          id: 'egbac_es_ch1_l2_ws',
          titleEn: "Worksheet: El Sistema Universitario en el Espacio Europeo de Educación Superior (EEES) y América Latina",
          titleAr: "ورقة عمل: النظام الجامعي في فضاء التعليم العالي الأوروبي وأمريكا اللاتينية",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق لغوي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'spanish_language_lab',
          titleEn: "Spanish Grammar & Future Projects Studio",
          titleAr: "استوديو قواعد الإسبانية والمشاريع المستقبلية",
          descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
        }
      }
    ],
    databank: egBacSpanishCh1Databank,
    solvedExamples: egBacSpanishCh1SolvedExamples,
    exerciseProblems: egBacSpanishCh1Exercises
  },
  {
    id: 'egbac_es_ch2',
    chapterNumber: 2,
    titleEn: "Unidad 2: El Modo Subjuntivo en Oraciones Sustantivas y Expresión de Valoraciones",
    titleAr: "الوحدة الثانية: صيغة الشك والرجاء (Subjuntivo) في الجمل الاسمية وأحكام التقييم",
    descriptionEn: "Present Subjunctive morphology and syntax, subordinate clauses governed by verbs of influence, emotion, doubt, and impersonal evaluations (es necesario que, es injusto que).",
    descriptionAr: "قواعد واشتقاق صيغة الشك (Subjuntivo)، الجمل التابعة المقترنة بأفعال التأثير والرجاء والمشاعر والشك، وصيغ التقييم المجردة (es necesario que, es justo que).",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'spanish_language_lab',
        titleEn: "Personality & Ser vs. Estar Studio",
        titleAr: "استوديو الشخصية والمقارنة بين Ser و Estar",
        descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_es_ch2_l1',
        titleEn: "Morfología y Conjugación del Presente de Subjuntivo: Verbos Regulares y Alternancias",
        titleAr: "صرف واشتقاق صيغة المضارع الشكلي (Presente de Subjuntivo): الأفعال المنتظمة وتغيرات الحركات",
        summaryEn: "The Present Subjunctive swaps conjugation vowels: -ar verbs take -e endings (hable, hables, hable, hablemos, habléis, hablen) while -er/-ir take -a (coma, viva).",
        summaryAr: "تقوم صياغة مضارع الشك على تبادل حروف العلة: تأخذ أفعال ar نهايات الـ e (hable, hables..)، بينما تأخذ أفعال er و ir نهايات الـ a (coma, viva..).",
        theoryContentEn: "### 1. Morfología y Conjugación del Presente de Subjuntivo: Verbos Regulares y Alternancias\n- **Core Rule:** The Present Subjunctive swaps conjugation vowels: -ar verbs take -e endings (hable, hables, hable, hablemos, habléis, hablen) while -er/-ir take -a (coma, viva).\n- **Syntactic Structure:** Verbs with dipthongization in the present indicative maintain the alteration in the subjunctive except in nosotros and vosotros (piense, pienses... pensemos).\n- **Analytical Perspective:** Verbs ending in -ir with stem changes (pedir, dormir, sentir) undergo vowel reductions in nosotros and vosotros (durmamos, sintamos).\n\n### 2. Verbos Irregulares Clave en Presente de Subjuntivo (sea, vaya, tenga, venga, sepa, haya, dé, esté)\n- **Linguistic Principle:** Highly irregular subjunctive forms derive from irregular first-person indicative stems or unique roots: ser -> sea, ir -> vaya, tener -> tenga, saber -> sepa.\n- **Grammar Application:** The auxiliary verb \"haber\" produces the uniform subjunctive form \"haya\" (espero que haya suficiente tiempo).\n- **Advanced Context:** Monosyllabic subjunctive forms \"dé\" (from dar) and \"esté\" (from estar) require graphic accents to avoid homonymic confusion with prepositions.\n\n### 3. Subjuntivo en Oraciones Sustantivas con Verbos de Voluntad, Deseo e Influencia\n- **Communicative Function:** When the subjects of the main and subordinate clauses differ, verbs of wishing govern the subjunctive (Quiero que tú estudies / Te aconsejo que vayas).\n- **Usage Matrix:** If both clauses share the identical grammatical subject, the sentence strictly requires an infinitive without \"que\" (Quiero estudiar / Deseo viajar).\n- **Exam Strategy:** Verbs of ordering, advising, and prohibiting (ordenar, prohibir, aconsejar) require the subjunctive even with indirect object pronouns (Te prohíbo que fumes).",
        theoryContentAr: "### ١. صرف واشتقاق صيغة المضارع الشكلي (Presente de Subjuntivo): الأفعال المنتظمة وتغيرات الحركات\n- **القاعدة الأساسية:** تقوم صياغة مضارع الشك على تبادل حروف العلة: تأخذ أفعال ar نهايات الـ e (hable, hables..)، بينما تأخذ أفعال er و ir نهايات الـ a (coma, viva..).\n- **التركيب النحوي:** تحافظ الأفعال ذات الانقلاب الحركي (e->ie, o->ue) على انقلابها في الشك ما عدا ضميري الجمع nosotros و vosotros.\n- **التحليل المتقدم:** تنفرد أفعال المجموعة الثالثة ir ذات التغير الجذري (مثل dormir و sentir) بتغيير الحرف الصوتي أيضاً مع nosotros و vosotros (durmamos, sintamos).\n\n### ٢. الأفعال الشاذة الرئيسية في مضارع الشك (sea, vaya, tenga, venga, sepa, haya, dé, esté)\n- **المبدأ اللغوي:** تشتق صيغ الشك الشاذة من جذر المتكلم في المضارع أو من أصول تاريخية فريدة: ser تصبح sea، ir تصبح vaya، tener تصبح tenga، saber تصبح sepa.\n- **التطبيق الإعرابي:** ينتج فعل haber المساعد صيغة الشك المنتظمة haya (آمل أن يتوفر وقت كافٍ espero que haya tiempo).\n- **السياق النموذجي:** تتطلب صيغتا الشك dé (من dar) و esté (من estar) نبرة مكتوبة إجبارية للتمييز الصوتي عن حرف الجر de وضمير الإشارة este.\n\n### ٣. صيغة الشك في الجمل الاسمية المقترنة بأفعال الإرادة والرجاء والتأثير\n- **الوظيفة التواصلية:** عند اختلاف فاعل الجملة الرئيسية عن فاعل الجملة التابعة، تفرض أفعال الإرادة والطلب استخدام صيغة الشك (أريدك أن تدرس Quiero que tú estudies).\n- **مصفوفة الاستخدام:** إذا اتحد فاعل الجملتين، يجب وجوباً استخدام صيغة المصدر مباشرة دون رابط que (أريد أن أدرس Quiero estudiar وليس Quiero que yo estudie).\n- **استراتيجية الامتحان:** تفرض أفعال الأمر والنهي والنصح (prohibir, aconsejar) صيغة الشك وجوباً في الجملة الفرعية حتى مع وجود ضمير مفعول غير مباشر.",
        formulas: [
          {
            labelEn: "Morfología y Conjugación del Presente de Subjuntivo: Verbos Regulares y Alternancias",
            labelAr: "صرف واشتقاق صيغة المضارع الشكلي (Presente de Subjuntivo): الأفعال المنتظمة وتغيرات الحركات",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Verbos Irregulares Clave en Presente de Subjuntivo (sea, vaya, tenga, venga, sepa, haya, dé, esté)",
            labelAr: "الأفعال الشاذة الرئيسية في مضارع الشك (sea, vaya, tenga, venga, sepa, haya, dé, esté)",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Subjuntivo en Oraciones Sustantivas con Verbos de Voluntad, Deseo e Influencia",
            labelAr: "صيغة الشك في الجمل الاسمية المقترنة بأفعال الإرادة والرجاء والتأثير",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Spanish Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية للغة الإسبانية المتقدمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-ES-CH02-L1',
          pageRange: '5-24'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Morfología y Conjugación del Presente de Subjuntivo: Verbos Regulares y Alternancias",
          titleAr: "خطة الدرس التوجيهية: صرف واشتقاق صيغة المضارع الشكلي (Presente de Subjuntivo): الأفعال المنتظمة وتغيرات الحركات",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-ES-CH02-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Morfología y Conjugación del Presente de Subjuntivo: Verbos Regulares y Alternancias",
            "Distinguish morpho-syntactic nuances in Verbos Irregulares Clave en Presente de Subjuntivo (sea, vaya, tenga, venga, sepa, haya, dé, esté)",
            "Apply communicative strategies in Subjuntivo en Oraciones Sustantivas con Verbos de Voluntad, Deseo e Influencia"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ صرف واشتقاق صيغة المضارع الشكلي (Presente de Subjuntivo): الأفعال المنتظمة وتغيرات الحركات",
            "التمييز بين الفروق الصرفية والتركيبية في الأفعال الشاذة الرئيسية في مضارع الشك (sea, vaya, tenga, venga, sepa, haya, dé, esté)",
            "تطبيق مهارات التواصل الشفهي والكتابي في صيغة الشك في الجمل الاسمية المقترنة بأفعال الإرادة والرجاء والتأثير"
          ],
          prerequisitesEn: ['Basic Spanish Grammar', 'A1/A2 Spanish Vocabulary', 'General Secondary Language Skills'],
          prerequisitesAr: ['قواعد الإسبانية للمستوى التأسيسي', 'المفردات العامة A1/A2', 'المهارات اللغوية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'El Futuro Simple', definition: 'Tense expressing future projects, promises, and present hypotheses' },
            { term: 'El Subjuntivo', definition: 'Mood expressing doubt, emotion, influence, and counterfactual states' }
          ],
          keyVocabularyAr: [
            { term: 'المستقبل البسيط', definition: 'زمن يدل على النوايا والمشاريع المستقبلية والوعود والتخمين في الحاضر' },
            { term: 'صيغة الشك والرجاء (Subjuntivo)', definition: 'صيغة تدل على الرجاء، الرغبة، الشك، والانفعال النفسي في الجمل التابعة' }
          ],
          teachingPacing: [
            { phaseEn: 'Warm-up & Situational Context', phaseAr: 'التهيئة واستعراض الموقف اللغوي', duration: '15 min', activitiesEn: 'Listening dialogue review and phonetic drills', activitiesAr: 'استماع للحوار ونطق الكلمات المفتاحية' },
            { phaseEn: 'Grammar Deep Dive & Practice', phaseAr: 'التحليل النحوي والتطبيق العملي', duration: '75 min', activitiesEn: 'Conjugation rules, solved problems, and databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating SER and ESTAR or confusing POR with PARA in duration versus destination'
          ],
          commonMisconceptionsAr: [
            'الخلط بين استخدامات ser و estar أو الخلط بين حرفي الجر por و para في العلة والهدف'
          ],
          differentiationEn: {
            struggling: 'Provide verb conjugation charts and vocabulary visual flashcards.',
            advanced: 'Assign comparative subjunctive translation exercises and DELE reading tasks.'
          },
          differentiationAr: {
            struggling: 'توفير جداول تصريف الأفعال وبطاقات مفردات مصورة إرشادية.',
            advanced: 'تكليف بتدريبات ترجمة متقدمة ونصوص فهم مقروء بمستوى DELE B2.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring grammar and situational skills.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من 4 خيارات لقياس استيعاب القواعد والمواقف الوزارية.',
          exitTicketQuestion: {
            questionEn: "What is the core grammatical rule governing Morfología y Conjugación del Presente de Subjuntivo: Verbos Regulares y Alternancias?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ صرف واشتقاق صيغة المضارع الشكلي (Presente de Subjuntivo): الأفعال المنتظمة وتغيرات الحركات؟",
            solutionEn: "The Present Subjunctive swaps conjugation vowels: -ar verbs take -e endings (hable, hables, hable, hablemos, habléis, hablen) while -er/-ir take -a (coma, viva).",
            solutionAr: "تقوم صياغة مضارع الشك على تبادل حروف العلة: تأخذ أفعال ar نهايات الـ e (hable, hables..)، بينما تأخذ أفعال er و ir نهايات الـ a (coma, viva..)."
          }
        },
        worksheet: {
          id: 'egbac_es_ch2_l1_ws',
          titleEn: "Worksheet: Morfología y Conjugación del Presente de Subjuntivo: Verbos Regulares y Alternancias",
          titleAr: "ورقة عمل: صرف واشتقاق صيغة المضارع الشكلي (Presente de Subjuntivo): الأفعال المنتظمة وتغيرات الحركات",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق لغوي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'spanish_language_lab',
          titleEn: "Personality & Ser vs. Estar Studio",
          titleAr: "استوديو الشخصية والمقارنة بين Ser و Estar",
          descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
        }
      },
      {
        id: 'egbac_es_ch2_l2',
        titleEn: "Subjuntivo con Verbos de Emoción, Sentimiento y Reacción Afectiva",
        titleAr: "صيغة الشك مع أفعال المشاعر والانفعالات الوجدانية والتقييم النفسي",
        summaryEn: "Expressions of subjective feeling govern the subjunctive when referring to another subject (Me alegro de que estés aquí / Siento que no puedas venir).",
        summaryAr: "تفرض تعبيرات المشاعر الذاتية صيغة الشك عند الإشارة لفاعل مغاير (يسعدني أنك هنا Me alegro de que estés / يؤسفني أنك لا تستطيع Siento que no puedas).",
        theoryContentEn: "### 1. Subjuntivo con Verbos de Emoción, Sentimiento y Reacción Afectiva\n- **Core Rule:** Expressions of subjective feeling govern the subjunctive when referring to another subject (Me alegro de que estés aquí / Siento que no puedas venir).\n- **Syntactic Structure:** Verbs expressing fear and anxiety (temer, tener miedo de que) strictly trigger the subjunctive mood in the subordinate clause.\n- **Analytical Perspective:** Analyzing emotional valuation contrasts certainty of facts with emotional response to those facts in complex academic prose.\n\n### 2. Estructuras Impersonales de Valoración: \"Es necesario / importante / una lástima que + Subjuntivo\"\n- **Linguistic Principle:** Impersonal constructions expressing valuation take the subjunctive when followed by a specific clause with \"que\" (Es necesario que llegues a tiempo).\n- **Grammar Application:** Without a specific subject and without the conjunction \"que\", impersonal evaluations strictly take an infinitive (Es necesario llegar a tiempo).\n- **Advanced Context:** Impersonal structures of objective truth (es verdad, es obvio, es evidente que) take the indicative in the affirmative, but the subjunctive when negated.\n\n### 3. Verbos de Pensamiento y Opinión: Contraste Afirmativo (Indicativo) vs. Negativo (Subjuntivo)\n- **Communicative Function:** Verbs of opinion (creer, pensar, opinar) take the indicative when affirmative (Creo que Juan dice la verdad).\n- **Usage Matrix:** When the main verb of opinion is negated, the subordinate clause obligatorily takes the subjunctive (No creo que Juan diga la verdad).\n- **Exam Strategy:** Exceptions occur in negative imperative questions (¿No crees que es una buena idea?), which expect agreement and retain the indicative mood.",
        theoryContentAr: "### ١. صيغة الشك مع أفعال المشاعر والانفعالات الوجدانية والتقييم النفسي\n- **القاعدة الأساسية:** تفرض تعبيرات المشاعر الذاتية صيغة الشك عند الإشارة لفاعل مغاير (يسعدني أنك هنا Me alegro de que estés / يؤسفني أنك لا تستطيع Siento que no puedas).\n- **التركيب النحوي:** تتطلب أفعال الخوف والوجل (temer que, tener miedo de que) صيغة الشك حتماً في الجملة الفرعية اللاحقة.\n- **التحليل المتقدم:** يفرق التحليل النحوي المتقدم بين الإقرار بوقوع الحدث في الواقع كحقيقة مجردة والتعبير الوجداني الانفعالي المترتب عليه.\n\n### ٢. التراكيب غير الشخصية للتقييم الموضوعي: Es necesario / importante que + Subjuntivo\n- **المبدأ اللغوي:** تأخذ التراكيب غير الشخصية الدالة على التقييم صيغة الشك إذا اتصلت بجملة فرعية برابط que (من الضروري أن تصل في الموعد Es necesario que llegues).\n- **التطبيق الإعرابي:** عند التعبير عن قاعدة عامة دون تخصيص فاعل محدد ودون رابط que، تأخذ التراكيب غير الشخصية صيغة المصدر (من الضروري الوصول في الموعد Es necesario llegar).\n- **السياق النموذجي:** تأخذ تراكيب اليقين (es verdad, es evidente) صيغة الإثبات بالـ Indicativo، ولكنها تنقلب وجوباً إلى صيغة الشك Subjuntivo في حالة النفي (No es verdad que sea...).\n\n### ٣. أفعال الرأي والاعتقاد: التناقض بين الإثبات (Indicativo) والنفي (Subjuntivo)\n- **الوظيفة التواصلية:** تأخذ أفعال الرأي والاعتقاد (creer, pensar, opinar) صيغة اليقين Indicativo في حالة الإثبات (أعتقد أن فلاناً يصدق Creo que dice la verdad).\n- **مصفوفة الاستخدام:** عند نفي فعل الرأي في الجملة الرئيسية، تتحول الجملة التابعة وجوباً إلى صيغة الشك Subjuntivo (لا أعتقد أنه يصدق No creo que diga la verdad).\n- **استراتيجية الامتحان:** يستثنى من ذلك صيغ الاستفهام المنفي التقريري (ألا تعتقد أنها فكرة صائبة؟)، حيث تهدف لاستجداء التأييد وتحتفظ بصيغة اليقين Indicativo.",
        formulas: [
          {
            labelEn: "Subjuntivo con Verbos de Emoción, Sentimiento y Reacción Afectiva",
            labelAr: "صيغة الشك مع أفعال المشاعر والانفعالات الوجدانية والتقييم النفسي",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Estructuras Impersonales de Valoración: \"Es necesario / importante / una lástima que + Subjuntivo\"",
            labelAr: "التراكيب غير الشخصية للتقييم الموضوعي: Es necesario / importante que + Subjuntivo",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Verbos de Pensamiento y Opinión: Contraste Afirmativo (Indicativo) vs. Negativo (Subjuntivo)",
            labelAr: "أفعال الرأي والاعتقاد: التناقض بين الإثبات (Indicativo) والنفي (Subjuntivo)",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Spanish Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية للغة الإسبانية المتقدمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-ES-CH02-L2',
          pageRange: '25-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Subjuntivo con Verbos de Emoción, Sentimiento y Reacción Afectiva",
          titleAr: "خطة الدرس التوجيهية: صيغة الشك مع أفعال المشاعر والانفعالات الوجدانية والتقييم النفسي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-ES-CH02-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Subjuntivo con Verbos de Emoción, Sentimiento y Reacción Afectiva",
            "Distinguish morpho-syntactic nuances in Estructuras Impersonales de Valoración: \"Es necesario / importante / una lástima que + Subjuntivo\"",
            "Apply communicative strategies in Verbos de Pensamiento y Opinión: Contraste Afirmativo (Indicativo) vs. Negativo (Subjuntivo)"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ صيغة الشك مع أفعال المشاعر والانفعالات الوجدانية والتقييم النفسي",
            "التمييز بين الفروق الصرفية والتركيبية في التراكيب غير الشخصية للتقييم الموضوعي: Es necesario / importante que + Subjuntivo",
            "تطبيق مهارات التواصل الشفهي والكتابي في أفعال الرأي والاعتقاد: التناقض بين الإثبات (Indicativo) والنفي (Subjuntivo)"
          ],
          prerequisitesEn: ['Basic Spanish Grammar', 'A1/A2 Spanish Vocabulary', 'General Secondary Language Skills'],
          prerequisitesAr: ['قواعد الإسبانية للمستوى التأسيسي', 'المفردات العامة A1/A2', 'المهارات اللغوية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'El Futuro Simple', definition: 'Tense expressing future projects, promises, and present hypotheses' },
            { term: 'El Subjuntivo', definition: 'Mood expressing doubt, emotion, influence, and counterfactual states' }
          ],
          keyVocabularyAr: [
            { term: 'المستقبل البسيط', definition: 'زمن يدل على النوايا والمشاريع المستقبلية والوعود والتخمين في الحاضر' },
            { term: 'صيغة الشك والرجاء (Subjuntivo)', definition: 'صيغة تدل على الرجاء، الرغبة، الشك، والانفعال النفسي في الجمل التابعة' }
          ],
          teachingPacing: [
            { phaseEn: 'Warm-up & Situational Context', phaseAr: 'التهيئة واستعراض الموقف اللغوي', duration: '15 min', activitiesEn: 'Listening dialogue review and phonetic drills', activitiesAr: 'استماع للحوار ونطق الكلمات المفتاحية' },
            { phaseEn: 'Grammar Deep Dive & Practice', phaseAr: 'التحليل النحوي والتطبيق العملي', duration: '75 min', activitiesEn: 'Conjugation rules, solved problems, and databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating SER and ESTAR or confusing POR with PARA in duration versus destination'
          ],
          commonMisconceptionsAr: [
            'الخلط بين استخدامات ser و estar أو الخلط بين حرفي الجر por و para في العلة والهدف'
          ],
          differentiationEn: {
            struggling: 'Provide verb conjugation charts and vocabulary visual flashcards.',
            advanced: 'Assign comparative subjunctive translation exercises and DELE reading tasks.'
          },
          differentiationAr: {
            struggling: 'توفير جداول تصريف الأفعال وبطاقات مفردات مصورة إرشادية.',
            advanced: 'تكليف بتدريبات ترجمة متقدمة ونصوص فهم مقروء بمستوى DELE B2.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring grammar and situational skills.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من 4 خيارات لقياس استيعاب القواعد والمواقف الوزارية.',
          exitTicketQuestion: {
            questionEn: "What is the core grammatical rule governing Subjuntivo con Verbos de Emoción, Sentimiento y Reacción Afectiva?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ صيغة الشك مع أفعال المشاعر والانفعالات الوجدانية والتقييم النفسي؟",
            solutionEn: "Expressions of subjective feeling govern the subjunctive when referring to another subject (Me alegro de que estés aquí / Siento que no puedas venir).",
            solutionAr: "تفرض تعبيرات المشاعر الذاتية صيغة الشك عند الإشارة لفاعل مغاير (يسعدني أنك هنا Me alegro de que estés / يؤسفني أنك لا تستطيع Siento que no puedas)."
          }
        },
        worksheet: {
          id: 'egbac_es_ch2_l2_ws',
          titleEn: "Worksheet: Subjuntivo con Verbos de Emoción, Sentimiento y Reacción Afectiva",
          titleAr: "ورقة عمل: صيغة الشك مع أفعال المشاعر والانفعالات الوجدانية والتقييم النفسي",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق لغوي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'spanish_language_lab',
          titleEn: "Personality & Ser vs. Estar Studio",
          titleAr: "استوديو الشخصية والمقارنة بين Ser و Estar",
          descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
        }
      }
    ],
    databank: egBacSpanishCh2Databank,
    solvedExamples: egBacSpanishCh2SolvedExamples,
    exerciseProblems: egBacSpanishCh2Exercises
  },
  {
    id: 'egbac_es_ch3',
    chapterNumber: 3,
    titleEn: "Unidad 3: Oraciones Condicionales, Hipótesis y el Condicional Compuesto",
    titleAr: "الوحدة الثالثة: الجمل الشرطية المركبة، صياغة الفرضيات والماضي المشروط",
    descriptionEn: "Conditional structures with real (si + presente), potential (si + imperfecto subjuntivo), and unreal past conditions (si + pluscuamperfecto subjuntivo + condicional compuesto).",
    descriptionAr: "التراكيب الشرطية بأنواعها الثلاثة (الشرط الممكن، الشرط الافتراضي المحتمل، والشرط المستحيل في الماضي)، وصيغ التخمين والاحتمال المتقدمة.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'spanish_language_lab',
        titleEn: "Spanish Past Tenses & Conditional Lab",
        titleAr: "استوديو أزمنة الماضي والجمل الشرطية",
        descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_es_ch3_l1',
        titleEn: "Oraciones Condicionales Reales con SI + Presente de Indicativo (Condición Probable)",
        titleAr: "الجمل الشرطية الواقعية والممكنة: أداة SI + مضارع اليقين وجواب الشرط",
        summaryEn: "First-degree real conditionals express probable events: \"Si + Presente de Indicativo\" results in Futuro, Presente, or Imperativo (Si estudias, aprobarás).",
        summaryAr: "تعبر الجمل الشرطية الواقعية عن أحداث ممكنة ومحتملة: Si + مضارع، ويأتي جواب الشرط في المستقبل أو المضارع أو الأمر (إذا درست ستنجح).",
        theoryContentEn: "### 1. Oraciones Condicionales Reales con SI + Presente de Indicativo (Condición Probable)\n- **Core Rule:** First-degree real conditionals express probable events: \"Si + Presente de Indicativo\" results in Futuro, Presente, or Imperativo (Si estudias, aprobarás).\n- **Syntactic Structure:** The conjunction \"si\" strictly rejects the future tense and the present subjunctive in the condition clause (Never *Si estudiarás or *Si estudies).\n- **Analytical Perspective:** Formulating conditional instructions uses the imperative in the apodosi: \"Si tienes alguna duda, consúltame inmediatamente\".\n\n### 2. Morfología del Pretérito Imperfecto de Subjuntivo: Desinencias en -ra y -se\n- **Linguistic Principle:** The Imperfect Subjunctive is formed from the third-person plural of the Pretérito Indefinido by dropping -ron and adding -ra or -se (cantaran -> cantara/cantase).\n- **Grammar Application:** Both sets of endings (-ra and -se) are interchangeable, though the -ra series is overwhelmingly preferred in modern and academic Hispanic discourse.\n- **Advanced Context:** Irregular stems in the Indefinido automatically transfer their irregularity to the Imperfect Subjunctive (tuvieron -> tuviera, fueron -> fuera, dijeron -> dijera).\n\n### 3. Oraciones Condicionales Potenciales e Irreales en el Presente: SI + Imperfecto de Subjuntivo + Condicional Simple\n- **Communicative Function:** Second-degree hypothetical conditions express counterfactual present states: \"Si + Imperfecto de Subjuntivo + Condicional Simple\" (Si tuviera dinero, viajaría).\n- **Usage Matrix:** This syntactic structure also conveys polite advice and hypothetical recommendations: \"Si yo fuera tú, aceptaría esa propuesta\".\n- **Exam Strategy:** The apodosi strictly takes the Condicional Simple (viajaría), never the conditional mood inside the protasi after \"si\".",
        theoryContentAr: "### ١. الجمل الشرطية الواقعية والممكنة: أداة SI + مضارع اليقين وجواب الشرط\n- **القاعدة الأساسية:** تعبر الجمل الشرطية الواقعية عن أحداث ممكنة ومحتملة: Si + مضارع، ويأتي جواب الشرط في المستقبل أو المضارع أو الأمر (إذا درست ستنجح).\n- **التركيب النحوي:** يحظر نحوياً اقتران أداة الشرط si بزمن المستقبل أو بمضارع الشك إطلاقاً في جملة فعل الشرط (لا يجوز مطلقاً قول *Si estudiarás).\n- **التحليل المتقدم:** تستخدم صيغ التوجيه الإرشادي فعل الأمر في جواب الشرط: إذا كان لديك أي شك فاستشرني فوراً (Si tienes dudas, consúltame).\n\n### ٢. صرف واشتقاق ماضي الشك (Pretérito Imperfecto de Subjuntivo): نهايات ra و se\n- **المبدأ اللغوي:** يشتق ماضي الشك بحذف النهاية ron من ضمير الغائب الجمع للماضي البسيط وإضافة نهايات ra أو se (من hablaron تصبح hablara أو hablase).\n- **التطبيق الإعرابي:** تعد الصيغتان (-ra و -se) متكافئتين في الاستخدام النحوي، مع سيادة صيغة -ra بصورة كاسحة في الخطاب الأكاديمي والمعاصر.\n- **السياق النموذجي:** تنتقل شذوذ جذور الماضي البسيط تلقائياً إلى ماضي الشك: فتصبح tuvieron في صورة tuviera، وتصبح fueron في صورة fuera، وتصبح dijeron في صورة dijera.\n\n### ٣. الجمل الشرطية الافتراضية وغير الواقعية في الحاضر: Si + ماضي الشك + المشروط البسيط\n- **الوظيفة التواصلية:** تعبر الجمل الشرطية الافتراضية عن واقع مخالف للحاضر: Si + ماضي الشك + المشروط البسيط (لو امتلكت مالاً لسافرت Si tuviera dinero, viajaría).\n- **مصفوفة الاستخدام:** تستخدم هذه الصياغة لتقديم النصيحة الدبلوماسية والافتراض الشخصي: لو كنت مكانك لقبلت هذا العرض (Si yo fuera tú, aceptaría).\n- **استراتيجية الامتحان:** يلتزم جواب الشرط بصيغة Condicional Simple، ولا يجوز إدخال زمن المشروط داخل جملة فعل الشرط بعد أداة si مطلقاً.",
        formulas: [
          {
            labelEn: "Oraciones Condicionales Reales con SI + Presente de Indicativo (Condición Probable)",
            labelAr: "الجمل الشرطية الواقعية والممكنة: أداة SI + مضارع اليقين وجواب الشرط",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Morfología del Pretérito Imperfecto de Subjuntivo: Desinencias en -ra y -se",
            labelAr: "صرف واشتقاق ماضي الشك (Pretérito Imperfecto de Subjuntivo): نهايات ra و se",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Oraciones Condicionales Potenciales e Irreales en el Presente: SI + Imperfecto de Subjuntivo + Condicional Simple",
            labelAr: "الجمل الشرطية الافتراضية وغير الواقعية في الحاضر: Si + ماضي الشك + المشروط البسيط",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Spanish Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية للغة الإسبانية المتقدمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-ES-CH03-L1',
          pageRange: '5-24'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Oraciones Condicionales Reales con SI + Presente de Indicativo (Condición Probable)",
          titleAr: "خطة الدرس التوجيهية: الجمل الشرطية الواقعية والممكنة: أداة SI + مضارع اليقين وجواب الشرط",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-ES-CH03-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Oraciones Condicionales Reales con SI + Presente de Indicativo (Condición Probable)",
            "Distinguish morpho-syntactic nuances in Morfología del Pretérito Imperfecto de Subjuntivo: Desinencias en -ra y -se",
            "Apply communicative strategies in Oraciones Condicionales Potenciales e Irreales en el Presente: SI + Imperfecto de Subjuntivo + Condicional Simple"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ الجمل الشرطية الواقعية والممكنة: أداة SI + مضارع اليقين وجواب الشرط",
            "التمييز بين الفروق الصرفية والتركيبية في صرف واشتقاق ماضي الشك (Pretérito Imperfecto de Subjuntivo): نهايات ra و se",
            "تطبيق مهارات التواصل الشفهي والكتابي في الجمل الشرطية الافتراضية وغير الواقعية في الحاضر: Si + ماضي الشك + المشروط البسيط"
          ],
          prerequisitesEn: ['Basic Spanish Grammar', 'A1/A2 Spanish Vocabulary', 'General Secondary Language Skills'],
          prerequisitesAr: ['قواعد الإسبانية للمستوى التأسيسي', 'المفردات العامة A1/A2', 'المهارات اللغوية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'El Futuro Simple', definition: 'Tense expressing future projects, promises, and present hypotheses' },
            { term: 'El Subjuntivo', definition: 'Mood expressing doubt, emotion, influence, and counterfactual states' }
          ],
          keyVocabularyAr: [
            { term: 'المستقبل البسيط', definition: 'زمن يدل على النوايا والمشاريع المستقبلية والوعود والتخمين في الحاضر' },
            { term: 'صيغة الشك والرجاء (Subjuntivo)', definition: 'صيغة تدل على الرجاء، الرغبة، الشك، والانفعال النفسي في الجمل التابعة' }
          ],
          teachingPacing: [
            { phaseEn: 'Warm-up & Situational Context', phaseAr: 'التهيئة واستعراض الموقف اللغوي', duration: '15 min', activitiesEn: 'Listening dialogue review and phonetic drills', activitiesAr: 'استماع للحوار ونطق الكلمات المفتاحية' },
            { phaseEn: 'Grammar Deep Dive & Practice', phaseAr: 'التحليل النحوي والتطبيق العملي', duration: '75 min', activitiesEn: 'Conjugation rules, solved problems, and databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating SER and ESTAR or confusing POR with PARA in duration versus destination'
          ],
          commonMisconceptionsAr: [
            'الخلط بين استخدامات ser و estar أو الخلط بين حرفي الجر por و para في العلة والهدف'
          ],
          differentiationEn: {
            struggling: 'Provide verb conjugation charts and vocabulary visual flashcards.',
            advanced: 'Assign comparative subjunctive translation exercises and DELE reading tasks.'
          },
          differentiationAr: {
            struggling: 'توفير جداول تصريف الأفعال وبطاقات مفردات مصورة إرشادية.',
            advanced: 'تكليف بتدريبات ترجمة متقدمة ونصوص فهم مقروء بمستوى DELE B2.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring grammar and situational skills.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من 4 خيارات لقياس استيعاب القواعد والمواقف الوزارية.',
          exitTicketQuestion: {
            questionEn: "What is the core grammatical rule governing Oraciones Condicionales Reales con SI + Presente de Indicativo (Condición Probable)?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ الجمل الشرطية الواقعية والممكنة: أداة SI + مضارع اليقين وجواب الشرط؟",
            solutionEn: "First-degree real conditionals express probable events: \"Si + Presente de Indicativo\" results in Futuro, Presente, or Imperativo (Si estudias, aprobarás).",
            solutionAr: "تعبر الجمل الشرطية الواقعية عن أحداث ممكنة ومحتملة: Si + مضارع، ويأتي جواب الشرط في المستقبل أو المضارع أو الأمر (إذا درست ستنجح)."
          }
        },
        worksheet: {
          id: 'egbac_es_ch3_l1_ws',
          titleEn: "Worksheet: Oraciones Condicionales Reales con SI + Presente de Indicativo (Condición Probable)",
          titleAr: "ورقة عمل: الجمل الشرطية الواقعية والممكنة: أداة SI + مضارع اليقين وجواب الشرط",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق لغوي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'spanish_language_lab',
          titleEn: "Spanish Past Tenses & Conditional Lab",
          titleAr: "استوديو أزمنة الماضي والجمل الشرطية",
          descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
        }
      },
      {
        id: 'egbac_es_ch3_l2',
        titleEn: "El Condicional Simple y Compuesto: Expresión de Cortesía, Conjetura y Pasado Irreal",
        titleAr: "زمن المشروط البسيط والمركب: التعبير عن اللباقة، التخمين في الماضي، والشرط المستحيل",
        summaryEn: "The Condicional Simple forms by adding -ía, -ías, -ía, -íamos, -íais, -ían to the full infinitive or irregular future stem (tendría, haría, diría).",
        summaryAr: "يصاغ المشروط البسيط بإضافة نهايات ía إلى المصدر كاملاً أو إلى نفس جذر المستقبل الشاذ (tendría, haría, diría).",
        theoryContentEn: "### 1. El Condicional Simple y Compuesto: Expresión de Cortesía, Conjetura y Pasado Irreal\n- **Core Rule:** The Condicional Simple forms by adding -ía, -ías, -ía, -íamos, -íais, -ían to the full infinitive or irregular future stem (tendría, haría, diría).\n- **Syntactic Structure:** The Condicional Compuesto forms with \"habría + participio\" (habría hablado, habríamos ido) to represent unreal past hypotheticals.\n- **Analytical Perspective:** Third-degree impossible past conditionals combine \"Si + Pluscuamperfecto de Subjuntivo (hubiera estudiado) + Condicional Compuesto (habría aprobado)\".\n\n### 2. Expresiones de Duda y Probabilidad: Quizás, Tal vez, Probablemente y el Uso del Subjuntivo\n- **Linguistic Principle:** Adverbs of doubt like \"quizás\" and \"tal vez\" can govern either the subjunctive (lower probability) or the indicative (higher conviction).\n- **Grammar Application:** When placed before the verb, \"quizás\" and \"tal vez\" typically trigger the subjunctive (Quizás vengan mañana / Tal vez sea verdad).\n- **Advanced Context:** The locution \"a lo mejor\" exclusively governs the indicative mood regardless of its position in the sentence (A lo mejor viene Juan).\n\n### 3. El Estilo Indirecto en Pasado: Transformaciones Temporales y Modales\n- **Communicative Function:** When the reporting verb is in the past (dijo que), present indicative shifts to imperfect, and future shifts to conditional.\n- **Usage Matrix:** Direct orders in the imperative shift to the imperfect subjunctive in reported speech (Dijo: \"Estudia\" -> Me dijo que estudiara).\n- **Exam Strategy:** Deictic shifts include temporal and spatial adverbs: \"hoy\" becomes \"aquel día\", \"ayer\" becomes \"el día anterior\", and \"aquí\" becomes \"allí\".",
        theoryContentAr: "### ١. زمن المشروط البسيط والمركب: التعبير عن اللباقة، التخمين في الماضي، والشرط المستحيل\n- **القاعدة الأساسية:** يصاغ المشروط البسيط بإضافة نهايات ía إلى المصدر كاملاً أو إلى نفس جذر المستقبل الشاذ (tendría, haría, diría).\n- **التركيب النحوي:** يتركب المشروط المركب من تصريف habría متبوعاً باسم المفعول (habría hablado) لتمثيل الأحداث الافتراضية المستحيلة في الماضي.\n- **التحليل المتقدم:** تجمع الجمل الشرطية المستحيلة في الماضي بين: Si + ماضي الشك التام (hubiera estudiado) + المشروط المركب في جواب الشرط (habría aprobado).\n\n### ٢. أدوات الشك والاحتمال: Quizás و Tal vez و Probablemente وموازين صيغتي الشك واليقين\n- **المبدأ اللغوي:** تأخذ أدوات الشك مثل quizás و tal vez صيغة الشك Subjuntivo عند ضعف الاحتمال، أو صيغة اليقين Indicativo عند رجحان الثقة.\n- **التطبيق الإعرابي:** عند تصدير أدوات الشك quizás و tal vez في بداية الجملة، فإنها تجر الفعل إلى صيغة الشك Subjuntivo في غالب الاستخدام الفصيح.\n- **السياق النموذجي:** تنفرد العبارة الاحتمالية a lo mejor بالاقتران بصيغة اليقين Indicativo حصراً دون صيغة الشك (ربما يحضر فلان A lo mejor viene).\n\n### ٣. الكلام المنقول غير المباشر في الماضي: التحويلات الزمنية والصرفية\n- **الوظيفة التواصلية:** عندما يكون فعل الإسناد والقول في الماضي (قال إن dijo que)، يتحول المضارع إلى ماضي مستمر، والمستقبل إلى زمن المشروط.\n- **مصفوفة الاستخدام:** تتحول صيغ الأمر المباشر إلى صيغة ماضي الشك في الكلام المنقول غير المباشر (قال لي ادرس -> قال لي أن أدرس Me dijo que estudiara).\n- **استراتيجية الامتحان:** تشمل التحويلات اللغوية الظروف المكانية والزمانية: فتصبح hoy (اليوم) في صورة aquel día، وتصبح aquí (هنا) في صورة allí (هناك).",
        formulas: [
          {
            labelEn: "El Condicional Simple y Compuesto: Expresión de Cortesía, Conjetura y Pasado Irreal",
            labelAr: "زمن المشروط البسيط والمركب: التعبير عن اللباقة، التخمين في الماضي، والشرط المستحيل",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Expresiones de Duda y Probabilidad: Quizás, Tal vez, Probablemente y el Uso del Subjuntivo",
            labelAr: "أدوات الشك والاحتمال: Quizás و Tal vez و Probablemente وموازين صيغتي الشك واليقين",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "El Estilo Indirecto en Pasado: Transformaciones Temporales y Modales",
            labelAr: "الكلام المنقول غير المباشر في الماضي: التحويلات الزمنية والصرفية",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Spanish Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية للغة الإسبانية المتقدمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-ES-CH03-L2',
          pageRange: '25-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: El Condicional Simple y Compuesto: Expresión de Cortesía, Conjetura y Pasado Irreal",
          titleAr: "خطة الدرس التوجيهية: زمن المشروط البسيط والمركب: التعبير عن اللباقة، التخمين في الماضي، والشرط المستحيل",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-ES-CH03-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of El Condicional Simple y Compuesto: Expresión de Cortesía, Conjetura y Pasado Irreal",
            "Distinguish morpho-syntactic nuances in Expresiones de Duda y Probabilidad: Quizás, Tal vez, Probablemente y el Uso del Subjuntivo",
            "Apply communicative strategies in El Estilo Indirecto en Pasado: Transformaciones Temporales y Modales"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ زمن المشروط البسيط والمركب: التعبير عن اللباقة، التخمين في الماضي، والشرط المستحيل",
            "التمييز بين الفروق الصرفية والتركيبية في أدوات الشك والاحتمال: Quizás و Tal vez و Probablemente وموازين صيغتي الشك واليقين",
            "تطبيق مهارات التواصل الشفهي والكتابي في الكلام المنقول غير المباشر في الماضي: التحويلات الزمنية والصرفية"
          ],
          prerequisitesEn: ['Basic Spanish Grammar', 'A1/A2 Spanish Vocabulary', 'General Secondary Language Skills'],
          prerequisitesAr: ['قواعد الإسبانية للمستوى التأسيسي', 'المفردات العامة A1/A2', 'المهارات اللغوية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'El Futuro Simple', definition: 'Tense expressing future projects, promises, and present hypotheses' },
            { term: 'El Subjuntivo', definition: 'Mood expressing doubt, emotion, influence, and counterfactual states' }
          ],
          keyVocabularyAr: [
            { term: 'المستقبل البسيط', definition: 'زمن يدل على النوايا والمشاريع المستقبلية والوعود والتخمين في الحاضر' },
            { term: 'صيغة الشك والرجاء (Subjuntivo)', definition: 'صيغة تدل على الرجاء، الرغبة، الشك، والانفعال النفسي في الجمل التابعة' }
          ],
          teachingPacing: [
            { phaseEn: 'Warm-up & Situational Context', phaseAr: 'التهيئة واستعراض الموقف اللغوي', duration: '15 min', activitiesEn: 'Listening dialogue review and phonetic drills', activitiesAr: 'استماع للحوار ونطق الكلمات المفتاحية' },
            { phaseEn: 'Grammar Deep Dive & Practice', phaseAr: 'التحليل النحوي والتطبيق العملي', duration: '75 min', activitiesEn: 'Conjugation rules, solved problems, and databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating SER and ESTAR or confusing POR with PARA in duration versus destination'
          ],
          commonMisconceptionsAr: [
            'الخلط بين استخدامات ser و estar أو الخلط بين حرفي الجر por و para في العلة والهدف'
          ],
          differentiationEn: {
            struggling: 'Provide verb conjugation charts and vocabulary visual flashcards.',
            advanced: 'Assign comparative subjunctive translation exercises and DELE reading tasks.'
          },
          differentiationAr: {
            struggling: 'توفير جداول تصريف الأفعال وبطاقات مفردات مصورة إرشادية.',
            advanced: 'تكليف بتدريبات ترجمة متقدمة ونصوص فهم مقروء بمستوى DELE B2.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring grammar and situational skills.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من 4 خيارات لقياس استيعاب القواعد والمواقف الوزارية.',
          exitTicketQuestion: {
            questionEn: "What is the core grammatical rule governing El Condicional Simple y Compuesto: Expresión de Cortesía, Conjetura y Pasado Irreal?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ زمن المشروط البسيط والمركب: التعبير عن اللباقة، التخمين في الماضي، والشرط المستحيل؟",
            solutionEn: "The Condicional Simple forms by adding -ía, -ías, -ía, -íamos, -íais, -ían to the full infinitive or irregular future stem (tendría, haría, diría).",
            solutionAr: "يصاغ المشروط البسيط بإضافة نهايات ía إلى المصدر كاملاً أو إلى نفس جذر المستقبل الشاذ (tendría, haría, diría)."
          }
        },
        worksheet: {
          id: 'egbac_es_ch3_l2_ws',
          titleEn: "Worksheet: El Condicional Simple y Compuesto: Expresión de Cortesía, Conjetura y Pasado Irreal",
          titleAr: "ورقة عمل: زمن المشروط البسيط والمركب: التعبير عن اللباقة، التخمين في الماضي، والشرط المستحيل",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق لغوي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'spanish_language_lab',
          titleEn: "Spanish Past Tenses & Conditional Lab",
          titleAr: "استوديو أزمنة الماضي والجمل الشرطية",
          descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
        }
      }
    ],
    databank: egBacSpanishCh3Databank,
    solvedExamples: egBacSpanishCh3SolvedExamples,
    exerciseProblems: egBacSpanishCh3Exercises
  },
  {
    id: 'egbac_es_ch4',
    chapterNumber: 4,
    titleEn: "Unidad 4: Literatura, Geopolítica del Mundo Hispánico y Comunicación Global",
    titleAr: "الوحدة الرابعة: الأدب الإسباني، الجيوسياسة في العالم الإسباني والإعلام المعاصر",
    descriptionEn: "The Spanish Golden Age (Don Quijote, Cervantes), Latin American Boom (García Márquez), Generation of '27 (Lorca), Hispanic economic blocs, and global Spanish communications.",
    descriptionAr: "العصر الذهبي الإسباني ورواية دون كيخوتي لسرفانتس، أدب أمريكا اللاتينية والواقعية السحرية، جيل ٢٧ ولوركا، التكتلات الاقتصادية والدور الدبلوماسي العالمي للإسبانية.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'spanish_language_lab',
        titleEn: "Spanish Imperative & Culture Studio",
        titleAr: "استوديو الأمر والثقافة الإسبانية",
        descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_es_ch4_l1',
        titleEn: "El Siglo de Oro Español: Miguel de Cervantes, Don Quijote de la Mancha y la Novela Moderna",
        titleAr: "العصر الذهبي الإسباني: ميغيل دي سرفانتس، دون كيخوتي دي لا مانشا وتأسيس الرواية الحديثة",
        summaryEn: "Miguel de Cervantes published Don Quijote de la Mancha (1605, 1615), universally recognized as the pioneering masterpiece of the modern novel.",
        summaryAr: "أبدع الكاتب الإسباني ميغيل دي سرفانتس روايته الخالدة دون كيخوتي (١٦٠٥ - ١٦١٥) التي تعد إجماعاً الرواية المؤسسة للأدب الروائي العالمي الحديث.",
        theoryContentEn: "### 1. El Siglo de Oro Español: Miguel de Cervantes, Don Quijote de la Mancha y la Novela Moderna\n- **Core Rule:** Miguel de Cervantes published Don Quijote de la Mancha (1605, 1615), universally recognized as the pioneering masterpiece of the modern novel.\n- **Syntactic Structure:** The narrative contrasts Don Quijote’s lofty knightly idealism with Sancho Panza’s pragmatic folk realism, exploring truth and illusion.\n- **Analytical Perspective:** Analyzing Cervantes’ polyphonic narrative and metafictional ironies illustrates the breakdown of medieval romance into modern critical consciousness.\n\n### 2. El \"Boom\" Latinoamericano y el Realismo Mágico: Gabriel García Márquez y Mario Vargas Llosa\n- **Linguistic Principle:** The Latin American Literary Boom of the 1960s achieved global renown through authors such as Gabriel García Márquez, Mario Vargas Llosa, and Julio Cortázar.\n- **Grammar Application:** García Márquez’s \"Cien años de soledad\" (1967) epitomizes Magic Realism, weaving supernatural events seamlessly into historical Colombian realities.\n- **Advanced Context:** Thematic analysis links the fictional town of Macondo to systemic socio-political turbulence, neocolonial exploitation, and cyclical historical solitude.\n\n### 3. La Generación del 27 y Federico García Lorca: Poesía, Vanguardia y Raíces Andaluzas\n- **Communicative Function:** The Generation of ’27 blended modern avant-garde poetic movements (Surrealism) with traditional Spanish and Andalusian popular balladry.\n- **Usage Matrix:** Federico García Lorca gained world acclaim for \"Romancero Gitano\" and theatrical tragedies examining repression and passion (Bodas de sangre, La casa de Bernarda Alba).\n- **Exam Strategy:** Lorca’s conceptualization of \"el duende\" illuminates the profound emotional resonance and tragic artistic transcendence intrinsic to flamenco and Spanish lyricism.",
        theoryContentAr: "### ١. العصر الذهبي الإسباني: ميغيل دي سرفانتس، دون كيخوتي دي لا مانشا وتأسيس الرواية الحديثة\n- **القاعدة الأساسية:** أبدع الكاتب الإسباني ميغيل دي سرفانتس روايته الخالدة دون كيخوتي (١٦٠٥ - ١٦١٥) التي تعد إجماعاً الرواية المؤسسة للأدب الروائي العالمي الحديث.\n- **التركيب النحوي:** يبرز البناء السردي التناقض الفلسفي البديع بين مثالية الفارس دون كيخوتي وواقعية رفيقه سانشو بانزا البرجماتية، كاشفاً جدلية الوهم والحقيقة.\n- **التحليل المتقدم:** يبرهن تحليل البنية السردية متعددة الأصوات والسخرية الميتا-روائية على انكسار عصر الفروسية الوسيط وانبثاق الوعي النقدي المعاصر.\n\n### ٢. طفرة الرواية الأمريكية اللاتينية والواقعية السحرية: غابرييل غارسيا ماركيز وماريو فارغاس يوسا\n- **المبدأ اللغوي:** حققت طفرة الرواية اللاتينية في الستينيات شهرة كوكبية بأعمال عمالقة الإبداع: مثل غارسيا ماركيز، ماريو فارغاس يوسا، وخوليو كورتاثار.\n- **التطبيق الإعرابي:** تجسد مائة عام من العزلة (١٩٦٧) لماركيز ذروة الواقعية السحرية، حيث تدمج الخوارق والأساطير بنسيج الواقع التاريخي الكولومبي ببراعة فائقة.\n- **السياق النموذجي:** يربط التحليل النقدي قرية ماكوندو الأسطورية بالاضطرابات السياسية العميقة في أمريكا اللاتينية وعزلة الوجود الإنساني في مواجهة قوى التاريخ.\n\n### ٣. جيل ٢٧ الشعري وفيديريكو غارسيا لوركا: التحديث الطليعي، المسرح الإنساني والجذور الأندلسية\n- **الوظيفة التواصلية:** جمع جيل ١٩٢٧ بين التيارات الطليعية الحديثة كالسريالية والتقاليد الشعبية للموشحات والأغاني التراثية الأندلسية والإسبانية.\n- **مصفوفة الاستخدام:** نال لوركا مجداً عالمياً بديوانه رومانسيرو الغجري ومسرحياته التراجيدية الخالدة التي ناقشت القمع والحرية والكرامة (عرس الدم، بيت برناردا ألبا).\n- **استراتيجية الامتحان:** تسلط نظرية الدويندي (el duende) عند لوركا الضوء على الانفعال الروحي والعمق المأساوي الذي يميز الفلامنكو والإبداع الشعري الإسباني.",
        formulas: [
          {
            labelEn: "El Siglo de Oro Español: Miguel de Cervantes, Don Quijote de la Mancha y la Novela Moderna",
            labelAr: "العصر الذهبي الإسباني: ميغيل دي سرفانتس، دون كيخوتي دي لا مانشا وتأسيس الرواية الحديثة",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "El \"Boom\" Latinoamericano y el Realismo Mágico: Gabriel García Márquez y Mario Vargas Llosa",
            labelAr: "طفرة الرواية الأمريكية اللاتينية والواقعية السحرية: غابرييل غارسيا ماركيز وماريو فارغاس يوسا",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "La Generación del 27 y Federico García Lorca: Poesía, Vanguardia y Raíces Andaluzas",
            labelAr: "جيل ٢٧ الشعري وفيديريكو غارسيا لوركا: التحديث الطليعي، المسرح الإنساني والجذور الأندلسية",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Spanish Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية للغة الإسبانية المتقدمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-ES-CH04-L1',
          pageRange: '5-24'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: El Siglo de Oro Español: Miguel de Cervantes, Don Quijote de la Mancha y la Novela Moderna",
          titleAr: "خطة الدرس التوجيهية: العصر الذهبي الإسباني: ميغيل دي سرفانتس، دون كيخوتي دي لا مانشا وتأسيس الرواية الحديثة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-ES-CH04-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of El Siglo de Oro Español: Miguel de Cervantes, Don Quijote de la Mancha y la Novela Moderna",
            "Distinguish morpho-syntactic nuances in El \"Boom\" Latinoamericano y el Realismo Mágico: Gabriel García Márquez y Mario Vargas Llosa",
            "Apply communicative strategies in La Generación del 27 y Federico García Lorca: Poesía, Vanguardia y Raíces Andaluzas"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ العصر الذهبي الإسباني: ميغيل دي سرفانتس، دون كيخوتي دي لا مانشا وتأسيس الرواية الحديثة",
            "التمييز بين الفروق الصرفية والتركيبية في طفرة الرواية الأمريكية اللاتينية والواقعية السحرية: غابرييل غارسيا ماركيز وماريو فارغاس يوسا",
            "تطبيق مهارات التواصل الشفهي والكتابي في جيل ٢٧ الشعري وفيديريكو غارسيا لوركا: التحديث الطليعي، المسرح الإنساني والجذور الأندلسية"
          ],
          prerequisitesEn: ['Basic Spanish Grammar', 'A1/A2 Spanish Vocabulary', 'General Secondary Language Skills'],
          prerequisitesAr: ['قواعد الإسبانية للمستوى التأسيسي', 'المفردات العامة A1/A2', 'المهارات اللغوية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'El Futuro Simple', definition: 'Tense expressing future projects, promises, and present hypotheses' },
            { term: 'El Subjuntivo', definition: 'Mood expressing doubt, emotion, influence, and counterfactual states' }
          ],
          keyVocabularyAr: [
            { term: 'المستقبل البسيط', definition: 'زمن يدل على النوايا والمشاريع المستقبلية والوعود والتخمين في الحاضر' },
            { term: 'صيغة الشك والرجاء (Subjuntivo)', definition: 'صيغة تدل على الرجاء، الرغبة، الشك، والانفعال النفسي في الجمل التابعة' }
          ],
          teachingPacing: [
            { phaseEn: 'Warm-up & Situational Context', phaseAr: 'التهيئة واستعراض الموقف اللغوي', duration: '15 min', activitiesEn: 'Listening dialogue review and phonetic drills', activitiesAr: 'استماع للحوار ونطق الكلمات المفتاحية' },
            { phaseEn: 'Grammar Deep Dive & Practice', phaseAr: 'التحليل النحوي والتطبيق العملي', duration: '75 min', activitiesEn: 'Conjugation rules, solved problems, and databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating SER and ESTAR or confusing POR with PARA in duration versus destination'
          ],
          commonMisconceptionsAr: [
            'الخلط بين استخدامات ser و estar أو الخلط بين حرفي الجر por و para في العلة والهدف'
          ],
          differentiationEn: {
            struggling: 'Provide verb conjugation charts and vocabulary visual flashcards.',
            advanced: 'Assign comparative subjunctive translation exercises and DELE reading tasks.'
          },
          differentiationAr: {
            struggling: 'توفير جداول تصريف الأفعال وبطاقات مفردات مصورة إرشادية.',
            advanced: 'تكليف بتدريبات ترجمة متقدمة ونصوص فهم مقروء بمستوى DELE B2.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring grammar and situational skills.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من 4 خيارات لقياس استيعاب القواعد والمواقف الوزارية.',
          exitTicketQuestion: {
            questionEn: "What is the core grammatical rule governing El Siglo de Oro Español: Miguel de Cervantes, Don Quijote de la Mancha y la Novela Moderna?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ العصر الذهبي الإسباني: ميغيل دي سرفانتس، دون كيخوتي دي لا مانشا وتأسيس الرواية الحديثة؟",
            solutionEn: "Miguel de Cervantes published Don Quijote de la Mancha (1605, 1615), universally recognized as the pioneering masterpiece of the modern novel.",
            solutionAr: "أبدع الكاتب الإسباني ميغيل دي سرفانتس روايته الخالدة دون كيخوتي (١٦٠٥ - ١٦١٥) التي تعد إجماعاً الرواية المؤسسة للأدب الروائي العالمي الحديث."
          }
        },
        worksheet: {
          id: 'egbac_es_ch4_l1_ws',
          titleEn: "Worksheet: El Siglo de Oro Español: Miguel de Cervantes, Don Quijote de la Mancha y la Novela Moderna",
          titleAr: "ورقة عمل: العصر الذهبي الإسباني: ميغيل دي سرفانتس، دون كيخوتي دي لا مانشا وتأسيس الرواية الحديثة",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق لغوي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'spanish_language_lab',
          titleEn: "Spanish Imperative & Culture Studio",
          titleAr: "استوديو الأمر والثقافة الإسبانية",
          descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
        }
      },
      {
        id: 'egbac_es_ch4_l2',
        titleEn: "Geopolítica e Integración Económica en el Mundo Hispánico: MERCOSUR, Alianza del Pacífico y la CELAC",
        titleAr: "الجيوسياسة والتكامل الاقتصادي في العالم الإسباني: تكتلات ميركوسور، تحالف المحيط الهادئ والسيلاك",
        summaryEn: "Major economic trading blocs in Latin America include MERCOSUR (Mercado Común del Sur) and the Pacific Alliance (Alianza del Pacífico).",
        summaryAr: "تشمل التكتلات الاقتصادية والتجارية الكبرى في أمريكا اللاتينية: تكتل ميركوسور (MERCOSUR) وتحالف المحيط الهادئ (Alianza del Pacífico).",
        theoryContentEn: "### 1. Geopolítica e Integración Económica en el Mundo Hispánico: MERCOSUR, Alianza del Pacífico y la CELAC\n- **Core Rule:** Major economic trading blocs in Latin America include MERCOSUR (Mercado Común del Sur) and the Pacific Alliance (Alianza del Pacífico).\n- **Syntactic Structure:** The Community of Latin American and Caribbean States (CELAC) fosters regional diplomatic cooperation, multilateral trade, and sustainable infrastructure.\n- **Analytical Perspective:** Strategic analysis examines trade relationships between the Hispanic world, the European Union, and emerging global markets across the Atlantic basin.\n\n### 2. El Español como Idioma Global: Demografía, Diplomacia Internacional y Presencia Digital\n- **Linguistic Principle:** With over 500 million native speakers, Spanish is the second most spoken native language worldwide and an official United Nations working language.\n- **Grammar Application:** The Instituto Cervantes promotes the teaching of Spanish and the dissemination of Hispanic culture globally through accredited DELE and SIELE certifications.\n- **Advanced Context:** The expansion of Spanish across the internet, international scientific repositories, and global entertainment media solidifies its geostrategic value.\n\n### 3. Periodismo de Investigación, Medios Digitales y Ética de la Comunicación Hispana\n- **Communicative Function:** Prominent Spanish-language international news organizations include El País, Agencia EFE, BBC Mundo, and CNN en Español.\n- **Usage Matrix:** Investigative journalism in the Hispanic sphere champions freedom of expression, governmental accountability, and rigorous fact-checking.\n- **Exam Strategy:** Evaluating algorithmic news curation and combating disinformation protects democratic deliberation and journalistic integrity across Spanish-speaking societies.",
        theoryContentAr: "### ١. الجيوسياسة والتكامل الاقتصادي في العالم الإسباني: تكتلات ميركوسور، تحالف المحيط الهادئ والسيلاك\n- **القاعدة الأساسية:** تشمل التكتلات الاقتصادية والتجارية الكبرى في أمريكا اللاتينية: تكتل ميركوسور (MERCOSUR) وتحالف المحيط الهادئ (Alianza del Pacífico).\n- **التركيب النحوي:** تعزز جماعة دول أمريكا اللاتينية ومنطقة البحر الكاريبي (CELAC) التعاون الدبلوماسي المشترك والتنمية المستدامة والتجارة البينية.\n- **التحليل المتقدم:** يفحص التحليل الاستراتيجي العلاقات الاقتصادية والتجارية التبادلية بين العالم الناطق بالإسبانية والاتحاد الأوروبي والأسواق الناشئة.\n\n### ٢. الإسبانية كلغة عالمية: الديموغرافيا، المحافل الدبلوماسية الدولية والانتشار الرقمي\n- **المبدأ اللغوي:** مع أكثر من 500 مليون ناطق بها كلغة أم، تعد الإسبانية ثاني أكثر لغة محكية عالمياً وإحدى اللغات الرسمية المعتمدة في منظمة الأمم المتحدة.\n- **التطبيق الإعرابي:** يتولى معهد سيرفانتس (Instituto Cervantes) نشر اللغة والثقافة الإسبانية عبر مراكزه المنتشرة عالمياً واختبارات شهادات DELE و SIELE المعتمدة.\n- **السياق النموذجي:** يرسخ النمو المتسارع للمحتوى الإسباني الرقمي في شبكات المعرفة والبحث العلمي والإعلام العالمي مكانتها الجيواستراتيجية كقوة ناعمة كبرى.\n\n### ٣. الصحافة الاستقصائية، الإعلام الرقمي ومواثيق الشرف الإعلامي في الفضاء الإسباني\n- **الوظيفة التواصلية:** تشمل المؤسسات والمنصات الإخبارية الإسبانية الدولية الرائدة: صحيفة إل باييس El País، وكالة إيفي EFE، بي بي سي موندو، وسي إن إن بالإسبانية.\n- **مصفوفة الاستخدام:** تكرس الصحافة الاستقصائية في العالم الإسباني جهودها لحماية حرية التعبير والشفافية ومكافحة الفساد والتحقق الصارم من صحة الأنباء.\n- **استراتيجية الامتحان:** يحمي التدقيق في خوارزميات النشر الرقمي ومكافحة التضليل الحوار الديمقراطي والنزاهة المهنية في المجتمعات الناطقة بالإسبانية.",
        formulas: [
          {
            labelEn: "Geopolítica e Integración Económica en el Mundo Hispánico: MERCOSUR, Alianza del Pacífico y la CELAC",
            labelAr: "الجيوسياسة والتكامل الاقتصادي في العالم الإسباني: تكتلات ميركوسور، تحالف المحيط الهادئ والسيلاك",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "El Español como Idioma Global: Demografía, Diplomacia Internacional y Presencia Digital",
            labelAr: "الإسبانية كلغة عالمية: الديموغرافيا، المحافل الدبلوماسية الدولية والانتشار الرقمي",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Periodismo de Investigación, Medios Digitales y Ética de la Comunicación Hispana",
            labelAr: "الصحافة الاستقصائية، الإعلام الرقمي ومواثيق الشرف الإعلامي في الفضاء الإسباني",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Spanish Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية للغة الإسبانية المتقدمة',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-ES-CH04-L2',
          pageRange: '25-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Geopolítica e Integración Económica en el Mundo Hispánico: MERCOSUR, Alianza del Pacífico y la CELAC",
          titleAr: "خطة الدرس التوجيهية: الجيوسياسة والتكامل الاقتصادي في العالم الإسباني: تكتلات ميركوسور، تحالف المحيط الهادئ والسيلاك",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-ES-CH04-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Geopolítica e Integración Económica en el Mundo Hispánico: MERCOSUR, Alianza del Pacífico y la CELAC",
            "Distinguish morpho-syntactic nuances in El Español como Idioma Global: Demografía, Diplomacia Internacional y Presencia Digital",
            "Apply communicative strategies in Periodismo de Investigación, Medios Digitales y Ética de la Comunicación Hispana"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ الجيوسياسة والتكامل الاقتصادي في العالم الإسباني: تكتلات ميركوسور، تحالف المحيط الهادئ والسيلاك",
            "التمييز بين الفروق الصرفية والتركيبية في الإسبانية كلغة عالمية: الديموغرافيا، المحافل الدبلوماسية الدولية والانتشار الرقمي",
            "تطبيق مهارات التواصل الشفهي والكتابي في الصحافة الاستقصائية، الإعلام الرقمي ومواثيق الشرف الإعلامي في الفضاء الإسباني"
          ],
          prerequisitesEn: ['Basic Spanish Grammar', 'A1/A2 Spanish Vocabulary', 'General Secondary Language Skills'],
          prerequisitesAr: ['قواعد الإسبانية للمستوى التأسيسي', 'المفردات العامة A1/A2', 'المهارات اللغوية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'El Futuro Simple', definition: 'Tense expressing future projects, promises, and present hypotheses' },
            { term: 'El Subjuntivo', definition: 'Mood expressing doubt, emotion, influence, and counterfactual states' }
          ],
          keyVocabularyAr: [
            { term: 'المستقبل البسيط', definition: 'زمن يدل على النوايا والمشاريع المستقبلية والوعود والتخمين في الحاضر' },
            { term: 'صيغة الشك والرجاء (Subjuntivo)', definition: 'صيغة تدل على الرجاء، الرغبة، الشك، والانفعال النفسي في الجمل التابعة' }
          ],
          teachingPacing: [
            { phaseEn: 'Warm-up & Situational Context', phaseAr: 'التهيئة واستعراض الموقف اللغوي', duration: '15 min', activitiesEn: 'Listening dialogue review and phonetic drills', activitiesAr: 'استماع للحوار ونطق الكلمات المفتاحية' },
            { phaseEn: 'Grammar Deep Dive & Practice', phaseAr: 'التحليل النحوي والتطبيق العملي', duration: '75 min', activitiesEn: 'Conjugation rules, solved problems, and databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Conflating SER and ESTAR or confusing POR with PARA in duration versus destination'
          ],
          commonMisconceptionsAr: [
            'الخلط بين استخدامات ser و estar أو الخلط بين حرفي الجر por و para في العلة والهدف'
          ],
          differentiationEn: {
            struggling: 'Provide verb conjugation charts and vocabulary visual flashcards.',
            advanced: 'Assign comparative subjunctive translation exercises and DELE reading tasks.'
          },
          differentiationAr: {
            struggling: 'توفير جداول تصريف الأفعال وبطاقات مفردات مصورة إرشادية.',
            advanced: 'تكليف بتدريبات ترجمة متقدمة ونصوص فهم مقروء بمستوى DELE B2.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring grammar and situational skills.',
          formativeAssessmentAr: 'تقييم مرحلي تفاعلي من 4 خيارات لقياس استيعاب القواعد والمواقف الوزارية.',
          exitTicketQuestion: {
            questionEn: "What is the core grammatical rule governing Geopolítica e Integración Económica en el Mundo Hispánico: MERCOSUR, Alianza del Pacífico y la CELAC?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ الجيوسياسة والتكامل الاقتصادي في العالم الإسباني: تكتلات ميركوسور، تحالف المحيط الهادئ والسيلاك؟",
            solutionEn: "Major economic trading blocs in Latin America include MERCOSUR (Mercado Común del Sur) and the Pacific Alliance (Alianza del Pacífico).",
            solutionAr: "تشمل التكتلات الاقتصادية والتجارية الكبرى في أمريكا اللاتينية: تكتل ميركوسور (MERCOSUR) وتحالف المحيط الهادئ (Alianza del Pacífico)."
          }
        },
        worksheet: {
          id: 'egbac_es_ch4_l2_ws',
          titleEn: "Worksheet: Geopolítica e Integración Económica en el Mundo Hispánico: MERCOSUR, Alianza del Pacífico y la CELAC",
          titleAr: "ورقة عمل: الجيوسياسة والتكامل الاقتصادي في العالم الإسباني: تكتلات ميركوسور، تحالف المحيط الهادئ والسيلاك",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق لغوي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'spanish_language_lab',
          titleEn: "Spanish Imperative & Culture Studio",
          titleAr: "استوديو الأمر والثقافة الإسبانية",
          descriptionEn: 'Interactive real-time Spanish audio, grammar, and communicative situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإسبانية.'
        }
      }
    ],
    databank: egBacSpanishCh4Databank,
    solvedExamples: egBacSpanishCh4SolvedExamples,
    exerciseProblems: egBacSpanishCh4Exercises
  }
];

export const egBacSpanishBranch: Branch = {
  id: 'egbac_spanish',
  titleEn: "New Egyptian Baccalaureate: Advanced Academic Spanish & Hispanic Cultural Studies",
  titleAr: "البكالوريا المصرية: اللغة الإسبانية الأكاديمية المتقدمة والدراسات الثقافية",
  categoryEn: "Egyptian Baccalaureate Second Language",
  categoryAr: "اللغة الأجنبية الثانية للبكالوريا",
  iconName: 'Languages',
  colorGradient: 'from-red-950 via-amber-900 to-yellow-900',
  chapters
};
