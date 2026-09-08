import type { Curriculum } from '../types/curriculum';
import { egBacVectorsGeometryBranch } from './egBacVectorsGeometry';
import { egBacAnalysisBranch } from './egBacAnalysis';
import { egBacMechanicsBranch } from './egBacMechanics';

export const egBacCurriculum: Curriculum = {
  id: 'egbac',
  nameEn: 'New Egyptian Baccalaureate (EG-Bac)',
  nameAr: 'نظام البكالوريا المصرية الجديد (EG-Bac)',
  subtitleEn: 'Grade 12 Advanced Mathematical Sciences & STEM Track — Chapters 1 & 2 Complete',
  subtitleAr: 'المرحلة الثانوية المتقدمة - المسار العلمي والرياضي الحديث بوزارة التربية والتعليم — الفصول 1 و 2 كاملة',
  moeOfficialBaselineEn: 'Egyptian Ministry of Education New Baccalaureate Educational Framework 2025/2026',
  moeOfficialBaselineAr: 'الإطار الوطني المطور لإعادة هيكلة الثانوية والبكالوريا المصرية - وزارة التربية والتعليم',
  branches: [
    egBacVectorsGeometryBranch,
    egBacAnalysisBranch,
    egBacMechanicsBranch,
  ],
};
