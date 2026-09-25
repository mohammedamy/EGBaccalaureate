import type { Chapter, TrackScope } from '../types/curriculum';

export type SubjectNature = 'common_subject' | 'pure_scientific' | 'pure_literary';

export interface SubjectTrackClassification {
  subjectId: string;
  nature: SubjectNature;
  titleAr: string;
  titleEn: string;
  defaultTrackScope: TrackScope;
  commonDescriptionAr: string;
  commonDescriptionEn: string;
  scientificFocusAr?: string;
  scientificFocusEn?: string;
  literaryFocusAr?: string;
  literaryFocusEn?: string;
  recommendedTrackNoteAr?: string;
  recommendedTrackNoteEn?: string;
}

/**
 * Registry defining track scope metadata for Egyptian Thanaweya & Baccalaureate subjects.
 * Provides clear distinctions between Common Core, Scientific Track, and Literary Track.
 */
export const SUBJECT_TRACK_REGISTRY: Record<string, SubjectTrackClassification> = {
  // 1. Arabic Language & Literature (المادة القومية المشتركة)
  arabic: {
    subjectId: 'arabic',
    nature: 'common_subject',
    titleAr: 'اللغة العربية وآدابها',
    titleEn: 'Arabic Language & Literature',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مقرر إلزامي موحد لجميع الشعب (80 درجة): يشمل النحو الشامل وقواعد الإعراب (الوحدات السبع)، فنون البلاغة والبيان، مهارات القراءة المتحررة، وقواعد الرسم الإملائي والتعبير.',
    commonDescriptionEn: 'National Core Subject (80 Marks): Mandatory for all tracks. Covers comprehensive syntax & parsing (all 7 units), rhetorical figures, reading comprehension, and orthography.',
    scientificFocusAr: 'التركيز على الفهم الوظيفي للمفردات، استيعاب نصوص القراءة العلمية والتكنولوجية، والدقة اللغوية التعبيرية دون التوسع في دقائق الخلاف النحوي القديم.',
    scientificFocusEn: 'Emphasis on functional vocabulary, technological & scientific comprehension passages, and clear compositional precision.',
    literaryFocusAr: 'التركيز على النقد الأدبي المقارن المعمق، دراسة سمات المدارس الشعرية (الإحياء، مطران، الديوان، أبوللو، المهاجر، الواقعية)، فنون النثر، والتحليل البلاغي الجمالي الموسع للأسئلة المقالية.',
    literaryFocusEn: 'Emphasis on in-depth comparative literary critique, poetic movements, prose forms (novel, short story, drama), and comprehensive rhetorical analysis for essay questions.',
    recommendedTrackNoteAr: 'يمتحن طلاب العلمي والأدبي في نفس الورقة الامتحانية الموحدة مع مراعاة التوازن بين الأسئلة العلمية التحليلية والأدبية التذوقية.',
    recommendedTrackNoteEn: 'Both tracks sit for the standardized unified national examination with balanced questions.',
  },

  // 2. English (اللغة الأجنبية الأولى المشتركة)
  english: {
    subjectId: 'english',
    nature: 'common_subject',
    titleAr: 'اللغة الإنجليزية (اللغة الأولى)',
    titleEn: 'English (First Foreign Language)',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مقرر موحد لجميع الشعب (50 درجة): يشمل القواعد اللغوية التأسيسية، الأزمنة والأفعال السببية، المفردات العامة للوحدات 1-12، ومهارات الترجمة العامة والمقال.',
    commonDescriptionEn: 'Core First Foreign Language (50 Marks): Grammar tenses, causatives, core academic lexicon across Units 1–12, and foundational translation & essay conventions.',
    scientificFocusAr: 'التركيز على المفردات والمصطلحات العلمية والتقنية (STEM Terminology)، نصوص القراءة عن الطاقة والبيئة والذكاء الاصطناعي، والترجمة العلمية الرصينة.',
    scientificFocusEn: 'Focus on scientific/technical terminology (STEM), passages on renewable energy, ecology, and artificial intelligence, and precise technical translation.',
    literaryFocusAr: 'التركيز على التحليل الأدبي المعمق لرواية «الآمال العظيمة» (Great Expectations)، دراسة الشخصيات والأبعاد النفسية والاجتماعية في العصر الفيكتوري، والمصطلحات النقدية (Symbolism, Foil, Bildungsroman).',
    literaryFocusEn: 'Focus on literary critique of Great Expectations: character arcs, Victorian social commentary, moral bildungsroman, and critical literary devices (Symbolism, Foil, Theme).',
    recommendedTrackNoteAr: 'الوحدات من 1 إلى 5 موحدة بالكامل بين الشعبتين، بينما تمثل دراسة الرواية التحليلية بعداً نقدياً أعمق لطلاب الشعبة الأدبية.',
    recommendedTrackNoteEn: 'Units 1–5 are 100% shared; novel literary critique provides deeper analytical value for humanities students.',
  },

  // 3. Second Foreign Languages
  french: {
    subjectId: 'french',
    nature: 'common_subject',
    titleAr: 'اللغة الفرنسية (اللغة الثانية)',
    titleEn: 'French (Second Foreign Language)',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مقرر موحد للشعبتين (40 درجة): الرياضة، التغذية، الريف، السفر ووسائل المواصلات، القواعد اللغوية، والمواقف اليومية التواصلية.',
    commonDescriptionEn: 'Core Second Foreign Language (40 Marks): Everyday sports, food, travel, core grammar, and situational dialogues.',
    scientificFocusAr: 'استيعاب المفردات الوظيفية والمصطلحات العملية في التكنولوجيا والمهن.',
    scientificFocusEn: 'Functional vocabulary and workplace/tech communicative expressions.',
    literaryFocusAr: 'التوسع في التعبير المقالي، تحليل النصوص الثقافية والحضارية الفرانكوفونية، والتذوق الجمالي.',
    literaryFocusEn: 'Extended compositions, Francophone cultural reading passages, and stylistic analysis.',
  },
  german: {
    subjectId: 'german',
    nature: 'common_subject',
    titleAr: 'اللغة الألمانية (اللغة الثانية)',
    titleEn: 'German (Second Foreign Language)',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مقرر موحد للشعبتين (40 درجة): القواعد اللغوية، مواقف الحياة اليومية، والمفردات التواصلية المعتمدة.',
    commonDescriptionEn: 'Core German Language: Grammar cases, everyday situational communication, and core lexicon.',
    scientificFocusAr: 'المفردات الهندسية والتقنية والبيئية الوظيفية.',
    scientificFocusEn: 'Engineering, technological, and functional environmental vocabulary.',
    literaryFocusAr: 'النصوص الحضارية والأدبية والتعبير الإنشائي الموسع.',
    literaryFocusEn: 'Cultural texts, historical literature, and extended written composition.',
  },
  italian: {
    subjectId: 'italian',
    nature: 'common_subject',
    titleAr: 'اللغة الإيطالية (اللغة الثانية)',
    titleEn: 'Italian (Second Foreign Language)',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مقرر موحد للشعبتين (40 درجة): القواعد الأساسية، المواقف اليومية، والمهارات التواصلية المعتمدة.',
    commonDescriptionEn: 'Core Italian Language: Foundational syntax, communicative situations, and dialogues.',
    scientificFocusAr: 'التطبيقات العملية والمفردات الاقتصادية والصناعية.',
    scientificFocusEn: 'Industrial, design, and practical functional terminology.',
    literaryFocusAr: 'النصوص الأدبية والتاريخية الإيطالية والتذوق الثقافي.',
    literaryFocusEn: 'Italian literary heritage, art history passages, and cultural commentary.',
  },
  spanish: {
    subjectId: 'spanish',
    nature: 'common_subject',
    titleAr: 'اللغة الإسبانية (اللغة الثانية)',
    titleEn: 'Spanish (Second Foreign Language)',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مقرر موحد للشعبتين (40 درجة): الأزمنة والقواعد اللغوية، المحادثات اليومية، والتعبير التواصلي.',
    commonDescriptionEn: 'Core Spanish Language: Tenses, everyday communicative interactions, and writing.',
    scientificFocusAr: 'المفردات العلمية والوظيفية المعاصرة.',
    scientificFocusEn: 'Contemporary functional and scientific vocabulary.',
    literaryFocusAr: 'الثقافة الإسبانية واللاتينية والنصوص التعبيرية.',
    literaryFocusEn: 'Hispanic and Latin-American culture and literary texts.',
  },
  chinese: {
    subjectId: 'chinese',
    nature: 'common_subject',
    titleAr: 'اللغة الصينية (اللغة الثانية)',
    titleEn: 'Chinese (Second Foreign Language)',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مقرر موحد للشعبتين: النغمات الصوتية (Pinyin)، الرموز الصينية الأساسية (Hanzi)، والمواقف اليومية المعتمدة.',
    commonDescriptionEn: 'Core Chinese Language: Pinyin tones, essential Hanzi radicals, and situational communication.',
    scientificFocusAr: 'المفردات التكنولوجية والصناعية الصينية، مصطلحات الطاقة الشمسية، والتصنيع الذكي والتجارة الإلكترونية.',
    scientificFocusEn: 'Technological, industrial, solar energy, smart manufacturing, and e-commerce vocabulary.',
    literaryFocusAr: 'النصوص الثقافية والأدبية، الشعر الصيني الكلاسيكي، وتاريخ الحضارة الصينية والتحليل الدلالي.',
    literaryFocusEn: 'Cultural and literary heritage texts, classical Chinese poetry, and semantic analysis.',
  },

  // 4. Economics & Statistics (الاقتصاد والإحصاء)
  economics_stat: {
    subjectId: 'economics_stat',
    nature: 'common_subject',
    titleAr: 'الاقتصاد والإحصاء',
    titleEn: 'Economics & Statistics',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مادة مشتركة غير مضافة للمجموع ولكنها مادة نجاح ورسوب إجبارية (50 درجة: 25 اقتصاد + 25 إحصاء). مادة الإحصاء موحدة بالكامل بين الشعبتين.',
    commonDescriptionEn: 'Core Non-Added Subject (Pass/Fail Mandatory, 50 Marks: 25 Economics + 25 Statistics). Statistics is 100% unified across both tracks.',
    scientificFocusAr: 'مقرر الإحصاء التطبيقي (معاملات الارتباط، خط الانحدار، الاحتمالات الشرطية، المتغيرات العشوائية والتوزيع الطبيعي) يعتمد على التفكير الرياضي والتحليلي لطلاب العلمي.',
    scientificFocusEn: 'Applied Statistics (Correlation, Regression, Probability, Normal Distribution) leverages quantitative reasoning tailored for STEM students.',
    literaryFocusAr: 'مقرر الاقتصاد (المشكلة الاقتصادية والندرة، عناصر الإنتاج، الدخل القومي، المالية العامة، النقود والبنوك، والعلاقات الدولية) يرتبط مباشرة بالعلوم الاجتماعية والإنسانية لطلاب الأدبي.',
    literaryFocusEn: 'Economics (Scarcity, Factors of Production, National Income, Public Finance, Money & Banking) directly integrates with humanities and social sciences.',
    recommendedTrackNoteAr: 'ينصح طلاب العلمي بالتركيز على ضمان درجات الإحصاء الرياضية، بينما يستفيد طلاب الأدبي من خلفيتهم في الجغرافيا والفلسفة في مادة الاقتصاد.',
    recommendedTrackNoteEn: 'STEM students often excel in Statistics mathematical formulas, while Humanities students leverage socioeconomic background in Economics.',
  },
  economics_statistics: {
    subjectId: 'economics_statistics',
    nature: 'common_subject',
    titleAr: 'الاقتصاد والإحصاء',
    titleEn: 'Economics & Statistics',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مادة مشتركة غير مضافة للمجموع ولكنها مادة نجاح ورسوب إجبارية (50 درجة: 25 اقتصاد + 25 إحصاء). مادة الإحصاء موحدة بالكامل بين الشعبتين.',
    commonDescriptionEn: 'Core Non-Added Subject (Pass/Fail Mandatory, 50 Marks: 25 Economics + 25 Statistics). Statistics is 100% unified across both tracks.',
    scientificFocusAr: 'مقرر الإحصاء التطبيقي (معاملات الارتباط، خط الانحدار، الاحتمالات الشرطية، المتغيرات العشوائية والتوزيع الطبيعي) يعتمد على التفكير الرياضي والتحليلي لطلاب العلمي.',
    scientificFocusEn: 'Applied Statistics (Correlation, Regression, Probability, Normal Distribution) leverages quantitative reasoning tailored for STEM students.',
    literaryFocusAr: 'مقرر الاقتصاد (المشكلة الاقتصادية والندرة، عناصر الإنتاج، الدخل القومي، المالية العامة، النقود والبنوك، والعلاقات الدولية) يرتبط مباشرة بالعلوم الاجتماعية والإنسانية لطلاب الأدبي.',
    literaryFocusEn: 'Economics (Scarcity, Factors of Production, National Income, Public Finance, Money & Banking) directly integrates with humanities and social sciences.',
    recommendedTrackNoteAr: 'ينصح طلاب العلمي بالتركيز على ضمان درجات الإحصاء الرياضية، بينما يستفيد طلاب الأدبي من خلفيتهم في الجغرافيا والفلسفة في مادة الاقتصاد.',
    recommendedTrackNoteEn: 'STEM students often excel in Statistics mathematical formulas, while Humanities students leverage socioeconomic background in Economics.',
  },

  // 5. Civic & Religious Education (المواد العامة)
  civics: {
    subjectId: 'civics',
    nature: 'common_subject',
    titleAr: 'التربية الوطنية والدستور',
    titleEn: 'National Civics & Constitution',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مقرر عام إلزامي للنجاح لجميع الشعب (25 درجة): الدستور والقانون، النظم السياسية والأحزاب، الديمقراطية، والمشاركة الوطنية.',
    commonDescriptionEn: 'Mandatory Common Civic Education: Constitution, Rule of Law, Political Parties, Democracy, and Civic Participation.',
    scientificFocusAr: 'أخلاقيات البحث العلمي، قوانين الملكية الفكرية، التحول الرقمي والحوكمة الإلكترونية، والتنظيم القانوني للذكاء الاصطناعي والتكنولوجيا الحيوية.',
    scientificFocusEn: 'Scientific research ethics, intellectual property laws, digital transformation, and governance of AI and biotechnologies.',
    literaryFocusAr: 'التطور التاريخي للدساتير المصرية، الفلسفة السياسية للنظم البرلمانية، التعددية الحزبية، والمفاهيم الفكرية للمواطنة وحقوق الإنسان.',
    literaryFocusEn: 'Historical evolution of Egyptian constitutions, political philosophy of parliamentary systems, multiparty democracy, and human rights.',
  },
  islamic_studies: {
    subjectId: 'islamic_studies',
    nature: 'common_subject',
    titleAr: 'التربية الدينية الإسلامية',
    titleEn: 'Islamic Religious Studies',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مقرر عام إلزامي موحد لجميع الطلاب: القرآن الكريم وتفسيره وأحكام التجويد، الحديث الشريف، السيرة النبوية، ومقاصد الشريعة الكبرى.',
    commonDescriptionEn: 'Mandatory Common Curriculum: Quranic Tafsir, Hadith, Seerah, and the universal Maqasid al-Sharia.',
    scientificFocusAr: 'التفكر العلمي في سنن الكون وخلق السماوات والأرض، فقه المعاملات المصرفية الرقمية المعاصرة، وأخلاقيات الممارسة الطبية والبيولوجية.',
    scientificFocusEn: 'Scientific contemplation of universal natural laws, contemporary financial jurisprudence, and bioethics in medical practice.',
    literaryFocusAr: 'التحليل البلاغي والإعجاز البياني للنصوص القرآنية والنبوية، تاريخ التشريع الإسلامي، والمدارس الفكرية والفلسفية في التراث الإسلامي.',
    literaryFocusEn: 'Rhetorical and stylistic analysis of sacred texts, history of Islamic jurisprudence, and theological/philosophical traditions.',
  },
  christian_studies: {
    subjectId: 'christian_studies',
    nature: 'common_subject',
    titleAr: 'التربية الدينية المسيحية',
    titleEn: 'Christian Religious Studies',
    defaultTrackScope: 'common',
    commonDescriptionAr: 'مقرر عام إلزامي موحد لجميع الطلاب: الكتاب المقدس وتفسيره، العقيدة الكنسية، الأسرار السبعة، والتاريخ القبطي الأخلاقي.',
    commonDescriptionEn: 'Mandatory Common Curriculum: Holy Scriptures, Church Dogmatics, Sacraments, and Coptic Heritage.',
    scientificFocusAr: 'التكامل بين الإيمان والعقل العلمي، المسؤولية الأخلاقية تجاه البيئة وحماية الكوكب، والأبعاد الأخلاقية للطب والوراثة.',
    scientificFocusEn: 'Harmony between faith and scientific reason, environmental stewardship for creation, and bioethics in medical genetics.',
    literaryFocusAr: 'دراسة النصوص الأدبية في أسفار الحكمة والشعر العبري واليوناني، تاريخ التراث القبطي والآبائي، وفلسفة اللاهوت الأخلاقي.',
    literaryFocusEn: 'Literary study of Wisdom literature, Coptic and Patristic cultural heritage, and moral theological philosophy.',
  },

  // ==========================================
  // PURE SCIENTIFIC SUBJECTS (شعبة علمي فقط)
  // ==========================================
  mathematics: {
    subjectId: 'mathematics',
    nature: 'pure_scientific',
    titleAr: 'الرياضيات (البحتة والتطبيقية)',
    titleEn: 'Mathematics (Pure & Applied)',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'خاص بالشعبة العلمية (علمي رياضة بالكامل، مع دراسة الإحصاء لجميع الشعب): التفاضل والتكامل، الجبر والهندسة الفراغية، الاستاتيكا، والديناميكا.',
    commonDescriptionEn: 'Exclusively for Scientific (Math Track): Calculus, Algebra, Solid Geometry, Statics, and Dynamics.',
  },
  calculus: {
    subjectId: 'calculus',
    nature: 'pure_scientific',
    titleAr: 'التفاضل والتكامل',
    titleEn: 'Calculus & Mathematical Analysis',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'خاص بالشعبة العلمية (علمي رياضة): نهايات الدوال، مشتقات الدوال المثلثية والأسية واللوغاريتمية، التكامل المحدد، وحجوم الأجسام الدورانية.',
    commonDescriptionEn: 'Pure Mathematics (Scientific Math Division): Limits, Derivatives, Indefinite/Definite Integrals, and Volumes of Revolution.',
  },
  algebra_solid: {
    subjectId: 'algebra_solid',
    nature: 'pure_scientific',
    titleAr: 'الجبر والهندسة الفراغية',
    titleEn: 'Algebra & Solid Analytic Geometry',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'خاص بالشعبة العلمية (علمي رياضة): التباديل والتوافيق، نظرية ذات الحدين، الأعداد المركبة، المصفوفات والمحددات، وهندسة الفراغ ثلاثية الأبعاد.',
    commonDescriptionEn: 'Pure Mathematics (Scientific Math Division): Combinatorics, Binomial Theorem, Complex Numbers, Matrices, and 3D Vector Geometry.',
  },
  statics: {
    subjectId: 'statics',
    nature: 'pure_scientific',
    titleAr: 'الاستاتيكا (الميكانيكا التطبيقية)',
    titleEn: 'Statics (Applied Mechanics)',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'خاص بالشعبة العلمية (علمي رياضة): الاحتكاك، عزم القوى حول نقطة، القوى المتوازية المستوية، الاتزان العام، والازدواجات ومركز الثقل.',
    commonDescriptionEn: 'Applied Mathematics (Scientific Math Division): Friction, Moments, Parallel Forces, General Equilibrium, Couples, and Center of Gravity.',
  },
  dynamics: {
    subjectId: 'dynamics',
    nature: 'pure_scientific',
    titleAr: 'الديناميكا (الميكانيكا الحركية)',
    titleEn: 'Dynamics (Newtonian Kinetics)',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'خاص بالشعبة العلمية (علمي رياضة): تفاضل وتكامل الدوال المتجهة، قوانين نيوتن الثلاثة، كمية الحركة والدافع، الشغل والطاقة والقدرة، والتصادم.',
    commonDescriptionEn: 'Applied Mathematics (Scientific Math Division): Vector Calculus, Newton\'s Laws, Impulse & Momentum, Work-Energy-Power, and Collisions.',
  },
  robotics: {
    subjectId: 'robotics',
    nature: 'pure_scientific',
    titleAr: 'الروبوتات والأتمتة الذكية',
    titleEn: 'Robotics & Automation',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'خاص بمسار العلوم والتكنولوجيا المتقدمة STEM (علمي رياضة وهندسة).',
    commonDescriptionEn: 'Specialized STEM Robotics Track.',
  },
  physics: {
    subjectId: 'physics',
    nature: 'pure_scientific',
    titleAr: 'الفيزياء',
    titleEn: 'Physics',
    defaultTrackScope: 'scientific',
    commonDescriptionAr: 'خاص بالشعبة العلمية (علمي علوم وعلمي رياضة): الكهربية والمغناطيسية، الدينامو والمحولات، ودوائر التيار المتردد والفيزياء الحديثة.',
    commonDescriptionEn: 'Exclusively for Scientific Track (Science & Math): Electromagnetism, AC Circuits, and Modern Quantum Physics.',
  },
  chemistry: {
    subjectId: 'chemistry',
    nature: 'pure_scientific',
    titleAr: 'الكيمياء',
    titleEn: 'Chemistry',
    defaultTrackScope: 'scientific',
    commonDescriptionAr: 'خاص بالشعبة العلمية (علمي علوم وعلمي رياضة): العناصر الانتقالية، التحليل الكيميائي، الاتزان، الكيمياء الكهربية، والكيمياء العضوية.',
    commonDescriptionEn: 'Exclusively for Scientific Track: Transition Elements, Analytical Chemistry, Equilibrium, Electrochemistry, and Organic Chemistry.',
  },
  biology: {
    subjectId: 'biology',
    nature: 'pure_scientific',
    titleAr: 'الأحياء',
    titleEn: 'Biology',
    defaultTrackScope: 'scientific_sciences',
    commonDescriptionAr: 'خاص بالشعبة العلمية (شعبة علمي علوم): الدعامة والحركة، التنسيق الهرموني، التكاثر، المناعة، والبيولوجيا الجزيئية (DNA & RNA).',
    commonDescriptionEn: 'Exclusively for Scientific Track (Science Division): Support & Movement, Hormones, Reproduction, Immunity, and Molecular Genetics.',
  },
  geology: {
    subjectId: 'geology',
    nature: 'pure_scientific',
    titleAr: 'الجيولوجيا وعلوم البيئة',
    titleEn: 'Geology & Environmental Science',
    defaultTrackScope: 'scientific_sciences',
    commonDescriptionAr: 'خاص بالشعبة العلمية (شعبة علمي علوم): التراكيب الجيولوجية، المعادن والصخور، الحركات الأرضية، والبيئة واستنزاف الموارد.',
    commonDescriptionEn: 'Exclusively for Scientific Track (Science Division): Geological Structures, Minerals, Plate Tectonics, and Ecosystem Ecology.',
  },
  earth_space: {
    subjectId: 'earth_space',
    nature: 'pure_scientific',
    titleAr: 'علوم الأرض والفضاء',
    titleEn: 'Earth & Space Sciences',
    defaultTrackScope: 'scientific',
    commonDescriptionAr: 'خاص بالمسار العلمي المتقدم ومدارس المتفوقين STEM.',
    commonDescriptionEn: 'Scientific Track: Advanced Planetary and Space Sciences.',
  },
  biotechnology: {
    subjectId: 'biotechnology',
    nature: 'pure_scientific',
    titleAr: 'التكنولوجيا الحيوية',
    titleEn: 'Biotechnology',
    defaultTrackScope: 'scientific_sciences',
    commonDescriptionAr: 'خاص بالمسار العلمي والتطبيقي (علمي علوم).',
    commonDescriptionEn: 'Scientific & Applied Biotechnology Track.',
  },
  nanotechnology: {
    subjectId: 'nanotechnology',
    nature: 'pure_scientific',
    titleAr: 'تكنولوجيا النانو',
    titleEn: 'Nanotechnology',
    defaultTrackScope: 'scientific',
    commonDescriptionAr: 'خاص بالمسار العلمي المتقدم والتطبيقات الهندسية.',
    commonDescriptionEn: 'Scientific Nanomaterials Track.',
  },
  robotics_mechatronics: {
    subjectId: 'robotics_mechatronics',
    nature: 'pure_scientific',
    titleAr: 'الروبوتات والميكاترونكس',
    titleEn: 'Robotics & Mechatronics',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'خاص بمسار العلوم والتكنولوجيا والهندسة والرياضيات STEM (علمي رياضة).',
    commonDescriptionEn: 'STEM Engineering & Robotics Track.',
  },
  electronics_iot: {
    subjectId: 'electronics_iot',
    nature: 'pure_scientific',
    titleAr: 'الإلكترونيات وإنترنت الأشياء',
    titleEn: 'Electronics & IoT',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'خاص بمسار التكنولوجيا والهندسة (علمي رياضة).',
    commonDescriptionEn: 'Electronics & Embedded Systems Track.',
  },
  ai_data_science: {
    subjectId: 'ai_data_science',
    nature: 'pure_scientific',
    titleAr: 'الذكاء الاصطناعي وعلم البيانات',
    titleEn: 'Artificial Intelligence & Data Science',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'خاص بمسار الحوسبة والرياضيات التطبيقية (علمي رياضة).',
    commonDescriptionEn: 'AI & Machine Learning Track.',
  },
  cs_informatics: {
    subjectId: 'cs_informatics',
    nature: 'pure_scientific',
    titleAr: 'علوم الحاسب والمعلوماتية',
    titleEn: 'Computer Science & Informatics',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'خاص بمسار تكنولوجيا المعلومات والعلوم الرياضية (علمي رياضة).',
    commonDescriptionEn: 'Computer Science and Algorithms Track.',
  },
  renewable: {
    subjectId: 'renewable',
    nature: 'pure_scientific',
    titleAr: 'الطاقة المتجددة والمستدامة',
    titleEn: 'Renewable Energy',
    defaultTrackScope: 'scientific',
    commonDescriptionAr: 'خاص بالمسار الهندسي والعلمي.',
    commonDescriptionEn: 'Engineering and Renewable Energy Systems Track.',
  },
  stem_capstone: {
    subjectId: 'stem_capstone',
    nature: 'pure_scientific',
    titleAr: 'مشروعات الكابستون STEM',
    titleEn: 'STEM Capstone Projects',
    defaultTrackScope: 'scientific',
    commonDescriptionAr: 'خاص بمدارس المتفوقين في العلوم والتكنولوجيا STEM.',
    commonDescriptionEn: 'STEM High Schools Capstone Track.',
  },

  // ==========================================
  // PURE LITERARY SUBJECTS (شعبة أدبي فقط)
  // ==========================================
  history: {
    subjectId: 'history',
    nature: 'pure_literary',
    titleAr: 'التاريخ',
    titleEn: 'History',
    defaultTrackScope: 'literary',
    commonDescriptionAr: 'خاص بالشعبة الأدبية (60 درجة): تاريخ مصر والعالم العربي الحديث والمعاصر (الحملة الفرنسية، محمد علي، الثورة العرابية، ثورة 1919، وثورة 1952 والقضية الفلسطينية).',
    commonDescriptionEn: 'Exclusively for Literary Track (60 Marks): Modern Egyptian & Arab History from French Expedition to contemporary geopolitical conflicts.',
  },
  geography: {
    subjectId: 'geography',
    nature: 'pure_literary',
    titleAr: 'الجغرافيا السياسية',
    titleEn: 'Political Geography',
    defaultTrackScope: 'literary',
    commonDescriptionAr: 'خاص بالشعبة الأدبية (60 درجة): مفهوم الجغرافيا السياسية، الدولة ومقوماتها الطبيعية والبشرية، الحدود السياسية، التكتلات الاقتصادية، والأحلاف العسكرية.',
    commonDescriptionEn: 'Exclusively for Literary Track (60 Marks): Political Geography, State Spatial Organization, Geopolitical Boundaries, Economic Blocs, and Global Order.',
  },
  philosophy: {
    subjectId: 'philosophy',
    nature: 'pure_literary',
    titleAr: 'الفلسفة والمنطق',
    titleEn: 'Philosophy & Logic',
    defaultTrackScope: 'literary',
    commonDescriptionAr: 'خاص بالشعبة الأدبية (60 درجة): الفلسفة البيئية، البيوتيقا والأخلاق البيولوجية، الأخلاق المهنية، الاستدلال الاستقرائي والاستنباطي، والمنطق المرن والذكاء الاصطناعي.',
    commonDescriptionEn: 'Exclusively for Literary Track (60 Marks): Environmental Philosophy, Bioethics, Professional Ethics, Inductive/Deductive Logic, and AI Logic.',
  },
  psychology: {
    subjectId: 'psychology',
    nature: 'pure_literary',
    titleAr: 'علم النفس والاجتماع',
    titleEn: 'Psychology & Sociology',
    defaultTrackScope: 'literary',
    commonDescriptionAr: 'خاص بالشعبة الأدبية (60 درجة): نظريات التعلم، الذكاءات المتعددة، النمو، الشخصية، العمليات الاجتماعية، الظواهر والتغير الاجتماعي، والتطرف الفكري.',
    commonDescriptionEn: 'Exclusively for Literary Track (60 Marks): Theories of Learning, Multiple Intelligences, Personality, Social Dynamics, and Sociology of Culture.',
  },
  fine_arts_architecture: {
    subjectId: 'fine_arts_architecture',
    nature: 'pure_literary',
    titleAr: 'الفنون الجميلة والعمارة',
    titleEn: 'Fine Arts & Architecture',
    defaultTrackScope: 'literary',
    commonDescriptionAr: 'مسار أدبي وفني تطبيقي: تاريخ الفنون، المنظور الحر، التشكيل المجسم، والنسبة الذهبية.',
    commonDescriptionEn: 'Artistic & Architectural Track: History of Art, Perspective, and Aesthetic Proportions.',
  },
  business_entrepreneurship: {
    subjectId: 'business_entrepreneurship',
    nature: 'pure_literary',
    titleAr: 'إدارة الأعمال وريادة الأعمال',
    titleEn: 'Business Administration & Entrepreneurship',
    defaultTrackScope: 'literary',
    commonDescriptionAr: 'مسار العلوم الإدارية والإنسانية: دراسات الجدوى، استراتيجيات التسويق، وإدارة المشروعات الناشئة.',
    commonDescriptionEn: 'Applied Humanities & Business Track: Feasibility studies, marketing strategies, and venture management.',
  },
  music_theory: {
    subjectId: 'music_theory',
    nature: 'pure_literary',
    titleAr: 'التربية الموسيقية والنظريات الموسيقية',
    titleEn: 'Music Theory & Appreciation',
    defaultTrackScope: 'literary',
    commonDescriptionAr: 'مسار التذوق الفني والأدبي: المقامات الشرقية، السلالم الغربية، وقراءة النوتة الموسيقية والتاريخ الموسيقي.',
    commonDescriptionEn: 'Applied Humanities & Music Track: Solfège, Eastern Maqamat, Western scales, and musicology.',
  },
  agriculture: {
    subjectId: 'agriculture',
    nature: 'pure_scientific',
    titleAr: 'التربية الزراعية والتكنولوجيا الزراعية',
    titleEn: 'Agricultural Science & Technology',
    defaultTrackScope: 'scientific_sciences',
    commonDescriptionAr: 'مسار علمي وتطبيقي (علمي علوم): فسيولوجيا النبات، تكنولوجيا الري الحديث، استصلاح الأراضي، والإنتاج الحيواني.',
    commonDescriptionEn: 'Scientific Agricultural Track: Plant physiology, modern irrigation technology, and animal production.',
  },
  industrial: {
    subjectId: 'industrial',
    nature: 'pure_scientific',
    titleAr: 'التربية الصناعية والتكنولوجيا التطبيقية والهندسية',
    titleEn: 'Industrial & Applied Engineering Technology',
    defaultTrackScope: 'scientific_math',
    commonDescriptionAr: 'مسار علمي وهندسي (علمي رياضة): الدوائر الإلكترونية، التحكم المنطقي PLC، تقنيات اللحام، وميكانيكا التشكيل.',
    commonDescriptionEn: 'Scientific & Engineering Track: Electronic circuits, PLC control systems, and mechanical manufacturing.',
  },
  commercial: {
    subjectId: 'commercial',
    nature: 'pure_literary',
    titleAr: 'العلوم التجارية والمحاسبة والمالية والمصرفية',
    titleEn: 'Commercial & Financial Studies',
    defaultTrackScope: 'literary',
    commonDescriptionAr: 'مسار تجاري ومالي إنساني: مبادئ المحاسبة المالية، الضرائب، إدارة المصارف، وسوق الأوراق المالية.',
    commonDescriptionEn: 'Humanities & Commerce Track: Financial accounting principles, corporate taxation, and banking systems.',
  },
  tourism: {
    subjectId: 'tourism',
    nature: 'pure_literary',
    titleAr: 'السياحة والضيافة وإدارة التراث الثقافي',
    titleEn: 'Tourism, Hospitality & Heritage Management',
    defaultTrackScope: 'literary',
    commonDescriptionAr: 'مسار سياحي وحضاري إنساني: الإرشاد السياحي، الفندقة، إدارة المتاحف، والترويج للتراث المصري.',
    commonDescriptionEn: 'Humanities & Tourism Track: Tour guiding, hospitality management, and Egyptian cultural heritage.',
  },
};

/**
 * Returns the track scope of an individual chapter based on its subject and chapter ID.
 */
export function getChapterTrackScope(subjectId: string, chapterId: string): TrackScope {
  const sub = subjectId.toLowerCase();
  const ch = chapterId.toLowerCase();

  // If subject is pure scientific or pure literary, respect its dedicated default track scope
  const classification = SUBJECT_TRACK_REGISTRY[sub];
  if (classification) {
    if (classification.nature === 'pure_scientific' || classification.nature === 'pure_literary') {
      return classification.defaultTrackScope;
    }
  }

  // Specific chapter mappings for common subjects:
  // 1. Arabic:
  if (sub === 'arabic') {
    // Deep literary critique & poetry schools have an advanced literary emphasis
    if (
      ch.includes('ch3') ||
      ch.includes('c3') ||
      ch.includes('ch7') ||
      ch.includes('c7') ||
      ch.includes('lit') ||
      ch.includes('adab') ||
      ch.includes('poetry') ||
      ch.includes('schools')
    ) {
      return 'literary';
    }
    // Grammar & parsing, rhetoric, reading, and composition are common core
    return 'common';
  }

  // 2. English:
  if (sub === 'english') {
    // Great Expectations novel in-depth literary critique is targeted for literary track
    if (
      ch.includes('ch6') ||
      ch.includes('c6') ||
      ch.includes('ch13') ||
      ch.includes('c13') ||
      ch.includes('expectations') ||
      ch.includes('novel')
    ) {
      return 'literary';
    }
    // Translation and technical passages
    if (ch.includes('stem') || ch.includes('tech') || ch.includes('science')) {
      return 'scientific';
    }
    // Grammar and vocabulary is common core
    return 'common';
  }

  // 3. Economics & Statistics:
  if (sub === 'economics_stat' || sub === 'economics_statistics' || sub.includes('econ') || sub.includes('stat')) {
    // Statistics chapters (quantitative applied math)
    if (
      ch.includes('stat') ||
      ch.includes('ch7') ||
      ch.includes('ch8') ||
      ch.includes('ch9') ||
      ch.includes('ch10') ||
      ch === 'ch7' ||
      ch === 'ch8'
    ) {
      return 'scientific';
    }
    // Economics chapters (socio-economic theory)
    if (
      ch.includes('econ') ||
      ch.includes('ch1') ||
      ch.includes('ch2') ||
      ch.includes('ch3') ||
      ch.includes('ch4') ||
      ch.includes('ch5') ||
      ch.includes('ch6') ||
      ch === 'ch1' ||
      ch === 'ch2'
    ) {
      return 'literary';
    }
  }

  // Default fallback for any common subject
  return classification?.defaultTrackScope || 'common';
}

/**
 * Filter chapters according to target track scope:
 * - 'all': returns all chapters
 * - 'common': returns common core chapters
 * - 'scientific_sciences': returns common core + general scientific + scientific_sciences chapters
 * - 'scientific_math': returns common core + general scientific + scientific_math chapters
 * - 'scientific': returns common core + all scientific tracks (general, sciences, math)
 * - 'literary': returns common core + literary specific chapters
 */
export function filterChaptersByTrackScope(
  chapters: Chapter[],
  subjectId: string,
  targetScope: TrackScope | 'all'
): Chapter[] {
  if (targetScope === 'all') return chapters;

  return chapters.filter((chapter) => {
    const scope = chapter.trackScope || getChapterTrackScope(subjectId, chapter.id);
    if (targetScope === 'common') {
      return scope === 'common';
    }
    if (targetScope === 'scientific') {
      return (
        scope === 'common' ||
        scope === 'scientific' ||
        scope === 'scientific_sciences' ||
        scope === 'scientific_math'
      );
    }
    if (targetScope === 'scientific_sciences') {
      return scope === 'common' || scope === 'scientific' || scope === 'scientific_sciences';
    }
    if (targetScope === 'scientific_math') {
      return scope === 'common' || scope === 'scientific' || scope === 'scientific_math';
    }
    if (targetScope === 'literary') {
      return scope === 'common' || scope === 'literary';
    }
    return true;
  });
}

/**
 * Returns whether a subject is a common subject taken by both Scientific & Literary students.
 */
export function isCommonSubject(subjectId: string): boolean {
  return SUBJECT_TRACK_REGISTRY[subjectId]?.nature === 'common_subject';
}

/**
 * Returns human-readable track scope labels and badges info.
 */
export function getTrackScopeInfo(scope: TrackScope, lang: 'ar' | 'en') {
  switch (scope) {
    case 'scientific_sciences':
      return {
        scope,
        label: lang === 'ar' ? 'علمي علوم' : 'Scientific (Sciences)',
        fullLabel: lang === 'ar' ? 'شعبة علمي علوم (الطب والعلوم الطبيعية)' : 'Scientific Track (Natural Sciences & Medicine)',
        badgeColor: 'teal',
        emoji: '🧬',
        description:
          lang === 'ar'
            ? 'مخصص لطلاب شعبة علمي علوم (الطب، الصيدلة، العلوم والبيولوجيا)'
            : 'Designated for students in the Scientific Sciences Division (Medicine, Pharmacy, Natural Sciences).',
      };
    case 'scientific_math':
      return {
        scope,
        label: lang === 'ar' ? 'علمي رياضة' : 'Scientific (Math)',
        fullLabel: lang === 'ar' ? 'شعبة علمي رياضة (الهندسة والتكنولوجيا)' : 'Scientific Track (Mathematics & Engineering)',
        badgeColor: 'indigo',
        emoji: '📐',
        description:
          lang === 'ar'
            ? 'مخصص لطلاب شعبة علمي رياضة (الهندسة، الحوسبة، والرياضيات التطبيقية)'
            : 'Designated for students in the Scientific Math Division (Engineering, Computing, Applied Math).',
      };
    case 'scientific':
      return {
        scope,
        label: lang === 'ar' ? 'علمي عام' : 'Scientific Core',
        fullLabel: lang === 'ar' ? 'خاص بالشعبة العلمية (علوم ورياضة)' : 'Scientific Track (Sciences & Math)',
        badgeColor: 'sky',
        emoji: '🔬',
        description:
          lang === 'ar'
            ? 'مقرر علمي أساسي مشترك لطلاب شعبتي علمي علوم وعلمي رياضة (مثل الفيزياء والكيمياء)'
            : 'Fundamental scientific core curriculum shared by both Science and Math divisions.',
      };
    case 'literary':
      return {
        scope,
        label: lang === 'ar' ? 'خاص بالشعبة الأدبية' : 'Literary Track',
        fullLabel: lang === 'ar' ? 'خاص بالشعبة الأدبية (العلوم الإنسانية والاجتماعية)' : 'Humanities & Literary Track',
        badgeColor: 'amber',
        emoji: '🏛️',
        description:
          lang === 'ar'
            ? 'مخصص لطلاب الشعبة الأدبية ويركز على التحليل النقدي والفكري'
            : 'Designated for students in the Literary / Humanities Track.',
      };
    case 'common':
    default:
      return {
        scope: 'common',
        label: lang === 'ar' ? 'مشترك (علمي وأدبي)' : 'Common Core',
        fullLabel: lang === 'ar' ? 'جذع مشترك إلزامي للشعبتين' : 'Mandatory Unified Common Core for All Tracks',
        badgeColor: 'emerald',
        emoji: '🌐',
        description:
          lang === 'ar'
            ? 'مقرر إلزامي موحد على طلاب الشعبتين العلمية والأدبية في الامتحان الوزاري'
            : 'Mandatory unified curriculum for both Scientific and Literary students in the official exam.',
      };
  }
}
