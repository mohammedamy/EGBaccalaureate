import type { Branch, Chapter } from '../types/curriculum';
import { germanCh1Databank } from './databanks/thanaweya/germanCh1Databank';
import { germanCh2Databank } from './databanks/thanaweya/germanCh2Databank';
import { germanCh3Databank } from './databanks/thanaweya/germanCh3Databank';
import { germanCh4Databank } from './databanks/thanaweya/germanCh4Databank';
import { germanCh1SolvedExamples, germanCh1Exercises } from './textbook/thanaweya/germanCh1Textbook';
import { germanCh2SolvedExamples, germanCh2Exercises } from './textbook/thanaweya/germanCh2Textbook';
import { germanCh3SolvedExamples, germanCh3Exercises } from './textbook/thanaweya/germanCh3Textbook';
import { germanCh4SolvedExamples, germanCh4Exercises } from './textbook/thanaweya/germanCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'th_de_ch1',
    chapterNumber: 1,
    titleEn: "Lektion 10: Gesundheit, Körperteile & Beim Arzt",
    titleAr: "الدرس العاشر: الصحة، أجزاء الجسم والعيادة الطبية",
    descriptionEn: "Body parts, expressing ailments and pain (weh tun), consulting a physician, scheduling appointments, modal verbs (müssen, sollen, dürfen), and imperative healthcare instructions.",
    descriptionAr: "أجزاء الجسم والتعبير عن الألم والأعراض، زيارة الطبيب وتحديد المواعيد، الأفعال الناقصة (müssen, sollen, dürfen)، وصيغ الأمر والنصائح الطبية.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'german_grammar_lab',
        titleEn: "Doctor Consultation & Health Grammar Studio",
        titleAr: "استوديو العيادة الطبية وقواعد التعبير عن الصحة",
        descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
        descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
      }
    ],
    lessons: [
      {
        id: 'th_de_ch1_l1',
        titleEn: "Körperteile, Schmerzen äußern (weh tun) & Modalverben (müssen / sollen)",
        titleAr: "أجزاء الجسم، التعبير عن الألم والفعلين müssen و sollen",
        summaryEn: "Vocabulary of human anatomy, expressions of physical pain, and grammatical mastery of müssen (necessity) versus sollen (advice/doctor orders).",
        summaryAr: "مفردات أعضاء الجسم، التعبير عن الألم باستخدام فعل weh tun، وإتقان التفرقة بين müssen للضرورة الحتمية و sollen للنصيحة والأوامر الطبية.",
        theoryContentEn: "Modal verb conjugations: ich/er/sie/es muss/soll; du musst/sollst; wir/sie/Sie müssen/sollen. Dative pain construction: Der Kopf tut mir/ihm/ihr weh.",
        theoryContentAr: "تصريف الأفعال الناقصة مع الضمائر الشخصية، وتركيب جملة الألم: Der Kopf tut mir/dir weh مع صيغ المفرد tut والجمع tun.",
        formulas: [
          {
                    "labelEn": "Pain Expression Formula",
                    "labelAr": "صيغة التعبير عن الألم",
                    "latex": "\\text{Subjekt (Körperteil)} + \\text{tut/tun} + \\text{Pronomen (Dativ)} + \\text{weh}"
          },
          {
                    "labelEn": "Satzklammer with Modalverben",
                    "labelAr": "قوس الفعل الألماني مع الأفعال الناقصة",
                    "latex": "\\text{Subjekt} + \\text{Modalverb (Pos. 2)} + \\dots + \\text{Infinitiv (Satzende)}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-DE-CH01-L1',
          pageRange: '10-35'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Körperteile, Schmerzen äußern (weh tun) & Modalverben (müssen / sollen)",
          titleAr: "دليل المعلم التوجيهي: أجزاء الجسم، التعبير عن الألم والفعلين müssen و sollen",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-DE-CH01-L1',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Körperteile, Schmerzen äußern (weh tun) & Modalverben (müssen / sollen)",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ أجزاء الجسم، التعبير عن الألم والفعلين müssen و sollen",
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
          id: 'th_de_ch1_l1_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_grammar_lab',
          titleEn: 'Doctor Consultation & Health Grammar Studio',
          titleAr: 'استوديو العيادة الطبية وقواعد التعبير عن الصحة',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
      {
        id: 'th_de_ch1_l2',
        titleEn: "In der Arztpraxis: Anweisungen (Imperativ), Medikamente & Verbot (dürfen / nicht dürfen)",
        titleAr: "في العيادة الطبية: صيغ الأمر، الأدوية وفعل الحظر والمنع dürfen",
        summaryEn: "Doctor-patient dialogue protocols, pharmacy vocabulary, imperative forms (du, ihr, Sie), and expressing medical prohibitions with dürfen nicht.",
        summaryAr: "حوارات العيادة والصيدلية، صياغة الأمر للمفرد والجمع والاحترام، والتعبير عن الممنوعات الطبية والقانونية باستخدام nicht dürfen.",
        theoryContentEn: "Imperative rules: Geh(e)! / Geht! / Gehen Sie! Negation of permission: Man darf hier nicht rauchen (Strict prohibition).",
        theoryContentAr: "قواعد صيغة الأمر: حذف النهاية والضمير مع du، والاحتفاظ بتصريف ihr، والتقديم والتأخير مع Sie. والتعبير عن المنع بـ darf nicht.",
        formulas: [
          {
                    "labelEn": "Imperative Sie Formula",
                    "labelAr": "صيغة الأمر للمخاطب الرسمي",
                    "latex": "\\text{Verb (Stamm + en)} + \\text{Sie} + \\dots!"
          },
          {
                    "labelEn": "Prohibition Formula",
                    "labelAr": "صيغة المنع والتحريم الوزارية",
                    "latex": "\\text{Man darf} + \\text{nicht} + \\dots + \\text{Infinitiv}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-DE-CH01-L2',
          pageRange: '10-35'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: In der Arztpraxis: Anweisungen (Imperativ), Medikamente & Verbot (dürfen / nicht dürfen)",
          titleAr: "دليل المعلم التوجيهي: في العيادة الطبية: صيغ الأمر، الأدوية وفعل الحظر والمنع dürfen",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-DE-CH01-L2',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of In der Arztpraxis: Anweisungen (Imperativ), Medikamente & Verbot (dürfen / nicht dürfen)",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ في العيادة الطبية: صيغ الأمر، الأدوية وفعل الحظر والمنع dürfen",
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
          id: 'th_de_ch1_l2_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_grammar_lab',
          titleEn: 'Doctor Consultation & Health Grammar Studio',
          titleAr: 'استوديو العيادة الطبية وقواعد التعبير عن الصحة',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
    ],
    solvedExamples: germanCh1SolvedExamples,
    exerciseProblems: germanCh1Exercises,
    databank: germanCh1Databank
  },
  {
    id: 'th_de_ch2',
    chapterNumber: 2,
    titleEn: "Lektion 11: In der Stadt, Verkehrsmittel & Orientierung",
    titleAr: "الدرس الحادي عشر: في المدينة، وسائل المواصلات والاتجاهات",
    descriptionEn: "Means of public transportation, asking for and giving directions in the city, dative prepositions (mit, zu, nach, bei, von, aus), and local orientation prepositions.",
    descriptionAr: "وسائل المواصلات العامة، السؤال عن الطريق ووصف الاتجاهات في المدينة، حروف الجر الملازمة لحالة الجر Dativ، وحروف المكان والاتجاه.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'german_audio_lab',
        titleEn: "Transportation & Direction Navigator Studio",
        titleAr: "استوديو وسائل المواصلات والتوجيه الحضري",
        descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
        descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
      }
    ],
    lessons: [
      {
        id: 'th_de_ch2_l1',
        titleEn: "Verkehrsmittel & Dativ-Präpositionen (mit dem Bus, mit der Bahn, zu Fuß)",
        titleAr: "وسائل المواصلات وحرف الجر mit مع الداتيف",
        summaryEn: "Modes of travel, vehicle vocabulary, contraction rules, and applying mit + Dativ invariably to express instrument of transport.",
        summaryAr: "وسائل النقل والمواصلات، والتطبيق النحوي لحرف الجر mit الذي يأخذ Dativ دائماً للدلالة على وسيلة السفر، والتعبير zu Fuß سيراً.",
        theoryContentEn: "mit + dem Bus/Zug/Auto (der/das -> dem); mit + der U-Bahn/Straßenbahn (die -> der); Exception: zu Fuß gehen.",
        theoryContentAr: "قاعدة وسيلة المواصلات: mit + dem للمذكر والمحايد، و mit + der للمؤنث، و zu Fuß سيراً على الأقدام دون أداة.",
        formulas: [
          {
                    "labelEn": "Transportation Preposition Formula",
                    "labelAr": "صيغة وسيلة المواصلات مع mit",
                    "latex": "\\text{fahren} + \\text{mit} + \\{\\text{dem (der/das)}, \\text{der (die)}\\}"
          },
          {
                    "labelEn": "Pedestrian Travel Formula",
                    "labelAr": "صيغة الذهاب سيراً على الأقدام",
                    "latex": "\\text{gehen} + \\text{zu Fuß}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-DE-CH02-L1',
          pageRange: '35-60'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Verkehrsmittel & Dativ-Präpositionen (mit dem Bus, mit der Bahn, zu Fuß)",
          titleAr: "دليل المعلم التوجيهي: وسائل المواصلات وحرف الجر mit مع الداتيف",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-DE-CH02-L1',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Verkehrsmittel & Dativ-Präpositionen (mit dem Bus, mit der Bahn, zu Fuß)",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ وسائل المواصلات وحرف الجر mit مع الداتيف",
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
          id: 'th_de_ch2_l1_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_audio_lab',
          titleEn: 'Transportation & Direction Navigator Studio',
          titleAr: 'استوديو وسائل المواصلات والتوجيه الحضري',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
      {
        id: 'th_de_ch2_l2',
        titleEn: "Wegbeschreibung & Lokale Präpositionen (zum Bahnhof, in die Stadt, an der Kreuzung)",
        titleAr: "وصف الطريق وحروف الجر الدالة على المكان والاتجاه",
        summaryEn: "Asking for directions politely, directional verbs (biegen Sie ab, gehen Sie geradeaus), and prepositions zu, nach, and in with destinations.",
        summaryAr: "السؤال عن الاتجاهات بأدب، وأفعال وصف المسار (انعطف، سر للأمام)، واستخدام حروف الجر zu و nach و in مع الوجهات الجغرافية والمباني.",
        theoryContentEn: "zu + dem = zum (zum Bahnhof/Flughafen); zu + der = zur (zur Post/Apotheke); nach + Städte/Länder ohne Artikel (nach Kairo/Berlin).",
        theoryContentAr: "إدغامات حروف الجر: zu dem = zum، و zu der = zur. واستخدام nach مع المدن والدول غير المعرفة بالأداة.",
        formulas: [
          {
                    "labelEn": "Direction Question Formula",
                    "labelAr": "صيغة السؤال المهذب عن الطريق",
                    "latex": "\\text{Wie komme ich} + \\text{zu/nach/in} + \\dots?"
          },
          {
                    "labelEn": "Contraction Formula",
                    "labelAr": "صيغة الإدغام النحوي",
                    "latex": "\\text{zu} + \\text{dem} = \\text{zum}, \\quad \\text{zu} + \\text{der} = \\text{zur}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-DE-CH02-L2',
          pageRange: '35-60'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Wegbeschreibung & Lokale Präpositionen (zum Bahnhof, in die Stadt, an der Kreuzung)",
          titleAr: "دليل المعلم التوجيهي: وصف الطريق وحروف الجر الدالة على المكان والاتجاه",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-DE-CH02-L2',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Wegbeschreibung & Lokale Präpositionen (zum Bahnhof, in die Stadt, an der Kreuzung)",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ وصف الطريق وحروف الجر الدالة على المكان والاتجاه",
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
          id: 'th_de_ch2_l2_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_audio_lab',
          titleEn: 'Transportation & Direction Navigator Studio',
          titleAr: 'استوديو وسائل المواصلات والتوجيه الحضري',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
    ],
    solvedExamples: germanCh2SolvedExamples,
    exerciseProblems: germanCh2Exercises,
    databank: germanCh2Databank
  },
  {
    id: 'th_de_ch3',
    chapterNumber: 3,
    titleEn: "Lektion 12: Kleidung, Einkaufen & Dienstleistungen",
    titleAr: "الدرس الثاني عشر: الملابس، التسوق وخدمة العملاء",
    descriptionEn: "Clothing items, shopping dialogues, expressing aesthetic opinions (gefallen, passen, stehen), personal pronouns in dative, and demonstrative pronouns (welch- / dies-).",
    descriptionAr: "قطع الملابس، حوارات التسوق في المتاجر، أفعال الإعجاب والملاءمة (gefallen, passen, stehen)، ضمائر المفعول في حالة الداتيف، وأسماء الإشارة.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'german_cases_matrix',
        titleEn: "Dative Verbs & Pronouns Matrix Studio",
        titleAr: "استوديو أفعال وضمائر حالة الجر Dativ في التسوق",
        descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
        descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
      }
    ],
    lessons: [
      {
        id: 'th_de_ch3_l1',
        titleEn: "Im Modegeschäft: Kleidung, Farben, Gefallen & Passen + Dativ-Pronomen (mir, dir, ihm, ihr)",
        titleAr: "في متجر الملابس: الألوان، أفعال الإعجاب والمقاس والضمائر في الداتيف",
        summaryEn: "Apparel vocabulary, color descriptions, distinction between gefallen (taste) and passen (size/fit), and mastering dative personal pronouns.",
        summaryAr: "مفردات الملابس والألوان، والتفرقة الجوهرية بين gefallen للمظهر والذوق و passen للمقاس والسعر، واستخدام ضمائر الداتيف mir و dir و ihm.",
        theoryContentEn: "Dative verbs: Das Kleid gefällt mir. Der Schuh passt ihm nicht. Pronouns: ich->mir, du->dir, er->ihm, sie->ihr, wir->uns, ihr->euch, Sie->Ihnen.",
        theoryContentAr: "أفعال الداتيف: gefallen للأشكال والألوان، و passen للمقاس والمواعيد. وتصريف الضمائر الشخصية في حالة الداتيف.",
        formulas: [
          {
                    "labelEn": "Aesthetic Preference Formula",
                    "labelAr": "صيغة الإعجاب بالملبس والذوق",
                    "latex": "\\text{Gegenstand (Subjekt)} + \\text{gefällt/gefallen} + \\text{Pronomen (Dativ)}"
          },
          {
                    "labelEn": "Fit and Size Formula",
                    "labelAr": "صيغة ملاءمة المقاس والقياس",
                    "latex": "\\text{Gegenstand (Subjekt)} + \\text{passt/passen} + \\text{Pronomen (Dativ)}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-DE-CH03-L1',
          pageRange: '60-85'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Im Modegeschäft: Kleidung, Farben, Gefallen & Passen + Dativ-Pronomen (mir, dir, ihm, ihr)",
          titleAr: "دليل المعلم التوجيهي: في متجر الملابس: الألوان، أفعال الإعجاب والمقاس والضمائر في الداتيف",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-DE-CH03-L1',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Im Modegeschäft: Kleidung, Farben, Gefallen & Passen + Dativ-Pronomen (mir, dir, ihm, ihr)",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ في متجر الملابس: الألوان، أفعال الإعجاب والمقاس والضمائر في الداتيف",
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
          id: 'th_de_ch3_l1_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_cases_matrix',
          titleEn: 'Dative Verbs & Pronouns Matrix Studio',
          titleAr: 'استوديو أفعال وضمائر حالة الجر Dativ في التسوق',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
      {
        id: 'th_de_ch3_l2',
        titleEn: "Kundenservice: Reklamation, Reparatur & Demonstrativpronomen (welch- / dies-)",
        titleAr: "خدمة العملاء: الشكاوى، الإصلاح وأدوات الاستفهام welch- وأسماء الإشارة dies-",
        summaryEn: "Defective goods, repair services, polite customer requests, and case declensions of welch- (which) and dies- (this).",
        summaryAr: "السلع المعيبة، طلبات الصيانة والإصلاح في مراكز الخدمة، وتصريف أداتي الاستفهام والإشارة welch- و dies- بحسب الحالة الإعرابية للاسم.",
        theoryContentEn: "Declension follows definite article endings: Welcher/Dieser (masc nom), Welchen/Diesen (masc akk), Welchem/Diesem (masc/neut dat).",
        theoryContentAr: "نهايات welch- و dies- تأخذ نفس نهايات أداة المعرفة: welcher/dieser للمذكر المرفوع، و welchen/diesen للمنصوب، و welchem/diesem للداتيف.",
        formulas: [
          {
                    "labelEn": "Demonstrative Agreement Formula",
                    "labelAr": "تطابق أداة الإشارة مع أداة المعرفة",
                    "latex": "\\text{welch-/dies-} + \\text{Endung von } (\\text{der/den/dem/die/das})"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-DE-CH03-L2',
          pageRange: '60-85'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Kundenservice: Reklamation, Reparatur & Demonstrativpronomen (welch- / dies-)",
          titleAr: "دليل المعلم التوجيهي: خدمة العملاء: الشكاوى، الإصلاح وأدوات الاستفهام welch- وأسماء الإشارة dies-",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-DE-CH03-L2',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Kundenservice: Reklamation, Reparatur & Demonstrativpronomen (welch- / dies-)",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ خدمة العملاء: الشكاوى، الإصلاح وأدوات الاستفهام welch- وأسماء الإشارة dies-",
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
          id: 'th_de_ch3_l2_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_cases_matrix',
          titleEn: 'Dative Verbs & Pronouns Matrix Studio',
          titleAr: 'استوديو أفعال وضمائر حالة الجر Dativ في التسوق',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
    ],
    solvedExamples: germanCh3SolvedExamples,
    exerciseProblems: germanCh3Exercises,
    databank: germanCh3Databank
  },
  {
    id: 'th_de_ch4',
    chapterNumber: 4,
    titleEn: "Lektion 13: Feste, Feiern, Einladungen & Termine",
    titleAr: "الدرس الثالث عشر: المناسبات، الحفلات، الدعوات والمواعيد",
    descriptionEn: "Celebrations and holidays, invitations and RSVPs, temporal prepositions (vor, nach, bei, in, ab, seit, bis), ordinal numbers and dates, and polite Konjunktiv II.",
    descriptionAr: "الاحتفالات والأعياد السنوية، صياغة الدعوات وقبولها والاعتذار عنها، حروف الجر الزمنية، الأعداد الترتيبية والتواريخ، وصيغة التمني والطلب المهذب Konjunktiv II.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'german_audio_lab',
        titleEn: "Invitations, Calendar & Polite Requests Studio",
        titleAr: "استوديو الدعوات والمواعيد والطلب المهذب",
        descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
        descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
      }
    ],
    lessons: [
      {
        id: 'th_de_ch4_l1',
        titleEn: "Feste feiern & Temporale Präpositionen (vor, nach, bei, in, ab, seit, bis) + Ordinalzahlen",
        titleAr: "الاحتفالات وحروف الجر الزمنية والأعداد الترتيبية للتواريخ",
        summaryEn: "Birthday and holiday celebrations, greeting conventions (Herzlichen Glückwunsch), temporal prepositions governing dative, and ordinal suffixes for dates.",
        summaryAr: "حفلات أعياد الميلاد والمناسبات، عبارات التهنئة، واستخدام حروف الزمان مع الداتيف (vor, nach, bei, in, seit)، وصياغة التواريخ بالأعداد الترتيبية.",
        theoryContentEn: "vor/nach/bei/in/seit + Dativ (seit einem Monat, vor dem Essen). Ordinal numbers: am ersten (1.), am zwanzigsten (20.).",
        theoryContentAr: "حروف الزمان الملازمة للداتيف: seit (منذ وما زال مستمراً)، vor (قبل وانتهى)، in (خلال فترة قادمة). وكتابة التواريخ بـ am + ten.",
        formulas: [
          {
                    "labelEn": "Temporal Dative Construction",
                    "labelAr": "صيغة حرف الزمان مع الداتيف",
                    "latex": "\\{\\text{vor, nach, bei, in, seit}\\} + \\text{Nomen im Dativ}"
          },
          {
                    "labelEn": "Calendar Date Formula",
                    "labelAr": "صيغة كتابة التواريخ بالتقويم",
                    "latex": "\\text{am} + \\text{Zahl} + \\text{-ten} + \\text{Monatsname}"
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-DE-CH04-L1',
          pageRange: '85-110'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Feste feiern & Temporale Präpositionen (vor, nach, bei, in, ab, seit, bis) + Ordinalzahlen",
          titleAr: "دليل المعلم التوجيهي: الاحتفالات وحروف الجر الزمنية والأعداد الترتيبية للتواريخ",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-DE-CH04-L1',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Feste feiern & Temporale Präpositionen (vor, nach, bei, in, ab, seit, bis) + Ordinalzahlen",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ الاحتفالات وحروف الجر الزمنية والأعداد الترتيبية للتواريخ",
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
          id: 'th_de_ch4_l1_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_audio_lab',
          titleEn: 'Invitations, Calendar & Polite Requests Studio',
          titleAr: 'استوديو الدعوات والمواعيد والطلب المهذب',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
      {
        id: 'th_de_ch4_l2',
        titleEn: "Einladungen, Höflicher Konjunktiv II (hätte gern, würde gern) & Nebensätze mit weil / dass",
        titleAr: "الدعوات، صيغة الطلب المهذب Konjunktiv II والروابط السببية weil و dass",
        summaryEn: "Accepting and declining invitations politely, polite requests using Konjunktiv II (würde gern, hätte gern, könnten Sie), and subordinate clauses placing conjugated verbs at sentence end.",
        summaryAr: "قبول الدعوات والاعتذار اللبق عنها، وصياغة الطلب الراقي بـ Konjunktiv II، وبناء الجمل التابعة برابط التعليل weil ورابط المفعولية dass.",
        theoryContentEn: "Konjunktiv II: Ich hätte gern ein Glas Wasser. Könnten Sie mir helfen? Subordinate clause: ..., weil ich heute keine Zeit habe.",
        theoryContentAr: "الطلب المهذب: Ich hätte gern (أود الحصول على) و Ich würde gern + مصدر (أود أن أفعل). وقاعدة weil/dass التي تنقل الفعل لنهاية الجملة.",
        formulas: [
          {
                    "labelEn": "Polite Request Formula",
                    "labelAr": "صيغة الطلب المهذب Konjunktiv II",
                    "latex": "\\text{Ich hätte gern} + \\text{Nomen} \\quad / \\quad \\text{Könnten Sie} + \\dots + \\text{Infinitiv?}"
          },
          {
                    "labelEn": "Subordinate Clause Word Order",
                    "labelAr": "ترتيب الكلمات في الجملة التابعة مع weil",
                    "latex": "\\dots, \\text{weil} + \\text{Subjekt} + \\dots + \\text{konjugiertes Verb (Ende)}."
          }
],
        moeRef: {
          bookTitleEn: 'Official Grade 12 German Curriculum (Hallo Deutsch)',
          bookTitleAr: 'الكتاب المدرسي الرسمي للغة الألمانية (Hallo Deutsch) - وزارة التربية والتعليم',
          grade: '12',
          term: 'Full Year',
          officialCode: 'TH-DE-CH04-L2',
          pageRange: '85-110'
        },
        lessonPlan: {
          titleEn: "Teacher Instructional Guide: Einladungen, Höflicher Konjunktiv II (hätte gern, würde gern) & Nebensätze mit weil / dass",
          titleAr: "دليل المعلم التوجيهي: الدعوات، صيغة الطلب المهذب Konjunktiv II والروابط السببية weil و dass",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: 'TH-DE-CH04-L2',
          bloomsObjectivesEn: [
            "Master communicative and grammatical principles of Einladungen, Höflicher Konjunktiv II (hätte gern, würde gern) & Nebensätze mit weil / dass",
            'Identify and correct common case inflection and word order errors',
            'Construct fluent situational dialogues conforming to ministerial examination standards'
          ],
          bloomsObjectivesAr: [
            "إتقان المفاهيم التواصلية والنحوية الحاكمة لـ الدعوات، صيغة الطلب المهذب Konjunktiv II والروابط السببية weil و dass",
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
          id: 'th_de_ch4_l2_ws',
          titleEn: 'German Language Assessment Worksheet',
          titleAr: 'ورقة عمل تقييمية لمادة اللغة الألمانية',
          descriptionEn: 'Solve the following grammatical, lexical, and situational problems.',
          descriptionAr: 'أجب عن التمارين النحوية والتواصلية وفق المعايير الوزارية المعتمدة.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'german_audio_lab',
          titleEn: 'Invitations, Calendar & Polite Requests Studio',
          titleAr: 'استوديو الدعوات والمواعيد والطلب المهذب',
          descriptionEn: 'Interactive German language audio, grammar, and situation simulator.',
          descriptionAr: 'محرك محاكاة تفاعلي لقواعد ونطق ومواقف اللغة الألمانية الرسمية.'
        }
      },
    ],
    solvedExamples: germanCh4SolvedExamples,
    exerciseProblems: germanCh4Exercises,
    databank: germanCh4Databank
  },
];


export const thanaweyaGermanBranch: Branch = {
  id: 'thanaweya_german',
  titleEn: 'German Language (Second Foreign Language - LV2)',
  titleAr: 'اللغة الألمانية (اللغة الأجنبية الثانية)',
  categoryEn: 'National Foreign Languages Track',
  categoryAr: 'مسار اللغات الأجنبية القومي',
  iconName: 'Languages',
  colorGradient: 'from-amber-600 via-red-600 to-stone-900',
  chapters
};
