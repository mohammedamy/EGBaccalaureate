// src/data/audioLab/musicLabData.ts

export interface QuarterTonePitch {
  note: string;
  arabicName: string;
  frequency: number; // Hz (A4 = 440 Hz)
  accidental: '' | '#' | 'b' | 'half-sharp' | 'half-flat';
  westernCents: number;
}

// 24-EDO Equal Temperament: 24 steps per octave (50 cents per step)
// Base C4 = 261.6256 Hz
export const QUARTER_TONE_PITCHES: QuarterTonePitch[] = [
  { note: 'C4', arabicName: 'راست (دو)', frequency: 261.63, accidental: '', westernCents: 0 },
  { note: 'C+4', arabicName: 'نيم زركولاه (دو نصف دييز)', frequency: 269.29, accidental: 'half-sharp', westernCents: 50 },
  { note: 'C#4', arabicName: 'زركولاه (دو دييز)', frequency: 277.18, accidental: '#', westernCents: 100 },
  { note: 'D-4', arabicName: 'نيم دوكاه (ري نصف بيمول)', frequency: 285.30, accidental: 'half-flat', westernCents: 150 },
  { note: 'D4', arabicName: 'دوكاه (ري)', frequency: 293.66, accidental: '', westernCents: 200 },
  { note: 'D+4', arabicName: 'نيم سيكاه (ري نصف دييز)', frequency: 302.27, accidental: 'half-sharp', westernCents: 250 },
  { note: 'Eb4', arabicName: 'كردي (مي بيمول)', frequency: 311.13, accidental: 'b', westernCents: 300 },
  { note: 'E-4', arabicName: 'سيكاه (مي نصف بيمول)', frequency: 320.24, accidental: 'half-flat', westernCents: 350 },
  { note: 'E4', arabicName: 'بوسليك (مي)', frequency: 329.63, accidental: '', westernCents: 400 },
  { note: 'F4', arabicName: 'جهاركاه (فا)', frequency: 349.23, accidental: '', westernCents: 500 },
  { note: 'F+4', arabicName: 'نيم حجاز (فا نصف دييز)', frequency: 359.46, accidental: 'half-sharp', westernCents: 550 },
  { note: 'F#4', arabicName: 'حجاز (فا دييز)', frequency: 369.99, accidental: '#', westernCents: 600 },
  { note: 'G-4', arabicName: 'نيم نوا (صول نصف بيمول)', frequency: 380.84, accidental: 'half-flat', westernCents: 650 },
  { note: 'G4', arabicName: 'نوا (صول)', frequency: 392.00, accidental: '', westernCents: 700 },
  { note: 'G+4', arabicName: 'نيم حصار (صول نصف دييز)', frequency: 403.50, accidental: 'half-sharp', westernCents: 750 },
  { note: 'G#4', arabicName: 'حصار (صول دييز)', frequency: 415.30, accidental: '#', westernCents: 800 },
  { note: 'A-4', arabicName: 'نيم حسيني (لا نصف بيمول)', frequency: 427.47, accidental: 'half-flat', westernCents: 850 },
  { note: 'A4', arabicName: 'حسيني (لا)', frequency: 440.00, accidental: '', westernCents: 900 },
  { note: 'A+4', arabicName: 'نيم عجم (لا نصف دييز)', frequency: 452.89, accidental: 'half-sharp', westernCents: 950 },
  { note: 'Bb4', arabicName: 'عجم عشيران (سي بيمول)', frequency: 466.16, accidental: 'b', westernCents: 1000 },
  { note: 'B-4', arabicName: 'أوج (سي نصف بيمول)', frequency: 479.82, accidental: 'half-flat', westernCents: 1050 },
  { note: 'B4', arabicName: 'ماهور (سي)', frequency: 493.88, accidental: '', westernCents: 1100 },
  { note: 'C5', arabicName: 'كردان (دو جواب)', frequency: 523.25, accidental: '', westernCents: 1200 },
];

export interface MaqamDefinition {
  id: string;
  nameEn: string;
  nameAr: string;
  rootNote: string;
  rootNoteAr: string;
  scaleNotes: string[]; // Notes from C4 up
  scaleFrequencies: number[];
  formulaEn: string;
  formulaAr: string;
  jinsAsasEn: string;
  jinsAsasAr: string;
  jinsFarEn: string;
  jinsFarAr: string;
  moodEn: string;
  moodAr: string;
  famousPieceEn: string;
  famousPieceAr: string;
  color: string;
}

export const MAQAMAT_CATALOG: MaqamDefinition[] = [
  {
    id: 'rast',
    nameEn: 'Maqam Rast',
    nameAr: 'مقام الراست',
    rootNote: 'C4',
    rootNoteAr: 'راست (دو)',
    scaleNotes: ['C4', 'D4', 'E-4', 'F4', 'G4', 'A4', 'B-4', 'C5'],
    scaleFrequencies: [261.63, 293.66, 320.24, 349.23, 392.00, 440.00, 479.82, 523.25],
    formulaEn: '1 - 3/4 - 3/4 - 1 - 1 - 3/4 - 3/4 (tones)',
    formulaAr: '١ - ٣/٤ - ٣/٤ - ١ - ١ - ٣/٤ - ٣/٤ (طنين)',
    jinsAsasEn: 'Jins Rast on C (Root to 4th: C - D - E-half-flat - F)',
    jinsAsasAr: 'جنس راست على الدو (راست - دوكاه - سيكاه - جهاركاه)',
    jinsFarEn: 'Jins Rast on G (5th to Octave: G - A - B-half-flat - C\')',
    jinsFarAr: 'جنس راست على الصول (نوا - حسيني - أوج - كردان)',
    moodEn: 'Majesty, sovereignty, rooted balance, pride and solemn dignity.',
    moodAr: 'أبو المقامات: الفخامة، السيادة، الوقار، والاعتدال البهيج.',
    famousPieceEn: 'Umm Kulthum: "Arak Asiy Al-Dama" / Abdel Wahab: "Al-Ghandoura"',
    famousPieceAr: 'أم كلثوم: أراك عصي الدمع / عبد الوهاب: مضناك جفاه مرقده',
    color: 'emerald',
  },
  {
    id: 'bayati',
    nameEn: 'Maqam Bayati',
    nameAr: 'مقام البياتي',
    rootNote: 'D4',
    rootNoteAr: 'دوكاه (ري)',
    scaleNotes: ['D4', 'E-4', 'F4', 'G4', 'A4', 'Bb4', 'C5', 'D5'],
    scaleFrequencies: [293.66, 320.24, 349.23, 392.00, 440.00, 466.16, 523.25, 587.33],
    formulaEn: '3/4 - 3/4 - 1 - 1 - 1/2 - 1 - 1',
    formulaAr: '٣/٤ - ٣/٤ - ١ - ١ - ١/٢ - ١ - ١',
    jinsAsasEn: 'Jins Bayati on D (D - E-half-flat - F - G)',
    jinsAsasAr: 'جنس بياتي على الري (دوكاه - سيكاه - جهاركاه - نوا)',
    jinsFarEn: 'Jins Nahawand on G or Rast on C',
    jinsFarAr: 'جنس نهاوند على الصول أو راست على الدو',
    moodEn: 'Deep nostalgia, emotional warmth, tender yearning, and Egyptian folk vitality.',
    moodAr: 'شجن دافئ، حنين وجداني، حيوية شعبية مصرية أصيلة، وقريب جداً من وجدان الشعب.',
    famousPieceEn: 'Sayed Darwish: "Salma Ya Salama" / Abdel Halim: "Ala Hesb Wedad"',
    famousPieceAr: 'سيد درويش: سالمة يا سلامة / عبد الحليم حافظ: على حسب وداد قلبي',
    color: 'amber',
  },
  {
    id: 'sikah',
    nameEn: 'Maqam Sikah',
    nameAr: 'مقام السيكاه',
    rootNote: 'E-4',
    rootNoteAr: 'سيكاه (مي نصف بيمول)',
    scaleNotes: ['E-4', 'F4', 'G4', 'A4', 'B-4', 'C5', 'D5', 'E-5'],
    scaleFrequencies: [320.24, 349.23, 392.00, 440.00, 479.82, 523.25, 587.33, 640.48],
    formulaEn: '3/4 - 1 - 1 - 3/4 - 1 - 1 - 3/4',
    formulaAr: '٣/٤ - ١ - ١ - ٣/٤ - ١ - ١ - ٣/٤',
    jinsAsasEn: 'Jins Sikah on E-half-flat (E- - F - G)',
    jinsAsasAr: 'جنس سيكاه على المي نصف بيمول (سيكاه - جهاركاه - نوا)',
    jinsFarEn: 'Jins Rast on G (Nawa)',
    jinsFarAr: 'جنس راست على الصول (نوا)',
    moodEn: 'Spiritual transcendence, sacred Quranic invocation (Ibtihalat), yearning mystical sweetness.',
    moodAr: 'الروحانية الصوفية، تلاوة القرآن الكريم والابتهالات، الحلاوة والخشوع الإيماني.',
    famousPieceEn: 'Sheikh Sayed Al-Naqshabandi: "Mawlay" / Umm Kulthum: "Hadeeth Al-Rooh"',
    famousPieceAr: 'الشيخ سيد النقشبندي: مولاي إني ببابك / أم كلثوم: حديث الروح',
    color: 'teal',
  },
  {
    id: 'hijaz',
    nameEn: 'Maqam Hijaz',
    nameAr: 'مقام الحجاز',
    rootNote: 'D4',
    rootNoteAr: 'دوكاه (ري)',
    scaleNotes: ['D4', 'Eb4', 'F#4', 'G4', 'A4', 'Bb4', 'C5', 'D5'],
    scaleFrequencies: [293.66, 311.13, 369.99, 392.00, 440.00, 466.16, 523.25, 587.33],
    formulaEn: '1/2 - 1.5 - 1/2 - 1 - 1/2 - 1 - 1 (augmented 2nd between Eb and F#)',
    formulaAr: '١/٢ - ١.٥ - ١/٢ - ١ - ١/٢ - ١ - ١ (ثانية زائدة مميزة بين مي ب ب وفا #)',
    jinsAsasEn: 'Jins Hijaz on D (D - Eb - F# - G with 1.5 step)',
    jinsAsasAr: 'جنس حجاز على الري (دوكاه - كردي - حجاز - نوا)',
    jinsFarEn: 'Jins Nahawand on G or Rast on G',
    jinsFarAr: 'جنس نهاوند أو بياتي على الصول',
    moodEn: 'Profound awe, desert solemnity, passionate longing, and dramatic grandeur.',
    moodAr: 'الهيبة، رهبة الصحراء، الخشوع، الحزن الملتهب والشغف الدرامي الملحمي.',
    famousPieceEn: 'Mohamed Abdel Wahab: "Kullana Nohibba Al-Watan" / Sayed Darwish: "Zourouni"',
    famousPieceAr: 'محمد عبد الوهاب: الجندول / فيروز / سيد درويش: زوروني كل سنة مرة',
    color: 'rose',
  },
  {
    id: 'nahawand',
    nameEn: 'Maqam Nahawand',
    nameAr: 'مقام النهاوند',
    rootNote: 'C4',
    rootNoteAr: 'راست (دو)',
    scaleNotes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'B4', 'C5'],
    scaleFrequencies: [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 493.88, 523.25],
    formulaEn: '1 - 1/2 - 1 - 1 - 1/2 - 1.5 - 1/2 (Harmonic minor in ascent)',
    formulaAr: '١ - ١/٢ - ١ - ١ - ١/٢ - ١.٥ - ١/٢ (يتطابق مع السلم الصغير التوافقي الغربي)',
    jinsAsasEn: 'Jins Nahawand on C (C - D - Eb - F)',
    jinsAsasAr: 'جنس نهاوند على الدو (راست - دوكاه - كردي - جهاركاه)',
    jinsFarEn: 'Jins Hijaz on G or Jins Kurd on G',
    jinsFarAr: 'جنس حجاز على الصول أو جنس كرد على الصول',
    moodEn: 'Noble romance, gentle sorrow, lyrical elegance, perfectly bridges East and West.',
    moodAr: 'الرومانسية الحالمة، الرقة، الشجن النبيل، الجسر الأبرز بين التدوين الشرقي والغربي.',
    famousPieceEn: 'Umm Kulthum: "Al-Atlal" (intro) / Fairouz: "Kan Ena Tahoon"',
    famousPieceAr: 'أم كلثوم: الأطلال (رياض السنباطي) / فيروز: كان عنا طاحون',
    color: 'indigo',
  },
  {
    id: 'kurd',
    nameEn: 'Maqam Kurd',
    nameAr: 'مقام الكرد',
    rootNote: 'D4',
    rootNoteAr: 'دوكاه (ري)',
    scaleNotes: ['D4', 'Eb4', 'F4', 'G4', 'A4', 'Bb4', 'C5', 'D5'],
    scaleFrequencies: [293.66, 311.13, 349.23, 392.00, 440.00, 466.16, 523.25, 587.33],
    formulaEn: '1/2 - 1 - 1 - 1 - 1/2 - 1 - 1 (Western Phrygian mode)',
    formulaAr: '١/٢ - ١ - ١ - ١ - ١/٢ - ١ - ١ (يماثل مقام الفريجيان الغربي الخالي من الربع تون)',
    jinsAsasEn: 'Jins Kurd on D (D - Eb - F - G)',
    jinsAsasAr: 'جنس كرد على الري (دوكاه - كردي - جهاركاه - نوا)',
    jinsFarEn: 'Jins Nahawand on G',
    jinsFarAr: 'جنس نهاوند على الصول',
    moodEn: 'Modern emotional expressiveness, bittersweet tenderness, widely utilized in 20th century pop.',
    moodAr: 'الدفء العاطفي الحزين المعاصر، البساطة التعبيرية، المقام الأكثر استخداماً في الأغنية الحديثة.',
    famousPieceEn: 'Umm Kulthum: "Hayyart Qalbi Ma\'ak" / Abdel Halim: "Ahwak"',
    famousPieceAr: 'أم كلثوم: حيرت قلبي معاك (السنباطي) / عبد الحليم: أهواك (عبد الوهاب)',
    color: 'violet',
  },
  {
    id: 'ajam',
    nameEn: 'Maqam Ajam',
    nameAr: 'مقام العجم',
    rootNote: 'C4',
    rootNoteAr: 'راست (دو)',
    scaleNotes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
    scaleFrequencies: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25],
    formulaEn: '1 - 1 - 1/2 - 1 - 1 - 1 - 1/2 (Western Major Scale / Ionian)',
    formulaAr: '١ - ١ - ١/٢ - ١ - ١ - ١ - ١/٢ (يطابق السلم الكبير الغربي تماماً)',
    jinsAsasEn: 'Jins Ajam on C (C - D - E - F)',
    jinsAsasAr: 'جنس عجم على الدو (راست - دوكاه - بوسليك - جهاركاه)',
    jinsFarEn: 'Jins Ajam on G',
    jinsFarAr: 'جنس عجم على الصول',
    moodEn: 'Triumph, military glory, celebration, radiant unclouded joy and optimism.',
    moodAr: 'البهجة المطلقة، النصر، التتويج والاحتفالات القومية، الثقة والوضوح.',
    famousPieceEn: 'Sayed Darwish: "Bilady Bilady" (Egyptian Anthem) / Fairouz: "Tala\'li Al-Beka"',
    famousPieceAr: 'سيد درويش: النشيد الوطني المصري (بلادي بلادي) / فيروز: نسم علينا الهوى',
    color: 'sky',
  },
  {
    id: 'saba',
    nameEn: 'Maqam Saba',
    nameAr: 'مقام الصبا',
    rootNote: 'D4',
    rootNoteAr: 'دوكاه (ري)',
    scaleNotes: ['D4', 'E-4', 'F4', 'Gb4', 'A4', 'Bb4', 'C5', 'Db5'],
    scaleFrequencies: [293.66, 320.24, 349.23, 369.99, 440.00, 466.16, 523.25, 554.37],
    formulaEn: '3/4 - 3/4 - 1/2 - 1.5 - 1/2 - 1 - 1/2 (Overlapping interlocking Ajnas)',
    formulaAr: '٣/٤ - ٣/٤ - ١/٢ - ١.٥ - ١/٢ - ١ - ١/٢ (أجناس متداخلة فريدة مع جنس حجاز على الفا)',
    jinsAsasEn: 'Jins Saba on D (D - E- - F - Gb)',
    jinsAsasAr: 'جنس صبا على الري (دوكاه - سيكاه - جهاركاه - صبا)',
    jinsFarEn: 'Jins Hijaz on F (F - Gb - A - Bb)',
    jinsFarAr: 'جنس حجاز على الفا (جهاركاه - صبا - حسيني - عجم)',
    moodEn: 'Uncompromising melancholy, weeping, tragedy, intense elegiac heart-rending pathos.',
    moodAr: 'أشجن المقامات وأحزنها: البكاء، اللوعة، التفجع، والرثاء التراجيدي المؤثر.',
    famousPieceEn: 'Umm Kulthum: "Howwa Sahih Al-Hawa Ghallab" (Zakaria Ahmed) / Abdel Halim: "Kamel Al-Awsaf"',
    famousPieceAr: 'أم كلثوم: هو صحيح الهوى غلاب (زكريا أحمد) / عبد الحليم: كامل الأوصاف',
    color: 'orange',
  },
];

export interface ArabIqaBeat {
  type: 'dum' | 'tak' | 'sakta' | 'tik';
  labelAr: 'دم' | 'تك' | 'سكتة' | 'تك خفيفة';
  intensity: number; // 0 to 1
}

export interface ArabIqaDefinition {
  id: string;
  nameEn: string;
  nameAr: string;
  meter: string; // e.g. 4/4, 2/4, 10/8
  meterBeats: number;
  subdivision: number; // e.g. 8 sixteenths or eighths
  bpmDefault: number;
  pattern: ArabIqaBeat[];
  descriptionEn: string;
  descriptionAr: string;
  genre: string;
}

export const ARAB_IQAAT_CATALOG: ArabIqaDefinition[] = [
  {
    id: 'maqsum',
    nameEn: 'Iqa\' Maqsum',
    nameAr: 'إيقاع المقسوم',
    meter: '4/4',
    meterBeats: 4,
    subdivision: 8,
    bpmDefault: 104,
    pattern: [
      { type: 'dum', labelAr: 'دم', intensity: 1.0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.8 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.8 },
      { type: 'dum', labelAr: 'دم', intensity: 0.9 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.8 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
    ],
    descriptionEn: 'The undisputed pulse of modern and classical Egyptian popular music. Balanced 8-beat syncopation.',
    descriptionAr: 'عمود الخيمة في الإيقاع المصري والعربي، الأكثر شيوعاً واستخداماً في الأغاني الشعبية والكلثومية.',
    genre: 'طرب، شعبي، منوعات',
  },
  {
    id: 'baladi',
    nameEn: 'Iqa\' Baladi (Masmudi Saghir)',
    nameAr: 'إيقاع بلدي (مصمودي صغير)',
    meter: '4/4',
    meterBeats: 4,
    subdivision: 8,
    bpmDefault: 96,
    pattern: [
      { type: 'dum', labelAr: 'دم', intensity: 1.0 },
      { type: 'dum', labelAr: 'دم', intensity: 0.9 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.85 },
      { type: 'dum', labelAr: 'دم', intensity: 0.9 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.85 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
    ],
    descriptionEn: 'Traditional urban Egyptian groove characterized by two consecutive opening Dums ("Dum Dum _ Tak").',
    descriptionAr: 'الوزن البلدي القاهري العريق، يتميز بدمتين متتاليتين في بداية المازورة تعطيان ثقلاً أرضياً راقصاً.',
    genre: 'بلدي مصري، تراث شعبي، أفراح',
  },
  {
    id: 'saidi',
    nameEn: 'Iqa\' Sa\'idi',
    nameAr: 'إيقاع صعيدي',
    meter: '4/4',
    meterBeats: 4,
    subdivision: 8,
    bpmDefault: 116,
    pattern: [
      { type: 'dum', labelAr: 'دم', intensity: 1.0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.8 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'dum', labelAr: 'دم', intensity: 0.95 },
      { type: 'dum', labelAr: 'دم', intensity: 0.95 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.85 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
    ],
    descriptionEn: 'Upper Egypt folkloric rhythm driving the famous Tahtib (stick dance) and mizmar festivals. Double Dum in the center.',
    descriptionAr: 'إيقاع الصعيد المصري وفنون التحطيب والمزمار البلدي، تتوسطه دمتان قويتان تعطيان دفعة حركية مميزة.',
    genre: 'صعيدي، تحطيب، مزمار بلدي',
  },
  {
    id: 'wahda',
    nameEn: 'Iqa\' Wahda (Kabeera)',
    nameAr: 'إيقاع وحدة كبيرة',
    meter: '4/4',
    meterBeats: 4,
    subdivision: 8,
    bpmDefault: 72,
    pattern: [
      { type: 'dum', labelAr: 'دم', intensity: 1.0 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.85 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.7 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
    ],
    descriptionEn: 'Solemn, spacious vocal accompaniment favored by Umm Kulthum and Abdel Wahab for introspective stanzas.',
    descriptionAr: 'إيقاع وقور وفسيح جداً يتيح للمطرب حرية المد والزخرفة الصوتية؛ سيد إيقاعات قصائد أم كلثوم والسنباطي.',
    genre: 'قصائد كلاسيكية، مونولوجات طربية',
  },
  {
    id: 'malfuf',
    nameEn: 'Iqa\' Malfuf (Laff)',
    nameAr: 'إيقاع ملفوف (لف)',
    meter: '2/4',
    meterBeats: 2,
    subdivision: 4,
    bpmDefault: 128,
    pattern: [
      { type: 'dum', labelAr: 'دم', intensity: 1.0 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.85 },
      { type: 'tak', labelAr: 'تك', intensity: 0.85 },
    ],
    descriptionEn: 'Brisk 2/4 circular rhythm used in musical preludes (Dulab), Sufi whirling, and upbeat entrances.',
    descriptionAr: 'ضرب دائري سريع ثنائي الميزان (٢/٤)، أساسي في افتتاحيات الدواليب الموسيقية والذكر والموشحات السريعة.',
    genre: 'دواليب، موشحات، صوفي، دبكة',
  },
  {
    id: 'samai_thaqil',
    nameEn: 'Iqa\' Samai Thaqil',
    nameAr: 'إيقاع سماعي ثقيل',
    meter: '10/8',
    meterBeats: 10,
    subdivision: 10,
    bpmDefault: 88,
    pattern: [
      { type: 'dum', labelAr: 'دم', intensity: 1.0 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'tak', labelAr: 'تك', intensity: 0.85 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'dum', labelAr: 'دم', intensity: 0.9 },
      { type: 'dum', labelAr: 'دم', intensity: 0.9 },
      { type: 'tak', labelAr: 'تك', intensity: 0.85 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
      { type: 'sakta', labelAr: 'سكتة', intensity: 0 },
    ],
    descriptionEn: 'Aristocratic 10/8 rhythm foundational to classical Ottoman/Arab Samai suites and Muwashshahat.',
    descriptionAr: 'أرقى الضروب الآلية الكلاسيكية (ميزان ١٠/٨)، تُبنى عليه خانات قالب السماعي الآلي والموشحات الأندلسية.',
    genre: 'سماعيات آلية، موشحات أندلسية راقية',
  },
];

export interface HarmonicCadence {
  id: string;
  nameEn: string;
  nameAr: string;
  progression: string;
  chords: string[];
  descriptionEn: string;
  descriptionAr: string;
}

export const WESTERN_CADENCES: HarmonicCadence[] = [
  {
    id: 'authentic',
    nameEn: 'Perfect Authentic Cadence (PAC)',
    nameAr: 'القفلة التامة (PAC)',
    progression: 'V - I (or V7 - I)',
    chords: ['G Major', 'C Major'],
    descriptionEn: 'Strongest resolution in tonal harmony. Dominant chord resolves to Tonic in root position.',
    descriptionAr: 'أقوى درجات الاستقرار النغمي؛ تحول التآلف الخامس (المسيطر) إلى الأول (الأساس) في وضع الأصل مع وجود النغمة الأساسية باللحن.',
  },
  {
    id: 'plagal',
    nameEn: 'Plagal Cadence (Amen Cadence)',
    nameAr: 'القفلة الفرعية / الكنسية (Plagal)',
    progression: 'IV - I',
    chords: ['F Major', 'C Major'],
    descriptionEn: 'Gentle resolution from Subdominant to Tonic, famously known as the "Amen" chord progression.',
    descriptionAr: 'انتقال التآلف الرابع (تحت المسيطر) إلى الأول مباشرة؛ تتميز بالوداعة والخشوع وتُعرف بقفلة "آمين".',
  },
  {
    id: 'deceptive',
    nameEn: 'Deceptive Cadence (Interrupted)',
    nameAr: 'القفلة الخادعة / المفاجئة',
    progression: 'V - vi (in Major) or V - VI',
    chords: ['G Major', 'A minor'],
    descriptionEn: 'The ear expects resolution to I, but is surprised by submediant vi, extending musical tension.',
    descriptionAr: 'توقع الأذن الاستقرار على النغمة الأولى بعد الدرجة الخامسة، فتفاجئها الدرجة السادسة بتمديد المسار اللحني.',
  },
  {
    id: 'half',
    nameEn: 'Half Cadence (Imperfect)',
    nameAr: 'القفلة الناقصة (النصفية)',
    progression: 'I - V or IV - V',
    chords: ['C Major', 'G Major'],
    descriptionEn: 'Pauses unresolved on the Dominant V, creating musical question demanding subsequent answer.',
    descriptionAr: 'توقف مؤقت على التآلف الخامس (المسيطر)، كأنه علامة استفهام موسيقية تنتظر إجابة في الجملة اللاحقة.',
  },
];

export interface OrganologyInstrument {
  id: string;
  nameEn: string;
  nameAr: string;
  classification: 'chordophone' | 'aerophone' | 'membranophone' | 'idiophone';
  classificationAr: 'وتريات' | 'هوائيات / نفخ' | 'جلدية إيقاعية' | 'ذاتية التصويت';
  origin: 'oriental' | 'western' | 'universal';
  descriptionEn: string;
  descriptionAr: string;
  tuningNotes: string;
  historicalNoteAr: string;
}

export const INSTRUMENTS_CATALOG: OrganologyInstrument[] = [
  {
    id: 'oud',
    nameEn: 'Oud (Arab Lute)',
    nameAr: 'العود (أمير الآلات الشرقية)',
    classification: 'chordophone',
    classificationAr: 'وتريات',
    origin: 'oriental',
    descriptionEn: 'Short-neck fretless lute with 11-12 strings grouped in courses. Heart of Arab music composition.',
    descriptionAr: 'آلة وترية خشبية ذات رقبة قصيرة خالية من الدساتين (Fretless)، مما يمكنها من عزف الربع تون بمنتهى الدقة. أمير التخت العربي.',
    tuningNotes: 'C2, F2, A2, D3, G3, C4 (or Yakan, Ashiran, Doukah, Nawa, Kardan)',
    historicalNoteAr: 'طوّره الفيلسوف الفارابي وزرياب في الأندلس بإضافة الوتر الخامس واستخدام ريشة النسر.',
  },
  {
    id: 'qanun',
    nameEn: 'Qanun (Arab Zither)',
    nameAr: 'القانون',
    classification: 'chordophone',
    classificationAr: 'وتريات',
    origin: 'oriental',
    descriptionEn: 'Trapezoidal box zither with 78-81 strings and microtonal levers (Urba/Mandal) providing instant quarter-tone shifting.',
    descriptionAr: 'آلة وترية منبسطة من فصيلة السنطور شبه منحرفة، تملك عُرَب (Mandal) معدنية تحت كل حزمة أوتار لتحويل الربع والنصف تون فورياً.',
    tuningNotes: '3 octaves chromatic range with microtonal levers',
    historicalNoteAr: 'يعد معيار الضبط الصوتي الموسيقي لجميع آلات التخت الشرقي (دستور الموسيقى العربية).',
  },
  {
    id: 'nay',
    nameEn: 'Nay (End-blown Cane Flute)',
    nameAr: 'الناي',
    classification: 'aerophone',
    classificationAr: 'هوائيات / نفخ',
    origin: 'oriental',
    descriptionEn: 'Ancient reed flute with 9 segments and 7 finger holes. Expresses sublime breathy melancholy and soulfulness.',
    descriptionAr: 'قصبة مجوفة بها تسع عُقل وسبعة ثقوب (ستة أمامية وواحد خلفي للإبهام). يتميز بصوته الهوائي الشجي والتأمل الصوفي.',
    tuningNotes: 'Diakh (D), Rast (C), Hussayni (A), Mansour, etc.',
    historicalNoteAr: 'من أقدم الآلات الموسيقية التي عُرفت في مصر القديمة منذ عصور الفراعنة.',
  },
  {
    id: 'riqq',
    nameEn: 'Riqq (Arab Tambourine)',
    nameAr: 'الرق (الدف الصنجي)',
    classification: 'membranophone',
    classificationAr: 'جلدية إيقاعية',
    origin: 'oriental',
    descriptionEn: 'Small frame drum with fish skin and 5 double rows of brass jingles (cymbals). Master conductor of the ensemble rhythm.',
    descriptionAr: 'إطار خشبي دائري مغطى بجلد السمك أو الرق، محاط بعشرة أزواج من الصنوج النحاسية. يقود ضابط الإيقاع به كامل التخت.',
    tuningNotes: 'Dum (center thumb), Tak (outer edge rim), Jingles (shake / roll)',
    historicalNoteAr: 'تاريخياً كان ضابط الرق هو المايسترو الفعلي للفرقة الموسيقية الشرقية الكلاسيكية.',
  },
  {
    id: 'violin_oriental',
    nameEn: 'Kamanjah (Violin in Arab Music)',
    nameAr: 'الكمانجة (الكمان في الموسيقى الشرقية)',
    classification: 'chordophone',
    classificationAr: 'وتريات',
    origin: 'universal',
    descriptionEn: 'Adopted into Arab music in the 19th century, retuned from western GDAE to GDGD or GDGD to facilitate quarter-tones.',
    descriptionAr: 'دخل التخت العربي كبديل للربابة في القرن التاسع عشر؛ يُعاد دوزانه عادة إلى (صول - ري - صول - ري) لخدمة المقامات الشرقية.',
    tuningNotes: 'G3 - D4 - G4 - D5 (Arab Duzan) or G3 - D4 - A4 - E5',
    historicalNoteAr: 'برع الموسيقيون المصريون في ابتكار أسلوب عفق خاص للكمان للتعبير عن دقة الربع تون وسلاسة الزحلقة الصوتية (Portamento).',
  },
  {
    id: 'accordion',
    nameEn: 'Oriental Accordion (Free-reed)',
    nameAr: 'الأكورديون الشرقي (المعدّل للربع تون)',
    classification: 'aerophone',
    classificationAr: 'هوائيات / نفخ',
    origin: 'universal',
    descriptionEn: 'Keyboard accordion modified with specialized reed blocks to produce authentic 24-EDO quarter-tones.',
    descriptionAr: 'آلة هوائية ذات ألسنة معدنية حرة؛ قام الموسيقار المصري فاروق سلامة بتعديل ريشها لإدخال الربع تون، فأحدث ثورة في الموسيقى الشعبية والكلثومية.',
    tuningNotes: 'Piano treble keyboard with 24-EDO microtone levers + 120 bass buttons',
    historicalNoteAr: 'أول ظهور للربع تون على الأكورديون كان في أغنية "سيرة الحب" لأم كلثوم وألحان بليغ حمدي بعزف فاروق سلامة عام ١٩٦٤.',
  },
  {
    id: 'harpsichord',
    nameEn: 'Harpsichord (Cembalo / Clavecin)',
    nameAr: 'الهاربسيكورد (السنطور ذو الملامس الغربي)',
    classification: 'chordophone',
    classificationAr: 'وتريات',
    origin: 'western',
    descriptionEn: 'Plucked keyboard instrument with quill plectra striking strings. Cornerstone of European Renaissance and Baroque polyphony.',
    descriptionAr: 'آلة وترية ذات ملامس تنقر أوتارها بواسطة ريشات (Plectra) بدلاً من المطارق، وتتميز بصوت معدني رنان غني بالهارمونيات التوافقية.',
    tuningNotes: 'Dual manuals (C2 to F6) tuned to Mean-tone or 24-EDO historical temperaments',
    historicalNoteAr: 'سلف البيانو الكلاسيكي في عصر الباروك، استُخدم في دراسات المقارنة الصوتية بين السلالم الغربية وسلالم الشرق الميكروتونية.',
  },
  {
    id: 'piano',
    nameEn: 'Piano (Fortepiano / Grand Piano)',
    nameAr: 'البيانو (البيانو الكلاسيكي والمعدل للسلالم الشرقية)',
    classification: 'chordophone',
    classificationAr: 'وتريات',
    origin: 'universal',
    descriptionEn: 'Struck acoustic keyboard instrument with 88 keys, cast-iron frame, and grand acoustic projection.',
    descriptionAr: 'سيد الآلات الكيبوردية؛ طوّره بارتولوميو كريستوفوري عام ١٧٠٠. قام رواد مثل عبد الله شاهين وزيدان بتعديل دوزانه لعزف المقامات العربية كالراست والبياتي.',
    tuningNotes: 'A0 to C8 (27.5 Hz to 4186 Hz), adapted to 24-EDO quarter-tones',
    historicalNoteAr: 'نجح اللبناني عبد الله شاهين في ابتكار "البيانو الشرقي" عام ١٩٥٤ بإضافة ربع التون عبر دواسات وميكانيزم مطارق مزدوج.',
  },
];

export interface MusicTheoryQuizQuestion {
  id: string;
  category: 'acoustics' | 'solfege' | 'maqam' | 'iqa' | 'western_harmony' | 'organology';
  questionEn: string;
  questionAr: string;
  optionsEn: string[];
  optionsAr: string[];
  correctIndex: number;
  explanationEn: string;
  explanationAr: string;
}

export const MUSIC_STUDIO_QUIZ: MusicTheoryQuizQuestion[] = [
  {
    id: 'q1',
    category: 'maqam',
    questionEn: 'Which degree in Maqam Rast is lowered by a quarter-tone (سيكاه)?',
    questionAr: 'أي درجة في مقام الراست تهبط بمقدار ربع تون (تصبح سيكاه)؟',
    optionsEn: ['The Third degree (E) and Seventh degree (B)', 'Only the Second degree (D)', 'The Fourth degree (F)', 'The Fifth degree (G)'],
    optionsAr: ['الدرجة الثالثة (مي) والسابعة (سي)', 'الدرجة الثانية (ري) فقط', 'الدرجة الرابعة (فا)', 'الدرجة الخامسة (صول)'],
    correctIndex: 0,
    explanationEn: 'Maqam Rast uses E-half-flat (Sikah) as its 3rd degree and B-half-flat (Aouj) as its 7th degree.',
    explanationAr: 'مقام الراست يتميز بوجود المي نصف بيمول (سيكاه) كدرجة ثالثة، والسي نصف بيمول (أوج) كدرجة سابعة.',
  },
  {
    id: 'q2',
    category: 'iqa',
    questionEn: 'What is the standard opening stroke pattern for the Egyptian Iqa\' Baladi (Masmudi Saghir)?',
    questionAr: 'ما هي الصيغة الوزنية الافتتاحية المميزة لإيقاع البلدي (المصمودي الصغير)؟',
    optionsEn: ['Dum Dum _ Tak Dum _ Tak _', 'Dum Tak _ Tak Dum _ Tak _', 'Dum Tak _ Dum Dum _ Tak _', 'Dum _ Tak Tak'],
    optionsAr: ['دم دم _ تك دم _ تك _', 'دم تك _ تك دم _ تك _', 'دم تك _ دم دم _ تك _', 'دم _ تك تك'],
    correctIndex: 0,
    explanationEn: 'Iqa Baladi opens with two heavy consecutive Dums ("Dum Dum _ Tak"), distinguishing it from Maqsum.',
    explanationAr: 'يتميز إيقاع البلدي بدمتين متتاليتين في بداية المازورة (دم دم _ تك)، بينما يبدأ المقسوم بـ (دم تك _ تك).',
  },
  {
    id: 'q3',
    category: 'acoustics',
    questionEn: 'If middle A (A4) vibrates at 440 Hz, what is the frequency of its octave above (A5)?',
    questionAr: 'إذا كان تردد نغمة لا٤ (A4) هو ٤٤٠ هرتز، فما هو تردد جوابها الأوكتافي لا٥ (A5)؟',
    optionsEn: ['880 Hz', '660 Hz', '550 Hz', '1320 Hz'],
    optionsAr: ['٨٨٠ هرتز', '٦٦٠ هرتز', '٥٥٠ هرتز', '١٣٢٠ هرتز'],
    correctIndex: 0,
    explanationEn: 'An octave corresponds to an exact 2:1 frequency ratio: 440 Hz × 2 = 880 Hz.',
    explanationAr: 'الأوكتاف (الديوان) يمثل نسبة ترددية دقيقة مقدارها ٢ : ١؛ إذن ٤٤٠ × ٢ = ٨٨٠ هرتز.',
  },
  {
    id: 'q4',
    category: 'western_harmony',
    questionEn: 'Which harmonic cadence resolves from the Subdominant chord (IV) to the Tonic (I)?',
    questionAr: 'أي قفلة هارمونية غربية تنتقل فيها التآلفات من الدرجة الرابعة (IV) إلى الأولى (I)؟',
    optionsEn: ['Plagal Cadence (Amen)', 'Perfect Authentic Cadence', 'Deceptive Cadence', 'Half Cadence'],
    optionsAr: ['القفلة الفرعية / الكنسية (Plagal)', 'القفلة التامة (Authentic)', 'القفلة الخادعة (Deceptive)', 'القفلة النصفية (Half)'],
    correctIndex: 0,
    explanationEn: 'The Plagal Cadence (IV -> I) provides a gentle, peaceful resolution often called the "Amen Cadence".',
    explanationAr: 'القفلة الفرعية (Plagal Cadence) هي الانتقال من الدرجة الرابعة للدرجة الأولى وتسمى قفلة "آمين".',
  },
  {
    id: 'q5',
    category: 'maqam',
    questionEn: 'Maqam Saba is uniquely famous for containing which augmented/distinctive interval?',
    questionAr: 'بماذا ينفرد مقام الصبا في بنيته النغمية مقارنة بباقي المقامات الشرقية؟',
    optionsEn: ['Overlapping Jins Hijaz on the third degree (F)', 'A pure major triad on the root', 'Only whole tone intervals', 'Absence of any minor second'],
    optionsAr: ['تداخل جنس حجاز فرعي على درجته الثالثة (فا)', 'تآلف كبير صافٍ على الأساس', 'اعتماده على الأبعاد الكاملة فقط', 'غياب أنصاف الأبعاد كلياً'],
    correctIndex: 0,
    explanationEn: 'Maqam Saba features Jins Saba on D combined with an overlapping Jins Hijaz starting on F.',
    explanationAr: 'ينفرد مقام الصبا بوجود جنس حجاز فرعي متداخل يبدأ من الدرجة الثالثة (فا)، مما يمنحه شجناً وبكائية فريدة.',
  },
  {
    id: 'q6',
    category: 'organology',
    questionEn: 'Which instrument is considered the acoustic reference and master tuner of the Arab Takht?',
    questionAr: 'أي آلة موسيقية تُعد المرجع الصوتي ودستور ضبط النغمات في التخت العربي الأصيل؟',
    optionsEn: ['The Qanun', 'The Riqq', 'The Nay', 'The Accordion'],
    optionsAr: ['القانون', 'الرق', 'الناي', 'الأكورديون'],
    correctIndex: 0,
    explanationEn: 'The Qanun with its fixed strings and microtonal levers provides the pitch reference for the ensemble.',
    explanationAr: 'القانون هو دستور الموسيقى العربية لكونه يغطي أكثر من ثلاثة أوكتافات ويحتوي عُرباً ثابتة لضبط النغم.',
  },
  {
    id: 'q7',
    category: 'solfege',
    questionEn: 'How many quarter-tones (divisions) exist in one complete octave in modern Arab music theory?',
    questionAr: 'كم ربع تون (درجة متساوية) يقسم الأوكتاف في نظرية الموسيقى العربية الحديثة؟',
    optionsEn: ['24 quarter-tones', '12 semitones', '53 commas', '17 intervals'],
    optionsAr: ['٢٤ ربع تون متساوي', '١٢ نصف تون', '٥٣ كوما', '١٧ بعداً'],
    correctIndex: 0,
    explanationEn: 'The 1932 Cairo Congress of Arab Music codified the 24 Equal Divisions of the Octave (24-EDO).',
    explanationAr: 'أقر مؤتمر الموسيقى العربية بالقاهرة عام ١٩٣٢ نظام السلم المعدل ذي الـ ٢٤ ربع تون متساوياً في الديوان.',
  },
  {
    id: 'q8',
    category: 'western_harmony',
    questionEn: 'What notes make up the Dominant Seventh chord ($V_7$) in the key of C Major?',
    questionAr: 'ما هي النغمات المكونة لتآلف السابعة للمسيطر ($V_7$) في سلم دو الكبير؟',
    optionsEn: ['G - B - D - F', 'C - E - G - B', 'D - F - A - C', 'F - A - C - E'],
    optionsAr: ['صول - سي - ري - فا (G - B - D - F)', 'دو - مي - صول - سي (C - E - G - B)', 'ري - فا - لا - دو (D - F - A - C)', 'فا - لا - دو - مي (F - A - C - E)'],
    correctIndex: 0,
    explanationEn: 'The dominant chord in C Major is G. Adding a minor 7th yields G-B-D-F.',
    explanationAr: 'الدرجة الخامسة في سلم دو هي صول (G). وبإضافة السابعة الصغيرة ينتج التآلف الرباعي: صول - سي - ري - فا.',
  },
];
