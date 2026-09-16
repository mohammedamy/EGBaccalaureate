import fs from 'fs';
import path from 'path';

console.log('📓 Starting Student Mistake Notebook ("كشكول الأخطاء") Verification...\n');

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ ${message}`);
    passCount++;
  } else {
    console.error(`❌ FAILED: ${message}`);
    failCount++;
  }
}

// 1. Mock localStorage in Node environment
const storageMap = new Map<string, string>();
const mockLocalStorage = {
  getItem: (key: string) => storageMap.get(key) || null,
  setItem: (key: string, val: string) => storageMap.set(key, val),
  removeItem: (key: string) => storageMap.delete(key),
  clear: () => storageMap.clear(),
};

(global as any).window = {
  localStorage: mockLocalStorage,
};
(global as any).localStorage = mockLocalStorage;

// 2. Import service
import {
  getMistakeRecords,
  saveMistakeRecord,
  recordQuizMistakes,
  markMistakeMastered,
  removeMistakeRecord,
  clearMasteredMistakes,
  getMistakeStats,
  MISTAKE_NOTEBOOK_STORAGE_KEY,
  type GeneratedQuestion,
} from '../src/services/mistakeNotebookService';

// Test 1: Initial empty state
const initial = getMistakeRecords();
assert(Array.isArray(initial) && initial.length === 0, 'Initial mistake notebook is empty array');

// Sample test questions
const sampleQ1: GeneratedQuestion = {
  id: 'test_phys_1',
  questionEn: 'What is the minimum wavelength of X-rays in a Coolidge tube?',
  questionAr: 'ما هو أقل طول موجي لأشعة إكس المتولدة في أنبوبة كولدج؟',
  difficulty: 'hots',
  optionsEn: ['hc/eV', 'eV/hc', 'h/mc', 'e/hV'],
  optionsAr: ['hc/eV', 'eV/hc', 'h/mc', 'e/hV'],
  correctIndex: 0,
  explanationEn: ['Lambda_min = hc / (eV)'],
  explanationAr: ['أقل طول موجي يحسب من العلاقة hc/eV'],
  chapterId: 'phys_ch6',
  chapterTitleEn: 'Atomic Spectra',
  chapterTitleAr: 'الأطياف الذرية',
  branchTitleEn: 'Physics',
  branchTitleAr: 'الفيزياء الحديثة',
};

const sampleQ2: GeneratedQuestion = {
  id: 'test_chem_1',
  questionEn: 'Which reaction produces an ester?',
  questionAr: 'أي التفاعلات التالية يُنتج إستراً؟',
  difficulty: 'medium',
  optionsEn: ['Acid + Alcohol', 'Alkane + Halogen', 'Alkene + Water', 'Benzene + HNO3'],
  optionsAr: ['حمض عضوي + كحول', 'ألكان + هالوجين', 'ألكين + ماء', 'بنزين + حمض نيتريك'],
  correctIndex: 0,
  explanationEn: ['Carboxylic acid + alcohol forms ester and water'],
  explanationAr: ['تفاعل الحمض الكربوكسيلي مع الكحول يعطي إستر وماء'],
  chapterId: 'chem_ch5',
  chapterTitleEn: 'Organic Chemistry',
  chapterTitleAr: 'الكيمياء العضوية',
  branchTitleEn: 'Chemistry',
  branchTitleAr: 'الكيمياء',
};

const sampleQ3: GeneratedQuestion = {
  id: 'test_math_1',
  questionEn: 'What is the derivative of e^(2x)?',
  questionAr: 'ما هي مشتقة الدالة د(س) = هـ^(٢س)؟',
  difficulty: 'easy',
  optionsEn: ['2e^(2x)', 'e^(2x)', '4e^(2x)', '0.5e^(2x)'],
  optionsAr: ['٢ هـ^(٢س)', 'هـ^(٢س)', '٤ هـ^(٢س)', '٠.٥ هـ^(٢س)'],
  correctIndex: 0,
  explanationEn: ['d/dx e^(2x) = 2e^(2x)'],
  explanationAr: ['مشتقة هـ^(٢س) تساوي ٢ هـ^(٢س)'],
  chapterId: 'calc_ch2',
  chapterTitleEn: 'Exponential Functions',
  chapterTitleAr: 'الدوال الأسية واللوغاريتمية',
  branchTitleEn: 'Calculus',
  branchTitleAr: 'التفاضل والتكامل',
};

// Test 2: Save single mistake
const rec1 = saveMistakeRecord(sampleQ1, 1, 'thanaweya');
assert(rec1.id === 'test_phys_1', 'Saved record has correct question ID');
assert(rec1.userAnswerIndex === 1, 'Saved record stores user chosen option');
assert(rec1.attemptsCount === 1, 'Initial attempt count is 1');
assert(rec1.mastered === false, 'Initial state is unmastered');

// Test 3: Record quiz mistakes with mixed results
const quizQuestions = [sampleQ1, sampleQ2, sampleQ3];
const userAnswers = {
  test_phys_1: 2, // incorrect again (previous was 1)
  test_chem_1: 3, // incorrect (first time)
  test_math_1: 0, // correct!
};

const result = recordQuizMistakes(quizQuestions, userAnswers, 'thanaweya');
assert(result.added === 1, 'Correctly added 1 new mistake (sampleQ2)');
assert(result.updated === 1, 'Correctly updated 1 existing mistake (sampleQ1)');

const allRecords = getMistakeRecords();
assert(allRecords.length === 2, 'Total logged mistakes equals 2');

const updatedQ1 = allRecords.find((r) => r.id === 'test_phys_1');
assert(updatedQ1?.attemptsCount === 2, 'Repeated mistake increments attemptsCount to 2');
assert(updatedQ1?.userAnswerIndex === 2, 'Updated mistake stores newest user answer index');

// Test 4: Correct answer on remediation marks as mastered
const remediationResult = recordQuizMistakes(
  [sampleQ1],
  { test_phys_1: 0 }, // correct answer!
  'thanaweya'
);
const afterRemediation = getMistakeRecords();
const remediatedQ1 = afterRemediation.find((r) => r.id === 'test_phys_1');
assert(remediatedQ1?.mastered === true, 'Answering missed question correctly marks it as mastered');

// Test 5: Manual toggle
markMistakeMastered('test_chem_1', true);
assert(getMistakeRecords().find((r) => r.id === 'test_chem_1')?.mastered === true, 'Manual markMistakeMastered works');

// Test 6: Aggregate statistics
const stats = getMistakeStats();
assert(stats.total === 2, 'Stats total equals 2');
assert(stats.mastered === 2, 'Stats mastered equals 2');
assert(stats.active === 0, 'Stats active equals 0');
assert(stats.masteryRate === 100, 'Mastery rate equals 100%');

// Test 7: Clear mastered
const cleared = clearMasteredMistakes();
assert(cleared === 2, 'Cleared 2 mastered mistakes');
assert(getMistakeRecords().length === 0, 'Mistake notebook empty after clearing mastered');

// Test 8: Component Files Verification
const servicePath = path.resolve('src/services/mistakeNotebookService.ts');
const viewPath = path.resolve('src/components/MistakeNotebookView.tsx');
assert(fs.existsSync(servicePath), 'src/services/mistakeNotebookService.ts exists');
assert(fs.existsSync(viewPath), 'src/components/MistakeNotebookView.tsx exists');

const viewContent = fs.readFileSync(viewPath, 'utf8');
assert(viewContent.includes('MistakeNotebookView'), 'MistakeNotebookView component is exported');
assert(viewContent.includes('كشكول الأخطاء'), 'MistakeNotebookView contains Arabic branding');
assert(viewContent.includes('onStartRemediation'), 'MistakeNotebookView supports remediation launch');
assert(viewContent.includes('handleToggleMastered'), 'MistakeNotebookView supports mastery toggle');
assert(viewContent.includes('MathRenderer'), 'MistakeNotebookView utilizes MathRenderer for KaTeX');

console.log(`\n================================`);
console.log(`Total Passed: ${passCount} | Failed: ${failCount}`);
console.log(`================================`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 Student Mistake Notebook ("كشكول الأخطاء") service & logic 100% verified!\n');
}
