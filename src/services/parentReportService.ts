import {
  getStudentAnalytics,
  getReadinessScore,
  getWeakestChapters,
  type StudentAnalyticsState,
  type ChapterPerformanceRecord,
} from './studentAnalyticsService';
import { toHindiDigits } from '../utils/arabicNumerals';

export interface ParentReportData {
  studentName: string;
  reportDate: string;
  readinessPercentage: number;
  totalStudyMinutes: number;
  totalQuestionsSolved: number;
  totalCorrectQuestions: number;
  quizzesCompleted: number;
  strongChapters: Array<{
    titleAr: string;
    titleEn: string;
    accuracyPct: number;
  }>;
  focusChapters: Array<{
    titleAr: string;
    titleEn: string;
    accuracyPct: number;
  }>;
  daysUntilThanawyaExams: number;
  motivationalAdviceAr: string;
  motivationalAdviceEn: string;
}

/**
 * Calculates remaining days until official Thanawya Amma 2026 exam start (June 13, 2026).
 */
export function getDaysUntilThanawyaAmma2026(currentDate: Date = new Date()): number {
  const targetDate = new Date(2026, 5, 13); // June 13, 2026
  const diffTime = targetDate.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(diffDays, 0);
}

/**
 * Generates an empathetic, comprehensive weekly parent report summary.
 */
export function generateParentReport(
  analyticsState?: StudentAnalyticsState,
  studentName: string = 'بطلنا'
): ParentReportData {
  const state = analyticsState || getStudentAnalytics();
  const readiness = Math.round(getReadinessScore(state));
  const totalMinutes = Math.round((state.totalTimeSpentSec || 0) / 60);

  // Extract Strong Chapters (>= 75% accuracy with at least 5 attempts)
  const allChapters = Object.values(state.chapters || {});
  const strongChapters = allChapters
    .filter((ch) => ch.attempted >= 3 && (ch.correct / ch.attempted) >= 0.75)
    .sort((a, b) => (b.correct / b.attempted) - (a.correct / a.attempted))
    .slice(0, 3)
    .map((ch) => ({
      titleAr: ch.chapterTitleAr || ch.branchTitleAr,
      titleEn: ch.chapterTitleEn || ch.branchTitleEn,
      accuracyPct: Math.round((ch.correct / ch.attempted) * 100),
    }));

  // Extract Weak / Focus Chapters using existing getWeakestChapters
  const weakRecords = getWeakestChapters(state, 3);
  const focusChapters = weakRecords.map((ch: ChapterPerformanceRecord) => ({
    titleAr: ch.chapterTitleAr || ch.branchTitleAr,
    titleEn: ch.chapterTitleEn || ch.branchTitleEn,
    accuracyPct: ch.attempted > 0 ? Math.round((ch.correct / ch.attempted) * 100) : 0,
  }));

  const daysUntilExams = getDaysUntilThanawyaAmma2026();

  // Empathic Egyptian parenting encouragement advice
  let motivationalAdviceAr = '';
  let motivationalAdviceEn = '';

  if (readiness >= 80) {
    motivationalAdviceAr = 'مستوى الطالب متميز وثابت ماشاء الله! نوصي بالحفاظ على ساعات نوم منتظمة والدعم المعنوي والتشجيع المستمر.';
    motivationalAdviceEn = 'Outstanding and consistent progress! We recommend keeping a steady sleep schedule and providing positive reinforcement.';
  } else if (readiness >= 50) {
    motivationalAdviceAr = 'الطالب يبذل مجهوداً طيباً ويتقدم بخطوات واثقة. دعمه في تخصيص فترات راحة قصيرة وتقليل التوتر سيعزز تركيزه بشكل ملحوظ.';
    motivationalAdviceEn = 'Great effort and steady improvement. Supporting them with regular short breaks and reducing pressure will boost focus.';
  } else {
    motivationalAdviceAr = 'يحتاج الطالب في هذه المرحلة لدعم نفسي هادئ وتشجيع على الاستمرارية بدون مقارنات أو قلق، فكل خطوة تدريب تقربه من التمكن.';
    motivationalAdviceEn = 'Gentle encouragement and calm support without comparisons will help them build confidence step by step.';
  }

  return {
    studentName: studentName.trim() || 'بطل الثانوية العامة',
    reportDate: new Date().toLocaleDateString('ar-EG', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    readinessPercentage: readiness,
    totalStudyMinutes: totalMinutes,
    totalQuestionsSolved: state.totalAttempted || 0,
    totalCorrectQuestions: state.totalCorrect || 0,
    quizzesCompleted: state.quizzesCompleted || 0,
    strongChapters,
    focusChapters,
    daysUntilThanawyaExams: daysUntilExams,
    motivationalAdviceAr,
    motivationalAdviceEn,
  };
}

/**
 * Formats a clean, readable text digest optimized for WhatsApp / SMS.
 */
export function formatParentWeeklyDigest(
  data: ParentReportData,
  lang: 'ar' | 'en' = 'ar'
): string {
  const isAr = lang === 'ar';

  if (!isAr) {
    const hours = Math.floor(data.totalStudyMinutes / 60);
    const mins = data.totalStudyMinutes % 60;
    const timeStr = `${hours}h ${mins}m`;

    return [
      `🌟 *ClipSAT Weekly Parent Progress Report*`,
      `Student: *${data.studentName}*`,
      `📅 Date: ${data.reportDate}`,
      ``,
      `📊 *Overall Exam Readiness:* ${data.readinessPercentage}%`,
      `⏱️ *Active Study & Solving Time:* ${timeStr}`,
      `📝 *Practice Questions Solved:* ${data.totalQuestionsSolved} (${data.totalCorrectQuestions} correct)`,
      `🏆 *Quizzes & Diagnostic Tests:* ${data.quizzesCompleted}`,
      ``,
      data.strongChapters.length > 0
        ? `✨ *Top Strengths & Mastery:*\n` +
          data.strongChapters.map((c) => `  • ${c.titleEn} (${c.accuracyPct}%)`).join('\n')
        : null,
      ``,
      data.focusChapters.length > 0
        ? `🎯 *Recommended Focus Topics (Support & Encourage):*\n` +
          data.focusChapters.map((c) => `  • ${c.titleEn} (${c.accuracyPct}%)`).join('\n')
        : null,
      ``,
      `💙 *Home Support Tip:*`,
      data.motivationalAdviceEn,
      ``,
      `⏳ *Countdown to Official Exams:* ${data.daysUntilThanawyaExams} days remaining.`,
      ``,
      `ClipSAT — Egyptian Baccalaureate Prep Platform 🇪🇬`,
      `https://clipsat.app`,
    ]
      .filter((line) => line !== null)
      .join('\n');
  }

  // Arabic Egyptian Parent Digest
  const hours = Math.floor(data.totalStudyMinutes / 60);
  const mins = data.totalStudyMinutes % 60;
  const timeStr =
    hours > 0
      ? `${toHindiDigits(hours)} ساعة و ${toHindiDigits(mins)} دقيقة`
      : `${toHindiDigits(mins)} دقيقة`;

  const strongList =
    data.strongChapters.length > 0
      ? data.strongChapters
          .map((c) => `  • ${c.titleAr} (إتقان ${toHindiDigits(c.accuracyPct)}%)`)
          .join('\n')
      : '  • استمرار في بناء التمكن في مختلف الفروع';

  const focusList =
    data.focusChapters.length > 0
      ? data.focusChapters
          .map((c) => `  • ${c.titleAr} (نسبة استيعاب ${toHindiDigits(c.accuracyPct)}%)`)
          .join('\n')
      : '  • مراجعة عامة شاملة وتثبيت القوانين';

  return [
    `السلام عليكم ورحمة الله وبركاته 🌸`,
    `📋 *تقرير كليبسات الأسبوعي لمتابعة ولي الأمر*`,
    `بطل الثانوية العامة: *${data.studentName}*`,
    `🗓️ التاريخ: ${data.reportDate}`,
    ``,
    `📊 *مؤشر الجاهزية والتمكن العام:* ${toHindiDigits(data.readinessPercentage)}%`,
    `⏱️ *إجمالي وقت التدريب والمذاكرة النشطة:* ${timeStr}`,
    `📝 *الأسئلة الوزارية المنجزة:* ${toHindiDigits(data.totalQuestionsSolved)} سؤالاً (${toHindiDigits(data.totalCorrectQuestions)} إجابة صحيحة)`,
    `🎯 *الاختبارات والواجبات المكتملة:* ${toHindiDigits(data.quizzesCompleted)} اختبار`,
    ``,
    `🌟 *نقاط القوة والفخر:*`,
    strongList,
    ``,
    `💡 *مجالات نوصي بدعمه وتشجيعه فيها هذا الأسبوع:*`,
    focusList,
    ``,
    `💙 *رسالة دعم لأسرة البطل:*`,
    data.motivationalAdviceAr,
    ``,
    `⏳ *العد التنازلي لامتحانات الثانوية العامة:* متبقي ${toHindiDigits(data.daysUntilThanawyaExams)} يوماً.`,
    ``,
    `معاً خطوة بخطوة نحو القمة وتفوق الثانوية العامة 🇪🇬`,
    `منصة كليبسات — بنك الأسئلة والتعليم التكيفي`,
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Creates direct WhatsApp share link.
 */
export function generateWhatsAppShareUrl(
  text: string,
  phoneNumber?: string
): string {
  const cleanPhone = (phoneNumber || '').replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(text);
  if (cleanPhone) {
    return `https://wa.me/${cleanPhone}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
}

/**
 * Creates direct SMS share link.
 */
export function generateSmsShareUrl(
  text: string,
  phoneNumber?: string
): string {
  const cleanPhone = (phoneNumber || '').replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(text);
  if (cleanPhone) {
    return `sms:${cleanPhone}?body=${encoded}`;
  }
  return `sms:?body=${encoded}`;
}
