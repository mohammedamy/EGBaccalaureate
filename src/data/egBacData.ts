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
import { egBacItalianBranch } from './egBacItalian';
import { egBacSpanishBranch } from './egBacSpanish';
import { egBacIslamicBranch } from './egBacIslamic';
import { egBacChristianBranch } from './egBacChristian';
import { egBacBusinessBranch } from './egBacBusiness';
import { egBacCivicsBranch } from './egBacCivics';
import { egBacFineArtsBranch } from './egBacFineArts';
import { egBacChineseBranch } from './egBacChinese';
import { egBacMusicBranch } from './egBacMusic';

export const egBacCurriculum: Curriculum = {
  id: 'egbac',
  nameEn: 'New Egyptian Baccalaureate (EG-Bac)',
  nameAr: 'نظام البكالوريا المصرية الجديد (EG-Bac)',
  subtitleEn: 'Grade 12 Advanced Mathematical Sciences, STEM Track, Modern Languages (English, French, German, Italian, Spanish, Chinese), Comparative Religious Studies, Ethics & Bioethics, Geopolitics, Earth Sciences, Philosophy & Applied Logic, Psychology & Sociology, Applied Economics & Statistics, Computer Science, Informatics & AI, Earth & Planetary Space Sciences, Comparative Civics & Constitutional Law, Fine Arts & Architectural Heritage',
  subtitleAr: 'المرحلة الثانوية المتقدمة - المسار العلمي والرياضي واللغات والدراسات الدينية والأخلاقية والتاريخ والجغرافيا السياسية وعلوم الأرض والفلسفة والمنطق وعلم النفس والاجتماع والاقتصاد والإحصاء وعلوم الحاسب وعلوم الفضاء والفلك والكواكب والفقه الدستوري والأخلاقيات المدنية والفنون الجميلة والتصميم المعماري وتاريخ الفن',
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
    egBacItalianBranch,
    egBacSpanishBranch,
    egBacChineseBranch,
    egBacArabicBranch,
    egBacHistoryBranch,
    egBacGeographyBranch,
    egBacGeologyBranch,
    egBacPhilosophyBranch,
    egBacPsychologyBranch,
    egBacEconomicsStatBranch,
    egBacCsInformaticsBranch,
    egBacEarthSpaceBranch,
    egBacIslamicBranch,
    egBacChristianBranch,
    egBacBusinessBranch,
    egBacCivicsBranch,
    egBacFineArtsBranch,
    egBacMusicBranch,
  ],
};


