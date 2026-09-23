export interface CertificationQuizQuestion {
  id: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  rationaleAr: string;
  rationaleEn: string;
}

export interface ContentSection {
  headingAr: string;
  headingEn: string;
  bodyAr: string;
  bodyEn: string;
}

export interface CertificationModule {
  id: string;
  number: number;
  titleAr: string;
  titleEn: string;
  estimatedMinutes: number;
  summaryAr: string;
  summaryEn: string;
  objectivesAr: string[];
  objectivesEn: string[];
  sections: ContentSection[];
  pedagogicalTipsAr: string[];
  pedagogicalTipsEn: string[];
  quiz: CertificationQuizQuestion[];
}

export const TEACHER_CERTIFICATION_MODULES: CertificationModule[] = [
  {
    id: 'mod1_platform_curriculum',
    number: 1,
    titleAr: 'مدخل إلى منظومة كليبسات وبنوك الأسئلة الوزارية',
    titleEn: 'ClipSAT Ecosystem & Ministerial Question Databanks',
    estimatedMinutes: 20,
    summaryAr: 'التعرف على بنية المنصة المعتمدة، وتكامل ٧٧,٠٠٠ سؤال عبر ٣٨٥ فصلاً دراسياً مع معايير وزارة التربية والتعليم المصرية.',
    summaryEn: 'Understanding the accredited platform architecture, integrating 77,000 problems across 385 chapters aligned with Egyptian Ministry standards.',
    objectivesAr: [
      'فهم بنية المناهج المزدوجة (الثانوية العامة والبكالوريا المصرية EG-Bac)',
      'التعرف على توزيع المستويات المعرفية (سهل، متوسط، تفكير عليا HOTS)',
      'توجيه الطلاب نحو استخدام المصادر الرسمية والأرقام الهندية والعربية'
    ],
    objectivesEn: [
      'Understand dual-curriculum branches (Thanaweya Amma and Egyptian Baccalaureate)',
      'Analyze Bloom cognitive tier distributions (Easy, Medium, HOTS)',
      'Guide students in utilizing official databanks and bilingual rendering'
    ],
    sections: [
      {
        headingAr: 'فلسفة بنوك الأسئلة الوزارية وتكافؤ المناهج',
        headingEn: 'Ministerial Databank Philosophy & Curriculum Bridges',
        bodyAr: 'تغطي كليبسات ٣٦ مادة معتمدة تشمل كافة المواد الأساسية (الفيزياء، الكيمياء، الأحياء، الرياضيات التخصصية، اللغات الأجنبية، والمواد الإنسانية والتكنولوجية). كل فصل يحتوي على تدرج ثلاثي صارم يضمن تمكين الطالب من الأساسيات وصولاً إلى أسئلة الربط والتحليل الوزارية.',
        bodyEn: 'ClipSAT covers 36 accredited subjects including all core sciences, specialized mathematics, foreign languages, humanities, and modern applied engineering tracks. Every chapter features a strict tri-tier progression from conceptual basics to ministerial synthesis.'
      },
      {
        headingAr: 'دمج كتب الوزارة التفاعلية',
        headingEn: 'Interactive Ministerial Textbooks Integration',
        bodyAr: 'ترتبط كل مسألة بوحدة دراسية معتمدة متوافقة مع أحدث طبعات مركز تطوير المناهج (CCIMD). يتيح النظام للمعلم مراجعة الشرح النظري الموازي بضغطة واحدة.',
        bodyEn: 'Every exam item connects to an accredited syllabus unit aligned with recent Center for Curriculum & Instructional Materials Development (CCIMD) textbooks, allowing 1-click theoretical review.'
      }
    ],
    pedagogicalTipsAr: [
      'ابدأ العام الدراسي باختبار تشخيصي قصير لتحديد المستوى الأساسي للطلاب.',
      'لا تكلف الطلاب بأسئلة التفكير العليا (HOTS) قبل التأكد من إتقان ٨٠٪ من المستوى المتوسط.'
    ],
    pedagogicalTipsEn: [
      'Begin the academic year with a short diagnostic benchmark to map baseline performance.',
      'Avoid assigning HOTS problems before students achieve 80% mastery on the Medium tier.'
    ],
    quiz: [
      {
        id: 'm1_q1',
        questionAr: 'كم يبلغ إجمالي الأسئلة المتاحة في بنوك أسئلة منصة كليبسات؟',
        questionEn: 'What is the total number of questions available in ClipSAT databanks?',
        optionsAr: ['١٥,٠٠٠ سؤال', '٣٥,٠٠٠ سؤال', '٧٧,٠٠٠ سؤال', '١٠٠,٠٠٠ سؤال'],
        optionsEn: ['15,000 questions', '35,000 questions', '77,000 questions', '100,000 questions'],
        correctIndex: 2,
        rationaleAr: 'تحتوي المنصة على ٧٧,٠٠٠ سؤال معتمد موزع عبر ٣٨٥ فصلاً دراسياً في ٣٦ مادة.',
        rationaleEn: 'The platform hosts 77,000 accredited problems across 385 chapters in 36 subjects.'
      },
      {
        id: 'm1_q2',
        questionAr: 'ما هي المستويات المعرفية الثلاثة المعتمدة في بنوك الأسئلة؟',
        questionEn: 'What are the three cognitive tiers in the databanks?',
        optionsAr: [
          'تذكر، فهم، تطبيق',
          'سهل، متوسط، مهارات تفكير عليا (HOTS)',
          'نظري، عملي، شفوي',
          'فصلي، شهري، نهائي'
        ],
        optionsEn: [
          'Remember, Understand, Apply',
          'Easy, Medium, Higher-Order Thinking Skills (HOTS)',
          'Theoretical, Practical, Oral',
          'Midterm, Monthly, Final'
        ],
        correctIndex: 1,
        rationaleAr: 'تعتمد المنصة تصنيف Easy (المفاهيم المباشرة)، Medium (التطبيق متعدد الخطوات)، وHOTS (الربط والتحليل العميق).',
        rationaleEn: 'The platform employs Easy (foundational), Medium (multi-step application), and HOTS (synthesis & analysis).'
      },
      {
        id: 'm1_q3',
        questionAr: 'كيف يعالج نظام كليبسات الفروق بين الثانوية العامة والبكالوريا المصرية (EG-Bac)؟',
        questionEn: 'How does ClipSAT handle differences between Thanaweya Amma and EG-Bac?',
        optionsAr: [
          'يهمل نظام البكالوريا المصرية تماماً',
          'يوفر جسور معادلة منهجية مخصصة ومسارات متوازية لكل مادة',
          'يدمج الأسئلة عشوائياً دون تمييز',
          'يقتصر على ترجمة المصطلحات فقط'
        ],
        optionsEn: [
          'Completely ignores the EG-Bac curriculum',
          'Provides dedicated curriculum bridges and parallel branch pathways for each subject',
          'Merges questions randomly without distinction',
          'Only provides term translation'
        ],
        correctIndex: 1,
        rationaleAr: 'يوفر النظام فروعاً مستقلة وجسور معادلة دقيقة تعكس فلسفة التقييم لكل مسار.',
        rationaleEn: 'The system provides independent branch pathways and equivalency bridges tailored to each track.'
      },
      {
        id: 'm1_q4',
        questionAr: 'أي من العناصر التالية يتوفر لكل سؤال في بنك الأسئلة؟',
        questionEn: 'Which of the following is provided for every databank problem?',
        optionsAr: [
          'فقط رقم الإجابة الصحيحة (أ، ب، ج، د)',
          'نص السؤال وخياراته باللغتين العربية والإنجليزية مع خطوات حل وشرح تفصيلي',
          'فيديو إعلاني تجاري',
          'رابط خارجي لليوتيوب فقط'
        ],
        optionsEn: [
          'Only the correct option letter (A, B, C, D)',
          'Bilingual question stems, options, and KaTeX step-by-step rationales',
          'Commercial video advertisements',
          'An external YouTube link only'
        ],
        correctIndex: 1,
        rationaleAr: 'تتميز جميع أسئلة المنصة بالازدواج اللغوي والشرح المفاهيمي والرياضي المفصل برياضيات KaTeX.',
        rationaleEn: 'All questions feature dual-language support and full pedagogical step-by-step KaTeX explanations.'
      },
      {
        id: 'm1_q5',
        questionAr: 'ما التوصية التربوية للمعلم عند تكليف الطلاب بتمارين جديدة؟',
        questionEn: 'What is the pedagogical recommendation when assigning new exercises?',
        optionsAr: [
          'البدء مباشرة بأصعب أسئلة امتحانات السنوات السابقة',
          'التدرج من السهل إلى المتوسط والتأكد من إتقان ٨٠٪ قبل الانتقال للمستويات العليا',
          'إلغاء التمارين والاعتماد على الحفظ الشفوي فقط',
          'تكليف كل طالب بـ ٥٠٠ سؤال في يوم واحد'
        ],
        optionsEn: [
          'Start immediately with the hardest past ministerial exam problems',
          'Progress from Easy to Medium ensuring 80% mastery before escalating to HOTS',
          'Cancel exercises and rely solely on oral memorization',
          'Assign 500 questions in a single day'
        ],
        correctIndex: 1,
        rationaleAr: 'التدرج يحمي الطالب من الإحباط المعرفي ويؤسس الفهم المفاهيمي العميق قبل مواجهة مصائد الامتحانات.',
        rationaleEn: 'Graduated difficulty prevents cognitive burnout and builds conceptual mastery before tackling traps.'
      }
    ]
  },
  {
    id: 'mod2_adaptive_leitner',
    number: 2,
    titleAr: 'خوارزمية التكرار المتباعد والتدريب التكيفي',
    titleEn: 'Spaced Repetition & Adaptive Practice Engine',
    estimatedMinutes: 25,
    summaryAr: 'توظيف نموذج لايتنر الخماسي، ومنحنى النسيان لإبينغهاوس، ورسم خريطة المتطلبات السابقة لمعالجة التعثر الدراسي.',
    summaryEn: 'Leveraging the 5-box Leitner system, Ebbinghaus forgetting curve, and prerequisite graphs for mastery learning.',
    objectivesAr: [
      'فهم فترات التكرار المتباعد (١ يوم، ٣ أيام، ٧ أيام، ٢١ يوماً، ٦٠ يوماً)',
      'التعرف على كيفية ترقية أو خفض المفاهيم في صناديق المراجعة',
      'تحديد الفجوات السابقة وتوجيه الروشتة اليومية الذكية للطلاب'
    ],
    objectivesEn: [
      'Understand Leitner review intervals (1d, 3d, 7d, 21d, 60d)',
      'Learn how knowledge points are promoted or demoted across memory boxes',
      'Identify prerequisite gaps and direct the daily adaptive prescription'
    ],
    sections: [
      {
        headingAr: 'منحنى النسيان ونظرية لايتنر المعدلة',
        headingEn: 'The Forgetting Curve & Modified Leitner Architecture',
        bodyAr: 'ينسى الطالب ٧٠٪ من المعلومات غير الممارسة خلال ٢٤ ساعة. خوارزمية كليبسات تعيد جدولة المفهوم تلقائياً: عند الإجابة الصحيحة ينتقل المفهوم للصندوق التالي لمضاعفة الفترة الزمنية، وعند الخطأ يعود للصندوق رقم صفر للمراجعة الفورية في اليوم التالي.',
        bodyEn: 'Students forget up to 70% of unreinforced knowledge within 24 hours. The adaptive engine schedules review intervals: correct answers promote knowledge points, while errors reset them to Box 0 for immediate next-day reinforcement.'
      },
      {
        headingAr: 'شبكة المتطلبات القبلية (Prerequisite Graph)',
        headingEn: 'Prerequisite Dependency Graphs',
        bodyAr: 'لا يمكن لطالب فهم الاحتكاك على المستوى المائل دون إتقان تحليل القوى على المستوى الأفقي. الخوارزمية تكشف هذا الرابط وتوصي بالمتطلب الأسبق قبل تكرار الفشل في الموضوع المتقدم.',
        bodyEn: 'A student cannot master inclined plane friction without understanding horizontal force resolution. The engine identifies unmastered prerequisites and prioritizes foundational gaps first.'
      }
    ],
    pedagogicalTipsAr: [
      'شجع الطلاب على فتح الروشتة اليومية لمدة ١٥-٢٠ دقيقة قبل بدء المذاكرة الجديدة.',
      'تابع تقدم الطلاب في الصناديق المتقدمة (الصندوق ٣ و٤) لضمان ثبات المعلومة في الذاكرة طويلة المدى.'
    ],
    pedagogicalTipsEn: [
      'Encourage students to spend 15–20 minutes daily on their adaptive prescription.',
      'Track student retention in Boxes 3 and 4 to ensure consolidation in long-term memory.'
    ],
    quiz: [
      {
        id: 'm2_q1',
        questionAr: 'ما هو الفاصل الزمني لمراجعة مفهوم تم ترقيته إلى الصندوق ٢ في نموذج لايتنر؟',
        questionEn: 'What is the review interval for a concept in Box 2 of the Leitner system?',
        optionsAr: ['يوم واحد', '٣ أيام', '٧ أيام', '٦٠ يوماً'],
        optionsEn: ['1 day', '3 days', '7 days', '60 days'],
        correctIndex: 2,
        rationaleAr: 'جدول الفترات المعتمد: الصندوق ٠ (١ يوم)، الصندوق ١ (٣ أيام)، الصندوق ٢ (٧ أيام)، الصندوق ٣ (٢١ يوماً)، الصندوق ٤ (٦٠ يوماً).',
        rationaleEn: 'Standard intervals: Box 0 (1d), Box 1 (3d), Box 2 (7d), Box 3 (21d), Box 4 (60d).'
      },
      {
        id: 'm2_q2',
        questionAr: 'ماذا يحدث للمفهوم عندما يخطئ الطالب في حله؟',
        questionEn: 'What happens to a knowledge point when a student answers incorrectly?',
        optionsAr: [
          'يظل في نفس الصندوق دون تغيير',
          'يهبط فوراً إلى الصندوق ٠ للمراجعة في اليوم التالي',
          'يتم حذفه نهائياً من سجل الطالب',
          'يتم خصم درجات الامتحان النهائي'
        ],
        optionsEn: [
          'Remains in the same box unchanged',
          'Immediately demoted to Box 0 for next-day review',
          'Permanently deleted from student profile',
          'Deducts final exam points'
        ],
        correctIndex: 1,
        rationaleAr: 'الخطأ يتطلب إعادة التدريب السريع، لذا يعود المفهوم إلى الصندوق ٠ ليظهر في الروشتة اليومية التالية.',
        rationaleEn: 'Mistakes demand rapid reinforcement, resetting the item to Box 0 in the student daily prescription.'
      },
      {
        id: 'm2_q3',
        questionAr: 'متى يصعد المحرك التكيفي مستوى صعوبة الأسئلة من السهل إلى المتوسط؟',
        questionEn: 'When does the adaptive engine escalate difficulty from Easy to Medium?',
        optionsAr: [
          'بعد حل سؤال واحد صحيح',
          'عند تحقيق نسبة دقة ≥ ٨٠٪ في آخر ٥ محاولات متتالية',
          'بعد مرور أسبوعين تلقائياً',
          'فقط عندما يدفع الطالب اشتراكاً'
        ],
        optionsEn: [
          'After solving one question correctly',
          'Upon achieving ≥ 80% accuracy over the last 5 attempts',
          'Automatically after two weeks',
          'Only when the student purchases a subscription'
        ],
        correctIndex: 1,
        rationaleAr: 'تضمن عتبة الـ ٨٠٪ رسوخ الفهم الأساسي قبل مواجهة تعقيدات المستوى المتوسط.',
        rationaleEn: 'The 80% threshold ensures solid foundational grasp before introducing multi-step problems.'
      },
      {
        id: 'm2_q4',
        questionAr: 'كيف تفيد شبكة المتطلبات السابقة (Prerequisite Graph) المعلم في الفصل؟',
        questionEn: 'How does the prerequisite graph benefit teachers in the classroom?',
        optionsAr: [
          'تمنع الطلاب من حل الواجبات',
          'توضح للمعلم المفهوم التأسيسي المفقود الذي يمنع فهم الدرس الحالي',
          'تطبع شهادات ورقية فقط',
          'تحدد أسماء الطلاب الغائبين'
        ],
        optionsEn: [
          'Prevents students from attempting homework',
          'Reveals the missing foundational concept blocking comprehension of the current topic',
          'Only prints paper certificates',
          'Identifies absent students'
        ],
        correctIndex: 1,
        rationaleAr: 'الشبكة تكتشف جذور المشكلة، كأن يرجع تعثر الطالب في التكامل إلى نقص في أساسيات قواعد الاشتقاق.',
        rationaleEn: 'The graph exposes the root cause, such as calculus integration struggles caused by derivative gaps.'
      },
      {
        id: 'm2_q5',
        questionAr: 'ما هي المدة الزمنية المثلى التي توصي بها المنصة يومياً للتدريب التكيفي؟',
        questionEn: 'What is the optimal daily study time recommended for adaptive practice?',
        optionsAr: ['٥ دقائق فقط', '١٥ إلى ٢٥ دقيقة مركزة', '٦ ساعات متواصلة دون راحة', 'مرة واحدة كل شهر'],
        optionsEn: ['5 minutes only', '15 to 25 focused minutes', '6 continuous hours without breaks', 'Once a month'],
        correctIndex: 1,
        rationaleAr: 'الدراسات المعرفية تثبت أن الممارسة الموزعة اليومية لمدة ١٥-٢٥ دقيقة أكثر كفاءة بمراحل من الحشو المكثف.',
        rationaleEn: 'Cognitive science shows 15–25 minutes of distributed daily practice vastly outperforms cramming.'
      }
    ]
  },
  {
    id: 'mod3_distractor_diagnostics',
    number: 3,
    titleAr: 'تشخيص أنماط الأخطاء ومصائد المشتتات الوزارية',
    titleEn: 'Distractor Analysis & Cognitive Error Pattern Diagnostics',
    estimatedMinutes: 25,
    summaryAr: 'فهم الهندسة المعرفية لمشتتات امتحانات الثانوية العامة، وكيفية تصنيف أخطاء الإشارات، والوحدات، ومقلوب القوانين.',
    summaryEn: 'Analyzing the cognitive engineering behind ministerial exam distractors and classifying sign, unit, and formula slips.',
    objectivesAr: [
      'التمييز بين الفجوة المفاهيمية والخطأ الحسابي وسوء قراءة السؤال',
      'كشف مصائد الإشارات السالبة والاتجاهات الفيزيائية',
      'معالجة أخطاء تحويل الوحدات القياسية والمقلوب الرياضي'
    ],
    objectivesEn: [
      'Differentiate concept gaps, arithmetic slips, and comprehension misreads',
      'Detect sign inversion and physical vector direction traps',
      'Address unit conversion errors and mathematical reciprocal traps'
    ],
    sections: [
      {
        headingAr: 'سيكولوجية واضعي امتحانات الثانوية العامة',
        headingEn: 'Psychology of Ministerial Exam Item Writers',
        bodyAr: 'لا يضع واضع الامتحان خيارات عشوائية. كل مشتت خاطئ يمثل نتيجة مسار تفكيري ناقص معروف مسبقاً (مثل نسيان تربيع نصف القطر، أو إهمال إشارة سالب لينز، أو التحويل من سم إلى متر). محرك كليبسات يتعرف على هذه الأنماط آلياً فور اختيار الطالب.',
        bodyEn: 'Exam creators do not design random distractors. Each incorrect option corresponds to a predictable cognitive pitfall (e.g. forgetting $r^2$, neglecting Lenz sign, or cm-to-m conversion). ClipSAT diagnoses these traps automatically.'
      },
      {
        headingAr: 'تصنيف الأنماط الستة للأخطاء',
        headingEn: 'The Six Core Error Patterns',
        bodyAr: 'يصنف النظام الأخطاء إلى: خطأ إشارة واتجاه، خطأ تحويل وحدات، خلط في القوانين، تسرع وضغط وقت، خطأ حسابي بسيط، وسوء قراءة لمعطيات المسألة (مثل كلمات "ما عدا" أو "غير صحيح").',
        bodyEn: 'The system classifies errors into: sign/direction inversion, unit scaling, formula confusion, time pressure, arithmetic slips, and reading comprehension negation traps.'
      }
    ],
    pedagogicalTipsAr: [
      'ناقش في الفصل "لماذا كان الخيار الخاطئ جذاباً؟" وليس فقط "لماذا الإجابة الصحيحة صحيحة".',
      'درب الطلاب على وضع خط تحت الكلمات المفتاحية المقيدة (مثل "في اتجاه مضاد"، "أقصى ارتفاع"، "بدون احتكاك").'
    ],
    pedagogicalTipsEn: [
      'Discuss in class "Why was the distractor tempting?" rather than only explaining the correct answer.',
      'Train students to underline constraining keywords ("in opposite direction", "maximum height", "frictionless").'
    ],
    quiz: [
      {
        id: 'm3_q1',
        questionAr: 'إذا كانت الإجابة الصحيحة لمسألة عزم هي +25 N.m واختار الطالب -25 N.m، ما هو تصنيف الخطأ؟',
        questionEn: 'If the correct answer is +25 N.m and the student chose -25 N.m, what is the error classification?',
        optionsAr: [
          'خطأ في حفظ جدول الضرب',
          'خطأ إشارة واتجاه الدوران (Sign/Direction Inversion)',
          'خطأ تحويل وحدات',
          'عدم معرفة قانون العزم'
        ],
        optionsEn: [
          'Multiplication table slip',
          'Sign/Direction Inversion error',
          'Unit conversion error',
          'Lack of torque formula knowledge'
        ],
        correctIndex: 1,
        rationaleAr: 'تساوي القيمة العددية مع انعكاس الإشارة يدل على فهم القانون مع الخلط في اتجاه الدوران (مع أو عكس عقارب الساعة).',
        rationaleEn: 'Equal magnitude with inverted sign indicates formula understanding paired with rotational direction confusion.'
      },
      {
        id: 'm3_q2',
        questionAr: 'ما العامل الشائع المسبب لخطأ تحويل الوحدات (Unit Conversion) في الفيزياء؟',
        questionEn: 'What is a common cause of unit conversion errors in physics?',
        optionsAr: [
          'التعويض بالسنتمتر بدلاً من المتر أو بالمللي أمبير بدلاً من الأمبير',
          'قراءة السؤال باللغة الإنجليزية',
          'استخدام الآلة الحاسبة الحديثة',
          'كتابة اسم الطالب مرتين'
        ],
        optionsEn: [
          'Using centimeters instead of meters or mA instead of Amperes',
          'Reading the question in English',
          'Using a modern scientific calculator',
          'Writing the student name twice'
        ],
        correctIndex: 0,
        rationaleAr: 'إهمال الضرب في عوامل التحويل ($10^{-2}$ أو $10^{-3}$) يؤدي مباشرة إلى اختيار المشتت المصمم لهذا الخطأ الشائع.',
        rationaleEn: 'Neglecting standard unit multipliers ($10^{-2}$ or $10^{-3}$) triggers known ministerial distractor options.'
      },
      {
        id: 'm3_q3',
        questionAr: 'متى يصنف النظام الخطأ كـ "تسرع وضغط وقت" (Time Pressure)؟',
        questionEn: 'When does the system classify an error as "Time Pressure"?',
        optionsAr: [
          'عندما يحل الطالب السؤال في آخر دقيقة من الامتحان الرسمي',
          'عندما يستغرق الطالب أقل من ٥ ثوانٍ في مسألة تفكير عليا أو متعددة الخطوات',
          'عندما تنفد بطارية الهاتف المحمول',
          'إذا كان الطالب بطيئاً جداً واستغرق ساعة'
        ],
        optionsEn: [
          'When the student solves the question in the last minute of the official exam',
          'When the student spends under 5 seconds on a complex multi-step or HOTS problem',
          'When the mobile battery runs out',
          'If the student was very slow and took one hour'
        ],
        correctIndex: 1,
        rationaleAr: 'استغراق أقل من ٥ ثوانٍ في مسألة تتطلب خطوات حسابية يؤكد التخمين العشوائي أو التسرع دون قراءة المعطيات.',
        rationaleEn: 'Spending under 5 seconds on multi-step problems indicates blind guessing or rushed misreading.'
      },
      {
        id: 'm3_q4',
        questionAr: 'ما هي أفضل استراتيجية لمعالجة خطأ "سوء قراءة معطيات المسألة"؟',
        questionEn: 'What is the best pedagogical strategy to address comprehension misreads?',
        optionsAr: [
          'تظليل الكلمات السلبية والمستثناة مثل "ما عدا" أو "غير صحيح"',
          'حفظ الإجابات عن ظهر قلب دون قراءة السؤال',
          'طلب إعادة صياغة الامتحان كاملاً من الوزارة',
          'اختيار أطول خيار دائماً'
        ],
        optionsEn: [
          'Highlighting negative or exclusionary keywords such as "except" or "not true"',
          'Memorizing answers by heart without reading the stem',
          'Requesting a complete exam rewrite from the Ministry',
          'Always picking the longest answer option'
        ],
        correctIndex: 0,
        rationaleAr: 'الكلمات المستثناة والشرطية تمثل أكثر من ٢٠٪ من مصائد الامتحانات الحديثة، وتظليلها يضمن الانتباه الواعي.',
        rationaleEn: 'Exclusionary keywords represent over 20% of modern exam traps; highlighting them ensures mindful attention.'
      },
      {
        id: 'm3_q5',
        questionAr: 'كيف يستفيد المعلم من تقرير أنماط الأخطاء الجماعي للفصل؟',
        questionEn: 'How does a teacher utilize the class-wide error pattern report?',
        optionsAr: [
          'توبيخ الطلاب الذين أخطأوا',
          'تعديل خطة الشرح لتناول المشتت الأكثر تكراراً وكشف آليته التضليلية',
          'إلغاء المادة من جدول المدرسة',
          'إعادة الاختبار بنفس الأسئلة فوراً'
        ],
        optionsEn: [
          'Reprimanding struggling students',
          'Adjusting lesson plans to dissect the most frequent distractor and its deceptive logic',
          'Removing the subject from school timetable',
          'Repeating the identical test immediately'
        ],
        correctIndex: 1,
        rationaleAr: 'معرفة النمط السائد في الفصل تمكن المعلم من تصميم تدريس علاجي دقيق ومستهدف بدلاً من إعادة الشرح العشوائي.',
        rationaleEn: 'Knowing prevailing class traps allows targeted remediation rather than redundant generic reteaching.'
      }
    ]
  },
  {
    id: 'mod4_offline_assignments',
    number: 4,
    titleAr: 'إدارة وتوزيع الواجبات والاختبارات بالأكواد السداسية',
    titleEn: 'Offline Assignment Distribution & 6-Character Code Architecture',
    estimatedMinutes: 20,
    summaryAr: 'كيفية إنشاء وتوزيع ومتابعة الواجبات والاختبارات بدون الحاجة لتسجيل دخول الطلاب أو اتصالهم الدائم بالإنترنت.',
    summaryEn: 'Creating, distributing, and monitoring assignments using 6-character codes and offline compressed URLs without logins.',
    objectivesAr: [
      'توليد ومشاركة الأكواد السداسية المانعة للبس والتشابه',
      'توزيع الواجبات عبر روابط الواتساب المضغوطة التي تعمل دون اتصال',
      'استلام وتحليل إجابات الطلاب بأمان تام مع احترام الخصوصية'
    ],
    objectivesEn: [
      'Generate and share ambiguity-free 6-character access codes',
      'Distribute assignments via compressed WhatsApp URLs for offline classrooms',
      'Collect and analyze student submissions safely with full privacy protection'
    ],
    sections: [
      {
        headingAr: 'الأكواد السداسية الخالية من اللبس (Ambiguity-Free Codes)',
        headingEn: 'Ambiguity-Free 6-Character Codes',
        bodyAr: 'تستخدم كليبسات مجموعة محارف مستبعد منها الرموز المتشابهة (مثل الصفر والحرف O، والرقم واحد والحرف I والحرف L). يتيح ذلك للمعلم كتابة الكود على السبورة أو في رسالة نصية دون أي خطر لوقوع الطالب في خطأ كتابي.',
        bodyEn: 'ClipSAT uses a sanitized character set excluding easily confused glyphs (0/O, 1/I/L). This allows error-free transcription from whiteboards or SMS.'
      },
      {
        headingAr: 'التوزيع المضغوط عبر الرابط (Offline URL Packing)',
        headingEn: 'Compressed URL Distribution',
        bodyAr: 'يقوم النظام بضغط بيانات الواجب وتضمينها في الرابط ذاته بتنسيق Base64. عندما يفتح الطالب الرابط عبر هاتفه، يفتح الامتحان محلياً دون الحاجة لاستعلام أي خادم أو استهلاك باقة الإنترنت.',
        bodyEn: 'The system encodes the entire assignment into the URL query parameters using compressed Base64. Opening the link loads the test offline from local databanks without server roundtrips.'
      }
    ],
    pedagogicalTipsAr: [
      'حدد وقتاً زمنياً واقعياً للواجب (مثل دقيقتين لكل سؤال) لتدريب الطلاب على سرعة الامتحان النهائي.',
      'شارك كود الواجب في بداية الحصة أو عبر مجموعة الواتساب المدرسية.'
    ],
    pedagogicalTipsEn: [
      'Set realistic timers (e.g., 2 minutes per MCQ) to train students for ministerial pacing.',
      'Share the 6-character code at the start of class or via the school WhatsApp group.'
    ],
    quiz: [
      {
        id: 'm4_q1',
        questionAr: 'لماذا تم استبعاد الحروف مثل (O, I, L) والأرقام (0, 1) من أكواد الواجبات؟',
        questionEn: 'Why are characters like (O, I, L) and digits (0, 1) excluded from assignment codes?',
        optionsAr: [
          'لأنها حروف غير موجودة في اللغة الإنجليزية',
          'لمنع اللبس والخطأ عند نقل الكود يدوياً من السبورة أو الشاشة',
          'لتقليل حجم قاعدة البيانات',
          'لأسباب أمنية تتعلق بكلمات المرور'
        ],
        optionsEn: [
          'Because they do not exist in English',
          'To prevent ambiguity and handwriting transcription errors',
          'To minimize database storage size',
          'For password security restrictions'
        ],
        correctIndex: 1,
        rationaleAr: 'استبعاد المحارف المتشابهة يضمن نقل الكود بنسبة نجاح ١٠٠٪ حتى مع رداءة خط اليد على السبورة.',
        rationaleEn: 'Excluding ambiguous glyphs guarantees 100% transcription accuracy even from handwritten whiteboards.'
      },
      {
        id: 'm4_q2',
        questionAr: 'ما الذي يحتاجه الطالب للبدء في حل واجب أنشأه المعلم؟',
        questionEn: 'What does a student need to begin solving a teacher assignment?',
        optionsAr: [
          'إنشاء حساب مدفوع وبريد إلكتروني وكلمة سر معقدة',
          'فقط إدخال اسمه وكود الواجب السداسي (أو الضغط على رابط الواجب)',
          'تحميل تطبيق حجمه ٥٠٠ ميجابايت',
          'تقديم بطاقة الرقم القومي'
        ],
        optionsEn: [
          'Create a paid account with email and complex password',
          'Only enter their name and the 6-character code (or click the assignment link)',
          'Download a 500MB desktop application',
          'Submit a National ID card'
        ],
        correctIndex: 1,
        rationaleAr: 'تعتمد المنصة مبدأ "صفر تسجيل دخول" (Zero-Login) لحماية خصوصية الطلاب وإزالة أي عائق تقني أمام المشاركة.',
        rationaleEn: 'The platform adopts Zero-Login architecture to protect student privacy and remove onboarding friction.'
      },
      {
        id: 'm4_q3',
        questionAr: 'كيف يعمل نظام توزيع الواجبات عند انقطاع الإنترنت التام في المدرسة؟',
        questionEn: 'How does assignment distribution function in a complete school internet outage?',
        optionsAr: [
          'يتوقف النظام تماماً عن العمل',
          'يتم فك تشفير الواجب مباشرة من الرابط المضغوط وتوليد الأسئلة من الذاكرة المحلية المخزنة مسبقاً',
          'يطلب النظام إعادة تشغيل الراوتر',
          'يقوم المعلم بإلغاء اليوم الدراسي'
        ],
        optionsEn: [
          'The system completely ceases operation',
          'The assignment unpacks directly from the compressed URL using pre-cached local databanks',
          'The system prompts for a router reboot',
          'The teacher cancels the school day'
        ],
        correctIndex: 1,
        rationaleAr: 'حزم البيانات المخزنة محلياً تسمح باستخراج الأسئلة وعرضها وحلها بالكامل دون الحاجة لأي اتصال نشط.',
        rationaleEn: 'Pre-cached local databanks allow full offline unpacking and completion without network connectivity.'
      },
      {
        id: 'm4_q4',
        questionAr: 'ما هو الحد الأقصى الموصى به لعدد أسئلة الواجب الأسبوعي المركز؟',
        questionEn: 'What is the recommended question count for a focused weekly homework set?',
        optionsAr: ['سؤال واحد', '١٥ إلى ٢٥ سؤالاً نوعياً', '١٥٠ سؤالاً متكرراً', 'لا يوجد حد'],
        optionsEn: ['1 question', '15 to 25 qualitative questions', '150 repetitive questions', 'No limit'],
        correctIndex: 1,
        rationaleAr: 'تظهر الممارسات التربوية أن ١٥-٢٥ مسألة متنوعة الصعوبة والأفكار تحقق أعلى معدل إنجاز واستيعاب لدى الطلاب.',
        rationaleEn: 'Pedagogical research shows 15–25 varied problems yield the highest completion and retention rates.'
      },
      {
        id: 'm4_q5',
        questionAr: 'ما الميزة المباشرة لزر "مشاركة عبر واتساب" في واجهة المعلم؟',
        questionEn: 'What is the direct benefit of the "Share via WhatsApp" button in the teacher UI?',
        optionsAr: [
          'إرسال رسالة جاهزة منسقة تتضمن اسم الواجب وكوده ورابط الدخول المباشر بنقرة واحدة',
          'خصم رصيد المعلم في شركة المحمول',
          'حظر أولياء الأمور غير المشتركين',
          'تحميل فيديوهات عشوائية'
        ],
        optionsEn: [
          'Dispatches a pre-formatted message with assignment title, code, and 1-click launch link',
          'Deducts carrier credit from the teacher',
          'Blocks unsubscribed parents',
          'Downloads random videos'
        ],
        correctIndex: 0,
        rationaleAr: 'يوفر الزر وقتاً ثميناً على المعلم ويضمن وصول الرابط منسقاً مع التعليمات لمجموعات الطلاب بنقرة واحدة.',
        rationaleEn: 'Saves valuable teacher time by formatting assignment instructions and deep-links in a single tap.'
      }
    ]
  },
  {
    id: 'mod5_readiness_radar',
    number: 5,
    titleAr: 'قراءة رادار الجاهزية واكتشاف الطلاب المعرضين للتعثر',
    titleEn: 'Interpreting the Mastery Radar & Early Warning Detection',
    estimatedMinutes: 25,
    summaryAr: 'تحليل البيانات الرادارية متعددة الأبعاد، وتحديد الطلاب الأقل من ٥٠٪، وبناء خطط التدخل العلاجي المخصصة.',
    summaryEn: 'Analyzing multi-dimensional radar metrics, detecting at-risk students (<50%), and structuring remediation workflows.',
    objectivesAr: [
      'قراءة أبعاد رادار الجاهزية الـ ٥ الأساسية والـ ٣٠ التخصصية',
      'تحديد الطلاب المعرضين للتعثر قبل موعد الامتحان بفترة كافية',
      'توليد واجبات علاجية جماعية مبنية على نقاط الضعف المشتركة'
    ],
    objectivesEn: [
      'Interpret the 5-dimensional and 30-dimensional student mastery radars',
      'Identify at-risk students well ahead of the official exam session',
      'Generate collective remedial assignments targeting common conceptual gaps'
    ],
    sections: [
      {
        headingAr: 'الرادار التراكمي وتوازن التحصيل',
        headingEn: 'Cumulative Radar & Balanced Achievement',
        bodyAr: 'يقيس رادار كليبسات تمكن الطالب عبر محاور المادة (مثل: استاتيكا، ديناميكا، تفاضل، كيمياء عضوية، فيزياء حديثة). يساعد الشكل الهندسي للرادار المعلم على كشف "التحصيل غير المتوازن" فوراً، كأن يتقن الطالب الديناميكا ويهمل الاستاتيكا تماماً.',
        bodyEn: 'ClipSAT mastery radar evaluates student proficiency across subject axes. The geometric radar polygon highlights unbalanced preparation immediately (e.g. high dynamics mastery alongside severe statics neglect).'
      },
      {
        headingAr: 'نظام الإنذار المبكر (At-Risk Early Warning)',
        headingEn: 'Early Warning for At-Risk Students',
        bodyAr: 'الطلاب الذين تنخفض نسبتهم المتوقعة عن ٥٠٪ أو يسجلون معدلات خطأ تتجاوز ٦٠٪ في المستويات السهلة والمتوسطة يتم تمييزهم في لوحة المعلم بعلامة خطر صفراء/حمراء لتوجيه تدخل تربوي سريع.',
        bodyEn: 'Students with predicted readiness below 50% or over 60% error rates on foundational Easy/Medium items are highlighted with alert badges for timely pedagogical intervention.'
      }
    ],
    pedagogicalTipsAr: [
      'لا تعلن أسماء الطلاب المتعثرين علناً أمام الفصل، بل استخدم تقرير الإنذار لدعوتهم لمجموعات تقوية فردية.',
      'استخدم زر "واجب علاجي فوري" لإرسال تمرين مركز يستهدف النقاط الثلاث الأضعف في الفصل.'
    ],
    pedagogicalTipsEn: [
      'Never publicly single out at-risk students; use the alerts to organize supportive private check-ins.',
      'Use the "Immediate Remedial Assignment" button to dispatch focused practice targeting the top 3 gaps.'
    ],
    quiz: [
      {
        id: 'm5_q1',
        questionAr: 'ما هو المؤشر الذي يعتبر الطالب بموجبه "معرضاً لخطر التعثر" في لوحة المعلم؟',
        questionEn: 'What metric flags a student as "At-Risk" on the teacher dashboard?',
        optionsAr: [
          'الغياب عن المدرسة ليوم واحد',
          'انخفاض درجة الجاهزية المتوقعة عن ٥٠٪ أو كثرة الأخطاء في المفاهيم الأساسية',
          'الحصول على ٩٥٪ في الرياضيات',
          'عدم استخدام الوضع الليلي في التطبيق'
        ],
        optionsEn: [
          'One day of school absence',
          'Predicted readiness falling below 50% or recurring foundational concept errors',
          'Achieving 95% in Mathematics',
          'Not using Dark Mode in the app'
        ],
        correctIndex: 1,
        rationaleAr: 'انخفاض الجاهزية عن ٥٠٪ قبل الامتحان بفترة حرجة يشير إلى احتمالية الرسوب أو عدم استيفاء التنسيق الجامعي.',
        rationaleEn: 'Falling below 50% during critical exam prep indicates high risk of failing or missing admission cutoffs.'
      },
      {
        id: 'm5_q2',
        questionAr: 'ماذا يعكس شكل المضلع الراداري غير المتماثل (Unbalanced Polygon)؟',
        questionEn: 'What does an asymmetric radar polygon signify?',
        optionsAr: [
          'خلل في شاشة الهاتف',
          'تفوق الطالب في بعض فروع المادة وإهماله لفروع أخرى ذات وزن امتحاني مساوٍ',
          'أن جميع درجات الطالب متساوية تماماً',
          'أن الطالب أتم المنهج كاملاً بنجاح'
        ],
        optionsEn: [
          'A hardware screen defect',
          'Student excellence in certain branches alongside dangerous neglect of other high-weight branches',
          'That all student grades are strictly identical',
          'That the student successfully completed the entire syllabus'
        ],
        correctIndex: 1,
        rationaleAr: 'الشكل غير المتماثل ينبه المعلم إلى تركيز الطالب على موضوعات معينة وتجاهله لموضوعات وزارية أساسية.',
        rationaleEn: 'An asymmetric polygon warns the teacher that the student is ignoring key ministerial branches.'
      },
      {
        id: 'm5_q3',
        questionAr: 'كيف يساعد زر "توليد واجب علاجي" المعلم في معالجة فجوات الفصل؟',
        questionEn: 'How does the "Generate Remedial Assignment" button assist teachers?',
        optionsAr: [
          'يختار عشوائياً أسئلة غير مرتبطة بالمنهج',
          'يجمع آلياً أهم المفاهيم التي رسب فيها أكثر من ٤٠٪ من الفصل وينشئ واجباً مركزاً عليها',
          'يرسل بريداً إلكترونياً لوزير التعليم',
          'يقوم بحذف سجل الدرجات القديم'
        ],
        optionsEn: [
          'Randomly selects irrelevant questions',
          'Automatically aggregates concepts failed by >40% of the class into a focused review set',
          'Sends an email to the Ministry of Education',
          'Deletes historical grade records'
        ],
        correctIndex: 1,
        rationaleAr: 'التوليد العلاجي يختصر ساعات من تحليل المعلم للامتحانات ويصنع واجباً مخصصاً لسد الثغرات المشتركة.',
        rationaleEn: 'Automated remediation saves hours of manual analysis by assembling practice tailored to collective gaps.'
      },
      {
        id: 'm5_q4',
        questionAr: 'ما فائدة تصدير تقرير الفصل بتنسيق CSV للمعلم؟',
        questionEn: 'What is the utility of exporting the class report as a CSV file?',
        optionsAr: [
          'فتح التقرير في Excel أو Google Sheets لدمجه في سجلات الدرجات المدرسية الرسمية',
          'مشاركته كصورة على إنستغرام',
          'تغيير إعدادات الهاتف الذكي',
          'تشفير بيانات الحاسوب'
        ],
        optionsEn: [
          'Opening data in Excel or Google Sheets for seamless integration into official school gradebooks',
          'Sharing as an Instagram image',
          'Changing smartphone system settings',
          'Encrypting computer hard drives'
        ],
        correctIndex: 0,
        rationaleAr: 'تصدير CSV يتيح أرشفة النتائج والدرجات ونسب الحضور وتحليلها عبر برامج الجداول الإلكترونية المعتمدة.',
        rationaleEn: 'CSV exports enable seamless archival, gradebook integration, and custom spreadsheet analysis.'
      },
      {
        id: 'm5_q5',
        questionAr: 'كم عدد المحاور التخصصية التي يدعمها رادار كليبسات في وضعه الموسع؟',
        questionEn: 'How many specialized dimensions does the expanded ClipSAT radar support?',
        optionsAr: ['٣ محاور', '٥ محاور فقط', 'حتى ٣٠ محوراً تخصصياً يغطي كافة فروع العلوم واللغات والهندسة', '١٠٠ محور'],
        optionsEn: ['3 dimensions', '5 dimensions only', 'Up to 30 specialized dimensions covering all scientific and technical tracks', '100 dimensions'],
        correctIndex: 2,
        rationaleAr: 'يدعم الرادار حتى ٣٠ بعداً تخصصياً لمتابعة مسارات STEM والعلوم الحديثة واللغات الإنسانية بدقة.',
        rationaleEn: 'The radar scales up to 30 specialized axes to evaluate STEM, modern sciences, and humanities.'
      }
    ]
  },
  {
    id: 'mod6_virtual_labs_pedagogy',
    number: 6,
    titleAr: 'توظيف المختبرات الافتراضية والتقارير العلمية',
    titleEn: 'Virtual Labs Pedagogy & Scientific Lab Report Generation',
    estimatedMinutes: 20,
    summaryAr: 'دمج ٣٤ مختبراً افتراضياً في حصص الفيزياء والكيمياء والأحياء، واستخدام التقييم البعدي وتوليد تقارير التجارب PDF.',
    summaryEn: 'Integrating 34 interactive virtual labs, conducting post-lab inquiry assessments, and generating print-ready PDF reports.',
    objectivesAr: [
      'تطبيق استراتيجية التنبؤ والملاحظة والتفسير (POE) في المختبرات',
      'تفعيل التقييم البعدي العلمي (Post-Lab Assessment) لقياس فهم المتغيرات',
      'تصدير تقارير التجارب العلمية المعتمدة ببنود التقييم الوزاري'
    ],
    objectivesEn: [
      'Apply the Predict-Observe-Explain (POE) pedagogy in virtual lab sessions',
      'Deploy scientific post-lab inquiry assessments measuring variable control',
      'Export accredited scientific lab reports featuring ministerial rubric criteria'
    ],
    sections: [
      {
        headingAr: 'نموذج POE (توقع — لاحظ — فسر)',
        headingEn: 'Predict-Observe-Explain (POE) Framework',
        bodyAr: 'المختبر الافتراضي ليس مجرد لعبة ثلاثية الأبعاد. يوجه المعلم الطلاب لتسجيل توقعهم النظري أولاً، ثم ضبط البارامترات (مثل المقاومة، تركيز المحلول، أو زاوية المنشور)، وملاحظة السلوك التجريبي، ثم كتابة تفسير علمي متطابق مع المعادلات الرياضية.',
        bodyEn: 'Virtual labs are structured inquiry platforms. Students first predict theoretical outcomes, manipulate independent parameters (resistance, concentration, prism angle), observe data, and formulate scientific explanations.'
      },
      {
        headingAr: 'التقييم البعدي وتوليد التقارير العلمية',
        headingEn: 'Post-Lab Assessment & PDF Report Generation',
        bodyAr: 'يتضمن كل مختبر اختباراً بعدياً يقيس حساب الخطأ التجريبي، وتحديد المتغير التابع والمستقل، والتطبيق الهندسي في الواقع المصري. يتم دمج النتائج تلقائياً في تقرير تجربة رسمي يحمل شعار الجمهورية وختم المدرسة.',
        bodyEn: 'Every lab includes a post-lab inquiry quiz assessing experimental error margins, variable isolation, and industrial applications, automatically compiled into a printable official lab report.'
      }
    ],
    pedagogicalTipsAr: [
      'اطلب من الطلاب إجراء التجربة في وضع توفير البيانات إذا كانت أجهزتهم تعاني من بطء معالجة الـ 3D.',
      'كلف الطلاب بتسجيل قراءات متكررة لحساب المتوسط الحسابي ونسبة الخطأ التجريبي $\\Delta x / x$.'
    ],
    pedagogicalTipsEn: [
      'Instruct students to use Low-Data 2D fallback mode on budget devices to ensure fluid interaction.',
      'Direct students to log multiple trials to compute arithmetic mean and experimental percentage error.'
    ],
    quiz: [
      {
        id: 'm6_q1',
        questionAr: 'ما هي الخطوات الثلاث في نموذج POE التربوي المعتمد في المختبرات الافتراضية؟',
        questionEn: 'What are the three steps in the POE pedagogical framework for virtual labs?',
        optionsAr: [
          'احفظ، انسخ، كرر',
          'توقع (Predict)، لاحظ (Observe)، فسر (Explain)',
          'ابدأ، توقف، أعد التشغيل',
          'سجل اسمك، ادفع الرسوم، استلم النتيجة'
        ],
        optionsEn: [
          'Memorize, Copy, Repeat',
          'Predict, Observe, Explain (POE)',
          'Start, Stop, Restart',
          'Register, Pay, Receive'
        ],
        correctIndex: 1,
        rationaleAr: 'نموذج POE يبني التفكير الاستقصائي النشط عبر إجبار الطالب على تكوين فرضية قبل التجريب ثم مطابقتها مع النتائج.',
        rationaleEn: 'The POE framework builds active scientific inquiry by requiring a hypothesis prior to experimental observation.'
      },
      {
        id: 'm6_q2',
        questionAr: 'كيف يساهم التقييم البعدي (Post-Lab Assessment) في رفع كفاءة التقرير العلمي؟',
        questionEn: 'How does the Post-Lab Assessment enhance the scientific lab report?',
        optionsAr: [
          'يضيف إعلانات تجارية للتقرير',
          'يقيس بدقة مدى استيعاب الطالب للمتغيرات ومصادر الخطأ ويدمج درجاتها في المعايير الوزارية للتقرير',
          'يمنع الطالب من طباعة التقرير',
          'يقوم بحذف القراءات الجدولية'
        ],
        optionsEn: [
          'Adds commercial banners to the report',
          'Rigorously measures understanding of variables and error sources, embedding scores into the report rubric',
          'Prevents the student from printing',
          'Deletes table observations'
        ],
        correctIndex: 1,
        rationaleAr: 'التقييم البعدي يضمن أن الطالب لم يحرك المحاكاة عبثاً، بل استوعب المبادئ الفيزيائية والكيميائية المحكومة.',
        rationaleEn: 'Post-lab assessments ensure students grasp governing physical/chemical laws rather than manipulating sliders aimlessly.'
      },
      {
        id: 'm6_q3',
        questionAr: 'ماذا يفعل النظام عندما يفشل جهاز الطالب في تشغيل بيئة Three.js ثلاثية الأبعاد؟',
        questionEn: 'What does the system do when a device fails to initialize the Three.js 3D environment?',
        optionsAr: [
          'يتوقف التطبيق وتظهر شاشة زرقاء',
          'يتحول تلقائياً إلى المخططات التفاعلية ثنائية الأبعاد (2D SVG Fallback) بكامل الوظائف العلمية',
          'يطلب من الطالب شراء هاتف جديد فوراً',
          'يقفل حساب الطالب'
        ],
        optionsEn: [
          'The app crashes to a blue screen',
          'Automatically switches to 2D SVG interactive fallback retaining 100% scientific functionality',
          'Prompts the student to purchase a new phone',
          'Locks the student account'
        ],
        correctIndex: 1,
        rationaleAr: 'محرك اكتشاف قدرات العتاد يضمن التبديل السلس للوضع ثنائي الأبعاد لحماية الطلاب ذوي الأجهزة الاقتصادية.',
        rationaleEn: 'The hardware capability detector switches to lightweight 2D SVG mode on budget chipsets seamlessly.'
      },
      {
        id: 'm6_q4',
        questionAr: 'ما هي العناصر التي يتضمنها تقرير التجربة المولد تلقائياً؟',
        questionEn: 'What sections are included in the auto-generated scientific lab report?',
        optionsAr: [
          'فقط اسم التجربة والتاريخ',
          'الفرضية، الأدوات، المعادلة الحاكمة، الخطوات، جدول القراءات، تحليل الخطأ، وبنود التقييم الرسمية',
          'رابط لصفحة فيسبوك',
          'صورة المعلم الشخصية فقط'
        ],
        optionsEn: [
          'Only experiment title and date',
          'Hypothesis, apparatus, governing equations, procedure, data tables, error analysis, and rubric',
          'A Facebook page hyperlink',
          'Only the teacher personal photo'
        ],
        correctIndex: 1,
        rationaleAr: 'يصدر التقرير بتنسيق أكاديمي رسمي مستوفٍ لكافة معايير التقارير العلمية المعملية في الجامعات والمدارس الدولية.',
        rationaleEn: 'The report adheres to rigorous academic standards with complete apparatus, formulas, observations, and rubrics.'
      },
      {
        id: 'm6_q5',
        questionAr: 'كيف يساهم تحليل الخطأ التجريبي (Error Analysis) في تعليم الطالب مهارات البحث العلمي؟',
        questionEn: 'How does experimental error analysis cultivate scientific inquiry skills?',
        optionsAr: [
          'يعود الطالب على إلقاء اللوم على الأدوات دائماً',
          'يعلم الطالب الفرق بين الخطأ العشوائي والخطأ المنتظم وحساب نسبة الشك في القياس',
          'يثبت أن التجارب العلمية غير مجدية',
          'يلغي الحاجة لاستخدام وحدات القياس'
        ],
        optionsEn: [
          'Trains students to always blame the apparatus',
          'Teaches the distinction between random and systematic errors and calculating measurement uncertainty',
          'Proves that scientific experiments are futile',
          'Eliminates the need for measurement units'
        ],
        correctIndex: 1,
        rationaleAr: 'فهم مصادر الشك والخطأ يميز الطالب العلمي الناضج القادر على تفسير التباينات المعملية بدقة.',
        rationaleEn: 'Distinguishing random vs. systematic uncertainty develops mature scientific reasoning and empirical precision.'
      }
    ]
  },
  {
    id: 'mod7_rural_equity_low_data',
    number: 7,
    titleAr: 'تكافؤ الفرص التعليمية ووضع توفير البيانات للمناطق الريفية',
    titleEn: 'Educational Equity & Low-Data Mode in Rural Communities',
    estimatedMinutes: 20,
    summaryAr: 'ضمان وصول تجربة التعلم المتطورة لطلاب القرى والنجوع دون اشتراط باقات إنترنت باهظة أو أجهزة حديثة.',
    summaryEn: 'Guaranteeing equitable access for students in Upper Egypt and rural areas on low-bandwidth networks and budget devices.',
    objectivesAr: [
      'تفعيل وضع توفير البيانات (Low-Data Mode) وتقليص استهلاك الإنترنت',
      'استخدام الخطوط المحلية للنظام والاستغناء عن تنزيل الخطوط الخارجية',
      'إدارة حزم المواد المحملة مسبقاً لمذاكرة أسبوعية كاملة دون اتصال'
    ],
    objectivesEn: [
      'Activate Low-Data mode to minimize cellular bandwidth consumption',
      'Utilize system native fonts to eliminate external network font requests',
      'Manage pre-cached subject packs for continuous 100% offline study'
    ],
    sections: [
      {
        headingAr: 'رسالة العدالة التعليمية في كليبسات',
        headingEn: 'The ClipSAT Educational Equity Mission',
        bodyAr: 'صممت المنصة لكي لا تكون أداة حصرية للمقتدرين أو لطلاب المدارس الخاصة. في صعيد مصر والقرى النائية، يمتلك العديد من الطلاب هواتف منخفضة التكلفة (ذاكرة عشوائية ٢ جيجابايت وشبكات 3G غير مستقرة). يجب أن يحصل هؤلاء الطلاب على نفس جودة التشخيص والشرح المتاحة في أرقى المدارس.',
        bodyEn: 'ClipSAT is built to eliminate privilege. In rural Upper Egypt and remote villages, students often rely on budget smartphones (2GB RAM, intermittent 3G). They deserve the exact same diagnostic intelligence and quality education as elite private schools.'
      },
      {
        headingAr: 'التحسينات التقنية لوضع توفير البيانات',
        headingEn: 'Technical Optimizations for Low-Data Operation',
        bodyAr: 'عند تفعيل وضع توفير البيانات: تتوقف مؤثرات GPU الثقيلة والـ backdrop-filters، ويتم استخدام خطوط النظام الأصلية، وتستبدل المحاكاة ثلاثية الأبعاد بمخططات SVG فائقة السرعة، مما يقلل استهلاك الباقة بنسبة تفوق ٨٥٪.',
        bodyEn: 'Under Low-Data Mode: GPU blur filters are deactivated, native system fonts replace remote font files, and Three.js simulations swap for instant SVG diagrams, slashing cellular bandwidth usage by over 85%.'
      }
    ],
    pedagogicalTipsAr: [
      'نظم في بداية كل أسبوع جلسة في المدرسة لتحميل حزمة المادة عبر واي فاي المدرسة ليكمل الطالب تدريبه من البيت بدون إنترنت.',
      'ذكر الطلاب بأن سرعة استجابة التطبيق في وضع توفير البيانات تتيح لهم التركيز الكامل على حل المسائل دون أي تشتيت بصري.'
    ],
    pedagogicalTipsEn: [
      'Organize weekly pre-download sessions using school WiFi so students can study offline all week at home.',
      'Remind students that low-data mode maximizes app responsiveness and removes visual distractions.'
    ],
    quiz: [
      {
        id: 'm7_q1',
        questionAr: 'ما هو التوفير التقريبي في استهلاك باقة الإنترنت الذي يحققه وضع توفير البيانات؟',
        questionEn: 'What is the approximate bandwidth reduction achieved by Low-Data Mode?',
        optionsAr: ['٥٪ فقط', 'أكثر من ٨٥٪', 'لا يوجد أي توفير', 'يستهلك ضعف البيانات'],
        optionsEn: ['5% only', 'Over 85%', 'Zero savings', 'Consumes double the data'],
        correctIndex: 1,
        rationaleAr: 'من خلال تعطيل تحميل الخطوط الخارجية والصور الثقيلة ومؤثرات الرسوميات، تنخفض البيانات المنقولة بأكثر من ٨٥٪.',
        rationaleEn: 'Disabling external font downloads, heavy assets, and GPU filters reduces network transfers by over 85%.'
      },
      {
        id: 'm7_q2',
        questionAr: 'كيف تخدم ميزة "حزم المواد مسبقة التحميل" طالب يعيش في قرية ذات تغطية شبكية ضعيفة؟',
        questionEn: 'How does the Pre-Download Subject Pack feature assist a rural student with poor network coverage?',
        optionsAr: [
          'تمنعه من استخدام الهاتف نهائياً',
          'تمكنه من تحميل كتاب المادة وبنك أسئلتها بالكامل (حوالي ٥ ميجابايت) واستخدامه أوفلاين لأشهر دون أي اتصال',
          'تجعله يحتاج لشراء شريحة بيانات جديدة يومياً',
          'تقتصر على عرض الإعلانات فقط'
        ],
        optionsEn: [
          'Prevents using the phone completely',
          'Allows downloading the entire subject pack (~5MB) over WiFi to study 100% offline for months',
          'Requires buying a new SIM card every day',
          'Only displays advertisements'
        ],
        correctIndex: 1,
        rationaleAr: 'حجم الحزمة المضغوط (~٥ ميجابايت) يتيح تخزين المادة كاملة بنصوصها وشروحاتها على ذاكرة الهاتف بمجرد الاتصال لدقيقة واحدة.',
        rationaleEn: 'The compact ~5MB bundle pre-caches complete databanks and textbooks for uninterrupted offline practice.'
      },
      {
        id: 'm7_q3',
        questionAr: 'ماذا يحل محل الخطوط الشبكية الخارجية عند تفعيل وضع توفير البيانات؟',
        questionEn: 'What replaces external web fonts when Low-Data mode is active?',
        optionsAr: [
          'رموز عشوائية غير مقروءة',
          'الخطوط الأصلية المدمجة في نظام تشغيل الهاتف (System Native Fonts)',
          'حذف النصوص نهائياً',
          'الكتابة باللغة الهيروغليفية فقط'
        ],
        optionsEn: [
          'Unreadable random glyphs',
          'Native system fonts already built into the device OS (-apple-system, Roboto, Arial)',
          'Complete text deletion',
          'Hieroglyphic script only'
        ],
        correctIndex: 1,
        rationaleAr: 'الاعتماد على خطوط النظام المدمجة في أندرويد وآبل يوفر ميجابايتات ثمينة ويسرع زمن فتح التطبيق فورياً.',
        rationaleEn: 'Relying on built-in OS typography eliminates network font requests and provides instantaneous page renders.'
      },
      {
        id: 'm7_q4',
        questionAr: 'ما هو الحد الأدنى من مواصفات الهواتف الذكية التي تضمن المنصة عملها بكفاءة عليها؟',
        questionEn: 'What is the baseline device specification the platform guarantees fluid performance on?',
        optionsAr: [
          'أحدث هواتف آيفون برو ماكس فقط',
          'هواتف أندرويد الاقتصادية بذاكرة عشوائية ٢ جيجابايت (Android Go)',
          'أجهزة الكمبيوتر الفائقة في مراكز البيانات',
          'لا تعمل المنصة على الهواتف إطلاقاً'
        ],
        optionsEn: [
          'Latest iPhone Pro Max flagship only',
          'Budget Android Go devices with 2GB RAM',
          'Supercomputers in enterprise data centers',
          'The platform does not work on mobile phones at all'
        ],
        correctIndex: 1,
        rationaleAr: 'المنصة مصممة ومختبرة لتعمل بسلاسة تامة على هواتف Android Go ذات الذاكرة المحدودة (٢ جيجابايت).',
        rationaleEn: 'The platform is engineered and verified to run smoothly on 2GB RAM budget Android Go devices.'
      },
      {
        id: 'm7_q5',
        questionAr: 'لماذا يعتبر كليبسات مجانياً بنسبة ١٠٠٪ دون أي رسوم مخفية؟',
        questionEn: 'Why is ClipSAT 100% free without hidden subscription paywalls?',
        optionsAr: [
          'لأن المنصة تجريبية وستغلق غداً',
          'لأن رسالتها هي العدالة وتكافؤ الفرص في التحصيل الدراسي لجميع أبناء الشعب المصري',
          'لأنها تبيع بيانات الطلاب للشركات',
          'لأنها لا تحتوي على أي أسئلة مفيدة'
        ],
        optionsEn: [
          'Because it is an experiment that will shut down tomorrow',
          'Because its core mission is educational equity and universal access for all Egyptian students',
          'Because it sells student data to advertisers',
          'Because it contains no useful questions'
        ],
        correctIndex: 1,
        rationaleAr: 'الالتزام بالمجانية والخصوصية ينبع من الإيمان بأن التميز في الثانوية العامة حق لكل طالب بغض النظر عن دخله الأسري.',
        rationaleEn: 'Universal free access is grounded in the belief that exam readiness is a fundamental right regardless of income.'
      }
    ]
  },
  {
    id: 'mod8_parent_communication',
    number: 8,
    titleAr: 'التواصل الفعال مع أولياء الأمور عبر تقارير الواتساب الذكية',
    titleEn: 'Engaging Parents via Smart WhatsApp Progress Summaries',
    estimatedMinutes: 20,
    summaryAr: 'بناء شراكة إيجابية مع أولياء الأمور برسائل أسبوعية مريحة ومبسطة بالعامية المصرية تشجع الطالب دون ضغط نفسي.',
    summaryEn: 'Building positive parent-educator partnerships with reassuring, jargon-free weekly Egyptian Arabic progress reports.',
    objectivesAr: [
      'توليد تقارير أسبوعية مختصرة تفهمها أي أسرة مصرية',
      'مشاركة مؤشر الجاهزية وساعات المذاكرة الفعلية بنقرة واحدة على واتساب',
      'توجيه الدعم الأسري نحو نقاط التركيز القادمة بدلاً من التأنيب السلبي'
    ],
    objectivesEn: [
      'Generate concise weekly summaries understandable by any Egyptian household',
      'Share readiness percentages and actual study duration in 1 click on WhatsApp',
      'Direct parental support toward constructive weekly goals rather than stress and reprimands'
    ],
    sections: [
      {
        headingAr: 'قلق الثانوية العامة واللغة المطمئنة للأسرة',
        headingEn: 'Thanaweya Anxiety & Reassuring Family Communication',
        bodyAr: 'يمثل عام الثانوية العامة ضغطاً عصبياً هائلاً على الأسرة المصرية. تقارير كليبساب مصممة بلهجة تطمين دافئة باللغة العربية: لا تستخدم مصطلحات إحصائية معقدة (مثل الانحراف المعياري أو مستويات بلوم)، بل تقول ببساطة: "ابنك ذاكر ٤ ساعات هذا الأسبوع، ونسبة جاهزيته ٧٨٪، وشاطر جداً في الكيمياء العضوية، وهنركز الأسبوع الجاي على مراجعة الاستاتيكا".',
        bodyEn: 'Thanaweya Amma represents immense emotional stress for Egyptian families. ClipSAT parent reports use warm, reassuring Arabic phrasing: avoiding complex statistics, simply celebrating study duration, current readiness %, and highlighting one constructive focus topic.'
      },
      {
        headingAr: 'المشاركة الفورية عبر الواتساب (WhatsApp Direct Link)',
        headingEn: 'Instant WhatsApp Web & App Dispatch',
        bodyAr: 'لا يطلب من ولي الأمر تحميل أي تطبيق أو تذكر كلمات سر. بنقرة واحدة من المعلم أو الطالب، يتم توليد رسالة واتساب جاهزة ومشفرة ترسل للوالدين مع رموز تعبيرية محفزة تحث على التشجيع والمكافأة.',
        bodyEn: 'Parents do not need to install an app or remember passwords. A single tap generates an encoded WhatsApp message with celebratory emojis encouraging constructive family support.'
      }
    ],
    pedagogicalTipsAr: [
      'أرسل تقرير ولي الأمر مساء كل جمعة لتتزامن المراجعة مع العطلة الأسبوعية للأسرة.',
      'أكد لولي الأمر دائماً أن التقييم هو مؤشر عملي للتطوير وليس حكماً نهائياً على مستقبل ابنه.'
    ],
    pedagogicalTipsEn: [
      'Dispatch weekly parent summaries on Friday evenings to coincide with family weekend routines.',
      'Reassure parents that diagnostic scores are developmental roadmaps, not final verdicts on their child future.'
    ],
    quiz: [
      {
        id: 'm8_q1',
        questionAr: 'ما هي النبرة واللغة المعتمدة في تقرير ولي الأمر الذكي بكليبسات؟',
        questionEn: 'What tone and language are employed in ClipSAT smart parent reports?',
        optionsAr: [
          'مصطلحات إحصائية جافة ورسوم بيانية معقدة باللغة الإنجليزية',
          'لغة عربية دافئة ومطمئنة وبسيطة تركز على الجهد المبذول وتحدد نقطة تركيز محددة',
          'تهديد الطالب بالحرمان من الامتحان',
          'نصوص قانونية حكومية رسمية'
        ],
        optionsEn: [
          'Dry statistical jargon and complex English graphs',
          'Warm, reassuring, simple Arabic celebrating effort and highlighting one constructive focus',
          'Threatening the student with exam exclusion',
          'Formal governmental legal text'
        ],
        correctIndex: 1,
        rationaleAr: 'النبرة المطمئنة تحول ولي الأمر من مصدر ضغط عصبي إلى شريك داعم يشجع الطالب على الاستمرار.',
        rationaleEn: 'A reassuring tone transforms parents from sources of anxiety into supportive allies celebrating daily effort.'
      },
      {
        id: 'm8_q2',
        questionAr: 'ما هي البيانات الأساسية الأربعة المتضمنة في ملخص ولي الأمر؟',
        questionEn: 'What are the four primary metrics in the parent summary?',
        optionsAr: [
          'الرقم القومي، فصيلة الدم، العنوان بالتفصيل، رقم الجلوس',
          'مدة المذاكرة الفعلية، نسبة الجاهزية الحالية، أبرز نقاط القوة، وموضوع التركيز للأسبوع القادم',
          'اسم المدرسة واسم الناظر فقط',
          'مبلغ المصروفات الدراسية المطلوب دفعها'
        ],
        optionsEn: [
          'National ID, blood type, home address, seat number',
          'Actual study duration, current readiness %, top strengths, and upcoming weekly focus topic',
          'School name and principal name only',
          'Tuition fees required for payment'
        ],
        correctIndex: 1,
        rationaleAr: 'هذه البيانات الأربعة تمنح الأسرة صورة واضحة وموجزة عن مسار الابن الدراسي دون إغراق في التفاصيل الفنية.',
        rationaleEn: 'These four metrics provide parents with a clear, actionable overview without technical overwhelm.'
      },
      {
        id: 'm8_q3',
        questionAr: 'كيف يستلم ولي الأمر التقرير الأسبوعي؟',
        questionEn: 'How does a parent receive the weekly progress summary?',
        optionsAr: [
          'عبر برقية بريدية ورقية',
          'عبر رسالة واتساب جاهزة بنقرة واحدة من هاتف الطالب أو المعلم',
          'بالحضور إلى مقر الوزارة بالعاصمة الإدارية',
          'من خلال الاتصال بالراديو'
        ],
        optionsEn: [
          'Via a postal mail telegram',
          'Via a formatted WhatsApp message generated with 1 click from student or teacher device',
          'By visiting the Ministry headquarters in the New Capital',
          'Through a radio broadcast'
        ],
        correctIndex: 1,
        rationaleAr: 'تطبيق الواتساب هو القناة الأكثر انتشاراً واستخداماً بين الأسر المصرية من كافة الفئات الاجتماعية.',
        rationaleEn: 'WhatsApp is the most universally accessible and frictionless channel for Egyptian households.'
      },
      {
        id: 'm8_q4',
        questionAr: 'لماذا تتجنب المنصة مقارنة درجات الطالب بزملائه في رسالة ولي الأمر؟',
        questionEn: 'Why does the platform avoid comparing a student to peers in parent messages?',
        optionsAr: [
          'لأن النظام لا يعرف درجات باقي الطلاب',
          'لحماية الصحة النفسية للطالب ومنع المقارنات السلبية المحبطة داخل الأسرة',
          'لتوفير حجم الرسالة فقط',
          'لأن الطلاب جميعهم متساوون دائماً'
        ],
        optionsEn: [
          'Because the system is unaware of peer scores',
          'To protect student mental well-being and eliminate toxic, demotivating family comparisons',
          'Only to keep message length short',
          'Because all students are always identical'
        ],
        correctIndex: 1,
        rationaleAr: 'المقارنة مع الأقران تولد عقدة نقص وضغوطاً نفسية ضارة، بينما المقارنة مع أداء الطالب السابق تبني ثقة النمو الذاتي.',
        rationaleEn: 'Peer comparison fuels counterproductive anxiety, while comparing with prior personal progress fosters growth.'
      },
      {
        id: 'm8_q5',
        questionAr: 'ما التوجيه الإيجابي الذي يختتم به تقرير ولي الأمر دائماً؟',
        questionEn: 'What positive guidance always concludes the parent progress summary?',
        optionsAr: [
          'حبس الطالب في غرفته حتى الامتحانات',
          'عبارة تشجيعية تحث الأسرة على دعم الطالب وتقدير الجهد والمثابرة',
          'طلب وقف الدروس الخصوصية فوراً',
          'لا يوجد أي توجيه'
        ],
        optionsEn: [
          'Locking the student in their room until final exams',
          'An encouraging note urging the family to praise the student perseverance and progress',
          'A command to stop private tutoring immediately',
          'No guidance at all'
        ],
        correctIndex: 1,
        rationaleAr: 'الكلمة الطيبة والتشجيع الأسري يمثلان الوقود النفسي الأهم لطالب الثانوية العامة لتجاوز ضغوط الامتحانات.',
        rationaleEn: 'Words of encouragement and familial appreciation provide the emotional resilience students need to succeed.'
      }
    ]
  }
];

export interface TeacherCertificationRecord {
  teacherName: string;
  nationalIdMasked?: string;
  governorate: string;
  schoolName: string;
  specialtySubject: string;
  referralCode: string;
  completedModuleIds: string[];
  moduleScores: Record<string, number>;
  averageScorePct: number;
  certificateSerial: string;
  verificationHash: string;
  certifiedAt: number;
  isCertified: boolean;
}

export const TEACHER_CERTIFICATION_STORAGE_KEY = 'egbac_teacher_certification_record';

/**
 * Generate unique ambiguity-free referral code for certified teachers.
 * e.g. MST-CAIRO-8942
 */
export function generateTeacherReferralCode(teacherNameOrGov: string = 'Teacher', governorate?: string): string {
  const govStr = governorate || teacherNameOrGov || 'EGY';
  const cleanGov = govStr.trim().toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4) || 'EGY';
  const randNum = Math.floor(1000 + Math.random() * 8999);
  return `MST-${cleanGov}-${randNum}`;
}

/**
 * Calculate overall certification status. Requires 8/8 modules completed with average >= 80%.
 */
export function evaluateCertificationProgress(
  moduleScores: Record<string, number>
): {
  completedCount: number;
  totalModules: number;
  averageScorePct: number;
  isEligibleForCertificate: boolean;
} {
  const totalModules = TEACHER_CERTIFICATION_MODULES.length;
  const completedIds = Object.keys(moduleScores);
  const completedCount = completedIds.length;

  if (completedCount === 0) {
    return {
      completedCount: 0,
      totalModules,
      averageScorePct: 0,
      isEligibleForCertificate: false,
    };
  }

  const sumScores = completedIds.reduce((acc, id) => acc + (moduleScores[id] || 0), 0);
  const averageScorePct = Math.round(sumScores / completedCount);
  const isEligibleForCertificate = completedCount === totalModules && averageScorePct >= 80;

  return {
    completedCount,
    totalModules,
    averageScorePct,
    isEligibleForCertificate,
  };
}

/**
 * Load teacher certification state from localStorage.
 */
export function getSavedTeacherCertification(): TeacherCertificationRecord | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(TEACHER_CERTIFICATION_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as TeacherCertificationRecord;
  } catch (err) {
    console.error('Error loading teacher certification:', err);
    return null;
  }
}

/**
 * Save teacher certification state.
 */
export function saveTeacherCertification(record: TeacherCertificationRecord): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(TEACHER_CERTIFICATION_STORAGE_KEY, JSON.stringify(record));
  } catch (err) {
    console.error('Error saving teacher certification:', err);
  }
}
