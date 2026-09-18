import type { SolvedProblem } from '../../../types/curriculum';

export const egBacArCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_ar_ch1_se_01",
    "titleEn": "EG-Bac Advanced Example 1: Active Participle Operation & Governing Complements",
    "titleAr": "مثال البكالوريا المتقدم 1: إعمال اسم الفاعل وضبط معموله",
    "difficulty": "medium",
    "questionEn": "In the sentence: \"أَمُقَدِّرٌ المُعَلِّمُ جُهُودَ طُلاَّبِهِ؟\", identify the grammatical function and case of the words \"المُعَلِّمُ\" and \"جُهُودَ\".",
    "questionAr": "في جملة: «أَمُقَدِّرٌ المُعَلِّمُ جُهُودَ طُلاَّبِهِ؟»، ما الموقع الإعرابي الصحيح لكل من «المُعَلِّمُ» و«جُهُودَ» على الترتيب؟",
    "optionsEn": [
      "Fa'il (Agent) elevated and substituting for the predicate; Maf'ul bihi (Direct Object) in accusative case",
      "Mubtada' (Subject); Khobar (Predicate)",
      "Na'ib Fa'il (Deputy Agent); Maf'ul bihi",
      "Fa'il (Agent); Mudaf Ilayh (Possessive)"
    ],
    "optionsAr": [
      "فاعل لاسم الفاعل مرفوع سد مسد الخبر؛ مفعول به منصوب",
      "مبتدأ مؤخر مرفوع؛ خبر مقدم",
      "نائب فاعل لاسم الفاعل؛ مفعول به منصوب",
      "فاعل لاسم الفاعل مرفوع؛ مضاف إليه مجرور"
    ],
    "correctAnswer": "Fa'il (Agent) elevated and substituting for the predicate; Maf'ul bihi (Direct Object) in accusative case",
    "correctIndex": 0,
    "hintEn": "The active participle 'مُقَدِّرٌ' is preceded by an interrogative hamza and functions as Mubtada'. Its elevated agent completes the sentence and fulfills the predicate's role.",
    "hintAr": "اسم الفاعل «مُقَدِّرٌ» اعتمد على استفهام ووقع مبتدأً منوناً، فيحتاج إلى فاعل يُتِم المعنى ويسد مسد الخبر.",
    "stepByStepSolutionEn": [
      "1. 'مُقَدِّرٌ' is an active participle derived from the non-tri-literal verb 'قَدَّرَ' (يُقَدِّرُ -> مُقَدِّر).",
      "2. It fulfills agentivity conditions: denotes present/future and relies on interrogation (الاستفهام).",
      "3. Syntactic role of 'مُقَدِّرٌ': Mubtada' (مبتدأ مرفوع بالضمة الظاهرة).",
      "4. 'المُعَلِّمُ': The agent performing the evaluation, hence 'فاعل لاسم الفاعل مرفوع بالضمة سد مسد الخبر'.",
      "5. 'جُهُودَ': The entity being evaluated, hence 'مفعول به لاسم الفاعل منصوب وعلامة نصبه الفتحة الظاهرة'."
    ],
    "stepByStepSolutionAr": [
      "١. كلمة «مُقَدِّرٌ» اسم فاعل من غير الثلاثي (قدّر - يُقدّر - مُقدِّر).",
      "٢. شروط الإعمال: نكرة منونة دلت على الحال والاستقبال واعتمدت على استفهام (الهمزة).",
      "٣. إعراب «مُقَدِّرٌ»: مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة.",
      "٤. «المُعَلِّمُ»: فاعل لاسم الفاعل مرفوع وعلامة رفعه الضمة سد مسد الخبر لأن المبتدأ الوصف يحتاج إلى ما يتمم معناه.",
      "٥. «جُهُودَ»: مفعول به لاسم الفاعل منصوب وعلامة نصبه الفتحة الظاهرة."
    ],
    "teacherTipEn": "Whenever an operative participle acts as Mubtada' preceded by negation or interrogation, its elevated agent is parsed as 'فاعل / نائب فاعل سد مسد الخبر'.",
    "teacherTipAr": "إذا كان المشتق العامل مبتدأً مسبوقاً بنفي أو استفهام، فإن معموله المرفوع يُعرب فاعلاً أو نائب فاعل سد مسد الخبر."
  },
  {
    "id": "egbac_ar_ch1_se_02",
    "titleEn": "EG-Bac Advanced Example 2: Passive Participle Governing Deputy Agent and Second Object",
    "titleAr": "مثال البكالوريا المتقدم 2: إعمال اسم المفعول المشتق من فعل متعد لمفعولين",
    "difficulty": "medium",
    "questionEn": "Parse the word \"جَائِزَةً\" in the sentence: \"أَمَمْنُوحٌ المُتَفَوِّقُ جَائِزَةً؟\".",
    "questionAr": "أعرب كلمة «جَائِزَةً» في قولنا: «أَمَمْنُوحٌ المُتَفَوِّقُ جَائِزَةً؟».",
    "optionsEn": [
      "Second Direct Object (Maf'ul bihi Thani) in accusative case",
      "First Direct Object (Maf'ul bihi Awwal) in accusative case",
      "Deputy Agent (Na'ib Fa'il) in nominative case",
      "Distinction (Tamyiz) in accusative case"
    ],
    "optionsAr": [
      "مفعول به ثانٍ منصوب وعلامة نصبه الفتحة الظاهرة",
      "مفعول به أول منصوب وعلامة نصبه الفتحة",
      "نائب فاعل لاسم المفعول مرفوع بالضمة",
      "تمييز ملحوظ منصوب وعلامة نصبه الفتحة"
    ],
    "correctAnswer": "Second Direct Object (Maf'ul bihi Thani) in accusative case",
    "correctIndex": 0,
    "hintEn": "The verb 'مَنَحَ' is ditransitive (takes two objects). When transformed into the passive participle 'مَمْنُوح', the first object becomes the deputy agent while the second object remains accusative.",
    "hintAr": "الفعل «مَنَحَ» يتعدى لمفعولين؛ وعند صياغة اسم المفعول منه يتحول المفعول الأول إلى نائب فاعل ويبقى الثاني مفعولاً ثانياً.",
    "stepByStepSolutionEn": [
      "1. 'مَمْنُوحٌ' is a passive participle on the pattern 'مَفْعُول' from the ditransitive verb 'مَنَحَ'.",
      "2. 'المُتَفَوِّقُ' was the original first object; it is now elevated as Na'ib Fa'il (نائب فاعل مرفوع بالضمة سد مسد الخبر).",
      "3. 'جَائِزَةً' remains as the second accusative object: 'مفعول به ثانٍ لاسم المفعول منصوب بالفتحة الظاهرة'."
    ],
    "stepByStepSolutionAr": [
      "١. «مَمْنُوحٌ» اسم مفعول ثلاثي عامل لاعتماده على استفهام ودلالته على الحال أو الاستقبال.",
      "٢. «المُتَفَوِّقُ»: نائب فاعل لاسم المفعول مرفوع وعلامة رفعه الضمة سد مسد الخبر (كان في الأصل مفعولاً به أول).",
      "٣. «جَائِزَةً»: مفعول به ثانٍ لاسم المفعول منصوب وعلامة نصبه الفتحة الظاهرة."
    ],
    "teacherTipEn": "Watch for verbs of giving/granting (منح، أعطى، كسا، ألبس، وهب): their passive participles always retain a second accusative object.",
    "teacherTipAr": "انتبه لأفعال المنح والعطاء: اسم المفعول منها يرفع نائب فاعل وينصب مفعولاً به ثانياً."
  },
  {
    "id": "egbac_ar_ch1_se_03",
    "titleEn": "EG-Bac Advanced Example 3: Orthography of Extremital Hamza with Declension Pronouns",
    "titleAr": "مثال البكالوريا المتقدم 3: رسم الهمزة المتطرفة عند اتصالها بضمير هاء الغيبة أو نا",
    "difficulty": "medium",
    "questionEn": "Choose the correct spelling when filling the blank in: \"إِنَّ ............. يُخْلِصُونَ فِي عَمَلِهِمْ\":",
    "questionAr": "اختر الرسم الإملائي الصحيح لمكان النقط في جملة: «إِنَّ ............. يُخْلِصُونَ فِي عَمَلِهِمْ»:",
    "optionsEn": [
      "عُلَمَاءَنَا",
      "عُلَمَاؤُنَا",
      "عُلَمَائِنَا",
      "عُلمَاءْنَا"
    ],
    "optionsAr": [
      "عُلَمَاءَنَا",
      "عُلَمَاؤُنَا",
      "عُلَمَائِنَا",
      "عُلمَاءْنَا"
    ],
    "correctAnswer": "عُلَمَاءَنَا",
    "correctIndex": 0,
    "hintEn": "The word is the subject of 'إِنَّ' (Ism Inna), which is in the accusative case (منصوب بالفتحة). An extremital hamza followed by a pronoun is written on the line in accusative case.",
    "hintAr": "الكلمة واقعة اسماً لـ «إنّ» وحكمه النصب؛ وترسم الهمزة المتطرفة بعد ألف مد على السطر في حالة النصب، وعلى الواو في الرفع، وعلى الياء/النبرة في الجر.",
    "stepByStepSolutionEn": [
      "1. Analyze syntactic function: The noun is preceded by the accusative particle 'إِنَّ'.",
      "2. Syntactic position: Ism Inna Mansoob (اسم إن منصوب وعلامة نصبه الفتحة الظاهرة).",
      "3. Orthographic rule: A word ending in Hamza preceded by Alif (like علماء), when suffixed with a pronoun (نا):",
      "   - Nominative: عُلَمَاؤُنَا (on Waw)",
      "   - Accusative: عُلَمَاءَنَا (on the line)",
      "   - Genitive: عُلَمَائِنَا (on Nabrah/Yaa)",
      "4. Therefore, 'عُلَمَاءَنَا' is the grammatically and orthographically correct form."
    ],
    "stepByStepSolutionAr": [
      "١. تحديد الموقع الإعرابي: الكلمة اسم «إنَّ» وحكمه النصب بالفتحة الظاهرة.",
      "٢. القاعدة الإملائية: الهمزة المتطرفة بعد ألف إذا اتصل بها ضمير:",
      "   - حالة الرفع: تُكتب على الواو (عُلَمَاؤُنَا).",
      "   - حالة النصب: تُكتب على السطر (عُلَمَاءَنَا).",
      "   - حالة الجر: تُكتب على نبرة (عُلَمَائِنَا).",
      "٣. بما أن الموقع الإعرابي اسم إنّ منصوب، فالصواب حتماً: «عُلَمَاءَنَا»."
    ],
    "teacherTipEn": "This is one of the most famous ministerial traps. Always determine the syntactic case before choosing the Hamza shape.",
    "teacherTipAr": "هذه المسألة من أشهر فخاخ امتحانات الثانوية العامة؛ لا تختر رسم الهمزة إلا بعد إعراب الكلمة أولاً."
  },
  {
    "id": "egbac_ar_ch1_se_04",
    "titleEn": "EG-Bac Advanced Example 4: Incomplete vs Complete Auxiliaries (Kaada and Kaana)",
    "titleAr": "مثال البكالوريا المتقدم 4: التمييز بين كان التامة والناقصة وكاد وأخواتها",
    "difficulty": "medium",
    "questionEn": "In the Quranic expression: \"فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ\", the verbs \"تُمْسُونَ\" and \"تُصْبِحُونَ\" are:",
    "questionAr": "في الآية الكريمة: «فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ»، الفعلان «تُمْسُونَ» و«تُصْبِحُونَ»:",
    "optionsEn": [
      "Complete verbs (Taammah) and Waw al-Jama'ah is their elevated Fa'il (Agent)",
      "Defective verbs (Naqisah) and their predicate is omitted",
      "Complete verbs and Waw al-Jama'ah is their Maf'ul bihi",
      "Defective verbs and their predicate is a prepositional phrase"
    ],
    "optionsAr": [
      "تامتان، وواو الجماعة في كليهما ضمير متصل في محل رفع فاعل",
      "ناقصتان، وخبر كل منهما محذوف تقديره موجودين",
      "تامتان، وواو الجماعة في محل نصب مفعول به",
      "ناقصتان، وخبرهما شبه جملة مقدر"
    ],
    "correctAnswer": "Complete verbs (Taammah) and Waw al-Jama'ah is their elevated Fa'il (Agent)",
    "correctIndex": 0,
    "hintEn": "The verbs here mean 'entering upon the evening' and 'entering upon the morning' (دخول في الصباح والمساء), needing only an agent without a predicate.",
    "hintAr": "كان وأخواتها إذا دلت على الحدوث والدخول في التوقيت واكتفت بمرفوعها دون حاجة إلى خبر منصوب تكون أفعالاً تامة.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In the Quranic expression: \"فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ\", the verbs \"تُمْسُونَ\" and \"تُصْبِح...",
      "Step 2: Rule application: The verbs here mean 'entering upon the evening' and 'entering upon the morning' (دخول في الصباح والمساء), needing only an agent without a predicate.",
      "Step 3: Conclusion: Confirmed correct answer is 'Complete verbs (Taammah) and Waw al-Jama'ah is their elevated Fa'il (Agent)'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في الآية الكريمة: «فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ»، الفعلان «تُمْسُونَ» و«تُصْبِحُونَ»:...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: كان وأخواتها إذا دلت على الحدوث والدخول في التوقيت واكتفت بمرفوعها دون حاجة إلى خبر منصوب تكون أفعالاً تامة.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Complete verbs (Taammah) and Waw al-Jama'ah is their elevated Fa'il (Agent)."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_se_05",
    "titleEn": "EG-Bac Advanced Example 5: Absolute Object (Al-Maf'ul al-Mutlaq) and its Substitutes",
    "titleAr": "مثال البكالوريا المتقدم 5: النائب عن المفعول المطلق وصوره الشائعة",
    "difficulty": "medium",
    "questionEn": "Parse the word \"كُلَّ\" in: \"احْتَرَمْتُ أُسْتَاذِي كُلَّ الاحْتِرَامِ\":",
    "questionAr": "أعرب كلمة «كُلَّ» في قولك: «احْتَرَمْتُ أُسْتَاذِي كُلَّ الاحْتِرَامِ»:",
    "optionsEn": [
      "Na'ib 'an al-Maf'ul al-Mutlaq (Deputy Absolute Object) in accusative case",
      "Maf'ul bihi (Direct Object) in accusative case",
      "Tawkeed Ma'nawi (Semantic Corroboration) in accusative case",
      "Hal (Circumstantial Accusative)"
    ],
    "optionsAr": [
      "نائب عن المفعول المطلق منصوب وعلامة نصبه الفتحة الظاهرة (مضاف إلى المصدر)",
      "مفعول به منصوب وعلامة نصبه الفتحة",
      "توكيد معنوي منصوب وعلامة نصبه الفتحة",
      "حال منصوبة وعلامة نصبها الفتحة"
    ],
    "correctAnswer": "Na'ib 'an al-Maf'ul al-Mutlaq (Deputy Absolute Object) in accusative case",
    "correctIndex": 0,
    "hintEn": "When words like 'كل' or 'بعض' or 'غاية' are prefixed to the verbal noun of the preceding verb, they act as deputies for the absolute object.",
    "hintAr": "إذا أضيفت كلمات (كل، بعض، غاية، جميع، أشد) إلى مصدر الفعل المذكور قبلها، فإنها تُعرب نائباً عن المفعول المطلق.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: Parse the word \"كُلَّ\" in: \"احْتَرَمْتُ أُسْتَاذِي كُلَّ الاحْتِرَامِ\":...",
      "Step 2: Rule application: When words like 'كل' or 'بعض' or 'غاية' are prefixed to the verbal noun of the preceding verb, they act as deputies for the absolute object.",
      "Step 3: Conclusion: Confirmed correct answer is 'Na'ib 'an al-Maf'ul al-Mutlaq (Deputy Absolute Object) in accusative case'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: أعرب كلمة «كُلَّ» في قولك: «احْتَرَمْتُ أُسْتَاذِي كُلَّ الاحْتِرَامِ»:...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: إذا أضيفت كلمات (كل، بعض، غاية، جميع، أشد) إلى مصدر الفعل المذكور قبلها، فإنها تُعرب نائباً عن المفعول المطلق.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Na'ib 'an al-Maf'ul al-Mutlaq (Deputy Absolute Object) in accusative case."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_se_06",
    "titleEn": "EG-Bac Advanced Example 6: The Cognate Object / Maf'ul Ma'ahu with Waw of Accompaniment",
    "titleAr": "مثال البكالوريا المتقدم 6: واو المعية والمفعول معه",
    "difficulty": "medium",
    "questionEn": "In the sentence: \"سِرْتُ وَطَرِيقَ النَّيْلِ عِنْدَ الغُرُوبِ\", the word \"طَرِيقَ\" is parsed as:",
    "questionAr": "في جملة: «سِرْتُ وَطَرِيقَ النَّيْلِ عِنْدَ الغُرُوبِ»، إعراب كلمة «طَرِيقَ» هو:",
    "optionsEn": [
      "Maf'ul Ma'ahu (Object of Accompaniment) in accusative case",
      "Ma'tuf (Conjoined noun) in nominative case",
      "Maf'ul bihi in accusative case",
      "Zarf Makan (Adverb of Place)"
    ],
    "optionsAr": [
      "مفعول معه منصوب وعلامة نصبه الفتحة الظاهرة",
      "معطوف مرفوع على الفاعل التاء",
      "مفعول به منصوب بالفتحة",
      "ظرف مكان منصوب بالفتحة"
    ],
    "correctAnswer": "Maf'ul Ma'ahu (Object of Accompaniment) in accusative case",
    "correctIndex": 0,
    "hintEn": "The Waw here indicates accompaniment (بمعنى مَعَ) and cannot be conjunctive because 'the road' cannot share the action of walking.",
    "hintAr": "الواو هنا واو المعية لامتناع العطف الحقيقي (فالطريق لا يسير)، فالاسم بعدها مفعول معه منصوب.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In the sentence: \"سِرْتُ وَطَرِيقَ النَّيْلِ عِنْدَ الغُرُوبِ\", the word \"طَرِيقَ\" is parsed as:...",
      "Step 2: Rule application: The Waw here indicates accompaniment (بمعنى مَعَ) and cannot be conjunctive because 'the road' cannot share the action of walking.",
      "Step 3: Conclusion: Confirmed correct answer is 'Maf'ul Ma'ahu (Object of Accompaniment) in accusative case'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في جملة: «سِرْتُ وَطَرِيقَ النَّيْلِ عِنْدَ الغُرُوبِ»، إعراب كلمة «طَرِيقَ» هو:...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: الواو هنا واو المعية لامتناع العطف الحقيقي (فالطريق لا يسير)، فالاسم بعدها مفعول معه منصوب.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Maf'ul Ma'ahu (Object of Accompaniment) in accusative case."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_se_07",
    "titleEn": "EG-Bac Advanced Example 7: Jussive Conditionals & Mandatory Coupling with Fa (Faa' al-Jaza')",
    "titleAr": "مثال البكالوريا المتقدم 7: اقتران جواب الشرط بالفاء وجوباً وأثره الإعرابي",
    "difficulty": "hots",
    "questionEn": "In: \"مَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ\", why is the Fa coupled to the apodosis, and what is the mood of the verb inside the apodosis?",
    "questionAr": "في قوله تعالى: «مَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ»، ما سبب اقتران جواب الشرط بالفاء، وما المحل الإعرابي للجملة؟",
    "optionsEn": [
      "Coupled because apodosis is a nominal sentence; whole sentence is in the locus of Jazam (جزم)",
      "Coupled because verb is talabi; in the locus of Raf'",
      "Coupled because verb is rigid (jaamid); no syntactic locus",
      "Coupled because of 'qad'; in the locus of Nasb"
    ],
    "optionsAr": [
      "اقترن بالفاء لأن الجملة اسمية؛ وجملة الجواب في محل جزم جواب الشرط",
      "اقترن بالفاء لأنها جملة طلبية؛ وجملة الجواب في محل رفع",
      "اقترن بالفاء لأن الفعل جامد؛ ولا محل لها من الإعراب",
      "اقترن بالفاء لتقدم قد؛ وجملة الجواب في محل نصب"
    ],
    "correctAnswer": "Coupled because apodosis is a nominal sentence; whole sentence is in the locus of Jazam (جزم)",
    "correctIndex": 0,
    "hintEn": "Remember the mnemonic: 'اسميةٌ طلبيةٌ وبجامدٍ وبما ولن وبقد وبالتسويف'. When coupled with Fa after an apocopating tool, the sentence is in the locus of Jazam.",
    "hintAr": "بيت الشعر الحاكم: (اسميةٌ طلبيةٌ وبجامدٍ وبما ولن وبقد وبالتسويف)، وإذا كان الشرط جازماً فالجملة المقترنة بالفاء في محل جزم.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In: \"مَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ\", why is the Fa coupled to the apodosis, and what is the mood of the...",
      "Step 2: Rule application: Remember the mnemonic: 'اسميةٌ طلبيةٌ وبجامدٍ وبما ولن وبقد وبالتسويف'. When coupled with Fa after an apocopating tool, the sentence is in the locus of Jazam.",
      "Step 3: Conclusion: Confirmed correct answer is 'Coupled because apodosis is a nominal sentence; whole sentence is in the locus of Jazam (جزم)'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في قوله تعالى: «مَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ»، ما سبب اقتران جواب الشرط بالفاء، وما المحل الإعرابي للج...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: بيت الشعر الحاكم: (اسميةٌ طلبيةٌ وبجامدٍ وبما ولن وبقد وبالتسويف)، وإذا كان الشرط جازماً فالجملة المقترنة بالفاء في محل جزم.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Coupled because apodosis is a nominal sentence; whole sentence is in the locus of Jazam (جزم)."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_se_08",
    "titleEn": "EG-Bac Advanced Example 8: Superfluous Prepositions (Huroof al-Jar al-Za'idah)",
    "titleAr": "مثال البكالوريا المتقدم 8: حروف الجر الزائدة وإعراب ما بعدها محلاً ولفظاً",
    "difficulty": "medium",
    "questionEn": "Parse the word \"بِعَزِيزٍ\" in: \"أَلَيْسَ اللَّهُ بِعَزِيزٍ ذِي انْتِقَامٍ\":",
    "questionAr": "أعرب كلمة «بِعَزِيزٍ» في قوله تعالى: «أَلَيْسَ اللَّهُ بِعَزِيزٍ ذِي انْتِقَامٍ»:",
    "optionsEn": [
      "Khobar Layisa (Predicate of Layisa), genitive in vocalization but accusative in syntactic locus",
      "Majroor bi-harf al-jar as an original prepositional phrase",
      "Ism Layisa mu'akhkhar in nominative case",
      "Hal (Circumstantial accusative)"
    ],
    "optionsAr": [
      "خبر ليس مجرور لفظاً بحرف الجر الزائد منصوب محلاً",
      "اسم مجرور بالباء الأصلية وشبه الجملة خبر ليس",
      "اسم ليس مؤخر مرفوع بضمة مقدرة",
      "حال منصوبة وعلامة نصبها الفتحة المقدرة"
    ],
    "correctAnswer": "Khobar Layisa (Predicate of Layisa), genitive in vocalization but accusative in syntactic locus",
    "correctIndex": 0,
    "hintEn": "The Baa (الباء) in the predicate of 'ليس' or 'ما العاملة عمل ليس' is a superfluous emphatic preposition (حرف جر زائد للتوكيد).",
    "hintAr": "الباء الواقعة في خبر «ليس» هي حرف جر زائد يفيد التوكيد، والاسم بعدها مجرور لفظاً منصوب محلاً.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: Parse the word \"بِعَزِيزٍ\" in: \"أَلَيْسَ اللَّهُ بِعَزِيزٍ ذِي انْتِقَامٍ\":...",
      "Step 2: Rule application: The Baa (الباء) in the predicate of 'ليس' or 'ما العاملة عمل ليس' is a superfluous emphatic preposition (حرف جر زائد للتوكيد).",
      "Step 3: Conclusion: Confirmed correct answer is 'Khobar Layisa (Predicate of Layisa), genitive in vocalization but accusative in syntactic locus'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: أعرب كلمة «بِعَزِيزٍ» في قوله تعالى: «أَلَيْسَ اللَّهُ بِعَزِيزٍ ذِي انْتِقَامٍ»:...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: الباء الواقعة في خبر «ليس» هي حرف جر زائد يفيد التوكيد، والاسم بعدها مجرور لفظاً منصوب محلاً.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Khobar Layisa (Predicate of Layisa), genitive in vocalization but accusative in syntactic locus."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_se_09",
    "titleEn": "EG-Bac Advanced Example 9: Diptotes (Al-Mamnu' min al-Sarf) and Conditions of Fat'ha Marker",
    "titleAr": "مثال البكالوريا المتقدم 9: الممنوع من الصرف وشروط جره بالفتحة نيابة عن الكسرة",
    "difficulty": "medium",
    "questionEn": "In which of the following sentences is the word \"مَسَاجِدَ\" pulled by a Kasrah (جر بالكسرة)?",
    "questionAr": "في أي جملة من الجمل الآتية جاءت كلمة «مساجد» مجرورة بالكسرة الظاهرة؟",
    "optionsEn": [
      "صَلَّيْتُ فِي المَسَاجِدِ الأَثَرِيَّةِ (Prefixed with Al)",
      "صَلَّيْتُ فِي مَسَاجِدَ أَثَرِيَّةٍ",
      "صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ",
      "كَمْ مِنْ مَسَاجِدَ فِي مِصْرَ"
    ],
    "optionsAr": [
      "صَلَّيْتُ فِي المَسَاجِدِ الأَثَرِيَّةِ (معرفة بأل)",
      "صَلَّيْتُ فِي مَسَاجِدَ أَثَرِيَّةٍ (نكرة غير مضافة)",
      "صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ (نكرة مجردة)",
      "كَمْ مِنْ مَسَاجِدَ فِي مِصْرَ (ممنوعة مجردة)"
    ],
    "correctAnswer": "صَلَّيْتُ فِي المَسَاجِدِ الأَثَرِيَّةِ (Prefixed with Al)",
    "correctIndex": 0,
    "hintEn": "A diptote is drawn by Kasrah instead of Fat'ha if it is defined by 'Al-' (مُعرّف بأل) or annexed in an Idfah construct (مُضاف).",
    "hintAr": "الممنوع من الصرف يُجر بالفتحة نيابة عن الكسرة بشرطين: أن يكون مجرداً من أل ومجرداً من الإضافة، فإن عُرّف أو أُضيف جُرّ بالكسرة.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In which of the following sentences is the word \"مَسَاجِدَ\" pulled by a Kasrah (جر بالكسرة)?...",
      "Step 2: Rule application: A diptote is drawn by Kasrah instead of Fat'ha if it is defined by 'Al-' (مُعرّف بأل) or annexed in an Idfah construct (مُضاف).",
      "Step 3: Conclusion: Confirmed correct answer is 'صَلَّيْتُ فِي المَسَاجِدِ الأَثَرِيَّةِ (Prefixed with Al)'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في أي جملة من الجمل الآتية جاءت كلمة «مساجد» مجرورة بالكسرة الظاهرة؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: الممنوع من الصرف يُجر بالفتحة نيابة عن الكسرة بشرطين: أن يكون مجرداً من أل ومجرداً من الإضافة، فإن عُرّف أو أُضيف جُرّ بالكسرة.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: صَلَّيْتُ فِي المَسَاجِدِ الأَثَرِيَّةِ (Prefixed with Al)."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_se_10",
    "titleEn": "EG-Bac Advanced Example 10: Apocopation in the Consequence of Command (Jawab al-Talab)",
    "titleAr": "مثال البكالوريا المتقدم 10: جزم المضارع في جواب الطلب وشروطه المعتمدة",
    "difficulty": "hots",
    "questionEn": "Choose the sentence containing an apocopated imperfect verb in Jawab al-Talab (مضارع مجزوم في جواب الطلب):",
    "questionAr": "اختر الجملة التي تتضمن فعلاً مضارعاً مجزوماً في جواب الطلب:",
    "optionsEn": [
      "لا تَدْنُ مِنَ البَحْرِ تَسْلَمْ (Desirable outcome after prohibition)",
      "لا تَدْنُ مِنَ البَحْرِ تَغْرَقُ (Undesirable outcome after prohibition)",
      "أَقْبِلْ فَتَسْعَدَ (Prefixed with Fa of Causality)",
      "إِنْ تَقْرَأْ تَسْتَفِدْ (Conditional tool clause)"
    ],
    "optionsAr": [
      "لا تَدْنُ مِنَ البَحْرِ تَسْلَمْ (أمر محبوب مترتب على النهي)",
      "لا تَدْنُ مِنَ البَحْرِ تَغْرَقُ (أمر مذموم غير مرغوب)",
      "أَقْبِلْ فَتَسْعَدَ (منصوب بفاء السببية)",
      "إِنْ تَقْرَأْ تَسْتَفِدْ (مجزوم بأداة شرط جازمة)"
    ],
    "correctAnswer": "لا تَدْنُ مِنَ البَحْرِ تَسْلَمْ (Desirable outcome after prohibition)",
    "correctIndex": 0,
    "hintEn": "After prohibition (النهي), the verb in Jawab al-Talab is only jussive if the meaning is praiseworthy and desirable (أمر محبوب). Otherwise, it remains nominative (مرفوع).",
    "hintAr": "يشترط لجزم المضارع بعد النهي أن يكون الجواب أمراً محبوباً يصح فيه تقدير إن الشرطية (إن لا تدن من البحر تسلم).",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: Choose the sentence containing an apocopated imperfect verb in Jawab al-Talab (مضارع مجزوم في جواب الطلب):...",
      "Step 2: Rule application: After prohibition (النهي), the verb in Jawab al-Talab is only jussive if the meaning is praiseworthy and desirable (أمر محبوب). Otherwise, it remains nominative (مرفوع).",
      "Step 3: Conclusion: Confirmed correct answer is 'لا تَدْنُ مِنَ البَحْرِ تَسْلَمْ (Desirable outcome after prohibition)'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: اختر الجملة التي تتضمن فعلاً مضارعاً مجزوماً في جواب الطلب:...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: يشترط لجزم المضارع بعد النهي أن يكون الجواب أمراً محبوباً يصح فيه تقدير إن الشرطية (إن لا تدن من البحر تسلم).",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: لا تَدْنُ مِنَ البَحْرِ تَسْلَمْ (Desirable outcome after prohibition)."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  }
];

export const egBacArCh1Exercises: SolvedProblem[] = [
  {
    "id": "egbac_ar_ch1_ex_01",
    "titleEn": "EG-Bac Advanced Exercise 1: Assimilation of Inna with Ma Kaffah",
    "titleAr": "تمرين البكالوريا المتقدم 1: دخول ما الكافة على إن وأخواتها",
    "difficulty": "medium",
    "questionEn": "What happens to the noun \"المُؤْمِنُونَ\" in: \"إِنَّمَا المُؤْمِنُونَ إِخْوَةٌ\"?",
    "questionAr": "ما الإعراب الصحيح لكلمة «المُؤْمِنُونَ» في قوله تعالى: «إِنَّمَا المُؤْمِنُونَ إِخْوَةٌ»؟",
    "optionsEn": [
      "Mubtada' (Subject) elevated with Waw, because 'Ma' neutralized Inna's operation",
      "Ism Inna in accusative case",
      "Khobar Inna in nominative case",
      "Fa'il elevated with Waw"
    ],
    "optionsAr": [
      "مبتدأ مرفوع وعلامة رفعه الواو لأن «ما» كافة كفت «إن» عن العمل",
      "اسم إن منصوب وعلامة نصبه الواو نيابة عن الفتحة",
      "خبر إن مرفوع وعلامة رفعه الواو",
      "فاعل مرفوع وعلامة رفعه الواو"
    ],
    "correctAnswer": "Mubtada' (Subject) elevated with Waw, because 'Ma' neutralized Inna's operation",
    "correctIndex": 0,
    "hintEn": "'ما' when joined with 'إنّ' is 'كافة', nullifying its accusative effect and restoring normal subject-predicate structure.",
    "hintAr": "«ما» الكافة إذا اتصلت بـ «إنّ» كفّتها عن العمل وأعادت الجملة لمبتدأ وخبر.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: What happens to the noun \"المُؤْمِنُونَ\" in: \"إِنَّمَا المُؤْمِنُونَ إِخْوَةٌ\"?...",
      "Step 2: Rule application: 'ما' when joined with 'إنّ' is 'كافة', nullifying its accusative effect and restoring normal subject-predicate structure.",
      "Step 3: Conclusion: Confirmed correct answer is 'Mubtada' (Subject) elevated with Waw, because 'Ma' neutralized Inna's operation'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: ما الإعراب الصحيح لكلمة «المُؤْمِنُونَ» في قوله تعالى: «إِنَّمَا المُؤْمِنُونَ إِخْوَةٌ»؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: «ما» الكافة إذا اتصلت بـ «إنّ» كفّتها عن العمل وأعادت الجملة لمبتدأ وخبر.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Mubtada' (Subject) elevated with Waw, because 'Ma' neutralized Inna's operation."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_02",
    "titleEn": "EG-Bac Advanced Exercise 2: Syntax of Exceptive Constructs (Al-Mustathna)",
    "titleAr": "تمرين البكالوريا المتقدم 2: أساليب الاستثناء التام المنفي والناقص المنفي",
    "difficulty": "medium",
    "questionEn": "Parse the word \"أَحْمَدُ\" in: \"مَا حَضَرَ الطُّلاَّبُ إِلاَّ أَحْمَدُ\":",
    "questionAr": "ما إعراب كلمة «أَحْمَدُ» بالرفع في جملة: «مَا حَضَرَ الطُّلاَّبُ إِلاَّ أَحْمَدُ»؟",
    "optionsEn": [
      "Badal (Permutative) from 'الطلاب' elevated with Dhammah",
      "Mustathna wajib al-nasb (Mandatory exceptive accusative)",
      "Fa'il (Agent) for hadara",
      "Khobar for omitted subject"
    ],
    "optionsAr": [
      "بدل بعض من كل مرفوع من «الطلاب» وعلامة رفعه الضمة",
      "مستثنى واجب النصب بالفتحة",
      "فاعل مؤخر مرفوع بالضمة",
      "خبر لمبتدأ محذوف تقديره هو"
    ],
    "correctAnswer": "Badal (Permutative) from 'الطلاب' elevated with Dhammah",
    "correctIndex": 0,
    "hintEn": "The style is Tam Manfi (تام منفي). The noun after 'إلا' can either be exceptive accusative or a Badal following the Mustathna Minhu.",
    "hintAr": "الأسلوب تام منفي؛ فيجوز فيه النصب على الاستثناء أو الإتباع على البدلية من المستثنى منه المرفوع.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: Parse the word \"أَحْمَدُ\" in: \"مَا حَضَرَ الطُّلاَّبُ إِلاَّ أَحْمَدُ\":...",
      "Step 2: Rule application: The style is Tam Manfi (تام منفي). The noun after 'إلا' can either be exceptive accusative or a Badal following the Mustathna Minhu.",
      "Step 3: Conclusion: Confirmed correct answer is 'Badal (Permutative) from 'الطلاب' elevated with Dhammah'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: ما إعراب كلمة «أَحْمَدُ» بالرفع في جملة: «مَا حَضَرَ الطُّلاَّبُ إِلاَّ أَحْمَدُ»؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: الأسلوب تام منفي؛ فيجوز فيه النصب على الاستثناء أو الإتباع على البدلية من المستثنى منه المرفوع.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Badal (Permutative) from 'الطلاب' elevated with Dhammah."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_03",
    "titleEn": "EG-Bac Advanced Exercise 3: Distinction (Tamyiz) of Numbers 11 to 99",
    "titleAr": "تمرين البكالوريا المتقدم 3: تمييز الأعداد المركبة والمعطوفة وأحكام التذكير والتأنيث",
    "difficulty": "medium",
    "questionEn": "Write the number 15 in letters in: \"اشْتَرَيْتُ (15) كِتَاباً\":",
    "questionAr": "اكتب العدد (15) بالحروف العربية في جملة: «اشْتَرَيْتُ (15) كِتَاباً»:",
    "optionsEn": [
      "خَمْسَةَ عَشَرَ كِتَاباً",
      "خَمْسَ عَشْرَةَ كِتَاباً",
      "خَمْسَةَ عَشْرَةَ كِتَاباً",
      "خَمْسَ عَشَرَ كِتَاباً"
    ],
    "optionsAr": [
      "خَمْسَةَ عَشَرَ كِتَاباً",
      "خَمْسَ عَشْرَةَ كِتَاباً",
      "خَمْسَةَ عَشْرَةَ كِتَاباً",
      "خَمْسَ عَشَرَ كِتَاباً"
    ],
    "correctAnswer": "خَمْسَةَ عَشَرَ كِتَاباً",
    "correctIndex": 0,
    "hintEn": "For number 15: the first digit (5) opposes the masculine noun 'كتاباً' (feminine خمسة), while the second digit (10) agrees with it (عشر).",
    "hintAr": "الأعداد من ١٣ إلى ١٩: الصدر يخالف المعدود والعجز يوافقه؛ كتاب مذكر -> خمسة تخالف وعشر توافق -> خمسةَ عشرَ.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: Write the number 15 in letters in: \"اشْتَرَيْتُ (15) كِتَاباً\":...",
      "Step 2: Rule application: For number 15: the first digit (5) opposes the masculine noun 'كتاباً' (feminine خمسة), while the second digit (10) agrees with it (عشر).",
      "Step 3: Conclusion: Confirmed correct answer is 'خَمْسَةَ عَشَرَ كِتَاباً'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: اكتب العدد (15) بالحروف العربية في جملة: «اشْتَرَيْتُ (15) كِتَاباً»:...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: الأعداد من ١٣ إلى ١٩: الصدر يخالف المعدود والعجز يوافقه؛ كتاب مذكر -> خمسة تخالف وعشر توافق -> خمسةَ عشرَ.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: خَمْسَةَ عَشَرَ كِتَاباً."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_04",
    "titleEn": "EG-Bac Advanced Exercise 4: Distinguishing Verbal Nouns (Masdar Sarih vs Mimi)",
    "titleAr": "تمرين البكالوريا المتقدم 4: التمييز بين المصدر الصريح والمصدر الميمي واسم المكان",
    "difficulty": "medium",
    "questionEn": "In which sentence is the word \"مَسْعَى\" used as a Masdar Mimi (مصدر ميمي)?",
    "questionAr": "في أي جملة من الجمل التالية وردت كلمة «مَسْعَى» مصدراً ميمياً؟",
    "optionsEn": [
      "سَعَى الطَّالِبُ مَسْعَى المُجِدِّينَ (meaning: سعى سعياً)",
      "الصَّفَا وَالمَرْوَةُ مَسْعَى الحُجَّاجِ (Noun of place)",
      "الصَّبَاحُ مَسْعَى العُمَّالِ (Noun of time)",
      "هَذَا مَسْعَى فُلاَنٍ إِلَى الخَيْرِ (Used as adjective)"
    ],
    "optionsAr": [
      "سَعَى الطَّالِبُ مَسْعَى المُجِدِّينَ (بمعنى: سعى سعياً)",
      "الصَّفَا وَالمَرْوَةُ مَسْعَى الحُجَّاجِ (اسم مكان)",
      "الصَّبَاحُ مَسْعَى العُمَّالِ إِلَى أَعْمَالِهِمْ (اسم زمان)",
      "المَسْعَى بَيْنَ الجَبَلَيْنِ وَاسِعٌ (اسم مكان)"
    ],
    "correctAnswer": "سَعَى الطَّالِبُ مَسْعَى المُجِدِّينَ (meaning: سعى سعياً)",
    "correctIndex": 0,
    "hintEn": "A Masdar Mimi starts with a non-agentive Meem and can be replaced directly by the authentic verbal noun (المصدر الصريح).",
    "hintAr": "المصدر الميمي يبدأ بميم زائدة ويصح وضع المصدر الصريح الأصلي مكانه دون تغير المعنى.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In which sentence is the word \"مَسْعَى\" used as a Masdar Mimi (مصدر ميمي)?...",
      "Step 2: Rule application: A Masdar Mimi starts with a non-agentive Meem and can be replaced directly by the authentic verbal noun (المصدر الصريح).",
      "Step 3: Conclusion: Confirmed correct answer is 'سَعَى الطَّالِبُ مَسْعَى المُجِدِّينَ (meaning: سعى سعياً)'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في أي جملة من الجمل التالية وردت كلمة «مَسْعَى» مصدراً ميمياً؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: المصدر الميمي يبدأ بميم زائدة ويصح وضع المصدر الصريح الأصلي مكانه دون تغير المعنى.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: سَعَى الطَّالِبُ مَسْعَى المُجِدِّينَ (meaning: سعى سعياً)."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_05",
    "titleEn": "EG-Bac Advanced Exercise 5: Nun of Corroboration & Mood of the Imperfect",
    "titleAr": "تمرين البكالوريا المتقدم 5: أحكام توكيد الفعل بالنون وجوباً وجوازاً وامتناعاً",
    "difficulty": "medium",
    "questionEn": "Identify the ruling for confirming the verb with Nun in: \"وَاللَّهِ لَسَوْفَ أُذَاكِرُ دُرُوسِي\":",
    "questionAr": "ما حكم توكيد الفعل بالنون في قولنا: «وَاللَّهِ لَسَوْفَ أُذَاكِرُ دُرُوسِي»؟",
    "optionsEn": [
      "Forbidden (ممتنع التوكيد) because 'سوف' separates the verb from the Lam of oath",
      "Mandatory (واجب التوكيد) because oath is present",
      "Permissible (جائز التوكيد)",
      "Mandatory without Lam"
    ],
    "optionsAr": [
      "ممتنع التوكيد لوجود فاصل (سوف) بين الفعل ولام القسم",
      "واجب التوكيد لوقوعه في جواب القسم",
      "جائز التوكيد لدلالته على الاستقبال",
      "واجب التوكيد لوجود اللام"
    ],
    "correctAnswer": "ممتنع التوكيد لوجود فاصل (سوف) بين الفعل ولام القسم",
    "correctIndex": 0,
    "hintEn": "For mandatory confirmation, the verb must connect directly to the Lam of oath with no separating particle.",
    "hintAr": "يمتنع التوكيد بالنون إذا فُصل بين الفعل ولام القسم بفاصل مثل (سوف، قد، السين).",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: Identify the ruling for confirming the verb with Nun in: \"وَاللَّهِ لَسَوْفَ أُذَاكِرُ دُرُوسِي\":...",
      "Step 2: Rule application: For mandatory confirmation, the verb must connect directly to the Lam of oath with no separating particle.",
      "Step 3: Conclusion: Confirmed correct answer is 'ممتنع التوكيد لوجود فاصل (سوف) بين الفعل ولام القسم'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: ما حكم توكيد الفعل بالنون في قولنا: «وَاللَّهِ لَسَوْفَ أُذَاكِرُ دُرُوسِي»؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: يمتنع التوكيد بالنون إذا فُصل بين الفعل ولام القسم بفاصل مثل (سوف، قد، السين).",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: ممتنع التوكيد لوجود فاصل (سوف) بين الفعل ولام القسم."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_06",
    "titleEn": "EG-Bac Advanced Exercise 6: Conscience Pronoun Elevation & Separation (Damir Fasl)",
    "titleAr": "تمرين البكالوريا المتقدم 6: ضمائر الرفع المنفصلة وموقعها بعد النواسخ",
    "difficulty": "easy",
    "questionEn": "In: \"إِنَّكَ أَنْتَ العَزِيزُ الكَرِيمُ\", the pronoun \"أَنْتَ\" is:",
    "questionAr": "في قوله تعالى: «إِنَّكَ أَنْتَ العَزِيزُ الكَرِيمُ»، الضمير «أَنْتَ» يُعرب:",
    "optionsEn": [
      "Tawkeed Lafzi (Verbal corroboration for the Kaf) or Damir Fasl with no syntactic locus",
      "Khobar Inna in nominative case",
      "Mubtada' and Aziz is its khobar",
      "Badal from Kaf"
    ],
    "optionsAr": [
      "توكيد لفظي للضمير المنصوب (الكاف) أو ضمير فصل لا محل له من الإعراب",
      "خبر إن مرفوع وعلامة رفعه الضمة",
      "مبتدأ ثانٍ والعزيز خبره",
      "بدل من الكاف في محل نصب"
    ],
    "correctAnswer": "توكيد لفظي للضمير المنصوب (الكاف) أو ضمير فصل لا محل له من الإعراب",
    "correctIndex": 0,
    "hintEn": "The separated pronoun can be parsed either as a corroboration or as Damir Fasl that introduces the definite predicate.",
    "hintAr": "الضمير المنفصل بعد الضمير المتصل يجوز إعرابه توكيداً لفظياً له، أو ضمير فصل لا محل له يفيد التوكيد والقصر.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In: \"إِنَّكَ أَنْتَ العَزِيزُ الكَرِيمُ\", the pronoun \"أَنْتَ\" is:...",
      "Step 2: Rule application: The separated pronoun can be parsed either as a corroboration or as Damir Fasl that introduces the definite predicate.",
      "Step 3: Conclusion: Confirmed correct answer is 'توكيد لفظي للضمير المنصوب (الكاف) أو ضمير فصل لا محل له من الإعراب'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في قوله تعالى: «إِنَّكَ أَنْتَ العَزِيزُ الكَرِيمُ»، الضمير «أَنْتَ» يُعرب:...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: الضمير المنفصل بعد الضمير المتصل يجوز إعرابه توكيداً لفظياً له، أو ضمير فصل لا محل له يفيد التوكيد والقصر.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: توكيد لفظي للضمير المنصوب (الكاف) أو ضمير فصل لا محل له من الإعراب."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_07",
    "titleEn": "EG-Bac Advanced Exercise 7: Circumstantial State (Al-Hal) vs Accusative Distinction",
    "titleAr": "تمرين البكالوريا المتقدم 7: التفرقة الدقيقة بين الحال والتمييز والمفعول لأجله",
    "difficulty": "medium",
    "questionEn": "Compare \"رَغْبَةً\" in: (١) «ذَاكَرْتُ رَغْبَةً فِي النَّجَاحِ» and (٢) «ذَاكَرْتُ رَاغِباً فِي النَّجَاحِ»:",
    "questionAr": "ما إعراب الكلمتين الملونتين على الترتيب: (١) «ذَاكَرْتُ رَغْبَةً فِي التَّفَوُّقِ» - (٢) «ذَاكَرْتُ رَاغِباً فِي التَّفَوُّقِ»؟",
    "optionsEn": [
      "(1) Maf'ul li-ajlihi (source noun answering 'why'); (2) Hal (derivative participle describing state)",
      "(1) Hal; (2) Maf'ul li-ajlihi",
      "(1) Tamyiz; (2) Hal",
      "Both are Maf'ul Mutlaq"
    ],
    "optionsAr": [
      "(١) مفعول لأجله منصوب (مصدر قلبي معلل)؛ (٢) حال منصوبة (مشتق هيئة)",
      "(١) حال منصوبة؛ (٢) مفعول لأجله",
      "(١) تمييز منصوب؛ (٢) حال مفردة",
      "كلاهما مفعول لأجله منصوب"
    ],
    "correctAnswer": "(1) Maf'ul li-ajlihi (source noun answering 'why'); (2) Hal (derivative participle describing state)",
    "correctIndex": 0,
    "hintEn": "Maf'ul li-ajlihi is a verbal source explaining cause; Hal is typically a derived active/passive participle describing the agent's form.",
    "hintAr": "المفعول لأجله مصدر قلبي يبين سبب وقوع الفعل؛ بينما الحال اسم مشتق يصف هيئة الفاعل أثناء الفعل.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: Compare \"رَغْبَةً\" in: (١) «ذَاكَرْتُ رَغْبَةً فِي النَّجَاحِ» and (٢) «ذَاكَرْتُ رَاغِباً فِي النَّجَاحِ»:...",
      "Step 2: Rule application: Maf'ul li-ajlihi is a verbal source explaining cause; Hal is typically a derived active/passive participle describing the agent's form.",
      "Step 3: Conclusion: Confirmed correct answer is '(1) Maf'ul li-ajlihi (source noun answering 'why'); (2) Hal (derivative participle describing state)'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: ما إعراب الكلمتين الملونتين على الترتيب: (١) «ذَاكَرْتُ رَغْبَةً فِي التَّفَوُّقِ» - (٢) «ذَاكَرْتُ رَاغِباً فِي التَّفَ...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: المفعول لأجله مصدر قلبي يبين سبب وقوع الفعل؛ بينما الحال اسم مشتق يصف هيئة الفاعل أثناء الفعل.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: (1) Maf'ul li-ajlihi (source noun answering 'why'); (2) Hal (derivative participle describing state)."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_08",
    "titleEn": "EG-Bac Advanced Exercise 8: Negative La Governing Categories (La al-Nafiyah lil-Jins)",
    "titleAr": "تمرين البكالوريا المتقدم 8: أحكام اسم لا النافية للجنس (المفرد والمضاف والشبيه بالمضاف)",
    "difficulty": "medium",
    "questionEn": "In: \"لا طَالِباً عِلْماً مُقَصِّرٌ\", what is the type of the subject of La and its syntactic judgment?",
    "questionAr": "في جملة: «لا طَالِباً عِلْماً مُقَصِّرٌ»، ما نوع اسم «لا» وما حكمه الإعرابي؟",
    "optionsEn": [
      "Shabih bil-Mudaf (Resembling compound), Mu'rab Mansoob with Fat'ha",
      "Mudaf, Mu'rab Mansoob",
      "Mufrad, Mabni 'ala al-fat'h",
      "Khobar La muqaddam"
    ],
    "optionsAr": [
      "شبيه بالمضاف، معرب منصوب وعلامة نصبه الفتحة الظاهرة",
      "مضاف، معرب منصوب وعلامة نصبه الفتحة",
      "مفرد، مبني على الفتح في محل نصب",
      "شبيه بالمضاف، مبني على الفتح"
    ],
    "correctAnswer": "شبيه بالمضاف، معرب منصوب وعلامة نصبه الفتحة الظاهرة",
    "correctIndex": 0,
    "hintEn": "Because it is nunated (طالباً) and has an attached complement (علماً as direct object), it is Shabih bil-Mudaf, which is directly inflected as accusative.",
    "hintAr": "اسم لا جاء منوناً وبعده ما يتمم معناه وهو معموله (علماً)، فهو شبيه بالمضاف وحكمه النصب.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In: \"لا طَالِباً عِلْماً مُقَصِّرٌ\", what is the type of the subject of La and its syntactic judgment?...",
      "Step 2: Rule application: Because it is nunated (طالباً) and has an attached complement (علماً as direct object), it is Shabih bil-Mudaf, which is directly inflected as accusative.",
      "Step 3: Conclusion: Confirmed correct answer is 'شبيه بالمضاف، معرب منصوب وعلامة نصبه الفتحة الظاهرة'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في جملة: «لا طَالِباً عِلْماً مُقَصِّرٌ»، ما نوع اسم «لا» وما حكمه الإعرابي؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: اسم لا جاء منوناً وبعده ما يتمم معناه وهو معموله (علماً)، فهو شبيه بالمضاف وحكمه النصب.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: شبيه بالمضاف، معرب منصوب وعلامة نصبه الفتحة الظاهرة."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_09",
    "titleEn": "EG-Bac Advanced Exercise 9: Superfluous Particle (Rubba) and its Residual Effect",
    "titleAr": "تمرين البكالوريا المتقدم 9: حرف الجر الشبيه بالزائد (رُبَّ) وواو رُبَّ",
    "difficulty": "medium",
    "questionEn": "In: \"وَلَيْلٍ كَمَوْجِ البَحْرِ أَرْخَى سُدُولَهُ\", what is the Waw and the grammatical parsing of \"لَيْلٍ\"?",
    "questionAr": "في قول امرئ القيس: «وَلَيْلٍ كَمَوْجِ البَحْرِ أَرْخَى سُدُولَهُ»، ما نوع الواو وما إعراب «لَيْلٍ»؟",
    "optionsEn": [
      "Waw of Rubba; 'ليل' is Mubtada' genitive in vocalization, nominative in syntactic locus",
      "Waw of Conjunction; 'ليل' is Ma'tuf",
      "Waw of Accompaniment; 'ليل' is Maf'ul ma'ahu",
      "Waw of State (Hal)"
    ],
    "optionsAr": [
      "واو رُبّ؛ و«ليلٍ» مبتدأ مجرور لفظاً بحرف الجر الشبيه بالزائد مرفوع محلاً",
      "واو العطف؛ و«ليلٍ» معطوف مجرور",
      "واو المعية؛ و«ليلٍ» مفعول معه منصوب",
      "واو الحال؛ و«ليلٍ» حال مجرورة لفظاً"
    ],
    "correctAnswer": "Waw of Rubba; 'ليل' is Mubtada' genitive in vocalization, nominative in syntactic locus",
    "correctIndex": 0,
    "hintEn": "Waw at the beginning followed by an indefinite genitive noun is Waw Rubba, functioning like the quasi-superfluous preposition.",
    "hintAr": "الواو الدالة على معنى رُبّ يليها اسم نكرة مجرور يُعرب مبتدأً مجروراً لفظاً مرفوعاً محلاً.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In: \"وَلَيْلٍ كَمَوْجِ البَحْرِ أَرْخَى سُدُولَهُ\", what is the Waw and the grammatical parsing of \"لَيْلٍ\"?...",
      "Step 2: Rule application: Waw at the beginning followed by an indefinite genitive noun is Waw Rubba, functioning like the quasi-superfluous preposition.",
      "Step 3: Conclusion: Confirmed correct answer is 'Waw of Rubba; 'ليل' is Mubtada' genitive in vocalization, nominative in syntactic locus'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في قول امرئ القيس: «وَلَيْلٍ كَمَوْجِ البَحْرِ أَرْخَى سُدُولَهُ»، ما نوع الواو وما إعراب «لَيْلٍ»؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: الواو الدالة على معنى رُبّ يليها اسم نكرة مجرور يُعرب مبتدأً مجروراً لفظاً مرفوعاً محلاً.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Waw of Rubba; 'ليل' is Mubtada' genitive in vocalization, nominative in syntactic locus."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_10",
    "titleEn": "EG-Bac Advanced Exercise 10: Special Plural Morphologies / Sighat Muntaha al-Jumu'",
    "titleAr": "تمرين البكالوريا المتقدم 10: صيغ منتهى الجموع وأحكام منعها من الصرف",
    "difficulty": "hots",
    "questionEn": "Which of the following plurals is inflected with Tanween (NOT forbidden from Sarf)?",
    "questionAr": "أيٌّ من الجموع التالية مصروفة (غير ممنوعة من الصرف)؟",
    "optionsEn": [
      "تَلاَمِذَةٌ",
      "تَلاَمِيذُ",
      "مَصَابِيحُ",
      "قَنَادِيلُ"
    ],
    "optionsAr": [
      "تَلاَمِذَةٌ",
      "تَلاَمِيذُ",
      "مَصَابِيحُ",
      "قَنَادِيلُ"
    ],
    "correctAnswer": "تَلاَمِذَةٌ",
    "correctIndex": 0,
    "hintEn": "If the 3 letters after the Alif do not have a quiescent middle letter (سكون), it is fully inflected (مصروف). In تلامذة، the Thal is vowelled (تَلاَمِذَة).",
    "hintAr": "صيغة منتهى الجموع إذا جاء بعد ألفها ثلاثة أحرف يجب أن يكون أوسطها ساكناً لتُمنع؛ فإن كان متحركاً مثل (تلامذة، صيارفة، عباقرة) صُرفت.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: Which of the following plurals is inflected with Tanween (NOT forbidden from Sarf)?...",
      "Step 2: Rule application: If the 3 letters after the Alif do not have a quiescent middle letter (سكون), it is fully inflected (مصروف). In تلامذة، the Thal is vowelled (تَلاَمِذَة).",
      "Step 3: Conclusion: Confirmed correct answer is 'تَلاَمِذَةٌ'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: أيٌّ من الجموع التالية مصروفة (غير ممنوعة من الصرف)؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: صيغة منتهى الجموع إذا جاء بعد ألفها ثلاثة أحرف يجب أن يكون أوسطها ساكناً لتُمنع؛ فإن كان متحركاً مثل (تلامذة، صيارفة، عباقرة) صُرفت.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: تَلاَمِذَةٌ."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_11",
    "titleEn": "EG-Bac Advanced Exercise 11: Accusative Marker of Five Verbs with Subjunctive Lan",
    "titleAr": "تمرين البكالوريا المتقدم 11: علامات نصب الأفعال الخمسة بحذف النون",
    "difficulty": "easy",
    "questionEn": "Identify the parsing of \"تُهْمِلُوا\" in: \"عَلَيْكُمْ أَلاَّ تُهْمِلُوا دُرُوسَكُمْ\":",
    "questionAr": "ما إعراب الفعل «تُهْمِلُوا» في قولنا: «عَلَيْكُمْ أَلَّا تُهْمِلُوا دُرُوسَكُمْ»؟",
    "optionsEn": [
      "Subjunctive imperfect apocopated by 'أَنْ' with omission of Nun (حذف النون)",
      "Imperfect verb in Jazam mood",
      "Imperfect verb with omitted Waw",
      "Preterite verb on Sukun"
    ],
    "optionsAr": [
      "مضارع منصوب بأن المدغمة في «لا» وعلامة نصبه حذف النون لأنه من الأفعال الخمسة",
      "مضارع مجزوم بلا الناهية وعلامة جزمه حذف النون",
      "مضارع مرفوع بثبوت النون المقدرة",
      "فعل أمر مبني على حذف النون"
    ],
    "correctAnswer": "Subjunctive imperfect apocopated by 'أَنْ' with omission of Nun (حذف النون)",
    "correctIndex": 0,
    "hintEn": "'ألا' consists of 'أنْ' (nasibah) + 'لا' (nafiyah). The verb belongs to the Five Verbs and is made accusative by dropping the Nun.",
    "hintAr": "«ألا» أصلها «أنْ» الناصبة + «لا» النافية، والمضارع بعدها من الأفعال الخمسة فينصب بحذف النون.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: Identify the parsing of \"تُهْمِلُوا\" in: \"عَلَيْكُمْ أَلاَّ تُهْمِلُوا دُرُوسَكُمْ\":...",
      "Step 2: Rule application: 'ألا' consists of 'أنْ' (nasibah) + 'لا' (nafiyah). The verb belongs to the Five Verbs and is made accusative by dropping the Nun.",
      "Step 3: Conclusion: Confirmed correct answer is 'Subjunctive imperfect apocopated by 'أَنْ' with omission of Nun (حذف النون)'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: ما إعراب الفعل «تُهْمِلُوا» في قولنا: «عَلَيْكُمْ أَلَّا تُهْمِلُوا دُرُوسَكُمْ»؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: «ألا» أصلها «أنْ» الناصبة + «لا» النافية، والمضارع بعدها من الأفعال الخمسة فينصب بحذف النون.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Subjunctive imperfect apocopated by 'أَنْ' with omission of Nun (حذف النون)."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_12",
    "titleEn": "EG-Bac Advanced Exercise 12: Diminutive / Ism al-Tafdil States and Gender Agreement",
    "titleAr": "تمرين البكالوريا المتقدم 12: حالات اسم التفضيل وأحكام مطابقته للمفضل",
    "difficulty": "hots",
    "questionEn": "When the elative noun is defined by 'Al' (مُعرّف بأل), what is the mandatory rule regarding gender and number agreement?",
    "questionAr": "ما الحكم الواجب لاسم التفضيل إذا كان معرفاً بأل، كما في: «الأُمُّ هِيَ الفُضْلَى»؟",
    "optionsEn": [
      "Mandatory agreement with the antecedent in gender and number",
      "Mandatory singular masculine form (إلزام الإفراد والتذكير)",
      "Permissible agreement or singular masculine",
      "Mandatory feminine always"
    ],
    "optionsAr": [
      "يجب مطابقته للمفضل في النوع (التذكير والتأنيث) والعدد (الإفراد والتثنية والجمع)",
      "يلزم الإفراد والتذكير والتنكير دائماً",
      "يجوز فيه المطابقة أو الإفراد والتذكير",
      "يجب تأنيثه دائماً"
    ],
    "correctAnswer": "Mandatory agreement with the antecedent in gender and number",
    "correctIndex": 0,
    "hintEn": "The four states of Ism al-Tafdil: (1) Naked: singular masc; (2) Defined by Al: mandatory agreement; (3) Added to indefinite: singular masc; (4) Added to definite: permissible agreement.",
    "hintAr": "اسم التفضيل المعرف بأل يجب مطابقته للمفضل في الإفراد والتثنية والجمع والتذكير والتأنيث.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: When the elative noun is defined by 'Al' (مُعرّف بأل), what is the mandatory rule regarding gender and number agreement?...",
      "Step 2: Rule application: The four states of Ism al-Tafdil: (1) Naked: singular masc; (2) Defined by Al: mandatory agreement; (3) Added to indefinite: singular masc; (4) Added to definite: permissible agreement.",
      "Step 3: Conclusion: Confirmed correct answer is 'Mandatory agreement with the antecedent in gender and number'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: ما الحكم الواجب لاسم التفضيل إذا كان معرفاً بأل، كما في: «الأُمُّ هِيَ الفُضْلَى»؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: اسم التفضيل المعرف بأل يجب مطابقته للمفضل في الإفراد والتثنية والجمع والتذكير والتأنيث.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Mandatory agreement with the antecedent in gender and number."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_13",
    "titleEn": "EG-Bac Advanced Exercise 13: Verb of Wonder / Asloob al-Ta'ajjub Syntactic Syntagma",
    "titleAr": "تمرين البكالوريا المتقدم 13: إعراب صيغتي التعجب (ما أفعله وأفعل به)",
    "difficulty": "medium",
    "questionEn": "In: \"مَا أَجْمَلَ الحُرِّيَّةَ!\", the grammatical parsing of \"الحُرِّيَّةَ\" is:",
    "questionAr": "في أسلوب التعجب: «مَا أَجْمَلَ الحُرِّيَّةَ!»، إعراب المتعجب منه «الحُرِّيَّةَ» هو:",
    "optionsEn": [
      "Maf'ul bihi (Direct Object) in accusative case",
      "Fa'il (Agent) in nominative case",
      "Khobar for 'ما'",
      "Tamyiz in accusative case"
    ],
    "optionsAr": [
      "مفعول به منصوب وعلامة نصبه الفتحة الظاهرة",
      "فاعل مرفوع بالضمة المقدرة",
      "خبر للمبتدأ ما التعجبية",
      "تمييز منصوب بالفتحة"
    ],
    "correctAnswer": "Maf'ul bihi (Direct Object) in accusative case",
    "correctIndex": 0,
    "hintEn": "In the formula 'ما أَفْعَلَه', the exclamatory target (المتعجب منه) is parsed as Maf'ul bihi for the verb of wonder.",
    "hintAr": "المتعجب منه في صيغة (ما أفعله) يُعرب دائماً مفعولاً به منصوباً لفعل التعجب.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In: \"مَا أَجْمَلَ الحُرِّيَّةَ!\", the grammatical parsing of \"الحُرِّيَّةَ\" is:...",
      "Step 2: Rule application: In the formula 'ما أَفْعَلَه', the exclamatory target (المتعجب منه) is parsed as Maf'ul bihi for the verb of wonder.",
      "Step 3: Conclusion: Confirmed correct answer is 'Maf'ul bihi (Direct Object) in accusative case'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في أسلوب التعجب: «مَا أَجْمَلَ الحُرِّيَّةَ!»، إعراب المتعجب منه «الحُرِّيَّةَ» هو:...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: المتعجب منه في صيغة (ما أفعله) يُعرب دائماً مفعولاً به منصوباً لفعل التعجب.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Maf'ul bihi (Direct Object) in accusative case."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_14",
    "titleEn": "EG-Bac Advanced Exercise 14: Vocative Syntax with Munada Shabih bil-Mudaf",
    "titleAr": "تمرين البكالوريا المتقدم 14: أنواع المنادى وأحكامه الإعرابية بين البناء والنصب",
    "difficulty": "easy",
    "questionEn": "In: \"يَا حَارِسَيْنِ المَصْنَعَ، انْتَبِهَا\", what is the case of \"حَارِسَيْنِ\"?",
    "questionAr": "في نداء: «يَا حَارِسَيْنِ المَصْنَعَ، انْتَبِهَا»، المنادى «حَارِسَيْنِ»:",
    "optionsEn": [
      "Shabih bil-Mudaf, inflected as accusative with Yaa (منصوب بالياء)",
      "Mudaf, with deleted Nun",
      "Nakirah Maqsudah, built on Alif",
      "Alam Mufrad, built on Yaa"
    ],
    "optionsAr": [
      "شبيه بالمضاف، معرب منصوب وعلامة نصبه الياء لأنه مثنى",
      "مضاف منصوب بالياء وحُذفت نونه",
      "نكرة مقصودة مبنية على الألف",
      "علم مفرد مبني على الضم المقدر"
    ],
    "correctAnswer": "Shabih bil-Mudaf, inflected as accusative with Yaa (منصوب بالياء)",
    "correctIndex": 0,
    "hintEn": "The retention of Nun in the dual form ('حارسين') followed by an object proves it is Shabih bil-Mudaf, not a simple genitive construct.",
    "hintAr": "ثبوت النون في المثنى ووجود معمول منصوب بعده يدل على أنه شبيه بالمضاف وهو معرب منصوب.",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In: \"يَا حَارِسَيْنِ المَصْنَعَ، انْتَبِهَا\", what is the case of \"حَارِسَيْنِ\"?...",
      "Step 2: Rule application: The retention of Nun in the dual form ('حارسين') followed by an object proves it is Shabih bil-Mudaf, not a simple genitive construct.",
      "Step 3: Conclusion: Confirmed correct answer is 'Shabih bil-Mudaf, inflected as accusative with Yaa (منصوب بالياء)'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في نداء: «يَا حَارِسَيْنِ المَصْنَعَ، انْتَبِهَا»، المنادى «حَارِسَيْنِ»:...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: ثبوت النون في المثنى ووجود معمول منصوب بعده يدل على أنه شبيه بالمضاف وهو معرب منصوب.",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Shabih bil-Mudaf, inflected as accusative with Yaa (منصوب بالياء)."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  },
  {
    "id": "egbac_ar_ch1_ex_15",
    "titleEn": "EG-Bac Advanced Exercise 15: Warning & Temptation Syntactic Patterns (Al-Ighra' wa al-Tahdhir)",
    "titleAr": "تمرين البكالوريا المتقدم 15: أساليب الإغراء والتحذير وتقدير العامل المحذوف",
    "difficulty": "medium",
    "questionEn": "In: \"الصِّدْقَ وَالأَمَانَةَ أَيُّهَا الشَّبَابُ\", the parsing of \"الصِّدْقَ\" is:",
    "questionAr": "في أسلوب الإغراء: «الصِّدْقَ وَالأَمَانَةَ أَيُّهَا الشَّبَابُ»، ما إعراب كلمة «الصِّدْقَ»؟",
    "optionsEn": [
      "Mughra bihi, Maf'ul bihi in accusative case for an obligatorily omitted verb (تقديره الزموا)",
      "Mubtada' in nominative case",
      "Maf'ul mutlaq",
      "Munada in accusative case"
    ],
    "optionsAr": [
      "مُغرى به، مفعول به لفعل محذوف وجوباً تقديره (الزموا) منصوب وعلامة نصبه الفتحة الظاهرة",
      "مبتدأ مرفوع وعلامة رفعه الضمة",
      "مفعول مطلق منصوب بالفتحة",
      "منادى منصوب بالفتحة"
    ],
    "correctAnswer": "Mughra bihi, Maf'ul bihi in accusative case for an obligatorily omitted verb (تقديره الزموا)",
    "correctIndex": 0,
    "hintEn": "In repeated or conjoined forms of inducement (العطف والتكرار), the governing verb 'الزم' is obligatorily deleted.",
    "hintAr": "المغرى به المعطوف يُعرب مفعولاً به لفعل محذوف وجوباً تقديره (الزم).",
    "stepByStepSolutionEn": [
      "Step 1: Analyze the context: In: \"الصِّدْقَ وَالأَمَانَةَ أَيُّهَا الشَّبَابُ\", the parsing of \"الصِّدْقَ\" is:...",
      "Step 2: Rule application: In repeated or conjoined forms of inducement (العطف والتكرار), the governing verb 'الزم' is obligatorily deleted.",
      "Step 3: Conclusion: Confirmed correct answer is 'Mughra bihi, Maf'ul bihi in accusative case for an obligatorily omitted verb (تقديره الزموا)'."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: تحليل الشاهد والسياق اللغوي أو البلاغي: في أسلوب الإغراء: «الصِّدْقَ وَالأَمَانَةَ أَيُّهَا الشَّبَابُ»، ما إعراب كلمة «الصِّدْقَ»؟...",
      "الخطوة ٢: تطبيق القاعدة والضابط الوزاري: المغرى به المعطوف يُعرب مفعولاً به لفعل محذوف وجوباً تقديره (الزم).",
      "الخطوة ٣: الاستنتاج النهائي: الاختيار الصحيح المؤكد هو: Mughra bihi, Maf'ul bihi in accusative case for an obligatorily omitted verb (تقديره الزموا)."
    ],
    "teacherTipEn": "Pay close attention to subtle ministerial distractor traps in this concept.",
    "teacherTipAr": "انتبه دائماً للمشتتات الدقيقة وفروق الصياغة في أسئلة الامتحان الوزاري المعتمدة."
  }
];
