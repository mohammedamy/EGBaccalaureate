import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Sun,
  CloudRain,
  Wheat,
  Sparkles,
  Info,
  Clock,
  Volume2,
  CalendarCheck,
  Flame,
} from 'lucide-react';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface CopticMonthMeta {
  index: number; // 1 to 13
  copticName: string;
  arabicName: string;
  englishName: string;
  season: 'akhet' | 'peret' | 'shemu';
  seasonNameAr: string;
  seasonNameEn: string;
  pharaonicDeityAr: string;
  pharaonicDeityEn: string;
  proverbAr: string;
  proverbEn: string;
  proverbMeaningAr: string;
  proverbMeaningEn: string;
  daysCount: number; // 30 or 5-6
  majorFeastsAr: string[];
  majorFeastsEn: string[];
}

export const COPTIC_MONTHS: CopticMonthMeta[] = [
  {
    index: 1,
    copticName: 'Ⲑⲱⲟⲩⲧ',
    arabicName: 'توت',
    englishName: 'Thout / Tout',
    season: 'akhet',
    seasonNameAr: 'فصل آخت (الفيضان والري)',
    seasonNameEn: 'Akhet (Inundation & Flooding)',
    pharaonicDeityAr: 'منسوب لـ "تحوت" إله الحكمة والعلم والمعرفة ومخترع الكتابة عند قدماء المصريين.',
    pharaonicDeityEn: 'Dedicated to Thoth, ancient Egyptian god of wisdom and inventor of writing.',
    proverbAr: '«توت ري ولا تفوت»',
    proverbEn: '"Thout: saturate the fields with the Nile flood and skip no parcel"',
    proverbMeaningAr: 'دعوة للفلاح المصري بري كافة الأراضي الزراعية بفيضان النيل المبارك الذي يبلغ ذروته في هذا الشهر.',
    proverbMeaningEn: 'Instructs the Egyptian farmer to irrigate all fields during the Nile flood peak.',
    daysCount: 30,
    majorFeastsAr: ['1 توت: عيد النيروز رأس السنة القبطية للشهداء', '17 توت: عيد ظهور الصليب المقدس'],
    majorFeastsEn: ['1 Thout: Feast of Nayrouz (Coptic New Year of the Martyrs)', '17 Thout: Feast of the Holy Cross'],
  },
  {
    index: 2,
    copticName: 'Ⲡⲁⲱⲡⲉ',
    arabicName: 'بابه',
    englishName: 'Paopi / Baba',
    season: 'akhet',
    seasonNameAr: 'فصل آخت (الفيضان والري)',
    seasonNameEn: 'Akhet (Inundation & Flooding)',
    pharaonicDeityAr: 'منسوب لـ "حابي" أو عيد الأوبت (Opet) إله النيل والخصوبة.',
    pharaonicDeityEn: 'Derived from Hapi or the Opet festival honoring Nile fertility.',
    proverbAr: '«بابه خش واقفل البوابة»',
    proverbEn: '"Baba: step indoors and latch the gate"',
    proverbMeaningAr: 'بدء هبوب الرياح الباردة وتناقص ساعات النهار، فيغلق الفلاح بوابات منزله طلباً للدفء.',
    proverbMeaningEn: 'Signifies early autumn chill and falling night temperatures, prompting farmers to shut their gates.',
    daysCount: 30,
    majorFeastsAr: ['تكريس كنيسة مار مرقس الرسول بالإسكندرية'],
    majorFeastsEn: ['Consecration of St. Mark the Apostle Cathedral in Alexandria'],
  },
  {
    index: 3,
    copticName: 'Ϩⲁⲑⲱⲣ',
    arabicName: 'هاتور',
    englishName: 'Hathor / Athyr',
    season: 'akhet',
    seasonNameAr: 'فصل آخت (الفيضان والري)',
    seasonNameEn: 'Akhet (Inundation & Flooding)',
    pharaonicDeityAr: 'منسوب للإلهة "حتحور" رمز الجمال والخصوبة والمحبة عند قدماء المصريين.',
    pharaonicDeityEn: 'Dedicated to Hathor, ancient Egyptian goddess of fertility, sky, and grace.',
    proverbAr: '«هاتور أبو الدهب منثور»',
    proverbEn: '"Hathor: scatterer of the golden wheat grain"',
    proverbMeaningAr: 'موسم بذر حبوب القمح الذهبية في الطمي النيلي الخصب؛ والذهب هنا هو حبوب القمح سنابل الخير.',
    proverbMeaningEn: 'The season for sowing golden wheat grains into rich Nile silt.',
    daysCount: 30,
    majorFeastsAr: ['16 هاتور: بدء صوم الميلاد المجيد (43 يوماً)', '24 هاتور: عيد الشهيد مار جرجس'],
    majorFeastsEn: ['16 Hathor: Beginning of the Nativity Fast (43 Days)', '24 Hathor: Feast of St. George'],
  },
  {
    index: 4,
    copticName: 'Ⲭⲟⲓⲁⲕ',
    arabicName: 'كيهك',
    englishName: 'Kiahk / Choiak',
    season: 'akhet',
    seasonNameAr: 'فصل آخت (الفيضان والري)',
    seasonNameEn: 'Akhet (Inundation & Flooding)',
    pharaonicDeityAr: 'منسوب لـ "كا-حر-كا" (قرين مع قرين) وأعياد الإله أوزوريس لعودة الحياة للطبيعة.',
    pharaonicDeityEn: 'Derived from "Ka-her-Ka", sacred feast celebrating revival and germination.',
    proverbAr: '«كيهك صباحك مساك، تقوم من فرشتك تحضر عشاك»',
    proverbEn: '"Kiahk: morning turns swiftly to evening, prepare dinner soon after waking"',
    proverbMeaningAr: 'أقصر أيام السنة نهاراً وأطولها ليلاً، ويشتهر بالتسابيح الكيهكية الساهرة ومدائح السيدة العذراء «سبعة وأربعة».',
    proverbMeaningEn: 'The shortest days and longest nights of the year, marked by night-long Marian choral vigil odes.',
    daysCount: 30,
    majorFeastsAr: ['29 كيهك: عيد الميلاد المجيد (7 يناير)', 'التسابيح الكيهكية الساهرة'],
    majorFeastsEn: ['29 Kiahk: Feast of the Glorious Nativity (January 7)', 'Night Vigil Marian Theotokias'],
  },
  {
    index: 5,
    copticName: 'Ⲧⲱⲃⲓ',
    arabicName: 'طوبة',
    englishName: 'Toba / Tybi',
    season: 'peret',
    seasonNameAr: 'فصل برت (البذر والنماء)',
    seasonNameEn: 'Peret (Growth & Emergence)',
    pharaonicDeityAr: 'منسوب لـ "أمسو" أو "طوبيا" إله المطر والزوابع وقوى الطبيعة الشتوية.',
    pharaonicDeityEn: 'Dedicated to Amsu / Toubi, god of winter storms and precipitation.',
    proverbAr: '«طوبة تخلي الصبية كركوبة»',
    proverbEn: '"Toba makes the young maiden hunch like an elder with frost"',
    proverbMeaningAr: 'أبرد شهور العام صقيعاً وبرودة في مصر، تشتد فيه الرياح وتكتسي المزارع بالخضرة النامية.',
    proverbMeaningEn: 'The coldest month in Egypt with severe winter chills and thriving green crops.',
    daysCount: 30,
    majorFeastsAr: ['11 طوبة: عيد الغطاس المجيد (19 يناير)', '13 طوبة: عيد عرس قانا الجليل'],
    majorFeastsEn: ['11 Toba: Feast of Epiphany / Theophany (January 19)', '13 Toba: Wedding at Cana of Galilee'],
  },
  {
    index: 6,
    copticName: 'Ⲙⲉϣⲓⲣ',
    arabicName: 'أمشير',
    englishName: 'Amshir / Mechir',
    season: 'peret',
    seasonNameAr: 'فصل برت (البذر والنماء)',
    seasonNameEn: 'Peret (Growth & Emergence)',
    pharaonicDeityAr: 'منسوب للإله "مخير" إله الرياح والعواصف العاتية عند قدماء المصريين.',
    pharaonicDeityEn: 'Derived from Mechir, ancient Egyptian deity of turbulent winds and gusts.',
    proverbAr: '«أمشير أبو الزعابيب الكتير، ياخد العجوزة ويطير»',
    proverbEn: '"Amshir of tempestuous whirlwinds, lifting dust and roaring wild"',
    proverbMeaningAr: 'تقلبات الطقس وهبوب رياح الزعابيب المحملة بالأتربة تمهيداً لحلول فصل الربيع.',
    proverbMeaningEn: 'Volatile gusty spring winds and dust storms heralding the change of season.',
    daysCount: 30,
    majorFeastsAr: ['8 أمشير: عيد دخول السيد المسيح إلى الهيكل', 'عيد نياحة القديس أنبا أنطونيوس'],
    majorFeastsEn: ['8 Amshir: Presentation of Christ in the Temple', 'Departure of St. Antony the Great'],
  },
  {
    index: 7,
    copticName: 'Ⲡⲁⲣⲉⲙϩⲁⲧ',
    arabicName: 'برمهات',
    englishName: 'Baramhat / Phamenoth',
    season: 'peret',
    seasonNameAr: 'فصل برت (البذر والنماء)',
    seasonNameEn: 'Peret (Growth & Emergence)',
    pharaonicDeityAr: 'منسوب للملك "أمنمحات" الثالث باني مقاييس النيل وسد اللاهون بالفيوم.',
    pharaonicDeityEn: 'Named after Pharaoh Amenemhat III, royal architect of Fayum irrigation works.',
    proverbAr: '«برمهات روح الغيط وهات»',
    proverbEn: '"Baramhat: head out to the fertile orchard and gather fresh produce"',
    proverbMeaningAr: 'نضج المحاصيل الشتوية والخضروات الباكرة واعتدال الطقس وازدهار الطبيعة.',
    proverbMeaningEn: 'Maturity of spring vegetables and orchards, marking mild pleasant weather.',
    daysCount: 30,
    majorFeastsAr: ['10 برمهات: عيد ظهور الصليب المقدس', '29 برمهات: عيد البشارة المجيد'],
    majorFeastsEn: ['10 Baramhat: Manifestation of the Holy Cross', '29 Baramhat: Feast of the Annunciation'],
  },
  {
    index: 8,
    copticName: 'Ⲫⲁⲣⲙⲟⲩⲑⲓ',
    arabicName: 'برمودة',
    englishName: 'Baramouda / Pharmouthi',
    season: 'peret',
    seasonNameAr: 'فصل برت (البذر والنماء)',
    seasonNameEn: 'Peret (Growth & Emergence)',
    pharaonicDeityAr: 'منسوب للإلهة "رينوتت" إلهة الحصاد ومخازن الغلال عند قدماء المصريين.',
    pharaonicDeityEn: 'Dedicated to Renenutet, goddess of harvest, granaries, and nourishment.',
    proverbAr: '«برمودة دق العامودة»',
    proverbEn: '"Baramouda: thresh the harvested wheat sheaves at the center pillar"',
    proverbMeaningAr: 'موسم حصاد سنابل القمح الكبرى ودراستها في الجرن حول العمود الأوسط وتخزين المؤونة.',
    proverbMeaningEn: 'Main wheat harvesting season with threshing around the threshing floor pillar.',
    daysCount: 30,
    majorFeastsAr: ['أسبوع الآلام وعيد القيامة المجيد (غالباً في برمودة)'],
    majorFeastsEn: ['Holy Pascha Week and Feast of the Glorious Resurrection'],
  },
  {
    index: 9,
    copticName: 'Ⲡⲁϣⲟⲛⲥ',
    arabicName: 'بشنس',
    englishName: 'Bashans / Pachons',
    season: 'shemu',
    seasonNameAr: 'فصل شمو (الحصاد والجفاف)',
    seasonNameEn: 'Shemu (Harvest & Low Water)',
    pharaonicDeityAr: 'منسوب للإله "خونسو" إله القمر والمسافرين في سماء طيبة.',
    pharaonicDeityEn: 'Derived from Khonsu, Theban lunar god and nocturnal traveler.',
    proverbAr: '«بشنس يكنس الغيط كنس»',
    proverbEn: '"Bashans sweeps the farm fields clean of all remaining straw"',
    proverbMeaningAr: 'اكتمال جمع المحاصيل وتنظيف الأرض من القش والشوائب وتجهيزها للحرث الصيفي.',
    proverbMeaningEn: 'Completion of crop harvesting and sweeping remaining stubble from fields.',
    daysCount: 30,
    majorFeastsAr: ['24 بشنس: عيد دخول السيد المسيح أرض مصر مع العائلة المقدسة (1 يونيو)'],
    majorFeastsEn: ['24 Bashans: Entry of Christ into Egypt with the Holy Family (June 1)'],
  },
  {
    index: 10,
    copticName: 'Ⲡⲁⲱⲛⲓ',
    arabicName: 'بؤونة',
    englishName: 'Baona / Paoni',
    season: 'shemu',
    seasonNameAr: 'فصل شمو (الحصاد والجفاف)',
    seasonNameEn: 'Shemu (Harvest & Low Water)',
    pharaonicDeityAr: 'منسوب لـ "با-أوني" (عيد الوادي الجميل) للإله آمون بالأقصر وطيبة القديمة.',
    pharaonicDeityEn: 'Derived from Pa-oni (Beautiful Feast of the Valley) in ancient Thebes.',
    proverbAr: '«بؤونة فلق الحجر، ينشف الشجر ويخزن المية»',
    proverbEn: '"Baona cracks stone with heat, dries up foliage and husbands water"',
    proverbMeaningAr: 'اشتداد القيظ والحرارة الصيفية العالية، مما يجبر الفلاحين على ري المزروعات فجراً.',
    proverbMeaningEn: 'Peak summer scorching heat that cracks dry soil and requires dawn irrigation.',
    daysCount: 30,
    majorFeastsAr: ['تذكار تكريس أول كنيسة باسم الشهيد مار جرجس'],
    majorFeastsEn: ['Consecration of the first church of St. George'],
  },
  {
    index: 11,
    copticName: 'Ⲉⲡⲏⲡ',
    arabicName: 'أبيب',
    englishName: 'Abib / Epiphi',
    season: 'shemu',
    seasonNameAr: 'فصل شمو (الحصاد والجفاف)',
    seasonNameEn: 'Shemu (Harvest & Low Water)',
    pharaonicDeityAr: 'منسوب لـ "أبيبي" (أبوفيس ثعبان الجفاف والشر) وانتصار حورس عليه.',
    pharaonicDeityEn: 'Named after Apep / Apophis, symbolizing victory of light over drought.',
    proverbAr: '«أبيب طباخ العنب والزبيب»',
    proverbEn: '"Abib: ripen-cooker of grapes and sun-sweetened raisins"',
    proverbMeaningAr: 'نضج العنب الصيفي والتين والمحاصيل البستانية الحلوة تحت أشعة الشمس المصرية الدافئة.',
    proverbMeaningEn: 'Ripening of Egyptian summer grapes, figs, and conversion into dried raisins.',
    daysCount: 30,
    majorFeastsAr: ['5 أبيب: عيد استشهاد القديسين بطرس وبولس الرسولين (عيد الرسل)'],
    majorFeastsEn: ['5 Abib: Feast of the Apostles Peter and Paul'],
  },
  {
    index: 12,
    copticName: 'Ⲙⲉⲥⲱⲣⲏ',
    arabicName: 'مسرى',
    englishName: 'Mesra / Mesori',
    season: 'shemu',
    seasonNameAr: 'فصل شمو (الحصاد والجفاف)',
    seasonNameEn: 'Shemu (Harvest & Low Water)',
    pharaonicDeityAr: 'منسوب لـ "مسو-رع" (ولادة رع إله الشمس الساطع).',
    pharaonicDeityEn: 'Derived from Mesu-Ra, signifying the birth of Ra the radiant sun.',
    proverbAr: '«مسرى تجري فيه كل ترعة عسرة»',
    proverbEn: '"Mesra fills even the highest and most difficult irrigation canals"',
    proverbMeaningAr: 'عيد وفاء النيل وارتفاع منسوب مياه النيل وامتلاء كافة الترع والخلجان بمياه الفيضان المباركة.',
    proverbMeaningEn: 'The traditional "Wafaa El-Nil" season when rising waters fill all canals.',
    daysCount: 30,
    majorFeastsAr: ['16 مسرى: عيد صعود جسد القديسة العذراء مريم (22 أغسطس)'],
    majorFeastsEn: ['16 Mesra: Assumption of the Body of the Virgin Mary (August 22)'],
  },
  {
    index: 13,
    copticName: 'Ⲡⲓⲕⲟⲩϫⲓ ⲛ̀ⲁ̀ⲃⲟⲧ',
    arabicName: 'النسيء (الشهر الصغير)',
    englishName: 'Nasie / Pi Kogi Enavot',
    season: 'shemu',
    seasonNameAr: 'أيام التوبة والتسبيح الختامية',
    seasonNameEn: 'The Epagomenal Days of Repentance',
    pharaonicDeityAr: 'الأيام الخمسة الإضافية (ستة في السنة الكبيسة) التي وهبها تحوت لولادة الآلهة الخمسة.',
    pharaonicDeityEn: 'The 5 epagomenal days (6 in leap years) won by Thoth to balance the solar year.',
    proverbAr: '«أيام النسئ الخمسة كمالة السنة»',
    proverbEn: '"The five little days of Nasie complete the solar ring"',
    proverbMeaningAr: 'أيام ختام السنة القبطية وصوم وتسبيح وتهيئة النفوس لاستقبال النيروز القبطي الجديد.',
    proverbMeaningEn: 'The year-end days of vigil, fasting, and spiritual preparation for the Nayrouz.',
    daysCount: 5, // 6 in leap year
    majorFeastsAr: ['صوم وتسبيح ختام العام القبطي والاستعداد للنيروز المجيد'],
    majorFeastsEn: ['Year-end vigil prayers and festive eve of Nayrouz'],
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

// Julian Day Number to Coptic Date
export function jdnToCoptic(jdn: number): { copticYear: number; copticMonth: number; copticDay: number } {
  const copticDayCount = jdn - 1824665;
  const copticYear = 1 + Math.floor((4 * copticDayCount + 3) / 1461);
  const dayOfYear = copticDayCount - Math.floor((1461 * (copticYear - 1)) / 4);
  const copticMonth = 1 + Math.floor(dayOfYear / 30);
  const copticDay = 1 + (dayOfYear % 30);
  return { copticYear, copticMonth, copticDay };
}

// Coptic Date to Julian Day Number
export function copticToJdn(copticYear: number, copticMonth: number, copticDay: number): number {
  const copticDayCount =
    Math.floor((1461 * (copticYear - 1)) / 4) + 30 * (copticMonth - 1) + (copticDay - 1);
  return copticDayCount + 1824665;
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

export const CopticCalendarConverter: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  // Today's date default
  const today = new Date();
  const [gregorianInput, setGregorianInput] = useState<string>(
    today.toISOString().split('T')[0]
  );
  const [activeMonthView, setActiveMonthView] = useState<CopticMonthMeta>(COPTIC_MONTHS[0]);
  const [isChiming, setIsChiming] = useState(false);

  // Conversion calculation
  const copticCalculated = useMemo(() => {
    try {
      const [y, m, d] = gregorianInput.split('-').map(Number);
      if (!y || !m || !d) return null;
      const jdn = gregorianToJdn(y, m, d);
      const res = jdnToCoptic(jdn);
      const monthMeta = COPTIC_MONTHS.find((item) => item.index === res.copticMonth) || COPTIC_MONTHS[0];
      return {
        ...res,
        monthMeta,
        jdn,
      };
    } catch {
      return null;
    }
  }, [gregorianInput]);

  // Audio church chime chime generator
  const playChurchChime = () => {
    setIsChiming(true);
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        // Play three-tone bell sequence (Coptic liturgical triad)
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.18);
          gain.gain.setValueAtTime(0.01, ctx.currentTime + idx * 0.18);
          gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + idx * 0.18 + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.18 + 0.9);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.18);
          osc.stop(ctx.currentTime + idx * 0.18 + 0.95);
        });
      }
    } catch {
      // AudioContext fallback
    }
    setTimeout(() => setIsChiming(false), 900);
  };

  const handleSetPreset = (y: number, m: number, d: number) => {
    const pad = (n: number) => String(n).padStart(2, '0');
    setGregorianInput(`${y}-${pad(m)}-${pad(d)}`);
    playChurchChime();
  };

  // Preset Feasts (2024–2026 Canonical Reference)
  const PRESETS = [
    { labelAr: 'عيد النيروز القبطي (1 توت)', labelEn: 'Nayrouz (1 Thout)', y: 2024, m: 9, d: 11 },
    { labelAr: 'عيد الميلاد المجيد (29 كيهك)', labelEn: 'Nativity (29 Kiahk)', y: 2024, m: 1, d: 7 },
    { labelAr: 'عيد الغطاس المجيد (11 طوبة)', labelEn: 'Epiphany (11 Toba)', y: 2024, m: 1, d: 19 },
    { labelAr: 'دخول المسيح مصر (24 بشنس)', labelEn: 'Flight to Egypt (24 Bashans)', y: 2024, m: 6, d: 1 },
    { labelAr: 'عيد الصليب (17 توت)', labelEn: 'Holy Cross (17 Thout)', y: 2024, m: 9, d: 27 },
  ];

  const getSeasonIcon = (season: 'akhet' | 'peret' | 'shemu') => {
    switch (season) {
      case 'akhet':
        return <CloudRain className="w-4 h-4 text-blue-400" />;
      case 'peret':
        return <Wheat className="w-4 h-4 text-emerald-400" />;
      case 'shemu':
      default:
        return <Sun className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fefbf6] via-[#f7f2e7] to-[#ede1ce] border-amber-300 shadow-amber-950/15'
          : 'bg-gradient-to-b from-[#0f1118] via-[#14121a] to-[#1a1510] border-amber-500/30 shadow-black/80'
      }`}
    >
      {/* Title & Introduction */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-amber-100 border-amber-400 text-amber-900'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}
          >
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {isArabic
                ? 'التقويم القبطي والسنكسار الليتورجي (تقويم الشهداء ۲۸٤م)'
                : 'Coptic Liturgical Calendar & Synaxarium (Era of the Martyrs 284 AD)'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'التقويم الزراعي المصري القديم المكون من 13 شهراً، يوثق الأعياد الكبرى والأمثال الشعبية المأثورة'
                : 'The 13-month ancient Egyptian agricultural calendar with liturgical feasts & agrarian folklore'}
            </p>
          </div>
        </div>

        <button
          onClick={playChurchChime}
          className={`px-3 py-1.5 rounded-xl border text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
            isChiming
              ? 'bg-amber-400 text-black border-amber-300 scale-102 ring-2 ring-white'
              : 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-black'
          }`}
          title={isArabic ? 'قرع ناقوس الكنيسة' : 'Ring Liturgical Chime'}
        >
          <Volume2 className={`w-3.5 h-3.5 ${isChiming ? 'animate-bounce' : ''}`} />
          <span>{isArabic ? 'ناقوس الأعياد' : 'Bell Chime'}</span>
        </button>
      </div>

      {/* Main Interactive Converter Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5 items-stretch">
        {/* Input Panel */}
        <div
          className={`lg:col-span-5 p-4 md:p-5 rounded-2xl border flex flex-col justify-between ${
            isLight
              ? 'bg-white/90 border-amber-300 shadow-sm'
              : 'bg-black/50 border-amber-500/30 shadow-xl'
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {isArabic ? 'اختر التاريخ الميلادي للتحويل:' : 'Select Gregorian Date:'}
              </span>
              <button
                onClick={() => setGregorianInput(new Date().toISOString().split('T')[0])}
                className="text-[11px] font-bold text-amber-400 hover:underline cursor-pointer"
              >
                {isArabic ? 'تاريخ اليوم' : 'Today'}
              </button>
            </div>

            {/* Date Input Field */}
            <input
              type="date"
              value={gregorianInput}
              onChange={(e) => setGregorianInput(e.target.value)}
              className={`w-full p-3 rounded-xl border font-mono text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                isLight
                  ? 'bg-amber-50 border-amber-300 text-amber-950'
                  : 'bg-stone-900 border-amber-500/40 text-amber-200'
              }`}
            />

            {/* Quick Presets Buttons */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                {isArabic ? 'أعياد كنسية نموذجية (اضغط للتحويل):' : 'Key Liturgical Feasts (Click to jump):'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSetPreset(p.y, p.m, p.d)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                      isLight
                        ? 'bg-amber-100/70 border-amber-300 text-amber-950 hover:bg-amber-200'
                        : 'bg-slate-900 border-amber-500/30 text-amber-300 hover:bg-slate-800'
                    }`}
                  >
                    {isArabic ? p.labelAr : p.labelEn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Historical Era of Martyrs Note */}
          <div
            className={`mt-4 p-3 rounded-xl border text-[11px] leading-relaxed flex items-start gap-2 ${
              isLight
                ? 'bg-amber-100/60 border-amber-300 text-amber-950'
                : 'bg-black/40 border-amber-500/20 text-slate-300'
            }`}
          >
            <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong>{isArabic ? 'تقويم الشهداء (Anno Martyrum): ' : 'Era of the Martyrs: '}</strong>
              {isArabic
                ? 'يبدأ في 29 أغسطس 284م تقديراً لشجاعة شهداء مصر في عهد الإمبراطور دقلديانوس؛ السنة القبطية 365 يوماً وربع اليوم، وتوزع على 12 شهراً × 30 يوماً + 5 أيام نسيء (6 في الكبيسة).'
                : 'Commemorates Egyptian martyrs under Diocletian (284 AD); 12 months of 30 days + 5 epagomenal days (6 in leap years).'}
            </span>
          </div>
        </div>

        {/* Calculation Result Panel */}
        <div
          className={`lg:col-span-7 p-5 rounded-2xl border flex flex-col justify-between relative overflow-hidden ${
            isLight
              ? 'bg-gradient-to-r from-amber-100/90 via-amber-50 to-white border-amber-300 shadow-md'
              : 'bg-gradient-to-r from-stone-950 via-slate-900 to-black border-amber-500/40 shadow-2xl'
          }`}
        >
          {copticCalculated ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center gap-1">
                  <CalendarCheck className="w-3.5 h-3.5" />
                  {isArabic ? 'النتيجة القبطية المطابقة' : 'Exact Coptic Date'}
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  JDN {copticCalculated.jdn}
                </span>
              </div>

              {/* Main Date Display */}
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl md:text-5xl font-serif font-black text-amber-400">
                  {copticCalculated.copticDay}
                </span>
                <span className="text-3xl md:text-4xl font-serif font-black text-amber-300">
                  {isArabic
                    ? copticCalculated.monthMeta.arabicName
                    : copticCalculated.monthMeta.englishName}
                </span>
                <span className="text-2xl md:text-3xl font-mono font-bold text-amber-500/90">
                  {copticCalculated.copticYear}{' '}
                  <span className="text-sm font-sans">
                    {isArabic ? 'للشهداء (ش)' : 'A.M.'}
                  </span>
                </span>
              </div>

              {/* Coptic Font Rendering */}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-serif font-black text-amber-400/90">
                  {copticCalculated.monthMeta.copticName}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/40 border border-amber-500/30 text-amber-300">
                  Month #{copticCalculated.copticMonth} / 13
                </span>
              </div>

              {/* Egyptian Agrarian Proverb Callout */}
              <div
                className={`p-3.5 rounded-xl border ${
                  isLight
                    ? 'bg-amber-100 border-amber-300 text-amber-950'
                    : 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-black text-amber-400">
                    {isArabic ? 'المثل الزراعي والشعبي المأثور:' : 'Ancient Egyptian Agrarian Proverb:'}
                  </span>
                </div>
                <div className="text-sm md:text-base font-black text-amber-300">
                  {isArabic
                    ? copticCalculated.monthMeta.proverbAr
                    : copticCalculated.monthMeta.proverbEn}
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {isArabic
                    ? copticCalculated.monthMeta.proverbMeaningAr
                    : copticCalculated.monthMeta.proverbMeaningEn}
                </p>
              </div>

              {/* Pharaonic & Seasonal Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div
                  className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                    isLight ? 'bg-white border-amber-200' : 'bg-black/40 border-amber-500/20'
                  }`}
                >
                  {getSeasonIcon(copticCalculated.monthMeta.season)}
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold">
                      {isArabic ? 'الفصل الزراعي المصري:' : 'Egyptian Agrarian Season:'}
                    </span>
                    <span className="font-bold text-amber-300">
                      {isArabic
                        ? copticCalculated.monthMeta.seasonNameAr
                        : copticCalculated.monthMeta.seasonNameEn}
                    </span>
                  </div>
                </div>

                <div
                  className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                    isLight ? 'bg-white border-amber-200' : 'bg-black/40 border-amber-500/20'
                  }`}
                >
                  <Flame className="w-4 h-4 text-amber-500" />
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold">
                      {isArabic ? 'الأصل اللغوي والتاريخي:' : 'Etymological Root:'}
                    </span>
                    <span className="font-medium text-[11px] text-slate-300 line-clamp-1">
                      {isArabic
                        ? copticCalculated.monthMeta.pharaonicDeityAr
                        : copticCalculated.monthMeta.pharaonicDeityEn}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400">
              {isArabic ? 'أدخل تاريخاً صحيحاً لحساب اليوم القبطي' : 'Enter valid date'}
            </div>
          )}
        </div>
      </div>

      {/* 13 Coptic Months Catalog & Explorer */}
      <div className="mt-6 pt-5 border-t border-amber-500/20">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h4 className="text-xs md:text-sm font-black text-amber-400 flex items-center gap-2">
            <Wheat className="w-4 h-4 text-amber-500" />
            {isArabic
              ? 'دليل الشهور القبطية الثلاثة عشر (الأعياد والأصل الفرعوني)'
              : 'The 13 Coptic Months Encyclopedia (Liturgical Feasts & Deities)'}
          </h4>
          <span className="text-[10px] font-mono text-slate-400 font-bold">
            13 COPTIC MONTHS
          </span>
        </div>

        {/* Month Selector Pills */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-2">
          {COPTIC_MONTHS.map((m) => {
            const isSelected = activeMonthView.index === m.index;
            return (
              <button
                key={m.index}
                onClick={() => {
                  setActiveMonthView(m);
                  playChurchChime();
                }}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? isLight
                      ? 'bg-amber-200 border-amber-500 text-amber-950 font-black shadow-md'
                      : 'bg-amber-500/25 border-amber-400 text-amber-300 font-black shadow-lg shadow-amber-500/10'
                    : isLight
                    ? 'bg-white border-amber-200 text-slate-800 hover:bg-amber-100/60'
                    : 'bg-black/40 border-amber-500/20 text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="text-xs font-black">{isArabic ? m.arabicName : m.englishName}</div>
                <div className="text-[10px] font-serif text-amber-400 mt-0.5">{m.copticName}</div>
                <div className="text-[9px] text-slate-400 font-mono mt-0.5">#{m.index}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Month Detail Card */}
        <div
          className={`mt-4 p-4 md:p-5 rounded-2xl border transition-all ${
            isLight
              ? 'bg-white/90 border-amber-300 text-slate-900 shadow-sm'
              : 'bg-slate-900/60 border-amber-500/30 text-slate-200 shadow-xl'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-4 space-y-2 border-e border-amber-500/20 pe-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif font-black text-amber-400">
                  {activeMonthView.copticName}
                </span>
                <div>
                  <h5 className="text-base font-black text-amber-300">
                    {isArabic ? activeMonthView.arabicName : activeMonthView.englishName}
                  </h5>
                  <span className="text-[10px] font-mono text-slate-400">
                    {activeMonthView.daysCount} {isArabic ? 'يوماً' : 'days'}
                  </span>
                </div>
              </div>

              <div className="text-xs text-amber-400 font-black pt-1">
                {isArabic ? activeMonthView.proverbAr : activeMonthView.proverbEn}
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isArabic
                  ? activeMonthView.proverbMeaningAr
                  : activeMonthView.proverbMeaningEn}
              </p>
            </div>

            <div className="md:col-span-8 space-y-3">
              <div>
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block">
                  {isArabic ? 'الأصل في مصر القديمة:' : 'Ancient Egyptian Root:'}
                </span>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  {isArabic
                    ? activeMonthView.pharaonicDeityAr
                    : activeMonthView.pharaonicDeityEn}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block">
                  {isArabic ? 'أبرز الأعياد والمناسبات الليتورجية في هذا الشهر:' : 'Major Liturgical Feasts in this Month:'}
                </span>
                <ul className="mt-1 space-y-1">
                  {(isArabic ? activeMonthView.majorFeastsAr : activeMonthView.majorFeastsEn).map(
                    (f, i) => (
                      <li
                        key={i}
                        className="text-xs font-bold text-amber-300 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
