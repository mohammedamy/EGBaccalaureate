export interface AssignmentQuestionRef {
  id: string;
  chapterId: string;
  difficulty?: 'easy' | 'medium' | 'hots';
  points?: number;
}

export interface Assignment {
  id: string;
  assignmentCode: string; // 6-character uppercase alphanumeric (e.g. 'MATH26', 'PHYS01')
  title: string;
  titleAr: string;
  subjectId: string;
  branchId?: string;
  chapterIds: string[];
  questionIds: string[];
  questionRefs?: AssignmentQuestionRef[];
  totalPoints: number;
  timeLimitMinutes: number; // 0 = untimed
  createdAt: number;
  deadline?: number; // timestamp ms
  teacherName?: string;
  teacherTip?: string;
  allowOfflineUrlPacking?: boolean;
}

export interface AssignmentAnswerSubmission {
  questionId: string;
  selectedOptionIndex: number;
  isCorrect: boolean;
  timeSpentSec: number;
  errorType?: string;
}

export interface AssignmentSubmission {
  submissionId: string;
  assignmentCode: string;
  studentName: string;
  studentId: string;
  score: number;
  totalPoints: number;
  percentage: number;
  timeSpentSeconds: number;
  errorTypeBreakdown: Record<string, number>;
  answers: AssignmentAnswerSubmission[];
  submittedAt: number;
}

export interface ClassAnalyticsSummary {
  assignmentCode: string;
  assignmentTitle: string;
  submissionCount: number;
  averageScore: number;
  averagePercentage: number;
  medianScore: number;
  highestScore: number;
  lowestScore: number;
  completionRate: number;
  averageTimeSpentSeconds: number;
  commonErrorTypes: Array<{
    type: string;
    count: number;
    percentage: number;
  }>;
  chapterAccuracy: Record<
    string,
    {
      attempted: number;
      correct: number;
      percentage: number;
    }
  >;
  recentSubmissions: Array<{
    studentName: string;
    score: number;
    percentage: number;
    submittedAt: number;
  }>;
}
