export type AcademicTrack = 'scientific_science' | 'scientific_math' | 'literary' | 'stem' | 'general';

export type SecondLanguage = 'french' | 'german' | 'italian' | 'spanish' | 'chinese' | 'none';

export type ProfileRole = 'student' | 'teacher';

export interface UserProfile {
  uid?: string;
  email?: string;
  displayName: string;
  photoURL?: string;
  avatarIcon?: string;
  isGoogleUser: boolean;
  role?: ProfileRole;
  teacherSubject?: string;
  teacherSchool?: string;
  teacherBio?: string;
  academicTrack: AcademicTrack;
  dreamCollege: string;
  targetPercentage: number;
  secondLanguage: SecondLanguage;
  governorate: string;
  dailyPracticeGoal: number; // target questions per day
  studyMinutesGoal: number;  // target study minutes per day
  soundEffectsEnabled: boolean;
  lastSyncTimestamp?: number;
  createdAt: number;
  updatedAt: number;
}

export interface LocalDeviceDataSummary {
  solvedQuestionsCount: number;
  mistakesCount: number;
  earnedBadgesCount: number;
  downloadedPacksCount: number;
  hasCustomProfile: boolean;
  storageEstimateBytes?: number;
  lastBackupDate?: string;
}

export interface LocalDataExportPackage {
  version: string;
  exportDate: string;
  exportTimestamp: number;
  app: string;
  profile: UserProfile;
  analytics?: unknown;
  mistakes?: unknown;
  adaptiveState?: unknown;
  badges?: unknown;
  governorate?: string;
}
