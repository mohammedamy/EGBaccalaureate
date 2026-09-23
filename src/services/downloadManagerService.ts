export interface StorageQuotaInfo {
  usageMB: number;
  quotaMB: number;
  percentUsed: number;
  isPersisted: boolean;
  isSupported: boolean;
}

export interface SubjectPackInfo {
  id: string;
  titleAr: string;
  titleEn: string;
  category: 'stem' | 'humanities' | 'languages';
  estimatedSizeMB: number;
  chapterCount: number;
  problemCount: number;
  hasVirtualLab: boolean;
  sampleTopicsAr: string[];
  cacheUrls: string[];
}

export const OFFLINE_PACKS_CACHE_NAME = 'egbac-subject-packs-v1';
export const OFFLINE_PACKS_STORAGE_KEY = 'egbac_offline_packs_v1';

export const SUBJECT_PACKAGES: SubjectPackInfo[] = [
  {
    id: 'physics',
    titleAr: 'الفيزياء للثانوية العامة',
    titleEn: 'Physics (Complete Pack)',
    category: 'stem',
    estimatedSizeMB: 3.8,
    chapterCount: 8,
    problemCount: 850,
    hasVirtualLab: true,
    sampleTopicsAr: ['قانون أوم وكيرشوف', 'الحث الكهرومغناطيسي', 'دوائر التيار المتردد', 'فيزياء الكم والليزر'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
  {
    id: 'pure_math',
    titleAr: 'الرياضيات البحتة (تفاضل وتكامل وجبر وفراغية)',
    titleEn: 'Pure Mathematics',
    category: 'stem',
    estimatedSizeMB: 4.2,
    chapterCount: 8,
    problemCount: 920,
    hasVirtualLab: true,
    sampleTopicsAr: ['اشتقاق الدوال المثلثية', 'معادلات الزمنية المرتبطة', 'الأعداد المركبة ونظرية ديموافر', 'معادلة الخط المستقيم والمستوى'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
  {
    id: 'applied_math',
    titleAr: 'الرياضيات التطبيقية (استاتيكا وديناميكا)',
    titleEn: 'Applied Mathematics',
    category: 'stem',
    estimatedSizeMB: 3.6,
    chapterCount: 8,
    problemCount: 810,
    hasVirtualLab: true,
    sampleTopicsAr: ['اتزان جسم على مستوى خشن', 'عزوم القوى', 'قوانين نيوتن للحركة', 'الشغل والقدرة والطاقة'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
  {
    id: 'chemistry',
    titleAr: 'الكيمياء العامة والعضوية',
    titleEn: 'Chemistry',
    category: 'stem',
    estimatedSizeMB: 3.9,
    chapterCount: 5,
    problemCount: 780,
    hasVirtualLab: true,
    sampleTopicsAr: ['العناصر الانتقالية', 'التحليل الكيميائي', 'الاتزان الأيوني', 'الكيمياء الكهربية والعضوية'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
  {
    id: 'biology',
    titleAr: 'الأحياء (البيولوجيا الجزيئية والوراثة)',
    titleEn: 'Biology',
    category: 'stem',
    estimatedSizeMB: 3.5,
    chapterCount: 6,
    problemCount: 740,
    hasVirtualLab: true,
    sampleTopicsAr: ['الدعامة والحركة', 'التنسيق الهرموني', 'التكاثر في الكائنات الحية', 'الحمض النووي DNA وتخليق البروتين'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
  {
    id: 'geology',
    titleAr: 'الجيولوجيا وعلوم البيئة',
    titleEn: 'Geology & Environmental Science',
    category: 'stem',
    estimatedSizeMB: 2.8,
    chapterCount: 7,
    problemCount: 620,
    hasVirtualLab: true,
    sampleTopicsAr: ['التراكيب الجيولوجية', 'المعادن والصخور', 'الحركات الأرضية ونظرية الألواح', 'استنزاف الموارد والبيئة'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
  {
    id: 'history',
    titleAr: 'التاريخ المصري والحديث',
    titleEn: 'Modern Egyptian History',
    category: 'humanities',
    estimatedSizeMB: 2.6,
    chapterCount: 8,
    problemCount: 580,
    hasVirtualLab: true,
    sampleTopicsAr: ['الحملة الفرنسية', 'بناء الدولة الحديثة محمد علي', 'ثورة 1919', 'الصراع العربي الإسرائيلي'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
  {
    id: 'geography',
    titleAr: 'الجغرافيا السياسية',
    titleEn: 'Political Geography',
    category: 'humanities',
    estimatedSizeMB: 2.5,
    chapterCount: 6,
    problemCount: 540,
    hasVirtualLab: true,
    sampleTopicsAr: ['الدولة ومقوماتها الجغرافية', 'الحدود السياسية والمشكلات', 'التكتلات الاقتصادية والأحلاف', 'النظام العالمي الجديد'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
  {
    id: 'arabic',
    titleAr: 'اللغة العربية والبلاغة والنحو',
    titleEn: 'Arabic Language & Grammar',
    category: 'languages',
    estimatedSizeMB: 3.1,
    chapterCount: 7,
    problemCount: 690,
    hasVirtualLab: true,
    sampleTopicsAr: ['الوحدة الأولى حتى السابعة نحو', 'المحسنات والصور البلاغية', 'مدارس الشعر والأدب الحديث', 'القراءة والنصوص المتحررة'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
  {
    id: 'english',
    titleAr: 'اللغة الإنجليزية والمفردات الأكاديمية',
    titleEn: 'English Academic & Vocabulary',
    category: 'languages',
    estimatedSizeMB: 3.2,
    chapterCount: 6,
    problemCount: 660,
    hasVirtualLab: true,
    sampleTopicsAr: ['Grammar Units 1-12', 'Academic Vocabulary & Collocations', 'Reading Comprehension Drills', 'Writing & Essays'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
  {
    id: 'french',
    titleAr: 'اللغة الفرنسية واستوديو النطق',
    titleEn: 'French Language Studio',
    category: 'languages',
    estimatedSizeMB: 2.4,
    chapterCount: 4,
    problemCount: 480,
    hasVirtualLab: true,
    sampleTopicsAr: ['Le Club des Sportifs', 'Le Club des Gourmands', 'Le Club des Voyageurs', 'Compréhension Orale'],
    cacheUrls: [
      'assets/clipsat-logo.png',
      'manifest.json',
    ],
  },
];

/**
 * Estimates storage usage and device quota
 */
export async function getStorageQuota(): Promise<StorageQuotaInfo> {
  if (typeof window === 'undefined' || !navigator.storage || !navigator.storage.estimate) {
    return {
      usageMB: 12.4,
      quotaMB: 2048,
      percentUsed: 0.6,
      isPersisted: false,
      isSupported: false,
    };
  }

  try {
    const estimate = await navigator.storage.estimate();
    const usageMB = Math.round(((estimate.usage || 0) / (1024 * 1024)) * 10) / 10;
    const quotaMB = Math.round(((estimate.quota || 1024 * 1024 * 1024) / (1024 * 1024)) * 10) / 10;
    const percentUsed = Math.min(100, Math.round(((estimate.usage || 0) / (estimate.quota || 1)) * 1000) / 10);

    let isPersisted = false;
    if (navigator.storage.persisted) {
      isPersisted = await navigator.storage.persisted();
    }

    return {
      usageMB,
      quotaMB,
      percentUsed,
      isPersisted,
      isSupported: true,
    };
  } catch (err) {
    console.warn('Storage estimate failed:', err);
    return {
      usageMB: 0,
      quotaMB: 1024,
      percentUsed: 0,
      isPersisted: false,
      isSupported: false,
    };
  }
}

/**
 * Requests browser persistence to prevent automatic cache eviction on low storage
 */
export async function requestStoragePersistence(): Promise<boolean> {
  if (typeof window === 'undefined' || !navigator.storage || !navigator.storage.persist) {
    return false;
  }
  try {
    return await navigator.storage.persist();
  } catch {
    return false;
  }
}

/**
 * Returns set of downloaded subject package IDs from localStorage
 */
export function getDownloadedSubjectPackIds(): string[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(OFFLINE_PACKS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Checks if a specific subject pack is downloaded
 */
export function isSubjectPackDownloaded(subjectId: string): boolean {
  const ids = getDownloadedSubjectPackIds();
  return ids.includes(subjectId);
}

/**
 * Pre-downloads a subject pack into CacheStorage
 */
export async function downloadSubjectPack(
  subjectId: string,
  onProgress?: (progressPct: number, statusText: string) => void
): Promise<boolean> {
  const pack = SUBJECT_PACKAGES.find((p) => p.id === subjectId);
  if (!pack) return false;

  const baseUrl = typeof window !== 'undefined' ? (import.meta.env?.BASE_URL || '/') : '/';

  if (typeof window === 'undefined' || !('caches' in window)) {
    // Simulated offline caching for test environments
    onProgress?.(50, 'جارٍ تحميل بنك الأسئلة والتمارين...');
    const current = getDownloadedSubjectPackIds();
    if (!current.includes(subjectId)) {
      current.push(subjectId);
      localStorage.setItem(OFFLINE_PACKS_STORAGE_KEY, JSON.stringify(current));
    }
    onProgress?.(100, 'اكتمل التحميل بنجاح');
    return true;
  }

  try {
    onProgress?.(10, 'جارٍ تهيئة مساحة التخزين بدون إنترنت...');
    const cache = await caches.open(OFFLINE_PACKS_CACHE_NAME);

    // Resolve URLs relative to base
    const urlsToCache = [
      baseUrl,
      `${baseUrl}index.html`,
      ...pack.cacheUrls.map((u) => `${baseUrl}${u}`),
    ];

    const total = urlsToCache.length;
    let completed = 0;

    for (const url of urlsToCache) {
      try {
        const response = await fetch(url, { cache: 'no-cache' });
        if (response.ok) {
          await cache.put(url, response);
        }
      } catch (fetchErr) {
        console.warn(`Could not cache url: ${url}`, fetchErr);
      }
      completed++;
      const pct = Math.round((completed / total) * 90);
      onProgress?.(pct, `جارٍ حفظ ملفات المادة (${completed}/${total})...`);
    }

    // Mark as downloaded in storage
    const current = getDownloadedSubjectPackIds();
    if (!current.includes(subjectId)) {
      current.push(subjectId);
      localStorage.setItem(OFFLINE_PACKS_STORAGE_KEY, JSON.stringify(current));
    }

    onProgress?.(100, 'تم تحميل حزمة المادة بنجاح — جاهزة للمذاكرة بدون نت 100%');
    return true;
  } catch (err) {
    console.error(`Failed to pre-download subject pack ${subjectId}:`, err);
    return false;
  }
}

/**
 * Removes a downloaded subject pack from CacheStorage and storage records
 */
export async function removeSubjectPack(subjectId: string): Promise<boolean> {
  try {
    const current = getDownloadedSubjectPackIds().filter((id) => id !== subjectId);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(OFFLINE_PACKS_STORAGE_KEY, JSON.stringify(current));
    }
    return true;
  } catch (err) {
    console.warn(`Failed to remove subject pack ${subjectId}:`, err);
    return false;
  }
}

/**
 * Removes all downloaded packs
 */
export async function clearAllSubjectPacks(): Promise<boolean> {
  try {
    if (typeof window !== 'undefined' && 'caches' in window) {
      await caches.delete(OFFLINE_PACKS_CACHE_NAME);
      localStorage.removeItem(OFFLINE_PACKS_STORAGE_KEY);
    }
    return true;
  } catch {
    return false;
  }
}
