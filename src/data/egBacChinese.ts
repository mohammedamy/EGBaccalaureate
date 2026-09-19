import type { Branch, Chapter } from '../types/curriculum';
import { egBacChineseCh1Databank } from './databanks/egbac/egBacChineseCh1Databank';
import { egBacChineseCh1SolvedExamples, egBacChineseCh1Exercises } from './textbook/egbac/egBacChineseCh1Textbook';
import { egBacChineseCh2Databank } from './databanks/egbac/egBacChineseCh2Databank';
import { egBacChineseCh2SolvedExamples, egBacChineseCh2Exercises } from './textbook/egbac/egBacChineseCh2Textbook';
import { egBacChineseCh3Databank } from './databanks/egbac/egBacChineseCh3Databank';
import { egBacChineseCh3SolvedExamples, egBacChineseCh3Exercises } from './textbook/egbac/egBacChineseCh3Textbook';
import { egBacChineseCh4Databank } from './databanks/egbac/egBacChineseCh4Databank';
import { egBacChineseCh4SolvedExamples, egBacChineseCh4Exercises } from './textbook/egbac/egBacChineseCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'egbac_zh_ch1',
    chapterNumber: 1,
    titleEn: "Unit 1: Modern Chinese Society, Education & Complex Sentence Structures",
    titleAr: "الوحدة الأولى: المجتمع الصيني المعاصر، التعليم الجامعي والتراكيب اللغوية المعقدة",
    descriptionEn: "Higher education in China, academic majors, causal sentences (因为...所以...), concessive clauses (虽然...但是...), comparative structures (A比B), and resultative complements.",
    descriptionAr: "التعليم الجامعي في الصين، التخصصات الأكاديمية، الجمل السببية (因为...所以...)، الجمل الاستدراكية (虽然...但是...)، صيغ المقارنة (A比B)، ومكملات النتيجة والدرجة 得.",
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
      "id": "egbac_zh_ch1_l1",
      "titleEn": "Lesson 1: Higher education institutions and university disciplines in modern China & Causal compound sentences: 因为 ... 所以 ... (Because ... Therefore ...)",
      "titleAr": "الدرس الأول: مؤسسات التعليم العالي والتخصصات الأكاديمية في الصين المعاصرة و الجمل المركبة السببية: استخدام رابط العلة والنتيجة 因为 ... 所以 ...",
      "summaryEn": "Foundational core concepts covering Higher education institutions and university disciplines in modern China, syntactic rules, and communicative mastery.",
      "summaryAr": "المفاهيم التأسيسية والقواعد النحوية والتواصلية لـ مؤسسات التعليم العالي والتخصصات الأكاديمية في الصين المعاصرة والتراكيب اللغوية المرتبطة بها.",
      "theoryContentEn": "Comprehensive theoretical exposition on Chinese grammar: Chinese higher education classifies disciplines into 工程 (engineering), 医学 (medicine), 经济 (economics), and 文学 (literature). Furthermore, Example: 因为他努力学习汉语，所以考试成绩很好 (Because he studied Chinese diligently, his exam results were excellent).",
      "theoryContentAr": "عرض نظري وتطبيقي شامل لقواعد اللغة الصينية: يصنف التعليم العالي الصيني التخصصات الأكاديمية إلى: الهندسة (工程)، الطب (医学)، الاقتصاد (经济)، والآداب (文学). كما يبرز التحليل النحوي أن: مثال وزاري: 因为他努力学习汉语，所以考试成绩很好 (لأنه اجتهد في دراسة الصينية، جاءت درجات امتحانه ممتازة).",
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
            "bookTitleEn": "Academic Chinese for Secondary Baccalaureate",
            "bookTitleAr": "كتاب الصينية الأكاديمية - البكالوريا المصرية",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "EGBAC-ZH-CH01-L1",
            "pageRange": "1-35"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Higher education institutions and university disciplines in modern China",
            "titleAr": "خطة تدريس الدرس: مؤسسات التعليم العالي والتخصصات الأكاديمية في الصين المعاصرة",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "EGBAC-ZH-CH01-L1",
            "bloomsObjectivesEn": [
                  "Master core grammatical and phonological principles of Higher education institutions and university disciplines in modern China",
                  "Identify and rectify common phonetic tone and word order errors",
                  "Construct fluent communicative dialogues conforming to ministerial examination standards"
            ],
            "bloomsObjectivesAr": [
                  "إتقان القواعد الصوتية والنحوية الحاكمة لـ مؤسسات التعليم العالي والتخصصات الأكاديمية في الصين المعاصرة",
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
            "id": "egbac_zh_ch1_l1_ws",
            "titleEn": "Worksheet: Higher education institutions and university disciplines in modern China",
            "titleAr": "ورقة عمل: مؤسسات التعليم العالي والتخصصات الأكاديمية في الصين المعاصرة",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_pinyin_tones_lab",
            "titleEn": "Higher education institutions and university disciplines in modern China Interactive Lab",
            "titleAr": "مختبر تفاعلي: مؤسسات التعليم العالي والتخصصات الأكاديمية في الصين المعاصرة",
            "descriptionEn": "Interactive Chinese language pronunciation, stroke order, grammar, and listening station.",
            "descriptionAr": "محطة تفاعلية لصوتيات وكتابة ونحو واستماع اللغة الصينية المعتمدة."
      }
},
{
      "id": "egbac_zh_ch1_l2",
      "titleEn": "Lesson 2: Concessive clauses: 虽然 ... 但是 / 可是 ... (Although ... Yet ...) & Communicative Practice",
      "titleAr": "الدرس الثاني: الجمل الاستدراكية: أسلوب التنازل والاستدراك 虽然 ... 但是 ... والتطبيق التواصلي",
      "summaryEn": "Advanced applications covering Concessive clauses: 虽然 ... 但是 / 可是 ... (Although ... Yet ...), practical dialogues, and ministerial exam preparation.",
      "summaryAr": "التطبيقات المتقدمة لـ الجمل الاستدراكية: أسلوب التنازل والاستدراك 虽然 ... 但是 ...، حوارات المواقف الواقعية، والتدريب على نمط الامتحانات الرسمية.",
      "theoryContentEn": "Syntactic nuances and examination strategies: Contrasting 虽然...但是 with 尽管...却 refines rhetorical nuance and stylistic distinction in formal essay compositions. Situational mastery: The basic comparative pattern is: A + 比 + B + Adjective (他比我高 - He is taller than me).",
      "theoryContentAr": "الرؤية النحوية المتقدمة واستراتيجيات الامتحان: يبرز التفريق الدقيق بين 虽然...但是 و 尽管...却 عمق البلاغة الكتابية والقدرة على تنويع درجات الخطاب الأكاديمي. والتطبيق التواصلي للمواقف: يتركب أسلوب المقارنة الأساسي من: الفاعل المقارن A + 比 + المقارن به B + الصفة (他比我高 هو أطول مني).",
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
            "bookTitleEn": "Academic Chinese for Secondary Baccalaureate",
            "bookTitleAr": "كتاب الصينية الأكاديمية - البكالوريا المصرية",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "EGBAC-ZH-CH01-L2",
            "pageRange": "16-35"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Concessive clauses: 虽然 ... 但是 / 可是 ... (Although ... Yet ...)",
            "titleAr": "خطة تدريس الدرس: الجمل الاستدراكية: أسلوب التنازل والاستدراك 虽然 ... 但是 ...",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "EGBAC-ZH-CH01-L2",
            "bloomsObjectivesEn": [
                  "Apply nuanced syntactic rules of Concessive clauses: 虽然 ... 但是 / 可是 ... (Although ... Yet ...)",
                  "Master situational comprehension in listening and reading exam scenarios",
                  "Achieve fluency in written character construction and vocabulary retention"
            ],
            "bloomsObjectivesAr": [
                  "تطبيق القواعد الدقيقة لـ الجمل الاستدراكية: أسلوب التنازل والاستدراك 虽然 ... 但是 ...",
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
            "id": "egbac_zh_ch1_l2_ws",
            "titleEn": "Worksheet: Concessive clauses: 虽然 ... 但是 / 可是 ... (Although ... Yet ...)",
            "titleAr": "ورقة عمل: الجمل الاستدراكية: أسلوب التنازل والاستدراك 虽然 ... 但是 ...",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_language_studio",
            "titleEn": "Concessive clauses: 虽然 ... 但是 / 可是 ... (Although ... Yet ...) Studio",
            "titleAr": "استوديو تفاعلي: الجمل الاستدراكية: أسلوب التنازل والاستدراك 虽然 ... 但是 ...",
            "descriptionEn": "Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.",
            "descriptionAr": "استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية."
      }
}
    ],
    solvedExamples: egBacChineseCh1SolvedExamples,
    exerciseProblems: egBacChineseCh1Exercises,
    databank: egBacChineseCh1Databank
  },
  {
    id: 'egbac_zh_ch2',
    chapterNumber: 2,
    titleEn: "Unit 2: Traditional Culture, Festivals, Philosophy & Idiomatic Expressions",
    titleAr: "الوحدة الثانية: الثقافة الصينية التراثية، الأعياد الكبرى، الفلسفة والتعبيرات الاصطلاحية",
    descriptionEn: "Major traditional festivals (Spring Festival, Mid-Autumn), philosophical concepts (Yin-Yang, harmony), Chengyu idioms, aspect markers (了, 着, 过), and directional complements.",
    descriptionAr: "الأعياد والمهرجانات التراثية الكبرى، الفلسفة الصينية والقيم الأخلاقية، الأمثال الاصطلاحية (成语)، دلالات أزمنة المظهر (了, 着, 过)، ومكملات الاتجاه.",
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
      "id": "egbac_zh_ch2_l1",
      "titleEn": "Lesson 1: Traditional Chinese holidays: Spring Festival (春节) and cultural customs & Mid-Autumn Festival (中秋节) and family reunion symbolism",
      "titleAr": "الدرس الأول: الأعياد الصينية الكبرى: عيد الربيع (رأس السنة الصينية) ومظاهر الاحتفال و عيد منتصف الخريف (中秋节) ورمزية اكتمال القمر ولم الشمل",
      "summaryEn": "Foundational core concepts covering Traditional Chinese holidays: Spring Festival (春节) and cultural customs, syntactic rules, and communicative mastery.",
      "summaryAr": "المفاهيم التأسيسية والقواعد النحوية والتواصلية لـ الأعياد الصينية الكبرى: عيد الربيع (رأس السنة الصينية) ومظاهر الاحتفال والتراكيب اللغوية المرتبطة بها.",
      "theoryContentEn": "Comprehensive theoretical exposition on Chinese grammar: The Spring Festival (春节) is the most significant holiday, marked by family reunion, dumplings (饺子), and red envelopes (红包). Furthermore, The full moon (圆月) reflects completeness and harmony in Chinese poetic traditions, inspired by the myth of Chang’e (嫦娥奔月).",
      "theoryContentAr": "عرض نظري وتطبيقي شامل لقواعد اللغة الصينية: يعد عيد الربيع (春节) أهم الأعياد الصينية، ويتسم بلم شمل العائلات، تناول الزلابية (饺子)، وتبادل العيديات الحمراء (红包). كما يبرز التحليل النحوي أن: يرمز القمر المكتمل في الشعر الصيني الكلاسيكي إلى الكمال والسلام العائلي مستلهماً أسطورة تشانغ إه (嫦娥) الخالدة.",
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
            "bookTitleEn": "Academic Chinese for Secondary Baccalaureate",
            "bookTitleAr": "كتاب الصينية الأكاديمية - البكالوريا المصرية",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "EGBAC-ZH-CH02-L1",
            "pageRange": "36-70"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Traditional Chinese holidays: Spring Festival (春节) and cultural customs",
            "titleAr": "خطة تدريس الدرس: الأعياد الصينية الكبرى: عيد الربيع (رأس السنة الصينية) ومظاهر الاحتفال",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "EGBAC-ZH-CH02-L1",
            "bloomsObjectivesEn": [
                  "Master core grammatical and phonological principles of Traditional Chinese holidays: Spring Festival (春节) and cultural customs",
                  "Identify and rectify common phonetic tone and word order errors",
                  "Construct fluent communicative dialogues conforming to ministerial examination standards"
            ],
            "bloomsObjectivesAr": [
                  "إتقان القواعد الصوتية والنحوية الحاكمة لـ الأعياد الصينية الكبرى: عيد الربيع (رأس السنة الصينية) ومظاهر الاحتفال",
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
            "id": "egbac_zh_ch2_l1_ws",
            "titleEn": "Worksheet: Traditional Chinese holidays: Spring Festival (春节) and cultural customs",
            "titleAr": "ورقة عمل: الأعياد الصينية الكبرى: عيد الربيع (رأس السنة الصينية) ومظاهر الاحتفال",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_hanzi_radicals_lab",
            "titleEn": "Traditional Chinese holidays: Spring Festival (春节) and cultural customs Interactive Lab",
            "titleAr": "مختبر تفاعلي: الأعياد الصينية الكبرى: عيد الربيع (رأس السنة الصينية) ومظاهر الاحتفال",
            "descriptionEn": "Interactive Chinese language pronunciation, stroke order, grammar, and listening station.",
            "descriptionAr": "محطة تفاعلية لصوتيات وكتابة ونحو واستماع اللغة الصينية المعتمدة."
      }
},
{
      "id": "egbac_zh_ch2_l2",
      "titleEn": "Lesson 2: Core philosophical pillars: Confucianism (儒家), Taoism (道家), and Harmony (和谐) & Communicative Practice",
      "titleAr": "الدرس الثاني: الركائز الفلسفية الكبرى: الكونفوشيوسية، الطاوية، وقيمة التناغم والتوازن والتطبيق التواصلي",
      "summaryEn": "Advanced applications covering Core philosophical pillars: Confucianism (儒家), Taoism (道家), and Harmony (和谐), practical dialogues, and ministerial exam preparation.",
      "summaryAr": "التطبيقات المتقدمة لـ الركائز الفلسفية الكبرى: الكونفوشيوسية، الطاوية، وقيمة التناغم والتوازن، حوارات المواقف الواقعية، والتدريب على نمط الامتحانات الرسمية.",
      "theoryContentEn": "Syntactic nuances and examination strategies: Modern Chinese diplomatic discourse frequently draws upon traditional concepts of \"Harmony without Uniformity\" (和而不同). Situational mastery: Chengyu are concise four-character idiomatic expressions derived from classical literature, such as 入乡随俗 (When in Rome, do as the Romans do).",
      "theoryContentAr": "الرؤية النحوية المتقدمة واستراتيجيات الامتحان: تستند الدبلوماسية الصينية المعاصرة إلى المبدأ الفلسفي التراثي \"الوفاق والتناغم مع احترام التنوع والاختلاف\" (和而不同). والتطبيق التواصلي للمواقف: تتكون التعبيرات الاصطلاحية (成语) من أربعة رموز تختزل حكمة أدبية وتاريخية بليغة مثل 入乡随俗 (إذا دخلت قرية فاتبع عادات أهلها).",
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
            "bookTitleEn": "Academic Chinese for Secondary Baccalaureate",
            "bookTitleAr": "كتاب الصينية الأكاديمية - البكالوريا المصرية",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "EGBAC-ZH-CH02-L2",
            "pageRange": "51-70"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Core philosophical pillars: Confucianism (儒家), Taoism (道家), and Harmony (和谐)",
            "titleAr": "خطة تدريس الدرس: الركائز الفلسفية الكبرى: الكونفوشيوسية، الطاوية، وقيمة التناغم والتوازن",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "EGBAC-ZH-CH02-L2",
            "bloomsObjectivesEn": [
                  "Apply nuanced syntactic rules of Core philosophical pillars: Confucianism (儒家), Taoism (道家), and Harmony (和谐)",
                  "Master situational comprehension in listening and reading exam scenarios",
                  "Achieve fluency in written character construction and vocabulary retention"
            ],
            "bloomsObjectivesAr": [
                  "تطبيق القواعد الدقيقة لـ الركائز الفلسفية الكبرى: الكونفوشيوسية، الطاوية، وقيمة التناغم والتوازن",
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
            "id": "egbac_zh_ch2_l2_ws",
            "titleEn": "Worksheet: Core philosophical pillars: Confucianism (儒家), Taoism (道家), and Harmony (和谐)",
            "titleAr": "ورقة عمل: الركائز الفلسفية الكبرى: الكونفوشيوسية، الطاوية، وقيمة التناغم والتوازن",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_language_studio",
            "titleEn": "Core philosophical pillars: Confucianism (儒家), Taoism (道家), and Harmony (和谐) Studio",
            "titleAr": "استوديو تفاعلي: الركائز الفلسفية الكبرى: الكونفوشيوسية، الطاوية، وقيمة التناغم والتوازن",
            "descriptionEn": "Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.",
            "descriptionAr": "استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية."
      }
}
    ],
    solvedExamples: egBacChineseCh2SolvedExamples,
    exerciseProblems: egBacChineseCh2Exercises,
    databank: egBacChineseCh2Databank
  },
  {
    id: 'egbac_zh_ch3',
    chapterNumber: 3,
    titleEn: "Unit 3: Technological Innovation, High-Speed Rail, Digital Economy & Urban Ecology",
    titleAr: "الوحدة الثالثة: الابتكار التكنولوجي، القطارات فائقة السرعة، الاقتصاد الرقمي والمدن البيئية",
    descriptionEn: "High-speed rail network (高铁), mobile digital payments, AI and 5G, the 'disposal' 把 (bǎ) structure, passive voice with 被 (bèi), and progressive aspect 正在.",
    descriptionAr: "شبكة القطارات السريعة، الدفع الرقمي، الذكاء الاصطناعي، تركيب المفعول المقدم بـ 把، صيغة المبني للمجهول بـ 被، والمظهر المستمر 正在.",
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
      "id": "egbac_zh_ch3_l1",
      "titleEn": "Lesson 1: China’s High-Speed Rail network (高铁) and infrastructure engineering & Digital economy, mobile payments (移动支付), and smart urban living",
      "titleAr": "الدرس الأول: شبكة القطارات الصينية فائقة السرعة (高铁) وهندسة البنية التحتية و الاقتصاد الرقمي، الدفع عبر الهاتف المحمول (移动支付) والمدن الذكية",
      "summaryEn": "Foundational core concepts covering China’s High-Speed Rail network (高铁) and infrastructure engineering, syntactic rules, and communicative mastery.",
      "summaryAr": "المفاهيم التأسيسية والقواعد النحوية والتواصلية لـ شبكة القطارات الصينية فائقة السرعة (高铁) وهندسة البنية التحتية والتراكيب اللغوية المرتبطة بها.",
      "theoryContentEn": "Comprehensive theoretical exposition on Chinese grammar: China possesses the world’s largest high-speed rail (高铁 Gāotiě) network, connecting major metropolises at speeds exceeding 300 km/h. Furthermore, Everyday transactions utilize QR code scanning (扫码支付) for subways, shared bikes (共享单车), and grocery markets.",
      "theoryContentAr": "عرض نظري وتطبيقي شامل لقواعد اللغة الصينية: تمتلك الصين أكبر شبكة قطارات فائقة السرعة (高铁) في العالم تربط المدن الكبرى بسرعات تشغيلية تتجاوز 300 كم/ساعة. كما يبرز التحليل النحوي أن: تعتمد المعاملات اليومية على مسح رمز الاستجابة السريعة (扫码) لركوب المترو، استئجار الدراجات التشاركية، والتسوق في المتاجر.",
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
            "bookTitleEn": "Academic Chinese for Secondary Baccalaureate",
            "bookTitleAr": "كتاب الصينية الأكاديمية - البكالوريا المصرية",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "EGBAC-ZH-CH03-L1",
            "pageRange": "71-105"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: China’s High-Speed Rail network (高铁) and infrastructure engineering",
            "titleAr": "خطة تدريس الدرس: شبكة القطارات الصينية فائقة السرعة (高铁) وهندسة البنية التحتية",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "EGBAC-ZH-CH03-L1",
            "bloomsObjectivesEn": [
                  "Master core grammatical and phonological principles of China’s High-Speed Rail network (高铁) and infrastructure engineering",
                  "Identify and rectify common phonetic tone and word order errors",
                  "Construct fluent communicative dialogues conforming to ministerial examination standards"
            ],
            "bloomsObjectivesAr": [
                  "إتقان القواعد الصوتية والنحوية الحاكمة لـ شبكة القطارات الصينية فائقة السرعة (高铁) وهندسة البنية التحتية",
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
            "id": "egbac_zh_ch3_l1_ws",
            "titleEn": "Worksheet: China’s High-Speed Rail network (高铁) and infrastructure engineering",
            "titleAr": "ورقة عمل: شبكة القطارات الصينية فائقة السرعة (高铁) وهندسة البنية التحتية",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_grammar_patterns_lab",
            "titleEn": "China’s High-Speed Rail network (高铁) and infrastructure engineering Interactive Lab",
            "titleAr": "مختبر تفاعلي: شبكة القطارات الصينية فائقة السرعة (高铁) وهندسة البنية التحتية",
            "descriptionEn": "Interactive Chinese language pronunciation, stroke order, grammar, and listening station.",
            "descriptionAr": "محطة تفاعلية لصوتيات وكتابة ونحو واستماع اللغة الصينية المعتمدة."
      }
},
{
      "id": "egbac_zh_ch3_l2",
      "titleEn": "Lesson 2: The \"disposal\" 把 (bǎ) construction: Subject + 把 + Object + Verb + Other Element & Communicative Practice",
      "titleAr": "الدرس الثاني: أسلوب المعالجة والتقديم بـ 把 (bǎ): الفاعل + 把 + المفعول + الفعل + الإتمام والتطبيق التواصلي",
      "summaryEn": "Advanced applications covering The \"disposal\" 把 (bǎ) construction: Subject + 把 + Object + Verb + Other Element, practical dialogues, and ministerial exam preparation.",
      "summaryAr": "التطبيقات المتقدمة لـ أسلوب المعالجة والتقديم بـ 把 (bǎ): الفاعل + 把 + المفعول + الفعل + الإتمام، حوارات المواقف الواقعية، والتدريب على نمط الامتحانات الرسمية.",
      "theoryContentEn": "Syntactic nuances and examination strategies: Verbs of emotion, perception, or non-disposal actions (like 喜欢, 知道, 听见) can NEVER be used in a 把 construction in ministerial examinations. Situational mastery: The passive marker 被 (bèi) shifts the recipient to the subject: 苹果被吃了 (The apple was eaten).",
      "theoryContentAr": "الرؤية النحوية المتقدمة واستراتيجيات الامتحان: يحظر نحوياً استخدام أفعال الإدراك أو المشاعر المجردة (مثل 喜欢, 认识, 觉得) في أسلوب 把، لأنها لا تُحدث تغييراً حسياً في المفعول. والتطبيق التواصلي للمواقف: تنقل أداة المبني للمجهول 被 المفعول المتأثر إلى موقع المبتدأ: 苹果被吃了 (أُكلت التفاحة).",
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
            "bookTitleEn": "Academic Chinese for Secondary Baccalaureate",
            "bookTitleAr": "كتاب الصينية الأكاديمية - البكالوريا المصرية",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "EGBAC-ZH-CH03-L2",
            "pageRange": "86-105"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: The \"disposal\" 把 (bǎ) construction: Subject + 把 + Object + Verb + Other Element",
            "titleAr": "خطة تدريس الدرس: أسلوب المعالجة والتقديم بـ 把 (bǎ): الفاعل + 把 + المفعول + الفعل + الإتمام",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "EGBAC-ZH-CH03-L2",
            "bloomsObjectivesEn": [
                  "Apply nuanced syntactic rules of The \"disposal\" 把 (bǎ) construction: Subject + 把 + Object + Verb + Other Element",
                  "Master situational comprehension in listening and reading exam scenarios",
                  "Achieve fluency in written character construction and vocabulary retention"
            ],
            "bloomsObjectivesAr": [
                  "تطبيق القواعد الدقيقة لـ أسلوب المعالجة والتقديم بـ 把 (bǎ): الفاعل + 把 + المفعول + الفعل + الإتمام",
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
            "id": "egbac_zh_ch3_l2_ws",
            "titleEn": "Worksheet: The \"disposal\" 把 (bǎ) construction: Subject + 把 + Object + Verb + Other Element",
            "titleAr": "ورقة عمل: أسلوب المعالجة والتقديم بـ 把 (bǎ): الفاعل + 把 + المفعول + الفعل + الإتمام",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_language_studio",
            "titleEn": "The \"disposal\" 把 (bǎ) construction: Subject + 把 + Object + Verb + Other Element Studio",
            "titleAr": "استوديو تفاعلي: أسلوب المعالجة والتقديم بـ 把 (bǎ): الفاعل + 把 + المفعول + الفعل + الإتمام",
            "descriptionEn": "Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.",
            "descriptionAr": "استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية."
      }
}
    ],
    solvedExamples: egBacChineseCh3SolvedExamples,
    exerciseProblems: egBacChineseCh3Exercises,
    databank: egBacChineseCh3Databank
  },
  {
    id: 'egbac_zh_ch4',
    chapterNumber: 4,
    titleEn: "Unit 4: Sino-Egyptian Relations, Belt & Road Initiative, Trade & Diplomatic Translation",
    titleAr: "الوحدة الرابعة: العلاقات المصرية الصينية، مبادرة الحزام والطريق، التجارة والترجمة الدبلوماسية",
    descriptionEn: "Comprehensive Strategic Partnership, Belt & Road infrastructure projects (TEDA, Luban Workshops), correlatives (不仅...而且...), emphatic 是...的, and diplomatic translation skills.",
    descriptionAr: "الشراكة الاستراتيجية الشاملة بين مصر والصين، مشروعات الحزام والطريق (تيدا بالسويس، ورش لوبان)، الروابط المتقدمة (不仅...而且...)، أسلوب التوكيد 是...的، والترجمة الدبلوماسية.",
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
      "id": "egbac_zh_ch4_l1",
      "titleEn": "Lesson 1: Sino-Egyptian Comprehensive Strategic Partnership and Belt & Road cooperation & Vocational and technical educational diplomacy: Luban Workshops (鲁班工坊)",
      "titleAr": "الدرس الأول: الشراكة الاستراتيجية الشاملة بين مصر والصين ومبادرة الحزام والطريق و الدبلوماسية التعليمية والتدريب الفني: ورش عمل لوبان (鲁班工坊) في مصر",
      "summaryEn": "Foundational core concepts covering Sino-Egyptian Comprehensive Strategic Partnership and Belt & Road cooperation, syntactic rules, and communicative mastery.",
      "summaryAr": "المفاهيم التأسيسية والقواعد النحوية والتواصلية لـ الشراكة الاستراتيجية الشاملة بين مصر والصين ومبادرة الحزام والطريق والتراكيب اللغوية المرتبطة بها.",
      "theoryContentEn": "Comprehensive theoretical exposition on Chinese grammar: Egypt was the first Arab and African nation to establish diplomatic relations with the People’s Republic of China in 1956. Furthermore, Named after Lu Ban, the legendary ancient Chinese master craftsman, these workshops embody engineering excellence and mutual learning.",
      "theoryContentAr": "عرض نظري وتطبيقي شامل لقواعد اللغة الصينية: كانت مصر أول دولة عربية وأفريقية تقيم علاقات دبلوماسية رسمية مع جمهورية الصين الشعبية عام 1956. كما يبرز التحليل النحوي أن: تخلد هذه الورش اسم المعلم التراثي لوبان، رمز البراعة الحرفية الصينية، وتجسد قيم التبادل الحضاري والتعلم المشترك.",
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
            "bookTitleEn": "Academic Chinese for Secondary Baccalaureate",
            "bookTitleAr": "كتاب الصينية الأكاديمية - البكالوريا المصرية",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "EGBAC-ZH-CH04-L1",
            "pageRange": "106-140"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Sino-Egyptian Comprehensive Strategic Partnership and Belt & Road cooperation",
            "titleAr": "خطة تدريس الدرس: الشراكة الاستراتيجية الشاملة بين مصر والصين ومبادرة الحزام والطريق",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "EGBAC-ZH-CH04-L1",
            "bloomsObjectivesEn": [
                  "Master core grammatical and phonological principles of Sino-Egyptian Comprehensive Strategic Partnership and Belt & Road cooperation",
                  "Identify and rectify common phonetic tone and word order errors",
                  "Construct fluent communicative dialogues conforming to ministerial examination standards"
            ],
            "bloomsObjectivesAr": [
                  "إتقان القواعد الصوتية والنحوية الحاكمة لـ الشراكة الاستراتيجية الشاملة بين مصر والصين ومبادرة الحزام والطريق",
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
            "id": "egbac_zh_ch4_l1_ws",
            "titleEn": "Worksheet: Sino-Egyptian Comprehensive Strategic Partnership and Belt & Road cooperation",
            "titleAr": "ورقة عمل: الشراكة الاستراتيجية الشاملة بين مصر والصين ومبادرة الحزام والطريق",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_listening_comprehension_lab",
            "titleEn": "Sino-Egyptian Comprehensive Strategic Partnership and Belt & Road cooperation Interactive Lab",
            "titleAr": "مختبر تفاعلي: الشراكة الاستراتيجية الشاملة بين مصر والصين ومبادرة الحزام والطريق",
            "descriptionEn": "Interactive Chinese language pronunciation, stroke order, grammar, and listening station.",
            "descriptionAr": "محطة تفاعلية لصوتيات وكتابة ونحو واستماع اللغة الصينية المعتمدة."
      }
},
{
      "id": "egbac_zh_ch4_l2",
      "titleEn": "Lesson 2: Correlative conjunctions: 不仅 ... 而且 ... (Not only ... But also ...) & Communicative Practice",
      "titleAr": "الدرس الثاني: الروابط التلازمية التوكيدية: أسلوب 不仅 ... 而且 ... (ليس فقط... بل أيضاً...) والتطبيق التواصلي",
      "summaryEn": "Advanced applications covering Correlative conjunctions: 不仅 ... 而且 ... (Not only ... But also ...), practical dialogues, and ministerial exam preparation.",
      "summaryAr": "التطبيقات المتقدمة لـ الروابط التلازمية التوكيدية: أسلوب 不仅 ... 而且 ... (ليس فقط... بل أيضاً...)، حوارات المواقف الواقعية، والتدريب على نمط الامتحانات الرسمية.",
      "theoryContentEn": "Syntactic nuances and examination strategies: When two different subjects share the clause, 不仅 must precede the first subject: 不仅老师去，而且学生也去. Situational mastery: The 是 ... 的 construction emphasizes the time, place, manner, or agent of an already completed past action.",
      "theoryContentAr": "الرؤية النحوية المتقدمة واستراتيجيات الامتحان: عندما تشتمل الجملة على فاعلين مختلفين، يجب تقديم 不仅 في صدر الجملة قبل الفاعل الأول وجوباً لضبط البنية النحوية. والتطبيق التواصلي للمواقف: يُستخدم أسلوب 是...的 للتركيز على زمان أو مكان أو طريقة أو فاعل حدث وقع وانتهى بالفعل في الماضي.",
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
            "bookTitleEn": "Academic Chinese for Secondary Baccalaureate",
            "bookTitleAr": "كتاب الصينية الأكاديمية - البكالوريا المصرية",
            "grade": "12",
            "term": "Full Year",
            "officialCode": "EGBAC-ZH-CH04-L2",
            "pageRange": "121-140"
      },
      "lessonPlan": {
            "titleEn": "Instructional Plan: Correlative conjunctions: 不仅 ... 而且 ... (Not only ... But also ...)",
            "titleAr": "خطة تدريس الدرس: الروابط التلازمية التوكيدية: أسلوب 不仅 ... 而且 ... (ليس فقط... بل أيضاً...)",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "EGBAC-ZH-CH04-L2",
            "bloomsObjectivesEn": [
                  "Apply nuanced syntactic rules of Correlative conjunctions: 不仅 ... 而且 ... (Not only ... But also ...)",
                  "Master situational comprehension in listening and reading exam scenarios",
                  "Achieve fluency in written character construction and vocabulary retention"
            ],
            "bloomsObjectivesAr": [
                  "تطبيق القواعد الدقيقة لـ الروابط التلازمية التوكيدية: أسلوب 不仅 ... 而且 ... (ليس فقط... بل أيضاً...)",
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
            "id": "egbac_zh_ch4_l2_ws",
            "titleEn": "Worksheet: Correlative conjunctions: 不仅 ... 而且 ... (Not only ... But also ...)",
            "titleAr": "ورقة عمل: الروابط التلازمية التوكيدية: أسلوب 不仅 ... 而且 ... (ليس فقط... بل أيضاً...)",
            "descriptionEn": "Formative assessment and linguistic practice worksheet.",
            "descriptionAr": "ورقة عمل تدريبية وتطبيق لغوي للدرس.",
            "estimatedTimeMinutes": 30,
            "problems": []
      },
      "interactiveWidget": {
            "type": "chinese_language_studio",
            "titleEn": "Correlative conjunctions: 不仅 ... 而且 ... (Not only ... But also ...) Studio",
            "titleAr": "استوديو تفاعلي: الروابط التلازمية التوكيدية: أسلوب 不仅 ... 而且 ... (ليس فقط... بل أيضاً...)",
            "descriptionEn": "Interactive Chinese language audio, tone pitch, grammar, and communicative situation simulator.",
            "descriptionAr": "استوديو تفاعلي شامل لصوتيات ونغمات وقواعد ومواقف اللغة الصينية الرسمية."
      }
}
    ],
    solvedExamples: egBacChineseCh4SolvedExamples,
    exerciseProblems: egBacChineseCh4Exercises,
    databank: egBacChineseCh4Databank
  }
];

export const egBacChineseBranch: Branch = {
  id: 'egbac_chinese',
  titleEn: 'Egyptian Baccalaureate Chinese (Mandarin)',
  titleAr: 'اللغة الصينية - البكالوريا المصرية الحديثة',
  categoryEn: 'National Foreign Languages Track',
  categoryAr: 'مسار اللغات الأجنبية القومي',
  iconName: 'Languages',
  colorGradient: 'from-red-600 via-rose-600 to-amber-500',
  chapters
};
