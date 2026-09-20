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
import { thanaweyaPhilosophyBranch } from './thanaweyaPhilosophy';
import { thanaweyaPsychologyBranch } from './thanaweyaPsychology';
import { thanaweyaEconomicsStatBranch } from './thanaweyaEconomicsStat';
import { thanaweyaCsInformaticsBranch } from './thanaweyaCsInformatics';
import { thanaweyaEarthSpaceBranch } from './thanaweyaEarthSpace';
import { thanaweyaGermanBranch } from './thanaweyaGerman';
import { thanaweyaItalianBranch } from './thanaweyaItalian';
import { thanaweyaSpanishBranch } from './thanaweyaSpanish';
import { thanaweyaIslamicBranch } from './thanaweyaIslamic';
import { thanaweyaChristianBranch } from './thanaweyaChristian';
import { thanaweyaBusinessBranch } from './thanaweyaBusiness';
import { thanaweyaCivicsBranch } from './thanaweyaCivics';
import { thanaweyaFineArtsBranch } from './thanaweyaFineArts';
import { thanaweyaChineseBranch } from './thanaweyaChinese';
import { thanaweyaMusicBranch } from './thanaweyaMusic';
import { thanaweyaAgricultureBranch } from './thanaweyaAgriculture';
import { thanaweyaIndustrialBranch } from './thanaweyaIndustrial';
import { thanaweyaCommercialBranch } from './thanaweyaCommercial';
import { thanaweyaTourismBranch } from './thanaweyaTourism';
import { thanaweyaRenewableBranch } from './thanaweyaRenewable';

export const thanaweyaCurriculum: Curriculum = {
  id: 'thanaweya',
  nameEn: 'Egyptian General Secondary (Thanaweya Amma)',
  nameAr: 'الثانوية العامة المصرية (الرياضيات والعلوم واللغات والعلوم الإنسانية والاقتصاد والإحصاء والحاسب الآلي وعلوم الفضاء واللغات الأجنبية والتربية الدينية والتربية الوطنية والدستور والفنون الجميلة والعمارة والتربية الموسيقية والعلوم الزراعية والتكنولوجيا الصناعية والتطبيقات الهندسية)',
  subtitleEn: 'Grade 12 Standardized Ministry of Education Curricula (Pure & Applied Math, Physics, Chemistry, Biology, English, French, German, Italian, Spanish, Chinese, Religious Education, Arabic, History, Geography, Geology, Philosophy & Logic, Psychology & Sociology, Economics & Statistics, Computer Science & Informatics, Earth & Planetary Space Sciences, National Civics & Constitution, Fine Arts & Architectural Design, Musical Theory, Agricultural Sciences & Agrotechnology, Industrial Technology & Applied Engineering)',
  subtitleAr: 'الصف الثالث الثانوي - الصفوف الإتمامية بوزارة التربية والتعليم والتعليم الفني — فروع الرياضيات والعلوم التجريبية واللغات والتاريخ والجغرافيا والجيولوجيا والفلسفة والمنطق وعلم النفس والاجتماع والاقتصاد والإحصاء وعلوم الحاسب وعلوم الفضاء واللغة الصينية والتربية الدينية الإسلامية والمسيحية والتربية الوطنية والدستور والفنون الجميلة والتصميم المعماري والتربية الموسيقية والعلوم الزراعية والتكنولوجيا والتربية الصناعية والتطبيقات الهندسية',
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
    thanaweyaGermanBranch,
    thanaweyaItalianBranch,
    thanaweyaSpanishBranch,
    thanaweyaChineseBranch,
    thanaweyaArabicBranch,
    thanaweyaHistoryBranch,
    thanaweyaGeographyBranch,
    thanaweyaGeologyBranch,
    thanaweyaPhilosophyBranch,
    thanaweyaPsychologyBranch,
    thanaweyaEconomicsStatBranch,
    thanaweyaCsInformaticsBranch,
    thanaweyaEarthSpaceBranch,
    thanaweyaIslamicBranch,
    thanaweyaChristianBranch,
    thanaweyaBusinessBranch,
    thanaweyaCivicsBranch,
    thanaweyaFineArtsBranch,
    thanaweyaMusicBranch,
    thanaweyaAgricultureBranch,
    thanaweyaIndustrialBranch,
    thanaweyaCommercialBranch,
    thanaweyaTourismBranch,
    thanaweyaRenewableBranch,
  ],
};
