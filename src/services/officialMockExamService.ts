import type { Curriculum, Branch, SolvedProblem, DifficultyLevel } from '../types/curriculum';
import { getBranchesForSubject } from '../data/subjects';
import type { GeneratedQuestion } from './mistakeNotebookService';
import {
  computeBloomDiagnostics,
  classifyBloomLevel,
  type BloomDiagnosticsReport,
} from './bloomTaxonomyService';

export interface OfficialMockConfig {
  subjectId: string;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  section1Count: number; // 1-point items
  section2Count: number; // 2-point items
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

/**
 * Returns the authentic Egyptian Thanawya Amma exam configuration for a subject or branch.
 * Replicates the official 2021-2025 ministerial blueprints.
 */
export function getOfficialMockConfig(subjectId: string = 'all', branchId: string = 'all'): OfficialMockConfig {
  const normSubject = (subjectId || '').toLowerCase();
  const normBranch = (branchId || '').toLowerCase();

  // 1. Science Subjects: Physics, Chemistry, Biology (46 Questions, 60 Marks, 3 Hours)
  if (normSubject === 'physics' || normBranch.includes('physic') || normBranch.includes('فيزياء')) {
    return {
      subjectId: 'physics',
      totalQuestions: 46,
      totalMarks: 60,
      durationMinutes: 180,
      section1Count: 32, // 32 * 1 = 32 marks
      section2Count: 14, // 14 * 2 = 28 marks (Total: 60 marks)
      titleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة - مادة الفيزياء',
      titleEn: 'Official Thanawya Amma Examination - General Physics',
      descAr: '٤٦ سؤالاً (٣٢ سؤالاً بدرجة واحدة + ١٤ سؤالاً بدرجتين) بإجمالي ٦٠ درجة في ٣ ساعات كاملة بنظام البابل شيت الرسمي.',
      descEn: '46 questions (32 items @ 1 mark + 14 items @ 2 marks) totaling 60 marks over 3 hours conforming to official ministerial specifications.',
    };
  }

  if (normSubject === 'chemistry' || normBranch.includes('chem') || normBranch.includes('كيمياء')) {
    return {
      subjectId: 'chemistry',
      totalQuestions: 46,
      totalMarks: 60,
      durationMinutes: 180,
      section1Count: 32,
      section2Count: 14,
      titleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة - مادة الكيمياء',
      titleEn: 'Official Thanawya Amma Examination - Chemistry',
      descAr: '٤٦ سؤالاً (٣٢ سؤالاً بدرجة واحدة + ١٤ سؤالاً بدرجتين) بإجمالي ٦٠ درجة في ٣ ساعات كاملة بنظام البابل شيت الرسمي.',
      descEn: '46 questions (32 items @ 1 mark + 14 items @ 2 marks) totaling 60 marks over 3 hours conforming to official ministerial specifications.',
    };
  }

  if (normSubject === 'biology' || normBranch.includes('bio') || normBranch.includes('أحياء')) {
    return {
      subjectId: 'biology',
      totalQuestions: 46,
      totalMarks: 60,
      durationMinutes: 180,
      section1Count: 32,
      section2Count: 14,
      titleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة - مادة الأحياء',
      titleEn: 'Official Thanawya Amma Examination - Biology',
      descAr: '٤٦ سؤالاً (٣٢ سؤالاً بدرجة واحدة + ١٤ سؤالاً بدرجتين) بإجمالي ٦٠ درجة في ٣ ساعات كاملة بنظام البابل شيت الرسمي.',
      descEn: '46 questions (32 items @ 1 mark + 14 items @ 2 marks) totaling 60 marks over 3 hours conforming to official ministerial specifications.',
    };
  }

  // 2. Mathematics Branches (Calculus, Statics, Dynamics, Algebra & Geometry): 20 Questions, 30 Marks, 2 Hours per branch
  const isSpecificMathBranch =
    normBranch !== 'all' &&
    (normBranch.includes('calc') ||
      normBranch.includes('تف Do') ||
      normBranch.includes('تفاضل') ||
      normBranch.includes('stat') ||
      normBranch.includes('استاتيكا') ||
      normBranch.includes('dynam') ||
      normBranch.includes('ديناميكا') ||
      normBranch.includes('algeb') ||
      normBranch.includes('جبر') ||
      normBranch.includes('solid') ||
      normBranch.includes('فراغية'));

  if (isSpecificMathBranch) {
    let branchNameAr = 'الرياضيات';
    let branchNameEn = 'Mathematics Branch';

    if (normBranch.includes('calc') || normBranch.includes('تفاضل')) {
      branchNameAr = 'التفاضل والتكامل';
      branchNameEn = 'Calculus & Integration';
    } else if (normBranch.includes('stat') || normBranch.includes('استاتيكا')) {
      branchNameAr = 'الاستاتيكا';
      branchNameEn = 'Statics';
    } else if (normBranch.includes('dynam') || normBranch.includes('ديناميكا')) {
      branchNameAr = 'الديناميكا';
      branchNameEn = 'Dynamics';
    } else if (normBranch.includes('algeb') || normBranch.includes('solid') || normBranch.includes('جبر')) {
      branchNameAr = 'الجبر والهندسة الفراغية';
      branchNameEn = 'Algebra & Solid Geometry';
    }

    return {
      subjectId: 'mathematics',
      totalQuestions: 20,
      totalMarks: 30,
      durationMinutes: 120,
      section1Count: 10, // 10 * 1 = 10 marks
      section2Count: 10, // 10 * 2 = 20 marks (Total: 30 marks)
      titleAr: `امتحان شهادة إتمام الدراسة الثانوية العامة - مادة ${branchNameAr}`,
      titleEn: `Official Thanawya Amma Examination - ${branchNameEn}`,
      descAr: '٢٠ سؤالاً (١٠ أسئلة بدرجة واحدة + ١٠ أسئلة بدرجتين) بإجمالي ٣٠ درجة في ساعتين كاملتين بنظام البابل شيت الرسمي.',
      descEn: '20 questions (10 items @ 1 mark + 10 items @ 2 marks) totaling 30 marks over 2 hours conforming to official ministerial specifications.',
    };
  }

  // 3. General Mathematics Track (Pure Math or Applied Math combined)
  if (normSubject.includes('math') || normSubject.includes('pure') || normSubject.includes('applied') || normSubject.includes('رياضيات')) {
    return {
      subjectId: 'mathematics',
      totalQuestions: 20,
      totalMarks: 30,
      durationMinutes: 120,
      section1Count: 10,
      section2Count: 10,
      titleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة - فرع الرياضيات التخصصي',
      titleEn: 'Official Thanawya Amma Examination - Specialized Math Branch',
      descAr: '٢٠ سؤالاً (١٠ أسئلة بدرجة واحدة + ١٠ أسئلة بدرجتين) بإجمالي ٣٠ درجة في ساعتين كاملتين بنظام البابل شيت الرسمي.',
      descEn: '20 questions (10 items @ 1 mark + 10 items @ 2 marks) totaling 30 marks over 2 hours conforming to official ministerial specifications.',
    };
  }

  // 4. Humanities & Language Subjects: History, Arabic, English, French
  if (normSubject === 'history' || normBranch.includes('history') || normBranch.includes('تاريخ')) {
    return {
      subjectId: 'history',
      totalQuestions: 46,
      totalMarks: 60,
      durationMinutes: 180,
      section1Count: 32, // 32 * 1 = 32 marks
      section2Count: 14, // 14 * 2 = 28 marks (Total: 60 marks)
      titleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة - مادة تاريخ مصر الحديث والمعاصر',
      titleEn: 'Official Thanawya Amma Examination - Modern Egyptian History',
      descAr: '٤٦ سؤالاً (٣٢ سؤالاً بدرجة واحدة + ١٤ سؤالاً بدرجتين) بإجمالي ٦٠ درجة في ٣ ساعات كاملة بنظام البابل شيت الرسمي.',
      descEn: '46 questions (32 items @ 1 mark + 14 items @ 2 marks) totaling 60 marks over 3 hours conforming to official ministerial specifications.',
    };
  }

  if (normSubject === 'geography' || normBranch.includes('geo') || normBranch.includes('جغراف')) {
    return {
      subjectId: 'geography',
      totalQuestions: 46,
      totalMarks: 60,
      durationMinutes: 180,
      section1Count: 32, // 32 * 1 = 32 marks
      section2Count: 14, // 14 * 2 = 28 marks (Total: 60 marks)
      titleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة - مادة الجغرافيا السياسية',
      titleEn: 'Official Thanawya Amma Examination - Political Geography',
      descAr: '٤٦ سؤالاً (٣٢ سؤالاً بدرجة واحدة + ١٤ سؤالاً بدرجتين) بإجمالي ٦٠ درجة في ٣ ساعات كاملة بنظام البابل شيت الرسمي.',
      descEn: '46 questions (32 items @ 1 mark + 14 items @ 2 marks) totaling 60 marks over 3 hours conforming to official ministerial specifications.',
    };
  }

  if (normSubject === 'arabic' || normBranch.includes('arabic') || normBranch.includes('عرب')) {
    return {
      subjectId: 'arabic',
      totalQuestions: 55,
      totalMarks: 80,
      durationMinutes: 180,
      section1Count: 30, // 30 * 1 = 30 marks
      section2Count: 25, // 25 * 2 = 50 marks (Total: 80 marks)
      titleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة - مادة اللغة العربية',
      titleEn: 'Official Thanawya Amma Examination - Arabic Language & Literature',
      descAr: '٥٥ سؤالاً (٣٠ سؤالاً بدرجة واحدة + ٢٥ سؤالاً بدرجتين) بإجمالي ٨٠ درجة في ٣ ساعات كاملة بنظام البابل شيت الرسمي.',
      descEn: '55 questions (30 items @ 1 mark + 25 items @ 2 marks) totaling 80 marks over 3 hours conforming to official ministerial specifications.',
    };
  }

  if (normSubject === 'english' || normBranch.includes('english') || normBranch.includes('إنجليز')) {
    return {
      subjectId: 'english',
      totalQuestions: 37,
      totalMarks: 50,
      durationMinutes: 180,
      section1Count: 24, // 24 * 1 = 24 marks
      section2Count: 13, // 13 * 2 = 26 marks (Total: 50 marks)
      titleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة - مادة اللغة الأجنبية الأولى (الإنجليزية)',
      titleEn: 'Official Thanawya Amma Examination - English (First Foreign Language)',
      descAr: '٣٧ سؤالاً (٢٤ سؤالاً بدرجة واحدة + ١٣ سؤالاً بدرجتين) بإجمالي ٥٠ درجة في ٣ ساعات كاملة بنظام البابل شيت الرسمي.',
      descEn: '37 questions (24 items @ 1 mark + 13 items @ 2 marks) totaling 50 marks over 3 hours conforming to official ministerial specifications.',
    };
  }

  if (normSubject === 'french' || normBranch.includes('french') || normBranch.includes('فرنس')) {
    return {
      subjectId: 'french',
      totalQuestions: 31,
      totalMarks: 40,
      durationMinutes: 120,
      section1Count: 22, // 22 * 1 = 22 marks
      section2Count: 9,  // 9 * 2 = 18 marks (Total: 40 marks)
      titleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة - مادة اللغة الأجنبية الثانية (الفرنسية)',
      titleEn: 'Official Thanawya Amma Examination - French (Second Foreign Language)',
      descAr: '٣١ سؤالاً (٢٢ سؤالاً بدرجة واحدة + ٩ أسئلة بدرجتين) بإجمالي ٤٠ درجة في ساعتين كاملتين بنظام البابل شيت الرسمي.',
      descEn: '31 questions (22 items @ 1 mark + 9 items @ 2 marks) totaling 40 marks over 2 hours conforming to official ministerial specifications.',
    };
  }

  // 5. Default / Comprehensive All-Subjects Mock (50 Questions, 60 Marks, 3 Hours)
  return {
    subjectId: 'all',
    totalQuestions: 50,
    totalMarks: 60,
    durationMinutes: 180,
    section1Count: 40, // 40 * 1 = 40 marks
    section2Count: 10, // 10 * 2 = 20 marks (Total: 60 marks)
    titleAr: 'امتحان المحاكاة الوزاري الشامل لشهادة إتمام الدراسة الثانوية العامة',
    titleEn: 'Comprehensive Thanawya Amma Ministerial Mock Examination',
    descAr: '٥٠ سؤالاً موزعة عبر العلوم والرياضيات (٤٠ سؤالاً بدرجة واحدة + ١٠ أسئلة بدرجتين) بإجمالي ٦٠ درجة في ٣ ساعات.',
    descEn: '50 questions across sciences and math (40 items @ 1 mark + 10 items @ 2 marks) totaling 60 marks over 3 hours.',
  };
}

/**
 * Shuffle array deterministically or randomly.
 */
function defaultShuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generate official mock exam questions respecting section counts, points, and chapter diversity.
 */
export function generateOfficialMockQuestions(
  curriculum: Curriculum,
  subjectId: string = 'all',
  branchId: string = 'all',
  shuffleFn: <T>(arr: T[]) => T[] = defaultShuffle
): GeneratedQuestion[] {
  const config = getOfficialMockConfig(subjectId, branchId);

  // 1. Gather all candidate questions from curriculum
  let relevantBranches: Branch[] = getBranchesForSubject(curriculum, subjectId);

  if (branchId !== 'all') {
    const matched = relevantBranches.filter((b) => b.id === branchId);
    if (matched.length > 0) relevantBranches = matched;
  }

  // Pool all questions from chapters
  const pool: GeneratedQuestion[] = [];
  relevantBranches.forEach((branch) => {
    branch.chapters.forEach((ch) => {
      const candidateProblems: Array<{ prob: SolvedProblem; source: string; diff: DifficultyLevel }> = [];

      // 1. Chapter Databank (Easy, Medium, HOTS)
      if (ch.databank) {
        ch.databank.easy.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_easy', diff: 'easy' }));
        ch.databank.medium.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_medium', diff: 'medium' }));
        ch.databank.hots.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_hots', diff: 'hots' }));
      }

      // 2. Official Textbook Solved Examples
      if (ch.solvedExamples) {
        ch.solvedExamples.forEach((p) => {
          candidateProblems.push({ prob: p, source: 'textbook_solved', diff: p.difficulty || 'medium' });
        });
      }

      // 3. Official Textbook Unit Exercises
      if (ch.exerciseProblems) {
        ch.exerciseProblems.forEach((p) => {
          candidateProblems.push({ prob: p, source: 'textbook_exercise', diff: p.difficulty || 'medium' });
        });
      }

      // 4. Lesson Worksheets
      ch.lessons?.forEach((l) => {
        l.worksheet?.problems?.forEach((prob) => {
          candidateProblems.push({ prob, source: 'worksheet', diff: prob.difficulty || 'medium' });
        });
      });

      candidateProblems.forEach(({ prob, source, diff }) => {
        if (
          !prob.optionsEn ||
          prob.optionsEn.length !== 4 ||
          !prob.optionsAr ||
          prob.optionsAr.length !== 4 ||
          prob.correctIndex === undefined
        ) {
          return;
        }

        pool.push({
          id: `${prob.id}_${source}`,
          questionEn: prob.questionEn,
          questionAr: prob.questionAr,
          difficulty: diff,
          optionsEn: prob.optionsEn,
          optionsAr: prob.optionsAr,
          correctIndex: prob.correctIndex,
          explanationEn: prob.stepByStepSolutionEn,
          explanationAr: prob.stepByStepSolutionAr,
          chapterId: ch.id,
          chapterTitleEn: ch.titleEn,
          chapterTitleAr: ch.titleAr,
          branchTitleEn: branch.titleEn,
          branchTitleAr: branch.titleAr,
          diagramType: prob.diagramType,
        });
      });
    });
  });

  if (pool.length === 0) return [];

  // 2. Separate pools for Section 1 (1 pt: easy/medium) and Section 2 (2 pt: hots/advanced medium)
  const sec1Candidates = pool.filter((q) => q.difficulty === 'easy' || q.difficulty === 'medium');
  const sec2Candidates = pool.filter(
    (q) => q.difficulty === 'hots' || q.difficulty === 'exam_standard' || q.difficulty === 'medium'
  );

  // Group candidates by chapter for representative coverage
  const groupSec1ByChapter: Record<string, GeneratedQuestion[]> = {};
  sec1Candidates.forEach((q) => {
    if (!groupSec1ByChapter[q.chapterId]) groupSec1ByChapter[q.chapterId] = [];
    groupSec1ByChapter[q.chapterId].push(q);
  });

  const groupSec2ByChapter: Record<string, GeneratedQuestion[]> = {};
  sec2Candidates.forEach((q) => {
    if (!groupSec2ByChapter[q.chapterId]) groupSec2ByChapter[q.chapterId] = [];
    groupSec2ByChapter[q.chapterId].push(q);
  });

  const chosenIds = new Set<string>();

  // Helper round-robin drawer
  const drawQuestions = (
    targetCount: number,
    groupMap: Record<string, GeneratedQuestion[]>,
    pointsVal: number,
    tagAr: string,
    tagEn: string
  ): GeneratedQuestion[] => {
    const list: GeneratedQuestion[] = [];
    const chapterKeys = shuffleFn(Object.keys(groupMap));
    if (chapterKeys.length === 0) return [];

    let currentChapterIdx = 0;
    let attempts = 0;
    const maxAttempts = targetCount * 20;

    while (list.length < targetCount && attempts < maxAttempts) {
      attempts++;
      const chKey = chapterKeys[currentChapterIdx % chapterKeys.length];
      currentChapterIdx++;

      const chPool = groupMap[chKey];
      if (!chPool || chPool.length === 0) continue;

      // Find an available question
      const available = chPool.filter((q) => !chosenIds.has(q.id));
      if (available.length > 0) {
        const picked = shuffleFn(available)[0];
        chosenIds.add(picked.id);
        list.push({
          ...picked,
          points: pointsVal,
          sectionTagAr: tagAr,
          sectionTagEn: tagEn,
          bloomLevel: pointsVal === 2 ? 'analysis' : classifyBloomLevel(picked),
        });
      }
    }

    // Top up if still under targetCount
    if (list.length < targetCount) {
      const remainingPool = pool.filter((q) => !chosenIds.has(q.id));
      const shuffledRem = shuffleFn(remainingPool);
      for (const rem of shuffledRem) {
        if (list.length >= targetCount) break;
        chosenIds.add(rem.id);
        list.push({
          ...rem,
          points: pointsVal,
          sectionTagAr: tagAr,
          sectionTagEn: tagEn,
          bloomLevel: pointsVal === 2 ? 'analysis' : classifyBloomLevel(rem),
        });
      }
    }

    return list;
  };

  // Generate Section 1 (1 pt items)
  const sec1 = drawQuestions(
    config.section1Count,
    groupSec1ByChapter,
    1,
    'القسم الأول (درجة واحدة)',
    'Section 1 (1 Mark)'
  );

  // Generate Section 2 (2 pt items)
  const sec2 = drawQuestions(
    config.section2Count,
    groupSec2ByChapter,
    2,
    'القسم الثاني (درجتان)',
    'Section 2 (2 Marks)'
  );

  // Combine Section 1 then Section 2 in strict sequential order
  return [...sec1, ...sec2];
}

export interface OfficialScoreReport {
  totalMarks: number;
  earnedMarks: number;
  markPercentage: number;
  correctCount: number;
  totalQuestions: number;
  section1TotalMarks: number;
  section1EarnedMarks: number;
  section2TotalMarks: number;
  section2EarnedMarks: number;
  gradeLabelAr: string;
  gradeLabelEn: string;
  gradeColor: string;
  bloomDiagnostics: BloomDiagnosticsReport;
}

/**
 * Compute official exam score respecting 1-point and 2-point weightings.
 */
export function computeOfficialExamScore(
  questions: GeneratedQuestion[],
  userAnswers: Record<number, number>
): OfficialScoreReport {
  let totalMarks = 0;
  let earnedMarks = 0;
  let correctCount = 0;

  let section1TotalMarks = 0;
  let section1EarnedMarks = 0;
  let section2TotalMarks = 0;
  let section2EarnedMarks = 0;

  questions.forEach((q, idx) => {
    const pts = q.points !== undefined ? q.points : 1;
    totalMarks += pts;

    const isCorrect = userAnswers[idx] === q.correctIndex;
    if (isCorrect) {
      correctCount++;
      earnedMarks += pts;
    }

    if (pts === 1) {
      section1TotalMarks += 1;
      if (isCorrect) section1EarnedMarks += 1;
    } else {
      section2TotalMarks += pts;
      if (isCorrect) section2EarnedMarks += pts;
    }
  });

  const markPercentage = totalMarks > 0 ? Math.round((earnedMarks / totalMarks) * 100) : 0;

  let gradeLabelEn = 'Needs Practice';
  let gradeLabelAr = 'بحاجة لمزيد من التدريب والمراجعة';
  let gradeColor = 'text-amber-400 bg-amber-950/40 border-amber-500/40';

  if (markPercentage >= 92) {
    gradeLabelEn = 'Republic Elite / Outstanding (امتياز أوائل الجمهورية)';
    gradeLabelAr = 'امتياز أوائل الجمهورية والتفوق الوزاري 🏆';
    gradeColor = 'text-emerald-400 bg-emerald-950/50 border-emerald-500/50';
  } else if (markPercentage >= 80) {
    gradeLabelEn = 'Very Good / Distinction (جيد جداً مرتفع)';
    gradeLabelAr = 'كفاءة ممتازة وتفوق أكاديمي مرموق 🌟';
    gradeColor = 'text-cyan-400 bg-cyan-950/50 border-cyan-500/50';
  } else if (markPercentage >= 65) {
    gradeLabelEn = 'Good / Pass (اجتياز معيار الوزارة)';
    gradeLabelAr = 'اجتياز معيار الوزارة بنجاح 👍';
    gradeColor = 'text-indigo-400 bg-indigo-950/50 border-indigo-500/50';
  }

  const bloomDiagnostics = computeBloomDiagnostics(questions, userAnswers);

  return {
    totalMarks,
    earnedMarks,
    markPercentage,
    correctCount,
    totalQuestions: questions.length,
    section1TotalMarks,
    section1EarnedMarks,
    section2TotalMarks,
    section2EarnedMarks,
    gradeLabelAr,
    gradeLabelEn,
    gradeColor,
    bloomDiagnostics,
  };
}

export type BookletModelCode = 'A' | 'B' | 'C' | 'D';

export interface BookletModelInfo {
  code: BookletModelCode;
  nameAr: string;
  nameEn: string;
  color: string;
  badgeBg: string;
}

export function getBookletModelDetails(model: BookletModelCode = 'A'): BookletModelInfo {
  const models: Record<BookletModelCode, BookletModelInfo> = {
    A: {
      code: 'A',
      nameAr: 'النموذج (أ)',
      nameEn: 'Form (A)',
      color: '#d97706',
      badgeBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    },
    B: {
      code: 'B',
      nameAr: 'النموذج (ب)',
      nameEn: 'Form (B)',
      color: '#2563eb',
      badgeBg: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    },
    C: {
      code: 'C',
      nameAr: 'النموذج (ج)',
      nameEn: 'Form (C)',
      color: '#059669',
      badgeBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    },
    D: {
      code: 'D',
      nameAr: 'النموذج (د)',
      nameEn: 'Form (D)',
      color: '#7c3aed',
      badgeBg: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    },
  };
  return models[model] || models.A;
}
