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
  Orbit,
  Microscope,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  ChevronDown,
  Mountain,
  Landmark,
  Globe,
  Brain,
  Users,
  Languages,
  Scroll,
  Scale,
  Briefcase,
  Palette,
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
      titleEn: 'Biology: Physiological Systems & Molecular Biotechnology',
      titleAr: 'الأحياء: الأنظمة الفسيولوجية والتكنولوجيا الحيوية الجزيئية',
      icon: <Dna className="w-5 h-5 text-rose-400" />,
      thanaweyaBranchId: 'thanaweya_biology',
      egBacBranchId: 'egbac_biology',
      thanaweyaTitleEn: 'Complete 5-Chapter Curriculum: Support, Hormones, Reproduction, Immunity & DNA',
      thanaweyaTitleAr: 'المنهج المتكامل (٥ فصول): الدعامة والحركة، الهرمونات، التكاثر، المناعة والبيولوجيا الجزيئية',
      thanaweyaTopicsEn: [
        'Ch.1 Support & Movement: Plant turgor/lignification, 206-bone human skeleton & Huxley sliding filament sarcomere contraction',
        'Ch.2 Hormonal Coordination: Hypothalamic-pituitary axis, thyroxine metabolism, adrenal catecholamines & insulin/glucagon homeostasis',
        'Ch.3 Reproduction: Metagenesis alternation, angiosperm double fertilization, human gametogenesis & embryological trimesters',
        'Ch.4 Immune System: Plant phytoalexins, primary/secondary lymphoid organs, B-cell humoral antibodies & cytotoxic T-cell lysis',
        'Ch.5 Molecular Biology: Experimental proofs of DNA, semi-conservative replication, triplet transcription & peptide translation',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ الدعامة والحركة: ضغط الامتلاء واللجنين، الهيكل العظمي (٢٠٦ عظمة)، ونظرية الخيوط المنزلقة لهكسلي بالقطعة العضلية',
        'فصل ٢ التنسيق الهرموني: المحور النخامي، التمثيل الغذائي للثيروكسين، هرمونات الكظرية، والتوازن السكري بالأنسولين والجلوكاجون',
        'فصل ٣ التكاثر: تعاقب الأجيال، الإخصاب المزدوج في النباتات الزهرية، تكوين الأمشاج في الإنسان ومراحل نمو الجنين الثلاث',
        'فصل ٤ الجهاز المناعي: دفاعات النبات الكيميائية، الأعضاء اللمفاوية، الأجسام المضادة الخلطية، ومناعة الخلايا التائية السامة',
        'فصل ٥ البيولوجيا الجزيئية: إثباتات المادة الوراثية، التضاعف شبه المحافظ، نسخ الشفرة الوراثية وبناء الروابط الببتيدية بالريبوسوم',
      ],
      egBacTitleEn: 'Advanced 4-Module STEM Track: Molecular Genetics, Bioenergetics, Immunology & Biotechnology',
      egBacTitleAr: 'المسار المتقدم (٤ فصول): الجينات الجزيئية، الطاقة الحيوية، المناعة الجزيئية والتكنولوجيا الحيوية',
      egBacTopicsEn: [
        'Module 1 Molecular Genetics: Antiparallel double helix architecture, replisome enzymology, proofreading fidelity & operon regulation',
        'Module 2 Cellular Bioenergetics: Glycolytic flux, Krebs tricarboxylic cycle, mitochondrial chemiosmosis & ATP synthase rotor kinetics',
        'Module 3 Molecular Immunology: MHC class I/II peptide presentation, TCR/BCR signal transduction cascades & cytokine networks',
        'Module 4 Biotechnology & Genomics: Type II restriction endonucleases, plasmid cloning vectors, RT-qPCR & CRISPR-Cas9 genome editing',
      ],
      egBacTopicsAr: [
        'وحدة ١ الوراثة الجزيئية: الهندسة الفراغية لـ DNA، معقدات التضاعف الإنزيمية، التدقيق اللغوي للبلمرة وتنظيم الأوبيرون',
        'وحدة ٢ الطاقة الحيوية الخلوية: التحلل السكري، دورة كريبس، التناضح الكيميائي الميتوكوندري وحركية المحرك الدوار لإنزيم ATP',
        'وحدة ٣ المناعة الجزيئية: عرض الببتيدات على بروتينات MHC، مسارات نقل إشارات TCR وBCR وشبكات السيتوكينات المنشطة',
        'وحدة ٤ التكنولوجيا الحيوية: إنزيمات القصر محددة التسلسل، نواقل الاستنساخ البلازميدية، RT-qPCR وتقنية كريسبر كاس٩ للتعديل الجيني',
      ],
      bridgeInsightEn:
        'Thanaweya provides an encyclopedic anatomical and physiological foundation spanning whole-organism endocrine, reproductive, and defense systems. EG-Bac delves into biophysical thermodynamics, molecular signal transduction, chemiosmotic bioenergetics, and cutting-edge genetic engineering biotechnology.',
      bridgeInsightAr:
        'تمنح الثانوية العامة تأسيساً تشريحياً وفسيولوجياً شاملاً يغطي أجهزة الجسم والتنسيق الهرموني والتكاثر والمناعة العضوية، بينما تركز البكالوريا على الديناميكا الحرارية الخلوية ومسارات نقل الإشارات الجزيئية والتكنولوجيا الحيوية والهندسة الوراثية الدقيقة.',
      universityAdvantageEn: 'Unrivaled preparation for Medicine, Dental Surgery, Biomedical Engineering, Biotechnology, Genomics Research, and Pharmacology.',
      universityAdvantageAr: 'إعداد فائق التميز للالتحاق بكليات الطب البشري، طب الأسنان، الهندسة الطبية الحيوية، التكنولوجيا الحيوية، أبحاث الجينوم، وعلم الأدوية.',
    },
    {
      id: 'geology_bridge',
      titleEn: 'Geology: Earth Systems & Environmental Sciences',
      titleAr: 'الجيولوجيا: أنظمة الأرض والعلوم البيئية',
      icon: <Mountain className="w-5 h-5 text-amber-500" />,
      thanaweyaBranchId: 'thanaweya_geology',
      egBacBranchId: 'egbac_geology',
      thanaweyaTitleEn: 'Complete 7-Chapter Curriculum: Earth Structure, Minerals, Rocks, Dynamic Equilibrium & Ecosystems',
      thanaweyaTitleAr: 'المنهج المتكامل (٧ فصول): تركيب الأرض، المعادن، دورة الصخور، التوازن الحركي والنظم البيئية',
      thanaweyaTopicsEn: [
        'Ch.1 Earth Structure & Geologic Time: Crust, mantle, core, relative dating & index fossils',
        'Ch.2 Mineralogy & Crystal Systems: Cleavage, fracture, Mohs hardness & silicate crystal geometry',
        'Ch.3 Petrology & Rock Cycle: Bowen reaction series, basaltic volcanism & regional metamorphism',
        'Ch.4 Dynamic Equilibrium: Wegener continental drift, seafloor spreading & plate boundaries',
        'Ch.5 Geomorphic Surface/Internal Forces: River stages, wind abrasion, karst topography & earthquakes',
        'Ch.6 Ecological Concepts: Marine/desert biomes, food chains, ecological pyramid & balance',
        'Ch.7 Environmental Conservation: Overgrazing, water scarcity, fossil depletion & renewable energy',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ تركيب الأرض والزمن الجيولوجي: القشرة والوشاح واللب، والتأريخ النسبي بالحفريات المرشدة',
        'فصل ٢ علم المعادن والبلورات: الانفصام، المكسر، مقياس موهس للصلادة، والأنظمة البلورية السيليكاتية',
        'فصل ٣ دورة الصخور: متسلسلة تفاعلات بوين، البركانية البازلتية، والتحول الإقليمي والحراري',
        'فصل ٤ التوازن الحركي: الانجراف القاري لفاجنر، اتساع قاع المحيط، وحركات الصفائح التكتونية الثلاث',
        'فصل ٥ العوامل السطحية والباطنية: مراحل النهر، التجوية والحت الريحي، الكارست والكهوف، والزلازل',
        'فصل ٦ المفاهيم البيئية: النظام الإيكولوجي البحري والصحراوي، سلاسل الغذاء، وهرم الطاقة والاتزان',
        'فصل ٧ استنزاف الموارد: الرعي الجائر، ندرة المياه، نفاد الوقود الأحفوري، وبدائل الطاقة المتجددة',
      ],
      egBacTitleEn: 'Advanced 7-Module Geophysics & Earth Systems Engineering Track',
      egBacTitleAr: 'مسار الجيوفيزياء وهندسة أنظمة الأرض (٧ فصول متقدمة)',
      egBacTopicsEn: [
        'Module 1 Planetary Geophysics: Internal seismic tomography, geomagnetic dynamo & gravity anomalies',
        'Module 2 Structural Crystallography: X-ray diffraction, unit-cell parameters & silicate network polymers',
        'Module 3 Geodynamics & Volcanology: Magma rheology, subduction zone thermodynamics & petrogenesis',
        'Module 4 Plate Tectonics: Euler poles, lithospheric flexure, mantle convection & Wilson supercontinent cycle',
        'Module 5 Quantitative Hydrogeology & Geohazards: Darcy flow equations, aquifer modeling & seismic risk',
        'Module 6 Biogeochemistry & Ecosystem Dynamics: Carbon-nitrogen-phosphorus fluxes & trophic efficiencies',
        'Module 7 Climate Change Geosciences: Milankovitch cycles, paleoclimate proxies & carbon sequestration',
      ],
      egBacTopicsAr: [
        'وحدة ١ الجيوفيزياء الكوكبية: التصوير الزلزالي الداخلي، الدينامو المغناطيسي الأرضي وشذوذ الجاذبية',
        'وحدة ٢ علم البلورات التركيبية: حيود الأشعة السينية، أبعاد خلية الوحدة وبوليمرات شبكات السيليكات',
        'وحدة ٣ الجيوديناميكا والبراكين: ريولوجيا الصهارة، الديناميكا الحرارية لنطق الاندساس وتولد الصخور',
        'وحدة ٤ تكتونية الصفائح الكمية: أقطاب أويلر، انثناء الغلاف الصخري، وحمل الوشاح ودورة ويلسون للقارات',
        'وحدة ٥ الهيدروجيولوجيا والمخاطر: معادلات دارسي للجريان، نمذجة الخزانات الجوفية ومصفوفات الخطر الزلزالي',
        'وحدة ٦ الكيمياء البيوجيولوجية: تدفقات الكربون والنيتروجين والفوسفور وكفاءة المستويات الغذائية',
        'وحدة ٧ علوم المناخ القديم: دورات ميلانكوفيتش، مؤشرات المناخ الرسوبية، وتقنيات احتجاز الكربون وتخزينه',
      ],
      bridgeInsightEn:
        'Thanaweya provides an encyclopedic field and stratigraphic foundation for earth materials, mineral identification, and environmental conservation. EG-Bac emphasizes geophysical equations, tectonic thermodynamics, hydrogeological Darcy modeling, and climate resilience.',
      bridgeInsightAr:
        'تمنح الثانوية العامة تأسيساً شاملاً في علم الطبقات والتعرف الحقلي على الصخور والمعادن وحماية البيئة، بينما تركز البكالوريا على النمذجة الجيوفيزيائية الحسابية وديناميكا الصفائح ومعادلات جريان المياه الجوفية والمخاطر الزلزالية.',
      universityAdvantageEn: 'Direct entry into Petroleum Engineering, Mining, Geophysics, Environmental Engineering, and Hydrogeology.',
      universityAdvantageAr: 'مسار مباشر ومميز لكليات هندسة البترول والتعدين، الجيوفيزياء، الهندسة البيئية، وعلوم الأرض والمياه.',
    },
    {
      id: 'history_bridge',
      titleEn: 'History: Modern Egyptian Historiography & Geopolitical Struggles',
      titleAr: 'التاريخ: تاريخ مصر الحديث والمعاصر والتوازنات الجيوسياسية',
      icon: <Landmark className="w-5 h-5 text-amber-600" />,
      thanaweyaBranchId: 'thanaweya_history',
      egBacBranchId: 'egbac_history',
      thanaweyaTitleEn: 'Complete 8-Chapter Curriculum: From the French Expedition to Contemporary Egypt',
      thanaweyaTitleAr: 'المنهج المتكامل (٨ فصول): من الحملة الفرنسية حتى العصر المعاصر',
      thanaweyaTopicsEn: [
        'Ch.1 French Expedition: Bonaparte invasion, Battle of Pyramids, Cairo revolts & cultural institute',
        'Ch.2 Muhammad Ali: Building modern state, monopoly system, military expeditions & Treaty of London',
        'Ch.3 British Occupation & Orabi Revolt: Foreign intervention, Alexandria bombardment & nationalist resistance',
        'Ch.4 1919 Revolution & Interwar Politics: Saad Zaghloul, 1923 Constitution, and 1936 Anglo-Egyptian Treaty',
        'Ch.5 Arab World Under French/British Mandate: Colonial division, independence movements & resistance',
        'Ch.6 Arab-Israeli Conflicts: Balfour Declaration, 1948 Palestine War, 1956 Suez Tripartite Aggression',
        'Ch.7 1967 War of Attrition & 1973 October War: Bar Lev line breach, Ramadan crossing & diplomatic settlement',
        'Ch.8 Contemporary Egypt: 25 January 2011 revolution, constitutional roadmap & 30 June 2013 milestone',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ الحملة الفرنسية: دخول نابليون، معارك الأهرام، ثورتا القاهرة، والمجمع العلمي وفك حجر رشيد',
        'فصل ٢ عصر محمد علي: بناء الدولة الحديثة، نظام الاحتكار، التوسع الإقليمي، ومعاهدة لندن ١٨٤٠',
        'فصل ٣ الثورة العرابية والاحتلال: التدخل الأجنبي، ضرب الإسكندرية، كفاح مصطفى كامل ومحمد فريد',
        'فصل ٤ ثورة ١٩١٩ والعهد شبه الليبرالي: سعد زغلول، تصريح ٢٨ فبراير، دستور ١٩٢٣، ومعاهدة ١٩٣٦',
        'فصل ٥ التوسع الاستعماري في الوطن العربي: اتفاقية سايكس بيكو، الثورة العربية، وحركات التحرر الوطني',
        'فصل ٦ الصراع العربي الإسرائيلي: وعد بلفور، حرب فلسطين ١٩٤٨، والعدوان الثلاثي على مصر ١٩٥٦',
        'فصل ٧ نكسة ١٩٦٧ وحرب أكتوبر ١٩٧٣: حرب الاستنزاف، عبور خط بارليف، والمسار الدبلوماسي للسلام',
        'فصل ٨ مصر المعاصرة: ثورة ٢٥ يناير ٢٠١١، التحولات الدستورية، ومكتسبات ثورة ٣٠ يونيو ٢٠١٣',
      ],
      egBacTitleEn: 'Advanced 8-Module Historiography, Diplomatic Treaties & Statecraft Track',
      egBacTitleAr: 'المسار المتقدم (٨ فصول): النقد التاريخي، التحالفات الدبلوماسية، ونظريات بناء الدولة',
      egBacTopicsEn: [
        'Module 1 Historiographical Methodology: Primary archival appraisal, internal/external critique & bias detection',
        'Module 2 Comparative State Modernization: Muhammad Ali state monopoly vs. Meiji Restoration & Ottoman Tanzimat',
        'Module 3 Imperialism & Geoeconomics: Suez Canal concession, sovereign debt crises & colonial protectorate',
        'Module 4 Constitutionalism & Mass Mobilization: 1919 revolutionary synergy, party politics & bilateral diplomacy',
        'Module 5 Decolonization & Non-Alignment: 1952 Afro-Asian solidarity, Bandung conference & Suez nationalization',
        'Module 6 Cold War Geopolitics in the Middle East: Superpower proxy tensions, armaments races & strategic deterrence',
        'Module 7 Military Strategy & Electronic Warfare: Operation Badr air-defense umbrella, canal breach & negotiations',
        'Module 8 Democratic Transitions & Institutional Resilience: Comparative revolutions & constitutional frameworks',
      ],
      egBacTopicsAr: [
        'وحدة ١ مناهج النقد التاريخي: فحص الوثائق الأرشيفية، نقد المصادر الداخلي والخارجي، وتحري النزاهة العلمية',
        'وحدة ٢ التحديث المؤسسي المقارن: نموذج احتكار محمد علي مقابل نهضة الميجي اليابانية والتنظيمات العثمانية',
        'وحدة ٣ الاستعمار والجيواقتصاد: امتياز قناة السويس، أزمات الديون السيادية، وفرض نظام الحماية الاستعمارية',
        'وحدة ٤ الدستورية والحراك الجماهيري: التلاحم الشعبي في ثورة ١٩١٩، التعددية الحزبية، والمفاوضات الدبلوماسية',
        'وحدة ٥ تصفية الاستعمار وعدم الانحياز: ثورة ١٩٥٢، التضامن الأفروآسيوي، مؤتمر باندونغ، وتأميم القناة',
        'وحدة ٦ الحرب الباردة في الشرق الأوسط: صراع القطبين بالوكالة، سباق التسلح، والاستراتيجيات الدفاعية',
        'وحدة ٧ العلوم العسكرية وحرب أكتوبر: مظلة الدفاع الجوي في عملية بدر، تكتيكات العبور، ومفاوضات السلام',
        'وحدة ٨ التحولات الديمقراطية والصلابة المؤسسية: دراسات الثورات المقارنة وأطر بناء الدساتير الحديثة',
      ],
      bridgeInsightEn:
        'Thanaweya provides an encyclopedic chronological narrative of Egypt’s sovereignty and nationalist triumphs. EG-Bac introduces historiographical method, archival analysis, diplomatic geopolitical synthesis, and institutional statecraft comparisons.',
      bridgeInsightAr:
        'تمنح الثانوية العامة إتقاناً شاملاً للتسلسل الزمني التاريخي ومسيرة النضال والسيادة الوطنية، بينما تعمق البكالوريا مناهج البحث التاريخي ونقد المصادر وتحليل التحالفات الدولية ونظريات بناء الدولة الحديثة.',
      universityAdvantageEn: 'Elite preparation for Political Science, Diplomatic Service, International Law, Public Administration, and Journalism.',
      universityAdvantageAr: 'تأهيل متميز لكليات الاقتصاد والعلوم السياسية، المعهد الدبلوماسي، القانون الدولي، والإعلام والاتصال السياسي.',
    },
    {
      id: 'geography_bridge',
      titleEn: 'Geography: Political Geography & Global Geopolitical Systems',
      titleAr: 'الجغرافيا: الجغرافيا السياسية والنظم الجيوسياسية العالمية',
      icon: <Globe className="w-5 h-5 text-teal-500" />,
      thanaweyaBranchId: 'thanaweya_geography',
      egBacBranchId: 'egbac_geography',
      thanaweyaTitleEn: 'Complete 5-Chapter Curriculum: State Concept, Morphology, Boundaries, Alliances & New World Order',
      thanaweyaTitleAr: 'المنهج المتكامل (٥ فصول): مفهوم الدولة، المورفولوجيا، الحدود، التكتلات والنظام العالمي',
      thanaweyaTopicsEn: [
        'Ch.1 State Definition & Morphology: Nation vs. state, geographic location, shape, area & topography',
        'Ch.2 Demographic & Economic Power: Population structure, resources, agricultural/industrial self-sufficiency',
        'Ch.3 Political Boundaries: Evolution, linear boundary functions, border disputes (Taba, Ceuta/Melilla, water)',
        'Ch.4 Economic Blocs & Military Alliances: European Union, GCC, COMESA, NATO & Warsaw Pact',
        'Ch.5 New World Order: Geopolitical characteristics, globalization impacts, international organizations & hegemony',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ مفهوم الدولة ومورفولوجيتها: الفرق بين الدولة والأمة، الموقع الجغرافي، المساحة والشكل والتضاريس',
        'فصل ٢ المقومات الديموغرافية والاقتصادية: التركيب السكاني والعمري، الإنتاج الزراعي والصناعي، والقدرة العسكرية',
        'فصل ٣ الحدود السياسية: مراحل تخطيط الحدود الخطية، وظائفها، ونزاعات الحدود (طابا، سبتة ومليلية، والمياه الدولية)',
        'فصل ٤ التكتلات الاقتصادية والأحلاف العسكرية: الاتحاد الأوروبي، مجلس التعاون الخليجي، الكوميسا، والناتو',
        'فصل ٥ النظام العالمي الجديد: خصائص النظام العالمي، قضايا العولمة، هيمنة الشركات، ودور المنظمات الدولية',
      ],
      egBacTitleEn: 'Advanced 5-Module Geopolitical Analytics, GIS Cartography & Strategic Chokepoints Track',
      egBacTitleAr: 'المسار المتقدم (٥ فصول): التحليل الجيوسياسي، خرائط نظم المعلومات الجغرافية والممرات الاستراتيجية',
      egBacTopicsEn: [
        'Module 1 Geopolitical Spatial Theory: Mackinder Heartland, Spykman Rimland, Mahan Sea Power & Ratzel organic state',
        'Module 2 GIS & Satellite Cartography: Vector/raster spatial analysis, remote sensing indices & digital elevation modeling',
        'Module 3 Maritime Geopolitics & Chokepoints: UNCLOS territorial seas, EEZ rights, Suez Canal & Bab el-Mandeb security',
        'Module 4 Geoeconomic Multilateralism: Regional trade agreements, supply chain resiliency & energy transit corridors',
        'Module 5 Post-Cold War Global Dynamics: Multipolarity, cyber borders, resource security & asymmetric threats',
      ],
      egBacTopicsAr: [
        'وحدة ١ النظريات الجيوسياسية المكانية: قلب الأرض لماكيندر، الإطار الساحلي لسبايكمان، القوة البحرية لماهان، وعضوية راتزل',
        'وحدة ٢ نظم المعلومات الجغرافية (GIS): التحليل المكاني الخرائطي، مرئيات الاستشعار عن بعد، ونماذج الارتفاع الرقمي',
        'وحدة ٣ جيوبوليتيك المضايق والبحار: اتفاقية الأمم المتحدة لأعالي البحار (UNCLOS)، المنطقة الاقتصادية، وأمن قناة السويس',
        'وحدة ٤ الجيواقتصاد والتكتلات: سلاسل الإمداد العالمية، كفاءة التجارة البينية، وممرات عبور الطاقة الاستراتيجية',
        'وحدة ٥ ديناميات النظام متعدد الأقطاب: التعددية القطبية، الحدود السيبرانية، أمن الموارد المائية، والتهديدات الهجينة',
      ],
      bridgeInsightEn:
        'Thanaweya provides an extensive ministerial geopolitical foundation covering state elements, borders, and regional blocs. EG-Bac pairs this with GIS cartography, maritime law (UNCLOS), spatial theory, and geoeconomic supply chain analysis.',
      bridgeInsightAr:
        'تمنح الثانوية العامة إحاطة متكاملة بعناصر قوة الدولة وحدودها ومورفولوجيتها والتكتلات الإقليمية، بينما تضيف البكالوريا أدوات التحليل الجغرافي المكاني ونظم GIS، وقوانين البحار الدولية، والجيواقتصاد المعاصر.',
      universityAdvantageEn: 'Elite foundation for Urban Planning, Strategic Studies, International Logistics, Geomatics, and Diplomacy.',
      universityAdvantageAr: 'إعداد استراتيجي لكليات التخطيط العمراني، الدراسات الاستراتيجية، اللوجستيات الدولية، الجيوماتكس، والعلوم الدبلوماسية.',
    },
    {
      id: 'philosophy_bridge',
      titleEn: 'Philosophy: Applied Ethics, Bioethics & Formal Propositional Logic',
      titleAr: 'الفلسفة: الأخلاقيات التطبيقية، البيوتيقا والمنطق الرمزي الصوري',
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      thanaweyaBranchId: 'thanaweya_philosophy',
      egBacBranchId: 'egbac_philosophy',
      thanaweyaTitleEn: 'Complete 8-Chapter Curriculum: Environmental Ethics, Bioethics, Professional Values, Induction & AI Logic',
      thanaweyaTitleAr: 'المنهج المتكامل (٨ فصول): أخلاق البيئة، البيوتيقا، أخلاقيات المهنة، فلسفة القيم، الاستقراء ومنطق الذكاء الاصطناعي',
      thanaweyaTopicsEn: [
        'Ch.1 Environmental Philosophy: Human-environment stages, Eastern Taoism, Singer/Regan animal rights & Jonas future ethics',
        'Ch.2 Bioethics & Biomedical Dilemmas: Artificial reproduction, cloning, gene editing, brain death & clinical consent',
        'Ch.3 Professional Ethics: Meaning of work, professional codes of conduct & philosophical contributions across history',
        'Ch.4 Philosophy of Values: Axiology, truth, goodness, beauty, intellectual tolerance, freedom & moral responsibility',
        'Ch.5 Induction & Scientific Method: Aristotle syllogism, Baconian positive/negative tables & Mill’s five inductive methods',
        'Ch.6 Deductive Logic & Axiomatic Systems: Axioms, postulates, definitions, primitive terms & Aristotle laws of thought',
        'Ch.7 Integrated Scientific Method: Hypothetico-deductive reasoning, Karl Popper falsifiability & Hempel explanatory model',
        'Ch.8 Logic & Artificial Intelligence: Cybernetics, Boolean binary logic, knowledge representation, fuzzy logic & reasoning',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ فلسفة البيئة: مراحل علاقة الإنسان بالطبيعة، الطاوية الشرقية، حقوق الحيوان لسينجر وريجان، وأخلاق المسؤولية ليوناس',
        'فصل ٢ البيوتيقا والأخلاق الطبية: الإنجاب الاصطناعي، الجينوم والاستنساخ، معايير الموت الدماغي، والموافقة المستنيرة',
        'فصل ٣ أخلاقيات المهنة: قيمة العمل، مواقف الفلاسفة (أفلاطون، أرسطو، الفارابي، ابن خلدون، سميث، وهيجل)، والواجب المهني',
        'فصل ٤ فلسفة القيم والتفلسف: طبيعة القيم، الحق والخير والجمال، التسامح الفكري، الاستقلال الذاتي، والحرية والمسؤولية',
        'فصل ٥ الاستقراء والمنهج العلمي التجريبي: أوهام بيكون الأربعة، الملاحظة والتجربة، وطرق جون ستيوارت مل الاستقرائية الخمس',
        'فصل ٦ النسق الاستنباطي الصوري: البديهيات والمسلمات والتعريفات، وقوانين الفكر الثلاثة (الذاتية، التناقض، الثالث المرفوع)',
        'فصل ٧ المنهج العلمي المعاصر: المنهج الفرضي الاستنباطي، معيار القابلية للتفنيد لكارل بوبر، ونموذج كارل همبل التفسيري',
        'فصل ٨ المنطق وتكنولوجيا الاتصال: السيبرنطيقا، المنطق البولياني الثنائي، تمثيل المعرفة، المنطق المرن، والذكاء الاصطناعي',
      ],
      egBacTitleEn: 'Advanced 8-Module Epistemology, Symbolic Logic & AI Computational Ethics Track',
      egBacTitleAr: 'المسار المتقدم (٨ فصول): نظرية المعرفة، المنطق الرمزي الصوري، وأخلاقيات الذكاء الاصطناعي الحوسبية',
      egBacTopicsEn: [
        'Module 1 Ecological Epistemology: Deep ecology metaphysics, anthropocentrism critique & biocentric value systems',
        'Module 2 Applied Bioethics & Genetics: Utilitarian vs. Deontological frameworks, CRISPR gene therapy & distributive justice',
        'Module 3 Business Ethics & Corporate Governance: Stakeholder theory, algorithmic bias, workplace equity & whistleblowing',
        'Module 4 Axiological Meta-Ethics: Moral realism vs. non-cognitivism, autonomy, intellectual virtue & democratic dialogue',
        'Module 5 Inductive Probability & Philosophy of Science: Bayesian hypothesis confirmation, Duhem-Quine underdetermination & paradigms',
        'Module 6 Symbolic Propositional & Predicate Logic: Formal proofs, truth tables, tautologies, quantified logic & consistency',
        'Module 7 Scientific Realism & Methodology: Model building, computational simulations, falsification & explanatory unification',
        'Module 8 Non-Classical Logics in AI: Many-valued fuzzy logic, non-monotonic default reasoning, ontologies & agent alignment',
      ],
      egBacTopicsAr: [
        'وحدة ١ إبستيمولوجيا البيئة: ميتافيزيقا الإيكولوجيا العميقة، نقد التمركز البشري، ومنظومات القيمة الحيوية المتكافئة',
        'وحدة ٢ البيوتيقا التحليلية: التوفيق بين النفعية والأخلاق الواجبية، المعضلات الجينية لكريسبر، والعدالة التوزيعية الصحية',
        'وحدة ٣ أخلاقيات حوكمة الشركات: نظرية أصحاب المصلحة، التحيز الخوارزمي، العدالة الوظيفية، وأخلاقيات الإفصاح',
        'وحدة ٤ الميتا-أخلاق والقيم: الواقعية الأخلاقية مقابل اللا-معرفية، الفضائل الفكرية، والاستقلالية في الحوار الديمقراطي',
        'وحدة ٥ الاحتمال الاستقرائي وفلسفة العلم: التأييد البايزي للفروض، إشكالية دوهيم-كواين، وتغير النماذج الإرشادية لتوماس كون',
        'وحدة ٦ المنطق الرمزي ومنطق المحمولات: البراهين الصورية، جداول الصدق، تحصيل الحاصل، والاتساق المنطقي للأنساق',
        'وحدة ٧ الواقعية العلمية والنمذجة: بناء النماذج، المحاكاة الحاسوبية، معايير التكذيب البوبرية، وتوحيد التفسير العلمي',
        'وحدة ٨ المنطق غير التقليدي في الذكاء الاصطناعي: المنطق المرن متعدد القيم، الاستدلال غير الرتيب، وأمان محاذاة النظم الذكية',
      ],
      bridgeInsightEn:
        'Thanaweya provides an encyclopedic conceptual and historical foundation in applied ethics and classical-to-modern scientific reasoning. EG-Bac introduces symbolic mathematical notation, truth table algorithmic parsing, and computational logic applications in artificial intelligence.',
      bridgeInsightAr:
        'تمنح الثانوية العامة إحاطة فكرية وتاريخية عميقة بالقضايا الأخلاقية ومناهج التفكير العلمي وتطبيقاتها، بينما تعمق البكالوريا الترميز الصوري الرمزي، وجداول الصدق الخوارزمية، والمنطق المرن وتطبيقات الذكاء الاصطناعي.',
      universityAdvantageEn: 'Elite foundation for Law, Cognitive Science, Artificial Intelligence Ethics, Analytical Philosophy, and Public Policy.',
      universityAdvantageAr: 'تأهيل رفيع لكليات الحقوق والقانون الدولي، علوم الإدراك، فلسفة وأخلاقيات الذكاء الاصطناعي، والسياسات العامة.',
    },
    {
      id: 'psychology_bridge',
      titleEn: 'Psychology: Behavioral Dynamics, Cognitive Science & Social Processes',
      titleAr: 'علم النفس والاجتماع: الديناميات السلوكية، العلوم المعرفية والعمليات الاجتماعية',
      icon: <Users className="w-5 h-5 text-pink-500" />,
      thanaweyaBranchId: 'thanaweya_psychology',
      egBacBranchId: 'egbac_psychology',
      thanaweyaTitleEn: 'Complete 8-Chapter Curriculum: Learning Theories, Developmental Psychology, Personality & Social Dynamics',
      thanaweyaTitleAr: 'المنهج المتكامل (٨ فصول): نظريات التعلم، ارتقاء الشخصية، التوافق، والعمليات والتغيرات الاجتماعية',
      thanaweyaTopicsEn: [
        'Ch.1 Theories of Learning: Multiple intelligences, Pavlov classical conditioning, Thorndike, Gestalt insight & Norman information processing',
        'Ch.2 Developmental Psychology: Laws of growth, infancy, early/late childhood, and physical/emotional adolescent transition',
        'Ch.3 Personality Dynamics & Attitudes: Psychoanalysis, behavioral & trait theories, cognitive/affective/behavioral components of attitudes & values',
        'Ch.4 Psychological Adjustment & Conflicts: Frustration, Lewin conflict typology (approach/avoidance), anxiety & unconscious defense mechanisms',
        'Ch.5 Social Interaction & Processes: Forms of interaction, social relations, cooperation, accommodation, competition & conflict',
        'Ch.6 Culture, Volunteerism & Free Enterprise: Elements of culture, voluntary civic engagement, free entrepreneurship planning & execution',
        'Ch.7 Contemporary Societal Issues: Scientific research integration in production, globalization challenges & cultural identity preservation',
        'Ch.8 Social Extremism & Violence: Psychological/cognitive/behavioral levels of extremism, root drivers & comprehensive societal defense',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ نظريات التعلم والذكاءات: الذكاءات المتعددة لجاردنر، الاشتراط الكلاسيكي لبافلوف، ثورندايك، الاستبصار للجشتالت، ومعالجة المعلومات لنورمان',
        'فصل ٢ النمو والارتقاء الإنساني: قوانين النمو، العوامل المؤثرة، الرضاعة والطفولة، والتغيرات الفسيولوجية والانفعالية للمراهقة',
        'فصل ٣ الشخصية والاتجاهات والقيم: نظريات الشخصية، مكونات الاتجاه النفسي الثلاثة، أساليب تعديله، وتدرج المنظومة القيمية',
        'فصل ٤ التوافق النفسي والصراعات: الإحباط والصراع وفق كورت ليفين (إقدام/إحجام)، القلق، والحيل الدفاعية اللاشعورية (الكبت، الإعلاء، التعويض)',
        'فصل ٥ التفاعل والعمليات الاجتماعية: العلاقات الاجتماعية، والعمليات الأربع الكبرى (التعاون، التكيف، التنافس البناء، والصراع الهدام)',
        'فصل ٦ الثقافة والعمل التطوعي والحر: خصائص الثقافة وعناصرها، ثقافة العمل التطوعي، ومتطلبات التخطيط والأداء في ريادة الأعمال الحرة',
        'فصل ٧ قضايا مجتمعية معاصرة: دور البحث العلمي في التنمية وخدمة الإنتاج، آثار العولمة الإيجابية والسلبية، والحفاظ على الهوية',
        'فصل ٨ التطرف والعنف والظواهر الهدامة: مستويات التطرف (المعرفي، الوجداني، السلوكي)، مسبباته النفسية والاجتماعية، واستراتيجيات المواجهة',
      ],
      egBacTitleEn: 'Advanced 8-Module Cognitive Neuroscience, Psychometrics & Complex Social Systems Track',
      egBacTitleAr: 'المسار المتقدم (٨ فصول): علم الأعصاب المعرفي، القياس النفسي الإحصائي وديناميات النظم الاجتماعية المعقدة',
      egBacTopicsEn: [
        'Module 1 Cognitive Psychology & Learning: Neuroplasticity, memory consolidation models, spaced retrieval & metacognition',
        'Module 2 Lifespan Developmental Dynamics: Genetic-epigenetic interactions, executive cognitive milestones & socio-emotional maturation',
        'Module 3 Psychometrics & Trait Theory: Big Five personality inventory, factor analysis, Likert scale psychometric validation & implicit bias',
        'Module 4 Clinical Neuropsychology & Stress: HPA-axis stress neurobiology, cognitive dissonance theory, coping mechanisms & emotional resilience',
        'Module 5 Social Network Analysis & Collective Dynamics: Game theory cooperation models, group polarization, social cohesion & contagion',
        'Module 6 Cultural Sociology & Innovation Ecosystems: Sociological institutionalism, social capital theory & entrepreneurship economics',
        'Module 7 Sociology of Science & Globalization: Paradigm shifts, digital divide sociometrics, transnational cultural flows & modern media',
        'Module 8 Radicalization Pathways & Social Defense: Structural strain theory, echo chamber algorithmic radicalization & prevention interventions',
      ],
      egBacTopicsAr: [
        'وحدة ١ علم النفس المعرفي والتعلم: المرونة العصبية، نماذج توطيد الذاكرة، الاسترجاع المتباعد، وعمليات ما وراء المعرفة (Metacognition)',
        'وحدة ٢ ديناميات الارتقاء عبر المدى العمري: التفاعل الجيني-فوق الجيني، معالم الوظائف التنفيذية المعرفية، والنضج الاجتماعي الانفعالي',
        'وحدة ٣ القياس النفسي ونظرية السمات: نموذج العوامل الخمسة الكبرى (Big Five)، التحليل العاملي، الصدق الإحصائي لمقاييس ليكرت، والتحيز الضمني',
        'وحدة ٤ علم النفس العصبي الإكلينيكي والإجهاد: بيولوجيا استجابة الإجهاد لمحور HPA، التنافر المعرفي، آليات التكيف الإيجابي والمرونة النفسية',
        'وحدة ٥ تحليل الشبكات الاجتماعية والسلوك الجمعي: نماذج نظرية الألعاب في التعاون، الاستقطاب الجماعي، التماسك الاجتماعي، والعدوى السلوكية',
        'وحدة ٦ سوسيولوجيا الثقافة ومنظومات الابتكار: المؤسسية الاجتماعية، نظرية رأس المال الاجتماعي، واقتصاديات ريادة الأعمال التمكينية',
        'وحدة ٧ علم اجتماع المعرفة والعولمة: التحولات الإرشادية، قياسات الفجوة الرقمية، التدفقات الثقافية العابرة للحدود، والإعلام الرقمي',
        'وحدة ٨ مسارات الاستقطاب الراديكالي والدفاع الاجتماعي: نظرية الضغط البنيوي، راديكالية غرف الصدى الخوارزمية، واستراتيجيات التدخل الوقائي',
      ],
      bridgeInsightEn:
        'Thanaweya delivers an encyclopedic behavioral and social curriculum rich in pedagogical cases, values, and societal ethics. EG-Bac introduces cognitive neuroscience, psychometric factor analysis, game-theoretic cooperation models, and social network analysis.',
      bridgeInsightAr:
        'تمنح الثانوية العامة إتقاناً شاملاً وميدانياً للسلوك الإنساني والعمليات الاجتماعية والقيم المجتمعية، بينما تعزز البكالوريا الأسس العصبية المعرفية، والقياس النفسي الإحصائي، ونماذج نظرية الألعاب في التعاون، وتحليل الشبكات الاجتماعية.',
      universityAdvantageEn: 'Elite pathway into Clinical Psychology, Behavioral Economics, Sociology, Human Resource Analytics, and Public Policy.',
      universityAdvantageAr: 'مسار مباشر واستثنائي لكليات الآداب والعلوم السلوكية، علم النفس الإكلينيكي، الاقتصاد السلوكي، وتحليل الموارد البشرية والسياسات.',
    },
    {
      id: 'arabic_bridge',
      titleEn: 'Arabic: Syntax, Semantics, Rhetoric & Literary Criticism',
      titleAr: 'اللغة العربية: النحو، الصرف، البلاغة والنقد الأدبي',
      icon: <Scroll className="w-5 h-5 text-emerald-600" />,
      thanaweyaBranchId: 'thanaweya_arabic',
      egBacBranchId: 'egbac_arabic',
      thanaweyaTitleEn: 'Complete 4-Unit Curriculum: Advanced Grammar (7 Units), Classical Rhetoric, Literature & Texts',
      thanaweyaTitleAr: 'المنهج المتكامل (٤ وحدات): النحو التراكمي الشامل (٧ وحدات)، علوم البلاغة الثلاثة، وتاريخ الأدب والنصوص',
      thanaweyaTopicsEn: [
        'Grammar Unit 1-7: Derivatives, syntactic cases, verb moods, numbers, exceptions, styles (taajjub, madh, ikhtisas) & particles',
        'Classical Rhetoric: Bayan (simile, metaphor, metonymy), Badee (antithesis, paronomasia, saj), and Maani (conciseness, emphasis)',
        'Literary Schools: Neoclassical revival (Baroudi/Shawqi), Romanticism (Matran), Diwan, Apollo, Mahjar & Contemporary Realism',
        'Textual Analysis: Classical and modern prose & poetry, critical vocabulary, artistic imagery & thematic motifs',
      ],
      thanaweyaTopicsAr: [
        'النحو الشامل (٧ وحدات): المشتقات العاملة، إعراب الفعل وبناءه، التوابع والمجرورات، تمييز العدد، الاستثناء، والأساليب النحوية الخاصة',
        'علوم البلاغة الثلاثة: علم البيان (التشبيه، الاستعارة، الكناية)، علم البديع (المحسنات اللفظية والمعنوية)، وعلم المعاني (الإيجاز، الإطناب، والأسلوب)',
        'المدارس الأدبية: الإحياء والبعث وجيل التطوير، الاتجاه الوجداني ومطران، مدرسة الديوان، مدرسة أبوللو، شعراء المهجر، والمدرسة الواقعية الجديدة',
        'تحليل النصوص المقررة: شعرية ونثرية، الفهم والتذوق البلاغي، دلالات المفردات وسياقها الفني، واستنتاج العاطفة والموسيقا الظاهرة والخفية',
      ],
      egBacTitleEn: 'Advanced 4-Module Arabic Linguistics, Functional Grammar & Structural Criticism Track',
      egBacTitleAr: 'المسار المتقدم (٤ فصول): اللسانيات العربية، النحو الوظيفي، والتحليل النقدي البنيوي للنصوص',
      egBacTopicsEn: [
        'Module 1 Structural Linguistics: Arabic phonology, morpho-syntax, semantic field theory & root-and-pattern morphology',
        'Module 2 Functional Grammar & Textual Cohesion: Discourse markers, thematic progression, grammatical agreement & sentence parsing',
        'Module 3 Modern Stylistics & Semiotics: Pragmatic utterance meaning, metaphor cognitive conceptualization & semiotic text analysis',
        'Module 4 Comparative Literary Criticism: Structuralism, intertextuality, thematic resonance & Arab world socio-cultural dialogue',
      ],
      egBacTopicsAr: [
        'وحدة ١ اللسانيات البنيوية وفقه اللغة: الصوتيات العربية، التركيب الصرفي النحوي، نظرية الحقول الدلالية، ونظام الجذور والأوزان الاشتقاقية',
        'وحدة ٢ النحو الوظيفي والتماسك النصي: أدوات الربط والانسجام، التدرج الموضوعي، التوافق النحوي، وإعراب الجمل ذات المحل والتي لا محل لها',
        'وحدة ٣ الأسلوبية الحديثة والسيميائيات: دلالات التداوليات اللغوية، الاستعارة التصورية المعرفية، والتحليل السيميائي للمضامين النصية',
        'وحدة ٤ النقد الأدبي المقارن: البنيوية الأدبية، التناص، ارتدادات الهوية الفكرية، والحوار الثقافي في الأدب العربي المقارن',
      ],
      bridgeInsightEn:
        'Thanaweya delivers an exhaustive classical foundation in rules of syntax (I’rab), rhetorical figures, and poetic schools. EG-Bac complements this with structural linguistics, semiotic textual parsing, and functional academic discourse.',
      bridgeInsightAr:
        'تتميز الثانوية العامة بالانضباط النحوي والإعرابي الدقيق واستيعاب مدارس الشعر وتاريخ الأدب، بينما تعزز البكالوريا اللسانيات التطبيقية، والتحليل الأسلوبي والسيميائي، والنقد الأدبي المقارن.',
      universityAdvantageEn: 'Elite foundation for Arabic Literature, Comparative Philology, Media & Communications, Law, and Translation.',
      universityAdvantageAr: 'تأهيل متقدم لأقسام اللغة العربية وآدابها، الدراسات اللغوية المقارنة، الإعلام، كليات الحقوق، والترجمة المعتمدة.',
    },
    {
      id: 'english_bridge',
      titleEn: 'English: Advanced Syntax, Critical Reading & Academic Writing',
      titleAr: 'اللغة الإنجليزية: النحو المتقدم، القراءة النقدية والكتابة الأكاديمية',
      icon: <Languages className="w-5 h-5 text-blue-500" />,
      thanaweyaBranchId: 'thanaweya_english',
      egBacBranchId: 'egbac_english',
      thanaweyaTitleEn: 'Complete 6-Chapter Curriculum: CEFR B2 Grammar, Contextual Lexicon & Great Expectations Literary Analysis',
      thanaweyaTitleAr: 'المنهج المتكامل (٦ فصول): قواعد B2 المعيارية، المفردات السياقية، وتحليل رواية الآمال العظيمة لتشارلز ديكنز',
      thanaweyaTopicsEn: [
        'Core Grammar: Verb tenses, passive constructions, relative clauses, conditionals (0-3 + mixed), reported speech & modal verbs',
        'Lexical Mastery: Advanced collocations, idiomatic expressions, phrasal verbs & prefix/suffix word formation',
        'Literature Study: Charles Dickens’ Great Expectations character arcs, themes (class, ambition, redemption) & historical context',
        'Writing Competencies: Expository & argumentative essays, thesis statement drafting, transitional coherence & formal letters',
      ],
      thanaweyaTopicsAr: [
        'قواعد اللغة المعتمدة: الأزمنة التامة والمستمرة، المبني للمجهول، ضمائر الوصل، الحالات الشرطية الأربع، الكلام المنقول، والأفعال الناقصة',
        'المعجم اللغوي التخصصي: المتلازمات اللفظية، التعبيرات الاصطلاحية الشائعة، الأفعال الاصطلاحية المركبة، وتوليد المشتقات بالسوابق واللواحق',
        'الدراسة الأدبية المقررة: رواية الآمال العظيمة (Great Expectations) لتشارلز ديكنز، تطور الشخصيات، والمحاور الأخلاقية والاجتماعية في العصر الفيكتوري',
        'مهارات الكتابة والمقال: صياغة أطروحة المقال (Thesis Statement)، فقرات المقال الحجاجي والتفسيري، وأدوات الربط المنطقي والمراسلات الرسمية',
      ],
      egBacTitleEn: 'Advanced 6-Module CEFR C1 Academic Discourse, Rhetorical Stylistics & Literary Criticism Track',
      egBacTitleAr: 'المسار المتقدم (٦ فصول): الخطاب الأكاديمي لمستوى C1، الأسلوبية البلاغية والنقد الأدبي العالمي',
      egBacTopicsEn: [
        'Module 1 Advanced Academic Syntax: Inversion with negative adverbials, cleft sentences, participle clauses & subjunctive mood',
        'Module 2 Rhetorical Stylistics & Pragmatics: Presupposition, implicature, register variation & academic research terminology',
        'Module 3 Comparative Literary Criticism: Post-colonial theory, narrative voice techniques, symbolism & psychological realism',
        'Module 4 Research Synthesis & Scholarly Writing: Peer-reviewed literature synthesis, APA citing conventions & argumentative debate',
      ],
      egBacTopicsAr: [
        'وحدة ١ التراكيب النحوية الأكاديمية: قلب ترتيب الجملة (Inversion)، الجمل المشطورة (Cleft Sentences)، عبارات اسم الفاعل، وصيغ التمني الافتراضية',
        'وحدة ٢ الأسلوبية البلاغية والتداولية: المعنى الضمني والافتراض المسبق، تباين المستويات اللغوية الرسمية، والمصطلحات الأكاديمية البحثية',
        'وحدة ٣ النقد الأدبي المقارن: نظريات ما بعد الاستعمار، تقنيات الرواة وتعدد الأصوات السردية، الرمزية، والواقعية النفسية في الأدب العالمي',
        'وحدة ٤ الكتابة والبحث الأكاديمي: مهارات تلخيص ودمج الأدبيات البحثية، قواعد التوثيق المرجعي (APA)، وصياغة الأطروحات الحجاجية في المناظرات',
      ],
      bridgeInsightEn:
        'Thanaweya guarantees 100% precision on ministerial exam grammar, vocabulary, and Victorian novel comprehension. EG-Bac raises the bar to international C1 research papers, rhetorical discourse, and academic debate.',
      bridgeInsightAr:
        'تضمن الثانوية العامة دقة مطلقة في قواعد ومفردات المنهج الوزاري واستيعاب الرواية الفيكتورية، بينما تقفز البكالوريا بكفاءة الطالب لمستوى C1 الأكاديمي الدولي في كتابة الأوراق البحثية والمناظرات النقدية.',
      universityAdvantageEn: 'Universal English fluency for all international undergraduate degrees in Medicine, Engineering, AI, and Humanities.',
      universityAdvantageAr: 'طلاقة لغوية وأكاديمية كاملة تلبي متطلبات القبول لكافة البرامج الجامعية الدولية وكليات الهندسة والطب والذكاء الاصطناعي.',
    },
    {
      id: 'french_bridge',
      titleEn: 'French: Second Foreign Language, Communication & Cultural Immersion',
      titleAr: 'اللغة الفرنسية: اللغة الأجنبية الثانية، التواصل والانغماس الثقافي',
      icon: <Languages className="w-5 h-5 text-rose-500" />,
      thanaweyaBranchId: 'thanaweya_french',
      egBacBranchId: 'egbac_french',
      thanaweyaTitleEn: 'Complete 4-Chapter Curriculum: Sports, Nutrition, Countryside/Passé Composé & Transportation',
      thanaweyaTitleAr: 'المنهج المتكامل (٤ فصول): نادي الرياضيين، الأغذية، الريف والماضي المركب، ووسائل المواصلات',
      thanaweyaTopicsEn: [
        'Ch.1 Club des sportifs: Expressing sports & musical instruments, verbs (faire, jouer), pronominal direct/indirect pronouns (COD/COI)',
        'Ch.2 Club des gourmands: Food & beverage categories, partitive articles (du, de la, des), expressing quantities & adverbial pronoun EN',
        'Ch.3 Club des explorateurs: Farm animals, countryside activities, negative forms (ne...rien, ne...jamais) & Passé Composé with avoir/être',
        'Ch.4 Club des voyageurs: Means of transport & prepositions (en, à, par), asking/giving directions & adverbial pronoun Y',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ نادي الرياضيين: التعبير عن الرياضات والآلات الموسيقية، أفعال faire وjouer، والضمائر الشخصية المباشرة وغير المباشرة (COD/COI)',
        'فصل ٢ نادي الأكيلة: أقسام السوبرماركت والمأكولات والمشروبات، أدوات التجزئة، التعبير عن الكميات المحددة وغير المحددة، والضمير الشخصي EN',
        'فصل ٣ نادي المستكشفين: الحيوانات والمزرعة، أنشطة الريف، صيغ النفي المتعددة (rien, jamais, personne)، والماضي المركب (Passé Composé)',
        'فصل ٤ نادي المسافرين: وسائل المواصلات وحروف جرها (en, à, par)، السؤال عن خط السير ووصفه، والضمير الشخصي للمكان Y',
      ],
      egBacTitleEn: 'Advanced 4-Module CEFR B1 Communicative Synthesis, Functional Fluency & Francophone Culture Track',
      egBacTitleAr: 'المسار المتقدم (٤ فصول): الكفاءة التواصلية لمستوى B1، الطلاقة الوظيفية والعمق الثقافي الفرنكوفوني',
      egBacTopicsEn: [
        'Module 1 Functional Interaction: Nuanced opinions on sports culture, conditional mood polite requests (Conditionnel Présent) & reflexives',
        'Module 2 Nutritional Gastronomy & Socio-Economics: Food culture, sustainable consumption, double pronouns & relative pronouns (qui, que, où, dont)',
        'Module 3 Narrative Ecology: Rural ecosystems, historical narration balancing Passé Composé vs. Imparfait & complex temporal clauses',
        'Module 4 International Mobility & Urbanism: Sustainable urban transit, Francophone geography, Subjunctive mood (Subjonctif) & argumentation',
      ],
      egBacTopicsAr: [
        'وحدة ١ التفاعل الوظيفي: إبداء الآراء المعقدة حول الرياضة والصحة، صيغة الشرط للطلب المهذب (Conditionnel Présent)، والأفعال ذات الضميرين',
        'وحدة ٢ فن الطهي وعلم التغذية: الثقافة الغذائية، الاستهلاك المستدام، ترتيب الضمائر الشخصية المزدوجة، والأسماء الموصولة (qui, que, où, dont)',
        'وحدة ٣ السرد البيئي والريفي: التنوع الحيوي الريفي، الموازنة السردية بين الماضي المركب والماضي المستمر (Passé Composé vs Imparfait)',
        'وحدة ٤ النقل المستدام والعوالم الفرنكوفونية: تخطيط المدن، التنوع الثقافي للدول الفرنكوفونية، صيغة الشك والإمكانية (Subjonctif)، وكتابة المقال',
      ],
      bridgeInsightEn:
        'Thanaweya provides an airtight grasp of ministerial grammar drills, situational dialogues, and vocabulary. EG-Bac expands into B1 conversational fluency, literary-historical verb tenses, and Francophone cultural analysis.',
      bridgeInsightAr:
        'تمنح الثانوية العامة إتقاناً كاملاً ودقيقاً لقواعد وتراكيب ومفردات الوحدات الوزارية الأربع، بينما ترتقي البكالوريا بمستوى التحدث الحر والكتابة السردية الموسعة والانغماس في الثقافة الفرنكوفونية.',
      universityAdvantageEn: 'Gateway to French-medium undergraduate sections in Law, Commerce, Languages & Translation (Alsun), and European exchange.',
      universityAdvantageAr: 'بوابة كبرى للالتحاق بالشعب الفرنسية في كليات الحقوق والتجارة، كليات الألسن واللغات، والمنح الجامعية الأوروبية.',
    },
    {
      id: 'german_bridge',
      titleEn: 'German: Second Foreign Language, CEFR A2/B1 Fluency & DACH Regional Studies',
      titleAr: 'اللغة الألمانية: اللغة الأجنبية الثانية، الكفاءة اللغوية والدراسات الإقليمية لدول DACH',
      icon: <Languages className="w-5 h-5 text-amber-500" />,
      thanaweyaBranchId: 'thanaweya_german',
      egBacBranchId: 'egbac_german',
      thanaweyaTitleEn: 'Complete 4-Chapter Curriculum: Health & Doctor, City Orientation, Customer Service & Celebrations',
      thanaweyaTitleAr: 'المنهج المتكامل (٤ فصول): الصحة والطبيب، التنقل والاتجاهات، خدمة العملاء والملابس، والأعياد والمناسبات',
      thanaweyaTopicsEn: [
        'Lektion 10 Gesundheit & Körperteile: Physical ailments, Dativ personal pronouns (mir, dir, ihm, ihr), doctor consultations & modal verbs (sollen, müssen)',
        'Lektion 11 Orientierung & Verkehrsmittel: Urban landmarks, transport prepositions with Dativ (mit dem/der, zu, nach), imperative directions',
        'Lektion 12 Kundenservice & Reparaturen: Service dialogues, polite request subjunctive (könnten/würden Sie), separable verbs & accusative/dative clothing',
        'Lektion 13 Feste & Einladungen: Calendar dates, ordinal numbers (am ...ten), congratulations (Alles Gute, Herzlichen Glückwunsch) & invitation etiquette',
      ],
      thanaweyaTopicsAr: [
        'الدرس ١٠ الصحة وأجزاء الجسم: التعبير عن الآلام، ضمائر المجرور الشخصية (mir, dir, ihm, ihr)، زيارة الطبيب والأفعال الناقصة (sollen, müssen)',
        'الدرس ١١ التنقل والاتجاهات: معالم المدينة، حروف جر وسائل المواصلات والاتجاهات في حالة الجر (mit dem/der, zu, nach)، وصيغ الأمر للتوجيه',
        'الدرس ١٢ خدمة العملاء والإصلاح: حوارات الدعم الفني، صيغة الطلب المهذب (könnten/würden Sie)، الأفعال المنفصلة ومفردات الملابس والمقاسات',
        'الدرس ١٣ الأعياد والاحتفالات: التواريخ والأعداد الترتيبية (am ...ten)، عبارات التهاني والبطاقات، وقبول الدعوات أو الاعتذار عنها بلباقة',
      ],
      egBacTitleEn: 'Advanced 4-Module CEFR B1/B2 Academic German, Syntactic Synthesis & DACH Culture Track',
      egBacTitleAr: 'المسار المتقدم (٤ موديولات): الألمانية الأكاديمية لمستوى B1/B2، التركيب النحوي المعقد، والثقافة المشتركة لدول DACH',
      egBacTopicsEn: [
        'Module 1 Medical & Scientific Communication: Advanced health systems, hypothetical consultations in Konjunktiv II & passive voice in medical reports',
        'Module 2 Sustainable Urbanism & Mobility: Urban spatial syntax, two-way prepositions (Wechselpräpositionen with Akk/Dat) & relative clauses',
        'Module 3 Technical Support & Digital Industry: Industrial customer interaction, consumer rights, Zustandspassiv vs Vorgangspassiv & causal connectors',
        'Module 4 Socio-Cultural Celebrations & Public Discourse: DACH regional traditions, festival history, subjunction clauses (weil, dass, obwohl, wenn) & academic essays',
      ],
      egBacTopicsAr: [
        'الموديول ١ التواصل العلمي والطبي: النظم الصحية المتقدمة، الاستشارات الافتراضية بصيغة التمني Konjunktiv II، والمبني للمجهول في التقارير الطبية',
        'الموديول ٢ التخطيط الحضري والتنقل المستدام: دلالات المكان الحضرية، حروف الجر ذات الحالتين (Wechselpräpositionen) والجمل الموصولة (Relativsätze)',
        'الموديول ٣ الدعم التقني والتحول الرقمي: التعامل التجاري والصناعي، حقوق المستهلك، التمييز بين نوعي المبني للمجهول، وروابط السببية والنتيجة',
        'الموديول ٤ المناسبات والخطاب المجتمعي: تقاليد دول ألمانيا والنمسا وسويسرا (DACH)، الروابط التبعية (weil, dass, obwohl, wenn)، وكتابة المقال الأكاديمي',
      ],
      bridgeInsightEn:
        'Thanaweya delivers an exhaustive, high-scoring mastery of Hallo Deutsch grammar rules, situational drills, and OMR exam patterns. EG-Bac expands this into B1/B2 academic German, complex subjunctive/passive syntax, and university preparatory discourse in DACH countries.',
      bridgeInsightAr:
        'تمنح الثانوية العامة إتقاناً شاملاً ومحكماً لقواعد منهج Hallo Deutsch وتدريبات المواقف اليومية ونظام البابل شيت، بينما ترتقي البكالوريا بمستوى التراكيب المعقدة (Konjunktiv II, Passiv, Nebensätze) مؤهلة للدراسة الجامعية في ألمانيا والنمسا وسويسرا.',
      universityAdvantageEn: 'Direct readiness for Studienkolleg / German-medium university programs in Engineering, Medicine, Informatics, and Alsun German departments.',
      universityAdvantageAr: 'تأهيل مباشر لبرامج السنة التحضيرية (Studienkolleg) والجامعات الألمانية في كليات الهندسة والطب وعلوم الحاسب وكليات الألسن واللغات والترجمة.',
    },
    {
      id: 'italian_bridge',
      titleEn: 'Italian: Second Foreign Language, CEFR A2/B1 Fluency & Contemporary Italian Studies',
      titleAr: 'اللغة الإيطالية: اللغة الأجنبية الثانية، الكفاءة اللغوية والدراسات المعاصرة للحضارة الإيطالية',
      icon: <Languages className="w-5 h-5 text-emerald-500" />,
      thanaweyaBranchId: 'thanaweya_italian',
      egBacBranchId: 'egbac_italian',
      thanaweyaTitleEn: 'Complete 4-Unit Curriculum: Ecology, Musical Contest, Fashion & Daily Communication',
      thanaweyaTitleAr: 'المنهج المتكامل (٤ وحدات): مشروعات البيئة، المسابقة الموسيقية، الموضة والتسوق، والتواصل والبريد الإلكتروني',
      thanaweyaTopicsEn: [
        'Unità 1 Progetti ed ecologia: Environmental projects, Futuro Semplice (parlerò, prenderò) and temporal clauses with Futuro Composto (appena, quando)',
        'Unità 2 Concorso musicale: Musical instruments, rock contest between schools, direct object pronouns (lo, la, li, le) and the partitive pronoun NE',
        'Unità 3 Feste, shopping e abbigliamento: Shopping dialogues, Italian fashion sizes & colors, combined prepositions (preposizioni articolate)',
        'Unità 4 Comunicazione quotidiana: Invitation etiquette (invitare, accettare, rifiutare), festive greetings, formal e-mail & SMS register',
      ],
      thanaweyaTopicsAr: [
        'الوحدة الأولى مشروعات البيئة: المشروعات البيئية وحماية الكوكب، المستقبل البسيط (Futuro Semplice)، والمستقبل المركب مع الروابط الزمنية (appena, quando)',
        'الوحدة الثانية المسابقة الموسيقية: الآلات الموسيقية، مسابقة المدارس الغنائية، ضمائر المفعول المباشر (lo, la, li, le)، وضمير التجزئة والكميات NE',
        'الوحدة الثالثة التسوق والملابس: حوارات الشراء والأسعار والمقاسات والألوان، وحروف الجر المدمجة بأدوات التعريف (Preposizioni Articolate)',
        'الوحدة الرابعة التواصل اليومي: توجيه وقبول ورفض الدعوات، بطاقات التهاني بالأعياد والمناسبات، وصياغة الرسائل الإلكترونية الرسمية والقصيرة',
      ],
      egBacTitleEn: 'Advanced 4-Module CEFR B1/B2 Academic Italian, Subjunctive Syntax & Made in Italy Track',
      egBacTitleAr: 'المسار المتقدم (٤ موديولات): الإيطالية الأكاديمية لمستوى B1/B2، صيغ الشك والربط، واقتصاد وحضارة Made in Italy',
      egBacTopicsEn: [
        'Modulo 1 Sostenibilità & Transizione Ecologica: Ecological transition, carbon neutrality, and the subjunctive mood (Congiuntivo Presente e Passato)',
        'Modulo 2 Industria Culturale & Opera Lirica: Lyric opera, Renaissance art criticism, combined pronouns (pronomi combinati me lo/te lo) and narrative tenses',
        'Modulo 3 Economia Circolare & Moda Sostenibile: Sustainable design, Made in Italy manufacturing excellence, passive structures (venire, andare, si passivante)',
        'Modulo 4 Diplomazia & Mobilità Internazionale: Academic diplomacy, European university mobility (Erasmus), and hypothetical periods (Periodo Ipotetico)',
      ],
      egBacTopicsAr: [
        'الموديول الأول التحول البيئي والاستدامة: التحول الطاقي والحياد الكربوني وصيغ الشك والتمني والرأي (Congiuntivo Presente e Passato)',
        'الموديول الثاني الصناعات الثقافية والأوبرا: تاريخ فنون الأوبرا وعصر النهضة، الضمائر المركبة (Pronomi Combinati)، والتحليل الجمالي للأعمال الفنية',
        'الموديول الثالث الاقتصاد الدائري والأزياء: علامة التميز Made in Italy، سلاسل القيمة الخضراء، وصيغ المبني للمجهول بـ venire و andare و si passivante',
        'الموديول الرابع الدبلوماسية الأكاديمية والتنقل الدولي: التواصل الأكاديمي والتبادل الجامعي الأوروبي، وتراكيب الجمل الشرطية (Periodo Ipotetico) بأنواعها الثلاثة',
      ],
      bridgeInsightEn:
        'Thanaweya provides rigorous mastery of In Italia per la scuola secondaria grammar, situational dialogues, and OMR exam excellence. EG-Bac expands this into CEFR B1/B2 academic Italian, sophisticated subjunctive/hypothetical syntax, and university preparatory discourse in Italian institutions.',
      bridgeInsightAr:
        'تمنح الثانوية العامة إتقاناً شاملاً ومحكماً لقواعد كتاب In Italia per la scuola secondaria وتدريبات المواقف اليومية ونظام البابل شيت، بينما ترتقي البكالوريا بمستوى التراكيب المعقدة (Congiuntivo, Periodo Ipotetico, Forma Passiva) مؤهلة للدراسة الجامعية في إيطاليا.',
      universityAdvantageEn: 'Direct advantage for Italian-medium university admissions, Architecture & Design programs (Politecnico di Milano/Torino), Medicine (IMAT), and Alsun Italian departments.',
      universityAdvantageAr: 'أفضلية استثنائية للالتحاق بالجامعات الإيطالية، كليات الهندسة والتصميم والعمارة (بوليتكنيكو ميلانو وتورينو)، كليات الطب (IMAT)، وكليات الألسن واللغات والترجمة.',
    },
    {
      id: 'spanish_bridge',
      titleEn: 'Spanish: Second Foreign Language, CEFR A2/B1 Fluency & Hispanic World Studies',
      titleAr: 'اللغة الإسبانية: اللغة الأجنبية الثانية، الكفاءة اللغوية والدراسات المعاصرة للعالم الإسباني',
      icon: <Languages className="w-5 h-5 text-red-500" />,
      thanaweyaBranchId: 'thanaweya_spanish',
      egBacBranchId: 'egbac_spanish',
      thanaweyaTitleEn: 'Complete 4-Unit Curriculum: Projects & Ecology, Biographies, Fashion & Pragmatics',
      thanaweyaTitleAr: 'المنهج المتكامل (٤ وحدات): مشروعات البيئة، السير والماضي، الموضة والتسوق، ومواقف التواصل اليومي',
      thanaweyaTopicsEn: [
        'Unidad 1 Proyectos y Medio Ambiente: Future intentions, Futuro Simple (cantaré, comeré, viviré) and irregular stems (tendré, haré, podré)',
        'Unidad 2 Descripciones y Personalidad: Character and mood, the fundamental contrast Ser vs. Estar vs. Haber (Hay)',
        'Unidad 3 Biografías y Tiempos Pasados: Narrative past tenses: Pretérito Indefinido vs. Imperfecto, and the prepositional contrast Por vs. Para',
        'Unidad 4 De Compras y Ropa: Clothing, sizes, prices, Direct & Indirect Object Pronouns, imperative requests, and gustar-type verbs',
      ],
      thanaweyaTopicsAr: [
        'الوحدة الأولى المشروعات والبيئة: النوايا والمشروعات المستقبلية، تصريف المستقبل البسيط (Futuro Simple) والأفعال الشاذة (tendré, haré, podré)',
        'الوحدة الثانية الوصف والشخصية: وصف المظهر والطباع والحالة النفسية، والتمييز الجوهري بين Ser و Estar و Hay',
        'الوحدة الثالثة السير الذاتية والماضي: السرد التاريخي والماضي، المقارنة بين الماضي البسيط والمستمر (Indefinido vs Imperfecto)، وحرفي Por و Para',
        'الوحدة الرابعة التسوق والملابس: الملابس والمقاسات والأسعار، ضمائر المفعول المباشر وغير المباشر، وصيغ الأمر وأفعال الإعجاب (Gustar)',
      ],
      egBacTitleEn: 'Advanced 4-Module CEFR B1/B2 Academic Spanish, Subjunctive Syntax & Hispanic Studies',
      egBacTitleAr: 'المسار المتقدم (٤ موديولات): الإسبانية الأكاديمية لمستوى B1/B2، صيغ المنصوب (Subjuntivo)، والأدب والجيوسياسة الهسبانية',
      egBacTopicsEn: [
        'Módulo 1 Sintaxis Académica: Discourse markers (puesto que, ya que), academic registers, and university structures in Spain & Latin America',
        'Módulo 2 Modo Subjuntivo: Present Subjunctive triggers in nominal and adverbial clauses, expressing desires, doubts, emotions, and valuations',
        'Módulo 3 Condicionales Complejas: Advanced conditional periods (si + imperfecto/pluscuamperfecto de subjuntivo) and concessive structures',
        'Módulo 4 Literatura y Geopolítica: Hispanic masterpieces (Cervantes, García Márquez, Lorca), and Ibero-American economic integration (Mercosur)',
      ],
      egBacTopicsAr: [
        'الموديول الأول التركيب اللغوي الأكاديمي: الروابط الخطابية والسببية والاستنتاجية المتقدمة، ونظام التعليم الجامعي والساعات المعتمدة في إسبانيا',
        'الموديول الثاني صيغة المنصوب (Subjuntivo): حالات استدعاء الـ Subjuntivo في الجمل الاسمية والظرفية، والتعبير عن الرغبات والشك والتقييمات',
        'الموديول الثالث الجمل الشرطية المعقدة: تراكيب الشرط الافتراضي في الحاضر والماضي (Si + Subjuntivo)، والجمل الاستدراكية المتقدمة',
        'الموديول الرابع الأدب والجيوسياسة: التحليل النقدي لروائع الأدب الهسباني (سرفانتس، غارسيا ماركيز، لوركا)، والتكتلات الاقتصادية اللاتينية (Mercosur)',
      ],
      bridgeInsightEn:
        'Thanaweya delivers robust communicative mastery of core grammar, listening skills, and OMR examination techniques. EG-Bac elevates this into high-level CEFR B1/B2 academic Spanish, advanced Subjunctive/conditional mastery, and literary-geopolitical competency for Spanish and Latin American academic institutions.',
      bridgeInsightAr:
        'تمنح الثانوية العامة إتقاناً تواصلياً وقواعدياً متيناً لمهارات اللغة الإسبانية وأسئلة المواقف والبابل شيت، بينما ترتقي البكالوريا بالدارس إلى مستوى B1/B2 الأكاديمي وصيغ Subjuntivo المعقدة، والتحليل الأدبي والجيوسياسي للالتحاق بالجامعات في إسبانيا وأمريكا اللاتينية.',
      universityAdvantageEn: 'Direct qualification for Spanish university admissions (Selectividad / UNEDasiss), DELE/SIELE B2 certification, and premier Alsun & Languages faculties.',
      universityAdvantageAr: 'تأهيل مباشر لاختبارات القبول بالجامعات الإسبانية (Selectividad / UNEDasiss)، شهادات DELE و SIELE الرسمية، وكليات الألسن واللغات والترجمة.',
    },
    {
      id: 'islamic_bridge',
      titleEn: 'Islamic Studies: Exegesis, Jurisprudential Maxims & Civilizational Bioethics',
      titleAr: 'التربية الدينية الإسلامية: التفسير القرآني، القواعد الفقهية، والأخلاقيات الحضارية والطبية',
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      thanaweyaBranchId: 'thanaweya_islamic',
      egBacBranchId: 'egbac_islamic',
      thanaweyaTitleEn: 'Complete 4-Chapter Program: Tajweed & Creed, Seerah & Shura, Maqasid & Solidarity, Dialogue & Reason',
      thanaweyaTitleAr: 'المنهج المتكامل (٤ فصول): التجويد والعقيدة، السيرة والشورى، مقاصد الشريعة والتكافل، وأدب الحوار وإعمال العقل',
      thanaweyaTopicsEn: [
        'Ch.1 Tajweed & Creed: Nun Sakinah & Tanween rules (Izhar, Idgham, Iqlab, Ikhfa), Madd prolongations, Surah Luqman and Surah An-Nur social decorum',
        'Ch.2 Prophetic Biography: Strategic planning in the Hijrah, institutional Shura in battles, the Treaty of Hudaybiyyah diplomacy, and Conquest of Makkah clemency',
        'Ch.3 Maqasid al-Sharia: The five higher essential objectives (Religion, Life, Intellect, Lineage, Wealth), hierarchy of interests, and Zakat solidarity',
        'Ch.4 Ethics of Dialogue & Reason: "Argue in ways that are best", verifying news ("Fa-tabayyanu"), countering extremism (Ghuluww), and environmental stewardship',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ التجويد والعقيدة: أحكام النون الساكنة والتنوين والميم الساكنة والمدود، سورة لقمان والآداب الاجتماعية وحفظ الأعراض في سورة النور',
        'فصل ٢ السيرة النبوية: التخطيط الاستراتيجي في الهجرة، الشورى في إدارة الدولة والغزوات، دهاء الدبلوماسية في صلح الحديبية، والعفو في فتح مكة',
        'فصل ٣ مقاصد الشريعة والتكافل: المقاصد الكلية الخمس (الدين، النفس، العقل، النسل، المال)، مراتب المصالح، وفقه المعاملات والزكاة والوقف',
        'فصل ٤ أدب الحوار وإعمال العقل: منهج القرآن في الحوار، التثبت ومكافحة الشائعات والإفك، مواجهة التطرف الفكري، ورعاية البيئة والمواطنة الصالحة',
      ],
      egBacTitleEn: 'Advanced 4-Module Program: Jurisprudential Philosophy, Participatory Economics, Scientific Method & AI Ethics',
      egBacTitleAr: 'المسار المتقدم (٤ موديولات): فلسفة التشريع، الاقتصاد التشاركي والصكوك الخضراء، المنهج التجريبي، وأخلاقيات الذكاء الاصطناعي',
      egBacTopicsEn: [
        'Module 1 Legal Philosophy & Bioethics: Five major legal maxims, Fiqh of emerging realities (Nawazil), organ transplantation, brainstem death, and gene editing',
        'Module 2 Islamic Economic Thought: Participatory risk-sharing finance (Mudarabah & Musharakah), Green Sukuk for renewable infrastructure, and developmental Waqf',
        'Module 3 Scientific Method & Civilization: Ibn al-Haytham optics and empirical method, Al-Khwarizmi algorithms, Al-Biruni geodesy, and House of Wisdom',
        'Module 4 AI Ethics & Global Citizenship: Algorithmic accountability, combating deepfakes, the Madinah Charter constitutionalism, and inter-faith dialogue',
      ],
      egBacTopicsAr: [
        'الموديول الأول فلسفة التشريع والأخلاقيات الحيوية: القواعد الفقهية الكبرى الخمس، فقه النوازل، زراعة الأعضاء، موت الدماغ، والضوابط الشرعية للهندسة الوراثية',
        'الموديول الثاني الفكر الاقتصادي الإسلامي: التمويل التشاركي وتقاسم المخاطر، الصكوك الخضراء للطاقة المتجددة، والوقف الاستثماري لحوكمة التنمية',
        'الموديول الثالث المنهج التجريبي وإسهامات الحضارة: ابن الهيثم وتأسيس المنهج التجريبي والبصريات، الخوارزمي والجبر، البيروني والفلك، وبيت الحكمة',
        'الموديول الرابع أخلاقيات الذكاء الاصطناعي والمواطنة العالمية: حوكمة الخوارزميات، مكافحة التزييف الرقمي، وثيقة المدينة كدستور مدني، وحوار الأديان',
      ],
      bridgeInsightEn:
        'Thanaweya establishes core scriptural foundations, Quranic recitation rules, and authentic Prophetic biography for the national qualification exam. EG-Bac expands this into high-level analytical legal philosophy, contemporary bioethics, Green Sukuk, Islamic history of science, and artificial intelligence ethics for international and tertiary research.',
      bridgeInsightAr:
        'تمنح الثانوية العامة تأسيساً إيمانياً ومنهجياً راسخاً في أحكام التجويد والتفسير والسيرة النبوية ومقاصد الشريعة لامتحان الشهادة الوطنية، بينما ترتقي البكالوريا بالدراسة إلى الفلسفة التشريعية المقارنة، فقه النوازل الطبية الحيوية، الصكوك الخضراء، تاريخ العلوم التجريبية الإسلامية، وأخلاقيات الذكاء الاصطناعي.',
      universityAdvantageEn: 'Outstanding preparation for Law & Sharia faculties (Al-Azhar, Cairo University), International Human Rights, Bioethics & Medical Law, Islamic Banking & Finance (CIPA/CSAA), and diplomatic careers.',
      universityAdvantageAr: 'تأهيل متميز لكليات الشريعة والقانون، حقوق الإنسان والقانون الطبي الحيوي، الصيرفة والتمويل الإسلامي (شهادات AAOIFI)، والدبلوماسية وحوار الثقافات.',
    },
    {
      id: 'christian_bridge',
      titleEn: 'Christian Religious Studies: Biblical Hermeneutics, Church Dogmatics & Coptic Heritage',
      titleAr: 'التربية الدينية المسيحية: التفسير الكتابي، العقيدة الكنسية، والتراث والتاريخ القبطي',
      icon: <BookOpen className="w-5 h-5 text-amber-500" />,
      thanaweyaBranchId: 'thanaweya_christian',
      egBacBranchId: 'egbac_christian',
      thanaweyaTitleEn: 'Complete 4-Chapter Program: Scripture & Hermeneutics, Church Sacraments, Christian Ethics & Family, Coptic Heritage',
      thanaweyaTitleAr: 'المنهج المتكامل (٤ فصول): الكتاب المقدس والوحي، أسرار الكنيسة السبعة، الأخلاق المسيحية والأسرة، والتراث والتاريخ القبطي',
      thanaweyaTopicsEn: [
        'Ch.1 Holy Scripture & Hermeneutics: Divine inspiration, Old & New Testament canon, Messianic prophecies, and Sermon on the Mount ethics',
        'Ch.2 The Seven Church Sacraments: Visible signs and invisible grace, Christian initiation (Baptism & Chrismation), Eucharist, and Penance',
        'Ch.3 Christian Ethics & Sacred Family: Sanctity of marriage, domestic church, Christian bioethics, mutual altruism, and civic citizenship',
        'Ch.4 Coptic Heritage & National Identity: The Holy Family in Egypt, St. Mark the Evangelist, School of Alexandria, and desert monasticism',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ الكتاب المقدس والتفسير: الوحي الإلهي، قانونية العهدين القديم والجديد، النبوات المسيانية، وتطويبات العظة على الجبل',
        'فصل ٢ أسرار الكنيسة السبعة: العلامة المنظورة والنعمة غير المنظورة، أسرار التأسيس (المعمودية والميرون)، الإفخارستيا، والتوبة والاعتراف',
        'فصل ٣ الأخلاق المسيحية وبناء الأسرة: قدسية سر الزيجة، الكنيسة المنزلية، الأخلاقيات الطبية والحيوية، والمواطنة الصالحة ومحبة الوطن',
        'فصل ٤ التراث القبطي والهوية الوطنية: رحلة العائلة المقدسة في مصر، كرازة القديس مرقس، مدرسة الإسكندرية اللاهوتية، ونشأة الرهبنة القبطية',
      ],
      egBacTitleEn: 'Advanced 4-Module Program: Patristic Theology, Bioethics & Medical Jurisprudence, Coptic Monastic Civilization & Ecumenical Councils',
      egBacTitleAr: 'المسار المتقدم (٤ موديولات): اللاهوت الآبائي، الأخلاقيات الحيوية والطبية، الحضارة الرهبانية القبطية، والمجامع المسكونية والحوار المسكوني',
      egBacTopicsEn: [
        'Module 1 Patristic Hermeneutics & Biblical Exegesis: Alexandrian allegorical method (Origen, Cyril of Alexandria), Greek & Coptic manuscript textual criticism',
        'Module 2 Contemporary Bioethics & Human Dignity: Christian stance on organ donation, palliative care vs. euthanasia, CRISPR gene editing, and artificial intelligence ethics',
        'Module 3 Monastic Architecture & Coptic Cultural History: Structural evolution of anchoritic & cenobitic monasteries (Pachomius, Shenouda), Coptic art, and hymnology',
        'Module 4 Ecumenical Councils & International Dialogue: Council of Nicaea (Athanasius and Homoousios), Ephesus, modern theological dialogues, and global peacemaking',
      ],
      egBacTopicsAr: [
        'الموديول الأول التفسير الآبائي ونقد النصوص: المنهج التأويلي السكندري (أوريجانوس، كيرلس السكندري)، والتحقيق التاريخي للمخطوطات القبطية واليونانية',
        'الموديول الثاني الأخلاقيات الحيوية والكرامة الإنسانية: الموقف المسيحي من التبرع بالأعضاء، الرعاية التلطيفية مقابل القتل الرحيم، التعديل الجيني، وأخلاقيات الذكاء الاصطناعي',
        'الموديول الثالث العمارة الرهبانية والتاريخ الثقافي القبطي: تطور أنظمة الرهبنة التوحدية والشركوية (باخوميوس وشنودة)، الفن والأيقونات القبطية، والموسيقى الكنسية',
        'الموديول الرابع المجامع المسكونية والحوار الدولي: مجمع نيقية (أثناسيوس وعقيدة الجوهر الواحد)، مجمع أفسس، الحوارات اللاهوتية المعاصرة، وبناء السلام العالمي',
      ],
      bridgeInsightEn:
        'Thanaweya provides an accredited ministerial foundation in biblical scriptures, the seven church sacraments, family ethics, and national Coptic milestones. EG-Bac elevates this into graduate-level patristic theology, textual manuscript criticism, contemporary bioethical decision-making, Coptic art & architectural analysis, and ecumenical historical jurisprudence.',
      bridgeInsightAr:
        'ترسخ الثانوية العامة المعرفة الإيمانية والمنهجية المعتمدة لأسفار العهدين، أسرار الكنيسة السبعة، بناء الأسرة المسيحية، ومحطات التراث القبطي الوطني. بينما ترتقي البكالوريا بالدارس إلى آفاق اللاهوت الآبائي والتحقيق التاريخي للمخطوطات، الفكر الأخلاقي الحيوي المعاصر، علم الآثار والعمارة الرهبانية القبطية، وفقه المجامع المسكونية وحوار السلام العالمي.',
      universityAdvantageEn: 'Unrivaled preparation for Theological Colleges & Seminaries, Coptic Studies Institutes, Comparative Religion faculties, Bioethics & Medical Law, and World Heritage & Museology careers.',
      universityAdvantageAr: 'تأهيل أكاديمي ريادي للكليات الإكليريكية، معاهد الدراسات القبطية والتاريخ الكنسي، كليات اللغات والآثار والمتاحف، والقانون الطبي وحوار الحضارات والأديان.',
    },
    {
      id: 'economics_stat_bridge',
      titleEn: 'Economics & Applied Statistics: Macroeconomic Principles & Stochastic Inference',
      titleAr: 'الاقتصاد والإحصاء التطبيقي: مبادئ الاقتصاد الكلي والاستدلال العشوائي',
      icon: <TrendingUp className="w-5 h-5 text-amber-500" />,
      thanaweyaBranchId: 'thanaweya_economics_stat',
      egBacBranchId: 'egbac_economics_stat',
      thanaweyaTitleEn: 'Complete 10-Unit Program: 6 Units Macroeconomics + 4 Units Applied Statistics',
      thanaweyaTitleAr: 'المنهج المتكامل (١٠ وحدات): ٦ وحدات اقتصاد كلي + ٤ وحدات إحصاء تطبيقي',
      thanaweyaTopicsEn: [
        'Ch.1-6 Macroeconomics: Needs & scarcity, production factors, value added & national income, public finance & taxation, money & banking, and globalization',
        'Ch.7 Linear Correlation & Regression: Pearson product-moment coefficient, Spearman rank correlation, and regression line equation y on x',
        'Ch.8 Probability & Conditional Independence: Sample space, conditional probability rule P(A|B), multiplication rule, and independent events',
        'Ch.9 Random Variables & Distributions: Discrete probability distribution, mathematical expectation (mean), variance, standard deviation, and continuous probability density functions',
        'Ch.10 Standard Normal Bell Curve: Gaussian distribution, standard score Z-transformation, and area table probability evaluation',
      ],
      thanaweyaTopicsAr: [
        'فصول ١-٦ الاقتصاد: المشكلة الاقتصادية، عناصر الإنتاج، القيمة المضافة وتوازن الدخل القومي، المالية العامة والضرائب، النقود والبنوك، والعلاقات الاقتصادية الدولية',
        'فصل ٧ الارتباط والانحدار: معامل ارتباط بيرسون الخطي، ارتباط الرتب لسبيرمان، ومعادلة خط انحدار ص على س وتوقع القيم وحساب الخطأ',
        'فصل ٨ الاحتمال الشرطي: فضاء العينة وقوانين الاحتمال، قانون الاحتمال الشرطي ل(أ|ب)، وقاعدة ضرب الاحتمالات والأحداث المستقلة',
        'فصل ٩ المتغيرات العشوائية والتوزيعات: التوزيع الاحتمالي المتقطع، التوقع الرياضي (المتوسط الحسابي)، التباين والانحراف المعياري، ودالة كثافة الاحتمال للمتغير المتصل',
        'فصل ١٠ التوزيع الطبيعي المعياري: منحنى غاوس، درجات Z المعيارية، وقراءة جداول المساحات تحت المنحنى الطبيعي لحساب الاحتمالات',
      ],
      egBacTitleEn: 'Advanced 10-Unit Quantitative Macroeconomics & Econometric Modeling Track',
      egBacTitleAr: 'المسار المتقدم (١٠ وحدات): الاقتصاد الكلي الكمي والنمذجة القياسية والإحصاء الاستدلالي',
      egBacTopicsEn: [
        'Units 1-6 Quantitative Economics: Dynamic PPC trade-offs, capital obsolescence modeling, Keynesian investment multiplier derivation, market failure externalities, central bank interest-rate transmission, and Ricardian comparative advantage',
        'Unit 7 Bivariate Econometric Regression: Method of ordinary least squares (OLS), covariance identities, residuals analysis, and coefficient of determination (R²)',
        'Unit 8 Advanced Stochastic Processes: Multidimensional probability trees, Bayes theorem with multiple priors, and Markovian independence',
        'Unit 9 Continuous Probability Integrals: Piecewise continuous density functions, trapezoidal calculus proofs, variance algebraic identities, and coefficient of variation',
        'Unit 10 Gaussian Standardization & Risk Engineering: Two-tailed confidence intervals, inverse normal probability lookup, and financial risk quality control',
      ],
      egBacTopicsAr: [
        'وحدات ١-٦ الاقتصاد الكمي المتقدم: ديناميات منحنى إمكانات الإنتاج، الاستهلاك الاقتصادي لرأس المال، اشتقاق مضاعف الاستثمار الكينزي، الآثار الخارجية وإخفاق السوق، آلية انتقال السياسة النقدية، ونظرية الميزة النسبية لريكاردو',
        'وحدة ٧ الانحدار القياسي بالمربعات الصغرى: اشتقاق معادلتي خط الانحدار، تحليل التباين المشترك، تحليل البواقي، ومعامل التحديد R²',
        'وحدة ٨ الاستدلال الاحتمالي والبايزي المتقدم: أشجار الاحتمال المتعددة، مبرهنة بايز مع الفروض المسبقة المركبة، واستقلال العمليات العشوائية',
        'وحدة ٩ تكاملات التوزيعات المستمرة: دوال الكثافة المعرفة بأكثر من قاعدة، البراهين الهندسية لمساحات شبه المنحرف، وخصائص التباين ومعامل الاختلاف',
        'وحدة ١٠ المعايرة الطبيعية وإدارة المخاطر: فترات الثقة الثنائية، المسائل العكسية للتوزيع الطبيعي، وتطبيقات الرقابة الإحصائية على الجودة وإدارة المخاطر الاستثمارية',
      ],
      bridgeInsightEn:
        'Thanaweya provides an exhaustive ministerial grounding in public finance concepts, basic macroeconomic identities, and manual computational procedures for Pearson correlation, expectation, and standard Z-scores. EG-Bac elevates these to econometric modeling, algebraic proofs of variance, Bayesian networks, and quantitative open-economy dynamics.',
      bridgeInsightAr:
        'تمنح الثانوية العامة تأسيساً وزارياً محكماً في مفاهيم المالية العامة والتدفق الدائري والحسابات المباشرة لمعاملات بيرسون والاحتمال الشرطي وجداول Z، بينما تنقل البكالوريا الطالب إلى النمذجة القياسية الاقتصادية، براهين التباين الجبرية، الشبكات البايزية، وتحليل التوازن الكلي المفتوح.',
      universityAdvantageEn: 'Direct foundational springboard for faculties of Economics & Political Science, Business Administration, Actuarial Science, Data Science, and Financial Engineering.',
      universityAdvantageAr: 'قاعدة انطلاق حاسمة لكليات الاقتصاد والعلوم السياسية، إدارة الأعمال والمحاسبة، العلوم الاكتوارية، علوم البيانات، والهندسة المالية.',
    },
    {
      id: 'cs_informatics_bridge',
      titleEn: 'Computer Science, Informatics & AI: Digital Logic, Algorithms & Intelligent Systems',
      titleAr: 'علوم الحاسب والمعلوماتية والذكاء الاصطناعي: المنطق الرقمي، الخوارزميات، والنظم الذكية',
      icon: <Binary className="w-5 h-5 text-indigo-400" />,
      thanaweyaBranchId: 'thanaweya_cs_informatics',
      egBacBranchId: 'egbac_cs_informatics',
      thanaweyaTitleEn: 'Comprehensive 10-Chapter Computer Science, Networking & AI Track',
      thanaweyaTitleAr: 'المنهج الشامل (١٠ فصول): علوم الحاسب والبرمجيات والشبكات والذكاء الاصطناعي',
      thanaweyaTopicsEn: [
        'Ch.1 Digital Logic & Architecture: Boolean algebra, truth tables, logic gates, half/full adders, and von Neumann architecture',
        'Ch.2 Algorithms & Complexity: Flowcharts, pseudocode, asymptotic Big-O notation, linear & binary search, bubble/insertion/selection sort',
        'Ch.3 Data Structures: Static vs. dynamic memory, arrays, linked lists, stacks (LIFO), queues (FIFO), and binary trees',
        'Ch.4 Relational Databases: Entity-Relationship modeling (ERD), normalization (1NF-3NF), primary/foreign keys, and SQL DDL/DML/DQL',
        'Ch.5 Networks & TCP/IP: OSI 7 layers, TCP/IP stack, IPv4 addressing, subnet masks, CIDR prefix routing, DNS, and HTTP/HTTPS',
        'Ch.6 Cybersecurity & Cryptography: Confidentiality-Integrity-Availability (CIA), symmetric vs. asymmetric encryption (AES, RSA), and digital signatures',
        'Ch.7 AI & Machine Learning: Supervised vs. unsupervised learning, regression, decision trees, confusion matrix metrics, and ethics',
        'Ch.8 Advanced Neural Networks: Perceptron model, activation functions (ReLU, Sigmoid), backpropagation, and loss functions',
        'Ch.9 Web Technologies & Cloud: HTML5 semantics, CSS3 layouts, JavaScript DOM manipulation, REST APIs, and cloud services (IaaS/PaaS/SaaS)',
        'Ch.10 Software Engineering & Ethics: SDLC lifecycle (Waterfall, Agile/Scrum), version control (Git), algorithmic bias, and IP law',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ المنطق الرقمي والمعمارية: الجبر البولياني، جداول الصدق، البوابات المنطقية، الجوامع النصفية والكاملة، ومعمارية فون نيومان',
        'فصل ٢ الخوارزميات والتعقيد الحسابي: خرائط التدفق، الكود الزائف، ترميز Big-O، خوارزميات البحث والترتيب، والتحليل الزمني',
        'فصل ٣ هياكل البيانات: المصفوفات، القوائم المتصلة، المكدسات (LIFO)، الطوابير (FIFO)، والأشجار الثنائية وعمليات المرور عليها',
        'فصل ٤ قواعد البيانات العلائقية: مخططات الكيانات والعلاقات (ERD)، تسوية الجداول (1NF-3NF)، والمفاتيح واستعلامات SQL',
        'فصل ٥ شبكات الحاسب وبروتوكول TCP/IP: طبقات OSI، حزمة TCP/IP، عنونة IPv4، أقنعة الشبكات وتوجيه CIDR، ونظام DNS',
        'فصل ٦ الأمن السيبراني والتشفير: مثلث الأمان (CIA)، التشفير المتماثل وغير المتماثل (AES, RSA)، والتوقيعات الرقمية والشهادات',
        'فصل ٧ الذكاء الاصطناعي وتعلم الآلة: التعلم الموجه وغير الموجه، شجيرات القرار، مصفوفة الالتباس، والاعتبارات الأخلاقية',
        'فصل ٨ الشبكات العصبية والتعلم العميق: نموذج البيرسبترون، دوال التنشيط، خوارزمية الانتشار العكسي، ودوال الخسارة وتقليل الانحدار',
        'فصل ٩ هندسة الويب والحوسبة السحابية: هيكلية HTML5، تنسيق CSS3، تفاعلية DOM، واجهات RESTful APIs، ونماذج السحابة IaaS/PaaS/SaaS',
        'فصل ١٠ هندسة البرمجيات وأخلاقيات الحوسبة: دورة حياة تطوير البرمجيات (SDLC)، منهجية Agile، أنظمة التحكم في الإصدارات Git، والملكية الفكرية',
      ],
      egBacTitleEn: 'Advanced 10-Unit Computational Systems, Distributed Architectures & Applied AI Framework',
      egBacTitleAr: 'المسار المتقدم (١٠ فصول): الأنظمة الحاسوبية، المعماريات الموزعة، وهندسة الذكاء الاصطناعي التطبيقي',
      egBacTopicsEn: [
        'Units 1-3 Theoretical Computing: Combinational/sequential logic synthesis, Karnaugh maps, asymptotic amortized complexity, graph traversals (BFS/DFS), and memory pointer architecture',
        'Units 4-5 Distributed Data & Networks: Relational schema normalization calculus, query execution plans, sub-netting mathematical proofs, packet fragmentation, and socket programming principles',
        'Units 6-7 Cryptographic Protocols & Statistical ML: Public-key infrastructure (PKI), zero-knowledge concepts, gradient descent convergence, ROC-AUC curve analysis, and ensemble methods',
        'Units 8-10 Deep Learning & System Design: Multi-layer perceptron tensor operations, vanishing gradient mitigations, microservices architecture, CI/CD pipeline automation, and algorithmic fairness metrics',
      ],
      egBacTopicsAr: [
        'فصول ١-٣ الحوسبة النظرية وهندسة الخوارزميات: تركيب المنطق التوافقي والتعاقبي، خرائط كارنوف، التعقيد الزمني الإجمالي، مسح المخططات (BFS/DFS)، وإدارة المؤشرات في الذاكرة',
        'فصول ٤-٥ البيانات الموزعة والشبكات: براهين تسوية الجداول، خطط تنفيذ الاستعلامات، البراهين الرياضية لتقسيم الشبكات الفرعية، وتجزئة الحزم والبرمجة الشبكية',
        'فصول ٦-٧ البروتوكولات الأمنية والتعلم الإحصائي: البنية التحتية للمفاتيح العامة (PKI)، خوارزميات التدرج التنازلي ونقاط التقارب، منحنيات ROC-AUC، ونماذج التجميع',
        'فصول ٨-١٠ التعلم العميق وتصميم الأنظمة: عمليات التنسور في الشبكات متعددة الطبقات، تلاشي الانحدار، معمارية الخدمات المصغرة (Microservices)، خطوط CI/CD، ومقاييس العدالة الخوارزمية',
      ],
      bridgeInsightEn:
        'Thanaweya provides an exhaustive foundation in computer architecture, systematic algorithmic traces, practical SQL, networking protocols, and essential AI models. EG-Bac expands this into full-stack software system architecture, mathematical optimization proofs, formal schema engineering, and advanced deep learning pipelines.',
      bridgeInsightAr:
        'تمنح الثانوية العامة تأسيساً شاملاً في بنية الحاسب، تتبع الخوارزميات، استعلامات SQL، بروتوكولات الشبكات، ونماذج الذكاء الاصطناعي الأساسية. بينما ترتقي البكالوريا بالمنهج إلى تصميم الأنظمة البرمجية المتكاملة، براهين التحسين الرياضي، هندسة البيانات الموزعة، ومسارات التعلم العميق المتقدمة.',
      universityAdvantageEn: 'Direct accelerated qualification for faculties of Computers & Artificial Intelligence, Computer Engineering, Software Engineering, Cybersecurity, and Data Science.',
      universityAdvantageAr: 'تأهيل مباشر وفوري لكليات الحاسبات والذكاء الاصطناعي، هندسة الحاسب والبرمجيات، الأمن السيبراني، ونظم وعلوم البيانات.',
    },
    {
      id: 'earth_space_bridge',
      titleEn: 'Earth & Planetary Space Sciences: Astrophysics, Celestial Mechanics & Remote Sensing',
      titleAr: 'علوم الأرض والفلك: الفيزياء الفلكية، الميكانيكا السماوية، والاستشعار عن بعد',
      icon: <Orbit className="w-5 h-5 text-indigo-400" />,
      thanaweyaBranchId: 'thanaweya_earth_space',
      egBacBranchId: 'egbac_earth_space',
      thanaweyaTitleEn: 'Comprehensive 10-Chapter Earth & Space Exploration Track',
      thanaweyaTitleAr: 'المنهج الشامل (١٠ فصول): علوم الأرض والفلك واستكشاف الفضاء',
      thanaweyaTopicsEn: [
        'Ch.1 Celestial Mechanics: Keplerian laws, orbital eccentricity, semi-major axis, and orbital periods',
        'Ch.2 Comparative Planetology: Terrestrial vs. Jovian planets, planetary interiors, and atmospheres',
        'Ch.3 Solar Physics & Space Weather: Nuclear fusion, solar wind, coronal mass ejections, and geomagnetic storms',
        'Ch.4 Stellar Evolution: Hertzsprung-Russell diagram, stellar nucleosynthesis, white dwarfs, and neutron stars',
        'Ch.5 Cosmology & Galaxies: Galactic morphologies, Doppler redshift, cosmic expansion, and dark matter',
        'Ch.6 Astrodynamics & Rocketry: Tsiolkovsky rocket equation, specific impulse (Isp), and Hohmann transfer burns',
        'Ch.7 Satellite Remote Sensing: Electromagnetic spectrum, atmospheric windows, multispectral sensors, and NDVI',
        'Ch.8 Exoplanetary Astronomy: Radial velocity method, transit photometry, transit transmission spectroscopy, and habitable zones',
        'Ch.9 Space Instrumentation: Ground-based & space observatories, optical/infrared/radio telescopes, and CCDs',
        'Ch.10 Space Law & Exploration: Outer Space Treaty, space debris mitigation (Kessler syndrome), and planetary protection',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ الميكانيكا السماوية: قوانين كبلر الثلاثة، الانحراف المداري، نصف المحور الأكبر، وحسابات الزمن الدوري',
        'فصل ٢ علم الكواكب المقارن: الكواكب الصخرية والعملاقة الغازية، البنية الداخلية وتمايز الكواكب، والأغلفة الجوية',
        'فصل ٣ فيزياء الشمس والطقس الفضائي: سلاسل الاندماج النووي، الرياح الشمسية، الانبعاثات الكتلية، والعواصف المغناطيسية',
        'فصل ٤ تطور النجوم ومخطط H-R: تسلسلات النجوم ومخطط هرتزبرنغ-راسل، الأقزام البيضاء، والنجوم النيوترونية',
        'فصل ٥ علم الكونيات والمجرات: أشكال المجرات، الانزياح نحو الأحمر، تمدد الكون وقانون هابل، ومنحنيات المادة المظلمة',
        'فصل ٦ ديناميكا الصواريخ والملاحة الفضائية: معادلة تسيلكوفسكي للصواريخ، الدفع النوعي، ومناورات نقل هومان المدارية',
        'فصل ٧ الاستشعار عن بعد بالأقمار الصناعية: الطيف الكهرومغناطيسي، نوافذ النفاذية الجوية، والمستشعرات متعددة الأطياف ومؤشر NDVI',
        'فصل ٨ الكواكب النجمية الخارجية: طريقة السرعة الشعاعية، طيف عبور الكواكب، ونطاقات الكواكب القابلة للحياة (Goldilocks)',
        'فصل ٩ المراصد والمعدات الفضائية: التلسكوبات البصرية والأشعة تحت الحمراء والراديوية، كواشف CCD والأنظمة المبردة',
        'فصل ١٠ قانون الفضاء وحماية البيئة الفضائية: معاهدة الفضاء الخارجي 1967، متلازمة كسلر لتراكم الحطام، وبروتوكولات حماية الكواكب',
      ],
      egBacTitleEn: 'Advanced 10-Unit Planetary Astrophysics & Astrodynamical Systems Framework',
      egBacTitleAr: 'المسار المتقدم (١٠ فصول): الفيزياء الفلكية الكوكبية، ديناميكا الملاحة، واستكشاف الفضاء العميق',
      egBacTopicsEn: [
        'Units 1-3 Orbital Mechanics & Heliophysics: Vis-viva equations, three-body Lagrange points, magnetohydrodynamic dynamos, and solar plasma reconnection',
        'Units 4-5 Relativistic Astrophysics & Cosmology: Degeneracy pressure, Chandrasekhar/TOV limits, Friedmann expansion equations, and CMB anisotropy analysis',
        'Units 6-7 Spacecraft Systems & Hyperspectral Sensing: Multi-stage mass optimization, low-thrust ion trajectory design, and radiative transfer spectroscopy',
        'Units 8-10 Planetary Astrobiology & Mission Architecture: Biosignature spectroscopy, atmospheric scale heights, and deep-space mission design',
      ],
      egBacTopicsAr: [
        'فصول ١-٣ الميكانيكا المدارية وفيزياء الشمس: معادلات فيس-فيفا للطاقة المدارية، نقاط لاغرانج لنظام الأجسام الثلاثة، ودينامو البلازما المغناطيسية',
        'فصول ٤-٥ الفيزياء الفلكية والكونيات: ضغط الانحلال الكمي، حدود تشاندراسيخار وتولمان-أوبنهايمر، معادلات فريدمان، وتحليل إشعاع الخلفية الكونية',
        'فصول ٦-٧ هندسة المركبات والاستشعار فائق الأطياف: التحسين الرياضي لكتل الصواريخ متعددة المراحل، الدفع الأيوني، ونمذجة الانتقال الإشعاعي',
        'فصول ٨-١٠ البيولوجيا الفلكية وتصميم المهام الفضائية: البصمات الطيفية الحيوية، مقياس الارتفاع الجوي، وتصميم معماريات مهام الفضاء السحيق',
      ],
      bridgeInsightEn:
        'Thanaweya provides an extensive foundation in Keplerian orbital mechanics, solar system planetology, stellar evolution, and satellite Earth observation. EG-Bac elevates this with collegiate-level astrodynamical derivations (vis-viva, Lagrange points), relativistic astrophysics, and hyperspectral radiometric analysis.',
      bridgeInsightAr:
        'تمنح الثانوية العامة تأسيساً شاملاً في الميكانيكا السماوية لكبلر، علم الكواكب، تطور النجوم، ومراقبة الأرض بالأقمار الصناعية. بينما ترتقي البكالوريا بالمنهج إلى مستوى متقدم يشمل اشتقاقات الملاحة الفضائية (معادلات فيس-فيفا ونقاط لاغرانج)، الفيزياء الفلكية النسبية، والتحليل الإشعاعي فائق الأطياف.',
      universityAdvantageEn: 'Direct accelerated springboard for faculties of Aerospace & Space Engineering, Astronomy & Astrophysics, Satellite Communications, Remote Sensing, and Planetary Sciences.',
      universityAdvantageAr: 'تأهيل مباشر ومتقدم للالتحاق بكليات هندسة الطيران والفضاء، علوم الفلك والفيزياء الفلكية، هندسة الاتصالات الفضائية، الاستشعار عن بعد، وعلوم الكواكب.',
    },
    {
      id: 'civics_bridge',
      titleEn: 'National Civics, Constitutional Law & Democratic Governance',
      titleAr: 'التربية الوطنية، القانون والدستور، والحوكمة الديمقراطية',
      icon: <Scale className="w-5 h-5 text-emerald-400" />,
      thanaweyaBranchId: 'thanaweya_civics',
      egBacBranchId: 'egbac_civics',
      thanaweyaTitleEn: 'National Civics & Constitution (4 Grade 12 Chapters)',
      thanaweyaTitleAr: 'التربية الوطنية والدستور للثانوية العامة (٤ فصول)',
      thanaweyaTopicsEn: [
        'Ch.1 Law and Constitution: Concept of legal rules, origins of Egyptian law, constitutional supremacy, and Constitutional Court powers',
        'Ch.2 Democracy and Citizenship: Democratic principles, direct vs. representative democracy, rights, duties, and social contract',
        'Ch.3 Political Parties: Party system evolution in Egypt, multi-party principles, functions, party financing, and governance',
        'Ch.4 Political Participation & Elections: Electoral cycles, voter registration, parliamentary oversight, and civic responsibility',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ القانون والدستور: ماهية القواعد القانونية، تطور التشريعات المصرية، سمو الدستور، واختصاصات المحكمة الدستورية العليا',
        'فصل ٢ الديمقراطية والمواطنة: مقومات النظم الديمقراطية، الديمقراطية المباشرة والنيابية، الحقوق والواجبات، ونظرية العقد الاجتماعي',
        'فصل ٣ الأحزاب السياسية: نشأة وتطور التعددية الحزبية في مصر، أهداف ووظائف الأحزاب، مصادر التمويل، وقواعد الحوكمة الحزبية',
        'فصل ٤ المشاركة السياسية والانتخابات: مراحل العملية الانتخابية، القيد والتصويت، الرقابة البرلمانية، وقيم النزاهة والمسؤولية المدنية',
      ],
      egBacTitleEn: 'Advanced Comparative Constitutional Law, Institutional Governance & Civic Ethics (4 Units)',
      egBacTitleAr: 'القانون الدستوري المقارن، حوكمة المؤسسات، والأخلاقيات المدنية للبكالوريا (٤ وحدات)',
      egBacTopicsEn: [
        'Ch.1 Comparative Constitutional Jurisprudence: Constitutional review, separation of powers, and international human rights treaties',
        'Ch.2 Democratic Governance & Institutional Integrity: Transparency, anti-corruption frameworks, and civic engagement mechanisms',
        'Ch.3 Party Systems & Electoral Engineering: Proportional representation, seat allocation algorithms (D’Hondt & Sainte-Laguë), and campaign finance',
        'Ch.4 Civic Agency, Human Rights & Public Policy: Digital civic engagement, policy analysis, grassroots advocacy, and ethical public service',
      ],
      egBacTopicsAr: [
        'فصل ١ الفقه الدستوري المقارن: الرقابة على دستورية القوانين، فصل السلطات وتوازنها، وتكامل المعاهدات الدولية لحقوق الإنسان',
        'فصل ٢ الحوكمة الديمقراطية والنزاهة المؤسسية: الشفافية ومكافحة الفساد، الحوكمة الرشيدة، وآليات الشراكة المجتمعية في صنع القرار',
        'فصل ٣ الأنظمة الحزبية والهندسة الانتخابية: التمثيل النسبي، خوارزميات توزيع المقاعد (سانت لاغو وهوندت)، وحوكمة تمويل الحملات',
        'فصل ٤ الفاعلية المدنية والسياسات العامة: المواطنة الرقمية، تحليل السياسات العامة، المناصرة المجتمعية، والأخلاقيات القيادية للمصلحة العامة',
      ],
      bridgeInsightEn:
        'Thanaweya provides an essential civic foundation in statutory legal principles, the Egyptian constitutional hierarchy, party regulation, and electoral rights. EG-Bac expands this into collegiate-level comparative constitutional law, algorithmic electoral seat allocation, anti-corruption governance, and public policy formulation.',
      bridgeInsightAr:
        'ترسخ الثانوية العامة مفاهيم المواطنة الدستورية، التدرج التشريعي، نشأة التعددية الحزبية، وضمانات الاقتراع الحر. بينما تعمق البكالوريا هذه المفاهيم بدراسة الفقه الدستوري المقارن، التحليل الحسابي للهندسة الانتخابية وتوزيع المقاعد، حوكمة مكافحة الفساد، وهندسة السياسات العامة للدولة الحديثة.',
      universityAdvantageEn: 'Direct foundational springboard for faculties of Law, Political Science & Economics, Public Administration, International Relations, and Diplomatic Studies.',
      universityAdvantageAr: 'تأهيل ريادي وأكاديمي لكليات الحقوق، الاقتصاد والعلوم السياسية، الإدارة العامة والسياسات، العلاقات الدولية، والسلك الدبلوماسي والقضائي.',
    },
    {
      id: 'business_bridge',
      titleEn: 'Business Administration, Entrepreneurship & Venture Finance',
      titleAr: 'إدارة الأعمال، ريادة الأعمال والتمويل الاستثماري',
      icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
      thanaweyaBranchId: 'thanaweya_business',
      egBacBranchId: 'egbac_business',
      thanaweyaTitleEn: 'Business Administration & Organizational Management (4 Grade 12 Chapters)',
      thanaweyaTitleAr: 'إدارة الأعمال والتنظيم المؤسسي للثانوية العامة (٤ فصول)',
      thanaweyaTopicsEn: [
        'Ch.1 Principles of Management & Organizational Structures: Planning, organizing, directing, controlling, delegation, and spans of control',
        'Ch.2 Financial Management & Accounting: Balance sheets, income statements, cash flow, working capital, and break-even analysis',
        'Ch.3 Marketing Management & Consumer Behavior: The 4Ps marketing mix, market segmentation, targeting, and consumer decision cycles',
        'Ch.4 Operations & Supply Chain Management: Production planning, EOQ inventory modeling, supply logistics, and Total Quality Management (TQM)',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ مبادئ الإدارة والتنظيم المؤسسي: وظائف الإدارة (التخطيط، التنظيم، التوجيه، الرقابة)، تفويض السلطة، ونطاقات الإشراف',
        'فصل ٢ الإدارة المالية والمحاسبة: الميزانية العمومية، قائمة الدخل، التدفقات النقدية، رأس المال العامل، وتحليل نقطة التعادل',
        'فصل ٣ إدارة التسويق وسلوك المستهلك: المزيج التسويقي (4Ps)، تجزئة السوق، استهداف القطاعات، ودورة اتخاذ قرار الشراء',
        'فصل ٤ إدارة العمليات وسلاسل الإمداد: تخطيط الإنتاج، نموذج الحجم الاقتصادي للطلب (EOQ)، اللوجستيات، وإدارة الجودة الشاملة (TQM)',
      ],
      egBacTitleEn: 'Advanced Entrepreneurship, Venture Capital & Digital Business Models (4 Modules)',
      egBacTitleAr: 'ريادة الأعمال المتقدمة، رأس المال المخاطر ونماذج الأعمال الرقمية للبكالوريا (٤ وحدات)',
      egBacTopicsEn: [
        'Mod.1 Strategic Management & Corporate Governance: Porter’s Five Forces, VRIO framework, agency theory, and ESG sustainability governance',
        'Mod.2 Entrepreneurship & Lean Startup: Customer discovery, MVP prototyping, Lean Canvas architecture, and agile venture validation',
        'Mod.3 Corporate Finance & Valuation: Discounted Cash Flow (DCF), WACC cost of capital, venture rounds (Seed to Series B), and term sheets',
        'Mod.4 Digital Business Models & Platform Economics: Network effects, multi-sided platforms, SaaS unit economics (LTV/CAC), and growth loops',
      ],
      egBacTopicsAr: [
        'وحدة ١ الإدارة الاستراتيجية وحوكمة الشركات: نموذج بورتر للقوى الخمس، إطار VRIO للميزة التنافسية، نظرية الوكالة، وحوكمة الاستدامة (ESG)',
        'وحدة ٢ ريادة الأعمال والشركات الناشئة الرشيقة: اكتشاف العملاء، بناء النماذج الأولية (MVP)، هندسة مخطط اللين، والتحقق السريع من الفرضيات',
        'وحدة ٣ مالية الشركات والتقييم الاستثماري: التدفقات النقدية المخصومة (DCF)، المتوسط المرجح لتكلفة رأس المال (WACC)، وجولات التمويل المخاطر',
        'وحدة ٤ نماذج الأعمال الرقمية واقتصاد المنصات: تأثيرات الشبكة، المنصات متعددة الأطراف، اقتصاديات وحدات البرمجيات (LTV/CAC)، ومحركات النمو',
      ],
      bridgeInsightEn:
        'Thanaweya establishes a rigorous foundation in classical managerial functions, financial accounting statements, classical marketing mix, and production logistics. EG-Bac elevates this into high-growth entrepreneurial venture building, DCF/WACC corporate valuation, venture capital financing structures, and digital platform economics.',
      bridgeInsightAr:
        'تمنح الثانوية العامة تأسيساً متيناً في وظائف الإدارة الكلاسيكية، قراءة القوائم المالية والمحاسبية، المزيج التسويقي، ولوجستيات العمليات والإنتاج. بينما تنقل البكالوريا الطالب إلى مستوى جامعي متقدم يركز على بناء وتأسيس الشركات الناشئة سريعة النمو، التقييم المالي المتقدم للشركات (DCF وWACC)، آليات الاستثمار الجريء، واقتصاد المنصات الرقمية.',
      universityAdvantageEn: 'Direct foundational springboard for faculties of Commerce & Business Administration, Economics, Entrepreneurship Institutes, Financial Engineering, Management Information Systems (MIS), and MBA/CFA preparatory pathways.',
      universityAdvantageAr: 'تأهيل أكاديمي وريادي مباشر لكليات التجارة وإدارة الأعمال، الاقتصاد والعلوم المالية، معاهد ريادة الأعمال وحاضنات التقنية، نظم المعلومات الإدارية (MIS)، والمسارات المؤهلة لشهادات CFA وMBA المهنية الدولية.',
    },
    {
      id: 'fine_arts_bridge',
      titleEn: 'Fine Arts, Architectural Design & Visual Culture',
      titleAr: 'الفنون الجميلة، التصميم المعماري والثقافة البصرية',
      icon: <Palette className="w-5 h-5 text-rose-400" />,
      thanaweyaBranchId: 'thanaweya_fine_arts',
      egBacBranchId: 'egbac_fine_arts',
      thanaweyaTitleEn: 'Fine Arts & Architectural Design Foundation (4 Grade 12 Chapters)',
      thanaweyaTitleAr: 'الفنون الجميلة والتصميم المعماري للثانوية العامة (٤ فصول)',
      thanaweyaTopicsEn: [
        'Ch.1 Freehand Perspective & Orthogonal Projection: 1-point and 2-point perspective grids, horizon line calibration, eye level dynamics, and spatial recession',
        'Ch.2 Light, Shadow & Chiaroscuro Modeling: Value scale gradients, core shadows, reflected light, cast shadows, and volumetric rendering',
        'Ch.3 Color Theory & Visual Harmony: RYB/RGB color wheels, complementary/triadic palettes, chromatic temperature, and the 60-30-10 architectural rule',
        'Ch.4 Architectural Design & Geometric Compositions: Golden Ratio φ proportions, facade rhythm, scale, human anthropometrics, and urban aesthetics',
      ],
      thanaweyaTopicsAr: [
        'فصل ١ المنظور الحر والإسقاط المتعامد: منظور النقطة والنقطتين، خط الأفق، مستوى عين الناظر، والتراجع الفراغي للخطوط',
        'فصل ٢ دراسة الظل والنور والتشكيل المجسم: درجات التظليل، خط فاصل الظل الذاتي، الضوء المنعكس، والظل الساقط للمجسمات',
        'فصل ٣ نظريات الألوان والتوافق البصري: دوائر الألوان، التوافق المتكامل والثلاثي والمتجاور، حرارة الألوان، وقاعدة 60-30-10',
        'فصل ٤ التصميم المعماري والتكوينات الهندسية: النسبة الذهبية φ، الإيقاع المعماري للواجهات، المقياس الإنساني، وجماليات الفراغ الحضري',
      ],
      egBacTitleEn: 'Advanced Architectural Heritage, Spatial Typologies & Islamic Geometry (4 Modules)',
      egBacTitleAr: 'التراث المعماري المتقدم، الأنماط الفراغية والهندسة الإسلامية للبكالوريا (٤ وحدات)',
      egBacTopicsEn: [
        'Mod.1 Architectural History & Heritage Preservation: Pharaonic, Coptic, Islamic Mamluk/Fatimid architectures, Hassan Fathy vernacularism, and conservation',
        'Mod.2 Spatial Design, Ergonomics & Sustainable Architecture: Bioclimatic passive cooling, courtyards, mashrabiya shading, windcatchers (malqaf), and green materials',
        'Mod.3 Islamic Geometric Patterns & Structural Tessellation: 8-fold and 12-fold star rosettes, ablaq marble masonry, muqarnas squinches, and girih tiles',
        'Mod.4 Digital Visual Culture, Parametricism & Contemporary Art: Computational generative design, parametric facades, installation art, and cultural curation',
      ],
      egBacTopicsAr: [
        'وحدة ١ تاريخ العمارة والحفاظ على التراث: العمارة الفرعونية والقبطية والإسلامية (الفاطمية والمملوكية)، عمارة حسن فتحي البيئية، وصون المعالم الأثرية',
        'وحدة ٢ التصميم الفراغي، الإرجونوميكس والعمارة المستدامة: التبريد البيئي السلبي، الأفنية الداخلية، المشربيات الخشبية، الملاقف الهوائية، والمواد الخضراء',
        'وحدة ٣ الأنماط الهندسية الإسلامية والتعشيق الفراغي: الأطباق النجمية الثمانية والإثناعشرية، مداميك الأبلق الرخامي، المقرنصات الانتقالية، وبلاطات الجيريه',
        'وحدة ٤ الثقافة البصرية الرقمية والتصميم البارامتري والفن المعاصر: التصميم التوليدي الحاسوبي، الواجهات الحركية، التجهيز في الفراغ، والتقييم المتحفي',
      ],
      bridgeInsightEn:
        'Thanaweya establishes a rigorous artistic foundation in freehand perspective drafting, volumetric chiaroscuro shading, academic color wheel harmony, and proportion. EG-Bac expands into architectural heritage preservation, passive sustainable bioclimatic environmental systems (mashrabiya and windcatchers), complex Islamic star tessellations, and parametric digital visual culture.',
      bridgeInsightAr:
        'تمنح الثانوية العامة تأسيساً فنياً وأكاديمياً متيناً في رسم المنظور الحر الهندسي، التظليل المجسم المتقن للظل والنور، التوافق اللوني المعماري، والتناسب الذهبي. بينما تنقل البكالوريا الطالب إلى عمق تاريخ العمارة وصون التراث، التصميم المستدام وحلول المناخ السلبية (المشربيات وملاقف الهواء المستلهمة من حسن فتحي)، الأطباق النجمية والمقرنصات الإسلامية المعقدة، والفن البارامتري الرقمي المعاصر.',
      universityAdvantageEn: 'Essential academic preparation and portfolio readiness for Faculties of Fine Arts (Architecture & Decor), Applied Arts, Architectural Engineering, Urban Planning, Graphic & Digital Design, and International Conservation Academies.',
      universityAdvantageAr: 'تأهيل أكاديمي محوري واجتياز اختبارات القدرات المؤهلة لكليات الفنون الجميلة (عمارة وديكور وفنون)، الفنون التطبيقية، الهندسة المعمارية، التخطيط العمراني، التصميم الجرافيكي والوسائط الرقمية، وأكاديميات الترميم والآثار الدولية.',
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
              <span className={`text-xl font-black ${isLight ? 'text-white' : 'text-indigo-400'}`}>{isArabic ? toHindiDigits(281) : '281'}</span>
              <span className={`text-[10px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? '(١٤٧ ثانوية + ١٣٤ بكالوريا)' : '(147 Thanaweya + 134 Bac)'}</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border space-y-1 ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/60 border-slate-800/80'
          }`}>
            <span className={`text-[11px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'بنك المسائل المفحوصة' : 'Verified Problem Bank'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-black ${isLight ? 'text-emerald-200' : 'text-emerald-400'}`}>{isArabic ? toHindiDigits(56200) : '56,200'}</span>
              <span className={`text-[10px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? 'مسألة ثنائية اللغة' : 'Bilingual items'}</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border space-y-1 ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/60 border-slate-800/80'
          }`}>
            <span className={`text-[11px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'المواد والفروع الدراسية' : 'Curriculum Subjects & Branches'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-black ${isLight ? 'text-cyan-200' : 'text-cyan-400'}`}>{isArabic ? toHindiDigits(23) : '23'}</span>
              <span className={`text-[10px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? 'مادة (٢٦ فرعاً لكل مسار)' : 'Subjects (26 branches/track)'}</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border space-y-1 ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/60 border-slate-800/80'
          }`}>
            <span className={`text-[11px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'الجاهزية للجامعات والـ AI' : 'STEM & University Readiness'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-black ${isLight ? 'text-amber-200' : 'text-amber-400'}`}>99%</span>
              <span className={`text-[10px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? 'مطابقة المعايير الدولية' : 'International Accreditation'}</span>
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
                  {isArabic ? 'المنهج الوطني التاريخي المعتمد • ٢٠ مادة • ٢٣ فرعاً • ١٣٥ فصلاً' : 'National Standard Track • 20 Subjects • 23 Branches • 135 Chapters'}
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
              ? 'يتميز بالعمق التحليلي والشمول المعرفي في الرياضيات البحتة والتطبيقية، والعلوم الطبيعية، والإتقان اللغوي والأدبي، والدراسات الإنسانية، والاقتصاد والإحصاء التطبيقي، وعلوم الحاسب والذكاء الاصطناعي، وعلوم الأرض والفلك، والتربية الوطنية والدستور.'
              : 'Renowned for rigorous analytical depth across Pure & Applied Mathematics, Natural Sciences, comprehensive Language mastery, rich Humanities, Economics & Statistics, Computer Science & AI, Earth & Space Sciences, and National Civics & Constitution.'}
          </p>

          <div className={`space-y-2 pt-2 border-t text-xs ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'الرياضيات البحتة والتطبيقية: الجبر، التفاضل، الاستاتيكا، والديناميكا (١٩ فصلاً)' : 'Pure & Applied Mathematics: Algebra, Calculus, Statics, Dynamics (19 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'العلوم الطبيعية: الفيزياء، الكيمياء، الأحياء، والجيولوجيا والبيئة (٢٣ فصلاً)' : 'Natural Sciences: Physics, Chemistry, Biology, Geology & Environment (23 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'العلوم الإنسانية: التاريخ، الجغرافيا السياسية، الفلسفة، وعلم النفس والاجتماع (٢٩ فصلاً)' : 'Humanities: History, Geopolitics, Philosophy, Psychology & Sociology (29 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'اللغات: اللغة العربية، اللغة الإنجليزية، الفرنسية، الألمانية، الإيطالية، والإسبانية (٢٦ فصلاً)' : 'Languages: Arabic, English, French, German, Italian, and Spanish (26 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'العلوم التطبيقية والإحصاء: الاقتصاد الكلي والإحصاء التطبيقي (١٠ فصول)' : 'Applied Sciences & Statistics: Macroeconomics & Applied Statistics (10 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'علوم الحاسب والذكاء الاصطناعي: الخوارزميات، قواعد البيانات، الشبكات، ونظم الذكاء الاصطناعي (١٠ فصول)' : 'Computer Science & AI: Algorithms, Databases, Networking & AI Systems (10 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'علوم الأرض والفلك: الميكانيكا السماوية، الفيزياء الفلكية، والاستشعار عن بعد (١٠ فصول)' : 'Earth & Space Sciences: Celestial Mechanics, Astrophysics & Remote Sensing (10 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{isArabic ? 'التربية الوطنية والدستور: القانون والدستور، الديمقراطية، الأحزاب، والمشاركة السياسية (٤ فصول)' : 'National Civics & Constitution: Law, Democracy, Political Parties & Elections (4 Ch)'}</span>
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
                  {isArabic ? 'البكالوريا المصرية الحديثة (EG-Baccalaureate)' : 'New Egyptian Baccalaureate (EG-Bac)'}
                </h3>
                <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isArabic ? 'معايير STEM والجامعات الدولية • ٢٠ مادة • ٢٣ فرعاً • ١٢٢ فصلاً مكثفاً' : 'International STEM & Humanities Track • 20 Subjects • 23 Branches • 122 Chapters'}
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
              ? 'مبني على معايير البكالوريا الدولية ومدارس المتفوقين. يدمج النمذجة الحاسوبية، التحليل البنيوي، نظم المعلومات الجغرافية، القياس النفسي واللسانيات، والتحليل الاقتصادي الكمي، وهندسة البرمجيات الموزعة، والفيزياء الفلكية الكوكبية، والفقه الدستوري المقارن.'
              : 'Engineered on international baccalaureate benchmarks. Integrates computational modeling, structural epistemology, GIS analytics, psychometrics, quantitative macroeconomics, distributed software engineering, planetary astrophysics, and comparative constitutional jurisprudence.'}
          </p>

          <div className={`space-y-2 pt-2 border-t text-xs ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'الرياضيات والتحليل: التحليل الحقيقي، الجبر المتقطع، الميكانيكا، والاحتمالات (٨ فصول)' : 'Advanced Mathematics: Analysis, Discrete Algebra, Mechanics, Probability (8 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'العلوم والتكنولوجيا: الفيزياء، الكيمياء، الأحياء، والجيوفيزياء وهندسة الأرض (٢١ فصلاً)' : 'Science & Tech: Physics, Chemistry, Molecular Biology, Geophysics (21 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'العلوم الإنسانية والاجتماعية: النقد التاريخي، التحليل الجيوسياسي، المنطق الرمزي، والعلوم المعرفية (٢٩ فصلاً)' : 'Humanities & Social Sciences: Historiography, Geopolitics, Symbolic Logic, Cognitive Psychology (29 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'اللسانيات واللغات: اللسانيات العربية، الخطاب الأكاديمي الإنجليزي، الفرنسية، الألمانية، الإيطالية، والإسبانية (٢٦ فصلاً)' : 'Linguistics & Languages: Arabic Linguistics, C1 Academic English, French Fluency, German DaF, Italian B1/B2, and Spanish B1/B2 (26 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'الاقتصاد التطبيقي والإحصاء: الاقتصاد الكلي الكمي والإحصاء التطبيقي (١٠ فصول)' : 'Applied Economics & Statistics: Quantitative Macroeconomics & Applied Statistics (10 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'المعلوماتية المتقدمة وهندسة البرمجيات: الهياكل البيانية، نمذجة البيانات، الحوسبة الموزعة، والتعلم العميق (١٠ فصول)' : 'Advanced Informatics & Software Engineering: Data Structures, Data Modeling, Distributed Systems & Deep Learning (10 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'الفيزياء الفلكية ونظم الفضاء: الملاحة الفضائية، علم الكواكب، والاستشعار الفضائي (١٠ فصول)' : 'Astrophysics & Space Systems: Astrodynamics, Planetary Sciences & Remote Sensing (10 Ch)'}</span>
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isArabic ? 'القانون الدستوري المقارن والحوكمة: الرقابة الدستورية، النزاهة، والهندسة الانتخابية (٤ فصول)' : 'Comparative Constitutional Law & Governance: Judicial Review, Institutional Integrity & Electoral Systems (4 Ch)'}</span>
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

          {/* Domain Bridge Dropdown Selector */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className={`text-xs font-bold whitespace-nowrap ${
              isLight ? 'text-slate-700' : 'text-slate-400'
            }`}>
              {isArabic ? 'المجال المقارن:' : 'Compared Domain:'}
            </span>
            <div className="relative min-w-[240px] sm:min-w-[300px]">
              <select
                value={activeBridgeIndex}
                onChange={(e) => setActiveBridgeIndex(Number(e.target.value))}
                className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                  isContrast
                    ? 'bg-black text-white border-yellow-400'
                    : isLight
                    ? 'bg-white border-slate-300 text-slate-800'
                    : 'bg-slate-900 border-slate-700 text-slate-200'
                }`}
              >
                {bridges.map((b, idx) => (
                  <option key={b.id} value={idx} className="bg-slate-900 text-white">
                    {isArabic ? b.titleAr : b.titleEn}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
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
