import type { Curriculum } from '../types/curriculum';
import { thanaweyaAlgebraSolidBranch } from './thanaweyaAlgebraSolid';
import { thanaweyaCalculusBranch } from './thanaweyaCalculus';
import { thanaweyaStaticsBranch } from './thanaweyaStatics';
import { thanaweyaDynamicsBranch } from './thanaweyaDynamics';

export const thanaweyaCurriculum: Curriculum = {
  id: 'thanaweya',
  nameEn: 'Egyptian General Secondary (Thanaweya Amma)',
  nameAr: 'الرياضيات للثانوية العامة المصرية',
  subtitleEn: 'Grade 12 Standardized Ministry of Education Mathematics (Pure & Applied) — Chapters 1 & 2 Complete',
  subtitleAr: 'الصف الثالث الثانوي - الصفوف الإتمامية بوزارة التربية والتعليم والتعليم الفني — الفصول 1 و 2 كاملة',
  moeOfficialBaselineEn: 'Egyptian MoE General Secondary Education Specifications 2025/2026',
  moeOfficialBaselineAr: 'مواصفات المناهج الرسمية الصادرة عن وزارة التربية والتعليم المصرية 2025/2026',
  branches: [
    thanaweyaAlgebraSolidBranch,
    thanaweyaCalculusBranch,
    thanaweyaStaticsBranch,
    thanaweyaDynamicsBranch,
  ],
};
