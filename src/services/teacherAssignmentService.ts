import { db } from './firebase';
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import type {
  Assignment,
  AssignmentSubmission,
  ClassAnalyticsSummary,
} from '../types/teacherAssignment';

export const ASSIGNMENTS_STORAGE_KEY = 'egbac_teacher_assignments_v1';
export const SUBMISSIONS_STORAGE_KEY = 'egbac_assignment_submissions_v1';

// Ambiguity-free alphabet (32 characters: digits 2-9, uppercase letters excluding O, I, L)
const CODE_ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';

/**
 * Generates an easily readable 6-character uppercase code (e.g. "M7K9PX", "PHY24B")
 */
export function generateAssignmentCode(prefix?: string): string {
  let code = '';
  if (prefix && prefix.length <= 4) {
    code = prefix.toUpperCase().replace(/[^2-9A-Z]/g, '');
  }
  while (code.length < 6) {
    const randomIndex = Math.floor(Math.random() * CODE_ALPHABET.length);
    code += CODE_ALPHABET[randomIndex];
  }
  return code.slice(0, 6);
}

/**
 * Retrieves all locally cached assignments
 */
export function getLocalAssignments(): Record<string, Assignment> {
  if (typeof localStorage === 'undefined') return {};
  try {
    const raw = localStorage.getItem(ASSIGNMENTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Saves an assignment to local storage cache
 */
export function saveAssignmentLocally(assignment: Assignment): void {
  if (typeof localStorage === 'undefined') return;
  try {
    const assignments = getLocalAssignments();
    assignments[assignment.assignmentCode] = assignment;
    localStorage.setItem(ASSIGNMENTS_STORAGE_KEY, JSON.stringify(assignments));
  } catch (err) {
    console.warn('Failed to save assignment locally:', err);
  }
}

/**
 * Retrieves all locally cached student submissions
 */
export function getLocalSubmissions(): AssignmentSubmission[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(SUBMISSIONS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Saves a student submission to local storage cache
 */
export function saveSubmissionLocally(submission: AssignmentSubmission): void {
  if (typeof localStorage === 'undefined') return;
  try {
    const submissions = getLocalSubmissions();
    const index = submissions.findIndex((s) => s.submissionId === submission.submissionId);
    if (index >= 0) {
      submissions[index] = submission;
    } else {
      submissions.push(submission);
    }
    localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(submissions));
  } catch (err) {
    console.warn('Failed to save submission locally:', err);
  }
}

/**
 * Creates and registers a new assignment.
 * Saves locally first for 100% offline availability, then attempts to sync to Cloud Firestore.
 */
export async function createAssignment(
  params: Omit<Assignment, 'id' | 'assignmentCode' | 'createdAt'>,
  customCode?: string
): Promise<Assignment> {
  const code = (customCode || generateAssignmentCode()).toUpperCase();
  const id = `asgn_${code}_${Date.now()}`;
  const assignment: Assignment = {
    ...params,
    id,
    assignmentCode: code,
    createdAt: Date.now(),
  };

  // 1. Always save to local cache first (works offline)
  saveAssignmentLocally(assignment);

  // 2. Sync to Firestore in background
  try {
    const docRef = doc(db, 'assignments', code);
    await setDoc(docRef, {
      ...assignment,
      syncedAt: serverTimestamp(),
    }, { merge: true });
  } catch (cloudErr) {
    console.warn('Firestore cloud sync pending (saved to offline cache):', cloudErr);
  }

  return assignment;
}

/**
 * Resolves an assignment by its 6-character code.
 * Checks local storage first for offline speed, then queries Firestore if online.
 */
export async function getAssignmentByCode(rawCode: string): Promise<Assignment | null> {
  if (!rawCode) return null;
  const code = rawCode.trim().toUpperCase();

  // 1. Check local cache first
  const localAssignments = getLocalAssignments();
  if (localAssignments[code]) {
    return localAssignments[code];
  }

  // 2. Query Firestore if online
  try {
    const docRef = doc(db, 'assignments', code);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const data = snap.data() as Assignment;
      saveAssignmentLocally(data);
      return data;
    }
  } catch (err) {
    console.warn('Firestore query failed (device may be offline):', err);
  }

  return null;
}

/**
 * Submits a student's completed assignment answers.
 */
export async function submitAssignment(
  params: Omit<AssignmentSubmission, 'submissionId' | 'submittedAt'>
): Promise<AssignmentSubmission> {
  const submissionId = `sub_${params.assignmentCode}_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  const submission: AssignmentSubmission = {
    ...params,
    submissionId,
    submittedAt: Date.now(),
  };

  // 1. Save to local storage
  saveSubmissionLocally(submission);

  // 2. Attempt Firestore sync
  try {
    const docRef = doc(db, 'assignment_submissions', submissionId);
    await setDoc(docRef, {
      ...submission,
      syncedAt: serverTimestamp(),
    });
  } catch (err) {
    console.warn('Cloud submission failed (saved locally):', err);
  }

  return submission;
}

/**
 * Retrieves all submissions for an assignment code, merging Firestore cloud records and local storage.
 */
export async function getSubmissionsForAssignment(assignmentCode: string): Promise<AssignmentSubmission[]> {
  const code = assignmentCode.trim().toUpperCase();
  let submissions = getLocalSubmissions().filter((s) => s.assignmentCode === code);

  try {
    const q = query(
      collection(db, 'assignment_submissions'),
      where('assignmentCode', '==', code)
    );
    const snap = await getDocs(q);
    const cloudSubmissions: AssignmentSubmission[] = [];
    snap.forEach((d) => {
      cloudSubmissions.push(d.data() as AssignmentSubmission);
    });

    // Merge and deduplicate by submissionId
    const map = new Map<string, AssignmentSubmission>();
    submissions.forEach((s) => map.set(s.submissionId, s));
    cloudSubmissions.forEach((s) => map.set(s.submissionId, s));
    return Array.from(map.values());
  } catch (err) {
    console.warn('Using local submissions for class analytics:', err);
    return submissions;
  }
}

/**
 * Computes class performance analytics and error distribution for a given assignment.
 */
export async function getClassAnalytics(assignmentCode: string): Promise<ClassAnalyticsSummary | null> {
  const code = assignmentCode.trim().toUpperCase();
  const assignment = await getAssignmentByCode(code);
  const title = assignment?.titleAr || assignment?.title || code;

  const submissions = await getSubmissionsForAssignment(code);

  if (submissions.length === 0) {
    return {
      assignmentCode: code,
      assignmentTitle: title,
      submissionCount: 0,
      averageScore: 0,
      averagePercentage: 0,
      medianScore: 0,
      highestScore: 0,
      lowestScore: 0,
      completionRate: 0,
      averageTimeSpentSeconds: 0,
      commonErrorTypes: [],
      chapterAccuracy: {},
      recentSubmissions: [],
    };
  }

  const scores = submissions.map((s) => s.score).sort((a, b) => a - b);
  const percentages = submissions.map((s) => s.percentage).sort((a, b) => a - b);
  const totalScoreSum = scores.reduce((sum, s) => sum + s, 0);
  const totalPctSum = percentages.reduce((sum, p) => sum + p, 0);
  const totalTime = submissions.reduce((sum, s) => sum + s.timeSpentSeconds, 0);

  const medianScore =
    scores.length % 2 === 0
      ? (scores[scores.length / 2 - 1] + scores[scores.length / 2]) / 2
      : scores[Math.floor(scores.length / 2)];

  // Aggregate error types
  const errorTotals: Record<string, number> = {};
  let totalErrors = 0;
  submissions.forEach((s) => {
    Object.entries(s.errorTypeBreakdown || {}).forEach(([errType, count]) => {
      errorTotals[errType] = (errorTotals[errType] || 0) + count;
      totalErrors += count;
    });
  });

  const commonErrorTypes = Object.entries(errorTotals)
    .map(([type, count]) => ({
      type,
      count,
      percentage: totalErrors > 0 ? Math.round((count / totalErrors) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count);

  // Chapter-level breakdown
  const chapterAcc: Record<string, { attempted: number; correct: number; percentage: number }> = {};
  submissions.forEach((s) => {
    s.answers?.forEach((ans) => {
      // Find chapter for this question if referenced
      const ref = assignment?.questionRefs?.find((r) => r.id === ans.questionId);
      const chId = ref?.chapterId || 'general';
      if (!chapterAcc[chId]) {
        chapterAcc[chId] = { attempted: 0, correct: 0, percentage: 0 };
      }
      chapterAcc[chId].attempted += 1;
      if (ans.isCorrect) chapterAcc[chId].correct += 1;
    });
  });

  Object.values(chapterAcc).forEach((item) => {
    item.percentage = item.attempted > 0 ? Math.round((item.correct / item.attempted) * 100) : 0;
  });

  const recentSubmissions = submissions
    .sort((a, b) => b.submittedAt - a.submittedAt)
    .slice(0, 10)
    .map((s) => ({
      studentName: s.studentName,
      score: s.score,
      percentage: s.percentage,
      submittedAt: s.submittedAt,
    }));

  return {
    assignmentCode: code,
    assignmentTitle: title,
    submissionCount: submissions.length,
    averageScore: Math.round((totalScoreSum / submissions.length) * 10) / 10,
    averagePercentage: Math.round(totalPctSum / submissions.length),
    medianScore,
    highestScore: scores[scores.length - 1],
    lowestScore: scores[0],
    completionRate: 100,
    averageTimeSpentSeconds: Math.round(totalTime / submissions.length),
    commonErrorTypes,
    chapterAccuracy: chapterAcc,
    recentSubmissions,
  };
}

/**
 * Compactly encodes an assignment into a shareable URL query string.
 * Allows teachers to share entire assignments via WhatsApp, SMS, or QR code
 * without needing an internet connection on either end!
 */
export function encodeAssignmentToShareableUrl(
  assignment: Assignment,
  baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://clipsat.github.io/EGBaccalaureate/'
): string {
  const payload = {
    c: assignment.assignmentCode,
    t: assignment.title,
    ta: assignment.titleAr,
    s: assignment.subjectId,
    ch: assignment.chapterIds,
    q: assignment.questionIds,
    p: assignment.totalPoints,
    m: assignment.timeLimitMinutes,
    d: assignment.deadline,
    tn: assignment.teacherName,
    cq: assignment.customQuestions?.map((q) => ({
      id: q.id,
      q: q.questionAr,
      o: q.optionsAr,
      a: q.correctOptionIndex,
      e: q.explanationAr,
      s: q.subjectId,
      d: q.difficulty,
      t: q.chapterTitleAr,
      tip: q.teacherTipAr,
    })),
  };

  try {
    const jsonStr = JSON.stringify(payload);
    // Base64 encode UTF-8 safely
    let b64: string;
    if (typeof btoa !== 'undefined') {
      b64 = btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
    } else {
      const gBuf = (globalThis as any).Buffer;
      b64 = gBuf ? gBuf.from(jsonStr).toString('base64') : '';
    }
    
    const url = new URL(baseUrl);
    url.searchParams.set('tab', 'testGenerator');
    url.searchParams.set('asgn', b64);
    return url.toString();
  } catch (err) {
    console.error('Failed to encode assignment URL:', err);
    return `${baseUrl}?tab=testGenerator&asgnCode=${assignment.assignmentCode}`;
  }
}

/**
 * Decodes a packed assignment from a base64 URL query string.
 */
export function decodeAssignmentFromUrl(rawStr: string): Assignment | null {
  if (!rawStr) return null;
  try {
    let decodedStr = '';
    if (typeof atob !== 'undefined') {
      decodedStr = decodeURIComponent(
        Array.prototype.map
          .call(atob(rawStr), (c: string) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
    } else {
      const gBuf = (globalThis as any).Buffer;
      decodedStr = gBuf ? gBuf.from(rawStr, 'base64').toString('utf-8') : '';
    }

    const p = JSON.parse(decodedStr);
    const assignment: Assignment = {
      id: `asgn_${p.c}_packed`,
      assignmentCode: p.c,
      title: p.t,
      titleAr: p.ta || p.t,
      subjectId: p.s,
      chapterIds: p.ch || [],
      questionIds: p.q || [],
      customQuestions: Array.isArray(p.cq)
        ? p.cq.map((c: any) => ({
            id: c.id,
            questionAr: c.q,
            optionsAr: c.o,
            correctOptionIndex: c.a,
            explanationAr: c.e,
            subjectId: c.s || p.s,
            difficulty: c.d || 'medium',
            chapterTitleAr: c.t || p.ta || 'واجب المعلم',
            teacherTipAr: c.tip,
            createdAt: Date.now(),
          }))
        : undefined,
      totalPoints: p.p || 0,
      timeLimitMinutes: p.m || 0,
      deadline: p.d,
      teacherName: p.tn,
      teacherTip: p.tip,
      createdAt: Date.now(),
    };
    // Cache locally as soon as decoded
    saveAssignmentLocally(assignment);
    return assignment;
  } catch (err) {
    console.error('Failed to decode assignment URL payload:', err);
    return null;
  }
}

export interface AtRiskStudentSummary {
  studentName: string;
  studentId: string;
  scorePct: number;
  riskLevel: 'critical' | 'moderate' | 'low';
  reasonAr: string;
  reasonEn: string;
  recommendedActionAr: string;
  recommendedActionEn: string;
}

export interface TopicGapItem {
  topicId: string;
  topicTitleAr: string;
  topicTitleEn: string;
  failureRatePct: number;
  mistakeCount: number;
  totalAttempts: number;
  examWeight: number; // 1 to 5
  priorityScore: number; // failureRate * examWeight
}

/**
 * Identifies at-risk students who score below the pass threshold
 * or show severe error concentrations.
 */
export function getAtRiskStudents(
  submissions: AssignmentSubmission[],
  passThreshold = 50
): AtRiskStudentSummary[] {
  if (!submissions || submissions.length === 0) return [];

  const atRiskList: AtRiskStudentSummary[] = [];

  submissions.forEach((s) => {
    const pct = s.percentage;
    let riskLevel: 'critical' | 'moderate' | 'low' = 'low';
    let reasonAr = '';
    let reasonEn = '';
    let actionAr = '';
    let actionEn = '';

    if (pct < passThreshold) {
      if (pct < 35) {
        riskLevel = 'critical';
        reasonAr = `نسبة تحصيل حرجة جداً (${pct}%) — فجوات مفاهيمية عميقة في أساسيات المادة`;
        reasonEn = `Critical mastery deficit (${pct}%) — severe conceptual gaps in subject foundations`;
        actionAr = 'تدخل علاجي فوري وجلسة مراجعة فردية مع المعلم قبل الانتقال للموضوع التالي';
        actionEn = 'Immediate one-on-one remedial session before progressing to next unit';
      } else {
        riskLevel = 'moderate';
        reasonAr = `أقل من حد النجاح الأدنى (${pct}%) — تعثر في ربط القوانين أو تسرع في الحل`;
        reasonEn = `Below minimum pass threshold (${pct}%) — formula application slips or rushed solving`;
        actionAr = 'إعادة حل الأسئلة الخاطئة وتكليف بواجب علاجي قصير في المفاهيم الضعيفة';
        actionEn = 'Retake incorrect items with focused mini-remedial assignment on weak topics';
      }

      atRiskList.push({
        studentName: s.studentName,
        studentId: s.studentId,
        scorePct: pct,
        riskLevel,
        reasonAr,
        reasonEn,
        recommendedActionAr: actionAr,
        recommendedActionEn: actionEn,
      });
    }
  });

  return atRiskList.sort((a, b) => a.scorePct - b.scorePct);
}

/**
 * Aggregates knowledge-point and chapter gaps across all submissions
 * and sorts them by pedagogical priority and ministerial exam weight.
 */
export function getTopicGapHeatmap(
  submissions: AssignmentSubmission[],
  assignment?: Assignment | null
): TopicGapItem[] {
  if (!submissions || submissions.length === 0) return [];

  const chapterStats: Record<string, { attempts: number; mistakes: number; titleAr?: string; titleEn?: string }> = {};

  submissions.forEach((s) => {
    s.answers?.forEach((ans) => {
      const ref = assignment?.questionRefs?.find((r) => r.id === ans.questionId);
      const chId = ref?.chapterId || 'general_topic';
      if (!chapterStats[chId]) {
        chapterStats[chId] = {
          attempts: 0,
          mistakes: 0,
          titleAr: ref?.chapterId || 'مفهوم أساسي',
          titleEn: ref?.chapterId || 'Core Concept',
        };
      }
      chapterStats[chId].attempts += 1;
      if (!ans.isCorrect) {
        chapterStats[chId].mistakes += 1;
      }
    });
  });

  const gapItems: TopicGapItem[] = Object.entries(chapterStats).map(([chId, stat]) => {
    const failureRatePct = stat.attempts > 0 ? Math.round((stat.mistakes / stat.attempts) * 100) : 0;
    // Approximate ministerial exam weight (default 4 for core subjects)
    const examWeight = 4;
    const priorityScore = Math.round((failureRatePct * examWeight) / 10);

    return {
      topicId: chId,
      topicTitleAr: stat.titleAr || chId,
      topicTitleEn: stat.titleEn || chId,
      failureRatePct,
      mistakeCount: stat.mistakes,
      totalAttempts: stat.attempts,
      examWeight,
      priorityScore,
    };
  });

  return gapItems.sort((a, b) => b.priorityScore - a.priorityScore);
}

/**
 * Generates an auto-targeted 10-question remedial assignment
 * focusing exclusively on the class's top conceptual gaps.
 */
export function generateRemedialAssignment(
  weakTopics: TopicGapItem[],
  teacherName: string,
  subjectId: string,
  originalAssignmentTitle = 'الواجب العام'
): Assignment {
  const code = generateAssignmentCode();
  const topTopics = weakTopics.slice(0, 3);
  const targetChapterIds = topTopics.map((t) => t.topicId);

  const titleAr = `واجب علاجي مكثف — ${originalAssignmentTitle}`;
  const titleEn = `Remedial Sprint — ${originalAssignmentTitle}`;

  const remedial: Assignment = {
    id: `remedial_${code}_${Date.now()}`,
    assignmentCode: code,
    title: titleEn,
    titleAr,
    subjectId,
    chapterIds: targetChapterIds.length > 0 ? targetChapterIds : ['ch1'],
    questionIds: [],
    totalPoints: 10,
    timeLimitMinutes: 20,
    teacherName: teacherName || 'المعلم',
    teacherTip: 'تم إعداد هذا الواجب العلاجي آلياً لسد الثغرات المشتركة التي ظهرت في نتائج الفصل السابقة.',
    createdAt: Date.now(),
  };

  saveAssignmentLocally(remedial);
  return remedial;
}

/**
 * Serializes class performance and student submissions to clean CSV format.
 */
export function exportClassAnalyticsCSV(
  analytics: ClassAnalyticsSummary,
  submissions: AssignmentSubmission[]
): string {
  const headers = ['اسم الطالب', 'كود الواجب', 'الدرجة', 'النسبة المئوية', 'المدة (ثانية)', 'تاريخ التسليم'];
  const rows = submissions.map((s) => [
    `"${s.studentName.replace(/"/g, '""')}"`,
    s.assignmentCode,
    s.score,
    `${s.percentage}%`,
    s.timeSpentSeconds || 0,
    new Date(s.submittedAt).toLocaleDateString('ar-EG'),
  ]);

  const summaryRows = [
    ['---', '---', '---', '---', '---', '---'],
    ['ملخص الفصل الإجمالي:', `"${analytics.assignmentTitle.replace(/"/g, '""')}"`, '', '', '', ''],
    ['إجمالي التسليمات:', analytics.submissionCount.toString(), '', '', '', ''],
    ['متوسط الدرجات:', `${analytics.averagePercentage}%`, '', '', '', ''],
    ['أعلى نسبة مئوية:', `${analytics.highestScore}%`, '', '', '', ''],
    ['أدنى نسبة مئوية:', `${analytics.lowestScore}%`, '', '', '', ''],
  ];

  return '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(',')), ...summaryRows.map((r) => r.join(','))].join('\n');
}

