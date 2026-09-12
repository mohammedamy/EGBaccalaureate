import type { Branch, BranchId, Curriculum, CurriculumType } from '../types/curriculum';

export type SubjectId = 'mathematics' | 'physics' | 'chemistry' | 'biology';

export interface SubjectDefinition {
  id: SubjectId;
  titleEn: string;
  titleAr: string;
  shortTitleEn: string;
  shortTitleAr: string;
  emoji: string;
  iconName: 'Calculator' | 'Atom' | 'FlaskConical' | 'Dna';
  badgeColor: string;
  gradient: string;
  lightBg: string;
  darkBg: string;
  borderColor: string;
  textColor: string;
  descriptionEn: string;
  descriptionAr: string;
  branchIds: {
    thanaweya: BranchId[];
    egbac: BranchId[];
  };
}

export const SUBJECTS: SubjectDefinition[] = [
  {
    id: 'mathematics',
    titleEn: 'Mathematics',
    titleAr: 'الرياضيات',
    shortTitleEn: 'Math',
    shortTitleAr: 'رياضيات',
    emoji: '📐',
    iconName: 'Calculator',
    badgeColor: 'indigo',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    lightBg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    darkBg: 'bg-indigo-950/70 text-indigo-200 border-indigo-800/60',
    borderColor: 'border-indigo-500/50',
    textColor: 'text-indigo-400',
    descriptionEn: 'Pure and Applied Mathematics, Calculus, Algebra, Geometry, Mechanics, Statistics & Analysis',
    descriptionAr: 'الرياضيات البحتة والتطبيقية، التفاضل والتكامل، الجبر، الهندسة، الميكانيكا، والإحصاء والتحليل',
    branchIds: {
      thanaweya: ['algebra_solid', 'calculus', 'statics', 'dynamics'],
      egbac: ['egbac_vectors_geometry', 'egbac_analysis', 'egbac_mechanics', 'egbac_probability'],
    },
  },
  {
    id: 'physics',
    titleEn: 'Physics',
    titleAr: 'الفيزياء',
    shortTitleEn: 'Physics',
    shortTitleAr: 'فيزياء',
    emoji: '⚡',
    iconName: 'Atom',
    badgeColor: 'cyan',
    gradient: 'from-cyan-600 via-sky-600 to-blue-600',
    lightBg: 'bg-cyan-50 text-cyan-900 border-cyan-200',
    darkBg: 'bg-cyan-950/70 text-cyan-200 border-cyan-800/60',
    borderColor: 'border-cyan-500/50',
    textColor: 'text-cyan-400',
    descriptionEn: 'Electric Circuits, Magnetic Effects, Induction, Quantum Radiation & Matter-Wave Duality',
    descriptionAr: 'التيار الكهربي، التأثير المغناطيسي، الحث الكهرومغناطيسي، والفيزياء الحديثة وازدواجية الموجة والجسيم',
    branchIds: {
      thanaweya: ['thanaweya_physics'],
      egbac: ['egbac_physics'],
    },
  },
  {
    id: 'chemistry',
    titleEn: 'Chemistry',
    titleAr: 'الكيمياء',
    shortTitleEn: 'Chem',
    shortTitleAr: 'كيمياء',
    emoji: '🧪',
    iconName: 'FlaskConical',
    badgeColor: 'emerald',
    gradient: 'from-emerald-600 via-teal-600 to-green-600',
    lightBg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    darkBg: 'bg-emerald-950/70 text-emerald-200 border-emerald-800/60',
    borderColor: 'border-emerald-500/50',
    textColor: 'text-emerald-400',
    descriptionEn: 'Transition Metals Metallurgy, Chemical Kinetics, Dynamic Equilibrium & Solution Buffers',
    descriptionAr: 'عناصر السلسلة الانتقالية وتعدين الحديد، الحركية الكيميائية، وسرعة التفاعلات والاتزان ومحاليل البفر',
    branchIds: {
      thanaweya: ['thanaweya_chemistry'],
      egbac: ['egbac_chemistry'],
    },
  },
  {
    id: 'biology',
    titleEn: 'Biology',
    titleAr: 'الأحياء',
    shortTitleEn: 'Bio',
    shortTitleAr: 'أحياء',
    emoji: '🧬',
    iconName: 'Dna',
    badgeColor: 'rose',
    gradient: 'from-rose-600 via-pink-600 to-purple-600',
    lightBg: 'bg-rose-50 text-rose-900 border-rose-200',
    darkBg: 'bg-rose-950/70 text-rose-200 border-rose-800/60',
    borderColor: 'border-rose-500/50',
    textColor: 'text-rose-400',
    descriptionEn: 'Support & Movement in Living Organisms, Molecular Genetics, DNA Structure & Protein Synthesis',
    descriptionAr: 'الدعامة والحركة في الكائنات الحية، البيولوجيا الجزيئية، وتركيب الحمض النووي وتخليق البروتين',
    branchIds: {
      thanaweya: ['thanaweya_biology'],
      egbac: ['egbac_biology'],
    },
  },
];

/**
 * Returns the Subject configuration by its ID
 */
export const getSubjectById = (subjectId: string): SubjectDefinition | undefined => {
  return SUBJECTS.find((s) => s.id === subjectId);
};

/**
 * Finds the Subject that a given branch belongs to
 */
export const getSubjectForBranch = (
  branchId: string,
  curriculumType?: CurriculumType
): SubjectDefinition | undefined => {
  return SUBJECTS.find((sub) => {
    if (curriculumType) {
      return sub.branchIds[curriculumType]?.includes(branchId as BranchId);
    }
    return (
      sub.branchIds.thanaweya.includes(branchId as BranchId) ||
      sub.branchIds.egbac.includes(branchId as BranchId)
    );
  });
};

/**
 * Returns all branches of a given subject in the specified curriculum
 */
export const getBranchesForSubject = (
  curriculum: Curriculum,
  subjectId: string
): Branch[] => {
  if (subjectId === 'all') return curriculum.branches;
  const subject = getSubjectById(subjectId);
  if (!subject) return curriculum.branches;

  const validBranchIds = subject.branchIds[curriculum.id] || [];
  return curriculum.branches.filter((b) => validBranchIds.includes(b.id));
};

/**
 * Computes chapter and problem statistics for a subject within a curriculum
 */
export const getSubjectStats = (
  curriculum: Curriculum,
  subjectId: string
): { totalChapters: number; totalProblems: number; totalLessons: number } => {
  const branches = getBranchesForSubject(curriculum, subjectId);
  let totalChapters = 0;
  let totalLessons = 0;
  let totalProblems = 0;

  for (const branch of branches) {
    totalChapters += branch.chapters.length;
    for (const ch of branch.chapters) {
      totalLessons += ch.lessons.length;
      if (ch.databank) {
        totalProblems +=
          (ch.databank.easy?.length || 0) +
          (ch.databank.medium?.length || 0) +
          (ch.databank.hots?.length || 0);
      }
      if (ch.solvedExamples) totalProblems += ch.solvedExamples.length;
      if (ch.exerciseProblems) totalProblems += ch.exerciseProblems.length;
    }
  }

  return { totalChapters, totalProblems, totalLessons };
};
