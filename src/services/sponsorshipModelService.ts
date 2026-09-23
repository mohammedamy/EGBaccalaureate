/**
 * Educational Sponsorship & Sustainability Model for ClipSAT EGBaccalaureate
 * Enforces the "Free Core Guarantee" (Pillar E / Section 7) while enabling
 * philanthropic foundations and school districts to sponsor offline edge distribution.
 */

export interface PhilanthropicPartner {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'ngo' | 'foundation' | 'government_partnership' | 'csr_tech';
  descriptionAr: string;
  sponsoredGovernorates: string[];
  activeScholarshipsCount: number;
  logoBadgeUrl?: string;
}

export interface SponsorGrantApplication {
  id: string;
  schoolName: string;
  governorate: string;
  studentCount: number;
  contactPerson: string;
  contactEmail: string;
  submittedTimestamp: number;
  status: 'pending' | 'approved' | 'dispatched';
}

export const SPONSOR_APPLICATIONS_STORAGE_KEY = 'egbac_sponsor_applications_v1';

export const ACCREDITED_SPONSORS: PhilanthropicPartner[] = [
  {
    id: 'misr_el_kheir',
    nameAr: 'مؤسسة مصر الخير — قطاع التعليم والتنمية المستدامة',
    nameEn: 'Misr El-Kheir Foundation (Education Sector)',
    category: 'ngo',
    descriptionAr: 'رعاية البنية التحتية لتوفير حزم التحميل بدون إنترنت لطلاب قرى صعيد مصر ومدارس التعليم المجتمعي.',
    sponsoredGovernorates: ['سوهاج', 'أسيوط', 'قنا', 'الأقصر', 'أسوان', 'المنيا'],
    activeScholarshipsCount: 15400,
  },
  {
    id: 'orman_charity',
    nameAr: 'جمعية الأورمان — مبادرة تكافؤ الفرص لطلاب الثانوية',
    nameEn: 'Al-Orman Charity Association',
    category: 'foundation',
    descriptionAr: 'توزيع فلاشات ومواد تعليمية مسبقة التحميل للمناطق النائية في الدلتا والفيوم وبني سويف.',
    sponsoredGovernorates: ['الفيوم', 'بني سويف', 'البحيرة', 'كفر الشيخ'],
    activeScholarshipsCount: 9200,
  },
  {
    id: 'national_alliance',
    nameAr: 'التحالف الوطني للعمل الأهلي التنموي',
    nameEn: 'National Alliance for Civil Development Work',
    category: 'government_partnership',
    descriptionAr: 'دعم المعامل الافتراضية والتدريب التكيفي لطلاب المحافظات الحدودية وسيناء.',
    sponsoredGovernorates: ['شمال سيناء', 'جنوب سيناء', 'الوادي الجديد', 'مطروح'],
    activeScholarshipsCount: 6800,
  },
  {
    id: 'tech_equity_egypt',
    nameAr: 'ائتلاف تكنولوجيا التعليم المصري (CSR)',
    nameEn: 'Egypt EdTech CSR Coalition',
    category: 'csr_tech',
    descriptionAr: 'تمويل سيرفرات التوزيع الطرفي (Edge CDN) والتأكد من استمرار مجانية المنصة ١٠٠٪ دون أي إعلانات تجارية.',
    sponsoredGovernorates: ['جميع المحافظات'],
    activeScholarshipsCount: 35000,
  },
];

/**
 * Returns the formal Core Platform Free Guarantee Charter.
 */
export function getCorePlatformCharter(): {
  manifestoAr: string;
  manifestoEn: string;
  guaranteedFreeFeatures: string[];
} {
  return {
    manifestoAr:
      'تلتزم كليبسات التزاماً تاريخياً وقانونياً بأن يظل المحتوى التعليمي، وبنوك الأسئلة (٧٧,٠٠٠ سؤال)، والكتب المدرسية المعتمِدة، ومحاكي المعامل الافتراضية، ومحرك التكرار المتباعد، مجانياً بنسبة ١٠٠٪ لجميع طلاب مصر دون أي مقابل مالي أو جدران دفع، تحقيقاً للعدالة الاجتماعية وتكافؤ الفرص.',
    manifestoEn:
      'ClipSAT is historically and structurally committed to keeping all 77,000 curriculum questions, ministerial textbooks, 34 simulation labs, and adaptive practice engines 100% permanently free for every Egyptian student with zero paywalls.',
    guaranteedFreeFeatures: [
      'جميع بنوك الأسئلة الوزارية (٧٧,٠٠٠ مسألة رسمية بشرح تفصيلي)',
      'الكتب المدرسية التفاعلية لجميع شعب الثانوية العامة (٣٨٥ فصلاً)',
      'جميع المعامل الافتراضية واستوديوهات اللغات والمختبرات الصوتية (٣٤ معملاً)',
      'محرك التدريب التكيفي والتكرار المتباعد وسجل الأخطاء الذكي',
      'إمكانية الاستخدام والتحميل الكامل للعمل بدون اتصال بالإنترنت',
      'بوابة نتائج الثانوية العامة وتحليلات الجاهزية والشهادات الرقمية',
    ],
  };
}

/**
 * Saves a new school or community sponsor grant application.
 */
export function submitSponsorGrantApplication(
  schoolName: string,
  governorate: string,
  studentCount: number,
  contactPerson: string,
  contactEmail: string
): SponsorGrantApplication {
  const application: SponsorGrantApplication = {
    id: `GRANT-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
    schoolName: schoolName.trim(),
    governorate: governorate.trim(),
    studentCount: Math.max(1, studentCount),
    contactPerson: contactPerson.trim(),
    contactEmail: contactEmail.trim(),
    submittedTimestamp: Date.now(),
    status: 'pending',
  };

  if (typeof localStorage !== 'undefined') {
    try {
      const existingRaw = localStorage.getItem(SPONSOR_APPLICATIONS_STORAGE_KEY);
      const existing: SponsorGrantApplication[] = existingRaw ? JSON.parse(existingRaw) : [];
      existing.unshift(application);
      localStorage.setItem(SPONSOR_APPLICATIONS_STORAGE_KEY, JSON.stringify(existing));
    } catch (err) {
      console.warn('Failed to store grant application:', err);
    }
  }

  return application;
}

/**
 * Retrieves all saved grant applications.
 */
export function getSavedGrantApplications(): SponsorGrantApplication[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(SPONSOR_APPLICATIONS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
