export interface OfficialBook {
  id: string;
  curriculum: 'thanaweya' | 'egbac' | 'both';
  category: 'pure_math' | 'applied_math' | 'advanced_math' | 'compendium';
  branchId?: string;
  code: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  academicYear: string;
  gradeEn: string;
  gradeAr: string;
  publisherEn: string;
  publisherAr: string;
  pagesCount: number;
  fileSize: string;
  filename: string;
  downloadUrl: string;
  officialPortalUrl: string;
  coverGradient: string;
  accentColor: string;
  chapters: {
    id: string;
    titleEn: string;
    titleAr: string;
    pageRange: string;
    topicsCount: number;
  }[];
  descriptionEn: string;
  descriptionAr: string;
  highlightsEn: string[];
  highlightsAr: string[];
}

export const officialBooksList: OfficialBook[] = [
  // 1. Thanaweya Pure Math: Algebra & Solid Geometry
  {
    id: 'th-alg-sol-g12',
    curriculum: 'thanaweya',
    category: 'pure_math',
    branchId: 'pure-math-algebra-solid',
    code: 'TH-ALG-SOL-G12',
    titleEn: 'Pure Mathematics: Algebra & Solid Geometry',
    titleAr: 'الرياضيات البحتة: الجبر والهندسة الفراغية',
    subtitleEn: 'Official Ministry of Education Textbook - Grade 12',
    subtitleAr: 'كتاب وزارة التربية والتعليم الرسمي - الصف الثالث الثانوي',
    academicYear: '2025 / 2026',
    gradeEn: 'Grade 12 (General Secondary Certificate)',
    gradeAr: 'الصف الثالث الثانوي (شهادة إتمام الثانوية العامة)',
    publisherEn: 'Ministry of Education & Technical Education - Arab Republic of Egypt',
    publisherAr: 'جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني',
    pagesCount: 224,
    fileSize: '18.4 MB',
    filename: 'thanaweya-algebra-solid-geometry.pdf',
    downloadUrl: './books/thanaweya-algebra-solid-geometry.pdf',
    officialPortalUrl: 'https://moe.gov.eg/ar/elearning-content/',
    coverGradient: 'from-emerald-600 via-teal-700 to-cyan-900',
    accentColor: '#10b981',
    chapters: [
      {
        id: 'alg-ch1',
        titleEn: 'Permutations, Combinations & Binomial Theorem',
        titleAr: 'مبدأ العد، التباديل، التوافيق، ونظرية ذات الحدين',
        pageRange: 'pp. 1–48',
        topicsCount: 4,
      },
      {
        id: 'alg-ch2',
        titleEn: 'Complex Numbers & De Moivre Theorem',
        titleAr: 'الأعداد المركبة ونظرية ديموافر والجذور التكعيبية للواحد',
        pageRange: 'pp. 49–98',
        topicsCount: 3,
      },
      {
        id: 'alg-ch3',
        titleEn: 'Matrices, Determinants & Linear Systems',
        titleAr: 'المحددات، المصفوفات، وحل المعادلات الخطية',
        pageRange: 'pp. 99–144',
        topicsCount: 3,
      },
      {
        id: 'sol-ch1',
        titleEn: '3D Cartesian Coordinates, Vectors & Sphere Geometry',
        titleAr: 'النظام الإحداثي المتعامد في الفراغ، المتجهات ومعادلة الكرة',
        pageRange: 'pp. 145–186',
        topicsCount: 3,
      },
      {
        id: 'sol-ch2',
        titleEn: 'Lines and Planes in Three-Dimensional Space',
        titleAr: 'الخط المستقيم والمستوى في الفراغ ثلاثي الأبعاد',
        pageRange: 'pp. 187–224',
        topicsCount: 2,
      },
    ],
    descriptionEn: 'The authorized textbook for Pure Mathematics (Algebra and 3D Solid Geometry) issued by the Egyptian Ministry of Education, covering combinatorial identities, polar/exponential complex forms, Gaussian elimination, and spatial analytical geometry.',
    descriptionAr: 'الكتاب المعتمد لمادة الرياضيات البحتة (الجبر والهندسة الفراغية) الصادر عن وزارة التربية والتعليم المصرية، شاملاً المتطابقات التوافقية، الأعداد المركبة بالصورة المثلثية والأسية، حل النظم الخطية بالمصفوفات، وهندسة المستقيم والمستوى في الفراغ.',
    highlightsEn: [
      'Complete Binomial Theorem and ratio properties',
      'Cube roots of unity (Omega) and trigonometric De Moivre identities',
      'Cramer rule, matrix rank, and matrix inversion techniques',
      'Equations of lines, planes, and shortest skew-line distances in space',
    ],
    highlightsAr: [
      'نظرية ذات الحدين كاملة وقوانين النسبة بين الحدود',
      'الجذور التكعيبية للواحد الصحيح (أوميجا) وصيغة ديموافر',
      'طريقة كرامر، رتبة المصفوفة، والمعكوس الضربي للمصفوفات',
      'معادلات المستقيم والمستوى وحساب أبعاد الفراغ ثلاثي الأبعاد',
    ],
  },

  // 2. Thanaweya Pure Math: Calculus & Integration
  {
    id: 'th-calc-g12',
    curriculum: 'thanaweya',
    category: 'pure_math',
    branchId: 'pure-math-calculus',
    code: 'TH-CALC-G12',
    titleEn: 'Pure Mathematics: Calculus & Analytical Geometry',
    titleAr: 'الرياضيات البحتة: التفاضل والتكامل',
    subtitleEn: 'Official Ministry of Education Textbook - Grade 12',
    subtitleAr: 'كتاب وزارة التربية والتعليم الرسمي - الصف الثالث الثانوي',
    academicYear: '2025 / 2026',
    gradeEn: 'Grade 12 (General Secondary Certificate)',
    gradeAr: 'الصف الثالث الثانوي (شهادة إتمام الثانوية العامة)',
    publisherEn: 'Ministry of Education & Technical Education - Arab Republic of Egypt',
    publisherAr: 'جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني',
    pagesCount: 208,
    fileSize: '16.9 MB',
    filename: 'thanaweya-calculus-integration.pdf',
    downloadUrl: './books/thanaweya-calculus-integration.pdf',
    officialPortalUrl: 'https://moe.gov.eg/ar/elearning-content/',
    coverGradient: 'from-blue-600 via-indigo-700 to-slate-900',
    accentColor: '#3b82f6',
    chapters: [
      {
        id: 'calc-ch1',
        titleEn: 'Differentiation of Trigonometric Functions & Related Rates',
        titleAr: 'اشتقاق الدوال المثلثية، الاشتقاق الضمني والمعدلات الزمنية المرتبطة',
        pageRange: 'pp. 1–52',
        topicsCount: 4,
      },
      {
        id: 'calc-ch2',
        titleEn: 'Exponential and Logarithmic Calculus',
        titleAr: 'تفاضل وتكامل الدوال الأسية واللوغاريتمية والعدد النيبيري',
        pageRange: 'pp. 53–102',
        topicsCount: 3,
      },
      {
        id: 'calc-ch3',
        titleEn: 'Curve Sketching, Critical Points & Applied Optimization',
        titleAr: 'تزايد وتناقص الدوال، رسم المنحنيات، وتطبيقات القيم العظمى والصغرى',
        pageRange: 'pp. 103–156',
        topicsCount: 3,
      },
      {
        id: 'calc-ch4',
        titleEn: 'Definite & Indefinite Integration, Areas & Volumes of Revolution',
        titleAr: 'طرق التكامل، التكامل المحدد، وحساب المساحات وحجوم الأجسام الدورانية',
        pageRange: 'pp. 157–208',
        topicsCount: 4,
      },
    ],
    descriptionEn: 'The official Ministry textbook for Differential and Integral Calculus, detailing chain rule differentiation of composite and inverse trigonometric functions, natural logarithms, inflection points, and solids of revolution.',
    descriptionAr: 'الكتاب المدرسي الرسمي الصادر عن وزارة التربية والتعليم لمنهج التفاضل والتكامل، متضمناً اشتقاق الدوال المثلثية العكسية، تفاضل وتكامل الأساس الطبيعي e، سلوك الدوال ورسم المنحنيات، وحساب حجوم الأجسام الدورانية بالشرائح والأسطوانات.',
    highlightsEn: [
      'Parametric and implicit higher-order derivatives',
      'Limits yielding Euler number e and logarithmic differentiation',
      'First and second derivative tests with applied optimization models',
      'Integration by parts, partial fractions, and definite integral properties',
    ],
    highlightsAr: [
      'المشتقات العليا البارامترية والضمنية',
      'نهايات العدد هـ (e) والاشتقاق اللوغاريتمي',
      'اختبارات المشتقة الأولى والثانية وتطبيقات القيم القصوى',
      'التكامل بالتجزيء، التعويض، وتطبيقات المساحات والحجوم',
    ],
  },

  // 3. Thanaweya Applied Math: Statics
  {
    id: 'th-stat-g12',
    curriculum: 'thanaweya',
    category: 'applied_math',
    branchId: 'applied-math-statics',
    code: 'TH-STAT-G12',
    titleEn: 'Applied Mathematics: Statics',
    titleAr: 'الرياضيات التطبيقية: الاستاتيكا',
    subtitleEn: 'Official Ministry of Education Textbook - Grade 12',
    subtitleAr: 'كتاب وزارة التربية والتعليم الرسمي - الصف الثالث الثانوي',
    academicYear: '2025 / 2026',
    gradeEn: 'Grade 12 (General Secondary Certificate)',
    gradeAr: 'الصف الثالث الثانوي (شهادة إتمام الثانوية العامة)',
    publisherEn: 'Ministry of Education & Technical Education - Arab Republic of Egypt',
    publisherAr: 'جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني',
    pagesCount: 196,
    fileSize: '15.7 MB',
    filename: 'thanaweya-statics.pdf',
    downloadUrl: './books/thanaweya-statics.pdf',
    officialPortalUrl: 'https://moe.gov.eg/ar/elearning-content/',
    coverGradient: 'from-amber-600 via-orange-700 to-stone-900',
    accentColor: '#f59e0b',
    chapters: [
      {
        id: 'stat-ch1',
        titleEn: 'Friction on Rough Horizontal and Inclined Planes',
        titleAr: 'الاتزان على مستوى أفقي ومستوى مائل خشن',
        pageRange: 'pp. 1–36',
        topicsCount: 2,
      },
      {
        id: 'stat-ch2',
        titleEn: 'Moments of Forces in Two and Three Dimensions',
        titleAr: 'عزوم القوى حول نقطة في بعدين وثلاثة أبعاد',
        pageRange: 'pp. 37–72',
        topicsCount: 2,
      },
      {
        id: 'stat-ch3',
        titleEn: 'Coplanar Parallel Forces and Beam Equilibrium',
        titleAr: 'القوى المتوازية المستوية ومحصلتها ونقاط تأثيرها',
        pageRange: 'pp. 73–108',
        topicsCount: 2,
      },
      {
        id: 'stat-ch4',
        titleEn: 'General Equilibrium of Rigid Bodies',
        titleAr: 'الاتزان العام للجسم الجاسيء',
        pageRange: 'pp. 109–140',
        topicsCount: 2,
      },
      {
        id: 'stat-ch5',
        titleEn: 'Couples and Equivalent Systems of Forces',
        titleAr: 'الازدواجات وتكافؤ المجموعات والازدواج المحصل',
        pageRange: 'pp. 141–168',
        topicsCount: 2,
      },
      {
        id: 'stat-ch6',
        titleEn: 'Center of Gravity and Composite Bodies',
        titleAr: 'مركز الثقل للأجسام المركبة وطريقة الكتلة السالبة',
        pageRange: 'pp. 169–196',
        topicsCount: 2,
      },
    ],
    descriptionEn: 'The authorized Ministry textbook for Statics, focusing on rigid body mechanics, static friction angles, Varignon theorem of moments, ladder and hinge reactions, couples, and center of mass determination.',
    descriptionAr: 'الكتاب المدرسي المعتمد لفرع الاستاتيكا، المتناول لقوانين الاحتكاك السكوني، زاوية الاحتكاك، عزم القوى في الفراغ ومتجه الموضع، شروط الاتزان العام للقضبان والسلالم، والازدواجات ومراكز ثقل الأجسام المتجانسة.',
    highlightsEn: [
      'Angle of friction and cone of limiting equilibrium',
      'Vector moments with cross products in 3D cartesian coordinates',
      'General rigid body equilibrium with ladders, hinges, and supports',
      'Center of gravity by negative mass subtraction and free suspension angles',
    ],
    highlightsAr: [
      'زاوية الاحتكاك ومخروط الاتزان الحرج',
      'عزوم القوى المتجهة بالضرب الاتجاهي ثلاثي الأبعاد',
      'الاتزان العام للقضبان، المفصلات، والسلالم المستندة على حوائط خشنة',
      'مركز الثقل بطريقة الكتلة السالبة وزاوية ميل التعليق الحر',
    ],
  },

  // 4. Thanaweya Applied Math: Dynamics
  {
    id: 'th-dyn-g12',
    curriculum: 'thanaweya',
    category: 'applied_math',
    branchId: 'applied-math-dynamics',
    code: 'TH-DYN-G12',
    titleEn: 'Applied Mathematics: Dynamics',
    titleAr: 'الرياضيات التطبيقية: الديناميكا',
    subtitleEn: 'Official Ministry of Education Textbook - Grade 12',
    subtitleAr: 'كتاب وزارة التربية والتعليم الرسمي - الصف الثالث الثانوي',
    academicYear: '2025 / 2026',
    gradeEn: 'Grade 12 (General Secondary Certificate)',
    gradeAr: 'الصف الثالث الثانوي (شهادة إتمام الثانوية العامة)',
    publisherEn: 'Ministry of Education & Technical Education - Arab Republic of Egypt',
    publisherAr: 'جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني',
    pagesCount: 216,
    fileSize: '17.2 MB',
    filename: 'thanaweya-dynamics.pdf',
    downloadUrl: './books/thanaweya-dynamics.pdf',
    officialPortalUrl: 'https://moe.gov.eg/ar/elearning-content/',
    coverGradient: 'from-rose-600 via-red-700 to-neutral-900',
    accentColor: '#f43f5e',
    chapters: [
      {
        id: 'dyn-ch1',
        titleEn: 'Rectilinear Kinematics & Differentiation of Vector Functions',
        titleAr: 'تفاضل وتكامل الدوال المتجهة والحركة في خط مستقيم',
        pageRange: 'pp. 1–54',
        topicsCount: 3,
      },
      {
        id: 'dyn-ch2',
        titleEn: "Newton's Laws of Motion, Pulleys & Connected Bodies",
        titleAr: 'قوانين نيوتن للحركة، البكرات البسيطة وحركة المصاعد',
        pageRange: 'pp. 55–118',
        topicsCount: 4,
      },
      {
        id: 'dyn-ch3',
        titleEn: 'Impulse and Direct Linear Collisions',
        titleAr: 'الدفع والتصادم المباشر ومبدأ بقاء كمية الحركة',
        pageRange: 'pp. 119–162',
        topicsCount: 2,
      },
      {
        id: 'dyn-ch4',
        titleEn: 'Work, Kinetic Energy, Potential Energy & Mechanical Power',
        titleAr: 'الشغل، طاقة الحركة، طاقة الوضع، والقدرة الميكانيكية',
        pageRange: 'pp. 163–216',
        topicsCount: 4,
      },
    ],
    descriptionEn: 'The authorized Ministry textbook for Dynamics, covering variable acceleration kinematics, Newtons three laws, multi-body pulley configurations, impact mechanics, and conservation of mechanical energy.',
    descriptionAr: 'الكتاب المعتمد لفرع الديناميكا من وزارة التربية والتعليم، متضمناً تفاضل وتكامل متجهات الإزاحة والسرعة والعجلة، قوانين نيوتن الثلاثة وتطبيقات البكرات والمصاعد، الدفع والتصادم المرن وغير المرن، وقوانين الشغل والطاقة والقدرة.',
    highlightsEn: [
      'Variable acceleration kinematics with a = v(dv/dx)',
      'Newtons 2nd Law applied to accelerating elevators and pulleys on inclined planes',
      'Impulse as area under F-t curve and conservation of linear momentum',
      'Work-energy theorem, conservative fields, and instantaneous engine power',
    ],
    highlightsAr: [
      'الحركة المتغيرة العجلة وصيغة جـ = ع (دع/دس)',
      'تطبيقات قانون نيوتن الثاني على المصاعد والبكرات على المستويات المائلة',
      'الدفع كمساحة تحت منحنى (القوة - الزمن) وبقاء كمية الحركة في التصادم',
      'مبدأ الشغل والطاقة، مجالات القوى المحافظة، والقدرة اللحظية للمحركات',
    ],
  },

  // 5. EG-Bac: Discrete Mathematics & Linear Systems
  {
    id: 'egbac-disc-adv',
    curriculum: 'egbac',
    category: 'advanced_math',
    branchId: 'egbac-vectors-geometry',
    code: 'EGBAC-DISC-ADV',
    titleEn: 'Advanced Discrete Mathematics & Linear Algebra',
    titleAr: 'الرياضيات المتقطعة والجبر الخطي المتقدم',
    subtitleEn: 'EG-Baccalaureate Advanced STEM Track Handbook',
    subtitleAr: 'دليل مسار البكالوريا المصرية المتقدم للعلوم والتكنولوجيا (STEM)',
    academicYear: '2025 / 2026',
    gradeEn: 'Senior Year (EG-Baccalaureate Advanced Diploma)',
    gradeAr: 'السنة النهائية (دبلومة البكالوريا المصرية المتقدمة)',
    publisherEn: 'EG-Baccalaureate Curriculum Advisory Board & MoE Egypt',
    publisherAr: 'الهيئة الأكاديمية الاستشارية للبكالوريا المصرية ووزارة التربية والتعليم',
    pagesCount: 240,
    fileSize: '19.8 MB',
    filename: 'egbac-discrete-math-linear-systems.pdf',
    downloadUrl: './books/egbac-discrete-math-linear-systems.pdf',
    officialPortalUrl: 'https://moe.gov.eg/ar/elearning-content/',
    coverGradient: 'from-violet-600 via-purple-700 to-slate-900',
    accentColor: '#8b5cf6',
    chapters: [
      {
        id: 'egbac-ch1',
        titleEn: 'Combinatorial Structures, Recurrences & Vector Spaces',
        titleAr: 'البنى التوافقية، معادلات التراجع، وفضاءات المتجهات في الفراغ',
        pageRange: 'pp. 1–118',
        topicsCount: 4,
      },
      {
        id: 'egbac-ch2',
        titleEn: 'Linear Systems, Matrix Rank, Eigenspaces & Graph Theory',
        titleAr: 'النظم الخطية، رتبة المصفوفات، الفضاءات الذاتية ونظرية المخططات',
        pageRange: 'pp. 119–240',
        topicsCount: 4,
      },
    ],
    descriptionEn: 'The official curriculum handbook for the EG-Baccalaureate Advanced Discrete Mathematics & Linear Algebra track, covering recurrence relations, vector space bases, diagonalization, and planar graph invariants.',
    descriptionAr: 'الدليل المعتمد لمنهج الرياضيات المتقطعة والجبر الخطي لمسار البكالوريا المصرية، متضمناً العلاقات التراجعية وحلها، استقلال المتجهات وقواعد الفضاءات، القيم والمتجهات الذاتية والتقطير، ونظرية المخططات الشبكية.',
    highlightsEn: [
      'Generating functions and second-order linear recurrence relations',
      'Subspace dimensions, Rank-Nullity theorem, and Gram-Schmidt process',
      'Characteristic polynomials, matrix trace, and eigenspace decomposition',
      'Euler planar graph formula (V - E + F = 2) and Dijkstra shortest path',
    ],
    highlightsAr: [
      'الدوال المولدة وحل المعادلات التراجعية الخطية من الدرجة الثانية',
      'أبعاد الفضاءات الجزئية، مبرهنة الرتبة والإلغاء، وعملية غرام-شميت',
      'كثيرات الحدود المميزة، أثر المصفوفة، وتفكيك الفضاءات الذاتية',
      'مبرهنة أويلر للمخططات المستوية وخوارزمية ديكسترا لأقصر مسار',
    ],
  },

  // 6. EG-Bac: Real Analysis & Advanced Differential Calculus
  {
    id: 'egbac-ana-adv',
    curriculum: 'egbac',
    category: 'advanced_math',
    branchId: 'egbac-analysis',
    code: 'EGBAC-ANA-ADV',
    titleEn: 'Real Analysis & Advanced Differential Calculus',
    titleAr: 'التحليل الحقيقي وحساب التفاضل المتقدم',
    subtitleEn: 'EG-Baccalaureate Advanced STEM Track Handbook',
    subtitleAr: 'دليل مسار البكالوريا المصرية المتقدم للعلوم والتكنولوجيا (STEM)',
    academicYear: '2025 / 2026',
    gradeEn: 'Senior Year (EG-Baccalaureate Advanced Diploma)',
    gradeAr: 'السنة النهائية (دبلومة البكالوريا المصرية المتقدمة)',
    publisherEn: 'EG-Baccalaureate Curriculum Advisory Board & MoE Egypt',
    publisherAr: 'الهيئة الأكاديمية الاستشارية للبكالوريا المصرية ووزارة التربية والتعليم',
    pagesCount: 256,
    fileSize: '21.3 MB',
    filename: 'egbac-real-analysis-differential-calculus.pdf',
    downloadUrl: './books/egbac-real-analysis-differential-calculus.pdf',
    officialPortalUrl: 'https://moe.gov.eg/ar/elearning-content/',
    coverGradient: 'from-cyan-600 via-sky-700 to-slate-900',
    accentColor: '#06b6d4',
    chapters: [
      {
        id: 'egbac-ana-ch1',
        titleEn: 'Topological Limits, Continuity & Epsilon-Delta Rigor',
        titleAr: 'النهايات التبولوجية، الاتصال المنتظم والبراهين بصيغة إبسيلون-دلتا',
        pageRange: 'pp. 1–124',
        topicsCount: 4,
      },
      {
        id: 'egbac-ana-ch2',
        titleEn: 'Differential Calculus, Taylor Series & Improper Integrals',
        titleAr: 'التفاضل المتقدم، متسلسلات تايلور وماكلورين والتكاملات المعتلة',
        pageRange: 'pp. 125–256',
        topicsCount: 4,
      },
    ],
    descriptionEn: 'Rigorous real analysis and advanced differential calculus textbook covering formal Cauchy limits, uniform continuity, Mean Value Theorems, power series convergence radii, and 1st-order differential equations.',
    descriptionAr: 'كتاب التحليل الحقيقي والتفاضل المتقدم بالمعايير الدولية للبكالوريا المصرية، متضمناً نهايات كوشي الدقيقة، الاتصال المنتظم، متسلسلات القوى ونصف قطر التقارب، والتكاملات المعتلة والمعادلات التفاضلية.',
    highlightsEn: [
      'Epsilon-delta definitions and Cauchy criterion for convergence',
      'Uniform continuity on compact sets and Intermediate Value Theorem',
      'Taylor and Maclaurin expansions with Lagrange remainder terms',
      'Improper integrals with comparison tests and separable differential equations',
    ],
    highlightsAr: [
      'تعريفات إبسيلون-دلتا ومعيار كوشي للتقارب والحدود العليا والدنيا',
      'الاتصال المنتظم على المجموعات المتراصة ونظرية القيمة المتوسطة',
      'مفكوك تايلور وماكلورين مع حدود خطأ لاغرانج',
      'التكاملات المعتلة واختبارات المقارنة وحل المعادلات التفاضلية القابلة للفصل',
    ],
  },

  // 7. EG-Bac: Theoretical & Analytical Mechanics
  {
    id: 'egbac-mech-adv',
    curriculum: 'egbac',
    category: 'advanced_math',
    branchId: 'egbac-mechanics',
    code: 'EGBAC-MECH-ADV',
    titleEn: 'Theoretical & Analytical Mechanics',
    titleAr: 'الميكانيكا التحليلية ونظرية الحركة',
    subtitleEn: 'EG-Baccalaureate Advanced STEM Track Handbook',
    subtitleAr: 'دليل مسار البكالوريا المصرية المتقدم للعلوم والتكنولوجيا (STEM)',
    academicYear: '2025 / 2026',
    gradeEn: 'Senior Year (EG-Baccalaureate Advanced Diploma)',
    gradeAr: 'السنة النهائية (دبلومة البكالوريا المصرية المتقدمة)',
    publisherEn: 'EG-Baccalaureate Curriculum Advisory Board & MoE Egypt',
    publisherAr: 'الهيئة الأكاديمية الاستشارية للبكالوريا المصرية ووزارة التربية والتعليم',
    pagesCount: 228,
    fileSize: '19.1 MB',
    filename: 'egbac-theoretical-mechanics.pdf',
    downloadUrl: './books/egbac-theoretical-mechanics.pdf',
    officialPortalUrl: 'https://moe.gov.eg/ar/elearning-content/',
    coverGradient: 'from-teal-600 via-emerald-700 to-slate-900',
    accentColor: '#14b8a6',
    chapters: [
      {
        id: 'egbac-mech-ch1',
        titleEn: 'Curvilinear Particle Kinematics & Intrinsic Coordinates',
        titleAr: 'حركة الجسيم في المسارات المنحنية والإحداثيات الذاتية وفرينيه',
        pageRange: 'pp. 1–112',
        topicsCount: 4,
      },
      {
        id: 'egbac-mech-ch2',
        titleEn: 'Work-Energy, Conservative Fields & Harmonic Oscillators',
        titleAr: 'الشغل والطاقة، المجالات المحافظة والاهتزازات التوافقية المخمدة',
        pageRange: 'pp. 113–228',
        topicsCount: 4,
      },
    ],
    descriptionEn: 'Advanced kinematics and dynamics handbook covering tangential and normal acceleration vectors, plane polar trajectories, central force orbital mechanics, and damped mechanical oscillators.',
    descriptionAr: 'كتاب الميكانيكا النظرية والتحليلية متناولاً متجهات العجلة المماسية والعمودية ونصف قطر الانحناء، الحركة في الإحداثيات القطبية، قوى الجاذبية المركزية والمدارات، وحركة المتذبذبات التوافقية المخمدة.',
    highlightsEn: [
      'Frenet-Serret intrinsic frame and curvature radius determination',
      'Air drag quadratic resistances and projectile terminal velocity',
      'Central force field equations and conservation of angular momentum',
      'Damped harmonic oscillators and phase space portraits',
    ],
    highlightsAr: [
      'إطار فرينيه-سيريه الذاتي وحساب نصف قطر انحناء المسارات',
      'مقاومة الهواء التربيعية والسرعة الحدية للقذائف',
      'معادلات مجالات القوى المركزية وبقاء كمية الحركة الزاوية',
      'المتذبذبات التوافقية المخمدة ومخططات فضاء الطور',
    ],
  },

  // 8. EG-Bac: Probability Theory & Mathematical Statistics
  {
    id: 'egbac-prob-adv',
    curriculum: 'egbac',
    category: 'advanced_math',
    branchId: 'egbac-probability',
    code: 'EGBAC-PROB-ADV',
    titleEn: 'Probability Theory & Mathematical Statistics',
    titleAr: 'نظرية الاحتمالات والإحصاء الرياضي المتقدم',
    subtitleEn: 'EG-Baccalaureate Advanced STEM Track Handbook',
    subtitleAr: 'دليل مسار البكالوريا المصرية المتقدم للعلوم والتكنولوجيا (STEM)',
    academicYear: '2025 / 2026',
    gradeEn: 'Senior Year (EG-Baccalaureate Advanced Diploma)',
    gradeAr: 'السنة النهائية (دبلومة البكالوريا المصرية المتقدمة)',
    publisherEn: 'EG-Baccalaureate Curriculum Advisory Board & MoE Egypt',
    publisherAr: 'الهيئة الأكاديمية الاستشارية للبكالوريا المصرية ووزارة التربية والتعليم',
    pagesCount: 212,
    fileSize: '17.8 MB',
    filename: 'egbac-probability-advanced-statistics.pdf',
    downloadUrl: './books/egbac-probability-advanced-statistics.pdf',
    officialPortalUrl: 'https://moe.gov.eg/ar/elearning-content/',
    coverGradient: 'from-amber-600 via-yellow-700 to-slate-900',
    accentColor: '#eab308',
    chapters: [
      {
        id: 'egbac-prob-ch1',
        titleEn: 'Discrete Probability, Bayes Theorem & Chebyshev Bound',
        titleAr: 'الاحتمالات المتقطعة، مبرهنة بايز، ومتباينة تشيبيشيف',
        pageRange: 'pp. 1–104',
        topicsCount: 4,
      },
      {
        id: 'egbac-prob-ch2',
        titleEn: 'Continuous Distributions, Central Limit Theorem & Hypothesis Testing',
        titleAr: 'التوزيعات المتصلة، نظرية النهاية المركزية واختبارات الفروض',
        pageRange: 'pp. 105–212',
        topicsCount: 4,
      },
    ],
    descriptionEn: 'Comprehensive guide to modern probability and mathematical statistics: Bayes rule, continuous random variables, joint densities, sample estimation, confidence intervals, and hypothesis test p-values.',
    descriptionAr: 'الدليل الشامل لنظرية الاحتمالات والإحصاء الرياضي الحديث: قانون بايز، المتغيرات العشوائية المتصلة وكثافاتها المشتركة، تقدير العينات، فترات الثقة، واختبارات الفروض الإحصائية بمعنوية p-value.',
    highlightsEn: [
      'Bayes Theorem in sequential decision trees and conditional distributions',
      'Continuous PDFs, CDFs, and expectation integrals',
      'Central Limit Theorem application to large sample distributions',
      'Confidence intervals and two-tailed Z and t hypothesis tests',
    ],
    highlightsAr: [
      'مبرهنة بايز في أشجار القرار المتعاقبة والتوزيعات الشرطية',
      'دوال الكثافة والتراكم الاحتمالي وتكاملات التوقع والتباين',
      'نظرية النهاية المركزية وتطبيقها على العينات الكبيرة',
      'فترات الثقة واختبارات الفروض الإحصائية باختباري Z و t',
    ],
  },

  // 9. Official Ministry Concepts & Formula Compendium
  {
    id: 'moe-formula-compendium',
    curriculum: 'both',
    category: 'compendium',
    code: 'MOE-FORMULA-COMPENDIUM',
    titleEn: 'Official Ministry Concepts & Formula Compendium',
    titleAr: 'كتيب المفاهيم والقوانين الرسمي المعتمد',
    subtitleEn: 'Authorized Ministry of Education Reference for General Secondary Exams',
    subtitleAr: 'المرجع الرسمي المعتمد الموزع في لجان امتحانات الثانوية العامة',
    academicYear: '2025 / 2026',
    gradeEn: 'Grade 12 & EG-Baccalaureate Examinations',
    gradeAr: 'امتحانات الصف الثالث الثانوي والبكالوريا المصرية',
    publisherEn: 'Ministry of Education Examination Authority - Egypt',
    publisherAr: 'الإدارة المركزية للامتحانات - وزارة التربية والتعليم والتعليم الفني',
    pagesCount: 88,
    fileSize: '9.4 MB',
    filename: 'official-ministry-formula-compendium.pdf',
    downloadUrl: './books/official-ministry-formula-compendium.pdf',
    officialPortalUrl: 'https://moe.gov.eg/ar/elearning-content/',
    coverGradient: 'from-amber-500 via-emerald-700 to-slate-900',
    accentColor: '#10b981',
    chapters: [
      {
        id: 'comp-pmath',
        titleEn: 'Pure Mathematics Formula Reference (Algebra, Solid, Calculus)',
        titleAr: 'مفاهيم الرياضيات البحتة (الجبر، الهندسة الفراغية، التفاضل والتكامل)',
        pageRange: 'pp. 1–44',
        topicsCount: 8,
      },
      {
        id: 'comp-amath',
        titleEn: 'Applied Mathematics Formula Reference (Statics, Dynamics)',
        titleAr: 'مفاهيم الرياضيات التطبيقية (الاستاتيكا، الديناميكا)',
        pageRange: 'pp. 45–88',
        topicsCount: 8,
      },
    ],
    descriptionEn: 'The authorized official concepts compendium distributed to students inside ministerial examination halls, containing verified identities, integration forms, moment equilibrium rules, and physical constants.',
    descriptionAr: 'كتيب المفاهيم الرسمي الصادر عن وزارة التربية والتعليم الموزع على طلاب الثانوية العامة داخل لجان الامتحانات، محتوياً على كافة القوانين والصيغ المعتمدة دون الحاجة للحفظ الأصم.',
    highlightsEn: [
      'Exact ministerial formula tables used in official examination halls',
      'Trigonometric and inverse trigonometric standard derivatives',
      'Integration forms, substitution catalogs, and reduction formulas',
      'Friction, couples, pulley equations, and momentum conservation laws',
    ],
    highlightsAr: [
      'جداول القوانين المعتمدة رسمياً في لجان الامتحانات العامة',
      'مشتقات وتكاملات الدوال المثلثية والمثلثية العكسية',
      'جداول التكاملات القياسية وتطبيقات المساحات والحجوم',
      'قوانين الاحتكاك، البكرات، كمية الحركة، والشغل والقدرة',
    ],
  },

  // 10. Official Ministry Teacher Guide & Curriculum Specifications
  {
    id: 'moe-teacher-guide',
    curriculum: 'both',
    category: 'compendium',
    code: 'MOE-TEACHER-GUIDE',
    titleEn: 'Teacher Guide & Examination Specifications',
    titleAr: 'دليل المعلم ومواصفات الورقة الامتحانية',
    subtitleEn: 'Ministry Pedagogical Framework & Assessment Rubrics',
    subtitleAr: 'الإطار التربوي ومواصفات نواتج التعلم الصادرة عن الوزارة',
    academicYear: '2025 / 2026',
    gradeEn: 'Senior Secondary Mathematics Instructors & Evaluators',
    gradeAr: 'موجهي ومعلمي الرياضيات بالمرحلة الثانوية والبكالوريا',
    publisherEn: 'Ministry of Education Center for Curriculum Development (CCIMD)',
    publisherAr: 'مركز تطوير المناهج والمواد التعليمية - وزارة التربية والتعليم',
    pagesCount: 160,
    fileSize: '14.1 MB',
    filename: 'official-ministry-teacher-guide.pdf',
    downloadUrl: './books/official-ministry-teacher-guide.pdf',
    officialPortalUrl: 'https://moe.gov.eg/ar/elearning-content/',
    coverGradient: 'from-slate-700 via-indigo-900 to-black',
    accentColor: '#6366f1',
    chapters: [
      {
        id: 'guide-pedagogy',
        titleEn: 'Pedagogical Guidelines & 5E Lesson Instructional Framework',
        titleAr: 'الأسس التربوية واستراتيجيات نموذج دورة التعلم الخماسية 5E',
        pageRange: 'pp. 1–68',
        topicsCount: 4,
      },
      {
        id: 'guide-assessment',
        titleEn: 'Blooms Taxonomy Question Distribution & Rubric Standards',
        titleAr: 'مستويات بلوم المعرفية وتوزيع درجات الورقة الامتحانية القياسية',
        pageRange: 'pp. 69–160',
        topicsCount: 4,
      },
    ],
    descriptionEn: 'Official pedagogical guide detailing the 5E inquiry cycle, formative assessment exit tickets, common misconceptions, and item response weights for ministerial examination construction.',
    descriptionAr: 'دليل التوجيه التربوي الرسمي الصادر عن مركز تطوير المناهج متضمناً معايير نواتج التعلم، معالجة المفاهيم الخاطئة الشائعة، ونماذج التقييم التكويني والختامي وتوزيع مستويات بلوم للأسئلة.',
    highlightsEn: [
      'Question difficulty weights: 30% Knowledge, 40% Understanding, 30% HOTS',
      'Misconception diagnosis and intervention protocols',
      'Differentiation strategies for struggling and gifted students',
      'Official examination paper specification matrices',
    ],
    highlightsAr: [
      'توزيع الصعوبة: ٣٠٪ معرفة وتذكر، ٤٠٪ فهم وتطبيق، ٣٠٪ مهارات تفكير عليا',
      'بروتوكولات تشخيص المفاهيم الخاطئة وعلاجها تربوياً',
      'استراتيجيات التمايز لمراعاة الفروق الفردية للطلاب الضعاف والمتفوقين',
      'مصفوفة مواصفات الورقة الامتحانية ونماذج التصحيح المعتمدة',
    ],
  },
];

export function getOfficialBookById(id: string): OfficialBook | undefined {
  return officialBooksList.find((b) => b.id === id);
}

export function getOfficialBookByBranch(branchId: string): OfficialBook | undefined {
  return officialBooksList.find((b) => b.branchId === branchId);
}

export function getOfficialBooksByCurriculum(curriculum: 'thanaweya' | 'egbac' | 'all'): OfficialBook[] {
  if (curriculum === 'all') return officialBooksList;
  return officialBooksList.filter((b) => b.curriculum === curriculum || b.curriculum === 'both');
}
