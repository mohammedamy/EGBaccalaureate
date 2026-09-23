import type {
  TeacherCustomQuestion,
  CustomQuestionFilter,
  CustomQuestionExportPackage,
} from '../types/teacherQuestionBank';

export const TEACHER_QUESTIONS_STORAGE_KEY = 'egbac_teacher_custom_questions_v1';

// Starter questions to enrich the teacher's repository out-of-the-box
const INITIAL_STARTER_QUESTIONS: TeacherCustomQuestion[] = [
  {
    id: 'tq_seed_phys_kirchhoff',
    teacherName: 'أستاذ الفيزياء المتميز',
    subjectId: 'physics',
    branchId: 'physics_electricity',
    chapterTitleAr: 'التيار الكهربي وقانونا كيرشوف',
    chapterTitleEn: 'Kirchhoff’s Laws & DC Circuits',
    difficulty: 'hots',
    questionAr: 'في دائرة كهربائية مغلقة متعددة الحلقات، إذا كانت القوة الدافعة الكهربائية $V_{B1} = 12\\,\\text{V}$ ومقاومتها الداخلية مهملة، و$V_{B2} = 6\\,\\text{V}$، والمقاومات $R_1 = 4\\,\\Omega$ و$R_2 = 2\\,\\Omega$ و$R_3 = 6\\,\\Omega$. ما شدة التيار المار في المقاومة المشتركة $R_3$؟',
    questionEn: 'In a multi-loop circuit with $V_{B1} = 12\\,\\text{V}$, $V_{B2} = 6\\,\\text{V}$, and resistors $R_1=4\\,\\Omega, R_2=2\\,\\Omega, R_3=6\\,\\Omega$, find the current passing through $R_3$.',
    optionsAr: [
      '$1.64\\,\\text{A}$ في اتجاه العقدة العليا',
      '$2.18\\,\\text{A}$ في اتجاه العقدة السفلى',
      '$0.82\\,\\text{A}$ في اتجاه العقدة العليا',
      '$3.00\\,\\text{A}$ في اتجاه العقدة السفلى'
    ],
    optionsEn: [
      '$1.64\\,\\text{A}$ towards the upper node',
      '$2.18\\,\\text{A}$ towards the lower node',
      '$0.82\\,\\text{A}$ towards the upper node',
      '$3.00\\,\\text{A}$ towards the lower node'
    ],
    correctOptionIndex: 0,
    explanationAr: 'بتطبيق قانون كيرشوف الأول عند العقدة: $I_3 = I_1 + I_2$. ثم تطبيق كيرشوف الثاني على المسارين المغلقين وحل المعادلتين آنياً نحصل على $I_3 \\approx 1.64\\,\\text{A}$.',
    explanationEn: 'Applying KCL at the junction gives $I_3 = I_1 + I_2$. Applying KVL to both loops and solving simultaneously yields $I_3 \\approx 1.64\\,\\text{A}$.',
    teacherTipAr: 'تأكد من تنبيه الطلاب لفرض اتجاهات التيارات بدقة والانتباه لإشارات القوة الدافعة عند عبور البطارية من القطب السالب للموجب.',
    tags: ['كيرشوف', 'مسألة تفوق', 'الدوائر المعقدة', 'أوائل الجمهورية'],
    createdAt: Date.now() - 86400000 * 3,
    updatedAt: Date.now() - 86400000 * 3,
  },
  {
    id: 'tq_seed_math_calc_tangent',
    teacherName: 'أستاذ الرياضيات البحتة',
    subjectId: 'math',
    branchId: 'calculus',
    chapterTitleAr: 'تطبيقات على التفاضل والقيم العظمى والصغرى',
    chapterTitleEn: 'Applications on Differentiation & Optimization',
    difficulty: 'medium',
    questionAr: 'أوجد مساحة أكبر مستطيل يمكن رسمه داخل نصف دائرة نصف قطرها $r = 6\\,\\text{cm}$ بحيث يقع رأسان منه على القطر والرأسان الآخران على محيط نصف الدائرة.',
    questionEn: 'Find the maximum area of a rectangle inscribed in a semicircle of radius $r = 6\\,\\text{cm}$ with two vertices on the diameter.',
    optionsAr: [
      '$36\\,\\text{cm}^2$',
      '$18\\,\\text{cm}^2$',
      '$72\\,\\text{cm}^2$',
      '$24\\sqrt{2}\\,\\text{cm}^2$'
    ],
    optionsEn: [
      '$36\\,\\text{cm}^2$',
      '$18\\,\\text{cm}^2$',
      '$72\\,\\text{cm}^2$',
      '$24\\sqrt{2}\\,\\text{cm}^2$'
    ],
    correctOptionIndex: 0,
    explanationAr: 'إذا كانت نقطة على محيط نصف الدائرة هي $(x, y)$ حيث $x^2 + y^2 = 36$، فإن مساحة المستطيل $A = 2x y = 2x\\sqrt{36 - x^2}$. باشتقاق المساحة ومساواتها بالصفر نجد $x = \\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$ و$y = 3\\sqrt{2}$، وتكون المساحة العظمى $A = 2(3\\sqrt{2})(3\\sqrt{2}) = 36\\,\\text{cm}^2$.',
    explanationEn: 'Letting the top vertex be $(x, y)$ with $x^2+y^2=36$, area $A = 2xy = 2x\\sqrt{36-x^2}$. Maximizing gives $x=3\\sqrt{2}, y=3\\sqrt{2}$, thus $A_{\\max} = 36\\,\\text{cm}^2$.',
    teacherTipAr: 'الخطأ الشائع هنا هو نسيان أن طول قاعدة المستطيل يساوي $2x$ وليس $x$ فقط لأن المستطيل متماثل حول المحور الرأسي.',
    tags: ['تطبيقات التفاضل', 'مساحات عظمى', 'تفاضل وتكامل 2026'],
    createdAt: Date.now() - 86400000 * 2,
    updatedAt: Date.now() - 86400000 * 2,
  },
  {
    id: 'tq_seed_chem_electrochem',
    teacherName: 'أستاذ الكيمياء العامة',
    subjectId: 'chemistry',
    branchId: 'chemistry_electrochem',
    chapterTitleAr: 'الكيمياء الكهربية والخلايا الجلفانية',
    chapterTitleEn: 'Electrochemistry & Galvanic Cells',
    difficulty: 'easy',
    questionAr: 'خلية جلفانية يعبر عنها بالرمز الاصطلاحي: $\\text{Zn}/\\text{Zn}^{2+} (1\\,\\text{M}) \\parallel \\text{Cu}^{2+} (1\\,\\text{M})/\\text{Cu}$. إذا علمت أن جهد التأكسد القياسي للخارصين $+0.76\\,\\text{V}$ وجهد الاختزال القياسي للنحاس $+0.34\\,\\text{V}$. فإن القوة الدافعة الكهربية للخلية ($E^\\circ_{\\text{cell}}$) تساوي:',
    questionEn: 'For the galvanic cell $\\text{Zn}|\\text{Zn}^{2+} \\parallel \\text{Cu}^{2+}|\\text{Cu}$, given standard oxidation potential for Zn is $+0.76\\,\\text{V}$ and standard reduction potential for Cu is $+0.34\\,\\text{V}$, calculate $E^\\circ_{\\text{cell}}$:',
    optionsAr: [
      '$+1.10\\,\\text{V}$ والتفاعل تلقائي',
      '$+0.42\\,\\text{V}$ والتفاعل تلقائي',
      '$-1.10\\,\\text{V}$ والتفاعل غير تلقائي',
      '$+0.76\\,\\text{V}$ والتفاعل متزن'
    ],
    optionsEn: [
      '$+1.10\\,\\text{V}$ (Spontaneous)',
      '$+0.42\\,\\text{V}$ (Spontaneous)',
      '$-1.10\\,\\text{V}$ (Non-spontaneous)',
      '$+0.76\\,\\text{V}$ (Equilibrium)'
    ],
    correctOptionIndex: 0,
    explanationAr: '$E^\\circ_{\\text{cell}} = \\text{جهد تأكسد الأنود} + \\text{جهد اختزال الكاثود} = 0.76 + 0.34 = +1.10\\,\\text{V}$. بما أن القيمة موجبة، فالتفاعل تلقائي ويولد تياراً كهربائياً.',
    explanationEn: '$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{ox}}(\\text{anode}) + E^\\circ_{\\text{red}}(\\text{cathode}) = 0.76 + 0.34 = +1.10\\,\\text{V}$. Positive value indicates a spontaneous reaction.',
    teacherTipAr: 'سؤال أساسي في كل امتحان ثانوية عامة. ركز مع الطلاب على التمييز الدقيق بين جهود الأكسدة وجهود الاختزال.',
    tags: ['كيمياء كهربية', 'جهد الخلية', 'خلية دانيال'],
    createdAt: Date.now() - 86400000,
    updatedAt: Date.now() - 86400000,
  }
];

/**
 * Retrieve all teacher custom questions from local storage
 */
export function getLocalCustomQuestions(): TeacherCustomQuestion[] {
  if (typeof localStorage === 'undefined') return INITIAL_STARTER_QUESTIONS;
  try {
    const raw = localStorage.getItem(TEACHER_QUESTIONS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(TEACHER_QUESTIONS_STORAGE_KEY, JSON.stringify(INITIAL_STARTER_QUESTIONS));
      return INITIAL_STARTER_QUESTIONS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_STARTER_QUESTIONS;
  } catch (err) {
    console.warn('Failed to load custom teacher questions from local storage:', err);
    return INITIAL_STARTER_QUESTIONS;
  }
}

/**
 * Save or update a single custom question
 */
export function saveCustomQuestion(
  questionData: Omit<TeacherCustomQuestion, 'id' | 'createdAt' | 'updatedAt'> & { id?: string }
): TeacherCustomQuestion {
  const currentList = getLocalCustomQuestions();
  const now = Date.now();

  if (questionData.id) {
    const existingIndex = currentList.findIndex((q) => q.id === questionData.id);
    if (existingIndex >= 0) {
      const updatedQuestion: TeacherCustomQuestion = {
        ...currentList[existingIndex],
        ...questionData,
        id: questionData.id,
        updatedAt: now,
      };
      currentList[existingIndex] = updatedQuestion;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(TEACHER_QUESTIONS_STORAGE_KEY, JSON.stringify(currentList));
      }
      return updatedQuestion;
    }
  }

  // Create new question
  const newQuestion: TeacherCustomQuestion = {
    ...questionData,
    id: `tq_${now}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: now,
    updatedAt: now,
  };

  const updatedList = [newQuestion, ...currentList];
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(TEACHER_QUESTIONS_STORAGE_KEY, JSON.stringify(updatedList));
  }
  return newQuestion;
}

/**
 * Delete a custom question by ID
 */
export function deleteCustomQuestion(id: string): boolean {
  const currentList = getLocalCustomQuestions();
  const filtered = currentList.filter((q) => q.id !== id);
  if (filtered.length === currentList.length) return false;

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(TEACHER_QUESTIONS_STORAGE_KEY, JSON.stringify(filtered));
  }
  return true;
}

/**
 * Filter custom questions
 */
export function filterCustomQuestions(
  filter: CustomQuestionFilter,
  questions: TeacherCustomQuestion[] = getLocalCustomQuestions()
): TeacherCustomQuestion[] {
  return questions.filter((q) => {
    if (filter.subjectId && filter.subjectId !== 'all' && q.subjectId !== filter.subjectId) {
      return false;
    }
    if (filter.difficulty && filter.difficulty !== q.difficulty) {
      return false;
    }
    if (filter.tag && (!q.tags || !q.tags.includes(filter.tag))) {
      return false;
    }
    if (filter.searchQuery && filter.searchQuery.trim()) {
      const query = filter.searchQuery.trim().toLowerCase();
      const matchStem = (q.questionAr || '').toLowerCase().includes(query) || (q.questionEn || '').toLowerCase().includes(query);
      const matchChapter = (q.chapterTitleAr || '').toLowerCase().includes(query);
      const matchOptions = (q.optionsAr || []).some((opt) => opt.toLowerCase().includes(query)) ||
                           (q.optionsEn || []).some((opt) => opt.toLowerCase().includes(query));
      const matchExplanation = (q.explanationAr || '').toLowerCase().includes(query) || (q.explanationEn || '').toLowerCase().includes(query);
      const matchTag = (q.tags || []).some((t) => t.toLowerCase().includes(query));
      if (!matchStem && !matchChapter && !matchOptions && !matchExplanation && !matchTag) return false;
    }
    return true;
  });
}

/**
 * Export teacher custom questions package as JSON string
 */
export function exportCustomQuestionsJSON(teacherName: string = 'معلم المنصة'): string {
  const questions = getLocalCustomQuestions();
  const pkg: CustomQuestionExportPackage = {
    version: '1.0.0',
    exportDate: new Date().toISOString(),
    exportTimestamp: Date.now(),
    app: 'ClipSAT EGBaccalaureate',
    teacherName,
    questionCount: questions.length,
    questions,
  };
  return JSON.stringify(pkg, null, 2);
}

/**
 * Import custom questions package from JSON string
 */
export function importCustomQuestionsJSON(jsonString: string): {
  success: boolean;
  count: number;
  error?: string;
} {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || !Array.isArray(parsed.questions)) {
      return { success: false, count: 0, error: 'تنسيق الملف غير صالح. يجب أن يحتوي على مصفوفة أسئلة.' };
    }

    const currentList = getLocalCustomQuestions();
    const existingIds = new Set(currentList.map((q) => q.id));

    let importedCount = 0;
    const mergedList = [...currentList];

    for (const q of parsed.questions) {
      if (q && q.questionAr && Array.isArray(q.optionsAr) && q.optionsAr.length === 4) {
        if (!existingIds.has(q.id)) {
          mergedList.push({
            ...q,
            id: q.id || `tq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            createdAt: q.createdAt || Date.now(),
            updatedAt: Date.now(),
          });
          existingIds.add(q.id);
          importedCount++;
        }
      }
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(TEACHER_QUESTIONS_STORAGE_KEY, JSON.stringify(mergedList));
    }

    return { success: true, count: importedCount };
  } catch (err) {
    return {
      success: false,
      count: 0,
      error: err instanceof Error ? err.message : 'فشل في قراءة ملف الأسئلة.',
    };
  }
}
