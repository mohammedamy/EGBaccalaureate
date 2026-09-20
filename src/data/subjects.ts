import type { Branch, BranchId, Curriculum, CurriculumType } from '../types/curriculum';

export type SubjectId = 
  | 'islamic_studies'
  | 'christian_studies'
  | 'religious_education'
  | 'arabic'
  | 'english'
  | 'french'
  | 'german'
  | 'italian'
  | 'spanish'
  | 'chinese'
  | 'history'
  | 'geography'
  | 'philosophy'
  | 'psychology'
  | 'mathematics'
  | 'biology'
  | 'chemistry'
  | 'physics'
  | 'geology'
  | 'economics_stat'
  | 'cs_informatics'
  | 'earth_space'
  | 'civics'
  | 'business_entrepreneurship'
  | 'fine_arts_architecture'
  | 'music_theory'
  | 'agriculture'
  | 'industrial'
  | 'commercial'
  | 'tourism'
  | 'renewable'
  | 'stem_capstone'
  | 'robotics_mechatronics'
  | 'electronics_iot'
  | 'ai_data_science';

export interface SubjectDefinition {
  id: SubjectId;
  titleEn: string;
  titleAr: string;
  shortTitleEn: string;
  shortTitleAr: string;
  emoji: string;
  iconName: 'Calculator' | 'Atom' | 'FlaskConical' | 'Dna' | 'Languages' | 'BookA' | 'BookOpen' | 'Landmark' | 'Globe' | 'Mountain' | 'Brain' | 'Users' | 'TrendingUp' | 'Binary' | 'Orbit' | 'Scale' | 'Briefcase' | 'Palette' | 'Music' | 'Sprout' | 'Wrench' | 'Hotel' | 'Zap' | 'Cpu' | 'Bot';
  badgeColor: string;
  gradient: string;
  lightBg: string;
  darkBg: string;
  borderColor: string;
  textColor: string;
  descriptionEn: string;
  descriptionAr: string;
  branchIds: {
    thanaweya: BranchId[];
    egbac: BranchId[];
  };
}

export const SUBJECTS: SubjectDefinition[] = [
  // 1. Islamic Religious Education (التربية الدينية الإسلامية)
  {
    id: 'islamic_studies',
    titleEn: 'Islamic Religious Education',
    titleAr: 'التربية الدينية الإسلامية',
    shortTitleEn: 'Islamic Studies',
    shortTitleAr: 'دين إسلامي',
    emoji: '☪️',
    iconName: 'BookOpen',
    badgeColor: 'emerald',
    gradient: 'from-emerald-800 via-teal-800 to-green-900',
    lightBg: 'bg-emerald-50 text-emerald-950 border-emerald-200',
    darkBg: 'bg-emerald-950/80 text-emerald-200 border-emerald-800/60',
    borderColor: 'border-emerald-500/50',
    textColor: 'text-emerald-400',
    descriptionEn: 'Official Egyptian secondary Islamic curriculum: Quranic Recitation & Tafsir in Uthmanic Script, Tajweed rules, Prophetic Sunnah & Seerah, the five universal Maqasid al-Sharia, and Contemporary Bioethics & AI Ethics.',
    descriptionAr: 'المنهج الوزاري المعتمد لمادة التربية الدينية الإسلامية: القرآن الكريم وعلومه وأحكام التجويد والتلاوة بالرسم العثماني التام، العقيدة والحديث الشريف، السيرة النبوية والتخطيط، مقاصد الشريعة الكلية الخمس، وفقه المعاملات والأخلاقيات الحيوية المعاصرة.',
    branchIds: {
      thanaweya: ['thanaweya_islamic'],
      egbac: ['egbac_islamic'],
    },
  },

  // 2. Christian Religious Education (التربية الدينية المسيحية)
  {
    id: 'christian_studies',
    titleEn: 'Christian Religious Education',
    titleAr: 'التربية الدينية المسيحية',
    shortTitleEn: 'Christian Studies',
    shortTitleAr: 'دين مسيحي',
    emoji: '✝️',
    iconName: 'BookOpen',
    badgeColor: 'amber',
    gradient: 'from-amber-800 via-rose-800 to-purple-900',
    lightBg: 'bg-amber-50 text-amber-950 border-amber-200',
    darkBg: 'bg-amber-950/80 text-amber-200 border-amber-800/60',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    descriptionEn: 'Official Egyptian secondary Christian curriculum: Holy Scriptures & Biblical Hermeneutics, Church Dogmatics, The Seven Sacraments, Christian Family Ethics, and Coptic Monastic Heritage & History.',
    descriptionAr: 'المنهج الوزاري المعتمد لمادة التربية الدينية المسيحية: دراسة الكتاب المقدس بعهديه وتفسيره، العقيدة الكنسية، أسرار الكنيسة السبعة، الأخلاق المسيحية وبناء الأسرة، وتاريخ الكنيسة القبطية والرهبنة وتراث مصر الروحي.',
    branchIds: {
      thanaweya: ['thanaweya_christian'],
      egbac: ['egbac_christian'],
    },
  },

  // 3. Arabic Language & Literature (اللغة العربية وآدابها)
  {
    id: 'arabic',
    titleEn: 'Arabic Language & Literature',
    titleAr: 'اللغة العربية وآدابها',
    shortTitleEn: 'Arabic',
    shortTitleAr: 'عربي',
    emoji: '📜',
    iconName: 'BookOpen',
    badgeColor: 'amber',
    gradient: 'from-amber-600 via-orange-600 to-yellow-600',
    lightBg: 'bg-amber-50 text-amber-900 border-amber-200',
    darkBg: 'bg-amber-950/70 text-amber-200 border-amber-800/60',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    descriptionEn: 'National Core Subject (80 Marks): Comprehensive Grammar & I\'rab, Classical & Modern Literature, Rhetoric & Metaphor, Critical Reading, and Orthography',
    descriptionAr: 'المادة القومية الكبرى (80 درجة): النحو وقواعد الإعراب، الأدب وتاريخ المدارس الشعرية وفنون النثر، البلاغة وفنون البيان، القراءة المتحررة، وقواعد الإملاء',
    branchIds: {
      thanaweya: ['thanaweya_arabic'],
      egbac: ['egbac_arabic'],
    },
  },

  // 3. English Language (اللغة الإنجليزية)
  {
    id: 'english',
    titleEn: 'English Language',
    titleAr: 'اللغة الإنجليزية',
    shortTitleEn: 'English',
    shortTitleAr: 'إنجليزي',
    emoji: '🇬🇧',
    iconName: 'Languages',
    badgeColor: 'violet',
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    lightBg: 'bg-violet-50 text-violet-900 border-violet-200',
    darkBg: 'bg-violet-950/70 text-violet-200 border-violet-800/60',
    borderColor: 'border-violet-500/50',
    textColor: 'text-violet-400',
    descriptionEn: 'First Foreign Language: Vocabulary, Grammar, Advanced Writing, Reading Comprehension & Translation Skills',
    descriptionAr: 'اللغة الأجنبية الأولى: المفردات اللغوية، القواعد، مهارات الكتابة المتقدمة، الفهم والاستيعاب، وفنون الترجمة',
    branchIds: {
      thanaweya: ['thanaweya_english'],
      egbac: ['egbac_english'],
    },
  },

  // 4. French Language (اللغة الفرنسية)
  {
    id: 'french',
    titleEn: 'French Language (Second Foreign Language)',
    titleAr: 'اللغة الفرنسية (اللغة الأجنبية الثانية)',
    shortTitleEn: 'French',
    shortTitleAr: 'فرنساوي',
    emoji: '🇫🇷',
    iconName: 'Languages',
    badgeColor: 'sky',
    gradient: 'from-blue-600 via-sky-600 to-rose-600',
    lightBg: 'bg-sky-50 text-sky-900 border-sky-200',
    darkBg: 'bg-sky-950/70 text-sky-200 border-sky-800/60',
    borderColor: 'border-sky-500/50',
    textColor: 'text-sky-400',
    descriptionEn: 'Second Foreign Language (Club @dos Plus 3): Sports, Food, Countryside & Travel Communicative Units, Grammar, Daily Life Situations & Listening',
    descriptionAr: 'اللغة الأجنبية الثانية (Club @dos Plus 3): الرياضة، التغذية، الريف، السفر ووسائل المواصلات، القواعد اللغوية، المواقف الحياتية، وفهم النصوص الشفهية',
    branchIds: {
      thanaweya: ['thanaweya_french'],
      egbac: ['egbac_french'],
    },
  },

  // 5. German Language (اللغة الألمانية)
  {
    id: 'german',
    titleEn: 'German Language (Deutsch)',
    titleAr: 'اللغة الألمانية (اللغة الأجنبية الثانية)',
    shortTitleEn: 'German',
    shortTitleAr: 'الألمانية',
    emoji: '🇩🇪',
    iconName: 'Languages',
    badgeColor: 'amber',
    gradient: 'from-stone-950 via-red-800 to-amber-600',
    lightBg: 'bg-amber-50 text-amber-950 border-amber-200',
    darkBg: 'bg-stone-900/90 text-amber-200 border-amber-800/60',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    descriptionEn: 'Official Egyptian secondary German curriculum (Hallo Deutsch) and advanced academic DaF (B1/B2) for linguistic, situational, and professional fluency.',
    descriptionAr: 'المنهج الرسمي لوزارة التربية والتعليم (Hallo Deutsch) ومسار البكالوريا المتقدم للإتقان اللغوي والتواصلي والأكاديمي (DaF B1/B2).',
    branchIds: {
      thanaweya: ['thanaweya_german'],
      egbac: ['egbac_german'],
    },
  },

  // 6. Italian Language (اللغة الإيطالية)
  {
    id: 'italian',
    titleEn: 'Italian Language (Italiano)',
    titleAr: 'اللغة الإيطالية (اللغة الأجنبية الثانية)',
    shortTitleEn: 'Italian',
    shortTitleAr: 'إيطالي',
    emoji: '🇮🇹',
    iconName: 'Languages',
    badgeColor: 'emerald',
    gradient: 'from-emerald-600 via-stone-100 to-red-600',
    lightBg: 'bg-emerald-50 text-emerald-950 border-emerald-200',
    darkBg: 'bg-emerald-950/80 text-emerald-200 border-emerald-800/60',
    borderColor: 'border-emerald-500/50',
    textColor: 'text-emerald-400',
    descriptionEn: 'Official Egyptian secondary Italian curriculum (In Italia / Progetto Italiano) and advanced academic Italian (B1/B2) for grammatical, situational, and communicative mastery.',
    descriptionAr: 'المنهج الرسمي لوزارة التربية والتعليم للغة الإيطالية ومسار البكالوريا المتقدم للإتقان اللغوي والتواصلي والأكاديمي (B1/B2).',
    branchIds: {
      thanaweya: ['thanaweya_italian'],
      egbac: ['egbac_italian'],
    },
  },

  // 7. Spanish Language (اللغة الإسبانية)
  {
    id: 'spanish',
    titleEn: 'Spanish Language (Español)',
    titleAr: 'اللغة الإسبانية (اللغة الأجنبية الثانية)',
    shortTitleEn: 'Spanish',
    shortTitleAr: 'إسباني',
    emoji: '🇪🇸',
    iconName: 'Languages',
    badgeColor: 'amber',
    gradient: 'from-red-600 via-amber-500 to-yellow-500',
    lightBg: 'bg-amber-50 text-amber-950 border-amber-200',
    darkBg: 'bg-amber-950/80 text-amber-200 border-amber-800/60',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    descriptionEn: 'Official Egyptian secondary Spanish curriculum (¡Hola! / ¡Español!) and advanced academic Spanish (B1/B2) for grammatical, situational, and Hispanic cultural mastery.',
    descriptionAr: 'المنهج الرسمي لوزارة التربية والتعليم للغة الإسبانية (¡Hola!) ومسار البكالوريا المتقدم للإتقان اللغوي والتواصلي والثقافي الإسباني (B1/B2).',
    branchIds: {
      thanaweya: ['thanaweya_spanish'],
      egbac: ['egbac_spanish'],
    },
  },

  // 8. Chinese Language (اللغة الصينية)
  {
    id: 'chinese',
    titleEn: 'Chinese Language (Mandarin)',
    titleAr: 'اللغة الصينية (اللغة الأجنبية الثانية)',
    shortTitleEn: 'Chinese',
    shortTitleAr: 'صيني',
    emoji: '🇨🇳',
    iconName: 'Languages',
    badgeColor: 'red',
    gradient: 'from-red-600 via-amber-500 to-yellow-500',
    lightBg: 'bg-red-50 text-red-950 border-red-200',
    darkBg: 'bg-red-950/80 text-red-200 border-red-800/60',
    borderColor: 'border-red-500/50',
    textColor: 'text-red-400',
    descriptionEn: 'Official Egyptian secondary Chinese curriculum (Kuai Le Han Yu / Gateway to China) and advanced academic Mandarin (HSK 1-3 / B1) for phonetics, radicals, grammar, and situational fluency.',
    descriptionAr: 'المنهج الرسمي المعتمد لوزارة التربية والتعليم للغة الصينية ومسار البكالوريا المتقدم للإتقان الصوتي (Pinyin)، والرموز (Hanzi)، وتراكيب الجمل، والتواصل الحي (HSK 1-3).',
    branchIds: {
      thanaweya: ['thanaweya_chinese'],
      egbac: ['egbac_chinese'],
    },
  },

  // 9. Modern & Contemporary Egyptian History (تاريخ مصر الحديث والمعاصر)
  {
    id: 'history',
    titleEn: 'Modern & Contemporary Egyptian History',
    titleAr: 'تاريخ مصر الحديث والمعاصر',
    shortTitleEn: 'History',
    shortTitleAr: 'تاريخ',
    emoji: '🏛️',
    iconName: 'Landmark',
    badgeColor: 'amber',
    gradient: 'from-amber-700 via-yellow-700 to-stone-800',
    lightBg: 'bg-amber-50 text-amber-900 border-amber-200',
    darkBg: 'bg-stone-950/80 text-amber-200 border-amber-800/60',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    descriptionEn: 'National Core Subject: Modern & Contemporary History of Egypt, Arab Geopolitics, National Revolutions, and World Treaties',
    descriptionAr: 'المادة القومية الكبرى: تاريخ مصر الحديث والمعاصر، الحملة الفرنسية، عهد محمد علي، الثورات الوطنية، الصراع العربي الإسرائيلي، وثورتا ٢٥ يناير و٣٠ يونيو',
    branchIds: {
      thanaweya: ['thanaweya_history'],
      egbac: ['egbac_history'],
    },
  },

  // 9. Political Geography & Geopolitics (الجغرافيا السياسية)
  {
    id: 'geography',
    titleEn: 'Political Geography & Geopolitics',
    titleAr: 'الجغرافيا السياسية والدراسات الجيوسياسية',
    shortTitleEn: 'Geography',
    shortTitleAr: 'جغرافيا',
    emoji: '🌍',
    iconName: 'Globe',
    badgeColor: 'teal',
    gradient: 'from-teal-700 via-emerald-700 to-cyan-800',
    lightBg: 'bg-teal-50 text-teal-900 border-teal-200',
    darkBg: 'bg-teal-950/70 text-teal-200 border-teal-800/60',
    borderColor: 'border-teal-500/50',
    textColor: 'text-teal-400',
    descriptionEn: 'National Core Subject: Political Geography, State Morphology & Power, International Boundaries, Global Blocs, Military Alliances & The New World Order',
    descriptionAr: 'المادة القومية الكبرى: الجغرافيا السياسية، مقومات الدولة وقوتها، الحدود السياسية والنزاعات الدولية، التكتلات الاقتصادية والأحلاف العسكرية، والنظام العالمي الجديد',
    branchIds: {
      thanaweya: ['thanaweya_geography'],
      egbac: ['egbac_geography'],
    },
  },

  // 10. Philosophy & Applied Logic (الفلسفة والمنطق التطبيقي)
  {
    id: 'philosophy',
    titleEn: 'Philosophy & Applied Logic',
    titleAr: 'الفلسفة والمنطق التطبيقي',
    shortTitleEn: 'Philosophy & Logic',
    shortTitleAr: 'فلسفة ومنطق',
    emoji: '🧠',
    iconName: 'Brain',
    badgeColor: 'purple',
    gradient: 'from-purple-800 via-indigo-800 to-violet-900',
    lightBg: 'bg-purple-50 text-purple-900 border-purple-200',
    darkBg: 'bg-purple-950/70 text-purple-200 border-purple-800/60',
    borderColor: 'border-purple-500/50',
    textColor: 'text-purple-400',
    descriptionEn: 'National Core Subject: Environmental Ethics, Bioethics, Professional Ethics, Values & Philosophizing, Inductive & Deductive Logic, Axiomatic Systems, Scientific Method, and AI Cybernetics',
    descriptionAr: 'المادة القومية الكبرى للشعبة الأدبية: فلسفة البيئة، الأخلاق البيوطبية (البيوتيقا)، أخلاقيات المهنة، التفلسف والقيم، الاستدلال الاستقرائي والمنهج العلمي، النسق الرياضي والمنطق الرمزي، والمنطق وتكنولوجيا الاتصال والذكاء الاصطناعي',
    branchIds: {
      thanaweya: ['thanaweya_philosophy'],
      egbac: ['egbac_philosophy'],
    },
  },

  // 11. Psychology & Sociology (علم النفس وعلم الاجتماع)
  {
    id: 'psychology',
    titleEn: 'Psychology & Sociology',
    titleAr: 'علم النفس وعلم الاجتماع',
    shortTitleEn: 'Psych & Soc',
    shortTitleAr: 'نفس واجتماع',
    emoji: '👥',
    iconName: 'Users',
    badgeColor: 'pink',
    gradient: 'from-pink-700 via-rose-700 to-purple-800',
    lightBg: 'bg-pink-50 text-pink-900 border-pink-200',
    darkBg: 'bg-pink-950/70 text-pink-200 border-pink-800/60',
    borderColor: 'border-pink-500/50',
    textColor: 'text-pink-400',
    descriptionEn: 'National Core Subject: Multiple Intelligences, Learning Theories, Developmental Stages, Personality & Values, Frustration & Conflict, Sociological Theory, Culture & Volunteering, and Contemporary Social Issues',
    descriptionAr: 'المادة القومية الكبرى للشعبة الأدبية: الذكاءات المتعددة ونظريات التعلم، مراحل النمو والارتقاء الإنساني، الشخصية والاتجاهات والقيم، الصراع والإحباط والحيل الدفاعية، النظرية والعمليات الاجتماعية، ثقافة العمل التطوعي والحر، والعولمة وقضايا التطرف',
    branchIds: {
      thanaweya: ['thanaweya_psychology'],
      egbac: ['egbac_psychology'],
    },
  },

  // 12. Mathematics (الرياضيات)
  {
    id: 'mathematics',
    titleEn: 'Mathematics',
    titleAr: 'الرياضيات',
    shortTitleEn: 'Math',
    shortTitleAr: 'رياضيات',
    emoji: '📐',
    iconName: 'Calculator',
    badgeColor: 'indigo',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    lightBg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    darkBg: 'bg-indigo-950/70 text-indigo-200 border-indigo-800/60',
    borderColor: 'border-indigo-500/50',
    textColor: 'text-indigo-400',
    descriptionEn: 'Pure and Applied Mathematics, Calculus, Algebra, Geometry, Mechanics, Statistics & Analysis',
    descriptionAr: 'الرياضيات البحتة والتطبيقية، التفاضل والتكامل، الجبر، الهندسة، الميكانيكا، والإحصاء والتحليل',
    branchIds: {
      thanaweya: ['algebra_solid', 'calculus', 'statics', 'dynamics'],
      egbac: ['egbac_vectors_geometry', 'egbac_analysis', 'egbac_mechanics', 'egbac_probability'],
    },
  },

  // 13. Biology (الأحياء)
  {
    id: 'biology',
    titleEn: 'Biology',
    titleAr: 'الأحياء',
    shortTitleEn: 'Bio',
    shortTitleAr: 'أحياء',
    emoji: '🧬',
    iconName: 'Dna',
    badgeColor: 'rose',
    gradient: 'from-rose-600 via-pink-600 to-purple-600',
    lightBg: 'bg-rose-50 text-rose-900 border-rose-200',
    darkBg: 'bg-rose-950/70 text-rose-200 border-rose-800/60',
    borderColor: 'border-rose-500/50',
    textColor: 'text-rose-400',
    descriptionEn: 'Support & Movement in Living Organisms, Molecular Genetics, DNA Structure & Protein Synthesis',
    descriptionAr: 'الدعامة والحركة في الكائنات الحية، البيولوجيا الجزيئية، وتركيب الحمض النووي وتخليق البروتين',
    branchIds: {
      thanaweya: ['thanaweya_biology'],
      egbac: ['egbac_biology'],
    },
  },

  // 14. Chemistry (الكيمياء)
  {
    id: 'chemistry',
    titleEn: 'Chemistry',
    titleAr: 'الكيمياء',
    shortTitleEn: 'Chem',
    shortTitleAr: 'كيمياء',
    emoji: '🧪',
    iconName: 'FlaskConical',
    badgeColor: 'emerald',
    gradient: 'from-emerald-600 via-teal-600 to-green-600',
    lightBg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    darkBg: 'bg-emerald-950/70 text-emerald-200 border-emerald-800/60',
    borderColor: 'border-emerald-500/50',
    textColor: 'text-emerald-400',
    descriptionEn: 'Transition Metals Metallurgy, Chemical Kinetics, Dynamic Equilibrium & Solution Buffers',
    descriptionAr: 'عناصر السلسلة الانتقالية وتعدين الحديد، الحركية الكيميائية، وسرعة التفاعلات والاتزان ومحاليل البفر',
    branchIds: {
      thanaweya: ['thanaweya_chemistry'],
      egbac: ['egbac_chemistry'],
    },
  },

  // 15. Physics (الفيزياء)
  {
    id: 'physics',
    titleEn: 'Physics',
    titleAr: 'الفيزياء',
    shortTitleEn: 'Physics',
    shortTitleAr: 'فيزياء',
    emoji: '⚡',
    iconName: 'Atom',
    badgeColor: 'cyan',
    gradient: 'from-cyan-600 via-sky-600 to-blue-600',
    lightBg: 'bg-cyan-50 text-cyan-900 border-cyan-200',
    darkBg: 'bg-cyan-950/70 text-cyan-200 border-cyan-800/60',
    borderColor: 'border-cyan-500/50',
    textColor: 'text-cyan-400',
    descriptionEn: 'Electric Circuits, Magnetic Effects, Induction, Quantum Radiation & Matter-Wave Duality',
    descriptionAr: 'التيار الكهربي، التأثير المغناطيسي، الحث الكهرومغناطيسي، والفيزياء الحديثة وازدواجية الموجة والجسيم',
    branchIds: {
      thanaweya: ['thanaweya_physics'],
      egbac: ['egbac_physics'],
    },
  },

  // 16. Geology & Environmental Sciences (الجيولوجيا والعلوم البيئية)
  {
    id: 'geology',
    titleEn: 'Geology & Environmental Sciences',
    titleAr: 'الجيولوجيا والعلوم البيئية',
    shortTitleEn: 'Geology',
    shortTitleAr: 'جيولوجيا',
    emoji: '🪨',
    iconName: 'Mountain',
    badgeColor: 'amber',
    gradient: 'from-amber-700 via-stone-700 to-emerald-800',
    lightBg: 'bg-amber-50 text-amber-900 border-amber-200',
    darkBg: 'bg-amber-950/70 text-amber-200 border-amber-800/60',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    descriptionEn: 'National Scientific Core Subject: Earth Dynamics, Minerals & Crystallography, Bowen Rock Cycle, Continental Drift & Plate Tectonics, Geomorphology, and Environmental Ecosystems',
    descriptionAr: 'المادة العلمية الكبرى لشعبة علمي علوم: مادة الأرض والتراكيب، المعادن ومقياس موهس، دورة الصخور والبراكين، تكتونية الصفائح والزلازل، الجيومورفولوجيا، والنظم الإيكولوجية واستنزاف الموارد',
    branchIds: {
      thanaweya: ['thanaweya_geology'],
      egbac: ['egbac_geology'],
    },
  },

  // 17. Economics & Statistics (الاقتصاد والإحصاء)
  {
    id: 'economics_stat',
    titleEn: 'Economics & Statistics',
    titleAr: 'الاقتصاد والإحصاء',
    shortTitleEn: 'Econ & Stat',
    shortTitleAr: 'اقتصاد وإحصاء',
    emoji: '📊',
    iconName: 'TrendingUp',
    badgeColor: 'amber',
    gradient: 'from-amber-600 via-yellow-600 to-orange-600',
    lightBg: 'bg-amber-50 text-amber-900 border-amber-200',
    darkBg: 'bg-amber-950/70 text-amber-200 border-amber-800/60',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    descriptionEn: 'Essential Mandatory Subject: Scarcity & The Economic Problem, Factors of Production, National Income, Public Finance & State Budget, Money & Banking, International Relations, Pearson & Spearman Correlation, Conditional Probability, Random Variables, and Standard Normal Distribution',
    descriptionAr: 'المادة العامة الإجبارية لكافة الشعب: المشكلة الاقتصادية والندرة، عناصر الإنتاج، الدخل القومي والإنفاق ومضاعف الاستثمار، المالية العامة والضرائب، النقود والجهاز المصرفي، العلاقات الاقتصادية الدولية، الارتباط الخطي ومعادلة الانحدار، الاحتمال الشرطي، المتغيرات العشوائية والتوزيع الطبيعي المعياري',
    branchIds: {
      thanaweya: ['thanaweya_economics_stat'],
      egbac: ['egbac_economics_stat'],
    },
  },

  // 18. Computer Science & Informatics (علوم الحاسب والمعلوماتية)
  {
    id: 'cs_informatics',
    titleEn: 'Computer Science & Informatics',
    titleAr: 'علوم الحاسب والمعلوماتية',
    shortTitleEn: 'CS & AI',
    shortTitleAr: 'حاسب ومعلوماتية',
    emoji: '💻',
    iconName: 'Binary',
    badgeColor: 'violet',
    gradient: 'from-violet-600 via-indigo-600 to-cyan-600',
    lightBg: 'bg-violet-50 text-violet-900 border-violet-200',
    darkBg: 'bg-violet-950/70 text-violet-200 border-violet-800/60',
    borderColor: 'border-violet-500/50',
    textColor: 'text-violet-400',
    descriptionEn: 'Digital Logic, Computer Architecture, Data Structures, Algorithms & Complexity, Python OOP, Relational Databases & SQL, Web Technologies, Networks & Protocols, Cybersecurity & Cryptography, and AI & Machine Learning',
    descriptionAr: 'المنطق الرقمي، بنية المعالجات، هياكل البيانات، الخوارزميات والتعقيد الحسابي، البرمجة كائنية التوجه بلغة بايثون، قواعد البيانات ولغة SQL، تقنيات الويب، شبكات الحاسب، الأمن السيبراني والتشفير، والذكاء الاصطناعي وتعلم الآلة',
    branchIds: {
      thanaweya: ['thanaweya_cs_informatics'],
      egbac: ['egbac_cs_informatics'],
    },
  },

  // 19. Earth & Planetary Space Sciences (علوم الأرض والفلك: علوم الفضاء والكواكب)
  {
    id: 'earth_space',
    titleEn: 'Earth & Planetary Space Sciences',
    titleAr: 'علوم الأرض والفلك: علوم الفضاء والكواكب',
    shortTitleEn: 'Earth & Space',
    shortTitleAr: 'أرض وفلك وفضاء',
    emoji: '🪐',
    iconName: 'Orbit',
    badgeColor: 'indigo',
    gradient: 'from-blue-950 via-indigo-900 to-amber-900',
    lightBg: 'bg-indigo-50 text-indigo-950 border-indigo-200',
    darkBg: 'bg-indigo-950/80 text-indigo-200 border-indigo-800/60',
    borderColor: 'border-indigo-500/50',
    textColor: 'text-indigo-400',
    descriptionEn: 'National STEM & Scientific Core Subject: Celestial Mechanics, Keplerian Orbits, Solar System & Comparative Planetology, Heliophysics, Space Weather, Stellar Astrophysics, Compact Objects, Cosmology, Exoplanets & Satellite Remote Sensing',
    descriptionAr: 'المادة العلمية المتقدمة: ميكانيكا الأجرام الفلكية، مدارات كبلر، النظام الشمسي والمقارنة الكوكبية، فيزياء الشمس والطقس الفضائي، فيزياء النجوم والتخليق النووي، الثقوب السوداء وعلم الكونيات، الكواكب الخارجية والاستشعار عن بعد',
    branchIds: {
      thanaweya: ['thanaweya_earth_space'],
      egbac: ['egbac_earth_space'],
    },
  },

  // 20. National Civics & Constitution (التربية الوطنية والدستور) - LAST
  {
    id: 'civics',
    titleEn: 'National Civics & Constitution',
    titleAr: 'التربية الوطنية والدستور',
    shortTitleEn: 'Civics',
    shortTitleAr: 'التربية الوطنية',
    emoji: '⚖️',
    iconName: 'Scale',
    badgeColor: 'emerald',
    gradient: 'from-emerald-900 via-teal-800 to-amber-700',
    lightBg: 'bg-emerald-50 text-emerald-950 border-emerald-200',
    darkBg: 'bg-emerald-950/80 text-emerald-200 border-emerald-800/60',
    borderColor: 'border-emerald-500/50',
    textColor: 'text-emerald-400',
    descriptionEn: 'Official Egyptian secondary national civics curriculum: The Law and Constitution, Democracy & Citizenship, Political Parties, Electoral Practice & Judicial Oversight.',
    descriptionAr: 'المنهج الوزاري المعتمد لمادة التربية الوطنية: القانون والدستور، الديمقراطية والمواطنة، الأحزاب السياسية، المشاركة السياسية والعملية الانتخابية.',
    branchIds: {
      thanaweya: ['thanaweya_civics'],
      egbac: ['egbac_civics'],
    },
  },

  // 22. Business Administration & Entrepreneurship (إدارة الأعمال وريادة الأعمال)
  {
    id: 'business_entrepreneurship',
    titleEn: 'Business Administration & Entrepreneurship',
    titleAr: 'إدارة الأعمال وريادة الأعمال',
    shortTitleEn: 'Business & Entrepreneurship',
    shortTitleAr: 'إدارة وريادة',
    emoji: '💼',
    iconName: 'Briefcase',
    badgeColor: 'sky',
    gradient: 'from-sky-900 via-indigo-900 to-slate-950',
    lightBg: 'bg-sky-50 text-sky-950 border-sky-200',
    darkBg: 'bg-sky-950/80 text-sky-200 border-sky-800/60',
    borderColor: 'border-sky-500/50',
    textColor: 'text-sky-400',
    descriptionEn: 'Official Egyptian secondary business curriculum: Management Principles, Organizational Behavior, Strategic Marketing, Operations & Supply Chain, Corporate Finance, Capital Structure, Lean Startup, and Digital Business Transformation.',
    descriptionAr: 'المنهج الوزاري المعتمد لإدارة الأعمال وريادة الأعمال: مبادئ الإدارة والتنظيم المؤسسي، استراتيجيات التسويق والتموضع، إدارة العمليات وسلاسل الإمداد، الإدارة المالية وهيكل رأس المال، ريادة الأعمال ونماذج العمل الرشيقة، والتحول الرقمي للشركات.',
    branchIds: {
      thanaweya: ['thanaweya_business'],
      egbac: ['egbac_business'],
    },
  },

  // 23. Fine Arts, Architectural Design & Visual Culture (الفنون الجميلة والتصميم المعماري)
  {
    id: 'fine_arts_architecture',
    titleEn: 'Fine Arts, Architectural Design & Visual Culture',
    titleAr: 'الفنون الجميلة والتصميم المعماري',
    shortTitleEn: 'Fine Arts & Architecture',
    shortTitleAr: 'فنون وعمارة',
    emoji: '🎨',
    iconName: 'Palette',
    badgeColor: 'rose',
    gradient: 'from-fuchsia-950 via-rose-900 to-amber-950',
    lightBg: 'bg-rose-50 text-rose-950 border-rose-200',
    darkBg: 'bg-rose-950/80 text-rose-200 border-rose-800/60',
    borderColor: 'border-rose-500/50',
    textColor: 'text-rose-400',
    descriptionEn: 'Official Egyptian secondary curriculum for Fine Arts & Architecture: Egyptian artistic evolution and masters, linear perspective & volumetric shading, principles of visual composition, color harmony, classical proportion & Golden Ratio, vernacular architecture (Hassan Fathy), and advanced parametric urbanism.',
    descriptionAr: 'المنهج الوزاري المعتمد لمادة الفنون الجميلة والتصميم المعماري: تطور الفنون التشكيلية ورواد الحركة المصرية، قواعد المنظور الهندسي والظل والظلال وتجسيم الفراغ، أسس التكوين والتصميم والدائرة اللونية، العمارة المصرية التراثية وفلسفة حسن فتحي، والنظريات المعمارية المعاصرة والعمارة البارامترية.',
    branchIds: {
      thanaweya: ['thanaweya_fine_arts'],
      egbac: ['egbac_fine_arts'],
    },
  },

  // 25. Music Theory & Arab/Western Musicology (التربية الموسيقية والنظريات الموسيقية)
  {
    id: 'music_theory',
    titleEn: 'Music Theory & Arab/Western Musicology',
    titleAr: 'التربية الموسيقية والنظريات الموسيقية',
    shortTitleEn: 'Music Theory',
    shortTitleAr: 'موسيقى ونظريات',
    emoji: '🎵',
    iconName: 'Music',
    badgeColor: 'amber',
    gradient: 'from-amber-600 via-purple-700 to-indigo-950',
    lightBg: 'bg-amber-50 text-amber-950 border-amber-200',
    darkBg: 'bg-amber-950/80 text-amber-200 border-amber-800/60',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    descriptionEn: 'Official Egyptian secondary music curriculum: Western acoustic fundamentals, staff notation & solfège, harmonic progressions & voice leading, Arab 24-quarter-tone equal temperament & Maqamat, classical Iqa\'at rhythms, organology, and historical analysis of Egyptian musical heritage.',
    descriptionAr: 'المنهج الوزاري المعتمد للتربية الموسيقية والنظريات الموسيقية: الأسس الفيزيائية للصوت والتدوين الموسيقي الغربي والصولفيج، الهارموني والتآلفات والتصريف الصوتي، النظريات الموسيقية العربية والمقامية وسلم الربع تون (٢٤ درجة متساوية)، الإيقاعات والضروب العربية، تصنيف الآلات الموسيقية (الأورجانولوجي)، وتاريخ وتطور الموسيقى المصرية ورواد النهضة.',
    branchIds: {
      thanaweya: ['thanaweya_music'],
      egbac: ['egbac_music'],
    },
  },

  // 26. Agricultural Sciences & Agrotechnology (التربية الزراعية والتكنولوجيا الزراعية)
  {
    id: 'agriculture',
    titleEn: 'Agricultural Sciences & Agrotechnology',
    titleAr: 'التربية الزراعية والتكنولوجيا الزراعية',
    shortTitleEn: 'Agriculture',
    shortTitleAr: 'زراعة وتكنولوجيا',
    emoji: '🌾',
    iconName: 'Sprout',
    badgeColor: 'emerald',
    gradient: 'from-emerald-800 via-green-700 to-lime-800',
    lightBg: 'bg-emerald-50 text-emerald-950 border-emerald-200',
    darkBg: 'bg-emerald-950/80 text-emerald-200 border-emerald-800/60',
    borderColor: 'border-emerald-500/50',
    textColor: 'text-emerald-400',
    descriptionEn: 'Official Egyptian secondary agricultural curriculum: Soil chemistry & fertility, plant physiology & crop production, modern pressurized irrigation & drainage hydrology, Integrated Pest Management (IPM), protected hydroponic greenhouses, Egyptian national reclamation mega-projects (Toshka, New Delta), agricultural biotechnology, and sustainable agribusiness.',
    descriptionAr: 'المنهج الوزاري المعتمد لمادة التربية الزراعية والتكنولوجيا الزراعية: كيمياء وخصوبة التربة والتغذية النباتية، فسيولوجيا النبات والمحاصيل الحقلية، هندسة الري المطور وإدارة الموارد المائية، المكافحة المتكاملة للآفات (IPM) وأمراض النبات، الزراعات المحمية والهيدروبونيك، المشروعات القومية الكبرى لاستصلاح الأراضي الصحراوية (توشكى والدلتا الجديدة ومستقبل مصر)، التكنولوجيا الحيوية الزراعية، وإدارة الإنتاج الحيواني والسمكي وسلاسل القيمة الغذائية.',
    branchIds: {
      thanaweya: ['thanaweya_agriculture'],
      egbac: ['egbac_agriculture'],
    },
  },

  // 27. Industrial Technology & Applied Engineering (التربية الصناعية والتكنولوجيا التطبيقية)
  {
    id: 'industrial',
    titleEn: 'Industrial Technology & Applied Engineering',
    titleAr: 'التربية الصناعية والتكنولوجيا التطبيقية والهندسية',
    shortTitleEn: 'Industrial Tech',
    shortTitleAr: 'صناعية وتطبيقية',
    emoji: '⚙️',
    iconName: 'Wrench',
    badgeColor: 'amber',
    gradient: 'from-amber-800 via-orange-700 to-slate-800',
    lightBg: 'bg-amber-50 text-amber-950 border-amber-200',
    darkBg: 'bg-amber-950/80 text-amber-200 border-amber-800/60',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    descriptionEn: 'Official Egyptian secondary industrial curriculum: Engineering materials science & metallurgy, manufacturing processes, metal forming & CNC machining, electrical machines & power distribution, industrial electronics & control systems, PLC automation & ladder logic, fluid power hydraulics & pneumatics, and Total Quality Management (TQM) with statistical process control.',
    descriptionAr: 'المنهج الوزاري المعتمد لمادة التربية الصناعية والتكنولوجيا التطبيقية والهندسية: خواص واختبارات المواد الهندسية والمعادن، تكنولوجيا التصنيع والتشكيل والتشغيل الميكانيكي، آلات القوى والتركيبات الكهربية الصناعية، الإلكترونيات الصناعية ودوائر التحكم، أنظمة التحكم الآلي المبرمج (PLC)، أنظمة القوى المائعية (الهيدروليك والنيوماتيك)، والتحكم الإحصائي في الجودة وإدارة الصيانة وهندسة الإنتاج.',
    branchIds: {
      thanaweya: ['thanaweya_industrial'],
      egbac: ['egbac_industrial'],
    },
  },

  // 28. Commercial Sciences, Financial Accounting & Banking (العلوم التجارية والمحاسبة والمالية والمصرفية)
  {
    id: 'commercial',
    titleEn: 'Commercial Sciences, Financial Accounting & Banking',
    titleAr: 'العلوم التجارية والمحاسبة والمالية والمصرفية',
    shortTitleEn: 'Commercial Sciences',
    shortTitleAr: 'علوم تجارية ومصرفية',
    emoji: '🏛️',
    iconName: 'Landmark',
    badgeColor: 'teal',
    gradient: 'from-teal-800 via-emerald-800 to-slate-900',
    lightBg: 'bg-teal-50 text-teal-950 border-teal-200',
    darkBg: 'bg-teal-950/80 text-teal-200 border-teal-800/60',
    borderColor: 'border-teal-500/50',
    textColor: 'text-teal-400',
    descriptionEn: 'Official Egyptian secondary commercial curriculum: Financial accounting principles & double-entry bookkeeping, financial mathematics & compound interest annuities, commercial law & negotiable instruments, tax accounting & public finance, corporate financial management & capital budgeting (NPV/IRR/WACC), commercial banking operations & credit analysis, financial markets & portfolio risk (CAPM), and FinTech digital banking with IFRS standards.',
    descriptionAr: 'المنهج الوزاري المعتمد لمادة العلوم التجارية والمحاسبة والمالية والمصرفية: أصول ومبادئ المحاسبة المالية وقيود اليومية وموازين المراجعة، الرياضة المالية وحساب الفائدة المركبة والأقساط والاستهلاك، القانون التجاري وحوكمة الشركات والأوراق التجارية، المحاسبة الضريبية وتشريعات المالية العامة، الإدارة المالية المتقدمة وتقييم المشاريع الرأسمالية، العمليات المصرفية والسياسة النقدية وتحليل الائتمان، الأسواق المالية وإدارة المحافظ الاستثمارية، والتكنولوجيا المالية والتحول الرقمي ومعايير المحاسبة الدولية.',
    branchIds: {
      thanaweya: ['thanaweya_commercial'],
      egbac: ['egbac_commercial'],
    },
  },

  // 29. Tourism, Hospitality & Cultural Heritage Management (السياحة والضيافة وإدارة التراث الثقافي)
  {
    id: 'tourism',
    titleEn: 'Tourism, Hospitality & Cultural Heritage Management',
    titleAr: 'السياحة والضيافة وإدارة التراث الثقافي',
    shortTitleEn: 'Tourism & Hospitality',
    shortTitleAr: 'سياحة وضيافة وتراث',
    emoji: '🏨',
    iconName: 'Hotel',
    badgeColor: 'amber',
    gradient: 'from-amber-700 via-orange-600 to-yellow-600',
    lightBg: 'bg-amber-50 text-amber-950 border-amber-200',
    darkBg: 'bg-amber-950/80 text-amber-200 border-amber-800/60',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    descriptionEn: 'Official Egyptian secondary tourism and hospitality curriculum: Tourism economics & travel agency operations, hotel front office & food service management, Egyptology & world heritage guiding, destination marketing, strategic hospitality yield management (RevPAR/ADR), cultural heritage conservation & museology, sustainable eco-tourism carrying capacity, and GDS digital reservation systems.',
    descriptionAr: 'المنهج الوزاري المعتمد لمادة السياحة والضيافة وإدارة التراث الثقافي: اقتصاديات السياحة ووكالات السفر وشركات الطيران، إدارة الفنادق والمكاتب الأمامية وقطاع الأغذية والمشروبات، الإرشاد السياحي وعلم المصريات ومواقع التراث العالمي، التسويق السياحي وإدارة الفعاليات، إدارة العائد الفندقي الاستراتيجي (RevPAR/ADR)، صيانة وإدارة التراث الثقافي وعلم المتاحف، السياحة البيئية المستدامة والطاقة الاستيعابية للوجهات، والتحول الرقمي وأنظمة التوزيع العالمية (GDS).',
    branchIds: {
      thanaweya: ['thanaweya_tourism'],
      egbac: ['egbac_tourism'],
    },
  },

  // 30. Renewable Energy & Environmental Sustainability (الطاقة المتجددة والاستدامة البيئية)
  {
    id: 'renewable',
    titleEn: 'Renewable Energy & Environmental Sustainability',
    titleAr: 'الطاقة المتجددة والاستدامة البيئية',
    shortTitleEn: 'Renewable Energy & Sustainability',
    shortTitleAr: 'طاقة متجددة واستدامة',
    emoji: '🌱',
    iconName: 'Zap',
    badgeColor: 'emerald',
    gradient: 'from-emerald-600 via-teal-600 to-green-500',
    lightBg: 'bg-emerald-50 text-emerald-950 border-emerald-200',
    darkBg: 'bg-emerald-950/80 text-emerald-200 border-emerald-800/60',
    borderColor: 'border-emerald-500/50',
    textColor: 'text-emerald-400',
    descriptionEn: 'Official Egyptian secondary curriculum in clean energy transition & climate sustainability: Solar photovoltaic cell physics & CSP thermal storage (Benban Solar Park), wind turbine aerodynamics & Betz limit (Gulf of Suez wind farms), green hydrogen electrolysis & clean synfuels (SCZone corridor), smart grids & BESS battery dispatch, and GHG Protocol carbon accounting with EU CBAM compliance.',
    descriptionAr: 'المنهج الوزاري المعتمد لمادة الطاقة المتجددة والاستدامة البيئية: فيزياء الخلايا الكهروضوئية وأنظمة الطاقة الشمسية المركزة والتخزين الحراري (مجمع بنبان بأسوان)، الديناميكا الهوائية لتوربينات الرياح وحد بيتز (مزارع رياح خليج السويس وجبل الزيت)، الهيدروجين الأخضر والتحليل الكهربائي والأمونيا النظيفة (المنطقة الاقتصادية لقناة السويس)، الشبكات الذكية وتخزين الطاقة بالبطاريات (BESS) ومشروع جبل عتاقة، ومحاسبة الكربون وتقييم دورة الحياة وفق بروتوكول GHG ومعايير CBAM الأوروبية.',
    branchIds: {
      thanaweya: ['thanaweya_renewable'],
      egbac: ['egbac_renewable'],
    },
  },

  // 31. STEM Engineering Capstone & Egypt's Grand Challenges (مشروع التخرج الهندسي STEM والتحديات الكبرى لمصر)
  {
    id: 'stem_capstone',
    titleEn: 'STEM Engineering Capstone & Grand Challenges',
    titleAr: 'مشروع التخرج الهندسي STEM والتحديات الكبرى لمصر',
    shortTitleEn: 'STEM Capstone & Challenges',
    shortTitleAr: 'مشروع كابستون STEM',
    emoji: '🏗️',
    iconName: 'Cpu',
    badgeColor: 'cyan',
    gradient: 'from-cyan-600 via-blue-600 to-teal-500',
    lightBg: 'bg-cyan-50 text-cyan-950 border-cyan-200',
    darkBg: 'bg-cyan-950/80 text-cyan-200 border-cyan-800/60',
    borderColor: 'border-cyan-500/50',
    textColor: 'text-cyan-400',
    descriptionEn: "Official Egyptian STEM Schools capstone curriculum addressing Egypt's 11 Grand Challenges: Reverse osmosis seawater desalination & solar thermal distillation, microgrid smart dispatch & green hydrogen fuel cells, desert precision irrigation & biosaline agriculture, and AI urban traffic optimization & low-carbon infrastructure.",
    descriptionAr: "منهج مشروع التخرج (الـ Capstone) لمدارس المتفوقين في العلوم والتكنولوجيا (STEM) لحل التحديات الإحدى عشرة الكبرى لمصر: تحلية مياه البحر بالتناضح العكسي والتقطير الشمسي، إدارة الشبكات الدقيقة الذكية وتخزين الطاقة بالهيدروجين الأخضر، الزراعة الصحراوية الذكية والمحاصيل الملحية في الدلتا الجديدة، ونظم المرور الذكية والمدن المستدامة.",
    branchIds: {
      thanaweya: ['thanaweya_stem_capstone'],
      egbac: ['egbac_stem_capstone'],
    },
  },

  // 32. Robotics, Mechatronics & Embedded Systems (الروبوتات والميكاترونكس والأنظمة المدمجة)
  {
    id: 'robotics_mechatronics',
    titleEn: 'Robotics, Mechatronics & Embedded Systems',
    titleAr: 'الروبوتات والميكاترونكس والأنظمة المدمجة',
    shortTitleEn: 'Robotics & Mechatronics',
    shortTitleAr: 'روبوتات وميكاترونكس',
    emoji: '🤖',
    iconName: 'Bot',
    badgeColor: 'indigo',
    gradient: 'from-indigo-600 via-violet-600 to-purple-600',
    lightBg: 'bg-indigo-50 text-indigo-950 border-indigo-200',
    darkBg: 'bg-indigo-950/80 text-indigo-200 border-indigo-800/60',
    borderColor: 'border-indigo-500/50',
    textColor: 'text-indigo-400',
    descriptionEn: 'Official Egyptian STEM secondary curriculum in advanced robotics, mechatronics & cyber-physical systems: Forward & inverse kinematics (DH parameters, Jacobian matrices), actuator control (BLDC motors, field-oriented control, H-bridges), sensor fusion & machine vision (IMU Kalman filtering, 2D/3D LiDAR SLAM, OpenCV feature detection), embedded RTOS (ARM Cortex-M, FreeRTOS preemption, CAN bus, SPI/I2C), and autonomous navigation using ROS2 & industrial automation (PLC ladder logic, collaborative robots).',
    descriptionAr: 'المنهج الوزاري المعتمد لمدارس المتفوقين في العلوم والتكنولوجيا (STEM) في هندسة الروبوتات والميكاترونكس والأنظمة المدمجة: الحركيات الأمامية والعكسية ومصفوفات ديناميكا الروبوت (معاملات DH ومصفوفة جاكوبيان)، التحكم في المحركات وإلكترونيات القوى (المحركات عديمة المسفرات BLDC والتحكم بالفيض FOC)، دمج الحساسات والرؤية الحاسوبية (مرشح كالمان لوحدات IMU، رسم الخرائط وتحديد الموقع بالليزر LiDAR SLAM)، أنظمة التشغيل المدمجة في الوقت الحقيقي (معالجات ARM Cortex-M ونظام FreeRTOS وبروتوكول CAN Bus)، والملاحة الذاتية باستخدام نظام تشغيل الروبوتات ROS2 والأتمتة الصناعية ومتحكمات PLC.',
    branchIds: {
      thanaweya: ['thanaweya_robotics'],
      egbac: ['egbac_robotics'],
    },
  },
  // 33. Advanced Electronics, VLSI & IoT Systems (الإلكترونيات المتقدمة، الدوائر المتكاملة وإنترنت الأشياء)
  {
    id: 'electronics_iot',
    titleEn: 'Advanced Electronics, VLSI & IoT Systems',
    titleAr: 'الإلكترونيات المتقدمة، الدوائر المتكاملة وإنترنت الأشياء',
    shortTitleEn: 'Electronics & IoT',
    shortTitleAr: 'إلكترونيات وإنترنت الأشياء',
    emoji: '⚡',
    iconName: 'Cpu',
    badgeColor: 'cyan',
    gradient: 'from-cyan-600 via-teal-600 to-blue-700',
    lightBg: 'bg-cyan-50 text-cyan-950 border-cyan-200',
    darkBg: 'bg-cyan-950/80 text-cyan-200 border-cyan-800/60',
    borderColor: 'border-cyan-500/50',
    textColor: 'text-cyan-400',
    descriptionEn: 'Official Egyptian STEM secondary and EG-Bac curriculum in Advanced Electronics, Microelectronics & Internet of Things (IoT): Solid-state semiconductor physics, BJT & MOSFET small-signal amplifiers, operational amplifier (Op-Amp) active filters, digital logic design, FPGA & Verilog/VHDL synthesis, nanometer CMOS VLSI layout, embedded microcontroller systems (ARM Cortex-M, ESP32), wireless sensor networks (BLE, Zigbee, LoRaWAN), MQTT cloud telemetry, and Industrial IoT (IIoT) edge computing.',
    descriptionAr: 'المنهج الوزاري المعتمد لمدارس المتفوقين في العلوم والتكنولوجيا (STEM) والبكالوريا المصرية في الإلكترونيات المتقدمة، الدوائر المتكاملة وإنترنت الأشياء: فيزياء الحالة الصلبة وأشباه الموصلات، ترانزستورات BJT و MOSFET ومكبرات الإشارة الصغيرة، مكبرات العمليات والمرشحات الفعالة، المنطق الرقمي وبنية شرائح FPGA وتوليف لغات Verilog/VHDL، تصميم دوائر CMOS المتكاملة النانومترية VLSI، الأنظمة المدمجة (معالجات ARM وESP32)، شبكات الحساسات اللاسلكية (BLE وLoRaWAN)، بروتوكولات السحابة MQTT، وحوسبة الحافة لإنترنت الأشياء الصناعي IIoT.',
    branchIds: {
      thanaweya: ['thanaweya_electronics_iot'],
      egbac: ['egbac_electronics_iot'],
    },
  },
  // 34. Artificial Intelligence & Data Science (الذكاء الاصطناعي وعلم البيانات)
  {
    id: 'ai_data_science',
    titleEn: 'Artificial Intelligence & Data Science',
    titleAr: 'الذكاء الاصطناعي وعلم البيانات',
    shortTitleEn: 'AI & Data Science',
    shortTitleAr: 'الذكاء الاصطناعي والبيانات',
    emoji: '🧠',
    iconName: 'Brain',
    badgeColor: 'violet',
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    lightBg: 'bg-violet-50 text-violet-950 border-violet-200',
    darkBg: 'bg-violet-950/80 text-violet-200 border-violet-800/60',
    borderColor: 'border-violet-500/50',
    textColor: 'text-violet-400',
    descriptionEn: 'Official Egyptian STEM secondary and EG-Bac curriculum in Artificial Intelligence & Data Science: Statistical machine learning foundations, convex loss optimization, deep neural networks (CNNs, Vision Transformers), Natural Language Processing and Large Language Models (LLMs), probabilistic graphical models, generative diffusion models, reinforcement learning and autonomous agents, enterprise MLOps, distributed model training, and ethical AI governance.',
    descriptionAr: 'المنهج الوزاري المعتمد لمدارس المتفوقين في العلوم والتكنولوجيا (STEM) والبكالوريا المصرية في الذكاء الاصطناعي وعلم البيانات: أسس تعلم الآلة الإحصائي، تحسين دوال الخسارة المحدبة، الشبكات العصبية العميقة (رؤية الحاسوب ونماذج CNN ومحولات الرؤية ViT)، معالجة اللغات الطبيعية والنماذج اللغوية الضخمة (LLMs)، النماذج الرسومية الاحتمالية، نماذج التوليد بالانتشار، التعلم التعزيزي والوكلاء الأذكياء، هندسة تدفقات MLOps المؤسسية، والتدريب الموزع وحوكمة الذكاء الاصطناعي الأخلاقي.',
    branchIds: {
      thanaweya: ['thanaweya_ai_data_science'],
      egbac: ['egbac_ai_data_science'],
    },
  },
];

/**
 * Returns the Subject configuration by its ID
 */
export const getSubjectById = (subjectId: string): SubjectDefinition | undefined => {
  return SUBJECTS.find((s) => s.id === subjectId);
};

/**
 * Finds the Subject that a given branch belongs to
 */
export const getSubjectForBranch = (
  branchId: string,
  curriculumType?: CurriculumType
): SubjectDefinition | undefined => {
  return SUBJECTS.find((sub) => {
    if (curriculumType) {
      return sub.branchIds[curriculumType]?.includes(branchId as BranchId);
    }
    return (
      sub.branchIds.thanaweya.includes(branchId as BranchId) ||
      sub.branchIds.egbac.includes(branchId as BranchId)
    );
  });
};

/**
 * Returns all branches of a given subject in the specified curriculum
 */
export const getBranchesForSubject = (
  curriculum: Curriculum,
  subjectId: string
): Branch[] => {
  if (subjectId === 'all') return curriculum.branches;
  const subject = getSubjectById(subjectId);
  if (!subject) return curriculum.branches;

  const validBranchIds = subject.branchIds[curriculum.id] || [];
  return curriculum.branches.filter((b) => validBranchIds.includes(b.id));
};

/**
 * Computes chapter and problem statistics for a subject within a curriculum
 */
export const getSubjectStats = (
  curriculum: Curriculum,
  subjectId: string
): { totalChapters: number; totalProblems: number; totalLessons: number } => {
  const branches = getBranchesForSubject(curriculum, subjectId);
  let totalChapters = 0;
  let totalLessons = 0;
  let totalProblems = 0;

  for (const branch of branches) {
    totalChapters += branch.chapters.length;
    for (const ch of branch.chapters) {
      totalLessons += ch.lessons.length;
      if (ch.databank) {
        totalProblems +=
          (ch.databank.easy?.length || 0) +
          (ch.databank.medium?.length || 0) +
          (ch.databank.hots?.length || 0);
      }
      if (ch.solvedExamples) totalProblems += ch.solvedExamples.length;
      if (ch.exerciseProblems) totalProblems += ch.exerciseProblems.length;
    }
  }

  return { totalChapters, totalProblems, totalLessons };
};
