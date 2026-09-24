import React, { useState, useEffect, useMemo } from 'react';
import type { Curriculum, ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  FlaskRound as Flask,
  FileSpreadsheet,
  ChevronDown,
  Printer,
  Compass,
  Headphones,
  Globe,
  Mountain,
  Brain,
  TrendingUp,
  Binary,
  Orbit,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../core/labs/useNativeLabFullscreen';
import { MathLab, type MathTab } from './labs/MathLab';
import { PhysicsLab, type PhysicsTab } from './labs/PhysicsLab';
import { ChemistryLab, type ChemTab } from './labs/ChemistryLab';
import { BiologyLab, type BioTab } from './labs/BiologyLab';
import { HistoryTimelineStudio } from './labs/HistoryTimelineStudio';
import { GeopoliticalMapStudio } from './labs/GeopoliticalMapStudio';
import { GeologyEarthStudio } from './labs/GeologyEarthStudio';
import { LogicStudio } from './labs/LogicStudio';
import { PsychologyStudio } from './labs/PsychologyStudio';
import { EconomicsStatisticsStudio } from './labs/EconomicsStatisticsStudio';
import { EnglishAudioPhoneticsStudio } from './labs/EnglishAudioPhoneticsStudio';
import { FrenchAudioStudio } from './labs/FrenchAudioStudio';
import { ArabicGrammarStudio } from './labs/ArabicGrammarStudio';
import { ComputerScienceInformaticsStudio } from './labs/ComputerScienceInformaticsStudio';
import { SpacePlanetaryStudio } from './labs/SpacePlanetaryStudio';
import { GermanLanguageStudio } from './labs/GermanLanguageStudio';
import { ItalianLanguageStudio } from './labs/ItalianLanguageStudio';
import { SpanishLanguageStudio } from './labs/SpanishLanguageStudio';
import { ChineseLanguageStudio } from './labs/ChineseLanguageStudio';
import { IslamicStudiesStudio } from './labs/IslamicStudiesStudio';
import { ChristianHeritageStudio } from './labs/ChristianHeritageStudio';
import { NationalCivicsStudio } from './labs/NationalCivicsStudio';
import { BusinessModelingStudio } from './labs/BusinessModelingStudio';
import { FineArtsArchitectureStudio } from './labs/FineArtsArchitectureStudio';
import { MusicTheoryStudio } from './labs/MusicTheoryStudio';
import { AgriculturalTechnologyStudio } from './labs/AgriculturalTechnologyStudio';
import { IndustrialEngineeringStudio } from './labs/IndustrialEngineeringStudio';
import { CommercialFinanceStudio } from './labs/CommercialFinanceStudio';
import { TourismHospitalityStudio } from './labs/TourismHospitalityStudio';
import { RenewableEnergyStudio } from './labs/RenewableEnergyStudio';
import { ArduinoRoboticsStudio } from './labs/ArduinoRoboticsStudio';
import { GuidedExperimentsModal } from './labs/GuidedExperimentsModal';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import type { LabDiscipline } from '../services/labReportService';
import { Users, Scale, BookOpen, Church, Briefcase, Palette, Music, Sprout, Wrench, Landmark, Hotel, Leaf, Bot } from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  currentCurriculum: Curriculum;
  selectedSubject?: string;
  onOpenDesmos?: (mode?: '2d' | '3d' | 'scientific' | 'geometry') => void;
}

type LabId = 'math' | 'physics' | 'chemistry' | 'biology' | 'geology' | 'history' | 'geography' | 'languages' | 'philosophy' | 'psychology' | 'economics_stat' | 'cs_informatics' | 'earth_space' | 'civics' | 'islamic_studies' | 'christian_studies' | 'business' | 'fine_arts' | 'music' | 'agriculture' | 'industrial' | 'commercial' | 'tourism' | 'renewable' | 'robotics';

export const VirtualLabsHub: React.FC<Props> = ({
  lang,
  theme = 'dark',
  currentCurriculum,
  selectedSubject = 'all',
  onOpenDesmos,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Map selected subject to active lab
  const getInitialLab = (): LabId => {
    if (selectedSubject === 'physics') return 'physics';
    if (selectedSubject === 'chemistry') return 'chemistry';
    if (selectedSubject === 'biology') return 'biology';
    if (selectedSubject === 'geology') return 'geology';
    if (selectedSubject === 'earth_space') return 'earth_space';
    if (selectedSubject === 'philosophy') return 'philosophy';
    if (selectedSubject === 'psychology') return 'psychology';
    if (selectedSubject === 'history') return 'history';
    if (selectedSubject === 'geography') return 'geography';
    if (selectedSubject === 'economics_stat') return 'economics_stat';
    if (selectedSubject === 'cs_informatics') return 'cs_informatics';
    if (selectedSubject === 'civics') return 'civics';
    if (selectedSubject === 'islamic_studies') return 'islamic_studies';
    if (selectedSubject === 'christian_studies') return 'christian_studies';
    if (selectedSubject === 'business_entrepreneurship' || selectedSubject === 'business') return 'business';
    if (selectedSubject === 'fine_arts_architecture') return 'fine_arts';
    if (selectedSubject === 'music_theory' || selectedSubject === 'music') return 'music';
    if (selectedSubject === 'agriculture' || selectedSubject === 'agricultural_sciences') return 'agriculture';
    if (selectedSubject === 'industrial' || selectedSubject === 'industrial_engineering') return 'industrial';
    if (selectedSubject === 'commercial' || selectedSubject === 'commercial_sciences' || selectedSubject === 'banking') return 'commercial';
    if (selectedSubject === 'tourism' || selectedSubject === 'tourism_hospitality') return 'tourism';
    if (selectedSubject === 'renewable' || selectedSubject === 'renewable_energy' || selectedSubject === 'sustainability') return 'renewable';
    if (selectedSubject === 'robotics' || selectedSubject === 'robotics_mechatronics') return 'robotics';
    if (selectedSubject === 'arabic' || selectedSubject === 'english' || selectedSubject === 'french' || selectedSubject === 'german' || selectedSubject === 'italian' || selectedSubject === 'spanish') return 'languages';
    return 'math';
  };

  const [activeLab, setActiveLab] = useState<LabId>(getInitialLab);
  const [activeMathTab, setActiveMathTab] = useState<MathTab>('calculus');
  const [activePhysTab, setActivePhysTab] = useState<PhysicsTab>('circuits');
  const [activeChemTab, setActiveChemTab] = useState<ChemTab>('equilibrium');
  const [activeBioTab, setActiveBioTab] = useState<BioTab>('anatomy_atlas');
  const [activeLangSubLab, setActiveLangSubLab] = useState<'english' | 'french' | 'arabic' | 'german' | 'italian' | 'spanish' | 'chinese'>('english');
  const [isGuidedModalOpen, setIsGuidedModalOpen] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [reportExpId, setReportExpId] = useState<string>('phys-exp-1');
  const [showAllLabsOverride, setShowAllLabsOverride] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sciences' | 'math' | 'engineering' | 'humanities' | 'languages_arts'>('all');
  const {
    isFullscreen: isHubFullscreen,
    toggleFullscreen: toggleHubFullscreen,
    exitFullscreen: exitHubFullscreen,
  } = useNativeLabFullscreen();

  // Reset override whenever subject changes from menu
  useEffect(() => {
    setShowAllLabsOverride(false);
  }, [selectedSubject]);

  // Sync if selectedSubject prop changes
  useEffect(() => {
    if (selectedSubject === 'physics') setActiveLab('physics');
    else if (selectedSubject === 'chemistry') setActiveLab('chemistry');
    else if (selectedSubject === 'biology') setActiveLab('biology');
    else if (selectedSubject === 'geology') setActiveLab('geology');
    else if (selectedSubject === 'earth_space') setActiveLab('earth_space');
    else if (selectedSubject === 'philosophy') setActiveLab('philosophy');
    else if (selectedSubject === 'psychology') setActiveLab('psychology');
    else if (selectedSubject === 'economics_stat') setActiveLab('economics_stat');
    else if (selectedSubject === 'cs_informatics') setActiveLab('cs_informatics');
    else if (selectedSubject === 'civics') setActiveLab('civics');
    else if (selectedSubject === 'islamic_studies') setActiveLab('islamic_studies');
    else if (selectedSubject === 'christian_studies') setActiveLab('christian_studies');
    else if (selectedSubject === 'business_entrepreneurship' || selectedSubject === 'business') setActiveLab('business');
    else if (selectedSubject === 'fine_arts_architecture') setActiveLab('fine_arts');
    else if (selectedSubject === 'music_theory' || selectedSubject === 'music') setActiveLab('music');
    else if (selectedSubject === 'agriculture' || selectedSubject === 'agricultural_sciences') setActiveLab('agriculture');
    else if (selectedSubject === 'industrial' || selectedSubject === 'industrial_engineering') setActiveLab('industrial');
    else if (selectedSubject === 'commercial' || selectedSubject === 'commercial_sciences' || selectedSubject === 'banking') setActiveLab('commercial');
    else if (selectedSubject === 'tourism' || selectedSubject === 'tourism_hospitality') setActiveLab('tourism');
    else if (selectedSubject === 'renewable' || selectedSubject === 'renewable_energy' || selectedSubject === 'sustainability') setActiveLab('renewable');
    else if (selectedSubject === 'robotics' || selectedSubject === 'robotics_mechatronics') setActiveLab('robotics');
    else if (selectedSubject === 'mathematics') setActiveLab('math');
    else if (selectedSubject === 'history') setActiveLab('history');
    else if (selectedSubject === 'geography') setActiveLab('geography');
    else if (selectedSubject === 'arabic' || selectedSubject === 'english' || selectedSubject === 'french' || selectedSubject === 'german' || selectedSubject === 'italian' || selectedSubject === 'spanish' || selectedSubject === 'chinese') {
      setActiveLab('languages');
      if (selectedSubject === 'arabic') setActiveLangSubLab('arabic');
      else if (selectedSubject === 'french') setActiveLangSubLab('french');
      else if (selectedSubject === 'german') setActiveLangSubLab('german');
      else if (selectedSubject === 'italian') setActiveLangSubLab('italian');
      else if (selectedSubject === 'spanish') setActiveLangSubLab('spanish');
      else if (selectedSubject === 'chinese') setActiveLangSubLab('chinese');
      else if (selectedSubject === 'english') setActiveLangSubLab('english');
    }
  }, [selectedSubject]);

  // Compute contextual experiment ID matching the current sub-lab tab
  const getContextualReportExpId = (): string => {
    if (activeLab === 'physics') {
      switch (activePhysTab) {
        case 'circuits':
          return 'phys-exp-1';
        case 'photoelectric':
          return 'phys-exp-2';
        case 'dynamo':
        case 'magnetism':
        case 'induction_3d':
          return 'phys-exp-3';
        case 'resonance':
        case 'optics':
        case 'optics_3d':
          return 'phys-exp-4';
        case 'electronics':
          return 'phys-exp-5';
        case 'atom_3d':
        case 'atomic_lasers':
          return 'phys-exp-6';
        default:
          return 'phys-exp-1';
      }
    }
    if (activeLab === 'chemistry') {
      switch (activeChemTab) {
        case 'equilibrium':
          return 'chem-exp-1';
        case 'titration':
          return 'chem-exp-2';
        case 'electrochemistry':
        case 'electrochem_3d':
          return 'chem-exp-3';
        case 'qualitative':
        case 'transition':
          return 'chem-exp-3';
        case 'organic':
          return 'chem-exp-4';
        case 'molecular_3d':
          return 'chem-exp-5';
        default:
          return 'chem-exp-1';
      }
    }
    if (activeLab === 'biology') {
      switch (activeBioTab) {
        case 'anatomy_atlas':
        case 'sarcomere':
        case 'skeleton':
        case 'plant':
          return 'bio-exp-1';
        case 'dna':
          return 'bio-exp-2';
        case 'genetics':
          return 'bio-exp-3';
        case 'endocrine':
          return 'bio-exp-4';
        case 'menstrual':
          return 'bio-exp-5';
        case 'immunity':
          return 'bio-exp-6';
        case 'microscope':
          return 'bio-exp-7';
        case 'macromolecule_3d':
          return 'bio-exp-8';
        case 'bioenergetics':
          return 'bio-exp-9';
        default:
          return 'bio-exp-1';
      }
    }
    // activeLab === 'math'
    switch (activeMathTab) {
      case 'calculus':
      case 'related_rates_optimization':
        return 'math-exp-1';
      case 'mechanics':
        return 'math-exp-2';
      case 'geometry3d':
        return 'math-exp-3';
      case 'matrix':
      case 'pascal':
      case 'probability':
        return 'math-exp-4';
      case 'complex':
        return 'math-exp-5';
      case 'volumes_revolution':
        return 'math-exp-6';
      case 'conics':
        return 'math-exp-7';
      case 'fourier_series':
        return 'math-exp-8';
      case 'slope_fields':
        return 'math-exp-9';
      case 'linear_programming':
        return 'math-exp-10';
      default:
        return 'math-exp-1';
    }
  };

  interface LabCardItem {
    id: LabId;
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    icon: any;
    color: string;
    badge: string;
    gradient: string;
    activeBg: string;
    tagline: string;
  }

  const LABS: LabCardItem[] = [
    {
      id: 'math' as LabId,
      titleEn: 'Math Lab',
      titleAr: 'مختبر الرياضيات',
      subtitleEn: 'Calculus, 3D Vectors, Complex Argand & Dynamics',
      subtitleAr: 'التفاضل، الفراغية، الأعداد المركبة وأرجاند، والميكانيكا',
      icon: Calculator,
      color: 'indigo',
      badge: 'Statics & Analysis',
      gradient: 'from-blue-600 via-indigo-600 to-violet-600',
      activeBg: 'bg-indigo-600 text-white shadow-indigo-600/30',
      tagline: isArabic
        ? 'مستوى أرجاند وديموافر، احتكاك المستويات، الفراغية 3D، وديناميكا المقذوفات'
        : 'Argand plane & De Moivre, inclined friction, 3D geometry & projectile ballistics',
    },
    {
      id: 'physics' as LabId,
      titleEn: 'Physics Lab',
      titleAr: 'مختبر الفيزياء',
      subtitleEn: '3D Quantum Atom, Circuits & Semiconductor Laser',
      subtitleAr: 'استوديو الذرة الكمية 3D، دوائر كيرشوف وأشباه الموصلات والليزر',
      icon: Atom,
      color: 'cyan',
      badge: 'Electrodynamics & Quantum',
      gradient: 'from-cyan-600 via-sky-600 to-blue-600',
      activeBg: 'bg-cyan-600 text-white shadow-cyan-600/30',
      tagline: isArabic
        ? 'استوديو تشتت رذرفورد وبور وليزر He-Ne ثلاثي الأبعاد، دوائر كيرشوف وأشباه الموصلات وأشعة إكس'
        : '3D Rutherford & Bohr atom, He-Ne laser resonator, Kirchhoff circuits, p-n diodes & Coolidge X-rays',
    },
    {
      id: 'chemistry' as LabId,
      titleEn: 'Chemistry Lab',
      titleAr: 'مختبر الكيمياء',
      subtitleEn: '3D VSEPR Molecules, Metallurgy Alloys & Equilibrium',
      subtitleAr: 'هندسة الجزيئات الفراغية 3D، بلورات السبائك، والاتزان والتخليق العضوي',
      icon: FlaskConical,
      color: 'emerald',
      badge: 'Analytical & Physical',
      gradient: 'from-emerald-600 via-teal-600 to-green-600',
      activeBg: 'bg-emerald-600 text-white shadow-emerald-600/30',
      tagline: isArabic
        ? 'استوديو VSEPR ثلاثي الأبعاد والسبائك المعدنية، توجيه حلقة البنزين والأسترة والاتزان'
        : '3D VSEPR molecular geometry, transition metal crystal alloys, benzene directing & esterification',
    },
    {
      id: 'biology' as LabId,
      titleEn: 'Biology Lab',
      titleAr: 'مختبر الأحياء',
      subtitleEn: '3D B-DNA Denaturation, tRNA, Chromatin & Skeletal Atlas',
      subtitleAr: 'التهجين الحراري لـ DNA والكروماتين 3D، المناعة وأطلس العظام',
      icon: Dna,
      color: 'rose',
      badge: 'Cytology & Molecular',
      gradient: 'from-rose-600 via-pink-600 to-purple-600',
      activeBg: 'bg-rose-600 text-white shadow-rose-600/30',
      tagline: isArabic
        ? 'استوديو تفكك DNA عند 100°م والتحام tRNA وتكثيف الكروماتين 100,000x، وأطلس العظام والمناعة'
        : '3D DNA 100°C denaturation & hybridization, tRNA codon recognition, 100,000x chromatin compaction & immunity',
    },
    {
      id: 'history' as LabId,
      titleEn: 'History Studio',
      titleAr: 'استوديو التاريخ',
      subtitleEn: 'Timeline, Strategic Maps Theater, Treaties Vault & HOTS Causality',
      subtitleAr: 'الخط الزمني، مسرح العمليات والخرائط، أرشيف المعاهدات، ومحلل الأسباب',
      icon: Compass,
      color: 'amber',
      badge: 'Chronology & Strategy',
      gradient: 'from-amber-600 via-orange-600 to-yellow-600',
      activeBg: 'bg-amber-600 text-white shadow-amber-600/30',
      tagline: isArabic
        ? 'استوديو تاريخ مصر التفاعلي: خرائط معارك وتمركزات عسكرية، نصوص المعاهدات، ومحلل الأسباب والنتائج'
        : 'Interactive Egyptian History Studio: Strategic battle theater maps, primary treaties archive & causal chains',
    },
    {
      id: 'geography' as LabId,
      titleEn: 'Geopolitical Map Studio',
      titleAr: 'استوديو الجغرافيا والخرائط',
      subtitleEn: 'UNCLOS Maritime Zones, Morphology Calculator, Dispute Hotspots & Blocs',
      subtitleAr: 'المناطق المائية الدولية، حاسبة الشكل، بؤر النزاعات الحدودية، والتكتلات الاقتصادية',
      icon: Globe,
      color: 'teal',
      badge: 'UNCLOS & Geopolitics',
      gradient: 'from-teal-600 via-emerald-600 to-cyan-700',
      activeBg: 'bg-teal-600 text-white shadow-teal-600/30',
      tagline: isArabic
        ? 'استوديو الخرائط الجيوسياسية: المناطق المائية وفقاً لاتفاقية الأمم المتحدة UNCLOS، بؤر النزاعات، التكتلات الكبرى، ومحلل أشكال الدول'
        : 'Geopolitical Map Studio: UNCLOS maritime delimitation zones, hotspot dispute simulator, economic blocs & state morphology index',
    },
    {
      id: 'geology' as LabId,
      titleEn: 'Earth & Environmental Studio',
      titleAr: 'استوديو علوم الأرض والبيئة',
      subtitleEn: '7 Crystal Systems, Bowen Reaction Series, Red Sea Rift & Isostasy',
      subtitleAr: 'الأنظمة البلورية السبعة، متسلسلة بوين، أخدود البحر الأحمر، والتوازن الإيزوستاتيكي',
      icon: Mountain,
      color: 'amber',
      badge: 'Crystallography & Tectonics',
      gradient: 'from-amber-600 via-stone-700 to-emerald-700',
      activeBg: 'bg-amber-600 text-white shadow-amber-600/30',
      tagline: isArabic
        ? 'استوديو الجيولوجيا والبيئة: الأنظمة البلورية السبعة، مقياس موهس، متسلسلة تفاعلات بوين، تكتونية الألواح، والقطاعات الطبقية'
        : 'Earth & Environmental Studio: 7 crystal systems, Mohs scratch tester, Bowen series, plate tectonics & stratigraphic cross-sections',
    },
    {
      id: 'languages' as LabId,
      titleEn: 'Languages & Audio',
      titleAr: 'مختبر اللغات والصوتيات',
      subtitleEn: 'English Listening & Phonetics, French Audio Station & Arabic Grammar',
      subtitleAr: 'صوتيات واستماع الإنجليزية، محطة الاستماع الفرنسية، واستوديو النحو والبلاغة',
      icon: Headphones,
      color: 'violet',
      badge: 'Acoustics & Syntax',
      gradient: 'from-violet-600 via-purple-600 to-indigo-600',
      activeBg: 'bg-violet-600 text-white shadow-violet-600/30',
      tagline: isArabic
        ? 'مختبر اللغات المتقدم: استماع وتدريب صوتي تفاعلي للإنجليزية والفرنسية، ومحلل الإعراب والبلاغة العربية'
        : 'Advanced Languages Lab: Interactive English & French listening audio stations and Arabic grammar & rhetoric analyzer',
    },
    {
      id: 'philosophy' as LabId,
      titleEn: 'Applied Logic & AI Studio',
      titleAr: 'استوديو المنطق والذكاء الاصطناعي',
      subtitleEn: 'Truth Tables, Syllogism Validator, Mill Inductive Methods, Fuzzy AI & Bioethics Matrix',
      subtitleAr: 'جداول الصدق الرمزية، القياس الأرسطي، طرق مل الاستقرائية، المنطق المرن، ومصفوفة البيوتيقا',
      icon: Brain,
      color: 'purple',
      badge: 'Formal Logic & Axiomatics',
      gradient: 'from-purple-600 via-violet-600 to-indigo-700',
      activeBg: 'bg-purple-600 text-white shadow-purple-600/30',
      tagline: isArabic
        ? 'استوديو المنطق التطبيقي والأخلاقيات: جداول الصدق، قياس أرسطو، طرق مل الخمس، المنطق المرن بالذكاء الاصطناعي، ومصفوفة البيوتيقا'
        : 'Applied Logic Studio: Propositional truth tables, Aristotelian syllogism, Mill inductive methods, fuzzy AI logic & bioethics matrix',
    },
    {
      id: 'psychology' as LabId,
      titleEn: 'Psychology & Social Dynamics Studio',
      titleAr: 'استوديو علم النفس والاجتماع التفاعلي',
      subtitleEn: 'Conditioning, Ebbinghaus Forgetting Curve, Lewin Conflicts & Social Dynamics',
      subtitleAr: 'الاشتراط الكلاسيكي، منحنى إبنجهاوس للنسيان، صراعات ليفين، وديناميات التفاعل الجمعي',
      icon: Users,
      color: 'pink',
      badge: 'Cognition & Dynamics',
      gradient: 'from-pink-600 via-rose-600 to-purple-700',
      activeBg: 'bg-pink-600 text-white shadow-pink-600/30',
      tagline: isArabic
        ? 'استوديو علم النفس والاجتماع: محاكي نظريات التعلم، استبقاء الذاكرة، مصفوفة كيرت ليفين، والحيل الدفاعية وديناميات المجتمع'
        : 'Psychology & Sociology Studio: Learning theory paradigms, memory retention, Kurt Lewin conflict matrix, defense mechanisms & collective dynamics',
    },
    {
      id: 'economics_stat' as LabId,
      titleEn: 'Economics & Applied Statistics Studio',
      titleAr: 'استوديو الاقتصاد والإحصاء التطبيقي',
      subtitleEn: 'Market Equilibrium, Keynesian Multiplier, Pearson Correlation & Normal Curve',
      subtitleAr: 'توازن السوق والمرونة، مضاعف الاستثمار الكينزي، ارتباط بيرسون والتوزيع الطبيعي المعياري',
      icon: TrendingUp,
      color: 'amber',
      badge: 'Econometrics & Statistics',
      gradient: 'from-amber-600 via-orange-600 to-yellow-600',
      activeBg: 'bg-amber-600 text-white shadow-amber-600/30',
      tagline: isArabic
        ? 'استوديو الاقتصاد والإحصاء التطبيقي: محاكي توازن السوق ومرونة الطلب، التدفق الدائري ومضاعف الاستثمار الكينزي، معامل ارتباط بيرسون وسبيرمان، شجرة الاحتمالات وبايرز، ومحاكي منحنى التوزيع الطبيعي المعياري Z-Score'
        : 'Economics & Applied Statistics Studio: Market equilibrium & elasticity simulator, circular flow & Keynesian multiplier, Pearson & Spearman correlation lab, conditional probability & Bayes explorer, and Gaussian normal curve & standard Z-score engine',
    },
    {
      id: 'cs_informatics' as LabId,
      titleEn: 'Computer Science & AI Studio',
      titleAr: 'استوديو علوم الحاسب والذكاء الاصطناعي',
      subtitleEn: 'Logic Gates, Algorithm Visualizer, SQL Sandbox, IPv4 Subnetting & Neural Playground',
      subtitleAr: 'بوابات المنطق الرقمي، خوارزميات الترتيب والبحث، استعلامات SQL، حساب الشبكات والشبكات العصبية',
      icon: Binary,
      color: 'violet',
      badge: 'Boolean Logic & Algorithms',
      gradient: 'from-violet-600 via-indigo-600 to-purple-700',
      activeBg: 'bg-indigo-600 text-white shadow-indigo-600/30',
      tagline: isArabic
        ? 'استوديو علوم الحاسب والمعلوماتية والذكاء الاصطناعي: محاكي الدوائر المنطقية وجداول الصدق، متتبع الخوارزميات خطوة بخطوة، منصة SQL التفاعلية، حاسبة الشبكات وعناوين IP، وملعب الشبكات العصبية العميقة'
        : 'Computer Science & AI Studio: Digital logic gate circuit builder, sorting/searching algorithm tracer, interactive SQL sandbox, IPv4/CIDR subnet calculator, and neural network decision boundary playground',
    },
    {
      id: 'earth_space' as LabId,
      titleEn: 'Space & Planetary Studio',
      titleAr: 'استوديو علوم الفضاء والكواكب',
      subtitleEn: 'Keplerian Orbits, Solar System, H-R Diagram, Hohmann Transfer & Satellite Remote Sensing',
      subtitleAr: 'مدارات كبلر، استكشاف كواكب المجموعة الشمسية، مخطط هرتزبرنغ-راسل، نقل هومان الفضائي، والاستشعار عن بعد',
      icon: Orbit,
      color: 'indigo',
      badge: 'Orbital Mechanics & Astrophysics',
      gradient: 'from-indigo-600 via-blue-700 to-violet-900',
      activeBg: 'bg-indigo-600 text-white shadow-indigo-600/30',
      tagline: isArabic
        ? 'استوديو علوم الأرض والفضاء والكواكب: محاكي قوانين كبلر والمدارات البيضاوية، أطلس الكواكب المقارن، تطور النجوم ومخطط هرتزبرنغ-راسل، ميكانيكا المناورات المدارية ونقل هومان، ومحلل الاستشعار الفضائي والأطياف'
        : 'Earth & Planetary Space Studio: Keplerian orbit dynamics, comparative planetology explorer, Hertzsprung-Russell stellar lifecycle, Hohmann transfer orbital mechanics, and satellite remote sensing spectrogram analyzer',
    },
    {
      id: 'civics' as LabId,
      titleEn: 'Civics & Constitutional Studio',
      titleAr: 'استوديو التربية الوطنية والدستور',
      subtitleEn: 'Constitutional Review, Legislative Flow, Party Spectrum & Electoral Allocator',
      subtitleAr: 'الرقابة الدستورية، الدورة التشريعية، طيف الأحزاب، ونظام المقاعد الانتخابية',
      icon: Scale,
      color: 'emerald',
      badge: 'Constitutional Jurisprudence',
      gradient: 'from-emerald-700 via-teal-700 to-amber-700',
      activeBg: 'bg-emerald-700 text-white shadow-emerald-700/30',
      tagline: isArabic
        ? 'استوديو التربية الوطنية والدستور التفاعلي: محاكي الرقابة الدستورية للمحكمة الدستورية العليا، مسار إقرار القوانين، مصفوفة الأحزاب السياسية، وحاسبة التمثيل النسبي وهوندت وسانت ليغو'
        : "National Civics & Constitutional Studio: Supreme Constitutional Court judicial review simulator, legislative bill workflow, political party spectrum matrix, and Sainte-Laguë / D'Hondt electoral seat allocation engine",
    },
    {
      id: 'islamic_studies' as LabId,
      titleEn: 'Islamic Studies Studio',
      titleAr: 'استوديو التربية الدينية الإسلامية',
      subtitleEn: 'Tajweed Recitation, Maqasid al-Sharia, Seerah Milestones & Bioethics',
      subtitleAr: 'أحكام التجويد والترتيل، مقاصد الشريعة، محطات السيرة النبوية، والأخلاقيات الحيوية',
      icon: BookOpen,
      color: 'emerald',
      badge: 'Hermeneutics & Ethics',
      gradient: 'from-emerald-700 via-teal-700 to-green-700',
      activeBg: 'bg-emerald-700 text-white shadow-emerald-700/30',
      tagline: isArabic
        ? 'استوديو الدراسات الإسلامية التفاعلي: أحكام التلاوة والتجويد والترتيل الصوتي، محاكي مقاصد الشريعة الخمس، وثيقة المدينة ومحطات السيرة، والأخلاقيات الحيوية والذكاء الاصطناعي'
        : 'Islamic Studies Studio: Interactive Quranic Tajweed recitation, Five Maqasid al-Sharia simulator, Madinah Charter & Seerah milestones, and contemporary bioethics/AI ethics',
    },
    {
      id: 'christian_studies' as LabId,
      titleEn: 'Christian Heritage & Studies Studio',
      titleAr: 'استوديو التراث والدراسات المسيحية',
      subtitleEn: 'Seven Sacraments, Coptic Monastic Heritage, Gospel Synoptics & Bioethics',
      subtitleAr: 'الأسرار الكنسية السبعة، التراث الرهباني القبطي، الأناجيل الإزائية، والأخلاقيات الحيوية',
      icon: Church,
      color: 'amber',
      badge: 'Ecclesiastical Studies',
      gradient: 'from-amber-700 via-rose-700 to-purple-700',
      activeBg: 'bg-amber-700 text-white shadow-amber-700/30',
      tagline: isArabic
        ? 'استوديو الدراسات والتراث المسيحي التفاعلي: استكشاف أسرار الكنيسة السبعة، مسار الرهبنة وتاريخ العائلة المقدسة، مقارنة الأناجيل الأربعة، ومحاكي الأخلاقيات الطبية والحيوية'
        : 'Christian Heritage & Studies Studio: Interactive exploration of the Seven Sacraments, Coptic monastic trail, Gospel Synoptics comparative matrix, and contemporary bioethics simulator',
    },
    {
      id: 'business' as LabId,
      titleEn: 'Business Modeling & Entrepreneurship Studio',
      titleAr: 'مختبر نمذجة الأعمال وريادة الأعمال',
      subtitleEn: 'DCF Corporate Valuation, Break-Even Analysis, Lean Canvas & Supply Chain',
      subtitleAr: 'تقييم الشركات بالتدفقات النقدية (DCF)، نقطة التعادل، اللين كانفاس، وسلاسل الإمداد',
      icon: Briefcase,
      color: 'indigo',
      badge: 'Finance & Strategy',
      gradient: 'from-sky-700 via-indigo-700 to-slate-800',
      activeBg: 'bg-indigo-700 text-white shadow-indigo-700/30',
      tagline: isArabic
        ? 'مختبر نمذجة الأعمال وريادة الأعمال الافتراضي: التقييم المالي للشركات (DCF & WACC)، تحليل نقطة التعادل، بناء مخططات اللين للشركات الناشئة، وإدارة سلاسل الإمداد والمخزون'
        : 'Business Modeling & Entrepreneurship Virtual Studio: Interactive DCF & WACC corporate valuation, break-even economics, Lean Canvas startup architecture, and EOQ supply chain optimization',
    },
    {
      id: 'fine_arts' as LabId,
      titleEn: 'Fine Arts & Architecture Studio',
      titleAr: 'مرسم الفنون الجميلة والتصميم المعماري',
      subtitleEn: 'Perspective Drafting, Color Theory Wheel, Golden Ratio φ & Islamic Tessellation',
      subtitleAr: 'المنظور الهندسي الحر، دائرة التوافق اللوني، النسبة الذهبية φ، والأطباق النجمية الإسلامية',
      icon: Palette,
      color: 'rose',
      badge: 'Orthographic & Tessellation',
      gradient: 'from-fuchsia-900 via-rose-800 to-amber-700',
      activeBg: 'bg-rose-700 text-white shadow-rose-700/30',
      tagline: isArabic
        ? 'مرسم الفنون الجميلة والتصميم المعماري الافتراضي: محاكاة المنظور الحر ذي النقطة والنقطتين، دائرة الألوان وقاعدة 60-30-10، حاسبة النسبة الذهبية φ، والأطباق النجمية ومقرنصات التراث الإسلامي'
        : 'Fine Arts & Architectural Virtual Studio: Interactive one & two-point perspective drafter, color harmony wheel, golden ratio calculator, and Islamic star rosette tessellations',
    },
    {
      id: 'music' as LabId,
      titleEn: 'Music Theory & Audio Studio',
      titleAr: 'استوديو النظريات الموسيقية والصوتيات',
      subtitleEn: 'Maqamat, 24-EDO Microtones, Arab Iqa\'at, Solfège & SATB Harmony',
      subtitleAr: 'المقامات الشرقية، نظام الربع تون، الضروب والإيقاعات، الصولفيج، والتوزيع الهارموني',
      icon: Music,
      color: 'amber',
      badge: 'Microtonal & Acoustics',
      gradient: 'from-amber-600 via-purple-700 to-indigo-950',
      activeBg: 'bg-amber-600 text-white shadow-amber-600/30',
      tagline: isArabic
        ? 'استوديو النظريات الموسيقية والصوتيات الافتراضي: محاكي المقامات والربع تون (٢٤ درجة)، آلة إيقاعات الدم والتك، تدريب الأذن والصولفيج، والهارموني الغربي'
        : 'Music Theory & Acoustic Audio Studio: Interactive 24-EDO Arab Maqam synthesizer, Dum-Tak rhythm sandbox, Solfège ear trainer, and SATB harmonic voice-leading',
    },
    {
      id: 'agriculture' as LabId,
      titleEn: 'Agricultural Sciences & Technology Studio',
      titleAr: 'مختبر التكنولوجيا والعلوم الزراعية الحديثة',
      subtitleEn: 'Soil Chemistry, FAO-56 Water Budgeting, Toshka/New Delta & IPM',
      subtitleAr: 'كيمياء التربة، الاحتياج الجبسي، موازنة الري الذكي، المشروعات القومية والمكافحة المتكاملة',
      icon: Sprout,
      color: 'emerald',
      badge: 'Precision Agrotechnology',
      gradient: 'from-emerald-700 via-teal-800 to-slate-950',
      activeBg: 'bg-emerald-600 text-white shadow-emerald-600/30',
      tagline: isArabic
        ? 'مختبر التكنولوجيا والعلوم الزراعية: كيمياء التربة والاحتياج الجبسي، موازنة الري المحوري FAO-56، استكشاف المشروعات القومية (توشكى والدلتا الجديدة وشرق العوينات)، والعيادة النباتية المتكاملة IPM'
        : 'Agricultural Technology Studio: Soil physicochemical balancing, FAO-56 Penman-Monteith irrigation budgeting, Toshka & New Delta national mega-projects explorer, and IPM plant pathology diagnostic clinic',
    },
    {
      id: 'industrial' as LabId,
      titleEn: 'Industrial Technology & Applied Engineering Studio',
      titleAr: 'مختبر التكنولوجيا الصناعية والأنظمة الهندسية',
      subtitleEn: 'Materials Metallurgy, PLC Ladder Logic, Hydraulics, CNC & Quality SPC',
      subtitleAr: 'اختبارات المواد، برمجة السلم PLC، القدرة المائعية، تشغيل CNC والتحكم الإحصائي للجودة',
      icon: Wrench,
      color: 'amber',
      badge: 'Applied Engineering Systems',
      gradient: 'from-amber-700 via-orange-800 to-slate-950',
      activeBg: 'bg-amber-600 text-white shadow-amber-600/30',
      tagline: isArabic
        ? 'مختبر التكنولوجيا الصناعية والهندسية المتكامل: اختبارات الشد والمعادن، محاكي برمجة مخطط السلم PLC، دوائر القوى الهيدروليكية والنيوماتيكية، مسارات تشغيل ماكينات CNC، والتحكم الإحصائي للجودة ومؤشرات ستة سيجما'
        : 'Industrial Technology & Applied Engineering Studio: Tensile materials testing, IEC 61131-3 PLC ladder logic simulator, fluid power hydraulic & pneumatic circuits, CNC G-code toolpath interpolator, and Six Sigma SPC quality control',
    },
    {
      id: 'commercial' as LabId,
      titleEn: 'Commercial Sciences, Banking & Finance Studio',
      titleAr: 'مختبر العلوم التجارية والمصرفية والمالية',
      subtitleEn: 'Financial Statements, Compound Interest, DCF Valuation, Banking & CAPM',
      subtitleAr: 'القوائم المالية، الفائدة المركبة، تقييم المشاريع DCF، الائتمان المصرفي ونموذج CAPM',
      icon: Landmark,
      color: 'teal',
      badge: 'Commercial Sciences & Banking',
      gradient: 'from-teal-800 via-emerald-800 to-slate-950',
      activeBg: 'bg-teal-600 text-white shadow-teal-600/30',
      tagline: isArabic
        ? 'مختبر العلوم التجارية والمحاسبة والمالية والمصرفية: موازين المراجعة والقوائم المالية، محاكي الفائدة المركبة وجداول استهلاك القروض، تقييم المشاريع الرأسمالية ونماذج DCF، الجدارة الائتمانية ومعايير بازل ٣، ونظرية المحفظة وتسعير الأصول CAPM'
        : 'Commercial Sciences & Banking Studio: Financial statements ledger balancing, compound interest annuity & loan amortization solver, DCF capital budgeting (NPV/IRR/WACC), commercial bank credit scoring & Basel III, and Modern Portfolio Theory with CAPM SML risk analytics',
    },
    {
      id: 'tourism' as LabId,
      titleEn: 'Tourism & Hospitality Studio',
      titleAr: 'مختبر السياحة والضيافة والتراث',
      subtitleEn: 'Hotel Yield Management, Tour Costing, UNESCO Heritage & GDS',
      subtitleAr: 'إدارة العائد الفندقي، تسعير البرامج، آثار اليونسكو ونظم الحجز',
      icon: Hotel,
      color: 'amber',
      badge: 'Tourism & Hospitality',
      gradient: 'from-amber-800 via-yellow-800 to-slate-950',
      activeBg: 'bg-amber-600 text-white shadow-amber-600/30',
      tagline: isArabic
        ? 'مختبر محاكاة السياحة والضيافة وإدارة التراث الثقافي: مؤشرات العائد الفندقي (RevPAR / ADR / GOPPAR)، تسعير البرامج السياحية ونقطة التعادل، مستكشف مواقع التراث العالمي لليونسكو، نمذجة الطاقة الاستيعابية البيئية، ومحاكي نظام حجز الطيران العالمي GDS'
        : 'Tourism, Hospitality & Cultural Heritage Studio: Hotel Yield Management (RevPAR/ADR/GOPPAR), Tour Package Costing & Break-Even Pax, UNESCO World Heritage Explorer, Environmental Carrying Capacity Modeler, and GDS Flight Reservation Terminal',
    },
    {
      id: 'renewable' as LabId,
      titleEn: 'Renewable Energy & Environmental Sustainability Studio',
      titleAr: 'استوديو الطاقة المتجددة والاستدامة البيئية',
      subtitleEn: 'Solar PV/CSP, Wind Betz Limit, Green Hydrogen PtX, Smart Grids & CBAM',
      subtitleAr: 'الطاقة الشمسية وبنبان، ديناميكا الرياح، الهيدروجين الأخضر، الشبكات الذكية وضريبة CBAM',
      icon: Leaf,
      color: 'emerald',
      badge: 'Clean Tech & Decarbonization',
      gradient: 'from-emerald-700 via-teal-800 to-slate-950',
      activeBg: 'bg-emerald-600 text-white shadow-emerald-600/30',
      tagline: isArabic
        ? 'استوديو الطاقة المتجددة والاستدامة البيئية: محاكي الخلايا الشمسية ومحطة بنبان، ديناميكا الرياح وقانون بيتز بجبل الزيت، مفاعل الهيدروجين الأخضر ومشتقات PtX، منظومة استقرار تردد الشبكة وضخ عتاقة والبطاريات، وحاسبة البصمة الكربونية وضريبة CBAM الأوروبية'
        : 'Renewable Energy & Environmental Sustainability Studio: Solar PV & CSP yield modeler, wind aerodynamics & Betz limit at Gabal El-Zeit, green hydrogen electrolysis & PtX, smart grid frequency droop & Ataka pumped storage, and GHG carbon accounting with EU CBAM tariff calculator',
    },
    {
      id: 'robotics' as LabId,
      titleEn: 'Arduino Robotics & Mechatronics Studio',
      titleAr: 'مختبر محاكاة الأردوينو والروبوتات والميكاترونكس',
      subtitleEn: 'ATmega328P, Breadboard Circuitry, C++ Firmware, Logic Analyzer & Actuators',
      subtitleAr: 'لوحة Uno R3، مستشعرات المسافة والضوء، محركات السيرفو والـ DC، ومحلل الإشارات المنطقية',
      icon: Bot,
      color: 'cyan',
      badge: 'Robotics & Embedded Systems',
      gradient: 'from-cyan-900 via-blue-900 to-slate-950',
      activeBg: 'bg-cyan-600 text-white shadow-cyan-600/30',
      tagline: isArabic
        ? 'مختبر محاكاة وبرمجة الروبوتات والأنظمة المدمجة: لوحة أردوينو Uno R3 كاملة، محاكاة المستشعرات (المسافة بالموجات فوق الصوتية، المقاومة الضوئية LDR، الحرارة TMP36، وتتبع الخطوط)، والتحكم بالمشغلات (سيرفو SG90، ومحرك L298N DC، وشاشة LCD، وطنان صوتي Piezo حقيقي عبر Web Audio)، ومحلل إشارات منطقية 4 قنوات وشاشة تسلسلية تفاعلية.'
        : 'Arduino Robotics & Embedded Mechatronics Simulation Studio: Complete ATmega328P Uno R3 board with live pinouts, interactive sensors (HC-SR04 ultrasonic radar, LDR photoresistor, TMP36 thermometer, dual line trackers), actuators (SG90 servo, L298N DC motor, 16x2 LCD, Web Audio piezo buzzer), virtual serial terminal, and 4-channel real-time logic analyzer.',
    },
  ];

  // Helper to determine whether a lab workstation is relevant to a chosen subject
  const isLabRelevantToSubject = (labId: LabId, subjectId: string): boolean => {
    if (!subjectId || subjectId === 'all') return true;

    switch (subjectId) {
      case 'mathematics':
        return labId === 'math';
      case 'physics':
        return labId === 'physics';
      case 'chemistry':
        return labId === 'chemistry';
      case 'biology':
        return labId === 'biology';
      case 'geology':
        return labId === 'geology';
      case 'earth_space':
        return labId === 'earth_space';
      case 'philosophy':
        return labId === 'philosophy';
      case 'psychology':
        return labId === 'psychology';
      case 'economics_stat':
        return labId === 'economics_stat';
      case 'cs_informatics':
        return labId === 'cs_informatics';
      case 'civics':
        return labId === 'civics';
      case 'islamic_studies':
        return labId === 'islamic_studies';
      case 'christian_studies':
        return labId === 'christian_studies';
      case 'business_entrepreneurship':
      case 'business':
        return labId === 'business';
      case 'fine_arts_architecture':
        return labId === 'fine_arts';
      case 'music_theory':
      case 'music':
        return labId === 'music';
      case 'agriculture':
      case 'agricultural_sciences':
        return labId === 'agriculture';
      case 'industrial':
      case 'industrial_engineering':
        return labId === 'industrial';
      case 'commercial':
      case 'commercial_sciences':
      case 'banking':
        return labId === 'commercial';
      case 'tourism':
      case 'tourism_hospitality':
        return labId === 'tourism';
      case 'renewable':
      case 'renewable_energy':
      case 'sustainability':
        return labId === 'renewable';
      case 'robotics':
      case 'robotics_mechatronics':
        return labId === 'robotics';
      case 'history':
        return labId === 'history';
      case 'geography':
        return labId === 'geography';
      case 'arabic':
      case 'english':
      case 'french':
      case 'german':
      case 'italian':
      case 'spanish':
      case 'chinese':
        return labId === 'languages';
      default:
        return true;
    }
  };

  type WorkstationCategory = 'all' | 'sciences' | 'math' | 'engineering' | 'humanities' | 'languages_arts';

  const LAB_CATEGORY_MAP: Record<LabId, Exclude<WorkstationCategory, 'all'>> = {
    physics: 'sciences',
    chemistry: 'sciences',
    biology: 'sciences',
    geology: 'sciences',
    earth_space: 'sciences',
    math: 'math',
    economics_stat: 'math',
    cs_informatics: 'engineering',
    industrial: 'engineering',
    renewable: 'engineering',
    robotics: 'engineering',
    agriculture: 'engineering',
    business: 'engineering',
    history: 'humanities',
    geography: 'humanities',
    philosophy: 'humanities',
    psychology: 'humanities',
    civics: 'humanities',
    islamic_studies: 'humanities',
    christian_studies: 'humanities',
    languages: 'languages_arts',
    music: 'languages_arts',
    fine_arts: 'languages_arts',
    commercial: 'languages_arts',
    tourism: 'languages_arts',
  };

  const WORKSTATION_CATEGORIES: { id: WorkstationCategory; nameEn: string; nameAr: string; count: number; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', nameEn: 'All Workstations', nameAr: 'جميع المختبرات', count: 25, icon: Flask },
    { id: 'sciences', nameEn: 'Natural Sciences', nameAr: 'العلوم الطبيعية', count: 5, icon: Atom },
    { id: 'math', nameEn: 'Math & Stats', nameAr: 'الرياضيات والإحصاء', count: 2, icon: Calculator },
    { id: 'engineering', nameEn: 'Engineering & STEM', nameAr: 'التكنولوجيا والهندسة', count: 6, icon: Binary },
    { id: 'humanities', nameEn: 'Humanities & Civics', nameAr: 'العلوم الإنسانية والاجتماعية', count: 7, icon: BookOpen },
    { id: 'languages_arts', nameEn: 'Languages & Arts', nameAr: 'اللغات والفنون والخدمات', count: 5, icon: Palette },
  ];

  const relevantLabs = useMemo<LabCardItem[]>(() => {
    if (!selectedSubject || selectedSubject === 'all') return LABS;
    const filtered = LABS.filter((lab: LabCardItem) => isLabRelevantToSubject(lab.id, selectedSubject));
    return filtered.length > 0 ? filtered : LABS;
  }, [selectedSubject, LABS]);

  const isSubjectFiltered = Boolean(
    selectedSubject &&
    selectedSubject !== 'all' &&
    relevantLabs.length > 0 &&
    relevantLabs.length < LABS.length
  );

  const baseDisplayedLabs: LabCardItem[] = (!showAllLabsOverride && isSubjectFiltered) ? relevantLabs : LABS;

  const displayedLabs = useMemo(() => {
    if (selectedCategory === 'all') return baseDisplayedLabs;
    const catFiltered = baseDisplayedLabs.filter((lab) => LAB_CATEGORY_MAP[lab.id] === selectedCategory);
    return catFiltered.length > 0 ? catFiltered : LABS.filter((lab) => LAB_CATEGORY_MAP[lab.id] === selectedCategory);
  }, [baseDisplayedLabs, selectedCategory, LABS]);

  return (
    <div
      className={
        isHubFullscreen
          ? 'fixed inset-0 z-50 w-screen h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans'
          : 'space-y-6'
      }
      data-fullscreen-lab={isHubFullscreen ? 'true' : undefined}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {isHubFullscreen ? (
        <div className="shrink-0 flex items-center justify-between gap-3 px-4 py-2.5 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center">
              <Flask className="w-4 h-4" />
            </span>
            <div>
              <div className="text-xs font-black text-white flex items-center gap-2">
                <span>{isArabic ? 'المجمع التفاعلي للمختبرات - بيئة العمل المجمعة' : 'Virtual Labs Suite - Master Workstation'}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                  FULLSCREEN
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Discipline Switcher */}
            <div className="relative min-w-[200px] sm:min-w-[280px]">
              <select
                value={activeLab}
                onChange={(e) => setActiveLab(e.target.value as LabId)}
                className="w-full appearance-none pl-3.5 pr-8 rtl:pr-3.5 rtl:pl-8 py-1.5 rounded-xl text-xs font-bold bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                {(showAllLabsOverride || !isSubjectFiltered ? LABS : displayedLabs).map((lab) => (
                  <option key={lab.id} value={lab.id} className="bg-slate-900 text-white">
                    {isArabic ? lab.titleAr : lab.titleEn}
                  </option>
                ))}
              </select>
              <div className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>

            <button
              onClick={() => {
                const contextualExp = getContextualReportExpId();
                setReportExpId(contextualExp);
                setIsReportModalOpen(true);
              }}
              className="px-3 py-1.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 border border-emerald-500/30 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-200" />
              <span className="hidden sm:inline">{isArabic ? 'تقرير A4' : 'Lab Report'}</span>
            </button>

            <button
              onClick={() => setIsGuidedModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-indigo-700/80 hover:bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 border border-indigo-500/30 cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-200" />
              <span className="hidden sm:inline">{isArabic ? 'تجارب موجهة' : 'Guided'}</span>
            </button>

            <button
              onClick={exitHubFullscreen}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-900/60 border border-slate-700 hover:border-rose-500/50 text-slate-200 hover:text-rose-200 text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer"
              title={isArabic ? 'إنهاء وضع الشاشة الكاملة (Esc)' : 'Exit Fullscreen (Esc)'}
            >
              <Minimize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{isArabic ? 'إنهاء (Esc)' : 'Exit (Esc)'}</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Master Hub Banner */}
      <div
        className={`p-5 sm:p-7 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-yellow-400 text-white'
            : isLight
            ? 'bg-white border-slate-200 text-slate-900 shadow-xs'
            : 'bg-[#161B22] border-[#30363D] text-slate-100 shadow-xs'
        }`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border ${
                isLight ? 'bg-blue-50 text-blue-800 border-blue-200' : 'bg-blue-950/50 text-blue-300 border-blue-800/60'
              }`}>
                <Flask className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{isArabic ? 'المختبرات العلمية والرياضية المعتمدة' : 'Official Virtual Science Laboratories'}</span>
              </span>
              <span className={`px-2.5 py-1 rounded-md text-xs tabular-mono font-medium border ${
                isLight ? 'bg-slate-100 text-slate-700 border-slate-200' : 'bg-[#0D1117] text-slate-300 border-[#30363D]'
              }`}>
                {isArabic ? '٢٤ مختبراً واستوديو تخصصياً' : '24 Specialized Labs & Studios'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {isArabic ? 'المجمع التفاعلي للمختبرات والمحاكاة العلمية' : 'Interactive Virtual Laboratories Suite'}
            </h1>
            <p className={`text-xs sm:text-sm max-w-3xl mt-1.5 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'بيئة محاكاة عملية تفاعلية تجمع مختبرات الرياضيات، الفيزياء، الكيمياء، والأحياء، مجهزة بأطلس مجهري عالي الدقة ونماذج تجريبية ثلاثية الأبعاد مطابقة لمعايير الثانوية العامة والبكالوريا.'
                : 'A comprehensive interactive experimental environment hosting specialized Math, Physics, Chemistry, and Biology laboratories equipped with high-resolution microscopy and 3D quantitative simulations.'}
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
            <button
              onClick={() => {
                const contextualExp = getContextualReportExpId();
                setReportExpId(contextualExp);
                setIsReportModalOpen(true);
              }}
              className="px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-xs border border-emerald-600/40 shadow-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-emerald-100" />
              <span>{isArabic ? 'تقرير معملي A4' : 'Lab Report A4'}</span>
            </button>

            <button
              onClick={() => setIsGuidedModalOpen(true)}
              className="px-3.5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-semibold text-xs border border-blue-600/40 shadow-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-blue-100" />
              <span>{isArabic ? 'دليل التجارب الموجهة' : 'Guided Experiments'}</span>
            </button>

            <button
              type="button"
              onClick={toggleHubFullscreen}
              className={`px-3.5 py-2 rounded-lg font-semibold text-xs border shadow-xs flex items-center gap-2 transition-colors cursor-pointer ${
                isLight 
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300' 
                  : 'bg-[#21262D] hover:bg-[#30363D] text-slate-100 border-[#30363D]'
              }`}
              title={isArabic ? 'بيئة العمل المجمعة للشاشات الكاملة' : 'Master Fullscreen Workstation'}
            >
              <Maximize2 className="w-4 h-4 text-amber-500" />
              <span>{isArabic ? 'شاشة كاملة' : 'Fullscreen'}</span>
            </button>

            <div className={`text-right rtl:text-left hidden sm:block border-l rtl:border-r pl-3 rtl:pr-3 ${isLight ? 'border-slate-200' : 'border-[#30363D]'}`}>
              <p className={`text-[11px] font-semibold uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {isArabic ? 'المسار الحالي' : 'Active Track'}
              </p>
              <p className={`text-sm font-bold ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>
                {currentCurriculum.id === 'thanaweya'
                  ? isArabic ? 'الثانوية العامة المصرية' : 'Thanaweya Amma'
                  : isArabic ? 'البكالوريا المصرية' : 'New EG-Baccalaureate'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Laboratory Selector Navigation Header & Cards */}
      <div className="space-y-3">
        {isSubjectFiltered && (
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-indigo-200">
                {isArabic
                  ? `يتم عرض معامل وورش المسار المختار: ${selectedSubject} (${displayedLabs.length})`
                  : `Showing lab workstations for selected subject: ${selectedSubject} (${displayedLabs.length})`}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowAllLabsOverride((prev) => !prev)}
              className="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 hover:text-white border border-indigo-500/30 font-bold transition-all cursor-pointer"
            >
              {showAllLabsOverride
                ? (isArabic ? 'إخفاء المعامل غير المتعلقة' : 'Filter to Subject Only')
                : (isArabic ? 'إظهار جميع المعامل والورش الـ 24' : 'Show All 24 Labs')}
            </button>
          </div>
        )}

        {/* Workstation Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 -mx-1 px-1 no-scrollbar sm:flex-wrap">
          {WORKSTATION_CATEGORIES.map((cat) => {
            const isCatActive = selectedCategory === cat.id;
            const CatIcon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  if (!showAllLabsOverride && isSubjectFiltered && cat.id !== 'all') {
                    setShowAllLabsOverride(true);
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-all border cursor-pointer min-h-[40px] touch-target ${
                  isCatActive
                    ? isLight
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-indigo-600 text-white border-indigo-500 shadow-xs shadow-indigo-600/30'
                    : isLight
                    ? 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    : 'bg-[#161B22] text-slate-300 border-[#30363D] hover:border-slate-600 hover:text-white'
                }`}
              >
                <CatIcon className={`w-3.5 h-3.5 ${isCatActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{isArabic ? cat.nameAr : cat.nameEn}</span>
                <span
                  className={`text-[10px] tabular-nums px-1.5 py-0.5 rounded-full font-mono ${
                    isCatActive
                      ? 'bg-white/20 text-white'
                      : isLight
                      ? 'bg-slate-100 text-slate-500'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className={`grid ${displayedLabs.length === 1 ? 'grid-cols-1 max-w-sm sm:max-w-md' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'} gap-3`}>
          {displayedLabs.map((lab) => {
            const isSelected = activeLab === lab.id;
            const Icon = lab.icon;

            return (
              <button
                key={lab.id}
                onClick={() => setActiveLab(lab.id)}
                className={`p-3.5 rounded-xl border text-left rtl:text-right transition-colors duration-150 cursor-pointer flex flex-col justify-between group relative ${
                  isSelected
                    ? isContrast
                      ? 'bg-black border-2 border-yellow-400 text-yellow-300'
                      : isLight
                      ? 'bg-white border-2 border-blue-600 text-slate-900 shadow-xs ring-1 ring-blue-600/20'
                      : 'bg-[#161B22] border-2 border-blue-500 text-white shadow-xs ring-1 ring-blue-500/20'
                    : isContrast
                    ? 'bg-black border border-slate-700 text-white hover:border-yellow-400'
                    : isLight
                    ? 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/80'
                    : 'bg-[#0D1117] border border-[#30363D] text-slate-300 hover:border-slate-600 hover:bg-[#161B22]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                      isSelected
                        ? isLight
                          ? 'bg-blue-50 border-blue-200 text-blue-700'
                          : 'bg-blue-950/60 border-blue-800 text-blue-300'
                        : isLight
                        ? 'bg-slate-100 border-slate-200 text-slate-600 group-hover:text-slate-900'
                        : 'bg-[#21262D] border-[#30363D] text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] tabular-mono font-medium px-1.5 py-0.5 rounded border ${
                      isSelected
                        ? isLight
                          ? 'bg-blue-100/70 border-blue-200 text-blue-800'
                          : 'bg-blue-950 border-blue-800 text-blue-300'
                        : isLight
                        ? 'bg-slate-100 border-slate-200 text-slate-600'
                        : 'bg-[#161B22] border-[#30363D] text-slate-400'
                    }`}
                  >
                    {lab.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1">
                    {isArabic ? lab.titleAr : lab.titleEn}
                  </h3>
                  <p
                    className={`text-[11px] mt-0.5 line-clamp-1 ${
                      isSelected
                        ? isLight ? 'text-blue-700 font-medium' : 'text-blue-300 font-medium'
                        : isLight ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  >
                    {isArabic ? lab.subtitleAr : lab.subtitleEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
        </>
      )}

      {/* Render Active Laboratory Component */}
      <div className={isHubFullscreen ? 'flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 bg-slate-950' : 'animate-in fade-in duration-200'}>
        {activeLab === 'math' && (
          <div className="space-y-4">
            {/* Quick-Access Math Sub-Laboratory Dropdown */}
            <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1.5 pl-1">
                <Calculator className="w-4 h-4 text-indigo-400" />
                <span>{isArabic ? 'المعمل المتخصص:' : 'Specialized Sub-Lab:'}</span>
              </span>
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <select
                  value={activeMathTab}
                  onChange={(e) => setActiveMathTab(e.target.value as MathTab)}
                  className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                    isContrast
                      ? 'bg-black text-white border-yellow-400'
                      : isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-800'
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  {[
                    { id: 'calculus' as MathTab, emoji: '🧭', labelEn: 'Calculus & Dynamic Tangents', labelAr: 'التفاضل والمماسات الديناميكية' },
                    { id: 'related_rates_optimization' as MathTab, emoji: '📈', labelEn: 'Related Time Rates & Applied Optimization Studio', labelAr: 'المعدلات الزمنية المرتبطة وتطبيقات القيم القصوى' },
                    { id: 'geometry3d' as MathTab, emoji: '📦', labelEn: '3D Vectors & Planes', labelAr: 'الهندسة الفراغية 3D والمتجهات' },
                    { id: 'complex' as MathTab, emoji: '📍', labelEn: 'Complex Numbers & Argand Plane (De Moivre)', labelAr: 'الأعداد المركبة ومستوى أرجاند وديموافر' },
                    { id: 'mechanics' as MathTab, emoji: '⚙️', labelEn: 'Statics & Classical Mechanics (Tier-1)', labelAr: 'الاستاتيكا والميكانيكا الكلاسيكية' },
                    { id: 'matrix' as MathTab, emoji: '🔢', labelEn: 'Matrix Algebra Solver', labelAr: 'جبر المصفوفات ومحدد كرامر' },
                    { id: 'pascal' as MathTab, emoji: '🔺', labelEn: 'Pascal Triangle & Binomial Combinatorics', labelAr: 'مثلث باسكال ومفكوك ذات الحدين' },
                    { id: 'probability' as MathTab, emoji: '📊', labelEn: 'Normal Distribution & Bayesian Tree', labelAr: 'التوزيع الطبيعي وشجرة بايز' },
                    { id: 'volumes_revolution' as MathTab, emoji: '🏺', labelEn: 'Solids of Revolution & Riemann Discs', labelAr: 'حجوم الأجسام الدورانية وأقراص ريمان' },
                    { id: 'conics' as MathTab, emoji: '📐', labelEn: 'Conic Sections & Focal Optics', labelAr: 'القطوع المخروطية وبصريات البؤرة' },
                    { id: 'fourier_series' as MathTab, emoji: '🌊', labelEn: 'Fourier Series & Acoustic Synthesis', labelAr: 'متسلسلات فورييه والتركيب النغمي' },
                    { id: 'slope_fields' as MathTab, emoji: '📈', labelEn: 'Differential Equations & Slope Fields', labelAr: 'المعادلات التفاضلية وحقول الميول (أويلر)' },
                    { id: 'linear_programming' as MathTab, emoji: '📊', labelEn: 'Linear Programming & Feasible Polygon', labelAr: 'البرمجة الخطية ومضلع الحل الأمثل' },
                  ].map((tab) => (
                    <option key={tab.id} value={tab.id} className="bg-slate-900 text-white">
                      {tab.emoji} {isArabic ? tab.labelAr : tab.labelEn}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <MathLab
              lang={lang}
              theme={theme}
              onOpenDesmos={onOpenDesmos}
              initialTab={activeMathTab}
              onTabChange={setActiveMathTab}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}
        {activeLab === 'physics' && (
          <div className="space-y-4">
            {/* Quick-Access Physics Sub-Laboratory Dropdown */}
            <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1.5 pl-1">
                <Atom className="w-4 h-4 text-cyan-400" />
                <span>{isArabic ? 'المعمل المتخصص:' : 'Specialized Sub-Lab:'}</span>
              </span>
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <select
                  value={activePhysTab}
                  onChange={(e) => setActivePhysTab(e.target.value as PhysicsTab)}
                  className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-cyan-500 ${
                    isContrast
                      ? 'bg-black text-white border-yellow-400'
                      : isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-800'
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  {[
                    { id: 'circuits' as PhysicsTab, emoji: '⚡', labelEn: 'DC Circuits & Kirchhoff', labelAr: 'دوائر أوم وكيرشوف' },
                    { id: 'optics' as PhysicsTab, emoji: '🔬', labelEn: 'Optics & Young Interference (2D)', labelAr: 'البصريات وتجربة ينج (2D)' },
                    { id: 'optics_3d' as PhysicsTab, emoji: '🌈', labelEn: '3D Optics & Prism Dispersion Studio', labelAr: 'استوديو المنشور وتشتت الضوء 3D' },
                    { id: 'magnetism' as PhysicsTab, emoji: '🧭', labelEn: 'Magnetism & Lorentz Force', labelAr: 'المغناطيسية ولورنتز' },
                    { id: 'dynamo' as PhysicsTab, emoji: '🔄', labelEn: 'AC Dynamo & Induction (2D)', labelAr: 'الدينامو والحث (2D)' },
                    { id: 'induction_3d' as PhysicsTab, emoji: '⚡', labelEn: '3D Electromagnetic Induction & Dynamo Studio', labelAr: 'استوديو الحث الكهرومغناطيسي والدينامو 3D' },
                    { id: 'resonance' as PhysicsTab, emoji: '〰️', labelEn: 'RLC Resonance Circuit', labelAr: 'دوائر الرنين RLC' },
                    { id: 'photoelectric' as PhysicsTab, emoji: '☀️', labelEn: 'Photoelectric Stopping Potential Studio (Einstein)', labelAr: 'استوديو الظاهرة الكهروضوئية وجهد الإيقاف (أينشتاين)' },
                    { id: 'atomic_lasers' as PhysicsTab, emoji: '⚛️', labelEn: 'Bohr Spectra & Lasers', labelAr: 'طيف بور والليزر' },
                    { id: 'atom_3d' as PhysicsTab, emoji: '🔮', labelEn: '3D Quantum Atom & Laser Studio', labelAr: 'استوديو الذرة الكمية والليزر 3D' },
                    { id: 'electronics' as PhysicsTab, emoji: '🔌', labelEn: 'Semiconductors & Transistor Logic', labelAr: 'أشباه الموصلات والترانزستور' },
                    { id: 'flashcards' as PhysicsTab, emoji: '🗂️', labelEn: 'Physics Flashcards', labelAr: 'بطاقات الاستذكار' },
                  ].map((tab) => (
                    <option key={tab.id} value={tab.id} className="bg-slate-900 text-white">
                      {tab.emoji} {isArabic ? tab.labelAr : tab.labelEn}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <PhysicsLab lang={lang} theme={theme} initialTab={activePhysTab} onTabChange={setActivePhysTab} isFullscreen={isHubFullscreen} />
          </div>
        )}
        {activeLab === 'chemistry' && (
          <div className="space-y-4">
            {/* Quick-Access Chemistry Sub-Laboratory Dropdown */}
            <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1.5 pl-1">
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                <span>{isArabic ? 'المعمل المتخصص:' : 'Specialized Sub-Lab:'}</span>
              </span>
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <select
                  value={activeChemTab}
                  onChange={(e) => setActiveChemTab(e.target.value as ChemTab)}
                  className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
                    isContrast
                      ? 'bg-black text-white border-yellow-400'
                      : isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-800'
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  {[
                    { id: 'equilibrium' as ChemTab, emoji: '⚖️', labelEn: 'Equilibrium & Le Chatelier', labelAr: 'الاتزان ولوشاتيليه' },
                    { id: 'transition' as ChemTab, emoji: '🔥', labelEn: 'Transition Elements & Iron', labelAr: 'العناصر الانتقالية والحديد' },
                    { id: 'qualitative' as ChemTab, emoji: '🧪', labelEn: 'Qualitative Analysis', labelAr: 'التحليل الوصفي والكواشف' },
                    { id: 'titration' as ChemTab, emoji: '💧', labelEn: 'Acid-Base Titration & pH Curve Studio', labelAr: 'استوديو معايرة الأحماض والقواعد ومنحنيات الـ pH' },
                    { id: 'electrochemistry' as ChemTab, emoji: '🔋', labelEn: 'Electrochemistry & Cells (2D)', labelAr: 'الكيمياء الكهربية والخلايا (2D)' },
                    { id: 'electrochem_3d' as ChemTab, emoji: '⚡', labelEn: '3D Electrochemical Cell & Daniell Reactor', labelAr: 'مفاعل الخلايا ودانيال والقنطرة الملحية 3D' },
                    { id: 'organic' as ChemTab, emoji: '⚗️', labelEn: 'Organic Synthetic Roadmaps', labelAr: 'العضوية ومسارات التخليق' },
                    { id: 'molecular_3d' as ChemTab, emoji: '🧬', labelEn: '3D Molecular Geometry & Metallurgy Alloys Studio', labelAr: 'استوديو الأشكال الجزيئية وسبائك الفلزات 3D' },
                    { id: 'flashcards' as ChemTab, emoji: '🗂️', labelEn: 'Review & Flashcards', labelAr: 'كروت المراجعة والكواشف' },
                  ].map((tab) => (
                    <option key={tab.id} value={tab.id} className="bg-slate-900 text-white">
                      {tab.emoji} {isArabic ? tab.labelAr : tab.labelEn}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <ChemistryLab lang={lang} theme={theme} initialTab={activeChemTab} onTabChange={setActiveChemTab} isFullscreen={isHubFullscreen} />
          </div>
        )}
        {activeLab === 'biology' && (
          <div className="space-y-4">
            {/* Quick-Access Biology Sub-Laboratory Dropdown */}
            <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1.5 pl-1">
                <Dna className="w-4 h-4 text-rose-400" />
                <span>{isArabic ? 'المعمل المتخصص:' : 'Specialized Sub-Lab:'}</span>
              </span>
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <select
                  value={activeBioTab}
                  onChange={(e) => setActiveBioTab(e.target.value as BioTab)}
                  className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-500 ${
                    isContrast
                      ? 'bg-black text-white border-yellow-400'
                      : isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-800'
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  {[
                    { id: 'anatomy_atlas' as BioTab, emoji: '🫀', labelEn: 'Human Body Anatomy Atlas (Hi-Res)', labelAr: 'أطلس تشريح جسم الإنسان عالي الدقة (أعضاء وأجهزة)' },
                    { id: 'skeleton' as BioTab, emoji: '🦴', labelEn: 'Skeleton Anatomy & Bone Studio (206)', labelAr: 'الهيكل العظمي والمفاصل (206)' },
                    { id: 'sarcomere' as BioTab, emoji: '💪', labelEn: 'Sarcomere Contraction', labelAr: 'انقباض الساركومير' },
                    { id: 'dna' as BioTab, emoji: '🧬', labelEn: 'DNA Studio & Replication (Central Dogma)', labelAr: 'استوديو DNA وتضاعف الشفرة والترجمة' },
                    { id: 'macromolecule_3d' as BioTab, emoji: '🔮', labelEn: '3D DNA Helix, tRNA & Nucleosome Studio', labelAr: 'استوديو DNA والنيوكليوسومات و tRNA ثلاثي الأبعاد' },
                    { id: 'plant' as BioTab, emoji: '🌿', labelEn: 'Plant Histology & Support Studio', labelAr: 'أنسجة ودعامة وحركة النبات' },
                    { id: 'microscope' as BioTab, emoji: '🔬', labelEn: 'Virtual Optical Microscope', labelAr: 'المجهر الضوئي' },
                    { id: 'endocrine' as BioTab, emoji: '💉', labelEn: 'Endocrine Coordination', labelAr: 'التنسيق الهرموني' },
                    { id: 'menstrual' as BioTab, emoji: '🌸', labelEn: 'Menstrual Cycle & Hormones', labelAr: 'دورة الطمث' },
                    { id: 'immunity' as BioTab, emoji: '🛡️', labelEn: 'Immunology & Antibodies', labelAr: 'المناعة والأجسام المضادة' },
                    { id: 'genetics' as BioTab, emoji: '✂️', labelEn: 'Mendelian Genetics & Punnett Cross Studio (2×2 & 4×4)', labelAr: 'استوديو الوراثة المندلية ومربعات بانيت (2×2 و 4×4)' },
                    { id: 'bioenergetics' as BioTab, emoji: '⚡', labelEn: 'Cellular Bioenergetics', labelAr: 'التنفس الخلوي' },
                    { id: 'flashcards' as BioTab, emoji: '🗂️', labelEn: 'Biology Flashcards', labelAr: 'بطاقات الاستذكار' },
                  ].map((tab) => (
                    <option key={tab.id} value={tab.id} className="bg-slate-900 text-white">
                      {tab.emoji} {isArabic ? tab.labelAr : tab.labelEn}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <BiologyLab lang={lang} theme={theme} initialTab={activeBioTab} onTabChange={setActiveBioTab} isFullscreen={isHubFullscreen} />
          </div>
        )}

        {/* History Studio */}
        {activeLab === 'history' && (
          <div className="space-y-4">
            <HistoryTimelineStudio
              lang={lang}
              theme={theme}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Geopolitical Map Studio */}
        {activeLab === 'geography' && (
          <div className="space-y-4">
            <GeopoliticalMapStudio
              lang={lang}
              theme={theme}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Earth & Environmental Science Studio */}
        {activeLab === 'geology' && (
          <div className="space-y-4">
            <GeologyEarthStudio
              lang={lang}
              theme={theme}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Languages & Phonetics Studio */}
        {activeLab === 'languages' && (
          <div className="space-y-4">
            {/* Languages Sub-Studio Selector */}
            <div className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-[#161B22] border-[#30363D] shadow-xs'
            }`}>
              <span className={`text-xs font-semibold shrink-0 flex items-center gap-1.5 pl-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                <Headphones className="w-4 h-4 text-blue-500" />
                <span>{isArabic ? 'المحطة الصوتية واللغوية المتخصصة:' : 'Language & Audio Station:'}</span>
              </span>

              <div className="flex items-center gap-2 flex-wrap">
                {[
                  { id: 'english', code: 'EN', labelAr: 'صوتيات واستماع الإنجليزية', labelEn: 'English Audio & Phonetics' },
                  { id: 'french', code: 'FR', labelAr: 'محطة الاستماع الفرنسية', labelEn: 'French Audio Station' },
                  { id: 'german', code: 'DE', labelAr: 'صوتيات وقواعد واستماع الألمانية', labelEn: 'German Audio & Grammar' },
                  { id: 'italian', code: 'IT', labelAr: 'صوتيات وقواعد واستماع الإيطالية', labelEn: 'Italian Audio & Grammar' },
                  { id: 'spanish', code: 'ES', labelAr: 'صوتيات وقواعد واستماع الإسبانية', labelEn: 'Spanish Audio & Grammar' },
                  { id: 'chinese', code: 'ZH', labelAr: 'صوتيات ونغمات وقواعد الصينية', labelEn: 'Chinese Audio & Characters' },
                  { id: 'arabic', code: 'AR', labelAr: 'استوديو النحو والبلاغة العربية', labelEn: 'Arabic Grammar & Rhetoric' },
                ].map((station) => {
                  const isSelected = activeLangSubLab === station.id;
                  return (
                    <button
                      key={station.id}
                      type="button"
                      onClick={() => setActiveLangSubLab(station.id as 'english' | 'french' | 'arabic' | 'german' | 'italian' | 'spanish' | 'chinese')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 border ${
                        isSelected
                          ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                          : isLight
                          ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                          : 'bg-[#21262D] hover:bg-[#30363D] text-slate-300 border-[#30363D]'
                      }`}
                    >
                      <span className="text-[10px] tabular-mono px-1 py-0.2 rounded bg-black/20 font-bold">{station.code}</span>
                      <span>{isArabic ? station.labelAr : station.labelEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {activeLangSubLab === 'english' && (
              <EnglishAudioPhoneticsStudio
                lang={lang}
                theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
                isFullscreen={isHubFullscreen}
              />
            )}

            {activeLangSubLab === 'french' && (
              <FrenchAudioStudio
                lang={lang}
                theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
                isFullscreen={isHubFullscreen}
              />
            )}

            {activeLangSubLab === 'german' && (
              <GermanLanguageStudio
                lang={lang}
                theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
                isFullscreen={isHubFullscreen}
              />
            )}

            {activeLangSubLab === 'italian' && (
              <ItalianLanguageStudio
                lang={lang}
                theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
                isFullscreen={isHubFullscreen}
              />
            )}

            {activeLangSubLab === 'spanish' && (
              <SpanishLanguageStudio
                lang={lang}
                theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
                isFullscreen={isHubFullscreen}
              />
            )}

            {activeLangSubLab === 'chinese' && (
              <ChineseLanguageStudio
                lang={lang}
                theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
                isFullscreen={isHubFullscreen}
              />
            )}

            {activeLangSubLab === 'arabic' && (
              <ArabicGrammarStudio
                lang={lang}
                theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
                isFullscreen={isHubFullscreen}
              />
            )}
          </div>
        )}

        {/* Applied Logic & AI Studio */}
        {activeLab === 'philosophy' && (
          <div className="space-y-4">
            <LogicStudio
              lang={lang}
              theme={theme}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Psychology & Social Dynamics Studio */}
        {activeLab === 'psychology' && (
          <div className="space-y-4">
            <PsychologyStudio
              lang={lang}
              theme={theme}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Economics & Applied Statistics Studio */}
        {activeLab === 'economics_stat' && (
          <div className="space-y-4">
            <EconomicsStatisticsStudio
              lang={lang}
              theme={theme}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Computer Science & Informatics Studio */}
        {activeLab === 'cs_informatics' && (
          <div className="space-y-4">
            <ComputerScienceInformaticsStudio
              lang={lang}
              theme={theme}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Space & Planetary Studio */}
        {activeLab === 'earth_space' && (
          <div className="space-y-4">
            <SpacePlanetaryStudio
              lang={lang}
              theme={theme}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* National Civics & Constitutional Studio */}
        {activeLab === 'civics' && (
          <div className="space-y-4">
            <NationalCivicsStudio
              lang={lang}
              theme={theme}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Islamic Studies Studio */}
        {activeLab === 'islamic_studies' && (
          <div className="space-y-4">
            <IslamicStudiesStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Christian Heritage & Studies Studio */}
        {activeLab === 'christian_studies' && (
          <div className="space-y-4">
            <ChristianHeritageStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Business Modeling & Entrepreneurship Studio */}
        {activeLab === 'business' && (
          <div className="space-y-4">
            <BusinessModelingStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Fine Arts & Architectural Design Studio */}
        {activeLab === 'fine_arts' && (
          <div className="space-y-4">
            <FineArtsArchitectureStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Music Theory & Audio Studio */}
        {activeLab === 'music' && (
          <div className="space-y-4">
            <MusicTheoryStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Agricultural Technology Studio */}
        {activeLab === 'agriculture' && (
          <div className="space-y-4">
            <AgriculturalTechnologyStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Industrial Engineering Studio */}
        {activeLab === 'industrial' && (
          <div className="space-y-4">
            <IndustrialEngineeringStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Commercial Finance Studio */}
        {activeLab === 'commercial' && (
          <div className="space-y-4">
            <CommercialFinanceStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Tourism Hospitality Studio */}
        {activeLab === 'tourism' && (
          <div className="space-y-4">
            <TourismHospitalityStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Renewable Energy & Environmental Sustainability Studio */}
        {activeLab === 'renewable' && (
          <div className="space-y-4">
            <RenewableEnergyStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}

        {/* Arduino Robotics & Mechatronics Studio */}
        {activeLab === 'robotics' && (
          <div className="space-y-4">
            <ArduinoRoboticsStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={isHubFullscreen}
            />
          </div>
        )}
      </div>

      {/* Guided Experiments Modal */}
      <GuidedExperimentsModal
        isOpen={isGuidedModalOpen}
        onClose={() => setIsGuidedModalOpen(false)}
        lang={lang}
        theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
        activeLab={activeLab === 'history' || activeLab === 'languages' || activeLab === 'geography' || activeLab === 'geology' || activeLab === 'philosophy' || activeLab === 'psychology' || activeLab === 'economics_stat' || activeLab === 'cs_informatics' || activeLab === 'earth_space' || activeLab === 'civics' || activeLab === 'islamic_studies' || activeLab === 'christian_studies' || activeLab === 'business' || activeLab === 'fine_arts' || activeLab === 'music' || activeLab === 'agriculture' || activeLab === 'industrial' || activeLab === 'commercial' || activeLab === 'tourism' || activeLab === 'renewable' || activeLab === 'robotics' ? 'physics' : activeLab}
        onOpenReportGenerator={(expId) => {
          setIsGuidedModalOpen(false);
          setReportExpId(expId);
          setIsReportModalOpen(true);
        }}
      />

      {/* Laboratory Practical Report Generator Modal */}
      <LabReportGeneratorModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        lang={lang}
        theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
        initialExperimentId={reportExpId}
        initialDiscipline={(activeLab === 'history' || activeLab === 'languages' || activeLab === 'geography' || activeLab === 'geology' || activeLab === 'philosophy' || activeLab === 'psychology' || activeLab === 'economics_stat' || activeLab === 'cs_informatics' || activeLab === 'earth_space' || activeLab === 'civics' || activeLab === 'islamic_studies' || activeLab === 'christian_studies' || activeLab === 'business' || activeLab === 'fine_arts' || activeLab === 'music' || activeLab === 'agriculture' || activeLab === 'industrial' || activeLab === 'commercial' || activeLab === 'tourism' || activeLab === 'renewable' || activeLab === 'robotics' ? 'physics' : activeLab) as LabDiscipline}
      />
    </div>
  );
};
