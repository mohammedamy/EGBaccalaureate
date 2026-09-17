import type { Branch } from '../types/curriculum';
import { arabicCh1Databank } from './databanks/thanaweya/arabicCh1Databank';
import { arabicCh2Databank } from './databanks/thanaweya/arabicCh2Databank';
import { arabicCh3Databank } from './databanks/thanaweya/arabicCh3Databank';
import { arabicCh4Databank } from './databanks/thanaweya/arabicCh4Databank';

export const egBacArabicBranch: Branch = {
  "id": "egbac_arabic",
  "titleEn": "Arabic Language & Literature (EG-Bac Advanced Track)",
  "titleAr": "اللغة العربية وآدابها (مسار البكالوريا المصرية المتقدم)",
  "categoryEn": "Languages & Humanities",
  "categoryAr": "اللغات والعلوم الإنسانية",
  "iconName": "BookOpen",
  "colorGradient": "from-amber-600 via-orange-600 to-yellow-600",
  "chapters": [
    {
      "id": "egbac_ar_ch1",
      "chapterNumber": 1,
      "titleEn": "Unit 1: Comprehensive Arabic Grammar & Syntactic Parsing (Advanced Critical Analysis)",
      "titleAr": "الوحدة الأولى: النحو وقواعد الإعراب الشامل (التحليل النقدي المتقدم)",
      "descriptionEn": "The 7 ministerial grammar units: Orthography and Hamza, Morphological Derivatives & Agents, Inna & Kana auxiliaries, Accusative constructs & Objects, Verb mood & Jussive conditionals, Superfluous prepositions & Particles, and Diptotes (Mawani' min al-Sarf).",
      "descriptionAr": "الوحدات النحوية السبع المعتمدة وزارياً: قواعد النطق ورسم الهمزات، الأبنية والمشتقات العاملة والمصادر، النواسخ وأحكام المبتدأ والخبر، المنصوبات والمفاعيل الخمسة، إعراب الأفعال وجزم المضارع، الحروف وحروف الجر الزائدة، والممنوع من الصرف.",
      "isFullyEquipped": true,
      "lessons": [
        {
          "id": "egbac_ar_ch1_l1",
          "titleEn": "Operative Morphological Derivatives (Active & Passive Participles, Hyperbolic Forms)",
          "titleAr": "المشتقات العاملة (اسم الفاعل، صيغ المبالغة، اسم المفعول، واسم التفضيل)",
          "summaryEn": "Derivation patterns from tri-literal and non-tri-literal roots, agentivity conditions with or without Al, and governing accusative objects or deputy agents.",
          "summaryAr": "صياغة المشتقات من الأفعال الثلاثية وغير الثلاثية، شروط الإعمال بأل وبدونها، وعمل المشتق في رفع الفاعل ونائب الفاعل ونصب المفعول به.",
          "theoryContentEn": "### 1. Active Participle (Ism al-Fa'il)\n- **Tri-literal:** Formed on the pattern of *Fa'il* (كَتَبَ -> كاتِب، قال -> قائِل، دعا -> داعٍ / داعياً).\n- **Non-tri-literal:** Formed by replacing the imperfect prefix with a vocalized Meem (*Mu-*) and kasrah before the final radical (أكرم -> يُكرِم -> مُكرِم).\n- **Agentivity Conditions:** Works unconditionally if prefixed with *Al-*. If naked of *Al-*, it requires present/future temporal indication and reliance on: negation, interrogation, subject antecedent, qualified noun, vocative, or owner of circumstantial state.\n\n### 2. Passive Participle (Ism al-Maf'ul)\n- **Tri-literal:** Formed on *Maf'ul* from passive verbs (كُتِب -> مَكْتُوب، قِيل -> مَقُول، بِيع -> مَبِيع).\n- **Non-tri-literal:** Formed by Meem (*Mu-*) and fat'hah before the final radical (يُسْتَخْرَج -> مُسْتَخْرَج).\n- **Operative Function:** Elevates a deputy agent (*Na'ib Fa'il*). If the original verb was ditransitive, it governs a second accusative object.\n\n### 3. Hyperbolic Participles (Siyagh al-Mubalaghah)\n- Five standard metrics: *Fa''al, Mif'al, Fa'ul, Fa'il, Fa'il* (فَعَّال، مِفْعَال، فَعُول، فَعِيل، فَعِل).\n- Governs objects identically to the active participle.",
          "theoryContentAr": "### ١. إعمال اسم الفاعل وصيغ المبالغة\n- **صياغة اسم الفاعل:** من الثلاثي على وزن (فاعل)، ومن غير الثلاثي على وزن مضارعه مع إبدال حرف المضارعة ميماً مضمومة وكسر ما قبل الآخر.\n- **صيغ المبالغة القياسية الخمس:** (فَعَّال - مِفْعَال - فَعُول - فَعِيل - فَعِل) مثل: عَلَّام، مِقْدَام، غَفُور، سَمِيع، حَذِر.\n- **شروط الإعمال:** تعمل بأل دون قيد أو شرط، وبدون أل بشرطين: الدلالة على الحال والاستقبال والاعتماد على (نفي، استفهام، مبتدأ، موصوف، نداء).\n- **الأثر الإعرابي:** رفع الفاعل (إذا كان لازماً)، ورفع الفاعل ونصب المفعول به (إذا كان متعدياً).\n\n### ٢. إعمال اسم المفعول\n- **صياغته:** من الثلاثي المبني للمجهول على وزن (مَفْعُول)، ومن غير الثلاثي بميم مضمومة وفتح ما قبل الآخر.\n- **الأثر الإعرابي:** يرفع بعده **نائب فاعل** (مثل: الشعبُ مستردٌّ حقُّهُ -> حقُّه نائب فاعل لاسم المفعول).",
          "formulas": [
            {
              "labelEn": "Active Participle Operator Rule",
              "labelAr": "قاعدة إعمال اسم الفاعل",
              "latex": "\\text{اسم الفاعل العامل} + \\text{فاعل} + [\\text{مفعول به}]"
            },
            {
              "labelEn": "Passive Participle Operator Rule",
              "labelAr": "قاعدة إعمال اسم المفعول",
              "latex": "\\text{اسم المفعول العامل} + \\text{نائب فاعل}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry Arabic Curriculum (Secondary 3 Grammar)",
            "bookTitleAr": "كتاب النحو والصرف للثانوية العامة - وزارة التربية والتعليم المصرية",
            "grade": "Secondary 3",
            "term": "Full Year",
            "officialCode": "MOE-S3-AR-GRAM-U1",
            "pageRange": "pp. 12-48"
          },
          "lessonPlan": {
            "titleEn": "Operative Derivatives & Syntactic Complements",
            "titleAr": "المشتقات العاملة ومعمولها الإعرابي",
            "gradeLevel": "Grade 12 (Secondary 3)",
            "durationMinutes": 90,
            "moeCode": "MOE-S3-AR-GRAM-U1",
            "bloomsObjectivesEn": [
              "Derive active and passive participles from all verbal forms.",
              "Verify the fulfillment of agentivity conditions in ministerial sentences.",
              "Parse the governed agents and objects with exact syntactic case markers."
            ],
            "bloomsObjectivesAr": [
              "صياغة اسم الفاعل واسم المفعول وصيغ المبالغة صياغة صرفية دقيقة.",
              "التحقق من استيفاء شروط الإعمال في سياق الجملة.",
              "إعراب معمول المشتق مع ضبط العلامات الأصلية والفرعية بدقة."
            ],
            "prerequisitesEn": [
              "Verb conjugation",
              "Basic sentence roles (Subject/Predicate)"
            ],
            "prerequisitesAr": [
              "أوزان الأفعال المجردة والمزيدة",
              "أركان الجملة الفعلية والاسمية"
            ],
            "keyVocabularyEn": [
              {
                "term": "Ism al-Fa'il",
                "definition": "Active participle indicating the entity carrying out the action."
              },
              {
                "term": "Na'ib Fa'il",
                "definition": "Deputy agent elevated to nominative case after passive verbs or passive participles."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "المشتق العامل",
                "definition": "اسم مشتق يعمل عمل فعله فيرفع فاعلاً أو نائب فاعل وينصب مفعولاً به."
              },
              {
                "term": "سد مسد الخبر",
                "definition": "الفاعل الذي يرفعه المشتق المسبوق بنفي أو استفهام فيغني عن الخبر."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Morphological Formations",
                "phaseAr": "الصياغة الصرفية للأوزان",
                "duration": "25 min",
                "activitiesEn": "Derive participles from varied roots (sound, hollow, defective).",
                "activitiesAr": "تدريبات على صياغة المشتقات من الأفعال الصحيحة والمعتلة."
              },
              {
                "phaseEn": "Agentivity Verification & Parsing",
                "phaseAr": "شروط الإعمال وتطبيق الإعراب",
                "duration": "45 min",
                "activitiesEn": "Analyze ministerial exam sentences identifying the governed noun and case.",
                "activitiesAr": "تطبيق شروط الإعمال وإعراب المعمول في أسئلة الامتحانات السابقة."
              },
              {
                "phaseEn": "Trap Neutralization",
                "phaseAr": "تفكيك أفخاخ الثانوية العامة",
                "duration": "20 min",
                "activitiesEn": "Differentiating between operative participles and non-operative genitive additions.",
                "activitiesAr": "التفريق بين الإعمال والإضافة عند حذف التنوين أو النون."
              }
            ],
            "commonMisconceptionsEn": [
              "Believing that participles without Al cannot operate in past tense.",
              "Confusing passive participle with noun of place or verbal noun in form X."
            ],
            "commonMisconceptionsAr": [
              "الظن بأن المشتق المجرد من أل يعمل إذا كان في زمن الماضي (بل يشترط الحال أو الاستقبال).",
              "عدم الانتباه لحذف التنوين الدال على الإضافة لا الإعمال (المعلمُ شارحُ الدرسِ بالكسر)."
            ],
            "differentiationEn": {
              "struggling": "Provide root-to-participle conversion cards with vowel markings.",
              "advanced": "Analyze complex verses with multiple stacked participles and elided predicates."
            },
            "differentiationAr": {
              "struggling": "جداول تحويل الأفعال إلى مشتقات مع الضبط بالشكل خطوة بخطوة.",
              "advanced": "إعراب شواهد شعرية تشتمل على مشتقات متعددة معمولها مقدم أو مؤخر."
            },
            "formativeAssessmentEn": "Parsing 3 ministerial test sentences with active and passive participles.",
            "formativeAssessmentAr": "اختبار سريع على إعراب معمول المشتق في 3 جمل وزارية.",
            "exitTicketQuestion": {
              "questionEn": "Parse \"Amunhalun al-khayru\": What is the role of al-Khayru?",
              "questionAr": "ما إعراب كلمة (الخيرُ) في قولنا: \"أمُنْهالٌ الخيرُ على بلادِنا؟\"",
              "solutionEn": "Agent (Fa'il) of the active participle that fulfilled the predicate role (sadda masadda al-khabar).",
              "solutionAr": "فاعل لاسم الفاعل سد مسد الخبر مرفوع وعلامة رفعه الضمة الظاهرة."
            }
          },
          "worksheet": {
            "id": "egbac_ar_ch1_ws1",
            "titleEn": "Worksheet 1.1: Operative Derivatives Mastery",
            "titleAr": "ورقة عمل ١-١: إتقان المشتقات العاملة وإعراب المعمول",
            "descriptionEn": "Rigorous syntactic exercises on active/passive participles and agentivity in ministerial questions.",
            "descriptionAr": "تدريبات إعرابية وبلاغية مكثفة على إعمال المشتقات وضبط المعمول في أسئلة الثانوية العامة.",
            "estimatedTimeMinutes": 30,
            "problems": [
              {
                "id": "egbac_ar_ch1_ws_01",
                "titleAr": "إعمال اسم الفاعل",
                "titleEn": "Active Participle Operative Role",
                "difficulty": "medium",
                "questionAr": "أعرب ما تحته خط في: \"أحريصٌ الطالبُ المجدُّ على وقتهِ؟\"",
                "questionEn": "Parse the underlined word in \"Is the diligent student keen on his time?\":",
                "optionsAr": [
                  "فاعل سد مسد الخبر مرفوع بالضمة",
                  "مبتدأ مؤخر مرفوع بالضمة",
                  "خبر مرفوع بالضمة",
                  "مفعول به منصوب بالفتحة"
                ],
                "optionsEn": [
                  "Agent fulfilling predicate role, nominative with Dammah",
                  "Deferred subject",
                  "Predicate",
                  "Direct object"
                ],
                "correctAnswer": "Agent fulfilling predicate role, nominative with Dammah",
                "correctIndex": 0,
                "hintAr": "تطبيق مباشر لقواعد الوحدة المقررة في منهج الثانوية العامة.",
                "hintEn": "Direct application of the Egyptian Ministry syllabus standard.",
                "stepByStepSolutionAr": [
                  "اسم الفاعل (حريص) اعتمد على استفهام ورفع فاعلاً وهو (الطالب) سد مسد الخبر."
                ],
                "stepByStepSolutionEn": [
                  "The active participle Haris relied on interrogation and elevated the agent Talib fulfilling the predicate role."
                ],
                "teacherTipAr": "انتبه إلى التراكيب النحوية والبلاغية المعتمدة في نماذج الإجابة الرسمية.",
                "teacherTipEn": "Ensure precise syntactic and rhetorical parsing matching the official key."
              }
            ]
          },
          "interactiveWidget": {
            "type": "arabic_grammar_lab",
            "titleEn": "Interactive Arabic Grammar & Syntax Studio",
            "titleAr": "معمل النحو والإعراب والتراكيب",
            "descriptionEn": "Interactive sentence tokenizer with syntactic role, case, and ministerial rationale.",
            "descriptionAr": "محلل الجمل التفاعلي لعرض الموقع الإعرابي والعلامة والقاعدة النحوية المعتمدة."
          }
        }
      ],
      "databank": arabicCh1Databank
    },
    {
      "id": "egbac_ar_ch2",
      "chapterNumber": 2,
      "titleEn": "Unit 2: Arabic Rhetoric & Aesthetic Literary Analysis (Advanced Critical Analysis)",
      "titleAr": "الوحدة الثانية: البلاغة العربية وأسرار البيان والتذوق (التحليل النقدي المتقدم)",
      "descriptionEn": "Science of Eloquence (Bayan: Simile, Implicit & Explicit Metaphors, Metonymy, Majaz Mursal), Science of Embellishment (Badi': Paronomasia, Antithesis, Double Entendre), Science of Meanings (Ma'ani: Restriction, Sentence modalities, Brevity & Expansion), and Organic Poetic Unity.",
      "descriptionAr": "علم البيان (التشبيه بأنواعه، الاستعارة المكنية والتصريحية، الكناية وسر جمالها، المجاز المرسل بعلاقاته)، علم البديع (المحسنات اللفظية والمعنوية: الجناس، الطباق، المقابلة، التورية)، علم المعاني (أساليب القصر والتوكيد، الإيجاز والإطناب)، والوحدة العضوية والتجربة الشعرية.",
      "isFullyEquipped": true,
      "lessons": [
        {
          "id": "egbac_ar_ch2_l1",
          "titleEn": "Science of Eloquence (Bayan): Similes, Metaphors & Majaz Mursal",
          "titleAr": "علم البيان: التشبيه، الاستعارة، الكناية، والمجاز المرسل",
          "summaryEn": "Distinguishing eloquent similes from implicit metaphors, identifying explicit metaphors in Quranic and poetic contexts, and mapping synecdochic Majaz relations with their aesthetic secrets.",
          "summaryAr": "التفريق بين التشبيه البليغ والاستعارة المكنية والتصريحية، استكشاف علاقات المجاز المرسل الثمانية، وبيان أسرار الجمال (تشخيص، تجسيم، توضيح).",
          "theoryContentEn": "### 1. The Eloquent Simile (Tashbih Baligh)\n- Consists exclusively of the tenor (*Mushabbah*) and vehicle (*Mushabbah bih*).\n- Four classic forms:\n  1. Subject and Predicate: *العلمُ نورٌ*.\n  2. Circumstantial state: *هجم الجندي أسداً*.\n  3. Absolute object (Cognate accusative): *أقدم الجندي إقدامَ الليثِ*.\n  4. Genitive addition: *نورُ العلمِ، ظلامُ الجهلِ*.\n\n### 2. Metaphor (Isti'arah)\n- **Implicit (Makniyyah):** Vehicle is elided; inferred by a telltale attribute (e.g. *طارت الأخبار* - news compared to a bird). Secret of beauty: Personification or Embodiment.\n- **Explicit (Tasrihiyyah):** Vehicle is declared while tenor is elided (e.g. *واعتصموا بحبل الله* - divine religion compared to a rope).\n\n### 3. Majaz Mursal\n- Word used figuratively due to a non-similarity relation:\n  - Partial (*Juz'iyyah*): Mentioning a part for the whole.\n  - Total (*Kulliyyah*): Mentioning the whole for a part.\n  - Locative (*Mahalliyyah*): Mentioning the place for its inhabitants.\n  - Inhabitant (*Haliyyah*): Mentioning the occupants for the place.\n  - Causal (*Sababiyyah*) & Resultant (*Musabbabiyyah*).",
          "theoryContentAr": "### ١. التشبيه البليغ وصوره الأربع\n- ما حذفت منه الأداة ووجه الشبه وبقي المشبه والمشبه به.\n- صوره في امتحانات الثانوية العامة:\n  ١. **المبتدأ والخبر:** (العلمُ نورٌ، الجهلُ ظلامٌ).\n  ٢. **الحال وصاحبها:** (هجمَ الجنديُّ على الأعداءِ أسداً).\n  ٣. **المفعول المطلق المبين للنوع:** (أقدمَ المقاتلُ إقدامَ الليثِ).\n  ٤. **إضافة المشبه به إلى المشبه:** (ارتشفنا رحيقَ العلمِ، لبسنا ثوبَ العافيةِ).\n\n### ٢. الاستعارة المكنية والتصريحية\n- **الاستعارة المكنية:** تشبيه بليغ حُذف منه المشبه به ورُمز له بصفة من خصائصه (مثل: ضحكتْ أزهارُ الحديقةِ، أنشبتِ المنيةُ أظفارَها).\n- **الاستعارة التصريحية:** تشبيه بليغ صُرّح فيه بلفظ المشبه به وحُذف المشبه (مثل: أقبلَ البدرُ يشرحُ الدرسَ -> شبه المعلم بالبدر).\n- **أسرار الجمال:**\n  - **التشخيص:** تشبيه غير العاقل بعاقل (مثل: شاكٍ إلى البحر).\n  - **التجسيم:** تشبيه الأمر المعنوي بشيء مادي (مثل: اعتصموا بحبل الله).\n  - **التوضيح:** تشبيه مادي بمادي أو معنوي بمعنوي.",
          "formulas": [
            {
              "labelEn": "Simile to Metaphor Transformation",
              "labelAr": "معادلة تحول التشبيه إلى استعارة",
              "latex": "\\text{تشبيه بليغ} - \\text{مشبه به} = \\text{استعارة مكنية} \\quad | \\quad \\text{تشبيه بليغ} - \\text{مشبه} = \\text{استعارة تصريحية}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry Rhetoric & Literary Appreciation (Grade 12)",
            "bookTitleAr": "البلاغة العربية والتذوق الأدبي للثانوية العامة - وزارة التربية والتعليم",
            "grade": "Secondary 3",
            "term": "Full Year",
            "officialCode": "MOE-S3-AR-RHET-U2",
            "pageRange": "pp. 50-88"
          },
          "lessonPlan": {
            "titleEn": "Figures of Eloquence (Bayan) & Secrets of Artistic Beauty",
            "titleAr": "علم البيان وأسرار الجمال الفني",
            "gradeLevel": "Grade 12 (Secondary 3)",
            "durationMinutes": 90,
            "moeCode": "MOE-S3-AR-RHET-U2",
            "bloomsObjectivesEn": [
              "Differentiate between figurative expressions and literal reality.",
              "Deconstruct metaphors identifying tenor, vehicle, and elided elements.",
              "Assign correct aesthetic beauty secrets (Personification, Embodiment, Clarification)."
            ],
            "bloomsObjectivesAr": [
              "التمييز بين التعبير الحقيقي والتعبير المجازي.",
              "تفكيك الاستعارات وتحديد المشبه والمشبه به والقرينة المانعة.",
              "تحديد سر الجمال (تشخيص / تجسيم / توضيح) بدقة متناهية."
            ],
            "prerequisitesEn": [
              "Poetic reading",
              "Basic simile concepts"
            ],
            "prerequisitesAr": [
              "قراءة الأبيات الشعرية",
              "أركان التشبيه الأساسية"
            ],
            "keyVocabularyEn": [
              {
                "term": "Tashkhis",
                "definition": "Personification: Likening an inanimate or non-human entity to a human."
              },
              {
                "term": "Tajsim",
                "definition": "Embodiment: Likening an abstract concept to a tangible physical object."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "التشخيص",
                "definition": "إعطاء صفات الإنسان العاقل لما ليس بإنسان كالبحر أو الرياح."
              },
              {
                "term": "التجسيم",
                "definition": "تحويل المعاني العقلية المجردة إلى صور حسية مجسمة تراها وتلمسها."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Simile Review & Metaphor Discovery",
                "phaseAr": "مراجعة التشبيه واستنتاج الاستعارة",
                "duration": "30 min",
                "activitiesEn": "Converting similes into implicit and explicit metaphors.",
                "activitiesAr": "تحويل التشبيهات البليغة إلى استعارات مكنية وتصريحية."
              },
              {
                "phaseEn": "Majaz Mursal & Relations",
                "phaseAr": "المجاز المرسل وعلاقاته",
                "duration": "35 min",
                "activitiesEn": "Examining poetic and Quranic verses with synecdochic and locative relations.",
                "activitiesAr": "تحليل علاقات الجزئية والكلية والمحلية والحالية في نصوص الشعر الكلاسيكي والحديث."
              },
              {
                "phaseEn": "Aesthetic Secrets Evaluation",
                "phaseAr": "تطبيق أسرار الجمال والتقييم",
                "duration": "25 min",
                "activitiesEn": "Assigning and defending beauty secrets for 5 exam verses.",
                "activitiesAr": "تحديد سر الجمال لخمسة شواهد من امتحانات الثانوية العامة السابقة."
              }
            ],
            "commonMisconceptionsEn": [
              "Confusing implicit metaphor with explicit metaphor by mistaking the declared word for the tenor.",
              "Assuming all metaphors personify without checking whether the vehicle is human."
            ],
            "commonMisconceptionsAr": [
              "الخلط بين الاستعارة المكنية والتصريحية عند تحديد الطرف المحذوف.",
              "القول بأن سر الجمال تشخيص في كل صورة دون التأكد من أن المشبه به إنسان."
            ],
            "differentiationEn": {
              "struggling": "Use tabular matching: Tenor + Vehicle + Preserved element = Trope.",
              "advanced": "Analyze compound extended imagery in Khalil Mutran's Al-Masa' ode."
            },
            "differentiationAr": {
              "struggling": "جدول مقارنة ثلاثي: المشبه + المشبه به + المحذوف = نوع الصورة.",
              "advanced": "تحليل الصورة الكلية (صوت ولون وحركة) والصور المركبة في قصيدة المساء لمطران."
            },
            "formativeAssessmentEn": "Classifying 4 literary quotes into simile, metaphor, or metonymy.",
            "formativeAssessmentAr": "تصنيف 4 عبارات أدبية إلى تشبيه بليغ، استعارة مكنية، استعارة تصريحية، ومجاز مرسل.",
            "exitTicketQuestion": {
              "questionEn": "What is the trope in \"I complained to the sea\"?",
              "questionAr": "ما اللون البياني وسر جماله في: \"شاكٍ إلى البحرِ اضطرابَ خواطري\"؟",
              "solutionEn": "Implicit metaphor (Makniyyah); beauty secret is personification (Tashkhis).",
              "solutionAr": "استعارة مكنية حيث شبه البحر بإنسان يشكو إليه، وسر جمالها التشخيص."
            }
          },
          "worksheet": {
            "id": "egbac_ar_ch2_ws1",
            "titleEn": "Worksheet 2.1: Rhetorical Imagery & Tropes",
            "titleAr": "ورقة عمل ٢-١: الصور البيانية وأسرار الجمال",
            "descriptionEn": "Analytical practice distinguishing similes, implicit/explicit metaphors, metonymy and majaz mursal.",
            "descriptionAr": "تدريبات تحليلية للتفريق بين التشبيه والاستعارة المكنية والتصريحية والكناية والمجاز المرسل.",
            "estimatedTimeMinutes": 30,
            "problems": [
              {
                "id": "egbac_ar_ch2_ws_01",
                "titleAr": "الاستعارة التصريحية",
                "titleEn": "Explicit Metaphor Analysis",
                "difficulty": "medium",
                "questionAr": "حدد نوع الصورة البيانية في قوله تعالى: \"واعتصموا بحبلِ اللهِ جميعاً\":",
                "questionEn": "Identify the trope in \"And cling fast to the rope of Allah\":",
                "optionsAr": [
                  "استعارة تصريحية",
                  "استعارة مكنية",
                  "تشبيه بليغ",
                  "مجاز مرسل"
                ],
                "optionsEn": [
                  "Explicit Metaphor (Tasrihiyyah)",
                  "Implicit Metaphor",
                  "Eloquent Simile",
                  "Majaz Mursal"
                ],
                "correctAnswer": "Explicit Metaphor (Tasrihiyyah)",
                "correctIndex": 0,
                "hintAr": "تطبيق مباشر لقواعد الوحدة المقررة في منهج الثانوية العامة.",
                "hintEn": "Direct application of the Egyptian Ministry syllabus standard.",
                "stepByStepSolutionAr": [
                  "شبه دين الله وعهده بالحبل الموثوق، وحذف المشبه وصرح بلفظ المشبه به (حبل الله)."
                ],
                "stepByStepSolutionEn": [
                  "Religion is likened to a sturdy rope; the tenor was elided and the vehicle declared."
                ],
                "teacherTipAr": "انتبه إلى التراكيب النحوية والبلاغية المعتمدة في نماذج الإجابة الرسمية.",
                "teacherTipEn": "Ensure precise syntactic and rhetorical parsing matching the official key."
              }
            ]
          },
          "interactiveWidget": {
            "type": "arabic_rhetoric_lab",
            "titleEn": "Rhetorical Tropes & Aesthetic Figures Studio",
            "titleAr": "مختبر الصور البيانية والبلاغة",
            "descriptionEn": "Interactive breakdown of rhetorical tropes and beauty secrets.",
            "descriptionAr": "تحليل تفاعلي للصور البيانية واستكشاف سر الجمال والمحسنات البديعية."
          }
        }
      ],
      "databank": arabicCh2Databank
    },
    {
      "id": "egbac_ar_ch3",
      "chapterNumber": 3,
      "titleEn": "Unit 3: Arabic Literature, Poetic Movements & Modern Prose (Advanced Critical Analysis)",
      "titleAr": "الوحدة الثالثة: الأدب العربي والمدارس الأدبية وفنون النثر (التحليل النقدي المتقدم)",
      "descriptionEn": "Neoclassical Revival (Al-Baroudi, Shawqi), Romantic Trend (Mutran), Diwan School (Al-Aqqad, Al-Mazini, Shukri), Apollo Movement (Abu Shadi, Naji), Mahjar Diaspora (Pen League & Andalusian League), Realist Free Verse, and Modern Prose Genres (Essay, Novel, Short Story, Theatre).",
      "descriptionAr": "مدرسة الإحياء والبعث وجيل التطوير (البارودي، شوقي، حافظ)، الاتجاه الوجداني (مطران)، مدرسة الديوان (العقاد، المازني، شكري)، مدرسة أبوللو (أبو شادي، ناجي)، مدرسة المهاجر (الرابطة القلمية والعصبة الأندلسية)، المدرسة الواقعية، وفنون النثر (المقال، الرواية، القصة القصيرة، المسرحية).",
      "isFullyEquipped": true,
      "lessons": [
        {
          "id": "egbac_ar_ch3_l1",
          "titleEn": "Neoclassical Revival School & The Pioneers of Poetic Modernization",
          "titleAr": "مدرسة الإحياء والبعث وجيل التطوير وتطور الشعر العربي الحديث",
          "summaryEn": "Historical conditions of poetic revival under Al-Baroudi, classical imitation and emulation, and the modernization achieved by Shawqi and Hafiz Ibrahim in connecting poetry to societal affairs.",
          "summaryAr": "الظروف التاريخية لبعث الشعر العربي مع البارودي، معارضة فحول الشعراء القدامى، والتطوير الذي أحدثه جيل تلاميذ البارودي بريادة أحمد شوقي وحافظ إبراهيم.",
          "theoryContentEn": "### 1. The Revival and Renaissance (Ihya' & Ba'th)\n- **Founder:** Mahmoud Sami al-Baroudi.\n- **Mission:** Resurrecting classical Arabic poetry from Ottoman and Mamluk stagnation, emulating Abbasid and pre-Islamic masters in strength of diction, rhythmic purity, and structural grandeur.\n- **Key Poetic Technique:** *Mu'aradah* (poetic emulation on the same meter and rhyme).\n\n### 2. Disciples of Baroudi (Jeel al-Tatweer)\n- **Pioneers:** Ahmad Shawqi (Prince of Poets), Hafiz Ibrahim (Poet of the Nile), and Ahmad Muharram.\n- **Factors of Renewal:**\n  1. Cultural contact with Europe and mastery of foreign languages.\n  2. The emergence of the Egyptian national movement against British occupation.\n  3. Universal Muslim solidarity and defense of the Ottoman Caliphate.\n  4. Freedom of the press, encouraging poetry that tackled everyday political and social issues.\n- **Shawqi's Evolutionary Shifts:**\n  - Shifting from court praise to history (e.g., *Kibar al-Hawadith fi Wadi al-Nil*).\n  - Depicting modern technological inventions (planes, ships).\n  - Pioneering Arabic poetic drama (*Masrah Shi'ri*: Ali Bey al-Kabir, Majnun Layla, Cleopatre).",
          "theoryContentAr": "### ١. مدرسة الإحياء والبعث (محمود سامي البارودي)\n- **الهدف:** إنقاذ الشعر العربي من عصور التراجع والمملوكية والتركية، والعودة به إلى عصور القوة والازدهار (الجاهلي، الإسلامي، العباسي).\n- **الخصائص الفنية:**\n  - جزالة الألفاظ وفصاحتها، وقوة الرنين الموسيقي.\n  - محاكاة فحول الشعراء القدامى (المعارضة الشعرية).\n  - شيوع الحكمة في مطالع ومقاطع القصائد.\n\n### ٢. جيل التطوير (أحمد شوقي، حافظ إبراهيم، أحمد محرم)\n- **عوامل التطوير لديهم:**\n  - الانفتاح على الثقافة الغربية وقراءة المسارح الفرنسية (شوقي).\n  - نضال الحركة الوطنية ضد الاحتلال البريطاني، وحادثة دنشواي.\n  - نشأة الصحافة التي أدت إلى سلاسة الأسلوب وسهولته.\n- **مظاهر التجديد عند أحمد شوقي:**\n  - العدول عن المديح إلى التاريخ (كبار الحوادث في وادي النيل).\n  - وصف المخترعات والمنجزات العصرية الحديثة (الطائرة، الباخرة).\n  - ريادة المسرح الشعري العربي (علي بك الكبير، مجنون ليلى، مصرع كليوباترا).",
          "formulas": [
            {
              "labelEn": "Neoclassical Synthesis Rule",
              "labelAr": "معادلة جيل التطوير الكلاسيكي",
              "latex": "\\text{الأخذ من التراث الكلاسيكي} + \\text{الالتفات لثقافة العصر وقضايا المجتمع}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry History of Arabic Literature (Secondary 3)",
            "bookTitleAr": "تاريخ الأدب العربي للثانوية العامة - وزارة التربية والتعليم المصرية",
            "grade": "Secondary 3",
            "term": "Full Year",
            "officialCode": "MOE-S3-AR-LIT-U3",
            "pageRange": "pp. 90-135"
          },
          "lessonPlan": {
            "titleEn": "The Neoclassical Revival & Literary Movements",
            "titleAr": "الإحياء والبعث وتاريخ المدارس الأدبية",
            "gradeLevel": "Grade 12 (Secondary 3)",
            "durationMinutes": 90,
            "moeCode": "MOE-S3-AR-LIT-U3",
            "bloomsObjectivesEn": [
              "Analyze the historical conditions prompting the poetic revival.",
              "Contrast the neoclassical school with romantic movements.",
              "Identify markers of neoclassical innovation in Ahmed Shawqi's poetry."
            ],
            "bloomsObjectivesAr": [
              "تحليل العوامل التاريخية والوطنية التي قادت إلى بعث الشعر العربي.",
              "المقارنة الفنية بين الاتجاه الكلاسيكي والاتجاهات الرومانسية اللاحقة.",
              "استخراج مظاهر التجديد الفني والموضوعي في شعر أحمد شوقي وحافظ إبراهيم."
            ],
            "prerequisitesEn": [
              "Familiarity with Arab historical epochs",
              "Poetic stanza structures"
            ],
            "prerequisitesAr": [
              "العصور الأدبية العربية وتطورها",
              "أوزان الشعر ونظام الشطرين"
            ],
            "keyVocabularyEn": [
              {
                "term": "Mu'aradah",
                "definition": "Poetic emulation where a poet matches an earlier master on the same meter, rhyme, and theme."
              },
              {
                "term": "Masrah Shi'ri",
                "definition": "Poetic theatrical drama introduced into Arabic by Ahmed Shawqi."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "المعارضة الشعرية",
                "definition": "أن ينظم الشاعر قصيدة على وزن وقافية قصيدة شاعر سابق مع منافسته في المعنى."
              },
              {
                "term": "المسرح الشعري",
                "definition": "كتابة النص المسرحي في قالب شعري موزون، وكان شوقي رائده الأول في الأدب العربي."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Historical Stagnation & Baroudi's Leap",
                "phaseAr": "عصر التراجع ووثبة البارودي",
                "duration": "25 min",
                "activitiesEn": "Reading excerpts demonstrating how Baroudi restored muscular Arabic phrasing.",
                "activitiesAr": "قراءة نماذج من شعر البارودي تبرز جزالة العبارة وفصاحتها بعد ركود طويل."
              },
              {
                "phaseEn": "Shawqi's Pioneering Modernizations",
                "phaseAr": "تطوير شوقي وريادة المسرح",
                "duration": "40 min",
                "activitiesEn": "Analyzing Shawqi's poems on airplanes, steamships, and Pharaoh history.",
                "activitiesAr": "تحليل شواهد شوقي في وصف الطائرة والباخرة وقصيدته التاريخية كبار الحوادث."
              },
              {
                "phaseEn": "Comparative Synthesis",
                "phaseAr": "المقارنة بين المدارس الأدبية",
                "duration": "25 min",
                "activitiesEn": "Contrasting classical imitation with Mutran's romantic subjectivity.",
                "activitiesAr": "مقارنة خصائص الإحياء بالاتجاه الوجداني والديوان في أسئلة الامتحان."
              }
            ],
            "commonMisconceptionsEn": [
              "Thinking Neoclassicists only copied the past without innovating.",
              "Confusing the Diwan School with the Apollo movement."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن تلاميذ البارودي اكتفوا بالتقليد الأعمى دون معالجة قضايا عصرهم.",
              "الخلط بين مآخذ مدرسة الديوان على الإحيائيين ومآخذ مدرسة أبوللو."
            ],
            "differentiationEn": {
              "struggling": "Provide a chronological movement map comparing the 6 poetic schools.",
              "advanced": "Critique whether Shawqi's mu'aradah of Al-Busiri surpassed the original Burdah."
            },
            "differentiationAr": {
              "struggling": "مخطط زمني مقارن لمدارس الشعر الست (الإحياء، الوجداني، الديوان، أبوللو، المهاجر، الواقعية).",
              "advanced": "مقارنة نقدية بين نهج البردة لشوقي وقصيدة البردة للبوصيري في ميزان التجديد."
            },
            "formativeAssessmentEn": "Matching 4 poetic traits to their respective literary school.",
            "formativeAssessmentAr": "نسبة 4 سمات فنية إلى مدارسها الأدبية الصحيحة.",
            "exitTicketQuestion": {
              "questionEn": "Name two historical innovations by Ahmed Shawqi.",
              "questionAr": "اذكر مظهرين من مظاهر التجديد عند أحمد شوقي في موضوعات الشعر العربي.",
              "solutionEn": "Shifting to historical epics (Kibar al-Hawadith) and pioneering Arabic poetic drama.",
              "solutionAr": "العدول عن المديح إلى التاريخ، وريادة المسرح الشعري، ووصف المنجزات العصرية."
            }
          },
          "worksheet": {
            "id": "egbac_ar_ch3_ws1",
            "titleEn": "Worksheet 3.1: Poetic Movements & Historical Hallmarks",
            "titleAr": "ورقة عمل ٣-١: المدارس الشعرية والسمات الفنية",
            "descriptionEn": "Comprehensive exercises identifying poetic movements, artistic traits, and modern Arabic prose forms.",
            "descriptionAr": "تدريبات شاملة على تحديد سمات المدارس الشعرية والوجدانية وفنون النثر العربي الحديث.",
            "estimatedTimeMinutes": 30,
            "problems": [
              {
                "id": "egbac_ar_ch3_ws_01",
                "titleAr": "مدرسة الإحياء والبعث",
                "titleEn": "Revival School Milestones",
                "difficulty": "medium",
                "questionAr": "ما المظهر التجديدي الذي انفرد به أحمد شوقي عن سائر شعراء عصره؟",
                "questionEn": "What unique renewal milestone did Ahmed Shawqi pioneer over his contemporaries?",
                "optionsAr": [
                  "ريادة المسرح الشعري العربي",
                  "الدعوة للشعر الحر والتفعيلة",
                  "الامتزاج الكامل بالطبيعة والتشاؤم",
                  "إلغاء الوزن والقافية"
                ],
                "optionsEn": [
                  "Pioneering Arabic Poetic Drama",
                  "Calling for Free Verse",
                  "Complete romantic nature fusion",
                  "Abolishing meter and rhyme"
                ],
                "correctAnswer": "Pioneering Arabic Poetic Drama",
                "correctIndex": 0,
                "hintAr": "تطبيق مباشر لقواعد الوحدة المقررة في منهج الثانوية العامة.",
                "hintEn": "Direct application of the Egyptian Ministry syllabus standard.",
                "stepByStepSolutionAr": [
                  "انفرد أحمد شوقي بريادة المسرح الشعري العربي مثل مسرحيات مصرع كليوباترا ومجنون ليلى وعلي بك الكبير."
                ],
                "stepByStepSolutionEn": [
                  "Shawqi uniquely pioneered Arabic poetic drama with classic works like Majnun Layla and Cleopatra."
                ],
                "teacherTipAr": "انتبه إلى التراكيب النحوية والبلاغية المعتمدة في نماذج الإجابة الرسمية.",
                "teacherTipEn": "Ensure precise syntactic and rhetorical parsing matching the official key."
              }
            ]
          },
          "interactiveWidget": {
            "type": "arabic_grammar_lab",
            "titleEn": "Interactive Arabic Literary & Grammar Studio",
            "titleAr": "معمل النحو والإعراب والأدب التفاعلي",
            "descriptionEn": "Interactive exploration of literary schools and grammar parsing.",
            "descriptionAr": "استكشاف تفاعلي للمدارس الأدبية وشواهدها الشعرية والنثرية."
          }
        }
      ],
      "databank": arabicCh3Databank
    },
    {
      "id": "egbac_ar_ch4",
      "chapterNumber": 4,
      "titleEn": "Unit 4: Analytical Texts, Critical Reading, Orthography & Composition (Advanced Critical Analysis)",
      "titleAr": "الوحدة الرابعة: النصوص المتحررة والقراءة النقدية والإملاء والتعبير (التحليل النقدي المتقدم)",
      "descriptionEn": "Critical Reading strategies (Central & implicit thesis, semantic transitions: cause, effect, itemization, concession), Modern ministerial essay patterns (Claim vs Refutation, Phenomenon vs Explanation, Problem vs Solution), and Exact Orthography rules (Medial & Terminal Hamza inflections, Types of Waw, and Punctuation).",
      "descriptionAr": "استراتيجيات القراءة المتحررة (الفكرة الرئيسة والضمنية، العلاقات الدلالية بين الجمل: التعليل، النتيجة، التفصيل، الاستدراك)، أنماط التعبير الحديث للثانوية العامة (زعم وتفنيد، ظاهرة وتفسير، مشكلة وحل، رأي ودليل)، وقواعد الإملاء ورسم الهمزات وعلامات الترقيم.",
      "isFullyEquipped": true,
      "lessons": [
        {
          "id": "egbac_ar_ch4_l1",
          "titleEn": "Critical Reading Strategies & Ministerial Orthography Mastery",
          "titleAr": "استراتيجيات القراءة المتحررة وقواعد الإملاء ورسم الهمزات",
          "summaryEn": "Analyzing contextual relationships between clauses, differentiating empirical facts from subjective assertions, and applying precision orthography rules for medial and terminal Hamzas based on case markings.",
          "summaryAr": "تحليل العلاقات الدلالية بين الجمل والفقرات، التمييز بين الحقائق العلمية والآراء الذاتية والمزاعم، وضبط رسم الهمزات المتوسطة والمتطرفة بدقة وفق الحالة الإعرابية.",
          "theoryContentEn": "### 1. Critical Reading Relationships (Al-Alaqat al-Dimniyyah)\n- **Ta'lil (Causal Justification):** Answers \"Why?\" (e.g., *لأنه، بسبب، كي، حتى*).\n- **Natijah (Consequence/Result):** Represents the natural outcome of a condition or action.\n- **Tafsil ba'd Ijmal (Itemization after Summary):** Listing constituent parts after an umbrella term.\n- **Istidrak (Rectification):** Correcting potential misunderstandings using *لكن، بيد أن، غير أن*.\n\n### 2. Modern Composition Paradigms\n- **Claim & Refutation (Za'm wa Tafnid):** Presenting a popular myth or ungrounded statement and dismantling it with empirical facts.\n- **Phenomenon & Explanation (Zahirah wa Tafsir):** Analyzing a tangible observed event (e.g. desertification, climate warming) through physical/chemical laws.\n- **Problem & Solution (Mushkilah wa Hall):** Highlighting a crisis and putting forward actionable interventions.\n\n### 3. Ministerial Orthography Rules (Al-Imla')\n- **Medial Hamza Hierarchy:** Kasrah (Nabrah / ي) > Dammah (Waw / ؤ) > Fat'hah (Alif / أ) > Sukun.\n- **Terminal Hamza with Pronouns (علماء):**\n  - Nominative (Marfu'): *عُلَمَاؤُنَا* (on Waw).\n  - Accusative (Mansub): *عُلَمَاءَنَا* (on the line).\n  - Genitive (Majrur): *عُلَمَائِنَا* (on Nabrah / Ya).",
          "theoryContentAr": "### ١. العلاقات الضمنية بين الجمل في القراءة المتحررة\n- **التعليل:** الجملة تبين سبب ما قبلها وتصلح جواباً لسؤال يبدأ بـ (لماذا؟ أو ما العلة؟).\n- **النتيجة:** الجملة تمثل أثراً وثمرة مترتبة على أمر سابق (خاصة في جواب الشرط والطلب).\n- **التفصيل بعد الإجمال:** ذكر أجزاء الشيء وعناصره بعد ذكره مجملاً (مثل: \"بني الإسلام على خمس...\").\n- **الاستدراك:** منع السامع من فهم معنى خاطئ غير مقصود (باستخدام: لكن، بيد أن، غير أن).\n\n### ٢. أنماط التعبير الحديث في امتحانات الثانوية العامة\n- **زعم وتفنيد:** يبدأ الكاتب برأي مغلوط شائع أو فكرة غير دقيقة (الزعم)، ثم يدحضها بالأدلة العلمية القاطعة (التفنيد).\n- **ظاهرة وتفسير:** يتناول الكاتب أمراً واقعاً ملموساً في الطبيعة أو المجتمع (الظاهرة)، ثم يحلل أسبابه وعلله العلمية (التفسير).\n- **مشكلة وحل:** استعراض أزمة معقدة يعاني منها المجتمع، ثم اقتراح خطوات علاجية عملية قابلة للتطبيق.\n\n### ٣. قواعد الإملاء ورسم الهمزات للثانوية العامة\n- **سلم الحركات في الهمزة المتوسطة:** الكسرة (أقواها وتناسبها النبرة) > الضمة (تناسبها الواو) > الفتحة (تناسبها الألف) > السكون.\n- **الهمزة المتطرفة المتصلة بضمير (علماء / أبناء):**\n  - في حالة الرفع: ترسم على الواو (جاء **علماؤُنا**).\n  - في حالة النصب: ترسم على السطر (إنَّ **علماءَنا** منارات).\n  - في حالة الجر: ترسم على نبرة/ياء (نقتدي بآثار **علمائِنا**).",
          "formulas": [
            {
              "labelEn": "Terminal Hamza Case-Spelling Mapping",
              "labelAr": "معادلة رسم الهمزة المتطرفة حسب الموقع الإعرابي",
              "latex": "\\text{رفع: } -\\text{اؤُنا} \\quad | \\quad \\text{نصب: } -\\text{اءَنا} \\quad | \\quad \\text{جر: } -\\text{ائِنَا}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry Critical Reading & Orthography (Grade 12)",
            "bookTitleAr": "القراءة المتحررة وفنون التعبير والإملاء للثانوية العامة - وزارة التربية والتعليم",
            "grade": "Secondary 3",
            "term": "Full Year",
            "officialCode": "MOE-S3-AR-READ-U4",
            "pageRange": "pp. 140-195"
          },
          "lessonPlan": {
            "titleEn": "Critical Reading Transitions & Orthographic Precision",
            "titleAr": "العلاقات الدلالية في القراءة المتحررة وقواعد الإملاء",
            "gradeLevel": "Grade 12 (Secondary 3)",
            "durationMinutes": 90,
            "moeCode": "MOE-S3-AR-READ-U4",
            "bloomsObjectivesEn": [
              "Determine implicit semantic relationships (Cause, Consequence, Detail, Rectification).",
              "Distinguish between Claim-Refutation and Phenomenon-Explanation essay patterns.",
              "Spell medial and terminal Hamzas with 100% orthographic accuracy."
            ],
            "bloomsObjectivesAr": [
              "تحديد العلاقات الضمنية بين الجمل بدقة (تعليل، نتيجة، تفصيل، استدراك).",
              "التمييز بين أنماط التعبير الحديث (زعم وتفنيد مقابل ظاهرة وتفسير).",
              "كتابة الهمزات المتطرفة والمتوسطة وعلامات الترقيم كتابة إملائية ونحوية خالية من الخطأ."
            ],
            "prerequisitesEn": [
              "Textual reading",
              "Basic syntactic markers"
            ],
            "prerequisitesAr": [
              "استيعاب المقروء",
              "مواقع الرفع والنصب والجر"
            ],
            "keyVocabularyEn": [
              {
                "term": "Za'm wa Tafnid",
                "definition": "Claim and Refutation: Presenting an invalid assertion and disproving it with facts."
              },
              {
                "term": "Zahirah wa Tafsir",
                "definition": "Phenomenon and Explanation: Stating an observable event and identifying its scientific causes."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "زعم وتفنيد",
                "definition": "عرض ادعاء باطل وتفنيده بالحجج والبراهين العقلية والعلمية."
              },
              {
                "term": "الهمزة بحسب الإعراب",
                "definition": "تغير كتابة الهمزة المتطرفة على واو في الرفع وعلى السطر في النصب وعلى نبرة في الجر."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Critical Reading Dissection",
                "phaseAr": "تفكيك العلاقات في القراءة المتحررة",
                "duration": "30 min",
                "activitiesEn": "Analyzing authentic ministerial reading paragraphs identifying Ta'lil and Natijah.",
                "activitiesAr": "تحليل فقرات قراءة متحررة من امتحانات سابقة واستنتاج العلاقات الضمنية."
              },
              {
                "phaseEn": "Modern Essay Patterns Practice",
                "phaseAr": "أنماط التعبير الحديث",
                "duration": "30 min",
                "activitiesEn": "Evaluating sample paragraphs for claim-refutation vs problem-solution structures.",
                "activitiesAr": "تدريبات على تحديد النموذج الأنسب للربط بين الفقرات (زعم وتفنيد، ظاهرة وتفسير)."
              },
              {
                "phaseEn": "Orthography & Hamza Workshop",
                "phaseAr": "ورشة رسم الهمزات وعلامات الترقيم",
                "duration": "30 min",
                "activitiesEn": "Drilling terminal Hamza changes in varied syntactic contexts (Kana, Inna, Subject).",
                "activitiesAr": "تدريبات إملائية مكثفة على كتابة (علماؤنا / علماءنا / علمائنا) بعد كان وإن وأفعال المقاربة."
              }
            ],
            "commonMisconceptionsEn": [
              "Confusing causal justification (Ta'lil) with consequential result (Natijah).",
              "Spelling the terminal hamza on Nabrah in accusative contexts after Inna."
            ],
            "commonMisconceptionsAr": [
              "الخلط بين التعليل والنتيجة (التعليل يسبق النتيجة في الترتيب الزمني والسببي).",
              "كتابة الهمزة على نبرة بعد إنَّ ظناً بأنها مجرورة بدلاً من كتابتها على السطر منصوبة."
            ],
            "differentiationEn": {
              "struggling": "Use the \"Why?\" test for Ta'lil and \"What happens next?\" test for Natijah.",
              "advanced": "Evaluate nuanced texts contrasting subtle distinctions between hypothesis and factual deduction."
            },
            "differentiationAr": {
              "struggling": "استخدام اختبار (لماذا؟) لاكتشاف التعليل، واختبار (ماذا ترتب عليه؟) لاكتشاف النتيجة.",
              "advanced": "تحليل نصوص فكرية معقدة واستخراج الأفكار الضمنية غير المصرح بها مباشرة."
            },
            "formativeAssessmentEn": "Spelling the word \"Abna'una\" in 3 sentences: nominative, accusative, genitive.",
            "formativeAssessmentAr": "كتابة كلمة (أبناؤنا) مضبوطة بالشكل في 3 جمل: فاعل، اسم إن، ومضاف إليه.",
            "exitTicketQuestion": {
              "questionEn": "Choose correct spelling: Inna _______ yukrimuna watanahum (our scholars).",
              "questionAr": "اختر الصواب إملائياً ونحوياً: \"إنَّ _______ يخدمونَ وطنَهُم بإخلاص\" (علماءنا / علماؤنا / علمائنا):",
              "solutionEn": "Ulama'ana (علماءنا) on the line because it is the accusative noun of Inna.",
              "solutionAr": "علماءَنا (على السطر) لأنها اسم إن منصوب بالفتحة الظاهرة."
            }
          },
          "worksheet": {
            "id": "egbac_ar_ch4_ws1",
            "titleEn": "Worksheet 4.1: Critical Reading & Orthographic Traps",
            "titleAr": "ورقة عمل ٤-١: القراءة النقدية وأفخاخ الإملاء",
            "descriptionEn": "Mastery questions on paragraph logical relationships, thesis refutation structures, and case-sensitive orthography.",
            "descriptionAr": "تدريبات إتقان على العلاقات الضمنية بين الجمل (تعليل، نتيجة، استدراك) وضوابط كتابة الهمزات.",
            "estimatedTimeMinutes": 30,
            "problems": [
              {
                "id": "egbac_ar_ch4_ws_01",
                "titleAr": "رسم الهمزات حسب الإعراب",
                "titleEn": "Hamza Orthography Governed by Case",
                "difficulty": "medium",
                "questionAr": "اختر الرسم الإملائي والنحوي الصحيح: \"كانَ _______ مصابيحَ الدجى\":",
                "questionEn": "Select correct spelling: \"Kana _______ masabiha ad-duja\":",
                "optionsAr": [
                  "علماؤُنا",
                  "علماءَنا",
                  "علمائِنا",
                  "علمائُنا"
                ],
                "optionsEn": [
                  "Ulama'una (on Waw)",
                  "Ulama'ana (on line)",
                  "Ulama'ina (on Nabrah)",
                  "Erroneous mixed spelling"
                ],
                "correctAnswer": "Ulama'una (on Waw)",
                "correctIndex": 0,
                "hintAr": "تطبيق مباشر لقواعد الوحدة المقررة في منهج الثانوية العامة.",
                "hintEn": "Direct application of the Egyptian Ministry syllabus standard.",
                "stepByStepSolutionAr": [
                  "اسم كان مرفوع وعلامة رفعه الضمة، والهمزة المضمومة بعد ألف مد ترسم على الواو: علماؤُنا."
                ],
                "stepByStepSolutionEn": [
                  "The subject of Kana is nominative; a dammah-vocalized terminal hamza after alif is written on Waw."
                ],
                "teacherTipAr": "انتبه إلى التراكيب النحوية والبلاغية المعتمدة في نماذج الإجابة الرسمية.",
                "teacherTipEn": "Ensure precise syntactic and rhetorical parsing matching the official key."
              }
            ]
          },
          "interactiveWidget": {
            "type": "arabic_grammar_lab",
            "titleEn": "Interactive Arabic Grammar & Orthography Studio",
            "titleAr": "معمل النحو والإملاء التفاعلي",
            "descriptionEn": "Interactive orthography and hamza rules master for Secondary 3.",
            "descriptionAr": "مختبر تفاعلي لإتقان قواعد الإملاء ورسم الهمزات والتراكيب النقدية."
          }
        }
      ],
      "databank": arabicCh4Databank
    }
  ]
};
