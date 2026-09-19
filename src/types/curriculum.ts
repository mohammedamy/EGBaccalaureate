export type CurriculumType = 'thanaweya' | 'egbac';
export type ThemeMode = 'dark' | 'light' | 'high-contrast';
export type FontSizeMode = 'normal' | 'large' | 'xlarge';

export type BranchId = 
  | 'algebra_solid' 
  | 'calculus' 
  | 'statics' 
  | 'dynamics'
  | 'thanaweya_physics'
  | 'thanaweya_chemistry'
  | 'thanaweya_biology'
  | 'thanaweya_english'
  | 'thanaweya_french'
  | 'thanaweya_arabic'
  | 'thanaweya_history'
  | 'thanaweya_geography'
  | 'thanaweya_geology'
  | 'thanaweya_philosophy'
  | 'thanaweya_psychology'
  | 'thanaweya_economics_stat'
  | 'thanaweya_cs_informatics'
  | 'thanaweya_earth_space'
  | 'thanaweya_german'
  | 'thanaweya_civics'
  | 'thanaweya_italian'
  | 'thanaweya_spanish'
  | 'thanaweya_chinese'
  | 'thanaweya_islamic'
  | 'thanaweya_christian'
  | 'thanaweya_business'
  | 'thanaweya_fine_arts'
  | 'thanaweya_music'
  | 'thanaweya_agriculture'
  | 'thanaweya_industrial'
  | 'egbac_analysis'
  | 'egbac_vectors_geometry'
  | 'egbac_mechanics'
  | 'egbac_probability'
  | 'egbac_physics'
  | 'egbac_chemistry'
  | 'egbac_biology'
  | 'egbac_english'
  | 'egbac_french'
  | 'egbac_arabic'
  | 'egbac_history'
  | 'egbac_geography'
  | 'egbac_geology'
  | 'egbac_philosophy'
  | 'egbac_psychology'
  | 'egbac_economics_stat'
  | 'egbac_cs_informatics'
  | 'egbac_earth_space'
  | 'egbac_german'
  | 'egbac_civics'
  | 'egbac_italian'
  | 'egbac_spanish'
  | 'egbac_chinese'
  | 'egbac_islamic'
  | 'egbac_christian'
  | 'egbac_business'
  | 'egbac_fine_arts'
  | 'egbac_religion'
  | 'egbac_music'
  | 'egbac_agriculture'
  | 'egbac_industrial';

export type DifficultyLevel = 'easy' | 'medium' | 'exam_standard' | 'hots';

export type QuestionType = 'mcq' | 'short_answer' | 'essay';

export interface MoEReference {
  bookTitleEn: string;
  bookTitleAr: string;
  grade: string;
  term: string;
  officialCode: string;
  pageRange: string;
  pdfUrl?: string;
}

export interface TeacherLessonPlan {
  titleEn: string;
  titleAr: string;
  gradeLevel?: string;
  durationMinutes?: number;
  moeCode?: string;
  objectives?: string[];
  warmUpEn?: string;
  warmUpAr?: string;
  activitiesEn?: string;
  activitiesAr?: string;
  differentiation?: { support: string; advanced: string };
  bloomsObjectivesEn?: string[];
  bloomsObjectivesAr?: string[];
  prerequisitesEn?: string[];
  prerequisitesAr?: string[];
  keyVocabularyEn?: { term: string; definition: string }[];
  keyVocabularyAr?: { term: string; definition: string }[];
  teachingPacing?: {
    phaseEn: string;
    phaseAr: string;
    duration: string;
    activitiesEn: string;
    activitiesAr: string;
  }[];
  commonMisconceptionsEn?: string[];
  commonMisconceptionsAr?: string[];
  differentiationEn?: {
    struggling: string;
    advanced: string;
  };
  differentiationAr?: {
    struggling: string;
    advanced: string;
  };
  formativeAssessmentEn?: string;
  formativeAssessmentAr?: string;
  exitTicketQuestion?: {
    questionEn: string;
    questionAr: string;
    solutionEn: string;
    solutionAr: string;
  };
}

export type DiagramType = 
  | 'statics_horizontal_friction' 
  | 'statics_horizontal_simple_friction'
  | 'statics_inclined_friction' 
  | 'solid_geometry_sphere' 
  | 'distance_3d_box'
  | 'sphere_general_center_radius'
  | 'polygon_diagonals' 
  | 'trig_derivative_tangent'
  | 'secant_derivative_graph'
  | 'cotangent_curvature_graph'
  | 'plane_intercepts_3d'
  | 'coplanar_vectors_3d'
  | 'line_plane_angle_3d'
  | 'cartesian_plane'
  | 'triangle'
  | 'circle'
  | 'bio_antibody_structure'
  | 'bio_sarcomere_ultrastructure'
  | 'bio_dna_replication_fork'
  | 'bio_flower_whorls'
  | 'bio_nephron_filtration'
  | 'phys_wheatstone_bridge'
  | 'phys_solenoid_magnetic_field'
  | 'phys_dynamo_generator'
  | 'phys_rlc_resonance_phasor'
  | 'phys_photoelectric_circuit'
  | 'phys_transformer'
  | 'phys_galvanometer_multiplier'
  | 'phys_bohr_atom_series'
  | 'phys_coolidge_xray_tube'
  | 'phys_pn_junction_transistor'
  | 'chem_blast_furnace'
  | 'chem_daniell_galvanic_cell'
  | 'chem_standard_hydrogen_electrode'
  | 'chem_lead_acid_accumulator'
  | 'chem_dry_cell_laclanche'
  | 'chem_haber_bosch_equilibrium'
  | 'chem_methane_laboratory_preparation'
  | 'chem_ethylene_preparation'
  | 'chem_acetylene_preparation'
  | 'chem_organic_reflux_esterification';

export interface SolvedProblem {
  id: string;
  titleEn: string;
  titleAr: string;
  difficulty: DifficultyLevel;
  questionEn: string;
  questionAr: string;
  optionsEn?: string[];
  optionsAr?: string[];
  correctAnswer?: string;
  correctIndex?: number;
  hintEn?: string;
  hintAr?: string;
  stepByStepSolutionEn: string[];
  stepByStepSolutionAr: string[];
  teacherTipEn?: string;
  teacherTipAr?: string;
  diagramType?: DiagramType;
  explanationEn?: string;
  explanationAr?: string;
}

export interface ExerciseProblem {
  id: string;
  titleEn: string;
  titleAr: string;
  difficulty?: DifficultyLevel;
  questionEn: string;
  questionAr: string;
  optionsEn?: string[];
  optionsAr?: string[];
  correctAnswer?: string;
  correctIndex?: number;
  hintEn?: string;
  hintAr?: string;
  stepByStepSolutionEn?: string[];
  stepByStepSolutionAr?: string[];
  teacherTipEn?: string;
  teacherTipAr?: string;
  diagramType?: DiagramType;
  explanationEn?: string;
  explanationAr?: string;
}

export interface Worksheet {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  estimatedTimeMinutes: number;
  problems: SolvedProblem[];
}

export type InteractiveWidgetType =
  | '3d_vectors'
  | 'pascal_binomial'
  | 'calculus_tangent'
  | 'statics_friction'
  | 'complex_argand'
  | 'normal_distribution'
  | 'dynamics_motion'
  | 'matrix_solver'
  | 'work_energy'
  | 'titration_curve'
  | 'photoelectric_stopping'
  | 'genetics_punnett'
  | 'biology_skeleton'
  | 'biology_sarcomere'
  | 'biology_plant'
  | 'biology_endocrine'
  | 'biology_menstrual'
  | 'biology_immunity'
  | 'biology_genetics'
  | 'biology_dna'
  | 'biology_bioenergetics'
  | 'biology_flashcards'
  | 'physics_circuits'
  | 'physics_photoelectric'
  | 'physics_dynamo'
  | 'physics_resonance'
  | 'physics_flashcards'
  | 'physics_magnetism'
  | 'physics_atomic_lasers'
  | 'english_dictionary'
  | 'english_translation'
  | 'english_grammar_lab'
  | 'english_audio_lab'
  | 'french_audio_lab'
  | 'french_grammar_lab'
  | 'german_audio_lab'
  | 'german_grammar_lab'
  | 'german_cases_matrix'
  | 'arabic_grammar_lab'
  | 'arabic_rhetoric_lab'
  | 'geopolitical_map'
  | 'geopolitical_flashcards'
  | 'boundary_dispute_simulator'
  | 'economic_bloc_analyzer'
  | 'geology_crystal_systems'
  | 'geology_rock_cycle'
  | 'geology_plate_tectonics'
  | 'geology_stratigraphy_cross_section'
  | 'environmental_ecosystem_energy'
  | 'logic_truth_table'
  | 'logic_syllogism'
  | 'logic_induction_mills'
  | 'logic_fuzzy_ai'
  | 'philosophy_bioethics_matrix'
  | 'psychology_learning_theories'
  | 'psychology_memory_retention'
  | 'psychology_conflict_matrix'
  | 'sociology_social_processes'
  | 'sociology_culture_extremism'
  | 'economics_market_equilibrium'
  | 'economics_national_income'
  | 'statistics_correlation_regression'
  | 'statistics_probability_tree'
  | 'statistics_normal_curve'
  | 'cs_logic_circuit'
  | 'cs_algorithm_visualizer'
  | 'cs_sql_sandbox'
  | 'cs_network_subnet'
  | 'cs_neural_playground'
  | 'space_orbit_sim'
  | 'planetary_viewer'
  | 'stellar_lifecycle'
  | 'hohmann_transfer'
  | 'remote_sensing_spectroscopy'
  | 'civics_constitution_lab'
  | 'civics_electoral_simulator'
  | 'civics_party_matrix'
  | 'spanish_language_lab'
  | 'spanish_phonetics_lab'
  | 'spanish_grammar_matrix'
  | 'islamic_studies_lab'
  | 'tajweed_rules_lab'
  | 'maqasid_fiqh_studio'
  | 'islamic_civilization_timeline'
  | 'christian_heritage_studio'
  | 'coptic_history_timeline'
  | 'sacraments_interactive_lab'
  | 'christian_ethics_sandbox'
  | 'business_modeling_studio'
  | 'lean_canvas_builder'
  | 'financial_valuation_lab'
  | 'supply_chain_simulator'
  | 'fine_arts_architecture_studio'
  | 'perspective_grid_drafter'
  | 'golden_ratio_calculator'
  | 'islamic_geometry_generator'
  | 'chinese_language_studio'
  | 'chinese_pinyin_tones_lab'
  | 'chinese_hanzi_radicals_lab'
  | 'chinese_grammar_patterns_lab'
  | 'chinese_listening_comprehension_lab'
  | 'music_theory_studio'
  | 'solfege_ear_training_lab'
  | 'maqamat_oriental_lab'
  | 'rhythm_iqaat_sandbox'
  | 'western_harmony_counterpoint_lab'
  | 'agricultural_technology_studio'
  | 'agri_soil_chemistry_lab'
  | 'agri_irrigation_evapotranspiration_lab'
  | 'agri_hydroponics_greenhouse_lab'
  | 'agri_egyptian_megaprojects_lab'
  | 'agri_ipm_plant_pathology_lab'
  | 'industrial_engineering_studio'
  | 'ind_materials_testing_lab'
  | 'ind_plc_automation_lab'
  | 'ind_fluid_power_lab'
  | 'ind_cnc_machining_lab'
  | 'ind_quality_spc_lab';

export interface InteractiveWidgetConfig {
  type: InteractiveWidgetType | string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  initialParams?: Record<string, any>;
}

export interface Lesson {
  id: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  theoryContentEn: string; // Markdown / LaTeX supported
  theoryContentAr?: string;
  formulas?: { labelEn: string; labelAr: string; latex: string }[];
  moeRef: MoEReference;
  lessonPlan: TeacherLessonPlan;
  worksheet: Worksheet;
  interactiveWidget: InteractiveWidgetConfig;
  interactiveWidgets?: InteractiveWidgetConfig[];
  estimatedMinutes?: number;
}

export interface ChapterDatabank {
  easy: SolvedProblem[];
  medium: SolvedProblem[];
  hots: SolvedProblem[];
}

export type QuestionBank = ChapterDatabank;

export interface Chapter {
  id: string;
  chapterNumber?: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  isFullyEquipped: boolean;
  lessons: Lesson[];
  solvedExamples?: SolvedProblem[];
  exerciseProblems?: SolvedProblem[];
  databank?: ChapterDatabank;
  interactiveWidgets?: InteractiveWidgetConfig[];
}

export interface Branch {
  id: BranchId;
  titleEn: string;
  titleAr: string;
  categoryEn: string; // Pure Math / Applied Math / Advanced Science
  categoryAr: string;
  iconName: string;
  colorGradient: string;
  totalMarks?: number;
  passingMarks?: number;
  chapters: Chapter[];
}

export interface Curriculum {
  id: CurriculumType;
  nameEn: string;
  nameAr: string;
  subtitleEn: string;
  subtitleAr: string;
  moeOfficialBaselineEn: string;
  moeOfficialBaselineAr: string;
  branches: Branch[];
}
