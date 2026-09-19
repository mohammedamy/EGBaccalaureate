export interface HolySacrament {
  id: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  isRepeatable: boolean;
  visibleSignAr: string;
  visibleSignEn: string;
  invisibleGraceAr: string;
  invisibleGraceEn: string;
  scriptureBasisAr: string;
  scriptureBasisEn: string;
  theologicalDepthAr: string;
  theologicalDepthEn: string;
  audioUrl?: string;
  audioFallbackUrl?: string;
  audioCitationAr?: string;
  audioCitationEn?: string;
  reciterAr?: string;
  reciterEn?: string;
}

export interface MonasticMilestone {
  id: string;
  eraAr: string;
  eraEn: string;
  leaderAr: string;
  leaderEn: string;
  locationAr: string;
  locationEn: string;
  significanceAr: string;
  significanceEn: string;
  legacyAr: string;
  legacyEn: string;
}

export interface GospelSynopticItem {
  id: string;
  gospelAr: string;
  gospelEn: string;
  authorAr: string;
  authorEn: string;
  symbolAr: string;
  symbolEn: string;
  targetAudienceAr: string;
  targetAudienceEn: string;
  keyThemeAr: string;
  keyThemeEn: string;
  notablePassageAr: string;
  notablePassageEn: string;
  audioUrl?: string;
  audioFallbackUrl?: string;
  passageRefAr?: string;
  passageRefEn?: string;
}

export interface AuthenticScriptureRecording {
  id: string;
  titleAr: string;
  titleEn: string;
  referenceAr: string;
  referenceEn: string;
  themeAr: string;
  themeEn: string;
  textAr: string;
  textEn: string;
  audioUrl: string;
  audioFallbackUrl?: string;
  reciterAr: string;
  reciterEn: string;
}

export interface BioethicsTopic {
  id: string;
  titleAr: string;
  titleEn: string;
  statusAr: 'مباح ومستحسن' | 'محظور قطعياً' | 'مشروط بضوابط صارمة';
  statusEn: 'Permitted & Encouraged' | 'Strictly Prohibited' | 'Conditionally Permitted';
  theologicalPrincipleAr: string;
  theologicalPrincipleEn: string;
  pastoralGuidanceAr: string;
  pastoralGuidanceEn: string;
}

export interface ChristianScenarioQuizItem {
  id: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
}

export const HOLY_SACRAMENTS: HolySacrament[] = [
  {
    id: 'sacrament_baptism',
    nameAr: 'سر المعمودية المقدس',
    nameEn: 'Sacrament of Holy Baptism',
    categoryAr: 'أسرار التأسيس (الخلاصية غير المكررة)',
    categoryEn: 'Sacrament of Christian Initiation (Non-Repeatable)',
    isRepeatable: false,
    visibleSignAr: 'التغطيس ثلاث مرات في الماء المدشن باسم الآب والابن والروح القدس',
    visibleSignEn: 'Triple immersion in consecrated water in the name of the Father, Son, and Holy Spirit',
    invisibleGraceAr: 'الولادة الروحية الثانية، غفران الخطية الجدية، وموت الإنسان العتيق والقيامة مع المسيح',
    invisibleGraceEn: 'Second spiritual birth, remission of original and personal sins, dying and rising with Christ',
    scriptureBasisAr: '«مَنْ آمَنَ وَاعْتَمَدَ خَلَصَ» (مرقس ١٦: ١٦) — «إِنْ كَانَ أَحَدٌ لاَ يُولَدُ مِنَ الْمَاءِ وَالرُّوحِ لاَ يَقْدِرُ أَنْ يَدْخُلَ مَلَكُوتَ اللهِ» (يوحنا ٣: ٥)',
    scriptureBasisEn: '"He who believes and is baptized will be saved" (Mark 16:16) — "Unless one is born of water and the Spirit, he cannot enter the kingdom of God" (John 3:5)',
    theologicalDepthAr: 'المعمودية هي باب الأسرار والمدخل الإلزامي لنيل سائر النعم الكنسية؛ وبها يُغرس المؤمن في الجسد السري للمسيح ويسترد كرامة البنوة الإلهية بالتبني.',
    theologicalDepthEn: 'Baptism is the portal to all sacraments and divine gifts, grafting the believer organically into the mystical Body of Christ and conferring divine adoptive sonship.',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/mark/016.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/Mark/02_mark_16.mp3',
    audioCitationAr: 'إنجيل مرقس - الأصحاح ١٦: ١٦ (معمودية الخلاص)',
    audioCitationEn: 'Gospel of Mark - Chapter 16:16',
    reciterAr: 'تسجيل صوتي كنسي معتمد — العهد الجديد باللغة العربية (ترجمة سميث وفانديك)',
    reciterEn: 'Accredited Church Audio Archive — Arabic New Testament (Smith & Van Dyck)'
  },
  {
    id: 'sacrament_myron',
    nameAr: 'سر الميرون المقدس (التثبيت)',
    nameEn: 'Sacrament of Holy Myron (Chrismation)',
    categoryAr: 'أسرار التأسيس (الخلاصية غير المكررة)',
    categoryEn: 'Sacrament of Christian Initiation (Non-Repeatable)',
    isRepeatable: false,
    visibleSignAr: 'الرشم بزيت الميرون المقدس في ٣٦ موضعاً تشمل كافة الحواس ومنافذ الجسد',
    visibleSignEn: 'Anointing with holy Chrism oil across 36 bodily points encompassing all senses and organs',
    invisibleGraceAr: 'حلول الروح القدس وسكناه في المؤمن، وتدشين الجسد هيكلاً مقدساً لله',
    invisibleGraceEn: 'Indwelling of the Holy Spirit, seal of divine adoption, and consecration of the body as a temple',
    scriptureBasisAr: '«وَأَمَّا أَنْتُمْ فَلَكُمْ مَسْحَةٌ مِنَ الْقُدُّوسِ وَتَعْلَمُونَ كُلَّ شَيْءٍ» (١ يوحنا ٢: ٢٠)',
    scriptureBasisEn: '"But you have an anointing from the Holy One, and you know all things" (1 John 2:20)',
    theologicalDepthAr: 'يحل سر الميرون محل وضع أيدي الرسل؛ وبموجبه يصبح المؤمن مسكناً حياً للروح المعزي ومحصناً بمواهب الحكمة والفهم والقوة والتقوى.',
    theologicalDepthEn: 'Chrismation succeeds the apostolic laying of hands, imparting the indwelling Holy Spirit with wisdom, spiritual understanding, moral fortitude, and piety.',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/1john/002.mp3',
    audioCitationAr: 'رسالة يوحنا الأولى - الأصحاح ٢: ٢٠ (مسحة القدوس)',
    audioCitationEn: 'First Epistle of John - Chapter 2:20',
    reciterAr: 'تسجيل صوتي كنسي معتمد — رسائل يوحنا الرسول (ترجمة سميث وفانديك)',
    reciterEn: 'Accredited Church Audio Archive — Johannine Epistles (Smith & Van Dyck)'
  },
  {
    id: 'sacrament_eucharist',
    nameAr: 'سر الإفخارستيا (التناول المقدس)',
    nameEn: 'Sacrament of the Holy Eucharist',
    categoryAr: 'أسرار التغذية والنمو الروحي (قابلة للتكرار)',
    categoryEn: 'Sacrament of Spiritual Life & Communion (Repeatable)',
    isRepeatable: true,
    visibleSignAr: 'الخبز المختمر المصنوع من دقيق القمح النقي (القربان) وخمر عصير الكرمة الممزوج بالماء',
    visibleSignEn: 'Leavened bread of pure wheat flour (Qurban) and pure unfermented grape wine mingled with water',
    invisibleGraceAr: 'التحول الحقيقي بالروح القدس إلى جسد الرب ودمه الأقدسين للثبات في المسيح والحياة الأبدية',
    invisibleGraceEn: 'True sacramental transformation by the Holy Spirit into Christ\'s Body and Blood for eternal life',
    scriptureBasisAr: '«مَنْ يَأْكُلْ جَسَدِي وَيَشْرَبْ دَمِي يَثْبُتْ فِيَّ وَأَنَا فِيهِ» (يوحنا ٦: ٥٦) — «هذَا هُوَ جَسَدِي... هذَا هُوَ دَمِي» (متى ٢٦: ٢٦-٢٨)',
    scriptureBasisEn: '"He who eats My flesh and drinks My blood abides in Me, and I in him" (John 6:56) — "This is My body... This is My blood" (Matthew 26:26-28)',
    theologicalDepthAr: 'تاج الأسرار وسر الأسرار، به تستحضر الكنيسة ذبيحة الصليب الواحدة غير المتكررة كحضور حقيقي دائم يهب غفران الخطايا والاتحاد الحميم بالمخلص.',
    theologicalDepthEn: 'The crown and pinnacle of sacraments, actualizing the perpetual presence of Calvary\'s one all-sufficient sacrifice and fostering deep communal union with God.',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/matthew/026.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/Matthew/01_matthew_26.mp3',
    audioCitationAr: 'إنجيل متى - الأصحاح ٢٦: ٢٦-٢٨ (تأسيس سر الشكر والتناول)',
    audioCitationEn: 'Gospel of Matthew - Chapter 26:26-28',
    reciterAr: 'تسجيل صوتي كنسي معتمد — العهد الجديد باللغة العربية (ترجمة سميث وفانديك)',
    reciterEn: 'Accredited Church Audio Archive — Arabic New Testament (Smith & Van Dyck)'
  },
  {
    id: 'sacrament_confession',
    nameAr: 'سر التوبة والاعتراف',
    nameEn: 'Sacrament of Repentance and Confession',
    categoryAr: 'أسرار الشفاء والتجديد المستمر (قابلة للتكرار)',
    categoryEn: 'Sacrament of Healing & Renewal (Repeatable)',
    isRepeatable: true,
    visibleSignAr: 'الإقرار بالخطايا بندم وانسحاق أمام الأب الكاهن وسماع صلاة التحليل الكنسي',
    visibleSignEn: 'Verbal confession of sins with contrition before an ordained priest and receipt of pastoral absolution',
    invisibleGraceAr: 'غفران الخطايا، المصالحة مع الله والكنيسة، والتحرر من أثقال الإثم وتجديد الضمير',
    invisibleGraceEn: 'Remission of sins, spiritual reconciliation with God, liberation from guilt, and renewal of heart',
    scriptureBasisAr: '«مَنْ غَفَرْتُمْ خَطَايَاهُ تُغْفَرُ لَهُ، وَمَنْ أَمْسَكْتُمْ خَطَايَاهُ أُمْسِكَتْ» (يوحنا ٢٠: ٢٣)',
    scriptureBasisEn: '"If you forgive the sins of any, they are forgiven them; if you retain the sins of any, they are retained" (John 20:23)',
    theologicalDepthAr: 'المعمودية الثانية المتجددة؛ حيث يعود الابن الضال إلى أحضان الآب السماوي، متجرداً من كبرياء التبرير الذاتي ومقبلاً على ينابيع النعمة والرحمة.',
    theologicalDepthEn: 'The continuous baptism of tears wherein the soul returns to the Father\'s embrace, laying down pride to receive divine mercy, counsel, and restoration.',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/john/020.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/John/04_john_20.mp3',
    audioCitationAr: 'إنجيل يوحنا - الأصحاح ٢٠: ٢٣ (سلطان الحل والمغفرة الرسولي)',
    audioCitationEn: 'Gospel of John - Chapter 20:23',
    reciterAr: 'تسجيل صوتي كنسي معتمد — العهد الجديد باللغة العربية (ترجمة سميث وفانديك)',
    reciterEn: 'Accredited Church Audio Archive — Arabic New Testament (Smith & Van Dyck)'
  },
  {
    id: 'sacrament_priesthood',
    nameAr: 'سر الكهنوت المقدس',
    nameEn: 'Sacrament of Holy Priesthood (Orders)',
    categoryAr: 'أسرار الخدمة والتدبير الكنسي (غير مكرر للرتبة الواحدة)',
    categoryEn: 'Sacrament of Ministry & Governance (Hierarchical)',
    isRepeatable: false,
    visibleSignAr: 'وضع يد الأسقف الشرعي مع صلوات الرسامة والنفخة الروحية والقص والمسح',
    visibleSignEn: 'Laying on of hands by an authorized bishop accompanied by liturgical prayers and invocation of the Spirit',
    invisibleGraceAr: 'نوال الموهبة الرسولية لمباشرة الأسرار ورعاية شعب الله وتعليم العقيدة باستقامة',
    invisibleGraceEn: 'Bestowal of apostolic grace to administer holy sacraments, shepherd God\'s flock, and teach sound doctrine',
    scriptureBasisAr: '«لاَ تُهْمِلِ الْمَوْهِبَةَ الَّتِي فِيكَ، الَّتِي أُعْطِيَتْ لَكَ بِالنُّبُوَّةِ مَعَ وَضْعِ أَيْدِي الْمَشْيَخَةِ» (١ تيموثاوس ٤: ١٤)',
    scriptureBasisEn: '"Do not neglect the gift that is in you, which was given to you by prophecy with the laying on of the hands of the eldership" (1 Tim 4:14)',
    theologicalDepthAr: 'الكهنوت هو خدمة مستمدة من كهنوت السيد المسيح الأعظم؛ ويتدرج في ثلاث رتب رسولية: الشمامسة، القسوس، والأساقفة، حافظاً وحدة الكنيسة عبر الخلافة الرسولية.',
    theologicalDepthEn: 'Ecclesiastical ministry participating in Christ\'s eternal high priesthood, articulated across three ranks: Diaconate, Presbyterate, and Episcopate via Apostolic Succession.',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/1timothy/004.mp3',
    audioCitationAr: 'رسالة بولس الرسول الأولى إلى تيموثاوس - الأصحاح ٤: ١٤ (وضع يد المشيخة)',
    audioCitationEn: 'First Epistle to Timothy - Chapter 4:14',
    reciterAr: 'تسجيل صوتي كنسي معتمد — رسائل بولس الرسول الرعوية (ترجمة سميث وفانديك)',
    reciterEn: 'Accredited Church Audio Archive — Pastoral Epistles (Smith & Van Dyck)'
  },
  {
    id: 'sacrament_matrimony',
    nameAr: 'سر الزيجة المقدس',
    nameEn: 'Sacrament of Holy Matrimony',
    categoryAr: 'أسرار البناء الاجتماعي والأسري',
    categoryEn: 'Sacrament of Family & Social Covenant',
    isRepeatable: false,
    visibleSignAr: 'وضع الأكاليل، الرداء الأبيض، ومباركة الكاهن وتبادل العهود المقدسة أمام المذبح',
    visibleSignEn: 'Crowning ceremony, sacred vestments, priestly benediction, and exchange of holy vows before the altar',
    invisibleGraceAr: 'اتحاد الزوجين في جسد واحد بنعمة الروح القدس، وقداسة المعاشرة الزوجية وبناء الكنيسة المنزلية',
    invisibleGraceEn: 'Mystical union of husband and wife into one flesh in Christ, sanctifying marital love and creating a domestic church',
    scriptureBasisAr: '«هذَا السِّرُّ عَظِيمٌ، وَلكِنَّنِي أَنَا أَقُولُ مِنْ نَحْوِ الْمَسِيحِ وَالْكَنِيسَةِ» (أفسس ٥: ٣٢) — «فَالَّذِي جَمَعَهُ اللهُ لاَ يُفَرِّقُهُ إِنْسَانٌ» (متى ١٩: ٦)',
    scriptureBasisEn: '"This is a great mystery, but I speak concerning Christ and the church" (Ephesians 5:32) — "What God has joined together, let not man separate" (Matthew 19:6)',
    theologicalDepthAr: 'يقوم الزواج المسيحي على الوحدانية غير المنحلة والتضحية المتبادلة محاكياً بذل المسيح لأجل كنيسته، منشئاً خلية أسرية صالحة تخدم المجتمع والوطن.',
    theologicalDepthEn: 'Christian marriage embodies indissoluble covenantal love reflecting Christ\'s devotion to His Church, establishing a sanctuary of love, fidelity, and civic integrity.',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/ephesians/005.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/Matthew/01_matthew_19.mp3',
    audioCitationAr: 'رسالة أفسس - الأصحاح ٥: ٣٢ (سر الزيجة الكنسي المقدس)',
    audioCitationEn: 'Ephesians - Chapter 5:32',
    reciterAr: 'تسجيل صوتي كنسي معتمد — رسائل بولس الرسول (ترجمة سميث وفانديك)',
    reciterEn: 'Accredited Church Audio Archive — Pauline Epistles (Smith & Van Dyck)'
  },
  {
    id: 'sacrament_unction',
    nameAr: 'سر مسحة المرضى (القنديل العام)',
    nameEn: 'Sacrament of the Unction of the Sick',
    categoryAr: 'أسرار الشفاء الجسدي والروحي (قابلة للتكرار)',
    categoryEn: 'Sacrament of Physical & Spiritual Healing',
    isRepeatable: true,
    visibleSignAr: 'صلاة سبع صلوات كنسية وإيقاد سبع فتائل ودهن المريض بالزيت المقدس',
    visibleSignEn: 'Seven liturgical prayers, lighting of seven olive oil wicks, and sacred anointing of the infirm',
    invisibleGraceAr: 'شفاء الأسقام الجسدية والنفسية وفق مشيئة الله الصالحة، ومغفرة الخطايا والضعفات المنسية',
    invisibleGraceEn: 'Physical and emotional restoration according to God\'s benevolent will, accompanied by remission of frailties',
    scriptureBasisAr: '«أَمَرِيضٌ أَحَدٌ بَيْنَكُمْ؟ فَلْيَدْعُ قُسُوسَ الْكَنِيسَةِ فَيُصَلُّوا عَلَيْهِ وَيَدْهُنُوهُ بِزَيْتٍ بِاسْمِ الرَّبِّ» (يعقوب ٥: ١٤)',
    scriptureBasisEn: '"Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord" (James 5:14)',
    theologicalDepthAr: 'يؤكد السر رعاية الكنيسة للإنسان في أوقات الضعف والألم؛ فلا تكتفي بالدواء الطبي المادي بل تقرنه بالرجاء الروحي والصلاة الإيمانية الداعمة.',
    theologicalDepthEn: 'Affirms holistic pastoral compassion toward human suffering, harmonizing medical treatment with prayerful spiritual solace and divine hope.',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/james/005.mp3',
    audioCitationAr: 'رسالة يعقوب الرسول - الأصحاح ٥: ١٤ (صلاة الإيمان ومسحة الزيت)',
    audioCitationEn: 'Epistle of James - Chapter 5:14',
    reciterAr: 'تسجيل صوتي كنسي معتمد — الرسائل الجامعة الكاثوليكون (ترجمة سميث وفانديك)',
    reciterEn: 'Accredited Church Audio Archive — Catholic Epistles (Smith & Van Dyck)'
  }
];

export const MONASTIC_MILESTONES: MonasticMilestone[] = [
  {
    id: 'milestone_antony',
    eraAr: 'القرن الثالث والرابع الميلادي (حوالي ٢٥١ - ٣٥٦م)',
    eraEn: '3rd–4th Century AD (c. 251–356 AD)',
    leaderAr: 'القديس أنطونيوس الكبير (أبو الرهبان وكوكب البرية)',
    leaderEn: 'St. Antony the Great (Father of Christian Monasticism)',
    locationAr: 'الصحراء الشرقية بمصر (جبل القلزم - دير الأنبا أنطونيوس بالبحر الأحمر)',
    locationEn: 'Eastern Egyptian Desert (Mount Clysma - Red Sea Monastery)',
    significanceAr: 'تأسيس نظام الرهبنة التوحدية الانفرادية (Anchoritic) بعد سماعه آية الإنجيل: «إن أردت أن تكون كاملاً فاذهب وبع أملاكك وأعط الفقراء» فترك كل شيء وانطلق للصلاة.',
    significanceEn: 'Inception of anchoritic (solitary) monasticism after hearing Christ\'s words: "Go, sell what you have and give to the poor, and come, follow Me."',
    legacyAr: 'كتب القديس أثناسيوس سيرته الخالدة "حياة أنطونيوس" التي ألهمت العالم الروماني وأسست حركة التبتل الروحي في قارات العالم أجمع.',
    legacyEn: 'St. Athanasius\'s biography "Vita Antonii" became an antiquity classic, inspiring countless souls across the Mediterranean to seek inner ascetic transcendence.'
  },
  {
    id: 'milestone_pachomius',
    eraAr: 'القرن الرابع الميلادي (حوالي ٢٩٢ - ٣٤٦م)',
    eraEn: '4th Century AD (c. 292–346 AD)',
    leaderAr: 'القديس باخوميوس (أب الشركة الرهبانية)',
    leaderEn: 'St. Pachomius (Father of Cenobitic Monasticism)',
    locationAr: 'صعيد مصر (دندرة، طمبوش، والأقصر)',
    locationEn: 'Upper Egypt (Tabennisi, Faw Qibli, Dandara)',
    significanceAr: 'ابتكار نظام الرهبنة الجماعية المنظمة (Cenobitic / Koinonia) بقوانين ملزمة للصلاة المشتركة، والعمل اليدوي المثمر، والتكافل الاجتماعي الشامل.',
    significanceEn: 'Pioneered cenobitic communal monasticism with standardized rules for communal liturgy, manual industry, mutual obedience, and egalitarian fraternity.',
    legacyAr: 'أصبحت الأديرة الباخومية قلاعاً للإنتاج الزراعي والحرفي، وإطعام الجوعى، ونسخ المخطوطات الفلسفية والدينية القديمة.',
    legacyEn: 'Pachomian monastic cities evolved into thriving centers of craftsmanship, agrarian productivity, charitable distribution, and manuscript copying.'
  },
  {
    id: 'milestone_macarius',
    eraAr: 'القرن الرابع الميلادي (حوالي ٣٠٠ - ٣٩١م)',
    eraEn: '4th Century AD (c. 300–391 AD)',
    leaderAr: 'القديس مقار الكبير (أبو رهبنة وادي النطرون)',
    leaderEn: 'St. Macarius the Great (Wadi al-Natrun Desert Pioneer)',
    locationAr: 'صحراء شيهيت (وادي النطرون - برية الإسقيط)',
    locationEn: 'Wadi al-Natrun (Desert of Scetis - Nitria and Kellia)',
    significanceAr: 'تأسيس الرهبنة شبه التوحدية (Semi-eremitic) حيث يجتمع الرهبان يومي السبت والأحد للقداس والمائدة المشتركة، ويعتكفون طوال الأسبوع في قلاليهم المنفصلة.',
    significanceEn: 'Established semi-eremitic monasticism combining individual solitary contemplation during weekdays with communal Eucharistic assembly on weekends.',
    legacyAr: 'خلّف تراثاً روحياً فريداً في رسائله الخمسين الروحية التي تعد قمة في التحليل النفسي المسيحي ومكاشفة أهواء الروح واختبار النور الإلهي.',
    legacyEn: 'Authored fifty profound spiritual homilies exploring mystical illumination, purity of heart, and the transformation of the human psyche by grace.'
  },
  {
    id: 'milestone_shenouda',
    eraAr: 'القرن الرابع والخامس الميلادي (حوالي ٣٤٨ - ٤٦٦م)',
    eraEn: '4th–5th Century AD (c. 348–466 AD)',
    leaderAr: 'الأنبا شنودة رئيس المتوحدين',
    leaderEn: 'St. Shenouda the Archimandrite',
    locationAr: 'سوهاج - صعيد مصر (الدير الأبيض والدير الأحمر)',
    locationEn: 'Sohag, Upper Egypt (The White and Red Monasteries)',
    significanceAr: 'تطوير الرهبنة المجتمعية وتوسيعها لتضم آلاف الرهبان والراهبات، وقيادة نهضة وطنية دافعت عن الفلاحين المستضعفين ورفضت المظالم الاجتماعية.',
    significanceEn: 'Expanded communal monasticism to encompass thousands of monks and nuns while championing national social justice for oppressed peasants against feudal exploitation.',
    legacyAr: 'عميد الأدب القبطي الصعيدي الكلاسيكي ومؤسس النثر القبطي البليغ؛ وتعد مكتبة الدير الأبيض من أضخم كنوز المخطوطات في تاريخ مصر القديم.',
    legacyEn: 'Foremost master of classical Sahidic Coptic literature and rhetoric; the White Monastery library preserved one of antiquity\'s greatest manuscript collections.'
  },
  {
    id: 'milestone_holy_family',
    eraAr: 'فجر التاريخ الميلادي (العام الأول الميلادي)',
    eraEn: 'Dawn of Common Era (c. 1 AD)',
    leaderAr: 'العائلة المقدسة (السيد المسيح، القديسة مريم، ويوسف النجار)',
    leaderEn: 'The Holy Family (Christ Child, Virgin Mary, St. Joseph)',
    locationAr: 'مسار مصر التاريخي (سيناء، الدلتا، وادي النطرون، القاهرة القديمة، وأسيوط - دير المحرق)',
    locationEn: 'Trans-Egyptian Refuge Trail (Sinai, Delta, Old Cairo, Nile Valley to Mount Qusqam)',
    significanceAr: 'لجوء السيد المسيح طفلاً إلى مصر هرباً من اضطهاد هيرودس، مباركاً تراب مصر ومؤسساً لملاذ تاريخي آمن للحضارة الإنسانية والإيمان الإلهي.',
    significanceEn: 'The Christ Child sought refuge in Egypt escaping King Herod\'s tyranny, sanctifying Egyptian soil and establishing it as an enduring universal sanctuary of peace.',
    legacyAr: 'تحقيق النبوة الخالدة: «مبارك شعبي مصر» (إشعياء ١٩: ٢٥)؛ وتحول مسار العائلة المقدسة إلى تراث إنساني وروحي عالمي موثق دولياً.',
    legacyEn: 'Fulfillment of Isaiah\'s prophetic blessing: "Blessed be Egypt My people" (Isa 19:25), consecrating Egypt\'s global cultural and pilgrimage heritage.'
  }
];

export const GOSPEL_SYNOPTICS: GospelSynopticItem[] = [
  {
    id: 'gospel_matthew',
    gospelAr: 'إنجيل القديس متى',
    gospelEn: 'Gospel according to St. Matthew',
    authorAr: 'متى الرسول (لاوي بن حلفى) - كان جابياً للضرائب قبل دعوته الرسولية',
    authorEn: 'St. Matthew the Apostle (Levi), former tax collector called by Christ',
    symbolAr: 'رمز الإنسان / الملاك (لتركيزه على نسب المسيح وتجسده البشري)',
    symbolEn: 'Winged Man / Angel (emphasizing Christ\'s human genealogy and Incarnation)',
    targetAudienceAr: 'المؤمنون من أصل يهودي في فلسطين والعالم الشرقي',
    targetAudienceEn: 'Jewish-Christian believers in Palestine and Antioch',
    keyThemeAr: 'يسوع المسيح هو المسيا المنتظر متمم نبوات وعهود العهد القديم',
    keyThemeEn: 'Jesus is the Promised Messiah-King fulfilling Old Testament covenants',
    notablePassageAr: 'العظة على الجبل (متى ٥ - ٧)، التطويبات، وأمثال ملكوت السماوات',
    notablePassageEn: 'The Sermon on the Mount (Matt 5-7), The Beatitudes, and Kingdom Parables',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/matthew/005.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/Matthew/01_matthew_05.mp3',
    passageRefAr: 'العظة على الجبل والتطويبات (متى ٥)',
    passageRefEn: 'Sermon on the Mount & Beatitudes (Matt 5)'
  },
  {
    id: 'gospel_mark',
    gospelAr: 'إنجيل القديس مرقس',
    gospelEn: 'Gospel according to St. Mark',
    authorAr: 'يوحنا الملقب مرقس - كاروز الديار المصرية ومؤسس كنيسة الإسكندرية',
    authorEn: 'John Mark, Evangelist of Egypt and Apostle of Alexandria',
    symbolAr: 'رمز الأسد (لصوته الصارخ في البرية وإبراز قوة وسلطان المسيح)',
    symbolEn: 'Winged Lion (roaring in the wilderness, portraying Christ\'s divine power)',
    targetAudienceAr: 'المؤمنون في روما والعالم الأممي الروماني الباحث عن القوة والفاعلية',
    targetAudienceEn: 'Roman and Gentile Christians seeking action and dynamic power',
    keyThemeAr: 'المسيح الخادم الباذل ذو السلطان الفائق على قوى الطبيعة والشر والمرض',
    keyThemeEn: 'Christ the Mighty Servant possessing sovereign power over disease and evil',
    notablePassageAr: 'أقصر الأناجيل زمناً وأسرعها إيقاعاً، استخدام لفظ "للوقت / حالاً" أكثر من ٤٠ مرة',
    notablePassageEn: 'Fastest-paced gospel, emphasizing immediate actions using the Greek "Euthus" (immediately)',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/mark/001.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/Mark/02_mark_01.mp3',
    passageRefAr: 'صوت صارخ في البرية وإعلان البشارة (مرقس ١)',
    passageRefEn: 'Voice in Wilderness & Good News (Mark 1)'
  },
  {
    id: 'gospel_luke',
    gospelAr: 'إنجيل القديس لوقا',
    gospelEn: 'Gospel according to St. Luke',
    authorAr: 'لوقا الطبيب الحبيب الرسام والمؤرخ الدقيق - رفيق رحلات القديس بولس',
    authorEn: 'St. Luke the Physician, historian, iconographer, companion of St. Paul',
    symbolAr: 'رمز الثور (رمز الذبيحة والكفارة وتركيزه على البعد الكهنوتي والخلاصي)',
    symbolEn: 'Winged Ox (symbol of sacrificial atonement and priestly compassion)',
    targetAudienceAr: 'اليونانيون والأمميون والمفكرون الباحثون عن الجمال والكمال الإنساني',
    targetAudienceEn: 'Hellenistic Greeks and cultured Gentile world seeking ideal humanity',
    keyThemeAr: 'المسيح ابن الإنسان، مخلص الجميع، صديق الفقراء والخطاة والمنبوذين والنساء',
    keyThemeEn: 'Christ the Compassionate Son of Man, Savior of all nations and marginalized',
    notablePassageAr: 'مثل الابن الضال، السامري الصالح، الفريسي والعشار، ونشيد مريم (المعظم)',
    notablePassageEn: 'Parables of the Prodigal Son, Good Samaritan, Pharisee & Publican, and the Magnificat',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/luke/001.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/Luke/03_luke_01.mp3',
    passageRefAr: 'بشارة الملاك وتسبحة تعظم نفسي الرب (لوقا ١)',
    passageRefEn: 'The Annunciation & The Magnificat (Luke 1)'
  },
  {
    id: 'gospel_john',
    gospelAr: 'إنجيل القديس يوحنا',
    gospelEn: 'Gospel according to St. John',
    authorAr: 'يوحنا بن زبدي (التلميذ الحبيب) - اللاهوتي الرائي كاتب سفر الرؤيا',
    authorEn: 'St. John the Beloved Apostle, Theologian, author of the Apocalypse',
    symbolAr: 'رمز النسر (لتحليقه في سماء اللاهوت والتأمل في أزلية الكلمة المتجسد)',
    symbolEn: 'Winged Eagle (soaring into contemplative heights of eternal Logos Christology)',
    targetAudienceAr: 'الكنيسة الجامعة وكافة المتأملين في سر كينونة الله ومحبته الفائقة',
    targetAudienceEn: 'The Universal Church and mature seekers of divine contemplative truth',
    keyThemeAr: 'لاهوت المسيح الكلمة الأزلي، النور الحقيقي، وسر الإيمان الواهب للحياة الأبدية',
    keyThemeEn: 'The Deity of the Incarnate Logos, the True Light, granting eternal life through faith',
    notablePassageAr: 'مقدمة اللوغوس (يوحنا ١: ١-١٤)، حوار نيقوديموس (يوحنا ٣)، وحديث الخبز الحي (يوحنا ٦)',
    notablePassageEn: 'Prologue of the Logos (John 1:1-14), Nicodemus dialogue (John 3), Bread of Life (John 6)',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/john/001.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/John/04_john_01.mp3',
    passageRefAr: 'مقدمة اللوغوس: في البدء كان الكلمة (يوحنا ١)',
    passageRefEn: 'Prologue of the Logos: In the Beginning (John 1)'
  }
];

export const AUTHENTIC_CHRISTIAN_SCRIPTURE_RECORDINGS: AuthenticScriptureRecording[] = [
  {
    id: 'rec_beatitudes',
    titleAr: 'تطويبات العظة على الجبل الخالدة',
    titleEn: 'The Beatitudes (Sermon on the Mount)',
    referenceAr: 'إنجيل متى ٥: ١-١٢',
    referenceEn: 'Matthew 5:1-12',
    themeAr: 'دستور الأخلاق المسيحية ودعوة الطهارة والسلام الداخلي',
    themeEn: 'Foundational Charter of Christian Ethics, Peace, and Purity of Heart',
    textAr: '«طُوبَى لِلْمَسَاكِينِ بِالرُّوحِ، لأَنَّ لَهُمْ مَلَكُوتَ السَّمَاوَاتِ. طُوبَى لِلْحَزَانَى، لأَنَّهُمْ يُعَزَّوْنَ. طُوبَى لِلْوُدَعَاءِ، لأَنَّهُمْ يَرِثُونَ الأَرْضَ. طُوبَى لِلْجِيَاعِ وَالْعِطَاشِ إِلَى الْبِرِّ، لأَنَّهُمْ يُشْبَعُونَ. طُوبَى لِلرُّحَمَاءِ، لأَنَّهُمْ يُرْحَمُونَ. طُوبَى لأَنْقِيَاءِ الْقَلْبِ، لأَنَّهُمْ يُعَايِنُونَ اللهَ. طُوبَى لِصَانِعِي السَّلاَمِ، لأَنَّهُمْ أَبْنَاءَ اللهِ يُدْعَوْنَ.»',
    textEn: '"Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they shall be comforted. Blessed are the meek, for they shall inherit the earth. Blessed are those who hunger and thirst for righteousness, for they shall be filled. Blessed are the merciful, for they shall obtain mercy. Blessed are the pure in heart, for they shall see God. Blessed are the peacemakers, for they shall be called sons of God."',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/matthew/005.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/Matthew/01_matthew_05.mp3',
    reciterAr: 'تسجيل كنسي معتمد — الكتاب المقدس المسموع (سميث وفانديك)',
    reciterEn: 'Church Audio Archive — Arabic Holy Bible (Smith & Van Dyck)'
  },
  {
    id: 'rec_logos_prologue',
    titleAr: 'مقدمة اللوغوس (في البدء كان الكلمة)',
    titleEn: 'Prologue of the Logos (In the Beginning)',
    referenceAr: 'إنجيل يوحنا ١: ١-١٤',
    referenceEn: 'John 1:1-14',
    themeAr: 'أزلية المسيح الكلمة وتجسده لخلاص ونور العالم',
    themeEn: 'Eternal Deity of the Incarnate Word, True Light Illuminating Humanity',
    textAr: '«فِي الْبَدْءِ كَانَ الْكَلِمَةُ، وَالْكَلِمَةُ كَانَ عِنْدَ اللهِ، وَكَانَ الْكَلِمَةُ اللهَ. هذَا كَانَ فِي الْبَدْءِ عِنْدَ اللهِ. كُلُّ شَيْءٍ بِهِ كَانَ، وَبِغَيْرِهِ لَمْ يَكُنْ شَيْءٌ مِمَّا كَانَ. فِيهِ كَانَتِ الْحَيَاةُ، وَالْحَيَاةُ كَانَتْ نُورَ النَّاسِ، وَالنُّورُ يُضِيءُ فِي الظُّلْمَةِ، وَالظُّلْمَةُ لَمْ تُدْرِكْهُ... وَالْكَلِمَةُ صَارَ جَسَدًا وَحَلَّ بَيْنَنَا، وَرَأَيْنَا مَجْدَهُ.»',
    textEn: '"In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through Him, and without Him nothing was made that was made. In Him was life, and the life was the light of men. And the light shines in the darkness, and the darkness did not comprehend it... And the Word became flesh and dwelt among us, and we beheld His glory."',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/john/001.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/John/04_john_01.mp3',
    reciterAr: 'تسجيل كنسي معتمد — الكتاب المقدس المسموع (سميث وفانديك)',
    reciterEn: 'Church Audio Archive — Arabic Holy Bible (Smith & Van Dyck)'
  },
  {
    id: 'rec_love_chapter',
    titleAr: 'أصحاح المحبة الخالدة (أنشودة الفضائل)',
    titleEn: 'The Hymn of Divine Love',
    referenceAr: '١ كورنثوس ١٣: ١-١٣',
    referenceEn: '1 Corinthians 13:1-13',
    themeAr: 'سمو المحبة الباذلة وخلودها فوق جميع المواهب والأعمال',
    themeEn: 'Supremacy and Eternity of Selfless Agápe Love',
    textAr: '«الْمَحَبَّةُ تَتَأَنَّى وَتَرْفُقُ. الْمَحَبَّةُ لاَ تَحْسِدُ. الْمَحَبَّةُ لاَ تَتَفَاخَرُ، وَلاَ تَنْتَفِخُ، وَلاَ تُقَبِّحُ، وَلاَ تَطْلُبُ مَا لِنَفْسِهَا، وَلاَ تَحْتَدُّ، وَلاَ تَظُنُّ السُّوءَ، وَلاَ تَفْرَحُ بِالإِثْمِ بَلْ تَفْرَحُ بِالْحَقِّ، وَتَحْتَمِلُ كُلَّ شَيْءٍ، وَتُصَدِّقُ كُلَّ شَيْءٍ، وَتَرْجُو كُلَّ شَيْءٍ، وَتَصْبِرُ عَلَى كُلِّ شَيْءٍ. اَلْمَحَبَّةُ لاَ تَسْقُطُ أَبَدًا.»',
    textEn: '"Love suffers long and is kind; love does not envy; love does not parade itself, is not puffed up; does not behave rudely, does not seek its own, is not provoked, thinks no evil; does not rejoice in iniquity, but rejoices in the truth; bears all things, believes all things, hopes all things, endures all things. Love never fails."',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/1corinthians/013.mp3',
    reciterAr: 'تسجيل كنسي معتمد — رسائل بولس الرسول (سميث وفانديك)',
    reciterEn: 'Church Audio Archive — Pauline Epistles (Smith & Van Dyck)'
  },
  {
    id: 'rec_psalm_23',
    titleAr: 'مزمور الراعي الصالح والسلام الروحي',
    titleEn: 'Psalm 23 (The Lord is My Shepherd)',
    referenceAr: 'مزمور ٢٣: ١-٦',
    referenceEn: 'Psalm 23:1-6',
    themeAr: 'الثقة المطلقة في رعاية الله وعنايته الفائقة بالإنسان',
    themeEn: 'Unwavering Confidence in God’s Loving Pastoral Care and Solace',
    textAr: '«الرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ. فِي مَرَاعٍ خُضْرٍ يُرْبِضُنِي. إِلَى مِيَاهِ الرَّاحَةِ يُورِدُنِي. يَرُدُّ نَفْسِي. يَهْدِينِي إِلَى سُبُلِ الْبِرِّ مِنْ أَجْلِ اسْمِهِ. أَيْضًا إِذَا سِرْتُ فِي وَادِي ظِلِّ الْمَوْتِ لاَ أَخَافُ شَرًّا، لأَنَّكَ أَنْتَ مَعِي. عَصَاكَ وَعُكَّازُكَ هُمَا يُعَزِّيَانِنِي.»',
    textEn: '"The Lord is my shepherd; I shall not want. He makes me to lie down in green pastures; He leads me beside the still waters. He restores my soul; He leads me in the paths of righteousness For His name\'s sake. Yea, though I walk through the valley of the shadow of death, I will fear no evil; For You are with me; Your rod and Your staff, they comfort me."',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/psalms/023.mp3',
    reciterAr: 'تسجيل كنسي معتمد — سفر المزامير (سميث وفانديك)',
    reciterEn: 'Church Audio Archive — Book of Psalms (Smith & Van Dyck)'
  },
  {
    id: 'rec_magnificat',
    titleAr: 'تسبحة العذراء مريم (تعظم نفسي الرب)',
    titleEn: 'The Magnificat (Hymn of the Virgin Mary)',
    referenceAr: 'إنجيل لوقا ١: ٤٦-٥٥',
    referenceEn: 'Luke 1:46-55',
    themeAr: 'التواضع وشكر الله على نعمته وتجسد المخلص لرفع المتضعين',
    themeEn: 'Joyful Praise, Humility, and Thanksgiving for Divine Salvation',
    textAr: '«تُعَظِّمُ نَفْسِي الرَّبَّ، وَتَبْتَهِجُ رُوحِي بِاللهِ مُخَلِّصِي، لأَنَّهُ نَظَرَ إِلَى اتِّضَاعِ أَمَتِهِ. فَهُوَذَا مُنْذُ الآنَ جَمِيعُ الأَجْيَالِ تُطَوِّبُنِي، لأَنَّ الْقَدِيرَ صَنَعَ بِي عَظَائِمَ، وَاسْمُهُ قُدُّوسٌ، وَرَحْمَتُهُ إِلَى جِيلِ الأَجْيَالِ لِلَّذِينَ يَتَّقُونَهُ.»',
    textEn: '"My soul magnifies the Lord, and my spirit has rejoiced in God my Savior. For He has regarded the lowly state of His maidservant; for behold, henceforth all generations will call me blessed. For He who is mighty has done great things for me, and holy is His name. And His mercy is on those who fear Him from generation to generation."',
    audioUrl: 'https://archive.org/download/bible_Audio_Arabicavddv/luke/001.mp3',
    audioFallbackUrl: 'https://www.audiotreasure.com/mp3/Arabic/Luke/03_luke_01.mp3',
    reciterAr: 'تسجيل كنسي معتمد — إنجيل لوقا (سميث وفانديك)',
    reciterEn: 'Church Audio Archive — Gospel of Luke (Smith & Van Dyck)'
  }
];

export const BIOETHICS_TOPICS: BioethicsTopic[] = [
  {
    id: 'bio_organ_donation',
    titleAr: 'التبرع بالأعضاء وزراعتها بين الأحياء والموتى',
    titleEn: 'Organ Donation and Transplantation',
    statusAr: 'مباح ومستحسن',
    statusEn: 'Permitted & Encouraged',
    theologicalPrincipleAr: 'المحبة الباذلة والإيثار؛ «لَيْسَ لأَحَدٍ حُبٌّ أَعْظَمُ مِنْ هذَا: أَنْ يَضَعَ أَحَدٌ نَفْسَهُ لأَجْلِ أَحِبَّائِهِ» (يوحنا ١٥: ١٣).',
    theologicalPrincipleEn: 'Sacrificial charity and altruism; "Greater love has no one than this, than to lay down one\'s life for his friends" (John 15:13).',
    pastoralGuidanceAr: 'يشترط التطوع الكامل دون أي مقابل مادي أو تجارة بالأعضاء، والتأكد التام من عدم تعريض حياة المتبرع الحي للخطر الجسيم.',
    pastoralGuidanceEn: 'Strictly requires informed voluntary consent, absolute prohibition of commercial trafficking, and safeguarding living donor health.'
  },
  {
    id: 'bio_euthanasia',
    titleAr: 'القتل الرحيم والانتحار الطبي المساعد',
    titleEn: 'Euthanasia and Assisted Suicide',
    statusAr: 'محظور قطعياً',
    statusEn: 'Strictly Prohibited',
    theologicalPrincipleAr: 'قدسية الحياة البشرية وسلطان الله المطلق؛ الحياة أمانة إلهية من لحظة تكوينها وحتى نهايتها الطبيعية، والقتل عمد وانتهاك لوصية «لا تقتل».',
    theologicalPrincipleEn: 'Sanctity of life and divine sovereignty; human life is a sacred trust from conception to natural demise; violation of "Thou shalt not kill".',
    pastoralGuidanceAr: 'توفير الطب التلطيفي المتخصص لتسكين الألم ومرافقة المريض بالمحبة والصلوات، مع رفض تعذيب المريض بالإصرار العلاجي العبثي.',
    pastoralGuidanceEn: 'Mandates palliative medicine, pain relief, and compassionate companionship, while distinguishing between active killing and stopping futile obstinacy.'
  },
  {
    id: 'bio_genetic_engineering',
    titleAr: 'الهندسة الوراثية وتعديل الجينات (CRISPR)',
    titleEn: 'Genetic Engineering and Gene Editing',
    statusAr: 'مشروط بضوابط صارمة',
    statusEn: 'Conditionally Permitted',
    theologicalPrincipleAr: 'الاستخدام العلاجي لإصلاح الخلل الجيني مباح كجزء من أمانة مداواة الأمراض، أما تحسين النسل أو العبث بالهوية البشرية فمرفوض.',
    theologicalPrincipleEn: 'Somatic gene therapy to heal congenital diseases is ethical stewardship; eugenic enhancement or germline alteration is rejected.',
    pastoralGuidanceAr: 'يُشترط قصر التجارب على الخلايا الجسدية غير التناسلية لعلاج الأمراض المستعصية، مع الحظر التام لاستنساخ البشر أو تدمير الأجنة الإنسانية.',
    pastoralGuidanceEn: 'Confines therapeutic intervention to non-germline cells for severe diseases; bans human reproductive cloning and destruction of embryos.'
  },
  {
    id: 'bio_ai_ethics',
    titleAr: 'الذكاء الاصطناعي وما بعد الإنسانية (Transhumanism)',
    titleEn: 'Artificial Intelligence and Transhumanism',
    statusAr: 'مشروط بضوابط صارمة',
    statusEn: 'Conditionally Permitted',
    theologicalPrincipleAr: 'الإنسان كائن فريد مخلوق على صورة الله يمتلك روحاً وعقلاً وضميراً؛ والآلة خادمة للإنسان ولا يمكن أن تحل محل الضمير والمسؤولية الأخلاقية.',
    theologicalPrincipleEn: 'Humans uniquely bear the Image of God (Imago Dei); algorithmic AI is a tool that must never usurp moral agency or human conscience.',
    pastoralGuidanceAr: 'تسخير الذكاء الاصطناعي لتطوير الرعاية الصحية والتعليم ومكافحة الفقر، مع وضع رقابة أخلاقية صارمة تمنع التمييز الخوارزمي أو سلب حرية الإرادة.',
    pastoralGuidanceEn: 'Harness AI for medicine, education, and human welfare under stringent ethics preventing dehumanization or surrender of moral decision-making.'
  }
];

export const CHRISTIAN_SCENARIO_QUIZ: ChristianScenarioQuizItem[] = [
  {
    id: 'chr_quiz_1',
    questionAr: 'وفقاً للمقرر الوزاري المعتمد لمادة التربية الدينية المسيحية، ما هو المفهوم اللاهوتي الدقيق لسر الكهنوت المقدس والخلافة الرسولية؟',
    questionEn: 'According to the official Christian curriculum, what is the precise theological understanding of the Sacrament of Priesthood and Apostolic Succession?',
    optionsAr: [
      'خدمة رعوية ينال فيها المختارون موهبة الروح القدس بوضع يد الأسقف الشرعي لرعاية الشعب وإقامة الأسرار وحفظ الإيمان عبر تسلسل تاريخي رسولي غير منقطع.',
      'مجرد وظيفة إدارية واجتماعية يختار فيها أفراد المجتمع ممثليهم لتنظيم الشؤون المالية والخدمية بالكنيسة دون حاجة لرسامة طقسية.',
      'ممارسة فردية قائمة على ادعاء الإلهام الباطني المباشر دون التقيد بتسلسل الكنيسة الرسولي أو القوانين الآبائية المعتمدة.',
      'مرتبة تشريفية شرفية تقتصر على تقديم النصائح الأخلاقية العامة دون امتلاك أي سلطان لمباشرة أسرار الخلاص كالقداس والمعمودية.'
    ],
    optionsEn: [
      'A sacred pastoral ministry wherein candidates receive Holy Spirit grace via episcopal laying on of hands to shepherd the flock and administer sacraments via unbroken apostolic lineage.',
      'A mere administrative and civic job where community members elect organizers for financial affairs without liturgical ordination.',
      'An individualistic practice based on claims of private revelation divorced from apostolic lineage or patristic canons.',
      'An honorary advisory title limited to offering general moral advice with no sacramental authority to administer the mysteries.'
    ],
    correctIndex: 0,
    explanationAr: 'التحليل المنهجي المعتمد: الكهنوت سر مقدس وخدمة رعوية مستمدة من كهنوت المسيح الأعظم عبر الخلافة الرسولية المستمرة من عهد الرسل بوضع يد الأسقف الشرعي.',
    explanationEn: 'Accredited Curriculum Analysis: Priesthood is an apostolic sacrament originating in Christ\'s eternal priesthood, perpetuated through unbroken episcopal succession.'
  },
  {
    id: 'chr_quiz_2',
    questionAr: 'ما هو الدور التاريخي واللاهوتي الحاسم الذي لعبه القديس أثناسيوس الرسولي في مجمع نيقية المسكوني (٣٢٥م)؟',
    questionEn: 'What was the decisive historical and theological role of St. Athanasius the Apostolic at the Ecumenical Council of Nicaea (325 AD)?',
    optionsAr: [
      'الدفاع المستميت عن لاهوت السيد المسيح ومساواته للآب في الجوهر (هومواوسيوس)، ودحض بدعة أريوس التي أنكرت ألوهية الابن الأزلية.',
      'إقرار التنازل عن العقيدة الأرثوذكسية لصالح التسويات السياسية الإمبراطورية لتجنب عقوبات النفي المتكررة.',
      'المطالبة بإلغاء نصوص العهد القديم واعتماد الفلسفة اليونانية الوثنية وحدها كمرجع عقائدي للكنيسة الجامعة.',
      'حصر التعليم المسيحي في براري الرهبنة المنعزلة ومنع ترجمة الكتاب المقدس إلى أي لغة شعبية متداولة.'
    ],
    optionsEn: [
      'Stalwartly defending Christ\'s full deity as consubstantial with the Father (Homoousios), decisively refuting the Arian heresy.',
      'Compromising orthodox dogma in favor of imperial political settlements to avoid multiple exiles.',
      'Demanding the elimination of the Old Testament and adopting pagan philosophy as the sole theological authority.',
      'Restricting Christian doctrine to isolated desert monasteries and prohibiting Bible translation into vernacular tongues.'
    ],
    correctIndex: 0,
    explanationAr: 'التحليل المنهجي المعتمد: واجه القديس أثناسيوس بدعة أريوس في مجمع نيقية، وصاغ مع آباء المجمع مصطلح "هومواوسيوس" مؤكداً ألوهية المسيح الأزلية.',
    explanationEn: 'Accredited Curriculum Analysis: St. Athanasius championed the term "Homoousios" against Arius, affirming Christ\'s eternal and uncreated divinity.'
  },
  {
    id: 'chr_quiz_3',
    questionAr: 'كيف يوازن الفكر المسيحي بين المواطنة الصالحة والالتزام بالواجبات الوطنية وبين الإيمان الروحي؟',
    questionEn: 'How does Christian thought balance active citizenship and civic duty with spiritual faith?',
    optionsAr: [
      'تطبيق مبدأ «أعطوا ما لقيصر لقيصر وما لله لله»، بالالتزام الصادق بالقوانين والدفاع عن الوطن ودفع الضرائب في تناغم مع تقوى الله والعبادة الصادقة.',
      'الانسحاب التام من الشأن العام والامتناع عن المشاركة في أي عمل وطني أو مجتمعي بدعوى أن العالم فاني.',
      'تقديم المصالح الفئوية الخاصة على المصلحة العامة للوطن ومحاولة التهرب من أداء الواجبات الضريبية والعسكرية.',
      'اعتبار القوانين الوضعية شراً لا يجوز الالتزام به تحت أي ظرف من الظروف الإنسانية.'
    ],
    optionsEn: [
      'Applying "Render to Caesar what is Caesar\'s and to God what is God\'s", diligently obeying laws, defending the nation, and paying taxes in harmony with worship.',
      'Total withdrawal from public life and abstaining from civic engagement under the premise of earthly transience.',
      'Subordinating national welfare to narrow sectarian interests while evading taxes and military service.',
      'Viewing civil laws as inherently evil that should never be obeyed under any circumstances.'
    ],
    correctIndex: 0,
    explanationAr: 'التحليل المنهجي المعتمد: تحث المسيحية على حب الوطن والانتماء الإيجابي الصادق، والالتزام بالقوانين وحماية مقدرات الوطن انطلاقاً من تعاليم الإنجيل.',
    explanationEn: 'Accredited Curriculum Analysis: Christianity commands loyal citizenship, constructive participation in national progress, and mutual civic fraternity.'
  },
  {
    id: 'chr_quiz_4',
    questionAr: 'ما هو الموقف المنهجي المعتمد في الفكر المسيحي بشأن مسألة التبرع بالأعضاء لإنقاذ حياة المرضى؟',
    questionEn: 'What is the verified curriculum stance in Christian thought regarding organ donation to save patient lives?',
    optionsAr: [
      'مباح ومستحسن باعتباره عملاً جليلاً من أعمال المحبة والإيثار لإنقاذ نفس بشرية، بشرط التطوع الكامل وحظر أي اتجار مادي بالأعضاء.',
      'محرم تحريماً قاطعاً في كافة الظروف باعتباره تشويهاً للجسد وتعدياً غير مبرر على الخليقة.',
      'مشروط بالحصول على مقابل مالي مجزٍ للمتبرع أو ذويه لتعويض الأضرار الاقتصادية المادية.',
      'مقتصر حصرياً على الأقارب من الدرجة الأولى مع حظر التبرع لأي مواطن آخر من أبناء الوطن.'
    ],
    optionsEn: [
      'Permitted and commended as an act of altruistic love to save human life, strictly conditioned on voluntary consent and zero commercial trade.',
      'Strictly prohibited under all circumstances as an unacceptable bodily mutilation.',
      'Conditioned on receiving substantial financial compensation to offset economic burdens.',
      'Restricted exclusively to first-degree relatives while barring donation to fellow citizens.'
    ],
    correctIndex: 0,
    explanationAr: 'التحليل المنهجي المعتمد: يرى الفكر المسيحي في التبرع الطوعي بالأعضاء أسمى درجات المحبة الباذلة التي تسهم في إنقاذ حياة إنسان مع التحريم التام للاتجار.',
    explanationEn: 'Accredited Curriculum Analysis: Voluntary, altruistic organ donation without commercial trade is celebrated as a manifestation of Christ-like sacrificial love.'
  },
  {
    id: 'chr_quiz_5',
    questionAr: 'ما هي الخاصية المميزة لرهبنة القديس باخوميوس (نظام الشركة) مقارنة برهبنة القديس أنطونيوس التوحدية؟',
    questionEn: 'What is the distinguishing feature of St. Pachomius\'s monasticism (Cenobitic system) compared to St. Antony\'s anchoritic monasticism?',
    optionsAr: [
      'تأسيس حياة ديرية جماعية منظمة تشمل الصلوات المشتركة والعمل اليدوي والتكافل الاجتماعي، بدلاً من العزلة التامة والانفراد في البرية.',
      'إلغاء العمل اليدوي تماماً والاعتماد الكلي على المعونات الخارجية من المدن الرومانية المجاورة.',
      'التركيز الحصري على الفلسفة العقلية النظرية ورفض قراءة أسفار الكتاب المقدس أو الترانيم.',
      'السماح للرهبان بالعودة اليومية إلى منازلهم في القرى بعد انتهاء صلاة الصباح الباكر.'
    ],
    optionsEn: [
      'Establishing organized communal monastic life featuring scheduled shared prayer, manual labor, and communal meals, unlike solitary hermitage.',
      'Eliminating manual labor entirely and relying exclusively on foreign subsidies from Roman cities.',
      'Focusing exclusively on theoretical philosophy while rejecting scriptures and hymns.',
      'Allowing monks to return daily to their village homes following early morning prayers.'
    ],
    correctIndex: 0,
    explanationAr: 'التحليل المنهجي المعتمد: ابتكر القديس باخوميوس نظام الشركة (Cenobitic) ليجمع الرهبان في دير واحد تسوده المحبة والطاعة والعمل المنظم والصلوات المشتركة.',
    explanationEn: 'Accredited Curriculum Analysis: St. Pachomius founded cenobitic monasticism, structuring community life around shared prayer, productive industry, and mutual charity.'
  }
];
