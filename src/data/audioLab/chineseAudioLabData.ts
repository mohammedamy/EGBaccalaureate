/**
  * Chinese (Mandarin) Audio, Pinyin, Grammar & Listening Studio Data Bank
  * Aligned with Egyptian Ministry of Education Secondary Syllabus (《快乐汉语》Kuai Le Han Yu / 《通向中国》Gateway to China)
  * and New Egyptian Baccalaureate (EG-Bac) HSK 1-3 / CEFR A2-B1 Curriculum.
  */

export interface ChinesePinyinToneRule {
  category: 'initials' | 'finals' | 'tones' | 'sandhi';
  symbol: string;
  pinyin: string;
  ipa: string;
  nameEn: string;
  nameAr: string;
  explanationEn: string;
  explanationAr: string;
  pitchContour?: string; // e.g. "55 High Level", "35 Rising"
  examples: {
    hanzi: string;
    pinyin: string;
    meaningEn: string;
    meaningAr: string;
    audioText: string;
  }[];
  trapTipEn: string;
  trapTipAr: string;
}

export interface ChineseRadicalItem {
  radical: string;
  pinyin: string;
  nameEn: string;
  nameAr: string;
  originalMeaningEn: string;
  originalMeaningAr: string;
  strokeCount: number;
  sampleCharacters: {
    hanzi: string;
    pinyin: string;
    meaningEn: string;
    meaningAr: string;
    structure: string; // e.g. "Left-Right", "Top-Bottom"
  }[];
}

export interface ChineseGrammarPattern {
  id: string;
  category: 'word_order' | 'measure_words' | 'interrogatives' | 'modal_verbs' | 'aspect_particles';
  titleEn: string;
  titleAr: string;
  formula: string;
  explanationEn: string;
  explanationAr: string;
  rules: {
    ruleEn: string;
    ruleAr: string;
    sampleSentence: {
      hanzi: string;
      pinyin: string;
      meaningEn: string;
      meaningAr: string;
    };
  }[];
  commonMistakeAr: string;
  commonMistakeEn: string;
}

export interface ChineseSituationScenario {
  id: string;
  situationTitleAr: string;
  situationTitleEn: string;
  promptAr: string;
  promptEn: string;
  dialogueContext: {
    speakerA: string;
    speakerB: string;
    lineAHanzi: string;
    lineAPinyin: string;
    lineAAr: string;
  };
  options: {
    textHanzi: string;
    textPinyin: string;
    textAr: string;
    textEn: string;
    isCorrect: boolean;
    explanationAr: string;
  }[];
}

export interface ChineseListeningTrack {
  id: string;
  titleEn: string;
  titleAr: string;
  level: 'HSK 1' | 'HSK 2' | 'HSK 3';
  topic: string;
  audioScriptHanzi: string;
  audioScriptPinyin: string;
  translationEn: string;
  translationAr: string;
  questions: {
    questionHanzi: string;
    questionPinyin: string;
    questionAr: string;
    questionEn: string;
    options: {
      textHanzi: string;
      textPinyin: string;
      textAr: string;
      textEn: string;
    }[];
    correctIndex: number;
    explanationAr: string;
    explanationEn: string;
  }[];
}

// =========================================================================
// 1. PINYIN & TONES DATA (4 Tones, Sandhi, Shengmu & Yunmu)
// =========================================================================
export const CHINESE_PINYIN_TONES_DATA: ChinesePinyinToneRule[] = [
  {
    category: 'tones',
    symbol: 'ˉ (第一声)',
    pinyin: 'mā',
    ipa: '[mā] / [ma˥˥]',
    nameEn: '1st Tone: High Level (55)',
    nameAr: 'النغمة الأولى: المستوية العالية (55)',
    pitchContour: '55 (High & Flat)',
    explanationEn: 'High-pitch, flat and sustained pitch. Maintain a steady high vocal register like singing a high note (laaa).',
    explanationAr: 'نغمة عالية مستوية ومستمرة لا تنخفض ولا ترتفع، تُنطق في أعلى طبقة صوتية مريحة تشبه الغناء بنغمة مستقرة.',
    examples: [
      { hanzi: '妈', pinyin: 'mā', meaningEn: 'mother', meaningAr: 'أم', audioText: '妈' },
      { hanzi: '书', pinyin: 'shū', meaningEn: 'book', meaningAr: 'كتاب', audioText: '书' },
      { hanzi: '吃', pinyin: 'chī', meaningEn: 'to eat', meaningAr: 'يأكل', audioText: '吃' },
      { hanzi: '天', pinyin: 'tiān', meaningEn: 'sky / day', meaningAr: 'سماء / يوم', audioText: '天' },
    ],
    trapTipEn: 'Do not let your voice drop at the end of the 1st tone; keep it sustained and level!',
    trapTipAr: 'احذر أن ينخفض صوتك في نهاية النغمة الأولى؛ حافظ على استقامتها الصوتية حتى النهاية!',
  },
  {
    category: 'tones',
    symbol: 'ˊ (第二声)',
    pinyin: 'má',
    ipa: '[má] / [ma˧˥]',
    nameEn: '2nd Tone: Rising (35)',
    nameAr: 'النغمة الثانية: الصاعدة (35)',
    pitchContour: '35 (Mid to High Rise)',
    explanationEn: 'Rises from mid-pitch to high-pitch, similar to asking a question in English: "What?" or "Really?".',
    explanationAr: 'نغمة صاعدة تبدأ من الطبقة المتوسطة وترتفع إلى الطبقة العالية، تماماً مثل نبرة الاستفهام باللغة العربية: "نعم؟" أو "حقاً؟".',
    examples: [
      { hanzi: '麻', pinyin: 'má', meaningEn: 'hemp / numbness', meaningAr: 'نبات القنب / خدر', audioText: '麻' },
      { hanzi: '国', pinyin: 'guó', meaningEn: 'country / nation', meaningAr: 'دولة / بلد', audioText: '国' },
      { hanzi: '学', pinyin: 'xué', meaningEn: 'to study / learn', meaningAr: 'يتعلم / يدرس', audioText: '学' },
      { hanzi: '没', pinyin: 'méi', meaningEn: 'not / without', meaningAr: 'ليس / لم', audioText: '没' },
    ],
    trapTipEn: 'Start cleanly from middle pitch before gliding up to high pitch.',
    trapTipAr: 'تأكد من بدء النطق من طبقة متوسطة والارتفاع بسلاسة مثل صوت الاستغراب أو الاستفهام.',
  },
  {
    category: 'tones',
    symbol: 'ˇ (第三声)',
    pinyin: 'mǎ',
    ipa: '[mǎ] / [ma˨˩˦]',
    nameEn: '3rd Tone: Falling-Rising (214)',
    nameAr: 'النغمة الثالثة: الهابطة الصاعدة (214)',
    pitchContour: '214 (Dip to low, then rise)',
    explanationEn: 'Starts mid-low, dips deeply into the lowest throat register, and curves back up. In connected speech, it often behaves as a half-3rd tone (21).',
    explanationAr: 'نغمة تهبط من الطبقة المتوسطة إلى أعمق قرار في الحلق ثم تعود للصعود قليلاً. في الحديث السريع تُنطق كنغمة منخفضة فقط.',
    examples: [
      { hanzi: '马', pinyin: 'mǎ', meaningEn: 'horse', meaningAr: 'حصان', audioText: '马' },
      { hanzi: '好', pinyin: 'hǎo', meaningEn: 'good / well', meaningAr: 'جيد / بخير', audioText: '好' },
      { hanzi: '你', pinyin: 'nǐ', meaningEn: 'you', meaningAr: 'أنت', audioText: '你' },
      { hanzi: '买', pinyin: 'mǎi', meaningEn: 'to buy', meaningAr: 'يشتري', audioText: '买' },
    ],
    trapTipEn: 'The dip must reach the deepest part of your vocal range. Contrast mǎi (buy, 3rd) with mài (sell, 4th)!',
    trapTipAr: 'انتبه للفارق الحاسم بين mǎi (اشترى - نغمة 3) و mài (باع - نغمة 4)!',
  },
  {
    category: 'tones',
    symbol: 'ˋ (第四声)',
    pinyin: 'mà',
    ipa: '[mà] / [ma˥˩]',
    nameEn: '4th Tone: Falling (51)',
    nameAr: 'النغمة الرابعة: الهابطة الحازمة (51)',
    pitchContour: '51 (Sharp Top-to-Bottom Fall)',
    explanationEn: 'Sharp, decisive fall from high pitch down to the bottom. Sounds like giving a curt order: "Stop!" or "No!".',
    explanationAr: 'نغمة هابطة حادة وحازمة تهوي بسرعة من أعلى طبقة صوتية إلى أدناها، تشبه نبرة إعطاء أمر حازم: "قف!" أو "لا!".',
    examples: [
      { hanzi: '骂', pinyin: 'mà', meaningEn: 'to scold', meaningAr: 'يوبخ / يشتم', audioText: '骂' },
      { hanzi: '是', pinyin: 'shì', meaningEn: 'to be (am, is, are)', meaningAr: 'يكون (فعل الكينونة)', audioText: '是' },
      { hanzi: '看', pinyin: 'kàn', meaningEn: 'to look / read', meaningAr: 'ينظر / يقرأ', audioText: '看' },
      { hanzi: '大', pinyin: 'dà', meaningEn: 'big / large', meaningAr: 'كبير', audioText: '大' },
    ],
    trapTipEn: 'Do not soften the descent; the 4th tone is rapid, confident, and energetic.',
    trapTipAr: 'لا تتردد في نطق النغمة الرابعة؛ يجب أن تكون حازمة وسريعة دون تباطؤ.',
  },
  {
    category: 'sandhi',
    symbol: '3+3 ➔ 2+3',
    pinyin: 'nǐ + hǎo ➔ ní hǎo',
    ipa: '[ni˧˥ xau˨˩˦]',
    nameEn: 'Third Tone Sandhi (변조 / تغير النغمة الثالثة)',
    nameAr: 'تغير النغمة الثالثة عند التتابع (Tone Sandhi)',
    pitchContour: '2nd Tone + 3rd Tone',
    explanationEn: 'When two 3rd-tone syllables occur consecutively, the first changes to a 2nd tone in pronunciation, while written pinyin retains the 3rd tone marks.',
    explanationAr: 'عندما يتتابع مقطعان كلاهما نغمة ثالثة، تتحول النغمة الأولى تلقائياً في النطق إلى نغمة ثانية (صاعدة)، بينما يبقى الرمز الكتابي كما هو.',
    examples: [
      { hanzi: '你好', pinyin: 'nǐ hǎo (pronounced ní hǎo)', meaningEn: 'Hello (How are you?)', meaningAr: 'مرحباً / أهلاً بك', audioText: '你好' },
      { hanzi: '手表', pinyin: 'shǒu biǎo (pronounced shóu biǎo)', meaningEn: 'wristwatch', meaningAr: 'ساعة يد', audioText: '手表' },
      { hanzi: '可以', pinyin: 'kě yǐ (pronounced ké yǐ)', meaningEn: 'can / may', meaningAr: 'يمكن / يستطيع', audioText: '可以' },
      { hanzi: '水饺', pinyin: 'shuǐ jiǎo (pronounced shuí jiǎo)', meaningEn: 'boiled dumplings', meaningAr: 'فطائر ديم سم مغلية', audioText: '水饺' },
    ],
    trapTipEn: 'This is a mandatory rule in ministerial oral and listening tests!',
    trapTipAr: 'قاعدة أساسية في امتحانات الاستماع الوزارية: نطق nǐ hǎo كنغمتين ثالثتين يُعد خطأ صوتياً، الصحيح هو ní hǎo!',
  },
  {
    category: 'sandhi',
    symbol: '不 (bù) Sandhi',
    pinyin: 'bù + 4th ➔ bú + 4th',
    ipa: '[pu˧˥] + [˥˩]',
    nameEn: 'Tone Sandhi of Negation "不" (bù)',
    nameAr: 'تغير نغمة أداة النفي "不" أمام النغمة الرابعة',
    pitchContour: 'Changes from 4th to 2nd before 4th',
    explanationEn: '"不" is naturally 4th tone (bù). However, before another 4th tone syllable, it changes to 2nd tone (bú).',
    explanationAr: 'كلمة النفي "不" نغمتها الأصلية رابعة (bù). ولكن إذا جاء بعدها مقطع بنغمة رابعة، تنقلب نغمتها إلى ثانية صاعدة (bú).',
    examples: [
      { hanzi: '不是', pinyin: 'bú shì (not bù shì)', meaningEn: 'is not / are not', meaningAr: 'ليس / لا يكون', audioText: '不是' },
      { hanzi: '不去', pinyin: 'bú qù (not bù qù)', meaningEn: 'not going', meaningAr: 'لن يذهب', audioText: '不去' },
      { hanzi: '不要', pinyin: 'bú yào (not bù yào)', meaningEn: 'do not want', meaningAr: 'لا يريد', audioText: '不要' },
      { hanzi: '对不起', pinyin: 'duì bu qǐ', meaningEn: 'sorry / excuse me', meaningAr: 'عذراً / آسف', audioText: '对不起' },
    ],
    trapTipEn: 'Before 1st, 2nd, and 3rd tones, "不" stays 4th tone: bù chī, bù lái, bù hǎo.',
    trapTipAr: 'أمام النغمات الأولى والثانية والثالثة تبقى 不 بنغمتها الرابعة (bù chī, bù lái, bù hǎo)، وتتغير فقط أمام الرابعة!',
  },
];

// =========================================================================
// 2. CHINESE CHARACTERS & RADICALS DATA (Hanzi & Radicals 部首)
// =========================================================================
export const CHINESE_RADICALS_DATA: ChineseRadicalItem[] = [
  {
    radical: '亻 (人)',
    pinyin: 'rén',
    nameEn: 'Person / Human Radical (单人旁 dānrénpáng)',
    nameAr: 'جذر الإنسان / الشخص (亻)',
    originalMeaningEn: 'Related to people, human relationships, actions, or states.',
    originalMeaningAr: 'يدل على الإنسان، العلاقات الإنسانية، الأفعال أو الضمائر الشخصية.',
    strokeCount: 2,
    sampleCharacters: [
      { hanzi: '你', pinyin: 'nǐ', meaningEn: 'you (singular)', meaningAr: 'أنت / أنتِ', structure: 'Left-Right' },
      { hanzi: '他', pinyin: 'tā', meaningEn: 'he / him', meaningAr: 'هو', structure: 'Left-Right' },
      { hanzi: '们', pinyin: 'men', meaningEn: 'plural suffix for pronouns/people', meaningAr: 'علامة جمع الضمائر (نحن، أنتم، هم)', structure: 'Left-Right' },
      { hanzi: '休', pinyin: 'xiū', meaningEn: 'rest (person resting against a tree)', meaningAr: 'يستريح (شخص يستند إلى شجرة)', structure: 'Left-Right' },
    ],
  },
  {
    radical: '氵 (水)',
    pinyin: 'shuǐ',
    nameEn: 'Water Radical (三点水 sāndiǎnshuǐ)',
    nameAr: 'جذر الماء ذو الثلاث نقاط (氵)',
    originalMeaningEn: 'Related to water, liquids, rivers, washing, or oceanic states.',
    originalMeaningAr: 'يدل على الماء، السوائل، الأنهار، البحار، أو الأفعال المتعلقة بالترطيب والغسيل.',
    strokeCount: 3,
    sampleCharacters: [
      { hanzi: '汉', pinyin: 'hàn', meaningEn: 'Han Chinese / language (origin: Han river)', meaningAr: 'قومية الهان / اللغة الصينية (من نهر هان)', structure: 'Left-Right' },
      { hanzi: '海', pinyin: 'hǎi', meaningEn: 'sea / ocean', meaningAr: 'بحر / محيط', structure: 'Left-Right' },
      { hanzi: '洗', pinyin: 'xǐ', meaningEn: 'to wash', meaningAr: 'يغسل', structure: 'Left-Right' },
      { hanzi: '渴', pinyin: 'kě', meaningEn: 'thirsty', meaningAr: 'عطشان', structure: 'Left-Right' },
    ],
  },
  {
    radical: '木',
    pinyin: 'mù',
    nameEn: 'Wood / Tree Radical (木字旁 mùzìpáng)',
    nameAr: 'جذر الخشب والشجر (木)',
    originalMeaningEn: 'Related to trees, wood, plants, forest, and wooden structures.',
    originalMeaningAr: 'يدل على الأشجار، الأخشاب، النباتات، الغابات، والأدوات المصنوعة من الخشب.',
    strokeCount: 4,
    sampleCharacters: [
      { hanzi: '本', pinyin: 'běn', meaningEn: 'root / origin / measure word for books', meaningAr: 'أصل / جذر / أداة قياس الكتب', structure: 'Single' },
      { hanzi: '桌', pinyin: 'zhuō', meaningEn: 'table / desk', meaningAr: 'طاولة / مكتب', structure: 'Top-Bottom' },
      { hanzi: '李', pinyin: 'lǐ', meaningEn: 'plum / common Chinese surname Li', meaningAr: 'برقوق / اللقب الصيني الشهير (لي)', structure: 'Top-Bottom' },
      { hanzi: '林', pinyin: 'lín', meaningEn: 'woods / grove (two trees)', meaningAr: 'غابة صغيرة (شجرتان)', structure: 'Left-Right' },
    ],
  },
  {
    radical: '口',
    pinyin: 'kǒu',
    nameEn: 'Mouth Radical (口字旁 kǒuzìpáng)',
    nameAr: 'جذر الفم والحديث (口)',
    originalMeaningEn: 'Related to the mouth, eating, speaking, calling, or openings.',
    originalMeaningAr: 'يدل على الفم، الكلام، الأكل، الشرب، النداء، أو المداخل والفتحات.',
    strokeCount: 3,
    sampleCharacters: [
      { hanzi: '吃', pinyin: 'chī', meaningEn: 'to eat', meaningAr: 'يأكل', structure: 'Left-Right' },
      { hanzi: '喝', pinyin: 'hē', meaningEn: 'to drink', meaningAr: 'يشرب', structure: 'Left-Right' },
      { hanzi: '叫', pinyin: 'jiào', meaningEn: 'to be called / to call', meaningAr: 'يُدعى / يُسمى / ينادي', structure: 'Left-Right' },
      { hanzi: '问', pinyin: 'wèn', meaningEn: 'to ask (mouth inside door 门)', meaningAr: 'يسأل (فم يسأل داخل الباب)', structure: 'Enclosed' },
    ],
  },
  {
    radical: '讠 (言)',
    pinyin: 'yán',
    nameEn: 'Speech / Language Radical (言字旁 yánzìpáng)',
    nameAr: 'جذر القول واللغة والكلام (讠)',
    originalMeaningEn: 'Related to language, speaking, words, discussion, and translation.',
    originalMeaningAr: 'يدل على الكلمات، اللغات، المحادثة، القراءة، الشرح، والترجمة.',
    strokeCount: 2,
    sampleCharacters: [
      { hanzi: '语', pinyin: 'yǔ', meaningEn: 'spoken language (e.g. 汉语 Hànyǔ)', meaningAr: 'لغة منطوقة (مثل الصينية Hànyǔ)', structure: 'Left-Right' },
      { hanzi: '话', pinyin: 'huà', meaningEn: 'words / speech (e.g. 电话 phone)', meaningAr: 'كلام / حديث (مثل هاتف diànhuà)', structure: 'Left-Right' },
      { hanzi: '说', pinyin: 'shuō', meaningEn: 'to speak / to say', meaningAr: 'يتكلم / يقول', structure: 'Left-Right' },
      { hanzi: '谢', pinyin: 'xiè', meaningEn: 'to thank (e.g. 谢谢 xièxie)', meaningAr: 'يشكر (شكراً xièxie)', structure: 'Left-Middle-Right' },
    ],
  },
  {
    radical: '女',
    pinyin: 'nǚ',
    nameEn: 'Female / Woman Radical (女字旁 nǚzìpáng)',
    nameAr: 'جذر الأنثى والمرأة (女)',
    originalMeaningEn: 'Related to women, female family relatives, and traditional gender concepts.',
    originalMeaningAr: 'يدل على الإناث، صلات القرابة العائلية النسائية، ومفاهيم الجمال والهدوء.',
    strokeCount: 3,
    sampleCharacters: [
      { hanzi: '好', pinyin: 'hǎo', meaningEn: 'good (woman 女 + child 子 = harmony)', meaningAr: 'جيد / خير (امرأة + طفل = خير وبركة)', structure: 'Left-Right' },
      { hanzi: '妈', pinyin: 'mā', meaningEn: 'mother (woman 女 + horse 马 for sound)', meaningAr: 'أم (أنثى + حصان للصوت ma)', structure: 'Left-Right' },
      { hanzi: '她', pinyin: 'tā', meaningEn: 'she / her', meaningAr: 'هي', structure: 'Left-Right' },
      { hanzi: '姐', pinyin: 'jiě', meaningEn: 'older sister (姐姐)', meaningAr: 'الأخت الكبرى', structure: 'Left-Right' },
    ],
  },
];

// =========================================================================
// 3. CHINESE GRAMMAR PATTERNS & CLASSIFIERS (量词 & SVO)
// =========================================================================
export const CHINESE_GRAMMAR_DATA: ChineseGrammarPattern[] = [
  {
    id: 'svo_word_order',
    category: 'word_order',
    titleEn: 'Basic Chinese Word Order: Subject + Time/Place + Verb + Object',
    titleAr: 'ترتيب الجملة الصينية الأساسية: فاعل + زمان/مكان + فعل + مفعول',
    formula: 'Subject + [Time] + [Place] + [Adverb] + Verb + Object',
    explanationEn: 'Unlike English or Arabic where time/location can go at the end, in Mandarin temporal and locational adverbials MUST appear before the main verb.',
    explanationAr: 'على عكس اللغتين الإنجليزية والعربية حيث يمكن وضع الزمان أو المكان في نهاية الجملة، في اللغة الصينية يجب وضع ظرف الزمان والمكان قبل الفعل الرئيسي مباشرة.',
    rules: [
      {
        ruleEn: 'Time adverbials always precede the verb (Subject + Time + Verb + Object or Time + Subject + Verb + Object).',
        ruleAr: 'ظرف الزمان يأتي دائماً قبل الفعل: إما بعد الفاعل مباشرة أو في أول الجملة.',
        sampleSentence: {
          hanzi: '我明天去学校。',
          pinyin: 'Wǒ míngtiān qù xuéxiào.',
          meaningEn: 'I am going to school tomorrow. (Literally: I tomorrow go school)',
          meaningAr: 'أنا غداً أذهب إلى المدرسة.',
        },
      },
      {
        ruleEn: 'Place expressions with 在 (zài) precede the action verb: Subject + 在 (Place) + Verb.',
        ruleAr: 'شبه جملة المكان مع حرف الجر 在 تأتي قبل الفعل: فاعل + 在 + المكان + الفعل.',
        sampleSentence: {
          hanzi: '我们在教室学汉语。',
          pinyin: 'Wǒmen zài jiàoshì xué Hànyǔ.',
          meaningEn: 'We study Chinese in the classroom.',
          meaningAr: 'نحن ندرس الصينية في قاعة الدرس.',
        },
      },
    ],
    commonMistakeEn: 'Saying "Wǒ qù xuéxiào míngtiān" (Time at end) is a serious grammatical error in Mandarin!',
    commonMistakeAr: 'الخطأ الشائع الأكثر تكراراً: وضع الزمان في آخر الجملة مثل اللغات الغربية؛ في الصينية الزمان والمكان يسبقان الفعل دائماً!',
  },
  {
    id: 'measure_words',
    category: 'measure_words',
    titleEn: 'Chinese Measure Words / Classifiers (量词 liàngcí)',
    titleAr: 'أدوات القياس والتمييز في اللغة الصينية (量词)',
    formula: 'Number + Measure Word (量词) + Noun',
    explanationEn: 'In Chinese, a numeral cannot directly modify a noun. A classifier (measure word) corresponding to the noun\'s shape or type is required.',
    explanationAr: 'في اللغة الصينية، لا يرتبط الرقم بالاسم مباشرة قط، بل يلزم وجود "أداة قياس" (تمييز) تفصل بينهما بحسب طبيعة الشيء وشكله.',
    rules: [
      {
        ruleEn: '个 (gè): Universal classifier for people, general objects, apples, students.',
        ruleAr: '个 (gè): أداة القياس العامة الشائعة للأشخاص، الطلاب، التفاح، والأشياء العامة.',
        sampleSentence: {
          hanzi: '三个学生',
          pinyin: 'sān gè xuésheng',
          meaningEn: 'three students',
          meaningAr: 'ثلاثة طلاب',
        },
      },
      {
        ruleEn: '本 (běn): Classifier for bound volumes (books, dictionaries, notebooks).',
        ruleAr: '本 (běn): أداة القياس للكتب والمجلدات والكراريس المجلدة.',
        sampleSentence: {
          hanzi: '两本书',
          pinyin: 'liǎng běn shū',
          meaningEn: 'two books (note: 两 liǎng is used for 2 before measure words, not 二 èr!)',
          meaningAr: 'كتابان (انتبه: نستخدم 两 وليس 二 عند العد أمام أدوات القياس!)',
        },
      },
      {
        ruleEn: '张 (zhāng): Classifier for flat surfaces (paper, tickets, tables, photos).',
        ruleAr: '张 (zhāng): أداة القياس للأشياء المسطحة والرقيقة: أوراق، تذاكر، صور، طاولات.',
        sampleSentence: {
          hanzi: '一张桌子',
          pinyin: 'yì zhāng zhuōzi',
          meaningEn: 'one table / one desk',
          meaningAr: 'طاولة واحدة',
        },
      },
      {
        ruleEn: '位 (wèi): Polite / formal classifier for respected persons (teachers, doctors, guests).',
        ruleAr: '位 (wèi): أداة قياس مهذبة ورسمية للاحترام (معلمين، أطباء، ضيوف).',
        sampleSentence: {
          hanzi: '一位老师',
          pinyin: 'yí wèi lǎoshī',
          meaningEn: 'one teacher (polite)',
          meaningAr: 'أستاذ / معلم واحد (بصيغة التقدير)',
        },
      },
    ],
    commonMistakeEn: 'Saying "sān shū" instead of "sān běn shū" or using "èr" instead of "liǎng" for two items.',
    commonMistakeAr: 'قول sān shū بدون أداة القياس běn، أو استخدام الرقم èr بدلاً من liǎng عند التثنية!',
  },
  {
    id: 'question_particles',
    category: 'interrogatives',
    titleEn: 'Question Particles: 吗 (ma), 呢 (ne), 吧 (ba)',
    titleAr: 'أدوات الاستفهام والطلب: 吗 و 呢 و 吧',
    formula: 'Statement + 吗 / 呢 / 吧 ?',
    explanationEn: 'Mandarin does not invert subject and auxiliary verbs to form questions. Instead, interrogative particles are placed at the sentence end.',
    explanationAr: 'لا تستخدم الصينية قلب الفعل والفاعل لتكوين السؤال، بل تُضاف أداة استفهام في نهاية الجملة الإخبارية كما هي دون تغيير ترتيب الكلمات.',
    rules: [
      {
        ruleEn: '吗 (ma): Turns any statement into a yes/no question without altering word order.',
        ruleAr: '吗 (ma): تحول الجملة الإخبارية إلى سؤال إجابته نعم أو لا (هل...؟).',
        sampleSentence: {
          hanzi: '你是埃及人吗？',
          pinyin: 'Nǐ shì Āijírén ma?',
          meaningEn: 'Are you Egyptian? (Literally: You are Egyptian [yes/no]?)',
          meaningAr: 'هل أنت مصري؟',
        },
      },
      {
        ruleEn: '呢 (ne): Follow-up or bounce-back question ("and you?", "what about...?").',
        ruleAr: '呢 (ne): سؤال المتابعة التلقائي ("وماذا عنك؟" / "وأنت؟").',
        sampleSentence: {
          hanzi: '我很好，你呢？',
          pinyin: 'Wǒ hěn hǎo, nǐ ne?',
          meaningEn: 'I am fine, and you?',
          meaningAr: 'أنا بخير، وأنت؟',
        },
      },
      {
        ruleEn: '吧 (ba): Suggestion, solicitation of agreement, or tag question ("let\'s...", "right?").',
        ruleAr: '吧 (ba): أداة الاقتراح والطلب الودي ("هيا بنا..." / "أليس كذلك؟").',
        sampleSentence: {
          hanzi: '我们走吧！',
          pinyin: 'Wǒmen zǒu ba!',
          meaningEn: 'Let\'s go!',
          meaningAr: 'هيا بنا ننطلق!',
        },
      },
    ],
    commonMistakeEn: 'Never use 吗 (ma) in a question that already contains an interrogative pronoun (shénme, shéi, etc.)!',
    commonMistakeAr: 'فخ امتحاني خطير: لا تضع 吗 أبداً في جملة تحتوي بالفعل على اسم استفهام مثل shénme أو shéi!',
  },
];

// =========================================================================
// 4. COMMUNICATIVE SITUATIONS DATA (Thanaweya Ministry Exam Dialogues)
// =========================================================================
export const CHINESE_SITUATIONS_DATA: ChineseSituationScenario[] = [
  {
    id: 'situation_1_greeting',
    situationTitleAr: 'موقف 1: التحية والتعارف الأول في بداية العام الدراسي',
    situationTitleEn: 'Situation 1: Greetings & Introducing Oneself at School',
    promptAr: 'التقيت بطالب صيني جديد في مدرستك وتريد الترحيب به وسؤاله عن اسمه وبلده:',
    promptEn: 'You meet a new exchange student from Beijing and want to welcome them and ask their name:',
    dialogueContext: {
      speakerA: 'الطالب المصري (Ahmed)',
      speakerB: 'الطالب الصيني (Li Ming)',
      lineAHanzi: '你好！欢迎来到开罗。请问，你叫什么名字？',
      lineAPinyin: 'Nǐ hǎo! Huānyíng lái dào Kāiluó. Qǐngwèn, nǐ jiào shénme míngzi?',
      lineAAr: 'مرحباً! أهلاً بك في القاهرة. لو سمحت، ما اسمك؟',
    },
    options: [
      {
        textHanzi: '我叫李明，我是中国人。认识你很高兴！',
        textPinyin: 'Wǒ jiào Lǐ Míng, wǒ shì Zhōngguórén. Rènshi nǐ hěn gāoxìng!',
        textAr: 'اسمي لي مينغ، وأنا صيني. سررت بلقائك جداً!',
        textEn: 'My name is Li Ming, I am Chinese. Very pleased to meet you!',
        isCorrect: true,
        explanationAr: 'الإجابة النموذجية المعتمدة رسمياً في مناهج الثانوية العامة للتعريف بالاسم والجنسية والترحيب.',
      },
      {
        textHanzi: '对不起，我不知道。',
        textPinyin: 'Duìbuqǐ, wǒ bù zhīdào.',
        textAr: 'عذراً، أنا لا أعرف.',
        textEn: 'Sorry, I don\'t know.',
        isCorrect: false,
        explanationAr: 'إجابة غير ملائمة لسؤال شخص عن اسمه.',
      },
      {
        textHanzi: '现在差五分十点。',
        textPinyin: 'Xiànzài chà wǔ fēn shí diǎn.',
        textAr: 'الساعة الآن العاشرة إلا خمس دقائق.',
        textEn: 'It is now five to ten.',
        isCorrect: false,
        explanationAr: 'هذا رد على سؤال التوقيت وليس الاسم.',
      },
      {
        textHanzi: '太贵了，便宜一点儿吧！',
        textPinyin: 'Tài guì le, piányi yìdiǎnr ba!',
        textAr: 'هذا باهظ جداً، خفض السعر قليلاً!',
        textEn: 'Too expensive, cheaper please!',
        isCorrect: false,
        explanationAr: 'هذه عبارة فصال ومساومة في السوق.',
      },
    ],
  },
  {
    id: 'situation_2_shopping',
    situationTitleAr: 'موقف 2: شراء الأدوات المدرسية والاستفسار عن السعر',
    situationTitleEn: 'Situation 2: Buying Stationery & Asking Prices',
    promptAr: 'أنت في مكتبة وتود الاستفسار عن سعر القاموس الصيني:',
    promptEn: 'You are at a bookstore in Cairo and want to inquire about the price of a Chinese dictionary:',
    dialogueContext: {
      speakerA: 'المشتري (الطالب)',
      speakerB: 'البائع (Shopkeeper)',
      lineAHanzi: '请问，这本汉语词典多少钱？',
      lineAPinyin: 'Qǐngwèn, zhè běn Hànyǔ cídiǎn duōshao qián?',
      lineAAr: 'لو سمحت، كم سعر هذا القاموس الصيني؟',
    },
    options: [
      {
        textHanzi: '八十块钱。',
        textPinyin: 'Bāshí kuài qián.',
        textAr: 'ثمانون جنيهاً / إيواناً.',
        textEn: '80 Yuan / pounds.',
        isCorrect: true,
        explanationAr: 'الرد المباشر والدقيق باستخدام وحدة النقد الشائعة kuài.',
      },
      {
        textHanzi: '我不喜欢吃面条。',
        textPinyin: 'Wǒ bù xǐhuan chī miàntiáo.',
        textAr: 'أنا لا أحب أكل المعكرونة.',
        textEn: 'I don\'t like eating noodles.',
        isCorrect: false,
        explanationAr: 'حديث عن الطعام لا صلة له بأسعار الكتب.',
      },
      {
        textHanzi: '他在图书馆看书。',
        textPinyin: 'Tā zài túshūguǎn kàn shū.',
        textAr: 'هو يقرأ في المكتبة العامة.',
        textEn: 'He is reading in the library.',
        isCorrect: false,
        explanationAr: 'بيان لمكان تواجد شخص.',
      },
      {
        textHanzi: '明天天气很好。',
        textPinyin: 'Míngtiān tiānqì hěn hǎo.',
        textAr: 'الطقس غداً سيكون جيداً جداً.',
        textEn: 'Tomorrow\'s weather is very good.',
        isCorrect: false,
        explanationAr: 'تحدث عن الطقس وليس السعر.',
      },
    ],
  },
  {
    id: 'situation_3_restaurant',
    situationTitleAr: 'موقف 3: طلب الطعام في مطعم واستخدام العبارات المهذبة',
    situationTitleEn: 'Situation 3: Ordering in a Chinese Restaurant',
    promptAr: 'يسألك النادل في مطعم صيني عن رغبتك في تناول الطعام:',
    promptEn: 'The waiter asks what you would like to eat in a Chinese restaurant:',
    dialogueContext: {
      speakerA: 'النادل (服务员 Fúwùyuán)',
      speakerB: 'الزبون (Customer)',
      lineAHanzi: '先生，您想吃点儿什么？',
      lineAPinyin: 'Xiānsheng, nín xiǎng chī diǎnr shénme?',
      lineAAr: 'سيدي، ماذا تحب أن تأكل؟',
    },
    options: [
      {
        textHanzi: '我想吃一盘北京烤鸭和米饭，再来一杯绿茶。',
        textPinyin: 'Wǒ xiǎng chī yì pán Běijīng kǎoyā hé mǐfàn, zài lái yì bēi lǜchá.',
        textAr: 'أريد طبق بط بكين المشوي مع الأرز، وكوباً من الشاي الأخضر.',
        textEn: 'I would like a plate of Peking duck and rice, and a cup of green tea.',
        isCorrect: true,
        explanationAr: 'الطلب الصيني الفصيح باستخدام أدوات القياس pán (طبق) و bēi (كوب) وأفعال الرغبة xiǎng.',
      },
      {
        textHanzi: '往前走，到了十字路口向右拐。',
        textPinyin: 'Wǎng qián zǒu, dào le shízì lùkǒu xiàng yòu guǎi.',
        textAr: 'امشِ للأمام، وعند تقاطع الطرق اتجه يميناً.',
        textEn: 'Walk straight, turn right at the intersection.',
        isCorrect: false,
        explanationAr: 'هذا وصف لخط سير واتجاهات في الشارع.',
      },
      {
        textHanzi: '今天星期五，我们不上课。',
        textPinyin: 'Jīntiān xīngqīwǔ, wǒmen bú shàngkè.',
        textAr: 'اليوم الجمعة، ليس لدينا حصص دراسية.',
        textEn: 'Today is Friday, we don\'t have class.',
        isCorrect: false,
        explanationAr: 'تحدث عن أيام الأسبوع والدراسة.',
      },
      {
        textHanzi: '医生说我要按时吃药。',
        textPinyin: 'Yīshēng shuō wǒ yào ànshí chī yào.',
        textAr: 'الطبيب قال لي أن أتناول الدواء في موعده.',
        textEn: 'The doctor said I must take medicine on time.',
        isCorrect: false,
        explanationAr: 'سياق طبي لا يناسب طلب الطعام في المطعم.',
      },
    ],
  },
];

// =========================================================================
// 5. CHINESE LISTENING EXAM CENTER (Official Audio Tracks & Scripts)
// =========================================================================
export const CHINESE_LISTENING_TRACKS: ChineseListeningTrack[] = [
  {
    id: 'track_1_school_life',
    titleEn: 'Track 1: School Life & Daily Routine in Cairo',
    titleAr: 'المقطع الأول: اليوم الدراسي والروتين الصباحي في القاهرة',
    level: 'HSK 1',
    topic: 'School Routine & Schedule',
    audioScriptHanzi:
      '我叫大卫，我是开罗一所高中的高三学生。我每天早上六点半起床，七点吃早饭，七点半坐校车去学校。我们在学校学习阿拉伯语、英语、数学和汉语。我很喜欢汉语老师李老师，她教得很好。下午两点我们放学回家。',
    audioScriptPinyin:
      'Wǒ jiào Dàwèi, wǒ shì Kāiluó yì suǒ gāozhōng de gāosān xuésheng. Wǒ měitiān zǎoshang liù diǎn bàn qǐchuáng, qī diǎn chī zǎofàn, qī diǎn bàn zuò xiàochē qù xuéxiào. Wǒmen zài xuéxiào xuéxí Ālābóyǔ, Yīngyǔ, Shùxué hé Hànyǔ. Wǒ hěn xǐhuan Hànyǔ lǎoshī Lǐ lǎoshī, tā jiāo de hěn hǎo. Xiàwǔ liǎng diǎn wǒmen fàngxué huí jiā.',
    translationEn:
      'My name is David. I am a Grade 12 student at a secondary school in Cairo. Every day I wake up at 6:30 AM, have breakfast at 7:00, and take the school bus at 7:30. At school we study Arabic, English, Mathematics, and Chinese. I really like our Chinese teacher, Ms. Li; she teaches very well. At 2:00 PM, school ends and we go home.',
    translationAr:
      'اسمي ديفيد، وأنا طالب بالصف الثالث الثانوي في القاهرة. أستيقظ كل يوم الساعة 6:30 صباحاً، وأتناول إفطاري الساعة 7:00، وأركب حافلة المدرسة الساعة 7:30. ندرس في المدرسة اللغة العربية والإنجليزية والرياضيات والصينية. أحب معلمة اللغة الصينية الأستاذة لي كثيراً، فهي تدرس ببراعة. ينتهي اليوم الدراسي في الثانية ظهراً ونعود للمنزل.',
    questions: [
      {
        questionHanzi: '大卫每天早上几点吃早饭？',
        questionPinyin: 'Dàwèi měitiān zǎoshang jǐ diǎn chī zǎofàn?',
        questionAr: 'في أي ساعة يتناول ديفيد إفطاره كل صباح؟',
        questionEn: 'What time does David eat breakfast every morning?',
        options: [
          { textHanzi: '六点半', textPinyin: 'liù diǎn bàn', textAr: 'السادسة والنصف', textEn: '6:30 AM' },
          { textHanzi: '七点', textPinyin: 'qī diǎn', textAr: 'السابعة تماماً', textEn: '7:00 AM' },
          { textHanzi: '七点半', textPinyin: 'qī diǎn bàn', textAr: 'السابعة والنصف', textEn: '7:30 AM' },
          { textHanzi: '八点', textPinyin: 'bā diǎn', textAr: 'الثامنة تماماً', textEn: '8:00 AM' },
        ],
        correctIndex: 1,
        explanationAr: 'ذكر النص صراحة: "七点吃早饭" أي يتناول الإفطار في السابعة تماماً.',
        explanationEn: 'The audio script explicitly states: "qī diǎn chī zǎofàn" (7:00 AM).',
      },
      {
        questionHanzi: '大卫怎么去学校？',
        questionPinyin: 'Dàwèi zěnme qù xuéxiào?',
        questionAr: 'كيف يذهب ديفيد إلى مدرسته؟',
        questionEn: 'How does David commute to school?',
        options: [
          { textHanzi: '走路', textPinyin: 'zǒulù', textAr: 'سيراً على الأقدام', textEn: 'Walking' },
          { textHanzi: '坐地铁', textPinyin: 'zuò dìtiě', textAr: 'بمترو الأنفاق', textEn: 'By subway' },
          { textHanzi: '坐校车', textPinyin: 'zuò xiàochē', textAr: 'بحافلة المدرسة', textEn: 'By school bus' },
          { textHanzi: '开汽车', textPinyin: 'kāi qìchē', textAr: 'بقيادة السيارة', textEn: 'By car' },
        ],
        correctIndex: 2,
        explanationAr: 'ورد في النص: "七点半坐校车去学校" أي يركب حافلة المدرسة.',
        explanationEn: 'The text states "zuò xiàochē qù xuéxiào" (takes the school bus).',
      },
    ],
  },
  {
    id: 'track_2_hobbies_weekend',
    titleEn: 'Track 2: Weekend Hobbies & Sports',
    titleAr: 'المقطع الثاني: هوايات عطلة نهاية الأسبوع والرياضة',
    level: 'HSK 2',
    topic: 'Sports, Hobbies & Weather',
    audioScriptHanzi:
      '这个周末北京的天气非常好，晴天，微风。王明和他的朋友们打算去奥林匹克公园踢足球。他们一共八个人，分成了两队。他们踢了两个小时，大家都觉得虽然有点儿累，但是特别开心。运动完以后，他们一起去吃了北京炸酱面。',
    audioScriptPinyin:
      'Zhè ge zhōumò Běijīng de tiānqì hěn hǎor, qíngtiān, wēifēng. Wáng Míng hé tā de péngyoumen dǎsuàn qù Àolínpǐkè gōngyuán tī zúqiú. Tāmen yígòng bā gè rén, fēn chéng le liǎng duì. Tāmen tī le liǎng gè xiǎoshí, dàjiā dōu juéde suīrán yǒudiǎnr lèi, dànshì tèbié kāixīn. Yùndòng wán yǐhòu, tāmen yìqǐ qù chī le Běijīng zhájiàngmiàn.',
    translationEn:
      'This weekend the weather in Beijing is very good—sunny with a gentle breeze. Wang Ming and his friends plan to go to the Olympic Park to play football. There are eight of them in total, divided into two teams. They played for two hours. Everyone felt that although a little tired, they were extremely happy. After exercising, they ate Beijing soybean paste noodles together.',
    translationAr:
      'الطقس في بكين نهاية هذا الأسبوع جميل جداً، مشمس مع نسيم عليل. خطط وانغ مينغ وأصدقاؤه للذهاب إلى الحديقة الأولمبية للعب كرة القدم. عددهم إجمالاً 8 أفراد، وقُسموا إلى فريقين. لعبوا لمدة ساعتين، وشعر الجميع أنه رغم التعب البسيط، كانوا في غاية السعادة. وبعد الانتهاء من ممارسة الرياضة، ذهبوا معاً لتناول المعكرونة التقليدية الخاصة ببكين.',
    questions: [
      {
        questionHanzi: '王明和朋友们在公园做了什么运动？',
        questionPinyin: 'Wáng Míng hé péngyoumen zài gōngyuán zuò le shénme yùndòng?',
        questionAr: 'ما الرياضة التي مارسها وانغ مينغ وأصدقاؤه في الحديقة؟',
        questionEn: 'What sport did Wang Ming and his friends play in the park?',
        options: [
          { textHanzi: '打篮球', textPinyin: 'dǎ lánqiú', textAr: 'كرة السلة', textEn: 'Basketball' },
          { textHanzi: '踢足球', textPinyin: 'tī zúqiú', textAr: 'كرة القدم', textEn: 'Football / Soccer' },
          { textHanzi: '游泳', textPinyin: 'yóuyǒng', textAr: 'السباحة', textEn: 'Swimming' },
          { textHanzi: '打乒乓球', textPinyin: 'dǎ pīngpāngqiú', textAr: 'تنس الطاولة', textEn: 'Table tennis' },
        ],
        correctIndex: 1,
        explanationAr: 'ورد في النص صراحة: "去奥林匹克公园踢足球" أي لعب كرة القدم.',
        explanationEn: 'The audio mentions "tī zúqiú" (playing football).',
      },
    ],
  },
];
