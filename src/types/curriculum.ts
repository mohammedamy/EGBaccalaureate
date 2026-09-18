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
  | 'egbac_psychology';

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
  gradeLevel: string;
  durationMinutes: number;
  moeCode: string;
  bloomsObjectivesEn: string[];
  bloomsObjectivesAr: string[];
  prerequisitesEn: string[];
  prerequisitesAr: string[];
  keyVocabularyEn: { term: string; definition: string }[];
  keyVocabularyAr: { term: string; definition: string }[];
  teachingPacing: {
    phaseEn: string;
    phaseAr: string;
    duration: string;
    activitiesEn: string;
    activitiesAr: string;
  }[];
  commonMisconceptionsEn: string[];
  commonMisconceptionsAr: string[];
  differentiationEn: {
    struggling: string;
    advanced: string;
  };
  differentiationAr: {
    struggling: string;
    advanced: string;
  };
  formativeAssessmentEn: string;
  formativeAssessmentAr: string;
  exitTicketQuestion: {
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
  | 'sociology_culture_extremism';

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
  theoryContentAr: string;
  formulas: { labelEn: string; labelAr: string; latex: string }[];
  moeRef: MoEReference;
  lessonPlan: TeacherLessonPlan;
  worksheet: Worksheet;
  interactiveWidget: InteractiveWidgetConfig;
  interactiveWidgets?: InteractiveWidgetConfig[];
}

export interface ChapterDatabank {
  easy: SolvedProblem[];
  medium: SolvedProblem[];
  hots: SolvedProblem[];
}

export interface Chapter {
  id: string;
  chapterNumber: number;
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
