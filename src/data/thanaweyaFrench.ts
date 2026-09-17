import type { Branch } from '../types/curriculum';
import { frenchCh1Databank } from './databanks/thanaweya/frenchCh1Databank';
import { frenchCh2Databank } from './databanks/thanaweya/frenchCh2Databank';
import { frenchCh3Databank } from './databanks/thanaweya/frenchCh3Databank';
import { frenchCh4Databank } from './databanks/thanaweya/frenchCh4Databank';

export const thanaweyaFrenchBranch: Branch = {
  "id": "thanaweya_french",
  "titleEn": "French Language (Second Foreign Language - LV2)",
  "titleAr": "اللغة الفرنسية (اللغة الأجنبية الثانية)",
  "categoryEn": "Languages & Humanities",
  "categoryAr": "اللغات والعلوم الإنسانية",
  "iconName": "Languages",
  "colorGradient": "from-blue-600 via-sky-600 to-rose-600",
  "chapters": [
    {
      "id": "th_fr_ch1",
      "chapterNumber": 1,
      "titleEn": "Unité 1 : Le club des sportifs",
      "titleAr": "الوحدة الأولى: نادي الرياضيين",
      "descriptionEn": "Sports disciplines (classiques vs extrêmes), sports venues and equipment, verbs of practice (faire de, jouer à, pratiquer), imperative mood for tactical instructions, and direct/indirect object personal pronouns (COD & COI).",
      "descriptionAr": "أنواع الرياضات (التقليدية والخطرة)، الأدوات الرياضية ومواقع الممارسة، أفعال الممارسة الرياضية (faire de, jouer à, pratiquer)، صيغة الأمر لإعطاء النصائح والخطط، وضمائر المفعول المباشر وغير المباشر (COD & COI).",
      "isFullyEquipped": true,
      "lessons": [
        {
          "id": "th_fr_ch1_l1",
          "titleEn": "Sports, Équipements et Verbes d'Action (faire de vs jouer à vs pratiquer)",
          "titleAr": "الرياضات، المعدات وأفعال الممارسة (faire de مقابل jouer à مقابل pratiquer)",
          "summaryEn": "Classification of sports (team vs individual, classic vs extreme), necessary sports gear, and mastering the grammar rules for verbs associated with sports: faire + partitif, jouer + à, and pratiquer/aimer + article défini.",
          "summaryAr": "تصنيف الرياضات (جماعية مقابل فردية، كلاسيكية مقابل خطرة)، والمعدات الرياضية اللازمة، وإتقان القواعد النحوية لأفعال الرياضة: faire مع أداة التجزئة، jouer مع حرف الجر à، و pratiquer مع أداة المعرفة.",
          "theoryContentEn": "### 1. Classification des Sports (Sports Categorization)\n- **Sports Classiques (Traditionnels):** Le football, le tennis, le basket-ball, la natation, le volley-ball, la course à pied.\n- **Sports Extrêmes (Dangereux):** L'escalade (f.), le rafting (m.), le parapente (m.), le kitesurf (m.), le canyoning (m.). Ils procurent des sensations fortes (adrénaline).\n- **Sports d'Équipe (Collectifs):** Le hand-ball, le rugby. Ils développent l'esprit d'équipe.\n- **Sports Individuels:** Le judo, la gymnastique, l'escrime (f.), le tir à l'arc.\n\n### 2. Lieux et Équipements (Venues & Gear)\n- Au gymnase: On pratique le judo, le basket, la gym (en tenue de sport / maillot).\n- Sur le court de tennis: On joue au tennis (avec une raquette et une balle).\n- Sur le terrain de football: On joue au football (avec un ballon et des crampons).\n- À la piscine / à la mer: On fait de la natation (en maillot de bain).\n- À la montagne: On fait de l'escalade (avec une corde et un casque).\n\n### 3. Les Verbes de Pratique Sportive (Grammatical Syntax)\n1. **Faire + De (Article Partitif / Contracté):**\n   - Masc. sing.: *faire du* (ex: Je fais du vélo, du judo).\n   - Fém. sing.: *faire de la* (ex: Elle fait de la natation, de la gymnastique).\n   - Voyelle / h muet: *faire de l'* (ex: Nous faisons de l'escalade).\n   - Pluriel: *faire des* (ex: Ils font des randonnées).\n   - **Règle d'or de la négation:** À la forme négative, *du, de la, de l', des* deviennent **de** ou **d'** (ex: *Je ne fais pas de judo*, *Il ne fait pas d'escalade*).\n2. **Jouer + À (Article Contracté):**\n   - S'utilise exclusivement pour les sports de ballon, de balle et les jeux de société.\n   - Masc. sing.: *jouer au* (ex: Je joue au football, au tennis).\n   - Fém. sing.: *jouer à la* (ex: Elle joue à la pétanque).\n   - Voyelle: *jouer à l'* (ex: Il joue à l'épervier).\n   - Pluriel: *jouer aux* (ex: Ils jouent aux échecs, aux cartes).\n   - **Attention:** À la forme négative, *au, à la, à l', aux* **ne changent pas** (ex: *Je ne joue pas au tennis*).\n   - Jouer d'un instrument de musique prend *de* (ex: *jouer du piano, de la guitare*).\n3. **Pratiquer, Aimer, Préférer, Adorer, Détester + Article Défini:**\n   - *le, la, l', les* (ex: *J'aime le tennis*, *Il pratique la boxe*, *Nous détestons le karaté*).\n   - Les articles définis ne changent pas à la forme négative (*Je n'aime pas le tennis*).",
          "theoryContentAr": "### ١. تصنيف الرياضات (Sports Categorization)\n- **الرياضات التقليدية (Sports Classiques):** كرة القدم (le football)، التنس (le tennis)، كرة السلة (le basket)، السباحة (la natation)، الكرة الطائرة (le volley).\n- **الرياضات الخطرة (Sports Extrêmes):** تسلق الجبال (l'escalade)، ركوب الزوارق المطاطية (le rafting)، الهبوط بالمظلات (le parapente)، التزلج الشراعي (le kitesurf). تمنح الإثارة والشغف (sensations fortes).\n- **الرياضات الجماعية (Sports Collectifs):** كرة اليد، الركبي؛ لتنمية روح الفريق (l'esprit d'équipe).\n- **الرياضات الفردية (Sports Individuels):** الجودو، الجمباز، المبارزة (l'escrime).\n\n### ٢. أماكن الممارسة والأدوات (Lieux et Équipements)\n- في صالة الألعاب (au gymnase): نمارس الجودو أو الجمباز أو كرة السلة.\n- في ملعب التنس (sur le court): نلعب التنس باستخدام المضرب (une raquette) والكرة الصغيرة (une balle).\n- في ملعب كرة القدم (sur le terrain): نلعب بالكرة الكبيرة (un ballon).\n- في حمام السباحة (à la piscine) أو البحر: نمارس السباحة برداء البحر (un maillot de bain).\n- في الجبل (à la montagne): نمارس تسلق الجبال بالحبل (une corde) والخوذة (un casque).\n\n### ٣. قواعد أفعال الممارسة الرياضية في امتحان الثانوية العامة\n١. **فعل Faire مع حرف الجر de (المتحول إلى أداة تجزئة):**\n   - المفرد المذكر: *du* (مثال: Je fais du football).\n   - المفرد المؤنث: *de la* (مثال: Elle fait de la natation).\n   - المسبوق بمتحرك: *de l'* (مثال: Nous faisons de l'escalade).\n   - الجمع: *des* (مثال: Ils font des courses).\n   - **قاعدة النفي الذهبية:** تتحول أدوات التجزئة بعد النفي إلى **de** أو **d'** (مثال: Je ne fais pas de tennis).\n٢. **فعل Jouer مع حرف الجر à (المتحول لأداة إدغام):**\n   - يستخدم مع الألعاب ذات الكرات وألعاب الذكاء والألواح.\n   - المفرد المذكر: *au* (مثال: Je joue au basket).\n   - المفرد المؤنث: *à la* (مثال: Elle joue à la pétanque).\n   - الجمع: *aux* (مثال: Je joue aux échecs).\n   - **تنبيه هام:** لا تتغير أدوات الإدغام مع فعل jouer عند النفي (مثال: Je ne joue pas au basket).\n٣. **أفعال الميول والتفضيل و Pratiquer:**\n   - تأخذ أدوات المعرفة دائماً (*le, la, l', les*) ولا تتغير بالنفي.",
          "formulas": [
            {
              "labelEn": "Faire + Partitive Formula",
              "labelAr": "صيغة فعل Faire مع أدوات التجزئة",
              "latex": "\\text{faire} + \\{\\text{du}, \\text{de la}, \\text{de l'}, \\text{des}\\} \\xrightarrow{\\text{négation}} \\text{de / d'}"
            },
            {
              "labelEn": "Jouer + Sport Formula",
              "labelAr": "صيغة فعل Jouer مع ألعاب الكرات",
              "latex": "\\text{jouer} + \\{\\text{au}, \\text{à la}, \\text{à l'}, \\text{aux}\\} \\xrightarrow{\\text{négation}} \\text{invariable (au, à la...)}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry French Curriculum (Club @dos Plus 3 - Grade 12)",
            "bookTitleAr": "منهج اللغة الفرنسية للثانوية العامة (Club @dos Plus 3) - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Term 1",
            "officialCode": "MOE-SEC3-FR-U1-L1",
            "pageRange": "Unité 1, pp. 10–25"
          },
          "lessonPlan": {
            "titleEn": "Sports Classification, Equipment & Governing Verbs",
            "titleAr": "خطة درس تصنيف الرياضات وأدواتها والأفعال المرتبطة بها",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-FR-U1-L1",
            "bloomsObjectivesEn": [
              "Classify sports into classical, extreme, individual, and team disciplines.",
              "Select correct prepositions with faire (du/de la/de) and jouer (au/à la).",
              "Formulate complete communicative responses for sports choices in oral/written ministerial exams."
            ],
            "bloomsObjectivesAr": [
              "تصنيف الرياضات إلى كلاسيكية، خطرة، فردية، وجماعية.",
              "اختيار حروف الجر والأدوات الصحيحة مع أفعال faire و jouer.",
              "تكوين جمل تواصلية سليمة في مواقف التعبير عن الرياضة المفضلة."
            ],
            "prerequisitesEn": [
              "Basic sports vocabulary",
              "Present tense conjugation of faire and jouer"
            ],
            "prerequisitesAr": [
              "مفردات الرياضة الأساسية",
              "تصريف فعلي faire و jouer في الحاضر"
            ],
            "keyVocabularyEn": [
              {
                "term": "Un équipement",
                "definition": "Gear, equipment necessary to practice a sport."
              },
              {
                "term": "Une raquette",
                "definition": "Racket used in tennis and badminton."
              },
              {
                "term": "Sensation forte",
                "definition": "Thrill / adrenaline rush typical of extreme sports."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "Un équipement",
                "definition": "أدوات أو معدات رياضية لازمة لممارسة النشاط."
              },
              {
                "term": "Une raquette",
                "definition": "مضرب التنس أو الريشة."
              },
              {
                "term": "Sensation forte",
                "definition": "إثارة وحماس ناتج عن الرياضات الخطرة."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Warm-up & Lexical Elicitation",
                "phaseAr": "التمهيد واستثارة المفردات",
                "duration": "15 min",
                "activitiesEn": "Brainstorming sports categories with visual cues.",
                "activitiesAr": "عصف ذهني حول الرياضات المختلفة بالصور."
              },
              {
                "phaseEn": "Grammar Instruction & Drill",
                "phaseAr": "شرح القواعد والتدريبات المكثفة",
                "duration": "45 min",
                "activitiesEn": "Analyzing faire vs jouer vs aimer with positive and negative transformations.",
                "activitiesAr": "تحليل الفروق بين faire و jouer و aimer في الإثبات والنفي."
              },
              {
                "phaseEn": "Interactive Audio & Exit Check",
                "phaseAr": "التطبيق الشفهي وتقييم الخروج",
                "duration": "30 min",
                "activitiesEn": "Using the French Audio Studio to practice listening comprehension and situational responses.",
                "activitiesAr": "استخدام معمل الصوتيات للاستماع وحل أسئلة المواقف."
              }
            ],
            "commonMisconceptionsEn": [
              "Thinking that \"jouer à\" changes to \"de\" in the negative form (it stays \"au/à la\").",
              "Confusing masculine sports like le judo, le karaté, le patinage with feminine nouns."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن حرف الجر مع jouer يتحول إلى de عند النفي (بل يظل au أو à la كما هو).",
              "الخلط بين تذكير وتأنيث أسماء الرياضات مثل الجودو والتزلج."
            ],
            "differentiationEn": {
              "struggling": "Provide color-coded cue cards matching faire with green (partitive) and jouer with orange (à).",
              "advanced": "Compose a justification paragraph defending extreme sports using connectors (car, parce que)."
            },
            "differentiationAr": {
              "struggling": "بطاقات ملونة تميز بين أدوات faire وأدوات jouer.",
              "advanced": "كتابة فقرة بالفرنسية تبرر ممارسة رياضة خطرة باستخدام أدوات الربط."
            },
            "formativeAssessmentEn": "Four-item sentence transformation drill converting affirmative faire statements into negative equivalents.",
            "formativeAssessmentAr": "تدريب تحويل أربع جمل مثبتة مع faire إلى النفي مع مراعاة تحول أداة التجزئة إلى de.",
            "exitTicketQuestion": {
              "questionEn": "Choose the correct form: Mon cousin ne fait jamais ______ escalade.",
              "questionAr": "اختر الإجابة الصحيحة: Mon cousin ne fait jamais ______ escalade.",
              "solutionEn": "d' (because in negative sentences with faire, the partitive becomes de/d').",
              "solutionAr": "d' (لأنه في النفي مع فعل faire تتحول أداة التجزئة de l' إلى d')."
            }
          },
          "interactiveWidget": {
            "type": "french_audio_lab",
            "titleEn": "French Phonetics, Liaisons & Listening Lab",
            "titleAr": "معمل الصوتيات الفرنسية ونطق الأحرف المركبة",
            "descriptionEn": "Interactive Francophone pronunciation studio with Web Speech API audio synthesis, nasal vowel training, and exam listening tracks.",
            "descriptionAr": "معمل النطق الصوتي التفاعلي للغة الفرنسية مع التدريب على الحروف الأنفية وحروف الوصل وامتحانات الاستماع."
          },
          "worksheet": {
            "id": "th_fr_ch1_l1_ws",
            "titleEn": "Worksheet: TH_FR_CH1_L1",
            "titleAr": "ورقة تدريب: TH_FR_CH1_L1",
            "descriptionEn": "Ministry-standard worksheet problems assessing theoretical comprehension and communicative proficiency.",
            "descriptionAr": "تمارين وتطبيقات وفق مواصفات الورقة الامتحانية لوزارة التربية والتعليم لتقييم الفهم والقواعد.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_fr_ch1_l1_ws_p1",
                "titleEn": "Ministère Focus MCQ 1: Syntax Application",
                "titleAr": "تطبيق وزاري ١: القاعدة النحوية في سياق الجملة",
                "difficulty": "medium",
                "questionEn": "Chaque matin, mon frère ______ du jogging au parc.",
                "questionAr": "Chaque matin, mon frère ______ du jogging au parc.",
                "optionsEn": [
                  "fait",
                  "joue",
                  "pratique",
                  "aime"
                ],
                "optionsAr": [
                  "fait",
                  "joue",
                  "pratique",
                  "aime"
                ],
                "correctAnswer": "fait",
                "correctIndex": 0,
                "hintEn": "Review the grammatical rule explained in the theory content.",
                "hintAr": "راجع القاعدة النحوية المشروحة في المحتوى النظري للدرس.",
                "stepByStepSolutionEn": [
                  "Analyze the governing verb, preposition, and contextual meaning.",
                  "Apply the official Egyptian Ministry grammatical paradigm.",
                  "Conclude the unique correct alternative matching standard French usage."
                ],
                "stepByStepSolutionAr": [
                  "تحليل الفعل وحرف الجر وسياق الجملة.",
                  "تطبيق القاعدة النحوية المقررة بوزارة التربية والتعليم.",
                  "استنتاج الإجابة الدقيقة الصحيحة."
                ],
                "teacherTipEn": "Key question pattern consistently featured in Grade 12 ministerial exams.",
                "teacherTipAr": "نمط أسئلة متكرر دائماً في امتحانات إتمام الثانوية العامة الرسمية."
              },
              {
                "id": "th_fr_ch1_l1_ws_p2",
                "titleEn": "Ministère Focus MCQ 2: Communicative Situation",
                "titleAr": "تطبيق وزاري ٢: الموقف التواصلي الحياتي",
                "difficulty": "medium",
                "questionEn": "Vous demandez à votre ami son sport préféré, vous dites:",
                "questionAr": "Vous demandez à votre ami son sport préféré, vous dites:",
                "optionsEn": [
                  "Quel sport préfères-tu?",
                  "Je préfère le tennis.",
                  "Le football est super.",
                  "Je n'aime pas le sport."
                ],
                "optionsAr": [
                  "Quel sport préfères-tu?",
                  "Je préfère le tennis.",
                  "Le football est super.",
                  "Je n'aime pas le sport."
                ],
                "correctAnswer": "Quel sport préfères-tu?",
                "correctIndex": 0,
                "hintEn": "Identify who is asking or speaking (vous demandez ... vous dites = question).",
                "hintAr": "حدد من يسأل ومن يجيب (أنت تسأل... أنت تقول = تبحث عن سؤال).",
                "stepByStepSolutionEn": [
                  "Analyze the situation cue: \"vous demandez... vous dites\".",
                  "Check speaker alignment to verify if a question or a response is required.",
                  "Select option A which perfectly satisfies the communicative goal."
                ],
                "stepByStepSolutionAr": [
                  "تحليل صيغة الموقف: أنت تسأل... أنت تقول.",
                  "التأكد مما إذا كان المطلوب سؤالاً أم إجابة.",
                  "اختيار البديل الصحيح الذي يعبر عن الموقف بدقة."
                ],
                "teacherTipEn": "Always check the end of the situation prompt: \"il dit\" vs \"vous dites\".",
                "teacherTipAr": "انتبه دائماً لنهاية جملة الموقف: هل هي \"يقول هو\" أم \"تقول أنت\"."
              }
            ]
          }
        },
        {
          "id": "th_fr_ch1_l2",
          "titleEn": "L'Impératif et les Pronoms Personnels Compléments (COD & COI)",
          "titleAr": "صيغة الأمر وضمائر المفعول المباشر وغير المباشر (COD & COI)",
          "summaryEn": "Forming affirmative and negative imperative instructions for coaching, and mastering the replacement of direct (le, la, les) and indirect (lui, leur) object nouns with pronouns.",
          "summaryAr": "صياغة الأمر المثبت والمنفي لإعطاء التوجيهات الرياضية والخطط، وإتقان استبدال المفعول المباشر (le, la, les) وغير المباشر (lui, leur) بالضمائر المناسبة.",
          "theoryContentEn": "### 1. La Formation de l'Impératif (The Imperative Mood)\n- On forme l'impératif à partir du présent de l'indicatif pour 3 personnes: **tu**, **nous**, **vous**.\n- On supprime les pronoms sujets (*tu, nous, vous*).\n- **Règle capitale du 1er groupe (-er) et verbes assimilés (ouvrir, offrir):**\n  - On supprime le **-s** final avec *tu* (ex: *Parle!*, *Écoute!*, *Va!*).\n  - Avec les verbes du 2e et 3e groupe ne se terminant pas par -er, on conserve le -s (ex: *Finis!*, *Prends!*).\n  - Exception de liaison: Devant les pronoms *en* et *y*, le -s réapparaît pour la prononciation (ex: *Vas-y!*, *Manges-en!*).\n\n### 2. Pronoms Compléments d'Objet Direct (COD)\n- Ils remplacent un nom d'être vivant ou de chose **sans préposition**.\n- Formes: **me, te, le, la, l', nous, vous, les**.\n- Exemples:\n  - *Tu regardes ce match?* -> *Oui, je **le** regarde.*\n  - *Elle achète cette raquette?* -> *Oui, elle **la** choisit.*\n  - *Tu attends tes copains?* -> *Oui, je **les** attends.*\n\n### 3. Pronoms Compléments d'Objet Indirect (COI)\n- Ils remplacent un nom de **personne** introduit par la préposition **à** (*à, au, à la, à l', aux*).\n- Formes:\n  - Singulier (masculin ou féminin): **lui**.\n  - Pluriel: **leur**.\n- Verbes typiques avec à: *parler à, téléphoner à, donner à, écrire à, expliquer à, obéir à, conseiller à*.\n- Exemples:\n  - *Tu téléphones à ton entraîneur?* -> *Oui, je **lui** téléphone.*\n  - *Il donne le ballon à ses coéquipiers?* -> *Oui, il **leur** donne le ballon.*\n\n### 4. Place des Pronoms Personnels\n- **Règle générale:** Le pronom se place **avant** le verbe conjugué (*Je le vois*, *Je ne lui parle pas*).\n- **Au futur proche / avec deux verbes:** Le pronom se place **devant l'infinitif** (*Je vais lui téléphoner*).\n- **À l'impératif affirmatif:** Le pronom se place **après** le verbe avec un trait d'union (*Donne-lui le ballon!*). *Me* et *te* deviennent *moi* et *toi*.\n- **À l'impératif négatif:** Le pronom revient **avant** le verbe (*Ne lui parle pas!*).",
          "theoryContentAr": "### ١. صياغة الأمر (L'Impératif)\n- يُصرف الفعل في زمن الحاضر مع ثلاثة ضمائر فقط: **tu (أنت)**، **nous (نحن)**، **vous (أنتم)**.\n- نحذف ضمائر الفاعل (*tu, nous, vous*).\n- **قاعدة الحذف الذهبية لأفعال المجموعة الأولى وما يماثلها:**\n  - نحذف حرف **-s** من تصريف ضمير المفرد *tu* (مثال: !Parle، !Écoute، !Va).\n  - أفعال المجموعتين الثانية والثالثة يظل حرف -s كما هو (مثال: !Prends، !Fais).\n  - يعود حرف -s إذا جاء بعد الفعل الضميران *en* أو *y* للتسهيل الصوتي (مثال: !Vas-y).\n\n### ٢. ضمائر المفعول المباشر (COD)\n- تحل محل مفعول به عاقل أو غير عاقل **غير مسبوق بحرف جر**.\n- الضمائر: **le (مذكر)**، **la (مؤنث)**، **l' (مبدوء بمتحرك)**، **les (جمع)**.\n- مثال: *Tu aimes ce sport?* -> *Oui, je **le** pratique.*\n\n### ٣. ضمائر المفعول غير المباشر (COI)\n- تحل محل اسم **عاقل فقط** مسبوق بحرف الجر **à** ومشتقاته (*à, au, à la, à l', aux*).\n- الضمائر:\n  - المفرد (مذكر أو مؤنث): **lui**.\n  - الجمع بنوعيه: **leur**.\n- أشهر الأفعال: *parler à, téléphoner à, demander à, obéir à, prêter à, conseiller à*.\n- مثال: *Tu obéis à ton coach?* -> *Oui, je **lui** obéis.*\n\n### ٤. موقع الضمائر الشخصية في الجملة\n- قبل الفعل المصرف: *Je lui parle.*\n- قبل المصدر عند وجود فعلين: *Je vais lui téléphoner.*\n- في الأمر المثبت: بعد الفعل وبينهما شرطة (*Écoute-le!*)، وتتحول me/te إلى moi/toi.\n- في الأمر المنفي: قبل الفعل كالمعتاد (*Ne lui parle pas!*).",
          "formulas": [
            {
              "labelEn": "COI Identification Rule",
              "labelAr": "قاعدة تحديد المفعول غير المباشر",
              "latex": "\\text{Verbe} + \\text{à} + [\\text{Personne}] \\implies \\text{lui (sg.) / leur (pl.)}"
            },
            {
              "labelEn": "Imperative Pronoun Position",
              "labelAr": "موقع الضمير في الأمر",
              "latex": "\\text{Affirmatif: } \\text{Verbe}-\\text{Pronom} \\quad | \\quad \\text{Négatif: } \\text{Ne} + \\text{Pronom} + \\text{Verbe} + \\text{pas}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry French Curriculum (Club @dos Plus 3 - Grade 12)",
            "bookTitleAr": "منهج اللغة الفرنسية للثانوية العامة (Club @dos Plus 3) - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Term 1",
            "officialCode": "MOE-SEC3-FR-U1-L2",
            "pageRange": "Unité 1, pp. 26–38"
          },
          "lessonPlan": {
            "titleEn": "Imperative Mood and Personal Pronouns (COD vs COI)",
            "titleAr": "خطة درس صيغة الأمر وضمائر المفعول به",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-FR-U1-L2",
            "bloomsObjectivesEn": [
              "Form correct singular and plural imperative sentences dropping final -s for -er verbs.",
              "Distinguish syntactically between direct (COD) and indirect (COI) object complements.",
              "Replace repeated nouns with lui/leur or le/la/les in exam-standard dialogues."
            ],
            "bloomsObjectivesAr": [
              "صياغة الأمر المفرد والجمع مع حذف حرف s لأفعال المجموعة الأولى.",
              "التمييز التركيبي بين المفعول المباشر وغير المباشر في الجملة.",
              "استبدال الأسماء المكررة بالضمائر lui/leur أو le/la/les في حوارات الامتحان."
            ],
            "prerequisitesEn": [
              "Verbs of the first group",
              "Basic direct object recognition"
            ],
            "prerequisitesAr": [
              "أفعال المجموعة الأولى",
              "معرفة المفعول المباشر في الجملة الفرنسية"
            ],
            "keyVocabularyEn": [
              {
                "term": "L'entraîneur",
                "definition": "The coach / trainer who gives instructions."
              },
              {
                "term": "Une consigne",
                "definition": "A pedagogical or sports directive/order."
              },
              {
                "term": "La stratégie",
                "definition": "Tactical game plan developed for a match."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "L'entraîneur",
                "definition": "المدرب الذي يوجه التعليمات للاعبين."
              },
              {
                "term": "Une consigne",
                "definition": "تعليمات أو توجيهات محددة."
              },
              {
                "term": "La stratégie",
                "definition": "الخطة الاستراتيجية المتبعة في المباراة."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Imperative Discovery",
                "phaseAr": "اكتشاف صيغة الأمر",
                "duration": "20 min",
                "activitiesEn": "Examining coach instructions on the pitch: \"Passe le ballon!\", \"Écoute bien!\".",
                "activitiesAr": "تحليل جمل المدرب في الملعب واستنتاج حذف حرف s."
              },
              {
                "phaseEn": "COD & COI Pronoun Mapping",
                "phaseAr": "خريطة ضمائر المفعول المباشر وغير المباشر",
                "duration": "40 min",
                "activitiesEn": "Contrasting \"regarder le match\" (COD) with \"téléphoner à l'arbitre\" (COI).",
                "activitiesAr": "المقارنة بين المفعول المباشر وغير المباشر وتمارين الاستبدال."
              },
              {
                "phaseEn": "Pronoun Placement Studio Practice",
                "phaseAr": "تطبيق عملي بمعمل النطق والصوتيات",
                "duration": "30 min",
                "activitiesEn": "Interactive pronoun quiz in FrenchAudioStudio.",
                "activitiesAr": "حل تدريبات تحديد مواضع الضمائر في معمل الصوتيات."
              }
            ],
            "commonMisconceptionsEn": [
              "Retaining the letter \"s\" in the tu-form of imperative for first group verbs.",
              "Using \"lui\" for a non-human noun (COI lui/leur is restricted to animate beings with à)."
            ],
            "commonMisconceptionsAr": [
              "الإبقاء على حرف s مع tu في صيغة الأمر لأفعال المجموعة الأولى.",
              "استخدام lui مع الجماد غير العاقل (lui/leur للعاقل فقط)."
            ],
            "differentiationEn": {
              "struggling": "Provide a preposition check: Does the verb take \"à\"? If yes and animate -> use lui/leur.",
              "advanced": "Practice double pronoun sequences (e.g., \"Il me le donne\", \"Donne-le-lui\")."
            },
            "differentiationAr": {
              "struggling": "سؤال الفحص: هل يأتي بعد الفعل حرف à وشخص عاقل؟ إذاً الإجابة lui أو leur.",
              "advanced": "ممارسة الضمائر المزدوجة في الأمر والإثبات."
            },
            "formativeAssessmentEn": "Five fill-in-the-blank items testing lui vs leur vs le vs les in situational contexts.",
            "formativeAssessmentAr": "خمس جمل لاختيار الضمير المناسب في مواقف متنوعة من امتحانات الوزارة.",
            "exitTicketQuestion": {
              "questionEn": "Complete: Mon père aime ses élèves, il ______ explique la leçon.",
              "questionAr": "أكمل: Mon père aime ses élèves, il ______ explique la leçon.",
              "solutionEn": "leur (expliquer à + plural animate noun \"ses élèves\" -> COI leur).",
              "solutionAr": "leur (لأن الفعل يتبعه حرف الجر à ومفعول عاقل جمع ses élèves)."
            }
          },
          "interactiveWidget": {
            "type": "french_audio_lab",
            "titleEn": "French Phonetics, Liaisons & Listening Lab",
            "titleAr": "معمل الصوتيات الفرنسية ونطق الأحرف المركبة",
            "descriptionEn": "Interactive Francophone pronunciation studio with Web Speech API audio synthesis, nasal vowel training, and exam listening tracks.",
            "descriptionAr": "معمل النطق الصوتي التفاعلي للغة الفرنسية مع التدريب على الحروف الأنفية وحروف الوصل وامتحانات الاستماع."
          },
          "worksheet": {
            "id": "th_fr_ch1_l2_ws",
            "titleEn": "Worksheet: TH_FR_CH1_L2",
            "titleAr": "ورقة تدريب: TH_FR_CH1_L2",
            "descriptionEn": "Ministry-standard worksheet problems assessing theoretical comprehension and communicative proficiency.",
            "descriptionAr": "تمارين وتطبيقات وفق مواصفات الورقة الامتحانية لوزارة التربية والتعليم لتقييم الفهم والقواعد.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_fr_ch1_l2_ws_p1",
                "titleEn": "Ministère Focus MCQ 1: Syntax Application",
                "titleAr": "تطبيق وزاري ١: القاعدة النحوية في سياق الجملة",
                "difficulty": "medium",
                "questionEn": "Pour le match, donne ______ le ballon rapidement!",
                "questionAr": "Pour le match, donne ______ le ballon rapidement!",
                "optionsEn": [
                  "-lui",
                  "-le",
                  "-la",
                  "-les"
                ],
                "optionsAr": [
                  "-lui",
                  "-le",
                  "-la",
                  "-les"
                ],
                "correctAnswer": "-lui",
                "correctIndex": 0,
                "hintEn": "Review the grammatical rule explained in the theory content.",
                "hintAr": "راجع القاعدة النحوية المشروحة في المحتوى النظري للدرس.",
                "stepByStepSolutionEn": [
                  "Analyze the governing verb, preposition, and contextual meaning.",
                  "Apply the official Egyptian Ministry grammatical paradigm.",
                  "Conclude the unique correct alternative matching standard French usage."
                ],
                "stepByStepSolutionAr": [
                  "تحليل الفعل وحرف الجر وسياق الجملة.",
                  "تطبيق القاعدة النحوية المقررة بوزارة التربية والتعليم.",
                  "استنتاج الإجابة الدقيقة الصحيحة."
                ],
                "teacherTipEn": "Key question pattern consistently featured in Grade 12 ministerial exams.",
                "teacherTipAr": "نمط أسئلة متكرر دائماً في امتحانات إتمام الثانوية العامة الرسمية."
              },
              {
                "id": "th_fr_ch1_l2_ws_p2",
                "titleEn": "Ministère Focus MCQ 2: Communicative Situation",
                "titleAr": "تطبيق وزاري ٢: الموقف التواصلي الحياتي",
                "difficulty": "medium",
                "questionEn": "L'entraîneur donne une consigne à ses joueurs avant le match, il dit:",
                "questionAr": "L'entraîneur donne une consigne à ses joueurs avant le match, il dit:",
                "optionsEn": [
                  "Passez vite le ballon!",
                  "Je regarde le match.",
                  "L'arbitre est sévère.",
                  "Le stade est plein."
                ],
                "optionsAr": [
                  "Passez vite le ballon!",
                  "Je regarde le match.",
                  "L'arbitre est sévère.",
                  "Le stade est plein."
                ],
                "correctAnswer": "Passez vite le ballon!",
                "correctIndex": 0,
                "hintEn": "Identify who is asking or speaking (vous demandez ... vous dites = question).",
                "hintAr": "حدد من يسأل ومن يجيب (أنت تسأل... أنت تقول = تبحث عن سؤال).",
                "stepByStepSolutionEn": [
                  "Analyze the situation cue: \"vous demandez... vous dites\".",
                  "Check speaker alignment to verify if a question or a response is required.",
                  "Select option A which perfectly satisfies the communicative goal."
                ],
                "stepByStepSolutionAr": [
                  "تحليل صيغة الموقف: أنت تسأل... أنت تقول.",
                  "التأكد مما إذا كان المطلوب سؤالاً أم إجابة.",
                  "اختيار البديل الصحيح الذي يعبر عن الموقف بدقة."
                ],
                "teacherTipEn": "Always check the end of the situation prompt: \"il dit\" vs \"vous dites\".",
                "teacherTipAr": "انتبه دائماً لنهاية جملة الموقف: هل هي \"يقول هو\" أم \"تقول أنت\"."
              }
            ]
          }
        }
      ],
      "databank": frenchCh1Databank
    },
    {
      "id": "th_fr_ch2",
      "chapterNumber": 2,
      "titleEn": "Unité 2 : Le club des gourmands",
      "titleAr": "الوحدة الثانية: نادي الذواقة ومحبي الطعام",
      "descriptionEn": "Food pyramid, food and beverage categories, the 4 daily meals, supermarket departments (les rayons du supermarché), partitive articles (du, de la, de l', des), precise and vague quantities, pronoun EN, and comparison of adjectives, nouns, and verbs.",
      "descriptionAr": "الهرم الغذائي، أقسام الأغذية والمشروبات، الوجبات اليومية الأربع، أقسام السوبرماركت، أدوات التجزئة، التعبير عن الكميات المحددة وغير المحددة، الضمير الشخصي EN، وصيغ المقارنة.",
      "isFullyEquipped": true,
      "lessons": [
        {
          "id": "th_fr_ch2_l1",
          "titleEn": "La Pyramide Alimentaire, Repas et Rayons du Supermarché",
          "titleAr": "الهرم الغذائي، الوجبات وأقسام السوبرماركت",
          "summaryEn": "Vocabulary of foods and beverages, the four meals of the day, shopping at the supermarket across specialized aisles, and courteous purchasing formulas.",
          "summaryAr": "مفردات الأغذية والمشروبات، الوجبات الأربع لليوم، التسوق في السوبرماركت عبر الأقسام المتخصصة، وصيغ الشراء المهذبة.",
          "theoryContentEn": "### 1. La Pyramide Alimentaire (The Food Pyramid)\n1. **Produits sucrés:** Le sucre, le chocolat, les gâteaux, la confiture, le miel.\n2. **Matières grasses:** L'huile (f.), le beurre.\n3. **Viandes, poissons, œufs:** Le poulet, la viande, le poisson, les crevettes.\n4. **Produits laitiers:** Le lait, le fromage, le yaourt.\n5. **Légumes et fruits:** Les carottes, les tomates, les haricots verts, les pommes, les bananes.\n6. **Féculents / Céréales:** Le riz, les pâtes, le pain, les lentilles.\n7. **Boissons:** L'eau minérale, le jus de fruits, le thé, le café, le soda.\n\n### 2. Les Quatre Repas Quotidiens (The 4 Meals)\n- **Le petit-déjeuner (matin):** Du pain, du beurre, de la confiture, un café au lait.\n- **Le déjeuner (midi):** Du poulet, du riz, de la salade verte.\n- **Le goûter (après-midi - collation):** Un fruit, un biscuit, un chocolat chaud.\n- **Le dîner (soir - léger):** Un yaourt, de la soupe, une salade.\n\n### 3. Les Rayons du Supermarché (Supermarket Aisles)\n- **Rayon Pain et viennoiseries:** La baguette, le pain, les croissants.\n- **Rayon Produits laitiers:** Le fromage, le yaourt, le lait, le beurre.\n- **Rayon Viandes:** Le bœuf, l'agneau, le poulet, la saucisse.\n- **Rayon Poissons et fruits de mer:** Le poisson, le saumon, les crevettes.\n- **Rayon Boissons:** L'eau minérale gazeuse, le jus d'orange, le soda.\n- **Rayon Fruits et légumes:** Les pommes, les raisins, les concombres.\n- **Rayon Riz, pâtes et légumes secs:** Les lentilles, les pois chiches, les spaghettis.",
          "theoryContentAr": "### ١. الهرم الغذائي (La Pyramide Alimentaire)\n١. **السكريات:** السكر، الشوكولاتة، المربى، العسل.\n٢. **المواد الدهنية:** الزيت، الزبدة.\n٣. **اللحوم والأسماك والبيض:** الدجاج، اللحم، السمك، الجمبري.\n٤. **منتجات الألبان:** الحليب، الجبن، الزبادي.\n٥. **الخضروات والفواكه:** الجزر، الطماطم، الفاصوليا، التفاح، الموز.\n٦. **النشويات والحبوب:** الأرز، المكرونة، الخبز، العدس.\n٧. **المشروبات:** الماء، العصير، الشاي، القهوة.\n\n### ٢. الوجبات اليومية الأربع\n- الإفطار (le petit-déjeuner): صباحاً.\n- الغداء (le déjeuner): في منتصف اليوم.\n- التصبيرة (le goûter): وجبة خفيفة بعد الظهر.\n- العشاء (le dîner): مساءً.\n\n### ٣. أقسام السوبرماركت\n- قسم المخبوزات، قسم الألبان، قسم اللحوم، قسم الأسماك، قسم المشروبات، قسم الخضار والفاكهة.",
          "formulas": [
            {
              "labelEn": "Supermarket Inquiry Formula",
              "labelAr": "صيغة طلب السعر والكمية",
              "latex": "\\text{Combien coûte} + \\text{Nom sing.} \\quad | \\quad \\text{Combien coûtent} + \\text{Nom pl.}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry French Curriculum (Club @dos Plus 3 - Grade 12)",
            "bookTitleAr": "منهج اللغة الفرنسية للثانوية العامة (Club @dos Plus 3) - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Term 1",
            "officialCode": "MOE-SEC3-FR-U2-L1",
            "pageRange": "Unité 2, pp. 40–54"
          },
          "lessonPlan": {
            "titleEn": "Nutritional Pyramid, Daily Meals & Supermarket Aisles",
            "titleAr": "خطة درس الهرم الغذائي والوجبات وأقسام السوبرماركت",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-FR-U2-L1",
            "bloomsObjectivesEn": [
              "Categorize food items according to nutritional pyramid levels.",
              "Associate grocery products with their correct supermarket department.",
              "Formulate polite inquiries regarding quantities and prices."
            ],
            "bloomsObjectivesAr": [
              "تصنيف الأطعمة طبقاً لمستويات الهرم الغذائي.",
              "ربط كل سلعة غذائية بالقسم المخصص لها في السوبرماركت.",
              "صياغة أسئلة مهذبة عن الأسعار والكميات في المواقف."
            ],
            "prerequisitesEn": [
              "Basic food vocabulary",
              "Numbers for pricing"
            ],
            "prerequisitesAr": [
              "مفردات الأطعمة الأساسية",
              "الأعداد للتعبير عن الأسعار"
            ],
            "keyVocabularyEn": [
              {
                "term": "Un rayon",
                "definition": "Department or aisle in a large supermarket."
              },
              {
                "term": "Le féculent",
                "definition": "Starchy food like rice, potatoes, or pasta."
              },
              {
                "term": "Une boisson gazeuse",
                "definition": "Carbonated beverage or sparkling water."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "Un rayon",
                "definition": "قسم من أقسام السوبرماركت الكبرى."
              },
              {
                "term": "Le féculent",
                "definition": "أطعمة نشوية مثل الأرز والمكرونة."
              },
              {
                "term": "Une boisson gazeuse",
                "definition": "مشروب غازي أو مياه فوارة."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Pyramid Exploration",
                "phaseAr": "استكشاف الهرم الغذائي",
                "duration": "20 min",
                "activitiesEn": "Interactive grouping of food items by nutritional category.",
                "activitiesAr": "تصنيف الأطعمة حسب القيمة الغذائية."
              },
              {
                "phaseEn": "Supermarket Simulation",
                "phaseAr": "محاكاة التسوق في السوبرماركت",
                "duration": "45 min",
                "activitiesEn": "Role-play between shopper and merchant across different aisles.",
                "activitiesAr": "لعب أدوار بين المشتري والبائع في أقسام المتجر."
              },
              {
                "phaseEn": "Comprehension & Review",
                "phaseAr": "التقييم والمراجعة الختامية",
                "duration": "25 min",
                "activitiesEn": "Situational MCQ practice and exit ticket.",
                "activitiesAr": "حل أسئلة مواقف الاختيار من متعدد."
              }
            ],
            "commonMisconceptionsEn": [
              "Placing butter in dairy products vs fats (in supermarkets it is in rayon produits laitiers).",
              "Thinking that le goûter is lunch (it is the afternoon snack around 16:30)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن الزبدة توجد فقط في قسم الدهون (في السوبرماركت توجد في قسم منتجات الألبان).",
              "الخلط بين وجبة التصبيرة (le goûter) ووجبة الغداء (le déjeuner)."
            ],
            "differentiationEn": {
              "struggling": "Visual aisle flashcards with French labels.",
              "advanced": "Draft a balanced three-course menu respecting nutritional guidelines."
            },
            "differentiationAr": {
              "struggling": "بطاقات مصورة لكل قسم من أقسام السوبرماركت.",
              "advanced": "إعداد قائمة طعام متوازنة من ثلاث وجبات صحية."
            },
            "formativeAssessmentEn": "Matching exercise connecting products to supermarket aisles.",
            "formativeAssessmentAr": "تمرين مطابقة لتوصيل السلع الغذائية بأقسام السوبرماركت المناسبة.",
            "exitTicketQuestion": {
              "questionEn": "Pour acheter des crevettes, on va au rayon ______.",
              "questionAr": "Pour acheter des crevettes, on va au rayon ______.",
              "solutionEn": "Poissons et fruits de mer (shrimp is a seafood product).",
              "solutionAr": "Poissons et fruits de mer (قسم الأسماك والمأكولات البحرية)."
            }
          },
          "interactiveWidget": {
            "type": "french_audio_lab",
            "titleEn": "French Phonetics, Liaisons & Listening Lab",
            "titleAr": "معمل الصوتيات الفرنسية ونطق الأحرف المركبة",
            "descriptionEn": "Interactive Francophone pronunciation studio with Web Speech API audio synthesis, nasal vowel training, and exam listening tracks.",
            "descriptionAr": "معمل النطق الصوتي التفاعلي للغة الفرنسية مع التدريب على الحروف الأنفية وحروف الوصل وامتحانات الاستماع."
          },
          "worksheet": {
            "id": "th_fr_ch2_l1_ws",
            "titleEn": "Worksheet: TH_FR_CH2_L1",
            "titleAr": "ورقة تدريب: TH_FR_CH2_L1",
            "descriptionEn": "Ministry-standard worksheet problems assessing theoretical comprehension and communicative proficiency.",
            "descriptionAr": "تمارين وتطبيقات وفق مواصفات الورقة الامتحانية لوزارة التربية والتعليم لتقييم الفهم والقواعد.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_fr_ch2_l1_ws_p1",
                "titleEn": "Ministère Focus MCQ 1: Syntax Application",
                "titleAr": "تطبيق وزاري ١: القاعدة النحوية في سياق الجملة",
                "difficulty": "medium",
                "questionEn": "Pour acheter des baguettes fraîches, on va ______.",
                "questionAr": "Pour acheter des baguettes fraîches, on va ______.",
                "optionsEn": [
                  "à la boulangerie",
                  "à la boucherie",
                  "à la poissonnerie",
                  "à la pharmacie"
                ],
                "optionsAr": [
                  "à la boulangerie",
                  "à la boucherie",
                  "à la poissonnerie",
                  "à la pharmacie"
                ],
                "correctAnswer": "à la boulangerie",
                "correctIndex": 0,
                "hintEn": "Review the grammatical rule explained in the theory content.",
                "hintAr": "راجع القاعدة النحوية المشروحة في المحتوى النظري للدرس.",
                "stepByStepSolutionEn": [
                  "Analyze the governing verb, preposition, and contextual meaning.",
                  "Apply the official Egyptian Ministry grammatical paradigm.",
                  "Conclude the unique correct alternative matching standard French usage."
                ],
                "stepByStepSolutionAr": [
                  "تحليل الفعل وحرف الجر وسياق الجملة.",
                  "تطبيق القاعدة النحوية المقررة بوزارة التربية والتعليم.",
                  "استنتاج الإجابة الدقيقة الصحيحة."
                ],
                "teacherTipEn": "Key question pattern consistently featured in Grade 12 ministerial exams.",
                "teacherTipAr": "نمط أسئلة متكرر دائماً في امتحانات إتمام الثانوية العامة الرسمية."
              },
              {
                "id": "th_fr_ch2_l1_ws_p2",
                "titleEn": "Ministère Focus MCQ 2: Communicative Situation",
                "titleAr": "تطبيق وزاري ٢: الموقف التواصلي الحياتي",
                "difficulty": "medium",
                "questionEn": "Au supermarché, vous demandez le prix du fromage, vous dites:",
                "questionAr": "Au supermarché, vous demandez le prix du fromage, vous dites:",
                "optionsEn": [
                  "Ça coûte combien, le kilo?",
                  "Je voudrais du pain.",
                  "Où sont les boissons?",
                  "J'adore le fromage."
                ],
                "optionsAr": [
                  "Ça coûte combien, le kilo?",
                  "Je voudrais du pain.",
                  "Où sont les boissons?",
                  "J'adore le fromage."
                ],
                "correctAnswer": "Ça coûte combien, le kilo?",
                "correctIndex": 0,
                "hintEn": "Identify who is asking or speaking (vous demandez ... vous dites = question).",
                "hintAr": "حدد من يسأل ومن يجيب (أنت تسأل... أنت تقول = تبحث عن سؤال).",
                "stepByStepSolutionEn": [
                  "Analyze the situation cue: \"vous demandez... vous dites\".",
                  "Check speaker alignment to verify if a question or a response is required.",
                  "Select option A which perfectly satisfies the communicative goal."
                ],
                "stepByStepSolutionAr": [
                  "تحليل صيغة الموقف: أنت تسأل... أنت تقول.",
                  "التأكد مما إذا كان المطلوب سؤالاً أم إجابة.",
                  "اختيار البديل الصحيح الذي يعبر عن الموقف بدقة."
                ],
                "teacherTipEn": "Always check the end of the situation prompt: \"il dit\" vs \"vous dites\".",
                "teacherTipAr": "انتبه دائماً لنهاية جملة الموقف: هل هي \"يقول هو\" أم \"تقول أنت\"."
              }
            ]
          }
        },
        {
          "id": "th_fr_ch2_l2",
          "titleEn": "Articles Partitifs, Expressions de Quantité et Pronom 'EN'",
          "titleAr": "أدوات التجزئة، التعبير عن الكميات والضمير الشخصي EN",
          "summaryEn": "Detailed study of partitive articles (du, de la, de l', des), their conversion to de/d' with quantities and negations, the adverbial pronoun EN, and comparative structures.",
          "summaryAr": "دراسة تفصيلية لأدوات التجزئة وتحولها إلى de عند النفي أو مع ظروف الكمية، واستخدام الضمير الشخصي EN، وقواعد المقارنة بأنواعها الثلاثة.",
          "theoryContentEn": "### 1. Les Articles Partitifs (Partitive Articles)\n- Ils expriment une quantité indéterminée, non comptable :\n  - Masc. sing.: **du** (*du fromage, du thé*).\n  - Fém. sing.: **de la** (*de la salade, de la viande*).\n  - Voyelle / h muet: **de l'** (*de l'eau, de l'huile*).\n  - Pluriel: **des** (*des pâtes, des fruits*).\n- **Règle capitale de la négation:**\n  - À la forme négative, ils deviennent **de** ou **d'** (*Je ne mange pas de poulet*).\n  - **Exception:** Avec le verbe **être**, ils ne changent jamais (*Ce n'est pas du fromage*).\n\n### 2. Le Pronom Personnel 'EN'\n- Le pronom **EN** remplace un complément introduit par :\n  1. Un **article partitif** (*du, de la, de l', des*).\n  2. Un **article indéfini** (*un, une, des*).\n  3. Une **expression ou adverbe de quantité** (*beaucoup de, un kilo de*).\n  4. Un **nombre cardinal** (*trois, deux*).\n- Exemple: *Tu as des stylos?* -> *Oui, j'**en** ai **trois**.*",
          "theoryContentAr": "### ١. أدوات التجزئة (Les Articles Partitifs)\n- المفرد المذكر: du، المؤنث: de la، المسبوق بمتحرك: de l'، الجمع: des.\n- تتحول جميعها في النفي إلى de أو d' ما عدا مع فعل être.\n\n### ٢. الضمير الشخصي EN\n- يحل محل مفعول مسبوق بأداة تجزئة، أداة نكرة، عدد، أو ظرف كمية.",
          "formulas": [
            {
              "labelEn": "Pronoun EN Replacement Rule",
              "labelAr": "قاعدة التعويض بالضمير EN",
              "latex": "[\\text{Partitif / Indéfini / Quantité / Nombre}] + \\text{Nom} \\implies \\text{EN}"
            },
            {
              "labelEn": "Noun Comparison Formula",
              "labelAr": "صيغة مقارنة الأسماء",
              "latex": "\\text{Sujet} + \\text{Verbe} + \\{\\text{plus de} \\mid \\text{autant de} \\mid \\text{moins de}\\} + \\text{Nom} + \\text{que}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry French Curriculum (Club @dos Plus 3 - Grade 12)",
            "bookTitleAr": "منهج اللغة الفرنسية للثانوية العامة (Club @dos Plus 3) - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Term 1",
            "officialCode": "MOE-SEC3-FR-U2-L2",
            "pageRange": "Unité 2, pp. 55–70"
          },
          "lessonPlan": {
            "titleEn": "Partitives, Quantities, Pronoun EN & Comparisons",
            "titleAr": "خطة درس أدوات التجزئة، الكميات، الضمير EN وصيغ المقارنة",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-FR-U2-L2",
            "bloomsObjectivesEn": [
              "Convert partitives into de/d' accurately in negative structures.",
              "Substitute quantified food complements using the pronoun EN.",
              "Apply comparative markers correctly based on word class."
            ],
            "bloomsObjectivesAr": [
              "تحويل أدوات التجزئة إلى de في الجمل المنفية بدقة.",
              "التعويض عن المفعول الدال على كمية بالضمير الشخصي EN.",
              "استخدام أدوات المقارنة الصحيحة بحسب نوع الكلمة."
            ],
            "prerequisitesEn": [
              "Masculine and feminine gender of food nouns",
              "Basic sentence word order"
            ],
            "prerequisitesAr": [
              "تذكير وتأنيث أسماء الأطعمة والمشروبات",
              "التركيب الأساسي للجملة الفرنسية"
            ],
            "keyVocabularyEn": [
              {
                "term": "La quantité précise",
                "definition": "Exact quantity expressed by numbers or metric units."
              },
              {
                "term": "Autant de",
                "definition": "As much/many of, used for comparison of nouns."
              },
              {
                "term": "Le pronom EN",
                "definition": "Pronoun replacing partitive and quantified noun complements."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "La quantité précise",
                "definition": "الكمية المحددة بالأرقام أو وحدات القياس."
              },
              {
                "term": "Autant de",
                "definition": "نفس القدر من (تستخدم في مقارنة الأسماء)."
              },
              {
                "term": "Le pronom EN",
                "definition": "ضمير شخصي يحل محل المفعول الدال على تجزئة أو كمية."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Partitive Analysis & Negation Exceptions",
                "phaseAr": "شرح أدوات التجزئة واستثناءات النفي",
                "duration": "25 min",
                "activitiesEn": "Contrasting manger du poulet vs ne pas manger de poulet.",
                "activitiesAr": "تحليل التحول إلى de واستثناء فعل الكينونة être."
              },
              {
                "phaseEn": "Mastery of Pronoun EN",
                "phaseAr": "إتقان الضمير الشخصي EN",
                "duration": "35 min",
                "activitiesEn": "Replacing food items with EN and retaining numbers in affirmative answers.",
                "activitiesAr": "تمارين التعويض بالضمير EN والاحتفاظ بالعدد في الإثبات."
              },
              {
                "phaseEn": "Comparison Structures Drill",
                "phaseAr": "تدريب صيغ المقارنة",
                "duration": "30 min",
                "activitiesEn": "Differentiating between aussi, autant de, and plus que.",
                "activitiesAr": "التمييز بين المقارنة مع الصفة والاسم والفعل."
              }
            ],
            "commonMisconceptionsEn": [
              "Using \"aussi de\" instead of \"autant de\" when comparing nouns.",
              "Forgetting to mention the numeral in affirmative sentences with EN."
            ],
            "commonMisconceptionsAr": [
              "استخدام aussi de بدلاً من autant de عند مقارنة الأسماء.",
              "نسيان ذكر العدد أو المقدار في نهاية الجملة المثبتة مع الضمير EN."
            ],
            "differentiationEn": {
              "struggling": "Step-by-step checklist: Does the question have partitives or quantities? Use EN.",
              "advanced": "Construct comparative sentences with complex modifiers."
            },
            "differentiationAr": {
              "struggling": "قائمة فحص سريعة: هل يوجد في السؤال أداة تجزئة أو نكرة أو كمية؟ إذاً الضمير هو EN.",
              "advanced": "بناء جمل مقارنة متقدمة مع محددات مركبة."
            },
            "formativeAssessmentEn": "Transformation test requiring replacement of underlined phrases with EN.",
            "formativeAssessmentAr": "اختبار تحويل يتطلب استبدال العبارات المعينة بالضمير EN.",
            "exitTicketQuestion": {
              "questionEn": "Tu manges des bananes? -> Oui, j'______ mange trois.",
              "questionAr": "Tu manges des bananes? -> Oui, j'______ mange trois.",
              "solutionEn": "en (replaces \"des bananes\" with numeral retained).",
              "solutionAr": "en (يحل محل des bananes مع الإبقاء على العدد trois في الإثبات)."
            }
          },
          "interactiveWidget": {
            "type": "french_audio_lab",
            "titleEn": "French Phonetics, Liaisons & Listening Lab",
            "titleAr": "معمل الصوتيات الفرنسية ونطق الأحرف المركبة",
            "descriptionEn": "Interactive Francophone pronunciation studio with Web Speech API audio synthesis, nasal vowel training, and exam listening tracks.",
            "descriptionAr": "معمل النطق الصوتي التفاعلي للغة الفرنسية مع التدريب على الحروف الأنفية وحروف الوصل وامتحانات الاستماع."
          },
          "worksheet": {
            "id": "th_fr_ch2_l2_ws",
            "titleEn": "Worksheet: TH_FR_CH2_L2",
            "titleAr": "ورقة تدريب: TH_FR_CH2_L2",
            "descriptionEn": "Ministry-standard worksheet problems assessing theoretical comprehension and communicative proficiency.",
            "descriptionAr": "تمارين وتطبيقات وفق مواصفات الورقة الامتحانية لوزارة التربية والتعليم لتقييم الفهم والقواعد.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_fr_ch2_l2_ws_p1",
                "titleEn": "Ministère Focus MCQ 1: Syntax Application",
                "titleAr": "تطبيق وزاري ١: القاعدة النحوية في سياق الجملة",
                "difficulty": "medium",
                "questionEn": "Tu bois du café le matin? -> Oui, j'______ bois une tasse.",
                "questionAr": "Tu bois du café le matin? -> Oui, j'______ bois une tasse.",
                "optionsEn": [
                  "en",
                  "y",
                  "le",
                  "lui"
                ],
                "optionsAr": [
                  "en",
                  "y",
                  "le",
                  "lui"
                ],
                "correctAnswer": "en",
                "correctIndex": 0,
                "hintEn": "Review the grammatical rule explained in the theory content.",
                "hintAr": "راجع القاعدة النحوية المشروحة في المحتوى النظري للدرس.",
                "stepByStepSolutionEn": [
                  "Analyze the governing verb, preposition, and contextual meaning.",
                  "Apply the official Egyptian Ministry grammatical paradigm.",
                  "Conclude the unique correct alternative matching standard French usage."
                ],
                "stepByStepSolutionAr": [
                  "تحليل الفعل وحرف الجر وسياق الجملة.",
                  "تطبيق القاعدة النحوية المقررة بوزارة التربية والتعليم.",
                  "استنتاج الإجابة الدقيقة الصحيحة."
                ],
                "teacherTipEn": "Key question pattern consistently featured in Grade 12 ministerial exams.",
                "teacherTipAr": "نمط أسئلة متكرر دائماً في امتحانات إتمام الثانوية العامة الرسمية."
              },
              {
                "id": "th_fr_ch2_l2_ws_p2",
                "titleEn": "Ministère Focus MCQ 2: Communicative Situation",
                "titleAr": "تطبيق وزاري ٢: الموقف التواصلي الحياتي",
                "difficulty": "medium",
                "questionEn": "Votre mère vous demande ce que vous voulez boire, vous dites:",
                "questionAr": "Votre mère vous demande ce que vous voulez boire, vous dites:",
                "optionsEn": [
                  "Je voudrais un jus d'orange frais.",
                  "Je n'ai pas faim.",
                  "Donnez-moi du fromage.",
                  "C'est délicieux."
                ],
                "optionsAr": [
                  "Je voudrais un jus d'orange frais.",
                  "Je n'ai pas faim.",
                  "Donnez-moi du fromage.",
                  "C'est délicieux."
                ],
                "correctAnswer": "Je voudrais un jus d'orange frais.",
                "correctIndex": 0,
                "hintEn": "Identify who is asking or speaking (vous demandez ... vous dites = question).",
                "hintAr": "حدد من يسأل ومن يجيب (أنت تسأل... أنت تقول = تبحث عن سؤال).",
                "stepByStepSolutionEn": [
                  "Analyze the situation cue: \"vous demandez... vous dites\".",
                  "Check speaker alignment to verify if a question or a response is required.",
                  "Select option A which perfectly satisfies the communicative goal."
                ],
                "stepByStepSolutionAr": [
                  "تحليل صيغة الموقف: أنت تسأل... أنت تقول.",
                  "التأكد مما إذا كان المطلوب سؤالاً أم إجابة.",
                  "اختيار البديل الصحيح الذي يعبر عن الموقف بدقة."
                ],
                "teacherTipEn": "Always check the end of the situation prompt: \"il dit\" vs \"vous dites\".",
                "teacherTipAr": "انتبه دائماً لنهاية جملة الموقف: هل هي \"يقول هو\" أم \"تقول أنت\"."
              }
            ]
          }
        }
      ],
      "databank": frenchCh2Databank
    },
    {
      "id": "th_fr_ch3",
      "chapterNumber": 3,
      "titleEn": "Unité 3 : Le club des explorateurs",
      "titleAr": "الوحدة الثالثة: نادي المستكشفين",
      "descriptionEn": "Countryside features, farm animals, their female/young counterparts and habitats, leisure activities in nature, Passé Composé (auxiliaries être and avoir, past participle agreements), complex negations (ne...rien, ne...jamais, ne...personne, ne...plus), and expressing cause.",
      "descriptionAr": "معالم الريف، حيوانات المزرعة وإناثها وصغارها ومساكنها، الأنشطة في الطبيعة، زمن الماضي المركب (المساعد être والمساعد avoir وتوافق اسم المفعول)، صيغ النفي الخاصة، والتعبير عن السبب.",
      "isFullyEquipped": true,
      "lessons": [
        {
          "id": "th_fr_ch3_l1",
          "titleEn": "La Vie à la Campagne, les Animaux de la Ferme et leurs Habitats",
          "titleAr": "الحياة في الريف، حيوانات المزرعة ومساكنها",
          "summaryEn": "Countryside vocabulary, comparing city life with rural tranquility, identifying farm animals, their female mates, offspring, and dwelling places, and describing recreational farm activities.",
          "summaryAr": "مفردات الريف، المقارنة بين صخب المدينة وهدوء الريف، التعرف على حيوانات المزرعة وإناثها وصغارها ومساكنها، ووصف الأنشطة الترفيهية في الطبيعة.",
          "theoryContentEn": "### 1. La Campagne vs La Ville (Rural vs Urban Life)\n- **À la campagne:** Le calme, l'air pur, les paysages verdoyants, pas de bruit.\n- **En ville:** Les cinémas, les musées, mais aussi les embouteillages et le bruit.\n\n### 2. Les Animaux de la Ferme et leurs Habitats\n- Le cheval -> L'écurie\n- La vache -> L'étable\n- Le mouton -> La bergerie\n- Le coq / La poule -> Le poulailler\n- Le lapin -> Le clapier\n- Le canard -> La mare / la basse-cour",
          "theoryContentAr": "### ١. حيوانات المزرعة ومساكنها\n- الحصان: مسكنه الإسطبل (l'écurie).\n- البقر: مسكنه الحظيرة (l'étable).\n- الأغنام: مسكنها الحظيرة (la bergerie).\n- الدواجن: مسكنها قن الدجاج (le poulailler).\n- الأرانب: مسكنها القفص (le clapier).",
          "formulas": [
            {
              "labelEn": "Skill Expression Formula",
              "labelAr": "صيغة التعبير عن المهارة",
              "latex": "\\text{Savoir (présent)} + \\text{Infinitif} \\quad (\\text{ex: Je sais monter à cheval})"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry French Curriculum (Club @dos Plus 3 - Grade 12)",
            "bookTitleAr": "منهج اللغة الفرنسية للثانوية العامة (Club @dos Plus 3) - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Term 2",
            "officialCode": "MOE-SEC3-FR-U3-L1",
            "pageRange": "Unité 3, pp. 72–86"
          },
          "lessonPlan": {
            "titleEn": "Countryside Life, Farm Animals, Offspring & Dwellings",
            "titleAr": "خطة درس معالم الريف وحيوانات المزرعة ومساكنها",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-FR-U3-L1",
            "bloomsObjectivesEn": [
              "Associate farm animals with their corresponding female, offspring, and dwelling place.",
              "Contrast advantages and drawbacks of rural versus urban living environments.",
              "Express practical abilities and outdoor skills using the verb savoir + infinitive."
            ],
            "bloomsObjectivesAr": [
              "ربط حيوانات المزرعة بإناثها وصغارها وأماكن معيشتها.",
              "المقارنة بين مميزات وسلبيات الحياة في الريف والمدينة.",
              "التعبير عن المهارات الريفية باستخدام فعل savoir متبوعاً بالمصدر."
            ],
            "prerequisitesEn": [
              "Animal names in French",
              "Basic present tense of savoir"
            ],
            "prerequisitesAr": [
              "أسماء الحيوانات الأساسية بالفرنسية",
              "تصريف فعل savoir في الحاضر"
            ],
            "keyVocabularyEn": [
              {
                "term": "L'écurie",
                "definition": "Stable where horses live."
              },
              {
                "term": "Le clapier",
                "definition": "Hutch where rabbits are kept."
              },
              {
                "term": "Le poulailler",
                "definition": "Henhouse / coop where chickens live and lay eggs."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "L'écurie",
                "definition": "الإسطبل المخصص لإيواء الخيول."
              },
              {
                "term": "Le clapier",
                "definition": "قفص أو جحر تربية الأرانب."
              },
              {
                "term": "Le poulailler",
                "definition": "قن الدجاج المخصص للطيور والبيض."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Rural vs Urban Debate",
                "phaseAr": "مناظرة الريف مقابل المدينة",
                "duration": "20 min",
                "activitiesEn": "Students debate preference for country tranquility vs city dynamism.",
                "activitiesAr": "مناظرة صفية حول تفضيل هدوء الريف أو صخب المدينة."
              },
              {
                "phaseEn": "Animal Family & Habitat Matrix",
                "phaseAr": "مصفوفة عائلات ومساكن الحيوانات",
                "duration": "45 min",
                "activitiesEn": "Building the comprehensive table.",
                "activitiesAr": "بناء جدول المقارنة الشامل للحيوانات ومساكنها."
              },
              {
                "phaseEn": "Savoir + Activity Practice",
                "phaseAr": "تطبيق التعبير عن المهارات مع Savoir",
                "duration": "25 min",
                "activitiesEn": "Exit ticket and situational questions on farm routines.",
                "activitiesAr": "حل أسئلة مواقف حول أنشطة المزرعة وتقييم الخروج."
              }
            ],
            "commonMisconceptionsEn": [
              "Confusing l'écurie (horse stable) with l'étable (cow barn).",
              "Confusing le mouton with la chèvre."
            ],
            "commonMisconceptionsAr": [
              "الخلط بين l'écurie (إسطبل الخيل) و l'étable (حظيرة الأبقار).",
              "الخلط بين الخروف والماعز."
            ],
            "differentiationEn": {
              "struggling": "Provide mnemonic links: Écurie starts with É like Équitation. Étable has T like Taureau.",
              "advanced": "Write a past narration of a weekend spent on a grandfather's farm."
            },
            "differentiationAr": {
              "struggling": "ربط ذهني للمسكن مع الحيوان.",
              "advanced": "كتابة سردية قصيرة عن قضاء عطلة نهاية الأسبوع في المزرعة."
            },
            "formativeAssessmentEn": "Four-question multiple choice test on matching animals to habitats.",
            "formativeAssessmentAr": "اختبار اختيار من متعدد لمطابقة الحيوانات بمساكنها.",
            "exitTicketQuestion": {
              "questionEn": "Le cheval vit dans ______ et la vache vit dans ______.",
              "questionAr": "Le cheval vit dans ______ et la vache vit dans ______.",
              "solutionEn": "l'écurie, l'étable.",
              "solutionAr": "l'écurie (إسطبل الخيل)، l'étable (حظيرة البقر)."
            }
          },
          "interactiveWidget": {
            "type": "french_audio_lab",
            "titleEn": "French Phonetics, Liaisons & Listening Lab",
            "titleAr": "معمل الصوتيات الفرنسية ونطق الأحرف المركبة",
            "descriptionEn": "Interactive Francophone pronunciation studio with Web Speech API audio synthesis, nasal vowel training, and exam listening tracks.",
            "descriptionAr": "معمل النطق الصوتي التفاعلي للغة الفرنسية مع التدريب على الحروف الأنفية وحروف الوصل وامتحانات الاستماع."
          },
          "worksheet": {
            "id": "th_fr_ch3_l1_ws",
            "titleEn": "Worksheet: TH_FR_CH3_L1",
            "titleAr": "ورقة تدريب: TH_FR_CH3_L1",
            "descriptionEn": "Ministry-standard worksheet problems assessing theoretical comprehension and communicative proficiency.",
            "descriptionAr": "تمارين وتطبيقات وفق مواصفات الورقة الامتحانية لوزارة التربية والتعليم لتقييم الفهم والقواعد.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_fr_ch3_l1_ws_p1",
                "titleEn": "Ministère Focus MCQ 1: Syntax Application",
                "titleAr": "تطبيق وزاري ١: القاعدة النحوية في سياق الجملة",
                "difficulty": "medium",
                "questionEn": "Le cheval dort dans ______ et la poule dans ______.",
                "questionAr": "Le cheval dort dans ______ et la poule dans ______.",
                "optionsEn": [
                  "l'écurie / le poulailler",
                  "l'étable / le clapier",
                  "la bergerie / la mare",
                  "la niche / le pré"
                ],
                "optionsAr": [
                  "l'écurie / le poulailler",
                  "l'étable / le clapier",
                  "la bergerie / la mare",
                  "la niche / le pré"
                ],
                "correctAnswer": "l'écurie / le poulailler",
                "correctIndex": 0,
                "hintEn": "Review the grammatical rule explained in the theory content.",
                "hintAr": "راجع القاعدة النحوية المشروحة في المحتوى النظري للدرس.",
                "stepByStepSolutionEn": [
                  "Analyze the governing verb, preposition, and contextual meaning.",
                  "Apply the official Egyptian Ministry grammatical paradigm.",
                  "Conclude the unique correct alternative matching standard French usage."
                ],
                "stepByStepSolutionAr": [
                  "تحليل الفعل وحرف الجر وسياق الجملة.",
                  "تطبيق القاعدة النحوية المقررة بوزارة التربية والتعليم.",
                  "استنتاج الإجابة الدقيقة الصحيحة."
                ],
                "teacherTipEn": "Key question pattern consistently featured in Grade 12 ministerial exams.",
                "teacherTipAr": "نمط أسئلة متكرر دائماً في امتحانات إتمام الثانوية العامة الرسمية."
              },
              {
                "id": "th_fr_ch3_l1_ws_p2",
                "titleEn": "Ministère Focus MCQ 2: Communicative Situation",
                "titleAr": "تطبيق وزاري ٢: الموقف التواصلي الحياتي",
                "difficulty": "medium",
                "questionEn": "Vous exprimez ce que vous savez faire à la campagne, vous dites:",
                "questionAr": "Vous exprimez ce que vous savez faire à la campagne, vous dites:",
                "optionsEn": [
                  "Je sais monter à cheval.",
                  "La ville est moderne.",
                  "Je déteste la nature.",
                  "Les vaches dorment."
                ],
                "optionsAr": [
                  "Je sais monter à cheval.",
                  "La ville est moderne.",
                  "Je déteste la nature.",
                  "Les vaches dorment."
                ],
                "correctAnswer": "Je sais monter à cheval.",
                "correctIndex": 0,
                "hintEn": "Identify who is asking or speaking (vous demandez ... vous dites = question).",
                "hintAr": "حدد من يسأل ومن يجيب (أنت تسأل... أنت تقول = تبحث عن سؤال).",
                "stepByStepSolutionEn": [
                  "Analyze the situation cue: \"vous demandez... vous dites\".",
                  "Check speaker alignment to verify if a question or a response is required.",
                  "Select option A which perfectly satisfies the communicative goal."
                ],
                "stepByStepSolutionAr": [
                  "تحليل صيغة الموقف: أنت تسأل... أنت تقول.",
                  "التأكد مما إذا كان المطلوب سؤالاً أم إجابة.",
                  "اختيار البديل الصحيح الذي يعبر عن الموقف بدقة."
                ],
                "teacherTipEn": "Always check the end of the situation prompt: \"il dit\" vs \"vous dites\".",
                "teacherTipAr": "انتبه دائماً لنهاية جملة الموقف: هل هي \"يقول هو\" أم \"تقول أنت\"."
              }
            ]
          }
        },
        {
          "id": "th_fr_ch3_l2",
          "titleEn": "Le Passé Composé (Être vs Avoir) et la Négation Complexe",
          "titleAr": "الماضي المركب (Être مقابل Avoir) وأساليب النفي المتعددة",
          "summaryEn": "Comprehensive mastery of the Passé Composé: choosing between auxiliaries être and avoir, past participle formation and agreement rules, alongside the advanced negative expressions.",
          "summaryAr": "إتقان شامل لزمن الماضي المركب: الاختيار بين المساعدين être و avoir، صياغة اسم المفعول وقواعد التبعية، بالإضافة إلى نظام النفي المتقدم بأدواته المتعددة.",
          "theoryContentEn": "### 1. Le Passé Composé\n- **Auxiliaire ÊTRE:** 14 verbes de mouvement + verbes pronominaux. Accord obligatoire avec le sujet (e, s, es).\n- **Auxiliaire AVOIR:** La majorité des verbes. Accord uniquement avec le COD antécédent.\n\n### 2. La Négation Complexe\n- ne...jamais (toujours / souvent)\n- ne...rien (quelque chose / que / quoi)\n- ne...personne (quelqu'un / qui)\n- ne...plus (encore)",
          "theoryContentAr": "### ١. زمن الماضي المركب\n- مع être: ١٤ فعلاً والأفعال ذات الضميرين، ويتبع الفاعل دائماً.\n- مع avoir: باقي الأفعال، وتتبعه فقط إذا تقدم المفعول المباشر.\n\n### ٢. أدوات النفي الخاصة\n- ne...jamais مع toujours أو souvent.\n- ne...rien مع quelque chose أو que.\n- ne...personne مع quelqu'un أو qui.\n- ne...plus مع encore.",
          "formulas": [
            {
              "labelEn": "Passé Composé Structure",
              "labelAr": "تركيب زمن الماضي المركب",
              "latex": "\\text{Passé Composé} = \\text{Sujet} + \\begin{cases} \\text{Être} + \\text{Participe Passé (accord sujet)} \\\\ \\text{Avoir} + \\text{Participe Passé (accord COD ant.)} \\end{cases}"
            },
            {
              "labelEn": "Negation Correspondence Pairs",
              "labelAr": "ثنائيات الكلمات الدالة والنفي",
              "latex": "\\begin{aligned} \\text{toujours / souvent} &\\iff \\text{ne...jamais} \\\\ \\text{quelque chose / que} &\\iff \\text{ne...rien} \\\\ \\text{quelqu'un / qui} &\\iff \\text{ne...personne} \\\\ \\text{encore} &\\iff \\text{ne...plus} \\end{aligned}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry French Curriculum (Club @dos Plus 3 - Grade 12)",
            "bookTitleAr": "منهج اللغة الفرنسية للثانوية العامة (Club @dos Plus 3) - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Term 2",
            "officialCode": "MOE-SEC3-FR-U3-L2",
            "pageRange": "Unité 3, pp. 87–102"
          },
          "lessonPlan": {
            "titleEn": "Passé Composé Auxiliaries & Advanced Negation Systems",
            "titleAr": "خطة درس مساعدي الماضي المركب وأنظمة النفي المتقدمة",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-FR-U3-L2",
            "bloomsObjectivesEn": [
              "Select the appropriate auxiliary (être vs avoir) for any given past event.",
              "Implement subject agreement rules for verbs conjugated with être.",
              "Choose the precise negative particle matching affirmative trigger words."
            ],
            "bloomsObjectivesAr": [
              "اختيار الفعل المساعد المناسب (être مقابل avoir) لأي حدث ماضٍ.",
              "تطبيق قواعد تبعية اسم المفعول مع الفاعل للأفعال المصرفة مع être.",
              "اختيار أداة النفي الدقيقة المقابلة للكلمات الدالة في الإثبات."
            ],
            "prerequisitesEn": [
              "Present conjugations of être and avoir",
              "Basic negation with ne...pas"
            ],
            "prerequisitesAr": [
              "تصريف فعلي être و avoir في الحاضر",
              "النفي البسيط بـ ne...pas"
            ],
            "keyVocabularyEn": [
              {
                "term": "Le participe passé",
                "definition": "Past participle form of the verb."
              },
              {
                "term": "L'accord",
                "definition": "Grammatical agreement in gender and number."
              },
              {
                "term": "La négation particulière",
                "definition": "Specific negation pairs."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "Le participe passé",
                "definition": "اسم المفعول المشتق من الفعل."
              },
              {
                "term": "L'accord",
                "definition": "التبعية الإعرابية في النوع والعدد."
              },
              {
                "term": "La négation particulière",
                "definition": "أدوات النفي المتخصصة."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Auxiliary Selection & 14 Verbs",
                "phaseAr": "اختيار الفعل المساعد وقائمة الـ ١٤ فعلاً",
                "duration": "25 min",
                "activitiesEn": "Mnemonic house of être and pronominal verbs.",
                "activitiesAr": "رسم بيت أفعال être والأفعال ذات الضميرين."
              },
              {
                "phaseEn": "Agreement Mechanics Drill",
                "phaseAr": "آليات تبعية اسم المفعول",
                "duration": "30 min",
                "activitiesEn": "Contrasting agreement with être vs lack of agreement with avoir.",
                "activitiesAr": "المقارنة بين تبعية être وحالات التبعية النادرة مع avoir."
              },
              {
                "phaseEn": "Negation Trigger Mapping",
                "phaseAr": "خريطة الكلمات الدالة على النفي",
                "duration": "35 min",
                "activitiesEn": "Transforming trigger sentences into accurate negative counterparts.",
                "activitiesAr": "تحويل الجمل الإثباتية إلى جمل نفي متخصصة والتقييم."
              }
            ],
            "commonMisconceptionsEn": [
              "Placing \"personne\" between auxiliary and participle.",
              "Adding subject agreement to verbs conjugated with avoir."
            ],
            "commonMisconceptionsAr": [
              "وضع كلمة personne بين المساعد واسم المفعول (الصحيح أنها تأتي بعد اسم المفعول دائماً).",
              "إضافة تبعية الفاعل مع المساعد avoir."
            ],
            "differentiationEn": {
              "struggling": "Provide a paired negation cheat-sheet.",
              "advanced": "Practice combined structures (e.g. Il ne veut plus rien dire à personne)."
            },
            "differentiationAr": {
              "struggling": "جدول يربط كل كلمة دالة بأداة النفي الخاصة بها.",
              "advanced": "تركيب جمل نفي مزدوجة متقدمة."
            },
            "formativeAssessmentEn": "Sentence transformation items moving from affirmative trigger questions to negative answers.",
            "formativeAssessmentAr": "جمل تحويل من أسئلة إثباتية بها كلمات دالة إلى إجابات نفي صحيحة.",
            "exitTicketQuestion": {
              "questionEn": "Tu as encore soif? -> Non, je n'ai ______ soif.",
              "questionAr": "Tu as encore soif? -> Non, je n'ai ______ soif.",
              "solutionEn": "plus (encore triggers ne...plus).",
              "solutionAr": "plus (لأن كلمة encore في السؤال تستوجب النفي بـ ne...plus)."
            }
          },
          "interactiveWidget": {
            "type": "french_audio_lab",
            "titleEn": "French Phonetics, Liaisons & Listening Lab",
            "titleAr": "معمل الصوتيات الفرنسية ونطق الأحرف المركبة",
            "descriptionEn": "Interactive Francophone pronunciation studio with Web Speech API audio synthesis, nasal vowel training, and exam listening tracks.",
            "descriptionAr": "معمل النطق الصوتي التفاعلي للغة الفرنسية مع التدريب على الحروف الأنفية وحروف الوصل وامتحانات الاستماع."
          },
          "worksheet": {
            "id": "th_fr_ch3_l2_ws",
            "titleEn": "Worksheet: TH_FR_CH3_L2",
            "titleAr": "ورقة تدريب: TH_FR_CH3_L2",
            "descriptionEn": "Ministry-standard worksheet problems assessing theoretical comprehension and communicative proficiency.",
            "descriptionAr": "تمارين وتطبيقات وفق مواصفات الورقة الامتحانية لوزارة التربية والتعليم لتقييم الفهم والقواعد.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_fr_ch3_l2_ws_p1",
                "titleEn": "Ministère Focus MCQ 1: Syntax Application",
                "titleAr": "تطبيق وزاري ١: القاعدة النحوية في سياق الجملة",
                "difficulty": "medium",
                "questionEn": "Tu as encore faim? -> Non merci, je n'ai ______ faim.",
                "questionAr": "Tu as encore faim? -> Non merci, je n'ai ______ faim.",
                "optionsEn": [
                  "plus",
                  "jamais",
                  "rien",
                  "personne"
                ],
                "optionsAr": [
                  "plus",
                  "jamais",
                  "rien",
                  "personne"
                ],
                "correctAnswer": "plus",
                "correctIndex": 0,
                "hintEn": "Review the grammatical rule explained in the theory content.",
                "hintAr": "راجع القاعدة النحوية المشروحة في المحتوى النظري للدرس.",
                "stepByStepSolutionEn": [
                  "Analyze the governing verb, preposition, and contextual meaning.",
                  "Apply the official Egyptian Ministry grammatical paradigm.",
                  "Conclude the unique correct alternative matching standard French usage."
                ],
                "stepByStepSolutionAr": [
                  "تحليل الفعل وحرف الجر وسياق الجملة.",
                  "تطبيق القاعدة النحوية المقررة بوزارة التربية والتعليم.",
                  "استنتاج الإجابة الدقيقة الصحيحة."
                ],
                "teacherTipEn": "Key question pattern consistently featured in Grade 12 ministerial exams.",
                "teacherTipAr": "نمط أسئلة متكرر دائماً في امتحانات إتمام الثانوية العامة الرسمية."
              },
              {
                "id": "th_fr_ch3_l2_ws_p2",
                "titleEn": "Ministère Focus MCQ 2: Communicative Situation",
                "titleAr": "تطبيق وزاري ٢: الموقف التواصلي الحياتي",
                "difficulty": "medium",
                "questionEn": "Votre ami vous demande pourquoi vous êtes absent hier, vous dites:",
                "questionAr": "Votre ami vous demande pourquoi vous êtes absent hier, vous dites:",
                "optionsEn": [
                  "Parce que j'étais très malade.",
                  "Je vais voyager demain.",
                  "J'aime mon lycée.",
                  "Le train est rapide."
                ],
                "optionsAr": [
                  "Parce que j'étais très malade.",
                  "Je vais voyager demain.",
                  "J'aime mon lycée.",
                  "Le train est rapide."
                ],
                "correctAnswer": "Parce que j'étais très malade.",
                "correctIndex": 0,
                "hintEn": "Identify who is asking or speaking (vous demandez ... vous dites = question).",
                "hintAr": "حدد من يسأل ومن يجيب (أنت تسأل... أنت تقول = تبحث عن سؤال).",
                "stepByStepSolutionEn": [
                  "Analyze the situation cue: \"vous demandez... vous dites\".",
                  "Check speaker alignment to verify if a question or a response is required.",
                  "Select option A which perfectly satisfies the communicative goal."
                ],
                "stepByStepSolutionAr": [
                  "تحليل صيغة الموقف: أنت تسأل... أنت تقول.",
                  "التأكد مما إذا كان المطلوب سؤالاً أم إجابة.",
                  "اختيار البديل الصحيح الذي يعبر عن الموقف بدقة."
                ],
                "teacherTipEn": "Always check the end of the situation prompt: \"il dit\" vs \"vous dites\".",
                "teacherTipAr": "انتبه دائماً لنهاية جملة الموقف: هل هي \"يقول هو\" أم \"تقول أنت\"."
              }
            ]
          }
        }
      ],
      "databank": frenchCh3Databank
    },
    {
      "id": "th_fr_ch4",
      "chapterNumber": 4,
      "titleEn": "Unité 4 : Le club des voyageurs",
      "titleAr": "الوحدة الرابعة: نادي المسافرين",
      "descriptionEn": "Means of transportation, prepositions (en vs à vs par), urban professions and shops, health and physical pain expressions (avoir mal à, chez le médecin), the adverbial locative pronoun Y, and the near future (Futur Proche) versus recent past (Passé Récent).",
      "descriptionAr": "وسائل المواصلات وحروف الجر (en, à, par)، المهن والمحلات التجارية بالمدينة، التعبير عن الألم البدني والصحة (avoir mal à)، الضمير المكاني Y، وصيغ المستقبل القريب والماضي الحديث.",
      "isFullyEquipped": true,
      "lessons": [
        {
          "id": "th_fr_ch4_l1",
          "titleEn": "Moyens de Transport, Prépositions et Commerces de la Ville",
          "titleAr": "وسائل المواصلات، حروف الجر والمتاجر الحضرية",
          "summaryEn": "Detailed categorization of public and private transport, prepositions of movement (en, à, par), municipal shops, merchant professions, and giving urban directions.",
          "summaryAr": "تصنيف وسائل المواصلات العامة والخاصة، حروف جر الانتقال (en, à, par)، المتاجر الحضرية ومهن أصحابها، وإعطاء خطوط السير والاتجاهات داخل المدينة.",
          "theoryContentEn": "### 1. Les Moyens de Transport\n- **EN:** Véhicules fermés (*en train, en avion, en voiture, en bus, en métro*).\n- **À:** Véhicules ouverts ou à pied (*à vélo, à moto, à cheval, à pied*).\n- **Prendre / Attendre:** Article défini (*prendre le métro*).\n\n### 2. Les Commerces et Commerçants\n- **À la / Au + Magasin:** *à la boulangerie, à la boucherie, à la pharmacie*.\n- **Chez + Professionnel:** *chez le boulanger, chez le médecin, chez le dentiste*.",
          "theoryContentAr": "### ١. وسائل المواصلات وحروف الجر\n- حرف الجر en: لوسائل المواصلات المغلقة.\n- حرف الجر à: للوسائل المكشوفة وسيراً على الأقدام.\n- أفعال مثل prendre و attendre تأخذ أداة معرفة مباشرة.\n\n### ٢. المحلات التجارية وأصحاب المهن\n- حرف الجر à للمحل التجاري (à la boulangerie).\n- حرف الجر chez للشخص المهني (chez le boulanger).",
          "formulas": [
            {
              "labelEn": "Transport Preposition Rule",
              "labelAr": "قاعدة حروف جر المواصلات",
              "latex": "\\text{Moyen fermé} \\implies \\text{en} \\quad | \\quad \\text{Moyen ouvert / Pied} \\implies \\text{à} \\quad | \\quad \\text{Prendre/Attendre} \\implies \\text{le/la/les}"
            },
            {
              "labelEn": "Shop Place vs Merchant Person",
              "labelAr": "قاعدة المكان والشخص المهني",
              "latex": "\\text{Aller} + \\begin{cases} \\text{à / au / à la} + [\\text{Lieu du commerce}] \\\\ \\text{chez} + [\\text{Nom de personne / Commerçant}] \\end{cases}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry French Curriculum (Club @dos Plus 3 - Grade 12)",
            "bookTitleAr": "منهج اللغة الفرنسية للثانوية العامة (Club @dos Plus 3) - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Term 2",
            "officialCode": "MOE-SEC3-FR-U4-L1",
            "pageRange": "Unité 4, pp. 104–118"
          },
          "lessonPlan": {
            "titleEn": "Transport Prepositions, Urban Shops & Municipal Merchants",
            "titleAr": "خطة درس حروف جر المواصلات ومحلات المدينة والمهن",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-FR-U4-L1",
            "bloomsObjectivesEn": [
              "Differentiate between en and à based on physical vehicle characteristics.",
              "Employ direct articles with transitive transport verbs like prendre and attendre.",
              "Distinguish between à + shop venue and chez + merchant professional."
            ],
            "bloomsObjectivesAr": [
              "التمييز بين حرفي الجر en و à استناداً إلى طبيعة وسيلة المواصلات.",
              "استخدام أدوات المعرفة مع أفعال المواصلات المباشرة مثل prendre و attendre.",
              "التمييز بين حرف الجر à مع اسم المتجر و chez مع الشخص صاحب المهنة."
            ],
            "prerequisitesEn": [
              "Names of vehicles in French",
              "Contracted articles with à (au, à la)"
            ],
            "prerequisitesAr": [
              "أسماء وسائل المواصلات بالفرنسية",
              "أدوات الإدغام مع حرف الجر à"
            ],
            "keyVocabularyEn": [
              {
                "term": "Le moyen de transport",
                "definition": "Means of transportation."
              },
              {
                "term": "La librairie",
                "definition": "Bookstore where books and stationery are bought."
              },
              {
                "term": "La bibliothèque",
                "definition": "Library where books are consulted or borrowed."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "Le moyen de transport",
                "definition": "وسيلة المواصلات."
              },
              {
                "term": "La librairie",
                "definition": "مكتبة لبيع الكتب والأدوات المدرسية."
              },
              {
                "term": "La bibliothèque",
                "definition": "مكتبة عامة للقراءة المجانية واستعارة الكتب."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Transport Preposition Sorting",
                "phaseAr": "تصنيف وسائل المواصلات وحروف الجر",
                "duration": "20 min",
                "activitiesEn": "Categorizing vehicles into enclosed vs astride.",
                "activitiesAr": "تصنيف المركبات إلى مغلقة ومكشوفة وتحديد حرف الجر."
              },
              {
                "phaseEn": "Prendre vs Aller Distinction",
                "phaseAr": "الفارق بين أفعال الركوب وأفعال الذهاب",
                "duration": "35 min",
                "activitiesEn": "Contrasting \"Je prends le train\" with \"Je voyage en train\".",
                "activitiesAr": "المقارنة الدقيقة بين استخدام أداة المعرفة وحرف الجر."
              },
              {
                "phaseEn": "Shop vs Merchant Mapping",
                "phaseAr": "خريطة المتاجر والمهن",
                "duration": "35 min",
                "activitiesEn": "Matching exercise with chez le médecin vs à l'hôpital.",
                "activitiesAr": "تمارين الربط بين chez والشخص و à والمحل التجاري."
              }
            ],
            "commonMisconceptionsEn": [
              "Using \"en\" with prendre (e.g. Je prends le train, not en train).",
              "Confusing librairie with bibliothèque."
            ],
            "commonMisconceptionsAr": [
              "استخدام حرف الجر en مع فعل prendre (الصواب أداة المعرفة le train).",
              "الخلط بين librairie و bibliothèque."
            ],
            "differentiationEn": {
              "struggling": "Visual aid: inside = EN, on top = À.",
              "advanced": "Create complex city itinerary giving directions."
            },
            "differentiationAr": {
              "struggling": "صورة توضيحية: داخل المركبة = EN، فوق المركبة أو سيراً = À.",
              "advanced": "وصف خط سير مفصل داخل المدينة للوصول إلى معلم سياحي."
            },
            "formativeAssessmentEn": "Five fill-in-the-blank items selecting between en, à, le, and chez.",
            "formativeAssessmentAr": "خمس جمل لاختيار حرف الجر المناسب.",
            "exitTicketQuestion": {
              "questionEn": "Pour acheter des médicaments, je vais ______ le pharmacien et ______ la pharmacie.",
              "questionAr": "Pour acheter des médicaments, je vais ______ le pharmacien et ______ la pharmacie.",
              "solutionEn": "chez, à.",
              "solutionAr": "chez (لأنه شخص عاقل)، à (لأنها مكان المتجر)."
            }
          },
          "interactiveWidget": {
            "type": "french_audio_lab",
            "titleEn": "French Phonetics, Liaisons & Listening Lab",
            "titleAr": "معمل الصوتيات الفرنسية ونطق الأحرف المركبة",
            "descriptionEn": "Interactive Francophone pronunciation studio with Web Speech API audio synthesis, nasal vowel training, and exam listening tracks.",
            "descriptionAr": "معمل النطق الصوتي التفاعلي للغة الفرنسية مع التدريب على الحروف الأنفية وحروف الوصل وامتحانات الاستماع."
          },
          "worksheet": {
            "id": "th_fr_ch4_l1_ws",
            "titleEn": "Worksheet: TH_FR_CH4_L1",
            "titleAr": "ورقة تدريب: TH_FR_CH4_L1",
            "descriptionEn": "Ministry-standard worksheet problems assessing theoretical comprehension and communicative proficiency.",
            "descriptionAr": "تمارين وتطبيقات وفق مواصفات الورقة الامتحانية لوزارة التربية والتعليم لتقييم الفهم والقواعد.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_fr_ch4_l1_ws_p1",
                "titleEn": "Ministère Focus MCQ 1: Syntax Application",
                "titleAr": "تطبيق وزاري ١: القاعدة النحوية في سياق الجملة",
                "difficulty": "medium",
                "questionEn": "Pour aller à Alexandrie, nous voyageons ______ train.",
                "questionAr": "Pour aller à Alexandrie, nous voyageons ______ train.",
                "optionsEn": [
                  "en",
                  "à",
                  "par",
                  "au"
                ],
                "optionsAr": [
                  "en",
                  "à",
                  "par",
                  "au"
                ],
                "correctAnswer": "en",
                "correctIndex": 0,
                "hintEn": "Review the grammatical rule explained in the theory content.",
                "hintAr": "راجع القاعدة النحوية المشروحة في المحتوى النظري للدرس.",
                "stepByStepSolutionEn": [
                  "Analyze the governing verb, preposition, and contextual meaning.",
                  "Apply the official Egyptian Ministry grammatical paradigm.",
                  "Conclude the unique correct alternative matching standard French usage."
                ],
                "stepByStepSolutionAr": [
                  "تحليل الفعل وحرف الجر وسياق الجملة.",
                  "تطبيق القاعدة النحوية المقررة بوزارة التربية والتعليم.",
                  "استنتاج الإجابة الدقيقة الصحيحة."
                ],
                "teacherTipEn": "Key question pattern consistently featured in Grade 12 ministerial exams.",
                "teacherTipAr": "نمط أسئلة متكرر دائماً في امتحانات إتمام الثانوية العامة الرسمية."
              },
              {
                "id": "th_fr_ch4_l1_ws_p2",
                "titleEn": "Ministère Focus MCQ 2: Communicative Situation",
                "titleAr": "تطبيق وزاري ٢: الموقف التواصلي الحياتي",
                "difficulty": "medium",
                "questionEn": "Vous demandez à un passant comment aller à la gare, vous dites:",
                "questionAr": "Vous demandez à un passant comment aller à la gare, vous dites:",
                "optionsEn": [
                  "Pour aller à la gare, s'il vous plaît?",
                  "La gare est très grande.",
                  "Je prends l'avion.",
                  "Le train arrive à l'heure."
                ],
                "optionsAr": [
                  "Pour aller à la gare, s'il vous plaît?",
                  "La gare est très grande.",
                  "Je prends l'avion.",
                  "Le train arrive à l'heure."
                ],
                "correctAnswer": "Pour aller à la gare, s'il vous plaît?",
                "correctIndex": 0,
                "hintEn": "Identify who is asking or speaking (vous demandez ... vous dites = question).",
                "hintAr": "حدد من يسأل ومن يجيب (أنت تسأل... أنت تقول = تبحث عن سؤال).",
                "stepByStepSolutionEn": [
                  "Analyze the situation cue: \"vous demandez... vous dites\".",
                  "Check speaker alignment to verify if a question or a response is required.",
                  "Select option A which perfectly satisfies the communicative goal."
                ],
                "stepByStepSolutionAr": [
                  "تحليل صيغة الموقف: أنت تسأل... أنت تقول.",
                  "التأكد مما إذا كان المطلوب سؤالاً أم إجابة.",
                  "اختيار البديل الصحيح الذي يعبر عن الموقف بدقة."
                ],
                "teacherTipEn": "Always check the end of the situation prompt: \"il dit\" vs \"vous dites\".",
                "teacherTipAr": "انتبه دائماً لنهاية جملة الموقف: هل هي \"يقول هو\" أم \"تقول أنت\"."
              }
            ]
          }
        },
        {
          "id": "th_fr_ch4_l2",
          "titleEn": "La Santé, les Douleurs Corporelles et le Pronom de Lieu 'Y'",
          "titleAr": "الصحة، آلام الجسم والضمير المكاني Y",
          "summaryEn": "Human body parts, expressing physical pain using avoir mal à + article contracté, consulting healthcare practitioners, and mastering the locative pronoun Y to replace places.",
          "summaryAr": "أجزاء جسم الإنسان، التعبير عن الألم البدني بتعبير avoir mal à وأدوات الإدغام، استشارة الأطباء، وإتقان الضمير الشخصي المكاني Y للتعويض عن الأماكن.",
          "theoryContentEn": "### 1. Les Douleurs Corporelles (Avoir mal à...)\n- **au:** masculin singulier (*au dos, au ventre, au pied*).\n- **à la:** féminin singulier (*à la tête, à la jambe*).\n- **à l':** voyelle (*à l'œil, à l'estomac*).\n- **aux:** pluriel (*aux dents, aux yeux*).\n\n### 2. Le Pronom Personnel de Lieu 'Y'\n- Remplace un **complément de lieu** introduit par toute préposition sauf *de* (*au club, à Paris, chez le médecin*).\n- Exemple: *Tu vas à la pharmacie?* -> *Oui, j'**y** vais.*",
          "theoryContentAr": "### ١. التعبير عن الألم البدني\n- au للمفرد المذكر (au ventre).\n- à la للمفرد المؤنث (à la tête).\n- à l' للمبدوء بمتحرك (à l'œil).\n- aux للجمع (aux dents).\n\n### ٢. الضمير المكاني Y\n- يحل محل مكان مسبوق بأي حرف جر عدا de.",
          "formulas": [
            {
              "labelEn": "Physical Pain Formula",
              "labelAr": "صيغة التعبير عن الألم البدني",
              "latex": "\\text{Avoir mal} + \\{\\text{au} \\mid \\text{à la} \\mid \\text{à l'} \\mid \\text{aux}\\} + [\\text{Partie du corps}]"
            },
            {
              "labelEn": "Pronoun Y Replacement Rule",
              "labelAr": "قاعدة التعويض بالضمير Y",
              "latex": "[\\text{Préposition de lieu} \\neq \\text{de}] + \\text{Lieu} \\implies \\text{Y}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Egyptian Ministry French Curriculum (Club @dos Plus 3 - Grade 12)",
            "bookTitleAr": "منهج اللغة الفرنسية للثانوية العامة (Club @dos Plus 3) - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Term 2",
            "officialCode": "MOE-SEC3-FR-U4-L2",
            "pageRange": "Unité 4, pp. 119–135"
          },
          "lessonPlan": {
            "titleEn": "Human Anatomy, Physical Sensations & Locative Pronoun Y",
            "titleAr": "خطة درس أجزاء الجسم والآلام البدنية والضمير المكاني Y",
            "gradeLevel": "Grade 12",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-FR-U4-L2",
            "bloomsObjectivesEn": [
              "Select correct contracted articles for bodily ailments based on anatomical gender.",
              "Substitute locative prepositional complements using the adverbial pronoun Y.",
              "Advise patients on lifestyle adjustments."
            ],
            "bloomsObjectivesAr": [
              "اختيار أداة الإدغام الصحيحة للتعبير عن الألم بحسب تذكير وتأنيث عضو الجسم.",
              "التعويض عن المفعول الدال على مكان بالضمير الشخصي Y.",
              "إعطاء نصائح صحية للمريض."
            ],
            "prerequisitesEn": [
              "Body part names",
              "Conjugation of avoir in present tense"
            ],
            "prerequisitesAr": [
              "أسماء أجزاء الجسم بالفرنسية",
              "تصريف فعل avoir في الحاضر"
            ],
            "keyVocabularyEn": [
              {
                "term": "La gorge",
                "definition": "Throat, frequently sore during colds."
              },
              {
                "term": "Le pronom Y",
                "definition": "Locative adverbial pronoun replacing place complements."
              },
              {
                "term": "Avoir de la fièvre",
                "definition": "To have an elevated body temperature / fever."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "La gorge",
                "definition": "الحلق أو الحنجرة."
              },
              {
                "term": "Le pronom Y",
                "definition": "ضمير شخصي مكاني يحل محل المفعول الدال على مكان."
              },
              {
                "term": "Avoir de la fièvre",
                "definition": "الإصابة بارتفاع درجة حرارة الجسم والحمى."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Body Anatomy & Ailment Diagnosis",
                "phaseAr": "أجزاء الجسم وتشخيص الآلام",
                "duration": "25 min",
                "activitiesEn": "Labeling interactive human figure with correct pain markers.",
                "activitiesAr": "تسمية أجزاء الجسم وربطها بحروف الجر المناسبة."
              },
              {
                "phaseEn": "Pronoun Y Interactive Syntax",
                "phaseAr": "قواعد الضمير الشخصي المكاني Y",
                "duration": "35 min",
                "activitiesEn": "Practicing pronoun replacement with places.",
                "activitiesAr": "تدريبات استبدال الأماكن المختلفة بالضمير Y."
              },
              {
                "phaseEn": "Clinical Role-Play & Exit Assessment",
                "phaseAr": "محاكاة عيادة الطبيب وتقييم الخروج",
                "duration": "30 min",
                "activitiesEn": "Dialogue between doctor and patient applying all unit structures.",
                "activitiesAr": "حوار تواصل بين الطبيب والمريض وتطبيق القواعد والتقييم."
              }
            ],
            "commonMisconceptionsEn": [
              "Using \"Y\" for human beings after à (e.g. Je pense à lui, not J'y pense).",
              "Confusing au ventre with à la tête."
            ],
            "commonMisconceptionsAr": [
              "استخدام Y مع الأشخاص بعد حرف à (الصحيح à lui).",
              "الخلط بين تذكير البطن وتأنيث الرأس."
            ],
            "differentiationEn": {
              "struggling": "Color-coded anatomy chart matching au, à la, aux.",
              "advanced": "Draft a doctor's consultation notes specifying symptoms, diagnosis, and prescription."
            },
            "differentiationAr": {
              "struggling": "مخطط ملون لأجزاء الجسم يحدد أداة كل عضو بدقة.",
              "advanced": "كتابة تذكرة طبية بالفرنسية تصف الأعراض والتشخيص والدواء."
            },
            "formativeAssessmentEn": "Five question MCQ assessing selection between Y, en, lui, and leur.",
            "formativeAssessmentAr": "خمسة أسئلة اختيار من متعدد للمفاضلة بين الضمائر.",
            "exitTicketQuestion": {
              "questionEn": "Tu vas chez le dentiste? -> Oui, j'______ vais tout de suite.",
              "questionAr": "Tu vas chez le dentiste? -> Oui, j'______ vais tout de suite.",
              "solutionEn": "y (chez le dentiste indicates a place, replaced by locative pronoun Y).",
              "solutionAr": "y (لأن chez le dentiste تدل على عيادة الطبيب كالمكان، فتعوض بـ Y)."
            }
          },
          "interactiveWidget": {
            "type": "french_audio_lab",
            "titleEn": "French Phonetics, Liaisons & Listening Lab",
            "titleAr": "معمل الصوتيات الفرنسية ونطق الأحرف المركبة",
            "descriptionEn": "Interactive Francophone pronunciation studio with Web Speech API audio synthesis, nasal vowel training, and exam listening tracks.",
            "descriptionAr": "معمل النطق الصوتي التفاعلي للغة الفرنسية مع التدريب على الحروف الأنفية وحروف الوصل وامتحانات الاستماع."
          },
          "worksheet": {
            "id": "th_fr_ch4_l2_ws",
            "titleEn": "Worksheet: TH_FR_CH4_L2",
            "titleAr": "ورقة تدريب: TH_FR_CH4_L2",
            "descriptionEn": "Ministry-standard worksheet problems assessing theoretical comprehension and communicative proficiency.",
            "descriptionAr": "تمارين وتطبيقات وفق مواصفات الورقة الامتحانية لوزارة التربية والتعليم لتقييم الفهم والقواعد.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_fr_ch4_l2_ws_p1",
                "titleEn": "Ministère Focus MCQ 1: Syntax Application",
                "titleAr": "تطبيق وزاري ١: القاعدة النحوية في سياق الجملة",
                "difficulty": "medium",
                "questionEn": "Elle a mal ______ gorge et ne peut pas parler.",
                "questionAr": "Elle a mal ______ gorge et ne peut pas parler.",
                "optionsEn": [
                  "à la",
                  "au",
                  "à l'",
                  "aux"
                ],
                "optionsAr": [
                  "à la",
                  "au",
                  "à l'",
                  "aux"
                ],
                "correctAnswer": "à la",
                "correctIndex": 0,
                "hintEn": "Review the grammatical rule explained in the theory content.",
                "hintAr": "راجع القاعدة النحوية المشروحة في المحتوى النظري للدرس.",
                "stepByStepSolutionEn": [
                  "Analyze the governing verb, preposition, and contextual meaning.",
                  "Apply the official Egyptian Ministry grammatical paradigm.",
                  "Conclude the unique correct alternative matching standard French usage."
                ],
                "stepByStepSolutionAr": [
                  "تحليل الفعل وحرف الجر وسياق الجملة.",
                  "تطبيق القاعدة النحوية المقررة بوزارة التربية والتعليم.",
                  "استنتاج الإجابة الدقيقة الصحيحة."
                ],
                "teacherTipEn": "Key question pattern consistently featured in Grade 12 ministerial exams.",
                "teacherTipAr": "نمط أسئلة متكرر دائماً في امتحانات إتمام الثانوية العامة الرسمية."
              },
              {
                "id": "th_fr_ch4_l2_ws_p2",
                "titleEn": "Ministère Focus MCQ 2: Communicative Situation",
                "titleAr": "تطبيق وزاري ٢: الموقف التواصلي الحياتي",
                "difficulty": "medium",
                "questionEn": "Chez le médecin, vous décrivez votre douleur physique, vous dites:",
                "questionAr": "Chez le médecin, vous décrivez votre douleur physique, vous dites:",
                "optionsEn": [
                  "J'ai mal à la tête et au ventre.",
                  "Le docteur est gentil.",
                  "La pharmacie est ouverte.",
                  "Je prends le bus."
                ],
                "optionsAr": [
                  "J'ai mal à la tête et au ventre.",
                  "Le docteur est gentil.",
                  "La pharmacie est ouverte.",
                  "Je prends le bus."
                ],
                "correctAnswer": "J'ai mal à la tête et au ventre.",
                "correctIndex": 0,
                "hintEn": "Identify who is asking or speaking (vous demandez ... vous dites = question).",
                "hintAr": "حدد من يسأل ومن يجيب (أنت تسأل... أنت تقول = تبحث عن سؤال).",
                "stepByStepSolutionEn": [
                  "Analyze the situation cue: \"vous demandez... vous dites\".",
                  "Check speaker alignment to verify if a question or a response is required.",
                  "Select option A which perfectly satisfies the communicative goal."
                ],
                "stepByStepSolutionAr": [
                  "تحليل صيغة الموقف: أنت تسأل... أنت تقول.",
                  "التأكد مما إذا كان المطلوب سؤالاً أم إجابة.",
                  "اختيار البديل الصحيح الذي يعبر عن الموقف بدقة."
                ],
                "teacherTipEn": "Always check the end of the situation prompt: \"il dit\" vs \"vous dites\".",
                "teacherTipAr": "انتبه دائماً لنهاية جملة الموقف: هل هي \"يقول هو\" أم \"تقول أنت\"."
              }
            ]
          }
        }
      ],
      "databank": frenchCh4Databank
    }
  ]
};
