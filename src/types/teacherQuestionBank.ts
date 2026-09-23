export type TeacherQuestionDifficulty = 'easy' | 'medium' | 'hots';

export interface TeacherCustomQuestion {
  id: string; // Unique ID (e.g. 'tq_1711200000_abc')
  teacherId?: string;
  teacherName?: string;
  subjectId: string; // e.g. 'physics', 'math', 'chemistry', 'biology', 'arabic', 'english'
  branchId?: string;
  chapterTitleAr: string;
  chapterTitleEn?: string;
  difficulty: TeacherQuestionDifficulty;
  questionAr: string;
  questionEn?: string;
  optionsAr: string[]; // 4 multiple-choice alternatives
  optionsEn?: string[];
  correctOptionIndex: number; // 0, 1, 2, or 3
  explanationAr?: string;
  explanationEn?: string;
  stepByStepSolutionAr?: string[];
  stepByStepSolutionEn?: string[];
  teacherTipAr?: string;
  teacherTipEn?: string;
  tags?: string[]; // e.g. ['امتحان تجريبي', 'مسألة تفوق', 'فكرة وزارية']
  createdAt: number;
  updatedAt: number;
}

export interface CustomQuestionFilter {
  subjectId?: string;
  difficulty?: TeacherQuestionDifficulty;
  searchQuery?: string;
  tag?: string;
}

export interface CustomQuestionExportPackage {
  version: string;
  exportDate: string;
  exportTimestamp: number;
  app: string;
  teacherName?: string;
  questionCount: number;
  questions: TeacherCustomQuestion[];
}
