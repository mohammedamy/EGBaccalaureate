import type { Branch, Chapter } from '../types/curriculum';
import { italianCh1Databank } from './databanks/thanaweya/italianCh1Databank';
import { italianCh1SolvedExamples, italianCh1Exercises } from './textbook/thanaweya/italianCh1Textbook';
import { italianCh2Databank } from './databanks/thanaweya/italianCh2Databank';
import { italianCh2SolvedExamples, italianCh2Exercises } from './textbook/thanaweya/italianCh2Textbook';
import { italianCh3Databank } from './databanks/thanaweya/italianCh3Databank';
import { italianCh3SolvedExamples, italianCh3Exercises } from './textbook/thanaweya/italianCh3Textbook';
import { italianCh4Databank } from './databanks/thanaweya/italianCh4Databank';
import { italianCh4SolvedExamples, italianCh4Exercises } from './textbook/thanaweya/italianCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'th_it_ch1',
    chapterNumber: 1,
    titleEn: "Unità 1: I progetti extrascolastici, l'ambiente & il Futuro Semplice",
    titleAr: "الوحدة الأولى: المشاريع المدرسية، حماية البيئة وزمن المستقبل البسيط",
    descriptionEn: "Extracurricular school projects, environmental protection, twinning projects (gemellaggio), and complete mastery of the Futuro Semplice (regular and irregular forms, promises, and predictions).",
    descriptionAr: "المشاريع المدرسية اللاصفية، حماية البيئة والتشجير، التوأمة المدرسية، وإتقان زمن المستقبل البسيط (الأفعال المنتظمة والشاذة، المشروعات، الوعود والتوقعات).",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'italian_language_lab',
        titleEn: "Italian Grammar & Extracurricular Projects Studio",
        titleAr: "استوديو قواعد الإيطالية والمشاريع المدرسية",
        descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
      }
    ],
    lessons: [
      {
        id: 'th_it_ch1_l1',
        titleEn: "I progetti scolastici, l'ecologia & il Futuro Semplice regolare",
        titleAr: "المشاريع البيئية والمدرسية وزمن المستقبل البسيط للأفعال المنتظمة",
        summaryEn: "School projects, environmental protection, twin schools, and regular future endings (-erò, -erai, -erà, -eremo, -erete, -eranno).",
        summaryAr: "المشروعات المدرسية اللاصفية، حماية البيئة والتوأمة، وتصريف المستقبل البسيط للأفعال المنتظمة في المجموعات الثلاث.",
        theoryContentEn: "### 1. I progetti extrascolastici: Il concorso musicale, l’ecologia e il gemellaggio\n- **Core Rule:** Italian secondary schools organize three primary extracurricular projects: environmental care, school twinning, and the musical contest.\n- **Syntactic Structure:** Students collaborate in teams to select an environmental campaign (pulire il bosco) or form a musical band for the school competition.\n- **Analytical Perspective:** Choosing a musical project involves democratic consensus, auditioning band members, and securing external rehearsal spaces.\n\n### 2. La formazione del Futuro Semplice dei verbi regolari (-are, -ere, -ire)\n- **Linguistic Principle:** Regular verbs form the future with endings: -erò, -erai, -erà, -eremo, -erete, -eranno (for -are/-ere) and -irò, -irai, -irà, -iremo, -irete, -iranno.\n- **Grammar Application:** First conjugation verbs in -are change their thematic vowel -a- to -e- in the future stem (parlare -> parlerò, cantare -> canterò).\n- **Advanced Context:** Verbs ending in -care and -gare add an -h- to preserve the velar plosive [k] and [g] sounds (giocare -> giocherò, pagare -> pagherò).\n\n### 3. Verbi irregolari nel Futuro: Caduta della vocale (andare, avere, dovere, potere, vedere)\n- **Communicative Function:** Verbs like andare, avere, dovere, potere, and vedere drop their stem vowel to form contracted future stems (andrò, avrò, dovrò, potrò, vedrò).\n- **Usage Matrix:** The irregular contracted future stems maintain standard personal endings across all subjects (io andrò, tu andrai, lui/lei andrà, noi andremo, voi andrete, loro andranno).\n- **Exam Strategy:** Differentiating between the future forms of dovere (dovrò) and dare (darò) is crucial for accurate reading comprehension and syntactic analysis.",
        theoryContentAr: "### ١. المشاريع المدرسية اللاصفية: المسابقة الموسيقية، البيئة والتوأمة\n- **القاعدة الأساسية:** تنظم المدارس الإيطالية ثلاثة مشاريع رئيسية لاصفية: حماية البيئة، التوأمة المدرسية، والمسابقة الموسيقية.\n- **التركيب النحوي:** يتعاون الطلاب في مجموعات لاختيار حملة بيئية كحماية الغابات أو تشكيل فرقة موسيقية للتنافس المدرسي.\n- **التحليل المتقدم:** يتطلب اختيار المسابقة الموسيقية توافقاً ديمقراطياً، واختباراً لعازفي الآلات، وتأمين أماكن ملائمة للبروفات.\n\n### ٢. صياغة المستقبل البسيط للأفعال المنتظمة في المجموعات الثلاث\n- **المبدأ اللغوي:** يصاغ المستقبل البسيط بحذف النهايات وإضافة: erò, erai, erà, eremo, erete, eranno للمجموعتين الأولى والثانية، و irò للمجموعة الثالثة.\n- **التطبيق الإعرابي:** تتحول ألف المجموعة الأولى -are- إلى -e- وجوباً في ساق المستقبل البسيط: مثل parlare تصبح parlerò و cantare تصبح canterò.\n- **السياق النموذجي:** تكتسب الأفعال المنتهية بـ -care و -gare حرف h للحفاظ على النطق الحلقي الصارم: مثل giocare تصبح giocherò و pagare تصبح pagherò.\n\n### ٣. الأفعال الشاذة بسقوط الحرف المتحرك (andare, avere, dovere, potere, vedere)\n- **الوظيفة التواصلية:** تسقط الحروف المتحركة من جذور أفعال شائعة لتكوين المستقبل المقصور: andrò (سأذهب)، avrò (سأمتلك)، dovrò (سيتوجب)، potrò (سأستطيع)، vedrò (سأرى).\n- **مصفوفة الاستخدام:** تحافظ الجذور الشاذة المختصرة على نفس نهايات الضمائر المعتادة بانتظام عبر كافة الأشخاص (io andrò, tu andrai, lui andrà...).\n- **استراتيجية الامتحان:** يعد التمييز الدقيق بين تصريف dovere (dovrò) وتصريف dare (darò) ركيزة محورية لفهم النصوص والقواعد الوزارية.",
        formulas: [
          {
            labelEn: "I progetti extrascolastici: Il concorso musicale, l’ecologia e il gemellaggio",
            labelAr: "المشاريع المدرسية اللاصفية: المسابقة الموسيقية، البيئة والتوأمة",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "La formazione del Futuro Semplice dei verbi regolari (-are, -ere, -ire)",
            labelAr: "صياغة المستقبل البسيط للأفعال المنتظمة في المجموعات الثلاث",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Verbi irregolari nel Futuro: Caduta della vocale (andare, avere, dovere, potere, vedere)",
            labelAr: "الأفعال الشاذة بسقوط الحرف المتحرك (andare, avere, dovere, potere, vedere)",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Italian Language (In Italia)',
          bookTitleAr: 'كتاب اللغة الإيطالية الرسمي (In Italia) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-IT-CH01-L1',
          pageRange: '1-50'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: I progetti scolastici, l'ecologia & il Futuro Semplice regolare",
          titleAr: "خطة الدرس التوجيهية: المشاريع البيئية والمدرسية وزمن المستقبل البسيط للأفعال المنتظمة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-IT-CH01-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of I progetti extrascolastici: Il concorso musicale, l’ecologia e il gemellaggio",
            "Apply grammatical inflections and verb tenses in La formazione del Futuro Semplice dei verbi regolari (-are, -ere, -ire)",
            "Execute communicative everyday situation responses in Verbi irregolari nel Futuro: Caduta della vocale (andare, avere, dovere, potere, vedere)"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ المشاريع المدرسية اللاصفية: المسابقة الموسيقية، البيئة والتوأمة",
            "تطبيق تصريفات الأفعال والضمائر لـ صياغة المستقبل البسيط للأفعال المنتظمة في المجموعات الثلاث",
            "إتقان الردود التداولية في المواقف الحياتية لـ الأفعال الشاذة بسقوط الحرف المتحرك (andare, avere, dovere, potere, vedere)"
          ],
          prerequisitesEn: ['Italian A1/A2 Foundations', 'Presente Indicativo', 'Basic Vocabulary'],
          prerequisitesAr: ['أساسيات اللغة الإيطالية A1/A2', 'زمن المضارع البسيط', 'المفردات الأساسية للثانوية'],
          keyVocabularyEn: [
            { term: 'Futuro Semplice', definition: 'Simple future tense for projects and promises' },
            { term: 'Pronomi Diretti', definition: 'Direct object pronouns (lo, la, li, le)' }
          ],
          keyVocabularyAr: [
            { term: 'Futuro Semplice', definition: 'زمن المستقبل البسيط للتعبير عن المشروعات والوعود والتوقعات' },
            { term: 'Pronomi Diretti', definition: 'ضمائر المفعول به المباشر التي تحل محل الاسم بدون حرف جر' }
          ],
          teachingPacing: [
            { phaseEn: 'Phonetics & Warm-Up', phaseAr: 'التهيئة الصوتية والاستكشاف', duration: '20 min', activitiesEn: 'Speech audio drills and dialogue immersion', activitiesAr: 'تدريبات النطق الصوتي والاستماع لحوار الدرس' },
            { phaseEn: 'Grammar Analysis & Drills', phaseAr: 'التطبيق والتحليل النحوي', duration: '70 min', activitiesEn: 'Verb conjugation matrix, textbook exercises, and databank MCQs', activitiesAr: 'مصفوفة تصريف الأفعال، التمارين النموذجية، وحل أسئلة بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing direct object pronoun agreement with indirect pronouns which never cause participle agreement in compound tenses'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين الضمائر المباشرة التي تفرض تبعية اسم المفعول في الماضي والضمائر غير المباشرة التي لا تسبب أي تبعية نهائياً'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded verb ending tables and direct pronoun charts.',
            advanced: 'Challenge students with combined pronouns (glielo, me ne) and subjunctive clauses.'
          },
          differentiationAr: {
            struggling: 'توفير جداول ملونة لنهايات الأفعال وقوائم مبسطة لضمائر المفعول المباشر.',
            advanced: 'تكليف الطلاب بتحليل الضمائر المدمجة وتراكيب صيغة الشك والشرط المعقدة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ diagnostic testing grammar, lexicon, and situation responses.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت لقياس القواعد والمفردات والمواقف الحياتية الإيطالية.',
          exitTicketQuestion: {
            questionEn: "Which auxiliary and participle ending are required in the context of I progetti extrascolastici: Il concorso musicale, l’ecologia e il gemellaggio?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق المشاريع المدرسية اللاصفية: المسابقة الموسيقية، البيئة والتوأمة؟",
            solutionEn: "Italian secondary schools organize three primary extracurricular projects: environmental care, school twinning, and the musical contest.",
            solutionAr: "تنظم المدارس الإيطالية ثلاثة مشاريع رئيسية لاصفية: حماية البيئة، التوأمة المدرسية، والمسابقة الموسيقية."
          }
        },
        worksheet: {
          id: 'th_it_ch1_l1_ws',
          titleEn: "Worksheet: I progetti scolastici, l'ecologia & il Futuro Semplice regolare",
          titleAr: "ورقة عمل: المشاريع البيئية والمدرسية وزمن المستقبل البسيط للأفعال المنتظمة",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيقية للدرس وفق المعايير الوزارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'italian_language_lab',
          titleEn: "Italian Grammar & Extracurricular Projects Studio",
          titleAr: "استوديو قواعد الإيطالية والمشاريع المدرسية",
          descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
        }
      },
      {
        id: 'th_it_ch1_l2',
        titleEn: "Verbi irregolari nel futuro, previsioni & supposizioni",
        titleAr: "الأفعال الشاذة في المستقبل البسيط، التوقعات وحالات التخمين",
        summaryEn: "Contracted future roots (andrò, avrò, vedrò), double -rr- roots (verrò, vorrò), and future of supposition (saranno le tre).",
        summaryAr: "الجذور الشاذة المقبوضة (andrò, avrò, vedrò)، والأفعال المضعفة للراء (verrò, vorrò)، واستخدام المستقبل في التخمين والافتراض.",
        theoryContentEn: "### 1. Verbi irregolari con raddoppiamento della -r- (venire, volere, bere, rimanere)\n- **Core Rule:** Verbs such as venire, volere, bere, and rimanere assimilate into a double -rr- in their future stems (verrò, vorrò, berrò, rimarrò).\n- **Syntactic Structure:** The phonetic doubling of -rr- represents historical phonetic assimilation from Latin consonant clusters into Italian future inflection.\n- **Analytical Perspective:** Analyzing contextual dialogues requires distinguishing \"vorrò\" (I will want - future) from \"vorrei\" (I would like - conditional).\n\n### 2. Usi comunicativi del Futuro: Progetti, Promesse, Previsioni & Supposizioni\n- **Linguistic Principle:** The future tense communicates deliberate future projects (quest’anno parteciperemo) and formal promises (prometto che studierò).\n- **Grammar Application:** Future of supposition (futuro di dubbio o supposizione) estimates an unknown present fact or time (Che ore sono? - Saranno le tre).\n- **Advanced Context:** Exam questions often test the communicative function: distinguishing a meteorological forecast from a personal commitment or present age assumption.\n\n### 3. Lessico ecologico: Salvaguardia dell’ambiente, energia pulita e riciclaggio\n- **Communicative Function:** Environmental vocabulary includes pulire il bosco, salvare gli animali, proteggere l’ambiente, and differenziare i rifiuti.\n- **Usage Matrix:** Active citizenship encourages students to adopt sustainable practices, conserve drinking water, and utilize public transport.\n- **Exam Strategy:** Analyzing green school projects synthesizes linguistic competence with scientific awareness of climate preservation and eco-responsibility.",
        theoryContentAr: "### ١. الأفعال الشاذة بتضعيف الراء: venire, volere, bere, rimanere\n- **القاعدة الأساسية:** تتميز أفعال venire و volere و bere و rimanere بتضعيف حرف الراء في المستقبل: verrò (سآتي)، vorrò (سأريد)، berrò (سأشرب)، rimarrò (سأبقى).\n- **التركيب النحوي:** يمثل تضعيف حرف الراء إدغاماً صوتياً تاريخياً مشدداً يفرضه النظام الصوتي الإيطالي في تصريف أزمنة المستقبل.\n- **التحليل المتقدم:** يتطلب تحليل الحوارات التمييز النحوي بين vorrò (سأريد - مستقبل بسيط) و vorrei (أود/أرغب - مضارع شرطي مهذب).\n\n### ٢. الاستخدامات التواصلية للمستقبل: المشروعات، الوعود، التوقعات، والتخمين\n- **المبدأ اللغوي:** يستخدم المستقبل البسيط للتعبير عن المشروعات المخططة (هذا العام سنشارك)، والوعود الرسمية (أعدك بأنني سأذاكر).\n- **التطبيق الإعرابي:** يعبر مستقبل التخمين والشك عن افتراض لواقع حالي غير مؤكد، مثل تقدير الوقت أو العمر (كم الساعة؟ - قد تكون الثالثة: saranno le tre).\n- **السياق النموذجي:** تختبر امتحانات الثانوية العامة الوظيفة التداولية: التفرقة الدقيقة بين النشرة الجوية، الوعد الشخصي، وتخمين العمر أو الزمن الحاضر.\n\n### ٣. المفردات البيئية: حماية الطبيعة، الطاقة المتجددة، والتدوير\n- **الوظيفة التواصلية:** تتضمن المفردات البيئية: تنظيف الغابة، إنقاذ الحيوانات، حماية البيئة، وفرز وإعادة تدوير النفايات.\n- **مصفوفة الاستخدام:** تشجع قيم المواطنة الإيجابية الطلاب على تبني سلوكيات مستدامة، ترشيد استهلاك المياه، واستخدام المواصلات العامة.\n- **استراتيجية الامتحان:** يدمج تحليل المشروعات البيئية المدرسية بين الكفاءة اللغوية والوعي العلمي بقضايا المناخ والمسؤولية الإيكولوجية.",
        formulas: [
          {
            labelEn: "Verbi irregolari con raddoppiamento della -r- (venire, volere, bere, rimanere)",
            labelAr: "الأفعال الشاذة بتضعيف الراء: venire, volere, bere, rimanere",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "Usi comunicativi del Futuro: Progetti, Promesse, Previsioni & Supposizioni",
            labelAr: "الاستخدامات التواصلية للمستقبل: المشروعات، الوعود، التوقعات، والتخمين",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Lessico ecologico: Salvaguardia dell’ambiente, energia pulita e riciclaggio",
            labelAr: "المفردات البيئية: حماية الطبيعة، الطاقة المتجددة، والتدوير",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Italian Language (In Italia)',
          bookTitleAr: 'كتاب اللغة الإيطالية الرسمي (In Italia) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-IT-CH01-L2',
          pageRange: '51-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Verbi irregolari nel futuro, previsioni & supposizioni",
          titleAr: "خطة الدرس التوجيهية: الأفعال الشاذة في المستقبل البسيط، التوقعات وحالات التخمين",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-IT-CH01-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Verbi irregolari con raddoppiamento della -r- (venire, volere, bere, rimanere)",
            "Apply grammatical inflections and verb tenses in Usi comunicativi del Futuro: Progetti, Promesse, Previsioni & Supposizioni",
            "Execute communicative everyday situation responses in Lessico ecologico: Salvaguardia dell’ambiente, energia pulita e riciclaggio"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ الأفعال الشاذة بتضعيف الراء: venire, volere, bere, rimanere",
            "تطبيق تصريفات الأفعال والضمائر لـ الاستخدامات التواصلية للمستقبل: المشروعات، الوعود، التوقعات، والتخمين",
            "إتقان الردود التداولية في المواقف الحياتية لـ المفردات البيئية: حماية الطبيعة، الطاقة المتجددة، والتدوير"
          ],
          prerequisitesEn: ['Italian A1/A2 Foundations', 'Presente Indicativo', 'Basic Vocabulary'],
          prerequisitesAr: ['أساسيات اللغة الإيطالية A1/A2', 'زمن المضارع البسيط', 'المفردات الأساسية للثانوية'],
          keyVocabularyEn: [
            { term: 'Futuro Semplice', definition: 'Simple future tense for projects and promises' },
            { term: 'Pronomi Diretti', definition: 'Direct object pronouns (lo, la, li, le)' }
          ],
          keyVocabularyAr: [
            { term: 'Futuro Semplice', definition: 'زمن المستقبل البسيط للتعبير عن المشروعات والوعود والتوقعات' },
            { term: 'Pronomi Diretti', definition: 'ضمائر المفعول به المباشر التي تحل محل الاسم بدون حرف جر' }
          ],
          teachingPacing: [
            { phaseEn: 'Phonetics & Warm-Up', phaseAr: 'التهيئة الصوتية والاستكشاف', duration: '20 min', activitiesEn: 'Speech audio drills and dialogue immersion', activitiesAr: 'تدريبات النطق الصوتي والاستماع لحوار الدرس' },
            { phaseEn: 'Grammar Analysis & Drills', phaseAr: 'التطبيق والتحليل النحوي', duration: '70 min', activitiesEn: 'Verb conjugation matrix, textbook exercises, and databank MCQs', activitiesAr: 'مصفوفة تصريف الأفعال، التمارين النموذجية، وحل أسئلة بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing direct object pronoun agreement with indirect pronouns which never cause participle agreement in compound tenses'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين الضمائر المباشرة التي تفرض تبعية اسم المفعول في الماضي والضمائر غير المباشرة التي لا تسبب أي تبعية نهائياً'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded verb ending tables and direct pronoun charts.',
            advanced: 'Challenge students with combined pronouns (glielo, me ne) and subjunctive clauses.'
          },
          differentiationAr: {
            struggling: 'توفير جداول ملونة لنهايات الأفعال وقوائم مبسطة لضمائر المفعول المباشر.',
            advanced: 'تكليف الطلاب بتحليل الضمائر المدمجة وتراكيب صيغة الشك والشرط المعقدة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ diagnostic testing grammar, lexicon, and situation responses.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت لقياس القواعد والمفردات والمواقف الحياتية الإيطالية.',
          exitTicketQuestion: {
            questionEn: "Which auxiliary and participle ending are required in the context of Verbi irregolari con raddoppiamento della -r- (venire, volere, bere, rimanere)?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق الأفعال الشاذة بتضعيف الراء: venire, volere, bere, rimanere؟",
            solutionEn: "Verbs such as venire, volere, bere, and rimanere assimilate into a double -rr- in their future stems (verrò, vorrò, berrò, rimarrò).",
            solutionAr: "تتميز أفعال venire و volere و bere و rimanere بتضعيف حرف الراء في المستقبل: verrò (سآتي)، vorrò (سأريد)، berrò (سأشرب)، rimarrò (سأبقى)."
          }
        },
        worksheet: {
          id: 'th_it_ch1_l2_ws',
          titleEn: "Worksheet: Verbi irregolari nel futuro, previsioni & supposizioni",
          titleAr: "ورقة عمل: الأفعال الشاذة في المستقبل البسيط، التوقعات وحالات التخمين",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيقية للدرس وفق المعايير الوزارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'italian_language_lab',
          titleEn: "Italian Grammar & Extracurricular Projects Studio",
          titleAr: "استوديو قواعد الإيطالية والمشاريع المدرسية",
          descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
        }
      }
    ],
    databank: italianCh1Databank,
    solvedExamples: italianCh1SolvedExamples,
    exerciseProblems: italianCh1Exercises
  },
  {
    id: 'th_it_ch2',
    chapterNumber: 2,
    titleEn: "Unità 2: Il tempo libero, la musica & il Futuro Composto",
    titleAr: "الوحدة الثانية: وقت الفراغ، المسابقة الموسيقية وزمن المستقبل المركب",
    descriptionEn: "Free time activities, rock band rehearsal, instruments, temporal sequence with the Futuro Composto (futuro anteriore: quando avrò finito, uscirò), and direct object pronouns.",
    descriptionAr: "أنشطة وقت الفراغ، بروفات فرقة الروك، الآلات الموسيقية، التتابع الزمني مع زمن المستقبل المركب (Futuro Composto) والضمائر المباشرة.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'italian_language_lab',
        titleEn: "Music Rehearsal & Future Perfect Studio",
        titleAr: "استوديو المسابقة الموسيقية والمستقبل المركب",
        descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
      }
    ],
    lessons: [
      {
        id: 'th_it_ch2_l1',
        titleEn: "La musica, il concorso canoro & il Futuro Composto",
        titleAr: "الموسيقى وتشكيل فرقة الروك وزمن المستقبل المركب (Anteriore)",
        summaryEn: "Forming the rock band, choosing songs for the contest, and temporal sequence with Futuro Composto (quando avrò finito, uscirò).",
        summaryAr: "تشكيل فرقة الروك للمسابقة الغنائية المدرسية، والتتابع الزمني للأحداث مع المستقبل المركب وروابطه الزمنية.",
        theoryContentEn: "### 1. La struttura e formazione del Futuro Composto (Futuro Anteriore)\n- **Core Rule:** The Futuro Composto is formed using the future simple of essere or avere plus the past participle (avrò parlato, sarò arrivato).\n- **Syntactic Structure:** When formed with essere, the past participle must agree in gender and number with the subject (lui sarà partito, lei sarà partita).\n- **Analytical Perspective:** Temporal conjunctions quando, appena, and dopo che introduce the Futuro Composto, which precedes the main Futuro Semplice clause.\n\n### 2. Concordanza dei Tempi nel Futuro: Azione anteriore vs. Azione posteriore\n- **Linguistic Principle:** The action in Futuro Composto always occurs BEFORE the action in Futuro Semplice (Appena avrò finito, uscirò).\n- **Grammar Application:** In examination questions, the clause following appena or dopo che strictly takes Futuro Composto, while the main result clause takes Futuro Semplice.\n- **Advanced Context:** Evaluating complex narrative sequences requires distinguishing future certainty from past anterior relations.\n\n### 3. Gli strumenti musicali e le prove del gruppo musicale (il concorso)\n- **Communicative Function:** Musical instruments include la chitarra, il pianoforte, la batteria, il basso, and la tastiera.\n- **Usage Matrix:** Students rehearse songs, select the lead singer, and practice rhythm to prepare for the regional school music contest.\n- **Exam Strategy:** Analyzing song choice balances rock energy with meaningful lyrics addressing environmental conservation or youthful aspirations.",
        theoryContentAr: "### ١. تركيب وصياغة زمن المستقبل المركب (Futuro Composto)\n- **القاعدة الأساسية:** يتركب المستقبل المركب من تصريف essere أو avere في المستقبل البسيط مضافاً إليه اسم المفعول للفعل الأساسي.\n- **التركيب النحوي:** عند استخدام الفعل المساعد essere، يجب وجوباً تطابق اسم المفعول في النوع والعدد مع الفاعل (saremo partiti/e).\n- **التحليل المتقدم:** تفرض الروابط الزمنية (quando, appena, dopo che) وقوع حدث المستقبل المركب أولاً قبل تحقق حدث المستقبل البسيط التابع له.\n\n### ٢. التوافق الزمني في المستقبل: الحدث الأسبق والحدث اللاحق\n- **المبدأ اللغوي:** يقع الحدث في زمن المستقبل المركب دائماً قبل الحدث المصرف في المستقبل البسيط (بمجرد أن أنهي، سأخرج).\n- **التطبيق الإعرابي:** في امتحانات الثانوية العامة، الجملة المتصلة بـ appena أو dopo che تأخذ مستقبلاً مركباً، وجملة جواب الشرط تأخذ مستقبلاً بسيطاً.\n- **السياق النموذجي:** يتطلب تقييم الجمل الزمنية المركبة التمييز القاطع بين تتابع أحداث المستقبل وتتابع أزمنة الماضي.\n\n### ٣. الآلات الموسيقية وبروفات الفرقة للمسابقة الغنائية\n- **الوظيفة التواصلية:** تشمل الآلات الموسيقية: الغيتار، البيانو، الدرامز (la batteria)، الباص، والأورج (la tastiera).\n- **مصفوفة الاستخدام:** يتدرب الطلاب على الأغاني، يختارون المغني الرئيسي، ويضبطون الإيقاع للاستعداد للمسابقة الموسيقية الإقليمية.\n- **استراتيجية الامتحان:** يوازن اختيار أغنية المسابقة بين حيوية موسيقى الروك والكلمات الهادفة لحماية البيئة وتطلعات الشباب.",
        formulas: [
          {
            labelEn: "La struttura e formazione del Futuro Composto (Futuro Anteriore)",
            labelAr: "تركيب وصياغة زمن المستقبل المركب (Futuro Composto)",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "Concordanza dei Tempi nel Futuro: Azione anteriore vs. Azione posteriore",
            labelAr: "التوافق الزمني في المستقبل: الحدث الأسبق والحدث اللاحق",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Gli strumenti musicali e le prove del gruppo musicale (il concorso)",
            labelAr: "الآلات الموسيقية وبروفات الفرقة للمسابقة الغنائية",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Italian Language (In Italia)',
          bookTitleAr: 'كتاب اللغة الإيطالية الرسمي (In Italia) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-IT-CH02-L1',
          pageRange: '1-50'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: La musica, il concorso canoro & il Futuro Composto",
          titleAr: "خطة الدرس التوجيهية: الموسيقى وتشكيل فرقة الروك وزمن المستقبل المركب (Anteriore)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-IT-CH02-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of La struttura e formazione del Futuro Composto (Futuro Anteriore)",
            "Apply grammatical inflections and verb tenses in Concordanza dei Tempi nel Futuro: Azione anteriore vs. Azione posteriore",
            "Execute communicative everyday situation responses in Gli strumenti musicali e le prove del gruppo musicale (il concorso)"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ تركيب وصياغة زمن المستقبل المركب (Futuro Composto)",
            "تطبيق تصريفات الأفعال والضمائر لـ التوافق الزمني في المستقبل: الحدث الأسبق والحدث اللاحق",
            "إتقان الردود التداولية في المواقف الحياتية لـ الآلات الموسيقية وبروفات الفرقة للمسابقة الغنائية"
          ],
          prerequisitesEn: ['Italian A1/A2 Foundations', 'Presente Indicativo', 'Basic Vocabulary'],
          prerequisitesAr: ['أساسيات اللغة الإيطالية A1/A2', 'زمن المضارع البسيط', 'المفردات الأساسية للثانوية'],
          keyVocabularyEn: [
            { term: 'Futuro Semplice', definition: 'Simple future tense for projects and promises' },
            { term: 'Pronomi Diretti', definition: 'Direct object pronouns (lo, la, li, le)' }
          ],
          keyVocabularyAr: [
            { term: 'Futuro Semplice', definition: 'زمن المستقبل البسيط للتعبير عن المشروعات والوعود والتوقعات' },
            { term: 'Pronomi Diretti', definition: 'ضمائر المفعول به المباشر التي تحل محل الاسم بدون حرف جر' }
          ],
          teachingPacing: [
            { phaseEn: 'Phonetics & Warm-Up', phaseAr: 'التهيئة الصوتية والاستكشاف', duration: '20 min', activitiesEn: 'Speech audio drills and dialogue immersion', activitiesAr: 'تدريبات النطق الصوتي والاستماع لحوار الدرس' },
            { phaseEn: 'Grammar Analysis & Drills', phaseAr: 'التطبيق والتحليل النحوي', duration: '70 min', activitiesEn: 'Verb conjugation matrix, textbook exercises, and databank MCQs', activitiesAr: 'مصفوفة تصريف الأفعال، التمارين النموذجية، وحل أسئلة بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing direct object pronoun agreement with indirect pronouns which never cause participle agreement in compound tenses'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين الضمائر المباشرة التي تفرض تبعية اسم المفعول في الماضي والضمائر غير المباشرة التي لا تسبب أي تبعية نهائياً'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded verb ending tables and direct pronoun charts.',
            advanced: 'Challenge students with combined pronouns (glielo, me ne) and subjunctive clauses.'
          },
          differentiationAr: {
            struggling: 'توفير جداول ملونة لنهايات الأفعال وقوائم مبسطة لضمائر المفعول المباشر.',
            advanced: 'تكليف الطلاب بتحليل الضمائر المدمجة وتراكيب صيغة الشك والشرط المعقدة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ diagnostic testing grammar, lexicon, and situation responses.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت لقياس القواعد والمفردات والمواقف الحياتية الإيطالية.',
          exitTicketQuestion: {
            questionEn: "Which auxiliary and participle ending are required in the context of La struttura e formazione del Futuro Composto (Futuro Anteriore)?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق تركيب وصياغة زمن المستقبل المركب (Futuro Composto)؟",
            solutionEn: "The Futuro Composto is formed using the future simple of essere or avere plus the past participle (avrò parlato, sarò arrivato).",
            solutionAr: "يتركب المستقبل المركب من تصريف essere أو avere في المستقبل البسيط مضافاً إليه اسم المفعول للفعل الأساسي."
          }
        },
        worksheet: {
          id: 'th_it_ch2_l1_ws',
          titleEn: "Worksheet: La musica, il concorso canoro & il Futuro Composto",
          titleAr: "ورقة عمل: الموسيقى وتشكيل فرقة الروك وزمن المستقبل المركب (Anteriore)",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيقية للدرس وفق المعايير الوزارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'italian_language_lab',
          titleEn: "Music Rehearsal & Future Perfect Studio",
          titleAr: "استوديو المسابقة الموسيقية والمستقبل المركب",
          descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
        }
      },
      {
        id: 'th_it_ch2_l2',
        titleEn: "Gli strumenti musicali, fare le prove & i Pronomi Diretti",
        titleAr: "الآلات الموسيقية، بروفات الفرقة، وضمائر المفعول المباشر (lo, la, li, le)",
        summaryEn: "Musical instruments (batteria, chitarra, tastiera), rehearsals, and direct pronouns replacing direct objects (lo compro, la ascolto).",
        summaryAr: "الآلات الموسيقية وأماكن التدريب، واستخدام ضمائر المفعول به المباشر في الإحلال وموقعها قبل الفعل.",
        theoryContentEn: "### 1. I Pronomi Diretti (mi, ti, lo, la, ci, vi, li, le): Sostituzione dell’oggetto diretto\n- **Core Rule:** Direct object pronouns answer \"Chi?\" or \"Che cosa?\" and stand directly before the conjugated verb (Ascolti il brano? - Sì, lo ascolto).\n- **Syntactic Structure:** Lo replaces masculine singular nouns, la feminine singular, li masculine plural, and le feminine plural.\n- **Analytical Perspective:** With modal verbs (potere, dovere, volere), the pronoun can either precede the modal or attach to the infinitive (lo posso ascoltare / posso ascoltarlo).\n\n### 2. Espressioni di tempo libero e passatempi dei giovani italiani\n- **Linguistic Principle:** Leisure activities encompass ascoltare la musica, andare al cinema, navigare su Internet, and fare una passeggiata in centro.\n- **Grammar Application:** Social gatherings in the main square (la piazza) and meeting at cafes represent quintessential Italian adolescent socializing.\n- **Advanced Context:** Comparing traditional outdoor socializing with contemporary digital gaming highlights shifting cultural dynamics in modern Italy.\n\n### 3. Verbo piacere: Costruzione sintattica (mi piace / mi piacciono)\n- **Communicative Function:** The verb piacere agrees with the thing liked: \"mi piace\" precedes a singular noun or infinitive; \"mi piacciono\" precedes a plural noun.\n- **Usage Matrix:** Indirect pronouns represent the person experiencing pleasure: a me piace (mi piace), a te piace (ti piace), a lui piace (gli piace).\n- **Exam Strategy:** Exam distractors often attempt to match the verb piacere to the human pronoun rather than the grammatical subject (the liked object).",
        theoryContentAr: "### ١. ضمائر المفعول به المباشر: وظيفتها وإحلالها محل الاسم\n- **القاعدة الأساسية:** تجيب ضمائر المفعول المباشر عن سؤال (مَن؟ أو ماذا؟) وتوضع مباشرة قبل الفعل المصرف (هل تسمع المقطوعة؟ - نعم، أسمعها).\n- **التركيب النحوي:** يحل lo محل المفرد المذكر، و la محل المفرد المؤنث، و li محل الجمع المذكر، و le محل الجمع المؤنث.\n- **التحليل المتقدم:** مع الأفعال الخادمة أو الناقصة، يجوز وضع الضمير قبل الفعل المصرف أو دمجه في نهاية المصدر (lo posso fare / posso farlo).\n\n### ٢. تعبيرات أوقات الفراغ وهوايات الشباب الإيطالي\n- **المبدأ اللغوي:** تشمل أنشطة وقت الفراغ: الاستماع للموسيقى، الذهاب للسينما، تصفح الإنترنت، والتنزه في وسط المدينة.\n- **التطبيق الإعرابي:** يمثل التجمع في الميدان الرئيسي (la piazza) واللقاء في المقاهي ركناً أصيلاً من عادات التواصل والتفاعل الاجتماعي للشباب الإيطالي.\n- **السياق النموذجي:** يقارن التحليل الثقافي بين اللقاءات التقليدية في الميادين العامة وممارسات الألعاب الرقمية الحديثة لدى المراهقين.\n\n### ٣. فعل piacere: التركيب النحوي الدقيق (mi piace للمفرد و mi piacciono للجمع)\n- **الوظيفة التواصلية:** يتطابق فعل piacere مع الشيء المحبوب: mi piace مع المفرد والمصدر، و mi piacciono مع الاسم الجمع.\n- **مصفوفة الاستخدام:** تسبق ضمائر المفعول غير المباشر فعل piacere لبيان الشخص المعجب: mi piace (يعجبني)، ti piace (يعجبك)، gli piace (يعجبه).\n- **استراتيجية الامتحان:** تعتمد المشتتات الامتحانية على إغراء الطالب بمطابقة فعل piacere مع الضمير البشري بدلاً من فاعله النحوي الحقيقي (الاسم التالي له).",
        formulas: [
          {
            labelEn: "I Pronomi Diretti (mi, ti, lo, la, ci, vi, li, le): Sostituzione dell’oggetto diretto",
            labelAr: "ضمائر المفعول به المباشر: وظيفتها وإحلالها محل الاسم",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "Espressioni di tempo libero e passatempi dei giovani italiani",
            labelAr: "تعبيرات أوقات الفراغ وهوايات الشباب الإيطالي",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Verbo piacere: Costruzione sintattica (mi piace / mi piacciono)",
            labelAr: "فعل piacere: التركيب النحوي الدقيق (mi piace للمفرد و mi piacciono للجمع)",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Italian Language (In Italia)',
          bookTitleAr: 'كتاب اللغة الإيطالية الرسمي (In Italia) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-IT-CH02-L2',
          pageRange: '51-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Gli strumenti musicali, fare le prove & i Pronomi Diretti",
          titleAr: "خطة الدرس التوجيهية: الآلات الموسيقية، بروفات الفرقة، وضمائر المفعول المباشر (lo, la, li, le)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-IT-CH02-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of I Pronomi Diretti (mi, ti, lo, la, ci, vi, li, le): Sostituzione dell’oggetto diretto",
            "Apply grammatical inflections and verb tenses in Espressioni di tempo libero e passatempi dei giovani italiani",
            "Execute communicative everyday situation responses in Verbo piacere: Costruzione sintattica (mi piace / mi piacciono)"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ ضمائر المفعول به المباشر: وظيفتها وإحلالها محل الاسم",
            "تطبيق تصريفات الأفعال والضمائر لـ تعبيرات أوقات الفراغ وهوايات الشباب الإيطالي",
            "إتقان الردود التداولية في المواقف الحياتية لـ فعل piacere: التركيب النحوي الدقيق (mi piace للمفرد و mi piacciono للجمع)"
          ],
          prerequisitesEn: ['Italian A1/A2 Foundations', 'Presente Indicativo', 'Basic Vocabulary'],
          prerequisitesAr: ['أساسيات اللغة الإيطالية A1/A2', 'زمن المضارع البسيط', 'المفردات الأساسية للثانوية'],
          keyVocabularyEn: [
            { term: 'Futuro Semplice', definition: 'Simple future tense for projects and promises' },
            { term: 'Pronomi Diretti', definition: 'Direct object pronouns (lo, la, li, le)' }
          ],
          keyVocabularyAr: [
            { term: 'Futuro Semplice', definition: 'زمن المستقبل البسيط للتعبير عن المشروعات والوعود والتوقعات' },
            { term: 'Pronomi Diretti', definition: 'ضمائر المفعول به المباشر التي تحل محل الاسم بدون حرف جر' }
          ],
          teachingPacing: [
            { phaseEn: 'Phonetics & Warm-Up', phaseAr: 'التهيئة الصوتية والاستكشاف', duration: '20 min', activitiesEn: 'Speech audio drills and dialogue immersion', activitiesAr: 'تدريبات النطق الصوتي والاستماع لحوار الدرس' },
            { phaseEn: 'Grammar Analysis & Drills', phaseAr: 'التطبيق والتحليل النحوي', duration: '70 min', activitiesEn: 'Verb conjugation matrix, textbook exercises, and databank MCQs', activitiesAr: 'مصفوفة تصريف الأفعال، التمارين النموذجية، وحل أسئلة بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing direct object pronoun agreement with indirect pronouns which never cause participle agreement in compound tenses'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين الضمائر المباشرة التي تفرض تبعية اسم المفعول في الماضي والضمائر غير المباشرة التي لا تسبب أي تبعية نهائياً'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded verb ending tables and direct pronoun charts.',
            advanced: 'Challenge students with combined pronouns (glielo, me ne) and subjunctive clauses.'
          },
          differentiationAr: {
            struggling: 'توفير جداول ملونة لنهايات الأفعال وقوائم مبسطة لضمائر المفعول المباشر.',
            advanced: 'تكليف الطلاب بتحليل الضمائر المدمجة وتراكيب صيغة الشك والشرط المعقدة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ diagnostic testing grammar, lexicon, and situation responses.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت لقياس القواعد والمفردات والمواقف الحياتية الإيطالية.',
          exitTicketQuestion: {
            questionEn: "Which auxiliary and participle ending are required in the context of I Pronomi Diretti (mi, ti, lo, la, ci, vi, li, le): Sostituzione dell’oggetto diretto?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق ضمائر المفعول به المباشر: وظيفتها وإحلالها محل الاسم؟",
            solutionEn: "Direct object pronouns answer \"Chi?\" or \"Che cosa?\" and stand directly before the conjugated verb (Ascolti il brano? - Sì, lo ascolto).",
            solutionAr: "تجيب ضمائر المفعول المباشر عن سؤال (مَن؟ أو ماذا؟) وتوضع مباشرة قبل الفعل المصرف (هل تسمع المقطوعة؟ - نعم، أسمعها)."
          }
        },
        worksheet: {
          id: 'th_it_ch2_l2_ws',
          titleEn: "Worksheet: Gli strumenti musicali, fare le prove & i Pronomi Diretti",
          titleAr: "ورقة عمل: الآلات الموسيقية، بروفات الفرقة، وضمائر المفعول المباشر (lo, la, li, le)",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيقية للدرس وفق المعايير الوزارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'italian_language_lab',
          titleEn: "Music Rehearsal & Future Perfect Studio",
          titleAr: "استوديو المسابقة الموسيقية والمستقبل المركب",
          descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
        }
      }
    ],
    databank: italianCh2Databank,
    solvedExamples: italianCh2SolvedExamples,
    exerciseProblems: italianCh2Exercises
  },
  {
    id: 'th_it_ch3',
    chapterNumber: 3,
    titleEn: "Unità 3: Fare la spesa, la moda, i negozi & il pronome NE",
    titleAr: "الوحدة الثالثة: التسوق، الملابس والموضة والضمائر مع الماضي والضمير NE",
    descriptionEn: "Shopping at the mall, garments, colors, sizes, seasonal sales (saldi), compound tenses with direct pronoun agreement (l'ho vista, li ho comprati), and the partitive pronoun NE.",
    descriptionAr: "التسوق في المركز التجاري، الملابس، المقاسات، الألوان وتخفيضات الأسعار (الصالدي)، تطابق اسم المفعول مع الضمائر المباشرة، وضمير التجزئة NE.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'italian_language_lab',
        titleEn: "Shopping Mall & Partitive Pronoun NE Studio",
        titleAr: "استوديو التسوق وضمير التجزئة NE",
        descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
      }
    ],
    lessons: [
      {
        id: 'th_it_ch3_l1',
        titleEn: "Al negozio di abbigliamento, saldi & Pronomi Diretti al Passato",
        titleAr: "في متجر الملابس، تخفيضات الصالدي، وتطابق الضمائر المباشرة في الماضي",
        summaryEn: "Shopping for concert outfits, asking for sizes and colors, sales discounts, and participle agreement with direct pronouns (l'ho vista, li ho comprati).",
        summaryAr: "شراء ملابس الحفل، المقاسات والألوان، تخفيضات الأسعار (i saldi)، وقاعدة التبعية الإلزامية مع الضمائر المباشرة في الماضي.",
        theoryContentEn: "### 1. L’accordo del participio passato con i Pronomi Diretti (lo, la, li, le)\n- **Core Rule:** In compound tenses (Passato Prossimo), the past participle MUST agree in gender and number with direct pronouns lo, la, li, and le.\n- **Syntactic Structure:** Lo and la elide to l’ before ho/hai/ha/abbiamo/avete/hanno, but the participle ending retains agreement: l’ho vista (female) / l’ho visto (male).\n- **Analytical Perspective:** Plural pronouns li and le NEVER elide with an apostrophe and strictly command plural agreement: li ho comprati / le ho comprate.\n\n### 2. Il pronome partitivo NE: Quantità, numeri e nient’affatto\n- **Linguistic Principle:** The pronoun NE replaces a noun accompanied by a number or quantity (Quanti caffè bevi? - Ne bevo due).\n- **Grammar Application:** In past tenses, the participle following NE must agree with the expressed quantity, not the whole entity (Quante mele compri? - Ne ho comprate tre).\n- **Advanced Context:** If all items are taken without quantity division, direct pronouns are used instead of NE: \"Le ho comprate tutte\" (Direct) vs. \"Ne ho comprate due\" (Partitive).\n\n### 3. Al negozio di abbigliamento: Capi, taglie, colori e prezzi\n- **Communicative Function:** Clothing lexicon includes pantaloni, maglietta, camicia, giacca, gonna, scarpe, and stivali.\n- **Usage Matrix:** Key communicative phrases include: \"Che taglia porta?\" (What size do you wear?), \"Posso provarlo?\" (Can I try it on?), and \"Di che colore lo vuole?\".\n- **Exam Strategy:** Understanding garment adjective agreements across gender and irregular invariable colors (rosa, blu, viola) avoids common examination traps.",
        theoryContentAr: "### ١. تطابق اسم المفعول في الماضي مع ضمائر المفعول به المباشر\n- **القاعدة الأساسية:** في الأزمنة المركبة مع فعل avere، يجب تطابق اسم المفعول وجوباً في النوع والعدد مع ضمائر المفعول المباشر (lo, la, li, le).\n- **التركيب النحوي:** يدغم lo و la ليصبحا l قبل تصريفات avere، ولكن تظهر علامة التبعية في نهاية اسم المفعول: l’ho vista (رأيتها) و l’ho visto (رأيته).\n- **التحليل المتقدم:** ضمائر الجمع li و le لا تحذف حروفها أبداً ولا توضع لها فاصلة عليا، وتفرض التبعية التامة: li ho comprati و le ho comprate.\n\n### ٢. ضمير التجزئة والكمية NE: الأعداد، المقادير، ونفي الكمية\n- **المبدأ اللغوي:** يحل ضمير التجزئة NE محل اسم مسبوق بعدد أو كمية محددة أو جزئية (كم فنجان قهوة تشرب؟ - أشرب منها اثنين: Ne bevo due).\n- **التطبيق الإعرابي:** في الماضي، يتطابق اسم المفعول مع الكمية الجزئية المذكورة بعد NE: كم تفاحة اشتريت؟ - اشتريت منها ثلاثاً: Ne ho comprate tre.\n- **السياق النموذجي:** إذا شمل الفعل كل الشيء دون تجزئة، يُستخدم الضمير المباشر le/li بدلاً من NE: اشتريتها كلها (Le ho comprate tutte) مقابل اشتريت منها اثنتين (Ne ho comprate due).\n\n### ٣. في متجر الملابس: قطع الثياب، المقاسات، الألوان والأسعار\n- **الوظيفة التواصلية:** تشمل مفردات الملابس: بنطال (pantaloni)، تي شيرت (maglietta)، قميص (camicia)، سترة (giacca)، تنورة (gonna)، وحذاء (scarpe).\n- **مصفوفة الاستخدام:** تشمل العبارات الحوارية: ما مقاس حضرتك؟ (Che taglia porta؟)، هل يمكنني قياسه؟ (Posso provarlo؟)، وأي لون تفضل؟\n- **استراتيجية الامتحان:** يمنع استيعاب تطابق صفات الملابس مع الألوان الثابتة التي لا تتغير في الجمع (مثل blu, rosa, viola) الوقوع في الأخطاء الشائعة.",
        formulas: [
          {
            labelEn: "L’accordo del participio passato con i Pronomi Diretti (lo, la, li, le)",
            labelAr: "تطابق اسم المفعول في الماضي مع ضمائر المفعول به المباشر",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "Il pronome partitivo NE: Quantità, numeri e nient’affatto",
            labelAr: "ضمير التجزئة والكمية NE: الأعداد، المقادير، ونفي الكمية",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Al negozio di abbigliamento: Capi, taglie, colori e prezzi",
            labelAr: "في متجر الملابس: قطع الثياب، المقاسات، الألوان والأسعار",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Italian Language (In Italia)',
          bookTitleAr: 'كتاب اللغة الإيطالية الرسمي (In Italia) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-IT-CH03-L1',
          pageRange: '1-50'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Al negozio di abbigliamento, saldi & Pronomi Diretti al Passato",
          titleAr: "خطة الدرس التوجيهية: في متجر الملابس، تخفيضات الصالدي، وتطابق الضمائر المباشرة في الماضي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-IT-CH03-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of L’accordo del participio passato con i Pronomi Diretti (lo, la, li, le)",
            "Apply grammatical inflections and verb tenses in Il pronome partitivo NE: Quantità, numeri e nient’affatto",
            "Execute communicative everyday situation responses in Al negozio di abbigliamento: Capi, taglie, colori e prezzi"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ تطابق اسم المفعول في الماضي مع ضمائر المفعول به المباشر",
            "تطبيق تصريفات الأفعال والضمائر لـ ضمير التجزئة والكمية NE: الأعداد، المقادير، ونفي الكمية",
            "إتقان الردود التداولية في المواقف الحياتية لـ في متجر الملابس: قطع الثياب، المقاسات، الألوان والأسعار"
          ],
          prerequisitesEn: ['Italian A1/A2 Foundations', 'Presente Indicativo', 'Basic Vocabulary'],
          prerequisitesAr: ['أساسيات اللغة الإيطالية A1/A2', 'زمن المضارع البسيط', 'المفردات الأساسية للثانوية'],
          keyVocabularyEn: [
            { term: 'Futuro Semplice', definition: 'Simple future tense for projects and promises' },
            { term: 'Pronomi Diretti', definition: 'Direct object pronouns (lo, la, li, le)' }
          ],
          keyVocabularyAr: [
            { term: 'Futuro Semplice', definition: 'زمن المستقبل البسيط للتعبير عن المشروعات والوعود والتوقعات' },
            { term: 'Pronomi Diretti', definition: 'ضمائر المفعول به المباشر التي تحل محل الاسم بدون حرف جر' }
          ],
          teachingPacing: [
            { phaseEn: 'Phonetics & Warm-Up', phaseAr: 'التهيئة الصوتية والاستكشاف', duration: '20 min', activitiesEn: 'Speech audio drills and dialogue immersion', activitiesAr: 'تدريبات النطق الصوتي والاستماع لحوار الدرس' },
            { phaseEn: 'Grammar Analysis & Drills', phaseAr: 'التطبيق والتحليل النحوي', duration: '70 min', activitiesEn: 'Verb conjugation matrix, textbook exercises, and databank MCQs', activitiesAr: 'مصفوفة تصريف الأفعال، التمارين النموذجية، وحل أسئلة بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing direct object pronoun agreement with indirect pronouns which never cause participle agreement in compound tenses'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين الضمائر المباشرة التي تفرض تبعية اسم المفعول في الماضي والضمائر غير المباشرة التي لا تسبب أي تبعية نهائياً'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded verb ending tables and direct pronoun charts.',
            advanced: 'Challenge students with combined pronouns (glielo, me ne) and subjunctive clauses.'
          },
          differentiationAr: {
            struggling: 'توفير جداول ملونة لنهايات الأفعال وقوائم مبسطة لضمائر المفعول المباشر.',
            advanced: 'تكليف الطلاب بتحليل الضمائر المدمجة وتراكيب صيغة الشك والشرط المعقدة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ diagnostic testing grammar, lexicon, and situation responses.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت لقياس القواعد والمفردات والمواقف الحياتية الإيطالية.',
          exitTicketQuestion: {
            questionEn: "Which auxiliary and participle ending are required in the context of L’accordo del participio passato con i Pronomi Diretti (lo, la, li, le)?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق تطابق اسم المفعول في الماضي مع ضمائر المفعول به المباشر؟",
            solutionEn: "In compound tenses (Passato Prossimo), the past participle MUST agree in gender and number with direct pronouns lo, la, li, and le.",
            solutionAr: "في الأزمنة المركبة مع فعل avere، يجب تطابق اسم المفعول وجوباً في النوع والعدد مع ضمائر المفعول المباشر (lo, la, li, le)."
          }
        },
        worksheet: {
          id: 'th_it_ch3_l1_ws',
          titleEn: "Worksheet: Al negozio di abbigliamento, saldi & Pronomi Diretti al Passato",
          titleAr: "ورقة عمل: في متجر الملابس، تخفيضات الصالدي، وتطابق الضمائر المباشرة في الماضي",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيقية للدرس وفق المعايير الوزارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'italian_language_lab',
          titleEn: "Shopping Mall & Partitive Pronoun NE Studio",
          titleAr: "استوديو التسوق وضمير التجزئة NE",
          descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
        }
      },
      {
        id: 'th_it_ch3_l2',
        titleEn: "Fare la spesa, quantità & il pronome partitivo NE",
        titleAr: "التسوق في المركز التجاري، التعبير عن المقادير وضمير التجزئة NE",
        summaryEn: "Supermarket shopping, numerical quantities, using partitive NE (ne bevo due), and participle agreement with numbers in compound tenses.",
        summaryAr: "التسوق وحساب الكميات والأعداد، استخدام ضمير التجزئة والكمية NE، وتطابق اسم المفعول في الماضي مع الكمية المذكورة.",
        theoryContentEn: "### 1. I saldi di stagione e le modalità di pagamento (sconti, contanti, carta)\n- **Core Rule:** Seasonal sales (i saldi) offer discounts (sconti del 30%, 50%), allowing shoppers to purchase high-quality garments at affordable prices.\n- **Syntactic Structure:** Payment transactions distinguish between paying in cash (\"in contanti\") and paying electronically (\"con la carta di credito\").\n- **Analytical Perspective:** Situational prompts evaluate polite negotiation: asking whether an item is on sale or requesting an exchange for a different size.\n\n### 2. I Pronomi Combinati: Fusione di indiretto e diretto (me lo, te la, glielo)\n- **Linguistic Principle:** When an indirect pronoun meets a direct pronoun, mi, ti, ci, and vi transform into me, te, ce, and ve before lo, la, li, le, and ne.\n- **Grammar Application:** Third person indirect pronouns gli and le merge with direct pronouns into a single word: glielo, gliela, glieli, gliele, and gliene.\n- **Advanced Context:** In compound tenses with combined pronouns, participle agreement is strictly governed by the direct pronoun component (Gliela ho data).\n\n### 3. Lessico dei negozi e dei centri commerciali in Italia\n- **Communicative Function:** Shopping venues include il centro commerciale, il negozio di abbigliamento, la libreria, and la vetrina.\n- **Usage Matrix:** Shoppers browse storefront windows (\"guardare le vetrine\"), inquire about availability, and verify fitting room locations (\"i camerini\").\n- **Exam Strategy:** Contextual reading passages analyze consumer behavior comparing neighborhood boutiques with large commercial hypermarkets.",
        theoryContentAr: "### ١. مواسم التخفيضات (الصالدي) وطرق الدفع (الخصومات، نقداً، بالبطاقة)\n- **القاعدة الأساسية:** توفر تخفيضات الموسم (i saldi) خصومات كبرى (sconti)، مما يتيح للمتسوقين شراء ملابس ممتازة بأسعار مخفضة.\n- **التركيب النحوي:** يميز الحوار الشرائي بين الدفع نقداً (pagare in contanti) والدفع الإلكتروني بالبطاقة البنكية (con la carta di credito).\n- **التحليل المتقدم:** تقيس أسئلة المواقف التفاوض اللبق: السؤال عما إذا كانت القطعة مشمولة بالتخفيضات، أو طلب استبدال المقاس بمقاس أكبر أو أصغر.\n\n### ٢. الضمائر المدمجة: دمج الضمير غير المباشر مع الضمير المباشر\n- **المبدأ اللغوي:** عند التقاء ضمير غير مباشر مع ضمير مباشر، تتحول mi و ti و ci و vi إلى me و te و ce و ve أمام lo و la و li و le و ne.\n- **التطبيق الإعرابي:** تندمج ضمائر الغائب غير المباشرة gli و le مع الضمائر المباشرة في كلمة واحدة مشتركة: glielo, gliela, glieli, gliele, gliene.\n- **السياق النموذجي:** في الأزمنة المركبة مع الضمائر المدمجة، يحكم المكون المباشر التبعية التامة لاسم المفعول: Gliela ho data (أعطيتها له/لها).\n\n### ٣. مفردات المتاجر والمراكز التجارية والواجهات في إيطاليا\n- **الوظيفة التواصلية:** تشمل أماكن التسوق: المركز التجاري (il centro commerciale)، متجر الملابس، المكتبة، وواجهة العرض (la vetrina).\n- **مصفوفة الاستخدام:** يتجول المتسوقون لمشاهدة واجهات المتاجر، السؤال عن توافر السلع، ومعرفة موقع غرف قياس الملابس (i camerini).\n- **استراتيجية الامتحان:** تحلل نصوص القراءة الفهم المقارن لسلوك المستهلك بين المتاجر المحلية التراثية ومجمعات التسوق الحديثة الكبرى.",
        formulas: [
          {
            labelEn: "I saldi di stagione e le modalità di pagamento (sconti, contanti, carta)",
            labelAr: "مواسم التخفيضات (الصالدي) وطرق الدفع (الخصومات، نقداً، بالبطاقة)",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "I Pronomi Combinati: Fusione di indiretto e diretto (me lo, te la, glielo)",
            labelAr: "الضمائر المدمجة: دمج الضمير غير المباشر مع الضمير المباشر",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Lessico dei negozi e dei centri commerciali in Italia",
            labelAr: "مفردات المتاجر والمراكز التجارية والواجهات في إيطاليا",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Italian Language (In Italia)',
          bookTitleAr: 'كتاب اللغة الإيطالية الرسمي (In Italia) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-IT-CH03-L2',
          pageRange: '51-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Fare la spesa, quantità & il pronome partitivo NE",
          titleAr: "خطة الدرس التوجيهية: التسوق في المركز التجاري، التعبير عن المقادير وضمير التجزئة NE",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-IT-CH03-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of I saldi di stagione e le modalità di pagamento (sconti, contanti, carta)",
            "Apply grammatical inflections and verb tenses in I Pronomi Combinati: Fusione di indiretto e diretto (me lo, te la, glielo)",
            "Execute communicative everyday situation responses in Lessico dei negozi e dei centri commerciali in Italia"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ مواسم التخفيضات (الصالدي) وطرق الدفع (الخصومات، نقداً، بالبطاقة)",
            "تطبيق تصريفات الأفعال والضمائر لـ الضمائر المدمجة: دمج الضمير غير المباشر مع الضمير المباشر",
            "إتقان الردود التداولية في المواقف الحياتية لـ مفردات المتاجر والمراكز التجارية والواجهات في إيطاليا"
          ],
          prerequisitesEn: ['Italian A1/A2 Foundations', 'Presente Indicativo', 'Basic Vocabulary'],
          prerequisitesAr: ['أساسيات اللغة الإيطالية A1/A2', 'زمن المضارع البسيط', 'المفردات الأساسية للثانوية'],
          keyVocabularyEn: [
            { term: 'Futuro Semplice', definition: 'Simple future tense for projects and promises' },
            { term: 'Pronomi Diretti', definition: 'Direct object pronouns (lo, la, li, le)' }
          ],
          keyVocabularyAr: [
            { term: 'Futuro Semplice', definition: 'زمن المستقبل البسيط للتعبير عن المشروعات والوعود والتوقعات' },
            { term: 'Pronomi Diretti', definition: 'ضمائر المفعول به المباشر التي تحل محل الاسم بدون حرف جر' }
          ],
          teachingPacing: [
            { phaseEn: 'Phonetics & Warm-Up', phaseAr: 'التهيئة الصوتية والاستكشاف', duration: '20 min', activitiesEn: 'Speech audio drills and dialogue immersion', activitiesAr: 'تدريبات النطق الصوتي والاستماع لحوار الدرس' },
            { phaseEn: 'Grammar Analysis & Drills', phaseAr: 'التطبيق والتحليل النحوي', duration: '70 min', activitiesEn: 'Verb conjugation matrix, textbook exercises, and databank MCQs', activitiesAr: 'مصفوفة تصريف الأفعال، التمارين النموذجية، وحل أسئلة بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing direct object pronoun agreement with indirect pronouns which never cause participle agreement in compound tenses'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين الضمائر المباشرة التي تفرض تبعية اسم المفعول في الماضي والضمائر غير المباشرة التي لا تسبب أي تبعية نهائياً'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded verb ending tables and direct pronoun charts.',
            advanced: 'Challenge students with combined pronouns (glielo, me ne) and subjunctive clauses.'
          },
          differentiationAr: {
            struggling: 'توفير جداول ملونة لنهايات الأفعال وقوائم مبسطة لضمائر المفعول المباشر.',
            advanced: 'تكليف الطلاب بتحليل الضمائر المدمجة وتراكيب صيغة الشك والشرط المعقدة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ diagnostic testing grammar, lexicon, and situation responses.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت لقياس القواعد والمفردات والمواقف الحياتية الإيطالية.',
          exitTicketQuestion: {
            questionEn: "Which auxiliary and participle ending are required in the context of I saldi di stagione e le modalità di pagamento (sconti, contanti, carta)?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق مواسم التخفيضات (الصالدي) وطرق الدفع (الخصومات، نقداً، بالبطاقة)؟",
            solutionEn: "Seasonal sales (i saldi) offer discounts (sconti del 30%, 50%), allowing shoppers to purchase high-quality garments at affordable prices.",
            solutionAr: "توفر تخفيضات الموسم (i saldi) خصومات كبرى (sconti)، مما يتيح للمتسوقين شراء ملابس ممتازة بأسعار مخفضة."
          }
        },
        worksheet: {
          id: 'th_it_ch3_l2_ws',
          titleEn: "Worksheet: Fare la spesa, quantità & il pronome partitivo NE",
          titleAr: "ورقة عمل: التسوق في المركز التجاري، التعبير عن المقادير وضمير التجزئة NE",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيقية للدرس وفق المعايير الوزارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'italian_language_lab',
          titleEn: "Shopping Mall & Partitive Pronoun NE Studio",
          titleAr: "استوديو التسوق وضمير التجزئة NE",
          descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
        }
      }
    ],
    databank: italianCh3Databank,
    solvedExamples: italianCh3SolvedExamples,
    exerciseProblems: italianCh3Exercises
  },
  {
    id: 'th_it_ch4',
    chapterNumber: 4,
    titleEn: "Unità 4: L'oroscopo, il futuro, i Pronomi Indiretti & Situazioni",
    titleAr: "الوحدة الرابعة: الأبراج الفلكية، الضمائر غير المباشرة، والمواقف اليومية",
    descriptionEn: "Zodiac signs, horoscope forecasts for love, health, and career, indirect pronouns (mi, ti, gli, le, ci, vi, loro), and communicative everyday situations expressing joy, regret, or doubt.",
    descriptionAr: "الأبراج الفلكية، توقعات الحظ والعمل والصحة، الضمائر غير المباشرة (mi, ti, gli, le, ci, vi, loro)، والمواقف اليومية للتعبير عن الفرح، الأسف، والشك.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'italian_language_lab',
        titleEn: "Horoscope & Situations Communicative Studio",
        titleAr: "استوديو الأبراج والمواقف الحياتية اليومية",
        descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
        descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
      }
    ],
    lessons: [
      {
        id: 'th_it_ch4_l1',
        titleEn: "Segni zodiacali, oroscopo & i Pronomi Indiretti",
        titleAr: "الأبراج الفلكية، توقعات الحظ، وضمائر المفعول به غير المباشر (gli, le, loro)",
        summaryEn: "Zodiac signs, horoscope predictions for health and studies, and indirect pronouns (a chi? -> gli telefono, le parlo).",
        summaryAr: "الأبراج الفلكية وتوقعات الحظ والدراسة، وضمائر المفعول به غير المباشر واستخداماتها وإعرابها قبل الفعل أو بعده.",
        theoryContentEn: "### 1. L’oroscopo, i segni zodiacali e le previsioni per il futuro\n- **Core Rule:** Zodiac signs include l’Ariete, il Toro, i Gemelli, il Cancro, il Leone, and la Vergine.\n- **Syntactic Structure:** Horoscope columns forecast outcomes across three vital areas of adolescent life: l’amore, la salute, and il lavoro/studio.\n- **Analytical Perspective:** Textual analysis of horoscope passages exposes conditional promises and probabilistic modal verbs (potresti incontrare, avrai successo).\n\n### 2. I Pronomi Indiretti (mi, ti, gli, le, ci, vi, loro): Sostituzione con preposizione A\n- **Linguistic Principle:** Indirect pronouns answer \"A chi?\" (To whom?) and stand before the verb: mi (a me), ti (a te), gli (a lui), le (a lei), ci (a noi), vi (a voi).\n- **Grammar Application:** Unlike direct pronouns, indirect pronouns do NOT cause past participle agreement in compound tenses: \"Gli ho parlato\" / \"Le ho telefonato\".\n- **Advanced Context:** The third person plural pronoun \"loro\" strictly follows the conjugated verb without joining: \"Ho spiegato loro la lezione\".\n\n### 3. Situazioni Comunicative: Esprimere Gioia, Felicità e Sorpresa\n- **Communicative Function:** To express joy, Italians exclaim: \"Che bello!\", \"Che bella notizia!\", \"Che meraviglia!\", and \"Che bella sorpresa!\".\n- **Usage Matrix:** These joyful expressions celebrate triumphs such as winning the music competition or receiving top grades on final examinations.\n- **Exam Strategy:** In examination bubble sheets, students must accurately reject distress or disappointment distractors when the prompt explicitly mentions \"gioia\".",
        theoryContentAr: "### ١. الأبراج الفلكية، علامات الزودياك وتوقعات المستقبل والحظ\n- **القاعدة الأساسية:** تشمل الأبراج الفلكية: الحمل (l’Ariete)، الثور (il Toro)، الجوزاء (i Gemelli)، السرطان، الأسد، والعذراء.\n- **التركيب النحوي:** تتوقع أبواب الأبراج الصحفية الحظ في ثلاثة مجالات حيوية: العلاقات العاطفية، الصحة البدنية، والعمل أو الدراسة والامتحانات.\n- **التحليل المتقدم:** يكشف التحليل النصي للأبراج عن أسلوب الوعود المشروطة وأفعال الاحتمال للتعبير عن التفاؤل والتشجيع النفسي للشباب.\n\n### ٢. ضمائر المفعول به غير المباشر: الإحلال محل الاسم المجرور بـ A\n- **المبدأ اللغوي:** تجيب الضمائر غير المباشرة عن سؤال (إلى مَن؟) وتوضع قبل الفعل: mi (لي)، ti (لك)، gli (له)، le (لها)، ci (لنا)، vi (لكم).\n- **التطبيق الإعرابي:** على عكس الضمائر المباشرة، لا تسبب الضمائر غير المباشرة أي تبعية في اسم المفعول: Gli ho parlato (تحدثت إليه) و Le ho telefonato (هاتفتها).\n- **السياق النموذجي:** يتميز ضمير الجمع للغائب loro بأنه يوضع دائماً بعد الفعل منفصلاً عنه: Ho spiegato loro la lezione (شرحت لهم الدرس).\n\n### ٣. المواقف التواصلية: التعبير عن الفرح، السعادة، والمفاجأة السارة\n- **الوظيفة التواصلية:** للتعبير عن الفرح والسرور، يقول الإيطاليون: Che bello! (يا للروعة)، Che bella notizia! (يا له من خبر سار)، Che sorpresa! (مفاجأة جميلة).\n- **مصفوفة الاستخدام:** تُقال تعبيرات الفرح عند تحقيق انتصار كالفوز بالمسابقة الغنائية المدرسية، أو الحصول على الدرجات النهائية في الامتحانات.\n- **استراتيجية الامتحان:** في امتحانات الثانوية العامة، يتعين على الطالب استبعاد تعبيرات الأسف والحزن عندما يحدد الموقف نصاً التعبير عن الفرح (gioia).",
        formulas: [
          {
            labelEn: "L’oroscopo, i segni zodiacali e le previsioni per il futuro",
            labelAr: "الأبراج الفلكية، علامات الزودياك وتوقعات المستقبل والحظ",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "I Pronomi Indiretti (mi, ti, gli, le, ci, vi, loro): Sostituzione con preposizione A",
            labelAr: "ضمائر المفعول به غير المباشر: الإحلال محل الاسم المجرور بـ A",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Situazioni Comunicative: Esprimere Gioia, Felicità e Sorpresa",
            labelAr: "المواقف التواصلية: التعبير عن الفرح، السعادة، والمفاجأة السارة",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Italian Language (In Italia)',
          bookTitleAr: 'كتاب اللغة الإيطالية الرسمي (In Italia) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-IT-CH04-L1',
          pageRange: '1-50'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Segni zodiacali, oroscopo & i Pronomi Indiretti",
          titleAr: "خطة الدرس التوجيهية: الأبراج الفلكية، توقعات الحظ، وضمائر المفعول به غير المباشر (gli, le, loro)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-IT-CH04-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of L’oroscopo, i segni zodiacali e le previsioni per il futuro",
            "Apply grammatical inflections and verb tenses in I Pronomi Indiretti (mi, ti, gli, le, ci, vi, loro): Sostituzione con preposizione A",
            "Execute communicative everyday situation responses in Situazioni Comunicative: Esprimere Gioia, Felicità e Sorpresa"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ الأبراج الفلكية، علامات الزودياك وتوقعات المستقبل والحظ",
            "تطبيق تصريفات الأفعال والضمائر لـ ضمائر المفعول به غير المباشر: الإحلال محل الاسم المجرور بـ A",
            "إتقان الردود التداولية في المواقف الحياتية لـ المواقف التواصلية: التعبير عن الفرح، السعادة، والمفاجأة السارة"
          ],
          prerequisitesEn: ['Italian A1/A2 Foundations', 'Presente Indicativo', 'Basic Vocabulary'],
          prerequisitesAr: ['أساسيات اللغة الإيطالية A1/A2', 'زمن المضارع البسيط', 'المفردات الأساسية للثانوية'],
          keyVocabularyEn: [
            { term: 'Futuro Semplice', definition: 'Simple future tense for projects and promises' },
            { term: 'Pronomi Diretti', definition: 'Direct object pronouns (lo, la, li, le)' }
          ],
          keyVocabularyAr: [
            { term: 'Futuro Semplice', definition: 'زمن المستقبل البسيط للتعبير عن المشروعات والوعود والتوقعات' },
            { term: 'Pronomi Diretti', definition: 'ضمائر المفعول به المباشر التي تحل محل الاسم بدون حرف جر' }
          ],
          teachingPacing: [
            { phaseEn: 'Phonetics & Warm-Up', phaseAr: 'التهيئة الصوتية والاستكشاف', duration: '20 min', activitiesEn: 'Speech audio drills and dialogue immersion', activitiesAr: 'تدريبات النطق الصوتي والاستماع لحوار الدرس' },
            { phaseEn: 'Grammar Analysis & Drills', phaseAr: 'التطبيق والتحليل النحوي', duration: '70 min', activitiesEn: 'Verb conjugation matrix, textbook exercises, and databank MCQs', activitiesAr: 'مصفوفة تصريف الأفعال، التمارين النموذجية، وحل أسئلة بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing direct object pronoun agreement with indirect pronouns which never cause participle agreement in compound tenses'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين الضمائر المباشرة التي تفرض تبعية اسم المفعول في الماضي والضمائر غير المباشرة التي لا تسبب أي تبعية نهائياً'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded verb ending tables and direct pronoun charts.',
            advanced: 'Challenge students with combined pronouns (glielo, me ne) and subjunctive clauses.'
          },
          differentiationAr: {
            struggling: 'توفير جداول ملونة لنهايات الأفعال وقوائم مبسطة لضمائر المفعول المباشر.',
            advanced: 'تكليف الطلاب بتحليل الضمائر المدمجة وتراكيب صيغة الشك والشرط المعقدة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ diagnostic testing grammar, lexicon, and situation responses.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت لقياس القواعد والمفردات والمواقف الحياتية الإيطالية.',
          exitTicketQuestion: {
            questionEn: "Which auxiliary and participle ending are required in the context of L’oroscopo, i segni zodiacali e le previsioni per il futuro?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق الأبراج الفلكية، علامات الزودياك وتوقعات المستقبل والحظ؟",
            solutionEn: "Zodiac signs include l’Ariete, il Toro, i Gemelli, il Cancro, il Leone, and la Vergine.",
            solutionAr: "تشمل الأبراج الفلكية: الحمل (l’Ariete)، الثور (il Toro)، الجوزاء (i Gemelli)، السرطان، الأسد، والعذراء."
          }
        },
        worksheet: {
          id: 'th_it_ch4_l1_ws',
          titleEn: "Worksheet: Segni zodiacali, oroscopo & i Pronomi Indiretti",
          titleAr: "ورقة عمل: الأبراج الفلكية، توقعات الحظ، وضمائر المفعول به غير المباشر (gli, le, loro)",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيقية للدرس وفق المعايير الوزارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'italian_language_lab',
          titleEn: "Horoscope & Situations Communicative Studio",
          titleAr: "استوديو الأبراج والمواقف الحياتية اليومية",
          descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
        }
      },
      {
        id: 'th_it_ch4_l2',
        titleEn: "Situazioni comunicative: Gioia, Rammarico, Dubbio & Accordo",
        titleAr: "المواقف اليومية التواصلية: الفرح، الأسف، الشك، والموافقة والاعتراض",
        summaryEn: "Authentic communicative situations: expressing joy (Che bello!), regret (Che peccato!), doubt (Non so), and confirmation (Sul serio?).",
        summaryAr: "المواقف الحياتية اليومية: التعبير عن الفرح والسرور، الحزن والأسف، الشك وعدم اليقين، وطلب التأكيد والموافقة.",
        theoryContentEn: "### 1. Situazioni Comunicative: Esprimere Rammarico, Disappunto e Rabbia\n- **Core Rule:** To express regret or disappointment, Italians say: \"Che peccato!\", \"Che rabbia!\", \"Peccato!\", and \"Purtroppo non posso\".\n- **Syntactic Structure:** Situations involve missing a train, tickets being sold out for a rock concert, or falling ill before a fun outing.\n- **Analytical Perspective:** Distinguishing between mild regret (Che peccato!) and intense frustration (Che rabbia!) tests subtle emotional communicative register.\n\n### 2. Situazioni Comunicative: Esprimere Dubbio, Incertezza e Conferma\n- **Linguistic Principle:** To express doubt, speakers say: \"Mah!\", \"Non so\", \"Non ne sono sicuro\", and \"Ho qualche dubbio\".\n- **Grammar Application:** To ask for confirmation (chiedere conferma), speakers ask: \"Dici davvero?\", \"Sul serio?\", and \"È vero?\".\n- **Advanced Context:** To confirm something (confermare), speakers respond affirmatively: \"Ti giuro che è così!\", \"Ti assicuro!\", and \"Proprio così!\".\n\n### 3. Situazioni Comunicative: Esprimere Accordo, Disaccordo e Opinione Personale\n- **Communicative Function:** To agree, one says: \"Sono d’accordo\", \"Certamente\", \"Hai ragione\", and \"Penso anch’io la stessa cosa\".\n- **Usage Matrix:** To disagree, speakers state: \"Non sono d’accordo\", \"Hai torto\", \"Niente affatto\", and \"Secondo me ti sbagli\".\n- **Exam Strategy:** In ministerial MCQs, prompts specify \"quando esprimi accordo\" vs. \"quando esprimi disaccordo\" demanding precise keyword matching.",
        theoryContentAr: "### ١. المواقف التواصلية: التعبير عن الأسف، خيبة الأمل، والحسرة\n- **القاعدة الأساسية:** للتعبير عن الأسف وخيبة الأمل، يُقال: Che peccato! (يا للخسارة/للأسف)، Che rabbia! (يا للغيظ)، Purtroppo (للأسف الشديد).\n- **التركيب النحوي:** ترتبط هذه المواقف بنفاد تذاكر الحفل الموسيقي، ضياع موعد القطار، أو الإصابة بالمرض قبل رحلة مدرسية ممتعة.\n- **التحليل المتقدم:** يختبر التمييز بين الأسف العادي (Che peccato!) والغضب الشديد (Che rabbia!) استيعاب الدلالات الشعورية للغة الحية.\n\n### ٢. المواقف التواصلية: التعبير عن الشك، الحيرة، وطلب التأكيد\n- **المبدأ اللغوي:** للتعبير عن الشك وعدم التأكد، يقال: Mah!، و Non so (لا أدري)، و Non ne sono sicuro (لست متأكداً من ذلك).\n- **التطبيق الإعرابي:** لطلب التأكيد من المتحدث (chiedere conferma)، يُسأل: Dici davvero? (أتقول حقاً؟)، Sul serio? (بجدية؟)، È vero? (أحقاً؟).\n- **السياق النموذجي:** عند تأكيد الخبر (confermare)، يجاب بيقين: Ti assicuro! (أؤكد لك)، Ti giuro! (أقسم لك)، Proprio così! (بالضبط كذلك).\n\n### ٣. المواقف التواصلية: التعبير عن الموافقة، الرفض، وإبداء الرأي\n- **الوظيفة التواصلية:** للتعبير عن الموافقة، يقال: Sono d’accordo (أنا موافق)، Hai ragione (معك حق)، Certamente (بكل تأكيد).\n- **مصفوفة الاستخدام:** للتعبير عن عدم الموافقة والاعتراض، يقال: Non sono d’accordo (لست موافقاً)، Hai torto (أنت مخطئ)، Niente affatto (إطلاقاً).\n- **استراتيجية الامتحان:** في أسئلة البابل شيت، تحدد رأس المسألة بصرامة التعبير عن الموافقة أو الاعتراض، مما يتطلب استحضار المفردات المعتمدة بدقة.",
        formulas: [
          {
            labelEn: "Situazioni Comunicative: Esprimere Rammarico, Disappunto e Rabbia",
            labelAr: "المواقف التواصلية: التعبير عن الأسف، خيبة الأمل، والحسرة",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "Situazioni Comunicative: Esprimere Dubbio, Incertezza e Conferma",
            labelAr: "المواقف التواصلية: التعبير عن الشك، الحيرة، وطلب التأكيد",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Situazioni Comunicative: Esprimere Accordo, Disaccordo e Opinione Personale",
            labelAr: "المواقف التواصلية: التعبير عن الموافقة، الرفض، وإبداء الرأي",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Official Grade 12 Italian Language (In Italia)',
          bookTitleAr: 'كتاب اللغة الإيطالية الرسمي (In Italia) - الصف الثالث الثانوي',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-IT-CH04-L2',
          pageRange: '51-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Situazioni comunicative: Gioia, Rammarico, Dubbio & Accordo",
          titleAr: "خطة الدرس التوجيهية: المواقف اليومية التواصلية: الفرح، الأسف، الشك، والموافقة والاعتراض",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-IT-CH04-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Situazioni Comunicative: Esprimere Rammarico, Disappunto e Rabbia",
            "Apply grammatical inflections and verb tenses in Situazioni Comunicative: Esprimere Dubbio, Incertezza e Conferma",
            "Execute communicative everyday situation responses in Situazioni Comunicative: Esprimere Accordo, Disaccordo e Opinione Personale"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ المواقف التواصلية: التعبير عن الأسف، خيبة الأمل، والحسرة",
            "تطبيق تصريفات الأفعال والضمائر لـ المواقف التواصلية: التعبير عن الشك، الحيرة، وطلب التأكيد",
            "إتقان الردود التداولية في المواقف الحياتية لـ المواقف التواصلية: التعبير عن الموافقة، الرفض، وإبداء الرأي"
          ],
          prerequisitesEn: ['Italian A1/A2 Foundations', 'Presente Indicativo', 'Basic Vocabulary'],
          prerequisitesAr: ['أساسيات اللغة الإيطالية A1/A2', 'زمن المضارع البسيط', 'المفردات الأساسية للثانوية'],
          keyVocabularyEn: [
            { term: 'Futuro Semplice', definition: 'Simple future tense for projects and promises' },
            { term: 'Pronomi Diretti', definition: 'Direct object pronouns (lo, la, li, le)' }
          ],
          keyVocabularyAr: [
            { term: 'Futuro Semplice', definition: 'زمن المستقبل البسيط للتعبير عن المشروعات والوعود والتوقعات' },
            { term: 'Pronomi Diretti', definition: 'ضمائر المفعول به المباشر التي تحل محل الاسم بدون حرف جر' }
          ],
          teachingPacing: [
            { phaseEn: 'Phonetics & Warm-Up', phaseAr: 'التهيئة الصوتية والاستكشاف', duration: '20 min', activitiesEn: 'Speech audio drills and dialogue immersion', activitiesAr: 'تدريبات النطق الصوتي والاستماع لحوار الدرس' },
            { phaseEn: 'Grammar Analysis & Drills', phaseAr: 'التطبيق والتحليل النحوي', duration: '70 min', activitiesEn: 'Verb conjugation matrix, textbook exercises, and databank MCQs', activitiesAr: 'مصفوفة تصريف الأفعال، التمارين النموذجية، وحل أسئلة بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing direct object pronoun agreement with indirect pronouns which never cause participle agreement in compound tenses'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين الضمائر المباشرة التي تفرض تبعية اسم المفعول في الماضي والضمائر غير المباشرة التي لا تسبب أي تبعية نهائياً'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded verb ending tables and direct pronoun charts.',
            advanced: 'Challenge students with combined pronouns (glielo, me ne) and subjunctive clauses.'
          },
          differentiationAr: {
            struggling: 'توفير جداول ملونة لنهايات الأفعال وقوائم مبسطة لضمائر المفعول المباشر.',
            advanced: 'تكليف الطلاب بتحليل الضمائر المدمجة وتراكيب صيغة الشك والشرط المعقدة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ diagnostic testing grammar, lexicon, and situation responses.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت لقياس القواعد والمفردات والمواقف الحياتية الإيطالية.',
          exitTicketQuestion: {
            questionEn: "Which auxiliary and participle ending are required in the context of Situazioni Comunicative: Esprimere Rammarico, Disappunto e Rabbia?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق المواقف التواصلية: التعبير عن الأسف، خيبة الأمل، والحسرة؟",
            solutionEn: "To express regret or disappointment, Italians say: \"Che peccato!\", \"Che rabbia!\", \"Peccato!\", and \"Purtroppo non posso\".",
            solutionAr: "للتعبير عن الأسف وخيبة الأمل، يُقال: Che peccato! (يا للخسارة/للأسف)، Che rabbia! (يا للغيظ)، Purtroppo (للأسف الشديد)."
          }
        },
        worksheet: {
          id: 'th_it_ch4_l2_ws',
          titleEn: "Worksheet: Situazioni comunicative: Gioia, Rammarico, Dubbio & Accordo",
          titleAr: "ورقة عمل: المواقف اليومية التواصلية: الفرح، الأسف، الشك، والموافقة والاعتراض",
          descriptionEn: 'Formative assessment and linguistic practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيقية للدرس وفق المعايير الوزارية.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'italian_language_lab',
          titleEn: "Horoscope & Situations Communicative Studio",
          titleAr: "استوديو الأبراج والمواقف الحياتية اليومية",
          descriptionEn: 'Interactive real-time Italian audio, grammar, and situations studio.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة قواعد ونطق ومواقف اللغة الإيطالية.'
        }
      }
    ],
    databank: italianCh4Databank,
    solvedExamples: italianCh4SolvedExamples,
    exerciseProblems: italianCh4Exercises
  }
];

export const thanaweyaItalianBranch: Branch = {
  id: 'thanaweya_italian',
  titleEn: "Thanaweya Amma: Italian Language (Second Foreign Language - In Italia)",
  titleAr: "الثانوية العامة: اللغة الإيطالية (اللغة الأجنبية الثانية - منهج In Italia)",
  categoryEn: "National Foreign Languages Track",
  categoryAr: "مسار اللغات الأجنبية القومي",
  iconName: 'Languages',
  colorGradient: 'from-emerald-600 via-stone-100 to-red-600',
  chapters
};
