export type CurriculumType = 'thanaweya' | 'egbac';
export type ThemeMode = 'dark' | 'light' | 'high-contrast';
export type FontSizeMode = 'normal' | 'large' | 'xlarge';

export type BranchId = 
  | 'algebra_solid' 
  | 'calculus' 
  | 'statics' 
  | 'dynamics'
  | 'egbac_analysis'
  | 'egbac_vectors_geometry'
  | 'egbac_mechanics'
  | 'egbac_probability';

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
  | 'line_plane_angle_3d';

export interface SolvedProblem {
  id: string;
  titleEn: string;
  titleAr: string;
  difficulty: DifficultyLevel;
  questionEn: string;
  questionAr: string;
  diagramType?: DiagramType;
  optionsEn?: string[];
  optionsAr?: string[];
  correctAnswer?: string;
  correctIndex?: number;
  hintEn: string;
  hintAr: string;
  stepByStepSolutionEn: string[];
  stepByStepSolutionAr: string[];
  teacherTipEn?: string;
  teacherTipAr?: string;
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

export interface InteractiveWidgetConfig {
  type: '3d_vectors' | 'pascal_binomial' | 'calculus_tangent' | 'statics_friction' | 'complex_argand' | 'normal_distribution';
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
