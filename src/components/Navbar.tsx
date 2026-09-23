import React, { useState, useRef, useEffect } from 'react';
import type { Curriculum, CurriculumType, ThemeMode, FontSizeMode } from '../types/curriculum';
import type { Language, UserRole } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { Globe, UserCheck, BookOpen, Sun, Moon, Zap, Type, Calculator, Download, ExternalLink, Edit3, Compass, ChevronDown, Check, Award, ShieldCheck, Languages, Headphones, Sliders, Scale, Lightbulb, Database, PenTool, FlaskConical, ClipboardList, FileSpreadsheet, BarChart3, BookmarkCheck, Users, HardDrive, GraduationCap, MessageSquare, HeartHandshake, BarChart2, BrainCircuit, Printer } from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';
import { EgyptFlag } from './EgyptFlag';
import { SubjectSelector } from './SubjectSelector';
import { CurriculumSelector } from './CurriculumSelector';
import { toHindiDigits } from '../utils/arabicNumerals';

interface Props {
  lang: Language;
  onLanguageToggle: () => void;
  role: UserRole;
  onRoleToggle: () => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  fontSize: FontSizeMode;
  onFontSizeChange: (size: FontSizeMode) => void;
  curriculum: CurriculumType;
  onCurriculumChange: (curr: CurriculumType) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenFormulaHandbook?: () => void;
  onOpenDesmos?: () => void;
  onOpenOfficialBooks?: () => void;
  onOpenMathScratchpad?: () => void;
  onOpenTutorial?: () => void;
  onOpenPastPapers?: () => void;
  onOpenCertificateVerification?: () => void;
  onOpenEnglishDictionary?: () => void;
  onOpenEnglishAudioLab?: () => void;
  onOpenFrenchListening?: () => void;
  onOpenArabicGrammar?: () => void;
  onOpenAccessibility?: () => void;
  onOpenExamSimulation?: () => void;
  onOpenDiagnosticDrill?: () => void;
  onOpenTeacherAssignments?: () => void;
  onOpenTeacherCertification?: () => void;
  onOpenParentReport?: () => void;
  onOpenDownloadManager?: () => void;
  onOpenMinistryResults?: () => void;
  onOpenGovernorateAnalytics?: () => void;
  onOpenEducationalSponsorship?: () => void;
  onOpenLearningOutcomes?: () => void;
  onOpenDailyPrescription?: () => void;
  onOpenSchoolOutreach?: () => void;
  selectedSubject?: string;
  onSubjectChange?: (subjectId: string) => void;
  curriculumData?: Curriculum;
}

export const Navbar: React.FC<Props> = ({
  lang,
  onLanguageToggle,
  role,
  onRoleToggle,
  theme,
  onThemeChange,
  fontSize,
  onFontSizeChange,
  curriculum,
  onCurriculumChange,
  activeTab,
  onTabChange,
  onOpenFormulaHandbook,
  onOpenDesmos,
  onOpenOfficialBooks,
  onOpenMathScratchpad,
  onOpenTutorial,
  onOpenPastPapers,
  onOpenCertificateVerification,
  onOpenEnglishDictionary,
  onOpenEnglishAudioLab,
  onOpenFrenchListening,
  onOpenArabicGrammar,
  onOpenAccessibility,
  onOpenExamSimulation,
  onOpenDiagnosticDrill,
  onOpenTeacherAssignments,
  onOpenTeacherCertification,
  onOpenParentReport,
  onOpenDownloadManager,
  onOpenMinistryResults,
  onOpenGovernorateAnalytics,
  onOpenEducationalSponsorship,
  onOpenLearningOutcomes,
  onOpenDailyPrescription,
  onOpenSchoolOutreach,
  selectedSubject = 'all',
  onSubjectChange,
  curriculumData,
}) => {
  const t = translations[lang];
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isHighContrast = theme === 'high-contrast';

  const isLargeOrXLarge = fontSize === 'large' || fontSize === 'xlarge';

  // Dropdown menus state
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isFontOpen, setIsFontOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isTabMenuOpen, setIsTabMenuOpen] = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);
  const fontRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const tabMenuRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const activeTabBtnRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll active tab into view in the horizontal ribbon
  useEffect(() => {
    if (activeTabBtnRef.current) {
      activeTabBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeTab]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (themeRef.current && !themeRef.current.contains(target)) {
        setIsThemeOpen(false);
      }
      if (fontRef.current && !fontRef.current.contains(target)) {
        setIsFontOpen(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(target)) {
        setIsToolsOpen(false);
      }
      if (tabMenuRef.current && !tabMenuRef.current.contains(target)) {
        setIsTabMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsThemeOpen(false);
        setIsFontOpen(false);
        setIsToolsOpen(false);
        setIsTabMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navTabs = [
    { id: 'overview', label: t.overviewTab, Icon: Compass, descAr: 'خريطة المنهاج والوحدات', descEn: 'Curriculum map & units' },
    { id: 'equivalency', label: t.equivalencyTab, Icon: Scale, descAr: 'المعادلة بين الثانوية والبكالوريا', descEn: 'Track equivalency & alignment' },
    { id: 'theory', label: t.theoryTab, Icon: BookOpen, descAr: 'الشرح والملخصات والقوانين', descEn: 'Theory, notes & formulas' },
    { id: 'solvedExamples', label: t.solvedExamplesTab, Icon: Lightbulb, descAr: 'المسائل المحلولة نموذجياً', descEn: 'Step-by-step solved models' },
    { id: 'exerciseProblems', label: t.exerciseProblemsTab, Icon: BookmarkCheck, descAr: 'تمارين وتطبيقات تدريبية', descEn: 'Exercise practice sets' },
    { id: 'databank', label: t.databankTab, Icon: Database, descAr: 'بنك الأسئلة والمسائل المصنفة', descEn: 'Classified question bank' },
    { id: 'worksheet', label: t.worksheetTab, Icon: PenTool, descAr: 'أوراق عمل قابلة للطباعة', descEn: 'Printable student worksheets' },
    { id: 'interactive', label: t.interactiveTab, Icon: FlaskConical, descAr: 'مختبرات محاكاة 2D/3D', descEn: 'Interactive simulations & labs' },
    { id: 'lessonPlan', label: t.lessonPlanTab, Icon: ClipboardList, descAr: 'دليل المعلم والتحضير الصفي', descEn: 'Teacher lesson plans & guides' },
    { id: 'testGenerator', label: t.testGeneratorTab, Icon: FileSpreadsheet, descAr: 'توليد امتحانات إلكترونية وPDF', descEn: 'Custom mock exam generator' },
    { id: 'analytics', label: t.analyticsTab, Icon: BarChart3, descAr: 'رادار تشخيص الجاهزية ونقاط القوة والضعف', descEn: 'Student readiness radar & chapter proficiency' },
  ];

  const activeTabObj = navTabs.find((tab) => tab.id === activeTab) || navTabs[0];

  const quickTools = [
    onOpenPastPapers && {
      id: 'past-papers',
      label: isArabic ? 'امتحانات الوزارة الرسمية (٢٠٢١ - ٢٠٢٥)' : 'Official MoE Past Papers (2021-2025)',
      desc: isArabic ? 'نماذج الامتحانات الأصلية مع رتبة الجمهورية والدرجة المعيارية' : 'Authentic ministerial papers & cohort percentiles',
      shortcut: '⌘O',
      icon: Award,
      color: 'text-amber-400',
      onClick: () => {
        onOpenPastPapers();
        setIsToolsOpen(false);
      },
    },
    onOpenCertificateVerification && {
      id: 'certificate-verification',
      label: isArabic ? 'بوابة التحقق الرقمي من الشهادات' : 'Official Certificate Verification Portal',
      desc: isArabic ? 'فحص صحة واعتماد شهادات وبيانات درجات الثانوية العامة' : 'Verify authenticity of official performance certificates',
      shortcut: '⌘⇧V',
      icon: ShieldCheck,
      color: 'text-amber-400',
      onClick: () => {
        onOpenCertificateVerification();
        setIsToolsOpen(false);
      },
    },
    onOpenExamSimulation && {
      id: 'exam_simulation',
      label: isArabic ? 'قاعة محاكاة الامتحان الوزاري (٣ ساعات وبابل شيت)' : 'Ministerial Exam Simulation Room (3-Hour)',
      desc: isArabic ? 'محاكاة كاملة لظروف اللجنة الوزارية الرسمية وتنبيهات المراقب وبابل شيت OMR' : 'Authentic 3-hour exam hall with proctor alerts & OMR bubble sheet',
      shortcut: '⌥E',
      icon: ShieldCheck,
      color: 'text-rose-400',
      onClick: () => {
        onOpenExamSimulation();
        setIsToolsOpen(false);
      },
    },
    onOpenDiagnosticDrill && {
      id: 'diagnostic_drill',
      label: isArabic ? 'تدريب المسح التشخيصي السريع (١٠ دقائق)' : 'Rapid Diagnostic Sprint Drill (10-Min)',
      desc: isArabic ? 'تدريب ذكي سريع من ١٠ أسئلة لقياس معدل السرعة والدقة وتشخيص نقاط الضعف' : 'Rapid 10-question sprint drill measuring pacing, accuracy & learning gaps',
      shortcut: '⌥S',
      icon: Zap,
      color: 'text-emerald-400',
      onClick: () => {
        onOpenDiagnosticDrill();
        setIsToolsOpen(false);
      },
    },
    onOpenEnglishDictionary && {
      id: 'dictionary',
      label: isArabic ? 'قاموس اللغة الإنجليزية الأكاديمي' : 'English Academic Dictionary',
      desc: isArabic ? 'معجم شامل بمفردات ومصطلحات الثانوية والبكالوريا ونطق صوتي' : 'Comprehensive Secondary 3 vocabulary, collocations & IPA audio',
      shortcut: '⌥D',
      icon: Languages,
      color: 'text-violet-400',
      onClick: () => {
        onOpenEnglishDictionary();
        setIsToolsOpen(false);
      },
    },
    onOpenEnglishAudioLab && {
      id: 'audio_lab',
      label: isArabic ? 'معمل الصوتيات والنطق الإنجليزي' : 'English Audio & Phonetics Lab',
      desc: isArabic ? 'معمل تفاعلي للأصوات (44 IPA) ونبر المقاطع والاستماع والتقييم الصوتي' : 'Interactive 44-IPA soundboard, syllable stress & voice tester',
      shortcut: '⌥P',
      icon: Headphones,
      color: 'text-indigo-400',
      onClick: () => {
        onOpenEnglishAudioLab();
        setIsToolsOpen(false);
      },
    },
    onOpenFrenchListening && {
      id: 'french_listening',
      label: isArabic ? 'معمل الاستماع والصوتيات الفرنسية' : 'French Audio & Listening Studio',
      desc: isArabic ? 'استوديو تفاعلي للأصوات الأنفية وحروف الوصل وامتحانات الاستماع الوزارية' : 'Interactive Francophone pronunciation, nasal vowels & listening tracks',
      shortcut: '⌥F',
      icon: Headphones,
      color: 'text-sky-400',
      onClick: () => {
        onOpenFrenchListening();
        setIsToolsOpen(false);
      },
    },
    onOpenArabicGrammar && {
      id: 'arabic_grammar',
      label: isArabic ? 'معمل النحو والإعراب والبلاغة' : 'Arabic Grammar & Rhetoric Studio',
      desc: isArabic ? 'استوديو تفاعلي للإعراب، ميزان المشتقات، وأسرار البلاغة وأفخاخ الثانوية العامة' : 'Interactive Arabic I\'rab token parser, derivatives & rhetorical figures lab',
      shortcut: '⌥A',
      icon: BookOpen,
      color: 'text-amber-400',
      onClick: () => {
        onOpenArabicGrammar();
        setIsToolsOpen(false);
      },
    },
    onOpenAccessibility && {
      id: 'accessibility',
      label: isArabic ? 'إعدادات الوصول الشامل والمعايرة' : 'Universal Accessibility & Visual Settings',
      desc: isArabic ? 'تخصيص حجم الخط وتكبير المعادلات وتقليل الحركة' : 'Font size, KaTeX magnification & high contrast calibration',
      shortcut: '⌥U',
      icon: Sliders,
      color: 'text-cyan-400',
      onClick: () => {
        onOpenAccessibility();
        setIsToolsOpen(false);
      },
    },
    onOpenFormulaHandbook && {
      id: 'formulas',
      label: isArabic ? 'دستور القوانين والمعادلات' : 'Formula Sheet Handbook',
      desc: isArabic ? 'مرجع شامل لجميع قوانين الثانوية والبكالوريا' : 'Comprehensive formula reference',
      shortcut: '⌘J',
      icon: BookOpen,
      color: 'text-emerald-400',
      onClick: () => {
        onOpenFormulaHandbook();
        setIsToolsOpen(false);
      },
    },
    onOpenMathScratchpad && {
      id: 'scratchpad',
      label: isArabic ? 'المسودة الرياضية التفاعلية' : 'Interactive Math Scratchpad',
      desc: isArabic ? 'لوحة رسم ومعادلات KaTeX بدقة متناهية' : 'Precision math drawing canvas',
      shortcut: null,
      icon: Edit3,
      color: 'text-purple-400',
      onClick: () => {
        onOpenMathScratchpad();
        setIsToolsOpen(false);
      },
    },
    onOpenOfficialBooks && {
      id: 'books',
      label: isArabic ? 'كتب الوزارة والأدلة الرسمية PDF' : 'Official Ministry PDF Books',
      desc: isArabic ? 'تحميل وقراءة الكتب المدرسية المعتمدة' : 'Approved ministry textbooks',
      shortcut: '⌘B',
      icon: Download,
      color: 'text-teal-400',
      onClick: () => {
        onOpenOfficialBooks();
        setIsToolsOpen(false);
      },
    },
    onOpenDesmos && {
      id: 'desmos',
      label: isArabic ? 'حاسبة ديسموس البيانية 2D/3D' : 'Desmos Graphing Calculator',
      desc: isArabic ? 'تمثيل الدوال والمنحنيات رياضياً' : '2D/3D curve and function graphing',
      shortcut: '⌘D',
      icon: Calculator,
      color: 'text-cyan-400',
      onClick: () => {
        onOpenDesmos();
        setIsToolsOpen(false);
      },
    },
    onOpenTutorial && {
      id: 'tutorial',
      label: isArabic ? 'دليل استخدام المنصة وجولة سريعة' : 'How to Navigate (Quick Tour)',
      desc: isArabic ? 'شرح تفاعلي لكافة أقسام المنصة' : 'Interactive platform tutorial',
      shortcut: '?',
      icon: Compass,
      color: 'text-amber-400',
      onClick: () => {
        onOpenTutorial();
        setIsToolsOpen(false);
      },
    },
    onOpenTeacherAssignments && {
      id: 'teacher_assignments',
      label: isArabic ? 'واجبات واختبارات المعلم بالكود' : 'Teacher Assignments & Classroom',
      desc: isArabic ? 'إنشاء وحل الواجبات بأكواد سداسية ومتابعة نتائج الفصل' : 'Create & solve quizzes with 6-char codes and view class analytics',
      shortcut: '⌥T',
      icon: Users,
      color: 'text-amber-400',
      onClick: () => {
        onOpenTeacherAssignments();
        setIsToolsOpen(false);
      },
    },
    onOpenTeacherCertification && {
      id: 'teacher_certification',
      label: isArabic ? 'شهادة اعتماد معلم كليبسات' : 'Teacher Certification & Diploma',
      desc: isArabic ? 'برنامج التدريب البيداغوجي واعتماد المعلم مع كود دعوة حصري' : '8 pedagogy modules, digital diploma & viral referral code',
      shortcut: '⌥G',
      icon: GraduationCap,
      color: 'text-yellow-400',
      onClick: () => {
        onOpenTeacherCertification();
        setIsToolsOpen(false);
      },
    },
    onOpenParentReport && {
      id: 'parent_report',
      label: isArabic ? 'موجز ولي الأمر الأسبوعي (واتساب)' : 'Parent Weekly Digest (WhatsApp)',
      desc: isArabic ? 'تقرير دعم ومتابعة مباشر ومطمئن لولي الأمر بنقرة زر' : 'Empathetic progress summary sent directly via WhatsApp or SMS',
      shortcut: '⌥W',
      icon: MessageSquare,
      color: 'text-emerald-400',
      onClick: () => {
        onOpenParentReport();
        setIsToolsOpen(false);
      },
    },
    onOpenDownloadManager && {
      id: 'download_manager',
      label: isArabic ? 'مدير التحميل والمذاكرة بدون نت' : 'Offline Study Pack Manager',
      desc: isArabic ? 'تحميل بنوك الأسئلة والشروحات والمختبرات للعمل بدون نت 100%' : 'Pre-cache subjects, databanks and labs for 100% offline study',
      shortcut: '⌥O',
      icon: HardDrive,
      color: 'text-emerald-400',
      onClick: () => {
        onOpenDownloadManager();
        setIsToolsOpen(false);
      },
    },
    onOpenMinistryResults && {
      id: 'ministry_results',
      label: isArabic ? 'بوابة نتائج الثانوية والمعايرة' : 'Ministry Results & Calibration',
      desc: isArabic ? 'استعلام رسمي برقم الجلوس ومعايرة نموذج التنبؤ الذكي' : 'Official results lookup & local predictive score calibration',
      shortcut: '⌥N',
      icon: GraduationCap,
      color: 'text-emerald-400',
      onClick: () => {
        onOpenMinistryResults();
        setIsToolsOpen(false);
      },
    },
    onOpenGovernorateAnalytics && {
      id: 'governorate_analytics',
      label: isArabic ? 'تحليلات المحافظات وتكافؤ الفرص' : 'Governorates & Equity Analytics',
      desc: isArabic ? 'مؤشرات الجاهزية عبر ٢٧ محافظة وتقليص فجوة الريف والحضر' : '27 governorates readiness & rural-urban parity index',
      shortcut: '⌥E',
      icon: Compass,
      color: 'text-cyan-400',
      onClick: () => {
        onOpenGovernorateAnalytics();
        setIsToolsOpen(false);
      },
    },
    onOpenEducationalSponsorship && {
      id: 'educational_sponsorship',
      label: isArabic ? 'ميثاق المجانية والرعاية المجتمعية' : 'Free Charter & Community Grants',
      desc: isArabic ? 'ضمان مجانية المنصة والشراكة مع مؤسسات المجتمع المدني' : 'Free forever charter & school sponsorship grants',
      shortcut: '⌥S',
      icon: HeartHandshake,
      color: 'text-amber-400',
      onClick: () => {
        onOpenEducationalSponsorship();
        setIsToolsOpen(false);
      },
    },
    onOpenLearningOutcomes && {
      id: 'learning_outcomes',
      label: isArabic ? 'دراسة قياس مخرجات التعلم والأثر' : 'Learning Outcomes & Impact Study',
      desc: isArabic ? 'دراسة مقارنة محكمة (N=500) وحساب حجم الأثر (Cohen\'s d)' : 'Rigorous controlled study with effect size & percentile lift',
      shortcut: '⌥L',
      icon: BarChart2,
      color: 'text-violet-400',
      onClick: () => {
        onOpenLearningOutcomes();
        setIsToolsOpen(false);
      },
    },
    onOpenDailyPrescription && {
      id: 'daily_prescription',
      label: isArabic ? 'روشتة المذاكرة اليومية التكيفية' : 'Daily Adaptive Prescription',
      desc: isArabic ? 'مهام المذاكرة المخصصة وتكرار لايتنر أوفلاين' : 'Personalized on-device Leitner spaced repetition & gap repair',
      shortcut: '⌥R',
      icon: BrainCircuit,
      color: 'text-indigo-400',
      onClick: () => {
        onOpenDailyPrescription();
        setIsToolsOpen(false);
      },
    },
    onOpenSchoolOutreach && {
      id: 'school_outreach',
      label: isArabic ? 'حملة المدارس والمطبوعات الميدانية' : 'School Outreach & Media Kit',
      desc: isArabic ? 'ملصقات A4 قابلة للطباعة بكود QR وإعلان الفيديو ورسائل الواتساب' : 'Printable school flyers, 10s video ad storyboard & parent messaging',
      shortcut: '⌥K',
      icon: Printer,
      color: 'text-emerald-400',
      onClick: () => {
        onOpenSchoolOutreach();
        setIsToolsOpen(false);
      },
    },
    {
      id: 'role',
      label: role === 'student' ? (isArabic ? 'التحويل لوضع المعلم' : 'Switch to Teacher Mode') : (isArabic ? 'التحويل لوضع الطالب' : 'Switch to Student Mode'),
      desc: role === 'student' ? (isArabic ? 'الحالي: وضع الطالب' : 'Current: Student') : (isArabic ? 'الحالي: وضع المعلم' : 'Current: Teacher'),
      shortcut: null,
      icon: UserCheck,
      color: 'text-indigo-400',
      onClick: () => {
        onRoleToggle();
        setIsToolsOpen(false);
      },
    },
  ].filter(Boolean) as Array<{
    id: string;
    label: string;
    desc: string;
    shortcut: string | null;
    icon: typeof BookOpen;
    color: string;
    onClick: () => void;
  }>;

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 border-b backdrop-blur-md no-print w-full max-w-full overflow-x-clip ${
      isHighContrast
        ? 'bg-black text-white border-cyan-400/80 shadow-2xl'
        : isLight
        ? 'bg-white/95 text-slate-800 border-slate-200 shadow-sm'
        : 'bg-slate-950/95 text-slate-100 border-slate-800 shadow-xl'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 min-w-0">
        {/* Top Announcement Bar */}
        <div className={`py-1.5 border-b flex items-center justify-between gap-1.5 sm:gap-2 text-[11px] transition-colors min-w-0 w-full max-w-full ${
          isHighContrast
            ? 'border-cyan-500/40 text-slate-200'
            : isLight
            ? 'border-slate-200 text-slate-500'
            : 'border-slate-800/60 text-slate-400'
        }`}>
          {/* Left Column: Official MOE Reference */}
          <div className="flex items-center gap-1.5 sm:gap-2 truncate min-w-0 flex-1">
            <span className={`inline-block w-2 h-2 rounded-full shrink-0 animate-pulse ${
              isHighContrast ? 'bg-cyan-400' : 'bg-emerald-500'
            }`}></span>
            <span className={`font-semibold truncate min-w-0 text-[10px] sm:text-[11px] ${
              isHighContrast ? 'text-cyan-300 font-black' : isLight ? 'text-emerald-700' : 'text-emerald-400'
            }`}>{t.moeBadge}</span>
            <span className={`hidden lg:inline ${
              isHighContrast ? 'text-cyan-600' : isLight ? 'text-slate-300' : 'text-slate-600'
            }`}>|</span>
            <span className={`hidden lg:inline font-bold shrink-0 ${
              isHighContrast ? 'text-slate-200' : isLight ? 'text-slate-700' : 'text-slate-200'
            }`}>{t.officialMinistryBadge}</span>
            <span className={`hidden xl:inline ${
              isHighContrast ? 'text-cyan-600' : isLight ? 'text-slate-300' : 'text-slate-600'
            }`}>|</span>
            <span className={`hidden xl:inline truncate max-w-[140px] 2xl:max-w-none ${
              isHighContrast ? 'text-slate-100' : isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>{t.officialMoeRef}</span>
            <span className={`hidden 2xl:inline ${
              isHighContrast ? 'text-cyan-600' : isLight ? 'text-slate-300' : 'text-slate-600'
            }`}>|</span>
            <a
              href="https://clipsat.org"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden 2xl:inline-flex items-center gap-1 font-bold text-[10px] transition-all hover:underline shrink-0 ${
                isHighContrast ? 'text-cyan-300' : isLight ? 'text-blue-700 hover:text-blue-900' : 'text-cyan-400 hover:text-cyan-300'
              }`}
              title={t.sisterSite}
            >
              <span>{t.sisterSiteBadge}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          {/* Right Column: Responsive Dropdown Menus & Quick Tools */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 justify-end min-w-0">
            {/* Font Size Dropdown Menu */}
            <div ref={fontRef} className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => {
                  setIsFontOpen((prev) => !prev);
                  setIsThemeOpen(false);
                  setIsToolsOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={isFontOpen}
                className={`flex items-center gap-1 px-2 py-1 rounded-full border text-[11px] font-bold shadow-xs active:scale-95 transition-all cursor-pointer ${
                  isHighContrast
                    ? 'bg-black border-cyan-400 text-cyan-300 hover:bg-zinc-950'
                    : isLight
                    ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200/70'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
                title={t.fontSize}
              >
                <Type className="w-3 h-3 text-indigo-400 shrink-0" />
                <span className="font-extrabold">{fontSize === 'normal' ? 'A' : fontSize === 'large' ? 'A+' : 'A++'}</span>
                <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${isFontOpen ? 'rotate-180' : ''}`} />
              </button>

              {isFontOpen && (
                <div
                  role="menu"
                  className={`absolute ${isArabic ? 'left-0' : 'right-0'} mt-1.5 w-44 rounded-xl p-1.5 shadow-xl border backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-100 ${
                    isHighContrast
                      ? 'bg-black border-2 border-cyan-400 text-white'
                      : isLight
                      ? 'bg-white/98 border-slate-200 text-slate-900 shadow-slate-200/60'
                      : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-black/80'
                  }`}
                >
                  <p className="px-2 py-1 text-[10px] font-bold text-slate-400 border-b border-slate-200 dark:border-slate-800 mb-1">
                    {t.fontSize}
                  </p>
                  {[
                    { id: 'normal', label: t.fontSizeNormal, symbol: 'A', sub: isArabic ? '١٠٠٪' : '100%' },
                    { id: 'large', label: t.fontSizeLarge, symbol: 'A+', sub: isArabic ? '١١٥٪' : '115%' },
                    { id: 'xlarge', label: t.fontSizeXLarge, symbol: 'A++', sub: isArabic ? '١٣٠٪' : '130%' },
                  ].map((opt) => {
                    const isSelected = fontSize === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          onFontSizeChange(opt.id as FontSizeMode);
                          setIsFontOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? isHighContrast
                              ? 'bg-cyan-950 text-cyan-300 font-black'
                              : isLight
                              ? 'bg-indigo-50 text-indigo-900 font-bold'
                              : 'bg-indigo-950/70 text-indigo-300 font-bold'
                            : isLight
                            ? 'hover:bg-slate-100 text-slate-700'
                            : 'hover:bg-slate-900 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-black text-xs text-indigo-400 w-5">{opt.symbol}</span>
                          <span>{opt.label}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-slate-400">{opt.sub}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-indigo-500" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Color Theme & Contrast Dropdown Menu */}
            <div ref={themeRef} className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => {
                  setIsThemeOpen((prev) => !prev);
                  setIsFontOpen(false);
                  setIsToolsOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={isThemeOpen}
                className={`flex items-center gap-1 px-2 py-1 rounded-full border text-[11px] font-bold shadow-xs active:scale-95 transition-all cursor-pointer ${
                  isHighContrast
                    ? 'bg-black border-yellow-400 text-yellow-300 hover:bg-zinc-950'
                    : isLight
                    ? 'bg-amber-50/80 border-amber-200 text-amber-950 hover:bg-amber-100/70'
                    : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                }`}
                title={t.themeDay}
              >
                {theme === 'light' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                ) : theme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                ) : (
                  <Zap className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                )}
                <span className="hidden sm:inline">
                  {theme === 'light'
                    ? isArabic ? 'نهار' : 'Day'
                    : theme === 'dark'
                    ? isArabic ? 'ليل' : 'Night'
                    : isArabic ? 'تباين' : 'Contrast'}
                </span>
                <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${isThemeOpen ? 'rotate-180' : ''}`} />
              </button>

              {isThemeOpen && (
                <div
                  role="menu"
                  className={`absolute ${isArabic ? 'left-0' : 'right-0'} mt-1.5 w-44 rounded-xl p-1.5 shadow-xl border backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-100 ${
                    isHighContrast
                      ? 'bg-black border-2 border-yellow-400 text-white'
                      : isLight
                      ? 'bg-white/98 border-slate-200 text-slate-900 shadow-slate-200/60'
                      : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-black/80'
                  }`}
                >
                  <p className="px-2 py-1 text-[10px] font-bold text-slate-400 border-b border-slate-200 dark:border-slate-800 mb-1">
                    {isArabic ? 'مظهر الشاشة والتباين' : 'Theme & Contrast'}
                  </p>
                  {[
                    { id: 'light', label: t.themeDay, icon: Sun, color: 'text-amber-500' },
                    { id: 'dark', label: t.themeNight, icon: Moon, color: 'text-indigo-400' },
                    { id: 'high-contrast', label: t.themeHighContrast, icon: Zap, color: 'text-yellow-400' },
                  ].map((opt) => {
                    const isSelected = theme === opt.id;
                    const OptIcon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          onThemeChange(opt.id as ThemeMode);
                          setIsThemeOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? isHighContrast
                              ? 'bg-yellow-950 text-yellow-300 font-black'
                              : isLight
                              ? 'bg-amber-50 text-amber-950 font-bold'
                              : 'bg-indigo-950/70 text-indigo-300 font-bold'
                            : isLight
                            ? 'hover:bg-slate-100 text-slate-700'
                            : 'hover:bg-slate-900 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <OptIcon className={`w-3.5 h-3.5 ${opt.color}`} />
                          <span>{opt.label}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-indigo-500" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Tools Dropdown (Shows on < min-[1750px] screens, or always when large/xlarge font size is in use) */}
            <div ref={toolsRef} className={`relative inline-block text-left ${isLargeOrXLarge ? 'min-[1800px]:hidden' : 'min-[1750px]:hidden'}`}>
              <button
                type="button"
                onClick={() => {
                  setIsToolsOpen((prev) => !prev);
                  setIsFontOpen(false);
                  setIsThemeOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={isToolsOpen}
                className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full border text-[11px] font-bold shadow-xs active:scale-95 transition-all cursor-pointer ${
                  isHighContrast
                    ? 'bg-black border-cyan-400 text-cyan-300 hover:bg-zinc-950'
                    : isLight
                    ? 'bg-indigo-50/90 border-indigo-200 text-indigo-900 hover:bg-indigo-100'
                    : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                }`}
                title={isArabic ? 'الأدوات والمراجع السريعة' : 'Quick Tools & References'}
              >
                <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="hidden xs:inline">{isArabic ? 'الأدوات' : 'Tools'}</span>
                <span className={`text-[9px] font-mono px-1 py-0.2 rounded-full shrink-0 ${
                  isHighContrast
                    ? 'bg-cyan-900 text-cyan-200'
                    : isLight
                    ? 'bg-indigo-200/70 text-indigo-800'
                    : 'bg-indigo-900/60 text-indigo-300'
                }`}>
                  {isArabic ? toHindiDigits(quickTools.length) : quickTools.length}
                </span>
                <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isToolsOpen && (
                <div
                  role="menu"
                  className={`absolute ${isArabic ? 'left-0' : 'right-0'} mt-1.5 w-64 sm:w-72 max-w-[calc(100vw-1.5rem)] rounded-xl p-1.5 shadow-xl border backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-100 max-h-[min(80vh,540px)] overflow-y-auto ${
                    isHighContrast
                      ? 'bg-black border-2 border-cyan-400 text-white'
                      : isLight
                      ? 'bg-white/98 border-slate-200 text-slate-900 shadow-slate-200/60'
                      : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-black/80'
                  }`}
                >
                  <div className="px-2.5 py-1 text-[10px] font-bold text-slate-400 border-b border-slate-200 dark:border-slate-800 mb-1 flex items-center justify-between">
                    <span>{isArabic ? 'الأدوات والمراجع التفاعلية' : 'Tools & Quick References'}</span>
                    <span className="text-[9px] font-mono opacity-70">{isArabic ? `${toHindiDigits(quickTools.length)} أدوات` : `${quickTools.length} tools`}</span>
                  </div>
                  <div className="space-y-0.5">
                    {quickTools.map((tool) => {
                      if (!tool) return null;
                      const ToolIcon = tool.icon;
                      return (
                        <button
                          key={tool.id}
                          type="button"
                          onClick={tool.onClick}
                          className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer text-left rtl:text-right ${
                            isHighContrast
                              ? 'hover:bg-cyan-950 text-cyan-200'
                              : isLight
                              ? 'hover:bg-slate-100 text-slate-800'
                              : 'hover:bg-slate-900 text-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`p-1.5 rounded-md ${
                              isHighContrast ? 'bg-zinc-900' : isLight ? 'bg-slate-100' : 'bg-slate-900'
                            }`}>
                              <ToolIcon className={`w-3.5 h-3.5 ${tool.color}`} />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold truncate text-xs">{tool.label}</p>
                              <p className="text-[10px] text-slate-400 truncate">{tool.desc}</p>
                            </div>
                          </div>
                          {tool.shortcut && (
                            <kbd className="hidden sm:inline-block text-[9px] font-mono px-1 py-0.5 bg-black/20 dark:bg-white/10 rounded border border-white/15 shrink-0 ml-1.5 rtl:ml-0 rtl:mr-1.5">
                              {tool.shortcut}
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Individual Quick Tools (Shown on wide screens: 1750px+ normally, 1800px+ when large/xlarge font) */}
            <div className={`items-center gap-1 xl:gap-1.5 ${isLargeOrXLarge ? 'hidden min-[1800px]:flex' : 'hidden min-[1750px]:flex'}`}>
              {/* Formula Handbook Trigger */}
              {onOpenFormulaHandbook && (
                <button
                  onClick={onOpenFormulaHandbook}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-yellow-300 border-yellow-400 hover:bg-yellow-950/40'
                      : isLight
                      ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 border-emerald-700/60'
                  }`}
                  title={isArabic ? 'دستور القوانين والمعادلات الرسمية (Ctrl+J / ⌘J)' : 'Formula Sheet Handbook (Ctrl+J / ⌘J)'}
                >
                  <BookOpen className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'دستور القوانين' : 'Formula Sheet'}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌘J</kbd>
                </button>
              )}

              {/* Math Scratchpad Trigger */}
              {onOpenMathScratchpad && (
                <button
                  onClick={onOpenMathScratchpad}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-purple-300 border-purple-400 hover:bg-purple-950/40'
                      : isLight
                      ? 'bg-purple-50 hover:bg-purple-100 text-purple-800 border-purple-300'
                      : 'bg-purple-950/70 hover:bg-purple-900 text-purple-300 border-purple-700/60'
                  }`}
                  title={isArabic ? 'المسودة الرياضية التفاعلية (KaTeX)' : 'Interactive Math Scratchpad'}
                >
                  <Edit3 className="w-3 h-3 text-purple-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'المسودة الرياضية' : 'Scratchpad'}</span>
                </button>
              )}

              {/* Official Ministry Books Trigger */}
              {onOpenOfficialBooks && (
                <button
                  onClick={onOpenOfficialBooks}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-amber-300 border-amber-400 hover:bg-amber-950/40'
                      : isLight
                      ? 'bg-teal-50 hover:bg-teal-100 text-teal-800 border-teal-300'
                      : 'bg-teal-950/70 hover:bg-teal-900 text-teal-300 border-teal-700/60'
                  }`}
                  title={isArabic ? 'كتب الوزارة والأدلة الرسمية PDF (Ctrl+B / ⌘B)' : 'Official Ministry PDF Books (Ctrl+B / ⌘B)'}
                >
                  <Download className="w-3 h-3 text-teal-400 shrink-0" />
                  <span className="hidden xl:inline">{t.officialBooksNavBtn}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌘B</kbd>
                </button>
              )}

              {/* Desmos 2D/3D Calculator Trigger */}
              {onOpenDesmos && (
                <button
                  onClick={onOpenDesmos}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-cyan-300 border-cyan-400 hover:bg-cyan-950/40'
                      : isLight
                      ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border-indigo-300'
                      : 'bg-cyan-950/70 hover:bg-cyan-900 text-cyan-300 border-cyan-700/60'
                  }`}
                  title={isArabic ? 'حاسبة ديسموس البيانية 2D/3D (Ctrl+D / ⌘D)' : 'Desmos 2D/3D Calculator (Ctrl+D / ⌘D)'}
                >
                  <Calculator className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'حاسبة ديسموس' : 'Desmos 2D/3D'}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌘D</kbd>
                </button>
              )}

              {/* English Academic Dictionary Trigger */}
              {onOpenEnglishDictionary && (
                <button
                  onClick={onOpenEnglishDictionary}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-violet-300 border-violet-400 hover:bg-violet-950/40'
                      : isLight
                      ? 'bg-violet-50 hover:bg-violet-100 text-violet-800 border-violet-300'
                      : 'bg-violet-950/70 hover:bg-violet-900 text-violet-300 border-violet-700/60'
                  }`}
                  title={isArabic ? 'قاموس اللغة الإنجليزية الأكاديمي (Alt+D / ⌥D)' : 'English Academic Dictionary (Alt+D / ⌥D)'}
                >
                  <Languages className="w-3 h-3 text-violet-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'القاموس' : 'Dictionary'}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌥D</kbd>
                </button>
              )}

              {/* English Audio & Phonetics Lab Trigger */}
              {onOpenEnglishAudioLab && (
                <button
                  onClick={onOpenEnglishAudioLab}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-indigo-300 border-indigo-400 hover:bg-indigo-950/40'
                      : isLight
                      ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border-indigo-300'
                      : 'bg-indigo-950/70 hover:bg-indigo-900 text-indigo-300 border-indigo-700/60'
                  }`}
                  title={isArabic ? 'معمل الصوتيات والنطق (Alt+P / ⌥P)' : 'Audio & Phonetics Lab (Alt+P / ⌥P)'}
                >
                  <Headphones className="w-3 h-3 text-indigo-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'الصوتيات' : 'Audio Lab'}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌥P</kbd>
                </button>
              )}

              {/* French Audio & Listening Studio Trigger */}
              {onOpenFrenchListening && (
                <button
                  onClick={onOpenFrenchListening}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-sky-300 border-sky-400 hover:bg-sky-950/40'
                      : isLight
                      ? 'bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-300'
                      : 'bg-sky-950/70 hover:bg-sky-900 text-sky-300 border-sky-700/60'
                  }`}
                  title={isArabic ? 'معمل الصوتيات الفرنسية والاستماع (Alt+F / ⌥F)' : 'French Audio & Listening Studio (Alt+F / ⌥F)'}
                >
                  <Headphones className="w-3 h-3 text-sky-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'استماع فرنسي' : 'French Audio'}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌥F</kbd>
                </button>
              )}

              {/* Arabic Grammar & Rhetoric Studio Trigger */}
              {onOpenArabicGrammar && (
                <button
                  onClick={onOpenArabicGrammar}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-amber-300 border-amber-400 hover:bg-amber-950/40'
                      : isLight
                      ? 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-300'
                      : 'bg-amber-950/70 hover:bg-amber-900 text-amber-300 border-amber-700/60'
                  }`}
                  title={isArabic ? 'معمل النحو والإعراب والبلاغة (Alt+A / ⌥A)' : 'Arabic Grammar & Rhetoric Studio (Alt+A / ⌥A)'}
                >
                  <BookOpen className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'معمل النحو' : 'Arabic Studio'}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌥A</kbd>
                </button>
              )}

              {/* Accessibility & Visual Calibration Suite Trigger */}
              {onOpenAccessibility && (
                <button
                  onClick={onOpenAccessibility}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs cursor-pointer ${
                    isHighContrast
                      ? 'bg-black text-cyan-300 border-cyan-400 hover:bg-cyan-950/40'
                      : isLight
                      ? 'bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-300'
                      : 'bg-sky-950/70 hover:bg-sky-900 text-sky-300 border-sky-700/60'
                  }`}
                  title={isArabic ? 'إعدادات الوصول الشامل والمعايرة (Alt+U / ⌥U)' : 'Accessibility & Visual Calibration (Alt+U / ⌥U)'}
                >
                  <Sliders className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="hidden xl:inline">{isArabic ? 'إمكانية الوصول' : 'Accessibility'}</span>
                  <kbd className="hidden 2xl:inline text-[9px] font-mono px-1 py-0.2 bg-black/30 rounded border border-white/20">⌥U</kbd>
                </button>
              )}

              {/* Site Tutorial / How To Trigger */}
              {onOpenTutorial && (
                <button
                  onClick={onOpenTutorial}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 py-1 rounded-full font-black text-[11px] transition-all border shadow-xs cursor-pointer active:scale-95 ${
                    isHighContrast
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-400 hover:bg-cyan-900'
                      : isLight
                      ? 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300'
                      : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/40'
                  }`}
                  title={isArabic ? 'دليل استخدام المنصة وجولة تعريفية سريعة' : 'How to navigate the platform (Quick Tour)'}
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="hidden lg:inline">{t.howToShort}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0" />
                </button>
              )}

              {/* Role Toggle: Teacher / Student */}
              <button
                onClick={onRoleToggle}
                className={`flex items-center gap-1 px-2 xl:px-2.5 py-1 rounded-full font-bold text-[11px] transition-all border shadow-xs ${
                  isHighContrast
                    ? 'bg-black text-white border-white/60 hover:border-white'
                    : isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                }`}
                title={role === 'student' ? t.roleStudent : t.roleTeacher}
              >
                <UserCheck className={`w-3.5 h-3.5 shrink-0 ${isHighContrast ? 'text-yellow-400' : isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
                <span className="hidden lg:inline">{role === 'student' ? t.roleStudent : t.roleTeacher}</span>
              </button>
            </div>

            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full font-extrabold text-[11px] transition-all border shadow-xs active:scale-95 shrink-0 ${
                isHighContrast
                  ? 'bg-black text-cyan-300 border-cyan-400 hover:bg-cyan-950/40'
                  : isLight
                  ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                  : 'bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 border-indigo-700'
              }`}
            >
              <Globe className={`w-3 h-3 shrink-0 ${isHighContrast ? 'text-cyan-400' : isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <span>{t.languageToggle}</span>
            </button>
          </div>
        </div>

        {/* Main Nav Header */}
        <div className={`py-2.5 flex flex-col ${isLargeOrXLarge ? '2xl:flex-row' : 'xl:flex-row'} items-stretch ${isLargeOrXLarge ? '2xl:items-center' : 'xl:items-center'} justify-between gap-2.5 sm:gap-4 w-full max-w-full min-w-0`}>
          {/* Logo & Brand Title */}
          <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 shrink-0 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <a
                href="https://clipsat.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 shrink-0 group transition-transform hover:scale-105 active:scale-95"
                title={t.sisterSite}
              >
                <img
                  src={clipsatLogo}
                  alt="ClipSAT"
                  className="h-8 sm:h-9 w-auto object-contain shrink-0 drop-shadow-sm"
                />
                <EgyptFlag
                  className="h-5 sm:h-5.5 w-auto rounded-[3px] shadow-xs shrink-0 ring-1 ring-black/15 dark:ring-white/20 transition-transform group-hover:rotate-3"
                  title={isArabic ? 'علم جمهورية مصر العربية' : 'Flag of the Arab Republic of Egypt'}
                />
              </a>
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <span className={`text-xs xs:text-sm sm:text-base xl:text-lg font-black tracking-tight whitespace-nowrap truncate min-w-0 ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  ClipSAT EGBaccalaureate
                </span>
                <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border shrink-0 ${
                  isLight
                    ? 'bg-slate-100 text-slate-700 border-slate-300'
                    : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}>
                  2026
                </span>
              </div>
            </div>

            <a
              href="https://clipsat.org"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex lg:hidden 2xl:inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-extrabold px-2 sm:px-2.5 py-0.5 rounded-full border transition-all hover:scale-105 active:scale-95 shadow-xs shrink-0 ${
                isHighContrast
                  ? 'bg-black text-cyan-300 border-cyan-400 hover:bg-cyan-950/40'
                  : isLight
                  ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-900'
                  : 'bg-blue-950/70 text-blue-300 border-blue-700/60 hover:bg-blue-900 hover:text-white'
              }`}
              title={t.sisterSite}
            >
              <span>clipsat.org</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-80" />
            </a>
          </div>

          {/* Controls: Subject Selector & Curriculum Switcher - Both as Dropdown Menus */}
          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 shrink-0 w-full ${isLargeOrXLarge ? '2xl:w-auto' : 'xl:w-auto'} min-w-0`}>
            {curriculumData && onSubjectChange && (
              <SubjectSelector
                selectedSubject={selectedSubject || 'all'}
                onSelectSubject={onSubjectChange}
                curriculum={curriculumData}
                lang={lang}
                theme={theme}
                className="w-full sm:w-auto flex-1 sm:flex-none min-w-0"
              />
            )}

            {/* Curriculum Switcher Dropdown Menu */}
            <CurriculumSelector
              curriculum={curriculum}
              onCurriculumChange={onCurriculumChange}
              lang={lang}
              theme={theme}
              className="w-full sm:w-auto flex-1 sm:flex-none min-w-0"
            />
          </div>
        </div>

        {/* Tab Navigation Section: Responsive Horizontal Ribbon with Auto-Scroll & Quick Dropdown */}
        <div className="py-2 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-1.5 sm:gap-2 min-w-0 w-full max-w-full">
          {/* Quick Module Catalog Dropdown Trigger */}
          <div ref={tabMenuRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setIsTabMenuOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={isTabMenuOpen}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95 border min-w-0 ${
                isHighContrast
                  ? 'bg-black border-2 border-yellow-400 text-yellow-300 hover:bg-zinc-950'
                  : isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
              title={isArabic ? 'جميع أقسام المنصة (١١ قسماً)' : 'All Platform Modules (11 Modules)'}
            >
              <activeTabObj.Icon className={`w-3.5 h-3.5 shrink-0 ${isHighContrast ? 'text-yellow-400' : 'text-indigo-500'}`} />
              <span className="inline sm:hidden font-extrabold truncate max-w-[85px] xs:max-w-[110px]">
                {activeTabObj.label}
              </span>
              <span className="hidden sm:inline font-extrabold">
                {isArabic ? 'الأقسام' : 'Modules'}
              </span>
              <ChevronDown className={`w-3 h-3 opacity-70 transition-transform duration-200 shrink-0 ${isTabMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isTabMenuOpen && (
              <div
                role="menu"
                className={`absolute ${isArabic ? 'right-0' : 'left-0'} mt-1.5 w-72 sm:w-80 max-w-[calc(100vw-2rem)] rounded-2xl p-2 shadow-2xl border backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150 max-h-[70vh] overflow-y-auto ${
                  isHighContrast
                    ? 'bg-black border-2 border-yellow-400 text-white'
                    : isLight
                    ? 'bg-white/98 border-slate-200 text-slate-900 shadow-xl shadow-slate-200/60'
                    : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-2xl shadow-black/80'
                }`}
              >
                <div className="px-3 py-1.5 border-b border-slate-200 dark:border-slate-800 mb-1 flex items-center justify-between">
                  <p className="text-xs font-black text-slate-400">
                    {isArabic ? 'أقسام المنصة التعليمية' : 'Platform Modules'}
                  </p>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                    {isArabic ? `${toHindiDigits(navTabs.length)} أقسام` : `${navTabs.length} Modules`}
                  </span>
                </div>
                <div className="space-y-1">
                  {navTabs.map((tab) => {
                    const isSelected = tab.id === activeTab;
                    const TabIcon = tab.Icon;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          onTabChange(tab.id);
                          setIsTabMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all text-left rtl:text-right cursor-pointer ${
                          isSelected
                            ? isHighContrast
                              ? 'bg-yellow-950 text-white border border-yellow-400 font-black'
                              : isLight
                              ? 'bg-slate-100 text-slate-950 border border-slate-300 font-extrabold'
                              : 'bg-slate-800/80 text-white border border-slate-700 font-extrabold'
                            : isLight
                            ? 'hover:bg-slate-100 text-slate-700'
                            : 'hover:bg-slate-900 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <TabIcon className="w-4 h-4 shrink-0 text-slate-500" />
                          <div className="min-w-0">
                            <p className="text-xs font-bold truncate">{tab.label}</p>
                            <p className="text-[10px] text-slate-400 truncate">
                              {isArabic ? tab.descAr : tab.descEn}
                            </p>
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-emerald-500 shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 shrink-0" />

          {/* Horizontal Scrollable Tabs Bar */}
          <nav
            ref={tabListRef}
            className="flex-1 flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5 min-w-0 max-w-full touch-pan-x"
          >
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const TabIcon = tab.Icon;
              return (
                <button
                  key={tab.id}
                  ref={isActive ? activeTabBtnRef : null}
                  onClick={() => onTabChange(tab.id)}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-xl whitespace-nowrap transition-all shrink-0 active:scale-95 text-[11px] sm:text-xs flex items-center gap-1.5 font-semibold ${
                    isActive
                      ? isHighContrast
                        ? 'bg-yellow-400 text-black font-black shadow-xs border border-yellow-300'
                        : isLight
                        ? 'bg-slate-900 text-white font-extrabold shadow-xs'
                        : 'bg-slate-800 text-white border border-slate-700 font-extrabold'
                      : isHighContrast
                        ? 'text-white hover:text-yellow-300 hover:bg-zinc-900'
                        : isLight
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5 shrink-0 opacity-80" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
