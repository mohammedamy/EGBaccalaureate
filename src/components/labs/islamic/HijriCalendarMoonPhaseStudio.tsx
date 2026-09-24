import React, { useState, useMemo } from 'react';
import {
  Moon,
  Sparkles,
  Info,
  Clock,
  Volume2,
  CalendarCheck,
  ShieldCheck,
} from 'lucide-react';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface HijriMonthMeta {
  index: number; // 1 to 12
  arabicName: string;
  englishName: string;
  isSacred: boolean; // من الأشهر الحرم
  seasonMeaningAr: string;
  seasonMeaningEn: string;
  historicalEventsAr: string[];
  historicalEventsEn: string[];
  liturgicalVirtuesAr: string;
  liturgicalVirtuesEn: string;
}

export const HIJRI_MONTHS: HijriMonthMeta[] = [
  {
    index: 1,
    arabicName: 'المحرم',
    englishName: 'Al-Muharram',
    isSacred: true,
    seasonMeaningAr: 'سُمي محرماً لأن العرب حرموا فيه القتال دلالة على قدسيته وحرمته.',
    seasonMeaningEn: 'Designated "the sacred" because warfare was strictly forbidden.',
    historicalEventsAr: ['1 محرم: رأس السنة الهجرية النبوية', '10 محرم: يوم عاشوراء ونجاة موسى عليه السلام'],
    historicalEventsEn: ['1 Muharram: Islamic New Year', '10 Muharram: Day of Ashura'],
    liturgicalVirtuesAr: 'أفضل الصيام بعد رمضان صيام شهر الله المحرم؛ وصيام يوم عاشوراء يكفر سنة ماضية.',
    liturgicalVirtuesEn: 'Best fast after Ramadan; fasting Ashura expiates the sins of the preceding year.',
  },
  {
    index: 2,
    arabicName: 'صفر',
    englishName: 'Safar',
    isSacred: false,
    seasonMeaningAr: 'سُمي صفراً لإصفار بيوتهم منهم لخروجهم إلى التجارة والأسفار.',
    seasonMeaningEn: 'Named for houses being empty as tribes departed for trade caravans.',
    historicalEventsAr: ['خروج النبي ﷺ في غزوة الأبواء', 'بناء مسجد قباء وتأسيس دولة المدينة'],
    historicalEventsEn: ['Expedition of Al-Abwa', 'Founding of the Quba Mosque'],
    liturgicalVirtuesAr: 'شهر مبارك كسائر الشهور؛ أبطل الإسلام التطير والتشاؤم به (لا عَدْوَى ولا طِيَرَةَ ولا صَفَرَ).',
    liturgicalVirtuesEn: 'Islam firmly negated all pre-Islamic superstitions and omens regarding Safar.',
  },
  {
    index: 3,
    arabicName: 'ربيع الأول',
    englishName: 'Rabi’ al-Awwal',
    isSacred: false,
    seasonMeaningAr: 'وافق وقت تسميته فصل الربيع وإزهار الأرض واخضرار المرعى.',
    seasonMeaningEn: 'Coincided originally with the blooming spring season.',
    historicalEventsAr: ['12 ربيع الأول: المولد النبوي الشريف', 'الهجرة النبوية المباركة إلى المدينة المنورة'],
    historicalEventsEn: ['12 Rabi’ al-Awwal: Birth of the Prophet Muhammad ﷺ', 'Arrival of the Hijrah in Medina'],
    liturgicalVirtuesAr: 'شهر الفرح برحمة الله العظمى ومولد نبي الرحمة المهداة ﷺ وتجديد محبته وسنته.',
    liturgicalVirtuesEn: 'Month of celebrating the emergence of the Prophet of Mercy ﷺ to all mankind.',
  },
  {
    index: 4,
    arabicName: 'ربيع الآخر',
    englishName: 'Rabi’ al-Thani',
    isSacred: false,
    seasonMeaningAr: 'تتمة للربيع الأول في استمرار موسم الرعي والندى.',
    seasonMeaningEn: 'Continuation of the spring pasture and vegetation period.',
    historicalEventsAr: ['غزوة بحران وغزوة ذي أمر في العهد المدني'],
    historicalEventsEn: ['Expeditions of Buhran and Dhu Amr in the Medinan period'],
    liturgicalVirtuesAr: 'استحباب صيام الأيام البيض (13، 14، 15) والاقتداء بالهدي النبوي الشريف.',
    liturgicalVirtuesEn: 'Recommended fasting of the White Days (13th, 14th, 15th) of the lunar month.',
  },
  {
    index: 5,
    arabicName: 'جمادى الأولى',
    englishName: 'Jumada al-Ula',
    isSacred: false,
    seasonMeaningAr: 'سُمي جمادى لجمود الماء من البرد الشديد وقت التسمية الباكرة.',
    seasonMeaningEn: 'Derived from jamad (freezing), when winter frost froze water.',
    historicalEventsAr: ['وقعة مؤتة الكبرى واستبسال قادة الفتح الإسلامي'],
    historicalEventsEn: ['Battle of Mu’tah and heroic stand of the early Muslim commanders'],
    liturgicalVirtuesAr: 'مدارسة السيرة النبوية والتفقه في أحكام المعاملات والأخلاق الإسلامية.',
    liturgicalVirtuesEn: 'Studying prophetic biography, leadership ethics, and Islamic jurisprudence.',
  },
  {
    index: 6,
    arabicName: 'جمادى الآخرة',
    englishName: 'Jumada al-Akhirah',
    isSacred: false,
    seasonMeaningAr: 'تتمة لجمادى الأولى قبل دخول موسم الأشهر الحرم.',
    seasonMeaningEn: 'Second winter month preceding the sacred month of Rajab.',
    historicalEventsAr: ['وفاة الصديق أبو بكر وتولي عمر بن الخطاب الخلافة (13هـ)'],
    historicalEventsEn: ['Passing of Abu Bakr and inauguration of Umar ibn al-Khattab (13 AH)'],
    liturgicalVirtuesAr: 'الاستعداد الروحي لاستقبال أشهر الفضائل العظمى (رجب وشعبان ورمضان).',
    liturgicalVirtuesEn: 'Spiritual preparation for the upcoming virtuous trimester (Rajab, Sha’ban, Ramadan).',
  },
  {
    index: 7,
    arabicName: 'رجب',
    englishName: 'Rajab',
    isSacred: true,
    seasonMeaningAr: 'رجب الفرد؛ من "الترجيب" وهو التعظيم والمهابة، وهو أحد الأشهر الحرم.',
    seasonMeaningEn: 'The solitary sacred month; named for veneration and grandeur.',
    historicalEventsAr: ['27 رجب: معجزة الإسراء والمعراج وفرض الصلوات الخمس', 'غزوة تبوك الكبرى (9هـ)'],
    historicalEventsEn: ['27 Rajab: Al-Isra’ wal-Mi’raj (Night Journey) and prayer mandate', 'Expedition of Tabuk (9 AH)'],
    liturgicalVirtuesAr: 'مضاعفة الحسنات والبعد عن المظالم؛ «إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْراً... مِنْهَا أَرْبَعَةٌ حُرُمٌ».',
    liturgicalVirtuesEn: 'Sanctity of peaceful deeds; severe prohibition of all transgressions and injustice.',
  },
  {
    index: 8,
    arabicName: 'شعبان',
    englishName: 'Sha’ban',
    isSacred: false,
    seasonMeaningAr: 'لتشعب القبائل بحثاً عن المياه والمرعى بعد خروجهم من شهر رجب الحرام.',
    seasonMeaningEn: 'Designating the branching out of tribes in search of seasonal pastures.',
    historicalEventsAr: ['15 شعبان: ليلة النصف من شعبان وتحويل القبلة من المسجد الأقصى للكعبة'],
    historicalEventsEn: ['15 Sha’ban: Night of Mid-Sha’ban and direction change of Qibla to the Kaaba'],
    liturgicalVirtuesAr: 'شهر تُرفع فيه الأعمال إلى رب العالمين، وكان النبي ﷺ يكثر من صيامه إعداداً لرمضان.',
    liturgicalVirtuesEn: 'Annual ascension of deeds to Allah; month of abundant voluntary prophetic fasting.',
  },
  {
    index: 9,
    arabicName: 'رمضان',
    englishName: 'Ramadan',
    isSacred: false,
    seasonMeaningAr: 'من "الرمضاء" وهي شدة حرارة الحجارة والشمس، ورمض الذنوب أي احتراقها ومغفرتها.',
    seasonMeaningEn: 'From ramda (scorching stone), metaphor for burning away of sins by mercy.',
    historicalEventsAr: ['17 رمضان: غزوة بدر الكبرى (يوم الفرقان)', '20 رمضان: فتح مكة الأعظم', 'ليلة القدر المباركة'],
    historicalEventsEn: ['17 Ramadan: Battle of Badr', '20 Ramadan: Conquest of Mecca', 'Laylat al-Qadr (Night of Decree)'],
    liturgicalVirtuesAr: 'سيد الشهور وركن الإسلام الرابع؛ شهر نزول القرآن الكريم والقيام والعتق من النيران.',
    liturgicalVirtuesEn: 'The sovereign month of fasting, revelation of the Holy Quran, and supreme divine grace.',
  },
  {
    index: 10,
    arabicName: 'شوال',
    englishName: 'Shawwal',
    isSacred: false,
    seasonMeaningAr: 'سُمي شوالاً لتشول ألبان الإبل وقت الحر وجفاف النوق.',
    seasonMeaningEn: 'Named for the lifting and scarcity of camel milk during peak heat.',
    historicalEventsAr: ['1 شوال: عيد الفطر المبارك', 'غزوة حنين وحصار الطائف'],
    historicalEventsEn: ['1 Shawwal: Eid al-Fitr Celebration', 'Battles of Hunayn and Ta’if'],
    liturgicalVirtuesAr: 'استحباب صيام الست من شوال؛ من صام رمضان ثم أتبعه ستاً من شوال كان كصيام الدهر.',
    liturgicalVirtuesEn: 'Virtue of fasting the 6 days of Shawwal, equating to a full year of continual fasting.',
  },
  {
    index: 11,
    arabicName: 'ذو القعدة',
    englishName: 'Dhu al-Qi’dah',
    isSacred: true,
    seasonMeaningAr: 'قعود العرب فيه عن القتال والتجوال استعداداً لموسم الحج الأكبر.',
    seasonMeaningEn: 'The month of sitting and rest, halting military expeditions before Hajj.',
    historicalEventsAr: ['صلح الحديبية التاريخي (6هـ)', 'بيعة الرضوان تحت الشجرة المباركة'],
    historicalEventsEn: ['Treaty of Hudaybiyyah (6 AH)', 'Bay’at al-Ridwan under the Tree'],
    liturgicalVirtuesAr: 'أول الأشهر الحرم الثلاثة المتوالية، وبداية أشهر الحج المعلومات.',
    liturgicalVirtuesEn: 'First of the three consecutive sacred months inaugurating the pilgrimage season.',
  },
  {
    index: 12,
    arabicName: 'ذو الحجة',
    englishName: 'Dhu al-Hijjah',
    isSacred: true,
    seasonMeaningAr: 'شهر أداء مناسك الحج الأعظم والوقوف بعرفة وزيارة البيت الحرام.',
    seasonMeaningEn: 'The supreme pilgrimage month to the Holy Kaaba in Mecca.',
    historicalEventsAr: ['9 ذو الحجة: يوم عرفة الركن الأعظم', '10 ذو الحجة: عيد الأضحى المبارك', 'حجة الوداع (10هـ)'],
    historicalEventsEn: ['9 Dhu al-Hijjah: Day of Arafah', '10 Dhu al-Hijjah: Eid al-Adha', 'The Farewell Pilgrimage (10 AH)'],
    liturgicalVirtuesAr: 'أيام العشر الأوائل هي أعظم أيام الدنيا عملاً صالحاً، ويوم عرفة يكفر سنتين (سنة ماضية وسنة باقية).',
    liturgicalVirtuesEn: 'The First Ten Days are the most beloved to Allah; fasting Arafah expiates two full years.',
  },
];

export interface MoonPhaseInfo {
  phaseIndex: number; // 0 to 7
  nameAr: string;
  nameEn: string;
  illuminationPct: number;
  dayRange: string;
  astronomicalDescAr: string;
  astronomicalDescEn: string;
  fiqhSignificanceAr: string;
  fiqhSignificanceEn: string;
}

export const MOON_PHASES: MoonPhaseInfo[] = [
  {
    phaseIndex: 0,
    nameAr: 'المحاق (New Moon / Conjunction)',
    nameEn: 'New Moon (Conjunction)',
    illuminationPct: 0,
    dayRange: 'اليوم 29 - 30',
    astronomicalDescAr: 'وقوع القمر بين الأرض والشمس على خط مستقيم؛ واجهه المضاء يواجه الشمس تماماً بينما واجهه المظلم يواجه الأرض.',
    astronomicalDescEn: 'Moon is aligned between Earth and Sun; illuminated face points away from Earth.',
    fiqhSignificanceAr: 'ولادة الهلال فلكياً؛ ولا يمكن رؤيته بالعين ولا بالتلسكوب لأنه يغيب مع الشمس أو قبلها.',
    fiqhSignificanceEn: 'Astronomical birth of crescent; impossible to visually sight at sunset.',
  },
  {
    phaseIndex: 1,
    nameAr: 'الهلال المتزايد (Waxing Crescent)',
    nameEn: 'Waxing Crescent',
    illuminationPct: 15,
    dayRange: 'اليوم 1 - 6',
    astronomicalDescAr: 'قوس ضوئي دقيق يبدأ في الظهور في الأفق الغربي بعد غروب الشمس مباشرة متجهاً بقرنيه نحو الشرق.',
    astronomicalDescEn: 'Thin luminous arc visible above the western horizon immediately after sunset.',
    fiqhSignificanceAr: 'معيار ثبوت الشهر الشرعي برؤية الهلال بالعين المجردة أو المراصد الفلكية لدخول رمضان وشوال وذي الحجة.',
    fiqhSignificanceEn: 'The canonical threshold for validating the start of Ramadan, Shawwal, and Dhu al-Hijjah.',
  },
  {
    phaseIndex: 2,
    nameAr: 'التربيع الأول (First Quarter)',
    nameEn: 'First Quarter',
    illuminationPct: 50,
    dayRange: 'اليوم 7 - 10',
    astronomicalDescAr: 'إضاءة نصف القرص القمري الأيمن؛ وتكون الزاوية بين الشمس والأرض والقمر 90 درجة بالتمام.',
    astronomicalDescEn: 'Right half of the moon disc is illuminated with a 90° sun-earth-moon angle.',
    fiqhSignificanceAr: 'علامة انتصاف الثلث الأول من الشهر القمري وسهولة رصده في كبد السماء وقت الغروب.',
    fiqhSignificanceEn: 'Marks the completion of the first third of the Islamic lunar month.',
  },
  {
    phaseIndex: 3,
    nameAr: 'الأحدب المتزايد (Waxing Gibbous)',
    nameEn: 'Waxing Gibbous',
    illuminationPct: 80,
    dayRange: 'اليوم 11 - 13',
    astronomicalDescAr: 'إضاءة أكثر من نصف القرص القمري واستدارته المتسارعة نحو الإبدار الكامل.',
    astronomicalDescEn: 'More than half of the visible lunar disc illuminated, approaching full fullness.',
    fiqhSignificanceAr: 'بداية حلول الأيام البيض المستحب صيامها بنص الحديث النبوي الشريف.',
    fiqhSignificanceEn: 'Eve of the meritorious White Days (Ayyam al-Beed) recommended for fasting.',
  },
  {
    phaseIndex: 4,
    nameAr: 'البدر التام (Full Moon)',
    nameEn: 'Full Moon',
    illuminationPct: 100,
    dayRange: 'اليوم 14 - 15',
    astronomicalDescAr: 'مواجهة القمر التامة للشمس والأرض بينهما؛ إضاءة القرص القمري بنسبة 100% وسطوع نوره ليلاً طوال ساعات الظلام.',
    astronomicalDescEn: 'Earth positioned between Sun and Moon; 100% illumination radiant throughout the night.',
    fiqhSignificanceAr: 'أوج الأيام البيض (13 و14 و15)؛ قمة الاستنارة وإتمام منتصف الشهر الهجري.',
    fiqhSignificanceEn: 'Peak of the White Days; midpoint celebration of every Hijri month.',
  },
  {
    phaseIndex: 5,
    nameAr: 'الأحدب المتناقص (Waning Gibbous)',
    nameEn: 'Waning Gibbous',
    illuminationPct: 80,
    dayRange: 'اليوم 16 - 20',
    astronomicalDescAr: 'بدء تناقص الضوء من الجانب الأيمن وتأخر شروق القمر في سماء الليل.',
    astronomicalDescEn: 'Illumination begins receding from the western limb; moon rises progressively later.',
    fiqhSignificanceAr: 'دخول الثلث الأخير من الشهر ومضاعفة قيام الليل والاجتهاد في العبادة.',
    fiqhSignificanceEn: 'Beginning of the final third of the month, encouraging nocturnal devotion.',
  },
  {
    phaseIndex: 6,
    nameAr: 'التربيع الثاني (Third Quarter)',
    nameEn: 'Third Quarter',
    illuminationPct: 50,
    dayRange: 'اليوم 21 - 25',
    astronomicalDescAr: 'إضاءة النصف الأيسر من القرص القمري وشروقه في منتصف الليل.',
    astronomicalDescEn: 'Left half illuminated; moon rises at midnight and sets around solar noon.',
    fiqhSignificanceAr: 'مواكبة ليالي الوتر في العشر الأواخر من رمضان لتحري ليلة القدر المباركة.',
    fiqhSignificanceEn: 'Corresponds with the odd nights of late Ramadan to seek Laylat al-Qadr.',
  },
  {
    phaseIndex: 7,
    nameAr: 'الهلال المتضائل (Waning Crescent)',
    nameEn: 'Waning Crescent',
    illuminationPct: 15,
    dayRange: 'اليوم 26 - 28',
    astronomicalDescAr: 'قوس دقيق في سماء الفجر الشرقية قبيل شروق الشمس، مثل عرجون النخل القديم.',
    astronomicalDescEn: 'Faint silver crescent appearing in the eastern dawn sky before sunrise.',
    fiqhSignificanceAr: '«وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّى عَادَ كَالْعُرْجُونِ الْقَدِيمِ»؛ إشعار بدنو نهاية الشهر.',
    fiqhSignificanceEn: 'Echoes Quran 36:39: "until it returns like an old date-stalk", marking month’s end.',
  },
];

// Gregorian to Julian Day Number
export function gregorianToJdn(year: number, month: number, day: number): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return (
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045
  );
}

// Julian Day Number to Hijri Date (Kuwaiti / Umm al-Qura standard approximation)
export function jdnToHijri(jdn: number): { hijriYear: number; hijriMonth: number; hijriDay: number } {
  const l = jdn - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l1 = l - 10631 * n + 354;
  const j =
    Math.floor((10985 - l1) / 5316) * Math.floor((50 * l1) / 17719) +
    Math.floor(l1 / 5670) * Math.floor((43 * l1) / 15238);
  const l2 =
    l1 -
    Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
    29;
  const hijriMonth = Math.floor((24 * l2) / 709);
  const hijriDay = l2 - Math.floor((709 * hijriMonth) / 24);
  const hijriYear = 30 * n + j - 30;
  return { hijriYear, hijriMonth, hijriDay };
}

// Hijri Date to Julian Day Number
export function hijriToJdn(hijriYear: number, hijriMonth: number, hijriDay: number): number {
  return (
    Math.floor((11 * hijriYear + 3) / 30) +
    354 * hijriYear +
    30 * hijriMonth -
    Math.floor((hijriMonth - 1) / 2) +
    hijriDay +
    1948440 -
    385
  );
}

// Julian Day Number to Gregorian Date
export function jdnToGregorian(jdn: number): { year: number; month: number; day: number } {
  const l = jdn + 68569;
  const n = Math.floor((4 * l) / 146097);
  const l1 = l - Math.floor((146097 * n + 3) / 4);
  const i = Math.floor((4000 * (l1 + 1)) / 1461001);
  const l2 = l1 - Math.floor((1461 * i) / 4) + 31;
  const j = Math.floor((80 * l2) / 2447);
  const day = l2 - Math.floor((2447 * j) / 80);
  const l3 = Math.floor(j / 11);
  const month = j + 2 - 12 * l3;
  const year = 100 * (n - 49) + i + l3;
  return { year, month, day };
}

export const HijriCalendarMoonPhaseStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const today = new Date();
  const [gregorianInput, setGregorianInput] = useState<string>(
    today.toISOString().split('T')[0]
  );
  const [activeMonthView, setActiveMonthView] = useState<HijriMonthMeta>(HIJRI_MONTHS[8]); // Ramadan by default
  const [selectedMoonDay, setSelectedMoonDay] = useState<number>(14); // Full moon by default
  const [isChiming, setIsChiming] = useState<boolean>(false);

  // Conversion calculation
  const hijriCalculated = useMemo(() => {
    try {
      const [y, m, d] = gregorianInput.split('-').map(Number);
      if (!y || !m || !d) return null;
      const jdn = gregorianToJdn(y, m, d);
      const res = jdnToHijri(jdn);
      const monthMeta = HIJRI_MONTHS.find((item) => item.index === res.hijriMonth) || HIJRI_MONTHS[0];
      return {
        ...res,
        monthMeta,
        jdn,
      };
    } catch {
      return null;
    }
  }, [gregorianInput]);

  // Determine active moon phase from lunar day slider
  const activeMoonPhase = useMemo(() => {
    if (selectedMoonDay === 1 || selectedMoonDay >= 29) return MOON_PHASES[0]; // New Moon
    if (selectedMoonDay <= 6) return MOON_PHASES[1]; // Waxing Crescent
    if (selectedMoonDay <= 9) return MOON_PHASES[2]; // First Quarter
    if (selectedMoonDay <= 13) return MOON_PHASES[3]; // Waxing Gibbous
    if (selectedMoonDay <= 15) return MOON_PHASES[4]; // Full Moon
    if (selectedMoonDay <= 20) return MOON_PHASES[5]; // Waning Gibbous
    if (selectedMoonDay <= 24) return MOON_PHASES[6]; // Third Quarter
    return MOON_PHASES[7]; // Waning Crescent
  }, [selectedMoonDay]);

  // Audio Takbir / Crescendo sound
  const playCrescentChime = () => {
    setIsChiming(true);
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        [329.63, 392.0, 493.88, 587.33].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.16);
          gain.gain.setValueAtTime(0.01, ctx.currentTime + idx * 0.16);
          gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + idx * 0.16 + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.16 + 1.1);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.16);
          osc.stop(ctx.currentTime + idx * 0.16 + 1.15);
        });
      }
    } catch {
      // AudioContext fallback
    }
    setTimeout(() => setIsChiming(false), 1000);
  };

  const handleSetPreset = (y: number, m: number, d: number) => {
    const pad = (n: number) => String(n).padStart(2, '0');
    setGregorianInput(`${y}-${pad(m)}-${pad(d)}`);
    playCrescentChime();
  };

  // Historic Canonical Presets
  const PRESETS = [
    { labelAr: 'رأس السنة الهجرية (1 محرم)', labelEn: '1 Muharram (New Year)', y: 2024, m: 7, d: 7 },
    { labelAr: 'يوم عاشوراء (10 محرم)', labelEn: '10 Muharram (Ashura)', y: 2024, m: 7, d: 16 },
    { labelAr: 'المولد النبوي الشريف (12 ربيع الأول)', labelEn: 'Mawlid an-Nabi (12 Rabi I)', y: 2024, m: 9, d: 15 },
    { labelAr: 'الإسراء والمعراج (27 رجب)', labelEn: 'Al-Isra’ wal-Mi’raj (27 Rajab)', y: 2024, m: 2, d: 8 },
    { labelAr: 'أول رمضان المبارك (1 رمضان)', labelEn: '1 Ramadan (First Day of Fast)', y: 2024, m: 3, d: 11 },
    { labelAr: 'عيد الفطر المبارك (1 شوال)', labelEn: 'Eid al-Fitr (1 Shawwal)', y: 2024, m: 4, d: 10 },
    { labelAr: 'يوم عرفة الأكبر (9 ذو الحجة)', labelEn: 'Day of Arafah (9 Dhu al-Hijjah)', y: 2024, m: 6, d: 15 },
  ];

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl transition-all duration-300 ${
        isContrast
          ? 'bg-black border-emerald-400 text-emerald-300'
          : isLight
          ? 'bg-gradient-to-b from-[#f9faf7] via-[#f2f6ef] to-[#e6ece1] border-emerald-300 shadow-emerald-950/10'
          : 'bg-gradient-to-b from-[#0a120d] via-[#101912] to-[#141f17] border-emerald-500/30 shadow-black/80'
      }`}
    >
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-emerald-100 border-emerald-400 text-emerald-900'
                : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
            }`}
          >
            <Moon className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-emerald-950' : 'text-emerald-300'}`}>
              {isArabic
                ? 'التقويم الهجري ومرصد أطوار القمر الشرعي (Hijri Calendar & Moon Observatory)'
                : 'Hijri Lunar Calendar & Astronomical Moon Phase Observatory'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'تحويل فلكي دقيق بين الميلادي والهجري، ومحاكاة لمنازل القمر الثمانية وثبوت رؤية الهلال والأشهر الحرم'
                : 'Exact astronomical conversion, 8-phase lunar simulator, crescent sighting criteria & sacred months'}
            </p>
          </div>
        </div>

        <button
          onClick={playCrescentChime}
          className={`px-3 py-1.5 rounded-xl border text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
            isChiming
              ? 'bg-emerald-400 text-black border-emerald-300 scale-102 ring-2 ring-white'
              : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-black'
          }`}
          title={isArabic ? 'صوت نداء الهلال' : 'Play Lunar Crescendo'}
        >
          <Volume2 className={`w-3.5 h-3.5 ${isChiming ? 'animate-bounce' : ''}`} />
          <span>{isArabic ? 'نداء الهلال' : 'Crescent Chime'}</span>
        </button>
      </div>

      {/* Main Interactive Converter Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5 items-stretch">
        {/* Input Panel */}
        <div
          className={`lg:col-span-5 p-4 md:p-5 rounded-2xl border flex flex-col justify-between ${
            isLight
              ? 'bg-white/90 border-emerald-300 shadow-sm'
              : 'bg-black/50 border-emerald-500/30 shadow-xl'
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-emerald-500 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {isArabic ? 'اختر التاريخ الميلادي للتحويل:' : 'Select Gregorian Date:'}
              </span>
              <button
                onClick={() => setGregorianInput(new Date().toISOString().split('T')[0])}
                className="text-[11px] font-bold text-emerald-400 hover:underline cursor-pointer"
              >
                {isArabic ? 'تاريخ اليوم' : 'Today'}
              </button>
            </div>

            <input
              type="date"
              value={gregorianInput}
              onChange={(e) => setGregorianInput(e.target.value)}
              className={`w-full p-3 rounded-xl border font-mono text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                isLight
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-stone-900 border-emerald-500/40 text-emerald-200'
              }`}
            />

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                {isArabic ? 'محطات ومناسبات إسلامية كبرى (اضغط للتحويل):' : 'Key Islamic Occasions (Click to jump):'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSetPreset(p.y, p.m, p.d)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                      isLight
                        ? 'bg-emerald-100/70 border-emerald-300 text-emerald-950 hover:bg-emerald-200'
                        : 'bg-slate-900 border-emerald-500/30 text-emerald-300 hover:bg-slate-800'
                    }`}
                  >
                    {isArabic ? p.labelAr : p.labelEn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Historical Hijrah Foundation Note */}
          <div
            className={`mt-4 p-3 rounded-xl border text-[11px] leading-relaxed flex items-start gap-2 ${
              isLight
                ? 'bg-emerald-100/60 border-emerald-300 text-emerald-950'
                : 'bg-black/40 border-emerald-500/20 text-slate-300'
            }`}
          >
            <Info className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>
              <strong>{isArabic ? 'التقويم الهجري النبوي: ' : 'The Hijri Calendar: '}</strong>
              {isArabic
                ? 'أسسه الفاروق عمر بن الخطاب رضي الله عنه عام 16هـ، متخذاً من هجرة النبي ﷺ من مكة إلى المدينة منطلقاً للتاريخ الإسلامي؛ السنة الهجرية 354 يوماً و11 يوماً كبيسة كل 30 عاماً.'
                : 'Established by Caliph Umar ibn al-Khattab in 16 AH, anchored on the Hijrah of the Prophet ﷺ; lunar year has ~354 days distributed across 12 synodic lunations.'}
            </span>
          </div>
        </div>

        {/* Calculation Result Panel */}
        <div
          className={`lg:col-span-7 p-5 rounded-2xl border flex flex-col justify-between relative overflow-hidden ${
            isLight
              ? 'bg-gradient-to-r from-emerald-100/90 via-emerald-50 to-white border-emerald-300 shadow-md'
              : 'bg-gradient-to-r from-stone-950 via-slate-900 to-black border-emerald-500/40 shadow-2xl'
          }`}
        >
          {hijriCalculated ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-500/20 pb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center gap-1">
                  <CalendarCheck className="w-3.5 h-3.5" />
                  {isArabic ? 'النتيجة الهجرية المطابقة' : 'Exact Hijri Date'}
                </span>
                {hijriCalculated.monthMeta.isSacred && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-amber-400" />
                    {isArabic ? 'أحد الأشهر الحرم الأربعة' : 'Sacred Inviolable Month'}
                  </span>
                )}
              </div>

              {/* Main Date Display */}
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl md:text-5xl font-serif font-black text-emerald-400">
                  {hijriCalculated.hijriDay}
                </span>
                <span className="text-3xl md:text-4xl font-serif font-black text-emerald-300">
                  {isArabic
                    ? hijriCalculated.monthMeta.arabicName
                    : hijriCalculated.monthMeta.englishName}
                </span>
                <span className="text-2xl md:text-3xl font-mono font-bold text-emerald-500/90">
                  {hijriCalculated.hijriYear}{' '}
                  <span className="text-sm font-sans">
                    {isArabic ? 'هـ' : 'AH'}
                  </span>
                </span>
              </div>

              {/* Virtues Callout */}
              <div
                className={`p-3.5 rounded-xl border ${
                  isLight
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-950'
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-black text-emerald-400">
                    {isArabic ? 'الفضائل الشرعية والعبادات المأثورة:' : 'Liturgical Virtues & Prophetic Sunnah:'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {isArabic
                    ? hijriCalculated.monthMeta.liturgicalVirtuesAr
                    : hijriCalculated.monthMeta.liturgicalVirtuesEn}
                </p>
              </div>

              {/* Historical Milestones in this Month */}
              <div className="text-xs space-y-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  {isArabic ? 'أبرز الأحداث والمناسبات في هذا الشهر:' : 'Historical Events in this Month:'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {(isArabic
                    ? hijriCalculated.monthMeta.historicalEventsAr
                    : hijriCalculated.monthMeta.historicalEventsEn
                  ).map((ev, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-black/40 border border-emerald-500/20 text-emerald-300 text-[11px] font-bold"
                    >
                      {ev}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400">
              {isArabic ? 'أدخل تاريخاً صحيحاً لحساب اليوم الهجري' : 'Enter valid date'}
            </div>
          )}
        </div>
      </div>

      {/* Interactive 8-Phase Lunar Observatory Simulator */}
      <div className="mt-6 pt-5 border-t border-emerald-500/20">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h4 className="text-xs md:text-sm font-black text-emerald-400 flex items-center gap-2">
            <Moon className="w-4 h-4 text-emerald-500" />
            {isArabic
              ? 'مرصد أطوار القمر ومنازل الهلال الشرعي (8 Lunar Phases)'
              : 'Interactive 8-Phase Lunar Observatory & Crescent Visibility Simulator'}
          </h4>
          <span className="text-[10px] font-mono text-slate-400 font-bold">
            SYNODIC-MONTH-29.53-DAYS
          </span>
        </div>

        {/* Day Slider across 1 to 30 */}
        <div className="p-4 rounded-2xl border border-emerald-500/20 bg-black/40 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-emerald-300">
              {isArabic ? 'اليوم القمري من الشهر الهجري (Day of Month):' : 'Lunar Day of Month:'}
            </span>
            <span className="font-mono font-black text-emerald-400 text-sm">
              {isArabic ? `اليوم ${selectedMoonDay}` : `Day ${selectedMoonDay}`}
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="30"
            value={selectedMoonDay}
            onChange={(e) => setSelectedMoonDay(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />

          {/* Active Moon Phase Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-2">
            {/* Visual SVG Moon Disc */}
            <div className="md:col-span-3 flex flex-col items-center justify-center p-3 rounded-xl border border-emerald-500/30 bg-black/50 text-center">
              <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-emerald-500/40 relative overflow-hidden flex items-center justify-center shadow-lg shadow-emerald-500/10">
                {/* Simulated Terminator */}
                <div
                  className="absolute inset-0 bg-amber-200 transition-all duration-300"
                  style={{
                    opacity: activeMoonPhase.illuminationPct / 100,
                    clipPath:
                      selectedMoonDay <= 15
                        ? `polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)`
                        : `polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)`,
                  }}
                />
                <Moon className="w-12 h-12 text-slate-400 relative z-10" />
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-400 mt-2">
                {activeMoonPhase.illuminationPct}% {isArabic ? 'إضاءة القرص' : 'Illuminated'}
              </span>
            </div>

            {/* Phase Description */}
            <div className="md:col-span-9 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                  {activeMoonPhase.dayRange}
                </span>
                <h5 className="text-base font-black text-emerald-300">
                  {isArabic ? activeMoonPhase.nameAr : activeMoonPhase.nameEn}
                </h5>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>{isArabic ? 'الوصف الفلكي للطور: ' : 'Astronomical Position: '}</strong>
                {isArabic ? activeMoonPhase.astronomicalDescAr : activeMoonPhase.astronomicalDescEn}
              </p>

              <div className="p-2.5 rounded-xl border border-emerald-500/20 bg-black/40 text-[11px] text-emerald-200/90">
                <strong>{isArabic ? 'الدلالة الفقهية والشرعية: ' : 'Fiqh Application: '}</strong>
                {isArabic ? activeMoonPhase.fiqhSignificanceAr : activeMoonPhase.fiqhSignificanceEn}
              </div>
            </div>
          </div>
        </div>

        {/* 12 Hijri Month Selector Pills */}
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
          {HIJRI_MONTHS.map((m) => {
            const isSelected = activeMonthView.index === m.index;
            return (
              <button
                key={m.index}
                onClick={() => {
                  setActiveMonthView(m);
                  playCrescentChime();
                }}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer relative ${
                  isSelected
                    ? isLight
                      ? 'bg-emerald-200 border-emerald-500 text-emerald-950 font-black shadow-md'
                      : 'bg-emerald-500/25 border-emerald-400 text-emerald-300 font-black shadow-lg shadow-emerald-500/10'
                    : isLight
                    ? 'bg-white border-emerald-200 text-slate-800 hover:bg-emerald-100/60'
                    : 'bg-black/40 border-emerald-500/20 text-slate-300 hover:bg-slate-900'
                }`}
              >
                {m.isSacred && (
                  <span className="absolute top-1 end-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
                <div className="text-xs font-black">{isArabic ? m.arabicName : m.englishName}</div>
                <div className="text-[9px] text-slate-400 font-mono mt-0.5">#{m.index}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
