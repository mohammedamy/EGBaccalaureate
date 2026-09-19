/**
 * Spanish Audio, Grammar & Listening Studio Data Bank
 * Aligned with Egyptian Ministry of Education Secondary 3 Syllabus (¡Hola! / ¡Español!)
 * and New Egyptian Baccalaureate (EG-Bac) B1/B2 Curriculum.
 */

export interface SpanishPhoneticRule {
  symbol: string;
  ipa: string;
  nameEn: string;
  nameAr: string;
  ruleExplanationEs: string;
  ruleExplanationEn: string;
  ruleExplanationAr: string;
  exemplarWords: { word: string; translationEn: string; translationAr: string; phonetic: string }[];
  trapWarningEn: string;
  trapWarningAr: string;
}

export interface SpanishVerbTenseRule {
  id: 'presente' | 'perfecto' | 'indefinido' | 'imperfecto' | 'futuro' | 'condicional' | 'subjuntivo' | 'imperativo';
  titleEs: string;
  titleEn: string;
  titleAr: string;
  functionEn: string;
  functionAr: string;
  regularEndings: {
    ar: { yo: string; tu: string; elElla: string; nosotros: string; vosotros: string; ellos: string };
    er: { yo: string; tu: string; elElla: string; nosotros: string; vosotros: string; ellos: string };
    ir: { yo: string; tu: string; elElla: string; nosotros: string; vosotros: string; ellos: string };
  };
  irregularVerbs: {
    verb: string;
    conjugations: { yo: string; tu: string; elElla: string; nosotros: string; vosotros: string; ellos: string };
    noteAr: string;
  }[];
  examples: { sentenceEs: string; translationEn: string; translationAr: string; highlight: string }[];
}

export interface SpanishPronounRule {
  category: 'directo' | 'indirecto' | 'combinados' | 'gustar';
  titleEs: string;
  titleEn: string;
  titleAr: string;
  ruleExplanationEs: string;
  ruleExplanationEn: string;
  ruleExplanationAr: string;
  pronounTable: { person: string; direct: string; indirect: string; tonic: string }[];
  examples: { es: string; en: string; ar: string; note: string }[];
}

export interface SpanishContrastRule {
  contrastId: 'ser_estar' | 'por_para';
  titleEs: string;
  titleEn: string;
  titleAr: string;
  itemA: {
    name: string;
    rules: { useEn: string; useAr: string; exampleEs: string; translationAr: string }[];
  };
  itemB: {
    name: string;
    rules: { useEn: string; useAr: string; exampleEs: string; translationAr: string }[];
  };
  specialTrapPairs?: {
    expressionEs: string;
    meaningWithA: string;
    meaningWithB: string;
    explanationAr: string;
  }[];
}

export interface SpanishSituationScenario {
  id: string;
  unidadTitle: string;
  situationPromptEs: string;
  situationPromptAr: string;
  situationPromptEn: string;
  correctResponseEs: string;
  correctResponseAr: string;
  trapDistractorEs: string;
  trapExplanationAr: string;
}

export const SPANISH_PHONETICS_DATA: SpanishPhoneticRule[] = [
  {
    symbol: 'C / Z',
    ipa: '[θ] o [s] / [k]',
    nameEn: 'C and Z Pronunciation (Distinción vs. Seseo)',
    nameAr: 'نطق حرفي C و Z (التمييز اللساني بين الثاء والسين)',
    ruleExplanationEs: 'La Z siempre suena /θ/ ante cualquier vocal (zapato, zumo). La C suena /θ/ ante E, I (cena, cielo) y suena /k/ ante A, O, U (casa, cosa, cuna). En Hispanoamérica predomina el seseo (/s/).',
    ruleExplanationEn: 'Z is always pronounced /θ/ (or /s/ in Latin America). C sounds /θ/ before E and I, but /k/ before A, O, and U.',
    ruleExplanationAr: 'حرف Z ينطق دائماً كالثاء اللثوية /θ/ (أو سين في أمريكا اللاتينية). حرف C ينطق كالثاء أمام e و i، ولكنه ينطق كالكاف /k/ أمام a و o و u.',
    exemplarWords: [
      { word: 'zapato', translationEn: 'shoe', translationAr: 'حذاء', phonetic: '[θaˈpa.to]' },
      { word: 'cena', translationEn: 'dinner', translationAr: 'عشاء', phonetic: '[ˈθe.na]' },
      { word: 'cielo', translationEn: 'sky / heaven', translationAr: 'سماء', phonetic: '[ˈθje.lo]' },
      { word: 'casa', translationEn: 'house', translationAr: 'منزل', phonetic: '[ˈka.sa]' },
      { word: 'corazón', translationEn: 'heart', translationAr: 'قلب', phonetic: '[ko.ɾaˈθon]' }
    ],
    trapWarningEn: 'Do not pronounce "cena" as "sena" in standard Castilian or "casa" as "sasa".',
    trapWarningAr: 'انتبه: لا تنطق C كالكاف أمام e أو i، ولا تنطقها كثاء أمام a أو o أو u.'
  },
  {
    symbol: 'G / J',
    ipa: '[x] / [g]',
    nameEn: 'G and J Rules (Soft vs. Velar Fricative)',
    nameAr: 'قواعد نطق G و J (صوت الخاء المفخم وصوت الجيم القاهرية)',
    ruleExplanationEs: 'La J siempre suena /x/ fuerte como la jota (jamón, joven). La G suena /x/ ante E, I (gente, girar) y suena /g/ ante A, O, U (gato, gota). Con U intermedia (guerra, guitarra) la U no suena.',
    ruleExplanationEn: 'J is always a strong velar /x/ (like Arabic خ). G has the /x/ sound before E and I, but hard /g/ before A, O, and U. In "gue/gui", the U is silent unless it bears a diaeresis (güe/güi).',
    ruleExplanationAr: 'حرف J ينطق دائماً كالخاء المفخمة /x/. حرف G ينطق كالخاء أمام e و i (gente, girar)، بينما ينطق كالجيم غير المعطشة /g/ أمام a و o و u (gato, gota). ومع التركيب gue و gui تكون الـ u صامتة إلا إذا حملت نقطتين (النبرة gü).',
    exemplarWords: [
      { word: 'gente', translationEn: 'people', translationAr: 'ناس / أشخاص', phonetic: '[ˈxen.te]' },
      { word: 'jamón', translationEn: 'ham', translationAr: 'لحم مقدد', phonetic: '[xaˈmon]' },
      { word: 'gato', translationEn: 'cat', translationAr: 'قط', phonetic: '[ˈga.to]' },
      { word: 'guitarra', translationEn: 'guitar', translationAr: 'جيتار', phonetic: '[giˈta.ra]' },
      { word: 'bilingüe', translationEn: 'bilingual', translationAr: 'مزدوج اللغة', phonetic: '[biˈliŋ.gwe]' }
    ],
    trapWarningEn: 'In "guitarra" and "guerra", never pronounce the "u". Only pronounce it with diaeresis: "pingüino".',
    trapWarningAr: 'في كلمتي guitarra و guerra لا تنطق حرف u إطلاقاً؛ تنطق فقط عند وجود النقطتين ككلمة pingüino.'
  },
  {
    symbol: 'LL / Y',
    ipa: '[ʎ] / [ʝ]',
    nameEn: 'LL and Y (Doble Ele & Yeísmo)',
    nameAr: 'حرفا LL و Y (ظاهرة الييسمو واللام الحنكية)',
    ruleExplanationEs: 'La doble ele (LL) históricamente era un sonido palatal /ʎ/, pero hoy en la inmensa mayoría del mundo hispano se pronuncia como /ʝ/ (yeísmo), idéntico a la Y consonántica (calle, pollo, playa).',
    ruleExplanationEn: 'The digraph "ll" is pronounced like the English "y" in "yes" across almost all modern Spanish dialects (yeísmo), just like consonantal "y".',
    ruleExplanationAr: 'ينطق الحرف المزدوج LL كصوت الياء المشبعة تماماً كحرف Y الساكن في معظم أرجاء العالم الناطق بالإسبانية (calle, pollo, playa).',
    exemplarWords: [
      { word: 'calle', translationEn: 'street', translationAr: 'شارع', phonetic: '[ˈka.ʝe]' },
      { word: 'llave', translationEn: 'key', translationAr: 'مفتاح', phonetic: '[ˈʝa.βe]' },
      { word: 'playa', translationEn: 'beach', translationAr: 'شاطئ', phonetic: '[ˈpla.ʝa]' },
      { word: 'desayuno', translationEn: 'breakfast', translationAr: 'فطور', phonetic: '[de.saˈʝu.no]' }
    ],
    trapWarningEn: 'Do not pronounce "ll" as two separate "l" sounds.',
    trapWarningAr: 'لا تنطق LL كصوت لامين منفصلين، بل تعامل كياء حنكية واحدة.'
  },
  {
    symbol: 'Ñ',
    ipa: '[ɲ]',
    nameEn: 'Letter Eñe (Palatal Nasal)',
    nameAr: 'حرف النون الحنكية المعقوفة (Eñe)',
    ruleExplanationEs: 'La Ñ es el símbolo más distintivo del idioma español. Representa una consonante nasal palatal semejante a "ni" en "opinión" o "gn" en italiano/francés.',
    ruleExplanationEn: 'The letter Ñ represents a voiced palatal nasal, sounding like "ny" in "canyon" or "onion".',
    ruleExplanationAr: 'حرف Ñ هو العلامة المميزة للغة الإسبانية؛ يمثل نوناً حنكية مشبعة تشبه صوت "ني" في كلمة "أنيق" أو gn في الفرنسية والإيطالية.',
    exemplarWords: [
      { word: 'España', translationEn: 'Spain', translationAr: 'إسبانيا', phonetic: '[esˈpa.ɲa]' },
      { word: 'año', translationEn: 'year', translationAr: 'سنة / عام', phonetic: '[ˈa.ɲo]' },
      { word: 'niño', translationEn: 'boy / child', translationAr: 'طفل', phonetic: '[ˈni.ɲo]' },
      { word: 'mañana', translationEn: 'morning / tomorrow', translationAr: 'صباح / غداً', phonetic: '[maˈɲa.na]' }
    ],
    trapWarningEn: 'Confusing "ano" (anus) with "año" (year) is a notorious linguistic false friend in Spanish.',
    trapWarningAr: 'احذر: عدم كتابة النبرة المتموجة (virgulilla) يحول كلمة año (عام) إلى كلمة ano ذات المعنى التشريحي غير اللائق.'
  },
  {
    symbol: 'R / RR',
    ipa: '[ɾ] / [r]',
    nameEn: 'Single R vs. Multiple Vibrant RR',
    nameAr: 'الراء المرققة (R) مقابل الراء التكرارية المفخمة (RR)',
    ruleExplanationEs: 'La R simple entre vocales es vibrante simple /ɾ/ (pero, caro). La RR y la R a principio de palabra o tras L, N, S es vibrante múltiple /r/ (perro, carro, Roma, alrededor).',
    ruleExplanationEn: 'Single R between vowels is a tap [ɾ]. Double RR, word-initial R, and R following L, N, or S is a trill [r].',
    ruleExplanationAr: 'تنطق R الفردية بين حرفي علة كراء خفيفة مقطوعة [ɾ] (pero). بينما تنطق RR المزدوجة أو R في أول الكلمة أو بعد L و N و S كراء تكرارية مفخمة [r] (perro, Roma).',
    exemplarWords: [
      { word: 'pero', translationEn: 'but', translationAr: 'لكن', phonetic: '[ˈpe.ɾo]' },
      { word: 'perro', translationEn: 'dog', translationAr: 'كلب', phonetic: '[ˈpe.ro]' },
      { word: 'caro', translationEn: 'expensive', translationAr: 'غالٍ / باهظ', phonetic: '[ˈka.ɾo]' },
      { word: 'carro', translationEn: 'car', translationAr: 'سيارة', phonetic: '[ˈka.ro]' },
      { word: 'Roma', translationEn: 'Rome', translationAr: 'روما', phonetic: '[ˈro.ma]' }
    ],
    trapWarningEn: 'Notice the vital meaning shift: "pero" (but) vs "perro" (dog), "caro" (costly) vs "carro" (automobile).',
    trapWarningAr: 'فارق دقيق يغير المعنى تماماً: pero (لكن) تختلف كلياً عن perro (كلب).'
  },
  {
    symbol: 'H',
    ipa: 'Ø (Muda)',
    nameEn: 'Silent H (Hache Muda)',
    nameAr: 'حرف H الصامت (Hache Muda)',
    ruleExplanationEs: 'La letra H en español es completamente muda en todas las posiciones ortográficas. Nunca se pronuncia salvo en el dígrafo CH.',
    ruleExplanationEn: 'The letter H in modern Spanish is entirely silent, acting solely as an etymological orthographic marker.',
    ruleExplanationAr: 'حرف H في اللغة الإسبانية صامت تماماً في جميع المواضع ولا يصدر أي صوت هوائي على الإطلاق، إلا عند اقترانه بحرف C ليكون صوت التش (CH).',
    exemplarWords: [
      { word: 'hola', translationEn: 'hello', translationAr: 'مرحباً', phonetic: '[ˈo.la]' },
      { word: 'hotel', translationEn: 'hotel', translationAr: 'فندق', phonetic: '[oˈtel]' },
      { word: 'hacer', translationEn: 'to do / make', translationAr: 'يفعل / يصنع', phonetic: '[aˈθeɾ]' },
      { word: 'hombre', translationEn: 'man', translationAr: 'رجل', phonetic: '[ˈom.bɾe]' }
    ],
    trapWarningEn: 'Never aspirate the H like English "hat" or German "haben". "Hola" is pronounced exactly as "ola".',
    trapWarningAr: 'لا تنطق الهاء أبداً في الإسبانية؛ كلمة hola تنطق "أولا" تماماً مثل كلمة ola.'
  }
];

export const SPANISH_VERB_TENSES_DATA: SpanishVerbTenseRule[] = [
  {
    id: 'presente',
    titleEs: 'Presente de Indicativo',
    titleEn: 'Present Indicative Tense',
    titleAr: 'المضارع البسيط (Presente de Indicativo)',
    functionEn: 'Expresses habitual actions, current states, general truths, and near-future scheduled events.',
    functionAr: 'يعبر عن العادات اليومية، الحقائق العامة، والأحداث الواقعة في الحاضر أو المستقبل القريب.',
    regularEndings: {
      ar: { yo: '-o', tu: '-as', elElla: '-a', nosotros: '-amos', vosotros: '-áis', ellos: '-an' },
      er: { yo: '-o', tu: '-es', elElla: '-e', nosotros: '-emos', vosotros: '-éis', ellos: '-en' },
      ir: { yo: '-o', tu: '-es', elElla: '-e', nosotros: '-emos', vosotros: '-ís', ellos: '-en' }
    },
    irregularVerbs: [
      {
        verb: 'ser',
        conjugations: { yo: 'soy', tu: 'eres', elElla: 'es', nosotros: 'somos', vosotros: 'sois', ellos: 'son' },
        noteAr: 'فعل كينونة غير منتظم بالكامل يدل على الهوية والصفات الثابتة.'
      },
      {
        verb: 'estar',
        conjugations: { yo: 'estoy', tu: 'estás', elElla: 'está', nosotros: 'estamos', vosotros: 'estáis', ellos: 'están' },
        noteAr: 'فعل كينونة للحالات المؤقتة والموقع الجغرافي، يحمل نبرات على جميع الضمائر عدا yo و nosotros.'
      },
      {
        verb: 'ir',
        conjugations: { yo: 'voy', tu: 'vas', elElla: 'va', nosotros: 'vamos', vosotros: 'vais', ellos: 'van' },
        noteAr: 'فعل الذهاب الشاذ؛ يستخدم في صيغة المستقبل القريب (ir a + المصدر).'
      },
      {
        verb: 'tener',
        conjugations: { yo: 'tengo', tu: 'tienes', elElla: 'tiene', nosotros: 'tenemos', vosotros: 'tenéis', ellos: 'tienen' },
        noteAr: 'فعل الملكية الشاذ مع تغير حرف العلة (e -> ie) في الجذر.'
      }
    ],
    examples: [
      { sentenceEs: 'Estudio español todos los días en la escuela.', translationEn: 'I study Spanish every day at school.', translationAr: 'أدرس الإسبانية كل يوم في المدرسة.', highlight: 'Estudio' },
      { sentenceEs: 'Nosotros vivimos en El Cairo.', translationEn: 'We live in Cairo.', translationAr: 'نحن نعيش في القاهرة.', highlight: 'vivimos' }
    ]
  },
  {
    id: 'perfecto',
    titleEs: 'Pretérito Perfecto Compuesto',
    titleEn: 'Present Perfect Tense (Pretérito Perfecto)',
    titleAr: 'الماضي القريب المركب (Pretérito Perfecto)',
    functionEn: 'Expresses past actions that occurred in an unfinished time frame or maintain relevance to the present (hoy, esta semana, este año, ya, todavía no).',
    functionAr: 'يدل على أحداث ماضية في فترة زمنية لم تنتهِ بعد (اليوم، هذا الأسبوع، هذا العام، بالفعل ya، ليس بعد todavía no).',
    regularEndings: {
      ar: { yo: 'he cantado', tu: 'has cantado', elElla: 'ha cantado', nosotros: 'hemos cantado', vosotros: 'habéis cantado', ellos: 'han cantado' },
      er: { yo: 'he comido', tu: 'has comido', elElla: 'ha comido', nosotros: 'hemos comido', vosotros: 'habéis comido', ellos: 'han comido' },
      ir: { yo: 'he vivido', tu: 'has vivido', elElla: 'ha vivido', nosotros: 'hemos vivido', vosotros: 'habéis vivido', ellos: 'han vivido' }
    },
    irregularVerbs: [
      {
        verb: 'hacer (hecho)',
        conjugations: { yo: 'he hecho', tu: 'has hecho', elElla: 'ha hecho', nosotros: 'hemos hecho', vosotros: 'habéis hecho', ellos: 'han hecho' },
        noteAr: 'اسم المفعول شاذ: hecho (صنع / فعل).'
      },
      {
        verb: 'escribir (escrito)',
        conjugations: { yo: 'he escrito', tu: 'has escrito', elElla: 'ha escrito', nosotros: 'hemos escrito', vosotros: 'habéis escrito', ellos: 'han escrito' },
        noteAr: 'اسم المفعول شاذ: escrito (كتب).'
      },
      {
        verb: 'abrir (abierto)',
        conjugations: { yo: 'he abierto', tu: 'has abierto', elElla: 'ha abierto', nosotros: 'hemos abierto', vosotros: 'habéis abierto', ellos: 'han abierto' },
        noteAr: 'اسم المفعول شاذ: abierto (فتح).'
      }
    ],
    examples: [
      { sentenceEs: 'Hoy he escrito un correo electrónico a mi profesor.', translationEn: 'Today I have written an email to my teacher.', translationAr: 'اليوم كتبتُ بريداً إلكترونياً لأستاذي.', highlight: 'he escrito' },
      { sentenceEs: '¿Ya has hecho los deberes?', translationEn: 'Have you already done the homework?', translationAr: 'هل أنهيتَ الواجبات المدرسية بالفعل؟', highlight: 'has hecho' }
    ]
  },
  {
    id: 'indefinido',
    titleEs: 'Pretérito Indefinido (Perfecto Simple)',
    titleEn: 'Simple Past Tense (Pretérito Indefinido)',
    titleAr: 'الماضي البسيط التام (Pretérito Indefinido)',
    functionEn: 'Expresses completed actions in a defined and closed past period (ayer, anoche, el año pasado, en 2020).',
    functionAr: 'يعبر عن أحداث انتهت تماماً في وقت ماضٍ محدد ومنقطع عن الحاضر (أمس ayer، العام الماضي el año pasado، في عام 2020).',
    regularEndings: {
      ar: { yo: '-é', tu: '-aste', elElla: '-ó', nosotros: '-amos', vosotros: '-asteis', ellos: '-aron' },
      er: { yo: '-í', tu: '-iste', elElla: '-ió', nosotros: '-imos', vosotros: '-isteis', ellos: '-ieron' },
      ir: { yo: '-í', tu: '-iste', elElla: '-ió', nosotros: '-imos', vosotros: '-isteis', ellos: '-ieron' }
    },
    irregularVerbs: [
      {
        verb: 'ser / ir (fui)',
        conjugations: { yo: 'fui', tu: 'fuiste', elElla: 'fue', nosotros: 'fuimos', vosotros: 'fuisteis', ellos: 'fueron' },
        noteAr: 'يتطابق تصريف ser و ir تماماً في الماضي البسيط، ويحدد السياق المعنى المقصود.'
      },
      {
        verb: 'estar (estuve)',
        conjugations: { yo: 'estuve', tu: 'estuviste', elElla: 'estuvo', nosotros: 'estuvimos', vosotros: 'estuvisteis', ellos: 'estuvieron' },
        noteAr: 'جذر شاذ قوي (estuv-) مع نهايات الماضي البسيط الشاذة الخالية من النبرات.'
      },
      {
        verb: 'tener (tuve)',
        conjugations: { yo: 'tuve', tu: 'tuviste', elElla: 'tuvo', nosotros: 'tuvimos', vosotros: 'tuvisteis', ellos: 'tuvieron' },
        noteAr: 'جذر شاذ قوي (tuv-) بلا نبرة على المفرد.'
      }
    ],
    examples: [
      { sentenceEs: 'Ayer fui al museo nacional con mis compañeros.', translationEn: 'Yesterday I went to the national museum with my classmates.', translationAr: 'أمس ذهبتُ إلى المتحف القومي مع زملائي.', highlight: 'fui' },
      { sentenceEs: 'El año pasado aprobaron el examen con notas excelentes.', translationEn: 'Last year they passed the exam with excellent grades.', translationAr: 'العام الماضي اجتازوا الامتحان بدرجات ممتازة.', highlight: 'aprobaron' }
    ]
  },
  {
    id: 'futuro',
    titleEs: 'Futuro Simple de Indicativo',
    titleEn: 'Future Simple Tense',
    titleAr: 'المستقبل البسيط (Futuro Simple)',
    functionEn: 'Expresses future plans, promises, predictions, and probability or hypotheses in the present moment.',
    functionAr: 'يعبر عن الخطط والمشاريع المستقبلية، الوعود، والتوقعات، والتخمين في الحاضر (¿Qué hora será?).',
    regularEndings: {
      ar: { yo: '-é', tu: '-ás', elElla: '-á', nosotros: '-emos', vosotros: '-éis', ellos: '-án' },
      er: { yo: '-é', tu: '-ás', elElla: '-á', nosotros: '-emos', vosotros: '-éis', ellos: '-án' },
      ir: { yo: '-é', tu: '-ás', elElla: '-á', nosotros: '-emos', vosotros: '-éis', ellos: '-án' }
    },
    irregularVerbs: [
      {
        verb: 'tener (tendr-)',
        conjugations: { yo: 'tendré', tu: 'tendrás', elElla: 'tendrá', nosotros: 'tendremos', vosotros: 'tendréis', ellos: 'tendrán' },
        noteAr: 'إضافة حرف d إلى الجذر الشاذ (tendr-).'
      },
      {
        verb: 'hacer (har-)',
        conjugations: { yo: 'haré', tu: 'harás', elElla: 'hará', nosotros: 'haremos', vosotros: 'haréis', ellos: 'harán' },
        noteAr: 'اختصار الجذر إلى (har-).'
      },
      {
        verb: 'decir (dir-)',
        conjugations: { yo: 'diré', tu: 'dirás', elElla: 'dirá', nosotros: 'diremos', vosotros: 'diréis', ellos: 'dirán' },
        noteAr: 'اختصار الجذر إلى (dir-).'
      },
      {
        verb: 'poder (podr-)',
        conjugations: { yo: 'podré', tu: 'podrás', elElla: 'podrá', nosotros: 'podremos', vosotros: 'podréis', ellos: 'podrán' },
        noteAr: 'سقوط حرف العلة من المصدر ليصبح (podr-).'
      }
    ],
    examples: [
      { sentenceEs: 'El próximo año viajaré a España para estudiar ingeniería.', translationEn: 'Next year I will travel to Spain to study engineering.', translationAr: 'العام المقبل سأسافر إلى إسبانيا لدراسة الهندسة.', highlight: 'viajaré' },
      { sentenceEs: 'Tendremos mucho éxito en el concurso escolar.', translationEn: 'We will have great success in the school contest.', translationAr: 'سنحقق نجاحاً باهراً في المسابقة المدرسية.', highlight: 'Tendremos' }
    ]
  },
  {
    id: 'subjuntivo',
    titleEs: 'Presente de Subjuntivo',
    titleEn: 'Present Subjunctive Mood',
    titleAr: 'صيغة الشك والرجاء في المضارع (Presente de Subjuntivo)',
    functionEn: 'Expresses desires, doubts, emotions, recommendations, and hypothetical requirements in dependent clauses (quiero que, ojalá, dudo que, es necesario que).',
    functionAr: 'يعبر عن الرغبات، الشك، الانفعالات، والنصائح في الجمل التابعة بعد أفعال الرجاء والشك والعبارات غير الشخصية.',
    regularEndings: {
      ar: { yo: '-e', tu: '-es', elElla: '-e', nosotros: '-emos', vosotros: '-éis', ellos: '-en' },
      er: { yo: '-a', tu: '-as', elElla: '-a', nosotros: '-amos', vosotros: '-áis', ellos: '-an' },
      ir: { yo: '-a', tu: '-as', elElla: '-a', nosotros: '-amos', vosotros: '-áis', ellos: '-an' }
    },
    irregularVerbs: [
      {
        verb: 'ser',
        conjugations: { yo: 'sea', tu: 'seas', elElla: 'sea', nosotros: 'seamos', vosotros: 'seáis', ellos: 'sean' },
        noteAr: 'جذر شاذ خاص بصيغة Subjuntivo.'
      },
      {
        verb: 'estar',
        conjugations: { yo: 'esté', tu: 'estés', elElla: 'esté', nosotros: 'estemos', vosotros: 'estéis', ellos: 'estén' },
        noteAr: 'حمل نبرات على جميع الضمائر عدا nosotros.'
      },
      {
        verb: 'ir',
        conjugations: { yo: 'vaya', tu: 'vayas', elElla: 'vaya', nosotros: 'vayamos', vosotros: 'vayáis', ellos: 'vayan' },
        noteAr: 'جذر شاذ بالكامل (vay-).'
      }
    ],
    examples: [
      { sentenceEs: 'Quiero que estudies con dedicación para el examen.', translationEn: 'I want you to study with dedication for the exam.', translationAr: 'أريدك أن تدرس بتفانٍ للامتحان.', highlight: 'estudies' },
      { sentenceEs: 'Es necesario que protejamos el medio ambiente.', translationEn: 'It is necessary that we protect the environment.', translationAr: 'من الضروري أن نحمي البيئة.', highlight: 'protejamos' }
    ]
  },
  {
    id: 'imperativo',
    titleEs: 'Imperativo Afirmativo y Negativo',
    titleEn: 'Imperative Mood (Direct Commands)',
    titleAr: 'صيغة الأمر المباشر والنهي (Imperativo)',
    functionEn: 'Gives orders, instructions, advice, and requests. Affirmative uses special forms; negative imperativo uses Presente de Subjuntivo.',
    functionAr: 'إعطاء الأوامر والتعليمات والنصائح؛ الأمر المثبت له صيغ خاصة، بينما النهي المنفي يصاغ حصرياً من Presente de Subjuntivo.',
    regularEndings: {
      ar: { yo: '-', tu: '-a / no -es', elElla: '-e / no -e', nosotros: '-emos / no -emos', vosotros: '-ad / no -éis', ellos: '-en / no -en' },
      er: { yo: '-', tu: '-e / no -as', elElla: '-a / no -a', nosotros: '-amos / no -amos', vosotros: '-ed / no -áis', ellos: '-an / no -an' },
      ir: { yo: '-', tu: '-e / no -as', elElla: '-a / no -a', nosotros: '-amos / no -amos', vosotros: '-id / no -áis', ellos: '-an / no -an' }
    },
    irregularVerbs: [
      {
        verb: 'hacer',
        conjugations: { yo: '-', tu: 'haz / no hagas', elElla: 'haga', nosotros: 'hagamos', vosotros: 'haced', ellos: 'hagan' },
        noteAr: 'أمر شاذ لضمير tú: haz.'
      },
      {
        verb: 'tener',
        conjugations: { yo: '-', tu: 'ten / no tengas', elElla: 'tenga', nosotros: 'tengamos', vosotros: 'tened', ellos: 'tengan' },
        noteAr: 'أمر شاذ لضمير tú: ten.'
      },
      {
        verb: 'poner',
        conjugations: { yo: '-', tu: 'pon / no pongas', elElla: 'ponga', nosotros: 'pongamos', vosotros: 'poned', ellos: 'pongan' },
        noteAr: 'أمر شاذ لضمير tú: pon.'
      }
    ],
    examples: [
      { sentenceEs: '¡Haz los ejercicios de gramática ahora mismo!', translationEn: 'Do the grammar exercises right now!', translationAr: 'قم بحل تمارين القواعد فوراً!', highlight: 'Haz' },
      { sentenceEs: '¡No olvides apagar la luz al salir!', translationEn: 'Do not forget to turn off the light when leaving!', translationAr: 'لا تنسَ إطفاء النور عند الخروج!', highlight: 'No olvides' }
    ]
  },
  {
    id: 'imperfecto',
    titleEs: 'Pretérito Imperfecto de Indicativo',
    titleEn: 'Imperfect Past Tense',
    titleAr: 'الماضي المستمر والوصفي (Pretérito Imperfecto)',
    functionEn: 'Describes habitual past routines, background context, weather, age, and continuous states in the past.',
    functionAr: 'يصف العادات والروتين القديم في الماضي، والأحوال الجوية، والسن، والوصف المحيط بالأحداث.',
    regularEndings: {
      ar: { yo: '-aba', tu: '-abas', elElla: '-aba', nosotros: '-ábamos', vosotros: '-abais', ellos: '-aban' },
      er: { yo: '-ía', tu: '-ías', elElla: '-ía', nosotros: '-íamos', vosotros: '-íais', ellos: '-ían' },
      ir: { yo: '-ía', tu: '-ías', elElla: '-ía', nosotros: '-íamos', vosotros: '-íais', ellos: '-ían' }
    },
    irregularVerbs: [
      {
        verb: 'ser (era)',
        conjugations: { yo: 'era', tu: 'eras', elElla: 'era', nosotros: 'éramos', vosotros: 'erais', ellos: 'eran' },
        noteAr: 'واحد من 3 أفعال شاذة فقط في زمن Imperfecto.'
      },
      {
        verb: 'ir (iba)',
        conjugations: { yo: 'iba', tu: 'ibas', elElla: 'iba', nosotros: 'íbamos', vosotros: 'ibais', ellos: 'iban' },
        noteAr: 'فعل ir الشاذ في Imperfecto.'
      },
      {
        verb: 'ver (veía)',
        conjugations: { yo: 'veía', tu: 'veías', elElla: 'veía', nosotros: 'veíamos', vosotros: 'veíais', ellos: 'veían' },
        noteAr: 'فعل ver يحافظ على الحرف e مع النبرة.'
      }
    ],
    examples: [
      { sentenceEs: 'Cuando era niño, jugaba al fútbol en el parque todos los viernes.', translationEn: 'When I was a child, I used to play football in the park every Friday.', translationAr: 'عندما كنتُ طفلاً، كنتُ ألعب كرة القدم في الحديقة كل يوم جمعة.', highlight: 'jugaba' }
    ]
  },
  {
    id: 'condicional',
    titleEs: 'Condicional Simple',
    titleEn: 'Simple Conditional Tense',
    titleAr: 'المضارع الشرطي الاحتمالي (Condicional Simple)',
    functionEn: 'Expresses polite requests, advice (deberías), hypothetical wishes, and future in the past.',
    functionAr: 'يعبر عن الطلب المهذب بأدب، وتقديم النصائح (deberías)، والافتراضات، والمستقبل من منظور الماضي.',
    regularEndings: {
      ar: { yo: '-ía', tu: '-ías', elElla: '-ía', nosotros: '-íamos', vosotros: '-íais', ellos: '-ían' },
      er: { yo: '-ía', tu: '-ías', elElla: '-ía', nosotros: '-íamos', vosotros: '-íais', ellos: '-ían' },
      ir: { yo: '-ía', tu: '-ías', elElla: '-ía', nosotros: '-íamos', vosotros: '-íais', ellos: '-ían' }
    },
    irregularVerbs: [
      {
        verb: 'tener (tendr-)',
        conjugations: { yo: 'tendría', tu: 'tendrías', elElla: 'tendría', nosotros: 'tendríamos', vosotros: 'tendríais', ellos: 'tendrían' },
        noteAr: 'نفس جذور المستقبل الشاذة مع نهايات ía.'
      }
    ],
    examples: [
      { sentenceEs: '¿Podría ayudarme con esta traducción, por favor?', translationEn: 'Could you help me with this translation, please?', translationAr: 'هل يمكنك مساعدتي في هذه الترجمة من فضلك؟', highlight: 'Podría' }
    ]
  }
];

export const SPANISH_PRONOUNS_DATA: SpanishPronounRule[] = [
  {
    category: 'directo',
    titleEs: 'Pronombres de Objeto Directo (OD)',
    titleEn: 'Direct Object Pronouns',
    titleAr: 'ضمائر المفعول به المباشر (OD)',
    ruleExplanationEs: 'Sustituyen a la persona o cosa sobre la que recae directamente la acción del verbo. Concuerdan en género y número: me, te, lo/la, nos, os, los/las.',
    ruleExplanationEn: 'Replace the direct recipient of the action: me, te, lo/la, nos, os, los/las. Must match in gender and number.',
    ruleExplanationAr: 'تحل محل المفعول به المباشر العاقل أو غير العاقل وتتطابق معه في النوع والعدد: me, te, lo/la, nos, os, los/las.',
    pronounTable: [
      { person: 'yo', direct: 'me', indirect: 'me', tonic: 'mí' },
      { person: 'tú', direct: 'te', indirect: 'te', tonic: 'ti' },
      { person: 'él / usted', direct: 'lo (la)', indirect: 'le (se)', tonic: 'él / usted' },
      { person: 'ella / usted', direct: 'la', indirect: 'le (se)', tonic: 'ella / usted' },
      { person: 'nosotros/as', direct: 'nos', indirect: 'nos', tonic: 'nosotros/as' },
      { person: 'vosotros/as', direct: 'os', indirect: 'os', tonic: 'vosotros/as' },
      { person: 'ellos / ustedes', direct: 'los', indirect: 'les (se)', tonic: 'ellos / ustedes' },
      { person: 'ellas / ustedes', direct: 'las', indirect: 'les (se)', tonic: 'ellas / ustedes' }
    ],
    examples: [
      { es: 'Compro el libro. -> Lo compro.', en: 'I buy the book. -> I buy it.', ar: 'أشتري الكتاب. -> أشتريه.', note: 'el libro (مذكر مفرد) يستبدل بـ lo' },
      { es: 'Leo las novelas. -> Las leo.', en: 'I read the novels. -> I read them.', ar: 'أقرأ الروايات. -> أقرؤها.', note: 'las novelas (مؤنث جمع) يستبدل بـ las' }
    ]
  },
  {
    category: 'indirecto',
    titleEs: 'Pronombres de Objeto Indirecto (OI)',
    titleEn: 'Indirect Object Pronouns',
    titleAr: 'ضمائر المفعول به غير المباشر (OI)',
    ruleExplanationEs: 'Indican el destinatario o beneficiario de la acción (¿A quién? ¿Para quién?). Formas: me, te, le, nos, os, les.',
    ruleExplanationEn: 'Indicate the beneficiary or recipient of the action: me, te, le, nos, os, les.',
    ruleExplanationAr: 'تدل على المستفيد أو متلقي الفعل (لمن؟ لمن كُتب؟): me, te, le, nos, os, les.',
    pronounTable: [
      { person: 'yo', direct: 'me', indirect: 'me', tonic: 'a mí' },
      { person: 'tú', direct: 'te', indirect: 'te', tonic: 'a ti' },
      { person: 'él / ella / usted', direct: 'lo / la', indirect: 'le', tonic: 'a él / a ella' },
      { person: 'nosotros/as', direct: 'nos', indirect: 'nos', tonic: 'a nosotros' },
      { person: 'vosotros/as', direct: 'os', indirect: 'os', tonic: 'a vosotros' },
      { person: 'ellos / ellas / ustedes', direct: 'los / las', indirect: 'les', tonic: 'a ellos' }
    ],
    examples: [
      { es: 'Escribo una carta a María. -> Le escribo una carta.', en: 'I write a letter to Maria. -> I write her a letter.', ar: 'أكتب رسالة إلى ماريا. -> أكتب لها رسالة.', note: 'a María تستبدل بالضمير le' }
    ]
  },
  {
    category: 'combinados',
    titleEs: 'Pronombres Combinados (OI + OD) y Regla de SE',
    titleEn: 'Combined Pronouns & The SE Transformation Rule',
    titleAr: 'الضمائر المزدوجة المركبة وقاعدة تحول le إلى se',
    ruleExplanationEs: 'Cuando coinciden el pronombre indirecto (le/les) y el directo (lo/la/los/las), el indirecto se convierte obligatoriamente en SE para evitar la cacofonía (*le lo -> se lo). El orden siempre es: OI + OD + Verbo.',
    ruleExplanationEn: 'When indirect (le/les) and direct (lo/la/los/las) meet, the indirect MUST transform into SE (*le lo -> se lo). Order is strictly IO + DO + Verb.',
    ruleExplanationAr: 'عند التقاء ضمير المفعول غير المباشر (le أو les) مع المباشر (lo/la/los/las)، يتحول le أو les وجوباً إلى SE لمنع الثقل الصوتي (*le lo -> se lo). والترتيب الحتمي هو: غير المباشر أولاً ثم المباشر ثم الفعل.',
    pronounTable: [
      { person: 'él / ella (combinado)', direct: 'lo / la', indirect: 'se (en vez de le)', tonic: 'se lo / se la' },
      { person: 'ellos / ellas (combinado)', direct: 'los / las', indirect: 'se (en vez de les)', tonic: 'se los / se las' }
    ],
    examples: [
      { es: 'Doy el regalo a Juan. -> Se lo doy.', en: 'I give the gift to Juan. -> I give it to him.', ar: 'أعطي الهدية لخوان. -> أعطيها له (se lo doy).', note: 'تحول le إلى se لمنع الثقل الصوتي *le lo doy' }
    ]
  },
  {
    category: 'gustar',
    titleEs: 'El Verbo GUSTAR y Construcciones Afectivas',
    titleEn: 'The Verb GUSTAR & Affective Verbs',
    titleAr: 'فعل GUSTAR وأفعال الإعجاب والميول (encantar, interesar, parecer)',
    ruleExplanationEs: 'El verbo GUSTAR concuerda con lo que gusta (el sujeto sintáctico). Solo se usa en tercera persona: "gusta" ante sustantivos singulares o infinitivos, y "gustan" ante sustantivos plurales. Va precedido de pronombre OI (me, te, le, nos, os, les).',
    ruleExplanationEn: 'GUSTAR agrees with the liked item (the grammatical subject). It only uses 3rd person: "gusta" before singular nouns/infinitives, "gustan" before plural nouns.',
    ruleExplanationAr: 'يتطابق فعل GUSTAR مع الشيء المحبوب: gusta مع المفرد والمصدر، و gustan مع الجمع، ويسبقه دائماً ضمير مفعول غير مباشر (me, te, le, nos, os, les).',
    pronounTable: [
      { person: 'yo', direct: '-', indirect: 'me', tonic: 'a mí me gusta(n)' },
      { person: 'tú', direct: '-', indirect: 'te', tonic: 'a ti te gusta(n)' },
      { person: 'él/ella', direct: '-', indirect: 'le', tonic: 'a él/ella le gusta(n)' },
      { person: 'nosotros', direct: '-', indirect: 'nos', tonic: 'a nosotros nos gusta(n)' },
      { person: 'vosotros', direct: '-', indirect: 'os', tonic: 'a vosotros os gusta(n)' },
      { person: 'ellos/ellas', direct: '-', indirect: 'les', tonic: 'a ellos/ellas les gusta(n)' }
    ],
    examples: [
      { es: 'A mí me gusta la música española.', en: 'I like Spanish music.', ar: 'تعجبني الموسيقى الإسبانية.', note: 'la música مفرد -> gusta' },
      { es: 'A nosotros nos gustan los deportes.', en: 'We like sports.', ar: 'تعجبنا الرياضات.', note: 'los deportes جمع -> gustan' },
      { es: 'A ella le gusta viajar y leer.', en: 'She likes traveling and reading.', ar: 'يعجبها السفر والقراءة.', note: 'أفعال في المصدر -> gusta' }
    ]
  }
];

export const SPANISH_CONTRASTS_DATA: SpanishContrastRule[] = [
  {
    contrastId: 'ser_estar',
    titleEs: 'Contraste Fundamental: SER vs. ESTAR',
    titleEn: 'Essential Contrast: SER vs. ESTAR',
    titleAr: 'المقارنة الجوهرية: فعلا الكينونة SER و ESTAR',
    itemA: {
      name: 'SER (Identidad y Permanencia)',
      rules: [
        { useEn: 'Identity, name, nationality, origin', useAr: 'الهوية، الاسم، الجنسية والأصل', exampleEs: 'Soy egipcio de El Cairo.', translationAr: 'أنا مصري من القاهرة.' },
        { useEn: 'Profession or occupation', useAr: 'المهنة أو الوظيفة', exampleEs: 'Mi padre es profesor de historia.', translationAr: 'والدي أستاذ تاريخ.' },
        { useEn: 'Essential permanent characteristics', useAr: 'الصفات والسمات الجوهرية الثابتة', exampleEs: 'El hierro es duro y resistente.', translationAr: 'الحديد صلب ومقاوم.' },
        { useEn: 'Telling time and dates', useAr: 'الوقت، الساعات والتواريخ', exampleEs: 'Son las tres de la tarde.', translationAr: 'الساعة الثالثة عصراً.' }
      ]
    },
    itemB: {
      name: 'ESTAR (Estado y Ubicación)',
      rules: [
        { useEn: 'Physical location of people and places', useAr: 'الموقع والمكان الجغرافي', exampleEs: 'España está en el sur de Europa.', translationAr: 'إسبانيا تقع في جنوب أوروبا.' },
        { useEn: 'Temporary physical or emotional states', useAr: 'الحالات النفسية والمؤقتة والصحة', exampleEs: 'Hoy estoy muy contento y descansado.', translationAr: 'اليوم أنا سعيد جداً ومرتاح.' },
        { useEn: 'Continuous actions with gerund', useAr: 'الحدث المستمر (estar + gerundio)', exampleEs: 'Estamos repasando la lección de español.', translationAr: 'نحن نراجع درس الإسبانية الآن.' }
      ]
    },
    specialTrapPairs: [
      {
        expressionEs: 'bueno / buena',
        meaningWithA: 'Ser bueno = Good-natured, honest, or high quality (شخص طيب أو شيء ذو جودة عالية)',
        meaningWithB: 'Estar bueno = Tasty / attractive (طعام لذيذ المذاق أو شخص جذاب)',
        explanationAr: 'هذا الطعام لذيذ: Esta comida está muy buena (تذوق مؤقت).'
      },
      {
        expressionEs: 'listo / lista',
        meaningWithA: 'Ser listo = Clever / smart (ذكي وبارع)',
        meaningWithB: 'Estar listo = Ready / prepared (مستعد وجاهز)',
        explanationAr: 'أنا جاهز للامتحان: Estoy listo para el examen.'
      },
      {
        expressionEs: 'aburrido / aburrida',
        meaningWithA: 'Ser aburrido = Boring (ممل في طبعه)',
        meaningWithB: 'Estar aburrido = Feeling bored (يشعر بالملل حالياً)',
        explanationAr: 'الفيلم ممل (La película es aburrida)، أنا أشعر بالملل (Estoy aburrido).'
      }
    ]
  },
  {
    contrastId: 'por_para',
    titleEs: 'Contraste Preposicional: POR vs. PARA',
    titleEn: 'Prepositional Distinction: POR vs. PARA',
    titleAr: 'حرفا الجر المتشابهان: استخدامات POR مقابل PARA',
    itemA: {
      name: 'POR (Causa, Motivo, Medio, Duración)',
      rules: [
        { useEn: 'Cause, reason, or motive (because of)', useAr: 'السبب والعلة والدافع (بسبب)', exampleEs: 'Llegó tarde por el tráfico intenso.', translationAr: 'وصل متأخراً بسبب الزحام.' },
        { useEn: 'Duration of time or approximate period', useAr: 'المدة الزمنية أو التوقيت التقريبي', exampleEs: 'Estudió en Madrid por dos años.', translationAr: 'درس في مدريد لمدة سنتين.' },
        { useEn: 'Means of transportation or communication', useAr: 'وسيلة النقل أو الاتصال', exampleEs: 'Te envié la tarea por correo electrónico.', translationAr: 'أرسلتُ لك الواجب بالبريد الإلكتروني.' },
        { useEn: 'Pass through or around a place', useAr: 'المرور عبر أو داخل مكان', exampleEs: 'Caminamos por la plaza mayor.', translationAr: 'تمشينا عبر الميدان الرئيسي.' }
      ]
    },
    itemB: {
      name: 'PARA (Destino, Finalidad, Destinatario, Plazo)',
      rules: [
        { useEn: 'Purpose or goal (in order to + infinitive)', useAr: 'الغاية والهدف (من أجل / لكي + المصدر)', exampleEs: 'Estudio mucho para aprobar con honores.', translationAr: 'أدرس كثيراً لكي أنجح بامتياز.' },
        { useEn: 'Physical destination', useAr: 'الوجهة والمقصد النهائي', exampleEs: 'Este tren sale para Barcelona.', translationAr: 'هذا القطار يغادر متجهاً إلى برشلونة.' },
        { useEn: 'Recipient of an object or action', useAr: 'المتلقي أو المستفيد من الشيء', exampleEs: 'Este regalo es para mi madre.', translationAr: 'هذه الهدية لأمي.' },
        { useEn: 'Deadline or target date', useAr: 'الموعد الأخير والميعاد المحدد', exampleEs: 'La redacción es para el próximo lunes.', translationAr: 'المقال مطلوب ليوم الاثنين القادم.' }
      ]
    }
  }
];

export const SPANISH_SITUATIONS_DATA: SpanishSituationScenario[] = [
  {
    id: 'es_sit_1',
    unidadTitle: 'Unidad 1: Planes futuros y proyectos',
    situationPromptEs: 'Para expresar proyectos e intenciones futuras, dices:',
    situationPromptAr: 'للتعبير عن الخطط والمشاريع والنوايا المستقبلية، تقول:',
    situationPromptEn: 'To express future projects and intentions, you say:',
    correctResponseEs: 'Pienso participar en el concurso escolar de música.',
    correctResponseAr: 'أنوي المشاركة في المسابقة المدرسية للموسيقى.',
    trapDistractorEs: 'Ayer participé en el concurso escolar de música.',
    trapExplanationAr: 'الخيار الخاطئ في زمن الماضي (Ayer participé)، بينما السؤال يطلب التعبير عن خطط مستقبلية (Pienso participar).'
  },
  {
    id: 'es_sit_2',
    unidadTitle: 'Unidad 1: Predicciones y futuro',
    situationPromptEs: 'Para hacer una predicción sobre el futuro, dices:',
    situationPromptAr: 'لإطلاق توقع أو تنبؤ بالمستقبل، تقول:',
    situationPromptEn: 'To make a prediction about the future, you say:',
    correctResponseEs: 'Creo que el examen de español será muy fácil.',
    correctResponseAr: 'أعتقد أن امتحان الإسبانية سيكون سهلاً للغاية.',
    trapDistractorEs: '¿Dónde está el libro de español?',
    trapExplanationAr: 'السؤال عن مكان الكتاب ليس تنبؤاً؛ التنبؤ يتطلب زمن المستقبل مع صيغة رأي (Creo que... será).'
  },
  {
    id: 'es_sit_3',
    unidadTitle: 'Unidad 2: Expresar gustos y preferencias',
    situationPromptEs: 'Para expresar tus gustos por la literatura, dices:',
    situationPromptAr: 'للتعبير عن إعجابك واهتمامك بالأدب، تقول:',
    situationPromptEn: 'To express your tastes in literature, you say:',
    correctResponseEs: 'A mí me encantan las novelas de Gabriel García Márquez.',
    correctResponseAr: 'أنا أعشق روايات غابرييل غارسيا ماركيز.',
    trapDistractorEs: 'No me gusta nada leer libros en mi tiempo libre.',
    trapExplanationAr: 'الخيار الخاطئ يعبر عن عدم الإعجاب والرفض التام، بينما المطلوب التعبير عن الإعجاب والشغف.'
  },
  {
    id: 'es_sit_4',
    unidadTitle: 'Unidad 3: De compras y tiendas',
    situationPromptEs: 'En una tienda de ropa, para preguntar por el precio de una camisa, dices:',
    situationPromptAr: 'في متجر ملابس، للسؤال عن سعر قميص، تقول:',
    situationPromptEn: 'In a clothing store, to ask for the price of a shirt, you say:',
    correctResponseEs: '¿Cuánto cuesta esta camisa blanca, por favor?',
    correctResponseAr: 'كم سعر هذا القميص الأبيض من فضلك؟',
    trapDistractorEs: '¿Qué talla llevas normalmente?',
    trapExplanationAr: 'السؤال عن المقاس (Qué talla) يختلف عن السؤال عن السعر (Cuánto cuesta).'
  },
  {
    id: 'es_sit_5',
    unidadTitle: 'Unidad 4: Invitaciones y respuestas',
    situationPromptEs: 'Para aceptar cortésmente una invitación para ir al cine, dices:',
    situationPromptAr: 'لقبول دعوة بأدب للذهاب إلى السينما، تقول:',
    situationPromptEn: 'To politely accept an invitation to go to the cinema, you say:',
    correctResponseEs: '¡Sí, con mucho gusto! Me apetece mucho.',
    correctResponseAr: 'نعم، بكل سرور! يروق لي ذلك كثيراً.',
    trapDistractorEs: 'Lo siento, no puedo porque tengo que estudiar.',
    trapExplanationAr: 'الخيار الخاطئ يمثل رفضاً للدعوة واعتذاراً، بينما المطلوب هو قبول الدعوة بحماس.'
  },
  {
    id: 'es_sit_6',
    unidadTitle: 'Unidad 4: Pedir y dar disculpas',
    situationPromptEs: 'Pides disculpas por haber llegado tarde a clase diciendo:',
    situationPromptAr: 'تعتذر عن التأخر عن الحصة المدرسية قائلاً:',
    situationPromptEn: 'You apologize for being late to class by saying:',
    correctResponseEs: 'Perdón por el retraso, el autobús se averió.',
    correctResponseAr: 'عذراً على التأخير، فقد تعطلت الحافلة.',
    trapDistractorEs: '¡Enhorabuena por tu excelente resultado!',
    trapExplanationAr: 'الخيار الخاطئ يقدم تهنئة ومباركة، بينما الموقف يتطلب اعتذاراً عن التأخر.'
  }
];
