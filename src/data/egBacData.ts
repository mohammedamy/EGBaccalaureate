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
import { egBacPsychologyBranch } from './egBacPsychology';
import { egBacEconomicsStatBranch } from './egBacEconomicsStat';
import { egBacCsInformaticsBranch } from './egBacCsInformatics';
import { egBacEarthSpaceBranch } from './egBacEarthSpace';
import { egBacGermanBranch } from './egBacGerman';

export const egBacCurriculum: Curriculum = {
  id: 'egbac',
  nameEn: 'New Egyptian Baccalaureate (EG-Bac)',
  nameAr: 'نظام البكالوريا المصرية الجديد (EG-Bac)',
  subtitleEn: 'Grade 12 Advanced Mathematical Sciences, STEM Track, Modern Languages (English, French, German), Geopolitics, Earth Sciences, Philosophy & Applied Logic, Psychology & Sociology, Applied Economics & Statistics, Computer Science, Informatics & AI, Earth & Planetary Space Sciences',
  subtitleAr: 'المرحلة الثانوية المتقدمة - المسار العلمي والرياضي واللغات (الإنجليزية والفرنسية والألمانية) والتاريخ والجغرافيا السياسية وعلوم الأرض والفلسفة والمنطق وعلم النفس والاجتماع والاقتصاد والإحصاء وعلوم الحاسب وعلوم الفضاء والفلك والكواكب',
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
    egBacGermanBranch,
    egBacArabicBranch,
    egBacHistoryBranch,
    egBacGeographyBranch,
    egBacGeologyBranch,
    egBacPhilosophyBranch,
    egBacPsychologyBranch,
    egBacEconomicsStatBranch,
    egBacCsInformaticsBranch,
    egBacEarthSpaceBranch,
  ],
};


