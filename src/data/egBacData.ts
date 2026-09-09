import type { Curriculum } from '../types/curriculum';
import { egBacVectorsGeometryBranch } from './egBacVectorsGeometry';
import { egBacAnalysisBranch } from './egBacAnalysis';
import { egBacMechanicsBranch } from './egBacMechanics';
import { egBacProbabilityBranch } from './egBacProbability';

export const egBacCurriculum: Curriculum = {
  id: 'egbac',
  nameEn: 'New Egyptian Baccalaureate (EG-Bac)',
  nameAr: 'نظام البكالوريا المصرية الجديد (EG-Bac)',
  subtitleEn: 'Grade 12 Advanced Mathematical Sciences & STEM Track — All 4 Branches & 8 Chapters Complete (1,400 Problems)',
  subtitleAr: 'المرحلة الثانوية المتقدمة - المسار العلمي والرياضي الحديث بوزارة التربية والتعليم — جميع الفروع الـ 4 والفصول الـ 8 مكتملة (1400 مسألة وسؤال)',
  moeOfficialBaselineEn: 'Egyptian Ministry of Education New Baccalaureate Educational Framework 2025/2026',
  moeOfficialBaselineAr: 'الإطار الوطني المطور لإعادة هيكلة الثانوية والبكالوريا المصرية - وزارة التربية والتعليم',
  branches: [
    egBacVectorsGeometryBranch,
    egBacAnalysisBranch,
    egBacMechanicsBranch,
    egBacProbabilityBranch,
  ],
};

