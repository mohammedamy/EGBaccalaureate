import type { Branch, Chapter } from '../types/curriculum';
import { chineseCh1Databank } from './databanks/thanaweya/chineseCh1Databank';
import { chineseCh1SolvedExamples, chineseCh1Exercises } from './textbook/thanaweya/chineseCh1Textbook';
import { chineseCh2Databank } from './databanks/thanaweya/chineseCh2Databank';
import { chineseCh2SolvedExamples, chineseCh2Exercises } from './textbook/thanaweya/chineseCh2Textbook';
import { chineseCh3Databank } from './databanks/thanaweya/chineseCh3Databank';
import { chineseCh3SolvedExamples, chineseCh3Exercises } from './textbook/thanaweya/chineseCh3Textbook';
import { chineseCh4Databank } from './databanks/thanaweya/chineseCh4Databank';
import { chineseCh4SolvedExamples, chineseCh4Exercises } from './textbook/thanaweya/chineseCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'th_zh_ch1',
    chapterNumber: 1,
    titleEn: "Unit 1: Phonetics, Greetings, Personal Information & Basic Sentences",
    titleAr: "الوحدة الأولى: النظام الصوتي، التحيات والتعارف، وتراكيب الجمل البسيطة",
    descriptionEn: "Pinyin initials and finals, the 4 tones and tone sandhi rules, essential greetings, introductions, verb 是 (shì), personal pronouns, and interrogative particle 吗 (ma).",
    descriptionAr: "النظام الصوتي للبينيين، نغمات النطق الأربع وقواعد تغير النغمة الثالثة، التحيات والتعارف، فعل الكينونة 是، الضمائر الشخصية، وأداة الاستفهام 吗.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'chinese_language_studio',
        titleEn: "Chinese Pinyin, Tones & Grammar Studio",
        titleAr: "استوديو نغمات وصوتيات وقواعد اللغة الصينية",
        descriptionEn: 'Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.',
        descriptionAr: 'استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية.'
      }
    ],
    lessons: [
{
      "id": "th_zh_ch1_l1",
      "titleEn": "Lesson 1: Pinyin initials (Shengmu) and finals (Yunmu) classification & The 4 tones (声调) and tone sandhi rules (变调)",
      "titleAr": "الدرس الأول: تصنيف الحروف الاستهلالية (Shengmu) والنهائية (Yunmu) في البينيين و النغمات الصوتية الأربع وقواعد تغير النغمات (Tone Sandhi)",
      "summaryEn": "Foundational core concepts covering Pinyin initials (Shengmu) and finals (Yunmu) classification, syntactic rules, and communicative mastery.",
      "summaryAr": "المفاهيم التأسيسية والقواعد النحوية والتواصلية لـ تصنيف الحروف الاستهلالية (Shengmu) والنهائية (Yunmu) في البينيين والتراكيب اللغوية المرتبطة بها.",
      "theoryContentEn": "Comprehensive theoretical exposition on Chinese grammar: Standard Mandarin Pinyin has 21 consonant initials and 36 vowel finals that combine systematically to form all spoken syllables. Furthermore, When two 3rd tones appear consecutively (like 你 nǐ and 好 hǎo), the first 3rd tone changes into a 2nd rising tone (pronounced ní hǎo).",
      "theoryContentAr": "عرض نظري وتطبيقي شامل لقواعد اللغة الصينية: يتكون نظام البينيين في اللغة الصينية المعيارية من 21 حرفاً ساكناً استهلالياً و 36 مقطعاً صوتياً نهائياً تتحد لتكوين المقاطع الصوتية. كما يبرز التحليل النحوي أن: عند توالي نغمتين من النغمة الثالثة (مثل 你 nǐ و 好 hǎo)، تتحول النغمة الأولى وجوباً في النطق إلى نغمة ثانية صاعدة (تُنطق ní hǎo).",
      "formulas": [
            {
                  "labelEn": "Standard Chinese Sentence Pattern",
                  "labelAr": "قالب الجملة الصينية الأساسي",
                  "latex": "\\text{Subject} + \\text{Time/Location} + \\text{Adverb} + \\text{Verb} + \\text{Object}"
            },
            {
                  "labelEn": "Modifier and Attribution Formula",
                  "labelAr": "صيغة الوصف والإضافة مع أداة 的",
                  "latex": "\\text{Modifier (Attributive)} + \\text{的} + \\text{Head Noun}"
            }
      ],
      "moeRef": {
            "bookTitleEn": "Kuai Le Han Yu / Gateway to China - MoE",
            "bookTitleAr": "كتاب اللغة الصينية للثانوية العامة - وزارة التربية والتعليم",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "TH-ZH-CH01-L1",
            "pageRange": "1-35"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Pinyin initials (Shengmu) and finals (Yunmu) classification",
            "titleAr": "خطة تدريس الدرس: تصنيف الحروف الاستهلالية (Shengmu) والنهائية (Yunmu) في البينيين",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "TH-ZH-CH01-L1",
            "bloomsObjectivesEn": [
                  "Master core grammatical and phonological principles of Pinyin initials (Shengmu) and finals (Yunmu) classification",
                  "Identify and rectify common phonetic tone and word order errors",
                  "Construct fluent communicative dialogues conforming to ministerial examination standards"
            ],
            "bloomsObjectivesAr": [
                  "إتقان القواعد الصوتية والنحوية الحاكمة لـ تصنيف الحروف الاستهلالية (Shengmu) والنهائية (Yunmu) في البينيين",
                  "التمييز بين النغمات الصوتية وتجنب أخطاء ترتيب الكلمات في الجملة الصينية",
                  "صياغة حوارات تواصلية دقيقة مطابقة لمعايير الورقة الامتحانية الرسمية"
            ],
            "prerequisitesEn": [
                  "Basic Pinyin pronunciation",
                  "Fundamental Chinese character stroke knowledge"
            ],
            "prerequisitesAr": [
                  "معرفة أصوات البينيين الأساسية",
                  "الإلمام بضربات الرموز الصينية البسيطة"
            ],
            "keyVocabularyEn": [
                  {
                        "term": "Pinyin (拼音)",
                        "definition": "Official phonetic romanization system for Standard Mandarin Chinese"
                  },
                  {
                        "term": "Shengdiao (声调)",
                        "definition": "Tonal pitch contour that determines word lexical meaning"
                  }
            ],
            "keyVocabularyAr": [
                  {
                        "term": "بينيين (拼音)",
                        "definition": "نظام النقحرة والترميز الصوتي الرسمي للغة الصينية القياسية"
                  },
                  {
                        "term": "النغمة الصوتية (声调)",
                        "definition": "طبقة الصوت التي تحدد المعنى الدلالي للمفردة الصينية"
                  }
            ],
            "teachingPacing": [
                  {
                        "phaseEn": "Phonetic & Communicative Warm-Up",
                        "phaseAr": "التهيئة الصوتية والموقف التواصلي",
                        "duration": "15 min",
                        "activitiesEn": "Audio listening, tone pitch drills, and interactive pronunciation playback",
                        "activitiesAr": "الاستماع للصوتيات والتدريب على طبقات النغمات والتكرار الصوتي التفاعلي"
                  },
                  {
                        "phaseEn": "Grammar Deconstruction & Syntax Drills",
                        "phaseAr": "تفكيك القواعد والتدريب التواصلي المكثف",
                        "duration": "75 min",
                        "activitiesEn": "Sentence pattern reconstruction, measure word matching, and ministerial databank exercises",
                        "activitiesAr": "إعادة تركيب الجمل، مطابقة أدوات القياس، وحل تدريبات بنك الأسئلة الوزاري"
                  }
            ],
            "commonMisconceptionsEn": [
                  "Confusing tone contours leading to unintended word meanings (e.g. mā mother vs mǎ horse)",
                  "Placing time adverbials at the end of the sentence following European language syntax"
            ],
            "commonMisconceptionsAr": [
                  "الخلط بين النغمات الصوتية مما يغير معنى الكلمة كلياً (مثل mā أم و mǎ حصان)",
                  "وضع الظروف الزمانية في ذيل الجملة تأثراً باللغات الغربية ومخالفة لقواعد الصينية"
            ]
      },
      "worksheet": {
            "id": "th_zh_ch1_l1_ws",
            "titleEn": "Worksheet: Pinyin initials (Shengmu) and finals (Yunmu) classification",
            "titleAr": "ورقة عمل: تصنيف الحروف الاستهلالية (Shengmu) والنهائية (Yunmu) في البينيين",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_pinyin_tones_lab",
            "titleEn": "Pinyin initials (Shengmu) and finals (Yunmu) classification Interactive Lab",
            "titleAr": "مختبر تفاعلي: تصنيف الحروف الاستهلالية (Shengmu) والنهائية (Yunmu) في البينيين",
            "descriptionEn": "Interactive Chinese language pronunciation, stroke order, grammar, and listening station.",
            "descriptionAr": "محطة تفاعلية لصوتيات وكتابة ونحو واستماع اللغة الصينية المعتمدة."
      }
},
{
      "id": "th_zh_ch1_l2",
      "titleEn": "Lesson 2: The copula verb 是 (shì) and equational sentence patterns & Communicative Practice",
      "titleAr": "الدرس الثاني: فعل الكينونة 是 والجمل الاسمية والمعادلات التعريفية والتطبيق التواصلي",
      "summaryEn": "Advanced applications covering The copula verb 是 (shì) and equational sentence patterns, practical dialogues, and ministerial exam preparation.",
      "summaryAr": "التطبيقات المتقدمة لـ فعل الكينونة 是 والجمل الاسمية والمعادلات التعريفية، حوارات المواقف الواقعية، والتدريب على نمط الامتحانات الرسمية.",
      "theoryContentEn": "Syntactic nuances and examination strategies: Unlike European languages, 是 cannot link a subject with an adjective predicate; adjectives in Chinese act directly as verbal predicates with 很 (hěn). Situational mastery: Plural personal pronouns are formed by appending 们 (men) to singular pronouns: 我们 (we), 你们 (you pl.), 他们 (they).",
      "theoryContentAr": "الرؤية النحوية المتقدمة واستراتيجيات الامتحان: على خلاف اللغات الأوروبية، لا يُستخدم فعل 是 للربط بين الفاعل والصفة؛ بل تسند الصفات مباشرة إلى الفاعل بواسطة ظرف التوكيد 很 (hěn). والتطبيق التواصلي للمواقف: تُصاغ ضمائر الجمع بإضافة اللاحقة 们 (men) إلى الضمائر المفردة: 我们 (نحن)، 你们 (أنتم)، 他们 (هم).",
      "formulas": [
            {
                  "labelEn": "Modal and Auxiliary Verb Pattern",
                  "labelAr": "قالب الأفعال المساعدة في الجملة الصينية",
                  "latex": "\\text{Subject} + \\text{Modal Verb (想/要/会)} + \\text{Verb Phrase}"
            },
            {
                  "labelEn": "Question Formulation with Particles",
                  "labelAr": "صيغة الاستفهام بالأدوات الصريحة",
                  "latex": "\\text{Declarative Clause} + \\text{吗 / 呢 / 吧} ?"
            }
      ],
      "moeRef": {
            "bookTitleEn": "Kuai Le Han Yu / Gateway to China - MoE",
            "bookTitleAr": "كتاب اللغة الصينية للثانوية العامة - وزارة التربية والتعليم",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "TH-ZH-CH01-L2",
            "pageRange": "16-35"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: The copula verb 是 (shì) and equational sentence patterns",
            "titleAr": "خطة تدريس الدرس: فعل الكينونة 是 والجمل الاسمية والمعادلات التعريفية",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "TH-ZH-CH01-L2",
            "bloomsObjectivesEn": [
                  "Apply nuanced syntactic rules of The copula verb 是 (shì) and equational sentence patterns",
                  "Master situational comprehension in listening and reading exam scenarios",
                  "Achieve fluency in written character construction and vocabulary retention"
            ],
            "bloomsObjectivesAr": [
                  "تطبيق القواعد الدقيقة لـ فعل الكينونة 是 والجمل الاسمية والمعادلات التعريفية",
                  "إتقان فهم المواقف اليومية في أسئلة الاستماع والقراءة الورقية",
                  "تحقيق الدقة في بناء الرموز وتوظيف المفردات في سياقاتها الامتحانية المعتمدة"
            ],
            "prerequisitesEn": [
                  "Lesson 1 grammar structures",
                  "Tone sandhi mastery"
            ],
            "prerequisitesAr": [
                  "استيعاب قواعد الدرس الأول",
                  "إتقان تغيرات النغمات في الحديث المسترسل"
            ],
            "keyVocabularyEn": [
                  {
                        "term": "Liangci (量词)",
                        "definition": "Measure words/classifiers mandatory between numerals and nouns"
                  },
                  {
                        "term": "Yufa (语法)",
                        "definition": "Chinese grammar and structural sentence order"
                  }
            ],
            "keyVocabularyAr": [
                  {
                        "term": "أداة القياس (量词)",
                        "definition": "كلمة تصنيفية إلزامية تفصل بين العدد والاسم المعدود"
                  },
                  {
                        "term": "النحو والتركيب (语法)",
                        "definition": "القواعد الصينية الحاكمة لترتيب عناصر الجملة"
                  }
            ],
            "teachingPacing": [
                  {
                        "phaseEn": "Review & Situational Immersion",
                        "phaseAr": "المراجعة والانغماس في الموقف التواصلي",
                        "duration": "15 min",
                        "activitiesEn": "Conversational pair-work, dialogue analysis, and listening audio track comprehension",
                        "activitiesAr": "محادثة ثنائية، تحليل حوار الموقف اليومي، والاستماع للتسجيل الوزاري"
                  },
                  {
                        "phaseEn": "Exam Synthesis & Practice Testing",
                        "phaseAr": "التطبيق الامتحاني وحل المسائل التدريبية",
                        "duration": "75 min",
                        "activitiesEn": "Solving high-order thinking databank questions and peer character radical analysis",
                        "activitiesAr": "حل أسئلة المستويات العليا من بنك الأسئلة وتحليل بنية الرموز والجذور"
                  }
            ],
            "commonMisconceptionsEn": [
                  "Using the wrong measure word with specific nouns (e.g. using 个 for books instead of 本)",
                  "Negating auxiliary or resultative complements with 不 instead of 没有"
            ],
            "commonMisconceptionsAr": [
                  "استخدام أداة قياس غير ملائمة للاسم كاستخدام 个 مع الكتب بدلاً من 本",
                  "نفي مكملات النتيجة والأفعال بـ 不 بدلاً من أداة النفي الحصرية 没有"
            ]
      },
      "worksheet": {
            "id": "th_zh_ch1_l2_ws",
            "titleEn": "Worksheet: The copula verb 是 (shì) and equational sentence patterns",
            "titleAr": "ورقة عمل: فعل الكينونة 是 والجمل الاسمية والمعادلات التعريفية",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_language_studio",
            "titleEn": "The copula verb 是 (shì) and equational sentence patterns Studio",
            "titleAr": "استوديو تفاعلي: فعل الكينونة 是 والجمل الاسمية والمعادلات التعريفية",
            "descriptionEn": "Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.",
            "descriptionAr": "استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية."
      }
}
    ],
    solvedExamples: chineseCh1SolvedExamples,
    exerciseProblems: chineseCh1Exercises,
    databank: chineseCh1Databank
  },
  {
    id: 'th_zh_ch2',
    chapterNumber: 2,
    titleEn: "Unit 2: Family, Numbers, Age, Date & Time",
    titleAr: "الوحدة الثانية: العائلة، الأعداد، التعبير عن العمر، والتاريخ والوقت",
    descriptionEn: "Cardinal numbers 1-100, expressing family kinship terms, age with 岁, existence and possession with 有/没有, measure words 个 and 口, and the Chinese temporal hierarchy.",
    descriptionAr: "الأعداد من 1 إلى 100، مفردات القرابة والأسرة، التعبير عن العمر بـ 岁، الملكية والوجود بـ 有/没有، أدوات القياس 个 و 口، والتسلسل الزمني الصيني.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'chinese_language_studio',
        titleEn: "Family, Calendar & Cultural Chinese Studio",
        titleAr: "استوديو العائلة والتقويم والثقافة الصينية",
        descriptionEn: 'Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.',
        descriptionAr: 'استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية.'
      }
    ],
    lessons: [
{
      "id": "th_zh_ch2_l1",
      "titleEn": "Lesson 1: Mandarin numeral system from 1 to 100 and compound formation & Family relations, kinship terms, and measure word 口 (kǒu)",
      "titleAr": "الدرس الأول: نظام الأعداد الصينية من 1 إلى 100 وقواعد تركيب العشرات والمئات و صلات القرابة في العائلة واستخدام أداة قياس أفراد الأسرة 口",
      "summaryEn": "Foundational core concepts covering Mandarin numeral system from 1 to 100 and compound formation, syntactic rules, and communicative mastery.",
      "summaryAr": "المفاهيم التأسيسية والقواعد النحوية والتواصلية لـ نظام الأعداد الصينية من 1 إلى 100 وقواعد تركيب العشرات والمئات والتراكيب اللغوية المرتبطة بها.",
      "theoryContentEn": "Comprehensive theoretical exposition on Chinese grammar: Numbers 1 to 10 are 一, 二, 三, 四, 五, 六, 七, 八, 九, 十; compound numbers combine tens and units systematically (二十五 = 25). Furthermore, The specific measure word 口 (kǒu) is traditionally used when counting household family members: 我家有四口人 (There are four people in my family).",
      "theoryContentAr": "عرض نظري وتطبيقي شامل لقواعد اللغة الصينية: الأعداد الأساسية من 1 إلى 10 هي: 一, 二, 三, 四, 五, 六, 七, 八, 九, 十، ويُركب ما بعدها بانتظام: 二十五 تعني 25. كما يبرز التحليل النحوي أن: تُستخدم أداة القياس 口 (kǒu) خصيصاً لعد أفراد الأسرة المقيمين في المنزل: 我家有四口人 (أسرتي تتكون من أربعة أفراد).",
      "formulas": [
            {
                  "labelEn": "Standard Chinese Sentence Pattern",
                  "labelAr": "قالب الجملة الصينية الأساسي",
                  "latex": "\\text{Subject} + \\text{Time/Location} + \\text{Adverb} + \\text{Verb} + \\text{Object}"
            },
            {
                  "labelEn": "Modifier and Attribution Formula",
                  "labelAr": "صيغة الوصف والإضافة مع أداة 的",
                  "latex": "\\text{Modifier (Attributive)} + \\text{的} + \\text{Head Noun}"
            }
      ],
      "moeRef": {
            "bookTitleEn": "Kuai Le Han Yu / Gateway to China - MoE",
            "bookTitleAr": "كتاب اللغة الصينية للثانوية العامة - وزارة التربية والتعليم",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "TH-ZH-CH02-L1",
            "pageRange": "36-70"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Mandarin numeral system from 1 to 100 and compound formation",
            "titleAr": "خطة تدريس الدرس: نظام الأعداد الصينية من 1 إلى 100 وقواعد تركيب العشرات والمئات",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "TH-ZH-CH02-L1",
            "bloomsObjectivesEn": [
                  "Master core grammatical and phonological principles of Mandarin numeral system from 1 to 100 and compound formation",
                  "Identify and rectify common phonetic tone and word order errors",
                  "Construct fluent communicative dialogues conforming to ministerial examination standards"
            ],
            "bloomsObjectivesAr": [
                  "إتقان القواعد الصوتية والنحوية الحاكمة لـ نظام الأعداد الصينية من 1 إلى 100 وقواعد تركيب العشرات والمئات",
                  "التمييز بين النغمات الصوتية وتجنب أخطاء ترتيب الكلمات في الجملة الصينية",
                  "صياغة حوارات تواصلية دقيقة مطابقة لمعايير الورقة الامتحانية الرسمية"
            ],
            "prerequisitesEn": [
                  "Basic Pinyin pronunciation",
                  "Fundamental Chinese character stroke knowledge"
            ],
            "prerequisitesAr": [
                  "معرفة أصوات البينيين الأساسية",
                  "الإلمام بضربات الرموز الصينية البسيطة"
            ],
            "keyVocabularyEn": [
                  {
                        "term": "Pinyin (拼音)",
                        "definition": "Official phonetic romanization system for Standard Mandarin Chinese"
                  },
                  {
                        "term": "Shengdiao (声调)",
                        "definition": "Tonal pitch contour that determines word lexical meaning"
                  }
            ],
            "keyVocabularyAr": [
                  {
                        "term": "بينيين (拼音)",
                        "definition": "نظام النقحرة والترميز الصوتي الرسمي للغة الصينية القياسية"
                  },
                  {
                        "term": "النغمة الصوتية (声调)",
                        "definition": "طبقة الصوت التي تحدد المعنى الدلالي للمفردة الصينية"
                  }
            ],
            "teachingPacing": [
                  {
                        "phaseEn": "Phonetic & Communicative Warm-Up",
                        "phaseAr": "التهيئة الصوتية والموقف التواصلي",
                        "duration": "15 min",
                        "activitiesEn": "Audio listening, tone pitch drills, and interactive pronunciation playback",
                        "activitiesAr": "الاستماع للصوتيات والتدريب على طبقات النغمات والتكرار الصوتي التفاعلي"
                  },
                  {
                        "phaseEn": "Grammar Deconstruction & Syntax Drills",
                        "phaseAr": "تفكيك القواعد والتدريب التواصلي المكثف",
                        "duration": "75 min",
                        "activitiesEn": "Sentence pattern reconstruction, measure word matching, and ministerial databank exercises",
                        "activitiesAr": "إعادة تركيب الجمل، مطابقة أدوات القياس، وحل تدريبات بنك الأسئلة الوزاري"
                  }
            ],
            "commonMisconceptionsEn": [
                  "Confusing tone contours leading to unintended word meanings (e.g. mā mother vs mǎ horse)",
                  "Placing time adverbials at the end of the sentence following European language syntax"
            ],
            "commonMisconceptionsAr": [
                  "الخلط بين النغمات الصوتية مما يغير معنى الكلمة كلياً (مثل mā أم و mǎ حصان)",
                  "وضع الظروف الزمانية في ذيل الجملة تأثراً باللغات الغربية ومخالفة لقواعد الصينية"
            ]
      },
      "worksheet": {
            "id": "th_zh_ch2_l1_ws",
            "titleEn": "Worksheet: Mandarin numeral system from 1 to 100 and compound formation",
            "titleAr": "ورقة عمل: نظام الأعداد الصينية من 1 إلى 100 وقواعد تركيب العشرات والمئات",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_hanzi_radicals_lab",
            "titleEn": "Mandarin numeral system from 1 to 100 and compound formation Interactive Lab",
            "titleAr": "مختبر تفاعلي: نظام الأعداد الصينية من 1 إلى 100 وقواعد تركيب العشرات والمئات",
            "descriptionEn": "Interactive Chinese language pronunciation, stroke order, grammar, and listening station.",
            "descriptionAr": "محطة تفاعلية لصوتيات وكتابة ونحو واستماع اللغة الصينية المعتمدة."
      }
},
{
      "id": "th_zh_ch2_l2",
      "titleEn": "Lesson 2: Expressing possession and existence with 有 (yǒu) and negative 没有 & Communicative Practice",
      "titleAr": "الدرس الثاني: التعبير عن الملكية والوجود باستخدام فعل 有 ونفيه الحصري بـ 没有 والتطبيق التواصلي",
      "summaryEn": "Advanced applications covering Expressing possession and existence with 有 (yǒu) and negative 没有, practical dialogues, and ministerial exam preparation.",
      "summaryAr": "التطبيقات المتقدمة لـ التعبير عن الملكية والوجود باستخدام فعل 有 ونفيه الحصري بـ 没有، حوارات المواقف الواقعية، والتدريب على نمط الامتحانات الرسمية.",
      "theoryContentEn": "Syntactic nuances and examination strategies: When expressing existence of unknown quantities in questions, 有 is paired with 多少 or 几 (你有几个兄弟姐妹？). Situational mastery: Age is expressed directly by stating the number followed by 岁 (suì): 我今年十八岁 (I am 18 years old this year).",
      "theoryContentAr": "الرؤية النحوية المتقدمة واستراتيجيات الامتحان: عند السؤال عن العدد المملوك غير المحدد، يُقرن فعل 有 بأسماء الاستفهام 几 (للأعداد دون 10) أو 多少 (للكميات الأكبر). والتطبيق التواصلي للمواقف: يُعبر عن العمر بذكر العدد متبوعاً بكلمة 岁 (suì): 我今年十八岁 (أنا في الثامنة عشرة من عمري هذا العام).",
      "formulas": [
            {
                  "labelEn": "Modal and Auxiliary Verb Pattern",
                  "labelAr": "قالب الأفعال المساعدة في الجملة الصينية",
                  "latex": "\\text{Subject} + \\text{Modal Verb (想/要/会)} + \\text{Verb Phrase}"
            },
            {
                  "labelEn": "Question Formulation with Particles",
                  "labelAr": "صيغة الاستفهام بالأدوات الصريحة",
                  "latex": "\\text{Declarative Clause} + \\text{吗 / 呢 / 吧} ?"
            }
      ],
      "moeRef": {
            "bookTitleEn": "Kuai Le Han Yu / Gateway to China - MoE",
            "bookTitleAr": "كتاب اللغة الصينية للثانوية العامة - وزارة التربية والتعليم",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "TH-ZH-CH02-L2",
            "pageRange": "51-70"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Expressing possession and existence with 有 (yǒu) and negative 没有",
            "titleAr": "خطة تدريس الدرس: التعبير عن الملكية والوجود باستخدام فعل 有 ونفيه الحصري بـ 没有",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "TH-ZH-CH02-L2",
            "bloomsObjectivesEn": [
                  "Apply nuanced syntactic rules of Expressing possession and existence with 有 (yǒu) and negative 没有",
                  "Master situational comprehension in listening and reading exam scenarios",
                  "Achieve fluency in written character construction and vocabulary retention"
            ],
            "bloomsObjectivesAr": [
                  "تطبيق القواعد الدقيقة لـ التعبير عن الملكية والوجود باستخدام فعل 有 ونفيه الحصري بـ 没有",
                  "إتقان فهم المواقف اليومية في أسئلة الاستماع والقراءة الورقية",
                  "تحقيق الدقة في بناء الرموز وتوظيف المفردات في سياقاتها الامتحانية المعتمدة"
            ],
            "prerequisitesEn": [
                  "Lesson 1 grammar structures",
                  "Tone sandhi mastery"
            ],
            "prerequisitesAr": [
                  "استيعاب قواعد الدرس الأول",
                  "إتقان تغيرات النغمات في الحديث المسترسل"
            ],
            "keyVocabularyEn": [
                  {
                        "term": "Liangci (量词)",
                        "definition": "Measure words/classifiers mandatory between numerals and nouns"
                  },
                  {
                        "term": "Yufa (语法)",
                        "definition": "Chinese grammar and structural sentence order"
                  }
            ],
            "keyVocabularyAr": [
                  {
                        "term": "أداة القياس (量词)",
                        "definition": "كلمة تصنيفية إلزامية تفصل بين العدد والاسم المعدود"
                  },
                  {
                        "term": "النحو والتركيب (语法)",
                        "definition": "القواعد الصينية الحاكمة لترتيب عناصر الجملة"
                  }
            ],
            "teachingPacing": [
                  {
                        "phaseEn": "Review & Situational Immersion",
                        "phaseAr": "المراجعة والانغماس في الموقف التواصلي",
                        "duration": "15 min",
                        "activitiesEn": "Conversational pair-work, dialogue analysis, and listening audio track comprehension",
                        "activitiesAr": "محادثة ثنائية، تحليل حوار الموقف اليومي، والاستماع للتسجيل الوزاري"
                  },
                  {
                        "phaseEn": "Exam Synthesis & Practice Testing",
                        "phaseAr": "التطبيق الامتحاني وحل المسائل التدريبية",
                        "duration": "75 min",
                        "activitiesEn": "Solving high-order thinking databank questions and peer character radical analysis",
                        "activitiesAr": "حل أسئلة المستويات العليا من بنك الأسئلة وتحليل بنية الرموز والجذور"
                  }
            ],
            "commonMisconceptionsEn": [
                  "Using the wrong measure word with specific nouns (e.g. using 个 for books instead of 本)",
                  "Negating auxiliary or resultative complements with 不 instead of 没有"
            ],
            "commonMisconceptionsAr": [
                  "استخدام أداة قياس غير ملائمة للاسم كاستخدام 个 مع الكتب بدلاً من 本",
                  "نفي مكملات النتيجة والأفعال بـ 不 بدلاً من أداة النفي الحصرية 没有"
            ]
      },
      "worksheet": {
            "id": "th_zh_ch2_l2_ws",
            "titleEn": "Worksheet: Expressing possession and existence with 有 (yǒu) and negative 没有",
            "titleAr": "ورقة عمل: التعبير عن الملكية والوجود باستخدام فعل 有 ونفيه الحصري بـ 没有",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_language_studio",
            "titleEn": "Expressing possession and existence with 有 (yǒu) and negative 没有 Studio",
            "titleAr": "استوديو تفاعلي: التعبير عن الملكية والوجود باستخدام فعل 有 ونفيه الحصري بـ 没有",
            "descriptionEn": "Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.",
            "descriptionAr": "استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية."
      }
}
    ],
    solvedExamples: chineseCh2SolvedExamples,
    exerciseProblems: chineseCh2Exercises,
    databank: chineseCh2Databank
  },
  {
    id: 'th_zh_ch3',
    chapterNumber: 3,
    titleEn: "Unit 3: School Life, Studies, Hobbies & Daily Routine",
    titleAr: "الوحدة الثالثة: الحياة المدرسية، المواد الدراسية، الهوايات والروتين اليومي",
    descriptionEn: "School subjects, daily schedule, time adverbial placement, hobbies and sports, modal verbs 喜欢, 想, and 要, and location preposition 在 (zài).",
    descriptionAr: "المواد الدراسية والجدول المدرسي، موقع الظروف الزمنية في الجملة، الهوايات والرياضات، الأفعال المساعدة 喜欢 و 想 و 要، وحرف الجر المكاني 在.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'chinese_language_studio',
        titleEn: "Daily Life, Tech & Advanced Syntax Studio",
        titleAr: "استوديو الحياة اليومية والتقنية والتراكيب المتقدمة",
        descriptionEn: 'Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.',
        descriptionAr: 'استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية.'
      }
    ],
    lessons: [
{
      "id": "th_zh_ch3_l1",
      "titleEn": "Lesson 1: School subjects, academic curriculum, and classroom activities & Time adverbial word order: Subject + Time + Verb vs Time + Subject + Verb",
      "titleAr": "الدرس الأول: المواد الدراسية، المناهج الأكاديمية والأنشطة الصفية و بناء الجملة وموقع الظرف الزماني بالنسبة للفاعل والفعل",
      "summaryEn": "Foundational core concepts covering School subjects, academic curriculum, and classroom activities, syntactic rules, and communicative mastery.",
      "summaryAr": "المفاهيم التأسيسية والقواعد النحوية والتواصلية لـ المواد الدراسية، المناهج الأكاديمية والأنشطة الصفية والتراكيب اللغوية المرتبطة بها.",
      "theoryContentEn": "Comprehensive theoretical exposition on Chinese grammar: School subjects include 汉语 (Chinese), 英语 (English), 数学 (Mathematics), 历史 (History), and 科学 (Science). Furthermore, Correct: 我早上七点去学校 (I go to school at 7 am) OR 早上七点我去学校; *我去看学校早上七点 is strictly incorrect.",
      "theoryContentAr": "عرض نظري وتطبيقي شامل لقواعد اللغة الصينية: تشمل المواد الدراسية المقررة: اللغة الصينية (汉语)، اللغة الإنجليزية (英语)، الرياضيات (数学)، التاريخ (历史)، والعلوم (科学). كما يبرز التحليل النحوي أن: الصيغة السليمة: 我早上七点去学校 أو 早上七点我去学校، ويحظر وضع الزمان في نهاية الجملة كما في اللغات الغربية.",
      "formulas": [
            {
                  "labelEn": "Standard Chinese Sentence Pattern",
                  "labelAr": "قالب الجملة الصينية الأساسي",
                  "latex": "\\text{Subject} + \\text{Time/Location} + \\text{Adverb} + \\text{Verb} + \\text{Object}"
            },
            {
                  "labelEn": "Modifier and Attribution Formula",
                  "labelAr": "صيغة الوصف والإضافة مع أداة 的",
                  "latex": "\\text{Modifier (Attributive)} + \\text{的} + \\text{Head Noun}"
            }
      ],
      "moeRef": {
            "bookTitleEn": "Kuai Le Han Yu / Gateway to China - MoE",
            "bookTitleAr": "كتاب اللغة الصينية للثانوية العامة - وزارة التربية والتعليم",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "TH-ZH-CH03-L1",
            "pageRange": "71-105"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: School subjects, academic curriculum, and classroom activities",
            "titleAr": "خطة تدريس الدرس: المواد الدراسية، المناهج الأكاديمية والأنشطة الصفية",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "TH-ZH-CH03-L1",
            "bloomsObjectivesEn": [
                  "Master core grammatical and phonological principles of School subjects, academic curriculum, and classroom activities",
                  "Identify and rectify common phonetic tone and word order errors",
                  "Construct fluent communicative dialogues conforming to ministerial examination standards"
            ],
            "bloomsObjectivesAr": [
                  "إتقان القواعد الصوتية والنحوية الحاكمة لـ المواد الدراسية، المناهج الأكاديمية والأنشطة الصفية",
                  "التمييز بين النغمات الصوتية وتجنب أخطاء ترتيب الكلمات في الجملة الصينية",
                  "صياغة حوارات تواصلية دقيقة مطابقة لمعايير الورقة الامتحانية الرسمية"
            ],
            "prerequisitesEn": [
                  "Basic Pinyin pronunciation",
                  "Fundamental Chinese character stroke knowledge"
            ],
            "prerequisitesAr": [
                  "معرفة أصوات البينيين الأساسية",
                  "الإلمام بضربات الرموز الصينية البسيطة"
            ],
            "keyVocabularyEn": [
                  {
                        "term": "Pinyin (拼音)",
                        "definition": "Official phonetic romanization system for Standard Mandarin Chinese"
                  },
                  {
                        "term": "Shengdiao (声调)",
                        "definition": "Tonal pitch contour that determines word lexical meaning"
                  }
            ],
            "keyVocabularyAr": [
                  {
                        "term": "بينيين (拼音)",
                        "definition": "نظام النقحرة والترميز الصوتي الرسمي للغة الصينية القياسية"
                  },
                  {
                        "term": "النغمة الصوتية (声调)",
                        "definition": "طبقة الصوت التي تحدد المعنى الدلالي للمفردة الصينية"
                  }
            ],
            "teachingPacing": [
                  {
                        "phaseEn": "Phonetic & Communicative Warm-Up",
                        "phaseAr": "التهيئة الصوتية والموقف التواصلي",
                        "duration": "15 min",
                        "activitiesEn": "Audio listening, tone pitch drills, and interactive pronunciation playback",
                        "activitiesAr": "الاستماع للصوتيات والتدريب على طبقات النغمات والتكرار الصوتي التفاعلي"
                  },
                  {
                        "phaseEn": "Grammar Deconstruction & Syntax Drills",
                        "phaseAr": "تفكيك القواعد والتدريب التواصلي المكثف",
                        "duration": "75 min",
                        "activitiesEn": "Sentence pattern reconstruction, measure word matching, and ministerial databank exercises",
                        "activitiesAr": "إعادة تركيب الجمل، مطابقة أدوات القياس، وحل تدريبات بنك الأسئلة الوزاري"
                  }
            ],
            "commonMisconceptionsEn": [
                  "Confusing tone contours leading to unintended word meanings (e.g. mā mother vs mǎ horse)",
                  "Placing time adverbials at the end of the sentence following European language syntax"
            ],
            "commonMisconceptionsAr": [
                  "الخلط بين النغمات الصوتية مما يغير معنى الكلمة كلياً (مثل mā أم و mǎ حصان)",
                  "وضع الظروف الزمانية في ذيل الجملة تأثراً باللغات الغربية ومخالفة لقواعد الصينية"
            ]
      },
      "worksheet": {
            "id": "th_zh_ch3_l1_ws",
            "titleEn": "Worksheet: School subjects, academic curriculum, and classroom activities",
            "titleAr": "ورقة عمل: المواد الدراسية، المناهج الأكاديمية والأنشطة الصفية",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_grammar_patterns_lab",
            "titleEn": "School subjects, academic curriculum, and classroom activities Interactive Lab",
            "titleAr": "مختبر تفاعلي: المواد الدراسية، المناهج الأكاديمية والأنشطة الصفية",
            "descriptionEn": "Interactive Chinese language pronunciation, stroke order, grammar, and listening station.",
            "descriptionAr": "محطة تفاعلية لصوتيات وكتابة ونحو واستماع اللغة الصينية المعتمدة."
      }
},
{
      "id": "th_zh_ch3_l2",
      "titleEn": "Lesson 2: Expressing hobbies, leisure activities, and verb 喜欢 (xǐhuan) & Communicative Practice",
      "titleAr": "الدرس الثاني: التعبير عن الهوايات والاهتمامات باستخدام الفعل 喜欢 والتطبيق التواصلي",
      "summaryEn": "Advanced applications covering Expressing hobbies, leisure activities, and verb 喜欢 (xǐhuan), practical dialogues, and ministerial exam preparation.",
      "summaryAr": "التطبيقات المتقدمة لـ التعبير عن الهوايات والاهتمامات باستخدام الفعل 喜欢، حوارات المواقف الواقعية، والتدريب على نمط الامتحانات الرسمية.",
      "theoryContentEn": "Syntactic nuances and examination strategies: Ball sports use distinct verbs: 打 (dǎ: hit/play with hands: 打篮球, 打网球) vs 踢 (tī: kick with feet: 踢足球). Situational mastery: 想 (xiǎng) expresses a wish/desire (would like to), 要 (yào) expresses a firm plan/intention (will/must), and 会 (huì) expresses acquired ability (can).",
      "theoryContentAr": "الرؤية النحوية المتقدمة واستراتيجيات الامتحان: تميز اللغة الصينية بدقة بين أفعال الرياضة: يُستخدم 打 للرياضات المعتمدة على اليد (打篮球 السلة)، بينما يُستخدم 踢 للقدم (踢足球 كرة القدم). والتطبيق التواصلي للمواقف: يعبر 想 عن الرغبة والأمنية (أود أن)، ويعبر 要 عن العزم والنية المؤكدة (سوف / أريد حتماً)، بينما يعبر 会 عن المهارة المكتسبة بالتعلم.",
      "formulas": [
            {
                  "labelEn": "Modal and Auxiliary Verb Pattern",
                  "labelAr": "قالب الأفعال المساعدة في الجملة الصينية",
                  "latex": "\\text{Subject} + \\text{Modal Verb (想/要/会)} + \\text{Verb Phrase}"
            },
            {
                  "labelEn": "Question Formulation with Particles",
                  "labelAr": "صيغة الاستفهام بالأدوات الصريحة",
                  "latex": "\\text{Declarative Clause} + \\text{吗 / 呢 / 吧} ?"
            }
      ],
      "moeRef": {
            "bookTitleEn": "Kuai Le Han Yu / Gateway to China - MoE",
            "bookTitleAr": "كتاب اللغة الصينية للثانوية العامة - وزارة التربية والتعليم",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "TH-ZH-CH03-L2",
            "pageRange": "86-105"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Expressing hobbies, leisure activities, and verb 喜欢 (xǐhuan)",
            "titleAr": "خطة تدريس الدرس: التعبير عن الهوايات والاهتمامات باستخدام الفعل 喜欢",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "TH-ZH-CH03-L2",
            "bloomsObjectivesEn": [
                  "Apply nuanced syntactic rules of Expressing hobbies, leisure activities, and verb 喜欢 (xǐhuan)",
                  "Master situational comprehension in listening and reading exam scenarios",
                  "Achieve fluency in written character construction and vocabulary retention"
            ],
            "bloomsObjectivesAr": [
                  "تطبيق القواعد الدقيقة لـ التعبير عن الهوايات والاهتمامات باستخدام الفعل 喜欢",
                  "إتقان فهم المواقف اليومية في أسئلة الاستماع والقراءة الورقية",
                  "تحقيق الدقة في بناء الرموز وتوظيف المفردات في سياقاتها الامتحانية المعتمدة"
            ],
            "prerequisitesEn": [
                  "Lesson 1 grammar structures",
                  "Tone sandhi mastery"
            ],
            "prerequisitesAr": [
                  "استيعاب قواعد الدرس الأول",
                  "إتقان تغيرات النغمات في الحديث المسترسل"
            ],
            "keyVocabularyEn": [
                  {
                        "term": "Liangci (量词)",
                        "definition": "Measure words/classifiers mandatory between numerals and nouns"
                  },
                  {
                        "term": "Yufa (语法)",
                        "definition": "Chinese grammar and structural sentence order"
                  }
            ],
            "keyVocabularyAr": [
                  {
                        "term": "أداة القياس (量词)",
                        "definition": "كلمة تصنيفية إلزامية تفصل بين العدد والاسم المعدود"
                  },
                  {
                        "term": "النحو والتركيب (语法)",
                        "definition": "القواعد الصينية الحاكمة لترتيب عناصر الجملة"
                  }
            ],
            "teachingPacing": [
                  {
                        "phaseEn": "Review & Situational Immersion",
                        "phaseAr": "المراجعة والانغماس في الموقف التواصلي",
                        "duration": "15 min",
                        "activitiesEn": "Conversational pair-work, dialogue analysis, and listening audio track comprehension",
                        "activitiesAr": "محادثة ثنائية، تحليل حوار الموقف اليومي، والاستماع للتسجيل الوزاري"
                  },
                  {
                        "phaseEn": "Exam Synthesis & Practice Testing",
                        "phaseAr": "التطبيق الامتحاني وحل المسائل التدريبية",
                        "duration": "75 min",
                        "activitiesEn": "Solving high-order thinking databank questions and peer character radical analysis",
                        "activitiesAr": "حل أسئلة المستويات العليا من بنك الأسئلة وتحليل بنية الرموز والجذور"
                  }
            ],
            "commonMisconceptionsEn": [
                  "Using the wrong measure word with specific nouns (e.g. using 个 for books instead of 本)",
                  "Negating auxiliary or resultative complements with 不 instead of 没有"
            ],
            "commonMisconceptionsAr": [
                  "استخدام أداة قياس غير ملائمة للاسم كاستخدام 个 مع الكتب بدلاً من 本",
                  "نفي مكملات النتيجة والأفعال بـ 不 بدلاً من أداة النفي الحصرية 没有"
            ]
      },
      "worksheet": {
            "id": "th_zh_ch3_l2_ws",
            "titleEn": "Worksheet: Expressing hobbies, leisure activities, and verb 喜欢 (xǐhuan)",
            "titleAr": "ورقة عمل: التعبير عن الهوايات والاهتمامات باستخدام الفعل 喜欢",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_language_studio",
            "titleEn": "Expressing hobbies, leisure activities, and verb 喜欢 (xǐhuan) Studio",
            "titleAr": "استوديو تفاعلي: التعبير عن الهوايات والاهتمامات باستخدام الفعل 喜欢",
            "descriptionEn": "Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.",
            "descriptionAr": "استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية."
      }
}
    ],
    solvedExamples: chineseCh3SolvedExamples,
    exerciseProblems: chineseCh3Exercises,
    databank: chineseCh3Databank
  },
  {
    id: 'th_zh_ch4',
    chapterNumber: 4,
    titleEn: "Unit 4: Shopping, Dining, Directions & MoE Communicative Scenarios",
    titleAr: "الوحدة الرابعة: التسوق، المطعم الصيني، الاتجاهات ومواقف الامتحان التواصلي",
    descriptionEn: "Currency units (块/元, 毛/角), shopping dialogues, measure words (本, 杯, 瓶, 件), ordering food and drinks, asking directions with 怎么走, and ministerial communicative scenarios.",
    descriptionAr: "العملة الصينية (块/元 و 毛/角)، حوارات التسوق والشراء، أدوات القياس (本, 杯, 瓶, 件)، طلب الأطعمة والمشروبات، السؤال عن الاتجاهات، ومواقف التواصل الرسمية.",
    isFullyEquipped: true,
    interactiveWidgets: [
      {
        type: 'chinese_language_studio',
        titleEn: "Diplomacy, Commerce & Exam Situations Studio",
        titleAr: "استوديو الدبلوماسية والتجارة ومواقف الامتحان الوزاري",
        descriptionEn: 'Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.',
        descriptionAr: 'استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية.'
      }
    ],
    lessons: [
{
      "id": "th_zh_ch4_l1",
      "titleEn": "Lesson 1: Chinese currency system (Renminbi / Yuan) and shopping vocabulary & Classifiers and measure words: 本 (běn), 杯 (bēi), 瓶 (píng), and 件 (jiàn)",
      "titleAr": "الدرس الأول: نظام العملة الصينية (اليوان / الرنمينبي) ومفردات التسوق والأسعار و أدوات القياس التخصصية: 本 للكتب، 杯 للأكواب، 瓶 للزجاجات، و 件 للملابس",
      "summaryEn": "Foundational core concepts covering Chinese currency system (Renminbi / Yuan) and shopping vocabulary, syntactic rules, and communicative mastery.",
      "summaryAr": "المفاهيم التأسيسية والقواعد النحوية والتواصلية لـ نظام العملة الصينية (اليوان / الرنمينبي) ومفردات التسوق والأسعار والتراكيب اللغوية المرتبطة بها.",
      "theoryContentEn": "Comprehensive theoretical exposition on Chinese grammar: The basic currency unit is 元 (yuán) or colloquial 块 (kuài); fractions are 角 (jiǎo) / 毛 (máo) and 分 (fēn). Furthermore, Drink containers serve as measure words: 一杯茶 (a cup of tea), 两瓶水 (two bottles of water), 一碗面 (a bowl of noodles).",
      "theoryContentAr": "عرض نظري وتطبيقي شامل لقواعد اللغة الصينية: الوحدة الأساسية للعملة الصينية هي 元 (yuán) ويقال شفوياً 块 (kuài)؛ وتجزئتها هي 角 / 毛 (عشر اليوان) و 分 (القرش). كما يبرز التحليل النحوي أن: تُستخدم أوعية المشروبات كأدوات قياس: 一杯咖啡 (فنجان قهوة)، 两瓶矿泉水 (زجاجتا ماء)، 一碗米饭 (وعاء أرز).",
      "formulas": [
            {
                  "labelEn": "Standard Chinese Sentence Pattern",
                  "labelAr": "قالب الجملة الصينية الأساسي",
                  "latex": "\\text{Subject} + \\text{Time/Location} + \\text{Adverb} + \\text{Verb} + \\text{Object}"
            },
            {
                  "labelEn": "Modifier and Attribution Formula",
                  "labelAr": "صيغة الوصف والإضافة مع أداة 的",
                  "latex": "\\text{Modifier (Attributive)} + \\text{的} + \\text{Head Noun}"
            }
      ],
      "moeRef": {
            "bookTitleEn": "Kuai Le Han Yu / Gateway to China - MoE",
            "bookTitleAr": "كتاب اللغة الصينية للثانوية العامة - وزارة التربية والتعليم",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "TH-ZH-CH04-L1",
            "pageRange": "106-140"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Chinese currency system (Renminbi / Yuan) and shopping vocabulary",
            "titleAr": "خطة تدريس الدرس: نظام العملة الصينية (اليوان / الرنمينبي) ومفردات التسوق والأسعار",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "TH-ZH-CH04-L1",
            "bloomsObjectivesEn": [
                  "Master core grammatical and phonological principles of Chinese currency system (Renminbi / Yuan) and shopping vocabulary",
                  "Identify and rectify common phonetic tone and word order errors",
                  "Construct fluent communicative dialogues conforming to ministerial examination standards"
            ],
            "bloomsObjectivesAr": [
                  "إتقان القواعد الصوتية والنحوية الحاكمة لـ نظام العملة الصينية (اليوان / الرنمينبي) ومفردات التسوق والأسعار",
                  "التمييز بين النغمات الصوتية وتجنب أخطاء ترتيب الكلمات في الجملة الصينية",
                  "صياغة حوارات تواصلية دقيقة مطابقة لمعايير الورقة الامتحانية الرسمية"
            ],
            "prerequisitesEn": [
                  "Basic Pinyin pronunciation",
                  "Fundamental Chinese character stroke knowledge"
            ],
            "prerequisitesAr": [
                  "معرفة أصوات البينيين الأساسية",
                  "الإلمام بضربات الرموز الصينية البسيطة"
            ],
            "keyVocabularyEn": [
                  {
                        "term": "Pinyin (拼音)",
                        "definition": "Official phonetic romanization system for Standard Mandarin Chinese"
                  },
                  {
                        "term": "Shengdiao (声调)",
                        "definition": "Tonal pitch contour that determines word lexical meaning"
                  }
            ],
            "keyVocabularyAr": [
                  {
                        "term": "بينيين (拼音)",
                        "definition": "نظام النقحرة والترميز الصوتي الرسمي للغة الصينية القياسية"
                  },
                  {
                        "term": "النغمة الصوتية (声调)",
                        "definition": "طبقة الصوت التي تحدد المعنى الدلالي للمفردة الصينية"
                  }
            ],
            "teachingPacing": [
                  {
                        "phaseEn": "Phonetic & Communicative Warm-Up",
                        "phaseAr": "التهيئة الصوتية والموقف التواصلي",
                        "duration": "15 min",
                        "activitiesEn": "Audio listening, tone pitch drills, and interactive pronunciation playback",
                        "activitiesAr": "الاستماع للصوتيات والتدريب على طبقات النغمات والتكرار الصوتي التفاعلي"
                  },
                  {
                        "phaseEn": "Grammar Deconstruction & Syntax Drills",
                        "phaseAr": "تفكيك القواعد والتدريب التواصلي المكثف",
                        "duration": "75 min",
                        "activitiesEn": "Sentence pattern reconstruction, measure word matching, and ministerial databank exercises",
                        "activitiesAr": "إعادة تركيب الجمل، مطابقة أدوات القياس، وحل تدريبات بنك الأسئلة الوزاري"
                  }
            ],
            "commonMisconceptionsEn": [
                  "Confusing tone contours leading to unintended word meanings (e.g. mā mother vs mǎ horse)",
                  "Placing time adverbials at the end of the sentence following European language syntax"
            ],
            "commonMisconceptionsAr": [
                  "الخلط بين النغمات الصوتية مما يغير معنى الكلمة كلياً (مثل mā أم و mǎ حصان)",
                  "وضع الظروف الزمانية في ذيل الجملة تأثراً باللغات الغربية ومخالفة لقواعد الصينية"
            ]
      },
      "worksheet": {
            "id": "th_zh_ch4_l1_ws",
            "titleEn": "Worksheet: Chinese currency system (Renminbi / Yuan) and shopping vocabulary",
            "titleAr": "ورقة عمل: نظام العملة الصينية (اليوان / الرنمينبي) ومفردات التسوق والأسعار",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_listening_comprehension_lab",
            "titleEn": "Chinese currency system (Renminbi / Yuan) and shopping vocabulary Interactive Lab",
            "titleAr": "مختبر تفاعلي: نظام العملة الصينية (اليوان / الرنمينبي) ومفردات التسوق والأسعار",
            "descriptionEn": "Interactive Chinese language pronunciation, stroke order, grammar, and listening station.",
            "descriptionAr": "محطة تفاعلية لصوتيات وكتابة ونحو واستماع اللغة الصينية المعتمدة."
      }
},
{
      "id": "th_zh_ch4_l2",
      "titleEn": "Lesson 2: Dining at a Chinese restaurant, ordering food, and culinary terms & Communicative Practice",
      "titleAr": "الدرس الثاني: تناول الطعام في المطعم، طلب الوجبات والمشروبات، وآداب المائدة والتطبيق التواصلي",
      "summaryEn": "Advanced applications covering Dining at a Chinese restaurant, ordering food, and culinary terms, practical dialogues, and ministerial exam preparation.",
      "summaryAr": "التطبيقات المتقدمة لـ تناول الطعام في المطعم، طلب الوجبات والمشروبات، وآداب المائدة، حوارات المواقف الواقعية، والتدريب على نمط الامتحانات الرسمية.",
      "theoryContentEn": "Syntactic nuances and examination strategies: Settling the bill: 买单 (mǎidān) or 结账 (jiézhàng); compliments to the chef: 这个菜很好吃 (This dish is delicious). Situational mastery: To ask directions, say: 请问，去图书馆怎么走？ (Excuse me, how do I get to the library?).",
      "theoryContentAr": "الرؤية النحوية المتقدمة واستراتيجيات الامتحان: طلب الحساب في نهاية الوجبة: 买单 أو 结账؛ والتعبير عن لذة الطعام بالعبارة القياسية: 这个菜很好吃. والتطبيق التواصلي للمواقف: للسؤال عن خط السير يقال بأدب: 请问，去医院怎么走؟ (من فضلك، كيف أصل إلى المستشفى؟).",
      "formulas": [
            {
                  "labelEn": "Modal and Auxiliary Verb Pattern",
                  "labelAr": "قالب الأفعال المساعدة في الجملة الصينية",
                  "latex": "\\text{Subject} + \\text{Modal Verb (想/要/会)} + \\text{Verb Phrase}"
            },
            {
                  "labelEn": "Question Formulation with Particles",
                  "labelAr": "صيغة الاستفهام بالأدوات الصريحة",
                  "latex": "\\text{Declarative Clause} + \\text{吗 / 呢 / 吧} ?"
            }
      ],
      "moeRef": {
            "bookTitleEn": "Kuai Le Han Yu / Gateway to China - MoE",
            "bookTitleAr": "كتاب اللغة الصينية للثانوية العامة - وزارة التربية والتعليم",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "TH-ZH-CH04-L2",
            "pageRange": "121-140"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Dining at a Chinese restaurant, ordering food, and culinary terms",
            "titleAr": "خطة تدريس الدرس: تناول الطعام في المطعم، طلب الوجبات والمشروبات، وآداب المائدة",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "TH-ZH-CH04-L2",
            "bloomsObjectivesEn": [
                  "Apply nuanced syntactic rules of Dining at a Chinese restaurant, ordering food, and culinary terms",
                  "Master situational comprehension in listening and reading exam scenarios",
                  "Achieve fluency in written character construction and vocabulary retention"
            ],
            "bloomsObjectivesAr": [
                  "تطبيق القواعد الدقيقة لـ تناول الطعام في المطعم، طلب الوجبات والمشروبات، وآداب المائدة",
                  "إتقان فهم المواقف اليومية في أسئلة الاستماع والقراءة الورقية",
                  "تحقيق الدقة في بناء الرموز وتوظيف المفردات في سياقاتها الامتحانية المعتمدة"
            ],
            "prerequisitesEn": [
                  "Lesson 1 grammar structures",
                  "Tone sandhi mastery"
            ],
            "prerequisitesAr": [
                  "استيعاب قواعد الدرس الأول",
                  "إتقان تغيرات النغمات في الحديث المسترسل"
            ],
            "keyVocabularyEn": [
                  {
                        "term": "Liangci (量词)",
                        "definition": "Measure words/classifiers mandatory between numerals and nouns"
                  },
                  {
                        "term": "Yufa (语法)",
                        "definition": "Chinese grammar and structural sentence order"
                  }
            ],
            "keyVocabularyAr": [
                  {
                        "term": "أداة القياس (量词)",
                        "definition": "كلمة تصنيفية إلزامية تفصل بين العدد والاسم المعدود"
                  },
                  {
                        "term": "النحو والتركيب (语法)",
                        "definition": "القواعد الصينية الحاكمة لترتيب عناصر الجملة"
                  }
            ],
            "teachingPacing": [
                  {
                        "phaseEn": "Review & Situational Immersion",
                        "phaseAr": "المراجعة والانغماس في الموقف التواصلي",
                        "duration": "15 min",
                        "activitiesEn": "Conversational pair-work, dialogue analysis, and listening audio track comprehension",
                        "activitiesAr": "محادثة ثنائية، تحليل حوار الموقف اليومي، والاستماع للتسجيل الوزاري"
                  },
                  {
                        "phaseEn": "Exam Synthesis & Practice Testing",
                        "phaseAr": "التطبيق الامتحاني وحل المسائل التدريبية",
                        "duration": "75 min",
                        "activitiesEn": "Solving high-order thinking databank questions and peer character radical analysis",
                        "activitiesAr": "حل أسئلة المستويات العليا من بنك الأسئلة وتحليل بنية الرموز والجذور"
                  }
            ],
            "commonMisconceptionsEn": [
                  "Using the wrong measure word with specific nouns (e.g. using 个 for books instead of 本)",
                  "Negating auxiliary or resultative complements with 不 instead of 没有"
            ],
            "commonMisconceptionsAr": [
                  "استخدام أداة قياس غير ملائمة للاسم كاستخدام 个 مع الكتب بدلاً من 本",
                  "نفي مكملات النتيجة والأفعال بـ 不 بدلاً من أداة النفي الحصرية 没有"
            ]
      },
      "worksheet": {
            "id": "th_zh_ch4_l2_ws",
            "titleEn": "Worksheet: Dining at a Chinese restaurant, ordering food, and culinary terms",
            "titleAr": "ورقة عمل: تناول الطعام في المطعم، طلب الوجبات والمشروبات، وآداب المائدة",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_language_studio",
            "titleEn": "Dining at a Chinese restaurant, ordering food, and culinary terms Studio",
            "titleAr": "استوديو تفاعلي: تناول الطعام في المطعم، طلب الوجبات والمشروبات، وآداب المائدة",
            "descriptionEn": "Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.",
            "descriptionAr": "استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية."
      }
}
    ],
    solvedExamples: chineseCh4SolvedExamples,
    exerciseProblems: chineseCh4Exercises,
    databank: chineseCh4Databank
  }
];

export const thanaweyaChineseBranch: Branch = {
  id: 'thanaweya_chinese',
  titleEn: 'Thanaweya Amma Chinese (Mandarin)',
  titleAr: 'اللغة الصينية - الثانوية العامة',
  categoryEn: 'National Foreign Languages Track',
  categoryAr: 'مسار اللغات الأجنبية القومي',
  iconName: 'Languages',
  colorGradient: 'from-red-600 via-rose-600 to-amber-500',
  chapters
};
