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
import { egBacArabicBranch } from './egBacArabic';
import { egBacHistoryBranch } from './egBacHistory';
import { egBacGeographyBranch } from './egBacGeography';

export const egBacCurriculum: Curriculum = {
  id: 'egbac',
  nameEn: 'New Egyptian Baccalaureate (EG-Bac)',
  nameAr: 'نظام البكالوريا المصرية الجديد (EG-Bac)',
  subtitleEn: 'Grade 12 Advanced Mathematical Sciences, STEM Track, Modern Languages & Geopolitical History & Geography — Mathematics, Physics, Chemistry, Biology, Advanced English, Advanced French, Advanced Arabic, Contemporary History, Geopolitics',
  subtitleAr: 'المرحلة الثانوية المتقدمة - المسار العلمي والرياضي الحديث واللغات والتاريخ والجغرافيا الجيوسياسية بوزارة التربية والتعليم — فروع الرياضيات المتقدمة ومسارات العلوم STEM واللغات والتاريخ الوطني والجغرافيا السياسية',
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
    egBacArabicBranch,
    egBacHistoryBranch,
    egBacGeographyBranch,
  ],
};


