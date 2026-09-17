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

export const thanaweyaCurriculum: Curriculum = {
  id: 'thanaweya',
  nameEn: 'Egyptian General Secondary (Thanaweya Amma)',
  nameAr: 'الثانوية العامة المصرية (الرياضيات والعلوم واللغات)',
  subtitleEn: 'Grade 12 Standardized Ministry of Education Mathematics, Sciences & Languages (Pure & Applied Math, Physics, Chemistry, Biology, English, French)',
  subtitleAr: 'الصف الثالث الثانوي - الصفوف الإتمامية بوزارة التربية والتعليم والتعليم الفني — فروع الرياضيات والعلوم التجريبية واللغتين الإنجليزية والفرنسية',
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
  ],
};

