export interface IrabToken {
  word: string;
  roleAr: string;
  roleEn: string;
  caseAr: string;
  markerAr: string;
  isSubstitutedMarker?: boolean;
  explanationAr: string;
  ruleCitationAr: string;
}

export interface IrabSentence {
  id: string;
  category: 'special_styles' | 'derivatives' | 'verbs_syntax' | 'particles_traps';
  titleAr: string;
  titleEn: string;
  fullSentence: string;
  tokens: IrabToken[];
  pedagogicalTipAr: string;
}

export interface DerivativeRule {
  id: string;
  nameAr: string;
  nameEn: string;
  patternFormula: string;
  triLiteralRuleAr: string;
  nonTriLiteralRuleAr: string;
  agentivityConditionsAr: string[];
  operativeEffectAr: string;
  examples: {
    word: string;
    root: string;
    sentence: string;
    operativeRole: string;
    operativeMarker: string;
  }[];
}

export interface RhetoricalFigure {
  id: string;
  tropeType: 'bayan' | 'badi' | 'maani';
  nameAr: string;
  nameEn: string;
  definitionAr: string;
  beautySecretAr: 'تشخيص' | 'تجسيم' | 'توضيح' | 'إثارة الذهن وجذب الانتباه' | 'إعطاء جرس موسيقي';
  examples: {
    verseOrProse: string;
    sourceAr: string;
    analysisAr: string;
    tropeSubtypeAr: string;
  }[];
}

export interface OrthographyTrapRule {
  id: string;
  titleAr: string;
  titleEn: string;
  ruleExplanationAr: string;
  inflectionMatrix: {
    stateAr: string;
    spelling: string;
    exampleSentence: string;
    grammaticalReasonAr: string;
  }[];
  commonMistakes: {
    incorrect: string;
    correct: string;
    whyIncorrectAr: string;
  }[];
}

export interface ExamTrapItem {
  id: string;
  questionAr: string;
  verseOrSentence: string;
  optionsAr: string[];
  correctIndex: number;
  trapAnalysisAr: string;
  ministerialYear: string;
}

export const ARABIC_IRAB_SENTENCES: IrabSentence[] = [
  {
    id: 'irab_01',
    category: 'special_styles',
    titleAr: 'أسلوب الاختصاص وإعراب المختص',
    titleEn: 'Specialty Style (Ikhtisas)',
    fullSentence: 'نحنُ - المصرِيِّينَ - أوفياءُ لوطنِنا المفدَّى.',
    pedagogicalTipAr: 'المختص يأتي بعد ضمير متكلم أو مخاطب، ويكون معرفاً بأل أو مضافاً لمعرفة، وإعرابه دائماً مفعول به لفعل محذوف وجوباً تقديره (أخص أو أعني).',
    tokens: [
      {
        word: 'نحنُ',
        roleAr: 'ضمير منفصل مبني على الضم في محل رفع مبتدأ',
        roleEn: 'Subject pronoun in nominative place',
        caseAr: 'في محل رفع',
        markerAr: 'مبني على الضم',
        explanationAr: 'ضمير المتكلمين مبني على الضم في محل رفع مبتدأ أول الجملة.',
        ruleCitationAr: 'الضمائر المنفصلة تقع غالباً في محل رفع مبتدأ.',
      },
      {
        word: 'المصريينَ',
        roleAr: 'مفعول به منصوب على الاختصاص',
        roleEn: 'Accusative object of elided verb (Specifier)',
        caseAr: 'منصوب',
        markerAr: 'الياء (علامة فرعية)',
        isSubstitutedMarker: true,
        explanationAr: 'مفعول به لفعل محذوف وجوباً تقديره (أخص) وعلامة نصبه الياء لأنه جمع مذكر سالم، والجملة اعتراضية لا محل لها.',
        ruleCitationAr: 'اسم منصوب يقع بعد ضمير ليفسره ويخصصه.',
      },
      {
        word: 'أوفياءُ',
        roleAr: 'خبر المبتدأ (نحن)',
        roleEn: 'Predicate of the subject pronoun',
        caseAr: 'مرفوع',
        markerAr: 'الضمة الظاهرة',
        explanationAr: 'خبر المبتدأ مرفوع بالضمة الظاهرة على آخره وهو متمم لمعنى الجملة.',
        ruleCitationAr: 'الخبر هو الجزء المتمم للفائدة مع المبتدأ.',
      },
      {
        word: 'لوطنِنا',
        roleAr: 'اللام حرف جر، وطن اسم مجرور، و(نا) مضاف إليه',
        roleEn: 'Prepositional phrase + attached possessive pronoun',
        caseAr: 'مجرور بالكسرة',
        markerAr: 'الكسرة الظاهرة',
        explanationAr: 'شبه جملة متعلقة بالخبر أوفياء، والضمير المتصل في محل جر مضاف إليه.',
        ruleCitationAr: 'الضمائر المتصلة بالأسماء في محل جر مضاف إليه دائماً.',
      },
      {
        word: 'المفدَّى',
        roleAr: 'نعت مجرور لوطن',
        roleEn: 'Attributive adjective (Na\'t)',
        caseAr: 'مجرور',
        markerAr: 'الكسرة المقدرة منع من ظهورها التعذر',
        explanationAr: 'نعت يتبع المنعوت (لوطننا) في التعريف والجر، وعلامته مقدرة لأنه اسم مقصور.',
        ruleCitationAr: 'الاسم المقصور تُقدر عليه جميع حركات الإعراب للتعذر.',
      },
    ],
  },
  {
    id: 'irab_02',
    category: 'special_styles',
    titleAr: 'أسلوب الإغراء المعطوف',
    titleEn: 'Exhortation Style (Ighra\')',
    fullSentence: 'الاجتهادَ والعملَ؛ فإنَّهما طريقُ الفلاحِ.',
    pedagogicalTipAr: 'إذا جاء المغرب به مكرراً أو معطوفاً، يجب حذف الفعل العامل وجوباً (تقديره الزم)، أما إذا كان مفرداً فيجوز حذفه وإظهاره.',
    tokens: [
      {
        word: 'الاجتهادَ',
        roleAr: 'مفعول به منصوب على الإغراء',
        roleEn: 'Direct object of elided imperative verb',
        caseAr: 'منصوب',
        markerAr: 'الفتحة الظاهرة',
        explanationAr: 'مغرى به منصوب بفعل محذوف وجوباً تقديره (الزم) لأن الأسلوب جاء معطوفاً.',
        ruleCitationAr: 'يُحذف فعل الإغراء والتحذير وجوباً مع التكرار والعطف.',
      },
      {
        word: 'والعملَ',
        roleAr: 'الواو حرف عطف، والعمل اسم معطوف منصوب',
        roleEn: 'Conjunction + coordinated accusative noun',
        caseAr: 'منصوب',
        markerAr: 'الفتحة الظاهرة',
        explanationAr: 'معطوف على الاجتهاد منصوب مثله وعلامة نصبه الفتحة.',
        ruleCitationAr: 'المعطوف بحرف العطف يتبع المعطوف عليه في حكمه الإعرابي.',
      },
      {
        word: 'فإنَّهما',
        roleAr: 'الفاء تعليلية، إنَّ حرف ناسخ، وهما اسمها',
        roleEn: 'Explanatory Fa + Inna particle with attached accusative pronoun',
        caseAr: 'اسم إن في محل نصب',
        markerAr: 'ضمير مبني في محل نصب',
        explanationAr: 'إن حرف توكيد ونصب ينصب المبتدأ ويرفع الخبر.',
        ruleCitationAr: 'إنَّ وأخواتها تنصب المبتدأ وترفع الخبر.',
      },
      {
        word: 'طريقُ',
        roleAr: 'خبر إنَّ مرفوع',
        roleEn: 'Predicate of Inna particle',
        caseAr: 'مرفوع',
        markerAr: 'الضمة الظاهرة',
        explanationAr: 'خبر إن مرفوع بالضمة الظاهرة على آخره.',
        ruleCitationAr: 'خبر إن وأخواتها يكون مرفوعاً.',
      },
      {
        word: 'الفلاحِ',
        roleAr: 'مضاف إليه مجرور',
        roleEn: 'Genitive construct (Mudaf Ilayh)',
        caseAr: 'مجرور',
        markerAr: 'الكسرة الظاهرة',
        explanationAr: 'اسم معرفة بعد نكرة غير منونة يوضحها ويخصصها.',
        ruleCitationAr: 'المضاف إليه حكمه الجر دائماً.',
      },
    ],
  },
  {
    id: 'irab_03',
    category: 'verbs_syntax',
    titleAr: 'اقتران جواب الشرط بالفاء وجزمه',
    titleEn: 'Conditional Apodosis with Fa Binding',
    fullSentence: 'مَن يَسعَ في الخيرِ فإنَّه فائزٌ برضا اللهِ.',
    pedagogicalTipAr: 'إذا اقترن جواب الشرط بالفاء وكانت أداة الشرط جازمة، فإن الفعل بعد الفاء يعرب حسب موقعه وتكون الجملة بأكملها في محل جزم.',
    tokens: [
      {
        word: 'مَن',
        roleAr: 'اسم شرط جازم مبني في محل رفع مبتدأ',
        roleEn: 'Conditional particle in nominative place',
        caseAr: 'في محل رفع',
        markerAr: 'مبني على السكون',
        explanationAr: 'اسم شرط يجزم فعلين: فعل الشرط وجواب الشرط، وموقعه هنا مبتدأ.',
        ruleCitationAr: 'أدوات الشرط الجازمة تجزم فعلين مضارعين.',
      },
      {
        word: 'يَسعَ',
        roleAr: 'فعل الشرط مضارع مجزوم',
        roleEn: 'Jussive conditional verb',
        caseAr: 'مجزوم',
        markerAr: 'حذف حرف العلة (الألف) - علامة فرعية',
        isSubstitutedMarker: true,
        explanationAr: 'فعل مضارع مجزوم بمن وعلامة جزمه حذف حرف العلة (الألف اللينة)، والفاعل ضمير مستتر تقديره هو.',
        ruleCitationAr: 'يجزم المضارع المعتل الآخر بحذف حرف العلة.',
      },
      {
        word: 'في الخيرِ',
        roleAr: 'جار ومجرور متعلقان بالفعل يسعى',
        roleEn: 'Prepositional modifier',
        caseAr: 'مجرور بالكسرة',
        markerAr: 'الكسرة الظاهرة',
        explanationAr: 'شبه جملة في محل نصب حال أو متعلقة بالفعل.',
        ruleCitationAr: 'الجار والمجرور يتعلقان بما يسبقهما من فعل أو شبهه.',
      },
      {
        word: 'فإنَّه',
        roleAr: 'الفاء واقعة في جواب الشرط، وإن والهاء اسمها',
        roleEn: 'Binding Fa + Inna and attached pronoun',
        caseAr: 'جملة جواب الشرط',
        markerAr: 'الفاء رابطة وجوباً',
        explanationAr: 'اقترن جواب الشرط بالفاء وجوباً لأن الجملة اسمية (بيت الشعر: اسميةٌ طلبيةٌ وبجامدٍ وبما ولن وبقد وبالتسويف).',
        ruleCitationAr: 'يجب اقتران جواب الشرط بالفاء إذا كانت الجملة اسمية مثبتة أو منفية.',
      },
      {
        word: 'فائزٌ',
        roleAr: 'خبر إنَّ مرفوع، والجملة الاسمية في محل جزم',
        roleEn: 'Predicate of Inna; whole sentence in jussive place',
        caseAr: 'مرفوع / الجملة في محل جزم',
        markerAr: 'الضمة الظاهرة',
        explanationAr: 'خبر إن مرفوع، وجملة (فإنه فائز) في محل جزم جواب الشرط لأداة جازمة مقترنة بالفاء.',
        ruleCitationAr: 'جملة جواب الشرط تكون في محل جزم بشرطين: أن تكون الأداة جازمة ومقترنة بالفاء.',
      },
    ],
  },
  {
    id: 'irab_04',
    category: 'derivatives',
    titleAr: 'إعمال اسم الفاعل وسد المعمول مسد الخبر',
    titleEn: 'Operative Active Participle & Subject',
    fullSentence: 'أمُقدِّرٌ المعلِّمُ جهودَ طلَّابِهِ المخلصينَ؟',
    pedagogicalTipAr: 'اسم الفاعل النكرة إذا سبق باستفهام أو نفي ودل على الحال أو الاستقبال يعمل عمل فعله، ويرفع فاعلاً يسد مسد الخبر.',
    tokens: [
      {
        word: 'أَ',
        roleAr: 'همزة الاستفهام حرف مبني لا محل له من الإعراب',
        roleEn: 'Interrogative letter without syntactic function',
        caseAr: 'لا محل له من الإعراب',
        markerAr: 'مبني على الفتح',
        explanationAr: 'حرف استفهام يفيد الطلب ولا يغير حركة ما بعده.',
        ruleCitationAr: 'الحروف كلها مبنية لا محل لها من الإعراب.',
      },
      {
        word: 'مُقدِّرٌ',
        roleAr: 'مبتدأ مرفوع (اسم فاعل عامل)',
        roleEn: 'Subject noun (Operative active participle)',
        caseAr: 'مرفوع',
        markerAr: 'الضمة الظاهرة',
        explanationAr: 'مبتدأ مرفوع وهو اسم فاعل عامل لكونه منوناً واعتمد على استفهام.',
        ruleCitationAr: 'يعمل المشتق النكرة إذا اعتمد على نفي أو استفهام أو مبتدأ.',
      },
      {
        word: 'المعلِّمُ',
        roleAr: 'فاعل لاسم الفاعل سدَّ مسدَّ الخبر',
        roleEn: 'Agent fulfilling the predicate role',
        caseAr: 'مرفوع',
        markerAr: 'الضمة الظاهرة',
        explanationAr: 'فاعل مرفوع بالضمة لاسم الفاعل (مقدّر) وقد أغنى عن الخبر وسد مسده.',
        ruleCitationAr: 'المشتق المسبوق بنفي أو استفهام يرفع فاعلاً يسد مسد الخبر.',
      },
      {
        word: 'جهودَ',
        roleAr: 'مفعول به لاسم الفاعل العامل',
        roleEn: 'Direct object of the active participle',
        caseAr: 'منصوب',
        markerAr: 'الفتحة الظاهرة',
        explanationAr: 'مفعول به لاسم الفاعل منصوب وعلامة نصبه الفتحة الظاهرة.',
        ruleCitationAr: 'اسم الفاعل المتعدي ينصب مفعولاً به كفعله المضارع.',
      },
      {
        word: 'المخلصينَ',
        roleAr: 'نعت مجرور للطلاب',
        roleEn: 'Adjective agreeing in genitive case',
        caseAr: 'مجرور',
        markerAr: 'الياء (علامة فرعية)',
        isSubstitutedMarker: true,
        explanationAr: 'نعت مجرور بالياء لأنه جمع مذكر سالم، تبع المنعوت (طلابه) في الإعراب والتعريف.',
        ruleCitationAr: 'النعت يتبع المنعوت في الإعراب والتعريف والتنكير والتذكير والتأنيث والعدد.',
      },
    ],
  },
  {
    id: 'irab_05',
    category: 'particles_traps',
    titleAr: 'حرف الجر الزائد في خبر ليس وفاعل كفى',
    titleEn: 'Superfluous Prepositions (Zā\'idah)',
    fullSentence: 'ليسَ التَّخاذُلُ بمحمودٍ، وكفَى باللهِ شهيداً.',
    pedagogicalTipAr: 'حروف الجر الزائدة تجر الاسم لفظاً مع بقاء محله الإعرابي الأصلي، فما بعدها يكون مجروراً لفظاً مرفوعاً أو منصوباً محلاً.',
    tokens: [
      {
        word: 'ليسَ',
        roleAr: 'فعل ماضٍ جامد ناقص ناسخ',
        roleEn: 'Defective auxiliary verb of negation',
        caseAr: 'مبني على الفتح',
        markerAr: 'فعل ناقص ناسخ',
        explanationAr: 'فعل ناسخ من أخوات كان يرفع المبتدأ وينصب الخبر.',
        ruleCitationAr: 'كان وأخواتها أفعال ناسخة ناقصة تدخل على الجملة الاسمية.',
      },
      {
        word: 'التَّخاذُلُ',
        roleAr: 'اسم ليس مرفوع',
        roleEn: 'Subject of Laysa',
        caseAr: 'مرفوع',
        markerAr: 'الضمة الظاهرة',
        explanationAr: 'اسم ليس مرفوع بالضمة الظاهرة على آخره.',
        ruleCitationAr: 'اسم ليس مرفوع دائماً.',
      },
      {
        word: 'بمحمودٍ',
        roleAr: 'الباء زائدة، ومحمود خبر ليس مجرور لفظاً منصوب محلاً',
        roleEn: 'Preposition of emphasis + predicate in accusative place',
        caseAr: 'منصوب محلاً مجرور لفظاً',
        markerAr: 'مجرور لفظاً بالكسرة منصوب محلاً بالفتحة المقدرة',
        explanationAr: 'الباء حرف جر زائد يفيد التوكيد، ومحمود خبر ليس مفرد وليس شبه جملة لأن حرف الجر زائد.',
        ruleCitationAr: 'نوع الخبر مع حرف الجر الزائد يكون خبراً مفرداً وليس شبه جملة.',
      },
      {
        word: 'باللهِ',
        roleAr: 'الباء زائدة، ولفظ الجلالة فاعل مجرور لفظاً مرفوع محلاً',
        roleEn: 'Superfluous Ba + agent of Kafa in nominative place',
        caseAr: 'مرفوع محلاً مجرور لفظاً',
        markerAr: 'مجرور لفظاً بالكسرة مرفوع محلاً بالضمة المقدرة',
        explanationAr: 'لفظ الجلالة فاعل للفعل (كفى) مجرور لفظاً بحرف الجر الزائد مرفوع محلاً.',
        ruleCitationAr: 'تزاد الباء وجوباً أو غلبة في فاعل كفى إذا كان مجرداً من مفعوله المتعدي.',
      },
      {
        word: 'شهيداً',
        roleAr: 'تمييز منصوب وعلامة نصبه الفتحة',
        roleEn: 'Accusative specification (Tamyiz)',
        caseAr: 'منصوب',
        markerAr: 'الفتحة الظاهرة',
        explanationAr: 'الاسم النكرة المنصوب بعد كفى يعرب تمييزاً ملحوظاً منصوباً بالفتحة.',
        ruleCitationAr: 'الاسم المنون المنصوب الواقع بعد كفى يعرب تمييزاً.',
      },
    ],
  },
  {
    id: 'irab_06',
    category: 'special_styles',
    titleAr: 'أسلوب الاستثناء الناقص المنفي (المفرغ)',
    titleEn: 'Defective Negative Exception (Istithna Mufarragh)',
    fullSentence: 'ما فازَ في المسابقةِ إلا المجدُّونَ.',
    pedagogicalTipAr: 'في الاستثناء المفرغ (الناقص المنفي)، احذف (ما) و(إلا) ذهنياً لتعرف إعراب ما بعد إلا؛ هنا: فاز المجدون -> فاعل مرفوع.',
    tokens: [
      {
        word: 'ما',
        roleAr: 'حرف نفي مبني على السكون لا محل له من الإعراب',
        roleEn: 'Particle of negation',
        caseAr: 'لا محل له',
        markerAr: 'مبني على السكون',
        explanationAr: 'حرف نفي غير عامل هنا لوجود إلا وإلغاء عمل النفي.',
        ruleCitationAr: 'حروف المعاني كلها مبنية لا محل لها من الإعراب.',
      },
      {
        word: 'فازَ',
        roleAr: 'فعل ماضٍ مبني على الفتح الظاهر',
        roleEn: 'Past tense verb',
        caseAr: 'مبني على الفتح',
        markerAr: 'الفتحة الظاهرة',
        explanationAr: 'فعل ماض تام مبني على الفتح لم يتصل به شيء.',
        ruleCitationAr: 'الفعل الماضي يبنى على الفتح إذا لم يتصل به ضمير رفع متحرك أو واو الجماعة.',
      },
      {
        word: 'في المسابقةِ',
        roleAr: 'شبه جملة جار ومجرور متعلق بالفعل فاز',
        roleEn: 'Prepositional phrase',
        caseAr: 'مجرور بالكسرة',
        markerAr: 'الكسرة الظاهرة',
        explanationAr: 'في حرف جر، والمسابقة اسم مجرور بالكسرة الظاهرة.',
        ruleCitationAr: 'الجار والمجرور يتعلق بالفعل أو بما يشبهه.',
      },
      {
        word: 'إلا',
        roleAr: 'أداة حصر واستثناء ملغاة لا عمل لها',
        roleEn: 'Particle of restriction (Hasr)',
        caseAr: 'لا عمل لها',
        markerAr: 'مبنية على السكون',
        explanationAr: 'أداة حصر غير عاملة لأن الكلام ناقص منفي.',
        ruleCitationAr: 'تُلغى إلا في الكلام الناقص المنفي وتفيد القصر والحصر.',
      },
      {
        word: 'المجدُّونَ',
        roleAr: 'فاعل مرفوع للفعل (فاز)',
        roleEn: 'Agent/Subject of verb (Fa\'il)',
        caseAr: 'مرفوع',
        markerAr: 'الواو (علامة فرعية)',
        isSubstitutedMarker: true,
        explanationAr: 'فاعل مرفوع وعلامة رفعه الواو لأنه جمع مذكر سالم، وأصل الترتيب: فاز المجدون في المسابقة.',
        ruleCitationAr: 'ما بعد إلا في الكلام الناقص المنفي يعرب حسب موقعه في الجملة كأنه لا نفي ولا استثناء.',
      },
    ],
  },
  {
    id: 'irab_07',
    category: 'special_styles',
    titleAr: 'الممنوع من الصرف المجرور بالفتحة',
    titleEn: 'Diptote Noun (Mamnu min al-Sarf)',
    fullSentence: 'صَلَّيتُ في مساجدَ أثريةٍ بمصرَ.',
    pedagogicalTipAr: 'الممنوع من الصرف يجر بالفتحة نيابة عن الكسرة بشرطين: أن يتجرد من (أل) التعريفية، وأن يتجرد من الإضافة.',
    tokens: [
      {
        word: 'صَلَّيتُ',
        roleAr: 'فعل ماضٍ مبني على السكون لاتصاله بتاء الفاعل، والتاء ضمير متصل مبني في محل رفع فاعل',
        roleEn: 'Past verb + attached subjective pronoun',
        caseAr: 'مبني على السكون (الفعل) / رفع (الفاعل)',
        markerAr: 'السكون لاتصاله بضمير الرفع',
        explanationAr: 'اتصل الفعل الماضي بضمير الرفع المتحرك فبُني على السكون، والتاء فاعل.',
        ruleCitationAr: 'يبنى الفعل الماضي على السكون إذا اتصل به ضمير رفع متحرك (تاء الفاعل، ناء الفاعلين، نون النسوة).',
      },
      {
        word: 'في',
        roleAr: 'حرف جر مبني على السكون لا محل له من الإعراب',
        roleEn: 'Preposition',
        caseAr: 'لا محل له',
        markerAr: 'مبني على السكون',
        explanationAr: 'حرف جر يفيد الظرفية المكانية.',
        ruleCitationAr: 'حروف الجر تجر الأسماء التي تليها.',
      },
      {
        word: 'مساجدَ',
        roleAr: 'اسم مجرور وعلامة جره الفتحة نيابة عن الكسرة',
        roleEn: 'Diptote noun in genitive marked by Fatha',
        caseAr: 'مجرور بالفتحة نيابة عن الكسرة',
        markerAr: 'الفتحة (علامة فرعية)',
        isSubstitutedMarker: true,
        explanationAr: 'صيغة منتهى الجموع على وزن (مفاعل) مجردة من أل والإضافة، فتجر بالفتحة نيابة عن الكسرة.',
        ruleCitationAr: 'صيغة منتهى الجموع تمنع من الصرف لعِلة واحدة وتجر بالفتحة إن خلت من أل والإضافة.',
      },
      {
        word: 'أثريةٍ',
        roleAr: 'نعت لمساجد مجرور وعلامة جره الكسرة الظاهرة',
        roleEn: 'Attributive adjective (Na\'t) with Kasra',
        caseAr: 'مجرور بالكسرة',
        markerAr: 'الكسرة الظاهرة',
        explanationAr: 'نعت يتبع المنعوت (مساجد) في حكم الجر، ولكن بعلامته الأصلية (الكسرة) لأنه مصروف.',
        ruleCitationAr: 'النعت يتبع المنعوت في الإعراب الإجمالي (الجر) وليس في عين العلامة الفرعية.',
      },
      {
        word: 'بمصرَ',
        roleAr: 'الباء حرف جر، ومصر اسم مجرور بالفتحة نيابة عن الكسرة',
        roleEn: 'Preposition + diptote proper noun',
        caseAr: 'مجرور بالفتحة',
        markerAr: 'الفتحة الظاهرة (علامة فرعية)',
        isSubstitutedMarker: true,
        explanationAr: 'علم مؤنث ثلاثي ساكن الوسط يجوز منعه ويجوز صرفه، وهنا جُر بالفتحة على المنع.',
        ruleCitationAr: 'العلم المؤنث الثلاثي ساكن الوسط يجوز فيه الصرف والمنع.',
      },
    ],
  },
  {
    id: 'irab_08',
    category: 'verbs_syntax',
    titleAr: 'اقتران جواب الشرط بالفاء وجزم المضارع',
    titleEn: 'Conditional Apodosis with Fa & Jussive Verbs',
    fullSentence: 'مَن يتَّقِ اللهَ فسينالُ رِضاهُ.',
    pedagogicalTipAr: 'إذا اقترن جواب الشرط بالفاء (اسمية طلبية وبجامد وبما ولن وقد وبالتسويف)، فإن الفعل المضارع بعد الفاء والسين يعرب حسب موقعه مرفوعاً، وتكون الجملة كلها في محل جزم.',
    tokens: [
      {
        word: 'مَن',
        roleAr: 'اسم شرط جازم مبني على السكون في محل رفع مبتدأ',
        roleEn: 'Conditional particle in nominative place',
        caseAr: 'في محل رفع',
        markerAr: 'مبني على السكون',
        explanationAr: 'اسم شرط جازم يجزم فعلين: فعل الشرط وجواب الشرط.',
        ruleCitationAr: 'أسماء الشرط الجازمة تجزم فعلين، وإذا تلاها فعل متعد استوفى مفعوله تعرب غالباً مبتدأ.',
      },
      {
        word: 'يتَّقِ',
        roleAr: 'فعل الشرط مضارع مجزوم بحذف حرف العلة',
        roleEn: 'Jussive conditional verb with elided vowel',
        caseAr: 'مجزوم',
        markerAr: 'حذف حرف العلة (علامة فرعية)',
        isSubstitutedMarker: true,
        explanationAr: 'أصله (يتقي)، جُزم بحذف الياء، والكسرة دليل على الياء المحذوفة، والفاعل ضمير مستتر تقديره (هو).',
        ruleCitationAr: 'يجزم المضارع معتل الآخر بحذف حرف العلة.',
      },
      {
        word: 'اللهَ',
        roleAr: 'لفظ الجلالة مفعول به منصوب',
        roleEn: 'Accusative object of verb',
        caseAr: 'منصوب',
        markerAr: 'الفتحة الظاهرة',
        explanationAr: 'لفظ الجلالة مفعول به منصوب للفعل يتق.',
        ruleCitationAr: 'المفعول به هو الاسم المنصوب الذي وقع عليه فعل الفاعل.',
      },
      {
        word: 'فسينالُ',
        roleAr: 'الفاء واقعة في جواب الشرط، والسين للتسويف، وينال فعل مضارع مرفوع',
        roleEn: 'Fa of condition + future particle + nominative indicative verb',
        caseAr: 'مرفوع (والجملة في محل جزم)',
        markerAr: 'الضمة الظاهرة',
        explanationAr: 'اقترن الجواب بالفاء وجوباً لوجود السين، والفعل بعد السين مرفوع بالضمة، والجملة الاسمية/الفعلية (فسينال) في محل جزم جواب الشرط.',
        ruleCitationAr: 'يقترن جواب الشرط بالفاء وجوباً مع السين وسوف، ويعرب المضارع بعدها مرفوعاً وتكون الجملة في محل جزم.',
      },
      {
        word: 'رِضاهُ',
        roleAr: 'مفعول به منصوب بالفتحة المقدرة، والهاء مضاف إليه',
        roleEn: 'Object with estimated fatha + attached pronoun',
        caseAr: 'منصوب',
        markerAr: 'الفتحة المقدرة للتعذر',
        explanationAr: 'رضا اسم مقصور مفعول به للفعل ينال منصوب بفتحة مقدرة، والهاء ضمير متصل مبني في محل جر مضاف إليه.',
        ruleCitationAr: 'الأسماء المقصورة تعرب بحركات مقدرة رفعاً ونصباً وجراً.',
      },
    ],
  },
  {
    id: 'irab_09',
    category: 'particles_traps',
    titleAr: 'لا النافية للجنس وإعمال المشتق الشبيه بالمضاف',
    titleEn: 'Absolute Negation La with Semi-Annexed Noun',
    fullSentence: 'لا طالباً علماً مقصِّرٌ في واجبهِ.',
    pedagogicalTipAr: 'اسم لا النافية للجنس إذا كان شبيهاً بالمضاف يكون منوناً معرباً منصوباً، والمشتق بعده يعمل عمل فعله (علماً مفعول به لاسم الفاعل).',
    tokens: [
      {
        word: 'لا',
        roleAr: 'نافية للجنس حرف مبني على السكون يعمل عمل إن',
        roleEn: 'Particle of absolute negation acting like Inna',
        caseAr: 'حرف ناسخ',
        markerAr: 'مبني على السكون',
        explanationAr: 'تعمل عمل إن فتنصب الاسم وترفع الخبر بشروطها المعروفة.',
        ruleCitationAr: 'لا النافية للجنس تنفي الخبر عن جنس اسمها نفياً قاطعاً وتعمل عمل إن.',
      },
      {
        word: 'طالباً',
        roleAr: 'اسم لا النافية للجنس شبيه بالمضاف منصوب',
        roleEn: 'Accusative noun of La (Semi-annexed)',
        caseAr: 'منصوب',
        markerAr: 'الفتحة الظاهرة مع التنوين',
        explanationAr: 'شبيه بالمضاف لأنه اتصل به ما يتمم معناه وهو منون (اسم فاعل عامل).',
        ruleCitationAr: 'اسم لا يكون معرباً منصوباً إذا كان مضافاً أو شبيهاً بالمضاف.',
      },
      {
        word: 'علماً',
        roleAr: 'مفعول به لاسم الفاعل العامل (طالباً)',
        roleEn: 'Accusative object of operative active participle',
        caseAr: 'منصوب',
        markerAr: 'الفتحة الظاهرة',
        explanationAr: 'طالباً يعمل عمل فعله (يطلب علماً)، فعلماً مفعول به لاسم الفاعل منصوب وعلامة نصبه الفتحة.',
        ruleCitationAr: 'يعمل اسم الفاعل النكرة عمل فعله إذا دل على الحال أو الاستقبال واعتمد على نفي.',
      },
      {
        word: 'مقصِّرٌ',
        roleAr: 'خبر لا النافية للجنس مرفوع',
        roleEn: 'Predicate of La in nominative case',
        caseAr: 'مرفوع',
        markerAr: 'الضمة الظاهرة',
        explanationAr: 'خبر لا النافية للجنس مرفوع وعلامة رفعه الضمة الظاهرة وهو متمم لمعنى الجملة.',
        ruleCitationAr: 'خبر لا النافية للجنس مرفوع كخبر إن.',
      },
      {
        word: 'في واجبهِ',
        roleAr: 'شبه جملة جار ومجرور متعلق بالخبر مقصر',
        roleEn: 'Prepositional phrase',
        caseAr: 'مجرور بالكسرة',
        markerAr: 'الكسرة الظاهرة',
        explanationAr: 'في حرف جر، وواجب اسم مجرور، والهاء ضمير متصل مبني في محل جر مضاف إليه.',
        ruleCitationAr: 'شبه الجملة يتعلق بما قبله من المشتقات أو الأفعال.',
      },
    ],
  },
  {
    id: 'irab_10',
    category: 'special_styles',
    titleAr: 'أسلوب التعجب القياسي (ما أفعله) وعلامة جمع المؤنث',
    titleEn: 'Standard Exclamation (Ma Afala) & Sound Feminine Plural',
    fullSentence: 'ما أروعَ تضحياتِ شهدائِنا الأبرارِ!',
    pedagogicalTipAr: 'في صيغة التعجب (ما أفعله)، المتعجب منه يعرب دائماً مفعولاً به منصوباً، وإذا كان جمع مؤنث سالماً ينصب بالكسرة نيابة عن الفتحة (علامة فرعية).',
    tokens: [
      {
        word: 'ما',
        roleAr: 'اسم تعجب نكرة تامة بمعنى شيء عظيم مبني في محل رفع مبتدأ',
        roleEn: 'Exclamatory particle in nominative subject place',
        caseAr: 'في محل رفع',
        markerAr: 'مبني على السكون',
        explanationAr: 'ما التعجبية اسم نكرة تامة في محل رفع مبتدأ.',
        ruleCitationAr: 'ما في صيغة (ما أفعله) تعجبية في محل رفع مبتدأ دائماً.',
      },
      {
        word: 'أروعَ',
        roleAr: 'فعل ماضٍ جامد لإنشاء التعجب، وفاعله مستتر وجوباً، والجملة خبر ما',
        roleEn: 'Past exclamatory verb with obligatory hidden agent',
        caseAr: 'مبني على الفتح (والجملة في محل رفع خبر)',
        markerAr: 'الفتحة الظاهرة',
        explanationAr: 'فعل التعجب ماض جامد مبني على الفتح، والفاعل ضمير مستتر وجوباً تقديره (هو) يعود على ما، والجملة الفعلية خبر المبتدأ ما.',
        ruleCitationAr: 'صيغة ما أفعله جملتها الفعلية في محل رفع خبر للمبتدأ ما.',
      },
      {
        word: 'تضحياتِ',
        roleAr: 'مفعول به (المتعجب منه) منصوب وعلامة نصبه الكسرة نيابة عن الفتحة',
        roleEn: 'Exclaimed object in accusative marked by Kasra',
        caseAr: 'منصوب بالكسرة نيابة عن الفتحة',
        markerAr: 'الكسرة (علامة فرعية)',
        isSubstitutedMarker: true,
        explanationAr: 'المتعجب منه مفعول به منصوب، وعلامة نصبه الكسرة لأنه جمع مؤنث سالم.',
        ruleCitationAr: 'جمع المؤنث السالم ينصب بالكسرة نيابة عن الفتحة وهي علامة إعراب فرعية.',
      },
      {
        word: 'شهدائِنا',
        roleAr: 'مضاف إليه مجرور وعلامة جره الكسرة الظاهرة، و(نا) مضاف إليه',
        roleEn: 'Possessive genitive noun + attached pronoun',
        caseAr: 'مجرور بالكسرة',
        markerAr: 'الكسرة الظاهرة على الهمزة',
        explanationAr: 'مضاف إليه مجرور وعلامة جره الكسرة، ولذا رُسمت همزته المتطرفة على نبرة (يائية) لاتصالها بضمير في حالة الجر.',
        ruleCitationAr: 'الهمزة المتطرفة المتصلة بضمير ترسم على نبرة في حالة الجر (علمائنا، شهدائنا).',
      },
      {
        word: 'الأبرارِ',
        roleAr: 'نعت لشهدائنا مجرور وعلامة جره الكسرة الظاهرة',
        roleEn: 'Attributive adjective (Na\'t)',
        caseAr: 'مجرور',
        markerAr: 'الكسرة الظاهرة',
        explanationAr: 'نعت يتبع المنعوت (شهدائنا) المعرف بالإضافة في التعريف والجر.',
        ruleCitationAr: 'المعرف بالإضافة يطابقه النعت المعرف بأل.',
      },
    ],
  },
];

export const ARABIC_DERIVATIVE_RULES: DerivativeRule[] = [
  {
    id: 'deriv_active_participle',
    nameAr: 'اسم الفاعل وإعماله',
    nameEn: 'Active Participle (Ism al-Fa\'il)',
    patternFormula: 'الثلاثي: فَاعِل | غير الثلاثي: مُـ + كسر ما قبل الآخر',
    triLiteralRuleAr: 'يصاغ من الفعل الثلاثي على وزن (فاعل)، مثل: كَتَبَ -> كاتِب، وقَالَ -> قائِل، وسَعَى -> ساعٍ (ساعياً).',
    nonTriLiteralRuleAr: 'من غير الثلاثي نأتي بالمضارع ثم نقلب ياء المضارعة ميماً مضمومة ونكسر ما قبل الآخر، مثل: انطلقَ -> ينطلقُ -> مُنطلِق.',
    agentivityConditionsAr: [
      'المحلى بأل يعمل بلا شروط وبلا قيد زمني حتى في الماضي (جاء المكرمُ ضيفَه).',
      'المجرد من أل يعمل بشرطين: الدلالة على الحال أو الاستقبال (غير ماضٍ)، والاعتماد على: نفي، استفهام، مبتدأ، موصوف، نداء، أو صاحب حال.',
    ],
    operativeEffectAr: 'يرفع فاعلاً (إن كان الفعل لازماً)، ويرفع فاعلاً وينصب مفعولاً به أو أكثر (إن كان الفعل متعدياً).',
    examples: [
      {
        word: 'مُخلِصٌ',
        root: 'أخلص (رباعي)',
        sentence: 'ما مخلفٌ الصادقُ وعدَه.',
        operativeRole: 'الصادقُ فاعل، ووعدَه مفعول به',
        operativeMarker: 'الصادقُ: ضمة ظاهرة | وعدَه: فتحة ظاهرة',
      },
      {
        word: 'صانِعٌ',
        root: 'صنع (ثلاثي)',
        sentence: 'أصانعٌ العاملُ المجدُّ مجدَ أمتِهِ؟',
        operativeRole: 'العاملُ فاعل سد مسد الخبر، ومجدَ مفعول به',
        operativeMarker: 'العاملُ: مرفوع بالضمة | مجدَ: منصوب بالفتحة',
      },
    ],
  },
  {
    id: 'deriv_passive_participle',
    nameAr: 'اسم المفعول وإعماله',
    nameEn: 'Passive Participle (Ism al-Maf\'ul)',
    patternFormula: 'الثلاثي: مَفْعُول | غير الثلاثي: مُـ + فتح ما قبل الآخر',
    triLiteralRuleAr: 'يصاغ من الثلاثي المبني للمجهول على وزن (مَفْعول)، مثل: كُتِبَ -> مَكْتُوب، وقِيلَ -> مَقُول، وبِيعَ -> مَبِيع.',
    nonTriLiteralRuleAr: 'من غير الثلاثي نأتي بالمضارع المبني للمجهول ونبدل حرف المضارعة ميماً مضمومة ونفتح ما قبل الآخر، مثل: يُكْرَمُ -> مُكْرَم.',
    agentivityConditionsAr: [
      'المقترن بأل يعمل بدون قيد أو شرط في كل الأزمنة.',
      'المجرد من أل يعمل إذا دل على الحال أو الاستقبال واعتمد على نفي، استفهام، مبتدأ، موصوف، أو نداء.',
    ],
    operativeEffectAr: 'يرفع بعده نائب فاعل، وإذا كان الفعل متعدياً لمفعولين ينصب المفعول الثاني بعد رفع نائب الفاعل.',
    examples: [
      {
        word: 'مُعْطًى',
        root: 'أُعْطِيَ (رباعي متعد لمفعولين)',
        sentence: 'أمُعطًى الفقيرُ حقَّهُ كاملاً؟',
        operativeRole: 'الفقيرُ نائب فاعل، وحقَّه مفعول به ثانٍ',
        operativeMarker: 'الفقيرُ: مرفوع بالضمة | حقَّه: منصوب بالفتحة',
      },
      {
        word: 'مَرْجُوٌّ',
        root: 'رُجِيَ (ثلاثي معتل الآخر)',
        sentence: 'هذا أمرٌ مرجوٌّ خيرُهُ للجميع.',
        operativeRole: 'خيرُهُ نائب فاعل لاسم المفعول مرفوع',
        operativeMarker: 'خيرُهُ: ضمة ظاهرة على الراء',
      },
    ],
  },
  {
    id: 'deriv_exaggeration',
    nameAr: 'صيغ المبالغة القياسية الخمس',
    nameEn: 'Hyperbolic Participles (Siyagh al-Mubalaghah)',
    patternFormula: 'فَعَّال - مِفْعَال - فَعُول - فَعِيل - فَعِل',
    triLiteralRuleAr: 'أوزان قياسية تدل على الكثرة والمبالغة في حدوث الفعل، تصاغ غالباً من الثلاثي ونادراً من الرباعي (مثل: أقدم -> مِقدام، أعطى -> مِعطاء، نذر -> نذير).',
    nonTriLiteralRuleAr: 'صياغتها من غير الثلاثي نادرة ومقصورة على السماع (مِقدام، مِعوان، نذير، بشير).',
    agentivityConditionsAr: [
      'تعمل بنفس شروط عمل اسم الفاعل تماماً (بأل دون شرط، وبدون أل بشرطي الحال/الاستقبال والاعتماد).',
    ],
    operativeEffectAr: 'ترفع فاعلاً وتنصب مفعولاً به كالفعل المبني للمعلوم.',
    examples: [
      {
        word: 'عَلَّامٌ',
        root: 'عَلِمَ على وزن فَعَّال',
        sentence: 'إنَّ اللهَ علَّامٌ الغيوبَ.',
        operativeRole: 'الغيوبَ مفعول به لصيغة المبالغة منصوب بالفتحة',
        operativeMarker: 'الفتحة الظاهرة',
      },
      {
        word: 'حَذِرٌ',
        root: 'حَذِرَ على وزن فَعِل',
        sentence: 'أحذرٌ الجنديُّ مكرَ الأعداءِ؟',
        operativeRole: 'الجنديُّ فاعل سد مسد الخبر، ومكرَ مفعول به',
        operativeMarker: 'الجنديُّ: ضمة | مكرَ: فتحة',
      },
    ],
  },
  {
    id: 'deriv_comparative',
    nameAr: 'اسم التفضيل وأحكامه الأربعة',
    nameEn: 'Elative / Superlative (Ism al-Tafdil)',
    patternFormula: 'المذكر: أَفْعَل | المؤنث: فُعْلَى',
    triLiteralRuleAr: 'يصاغ مباشرة من الفعل الثلاثي التام المثبت المتصرف القابل للتفاوت المبني للمعلوم، والذي ليس الوصف منه على أفعل فعلاء.',
    nonTriLiteralRuleAr: 'إذا اختل شرط، يؤتى باسم تفضيل مستوفٍ للشروط كاسم مساعد (أشد، أكثر، أعظم) متبوعاً بالمصدر الصريح منصوباً على التمييز (أشدُّ ازدحاماً).',
    agentivityConditionsAr: [
      '1. مجرد من أل والإضافة: يلزم الإفراد والتذكير والتنكير، وما بعده مجرور بمن (المهندسون أكثرُ صبراً من غيرهم).',
      '2. مقترن بأل: يطابق المفضل في الإفراد والتثنية والجمع والتذكير والتأنيث، ولا يؤتى بعده بمن (هما الأفضلان، وهن الفضليات).',
      '3. مضاف لنكرة: يلزم الإفراد والتذكير والتنكير، ويطابق المضاف إليه المفضل (هاتان المعلمتان أفضلُ معلمتين).',
      '4. مضاف لمعرفة: يجوز فيه وجهان: لزوم الإفراد والتذكير، أو مطابقة المفضل (أنتما أفضلُ الطلاب، أو أفضلا الطلاب).',
    ],
    operativeEffectAr: 'يرفع فاعلاً مستتراً، وقد يرفع فاعلاً ظاهراً في مسألة الكحل المشهورة.',
    examples: [
      {
        word: 'الأَفْضَلُونَ / الفُضْلَيَاتُ',
        root: 'فضل (معرف بأل)',
        sentence: 'الأمهاتُ هنَّ الفُضْلَيَاتُ خُلُقاً.',
        operativeRole: 'الفضليات خبر مرفوع بالضمة، وخلقاً تمييز منصوب',
        operativeMarker: 'الفضليات: ضمة | خلقاً: فتحة',
      },
      {
        word: 'أَكْثَرُ',
        root: 'كثر (مضاف لنكرة)',
        sentence: 'العلماءُ أكثرُ الناسِ خشيةً للهِ.',
        operativeRole: 'الناس مضاف إليه، وخشيةً تمييز ملحوظ منصوب',
        operativeMarker: 'الناس: كسرة | خشيةً: فتحة',
      },
    ],
  },
];

export const ARABIC_RHETORICAL_FIGURES: RhetoricalFigure[] = [
  {
    id: 'rhetoric_simile',
    tropeType: 'bayan',
    nameAr: 'التشبيه البليغ وأنواعه البيانية',
    nameEn: 'Eloquent Simile (Tashbih Baligh)',
    definitionAr: 'عقد مماثلة بين أمرين في صفة مشتركة أو أكثر. والتشبيه البليغ هو ما حُذفت منه أداة التشبيه ووجه الشبه وبقي المشبه والمشبه به فقط.',
    beautySecretAr: 'تجسيم',
    examples: [
      {
        verseOrProse: 'العلمُ نورٌ، والجهلُ ظلامٌ دامسٌ.',
        sourceAr: 'حكمة عربية كلاسيكية',
        analysisAr: 'المشبه: العلم (معنوي)، المشبه به: النور (مادي). سقطت الأداة ووجه الشبه فأصبح تشبيهاً بليغاً.',
        tropeSubtypeAr: 'تشبيه بليغ على صورة المبتدأ والخبر (سر جماله التجسيم).',
      },
      {
        verseOrProse: 'وإذا المنيةُ أنشبتْ أظفارَها ... ألفيتَ كلَّ تميمةٍ لا تنفعُ',
        sourceAr: 'أبو ذؤيب الهذلي',
        analysisAr: 'شبه المنية (الموت) بوحش مفترس، وحذف المشبه به ورمز إليه بشيء من لوازمه (أنشبت أظفارها) على سبيل الاستعارة المكنية.',
        tropeSubtypeAr: 'استعارة مكنية (سر جمالها التجسيم والتهويل).',
      },
    ],
  },
  {
    id: 'rhetoric_metaphor',
    tropeType: 'bayan',
    nameAr: 'الاستعارة التصريحية والمكنية',
    nameEn: 'Metaphor (Isti\'arah)',
    definitionAr: 'تشبيه بليغ حُذف أحد طرفيه: إن حُذف المشبه به ودُل عليه بشيء من خصائصه فهي مكنية، وإن صُرح بلفظ المشبه به وحُذف المشبه فهي تصريحية.',
    beautySecretAr: 'تشخيص',
    examples: [
      {
        verseOrProse: 'واعتصموا بحبلِ اللهِ جميعاً ولا تفرَّقوا.',
        sourceAr: 'القرآن الكريم (سورة آل عمران)',
        analysisAr: 'صُرّح بالمشبه به (حبل الله) وحُذف المشبه وهو (دين الله وعهده) مع قرينة مانعة من إرادة المعنى الحقيقي.',
        tropeSubtypeAr: 'استعارة تصريحية (سر جمالها التجسيم وتوحيد الصفوف).',
      },
      {
        verseOrProse: 'شاكٍ إلى البحرِ اضطرابَ خواطري ... فيجيبُني برياحِهِ الهوجاءِ',
        sourceAr: 'خليل مطران (قصيدة المساء - الاتجاه الوجداني)',
        analysisAr: 'شبه البحر بإنسان يشكو إليه ويجيبه، وحذف المشبه به (الإنسان) ودل عليه بـ (يجيبني) على سبيل الاستعارة المكنية.',
        tropeSubtypeAr: 'استعارة مكنية (سر جمالها التشخيص).',
      },
    ],
  },
  {
    id: 'rhetoric_metonymy',
    tropeType: 'bayan',
    nameAr: 'المجاز المرسل وعلاقاته الثمانية',
    nameEn: 'Metonymy / Synecdoche (Majaz Mursal)',
    definitionAr: 'كلمة استعملت في غير معناها الأصلي لعلاقة غير المشابهة مع قرينة مانعة من إرادة المعنى الأصلي. ومن أشهر علاقاته: الكلية، الجزئية، المحلية، الحالية، السببية، المسببية، اعتبار ما كان، اعتبار ما سيكون.',
    beautySecretAr: 'إثارة الذهن وجذب الانتباه',
    examples: [
      {
        verseOrProse: 'ألقى الخطيبُ كلمةً ألهبتْ حماسَ الجماهيرِ.',
        sourceAr: 'تعبير أدبي خطابي',
        analysisAr: 'أطلق (الكلمة) وأراد (الخطبة الكاملة)، فعلاقة الكلمة بالخطبة هي الجزئية.',
        tropeSubtypeAr: 'مجاز مرسل علاقته الجزئية (سر جماله الإيجاز والدقة).',
      },
      {
        verseOrProse: 'يقولُ الشاعر: ألمْ نشرحْ لكَ صدرَكَ؟',
        sourceAr: 'القرآن الكريم (سورة الشرح)',
        analysisAr: 'ذكر المحل (الصدر) وأراد الحال فيه وهو (القلب)، فالعلاقة محلية.',
        tropeSubtypeAr: 'مجاز مرسل علاقته المحلية.',
      },
    ],
  },
  {
    id: 'rhetoric_badi',
    tropeType: 'badi',
    nameAr: 'المحسنات البديعية اللفظية والمعنوية',
    nameEn: 'Rhetorical Embellishments (Muhassinat Badi\'iyyah)',
    definitionAr: 'وسائل لتحسين الكلام وتزيينه. اللفظية تعطي جرساً موسيقياً يطرب الأذن (جناس، تصريع، حسن تقسيم في الشعر؛ سجع وازدواج في النثر). والمعنوية تبرز المعنى وتوضحه (طباق، مقابلة، تورية، مراعاة نظير، الالتفات).',
    beautySecretAr: 'إعطاء جرس موسيقي',
    examples: [
      {
        verseOrProse: 'وسَلا مصرَ: هل سَلا القلبُ عنها ... أو أسا جُرحَهُ الزمانُ المُؤَسِّي؟',
        sourceAr: 'أحمد شوقي (غرباء وحنين - الكلاسيكية الحديثة)',
        analysisAr: 'بين (سَلا) الأولى بمعنى اسألا، و(سَلا) الثانية بمعنى نسي: جناس تام يعطي جرساً موسيقياً رائعاً، وفي مطلع القصيدة تصريع بين شطري البيت الأول.',
        tropeSubtypeAr: 'جناس تام (سر جماله يعطي جرساً موسيقياً عذباً).',
      },
    ],
  },
];

export const ARABIC_ORTHOGRAPHY_TRAPS: OrthographyTrapRule[] = [
  {
    id: 'hamza_inflection_trap',
    titleAr: 'تغير رسم الهمزة المتطرفة المتصلة بضمير حسب الإعراب',
    titleEn: 'Hamza Orthography Governed by Syntactic Case',
    ruleExplanationAr: 'الكلمات المنتهية بهمزة متطرفة على السطر بعد ألف مد (مثل: علماء، أبناء، شعراء) يتغير رسم همزتها تماماً عند اتصالها بضمير متصل بحسب موقعها الإعرابي:',
    inflectionMatrix: [
      {
        stateAr: 'حالة الرفع',
        spelling: 'عُلَمَاؤُنَا (على الواو)',
        exampleSentence: 'إنما يَخشَى اللهَ من عبادِهِ العُلَمَاؤُا؛ فالعُلَمَاؤُنَا ورثةُ الأنبياءِ.',
        grammaticalReasonAr: 'مبتدأ أو فاعل أو اسم كان أو خبر إن -> مضمومة بعد ألف ساكنة فترسم على واو.',
      },
      {
        stateAr: 'حالة النصب',
        spelling: 'عُلَمَاءَنَا (على السطر)',
        exampleSentence: 'إنَّ عُلَمَاءَنَا قادةُ النهضةِ، ونحن نُقدِّرُ عُلَمَاءَنَا الأوفياءَ.',
        grammaticalReasonAr: 'مفعول به أو اسم إن أو خبر كان -> مفتوحة بعد ألف ساكنة فترسم مفردة على السطر.',
      },
      {
        stateAr: 'حالة الجر',
        spelling: 'عُلَمَائِنَا (على نبرة/ياء)',
        exampleSentence: 'نقتدي بآثارِ عُلَمَائِنَا العظامِ في مسيرةِ التقدمِ.',
        grammaticalReasonAr: 'مضاف إليه أو اسم مجرور بحرف الجر -> مكسورة فترسم على نبرة (ياء).',
      },
    ],
    commonMistakes: [
      {
        incorrect: 'إن علمائنا مكرمون.',
        correct: 'إن علماءَنا مكرمون.',
        whyIncorrectAr: 'اسم إن منصوب، والهمزة المفتوحة بعد ألف ترسم على السطر وليس على نبرة.',
      },
      {
        incorrect: 'أصبح أبنائنا متفوقين.',
        correct: 'أصبح أبناؤُنا متفوقين.',
        whyIncorrectAr: 'اسم أصبح مرفوع، والهمزة المضمومة بعد ألف ترسم على واو.',
      },
    ],
  },
  {
    id: 'waw_types_trap',
    titleAr: 'أنواع الواو في أواخر الكلمات (واو الجماعة، واو الجمع، والواو الفارقة)',
    titleEn: 'Types of Final Waw in Arabic Orthography',
    ruleExplanationAr: 'يفرق علماء الرسم الإملائي بين 4 أنواع من الواو في الثانوية العامة:',
    inflectionMatrix: [
      {
        stateAr: 'حالة الرفع',
        spelling: 'واو الجماعة (الفعلية) + ألف فارقة',
        exampleSentence: 'المعلمون لم يُقصِّرُوا في أداءِ رسالتِهِم، وقالوا حقاً.',
        grammaticalReasonAr: 'ضمير رفع يتصل بالأفعال فقط ويتبعه ألف فارقة تفرق بينه وبين واو الفعل الأصلية.',
      },
      {
        stateAr: 'حالة الرفع',
        spelling: 'واو الجمع (الاسمية) بدون ألف',
        exampleSentence: 'معلِّمُو المدرسةِ مخلصونَ في عملِهِم.',
        grammaticalReasonAr: 'علامة إعراب جمع المذكر السالم عند حذفت نونه للإضافة، ولا يُكتب بعدها ألف أبداً.',
      },
      {
        stateAr: 'حالة الرفع',
        spelling: 'الواو الفارقة في (عمرو)',
        exampleSentence: 'حضرَ عَمْرٌو، ومررتُ بِعَمْرٍو، ورأيتُ عَمْراً.',
        grammaticalReasonAr: 'تكتب للتفريق بين عمرو وعمر الممنوع من الصرف، وتحذف في النصب المنون (عمراً).',
      },
    ],
    commonMistakes: [
      {
        incorrect: 'معلموا المدرسة حضروا.',
        correct: 'معلمو المدرسة حضروا.',
        whyIncorrectAr: 'واو جمع المذكر السالم اسمية لا تلحقها الألف الفارقة؛ الألف الفارقة تختص بواو الجماعة في الأفعال فقط.',
      },
    ],
  },
  {
    id: 'alif_wasl_qat_trap',
    titleAr: 'الفرق بين همزة القطع وألف الوصل ومواضع حذف همزة (ابن)',
    titleEn: 'Hamzat al-Qat vs. Alif al-Wasl and Rules of (Ibn)',
    ruleExplanationAr: 'تُميز همزة القطع بأنها تثبت نطقاً ورسماً في أول الكلام ووسطه، بينما ألف الوصل تنطق في أول الكلام وتسقط في درج الكلام. كما تحذف همزة (ابن) بشروط وزارية صارمة.',
    inflectionMatrix: [
      {
        stateAr: 'همزة القطع',
        spelling: 'أَ / إِ / أُ (همزة مرسومة)',
        exampleSentence: 'أكرمَ إبراهيمُ أستاذَهُ إكراماً.',
        grammaticalReasonAr: 'ماضي الرباعي وأمره ومصدره، وجميع الحروف ما عدا (ال)، وماضي الثلاثي المبدوء بهمزة ومصدره (أخذ أخذاً).',
      },
      {
        stateAr: 'ألف الوصل',
        spelling: 'ا (ألف بدون رأس عين)',
        exampleSentence: 'استخرجَ المهندسُ الذهبَ استخراجاً.',
        grammaticalReasonAr: 'أمر الثلاثي، وماضي الخماسي والسداسي وأمرهما ومصدرهما، والتعريف بأل، والأسماء التسعة المسموعة.',
      },
      {
        stateAr: 'حذف همزة (ابن)',
        spelling: 'بن (بحذف الألف)',
        exampleSentence: 'فتحَ عمرو بنُ العاصِ مصرَ.',
        grammaticalReasonAr: 'تحذف همزة (ابن) إذا وقعت مفرداً نعتاً بين علمين مذكرين متصلين، الثاني أب للأول، ولم تقع في أول السطر.',
      },
    ],
    commonMistakes: [
      {
        incorrect: 'عمرو ابن العاص قائد عظيم.',
        correct: 'عمرو بن العاص قائد عظيم.',
        whyIncorrectAr: 'تحذف ألف ابن لأنها وقعت نعتاً بين علمين الثاني والد للأول ولم تقع في أول السطر.',
      },
      {
        incorrect: 'محمد هو بن علي.',
        correct: 'محمد هو ابن علي.',
        whyIncorrectAr: 'تثبت ألف ابن هنا لأنها خبر للمبتدأ (هو) وليست نعتاً، وفُصلت بالضمير.',
      },
    ],
  },
];

export const ARABIC_MINISTERIAL_EXAM_TRAPS: ExamTrapItem[] = [
  {
    id: 'trap_2021_01',
    ministerialYear: 'امتحان الثانوية العامة الدور الأول 2021',
    verseOrSentence: 'قال الشاعر: "ولستُ بمستبقٍ أخاً لا تَلُمُّهُ ... على شَعَثٍ، أيُّ الرجالِ المُهَذَّبُ؟"',
    questionAr: 'ميز المحل الإعرابي لكلمة (بمستبقٍ)، ونوع خبر ليس في البيت السابق:',
    optionsAr: [
      'مجرور لفظاً منصوب محلاً، ونوع الخبر مفرد',
      'اسم مجرور بالباء، ونوع الخبر شبه جملة',
      'خبر ليس منصوب بالفتحة الظاهرة، ونوع الخبر مفرد',
      'مفعول به مجرور لفظاً منصوب محلاً، ونوع الخبر جملة اسمية',
    ],
    correctIndex: 0,
    trapAnalysisAr: 'الباء هنا حرف جر زائد للتوكيد يقترن وجوباً أو استحساناً بخبر ليس. ووجود حرف الجر الزائد لا يغير نوع الخبر من مفرد إلى شبه جملة! فـ (بمستبق) خبر مفرد مجرور لفظاً بالكسرة المقدرة على الياء المحذوفة، منصوب محلاً.',
  },
  {
    id: 'trap_2022_02',
    ministerialYear: 'امتحان الثانوية العامة الدور الأول 2022',
    verseOrSentence: 'قال الشاعر: "كم قائلٍ لي لستَ بالبالغِ المُنَى ... ألا تَتَّقي اللهَ في عقلِكَ الفَذِّ؟"',
    questionAr: 'بين نوع (كم) وإعراب تمييزها الوارد في الشطر الأول:',
    optionsAr: [
      'كم خبرية، وتمييزها مجرور بالإضافة وعلامة جره الكسرة الظاهرة',
      'كم استفهامية، وتمييزها منصوب بالفتحة الظاهرة',
      'كم خبرية، وتمييزها محذوف تقديره (مرة)',
      'كم استفهامية، وتمييزها مجرور بمن مضمرة',
    ],
    correctIndex: 0,
    trapAnalysisAr: 'جاء تمييز (كم) مفرداً مجروراً بالكسرة (قائلٍ) بدون حرف جر، وهي تدل على الكثرة لا على الاستفهام، فنوعها خبرية، وتمييزها مجرور بالإضافة وعلامة جره الكسرة.',
  },
  {
    id: 'trap_2023_03',
    ministerialYear: 'امتحان الثانوية العامة الدور الأول 2023',
    verseOrSentence: '"كِلا الطالبينِ فائزٌ"، و"الطالبان كلاهما فائزانِ"، و"الطالبان كلاهما فائزٌ".',
    questionAr: 'أعرب كلمة (كلاهما) في الجملتين الثانية والثالثة على الترتيب:',
    optionsAr: [
      'توكيد معنوي مرفوع بالألف - مبتدأ ثانٍ مرفوع بالألف',
      'توكيد معنوي مرفوع بالألف - توكيد معنوي مرفوع بالألف',
      'مبتدأ ثانٍ مرفوع بالألف - توكيد معنوي مرفوع بالألف',
      'مبتدأ ثانٍ مرفوع بالضمة - خبر مرفوع بالألف',
    ],
    correctIndex: 0,
    trapAnalysisAr: 'في الجملة الثانية: يمكن حذف (كلاهما) فيستقيم المعنى: "الطالبان فائزان"، إذن هي توكيد معنوي. أما في الجملة الثالثة: لا يصح حذفها، لأننا لا نقول: "الطالبان فائزٌ"، لذا وجب إعرابها مبتدأ ثانياً و(فائز) خبره، والجملة الاسمية خبر المبتدأ الأول.',
  },
  {
    id: 'trap_2024_04',
    ministerialYear: 'امتحان الثانوية العامة الدور الأول 2024',
    verseOrSentence: '"لعلَّ أبناءَنا مخلصونَ في خدمةِ مصرَ".',
    questionAr: 'عند وضع (عسى) مكان (لعل)، تصبح الجملة صحيحة في الصياغة:',
    optionsAr: [
      'عسى أبناؤُنا أن يخلصوا في خدمةِ مصرَ',
      'عسى أبناءَنا مخلصين في خدمةِ مصرَ',
      'عسى أبنائِنا أن يخلصوا في خدمةِ مصرَ',
      'عسى أبناؤُنا مخلصين في خدمةِ مصرَ',
    ],
    correctIndex: 0,
    trapAnalysisAr: 'اسم (عسى) مرفوع، وبالتالي ترسم همزة (أبناؤنا) على الواو. وخبر (عسى) يجب أن يكون جملة فعلية فعلها مضارع يكثر اقترانه بأن، فيقال: "أن يخلصوا" بحذف النون.',
  },
];
