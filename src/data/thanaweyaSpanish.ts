import type { Branch, Chapter } from '../types/curriculum';
import { spanishCh1Databank } from './databanks/thanaweya/spanishCh1Databank';
import { spanishCh1SolvedExamples, spanishCh1Exercises } from './textbook/thanaweya/spanishCh1Textbook';
import { spanishCh2Databank } from './databanks/thanaweya/spanishCh2Databank';
import { spanishCh2SolvedExamples, spanishCh2Exercises } from './textbook/thanaweya/spanishCh2Textbook';
import { spanishCh3Databank } from './databanks/thanaweya/spanishCh3Databank';
import { spanishCh3SolvedExamples, spanishCh3Exercises } from './textbook/thanaweya/spanishCh3Textbook';
import { spanishCh4Databank } from './databanks/thanaweya/spanishCh4Databank';
import { spanishCh4SolvedExamples, spanishCh4Exercises } from './textbook/thanaweya/spanishCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'th_es_ch1',
    chapterNumber: 1,
    titleEn: "Unidad 1: Los planes y proyectos futuros, el medio ambiente y el Futuro Simple",
    titleAr: "الوحدة الأولى: الخطط والمشاريع المستقبلية، البيئة وزمن المستقبل البسيط",
    descriptionEn: "Future projects and intentions, environmental protection and recycling, regular and irregular conjugations of the Futuro Simple, and communicative uses (predictions, promises, hypotheses).",
    descriptionAr: "المشاريع والخطط المستقبلية، حماية البيئة وتدوير المخلفات، وتصريف زمن المستقبل البسيط (الأفعال المنتظمة والشاذة) والاستخدامات التواصلية (التوقعات، الوعود، والتخمين).",
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
        id: 'th_es_ch1_l1',
        titleEn: "Proyectos y planes futuros: El concurso escolar, el medio ambiente y el reciclaje",
        titleAr: "المشاريع والخطط المستقبلية: المسابقة المدرسية، البيئة وإعادة التدوير",
        summaryEn: "Students express future intentions using the structure \"pensar + infinitivo\" or the future simple tense (Este año participaremos en el concurso escolar).",
        summaryAr: "يعبر الطلاب عن النوايا المستقبلية باستخدام صيغة pensar + المصدر أو زمن المستقبل البسيط (هذا العام سنشارك في المسابقة المدرسية).",
        theoryContentEn: "### 1. Proyectos y planes futuros: El concurso escolar, el medio ambiente y el reciclaje\n- **Core Rule:** Students express future intentions using the structure \"pensar + infinitivo\" or the future simple tense (Este año participaremos en el concurso escolar).\n- **Syntactic Structure:** Ecological school campaigns focus on reforestation, preserving biodiversity, and reducing single-use plastic waste.\n- **Analytical Perspective:** Collaborative projects require reaching a democratic consensus to organize musical bands or environmental workshops for inter-school competitions.\n\n### 2. Formación del Futuro Simple de los verbos regulares (-ar, -er, -ir)\n- **Linguistic Principle:** Regular verbs form the future simple by adding endings to the whole infinitive: -é, -ás, -á, -emos, -éis, -án (cantaré, comeré, viviré).\n- **Grammar Application:** All regular verbs share identical future endings regardless of whether their infinitive ends in -ar, -er, or -ir.\n- **Advanced Context:** Notice that all future simple endings carry an orthographic accent except the first-person plural \"nosotros\" (-emos).\n\n### 3. Verbos irregulares en el Futuro: Pérdida de vocal temática (poder, saber, caber, haber, querer)\n- **Communicative Function:** Verbs like poder, saber, caber, haber, and querer drop the thematic vowel -e- in their future stems (podré, sabré, cabré, habrá, querré).\n- **Usage Matrix:** The irregular stems attach standard future endings across all grammatical persons (yo podré, tú podrás, él podrá, nosotros podremos, vosotros podréis, ellos podrán).\n- **Exam Strategy:** The verb \"querer\" assimilates into a double -rr- (querré, querrás) due to the syncope of the vowel -e- between the two liquids.",
        theoryContentAr: "### ١. المشاريع والخطط المستقبلية: المسابقة المدرسية، البيئة وإعادة التدوير\n- **القاعدة الأساسية:** يعبر الطلاب عن النوايا المستقبلية باستخدام صيغة pensar + المصدر أو زمن المستقبل البسيط (هذا العام سنشارك في المسابقة المدرسية).\n- **التركيب النحوي:** تركز الحملات البيئية المدرسية على التشجير، وحماية التنوع البيولوجي، والحد من النفايات البلاستيكية أحادية الاستخدام.\n- **التحليل المتقدم:** تتطلب المشروعات الجماعية التوصل إلى توافق ديمقراطي لتنظيم الفرق الموسيقية أو ورش العمل البيئية للمنافسات بين المدارس.\n\n### ٢. صياغة زمن المستقبل البسيط للأفعال المنتظمة في المجموعات الثلاث\n- **المبدأ اللغوي:** يصاغ المستقبل البسيط للأفعال المنتظمة بإضافة النهايات إلى المصدر كاملاً: é, ás, á, emos, éis, án لجميع المجموعات (cantaré, comeré, viviré).\n- **التطبيق الإعرابي:** تشترك جميع الأفعال المنتظمة في نفس نهايات المستقبل البسيط بصورة موحدة سواء كانت منتهية بـ ar أو er أو ir.\n- **السياق النموذجي:** تتميز جميع نهايات المستقبل البسيط بحملها علامة النبرة المكتوبة (Acento/Tilde) باستثناء ضمير الجمع نحن (-emos).\n\n### ٣. الأفعال الشاذة بسقوط حرف العلة (poder, saber, caber, haber, querer)\n- **الوظيفة التواصلية:** تسقط الأفعال poder و saber و caber و haber و querer حرف العلة e من جذر المصدر لتكوين جذر المستقبل الشاذ (podré, sabré, cabré, habrá, querré).\n- **مصفوفة الاستخدام:** تتصل الجذور الشاذة المختصرة بنهايات المستقبل البسيط المعتادة بانتظام عبر كافة الضمائر الشخصية.\n- **استراتيجية الامتحان:** يكتسب فعل querer تضعيفاً في حرف الراء (querré) نتيجة سقوط حرف العلة e والتقاء الراء الساكنة بالراء اللاحقة.",
        formulas: [
          {
            labelEn: "Proyectos y planes futuros: El concurso escolar, el medio ambiente y el reciclaje",
            labelAr: "المشاريع والخطط المستقبلية: المسابقة المدرسية، البيئة وإعادة التدوير",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Formación del Futuro Simple de los verbos regulares (-ar, -er, -ir)",
            labelAr: "صياغة زمن المستقبل البسيط للأفعال المنتظمة في المجموعات الثلاث",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Verbos irregulares en el Futuro: Pérdida de vocal temática (poder, saber, caber, haber, querer)",
            labelAr: "الأفعال الشاذة بسقوط حرف العلة (poder, saber, caber, haber, querer)",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Spanish (¡Hola! / ¡Español!)',
          bookTitleAr: 'كتاب اللغة الإسبانية الرسمي (¡Hola!) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH01-L1',
          pageRange: '5-24'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Proyectos y planes futuros: El concurso escolar, el medio ambiente y el reciclaje",
          titleAr: "خطة الدرس التوجيهية: المشاريع والخطط المستقبلية: المسابقة المدرسية، البيئة وإعادة التدوير",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH01-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Proyectos y planes futuros: El concurso escolar, el medio ambiente y el reciclaje",
            "Distinguish morpho-syntactic nuances in Formación del Futuro Simple de los verbos regulares (-ar, -er, -ir)",
            "Apply communicative strategies in Verbos irregulares en el Futuro: Pérdida de vocal temática (poder, saber, caber, haber, querer)"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ المشاريع والخطط المستقبلية: المسابقة المدرسية، البيئة وإعادة التدوير",
            "التمييز بين الفروق الصرفية والتركيبية في صياغة زمن المستقبل البسيط للأفعال المنتظمة في المجموعات الثلاث",
            "تطبيق مهارات التواصل الشفهي والكتابي في الأفعال الشاذة بسقوط حرف العلة (poder, saber, caber, haber, querer)"
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
            questionEn: "What is the core grammatical rule governing Proyectos y planes futuros: El concurso escolar, el medio ambiente y el reciclaje?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ المشاريع والخطط المستقبلية: المسابقة المدرسية، البيئة وإعادة التدوير؟",
            solutionEn: "Students express future intentions using the structure \"pensar + infinitivo\" or the future simple tense (Este año participaremos en el concurso escolar).",
            solutionAr: "يعبر الطلاب عن النوايا المستقبلية باستخدام صيغة pensar + المصدر أو زمن المستقبل البسيط (هذا العام سنشارك في المسابقة المدرسية)."
          }
        },
        worksheet: {
          id: 'th_es_ch1_l1_ws',
          titleEn: "Worksheet: Proyectos y planes futuros: El concurso escolar, el medio ambiente y el reciclaje",
          titleAr: "ورقة عمل: المشاريع والخطط المستقبلية: المسابقة المدرسية، البيئة وإعادة التدوير",
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
        id: 'th_es_ch1_l2',
        titleEn: "Verbos irregulares en el Futuro: Inserción de -d- y formas especiales (tener, venir, salir, poner, valer, hacer, decir)",
        titleAr: "الأفعال الشاذة بإضافة حرف d والأشكال الخاصة (tener, venir, salir, poner, valer, hacer, decir)",
        summaryEn: "Verbs like tener, venir, salir, poner, and valer insert an epenthetic -d- into their stems (tendré, vendré, saldré, pondré, valdré).",
        summaryAr: "تضيف أفعال tener و venir و salir و poner و valer حرف d صوتياً مقحماً في جذورها (tendré, vendré, saldré, pondré, valdré).",
        theoryContentEn: "### 1. Verbos irregulares en el Futuro: Inserción de -d- y formas especiales (tener, venir, salir, poner, valer, hacer, decir)\n- **Core Rule:** Verbs like tener, venir, salir, poner, and valer insert an epenthetic -d- into their stems (tendré, vendré, saldré, pondré, valdré).\n- **Syntactic Structure:** The verbs \"hacer\" and \"decir\" undergo radical stem contractions: hacer becomes har- (haré, harás) and decir becomes dir- (diré, dirás).\n- **Analytical Perspective:** In ministerial exams, distinguishing between \"tendré\" (I will have), \"pondré\" (I will put), and \"podré\" (I will be able) tests lexical and orthographic accuracy.\n\n### 2. Usos comunicativos del Futuro: Proyectos, Promesas, Predicciones e Hipótesis en el Presente\n- **Linguistic Principle:** The future simple expresses concrete future commitments and solemn promises (Te prometo que estudiaré todos los días).\n- **Grammar Application:** The \"Futuro de Hipótesis o Probabilidad\" estimates an unknown fact in the present (¿Qué hora es? - Serán las cuatro / ¿Dónde está Juan? - Estará en su casa).\n- **Advanced Context:** Ministerial exam situational items test the pragmatic distinction between forecasting future weather and formulating an assumption about someone’s present age.\n\n### 3. Vocabulario del medio ambiente y ecología: Energías limpias, cuidar la naturaleza y separar residuos\n- **Communicative Function:** Environmental vocabulary includes cuidar los bosques, proteger los animales en peligro de extinción, and plantar árboles.\n- **Usage Matrix:** Waste management practices require using designated recycling containers: contenedor azul (papel y cartón), amarillo (plásticos y envases), and verde (vidrio).\n- **Exam Strategy:** Evaluating green urban initiatives links civic responsibility with renewable energy technologies such as solar panels and wind farms.",
        theoryContentAr: "### ١. الأفعال الشاذة بإضافة حرف d والأشكال الخاصة (tener, venir, salir, poner, valer, hacer, decir)\n- **القاعدة الأساسية:** تضيف أفعال tener و venir و salir و poner و valer حرف d صوتياً مقحماً في جذورها (tendré, vendré, saldré, pondré, valdré).\n- **التركيب النحوي:** يخضع فعلا hacer و decir لتقصير جذري في ساق المستقبل: فتصبح hacer في صورة har- (سأفعل haré) وتصبح decir في صورة dir- (سأقول diré).\n- **التحليل المتقدم:** يعد التمييز الدقيق بين tendré (سأملك) و pondré (سأضع) و podré (سأستطيع) محوراً جوهرياً لقياس الدقة الصرفية والإملائية.\n\n### ٢. الاستخدامات التواصلية للمستقبل: الخطط، الوعود، التنبؤات، وفرضيات الحاضر والتخمين\n- **المبدأ اللغوي:** يستخدم المستقبل البسيط للتعبير عن الالتزامات المستقبلية المحددة والوعود القاطعة (أعدك بأنني سأذاكر كل يوم).\n- **التطبيق الإعرابي:** يعبر مستقبل التخمين أو الاحتمال عن افتراض غير مؤكد في الزمن الحاضر (كم الساعة؟ - قد تكون الرابعة serán las cuatro / أين فلان؟ - ربما في منزله estará).\n- **السياق النموذجي:** تختبر أسئلة المواقف الوزارية التفريق الدلالي بين التنبؤ بالأحوال الجوية مستقبلاً وصياغة التخمين والافتراض لعمر أو حالة شخص في الحاضر.\n\n### ٣. المفردات البيئية والإيكولوجية: الطاقة المتجددة، حماية الطبيعة، وفرز النفايات\n- **الوظيفة التواصلية:** تشمل المفردات البيئية: رعاية الغابات، حماية الحيوانات المهددة بالانقراض، وزراعة الأشجار.\n- **مصفوفة الاستخدام:** تتطلب إدارة المخلفات استخدام حاويات التدوير الملونة المعتمدة: الحاوية الزرقاء (للورق والكرتون)، الصفراء (للبلاستيك والعبوات)، والخضراء (للزجاج).\n- **استراتيجية الامتحان:** يربط تقييم المبادرات الحضرية الخضراء بين المسؤولية المدنية وتقنيات الطاقة المتجددة كالخلايا الشمسية ومزارع الرياح.",
        formulas: [
          {
            labelEn: "Verbos irregulares en el Futuro: Inserción de -d- y formas especiales (tener, venir, salir, poner, valer, hacer, decir)",
            labelAr: "الأفعال الشاذة بإضافة حرف d والأشكال الخاصة (tener, venir, salir, poner, valer, hacer, decir)",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Usos comunicativos del Futuro: Proyectos, Promesas, Predicciones e Hipótesis en el Presente",
            labelAr: "الاستخدامات التواصلية للمستقبل: الخطط، الوعود، التنبؤات، وفرضيات الحاضر والتخمين",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Vocabulario del medio ambiente y ecología: Energías limpias, cuidar la naturaleza y separar residuos",
            labelAr: "المفردات البيئية والإيكولوجية: الطاقة المتجددة، حماية الطبيعة، وفرز النفايات",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Spanish (¡Hola! / ¡Español!)',
          bookTitleAr: 'كتاب اللغة الإسبانية الرسمي (¡Hola!) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH01-L2',
          pageRange: '25-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Verbos irregulares en el Futuro: Inserción de -d- y formas especiales (tener, venir, salir, poner, valer, hacer, decir)",
          titleAr: "خطة الدرس التوجيهية: الأفعال الشاذة بإضافة حرف d والأشكال الخاصة (tener, venir, salir, poner, valer, hacer, decir)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH01-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Verbos irregulares en el Futuro: Inserción de -d- y formas especiales (tener, venir, salir, poner, valer, hacer, decir)",
            "Distinguish morpho-syntactic nuances in Usos comunicativos del Futuro: Proyectos, Promesas, Predicciones e Hipótesis en el Presente",
            "Apply communicative strategies in Vocabulario del medio ambiente y ecología: Energías limpias, cuidar la naturaleza y separar residuos"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ الأفعال الشاذة بإضافة حرف d والأشكال الخاصة (tener, venir, salir, poner, valer, hacer, decir)",
            "التمييز بين الفروق الصرفية والتركيبية في الاستخدامات التواصلية للمستقبل: الخطط، الوعود، التنبؤات، وفرضيات الحاضر والتخمين",
            "تطبيق مهارات التواصل الشفهي والكتابي في المفردات البيئية والإيكولوجية: الطاقة المتجددة، حماية الطبيعة، وفرز النفايات"
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
            questionEn: "What is the core grammatical rule governing Verbos irregulares en el Futuro: Inserción de -d- y formas especiales (tener, venir, salir, poner, valer, hacer, decir)?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ الأفعال الشاذة بإضافة حرف d والأشكال الخاصة (tener, venir, salir, poner, valer, hacer, decir)؟",
            solutionEn: "Verbs like tener, venir, salir, poner, and valer insert an epenthetic -d- into their stems (tendré, vendré, saldré, pondré, valdré).",
            solutionAr: "تضيف أفعال tener و venir و salir و poner و valer حرف d صوتياً مقحماً في جذورها (tendré, vendré, saldré, pondré, valdré)."
          }
        },
        worksheet: {
          id: 'th_es_ch1_l2_ws',
          titleEn: "Worksheet: Verbos irregulares en el Futuro: Inserción de -d- y formas especiales (tener, venir, salir, poner, valer, hacer, decir)",
          titleAr: "ورقة عمل: الأفعال الشاذة بإضافة حرف d والأشكال الخاصة (tener, venir, salir, poner, valer, hacer, decir)",
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
    databank: spanishCh1Databank,
    solvedExamples: spanishCh1SolvedExamples,
    exerciseProblems: spanishCh1Exercises
  },
  {
    id: 'th_es_ch2',
    chapterNumber: 2,
    titleEn: "Unidad 2: La descripción de personas, carácter, estados de ánimo y contraste Ser / Estar / Haber",
    titleAr: "الوحدة الثانية: وصف الأشخاص، الشخصية، الحالات النفسية والفرق بين Ser و Estar و Haber",
    descriptionEn: "Physical and personality descriptions, character adjectives, complete syntactic contrast between SER, ESTAR, and HABER (hay), adjectives changing meaning with ser/estar, and emotional states.",
    descriptionAr: "الوصف المظهري والسمات الشخصية، التفرقة النحوية والدلالية بين أفعال الكينونة (Ser و Estar و Haber/Hay)، والصفات التي يتغير معناها بين الثبات والتغير، والتعبير عن المشاعر.",
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
        id: 'th_es_ch2_l1',
        titleEn: "Descripción física y de la personalidad: Adjetivos de carácter y cualidades humanas",
        titleAr: "الوصف الشكلي والسمات الشخصية: صفات الطابع والأخلاق والمظهر الخارجي",
        summaryEn: "Personality adjectives include optimista, tímido, generoso, trabajador, simpático, and responsable.",
        summaryAr: "تشمل صفات الشخصية والأخلاق: متفائل optimista، خجول tímido، كريم generoso، مجتهد trabajador، لطيف simpático، ومسؤول responsable.",
        theoryContentEn: "### 1. Descripción física y de la personalidad: Adjetivos de carácter y cualidades humanas\n- **Core Rule:** Personality adjectives include optimista, tímido, generoso, trabajador, simpático, and responsable.\n- **Syntactic Structure:** Adjectives ending in -a or -e generally maintain the same form for both masculine and feminine singular (un chico optimista / una chica optimista).\n- **Analytical Perspective:** Adjectives ending in a consonant like \"trabajador\" add an -a in the feminine form (trabajador -> trabajadora, hablador -> habladora).\n\n### 2. Usos fundamentales del verbo SER: Identidad, profesión, nacionalidad y rasgos inherentes\n- **Linguistic Principle:** The verb SER expresses essential permanent identity, origin, nationality, and profession (Soy estudiante, Juan es de Madrid, Marta es inteligente).\n- **Grammar Application:** SER is used to indicate time, dates, prices, and the material an object is made of (Son las tres, Hoy es lunes, La mesa es de madera).\n- **Advanced Context:** SER defines the inherent nature or normal constitution of a subject rather than a temporary modification or transitory state.\n\n### 3. Usos fundamentales del verbo ESTAR: Ubicación espacial, estados temporales y de salud\n- **Communicative Function:** The verb ESTAR defines geographic or physical location and temporary states of health or mood (El Cairo está en Egipto, Estoy cansado, Mi hermano está enfermo).\n- **Usage Matrix:** ESTAR is combined with the gerund (-ando, -iendo) to form the continuous present expressing actions in progress (Estamos estudiando español).\n- **Exam Strategy:** ESTAR is strictly used to locate defined and specific entities (El libro está sobre la mesa / La farmacia está cerca).",
        theoryContentAr: "### ١. الوصف الشكلي والسمات الشخصية: صفات الطابع والأخلاق والمظهر الخارجي\n- **القاعدة الأساسية:** تشمل صفات الشخصية والأخلاق: متفائل optimista، خجول tímido، كريم generoso، مجتهد trabajador، لطيف simpático، ومسؤول responsable.\n- **التركيب النحوي:** تحافظ الصفات المنتهية بـ -a أو -e على نفس نهايتها للمفرد المذكر والمؤنث دون تغيير (شاب متفائل / فتاة متفائلة optimista).\n- **التحليل المتقدم:** تكتسب الصفات المنتهية بساكن مثل trabajador حرف a عند التأنيث: مثل trabajadora و habladora.\n\n### ٢. الاستخدامات الجوهرية لفعل الكينونة SER: الهوية، المهنة، الجنسية، والصفات الدائمة الأصيلة\n- **المبدأ اللغوي:** يعبر فعل SER عن الهوية الجوهرية الدائمة، الأصل، الجنسية، والمهنة (أنا طالب soy estudiante، هو من مدريد es de Madrid، مارتا ذكية es inteligente).\n- **التطبيق الإعرابي:** يستخدم SER لتحديد الوقت، الأيام والتواريخ، والأسعار الإجمالية، والمادة الخام المصنوع منها الشيء (الساعة الثالثة son las tres، الطاولة من خشب es de madera).\n- **السياق النموذجي:** يحدد فعل SER الطبيعة التكوينية والجوهر الدائم للموصوف، بخلاف التغيرات العارضة أو الحالات الطارئة.\n\n### ٣. الاستخدامات الجوهرية لفعل ESTAR: الموقع الجغرافي، الحالات المزاجية والجسدية المؤقتة\n- **الوظيفة التواصلية:** يحدد فعل ESTAR الموقع الجغرافي المكاني، والحالات الصحية والمزاجية المؤقتة (القاهرة تقع في مصر está en Egipto، أنا متعب estoy cansado، هو مريض está enfermo).\n- **مصفوفة الاستخدام:** يقترن فعل ESTAR باسم الفاعل (Gerundio) لتكوين المضارع المستمر الدال على حدث قيد التحقق الآن (نحن ندرس الإسبانية estamos estudiando).\n- **استراتيجية الامتحان:** يستخدم ESTAR حصراً لتحديد مواقع الأشياء والأماكن المعرفة والمحددة (الكتاب موجود على الطاولة está sobre la mesa).",
        formulas: [
          {
            labelEn: "Descripción física y de la personalidad: Adjetivos de carácter y cualidades humanas",
            labelAr: "الوصف الشكلي والسمات الشخصية: صفات الطابع والأخلاق والمظهر الخارجي",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Usos fundamentales del verbo SER: Identidad, profesión, nacionalidad y rasgos inherentes",
            labelAr: "الاستخدامات الجوهرية لفعل الكينونة SER: الهوية، المهنة، الجنسية، والصفات الدائمة الأصيلة",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Usos fundamentales del verbo ESTAR: Ubicación espacial, estados temporales y de salud",
            labelAr: "الاستخدامات الجوهرية لفعل ESTAR: الموقع الجغرافي، الحالات المزاجية والجسدية المؤقتة",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Spanish (¡Hola! / ¡Español!)',
          bookTitleAr: 'كتاب اللغة الإسبانية الرسمي (¡Hola!) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH02-L1',
          pageRange: '5-24'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Descripción física y de la personalidad: Adjetivos de carácter y cualidades humanas",
          titleAr: "خطة الدرس التوجيهية: الوصف الشكلي والسمات الشخصية: صفات الطابع والأخلاق والمظهر الخارجي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH02-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Descripción física y de la personalidad: Adjetivos de carácter y cualidades humanas",
            "Distinguish morpho-syntactic nuances in Usos fundamentales del verbo SER: Identidad, profesión, nacionalidad y rasgos inherentes",
            "Apply communicative strategies in Usos fundamentales del verbo ESTAR: Ubicación espacial, estados temporales y de salud"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ الوصف الشكلي والسمات الشخصية: صفات الطابع والأخلاق والمظهر الخارجي",
            "التمييز بين الفروق الصرفية والتركيبية في الاستخدامات الجوهرية لفعل الكينونة SER: الهوية، المهنة، الجنسية، والصفات الدائمة الأصيلة",
            "تطبيق مهارات التواصل الشفهي والكتابي في الاستخدامات الجوهرية لفعل ESTAR: الموقع الجغرافي، الحالات المزاجية والجسدية المؤقتة"
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
            questionEn: "What is the core grammatical rule governing Descripción física y de la personalidad: Adjetivos de carácter y cualidades humanas?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ الوصف الشكلي والسمات الشخصية: صفات الطابع والأخلاق والمظهر الخارجي؟",
            solutionEn: "Personality adjectives include optimista, tímido, generoso, trabajador, simpático, and responsable.",
            solutionAr: "تشمل صفات الشخصية والأخلاق: متفائل optimista، خجول tímido، كريم generoso، مجتهد trabajador، لطيف simpático، ومسؤول responsable."
          }
        },
        worksheet: {
          id: 'th_es_ch2_l1_ws',
          titleEn: "Worksheet: Descripción física y de la personalidad: Adjetivos de carácter y cualidades humanas",
          titleAr: "ورقة عمل: الوصف الشكلي والسمات الشخصية: صفات الطابع والأخلاق والمظهر الخارجي",
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
        id: 'th_es_ch2_l2',
        titleEn: "Adjetivos que cambian de significado con SER y ESTAR (listo, bueno, rico, verde, malo)",
        titleAr: "الصفات التي يتغير معناها الجذري بحسب اقترانها بـ SER أو ESTAR",
        summaryEn: "\"Ser listo\" means to be clever/intelligent, while \"estar listo\" means to be ready or prepared (Juan es muy listo / ¿Estás listo para salir?).",
        summaryAr: "تعني ser listo الذكاء والفطنة الدائمة، بينما تعني estar listo الجاهزية والاستعداد التام (هو ذكي جداً es listo / هل أنت مستعد للخروج estás listo؟).",
        theoryContentEn: "### 1. Adjetivos que cambian de significado con SER y ESTAR (listo, bueno, rico, verde, malo)\n- **Core Rule:** \"Ser listo\" means to be clever/intelligent, while \"estar listo\" means to be ready or prepared (Juan es muy listo / ¿Estás listo para salir?).\n- **Syntactic Structure:** \"Ser bueno\" denotes moral kindness or high intrinsic quality, whereas \"estar bueno\" refers to delicious taste or good physical shape.\n- **Analytical Perspective:** \"Ser rico\" indicates possessing financial wealth, while \"estar rico\" indicates that food is exceptionally flavorful and appetizing.\n\n### 2. El contraste entre HABER (Hay) y ESTAR: Existencia indeterminada vs. Localización determinada\n- **Linguistic Principle:** The impersonal form \"hay\" expresses existence and is followed by indefinite articles, numbers, or plural nouns (En mi barrio hay una farmacia / Hay tres parques).\n- **Grammar Application:** ESTAR is strictly paired with definite articles (el, la, los, las), possessives (mi, tu), or proper names (La farmacia está en la esquina).\n- **Advanced Context:** A classic ministerial trap presents sentences with definite articles: choosing \"hay la biblioteca\" is strictly ungrammatical; it must be \"la biblioteca está\".\n\n### 3. Expresión de estados de ánimo y contraste gramatical entre \"Muy\" y \"Mucho\"\n- **Communicative Function:** \"Muy\" is an invariable adverb modifying adjectives and adverbs (muy contento, muy bien, muy inteligente).\n- **Usage Matrix:** \"Mucho/a/os/as\" functions as an adjective agreeing with nouns (mucho dinero, muchas gracias) or as an invariable adverb following verbs (estudia mucho).\n- **Exam Strategy:** Analyzing situational dialogues requires selecting \"muy\" before participles functioning as adjectives of mood (muy preocupado, muy ilusionado).",
        theoryContentAr: "### ١. الصفات التي يتغير معناها الجذري بحسب اقترانها بـ SER أو ESTAR\n- **القاعدة الأساسية:** تعني ser listo الذكاء والفطنة الدائمة، بينما تعني estar listo الجاهزية والاستعداد التام (هو ذكي جداً es listo / هل أنت مستعد للخروج estás listo؟).\n- **التركيب النحوي:** تدل ser bueno على الصلاح وحسن الخلق أو الجودة، في حين تعني estar bueno حلاوة ولذة الطعم للمأكولات أو التعافي البدني.\n- **التحليل المتقدم:** تعني ser rico الثراء والغنى المالي، في حين تعني estar rico أن الطعام شهي ولذيذ الطعم للغاية.\n\n### ٢. المقارنة الفاصلة بين HABER (صيغة Hay) و ESTAR: الوجود غير المعرف مقابل الموقع المحدد\n- **المبدأ اللغوي:** تعبر الصيغة غير الشخصية hay عن الوجود، ويليها أداة نكرة أو أرقام أو اسم نكرة (في حيي توجد صيدلية hay una farmacia / هناك ثلاثة متنزهات hay tres).\n- **التطبيق الإعرابي:** يقترن فعل ESTAR وجوباً بأدوات التعريف (el, la)، أو ضمائر الملكية (mi, tu)، أو أسماء العلم (الصيدلية تقع في زاوية الشارع la farmacia está).\n- **السياق النموذجي:** تعتمد الفخاخ الامتحانية على إغراء الطالب باختيار hay مع أداة تعريف (وهو خطأ جسيم لا يجوز)، فالصواب الحتمي: la biblioteca está.\n\n### ٣. التعبير عن الحالات النفسية والفرق النحوي الدقيق بين Muy و Mucho\n- **الوظيفة التواصلية:** تعد Muy ظرفاً غير متغير يسبق الصفات والظروف فقط لتقويتها (سعيد جداً muy contento، جيد جداً muy bien).\n- **مصفوفة الاستخدام:** تأتي mucho كصفة تتطابق مع الاسم في النوع والعدد (مال كثير mucho dinero، شكراً جزيلاً muchas gracias)، أو كظرف ثابت بعد الفعل (يدرس كثيراً estudia mucho).\n- **استراتيجية الامتحان:** يتطلب تحليل الحوارات اختيار muy حتماً قبل أسماء المفعول التي تعمل كصفات للحالة المزاجية (قلق جداً muy preocupado).",
        formulas: [
          {
            labelEn: "Adjetivos que cambian de significado con SER y ESTAR (listo, bueno, rico, verde, malo)",
            labelAr: "الصفات التي يتغير معناها الجذري بحسب اقترانها بـ SER أو ESTAR",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "El contraste entre HABER (Hay) y ESTAR: Existencia indeterminada vs. Localización determinada",
            labelAr: "المقارنة الفاصلة بين HABER (صيغة Hay) و ESTAR: الوجود غير المعرف مقابل الموقع المحدد",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Expresión de estados de ánimo y contraste gramatical entre \"Muy\" y \"Mucho\"",
            labelAr: "التعبير عن الحالات النفسية والفرق النحوي الدقيق بين Muy و Mucho",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Spanish (¡Hola! / ¡Español!)',
          bookTitleAr: 'كتاب اللغة الإسبانية الرسمي (¡Hola!) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH02-L2',
          pageRange: '25-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Adjetivos que cambian de significado con SER y ESTAR (listo, bueno, rico, verde, malo)",
          titleAr: "خطة الدرس التوجيهية: الصفات التي يتغير معناها الجذري بحسب اقترانها بـ SER أو ESTAR",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH02-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Adjetivos que cambian de significado con SER y ESTAR (listo, bueno, rico, verde, malo)",
            "Distinguish morpho-syntactic nuances in El contraste entre HABER (Hay) y ESTAR: Existencia indeterminada vs. Localización determinada",
            "Apply communicative strategies in Expresión de estados de ánimo y contraste gramatical entre \"Muy\" y \"Mucho\""
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ الصفات التي يتغير معناها الجذري بحسب اقترانها بـ SER أو ESTAR",
            "التمييز بين الفروق الصرفية والتركيبية في المقارنة الفاصلة بين HABER (صيغة Hay) و ESTAR: الوجود غير المعرف مقابل الموقع المحدد",
            "تطبيق مهارات التواصل الشفهي والكتابي في التعبير عن الحالات النفسية والفرق النحوي الدقيق بين Muy و Mucho"
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
            questionEn: "What is the core grammatical rule governing Adjetivos que cambian de significado con SER y ESTAR (listo, bueno, rico, verde, malo)?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ الصفات التي يتغير معناها الجذري بحسب اقترانها بـ SER أو ESTAR؟",
            solutionEn: "\"Ser listo\" means to be clever/intelligent, while \"estar listo\" means to be ready or prepared (Juan es muy listo / ¿Estás listo para salir?).",
            solutionAr: "تعني ser listo الذكاء والفطنة الدائمة، بينما تعني estar listo الجاهزية والاستعداد التام (هو ذكي جداً es listo / هل أنت مستعد للخروج estás listo؟)."
          }
        },
        worksheet: {
          id: 'th_es_ch2_l2_ws',
          titleEn: "Worksheet: Adjetivos que cambian de significado con SER y ESTAR (listo, bueno, rico, verde, malo)",
          titleAr: "ورقة عمل: الصفات التي يتغير معناها الجذري بحسب اقترانها بـ SER أو ESTAR",
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
    databank: spanishCh2Databank,
    solvedExamples: spanishCh2SolvedExamples,
    exerciseProblems: spanishCh2Exercises
  },
  {
    id: 'th_es_ch3',
    chapterNumber: 3,
    titleEn: "Unidad 3: El pasado y las experiencias biográficas: Indefinido vs. Imperfecto vs. Perfecto",
    titleAr: "الوحدة الثالثة: الحديث عن الماضي والسير الذاتية: مقارنة أزمنة الماضي وحروف الجر Por و Para",
    descriptionEn: "Biographical narratives, completed past events with Pretérito Indefinido, descriptive habits with Pretérito Imperfecto, recent experiences with Pretérito Perfecto, and Por vs. Para contrast.",
    descriptionAr: "السرد التاريخي والسير الذاتية، أحداث الماضي القاطعة (الماضي البسيط Indefinido)، العادات والوصف في الماضي (الماضي المستمر Imperfecto)، الماضي القريب (Perfecto)، والفرق بين Por و Para.",
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
        id: 'th_es_ch3_l1',
        titleEn: "El Pretérito Indefinido de verbos regulares y marcadores temporales precisos",
        titleAr: "الماضي البسيط (Pretérito Indefinido) للأفعال المنتظمة وعلاماته الزمنية الدقيقة",
        summaryEn: "Regular verbs form the Pretérito Indefinido with endings: -é, -aste, -ó, -amos, -asteis, -aron (-ar) and -í, -iste, -ió, -imos, -isteis, -ieron (-er/-ir).",
        summaryAr: "يصاغ الماضي البسيط للأفعال المنتظمة بالنهايات: é, aste, ó, amos, asteis, aron لأفعال ar، و í, iste, ió, imos, isteis, ieron لأفعال er و ir.",
        theoryContentEn: "### 1. El Pretérito Indefinido de verbos regulares y marcadores temporales precisos\n- **Core Rule:** Regular verbs form the Pretérito Indefinido with endings: -é, -aste, -ó, -amos, -asteis, -aron (-ar) and -í, -iste, -ió, -imos, -isteis, -ieron (-er/-ir).\n- **Syntactic Structure:** Temporal markers strictly associated with Indefinido designate completed historical points: ayer, anoche, el año pasado, en 2021, and hace tres días.\n- **Analytical Perspective:** The first person singular (-é, -í) and third person singular (-ó, -ió) obligatorily carry graphic accents to mark past tense morphology.\n\n### 2. Verbos irregulares fundamentales en Pretérito Indefinido (fui, estuve, tuve, puse, pude, supe, hice, dije)\n- **Linguistic Principle:** The verbs \"ser\" and \"ir\" share identical forms in the Pretérito Indefinido: fui, fuiste, fue, fuimos, fuisteis, fueron.\n- **Grammar Application:** Verbs with irregular stems share unstressed endings (-e, -iste, -o, -imos, -isteis, -ieron): estar -> estuv-, tener -> tuv-, poner -> pus-, poder -> pud-.\n- **Advanced Context:** The verbs \"hacer\" (hizo with a -z- in the 3rd person singular) and \"decir/traer\" (-jeron without an -i- in the 3rd person plural: dijeron, trajeron) are frequent exam checkpoints.\n\n### 3. El Pretérito Imperfecto: Formación (-aba, -ía), verbos irregulares (ser, ir, ver) y descripción de hábitos pasados\n- **Communicative Function:** Pretérito Imperfecto forms with -aba for -ar verbs (cantaba, cantabas) and -ía for -er/-ir verbs (comía, vivía).\n- **Usage Matrix:** Only three verbs are irregular in the Pretérito Imperfecto in the entire Spanish language: ser (era), ir (iba), and ver (veía).\n- **Exam Strategy:** Imperfecto portrays ongoing habitual past activities, atmospheric backgrounds, physical descriptions, and past age (Cuando tenía diez años, vivía en Alejandría).",
        theoryContentAr: "### ١. الماضي البسيط (Pretérito Indefinido) للأفعال المنتظمة وعلاماته الزمنية الدقيقة\n- **القاعدة الأساسية:** يصاغ الماضي البسيط للأفعال المنتظمة بالنهايات: é, aste, ó, amos, asteis, aron لأفعال ar، و í, iste, ió, imos, isteis, ieron لأفعال er و ir.\n- **التركيب النحوي:** تقترن علامات زمنية حاسمة بالماضي البسيط لتدل على فترات زمنية منتهية تماماً: مثل أمس ayer، العام الماضي el año pasado، وعام 2021.\n- **التحليل المتقدم:** يحمل ضمير المتكلم (é, í) والغائب المفرد (ó, ió) نبرة كتابية إجبارية (Tilde) للتمييز الصرفي الدقيق عن صيغ الحاضر والمستقبل.\n\n### ٢. الأفعال الشاذة الرئيسية في الماضي البسيط (fui, estuve, tuve, puse, pude, supe, hice, dije)\n- **المبدأ اللغوي:** يتطابق فعلا ser (كان) و ir (ذهب) تماماً في تصريف الماضي البسيط: fui, fuiste, fue, fuimos, fuisteis, fueron.\n- **التطبيق الإعرابي:** تشترك الأفعال ذات الجذور الشاذة في نهايات موحدة غير منبورة (-e, -iste, -o, -imos..): مثل estuv- (كان) و tuv- (امتلك) و pus- (وضع) و pud- (استطاع).\n- **السياق النموذجي:** يعد تصريف hizo (بحرف z مع الغائب المفرد) وتصريف dijeron و trajeron (بحذف الياء في ضمير الجمع ellos) ركيزة دائمة في أسئلة الامتحان الوزاري.\n\n### ٣. الماضي المستمر (Pretérito Imperfecto): صياغته، أفعاله الشاذة الثلاثة (ser, ir, ver)، ووصف العادات الماضية\n- **الوظيفة التواصلية:** يصاغ الماضي المستمر بنهايات aba لأفعال المجموعة الأولى (cantaba) ونهايات ía لأفعال المجموعتين الثانية والثالثة (comía, vivía).\n- **مصفوفة الاستخدام:** توجد ثلاثة أفعال شاذة فقط في زمن الماضي المستمر في قواعد اللغة الإسبانية بأسرها: فعل ser (era)، وفعل ir (iba)، وفعل ver (veía).\n- **استراتيجية الامتحان:** يختص الماضي المستمر بوصف العادات المتكررة قديماً، الوصف المظهري والعمري، والحالات النفسية والظروف الخلفية في الماضي.",
        formulas: [
          {
            labelEn: "El Pretérito Indefinido de verbos regulares y marcadores temporales precisos",
            labelAr: "الماضي البسيط (Pretérito Indefinido) للأفعال المنتظمة وعلاماته الزمنية الدقيقة",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Verbos irregulares fundamentales en Pretérito Indefinido (fui, estuve, tuve, puse, pude, supe, hice, dije)",
            labelAr: "الأفعال الشاذة الرئيسية في الماضي البسيط (fui, estuve, tuve, puse, pude, supe, hice, dije)",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "El Pretérito Imperfecto: Formación (-aba, -ía), verbos irregulares (ser, ir, ver) y descripción de hábitos pasados",
            labelAr: "الماضي المستمر (Pretérito Imperfecto): صياغته، أفعاله الشاذة الثلاثة (ser, ir, ver)، ووصف العادات الماضية",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Spanish (¡Hola! / ¡Español!)',
          bookTitleAr: 'كتاب اللغة الإسبانية الرسمي (¡Hola!) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH03-L1',
          pageRange: '5-24'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: El Pretérito Indefinido de verbos regulares y marcadores temporales precisos",
          titleAr: "خطة الدرس التوجيهية: الماضي البسيط (Pretérito Indefinido) للأفعال المنتظمة وعلاماته الزمنية الدقيقة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH03-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of El Pretérito Indefinido de verbos regulares y marcadores temporales precisos",
            "Distinguish morpho-syntactic nuances in Verbos irregulares fundamentales en Pretérito Indefinido (fui, estuve, tuve, puse, pude, supe, hice, dije)",
            "Apply communicative strategies in El Pretérito Imperfecto: Formación (-aba, -ía), verbos irregulares (ser, ir, ver) y descripción de hábitos pasados"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ الماضي البسيط (Pretérito Indefinido) للأفعال المنتظمة وعلاماته الزمنية الدقيقة",
            "التمييز بين الفروق الصرفية والتركيبية في الأفعال الشاذة الرئيسية في الماضي البسيط (fui, estuve, tuve, puse, pude, supe, hice, dije)",
            "تطبيق مهارات التواصل الشفهي والكتابي في الماضي المستمر (Pretérito Imperfecto): صياغته، أفعاله الشاذة الثلاثة (ser, ir, ver)، ووصف العادات الماضية"
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
            questionEn: "What is the core grammatical rule governing El Pretérito Indefinido de verbos regulares y marcadores temporales precisos?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ الماضي البسيط (Pretérito Indefinido) للأفعال المنتظمة وعلاماته الزمنية الدقيقة؟",
            solutionEn: "Regular verbs form the Pretérito Indefinido with endings: -é, -aste, -ó, -amos, -asteis, -aron (-ar) and -í, -iste, -ió, -imos, -isteis, -ieron (-er/-ir).",
            solutionAr: "يصاغ الماضي البسيط للأفعال المنتظمة بالنهايات: é, aste, ó, amos, asteis, aron لأفعال ar، و í, iste, ió, imos, isteis, ieron لأفعال er و ir."
          }
        },
        worksheet: {
          id: 'th_es_ch3_l1_ws',
          titleEn: "Worksheet: El Pretérito Indefinido de verbos regulares y marcadores temporales precisos",
          titleAr: "ورقة عمل: الماضي البسيط (Pretérito Indefinido) للأفعال المنتظمة وعلاماته الزمنية الدقيقة",
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
        id: 'th_es_ch3_l2',
        titleEn: "Contraste narrativo entre Pretérito Indefinido y Pretérito Imperfecto en relatos biográficos",
        titleAr: "التناغم والمقارنة السردية بين الماضي البسيط والماضي المستمر في الروايات والقصص",
        summaryEn: "Imperfecto sets the background scene and circumstances, while Indefinido introduces the interrupting or advancing historical event.",
        summaryAr: "يرسم الماضي المستمر المشهد الخلفي والظروف المرافقة، بينما يتدخل الماضي البسيط ليدخل الحدث القاطع والمفاجئ الذي يدفع بالقصة للأمام.",
        theoryContentEn: "### 1. Contraste narrativo entre Pretérito Indefinido y Pretérito Imperfecto en relatos biográficos\n- **Core Rule:** Imperfecto sets the background scene and circumstances, while Indefinido introduces the interrupting or advancing historical event.\n- **Syntactic Structure:** In compound narrative structures: \"Mientras caminaba por la calle (Imperfecto), vi a mi amigo Juan (Indefinido)\".\n- **Analytical Perspective:** Differentiating between an enduring condition in the past and a closed completed action with a stated temporal boundary defines higher-order narrative mastery.\n\n### 2. El Pretérito Perfecto Compuesto: Formación con HABER y marcadores de tiempo abierto (hoy, esta semana, nunca, ya)\n- **Linguistic Principle:** The Pretérito Perfecto is formed using the present of HABER (he, has, ha, hemos, habéis, han) plus the invariable past participle (he hablado, he comido).\n- **Grammar Application:** Markers linked to Pretérito Perfecto belong to an unclosed time unit including the present moment: hoy, esta mañana, este año, alguna vez, ya, todavía no.\n- **Advanced Context:** Irregular participles include: abierto (abrir), dicho (decir), escrito (escribir), hecho (hacer), puesto (poner), visto (ver), and vuelto (volver).\n\n### 3. Contraste de las preposiciones POR y PARA: Causa, duración y medio vs. Finalidad, destinatario y plazo\n- **Communicative Function:** POR indicates the cause, motive, or reason (No fue por la lluvia), whereas PARA denotes purpose, objective, or goal (Estudia para ser médico).\n- **Usage Matrix:** POR conveys duration of time and movement through a place (Caminamos por el parque), while PARA specifies deadlines and geographic destination (El trabajo es para el lunes / Salgo para Madrid).\n- **Exam Strategy:** Ministerial exam trap questions contrast \"trabajar por alguien\" (substituting or representing someone) with \"trabajar para alguien\" (being an employee of a company).",
        theoryContentAr: "### ١. التناغم والمقارنة السردية بين الماضي البسيط والماضي المستمر في الروايات والقصص\n- **القاعدة الأساسية:** يرسم الماضي المستمر المشهد الخلفي والظروف المرافقة، بينما يتدخل الماضي البسيط ليدخل الحدث القاطع والمفاجئ الذي يدفع بالقصة للأمام.\n- **التركيب النحوي:** في التركيبات السردية المركبة: بينما كنت أسير في الشارع (Imperfecto وصف ممتد)، رأيت صديقي (Indefinido حدث قاطع محدد).\n- **التحليل المتقدم:** يمثل التمييز بين الحالة المستمرة الممتدة في الماضي والحدث المحصور بإطار زمني محدد معياراً لقياس الكفاءة التعبيرية العليا.\n\n### ٢. الماضي القريب المركب (Pretérito Perfecto): صياغته مع فعل HABER وعلامات الزمن المفتوح المتصل بالحاضر\n- **المبدأ اللغوي:** يتركب الماضي القريب من تصريف فعل HABER في المضارع متبوعاً باسم المفعول الثابت غير القابل للتأنيث أو الجمع (he hablado, hemos comido).\n- **التطبيق الإعرابي:** تقترن علامات الماضي القريب بفترات زمنية مفتوحة تشمل اللحظة الراهنة: اليوم hoy، هذا الصباح esta mañana، هذا العام، وأدوات ya (بالفعل) و todavía no (ليس بعد).\n- **السياق النموذجي:** تشمل أسماء المفعول الشاذة: abierto (فتح)، dicho (قال)، escrito (كتب)، hecho (صنع/فعل)، puesto (وضع)، visto (رأى)، و vuelto (عقد/عاد).\n\n### ٣. المقارنة الدقيقة بين حرفي الجر POR و PARA: العلة والمدة والوسيلة مقابل الغاية والمتلقي والأجل المحدد\n- **الوظيفة التواصلية:** يشير حرف الجر POR إلى السبب والعلة والدافع (لم يحضر بسبب المطر)، بينما يعبر PARA عن الغاية والهدف المنشود (يدرس ليصبح طبيباً).\n- **مصفوفة الاستخدام:** يدل POR على المدة الزمنية وعبور المكان (تنزهنا عبر المتنزه por el parque)، في حين يحدد PARA المواعيد النهائية والوجهة المقصودة (para el lunes / para Madrid).\n- **استراتيجية الامتحان:** تركز أسئلة الفخاخ الوزارية على التفرقة بين trabajar por (العمل نيابة عن شخص) و trabajar para (العمل لحساب رب عمل أو شركة).",
        formulas: [
          {
            labelEn: "Contraste narrativo entre Pretérito Indefinido y Pretérito Imperfecto en relatos biográficos",
            labelAr: "التناغم والمقارنة السردية بين الماضي البسيط والماضي المستمر في الروايات والقصص",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "El Pretérito Perfecto Compuesto: Formación con HABER y marcadores de tiempo abierto (hoy, esta semana, nunca, ya)",
            labelAr: "الماضي القريب المركب (Pretérito Perfecto): صياغته مع فعل HABER وعلامات الزمن المفتوح المتصل بالحاضر",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Contraste de las preposiciones POR y PARA: Causa, duración y medio vs. Finalidad, destinatario y plazo",
            labelAr: "المقارنة الدقيقة بين حرفي الجر POR و PARA: العلة والمدة والوسيلة مقابل الغاية والمتلقي والأجل المحدد",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Spanish (¡Hola! / ¡Español!)',
          bookTitleAr: 'كتاب اللغة الإسبانية الرسمي (¡Hola!) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH03-L2',
          pageRange: '25-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Contraste narrativo entre Pretérito Indefinido y Pretérito Imperfecto en relatos biográficos",
          titleAr: "خطة الدرس التوجيهية: التناغم والمقارنة السردية بين الماضي البسيط والماضي المستمر في الروايات والقصص",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH03-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Contraste narrativo entre Pretérito Indefinido y Pretérito Imperfecto en relatos biográficos",
            "Distinguish morpho-syntactic nuances in El Pretérito Perfecto Compuesto: Formación con HABER y marcadores de tiempo abierto (hoy, esta semana, nunca, ya)",
            "Apply communicative strategies in Contraste de las preposiciones POR y PARA: Causa, duración y medio vs. Finalidad, destinatario y plazo"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ التناغم والمقارنة السردية بين الماضي البسيط والماضي المستمر في الروايات والقصص",
            "التمييز بين الفروق الصرفية والتركيبية في الماضي القريب المركب (Pretérito Perfecto): صياغته مع فعل HABER وعلامات الزمن المفتوح المتصل بالحاضر",
            "تطبيق مهارات التواصل الشفهي والكتابي في المقارنة الدقيقة بين حرفي الجر POR و PARA: العلة والمدة والوسيلة مقابل الغاية والمتلقي والأجل المحدد"
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
            questionEn: "What is the core grammatical rule governing Contraste narrativo entre Pretérito Indefinido y Pretérito Imperfecto en relatos biográficos?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ التناغم والمقارنة السردية بين الماضي البسيط والماضي المستمر في الروايات والقصص؟",
            solutionEn: "Imperfecto sets the background scene and circumstances, while Indefinido introduces the interrupting or advancing historical event.",
            solutionAr: "يرسم الماضي المستمر المشهد الخلفي والظروف المرافقة، بينما يتدخل الماضي البسيط ليدخل الحدث القاطع والمفاجئ الذي يدفع بالقصة للأمام."
          }
        },
        worksheet: {
          id: 'th_es_ch3_l2_ws',
          titleEn: "Worksheet: Contraste narrativo entre Pretérito Indefinido y Pretérito Imperfecto en relatos biográficos",
          titleAr: "ورقة عمل: التناغم والمقارنة السردية بين الماضي البسيط والماضي المستمر في الروايات والقصص",
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
    databank: spanishCh3Databank,
    solvedExamples: spanishCh3SolvedExamples,
    exerciseProblems: spanishCh3Exercises
  },
  {
    id: 'th_es_ch4',
    chapterNumber: 4,
    titleEn: "Unidad 4: Las compras, la ropa, la ciudad y el Modo Imperativo / Deseos y gustos",
    titleAr: "الوحدة الرابعة: التسوق، الملابس، التنقل في المدينة، صيغة الأمر والتعبير عن الأذواق والرغبات",
    descriptionEn: "Shopping in department stores, sizes and clothing materials, affirmative imperative (tú, vosotros, usted), object pronoun placement, expressing likes with GUSTAR, and city orientation.",
    descriptionAr: "التسوق في المتاجر، مقاسات وخامات الملابس، صيغة الأمر الإثباتي للأفراد والجمع، مواضع ضمائر المفعول به، التعبير عن الأذواق والاهتمامات بفعل Gustar، وتحديد الاتجاهات.",
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
        id: 'th_es_ch4_l1',
        titleEn: "Las compras y la ropa: Prendas de vestir, tallas, colores y materiales (de algodón, de lana, de cuero)",
        titleAr: "التسوق والملابس: الأزياء، المقاسات، الألوان والخامات (قطن، صوف، جلد)",
        summaryEn: "Clothing items include la camisa, los pantalones, el vestido, la falda, los zapatos, and la chaqueta.",
        summaryAr: "تشمل أسماء الملابس: القميص la camisa، البنطال los pantalones، الفستان el vestido، التنورة la falda، والحذاء los zapatos.",
        theoryContentEn: "### 1. Las compras y la ropa: Prendas de vestir, tallas, colores y materiales (de algodón, de lana, de cuero)\n- **Core Rule:** Clothing items include la camisa, los pantalones, el vestido, la falda, los zapatos, and la chaqueta.\n- **Syntactic Structure:** Preposition \"de\" specifies material: de algodón (cotton), de lana (wool), de cuero/piel (leather), and de seda (silk).\n- **Analytical Perspective:** Store dialogues feature standard ministerial formulas: \"¿Qué talla tiene?\", \"¿Me puedo probar este jersey?\", and \"¿Cuánto cuesta?\".\n\n### 2. Pronombres de Objeto Directo e Indirecto (lo, la, los, las / le, les) y su colocación sintáctica\n- **Linguistic Principle:** Direct object pronouns replace nouns: lo (masc. sing.), la (fem. sing.), los (masc. pl.), and las (fem. pl.) (¿Compras la camisa? - Sí, la compro).\n- **Grammar Application:** Pronouns precede conjugated verbs, but attach to the end of infinitives, gerunds, and affirmative imperatives (quiero comprarlo / cómpralo).\n- **Advanced Context:** When both indirect (le/les) and direct pronouns coincide, \"le/les\" transforms into \"se\" to avoid cacophony (Se lo compro, never *Le lo compro).\n\n### 3. El Modo Imperativo Afirmativo: Formas regulares e irregulares (tú, vosotros, usted, ustedes)\n- **Communicative Function:** The affirmative imperative for \"tú\" matches the 3rd person singular of the present indicative: ¡Habla! ¡Come! ¡Vive!\n- **Usage Matrix:** The imperative for \"vosotros\" is formed by replacing the final -r of the infinitive with a -d: ¡Hablad! ¡Comed! ¡Vivid!\n- **Exam Strategy:** Irregular affirmative imperatives for \"tú\" include: pon (poner), sal (salir), ten (tener), ven (venir), di (decir), haz (hacer), ve (ir), and sé (ser).",
        theoryContentAr: "### ١. التسوق والملابس: الأزياء، المقاسات، الألوان والخامات (قطن، صوف، جلد)\n- **القاعدة الأساسية:** تشمل أسماء الملابس: القميص la camisa، البنطال los pantalones، الفستان el vestido، التنورة la falda، والحذاء los zapatos.\n- **التركيب النحوي:** يحدد حرف الجر de خامة الصنع: من قطن de algodón، من صوف de lana، من جلد de cuero، ومن حرير de seda.\n- **التحليل المتقدم:** تتضمن حوارات المتاجر الصيغ الوزارية المعتمدة: كم مقاسك؟ ¿Qué talla tiene?، وهل يمكنني قياسه؟ ¿Me puedo probar?، وكم ثمنه؟\n\n### ٢. ضمائر المفعول به المباشر وغير المباشر ومواضعها النحوية قبل الفعل وبعد المصدر والأمر\n- **المبدأ اللغوي:** تحل ضمائر المفعول المباشر محل الأسماء: lo للمفرد المذكر، la للمفرد المؤنث، los للجمع المذكر، و las للجمع المؤنث (نعم، سأشتريها la compro).\n- **التطبيق الإعرابي:** توضع الضمائر قبل الفعل المصرف، ولكنها تلتصق وجوباً بنهاية المصدر واسم الفاعل وفعل الأمر الإثباتي (أريد شراءه comprarlo / اشتره cómpralo).\n- **السياق النموذجي:** عند التقاء ضمير مفعول غير مباشر (le/les) مع ضمير مباشر (lo/la)، ينقلب الأول وجوباً إلى se لمنع الثقل الصوتي (Se lo doy).\n\n### ٣. صيغة الأمر الإثباتي: تصريف الأفعال المنتظمة والشاذة للضمائر tú و vosotros و usted و ustedes\n- **الوظيفة التواصلية:** يتطابق أمر المفرد المخاطب (tú) تماماً مع تصريف الغائب المفرد في المضارع: تحدث ¡Habla!، كل ¡Come!، عش ¡Vive!.\n- **مصفوفة الاستخدام:** يصاغ أمر الجمع المخاطب (vosotros) بقاعدة قياسية مطلقة بحذف الراء من نهاية المصدر ووضع حرف d بدلاً منها: ¡Hablad! ¡Comed! ¡Vivid!.\n- **استراتيجية الامتحان:** تشمل صيغ الأمر الشاذة لضمير tú كلمات موجزة شهيرة: ضع pon، اخرج sal، امتلك ten، تعال ven، قل di، افعل haz، اذهب ve، وكن sé.",
        formulas: [
          {
            labelEn: "Las compras y la ropa: Prendas de vestir, tallas, colores y materiales (de algodón, de lana, de cuero)",
            labelAr: "التسوق والملابس: الأزياء، المقاسات، الألوان والخامات (قطن، صوف، جلد)",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Pronombres de Objeto Directo e Indirecto (lo, la, los, las / le, les) y su colocación sintáctica",
            labelAr: "ضمائر المفعول به المباشر وغير المباشر ومواضعها النحوية قبل الفعل وبعد المصدر والأمر",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "El Modo Imperativo Afirmativo: Formas regulares e irregulares (tú, vosotros, usted, ustedes)",
            labelAr: "صيغة الأمر الإثباتي: تصريف الأفعال المنتظمة والشاذة للضمائر tú و vosotros و usted و ustedes",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Spanish (¡Hola! / ¡Español!)',
          bookTitleAr: 'كتاب اللغة الإسبانية الرسمي (¡Hola!) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH04-L1',
          pageRange: '5-24'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Las compras y la ropa: Prendas de vestir, tallas, colores y materiales (de algodón, de lana, de cuero)",
          titleAr: "خطة الدرس التوجيهية: التسوق والملابس: الأزياء، المقاسات، الألوان والخامات (قطن، صوف، جلد)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH04-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Las compras y la ropa: Prendas de vestir, tallas, colores y materiales (de algodón, de lana, de cuero)",
            "Distinguish morpho-syntactic nuances in Pronombres de Objeto Directo e Indirecto (lo, la, los, las / le, les) y su colocación sintáctica",
            "Apply communicative strategies in El Modo Imperativo Afirmativo: Formas regulares e irregulares (tú, vosotros, usted, ustedes)"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ التسوق والملابس: الأزياء، المقاسات، الألوان والخامات (قطن، صوف، جلد)",
            "التمييز بين الفروق الصرفية والتركيبية في ضمائر المفعول به المباشر وغير المباشر ومواضعها النحوية قبل الفعل وبعد المصدر والأمر",
            "تطبيق مهارات التواصل الشفهي والكتابي في صيغة الأمر الإثباتي: تصريف الأفعال المنتظمة والشاذة للضمائر tú و vosotros و usted و ustedes"
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
            questionEn: "What is the core grammatical rule governing Las compras y la ropa: Prendas de vestir, tallas, colores y materiales (de algodón, de lana, de cuero)?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ التسوق والملابس: الأزياء، المقاسات، الألوان والخامات (قطن، صوف، جلد)؟",
            solutionEn: "Clothing items include la camisa, los pantalones, el vestido, la falda, los zapatos, and la chaqueta.",
            solutionAr: "تشمل أسماء الملابس: القميص la camisa، البنطال los pantalones، الفستان el vestido، التنورة la falda، والحذاء los zapatos."
          }
        },
        worksheet: {
          id: 'th_es_ch4_l1_ws',
          titleEn: "Worksheet: Las compras y la ropa: Prendas de vestir, tallas, colores y materiales (de algodón, de lana, de cuero)",
          titleAr: "ورقة عمل: التسوق والملابس: الأزياء، المقاسات، الألوان والخامات (قطن، صوف، جلد)",
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
        id: 'th_es_ch4_l2',
        titleEn: "Expresión de gustos, intereses y preferencias: El verbo GUSTAR y construcciones análogas",
        titleAr: "التعبير عن الأذواق والاهتمامات: فعل GUSTAR والتركيبات المماثلة (encantar, interesar, parecer)",
        summaryEn: "The verb GUSTAR agrees with the grammatical subject: \"gusta\" before singular nouns or infinitives, and \"gustan\" before plural nouns.",
        summaryAr: "يتطابق فعل GUSTAR مع الشيء المعجب به: gusta مع المفرد والمصدر (me gusta la música / bailar)، و gustan مع الجمع (me gustan los libros).",
        theoryContentEn: "### 1. Expresión de gustos, intereses y preferencias: El verbo GUSTAR y construcciones análogas\n- **Core Rule:** The verb GUSTAR agrees with the grammatical subject: \"gusta\" before singular nouns or infinitives, and \"gustan\" before plural nouns.\n- **Syntactic Structure:** Indirect object pronouns (me, te, le, nos, os, les) mark the person experiencing the preference (A nosotros nos encanta viajar).\n- **Analytical Perspective:** Verbs operating identically to GUSTAR include: encantar (to love), interesar (to interest), doler (to hurt: me duele la cabeza), and quedar (to fit/suit).\n\n### 2. Expresión de deseos y recomendaciones: Verbos de influencia y uso introductorio del Subjuntivo\n- **Linguistic Principle:** Expressing desires for oneself uses \"querer + infinitivo\" (Quiero comprar una chaqueta nueva).\n- **Grammar Application:** Expressing desires directed at others requires \"querer que + presente de subjuntivo\" (Quiero que vengas a mi fiesta de cumpleaños).\n- **Advanced Context:** The invariable formula \"Ojalá (+ subjuntivo)\" conveys fervent hope for an event (¡Ojalá apruebe todos los exámenes con excelentes notas!).\n\n### 3. Orientación en la ciudad y pedir indicaciones: Preguntar y dar direcciones en el espacio urbano\n- **Communicative Function:** Phrases to ask for directions include: \"¿Por dónde se va a la estación?\", \"¿Dónde está el museo?\", and \"¿Hay una farmacia cerca de aquí?\".\n- **Usage Matrix:** Giving directional instructions employs imperatives or present indicative: \"Sigue todo recto\", \"Gira a la derecha en la segunda calle\", and \"Cruza la plaza\".\n- **Exam Strategy:** Navigating public transport involves communicative mastery of buying tickets (billete de ida y vuelta), selecting metro lines, and identifying stops.",
        theoryContentAr: "### ١. التعبير عن الأذواق والاهتمامات: فعل GUSTAR والتركيبات المماثلة (encantar, interesar, parecer)\n- **القاعدة الأساسية:** يتطابق فعل GUSTAR مع الشيء المعجب به: gusta مع المفرد والمصدر (me gusta la música / bailar)، و gustan مع الجمع (me gustan los libros).\n- **التركيب النحوي:** تحدد ضمائر المفعول غير المباشر (me, te, le, nos, os, les) الشخص صاحب الرغبة، ويمكن توكيدها بعبارات التوكيد (A mí me gusta, A ellos les gusta).\n- **التحليل المتقدم:** تعمل أفعال أخرى بنفس النموذج النحوي: مثل encantar (يعشق)، interesar (يهتم بـ)، doler (يؤلم me duele)، و quedar (يناسب مقاس الملابس).\n\n### ٢. التعبير عن الرغبات والتوصيات: أفعال التأثير والمدخل التأسيسي لصيغة الشك والرجاء\n- **المبدأ اللغوي:** يعبر الشخص عن رغبته الخاصة بصيغة querer + المصدر (أريد شراء سترة جديدة Quiero comprar).\n- **التطبيق الإعرابي:** عند توجيه الرغبة للغير يشترط التركيب querer que + مضارع الشك Subjuntivo (أريدك أن تحضر لحفلي Quiero que vengas).\n- **السياق النموذجي:** تعبر الأداة التراثية Ojalá (المشتقة من لو شاء الله) عن الرجاء والأمل الحار وتتطلب صيغة الشك وجوباً (¡Ojalá apruebes!).\n\n### ٣. التنقل وتحديد الاتجاهات في المدينة: السؤال عن الأماكن وإعطاء الإرشادات المكانية\n- **الوظيفة التواصلية:** تشمل صيغ الاستفسار عن الأماكن: من أين الطريق إلى المحطة؟ ¿Por dónde se va?، وأين يقع المتحف؟ ¿Dónde está?، وهل توجد صيدلية قريبة؟\n- **مصفوفة الاستخدام:** تستخدم إرشادات الاتجاهات صيغ الأمر أو المضارع: سر مباشرة Sigue todo recto، انعطف يميناً Gira a la derecha، واعبر الميدان Cruza la plaza.\n- **استراتيجية الامتحان:** يتطلب استخدام المواصلات العامة إتقان شراء التذاكر (ذهاب وعودة ida y vuelta)، والتحويل بين خطوط المترو، ومعرفة محطات النزول.",
        formulas: [
          {
            labelEn: "Expresión de gustos, intereses y preferencias: El verbo GUSTAR y construcciones análogas",
            labelAr: "التعبير عن الأذواق والاهتمامات: فعل GUSTAR والتركيبات المماثلة (encantar, interesar, parecer)",
            latex: "\\text{Regla } 1: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Expresión de deseos y recomendaciones: Verbos de influencia y uso introductorio del Subjuntivo",
            labelAr: "التعبير عن الرغبات والتوصيات: أفعال التأثير والمدخل التأسيسي لصيغة الشك والرجاء",
            latex: "\\text{Regla } 2: \\text{Spanish Syntax}"
          },
          {
            labelEn: "Orientación en la ciudad y pedir indicaciones: Preguntar y dar direcciones en el espacio urbano",
            labelAr: "التنقل وتحديد الاتجاهات في المدينة: السؤال عن الأماكن وإعطاء الإرشادات المكانية",
            latex: "\\text{Regla } 3: \\text{Spanish Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Spanish (¡Hola! / ¡Español!)',
          bookTitleAr: 'كتاب اللغة الإسبانية الرسمي (¡Hola!) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-ES-CH04-L2',
          pageRange: '25-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Expresión de gustos, intereses y preferencias: El verbo GUSTAR y construcciones análogas",
          titleAr: "خطة الدرس التوجيهية: التعبير عن الأذواق والاهتمامات: فعل GUSTAR والتركيبات المماثلة (encantar, interesar, parecer)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-ES-CH04-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Expresión de gustos, intereses y preferencias: El verbo GUSTAR y construcciones análogas",
            "Distinguish morpho-syntactic nuances in Expresión de deseos y recomendaciones: Verbos de influencia y uso introductorio del Subjuntivo",
            "Apply communicative strategies in Orientación en la ciudad y pedir indicaciones: Preguntar y dar direcciones en el espacio urbano"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ التعبير عن الأذواق والاهتمامات: فعل GUSTAR والتركيبات المماثلة (encantar, interesar, parecer)",
            "التمييز بين الفروق الصرفية والتركيبية في التعبير عن الرغبات والتوصيات: أفعال التأثير والمدخل التأسيسي لصيغة الشك والرجاء",
            "تطبيق مهارات التواصل الشفهي والكتابي في التنقل وتحديد الاتجاهات في المدينة: السؤال عن الأماكن وإعطاء الإرشادات المكانية"
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
            questionEn: "What is the core grammatical rule governing Expresión de gustos, intereses y preferencias: El verbo GUSTAR y construcciones análogas?",
            questionAr: "ما هي القاعدة النحوية الأساسية لـ التعبير عن الأذواق والاهتمامات: فعل GUSTAR والتركيبات المماثلة (encantar, interesar, parecer)؟",
            solutionEn: "The verb GUSTAR agrees with the grammatical subject: \"gusta\" before singular nouns or infinitives, and \"gustan\" before plural nouns.",
            solutionAr: "يتطابق فعل GUSTAR مع الشيء المعجب به: gusta مع المفرد والمصدر (me gusta la música / bailar)، و gustan مع الجمع (me gustan los libros)."
          }
        },
        worksheet: {
          id: 'th_es_ch4_l2_ws',
          titleEn: "Worksheet: Expresión de gustos, intereses y preferencias: El verbo GUSTAR y construcciones análogas",
          titleAr: "ورقة عمل: التعبير عن الأذواق والاهتمامات: فعل GUSTAR والتركيبات المماثلة (encantar, interesar, parecer)",
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
    databank: spanishCh4Databank,
    solvedExamples: spanishCh4SolvedExamples,
    exerciseProblems: spanishCh4Exercises
  }
];

export const thanaweyaSpanishBranch: Branch = {
  id: 'thanaweya_spanish',
  titleEn: "Thanaweya Amma: Spanish Language (Second Foreign Language)",
  titleAr: "الثانوية العامة: اللغة الإسبانية (اللغة الأجنبية الثانية)",
  categoryEn: "Second Foreign Language",
  categoryAr: "اللغة الأجنبية الثانية للثانوية العامة",
  iconName: 'Languages',
  colorGradient: 'from-red-950 via-amber-900 to-yellow-900',
  chapters
};
