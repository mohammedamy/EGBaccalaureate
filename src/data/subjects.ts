import type { Branch, BranchId, Curriculum, CurriculumType } from '../types/curriculum';

export type SubjectId = 'mathematics' | 'physics' | 'chemistry' | 'biology' | 'english' | 'french' | 'arabic' | 'history' | 'geography' | 'geology' | 'philosophy' | 'psychology';

export interface SubjectDefinition {
  id: SubjectId;
  titleEn: string;
  titleAr: string;
  shortTitleEn: string;
  shortTitleAr: string;
  emoji: string;
  iconName: 'Calculator' | 'Atom' | 'FlaskConical' | 'Dna' | 'Languages' | 'BookA' | 'BookOpen' | 'Landmark' | 'Globe' | 'Mountain' | 'Brain' | 'Users';
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
