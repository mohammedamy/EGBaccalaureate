import type { Branch, Chapter } from '../types/curriculum';
import { islamicCh1Databank } from './databanks/thanaweya/islamicCh1Databank';
import { islamicCh1SolvedExamples, islamicCh1Exercises } from './textbook/thanaweya/islamicCh1Textbook';
import { islamicCh2Databank } from './databanks/thanaweya/islamicCh2Databank';
import { islamicCh2SolvedExamples, islamicCh2Exercises } from './textbook/thanaweya/islamicCh2Textbook';
import { islamicCh3Databank } from './databanks/thanaweya/islamicCh3Databank';
import { islamicCh3SolvedExamples, islamicCh3Exercises } from './textbook/thanaweya/islamicCh3Textbook';
import { islamicCh4Databank } from './databanks/thanaweya/islamicCh4Databank';
import { islamicCh4SolvedExamples, islamicCh4Exercises } from './textbook/thanaweya/islamicCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'th_isl_ch1',
    chapterNumber: 1,
    titleEn: "Chapter 1: Recitation Rules (Tajweed), Islamic Creed, and Destiny (Surah Luqman & An-Nur)",
    titleAr: "الفصل الأول: أحكام التلاوة والتجويد، العقيدة الإسلامية، والإيمان بالقضاء والقدر (سورة لقمان والنور)",
    descriptionEn: "Rules of Tajweed (Nun Sakinah, Tanween, Meem Sakinah, and Madd prolongations), core tenets of Islamic Tawhid, divine decree and destiny (Qada & Qadar), and moral exhortations from Surah Luqman and Surah An-Nur.",
    descriptionAr: "أحكام التلاوة والتجويد (النون الساكنة والتنوين، الميم الساكنة، والمدود)، أصول العقيدة الإسلامية والتوحيد، الإيمان بالقضاء والقدر مع الأخذ بالأسباب، والوصايا التربوية العقدية والآداب الاجتماعية في سورتي لقمان والنور.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_isl_ch1_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Rules of Nun Sakinah and Tanween: Izhar, Idgham with/without Ghunnah, Iqlab, and Ikhfa",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ أحكام النون الساكنة والتنوين: الإظهار الحلقي، الإدغام بغنة وبغير غنة، الإقلاب، والإخفاء الحقيقي",
        summaryEn: "Comprehensive conceptual and applied mastery of Rules of Nun Sakinah and Tanween: Izhar, Idgham with/without Ghunnah, Iqlab, and Ikhfa, Rules of Prolongation (Madd): Natural Madd (Asli) and Secondary Madd (Far'i) Due to Hamzah or Sukun, and Educational and Creational Exhortations in Surah Luqman: Monotheism, Filial Piety, and Humility.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ أحكام النون الساكنة والتنوين: الإظهار الحلقي، الإدغام بغنة وبغير غنة، الإقلاب، والإخفاء الحقيقي، أحكام المدود: المد الأصلي الطبيعي والمد الفرعي بسبب الهمز أو السكون، و الوصايا التربوية والعقدية في سورة لقمان: التوحيد الخالص، بر الوالدين، والتواضع الاجتماعي.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Rules of Nun Sakinah and Tanween: Izhar, Idgham with/without Ghunnah, Iqlab, and Ikhfa\nNun Sakinah and Tanween have four fundamental rulings: Izhar before throat letters, Idgham before (YANMU and L-R), Iqlab before Ba, and Ikhfa before the remaining fifteen letters.\n\nIdgham with Ghunnah occurs when Nun Sakinah or Tanween is followed by Ya, Nun, Meem, or Waw across two separate words, prolonging nasal resonance for two counts.\n\nIf a Nun Sakinah encounters an Idgham letter within the exact same single word (e.g., Dunya, Sinwan, Qinwan, Bunyan), it must be pronounced with Absolute Izhar (Izhar Mutlaq) to prevent lexical ambiguity.\n\n#### 2. Rules of Prolongation (Madd): Natural Madd (Asli) and Secondary Madd (Far'i) Due to Hamzah or Sukun\nNatural Madd requires extending the sound of Alif, Waw, or Ya for two beats without an external trigger of Hamzah or Sukun.\n\nObligatory Connected Madd (Madd Muttasil) occurs when the Madd letter and Hamzah are in the same word and is held for four or five counts.\n\nNecessary Madd (Madd Lazim) arises when an original non-transient Sukun follows a Madd letter within a word or Quranic prefix, requiring an unalterable extension of six full beats.\n\n#### 3. Educational and Creational Exhortations in Surah Luqman: Monotheism, Filial Piety, and Humility\nLuqman prioritized pure monotheism above all virtues, warning his son that polytheism (Shirk) is an immense and unforgivable transgression.\n\nSurah Luqman couples divine gratitude with filial kindness while clarifying that obedience to parents ceases if they coerce one into idolatry.\n\nThe ethical pedagogy of Luqman synthesizes cognitive vigilance (God knowing the seed hidden in a rock) with socio-behavioral decorum (lowering voice, eschewing arrogance).",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. أحكام النون الساكنة والتنوين: الإظهار الحلقي، الإدغام بغنة وبغير غنة، الإقلاب، والإخفاء الحقيقي\nللنون الساكنة والتنوين أربعة أحكام رئيسية: الإظهار الحلقي عند حروف الحلق الستة، الإدغام عند حروف (يرملون)، الإقلاب عند حرف الباء، والإخفاء الحقيقي عند خمسة عشر حرفاً.\n\nيقع الإدغام بغنة عندما تلتقي النون الساكنة أو التنوين بأحد حروف (ينمو) في كلمتين منفصلتين مع غنة مقدارها حركتان.\n\nإذا التقت النون الساكنة بحرف الإدغام في كلمة واحدة (مثل: دُنيا، صنوان، قنوان، بُنيان) وجب الإظهار المطلق حمايةً للبنية المعجمية للكلمة ومنعاً للالتباس.\n\n#### ٢. أحكام المدود: المد الأصلي الطبيعي والمد الفرعي بسبب الهمز أو السكون\nالمد الطبيعي الأصلي هو إطالة الصوت بحرف من حروف المد الثلاثة بمقدار حركتين دون توقف على سبب من همز أو سكون.\n\nالمد المتصل الواجب يتحقق باجتماع حرف المد والهمزة في كلمة واحدة ويمد وجوباً بمقدار أربع أو خمس حركات.\n\n#### ٢. الوصايا التربوية والعقدية في سورة لقمان: التوحيد الخالص، بر الوالدين، والتواضع الاجتماعي\nبدأ لقمان وصاياه لابنه بترسيخ التوحيد الخالص محذراً من أن الشرك بالله ظلم عظيم ينقض أصل الإيمان.\n\nقرنت سورة لقمان شكر الله ببر الوالدين والإحسان إليهما، مع تأكيد أن طاعتهما تسقط إذا أمرا بالشرك بالله.\n\nتجمع منهجية لقمان التربوية بين استشعار الرقابة الإلهية الدقيقة وخفض الصوت والتواضع ونبذ الخيلاء في المشي والتعامل.",
        formulas: [
          {
            labelEn: "Rules of Nun Sakinah and Tanween: Izhar, Idgham with/without Ghunnah, Iqlab, and Ikhfa",
            labelAr: "أحكام النون الساكنة والتنوين: الإظهار الحلقي، الإدغام بغنة وبغير غنة، الإقلاب، والإخفاء الحقيقي",
            latex: "\\text{Core Rule: } Rules of Nun Sakinah and Tanwe"
          },
          {
            labelEn: "Rules of Prolongation (Madd): Natural Madd (Asli) and Secondary Madd (Far'i) Due to Hamzah or Sukun",
            labelAr: "أحكام المدود: المد الأصلي الطبيعي والمد الفرعي بسبب الهمز أو السكون",
            latex: "\\text{Applied Maxim: } Rules of Prolongation (Madd): "
          }
        ],
        moeRef: {
          bookTitleEn: "Islamic Religious Education Grade 12",
          bookTitleAr: "التربية الدينية الإسلامية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-ISL-CH01-L1",
          pageRange: '5-30'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Rules of Nun Sakinah and Tanween: Izhar, Idgham with/without Ghunnah, Iqlab, and Ikhfa",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ أحكام النون الساكنة والتنوين: الإظهار الحلقي، الإدغام بغنة وبغير غنة، الإقلاب، والإخفاء الحقيقي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-ISL-CH01-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Rules of Nun Sakinah and Tanween: Izhar, Idgham with/without Ghunnah, Iqlab, and Ikhfa",
            "Apply analytical thinking to Rules of Prolongation (Madd): Natural Madd (Asli) and Secondary Madd (Far'i) Due to Hamzah or Sukun",
            "Synthesize ethical resolutions for Educational and Creational Exhortations in Surah Luqman: Monotheism, Filial Piety, and Humility"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ أحكام النون الساكنة والتنوين: الإظهار الحلقي، الإدغام بغنة وبغير غنة، الإقلاب، والإخفاء الحقيقي",
            "تطبيق التفكير التحليلي الناقد في مسألة أحكام المدود: المد الأصلي الطبيعي والمد الفرعي بسبب الهمز أو السكون",
            "بناء رؤى أخلاقية متكاملة لـ الوصايا التربوية والعقدية في سورة لقمان: التوحيد الخالص، بر الوالدين، والتواضع الاجتماعي"
          ],
          prerequisitesEn: ['Islamic Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة الإسلامية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Maqasid al-Sharia', definition: 'The higher universal objectives and purposes of Islamic legislation' },
            { term: 'Ijtihad', definition: 'Scholarly independent reasoning to deduce rulings for novel contemporary issues' }
          ],
          keyVocabularyAr: [
            { term: 'مقاصد الشريعة', definition: 'الغايات الكلية والحكم والمصالح التي قصدها الشارع الحكيم في التشريع' },
            { term: 'الاجتهاد المعاصر', definition: 'بذل الوسع العلمي لاستنباط الأحكام الشرعية العملية للنوازل والمستجدات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Quranic/Hadith context and reflective dialogue', activitiesAr: 'استعراض النصوص الشرعية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق الفقهي', duration: '75 min', activitiesEn: 'Rules analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing true reliance on Allah with passive fatalism without taking necessary material causes'
          ],
          commonMisconceptionsAr: [
            'الخلط بين التوكل الشرعي الصادق والتواكل السلبي دون الأخذ بالأسباب العلمية والمادية المتاحة'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative fiqh analysis and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للأحكام والأدلة.',
            advanced: 'تكليف بدراسات مقارنة في فقه النوازل وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Rules of Nun Sakinah and Tanween: Izhar, Idgham with/without Ghunnah, Iqlab, and Ikhfa?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (أحكام النون الساكنة والتنوين: الإظهار الحلقي، الإدغام بغنة وبغير غنة، الإقلاب، والإخفاء الحقيقي)؟",
            solutionEn: "Nun Sakinah and Tanween have four fundamental rulings: Izhar before throat letters, Idgham before (YANMU and L-R), Iqlab before Ba, and Ikhfa before the remaining fifteen letters.",
            solutionAr: "للنون الساكنة والتنوين أربعة أحكام رئيسية: الإظهار الحلقي عند حروف الحلق الستة، الإدغام عند حروف (يرملون)، الإقلاب عند حرف الباء، والإخفاء الحقيقي عند خمسة عشر حرفاً."
          }
        },
        worksheet: {
          id: 'th_isl_ch1_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Rules of Nun Sakinah and Tanween: Izhar, Idgham with/without Ghunnah, Iqlab, and Ikhfa",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ أحكام النون الساكنة والتنوين: الإظهار الحلقي، الإدغام بغنة وبغير غنة، الإقلاب، والإخفاء الحقيقي",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'islamic_studies_lab',
          titleEn: "Islamic Studies & Tajweed Recitation Studio",
          titleAr: "استوديو الدراسات الإسلامية وترتيل التجويد",
          descriptionEn: 'Interactive Islamic studies studio featuring Tajweed recitation, Maqasid simulations, Seerah milestones, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية المعاصرة.'
        }
      },
      {
        id: 'th_isl_ch1_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Social Decorum and Safeguarding Communal Honor in Surah An-Nur: Seeking Permission and Chastity",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ الآداب الاجتماعية وحفظ الأعراض في سورة النور: آداب الاستئذان، غض البصر، والعفاف المجتمعي",
        summaryEn: "Comprehensive conceptual and applied mastery of Social Decorum and Safeguarding Communal Honor in Surah An-Nur: Seeking Permission and Chastity, Belief in Divine Destiny (Qada and Qadar): Reconciling Trust in Allah with Active Preparation, and Human Stewardship (Khilafah) and the Cosmic Obligation of Planetary Development (I'mar al-Ard).",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ الآداب الاجتماعية وحفظ الأعراض في سورة النور: آداب الاستئذان، غض البصر، والعفاف المجتمعي، الإيمان بالقضاء والقدر: التوكل الصادق على الله المقترن بالأخذ التام بالأسباب ونبذ التواكل، و الاستخلاف الإنساني في الأرض وأمانة الإعمار والبناء الحضاري والمسؤولية التكليفية.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Social Decorum and Safeguarding Communal Honor in Surah An-Nur: Seeking Permission and Chastity\nSurah An-Nur establishes the mandatory protocol of seeking permission (Isti'dhan) and greeting residents before entering private homes.\n\nThe surah commands both men and women to lower their gaze and safeguard their modesty to preserve marital fidelity and social purity.\n\nSurah An-Nur institutionalizes stringent legal deterrence against manufactured slander (Hadith al-Ifk) by mandating four eyewitnesses and penalizing unsubstantiated defamation.\n\n#### 2. Belief in Divine Destiny (Qada and Qadar): Reconciling Trust in Allah with Active Preparation\nBelief in Divine Decree (Qada and Qadar) is one of the six essential articles of Islamic faith, affirming Allah's absolute knowledge and sovereignty.\n\nTrue reliance on Allah (Tawakkul) strictly demands utilizing all practical means and scientific preparations without passively submitting to fatalism.\n\nReconciling human free will with divine omnipotence affirms that human moral choice operates within Allah's cosmic will without coercion (Taklif without Jabr).\n\n#### 3. Human Stewardship (Khilafah) and the Cosmic Obligation of Planetary Development (I'mar al-Ard)\nAllah designated humankind as vicegerents (Khulafaa) entrusted with cultivating the earth with justice, knowledge, and ethical righteousness.\n\nPlanetary stewardship forbids reckless environmental destruction, resource squandering, or causing societal corruption (Fasad fi al-Ard).\n\nThe Islamic paradigm harmonizes spiritual transcendence with earthly civilizational advancement, defining productive work and scientific discovery as acts of worship.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. الآداب الاجتماعية وحفظ الأعراض في سورة النور: آداب الاستئذان، غض البصر، والعفاف المجتمعي\nأوجبت سورة النور الاستئذان وإلقاء السلام قبل دخول البيوت صيانةً لحرمات المساكن والخصوصية الأسرية.\n\nأمرت سورة النور كلاً من المؤمنين والمؤمنات بغض البصر وحفظ الفروج سداً لذرائع الفتنة وصيانةً لطهارة المجتمع.\n\nوضعت سورة النور سياجاً قانونياً رادعاً ضد ترويج الشائعات والإفك باشتراط أربعة شهود عدول وتجريم القذف لحماية الأعراض من الاغتيال المعنوي.\n\n#### ٢. الإيمان بالقضاء والقدر: التوكل الصادق على الله المقترن بالأخذ التام بالأسباب ونبذ التواكل\nالإيمان بالقضاء والقدر خيره وشره هو الركن السادس من أركان الإيمان، مؤكداً علم الله المحيط الشامل ومشيئته وحكمته.\n\nالتوكل الشرعي الصادق يقتضي وجوب الأخذ بكافة الأسباب المادية والعلمية المتاحة مع تفويض النتائج لله ونبذ التواكل والقعود.\n\n#### ٢. الاستخلاف الإنساني في الأرض وأمانة الإعمار والبناء الحضاري والمسؤولية التكليفية\nاستخلف الله الإنسان في الأرض وحمله الأمانة لعمارة الكون بالعدل والعلم والصلاح والعمل الصالح المنتج.\n\nتقتضي أمانة الاستخلاف تحريم تلويث البيئة أو تبديد الثروات الطبيعية أو نشر الفساد في الأرض بعد إصلاحها.\n\nتدمج الرؤية الإسلامية بين البعد الروحي والبناء الحضاري المادي، معتبرة العمل المتقن والبحث العلمي النافع عبادة واستخلافاً حقيقياً.",
        formulas: [
          {
            labelEn: "Social Decorum and Safeguarding Communal Honor in Surah An-Nur: Seeking Permission and Chastity",
            labelAr: "الآداب الاجتماعية وحفظ الأعراض في سورة النور: آداب الاستئذان، غض البصر، والعفاف المجتمعي",
            latex: "\\text{Core Rule: } Social Decorum and Safeguardin"
          },
          {
            labelEn: "Belief in Divine Destiny (Qada and Qadar): Reconciling Trust in Allah with Active Preparation",
            labelAr: "الإيمان بالقضاء والقدر: التوكل الصادق على الله المقترن بالأخذ التام بالأسباب ونبذ التواكل",
            latex: "\\text{Applied Maxim: } Belief in Divine Destiny (Qada"
          }
        ],
        moeRef: {
          bookTitleEn: "Islamic Religious Education Grade 12",
          bookTitleAr: "التربية الدينية الإسلامية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-ISL-CH01-L2",
          pageRange: '20-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Social Decorum and Safeguarding Communal Honor in Surah An-Nur: Seeking Permission and Chastity",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ الآداب الاجتماعية وحفظ الأعراض في سورة النور: آداب الاستئذان، غض البصر، والعفاف المجتمعي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-ISL-CH01-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Social Decorum and Safeguarding Communal Honor in Surah An-Nur: Seeking Permission and Chastity",
            "Apply analytical thinking to Belief in Divine Destiny (Qada and Qadar): Reconciling Trust in Allah with Active Preparation",
            "Synthesize ethical resolutions for Human Stewardship (Khilafah) and the Cosmic Obligation of Planetary Development (I'mar al-Ard)"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ الآداب الاجتماعية وحفظ الأعراض في سورة النور: آداب الاستئذان، غض البصر، والعفاف المجتمعي",
            "تطبيق التفكير التحليلي الناقد في مسألة الإيمان بالقضاء والقدر: التوكل الصادق على الله المقترن بالأخذ التام بالأسباب ونبذ التواكل",
            "بناء رؤى أخلاقية متكاملة لـ الاستخلاف الإنساني في الأرض وأمانة الإعمار والبناء الحضاري والمسؤولية التكليفية"
          ],
          prerequisitesEn: ['Islamic Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة الإسلامية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Maqasid al-Sharia', definition: 'The higher universal objectives and purposes of Islamic legislation' },
            { term: 'Ijtihad', definition: 'Scholarly independent reasoning to deduce rulings for novel contemporary issues' }
          ],
          keyVocabularyAr: [
            { term: 'مقاصد الشريعة', definition: 'الغايات الكلية والحكم والمصالح التي قصدها الشارع الحكيم في التشريع' },
            { term: 'الاجتهاد المعاصر', definition: 'بذل الوسع العلمي لاستنباط الأحكام الشرعية العملية للنوازل والمستجدات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Quranic/Hadith context and reflective dialogue', activitiesAr: 'استعراض النصوص الشرعية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق الفقهي', duration: '75 min', activitiesEn: 'Rules analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing true reliance on Allah with passive fatalism without taking necessary material causes'
          ],
          commonMisconceptionsAr: [
            'الخلط بين التوكل الشرعي الصادق والتواكل السلبي دون الأخذ بالأسباب العلمية والمادية المتاحة'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative fiqh analysis and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للأحكام والأدلة.',
            advanced: 'تكليف بدراسات مقارنة في فقه النوازل وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Social Decorum and Safeguarding Communal Honor in Surah An-Nur: Seeking Permission and Chastity?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (الآداب الاجتماعية وحفظ الأعراض في سورة النور: آداب الاستئذان، غض البصر، والعفاف المجتمعي)؟",
            solutionEn: "Surah An-Nur establishes the mandatory protocol of seeking permission (Isti'dhan) and greeting residents before entering private homes.",
            solutionAr: "أوجبت سورة النور الاستئذان وإلقاء السلام قبل دخول البيوت صيانةً لحرمات المساكن والخصوصية الأسرية."
          }
        },
        worksheet: {
          id: 'th_isl_ch1_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Social Decorum and Safeguarding Communal Honor in Surah An-Nur: Seeking Permission and Chastity",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ الآداب الاجتماعية وحفظ الأعراض في سورة النور: آداب الاستئذان، غض البصر، والعفاف المجتمعي",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'islamic_studies_lab',
          titleEn: "Islamic Studies & Tajweed Recitation Studio",
          titleAr: "استوديو الدراسات الإسلامية وترتيل التجويد",
          descriptionEn: 'Interactive Islamic studies studio featuring Tajweed recitation, Maqasid simulations, Seerah milestones, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية المعاصرة.'
        }
      }
    ],
    databank: islamicCh1Databank,
    solvedExamples: islamicCh1SolvedExamples,
    exerciseProblems: islamicCh1Exercises
  },
  {
    id: 'th_isl_ch2',
    chapterNumber: 2,
    titleEn: "Chapter 2: Prophetic Biography, Shura, Treaty of Hudaybiyyah, and Conquest of Makkah",
    titleAr: "الفصل الثاني: السيرة النبوية، التخطيط والشورى، صلح الحديبية، وفتح مكة المكرمة",
    descriptionEn: "Prophetic methodology in leadership, strategic planning in the Hijrah, institutionalization of Shura (consultation), diplomacy in the Treaty of Hudaybiyyah, and magnanimity in the Conquest of Makkah.",
    descriptionAr: "المنهج النبوي في القيادة والإدارة، التخطيط المحكم في الهجرة، ترسيخ مبدأ الشورى، الدبلوماسية والرؤية الاستراتيجية في صلح الحديبية، والعفو عند المقدرة في فتح مكة المكرمة.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_isl_ch2_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Prophetic Strategic Planning in the Hijrah: Resource Allocation, Scouts, and Operational Security",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ التخطيط الاستراتيجي في الهجرة النبوية: توزيع الأدوار، الأمانات، والأخذ التام بالأسباب",
        summaryEn: "Comprehensive conceptual and applied mastery of Prophetic Strategic Planning in the Hijrah: Resource Allocation, Scouts, and Operational Security, The Principle of Shura (Mutual Consultation) in Governance and Prophetic Military Engagements, and The Treaty of Hudaybiyyah: Diplomatic Foresight, Strategic Truce, and the Manifest Victory.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ التخطيط الاستراتيجي في الهجرة النبوية: توزيع الأدوار، الأمانات، والأخذ التام بالأسباب، مبدأ الشورى في إدارة الدولة والمواقف القيادية النبوية في الغزوات وإدارة الأزمات، و صلح الحديبية: الرؤية الدبلوماسية الاستراتيجية، فقه الموازنات، والفتح المبين.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Prophetic Strategic Planning in the Hijrah: Resource Allocation, Scouts, and Operational Security\nThe Prophet Muhammad (PBUH) planned the Hijrah with meticulous material organization, selecting Abu Bakr as travel companion and Ali to return trusts.\n\nThe migration operational blueprint utilized specialized roles: Asma for provisions, Abdullah ibn Abi Bakr for reconnaissance, and Ibn Urayqit as navigation guide.\n\nThe Hijrah embodies the golden synthesis of Islamic leadership: relying on human expertise and operational security while remaining anchored in absolute faith.\n\n#### 2. The Principle of Shura (Mutual Consultation) in Governance and Prophetic Military Engagements\nThe Prophet consistently consulted his companions despite receiving divine revelation, instituting Shura as an unshakeable governance pillar.\n\nDuring the Battle of the Trench (Al-Khandaq), the Prophet embraced the strategic military counsel of Salman al-Farsi to excavate a defensive trench.\n\nShura fosters collective responsibility, institutional resilience, and intellectual empowerment across all strata of the civic community.\n\n#### 3. The Treaty of Hudaybiyyah: Diplomatic Foresight, Strategic Truce, and the Manifest Victory\nThe Treaty of Hudaybiyyah instituted a ten-year bilateral cessation of hostilities between the Muslims and the Quraysh.\n\nThe peace treaty allowed widespread intercultural contact and ideological dialogue, resulting in more people embracing Islam in two years than in the previous two decades.\n\nThe Quran designated the apparent tactical concessions of Hudaybiyyah as \"a manifest victory,\" demonstrating that peace and intellectual freedom are the truest victories.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. التخطيط الاستراتيجي في الهجرة النبوية: توزيع الأدوار، الأمانات، والأخذ التام بالأسباب\nخطط النبي ﷺ للهجرة النبوية بدقة متناهية، فاختار الصديق رفيقاً، وعلياً للفداء في فراشه ورد الأمانات لأهل مكة.\n\nوزع النبي المهام التخصصية ببراعة: أسماء للإمداد والتموين، وعبد الله بن أبي بكر للاستخبارات، وعبد الله بن أريقط دليلاً خبيراً بالطرق.\n\nتجسد الهجرة نموذج القيادة الرشيدة في الجمع بين الأخذ بأحدث خطط التأمين والتنظيم والاستعانة بالكفاءات مع التوكل التام على الله.\n\n#### ٢. مبدأ الشورى في إدارة الدولة والمواقف القيادية النبوية في الغزوات وإدارة الأزمات\nحرص النبي ﷺ على استشارة أصحابه في شؤون الحكم والحروب ترسيخاً لمبدأ الشورى كأصل دستوري للأمة.\n\nأخذ النبي ﷺ في غزوة الخندق (الأحزاب) بمشورة الصحابي سلمان الفارسي بحفر الخندق خطةً دفاعية غير مسبوقة.\n\n#### ٢. صلح الحديبية: الرؤية الدبلوماسية الاستراتيجية، فقه الموازنات، والفتح المبين\nأبرم النبي ﷺ في صلح الحديبية معاهدة سلام مع قريش لوقف الحرب لمدة عشر سنوات صيانةً للأرواح وإفساحاً للحوار.\n\nأتاح الصلح للمسلمين التواصل السلمي ونشر الدعوة بالحكمة، فدخل في الإسلام خلال عامين أضعاف من دخلوا منذ بدء الرسالة.\n\nسمى القرآن صلح الحديبية \"فتحاً مبيناً\" تأكيداً على أن السلام والاستقرار والتبادل الفكري السلمي أعظم نصر يحققه المشروع الحضاري.",
        formulas: [
          {
            labelEn: "Prophetic Strategic Planning in the Hijrah: Resource Allocation, Scouts, and Operational Security",
            labelAr: "التخطيط الاستراتيجي في الهجرة النبوية: توزيع الأدوار، الأمانات، والأخذ التام بالأسباب",
            latex: "\\text{Core Rule: } Prophetic Strategic Planning i"
          },
          {
            labelEn: "The Principle of Shura (Mutual Consultation) in Governance and Prophetic Military Engagements",
            labelAr: "مبدأ الشورى في إدارة الدولة والمواقف القيادية النبوية في الغزوات وإدارة الأزمات",
            latex: "\\text{Applied Maxim: } The Principle of Shura (Mutual"
          }
        ],
        moeRef: {
          bookTitleEn: "Islamic Religious Education Grade 12",
          bookTitleAr: "التربية الدينية الإسلامية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-ISL-CH02-L1",
          pageRange: '40-65'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Prophetic Strategic Planning in the Hijrah: Resource Allocation, Scouts, and Operational Security",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ التخطيط الاستراتيجي في الهجرة النبوية: توزيع الأدوار، الأمانات، والأخذ التام بالأسباب",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-ISL-CH02-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Prophetic Strategic Planning in the Hijrah: Resource Allocation, Scouts, and Operational Security",
            "Apply analytical thinking to The Principle of Shura (Mutual Consultation) in Governance and Prophetic Military Engagements",
            "Synthesize ethical resolutions for The Treaty of Hudaybiyyah: Diplomatic Foresight, Strategic Truce, and the Manifest Victory"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ التخطيط الاستراتيجي في الهجرة النبوية: توزيع الأدوار، الأمانات، والأخذ التام بالأسباب",
            "تطبيق التفكير التحليلي الناقد في مسألة مبدأ الشورى في إدارة الدولة والمواقف القيادية النبوية في الغزوات وإدارة الأزمات",
            "بناء رؤى أخلاقية متكاملة لـ صلح الحديبية: الرؤية الدبلوماسية الاستراتيجية، فقه الموازنات، والفتح المبين"
          ],
          prerequisitesEn: ['Islamic Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة الإسلامية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Maqasid al-Sharia', definition: 'The higher universal objectives and purposes of Islamic legislation' },
            { term: 'Ijtihad', definition: 'Scholarly independent reasoning to deduce rulings for novel contemporary issues' }
          ],
          keyVocabularyAr: [
            { term: 'مقاصد الشريعة', definition: 'الغايات الكلية والحكم والمصالح التي قصدها الشارع الحكيم في التشريع' },
            { term: 'الاجتهاد المعاصر', definition: 'بذل الوسع العلمي لاستنباط الأحكام الشرعية العملية للنوازل والمستجدات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Quranic/Hadith context and reflective dialogue', activitiesAr: 'استعراض النصوص الشرعية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق الفقهي', duration: '75 min', activitiesEn: 'Rules analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing true reliance on Allah with passive fatalism without taking necessary material causes'
          ],
          commonMisconceptionsAr: [
            'الخلط بين التوكل الشرعي الصادق والتواكل السلبي دون الأخذ بالأسباب العلمية والمادية المتاحة'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative fiqh analysis and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للأحكام والأدلة.',
            advanced: 'تكليف بدراسات مقارنة في فقه النوازل وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Prophetic Strategic Planning in the Hijrah: Resource Allocation, Scouts, and Operational Security?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (التخطيط الاستراتيجي في الهجرة النبوية: توزيع الأدوار، الأمانات، والأخذ التام بالأسباب)؟",
            solutionEn: "The Prophet Muhammad (PBUH) planned the Hijrah with meticulous material organization, selecting Abu Bakr as travel companion and Ali to return trusts.",
            solutionAr: "خطط النبي ﷺ للهجرة النبوية بدقة متناهية، فاختار الصديق رفيقاً، وعلياً للفداء في فراشه ورد الأمانات لأهل مكة."
          }
        },
        worksheet: {
          id: 'th_isl_ch2_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Prophetic Strategic Planning in the Hijrah: Resource Allocation, Scouts, and Operational Security",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ التخطيط الاستراتيجي في الهجرة النبوية: توزيع الأدوار، الأمانات، والأخذ التام بالأسباب",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'maqasid_fiqh_studio',
          titleEn: "Maqasid & Islamic Economics Simulator",
          titleAr: "محاكي مقاصد الشريعة والاقتصاد الإسلامي",
          descriptionEn: 'Interactive Islamic studies studio featuring Tajweed recitation, Maqasid simulations, Seerah milestones, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية المعاصرة.'
        }
      },
      {
        id: 'th_isl_ch2_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of The Conquest of Makkah (Fath Makkah): Humility, Clemency, and \"Go, for you are free\"",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ فتح مكة المكرمة: العفو عند المقدرة، التواضع الإيماني، وإعلان \"اذهبوا فأنتم الطلقاء\"",
        summaryEn: "Comprehensive conceptual and applied mastery of The Conquest of Makkah (Fath Makkah): Humility, Clemency, and \"Go, for you are free\", The Madinah Charter (Dustur al-Madinah): The First Written Constitutional Social Contract, and The Farewell Pilgrimage Address (Khutbat Hajjat al-Wada'): Universal Human Rights Manifesto.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ فتح مكة المكرمة: العفو عند المقدرة، التواضع الإيماني، وإعلان \"اذهبوا فأنتم الطلقاء\"، وثيقة المدينة المنورة: أول دستور مدني تعاقدي يرسخ مبدأ المواطنة والتعددية الدينية، و خطبة حجة الوداع: الإعلان العالمي الأول لحقوق الإنسان والمساواة الإنسانية التامة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. The Conquest of Makkah (Fath Makkah): Humility, Clemency, and \"Go, for you are free\"\nThe Prophet entered Makkah victorious and bowed so deeply upon his mount that his beard touched the saddle in utter humility before God.\n\nRather than seeking vengeance against his former persecutors, the Prophet granted universal amnesty with his immortal words: \"Go, for you are free.\"\n\nThe Conquest of Makkah establishes the supreme Islamic ethic: absolute power must be subordinated to restorative justice, mercy, and national reconciliation.\n\n#### 2. The Madinah Charter (Dustur al-Madinah): The First Written Constitutional Social Contract\nThe Madinah Charter unified Muslims, Jewish communities, and other tribes as one civic body with equal rights and mutual obligations.\n\nThe Charter explicitly recognized freedom of religious belief and autonomy in judicial religious laws for Jewish and non-Muslim communities.\n\nThe Madinah Charter established that allegiance to the civic constitution and shared territorial defense transcends tribal, ethnic, and religious divisions.\n\n#### 3. The Farewell Pilgrimage Address (Khutbat Hajjat al-Wada'): Universal Human Rights Manifesto\nIn his Farewell Address, the Prophet declared the sanctity of all human lives, properties, and honors as inviolable.\n\nThe address eradicated racial supremacy, proclaiming: \"No Arab has superiority over a non-Arab, nor white over black, except by piety.\"\n\nThe Farewell Address laid down the foundational tenets of economic justice by abolishing usurious debts and emphasizing the protection and honoring of women's rights.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. فتح مكة المكرمة: العفو عند المقدرة، التواضع الإيماني، وإعلان \"اذهبوا فأنتم الطلقاء\"\nدخل النبي ﷺ مكة فاتحاً منتصراً في قمة التواضع والشكر لله حتى كادت لحيته الشريفة تمس رحل ناقته دون زهو أو خيلاء.\n\nأعلن النبي العفو العام عن أهل مكة الذين حاربوه وعذبوا أصحابه وأخرجوهم من ديارهم قائلاً كلمته الخالدة: \"اذهبوا فأنتم الطلقاء\".\n\nيرسخ فتح مكة المبدأ الإسلامي الأسمى: إخضاع القوة للعدالة والرحمة والتسامح، ونبذ الانتقام لبناء وحدة مجتمعية راسخة.\n\n#### ٢. وثيقة المدينة المنورة: أول دستور مدني تعاقدي يرسخ مبدأ المواطنة والتعددية الدينية\nصاغ النبي ﷺ وثيقة المدينة كأول دستور مدني يجمع المسلمين واليهود وسائر الطوائف في كيان سياسي واحد على قاعدة المواطنة.\n\nكفلت الوثيقة لجميع الطوائف واليهود حرية الاعتقاد والعبادة واستقلالية التقاضي في أحكامهم الدينية بحماية الدولة.\n\n#### ٢. خطبة حجة الوداع: الإعلان العالمي الأول لحقوق الإنسان والمساواة الإنسانية التامة\nأعلن النبي ﷺ في خطبة الوداع حرمة الدماء والأموال والأعراض وجعلها مقدسة كحرمة ذلك اليوم في ذلك البلد الحرام.\n\nألغت الخطبة التمييز العنصري والطبقي معلنة: \"لا فضل لعربي على أعجمي ولا لأبيض على أسود إلا بالتقوى\".\n\nقضت خطبة الوداع على الاستغلال الاقتصادي بإلغاء الربا، وأكدت على الوصية بالنساء ورعاية حقوقهن والعدالة الأسرية.",
        formulas: [
          {
            labelEn: "The Conquest of Makkah (Fath Makkah): Humility, Clemency, and \"Go, for you are free\"",
            labelAr: "فتح مكة المكرمة: العفو عند المقدرة، التواضع الإيماني، وإعلان \"اذهبوا فأنتم الطلقاء\"",
            latex: "\\text{Core Rule: } The Conquest of Makkah (Fath M"
          },
          {
            labelEn: "The Madinah Charter (Dustur al-Madinah): The First Written Constitutional Social Contract",
            labelAr: "وثيقة المدينة المنورة: أول دستور مدني تعاقدي يرسخ مبدأ المواطنة والتعددية الدينية",
            latex: "\\text{Applied Maxim: } The Madinah Charter (Dustur al"
          }
        ],
        moeRef: {
          bookTitleEn: "Islamic Religious Education Grade 12",
          bookTitleAr: "التربية الدينية الإسلامية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-ISL-CH02-L2",
          pageRange: '55-80'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of The Conquest of Makkah (Fath Makkah): Humility, Clemency, and \"Go, for you are free\"",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ فتح مكة المكرمة: العفو عند المقدرة، التواضع الإيماني، وإعلان \"اذهبوا فأنتم الطلقاء\"",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-ISL-CH02-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of The Conquest of Makkah (Fath Makkah): Humility, Clemency, and \"Go, for you are free\"",
            "Apply analytical thinking to The Madinah Charter (Dustur al-Madinah): The First Written Constitutional Social Contract",
            "Synthesize ethical resolutions for The Farewell Pilgrimage Address (Khutbat Hajjat al-Wada'): Universal Human Rights Manifesto"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ فتح مكة المكرمة: العفو عند المقدرة، التواضع الإيماني، وإعلان \"اذهبوا فأنتم الطلقاء\"",
            "تطبيق التفكير التحليلي الناقد في مسألة وثيقة المدينة المنورة: أول دستور مدني تعاقدي يرسخ مبدأ المواطنة والتعددية الدينية",
            "بناء رؤى أخلاقية متكاملة لـ خطبة حجة الوداع: الإعلان العالمي الأول لحقوق الإنسان والمساواة الإنسانية التامة"
          ],
          prerequisitesEn: ['Islamic Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة الإسلامية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Maqasid al-Sharia', definition: 'The higher universal objectives and purposes of Islamic legislation' },
            { term: 'Ijtihad', definition: 'Scholarly independent reasoning to deduce rulings for novel contemporary issues' }
          ],
          keyVocabularyAr: [
            { term: 'مقاصد الشريعة', definition: 'الغايات الكلية والحكم والمصالح التي قصدها الشارع الحكيم في التشريع' },
            { term: 'الاجتهاد المعاصر', definition: 'بذل الوسع العلمي لاستنباط الأحكام الشرعية العملية للنوازل والمستجدات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Quranic/Hadith context and reflective dialogue', activitiesAr: 'استعراض النصوص الشرعية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق الفقهي', duration: '75 min', activitiesEn: 'Rules analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing true reliance on Allah with passive fatalism without taking necessary material causes'
          ],
          commonMisconceptionsAr: [
            'الخلط بين التوكل الشرعي الصادق والتواكل السلبي دون الأخذ بالأسباب العلمية والمادية المتاحة'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative fiqh analysis and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للأحكام والأدلة.',
            advanced: 'تكليف بدراسات مقارنة في فقه النوازل وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding The Conquest of Makkah (Fath Makkah): Humility, Clemency, and \"Go, for you are free\"?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (فتح مكة المكرمة: العفو عند المقدرة، التواضع الإيماني، وإعلان \"اذهبوا فأنتم الطلقاء\")؟",
            solutionEn: "The Prophet entered Makkah victorious and bowed so deeply upon his mount that his beard touched the saddle in utter humility before God.",
            solutionAr: "دخل النبي ﷺ مكة فاتحاً منتصراً في قمة التواضع والشكر لله حتى كادت لحيته الشريفة تمس رحل ناقته دون زهو أو خيلاء."
          }
        },
        worksheet: {
          id: 'th_isl_ch2_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of The Conquest of Makkah (Fath Makkah): Humility, Clemency, and \"Go, for you are free\"",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ فتح مكة المكرمة: العفو عند المقدرة، التواضع الإيماني، وإعلان \"اذهبوا فأنتم الطلقاء\"",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'maqasid_fiqh_studio',
          titleEn: "Maqasid & Islamic Economics Simulator",
          titleAr: "محاكي مقاصد الشريعة والاقتصاد الإسلامي",
          descriptionEn: 'Interactive Islamic studies studio featuring Tajweed recitation, Maqasid simulations, Seerah milestones, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية المعاصرة.'
        }
      }
    ],
    databank: islamicCh2Databank,
    solvedExamples: islamicCh2SolvedExamples,
    exerciseProblems: islamicCh2Exercises
  },
  {
    id: 'th_isl_ch3',
    chapterNumber: 3,
    titleEn: "Chapter 3: The Five Higher Objectives of Sharia (Maqasid), Islamic Jurisprudence, and Social Solidarity",
    titleAr: "الفصل الثالث: مقاصد الشريعة الإسلامية الخمس، فقه المعاملات، والتكافل الاجتماعي وحقوق الأسرة",
    descriptionEn: "The five essential objectives of Islamic Law (Preservation of Religion, Life, Intellect, Lineage, and Wealth), ranks of necessity (Daruriyyat, Hajiyyat, Tahsiniyyat), and social solidarity mechanisms.",
    descriptionAr: "مقاصد الشريعة الإسلامية الكلية الخمس (حفظ الدين، النفس، العقل، النسل، والمال)، مراتب المصالح (الضروريات، الحاجيات، والتحسينيات)، فقه المعاملات، التكافل الاجتماعي، وحقوق الأسرة المسلمة.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_isl_ch3_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of The Five Higher Essential Objectives (Al-Kulliyyat al-Khams): Religion, Life, Intellect, Lineage, Wealth",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ المقاصد الشرعية الكلية الضرورية الخمس: حفظ الدين، النفس، العقل، النسل، والمال",
        summaryEn: "Comprehensive conceptual and applied mastery of The Five Higher Essential Objectives (Al-Kulliyyat al-Khams): Religion, Life, Intellect, Lineage, Wealth, Hierarchical Ranks of Interests: Essentials (Daruriyyat), Needs (Hajiyyat), and Embellishments (Tahsiniyyat), and Jurisprudence of Transactions (Fiqh al-Mu'amalat): Prohibition of Usury, Monopoly, and Fraud.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ المقاصد الشرعية الكلية الضرورية الخمس: حفظ الدين، النفس، العقل، النسل، والمال، مراتب المصالح الشرعية: الضروريات، الحاجيات، والتحسينيات وقواعد الترجيح الفقهي، و فقه المعاملات المالية: تحريم الربا والاحتكار والغش، وتشجيع التجارة العادلة والاستثمار.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. The Five Higher Essential Objectives (Al-Kulliyyat al-Khams): Religion, Life, Intellect, Lineage, Wealth\nAll Islamic legislation is designed to preserve five universal necessities: Faith, Human Life, Intellect, Family Lineage, and Property.\n\nPreservation operates in two dimensions: establishing and reinforcing the good, and repelling and penalizing the harmful.\n\nWhen necessary objectives intersect, preservation of life takes precedence to safeguard human existence, followed systematically by intellect and wealth.\n\n#### 2. Hierarchical Ranks of Interests: Essentials (Daruriyyat), Needs (Hajiyyat), and Embellishments (Tahsiniyyat)\nInterests in Islamic law are categorized into three hierarchical tiers: Essentials, Complementary Needs, and Aesthetic Embellishments.\n\nDaruriyyat prevent total ruin; Hajiyyat remove hardship and distress; Tahsiniyyat refine moral etiquette and elegance.\n\nA foundational principle dictates that an embellishment or complementary need must never undermine or cancel an essential necessity.\n\n#### 3. Jurisprudence of Transactions (Fiqh al-Mu'amalat): Prohibition of Usury, Monopoly, and Fraud\nIslam encourages honest commerce and productive enterprise while strictly outlawing usury, deceptive fraud, and unfair monopolies.\n\nMonopolizing essential staple food and commodities to artificially inflate prices is severely condemned in the Prophetic Sunnah.\n\nThe overarching objective in financial jurisprudence is establishing social harmony through real economic value creation without wealth extraction.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. المقاصد الشرعية الكلية الضرورية الخمس: حفظ الدين، النفس، العقل، النسل، والمال\nتتجه جميع تشريعات الإسلام وأحكامه إلى غاية كبرى واحدة هي حفظ الضروريات الخمس: الدين، النفس، العقل، النسل، والمال.\n\nيتحقق حفظ المقاصد من جانبين متكاملين: جانب الوجود بإقامة أركانها وتنميتها، وجانب العدم برد ما يعتدي عليها وتجريمه.\n\nعند تزاحم المصالح تُرتب الأولويات بحكمة؛ فيقدم حفظ النفس على سائر المصالح عند الهلاك إعمالاً لقواعد الترجيح والموازنة.\n\n#### ٢. مراتب المصالح الشرعية: الضروريات، الحاجيات، والتحسينيات وقواعد الترجيح الفقهي\nتنقسم المصالح المعتبرة في الشريعة إلى ثلاث مراتب تصاعدية: الضروريات، الحاجيات، والتحسينيات.\n\nالضروريات هي ما لا تستقيم الحياة بدونها، والحاجيات ترفع الحرج والمشقة، والتحسينيات تأخذ بمحاسن العادات ومكارم الأخلاق.\n\n#### ٢. فقه المعاملات المالية: تحريم الربا والاحتكار والغش، وتشجيع التجارة العادلة والاستثمار\nأحل الله البيع وحرّم الربا، وشجع التجارة والاستثمار المنتج، وجرّم الغش والاحتكار والتلاعب بحاجات الناس.\n\nاحتكار السلع الغذائية والأساسية لحبسها والتلاعب بأسعارها وإلحاق الضرر بالفقراء من كبائر المعاملات المحرمة قطعا.\n\nتهدف أحكام المعاملات إلى تحقيق التوازن الاجتماعي والعدالة التوزيعية بربط الكسب بالعمل الحقيقي وتحمل المخاطرة دون استغلال.",
        formulas: [
          {
            labelEn: "The Five Higher Essential Objectives (Al-Kulliyyat al-Khams): Religion, Life, Intellect, Lineage, Wealth",
            labelAr: "المقاصد الشرعية الكلية الضرورية الخمس: حفظ الدين، النفس، العقل، النسل، والمال",
            latex: "\\text{Core Rule: } The Five Higher Essential Obje"
          },
          {
            labelEn: "Hierarchical Ranks of Interests: Essentials (Daruriyyat), Needs (Hajiyyat), and Embellishments (Tahsiniyyat)",
            labelAr: "مراتب المصالح الشرعية: الضروريات، الحاجيات، والتحسينيات وقواعد الترجيح الفقهي",
            latex: "\\text{Applied Maxim: } Hierarchical Ranks of Interest"
          }
        ],
        moeRef: {
          bookTitleEn: "Islamic Religious Education Grade 12",
          bookTitleAr: "التربية الدينية الإسلامية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-ISL-CH03-L1",
          pageRange: '75-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of The Five Higher Essential Objectives (Al-Kulliyyat al-Khams): Religion, Life, Intellect, Lineage, Wealth",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ المقاصد الشرعية الكلية الضرورية الخمس: حفظ الدين، النفس، العقل، النسل، والمال",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-ISL-CH03-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of The Five Higher Essential Objectives (Al-Kulliyyat al-Khams): Religion, Life, Intellect, Lineage, Wealth",
            "Apply analytical thinking to Hierarchical Ranks of Interests: Essentials (Daruriyyat), Needs (Hajiyyat), and Embellishments (Tahsiniyyat)",
            "Synthesize ethical resolutions for Jurisprudence of Transactions (Fiqh al-Mu'amalat): Prohibition of Usury, Monopoly, and Fraud"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ المقاصد الشرعية الكلية الضرورية الخمس: حفظ الدين، النفس، العقل، النسل، والمال",
            "تطبيق التفكير التحليلي الناقد في مسألة مراتب المصالح الشرعية: الضروريات، الحاجيات، والتحسينيات وقواعد الترجيح الفقهي",
            "بناء رؤى أخلاقية متكاملة لـ فقه المعاملات المالية: تحريم الربا والاحتكار والغش، وتشجيع التجارة العادلة والاستثمار"
          ],
          prerequisitesEn: ['Islamic Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة الإسلامية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Maqasid al-Sharia', definition: 'The higher universal objectives and purposes of Islamic legislation' },
            { term: 'Ijtihad', definition: 'Scholarly independent reasoning to deduce rulings for novel contemporary issues' }
          ],
          keyVocabularyAr: [
            { term: 'مقاصد الشريعة', definition: 'الغايات الكلية والحكم والمصالح التي قصدها الشارع الحكيم في التشريع' },
            { term: 'الاجتهاد المعاصر', definition: 'بذل الوسع العلمي لاستنباط الأحكام الشرعية العملية للنوازل والمستجدات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Quranic/Hadith context and reflective dialogue', activitiesAr: 'استعراض النصوص الشرعية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق الفقهي', duration: '75 min', activitiesEn: 'Rules analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing true reliance on Allah with passive fatalism without taking necessary material causes'
          ],
          commonMisconceptionsAr: [
            'الخلط بين التوكل الشرعي الصادق والتواكل السلبي دون الأخذ بالأسباب العلمية والمادية المتاحة'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative fiqh analysis and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للأحكام والأدلة.',
            advanced: 'تكليف بدراسات مقارنة في فقه النوازل وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding The Five Higher Essential Objectives (Al-Kulliyyat al-Khams): Religion, Life, Intellect, Lineage, Wealth?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (المقاصد الشرعية الكلية الضرورية الخمس: حفظ الدين، النفس، العقل، النسل، والمال)؟",
            solutionEn: "All Islamic legislation is designed to preserve five universal necessities: Faith, Human Life, Intellect, Family Lineage, and Property.",
            solutionAr: "تتجه جميع تشريعات الإسلام وأحكامه إلى غاية كبرى واحدة هي حفظ الضروريات الخمس: الدين، النفس، العقل، النسل، والمال."
          }
        },
        worksheet: {
          id: 'th_isl_ch3_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of The Five Higher Essential Objectives (Al-Kulliyyat al-Khams): Religion, Life, Intellect, Lineage, Wealth",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ المقاصد الشرعية الكلية الضرورية الخمس: حفظ الدين، النفس، العقل، النسل، والمال",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'islamic_civilization_timeline',
          titleEn: "Islamic Civilization & Sciences Explorer",
          titleAr: "مستكشف علوم الحضارة الإسلامية والمنهج التجريبي",
          descriptionEn: 'Interactive Islamic studies studio featuring Tajweed recitation, Maqasid simulations, Seerah milestones, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية المعاصرة.'
        }
      },
      {
        id: 'th_isl_ch3_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Social Solidarity in Islam: Zakat, Voluntary Sadaqah, and Community Safety Nets",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ التكافل الاجتماعي الشامل في الإسلام: فريضة الزكاة، الصدقات، ورعاية الفئات الأكثر احتياجاً",
        summaryEn: "Comprehensive conceptual and applied mastery of Social Solidarity in Islam: Zakat, Voluntary Sadaqah, and Community Safety Nets, Family Law in Islam: Foundations of Marriage, Mutual Compassion, and Rights of Spouses and Children, and Safeguarding Public Assets (Al-Mal al-'Aam) and Combating Bribery and Corruption.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ التكافل الاجتماعي الشامل في الإسلام: فريضة الزكاة، الصدقات، ورعاية الفئات الأكثر احتياجاً، نظام الأسرة وحقوقها: الزواج على أسس السكن والمودة والرحمة، وحقوق الوالدين والأبناء، و حرمة المال العام، ترشيد المرافق المشتركة، وتجريم الرشوة والفساد الإداري واستغلال النفوذ.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Social Solidarity in Islam: Zakat, Voluntary Sadaqah, and Community Safety Nets\nZakat is the third pillar of Islam, constituting a mandatory annual contribution on surplus wealth directly transferred to the poor.\n\nBeyond obligatory Zakat, voluntary charity (Sadaqah) and public endowments build social cohesion and alleviate economic distress.\n\nZakat operates not merely as poverty relief, but as a systematic macroeconomic redistributive mechanism that stimulates aggregate consumer demand.\n\n#### 2. Family Law in Islam: Foundations of Marriage, Mutual Compassion, and Rights of Spouses and Children\nMarriage in Islam is a sacred covenant founded on mutual tranquility, love, and compassion (\"Mawaddah wa Rahmah\").\n\nIslam establishes comprehensive mutual rights: financial support and honorable companionship for wives, and obedience and kindness for husbands.\n\nChildren's rights in Islam begin before birth with choosing a righteous partner, extending to good naming, health, education, and loving upbringing.\n\n#### 3. Safeguarding Public Assets (Al-Mal al-'Aam) and Combating Bribery and Corruption\nPublic property belongs to the entire nation; appropriating or damaging it is a far graver sin than stealing private property.\n\nThe Prophet strictly prohibited bribery and gifts to public officials, stating: \"Allah has cursed the one who offers a bribe and the one who accepts it.\"\n\nPreserving public funds requires transparency, merit-based civil appointments, and holding public servants rigorously accountable for their integrity.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. التكافل الاجتماعي الشامل في الإسلام: فريضة الزكاة، الصدقات، ورعاية الفئات الأكثر احتياجاً\nالزكاة هي الركن الثالث من أركان الإسلام، وهي حق مالي معلوم في أموال الأغنياء يُرد وجوباً على الفقراء والمستحقين.\n\nيتسع التكافل الاجتماعي بالصدقات التطوعية وكفالة الأيتام والوقف الخيري، ليصنع شبكة أمان اجتماعي وتضامن أهلي متكامل.\n\nتعمل منظومة الزكاة كأداة اقتصادية كلية لإعادة توزيع الثروة وتنشيط الأسواق وحماية المجتمع من الطبقية والصراع الاجتماعي.\n\n#### ٢. نظام الأسرة وحقوقها: الزواج على أسس السكن والمودة والرحمة، وحقوق الوالدين والأبناء\nالزواج ميثاق غليظ وسنة شرعية مقدسة تقوم على السكن النفسي والمودة المتبادلة والتراحم والتعاون على طاعة الله.\n\nأقر الإسلام حقوقاً متوازنة بين الزوجين، فأوجب حسن العشرة والنفقة والرعاية، وأوجب احترام الحقوق المتبادلة دون إضرار.\n\n#### ٢. حرمة المال العام، ترشيد المرافق المشتركة، وتجريم الرشوة والفساد الإداري واستغلال النفوذ\nالمال العام والمرافق العامة ملك للمجتمع كله، والاعتداء عليها أو إهدارها أشد حرمة وجرماً من الاعتداء على الملكية الخاصة.\n\nلعن رسول الله ﷺ الراشي والمرتشي في الحكم والوظيفة العامة، معتبراً هدايا المسؤولين نوعاً من الرشوة واستغلال النفوذ.\n\nتقتضي صيانة المال العام إرساء مبادئ الحوكمة والنزاهة، واختيار الكفاءات النزيهة، وإخضاع المسؤولين للمساءلة الرقابية الصارمة.",
        formulas: [
          {
            labelEn: "Social Solidarity in Islam: Zakat, Voluntary Sadaqah, and Community Safety Nets",
            labelAr: "التكافل الاجتماعي الشامل في الإسلام: فريضة الزكاة، الصدقات، ورعاية الفئات الأكثر احتياجاً",
            latex: "\\text{Core Rule: } Social Solidarity in Islam: Za"
          },
          {
            labelEn: "Family Law in Islam: Foundations of Marriage, Mutual Compassion, and Rights of Spouses and Children",
            labelAr: "نظام الأسرة وحقوقها: الزواج على أسس السكن والمودة والرحمة، وحقوق الوالدين والأبناء",
            latex: "\\text{Applied Maxim: } Family Law in Islam: Foundatio"
          }
        ],
        moeRef: {
          bookTitleEn: "Islamic Religious Education Grade 12",
          bookTitleAr: "التربية الدينية الإسلامية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-ISL-CH03-L2",
          pageRange: '90-115'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Social Solidarity in Islam: Zakat, Voluntary Sadaqah, and Community Safety Nets",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ التكافل الاجتماعي الشامل في الإسلام: فريضة الزكاة، الصدقات، ورعاية الفئات الأكثر احتياجاً",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-ISL-CH03-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Social Solidarity in Islam: Zakat, Voluntary Sadaqah, and Community Safety Nets",
            "Apply analytical thinking to Family Law in Islam: Foundations of Marriage, Mutual Compassion, and Rights of Spouses and Children",
            "Synthesize ethical resolutions for Safeguarding Public Assets (Al-Mal al-'Aam) and Combating Bribery and Corruption"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ التكافل الاجتماعي الشامل في الإسلام: فريضة الزكاة، الصدقات، ورعاية الفئات الأكثر احتياجاً",
            "تطبيق التفكير التحليلي الناقد في مسألة نظام الأسرة وحقوقها: الزواج على أسس السكن والمودة والرحمة، وحقوق الوالدين والأبناء",
            "بناء رؤى أخلاقية متكاملة لـ حرمة المال العام، ترشيد المرافق المشتركة، وتجريم الرشوة والفساد الإداري واستغلال النفوذ"
          ],
          prerequisitesEn: ['Islamic Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة الإسلامية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Maqasid al-Sharia', definition: 'The higher universal objectives and purposes of Islamic legislation' },
            { term: 'Ijtihad', definition: 'Scholarly independent reasoning to deduce rulings for novel contemporary issues' }
          ],
          keyVocabularyAr: [
            { term: 'مقاصد الشريعة', definition: 'الغايات الكلية والحكم والمصالح التي قصدها الشارع الحكيم في التشريع' },
            { term: 'الاجتهاد المعاصر', definition: 'بذل الوسع العلمي لاستنباط الأحكام الشرعية العملية للنوازل والمستجدات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Quranic/Hadith context and reflective dialogue', activitiesAr: 'استعراض النصوص الشرعية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق الفقهي', duration: '75 min', activitiesEn: 'Rules analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing true reliance on Allah with passive fatalism without taking necessary material causes'
          ],
          commonMisconceptionsAr: [
            'الخلط بين التوكل الشرعي الصادق والتواكل السلبي دون الأخذ بالأسباب العلمية والمادية المتاحة'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative fiqh analysis and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للأحكام والأدلة.',
            advanced: 'تكليف بدراسات مقارنة في فقه النوازل وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Social Solidarity in Islam: Zakat, Voluntary Sadaqah, and Community Safety Nets?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (التكافل الاجتماعي الشامل في الإسلام: فريضة الزكاة، الصدقات، ورعاية الفئات الأكثر احتياجاً)؟",
            solutionEn: "Zakat is the third pillar of Islam, constituting a mandatory annual contribution on surplus wealth directly transferred to the poor.",
            solutionAr: "الزكاة هي الركن الثالث من أركان الإسلام، وهي حق مالي معلوم في أموال الأغنياء يُرد وجوباً على الفقراء والمستحقين."
          }
        },
        worksheet: {
          id: 'th_isl_ch3_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Social Solidarity in Islam: Zakat, Voluntary Sadaqah, and Community Safety Nets",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ التكافل الاجتماعي الشامل في الإسلام: فريضة الزكاة، الصدقات، ورعاية الفئات الأكثر احتياجاً",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'islamic_civilization_timeline',
          titleEn: "Islamic Civilization & Sciences Explorer",
          titleAr: "مستكشف علوم الحضارة الإسلامية والمنهج التجريبي",
          descriptionEn: 'Interactive Islamic studies studio featuring Tajweed recitation, Maqasid simulations, Seerah milestones, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية المعاصرة.'
        }
      }
    ],
    databank: islamicCh3Databank,
    solvedExamples: islamicCh3SolvedExamples,
    exerciseProblems: islamicCh3Exercises
  },
  {
    id: 'th_isl_ch4',
    chapterNumber: 4,
    titleEn: "Chapter 4: Ethics of Dialogue, Countering Extremism and Rumors, Environmental Stewardship, and Reason",
    titleAr: "الفصل الرابع: أدب الحوار في الإسلام، محاربة التطرف والشائعات، حماية البيئة، وإعمال العقل",
    descriptionEn: "Quranic principles of constructive dialogue, peaceful coexistence, evidentiary verification against rumors, intellectual repudiation of extremism, ecological conservation, and sanctification of rational thought.",
    descriptionAr: "أدب الحوار في القرآن الكريم، حرية الفكر والتعايش، منهج التثبت ومكافحة الشائعات والإفك، تفنيد الفكر المتطرف والغلو، حماية البيئة ورعاية الكائنات، وتكريم العقل والاجتهاد.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_isl_ch4_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Ethics of Dialogue in the Holy Quran: \"Argue with them in ways that are best\" and Freedom of Thought",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ أدب الحوار في القرآن الكريم: \"وجادلهم بالتي هي أحسن\"، قبول التعددية ونبذ التعصب والإكراه",
        summaryEn: "Comprehensive conceptual and applied mastery of Ethics of Dialogue in the Holy Quran: \"Argue with them in ways that are best\" and Freedom of Thought, Quranic Epistemic Methodology Against Rumors: Evidentiary Verification (\"Fa-tabayyanu\"), and Countering Religious Extremism (Ghuluww) and Takfir: Moderation and Preservation of Sanctity.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ أدب الحوار في القرآن الكريم: \"وجادلهم بالتي هي أحسن\"، قبول التعددية ونبذ التعصب والإكراه، المنهج القرآني في مواجهة الشائعات: التحري والتثبت الدقيق (\"فتبينوا\") ورد الأنباء لأهل الاختصاص، و مكافحة التطرف الفكري والغلو في الدين: الوسطية الإسلامية وتحريم التكفير واستباحة الدماء.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Ethics of Dialogue in the Holy Quran: \"Argue with them in ways that are best\" and Freedom of Thought\nThe Quran commands conducting intellectual and theological discussions with gracious wisdom, gentle persuasion, and profound mutual respect.\n\nIslamic dialogue unconditionally repudiates religious coercion, affirming the foundational axiom: \"There is no compulsion in religion.\"\n\nConstructive dialogue in Islam seeks uncovering the truth and mutual understanding rather than egocentric psychological conquest or dogmatic suppression.\n\n#### 2. Quranic Epistemic Methodology Against Rumors: Evidentiary Verification (\"Fa-tabayyanu\")\nThe Quran mandates immediate fact-checking and evidentiary verification upon receiving news: \"If a troublemaker brings you news, verify it.\"\n\nIslam prohibits transmitting unverified sensational hearsay, warning that repeating everything one hears suffices to make one a liar.\n\nIn times of communal crises, sensitive information must be referred to authorized leadership and verified domain experts rather than circulated publicly.\n\n#### 3. Countering Religious Extremism (Ghuluww) and Takfir: Moderation and Preservation of Sanctity\nIslam defines itself as a religion of the balanced middle path (Wasatiyyah), strongly forbidding ideological extremism and fanaticism.\n\nThe Prophet strictly warned against Takfir (declaring believers to be apostates), emphasizing that wrongfully branding another an unbeliever rebounds upon oneself.\n\nCountering violent extremism requires intellectual dismantling of deviant misinterpretations alongside fostering critical education and social justice.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. أدب الحوار في القرآن الكريم: \"وجادلهم بالتي هي أحسن\"، قبول التعددية ونبذ التعصب والإكراه\nأمر القرآن بالدعوة والحوار بالحكمة والموعظة الحسنة والجدال بالتي هي أحسن بعيداً عن الفظاظة والتعصب.\n\nيرفض المنهج الإسلامي في الحوار الإكراه على العقيدة مصداقاً لقوله تعالى: \"لا إكراه في الدين قد تبين الرشد من الغي\".\n\nيهدف الحوار القرآني البناء إلى إظهار الحق والتقارب الإنساني والتفاهم، لا الغلبة النفسية وإفحام الخصم بالتعنت.\n\n#### ٢. المنهج القرآني في مواجهة الشائعات: التحري والتثبت الدقيق (\"فتبينوا\") ورد الأنباء لأهل الاختصاص\nأرسى القرآن قاعدة التثبت الصارم في تلقي الأخبار ونقلها في قوله تعالى: \"يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا\".\n\nحذر النبي ﷺ من نقل الأخبار دون روية قائلاً: \"كفى بالمرء كذباً أن يحدث بكل ما سمع\"، تجفيفاً لمنابع الشائعات.\n\n#### ٢. مكافحة التطرف الفكري والغلو في الدين: الوسطية الإسلامية وتحريم التكفير واستباحة الدماء\nجعل الله الأمة الإسلامية \"أمة وسطاً\" ونهاها عن الغلو والتطرف في الدين في قوله: \"يا أهل الكتاب لا تغلوا في دينكم\".\n\nحذر النبي ﷺ تحذيراً شديداً من التكفير مؤكداً أن من رمى أخاه بالكفر فقد باء به أحدهما، صيانةً لعصمة دماء المسلمين وأعراضهم.\n\nتتطلب مواجهة التطرف الفكري تفكيك الشبهات والمفاهيم المغلوطة بالحجة العلمية، ونشر التعليم المستنير، وتكافؤ الفرص.",
        formulas: [
          {
            labelEn: "Ethics of Dialogue in the Holy Quran: \"Argue with them in ways that are best\" and Freedom of Thought",
            labelAr: "أدب الحوار في القرآن الكريم: \"وجادلهم بالتي هي أحسن\"، قبول التعددية ونبذ التعصب والإكراه",
            latex: "\\text{Core Rule: } Ethics of Dialogue in the Holy"
          },
          {
            labelEn: "Quranic Epistemic Methodology Against Rumors: Evidentiary Verification (\"Fa-tabayyanu\")",
            labelAr: "المنهج القرآني في مواجهة الشائعات: التحري والتثبت الدقيق (\"فتبينوا\") ورد الأنباء لأهل الاختصاص",
            latex: "\\text{Applied Maxim: } Quranic Epistemic Methodology "
          }
        ],
        moeRef: {
          bookTitleEn: "Islamic Religious Education Grade 12",
          bookTitleAr: "التربية الدينية الإسلامية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-ISL-CH04-L1",
          pageRange: '110-135'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Ethics of Dialogue in the Holy Quran: \"Argue with them in ways that are best\" and Freedom of Thought",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ أدب الحوار في القرآن الكريم: \"وجادلهم بالتي هي أحسن\"، قبول التعددية ونبذ التعصب والإكراه",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-ISL-CH04-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Ethics of Dialogue in the Holy Quran: \"Argue with them in ways that are best\" and Freedom of Thought",
            "Apply analytical thinking to Quranic Epistemic Methodology Against Rumors: Evidentiary Verification (\"Fa-tabayyanu\")",
            "Synthesize ethical resolutions for Countering Religious Extremism (Ghuluww) and Takfir: Moderation and Preservation of Sanctity"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ أدب الحوار في القرآن الكريم: \"وجادلهم بالتي هي أحسن\"، قبول التعددية ونبذ التعصب والإكراه",
            "تطبيق التفكير التحليلي الناقد في مسألة المنهج القرآني في مواجهة الشائعات: التحري والتثبت الدقيق (\"فتبينوا\") ورد الأنباء لأهل الاختصاص",
            "بناء رؤى أخلاقية متكاملة لـ مكافحة التطرف الفكري والغلو في الدين: الوسطية الإسلامية وتحريم التكفير واستباحة الدماء"
          ],
          prerequisitesEn: ['Islamic Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة الإسلامية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Maqasid al-Sharia', definition: 'The higher universal objectives and purposes of Islamic legislation' },
            { term: 'Ijtihad', definition: 'Scholarly independent reasoning to deduce rulings for novel contemporary issues' }
          ],
          keyVocabularyAr: [
            { term: 'مقاصد الشريعة', definition: 'الغايات الكلية والحكم والمصالح التي قصدها الشارع الحكيم في التشريع' },
            { term: 'الاجتهاد المعاصر', definition: 'بذل الوسع العلمي لاستنباط الأحكام الشرعية العملية للنوازل والمستجدات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Quranic/Hadith context and reflective dialogue', activitiesAr: 'استعراض النصوص الشرعية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق الفقهي', duration: '75 min', activitiesEn: 'Rules analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing true reliance on Allah with passive fatalism without taking necessary material causes'
          ],
          commonMisconceptionsAr: [
            'الخلط بين التوكل الشرعي الصادق والتواكل السلبي دون الأخذ بالأسباب العلمية والمادية المتاحة'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative fiqh analysis and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للأحكام والأدلة.',
            advanced: 'تكليف بدراسات مقارنة في فقه النوازل وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Ethics of Dialogue in the Holy Quran: \"Argue with them in ways that are best\" and Freedom of Thought?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (أدب الحوار في القرآن الكريم: \"وجادلهم بالتي هي أحسن\"، قبول التعددية ونبذ التعصب والإكراه)؟",
            solutionEn: "The Quran commands conducting intellectual and theological discussions with gracious wisdom, gentle persuasion, and profound mutual respect.",
            solutionAr: "أمر القرآن بالدعوة والحوار بالحكمة والموعظة الحسنة والجدال بالتي هي أحسن بعيداً عن الفظاظة والتعصب."
          }
        },
        worksheet: {
          id: 'th_isl_ch4_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Ethics of Dialogue in the Holy Quran: \"Argue with them in ways that are best\" and Freedom of Thought",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ أدب الحوار في القرآن الكريم: \"وجادلهم بالتي هي أحسن\"، قبول التعددية ونبذ التعصب والإكراه",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'maqasid_fiqh_studio',
          titleEn: "Islamic Dialogue & AI Ethics Studio",
          titleAr: "استوديو أدب الحوار وأخلاقيات الذكاء الاصطناعي",
          descriptionEn: 'Interactive Islamic studies studio featuring Tajweed recitation, Maqasid simulations, Seerah milestones, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية المعاصرة.'
        }
      },
      {
        id: 'th_isl_ch4_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Sanctity of the Human Intellect: Quranic Injunctions for Reflection, Contemplation, and Scientific Inquiry",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ تكريم العقل وإعمال الفكر: دعوة القرآن للتفكر والتدبر في الآفاق والأنفس ومحاربة الدجل والجهل",
        summaryEn: "Comprehensive conceptual and applied mastery of Sanctity of the Human Intellect: Quranic Injunctions for Reflection, Contemplation, and Scientific Inquiry, Environmental Stewardship, Water Rationing, and Animal Welfare in the Prophetic Sunnah, and Values of Diligent Work, Mastery (Itqan), and Civic Responsibility Toward the Homeland.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ تكريم العقل وإعمال الفكر: دعوة القرآن للتفكر والتدبر في الآفاق والأنفس ومحاربة الدجل والجهل، حماية البيئة والموارد المائية ورعاية الحيوان: الهدى النبوي في صيانة الطبيعة والتوازن البيئي، و قيم العمل وإتقان الصنعة (الإتقان)، والمواطنة الإيجابية الصالحة، والمسؤولية التكليفية نحو الوطن.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Sanctity of the Human Intellect: Quranic Injunctions for Reflection, Contemplation, and Scientific Inquiry\nThe Quran repeatedly appeals to human reason, praising \"those of understanding\" (Ulul-Albab) who contemplate the creation of the heavens and earth.\n\nIslam strictly outlaws superstition, sorcery, astrology, and blind imitation of ancestors that paralyzes intellectual discernment.\n\nIn Islamic theology, authentic divine revelation and sound human rationality can never contradict; legitimate scientific findings illuminate divine wisdom.\n\n#### 2. Environmental Stewardship, Water Rationing, and Animal Welfare in the Prophetic Sunnah\nThe Prophet emphasized environmental cultivation, famously stating: \"If the Final Hour arrives while one holds a sapling, let him plant it.\"\n\nIslam explicitly forbids wasting water even when purifying oneself on the banks of a flowing river, instilling conservation mindfulness.\n\nAnimal welfare in Islam carries spiritual accountability: causing suffering to a creature can lead to perdition, while showing mercy unlocks divine forgiveness.\n\n#### 3. Values of Diligent Work, Mastery (Itqan), and Civic Responsibility Toward the Homeland\nIslam sanctifies honest productive work as an act of worship, asserting that Allah loves when one does a job that he masters it thoroughly.\n\nTrue patriotism manifests in defending national sovereignty, preserving public order, obeying just laws, and actively developing communal welfare.\n\nThe Islamic civic ethos demands uncompromising integrity in public office, considering negligence and graft as treason against both God and country.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. تكريم العقل وإعمال الفكر: دعوة القرآن للتفكر والتدبر في الآفاق والأنفس ومحاربة الدجل والجهل\nكرّم القرآن العقل وجعله مناط التكليف، وكرر الدعوة للتفكر والتدبر في آيات الآفاق والأنفس في مئات الآيات الكريمة.\n\nحارب الإسلام الدجل والكهانة والشعوذة والتبعية العمياء للآباء، داعياً لتحرير العقل من الخرافات والأوهام.\n\nتؤكد الرؤية الإسلامية استحالة تعارض صريح المعقول مع صحيح المنقول، فالعلم التجريبي الصادق يرسخ الإيمان بالخالق العظيم.\n\n#### ٢. حماية البيئة والموارد المائية ورعاية الحيوان: الهدى النبوي في صيانة الطبيعة والتوازن البيئي\nحث النبي ﷺ على التشجير وعمارة الأرض حتى في أصعب الظروف قائلاً: \"إن قامت الساعة وفي يد أحدكم فسيلة فإن استطاع أن يغرسها فليغرسها\".\n\nنهى النبي ﷺ عن الإسراف في الماء حتى لو كان المتوضئ على نهر جارٍ، تأصيلاً لثقافة الاستدامة والترشيد البيئي.\n\n#### ٢. قيم العمل وإتقان الصنعة (الإتقان)، والمواطنة الإيجابية الصالحة، والمسؤولية التكليفية نحو الوطن\nعظم الإسلام شأن العمل والإنتاج معتبراً إياه عبادة، وقال رسول الله ﷺ: \"إن الله يحب إذا عمل أحدكم عملاً أن يتقنه\".\n\nتتجلى المواطنة الصالحة في الدفاع عن الوطن، حماية مقدراته، احترام القوانين المنظمة، والمساهمة الفاعلة في نهضته وازدهاره.\n\nيربط الضمير الإسلامي بين الإخلاص في العمل والواجب الإيماني، معتبراً الإهمال أو خيانة الأمانة في الوظيفة إثماً كبيراً بحق المجتمع.",
        formulas: [
          {
            labelEn: "Sanctity of the Human Intellect: Quranic Injunctions for Reflection, Contemplation, and Scientific Inquiry",
            labelAr: "تكريم العقل وإعمال الفكر: دعوة القرآن للتفكر والتدبر في الآفاق والأنفس ومحاربة الدجل والجهل",
            latex: "\\text{Core Rule: } Sanctity of the Human Intellec"
          },
          {
            labelEn: "Environmental Stewardship, Water Rationing, and Animal Welfare in the Prophetic Sunnah",
            labelAr: "حماية البيئة والموارد المائية ورعاية الحيوان: الهدى النبوي في صيانة الطبيعة والتوازن البيئي",
            latex: "\\text{Applied Maxim: } Environmental Stewardship, Wat"
          }
        ],
        moeRef: {
          bookTitleEn: "Islamic Religious Education Grade 12",
          bookTitleAr: "التربية الدينية الإسلامية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-ISL-CH04-L2",
          pageRange: '125-150'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Sanctity of the Human Intellect: Quranic Injunctions for Reflection, Contemplation, and Scientific Inquiry",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ تكريم العقل وإعمال الفكر: دعوة القرآن للتفكر والتدبر في الآفاق والأنفس ومحاربة الدجل والجهل",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-ISL-CH04-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Sanctity of the Human Intellect: Quranic Injunctions for Reflection, Contemplation, and Scientific Inquiry",
            "Apply analytical thinking to Environmental Stewardship, Water Rationing, and Animal Welfare in the Prophetic Sunnah",
            "Synthesize ethical resolutions for Values of Diligent Work, Mastery (Itqan), and Civic Responsibility Toward the Homeland"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ تكريم العقل وإعمال الفكر: دعوة القرآن للتفكر والتدبر في الآفاق والأنفس ومحاربة الدجل والجهل",
            "تطبيق التفكير التحليلي الناقد في مسألة حماية البيئة والموارد المائية ورعاية الحيوان: الهدى النبوي في صيانة الطبيعة والتوازن البيئي",
            "بناء رؤى أخلاقية متكاملة لـ قيم العمل وإتقان الصنعة (الإتقان)، والمواطنة الإيجابية الصالحة، والمسؤولية التكليفية نحو الوطن"
          ],
          prerequisitesEn: ['Islamic Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة الإسلامية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Maqasid al-Sharia', definition: 'The higher universal objectives and purposes of Islamic legislation' },
            { term: 'Ijtihad', definition: 'Scholarly independent reasoning to deduce rulings for novel contemporary issues' }
          ],
          keyVocabularyAr: [
            { term: 'مقاصد الشريعة', definition: 'الغايات الكلية والحكم والمصالح التي قصدها الشارع الحكيم في التشريع' },
            { term: 'الاجتهاد المعاصر', definition: 'بذل الوسع العلمي لاستنباط الأحكام الشرعية العملية للنوازل والمستجدات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Quranic/Hadith context and reflective dialogue', activitiesAr: 'استعراض النصوص الشرعية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق الفقهي', duration: '75 min', activitiesEn: 'Rules analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing true reliance on Allah with passive fatalism without taking necessary material causes'
          ],
          commonMisconceptionsAr: [
            'الخلط بين التوكل الشرعي الصادق والتواكل السلبي دون الأخذ بالأسباب العلمية والمادية المتاحة'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative fiqh analysis and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للأحكام والأدلة.',
            advanced: 'تكليف بدراسات مقارنة في فقه النوازل وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Sanctity of the Human Intellect: Quranic Injunctions for Reflection, Contemplation, and Scientific Inquiry?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (تكريم العقل وإعمال الفكر: دعوة القرآن للتفكر والتدبر في الآفاق والأنفس ومحاربة الدجل والجهل)؟",
            solutionEn: "The Quran repeatedly appeals to human reason, praising \"those of understanding\" (Ulul-Albab) who contemplate the creation of the heavens and earth.",
            solutionAr: "كرّم القرآن العقل وجعله مناط التكليف، وكرر الدعوة للتفكر والتدبر في آيات الآفاق والأنفس في مئات الآيات الكريمة."
          }
        },
        worksheet: {
          id: 'th_isl_ch4_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Sanctity of the Human Intellect: Quranic Injunctions for Reflection, Contemplation, and Scientific Inquiry",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ تكريم العقل وإعمال الفكر: دعوة القرآن للتفكر والتدبر في الآفاق والأنفس ومحاربة الدجل والجهل",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'maqasid_fiqh_studio',
          titleEn: "Islamic Dialogue & AI Ethics Studio",
          titleAr: "استوديو أدب الحوار وأخلاقيات الذكاء الاصطناعي",
          descriptionEn: 'Interactive Islamic studies studio featuring Tajweed recitation, Maqasid simulations, Seerah milestones, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية المعاصرة.'
        }
      }
    ],
    databank: islamicCh4Databank,
    solvedExamples: islamicCh4SolvedExamples,
    exerciseProblems: islamicCh4Exercises
  }
];

export const thanaweyaIslamicBranch: Branch = {
  id: 'thanaweya_islamic',
  titleEn: "Thanaweya Amma Islamic Studies",
  titleAr: "التربية الدينية الإسلامية للثانوية العامة",
  categoryEn: "National Religious Education",
  categoryAr: "التربية الدينية القومية للثانوية العامة",
  iconName: 'BookOpen',
  colorGradient: 'from-emerald-950 via-teal-900 to-green-900',
  chapters
};
