export type Language = 'en' | 'ar';
export type UserRole = 'student' | 'teacher';

export interface Translations {
  // Navigation & Header
  siteTitle: string;
  siteSubtitle: string;
  thanaweyaTitle: string;
  egbacTitle: string;
  languageToggle: string;
  roleStudent: string;
  roleTeacher: string;
  themeDay: string;
  themeNight: string;
  themeHighContrast: string;
  fontSize: string;
  fontSizeNormal: string;
  fontSizeLarge: string;
  fontSizeXLarge: string;
  officialMoeRef: string;
  moeBadge: string;
  searchPlaceholder: string;
  sisterSite: string;
  sisterSiteBadge: string;
  visitorCounterTitle: string;
  visitorCounterTotal: string;
  visitorCounterToday: string;
  visitorCounterLive: string;

  // Tabs & Views
  overviewTab: string;
  theoryTab: string;
  solvedExamplesTab: string;
  exerciseProblemsTab: string;
  lessonPlanTab: string;
  worksheetTab: string;
  interactiveTab: string;
  testGeneratorTab: string;
  databankTab: string;
  equivalencyTab: string;

  // Actions
  printWorksheet: string;
  downloadPdf: string;
  generateTest: string;
  showSolution: string;
  hideSolution: string;
  showHint: string;
  hideHint: string;
  submitAnswer: string;
  nextQuestion: string;
  prevQuestion: string;
  resetSimulation: string;
  startQuiz: string;

  // Curricula Titles
  pureMath: string;
  appliedMath: string;
  advancedMath: string;

  // Labels
  chapter: string;
  lesson: string;
  difficulty: string;
  moeCode: string;
  estimatedTime: string;
  bloomsTaxonomy: string;
  prerequisites: string;
  vocabulary: string;
  misconceptions: string;
  differentiation: string;
  formativeAssessment: string;
  exitTicket: string;
  stepByStepSolution: string;
  teacherTips: string;
  
  // Interactive Labels
  interactive3dTitle: string;
  interactive3dDesc: string;
  vectorU: string;
  vectorV: string;
  vectorOperations: string;
  dotProduct: string;
  crossProduct: string;
  magnitude: string;
  angleBetween: string;
  sphereEquation: string;
  radius: string;
  center: string;

  // Test Generator
  testGenTitle: string;
  testGenSubtitle: string;
  selectBranch: string;
  selectChapter: string;
  selectDifficulty: string;
  numQuestions: string;
  includeSolutions: string;
  modeOnline: string;
  modePrintable: string;
  officialExamHeader: string;
  studentSeatNo: string;
  totalMarks: string;
  timeAllowed: string;
  score: string;
  congratulations: string;

  // Desmos Suite
  desmosCalculator: string;
  desmosGraphing2D: string;
  desmosGraphing3D: string;
  desmosScientific: string;
  desmosGeometry: string;
  desmosCurriculumPresets: string;
  desmosCopyExpr: string;
  desmosCopied: string;
  desmosOpenExternal: string;
  desmosDockFloating: string;
  desmosExpandModal: string;
  desmosMinimize: string;
  desmosClose: string;
  desmosShortcutTip: string;

  // Official Books
  officialBooksTitle: string;
  officialBooksSubtitle: string;
  officialBooksNavBtn: string;
  downloadBookPdf: string;
  previewBookPdf: string;
  moePortalLink: string;
  bookPagesCount: string;
  bookFileSize: string;
  bookAcademicYear: string;
  filterAllBooks: string;
  filterThanaweyaBooks: string;
  filterEgBacBooks: string;
  filterCompendiums: string;
  searchBooksPlaceholder: string;
  noBooksFound: string;
  bookChaptersCount: string;
  officialMinistryBadge: string;
  officialCurriculumCode: string;

  // Footers & References
  copyright: string;
  moeReferenceNote: string;
  footerContactLabel: string;
  footerContactPrompt: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    siteTitle: 'ClipSAT for Egypt',
    siteSubtitle: 'Egyptian General Secondary & EG-Bac Interactive Platform',
    thanaweyaTitle: 'Egyptian General Secondary (Thanaweya Amma)',
    egbacTitle: 'New Egyptian Baccalaureate (EG-Bac)',
    languageToggle: 'العربية',
    roleStudent: 'Student Mode',
    roleTeacher: 'Teacher Mode',
    themeDay: 'Day View ☀️',
    themeNight: 'Night View 🌙',
    themeHighContrast: 'High Contrast ⚡',
    fontSize: 'Font Size',
    fontSizeNormal: 'Standard (100%)',
    fontSizeLarge: 'Large (115%)',
    fontSizeXLarge: 'Extra Large (130%)',
    officialMoeRef: 'Official MoE Egyptian Curriculum Reference 2025/2026',
    moeBadge: 'ClipSAT MoE Accredited',
    searchPlaceholder: 'Search formulas, lessons, concepts...',
    sisterSite: 'Sister Site: clipsat.org',
    sisterSiteBadge: 'clipsat.org',
    visitorCounterTitle: 'Platform Visitors',
    visitorCounterTotal: 'Total Visits',
    visitorCounterToday: 'Today',
    visitorCounterLive: 'Live Online',

    overviewTab: 'Curriculum Roadmap',
    theoryTab: 'Lesson & Theory',
    solvedExamplesTab: 'Official Solved Examples',
    exerciseProblemsTab: 'Textbook Exercises',
    lessonPlanTab: 'Teacher Lesson Plan',
    worksheetTab: 'Solved Worksheets',
    interactiveTab: 'Virtual Labs (4 Tracks)',
    testGeneratorTab: 'Exam & Practice Generator',
    databankTab: 'Chapter Databank',
    equivalencyTab: 'Track Comparison & Bridge',

    printWorksheet: 'Print Worksheet / Save PDF',
    downloadPdf: 'Download Teacher Guide',
    generateTest: 'Generate Custom Test',
    showSolution: 'Show Step-by-Step Solution',
    hideSolution: 'Hide Solution',
    showHint: 'Need a Hint?',
    hideHint: 'Hide Hint',
    submitAnswer: 'Check Answer',
    nextQuestion: 'Next Question',
    prevQuestion: 'Previous Question',
    resetSimulation: 'Reset Simulation',
    startQuiz: 'Start Timed Exam',

    pureMath: 'Pure Mathematics',
    appliedMath: 'Applied Mathematics',
    advancedMath: 'Advanced Mathematics & Analysis',

    chapter: 'Chapter',
    lesson: 'Lesson',
    difficulty: 'Difficulty',
    moeCode: 'MoE Standard Code',
    estimatedTime: 'Estimated Time',
    bloomsTaxonomy: "Learning Objectives (Bloom's)",
    prerequisites: 'Prerequisite Skills',
    vocabulary: 'Essential Vocabulary',
    misconceptions: 'Common Student Misconceptions',
    differentiation: 'Differentiation Strategies',
    formativeAssessment: 'Formative Assessment Check',
    exitTicket: 'Lesson Exit Ticket',
    stepByStepSolution: 'Step-by-Step Solution',
    teacherTips: 'Pedagogical Notes for Teachers',

    interactive3dTitle: '3D Solid Geometry & Vector Laboratory',
    interactive3dDesc: 'Manipulate vectors in 3D Euclidean space R³, visualize sphere equations, dot products, and cross products in real time.',
    vectorU: 'Vector u = (x₁, y₁, z₁)',
    vectorV: 'Vector v = (x₂, y₂, z₂)',
    vectorOperations: 'Real-Time Vector Calculus',
    dotProduct: 'Dot Product (u · v)',
    crossProduct: 'Cross Product (u × v)',
    magnitude: 'Magnitude |u|',
    angleBetween: 'Angle Between Vectors (θ)',
    sphereEquation: 'Sphere Equation',
    radius: 'Radius (R)',
    center: 'Center Point C(x₀, y₀, z₀)',

    testGenTitle: 'Egyptian Examination & Test Generator',
    testGenSubtitle: 'Build customized quizzes, homework assignments, or official Egyptian Ministry-style term examinations.',
    selectBranch: 'Select Branch',
    selectChapter: 'Select Chapter',
    selectDifficulty: 'Select Difficulty Level',
    numQuestions: 'Number of Questions',
    includeSolutions: 'Include Answer Key & Explanations',
    modeOnline: 'Interactive Online Practice',
    modePrintable: 'Printable Official MoE Exam Paper',
    officialExamHeader: 'Ministry of Education & Technical Education - Secondary Examination 2025/2026',
    studentSeatNo: 'Student Seat Number (رقم الجلوس):',
    totalMarks: 'Total Marks: 60 Marks',
    timeAllowed: 'Time Allowed: 2 Hours',
    score: 'Your Score',
    congratulations: 'Excellent Work! You completed the exam!',

    // Desmos Suite
    desmosCalculator: 'Desmos Math Suite',
    desmosGraphing2D: '2D Graphing',
    desmosGraphing3D: '3D Graphing',
    desmosScientific: 'Scientific',
    desmosGeometry: 'Geometry',
    desmosCurriculumPresets: 'Egyptian Curriculum Presets',
    desmosCopyExpr: 'Copy',
    desmosCopied: 'Copied!',
    desmosOpenExternal: 'Open in Desmos.com',
    desmosDockFloating: 'Floating Dock',
    desmosExpandModal: 'Expanded View',
    desmosMinimize: 'Minimize',
    desmosClose: 'Close',
    desmosShortcutTip: 'Press Ctrl+D or ⌘D anytime to toggle calculator',

    // Official Books
    officialBooksTitle: 'Official Ministry of Education Textbooks & Compendiums',
    officialBooksSubtitle: 'Authorized PDFs for General Secondary (Thanaweya Amma) & EG-Baccalaureate 2025/2026',
    officialBooksNavBtn: 'Ministry Books',
    downloadBookPdf: 'Download PDF',
    previewBookPdf: 'Open / Preview',
    moePortalLink: 'Ministry Portal',
    bookPagesCount: 'Pages',
    bookFileSize: 'Size',
    bookAcademicYear: 'Academic Year',
    filterAllBooks: 'All Textbooks',
    filterThanaweyaBooks: 'Thanaweya Amma (4)',
    filterEgBacBooks: 'EG-Baccalaureate (4)',
    filterCompendiums: 'Ministry Compendiums (2)',
    searchBooksPlaceholder: 'Search official books by title, code, branch, or topics...',
    noBooksFound: 'No official textbooks match your search or filter.',
    bookChaptersCount: 'Chapters',
    officialMinistryBadge: 'Authorized by Ministry of Education',
    officialCurriculumCode: 'Curriculum Code',

    copyright: '© 2026 Egyptian Mathematics Educational Portal. Standardized on the Egyptian Ministry of Education Mathematics Framework.',
    moeReferenceNote: 'All curriculum topics, formulas, and problem structures directly adhere to the official textbooks issued by the Ministry of Education of Egypt (وزارة التربية والتعليم والتعليم الفني المصري).',
    footerContactLabel: 'Error reports & suggestions:',
    footerContactPrompt: 'Report an error or send suggestions to:'
  },

  ar: {
    siteTitle: 'ClipSAT لمصر',
    siteSubtitle: 'منصة رياضيات متكاملة للثانوية العامة والنظام البكالوريا الجديد',
    thanaweyaTitle: 'الرياضيات للثانوية العامة المصرية',
    egbacTitle: 'الرياضيات لنظام البكالوريا المصرية الجديد (EG-Bac)',
    languageToggle: 'English',
    roleStudent: 'وضع الطالب',
    roleTeacher: 'وضع المعلم',
    themeDay: 'الوضع النهاري ☀️',
    themeNight: 'الوضع الليلي 🌙',
    themeHighContrast: 'تباين عالي ⚡',
    fontSize: 'حجم الخط',
    fontSizeNormal: 'قياسي (100%)',
    fontSizeLarge: 'كبير (115%)',
    fontSizeXLarge: 'كبير جداً (130%)',
    officialMoeRef: 'المرجع الرسمي لكتب وزارة التربية والتعليم والتعليم الفني 2025/2026',
    moeBadge: 'منصة ClipSAT معتمدة بالوزارة',
    searchPlaceholder: 'ابحث عن القوانين، الدروس، المفاهيم...',
    sisterSite: 'الموقع الشقيق: clipsat.org',
    sisterSiteBadge: 'clipsat.org',
    visitorCounterTitle: 'عدد زوار المنصة',
    visitorCounterTotal: 'إجمالي الزيارات',
    visitorCounterToday: 'اليوم',
    visitorCounterLive: 'متصل الآن',

    overviewTab: 'خريطة المنهج',
    theoryTab: 'الشرح والنظريات',
    solvedExamplesTab: 'أمثلة الكتاب المحلولة',
    exerciseProblemsTab: 'تمارين كتاب الوزارة',
    lessonPlanTab: 'خطة الدرس للمعلم',
    worksheetTab: 'أوراق العمل المحلولة',
    interactiveTab: 'المختبرات العلمية (٤ مختبرات)',
    testGeneratorTab: 'منشئ الاختبارات والتمارين',
    databankTab: 'بنك أسئلة الفصل',
    equivalencyTab: 'مقارنة المسارات والجسور',

    printWorksheet: 'طباعة ورقة العمل / حفظ PDF',
    downloadPdf: 'تحميل دليل المعلم',
    generateTest: 'إنشاء اختبار مخصص',
    showSolution: 'عرض الحل الخطي بالتفصيل',
    hideSolution: 'إخفاء الحل',
    showHint: 'هل تحتاح تلميحًا؟',
    hideHint: 'إخفاء التلميح',
    submitAnswer: 'تأكيد الإجابة',
    nextQuestion: 'السؤال التالي',
    prevQuestion: 'السؤال السابق',
    resetSimulation: 'إعادة ضبط المحاكاة',
    startQuiz: 'بدء الاختبار الزمني',

    pureMath: 'الرياضيات البحتة',
    appliedMath: 'الرياضيات التطبيقية',
    advancedMath: 'الرياضيات المتقدمة والتحليل',

    chapter: 'الفصل',
    lesson: 'الدرس',
    difficulty: 'مستوى الصعوبة',
    moeCode: 'رمز المنهج بالوزارة',
    estimatedTime: 'الزمن المقترح',
    bloomsTaxonomy: 'نواتج التعلم (تصنيف بلوم)',
    prerequisites: 'المتطلبات السابقة',
    vocabulary: 'المصطلحات الأساسية (عربي/إنجليزي)',
    misconceptions: 'أخطاء مفاهيمية شائعة لدى الطلاب',
    differentiation: 'استراتيجيات التمايز والمراعاة الفردية',
    formativeAssessment: 'التقويم التكويني',
    exitTicket: 'تذكرة الخروج (Exit Ticket)',
    stepByStepSolution: 'خطوات الحل بالتفصيل',
    teacherTips: 'توجيهات تربوية للمعلم',

    interactive3dTitle: 'مختبر الهندسة الفراغية والمتجهات ثلاثية الأبعاد',
    interactive3dDesc: 'حرك المتجهات في الفضاء ثلاثي الأبعاد R³، وشاهد معادلة الكرة والضرب القياسي واللاتجاهي لحظياً.',
    vectorU: 'المتجه u = (س₁، ص₁، ع₁)',
    vectorV: 'المتجه v = (س₂، ص₂، ع₂)',
    vectorOperations: 'حسابات المتجهات اللحظية',
    dotProduct: 'الضرب القياسي (u · v)',
    crossProduct: 'الضرب الاتجاهي (u × v)',
    magnitude: 'معيار المتجه |u|',
    angleBetween: 'الزاوية بين المتجهين (θ)',
    sphereEquation: 'معادلة الكرة في الفراغ',
    radius: 'نصف القطر (نق / R)',
    center: 'مركز الكرة م(س₀، ص₀، ع₀)',

    testGenTitle: 'منشئ الاختبارات والامتحانات وفق النظام المصري',
    testGenSubtitle: 'أنشئ اختبارات قصيرة، واجبات منزلية، أو امتحانات كاملة بطابع امتحانات وزارة التربية والتعليم.',
    selectBranch: 'اختر الفرع',
    selectChapter: 'اختر الفصل',
    selectDifficulty: 'اختر مستوى الصعوبة',
    numQuestions: 'عدد الأسئلة',
    includeSolutions: 'تضمين نموذج الإجابة والشرح',
    modeOnline: 'تدريب تفاعلي مباشر',
    modePrintable: 'نموذج امتحان رسمي قابل للطباعة',
    officialExamHeader: 'وزارة التربية والتعليم والتعليم الفني - امتحان شهادة إتمام الدراسة الثانوية العامة 2025/2026',
    studentSeatNo: 'رقم الجلوس:',
    totalMarks: 'الدرجة الكلية: 60 درجة',
    timeAllowed: 'الزمن: ساعتان',
    score: 'درجتك في الاختبار',
    congratulations: 'أحسنت صنعاً! لقد أكملت الاختبار بنجاح!',

    // Desmos Suite
    desmosCalculator: 'حقيبة حاسبات ديسموس (Desmos)',
    desmosGraphing2D: 'الرسم البياني 2D',
    desmosGraphing3D: 'الرسم البياني 3D',
    desmosScientific: 'الحاسبة العلمية',
    desmosGeometry: 'بيئة الهندسة',
    desmosCurriculumPresets: 'نماذج وقوالب المنهج المصري',
    desmosCopyExpr: 'نسخ',
    desmosCopied: 'تم النسخ!',
    desmosOpenExternal: 'فتح في نافذة كاملة (Desmos.com)',
    desmosDockFloating: 'نافذة عائمة',
    desmosExpandModal: 'شاشة كاملة',
    desmosMinimize: 'تصغير',
    desmosClose: 'إغلاق',
    desmosShortcutTip: 'اضغط ⌘D أو Ctrl+D في أي وقت لفتح/إغلاق الحاسبة',

    // Official Books
    officialBooksTitle: 'كتب الوزارة والأدلة الرسمية المعتمدة',
    officialBooksSubtitle: 'تحميل ملفات PDF الرسمية للثانوية العامة والبكالوريا المصرية للعام الدراسي 2025/2026',
    officialBooksNavBtn: 'كتب الوزارة',
    downloadBookPdf: 'تحميل PDF',
    previewBookPdf: 'فتح / معاينة',
    moePortalLink: 'بوابة الوزارة',
    bookPagesCount: 'صفحة',
    bookFileSize: 'الحجم',
    bookAcademicYear: 'العام الدراسي',
    filterAllBooks: 'جميع الكتب والأدلة',
    filterThanaweyaBooks: 'الثانوية العامة (4)',
    filterEgBacBooks: 'البكالوريا المصرية (4)',
    filterCompendiums: 'كتيبات ومفاهيم الوزارة (2)',
    searchBooksPlaceholder: 'ابحث في كتب الوزارة بالاسم، الكود، الفرع، أو الموضوعات...',
    noBooksFound: 'لم يتم العثور على كتب تطابق البحث أو الفلتر المختار.',
    bookChaptersCount: 'فصول دراسية',
    officialMinistryBadge: 'معتمد رسمياً من وزارة التربية والتعليم',
    officialCurriculumCode: 'كود المنهج',

    copyright: '© 2026 بوابة الرياضيات للتعليم المصري. مطور وفق الإطار العام للمناهج بوزارة التربية والتعليم والتعليم الفني المصرية.',
    moeReferenceNote: 'جميع الموضوعات والقوانين والأسئلة مستمدة ومطابقة مباشرة للكتب الرسمية الصادرة من وزارة التربية والتعليم المصرية.',
    footerContactLabel: 'للإبلاغ عن الأخطاء والمقترحات:',
    footerContactPrompt: 'للإبلاغ عن الأخطاء وتقديم المقترحات راسلنا على:'
  }
};
