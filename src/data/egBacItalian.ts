import type { Branch, Chapter } from '../types/curriculum';
import { egBacItalianCh1Databank } from './databanks/egbac/egBacItalianCh1Databank';
import { egBacItalianCh1SolvedExamples, egBacItalianCh1Exercises } from './textbook/egbac/egBacItalianCh1Textbook';
import { egBacItalianCh2Databank } from './databanks/egbac/egBacItalianCh2Databank';
import { egBacItalianCh2SolvedExamples, egBacItalianCh2Exercises } from './textbook/egbac/egBacItalianCh2Textbook';
import { egBacItalianCh3Databank } from './databanks/egbac/egBacItalianCh3Databank';
import { egBacItalianCh3SolvedExamples, egBacItalianCh3Exercises } from './textbook/egbac/egBacItalianCh3Textbook';
import { egBacItalianCh4Databank } from './databanks/egbac/egBacItalianCh4Databank';
import { egBacItalianCh4SolvedExamples, egBacItalianCh4Exercises } from './textbook/egbac/egBacItalianCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'egbac_it_ch1',
    chapterNumber: 1,
    titleEn: "Unità 1: Società Contemporanea, Istituzioni Accademiche & Discorso Formale",
    titleAr: "الوحدة الأولى: المجتمع المعاصر، المؤسسات الأكاديمية والخطاب الرسمي المقارن",
    descriptionEn: "Academic Italian syntax, university faculties and research, formal administrative registers, subordinate clauses with causal and concessive conjunctions (poiché, benché, sebbene).",
    descriptionAr: "التعليم الجامعي والبحث العلمي في إيطاليا، سجلات الخطاب الأكاديمي الرسمي، الجمل التابعة السببية والاستدراكية (poiché, benché, sebbene)، وصياغة التحليل المقالي المتقدم.",
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
        id: 'egbac_it_ch1_l1',
        titleEn: "Strutture del Discorso Accademico & Congiunzioni Causali (poiché, siccome)",
        titleAr: "بنية الخطاب الأكاديمي والروابط السببية في اللغة الإيطالية المتقدمة",
        summaryEn: "Italian academic syntax, university registers, and causal connectors (poiché, siccome, giacché, dato che).",
        summaryAr: "التركيب اللغوي الأكاديمي، السجلات اللغوية الجامعية، والروابط السببية ودلالاتها التركيبية.",
        theoryContentEn: "### 1. Strutture del Discorso Accademico e Sintassi Universitaria Italiana\n- **Core Rule:** Italian academic discourse emphasizes formal lexical precision, abstract nominalizations, and complex periodic sentence structures.\n- **Syntactic Structure:** University lectures and seminar essays utilize impersonal constructions (si ritiene, si evince) to maintain scholarly objectivity.\n- **Analytical Perspective:** Synthesizing Italian academic essays requires mastery of modal nuances and citation frameworks conforming to European university norms.\n\n### 2. Le Proposizioni Subordinate Causali: Poiché, Giacché, Siccome e Dato che\n- **Linguistic Principle:** Causal subordinate clauses introduce the reason for an event using indicative conjunctions: poiché, giacché, siccome, and dato che.\n- **Grammar Application:** The conjunction \"siccome\" is predominantly placed at the very beginning of the sentence to present an acknowledged premise (Siccome pioveva, siamo rimasti a casa).\n- **Advanced Context:** Contrasting formal causal conjunctions (giacché, poiché) with colloquial markers (perché) refines register and stylistic precision.\n\n### 3. Le Proposizioni Concessive con il Congiuntivo: Sebbene, Benché e Quantunque\n- **Communicative Function:** Concessive conjunctions such as sebbene, benché, and quantunque strictly govern the subjunctive mood (sebbene sia difficile).\n- **Usage Matrix:** The concessive clause expresses a real or hypothetical obstacle that does not prevent the realization of the main action.\n- **Exam Strategy:** Differentiating between concessive conjunctions taking the subjunctive (benché, sebbene) and those taking the indicative (anche se) is a benchmark skill.",
        theoryContentAr: "### ١. بنية الخطاب الأكاديمي والتركيب اللغوي الجامعي في إيطاليا\n- **القاعدة الأساسية:** يركز الخطاب الأكاديمي الإيطالي على الدقة المعجمية الرسمية، التراكيب الاسمية المجردة، وبنية الجمل الدورية المعقدة.\n- **التركيب النحوي:** تعتمد المحاضرات والمقالات الأكاديمية على صيغ المبني للمجهول والضمائر غير المحددة لترسيخ الحيادية العلمية.\n- **التحليل المتقدم:** تتطلب صياغة المقالات النقدية إتقان التراكيب الدقيقة وضوابط الاقتباس المعتمدة في الجامعات الأوروبية.\n\n### ٢. الجمل التابعة السببية: روابط poiché و giacché و siccome و dato che\n- **المبدأ اللغوي:** توضح الجمل التابعة السببية علة وقوع الحدث باستخدام الروابط الصريحة مع صيغة Indicativo: مثل poiché و giacché و siccome.\n- **التطبيق الإعرابي:** تأتي الأداة siccome غالباً في صدر الجملة لتقديم حقيقة أو علة مسلم بها يترتب عليها جواب الشرط أو النتيجة اللاحقة.\n- **السياق النموذجي:** يميز التحليل اللغوي المتقدم بين الروابط الرسمية التراثية (giacché, poiché) والأداة الشائعة (perché) لضبط أسلوب الخطاب.\n\n### ٣. الجمل الاستدراكية مع صيغة الشك (Congiuntivo): sebbene و benché و quantunque\n- **الوظيفة التواصلية:** تفرض أدوات الاستدراك sebbene و benché و quantunque استخدام صيغة الشك والرجاء (Congiuntivo) وجوباً.\n- **مصفوفة الاستخدام:** تعبر الجملة الاستدراكية عن مانع أو عائق مفترض لا يحول دون وقوع الفعل الأساسي في الجملة الرئيسية.\n- **استراتيجية الامتحان:** يعد التفريق بين الروابط الاستدراكية التي تجزم بصيغة الشك وتلك التي تأخذ صيغة اليقين (anche se + indicativo) معياراً للتفوق.",
        formulas: [
          {
            labelEn: "Strutture del Discorso Accademico e Sintassi Universitaria Italiana",
            labelAr: "بنية الخطاب الأكاديمي والتركيب اللغوي الجامعي في إيطاليا",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "Le Proposizioni Subordinate Causali: Poiché, Giacché, Siccome e Dato che",
            labelAr: "الجمل التابعة السببية: روابط poiché و giacché و siccome و dato che",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Le Proposizioni Concessive con il Congiuntivo: Sebbene, Benché e Quantunque",
            labelAr: "الجمل الاستدراكية مع صيغة الشك (Congiuntivo): sebbene و benché و quantunque",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Advanced Italian Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في اللغة الإيطالية المتقدمة والدراسات الثقافية',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-IT-CH01-L1',
          pageRange: '1-50'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Strutture del Discorso Accademico & Congiunzioni Causali (poiché, siccome)",
          titleAr: "خطة الدرس التوجيهية: بنية الخطاب الأكاديمي والروابط السببية في اللغة الإيطالية المتقدمة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-IT-CH01-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Strutture del Discorso Accademico e Sintassi Universitaria Italiana",
            "Apply grammatical inflections and verb tenses in Le Proposizioni Subordinate Causali: Poiché, Giacché, Siccome e Dato che",
            "Execute communicative everyday situation responses in Le Proposizioni Concessive con il Congiuntivo: Sebbene, Benché e Quantunque"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ بنية الخطاب الأكاديمي والتركيب اللغوي الجامعي في إيطاليا",
            "تطبيق تصريفات الأفعال والضمائر لـ الجمل التابعة السببية: روابط poiché و giacché و siccome و dato che",
            "إتقان الردود التداولية في المواقف الحياتية لـ الجمل الاستدراكية مع صيغة الشك (Congiuntivo): sebbene و benché و quantunque"
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
            questionEn: "Which auxiliary and participle ending are required in the context of Strutture del Discorso Accademico e Sintassi Universitaria Italiana?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق بنية الخطاب الأكاديمي والتركيب اللغوي الجامعي في إيطاليا؟",
            solutionEn: "Italian academic discourse emphasizes formal lexical precision, abstract nominalizations, and complex periodic sentence structures.",
            solutionAr: "يركز الخطاب الأكاديمي الإيطالي على الدقة المعجمية الرسمية، التراكيب الاسمية المجردة، وبنية الجمل الدورية المعقدة."
          }
        },
        worksheet: {
          id: 'egbac_it_ch1_l1_ws',
          titleEn: "Worksheet: Strutture del Discorso Accademico & Congiunzioni Causali (poiché, siccome)",
          titleAr: "ورقة عمل: بنية الخطاب الأكاديمي والروابط السببية في اللغة الإيطالية المتقدمة",
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
        id: 'egbac_it_ch1_l2',
        titleEn: "Proposizioni Concessive con il Congiuntivo & Comunicazione Istituzionale",
        titleAr: "الجمل الاستدراكية مع صيغة الشك (benché, sebbene) والمراسلات المؤسسية",
        summaryEn: "Concessive clauses governing the subjunctive (sebbene sia difficile) and formal institutional epistolary conventions.",
        summaryAr: "الجمل الاستدراكية الملزمة لصيغة الشك Congiuntivo، وأصول المكاتبات والمراسلات الرسمية والبروتوكولية.",
        theoryContentEn: "### 1. Il Sistema Universitario Italiano: Crediti Formativi (CFU), Laurea e Dottorato\n- **Core Rule:** The Italian university framework follows the Bologna Process: Laurea Triennale (180 CFU), Laurea Magistrale (120 CFU), and Dottorato di Ricerca.\n- **Syntactic Structure:** Academic evaluation is calibrated on a scale of 30 for university examinations (18 minimum pass, 30 e lode distinction) and 110 for graduation.\n- **Analytical Perspective:** Analyzing international mobility (Erasmus+) fosters cross-cultural linguistic synthesis and academic European integration.\n\n### 2. La Comunicazione Epistolare Formale: Formule di Apertura e di Chiusura\n- **Linguistic Principle:** Formal Italian correspondence uses honorific titles: Egregio Signore, Gentile Professoressa, and Chiarissimo Rettore.\n- **Grammar Application:** Closing formulas must align with formal etiquette: Cordiali saluti, Distinti saluti, and Con osservanza.\n- **Advanced Context:** Mastering bureaucratic correspondence involves the use of capital courtesy pronouns (La ringrazio, Le porgo i miei saluti).\n\n### 3. Metodologia di Analisi Testuale e Sintesi Critica di Fonti Scritte\n- **Communicative Function:** Critical reading involves identifying the thesis, supporting arguments, counter-arguments, and the author’s ultimate perspective.\n- **Usage Matrix:** Textual analysis evaluates cohesive markers, argumentative connectors, and lexical registers across Italian scientific texts.\n- **Exam Strategy:** Synthesizing competing secondary sources empowers students to construct rigorous, well-reasoned comparative analyses in academic Italian.",
        theoryContentAr: "### ١. النظام الجامعي الإيطالي: الساعات المعتمدة (CFU)، الليسانس، والماجستير والدكتوراه\n- **القاعدة الأساسية:** يعتمد التعليم العالي الإيطالي مسار بولونيا الأوروبي: الليسانس (180 ساعة معتمدة)، الماجستير (120 ساعة)، والدكتوراه البحثية.\n- **التركيب النحوي:** تُقاس درجات الامتحانات الجامعية الإيطالية من 30 درجة (النجاح من 18، والامتياز 30 مع مرتبة الشرف)، ودرجة التخرج من 110.\n- **التحليل المتقدم:** يدعم تحليل برامج التبادل الطلابي الأوروبي (إيراسموس) التكامل الثقافي والأكاديمي والريادة اللغوية الدولية.\n\n### ٢. المراسلات الرسمية والمهنية الإيطالية: صيغ الافتتاح والختام والبروتوكول\n- **المبدأ اللغوي:** تستخدم المكاتبات الرسمية الإيطالية ألقاب التوقير البروتوكولية: Egregio Signore (السيد الفاضل) و Gentile Professoressa.\n- **التطبيق الإعرابي:** تتطلب خاتمة الرسائل المهنية التزام العبارات الختامية المعيارية: Cordiali saluti (تحياتي القلبية) و Distinti saluti.\n- **السياق النموذجي:** يتطلب إتقان الخطاب المؤسسي استخدام ضمائر الاحترام المكتوبة بحرف كبير (La ringrazio, Le comunico) للدلالة على التقدير.\n\n### ٣. منهجية التحليل النصي والنقد اللغوي للمصادر والمراجع الإيطالية\n- **الوظيفة التواصلية:** تتضمن القراءة النقدية تحديد الفكرة المحورية، الأدلة الداعمة، الحجج المضادة، والرؤية الختامية للمؤلف.\n- **مصفوفة الاستخدام:** يقيم التحليل النصي روابط الاتساق والانسجام النحوي، ومؤشرات البرهان، والسجلات المعجمية في المقالات العلمية.\n- **استراتيجية الامتحان:** يمكّن تلخيص ونقد المصادر الأكاديمية المتعددة الطلاب من بناء أطروحات نقدية مقارنة ومحكمة باللغة الإيطالية المتقدمة.",
        formulas: [
          {
            labelEn: "Il Sistema Universitario Italiano: Crediti Formativi (CFU), Laurea e Dottorato",
            labelAr: "النظام الجامعي الإيطالي: الساعات المعتمدة (CFU)، الليسانس، والماجستير والدكتوراه",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "La Comunicazione Epistolare Formale: Formule di Apertura e di Chiusura",
            labelAr: "المراسلات الرسمية والمهنية الإيطالية: صيغ الافتتاح والختام والبروتوكول",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Metodologia di Analisi Testuale e Sintesi Critica di Fonti Scritte",
            labelAr: "منهجية التحليل النصي والنقد اللغوي للمصادر والمراجع الإيطالية",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Advanced Italian Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في اللغة الإيطالية المتقدمة والدراسات الثقافية',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-IT-CH01-L2',
          pageRange: '51-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Proposizioni Concessive con il Congiuntivo & Comunicazione Istituzionale",
          titleAr: "خطة الدرس التوجيهية: الجمل الاستدراكية مع صيغة الشك (benché, sebbene) والمراسلات المؤسسية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-IT-CH01-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Il Sistema Universitario Italiano: Crediti Formativi (CFU), Laurea e Dottorato",
            "Apply grammatical inflections and verb tenses in La Comunicazione Epistolare Formale: Formule di Apertura e di Chiusura",
            "Execute communicative everyday situation responses in Metodologia di Analisi Testuale e Sintesi Critica di Fonti Scritte"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ النظام الجامعي الإيطالي: الساعات المعتمدة (CFU)، الليسانس، والماجستير والدكتوراه",
            "تطبيق تصريفات الأفعال والضمائر لـ المراسلات الرسمية والمهنية الإيطالية: صيغ الافتتاح والختام والبروتوكول",
            "إتقان الردود التداولية في المواقف الحياتية لـ منهجية التحليل النصي والنقد اللغوي للمصادر والمراجع الإيطالية"
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
            questionEn: "Which auxiliary and participle ending are required in the context of Il Sistema Universitario Italiano: Crediti Formativi (CFU), Laurea e Dottorato?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق النظام الجامعي الإيطالي: الساعات المعتمدة (CFU)، الليسانس، والماجستير والدكتوراه؟",
            solutionEn: "The Italian university framework follows the Bologna Process: Laurea Triennale (180 CFU), Laurea Magistrale (120 CFU), and Dottorato di Ricerca.",
            solutionAr: "يعتمد التعليم العالي الإيطالي مسار بولونيا الأوروبي: الليسانس (180 ساعة معتمدة)، الماجستير (120 ساعة)، والدكتوراه البحثية."
          }
        },
        worksheet: {
          id: 'egbac_it_ch1_l2_ws',
          titleEn: "Worksheet: Proposizioni Concessive con il Congiuntivo & Comunicazione Istituzionale",
          titleAr: "ورقة عمل: الجمل الاستدراكية مع صيغة الشك (benché, sebbene) والمراسلات المؤسسية",
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
    databank: egBacItalianCh1Databank,
    solvedExamples: egBacItalianCh1SolvedExamples,
    exerciseProblems: egBacItalianCh1Exercises
  },
  {
    id: 'egbac_it_ch2',
    chapterNumber: 2,
    titleEn: "Unità 2: Arte Rinascimentale, Patrimonio UNESCO & La Forma Passiva",
    titleAr: "الوحدة الثانية: فن عصر النهضة، التراث العالمي وصيغة المبني للمجهول",
    descriptionEn: "Italian Renaissance masters (Leonardo, Michelangelo, Brunelleschi), historical conservation, UNESCO sites, and advanced passive voice (venire, andare, si passivante).",
    descriptionAr: "رواد عصر النهضة الإيطالية، العمارة والتراث العالمي لليونسكو في إيطاليا، وصيغ المبني للمجهول المتقدمة (استخدام venire و andare و si passivante).",
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
        id: 'egbac_it_ch2_l1',
        titleEn: "Maestri del Rinascimento & Forma Passiva con venire",
        titleAr: "عباقرة عصر النهضة وصيغة المبني للمجهول باستخدام الفعل venire",
        summaryEn: "Florentine Renaissance masters, anatomical realism in art, and passive voice in simple tenses with venire (viene dipinto).",
        summaryAr: "رواد عصر النهضة الفلورنسية، الواقعية التشريحية في الفن، وصيغة المبني للمجهول الحركي باستخدام الفعل venire.",
        theoryContentEn: "### 1. Il Rinascimento Italiano: Umanesimo, Prospettiva e Maestri dell’Arte\n- **Core Rule:** The Italian Renaissance celebrated human dignity, mathematical perspective in painting, and a rebirth of classical Greco-Roman ideals.\n- **Syntactic Structure:** Florentine masters such as Brunelleschi, Botticelli, Leonardo da Vinci, and Michelangelo transformed Western art and architecture.\n- **Analytical Perspective:** Analyzing the anatomical realism and chiaroscuro in Leonardo’s works demonstrates the integration of empirical science and artistic expression.\n\n### 2. La Forma Passiva con il Verbo Venire (Nei Tempi Semplici)\n- **Linguistic Principle:** In Italian simple tenses, the auxiliary \"venire\" can replace \"essere\" to construct the passive voice (Il quadro viene restaurato).\n- **Grammar Application:** Venire emphasizes the ongoing execution of an action and is strictly restricted to simple tenses, never compound tenses.\n- **Advanced Context:** Contrasting \"viene dipinto\" (passive process) with \"è dipinto\" (state resulting from an action) sharpens grammatical precision.\n\n### 3. La Forma Passiva di Necessità con il Verbo Andare\n- **Communicative Function:** The verb \"andare\" plus past participle expresses necessity or obligation in passive constructions (I beni storici vanno protetti).\n- **Usage Matrix:** This construction implies that an action must be done according to ethical duty, social responsibility, or legal statutory requirements.\n- **Exam Strategy:** Distinguishing between the active motion meaning of andare and its passive deontic modal function is a critical advanced skill.",
        theoryContentAr: "### ١. عصر النهضة الإيطالي: النزعة الإنسانية، المنظور الهندسي ورواد الفن\n- **القاعدة الأساسية:** احتفى عصر النهضة الإيطالي بالكرامة الإنسانية، وقواعد المنظور الهندسي في الرسم، وإحياء التراث الكلاسيكي الإغريقي والروماني.\n- **التركيب النحوي:** أحدث عباقرة فلورنسا (برونليسكي، بوتيتشيلي، ليوناردو دافنشي، ومايكل أنجلو) ثورة تاريخية في الفنون والعمارة الغربية.\n- **التحليل المتقدم:** يبرهن تحليل التشريح الدقيق وتوزيع الضوء والظلال في لوحات دافنشي على تلاحم المنهج العلمي التجريبي مع الإبداع التشكيلي.\n\n### ٢. صيغة المبني للمجهول باستخدام الفعل المساعد venire في الأزمنة البسيطة\n- **المبدأ اللغوي:** في الأزمنة البسيطة، يمكن استخدام الفعل المساعد venire بدلاً من essere لصياغة المبني للمجهول (اللوحة يتم ترميمها).\n- **التطبيق الإعرابي:** يركز الفعل venire على استمرارية وديناميكية وقوع الفعل، ويقتصر استخدامه حصراً على الأزمنة البسيطة دون المركبة.\n- **السياق النموذجي:** يميز الفحص النحوي بين viene dipinto (المبني للمجهول الدال على حدوث الفعل) و è dipinto (الوصف الدال على الحالة الناتجة).\n\n### ٣. صيغة المبني للمجهول الدالة على الوجوب والضرورة مع الفعل andare\n- **الوظيفة التواصلية:** يعبر الفعل andare متبوعاً باسم المفعول عن معنى الوجوب والضرورة الحتمية في صيغة المجهول (الآثار التاريخية يجب حمايتها).\n- **مصفوفة الاستخدام:** تفيد هذه الصياغة وجوب أداء الفعل كواجب أخلاقي أو مسؤولية مجتمعية أو التزام قانوني صريح لحفظ النظام العام.\n- **استراتيجية الامتحان:** يعد التمييز بين المعنى الحركي الأصلي لفعل andare ووظيفته المساعدة الدالة على الوجوب الأخلاقي معياراً لغزوات الفهم المتقدم.",
        formulas: [
          {
            labelEn: "Il Rinascimento Italiano: Umanesimo, Prospettiva e Maestri dell’Arte",
            labelAr: "عصر النهضة الإيطالي: النزعة الإنسانية، المنظور الهندسي ورواد الفن",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "La Forma Passiva con il Verbo Venire (Nei Tempi Semplici)",
            labelAr: "صيغة المبني للمجهول باستخدام الفعل المساعد venire في الأزمنة البسيطة",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "La Forma Passiva di Necessità con il Verbo Andare",
            labelAr: "صيغة المبني للمجهول الدالة على الوجوب والضرورة مع الفعل andare",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Advanced Italian Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في اللغة الإيطالية المتقدمة والدراسات الثقافية',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-IT-CH02-L1',
          pageRange: '1-50'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Maestri del Rinascimento & Forma Passiva con venire",
          titleAr: "خطة الدرس التوجيهية: عباقرة عصر النهضة وصيغة المبني للمجهول باستخدام الفعل venire",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-IT-CH02-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Il Rinascimento Italiano: Umanesimo, Prospettiva e Maestri dell’Arte",
            "Apply grammatical inflections and verb tenses in La Forma Passiva con il Verbo Venire (Nei Tempi Semplici)",
            "Execute communicative everyday situation responses in La Forma Passiva di Necessità con il Verbo Andare"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ عصر النهضة الإيطالي: النزعة الإنسانية، المنظور الهندسي ورواد الفن",
            "تطبيق تصريفات الأفعال والضمائر لـ صيغة المبني للمجهول باستخدام الفعل المساعد venire في الأزمنة البسيطة",
            "إتقان الردود التداولية في المواقف الحياتية لـ صيغة المبني للمجهول الدالة على الوجوب والضرورة مع الفعل andare"
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
            questionEn: "Which auxiliary and participle ending are required in the context of Il Rinascimento Italiano: Umanesimo, Prospettiva e Maestri dell’Arte?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق عصر النهضة الإيطالي: النزعة الإنسانية، المنظور الهندسي ورواد الفن؟",
            solutionEn: "The Italian Renaissance celebrated human dignity, mathematical perspective in painting, and a rebirth of classical Greco-Roman ideals.",
            solutionAr: "احتفى عصر النهضة الإيطالي بالكرامة الإنسانية، وقواعد المنظور الهندسي في الرسم، وإحياء التراث الكلاسيكي الإغريقي والروماني."
          }
        },
        worksheet: {
          id: 'egbac_it_ch2_l1_ws',
          titleEn: "Worksheet: Maestri del Rinascimento & Forma Passiva con venire",
          titleAr: "ورقة عمل: عباقرة عصر النهضة وصيغة المبني للمجهول باستخدام الفعل venire",
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
        id: 'egbac_it_ch2_l2',
        titleEn: "Patrimonio UNESCO & Forma Passiva di Necessità con andare",
        titleAr: "حماية التراث العالمي لليونسكو والمبني للمجهول الدال على الوجوب (andare)",
        summaryEn: "UNESCO site preservation, architectural stewardship, and deontic passive obligation with andare (vanno tutelati).",
        summaryAr: "صون معالم التراث العالمي، الحفاظ المعماري، وصيغة المبني للمجهول الدالة على الوجوب والضرورة مع الفعل andare.",
        theoryContentEn: "### 1. Il \"Si Passivante\" e le Costruzioni Impersonali nella Saggistica Culturale\n- **Core Rule:** The particle \"si\" combined with a third-person verb forms the passive voice when a specific object follows (In Italia si parlano molti dialetti).\n- **Syntactic Structure:** If the grammatical object is plural, the verb must be plural: \"Si vende una casa\" vs. \"Si vendono case\".\n- **Analytical Perspective:** Differentiating between the purely impersonal \"si\" (si vive bene) and the passivating \"si\" (si leggono libri) refines syntactic control.\n\n### 2. La Tutela del Patrimonio UNESCO e la Conservazione dei Beni Culturali\n- **Linguistic Principle:** Italy holds the highest number of UNESCO World Heritage Sites globally, encompassing ancient Roman and Renaissance monuments.\n- **Grammar Application:** Preservation bodies apply scientific restoration techniques, strict tourist zoning, and environmental monitoring to historical assets.\n- **Advanced Context:** Debating economic tourism revenue versus long-term conservation challenges highlights the complexities of heritage stewardship.\n\n### 3. Il Superlativo Assoluto e le Forme Elative Speciali (-issimo, arci-, stra-)\n- **Communicative Function:** The absolute superlative is formed by adding -issimo/a/i/e to the adjective stem (bellissimo, famosissimo, altissimo).\n- **Usage Matrix:** Prefixes such as arci- (arcifamoso), stra- (straricco), and ultra- (ultramoderno) intensify adjectives emphatically.\n- **Exam Strategy:** Special irregular superlatives (ottimo for buono, pessimo for cattivo, massimo for grande) demonstrate rich Latinate continuity.",
        theoryContentAr: "### ١. صيغة \"Si Passivante\" والتركيب غير الشخصي في الدراسات الثقافية\n- **القاعدة الأساسية:** تكون الأداة si مع الفعل المصرف في الغائب صيغة مبني للمجهول (si passivante) عند وجود مفعول به صريح يتطابق معه الفعل.\n- **التركيب النحوي:** إذا كان المفعول المتأخر جمعاً، وجب جمع الفعل معه: Si vende una casa (مفرد) مقابل Si vendono case (جمع).\n- **التحليل المتقدم:** يضبط التحليل التركيبي الفارق الدقيق بين si غير الشخصية العامة (si vive bene) و si المبنية للمجهول المتبوعة بنائب فاعل.\n\n### ٢. حماية التراث الإنساني لليونسكو وترميم المعالم التاريخية الإيطالية\n- **المبدأ اللغوي:** تحتفظ إيطاليا بأكبر عدد من مواقع التراث العالمي لليونسكو في العالم، والتي تشمل الآثار الرومانية وصروح عصر النهضة.\n- **التطبيق الإعرابي:** تطبق الهيئات الإيطالية تقنيات ترميم علمية دقيقة، وضوابط سياحية صارمة، ومراقبة بيئية لحماية الأصول التاريخية من التدهور.\n- **السياق النموذجي:** يثير التوازن بين عوائد السياحة الاقتصادية وتحديات الصيانة المستدامة قضايا جوهرية في إدارة وحوكمة التراث الثقافي.\n\n### ٣. صيغة المبالغة والتفضيل المطلق واللواحق الخاصة (-issimo, arci-, stra-)\n- **الوظيفة التواصلية:** يصاغ اسم التفضيل المطلق بإضافة اللاحقة issimo/a/i/e إلى جذر الصفة: مثل bellissimo (فائق الجمال) و famosissimo (شهير جداً).\n- **مصفوفة الاستخدام:** تستخدم البوادئ التوكيدية arci- و stra- و ultra- لإفادة المبالغة المطلقة والتكثيف الدلالي في الوصف الأدبي والإعلامي.\n- **استراتيجية الامتحان:** تظهر صيغ التفضيل الشاذة التراثية (ottimo, pessimo, massimo, minimo) العمق اللاتيني الأصيل في بنية اللغة الإيطالية المعاصرة.",
        formulas: [
          {
            labelEn: "Il \"Si Passivante\" e le Costruzioni Impersonali nella Saggistica Culturale",
            labelAr: "صيغة \"Si Passivante\" والتركيب غير الشخصي في الدراسات الثقافية",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "La Tutela del Patrimonio UNESCO e la Conservazione dei Beni Culturali",
            labelAr: "حماية التراث الإنساني لليونسكو وترميم المعالم التاريخية الإيطالية",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Il Superlativo Assoluto e le Forme Elative Speciali (-issimo, arci-, stra-)",
            labelAr: "صيغة المبالغة والتفضيل المطلق واللواحق الخاصة (-issimo, arci-, stra-)",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Advanced Italian Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في اللغة الإيطالية المتقدمة والدراسات الثقافية',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-IT-CH02-L2',
          pageRange: '51-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Patrimonio UNESCO & Forma Passiva di Necessità con andare",
          titleAr: "خطة الدرس التوجيهية: حماية التراث العالمي لليونسكو والمبني للمجهول الدال على الوجوب (andare)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-IT-CH02-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Il \"Si Passivante\" e le Costruzioni Impersonali nella Saggistica Culturale",
            "Apply grammatical inflections and verb tenses in La Tutela del Patrimonio UNESCO e la Conservazione dei Beni Culturali",
            "Execute communicative everyday situation responses in Il Superlativo Assoluto e le Forme Elative Speciali (-issimo, arci-, stra-)"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ صيغة \"Si Passivante\" والتركيب غير الشخصي في الدراسات الثقافية",
            "تطبيق تصريفات الأفعال والضمائر لـ حماية التراث الإنساني لليونسكو وترميم المعالم التاريخية الإيطالية",
            "إتقان الردود التداولية في المواقف الحياتية لـ صيغة المبالغة والتفضيل المطلق واللواحق الخاصة (-issimo, arci-, stra-)"
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
            questionEn: "Which auxiliary and participle ending are required in the context of Il \"Si Passivante\" e le Costruzioni Impersonali nella Saggistica Culturale?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق صيغة \"Si Passivante\" والتركيب غير الشخصي في الدراسات الثقافية؟",
            solutionEn: "The particle \"si\" combined with a third-person verb forms the passive voice when a specific object follows (In Italia si parlano molti dialetti).",
            solutionAr: "تكون الأداة si مع الفعل المصرف في الغائب صيغة مبني للمجهول (si passivante) عند وجود مفعول به صريح يتطابق معه الفعل."
          }
        },
        worksheet: {
          id: 'egbac_it_ch2_l2_ws',
          titleEn: "Worksheet: Patrimonio UNESCO & Forma Passiva di Necessità con andare",
          titleAr: "ورقة عمل: حماية التراث العالمي لليونسكو والمبني للمجهول الدال على الوجوب (andare)",
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
    databank: egBacItalianCh2Databank,
    solvedExamples: egBacItalianCh2SolvedExamples,
    exerciseProblems: egBacItalianCh2Exercises
  },
  {
    id: 'egbac_it_ch3',
    chapterNumber: 3,
    titleEn: "Unità 3: Letteratura, Cinema Neorealista & Il Modo Congiuntivo",
    titleAr: "الوحدة الثالثة: الأدب والسينما الواقعية وزمن الشك والرجاء (Congiuntivo)",
    descriptionEn: "Italian literary heritage (Dante, Boccaccio, Calvino), Post-War Neorealist cinema (Rossellini, De Sica, Fellini), and the Subjunctive mood (Congiuntivo presente e passato).",
    descriptionAr: "روائع الأدب الإيطالي، سينما الواقعية الجديدة (روسيلليني، دي سيكا، فيلليني)، وتراكيب صيغة الشك والرأي والرجاء (Congiuntivo presente e passato).",
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
        id: 'egbac_it_ch3_l1',
        titleEn: "Classici della Letteratura (Dante, Boccaccio) & Cinema Neorealista",
        titleAr: "كلاسيكيات الأدب الإيطالي (دانتي وبوكاتشيو) وروائع الواقعية الجديدة",
        summaryEn: "Dante's Divine Comedy, Boccaccio's Decameron, and Post-War cinematic neorealism (Rossellini, De Sica).",
        summaryAr: "الكوميديا الإلهية لدانتي، وروايات بوكاتشيو، وجماليات السينما الواقعية الإيطالية الجديدة لروسيلليني ودي سيكا.",
        theoryContentEn: "### 1. La Tradizione Letteraria Italiana: Dante, Petrarca e Boccaccio (Le Tre Corone)\n- **Core Rule:** Italian literature was founded by the \"Three Crowns\" of fourteenth-century Florence: Dante Alighieri, Francesco Petrarca, and Giovanni Boccaccio.\n- **Syntactic Structure:** Dante’s Divina Commedia legitimized the vernacular Florentine dialect as a noble literary language capable of expressing profound theology and humanism.\n- **Analytical Perspective:** Analyzing Petrarca’s lyric introspections and Boccaccio’s Decameron illustrates the secular shift toward early humanistic realism.\n\n### 2. Il Cinema Neorealista Italiano: Rossellini, De Sica e la Verità della Strada\n- **Linguistic Principle:** Italian Neorealism (1943–1952) revolutionized international cinema through on-location shooting, non-professional actors, and post-war social reality.\n- **Grammar Application:** Masterpieces like \"Roma città aperta\" (Rossellini) and \"Ladri di biciclette\" (De Sica) captured working-class struggles and moral resilience.\n- **Advanced Context:** Evaluating neorealist film aesthetics reveals a rejection of artificial Hollywood studio sets in favor of unvarnished historical documentary truth.\n\n### 3. Il Modo Congiuntivo Presente: Espressione di Opinione, Dubbio e Speranza\n- **Communicative Function:** The subjunctive mood expresses subjective attitudes: opinions (penso che), doubts (dubito che), and wishes (spero che).\n- **Usage Matrix:** Regular present subjunctive endings invert the indicative vowels: -are verbs take -i, while -ere and -ire verbs take -a across singular persons.\n- **Exam Strategy:** Trigger verbs requiring the subjunctive must be rigorously distinguished from certainty verbs (so che, è certo che) which take the indicative.",
        theoryContentAr: "### ١. التراث الأدبي الإيطالي: التيجان الثلاثة (دانتي، بتراركا، وبوكاتشيو)\n- **القاعدة الأساسية:** تأسس الأدب الإيطالي الكلاسيكي على يد \"التيجان الثلاثة\" في فلورنسا القرن الرابع عشر: دانتي، بتراركا، وبوكاتشيو.\n- **التركيب النحوي:** رسخت \"الكوميديا الإلهية\" لدانتي اللهجة الفلورنسية كلغة أدبية نبيلة قادرة على صياغة أدق المفاهيم الفلسفية والإنسانية.\n- **التحليل المتقدم:** يبرهن فحص قصائد بتراركا الوجدانية وروايات \"الديكاميرون\" لبوكاتشيو على التحول العلماني نحو النزعة الإنسانية والواقعية الأدبية.\n\n### ٢. سينما الواقعية الإيطالية الجديدة: روسيلليني، دي سيكا، وجماليات الشارع\n- **المبدأ اللغوي:** أحدثت الواقعية الجديدة ثورة عالمية في السينما بالتصوير في الشوارع الحقيقية، والاستعانة بممثلين غير محترفين، وتجسيد واقع ما بعد الحرب.\n- **التطبيق الإعرابي:** جسدت روائع السينما مثل \"روما مدينة مفتوحة\" و \"سارق الدراجة\" معاناة الطبقات الكادحة، والكرامة الإنسانية وسط الدمار.\n- **السياق النموذجي:** يكشف تحليل جماليات الواقعية الإيطالية عن رفض الديكورات المصطنعة لاستوديوهات هوليوود لصالح الحقيقة التوثيقية الصادقة للإنسان.\n\n### ٣. صيغة الشك والرجاء في المضارع (Congiuntivo Presente): التعبير عن الرأي والظن\n- **الوظيفة التواصلية:** تستخدم صيغة Congiuntivo للتعبير عن المشاعر الذاتية غير المؤكدة: الرأي الشخصي (penso che)، الشك (dubito che)، والرجاء (spero che).\n- **مصفوفة الاستخدام:** تعكس نهايات Congiuntivo الحروف المتحركة المعتادة: فأفعال المجموعة الأولى تأخذ -i للمفرد، وأفعال الثانية والثالثة تأخذ -a.\n- **استراتيجية الامتحان:** يجب التمييز الدقيق بين أفعال الظن والشك الملزمة للـ Congiuntivo وأفعال اليقين والقطع (so che, sono sicuro che) التي تأخذ Indicativo.",
        formulas: [
          {
            labelEn: "La Tradizione Letteraria Italiana: Dante, Petrarca e Boccaccio (Le Tre Corone)",
            labelAr: "التراث الأدبي الإيطالي: التيجان الثلاثة (دانتي، بتراركا، وبوكاتشيو)",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "Il Cinema Neorealista Italiano: Rossellini, De Sica e la Verità della Strada",
            labelAr: "سينما الواقعية الإيطالية الجديدة: روسيلليني، دي سيكا، وجماليات الشارع",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Il Modo Congiuntivo Presente: Espressione di Opinione, Dubbio e Speranza",
            labelAr: "صيغة الشك والرجاء في المضارع (Congiuntivo Presente): التعبير عن الرأي والظن",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Advanced Italian Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في اللغة الإيطالية المتقدمة والدراسات الثقافية',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-IT-CH03-L1',
          pageRange: '1-50'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Classici della Letteratura (Dante, Boccaccio) & Cinema Neorealista",
          titleAr: "خطة الدرس التوجيهية: كلاسيكيات الأدب الإيطالي (دانتي وبوكاتشيو) وروائع الواقعية الجديدة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-IT-CH03-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of La Tradizione Letteraria Italiana: Dante, Petrarca e Boccaccio (Le Tre Corone)",
            "Apply grammatical inflections and verb tenses in Il Cinema Neorealista Italiano: Rossellini, De Sica e la Verità della Strada",
            "Execute communicative everyday situation responses in Il Modo Congiuntivo Presente: Espressione di Opinione, Dubbio e Speranza"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ التراث الأدبي الإيطالي: التيجان الثلاثة (دانتي، بتراركا، وبوكاتشيو)",
            "تطبيق تصريفات الأفعال والضمائر لـ سينما الواقعية الإيطالية الجديدة: روسيلليني، دي سيكا، وجماليات الشارع",
            "إتقان الردود التداولية في المواقف الحياتية لـ صيغة الشك والرجاء في المضارع (Congiuntivo Presente): التعبير عن الرأي والظن"
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
            questionEn: "Which auxiliary and participle ending are required in the context of La Tradizione Letteraria Italiana: Dante, Petrarca e Boccaccio (Le Tre Corone)?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق التراث الأدبي الإيطالي: التيجان الثلاثة (دانتي، بتراركا، وبوكاتشيو)؟",
            solutionEn: "Italian literature was founded by the \"Three Crowns\" of fourteenth-century Florence: Dante Alighieri, Francesco Petrarca, and Giovanni Boccaccio.",
            solutionAr: "تأسس الأدب الإيطالي الكلاسيكي على يد \"التيجان الثلاثة\" في فلورنسا القرن الرابع عشر: دانتي، بتراركا، وبوكاتشيو."
          }
        },
        worksheet: {
          id: 'egbac_it_ch3_l1_ws',
          titleEn: "Worksheet: Classici della Letteratura (Dante, Boccaccio) & Cinema Neorealista",
          titleAr: "ورقة عمل: كلاسيكيات الأدب الإيطالي (دانتي وبوكاتشيو) وروائع الواقعية الجديدة",
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
        id: 'egbac_it_ch3_l2',
        titleEn: "Il Modo Congiuntivo Presente e Passato: Opinione, Dubbio e Speranza",
        titleAr: "صيغة الشك والرجاء في الحاضر والماضي: الرأي والظن والتوافق النحوي",
        summaryEn: "Subjective subjunctive mood trigger verbs (credo che, spero che, dubito che) in present and past forms.",
        summaryAr: "أفعال ومحددات صيغة الشك والرجاء (Congiuntivo presente e passato) للتعبير عن الرأي، الظن، والتمني.",
        theoryContentEn: "### 1. Il Congiuntivo Passato e la Concordanza del Modo Soggettivo\n- **Core Rule:** The Congiuntivo Passato is formed with the present subjunctive of essere or avere plus the past participle (credo che sia arrivato, spero che tu abbia studiato).\n- **Syntactic Structure:** It expresses a subjective anterior action that preceded a present main clause (Penso che Maria abbia capito la lezione).\n- **Analytical Perspective:** Mastering auxiliary choice and participle agreement under subjunctive subordination is a quintessential collegiate benchmark.\n\n### 2. Il Periodo Ipotetico del 1° e 2° Tipo (Della Realtà e della Possibilità)\n- **Linguistic Principle:** The 1st type conditional expresses certainty (Se piove, non esco); the 2nd type expresses possibility (Se vincessi, viaggerei).\n- **Grammar Application:** The 2nd type combines the imperfect subjunctive in the if-clause with the present conditional in the consequence (Se studiassi, passeresti).\n- **Advanced Context:** Analyzing rhetorical hypotheses in modern Italian essays demonstrates sophisticated argumentative modulation and persuasion.\n\n### 3. L’Evoluzione della Lingua Italiana dal Latino ai Giorni Nostri\n- **Communicative Function:** Italian evolved directly from Vulgar Latin spoken across the peninsula, shaped by medieval poets and the Accademia della Crusca.\n- **Usage Matrix:** National political unification in 1861, television, and compulsory schooling catalyzed the widespread adoption of standard Italian.\n- **Exam Strategy:** Evaluating the contemporary influence of anglicisms versus classical Italian lexical preservation sparks lively linguistic debates.",
        theoryContentAr: "### ١. صيغة الشك في الماضي (Congiuntivo Passato) وقواعد التوافق النحوي\n- **القاعدة الأساسية:** يتركب Congiuntivo Passato من تصريف essere أو avere في مضارع الشك متبوعاً باسم المفعول (أعتقد أنه وصل: credo che sia arrivato).\n- **التركيب النحوي:** يعبر عن حدث ماضٍ أسبق يخضع لحكم أو ظن شخصي في الحاضر (أعتقد أن ماريا قد فهمت الدرس جيداً).\n- **التحليل المتقدم:** يمثل ضبط اختيار الفعل المساعد وتطابق اسم المفعول في جمل الشك المعقدة معياراً جامعياً رفيعاً للإتقان اللغوي.\n\n### ٢. الجملة الشرطية من النوع الأول والثاني (شرط الإمكان والواقعية مقابل الاحتمال)\n- **المبدأ اللغوي:** تعبر الشرطية الأولى عن واقع مؤكد (إذا أمطرت فلن أخرج)، بينما تعبر الشرطية الثانية عن إمكانية مفترضة (لو فزت لسافرت).\n- **التطبيق الإعرابي:** تجمع الشرطية الثانية بين Congiuntivo Imperfetto في جملة فعل الشرط و Condizionale Presente في جملة جواب الشرط.\n- **السياق النموذجي:** يبرهن استخدام الفرضيات الشرطية في المقالات الإيطالية على قدرة المتحدث على المناورة الإقناعية والتحليل الفكري الرصين.\n\n### ٣. التطور التاريخي للغة الإيطالية من اللاتينية حتى العصر الحاضر\n- **الوظيفة التواصلية:** نشأت اللغة الإيطالية مباشرة من اللاتينية الشعبية المحكية، وتطورت بفضل شعراء العصر الوسيط ومجمع كروشكا اللغوي.\n- **مصفوفة الاستخدام:** ساهمت الوحدة السياسية عام 1861، والإعلام المسموع والمرئي، والتعليم الإلزامي في تعميم الإيطالية الفصحى على حساب اللهجات المحلية.\n- **استراتيجية الامتحان:** يثير التفاعل المعاصر بين الكلمات المستعارة من الإنجليزية وضوابط الحفاظ على الهوية المعجمية الإيطالية نقاشات لغوية واعدة.",
        formulas: [
          {
            labelEn: "Il Congiuntivo Passato e la Concordanza del Modo Soggettivo",
            labelAr: "صيغة الشك في الماضي (Congiuntivo Passato) وقواعد التوافق النحوي",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "Il Periodo Ipotetico del 1° e 2° Tipo (Della Realtà e della Possibilità)",
            labelAr: "الجملة الشرطية من النوع الأول والثاني (شرط الإمكان والواقعية مقابل الاحتمال)",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "L’Evoluzione della Lingua Italiana dal Latino ai Giorni Nostri",
            labelAr: "التطور التاريخي للغة الإيطالية من اللاتينية حتى العصر الحاضر",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Advanced Italian Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في اللغة الإيطالية المتقدمة والدراسات الثقافية',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-IT-CH03-L2',
          pageRange: '51-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Il Modo Congiuntivo Presente e Passato: Opinione, Dubbio e Speranza",
          titleAr: "خطة الدرس التوجيهية: صيغة الشك والرجاء في الحاضر والماضي: الرأي والظن والتوافق النحوي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-IT-CH03-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Il Congiuntivo Passato e la Concordanza del Modo Soggettivo",
            "Apply grammatical inflections and verb tenses in Il Periodo Ipotetico del 1° e 2° Tipo (Della Realtà e della Possibilità)",
            "Execute communicative everyday situation responses in L’Evoluzione della Lingua Italiana dal Latino ai Giorni Nostri"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ صيغة الشك في الماضي (Congiuntivo Passato) وقواعد التوافق النحوي",
            "تطبيق تصريفات الأفعال والضمائر لـ الجملة الشرطية من النوع الأول والثاني (شرط الإمكان والواقعية مقابل الاحتمال)",
            "إتقان الردود التداولية في المواقف الحياتية لـ التطور التاريخي للغة الإيطالية من اللاتينية حتى العصر الحاضر"
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
            questionEn: "Which auxiliary and participle ending are required in the context of Il Congiuntivo Passato e la Concordanza del Modo Soggettivo?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق صيغة الشك في الماضي (Congiuntivo Passato) وقواعد التوافق النحوي؟",
            solutionEn: "The Congiuntivo Passato is formed with the present subjunctive of essere or avere plus the past participle (credo che sia arrivato, spero che tu abbia studiato).",
            solutionAr: "يتركب Congiuntivo Passato من تصريف essere أو avere في مضارع الشك متبوعاً باسم المفعول (أعتقد أنه وصل: credo che sia arrivato)."
          }
        },
        worksheet: {
          id: 'egbac_it_ch3_l2_ws',
          titleEn: "Worksheet: Il Modo Congiuntivo Presente e Passato: Opinione, Dubbio e Speranza",
          titleAr: "ورقة عمل: صيغة الشك والرجاء في الحاضر والماضي: الرأي والظن والتوافق النحوي",
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
    databank: egBacItalianCh3Databank,
    solvedExamples: egBacItalianCh3SolvedExamples,
    exerciseProblems: egBacItalianCh3Exercises
  },
  {
    id: 'egbac_it_ch4',
    chapterNumber: 4,
    titleEn: "Unità 4: Made in Italy, Economia Circolare & Il Periodo Ipotetico",
    titleAr: "الوحدة الرابعة: علامة صنع في إيطاليا، الاقتصاد المستدام والجملة الشرطية",
    descriptionEn: "Made in Italy worldwide excellence (industrial design, automotive, culinary DOP/IGP brands), circular green economy, third-type hypothetical period (dell'irrealtà), and indirect speech.",
    descriptionAr: "العلامة العالمية (صنع في إيطاليا): التصميم الصناعي، الجودة الغذائية، الاقتصاد الدائري، الجملة الشرطية المستحيلة في الماضي، والحديث غير المباشر.",
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
        id: 'egbac_it_ch4_l1',
        titleEn: "Eccellenza del Made in Italy, Distretti Industriali & Certificazioni DOP/IGP",
        titleAr: "ريادة علامة صنع في إيطاليا، التجمعات الصناعية، وجودة الأغذية DOP/IGP",
        summaryEn: "Global impact of Made in Italy design, automotive industry, Slow Food philosophy, and protected geographical indications.",
        summaryAr: "التأثير العالمي للتصميم الصناعي الإيطالي، صناعة السيارات، فلسفة الطعام الصحي، وشهادات المنشأ المحمية DOP/IGP.",
        theoryContentEn: "### 1. L’Eccellenza del \"Made in Italy\": Moda, Design Industriale e Automotive\n- **Core Rule:** Made in Italy represents a global hallmark of aesthetic elegance, artisanal craftsmanship, and technological innovation.\n- **Syntactic Structure:** Sectors of prestige include luxury haute couture (Milano fashion week), interior furniture design, and sports automotive engineering (Ferrari, Lamborghini).\n- **Analytical Perspective:** Analyzing the economic contribution of industrial districts demonstrates how localized SME clusters maintain global competitiveness.\n\n### 2. L’Agroalimentare Italiano, Sostenibilità e Tutela dei Marchi (DOP, IGP, STG)\n- **Linguistic Principle:** Italian agricultural excellence is legally protected by European quality certifications: DOP (Denominazione di Origine Protetta) and IGP.\n- **Grammar Application:** The Slow Food philosophy champions biodiversity, culinary heritage, organic cultivation, and fair economic returns for local farmers.\n- **Advanced Context:** Countering the \"Italian Sounding\" counterfeit market protects intellectual property, consumer health, and export authenticity.\n\n### 3. Il Periodo Ipotetico dell’Irrealtà (3° Tipo nel Passato)\n- **Communicative Function:** The 3rd type conditional expresses impossible past conditions: \"Se fossi andato, mi sarei divertito\" (If I had gone, I would have enjoyed myself).\n- **Usage Matrix:** The structure pairs the past perfect subjunctive in the hypothetical protasis with the past conditional in the apodosis (Se avessi studiato, avrei superato).\n- **Exam Strategy:** Analyzing counterfactual historical and literary statements equips students with nuanced tools for regret and analytical contemplation.",
        theoryContentAr: "### ١. ريادة علامة \"صنع في إيطاليا\": الموضة العالمية، التصميم الصناعي والسيارات\n- **القاعدة الأساسية:** تمثل علامة \"صنع في إيطاليا\" معياراً عالمياً للأناقة الجمالية، الحرفية اليدوية الرفيعة، والابتكار التكنولوجي المتطور.\n- **التركيب النحوي:** تشمل القطاعات الرائدة: دور الأزياء الراقية (أسبوع الموضة بميلانو)، تصميم الأثاث المعاصر، وهندسة السيارات الرياضية الفاخرة.\n- **التحليل المتقدم:** يبرهن تحليل التجمعات الصناعية المتخصصة على قدرة الشركات الإيطالية الصغيرة والمتوسطة على قيادة التنافسية العالمية.\n\n### ٢. الصناعات الغذائية الإيطالية، الاستدامة، وحماية علامات الجودة (DOP, IGP)\n- **المبدأ اللغوي:** تحظى المنتجات الغذائية الإيطالية بحماية تشريعية أوروبية صارمة عبر علامات الجودة: DOP (تسمية المنشأ المحمية) و IGP.\n- **التطبيق الإعرابي:** تدعو حركة \"سلو فود\" العالمية إلى صون التنوع البيولوجي الزراعي، التراث الغذائي، والزراعة العضوية النظيفة والعادلة.\n- **السياق النموذجي:** تسهم مكافحة التقليد التجاري للسلع الإيطالية في حماية الملكية الفكرية، صحة المستهلك، ومصداقية سلاسل التوريد العالمية.\n\n### ٣. الجملة الشرطية المستحيلة في الماضي (النوع الثالث من أسلوب الشرط)\n- **الوظيفة التواصلية:** تعبر الشرطية المستحيلة في الماضي عن حدث لم يتحقق: Se + Congiuntivo Trapassato في الشرط، و Condizionale Composto في الجواب.\n- **مصفوفة الاستخدام:** يتركب الأسلوب من ماضي الشك التام (avessi fatto) متبوعاً بمستقبل الماضي أو الشرطي المركب (avrei superato) لبيان فوات الأوان.\n- **استراتيجية الامتحان:** يمكّن تحليل الفرضيات التاريخية والأدبية المضادة للواقع الطلاب من التعبير عن الندم والحسرة والتقييم الاسترجاعي الرصين.",
        formulas: [
          {
            labelEn: "L’Eccellenza del \"Made in Italy\": Moda, Design Industriale e Automotive",
            labelAr: "ريادة علامة \"صنع في إيطاليا\": الموضة العالمية، التصميم الصناعي والسيارات",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "L’Agroalimentare Italiano, Sostenibilità e Tutela dei Marchi (DOP, IGP, STG)",
            labelAr: "الصناعات الغذائية الإيطالية، الاستدامة، وحماية علامات الجودة (DOP, IGP)",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "Il Periodo Ipotetico dell’Irrealtà (3° Tipo nel Passato)",
            labelAr: "الجملة الشرطية المستحيلة في الماضي (النوع الثالث من أسلوب الشرط)",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Advanced Italian Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في اللغة الإيطالية المتقدمة والدراسات الثقافية',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-IT-CH04-L1',
          pageRange: '1-50'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Eccellenza del Made in Italy, Distretti Industriali & Certificazioni DOP/IGP",
          titleAr: "خطة الدرس التوجيهية: ريادة علامة صنع في إيطاليا، التجمعات الصناعية، وجودة الأغذية DOP/IGP",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-IT-CH04-L1',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of L’Eccellenza del \"Made in Italy\": Moda, Design Industriale e Automotive",
            "Apply grammatical inflections and verb tenses in L’Agroalimentare Italiano, Sostenibilità e Tutela dei Marchi (DOP, IGP, STG)",
            "Execute communicative everyday situation responses in Il Periodo Ipotetico dell’Irrealtà (3° Tipo nel Passato)"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ ريادة علامة \"صنع في إيطاليا\": الموضة العالمية، التصميم الصناعي والسيارات",
            "تطبيق تصريفات الأفعال والضمائر لـ الصناعات الغذائية الإيطالية، الاستدامة، وحماية علامات الجودة (DOP, IGP)",
            "إتقان الردود التداولية في المواقف الحياتية لـ الجملة الشرطية المستحيلة في الماضي (النوع الثالث من أسلوب الشرط)"
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
            questionEn: "Which auxiliary and participle ending are required in the context of L’Eccellenza del \"Made in Italy\": Moda, Design Industriale e Automotive?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق ريادة علامة \"صنع في إيطاليا\": الموضة العالمية، التصميم الصناعي والسيارات؟",
            solutionEn: "Made in Italy represents a global hallmark of aesthetic elegance, artisanal craftsmanship, and technological innovation.",
            solutionAr: "تمثل علامة \"صنع في إيطاليا\" معياراً عالمياً للأناقة الجمالية، الحرفية اليدوية الرفيعة، والابتكار التكنولوجي المتطور."
          }
        },
        worksheet: {
          id: 'egbac_it_ch4_l1_ws',
          titleEn: "Worksheet: Eccellenza del Made in Italy, Distretti Industriali & Certificazioni DOP/IGP",
          titleAr: "ورقة عمل: ريادة علامة صنع في إيطاليا، التجمعات الصناعية، وجودة الأغذية DOP/IGP",
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
        id: 'egbac_it_ch4_l2',
        titleEn: "Il Periodo Ipotetico dell'Irrealtà (3° Tipo) & il Discorso Indiretto nel Passato",
        titleAr: "الجملة الشرطية المستحيلة في الماضي والحديث المنقول وتوافق الأزمنة",
        summaryEn: "Third-type counterfactual conditionals (Se avessi saputo, sarei venuto) and reported speech tense harmony in the past.",
        summaryAr: "أسلوب الشرط المستحيل في الماضي (النوع الثالث)، والحديث غير المباشر وقواعد التراجع الزمني في الماضي.",
        theoryContentEn: "### 1. Il Discorso Indiretto nel Passato e le Regole di Trasposizione Verbale\n- **Core Rule:** Indirect speech reports statements by shifting tenses back when the introductory verb is in the past (Ha detto che sarebbe venuto).\n- **Syntactic Structure:** Future in the past is expressed by the compound conditional: \"Dice: Verrò\" -> \"Ha detto che sarebbe venuto\".\n- **Analytical Perspective:** Shifts in spatial-temporal deictics (qui -> lì, oggi -> quel giorno, domani -> il giorno seguente) require rigorous communicative adaptation.\n\n### 2. La Transizione Ecologica, Economia Circolare ed Energie Rinnovabili in Italia\n- **Linguistic Principle:** The ecological transition prioritizes renewable solar and wind energy, industrial decarbonization, and urban waste minimization.\n- **Grammar Application:** Italy leads Europe in industrial recycling rates, turning scrap textiles, metals, and plastics into high-value commercial components.\n- **Advanced Context:** Evaluating circular economic strategies balances upfront capital infrastructure investments with intergenerational ecological dividends.\n\n### 3. L’Italia nelle Istituzioni Internazionali, Cooperazione Diplomatica e Unione Europea\n- **Communicative Function:** As a founding member of the European Union (Treaty of Rome, 1957), Italy plays a pivotal role in Euro-Mediterranean diplomacy.\n- **Usage Matrix:** Diplomatic missions champion cultural exchange, peacekeeping operations under UN mandates, and global food security through FAO in Rome.\n- **Exam Strategy:** Synthesizing multilateral diplomatic discourse highlights Italy’s bridging role between European institutions and the Global South.",
        theoryContentAr: "### ١. الحديث غير المباشر في الماضي وقواعد التحويل والتوافق الزمني\n- **القاعدة الأساسية:** ينقل الحديث غير المباشر الأقوال مع تعديل الأزمنة إلى الوراء عندما يكون فعل القول في زمن الماضي (قال إنه سيأتي).\n- **التركيب النحوي:** يُعبر عن مستقبل الماضي وجوباً باستخدام Condizionale Composto: مثل \"قال: سأحضر\" تصبح \"قال إنه كان سيحضر: sarebbe venuto\".\n- **التحليل المتقدم:** تتطلب تحولات المؤشرات الزمانية والمكانية (هنا تصبح هناك، اليوم يصبح ذلك اليوم) دقة استثنائية في الترجمة والنقل الصحفي.\n\n### ٢. التحول البيئي، الاقتصاد الدائري ومصادر الطاقة المتجددة في إيطاليا\n- **المبدأ اللغوي:** يعطي التحول البيئي الأولوية للطاقة الشمسية وطاقة الرياح، خفض الانبعاثات الكربونية، وتصفير الهدر في المدن الذكية.\n- **التطبيق الإعرابي:** تتصدر إيطاليا دول أوروبا في معدلات إعادة التدوير الصناعي للمنسوجات والمعادن والبلاستيك وتحويلها إلى مدخلات إنتاجية ذات قيمة.\n- **السياق النموذجي:** يوازن تقييم الاقتصاد الدائري بين تكاليف الاستثمار في البنية التحتية والمردود البيئي والحضاري للأجيال القادمة.\n\n### ٣. إيطاليا في المنظمات الدولية، التعاون الدبلوماسي والاتحاد الأوروبي\n- **الوظيفة التواصلية:** تعتبر إيطاليا عضواً مؤسساً للاتحاد الأوروبي (معاهدة روما 1957)، وتلعب دوراً محورياً في الدبلوماسية الأورومتوسطية.\n- **مصفوفة الاستخدام:** تدعم الدبلوماسية الإيطالية التبادل الثقافي، مهام حفظ السلام للأمم المتحدة، والأمن الغذائي العالمي عبر منظمة الفاو بروما.\n- **استراتيجية الامتحان:** يبرز تحليل الخطاب الدبلوماسي متعدد الأطراف دور إيطاليا التاريخي كجسر حضاري استراتيجي يربط بين أوروبا والعالم العربي والأفريقي.",
        formulas: [
          {
            labelEn: "Il Discorso Indiretto nel Passato e le Regole di Trasposizione Verbale",
            labelAr: "الحديث غير المباشر في الماضي وقواعد التحويل والتوافق الزمني",
            latex: "\\text{Regola } 1: \\text{Italian Syntax}"
          },
          {
            labelEn: "La Transizione Ecologica, Economia Circolare ed Energie Rinnovabili in Italia",
            labelAr: "التحول البيئي، الاقتصاد الدائري ومصادر الطاقة المتجددة في إيطاليا",
            latex: "\\text{Regola } 2: \\text{Italian Syntax}"
          },
          {
            labelEn: "L’Italia nelle Istituzioni Internazionali, Cooperazione Diplomatica e Unione Europea",
            labelAr: "إيطاليا في المنظمات الدولية، التعاون الدبلوماسي والاتحاد الأوروبي",
            latex: "\\text{Regola } 3: \\text{Italian Syntax}"
          }
        ],
        moeRef: {
          bookTitleEn: 'Egyptian Baccalaureate Advanced Italian Studies',
          bookTitleAr: 'كتاب البكالوريا المصرية في اللغة الإيطالية المتقدمة والدراسات الثقافية',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EGBAC-IT-CH04-L2',
          pageRange: '51-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Il Periodo Ipotetico dell'Irrealtà (3° Tipo) & il Discorso Indiretto nel Passato",
          titleAr: "خطة الدرس التوجيهية: الجملة الشرطية المستحيلة في الماضي والحديث المنقول وتوافق الأزمنة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EGBAC-IT-CH04-L2',
          bloomsObjectivesEn: [
            "Master syntactic and lexical rules of Il Discorso Indiretto nel Passato e le Regole di Trasposizione Verbale",
            "Apply grammatical inflections and verb tenses in La Transizione Ecologica, Economia Circolare ed Energie Rinnovabili in Italia",
            "Execute communicative everyday situation responses in L’Italia nelle Istituzioni Internazionali, Cooperazione Diplomatica e Unione Europea"
          ],
          bloomsObjectivesAr: [
            "استيعاب القواعد النحوية والمعجمية لـ الحديث غير المباشر في الماضي وقواعد التحويل والتوافق الزمني",
            "تطبيق تصريفات الأفعال والضمائر لـ التحول البيئي، الاقتصاد الدائري ومصادر الطاقة المتجددة في إيطاليا",
            "إتقان الردود التداولية في المواقف الحياتية لـ إيطاليا في المنظمات الدولية، التعاون الدبلوماسي والاتحاد الأوروبي"
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
            questionEn: "Which auxiliary and participle ending are required in the context of Il Discorso Indiretto nel Passato e le Regole di Trasposizione Verbale?",
            questionAr: "ما هو التركيب النحوي السليم المعتمد في سياق الحديث غير المباشر في الماضي وقواعد التحويل والتوافق الزمني؟",
            solutionEn: "Indirect speech reports statements by shifting tenses back when the introductory verb is in the past (Ha detto che sarebbe venuto).",
            solutionAr: "ينقل الحديث غير المباشر الأقوال مع تعديل الأزمنة إلى الوراء عندما يكون فعل القول في زمن الماضي (قال إنه سيأتي)."
          }
        },
        worksheet: {
          id: 'egbac_it_ch4_l2_ws',
          titleEn: "Worksheet: Il Periodo Ipotetico dell'Irrealtà (3° Tipo) & il Discorso Indiretto nel Passato",
          titleAr: "ورقة عمل: الجملة الشرطية المستحيلة في الماضي والحديث المنقول وتوافق الأزمنة",
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
    databank: egBacItalianCh4Databank,
    solvedExamples: egBacItalianCh4SolvedExamples,
    exerciseProblems: egBacItalianCh4Exercises
  }
];

export const egBacItalianBranch: Branch = {
  id: 'egbac_italian',
  titleEn: "New Egyptian Baccalaureate: Advanced Academic Italian (Livello B1/B2)",
  titleAr: "البكالوريا المصرية: اللغة الإيطالية المتقدمة والدراسات الثقافية (المستوى B1/B2)",
  categoryEn: "Egyptian Baccalaureate Foreign Language Track",
  categoryAr: "مسار اللغات الأجنبية للبكالوريا المصرية",
  iconName: 'Languages',
  colorGradient: 'from-emerald-600 via-stone-100 to-red-600',
  chapters
};
