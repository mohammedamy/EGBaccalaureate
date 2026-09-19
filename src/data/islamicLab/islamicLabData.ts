export interface TajweedRuleItem {
  id: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  letters: string[];
  descriptionAr: string;
  descriptionEn: string;
  quranicExamples: {
    verseText: string;
    surahName: string;
    surahNumber: number;
    ayahNumber: number;
    highlightedPart: string;
    explanationAr: string;
    explanationEn: string;
  }[];
}

export interface MaqasidCategory {
  id: string;
  titleAr: string;
  titleEn: string;
  essentialAr: string;
  essentialEn: string;
  priorityLevel: 'ضروريات' | 'حاجيات' | 'تحسينيات';
  cases: {
    scenarioAr: string;
    scenarioEn: string;
    applicationAr: string;
    applicationEn: string;
    fiqhMaximAr: string;
    fiqhMaximEn: string;
  }[];
}

export interface SeerahMilestone {
  id: string;
  yearHijri: number;
  titleAr: string;
  titleEn: string;
  eventSummaryAr: string;
  eventSummaryEn: string;
  strategicLessonsAr: string[];
  strategicLessonsEn: string[];
  constitutionalPrincipleAr: string;
  constitutionalPrincipleEn: string;
}

export interface BioethicsIssue {
  id: string;
  titleAr: string;
  titleEn: string;
  category: 'bioethics' | 'ai_ethics' | 'environment' | 'social_rumors';
  dilemmaAr: string;
  dilemmaEn: string;
  islamicStanceAr: string;
  islamicStanceEn: string;
  shariaGuidingPrinciplesAr: string[];
  shariaGuidingPrinciplesEn: string[];
  consensusResolutionAr: string;
  consensusResolutionEn: string;
}

export interface IslamicQuizQuestion {
  id: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
  topicCategoryAr: string;
  topicCategoryEn: string;
}

export const TAJWEED_RULES_DATA: TajweedRuleItem[] = [
  {
    id: 'noon_izhar',
    nameAr: 'الإظهار الحلقي للنون الساكنة والتنوين',
    nameEn: 'Clear Throat Pronunciation (Izhar Halqi)',
    categoryAr: 'أحكام النون الساكنة والتنوين',
    categoryEn: 'Nun Sakinah and Tanween Rules',
    letters: ['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'],
    descriptionAr: 'إخراج النون الساكنة أو التنوين من مخرجها بوضوح تام دون غنة ظاهرة إذا جاء بعدها أحد حروف الحلق الستة المجموعة في أوائل: (أخي هاك علماً حازه غير خاسر).',
    descriptionEn: 'Pronouncing the Nun Sakinah or Tanween distinctly from its articulation point without added ghunnah when followed by one of the six throat letters.',
    quranicExamples: [
      {
        verseText: 'مِنْ خَوْفٍ',
        surahName: 'قريش',
        surahNumber: 106,
        ayahNumber: 4,
        highlightedPart: 'مِنْ خَـ',
        explanationAr: 'جاءت الخاء (وهي من حروف الحلق) بعد النون الساكنة، فيجب إظهار النون نطقاً واضحاً بغير غنة زائدة.',
        explanationEn: 'The letter Kha (a throat letter) follows Nun Sakinah, requiring clear throat articulation without prolonged ghunnah.'
      },
      {
        verseText: 'وَأَمَّا مَنْ آمَنَ وَعَمِلَ صَالِحًا',
        surahName: 'الكهف',
        surahNumber: 18,
        ayahNumber: 88,
        highlightedPart: 'مَنْ ءَامَنَ',
        explanationAr: 'جاءت الهمزة بعد النون الساكنة، وحكمها الإظهار الحلقي.',
        explanationEn: 'Hamzah follows Nun Sakinah, necessitating standard throat Izhar.'
      },
      {
        verseText: 'عَزِيزٌ حَكِيمٌ',
        surahName: 'البقرة',
        surahNumber: 2,
        ayahNumber: 220,
        highlightedPart: 'عَزِيزٌ حَـ',
        explanationAr: 'جاءت الحاء بعد التنوين، وحكمها الإظهار الحلقي.',
        explanationEn: 'The letter Ha follows Tanween, demanding crisp Izhar.'
      }
    ]
  },
  {
    id: 'noon_idgham_ghunnah',
    nameAr: 'الإدغام بغنة',
    nameEn: 'Assimilation with Nasalization (Idgham with Ghunnah)',
    categoryAr: 'أحكام النون الساكنة والتنوين',
    categoryEn: 'Nun Sakinah and Tanween Rules',
    letters: ['ي', 'ن', 'م', 'و'],
    descriptionAr: 'إدخال النون الساكنة أو التنوين في الحرف الذي يليها بحيث يصيران حرفاً واحداً مشدداً مصحوباً بغنة مقدارها حركتان، وحروفه مجموعة في كلمة (ينمو) بشرط أن يكون في كلمتين.',
    descriptionEn: 'Merging the Nun Sakinah or Tanween into the subsequent letter forming a single doubled letter accompanied by a 2-vowel nasal resonance (Ghunnah), occurring across word boundaries.',
    quranicExamples: [
      {
        verseText: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',
        surahName: 'الزلزلة',
        surahNumber: 99,
        ayahNumber: 7,
        highlightedPart: 'فَمَن يَعْمَلْ',
        explanationAr: 'جاءت الياء بعد النون الساكنة في كلمتين منفصلتين، فيدغم الحرفان مع غنة بمقدار حركتين.',
        explanationEn: 'The letter Ya follows Nun Sakinah across word boundary, assimilating with a 2-beat nasal resonance.'
      },
      {
        verseText: 'مِن وَالٍ',
        surahName: 'الرعد',
        surahNumber: 13,
        ayahNumber: 11,
        highlightedPart: 'مِن وَالٍ',
        explanationAr: 'جاءت الواو بعد النون الساكنة، وحكمها الإدغام بغنة.',
        explanationEn: 'Waw follows Nun Sakinah, triggering assimilation with Ghunnah.'
      }
    ]
  },
  {
    id: 'noon_iqlab',
    nameAr: 'الإقلاب (القلب)',
    nameEn: 'Conversion to Meem (Iqlab)',
    categoryAr: 'أحكام النون الساكنة والتنوين',
    categoryEn: 'Nun Sakinah and Tanween Rules',
    letters: ['ب'],
    descriptionAr: 'قلب النون الساكنة أو التنوين إلى ميم مخفاة بغنة مقدارها حركتان إذا وقع بعدها حرف الباء (سواء في كلمة أو كلمتين).',
    descriptionEn: 'Transforming the Nun Sakinah or Tanween into a concealed Meem accompanied by a 2-vowel Ghunnah when followed by the letter Ba.',
    quranicExamples: [
      {
        verseText: 'مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَاتُ',
        surahName: 'البقرة',
        surahNumber: 2,
        ayahNumber: 213,
        highlightedPart: 'مِن بَعْدِ (تُنطق: مِمْبَعْد)',
        explanationAr: 'وقعت الباء بعد النون الساكنة فتقلب النون ميمًا مخفاة مع غنة بمقدار حركتين وتلامس لطيف للشفتين دون كز.',
        explanationEn: 'The letter Ba follows Nun Sakinah, converting the phoneme into an audible Meem with subtle labial contact and Ghunnah.'
      },
      {
        verseText: 'عَلِيمٌ بِذَاتِ الصُّدُورِ',
        surahName: 'آل عمران',
        surahNumber: 3,
        ayahNumber: 119,
        highlightedPart: 'عَلِيمٌ بِـ',
        explanationAr: 'وقع حرف الباء بعد التنوين، وحكمه الإقلاب إلى ميم بغنة.',
        explanationEn: 'Ba follows Tanween, converting it to Meem with Ghunnah.'
      }
    ]
  },
  {
    id: 'noon_ikhfa',
    nameAr: 'الإخفاء الحقيقي',
    nameEn: 'True Concealment (Ikhfa Haqiqi)',
    categoryAr: 'أحكام النون الساكنة والتنوين',
    categoryEn: 'Nun Sakinah and Tanween Rules',
    letters: ['ص', 'ذ', 'ث', 'ك', 'ج', 'ش', 'ق', 'س', 'د', 'ط', 'ز', 'ف', 'ت', 'ض', 'ظ'],
    descriptionAr: 'النطق بالنون الساكنة أو التنوين بحالة متوسطة بين الإظهار والإدغام، عارية عن التشديد مع بقاء الغنة بمقدار حركتين عند حروف الإخفاء الخمسة عشر.',
    descriptionEn: 'Pronouncing the Nun Sakinah or Tanween in an intermediate state between Izhar and Idgham, ungeminated, retaining a 2-vowel Ghunnah before 15 designated consonants.',
    quranicExamples: [
      {
        verseText: 'مِن تَحْتِهَا الأَنْهَارُ',
        surahName: 'البينة',
        surahNumber: 98,
        ayahNumber: 8,
        highlightedPart: 'مِن تَحْتِهَا',
        explanationAr: 'جاءت التاء بعد النون الساكنة، وحكمها الإخفاء الحقيقي مع ترقيق الغنة.',
        explanationEn: 'Ta follows Nun Sakinah, requiring true concealment with a light Ghunnah.'
      },
      {
        verseText: 'مِن قَبْلُ',
        surahName: 'البقرة',
        surahNumber: 2,
        ayahNumber: 25,
        highlightedPart: 'مِن قَبْلُ',
        explanationAr: 'جاءت القاف (حرف استعلاء مفخم) بعد النون الساكنة، فيكون الإخفاء بغنة مفخمة.',
        explanationEn: 'Qaf (an emphatic consonant) follows Nun Sakinah, demanding Ikhfa with an amplified, heavy Ghunnah.'
      }
    ]
  },
  {
    id: 'mudood_rules',
    nameAr: 'أحكام المدود (الأصلي والفرعي)',
    nameEn: 'Rules of Prolongation (Madd Asli & Far\'i)',
    categoryAr: 'أحكام المدود',
    categoryEn: 'Prolongation Classifications',
    letters: ['ا', 'و', 'ي'],
    descriptionAr: 'إطالة الصوت بحرف من حروف المد الثلاثة (الألف الساكنة المفتوح ما قبلها، الواو الساكنة المضموم ما قبلها، الياء الساكنة المكسور ما قبلها)، وينقسم إلى طبيعي (حركتان) وفرعي بسبب همز أو سكون (٤ إلى ٦ حركات).',
    descriptionEn: 'Elongating acoustic duration on the three vowel letters (Alif, Waw, Ya); categorized into natural Madd (2 beats) and secondary Madd triggered by Hamzah or Sukun (4-6 beats).',
    quranicExamples: [
      {
        verseText: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
        surahName: 'النصر',
        surahNumber: 110,
        ayahNumber: 1,
        highlightedPart: 'جَاءَ (مد متصل)',
        explanationAr: 'اجتمع حرف المد والهمزة في كلمة واحدة، وحكمه مد واجب متصل يُمد ٤ أو ٥ حركات وجوباً.',
        explanationEn: 'Madd letter and Hamzah meet within the exact same word, making it Madd Muttasil (4-5 counts obligatory).'
      },
      {
        verseText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا',
        surahName: 'البقرة',
        surahNumber: 2,
        ayahNumber: 183,
        highlightedPart: 'يَا أَيُّهَا (مد منفصل)',
        explanationAr: 'وقع حرف المد في نهاية الكلمة الأولى والهمزة في بداية الكلمة الثانية، وهو مد جائز منفصل يُمد حركتين أو ٤-٥ حركات.',
        explanationEn: 'Madd letter concludes the first word and Hamzah initiates the second, creating Madd Munfasil (2 to 5 counts permissible).'
      }
    ]
  }
];

export const MAQASID_CATEGORIES_DATA: MaqasidCategory[] = [
  {
    id: 'hifz_ad_deen',
    titleAr: 'حفظ الدين والعقيدة',
    titleEn: 'Preservation of Faith (Hifz ad-Deen)',
    essentialAr: 'حماية أصول الإيمان والشعائر وحرية الاعتقاد ومكافحة الشبهات والتطرف الديني.',
    essentialEn: 'Safeguarding theological foundations, freedom of worship, and defending against extremism and theological distortion.',
    priorityLevel: 'ضروريات',
    cases: [
      {
        scenarioAr: 'تشريع الصلاة والزكاة والصوم والحج لإقامة الدين، وتحريم الردة والإكراه في العقيدة: «لا إكراه في الدين».',
        scenarioEn: 'Enjoining fundamental acts of worship and strictly prohibiting religious coercion: "There is no compulsion in religion."',
        applicationAr: 'حماية الهوية الروحية والأخلاقية للمجتمع مع صيانة حرية الضمير والمعتقد لغير المسلمين.',
        applicationEn: 'Protecting societal spiritual integrity while guaranteeing full freedom of conscience for religious minorities.',
        fiqhMaximAr: '«ما لا يتم الواجب إلا به فهو واجب»',
        fiqhMaximEn: 'That without which an obligation cannot be fulfilled becomes an obligation itself.'
      }
    ]
  },
  {
    id: 'hifz_an_nafs',
    titleAr: 'حفظ النفس البشرية',
    titleEn: 'Preservation of Human Life (Hifz an-Nafs)',
    essentialAr: 'تحريم القتل والانتحار والإيذاء الجسدي، وإيجاب الرعاية الصحية وتوفير الغذاء والدواء وإنقاذ المنكوبين.',
    essentialEn: 'Prohibiting homicide, self-harm, and bodily harm, while mandating healthcare, nutrition, and disaster rescue.',
    priorityLevel: 'ضروريات',
    cases: [
      {
        scenarioAr: 'قوله تعالى: «مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا».',
        scenarioEn: 'Quranic verse equating unjustly ending a single life to destroying humanity, and saving a life to reviving all humanity.',
        applicationAr: 'مشروعية التبرع بالأعضاء لإنقاذ حياة المريض، وتطوير الرعاية الصحية الأولية والوقاية من الأوبئة.',
        applicationEn: 'Permissibility of organ donation to rescue failing lives, and public health infrastructure to combat pandemics.',
        fiqhMaximAr: '«الضرر يزال» و«الضرورات تبيح المحظورات»',
        fiqhMaximEn: 'Harm must be eliminated, and necessity renders the impermissible permissible.'
      }
    ]
  },
  {
    id: 'hifz_al_aql',
    titleAr: 'حفظ العقل والفكر',
    titleEn: 'Preservation of Intellect (Hifz al-Aql)',
    essentialAr: 'تحريم المسكرات والمخدرات والمؤثرات العقلية، وإيجاب طلب العلم والتفكير النقدي ومحاربة الدجل والخرافة.',
    essentialEn: 'Banning intoxicants and narcotics while enjoining scholarly inquiry, critical thinking, and combating superstition.',
    priorityLevel: 'ضروريات',
    cases: [
      {
        scenarioAr: 'تجريم الشريعة ترويج الشائعات وتضليل الرأي العام، وحظر تجارة المواد المخدرة والمؤثرات العقلية حظراً قاطعاً.',
        scenarioEn: 'Sharia criminalization of disinformation and narcotic trafficking to preserve cognitive and societal wellness.',
        applicationAr: 'الاستثمار في المنظومة التعليمية، البحث العلمي، وتطوير التفكير المنطقي السليم لدى الناشئة.',
        applicationEn: 'Investing in scientific education, critical evaluation of sources, and cognitive development of youth.',
        fiqhMaximAr: '«درء المفاسد مقدم على جلب المصالح»',
        fiqhMaximEn: 'Repelling harm takes precedence over procuring benefit.'
      }
    ]
  },
  {
    id: 'hifz_an_nasl',
    titleAr: 'حفظ النسل والعرض والأسرة',
    titleEn: 'Preservation of Lineage and Family (Hifz an-Nasl)',
    essentialAr: 'تشريع الزواج على أسس المودة والرحمة، تحريم الفواحش والقذف، وحماية حقوق الطفل في الرعاية والنسب والتربية.',
    essentialEn: 'Sanctifying marriage through mutual compassion, banning slander and fornication, and protecting children\'s rights.',
    priorityLevel: 'ضروريات',
    cases: [
      {
        scenarioAr: 'تنظيم أحكام الأسرة في الميراث والنفقة والحضانة، وتجريم التحرش والطعن في الأعراض دون بينة شرعية قطعية.',
        scenarioEn: 'Regulating familial inheritance, custody, and child welfare, while strictly criminalizing slander and abuse.',
        applicationAr: 'مكافحة العنف الأسري، دعم استقرار مؤسسة الزواج، ورعاية الأيتام ومجهولي النسب في المجتمع.',
        applicationEn: 'Combating domestic violence, reinforcing marriage counseling, and institutional foster care for orphans.',
        fiqhMaximAr: '«الأصل في الأبضاع الحرمة» و«المشقة تجلب التيسير»',
        fiqhMaximEn: 'The default in marital relations is inviolability, and hardship attracts systemic facilitation.'
      }
    ]
  },
  {
    id: 'hifz_al_maal',
    titleAr: 'حفظ المال والموارد الاقتصادية',
    titleEn: 'Preservation of Wealth and Resources (Hifz al-Maal)',
    essentialAr: 'تحريم السرقة والربا والغش والاحتكار والرشوة وأكل أموال الناس بالباطل، وتشجيع الاستثمار المنتج والوقف التنموي.',
    essentialEn: 'Prohibiting theft, usury, fraud, hoarding, and bribery, while fostering productive trade, enterprise, and endowments.',
    priorityLevel: 'ضروريات',
    cases: [
      {
        scenarioAr: 'قوله تعالى: «وَلاَ تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ»، وتشريع العقود المالية العادلة (المضاربة والمشاركة والصكوك).',
        scenarioEn: 'Scriptural prohibition of illicit asset appropriation and establishment of participatory risk-sharing finance.',
        applicationAr: 'حماية الملكية العامة والخاصة، منع الاحتكارات الضارة بالأسواق، وتوجيه رأس المال للتنمية المستدامة والمشاريع الخضراء.',
        applicationEn: 'Safeguarding public and private property, preventing anti-competitive market monopolies, and investing in green infrastructure.',
        fiqhMaximAr: '«الغُرم بالغُنم» و«لا ضرر ولا ضرار»',
        fiqhMaximEn: 'Liability accompanies profit entitlement, and no harm shall be inflicted or reciprocated.'
      }
    ]
  }
];

export const SEERAH_MILESTONES_DATA: SeerahMilestone[] = [
  {
    id: 'hijrah_planning',
    yearHijri: 1,
    titleAr: 'الهجرة النبوية الشريفة: نموذج التخطيط الاستراتيجي والأخذ بالأسباب',
    titleEn: 'The Prophetic Hijrah: Model of Strategic Planning and Resource Allocation',
    eventSummaryAr: 'وضع النبي ﷺ خطة محكمة للهجرة من مكة إلى المدينة: اختيار الصديق رفيقاً، علي بن أبي طالب للفداء ورد الأمانات، عبد الله بن أبي بكر للاستخبارات، أسماء للتموين، وعبد الله بن أريقط دليلاً خبيراً بالطريق.',
    eventSummaryEn: 'The Prophet Muhammad (PBUH) formulated a meticulously structured plan for migration to Madinah: selecting Abu Bakr as partner, Ali for decoy and returning trusts, Asma for logistics, and Ibn Urayqit as expert scout.',
    strategicLessonsAr: [
      'الأخذ الكامل بالأسباب المادية دون الاعتماد على المعجزات وحدها.',
      'اختيار الكفاءات المؤهلة وإسناد المهام حسب المهارة والأمانة.',
      'التخطيط الأمني السري مع كتمان المسار واتخاذ طريق غير مألوف.'
    ],
    strategicLessonsEn: [
      'Thorough material preparation combined with profound faith without passive fatalism.',
      'Merit-based assignment of specialized logistical roles according to competence.',
      'Operational security, deceptive routing, and agile contingency management.'
    ],
    constitutionalPrincipleAr: 'الإيمان بالله يقترن وجوباً بالإعداد العلمي والتنظيمي الدقيق.',
    constitutionalPrincipleEn: 'True trust in God requires rigorous empirical preparation and methodical planning.'
  },
  {
    id: 'madinah_charter',
    yearHijri: 1,
    titleAr: 'وثيقة المدينة المنورة: أول دستور مدني يؤسس للمواطنة والتعددية',
    titleEn: 'The Madinah Charter: The First Civil Constitution Establishing Pluralism and Equal Citizenship',
    eventSummaryAr: 'صاغ النبي ﷺ وثيقة المدينة بين المهاجرين والأنصار واليهود وسائر سكان يثرب، مؤكدة أنهم «أمة واحدة من دون الناس»، وضامنة حرية العقيدة والتكافل في الدفاع المشترك وسيادة القانون.',
    eventSummaryEn: 'The Prophet drafted the Constitution of Madinah uniting Emigrants, Helpers, and Jewish tribes into a unified civic commonwealth with guaranteed freedom of faith, joint defense, and equality before the law.',
    strategicLessonsAr: [
      'إرساء مفهوم الدولة المدنية القائمة على المواطنة المشتركة والعدالة.',
      'كفالة حرية الدين والعبادة لجميع الطوائف دون إكراه أو تهميش.',
      'المسؤولية الدفاعية والمالية المشتركة لحماية أمن الوطن الواحد.'
    ],
    strategicLessonsEn: [
      'Founding a constitutional civil society based on reciprocal civic equality.',
      'Institutional protection for freedom of conscience and religious autonomy.',
      'Shared mutual defense obligations across diverse religious affiliations.'
    ],
    constitutionalPrincipleAr: 'المواطنة المتكافئة هي أساس الحقوق والواجبات في المجتمع المتعدد.',
    constitutionalPrincipleEn: 'Equal citizenship constitutes the primary foundation of rights and civil duties in a pluralistic society.'
  },
  {
    id: 'treaty_hudaybiyyah',
    yearHijri: 6,
    titleAr: 'صلح الحديبية: الرؤية الاستراتيجية للسلام والفتح المبين',
    titleEn: 'Treaty of Hudaybiyyah: Strategic Vision for Peace and Peaceful Engagement',
    eventSummaryAr: 'عقد النبي ﷺ معاهدة صلح مع قريش لعشر سنوات تتضمن وقف الحرب، رغم شروطها الظاهرة في المشقة، لإتاحة فرصة الحوار والتبادل الفكري والدعوة السلمية، وسماه القرآن «فتحاً مبيناً».',
    eventSummaryEn: 'The Prophet negotiated a 10-year bilateral peace truce with Quraysh, prioritizing long-term diplomatic engagement and peaceful discourse over immediate armed victory, termed by the Quran "a manifest victory."',
    strategicLessonsAr: [
      'تغليب خيار السلم والدبلوماسية والحوار على لغة السلاح متى تحققت المصالح العليا.',
      'الصبر الاستراتيجي على التنازلات التكتيكية في سبيل المكاسب الحضارية الكبرى.',
      'الوفاء التام بالعهود والمواثيق الدولية حتى مع الخصوم.'
    ],
    strategicLessonsEn: [
      'Prioritizing diplomacy and peace treaties whenever core higher interests are secured.',
      'Strategic endurance of tactical concessions to unlock transformative historic gains.',
      'Unyielding fidelity to international treaties and sovereign compacts.'
    ],
    constitutionalPrincipleAr: 'السلام العادل والدبلوماسية هما الأصل في العلاقات الدولية في الإسلام.',
    constitutionalPrincipleEn: 'Equitable peace and diplomatic dialogue represent the normative baseline of international relations in Islam.'
  },
  {
    id: 'makkah_conquest',
    yearHijri: 8,
    titleAr: 'فتح مكة المكرمة: العفو عند المقدرة والتسامح الإنساني الأسمى',
    titleEn: 'The Conquest of Makkah: Pardon at the Pinnacle of Victory and Human Magnanimity',
    eventSummaryAr: 'دخل النبي ﷺ مكة فاتحاً دون إراقة دماء، متواضعاً لله حتى كادت لحيته تلامس رحل دابته، وأعلن العفو العام عن أهل مكة الذين حاربوه وعذبوا أصحابه: «اذهبوا فأنتم الطلقاء».',
    eventSummaryEn: 'The Prophet entered Makkah victoriously without bloodshed, bowing in humble gratitude to God, and issued a universal pardon to those who had persecuted and exiled his community: "Go, for you are free."',
    strategicLessonsAr: [
      'العفو والصفح عند التمكن من الخصم من أرفع مراتب الأخلاق الإنسانية.',
      'تطهير الكعبة المشرفة من الأصنام وتأكيد التوحيد الخالص لله.',
      'تحريم الانتقام وتطبيق العدالة التصالحية لبناء مجتمع متماسك.'
    ],
    strategicLessonsEn: [
      'Magnanimity and clemency when possessing absolute power define supreme ethical leadership.',
      'Eliminating idolatry to restore pure monotheistic devotion.',
      'Rejecting vengeance in favor of restorative justice and societal reconciliation.'
    ],
    constitutionalPrincipleAr: 'لا انتقام في الإسلام، والرحمة والعدل هما غاية القوة المشروعة.',
    constitutionalPrincipleEn: 'Justice and restorative mercy constitute the only legitimate aims of sovereign power.'
  }
];

export const BIOETHICS_ISSUES_DATA: BioethicsIssue[] = [
  {
    id: 'organ_transplantation',
    titleAr: 'زراعة ونقل الأعضاء البشرية وموت الدماغ',
    titleEn: 'Human Organ Transplantation and Brainstem Death',
    category: 'bioethics',
    dilemmaAr: 'هل يجوز التبرع بالأعضاء بعد الموت الدماغي أو أثناء الحياة لإنقاذ مريض مشرف على الهلاك؟ وما الضوابط الشرعية؟',
    dilemmaEn: 'Is organ donation permissible post-mortem or inter-vivos to save terminal patients? What are the governing Sharia boundaries?',
    islamicStanceAr: 'أجازت المجامع الفقهية (مجمع البحوث الإسلامية بالأزهر ومجمع الفقه الإسلامي الدولي) التبرع بالأعضاء بشروط صارمة: ألا يكون بمقابل مادي، وألا يلحق ضرراً بالمتبرع، وبرضا تام موثق.',
    islamicStanceEn: 'Major Islamic Fiqh academies (Al-Azhar Islamic Research Academy & OIC International Islamic Fiqh Academy) permit organ donation under strict conditions: strictly non-commercial, no catastrophic harm to living donors, and verified informed consent.',
    shariaGuidingPrinciplesAr: [
      '«ومن أحياها فكأنما أحيا الناس جميعاً» (حفظ النفس كأعلى الأولويات).',
      'تحريم بيع الأعضاء البشرية لأن جسد الإنسان ليس سلعة تجارية.',
      'التأكد الطبي القاطع من موت الدماغ غير القابل للرجوع عبر لجنة ثلاثية مستقلة.'
    ],
    shariaGuidingPrinciplesEn: [
      'Preservation of human life as an utmost objective (Maqasid).',
      'Absolute prohibition of organ commercialization; human bodily dignity cannot be commodified.',
      'Rigorous medical verification of irreversible brainstem death by independent specialized committees.'
    ],
    consensusResolutionAr: 'التبرع بالأعضاء عمل إنساني نبيل وصدقة جارية إنقاذية إذا خلا من التجارة والابتزاز وأجيز طبياً.',
    consensusResolutionEn: 'Organ donation is an altruistic charitable act of life preservation when free of commercial exploitation.'
  },
  {
    id: 'ai_ethics',
    titleAr: 'أخلاقيات الذكاء الاصطناعي والأنظمة المستقلة',
    titleEn: 'Artificial Intelligence Ethics and Autonomous Systems',
    category: 'ai_ethics',
    dilemmaAr: 'كيف تضبط الشريعة الإسلامية تطبيقات الذكاء الاصطناعي، الخوارزميات التوليدية، والتزييف العميق (Deepfake)؟',
    dilemmaEn: 'How does Sharia jurisprudence regulate autonomous AI systems, generative models, algorithmic bias, and deepfakes?',
    islamicStanceAr: 'تؤكد الرؤية الفقهية أن التقنية أداة مسخرة لعمارة الأرض، وتشترط بقاء الإشراف البشري الأخلاقي، وتجرم استخدام الذكاء الاصطناعي في التزييف، انتهاك الخصوصية، أو نشر التضليل والبهتان.',
    islamicStanceEn: 'Islamic jurisprudence welcomes technology as an instrument of terrestrial stewardship, mandating human moral oversight and strictly criminalizing algorithmic impersonation, privacy breaches, and weaponized misinformation.',
    shariaGuidingPrinciplesAr: [
      'الأصل في المنافع والتقنيات الإباحة ما لم تفضِ إلى ضرر أو محظور.',
      'المسؤولية القانونية والأخلاقية تقع دائماً على صانع النظام ومبرمجه ومستخدمه البشري.',
      'حرمة الاعتداء على السمعة والأعراض بتوليد المقاطع المفبركة (حفظ العرض).'
    ],
    shariaGuidingPrinciplesEn: [
      'Default permissibility of scientific innovation unless causing demonstrable systemic harm.',
      'Inalienable legal accountability resting on human engineers, deployers, and operators.',
      'Preservation of dignity and reputation against malicious algorithmic manipulation.'
    ],
    consensusResolutionAr: 'الذكاء الاصطناعي مباح ومطلوب لخدمة البشرية، ويجب حوكمته بضوابط الشفافية والعدالة ومنع التزييف.',
    consensusResolutionEn: 'AI is encouraged for human flourishing provided it is governed by ethical transparency and non-maleficence.'
  },
  {
    id: 'climate_and_water',
    titleAr: 'حماية البيئة وترشيد المياه والتنمية المستدامة',
    titleEn: 'Environmental Stewardship, Water Conservation, and Sustainable Ecology',
    category: 'environment',
    dilemmaAr: 'ما هي مسؤولية الإنسان الدينية والأخلاقية تجاه الحفاظ على موارد كوكب الأرض وحمايته من التلوث والاحتباس الحراري؟',
    dilemmaEn: 'What is humanity’s religious stewardship mandate toward planetary ecology, water conservation, and mitigating climate change?',
    islamicStanceAr: 'يعتبر الإسلام الإنسان مستخلفاً في الأرض مسؤولاً عن صيانتها لا تدميرها: «ولا تفسدوا في الأرض بعد إصلاحها»، وحرم الإسراف في المياه حتى ولو كان الشخص على نهر جارٍ.',
    islamicStanceEn: 'Islam designates humankind as trustees (Khulafaa) of the Earth responsible for ecological equilibrium, prohibiting water waste even in abundant running streams.',
    shariaGuidingPrinciplesAr: [
      '«إن قامت الساعة وفي يد أحدكم فسيلة فإن استطاع ألا يقوم حتى يغرسها فليغرسها» (قيمة العمل البيئي المستمر).',
      'حرمة تلويث مصادر المياه والظل والمرافق العامة: «اتقوا الملاعن الثلاثة: البراز في الموارد، وقارعة الطريق، والظل».',
      'تحريم استنزاف الموارد والإسراف البيئي: «وكلوا واشربوا ولا تسرفوا».'
    ],
    shariaGuidingPrinciplesEn: [
      'Continuous ecological restoration: planting saplings even during ultimate cosmic cataclysms.',
      'Strict ban on polluting communal water sources, pathways, and green shade.',
      'Equitable resource rationing and zero waste.'
    ],
    consensusResolutionAr: 'حماية البيئة فريضة دينية واستخلاف حضاري، ومواجهة أزمة المناخ مسؤولية إيمانية ومجتمعية جماعية.',
    consensusResolutionEn: 'Ecological protection is an obligatory spiritual duty and imperative societal commitment.'
  },
  {
    id: 'countering_rumors',
    titleAr: 'مكافحة الشائعات والتثبت من الأخبار وحماية المجتمع',
    titleEn: 'Combating Rumors, Rigorous Verification of News, and Social Stability',
    category: 'social_rumors',
    dilemmaAr: 'كيف واجه المنهج القرآني الشائعات المغرضة وتضليل الرأي العام في العصر الرقمي ومنصات التواصل الاجتماعي؟',
    dilemmaEn: 'How does the Quranic methodology dismantle malicious rumors and digital disinformation on social media networks?',
    islamicStanceAr: 'أرسى القرآن قاعدة التحري الصارم: «يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا»، وشدد على رد الأنباء الحساسة لأهل الاختصاص والدراية.',
    islamicStanceEn: 'The Quran established rigorous evidentiary verification: "If a troublemaker brings you news, verify it thoroughly," requiring sensitive communal reports to be referred to authorized experts.',
    shariaGuidingPrinciplesAr: [
      'التحقق من صحة الخبر قبل مشاركته أو نشره لمنع تفشي الفتنة.',
      'تجريم الكذب والبهتان وقذف المحصنات الغافلات كما في حادثة الإفك.',
      'حفظ السلم المجتمعي ورد الأخبار إلى أولي الأمر والعلماء المختصين.'
    ],
    shariaGuidingPrinciplesEn: [
      'Critical fact-checking before digital amplification to halt destabilizing discord.',
      'Severe moral and legal sanction against slander and manufactured scandals.',
      'Safeguarding civic cohesion by consulting verified institutional authorities.'
    ],
    consensusResolutionAr: 'نشر الأخبار دون تثبت إثم شرعي وجريمة أمنية، ومسؤولية الفرد تبدأ بالتثبت ووقف الشائعة في مهدها.',
    consensusResolutionEn: 'Unverified information dissemination is condemned spiritually and legally; individuals must verify before sharing.'
  }
];

export const ISLAMIC_STUDIES_QUIZ_DATA: IslamicQuizQuestion[] = [
  {
    id: 'quiz_q1',
    questionAr: 'ما هو حكم النون الساكنة في قوله تعالى: ﴿مِنْ خَوْفٍ﴾؟',
    questionEn: 'What is the Tajweed ruling for the Nun Sakinah in ﴿مِنْ خَوْفٍ﴾?',
    optionsAr: [
      'إظهار حلقي لوقوع حرف الخاء بعد النون الساكنة',
      'إدغام بغنة لوقوع حرف الخاء بعد النون الساكنة',
      'إقلاب لوقوع حرف الخاء بعد النون الساكنة',
      'إخفاء حقيقي لوقوع حرف الخاء بعد النون الساكنة'
    ],
    optionsEn: [
      'Throat Izhar because the throat letter Kha follows Nun Sakinah',
      'Idgham with Ghunnah because the throat letter Kha follows Nun Sakinah',
      'Iqlab because the throat letter Kha follows Nun Sakinah',
      'Ikhfa Haqiqi because the throat letter Kha follows Nun Sakinah'
    ],
    correctIndex: 0,
    explanationAr: 'الخاء من حروف الحلق الستة (ء، هـ، ع، ح، غ، خ)، وحكم النون الساكنة عند ملاقاة حرف حلقي هو الإظهار الحلقي دون غنة زائدة.',
    explanationEn: 'Kha is one of the six throat consonants; when encountering Nun Sakinah it mandates Izhar Halqi without prolonged nasalization.',
    topicCategoryAr: 'أحكام التلاوة والتجويد',
    topicCategoryEn: 'Tajweed Rules'
  },
  {
    id: 'quiz_q2',
    questionAr: 'أي من المقاصد الشرعية الكلية الخمس يختص بتحريم المسكرات والمخدرات وحث الإنسان على التفكر وطلب العلم؟',
    questionEn: 'Which of the five higher Sharia objectives governs banning intoxicants and fostering critical thought and education?',
    optionsAr: [
      'حفظ العقل',
      'حفظ المال',
      'حفظ النسل',
      'حفظ الدين'
    ],
    optionsEn: [
      'Preservation of Intellect (Hifz al-Aql)',
      'Preservation of Wealth (Hifz al-Maal)',
      'Preservation of Lineage (Hifz an-Nasl)',
      'Preservation of Faith (Hifz ad-Deen)'
    ],
    correctIndex: 0,
    explanationAr: 'حفظ العقل مقصد كلي ضروري يقضي بتجريم كل ما يغيب العقل أو يدمره، وإيجاب تنميته بالمعرفة والتدبر ومحاربة الخرافات.',
    explanationEn: 'Preservation of Intellect is an essential Maqsad criminalizing cognitive impairment while mandating education and rational inquiry.',
    topicCategoryAr: 'مقاصد الشريعة الإسلامية',
    topicCategoryEn: 'Objectives of Sharia'
  },
  {
    id: 'quiz_q3',
    questionAr: 'ما هو المبدأ الدستوري الأبرز الذي أرسته «وثيقة المدينة المنورة» بين المسلمين واليهود وسائر الطوائف؟',
    questionEn: 'What is the preeminent constitutional principle instituted by the Madinah Charter across diverse tribes and creeds?',
    optionsAr: [
      'المواطنة المتكافئة والحرية الدينية والدفاع المشترك عن الوطن',
      'التمييز الطبقي وفق الانتماء القبلي القديم',
      'إلغاء التنوع الثقافي وفرض نمط معيشي أحادي',
      'قصر مسؤولية الدفاع على فئة محددة دون غيرها'
    ],
    optionsEn: [
      'Equal citizenship, religious freedom, and mutual communal defense',
      'Tribal class stratification based on ancestral status',
      'Abolishing cultural diversity to enforce uniform conformity',
      'Confining national defense responsibilities to a single group'
    ],
    correctIndex: 0,
    explanationAr: 'أسست وثيقة المدينة لأول دولة مدنية تعتمد المواطنة المتساوية، حرية ممارسة الشعائر، والتضامن الشامل في حماية أمن يثرب.',
    explanationEn: 'The Madinah Charter established the first civil polity grounded in equal citizenship, religious autonomy, and collective defense.',
    topicCategoryAr: 'السيرة النبوية والمواطنة',
    topicCategoryEn: 'Prophetic Biography & Citizenship'
  },
  {
    id: 'quiz_q4',
    questionAr: 'ما هي القاعدة الفقهية الكبرى التي يستند إليها الأطباء والفقهاء في إجازة العمليات الجراحية العاجلة لإنقاذ حياة المريض؟',
    questionEn: 'Which major legal maxim justifies emergency surgical procedures and organ donation to rescue failing patients?',
    optionsAr: [
      '«الضرورات تبيح المحظورات» و«الضرر يزال»',
      '«الأصل في العادات الحظر المطلق»',
      '«لا يجوز التداوي بأي مستحدث علمي»',
      '«اليقين يزول بأدنى درجات الشك»'
    ],
    optionsEn: [
      '"Necessities render impermissibles permissible" and "Harm must be removed"',
      '"The default rule in customs is absolute prohibition"',
      '"Medical treatment using scientific novelties is disallowed"',
      '"Certainty is nullified by minimal doubt"'
    ],
    correctIndex: 0,
    explanationAr: 'تستند الاستثناءات الطبية المنقذة للحياة إلى قاعدتي: الضرورات تبيح المحظورات، والضرر يزال، لحفظ النفس البشرية.',
    explanationEn: 'Life-saving medical interventions rely on the maxims that necessity alleviates restriction and harm must be eradicated.',
    topicCategoryAr: 'القواعد الفقهية والأخلاقيات الحيوية',
    topicCategoryEn: 'Legal Maxims & Bioethics'
  }
];
