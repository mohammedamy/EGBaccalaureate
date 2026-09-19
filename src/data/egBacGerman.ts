import type { Branch, Chapter } from '../types/curriculum';
import { egBacGermanCh1Databank } from './databanks/egbac/egBacGermanCh1Databank';
import { egBacGermanCh2Databank } from './databanks/egbac/egBacGermanCh2Databank';
import { egBacGermanCh3Databank } from './databanks/egbac/egBacGermanCh3Databank';
import { egBacGermanCh4Databank } from './databanks/egbac/egBacGermanCh4Databank';
import { egBacGermanCh1SolvedExamples, egBacGermanCh1Exercises } from './textbook/egbac/egBacGermanCh1Textbook';
import { egBacGermanCh2SolvedExamples, egBacGermanCh2Exercises } from './textbook/egbac/egBacGermanCh2Textbook';
import { egBacGermanCh3SolvedExamples, egBacGermanCh3Exercises } from './textbook/egbac/egBacGermanCh3Textbook';
import { egBacGermanCh4SolvedExamples, egBacGermanCh4Exercises } from './textbook/egbac/egBacGermanCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'egbac_de_ch1',
    chapterNumber: 1,
    titleEn: "Modul 1: Berufsleben, Wissenschaft & Innovation im DACH-Raum",
    titleAr: "الوحدة الأولى: الحياة المهنية، العلوم والابتكار في الفضاء الألماني",
    descriptionEn: "Professional German, CV and cover letter drafting, job interviews, STEM careers and vocational education (Duales System) in Germany, Austria, and Switzerland.",
    descriptionAr: "الألمانية المهنية، كتابة السيرة الذاتية وخطاب التقديم، مقابلات العمل، المهن العلمية والتقنية، والتعليم المزدوج في ألمانيا والنمسا وسويسرا.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'german_grammar_lab',
        titleEn: "Career & Professional German Simulator",
        titleAr: "استوديو الألمانية المهنية والمقابلات الوظيفية",
        descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
        descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_de_ch1_l1',
        titleEn: "Bewerbung, Lebenslauf & Akademische Laufbahnen in Deutschland",
        titleAr: "التقدم للوظائف، السيرة الذاتية والمسارات الأكاديمية في ألمانيا",
        summaryEn: "Academic credentials recognition, structured curriculum vitae (Lebenslauf), motivation letters, and university admission requirements.",
        summaryAr: "معادلة الشهادات الأكاديمية، هيكلة السيرة الذاتية الألمانية، صياغة خطابات التحفيز، ومتطلبات القبول بالجامعات الألمانية.",
        theoryContentEn: "Formal business letter conventions, passive voice in academic texts (Vorgangspassiv: wird + Partizip II).",
        theoryContentAr: "صياغة المراسلات الرسمية واستخدام المبني للمجهول الإجرائي في السياقات الأكاديمية والمهنية.",
        formulas: [
          {
                    "labelEn": "Process Passive Formula",
                    "labelAr": "صيغة المبني للمجهول الإجرائي",
                    "latex": "\\text{werden (konjugiert)} + \\dots + \\text{Partizip II}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-DE-CH01-L1',
          pageRange: '10-35'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Bewerbung, Lebenslauf & Akademische Laufbahnen in Deutschland",
          titleAr: "دليل المعلم التوجيهي: التقدم للوظائف، السيرة الذاتية والمسارات الأكاديمية في ألمانيا",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-DE-CH01-L1',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Bewerbung, Lebenslauf & Akademische Laufbahnen in Deutschland",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ التقدم للوظائف، السيرة الذاتية والمسارات الأكاديمية في ألمانيا",
            'التمييز بين الحالات الإعرابية وصياغة الجمل الألمانية ببراعة',
            'تطبيق استراتيجيات حل أسئلة المواقف اليومية والنصوص التحريرية الرسمية'
          ],
          prerequisitesEn: ['Basic German A1/A2 vocabulary', 'Verb conjugation in present tense', 'Gender of common nouns'],
          prerequisitesAr: ['مفردات المستويين الأول والثاني A1/A2', 'تصريف الأفعال المنتظمة في المضارع', 'معرفة أدوات الأسماء der/das/die'],
          keyVocabularyEn: [
            { term: 'Der Kasus', definition: 'The grammatical case (Nominativ, Akkusativ, Dativ, Genitiv)' },
            { term: 'Das Modalverb', definition: 'Auxiliary verb expressing modality, duty, or permission' }
          ],
          keyVocabularyAr: [
            { term: 'الحالة الإعرابية', definition: 'موقع الاسم النحوي وما يطرأ على أداته من تغيير' },
            { term: 'الفعل الناقص', definition: 'فعل مساعد يحدد صيغة الوجوب أو الاستطاعة أو الإذن' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Warming Up & Situational Hook',
              phaseAr: 'التهيئة واستعراض الموقف التواصلي',
              duration: '15 min',
              activitiesEn: 'Real-world audio dialogue and interactive listening comprehension',
              activitiesAr: 'الاستماع لحوار صوتي تفاعلي ومناقشة الموقف اليومي المستهدف'
            },
            {
              phaseEn: 'Grammar Deconstruction & Syntax Practice',
              phaseAr: 'تفكيك القواعد والتدريب التواصلي',
              duration: '75 min',
              activitiesEn: 'Dative case matrix drills, modal bracket exercises, and databank questions',
              activitiesAr: 'تدريبات على مصفوفة الداتيف وقوس الفعل وحل أسئلة بنك الأسئلة الوزاري'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing dative pronoun mir with accusative mich when using dative verbs like gefallen or wehtun'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين ضمير النصب mich وضمير الجر mir مع أفعال الداتيف مثل gefallen و wehtun'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded article inflection charts and clear English-German cognate bridges.',
            advanced: 'Challenge students with complex two-way prepositions and subordinate clause inversions.'
          },
          differentiationAr: {
            struggling: 'توفير جداول إعرابية ملونة للأدوات وقوائم مبسطة لأفعال وحروف الداتيف.',
            advanced: 'تكليف الطلاب بتحليل جمل الحالات المشتركة وصياغة نصوص حجاجية متقدمة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ checking grammar, lexicon, and dialogue response.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت يقيس القواعد والمفردات والمواقف الحياتية.',
          exitTicketQuestion: {
            questionEn: 'Which case is strictly governed by the preposition "mit" in German, and what does "der Bus" become?',
            questionAr: 'ما هي الحالة الإعرابية التي يفرضها حرف الجر "mit"، وإلى ماذا تتحول أداة الاسم المذكر "der Bus"؟',
            solutionEn: 'The preposition "mit" invariably takes the Dative case; masculine "der" becomes "dem" (mit dem Bus).',
            solutionAr: 'حرف الجر mit يجر الاسم بعده دائماً في حالة الداتيف؛ وتتحول أداة المذكر der إلى dem لتصبح (mit dem Bus).'
          }
        },
        worksheet: {
          id: 'egbac_de_ch1_l1_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_grammar_lab',
          titleEn: 'Career & Professional German Simulator',
          titleAr: 'استوديو الألمانية المهنية والمقابلات الوظيفية',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
      {
        id: 'egbac_de_ch1_l2',
        titleEn: "MINT-Innovationen, Industrie 4.0 & Ingenieurwesen im deutschsprachigen Raum",
        titleAr: "ابتكارات مجالات العلوم والتقنية، الثورة الصناعية 4.0 والهندسة",
        summaryEn: "Technological leadership in mechanical engineering, automotive electrification, dual apprenticeship models, and research institutions (Fraunhofer, Max Planck).",
        summaryAr: "الريادة التقنية في الهندسة الميكانيكية، وصناعة السيارات، ونظام التعليم المزدوج، ومراكز الأبحاث الكبرى (فراونهوفر وماكس بلانك).",
        theoryContentEn: "Nominalization and compound nouns (Komposita), technical prepositional verbs.",
        theoryContentAr: "الاشتقاق الاسمي وتركيب الكلمات المعقدة (Komposita) والأفعال المرتبطة بحروف جر تخصصية.",
        formulas: [
          {
                    "labelEn": "Compound Noun Gender Rule",
                    "labelAr": "تحديد أداة الاسم المركب بالكلمة الأخيرة",
                    "latex": "\\text{Genus von } (\\text{Wort}_1 + \\text{Wort}_2) = \\text{Genus von Wort}_2"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-DE-CH01-L2',
          pageRange: '10-35'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: MINT-Innovationen, Industrie 4.0 & Ingenieurwesen im deutschsprachigen Raum",
          titleAr: "دليل المعلم التوجيهي: ابتكارات مجالات العلوم والتقنية، الثورة الصناعية 4.0 والهندسة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-DE-CH01-L2',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of MINT-Innovationen, Industrie 4.0 & Ingenieurwesen im deutschsprachigen Raum",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ ابتكارات مجالات العلوم والتقنية، الثورة الصناعية 4.0 والهندسة",
            'التمييز بين الحالات الإعرابية وصياغة الجمل الألمانية ببراعة',
            'تطبيق استراتيجيات حل أسئلة المواقف اليومية والنصوص التحريرية الرسمية'
          ],
          prerequisitesEn: ['Basic German A1/A2 vocabulary', 'Verb conjugation in present tense', 'Gender of common nouns'],
          prerequisitesAr: ['مفردات المستويين الأول والثاني A1/A2', 'تصريف الأفعال المنتظمة في المضارع', 'معرفة أدوات الأسماء der/das/die'],
          keyVocabularyEn: [
            { term: 'Der Kasus', definition: 'The grammatical case (Nominativ, Akkusativ, Dativ, Genitiv)' },
            { term: 'Das Modalverb', definition: 'Auxiliary verb expressing modality, duty, or permission' }
          ],
          keyVocabularyAr: [
            { term: 'الحالة الإعرابية', definition: 'موقع الاسم النحوي وما يطرأ على أداته من تغيير' },
            { term: 'الفعل الناقص', definition: 'فعل مساعد يحدد صيغة الوجوب أو الاستطاعة أو الإذن' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Warming Up & Situational Hook',
              phaseAr: 'التهيئة واستعراض الموقف التواصلي',
              duration: '15 min',
              activitiesEn: 'Real-world audio dialogue and interactive listening comprehension',
              activitiesAr: 'الاستماع لحوار صوتي تفاعلي ومناقشة الموقف اليومي المستهدف'
            },
            {
              phaseEn: 'Grammar Deconstruction & Syntax Practice',
              phaseAr: 'تفكيك القواعد والتدريب التواصلي',
              duration: '75 min',
              activitiesEn: 'Dative case matrix drills, modal bracket exercises, and databank questions',
              activitiesAr: 'تدريبات على مصفوفة الداتيف وقوس الفعل وحل أسئلة بنك الأسئلة الوزاري'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing dative pronoun mir with accusative mich when using dative verbs like gefallen or wehtun'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين ضمير النصب mich وضمير الجر mir مع أفعال الداتيف مثل gefallen و wehtun'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded article inflection charts and clear English-German cognate bridges.',
            advanced: 'Challenge students with complex two-way prepositions and subordinate clause inversions.'
          },
          differentiationAr: {
            struggling: 'توفير جداول إعرابية ملونة للأدوات وقوائم مبسطة لأفعال وحروف الداتيف.',
            advanced: 'تكليف الطلاب بتحليل جمل الحالات المشتركة وصياغة نصوص حجاجية متقدمة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ checking grammar, lexicon, and dialogue response.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت يقيس القواعد والمفردات والمواقف الحياتية.',
          exitTicketQuestion: {
            questionEn: 'Which case is strictly governed by the preposition "mit" in German, and what does "der Bus" become?',
            questionAr: 'ما هي الحالة الإعرابية التي يفرضها حرف الجر "mit"، وإلى ماذا تتحول أداة الاسم المذكر "der Bus"؟',
            solutionEn: 'The preposition "mit" invariably takes the Dative case; masculine "der" becomes "dem" (mit dem Bus).',
            solutionAr: 'حرف الجر mit يجر الاسم بعده دائماً في حالة الداتيف؛ وتتحول أداة المذكر der إلى dem لتصبح (mit dem Bus).'
          }
        },
        worksheet: {
          id: 'egbac_de_ch1_l2_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_grammar_lab',
          titleEn: 'Career & Professional German Simulator',
          titleAr: 'استوديو الألمانية المهنية والمقابلات الوظيفية',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
    ],
    solvedExamples: egBacGermanCh1SolvedExamples,
    exerciseProblems: egBacGermanCh1Exercises,
    databank: egBacGermanCh1Databank
  },
  {
    id: 'egbac_de_ch2',
    chapterNumber: 2,
    titleEn: "Modul 2: Deutsche Literatur, Kulturgeschichte & Philosophie",
    titleAr: "الوحدة الثانية: الأدب، الثقافة والفلسفة الألمانية",
    descriptionEn: "Major literary eras from Weimar Classicism to contemporary prose (Goethe, Schiller, Kafka, Thomas Mann), philosophical inquiries (Kant, Nietzsche, Habermas), and textual deconstruction.",
    descriptionAr: "المدارس الأدبية الألمانية الكبرى من كلاسيكية فايمار إلى الأدب المعاصر، التراث الفلسفي من كانط إلى هابرماس، والتحليل النقدي للنصوص.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'german_audio_lab',
        titleEn: "German Literary Text & Critical Analysis Studio",
        titleAr: "استوديو نصوص الأدب والنقد الفكري الألماني",
        descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
        descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_de_ch2_l1',
        titleEn: "Meisterwerke der deutschen Klassik und Moderne (Goethe, Schiller, Kafka)",
        titleAr: "روائع الكلاسيكية والحداثة الألمانية (غوته، شيلر، كافكا)",
        summaryEn: "Thematic analysis of Faust, aesthetic education in Schiller, alienated modern bureaucracy in Kafka’s The Metamorphosis, and stylistics.",
        summaryAr: "التحليل الموضوعي لمسرحية فاوست، وفلسفة الفن عند شيلر، واغتراب الإنسان الحديث في رواية التحول لكافكا، والخصائص الأسلوبية.",
        theoryContentEn: "Subjunctive I in indirect discourse (Konjunktiv I: Er behaupte, er sei unschuldig) and literary past tense (Präteritum).",
        theoryContentAr: "صيغة Konjunktiv I لنقل الكلام غير المباشر في النصوص الأدبية والصحفية، وإتقان أزمنة السرد الروائي (Präteritum).",
        formulas: [
          {
                    "labelEn": "Indirect Speech Subjunctive Formula",
                    "labelAr": "صيغة Konjunktiv I لنقل الاقتباسات",
                    "latex": "\\text{Er sagte, er } + \\text{habe / sei / wolle} + \\dots"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-DE-CH02-L1',
          pageRange: '35-60'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Meisterwerke der deutschen Klassik und Moderne (Goethe, Schiller, Kafka)",
          titleAr: "دليل المعلم التوجيهي: روائع الكلاسيكية والحداثة الألمانية (غوته، شيلر، كافكا)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-DE-CH02-L1',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Meisterwerke der deutschen Klassik und Moderne (Goethe, Schiller, Kafka)",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ روائع الكلاسيكية والحداثة الألمانية (غوته، شيلر، كافكا)",
            'التمييز بين الحالات الإعرابية وصياغة الجمل الألمانية ببراعة',
            'تطبيق استراتيجيات حل أسئلة المواقف اليومية والنصوص التحريرية الرسمية'
          ],
          prerequisitesEn: ['Basic German A1/A2 vocabulary', 'Verb conjugation in present tense', 'Gender of common nouns'],
          prerequisitesAr: ['مفردات المستويين الأول والثاني A1/A2', 'تصريف الأفعال المنتظمة في المضارع', 'معرفة أدوات الأسماء der/das/die'],
          keyVocabularyEn: [
            { term: 'Der Kasus', definition: 'The grammatical case (Nominativ, Akkusativ, Dativ, Genitiv)' },
            { term: 'Das Modalverb', definition: 'Auxiliary verb expressing modality, duty, or permission' }
          ],
          keyVocabularyAr: [
            { term: 'الحالة الإعرابية', definition: 'موقع الاسم النحوي وما يطرأ على أداته من تغيير' },
            { term: 'الفعل الناقص', definition: 'فعل مساعد يحدد صيغة الوجوب أو الاستطاعة أو الإذن' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Warming Up & Situational Hook',
              phaseAr: 'التهيئة واستعراض الموقف التواصلي',
              duration: '15 min',
              activitiesEn: 'Real-world audio dialogue and interactive listening comprehension',
              activitiesAr: 'الاستماع لحوار صوتي تفاعلي ومناقشة الموقف اليومي المستهدف'
            },
            {
              phaseEn: 'Grammar Deconstruction & Syntax Practice',
              phaseAr: 'تفكيك القواعد والتدريب التواصلي',
              duration: '75 min',
              activitiesEn: 'Dative case matrix drills, modal bracket exercises, and databank questions',
              activitiesAr: 'تدريبات على مصفوفة الداتيف وقوس الفعل وحل أسئلة بنك الأسئلة الوزاري'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing dative pronoun mir with accusative mich when using dative verbs like gefallen or wehtun'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين ضمير النصب mich وضمير الجر mir مع أفعال الداتيف مثل gefallen و wehtun'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded article inflection charts and clear English-German cognate bridges.',
            advanced: 'Challenge students with complex two-way prepositions and subordinate clause inversions.'
          },
          differentiationAr: {
            struggling: 'توفير جداول إعرابية ملونة للأدوات وقوائم مبسطة لأفعال وحروف الداتيف.',
            advanced: 'تكليف الطلاب بتحليل جمل الحالات المشتركة وصياغة نصوص حجاجية متقدمة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ checking grammar, lexicon, and dialogue response.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت يقيس القواعد والمفردات والمواقف الحياتية.',
          exitTicketQuestion: {
            questionEn: 'Which case is strictly governed by the preposition "mit" in German, and what does "der Bus" become?',
            questionAr: 'ما هي الحالة الإعرابية التي يفرضها حرف الجر "mit"، وإلى ماذا تتحول أداة الاسم المذكر "der Bus"؟',
            solutionEn: 'The preposition "mit" invariably takes the Dative case; masculine "der" becomes "dem" (mit dem Bus).',
            solutionAr: 'حرف الجر mit يجر الاسم بعده دائماً في حالة الداتيف؛ وتتحول أداة المذكر der إلى dem لتصبح (mit dem Bus).'
          }
        },
        worksheet: {
          id: 'egbac_de_ch2_l1_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_audio_lab',
          titleEn: 'German Literary Text & Critical Analysis Studio',
          titleAr: 'استوديو نصوص الأدب والنقد الفكري الألماني',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
      {
        id: 'egbac_de_ch2_l2',
        titleEn: "Philosophiegeschichte: Von der Aufklärung (Kant) bis zur Kritischen Theorie (Habermas)",
        titleAr: "تاريخ الفلسفة: من عصر التنوير (كانط) إلى النظرية النقدية (هابرماس)",
        summaryEn: "Kant’s categorical imperative and public reason, Enlightenment emancipation, communicative rationality in Habermas, and ethical argumentation.",
        summaryAr: "الأمر المطلق والعقلانية عند كانط، التحرر الفكري في عصر التنوير، ونظرية الفعل التواصلي لهابرماس، والحجاج الأخلاقي.",
        theoryContentEn: "Complex causal and concessive connectors (obwohl, indem, damit, sodass), advanced essay writing connectors.",
        theoryContentAr: "الروابط المنطقية المعقدة (obwohl رغم أن، damit لكي، sodass لدرجة أن)، وتراكيب المقال التحليلي الفلسفي.",
        formulas: [
          {
                    "labelEn": "Concessive Clause Word Order",
                    "labelAr": "ترتيب جمل التناقض مع obwohl",
                    "latex": "\\text{obwohl} + \\text{Subjekt} + \\dots + \\text{Verb am Ende}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-DE-CH02-L2',
          pageRange: '35-60'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Philosophiegeschichte: Von der Aufklärung (Kant) bis zur Kritischen Theorie (Habermas)",
          titleAr: "دليل المعلم التوجيهي: تاريخ الفلسفة: من عصر التنوير (كانط) إلى النظرية النقدية (هابرماس)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-DE-CH02-L2',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Philosophiegeschichte: Von der Aufklärung (Kant) bis zur Kritischen Theorie (Habermas)",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ تاريخ الفلسفة: من عصر التنوير (كانط) إلى النظرية النقدية (هابرماس)",
            'التمييز بين الحالات الإعرابية وصياغة الجمل الألمانية ببراعة',
            'تطبيق استراتيجيات حل أسئلة المواقف اليومية والنصوص التحريرية الرسمية'
          ],
          prerequisitesEn: ['Basic German A1/A2 vocabulary', 'Verb conjugation in present tense', 'Gender of common nouns'],
          prerequisitesAr: ['مفردات المستويين الأول والثاني A1/A2', 'تصريف الأفعال المنتظمة في المضارع', 'معرفة أدوات الأسماء der/das/die'],
          keyVocabularyEn: [
            { term: 'Der Kasus', definition: 'The grammatical case (Nominativ, Akkusativ, Dativ, Genitiv)' },
            { term: 'Das Modalverb', definition: 'Auxiliary verb expressing modality, duty, or permission' }
          ],
          keyVocabularyAr: [
            { term: 'الحالة الإعرابية', definition: 'موقع الاسم النحوي وما يطرأ على أداته من تغيير' },
            { term: 'الفعل الناقص', definition: 'فعل مساعد يحدد صيغة الوجوب أو الاستطاعة أو الإذن' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Warming Up & Situational Hook',
              phaseAr: 'التهيئة واستعراض الموقف التواصلي',
              duration: '15 min',
              activitiesEn: 'Real-world audio dialogue and interactive listening comprehension',
              activitiesAr: 'الاستماع لحوار صوتي تفاعلي ومناقشة الموقف اليومي المستهدف'
            },
            {
              phaseEn: 'Grammar Deconstruction & Syntax Practice',
              phaseAr: 'تفكيك القواعد والتدريب التواصلي',
              duration: '75 min',
              activitiesEn: 'Dative case matrix drills, modal bracket exercises, and databank questions',
              activitiesAr: 'تدريبات على مصفوفة الداتيف وقوس الفعل وحل أسئلة بنك الأسئلة الوزاري'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing dative pronoun mir with accusative mich when using dative verbs like gefallen or wehtun'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين ضمير النصب mich وضمير الجر mir مع أفعال الداتيف مثل gefallen و wehtun'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded article inflection charts and clear English-German cognate bridges.',
            advanced: 'Challenge students with complex two-way prepositions and subordinate clause inversions.'
          },
          differentiationAr: {
            struggling: 'توفير جداول إعرابية ملونة للأدوات وقوائم مبسطة لأفعال وحروف الداتيف.',
            advanced: 'تكليف الطلاب بتحليل جمل الحالات المشتركة وصياغة نصوص حجاجية متقدمة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ checking grammar, lexicon, and dialogue response.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت يقيس القواعد والمفردات والمواقف الحياتية.',
          exitTicketQuestion: {
            questionEn: 'Which case is strictly governed by the preposition "mit" in German, and what does "der Bus" become?',
            questionAr: 'ما هي الحالة الإعرابية التي يفرضها حرف الجر "mit"، وإلى ماذا تتحول أداة الاسم المذكر "der Bus"؟',
            solutionEn: 'The preposition "mit" invariably takes the Dative case; masculine "der" becomes "dem" (mit dem Bus).',
            solutionAr: 'حرف الجر mit يجر الاسم بعده دائماً في حالة الداتيف؛ وتتحول أداة المذكر der إلى dem لتصبح (mit dem Bus).'
          }
        },
        worksheet: {
          id: 'egbac_de_ch2_l2_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_audio_lab',
          titleEn: 'German Literary Text & Critical Analysis Studio',
          titleAr: 'استوديو نصوص الأدب والنقد الفكري الألماني',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
    ],
    solvedExamples: egBacGermanCh2SolvedExamples,
    exerciseProblems: egBacGermanCh2Exercises,
    databank: egBacGermanCh2Databank
  },
  {
    id: 'egbac_de_ch3',
    chapterNumber: 3,
    titleEn: "Modul 3: Umwelt, Nachhaltigkeit & Energiewende in Deutschland",
    titleAr: "الوحدة الثالثة: البيئة، الاستدامة والتحول الطاقي في ألمانيا",
    descriptionEn: "The German Energiewende, decarbonization strategies, circular economy and recycling practices, renewable energy engineering, and climate action legislation.",
    descriptionAr: "استراتيجية التحول الطاقي الألمانية، خفض الانبعاثات الكربونية، الاقتصاد الدائري وإعادة التدوير، تقنيات الطاقة المتجددة، والتشريعات المناخية.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'german_grammar_lab',
        titleEn: "Ecological Discourse & Renewable Energy Studio",
        titleAr: "استوديو الخطاب البيئي وسياسات الطاقة المتجددة",
        descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
        descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_de_ch3_l1',
        titleEn: "Die deutsche Energiewende, Erneuerbare Energien & Kreislaufwirtschaft",
        titleAr: "التحول الطاقي الألماني، الطاقات المتجددة والاقتصاد الدائري",
        summaryEn: "Phase-out of fossil fuels and nuclear energy, solar and wind power grid integration, green hydrogen economy, and the German Pfandsystem.",
        summaryAr: "التخلص التدريجي من الوقود الأحفوري والطاقة النووية، إدماج طاقة الرياح والشمس بالشبكة الكهربائية، اقتصاد الهيدروجين الأخضر، ونظام إعادة تدوير العبوات.",
        theoryContentEn: "Relative clauses with prepositions (das Projekt, an dem wir arbeiten), participle attributes.",
        theoryContentAr: "جمل الصلة الموصولة مع حروف الجر، واستخدام صيغ اسم الفاعل والمفعول كصفات نعتية مسبقة.",
        formulas: [
          {
                    "labelEn": "Prepositional Relative Clause",
                    "labelAr": "صيغة جملة الصلة المقترنة بحرف جر",
                    "latex": "\\text{Nomen} + [, \\text{Präposition} + \\text{Relativpronomen (Kasus)} + \\dots + \\text{Verb Ende}]"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-DE-CH03-L1',
          pageRange: '60-85'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Die deutsche Energiewende, Erneuerbare Energien & Kreislaufwirtschaft",
          titleAr: "دليل المعلم التوجيهي: التحول الطاقي الألماني، الطاقات المتجددة والاقتصاد الدائري",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-DE-CH03-L1',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Die deutsche Energiewende, Erneuerbare Energien & Kreislaufwirtschaft",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ التحول الطاقي الألماني، الطاقات المتجددة والاقتصاد الدائري",
            'التمييز بين الحالات الإعرابية وصياغة الجمل الألمانية ببراعة',
            'تطبيق استراتيجيات حل أسئلة المواقف اليومية والنصوص التحريرية الرسمية'
          ],
          prerequisitesEn: ['Basic German A1/A2 vocabulary', 'Verb conjugation in present tense', 'Gender of common nouns'],
          prerequisitesAr: ['مفردات المستويين الأول والثاني A1/A2', 'تصريف الأفعال المنتظمة في المضارع', 'معرفة أدوات الأسماء der/das/die'],
          keyVocabularyEn: [
            { term: 'Der Kasus', definition: 'The grammatical case (Nominativ, Akkusativ, Dativ, Genitiv)' },
            { term: 'Das Modalverb', definition: 'Auxiliary verb expressing modality, duty, or permission' }
          ],
          keyVocabularyAr: [
            { term: 'الحالة الإعرابية', definition: 'موقع الاسم النحوي وما يطرأ على أداته من تغيير' },
            { term: 'الفعل الناقص', definition: 'فعل مساعد يحدد صيغة الوجوب أو الاستطاعة أو الإذن' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Warming Up & Situational Hook',
              phaseAr: 'التهيئة واستعراض الموقف التواصلي',
              duration: '15 min',
              activitiesEn: 'Real-world audio dialogue and interactive listening comprehension',
              activitiesAr: 'الاستماع لحوار صوتي تفاعلي ومناقشة الموقف اليومي المستهدف'
            },
            {
              phaseEn: 'Grammar Deconstruction & Syntax Practice',
              phaseAr: 'تفكيك القواعد والتدريب التواصلي',
              duration: '75 min',
              activitiesEn: 'Dative case matrix drills, modal bracket exercises, and databank questions',
              activitiesAr: 'تدريبات على مصفوفة الداتيف وقوس الفعل وحل أسئلة بنك الأسئلة الوزاري'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing dative pronoun mir with accusative mich when using dative verbs like gefallen or wehtun'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين ضمير النصب mich وضمير الجر mir مع أفعال الداتيف مثل gefallen و wehtun'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded article inflection charts and clear English-German cognate bridges.',
            advanced: 'Challenge students with complex two-way prepositions and subordinate clause inversions.'
          },
          differentiationAr: {
            struggling: 'توفير جداول إعرابية ملونة للأدوات وقوائم مبسطة لأفعال وحروف الداتيف.',
            advanced: 'تكليف الطلاب بتحليل جمل الحالات المشتركة وصياغة نصوص حجاجية متقدمة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ checking grammar, lexicon, and dialogue response.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت يقيس القواعد والمفردات والمواقف الحياتية.',
          exitTicketQuestion: {
            questionEn: 'Which case is strictly governed by the preposition "mit" in German, and what does "der Bus" become?',
            questionAr: 'ما هي الحالة الإعرابية التي يفرضها حرف الجر "mit"، وإلى ماذا تتحول أداة الاسم المذكر "der Bus"؟',
            solutionEn: 'The preposition "mit" invariably takes the Dative case; masculine "der" becomes "dem" (mit dem Bus).',
            solutionAr: 'حرف الجر mit يجر الاسم بعده دائماً في حالة الداتيف؛ وتتحول أداة المذكر der إلى dem لتصبح (mit dem Bus).'
          }
        },
        worksheet: {
          id: 'egbac_de_ch3_l1_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_grammar_lab',
          titleEn: 'Ecological Discourse & Renewable Energy Studio',
          titleAr: 'استوديو الخطاب البيئي وسياسات الطاقة المتجددة',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
      {
        id: 'egbac_de_ch3_l2',
        titleEn: "Klimaschutzabkommen, Biodiversität & Grüne Technologien",
        titleAr: "اتفاقيات حماية المناخ، التنوع البيولوجي والتقنيات الخضراء",
        summaryEn: "European Green Deal commitments, reforestation, urban eco-mobility, biodiversity preservation, and global environmental cooperation.",
        summaryAr: "التزامات الميثاق الأخضر الأوروبي، إعادة تشجير الغابات، التنقل الحضري الصديق للبيئة، صون التنوع الحيوي، والتعاون البيئي الدولي.",
        theoryContentEn: "Infinitive constructions with um...zu, ohne...zu, and anstatt...zu.",
        theoryContentAr: "التراكيب المصدرية للغرض والهدف um...zu (لكي)، والنفي بدون فعل ohne...zu، والاستبدال anstatt...zu.",
        formulas: [
          {
                    "labelEn": "Purpose Clause with um...zu",
                    "labelAr": "صيغة الغرض والهدف بالمصدرية",
                    "latex": "\\text{um} + \\dots + \\text{zu} + \\text{Infinitiv}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-DE-CH03-L2',
          pageRange: '60-85'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Klimaschutzabkommen, Biodiversität & Grüne Technologien",
          titleAr: "دليل المعلم التوجيهي: اتفاقيات حماية المناخ، التنوع البيولوجي والتقنيات الخضراء",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-DE-CH03-L2',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Klimaschutzabkommen, Biodiversität & Grüne Technologien",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ اتفاقيات حماية المناخ، التنوع البيولوجي والتقنيات الخضراء",
            'التمييز بين الحالات الإعرابية وصياغة الجمل الألمانية ببراعة',
            'تطبيق استراتيجيات حل أسئلة المواقف اليومية والنصوص التحريرية الرسمية'
          ],
          prerequisitesEn: ['Basic German A1/A2 vocabulary', 'Verb conjugation in present tense', 'Gender of common nouns'],
          prerequisitesAr: ['مفردات المستويين الأول والثاني A1/A2', 'تصريف الأفعال المنتظمة في المضارع', 'معرفة أدوات الأسماء der/das/die'],
          keyVocabularyEn: [
            { term: 'Der Kasus', definition: 'The grammatical case (Nominativ, Akkusativ, Dativ, Genitiv)' },
            { term: 'Das Modalverb', definition: 'Auxiliary verb expressing modality, duty, or permission' }
          ],
          keyVocabularyAr: [
            { term: 'الحالة الإعرابية', definition: 'موقع الاسم النحوي وما يطرأ على أداته من تغيير' },
            { term: 'الفعل الناقص', definition: 'فعل مساعد يحدد صيغة الوجوب أو الاستطاعة أو الإذن' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Warming Up & Situational Hook',
              phaseAr: 'التهيئة واستعراض الموقف التواصلي',
              duration: '15 min',
              activitiesEn: 'Real-world audio dialogue and interactive listening comprehension',
              activitiesAr: 'الاستماع لحوار صوتي تفاعلي ومناقشة الموقف اليومي المستهدف'
            },
            {
              phaseEn: 'Grammar Deconstruction & Syntax Practice',
              phaseAr: 'تفكيك القواعد والتدريب التواصلي',
              duration: '75 min',
              activitiesEn: 'Dative case matrix drills, modal bracket exercises, and databank questions',
              activitiesAr: 'تدريبات على مصفوفة الداتيف وقوس الفعل وحل أسئلة بنك الأسئلة الوزاري'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing dative pronoun mir with accusative mich when using dative verbs like gefallen or wehtun'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين ضمير النصب mich وضمير الجر mir مع أفعال الداتيف مثل gefallen و wehtun'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded article inflection charts and clear English-German cognate bridges.',
            advanced: 'Challenge students with complex two-way prepositions and subordinate clause inversions.'
          },
          differentiationAr: {
            struggling: 'توفير جداول إعرابية ملونة للأدوات وقوائم مبسطة لأفعال وحروف الداتيف.',
            advanced: 'تكليف الطلاب بتحليل جمل الحالات المشتركة وصياغة نصوص حجاجية متقدمة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ checking grammar, lexicon, and dialogue response.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت يقيس القواعد والمفردات والمواقف الحياتية.',
          exitTicketQuestion: {
            questionEn: 'Which case is strictly governed by the preposition "mit" in German, and what does "der Bus" become?',
            questionAr: 'ما هي الحالة الإعرابية التي يفرضها حرف الجر "mit"، وإلى ماذا تتحول أداة الاسم المذكر "der Bus"؟',
            solutionEn: 'The preposition "mit" invariably takes the Dative case; masculine "der" becomes "dem" (mit dem Bus).',
            solutionAr: 'حرف الجر mit يجر الاسم بعده دائماً في حالة الداتيف؛ وتتحول أداة المذكر der إلى dem لتصبح (mit dem Bus).'
          }
        },
        worksheet: {
          id: 'egbac_de_ch3_l2_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_grammar_lab',
          titleEn: 'Ecological Discourse & Renewable Energy Studio',
          titleAr: 'استوديو الخطاب البيئي وسياسات الطاقة المتجددة',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
    ],
    solvedExamples: egBacGermanCh3SolvedExamples,
    exerciseProblems: egBacGermanCh3Exercises,
    databank: egBacGermanCh3Databank
  },
  {
    id: 'egbac_de_ch4',
    chapterNumber: 4,
    titleEn: "Modul 4: Digitale Medien, Ethik & Interkultureller Dialog",
    titleAr: "الوحدة الرابعة: الإعلام الرقمي، الأخلاقيات والحوار بين الثقافات",
    descriptionEn: "Digital media ethics, artificial intelligence in contemporary society, data privacy (DSGVO/GDPR), German-Arab cultural and academic dialogue, and diplomacy.",
    descriptionAr: "أخلاقيات الإعلام الرقمي، الذكاء الاصطناعي في المجتمع الحديث، حماية البيانات والخصوصية الرقمية، والحوار الثقافي والأكاديمي الألماني-العربي.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'german_audio_lab',
        titleEn: "Intercultural Communication & Digital Media Studio",
        titleAr: "استوديو التواصل بين الثقافات والإعلام الرقمي",
        descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
        descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
      }
    ],
    lessons: [
      {
        id: 'egbac_de_ch4_l1',
        titleEn: "Medienkompetenz, Soziale Netzwerke & Künstliche Intelligenz in der Gesellschaft",
        titleAr: "التربية الإعلامية، شبكات التواصل والذكاء الاصطناعي في المجتمع",
        summaryEn: "Algorithmic curation, misinformation detection, ethics of generative AI, digital footprints, and strict European data protection standards.",
        summaryAr: "خوارزميات توجيه المحتوى، كشف الأخبار المضللة، أخلاقيات الذكاء الاصطناعي التوليدي، والبصمة الرقمية وقوانين حماية الخصوصية الأوروبية الصارمة.",
        theoryContentEn: "Conditionals with wenn, falls, and hypothetical Konjunktiv II in the past (hätte + Partizip II / wäre + Partizip II).",
        theoryContentAr: "الجمل الشرطية بـ wenn و falls، وصيغة الشرط الافتراضي في الزمن الماضي (Konjunktiv II der Vergangenheit).",
        formulas: [
          {
                    "labelEn": "Past Unreal Conditional Formula",
                    "labelAr": "صيغة الشرط الافتراضي في الماضي",
                    "latex": "\\text{Wenn ich } \\dots \\text{ gelernt hätte, wäre ich erfolgreich gewesen.}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-DE-CH04-L1',
          pageRange: '85-110'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Medienkompetenz, Soziale Netzwerke & Künstliche Intelligenz in der Gesellschaft",
          titleAr: "دليل المعلم التوجيهي: التربية الإعلامية، شبكات التواصل والذكاء الاصطناعي في المجتمع",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-DE-CH04-L1',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Medienkompetenz, Soziale Netzwerke & Künstliche Intelligenz in der Gesellschaft",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ التربية الإعلامية، شبكات التواصل والذكاء الاصطناعي في المجتمع",
            'التمييز بين الحالات الإعرابية وصياغة الجمل الألمانية ببراعة',
            'تطبيق استراتيجيات حل أسئلة المواقف اليومية والنصوص التحريرية الرسمية'
          ],
          prerequisitesEn: ['Basic German A1/A2 vocabulary', 'Verb conjugation in present tense', 'Gender of common nouns'],
          prerequisitesAr: ['مفردات المستويين الأول والثاني A1/A2', 'تصريف الأفعال المنتظمة في المضارع', 'معرفة أدوات الأسماء der/das/die'],
          keyVocabularyEn: [
            { term: 'Der Kasus', definition: 'The grammatical case (Nominativ, Akkusativ, Dativ, Genitiv)' },
            { term: 'Das Modalverb', definition: 'Auxiliary verb expressing modality, duty, or permission' }
          ],
          keyVocabularyAr: [
            { term: 'الحالة الإعرابية', definition: 'موقع الاسم النحوي وما يطرأ على أداته من تغيير' },
            { term: 'الفعل الناقص', definition: 'فعل مساعد يحدد صيغة الوجوب أو الاستطاعة أو الإذن' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Warming Up & Situational Hook',
              phaseAr: 'التهيئة واستعراض الموقف التواصلي',
              duration: '15 min',
              activitiesEn: 'Real-world audio dialogue and interactive listening comprehension',
              activitiesAr: 'الاستماع لحوار صوتي تفاعلي ومناقشة الموقف اليومي المستهدف'
            },
            {
              phaseEn: 'Grammar Deconstruction & Syntax Practice',
              phaseAr: 'تفكيك القواعد والتدريب التواصلي',
              duration: '75 min',
              activitiesEn: 'Dative case matrix drills, modal bracket exercises, and databank questions',
              activitiesAr: 'تدريبات على مصفوفة الداتيف وقوس الفعل وحل أسئلة بنك الأسئلة الوزاري'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing dative pronoun mir with accusative mich when using dative verbs like gefallen or wehtun'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين ضمير النصب mich وضمير الجر mir مع أفعال الداتيف مثل gefallen و wehtun'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded article inflection charts and clear English-German cognate bridges.',
            advanced: 'Challenge students with complex two-way prepositions and subordinate clause inversions.'
          },
          differentiationAr: {
            struggling: 'توفير جداول إعرابية ملونة للأدوات وقوائم مبسطة لأفعال وحروف الداتيف.',
            advanced: 'تكليف الطلاب بتحليل جمل الحالات المشتركة وصياغة نصوص حجاجية متقدمة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ checking grammar, lexicon, and dialogue response.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت يقيس القواعد والمفردات والمواقف الحياتية.',
          exitTicketQuestion: {
            questionEn: 'Which case is strictly governed by the preposition "mit" in German, and what does "der Bus" become?',
            questionAr: 'ما هي الحالة الإعرابية التي يفرضها حرف الجر "mit"، وإلى ماذا تتحول أداة الاسم المذكر "der Bus"؟',
            solutionEn: 'The preposition "mit" invariably takes the Dative case; masculine "der" becomes "dem" (mit dem Bus).',
            solutionAr: 'حرف الجر mit يجر الاسم بعده دائماً في حالة الداتيف؛ وتتحول أداة المذكر der إلى dem لتصبح (mit dem Bus).'
          }
        },
        worksheet: {
          id: 'egbac_de_ch4_l1_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_audio_lab',
          titleEn: 'Intercultural Communication & Digital Media Studio',
          titleAr: 'استوديو التواصل بين الثقافات والإعلام الرقمي',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
      {
        id: 'egbac_de_ch4_l2',
        titleEn: "Interkulturelle Kommunikation, Deutsch-Arabische Partnerschaften & Globaler Dialog",
        titleAr: "التواصل بين الثقافات، الشراكات الألمانية-العربية والحوار العالمي",
        summaryEn: "Cross-cultural competence, academic partnerships (DAAD, Goethe-Institut, German University in Cairo), overcoming stereotyping, and international diplomacy.",
        summaryAr: "الكفاءة التواصلية عبر الثقافات، الشراكات الأكاديمية (هيئة التبادل الأكاديمي DAAD، معهد غوته، الجامعة الألمانية بالقاهرة)، وتجاوز الصور النمطية والتعاون الدبلوماسي.",
        theoryContentEn: "Discourse markers for debates (einerseits...andererseits, sowohl...als auch, weder...noch), persuasive rhetorical phrasing.",
        theoryContentAr: "روابط المناظرة الثنائية المزدوجة (من جهة... ومن جهة أخرى، ليس فقط... بل أيضاً، لا هذا... ولا ذاك) وعبارات الإقناع الأكاديمي.",
        formulas: [
          {
                    "labelEn": "Correlative Conjunction Formula",
                    "labelAr": "صيغة الروابط المزدوجة",
                    "latex": "\\text{sowohl} + A + \\text{als auch} + B \\quad / \\quad \\text{einerseits} \\dots, \\text{andererseits} \\dots"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'EG-DE-CH04-L2',
          pageRange: '85-110'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Interkulturelle Kommunikation, Deutsch-Arabische Partnerschaften & Globaler Dialog",
          titleAr: "دليل المعلم التوجيهي: التواصل بين الثقافات، الشراكات الألمانية-العربية والحوار العالمي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'EG-DE-CH04-L2',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Interkulturelle Kommunikation, Deutsch-Arabische Partnerschaften & Globaler Dialog",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ التواصل بين الثقافات، الشراكات الألمانية-العربية والحوار العالمي",
            'التمييز بين الحالات الإعرابية وصياغة الجمل الألمانية ببراعة',
            'تطبيق استراتيجيات حل أسئلة المواقف اليومية والنصوص التحريرية الرسمية'
          ],
          prerequisitesEn: ['Basic German A1/A2 vocabulary', 'Verb conjugation in present tense', 'Gender of common nouns'],
          prerequisitesAr: ['مفردات المستويين الأول والثاني A1/A2', 'تصريف الأفعال المنتظمة في المضارع', 'معرفة أدوات الأسماء der/das/die'],
          keyVocabularyEn: [
            { term: 'Der Kasus', definition: 'The grammatical case (Nominativ, Akkusativ, Dativ, Genitiv)' },
            { term: 'Das Modalverb', definition: 'Auxiliary verb expressing modality, duty, or permission' }
          ],
          keyVocabularyAr: [
            { term: 'الحالة الإعرابية', definition: 'موقع الاسم النحوي وما يطرأ على أداته من تغيير' },
            { term: 'الفعل الناقص', definition: 'فعل مساعد يحدد صيغة الوجوب أو الاستطاعة أو الإذن' }
          ],
          teachingPacing: [
            {
              phaseEn: 'Warming Up & Situational Hook',
              phaseAr: 'التهيئة واستعراض الموقف التواصلي',
              duration: '15 min',
              activitiesEn: 'Real-world audio dialogue and interactive listening comprehension',
              activitiesAr: 'الاستماع لحوار صوتي تفاعلي ومناقشة الموقف اليومي المستهدف'
            },
            {
              phaseEn: 'Grammar Deconstruction & Syntax Practice',
              phaseAr: 'تفكيك القواعد والتدريب التواصلي',
              duration: '75 min',
              activitiesEn: 'Dative case matrix drills, modal bracket exercises, and databank questions',
              activitiesAr: 'تدريبات على مصفوفة الداتيف وقوس الفعل وحل أسئلة بنك الأسئلة الوزاري'
            }
          ],
          commonMisconceptionsEn: [
            'Confusing dative pronoun mir with accusative mich when using dative verbs like gefallen or wehtun'
          ],
          commonMisconceptionsAr: [
            'الخلط الشائع بين ضمير النصب mich وضمير الجر mir مع أفعال الداتيف مثل gefallen و wehtun'
          ],
          differentiationEn: {
            struggling: 'Provide color-coded article inflection charts and clear English-German cognate bridges.',
            advanced: 'Challenge students with complex two-way prepositions and subordinate clause inversions.'
          },
          differentiationAr: {
            struggling: 'توفير جداول إعرابية ملونة للأدوات وقوائم مبسطة لأفعال وحروف الداتيف.',
            advanced: 'تكليف الطلاب بتحليل جمل الحالات المشتركة وصياغة نصوص حجاجية متقدمة.'
          },
          formativeAssessmentEn: 'Ministerial bubble-sheet 4-option MCQ checking grammar, lexicon, and dialogue response.',
          formativeAssessmentAr: 'تقييم مرحلي بنمط البابل شيت يقيس القواعد والمفردات والمواقف الحياتية.',
          exitTicketQuestion: {
            questionEn: 'Which case is strictly governed by the preposition "mit" in German, and what does "der Bus" become?',
            questionAr: 'ما هي الحالة الإعرابية التي يفرضها حرف الجر "mit"، وإلى ماذا تتحول أداة الاسم المذكر "der Bus"؟',
            solutionEn: 'The preposition "mit" invariably takes the Dative case; masculine "der" becomes "dem" (mit dem Bus).',
            solutionAr: 'حرف الجر mit يجر الاسم بعده دائماً في حالة الداتيف؛ وتتحول أداة المذكر der إلى dem لتصبح (mit dem Bus).'
          }
        },
        worksheet: {
          id: 'egbac_de_ch4_l2_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_audio_lab',
          titleEn: 'Intercultural Communication & Digital Media Studio',
          titleAr: 'استوديو التواصل بين الثقافات والإعلام الرقمي',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
    ],
    solvedExamples: egBacGermanCh4SolvedExamples,
    exerciseProblems: egBacGermanCh4Exercises,
    databank: egBacGermanCh4Databank
  },
];


export const egBacGermanBranch: Branch = {
  id: 'egbac_german',
  titleEn: 'Advanced German (DaF B1/B2 & Global Studies)',
  titleAr: 'اللغة الألمانية المتقدمة (DaF B1/B2 والدراسات الدولية)',
  categoryEn: 'Advanced International Languages Track',
  categoryAr: 'مسار اللغات الدولية المتقدم',
  iconName: 'Languages',
  colorGradient: 'from-amber-600 via-red-600 to-stone-900',
  chapters
};
