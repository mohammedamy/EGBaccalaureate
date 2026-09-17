import type { Curriculum } from '../types/curriculum';
import { egBacVectorsGeometryBranch } from './egBacVectorsGeometry';
import { egBacAnalysisBranch } from './egBacAnalysis';
import { egBacMechanicsBranch } from './egBacMechanics';
import { egBacProbabilityBranch } from './egBacProbability';
import { egBacPhysicsBranch } from './egBacPhysics';
import { egBacChemistryBranch } from './egBacChemistry';
import { egBacBiologyBranch } from './egBacBiology';
import { egBacEnglishBranch } from './egBacEnglish';
import { egBacFrenchBranch } from './egBacFrench';

export const egBacCurriculum: Curriculum = {
  id: 'egbac',
  nameEn: 'New Egyptian Baccalaureate (EG-Bac)',
  nameAr: 'نظام البكالوريا المصرية الجديد (EG-Bac)',
  subtitleEn: 'Grade 12 Advanced Mathematical Sciences, STEM Track & Modern Languages — Mathematics, Physics, Chemistry, Biology, Advanced English, Advanced French',
  subtitleAr: 'المرحلة الثانوية المتقدمة - المسار العلمي والرياضي الحديث واللغات بوزارة التربية والتعليم — فروع الرياضيات المتقدمة ومسارات العلوم STEM واللغة الإنجليزية والفرنسية المتقدمة',
  moeOfficialBaselineEn: 'Egyptian Ministry of Education New Baccalaureate Educational Framework 2025/2026',
  moeOfficialBaselineAr: 'الإطار الوطني المطور لإعادة هيكلة الثانوية والبكالوريا المصرية - وزارة التربية والتعليم',
  branches: [
    egBacVectorsGeometryBranch,
    egBacAnalysisBranch,
    egBacMechanicsBranch,
    egBacProbabilityBranch,
    egBacPhysicsBranch,
    egBacChemistryBranch,
    egBacBiologyBranch,
    egBacEnglishBranch,
    egBacFrenchBranch,
  ],
};


