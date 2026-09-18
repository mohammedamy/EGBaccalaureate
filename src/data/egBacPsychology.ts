import type { Branch } from '../types/curriculum';
import { egBacPsychCh1Databank } from './databanks/egbac/egBacPsychCh1Databank';
import { egBacPsychCh1SolvedExamples, egBacPsychCh1Exercises } from './textbook/egbac/egBacPsychCh1Textbook';
import { egBacPsychCh2Databank } from './databanks/egbac/egBacPsychCh2Databank';
import { egBacPsychCh2SolvedExamples, egBacPsychCh2Exercises } from './textbook/egbac/egBacPsychCh2Textbook';
import { egBacPsychCh3Databank } from './databanks/egbac/egBacPsychCh3Databank';
import { egBacPsychCh3SolvedExamples, egBacPsychCh3Exercises } from './textbook/egbac/egBacPsychCh3Textbook';
import { egBacPsychCh4Databank } from './databanks/egbac/egBacPsychCh4Databank';
import { egBacPsychCh4SolvedExamples, egBacPsychCh4Exercises } from './textbook/egbac/egBacPsychCh4Textbook';
import { egBacPsychCh5Databank } from './databanks/egbac/egBacPsychCh5Databank';
import { egBacPsychCh5SolvedExamples, egBacPsychCh5Exercises } from './textbook/egbac/egBacPsychCh5Textbook';
import { egBacPsychCh6Databank } from './databanks/egbac/egBacPsychCh6Databank';
import { egBacPsychCh6SolvedExamples, egBacPsychCh6Exercises } from './textbook/egbac/egBacPsychCh6Textbook';
import { egBacPsychCh7Databank } from './databanks/egbac/egBacPsychCh7Databank';
import { egBacPsychCh7SolvedExamples, egBacPsychCh7Exercises } from './textbook/egbac/egBacPsychCh7Textbook';
import { egBacPsychCh8Databank } from './databanks/egbac/egBacPsychCh8Databank';
import { egBacPsychCh8SolvedExamples, egBacPsychCh8Exercises } from './textbook/egbac/egBacPsychCh8Textbook';

export const egBacPsychologyBranch: Branch = {
  id: "egbac_psychology",
  titleEn: "Psychology & Applied Sociology",
  titleAr: "علم النفس وعلم الاجتماع التطبيقي",
  categoryEn: "Behavioral & Social Sciences Track",
  categoryAr: "مسار العلوم السلوكية والاجتماعية",
  iconName: "Users",
  colorGradient: "from-pink-700 via-rose-700 to-purple-800",
  chapters: [
    {
      id: "egbac_psych_ch1",
      chapterNumber: 1,
      titleEn: "Unit 1: Human Intelligence & Learning Theories",
      titleAr: "الوحدة الأولى: الذكاء والتعلم الإنساني",
      descriptionEn: "Gardner's Multiple Intelligences theory, Classical Conditioning (Pavlov), Trial & Error (Thorndike), Gestalt Insight, Information Processing (Norman), principles of effective learning and study habits.",
      descriptionAr: "مفهوم الذكاء ونظرية الذكاءات المتعددة عند جاردنر، نظريات التعلم (الاشتراط الكلاسيكي، المحاولة والخطأ، الفهم والاستبصار، وتجهيز المعلومات)، ومبادئ التعلم الجيد وأسس الاستذكار الفعال.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_psych_ch1_l1",
          titleEn: "Concept of Intelligence & Gardner's Multiple Intelligences Theory",
          titleAr: "مفهوم الذكاء ونظرية الذكاءات المتعددة عند جاردنر",
          summaryEn: "Evolution of intelligence concepts and Howard Gardner's theory of multiple intelligences and vocational applications.",
          summaryAr: "تطور مفهوم الذكاء (الفلسفي، البيولوجي، الاجتماعي، والنفسي)، ورفض جاردنر للنظرة الأحادية وتعريف الذكاءات السبعة وكيفية تنميتها.",
          theoryContentEn: "### 1. The Evolution of Intelligence Concept\n- **Philosophical Concept (Aristotle):** Distinguishes vegetative soul from the intellect/rational soul that governs human conscious thought.\n- **Biological Concept:** Two functional cognitive/affective wings enabling organismic adaptation to dynamic environments.\n- **Sociological Concept:** Ability to initiate harmonious interactions within community structures.\n- **Psychological Concept:** Terman (abstract thinking), Wechsler (purposeful action & rational thought), Spearman (capacity to perceive relations).\n\n### 2. Howard Gardner's Multiple Intelligences Theory (1983)\n- Rejected the singular monolithic IQ score.\n- **Definition:** The capacity to solve real-world problems or fashion products within rich sociocultural contexts.\n- Identifies seven distinct intelligences present in all humans with varying profiles:\n  1. **Linguistic:** Expressive fluency, vocabulary mastery, rhetoric (poets, journalists, advocates).\n  2. **Logical-Mathematical:** Deductive reasoning, numerical computation, formal logic (scientists, coders).\n  3. **Spatial:** Spatial navigation, dimensional visualization, color harmonies (architects, pilots).\n  4. **Bodily-Kinesthetic:** Motor control, dexterity, nonverbal physical expression (athletes, surgeons).\n  5. **Musical:** Sensitivity to rhythm, pitch, timber, and auditory harmonies (musicians, composers).\n  6. **Interpersonal:** Empathetic tuning, leadership, social negotiation (educators, statesmen).\n  7. **Intrapersonal:** Deep self-knowledge, metacognitive awareness, objective goal setting (philosophers, thinkers).",
          theoryContentAr: "### ١. تطور مفهوم الذكاء عبر التاريخ\n- **المفهوم الفلسفي (أرسطو):** يرى أن النفس الدنيا تقوم بالوظائف الحيوية، بينما العقل هو أرقى صور النفس التي تميز الإنسان وتتحكم في ذكائه وسلوكه.\n- **المفهوم البيولوجي:** يرى أن الحياة العقلية تتضمن جانبين (المعرفي والوجداني) وظيفتهما مساعدة الكائن الحي على التكيف مع البيئة.\n- **المفهوم الاجتماعي:** قدرة الفرد على التفاعل والتواصل الإيجابي السوي مع الآخرين.\n- **المفهوم النفسي:** قدرة الفرد على التفكير المجرد (تيرمان)، والعمل الهادف والتفكير المنطقي (وكسلر)، وإدراك العلاقات (سبيرمان).\n\n### ٢. نظرية الذكاءات المتعددة عند جاردنر (1983)\n- رفض جاردنر فكرة الذكاء الواحد ونسبة الذكاء (IQ) الأحادية.\n- **تعريف الذكاء عند جاردنر:** هو القدرة على حل المشكلات في سياقات ومواقف متباينة.\n- يمتلك كل فرد باقة من الذكاءات المتعددة بدرجات متفاوتة، وهي قابلة للنمو والتدريب:\n  ١. **الذكاء اللغوي:** طلاقة الحديث، التعبير، وتذوق البلاغة (الشعراء والكتاب والخطباء).\n  ٢. **الذكاء المنطقي الرياضي:** التفكير الاستنباطي، الحساب، وحل المشكلات المجردة (العلماء والمبرمجون).\n  ٣. **الذكاء البصري المكاني:** إدراك العلاقات المكانية والألوان والمسافات (المهندسون والرسامون).\n  ٤. **الذكاء الجسمي الحركي:** التآزر الحركي واستخدام الجسد بمرونة (الرياضيون والممثلون).\n  ٥. **الذكاء الموسيقي:** إدراك النغمات والأنغام والإيقاعات الصوتية (الموسيقيون والملحنون).\n  ٦. **الذكاء الاجتماعي:** فهم مشاعر الآخرين واستجاباتهم والقيادة والتواصل الفعال (المعلمون والزعماء).\n  ٧. **الذكاء الشخصي:** فهم الذات وإمكاناتها وتحديد الأهداف بوعي وموضوعية (الفلاسفة والمفكرون).",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 1-16"
          },
          lessonPlan: {
            titleEn: "Concept of Intelligence & Gardner's Multiple Intelligences Theory",
            titleAr: "مفهوم الذكاء ونظرية الذكاءات المتعددة عند جاردنر",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH1-L1",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch1_l1_ws",
            titleEn: "Diagnostic Worksheet: Concept of Intelligence & Gardner's Multiple Intelligences Theory",
            titleAr: "ورقة عمل تقويمية تشخيصية: مفهوم الذكاء ونظرية الذكاءات المتعددة عند جاردنر",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch1_l1_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch1_l1_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch1_l1_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "psychology_learning_theories",
            titleEn: "Learning Theories & Conditioning Simulator",
            titleAr: "محاكي نظريات التعلم والاشتراط السلوكي",
            descriptionEn: "Interactive simulation of Pavlov, Thorndike, Gestalt and Norman learning paradigms.",
            descriptionAr: "محاكاة تفاعلية لتجارب بافلوف وثورندايك والجشتالت ونورمان في اكتساب الاستجابات وتدعيم السلوك."
          }
        },
        {
          id: "egbac_psych_ch1_l2",
          titleEn: "Learning Theories, Applications & Effective Study Principles",
          titleAr: "نظريات التعلم وتطبيقاتها ومبادئ الاستذكار الفعال",
          summaryEn: "Foundational learning paradigms (Pavlov, Thorndike, Gestalt, Norman) and principles of effective study habits.",
          summaryAr: "نظريات التعلم الكبرى (الاشتراط البافلوفي، المحاولة والخطأ لثورندايك، الاستبصار الجشتالتي، ومعالجة المعلومات لنورمان) وأسس الاستذكار الجيد.",
          theoryContentEn: "### 1. Four Major Paradigms of Learning\n1. **Classical Conditioning (Ivan Pavlov):**\n   - Repeated pairing of unconditioned stimulus (meat powder) with conditioned stimulus (bell) produces conditioned salivary response.\n   - **Laws:** Reinforcement, Extinction (presenting CS without UCS), Spontaneous Recovery.\n   - **Applications:** Behavior modification, phobia desensitization, emotional attitudes conditioning.\n2. **Trial & Error Learning (Edward Thorndike):**\n   - Connectionism through gradual selective elimination of futile actions in puzzle boxes.\n   - **Laws:** Exercise (use/disuse), Effect (satisfaction vs discomfort), Readiness/Preparation.\n   - **Applications:** Skill automation, hands-on task structuring, reinforcement timing.\n3. **Insight Learning (Gestalt: Kohler, Koffka, Wertheimer):**\n   - Restructuring the perceptual field to perceive dynamic whole configurations; insight arrives suddenly.\n   - **Traits:** Abrupt breakthrough, errorless execution, high resistance to forgetting, generalizable.\n4. **Information Processing (Donald Norman):**\n   - Cognitive intake, encoding, storage, and retrieval.\n   - **Laws:** Necessary relationship, causal learning, informative objective feedback.\n\n### 2. Principles of Effective Study\n- **Learning Principles:** Motivation, dual reinforcement, distributed vs massed practice, learner positive agency, and positive transfer.\n- **Study Habits:** Focus attention, cultivate desire/goals, active participation (summarizing/testing), structured reading strategies (SQ3R).",
          theoryContentAr: "### ١. نظريات التعلم الأربع وتطبيقاتها\n١. **التعلم الشرطي الكلاسيكي (إيفان بافلوف):**\n   - اقتران المثير الطبيعي غير الشرطي (طعام) بالمثير المحايد (جرس) ينتج مثيراً شرطياً يستجر استجابة شرطية.\n   - **القوانين:** التدعيم، الانطفاء (غياب المثير غير الشرطي)، والاسترجاع التلقائي.\n   - **التطبيقات:** تعديل السلوك، علاج المخاوف، وإطفاء العادات السلبية.\n٢. **المحاولة والخطأ (إدوارد ثورندايك):**\n   - التعلم بالانتقاء والربط التدريجي وتناقص زمن حل المشكلة داخل الأقفاص.\n   - **القوانين:** التمرين (الاستعمال والإهمال)، الأثر (الارتياح والضيق)، والاستعداد والتهيؤ الفسيولوجي.\n   - **التطبيقات:** استثارة دافعية التعلم، التدرج في الممارسة، وأهمية الأنشطة العملية.\n٣. **الفهم والاستبصار (الجشتالت: كوهلر، كوفكا، فرتهيمر):**\n   - التعلم يحدث فجأة بالاستبصار وإعادة تنظيم المجال الإدراكي؛ والكل أكبر من مجموع الأجزاء.\n   - **الخصائص:** انتقال مفاجئ، خالٍ من الأخطاء، يقاوم النسيان، وسهل الانتقال لمواقف جديدة.\n٤. **تجهيز ومعالجة المعلومات (دونالد نورمان):**\n   - التعلم عملية معرفية لتخزين واسترجاع المعلومات بكفاءة.\n   - **القوانين:** العلاقة السببية، التعلم السببي، والتغذية الراجعة المعلوماتية (Feedback).\n\n### ٢. مبادئ التعلم الجيد وأسس الاستذكار الفعال\n- **مبادئ التعلم:** الدافعية، التعزيز (الموجب والسالب)، الممارسة الموزعة والمركّزة، الدور الإيجابي للمتعلم، وقابلية التعلم للانتقال.\n- **أسس الاستذكار الفعال:** تركيز الانتباه وتخصيص بيئة ملائمة، زيادة الرغبة في الاستذكار، المشاركة النشطة (تدوين الملاحظات والتلخيص)، واستخدام طرق القراءة الفعالة واستعراض العناوين (SQ3R).",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 1-16"
          },
          lessonPlan: {
            titleEn: "Learning Theories, Applications & Effective Study Principles",
            titleAr: "نظريات التعلم وتطبيقاتها ومبادئ الاستذكار الفعال",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH1-L2",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch1_l2_ws",
            titleEn: "Diagnostic Worksheet: Learning Theories, Applications & Effective Study Principles",
            titleAr: "ورقة عمل تقويمية تشخيصية: نظريات التعلم وتطبيقاتها ومبادئ الاستذكار الفعال",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch1_l2_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch1_l2_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch1_l2_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "psychology_learning_theories",
            titleEn: "Learning Theories & Conditioning Simulator",
            titleAr: "محاكي نظريات التعلم والاشتراط السلوكي",
            descriptionEn: "Interactive simulation of Pavlov, Thorndike, Gestalt and Norman learning paradigms.",
            descriptionAr: "محاكاة تفاعلية لتجارب بافلوف وثورندايك والجشتالت ونورمان في اكتساب الاستجابات وتدعيم السلوك."
          }
        }
      ],
      databank: egBacPsychCh1Databank,
      solvedExamples: egBacPsychCh1SolvedExamples,
      exerciseProblems: egBacPsychCh1Exercises,
      interactiveWidgets: [
        {
          type: "psychology_learning_theories",
          titleEn: "Learning Theories & Conditioning Simulator",
          titleAr: "محاكي نظريات التعلم والاشتراط السلوكي",
          descriptionEn: "Interactive simulation of Pavlov, Thorndike, Gestalt and Norman learning paradigms.",
          descriptionAr: "محاكاة تفاعلية لتجارب بافلوف وثورندايك والجشتالت ونورمان في اكتساب الاستجابات وتدعيم السلوك."
        }
      ]
    },
    {
      id: "egbac_psych_ch2",
      chapterNumber: 2,
      titleEn: "Unit 2: Human Growth & Developmental Psychology",
      titleAr: "الوحدة الثانية: النمو والارتقاء الإنساني",
      descriptionEn: "Principles of human development, endocrine & environmental determinants, developmental trajectories from prenatal/infancy through childhood and adolescent identity challenges.",
      descriptionAr: "مفهوم ومبادئ النمو، العوامل المؤثرة (الوراثة، الغدد، الأسرة، الرفاق، المدرسة، والإعلام)، ومراحل النمو من الجنين والرضاعة حتى الطفولة والمراهقة ومطالبها الأساسية.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_psych_ch2_l1",
          titleEn: "Concept of Growth, General Principles & Influencing Determinants",
          titleAr: "مفهوم النمو ومبادئه والعوامل المؤثرة فيه",
          summaryEn: "The continuous nature of human growth, fundamental developmental laws, and bio-environmental determinants.",
          summaryAr: "مفهوم النمو وسلسلته المستمرة، المبادئ العامة، ودور الغدد الصماء والوراثة والتنشئة الأسرية.",
          theoryContentEn: "### 1. Concept and General Principles of Growth\n- **Definition:** A continuous progressive series of qualitative and quantitative changes extending from conception across the lifespan.\n- **General Developmental Laws:**\n  1. **General to Specific (Mass to Differentiation):** Organism responds globally before differentiating nuanced motor and verbal responses.\n  2. **Continuity & Cumulative Progression:** Each developmental milestone builds organically on previous acquisitions.\n  3. **Individual Differences:** Manifest between individuals and within the same individual across developmental domains.\n  4. **Inter-correlation Among Domains:** Advanced cognitive development positively correlates with emotional stability.\n  5. **Variable Velocity Across Stages:** Surges in prenatal, infancy, and early adolescence; decelerates in middle/late childhood.\n  6. **Directional Vectors:** Cephalocaudal (head to foot) and Proximodistal (center outward).\n\n### 2. Influencing Determinants of Development\n- **Genetics:** Transference of hereditary biological codes.\n- **Endocrine Glands:**\n  - *Pituitary (Master Gland):* Growth hormone (deficiency yields dwarfism; surplus causes gigantism).\n  - *Thyroid:* Thyroxine regulates metabolic energy (hypo yields lethargy and intellectual delays; hyper yields anxiety and agitation).\n- **Family, Nutrition & Peers:** Warm supportive parenting fosters resilient ego strength; peer groups provide social validation.",
          theoryContentAr: "### ١. مفهوم النمو وقوانينه العامة\n- **التعريف:** سلسلة متتابعة ومستمرة من التغيرات الكمية والكيفية التي تهدف إلى اكتمال النضج وتمتد من الإخصاب حتى نهاية الحياة.\n- **المبادئ والقوانين العامة:**\n  ١. **السير من العام إلى الخاص:** يستجيب الطفل للمثيرات كلياً في البداية ثم تتخصص استجاباته تدريجياً.\n  ٢. **الاستمرارية والتدرج:** لا يتوقف النمو عند مرحلة معينة، بل كل مرحلة تؤسس لما بعدها.\n  ٣. **وجود فروق فردية:** تختلف سرعة النمو وإمكاناته بين الأفراد، وحتى داخل الفرد نفسه في جوانب النمو المختلفة.\n  ٤. **ارتباط جوانب النمو:** الذكاء المرتفع يرتبط غالباً بالنضج الانفعالي والاجتماعي والحركي.\n  ٥. **اختلاف سرعة النمو من مرحلة لأخرى:** سريع جداً في الجنين والطفولة المبكرة والمراهقة، وبطيء نسبياً في الطفولة المتأخرة والرشد.\n  ٦. **الاتجاهات الطولية والمستعرضة:** يسير النمو من الرأس إلى القدمين، ومن المركز (الجذع) إلى الأطراف.\n\n### ٢. العوامل المؤثرة في النمو\n- **الوراثة (الجينات):** انتقال السمات البيولوجية من الآباء للأبناء.\n- **الغدد الصماء:**\n  - **الغدة النخامية:** إفراز هرمون النمو (نقصه يسبب القزامة، وزيادته تسبب العملقة).\n  - **الغدة الدرقية:** إفراز الثيروكسين لضبط الأيض والطاقة (نقصه يسبب بطء النمو والكسل والخمول، وزيادته تسبب العصبية وسرعة ضربات القلب).\n- **التغذية والأسرة وجماعة الرفاق:** دور التنشئة السوية (الحب والدفء والقبول) في ترسيخ الثقة النفسية وتجنب القلق والاغتراب.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 17-32"
          },
          lessonPlan: {
            titleEn: "Concept of Growth, General Principles & Influencing Determinants",
            titleAr: "مفهوم النمو ومبادئه والعوامل المؤثرة فيه",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH2-L1",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch2_l1_ws",
            titleEn: "Diagnostic Worksheet: Concept of Growth, General Principles & Influencing Determinants",
            titleAr: "ورقة عمل تقويمية تشخيصية: مفهوم النمو ومبادئه والعوامل المؤثرة فيه",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch2_l1_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch2_l1_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch2_l1_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "psychology_memory_retention",
            titleEn: "Growth Velocity & Ebbinghaus Retention Simulator",
            titleAr: "محاكي منحنى الارتقاء والذاكرة والنسيان",
            descriptionEn: "Interactive simulator of developmental rates and Ebbinghaus memory retention curve.",
            descriptionAr: "محاكي تفاعلي لمعدلات النمو عبر المراحل ومنحنى إبنجهاوس للنسيان والممارسة الموزعة."
          }
        },
        {
          id: "egbac_psych_ch2_l2",
          titleEn: "Developmental Stages: Prenatal, Infancy, Childhood & Adolescence",
          titleAr: "مراحل النمو: الجنين والرضاعة والطفولة والمراهقة",
          summaryEn: "Developmental milestones across embryonic, infant, childhood stages, and adolescent identity maturation challenges.",
          summaryAr: "خصائص مراحل الجنين، الرضاعة والطفولة، والتحديات النمائية الكبرى لمرحلة المراهقة وتأكيد الهوية.",
          theoryContentEn: "### 1. Prenatal & Infancy Stages\n- **Prenatal Stage:** Foundational organogenesis vulnerable to teratogens, maternal viral infections, Rh incompatibility, radiation, and severe emotional distress.\n- **Infancy (0-2 Years):** Sensorimotor emergence, locomotion, basic linguistic utterances, and establishing primary emotional attachment and trust.\n\n### 2. Early & Late Childhood\n- **Early Childhood:** Language explosion, egocentric perspective, fine-motor refinement, and emerging self-concept.\n- **Late Childhood:** Socialization within peer groups, concrete operational thought, and achievement orientation.\n\n### 3. Adolescence & Core Psychosocial Challenges\n- The critical developmental bridge from dependent childhood to sovereign adulthood.\n- **Core Developmental Tasks:**\n  1. **Identity & Vocational Formation:** Resolving identity crisis and preparing for professional roles.\n  2. **Emotional Independence from Parents:** Cultivating self-reliance while preserving loving familial bonds.\n  3. **Mature Peer Relationships:** Navigating reciprocal peer loyalties and social communication.\n  4. **Accepting Physical Alterations:** Harmonizing with rapid puberty morphology changes.\n  5. **Internalizing Moral-Ethical Philosophy:** Developing a principled worldview and ethical maturity.",
          theoryContentAr: "### ١. مرحلة ما قبل الولادة (الجنين) والرضاعة\n- **مرحلة الجنين:** الطفرة الحيوية لتشكل الأجهزة؛ وتتأثر بصحة الأم، تغذيتها، التوافق المناعي لعامل ريزوس (Rh)، وتجنب العقاقير والإشعاع والانفعالات الحادة.\n- **مرحلة الرضاعة (أول سنتين):** انطلاق مهارات المشي والكلام، الفطام، واكتساب الثقة بالنفس والاستقلال العاطفي المبدئي.\n\n### ٢. مرحلة الطفولة المبكرة والمتأخرة\n- **الطفولة المبكرة (ما قبل المدرسة):** انفجار لغوي وتمركز حول الذات والتحكم في الإخراج والحركة ونمو الاستقلالية.\n- **الطفولة المتأخرة (المدرسة الابتدائية):** اتساع العالم الاجتماعي والانضمام للأقران، وتطور التفكير العياني المحسوس والاهتمام بالتحصيل.\n\n### ٣. مرحلة المراهقة والمطالب والتحديات الأساسية\n- المراهقة هي الجسر النمائي بين الطفولة والرشد، وتصحبها طفرة البلوغ الجسمي والتغيرات الانفعالية.\n- **المطالب والتحديات الأساسية للمراهق:**\n  ١. **تحقيق هوية الأنا والمركز المهني:** البحث عن مهنة وتأكيد الجدارة والهدف في الحياة.\n  ٢. **الاستقلال الانفعالي عن الوالدين:** الاعتماد على النفس دون تمرد عدواني.\n  ٣. **إقامة علاقات ناضجة مع الرفاق:** التعاون والاحترام والمشاركة الاجتماعية.\n  ٤. **تقبل التغيرات الجسدية:** التكيف مع طفرة النمو والتعامل الإيجابي مع الصورة الذاتية للجسم.\n  ٥. **بناء نسق قيمي وأخلاقي ناضج:** تبني مبادئ عليا وتطلعات عقلانية للمستقبل.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 17-32"
          },
          lessonPlan: {
            titleEn: "Developmental Stages: Prenatal, Infancy, Childhood & Adolescence",
            titleAr: "مراحل النمو: الجنين والرضاعة والطفولة والمراهقة",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH2-L2",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch2_l2_ws",
            titleEn: "Diagnostic Worksheet: Developmental Stages: Prenatal, Infancy, Childhood & Adolescence",
            titleAr: "ورقة عمل تقويمية تشخيصية: مراحل النمو: الجنين والرضاعة والطفولة والمراهقة",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch2_l2_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch2_l2_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch2_l2_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "psychology_memory_retention",
            titleEn: "Growth Velocity & Ebbinghaus Retention Simulator",
            titleAr: "محاكي منحنى الارتقاء والذاكرة والنسيان",
            descriptionEn: "Interactive simulator of developmental rates and Ebbinghaus memory retention curve.",
            descriptionAr: "محاكي تفاعلي لمعدلات النمو عبر المراحل ومنحنى إبنجهاوس للنسيان والممارسة الموزعة."
          }
        }
      ],
      databank: egBacPsychCh2Databank,
      solvedExamples: egBacPsychCh2SolvedExamples,
      exerciseProblems: egBacPsychCh2Exercises,
      interactiveWidgets: [
        {
          type: "psychology_memory_retention",
          titleEn: "Growth Velocity & Ebbinghaus Retention Simulator",
          titleAr: "محاكي منحنى الارتقاء والذاكرة والنسيان",
          descriptionEn: "Interactive simulator of developmental rates and Ebbinghaus memory retention curve.",
          descriptionAr: "محاكي تفاعلي لمعدلات النمو عبر المراحل ومنحنى إبنجهاوس للنسيان والممارسة الموزعة."
        }
      ]
    },
    {
      id: "egbac_psych_ch3",
      chapterNumber: 3,
      titleEn: "Unit 3: Personality Structure, Attitudes & Values",
      titleAr: "الوحدة الثالثة: الشخصية والاتجاهات والقيم",
      descriptionEn: "Allport's dynamic personality construct, personality paradigms (Freud, Behaviorism, Humanism), tripartite attitude structure, attitude modification and societal value frameworks.",
      descriptionAr: "مفهوم الشخصية ونموذج ألبورت، نظريات الشخصية الكبرى، بنية الاتجاهات وتعديلها، وبناء القيم والإطار الحضاري.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_psych_ch3_l1",
          titleEn: "Concept of Personality & Major Theoretical Paradigms",
          titleAr: "مفهوم الشخصية ونظرياتها الكبرى",
          summaryEn: "Personality definitions, Allport's dynamic formulation, and theoretical paradigms (Psychoanalysis, Behaviorism, Humanism).",
          summaryAr: "تعريف الشخصية كمثير واستجابة وكتنظيم دينامي عند ألبورت، ونظريات الأنماط، التحليل النفسي، السلوكية، والإنسانية.",
          theoryContentEn: "### 1. Concept of Personality\n- **As Stimulus:** Surface impression and external demeanor (critiqued for ignoring internal core).\n- **As Response:** Reactive output to environmental stimuli (critiqued for situational variance).\n- **As Intermediate Dynamic Organization (Gordon Allport):**\n  - *\"The dynamic organization within the individual of those psychophysical systems that determine his characteristic behavior and thought.\"*\n  - *Dynamic:* Evolving, adaptive equilibrium.\n  - *Psychophysical:* Indissoluble unity of psychological traits and biological substrates.\n  - *Characteristic:* Unrepeatable individual signature.\n\n### 2. Foundational Personality Theories\n1. **Humoral Temperament Theory (Hippocrates):** Sanguine, Choleric, Melancholic, Phlegmatic.\n2. **Psychoanalytic Theory (Sigmund Freud):**\n   - Primacy of early childhood, unconscious drives, and psychic conflict.\n   - **Structural Model:** Id (pleasure principle), Ego (reality mediation), Superego (moral conscience).\n3. **Behavioral Theory (Watson, Skinner):** Emphasizes observable behavior, stimulus-response patterns, and reinforcement schedules.\n4. **Humanistic Theory (Abraham Maslow):** Optimistic view of positive human potential, innate goodness, and self-actualization drive.",
          theoryContentAr: "### ١. مفهوم الشخصية وتعريفاتها\n- **الشخصية كمثير:** تحديد الشخصية بما يتركه الفرد من انطباعات ومظهر خارجي في الآخرين (نظرة سطحية تهمل الجوهر الداخلي).\n- **الشخصية كاستجابة:** ردود أفعال الفرد واستجاباته لمثيرات البيئة (يعاب عليها عدم الثبات نظراً لتغير الاستجابات بتغير المواقف).\n- **الشخصية كتنظيم داخلي وسيط (تعريف جوردون ألبورت):**\n  - «ذلك التنظيم الدينامي داخل الفرد لجميع النظم النفس-جسمية الذي يحدد أسلوبه الفريد والخاص في التفكير والسلوك».\n  - *دينامي:* في حركة وتفاعل مستمر وليس ساكناً.\n  - *نظم نفس-جسمية:* تكامل لا ينفصل بين العوامل النفسية والعضوية الحيوية.\n  - *أسلوب فريد:* لا يوجد فردان متطابقان في الشخصية والسلوك.\n\n### ٢. النظريات الكبرى في تفسير الشخصية\n١. **نظرية الأنماط (هيبوقراط):** ربط الشخصية بأربعة أمزجة فسيولوجية (الدموي، الصفراوي، السوداوي، والبلغمي).\n٢. **نظرية التحليل النفسي (سيجموند فرويد):**\n   - حتمية الطفولة المبكرة واللاشعور والميكانيزمات الدفاعية.\n   - **بناء الجهاز النفسي:** الهو (مبدأ اللذة والغرائز الفطرية)، الأنا (مبدأ الواقع والوساطة العقلانية)، والأنا الأعلى (الضمير والقيم والمثل العليا).\n٣. **النظرية السلوكية (جون واطسون وسكنر):** التركيز على السلوك الظاهر القابل للملاحظة والقياس ورفض العمليات العقلية واللاشعورية، ودور التعزيز والاشتراط.\n٤. **النظرية الإنسانية (أبراهام ماسلو):** النظرة المتفائلة لطبيعة الإنسان الخيرة والواعية، ودافع تحقيق الذات (Self-Actualization).",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 33-48"
          },
          lessonPlan: {
            titleEn: "Concept of Personality & Major Theoretical Paradigms",
            titleAr: "مفهوم الشخصية ونظرياتها الكبرى",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH3-L1",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch3_l1_ws",
            titleEn: "Diagnostic Worksheet: Concept of Personality & Major Theoretical Paradigms",
            titleAr: "ورقة عمل تقويمية تشخيصية: مفهوم الشخصية ونظرياتها الكبرى",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch3_l1_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch3_l1_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch3_l1_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "psychology_conflict_matrix",
            titleEn: "Personality Traits, Attitudes & Dissonance Matrix",
            titleAr: "مصفوفة الشخصية والاتجاهات وتعديل السلوك",
            descriptionEn: "Interactive framework exploring personality traits, tripartite attitudes, and cognitive dissonance resolution.",
            descriptionAr: "تحليل بنية الشخصية والمكونات الثلاثة للاتجاه وميكانيزمات التنافر المعرفي."
          }
        },
        {
          id: "egbac_psych_ch3_l2",
          titleEn: "Attitudes & Values: Structure, Functions & Behavioral Modification",
          titleAr: "الاتجاهات والقيم: البنية والوظائف وتعديل السلوك",
          summaryEn: "Tripartite attitude structure, cognitive dissonance, attitudinal change dynamics, and enduring value systems.",
          summaryAr: "المكونات الثلاثة للاتجاه، وظائف الاتجاهات وعوامل تعديلها والتنافر المعرفي، وبناء القيم وسلم الأولويات الأخلاقية.",
          theoryContentEn: "### 1. Psychological Attitudes\n- **Definition:** A learned, enduring predisposition to respond evaluatively toward an object, person, or concept.\n- **Tripartite Component Structure:**\n  1. **Cognitive:** Factual knowledge, beliefs, cognitive representations.\n  2. **Affective:** Emotional valence, feelings of affinity or aversion (most resistant to change).\n  3. **Behavioral/Conative:** Readiness to enact supportive or oppositional conduct.\n- **Dynamics of Attitudinal Change:**\n  - *Facilitating Factors:* Superficial attitude strength, absence of dogmatic rigidity, presence of clear verifiable counter-evidence.\n  - *Inhibiting Factors:* Extreme emotional entrenchment, perceived existential threat, and deep ideological ego-involvement.\n\n### 2. Societal & Personal Values\n- **Definition:** Enduring transcendent criteria dictating what is fundamentally desirable, moral, and worthy in life.\n- **Values vs. Attitudes Contrast:**\n  - Values are universally broad, abstract, and imperative; attitudes are specific to localized targets.\n  - Values possess superior temporal stability and carry prescriptive ethical weight.\n- **Civilizational Value Hierarchies:** Formed through familial socialization, spiritual teachings, and cultural legacy, creating moral compasses that govern civilizational flourishing.",
          theoryContentAr: "### ١. الاتجاهات النفسية (Attitudes)\n- **التعريف:** حالة من الاستعداد النفسي والعصبي مكتسبة ومنتظمة عبر الخبرة، توجه استجابات الفرد إيجابياً أو سلبياً نحو مواضيع ومواقف محددة.\n- **المكونات الثلاثة للاتجاه:**\n  ١. **المكون المعرفي:** المعارف والمعتقدات والمعلومات التي يحملها الفرد عن الموضوع.\n  ٢. **المكون الوجداني:** المشاعر والانفعالات (حب، كره، استحسان، استياء) وهي أكثر المكونات ثباتاً ومقاومة للتغيير.\n  ٣. **المكون السلوكي:** النزوع للفعل والممارسة العملية وتأييد أو معارضة الموضوع.\n- **عوامل تعديل الاتجاهات:**\n  - *ميسرة للتغيير:* سطحية الاتجاه، عدم وجود جمود فكري، وتوفر أدلة وحقائق منطقية مقنعة.\n  - *معوقة للتغيير:* رسوخ الاتجاه وارتباطه بالذات، التطرف والتعصب الأعمى، والشعور بالتهديد عند محاولة التعديل.\n\n### ٢. القيم (Values)\n- **التعريف:** معيار أو مقياس يحكم به الفرد على الأفعال والمقاصد والأفكار باعتبارها مرغوبة ومفضلة شخصياً واجتماعياً.\n- **الفروق بين الاتجاهات والقيم:**\n  - القيم أكثر عمومية وشمولاً وتجريداً من الاتجاهات الخاصة.\n  - القيم أكثر ثباتاً ورسوخاً وتحمل طابعاً إلزامياً وأخلاقياً أسمى.\n- **الإطار الحضاري للقيم:** تتشكل القيم من خلال التنشئة الأسرية والثقافة المجتمعية والروحية، وترتب في سلم أولويات يوجه سلوك الفرد والمجتمع نحو الرقي والتقدم.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 33-48"
          },
          lessonPlan: {
            titleEn: "Attitudes & Values: Structure, Functions & Behavioral Modification",
            titleAr: "الاتجاهات والقيم: البنية والوظائف وتعديل السلوك",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH3-L2",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch3_l2_ws",
            titleEn: "Diagnostic Worksheet: Attitudes & Values: Structure, Functions & Behavioral Modification",
            titleAr: "ورقة عمل تقويمية تشخيصية: الاتجاهات والقيم: البنية والوظائف وتعديل السلوك",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch3_l2_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch3_l2_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch3_l2_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "psychology_conflict_matrix",
            titleEn: "Personality Traits, Attitudes & Dissonance Matrix",
            titleAr: "مصفوفة الشخصية والاتجاهات وتعديل السلوك",
            descriptionEn: "Interactive framework exploring personality traits, tripartite attitudes, and cognitive dissonance resolution.",
            descriptionAr: "تحليل بنية الشخصية والمكونات الثلاثة للاتجاه وميكانيزمات التنافر المعرفي."
          }
        }
      ],
      databank: egBacPsychCh3Databank,
      solvedExamples: egBacPsychCh3SolvedExamples,
      exerciseProblems: egBacPsychCh3Exercises,
      interactiveWidgets: [
        {
          type: "psychology_conflict_matrix",
          titleEn: "Personality Traits, Attitudes & Dissonance Matrix",
          titleAr: "مصفوفة الشخصية والاتجاهات وتعديل السلوك",
          descriptionEn: "Interactive framework exploring personality traits, tripartite attitudes, and cognitive dissonance resolution.",
          descriptionAr: "تحليل بنية الشخصية والمكونات الثلاثة للاتجاه وميكانيزمات التنافر المعرفي."
        }
      ]
    },
    {
      id: "egbac_psych_ch4",
      chapterNumber: 4,
      titleEn: "Unit 4: Adjustment, Conflict, Frustration & Coping Mechanisms",
      titleAr: "الوحدة الرابعة: أساليب التوافق النفسي والصراع والإحباط",
      descriptionEn: "Psychological adjustment, causes of frustration, Lewin's conflict typology, anxiety spectrum (Yerkes-Dodson), direct problem-solving, and unconscious defense mechanisms.",
      descriptionAr: "التوافق النفسي والاجتماعي، أسباب الإحباط وعوامله، أنواع الصراع عند كيرت ليفين، مستويات القلق، والحيل الدفاعية المباشرة وغير المباشرة.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_psych_ch4_l1",
          titleEn: "Psychological Adjustment, Frustration & Conflict Typologies",
          titleAr: "التوافق النفسي والإحباط وأنواع الصراع",
          summaryEn: "Dimensions of human adjustment, etiology of frustration, and Kurt Lewin's triadic conflict paradigm.",
          summaryAr: "مفهوم التوافق النفسي والاجتماعي، أسباب الإحباط وعوامله الذاتية والبيئية، وأنواع الصراع الثلاثة عند كيرت ليفين.",
          theoryContentEn: "### 1. Dimensions of Psychological Adjustment\n- **Internal Adjustment:** Inner self-acceptance, emotional equilibrium, and liberation from paralyzing guilt.\n- **External Social Adjustment:** Harmonious social functioning, fulfilling civic duties, and sustaining empathetic relationships.\n\n### 2. Frustration (Causes & Consequences)\n- **Definition:** The affective state of acute tension and disappointment precipitated when an insurmountable barrier impedes goal attainment.\n- **Etiological Determinants:**\n  - *Internal/Personal:* Cognitive deficits, physical disabilities, unrealistic perfectionism.\n  - *External/Environmental:* Economic deprivation, institutional barriers, bereavement, restrictive social mandates.\n\n### 3. Kurt Lewin's Triadic Conflict Typology\n- **Definition:** Emotional ambivalence and decisional paralysis arising between competing motivational forces of equal valence.\n- **Core Typologies:**\n  1. **Approach-Approach:** Deciding between two mutually exclusive desirable goals (two prestigious university admissions); easiest to resolve.\n  2. **Avoidance-Avoidance:** Trapped between two mutually repellent alternatives (undergoing painful surgery vs. prolonged debilitating illness); protracted and agonizing.\n  3. **Approach-Avoidance:** A single goal encompasses simultaneously positive allure and negative aversion (eating delicious confectionery while battling obesity); results in vacillation.",
          theoryContentAr: "### ١. مفهوم التوافق وأبعاده\n- **التوافق النفسي (الداخلي):** حالة من الرضا والانسجام الداخلي بين الفرد ودوافعه ومشاعره وتحرره من الصراعات الحادة.\n- **التوافق الاجتماعي (الخارجي):** القدرة على الاندماج الإيجابي مع البيئة الاجتماعية وإقامة علاقات سوية وأداء الأدوار المجتمعية بمرونة.\n\n### ٢. الإحباط (Frustration)\n- **التعريف:** الحالة النفسية والشعور بالتوتر وخيبة الأمل الناشئة عن وجود عائق يحول دون إشباع دافع أو تحقيق هدف.\n- **العوامل المسببة للإحباط:**\n  - *عوامل داخلية خاصة بالفرد:* نقص القدرات العقلية أو العيوب الجسمية أو التطلعات غير الواقعية.\n  - *عوامل خارجية بيئية:* الفقر، الحرمان المادي، وفاة شخص عزيز، اللوائح والقيود الصارمة، والعقبات المادية.\n\n### ٣. الصراع النفسي وأنواعه عند كيرت ليفين\n- **التعريف:** حالة من التردد والحيرة والتوتر بين رغبتين أو خيارين متضادين متساويين في الجاذبية أو النفور.\n- **أنواع الصراع الأساسية:**\n  ١. **صراع إقدام - إقدام (Approach-Approach):** حيرة بين هدفين مرغوبين وجذابين معاً (كالاختيار بين كليتين عريقتين)؛ وهو أسهل أنواع الصراع حسماً.\n  ٢. **صراع إحجام - إحجام (Avoidance-Avoidance):** الاختيار بين خيارين غير مرغوبين كلاهما مر ومرفوض (كالمرض الشديد أو الخضوع لجراحة خطرة)؛ وهو صراع شديد التوتر ويستغرق وقتاً طويلاً لحسمه.\n  ٣. **صراع إقدام - إحجام (Approach-Avoidance):** هدف واحد يحمل في ذاته جانباً جذاباً وجانباً منفراً معاً (كرغبة الطالب في دراسة الموسيقى مع خوفه من المعارضة الأسرية، أو تناول الحلوى مع الخوف من السمنة)؛ ويسبب تردداً وتذبذباً سلوكياً متواصلاً.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 49-64"
          },
          lessonPlan: {
            titleEn: "Psychological Adjustment, Frustration & Conflict Typologies",
            titleAr: "التوافق النفسي والإحباط وأنواع الصراع",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH4-L1",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch4_l1_ws",
            titleEn: "Diagnostic Worksheet: Psychological Adjustment, Frustration & Conflict Typologies",
            titleAr: "ورقة عمل تقويمية تشخيصية: التوافق النفسي والإحباط وأنواع الصراع",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch4_l1_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch4_l1_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch4_l1_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "psychology_conflict_matrix",
            titleEn: "Lewin Conflict Resolution & Anxiety Simulator",
            titleAr: "مصفوفة أنواع الصراع وحسم الأزمات النفسية",
            descriptionEn: "Interactive simulator analyzing approach/avoidance conflicts, anxiety levels, and unconscious defense mechanisms.",
            descriptionAr: "محاكي تفاعلي لصراعات الإقدام والإحجام ومستويات القلق وتحليل الحيل اللاشعورية."
          }
        },
        {
          id: "egbac_psych_ch4_l2",
          titleEn: "Anxiety Spectrum, Coping Strategies & Unconscious Defenses",
          titleAr: "القلق وأساليب المواجهة والحيل الدفاعية اللاشعورية",
          summaryEn: "Anxiety arousal thresholds, direct problem solving, and the full repertoire of unconscious ego defense mechanisms.",
          summaryAr: "مستويات القلق وتأثيرها على الأداء، الطرق المباشرة لحل المشكلات، والآليات الدفاعية اللاشعورية الثمانية.",
          theoryContentEn: "### 1. The Anxiety Spectrum (Yerkes-Dodson Formulation)\n- **Definition:** Generalized anticipatory tension and physiological arousal linked to perceived ambiguous threat.\n- **Three Operational Levels:**\n  1. **Moderate Anxiety:** Constructive, goal-directed, motivating, optimizing cognitive synthesis.\n  2. **Low Anxiety:** Apathy, complacency, procrastination, minimal academic yield.\n  3. **High Anxiety:** Cognitive fragmentation, panic, attentional tunnel-vision, exam blockages.\n\n### 2. Coping Strategies: Direct vs. Unconscious\n- **Direct Rational Coping:**\n  1. Redoubling disciplined effort.\n  2. Exploring creative procedural alternatives.\n  3. Goal substitution with equivalent viable targets.\n  4. Methodical scientific problem decomposition.\n- **Unconscious Ego Defense Mechanisms:**\n  1. **Repression:** Involuntary burial of agonizing memories into the unconscious.\n  2. **Sublimation:** Channeling raw instincts into socially celebrated arts and sciences.\n  3. **Compensation:** Offsetting perceived deficit by achieving excellence in alternative domain.\n  4. **Rationalization:** Fabricating plausible logical justifications to conceal ego injury.\n  5. **Projection:** Attributing one's own repressed defects and hostility onto external targets.\n  6. **Identification (Introjection):** Adopting persona attributes of revered icons.\n  7. **Regression:** Reverting to infantile behavioral patterns under unmanageable distress.\n  8. **Denial:** Refusing to acknowledge intolerable objective realities to avoid psychic collapse.",
          theoryContentAr: "### ١. القلق ومستوياته الثلاثة\n- **التعريف:** حالة من التوتر والوجوم وشعور غامض بالخوف والتهديد المستقبلي مصحوب بتغيرات فسيولوجية وجسمية.\n- **مستويات القلق:**\n  ١. **القلق المعتدل:** صحي ومحفز ودافع للعمل والإنجاز والتركيز (قانون يركيز-دودسون).\n  ٢. **القلق المنخفض:** يرتبط باللامبالاة والإهمال والكسل وتدني مستوى الأداء.\n  ٣. **القلق المرتفع:** معطل ومشتت للتفكير ويسبب العجز عن اتخاذ القرار وتدهور التحصيل الدراسي.\n\n### ٢. أساليب مواجهة الإحباط والصراع\n- **الأساليب المباشرة (حل المشكلات بعقلانية):**\n  ١. بذل جهد مضاعف ومثابرة.\n  ٢. البحث عن طرق واستراتيجيات بديلة.\n  ٣. استبدال الهدف غير الممكن بهدف آخر واقعي ومشروع.\n  ٤. إعمال العقل واستخدام أسلوب حل المشكلات العلمي.\n- **الأساليب غير المباشرة (الحيل الدفاعية اللاشعورية لحماية الأنا):**\n  ١. **الكبت (Repression):** طرد الأفكار والدوافع المؤلمة لاشعورياً إلى دائرة النسيان.\n  ٢. **الإعلاء والتسامي (Sublimation):** تحويل الطاقة الغريزية غير المقبولة لأعمال إبداعية راقية كالفنون والرياضة.\n  ٣. **التعويض (Compensation):** تغطية عجز أو نقص في مجال بالتفوق في مجال آخر.\n  ٤. **التبرير (Rationalization):** إعطاء أسباب مقبولة عقلياً لكنها ليست الأسباب الحقيقية للفشل.\n  ٥. **الإسقاط (Projection):** رمي العيوب والنقائص الذاتية على الآخرين.\n  ٦. **التقمص أو التوحد (Identification):** التشبه بشخصية مرموقة وتقليدها لاكتساب مكانتها.\n  ٧. **النكوص (Regression):** الارتداد لأساليب سلوكية طفلية لا تتناسب مع مرحلة النضج.\n  ٨. **الإنكار (Denial):** رفض الاعتراف بوجود واقع أليم لا يطاق لتخفيف الصدمة.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 49-64"
          },
          lessonPlan: {
            titleEn: "Anxiety Spectrum, Coping Strategies & Unconscious Defenses",
            titleAr: "القلق وأساليب المواجهة والحيل الدفاعية اللاشعورية",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH4-L2",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch4_l2_ws",
            titleEn: "Diagnostic Worksheet: Anxiety Spectrum, Coping Strategies & Unconscious Defenses",
            titleAr: "ورقة عمل تقويمية تشخيصية: القلق وأساليب المواجهة والحيل الدفاعية اللاشعورية",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch4_l2_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch4_l2_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch4_l2_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "psychology_conflict_matrix",
            titleEn: "Lewin Conflict Resolution & Anxiety Simulator",
            titleAr: "مصفوفة أنواع الصراع وحسم الأزمات النفسية",
            descriptionEn: "Interactive simulator analyzing approach/avoidance conflicts, anxiety levels, and unconscious defense mechanisms.",
            descriptionAr: "محاكي تفاعلي لصراعات الإقدام والإحجام ومستويات القلق وتحليل الحيل اللاشعورية."
          }
        }
      ],
      databank: egBacPsychCh4Databank,
      solvedExamples: egBacPsychCh4SolvedExamples,
      exerciseProblems: egBacPsychCh4Exercises,
      interactiveWidgets: [
        {
          type: "psychology_conflict_matrix",
          titleEn: "Lewin Conflict Resolution & Anxiety Simulator",
          titleAr: "مصفوفة أنواع الصراع وحسم الأزمات النفسية",
          descriptionEn: "Interactive simulator analyzing approach/avoidance conflicts, anxiety levels, and unconscious defense mechanisms.",
          descriptionAr: "محاكي تفاعلي لصراعات الإقدام والإحجام ومستويات القلق وتحليل الحيل اللاشعورية."
        }
      ]
    },
    {
      id: "egbac_psych_ch5",
      chapterNumber: 5,
      titleEn: "Unit 5: Sociological Theory, Social Interaction & Fundamental Processes",
      titleAr: "الوحدة الخامسة: النظرية الاجتماعية والعمليات والعلاقات الاجتماعية",
      descriptionEn: "Structural anatomy of sociological theories, the six core theoretical functions, social interaction taxonomies, and fundamental social processes: Cooperation, Accommodation, Competition, Conflict.",
      descriptionAr: "النظرية في علم الاجتماع ووظائفها الست، التفاعل الاجتماعي والعلاقات، والعمليات الاجتماعية الكبرى: التعاون، التكيف، التنافس، والصراع.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_psych_ch5_l1",
          titleEn: "Sociological Theory Anatomy, Six Functions & Social Interaction",
          titleAr: "النظرية الاجتماعية وبناؤها ووظائفها والتفاعل الاجتماعي",
          summaryEn: "Sociological theory architecture, six core epistemological functions, taxonomy of social interaction and social relations.",
          summaryAr: "تعريف النظرية الاجتماعية ومكوناتها ووظائفها الست، وأنواع التفاعل الاجتماعي والعلاقات الاجتماعية وأهميتها.",
          theoryContentEn: "### 1. The Structure and Functions of Sociological Theory\n- **Definition:** A logically articulated conceptual framework summarizing and explaining empirical regularities in human social behavior.\n- **Anatomy of Sociological Theory:** Epistemological foundation, conceptual axioms, testable propositions, operational definitions, methodological design, empirical data analysis, and reflexive evaluation.\n- **Six Core Functions:**\n  1. **Directing Scientific Orientation:** Channels focus toward relevant empirical facts.\n  2. **Providing a Conceptual Guide:** Structures heuristic schemas for researchers.\n  3. **Summarizing Empirical Facts:** Synthesizes myriad isolated observations into broad concepts.\n  4. **Predicting Social Phenomena:** Forecasts future societal trends based on verified laws.\n  5. **Identifying Knowledge Deficits:** Clarifies gaps requiring targeted empirical exploration.\n  6. **Guiding Practical Implementation:** Translates theoretical wisdom into socioeconomic policies.\n\n### 2. Social Interaction & Structural Relations\n- **Social Interaction:** Mutual communicative and behavioral exchange that generates societal existence, fulfills needs, and shapes personality.\n- **Taxonomy of Interaction:**\n  - Direct (face-to-face) vs. Indirect (institutional/digital).\n  - Constructive (cooperative synergy) vs. Destructive (antagonism).\n  - Individual vs. Collective.\n  - Permanent (family) vs. Temporary (passengers).\n  - Spontaneous (greeting) vs. Accidental (emergency encounter).\n- **Social Relations:** Institutionalized, recurring patterns of interaction fulfilling social cohesion, ethical norms, and psychological security.",
          theoryContentAr: "### ١. النظرية في علم الاجتماع\n- **التعريف:** نسق من المعرفة يتسم بالتعميم ويفسر جوانب مختلفة من الواقع الاجتماعي، ويخضع للتحقق الإمبيريقي التجريبي.\n- **بناء النظرية الاجتماعية:** الشكل الأساسي، مجموعة من التصورات والمفاهيم، مجموعة من القضايا والفروض، التعريفات الإجرائية، المنهج المستخدم لاختبار الفروض، تحليل البيانات، وتفسير النتائج وتقييم البناء النظري.\n- **الوظائف الست الكبرى للنظرية:**\n  ١. **تحديد الاتجاه الأساسي للعلم:** توجيه الباحث نحو جمع الوقائع ذات الصلة (كالتمييز بين دراسة كرة القدم كظاهرة اقتصادية أو اجتماعية).\n  ٢. **تقديم إطار تصوري يسترشد به العالم:** إدراك العلاقات بين الوقائع المنفصلة.\n  ٣. **تلخيص الوقائع وتكثيفها:** صياغة قوانين ومفاهيم كلية تختصر آلاف الملاحظات.\n  ٤. **التنبؤ بالوقائع:** الاستدلال على المستقبل في ضوء القوانين المستخلصة.\n  ٥. **تحديد أوجه النقص في معارفنا:** إبراز الفجوات المعرفية التي تتطلب مزيداً من البحث.\n  ٦. **ترشيد التطبيق العملي:** تحويل النظريات إلى سياسات اجتماعية وإصلاحات واقعية.\n\n### ٢. التفاعل الاجتماعي والعلاقات الاجتماعية\n- **التفاعل الاجتماعي:** التأثير والتأثر المتبادل بين الأفراد والجماعات، وهو ركيزة قيام المجتمع واستمراره وإشباع الحاجات وتكوين الشخصية.\n- **أنواع التفاعل الاجتماعي:**\n  - مباشر (وجهاً لوجه) / غير مباشر (عبر الوسائط والشركات).\n  - بناء (تعاون) / هدام (صراع وتنافر).\n  - فردي (بين شخصين) / جماعي (بين مجتمعات).\n  - دائم (الأسرة) / مؤقت (المسافرون في قطار).\n  - تلقائي (تحية الصباح) / عرضي (حادث سير مفاجئ).\n- **العلاقات الاجتماعية:** نتاج التفاعل المستقر المنظم؛ وتكتسب أهميتها من الناحية الاجتماعية (الاندماج)، الأخلاقية (احترام الحريات)، والنفسية (تحقيق الأمان والشعور بالانتماء).",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 65-80"
          },
          lessonPlan: {
            titleEn: "Sociological Theory Anatomy, Six Functions & Social Interaction",
            titleAr: "النظرية الاجتماعية وبناؤها ووظائفها والتفاعل الاجتماعي",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH5-L1",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch5_l1_ws",
            titleEn: "Diagnostic Worksheet: Sociological Theory Anatomy, Six Functions & Social Interaction",
            titleAr: "ورقة عمل تقويمية تشخيصية: النظرية الاجتماعية وبناؤها ووظائفها والتفاعل الاجتماعي",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch5_l1_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch5_l1_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch5_l1_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "sociology_social_processes",
            titleEn: "Sociological Processes & Collective Dynamics Simulator",
            titleAr: "محاكي العمليات الاجتماعية وديناميات التفاعل الجمعي",
            descriptionEn: "Interactive simulator examining cooperation, accommodation, constructive competition and conflict etiology.",
            descriptionAr: "محاكي تفاعلي للتعاون والتكيف والتنافس وتحليل جذور الصراع الاجتماعي."
          }
        },
        {
          id: "egbac_psych_ch5_l2",
          titleEn: "Fundamental Social Processes: Cooperation, Accommodation, Competition & Conflict",
          titleAr: "العمليات الاجتماعية الكبرى: التعاون والتكيف والتنافس والصراع",
          summaryEn: "The four primary social processes: drivers of cooperation, adaptive accommodation, criteria of constructive competition, and etiology of social conflict.",
          summaryAr: "العمليات الاجتماعية الأربع: التعاون وعوامله، التكيف ومواجهة الصدمات، شروط التنافس الإيجابي، وأسباب الصراع الاجتماعي.",
          theoryContentEn: "### 1. Social Cooperation\n- **Definition:** Joint, concerted activity enacted by two or more actors toward shared communal benefits.\n- **Three Catalyzing Determinants:**\n  1. **Environmental Factor:** Shared ecological interests and communal resources compelling unified collective custody.\n  2. **Ideological/Spiritual Factor:** Faith-based solidarity, altruism, and ethical imperatives promoting mutual aid.\n  3. **Psychological Factor:** Innate human duality balancing healthy self-regard with prosocial altruistic drives.\n\n### 2. Social Accommodation (Adaptation)\n- **Definition:** Dynamic process of mutual adjustment enabling divergent parties to coexist harmoniously.\n- **Crucial Function:** Buffering cultural shock, easing migration integration, and defusing underlying societal frictions.\n\n### 3. Social Competition\n- **Definition:** Constructive striving wherein competing entities vie to attain a coveted goal prior to rivals within agreed ethical rules.\n- **Requisites of Constructive Competition:**\n  - Symmetrical capability between contestants.\n  - Adherence to institutionalized rules and fair play.\n  - Unwavering focus on the intrinsic prize rather than the physical or reputational annihilation of the competitor.\n\n### 4. Social Conflict\n- **Definition:** Destructive, destabilizing confrontation characterized by hostility and violation of legitimate norms.\n- **Etiological Drivers:**\n  - Acute socioeconomic inequality and lack of distributive justice.\n  - Egocentric opportunism and monopolistic exploitation.\n  - Sectarian intolerance, bigotry, and unmitigated polarization.",
          theoryContentAr: "### ١. التعاون الاجتماعي (Social Cooperation)\n- **التعريف:** عمل مشترك بين فردين أو أكثر لتحقيق هدف مشترك تعود فائدته على الجميع.\n- **عوامل التعاون الثلاثة:**\n  ١. **العامل البيئي:** وجود مصالح وخيرات مشتركة في البيئة تدفع الأفراد للتعاون لحمايتها واستثمارها.\n  ٢. **العامل العقائدي والديني:** غرس روح الأخوة والتكافل والإيثار وحب الخير للآخرين.\n  ٣. **العامل النفسي:** تأكيد أن النفس الإنسانية فُطرت على حب الذات وحب الغير معاً والسعي للخير المشترك.\n\n### ٢. التكيف الاجتماعي (Accommodation / Adaptation)\n- **التعريف:** عملية تهدف إلى التوفيق بين الأفراد والجماعات بحيث يتفهم كل طرف أفكار ومشاعر الطرف الآخر لتجنب الصدام.\n- **الأهمية:** استيعاب التغيرات الاجتماعية، وتخفيف حدة الصدمة الثقافية (Culture Shock) للوافدين إلى بيئات جديدة وتيسير اندماجهم.\n\n### ٣. التنافس الاجتماعي (Social Competition)\n- **التعريف:** عملية منشطة يسعى فيها كل طرف للوصول إلى هدف محدد قبل الطرف الآخر وفق قواعد وقوانين مشروعة ومعلنة.\n- **شروط التنافس الإيجابي البناء:**\n  - أن يكون بين قوتين متكافئتين.\n  - الالتزام بالقواعد والمعايير الأخلاقية النزيهة.\n  - تركيز كل منافس على الهدف المشروع وليس على إلحاق الأذى بالخصم.\n\n### ٤. الصراع الاجتماعي (Social Conflict)\n- **التعريف:** عملية اجتماعية سلبية هدامة تعبر عن قوى متطاحنة تصطدم فيها المصالح وتنتهك فيها القوانين.\n- **أسباب الصراع الاجتماعي:**\n  - التفاوت الحاد في توزيع الثروات والخيرات وغياب العدالة الاجتماعية.\n  - سيادة الأنانية والمصالح الفردية الضيقة وتجاوز القواعد الأخلاقية.\n  - الصراع الطائفي والعرقي والتعصب الأعمى والاستقطاب السياسي الحاد.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 65-80"
          },
          lessonPlan: {
            titleEn: "Fundamental Social Processes: Cooperation, Accommodation, Competition & Conflict",
            titleAr: "العمليات الاجتماعية الكبرى: التعاون والتكيف والتنافس والصراع",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH5-L2",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch5_l2_ws",
            titleEn: "Diagnostic Worksheet: Fundamental Social Processes: Cooperation, Accommodation, Competition & Conflict",
            titleAr: "ورقة عمل تقويمية تشخيصية: العمليات الاجتماعية الكبرى: التعاون والتكيف والتنافس والصراع",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch5_l2_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch5_l2_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch5_l2_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "sociology_social_processes",
            titleEn: "Sociological Processes & Collective Dynamics Simulator",
            titleAr: "محاكي العمليات الاجتماعية وديناميات التفاعل الجمعي",
            descriptionEn: "Interactive simulator examining cooperation, accommodation, constructive competition and conflict etiology.",
            descriptionAr: "محاكي تفاعلي للتعاون والتكيف والتنافس وتحليل جذور الصراع الاجتماعي."
          }
        }
      ],
      databank: egBacPsychCh5Databank,
      solvedExamples: egBacPsychCh5SolvedExamples,
      exerciseProblems: egBacPsychCh5Exercises,
      interactiveWidgets: [
        {
          type: "sociology_social_processes",
          titleEn: "Sociological Processes & Collective Dynamics Simulator",
          titleAr: "محاكي العمليات الاجتماعية وديناميات التفاعل الجمعي",
          descriptionEn: "Interactive simulator examining cooperation, accommodation, constructive competition and conflict etiology.",
          descriptionAr: "محاكي تفاعلي للتعاون والتكيف والتنافس وتحليل جذور الصراع الاجتماعي."
        }
      ]
    },
    {
      id: "egbac_psych_ch6",
      chapterNumber: 6,
      titleEn: "Unit 6: Culture, Volunteering & Entrepreneurship",
      titleAr: "الوحدة السادسة: الثقافة والعمل التطوعي والحر",
      descriptionEn: "Sociological culture parameters, Linton's triad elements, culture of volunteerism and civic engagement, entrepreneurial culture (Blue and Davidson models), planning & operational demands.",
      descriptionAr: "مفهوم الثقافة وخصائصها وأشكالها وعناصرها الثلاثة، ثقافة العمل التطوعي وقيمته ومشاركته، وثقافة العمل الحر ونموذج بلو ودافيدسون ومتطلبات التخطيط والأداء.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_psych_ch6_l1",
          titleEn: "Sociological Culture: Definition, Characteristics, Forms & Elements",
          titleAr: "الثقافة: مفهومها وخصائصها وأشكالها وعناصرها",
          summaryEn: "Sociological dimensions of culture, five characteristics, material/non-material forms, and Ralph Linton's tripartite cultural elements.",
          summaryAr: "مفهوم الثقافة، خصائصها الخمس، أشكالها المادية وغير المادية، وعناصرها الثلاثة (العموميات، الخصوصيات، والمتغيرات البديلة).",
          theoryContentEn: "### 1. The Sociological Concept of Culture\n- **Definition (UNESCO/Tylor):** That complex holistic totality including knowledge, beliefs, arts, morals, laws, customs, and any other capabilities and habits acquired by human beings as members of society.\n- **Five Core Characteristics:**\n  1. **Exclusively Human:** Unique attribute of Homo sapiens.\n  2. **Learned & Acquired:** Transmitted trans-generationally through socialization, not biological instinct.\n  3. **Continuously Dynamic:** Constantly evolving; rapid in open globalized societies, deliberate in traditional ones.\n  4. **Diverse in Content:** Cultural relativism dictates that what is virtuous in one milieu may be frowned upon in another.\n  5. **Prescriptive of Lifestyle:** Dictates dress codes, culinary conventions, ethical comportment, and civic etiquette.\n\n### 2. Forms & Ralph Linton's Tripartite Cultural Elements\n- **Forms of Culture:**\n  - *Material Culture:* Architecture, physical artifacts, technological implements, tangible heritage.\n  - *Non-Material Culture:* Philosophies, value codes, spiritual traditions, legal jurisprudence.\n- **Ralph Linton's Tripartite Elements:**\n  1. **Universals:** Cultural practices shared by nearly all societal members (national language, patriotic symbols, civic greeting norms); anchor national cohesion.\n  2. **Specialties:** Subcultural attributes mastered exclusively by specific professional guilds or regional enclaves (medical ethics, artisanal customs).\n  3. **Alternative Variations:** Novel innovations or imported cultural variants; either extinguish, stabilize into subcultural specialties, or assimilate into general universals.",
          theoryContentAr: "### ١. مفهوم الثقافة وخصائصها\n- **التعريف (اليونسكو والأنثروبولوجيا):** ذلك الكل المركب والمعقد من المعارف والمعتقدات والفنون والآداب والأعراف والتقاليد والقوانين التي يكتسبها الإنسان بوصفه عضواً في المجتمع.\n- **خصائص الثقافة الخمس:**\n  ١. **عملية إنسانية:** تخص الإنسان فقط دون سائر الكائنات الحية.\n  ٢. **عملية مكتسبة (متعلمة):** تنتقل عبر الأجيال بالتربية والتنشئة وليست غريزة موروثة.\n  ٣. **عملية متغيرة ومتحركة:** في تطور مستمر؛ وتكون الحركة سريعة في المجتمعات المنفتحة وبطيئة في المنغلقة.\n  ٤. **عملية متنوعة المضمون:** ما يعد مرغوباً وسوياً في ثقافة قد يعد مرفوضاً في ثقافة أخرى.\n  ٥. **تحدد أسلوب الحياة:** تفرض على أفرادها نسقاً في الملبس والمأكل والسلوك والتفكير.\n\n### ٢. أشكال الثقافة وعناصرها الثلاثة (رالف لينتون)\n- **أشكال الثقافة:**\n  - *ثقافة مادية:* التراث المعماري، الأدوات، الآلات، الملابس، والآثار الملموسة.\n  - *ثقافة غير مادية:* الأفكار، القيم، العادات، الآداب، النظم السياسية، والقوانين.\n- **عناصر الثقافة الثلاثة عند رالف لينتون:**\n  ١. **العموميات (Universals):** يشترك فيها غالبية أفراد المجتمع (كالغة والدين والأزياء العامة والتحية)؛ وهي أساس التماسك القومي والشعور بالوحدة.\n  ٢. **الخصوصيات (Specialties):** تختص بها فئة معينة من المجتمع (كأصحاب مهنة الطب أو المحاماة أو سكان إقليم معين) وتحدد ملامحها الخاصة.\n  ٣. **المتغيرات البديلة (Alternative Variations):** تجديدات واختراعات وافدة؛ إما أن تندثر، أو تنتقل لتصبح خصوصيات أو ترتقي لتتحول إلى عموميات للمجتمع بأسره.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 81-96"
          },
          lessonPlan: {
            titleEn: "Sociological Culture: Definition, Characteristics, Forms & Elements",
            titleAr: "الثقافة: مفهومها وخصائصها وأشكالها وعناصرها",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH6-L1",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch6_l1_ws",
            titleEn: "Diagnostic Worksheet: Sociological Culture: Definition, Characteristics, Forms & Elements",
            titleAr: "ورقة عمل تقويمية تشخيصية: الثقافة: مفهومها وخصائصها وأشكالها وعناصرها",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch6_l1_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch6_l1_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch6_l1_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "sociology_culture_extremism",
            titleEn: "Culture Dimensions & Entrepreneurial Planning Matrix",
            titleAr: "مصفوفة الثقافة وريادة الأعمال ومؤشرات التطوع",
            descriptionEn: "Interactive matrix analyzing cultural components, entrepreneurship models, and volunteering frameworks.",
            descriptionAr: "تحليل عناصر الثقافة (العموميات والخصوصيات) وتخطيط العمل الحر ومؤشرات التطوع الفاعل."
          }
        },
        {
          id: "egbac_psych_ch6_l2",
          titleEn: "The Culture of Voluntary Action & Entrepreneurship",
          titleAr: "ثقافة العمل التطوعي وثقافة العمل الحر",
          summaryEn: "Voluntary action dynamics, modes of civic engagement, entrepreneurial culture models (Blue & Davidson) and operational frameworks.",
          summaryAr: "مفهوم العمل التطوعي وأشكاله ومستويات المشاركة وقيمته للشباب، وثقافة العمل الحر ونموذج بلو ودافيدسون والتخطيط الاستراتيجي.",
          theoryContentEn: "### 1. The Culture of Voluntary Action\n- **Definition (David Sills):** Uncoerced dedication of talent, time, and resources toward communal well-being without pecuniary expectation.\n- **Forms of Voluntary Conduct:**\n  - *Spontaneous Unintended Volunteering:* Heroic emergency responses elicited by immediate crisis (rescuing a drowning victim).\n  - *Intentional Institutional Volunteering:* Structured, systematic service enacted through recognized civil society organizations.\n- **Three Dimensions of Civic Participation:**\n  1. **Financial Participation:** Direct monetary donations and asset endowments.\n  2. **Moral/Advocacy Participation:** Public advocacy, media campaigning, and community endorsement.\n  3. **Active Membership Participation:** Direct physical, intellectual, and operational fieldwork within NGO structures.\n- **Societal Dividends:** Absorbs youth vitality, buffers delinquency, fosters civic patriotism, and supports disadvantaged demographics.\n\n### 2. The Culture of Free Enterprise & Entrepreneurship\n- **Definition:** Sovereign, self-directed economic activity wherein the entrepreneur bears financial risk and reaps independent profits.\n- **Environmental Determinants:**\n  - *Blue Model:* Demographic shifts, technological disruption, market voids, and macroeconomic structural evolutions.\n  - *Davidson Model:* Sociocultural legitimacy, psychological risk tolerance, and prestige conferred upon entrepreneurs.\n- **Core Operational Pillars:**\n  1. **Strategic Planning:** Market niche identification, priority matrix, cash flow sustainability, and agile labor allocation.\n  2. **Operational Performance:** Cost-efficiency optimization, customer-centric adaptability, unwavering quality control, and transparent auditing.",
          theoryContentAr: "### ١. ثقافة العمل التطوعي (Voluntary Action)\n- **التعريف (ديفيد سيلز):** التزام طوعي يمنح فيه الفرد وقته وماله وجهده لخدمة المجتمع دون انتظار لمقابل مادي، بدافع إنساني وأخلاقي نبيل.\n- **أشكال العمل التطوعي:**\n  - *سلوك تطوعي غير مقصود:* ممارسات عارضة تفرضها مواقف النجدة الطارئة (كإنقاذ غريق أو مساعدة مصاب).\n  - *فعل تطوعي مقصود:* عمل مؤسسي منظم ومخطط له ضمن جمعيات ومؤسسات أهلية.\n- **أنواع المشاركة في العمل التطوعي:**\n  ١. **مشاركة مالية:** التبرع بالمال لدعم المشروعات الخيرية.\n  ٢. **مشاركة معنوية:** الدعاية والإشادة والدفاع عن أنشطة العمل التطوعي في المحافل والإعلام.\n  ٣. **مشاركة عضوية:** الانتساب الفعلي للجمعيات وبذل الجهد البدني والفكري المنتظم.\n- **القيمة الاجتماعية للعمل التطوعي:** غرس الانتماء، امتصاص طاقات الشباب ومحاربة البطالة والانحراف، وتخفيف الأعباء عن الفئات الأكثر احتياجاً.\n\n### ٢. ثقافة العمل الحر (Entrepreneurship)\n- **التعريف:** عمل مستقل لا يتبع جهة حكومية أو خاصة، يديره الفرد بنفسه أو مع شركاء، ويتحمل مخاطره الاقتصادية ويجني ثماره وأرباحه.\n- **البيئة المحددة للعمل الحر:**\n  - *نموذج «بلو» (Blue Model):* يركز على العوامل الديموغرافية والتكنولوجية والفرص الاقتصادية والتغيرات الهيكلية في السوق.\n  - *نموذج «دافيدسون» (Davidson Model):* يركز على القيم الفردية والمكانة الاجتماعية والشرعية الثقافية التي يمنحها المجتمع لريادة الأعمال.\n- **متطلبات العمل الحر الأساسية:**\n  ١. **التخطيط:** تحديد السوق بدقة، تحديد الأولويات، إدارة مسائل التمويل والميزانية، وتخطيط طاقم العمل وتوزيع الأدوار.\n  ٢. **الأداء:** حساب التكلفة والكفاءة، المواءمة مع احتياجات العملاء، الحفاظ على الجودة والإتقان، والشفافية في الإدارة.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 81-96"
          },
          lessonPlan: {
            titleEn: "The Culture of Voluntary Action & Entrepreneurship",
            titleAr: "ثقافة العمل التطوعي وثقافة العمل الحر",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH6-L2",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch6_l2_ws",
            titleEn: "Diagnostic Worksheet: The Culture of Voluntary Action & Entrepreneurship",
            titleAr: "ورقة عمل تقويمية تشخيصية: ثقافة العمل التطوعي وثقافة العمل الحر",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch6_l2_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch6_l2_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch6_l2_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "sociology_culture_extremism",
            titleEn: "Culture Dimensions & Entrepreneurial Planning Matrix",
            titleAr: "مصفوفة الثقافة وريادة الأعمال ومؤشرات التطوع",
            descriptionEn: "Interactive matrix analyzing cultural components, entrepreneurship models, and volunteering frameworks.",
            descriptionAr: "تحليل عناصر الثقافة (العموميات والخصوصيات) وتخطيط العمل الحر ومؤشرات التطوع الفاعل."
          }
        }
      ],
      databank: egBacPsychCh6Databank,
      solvedExamples: egBacPsychCh6SolvedExamples,
      exerciseProblems: egBacPsychCh6Exercises,
      interactiveWidgets: [
        {
          type: "sociology_culture_extremism",
          titleEn: "Culture Dimensions & Entrepreneurial Planning Matrix",
          titleAr: "مصفوفة الثقافة وريادة الأعمال ومؤشرات التطوع",
          descriptionEn: "Interactive matrix analyzing cultural components, entrepreneurship models, and volunteering frameworks.",
          descriptionAr: "تحليل عناصر الثقافة (العموميات والخصوصيات) وتخطيط العمل الحر ومؤشرات التطوع الفاعل."
        }
      ]
    },
    {
      id: "egbac_psych_ch7",
      chapterNumber: 7,
      titleEn: "Unit 7: Globalization Dynamics & Scientific Research for National Development",
      titleAr: "الوحدة السابعة: العولمة وتطوير البحث العلمي",
      descriptionEn: "Globalization parameters, opportunities vs. perils (hyper-consumerism, cultural erosion), preserving national identity, and leveraging applied scientific research for economic development.",
      descriptionAr: "مفهوم العولمة ومزاياها وآثارها السلبية، حماية الهوية القومية ومقاومة الاستهلاك التفاخري، وتوظيف البحث العلمي لخدمة الإنتاج والتنمية.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_psych_ch7_l1",
          titleEn: "Globalization Dynamics, Repercussions & Identity Preservation",
          titleAr: "العولمة: مفهومها وآثارها وسبل حماية الهوية الثقافية",
          summaryEn: "Globalization mechanics, benefits of interconnectedness, negative cultural fallout, hyper-consumerism, and cultural sovereignty safeguards.",
          summaryAr: "مفهوم العولمة، آلياتها الكبرى، الفرص والانفتاح، والآثار السلبية (الاستهلاك التفاخري والهوة الطبقية) وسبل صون الهوية.",
          theoryContentEn: "### 1. Conceptual Framework & Vectors of Globalization\n- **Definition:** The seamless borderless flow of ideas, data, capital, commodities, and technologies, transforming the planet into an integrated global commons.\n- **Primary Catalysts:** Internet infrastructure, satellite broadcasting, digital smartphones, and interconnected platforms.\n- **Positive Potentials:** Democratization of universal knowledge, scientific synergy, human rights advocacy, and cross-cultural dialogue.\n\n### 2. Adverse Repercussions\n1. **Geopolitical Polarization:** Widening developmental divide between the wealthy industrial North and vulnerable developing South.\n2. **Conspicuous Hyper-Consumerism:**\n   - Transformation of consumption from vital utility fulfillment into an irrational status symbol.\n   - **Etiological Drivers:** Social emulation, deceptive multi-sensory marketing, and associating human dignity with luxury hoarding.\n\n### 3. Preserving Sovereign Cultural Identity\n- **Creative Critical Engagement:** Assimilating cutting-edge technological innovations while anchoring national Arabic linguistic pride and spiritual heritage.\n- Reorienting societal culture toward thrift, green production, and mindful consumption.\n- Actively broadcasting authentic Egyptian civilization across global digital networks rather than succumbing to passive cultural colonization.",
          theoryContentAr: "### ١. مفهوم العولمة وآلياتها\n- **التعريف:** حرية انتقال الأفكار والمعلومات والسلع والخدمات ورؤوس الأموال والتكنولوجيا عبر الحدود دون عوائق، وتحول العالم لقرية إلكترونية متصلة.\n- **آليات العولمة الكبرى:** الإنترنت، شبكات التواصل الاجتماعي، البث الفضائي التلفزيوني، والهواتف الذكية.\n- **الفرص والمزايا الإيجابية:** الانفتاح المعرفي والإنساني، الاستفادة من الخبرات العلمية الدولية، وحرية تدفق المعلومات.\n\n### ٢. الآثار السلبية للعولمة\n١. **التباين الطبقي الحاد:** اتساع الفجوة الاقتصادية والتكنولوجية بين دول الشمال الصناعي المتقدم ودول الجنوب النامية.\n٢. **النزعة الاستهلاكية التفاخرية:**\n   - تحول الاستهلاك من وسيلة لتلبية الحاجات الحيوية إلى غاية تفاخرية ومظهر للمكانة الاجتماعية الزائفة.\n   - **أسباب الاستهلاك التفاخري:** التقليد والمحاكاة، إغراءات الإعلانات التجارية الحديثة، والربط الخاطئ بين السعادة والوفرة المادية.\n\n### ٣. سبل الحفاظ على الهوية الثقافية القومية\n- **التفاعل الخلاق الواعي:** الانفتاح على المعارف والعلوم العالمية مع التمسك باللغة العربية والتراث والقيم الدينية والأخلاقية الأصيلة.\n- ترشيد الاستهلاك وغرس ثقافة الإنتاج والادخار لدى الأجيال الجديدة.\n- توظيف تكنولوجيا المعلومات في نشر الثقافة والحضارة المصرية والعربية عالمياً بدلاً من مجرد الاستهلاك السلبي.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 97-112"
          },
          lessonPlan: {
            titleEn: "Globalization Dynamics, Repercussions & Identity Preservation",
            titleAr: "العولمة: مفهومها وآثارها وسبل حماية الهوية الثقافية",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH7-L1",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch7_l1_ws",
            titleEn: "Diagnostic Worksheet: Globalization Dynamics, Repercussions & Identity Preservation",
            titleAr: "ورقة عمل تقويمية تشخيصية: العولمة: مفهومها وآثارها وسبل حماية الهوية الثقافية",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch7_l1_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch7_l1_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch7_l1_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "sociology_social_processes",
            titleEn: "Globalization, Identity & Research Roadmap Studio",
            titleAr: "محاكي العولمة والهوية وتخطيط البحث العلمي",
            descriptionEn: "Interactive simulation examining globalization vectors, consumerism culture, and scientific R&D strategies.",
            descriptionAr: "محاكاة لآليات العولمة والنزعة الاستهلاكية والتخطيط الاستراتيجي للبحث العلمي."
          }
        },
        {
          id: "egbac_psych_ch7_l2",
          titleEn: "Deploying Scientific Research for National Production & Sustainable Development",
          titleAr: "توظيف البحث العلمي لخدمة قضايا الإنتاج والتنمية الشاملة",
          summaryEn: "Strategic role of scientific research in national advancement, infrastructural optimization, and university-industry integration.",
          summaryAr: "أهمية البحث العلمي في النهوض بالدولة، سبل تطوير البحث العلمي، ومقومات التخطيط الاستراتيجي وربطه بالصناعة.",
          theoryContentEn: "### 1. The Strategic Imperative of Scientific Research\n- Scientific research represents the indispensable engine for economic modernization, industrial competitiveness, and societal problem-solving (renewable energy, water desalination, biomedical security).\n\n### 2. Strategic Pillars for Elevating Scientific Research\n1. **Sustainable Capital Investment:** Escalating state budgetary allocations and incentivizing private sector R&D contributions.\n2. **Infrastructural Modernization:** Upgrading state-of-the-art laboratories, computational clusters, and digital scholarly repositories.\n3. **Human Capital Cultivation:** Mentoring young researchers, nurturing talent pipelines, and mitigating brain drain through competitive environments.\n4. **University-Industry Symbiosis:** Aligning postgraduate dissertations with concrete operational bottlenecks faced by national factories and enterprises.\n\n### 3. Essentials of Strategic Research Planning\n- Formulating targeted national scientific roadmaps linked to long-term macroeconomic visions.\n- Enacting agile intellectual property laws and streamlining customs for research equipment.\n- Establishing bilateral research alliances with global institutes to facilitate technology indigenization.",
          theoryContentAr: "### ١. مكانة البحث العلمي في النهضة القومية\n- يمثل البحث العلمي التطبيقي قاطرة التنمية الشاملة والركيزة الأساسية لتطوير الإنتاج الزراعي والصناعي وحل معضلات المجتمع الكبرى (الطاقة، المياه، التلوث، والرعاية الصحية).\n\n### ٢. سبل تطوير البحث العلمي لدعم التنمية والإنتاج\n١. **توفير التمويل المستدام:** زيادة المخصصات المالية الحكومية وتحفيز القطاع الخاص على الإنفاق على البحث والتطوير (R&D).\n٢. **تطوير البنية التحتية:** تحديث المعامل والمختبرات والمكتبات الرقمية وشبكات المعلومات السريعة.\n٣. **إعداد الكوادر العلمية:** تدريب الباحثين ورعاية الموهوبين والنابغين والحد من هجرة العقول للخارج.\n٤. **الربط بين مراكز البحث والجامعات ومواقع الإنتاج:** توجيه البحوث لمعالجة المشكلات الواقعية للمصانع والشركات والمزارع.\n\n### ٣. مقومات التخطيط الجيد للبحث العلمي\n- وضع استراتيجيات علمية وطنية تترجم الأهداف التنموية للدولة إلى برامج عمل محددة زمنياً.\n- صياغة تشريعات وقوانين مرنة لحماية حقوق الملكية الفكرية وتسهيل إجراءات استيراد الأجهزة والكيماويات العلمية.\n- تشجيع الشراكات والتعاون الدولي مع كبرى الجامعات والمراكز البحثية المرموقة لتبادل الخبرات وتوطين التكنولوجيا.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 97-112"
          },
          lessonPlan: {
            titleEn: "Deploying Scientific Research for National Production & Sustainable Development",
            titleAr: "توظيف البحث العلمي لخدمة قضايا الإنتاج والتنمية الشاملة",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH7-L2",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch7_l2_ws",
            titleEn: "Diagnostic Worksheet: Deploying Scientific Research for National Production & Sustainable Development",
            titleAr: "ورقة عمل تقويمية تشخيصية: توظيف البحث العلمي لخدمة قضايا الإنتاج والتنمية الشاملة",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch7_l2_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch7_l2_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch7_l2_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "sociology_social_processes",
            titleEn: "Globalization, Identity & Research Roadmap Studio",
            titleAr: "محاكي العولمة والهوية وتخطيط البحث العلمي",
            descriptionEn: "Interactive simulation examining globalization vectors, consumerism culture, and scientific R&D strategies.",
            descriptionAr: "محاكاة لآليات العولمة والنزعة الاستهلاكية والتخطيط الاستراتيجي للبحث العلمي."
          }
        }
      ],
      databank: egBacPsychCh7Databank,
      solvedExamples: egBacPsychCh7SolvedExamples,
      exerciseProblems: egBacPsychCh7Exercises,
      interactiveWidgets: [
        {
          type: "sociology_social_processes",
          titleEn: "Globalization, Identity & Research Roadmap Studio",
          titleAr: "محاكي العولمة والهوية وتخطيط البحث العلمي",
          descriptionEn: "Interactive simulation examining globalization vectors, consumerism culture, and scientific R&D strategies.",
          descriptionAr: "محاكاة لآليات العولمة والنزعة الاستهلاكية والتخطيط الاستراتيجي للبحث العلمي."
        }
      ]
    },
    {
      id: "egbac_psych_ch8",
      chapterNumber: 8,
      titleEn: "Unit 8: Contemporary Social Problems: Extremism, Deviance & Prevention",
      titleAr: "الوحدة الثامنة: مشكلات اجتماعية معاصرة: التطرف والانحراف",
      descriptionEn: "Sociological anatomy of extremism, violence, and terrorism; tripartite dimensions of radicalization (cognitive, affective, behavioral); causal etiology; comprehensive national counter-strategies.",
      descriptionAr: "مفهوم التطرف والفرق بينه وبين العنف والإرهاب، أبعاد ومستويات التطرف الثلاثة (المعرفي، الوجداني، السلوكي)، أسباب انتشار التطرف، وسبل المواجهة الشاملة.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "egbac_psych_ch8_l1",
          titleEn: "Concept of Extremism & Its Tripartite Dimensions: Cognitive, Affective, Behavioral",
          titleAr: "مفهوم التطرف وأبعاده الثلاثة: المعرفي والوجداني والسلوكي",
          summaryEn: "Sociological demarcation of extremism vs. terrorism, and in-depth analysis of cognitive, affective, and behavioral radicalization layers.",
          summaryAr: "مفهوم التطرف والفروق بينه وبين العنف والإرهاب، والتحليل العميق لأبعاد التطرف المعرفية والوجدانية والسلوكية.",
          theoryContentEn: "### 1. Demarcating Extremism, Violence & Terrorism\n- **Intellectual Extremism:** A radical departure from moderate societal and theological consensus toward rigid, intolerant, and dogmatic absolutism.\n- **Conceptual Demarcation:**\n  - *Extremism:* The latent ideological and cognitive rigidity that repudiates pluralism.\n  - *Violence:* The overt physical enactment of hostility to coerce or inflict injury.\n  - *Terrorism:* Methodical, organized, and politically motivated violence crafted to terrorize civic populations and destabilize sovereign states.\n\n### 2. Tripartite Dimensions of Radicalization\n1. **The Cognitive Dimension:**\n   - Dogmatic black-and-white absolutism, catastrophic cognitive closure, and total rejection of critical inquiry.\n   - Monopolization of divine truth while anathematizing differing perspectives.\n   - Literal, out-of-context textual interpretations divorced from overarching objectives.\n2. **The Affective Dimension:**\n   - Intense resentment, hatred, and venomous disdain toward mainstream society.\n   - Fanatical emotional volatility stripped of human compassion and empathy.\n   - Self-righteous superiority paired with destructive retribution urges.\n3. **The Behavioral Dimension:**\n   - Transition from radical thought into illicit direct action, sabotage, and physical aggression.\n   - Organizing into clandestine violent militias waging war against civilian safety and national institutions.",
          theoryContentAr: "### ١. مفهوم التطرف والفرق بينه وبين العنف والإرهاب\n- **التطرف الفكري:** هو مجاوزة حد الاعتدال والوسطية والابتعاد الشديد عن القيم والمعايير الدينية والمجتمعية السائدة، والتمسك بتفسيرات جامدة ترفض التعددية وتلغي الرأي الآخر.\n- **الفرق بين التطرف والعنف والإرهاب:**\n  - *التطرف:* حالة فكرية ووجدانية تتسم بالجمود العقائدي والانغلاق الذهني.\n  - *العنف:* هو التعبير المادي السلوكي الفعلي عن التطرف باستخدام القوة لإلحاق الأذى بالآخرين.\n  - *الإرهاب:* هو العنف المنهجي المنظم الموجه ضد المجتمع والدولة لإثارة الرعب لتحقيق مآرب سياسية.\n\n### ٢. أبعاد ومستويات التطرف الثلاثة المتداخلة\n١. **البعد المعرفي (Cognitive):**\n   - الجمود الفكري المطلق وفقدان القدرة على التأمل والتفكير الناقد.\n   - احتكار الحقيقة وتكفير أو تخوين من يخالفه في الرأي.\n   - تفسير النصوص الدينية بسطحية واقتطاعها من سياقها التاريخي والمقاصدي.\n٢. **البعد الوجداني والانفعالي (Affective):**\n   - كراهية شديدة وعداء مستحكم للمجتمع والمخالفين.\n   - اندفاع عاطفي جارف وخالٍ من التعاطف الإنساني والرحمة.\n   - استعلاء روحي زائف ورغبة في الانتقام وتدمير المنظومة السائدة.\n٣. **البعد السلوكي (Behavioral):**\n   - ممارسة العدوان والعنف الفعلي ضد الأفراد والمؤسسات والممتلكات العامة.\n   - التحول إلى خلايا مسلحة تنتهك القانون وتعتدي على الأرواح والمقدرات.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 113-128"
          },
          lessonPlan: {
            titleEn: "Concept of Extremism & Its Tripartite Dimensions: Cognitive, Affective, Behavioral",
            titleAr: "مفهوم التطرف وأبعاده الثلاثة: المعرفي والوجداني والسلوكي",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH8-L1",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch8_l1_ws",
            titleEn: "Diagnostic Worksheet: Concept of Extremism & Its Tripartite Dimensions: Cognitive, Affective, Behavioral",
            titleAr: "ورقة عمل تقويمية تشخيصية: مفهوم التطرف وأبعاده الثلاثة: المعرفي والوجداني والسلوكي",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch8_l1_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch8_l1_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch8_l1_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "sociology_culture_extremism",
            titleEn: "Extremism Dimensions & Counter-Radicalization Matrix",
            titleAr: "مصفوفة أبعاد التطرف الفكري واستراتيجيات المواجهة",
            descriptionEn: "Three-dimensional extremism diagnostic matrix and comprehensive counter-radicalization roadmap.",
            descriptionAr: "تحليل ثلاثي الأبعاد للتطرف (معرفي، وجداني، وسلوكي) واستراتيجيات تفكيك الخطاب المتشدد."
          }
        },
        {
          id: "egbac_psych_ch8_l2",
          titleEn: "Root Causes of Youth Radicalization & Comprehensive Counter-Strategies",
          titleAr: "أسباب انتشار التطرف وسبل المواجهة الشاملة للظاهرة",
          summaryEn: "Sociocultural and economic drivers of radicalization, comprehensive counter-extremism strategy, religious renewal, and educational interventions.",
          summaryAr: "الأسباب الفكرية والاجتماعية والاقتصادية للتطرف، واستراتيجية المواجهة الشاملة وتجديد الخطاب الديني ودور مؤسسات التنشئة.",
          theoryContentEn: "### 1. Root Causes of Youth Radicalization\n- **Ideological & Spiritual:** Intellectual vacuum, religious illiteracy regarding authentic theological objectives, and consuming unvetted online indoctrination.\n- **Psychological & Personal:** Chronic frustration, acute maladjustment, alienation, anomie, and fragile self-esteem seeking compensatory belonging in cultic groups.\n- **Socialization Deficits:** Broken families, authoritarian parenting, absence of inspiring role models, and didactic schooling neglecting analytical reflection.\n- **Socioeconomic Grievances:** Youth unemployment, unmitigated inequality, social marginalization, and perceived lack of legitimate avenues for upward mobility.\n\n### 2. Comprehensive National Counter-Radicalization Strategy\n1. **Religious Discourse Renewal:** Dismantling toxic interpretations, promoting enlightened moderation, citizenship equality, and anchoring fatwa authority in respected institutions (Al-Azhar).\n2. **Critical Educational Reformation:** Embedding critical thinking, epistemology, and humanities curricula across all academic tiers to inoculate student minds against manipulation.\n3. **Socioeconomic Empowerment:** Fostering youth employment, subsidizing SME incubators, and fortifying welfare safety nets for vulnerable populations.\n4. **Family & Media Co-responsibility:** Cultivating democratic family dialogue and producing inspiring artistic and historical media celebrating national pride.\n5. **Dialogue & Reintegrative Rehabilitation:** Establishing safe arenas for open youth discourse, intellectual review committees, and comprehensive psychotherapeutic re-integration frameworks.",
          theoryContentAr: "### ١. أسباب وعوامل انتشار التطرف\n- **العوامل الفكرية والدينية:** الفراغ الفكري لدى الشباب، الجهل الديني بمقاصد الشريعة السمحة، وتلقي الفتاوى من مصادر غير مؤهلة عبر الإنترنت.\n- **العوامل النفسية والشخصية:** الشعور بالإحباط وسوء التوافق، العزلة والاغتراب، وضعف توكيد الذات، والبحث عن هوية وهمية بديلة.\n- **العوامل الاجتماعية والتربوية:** التفكك الأسري، القسوة أو الإهمال في التربية، غياب القدوة الصالحة، وجمود بعض المناهج التعليمية عن تنمية التفكير الناقد.\n- **العوامل الاقتصادية والمجتمعية:** البطالة، التفاوت الطبقي الصارخ، التهميش الاجتماعي، وانسداد آفاق الأمل والعمل أمام الشباب.\n\n### ٢. استراتيجيات وسبل المواجهة الشاملة للتطرف\n١. **تجديد الخطاب الديني:** تصحيح المفاهيم المغلوطة، نشر صحيح الدين وقيم التسامح والمواطنة وقبول الآخر، وقصر الإفتاء على المؤسسات الرسمية الرشيدة (الأزهر ودار الإفتاء).\n٢. **تطوير المنظومة التعليمية:** تدريس مناهج التفكير الناقد والفلسفة والعلوم الإنسانية لتدريب العقول على التحليل وتفنيد الشائعات والأكاذيب.\n٣. **التمكين الاقتصادي والاجتماعي:** خلق فرص عمل حقيقية للشباب، دعم المشروعات الصغيرة وريادة الأعمال، وتوفير مظلات الحماية الاجتماعية للطبقات الهشة.\n٤. **تفعيل دور الأسرة والإعلام:** بناء أسر قائمة على الحوار والمصارحة، وإنتاج محتوى إعلامي وفني راقٍ يعزز الانتماء الوطني والوعي الثقافي.\n٥. **الحوار والتأهيل وإعادة الإدماج:** فتح قنوات الحوار الديمقراطي مع الشباب، وتوفير برامج المناصحة والمراجعات الفكرية والتأهيل النفسي والاجتماعي للعائدين عن الفكر المتطرف لدمجهم في المجتمع.",
          formulas: [
            {
              labelEn: "Core Psychological Law",
              labelAr: "المعادلة السلوكية والمعرفية",
              latex: "B = f(P, E)"
            },
            {
              labelEn: "Memory Retention Rate",
              labelAr: "معدل استبقاء الذاكرة (إبنجهاوس)",
              latex: "R(t) = e^{-\\frac{t}{S}}"
            }
          ],
          moeRef: {
            bookTitleEn: "Psychology & Sociology for General Secondary Education",
            bookTitleAr: "علم النفس وعلم الاجتماع للثانوية العامة والمناهج المعتمدة",
            grade: "Grade 12",
            term: "Full Academic Year",
            officialCode: "EGBAC-PSYCH-G12",
            pageRange: "pp. 113-128"
          },
          lessonPlan: {
            titleEn: "Root Causes of Youth Radicalization & Comprehensive Counter-Strategies",
            titleAr: "أسباب انتشار التطرف وسبل المواجهة الشاملة للظاهرة",
            gradeLevel: "Grade 12",
            durationMinutes: 90,
            moeCode: "EGBAC-PSYCH-CH8-L2",
            bloomsObjectivesEn: [
              "Define key terms and conceptual definitions according to Egyptian Ministry standards.",
              "Analyze underlying psychosocial relationships, theories, and laws.",
              "Apply theoretical principles to analyze real-life behavioral situations."
            ],
            bloomsObjectivesAr: [
              "تحديد المفاهيم الأساسية والمصطلحات المعتمدة وفق معايير وزارة التربية والتعليم.",
              "تحليل العلاقات والنظريات النفسية والاجتماعية وتفسير السلوك.",
              "تطبيق القوانين والمبادئ العلمية على مواقف وسياقات حياتية واقعية."
            ],
            prerequisitesEn: ["Fundamental reading comprehension and logical analysis skills."],
            prerequisitesAr: ["مهارات الاستيعاب القرائي الأساسية والتفكير المنطقي."],
            keyVocabularyEn: [
              { term: "Psychological Adjustment", definition: "Harmonious adaptation between internal needs and social reality." },
              { term: "Social Process", definition: "Reciprocal dynamic pattern through which social interactions evolve." }
            ],
            keyVocabularyAr: [
              { term: "التوافق النفسي والاجتماعي", definition: "التوازن والانسجام بين رغبات الفرد ومتطلبات البيئة والمجتمع." },
              { term: "العملية الاجتماعية", definition: "النموذج الدينامي الذي تتشكل وتتطور من خلاله حركة التفاعل الاجتماعي." }
            ],
            teachingPacing: [
              {
                phaseEn: "Engage & Inquire",
                phaseAr: "التمهيد وإثارة التساؤل",
                duration: "15 min",
                activitiesEn: "Introduce a psychosocial case study or real-world behavioral scenario to ignite inquiry.",
                activitiesAr: "طرح دراسة حالة سلوكية أو معضلة اجتماعية واقعية لإثارة التساؤل واستدعاء الخبرات السابقة."
              },
              {
                phaseEn: "Deep Conceptual Exploration",
                phaseAr: "الاستكشاف والتحليل المنهجي",
                duration: "50 min",
                activitiesEn: "Detailed exposition of theories, experimental models, sociological laws, and psychological mechanisms.",
                activitiesAr: "عرض تفصيلي للنظريات والنماذج التجريبية والقوانين الاجتماعية وميكانيزمات السلوك البشري."
              },
              {
                phaseEn: "Assessment & Synthesis",
                phaseAr: "التقويم الختامي والتركيب",
                duration: "25 min",
                activitiesEn: "Evaluate student mastery through ministerial MCQs and higher-order critical thinking challenges.",
                activitiesAr: "تقويم فهم الطلاب من خلال أسئلة وزارية وتطبيقات عملية تقيس مهارات التفكير العليا."
              }
            ],
            commonMisconceptionsEn: [
              "Assuming learning is merely rote memorization without neural and cognitive restructuring.",
              "Confusing enduring personality traits with temporary emotional reactions."
            ],
            commonMisconceptionsAr: [
              "الاعتقاد الخاطئ بأن التعلم مجرد حفظ آلي دون إعادة تنظيم للمجال المعرفي والإدراك العصبي.",
              "الخلط بين سمات الشخصية الثابتة نسبياً وبين ردود الفعل الانفعالية العارضة."
            ],
            differentiationEn: {
              struggling: "Provide guided conceptual comparison matrices and step-by-step psychological case decomposition.",
              advanced: "Analyze multidimensional social phenomena, complex conflict dynamics, and behavioral modeling."
            },
            differentiationAr: {
              struggling: "تقديم مصفوفات مقارنة مفاهيمية مبسطة ودراسة حالات سلوكية موجهة خطوة بخطوة.",
              advanced: "تحليل معمق للظواهر الاجتماعية المركبة وديناميات الصراع المتعددة ونمذجة السلوك البشري."
            },
            formativeAssessmentEn: "Interactive structured debate analyzing cognitive versus behavioral paradigms.",
            formativeAssessmentAr: "مناظرة صفية تفاعلية لمقارنة المنظور السلوكي الإمبريقي بالمنظور المعرفي والإنساني.",
            exitTicketQuestion: {
              questionEn: "Why is human personality considered a dynamic system rather than a static collection of traits?",
              questionAr: "لماذا تُعرَّف الشخصية الإنسانية بأنها تنظيم دينامي وليست مجرد تجميع ساكن للسمات؟",
              solutionEn: "Because personality is continuously evolving, self-regulating, and interacting with biological and environmental factors.",
              solutionAr: "لأن الشخصية في حالة تفاعل وحركة مستمرة وتنظيم ذاتي لا ينفصل بين العوامل النفس-جسمية والمحيط الاجتماعي."
            }
          },
          worksheet: {
            id: "egbac_psych_ch8_l2_ws",
            titleEn: "Diagnostic Worksheet: Root Causes of Youth Radicalization & Comprehensive Counter-Strategies",
            titleAr: "ورقة عمل تقويمية تشخيصية: أسباب انتشار التطرف وسبل المواجهة الشاملة للظاهرة",
            descriptionEn: "Ministerial diagnostic assessment measuring recall, analysis, and HOTS synthesis.",
            descriptionAr: "تقويم وزاري تشخيصي يقيس الفهم والتطبيق والتفكير الناقد.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "egbac_psych_ch8_l2_p1",
                titleEn: "Foundational Diagnostic Item 1",
                titleAr: "سؤال تقويمي تأسيسي 1",
                difficulty: "easy",
                questionEn: "Which statement accurately expresses the ministerial concept for this lesson?",
                questionAr: "أي العبارات الآتية تعبر بدقة عن المفهوم المعتمد في هذا الدرس؟",
                optionsEn: [
                  "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                  "Social behavior is entirely determined by solar radiation cycles.",
                  "All personalities are completely identical across all cultures.",
                  "Learning occurs without any cognitive processing or biological basis."
                ],
                optionsAr: [
                  "يعكس السلوك الإنساني تفاعلاً متكاملاً بين العوامل المعرفية والانفعالية والاجتماعية.",
                  "يتحدد السلوك الاجتماعي كلياً بدورات الإشعاع الشمسي والطقس الخارجي.",
                  "تتطابق سمات الشخصية الإنسانية بنسبة مئة بالمئة في جميع الثقافات.",
                  "يحدث التعلم دون أي معالجة عقلية أو أساس بيولوجي في الدماغ."
                ],
                correctAnswer: "Human behavior reflects integrated cognitive, emotional, and social interactions.",
                correctIndex: 0,
                hintEn: "Focus on the holistic nature of psychology and sociology.",
                hintAr: "ركز على النظرة المتكاملة لعلم النفس والاجتماع في دراسة الإنسان.",
                stepByStepSolutionEn: ["1. Direct concept recall according to Egyptian curriculum standards."],
                stepByStepSolutionAr: ["١. استرجاع مباشر للمفهوم المعتمد في المنهج الوزاري المصري."]
              },
              {
                id: "egbac_psych_ch8_l2_p2",
                titleEn: "Applied Analysis Item 2",
                titleAr: "سؤال تطبيقي تحليلي 2",
                difficulty: "medium",
                questionEn: "When applying this lesson's framework to a real-life situation, which outcome is expected?",
                questionAr: "عند تطبيق القواعد المدروسة في هذا الدرس على موقف واقعي، ما النتيجة المتوقعة؟",
                optionsEn: [
                  "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                  "Repression of all emotions completely prevents psychological tension.",
                  "Cooperation always produces uncontrollable destructive friction.",
                  "Individual differences play zero role in educational attainment."
                ],
                optionsAr: [
                  "يقود الحوار البناء والمشاركة النشطة إلى تعزيز التوافق والارتقاء بمستوى الأداء.",
                  "يمنع الكبت التام لجميع الانفعالات حدوث أي توتر أو أزمات نفسية.",
                  "ينتج التعاون الجماعي دائماً صدامات هدامة لا يمكن السيطرة عليها.",
                  "لا تلعب الفروق الفردية أي دور على الإطلاق في التحصيل الأكاديمي."
                ],
                correctAnswer: "Constructive dialogue and active participation lead to enhanced adjustment and performance.",
                correctIndex: 0,
                hintEn: "Consider the positive impact of constructive engagement.",
                hintAr: "فكر في الآثار الإيجابية للتفاعل الإيجابي والمشاركة الفعالة.",
                stepByStepSolutionEn: ["1. Analyze situational dynamics and deduce valid behavioral consequence."],
                stepByStepSolutionAr: ["١. تحليل معطيات الموقف واستنتاج النتيجة السلوكية السليمة علمياً."]
              },
              {
                id: "egbac_psych_ch8_l2_p3",
                titleEn: "HOTS Synthesis Item 3",
                titleAr: "سؤال تفكير عليا وتركيبي 3",
                difficulty: "hots",
                questionEn: "In resolving a complex psychosocial dilemma, what synthesis represents the highest level of maturity?",
                questionAr: "عند معالجة معضلة نفسية اجتماعية معقدة، أي القرارات الآتية يمثل أعلى مستويات النضج والتفكير الناقد؟",
                optionsEn: [
                  "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                  "Total emotional detachment and refusing all communication with society.",
                  "Blind conformism to obsolete practices without any intellectual examination.",
                  "Projecting personal failures entirely onto societal conspiracies."
                ],
                optionsAr: [
                  "الموازنة الواعية بين تحقيق الذات والمسؤولية المجتمعية عبر التفكير الناقد والتعاطف الإنساني.",
                  "الانعزال التام والقطيعة الشعورية مع المجتمع ومؤسساته المختلفة.",
                  "التبعية العمياء للتقاليد البالية دون أي فحص عقلي أو مراجعة نقدية.",
                  "إسقاط الإخفاقات الذاتية بالكامل على مؤامرات خارجية وهمية."
                ],
                correctAnswer: "Balancing self-actualization with communal responsibility through critical thinking and empathy.",
                correctIndex: 0,
                hintEn: "Synthesize personal agency with social cohesion.",
                hintAr: "اجمع بين حرية المبادرة الفردية والمسؤولية الاجتماعية المشتركة.",
                stepByStepSolutionEn: ["1. Synthesize psychosocial dimensions to arrive at optimal balanced conclusion."],
                stepByStepSolutionAr: ["١. الموازنة والتركيب بين أبعاد الشخصية والمجتمع للوصول إلى الحل الأكثر نضجاً."]
              }
            ]
          },
          interactiveWidget: {
            type: "sociology_culture_extremism",
            titleEn: "Extremism Dimensions & Counter-Radicalization Matrix",
            titleAr: "مصفوفة أبعاد التطرف الفكري واستراتيجيات المواجهة",
            descriptionEn: "Three-dimensional extremism diagnostic matrix and comprehensive counter-radicalization roadmap.",
            descriptionAr: "تحليل ثلاثي الأبعاد للتطرف (معرفي، وجداني، وسلوكي) واستراتيجيات تفكيك الخطاب المتشدد."
          }
        }
      ],
      databank: egBacPsychCh8Databank,
      solvedExamples: egBacPsychCh8SolvedExamples,
      exerciseProblems: egBacPsychCh8Exercises,
      interactiveWidgets: [
        {
          type: "sociology_culture_extremism",
          titleEn: "Extremism Dimensions & Counter-Radicalization Matrix",
          titleAr: "مصفوفة أبعاد التطرف الفكري واستراتيجيات المواجهة",
          descriptionEn: "Three-dimensional extremism diagnostic matrix and comprehensive counter-radicalization roadmap.",
          descriptionAr: "تحليل ثلاثي الأبعاد للتطرف (معرفي، وجداني، وسلوكي) واستراتيجيات تفكيك الخطاب المتشدد."
        }
      ]
    }
  ]
};
