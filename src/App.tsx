import React, { useState, useEffect, Suspense, lazy } from 'react';
import type { CurriculumType, Branch, Lesson, ThemeMode, FontSizeMode } from './types/curriculum';
import type { Language, UserRole } from './i18n/translations';
import { translations } from './i18n/translations';
import { thanaweyaCurriculum } from './data/thanaweyaData';
import { egBacCurriculum } from './data/egBacData';
import { SUBJECTS, getBranchesForSubject, getSubjectForBranch } from './data/subjects';
import { Navbar } from './components/Navbar';
import { CurriculumOverview } from './components/CurriculumOverview';
import type { BlueprintMode } from './components/TestGenerator';
import type { DesmosMode, DesmosLayout } from './components/DesmosSuite';
import { VisitorCounter } from './components/VisitorCounter';
import { Search, ShieldCheck, Command, Mail, X } from 'lucide-react';
import clipsatLogo from './assets/clipsat-logo.png';
import { EgyptFlag } from './components/EgyptFlag';
import { registerServiceWorker } from './core/pwa/pwaManager';

// Lazy-loaded heavy components, workstations & secondary modals
const LessonView = lazy(() => import('./components/LessonView').then(m => ({ default: m.LessonView })));
const TestGenerator = lazy(() => import('./components/TestGenerator').then(m => ({ default: m.TestGenerator })));
const VirtualLabsHub = lazy(() => import('./components/VirtualLabsHub').then(m => ({ default: m.VirtualLabsHub })));
const StudentAnalyticsDashboard = lazy(() => import('./components/StudentAnalyticsDashboard').then(m => ({ default: m.StudentAnalyticsDashboard })));
const DesmosSuite = lazy(() => import('./components/DesmosSuite').then(m => ({ default: m.DesmosSuite })));
const OfficialBooksModal = lazy(() => import('./components/OfficialBooksModal').then(m => ({ default: m.OfficialBooksModal })));
const SearchModal = lazy(() => import('./components/SearchModal').then(m => ({ default: m.SearchModal })));
const FormulaHandbook = lazy(() => import('./components/FormulaHandbook').then(m => ({ default: m.FormulaHandbook })));
const CurriculumEquivalency = lazy(() => import('./components/CurriculumEquivalency').then(m => ({ default: m.CurriculumEquivalency })));
const CertificateVerificationModal = lazy(() => import('./components/CertificateVerificationModal').then(m => ({ default: m.CertificateVerificationModal })));
const EnglishDictionaryModal = lazy(() => import('./components/EnglishDictionaryModal').then(m => ({ default: m.EnglishDictionaryModal })));
const EnglishAudioLabModal = lazy(() => import('./components/EnglishAudioLabModal').then(m => ({ default: m.EnglishAudioLabModal })));
const FrenchListeningStationModal = lazy(() => import('./components/FrenchListeningStationModal').then(m => ({ default: m.FrenchListeningStationModal })));
const ArabicGrammarModal = lazy(() => import('./components/ArabicGrammarModal').then(m => ({ default: m.ArabicGrammarModal })));
const AccessibilitySettingsModal = lazy(() => import('./components/AccessibilitySettingsModal').then(m => ({ default: m.AccessibilitySettingsModal })));
const SiteTutorialModal = lazy(() => import('./components/SiteTutorialModal').then(m => ({ default: m.SiteTutorialModal })));
const MathScratchpad = lazy(() => import('./core/math/MathScratchpad').then(m => ({ default: m.MathScratchpad })));
const PwaInstallPrompt = lazy(() => import('./components/PwaInstallPrompt').then(m => ({ default: m.PwaInstallPrompt })));
const TeacherAssignmentModal = lazy(() => import('./components/TeacherAssignmentModal').then(m => ({ default: m.TeacherAssignmentModal })));
const TeacherCertificationModal = lazy(() => import('./components/TeacherCertificationModal').then(m => ({ default: m.TeacherCertificationModal })));
const ParentProgressReportModal = lazy(() => import('./components/ParentProgressReportModal').then(m => ({ default: m.ParentProgressReportModal })));
const DownloadManagerModal = lazy(() => import('./components/DownloadManagerModal').then(m => ({ default: m.DownloadManagerModal })));
const MinistryResultsModal = lazy(() => import('./components/MinistryResultsModal').then(m => ({ default: m.MinistryResultsModal })));
const GovernorateAnalyticsModal = lazy(() => import('./components/GovernorateAnalyticsModal').then(m => ({ default: m.GovernorateAnalyticsModal })));
const EducationalSponsorshipModal = lazy(() => import('./components/EducationalSponsorshipModal').then(m => ({ default: m.EducationalSponsorshipModal })));
const LearningOutcomesModal = lazy(() => import('./components/LearningOutcomesModal').then(m => ({ default: m.LearningOutcomesModal })));
const DailyPrescriptionCard = lazy(() => import('./components/DailyPrescriptionCard').then(m => ({ default: m.DailyPrescriptionCard })));
const DailyPrescriptionModal = lazy(() => import('./components/DailyPrescriptionModal').then(m => ({ default: m.DailyPrescriptionModal })));
const SchoolOutreachModal = lazy(() => import('./components/SchoolOutreachModal').then(m => ({ default: m.SchoolOutreachModal })));
const UserProfileModal = lazy(() => import('./components/UserProfileModal').then(m => ({ default: m.UserProfileModal })));
import type { UserProfile, AcademicTrack } from './types/userProfile';
import { loadLocalUserProfile, saveLocalUserProfile, subscribeToUserProfile } from './services/userProfileService';
import type { Assignment } from './types/teacherAssignment';
import type { TeacherModalTab } from './components/TeacherAssignmentModal';
import type { PrescribedItem } from './types/adaptivePractice';
import { getAdaptiveState, completePrescriptionItem } from './services/adaptivePracticeEngine';

const ViewLoadingFallback: React.FC<{ messageAr?: string; messageEn?: string }> = ({
  messageAr = 'جاري تحميل المحتوى...',
  messageEn = 'Loading content...',
}) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
    <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 border-r-amber-500 animate-spin mb-4 shadow-lg shadow-indigo-500/20" />
    <p className="text-sm font-semibold text-slate-300 mb-1">{messageAr}</p>
    <p className="text-xs text-slate-500">{messageEn}</p>
  </div>
);

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [role, setRole] = useState<UserRole>(() => {
    const profile = loadLocalUserProfile();
    return (profile.role === 'teacher' ? 'teacher' : 'student');
  });
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('egbac_theme');
    if (saved === 'dark' || saved === 'light' || saved === 'high-contrast') {
      return saved;
    }
    return 'dark';
  });
  const [fontSize, setFontSize] = useState<FontSizeMode>(() => {
    const saved = localStorage.getItem('egbac_font_size');
    if (saved === 'normal' || saved === 'large' || saved === 'xlarge') {
      return saved;
    }
    return 'normal';
  });
  const parseRouteState = (): {
    subject: string;
    tab: string;
    blueprint?: BlueprintMode;
    verificationSerial?: string;
    openVerificationModal?: boolean;
  } => {
    try {
      const rawHash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
      const hash = rawHash.toLowerCase();
      const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
      let subject = params.get('subject') || '';
      let tab = params.get('tab') || '';
      let blueprint: BlueprintMode | undefined = undefined;
      let verificationSerial: string | undefined = undefined;
      let openVerificationModal = false;

      // Check query params for verification (e.g. ?verify=SERIAL)
      const verifyQuery = params.get('verify') || params.get('certificate') || params.get('cert');
      if (verifyQuery) {
        openVerificationModal = true;
        verificationSerial = verifyQuery;
      }

      // Check legacy hash params for verification, e.g. #verify, #certificate-verification, #verify?serial=...
      if (hash.startsWith('verify') || hash.startsWith('certificate-verification') || hash.startsWith('cert-verify')) {
        openVerificationModal = true;
        if (rawHash.includes('=')) {
          const serialPart = rawHash.split('=')[1];
          if (serialPart) verificationSerial = decodeURIComponent(serialPart);
        } else if (rawHash.includes('serial=')) {
          const match = rawHash.match(/serial=([^&]+)/);
          if (match && match[1]) verificationSerial = decodeURIComponent(match[1]);
        }
      }

      const bpParam = params.get('blueprint');
      if (bpParam === 'official_past_papers' || bpParam === 'official_thanawya_mock' || bpParam === 'diagnostic_benchmark') {
        blueprint = bpParam as BlueprintMode;
      }

      // Map legacy hash fragments to subject / tab (so old bookmarks continue to resolve)
      if (hash === 'physics' || hash === 'phys') subject = 'physics';
      else if (hash === 'chemistry' || hash === 'chem') subject = 'chemistry';
      else if (hash === 'biology' || hash === 'bio') subject = 'biology';
      else if (hash === 'math' || hash === 'mathematics') subject = 'mathematics';
      else if (hash === 'history' || hash === 'hist') subject = 'history';
      else if (hash === 'geography' || hash === 'geo') subject = 'geography';
      else if (hash === 'geology' || hash === 'geo-earth' || hash === 'earth') subject = 'geology';
      else if (hash === 'arabic' || hash === 'ar') subject = 'arabic';
      else if (hash === 'english' || hash === 'en' || hash === 'eng') subject = 'english';
      else if (hash === 'french' || hash === 'fr') subject = 'french';
      else if (hash === 'all') subject = 'all';
      else if (hash === 'labs' || hash === 'interactive') tab = 'interactive';
      else if (hash === 'physics-lab') { subject = 'physics'; tab = 'interactive'; }
      else if (hash === 'chemistry-lab') { subject = 'chemistry'; tab = 'interactive'; }
      else if (hash === 'biology-lab') { subject = 'biology'; tab = 'interactive'; }
      else if (hash === 'math-lab') { subject = 'mathematics'; tab = 'interactive'; }
      else if (hash === 'history-lab' || hash === 'timeline-lab') { subject = 'history'; tab = 'interactive'; }
      else if (hash === 'geography-lab' || hash === 'map-lab' || hash === 'geopolitical-lab') { subject = 'geography'; tab = 'interactive'; }
      else if (hash === 'geology-lab' || hash === 'earth-lab') { subject = 'geology'; tab = 'interactive'; }
      else if (hash === 'arabic-lab' || hash === 'grammar-lab') { subject = 'arabic'; tab = 'interactive'; }
      else if (hash === 'english-lab' || hash === 'audio-lab') { subject = 'english'; tab = 'interactive'; }
      else if (hash === 'french-lab' || hash === 'listening-lab') { subject = 'french'; tab = 'interactive'; }
      else if (hash === 'analytics' || hash === 'student-analytics' || hash === 'mastery' || hash === 'radar' || hash === 'predictive') tab = 'analytics';
      else if (hash === 'theory') tab = 'theory';
      else if (hash === 'tests' || hash === 'exams' || hash === 'testgenerator') tab = 'testGenerator';
      else if (hash === 'past-papers' || hash === 'pastpapers' || hash === 'official-exams' || hash === 'past-exam-papers') {
        tab = 'testGenerator';
        blueprint = 'official_past_papers';
      }
      else if (hash === 'exam-simulation' || hash === 'ministerial-simulation' || hash === 'ministerial-exam' || hash === 'simulation') {
        tab = 'testGenerator';
        blueprint = 'official_thanawya_mock';
      }
      else if (hash === 'drill' || hash === 'diagnostic-drill' || hash === 'sprint-drill') {
        tab = 'testGenerator';
        blueprint = 'quick_diagnostic_drill';
      }

      if (!subject) {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('egbac_selected_subject') : null;
        if (saved && (saved === 'all' || SUBJECTS.some((s) => s.id === saved))) {
          subject = saved;
        } else {
          subject = 'all';
        }
      }

      // CRITICAL: Eliminate all '#' from browser address bar immediately if any legacy hash was present
      if (typeof window !== 'undefined' && window.location.hash) {
        try {
          const cleanParams = new URLSearchParams(window.location.search);
          if (subject && subject !== 'all') cleanParams.set('subject', subject);
          if (tab && tab !== 'overview') cleanParams.set('tab', tab);
          if (blueprint) cleanParams.set('blueprint', blueprint);
          if (verificationSerial) cleanParams.set('verify', verificationSerial);
          const searchStr = cleanParams.toString() ? `?${cleanParams.toString()}` : '';
          window.history.replaceState(null, '', window.location.pathname + searchStr);
        } catch {}
      }

      return {
        subject,
        tab: tab || 'overview',
        blueprint,
        verificationSerial,
        openVerificationModal,
      };
    } catch {
      return { subject: 'all', tab: 'overview' };
    }
  };

  const initialRoute = parseRouteState();
  const [curriculum, setCurriculum] = useState<CurriculumType>('thanaweya');
  const [selectedSubject, setSelectedSubject] = useState<string>(initialRoute.subject);
  const [activeTab, setActiveTab] = useState<string>(initialRoute.tab);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isFormulaHandbookOpen, setIsFormulaHandbookOpen] = useState<boolean>(false);
  const [isDesmosOpen, setIsDesmosOpen] = useState<boolean>(false);
  const [isMathScratchpadOpen, setIsMathScratchpadOpen] = useState<boolean>(false);
  const [isOfficialBooksOpen, setIsOfficialBooksOpen] = useState<boolean>(false);
  const [isTutorialOpen, setIsTutorialOpen] = useState<boolean>(false);
  const [isEnglishDictionaryOpen, setIsEnglishDictionaryOpen] = useState<boolean>(false);
  const [isEnglishAudioLabOpen, setIsEnglishAudioLabOpen] = useState<boolean>(false);
  const [isFrenchListeningOpen, setIsFrenchListeningOpen] = useState<boolean>(false);
  const [isArabicGrammarOpen, setIsArabicGrammarOpen] = useState<boolean>(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState<boolean>(false);
  const [targetOfficialBookId, setTargetOfficialBookId] = useState<string | undefined>(undefined);
  const [desmosMode, setDesmosMode] = useState<DesmosMode>('2d');
  const [desmosLayout, setDesmosLayout] = useState<DesmosLayout>('floating');
  const [desmosPresetId, setDesmosPresetId] = useState<string | undefined>(undefined);
  const [testBlueprint, setTestBlueprint] = useState<BlueprintMode | undefined>(initialRoute.blueprint);
  const [isCertificateVerificationOpen, setIsCertificateVerificationOpen] = useState<boolean>(initialRoute.openVerificationModal || false);
  const [verificationTargetSerial, setVerificationTargetSerial] = useState<string>(initialRoute.verificationSerial || '');
  const [isTeacherAssignmentModalOpen, setIsTeacherAssignmentModalOpen] = useState<boolean>(false);
  const [teacherModalInitialTab, setTeacherModalInitialTab] = useState<TeacherModalTab>('student_solve');
  const [isTeacherCertModalOpen, setIsTeacherCertModalOpen] = useState<boolean>(false);
  const [isParentReportModalOpen, setIsParentReportModalOpen] = useState<boolean>(false);
  const [isDownloadManagerModalOpen, setIsDownloadManagerModalOpen] = useState<boolean>(false);
  const [isMinistryResultsModalOpen, setIsMinistryResultsModalOpen] = useState<boolean>(false);
  const [isGovernorateAnalyticsModalOpen, setIsGovernorateAnalyticsModalOpen] = useState<boolean>(false);
  const [isEducationalSponsorshipModalOpen, setIsEducationalSponsorshipModalOpen] = useState<boolean>(false);
  const [isLearningOutcomesModalOpen, setIsLearningOutcomesModalOpen] = useState<boolean>(false);
  const [isDailyPrescriptionOpen, setIsDailyPrescriptionOpen] = useState<boolean>(false);
  const [isSchoolOutreachOpen, setIsSchoolOutreachOpen] = useState<boolean>(false);
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile>(loadLocalUserProfile);
  const [activePrescribedItem, setActivePrescribedItem] = useState<PrescribedItem | undefined>(undefined);
  const [initialAssignmentCode, setInitialAssignmentCode] = useState<string>('');
  const [activeAssignmentForTest, setActiveAssignmentForTest] = useState<Assignment | undefined>(undefined);
  const [assignmentStudentName, setAssignmentStudentName] = useState<string>('');

  const handleStartPrescriptionPractice = (item: PrescribedItem) => {
    setActivePrescribedItem(item);
    setActiveTab('testGenerator');
    const sub = getSubjectForBranch(item.branchId, curriculum);
    if (sub) {
      setSelectedSubject(sub.id);
      localStorage.setItem('egbac_selected_subject', sub.id);
    }
  };

  const handleOpenOfficialBooks = (bookId?: string) => {
    setTargetOfficialBookId(bookId);
    setIsOfficialBooksOpen(true);
  };

  const handleOpenPastPapers = (subjectId?: string) => {
    if (subjectId) {
      setSelectedSubject(subjectId);
      localStorage.setItem('egbac_selected_subject', subjectId);
    }
    setTestBlueprint('official_past_papers');
    setActiveTab('testGenerator');
  };

  const handleOpenExamSimulation = (subjectId?: string) => {
    if (subjectId) {
      setSelectedSubject(subjectId);
      localStorage.setItem('egbac_selected_subject', subjectId);
    }
    setTestBlueprint('official_thanawya_mock');
    setActiveTab('testGenerator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDiagnosticDrill = (subjectId?: string) => {
    if (subjectId) {
      setSelectedSubject(subjectId);
      localStorage.setItem('egbac_selected_subject', subjectId);
    }
    setTestBlueprint('quick_diagnostic_drill');
    setActiveTab('testGenerator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseCertificateVerification = () => {
    setIsCertificateVerificationOpen(false);
    setVerificationTargetSerial('');
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      params.delete('verify');
      params.delete('certificate');
      params.delete('cert');
      const searchStr = params.toString() ? `?${params.toString()}` : '';
      window.history.replaceState(null, '', window.location.pathname + searchStr);
    }
  };

  const activeCurriculumData = curriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;

  // Listen for route changes (popstate and hashchange) to support instant deep links
  useEffect(() => {
    const handleRouteChange = () => {
      const parsed = parseRouteState();
      if (parsed.tab) setActiveTab(parsed.tab);
      if (parsed.subject && parsed.subject !== 'all') setSelectedSubject(parsed.subject);
      if (parsed.blueprint) setTestBlueprint(parsed.blueprint);
      if (parsed.openVerificationModal) {
        setIsCertificateVerificationOpen(true);
        if (parsed.verificationSerial) {
          setVerificationTargetSerial(parsed.verificationSerial);
        }
      }
    };
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  // Register Service Worker for PWA offline resilience
  useEffect(() => {
    registerServiceWorker();
  }, []);

  // Listen to user profile & Google auth state changes
  useEffect(() => {
    const unsubscribe = subscribeToUserProfile((newProfile) => {
      setUserProfile(newProfile);
      if (newProfile.role && (newProfile.role === 'student' || newProfile.role === 'teacher')) {
        setRole(newProfile.role);
      }
    });
    return unsubscribe;
  }, []);

  // Check assignment URL deep link (?asgn=... or ?asgnCode=...)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const packed = params.get('asgn');
    const code = params.get('asgnCode') || params.get('code');
    if (packed) {
      import('./services/teacherAssignmentService').then(({ decodeAssignmentFromUrl }) => {
        const decoded = decodeAssignmentFromUrl(packed);
        if (decoded) {
          setActiveAssignmentForTest(decoded);
          setSelectedSubject(decoded.subjectId);
          setActiveTab('testGenerator');
        }
      });
    } else if (code) {
      setInitialAssignmentCode(code);
      setIsTeacherAssignmentModalOpen(true);
    }
  }, []);

  // Auto-launch interactive navigation tour for first-time visitors
  useEffect(() => {
    try {
      const hasCompletedTutorial = localStorage.getItem('egbac_tutorial_completed');
      if (!hasCompletedTutorial) {
        const timer = setTimeout(() => {
          setIsTutorialOpen(true);
        }, 900);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  // Set Document Title & Direction based on Language
  useEffect(() => {
    document.title = lang === 'ar' ? 'منصة التعليم المصري - ثانوية وبكالوريا' : 'Egyptian Curriculum Platform - Thanaweya & Bac';
  }, [lang]);

  // Selected Branch & Lesson state (default to Chapter 1 Lesson 1 or first branch of selected subject)
  const [selectedBranch, setSelectedBranch] = useState<Branch>(() => {
    const initialSub = initialRoute.subject;
    if (initialSub !== 'all') {
      const branches = getBranchesForSubject(activeCurriculumData, initialSub);
      if (branches.length > 0) return branches[0];
    }
    return activeCurriculumData.branches[0];
  });
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(() => {
    const initialSub = initialRoute.subject;
    if (initialSub !== 'all') {
      const branches = getBranchesForSubject(activeCurriculumData, initialSub);
      if (branches.length > 0 && branches[0].chapters[0]?.lessons[0]) {
        return branches[0].chapters[0].lessons[0];
      }
    }
    return activeCurriculumData.branches[0].chapters[0].lessons[0];
  });

  const handleSubjectChange = (subjectId: string) => {
    setSelectedSubject(subjectId);
    localStorage.setItem('egbac_selected_subject', subjectId);
    if (subjectId !== 'all') {
      const branches = getBranchesForSubject(activeCurriculumData, subjectId);
      if (branches.length > 0) {
        setSelectedBranch(branches[0]);
        if (branches[0].chapters.length > 0 && branches[0].chapters[0].lessons.length > 0) {
          setSelectedLesson(branches[0].chapters[0].lessons[0]);
        }
      }
    }
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        if (subjectId !== 'all') {
          params.set('subject', subjectId);
        } else {
          params.delete('subject');
        }
        const searchStr = params.toString() ? `?${params.toString()}` : '';
        window.history.replaceState(null, '', window.location.pathname + searchStr);
      }
    } catch {}
  };

  // Sync with popstate & hashchange events for browser back/forward or direct links
  useEffect(() => {
    const handleRouteChange = () => {
      const route = parseRouteState();
      if (route.subject && route.subject !== selectedSubject) {
        setSelectedSubject(route.subject);
        localStorage.setItem('egbac_selected_subject', route.subject);
        if (route.subject !== 'all') {
          const branches = getBranchesForSubject(activeCurriculumData, route.subject);
          if (branches.length > 0) {
            setSelectedBranch(branches[0]);
            if (branches[0].chapters.length > 0 && branches[0].chapters[0].lessons.length > 0) {
              setSelectedLesson(branches[0].chapters[0].lessons[0]);
            }
          }
        }
      }
      if (route.tab && route.tab !== activeTab) {
        setActiveTab(route.tab);
      }
    };
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, [activeCurriculumData, selectedSubject, activeTab]);

  // Global safety guarantee: whenever navigation tab, subject, or curriculum changes, ensure all scroll locks are cleared
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.documentElement.removeAttribute('data-fullscreen-lab');
    }
  }, [activeTab, selectedSubject, curriculum]);

  // Sync html dir attribute (RTL / LTR)
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Sync html theme classes and localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'high-contrast');
    root.setAttribute('data-theme', theme);
    if (theme === 'light') {
      root.classList.add('light');
    } else if (theme === 'high-contrast') {
      root.classList.add('dark', 'high-contrast');
    } else {
      root.classList.add('dark');
    }
    localStorage.setItem('egbac_theme', theme);
  }, [theme]);

  // Sync html data-font-size attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
    localStorage.setItem('egbac_font_size', fontSize);
  }, [fontSize]);

  // Sync saved accessibility preferences on startup
  useEffect(() => {
    try {
      const mathScale = localStorage.getItem('egbac_math_scale') || '100';
      document.documentElement.setAttribute('data-math-scale', mathScale);
      const reducedMotion = localStorage.getItem('egbac_reduced_motion') === 'true';
      document.documentElement.setAttribute('data-reduced-motion', String(reducedMotion));
      const focusRings = localStorage.getItem('egbac_focus_rings') === 'true';
      document.documentElement.setAttribute('data-focus-rings', String(focusRings));
      const readingGuide = localStorage.getItem('egbac_reading_guide') === 'true';
      document.documentElement.setAttribute('data-reading-guide', String(readingGuide));
    } catch {}
  }, []);

  // Sync selected branch when curriculum switches
  useEffect(() => {
    const data = curriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;
    if (selectedSubject !== 'all') {
      const branches = getBranchesForSubject(data, selectedSubject);
      if (branches.length > 0) {
        setSelectedBranch(branches[0]);
        if (branches[0].chapters.length > 0 && branches[0].chapters[0].lessons.length > 0) {
          setSelectedLesson(branches[0].chapters[0].lessons[0]);
        }
        return;
      }
    }
    setSelectedBranch(data.branches[0]);
    setSelectedLesson(data.branches[0].chapters[0].lessons[0]);
  }, [curriculum, selectedSubject]);

  // Global keyboard shortcuts: Cmd+K (Search), Cmd+J (Formula Handbook), Cmd+D (Desmos Suite)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        setIsFormulaHandbookOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        setIsDesmosOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsOfficialBooksOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'o') {
        e.preventDefault();
        handleOpenPastPapers();
      }
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'v') {
        e.preventDefault();
        setIsCertificateVerificationOpen((prev) => !prev);
      }
      if (e.altKey && (e.key === 'd' || e.key === 'D' || e.code === 'KeyD')) {
        e.preventDefault();
        setIsEnglishDictionaryOpen((prev) => !prev);
      }
      if (e.altKey && (e.key === 'p' || e.key === 'P' || e.code === 'KeyP')) {
        e.preventDefault();
        setIsEnglishAudioLabOpen((prev) => !prev);
      }
      if (e.altKey && (e.key === 'f' || e.key === 'F' || e.code === 'KeyF')) {
        e.preventDefault();
        setIsFrenchListeningOpen((prev) => !prev);
      }
      if (e.altKey && (e.key === 'a' || e.key === 'A' || e.code === 'KeyA')) {
        e.preventDefault();
        setIsArabicGrammarOpen((prev) => !prev);
      }
      if (e.altKey && (e.key === 'u' || e.key === 'U' || e.code === 'KeyU')) {
        e.preventDefault();
        setIsAccessibilityOpen((prev) => !prev);
      }
      if (e.altKey && (e.key === 'e' || e.key === 'E' || e.code === 'KeyE')) {
        e.preventDefault();
        handleOpenExamSimulation();
      }
      if (e.altKey && (e.key === 's' || e.key === 'S' || e.code === 'KeyS')) {
        e.preventDefault();
        handleOpenDiagnosticDrill();
      }
      if (e.altKey && (e.key === 'r' || e.key === 'R' || e.code === 'KeyR')) {
        e.preventDefault();
        setIsDailyPrescriptionOpen((prev) => !prev);
      }
      if (e.altKey && (e.key === 'k' || e.key === 'K' || e.code === 'KeyK')) {
        e.preventDefault();
        setIsSchoolOutreachOpen((prev) => !prev);
      }
      if (e.altKey && (e.key === 'l' || e.key === 'L' || e.code === 'KeyL')) {
        e.preventDefault();
        setIsUserProfileModalOpen((prev) => !prev);
      }
      if (e.altKey && (e.key === 'q' || e.key === 'Q' || e.code === 'KeyQ')) {
        e.preventDefault();
        handleOpenTeacherAssignments('teacher_question_bank');
      }
      if (e.altKey && (e.key === 't' || e.key === 'T' || e.code === 'KeyT')) {
        e.preventDefault();
        handleOpenTeacherAssignments(role === 'teacher' ? 'teacher_grading' : 'student_solve');
      }
      if (e.key === '?' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const target = e.target as HTMLElement | null;
        if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
          return;
        }
        e.preventDefault();
        setIsTutorialOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Event listener for opening English Dictionary from anywhere in the app
  useEffect(() => {
    const handleOpenDict = () => setIsEnglishDictionaryOpen(true);
    window.addEventListener('open-english-dictionary', handleOpenDict);
    return () => window.removeEventListener('open-english-dictionary', handleOpenDict);
  }, []);

  // Event listener for opening English Audio & Phonetics Lab from anywhere in the app
  useEffect(() => {
    const handleOpenAudioLab = () => setIsEnglishAudioLabOpen(true);
    window.addEventListener('open-english-audio-lab', handleOpenAudioLab);
    return () => window.removeEventListener('open-english-audio-lab', handleOpenAudioLab);
  }, []);

  // Event listener for opening French Listening & Audio Station from anywhere in the app
  useEffect(() => {
    const handleOpenFrench = () => setIsFrenchListeningOpen(true);
    window.addEventListener('open-french-listening-lab', handleOpenFrench);
    return () => window.removeEventListener('open-french-listening-lab', handleOpenFrench);
  }, []);

  // Event listener for opening Arabic Grammar & Rhetoric Studio from anywhere in the app
  useEffect(() => {
    const handleOpenArabic = () => setIsArabicGrammarOpen(true);
    window.addEventListener('open-arabic-grammar-lab', handleOpenArabic);
    return () => window.removeEventListener('open-arabic-grammar-lab', handleOpenArabic);
  }, []);

  // Event listener for opening Universal Accessibility & Display Calibration from anywhere in the app
  useEffect(() => {
    const handleOpenA11y = () => setIsAccessibilityOpen(true);
    window.addEventListener('open-accessibility-settings', handleOpenA11y);
    return () => window.removeEventListener('open-accessibility-settings', handleOpenA11y);
  }, []);

  // Event listener for opening Certificate Verification Portal from anywhere in the app
  useEffect(() => {
    const handleOpenVerification = (e: Event) => {
      const customEvent = e as CustomEvent<{ serial?: string }>;
      if (customEvent.detail?.serial) {
        setVerificationTargetSerial(customEvent.detail.serial);
      }
      setIsCertificateVerificationOpen(true);
    };
    window.addEventListener('open-certificate-verification', handleOpenVerification);
    return () => window.removeEventListener('open-certificate-verification', handleOpenVerification);
  }, []);

  // Event listener for opening Site Navigation Tutorial from anywhere in the app
  useEffect(() => {
    const handleOpenTutorial = () => setIsTutorialOpen(true);
    window.addEventListener('open-tutorial', handleOpenTutorial);
    return () => window.removeEventListener('open-tutorial', handleOpenTutorial);
  }, []);

  // Event listener for opening Desmos with mode/preset from anywhere in the app
  useEffect(() => {
    const handleOpenDesmos = (e: Event) => {
      const customEvent = e as CustomEvent<{ mode?: DesmosMode; presetId?: string; layout?: DesmosLayout }>;
      if (customEvent.detail?.mode) setDesmosMode(customEvent.detail.mode);
      if (customEvent.detail?.presetId) setDesmosPresetId(customEvent.detail.presetId);
      if (customEvent.detail?.layout) setDesmosLayout(customEvent.detail.layout);
      setIsDesmosOpen(true);
    };
    window.addEventListener('open-desmos', handleOpenDesmos);
    return () => window.removeEventListener('open-desmos', handleOpenDesmos);
  }, []);

  useEffect(() => {
    const handleOpenPrescription = () => setIsDailyPrescriptionOpen(true);
    window.addEventListener('open-daily-prescription', handleOpenPrescription);
    return () => window.removeEventListener('open-daily-prescription', handleOpenPrescription);
  }, []);

  useEffect(() => {
    const handleOpenOutreach = () => setIsSchoolOutreachOpen(true);
    window.addEventListener('open-school-outreach', handleOpenOutreach);
    return () => window.removeEventListener('open-school-outreach', handleOpenOutreach);
  }, []);

  const handleLanguageToggle = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleRoleToggle = () => {
    setRole((prev) => {
      const nextRole: UserRole = prev === 'student' ? 'teacher' : 'student';
      const updatedProfile: UserProfile = {
        ...userProfile,
        role: nextRole,
        updatedAt: Date.now(),
      };
      saveLocalUserProfile(updatedProfile);
      setUserProfile(updatedProfile);
      return nextRole;
    });
  };

  const handleOpenTeacherAssignments = (tab?: TeacherModalTab) => {
    setTeacherModalInitialTab(tab || (role === 'teacher' ? 'teacher_create' : 'student_solve'));
    setIsTeacherAssignmentModalOpen(true);
  };

  const handleTrackChange = (newTrack: AcademicTrack) => {
    const updatedProfile: UserProfile = {
      ...userProfile,
      academicTrack: newTrack,
      updatedAt: Date.now(),
    };
    saveLocalUserProfile(updatedProfile);
    setUserProfile(updatedProfile);
  };

  const handleSelectLesson = (b: Branch, l: Lesson, tab?: string) => {
    setSelectedBranch(b);
    setSelectedLesson(l);
    const sub = getSubjectForBranch(b.id, curriculum);
    if (sub && selectedSubject !== 'all' && selectedSubject !== sub.id) {
      setSelectedSubject(sub.id);
      localStorage.setItem('egbac_selected_subject', sub.id);
    }
    if (tab) {
      setActiveTab(tab);
    }
  };

  const handleSearchNavigate = (
    curType: CurriculumType,
    b: Branch,
    l: Lesson,
    tab: string
  ) => {
    if (curriculum !== curType) {
      setCurriculum(curType);
    }
    setSelectedBranch(b);
    setSelectedLesson(l);
    setActiveTab(tab);
  };

  const t = translations[lang];

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-clip font-sans flex flex-col transition-colors duration-300 ${
      theme === 'high-contrast'
        ? 'bg-black text-white selection:bg-yellow-400 selection:text-black'
        : theme === 'light'
        ? 'bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white'
        : 'bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white'
    }`}>
      {/* Header Navigation */}
      <Navbar
        lang={lang}
        onLanguageToggle={handleLanguageToggle}
        role={role}
        onRoleToggle={handleRoleToggle}
        theme={theme}
        onThemeChange={setTheme}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        curriculum={curriculum}
        onCurriculumChange={setCurriculum}
        academicTrack={userProfile.academicTrack}
        onTrackChange={handleTrackChange}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenFormulaHandbook={() => setIsFormulaHandbookOpen(true)}
        onOpenDesmos={() => setIsDesmosOpen((prev) => !prev)}
        onOpenOfficialBooks={() => handleOpenOfficialBooks()}
        onOpenMathScratchpad={() => setIsMathScratchpadOpen(true)}
        onOpenTutorial={() => setIsTutorialOpen(true)}
        onOpenPastPapers={handleOpenPastPapers}
        onOpenCertificateVerification={() => setIsCertificateVerificationOpen(true)}
        onOpenEnglishDictionary={() => setIsEnglishDictionaryOpen(true)}
        onOpenEnglishAudioLab={() => setIsEnglishAudioLabOpen(true)}
        onOpenFrenchListening={() => setIsFrenchListeningOpen(true)}
        onOpenArabicGrammar={() => setIsArabicGrammarOpen(true)}
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
        onOpenExamSimulation={handleOpenExamSimulation}
        onOpenDiagnosticDrill={handleOpenDiagnosticDrill}
        onOpenTeacherAssignments={() => handleOpenTeacherAssignments(role === 'teacher' ? 'teacher_create' : 'student_solve')}
        onOpenTeacherQuestionBank={() => handleOpenTeacherAssignments('teacher_question_bank')}
        onOpenTeacherGrading={() => handleOpenTeacherAssignments('teacher_grading')}
        onOpenTeacherCertification={() => setIsTeacherCertModalOpen(true)}
        onOpenParentReport={() => setIsParentReportModalOpen(true)}
        onOpenDownloadManager={() => setIsDownloadManagerModalOpen(true)}
        onOpenMinistryResults={() => setIsMinistryResultsModalOpen(true)}
        onOpenGovernorateAnalytics={() => setIsGovernorateAnalyticsModalOpen(true)}
        onOpenEducationalSponsorship={() => setIsEducationalSponsorshipModalOpen(true)}
        onOpenLearningOutcomes={() => setIsLearningOutcomesModalOpen(true)}
        onOpenDailyPrescription={() => setIsDailyPrescriptionOpen(true)}
        onOpenSchoolOutreach={() => setIsSchoolOutreachOpen(true)}
        onOpenUserProfile={() => setIsUserProfileModalOpen(true)}
        userProfile={userProfile}
        selectedSubject={selectedSubject}
        onSubjectChange={handleSubjectChange}
        curriculumData={activeCurriculumData}
      />

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-6 sm:space-y-8 min-w-0 overflow-x-clip">
        {/* Quick Search Bar (Opens Universal Search Modal) */}
        <div className="relative no-print">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className={`w-full rounded-2xl py-3 px-4 flex items-center justify-between text-xs shadow-md transition-all text-left rtl:text-right cursor-pointer group border ${
              theme === 'high-contrast'
                ? 'bg-black border-2 border-cyan-400 text-white hover:border-yellow-400'
                : theme === 'light'
                ? 'bg-white border-slate-300 text-slate-500 hover:border-indigo-400 hover:shadow-lg'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900'
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <Search className={`w-4 h-4 shrink-0 transition-colors ${
                theme === 'high-contrast' ? 'text-yellow-400' : 'text-indigo-500'
              }`} />
              <span className="font-medium text-xs sm:text-sm truncate">
                <span className="inline sm:hidden">
                  {lang === 'ar'
                    ? 'البحث الشامل في ٧٧,٠٠٠ مسألة...'
                    : 'Universal Search across 77,000 problems...'}
                </span>
                <span className="hidden sm:inline">
                  {lang === 'ar'
                    ? 'البحث الشامل في ٧٧,٠٠٠ مسألة وقانون وفصل عبر ٣٦ مادة معتمدة... (اضغط للبحث أو ⌘K)'
                    : 'Universal Search across 77,000 problems, theorems & lessons across 36 accredited subjects... (Click or ⌘K)'}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden md:inline-flex items-center px-2 py-0.5 text-[11px] font-semibold rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                {lang === 'ar' ? '٣٨٥ فصلاً • ٧٧,٠٠٠ مسألة' : '385 Ch • 77k Qs'}
              </span>
              <kbd className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono rounded-md border font-semibold ${
                theme === 'high-contrast'
                  ? 'bg-yellow-400 text-black border-yellow-300'
                  : theme === 'light'
                  ? 'bg-slate-100 text-slate-600 border-slate-300'
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}>
                <Command className="w-3 h-3" />
                <span>K</span>
              </kbd>
            </div>
          </button>
        </div>

        {/* Global Instant Search Modal */}
        {isSearchOpen && (
          <Suspense fallback={null}>
            <SearchModal
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
              lang={lang}
              theme={theme}
              onNavigate={handleSearchNavigate}
            />
          </Suspense>
        )}

        {/* Global Formula Sheet Handbook Modal */}
        {isFormulaHandbookOpen && (
          <Suspense fallback={null}>
            <FormulaHandbook
              isOpen={isFormulaHandbookOpen}
              onClose={() => setIsFormulaHandbookOpen(false)}
              lang={lang}
              theme={theme}
              currentCurriculum={curriculum}
              onNavigateToLesson={(curType, b, l) => {
                if (curriculum !== curType) {
                  setCurriculum(curType);
                }
                setSelectedBranch(b);
                setSelectedLesson(l);
                setActiveTab('theory');
              }}
            />
          </Suspense>
        )}

        {/* Global Desmos Math Suite Widget / Modal */}
        {isDesmosOpen && (
          <Suspense fallback={null}>
            <DesmosSuite
              isOpen={isDesmosOpen}
              onClose={() => setIsDesmosOpen(false)}
              lang={lang}
              theme={theme}
              initialMode={desmosMode}
              initialPresetId={desmosPresetId}
              layout={desmosLayout}
              onLayoutChange={setDesmosLayout}
            />
          </Suspense>
        )}

        {/* Global Official Ministry PDF Books Modal */}
        {isOfficialBooksOpen && (
          <Suspense fallback={null}>
            <OfficialBooksModal
              isOpen={isOfficialBooksOpen}
              onClose={() => {
                setIsOfficialBooksOpen(false);
                setTargetOfficialBookId(undefined);
              }}
              lang={lang}
              theme={theme}
              initialBookId={targetOfficialBookId}
            />
          </Suspense>
        )}

        {/* Global English Academic Dictionary Modal */}
        {isEnglishDictionaryOpen && (
          <Suspense fallback={null}>
            <EnglishDictionaryModal
              isOpen={isEnglishDictionaryOpen}
              onClose={() => setIsEnglishDictionaryOpen(false)}
              lang={lang}
              theme={theme}
            />
          </Suspense>
        )}

        {/* Global English Audio & Phonetics Lab Modal */}
        {isEnglishAudioLabOpen && (
          <Suspense fallback={null}>
            <EnglishAudioLabModal
              isOpen={isEnglishAudioLabOpen}
              onClose={() => setIsEnglishAudioLabOpen(false)}
              lang={lang}
              theme={theme}
            />
          </Suspense>
        )}

        {/* Global French Listening & Audio Studio Modal */}
        {isFrenchListeningOpen && (
          <Suspense fallback={null}>
            <FrenchListeningStationModal
              isOpen={isFrenchListeningOpen}
              onClose={() => setIsFrenchListeningOpen(false)}
              lang={lang}
              theme={theme}
            />
          </Suspense>
        )}

        {/* Global Arabic Grammar & Rhetoric Studio Modal */}
        {isArabicGrammarOpen && (
          <Suspense fallback={null}>
            <ArabicGrammarModal
              isOpen={isArabicGrammarOpen}
              onClose={() => setIsArabicGrammarOpen(false)}
              lang={lang}
              theme={theme}
            />
          </Suspense>
        )}

        {/* Global Universal Accessibility & Visual Calibration Suite Modal */}
        {isAccessibilityOpen && (
          <Suspense fallback={null}>
            <AccessibilitySettingsModal
              isOpen={isAccessibilityOpen}
              onClose={() => setIsAccessibilityOpen(false)}
              lang={lang}
              theme={theme}
              onThemeChange={setTheme}
              fontSize={fontSize}
              onFontSizeChange={setFontSize}
            />
          </Suspense>
        )}

        {/* Interactive Site Navigation Tutorial Modal (PCs, Mobiles, Tablets, Smartboards) */}
        {isTutorialOpen && (
          <Suspense fallback={null}>
            <SiteTutorialModal
              isOpen={isTutorialOpen}
              onClose={() => setIsTutorialOpen(false)}
              lang={lang}
              theme={theme}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                setIsTutorialOpen(false);
              }}
              onSelectSubject={(subjectId) => {
                handleSubjectChange(subjectId);
                setIsTutorialOpen(false);
              }}
              onOpenSearch={() => {
                setIsTutorialOpen(false);
                setIsSearchOpen(true);
              }}
              onOpenFormulaHandbook={() => {
                setIsTutorialOpen(false);
                setIsFormulaHandbookOpen(true);
              }}
              onOpenDesmos={() => {
                setIsTutorialOpen(false);
                setIsDesmosOpen(true);
              }}
              onOpenOfficialBooks={() => {
                setIsTutorialOpen(false);
                handleOpenOfficialBooks();
              }}
            />
          </Suspense>
        )}

        {/* Global Math & KaTeX Scratchpad Modal */}
        {isMathScratchpadOpen && (
          <Suspense fallback={null}>
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
              <div className="relative w-full max-w-3xl">
                <button
                  onClick={() => setIsMathScratchpadOpen(false)}
                  className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white border border-slate-700 shadow-xl cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <MathScratchpad lang={lang} />
              </div>
            </div>
          </Suspense>
        )}

        {/* Global Ministerial Certificate Verification Portal Modal */}
        {isCertificateVerificationOpen && (
          <Suspense fallback={null}>
            <CertificateVerificationModal
              isOpen={isCertificateVerificationOpen}
              onClose={handleCloseCertificateVerification}
              initialSerial={verificationTargetSerial}
              lang={lang}
              onViewCertificate={(_cert) => {
                handleCloseCertificateVerification();
                setActiveTab('analytics');
              }}
            />
          </Suspense>
        )}

        {/* Teacher Assignment Platform Modal */}
        {isTeacherAssignmentModalOpen && (
          <Suspense fallback={null}>
            <TeacherAssignmentModal
              isOpen={isTeacherAssignmentModalOpen}
              onClose={() => setIsTeacherAssignmentModalOpen(false)}
              lang={lang}
              theme={theme}
              initialCode={initialAssignmentCode}
              initialTab={teacherModalInitialTab}
              onOpenTeacherCertification={() => setIsTeacherCertModalOpen(true)}
              onStartAssignmentTest={(assignment, name) => {
                setActiveAssignmentForTest(assignment);
                setAssignmentStudentName(name);
                setSelectedSubject(assignment.subjectId);
                setActiveTab('testGenerator');
                setIsTeacherAssignmentModalOpen(false);
              }}
            />
          </Suspense>
        )}

        {/* Teacher Certification Program & Digital Diploma Modal */}
        {isTeacherCertModalOpen && (
          <Suspense fallback={null}>
            <TeacherCertificationModal
              isOpen={isTeacherCertModalOpen}
              onClose={() => setIsTeacherCertModalOpen(false)}
              lang={lang}
              onOpenVerification={(serial) => {
                setVerificationTargetSerial(serial);
                setIsCertificateVerificationOpen(true);
                setIsTeacherCertModalOpen(false);
              }}
            />
          </Suspense>
        )}

        {/* Parent Weekly Digest (WhatsApp / SMS) Modal */}
        {isParentReportModalOpen && (
          <Suspense fallback={null}>
            <ParentProgressReportModal
              isOpen={isParentReportModalOpen}
              onClose={() => setIsParentReportModalOpen(false)}
              lang={lang}
              theme={theme}
            />
          </Suspense>
        )}

        {/* Offline Study Pack Download Manager Modal */}
        {isDownloadManagerModalOpen && (
          <Suspense fallback={null}>
            <DownloadManagerModal
              isOpen={isDownloadManagerModalOpen}
              onClose={() => setIsDownloadManagerModalOpen(false)}
              lang={lang}
              theme={theme}
            />
          </Suspense>
        )}

        {/* Ministry Results One-Way Linkage & Score Calibration Modal */}
        {isMinistryResultsModalOpen && (
          <Suspense fallback={null}>
            <MinistryResultsModal
              isOpen={isMinistryResultsModalOpen}
              onClose={() => setIsMinistryResultsModalOpen(false)}
            />
          </Suspense>
        )}

        {/* Egyptian Governorates & Regional Equity Analytics Modal */}
        {isGovernorateAnalyticsModalOpen && (
          <Suspense fallback={null}>
            <GovernorateAnalyticsModal
              isOpen={isGovernorateAnalyticsModalOpen}
              onClose={() => setIsGovernorateAnalyticsModalOpen(false)}
            />
          </Suspense>
        )}

        {/* Sustainable Platform & Free Educational Sponsorship Modal */}
        {isEducationalSponsorshipModalOpen && (
          <Suspense fallback={null}>
            <EducationalSponsorshipModal
              isOpen={isEducationalSponsorshipModalOpen}
              onClose={() => setIsEducationalSponsorshipModalOpen(false)}
            />
          </Suspense>
        )}

        {/* Learning Outcomes & Academic Impact Evaluation Modal */}
        {isLearningOutcomesModalOpen && (
          <Suspense fallback={null}>
            <LearningOutcomesModal
              isOpen={isLearningOutcomesModalOpen}
              onClose={() => setIsLearningOutcomesModalOpen(false)}
            />
          </Suspense>
        )}

        {/* Daily Adaptive Prescription Modal */}
        {isDailyPrescriptionOpen && (
          <Suspense fallback={null}>
            <DailyPrescriptionModal
              isOpen={isDailyPrescriptionOpen}
              onClose={() => setIsDailyPrescriptionOpen(false)}
              onStartPrescribedPractice={handleStartPrescriptionPractice}
              theme={theme}
            />
          </Suspense>
        )}

        {/* School Outreach & Printable QR Flyer Modal */}
        {isSchoolOutreachOpen && (
          <Suspense fallback={null}>
            <SchoolOutreachModal
              isOpen={isSchoolOutreachOpen}
              onClose={() => setIsSchoolOutreachOpen(false)}
            />
          </Suspense>
        )}

        {/* User Profile, Google Authentication & Local Storage Customization Modal */}
        {isUserProfileModalOpen && (
          <Suspense fallback={null}>
            <UserProfileModal
              isOpen={isUserProfileModalOpen}
              onClose={() => setIsUserProfileModalOpen(false)}
              lang={lang}
              theme={theme}
              onProfileUpdated={(updated) => {
                setUserProfile(updated);
                if (updated.role && (updated.role === 'student' || updated.role === 'teacher')) {
                  setRole(updated.role);
                }
              }}
            />
          </Suspense>
        )}

        {/* PWA Home Screen Installation Prompt (Offline Ready) */}
        <Suspense fallback={null}>
          <PwaInstallPrompt lang={lang} theme={theme} />
        </Suspense>

        {/* Tab View Router */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <Suspense fallback={null}>
              <DailyPrescriptionCard
                theme={theme}
                onStartPrescribedPractice={handleStartPrescriptionPractice}
              />
            </Suspense>
            <CurriculumOverview
              lang={lang}
              theme={theme}
              curriculum={activeCurriculumData}
              onSelectLesson={handleSelectLesson}
              onNavigateTab={setActiveTab}
              onOpenOfficialBooks={() => handleOpenOfficialBooks()}
              selectedSubject={selectedSubject}
              onSelectSubject={handleSubjectChange}
            />
          </div>
        )}

        {activeTab === 'equivalency' && (
          <Suspense fallback={<ViewLoadingFallback messageAr="جاري تحميل دليل المعادلات ومنظومة المقارنة..." messageEn="Loading curriculum equivalency framework..." />}>
            <CurriculumEquivalency
              lang={lang}
              theme={theme}
              onNavigateTrack={(track, branchId) => {
                if (curriculum !== track) {
                  setCurriculum(track);
                }
                const data = track === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;
                let targetBranch = data.branches[0];
                if (branchId) {
                  const found = data.branches.find((b) => b.id === branchId);
                  if (found) targetBranch = found;
                }
                setSelectedBranch(targetBranch);
                setSelectedLesson(targetBranch.chapters[0].lessons[0]);
                setActiveTab('overview');
              }}
            />
          </Suspense>
        )}

        {(activeTab === 'theory' ||
          activeTab === 'solvedExamples' ||
          activeTab === 'exerciseProblems' ||
          activeTab === 'databank' ||
          activeTab === 'lessonPlan' ||
          activeTab === 'worksheet') && (
          <Suspense fallback={<ViewLoadingFallback messageAr="جاري تحميل محتوى الدرس..." messageEn="Loading lesson workspace..." />}>
            <LessonView
              lang={lang}
              theme={theme}
              role={role}
              lesson={selectedLesson}
              branch={selectedBranch}
              curriculum={activeCurriculumData}
              activeSubTab={activeTab}
              onSubTabChange={setActiveTab}
              onSelectLesson={handleSelectLesson}
              onOpenDesmos={(targetMode = '2d') => {
                setDesmosMode(targetMode);
                setIsDesmosOpen(true);
              }}
              onOpenOfficialBooks={handleOpenOfficialBooks}
            />
          </Suspense>
        )}

        {activeTab === 'interactive' && (
          <Suspense fallback={<ViewLoadingFallback messageAr="جاري تحميل معامل المحاكاة ثلاثية الأبعاد..." messageEn="Loading 3D interactive virtual laboratories..." />}>
            <VirtualLabsHub
              lang={lang}
              theme={theme}
              currentCurriculum={activeCurriculumData}
              selectedSubject={selectedSubject}
              onOpenDesmos={(targetMode = '2d') => {
                setDesmosMode(targetMode);
                setIsDesmosOpen(true);
              }}
            />
          </Suspense>
        )}

        {activeTab === 'testGenerator' && (
          <Suspense fallback={<ViewLoadingFallback messageAr="جاري تحميل محطة الاختبارات ونموذج البابل شيت..." messageEn="Loading exam workstation & OMR bubble sheet simulator..." />}>
            <TestGenerator
              lang={lang}
              theme={theme}
              currentCurriculum={curriculum}
              onOpenFormulaHandbook={() => setIsFormulaHandbookOpen(true)}
              onOpenDesmos={(targetMode = '2d') => {
                setDesmosMode(targetMode);
                setIsDesmosOpen(true);
              }}
              initialSubject={selectedSubject}
              initialBlueprint={testBlueprint}
              initialAssignment={activeAssignmentForTest}
              studentName={assignmentStudentName}
              onAssignmentSubmitted={() => {
                setActiveAssignmentForTest(undefined);
              }}
              initialPrescribedItem={activePrescribedItem}
              onPrescriptionItemCompleted={(item) => {
                const targetKpId = item?.knowledgePointId || activePrescribedItem?.knowledgePointId;
                if (targetKpId) {
                  const state = getAdaptiveState();
                  completePrescriptionItem(state, targetKpId, 300);
                }
                setActivePrescribedItem(undefined);
              }}
            />
          </Suspense>
        )}

        {activeTab === 'analytics' && (
          <Suspense fallback={<ViewLoadingFallback messageAr="جاري تحميل لوحة المؤشرات والتحليلات الأكاديمية..." messageEn="Loading academic analytics dashboard & mastery radar..." />}>
            <StudentAnalyticsDashboard
              lang={lang}
              theme={theme}
              curriculum={curriculum}
              onNavigateTab={setActiveTab}
              onStartTargetedQuiz={(subjectId) => {
                setSelectedSubject(subjectId);
                setTestBlueprint('all');
                setActiveTab('testGenerator');
              }}
              onStartDiagnosticExam={() => {
                setSelectedSubject('all');
                setTestBlueprint('diagnostic_benchmark');
                setActiveTab('testGenerator');
              }}
              onStartPastPapers={handleOpenPastPapers}
            />
          </Suspense>
        )}
      </main>

      {/* Footer */}
      <footer className={`w-full max-w-full overflow-x-clip border-t py-10 text-xs no-print transition-colors ${
        theme === 'high-contrast'
          ? 'border-cyan-500/50 bg-black text-white'
          : theme === 'light'
          ? 'border-slate-200 bg-white text-slate-600'
          : 'border-slate-800 bg-slate-950 text-slate-400'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-8 min-w-0">
          {/* Visitor Counter - strictly displayed at the footer of the Home Page only */}
          {activeTab === 'overview' && (
            <div className="animate-in fade-in duration-300 w-full max-w-full min-w-0 overflow-x-clip">
              <VisitorCounter lang={lang} theme={theme} />
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left rtl:md:text-right">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 shrink-0">
                <img src={clipsatLogo} alt="ClipSAT Logo" className="h-10 sm:h-11 w-auto object-contain drop-shadow-sm" />
                <EgyptFlag className="h-5 sm:h-6 w-auto rounded-[3px] shadow-xs ring-1 ring-black/15 dark:ring-white/20" />
              </div>
              <div className="space-y-1">
                <p className={`font-bold text-sm flex items-center justify-center md:justify-start gap-1.5 ${
                  theme === 'high-contrast' ? 'text-yellow-400' : theme === 'light' ? 'text-slate-900' : 'text-slate-200'
                }`}>
                  <ShieldCheck className={`w-4.5 h-4.5 ${
                    theme === 'high-contrast' ? 'text-cyan-400' : theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'
                  }`} />
                  <span>{t.copyright}</span>
                </p>
                <p className={`text-xs max-w-2xl ${
                  theme === 'high-contrast' ? 'text-slate-200' : theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                }`}>{t.moeReferenceNote}</p>
              </div>
            </div>

            <div className={`flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3 text-xs font-bold ${
              theme === 'high-contrast' ? 'text-yellow-400' : theme === 'light' ? 'text-indigo-600' : 'text-cyan-400'
            }`}>
              <span>ClipSAT for Egypt</span>
              <span className="opacity-40">•</span>
              <span>moe.gov.eg</span>
              <span className="opacity-40">•</span>
              <span>Thanaweya Amma 2026</span>
              <span className="opacity-40">•</span>
              <span>EG-Bac STEM</span>
            </div>
          </div>

          {/* Contact for Error Reports and Suggestions */}
          <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${
            theme === 'high-contrast'
              ? 'border-cyan-500/30 text-white'
              : theme === 'light'
              ? 'border-slate-200 text-slate-600'
              : 'border-slate-800/80 text-slate-400'
          }`}>
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <span className={`inline-flex items-center gap-1.5 font-medium ${
                theme === 'high-contrast' ? 'text-cyan-300' : theme === 'light' ? 'text-slate-700' : 'text-slate-300'
              }`}>
                <Mail className={`w-3.5 h-3.5 shrink-0 ${
                  theme === 'high-contrast' ? 'text-yellow-400' : theme === 'light' ? 'text-indigo-600' : 'text-emerald-400'
                }`} />
                <span>{t.footerContactPrompt}</span>
              </span>
              <a
                href="mailto:admin@clipsat.org?subject=ClipSAT%20Egypt%20-%20Error%20Report%20%2F%20Suggestion"
                className={`inline-flex items-center gap-1.5 font-mono font-bold px-2.5 py-1 rounded-md border transition-all hover:scale-[1.02] shadow-xs ${
                  theme === 'high-contrast'
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 underline'
                    : theme === 'light'
                    ? 'border-indigo-200 text-indigo-700 bg-indigo-50/90 hover:bg-indigo-100 hover:border-indigo-300'
                    : 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 hover:border-emerald-400/50'
                }`}
                title="admin@clipsat.org"
              >
                <span>admin@clipsat.org</span>
                <span className="text-[10px] opacity-75">↗</span>
              </a>
            </div>

            <div className="text-[11px] opacity-75">
              {lang === 'ar' ? 'الاستجابة السريعة للملاحظات والتدقيق الأكاديمي المستمر' : 'Fast academic review & continuous quality updates'}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
