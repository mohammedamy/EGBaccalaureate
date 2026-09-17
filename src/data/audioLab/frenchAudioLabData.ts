/**
 * French Audio & Listening Studio Data Bank
 * Aligned with Egyptian Ministry of Education Secondary 3 Syllabus (Club @dos Plus 3)
 */

export interface FrenchNasalVowel {
  ipa: string;
  nameEn: string;
  nameAr: string;
  spellingPatterns: string[];
  exemplarWords: { word: string; translationAr: string; phonetic: string }[];
  trapWarningEn: string;
  trapWarningAr: string;
}

export interface FrenchLiaisonRule {
  id: string;
  type: 'obligatoire' | 'interdite' | 'facultative';
  titleFr: string;
  titleAr: string;
  ruleExplanationFr: string;
  ruleExplanationAr: string;
  examples: {
    phraseFr: string;
    translationAr: string;
    phoneticAlert: string;
  }[];
}

export interface PronounPlacementRule {
  id: string;
  category: 'COD' | 'COI' | 'EN' | 'Y' | 'DOUBLE';
  titleFr: string;
  titleAr: string;
  replacedForms: string;
  ruleFr: string;
  ruleAr: string;
  examples: {
    questionFr: string;
    answerFr: string;
    explanationAr: string;
  }[];
}

export interface FrenchSituationScenario {
  id: string;
  unitTitle: string;
  situationPromptFr: string;
  situationPromptAr: string;
  correctResponseFr: string;
  correctResponseAr: string;
  trapDistractorFr: string;
  trapExplanationAr: string;
}

export interface FrenchListeningTrack {
  id: string;
  unit: number;
  titleFr: string;
  titleAr: string;
  durationSec: number;
  situationCategory: string;
  dialogueTurns: {
    speaker: string;
    speakerRoleFr: string;
    textFr: string;
    textAr: string;
  }[];
  comprehensionQuestions: {
    id: string;
    questionFr: string;
    questionAr: string;
    optionsFr: string[];
    correctIndex: number;
    explanationFr: string;
    explanationAr: string;
  }[];
}

// 1. NASAL VOWELS & CORE PHONETICS
export const FRENCH_NASAL_VOWELS: FrenchNasalVowel[] = [
  {
    ipa: '/ɑ̃/',
    nameEn: 'Open Back Nasal Vowel (an, am, en, em)',
    nameAr: 'الحركة الأنفية المفتوحة (an, en)',
    spellingPatterns: ['an', 'am', 'en', 'em'],
    exemplarWords: [
      { word: 'vent', translationAr: 'رياح', phonetic: '/vɑ̃/' },
      { word: 'chambre', translationAr: 'غرفة', phonetic: '/ʃɑ̃bʁ/' },
      { word: 'enfant', translationAr: 'طفل', phonetic: '/ɑ̃.fɑ̃/' },
      { word: 'temps', translationAr: 'طقس / وقت', phonetic: '/tɑ̃/' },
    ],
    trapWarningEn: 'Do not pronounce the consonant "n" or "m"; air must vibrate simultaneously through oral and nasal cavities.',
    trapWarningAr: 'لا تنطق حرف النون أو الميم أبداً، الصوت يخرج كحركة أنفية ممتدة دون غلق الفم.',
  },
  {
    ipa: '/ɛ̃/',
    nameEn: 'Open-Mid Front Unrounded Nasal Vowel (in, im, ain, ein, yn)',
    nameAr: 'الحركة الأنفية الأمامية المنبسطة (in, ain, ein)',
    spellingPatterns: ['in', 'im', 'ain', 'aim', 'ein', 'yn', 'ym'],
    exemplarWords: [
      { word: 'matin', translationAr: 'صباح', phonetic: '/ma.tɛ̃/' },
      { word: 'pain', translationAr: 'خبز', phonetic: '/pɛ̃/' },
      { word: 'train', translationAr: 'قطار', phonetic: '/tʁɛ̃/' },
      { word: 'plein', translationAr: 'ممتلئ', phonetic: '/plɛ̃/' },
    ],
    trapWarningEn: 'Lips are stretched wide as in a smile while air passes through the nasal cavity; distinct from /ɑ̃/.',
    trapWarningAr: 'تكون الشفتان منبسطتين كوضعية الابتسام مع إخراج الصوت من الأنف، وتختلف تماماً عن /ɑ̃/.',
  },
  {
    ipa: '/ɔ̃/',
    nameEn: 'Close-Mid Back Rounded Nasal Vowel (on, om)',
    nameAr: 'الحركة الأنفية الخلفية المستديرة (on, om)',
    spellingPatterns: ['on', 'om'],
    exemplarWords: [
      { word: 'bon', translationAr: 'جيد / لذيذ', phonetic: '/bɔ̃/' },
      { word: 'maison', translationAr: 'منزل', phonetic: '/mɛ.zɔ̃/' },
      { word: 'bonbon', translationAr: 'حلوى', phonetic: '/bɔ̃.bɔ̃/' },
      { word: 'nom', translationAr: 'اسم', phonetic: '/nɔ̃/' },
    ],
    trapWarningEn: 'Lips are fully rounded in an "O" shape; common trap is confusing "bon" /bɔ̃/ with "banc" /bɑ̃/.',
    trapWarningAr: 'تستدير الشفتان بشكل بيضاوي كامل، والخطأ الشائع هو الخلط بين "bon" و "banc".',
  },
  {
    ipa: '/œ̃/',
    nameEn: 'Open-Mid Front Rounded Nasal Vowel (un, um)',
    nameAr: 'الحركة الأنفية الأمامية المستديرة (un)',
    spellingPatterns: ['un', 'um'],
    exemplarWords: [
      { word: 'un', translationAr: 'أداة نكرة للمذكر / رقم 1', phonetic: '/œ̃/' },
      { word: 'lundi', translationAr: 'يوم الإثنين', phonetic: '/lœ̃.di/' },
      { word: 'parfum', translationAr: 'عطر', phonetic: '/paʁ.fœ̃/' },
      { word: 'brun', translationAr: 'أسمر', phonetic: '/bʁœ̃/' },
    ],
    trapWarningEn: 'Produced with lips rounded and front tongue position, distinguishing "un" from "en" and "in".',
    trapWarningAr: 'تُنطق بتدوير الشفتين للأمام، لتمييز أداة النكرة "un" عن حرف الجر "en" وصفة "fin".',
  },
];

// 2. LIAISON & ELISION RULES
export const FRENCH_LIAISON_RULES: FrenchLiaisonRule[] = [
  {
    id: 'liaison_article_nom',
    type: 'obligatoire',
    titleFr: 'Liaison Obligatoire : Déterminant + Nom',
    titleAr: 'الوصل الإجباري: بين أداة التحديد والاسم',
    ruleExplanationFr: 'La liaison est obligatoire entre un article (ou adjectif possessif/démonstratif) et le nom commençant par une voyelle.',
    ruleExplanationAr: 'الوصل إلزامي ومفروض بين أداة التعريف أو النكرة أو صفة الملكية والاسم البادئ بحرف متحرك، ويتحول الحرف s إلى صوت [z].',
    examples: [
      { phraseFr: 'Les‿enfants jouent au parc.', translationAr: 'الأطفال يلعبون في الحديقة.', phoneticAlert: 'Les‿enfants -> [le.zɑ̃.fɑ̃]' },
      { phraseFr: 'Mon‿ami arrive ce soir.', translationAr: 'صديقي يصل هذا المساء.', phoneticAlert: 'Mon‿ami -> [mɔ̃.na.mi]' },
      { phraseFr: 'Deux‿heures de marche.', translationAr: 'ساعتان من المشي.', phoneticAlert: 'Deux‿heures -> [dø.zœʁ] (x -> [z])' },
    ],
  },
  {
    id: 'liaison_pronom_verbe',
    type: 'obligatoire',
    titleFr: 'Liaison Obligatoire : Pronom Sujet + Verbe',
    titleAr: 'الوصل الإجباري: بين ضمير الفاعل والفعل',
    ruleExplanationFr: 'La liaison est obligatoire entre les pronoms sujets (nous, vous, ils, elles, on) et le verbe suivant.',
    ruleExplanationAr: 'يجب ربط ضمائر الفاعل الشائعة بالفعل الموالي إذا بدأ بحرف متحرك أو حرف h الصامت.',
    examples: [
      { phraseFr: 'Nous‿avons faim.', translationAr: 'نحن جائعون.', phoneticAlert: 'Nous‿avons -> [nu.za.vɔ̃]' },
      { phraseFr: 'Ils‿aiment le football.', translationAr: 'هم يحبون كرة القدم.', phoneticAlert: 'Ils‿aiment -> [il.zɛm]' },
      { phraseFr: 'Vous‿êtes en retard.', translationAr: 'أنتم متأخرون.', phoneticAlert: 'Vous‿êtes -> [vu.zɛt]' },
    ],
  },
  {
    id: 'liaison_interdite_et',
    type: 'interdite',
    titleFr: 'Liaison Interdite : Après la conjonction "ET"',
    titleAr: 'الوصل الممنوع تماماً: بعد واو العطف (et)',
    ruleExplanationFr: 'On ne fait JAMAIS la liaison après la conjonction de coordination "et".',
    ruleExplanationAr: 'يُحظر منعاً باتاً وصل حرف العطف "et" مع الكلمة التالية له مهما كان الحرف الذي تبدأ به.',
    examples: [
      { phraseFr: 'Un cahier et | un livre.', translationAr: 'كشكول وكتاب.', phoneticAlert: 'JAMAIS de liaison: [e œ̃ livʁ], pas de liaison "t" !' },
      { phraseFr: 'Jean et | Alain arrivent.', translationAr: 'جان وألان يصلان.', phoneticAlert: 'Interdiction absolue: [e a.lɛ̃].' },
    ],
  },
  {
    id: 'liaison_interdite_nom_sujet',
    type: 'interdite',
    titleFr: 'Liaison Interdite : Nom Sujet Singulier + Verbe',
    titleAr: 'الوصل الممنوع: بين الفاعل المفرد الصريح والفعل',
    ruleExplanationFr: 'La liaison ne se fait pas entre un nom sujet singulier et son verbe.',
    ruleExplanationAr: 'لا يصح وصل الاسم المفرد الفاعل بالفعل الذي يليه منعاً لثقل اللفظ واضطراب المعنى.',
    examples: [
      { phraseFr: 'Le train | arrive à 8h.', translationAr: 'القطار يصل في الثامنة.', phoneticAlert: 'On prononce [lə tʁɛ̃ a.ʁiv] sans lier le "n".' },
      { phraseFr: 'Le président | a parlé.', translationAr: 'الرئيس تحدث.', phoneticAlert: 'Pause nette: [lə pʁe.zi.dɑ̃ a paʁ.le].' },
    ],
  },
];

// 3. SECONDARY 3 PRONOUN FLOW ENGINE (COD / COI / EN / Y)
export const FRENCH_PRONOUN_RULES: PronounPlacementRule[] = [
  {
    id: 'cod_pronouns',
    category: 'COD',
    titleFr: 'Pronoms Compléments d’Objet Direct (COD)',
    titleAr: 'ضمائر المفعول المباشر (le, la, l\', les)',
    replacedForms: 'Remplace un nom précédé de : le, la, les, ce, cette, ces, mon, ton, son...',
    ruleFr: 'Placé immédiatement DEVANT le verbe conjugué (ou devant l’infinitif s’il y en a un).',
    ruleAr: 'يحل محل مفعول مباشر غير مسبوق بحرف جر، ويوضع قبل الفعل المصرف مباشرة أو قبل المصدر.',
    examples: [
      {
        questionFr: 'Tu fais le devoir de français ?',
        answerFr: 'Oui, je le fais.',
        explanationAr: 'تم استبدال "le devoir" (مذكر مباشر) بالضمير "le" ووضعه قبل الفعل "fais".',
      },
      {
        questionFr: 'Tu regardes ces matchs ?',
        answerFr: 'Oui, je les regarde.',
        explanationAr: 'تم استبدال "ces matchs" (جمع مباشر) بالضمير "les".',
      },
      {
        questionFr: 'Tu vas acheter cette raquette ?',
        answerFr: 'Oui, je vais l\'acheter.',
        explanationAr: 'عند وجود فعل مصرف يليه مصدر، يوضع الضمير قبل الفعل المصدري "acheter".',
      },
    ],
  },
  {
    id: 'coi_pronouns',
    category: 'COI',
    titleFr: 'Pronoms Compléments d’Objet Indirect (COI)',
    titleAr: 'ضمائر المفعول غير المباشر العاقل (lui, leur)',
    replacedForms: 'Remplace : à + personne singulier (lui), à + personnes pluriel (leur)',
    ruleFr: 'Utilisé avec les verbes de communication (parler à, téléphoner à, écrire à, donner à, conseiller à).',
    ruleAr: 'يحل محل اسم عاقل (شخص) مسبوق بحرف الجر à ومشتقاته (au, à la, aux)، ويستخدم lui للمفرد و leur للجمع.',
    examples: [
      {
        questionFr: 'Tu téléphones à ton entraîneur ?',
        answerFr: 'Oui, je lui téléphone.',
        explanationAr: '"à ton entraîneur" مفعول عاقل مفرد مسبوق بـ à -> يُستبدل بـ "lui".',
      },
      {
        questionFr: 'Tu envoies des messages à tes amis ?',
        answerFr: 'Oui, je leur envoie des messages.',
        explanationAr: '"à tes amis" مفعول عاقل جمع مسبوق بـ à -> يُستبدل بـ "leur" (بدون s نهائياً).',
      },
    ],
  },
  {
    id: 'en_pronoun',
    category: 'EN',
    titleFr: 'Le Pronom Personnel "EN"',
    titleAr: 'ضمير التجزئة والكميات (EN)',
    replacedForms: 'Remplace : du, de la, de l\', des + nom, nombre (un, deux...), adverbe de quantité (beaucoup de, un peu de)',
    ruleFr: 'Indispensable pour exprimer l\'alimentation, les courses, ou une quantité chiffrée.',
    ruleAr: 'يحل محل مفعول مسبوق بأداة تجزئة (du, de la) أو عدد أو ظرف كمية (beaucoup de)، ويجب ذكر العدد أو ظرف الكمية في الإثبات وحذفه في النفي.',
    examples: [
      {
        questionFr: 'Tu manges du poisson ?',
        answerFr: 'Oui, j\'en mange.',
        explanationAr: '"du poisson" مسبوق بأداة تجزئة "du" -> يُستبدل بالضمير "en".',
      },
      {
        questionFr: 'Tu as acheté trois pommes ?',
        answerFr: 'Oui, j\'en ai acheté trois.',
        explanationAr: 'يُستبدل المعدود بـ "en" مع بقاء العدد "trois" في الإثبات (وفي النفي: Non, je n\'en ai pas acheté).',
      },
      {
        questionFr: 'Il boit beaucoup de café ?',
        answerFr: 'Oui, il en boit beaucoup.',
        explanationAr: 'يحل "en" محل "de café" مع الاحتفاظ بظرف الكمية "beaucoup".',
      },
    ],
  },
  {
    id: 'y_pronoun',
    category: 'Y',
    titleFr: 'Le Pronom Personnel "Y"',
    titleAr: 'ضمير المكان والأشياء غير المباشرة (Y)',
    replacedForms: 'Remplace : à, en, au, aux, chez, sous, dans + Nom de Lieu (ou à + Chose)',
    ruleFr: 'Remplace un complément de lieu précédé de n’importe quelle préposition sauf "de".',
    ruleAr: 'يحل محل مكان مسبوق بأي حرف جر (ما عدا de)، أو شيء غير عاقل مسبوق بـ à مع أفعال التفكير (penser à).',
    examples: [
      {
        questionFr: 'Tu vas au gymnase cet après-midi ?',
        answerFr: 'Oui, j\'y vais.',
        explanationAr: '"au gymnase" اسم مكان مسبوق بحرف جر -> يُستبدل بالضمير "y".',
      },
      {
        questionFr: 'Elle reste chez elle le week-end ?',
        answerFr: 'Oui, elle y reste.',
        explanationAr: '"chez elle" دلالة على المكان (منزلها) -> يُستبدل بـ "y".',
      },
      {
        questionFr: 'Tu penses à ton avenir professionnel ?',
        answerFr: 'Oui, j\'y pense souvent.',
        explanationAr: '"à ton avenir" غير عاقل مسبوق بـ à مع فعل penser -> يُستبدل بـ "y".',
      },
    ],
  },
  {
    id: 'double_pronouns',
    category: 'DOUBLE',
    titleFr: 'Ordre des Doubles Pronoms Personnels',
    titleAr: 'ترتيب الضمائر الشخصية المزدوجة',
    replacedForms: '(me/te/se/nous/vous) -> (le/la/les) -> (lui/leur) -> (y) -> (en)',
    ruleFr: 'Règle d’or : les pronoms de personnes 1 et 2 précèdent le/la/les, qui précèdent lui/leur, qui précèdent y et en.',
    ruleAr: 'في الجملة العادية: ضمائر المتكلم والمخاطب أولاً، ثم المفعول المباشر (le, la, les)، ثم غير المباشر (lui, leur)، ثم (y)، ثم (en).',
    examples: [
      {
        questionFr: 'Tu me prêtes ton ballon de football ?',
        answerFr: 'Oui, je te le prête.',
        explanationAr: 'الترتيب: "te" (مخاطب) ثم "le" (مباشر) قبل الفعل "prête".',
      },
      {
        questionFr: 'Tu donnes ces pommes à tes sœurs ?',
        answerFr: 'Oui, je les leur donne.',
        explanationAr: 'الترتيب: "les" (مباشر جمع) ثم "leur" (غير مباشر جمع) قبل الفعل.',
      },
    ],
  },
];

// 4. COMMUNICATIVE SITUATIONS SIMULATOR
export const FRENCH_SITUATION_SCENARIOS: FrenchSituationScenario[] = [
  {
    id: 'sit_unite1_proposer',
    unitTitle: 'Unité 1 : Le club des sportifs',
    situationPromptFr: 'Vous proposez à votre ami de faire du vélo, qu\'est-ce que vous dites ?',
    situationPromptAr: 'أنت تقترح على صديقك ركوب الدراجة، ماذا تقول؟',
    correctResponseFr: 'Ça te dit de faire du vélo avec moi cet après-midi ?',
    correctResponseAr: 'هل يناسبك أن نركب الدراجة سوياً هذا المساء؟ (صيغة اقتراح صحيحة)',
    trapDistractorFr: 'Je ne sais pas faire de vélo.',
    trapExplanationAr: 'خطأ: هذه الجملة تعبر عن عدم القدرة (savoir) وليست اقتراحاً (proposer).',
  },
  {
    id: 'sit_unite1_avis',
    unitTitle: 'Unité 1 : Le club des sportifs',
    situationPromptFr: 'Votre ami vous demande votre opinion sur les sports extrêmes, que dites-vous ?',
    situationPromptAr: 'يسألك صديقك عن رأيك في الرياضات الخطيرة، ماذا تقول؟',
    correctResponseFr: 'À mon avis, le canyoning est plus motivant et dangereux que le tennis.',
    correctResponseAr: 'في رأيي، رياضة الهبوط المائي أكثر تحفيزاً وخطورة من التنس. (تعبير عن الرأي)',
    trapDistractorFr: 'Qu\'est-ce que tu penses du karaté ?',
    trapExplanationAr: 'خطأ: هذا سؤال عن الرأي وليس إبداء رأي.',
  },
  {
    id: 'sit_unite2_quantite',
    unitTitle: 'Unité 2 : Le club des gourmands',
    situationPromptFr: 'Au supermarché, vous demandez le prix de la viande au boucher, que dites-vous ?',
    situationPromptAr: 'في السوبرماركت، تسأل الجزار عن سعر اللحم، ماذا تقول؟',
    correctResponseFr: 'Combien coûte un kilo de viande rouge, s\'il vous plaît ?',
    correctResponseAr: 'بكم كيلو اللحم الأحمر من فضلك؟ (سؤال عن السعر)',
    trapDistractorFr: 'Je voudrais deux kilos de viande hachée.',
    trapExplanationAr: 'خطأ: هذا طلب شراء وتحديد كمية وليس سؤالاً عن السعر.',
  },
  {
    id: 'sit_unite3_passe',
    unitTitle: 'Unité 3 : Le club des explorateurs',
    situationPromptFr: 'Vous racontez ce que vous avez fait pendant les vacances à la ferme, que dites-vous ?',
    situationPromptAr: 'أنت تروي ما قمت به خلال العطلة في المزرعة، ماذا تقول؟',
    correctResponseFr: 'J\'ai ramassé les œufs et je suis monté à cheval.',
    correctResponseAr: 'جمعت البيض وركبت الحصان. (سرد أحداث في الماضي المركب Passé Composé)',
    trapDistractorFr: 'Demain, je vais aller à la campagne avec mes cousins.',
    trapExplanationAr: 'خطأ: هذه الجملة تعبر عن المستقبل القريب (futur proche) وليس سرداً للماضي.',
  },
  {
    id: 'sit_unite4_douleur',
    unitTitle: 'Unité 4 : Le club des voyageurs',
    situationPromptFr: 'Chez le médecin, vous lui expliquez où vous avez mal, que dites-vous ?',
    situationPromptAr: 'عند الطبيب، تشرح له موضع الألم، ماذا تقول؟',
    correctResponseFr: 'Docteur, j\'ai très mal au ventre et j\'ai de la fièvre.',
    correctResponseAr: 'يا دكتور، أشعر بألم شديد في البطن ولدي حمى. (تعبير عن الألم avoir mal à)',
    trapDistractorFr: 'Vous devez prendre ce médicament trois fois par jour.',
    trapExplanationAr: 'خطأ: هذه نصيحة يقدمها الطبيب للمريض وليس وصفاً للألم من المريض.',
  },
];

// 5. FOUR AUTHENTIC SECONDARY 3 LISTENING COMPREHENSION TRACKS
export const FRENCH_LISTENING_TRACKS: FrenchListeningTrack[] = [
  {
    id: 'track_1_sport',
    unit: 1,
    titleFr: 'Piste 1 : Débat sur les sports classiques et extrêmes',
    titleAr: 'المقطع 1: حوار حول الرياضات التقليدية والخطيرة (نادي الرياضيين)',
    durationSec: 85,
    situationCategory: 'Unité 1 : Le club des sportifs',
    dialogueTurns: [
      {
        speaker: 'Lucas',
        speakerRoleFr: 'Lycéen sportif',
        textFr: 'Salut Thomas ! Tu viens avec moi au gymnase pour jouer au handball ce samedi ?',
        textAr: 'أهلاً توما! هل تأتي معي إلى الصالة الرياضية لنلعب كرة اليد هذا السبت؟',
      },
      {
        speaker: 'Thomas',
        speakerRoleFr: 'Adepte des sensations fortes',
        textFr: 'Le handball ? Non merci, je trouve les sports collectifs un peu classiques. Moi, je préfère le VTT en montagne et l\'escalade.',
        textAr: 'كرة اليد؟ شكراً، أجد الرياضات الجماعية كلاسيكية بعض الشيء. أنا أفضل ركوب الدراجات في الجبال والتسلق.',
      },
      {
        speaker: 'Lucas',
        speakerRoleFr: 'Lycéen sportif',
        textFr: 'Mais c\'est très dangereux ! Tu as besoin d\'un équipement spécial et d\'un casque pour ne pas te blesser.',
        textAr: 'ولكن ذلك خطير جداً! أنت بحاجة لمعدات خاصة وخوذة حتى لا تصاب بالأذى.',
      },
      {
        speaker: 'Thomas',
        speakerRoleFr: 'Adepte des sensations fortes',
        textFr: 'Exactement ! L\'entraîneur nous impose des règles strictes de sécurité. Mais l\'adrénaline est formidable. Tu devrais essayer une fois !',
        textAr: 'بالضبط! المدرب يفرض علينا قواعد سلامة صارمة. لكن الأدرينالين رائع. يجب أن تجرب ذلك مرة واحدة!',
      },
      {
        speaker: 'Lucas',
        speakerRoleFr: 'Lycéen sportif',
        textFr: 'D\'accord, si notre entraîneur est là, je viendrai avec toi dimanche prochain.',
        textAr: 'حسناً، إذا كان مدربنا موجوداً، سآتي معك الأحد القادم.',
      },
    ],
    comprehensionQuestions: [
      {
        id: 't1_q1',
        questionFr: 'Quelle activité sportive Lucas a-t-il proposée au début ?',
        questionAr: 'ما هو النشاط الرياضي الذي اقترحه لوكا في البداية؟',
        optionsFr: ['Le handball au gymnase', 'Le VTT en montagne', 'L\'escalade solo', 'La natation'],
        correctIndex: 0,
        explanationFr: 'Lucas a dit explicitement : "Tu viens avec moi au gymnase pour jouer au handball ce samedi ?".',
        explanationAr: 'قال لوكا بوضوح: هل تأتي معي للصالة لنلعب كرة اليد يوم السبت.',
      },
      {
        id: 't1_q2',
        questionFr: 'Pourquoi Thomas préfère-t-il les sports extrêmes ?',
        questionAr: 'لماذا يفضل توما الرياضات الخطيرة؟',
        optionsFr: [
          'Pour les sensations fortes et l\'adrénaline',
          'Parce qu\'il déteste le plein air',
          'Parce qu\'ils ne demandent aucun équipement',
          'Parce qu\'ils sont gratuits et sans règles',
        ],
        correctIndex: 0,
        explanationFr: 'Thomas souligne que l\'adrénaline est formidable et qu\'il aime les sensations fortes en plein air.',
        explanationAr: 'أوضح توما أنه يحب مشاعر الأدرينالين والإثارة في الجبال.',
      },
      {
        id: 't1_q3',
        questionFr: 'Quand les deux amis ont-ils finalement convenu de se retrouver ?',
        questionAr: 'متى اتفق الصديقان في النهاية على اللقاء؟',
        optionsFr: ['Dimanche prochain', 'Ce samedi matin', 'Lundi après les cours', 'Dans un mois'],
        correctIndex: 0,
        explanationFr: 'Lucas accepte à la fin : "je viendrai avec toi dimanche prochain".',
        explanationAr: 'وافق لوكا قائلاً: سآتي معك الأحد القادم بشرط تواجد المدرب.',
      },
    ],
  },
  {
    id: 'track_2_gourmands',
    unit: 2,
    titleFr: 'Piste 2 : Les courses au supermarché et le repas équilibré',
    titleAr: 'المقطع 2: التسوق في السوبرماركت والوجبة المتوازنة (نادي الأكولين)',
    durationSec: 90,
    situationCategory: 'Unité 2 : Le club des gourmands',
    dialogueTurns: [
      {
        speaker: 'Camille',
        speakerRoleFr: 'La sœur aînée',
        textFr: 'Julien, maman nous a donné la liste des courses pour le dîner familial. Tu as le chariot ?',
        textAr: 'جوليان، أعطتنا أمي قائمة المشتريات لعشاء العائلة. هل معك عربة التسوق؟',
      },
      {
        speaker: 'Julien',
        speakerRoleFr: 'Le frère cadet',
        textFr: 'Oui ! Nous devons d\'abord aller au rayon fruits et légumes pour acheter deux kilos de tomates et un kilo de concombres pour la salade.',
        textAr: 'نعم! يجب أولاً أن نذهب لقسم الفواكه والخضراوات لنشتري كيلوجرامين من الطماطم وكيلو خيار للسلطة.',
      },
      {
        speaker: 'Camille',
        speakerRoleFr: 'La sœur aînée',
        textFr: 'Ensuite, passons au rayon des produits laitiers. Il faut du fromage blanc, du beurre et du lait.',
        textAr: 'بعد ذلك، لنمر بقسم منتجات الألبان. نحتاج جبناً أبيض، زبدة، وحليباً.',
      },
      {
        speaker: 'Julien',
        speakerRoleFr: 'Le frère cadet',
        textFr: 'Et pour le dessert ? Est-ce qu\'on prend de la glace ou une tarte aux fraises ?',
        textAr: 'وماذا عن الحلوى؟ هل نأخذ مثلجات أم تارت الفراولة؟',
      },
      {
        speaker: 'Camille',
        speakerRoleFr: 'La sœur aînée',
        textFr: 'Maman a dit que les fruits frais sont plus sains. Prenons des pommes et des fraises fraîches.',
        textAr: 'قالت أمي إن الفواكه الطازجة صحية أكثر. لنأخذ تفاحاً وفراولة طازجة.',
      },
    ],
    comprehensionQuestions: [
      {
        id: 't2_q1',
        questionFr: 'Quelle quantité de tomates les deux enfants doivent-ils acheter ?',
        questionAr: 'ما هي كمية الطماطم التي يجب على الطفلين شراؤها؟',
        optionsFr: ['Deux kilos', 'Un kilo', 'Trois kilos', 'Un demi-kilo'],
        correctIndex: 0,
        explanationFr: 'Julien précise : "acheter deux kilos de tomates et un kilo de concombres".',
        explanationAr: 'ذكر جوليان: شراء كيلوجرامين من الطماطم.',
      },
      {
        id: 't2_q2',
        questionFr: 'Quels produits choisissent-ils au rayon des produits laitiers ?',
        questionAr: 'ما هي المنتجات التي يختارونها في قسم منتجات الألبان؟',
        optionsFr: ['Du fromage, du beurre et du lait', 'De la viande et du poisson', 'Du riz et des pâtes', 'Des sodas et de l\'eau minérale'],
        correctIndex: 0,
        explanationFr: 'Camille cite : "du fromage blanc, du beurre et du lait".',
        explanationAr: 'حددت كامي: الجبن الأبيض، الزبدة، والحليب.',
      },
      {
        id: 't2_q3',
        questionFr: 'Pourquoi Camille préfère-t-elle les fruits pour le dessert ?',
        questionAr: 'لماذا فضلت كامي الفواكه كحلوى؟',
        optionsFr: ['Parce qu\'ils sont plus sains', 'Parce qu\'elle déteste la glace', 'Parce que la boulangerie est fermée', 'Parce qu\'ils n\'ont pas assez d\'argent'],
        correctIndex: 0,
        explanationFr: 'Camille explique que sa mère a souligné que les fruits frais sont plus sains pour la santé.',
        explanationAr: 'أوضحت كامي أن الفواكه الطازجة خيار صحي أكثر للجسم.',
      },
    ],
  },
  {
    id: 'track_3_explorateurs',
    unit: 3,
    titleFr: 'Piste 3 : Un week-end inoubliable à la campagne',
    titleAr: 'المقطع 3: عطلة نهاية أسبوع لا تُنسى في الريف (نادي المستكشفين)',
    durationSec: 80,
    situationCategory: 'Unité 3 : Le club des explorateurs',
    dialogueTurns: [
      {
        speaker: 'Nathalie',
        speakerRoleFr: 'Lycéenne parisienne',
        textFr: 'Antoine, comment s\'est passé ton séjour chez tes grands-parents le week-end dernier ?',
        textAr: 'أنطوان، كيف قضيت إقامتك عند جديك في عطلة نهاية الأسبوع الماضي؟',
      },
      {
        speaker: 'Antoine',
        speakerRoleFr: 'Amoureux de la nature',
        textFr: 'C\'était magnifique ! Samedi matin, je me suis levé tôt et je suis allé à la ferme. J\'ai donné à manger aux lapins et j\'ai ramassé des œufs frais.',
        textAr: 'كانت رائعة! صباح السبت، استيقظت مبكراً وذهبت إلى المزرعة. أطعمت الأرانب وجمعت بيضاً طازجاً.',
      },
      {
        speaker: 'Nathalie',
        speakerRoleFr: 'Lycéenne parisienne',
        textFr: 'Génial ! Et est-ce que tu as fait du cheval ?',
        textAr: 'رائع! وهل ركبت الخيل؟',
      },
      {
        speaker: 'Antoine',
        speakerRoleFr: 'Amoureux de la nature',
        textFr: 'Oui, mon grand-père a une jument très calme. Je suis monté à cheval dans les champs. L\'air pur de la campagne est reposant, loin de la pollution de la ville.',
        textAr: 'نعم، لدى جدي فرس هادئة جداً. ركبت الخيل في الحقول. الهواء النقي في الريف مريح للغاية، بعيداً عن تلوث المدينة.',
      },
    ],
    comprehensionQuestions: [
      {
        id: 't3_q1',
        questionFr: 'Qu\'a fait Antoine samedi matin dès son réveil ?',
        questionAr: 'ماذا فعل أنطوان صباح السبت فور استيقاظه؟',
        optionsFr: [
          'Il a nourri les lapins et ramassé les œufs',
          'Il a pris le train pour Paris',
          'Il a réparé le tracteur de son grand-père',
          'Il est resté dormir jusqu\'à midi',
        ],
        correctIndex: 0,
        explanationFr: 'Antoine mentionne : "J\'ai donné à manger aux lapins et j\'ai ramassé des œufs frais".',
        explanationAr: 'ذكر أنطوان إطعام الأرانب وجمع البيض الطازج في الصباح الباكر.',
      },
      {
        id: 't3_q2',
        questionFr: 'Quel animal Antoine a-t-il monté dans les champs ?',
        questionAr: 'أي حيوان ركبه أنطوان في الحقول؟',
        optionsFr: ['Le cheval (une jument calme)', 'L\'âne', 'Le taureau', 'Le dromadaire'],
        correctIndex: 0,
        explanationFr: 'Antoine a dit : "mon grand-père a une jument très calme. Je suis monté à cheval".',
        explanationAr: 'ركب أنطوان الفرس في حقول المزرعة.',
      },
    ],
  },
  {
    id: 'track_4_voyageurs',
    unit: 4,
    titleFr: 'Piste 4 : À la gare et consultation médicale',
    titleAr: 'المقطع 4: في محطة القطار وعند الطبيب (نادي المسافرين)',
    durationSec: 95,
    situationCategory: 'Unité 4 : Le club des voyageurs',
    dialogueTurns: [
      {
        speaker: 'Marc',
        speakerRoleFr: 'Voyageur souffrant',
        textFr: 'Bonjour madame. Je voudrais un billet de TGV en seconde classe pour Lyon, départ vers 14 heures.',
        textAr: 'صباح الخير سيدتي. أريد تذكرة قطار سريع TGV بالدرجة الثانية إلى ليون، المغادرة حوالي الساعة الثانية ظهراً.',
      },
      {
        speaker: 'L\'employée',
        speakerRoleFr: 'Guichetière SNCF',
        textFr: 'Voilà monsieur. Le train part de la voie 4 à 14h15. Bon voyage !',
        textAr: 'تفضل يا سيدي. القطار يغادر من الرصيف رقم 4 في الساعة 14:15. رحلة سعيدة!',
      },
      {
        speaker: 'Marc',
        speakerRoleFr: 'Chez le médecin à Lyon',
        textFr: 'Docteur, depuis mon voyage, j\'ai très mal à la gorge et aux oreilles. Je tousse beaucoup.',
        textAr: 'يا دكتور، منذ رحلتي وأنا أعاني من ألم شديد في الحلق والأذنين وأسعل كثيراً.',
      },
      {
        speaker: 'Le Médecin',
        speakerRoleFr: 'Docteur',
        textFr: 'Vous avez une grippe avec un coup de froid. Ne sortez pas le soir, buvez beaucoup de tisane chaude et prenez ces comprimés matin et soir.',
        textAr: 'أنت مصاب بنزلة برد وإنفلونزا. لا تخرج في المساء، اشرب الكثير من المشروبات العشبية الساخنة وتناول هذه الأقراص صباحاً ومساءً.',
      },
    ],
    comprehensionQuestions: [
      {
        id: 't4_q1',
        questionFr: 'Pour quelle destination Marc a-t-il acheté son billet de train ?',
        questionAr: 'إلى أي وجهة اشترى مارك تذكرته؟',
        optionsFr: ['Lyon', 'Marseille', 'Bordeaux', 'Nice'],
        correctIndex: 0,
        explanationFr: 'Marc a demandé expressément : "un billet de TGV en seconde classe pour Lyon".',
        explanationAr: 'طلب مارك تذكرة قطار سريع متجهة إلى مدينة ليون.',
      },
      {
        id: 't4_q2',
        questionFr: 'De quoi Marc souffre-t-il pendant sa consultation ?',
        questionAr: 'مما يعاني مارك أثناء الكشف الطبي؟',
        optionsFr: ['Mal à la gorge et aux oreilles', 'Mal aux dents et au ventre', 'Une jambe cassée', 'Mal aux yeux'],
        correctIndex: 0,
        explanationFr: 'Marc se plaint : "j\'ai très mal à la gorge et aux oreilles. Je tousse beaucoup".',
        explanationAr: 'اشتكى مارك من ألم الحلق والأذنين مع السعال.',
      },
      {
        id: 't4_q3',
        questionFr: 'Quel conseil le médecin lui donne-t-il à la fin ?',
        questionAr: 'ما هي النصيحة التي قدمها الطبيب له في النهاية؟',
        optionsFr: [
          'Boire des boissons chaudes et ne pas sortir le soir',
          'Faire du jogging sous la pluie',
          'Voyager immédiatement en avion',
          'Manger des glaces froides',
        ],
        correctIndex: 0,
        explanationFr: 'Le médecin prescrit : "Ne sortez pas le soir, buvez beaucoup de tisane chaude".',
        explanationAr: 'أمره الطبيب بعدم الخروج ليلاً وشرب المشروبات الساخنة والراحة.',
      },
    ],
  },
];
