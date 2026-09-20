import type { Curriculum, DifficultyLevel, SolvedProblem } from '../types/curriculum';
import type { GeneratedQuestion } from './mistakeNotebookService';

export const STUDENT_ANALYTICS_STORAGE_KEY = 'egbac_student_analytics_v1';

export type SubjectCategory =
  | 'pure_math'
  | 'applied_math'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'geology'
  | 'history'
  | 'geography'
  | 'philosophy'
  | 'psychology'
  | 'economics_stat'
  | 'arabic'
  | 'languages'
  | 'cs_informatics'
  | 'earth_space'
  | 'civics'
  | 'islamic_studies'
  | 'christian_studies'
  | 'business_entrepreneurship'
  | 'fine_arts_architecture'
  | 'music_theory'
  | 'agricultural_sciences'
  | 'industrial_engineering'
  | 'commercial_sciences'
  | 'tourism_hospitality'
  | 'renewable_energy'
  | 'stem_capstone'
  | 'robotics_mechatronics'
  | 'electronics_iot'
  | 'ai_data_science'
  | 'biotechnology'
  | 'nanotechnology';

export interface ChapterPerformanceRecord {
  chapterId: string;
  chapterTitleEn: string;
  chapterTitleAr: string;
  branchTitleEn: string;
  branchTitleAr: string;
  subjectCategory: SubjectCategory;
  attempted: number;
  correct: number;
  timeSpentSec: number;
  lastAttemptTimestamp: number;
}

export interface CognitiveBreakdown {
  easy: { attempted: number; correct: number };
  medium: { attempted: number; correct: number };
  hots: { attempted: number; correct: number };
}

export interface StudentAnalyticsState {
  totalAttempted: number;
  totalCorrect: number;
  totalTimeSpentSec: number;
  quizzesCompleted: number;
  lastActiveTimestamp?: number;
  lastUpdated: number;
  chapters: Record<string, ChapterPerformanceRecord>;
  cognitive: CognitiveBreakdown;
}

export type RadarTrackMode = 'stem5' | 'stem6' | 'humanities' | 'all8' | 'all9' | 'all10' | 'all11' | 'all12' | 'all13' | 'all14' | 'all15' | 'all16' | 'all17' | 'all18' | 'all19' | 'all20' | 'all21' | 'all22' | 'all23' | 'all24' | 'all25' | 'all26' | 'all27' | 'all28' | 'all29' | 'all30';

export interface MasteryRadarPoint {
  dimensionKey: SubjectCategory;
  labelAr: string;
  labelEn: string;
  scorePct: number; // 0 - 100
  attempted: number;
  color: string;
}

/**
 * Categorize a branch title or ID into a SubjectCategory
 */
export function categorizeBranch(branchTitleOrId: string): SubjectCategory {
  const text = branchTitleOrId.toLowerCase();

  if (
    text.includes('nanotechnology') ||
    text.includes('nanotech') ||
    text.includes('نانوتكنولوجي') ||
    text.includes('النانوتكنولوجي') ||
    text.includes('علوم المواد') ||
    text.includes('مواد متقدمة') ||
    text.includes('المواد المتقدمة') ||
    text.includes('quantum materials') ||
    text.includes('نانو') ||
    text.includes('nanoscale')
  ) {
    return 'nanotechnology';
  }

  if (
    text.includes('biotechnology') ||
    text.includes('biotech') ||
    text.includes('تكنولوجيا حيوية') ||
    text.includes('التكنولوجيا الحيوية') ||
    text.includes('تكنولوجيا_حيوية') ||
    text.includes('هندسة وراثية') ||
    text.includes('الهندسة الوراثية') ||
    text.includes('الوراثة التطبيقية') ||
    text.includes('وراثة تطبيقية') ||
    text.includes('genetic engineering') ||
    text.includes('bioinformatics') ||
    text.includes('معلوماتية حيوية') ||
    text.includes('المعلوماتية الحيوية') ||
    text.includes('crispr')
  ) {
    return 'biotechnology';
  }

  if (
    text.includes('cs_informatics') ||
    text.includes('thanaweya_cs_informatics') ||
    text.includes('egbac_cs_informatics') ||
    text.includes('computer science') ||
    text.includes('حاسب') ||
    (text.includes('informatic') && !text.includes('bioinformatics') && !text.includes('معلوماتية حيوية'))
  ) {
    return 'cs_informatics';
  }

  if (
    text.includes('ai_data_science') ||
    text.includes('artificial intelligence') ||
    text.includes('data science') ||
    text.includes('machine learning') ||
    text.includes('deep learning') ||
    text.includes('الذكاء الاصطناعي') ||
    text.includes('ذكاء اصطناعي') ||
    text.includes('علم البيانات') ||
    text.includes('علوم البيانات') ||
    text.includes('ذكاء') ||
    /\bai\b/.test(text) ||
    text.includes('ai-data-science') ||
    text.includes('ai data science')
  ) {
    return 'ai_data_science';
  }

  if (
    text.includes('electronics') ||
    text.includes('vlsi') ||
    text.includes('إلكترون') ||
    text.includes('الكترون') ||
    text.includes('دوائر متكاملة') ||
    text.includes('iot') ||
    text.includes('انترنت الأشياء') ||
    text.includes('إنترنت الأشياء')
  ) {
    return 'electronics_iot';
  }

  if (
    text.includes('robot') ||
    text.includes('mechatronic') ||
    text.includes('روبوت') ||
    text.includes('ميكاترونك') ||
    text.includes('ميكاترونيك') ||
    text.includes('أنظمة مدمجة') ||
    text.includes('انظمة مدمجة') ||
    text.includes('embedded') ||
    text.includes('robotics')
  ) {
    return 'robotics_mechatronics';
  }

  if (
    text.includes('capstone') ||
    text.includes('مشروع تخرج') ||
    text.includes('مشروع التخرج') ||
    text.includes('ابتكار stem') ||
    text.includes('stem_capstone')
  ) {
    return 'stem_capstone';
  }

  if (
    text.includes('فنون') ||
    text.includes('عمارة') ||
    text.includes('تصميم') ||
    text.includes('منظور') ||
    text.includes('fine_arts') ||
    text.includes('architecture') ||
    text.includes('visual culture') ||
    text.includes('perspective') ||
    text.includes('tessellation') ||
    text.includes('تراث معماري')
  ) {
    return 'fine_arts_architecture';
  }

  if (
    text.includes('موسيق') ||
    text.includes('صولفيج') ||
    text.includes('نغم') ||
    text.includes('إيقاع') ||
    text.includes('ايقاع') ||
    text.includes('هارموني') ||
    text.includes('بوليفون') ||
    text.includes('مقامات') ||
    text.includes('مقام') ||
    text.includes('سيكاه') ||
    text.includes('بياتي') ||
    text.includes('راست') ||
    text.includes('music') ||
    text.includes('solfege') ||
    text.includes('maqam') ||
    text.includes('rhythm') ||
    text.includes('counterpoint')
  ) {
    return 'music_theory';
  }

  if (
    text.includes('زراع') ||
    text.includes('أراض') ||
    text.includes('اراض') ||
    text.includes('تربة') ||
    text.includes('محاصيل') ||
    text.includes('توشكى') ||
    text.includes('مستقبل مصر') ||
    text.includes('العوينات') ||
    text.includes('بحر البقر') ||
    text.includes('agri') ||
    text.includes('soil') ||
    text.includes('crop') ||
    text.includes('irrigation') ||
    text.includes('fertigation')
  ) {
    return 'agricultural_sciences';
  }

  if (
    text.includes('صناع') ||
    text.includes('industrial') ||
    text.includes('هندسة تطبيقية') ||
    text.includes('applied engineering') ||
    text.includes('تكنولوجيا تطبيقية') ||
    text.includes('ميتالورج') ||
    text.includes('metallurgy') ||
    text.includes('خراطة') ||
    text.includes('تفريز') ||
    text.includes('سباكة') ||
    text.includes('لحام') ||
    text.includes('machining') ||
    text.includes('هيدروليك') ||
    text.includes('نيوماتيك') ||
    text.includes('plc') ||
    text.includes('cnc') ||
    text.includes('fluid_power') ||
    text.includes('quality_spc')
  ) {
    return 'industrial_engineering';
  }

  if (
    text.includes('تجاري') ||
    text.includes('commercial') ||
    text.includes('محاسبة') ||
    text.includes('accounting') ||
    text.includes('مصرفي') ||
    text.includes('banking') ||
    text.includes('فائدة مركبة') ||
    text.includes('compound interest') ||
    text.includes('ضرائب') ||
    text.includes('tax') ||
    text.includes('موازنة رأسمالية') ||
    text.includes('capital budgeting') ||
    text.includes('fintech') ||
    text.includes('تكنولوجيا مالية') ||
    text.includes('استثمار ومحافظ')
  ) {
    return 'commercial_sciences';
  }

  if (
    text.includes('سياح') ||
    text.includes('ضياف') ||
    text.includes('فندق') ||
    text.includes('تراث') ||
    text.includes('tourism') ||
    text.includes('hospitality') ||
    text.includes('heritage') ||
    text.includes('hotel') ||
    text.includes('revpar') ||
    text.includes('unesco') ||
    text.includes('متاحف') ||
    text.includes('أثرية') ||
    text.includes('طيران')
  ) {
    return 'tourism_hospitality';
  }

  if (
    text.includes('طاقة متجددة') ||
    text.includes('استدامة') ||
    text.includes('شمسية') ||
    text.includes('رياح') ||
    text.includes('هيدروجين') ||
    text.includes('renewable') ||
    text.includes('sustainability') ||
    text.includes('solar') ||
    text.includes('wind') ||
    text.includes('hydrogen') ||
    text.includes('بنبان') ||
    text.includes('benban') ||
    text.includes('cbam') ||
    text.includes('بصمة كربونية')
  ) {
    return 'renewable_energy';
  }

  if (
    text.includes('إدارة أعمال') ||
    text.includes('ادارة اعمال') ||
    text.includes('ريادة') ||
    text.includes('إدارة') ||
    text.includes('ادارة') ||
    text.includes('business') ||
    text.includes('entrepreneur') ||
    text.includes('تسويق') ||
    text.includes('تمويل') ||
    text.includes('سلاسل إمداد') ||
    text.includes('سلاسل امداد') ||
    text.includes('corporate') ||
    text.includes('startup')
  ) {
    return 'business_entrepreneurship';
  }

  if (
    text.includes('تربية وطنية') ||
    text.includes('وطني') ||
    text.includes('دستور') ||
    text.includes('مواطن') ||
    text.includes('أحزاب') ||
    text.includes('احزاب') ||
    text.includes('انتخاب') ||
    text.includes('civic') ||
    text.includes('constitution') ||
    text.includes('governance')
  ) {
    return 'civics';
  }

  if (
    text.includes('مسيحي') ||
    text.includes('قبط') ||
    text.includes('أسرار كنسية') ||
    text.includes('اسرار كنسية') ||
    text.includes('كتاب مقدس') ||
    text.includes('رهبنة') ||
    text.includes('christian') ||
    text.includes('coptic')
  ) {
    return 'christian_studies';
  }

  if (
    text.includes('تربية دينية') ||
    text.includes('دين إسلامي') ||
    text.includes('ديني') ||
    text.includes('دينية') ||
    text.includes(' دين ') ||
    text.includes('religion') ||
    text.includes('اسلام') ||
    text.includes('إسلام') ||
    text.includes('تجويد') ||
    text.includes('سيرة') ||
    text.includes('مقاصد') ||
    text.includes('islamic')
  ) {
    return 'islamic_studies';
  }

  if (
    text.includes('فلك') ||
    text.includes('فضاء') ||
    text.includes('كواكب') ||
    text.includes('earth_space') ||
    text.includes('astronomy') ||
    text.includes('planetary') ||
    text.includes('orbit') ||
    text.includes('كبلر')
  ) {
    return 'earth_space';
  }

  if (
    text.includes('اقتصاد') ||
    text.includes('إحصاء') ||
    text.includes('احصاء') ||
    text.includes('econ') ||
    text.includes('statistic') ||
    text.includes('economics_stat') ||
    text.includes('pearson') ||
    text.includes('spearman') ||
    text.includes('توزيع طبيعي') ||
    text.includes('normal distribution') ||
    text.includes('z-score') ||
    text.includes('كينز') ||
    text.includes('keynes') ||
    text.includes('مضاعف الاستثمار') ||
    text.includes('توازن السوق') ||
    text.includes('مرونة الطلب')
  ) {
    return 'economics_stat';
  }

  if (
    text.includes('حاسب') ||
    text.includes('computer') ||
    text.includes('informatic') ||
    text.includes('خوارزم') ||
    text.includes('algorithm') ||
    text.includes('بايثون') ||
    text.includes('python') ||
    text.includes('ذكاء') ||
    text.includes('neural') ||
    text.includes('تشفير') ||
    text.includes('crypto') ||
    text.includes('شبك') ||
    text.includes('network') ||
    text.includes('قواعد بيانات') ||
    text.includes('sql')
  ) {
    return 'cs_informatics';
  }

  if (text.includes('فلسف') || text.includes('philosoph') || text.includes('منطق') || text.includes('logic') || text.includes('بيوتيق')) {
    return 'philosophy';
  }
  if (text.includes('نفس') || text.includes('psycholog') || text.includes('اجتماع') || text.includes('sociolog') || text.includes('بافلوف') || text.includes('ليفين') || text.includes('إبنجهاوس') || text.includes('psych')) {
    return 'psychology';
  }
  if (text.includes('جيولوج') || text.includes('geolog') || text.includes('بلور') || text.includes('موهس') || text.includes('تكتوني') || text.includes('بيئة') || text.includes('environment')) {
    return 'geology';
  }
  if (text.includes('جغراف') || text.includes('geograph') || text.includes('جيوبول') || text.includes('geopolitic')) {
    return 'geography';
  }
  if (text.includes('تاريخ') || text.includes('history')) {
    return 'history';
  }
  if (text.includes('عربي') || text.includes('arabic') || text.includes('نحو') || text.includes('بلاغة')) {
    return 'arabic';
  }
  if (
    text.includes('english') ||
    text.includes('إنجليز') ||
    text.includes('french') ||
    text.includes('فرنس') ||
    text.includes('german') ||
    text.includes('ألمان') ||
    text.includes('deutsch') ||
    text.includes('hallo') ||
    text.includes('italian') ||
    text.includes('italiano') ||
    text.includes('إيطال') ||
    text.includes('ايطال') ||
    text.includes('ciao') ||
    text.includes('spanish') ||
    text.includes('español') ||
    text.includes('espanol') ||
    text.includes('إسبان') ||
    text.includes('اسبان') ||
    text.includes('hola') ||
    text.includes('chinese') ||
    text.includes('mandarin') ||
    text.includes('صين') ||
    text.includes('pinyin') ||
    text.includes('بينيين') ||
    text.includes('hanzi') ||
    text.includes('لغة أجنبية') ||
    text.includes('language')
  ) {
    return 'languages';
  }
  if (text.includes('فيزياء') || text.includes('physic') || text.includes('كهربية') || text.includes('كولدج')) {
    return 'physics';
  }
  if (text.includes('كيمياء') || text.includes('chem') || text.includes('عضوية') || text.includes('انتقالية')) {
    return 'chemistry';
  }
  if (text.includes('أحياء') || text.includes('bio') || text.includes('مناعة') || text.includes('dna') || text.includes('تنسيق')) {
    return 'biology';
  }
  if (text.includes('استاتيكا') || text.includes('ديناميكا') || text.includes('static') || text.includes('dynamic') || text.includes('mechanic') || text.includes('applied_math')) {
    return 'applied_math';
  }
  // Default to pure math for algebra, calculus, geometry, analysis
  return 'pure_math';
}

export const inferSubjectCategory = categorizeBranch;

/**
 * Classifies curriculum items into subject categories based on multiple metadata fields.
 */
export function classifySubjectCategory(
  branchTitleAr?: string,
  branchTitleEn?: string,
  chapterTitleAr?: string,
  branchId?: string
): SubjectCategory {
  const combined = [branchTitleAr || '', branchTitleEn || '', chapterTitleAr || '', branchId || ''].join(' ').toLowerCase();
  return categorizeBranch(combined);
}

const DEFAULT_ANALYTICS_STATE: StudentAnalyticsState = {
  totalAttempted: 0,
  totalCorrect: 0,
  totalTimeSpentSec: 0,
  quizzesCompleted: 0,
  chapters: {},
  cognitive: {
    easy: { attempted: 0, correct: 0 },
    medium: { attempted: 0, correct: 0 },
    hots: { attempted: 0, correct: 0 },
  },
  lastUpdated: Date.now(),
};

/**
 * Retrieve current analytics state from localStorage.
 */
export function getStudentAnalytics(): StudentAnalyticsState {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { ...DEFAULT_ANALYTICS_STATE };
  }

  try {
    const raw = localStorage.getItem(STUDENT_ANALYTICS_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_ANALYTICS_STATE };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return {
        ...DEFAULT_ANALYTICS_STATE,
        ...parsed,
        chapters: parsed.chapters || {},
        cognitive: {
          easy: parsed.cognitive?.easy || { attempted: 0, correct: 0 },
          medium: parsed.cognitive?.medium || { attempted: 0, correct: 0 },
          hots: parsed.cognitive?.hots || { attempted: 0, correct: 0 },
        },
      };
    }
    return { ...DEFAULT_ANALYTICS_STATE };
  } catch (err) {
    console.error('Failed to load student analytics from localStorage:', err);
    return { ...DEFAULT_ANALYTICS_STATE };
  }
}

/**
 * Save analytics state to localStorage.
 */
function saveStudentAnalytics(state: StudentAnalyticsState): void {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    localStorage.setItem(STUDENT_ANALYTICS_STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save student analytics to localStorage:', err);
  }
}

/**
 * Record a completed quiz attempt into analytics.
 */
export function recordQuizAttempt(
  questions: GeneratedQuestion[],
  userAnswers: Record<string, number> | Record<number, number>,
  timeSpentSec: number = 0
): StudentAnalyticsState {
  const state = getStudentAnalytics();
  const now = Date.now();

  let quizAttempted = 0;
  let quizCorrect = 0;

  const timePerQuestion = questions.length > 0 ? Math.round(timeSpentSec / questions.length) : 0;

  questions.forEach((q, qIndex) => {
    const userChoice =
      (userAnswers as any)[q.id] !== undefined
        ? (userAnswers as any)[q.id]
        : (userAnswers as any)[qIndex];

    if (userChoice !== undefined) {
      quizAttempted += 1;
      const isCorrect = userChoice === q.correctIndex;
      if (isCorrect) quizCorrect += 1;

      // Update chapter record
      const chId = q.chapterId || 'general_chapter';
      const category = classifySubjectCategory(q.branchTitleAr, q.branchTitleEn, q.chapterTitleAr, chId);

      if (!state.chapters[chId]) {
        state.chapters[chId] = {
          chapterId: chId,
          chapterTitleEn: q.chapterTitleEn || 'Chapter',
          chapterTitleAr: q.chapterTitleAr || 'الفصل',
          branchTitleEn: q.branchTitleEn || 'Branch',
          branchTitleAr: q.branchTitleAr || 'الفرع',
          subjectCategory: category,
          attempted: 0,
          correct: 0,
          timeSpentSec: 0,
          lastAttemptTimestamp: now,
        };
      }

      state.chapters[chId].attempted += 1;
      if (isCorrect) state.chapters[chId].correct += 1;
      state.chapters[chId].timeSpentSec += timePerQuestion;
      state.chapters[chId].lastAttemptTimestamp = now;

      // Update cognitive distribution
      const diff = q.difficulty === 'hots' ? 'hots' : q.difficulty === 'easy' ? 'easy' : 'medium';
      state.cognitive[diff].attempted += 1;
      if (isCorrect) state.cognitive[diff].correct += 1;
    }
  });

  state.totalAttempted += quizAttempted;
  state.totalCorrect += quizCorrect;
  state.totalTimeSpentSec += timeSpentSec;
  if (quizAttempted > 0) {
    state.quizzesCompleted += 1;
  }
  state.lastUpdated = now;

  saveStudentAnalytics(state);
  return state;
}

/**
 * Calculate comprehensive readiness index (0–100%).
 * Weights overall accuracy (50%), question practice volume factor (30%), and cognitive HOTS mastery (20%).
 */
export function getReadinessScore(state?: StudentAnalyticsState): number {
  const data = state || getStudentAnalytics();
  if (data.totalAttempted === 0) return 0;

  // 1. Accuracy Component (0 - 50 pts)
  const accuracyPct = (data.totalCorrect / data.totalAttempted);
  const accuracyScore = accuracyPct * 50;

  // 2. Practice Volume Factor (0 - 30 pts): benchmark target of 100 questions for full volume points
  const volumeScore = Math.min(30, (data.totalAttempted / 100) * 30);

  // 3. HOTS Mastery Factor (0 - 20 pts)
  const hotsTotal = data.cognitive.hots.attempted;
  const hotsCorrect = data.cognitive.hots.correct;
  const hotsPct = hotsTotal > 0 ? hotsCorrect / hotsTotal : accuracyPct * 0.7;
  const hotsScore = hotsPct * 20;

  const total = Math.round(accuracyScore + volumeScore + hotsScore);
  return Math.min(100, Math.max(0, total));
}

/**
 * Calculate Mastery Radar data for SVG polygon visualization.
 * Defaults to 'stem5' for 100% backward compatibility with existing tests.
 */
export function getMasteryRadarData(
  state?: StudentAnalyticsState,
  mode: RadarTrackMode = 'stem5'
): MasteryRadarPoint[] {
  const data = state || getStudentAnalytics();

  const stemDimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'pure_math', ar: 'الرياضيات البحتة', en: 'Pure Math', color: '#6366F1' },
    { key: 'applied_math', ar: 'الرياضيات التطبيقية', en: 'Applied Math', color: '#3B82F6' },
    { key: 'physics', ar: 'الفيزياء', en: 'Physics', color: '#06B6D4' },
    { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry', color: '#10B981' },
    { key: 'biology', ar: 'الأحياء', en: 'Biology', color: '#F43F5E' },
  ];

  const humanitiesDimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'philosophy', ar: 'الفلسفة والمنطق', en: 'Philosophy & Logic', color: '#A855F7' },
    { key: 'psychology', ar: 'علم النفس والاجتماع', en: 'Psychology & Sociology', color: '#EC4899' },
    { key: 'history', ar: 'تاريخ مصر', en: 'Egyptian History', color: '#F59E0B' },
    { key: 'geography', ar: 'الجغرافيا السياسية', en: 'Political Geography', color: '#14B8A6' },
    { key: 'arabic', ar: 'اللغة العربية', en: 'Arabic Language', color: '#10B981' },
    { key: 'languages', ar: 'اللغات الأجنبية', en: 'Foreign Languages', color: '#3B82F6' },
    { key: 'applied_math', ar: 'الإحصاء التطبيقي', en: 'Applied Statistics', color: '#8B5CF6' },
  ];

  const all8Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'pure_math', ar: 'الرياضيات البحتة', en: 'Pure Math', color: '#6366F1' },
    { key: 'applied_math', ar: 'الرياضيات التطبيقية', en: 'Applied Math', color: '#3B82F6' },
    { key: 'physics', ar: 'الفيزياء', en: 'Physics', color: '#06B6D4' },
    { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry', color: '#10B981' },
    { key: 'biology', ar: 'الأحياء', en: 'Biology', color: '#F43F5E' },
    { key: 'history', ar: 'تاريخ مصر', en: 'History', color: '#F59E0B' },
    { key: 'arabic', ar: 'اللغة العربية', en: 'Arabic', color: '#059669' },
    { key: 'languages', ar: 'اللغات الأجنبية', en: 'Languages', color: '#8B5CF6' },
  ];

  const stem6Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'pure_math', ar: 'الرياضيات البحتة', en: 'Pure Math', color: '#6366F1' },
    { key: 'applied_math', ar: 'الرياضيات التطبيقية', en: 'Applied Math', color: '#3B82F6' },
    { key: 'physics', ar: 'الفيزياء', en: 'Physics', color: '#06B6D4' },
    { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry', color: '#10B981' },
    { key: 'biology', ar: 'الأحياء', en: 'Biology', color: '#F43F5E' },
    { key: 'geology', ar: 'الجيولوجيا والبيئة', en: 'Geology & Environment', color: '#D97706' },
  ];

  const all9Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'pure_math', ar: 'الرياضيات البحتة', en: 'Pure Math', color: '#6366F1' },
    { key: 'applied_math', ar: 'الرياضيات التطبيقية', en: 'Applied Math', color: '#3B82F6' },
    { key: 'physics', ar: 'الفيزياء', en: 'Physics', color: '#06B6D4' },
    { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry', color: '#10B981' },
    { key: 'biology', ar: 'الأحياء', en: 'Biology', color: '#F43F5E' },
    { key: 'history', ar: 'تاريخ مصر', en: 'History', color: '#F59E0B' },
    { key: 'geography', ar: 'الجغرافيا السياسية', en: 'Geography', color: '#14B8A6' },
    { key: 'arabic', ar: 'اللغة العربية', en: 'Arabic', color: '#059669' },
    { key: 'languages', ar: 'اللغات الأجنبية', en: 'Languages', color: '#8B5CF6' },
  ];

  const all10Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'pure_math', ar: 'الرياضيات البحتة', en: 'Pure Math', color: '#6366F1' },
    { key: 'applied_math', ar: 'الرياضيات التطبيقية', en: 'Applied Math', color: '#3B82F6' },
    { key: 'physics', ar: 'الفيزياء', en: 'Physics', color: '#06B6D4' },
    { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry', color: '#10B981' },
    { key: 'biology', ar: 'الأحياء', en: 'Biology', color: '#F43F5E' },
    { key: 'geology', ar: 'الجيولوجيا والبيئة', en: 'Geology & Environment', color: '#D97706' },
    { key: 'history', ar: 'تاريخ مصر', en: 'History', color: '#F59E0B' },
    { key: 'geography', ar: 'الجغرافيا السياسية', en: 'Geography', color: '#14B8A6' },
    { key: 'arabic', ar: 'اللغة العربية', en: 'Arabic', color: '#059669' },
    { key: 'languages', ar: 'اللغات الأجنبية', en: 'Languages', color: '#8B5CF6' },
  ];

  const all11Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'pure_math', ar: 'الرياضيات البحتة', en: 'Pure Math', color: '#6366F1' },
    { key: 'applied_math', ar: 'الرياضيات التطبيقية', en: 'Applied Math', color: '#3B82F6' },
    { key: 'physics', ar: 'الفيزياء', en: 'Physics', color: '#06B6D4' },
    { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry', color: '#10B981' },
    { key: 'biology', ar: 'الأحياء', en: 'Biology', color: '#F43F5E' },
    { key: 'geology', ar: 'الجيولوجيا والبيئة', en: 'Geology & Environment', color: '#D97706' },
    { key: 'history', ar: 'تاريخ مصر', en: 'History', color: '#F59E0B' },
    { key: 'geography', ar: 'الجغرافيا السياسية', en: 'Geography', color: '#14B8A6' },
    { key: 'philosophy', ar: 'الفلسفة والمنطق', en: 'Philosophy & Logic', color: '#A855F7' },
    { key: 'arabic', ar: 'اللغة العربية', en: 'Arabic', color: '#059669' },
    { key: 'languages', ar: 'اللغات الأجنبية', en: 'Languages', color: '#8B5CF6' },
  ];

  const all12Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'pure_math', ar: 'الرياضيات البحتة', en: 'Pure Math', color: '#6366F1' },
    { key: 'applied_math', ar: 'الرياضيات التطبيقية', en: 'Applied Math', color: '#3B82F6' },
    { key: 'physics', ar: 'الفيزياء', en: 'Physics', color: '#06B6D4' },
    { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry', color: '#10B981' },
    { key: 'biology', ar: 'الأحياء', en: 'Biology', color: '#F43F5E' },
    { key: 'geology', ar: 'الجيولوجيا والبيئة', en: 'Geology & Environment', color: '#D97706' },
    { key: 'history', ar: 'تاريخ مصر', en: 'History', color: '#F59E0B' },
    { key: 'geography', ar: 'الجغرافيا السياسية', en: 'Geography', color: '#14B8A6' },
    { key: 'philosophy', ar: 'الفلسفة والمنطق', en: 'Philosophy & Logic', color: '#A855F7' },
    { key: 'psychology', ar: 'علم النفس والاجتماع', en: 'Psychology & Sociology', color: '#EC4899' },
    { key: 'arabic', ar: 'اللغة العربية', en: 'Arabic', color: '#059669' },
    { key: 'languages', ar: 'اللغات الأجنبية', en: 'Languages', color: '#8B5CF6' },
  ];

  const all13Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all12Dimensions,
    { key: 'economics_stat', ar: 'الاقتصاد والإحصاء', en: 'Economics & Statistics', color: '#F59E0B' },
  ];

  const all14Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all13Dimensions,
    { key: 'cs_informatics', ar: 'الحاسب والمعلوماتية', en: 'CS & Informatics', color: '#6366F1' },
  ];

  const all15Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all14Dimensions,
    { key: 'earth_space', ar: 'علوم الأرض والفلك', en: 'Earth & Space', color: '#4F46E5' },
  ];

  const all16Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all15Dimensions,
    { key: 'civics', ar: 'التربية الوطنية والدستور', en: 'National Civics & Constitution', color: '#059669' },
  ];

  const all17Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all16Dimensions,
    { key: 'business_entrepreneurship', ar: 'إدارة الأعمال وريادة الأعمال', en: 'Business & Entrepreneurship', color: '#4338CA' },
  ];

  const all18Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all17Dimensions,
    { key: 'fine_arts_architecture', ar: 'الفنون والتصميم المعماري', en: 'Fine Arts & Architecture', color: '#E11D48' },
  ];

  const all19Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all18Dimensions,
    { key: 'music_theory', ar: 'التربية الموسيقية والنظريات', en: 'Music Theory & Musicology', color: '#D97706' },
  ];

  const all20Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all19Dimensions,
    { key: 'agricultural_sciences', ar: 'العلوم والتكنولوجيا الزراعية', en: 'Agricultural Sciences & Agrotechnology', color: '#059669' },
  ];

  const all21Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all20Dimensions,
    { key: 'industrial_engineering', ar: 'التربية والتكنولوجيا الصناعية', en: 'Industrial Technology & Engineering', color: '#F59E0B' },
  ];

  const all22Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all21Dimensions,
    { key: 'commercial_sciences', ar: 'العلوم التجارية والمصرفية', en: 'Commercial Sciences & Banking', color: '#14B8A6' },
  ];

  const all23Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all22Dimensions,
    { key: 'tourism_hospitality', ar: 'السياحة والضيافة والتراث', en: 'Tourism, Hospitality & Heritage', color: '#D97706' },
  ];

  const all24Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all23Dimensions,
    { key: 'renewable_energy', ar: 'الطاقة المتجددة والاستدامة', en: 'Renewable Energy & Sustainability', color: '#059669' },
  ];

  const all25Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all24Dimensions,
    { key: 'stem_capstone', ar: 'مشروع كابستون والتحديات الكبرى', en: 'STEM Capstone & Innovation', color: '#0284C7' },
  ];

  const all26Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all25Dimensions,
    { key: 'robotics_mechatronics', ar: 'الروبوتات والميكاترونكس والأنظمة المدمجة', en: 'Robotics & Mechatronics', color: '#6366F1' },
  ];

  const all27Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all26Dimensions,
    { key: 'electronics_iot', ar: 'الإلكترونيات والدوائر المتكاملة وإنترنت الأشياء', en: 'Electronics & IoT', color: '#06B6D4' },
  ];

  const all28Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all27Dimensions,
    { key: 'ai_data_science', ar: 'الذكاء الاصطناعي وعلم البيانات', en: 'AI & Data Science', color: '#8B5CF6' },
  ];

  const all29Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all28Dimensions,
    { key: 'biotechnology', ar: 'التكنولوجيا الحيوية والهندسة الوراثية', en: 'Biotechnology & Genetics', color: '#10B981' },
  ];

  const all30Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    ...all29Dimensions,
    { key: 'nanotechnology', ar: 'النانوتكنولوجي وعلوم المواد المتقدمة', en: 'Nanotechnology & Materials', color: '#0D9488' },
  ];

  const dimensions =
    mode === 'humanities'
      ? humanitiesDimensions
      : mode === 'all30'
      ? all30Dimensions
      : mode === 'all29'
      ? all29Dimensions
      : mode === 'all28'
      ? all28Dimensions
      : mode === 'all27'
      ? all27Dimensions
      : mode === 'all26'
      ? all26Dimensions
      : mode === 'all25'
      ? all25Dimensions
      : mode === 'all24'
      ? all24Dimensions
      : mode === 'all23'
      ? all23Dimensions
      : mode === 'all22'
      ? all22Dimensions
      : mode === 'all21'
      ? all21Dimensions
      : mode === 'all20'
      ? all20Dimensions
      : mode === 'all19'
      ? all19Dimensions
      : mode === 'all18'
      ? all18Dimensions
      : mode === 'all17'
      ? all17Dimensions
      : mode === 'all16'
      ? all16Dimensions
      : mode === 'all15'
      ? all15Dimensions
      : mode === 'all14'
      ? all14Dimensions
      : mode === 'all13'
      ? all13Dimensions
      : mode === 'all12'
      ? all12Dimensions
      : mode === 'all11'
      ? all11Dimensions
      : mode === 'all10'
      ? all10Dimensions
      : mode === 'all9'
      ? all9Dimensions
      : mode === 'all8'
      ? all8Dimensions
      : mode === 'stem6'
      ? stem6Dimensions
      : stemDimensions;

  return dimensions.map((dim) => {
    let attempted = 0;
    let correct = 0;

    Object.values(data?.chapters || {}).forEach((ch) => {
      if (ch.subjectCategory === dim.key) {
        attempted += ch.attempted;
        correct += ch.correct;
      }
    });

    // If zero attempts in this subject yet, default to baseline or 0
    const scorePct = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    return {
      dimensionKey: dim.key,
      labelAr: dim.ar,
      labelEn: dim.en,
      scorePct,
      attempted,
      color: dim.color,
    };
  });
}

export interface PredictiveScoreReport {
  predictedTotalMarks: number; // e.g. 385.5 out of 410
  predictedPercentage: number; // e.g. 94.0%
  confidenceLevel: 'high' | 'moderate' | 'preliminary';
  universityTrackTierAr: string;
  universityTrackTierEn: string;
  targetFacultyRecommendationsAr: string[];
  targetFacultyRecommendationsEn: string[];
}

/**
 * Predicts total Thanawya Amma score out of 410 marks based on accuracy, HOTS performance, and practice volume.
 */
export function getPredictiveScore(state?: StudentAnalyticsState): PredictiveScoreReport {
  const data = state || getStudentAnalytics();
  const totalAttempted = data.totalAttempted;

  if (totalAttempted === 0) {
    return {
      predictedTotalMarks: 0,
      predictedPercentage: 0,
      confidenceLevel: 'preliminary',
      universityTrackTierAr: 'لم تبدأ الاختبارات بعد - يرجى حل أسئلة لبدء التحليل التنبؤي الذكي',
      universityTrackTierEn: 'No attempts yet - complete practice questions to initialize AI predictions',
      targetFacultyRecommendationsAr: ['كليات القمة بانتظار بدء تدريبك الأكاديمي'],
      targetFacultyRecommendationsEn: ['Top faculties awaiting your practice data'],
    };
  }

  const accuracyPct = data.totalCorrect / data.totalAttempted;
  const hotsTotal = data.cognitive.hots.attempted;
  const hotsCorrect = data.cognitive.hots.correct;
  const hotsRate = hotsTotal > 0 ? hotsCorrect / hotsTotal : accuracyPct * 0.8;

  // Composite predictive percentage (70% accuracy, 20% HOTS competence, 10% volume bonus)
  const volumeBonus = Math.min(1.0, totalAttempted / 120) * 0.10;
  const rawPercentage = (accuracyPct * 0.70 + hotsRate * 0.20 + volumeBonus) * 100;
  const predictedPercentage = Math.round(Math.min(100, Math.max(30, rawPercentage)) * 10) / 10;
  const predictedTotalMarks = Math.round((predictedPercentage / 100) * 410 * 10) / 10;

  let confidenceLevel: 'high' | 'moderate' | 'preliminary' = 'preliminary';
  if (totalAttempted >= 60) confidenceLevel = 'high';
  else if (totalAttempted >= 20) confidenceLevel = 'moderate';

  let tierAr = 'المستوى العام - بحاجة لزيادة وتيرة التدريب وحل أسئلة المستويات العليا';
  let tierEn = 'General Pass Tier - Needs More Structured Practice & HOTS Drills';
  let facultiesAr = ['كليات التجارة والآداب والحقوق والخدمة الاجتماعية'];
  let facultiesEn = ['Commerce, Arts, Law, and Social Work Faculties'];

  if (predictedPercentage >= 92) {
    tierAr = 'أوائل الجمهورية وكليات القطاع الطبي والهندسي المرموقة 🏆';
    tierEn = 'National Republic Honors - Medical & Elite Engineering 🏆';
    facultiesAr = ['الطب البشري', 'طب وجراحة الفم والأسنان', 'الهندسة والتكنولوجيا', 'الحاسبات والذكاء الاصطناعي'];
    facultiesEn = ['Faculty of Medicine', 'Oral & Dental Surgery', 'Faculty of Engineering', 'AI & Computer Science'];
  } else if (predictedPercentage >= 82) {
    tierAr = 'قطاع التكنولوجيا والعلوم المتقدمة والصيدلة والاقتصاد 🌟';
    tierEn = 'Distinction Tier - Technology, Sciences & Economics 🌟';
    facultiesAr = ['الهندسة', 'الحاسبات والمعلومات', 'الصيدلة', 'العلاج الطبيعي', 'الاقتصاد والعلوم السياسية'];
    facultiesEn = ['Engineering', 'Computer Science & Informatics', 'Pharmacy', 'Physical Therapy', 'Economics & Political Science'];
  } else if (predictedPercentage >= 70) {
    tierAr = 'قطاع العلوم والإعلام واللغات والترجمة التطبيقية 🎯';
    tierEn = 'Merit Tier - Applied Sciences, Media & Languages 🎯';
    facultiesAr = ['العلوم', 'الإعلام وتكنولوجيا الاتصال', 'الألسن واللغات والترجمة', 'الفنون التطبيقية'];
    facultiesEn = ['Faculty of Science', 'Mass Communication', 'Languages & Translation (Al-Alsun)', 'Applied Arts'];
  }

  return {
    predictedTotalMarks,
    predictedPercentage,
    confidenceLevel,
    universityTrackTierAr: tierAr,
    universityTrackTierEn: tierEn,
    targetFacultyRecommendationsAr: facultiesAr,
    targetFacultyRecommendationsEn: facultiesEn,
  };
}

/**
 * Return the top weakest chapters that need immediate revision (lowest accuracy with at least 1 attempt, or chapters with high error count).
 */
export function getWeakestChapters(
  state?: StudentAnalyticsState,
  limit: number = 3
): ChapterPerformanceRecord[] {
  const data = state || getStudentAnalytics();
  const list = Object.values(data?.chapters || {}).filter((ch) => ch.attempted >= 2);

  // Sort by lowest accuracy percentage, then by highest error count
  list.sort((a, b) => {
    const accA = a.correct / a.attempted;
    const accB = b.correct / b.attempted;
    if (accA !== accB) return accA - accB;
    return (b.attempted - b.correct) - (a.attempted - a.correct);
  });

  return list.slice(0, limit);
}

/**
 * Reset all student analytics data.
 */
export function resetStudentAnalytics(): void {
  saveStudentAnalytics({ ...DEFAULT_ANALYTICS_STATE });
}

/**
 * Generates a 20-question multi-branch calibration exam:
 * Exactly 4 questions per branch (Pure Math, Applied Math, Physics, Chemistry, Biology).
 * Exactly 1 Easy, 2 Medium, 1 HOTS per branch (Total: 5 Easy, 10 Medium, 5 HOTS).
 */
export function generateDiagnosticBenchmarkQuestions(
  curriculum: Curriculum,
  customShuffle?: <T>(arr: T[]) => T[]
): GeneratedQuestion[] {
  const shuffle =
    customShuffle ||
    (<T>(arr: T[]): T[] => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });

  type BranchCategory = 'pure_math' | 'applied_math' | 'physics' | 'chemistry' | 'biology';
  const categories: BranchCategory[] = ['pure_math', 'applied_math', 'physics', 'chemistry', 'biology'];

  const pools: Record<
    BranchCategory,
    {
      easy: GeneratedQuestion[];
      medium: GeneratedQuestion[];
      hots: GeneratedQuestion[];
    }
  > = {
    pure_math: { easy: [], medium: [], hots: [] },
    applied_math: { easy: [], medium: [], hots: [] },
    physics: { easy: [], medium: [], hots: [] },
    chemistry: { easy: [], medium: [], hots: [] },
    biology: { easy: [], medium: [], hots: [] },
  };

  for (const branch of curriculum.branches) {
    for (const ch of branch.chapters) {
      const cat = classifySubjectCategory(branch.titleAr, branch.titleEn, ch.titleAr);

      const addCandidate = (prob: SolvedProblem, source: string, diff: DifficultyLevel) => {
        if (
          !prob.optionsEn ||
          prob.optionsEn.length !== 4 ||
          !prob.optionsAr ||
          prob.optionsAr.length !== 4 ||
          prob.correctIndex === undefined
        ) {
          return;
        }

        const normalizedDiff = (diff === 'hots' ? 'hots' : diff === 'easy' ? 'easy' : 'medium') as
          | 'easy'
          | 'medium'
          | 'hots';

        const q: GeneratedQuestion = {
          id: `${prob.id}_${source}`,
          questionEn: prob.questionEn,
          questionAr: prob.questionAr,
          difficulty: normalizedDiff,
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
        };

        if (cat in pools) {
          pools[cat as BranchCategory][normalizedDiff].push(q);
        }
      };

      if (ch.databank) {
        ch.databank.easy?.forEach((p) => addCandidate(p, 'databank_easy', 'easy'));
        ch.databank.medium?.forEach((p) => addCandidate(p, 'databank_medium', 'medium'));
        ch.databank.hots?.forEach((p) => addCandidate(p, 'databank_hots', 'hots'));
      }
      if (ch.solvedExamples) {
        ch.solvedExamples.forEach((p) => addCandidate(p, 'textbook_solved', p.difficulty || 'medium'));
      }
      if (ch.exerciseProblems) {
        ch.exerciseProblems.forEach((p) => addCandidate(p, 'textbook_exercise', p.difficulty || 'medium'));
      }
      ch.lessons?.forEach((l) => {
        l.worksheet?.problems?.forEach((prob) => {
          addCandidate(prob, 'worksheet', prob.difficulty || 'medium');
        });
      });
    }
  }

  const selectedQuestions: GeneratedQuestion[] = [];

  for (const cat of categories) {
    const easyShuffled = shuffle(pools[cat].easy);
    const medShuffled = shuffle(pools[cat].medium);
    const hotsShuffled = shuffle(pools[cat].hots);

    const chosenEasy = easyShuffled.slice(0, 1);
    const chosenMed = medShuffled.slice(0, 2);
    const chosenHots = hotsShuffled.slice(0, 1);

    const branchSelected = [...chosenEasy, ...chosenMed, ...chosenHots];

    // Fallback if any tier fell short
    if (branchSelected.length < 4) {
      const allCategoryQs = shuffle([...easyShuffled, ...medShuffled, ...hotsShuffled]);
      const chosenIds = new Set(branchSelected.map((q) => q.id));
      for (const q of allCategoryQs) {
        if (!chosenIds.has(q.id)) {
          branchSelected.push(q);
          chosenIds.add(q.id);
          if (branchSelected.length === 4) break;
        }
      }
    }

    selectedQuestions.push(...branchSelected);
  }

  return shuffle(selectedQuestions);
}
