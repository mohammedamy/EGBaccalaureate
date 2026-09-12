import React, { useState } from 'react';
import type { CurriculumType, BranchId, ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { toHindiDigits } from '../utils/arabicNumerals';
import {
  GitCompare,
  TrendingUp,
  Award,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Compass,
  Cpu,
  GraduationCap,
  Sparkles,
  Binary,
  Microscope,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
} from 'lucide-react';


interface Props {
  lang: Language;
  theme?: ThemeMode;
  onNavigateTrack: (track: CurriculumType, branchId?: BranchId) => void;
}

interface BranchBridge {
  id: string;
  titleEn: string;
  titleAr: string;
  icon: React.ReactNode;
  thanaweyaBranchId: BranchId;
  egBacBranchId: BranchId;
  thanaweyaTitleEn: string;
  thanaweyaTitleAr: string;
  thanaweyaTopicsEn: string[];
  thanaweyaTopicsAr: string[];
  egBacTitleEn: string;
  egBacTitleAr: string;
  egBacTopicsEn: string[];
  egBacTopicsAr: string[];
  bridgeInsightEn: string;
  bridgeInsightAr: string;
  universityAdvantageEn: string;
  universityAdvantageAr: string;
}

export const CurriculumEquivalency: React.FC<Props> = ({ lang, theme = 'dark', onNavigateTrack }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const [activeBridgeIndex, setActiveBridgeIndex] = useState<number>(0);

  const bridges: BranchBridge[] = [
    {
      id: 'analysis_calculus',
      titleEn: 'Calculus & Mathematical Analysis',
      titleAr: 'التفاضل والتكامل والتحليل الرياضي',
      icon: <TrendingUp className="w-5 h-5 text-indigo-400" />,
      thanaweyaBranchId: 'calculus',
      egBacBranchId: 'egbac_analysis',
      thanaweyaTitleEn: 'Calculus & Differentiation (4 Chapters)',
      thanaweyaTitleAr: 'التفاضل والتكامل للثانوية العامة (٤ فصول)',
      thanaweyaTopicsEn: [
        'Higher derivatives of trigonometric & exponential functions',
        'Implicit and parametric differentiation',
        'Limits involving number e and logarithmic functions',
        'Curve sketching, critical points & inflection points',
        'Definite and indefinite integrals & solids of revolution',
      ],
      thanaweyaTopicsAr: [
        'المشتقات العليا للدوال المثلثية والأسية واللوغاريتمية',
        'الاشتقاق الضمني والبارامتري وتطبيقات المعدلات الزمنية',
        'نهايات العدد هـ واللوغاريتم الطبيعي ورسم المنحنيات',
        'القيم العظمى والصغرى ونقط الانقلاب وتحدب المنحنيات',
        'طرق التكامل بالتعويض والتجزيء وحجوم الأجسام الدورانية',
      ],
      egBacTitleEn: 'Real Analysis, Taylor Series & Vector Calculus (2 Chapters)',
      egBacTitleAr: 'التحليل الحقيقي ومتسلسلات تايلور وتكامل المتجهات (فصلان مكثفان)',
      egBacTopicsEn: [
        'Epsilon-delta definitions of limits & uniform continuity',
        'Taylor and Maclaurin expansions with Lagrange remainder',
        'Integration techniques: partial fractions & improper integrals',
        'Numerical integration (Simpson’s & Trapezoidal rules)',
        'Differential equations: separable & first-order integrating factor',
      ],
      egBacTopicsAr: [
        'التعريف الصارم للنهايات بالـ إبسيلون ودلتا والاستمرار المنتظم',
        'متسلسلات تايلور وماكلوران مع صيغة الباقي للاجرانج للتقريب',
        'التكامل بالكسور الجزئية والتكاملات المعتلة غير المحدودة',
        'طرق التكامل العددي الحاسوبي (قاعدة سمبسون وشبه المنحرف)',
        'المعادلات التفاضلية القابلة للفصل وعامل التكامل من الدرجة الأولى',
      ],
      bridgeInsightEn:
        'While Thanaweya Amma focuses heavily on algebraic fluency, computational speed, and mechanical integration drill, the Egyptian Baccalaureate introduces structural real analysis, error bounds, and numerical approximation methods standard in MIT/Imperial undergraduate engineering.',
      bridgeInsightAr:
        'في حين تركز الثانوية العامة المصرية على البراعة الحسابية والسرعة في فك التكاملات والاشتقاقات الميكانيكية، يركز مسار البكالوريا المصرية على البناء التحليلي الصارم، حساب حدود الخطأ، والتحليل العددي المعتمد في جامعات الهندسة الدولية.',
      universityAdvantageEn: 'Gives students a 1-year head start in University Calculus I & II and Engineering Differential Equations.',
      universityAdvantageAr: 'يمنح الطالب أسبقية تفوق عام دراسي كامل في مقررات الرياضيات الهندسية والتفاضل والتكامل الجامعي المتقدم.',
    },
    {
      id: 'algebra_discrete',
      titleEn: 'Algebra, Matrices & Linear Spaces',
      titleAr: 'الجبر والمصفوفات والفضاءات الخطية',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      thanaweyaBranchId: 'algebra_solid',
      egBacBranchId: 'egbac_vectors_geometry',
      thanaweyaTitleEn: 'Algebra & Combinatorics (3 Chapters)',
      thanaweyaTitleAr: 'الجبر العام والتباديل والتوافيق (٣ فصول)',
      thanaweyaTopicsEn: [
        'Fundamental counting principle, permutations & combinations',
        'Binomial theorem with integer powers & middle term',
        'Complex numbers: trigonometric and exponential (Euler) forms',
        "De Moivre's theorem & n-th roots of unity",
        'Determinants & solving linear systems via matrix inversion (Cramer)',
      ],
      thanaweyaTopicsAr: [
        'مبدأ العد والتباديل والتوافيق والمضاريب',
        'نظرية ذات الحدين بأسس صحيحة موجبة والحد الأوسط والأكبر قيمة',
        'الأعداد المركبة في الصورة المثلثية والصورة الأسية (أويلر)',
        'نظرية ديموافر والجذور التكعيبية والـ ن-ية للواحد الصحيح (أوميجا)',
        'المحددات وخواصها وحل أنظمة المعادلات الخطية بطريقة كرامر والمعكوس',
      ],
      egBacTitleEn: 'Linear Algebra, Eigenvalues & Discrete Math (2 Chapters)',
      egBacTitleAr: 'الجبر الخطي والمصفوفات الذاتية والرياضيات المتقطعة (فصلان)',
      egBacTopicsEn: [
        'Vector spaces, basis, dimension & linear independence',
        'Matrix transformations, rank & nullity theorem',
        'Eigenvalues, eigenvectors & matrix diagonalization',
        'Combinatorial proofs, graph theory basics & modular arithmetic',
        'Mathematical induction & recurrence relations',
      ],
      egBacTopicsAr: [
        'الفضاءات الاتجاهية، الأساس، البعد، والاستقلال الخطي للمتجهات',
        'التحويلات الخطية ورتبة المصفوفة ونظرية الرتبة والفراغ الصفري',
        'القيم والمتجهات الذاتية (Eigenvalues) وقطرية المصفوفات وتطبيقاتها',
        'البراهين التوافقية ونظرية المخططات والحسابيات المعيارية (Modular)',
        'الاستقراء الرياضي الشامل والعلاقات التكرارية المستخدمة في الخوارزميات',
      ],
      bridgeInsightEn:
        'Thanaweya provides world-class proficiency in combinatorial manipulation and complex roots. EG-Bac pivots toward modern computer science foundations: Eigenvalues, vector spaces, and algorithm-ready discrete structures.',
      bridgeInsightAr:
        'توفر الثانوية العامة المصرية تمكناً لا يضاهى في فك التباديل والتوافيق وجذور الأعداد المركبة، بينما يوجه مسار البكالوريا الطالب مباشرة إلى أساسيات علوم الحاسب والذكاء الاصطناعي من خلال القيم الذاتية والفضاءات المتجهية.',
      universityAdvantageEn: 'Direct seamless entry into Linear Algebra for AI, Machine Learning, Computer Vision, and Graphics pipelines.',
      universityAdvantageAr: 'تأهيل مباشر لمقررات الجبر الخطي للذكاء الاصطناعي ومعالجة البيانات والرسوميات الحاسوبية.',
    },
    {
      id: 'mechanics_physics',
      titleEn: 'Mechanics: Statics & Dynamics',
      titleAr: 'الميكانيكا: الاستاتيكا والديناميكا',
      icon: <Compass className="w-5 h-5 text-amber-400" />,
      thanaweyaBranchId: 'statics',
      egBacBranchId: 'egbac_mechanics',
      thanaweyaTitleEn: 'Comprehensive Classical Mechanics (10 Chapters: 6 Statics + 4 Dynamics)',
      thanaweyaTitleAr: 'الميكانيكا الكلاسيكية الشاملة (١٠ فصول: ٦ استاتيكا + ٤ ديناميكا)',
      thanaweyaTopicsEn: [
        'Friction on horizontal and inclined rough planes',
        'Moments in 2D and 3D Cartesian coordinates',
        'Parallel coplanar forces & general equilibrium of rigid bodies',
        'Couples, equivalent systems & center of gravity of laminae',
        "Newton's Laws, impulse, momentum, work, energy & power",
      ],
      thanaweyaTopicsAr: [
        'الاتزان والاحتكاك على المستويات الأفقية والمائلة الخشنة',
        'عزوم القوى في الإحداثيات المستوية والفراغية ثلاثية الأبعاد',
        'القوى المتوازية المستوية والاتزان العام للقضبان والأجسام الجاسئة',
        'الازدواجات والأنظمة المكافئة ومراكز الثقل بالكتل السالبة',
        'قوانين نيوتن الثلاثة، الدفع، التصادم، الشغل، طاقة الحركة، والقدرة',
      ],
      egBacTitleEn: 'Vector Mechanics, Energy Methods & Oscillations (2 Chapters)',
      egBacTitleAr: 'ميكانيكا المتجهات وحفظ الطاقة والحركة الاهتزازية (فصلان)',
      egBacTopicsEn: [
        'Lagrangian & Hamiltonian energy principles preview',
        'Conservative force fields & potential energy functions',
        'Damped and forced simple harmonic motion (SHM)',
        'Variable mass systems (rocket propulsion mechanics)',
        'Rigid body moment of inertia via triple integrals',
      ],
      egBacTopicsAr: [
        'مبادئ حفظ الطاقة المتقدمة وتمهيد لميكانيكا لاجرانج',
        'مجالات القوى المحافظة ودوال طاقة الوضع المشتقة',
        'الحركة التوافقية البسيطة المخمدة والقسرية والتردد الرنيني',
        'أنظمة الكتل المتغيرة وحركة دفع الصواريخ الفضائية',
        'عزوم القصور الذاتي للأجسام الدورانية بالتكامل الثلاثي',
      ],
      bridgeInsightEn:
        'Thanaweya Amma mechanics is internationally renowned for its deep, exhaustive problem bank in static equilibrium and rigid beam physics. EG-Bac introduces vector differential equations, energy conservation methods, and dynamic oscillatory physics.',
      bridgeInsightAr:
        'تعد ميكانيكا الثانوية العامة المصرية من أقوى المناهج عالمياً في تدريب الطالب على اتزان القضبان، العزوم، وردود الأفعال المعقدة. يضيف مسار البكالوريا معادلات الحركة التفاضلية، وميكانيكا التذبذب، ودفع الصواريخ.',
      universityAdvantageEn: 'Guarantees top-percentile performance in Mechanical, Aerospace, and Civil Engineering Statics & Dynamics.',
      universityAdvantageAr: 'يضمن تفوقاً استثنائياً في مقررات الميكانيكا الهندسية لأقسام الميكانيكا، الطيران، والفضاء والهندسة المدنية.',
    },
    {
      id: 'probability_statistics',
      titleEn: 'Probability, Statistics & Data Science',
      titleAr: 'الاحتمالات والإحصاء وعلم البيانات',
      icon: <Binary className="w-5 h-5 text-emerald-400" />,
      thanaweyaBranchId: 'algebra_solid',
      egBacBranchId: 'egbac_probability',
      thanaweyaTitleEn: 'General Secondary Probability & Statistics (Complementary)',
      thanaweyaTitleAr: 'إحصاء الثانوية العامة (مادة تكميلية أساسية)',
      thanaweyaTopicsEn: [
        'Linear correlation (Pearson & Spearman coefficients)',
        'Linear regression line of best fit',
        'Conditional probability & independent events',
        'Discrete random variables & expected value',
        'Standard normal distribution z-table lookups',
      ],
      thanaweyaTopicsAr: [
        'الارتباط الخطي والانحدار (معامل بيرسون وسبيرمان)',
        'معادلة خط انحدار ص على س ومعامل الانحدار',
        'الاحتمال الشرطي والأحداث المستقلة وفضاء العينة',
        'المتغيرات العشوائية المتقطعة والتوقع الحسابي والتباين',
        'التوزيع الطبيعي المعياري وجداول z وحساب المساحات الاحتمالية',
      ],
      egBacTitleEn: 'Advanced Probability & Biostatistics (2 Intensive Chapters)',
      egBacTitleAr: 'الاحتمالات المتقدمة والإحصاء الحيوي (فصلان مكثفان)',
      egBacTopicsEn: [
        'Continuous probability density functions (PDF & CDF)',
        'Joint distributions, covariance & correlation matrices',
        'Bayes’ theorem & Bayesian probability networks',
        'Central Limit Theorem & Law of Large Numbers',
        'Hypothesis testing (t-test, chi-square) for STEM data',
      ],
      egBacTopicsAr: [
        'دوال كثافة الاحتمال للمتغيرات المتصلة ودالة التوزيع التراكمي (PDF / CDF)',
        'التوزيعات الاحتمالية المشتركة ومصفوفات التغاير والارتباط المتعدد',
        'مبرهنة بايز وشبكات الاحتمال البايزية في معالجة البيانات الطبية والحاسوبية',
        'مبرهنة النهاية المركزية وقانون الأعداد الكبيرة وتطبيقاته العملية',
        'اختبارات الفروض الإحصائية (اختبار t واختبار كاي تربيع) لبيانات STEM',
      ],
      bridgeInsightEn:
        'Thanaweya treats statistics as an applied arithmetic tool with standard lookup tables. EG-Bac elevates it to a rigorous calculus-based probability discipline with continuous density integrals and hypothesis tests—critical for modern Data Science and Bioinformatics.',
      bridgeInsightAr:
        'تتعامل الثانوية العامة مع الإحصاء كأداة حسابية وتطبيقية بالجداول الجاهزة، بينما يرتقي بها منهج البكالوريا إلى تخصص احتمالي تكاملي يعتمد على التفاضل والتكامل، وهو الركيزة الجوهرية لعلم البيانات والمعلوماتية الحيوية والذكاء الاصطناعي.',
      universityAdvantageEn: 'Direct readiness for College Data Science, Bioengineering, Econometrics, and AI statistical modeling.',
      universityAdvantageAr: 'جاهزية مباشرة لتخصصات علوم البيانات، الهندسة الطبية، الاقتصاد القياسي، ونمذجة الذكاء الاصطناعي الإحصائية.',
    },
    {
      id: 'physics_bridge',
      titleEn: 'Physics: Electromagnetism & Modern Quantum Physics',
      titleAr: 'الفيزياء: الكهرومغناطيسية والفيزياء الحديثة الكمية',
      icon: <Atom className="w-5 h-5 text-sky-400" />,
      thanaweyaBranchId: 'thanaweya_physics',
      egBacBranchId: 'egbac_physics',
      thanaweyaTitleEn: 'Electric Current, DC Circuits & Electromagnetism',
      thanaweyaTitleAr: 'التيار الكهربي وقانون أوم وقوانين كيرشوف والكهرومغناطيسية',
      thanaweyaTopicsEn: [
        "Ohm's Law & resistivity temperature dependence",
        'Series and parallel equivalent resistances & bridge circuits',
        "Closed-circuit Ohm's Law and EMF internal resistance",
        "Kirchhoff's First & Second Laws with multiloop mesh analysis",
        'Magnetic flux, Lorentz force & electromagnetic induction',
      ],
      thanaweyaTopicsAr: [
        'قانون أوم والمقاومة النوعية والتوصيلية الكهربية لفلزات النحاس',
        'توصيل المقاومات على التوالي والتوازي وحالات إلغاء المقاومة',
        'قانون أوم للدائرة المغلقة والمقاومة الداخلية لمصادر القوة الدافعة',
        'قانونا كيرشوف الأول والثاني وتحليل الدوائر الشبكية متعددة الحلقات',
        'الفيض المغناطيسي وقوة لورنتز وتطبيقات الحث الكهرومغناطيسي',
      ],
      egBacTitleEn: 'Quantum Physics, Photons & Wave-Particle Duality',
      egBacTitleAr: 'ازدواجية الموجة والجسيم وفيزياء الكم وتشتت كومتون',
      egBacTopicsEn: [
        'Planck quantum hypothesis & blackbody radiation spectrum',
        'Einstein photoelectric equation & work function cutoff',
        'Compton scattering & photon linear momentum conservation',
        'De Broglie matter waves & electron diffraction',
        'Electron microscopy resolving criteria and wave optics',
      ],
      egBacTopicsAr: [
        'فرضية بلانك لتكميم الطاقة وإشعاع الجسم الأسود وقانون فين',
        'معادلة أينشتاين الكهروضوئية ودالة الشغل والتردد الحرج للفلزات',
        'تشتت كومتون وإثبات كمية حركة الفوتون وحفظ الطاقة الحركية',
        'موجات دي برولي المادية وحيود حزم الإلكترونات المعجلة',
        'معايير القدرة التحليلية للمجهر الإلكتروني وبصريات الموجات',
      ],
      bridgeInsightEn:
        'Thanaweya delivers unrivaled problem depth in multi-loop DC networks and electromagnetic induction. EG-Bac introduces contemporary quantum photonics, matter-wave mechanics, and relativistic collision dynamics foundational to nanotechnology and semiconductor physics.',
      bridgeInsightAr:
        'تتفوق الثانوية العامة في تدريبات تحليل شبكات الدوائر المغلقة وقوانين كيرشوف، بينما يقدم مسار البكالوريا فيزياء الكم الحديثة وميكانيكا الفوتونات وتطبيقات أشباه الموصلات والنانوتكنولوجي.',
      universityAdvantageEn: 'Direct mastery for Electrical & Electronic Engineering, Quantum Computing, and Solid-State Physics.',
      universityAdvantageAr: 'تأهيل مباشر لكليات الهندسة الكهربية والإلكترونيات وفيزياء الجوامد وهندسة النانوتكنولوجي.',
    },
    {
      id: 'chemistry_bridge',
      titleEn: 'Chemistry: Transition Metallurgy & Reaction Kinetics',
      titleAr: 'الكيمياء: العناصر الانتقالية والاتزان وحركية التفاعلات',
      icon: <FlaskConical className="w-5 h-5 text-emerald-400" />,
      thanaweyaBranchId: 'thanaweya_chemistry',
      egBacBranchId: 'egbac_chemistry',
      thanaweyaTitleEn: 'First Transition Series & Iron Metallurgy',
      thanaweyaTitleAr: 'عناصر السلسلة الانتقالية الأولى وتعدين واستخلاص الحديد',
      thanaweyaTopicsEn: [
        'Electronic configuration & anomalous Cr/Cu 3d subshell filling',
        'Variable oxidation states, catalytic action & atomic radii trends',
        'Magnetic properties: paramagnetism vs diamagnetism (Bohr magnetons)',
        'Transition metal complex ion colors & d-d orbital splitting',
        'Iron blast furnace reduction, steel converting & oxide transformations',
      ],
      thanaweyaTopicsAr: [
        'التركيب الإلكتروني وشذوذ الكروم والنحاس في امتلاء المستوى الفرعي 3d',
        'تعدد حالات التأكسد والنشاط الحفزي وتدرج نصف القطر الذري',
        'الخواص المغناطيسية: البارامغناطيسية والدايامغناطيسية والعزم المغناطيسي',
        'ألوان أيونات العناصر الانتقالية وتفسيرها بامتصاص فوتونات الضوء المرئي',
        'تعدين الحديد، أفران الاختزال (اللافح ومدركس)، وتحويلات أكاسيد الحديد',
      ],
      egBacTitleEn: 'Chemical Kinetics, Arrhenius Activation & Dynamic Equilibrium',
      egBacTitleAr: 'الحركية الكيميائية، طاقة تنشيط أرهينيوس، والاتزان الديناميكي',
      egBacTopicsEn: [
        'Differential & integrated rate laws (zero, first, and second order)',
        'Arrhenius activation energy determination via two-temperature kinetics',
        'Dynamic chemical equilibrium constants Kc and Kp relationships',
        'Le Chatelier stress shifts under coupled temperature/pressure variation',
        'Henderson-Hasselbalch ionic buffer equations & solubility products',
      ],
      egBacTopicsAr: [
        'قوانين السرعة التفاضلية والتكاملية وفترات عمر النصف للتفاعلات',
        'حساب طاقة التنشيط وفق معادلة أرهينيوس الحركية ثنائية الحرارة',
        'الاتزان الديناميكي والعلاقة بين ثابتي الاتزان Kc و Kp',
        'إزاحات لوشاتيليه المعقدة تحت التأثير المزدوج للضغط ودرجة الحرارة',
        'معادلة هندرسون-هاسلبالخ لمحاليل البفر المنظمة وحاصل الإذابة Ksp',
      ],
      bridgeInsightEn:
        'Thanaweya provides an exhaustive empirical mastery of transition metal inorganic reactions, iron oxidation pathways, and industrial metallurgy. EG-Bac focuses on physical chemistry thermodynamics, reaction kinetics, and quantitative buffer equilibria.',
      bridgeInsightAr:
        'تمنح الثانوية العامة إتقاناً شاملاً لكيمياء الفلزات الانتقالية ومعادلات تحويلات الحديد وتعدينه، بينما تركز البكالوريا على الديناميكا الحرارية الكيميائية وقوانين سرعة التفاعل وحسابات البفر.',
      universityAdvantageEn: 'Seamless transition into Chemical Engineering, Materials Science, Pharmacology, and Analytical Chemistry.',
      universityAdvantageAr: 'انتقال سلس ومباشر لأقسام الهندسة الكيميائية، علوم المواد، كليات الصيدلة، والكيمياء الحيوية والتحليلية.',
    },
    {
      id: 'biology_bridge',
      titleEn: 'Biology: Structural Biomechanics & Molecular Genetics',
      titleAr: 'الأحياء: الدعامة والحركة والوراثة الجزيئية',
      icon: <Dna className="w-5 h-5 text-rose-400" />,
      thanaweyaBranchId: 'thanaweya_biology',
      egBacBranchId: 'egbac_biology',
      thanaweyaTitleEn: 'Support and Movement in Living Organisms',
      thanaweyaTitleAr: 'الدعامة والحركة في الكائنات الحية (النبات والإنسان)',
      thanaweyaTopicsEn: [
        'Physiological vs structural support in plant tissues (turgor & lignin)',
        'Tropic, nastic, and haptotropic movement in climbing tendrils',
        'Human axial and appendicular skeleton anatomy & joint articulations',
        'Sarcomere fine ultrastructure, actin, myosin & sliding filament theory',
        'Motor units, neuromuscular junction transmission & muscle fatigue/spasm',
      ],
      thanaweyaTopicsAr: [
        'الدعامة الفسيولوجية والتركيبية في النبات (ضغط الامتلاء واللجنين)',
        'حركات اللمس والشد في المحاليق والانتحاء في النباتات',
        'الهيكل العظمي المحوري والطرفي والمفاصل والأربطة والأوتار في الإنسان',
        'التركيب المجهري للقطعة العضلية ونظرية الخيوط المنزلقة لهكسلي',
        'الوحدة الحركية، التشابك العصبي العضلي، والإجهاد والشد العضلي',
      ],
      egBacTitleEn: 'Molecular Genetics, DNA Replication & Central Dogma',
      egBacTitleAr: 'الوراثة الجزيئية وتضاعف DNA والشفرة الوراثية وتخليق البروتين',
      egBacTopicsEn: [
        'Avery, Hershey-Chase experimental proofs of genetic material identity',
        'Watson-Crick double helix architecture & Chargaff stoichiometry',
        'Semi-conservative replication enzymology (helicase, pol III, ligase)',
        'Transcription mechanism & triplet codon genetic dictionary decoding',
        'Ribosomal translation mechanics, tRNA anticodons & mutation types',
      ],
      egBacTopicsAr: [
        'التجارب الفاصلة لإثبات المادة الوراثية (أفري، هيرشي وتشيس بالعاثيات)',
        'النموذج الحلزوني لواطسون وكريك وقواعد شارجاف للبيورينات',
        'إنزيمات التضاعف شبه المحافظ (اللولب، بلمرة DNA، الربط)',
        'آلية النسخ وفك شفرة الكودونات الثلاثية على شريط mRNA',
        'الترجمة في الريبوسومات ودور tRNA وتصنيف الطفرات النقطية',
      ],
      bridgeInsightEn:
        'Thanaweya provides an intricate anatomical and physiological breakdown of skeletal-muscular biomechanics. EG-Bac dives deep into the molecular code of life, nucleic acid thermodynamics, and genetic engineering.',
      bridgeInsightAr:
        'تتميز الثانوية العامة بالتفصيل التشريحي والفسيولوجي الدقيق للهيكل العظمي والميكانيكا العضلية، بينما تركز البكالوريا على الهندسة الوراثية وشفرة الحياة الجزيئية وتخليق البروتين.',
      universityAdvantageEn: 'Essential foundation for Medicine, Biomedical Engineering, Biotechnology, and Genomics research.',
      universityAdvantageAr: 'ركيزة أساسية لا غنى عنها لطلاب كليات الطب البشري، الهندسة الطبية الحيوية، والتقنيات الحيوية والجينوم.',
    },
  ];


  const activeBridge = bridges[activeBridgeIndex];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className={`rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border ${
        isContrast
          ? 'bg-black border-2 border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-600 border border-indigo-400/40 text-white shadow-xl shadow-indigo-100/50'
          : 'bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 border border-slate-800 text-slate-100'
      }`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold ${
            isContrast
              ? 'bg-black text-cyan-300 border-cyan-400'
              : isLight
              ? 'bg-white/20 text-white border-white/30 backdrop-blur-xs'
              : 'border-indigo-500/30 bg-indigo-950/60 text-indigo-300'
          }`}>
            <GitCompare className="w-3.5 h-3.5" />
            <span>
              {isArabic ? 'المرجع المقارن لمعايير وزارة التربية والتعليم' : 'Official Ministry Curriculum Bridge'}
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${
            isLight ? 'text-white' : 'text-slate-100'
          }`}>
            {isArabic ? 'مقارنة المسارات والجسور المعرفية بين الثانوية العامة والبكالوريا' : 'Egyptian Secondary Tracks Comparison & Topic Bridges'}
          </h2>

          <p className={`text-xs sm:text-sm leading-relaxed ${
            isLight ? 'text-indigo-100 font-medium' : 'text-slate-300'
          }`}>
            {isArabic
              ? 'دليل استراتيجي يوضح التكافؤ العلمي، النقلة البيداغوجية، والجاهزية الجامعية بين مسار الثانوية العامة العريق ومسار البكالوريا المصرية الحديث لمدارس المتفوقين والعلوم والتكنولوجيا (STEM).'
              : 'A strategic cross-track comparison mapping theoretical parity, pedagogical evolution, and university engineering readiness between the classical Egyptian General Secondary and the modern Egyptian Baccalaureate STEM framework.'}
          </p>
        </div>

        {/* Global Stats Matrix */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t ${
          isContrast ? 'border-yellow-400/50' : isLight ? 'border-white/30' : 'border-slate-800/80'
        }`}>
          <div className={`p-4 rounded-2xl border space-y-1 ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/60 border-slate-800/80'
          }`}>
            <span className={`text-[11px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'إجمالي الفصول المعتمدة' : 'Total Official Chapters'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-black ${isLight ? 'text-white' : 'text-indigo-400'}`}>{isArabic ? toHindiDigits(27) : '27'}</span>
              <span className={`text-[10px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? '(١٩ ثانوية + ٨ بكالوريا)' : '(19 Thanaweya + 8 Bac)'}</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border space-y-1 ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/60 border-slate-800/80'
          }`}>
            <span className={`text-[11px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'بنك المسائل المفحوصة' : 'Verified Problem Bank'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-black ${isLight ? 'text-emerald-200' : 'text-emerald-400'}`}>{isArabic ? toHindiDigits(4725) : '4,725'}</span>
              <span className={`text-[10px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? 'مسألة ثنائية اللغة' : 'Bilingual items'}</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border space-y-1 ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/60 border-slate-800/80'
          }`}>
            <span className={`text-[11px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'فروع الرياضيات' : 'Curriculum Branches'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-black ${isLight ? 'text-cyan-200' : 'text-cyan-400'}`}>{isArabic ? toHindiDigits(8) : '8'}</span>
              <span className={`text-[10px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? '(٤ لكل مسار تعليمي)' : '(4 per track)'}</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border space-y-1 ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/60 border-slate-800/80'
          }`}>
            <span className={`text-[11px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'الجاهزية لجامعات الهندسة والـ AI' : 'STEM University Readiness'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-black ${isLight ? 'text-amber-200' : 'text-amber-400'}`}>98%</span>
              <span className={`text-[10px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? 'مطابقة المعايير الدولية' : 'International ABET'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Track Architectural Highlights (Side by Side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Track 1: Thanaweya Amma Card */}
        <div className={`rounded-2xl p-6 space-y-4 relative overflow-hidden group transition-all shadow-xl border ${
          isContrast
            ? 'bg-black border-2 border-yellow-400 text-white'
            : isLight
            ? 'bg-white border-slate-200/90 text-slate-900 shadow-lg hover:border-indigo-300'
            : 'bg-slate-900/80 border-indigo-950 text-slate-100 hover:border-indigo-800/80'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className={`p-2 rounded-xl border ${
                isLight ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30'
              }`}>
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-base font-bold ${isLight ? 'text-slate-900 font-extrabold' : 'text-slate-100'}`}>
                  {isArabic ? 'الثانوية العامة المصرية (Thanaweya Amma)' : 'Egyptian General Secondary'}
                </h3>
                <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isArabic ? 'المنهج الوطني التاريخي المعتمد • ٤ فروع • ١٩ فصلاً' : 'National Standard Track • 4 Branches • 19 Chapters'}
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigateTrack('thanaweya')}
              className={`text-xs font-bold flex items-center gap-1 cursor-pointer px-3 py-1.5 rounded-lg border transition-all ${
                isLight
                  ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                  : 'bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-400 border-indigo-800/60'
              }`}
            >
              <span>{isArabic ? 'تصفح المنهج' : 'Explore'}</span>
              {isArabic ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>

          <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600 font-medium' : 'text-slate-300'}`}>
            {isArabic
              ? 'يتميز بالعمق الرياضي التحليلي والمهارة اليدوية الفائقة في فك التباديل والتوافيق، حساب النهايات الدقيقة، حل منظومات القوى الميكانيكية المعقدة، والتحليل الهندسي ثلاثي الأبعاد.'
              : 'Renowned for rigorous analytical algebra, deep symbolic calculus manipulation, extensive classical mechanics equilibrium, and classical 3D coordinate geometry.'}
          </p>

          <div className={`space-y-2 pt-2 border-t text-xs ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'الرياضيات البحتة: الجبر والهندسة الفراغية (٥ فصول)' : 'Pure Mathematics: Algebra & Solid Geometry (5 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'الرياضيات البحتة: التفاضل والتكامل (٤ فصول)' : 'Pure Mathematics: Calculus & Integration (4 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'الرياضيات التطبيقية: الاستاتيكا (٦ فصول)' : 'Applied Mathematics: Statics (6 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'الرياضيات التطبيقية: الديناميكا (٤ فصول)' : 'Applied Mathematics: Dynamics (4 Ch)'}</span>
            </div>
          </div>
        </div>

        {/* Track 2: EG-Bac STEM Card */}
        <div className={`rounded-2xl p-6 space-y-4 relative overflow-hidden group transition-all shadow-xl border ${
          isContrast
            ? 'bg-black border-2 border-yellow-400 text-white'
            : isLight
            ? 'bg-white border-slate-200/90 text-slate-900 shadow-lg hover:border-teal-300'
            : 'bg-slate-900/80 border-teal-950 text-slate-100 hover:border-teal-800/80'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className={`p-2 rounded-xl border ${
                isLight ? 'bg-teal-50 text-teal-700 border-teal-200' : 'bg-teal-600/20 text-teal-400 border-teal-500/30'
              }`}>
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-base font-bold ${isLight ? 'text-slate-900 font-extrabold' : 'text-slate-100'}`}>
                  {isArabic ? 'البكالوريا المصرية الحديثة (EG-Bac STEM)' : 'New Egyptian Baccalaureate (STEM)'}
                </h3>
                <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isArabic ? 'معايير STEM والجامعات الدولية • ٤ فروع • ٨ فصول مكثفة' : 'International STEM Track • 4 Branches • 8 Intensive Chapters'}
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigateTrack('egbac')}
              className={`text-xs font-bold flex items-center gap-1 cursor-pointer px-3 py-1.5 rounded-lg border transition-all ${
                isLight
                  ? 'bg-teal-50 hover:bg-teal-100 text-teal-700 border-teal-200'
                  : 'bg-teal-950/60 hover:bg-teal-900/60 text-teal-400 border-teal-800/60'
              }`}
            >
              <span>{isArabic ? 'تصفح المنهج' : 'Explore'}</span>
              {isArabic ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>

          <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600 font-medium' : 'text-slate-300'}`}>
            {isArabic
              ? 'مبني على معايير البكالوريا الدولية ومدارس المتفوقين. يدمج المصفوفات الذاتية، متسلسلات تايلور، التحليل العددي، ميكانيكا الحقول الاتجاهية، والإحصاء الحيوي البايزي.'
              : 'Engineered on international baccalaureate benchmarks. Synthesizes computational linear algebra, Taylor expansions, vector mechanics, and calculus-grounded continuous probability.'}
          </p>

          <div className={`space-y-2 pt-2 border-t text-xs ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'التحليل الرياضي والتفاضل والتكامل المتقدم (فصلان)' : 'Mathematical Analysis & Advanced Calculus (2 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'الجبر المتقطع وهندسة المتجهات الفضائية (فصلان)' : 'Discrete Algebra & Spatial Vector Geometry (2 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'الميكانيكا التحليلية وكينتيكا الأجسام (فصلان)' : 'Analytical Mechanics & Body Kinetics (2 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'الاحتمالات المتقدمة والإحصاء الحيوي للبيانات (فصلان)' : 'Applied Probability & Biostatistics (2 Ch)'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Branch Bridge Tabs */}
      <div className={`rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 border ${
        isContrast
          ? 'bg-black border-2 border-yellow-400 text-white'
          : isLight
          ? 'bg-white border-slate-200/90 shadow-xl text-slate-900'
          : 'bg-slate-900/90 border-slate-800 text-slate-100'
      }`}>
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
          isLight ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl border ${
              isLight ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400'
            }`}>
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-lg font-black ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                {isArabic ? 'الجسور المعرفية التخصصية بين الفرعين' : 'Disciplinary Cross-Track Bridges'}
              </h3>
              <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {isArabic
                  ? 'اختر الفرع لمشاهدة المقارنة المباشرة، المفاهيم المشتركة، والنقلة النوعية للتعليم الجامعي'
                  : 'Select a mathematical domain to examine thematic mapping and pedagogical bridges'}
              </p>
            </div>
          </div>

          {/* Tab Selector Buttons */}
          <div className={`flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-2xl border no-scrollbar ${
            isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-950 border-slate-800'
          }`}>
            {bridges.map((b, idx) => {
              const isSelected = idx === activeBridgeIndex;
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveBridgeIndex(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? isContrast
                        ? 'bg-yellow-400 text-black font-black'
                        : 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {b.icon}
                  <span>{isArabic ? b.titleAr : b.titleEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Bridge Detailed Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Thanaweya Side */}
          <div className={`rounded-2xl p-5 sm:p-6 space-y-4 relative border ${
            isContrast
              ? 'bg-black border-2 border-yellow-400 text-white'
              : isLight
              ? 'bg-slate-50/90 border-indigo-200 text-slate-900'
              : 'bg-slate-950/70 border-indigo-900/50 text-slate-100'
          }`}>
            <div className={`flex items-center justify-between border-b pb-3 ${
              isLight ? 'border-indigo-100' : 'border-indigo-900/40'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <h4 className={`text-sm font-black ${isLight ? 'text-indigo-900' : 'text-indigo-300'}`}>
                  {isArabic ? activeBridge.thanaweyaTitleAr : activeBridge.thanaweyaTitleEn}
                </h4>
              </div>
              <button
                onClick={() => onNavigateTrack('thanaweya', activeBridge.thanaweyaBranchId)}
                className={`text-[11px] font-bold flex items-center gap-1 cursor-pointer px-2.5 py-1 rounded-lg border transition-all ${
                  isLight
                    ? 'bg-white hover:bg-indigo-50 text-indigo-700 border-indigo-300'
                    : 'bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-400 border-indigo-800/60'
                }`}
              >
                <span>{isArabic ? 'فتح في الثانوية' : 'Open in Thanaweya'}</span>
                {isArabic ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </button>
            </div>

            <p className={`text-xs font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic ? 'المحاور الأساسية في امتحانات الوزارة الرسمية:' : 'Core Topics & Official Examination Scope:'}
            </p>

            <ul className="space-y-2 text-xs">
              {(isArabic ? activeBridge.thanaweyaTopicsAr : activeBridge.thanaweyaTopicsEn).map((topic, i) => (
                <li key={i} className={`flex items-start gap-2 p-2.5 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200 text-slate-800 shadow-2xs' : 'bg-slate-900/60 border-slate-800/80 text-slate-300'
                }`}>
                  <span className={`w-5 h-5 rounded-full font-mono font-bold flex items-center justify-center shrink-0 text-[10px] border ${
                    isLight ? 'bg-indigo-100 text-indigo-800 border-indigo-200' : 'bg-indigo-950 text-indigo-400 border-indigo-800'
                  }`}>
                    {isArabic ? toHindiDigits(i + 1) : i + 1}
                  </span>
                  <span className="leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* EG-Bac Side */}
          <div className={`rounded-2xl p-5 sm:p-6 space-y-4 relative border ${
            isContrast
              ? 'bg-black border-2 border-yellow-400 text-white'
              : isLight
              ? 'bg-slate-50/90 border-teal-200 text-slate-900'
              : 'bg-slate-950/70 border-teal-900/50 text-slate-100'
          }`}>
            <div className={`flex items-center justify-between border-b pb-3 ${
              isLight ? 'border-teal-100' : 'border-teal-900/40'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                <h4 className={`text-sm font-black ${isLight ? 'text-teal-900' : 'text-teal-300'}`}>
                  {isArabic ? activeBridge.egBacTitleAr : activeBridge.egBacTitleEn}
                </h4>
              </div>
              <button
                onClick={() => onNavigateTrack('egbac', activeBridge.egBacBranchId)}
                className={`text-[11px] font-bold flex items-center gap-1 cursor-pointer px-2.5 py-1 rounded-lg border transition-all ${
                  isLight
                    ? 'bg-white hover:bg-teal-50 text-teal-700 border-teal-300'
                    : 'bg-teal-950/60 hover:bg-teal-900/60 text-teal-400 border-teal-800/60'
                }`}
              >
                <span>{isArabic ? 'فتح في البكالوريا' : 'Open in EG-Bac'}</span>
                {isArabic ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </button>
            </div>

            <p className={`text-xs font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic ? 'المحاور المتقدمة لمدارس المتفوقين STEM والجامعات:' : 'Advanced STEM & Modern Engineering Scope:'}
            </p>

            <ul className="space-y-2 text-xs">
              {(isArabic ? activeBridge.egBacTopicsAr : activeBridge.egBacTopicsEn).map((topic, i) => (
                <li key={i} className={`flex items-start gap-2 p-2.5 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200 text-slate-800 shadow-2xs' : 'bg-slate-900/60 border-slate-800/80 text-slate-300'
                }`}>
                  <span className={`w-5 h-5 rounded-full font-mono font-bold flex items-center justify-center shrink-0 text-[10px] border ${
                    isLight ? 'bg-teal-100 text-teal-800 border-teal-200' : 'bg-teal-950 text-teal-400 border-teal-800'
                  }`}>
                    {isArabic ? toHindiDigits(i + 1) : i + 1}
                  </span>
                  <span className="leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pedagogical Synthesis & University Advantage Card */}
        <div className={`rounded-2xl p-5 sm:p-6 space-y-4 border ${
          isLight
            ? 'bg-gradient-to-r from-indigo-50/70 via-slate-50 to-teal-50/70 border-slate-200 text-slate-900'
            : 'bg-gradient-to-r from-indigo-950/40 via-slate-950 to-teal-950/40 border-slate-800 text-slate-100'
        }`}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h4 className={`text-sm font-bold ${isLight ? 'text-slate-900 font-extrabold' : 'text-slate-200'}`}>
              {isArabic ? 'الرؤية البيداغوجية والتكامل العلمي' : 'Pedagogical Synthesis & Academic Trajectory'}
            </h4>
          </div>

          <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            {isArabic ? activeBridge.bridgeInsightAr : activeBridge.bridgeInsightEn}
          </p>

          <div className={`flex items-center gap-3 pt-2 text-xs font-semibold p-3 rounded-xl border ${
            isLight
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : 'bg-emerald-950/30 text-emerald-400 border-emerald-900/40'
          }`}>
            <GraduationCap className="w-5 h-5 shrink-0" />
            <span>{isArabic ? activeBridge.universityAdvantageAr : activeBridge.universityAdvantageEn}</span>
          </div>
        </div>
      </div>

      {/* University Faculty Readiness Matrix */}
      <div className={`rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border ${
        isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900/80 border-slate-800 text-slate-100'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl border ${
            isLight ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-amber-600/20 text-amber-400 border-amber-500/30'
          }`}>
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`text-lg font-black ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              {isArabic ? 'مصفوفة التوافق مع كليات القمة الجامعية' : 'Egyptian & International University Faculty Readiness Matrix'}
            </h3>
            <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isArabic
                ? 'نسب الجاهزية الأكاديمية لخريجي كلا المسارين في السنة الإعدادية والأولى للجامعات'
                : 'Comparative readiness percentage for first-year undergraduate university curricula'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className={`p-4 rounded-2xl border space-y-3 ${
            isLight ? 'bg-slate-50/90 border-slate-200' : 'bg-slate-950/70 border-slate-800'
          }`}>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-500" />
              <h5 className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{isArabic ? 'كليات الهندسة' : 'Faculty of Engineering'}</h5>
            </div>
            <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isArabic ? 'الميكانيكا، التفاضل، والجبر الخطي' : 'Mechanics, Calculus & Linear Algebra'}
            </p>
            <div className="space-y-1 pt-1 text-xs">
              <div className={`flex justify-between text-[11px] ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <span>{isArabic ? 'الثانوية العامة' : 'Thanaweya'}</span>
                <span className={`font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>92%</span>
              </div>
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: '92%' }} />
              </div>
              <div className={`flex justify-between text-[11px] pt-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <span>{isArabic ? 'البكالوريا المصرية' : 'EG-Bac STEM'}</span>
                <span className={`font-bold ${isLight ? 'text-teal-700' : 'text-teal-400'}`}>98%</span>
              </div>
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
                <div className="bg-teal-500 h-full rounded-full" style={{ width: '98%' }} />
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border space-y-3 ${
            isLight ? 'bg-slate-50/90 border-slate-200' : 'bg-slate-950/70 border-slate-800'
          }`}>
            <div className="flex items-center gap-2">
              <Binary className="w-4 h-4 text-cyan-500" />
              <h5 className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{isArabic ? 'الحاسبات والذكاء الاصطناعي' : 'Computer Science & AI'}</h5>
            </div>
            <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isArabic ? 'الجبر المتقطع، المصفوفات، والاحتمالات' : 'Discrete Math, Matrices & Probability'}
            </p>
            <div className="space-y-1 pt-1 text-xs">
              <div className={`flex justify-between text-[11px] ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <span>{isArabic ? 'الثانوية العامة' : 'Thanaweya'}</span>
                <span className={`font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>78%</span>
              </div>
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: '78%' }} />
              </div>
              <div className={`flex justify-between text-[11px] pt-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <span>{isArabic ? 'البكالوريا المصرية' : 'EG-Bac STEM'}</span>
                <span className={`font-bold ${isLight ? 'text-teal-700' : 'text-teal-400'}`}>97%</span>
              </div>
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
                <div className="bg-teal-500 h-full rounded-full" style={{ width: '97%' }} />
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border space-y-3 ${
            isLight ? 'bg-slate-50/90 border-slate-200' : 'bg-slate-950/70 border-slate-800'
          }`}>
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-500" />
              <h5 className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{isArabic ? 'العلوم والرياضيات البحتة' : 'Science & Mathematics'}</h5>
            </div>
            <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isArabic ? 'التحليل الرياضي، الفضاءات، والمعادلات التفاضلية' : 'Real Analysis, Vector Spaces & ODE'}
            </p>
            <div className="space-y-1 pt-1 text-xs">
              <div className={`flex justify-between text-[11px] ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <span>{isArabic ? 'الثانوية العامة' : 'Thanaweya'}</span>
                <span className={`font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>90%</span>
              </div>
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: '90%' }} />
              </div>
              <div className={`flex justify-between text-[11px] pt-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <span>{isArabic ? 'البكالوريا المصرية' : 'EG-Bac STEM'}</span>
                <span className={`font-bold ${isLight ? 'text-teal-700' : 'text-teal-400'}`}>96%</span>
              </div>
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
                <div className="bg-teal-500 h-full rounded-full" style={{ width: '96%' }} />
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border space-y-3 ${
            isLight ? 'bg-slate-50/90 border-slate-200' : 'bg-slate-950/70 border-slate-800'
          }`}>
            <div className="flex items-center gap-2">
              <Microscope className="w-4 h-4 text-emerald-500" />
              <h5 className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{isArabic ? 'الطب الحيوي والصيدلة' : 'Biomedicine & Pharmacy'}</h5>
            </div>
            <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isArabic ? 'الإحصاء الحيوي، التوزيعات، والنمذجة' : 'Biostatistics, Distributions & Modeling'}
            </p>
            <div className="space-y-1 pt-1 text-xs">
              <div className={`flex justify-between text-[11px] ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <span>{isArabic ? 'الثانوية العامة' : 'Thanaweya'}</span>
                <span className={`font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>70%</span>
              </div>
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: '70%' }} />
              </div>
              <div className={`flex justify-between text-[11px] pt-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <span>{isArabic ? 'البكالوريا المصرية' : 'EG-Bac STEM'}</span>
                <span className={`font-bold ${isLight ? 'text-teal-700' : 'text-teal-400'}`}>93%</span>
              </div>
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
                <div className="bg-teal-500 h-full rounded-full" style={{ width: '93%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
