import React, { useState } from 'react';
import type { CurriculumType, ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { toHindiDigits } from '../utils/arabicNumerals';
import {
  GitCompare,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Award,
  GraduationCap,
  Sparkles,
  Zap,
  Layers,
  Compass,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Calculator,
  Binary,
  Microscope,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme: ThemeMode;
  onNavigateTrack: (track: CurriculumType, branchId?: string) => void;
}

interface BranchBridge {
  id: string;
  titleEn: string;
  titleAr: string;
  icon: React.ReactNode;
  thanaweyaBranchId: string;
  egBacBranchId: string;
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

export const CurriculumEquivalency: React.FC<Props> = ({ lang, onNavigateTrack }) => {
  const isArabic = lang === 'ar';
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
        'الاشتقاق البارامتري والضمني والمعدلات الزمنية المرتبطة',
        'النهايات المرتبطة بالعدد النيبيري e والدوال اللوغاريتمية',
        'تطبيقات التفاضل: القيم العظمى والصغرى ورسم المنحنيات',
        'التكامل المحدد وغير المحدد وحساب حجوم الأجسام الدورانية',
      ],
      egBacTitleEn: 'Advanced Mathematical Analysis (2 Intensive Chapters)',
      egBacTitleAr: 'التحليل الرياضي المتقدم للبكالوريا (فصلان مكثفان)',
      egBacTopicsEn: [
        'Rigorous limit proofs & foundational real analysis',
        'Taylor & Maclaurin polynomial series approximations',
        'First & second-order ordinary differential equations (ODE)',
        'Multivariable functions & introduction to partial derivatives',
        'Numerical integration methods (Trapezoidal & Simpson’s rule)',
      ],
      egBacTopicsAr: [
        'البراهين التحليلية الدقيقة للنهايات وأسس التحليل الحقيقي',
        'متسلسلات تايلور وماكلوران والتقريب بالمتعددات الحدودية',
        'المعادلات التفاضلية العادية من الرتبة الأولى والثانية وتطبيقاتها',
        'الدوال في عدة متغيرات ومقدمة المشتقات الجزئية ومستويات المماس',
        'طرق التكامل العددي والتقريب الحسابي (شبه المنحرف وسيمبسون)',
      ],
      bridgeInsightEn:
        'While Thanaweya Amma focuses on masterful symbolic manipulation and geometric curve properties, the EG-Bac curriculum bridges directly to university engineering by incorporating Taylor approximations, numerical quadrature, and differential equation modeling.',
      bridgeInsightAr:
        'بينما تركز الثانوية العامة على المهارة الجبرية الفائقة في الاشتقاق والخواص الهندسية للمنحنيات، يقفز منهج البكالوريا بالطلاب إلى المستوى الجامعي بإدخال متسلسلات تايلور ونمذجة المعادلات التفاضلية وطرق التقريب العددي.',
      universityAdvantageEn: 'Direct readiness for Engineering Calculus I & II, Numerical Methods, and Differential Equations.',
      universityAdvantageAr: 'جاهزية مباشرة لكليات الهندسة في مقررات التفاضل الجامعي والتحليل العددي والمعادلات التفاضلية.',
    },
    {
      id: 'algebra_geometry',
      titleEn: 'Linear Algebra & 3D Spatial Geometry',
      titleAr: 'الجبر الخطي والهندسة الفراغية ثلاثية الأبعاد',
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      thanaweyaBranchId: 'algebra_solid',
      egBacBranchId: 'egbac_vectors_geometry',
      thanaweyaTitleEn: 'Algebra & Solid Geometry (5 Chapters)',
      thanaweyaTitleAr: 'الجبر والهندسة الفراغية للثانوية العامة (٥ فصول)',
      thanaweyaTopicsEn: [
        'Counting principle, permutations & combinations',
        'Binomial theorem with fractional & negative indices',
        'Complex numbers: Argand diagram & De Moivre’s theorem',
        'Matrices, determinants & Gaussian elimination rank',
        'Cartesian coordinates, lines & planes in 3D space',
      ],
      thanaweyaTopicsAr: [
        'مبدأ العد والتباديل والتوافيق وخواصها',
        'نظرية ذات الحدين ومفكوك الأسس الصحيحة',
        'الأعداد المركبة: الصورة المثلثية والأسية ونظرية ديموافر والجذور التكعيبية للواحد',
        'المحددات والمصفوفات ومعكوس المصفوفة ورتبة المصفوفة وحل النظم الخطية',
        'الهندسة الفراغية: معادلات المستقيم والمستوى والكرة والزوايا في الفراغ',
      ],
      egBacTitleEn: 'Discrete Algebra & Modern Vector Geometry (2 Intensive Chapters)',
      egBacTitleAr: 'الجبر المتقطع وهندسة المتجهات الحديثة (فصلان مكثفان)',
      egBacTopicsEn: [
        'Vector spaces, basis, dimension & linear independence',
        'Matrix transformations, eigenvalues & eigenvectors',
        '3D vector fields, gradient & directional derivatives',
        'Quadric surfaces (ellipsoids, paraboloids, hyperboloids)',
        'Parametric space curves, curvature & torsion',
      ],
      egBacTopicsAr: [
        'الفضاءات الاتجاهية والاستقلال الخطي والأساس والأبعاد',
        'التحويلات الخطية والقيم الذاتية والمتجهات الذاتية (Eigenvalues)',
        'مجالات المتجهات في الفراغ وتدرج الدالة والمشتقات الاتجاهية',
        'السطوح التربيعية ثلاثية الأبعاد (المجسم الإهليلجي والمكافئ والزائدي)',
        'المنحنيات الفراغية البارامترية والانحناء والالتواء الفراغي',
      ],
      bridgeInsightEn:
        'Thanaweya provides an unyielding bedrock in determinants, 3D line equations, and De Moivre roots. The EG-Bac track translates this into modern computational linear algebra—vital for Artificial Intelligence, 3D Computer Graphics, and Robotics.',
      bridgeInsightAr:
        'تمنح الثانوية العامة أساساً متيناً لا غنى عنه في المحددات ومعادلات المستقيم والمستوى وجذور ديموافر، بينما يحولها مسار البكالوريا إلى جبر خطي حديث للمتجهات الذاتية وتحويلات الفضاء، وهو الأساس المباشر للذكاء الاصطناعي والجرافيكس ثلاثي الأبعاد والروبوتات.',
      universityAdvantageEn: 'Direct readiness for College Linear Algebra, Computer Graphics, Machine Learning math, and Robotics.',
      universityAdvantageAr: 'جاهزية تامة لكليات الحاسبات والمعلومات والذكاء الاصطناعي ومقررات الجبر الخطي المتقدم والرسم الحاسوبي.',
    },
    {
      id: 'mechanics_kinetics',
      titleEn: 'Applied Mechanics & Vector Dynamics',
      titleAr: 'الميكانيكا التطبيقية والتحريك الاتجاهي',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      thanaweyaBranchId: 'statics',
      egBacBranchId: 'egbac_mechanics',
      thanaweyaTitleEn: 'Statics & Dynamics (10 Chapters)',
      thanaweyaTitleAr: 'الاستاتيكا والديناميكا للثانوية العامة (١٠ فصول)',
      thanaweyaTopicsEn: [
        'Static friction & inclined plane equilibrium',
        'Parallel forces, moments in 2D and 3D',
        'General equilibrium of rigid bodies & couples',
        'Center of gravity & suspended lamina',
        'Newton’s laws of motion, pulleys & connected bodies',
        'Momentum, impulse, work, kinetic & potential energy',
      ],
      thanaweyaTopicsAr: [
        'احتكاك الأجسام على المستويات الأفقية والمائلة',
        'عزوم القوى في المستوى والفراغ والقوى المتوازية',
        'الاتزان العام للجسم الجاسئ والازدواجات وتكافؤها',
        'مركز الثقل وطريقة الكتل السالبة والتعليق الحر',
        'قوانين نيوتن للحركة وتطبيقات البكرات والمستويات الملساء والخشنة',
        'كمية الحركة والدفع والشغل وطاقة الحركة وطاقة الوضع والقدرة',
      ],
      egBacTitleEn: 'Analytical Mechanics & Vector Kinetics (2 Intensive Chapters)',
      egBacTitleAr: 'الميكانيكا التحليلية وكينتيكا المتجهات (فصلان مكثفان)',
      egBacTopicsEn: [
        'Curvilinear kinematics in cylindrical & polar coordinates',
        'Conservative vector force fields & potential energy functions',
        'Rotational dynamics & moment of inertia tensors',
        'Damped and driven harmonic oscillations',
        'Energy conservation in constrained multidimensional systems',
      ],
      egBacTopicsAr: [
        'الحركة المنحنية في الإحداثيات القطبية والأسطوانية والذاتية',
        'مجالات القوى المحافظة ودوال الجهد وطاقة الوضع التدرجية',
        'ديناميكا الدوران وموتر عزم القصور الذاتي للأجسام المركبة',
        'الاهتزازات التوافقية المخمدة والقسرية وحالات الرنين',
        'حفظ الطاقة والميكانيكا التحليلية في الأنظمة المقيدة متسعة الأبعاد',
      ],
      bridgeInsightEn:
        'Thanaweya’s legendary 10-chapter mechanics sequence builds unparalleled endurance in resolving physical free-body diagrams. EG-Bac builds atop this foundation by formalizing vector fields, polar orbital mechanics, and harmonic oscillatory resonance.',
      bridgeInsightAr:
        'تعد سلسلة الميكانيكا المكونة من ١٠ فصول في الثانوية العامة مدرسة عريقة لبناء قدرة لا نظير لها على رسم مخططات الجسم الحر وحل المسائل الهندسية المعقدة، ويطورها مسار البكالوريا إلى صياغة متجهات حقول القوى وديناميكا المدارات والاهتزازات التوافقية.',
      universityAdvantageEn: 'Direct readiness for Mechanical, Civil, Aerospace Engineering Statics & Dynamics courses.',
      universityAdvantageAr: 'جاهزية قصوى لأقسام الهندسة الميكانيكية، المدنية، الطيران والفضاء، وهندسة السيارات.',
    },
    {
      id: 'probability_statistics',
      titleEn: 'Probability & Data Statistics',
      titleAr: 'الاحتمالات والإحصاء التطبيقي للبيانات',
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
  ];

  const activeBridge = bridges[activeBridgeIndex];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/60 text-indigo-300 text-xs font-bold">
            <GitCompare className="w-3.5 h-3.5" />
            <span>
              {isArabic ? 'المرجع المقارن لمعايير وزارة التربية والتعليم' : 'Official Ministry Curriculum Bridge'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
            {isArabic ? 'مقارنة المسارات والجسور المعرفية بين الثانوية العامة والبكالوريا' : 'Egyptian Secondary Tracks Comparison & Topic Bridges'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isArabic
              ? 'دليل استراتيجي يوضح التكافؤ العلمي، النقلة البيداغوجية، والجاهزية الجامعية بين مسار الثانوية العامة العريق ومسار البكالوريا المصرية الحديث لمدارس المتفوقين والعلوم والتكنولوجيا (STEM).'
              : 'A strategic cross-track comparison mapping theoretical parity, pedagogical evolution, and university engineering readiness between the classical Egyptian General Secondary and the modern Egyptian Baccalaureate STEM framework.'}
          </p>
        </div>

        {/* Global Stats Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800/80">
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <span className="text-[11px] font-semibold text-slate-400 block">
              {isArabic ? 'إجمالي الفصول المعتمدة' : 'Total Official Chapters'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-indigo-400">{isArabic ? toHindiDigits(27) : '27'}</span>
              <span className="text-[10px] text-slate-500">{isArabic ? '(١٩ ثانوية + ٨ بكالوريا)' : '(19 Thanaweya + 8 Bac)'}</span>
            </div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <span className="text-[11px] font-semibold text-slate-400 block">
              {isArabic ? 'بنك المسائل المفحوصة' : 'Verified Problem Bank'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-emerald-400">{isArabic ? toHindiDigits(4725) : '4,725'}</span>
              <span className="text-[10px] text-slate-500">{isArabic ? 'مسألة ثنائية اللغة' : 'Bilingual items'}</span>
            </div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <span className="text-[11px] font-semibold text-slate-400 block">
              {isArabic ? 'فروع الرياضيات' : 'Curriculum Branches'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-cyan-400">{isArabic ? toHindiDigits(8) : '8'}</span>
              <span className="text-[10px] text-slate-500">{isArabic ? '(٤ لكل مسار تعليمي)' : '(4 per track)'}</span>
            </div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <span className="text-[11px] font-semibold text-slate-400 block">
              {isArabic ? 'الجاهزية لجامعات الهندسة والـ AI' : 'STEM University Readiness'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-amber-400">98%</span>
              <span className="text-[10px] text-slate-500">{isArabic ? 'مطابقة المعايير الدولية' : 'International ABET'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Track Architectural Highlights (Side by Side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Track 1: Thanaweya Amma Card */}
        <div className="bg-slate-900/80 border border-indigo-950 rounded-2xl p-6 space-y-4 relative overflow-hidden group hover:border-indigo-800/80 transition-all shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100">
                  {isArabic ? 'الثانوية العامة المصرية (Thanaweya Amma)' : 'Egyptian General Secondary'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isArabic ? 'المنهج الوطني التاريخي المعتمد • ٤ فروع • ١٩ فصلاً' : 'National Standard Track • 4 Branches • 19 Chapters'}
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigateTrack('thanaweya')}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer bg-indigo-950/60 px-3 py-1.5 rounded-lg border border-indigo-800/60 hover:bg-indigo-900/60 transition-all"
            >
              <span>{isArabic ? 'تصفح المنهج' : 'Explore'}</span>
              {isArabic ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {isArabic
              ? 'يتميز بالعمق الرياضي التحليلي والمهارة اليدوية الفائقة في فك التباديل والتوافيق، حساب النهايات الدقيقة، حل منظومات القوى الميكانيكية المعقدة، والتحليل الهندسي ثلاثي الأبعاد.'
              : 'Renowned for rigorous analytical algebra, deep symbolic calculus manipulation, extensive classical mechanics equilibrium, and classical 3D coordinate geometry.'}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{isArabic ? 'الرياضيات البحتة: الجبر والهندسة الفراغية (٥ فصول)' : 'Pure Mathematics: Algebra & Solid Geometry (5 Ch)'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{isArabic ? 'الرياضيات البحتة: التفاضل والتكامل (٤ فصول)' : 'Pure Mathematics: Calculus & Integration (4 Ch)'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{isArabic ? 'الرياضيات التطبيقية: الاستاتيكا (٦ فصول)' : 'Applied Mathematics: Statics (6 Ch)'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{isArabic ? 'الرياضيات التطبيقية: الديناميكا (٤ فصول)' : 'Applied Mathematics: Dynamics (4 Ch)'}</span>
            </div>
          </div>
        </div>

        {/* Track 2: EG-Bac STEM Card */}
        <div className="bg-slate-900/80 border border-teal-950 rounded-2xl p-6 space-y-4 relative overflow-hidden group hover:border-teal-800/80 transition-all shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-teal-600/20 text-teal-400 border border-teal-500/30">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100">
                  {isArabic ? 'البكالوريا المصرية الحديثة (EG-Bac STEM)' : 'New Egyptian Baccalaureate (STEM)'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isArabic ? 'معايير STEM والجامعات الدولية • ٤ فروع • ٨ فصول مكثفة' : 'International STEM Track • 4 Branches • 8 Intensive Chapters'}
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigateTrack('egbac')}
              className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer bg-teal-950/60 px-3 py-1.5 rounded-lg border border-teal-800/60 hover:bg-teal-900/60 transition-all"
            >
              <span>{isArabic ? 'تصفح المنهج' : 'Explore'}</span>
              {isArabic ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {isArabic
              ? 'مبني على معايير البكالوريا الدولية ومدارس المتفوقين. يدمج المصفوفات الذاتية، متسلسلات تايلور، التحليل العددي، ميكانيكا الحقول الاتجاهية، والإحصاء الحيوي البايزي.'
              : 'Engineered on international baccalaureate benchmarks. Synthesizes computational linear algebra, Taylor expansions, vector mechanics, and calculus-grounded continuous probability.'}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{isArabic ? 'التحليل الرياضي والتفاضل والتكامل المتقدم (فصلان)' : 'Mathematical Analysis & Advanced Calculus (2 Ch)'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{isArabic ? 'الجبر المتقطع وهندسة المتجهات الفضائية (فصلان)' : 'Discrete Algebra & Spatial Vector Geometry (2 Ch)'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{isArabic ? 'الميكانيكا التحليلية وكينتيكا الأجسام (فصلان)' : 'Analytical Mechanics & Body Kinetics (2 Ch)'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{isArabic ? 'الاحتمالات المتقدمة والإحصاء الحيوي للبيانات (فصلان)' : 'Applied Probability & Biostatistics (2 Ch)'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Branch Bridge Tabs */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-100">
                {isArabic ? 'الجسور المعرفية التخصصية بين الفرعين' : 'Disciplinary Cross-Track Bridges'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isArabic
                  ? 'اختر الفرع لمشاهدة المقارنة المباشرة، المفاهيم المشتركة، والنقلة النوعية للتعليم الجامعي'
                  : 'Select a mathematical domain to examine thematic mapping and pedagogical bridges'}
              </p>
            </div>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 bg-slate-950 rounded-2xl border border-slate-800 no-scrollbar">
            {bridges.map((b, idx) => {
              const isSelected = idx === activeBridgeIndex;
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveBridgeIndex(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
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
          <div className="bg-slate-950/70 border border-indigo-900/50 rounded-2xl p-5 sm:p-6 space-y-4 relative">
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <h4 className="text-sm font-black text-indigo-300">
                  {isArabic ? activeBridge.thanaweyaTitleAr : activeBridge.thanaweyaTitleEn}
                </h4>
              </div>
              <button
                onClick={() => onNavigateTrack('thanaweya', activeBridge.thanaweyaBranchId)}
                className="text-[11px] font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-800/60 transition-all"
              >
                <span>{isArabic ? 'فتح في الثانوية' : 'Open in Thanaweya'}</span>
                {isArabic ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </button>
            </div>

            <p className="text-xs text-slate-400 font-semibold">
              {isArabic ? 'المحاور الأساسية في امتحانات الوزارة الرسمية:' : 'Core Topics & Official Examination Scope:'}
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              {(isArabic ? activeBridge.thanaweyaTopicsAr : activeBridge.thanaweyaTopicsEn).map((topic, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                  <span className="w-5 h-5 rounded-full bg-indigo-950 text-indigo-400 font-mono font-bold flex items-center justify-center shrink-0 text-[10px] border border-indigo-800">
                    {isArabic ? toHindiDigits(i + 1) : i + 1}
                  </span>
                  <span className="leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* EG-Bac Side */}
          <div className="bg-slate-950/70 border border-teal-900/50 rounded-2xl p-5 sm:p-6 space-y-4 relative">
            <div className="flex items-center justify-between border-b border-teal-900/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                <h4 className="text-sm font-black text-teal-300">
                  {isArabic ? activeBridge.egBacTitleAr : activeBridge.egBacTitleEn}
                </h4>
              </div>
              <button
                onClick={() => onNavigateTrack('egbac', activeBridge.egBacBranchId)}
                className="text-[11px] font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer bg-teal-950/60 px-2.5 py-1 rounded-lg border border-teal-800/60 transition-all"
              >
                <span>{isArabic ? 'فتح في البكالوريا' : 'Open in EG-Bac'}</span>
                {isArabic ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </button>
            </div>

            <p className="text-xs text-slate-400 font-semibold">
              {isArabic ? 'المحاور المتقدمة لمدارس المتفوقين STEM والجامعات:' : 'Advanced STEM & Modern Engineering Scope:'}
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              {(isArabic ? activeBridge.egBacTopicsAr : activeBridge.egBacTopicsEn).map((topic, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                  <span className="w-5 h-5 rounded-full bg-teal-950 text-teal-400 font-mono font-bold flex items-center justify-center shrink-0 text-[10px] border border-teal-800">
                    {isArabic ? toHindiDigits(i + 1) : i + 1}
                  </span>
                  <span className="leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pedagogical Synthesis & University Advantage Card */}
        <div className="bg-gradient-to-r from-indigo-950/40 via-slate-950 to-teal-950/40 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h4 className="text-sm font-bold text-slate-200">
              {isArabic ? 'الرؤية البيداغوجية والتكامل العلمي' : 'Pedagogical Synthesis & Academic Trajectory'}
            </h4>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {isArabic ? activeBridge.bridgeInsightAr : activeBridge.bridgeInsightEn}
          </p>

          <div className="flex items-center gap-3 pt-2 text-xs text-emerald-400 font-semibold bg-emerald-950/30 p-3 rounded-xl border border-emerald-900/40">
            <GraduationCap className="w-5 h-5 shrink-0 text-emerald-400" />
            <span>{isArabic ? activeBridge.universityAdvantageAr : activeBridge.universityAdvantageEn}</span>
          </div>
        </div>
      </div>

      {/* University Faculty Readiness Matrix */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-100">
              {isArabic ? 'مصفوفة التوافق مع كليات القمة الجامعية' : 'Egyptian & International University Faculty Readiness Matrix'}
            </h3>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'نسب الجاهزية الأكاديمية لخريجي كلا المسارين في السنة الإعدادية والأولى للجامعات'
                : 'Comparative readiness percentage for first-year undergraduate university curricula'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <h5 className="text-xs font-bold text-slate-200">{isArabic ? 'كليات الهندسة' : 'Faculty of Engineering'}</h5>
            </div>
            <p className="text-[11px] text-slate-400">
              {isArabic ? 'الميكانيكا، التفاضل، والجبر الخطي' : 'Mechanics, Calculus & Linear Algebra'}
            </p>
            <div className="space-y-1 pt-1 text-xs">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>{isArabic ? 'الثانوية العامة' : 'Thanaweya'}</span>
                <span className="font-bold text-indigo-400">92%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: '92%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-300 pt-1">
                <span>{isArabic ? 'البكالوريا المصرية' : 'EG-Bac STEM'}</span>
                <span className="font-bold text-teal-400">98%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-400 h-full rounded-full" style={{ width: '98%' }} />
              </div>
            </div>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <Binary className="w-4 h-4 text-cyan-400" />
              <h5 className="text-xs font-bold text-slate-200">{isArabic ? 'الحاسبات والذكاء الاصطناعي' : 'Computer Science & AI'}</h5>
            </div>
            <p className="text-[11px] text-slate-400">
              {isArabic ? 'الجبر المتقطع، المصفوفات، والاحتمالات' : 'Discrete Math, Matrices & Probability'}
            </p>
            <div className="space-y-1 pt-1 text-xs">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>{isArabic ? 'الثانوية العامة' : 'Thanaweya'}</span>
                <span className="font-bold text-indigo-400">78%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: '78%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-300 pt-1">
                <span>{isArabic ? 'البكالوريا المصرية' : 'EG-Bac STEM'}</span>
                <span className="font-bold text-teal-400">97%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-400 h-full rounded-full" style={{ width: '97%' }} />
              </div>
            </div>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-400" />
              <h5 className="text-xs font-bold text-slate-200">{isArabic ? 'العلوم والرياضيات البحتة' : 'Science & Mathematics'}</h5>
            </div>
            <p className="text-[11px] text-slate-400">
              {isArabic ? 'التحليل الرياضي، الفضاءات، والمعادلات التفاضلية' : 'Real Analysis, Vector Spaces & ODE'}
            </p>
            <div className="space-y-1 pt-1 text-xs">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>{isArabic ? 'الثانوية العامة' : 'Thanaweya'}</span>
                <span className="font-bold text-indigo-400">90%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: '90%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-300 pt-1">
                <span>{isArabic ? 'البكالوريا المصرية' : 'EG-Bac STEM'}</span>
                <span className="font-bold text-teal-400">96%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-400 h-full rounded-full" style={{ width: '96%' }} />
              </div>
            </div>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <Microscope className="w-4 h-4 text-emerald-400" />
              <h5 className="text-xs font-bold text-slate-200">{isArabic ? 'الطب الحيوي والصيدلة' : 'Biomedicine & Pharmacy'}</h5>
            </div>
            <p className="text-[11px] text-slate-400">
              {isArabic ? 'الإحصاء الحيوي، التوزيعات، والنمذجة' : 'Biostatistics, Distributions & Modeling'}
            </p>
            <div className="space-y-1 pt-1 text-xs">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>{isArabic ? 'الثانوية العامة' : 'Thanaweya'}</span>
                <span className="font-bold text-indigo-400">70%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: '70%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-300 pt-1">
                <span>{isArabic ? 'البكالوريا المصرية' : 'EG-Bac STEM'}</span>
                <span className="font-bold text-teal-400">93%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-400 h-full rounded-full" style={{ width: '93%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
