import type {
  AssignmentSubmission,
  TeacherGradingFeedback,
} from '../types/teacherAssignment';
import {
  SUBMISSIONS_STORAGE_KEY,
} from './teacherAssignmentService';

/**
 * Updates an existing student submission with teacher feedback, notes, and adjusted points
 */
export function saveSubmissionGrade(
  submissionId: string,
  feedback: TeacherGradingFeedback
): boolean {
  if (typeof localStorage === 'undefined') return false;
  try {
    const raw = localStorage.getItem(SUBMISSIONS_STORAGE_KEY);
    if (!raw) return false;
    const submissions: AssignmentSubmission[] = JSON.parse(raw);
    const index = submissions.findIndex((s) => s.submissionId === submissionId);
    if (index === -1) return false;

    const target = submissions[index];
    const scoreAdjustment = feedback.teacherScoreAdjustment || 0;
    const finalScore = Math.max(0, Math.min(target.totalPoints, target.score + scoreAdjustment));
    const finalPercentage = target.totalPoints > 0 ? Math.round((finalScore / target.totalPoints) * 1000) / 10 : 0;

    submissions[index] = {
      ...target,
      score: finalScore,
      percentage: finalPercentage,
      teacherFeedback: {
        ...feedback,
        finalScore,
        gradedAt: Date.now(),
      },
    };

    localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(submissions));
    return true;
  } catch (err) {
    console.warn('Failed to save submission grade:', err);
    return false;
  }
}

/**
 * Formats a comprehensive WhatsApp progress and grading message for parents or students
 */
export function generateWhatsAppStudentReport(
  submission: AssignmentSubmission,
  assignmentTitle: string = 'الواجب المدرسي'
): string {
  const isReviewed = submission.teacherFeedback?.status === 'reviewed';
  const teacherNotes = submission.teacherFeedback?.teacherNotes?.trim();
  const teacherName = submission.teacherFeedback?.teacherName?.trim() || 'أستاذ المادة';
  const durationMins = Math.round(submission.timeSpentSeconds / 60);

  const lines = [
    `🎓 *تقرير متابعة وتقييم مستوى الطالب - منصة البكالوريا المصرية*`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 *اسم الطالب:* ${submission.studentName}`,
    `📚 *الواجب / الاختبار:* ${assignmentTitle} (كود: ${submission.assignmentCode})`,
    `🏆 *الدرجة المحققة:* ${submission.score} من ${submission.totalPoints} (${submission.percentage}%)`,
    `⏱️ *الزمن المستغرق:* ${durationMins} دقيقة`,
    `📅 *تاريخ التسليم:* ${new Date(submission.submittedAt).toLocaleDateString('ar-EG')}`,
    ``,
    `📊 *التشخيص الأكاديمي:*`,
    submission.percentage >= 85
      ? `🌟 أداء ممتاز ومبهر يعكس تمكناً عالياً من نواتج التعلم وفهم المفاهيم الأساسية.`
      : submission.percentage >= 65
      ? `👍 أداء جيد مع وجود بعض النقاط التي تحتاج إلى مراجعة وتدريب تكميلي.`
      : `⚠️ يتطلب هذا الموضوع تدريباً إضافياً لسد الفجوات المفاهيمية في الأسئلة التي لم يوفق فيها.`,
  ];

  if (teacherNotes) {
    lines.push(``);
    lines.push(`👨‍🏫 *توجيهات وملاحظات الأستاذ (${teacherName}):*`);
    lines.push(`"${teacherNotes}"`);
  }

  if (isReviewed) {
    lines.push(``);
    lines.push(`✅ *تمت المراجعة والاعتماد من قبل معلم الفصل.*`);
  }

  lines.push(``);
  lines.push(`💡 *رابط منصة المذاكرة والتدريب:*`);
  lines.push(`https://mohammedamy.github.io/EGBaccalaureate/`);

  return encodeURIComponent(lines.join('\n'));
}

/**
 * Generates an Excel-ready CSV string for all student submissions of an assignment
 */
export function exportClassSubmissionsCSV(
  submissions: AssignmentSubmission[],
  _assignmentTitle: string = 'Assignment'
): string {
  const headers = [
    'كود الواجب',
    'اسم الطالب',
    'معرف الطالب',
    'الدرجة',
    'الدرجة الكلية',
    'النسبة المئوية',
    'الوقت المستغرق (دقيقة)',
    'حالة المراجعة',
    'ملاحظات المعلم',
    'تاريخ التسليم',
  ];

  const rows = submissions.map((s) => {
    const timeMins = (s.timeSpentSeconds / 60).toFixed(1);
    const status =
      s.teacherFeedback?.status === 'reviewed'
        ? 'تمت المراجعة'
        : s.teacherFeedback?.status === 'needs_revision'
        ? 'يحتاج إعادة'
        : 'قيد المراجعة';
    const notes = (s.teacherFeedback?.teacherNotes || '').replace(/"/g, '""');
    const dateStr = new Date(s.submittedAt).toLocaleString('ar-EG');

    return [
      `"${s.assignmentCode}"`,
      `"${s.studentName}"`,
      `"${s.studentId}"`,
      s.score,
      s.totalPoints,
      `"${s.percentage}%"`,
      timeMins,
      `"${status}"`,
      `"${notes}"`,
      `"${dateStr}"`,
    ].join(',');
  });

  // Prepend UTF-8 BOM so Excel displays Arabic characters properly
  return '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
}
