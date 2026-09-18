import type { Curriculum } from '../types/curriculum';
import { thanaweyaAlgebraSolidBranch } from './thanaweyaAlgebraSolid';
import { thanaweyaCalculusBranch } from './thanaweyaCalculus';
import { thanaweyaStaticsBranch } from './thanaweyaStatics';
import { thanaweyaDynamicsBranch } from './thanaweyaDynamics';
import { thanaweyaPhysicsBranch } from './thanaweyaPhysics';
import { thanaweyaChemistryBranch } from './thanaweyaChemistry';
import { thanaweyaBiologyBranch } from './thanaweyaBiology';
import { thanaweyaEnglishBranch } from './thanaweyaEnglish';
import { thanaweyaFrenchBranch } from './thanaweyaFrench';
import { thanaweyaArabicBranch } from './thanaweyaArabic';
import { thanaweyaHistoryBranch } from './thanaweyaHistory';
import { thanaweyaGeographyBranch } from './thanaweyaGeography';
import { thanaweyaGeologyBranch } from './thanaweyaGeology';

export const thanaweyaCurriculum: Curriculum = {
  id: 'thanaweya',
  nameEn: 'Egyptian General Secondary (Thanaweya Amma)',
  nameAr: 'الثانوية العامة المصرية (الرياضيات والعلوم واللغات والتاريخ والجغرافيا والجيولوجيا)',
  subtitleEn: 'Grade 12 Standardized Ministry of Education Mathematics, Sciences, Languages, National History, Political Geography & Geology (Pure & Applied Math, Physics, Chemistry, Biology, English, French, Arabic, History, Geography, Geology)',
  subtitleAr: 'الصف الثالث الثانوي - الصفوف الإتمامية بوزارة التربية والتعليم والتعليم الفني — فروع الرياضيات والعلوم التجريبية واللغات والتاريخ الوطني المصري والجغرافيا السياسية والجيولوجيا والعلوم البيئية',
  moeOfficialBaselineEn: 'Egyptian MoE General Secondary Education Specifications 2025/2026',
  moeOfficialBaselineAr: 'مواصفات المناهج الرسمية الصادرة عن وزارة التربية والتعليم المصرية 2025/2026',
  branches: [
    thanaweyaAlgebraSolidBranch,
    thanaweyaCalculusBranch,
    thanaweyaStaticsBranch,
    thanaweyaDynamicsBranch,
    thanaweyaPhysicsBranch,
    thanaweyaChemistryBranch,
    thanaweyaBiologyBranch,
    thanaweyaEnglishBranch,
    thanaweyaFrenchBranch,
    thanaweyaArabicBranch,
    thanaweyaHistoryBranch,
    thanaweyaGeographyBranch,
    thanaweyaGeologyBranch,
  ],
};

