import React, { useState } from 'react';
import type { Lesson, Branch, SolvedProblem, Curriculum } from '../types/curriculum';
import type { Language, UserRole } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import { Interactive3DGeometry } from './Interactive3DGeometry';
import { InteractivePascalTriangle } from './InteractivePascalTriangle';
import { InteractiveCalculusTangent } from './InteractiveCalculusTangent';
import { InteractiveStaticsFriction } from './InteractiveStaticsFriction';
import { InteractiveComplexArgand } from './InteractiveComplexArgand';
import { InteractiveNormalDistribution } from './InteractiveNormalDistribution';
import { InteractiveDynamicsMotion } from './InteractiveDynamicsMotion';
import { InteractiveMatrixLab } from './InteractiveMatrixLab';
import { InteractiveWorkEnergyLab } from './InteractiveWorkEnergyLab';
import { InteractiveTitrationStudio } from './InteractiveTitrationStudio';
import { InteractivePhotoelectricStudio } from './InteractivePhotoelectricStudio';
import { InteractiveGeneticsStudio } from './InteractiveGeneticsStudio';
import { Interactive3DInductionStudio } from './Interactive3DInductionStudio';
import { PhysicsLab, type PhysicsTab } from './labs/PhysicsLab';
import { ChemistryLab } from './labs/ChemistryLab';
import { BiologyLab, type BioTab } from './labs/BiologyLab';
import { EnglishLessonInteractiveWidget } from './EnglishLessonInteractiveWidget';
import { FrenchAudioStudio } from './labs/FrenchAudioStudio';
import { ArabicGrammarStudio } from './labs/ArabicGrammarStudio';
import { HistoryTimelineStudio } from './labs/HistoryTimelineStudio';
import { GeopoliticalMapStudio } from './labs/GeopoliticalMapStudio';
import { GeologyEarthStudio } from './labs/GeologyEarthStudio';
import { LogicStudio } from './labs/LogicStudio';
import { PsychologyStudio } from './labs/PsychologyStudio';
import { EconomicsStatisticsStudio } from './labs/EconomicsStatisticsStudio';
import { ComputerScienceInformaticsStudio } from './labs/ComputerScienceInformaticsStudio';
import { SpacePlanetaryStudio } from './labs/SpacePlanetaryStudio';
import { GermanLanguageStudio } from './labs/GermanLanguageStudio';
import { ItalianLanguageStudio } from './labs/ItalianLanguageStudio';
import { SpanishLanguageStudio } from './labs/SpanishLanguageStudio';
import { ChineseLanguageStudio } from './labs/ChineseLanguageStudio';
import { IslamicStudiesStudio } from './labs/IslamicStudiesStudio';
import { ChristianHeritageStudio } from './labs/ChristianHeritageStudio';
import { BusinessModelingStudio } from './labs/BusinessModelingStudio';
import { FineArtsArchitectureStudio } from './labs/FineArtsArchitectureStudio';
import { MusicTheoryStudio } from './labs/MusicTheoryStudio';
import { AgriculturalTechnologyStudio } from './labs/AgriculturalTechnologyStudio';
import { IndustrialEngineeringStudio } from './labs/IndustrialEngineeringStudio';
import { CommercialFinanceStudio } from './labs/CommercialFinanceStudio';
import { TourismHospitalityStudio } from './labs/TourismHospitalityStudio';
import { NationalCivicsStudio } from './labs/NationalCivicsStudio';
import { TextbookDiagram } from './TextbookDiagram';
import { ProgressiveHintDrawer } from './ProgressiveHintDrawer';
import { getProgressiveHintsForQuestion } from '../services/aiStudyHintService';
import { Printer, ChevronDown, ChevronUp, Lightbulb, Clock, CheckCircle, Target, BookOpen, Layers, Award, Star, Check, RotateCcw, XCircle, CheckCircle2, Compass, HelpCircle, Calculator, FlaskConical, Microscope, Copy, ExternalLink, Download, Bookmark, Sparkles, Maximize2, Minimize2 } from 'lucide-react';
import { useNativeLabFullscreen } from '../core/labs/useNativeLabFullscreen';
import { getOfficialBookByBranch, getBookDownloadUrl } from '../data/officialBooksData';
import { SUBJECTS } from '../data/subjects';
import clipsatLogo from '../assets/clipsat-logo.png';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  role: UserRole;
  lesson: Lesson;
  branch: Branch;
  curriculum?: Curriculum;
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
  onSelectLesson?: (branch: Branch, lesson: Lesson, tab?: string) => void;
  onOpenDesmos?: (mode?: '2d' | '3d' | 'scientific' | 'geometry') => void;
  onOpenOfficialBooks?: (bookId?: string) => void;
}

export const LessonView: React.FC<Props> = ({
  lang,
  theme = 'dark',
  role,
  lesson,
  branch,
  curriculum,
  activeSubTab,
  onSubTabChange,
  onSelectLesson,
  onOpenDesmos,
  onOpenOfficialBooks,
}) => {
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const matchingBook = getOfficialBookByBranch(branch.id);
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});
  const [databankDifficulty, setDatabankDifficulty] = useState<'easy' | 'medium' | 'hots'>('easy');
  const [filterBookmarkedOnly, setFilterBookmarkedOnly] = useState<boolean>(false);
  const [labActivity, setLabActivity] = useState<'simulator' | 'desmos' | 'discovery'>('simulator');
  const [discoveryChecks, setDiscoveryChecks] = useState<Record<string, boolean>>({});
  const { isFullscreen: isMathFullscreen, toggleFullscreen: toggleMathFullscreen, exitFullscreen: exitMathFullscreen } = useNativeLabFullscreen();

  // Student Interactive Practice & Bookmarking State (saved in localStorage)
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('egbac_user_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarkedProblems, setBookmarkedProblems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('egbac_bookmarks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleSelectOption = (probId: string, optIdx: number) => {
    setUserAnswers((prev) => {
      const updated = { ...prev, [probId]: optIdx };
      try {
        localStorage.setItem('egbac_user_answers', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleClearAnswer = (probId: string) => {
    setUserAnswers((prev) => {
      const updated = { ...prev };
      delete updated[probId];
      try {
        localStorage.setItem('egbac_user_answers', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleToggleBookmark = (probId: string) => {
    setBookmarkedProblems((prev) => {
      const updated = { ...prev, [probId]: !prev[probId] };
      try {
        localStorage.setItem('egbac_bookmarks', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Chapter-level data bindings
  const currentChapter = branch.chapters.find((c) => c.lessons.some((l) => l.id === lesson.id)) || branch.chapters[0];
  const chapterSolvedExamples: SolvedProblem[] = currentChapter?.solvedExamples || [];
  const chapterExerciseProblems: SolvedProblem[] = currentChapter?.exerciseProblems || [];
  const chapterDatabank = currentChapter?.databank;

  const toggleHint = (problemId: string) => {
    setOpenHints((prev) => ({ ...prev, [problemId]: !prev[problemId] }));
  };

  const toggleSolution = (problemId: string) => {
    setOpenSolutions((prev) => ({ ...prev, [problemId]: !prev[problemId] }));
  };

  const t = translations[lang];

  const is3D = branch.id === 'algebra_solid' || branch.id === 'egbac_vectors_geometry' || lesson.interactiveWidget.type === '3d_vectors';

  const renderInteractiveWidget = () => {
    const wType = lesson.interactiveWidget?.type;
    if (wType === 'titration_curve') {
      return <InteractiveTitrationStudio lang={lang} theme={theme} isFullscreen={false} />;
    }
    if (wType === 'photoelectric_stopping') {
      return <InteractivePhotoelectricStudio lang={lang} theme={theme} isFullscreen={false} />;
    }
    if (wType === 'genetics_punnett') {
      return <InteractiveGeneticsStudio lang={lang} theme={theme} isFullscreen={false} />;
    }

    if (branch.id === 'thanaweya_physics' || branch.id === 'egbac_physics') {
      let initialTab: PhysicsTab = 'circuits';
      if (wType === 'physics_circuits') {
        initialTab = 'circuits';
      } else if (wType === 'physics_magnetism') {
        initialTab = 'magnetism';
      } else if (wType === 'physics_dynamo') {
        initialTab = 'dynamo';
      } else if (wType === 'physics_resonance') {
        initialTab = 'resonance';
      } else if (wType === 'physics_photoelectric') {
        initialTab = 'photoelectric';
      } else if (wType === 'physics_atomic_lasers') {
        initialTab = 'atomic_lasers';
      } else if (wType === 'physics_flashcards') {
        initialTab = 'flashcards';
      } else {
        if (lesson.id === 'th_phys_l1') {
          initialTab = 'circuits';
        } else if (lesson.id === 'th_phys_l2' || lesson.id === 'egbac_phys_l3') {
          initialTab = 'magnetism';
        } else if (lesson.id === 'th_phys_l3') {
          initialTab = 'dynamo';
        } else if (lesson.id === 'th_phys_l4' || lesson.id === 'egbac_phys_l4') {
          initialTab = 'resonance';
        } else if (lesson.id === 'th_phys_l5' || lesson.id === 'egbac_phys_l1') {
          initialTab = 'photoelectric';
        } else if (lesson.id === 'th_phys_l6' || lesson.id === 'egbac_phys_l2') {
          initialTab = 'atomic_lasers';
        } else if (lesson.id === 'egbac_phys_l5') {
          initialTab = 'flashcards';
        }
      }
      return <PhysicsLab lang={lang} theme={theme} initialTab={initialTab} />;
    }
    if (branch.id === 'thanaweya_chemistry' || branch.id === 'egbac_chemistry') {
      return <ChemistryLab lang={lang} theme={theme} />;
    }
    if (branch.id === 'thanaweya_biology' || branch.id === 'egbac_biology') {
      let initialTab: BioTab = 'skeleton';
      if (wType === 'biology_endocrine' || currentChapter?.id === 'th_bio_ch2') {
        initialTab = 'endocrine';
      } else if (wType === 'biology_menstrual' || currentChapter?.id === 'th_bio_ch3') {
        initialTab = 'menstrual';
      } else if (wType === 'biology_immunity' || currentChapter?.id === 'th_bio_ch4' || currentChapter?.id === 'egbac_bio_ch3') {
        initialTab = 'immunity';
      } else if (wType === 'biology_genetics' || currentChapter?.id === 'egbac_bio_ch1' || currentChapter?.id === 'egbac_bio_ch4') {
        initialTab = 'genetics';
      } else if (wType === 'biology_bioenergetics' || currentChapter?.id === 'egbac_bio_ch2') {
        initialTab = 'bioenergetics';
      } else if (wType === 'biology_dna' || currentChapter?.id === 'th_bio_ch5') {
        initialTab = 'dna';
      } else if (wType === 'biology_sarcomere' || lesson.id === 'th_bio_ch1_l2') {
        initialTab = 'sarcomere';
      } else if (wType === 'biology_plant') {
        initialTab = 'plant';
      } else if (wType === 'biology_skeleton' || lesson.id === 'th_bio_ch1_l1') {
        initialTab = 'skeleton';
      }
      return <BiologyLab lang={lang} theme={theme} initialTab={initialTab} />;
    }

    const widgetComponent = (() => {
      switch (lesson.interactiveWidget.type) {
        case '3d_vectors':
          return <Interactive3DGeometry lang={lang} theme={theme} />;
        case 'pascal_binomial':
          return <InteractivePascalTriangle lang={lang} theme={theme} />;
        case 'calculus_tangent':
          return <InteractiveCalculusTangent lang={lang} theme={theme} />;
        case 'statics_friction':
          return <InteractiveStaticsFriction lang={lang} theme={theme} />;
        case 'complex_argand':
          return <InteractiveComplexArgand lang={lang} theme={theme} />;
        case 'normal_distribution':
          return <InteractiveNormalDistribution lang={lang} theme={theme} />;
        case 'dynamics_motion':
          return <InteractiveDynamicsMotion lang={lang} theme={theme} />;
        case 'matrix_solver':
          return <InteractiveMatrixLab lang={lang} theme={theme} />;
        case 'work_energy':
          return <InteractiveWorkEnergyLab lang={lang} theme={theme} />;
        case 'titration_curve':
          return <InteractiveTitrationStudio lang={lang} theme={theme} />;
        case 'photoelectric_stopping':
          return <InteractivePhotoelectricStudio lang={lang} theme={theme} />;
        case 'genetics_punnett':
          return <InteractiveGeneticsStudio lang={lang} theme={theme} />;
        case 'induction_3d':
        case 'dynamo_3d':
          return <Interactive3DInductionStudio lang={lang} theme={theme} isFullscreen={false} />;
        case 'english_dictionary':
        case 'english_translation':
        case 'english_grammar_lab':
        case 'english_audio_lab':
          return (
            <EnglishLessonInteractiveWidget
              type={lesson.interactiveWidget.type}
              lang={lang}
              theme={theme}
            />
          );
        case 'french_audio_lab':
        case 'french_grammar_lab':
          return (
            <FrenchAudioStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
            />
          );
        case 'german_audio_lab':
        case 'german_grammar_lab':
        case 'german_cases_matrix':
          return (
            <GermanLanguageStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
            />
          );
        case 'italian_language_lab':
        case 'italian_grammar_lab':
        case 'italian_pronoun_matrix':
          return (
            <ItalianLanguageStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
            />
          );
        case 'spanish_language_lab':
        case 'spanish_phonetics_lab':
        case 'spanish_grammar_matrix':
          return (
            <SpanishLanguageStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
            />
          );
        case 'chinese_language_studio':
        case 'chinese_pinyin_tones_lab':
        case 'chinese_hanzi_radicals_lab':
        case 'chinese_grammar_patterns_lab':
        case 'chinese_listening_comprehension_lab':
          return (
            <ChineseLanguageStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
              initialTab={
                lesson.interactiveWidget.type === 'chinese_hanzi_radicals_lab'
                  ? 'radicals'
                  : lesson.interactiveWidget.type === 'chinese_grammar_patterns_lab'
                  ? 'grammar'
                  : lesson.interactiveWidget.type === 'chinese_listening_comprehension_lab'
                  ? 'listening'
                  : 'pinyin_tones'
              }
            />
          );
        case 'islamic_studies_lab':
        case 'tajweed_rules_lab':
        case 'maqasid_fiqh_studio':
        case 'islamic_civilization_timeline':
          return (
            <IslamicStudiesStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
            />
          );
        case 'christian_heritage_studio':
        case 'coptic_history_timeline':
        case 'sacraments_interactive_lab':
        case 'christian_ethics_sandbox':
          return (
            <ChristianHeritageStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
            />
          );
        case 'business_modeling_studio':
        case 'lean_canvas_builder':
        case 'financial_valuation_lab':
        case 'supply_chain_simulator':
          return (
            <BusinessModelingStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
            />
          );
        case 'fine_arts_architecture_studio':
        case 'perspective_grid_drafter':
        case 'golden_ratio_calculator':
        case 'islamic_geometry_generator':
          return (
            <FineArtsArchitectureStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
            />
          );
        case 'music_theory_studio':
        case 'solfege_ear_training_lab':
        case 'maqamat_oriental_lab':
        case 'rhythm_iqaat_sandbox':
        case 'western_harmony_counterpoint_lab':
          return (
            <MusicTheoryStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
            />
          );
        case 'agricultural_technology_studio':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={false} initialStation="soil_chemistry" />;
        case 'agri_soil_chemistry_lab':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={false} initialStation="soil_chemistry" />;
        case 'agri_irrigation_evapotranspiration_lab':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={false} initialStation="irrigation_budgeting" />;
        case 'agri_hydroponics_greenhouse_lab':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={false} initialStation="hydroponics_greenhouse" />;
        case 'agri_egyptian_megaprojects_lab':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={false} initialStation="egyptian_megaprojects" />;
        case 'agri_ipm_plant_pathology_lab':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={false} initialStation="ipm_pathology" />;
        case 'industrial_engineering_studio':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={false} initialStation="materials_testing" />;
        case 'ind_materials_testing_lab':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={false} initialStation="materials_testing" />;
        case 'ind_plc_automation_lab':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={false} initialStation="plc_automation" />;
        case 'ind_fluid_power_lab':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={false} initialStation="fluid_power" />;
        case 'ind_cnc_machining_lab':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={false} initialStation="cnc_machining" />;
        case 'ind_quality_spc_lab':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={false} initialStation="quality_spc" />;
        case 'commercial_finance_studio':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={false} initialStation="financial_statements" />;
        case 'comm_financial_statements_lab':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={false} initialStation="financial_statements" />;
        case 'comm_compound_interest_lab':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={false} initialStation="compound_interest" />;
        case 'comm_capital_budgeting_lab':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={false} initialStation="capital_budgeting" />;
        case 'comm_banking_credit_lab':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={false} initialStation="banking_credit" />;
        case 'comm_portfolio_risk_lab':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={false} initialStation="portfolio_risk" />;
        case 'tourism_hospitality_studio':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={false} initialStation="hotel_yield" />;
        case 'tour_yield_management_lab':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={false} initialStation="hotel_yield" />;
        case 'tour_package_costing_lab':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={false} initialStation="tour_costing" />;
        case 'tour_heritage_explorer_lab':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={false} initialStation="heritage_explorer" />;
        case 'tour_carrying_capacity_lab':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={false} initialStation="carrying_capacity" />;
        case 'tour_gds_booking_lab':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={false} initialStation="gds_terminal" />;
        case 'arabic_grammar_lab':
        case 'arabic_rhetoric_lab':
          return (
            <ArabicGrammarStudio />
          );
        case 'history_timeline_lab':
          return (
            <HistoryTimelineStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
            />
          );
        case 'geopolitical_map':
        case 'geopolitical_flashcards':
        case 'boundary_dispute_simulator':
        case 'economic_bloc_analyzer':
          return (
            <GeopoliticalMapStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
              initialMode={
                lesson.interactiveWidget.type === 'boundary_dispute_simulator'
                  ? 'hotspots'
                  : lesson.interactiveWidget.type === 'economic_bloc_analyzer'
                  ? 'blocs'
                  : 'morphology'
              }
            />
          );
        case 'crystal_system_inspector':
        case 'mohs_hardness_tester':
        case 'bowen_reaction_series':
        case 'plate_tectonics_simulator':
        case 'isostasy_root_calculator':
        case 'stratigraphic_cross_section':
        case 'geological_dating_solver':
        case 'marine_pressure_calculator':
        case 'ecosystem_energy_pyramid':
          return (
            <GeologyEarthStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
              initialMode={
                lesson.interactiveWidget.type === 'bowen_reaction_series'
                  ? 'bowen'
                  : lesson.interactiveWidget.type === 'plate_tectonics_simulator' || lesson.interactiveWidget.type === 'isostasy_root_calculator'
                  ? 'tectonics'
                  : lesson.interactiveWidget.type === 'stratigraphic_cross_section' || lesson.interactiveWidget.type === 'geological_dating_solver'
                  ? 'stratigraphy'
                  : lesson.interactiveWidget.type === 'marine_pressure_calculator' || lesson.interactiveWidget.type === 'ecosystem_energy_pyramid'
                  ? 'ecosystem'
                  : 'crystals'
              }
            />
          );
        case 'logic_truth_table':
        case 'logic_syllogism':
        case 'logic_induction_mills':
        case 'logic_fuzzy_ai':
        case 'philosophy_bioethics_matrix':
          return (
            <LogicStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
              initialMode={
                lesson.interactiveWidget.type === 'logic_truth_table'
                  ? 'truth_table'
                  : lesson.interactiveWidget.type === 'logic_syllogism'
                  ? 'syllogism'
                  : lesson.interactiveWidget.type === 'logic_induction_mills'
                  ? 'mills_methods'
                  : lesson.interactiveWidget.type === 'logic_fuzzy_ai'
                  ? 'fuzzy_ai'
                  : 'bioethics_matrix'
              }
            />
          );
        case 'psychology_learning_theories':
        case 'psychology_memory_retention':
        case 'psychology_conflict_matrix':
        case 'sociology_social_processes':
        case 'sociology_culture_extremism':
          return (
            <PsychologyStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
              initialMode={
                lesson.interactiveWidget.type === 'psychology_learning_theories'
                  ? 'learning_theories'
                  : lesson.interactiveWidget.type === 'psychology_memory_retention'
                  ? 'memory_retention'
                  : lesson.interactiveWidget.type === 'psychology_conflict_matrix'
                  ? 'conflict_matrix'
                  : lesson.interactiveWidget.type === 'sociology_social_processes'
                  ? 'social_processes'
                  : 'culture_extremism'
              }
            />
          );
        case 'economics_market_equilibrium':
        case 'economics_national_income':
        case 'statistics_correlation_regression':
        case 'statistics_probability_tree':
        case 'statistics_normal_curve':
          return (
            <EconomicsStatisticsStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
              initialMode={
                lesson.interactiveWidget.type === 'economics_market_equilibrium'
                  ? 'market_equilibrium'
                  : lesson.interactiveWidget.type === 'economics_national_income'
                  ? 'national_income'
                  : lesson.interactiveWidget.type === 'statistics_correlation_regression'
                  ? 'correlation_regression'
                  : lesson.interactiveWidget.type === 'statistics_probability_tree'
                  ? 'probability_tree'
                  : 'normal_distribution'
              }
            />
          );
        case 'cs_logic_circuit':
        case 'cs_algorithm_visualizer':
        case 'cs_sql_sandbox':
        case 'cs_network_subnet':
        case 'cs_neural_playground':
          return (
            <ComputerScienceInformaticsStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
              initialMode={
                lesson.interactiveWidget.type === 'cs_logic_circuit'
                  ? 'logic_circuit'
                  : lesson.interactiveWidget.type === 'cs_algorithm_visualizer'
                  ? 'algorithm_visualizer'
                  : lesson.interactiveWidget.type === 'cs_sql_sandbox'
                  ? 'sql_sandbox'
                  : lesson.interactiveWidget.type === 'cs_network_subnet'
                  ? 'network_subnet'
                  : 'neural_playground'
              }
            />
          );
        case 'space_orbit_sim':
        case 'planetary_viewer':
        case 'stellar_lifecycle':
        case 'hohmann_transfer':
        case 'remote_sensing_spectroscopy':
          return (
            <SpacePlanetaryStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
              initialMode={
                lesson.interactiveWidget.type === 'space_orbit_sim'
                  ? 'orbital_sim'
                  : lesson.interactiveWidget.type === 'planetary_viewer'
                  ? 'planet_explorer'
                  : lesson.interactiveWidget.type === 'stellar_lifecycle'
                  ? 'hr_diagram'
                  : lesson.interactiveWidget.type === 'hohmann_transfer'
                  ? 'hohmann_transfer'
                  : 'remote_sensing'
              }
            />
          );
        case 'civics_constitution_lab':
        case 'civics_electoral_simulator':
        case 'civics_party_matrix':
          return (
            <NationalCivicsStudio
              lang={lang}
              theme={theme}
              isFullscreen={false}
              initialTab={
                lesson.interactiveWidget.type === 'civics_constitution_lab'
                  ? 'constitution_review'
                  : lesson.interactiveWidget.type === 'civics_electoral_simulator'
                  ? 'electoral_systems'
                  : 'parties_matrix'
              }
            />
          );
        default:
          return <Interactive3DGeometry lang={lang} theme={theme} />;
      }
    })();

    const renderFullscreenWidget = () => {
      switch (lesson.interactiveWidget?.type) {
        case '3d_vectors':
          return <Interactive3DGeometry lang={lang} theme={theme} isFullscreen={true} />;
        case 'pascal_binomial':
          return <InteractivePascalTriangle lang={lang} theme={theme} isFullscreen={true} />;
        case 'calculus_tangent':
          return <InteractiveCalculusTangent lang={lang} theme={theme} isFullscreen={true} />;
        case 'statics_friction':
          return <InteractiveStaticsFriction lang={lang} theme={theme} isFullscreen={true} />;
        case 'complex_argand':
          return <InteractiveComplexArgand lang={lang} theme={theme} isFullscreen={true} />;
        case 'normal_distribution':
          return <InteractiveNormalDistribution lang={lang} theme={theme} isFullscreen={true} />;
        case 'dynamics_motion':
          return <InteractiveDynamicsMotion lang={lang} theme={theme} isFullscreen={true} />;
        case 'matrix_solver':
          return <InteractiveMatrixLab lang={lang} theme={theme} isFullscreen={true} />;
        case 'work_energy':
          return <InteractiveWorkEnergyLab lang={lang} theme={theme} isFullscreen={true} />;
        case 'titration_curve':
          return <InteractiveTitrationStudio lang={lang} theme={theme} isFullscreen={true} />;
        case 'photoelectric_stopping':
          return <InteractivePhotoelectricStudio lang={lang} theme={theme} isFullscreen={true} />;
        case 'genetics_punnett':
          return <InteractiveGeneticsStudio lang={lang} theme={theme} isFullscreen={true} />;
        case 'induction_3d':
        case 'dynamo_3d':
          return <Interactive3DInductionStudio lang={lang} theme={theme} isFullscreen={true} />;
        case 'english_dictionary':
        case 'english_translation':
        case 'english_grammar_lab':
        case 'english_audio_lab':
          return (
            <EnglishLessonInteractiveWidget
              type={lesson.interactiveWidget.type}
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'french_audio_lab':
        case 'french_grammar_lab':
          return (
            <FrenchAudioStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'german_audio_lab':
        case 'german_grammar_lab':
        case 'german_cases_matrix':
          return (
            <GermanLanguageStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'italian_language_lab':
        case 'italian_grammar_lab':
        case 'italian_pronoun_matrix':
          return (
            <ItalianLanguageStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'spanish_language_lab':
        case 'spanish_phonetics_lab':
        case 'spanish_grammar_matrix':
          return (
            <SpanishLanguageStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'chinese_language_studio':
        case 'chinese_pinyin_tones_lab':
        case 'chinese_hanzi_radicals_lab':
        case 'chinese_grammar_patterns_lab':
        case 'chinese_listening_comprehension_lab':
          return (
            <ChineseLanguageStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
              initialTab={
                lesson.interactiveWidget.type === 'chinese_hanzi_radicals_lab'
                  ? 'radicals'
                  : lesson.interactiveWidget.type === 'chinese_grammar_patterns_lab'
                  ? 'grammar'
                  : lesson.interactiveWidget.type === 'chinese_listening_comprehension_lab'
                  ? 'listening'
                  : 'pinyin_tones'
              }
            />
          );
        case 'islamic_studies_lab':
        case 'tajweed_rules_lab':
        case 'maqasid_fiqh_studio':
        case 'islamic_civilization_timeline':
          return (
            <IslamicStudiesStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'christian_heritage_studio':
        case 'coptic_history_timeline':
        case 'sacraments_interactive_lab':
        case 'christian_ethics_sandbox':
          return (
            <ChristianHeritageStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'business_modeling_studio':
        case 'lean_canvas_builder':
        case 'financial_valuation_lab':
        case 'supply_chain_simulator':
          return (
            <BusinessModelingStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'fine_arts_architecture_studio':
        case 'perspective_grid_drafter':
        case 'golden_ratio_calculator':
        case 'islamic_geometry_generator':
          return (
            <FineArtsArchitectureStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'music_theory_studio':
        case 'solfege_ear_training_lab':
        case 'maqamat_oriental_lab':
        case 'rhythm_iqaat_sandbox':
        case 'western_harmony_counterpoint_lab':
          return (
            <MusicTheoryStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'agricultural_technology_studio':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={true} initialStation="soil_chemistry" />;
        case 'agri_soil_chemistry_lab':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={true} initialStation="soil_chemistry" />;
        case 'agri_irrigation_evapotranspiration_lab':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={true} initialStation="irrigation_budgeting" />;
        case 'agri_hydroponics_greenhouse_lab':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={true} initialStation="hydroponics_greenhouse" />;
        case 'agri_egyptian_megaprojects_lab':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={true} initialStation="egyptian_megaprojects" />;
        case 'agri_ipm_plant_pathology_lab':
          return <AgriculturalTechnologyStudio lang={lang} theme={theme} isFullscreen={true} initialStation="ipm_pathology" />;
        case 'industrial_engineering_studio':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={true} initialStation="materials_testing" />;
        case 'ind_materials_testing_lab':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={true} initialStation="materials_testing" />;
        case 'ind_plc_automation_lab':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={true} initialStation="plc_automation" />;
        case 'ind_fluid_power_lab':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={true} initialStation="fluid_power" />;
        case 'ind_cnc_machining_lab':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={true} initialStation="cnc_machining" />;
        case 'ind_quality_spc_lab':
          return <IndustrialEngineeringStudio lang={lang} theme={theme} isFullscreen={true} initialStation="quality_spc" />;
        case 'commercial_finance_studio':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={true} initialStation="financial_statements" />;
        case 'comm_financial_statements_lab':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={true} initialStation="financial_statements" />;
        case 'comm_compound_interest_lab':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={true} initialStation="compound_interest" />;
        case 'comm_capital_budgeting_lab':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={true} initialStation="capital_budgeting" />;
        case 'comm_banking_credit_lab':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={true} initialStation="banking_credit" />;
        case 'comm_portfolio_risk_lab':
          return <CommercialFinanceStudio lang={lang} theme={theme} isFullscreen={true} initialStation="portfolio_risk" />;
        case 'tourism_hospitality_studio':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={true} initialStation="hotel_yield" />;
        case 'tour_yield_management_lab':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={true} initialStation="hotel_yield" />;
        case 'tour_package_costing_lab':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={true} initialStation="tour_costing" />;
        case 'tour_heritage_explorer_lab':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={true} initialStation="heritage_explorer" />;
        case 'tour_carrying_capacity_lab':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={true} initialStation="carrying_capacity" />;
        case 'tour_gds_booking_lab':
          return <TourismHospitalityStudio lang={lang} theme={theme} isFullscreen={true} initialStation="gds_terminal" />;
        case 'arabic_grammar_lab':
        case 'arabic_rhetoric_lab':
          return (
            <ArabicGrammarStudio />
          );
        case 'history_timeline_lab':
          return (
            <HistoryTimelineStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
            />
          );
        case 'geopolitical_map':
        case 'geopolitical_flashcards':
        case 'boundary_dispute_simulator':
        case 'economic_bloc_analyzer':
          return (
            <GeopoliticalMapStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
              initialMode={
                lesson.interactiveWidget.type === 'boundary_dispute_simulator'
                  ? 'hotspots'
                  : lesson.interactiveWidget.type === 'economic_bloc_analyzer'
                  ? 'blocs'
                  : 'morphology'
              }
            />
          );
        case 'crystal_system_inspector':
        case 'mohs_hardness_tester':
        case 'bowen_reaction_series':
        case 'plate_tectonics_simulator':
        case 'isostasy_root_calculator':
        case 'stratigraphic_cross_section':
        case 'geological_dating_solver':
        case 'marine_pressure_calculator':
        case 'ecosystem_energy_pyramid':
          return (
            <GeologyEarthStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
              initialMode={
                lesson.interactiveWidget.type === 'bowen_reaction_series'
                  ? 'bowen'
                  : lesson.interactiveWidget.type === 'plate_tectonics_simulator' || lesson.interactiveWidget.type === 'isostasy_root_calculator'
                  ? 'tectonics'
                  : lesson.interactiveWidget.type === 'stratigraphic_cross_section' || lesson.interactiveWidget.type === 'geological_dating_solver'
                  ? 'stratigraphy'
                  : lesson.interactiveWidget.type === 'marine_pressure_calculator' || lesson.interactiveWidget.type === 'ecosystem_energy_pyramid'
                  ? 'ecosystem'
                  : 'crystals'
              }
            />
          );
        case 'logic_truth_table':
        case 'logic_syllogism':
        case 'logic_induction_mills':
        case 'logic_fuzzy_ai':
        case 'philosophy_bioethics_matrix':
          return (
            <LogicStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
              initialMode={
                lesson.interactiveWidget.type === 'logic_truth_table'
                  ? 'truth_table'
                  : lesson.interactiveWidget.type === 'logic_syllogism'
                  ? 'syllogism'
                  : lesson.interactiveWidget.type === 'logic_induction_mills'
                  ? 'mills_methods'
                  : lesson.interactiveWidget.type === 'logic_fuzzy_ai'
                  ? 'fuzzy_ai'
                  : 'bioethics_matrix'
              }
            />
          );
        case 'psychology_learning_theories':
        case 'psychology_memory_retention':
        case 'psychology_conflict_matrix':
        case 'sociology_social_processes':
        case 'sociology_culture_extremism':
          return (
            <PsychologyStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
              initialMode={
                lesson.interactiveWidget.type === 'psychology_learning_theories'
                  ? 'learning_theories'
                  : lesson.interactiveWidget.type === 'psychology_memory_retention'
                  ? 'memory_retention'
                  : lesson.interactiveWidget.type === 'psychology_conflict_matrix'
                  ? 'conflict_matrix'
                  : lesson.interactiveWidget.type === 'sociology_social_processes'
                  ? 'social_processes'
                  : 'culture_extremism'
              }
            />
          );
        case 'economics_market_equilibrium':
        case 'economics_national_income':
        case 'statistics_correlation_regression':
        case 'statistics_probability_tree':
        case 'statistics_normal_curve':
          return (
            <EconomicsStatisticsStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
              initialMode={
                lesson.interactiveWidget.type === 'economics_market_equilibrium'
                  ? 'market_equilibrium'
                  : lesson.interactiveWidget.type === 'economics_national_income'
                  ? 'national_income'
                  : lesson.interactiveWidget.type === 'statistics_correlation_regression'
                  ? 'correlation_regression'
                  : lesson.interactiveWidget.type === 'statistics_probability_tree'
                  ? 'probability_tree'
                  : 'normal_distribution'
              }
            />
          );
        case 'cs_logic_circuit':
        case 'cs_algorithm_visualizer':
        case 'cs_sql_sandbox':
        case 'cs_network_subnet':
        case 'cs_neural_playground':
          return (
            <ComputerScienceInformaticsStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
              initialMode={
                lesson.interactiveWidget.type === 'cs_logic_circuit'
                  ? 'logic_circuit'
                  : lesson.interactiveWidget.type === 'cs_algorithm_visualizer'
                  ? 'algorithm_visualizer'
                  : lesson.interactiveWidget.type === 'cs_sql_sandbox'
                  ? 'sql_sandbox'
                  : lesson.interactiveWidget.type === 'cs_network_subnet'
                  ? 'network_subnet'
                  : 'neural_playground'
              }
            />
          );
        case 'space_orbit_sim':
        case 'planetary_viewer':
        case 'stellar_lifecycle':
        case 'hohmann_transfer':
        case 'remote_sensing_spectroscopy':
          return (
            <SpacePlanetaryStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
              initialMode={
                lesson.interactiveWidget.type === 'space_orbit_sim'
                  ? 'orbital_sim'
                  : lesson.interactiveWidget.type === 'planetary_viewer'
                  ? 'planet_explorer'
                  : lesson.interactiveWidget.type === 'stellar_lifecycle'
                  ? 'hr_diagram'
                  : lesson.interactiveWidget.type === 'hohmann_transfer'
                  ? 'hohmann_transfer'
                  : 'remote_sensing'
              }
            />
          );
        case 'civics_constitution_lab':
        case 'civics_electoral_simulator':
        case 'civics_party_matrix':
          return (
            <NationalCivicsStudio
              lang={lang}
              theme={theme}
              isFullscreen={true}
              initialTab={
                lesson.interactiveWidget.type === 'civics_constitution_lab'
                  ? 'constitution_review'
                  : lesson.interactiveWidget.type === 'civics_electoral_simulator'
                  ? 'electoral_systems'
                  : 'parties_matrix'
              }
            />
          );
        default:
          return <Interactive3DGeometry lang={lang} theme={theme} isFullscreen={true} />;
      }
    };

    if (isMathFullscreen) {
      return (
        <div className="fixed inset-0 z-50 w-screen h-screen overflow-hidden flex flex-col p-2 sm:p-3 bg-slate-950 text-slate-100 font-sans">
          {/* Workstation Top Bar */}
          <div className="min-h-[50px] sm:min-h-[54px] flex items-center justify-between gap-3 px-3.5 py-2 bg-slate-900/95 border border-slate-800 rounded-2xl shrink-0 backdrop-blur-md shadow-lg z-10">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-md shrink-0">
                <Calculator className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm sm:text-base font-black tracking-tight text-white truncate">
                    {lang === 'ar' ? lesson.titleAr : lesson.titleEn}
                  </h2>
                  <span className="hidden sm:inline text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60 uppercase shrink-0">
                    Full-Screen Workstation Studio
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {onOpenDesmos && (
                <button
                  type="button"
                  onClick={() => onOpenDesmos(is3D ? '3d' : '2d')}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-600/80 hover:bg-cyan-600 text-white transition-all cursor-pointer shadow-xs"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? (is3D ? 'Desmos 3D' : 'Desmos 2D') : (is3D ? 'Desmos 3D' : 'Desmos 2D')}</span>
                </button>
              )}
              <button
                type="button"
                onClick={exitMathFullscreen}
                title={lang === 'ar' ? 'تصغير (Esc)' : 'Exit Fullscreen (Esc)'}
                aria-label={lang === 'ar' ? 'تصغير الشاشة' : 'Exit Fullscreen'}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-xs"
              >
                <Minimize2 className="w-4 h-4 text-indigo-400" />
                <span>{lang === 'ar' ? 'تصغير' : 'Exit'}</span>
              </button>
            </div>
          </div>

          {/* Fullscreen Math Studio Viewport */}
          <div className="flex-1 min-h-0 overflow-hidden mt-2 flex flex-col">
            {renderFullscreenWidget()}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl border transition-all ${
          theme === 'high-contrast'
            ? 'bg-black border-indigo-400 text-white'
            : isLight
            ? 'bg-gradient-to-r from-indigo-50 to-cyan-50 border-indigo-200 text-slate-800'
            : 'bg-gradient-to-r from-slate-900/90 to-indigo-950/40 border-slate-800 text-slate-200'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
              <Calculator className="w-4 h-4" />
            </div>
            <p className="text-xs font-semibold leading-snug">
              {lang === 'ar'
                ? is3D
                  ? 'استكشف بيئة الرياضيات التفاعلية في شاشة كاملة أو عبر حاسبة ديسموس 3D'
                  : 'استكشف المحاكاة الرياضية في بيئة عمل كاملة الشاشة بدون تمرير'
                : is3D
                ? 'Explore interactive mathematics in full-screen workstation or Desmos 3D'
                : 'Experience interactive mathematics in a full-screen zero-scroll workstation'}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleMathFullscreen}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs transition-all cursor-pointer"
              title={lang === 'ar' ? 'شاشة كاملة' : 'Fullscreen'}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'ملء الشاشة' : 'Fullscreen'}</span>
            </button>

            {onOpenDesmos && (
              <button
                type="button"
                onClick={() => onOpenDesmos(is3D ? '3d' : '2d')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold text-xs shadow-xs transition-all cursor-pointer shrink-0 ${
                  theme === 'high-contrast'
                    ? 'bg-yellow-400 text-black font-black'
                    : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? (is3D ? 'فتح في ديسموس 3D' : 'فتح في ديسموس 2D') : (is3D ? 'Open in Desmos 3D' : 'Open in Desmos 2D')}</span>
              </button>
            )}
          </div>
        </div>
        {widgetComponent}
      </div>
    );
  };

  const renderProblemCard = (prob: SolvedProblem, idx: number, badgeText?: string) => {
    const isHintOpen = !!openHints[prob.id];
    const isSolOpen = !!openSolutions[prob.id];
    const options = (lang === 'ar' ? prob.optionsAr : prob.optionsEn) || [];
    const userChosen = userAnswers[prob.id];
    const isAnswered = userChosen !== undefined;
    const isBookmarked = !!bookmarkedProblems[prob.id];

    return (
      <div
        key={prob.id}
        className={`rounded-xl p-4 sm:p-5 space-y-4 shadow-sm border printable-problem print-avoid-break transition-all ${
          isLight ? 'bg-white border-slate-200/90 shadow-xs' : 'bg-slate-950 border-slate-800'
        }`}
      >
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 text-xs font-extrabold px-3 py-1 rounded-lg border border-indigo-300 dark:border-indigo-800 shadow-sm">
              {badgeText || (lang === 'ar' ? `مسألة رقم (${toHindiDigits(idx + 1)})` : `Problem (${idx + 1})`)}
            </span>
            <button
              type="button"
              onClick={() => handleToggleBookmark(prob.id)}
              className={`p-1.5 rounded-lg border transition-all no-print cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                  : isLight
                  ? 'border-slate-200 text-slate-400 hover:text-amber-500 hover:border-amber-400'
                  : 'border-slate-800 text-slate-500 hover:text-amber-400 hover:border-amber-500'
              }`}
              title={lang === 'ar' ? 'حفظ المسألة للمراجعة' : 'Bookmark for review'}
            >
              <Star className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            </button>
          </div>

          <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 dark:text-amber-300 px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/60 shadow-sm">
            {prob.difficulty === 'exam_standard'
              ? lang === 'ar' ? 'نموذج وزاري معتمد' : 'EXAM STANDARD'
              : prob.difficulty === 'hots'
              ? lang === 'ar' ? 'مهارات تفكير عليا' : 'HOTS'
              : prob.difficulty === 'easy'
              ? lang === 'ar' ? 'سهل تأسيسي' : 'EASY'
              : lang === 'ar' ? 'متوسط' : 'MEDIUM'}
          </span>
        </div>

        <div className={`text-sm font-semibold leading-relaxed ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
          <MathRenderer math={lang === 'ar' ? prob.questionAr : prob.questionEn} lang={lang} />
        </div>

        {prob.diagramType && (
          <TextbookDiagram type={prob.diagramType} lang={lang} />
        )}

        {/* Progressive AI KaTeX Study Hint Drawer */}
        <div className="no-print">
          <ProgressiveHintDrawer
            hints={getProgressiveHintsForQuestion({
              id: prob.id,
              questionEn: prob.questionEn,
              questionAr: prob.questionAr,
              difficulty: prob.difficulty,
              optionsEn: prob.optionsEn || [],
              optionsAr: prob.optionsAr || [],
              correctIndex: prob.correctIndex ?? 0,
              explanationEn: prob.stepByStepSolutionEn || (prob.hintEn ? [prob.hintEn] : []),
              explanationAr: prob.stepByStepSolutionAr || (prob.hintAr ? [prob.hintAr] : []),
              chapterId: currentChapter?.id || '',
              chapterTitleEn: currentChapter?.titleEn || '',
              chapterTitleAr: currentChapter?.titleAr || '',
              branchTitleEn: branch?.titleEn || '',
              branchTitleAr: branch?.titleAr || '',
              hintsEn: prob.hintEn ? [prob.hintEn] : undefined,
              hintsAr: prob.hintAr ? [prob.hintAr] : undefined,
            })}
            lang={lang}
            isHots={prob.difficulty === 'hots'}
          />
        </div>

        {options.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 print-options-grid print-avoid-break">
            {options.map((opt, optIdx) => {
              const isSelected = userChosen === optIdx;
              const isCorrect = optIdx === prob.correctIndex;
              const isSelectedCorrect = isSelected && isCorrect;
              const isSelectedWrong = isSelected && !isCorrect;
              const shouldReveal = isSolOpen && isCorrect;

              let cardStyle = isLight
                ? 'border-slate-300/80 bg-white text-slate-900 shadow-xs hover:border-indigo-500 hover:bg-indigo-50/30'
                : 'border-slate-800 bg-slate-900/60 text-slate-200 hover:border-indigo-500/50 hover:bg-slate-900';

              if (isSelectedCorrect) {
                cardStyle = isLight
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30 font-bold'
                  : 'bg-emerald-950/80 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/40 font-bold';
              } else if (isSelectedWrong) {
                cardStyle = isLight
                  ? 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-500/20 font-bold'
                  : 'bg-rose-950/70 border-rose-500 text-rose-100 ring-2 ring-rose-500/30 font-bold';
              } else if (shouldReveal) {
                cardStyle = isLight
                  ? 'bg-emerald-50/70 border-emerald-400 text-emerald-950 ring-1 ring-emerald-400 font-bold'
                  : 'bg-emerald-950/60 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500 font-bold';
              }

              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => handleSelectOption(prob.id, optIdx)}
                  className={`border p-3 rounded-xl flex items-center justify-between gap-2 text-xs transition-all text-left rtl:text-right cursor-pointer group hover:scale-[1.01] active:scale-[0.99] ${cardStyle}`}
                >
                  <div className="flex items-start gap-2.5 min-w-0 flex-1">
                    <span
                      className={`font-black px-2 py-0.5 rounded-md text-[11px] shrink-0 mt-0.5 ${
                        isSelectedCorrect || shouldReveal
                          ? 'bg-emerald-600 text-white'
                          : isSelectedWrong
                          ? 'bg-rose-600 text-white'
                          : isLight
                          ? 'bg-indigo-50 text-indigo-900 border border-indigo-200'
                          : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                      }`}
                    >
                      {lang === 'ar' ? `(${['أ', 'ب', 'ج', 'د'][optIdx]})` : `(${String.fromCharCode(65 + optIdx)})`}
                    </span>
                    <div className={`flex-1 min-w-0 font-semibold leading-relaxed ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                      <MathRenderer math={opt} lang={lang} />
                    </div>
                  </div>
                  {isSelectedCorrect && (
                    <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 shrink-0 flex items-center gap-0.5">
                      <Check className="w-3 h-3" />
                      <span>{lang === 'ar' ? 'صحيح' : 'Correct'}</span>
                    </span>
                  )}
                  {isSelectedWrong && (
                    <span className="text-[10px] font-extrabold text-rose-600 dark:text-rose-400 shrink-0 flex items-center gap-0.5">
                      <XCircle className="w-3 h-3" />
                      <span>{lang === 'ar' ? 'غير صحيح' : 'Incorrect'}</span>
                    </span>
                  )}
                  {!isSelected && shouldReveal && (
                    <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 shrink-0">
                      {lang === 'ar' ? '✓ إجابة صحيحة' : '✓ Correct'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-2 no-print">
          <button
            onClick={() => toggleHint(prob.id)}
            className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-950 dark:hover:text-amber-300 flex items-center justify-center gap-1.5 bg-amber-50 dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-amber-300 dark:border-slate-800 transition-all shadow-sm flex-1 sm:flex-initial"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>{isHintOpen ? t.hideHint : t.showHint}</span>
          </button>

          <button
            onClick={() => toggleSolution(prob.id)}
            className="text-xs font-bold text-indigo-800 dark:text-indigo-400 hover:text-indigo-950 dark:hover:text-indigo-300 flex items-center justify-center gap-1.5 bg-indigo-50 dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-indigo-300 dark:border-slate-800 transition-all shadow-sm flex-1 sm:flex-initial"
          >
            {isSolOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            <span>{isSolOpen ? t.hideSolution : t.showSolution}</span>
          </button>

          {onOpenDesmos && (
            <button
              onClick={() => onOpenDesmos(is3D ? '3d' : '2d')}
              className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-cyan-200 flex items-center justify-center gap-1.5 bg-cyan-50 dark:bg-slate-900 px-3 py-2 rounded-xl border border-cyan-300 dark:border-slate-800 transition-all shadow-xs flex-1 sm:flex-initial no-print"
              title={lang === 'ar' ? 'فتح الحاسبة البيانية لديسموس' : 'Open in Desmos'}
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'ar' ? 'ديسموس' : 'Desmos'}</span>
            </button>
          )}

          {isAnswered && (
            <button
              onClick={() => handleClearAnswer(prob.id)}
              className="text-xs font-bold text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-800 transition-all shadow-sm flex-1 sm:flex-initial no-print"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'إلغاء الإجابة' : 'Reset'}</span>
            </button>
          )}
        </div>

        {isHintOpen && (
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/30 p-3 rounded-lg text-xs text-amber-950 dark:text-amber-200 print-avoid-break">
            <span className="font-bold">💡 {t.showHint}: </span>
            <MathRenderer math={lang === 'ar' ? prob.hintAr : prob.hintEn} lang={lang} />
          </div>
        )}

        {isSolOpen && (
          <div className={`p-4 rounded-xl space-y-3 text-xs border step-by-step-box print-avoid-break ${
            isLight
              ? 'bg-white border-slate-200 text-slate-800 shadow-xs'
              : 'bg-slate-900/90 border-slate-800 text-slate-200'
          }`}>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 block uppercase tracking-wider">{t.stepByStepSolution}</span>
            <ol className={`space-y-2 list-decimal list-inside ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
              {(lang === 'ar' ? prob.stepByStepSolutionAr : prob.stepByStepSolutionEn).map((step, sIdx) => (
                <li key={sIdx} className="leading-relaxed">
                  <MathRenderer math={step} lang={lang} />
                </li>
              ))}
            </ol>

            {prob.teacherTipEn && (
              <div className={`mt-3 pt-3 border-t text-[11px] ${
                isLight ? 'border-slate-200 text-amber-900' : 'border-slate-800 text-amber-300'
              }`}>
                <span className="font-bold">🎓 {t.teacherTips}: </span>
                <MathRenderer math={lang === 'ar' ? prob.teacherTipAr : prob.teacherTipEn} lang={lang} />
              </div>
            )}

            {/* Exclusive HOTS Synthesis & Pitfall Dissection */}
            {prob.difficulty === 'hots' && (
              <div className={`mt-3 p-3 rounded-xl border text-[11px] space-y-1.5 ${
                isLight
                  ? 'bg-rose-50 border-rose-200 text-rose-950'
                  : 'bg-rose-950/25 border-rose-500/30 text-rose-200'
              }`}>
                <span className="font-black text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? '🔍 تحليل الفكرة العليا وفخاخ الخيارات المضللة (HOTS Analysis):' : '🔍 HOTS Synthesis & Distractor Dissection:'}</span>
                </span>
                <p className={`leading-relaxed ${isLight ? 'text-rose-900' : 'text-slate-300'}`}>
                  {lang === 'ar'
                    ? (prob.teacherTipAr || 'تتطلب هذه المسألة الربط بين العلاقات الرياضية والقوانين الفيزيائية بعناية لتفادي الوقوع في خيارات التشتيت الناتجة عن عدم تحويل الوحدات أو إشارات الاتجاه.')
                    : (prob.teacherTipEn || 'This problem tests high-order analytical synthesis. Verify consistent units, directional vector signs, and intermediate variable substitution before finalizing answers.')}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* 🧭 CHAPTER & BRANCH QUICK-SWITCHER */}
      {curriculum && onSelectLesson && (
        <div className={`p-3 sm:p-4 rounded-2xl border space-y-3 no-print shadow-sm transition-all ${
          isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          {/* Dropdown Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* 1. Branch / Subject Selector Dropdown */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                <span>{lang === 'ar' ? 'المادة / الفرع:' : 'Subject / Branch:'}</span>
              </label>
              <div className="relative">
                <select
                  value={branch.id}
                  onChange={(e) => {
                    const selectedBranch = curriculum.branches.find((b) => b.id === e.target.value);
                    if (selectedBranch && selectedBranch.id !== branch.id) {
                      onSelectLesson(selectedBranch, selectedBranch.chapters[0].lessons[0], activeSubTab);
                    }
                  }}
                  className={`w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                    isContrast
                      ? 'bg-black text-white border-yellow-400'
                      : isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100'
                      : 'bg-slate-950 border-slate-700 text-slate-200 hover:border-slate-600'
                  }`}
                >
                  {curriculum.branches.map((b) => {
                    const isPhys = b.id === 'thanaweya_physics' || b.id === 'egbac_physics';
                    const isChem = b.id === 'thanaweya_chemistry' || b.id === 'egbac_chemistry';
                    const isBio = b.id === 'thanaweya_biology' || b.id === 'egbac_biology';
                    const emoji = isPhys ? '⚡' : isChem ? '🧪' : isBio ? '🧬' : '📐';
                    return (
                      <option key={b.id} value={b.id} className="bg-slate-900 text-white">
                        {emoji} {lang === 'ar' ? b.titleAr : b.titleEn} ({b.chapters.length} {lang === 'ar' ? 'فصول' : 'Chs'})
                      </option>
                    );
                  })}
                </select>
                <div className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* 2. Chapter Selector Dropdown */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                <span>{lang === 'ar' ? 'الفصل الدراسي:' : 'Chapter:'}</span>
              </label>
              <div className="relative">
                <select
                  value={currentChapter.id}
                  onChange={(e) => {
                    const ch = branch.chapters.find((c) => c.id === e.target.value);
                    if (ch) {
                      onSelectLesson(branch, ch.lessons[0], activeSubTab);
                    }
                  }}
                  className={`w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                    isContrast
                      ? 'bg-black text-white border-yellow-400'
                      : isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100'
                      : 'bg-slate-950 border-slate-700 text-slate-200 hover:border-slate-600'
                  }`}
                >
                  {branch.chapters.map((ch) => {
                    const chNumStr = lang === 'ar' ? `فصل ${toHindiDigits(ch.chapterNumber)}` : `Ch ${ch.chapterNumber}`;
                    const rawTitle = (lang === 'ar' ? ch.titleAr : ch.titleEn).replace(/\$/g, '');
                    const qCount = ch.databank ? (lang === 'ar' ? ' [١٥٠ سؤال معتمد]' : ' [150 Q Databank]') : '';
                    return (
                      <option key={ch.id} value={ch.id} className="bg-slate-900 text-white">
                        {chNumStr}: {rawTitle}{qCount}
                      </option>
                    );
                  })}
                </select>
                <div className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* 3. Lesson Selector Dropdown (or Subject Track Quick Jump if 1 lesson) */}
            {currentChapter.lessons.length > 1 ? (
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{lang === 'ar' ? 'الدرس:' : 'Lesson:'}</span>
                </label>
                <div className="relative">
                  <select
                    value={lesson.id}
                    onChange={(e) => {
                      const l = currentChapter.lessons.find((item) => item.id === e.target.value);
                      if (l) {
                        onSelectLesson(branch, l, activeSubTab);
                      }
                    }}
                    className={`w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
                      isContrast
                        ? 'bg-black text-white border-yellow-400'
                        : isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100'
                        : 'bg-slate-950 border-slate-700 text-slate-200 hover:border-slate-600'
                    }`}
                  >
                    {currentChapter.lessons.map((l, lIdx) => {
                      const lNumStr = lang === 'ar' ? `درس ${toHindiDigits(lIdx + 1)}` : `Lesson ${lIdx + 1}`;
                      const rawTitle = (lang === 'ar' ? l.titleAr : l.titleEn).replace(/\$/g, '');
                      return (
                        <option key={l.id} value={l.id} className="bg-slate-900 text-white">
                          {lNumStr}: {rawTitle}
                        </option>
                      );
                    })}
                  </select>
                  <div className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'ar' ? 'المادة العامة:' : 'Subject Track:'}</span>
                </label>
                <div className="relative">
                  <select
                    value={SUBJECTS.find((s) => s.branchIds[curriculum.id]?.includes(branch.id as any))?.id || ''}
                    onChange={(e) => {
                      const s = SUBJECTS.find((sub) => sub.id === e.target.value);
                      if (s) {
                        const subBranch = curriculum.branches.find((b) => s.branchIds[curriculum.id]?.includes(b.id as any));
                        if (subBranch) {
                          onSelectLesson(subBranch, subBranch.chapters[0].lessons[0], activeSubTab);
                        }
                      }
                    }}
                    className={`w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-amber-500 ${
                      isContrast
                        ? 'bg-black text-white border-yellow-400'
                        : isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100'
                        : 'bg-slate-950 border-slate-700 text-slate-200 hover:border-slate-600'
                    }`}
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                        {s.emoji} {lang === 'ar' ? s.titleAr : s.titleEn}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lesson Header Banner */}
      <div className={`rounded-2xl p-4 sm:p-6 space-y-4 border print-lesson-header print-avoid-break ${
        isLight
          ? 'bg-white border-slate-200 shadow-md text-slate-900'
          : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
      }`}>
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
          isLight ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <img
                src={clipsatLogo}
                alt="ClipSAT Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 shadow-sm">
                {lang === 'ar' ? branch.titleAr : branch.titleEn}
              </span>
              <span className={`text-xs font-bold flex items-center gap-1 ${
                isLight ? 'text-amber-800' : 'text-amber-400'
              }`}>
                <Award className="w-4 h-4" />
                {lesson.moeRef.officialCode}
              </span>
            </div>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}>
              <MathRenderer math={lang === 'ar' ? lesson.titleAr : lesson.titleEn} lang={lang} />
            </h2>
          </div>

          {/* Textbook MoE reference card */}
          <div className={`p-3 sm:p-3.5 rounded-xl border text-xs space-y-2 shadow-sm w-full sm:w-auto ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
          }`}>
            <div>
              <span className={`font-bold block ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{t.officialMoeRef}</span>
              <p className={`font-extrabold text-sm ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{lang === 'ar' ? lesson.moeRef.bookTitleAr : lesson.moeRef.bookTitleEn}</p>
              <p className={`text-xs font-mono font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>
                {lang === 'ar' ? toHindiDigits(lesson.moeRef.pageRange) : lesson.moeRef.pageRange}
              </p>
            </div>

            {matchingBook && (
              <div className="flex items-center gap-1.5 pt-1.5 border-t border-slate-200/70 dark:border-slate-800/80">
                <a
                  href={getBookDownloadUrl(matchingBook)}
                  download={matchingBook.filename}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-all active:scale-95"
                  title={t.downloadConceptCompendium}
                >
                  <Download className="w-3 h-3" />
                  <span>{lang === 'ar' ? 'كتيب المفاهيم' : 'Compendium'} ({matchingBook.fileSize})</span>
                </a>
                {onOpenOfficialBooks && (
                  <button
                    onClick={() => onOpenOfficialBooks(matchingBook.id)}
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium border transition-colors ${
                      isLight
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                    }`}
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>{t.officialBooksNavBtn}</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className={`text-sm sm:text-base font-medium leading-relaxed ${
          isLight ? 'text-slate-700' : 'text-slate-200'
        }`}>
          <MathRenderer math={lang === 'ar' ? lesson.summaryAr : lesson.summaryEn} lang={lang} />
        </div>

        {/* Sub-tab navigation: Dropdown menu on mobile/tablet, wrapped tabs on desktop */}
        <div className={`pt-2 border-t no-print ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
          {/* Mobile / Tablet Dropdown Menu */}
          <div className="md:hidden">
            <label className="text-[11px] font-bold text-slate-400 block mb-1">
              {lang === 'ar' ? 'القسم المعروض:' : 'Active Section:'}
            </label>
            <div className="relative">
              <select
                value={activeSubTab}
                onChange={(e) => onSubTabChange(e.target.value)}
                className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                  isContrast
                    ? 'bg-black text-white border-yellow-400'
                    : isLight
                    ? 'bg-slate-50 border-slate-300 text-slate-800'
                    : 'bg-slate-950 border-slate-700 text-slate-200'
                }`}
              >
                <option value="theory" className="bg-slate-900 text-white">📖 {t.theoryTab}</option>
                <option value="solvedExamples" className="bg-slate-900 text-white">
                  💡 {t.solvedExamplesTab} ({chapterSolvedExamples.length})
                </option>
                <option value="exerciseProblems" className="bg-slate-900 text-white">
                  📚 {t.exerciseProblemsTab} ({chapterExerciseProblems.length})
                </option>
                {chapterDatabank && (
                  <option value="databank" className="bg-slate-900 text-white">
                    🗄️ {t.databankTab} ({chapterDatabank.easy.length + chapterDatabank.medium.length + chapterDatabank.hots.length})
                  </option>
                )}
                <option value="worksheet" className="bg-slate-900 text-white">✏️ {t.worksheetTab}</option>
                <option value="interactive" className="bg-slate-900 text-white">🎮 {t.interactiveTab}</option>
                <option value="lessonPlan" className="bg-slate-900 text-white">
                  📋 {t.lessonPlanTab} {role === 'teacher' ? '(Teacher)' : ''}
                </option>
              </select>
              <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Desktop Wrapped Buttons */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            <button
              onClick={() => onSubTabChange('theory')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 active:scale-95 cursor-pointer ${
                activeSubTab === 'theory'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isLight
                    ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              📖 {t.theoryTab}
            </button>

            <button
              onClick={() => onSubTabChange('solvedExamples')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeSubTab === 'solvedExamples'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isLight
                    ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              💡 {t.solvedExamplesTab}
              {chapterSolvedExamples.length > 0 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-extrabold">
                  {chapterSolvedExamples.length}
                </span>
              )}
            </button>

            <button
              onClick={() => onSubTabChange('exerciseProblems')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeSubTab === 'exerciseProblems'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isLight
                    ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              📚 {t.exerciseProblemsTab}
              {chapterExerciseProblems.length > 0 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-extrabold">
                  {chapterExerciseProblems.length}
                </span>
              )}
            </button>

            {chapterDatabank && (
              <button
                onClick={() => onSubTabChange('databank')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  activeSubTab === 'databank'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : isLight
                      ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                🗄️ {t.databankTab}
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold">
                  {chapterDatabank.easy.length + chapterDatabank.medium.length + chapterDatabank.hots.length}
                </span>
              </button>
            )}

            <button
              onClick={() => onSubTabChange('worksheet')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeSubTab === 'worksheet'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isLight
                    ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              ✏️ {t.worksheetTab}
            </button>

            <button
              onClick={() => onSubTabChange('interactive')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeSubTab === 'interactive'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isLight
                    ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              🎮 {t.interactiveTab}
            </button>

            <button
              onClick={() => onSubTabChange('lessonPlan')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeSubTab === 'lessonPlan'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isLight
                    ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              📋 {t.lessonPlanTab} {role === 'teacher' && <span className="bg-amber-400 text-slate-950 text-[10px] px-1.5 py-0.5 rounded font-extrabold ml-1">Teacher</span>}
            </button>
          </div>
        </div>
      </div>

      {/* 📖 TAB 1: THEORY & FORMULAS */}
      {activeSubTab === 'theory' && (
        <div className="space-y-6">
          {/* Theory Prose with LaTeX rendering */}
          <div className={`rounded-2xl p-4 sm:p-6 space-y-4 border ${
            isLight
              ? 'bg-white border-slate-200 shadow-md text-slate-900'
              : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
          }`}>
            <h3 className={`text-lg font-bold flex items-center gap-2 border-b pb-3 ${
              isLight ? 'text-indigo-800 border-slate-200' : 'text-indigo-400 border-slate-800'
            }`}>
              <BookOpen className="w-5 h-5" />
              <span>{lang === 'ar' ? 'الشرح والنظريات الأساسية' : 'Theoretical Foundations & Proofs'}</span>
            </h3>

            <div className={`prose max-w-none text-sm sm:text-base leading-relaxed space-y-4 ${
              isLight ? 'prose-slate text-slate-800' : 'prose-invert text-slate-200'
            }`}>
              <MathRenderer math={lang === 'ar' ? lesson.theoryContentAr : lesson.theoryContentEn} lang={lang} />
            </div>
          </div>

          {/* Essential Formulas Sheet */}
          <div className={`rounded-2xl p-4 sm:p-6 space-y-4 border ${
            isLight
              ? 'bg-white border-slate-200 shadow-md text-slate-900'
              : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
          }`}>
            <div className={`flex items-center justify-between border-b pb-3 ${
              isLight ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <h3 className={`text-base font-bold flex items-center gap-2 ${
                isLight ? 'text-emerald-800 font-bold' : 'text-emerald-400 font-bold'
              }`}>
                <Layers className="w-5 h-5" />
                <span>{lang === 'ar' ? 'دستور القوانين والملاحظات الهامة' : 'Essential Formula Sheet'}</span>
              </h3>
              <span className={`text-xs font-semibold ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                {lang === 'ar' ? `${toHindiDigits(lesson.formulas?.length ?? 0)} قوانين أساسية` : `${lesson.formulas?.length ?? 0} Core Formulas`}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {lesson.formulas?.map((f, fIdx) => (
                <div
                  key={fIdx}
                  className={`p-3 rounded-xl border transition-all hover:border-indigo-500/50 flex flex-col justify-between ${
                    isLight
                      ? 'bg-slate-50 border-slate-200/90 shadow-xs hover:bg-slate-100/60'
                      : 'bg-slate-950 border-slate-800 shadow-xs'
                  }`}
                >
                  <div className={`flex items-center justify-between text-xs font-bold pb-2 border-b ${
                    isLight ? 'text-slate-800 border-slate-200' : 'text-slate-300 border-slate-800/80'
                  }`}>
                    <span className="truncate pr-1">{lang === 'ar' ? f.labelAr : f.labelEn}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold shrink-0 ${
                      isLight ? 'text-indigo-800 bg-indigo-50 border border-indigo-200' : 'text-indigo-400 bg-indigo-950/60 border border-indigo-800'
                    }`}>
                      #{lang === 'ar' ? toHindiDigits(fIdx + 1) : fIdx + 1}
                    </span>
                  </div>
                  <div className="py-2 overflow-x-auto flex items-center justify-center min-h-[46px] formula-card-math">
                    <MathRenderer
                      math={f.latex}
                      block
                      lang={lang}
                      className="no-box bg-transparent border-0 shadow-none !my-0 !py-0 !px-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 💡 TAB: OFFICIAL SOLVED EXAMPLES */}
      {activeSubTab === 'solvedExamples' && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-worksheet-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">💡</span>
                <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  {lang === 'ar' ? 'أمثلة كتاب الوزارة المحلولة خطوة بخطوة' : 'Official Ministry Solved Examples'}
                </h3>
              </div>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {lang === 'ar'
                  ? `أمثلة نموذجية معتمدة من كتاب الوزارة لـ (${currentChapter.titleAr}) مع خطوات الحل والتفسير الرياضي الكامل.`
                  : `Official model solved examples from the Ministry textbook for (${currentChapter.titleEn}) with complete step-by-step reasoning.`}
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 shadow-lg no-print self-start"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printWorksheet}</span>
            </button>
          </div>

          <div className="space-y-6">
            {chapterSolvedExamples.length > 0 ? (
              chapterSolvedExamples.map((prob, idx) =>
                renderProblemCard(
                  prob,
                  idx,
                  lang === 'ar' ? `مثال كتاب الوزارة المحلول (${toHindiDigits(idx + 1)})` : `MoE Solved Example (${idx + 1})`
                )
              )
            ) : (
              <div className="p-8 text-center text-slate-400">
                {lang === 'ar' ? 'جاري تجهيز أمثلة هذا الفصل...' : 'Solved examples for this chapter are being compiled...'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 📚 TAB: OFFICIAL TEXTBOOK EXERCISES */}
      {activeSubTab === 'exerciseProblems' && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-worksheet-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📚</span>
                <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  {lang === 'ar' ? 'تمارين ومسائل كتاب الوزارة الرسمية' : 'Official Ministry Textbook Unit Exercises'}
                </h3>
              </div>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {lang === 'ar'
                  ? `تمارين نهاية الوحدة الرسمية المعتمدة من كتاب الوزارة لـ (${currentChapter.titleAr}) مع نماذج الإجابة والحلول الخطية.`
                  : `Official unit exercise problems from the Ministry textbook for (${currentChapter.titleEn}) with model answer keys and step-by-step solutions.`}
              </p>
            </div>
            <div className="flex items-center gap-2 self-start flex-wrap no-print">
              {matchingBook && (
                <a
                  href={getBookDownloadUrl(matchingBook)}
                  download={matchingBook.filename}
                  className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-3.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                  title={t.downloadBookPdf}
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'ar' ? `كتاب الوزارة (${matchingBook.fileSize})` : `Download Book PDF (${matchingBook.fileSize})`}</span>
                </a>
              )}
              <button
                onClick={() => window.print()}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 shadow-lg"
              >
                <Printer className="w-4 h-4" />
                <span>{t.printWorksheet}</span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {chapterExerciseProblems.length > 0 ? (
              chapterExerciseProblems.map((prob, idx) =>
                renderProblemCard(
                  prob,
                  idx,
                  lang === 'ar' ? `تمرين كتاب الوزارة (${toHindiDigits(idx + 1)})` : `Textbook Exercise (${idx + 1})`
                )
              )
            ) : (
              <div className="p-8 text-center text-slate-400">
                {lang === 'ar' ? 'جاري تجهيز تمارين هذا الفصل...' : 'Textbook exercises for this chapter are being compiled...'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 🗄️ TAB: CHAPTER QUESTION DATABANK (50 Easy, 50 Medium, 50 HOTS) */}
      {activeSubTab === 'databank' && chapterDatabank && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-worksheet-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🗄️</span>
                <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  {lang === 'ar' ? 'بنك أسئلة الفصل المعتمد (150 سؤالاً مصنفاً)' : 'Official Chapter Question Databank (150 Classified Questions)'}
                </h3>
              </div>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {lang === 'ar'
                  ? 'بنك أسئلة متكامل يضم 50 سؤالاً سهلاً، 50 سؤالاً متوسطاً، و 50 سؤالاً لمهارات التفكير العليا، مع خيارات مدروسة وحلول نموذجية كاملة.'
                  : 'Comprehensive chapter question bank featuring exactly 50 Easy, 50 Medium, and 50 HOTS questions with authentic distractors and model answers.'}
              </p>
            </div>

            {/* Difficulty Dropdown & Filter Controls */}
            <div className="flex items-center gap-2 no-print flex-wrap">
              <div className="relative">
                <select
                  value={databankDifficulty}
                  onChange={(e) => setDatabankDifficulty(e.target.value as 'easy' | 'medium' | 'hots')}
                  className={`appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                    isLight
                      ? databankDifficulty === 'easy'
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-300 shadow-xs'
                        : databankDifficulty === 'medium'
                        ? 'bg-indigo-50 text-indigo-900 border-indigo-300 shadow-xs'
                        : 'bg-amber-50 text-amber-900 border-amber-300 shadow-xs'
                      : databankDifficulty === 'easy'
                      ? 'bg-emerald-950/80 text-emerald-200 border-emerald-600 shadow-xs'
                      : databankDifficulty === 'medium'
                      ? 'bg-indigo-950/80 text-indigo-200 border-indigo-600 shadow-xs'
                      : 'bg-amber-950/80 text-amber-200 border-amber-600 shadow-xs'
                  }`}
                >
                  <option value="easy" className={isLight ? "bg-white text-slate-900" : "bg-slate-900 text-white"}>
                    {lang === 'ar' ? '🟢 مستوى سهل تأسيسي (٥٠)' : '🟢 Level: Easy (50)'}
                  </option>
                  <option value="medium" className={isLight ? "bg-white text-slate-900" : "bg-slate-900 text-white"}>
                    {lang === 'ar' ? '🔵 مستوى متوسط وزاري (٥٠)' : '🔵 Level: Medium (50)'}
                  </option>
                  <option value="hots" className={isLight ? "bg-white text-slate-900" : "bg-slate-900 text-white"}>
                    {lang === 'ar' ? '🟠 مهارات تفكير عليا (٥٠)' : '🟠 Level: HOTS (50)'}
                  </option>
                </select>
                <div className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>

              <button
                onClick={() => setFilterBookmarkedOnly((prev) => !prev)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                  filterBookmarkedOnly
                    ? 'bg-amber-500 text-black border-amber-400 shadow-md ring-2 ring-amber-400/50'
                    : isLight
                    ? 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-950'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-amber-400'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${filterBookmarkedOnly ? 'fill-black' : ''}`} />
                <span>{lang === 'ar' ? 'المميزة بنجمة' : 'Starred'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Chapter Mastery Stats Bar */}
          {(() => {
            const currentQuestions =
              databankDifficulty === 'easy'
                ? chapterDatabank.easy
                : databankDifficulty === 'medium'
                ? chapterDatabank.medium
                : chapterDatabank.hots;
            const attempted = currentQuestions.filter((q) => userAnswers[q.id] !== undefined).length;
            const correct = currentQuestions.filter((q) => userAnswers[q.id] === q.correctIndex).length;
            const bookmarked = currentQuestions.filter((q) => bookmarkedProblems[q.id]).length;
            const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

            return (
              <div className={`p-3.5 rounded-xl border flex flex-wrap items-center justify-between gap-3 text-xs no-print ${
                isLight ? 'bg-slate-100/70 border-slate-200' : 'bg-slate-950/70 border-slate-800'
              }`}>
                <div className="flex items-center gap-4 flex-wrap font-bold">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{lang === 'ar' ? `المحاولات: ${toHindiDigits(attempted)} / ${toHindiDigits(currentQuestions.length)}` : `Attempted: ${attempted} / ${currentQuestions.length}`}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <Award className="w-4 h-4" />
                    <span>{lang === 'ar' ? `الصحيح: ${toHindiDigits(correct)} (${toHindiDigits(accuracy)}٪)` : `Correct: ${correct} (${accuracy}%)`}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                    <Star className="w-4 h-4" />
                    <span>{lang === 'ar' ? `المحفوظة للمراجعة: ${toHindiDigits(bookmarked)}` : `Bookmarked: ${bookmarked}`}</span>
                  </span>
                </div>

                {attempted > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="w-28 sm:w-36 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${(attempted / currentQuestions.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {Math.round((attempted / currentQuestions.length) * 100)}%
                    </span>
                  </div>
                )}
              </div>
            );
          })()}

          <div className="space-y-6">
            {(() => {
              const currentQuestions =
                databankDifficulty === 'easy'
                  ? chapterDatabank.easy
                  : databankDifficulty === 'medium'
                  ? chapterDatabank.medium
                  : chapterDatabank.hots;

              const filtered = filterBookmarkedOnly
                ? currentQuestions.filter((q) => bookmarkedProblems[q.id])
                : currentQuestions;

              if (filtered.length === 0) {
                return (
                  <div className="p-12 text-center text-slate-400 space-y-2 border border-dashed rounded-xl">
                    <Star className="w-8 h-8 mx-auto text-amber-500/50" />
                    <p className="text-sm font-semibold">
                      {lang === 'ar'
                        ? 'لا توجد أسئلة مميزة بنجمة في هذا القسم حالياً.'
                        : 'No bookmarked questions in this difficulty section.'}
                    </p>
                    <p className="text-xs text-slate-500">
                      {lang === 'ar'
                        ? 'اضغط على أيقونة النجمة بجانب أي سؤال لحفظه ومراجعته لاحقاً.'
                        : 'Click the star icon on any problem card to save it for revision.'}
                    </p>
                  </div>
                );
              }

              return filtered.map((prob, idx) =>
                renderProblemCard(
                  prob,
                  idx,
                  lang === 'ar'
                    ? `${databankDifficulty === 'easy' ? 'سؤال سهل' : databankDifficulty === 'medium' ? 'سؤال متوسط' : 'سؤال مهارات عليا'} (${toHindiDigits(idx + 1)})`
                    : `${databankDifficulty === 'easy' ? 'Easy' : databankDifficulty === 'medium' ? 'Medium' : 'HOTS'} Q(${idx + 1})`
                )
              );
            })()}
          </div>
        </div>
      )}

      {/* 📋 TAB 2: TEACHER LESSON PLAN */}
      {activeSubTab === 'lessonPlan' && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-lesson-plan-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <h3 className={`text-xl font-bold flex items-center gap-2 ${
                isLight ? 'text-amber-800' : 'text-amber-400'
              }`}>
                <Target className="w-6 h-6" />
                <span>{lang === 'ar' ? lesson.lessonPlan.titleAr : lesson.lessonPlan.titleEn}</span>
              </h3>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {t.moeCode}: {lesson.lessonPlan.moeCode} | {t.estimatedTime}: {lang === 'ar' ? toHindiDigits(lesson.lessonPlan.durationMinutes) : lesson.lessonPlan.durationMinutes} mins
              </p>
            </div>

            <button
              onClick={() => window.print()}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 shadow-lg no-print self-start"
            >
              <Printer className="w-4 h-4" />
              <span>{t.downloadPdf}</span>
            </button>
          </div>

          {/* Prerequisites & Prior Knowledge */}
          {lesson.lessonPlan.prerequisitesEn && lesson.lessonPlan.prerequisitesEn.length > 0 && (
            <div className="space-y-3 print-avoid-break">
              <h4 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${
                isLight ? 'text-teal-900 font-bold' : 'text-teal-300'
              }`}>
                <Compass className="w-4 h-4" />
                <span>{t.prerequisites}</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {(lang === 'ar' ? lesson.lessonPlan.prerequisitesAr : lesson.lessonPlan.prerequisitesEn)?.map((prereq, pIdx) => (
                  <span
                    key={pIdx}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 ${
                      isLight
                        ? 'bg-teal-50 border-teal-200 text-teal-900'
                        : 'bg-teal-950/40 border-teal-800 text-teal-200'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    <span><MathRenderer math={prereq} lang={lang} /></span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bloom's Taxonomy Objectives */}
          <div className="space-y-3 print-avoid-break">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${
              isLight ? 'text-indigo-900 font-bold' : 'text-indigo-300'
            }`}>{t.bloomsTaxonomy}</h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {(lang === 'ar' ? lesson.lessonPlan.bloomsObjectivesAr : lesson.lessonPlan.bloomsObjectivesEn)?.map((obj, oIdx) => (
                <li
                  key={oIdx}
                  className={`p-3.5 rounded-xl border flex items-start gap-2 print-avoid-break ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-800'
                      : 'bg-slate-950 border-slate-800 text-slate-200'
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                  <span><MathRenderer math={obj} lang={lang} /></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Mathematical Vocabulary */}
          {lesson.lessonPlan.keyVocabularyEn && lesson.lessonPlan.keyVocabularyEn.length > 0 && (
            <div className="space-y-3 print-avoid-break">
              <h4 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${
                isLight ? 'text-indigo-900 font-bold' : 'text-indigo-300'
              }`}>
                <BookOpen className="w-4 h-4" />
                <span>{t.vocabulary}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {(lang === 'ar' ? lesson.lessonPlan.keyVocabularyAr : lesson.lessonPlan.keyVocabularyEn)?.map((vocab, vIdx) => (
                  <div
                    key={vIdx}
                    className={`p-3.5 rounded-xl border space-y-1.5 text-xs ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-800'
                        : 'bg-slate-950 border-slate-800 text-slate-200'
                    }`}
                  >
                    <div className={`font-black text-sm flex items-center gap-1.5 ${
                      isLight ? 'text-indigo-700' : 'text-indigo-400'
                    }`}>
                      <span>{vocab.term}</span>
                    </div>
                    <div className={`leading-relaxed text-[11px] ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      <MathRenderer math={vocab.definition} lang={lang} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Teaching Pacing Flow */}
          <div className="space-y-3 print-avoid-break">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${
              isLight ? 'text-amber-900 font-bold' : 'text-amber-300'
            }`}>{lang === 'ar' ? 'خطوات السير في الدرس والتوقيت الزمني' : 'Instructional Pacing & Flow'}</h4>
            <div className="space-y-3">
              {lesson.lessonPlan.teachingPacing?.map((p, pIdx) => (
                <div
                  key={pIdx}
                  className={`p-4 rounded-xl border space-y-1 text-xs pacing-item print-avoid-break ${
                    isLight
                      ? 'bg-slate-50 border-slate-200'
                      : 'bg-slate-950 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${isLight ? 'text-indigo-800' : 'text-indigo-400'}`}>{lang === 'ar' ? p.phaseAr : p.phaseEn}</span>
                    <span className={`font-mono text-[11px] flex items-center gap-1 ${isLight ? 'text-slate-600' : 'text-slate-500'}`}>
                      <Clock className="w-3 h-3" />
                      {lang === 'ar' ? toHindiDigits(p.duration) : p.duration}
                    </span>
                  </div>
                  <div className={`pt-1 leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    <MathRenderer math={lang === 'ar' ? p.activitiesAr : p.activitiesEn} lang={lang} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Misconceptions & Differentiation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print-avoid-break">
            <div className={`p-4 rounded-xl border space-y-3 text-xs misconception-card print-avoid-break ${
              isLight
                ? 'bg-amber-50/70 border-amber-300 text-amber-950'
                : 'bg-slate-950 border-amber-500/40 text-slate-300'
            }`}>
              <h4 className={`font-bold uppercase tracking-wider flex items-center gap-2 ${
                isLight ? 'text-amber-900' : 'text-amber-300'
              }`}>
                <Lightbulb className={`w-4 h-4 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
                <span>{t.misconceptions}</span>
              </h4>
              <ul className={`space-y-2 list-disc list-inside ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {(lang === 'ar' ? lesson.lessonPlan.commonMisconceptionsAr : lesson.lessonPlan.commonMisconceptionsEn)?.map((m, mIdx) => (
                  <li key={mIdx}>
                    <MathRenderer math={m} lang={lang} />
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-4 rounded-xl border space-y-3 text-xs print-avoid-break ${
              isLight
                ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950'
                : 'bg-slate-950 border-indigo-900/40 text-slate-300'
            }`}>
              <h4 className={`font-bold uppercase tracking-wider ${isLight ? 'text-indigo-900' : 'text-indigo-300'}`}>{t.differentiation}</h4>
              <div className={`space-y-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                <p>
                  <strong className={isLight ? 'text-amber-800' : 'text-amber-400'}>{lang === 'ar' ? 'للطلاب المحتاجين لدعم:' : 'Struggling Learners:'}</strong>{' '}
                  <MathRenderer math={lang === 'ar' ? lesson.lessonPlan.differentiationAr?.struggling : lesson.lessonPlan.differentiationEn?.struggling} lang={lang} />
                </p>
                <p>
                  <strong className={isLight ? 'text-emerald-800' : 'text-emerald-400'}>{lang === 'ar' ? 'للطلاب المتميزين:' : 'Advanced Learners:'}</strong>{' '}
                  <MathRenderer math={lang === 'ar' ? lesson.lessonPlan.differentiationAr?.advanced : lesson.lessonPlan.differentiationEn?.advanced} lang={lang} />
                </p>
              </div>
            </div>
          </div>

          {/* Formative Assessment */}
          {(lesson.lessonPlan.formativeAssessmentEn || lesson.lessonPlan.formativeAssessmentAr) && (
            <div className={`p-4 rounded-xl border space-y-2 text-xs print-avoid-break ${
              isLight
                ? 'bg-blue-50/70 border-blue-200 text-blue-950'
                : 'bg-slate-950 border-blue-900/50 text-slate-300'
            }`}>
              <h4 className={`font-bold uppercase tracking-wider flex items-center gap-2 ${
                isLight ? 'text-blue-900' : 'text-blue-400'
              }`}>
                <HelpCircle className="w-4 h-4" />
                <span>{t.formativeAssessment}</span>
              </h4>
              <div className={`leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                <MathRenderer
                  math={lang === 'ar'
                    ? lesson.lessonPlan.formativeAssessmentAr
                    : lesson.lessonPlan.formativeAssessmentEn}
                  lang={lang}
                />
              </div>
            </div>
          )}

          {/* Exit Ticket */}
          <div className={`p-4 sm:p-5 rounded-xl border space-y-3 text-xs exit-ticket-card print-avoid-break ${
            isLight
              ? 'bg-amber-50/60 border-amber-200'
              : 'bg-slate-950 border-amber-500/30'
          }`}>
            <h4 className={`font-bold uppercase tracking-wider ${isLight ? 'text-amber-900' : 'text-amber-400'}`}>{t.exitTicket}</h4>
            <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
              <MathRenderer math={lang === 'ar' ? lesson.lessonPlan.exitTicketQuestion?.questionAr : lesson.lessonPlan.exitTicketQuestion?.questionEn} lang={lang} />
            </div>
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white border border-slate-200 text-slate-800' : 'bg-slate-900 text-slate-300'}`}>
              <strong className={`block mb-1 ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>{t.stepByStepSolution}:</strong>
              <MathRenderer math={lang === 'ar' ? lesson.lessonPlan.exitTicketQuestion?.solutionAr : lesson.lessonPlan.exitTicketQuestion?.solutionEn} lang={lang} />
            </div>
          </div>
        </div>
      )}

      {/* ✏️ TAB 3: SOLVED WORKSHEETS */}
      {activeSubTab === 'worksheet' && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-worksheet-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                <MathRenderer math={lang === 'ar' ? lesson.worksheet.titleAr : lesson.worksheet.titleEn} lang={lang} />
              </h3>
              <div className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                <MathRenderer math={lang === 'ar' ? lesson.worksheet.descriptionAr : lesson.worksheet.descriptionEn} lang={lang} />
              </div>
            </div>
            <button
              onClick={() => window.print()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 shadow-lg no-print self-start"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printWorksheet}</span>
            </button>
          </div>

          <div className="space-y-6">
            {lesson.worksheet.problems.map((prob, idx) => renderProblemCard(prob, idx))}
          </div>
        </div>
      )}

      {/* 🎮 TAB 4: 3D & INTERACTIVE LAB SUITE */}
      {activeSubTab === 'interactive' && (
        <div className="space-y-6">
          {/* Lab Suite Header & Activity Selector */}
          <div className={`rounded-2xl p-5 sm:p-6 shadow-2xl border transition-all ${
            isLight
              ? 'bg-white border-slate-200 text-slate-900'
              : 'bg-slate-900/90 border-slate-800 text-slate-100'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {lang === 'ar' ? 'مختبر الأنشطة التطبيقية' : 'Experimental Laboratory Suite'}
                  </span>
                  <span className="text-xs text-slate-400">• 3 {lang === 'ar' ? 'أنشطة استكشافية متكاملة' : 'Interactive Lab Modes'}</span>
                </div>
                <h3 className={`text-xl font-black ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  <MathRenderer math={lang === 'ar' ? lesson.interactiveWidget.titleAr : lesson.interactiveWidget.titleEn} lang={lang} />
                </h3>
                <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  <MathRenderer math={lang === 'ar' ? lesson.interactiveWidget.descriptionAr : lesson.interactiveWidget.descriptionEn} lang={lang} />
                </p>
              </div>

              {/* Activity Selector Tabs */}
              <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shrink-0">
                <button
                  type="button"
                  onClick={() => setLabActivity('simulator')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    labActivity === 'simulator'
                      ? 'bg-cyan-600 text-white shadow-md'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <FlaskConical className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'المحاكي التفاعلي' : 'Virtual Simulator'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLabActivity('desmos')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    labActivity === 'desmos'
                      ? 'bg-cyan-600 text-white shadow-md'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Calculator className="w-4 h-4" />
                  <span>{lang === 'ar' ? (is3D ? 'ديسموس 3D' : 'ديسموس 2D') : (is3D ? 'Desmos 3D Studio' : 'Desmos 2D Studio')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLabActivity('discovery')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    labActivity === 'discovery'
                      ? 'bg-cyan-600 text-white shadow-md'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Microscope className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'بروتوكول الاكتشاف' : 'Discovery Protocol'}</span>
                </button>
              </div>
            </div>

            {/* ACTIVITY 1: VIRTUAL SIMULATOR */}
            {labActivity === 'simulator' && (
              <div className="pt-5 space-y-4">
                {renderInteractiveWidget()}
              </div>
            )}

            {/* ACTIVITY 2: DESMOS DYNAMIC CANVAS */}
            {labActivity === 'desmos' && (
              <div className="pt-5 space-y-4">
                <div className={`p-4 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">
                          {lang === 'ar'
                            ? (is3D ? 'مختبر ديسموس ثلاثي الأبعاد المدمج' : 'مختبر ديسموس الرسومي المدمج')
                            : (is3D ? 'Embedded Desmos 3D Laboratory' : 'Embedded Desmos 2D Graphing Canvas')}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {lang === 'ar'
                            ? 'جرّب كتابة المعادلات واستكشاف المنحنيات والمستويات، أو انقر لنسخ أي صيغة مقترحة أدناه.'
                            : 'Explore functions, planes, and parameter sweeps. Click any preset formula below to copy into the canvas.'}
                        </p>
                      </div>
                    </div>
                    {onOpenDesmos && (
                      <button
                        type="button"
                        onClick={() => onOpenDesmos(is3D ? '3d' : '2d')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{lang === 'ar' ? 'فتح في نافذة كاملة' : 'Open Fullscreen'}</span>
                      </button>
                    )}
                  </div>

                  {/* Preset formula chips */}
                  <div className="flex flex-wrap gap-2 pt-1 pb-2">
                    {(is3D
                      ? [
                          { label: lang === 'ar' ? 'مستوى فراغي' : '3D Plane', eq: '2x + 3y - z = 6' },
                          { label: lang === 'ar' ? 'كرة نصف قطرها ٥' : 'Sphere R=5', eq: 'x^2 + y^2 + z^2 = 25' },
                          { label: lang === 'ar' ? 'سطح سرجي' : 'Saddle Surface', eq: 'z = x^2 - y^2' },
                          { label: lang === 'ar' ? 'مستوى أفقي' : 'Plane z=4', eq: 'z = 4' }
                        ]
                      : branch.id.includes('calc') || branch.id.includes('ana')
                      ? [
                          { label: lang === 'ar' ? 'دالة تكعيبية' : 'Cubic Curve', eq: 'f(x) = x^3 - 3x' },
                          { label: lang === 'ar' ? 'مماس الدالة' : 'Tangent Line', eq: 'y = f\'(1)(x-1) + f(1)' },
                          { label: lang === 'ar' ? 'المشتقة الأولى' : 'Derivative', eq: 'g(x) = 3x^2 - 3' },
                          { label: lang === 'ar' ? 'تكامل محدد' : 'Integral', eq: '\\int_{0}^{x} (t^2) dt' }
                        ]
                      : branch.id.includes('stat')
                      ? [
                          { label: lang === 'ar' ? 'اتزان الاحتكاك' : 'Friction Equilibrium', eq: 'F = \\frac{100 \\cdot 0.25}{\\cos(x) + 0.25\\sin(x)}' },
                          { label: lang === 'ar' ? 'محصلة قوتين' : 'Resultant R', eq: 'R = \\sqrt{25 + 36 + 60\\cos(x)}' },
                          { label: lang === 'ar' ? 'منحنى العزم' : 'Moment M(x)', eq: 'M = 50(4-x)' }
                        ]
                      : branch.id.includes('dyn') || branch.id.includes('mech')
                      ? [
                          { label: lang === 'ar' ? 'مسار المقذوف' : 'Projectile Path', eq: 'y = x\\tan(45) - \\frac{9.8 x^2}{2 \\cdot 400 \\cdot \\cos^2(45)}' },
                          { label: lang === 'ar' ? 'حركة توافقية' : 'Harmonic Motion', eq: 'x = 4\\cos(2t)' },
                          { label: lang === 'ar' ? 'طاقة الحركة' : 'Kinetic Energy', eq: 'T = 0.5 \\cdot 2 \\cdot v^2' }
                        ]
                      : [
                          { label: lang === 'ar' ? 'توزيع طبيعي معياري' : 'Normal PDF', eq: 'f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}' },
                          { label: lang === 'ar' ? 'دالة تراكمية' : 'Sigmoid CDF', eq: 'P = \\frac{1}{1 + e^{-1.7 x}}' }
                        ]
                    ).map((preset, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(preset.eq);
                        }}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs border transition-all cursor-pointer ${
                          isLight
                            ? 'bg-white hover:bg-cyan-50 border-slate-300 text-slate-700'
                            : 'bg-slate-900 hover:bg-cyan-950/40 border-slate-700 text-slate-300'
                        }`}
                        title={lang === 'ar' ? 'انقر لنسخ الصيغة' : 'Click to copy formula'}
                      >
                        <Copy className="w-3 h-3 text-cyan-400" />
                        <span className="font-semibold">{preset.label}:</span>
                        <code className="text-[11px] text-cyan-300">{preset.eq}</code>
                      </button>
                    ))}
                  </div>

                  {/* Embedded Iframe */}
                  <div className="relative w-full h-[520px] rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950">
                    <iframe
                      src={is3D ? 'https://www.desmos.com/3d?embed' : 'https://www.desmos.com/calculator?embed'}
                      title="Desmos Interactive Canvas"
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ACTIVITY 3: GUIDED SCIENTIFIC DISCOVERY PROTOCOL */}
            {labActivity === 'discovery' && (
              <div className="pt-5 space-y-5">
                <div className={`p-5 rounded-xl border ${
                  isLight ? 'bg-indigo-50/50 border-indigo-200' : 'bg-indigo-950/20 border-indigo-800/60'
                }`}>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                        <Microscope className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-indigo-300">
                          {lang === 'ar' ? 'بروتوكول التجربة العلمية والتحقق الرياضي' : 'Guided Scientific Discovery & Theorem Verification'}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {lang === 'ar'
                            ? 'اتبع خطوات المنهج العلمي لتحقيق أقصى استيعاب مفاهيمي للدرس والربط بأسئلة التفوق في الامتحان الوطني.'
                            : 'Follow systematic scientific inquiry to verify core mathematical invariants and ace high-order exam questions.'}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setDiscoveryChecks({})}
                      className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{lang === 'ar' ? 'إعادة ضبط الملاحظات' : 'Reset Checklist'}</span>
                    </button>
                  </div>

                  {/* Progress tracker */}
                  {(() => {
                    const totalChecks = 4;
                    const completed = [1, 2, 3, 4].filter((k) => discoveryChecks[`${lesson.id}_${k}`]).length;
                    const pct = Math.round((completed / totalChecks) * 100);
                    return (
                      <div className="mb-5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-bold text-slate-300">
                            {lang === 'ar' ? 'نسبة إنجاز بروتوكول التجربة:' : 'Discovery Protocol Progress:'}
                          </span>
                          <span className="font-mono font-bold text-indigo-400">{completed} / {totalChecks} ({pct}%)</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })()}

                  {/* 4 Inquiry Protocol Steps */}
                  <div className="space-y-3.5">
                    {[
                      {
                        num: 1,
                        titleEn: 'Phase 1: Baseline Parameter Observation',
                        titleAr: 'المرحلة الأولى: رصد الحالة المعيارية الابتدائية',
                        descEn: 'Set all simulation sliders to initial default values. Record the baseline equilibrium, initial derivative/slope, or vector coordinates.',
                        descAr: 'اضبط كافة المتغيرات في المحاكي على القيم الافتراضية. سجّل نقطة الاتزان الابتدائية، أو ميل المماس الأولي، أو إحداثيات المتجه القياسية.'
                      },
                      {
                        num: 2,
                        titleEn: 'Phase 2: Boundary & Extreme Values Sweep',
                        titleAr: 'المرحلة الثانية: مسح الحدود والقيم الحرجة والقصوى',
                        descEn: 'Push variables to extreme boundaries (e.g. angle theta -> 0 or 90 deg, zero determinant, mass -> max). Observe structural breaks or vanishing coefficients.',
                        descAr: 'حرّك المتغيرات نحو القيم الطرفية (مثل زاوية تؤول إلى صفر أو ٩٠ درجة، محدد مصفوفة مساوٍ للصفر، أو كتلة عظمى). راقب التحولات الجذرية أو انعدام المعاملات.'
                      },
                      {
                        num: 3,
                        titleEn: 'Phase 3: Rate of Change & Critical Inflexion',
                        titleAr: 'المرحلة الثالثة: تحليل معدل التغير ونقاط الانقلاب',
                        descEn: 'Track how small changes in inputs produce non-linear responses in the outcome. Identify the exact threshold where motion begins or concavity flips.',
                        descAr: 'تتبع كيف تؤدي التغيرات الطفيفة في المدخلات إلى استجابة غير خطية في النتائج. حدد بدقة النقطة الحرجة التي تبدأ عندها الحركة أو ينقلب عندها التحدب.'
                      },
                      {
                        num: 4,
                        titleEn: 'Phase 4: Mathematical Synthesis & Exam Theorem Proof',
                        titleAr: 'المرحلة الرابعة: الاستنتاج الرياضي الصارم والربط بقوانين الامتحان',
                        descEn: 'Confirm that experimental results match the algebraic theorems taught in the theoretical summary. Formulate the golden exam shortcut rule.',
                        descAr: 'تأكد من تطابق الملاحظات التجريبية بدقة مع النظريات الجبرية والقوانين الرياضية الواردة في ملخص الدرس، وصغ القاعدة الذهبية لحل المسائل المركبة.'
                      }
                    ].map((step) => {
                      const checkKey = `${lesson.id}_${step.num}`;
                      const isChecked = !!discoveryChecks[checkKey];
                      return (
                        <div
                          key={step.num}
                          onClick={() => {
                            setDiscoveryChecks((prev) => ({ ...prev, [checkKey]: !prev[checkKey] }));
                          }}
                          className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-indigo-500/10 border-indigo-500/40 text-slate-100'
                              : isLight
                              ? 'bg-white hover:bg-indigo-50/50 border-slate-200 text-slate-700'
                              : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                          }`}
                        >
                          <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                            isChecked
                              ? 'bg-indigo-600 border-indigo-500 text-white'
                              : 'border-slate-500 bg-transparent'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <div className="flex-1">
                            <h5 className={`text-xs font-bold ${isChecked ? 'text-indigo-400' : ''}`}>
                              {lang === 'ar' ? step.titleAr : step.titleEn}
                            </h5>
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                              {lang === 'ar' ? step.descAr : step.descEn}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
