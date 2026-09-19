/**
 * Italian Audio, Grammar & Listening Studio Data Bank
 * Aligned with Egyptian Ministry of Education Secondary 3 Syllabus (In Italia / Progetto Italiano)
 */

export interface ItalianPhoneticRule {
  symbol: string;
  ipa: string;
  nameEn: string;
  nameAr: string;
  ruleExplanationIt: string;
  ruleExplanationEn: string;
  ruleExplanationAr: string;
  exemplarWords: { word: string; translationEn: string; translationAr: string; phonetic: string }[];
  trapWarningEn: string;
  trapWarningAr: string;
}

export interface ItalianVerbTenseRule {
  id: 'presente' | 'passato_prossimo' | 'imperfetto' | 'futuro_semplice' | 'futuro_composto' | 'condizionale';
  titleIt: string;
  titleEn: string;
  titleAr: string;
  functionEn: string;
  functionAr: string;
  auxiliaryRuleIt?: string;
  regularEndings: {
    are: { io: string; tu: string; luiLei: string; noi: string; voi: string; loro: string };
    ere: { io: string; tu: string; luiLei: string; noi: string; voi: string; loro: string };
    ire: { io: string; tu: string; luiLei: string; noi: string; voi: string; loro: string };
  };
  irregularVerbs: {
    verb: string;
    conjugations: { io: string; tu: string; luiLei: string; noi: string; voi: string; loro: string };
    noteAr: string;
  }[];
  examples: { sentenceIt: string; translationEn: string; translationAr: string; highlight: string }[];
}

export interface ItalianPronounRule {
  category: 'diretti' | 'indiretti' | 'partitivo_ne' | 'combinati';
  titleIt: string;
  titleEn: string;
  titleAr: string;
  ruleExplanationIt: string;
  ruleExplanationEn: string;
  ruleExplanationAr: string;
  pronounTable: { person: string; direct: string; indirect: string; tonic: string }[];
  agreementNoteAr?: string;
  examples: { it: string; en: string; ar: string; note: string }[];
}

export interface ItalianPrepositionRule {
  prep: string;
  nameAr: string;
  nameEn: string;
  coreMeaningsAr: string[];
  articulatedForms: {
    il: string;
    lo: string;
    la: string;
    l_apostrophe: string;
    i: string;
    gli: string;
    le: string;
  };
  sampleUsages: { it: string; ar: string; en: string; ruleType: string }[];
}

export interface ItalianSituationScenario {
  id: string;
  unitaTitle: string;
  situationPromptIt: string;
  situationPromptAr: string;
  situationPromptEn: string;
  correctResponseIt: string;
  correctResponseAr: string;
  trapDistractorIt: string;
  trapExplanationAr: string;
}

export interface ItalianListeningTrack {
  id: string;
  unita: number;
  titleIt: string;
  titleAr: string;
  titleEn: string;
  contextIt: string;
  contextAr: string;
  duration: string;
  speakers: { name: string; roleAr: string }[];
  turns: { speaker: string; textIt: string; textAr: string }[];
  questions: {
    id: string;
    questionIt: string;
    questionAr: string;
    optionsIt: string[];
    optionsAr: string[];
    correctIndex: number;
    explanationAr: string;
  }[];
}

export const ITALIAN_PHONETICS: ItalianPhoneticRule[] = [
  {
    symbol: 'Doppie Consonanti',
    ipa: '[kː], [tː], [sː], [pː]',
    nameEn: 'Double Consonants (Geminates)',
    nameAr: 'الحروف الساكنة المضعفة (التشديد)',
    ruleExplanationIt: 'In italiano le doppie consonanti hanno una pronuncia più lunga ed energica e cambiano radicalmente il significato della parola.',
    ruleExplanationEn: 'Double consonants in Italian require elongated closure and acoustic tension. A single versus double consonant completely changes word meaning.',
    ruleExplanationAr: 'في اللغة الإيطالية ينبغي نطق الحرف المضعف بقوة وضغط زمني مضاعف، والخلط بين الحرف المفرد والمضعف يغير المعنى تماماً.',
    exemplarWords: [
      { word: 'notte', translationEn: 'night', translationAr: 'ليلة (مضعفة)', phonetic: '[ˈnɔtːe]' },
      { word: 'note', translationEn: 'notes', translationAr: 'نوتات موسيقية / ملاحظات (مفردة)', phonetic: '[ˈnɔte]' },
      { word: 'palla', translationEn: 'ball', translationAr: 'كرة (مضعفة)', phonetic: '[ˈpalːa]' },
      { word: 'pala', translationEn: 'shovel', translationAr: 'مجرفة (مفردة)', phonetic: '[ˈpala]' },
      { word: 'casa', translationEn: 'house', translationAr: 'بيت (مفردة)', phonetic: '[ˈkaza]' },
      { word: 'cassa', translationEn: 'cash register / box', translationAr: 'خزينة / صندوق (مضعفة)', phonetic: '[ˈkasːa]' },
    ],
    trapWarningEn: 'Never pronounce "fata" (fairy) as "fatta" (done/made)! The double consonant changes grammar and lexicon.',
    trapWarningAr: 'احذر الخلط بين نطق الحرف المشدد وغير المشدد: مثل (sete = عطش) و (sette = رقم سبعة).',
  },
  {
    symbol: 'C dolce vs. C dura',
    ipa: '[tʃ] vs. [k]',
    nameEn: 'Soft C vs. Hard C',
    nameAr: 'حرف C النطقي (تش اللين مقابل ك الصارم)',
    ruleExplanationIt: 'La lettera C suona dolce [tʃ] davanti a E ed I (cena, cinema). Suona dura [k] davanti ad A, O, U oppure se seguita da H (cane, cuore, chiave, amiche).',
    ruleExplanationEn: 'C is pronounced soft [tʃ] before E and I. It becomes hard [k] before A, O, U, or when followed by silent H (chi, che).',
    ruleExplanationAr: 'ينطق حرف C كصوت (تش) إذا جاء بعده E أو I (مثل ciao, cinema)، بينما ينطق (ك) إذا جاء بعده A, O, U أو دخل عليه حرف H (مثل che, chi, amiche).',
    exemplarWords: [
      { word: 'ciao', translationEn: 'hello / goodbye', translationAr: 'مرحباً (تش)', phonetic: '[ˈtʃaːo]' },
      { word: 'cena', translationEn: 'dinner', translationAr: 'عشاء (تش)', phonetic: '[ˈtʃeːna]' },
      { word: 'chiave', translationEn: 'key', translationAr: 'مفتاح (ك)', phonetic: '[ˈkjaːve]' },
      { word: 'amiche', translationEn: 'female friends', translationAr: 'صديقات (ك)', phonetic: '[aˈmiːke]' },
      { word: 'cuore', translationEn: 'heart', translationAr: 'قلب (ك)', phonetic: '[ˈkwɔːre]' },
    ],
    trapWarningEn: 'H in Italian is silent, but its grammatical role is to keep C hard: "amici" is [tʃ], while "amiche" is [k]!',
    trapWarningAr: 'حرف H صامت دائماً في الإيطالية، لكن وظيفته جعل حرف C ينطق (ك) أمام E و I: فكلمة amici تنطق (أَميتشي) بينما amiche تنطق (أَميكي)!',
  },
  {
    symbol: 'G dolce vs. G dura',
    ipa: '[dʒ] vs. [ɡ]',
    nameEn: 'Soft G vs. Hard G',
    nameAr: 'حرف G النطقي (الجيم المعطشة مقابل الجيم القاهرية)',
    ruleExplanationIt: 'La G è dolce [dʒ] davanti ad E ed I (gelato, giorno). È dura [ɡ] davanti ad A, O, U e davanti all\'H (gatto, gusto, spaghetti, colleghi).',
    ruleExplanationEn: 'G sounds soft [dʒ] before E and I (gelato). It sounds hard [ɡ] before A, O, U and with H (spaghetti, colleghi).',
    ruleExplanationAr: 'ينطق حرف G كجيم معطشة (جـ) أمام E و I، وينطق كجيم قاهرية غير معطشة (g) أمام A, O, U أو عند وجود حرف H (مثل spaghetti).',
    exemplarWords: [
      { word: 'gelato', translationEn: 'ice cream', translationAr: 'مثلجات (جـ معطشة)', phonetic: '[dʒeˈlaːto]' },
      { word: 'giorno', translationEn: 'day', translationAr: 'يوم (جـ معطشة)', phonetic: '[ˈdʒorno]' },
      { word: 'spaghetti', translationEn: 'spaghetti', translationAr: 'سباغيتي (جـ قاهرية)', phonetic: '[spaˈɡetːi]' },
      { word: 'gatto', translationEn: 'cat', translationAr: 'قط (جـ قاهرية)', phonetic: '[ˈɡatːo]' },
      { word: 'colleghi', translationEn: 'colleagues', translationAr: 'زملاء (جـ قاهرية)', phonetic: '[kolˈleːɡi]' },
    ],
    trapWarningEn: 'In "margherita", the gh guarantees the hard [ɡ] sound, not the soft [dʒ] sound.',
    trapWarningAr: 'وجود gh يجعل النطق جيماً مصرية صلبة، مثل margherita و spaghetti.',
  },
  {
    symbol: 'Digramma GN',
    ipa: '[ɲ]',
    nameEn: 'Nasal Palatal Digraph GN',
    nameAr: 'المقطع الصوتي الأنفي GN (النون المعطشة)',
    ruleExplanationIt: 'Il gruppo GN ha un suono nasale palatale dolce [ɲ], simile alla ñ spagnola (bagno, lavagna, gnocchi, ogni).',
    ruleExplanationEn: 'GN produces a soft palatal nasal sound [ɲ], exactly like Spanish ñ or "ny" in canyon (bagno, gnocchi, signore).',
    ruleExplanationAr: 'المقطع GN ينطق كصوت نون أنفية رقيقة ممتزجة بالياء (مثل النون الإسبانية ñ أو نيا في كلمة كينيون): مثل bagno و signore و gnocchi.',
    exemplarWords: [
      { word: 'bagno', translationEn: 'bathroom', translationAr: 'حمام', phonetic: '[ˈbaɲːo]' },
      { word: 'lavagna', translationEn: 'blackboard', translationAr: 'سبورة', phonetic: '[laˈvaɲːa]' },
      { word: 'signore', translationEn: 'gentleman / Mr.', translationAr: 'سيد', phonetic: '[siɲˈɲoːre]' },
      { word: 'ogni', translationEn: 'every / each', translationAr: 'كل', phonetic: '[ˈoɲːi]' },
      { word: 'sogno', translationEn: 'dream', translationAr: 'حلم', phonetic: '[ˈsoɲːo]' },
    ],
    trapWarningEn: 'Do not pronounce G separately from N. It is a single unified palatal sound.',
    trapWarningAr: 'لا تنطق حرف G مستقلاً عن N؛ فهما مقطع صوتي مدمج واحد ينطق من سقف الحلق.',
  },
  {
    symbol: 'Trigramma GLI',
    ipa: '[ʎ]',
    nameEn: 'Lateral Palatal Trigraph GLI',
    nameAr: 'المقطع الصوتي GLI (اللام المعطشة الرقيقة)',
    ruleExplanationIt: 'Il gruppo GLI davanti a vocale o come articolo/pronome si pronuncia [ʎ], simile a "lli" in "brilliant" (figlio, famiglia, bottiglia).',
    ruleExplanationAr: 'المقطع GLI يلفظ كصوت لام رقيقة معطشة مسحوبة بالياء (مثل Lli في كلمة million): مثل figlio و famiglia و bottiglia.',
    ruleExplanationEn: 'GLI produces a liquid palatal sound [ʎ], resembling the "lli" in "million" (famiglia, figlio, foglio).',
    exemplarWords: [
      { word: 'famiglia', translationEn: 'family', translationAr: 'عائلة', phonetic: '[faˈmiʎːa]' },
      { word: 'figlio', translationEn: 'son', translationAr: 'ابن', phonetic: '[ˈfiʎːo]' },
      { word: 'bottiglia', translationEn: 'bottle', translationAr: 'زجاجة', phonetic: '[botˈtiʎːa]' },
      { word: 'foglio', translationEn: 'sheet of paper', translationAr: 'ورقة', phonetic: '[ˈfɔʎːo]' },
      { word: 'meglio', translationEn: 'better', translationAr: 'أفضل', phonetic: '[ˈmɛʎːo]' },
    ],
    trapWarningEn: 'Exceptions like "glicerina" or "negligente" have hard [ɡl], but Italian native words with GLI are always palatal [ʎ].',
    trapWarningAr: 'في الكلمات الإيطالية الأصيلة تلفظ GLI دوماً كصوت لامي ناعم مدمج، ولا ينطق حرف G ظاهراً.',
  },
  {
    symbol: 'Gruppo SC / SCI',
    ipa: '[ʃ] vs. [sk]',
    nameEn: 'Sibilant SC vs. Hard SC',
    nameAr: 'المقطع SC (الشين اللينة مقابل سك الصارمة)',
    ruleExplanationIt: 'SC si pronuncia [ʃ] (come "sh" in inglese) davanti a E ed I (pesce, sciarpa, uscire). Si pronuncia [sk] davanti ad A, O, U e H (scala, scuola, scheda).',
    ruleExplanationEn: 'SC is pronounced [ʃ] ("sh") before E and I. It becomes [sk] before A, O, U or H (pesce vs. pesca, sciarpa vs. scala).',
    ruleExplanationAr: 'ينطق المقطع SC كصوت (شـ) أمام E و I (مثل pesce, sciarpa, uscire)، بينما ينطق (سك) أمام A, O, U أو عند وجود H (مثل scuola, scheda, pesca).',
    exemplarWords: [
      { word: 'pesce', translationEn: 'fish', translationAr: 'سمك (شـ)', phonetic: '[ˈpeʃːe]' },
      { word: 'sciarpa', translationEn: 'scarf', translationAr: 'وشاح / كوفية (شـ)', phonetic: '[ˈʃarpa]' },
      { word: 'uscire', translationEn: 'to go out', translationAr: 'يخرج (شـ)', phonetic: '[uʃˈʃiːre]' },
      { word: 'scuola', translationEn: 'school', translationAr: 'مدرسة (سك)', phonetic: '[ˈskwɔːla]' },
      { word: 'scheda', translationEn: 'card / tab', translationAr: 'بطاقة (سك)', phonetic: '[ˈskeːda]' },
    ],
    trapWarningEn: 'Notice "pesce" (fish, with soft [ʃ]) versus "pesca" (peach or fishing, with hard [sk])!',
    trapWarningAr: 'لاحظ الفارق الجوهري: pesce تعني سمكة (شـ)، بينما pesca تعني خوخة أو صيد (سك)!',
  },
];

export const ITALIAN_VERB_TENSES: ItalianVerbTenseRule[] = [
  {
    id: 'futuro_semplice',
    titleIt: 'Il Futuro Semplice',
    titleEn: 'Simple Future Tense',
    titleAr: 'زمن المستقبل البسيط',
    functionEn: 'Expresses planned projects, formal promises, forecasts, and epistemic suppositions (probability).',
    functionAr: 'يستخدم للتعبير عن المشروعات المستقبلية، الوعود المؤكدة، التوقعات الجوية، والتخمين والافتراض.',
    regularEndings: {
      are: { io: 'erò', tu: 'erai', luiLei: 'erà', noi: 'eremo', voi: 'erete', loro: 'eranno' },
      ere: { io: 'erò', tu: 'erai', luiLei: 'erà', noi: 'eremo', voi: 'erete', loro: 'eranno' },
      ire: { io: 'irò', tu: 'irai', luiLei: 'irà', noi: 'iremo', voi: 'irete', loro: 'iranno' },
    },
    irregularVerbs: [
      {
        verb: 'andare',
        conjugations: { io: 'andrò', tu: 'andrai', luiLei: 'andrà', noi: 'andremo', voi: 'andrete', loro: 'andranno' },
        noteAr: 'حذف حرف a من جذر الفعل (andr-)',
      },
      {
        verb: 'essere',
        conjugations: { io: 'sarò', tu: 'sarai', luiLei: 'sarà', noi: 'saremo', voi: 'sarete', loro: 'saranno' },
        noteAr: 'جذر شاذ خاص (sar-)',
      },
      {
        verb: 'avere',
        conjugations: { io: 'avrò', tu: 'avrai', luiLei: 'avrà', noi: 'avremo', voi: 'avrete', loro: 'avranno' },
        noteAr: 'حذف حرف e من جذر الفعل (avr-)',
      },
      {
        verb: 'vedere',
        conjugations: { io: 'vedrò', tu: 'vedrai', luiLei: 'vedrà', noi: 'vedremo', voi: 'vedrete', loro: 'vedranno' },
        noteAr: 'حذف حرف e (vedr-)',
      },
      {
        verb: 'venire',
        conjugations: { io: 'verrò', tu: 'verrai', luiLei: 'verrà', noi: 'verremo', voi: 'verrete', loro: 'verranno' },
        noteAr: 'مضاعفة حرف r (verr-)',
      },
      {
        verb: 'fare',
        conjugations: { io: 'farò', tu: 'farai', luiLei: 'farà', noi: 'faremo', voi: 'farete', loro: 'faranno' },
        noteAr: 'الاحتفاظ بحرف a (far-)',
      },
    ],
    examples: [
      {
        sentenceIt: "L'anno prossimo faremo un gemellaggio con una scuola di Roma.",
        translationEn: 'Next year we will do a twinning project with a school in Rome.',
        translationAr: 'في العام القادم سنقوم بمشروع توأمة مع مدرسة في روما.',
        highlight: 'faremo (Progetto futuro)',
      },
      {
        sentenceIt: 'Prometto che studierò con molto impegno.',
        translationEn: 'I promise that I will study with great dedication.',
        translationAr: 'أعدك بأنني سأدرس بجد واجتهاد.',
        highlight: 'studierò (Promessa)',
      },
      {
        sentenceIt: 'Che ore sono? - Saranno le dieci.',
        translationEn: 'What time is it? - It is probably ten o’clock.',
        translationAr: 'كم الساعة؟ - قد تكون العاشرة (تخمين).',
        highlight: 'saranno (Supposizione / Dubbio)',
      },
    ],
  },
  {
    id: 'futuro_composto',
    titleIt: 'Il Futuro Composto (Anteriore)',
    titleEn: 'Future Perfect Tense',
    titleAr: 'زمن المستقبل المركب (المستقبل الأسبق)',
    functionEn: 'Expresses an action that will be completed in the future BEFORE another future action, introduced by quando, appena, or dopo che.',
    functionAr: 'يعبر عن حدث مستقبلي ينتهي ويتم في المستقبل قبل وقوع حدث مستقبلي آخر، ويرتبط بروابط زمنية: quando, appena, dopo che.',
    auxiliaryRuleIt: 'Si forma con il futuro semplice di ESSERE o AVERE + il participio passato del verbo.',
    regularEndings: {
      are: { io: 'avrò parlato', tu: 'avrai parlato', luiLei: 'avrà parlato', noi: 'avremo parlato', voi: 'avrete parlato', loro: 'avranno parlato' },
      ere: { io: 'avrò venduto', tu: 'avrai venduto', luiLei: 'avrà venduto', noi: 'avremo venduto', voi: 'avrete venduto', loro: 'avranno venduto' },
      ire: { io: 'sarò partito/a', tu: 'sarai partito/a', luiLei: 'sarà partito/a', noi: 'saremo partiti/e', voi: 'sarete partiti/e', loro: 'saranno partiti/e' },
    },
    irregularVerbs: [
      {
        verb: 'andare (con essere)',
        conjugations: { io: 'sarò andato/a', tu: 'sarai andato/a', luiLei: 'sarà andato/a', noi: 'saremo andati/e', voi: 'sarete andati/e', loro: 'saranno andati/e' },
        noteAr: 'يتطلب تطابق اسم المفعول في النوع والعدد مع الفاعل',
      },
      {
        verb: 'finire (con avere)',
        conjugations: { io: 'avrò finito', tu: 'avrai finito', luiLei: 'avrà finito', noi: 'avremo finito', voi: 'avrete finito', loro: 'avranno finito' },
        noteAr: 'لا يتغير اسم المفعول مع الفاعل عند استخدام avere',
      },
    ],
    examples: [
      {
        sentenceIt: 'Quando avrò finito i compiti, uscirò con gli amici.',
        translationEn: 'When I have finished my homework, I will go out with friends.',
        translationAr: 'عندما أنهي واجباتي أولاً، سأخرج مع أصدقائي.',
        highlight: 'avrò finito (Azione 1) -> uscirò (Azione 2)',
      },
      {
        sentenceIt: 'Appena saremo arrivati a Firenze, visiteremo gli Uffizi.',
        translationEn: 'As soon as we arrive in Florence, we will visit the Uffizi.',
        translationAr: 'بمجرد أن نصل إلى فلورنسا، سنزور متحف أوفيزي.',
        highlight: 'saremo arrivati (Futuro Composto)',
      },
    ],
  },
  {
    id: 'passato_prossimo',
    titleIt: 'Il Passato Prossimo',
    titleEn: 'Present Perfect / Past Tense',
    titleAr: 'زمن الماضي القريب',
    functionEn: 'Expresses completed events in the past. Requires auxiliary selection (essere vs. avere) and participle agreement with direct pronouns.',
    functionAr: 'يعبر عن أحداث تامة في الماضي، ويتطلب اختيار الفعل المساعد المناسب (essere للحركة والبقاء أو avere للأفعال المتعدية) ومراعاة التبعية.',
    regularEndings: {
      are: { io: 'ho parlato', tu: 'hai parlato', luiLei: 'ha parlato', noi: 'abbiamo parlato', voi: 'avete parlato', loro: 'hanno parlato' },
      ere: { io: 'ho ricevuto', tu: 'hai ricevuto', luiLei: 'ha ricevuto', noi: 'abbiamo ricevuto', voi: 'avete ricevuto', loro: 'hanno ricevuto' },
      ire: { io: 'sono uscito/a', tu: 'sei uscito/a', luiLei: 'è uscito/a', noi: 'siamo usciti/e', voi: 'siete usciti/e', loro: 'sono usciti/e' },
    },
    irregularVerbs: [
      {
        verb: 'vedere',
        conjugations: { io: 'ho visto', tu: 'hai visto', luiLei: 'ha visto', noi: 'abbiamo visto', voi: 'avete visto', loro: 'hanno visto' },
        noteAr: 'اسم مفعول شاذ: visto',
      },
      {
        verb: 'prendere',
        conjugations: { io: 'ho preso', tu: 'hai preso', luiLei: 'ha preso', noi: 'abbiamo preso', voi: 'avete preso', loro: 'hanno preso' },
        noteAr: 'اسم مفعول شاذ: preso',
      },
    ],
    examples: [
      {
        sentenceIt: 'Ieri i ragazzi hanno fatto le prove del gruppo musicale.',
        translationEn: 'Yesterday the teenagers rehearsed for the musical band.',
        translationAr: 'بالأمس أجرى الشباب بروفات الفرقة الموسيقية.',
        highlight: 'hanno fatto',
      },
      {
        sentenceIt: 'Hai visto Chiara ieri? - Sì, l’ho vista in biblioteca.',
        translationEn: 'Did you see Chiara yesterday? - Yes, I saw her in the library.',
        translationAr: 'هل رأيت كيارا أمس؟ - نعم، رأيتها في المكتبة (تبعية المؤنث).',
        highlight: 'l’ho vista (Accordo con Chiara)',
      },
    ],
  },
];

export const ITALIAN_PRONOUNS: ItalianPronounRule[] = [
  {
    category: 'diretti',
    titleIt: 'I Pronomi Diretti',
    titleEn: 'Direct Object Pronouns',
    titleAr: 'ضمائر المفعول به المباشر',
    ruleExplanationIt: 'I pronomi diretti sostituiscono un nome di persona o cosa e rispondono alla domanda: Chi? Che cosa? Si mettono prima del verbo coniugato.',
    ruleExplanationEn: 'Direct pronouns replace a direct object without a preposition, answering the question "Whom?" or "What?". Placed directly before the verb.',
    ruleExplanationAr: 'تحل ضمائر المفعول المباشر محل اسم دون وجود حرف جر قبله، وتجيب عن سؤال: مَن؟ أو ماذا؟ وتوضع مباشرة قبل الفعل المصرف.',
    pronounTable: [
      { person: 'io (1a sing.)', direct: 'mi', indirect: 'mi', tonic: 'me' },
      { person: 'tu (2a sing.)', direct: 'ti', indirect: 'ti', tonic: 'te' },
      { person: 'lui (3a sing. m.)', direct: 'lo', indirect: 'gli', tonic: 'lui' },
      { person: 'lei (3a sing. f.)', direct: 'la', indirect: 'le', tonic: 'lei' },
      { person: 'noi (1a plur.)', direct: 'ci', indirect: 'ci', tonic: 'noi' },
      { person: 'voi (2a plur.)', direct: 'vi', indirect: 'vi', tonic: 'voi' },
      { person: 'loro (3a plur. m.)', direct: 'li', indirect: 'loro', tonic: 'loro' },
      { person: 'loro (3a plur. f.)', direct: 'le', indirect: 'loro', tonic: 'loro' },
    ],
    agreementNoteAr: 'هام جداً للامتحان: مع الأزمنة المركبة (Passato Prossimo)، يتطابق اسم المفعول وجوباً في النوع والعدد مع الضمائر (lo, la, li, le): l’ho vista (مفرد مؤنث)، li ho comprati (جمع مذكر)!',
    examples: [
      { it: 'Ascolti la canzone? - Sì, la ascolto volentieri.', en: 'Do you listen to the song? - Yes, I gladly listen to it.', ar: 'هل تسمع الأغنية؟ - نعم، أسمعها بكل سرور.', note: 'la = la canzone (femm. sing.)' },
      { it: 'Compri i pantaloni neri? - Sì, li compro.', en: 'Are you buying the black trousers? - Yes, I buy them.', ar: 'هل تشتري البنطال الأسود؟ - نعم، أشتريه.', note: 'li = i pantaloni (masch. plur.)' },
      { it: 'Hai letto le riviste? - Sì, le ho lette tutte.', en: 'Did you read the magazines? - Yes, I read them all.', ar: 'هل قرأت المجلات؟ - نعم، قرأتها كلها (تبعية مؤنث).', note: 'Accordo participio: lette con le' },
    ],
  },
  {
    category: 'partitivo_ne',
    titleIt: 'Il Pronome Partitivo NE',
    titleEn: 'The Partitive Pronoun NE',
    titleAr: 'ضمير التجزئة والكمية NE',
    ruleExplanationIt: 'Il pronome NE si usa per indicare una quantità parziale, un numero, o zero (nessuno). Con i tempi composti richiede l\'accordo con la quantità!',
    ruleExplanationEn: 'The pronoun NE denotes a partial quantity or a numeric amount. In compound tenses, the past participle MUST agree with the quantity mentioned!',
    ruleExplanationAr: 'يستخدم الضمير NE للإشارة إلى كمية جزئية، عدد محدد، أو نفي الكمية (nessuno). وفي الماضي يتطابق اسم المفعول مع العدد أو الكمية المذكورة!',
    pronounTable: [
      { person: 'Quantità parziale', direct: 'ne', indirect: '-', tonic: 'di questo / di quello' },
      { person: 'Con numero (due, tre...)', direct: 'ne', indirect: '-', tonic: 'di loro' },
      { person: 'Quantità nulla (nessuno/a)', direct: 'non ... ne', indirect: '-', tonic: 'affatto' },
    ],
    agreementNoteAr: 'قاعدة التبعية مع NE: Quanti caffè hai bevuto? - Ne ho bevut-i due (جمع مذكر). Quante mele hai comprato? - Ne ho comprat-e un chilo (مفرد مذكر) أو Ne ho comprat-e tre (جمع مؤنث)!',
    examples: [
      { it: 'Quanti caffè bevi al giorno? - Ne bevo tre.', en: 'How many coffees do you drink a day? - I drink three of them.', ar: 'كم فنجان قهوة تشرب يومياً؟ - أشرب منها ثلاثة.', note: 'Ne sostituisce caffè con numero' },
      { it: 'Vuoi una fetta di torta? - Grazie, ne prendo un pezzetto.', en: 'Do you want a slice of cake? - Thanks, I will take a small piece of it.', ar: 'هل تريد قطعة كعك؟ - شكراً، سآخذ منها قطعة صغيرة.', note: 'Ne = di torta' },
      { it: 'Quante pizze hai mangiato? - Ne ho mangiate due.', en: 'How many pizzas did you eat? - I ate two of them.', ar: 'كم بيتزا أكلت؟ - أكلت منها اثنتين (تبعية mangiate).', note: 'Accordo: mangiate con due (femm.)' },
    ],
  },
  {
    category: 'indiretti',
    titleIt: 'I Pronomi Indiretti',
    titleEn: 'Indirect Object Pronouns',
    titleAr: 'ضمائر المفعول به غير المباشر',
    ruleExplanationIt: 'I pronomi indiretti rispondono alla domanda: A chi? A che cosa? e sostituiscono una persona preceduta dalla preposizione A.',
    ruleExplanationEn: 'Indirect pronouns answer "To whom?" and replace a noun introduced by the preposition "A". gli = a lui; le = a lei; loro = a loro.',
    ruleExplanationAr: 'تجيب الضمائر غير المباشرة عن سؤال: إلى مَن؟ وتحل محل اسم مجرور بحرف الجر (A). هام: gli تعني (له - a lui)، و le تعني (لها - a lei)، و loro تأتي بعد الفعل (لهم - a loro).',
    pronounTable: [
      { person: 'a me (1a sing.)', direct: 'mi', indirect: 'mi', tonic: 'a me' },
      { person: 'a te (2a sing.)', direct: 'ti', indirect: 'ti', tonic: 'a te' },
      { person: 'a lui (3a sing. m.)', direct: 'gli', indirect: 'gli', tonic: 'a lui' },
      { person: 'a lei (3a sing. f.)', direct: 'le', indirect: 'le', tonic: 'a lei' },
      { person: 'a noi (1a plur.)', direct: 'ci', indirect: 'ci', tonic: 'a noi' },
      { person: 'a voi (2a plur.)', direct: 'vi', indirect: 'vi', tonic: 'a voi' },
      { person: 'a loro (3a plur.)', direct: 'gli / loro', indirect: 'loro', tonic: 'a loro' },
    ],
    examples: [
      { it: 'Telefoni a Marco stasera? - Sì, gli telefono dopo cena.', en: 'Are you calling Marco tonight? - Yes, I will call him after dinner.', ar: 'هل ستهاتف ماركو الليلة؟ - نعم، سأتصل به (gli = a Marco).', note: 'gli = a lui' },
      { it: 'Cosa regali a Chiara? - Le regalo un libro di musica.', en: 'What are you giving Chiara? - I give her a music book.', ar: 'ماذا ستهدي كيارا؟ - سأهديها كتاب موسيقى (le = a Chiara).', note: 'le = a lei' },
      { it: 'Ti piace questo brano musicale? - Sì, mi piace molto.', en: 'Do you like this music track? - Yes, I like it very much.', ar: 'هل تعجبك هذه المقطوعة الموسيقية؟ - نعم، تعجبني كثيراً.', note: 'mi piace (singolare)' },
    ],
  },
];

export const ITALIAN_PREPOSITIONS: ItalianPrepositionRule[] = [
  {
    prep: 'DI',
    nameAr: 'حرف الجر DI (الملكية، المادة، والمنشأ)',
    nameEn: 'Preposition DI (Possession, Material, Origin)',
    coreMeaningsAr: ['الملكية (la chitarra di Dino)', 'المادة المصنوع منها الشيء (una camicia di seta)', 'المنشأ مع فعل essere (sono di Roma)'],
    articulatedForms: {
      il: 'del',
      lo: 'dello',
      la: 'della',
      l_apostrophe: "dell'",
      i: 'dei',
      gli: 'degli',
      le: 'delle',
    },
    sampleUsages: [
      { it: 'Questo è il libro del professore.', ar: 'هذا كتاب الأستاذ (di + il = del).', en: 'This is the professor’s book.', ruleType: 'Possesso' },
      { it: 'Di dove sei? - Sono di Milano.', ar: 'من أين أنت؟ - أنا من ميلانو.', en: 'Where are you from? - I am from Milan.', ruleType: 'Origine con essere' },
    ],
  },
  {
    prep: 'A',
    nameAr: 'حرف الجر A (المدن، التوجه، والمستقبل)',
    nameEn: 'Preposition A (Cities, Direction, Activity)',
    coreMeaningsAr: ['المدن والعواصم (a Roma, a Parigi)', 'التوجه إلى مكان محدد (a scuola, a casa, a teatro)', 'أفعال تفيد الذهاب لفعل شيء (vado a studiare)'],
    articulatedForms: {
      il: 'al',
      lo: 'allo',
      la: 'alla',
      l_apostrophe: "all'",
      i: 'ai',
      gli: 'agli',
      le: 'alle',
    },
    sampleUsages: [
      { it: 'Vado al cinema con gli amici.', ar: 'أذهب إلى السينما مع الأصدقاء (a + il = al).', en: 'I go to the cinema with friends.', ruleType: 'Luogo' },
      { it: 'Vivo a Roma da due anni.', ar: 'أعيش في روما منذ سنتين (مع المدن).', en: 'I have lived in Rome for two years.', ruleType: 'Città' },
    ],
  },
  {
    prep: 'IN',
    nameAr: 'حرف الجر IN (الدول، وسائل المواصلات، والأماكن المنتهية بـ -ia)',
    nameEn: 'Preposition IN (Countries, Transport, Places in -ia)',
    coreMeaningsAr: ['الدول والقارات (in Italia, in Egitto)', 'وسائل المواصلات بدون أداة (in treno, in autobus, in aereo)', 'الأماكن المنتهية بـ -ia (in farmacia, in pizzeria)'],
    articulatedForms: {
      il: 'nel',
      lo: 'nello',
      la: 'nella',
      l_apostrophe: "nell'",
      i: 'nei',
      gli: 'negli',
      le: 'nelle',
    },
    sampleUsages: [
      { it: 'Andiamo in vacanza in Italia.', ar: 'نذهب في إجازة إلى إيطاليا (الدول تأخذ in).', en: 'We go on vacation to Italy.', ruleType: 'Paese' },
      { it: 'Vado a scuola in autobus.', ar: 'أذهب إلى المدرسة بالأوتوبيس (وسائل المواصلات).', en: 'I go to school by bus.', ruleType: 'Mezzo di trasporto' },
    ],
  },
];

export const ITALIAN_SITUATION_SCENARIOS: ItalianSituationScenario[] = [
  {
    id: 'sit_1',
    unitaTitle: 'Unità 1: Esprimere Gioia',
    situationPromptIt: 'Quando esprimi gioia o soddisfazione per una bella notizia, dici:',
    situationPromptAr: 'عندما تعبر عن الفرح والسرور لسماع خبر سار، تقول:',
    situationPromptEn: 'When expressing joy or satisfaction about good news, you say:',
    correctResponseIt: 'Che bello! Abbiamo vinto il primo premio!',
    correctResponseAr: 'يا للروعة! لقد فزنا بالجائزة الأولى!',
    trapDistractorIt: 'Che peccato! Non posso venire.',
    trapExplanationAr: 'تعبير (Che peccato!) يعني يا للخسارة/للأسف ويعبر عن الحزن والأسف (rammarico) وليس الفرح (gioia).',
  },
  {
    id: 'sit_2',
    unitaTitle: 'Unità 1: Esprimere Rammarico o Disappunto',
    situationPromptIt: 'Quando esprimi rammarico o delusione, dici:',
    situationPromptAr: 'عندما تعبر عن الأسف أو خيبة الأمل، تقول:',
    situationPromptEn: 'When expressing regret or disappointment, you say:',
    correctResponseIt: 'Che peccato! Non ci sono più biglietti per il concerto.',
    correctResponseAr: 'يا للأسف! لم تعد هناك تذاكر للحفل الموسيقي.',
    trapDistractorIt: 'Che bella sorpresa vederti qui!',
    trapExplanationAr: 'تعبير (Che bella sorpresa) يعبر عن المفاجأة السارة والفرح وليس الأسف.',
  },
  {
    id: 'sit_3',
    unitaTitle: 'Unità 2: Fare Progetti Futuri',
    situationPromptIt: 'Quando fai un progetto per il futuro, dici:',
    situationPromptAr: 'عندما تخطط لمشروع مستقبلي، تقول:',
    situationPromptEn: 'When making a plan or project for the future, you say:',
    correctResponseIt: 'Quest’anno parteciperemo al concorso musicale scolastico.',
    correctResponseAr: 'هذا العام سنشارك في المسابقة الموسيقية المدرسية.',
    trapDistractorIt: 'Ieri sera ho visto un film bellissimo in televisione.',
    trapExplanationAr: 'الجملة في زمن الماضي القريب وتعبر عن حدث وقع أمس ولا تعبر عن مشروع مستقبلي.',
  },
  {
    id: 'sit_4',
    unitaTitle: 'Unità 3: Al negozio di abbigliamento - Chiedere la taglia',
    situationPromptIt: 'Al negozio di vestiti, quando chiedi la taglia, dici:',
    situationPromptAr: 'في متجر الملابس، عندما تسأل عن المقاس، تقول:',
    situationPromptEn: 'At the clothing shop, when asking for the size, you say:',
    correctResponseIt: 'Che taglia porta? / Che taglia è questa gonna?',
    correctResponseAr: 'ما هو مقاس حضرتك؟ / ما هو مقاس هذه التنورة؟',
    trapDistractorIt: 'Quanto costa questo paio di scarpe?',
    trapExplanationAr: 'السؤال بـ Quanto costa يسأل عن السعر (prezzo) وليس المقاس (taglia).',
  },
  {
    id: 'sit_5',
    unitaTitle: 'Unità 3: Chiedere il prezzo',
    situationPromptIt: 'Quando chiedi il prezzo di un capo di abbigliamento, dici:',
    situationPromptAr: 'عندما تسأل عن سعر قطعة ملابس، تقول:',
    situationPromptEn: 'When asking the price of an article of clothing, you say:',
    correctResponseIt: 'Quanto costa questa maglietta bianca? / Quant’è?',
    correctResponseAr: 'كم سعر هذا القميص الأبيض؟',
    trapDistractorIt: 'Di che colore è questo cappotto?',
    trapExplanationAr: 'السؤال بـ Di che colore يسأل عن اللون وليس السعر.',
  },
  {
    id: 'sit_6',
    unitaTitle: 'Unità 4: Esprimere un dubbio o incertezza',
    situationPromptIt: 'Quando esprimi dubbio o incertezza su qualcosa, dici:',
    situationPromptAr: 'عندما تعبر عن الشك أو عدم التأكد، تقول:',
    situationPromptEn: 'When expressing doubt or uncertainty, you say:',
    correctResponseIt: 'Mah, non ne sono proprio sicuro! / Non so se verrò.',
    correctResponseAr: 'لست متأكداً تماماً من ذلك! / لا أعلم إن كنت سآتي.',
    trapDistractorIt: 'Certamente, hai perfettamente ragione!',
    trapExplanationAr: 'تعبير (Certamente) و (Hai ragione) يعبر عن التأكيد والموافقة التامة (accordo/certezza) وليس الشك.',
  },
];

export const ITALIAN_LISTENING_TRACKS: ItalianListeningTrack[] = [
  {
    id: 'track_it_1',
    unita: 1,
    titleIt: 'I progetti extrascolastici: Il concorso musicale',
    titleAr: 'المشاريع المدرسية اللاصفية: المسابقة الموسيقية',
    titleEn: 'Extracurricular Projects: The Music Competition',
    contextIt: 'Dino, Chiara e Gianna discutono nell’aula di musica sui progetti dell’anno scolastico.',
    contextAr: 'دينو وكيارا وجانا يتناقشون في غرفة الموسيقى حول مشروعات العام الدراسي الجديد.',
    duration: '2:15',
    speakers: [
      { name: 'Dino', roleAr: 'طالب وعازف درامز في الفرقة' },
      { name: 'Chiara', roleAr: 'طالبة ومغنية الفرقة' },
      { name: 'Gianna', roleAr: 'طالبة وعازفة بيانو' },
    ],
    turns: [
      { speaker: 'Dino', textIt: 'Ragazzi, quest’anno la nostra scuola organizza tre progetti extrascolastici: l’ecologia, il gemellaggio e il concorso musicale.', textAr: 'يا شباب، مدرستنا تنظم هذا العام ثلاثة مشاريع لاصفية: البيئة، التوأمة، والمسابقة الموسيقية.' },
      { speaker: 'Chiara', textIt: 'Io preferisco senza dubbio il concorso musicale! Dobbiamo formare un gruppo rock.', textAr: 'أنا أفضل المسابقة الموسيقية دون شك! يجب أن نكون فرقة روك.' },
      { speaker: 'Gianna', textIt: 'Ottima idea! Io suonerò la tastiera, Dino suonerà la batteria e Chiara canterà.', textAr: 'فكرة ممتازة! أنا سأعزف على الأورج، ودينو على الدرامز، وكيارا ستغني.' },
      { speaker: 'Dino', textIt: 'Perfetto! Da domani cominceremo le prove nella casa di campagna di mio nonno.', textAr: 'رائع! من الغد سنبدأ البروفات في منزل ريفيّ يمتلكه جدي.' },
    ],
    questions: [
      {
        id: 'q_it_1',
        questionIt: 'Quale progetto scelgono i ragazzi?',
        questionAr: 'أي مشروع اختاره الطلاب للمشاركة فيه؟',
        optionsIt: ['Il concorso musicale', 'Il gemellaggio con Parigi', 'L’educazione stradale', 'La pulizia del bosco'],
        optionsAr: ['المسابقة الموسيقية', 'التوأمة مع باريس', 'التربية المرورية', 'تنظيف الغابة'],
        correctIndex: 0,
        explanationAr: 'اختار الطلاب المسابقة الموسيقية المدرسية (il concorso musicale) لتكوين فرقة روك.',
      },
      {
        id: 'q_it_2',
        questionIt: 'Dove faranno le prove per il concorso?',
        questionAr: 'أين سيجري الطلاب بروفات وتدريبات المسابقة؟',
        optionsIt: ['A scuola nell’aula magna', 'A casa del nonno di Dino', 'In un locale a Roma', 'A casa di Chiara'],
        optionsAr: ['في المدرسة بالقاعة الكبرى', 'في منزل جد دينو بالريف', 'في نادٍ بروما', 'في منزل كيارا'],
        correctIndex: 1,
        explanationAr: 'صرح دينو بأنهم سيبدأون البروفات في منزل جده الريفي (nella casa di campagna di mio nonno).',
      },
    ],
  },
  {
    id: 'track_it_2',
    unita: 3,
    titleIt: 'Lo shopping al centro commerciale: I saldi di stagione',
    titleAr: 'التسوق في المركز التجاري: تخفيضات الموسم',
    titleEn: 'Shopping at the Mall: Seasonal Sales',
    contextIt: 'Alessio e Gianna vanno al centro commerciale per comprare i vestiti per il concerto finale.',
    contextAr: 'أليسيو وجانا يذهبان إلى المركز التجاري لشراء ملابس مناسبة للحفل الموسيقي النهائي.',
    duration: '2:30',
    speakers: [
      { name: 'Alessio', roleAr: 'طالب يبحث عن بنطال جينز' },
      { name: 'Commessa', roleAr: 'بائعة في متجر الملابس' },
      { name: 'Gianna', roleAr: 'زميلة أليسيو تساعده في الشراء' },
    ],
    turns: [
      { speaker: 'Alessio', textIt: 'Buongiorno, vorrei provare quei pantaloni neri in vetrina.', textAr: 'صباح الخير، أود أن أقيس ذلك البنطال الأسود المعروض في الواجهة.' },
      { speaker: 'Commessa', textIt: 'Certamente! Che taglia porta?', textAr: 'بكل سرور! ما هو مقاس حضرتك؟' },
      { speaker: 'Alessio', textIt: 'Porto la quarantadue. Quanto costano con lo sconto dei saldi?', textAr: 'مقاسي 42. كم سعرهم بعد تخفيضات الصالدي؟' },
      { speaker: 'Commessa', textIt: 'Costavano ottanta euro, ma ora con lo sconto del 50% costano solo quaranta euro!', textAr: 'كان سعرهم 80 يورو، لكن الآن مع خصم 50% سعرهم 40 يورو فقط!' },
      { speaker: 'Gianna', textIt: 'È un vero affare! Li compriamo subito!', textAr: 'إنها صفقة رابحة حقيقية! سنشتريه فوراً!' },
    ],
    questions: [
      {
        id: 'q_it_3',
        questionIt: 'Che taglia porta Alessio?',
        questionAr: 'ما هو مقاس البنطال الذي يرتديه أليسيو؟',
        optionsIt: ['La quaranta', 'La quarantadue', 'La quarantaquattro', 'La quarantasei'],
        optionsAr: ['مقاس 40', 'مقاس 42', 'مقاس 44', 'مقاس 46'],
        correctIndex: 1,
        explanationAr: 'قال أليسيو بوضوح: Porto la quarantadue (مقاسي 42).',
      },
      {
        id: 'q_it_4',
        questionIt: 'Quanto costano i pantaloni dopo lo sconto?',
        questionAr: 'كم أصبح سعر البنطال بعد التخفيض؟',
        optionsIt: ['Ottanta euro', 'Cinquanta euro', 'Quaranta euro', 'Venti euro'],
        optionsAr: ['80 يورو', '50 يورو', '40 يورو', '20 يورو'],
        correctIndex: 2,
        explanationAr: 'أوضحت البائعة أن سعره كان 80 يورو وأصبح بخصم 50% مساوياً 40 يورو (quaranta euro).',
      },
    ],
  },
];
