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
import { egBacGeologyBranch } from './egBacGeology';
import { egBacPhilosophyBranch } from './egBacPhilosophy';

export const egBacCurriculum: Curriculum = {
  id: 'egbac',
  nameEn: 'New Egyptian Baccalaureate (EG-Bac)',
  nameAr: 'نظام البكالوريا المصرية الجديد (EG-Bac)',
  subtitleEn: 'Grade 12 Advanced Mathematical Sciences, STEM Track, Modern Languages, Geopolitics, Earth Sciences, Philosophy & Applied Logic',
  subtitleAr: 'المرحلة الثانوية المتقدمة - المسار العلمي والرياضي واللغات والتاريخ والجغرافيا السياسية وعلوم الأرض والفلسفة والمنطق التطبيقي بوزارة التربية والتعليم',
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
    egBacGeologyBranch,
    egBacPhilosophyBranch,
  ],
};


