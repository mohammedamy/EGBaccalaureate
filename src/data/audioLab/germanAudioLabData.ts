/**
 * German Audio, Grammar & Listening Studio Data Bank
 * Aligned with Egyptian Ministry of Education Secondary 3 Syllabus (Hallo Deutsch für die Sekundarstufe)
 */

export interface GermanPhoneticRule {
  symbol: string;
  ipa: string;
  nameEn: string;
  nameAr: string;
  ruleExplanationDe: string;
  ruleExplanationEn: string;
  ruleExplanationAr: string;
  exemplarWords: { word: string; translationEn: string; translationAr: string; phonetic: string }[];
  trapWarningEn: string;
  trapWarningAr: string;
}

export interface GermanCaseRule {
  id: 'nominativ' | 'akkusativ' | 'dativ' | 'genitiv';
  titleDe: string;
  titleEn: string;
  titleAr: string;
  questionDe: string;
  functionEn: string;
  functionAr: string;
  definiteArticles: { maskulin: string; feminin: string; neutral: string; plural: string };
  indefiniteArticles: { maskulin: string; feminin: string; neutral: string; plural: string };
  negativeArticles: { maskulin: string; feminin: string; neutral: string; plural: string };
  possessiveArticlesMein: { maskulin: string; feminin: string; neutral: string; plural: string };
  personalPronouns: { ich: string; du: string; er: string; sie: string; es: string; wir: string; ihr: string; siePl: string; siePolite: string };
  examples: { sentenceDe: string; translationEn: string; translationAr: string; highlight: string }[];
}

export interface GermanModalRule {
  verb: string;
  meaningEn: string;
  meaningAr: string;
  conjugations: {
    ich: string;
    du: string;
    erSieEs: string;
    wir: string;
    ihr: string;
    sieSie: string;
  };
  sampleSentence: {
    de: string;
    en: string;
    ar: string;
    bracketExplanationAr: string;
  };
}

export interface GermanPrepositionRule {
  category: 'dativ' | 'akkusativ' | 'wechsel';
  titleDe: string;
  titleEn: string;
  titleAr: string;
  prepositions: string[];
  ruleExplanationAr: string;
  ruleExplanationEn: string;
  examples: { de: string; en: string; ar: string; note: string }[];
}

export interface GermanSituationScenario {
  id: string;
  lektionTitle: string;
  situationPromptDe: string;
  situationPromptAr: string;
  situationPromptEn: string;
  correctResponseDe: string;
  correctResponseAr: string;
  trapDistractorDe: string;
  trapExplanationAr: string;
}

export interface GermanListeningTrack {
  id: string;
  lektion: number;
  titleDe: string;
  titleAr: string;
  titleEn: string;
  contextDe: string;
  contextAr: string;
  duration: string;
  speakers: { name: string; roleAr: string }[];
  turns: { speaker: string; textDe: string; textAr: string }[];
  questions: {
    id: string;
    questionDe: string;
    questionAr: string;
    optionsDe: string[];
    optionsAr: string[];
    correctIndex: number;
    explanationAr: string;
  }[];
}

export const GERMAN_PHONETICS: GermanPhoneticRule[] = [
  {
    symbol: 'ä',
    ipa: '/ɛː/ or /ɛ/',
    nameEn: 'A-Umlaut',
    nameAr: 'حرف الأوملاوت ä',
    ruleExplanationDe: 'Wird offen wie ein langes oder kurzes "e" ausgesprochen.',
    ruleExplanationEn: 'Pronounced as an open "e" sound (like "air" or "bed").',
    ruleExplanationAr: 'يُنطق كحرف E مفتوح وممدود مثل كلمة bed بالإنجليزية.',
    exemplarWords: [
      { word: 'Mädchen', translationEn: 'Girl', translationAr: 'فتاة', phonetic: '[ˈmɛːtçən]' },
      { word: 'Ärzte', translationEn: 'Doctors', translationAr: 'أطباء', phonetic: '[ˈɛʁtstə]' },
      { word: 'spät', translationEn: 'Late', translationAr: 'متأخر', phonetic: '[ʃpɛːt]' }
    ],
    trapWarningEn: 'Do not pronounce it as a standard "a"; it is equivalent to German "e".',
    trapWarningAr: 'فخ امتحاني: لا تنطقها كحرف A العادي، بل هي صوت E صريح يغير معنى الكلمة تماماً.'
  },
  {
    symbol: 'ö',
    ipa: '/øː/ or /œ/',
    nameEn: 'O-Umlaut',
    nameAr: 'حرف الأوملاوت ö',
    ruleExplanationDe: 'Lippen runden wie für "o", aber die Zunge positionieren wie für "e".',
    ruleExplanationEn: 'Round lips as for "o" while trying to say "e" (like "bird" or French "eu").',
    ruleExplanationAr: 'تدوير الشفتين لنطق حرف O مع وضع اللسان في موضع نطق حرف E.',
    exemplarWords: [
      { word: 'schön', translationEn: 'Beautiful', translationAr: 'جميل', phonetic: '[ʃøːn]' },
      { word: 'hören', translationEn: 'To hear/listen', translationAr: 'يسمع', phonetic: '[ˈhøːʁən]' },
      { word: 'Köpfe', translationEn: 'Heads', translationAr: 'رؤوس', phonetic: '[ˈkœpfə]' }
    ],
    trapWarningEn: 'Confusing "schön" (beautiful) with "schon" (already) is a classic exam trap.',
    trapWarningAr: 'فخ وزاري شهير: التمييز بين schon (بالفعل) و schön (جميل).'
  },
  {
    symbol: 'ü',
    ipa: '/yː/ or /ʏ/',
    nameEn: 'U-Umlaut',
    nameAr: 'حرف الأوملاوت ü',
    ruleExplanationDe: 'Lippen spitzen wie für "u", aber "i" sprechen.',
    ruleExplanationEn: 'Purse lips as for "u" while vocalizing "ee" (like French "u").',
    ruleExplanationAr: 'ضم الشفتين بحزم لنطق U مع إصدار صوت I من الحلق.',
    exemplarWords: [
      { word: 'Übung', translationEn: 'Exercise', translationAr: 'تمرين', phonetic: '[ˈyːbʊŋ]' },
      { word: 'Tür', translationEn: 'Door', translationAr: 'باب', phonetic: '[tyːɐ̯]' },
      { word: 'müssen', translationEn: 'Must / Have to', translationAr: 'يجب', phonetic: '[ˈmʏsn̩]' }
    ],
    trapWarningEn: 'Crucial for modal verbs: "müssen" (have to) vs. "musste" (had to).',
    trapWarningAr: 'هام جداً في الأفعال الناقصة: التفرقة بين müssen (يجب بالمضارع) و mussten (وجب بالماضي).'
  },
  {
    symbol: 'ei / ai',
    ipa: '/aɪ/',
    nameEn: 'Diphthong EI',
    nameAr: 'المقطع الصوتي ei',
    ruleExplanationDe: 'Wird immer wie das englische "eye" oder "my" ausgesprochen.',
    ruleExplanationEn: 'Consistently pronounced like the English word "eye" or "fine".',
    ruleExplanationAr: 'يُنطق دائماً مثل كلمة "آي" (Eye) بالإنجليزية.',
    exemplarWords: [
      { word: 'Mein', translationEn: 'My', translationAr: 'ملكي / لي', phonetic: '[maɪn]' },
      { word: 'Zeit', translationEn: 'Time', translationAr: 'وقت', phonetic: '[tsaɪt]' },
      { word: 'Eins', translationEn: 'One', translationAr: 'واحد', phonetic: '[aɪns]' }
    ],
    trapWarningEn: 'Do not confuse "ei" (/aɪ/ as in mein) with "ie" (/iː/ as in Wien).',
    trapWarningAr: 'فخ الإملاء الوزاري: الفرق الصوتي بين ei (تنطق آي) و ie (تنطق ياء ممدودة إي).'
  },
  {
    symbol: 'eu / äu',
    ipa: '/ɔʏ/',
    nameEn: 'Diphthong EU / ÄU',
    nameAr: 'المقطع الصوتي eu / äu',
    ruleExplanationDe: 'Wird wie "oy" im englischen "boy" ausgesprochen.',
    ruleExplanationEn: 'Pronounced like "oy" in the English word "boy".',
    ruleExplanationAr: 'يُنطق دائماً "أوي" مثل boy بالإنجليزية.',
    exemplarWords: [
      { word: 'Deutsch', translationEn: 'German', translationAr: 'ألماني', phonetic: '[dɔʏtʃ]' },
      { word: 'Heute', translationEn: 'Today', translationAr: 'اليوم', phonetic: '[ˈhɔʏtə]' },
      { word: 'Häuser', translationEn: 'Houses', translationAr: 'منازل', phonetic: '[ˈhɔʏzɐ]' }
    ],
    trapWarningEn: 'eu and äu have identical pronunciation in standard German.',
    trapWarningAr: 'المقطعان eu و äu متطابقان تماماً في النطق الصوتي.'
  },
  {
    symbol: 'ch (Ich vs. Ach)',
    ipa: '/ç/ vs /x/',
    nameEn: 'The CH Digraph',
    nameAr: 'صوت حرفي CH (خاء مقابل شين رقيقة)',
    ruleExplanationDe: 'Nach a, o, u, au als /x/ (Ach-Laut). Nach e, i, ä, ö, ü, eu als /ç/ (Ich-Laut).',
    ruleExplanationEn: 'Ach-Laut (/x/ like Scottish "loch" or Arabic خ) after a, o, u, au. Ich-Laut (/ç/ soft palate hiss) after e, i, ä, ö, ü.',
    ruleExplanationAr: 'يُنطق خاء صريحة (Ach-Laut) إذا سبقه (a, o, u, au)، ويُنطق شين رقيقة مهموسة (Ich-Laut) إذا سبقه (e, i, ä, ö, ü, eu).',
    exemplarWords: [
      { word: 'Buch', translationEn: 'Book', translationAr: 'كتاب (Ach-Laut)', phonetic: '[buːx]' },
      { word: 'Ich', translationEn: 'I', translationAr: 'أنا (Ich-Laut)', phonetic: '[ʔɪç]' },
      { word: 'Krankheit', translationEn: 'Illness', translationAr: 'مرض', phonetic: '[ˈkʁaŋkhaɪt]' }
    ],
    trapWarningEn: 'Never pronounce ch as English "ch" (as in cheese) in native German words.',
    trapWarningAr: 'فخ النطق: لا تنطق ch كحرف تش الإنجليزي في الكلمات الألمانية الأصلية.'
  },
  {
    symbol: 'sp / st',
    ipa: '/ʃp/ /ʃt/',
    nameEn: 'Initial SP / ST',
    nameAr: 'حرفا SP و ST في بداية المقطع',
    ruleExplanationDe: 'Am Silbenanfang wird das "s" wie "sch" [ʃ] gesprochen.',
    ruleExplanationEn: 'At the start of a word or syllable, "s" is pronounced like "sh" [ʃ].',
    ruleExplanationAr: 'في بداية الكلمة أو المقطع، يُنطق حرف S كحرف الشين (Sch).',
    exemplarWords: [
      { word: 'Stadt', translationEn: 'City', translationAr: 'مدينة', phonetic: '[ʃtat]' },
      { word: 'Sport', translationEn: 'Sports', translationAr: 'رياضة', phonetic: '[ʃpɔʁt]' },
      { word: 'Straße', translationEn: 'Street', translationAr: 'شارع', phonetic: '[ˈʃtʁaːsə]' }
    ],
    trapWarningEn: 'Only turns into /ʃ/ at syllable beginning (Stadt); inside a word it remains /st/ (Fenster).',
    trapWarningAr: 'يتحول إلى صوت الشين فقط في بداية المقطع (Sport) بينما يبقى سيناً في منتصف الكلمة (Fenster).'
  }
];

export const GERMAN_CASES: GermanCaseRule[] = [
  {
    id: 'nominativ',
    titleDe: 'Der Nominativ (Subjekt)',
    titleEn: 'Nominative Case (Subject)',
    titleAr: 'حالة الرفع (الفاعل - Der Nominativ)',
    questionDe: 'Wer? oder Was?',
    functionEn: 'Identifies the grammatical subject performing the action or the predicate noun with sein/werden.',
    functionAr: 'تحدد الفاعل الذي يقوم بالفعل في الجملة أو الاسم بعد فعل sein (يكون).',
    definiteArticles: { maskulin: 'der', feminin: 'die', neutral: 'das', plural: 'die' },
    indefiniteArticles: { maskulin: 'ein', feminin: 'eine', neutral: 'ein', plural: '—' },
    negativeArticles: { maskulin: 'kein', feminin: 'keine', neutral: 'kein', plural: 'keine' },
    possessiveArticlesMein: { maskulin: 'mein', feminin: 'meine', neutral: 'mein', plural: 'meine' },
    personalPronouns: { ich: 'ich', du: 'du', er: 'er', sie: 'sie', es: 'es', wir: 'wir', ihr: 'ihr', siePl: 'sie', siePolite: 'Sie' },
    examples: [
      { sentenceDe: 'Der Arzt untersucht den Patienten.', translationEn: 'The doctor examines the patient.', translationAr: 'الطبيب يفحص المريض.', highlight: 'Der Arzt' },
      { sentenceDe: 'Das ist mein Mantel.', translationEn: 'That is my coat.', translationAr: 'هذا معطفي.', highlight: 'mein Mantel' }
    ]
  },
  {
    id: 'akkusativ',
    titleDe: 'Der Akkusativ (Direktes Objekt)',
    titleEn: 'Accusative Case (Direct Object)',
    titleAr: 'حالة النصب (المفعول به المباشر - Der Akkusativ)',
    questionDe: 'Wen? oder Was?',
    functionEn: 'Identifies the direct object receiving the action, or objects after accusative prepositions (für, ohne, um, durch, gegen). Only the masculine singular changes (-en)!',
    functionAr: 'تحدد المفعول به المباشر الواقع عليه فعل الفاعل أو الاسم بعد حروف النصب. المذكر المفرد فقط هو الذي يتغير بإضافة en!',
    definiteArticles: { maskulin: 'den', feminin: 'die', neutral: 'das', plural: 'die' },
    indefiniteArticles: { maskulin: 'einen', feminin: 'eine', neutral: 'ein', plural: '—' },
    negativeArticles: { maskulin: 'keinen', feminin: 'keine', neutral: 'kein', plural: 'keine' },
    possessiveArticlesMein: { maskulin: 'meinen', feminin: 'meine', neutral: 'mein', plural: 'meine' },
    personalPronouns: { ich: 'mich', du: 'dich', er: 'ihn', sie: 'sie', es: 'es', wir: 'uns', ihr: 'euch', siePl: 'sie', siePolite: 'Sie' },
    examples: [
      { sentenceDe: 'Ich brauche einen Termin beim Arzt.', translationEn: 'I need an appointment with the doctor.', translationAr: 'أحتاج موعداً لدى الطبيب.', highlight: 'einen Termin' },
      { sentenceDe: 'Hast du den Pullover gesehen?', translationEn: 'Have you seen the pullover?', translationAr: 'هل رأيت السترة الصوفية؟', highlight: 'den Pullover' }
    ]
  },
  {
    id: 'dativ',
    titleDe: 'Der Dativ (Indirektes Objekt & Ortsangaben)',
    titleEn: 'Dative Case (Indirect Object & Static Location)',
    titleAr: 'حالة الجر (المفعول به غير المباشر والمجرور - Der Dativ)',
    questionDe: 'Wem? oder Wo?',
    functionEn: 'Used with dative verbs (helfen, danken, gefallen, passen, gehören, schmecken, wehtun) and dative prepositions (aus, bei, mit, nach, seit, von, zu).',
    functionAr: 'تستخدم مع أفعال الداتيف الشهيرة (gefallen, passen, helfen, wehtun) ومع حروف الجر الثابتة (mit, zu, bei, nach, aus, seit). يتحول المذكر والمحايد إلى dem والمؤنث إلى der والجمع إلى den + n!',
    definiteArticles: { maskulin: 'dem', feminin: 'der', neutral: 'dem', plural: 'den (+n)' },
    indefiniteArticles: { maskulin: 'einem', feminin: 'einer', neutral: 'einem', plural: '—' },
    negativeArticles: { maskulin: 'keinem', feminin: 'keiner', neutral: 'keinem', plural: 'keinen (+n)' },
    possessiveArticlesMein: { maskulin: 'meinem', feminin: 'meiner', neutral: 'meinem', plural: 'meinen (+n)' },
    personalPronouns: { ich: 'mir', du: 'dir', er: 'ihm', sie: 'ihr', es: 'ihm', wir: 'uns', ihr: 'euch', siePl: 'ihnen', siePolite: 'Ihnen' },
    examples: [
      { sentenceDe: 'Der Kopf tut mir sehr weh.', translationEn: 'My head hurts me very much.', translationAr: 'رأسي يؤلمني بشدة.', highlight: 'mir' },
      { sentenceDe: 'Ich fahre mit dem Bus zur Schule.', translationEn: 'I travel by bus to school.', translationAr: 'أسافر بالحافلة إلى المدرسة.', highlight: 'dem Bus / zur Schule' }
    ]
  },
  {
    id: 'genitiv',
    titleDe: 'Der Genitiv (Zugehörigkeit & Besitz)',
    titleEn: 'Genitive Case (Possession & Relations)',
    titleAr: 'حالة الإضافة والملكية (Der Genitiv)',
    questionDe: 'Wessen?',
    functionEn: 'Indicates possession, association, or relation between two nouns, or follows genitive prepositions (während, wegen, trotz).',
    functionAr: 'تحدد الملكية والإضافة بين اسمين (كتاب الطالب) أو تأتي بعد حروف معينة (während, wegen).',
    definiteArticles: { maskulin: 'des (+s/es)', feminin: 'der', neutral: 'des (+s/es)', plural: 'der' },
    indefiniteArticles: { maskulin: 'eines (+s/es)', feminin: 'einer', neutral: 'eines (+s/es)', plural: '—' },
    negativeArticles: { maskulin: 'keines (+s/es)', feminin: 'keiner', neutral: 'keines (+s/es)', plural: 'keiner' },
    possessiveArticlesMein: { maskulin: 'meines', feminin: 'meiner', neutral: 'meines', plural: 'meiner' },
    personalPronouns: { ich: 'meiner', du: 'deiner', er: 'seiner', sie: 'ihrer', es: 'seiner', wir: 'unserer', ihr: 'eurer', siePl: 'ihrer', siePolite: 'Ihrer' },
    examples: [
      { sentenceDe: 'Die Praxis des Arztes ist modern.', translationEn: 'The doctor’s practice is modern.', translationAr: 'عيادة الطبيب حديثة.', highlight: 'des Arztes' }
    ]
  }
];

export const GERMAN_MODAL_VERBS: GermanModalRule[] = [
  {
    verb: 'müssen',
    meaningEn: 'Must / To have to (Obligation, necessity)',
    meaningAr: 'يجب / يضطر (إلزام وضرورة قاطعة)',
    conjugations: { ich: 'muss', du: 'musst', erSieEs: 'muss', wir: 'müssen', ihr: 'müsst', sieSie: 'müssen' },
    sampleSentence: {
      de: 'Der Kranke muss die Medikamente regelmäßig einnehmen.',
      en: 'The sick patient must take the medication regularly.',
      ar: 'يجب على المريض تناول الدواء بانتظام.',
      bracketExplanationAr: 'الفعل الناقص muss في الموقع الثاني، ومصدر الفعل einnehmen في نهاية الجملة تماماً (قوس الفعل Satzklammer).'
    }
  },
  {
    verb: 'sollen',
    meaningEn: 'Should / Ought to (Advice, doctor’s order, recommendation)',
    meaningAr: 'ينبغي / من المفروض (نصيحة طبية أو أمر من طرف ثالث)',
    conjugations: { ich: 'soll', du: 'sollst', erSieEs: 'soll', wir: 'sollen', ihr: 'sollt', sieSie: 'sollen' },
    sampleSentence: {
      de: 'Der Arzt sagt: Sie sollen drei Tage im Bett bleiben.',
      en: 'The doctor says: You should stay in bed for three days.',
      ar: 'يقول الطبيب: ينبغي عليك البقاء في السرير لثلاثة أيام.',
      bracketExplanationAr: 'يستخدم sollen عندما ينقل المتكلم تعليمات الطبيب أو يقدم نصيحة.'
    }
  },
  {
    verb: 'dürfen',
    meaningEn: 'May / Allowed to (Permission, negative = prohibition)',
    meaningAr: 'يسمح بـ / يجوز (والنفي يعني التحريم التام)',
    conjugations: { ich: 'darf', du: 'darfst', erSieEs: 'darf', wir: 'dürfen', ihr: 'dürft', sieSie: 'dürfen' },
    sampleSentence: {
      de: 'Im Krankenhaus darf man nicht laut sprechen.',
      en: 'In the hospital one is not allowed to speak loudly.',
      ar: 'في المستشفى لا يجوز للمرء التحدث بصوت عالٍ (ممنوع).',
      bracketExplanationAr: 'صيغة darf man nicht تعبر عن الحظر والمنع القانوني أو التعليماتي في الامتحان.'
    }
  },
  {
    verb: 'können',
    meaningEn: 'Can / To be able to (Ability, possibility)',
    meaningAr: 'يستطيع / يقدر (القدرة والاستطاعة أو الإمكانية)',
    conjugations: { ich: 'kann', du: 'kannst', erSieEs: 'kann', wir: 'können', ihr: 'könnt', sieSie: 'können' },
    sampleSentence: {
      de: 'Ich kann heute leider nicht zur Party kommen.',
      en: 'Unfortunately, I cannot come to the party today.',
      ar: 'للأسف لا أستطيع المجيء إلى الحفلة اليوم.',
      bracketExplanationAr: 'يعبر können عن القدرة الشخصية أو الظروف المانحة للاستطاعة.'
    }
  },
  {
    verb: 'wollen',
    meaningEn: 'Want to / Intend to (Strong will, definite plan)',
    meaningAr: 'يريد / ينوي (عزيمة قوية ونية مخطط لها)',
    conjugations: { ich: 'will', du: 'willst', erSieEs: 'will', wir: 'wollen', ihr: 'wollt', sieSie: 'wollen' },
    sampleSentence: {
      de: 'Ich will im Sommer nach Deutschland reisen.',
      en: 'I want to travel to Germany in the summer.',
      ar: 'أريد السفر إلى ألمانيا في الصيف.',
      bracketExplanationAr: 'يدل wollen على قرار مدروس وإرادة مؤكدة.'
    }
  },
  {
    verb: 'möchten',
    meaningEn: 'Would like to (Polite wish, request)',
    meaningAr: 'يود / يرغب (طلب مهذب وأمنية لطيفة)',
    conjugations: { ich: 'möchte', du: 'möchtest', erSieEs: 'möchte', wir: 'möchten', ihr: 'möchtet', sieSie: 'möchten' },
    sampleSentence: {
      de: 'Ich möchte bitte einen Termin bei Dr. Weber vereinbaren.',
      en: 'I would like to make an appointment with Dr. Weber, please.',
      ar: 'أود من فضلك تحديد موعد لدى الدكتور فيبر.',
      bracketExplanationAr: 'يستخدم möchten للطلب المهذب عند الاستقبال أو في العيادات والمتاجر.'
    }
  }
];

export const GERMAN_PREPOSITIONS: GermanPrepositionRule[] = [
  {
    category: 'dativ',
    titleDe: 'Feste Dativ-Präpositionen',
    titleEn: 'Strict Dative Prepositions',
    titleAr: 'حروف الجر التي تجر الاسم دائماً (Dativ)',
    prepositions: ['mit', 'nach', 'aus', 'zu', 'von', 'bei', 'seit', 'ab'],
    ruleExplanationAr: 'تأخذ هذه الحروف حالة الرفع غير المباشر (Dativ) دائماً دون استثناء: der/das تتحول إلى dem، و die المفرد إلى der، والجمع إلى den + n.',
    ruleExplanationEn: 'These prepositions invariably govern the Dative case: der/das becomes dem, die becomes der, plural becomes den + n.',
    examples: [
      { de: 'Ich fahre mit dem Zug.', en: 'I travel by train.', ar: 'أسافر بالقطار.', note: 'mit + dem Zug (der Zug -> dem)' },
      { de: 'Sie geht zu der (zur) Ärztin.', en: 'She goes to the doctor.', ar: 'تذهب إلى الطبيبة.', note: 'zu + der Ärztin = zur' },
      { de: 'Er wohnt bei seinen Eltern.', en: 'He lives with his parents.', ar: 'يسكن لدى والديه.', note: 'bei + Eltern (Plural Dativ + n)' }
    ]
  },
  {
    category: 'akkusativ',
    titleDe: 'Feste Akkusativ-Präpositionen',
    titleEn: 'Strict Accusative Prepositions',
    titleAr: 'حروف الجر التي تنصب الاسم دائماً (Akkusativ)',
    prepositions: ['durch', 'für', 'gegen', 'ohne', 'um', 'bis'],
    ruleExplanationAr: 'تنصب هذه الحروف الاسم الذي يليها دائماً (Akkusativ): der فقط يتحول إلى den/einen، بينما die و das وجمع die تبقى كما هي.',
    ruleExplanationEn: 'These prepositions invariably govern the Accusative case: only masculine singular changes (der -> den).',
    examples: [
      { de: 'Das Medikament ist für den Vater.', en: 'The medicine is for the father.', ar: 'الدواء من أجل الأب.', note: 'für + den Vater (der -> den)' },
      { de: 'Ohne meinen Mantel gehe ich nicht raus.', en: 'Without my coat I don’t go out.', ar: 'بدون معطفي لن أخرج.', note: 'ohne + meinen Mantel' }
    ]
  },
  {
    category: 'wechsel',
    titleDe: 'Wechselpräpositionen (Ort vs. Richtung)',
    titleEn: 'Two-Way Prepositions (Location vs. Direction)',
    titleAr: 'حروف الجر المشتركة (مكان ساكن Wo? مقابل حركة واتجاه Wohin?)',
    prepositions: ['an', 'auf', 'hinter', 'in', 'neben', 'über', 'unter', 'vor', 'zwischen'],
    ruleExplanationAr: 'إذا دلت الجملة على سكون ومكان (السؤال بـ Wo?) تأخذ Dativ. إذا دلت على حركة وانتقال واتجاه (السؤال بـ Wohin?) تأخذ Akkusativ.',
    ruleExplanationEn: 'Static location answering "Wo?" triggers the Dative. Directional movement answering "Wohin?" triggers the Accusative.',
    examples: [
      { de: 'Wo bist du? — Ich bin in dem (im) Kino. (Dativ)', en: 'Where are you? — I am in the cinema.', ar: 'أين أنت؟ — أنا في السينما (سكون = Dativ).', note: 'in + dem = im' },
      { de: 'Wohin gehst du? — Ich gehe in das (ins) Kino. (Akkusativ)', en: 'Where are you going? — I am going into the cinema.', ar: 'إلى أين تذهب؟ — أنا ذاهب إلى السينما (حركة = Akkusativ).', note: 'in + das = ins' }
    ]
  }
];

export const GERMAN_SITUATION_SCENARIOS: GermanSituationScenario[] = [
  {
    id: 'sit_1',
    lektionTitle: 'Lektion 10: Gesundheit & Beim Arzt',
    situationPromptDe: 'Du bist krank und rufst die Arztpraxis an. Du möchtest einen Termin vereinbaren. Was sagst du?',
    situationPromptAr: 'أنت مريض وتتصل بعيادة الطبيب وتريد تحديد موعد للكشف. ماذا تقول؟',
    situationPromptEn: 'You are sick and call the doctor’s office to schedule an appointment. What do you say?',
    correctResponseDe: 'Guten Tag, ich möchte bitte einen Termin bei Dr. Müller vereinbaren.',
    correctResponseAr: 'صباح الخير، أود من فضلك تحديد موعد لدى الدكتور مولر.',
    trapDistractorDe: 'Guten Tag, ich gebe Ihnen einen Termin.',
    trapExplanationAr: 'فخ وزاري: المريض هو من يطلب الموعد (ich möchte einen Termin vereinbaren)، بينما الموظف هو من يعطي الموعد (ich gebe Ihnen).'
  },
  {
    id: 'sit_2',
    lektionTitle: 'Lektion 10: Schmerzen & Ratschläge',
    situationPromptDe: 'Dein Freund hat starke Halsschmerzen und Fieber. Was rätst du ihm?',
    situationPromptAr: 'صديقك يعاني من ألم شديد في الحلق وحمى. بم تنصحه؟',
    situationPromptEn: 'Your friend has a severe sore throat and fever. What advice do you give him?',
    correctResponseDe: 'Du sollst zum Arzt gehen und im Bett bleiben.',
    correctResponseAr: 'ينبغي عليك الذهاب إلى الطبيب والبقاء في السرير.',
    trapDistractorDe: 'Du darfst viel Sport treiben.',
    trapExplanationAr: 'فخ: ممارسة الرياضة ممنوعة للمريض المصاب بالحمى.'
  },
  {
    id: 'sit_3',
    lektionTitle: 'Lektion 11: Nach dem Weg fragen',
    situationPromptDe: 'Du bist fremd in Berlin und suchst den Bahnhof. Wie fragst du einen Passanten höflich?',
    situationPromptAr: 'أنت غريب في برلين وتبحث عن محطة القطار. كيف تسأل أحد المارة بأدب؟',
    situationPromptEn: 'You are a stranger in Berlin looking for the station. How do you ask a pedestrian politely?',
    correctResponseDe: 'Entschuldigung, wie komme ich bitte zum Bahnhof?',
    correctResponseAr: 'معذرة، كيف أصل من فضلك إلى محطة القطار؟',
    trapDistractorDe: 'Wo fährt der Bahnhof hin?',
    trapExplanationAr: 'فخ لغوي: محطة القطار مكان ثابت ولا تسافر، بل القطار هو الذي يسافر.'
  },
  {
    id: 'sit_4',
    lektionTitle: 'Lektion 11: Verkehrsmittel',
    situationPromptDe: 'Jemand fragt dich: „Womit fährst du zur Arbeit?“ — Was antwortest du?',
    situationPromptAr: 'يسألك شخص: "بأي وسيلة تسافر إلى العمل؟" — ماذا تجيب؟',
    situationPromptEn: 'Someone asks you: "By what means do you travel to work?" — What do you answer?',
    correctResponseDe: 'Ich fahre mit der U-Bahn oder mit dem Bus.',
    correctResponseAr: 'أسافر بمترو الأنفاق أو بالحافلة.',
    trapDistractorDe: 'Ich fahre um 8 Uhr.',
    trapExplanationAr: 'فخ: السؤال بـ Womit يسأل عن وسيلة المواصلات (mit + Dativ) وليس عن التوقيت (um 8 Uhr).'
  },
  {
    id: 'sit_5',
    lektionTitle: 'Lektion 12: Kleidung & Gefallen',
    situationPromptDe: 'Du probierst eine Jacke im Geschäft an. Sie gefällt dir sehr gut. Was sagst du zur Verkäuferin?',
    situationPromptAr: 'تقيس سترة في متجر ملابس وأعجبتك كثيراً. ماذا تقول للبائعة؟',
    situationPromptEn: 'You try on a jacket in a shop and really like it. What do you say to the sales assistant?',
    correctResponseDe: 'Die Jacke gefällt mir sehr gut und passt mir genau.',
    correctResponseAr: 'السترة تعجبني كثيراً ومقاسها يناسبني تماماً.',
    trapDistractorDe: 'Die Jacke schmeckt mir gut.',
    trapExplanationAr: 'فخ دلالي: فعل schmecken يستخدم للطعام والمذاق فقط، بينما gefällt/passt للملابس والمظهر.'
  },
  {
    id: 'sit_6',
    lektionTitle: 'Lektion 12: Kundenservice & Reparatur',
    situationPromptDe: 'Deine Kaffeemaschine ist kaputt. Du bringst sie zur Reparatur. Was fragst du?',
    situationPromptAr: 'ماكينة القهوة معطلة وتأخذها للإصلاح. ماذا تسأل فني الصيانة؟',
    situationPromptEn: 'Your coffee machine is broken. You bring it for repair. What do you ask?',
    correctResponseDe: 'Können Sie die Maschine bis morgen reparieren und wie viel kostet das?',
    correctResponseAr: 'هل يمكنكم إصلاح الماكينة حتى الغد، وكم تبلغ التكلفة؟',
    trapDistractorDe: 'Ich verkaufe Ihnen die Kaffeemaschine.',
    trapExplanationAr: 'فخ: الزبون يطلب الإصلاح وليس بيع الماكينة للمحل.'
  },
  {
    id: 'sit_7',
    lektionTitle: 'Lektion 13: Einladung zur Geburtstagsfeier',
    situationPromptDe: 'Dein Freund lädt dich zu seiner Geburtstagsfeier ein. Du kannst leider nicht kommen. Was sagst du?',
    situationPromptAr: 'يدعوك صديقك لحفلة عيد ميلاده، ولكنك للأسف لا تستطيع الحضور. ماذا تقول؟',
    situationPromptEn: 'Your friend invites you to his birthday party, but unfortunately you cannot attend. What do you say?',
    correctResponseDe: 'Vielen Dank für die Einladung! Es tut mir leid, aber ich habe einen wichtigen Termin.',
    correctResponseAr: 'شكراً جزيلاً على الدعوة! يؤسفني ذلك، ولكن لدي موعد هام.',
    trapDistractorDe: 'Herzlichen Glückwunsch! Ich komme sehr gerne.',
    trapExplanationAr: 'فخ: الجملة الثانية تفيد الحضور والقبول، بينما الموقف يطلب الاعتذار المؤدب عن عدم الاستطاعة.'
  },
  {
    id: 'sit_8',
    lektionTitle: 'Lektion 13: Glückwünsche',
    situationPromptDe: 'Dein Kollege hat die Abiturprüfung mit Auszeichnung bestanden. Was sagst du ihm?',
    situationPromptAr: 'زميلك اجتاز امتحان الثانوية العامة بتفوق باهر. ماذا تقول له لتهنئته؟',
    situationPromptEn: 'Your colleague passed the secondary school exit exam with honors. What do you say to congratulate him?',
    correctResponseDe: 'Herzlichen Glückwunsch zum Erfolg! Ich gratuliere dir von Herzen.',
    correctResponseAr: 'ألف مبروك النجاح الباهر! أهنئك من أعماق قلبي.',
    trapDistractorDe: 'Gute Besserung!',
    trapExplanationAr: 'فخ: Gute Besserung تقال للمريض بالشفاء العاجل، بينما في النجاح تقال Herzlichen Glückwunsch.'
  }
];

export const GERMAN_LISTENING_TRACKS: GermanListeningTrack[] = [
  {
    id: 'track_1',
    lektion: 10,
    titleDe: 'Hörtext 1: Beim Arzt – Untersuchung und Therapie',
    titleAr: 'النص المسموع ١: في عيادة الطبيب – الفحص والعلاج',
    titleEn: 'Track 1: At the Doctor – Examination & Treatment',
    contextDe: 'Dialog zwischen Dr. Weber und dem Patienten Ahmed in München.',
    contextAr: 'حوار بين الدكتور فيبر والمريض أحمد في مدينة ميونخ.',
    duration: '2:15',
    speakers: [
      { name: 'Dr. Weber', roleAr: 'طبيب باطني' },
      { name: 'Ahmed', roleAr: 'طالب ثانوي' }
    ],
    turns: [
      { speaker: 'Dr. Weber', textDe: 'Guten Tag, Herr Ahmed! Was fehlt Ihnen denn? Wo haben Sie Schmerzen?', textAr: 'صباح الخير سيد أحمد! ما الذي تشكو منه؟ أين موضع الألم؟' },
      { speaker: 'Ahmed', textDe: 'Guten Tag, Herr Doktor. Mein Kopf tut schrecklich weh, und ich habe seit gestern hohes Fieber.', textAr: 'صباح الخير يا دكتور. رأسي يؤلمني بشدة، ولدي حمى مرتفعة منذ الأمس.' },
      { speaker: 'Dr. Weber', textDe: 'Machen Sie bitte den Mund auf und sagen Sie „Aah“. Ja, Ihr Hals ist stark entzündet. Sie haben eine schwere Grippe.', textAr: 'افتح فمك من فضلك وقل "آه". نعم، حلقك ملتهب بشدة. أنت مصاب بأنفلونزا حادة.' },
      { speaker: 'Ahmed', textDe: 'Muss ich im Bett bleiben? Ich habe übermorgen eine wichtige Prüfung in der Schule.', textAr: 'هل يجب أن أبقى في السرير؟ لدي امتحان هام في المدرسة بعد غد.' },
      { speaker: 'Dr. Weber', textDe: 'Auf keinen Fall zur Schule! Sie dürfen nicht aufstehen. Sie müssen drei Tage im Bett bleiben und diese Tabletten dreimal täglich nach dem Essen einnehmen.', textAr: 'لا تذهب إلى المدرسة بأي حال! لا يجوز لك النهوض. يجب أن تلزم السرير لثلاثة أيام وتتناول هذه الأقراص ثلاث مرات يومياً بعد الأكل.' }
    ],
    questions: [
      {
        id: 'q1_1',
        questionDe: 'Was fehlt dem Patienten Ahmed?',
        questionAr: 'ما هي المشكلة الصحية التي يعاني منها أحمد؟',
        optionsDe: ['Er hat Kopf- und Halsschmerzen mit Fieber.', 'Sein Bein ist gebrochen.', 'Er hat Magenschmerzen nach dem Essen.', 'Er möchte nur eine Sportbefreiung.'],
        optionsAr: ['يعاني من ألم بالرأس والحلق مع ارتفاع في درجة الحرارة.', 'يعاني من كسر في الساق.', 'يعاني من آلام في المعدة بعد الأكل.', 'يريد فقط إعفاءً من حصة التربية الرياضية.'],
        correctIndex: 0,
        explanationAr: 'ذكر أحمد صراحة أن رأسه يؤلمه ولديه حمى، وأكد الطبيب التهاب الحلق.'
      },
      {
        id: 'q1_2',
        questionDe: 'Was soll Ahmed laut Anweisung des Arztes tun?',
        questionAr: 'ماذا يجب على أحمد فعله وفق تعليمات الطبيب؟',
        optionsDe: ['Er darf zur Schule gehen.', 'Er muss drei Tage im Bett bleiben und Tabletten nehmen.', 'Er soll sofort Sport treiben.', 'Er muss morgen wieder in die Praxis kommen.'],
        optionsAr: ['يجوز له الذهاب للمدرسة.', 'يجب عليه البقاء في السرير لثلاثة أيام وتناول الأقراص.', 'ينبغي عليه ممارسة الرياضة فوراً.', 'يجب أن يعود للعيادة غداً.'],
        correctIndex: 1,
        explanationAr: 'أمره الطبيب بالبقاء في السرير لمدة ثلاثة أيام وتناول الأقراص بانتظام بعد الطعام.'
      }
    ]
  },
  {
    id: 'track_2',
    lektion: 11,
    titleDe: 'Hörtext 2: Orientierung in Frankfurt – Der Weg zum Museum',
    titleAr: 'النص المسموع ٢: الاتجاهات في فرانكفورت – الطريق إلى المتحف',
    titleEn: 'Track 2: Orientation in Frankfurt – The Way to the Museum',
    contextDe: 'Eine Touristin fragt einen Polizisten an der Hauptwache.',
    contextAr: 'سائحة تسأل شرطياً في ساحة الهاوبتواخه بفرانكفورت.',
    duration: '1:50',
    speakers: [
      { name: 'Touristin', roleAr: 'سائحة' },
      { name: 'Polizist', roleAr: 'شرطي مرور' }
    ],
    turns: [
      { speaker: 'Touristin', textDe: 'Entschuldigung, Herr Polizist! Ich suche das Goethe-Museum. Ist es weit von hier?', textAr: 'معذرة يا سيدي الشرطي! أنا أبحث عن متحف غوته. هل هو بعيد من هنا؟' },
      { speaker: 'Polizist', textDe: 'Nein, überhaupt nicht weit. Sie können ganz einfach zu Fuß gehen.', textAr: 'لا، ليس بعيداً على الإطلاق. يمكنك الذهاب سيراً على الأقدام بكل سهولة.' },
      { speaker: 'Touristin', textDe: 'Und wie komme ich genau dorthin?', textAr: 'وكيف أصل إلى هناك بالتحديد؟' },
      { speaker: 'Polizist', textDe: 'Gehen Sie hier geradeaus bis zur Kreuzung, dann biegen Sie nach links in die Große Hirschgraben-Straße ein. Das Museum liegt nach 200 Metern auf der rechten Seite.', textAr: 'سيري هنا إلى الأمام مباشرة حتى التقاطع، ثم انعطفي يساراً في شارع هيرشغرابن الكبير. يقع المتحف بعد 200 متر على الجانب الأيمن.' },
      { speaker: 'Touristin', textDe: 'Vielen herzlichen Dank für Ihre Hilfe!', textAr: 'شكراً جزيلاً لحضرتك على المساعدة!' }
    ],
    questions: [
      {
        id: 'q2_1',
        questionDe: 'Wie kommt die Touristin zum Goethe-Museum?',
        questionAr: 'كيف تصل السائحة إلى متحف غوته؟',
        optionsDe: ['Mit dem Taxi.', 'Mit der U-Bahn Linie 4.', 'Zu Fuß.', 'Mit dem Fahrrad.'],
        optionsAr: ['بسيارة الأجرة.', 'بمترو الأنفاق خط 4.', 'سيراً على الأقدام (zu Fuß).', 'بالدراجة الهوائية.'],
        correctIndex: 2,
        explanationAr: 'أخبرها الشرطي صراحة: Sie können ganz einfach zu Fuß gehen.'
      }
    ]
  }
];
