import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Language } from '../i18n/translations';
import type { ThemeMode } from '../types/curriculum';
import {
  Compass,
  BookOpen,
  Search,
  CheckCircle2,
  Download,
  Calculator,
  Zap,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  Play,
  Pause,
  Tv,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';
import { EgyptFlag } from './EgyptFlag';
import { MathRenderer } from './MathRenderer';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme?: ThemeMode;
  onNavigateTab: (tab: string) => void;
  onSelectSubject?: (subjectId: string) => void;
  onOpenSearch?: () => void;
  onOpenFormulaHandbook?: () => void;
  onOpenDesmos?: () => void;
  onOpenOfficialBooks?: () => void;
}

interface TutorialStep {
  id: string;
  stepNumber: number;
  categoryEn: string;
  categoryAr: string;
  titleEn: string;
  titleAr: string;
  taglineEn: string;
  taglineAr: string;
  descriptionEn: string;
  descriptionAr: string;
  highlightsEn: string[];
  highlightsAr: string[];
  shortcutBadge?: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  actionType?: 'interactive' | 'search' | 'handbook' | 'desmos' | 'books' | 'test' | 'overview';
  actionLabelEn?: string;
  actionLabelAr?: string;
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: 'curriculum-tracks',
    stepNumber: 1,
    categoryEn: 'Curriculum & Tracks',
    categoryAr: 'المسارات والمقررات الدراسية',
    titleEn: 'Dual Track System & Subject Selector',
    titleAr: 'منظومة المسارين واختيار المواد الدراسية',
    taglineEn: 'Thanaweya Amma (General Secondary) & New Egyptian Baccalaureate (EG-Bac)',
    taglineAr: 'الثانوية العامة المصرية المعتمدة والبكالوريا المصرية الحديثة (EG-Bac)',
    descriptionEn:
      'Seamlessly switch between the traditional Egyptian General Secondary (Thanaweya Amma) and the advanced STEM Egyptian Baccalaureate curriculum. Filter across all 12 accredited subjects (Mathematics, Physics, Chemistry, Biology, Geology, History, Geography, Philosophy & Logic, Psychology & Sociology, Arabic, English, and French) or view all tracks simultaneously.',
    descriptionAr:
      'تنقل بسلاسة بين منهج الثانوية العامة المصرية والمنهج المتقدم للبكالوريا المصرية (EG-Bac). يمكنك تصفية المحتوى حسب المواد الـ ١٢ المعتمدة: الرياضيات، الفيزياء، الكيمياء، الأحياء، الجيولوجيا والعلوم البيئية، التاريخ، الجغرافيا السياسية، الفلسفة والمنطق، علم النفس والاجتماع، اللغة العربية، الإنجليزية، والفرنسية، أو استعراض جميع المواد بضغطة واحدة.',
    highlightsEn: [
      'Toggle tracks with 1-click at the top navigation bar',
      'Unified subject filtering across all 12 subjects (Math, Physics, Chemistry, Biology, Geology, History, Geography, Philosophy, Psychology, Arabic, English, French)',
      'Direct curriculum equivalence & bridging comparison map',
    ],
    highlightsAr: [
      'التبديل الفوري بين المسارات من شريط التنقل العلوي',
      'تصفية موحدة للمواد الـ ١٢ (رياضيات، فيزياء، كيمياء، أحياء، جيولوجيا، تاريخ، جغرافيا سياسية، فلسفة، علم نفس، عربي، إنجليزي، فرنساوي)',
      'خريطة مقارنة ومطابقة شاملة بين مساري الثانوية والبكالوريا',
    ],
    accentColor: '#38bdf8',
    accentBg: 'rgba(56, 189, 248, 0.1)',
    accentBorder: 'rgba(56, 189, 248, 0.3)',
    actionType: 'overview',
    actionLabelEn: 'View Curriculum Roadmap',
    actionLabelAr: 'استعراض خريطة المنهج',
  },
  {
    id: 'virtual-labs',
    stepNumber: 2,
    categoryEn: 'Virtual Laboratories',
    categoryAr: 'المختبرات العلمية التفاعلية',
    titleEn: 'Tier-1 High-DPI Virtual Simulations & Studios',
    titleAr: 'مختبرات واستوديوهات محاكاة تفاعلية فائقة الدقة (60-120 FPS)',
    taglineEn: 'PhET & Labster standard across STEM, Humanities & Social Sciences',
    taglineAr: 'معايير عالمية للمحاكاة تشمل العلوم الطبيعية والتطبيقية والإنسانية والاجتماعية',
    descriptionEn:
      'Experience 35+ sandboxed interactive laboratories and studios: 3D Dynamo induction, RLC AC resonance, Photoelectric effect, Atomic spectra & He-Ne laser, Galvanic electrochemistry, Acid-Base titration, Rotary ATP Synthase, Geology Earth Studio, Geopolitical Map Studio, History Timeline Studio, Logic & AI Studio, Psychology & Social Dynamics Studio, and German Language Studio.',
    descriptionAr:
      'اكتشف أكثر من ٣٥ مختبراً واستوديو تفاعلياً متكاملاً: دينامو الحث الكهرومغناطيسي 3D، دوائر الرنين RLC، الظاهرة الكهروضوئية، أطياف بور وليزر He-Ne، الخلايا الجلفانية، المعايرة، ومضخة إنزيم ATP، واستوديو علوم الأرض والجيولوجيا، واستوديو الخرائط الجيوسياسية، واستوديو الخط الزمني للتاريخ، واستوديو المنطق والذكاء الاصطناعي، واستوديو علم النفس والديناميات الاجتماعية، واستوديو اللغة الألمانية.',
    highlightsEn: [
      'Calibrated Fluke 87V Digital Multimeter, Dual-Trace Oscilloscope & Geopolitical HUD',
      'Predict-Observe-Explain (POE) pedagogical hypothesis cycles',
      'Interactive Lab Notebook with least-squares linear regression (R² = 1.000)',
    ],
    highlightsAr: [
      'أجهزة قياس احترافية: ملتيميتر Fluke الرقمي وراسم الذبذبات وشاشات التحليل الجغرافي HUD',
      'دورات التحدي التعليمي (توقع - لاحظ - فسر POE) لترسيخ المفاهيم',
      'كشكول المعمل التفاعلي لحساب ميل الانحدار الخطي واستخراج الثوابت الفيزيائية',
    ],
    accentColor: '#06b6d4',
    accentBg: 'rgba(6, 182, 212, 0.1)',
    accentBorder: 'rgba(6, 182, 212, 0.3)',
    actionType: 'interactive',
    actionLabelEn: 'Open Virtual Labs Hub',
    actionLabelAr: 'فتح بوابة المختبرات الافتراضية',
  },
  {
    id: 'universal-search',
    stepNumber: 3,
    categoryEn: 'Smart Search & Indexing',
    categoryAr: 'البحث الشامل والاستكشاف الفوري',
    titleEn: 'Instant Universal Search Across 45,000+ Questions',
    titleAr: 'البحث الفوري الذكي في جميع الـ ٤٥,٠٠٠ مسألة و ٢٢٥ فصلاً',
    taglineEn: 'Find any theorem, law, formula, or problem in milliseconds',
    taglineAr: 'ابحث عن أي قانون أو تعريف أو مسألة في أجزاء من الثانية',
    descriptionEn:
      'Press ⌘K or Ctrl+K anywhere to launch the Universal Search modal. Search across 45,000+ problems, 225 syllabus chapters, official Ministry theorems, and KaTeX scientific equations with live filtered highlights.',
    descriptionAr:
      'اضغط ⌘K أو Ctrl+K في أي وقت لفتح نافذة البحث الشامل السريع. ابحث عبر ٤٥,٠٠٠+ مسألة، و٢٢٥ فصلاً دراسياً، وقوانين الوزارة والمعادلات العلمية بدقة فائقة وانتقال فوري إلى الدرس المعني.',
    highlightsEn: [
      'Keyboard shortcut: ⌘K / Ctrl+K accessible from all views',
      'Filters by track (Thanaweya / EG-Bac) and item category',
      'One-click instant navigation directly to target section',
    ],
    highlightsAr: [
      'اختصار لوحة المفاتيح: ⌘K أو Ctrl+K متاح في أي صفحة',
      'تصفية نتائج البحث حسب المسار التعليمي ونوع المحتوى',
      'انتقال فوري مباشر بضغطة زر إلى نص الدرس أو المسألة',
    ],
    shortcutBadge: '⌘K / Ctrl+K',
    accentColor: '#a855f7',
    accentBg: 'rgba(168, 85, 247, 0.1)',
    accentBorder: 'rgba(168, 85, 247, 0.3)',
    actionType: 'search',
    actionLabelEn: 'Open Search Modal',
    actionLabelAr: 'فتح نافذة البحث الآن',
  },
  {
    id: 'theory-lessons',
    stepNumber: 4,
    categoryEn: 'Curriculum Depth',
    categoryAr: 'الشروحات والنظريات التأسيسية',
    titleEn: 'Comprehensive Theory & Pedagogical Solutions',
    titleAr: 'الشروحات التفصيلية والأمثلة المحلولة خطوة بخطوة',
    taglineEn: 'Structured learning aligned with Bloom’s Educational Taxonomy',
    taglineAr: 'شروحات علمية مؤصلة وفق هرم بلوم للأهداف التعليمية',
    descriptionEn:
      'Each chapter includes conceptual theory, interactive KaTeX formula typesetting, textbook-solved examples, formative evaluations, lesson plans for teachers, and ready-to-print student worksheets with full step-by-step mathematical working.',
    descriptionAr:
      'يحتوي كل فصل على شرح تأصيلي للمفاهيم، وصياغات رياضية بترميز KaTeX، وأمثلة نموذجية محلولة، وتقييمات تكوينية، وخطط دروس للمعلمين، وأوراق عمل قابلة للطباعة تتضمن خطوات الحل بالتفصيل.',
    highlightsEn: [
      '190,488+ KaTeX scientific expressions rendered natively',
      'Pedagogical tabs: Theory, Solved Examples, Worksheets, Teacher Tips',
      'Customizable print layout for clean offline paper tests and homework',
    ],
    highlightsAr: [
      'أكثر من ١٩٠,٤٨٨ تعبير رياضي وعلمي مكتوب بدقة فائقة',
      'تبويبات منظمة: الشرح، الأمثلة المحلولة، التمارين، وخطط التدريس',
      'تنسيق طباعة أنيق لأوراق العمل والاختبارات الورقية المنزلية',
    ],
    accentColor: '#10b981',
    accentBg: 'rgba(168, 85, 247, 0.1)',
    accentBorder: 'rgba(16, 185, 129, 0.3)',
    actionType: 'overview',
    actionLabelEn: 'Explore Chapter Lessons',
    actionLabelAr: 'استعراض دروس الفصول',
  },
  {
    id: 'databank-testing',
    stepNumber: 5,
    categoryEn: 'Examination Engine',
    categoryAr: 'بنك الأسئلة ومولد الامتحانات الذكي',
    titleEn: '45,000+ Problems & Automated Exam Simulator',
    titleAr: 'بنك ٤٥,٠٠٠+ مسألة ومولد الامتحانات المؤتمت',
    taglineEn: 'Customizable timed exams with instant grading & diagnostic feedback',
    taglineAr: 'امتحانات إلكترونية محددة بزمن مع تصحيح فوري وتحليل تفصيلي للإجابات',
    descriptionEn:
      'Challenge yourself with the complete 45,000+ problem databank categorized into 3 difficulty tiers (Foundational, Intermediate, Advanced HOTS). Generate custom mock exams or launch the 3-Hour Ministerial Exam Simulation Room with OMR bubble sheets.',
    descriptionAr:
      'اختبر قدراتك مع بنك الأسئلة المتكامل الذي يضم ٤٥,٠٠٠+ مسألة مصنفة لثلاثة مستويات صعوبة (تأسيسي، متوسط، متقدم HOTS). قم بإنشاء امتحانات تجريبية أو محاكاة الامتحان الوزاري الرسمي لثلاث ساعات بنظام البابل شيت.',
    highlightsEn: [
      'Generate online timed quizzes or printable paper exam forms',
      'Targeted topic selection: select specific branches, chapters, or difficulty',
      'Instant feedback with complete solution breakdowns',
    ],
    highlightsAr: [
      'إنشاء اختبارات إلكترونية تفاعلية أو نماذج امتحانية جاهزة للطباعة',
      'تحديد دقيق للفروع والفصول ومستوى صعوبة الأسئلة المطلوبة',
      'تصحيح فوري تلقائي مع كشف كامل لخطوات الحل النموذجية',
    ],
    accentColor: '#f59e0b',
    accentBg: 'rgba(245, 158, 11, 0.1)',
    accentBorder: 'rgba(245, 158, 11, 0.3)',
    actionType: 'test',
    actionLabelEn: 'Generate Custom Test',
    actionLabelAr: 'إنشاء اختبار مخصص الآن',
  },
  {
    id: 'official-books-handbook',
    stepNumber: 6,
    categoryEn: 'Official References',
    categoryAr: 'المراجع المعتمدة ودستور القوانين',
    titleEn: 'Ministry Textbooks PDF & Formula Handbook',
    titleAr: 'كتب الوزارة الرسمية ودستور القوانين والمعادلات',
    taglineEn: 'Direct access to official Ministry PDF textbooks and quick formula lookup',
    taglineAr: 'تحميل وقراءة الكتب المدرسية الرسمية PDF ودليل القوانين الشامل',
    descriptionEn:
      'Access approved Ministry of Education PDF textbooks (Press ⌘B) and the Comprehensive Formula Sheet Handbook (Press ⌘J). Review the exact laws, definitions, and official equations for rapid exam revision.',
    descriptionAr:
      'تصفح وحمل الكتب المدرسية الرسمية الصادرة من وزارة التربية والتعليم (اضغط ⌘B) وافتح دستور القوانين والمعادلات التفاعلي (اضغط ⌘J) لمراجعة شاملة لجميع القوانين والمفاهيم الأساسية قبل الامتحانات.',
    highlightsEn: [
      'Official PDF books library accessible directly within the app (⌘B)',
      'Formula Sheet Handbook covering all math, physics & chemistry formulas (⌘J)',
      'Direct one-click navigation from any formula to its source chapter',
    ],
    highlightsAr: [
      'مكتبة كتب الوزارة الرسمية متاحة للقراءة والتحميل المباشر (⌘B)',
      'دستور القوانين المعتمد لجميع علاقات الرياضيات والفيزياء والكيمياء (⌘J)',
      'انتقال مباشر بضغطة زر من أي قانون في الدليل إلى فصله الدراسي',
    ],
    shortcutBadge: '⌘B / ⌘J',
    accentColor: '#14b8a6',
    accentBg: 'rgba(20, 184, 166, 0.1)',
    accentBorder: 'rgba(20, 184, 166, 0.3)',
    actionType: 'handbook',
    actionLabelEn: 'Open Formula Sheet',
    actionLabelAr: 'فتح دستور القوانين',
  },
  {
    id: 'desmos-accessibility',
    stepNumber: 7,
    categoryEn: 'Tools & Personalization',
    categoryAr: 'حاسبة ديسموس وتخصيص تجربة العرض',
    titleEn: 'Desmos 2D/3D Grapher & Accessibility Tools',
    titleAr: 'حاسبة ديسموس 2D/3D وأدوات التخصيص وسهولة الوصول',
    taglineEn: 'Day/Night/High-Contrast themes, scalable fonts & bilingual support',
    taglineAr: 'أوضاع النهاري والليلي والتباين الفائق، وتكبير الخط، وثنائية اللغة الكاملة',
    descriptionEn:
      'Plot equations, functions, and 3D vectors with the integrated Desmos Graphing Suite (Press ⌘D). Customize your learning workspace with Day, Night, or High-Contrast mode, A/A+/A++ font scaling, and bilingual Arabic/English switching.',
    descriptionAr:
      'ارسم الدوال والمعادلات الهندسية والمتجهات ثلاثية الأبعاد باستخدام حقيبة ديسموس المدمجة (اضغط ⌘D). خصص بيئة دراستك بأوضاع العرض: النهاري (Day)، الليلي (Night)، أو التباين الفائق (High Contrast)، مع تكبير الخط وثنائية اللغة.',
    highlightsEn: [
      'Desmos 2D/3D suite dockable or expandable (⌘D / Ctrl+D)',
      'High-contrast & scalable typography for eye comfort and accessibility',
      'Smartboard presentation mode for classroom touch displays',
    ],
    highlightsAr: [
      'حاسبة ديسموس 2D و 3D مدمجة كنافذة عائمة أو كاملة الشاشة (⌘D)',
      'أوضاع تباين عالي وتكبير الخط لراحة العين وتسهيل القراءة',
      'نمط السبورة الذكية لشاشات الفصول التفاعلية والعرض الصفي',
    ],
    shortcutBadge: '⌘D / Ctrl+D',
    accentColor: '#f43f5e',
    accentBg: 'rgba(244, 63, 94, 0.1)',
    accentBorder: 'rgba(244, 63, 94, 0.3)',
    actionType: 'desmos',
    actionLabelEn: 'Open Desmos 2D/3D',
    actionLabelAr: 'فتح حاسبة ديسموس',
  },
];

export const SiteTutorialModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
  onNavigateTab,
  onSelectSubject,
  onOpenSearch,
  onOpenFormulaHandbook,
  onOpenDesmos,
  onOpenOfficialBooks,
}) => {
  const isArabic = lang === 'ar';
  const isHighContrast = theme === 'high-contrast';
  const isLight = theme === 'light';

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [smartboardMode, setSmartboardMode] = useState<boolean>(() => {
    return localStorage.getItem('egbac_smartboard_mode') === 'true';
  });
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(() => {
    return localStorage.getItem('egbac_tutorial_completed') === 'true';
  });

  const touchStartXRef = useRef<number | null>(null);
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const step = TUTORIAL_STEPS[currentStepIndex];
  const totalSteps = TUTORIAL_STEPS.length;
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;

  // Auto-advance in auto-play mode
  useEffect(() => {
    if (!isOpen || !autoPlay) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < totalSteps - 1) return prev + 1;
        setAutoPlay(false);
        return prev;
      });
    }, 6500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isOpen, autoPlay, totalSteps]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        if (isArabic) {
          handlePrev();
        } else {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        if (isArabic) {
          handleNext();
        } else {
          handlePrev();
        }
      } else if (e.key === ' ') {
        e.preventDefault();
        setAutoPlay((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStepIndex, isArabic]);

  // Touch swipe support for mobile / tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartXRef.current;
    const swipeThreshold = 50; // px

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe Right
        if (isArabic) handleNext();
        else handlePrev();
      } else {
        // Swipe Left
        if (isArabic) handlePrev();
        else handleNext();
      }
    }
    touchStartXRef.current = null;
  };

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleClose = useCallback(() => {
    if (dontShowAgain) {
      localStorage.setItem('egbac_tutorial_completed', 'true');
    }
    onClose();
  }, [dontShowAgain, onClose]);

  const toggleSmartboard = () => {
    const next = !smartboardMode;
    setSmartboardMode(next);
    localStorage.setItem('egbac_smartboard_mode', String(next));
  };

  const handleExecuteAction = () => {
    handleClose();
    switch (step.actionType) {
      case 'interactive':
        onNavigateTab('interactive');
        break;
      case 'search':
        onOpenSearch?.();
        break;
      case 'handbook':
        onOpenFormulaHandbook?.();
        break;
      case 'desmos':
        onOpenDesmos?.();
        break;
      case 'books':
        onOpenOfficialBooks?.();
        break;
      case 'test':
        onNavigateTab('testGenerator');
        break;
      case 'overview':
      default:
        onNavigateTab('overview');
        if (onSelectSubject) onSelectSubject('all');
        break;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      dir={isArabic ? 'rtl' : 'ltr'}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tutorial-modal-title"
    >
      <div
        className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl transition-all flex flex-col overflow-hidden ${
          smartboardMode ? 'max-w-4xl text-lg' : ''
        } ${
          isHighContrast
            ? 'bg-black text-white border-cyan-400 shadow-cyan-900/50'
            : isLight
            ? 'bg-white text-slate-900 border-slate-200 shadow-slate-400/40'
            : 'bg-slate-950 text-slate-100 border-slate-800 shadow-black/80'
        }`}
        style={{
          maxHeight: '94vh',
        }}
      >
        {/* Top Decorative Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800/60 overflow-hidden">
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentStepIndex + 1) / totalSteps) * 100}%`,
              backgroundColor: step.accentColor,
            }}
          />
        </div>

        {/* Modal Header */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-slate-800/80 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
              style={{
                backgroundColor: step.accentBg,
                border: `1px solid ${step.accentBorder}`,
              }}
            >
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: step.accentColor }} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: step.accentBg,
                    color: step.accentColor,
                    border: `1px solid ${step.accentBorder}`,
                  }}
                >
                  {isArabic ? step.categoryAr : step.categoryEn}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {currentStepIndex + 1} / {totalSteps}
                </span>
              </div>
              <h2
                id="tutorial-modal-title"
                className={`text-base sm:text-lg font-black truncate mt-0.5 ${
                  isHighContrast ? 'text-white font-black' : isLight ? 'text-slate-900' : 'text-slate-100'
                }`}
              >
                {isArabic ? step.titleAr : step.titleEn}
              </h2>
            </div>
          </div>

          {/* Quick Utility Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Smartboard Mode Switcher */}
            <button
              onClick={toggleSmartboard}
              className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                smartboardMode
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border-slate-800'
              }`}
              title={
                isArabic
                  ? 'تبديل نمط السبورة الذكية (أزرار وخطوط أكبر للشاشات اللمسية الصفية)'
                  : 'Toggle Smartboard Display Mode (Bigger buttons for classroom touch displays)'
              }
            >
              <Tv className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isArabic ? 'السبورة الذكية' : 'Smartboard'}
              </span>
            </button>

            {/* Auto-Play Toggle */}
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                autoPlay
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 animate-pulse'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border-slate-800'
              }`}
              title={
                isArabic
                  ? autoPlay
                    ? 'إيقاف التشغيل التلقائي'
                    : 'تشغيل تلقائي للجولة'
                  : autoPlay
                  ? 'Pause auto tour'
                  : 'Play auto tour'
              }
            >
              {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all cursor-pointer"
              title={isArabic ? 'إغلاق الدليل (Esc)' : 'Close guide (Esc)'}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 flex-1">
          {/* Tagline / Subtitle Banner */}
          <div
            className="p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between gap-3 shadow-inner"
            style={{
              backgroundColor: step.accentBg,
              borderColor: step.accentBorder,
            }}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 shrink-0" style={{ color: step.accentColor }} />
              <span
                className="text-xs sm:text-sm font-bold leading-relaxed"
                style={{ color: step.accentColor }}
              >
                {isArabic ? step.taglineAr : step.taglineEn}
              </span>
            </div>
            {step.shortcutBadge && (
              <kbd className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-lg bg-black/50 text-white font-mono text-xs font-bold border border-white/20 shrink-0">
                {step.shortcutBadge}
              </kbd>
            )}
          </div>

          {/* Interactive Animated Visual Micro-Component for Step */}
          <div className="w-full rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5 shadow-xl relative overflow-hidden">
            {/* Step 1: Curriculum Tracks Preview */}
            {step.id === 'curriculum-tracks' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-cyan-500/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-cyan-400 flex items-center gap-1.5">
                      <EgyptFlag className="w-4 h-3 rounded" />
                      <span>{isArabic ? 'الثانوية العامة المصرية' : 'Thanaweya Amma'}</span>
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                      35 {isArabic ? 'فصلاً' : 'Ch.'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {isArabic
                      ? 'المنهج الوزاري المعتمد والمحدث كاملاً للعام 2025/2026'
                      : 'Official accredited 2025/2026 curriculum with complete syllabus'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-indigo-500/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-indigo-400 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-indigo-400" />
                      <span>{isArabic ? 'البكالوريا المصرية (EG-Bac)' : 'Egyptian Baccalaureate'}</span>
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                      22 {isArabic ? 'فصلاً' : 'Ch.'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {isArabic
                      ? 'نظام البكالوريا الحديث للعلوم والتكنولوجيا والتفكير النقدي'
                      : 'Advanced STEM critical-thinking baccalaureate system'}
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Virtual Labs Preview */}
            {step.id === 'virtual-labs' && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-black">
                  <div className="p-2 rounded-xl bg-slate-950 border border-cyan-500/30 text-cyan-300">
                    ⚡ {isArabic ? 'دينامو الحث 3D' : 'Dynamo 3D'}
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950 border border-emerald-500/30 text-emerald-300">
                    🔄 {isArabic ? 'دوائر رنين RLC' : 'RLC Resonance'}
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950 border border-rose-500/30 text-rose-300">
                    🔬 {isArabic ? 'الظاهرة الكهروضوئية' : 'Photoelectric'}
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-300">
                    🧪 {isArabic ? 'أطياف بور وليزر He-Ne' : 'Bohr & Laser'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-mono font-bold text-slate-300">
                      {isArabic ? 'أجهزة قياس نشطة: Fluke 87V + Oscilloscope' : 'Active Instruments: Fluke 87V + Oscilloscope'}
                    </span>
                  </div>
                  <span className="font-mono text-cyan-400 font-black">120 FPS</span>
                </div>
              </div>
            )}

            {/* Step 3: Search Preview */}
            {step.id === 'universal-search' && (
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-950 border border-purple-500/40 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Search className="w-4 h-4 text-purple-400 animate-pulse" />
                    <span className="font-mono text-purple-200">
                      {isArabic ? 'قانون أوم للدائرة المغلقة...' : "Ohm's Law for closed circuits..."}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px] font-bold">
                    ⌘K
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between px-1">
                  <span>{isArabic ? 'تصفية فورية في ١٠,٩١٠ مسألة وقانون وفصل' : 'Instant match across 10,910 databank problems & theorems'}</span>
                  <span className="text-emerald-400 font-bold">0.02s</span>
                </div>
              </div>
            )}

            {/* Step 4: Theory Preview */}
            {step.id === 'theory-lessons' && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-emerald-300 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    <span>{isArabic ? 'تأصيل رياضي وعلمي مدعوم بـ KaTeX' : 'Rigorous KaTeX Mathematical Formulations'}</span>
                  </span>
                  <span className="text-[10px] text-slate-400">187,214 {isArabic ? 'معادلة' : 'Formulas'}</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center text-xs text-emerald-400">
                  <MathRenderer math="E = h\nu = \frac{hc}{\lambda} \quad \Longleftrightarrow \quad eV_0 = \text{KE}_{\max}" lang={lang} />
                </div>
              </div>
            )}

            {/* Step 5: Databank Preview */}
            {step.id === 'databank-testing' && (
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-black">
                <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-1">
                  <span className="text-emerald-400">⭐ {isArabic ? 'تأسيسي' : 'Level 1'}</span>
                  <p className="text-slate-400 text-[9px]">{isArabic ? 'تطبيق مباشر' : 'Foundational'}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/30 space-y-1">
                  <span className="text-amber-400">⭐⭐ {isArabic ? 'متوسط' : 'Level 2'}</span>
                  <p className="text-slate-400 text-[9px]">{isArabic ? 'ربط مفاهيم' : 'Intermediate'}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-rose-500/30 space-y-1">
                  <span className="text-rose-400">⭐⭐⭐ {isArabic ? 'متقدم' : 'Level 3'}</span>
                  <p className="text-slate-400 text-[9px]">{isArabic ? 'تفكير نقدي عالي' : 'Challenging'}</p>
                </div>
              </div>
            )}

            {/* Step 6: Books Preview */}
            {step.id === 'official-books-handbook' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-teal-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-teal-400" />
                    <span className="font-bold text-slate-200">
                      {isArabic ? 'كتب الوزارة الرسمية PDF' : 'Official MoE PDF Books'}
                    </span>
                  </div>
                  <kbd className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-900 rounded text-teal-300">⌘B</kbd>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-teal-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-teal-400" />
                    <span className="font-bold text-slate-200">
                      {isArabic ? 'دستور القوانين والمعادلات' : 'Formula Sheet Handbook'}
                    </span>
                  </div>
                  <kbd className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-900 rounded text-teal-300">⌘J</kbd>
                </div>
              </div>
            )}

            {/* Step 7: Desmos Preview */}
            {step.id === 'desmos-accessibility' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-rose-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-rose-400" />
                    <span className="font-bold text-slate-200">
                      {isArabic ? 'حاسبة ديسموس 2D/3D' : 'Desmos 2D/3D Calculator'}
                    </span>
                  </div>
                  <kbd className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-900 rounded text-rose-300">⌘D</kbd>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="font-bold text-slate-200">
                      {isArabic ? 'وضع التباين الفائق ⚡' : 'High Contrast ⚡'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 font-bold">A / A+ / A++</span>
                </div>
              </div>
            )}
          </div>

          {/* Step Full Description */}
          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              isHighContrast ? 'text-slate-100 font-medium' : isLight ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            {isArabic ? step.descriptionAr : step.descriptionEn}
          </p>

          {/* Highlights Bullet Cards */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400">
              {isArabic ? 'أبرز المزايا وكيفية الاستخدام:' : 'Key Capabilities & Navigation Tips:'}
            </h4>
            <div className="grid grid-cols-1 gap-1.5">
              {(isArabic ? step.highlightsAr : step.highlightsEn).map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200 font-medium"
                >
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: step.accentColor }}
                  />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Navigation Buttons */}
        <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-950/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          {/* Left: Step Indicators & Don't show again checkbox */}
          <div className="flex items-center justify-between sm:justify-start gap-4">
            {/* Step Dots */}
            <div className="flex items-center gap-1.5">
              {TUTORIAL_STEPS.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentStepIndex
                      ? 'w-7 shadow-sm'
                      : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                  }`}
                  style={{
                    backgroundColor: idx === currentStepIndex ? step.accentColor : undefined,
                  }}
                  title={isArabic ? s.titleAr : s.titleEn}
                />
              ))}
            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-3.5 h-3.5 rounded accent-cyan-500 cursor-pointer"
              />
              <span className="truncate">
                {isArabic ? 'عدم الإظهار تلقائياً' : "Don't show on start"}
              </span>
            </label>
          </div>

          {/* Right: Navigation Controls */}
          <div className="flex items-center gap-2 justify-end">
            {/* Direct Action "Try It Now" Button */}
            {step.actionLabelEn && (
              <button
                onClick={handleExecuteAction}
                className={`py-2 px-3.5 rounded-xl border text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-sm active:scale-95 ${
                  smartboardMode ? 'py-3 px-5 text-sm' : ''
                }`}
                style={{
                  backgroundColor: step.accentBg,
                  borderColor: step.accentBorder,
                  color: step.accentColor,
                }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{isArabic ? step.actionLabelAr : step.actionLabelEn}</span>
              </button>
            )}

            {/* Previous Step Button */}
            {!isFirstStep && (
              <button
                onClick={handlePrev}
                className={`py-2 px-3 sm:px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-bold transition-all cursor-pointer flex items-center gap-1 active:scale-95 ${
                  smartboardMode ? 'py-3 px-5 text-sm' : ''
                }`}
              >
                {isArabic ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                <span>{isArabic ? 'السابق' : 'Previous'}</span>
              </button>
            )}

            {/* Next / Finish Button */}
            <button
              onClick={handleNext}
              className={`py-2 px-4 sm:px-5 rounded-xl text-slate-950 text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-lg active:scale-95 ${
                smartboardMode ? 'py-3 px-6 text-sm' : ''
              }`}
              style={{
                backgroundColor: step.accentColor,
              }}
            >
              <span>{isLastStep ? (isArabic ? 'ابدأ الآن' : 'Start Exploring') : (isArabic ? 'التالي' : 'Next')}</span>
              {isArabic ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
