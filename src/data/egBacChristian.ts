import type { Branch, Chapter } from '../types/curriculum';
import { egBacChristianCh1Databank } from './databanks/egbac/egBacChristianCh1Databank';
import { egBacChristianCh1SolvedExamples, egBacChristianCh1Exercises } from './textbook/egbac/egBacChristianCh1Textbook';
import { egBacChristianCh2Databank } from './databanks/egbac/egBacChristianCh2Databank';
import { egBacChristianCh2SolvedExamples, egBacChristianCh2Exercises } from './textbook/egbac/egBacChristianCh2Textbook';
import { egBacChristianCh3Databank } from './databanks/egbac/egBacChristianCh3Databank';
import { egBacChristianCh3SolvedExamples, egBacChristianCh3Exercises } from './textbook/egbac/egBacChristianCh3Textbook';
import { egBacChristianCh4Databank } from './databanks/egbac/egBacChristianCh4Databank';
import { egBacChristianCh4SolvedExamples, egBacChristianCh4Exercises } from './textbook/egbac/egBacChristianCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'egbac_chr_ch1',
    chapterNumber: 1,
    titleEn: "Module 1: Epistemology of Christian Philosophy, Patristic Studies, and Apologetics",
    titleAr: "الوحدة الأولى: إبستمولوجيا الفكر والفلسفة المسيحية، علم الآباء (باترولوجي)، واللاهوت الدفاعي والعقلاني",
    descriptionEn: "Harmony of faith and rational inquiry, the Catechetical School of Alexandria, patristic hermeneutics, philosophical apologetics, theodicy, and the dialogue between Christian theology and modern sciences.",
    descriptionAr: "التوافق الإبستمولوجي بين الإيمان والعقل، مدرسة الإسكندرية اللاهوتية والفلسفية، المنهج التفسيري الآبائي، اللاهوت الدفاعي وأدلة وجود الخالق، معضلة الألم والشر، والحوار بين الفكر المسيحي والعلوم الحديثة.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_chr_ch1_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Harmony of Reason and Faith in Christian Epistemology: St. Clement and Justin Martyr",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ التناغم بين العقل والإيمان في الفكر المسيحي: القديس يوستينوس وإكليمنضس الإسكندري",
        summaryEn: "Comprehensive conceptual and applied mastery of Harmony of Reason and Faith in Christian Epistemology: St. Clement and Justin Martyr, The Catechetical School of Alexandria: Academic Rigor, Science, and Theology, and Patristic Hermeneutics: The Allegorical and Literal Methods in Church Exegesis.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ التناغم بين العقل والإيمان في الفكر المسيحي: القديس يوستينوس وإكليمنضس الإسكندري، مدرسة الإسكندرية اللاهوتية: الريادة العلمية والفلسفية وتكامل العلوم واللاهوت، و المنهج التفسيري الآبائي: التفسير الحرفي والتفسير الرمزي الروحي لنصوص الكتاب.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Harmony of Reason and Faith in Christian Epistemology: St. Clement and Justin Martyr\nChristian epistemology affirms that genuine reason and divine revelation are complementary paths given by God toward truth without intrinsic contradiction.\n\nEarly Christian apologists viewed classical philosophy as a preparatory tool (Praeparatio Evangelica) that anticipated the revelation of the Divine Logos.\n\nThe principle \"Credo ut intelligam\" (I believe that I may understand) highlights that existential faith purifies epistemic humility, enabling deeper intellectual comprehension.\n\n#### 2. The Catechetical School of Alexandria: Academic Rigor, Science, and Theology\nThe School of Alexandria was the premier ancient intellectual center integrating theological studies with mathematics, astronomy, and classical humanities.\n\nScholars like Pantaenus, Clement, and Origen engaged classical Mediterranean philosophical traditions to articulate Christian dogma rigorously to the contemporary world.\n\nThe Alexandrian theological methodology successfully prevented anti-intellectual obscurantism by treating all secular sciences as instruments for glorifying God and understanding creation.\n\n#### 3. Patristic Hermeneutics: The Allegorical and Literal Methods in Church Exegesis\nChurch Fathers utilized both historical-literal understanding and spiritual-allegorical depths to uncover the redemptive meaning of scriptures.\n\nThe Alexandrian tradition excelled in discovering christocentric types and shadows within ancient historical narratives and liturgical prophecies.\n\nThe patristic consensus (Consensus Patrum) acts as an epistemic anchor preventing subjective ideological distortions of sacred texts through historical continuity.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. التناغم بين العقل والإيمان في الفكر المسيحي: القديس يوستينوس وإكليمنضس الإسكندري\nتؤكد نظرية المعرفة المسيحية أن العقل المستنير والوحي الإلهي مصدران متكاملان من الله لمعرفة الحق والحكمة، ولا تعارض حقيقي بينهما.\n\nرأى آباء الكنيسة الأوائل أن الفلسفة العقلية الصائبة كانت بمثابة إعداد معرفي وتمهيد إنساني لاستقبال إعلان اللوغوس المتجسد.\n\nيوضح المبدأ اللاهوتي \"أومن لكي أعقل\" أن الإيمان الوجودي بالله ينير مدارك العقل ويهذبه من الكبرياء المعرفي، مما يتيح استيعاباً أعمق للحقائق الوجودية.\n\n#### ٢. مدرسة الإسكندرية اللاهوتية: الريادة العلمية والفلسفية وتكامل العلوم واللاهوت\nكانت مدرسة الإسكندرية اللاهوتية أول وأعرق مركز أكاديمي لاهوتي في العالم القديم يدمج دراسات الكتاب المقدس مع الفلك والطب والرياضيات والفلسفة.\n\nقام علماء الإسكندرية مثل بنتينوس وإكليمنضس وأوريجانوس بمحاورة التيارات الفلسفية المعاصرة لتقديم العقيدة المسيحية بأسلوب علمي رصين ومنهجي.\n\n#### ٢. المنهج التفسيري الآبائي: التفسير الحرفي والتفسير الرمزي الروحي لنصوص الكتاب\nاستند آباء الكنيسة إلى دراسة السياق التاريخي واللغوي الحرفي مع استكشاف المعاني الروحية والرمزية العميقة التي تشير إلى عمل المسيح الخلاصي.\n\nتميزت المدرسة السكندرية بالكشف عن الرموز والظلال الخلاصية في نبوات وقصص العهد القديم وربطها بروح الإنجيل وسر التدبير الإلهي.\n\nيشكل إجماع الآباء (Consensus Patrum) صمام أمان منهجي يحفظ تفسير النصوص الدينية من الشطحات الفردية والتحريفات الأيديولوجية عبر التاريخ.",
        formulas: [
          {
            labelEn: "Harmony of Reason and Faith in Christian Epistemology: St. Clement and Justin Martyr",
            labelAr: "التناغم بين العقل والإيمان في الفكر المسيحي: القديس يوستينوس وإكليمنضس الإسكندري",
            latex: "\\text{Core Rule: } Harmony of Reason and Faith in"
          },
          {
            labelEn: "The Catechetical School of Alexandria: Academic Rigor, Science, and Theology",
            labelAr: "مدرسة الإسكندرية اللاهوتية: الريادة العلمية والفلسفية وتكامل العلوم واللاهوت",
            latex: "\\text{Applied Maxim: } The Catechetical School of Ale"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Christian Studies",
          bookTitleAr: "التربية الدينية المسيحية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-CHR-CH01-L1",
          pageRange: '5-30'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Harmony of Reason and Faith in Christian Epistemology: St. Clement and Justin Martyr",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ التناغم بين العقل والإيمان في الفكر المسيحي: القديس يوستينوس وإكليمنضس الإسكندري",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-CHR-CH01-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Harmony of Reason and Faith in Christian Epistemology: St. Clement and Justin Martyr",
            "Apply analytical thinking to The Catechetical School of Alexandria: Academic Rigor, Science, and Theology",
            "Synthesize ethical resolutions for Patristic Hermeneutics: The Allegorical and Literal Methods in Church Exegesis"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ التناغم بين العقل والإيمان في الفكر المسيحي: القديس يوستينوس وإكليمنضس الإسكندري",
            "تطبيق التفكير التحليلي الناقد في مسألة مدرسة الإسكندرية اللاهوتية: الريادة العلمية والفلسفية وتكامل العلوم واللاهوت",
            "بناء رؤى أخلاقية متكاملة لـ المنهج التفسيري الآبائي: التفسير الحرفي والتفسير الرمزي الروحي لنصوص الكتاب"
          ],
          prerequisitesEn: ['Christian Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة المسيحية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Theology of Sacraments', definition: 'Visible holy signs conveying invisible divine grace to believers' },
            { term: 'Agape Love', definition: 'Unconditional, sacrificial love reflecting divine nature' }
          ],
          keyVocabularyAr: [
            { term: 'اللاهوت الأسراري', definition: 'علامات مقدسة منظورة تمنح نعمة إلهية غير منظورة للمؤمنين' },
            { term: 'المحبة الباذلة (أغابي)', definition: 'محبة روحية غير مشروطة تتفانى في الخير وبذل الذات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Biblical and patristic context and reflective dialogue', activitiesAr: 'استعراض الشواهد الكتابية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق اللاهوتي', duration: '75 min', activitiesEn: 'Doctrinal analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing external ceremonial ritualism with genuine inward spiritual transformation and repentance'
          ],
          commonMisconceptionsAr: [
            'الخلط بين المظاهر الطقسية والشكلية الخارجية وبين التوبة الحقيقية والتحول القلبي الباطن'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative patristic studies and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للنصوص والأحكام.',
            advanced: 'تكليف بدراسات مقارنة في فكر الآباء وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Harmony of Reason and Faith in Christian Epistemology: St. Clement and Justin Martyr?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (التناغم بين العقل والإيمان في الفكر المسيحي: القديس يوستينوس وإكليمنضس الإسكندري)؟",
            solutionEn: "Christian epistemology affirms that genuine reason and divine revelation are complementary paths given by God toward truth without intrinsic contradiction.",
            solutionAr: "تؤكد نظرية المعرفة المسيحية أن العقل المستنير والوحي الإلهي مصدران متكاملان من الله لمعرفة الحق والحكمة، ولا تعارض حقيقي بينهما."
          }
        },
        worksheet: {
          id: 'egbac_chr_ch1_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Harmony of Reason and Faith in Christian Epistemology: St. Clement and Justin Martyr",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ التناغم بين العقل والإيمان في الفكر المسيحي: القديس يوستينوس وإكليمنضس الإسكندري",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'christian_heritage_studio',
          titleEn: "Christian Heritage & Biblical Studies Studio",
          titleAr: "استوديو التراث المسيحي والدراسات الكتابية",
          descriptionEn: 'Interactive Christian studies studio featuring holy sacraments, Coptic monastic heritage, biblical synoptics, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة الأسرار الكنسية السبعة، تاريخ الرهبنة القبطية، دراسات الأناجيل، والأخلاقيات الحيوية.'
        }
      },
      {
        id: 'egbac_chr_ch1_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Classical Apologetics and Rational Arguments for the Existence of God",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ اللاهوت الدفاعي العقلي: أدلة وجود الخالق ونقض النزعات الإلحادية والعدمية",
        summaryEn: "Comprehensive conceptual and applied mastery of Classical Apologetics and Rational Arguments for the Existence of God, The Problem of Evil and Suffering (Theodicy): Free Will, Providence, and Moral Purpose, and Christianity and Modern Scientific Epistemology: Evolution, Cosmology, and Epistemic Humility.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ اللاهوت الدفاعي العقلي: أدلة وجود الخالق ونقض النزعات الإلحادية والعدمية، معضلة الشر والألم (الثيوديسيا): الإرادة الإنسانية الحرة، العناية الإلهية، والغاية الخلاصية، و المسيحية والمناهج العلمية المعاصرة: نشأة الكون، البيولوجيا، والتكامل المعرفي.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Classical Apologetics and Rational Arguments for the Existence of God\nChristian apologetics presents rational proofs of God's existence based on cosmic design, universal causation, and the objective moral conscience within human nature.\n\nThe Teleological Argument notes that the fine-tuning of cosmological constants and complex biological codes points decisively toward a supreme Intelligent Mind.\n\nThe Moral Argument demonstrates that universal objective moral duties cannot logically originate from random material processes, but necessitate an Ultimate Moral Ground.\n\n#### 2. The Problem of Evil and Suffering (Theodicy): Free Will, Providence, and Moral Purpose\nGod did not create evil; moral evil entered the world through the misuse of human free will and rebellion against divine righteousness.\n\nPhysical suffering can serve pedagogical and transformative purposes, purifying human character, eliciting compassion, and directing hearts toward eternal hope.\n\nThe Christian theodicy finds its definitive answer not in abstract dialectics, but in the suffering of Christ on the Cross—God voluntarily entering human suffering to redeem and transfigure it.\n\n#### 3. Christianity and Modern Scientific Epistemology: Evolution, Cosmology, and Epistemic Humility\nFaith answers the existential questions of \"Why\" (meaning and purpose), while empirical science explores the mechanical processes of \"How\" in the physical world.\n\nProminent Christian scientists throughout history (such as Copernicus, Galileo, Newton, and Mendel) saw scientific inquiry as exploring God's magnificent laws in creation.\n\nEpistemic reductionism (Scientism) that denies non-empirical realities like consciousness, morality, and spiritual beauty is philosophically self-refuting and scientifically unwarranted.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. اللاهوت الدفاعي العقلي: أدلة وجود الخالق ونقض النزعات الإلحادية والعدمية\nيقدم اللاهوت الدفاعي براهين عقلية رصينة على وجود الله مستندة إلى دقة تصميم الكون، والسببية الكونية، والضمير الأخلاقي الفطري في الإنسان.\n\nيبرهن دليل الضبط الدقيق (Teleological Argument) على أن الثوابت الكونية الدقيقة وشفرات الحمض النووي المعقدة تشير حتماً إلى عقل إلهي حكيم ومبدع.\n\nيوضح الدليل الأخلاقي أن وجود قيم والتزامات أخلاقية موضوعية ملزمة للبشرية لا يمكن تفسيرها مادياً بالصدفة، بل تتطلب وجود واضع ومشرع أسمى للقيم.\n\n#### ٢. معضلة الشر والألم (الثيوديسيا): الإرادة الإنسانية الحرة، العناية الإلهية، والغاية الخلاصية\nلم يخلق الله الشر مطلقاً، بل نشأ الشر الأخلاقي نتيجة إساءة الإنسان لاستخدام حرية إرادته والتمرد على وصايا المحبة والعدل الإلهي.\n\nيمكن للألم والتجارب أن تتحول بفضل العناية الإلهية إلى وسيلة لتنقية النفس، وإنماء فضائل الصبر والرحمة والتعاطف، وتعميق الوعي بالخلود.\n\n#### ٢. المسيحية والمناهج العلمية المعاصرة: نشأة الكون، البيولوجيا، والتكامل المعرفي\nيجيب الإيمان عن الأسئلة الوجودية والغاية (\"لماذا خُلق الكون وما قيمته؟\")، بينما يختص العلم التجريبي ببحث الآليات الفيزيائية (\"كيف يعمل؟\").\n\nاعتبر كبار رواد العلم الحديث (مثل كوبرنيكوس ونيوتن ومندل مؤسس الوراثة) أن البحث العلمي عبادة وتأمل في قوانين الله المودعة في الطبيعة.\n\nإن النزعة المادية الاختزالية التي تنكر وجود القيم والوعي والروح لكونها غير خاضعة للمقاييس المعملية هي مغالطة فلسفية تعجز عن تفسير معنى الوجود الإنساني.",
        formulas: [
          {
            labelEn: "Classical Apologetics and Rational Arguments for the Existence of God",
            labelAr: "اللاهوت الدفاعي العقلي: أدلة وجود الخالق ونقض النزعات الإلحادية والعدمية",
            latex: "\\text{Core Rule: } Classical Apologetics and Rati"
          },
          {
            labelEn: "The Problem of Evil and Suffering (Theodicy): Free Will, Providence, and Moral Purpose",
            labelAr: "معضلة الشر والألم (الثيوديسيا): الإرادة الإنسانية الحرة، العناية الإلهية، والغاية الخلاصية",
            latex: "\\text{Applied Maxim: } The Problem of Evil and Suffer"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Christian Studies",
          bookTitleAr: "التربية الدينية المسيحية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-CHR-CH01-L2",
          pageRange: '20-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Classical Apologetics and Rational Arguments for the Existence of God",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ اللاهوت الدفاعي العقلي: أدلة وجود الخالق ونقض النزعات الإلحادية والعدمية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-CHR-CH01-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Classical Apologetics and Rational Arguments for the Existence of God",
            "Apply analytical thinking to The Problem of Evil and Suffering (Theodicy): Free Will, Providence, and Moral Purpose",
            "Synthesize ethical resolutions for Christianity and Modern Scientific Epistemology: Evolution, Cosmology, and Epistemic Humility"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ اللاهوت الدفاعي العقلي: أدلة وجود الخالق ونقض النزعات الإلحادية والعدمية",
            "تطبيق التفكير التحليلي الناقد في مسألة معضلة الشر والألم (الثيوديسيا): الإرادة الإنسانية الحرة، العناية الإلهية، والغاية الخلاصية",
            "بناء رؤى أخلاقية متكاملة لـ المسيحية والمناهج العلمية المعاصرة: نشأة الكون، البيولوجيا، والتكامل المعرفي"
          ],
          prerequisitesEn: ['Christian Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة المسيحية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Theology of Sacraments', definition: 'Visible holy signs conveying invisible divine grace to believers' },
            { term: 'Agape Love', definition: 'Unconditional, sacrificial love reflecting divine nature' }
          ],
          keyVocabularyAr: [
            { term: 'اللاهوت الأسراري', definition: 'علامات مقدسة منظورة تمنح نعمة إلهية غير منظورة للمؤمنين' },
            { term: 'المحبة الباذلة (أغابي)', definition: 'محبة روحية غير مشروطة تتفانى في الخير وبذل الذات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Biblical and patristic context and reflective dialogue', activitiesAr: 'استعراض الشواهد الكتابية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق اللاهوتي', duration: '75 min', activitiesEn: 'Doctrinal analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing external ceremonial ritualism with genuine inward spiritual transformation and repentance'
          ],
          commonMisconceptionsAr: [
            'الخلط بين المظاهر الطقسية والشكلية الخارجية وبين التوبة الحقيقية والتحول القلبي الباطن'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative patristic studies and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للنصوص والأحكام.',
            advanced: 'تكليف بدراسات مقارنة في فكر الآباء وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Classical Apologetics and Rational Arguments for the Existence of God?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (اللاهوت الدفاعي العقلي: أدلة وجود الخالق ونقض النزعات الإلحادية والعدمية)؟",
            solutionEn: "Christian apologetics presents rational proofs of God's existence based on cosmic design, universal causation, and the objective moral conscience within human nature.",
            solutionAr: "يقدم اللاهوت الدفاعي براهين عقلية رصينة على وجود الله مستندة إلى دقة تصميم الكون، والسببية الكونية، والضمير الأخلاقي الفطري في الإنسان."
          }
        },
        worksheet: {
          id: 'egbac_chr_ch1_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Classical Apologetics and Rational Arguments for the Existence of God",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ اللاهوت الدفاعي العقلي: أدلة وجود الخالق ونقض النزعات الإلحادية والعدمية",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'christian_heritage_studio',
          titleEn: "Christian Heritage & Biblical Studies Studio",
          titleAr: "استوديو التراث المسيحي والدراسات الكتابية",
          descriptionEn: 'Interactive Christian studies studio featuring holy sacraments, Coptic monastic heritage, biblical synoptics, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة الأسرار الكنسية السبعة، تاريخ الرهبنة القبطية، دراسات الأناجيل، والأخلاقيات الحيوية.'
        }
      }
    ],
    databank: egBacChristianCh1Databank,
    solvedExamples: egBacChristianCh1SolvedExamples,
    exerciseProblems: egBacChristianCh1Exercises
  },
  {
    id: 'egbac_chr_ch2',
    chapterNumber: 2,
    titleEn: "Module 2: Comparative Christian Liturgies, Sacred Music, and Coptic Iconography",
    titleAr: "الوحدة الثانية: الطقوس والليتورجيا المقارنة، الألحان والموسيقى الكنسية، واللاهوت البصري للأيقونات القبطية",
    descriptionEn: "Liturgical theology, comparative liturgies (St. Basil, St. Gregory, St. Cyril), historical continuity of Coptic sacred music, theology of icons, and ecclesiastical art as visual theology.",
    descriptionAr: "اللاهوت الطقسي والليتورجيات القديمة (الباسيلي والغريغوري والكيرلسي)، الجذور التاريخية للألحان والموسيقى القبطية العريقة، وفلسفة اللاهوت البصري وتصميم الأيقونات الكنسية.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_chr_ch2_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Liturgical Theology: Sacred Time, Community Prayer, and the Mystery of Worship",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ اللاهوت الطقسي: تقديس الزمن، الصلاة الجماعية، والأبعاد الخلاصية للعبادة الليتورجية",
        summaryEn: "Comprehensive conceptual and applied mastery of Liturgical Theology: Sacred Time, Community Prayer, and the Mystery of Worship, The Three Classical Coptic Liturgies: St. Basil, St. Gregory, and St. Cyril (St. Mark), and Coptic Sacred Music and Hymnology: Ancient Egyptian Roots and Pharaonic Echoes.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ اللاهوت الطقسي: تقديس الزمن، الصلاة الجماعية، والأبعاد الخلاصية للعبادة الليتورجية، الليتورجيات القبطية الكبرى الثلاث: الباسيلي، الغريغوري، والكيرلسي (مار مرقس)، و الموسيقى والألحان القبطية: الجذور الفرعونية الموغلة، النقل الشفاهي، والروحانية العميقة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Liturgical Theology: Sacred Time, Community Prayer, and the Mystery of Worship\nChristian liturgy is the communal, structured worship of the Church wherein believers unite with Christ in prayer, praise, and thanksgiving.\n\nLiturgical cycles (daily agpeya canonical hours, weekly Eucharistic liturgies, and annual feast cycles) redeem time by grounding everyday life in eternity.\n\nThe Divine Liturgy represents \"heaven on earth\" (anamnesis)—not a mere historical commemoration, but a dynamic, real participation in Christ's eternal sacrifice.\n\n#### 2. The Three Classical Coptic Liturgies: St. Basil, St. Gregory, and St. Cyril (St. Mark)\nThe Coptic Orthodox Church celebrates three historical liturgies: the Liturgy of St. Basil, the Liturgy of St. Gregory, and the Liturgy of St. Cyril.\n\nThe Liturgy of St. Basil addresses the Father with profound theological balance; St. Gregory directly addresses Christ the Son focusing on the depths of His love and sacrifice.\n\nThe Liturgy of St. Cyril preserves the oldest Alexandrian liturgical prayers, containing ancient litanies for the rising of the Nile waters, agricultural crops, and climate.\n\n#### 3. Coptic Sacred Music and Hymnology: Ancient Egyptian Roots and Pharaonic Echoes\nCoptic church hymns form one of the oldest living musical heritages in human history, preserved through generations by master cantors (Muallims).\n\nMusicologists like Ernest Newlandsmith verified that Coptic melodies carry direct vocal and modal structures inherited from ancient Egyptian temple ceremonies.\n\nThe acoustic design of Coptic psalmody (extended vocalises without text / Hazzat) transcends literal words to express mystical adoration and spiritual elevation.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. اللاهوت الطقسي: تقديس الزمن، الصلاة الجماعية، والأبعاد الخلاصية للعبادة الليتورجية\nالليتورجيا هي العبادة الجماعية التقديسية للكنيسة الجامعة، حيث يتحد المؤمنون بروح الصلاة والشكر والتمجيد لعيش أسرار الخلاص مع المسيح.\n\nتعمل الدورات الليتورجية (صلوات الأجبية السبع، القداسات، والأعياد السنوية) على تقديس الزمن البشري وربط إيقاع الحياة اليومية بالحياة الأبدية.\n\nتُمثل الليتورجيا استحضاراً حقيقياً لملكوت الله على الأرض (أنامنيسيس)، فليست مجرد تذكار تاريخي، بل معايشة روحية حية وحاضرة لسر الفداء.\n\n#### ٢. الليتورجيات القبطية الكبرى الثلاث: الباسيلي، الغريغوري، والكيرلسي (مار مرقس)\nتعتمد الكنيسة القبطية ثلاث ليتورجيات رسولية عريقة: القداس الباسيلي (الأكثر انتشاراً)، والقداس الغريغوري، والقداس الكيرلسي المنسوب لمار مرقس.\n\nيتميز القداس الباسيلي بتوجيه الخطاب للآب بتوازن لاهوتي شامل، بينما يتوجه القداس الغريغوري بالصلوات للابن متأملاً في عمق آلامه ومحبته للبشر.\n\n#### ٢. الموسيقى والألحان القبطية: الجذور الفرعونية الموغلة، النقل الشفاهي، والروحانية العميقة\nتُعد الألحان القبطية من أقدم التراثات الموسيقية الحية في تاريخ البشرية، توارثها الأقباط جيلاً بعد جيل عبر كبار المرتلين (المعلمين) بدقة متناهية.\n\nأثبت علماء الموسيقى كالمستشرق نيولاندسميث أن الألحان القبطية الطويلة تحفظ المقامات والأنغام الصوتية للموسيقى الدينية الفرعونية القديمة.\n\nيعبر التطريب الصوتي الممتد (الهزات الصوتية الطويلة دون كلمات) عن حالة من التأمل الباطني الفائق للغة المادية، محلقاً بالروح في آفاق التسبيح الملائكي.",
        formulas: [
          {
            labelEn: "Liturgical Theology: Sacred Time, Community Prayer, and the Mystery of Worship",
            labelAr: "اللاهوت الطقسي: تقديس الزمن، الصلاة الجماعية، والأبعاد الخلاصية للعبادة الليتورجية",
            latex: "\\text{Core Rule: } Liturgical Theology: Sacred Ti"
          },
          {
            labelEn: "The Three Classical Coptic Liturgies: St. Basil, St. Gregory, and St. Cyril (St. Mark)",
            labelAr: "الليتورجيات القبطية الكبرى الثلاث: الباسيلي، الغريغوري، والكيرلسي (مار مرقس)",
            latex: "\\text{Applied Maxim: } The Three Classical Coptic Lit"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Christian Studies",
          bookTitleAr: "التربية الدينية المسيحية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-CHR-CH02-L1",
          pageRange: '40-65'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Liturgical Theology: Sacred Time, Community Prayer, and the Mystery of Worship",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ اللاهوت الطقسي: تقديس الزمن، الصلاة الجماعية، والأبعاد الخلاصية للعبادة الليتورجية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-CHR-CH02-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Liturgical Theology: Sacred Time, Community Prayer, and the Mystery of Worship",
            "Apply analytical thinking to The Three Classical Coptic Liturgies: St. Basil, St. Gregory, and St. Cyril (St. Mark)",
            "Synthesize ethical resolutions for Coptic Sacred Music and Hymnology: Ancient Egyptian Roots and Pharaonic Echoes"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ اللاهوت الطقسي: تقديس الزمن، الصلاة الجماعية، والأبعاد الخلاصية للعبادة الليتورجية",
            "تطبيق التفكير التحليلي الناقد في مسألة الليتورجيات القبطية الكبرى الثلاث: الباسيلي، الغريغوري، والكيرلسي (مار مرقس)",
            "بناء رؤى أخلاقية متكاملة لـ الموسيقى والألحان القبطية: الجذور الفرعونية الموغلة، النقل الشفاهي، والروحانية العميقة"
          ],
          prerequisitesEn: ['Christian Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة المسيحية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Theology of Sacraments', definition: 'Visible holy signs conveying invisible divine grace to believers' },
            { term: 'Agape Love', definition: 'Unconditional, sacrificial love reflecting divine nature' }
          ],
          keyVocabularyAr: [
            { term: 'اللاهوت الأسراري', definition: 'علامات مقدسة منظورة تمنح نعمة إلهية غير منظورة للمؤمنين' },
            { term: 'المحبة الباذلة (أغابي)', definition: 'محبة روحية غير مشروطة تتفانى في الخير وبذل الذات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Biblical and patristic context and reflective dialogue', activitiesAr: 'استعراض الشواهد الكتابية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق اللاهوتي', duration: '75 min', activitiesEn: 'Doctrinal analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing external ceremonial ritualism with genuine inward spiritual transformation and repentance'
          ],
          commonMisconceptionsAr: [
            'الخلط بين المظاهر الطقسية والشكلية الخارجية وبين التوبة الحقيقية والتحول القلبي الباطن'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative patristic studies and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للنصوص والأحكام.',
            advanced: 'تكليف بدراسات مقارنة في فكر الآباء وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Liturgical Theology: Sacred Time, Community Prayer, and the Mystery of Worship?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (اللاهوت الطقسي: تقديس الزمن، الصلاة الجماعية، والأبعاد الخلاصية للعبادة الليتورجية)؟",
            solutionEn: "Christian liturgy is the communal, structured worship of the Church wherein believers unite with Christ in prayer, praise, and thanksgiving.",
            solutionAr: "الليتورجيا هي العبادة الجماعية التقديسية للكنيسة الجامعة، حيث يتحد المؤمنون بروح الصلاة والشكر والتمجيد لعيش أسرار الخلاص مع المسيح."
          }
        },
        worksheet: {
          id: 'egbac_chr_ch2_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Liturgical Theology: Sacred Time, Community Prayer, and the Mystery of Worship",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ اللاهوت الطقسي: تقديس الزمن، الصلاة الجماعية، والأبعاد الخلاصية للعبادة الليتورجية",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'christian_heritage_studio',
          titleEn: "Christian Dogmatics & Liturgical Arts Studio",
          titleAr: "استوديو اللاهوت المسيحي والفنون الليتورجية",
          descriptionEn: 'Interactive Christian studies studio featuring holy sacraments, Coptic monastic heritage, biblical synoptics, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة الأسرار الكنسية السبعة، تاريخ الرهبنة القبطية، دراسات الأناجيل، والأخلاقيات الحيوية.'
        }
      },
      {
        id: 'egbac_chr_ch2_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Coptic Iconography: Visual Theology, Symbolism, and Spiritual Aesthetics",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ فن الأيقونات القبطية: اللاهوت البصري، دلالات الرموز والألوان، والبعد الروحي للأيقونة",
        summaryEn: "Comprehensive conceptual and applied mastery of Coptic Iconography: Visual Theology, Symbolism, and Spiritual Aesthetics, The Liturgical Year and Seasons of Fasting: Spiritual Asceticism and Inner Transformation, and Ecclesiastical Architecture: The Basilica, Coptic Domes, and the Iconostasis.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ فن الأيقونات القبطية: اللاهوت البصري، دلالات الرموز والألوان، والبعد الروحي للأيقونة، السنة التوتية والأصوام الكنسية: الرياضة الروحية، التسامي عن الماديات، والتجدد الداخلي، و العمارة الكنسية القبطية: الطراز الباسيليكي، القباب الثلاث، وحامل الأيقونات (الأيقونوستاس).",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Coptic Iconography: Visual Theology, Symbolism, and Spiritual Aesthetics\nCoptic icons are not decorative pictures, but \"windows to heaven\" and visual theology expressing divine truth through sacred artistic language.\n\nCoptic icons feature enlarged eyes symbolizing spiritual vision, small mouths representing ascetic silence, and flat perspective denoting eternal, non-physical realities.\n\nThe School of Neo-Coptic Iconography founded by Isaac Fanous revitalized ancient conventions, rejecting sentimental realism in favor of pure spiritual transcendence.\n\n#### 2. The Liturgical Year and Seasons of Fasting: Spiritual Asceticism and Inner Transformation\nThe Coptic liturgical calendar begins with the Month of Thout (Nayrouz) commemorating the martyrs, structuring the year into cycles of feasts and fasts.\n\nFasting in Christian tradition is not mere dietary restriction, but an intentional ascetic practice coupling physical discipline with prayer, charity, and repentance.\n\nThe Holy Pascha Week (Passion Week) represents the liturgical climax of the Christian year, immersing the community in Christ's journey from suffering to resurrection.\n\n#### 3. Ecclesiastical Architecture: The Basilica, Coptic Domes, and the Iconostasis\nThe physical structure of the Coptic church is oriented toward the East, facing the rising sun as a symbol of Christ the Sun of Righteousness.\n\nThe church interior is divided into three sacred areas: the Narthex, the Nave (assembly of believers), and the Sanctuary (Haikal) separated by the Iconostasis.\n\nThe three domes over the Sanctuary symbolize the Holy Trinity, creating an acoustic and spatial resonance that lifts the earthly congregation into cosmic liturgy.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. فن الأيقونات القبطية: اللاهوت البصري، دلالات الرموز والألوان، والبعد الروحي للأيقونة\nالأيقونة القبطية ليست مجرد لوحة فنية للزينة، بل هي \"نافذة إلى السماء\" وتعبير لاهوتي بصري يُجسد حقائق الإيمان عبر رموز وألوان مقدسة.\n\nتتميز الأيقونة القبطية باتساع العينين تعبيراً عن البصيرة الروحية، وصغر الفم رمزاً للهدوء والتعفف، وانعدام الظلال لأن القديسين يستنيرون بنور المجد الأبدي.\n\nأعادت مدرسة الفن القبطي الحديث بقيادة الفنان إيزاك فانوس إحياء الأصول العريقة للأيقونة، رافضة التشخيص المادي الدنيوي ومبرزة الطهارة والوقار الروحي.\n\n#### ٢. السنة التوتية والأصوام الكنسية: الرياضة الروحية، التسامي عن الماديات، والتجدد الداخلي\nيبدأ التقويم القبطي الكنسي بعيد النيروز في شهر توت تذكاراً للشهداء، وينتظم العام في دورات متتابعة من الأصوام الروحية والأعياد المفرحة.\n\nلا يقتصر الصوم المسيحي على الامتناع عن أطعمة معينة، بل هو تداريب زهدية واعية تهدف إلى ضبط الجسد وإعلاء الروح وممارسة الصدقة والغفران.\n\n#### ٢. العمارة الكنسية القبطية: الطراز الباسيليكي، القباب الثلاث، وحامل الأيقونات (الأيقونوستاس)\nتُبنى الكنائس القبطية متجهة نحو الشرق تطلعاً لشروق شمس البر (المسيح) وانتظاراً لمجيئه الثاني بمجد على سحاب السماء.\n\nينقسم صحن الكنيسة إلى ثلاثة أقسام ترمز للمراحل الروحية، ويفصل الهيكل المقدس عن صحن المؤمنين حامل الأيقونات (الأيقونوستاس) الخشبي المزخرف.\n\nترمز القباب الثلاث التي تعلو مذابح الهيكل إلى الثالوث الأقدس، موفرة بيئة صوتية وهندسية مهيبة تشعر المصلي بأنه في حضرة السماء والملائكة.",
        formulas: [
          {
            labelEn: "Coptic Iconography: Visual Theology, Symbolism, and Spiritual Aesthetics",
            labelAr: "فن الأيقونات القبطية: اللاهوت البصري، دلالات الرموز والألوان، والبعد الروحي للأيقونة",
            latex: "\\text{Core Rule: } Coptic Iconography: Visual The"
          },
          {
            labelEn: "The Liturgical Year and Seasons of Fasting: Spiritual Asceticism and Inner Transformation",
            labelAr: "السنة التوتية والأصوام الكنسية: الرياضة الروحية، التسامي عن الماديات، والتجدد الداخلي",
            latex: "\\text{Applied Maxim: } The Liturgical Year and Season"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Christian Studies",
          bookTitleAr: "التربية الدينية المسيحية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-CHR-CH02-L2",
          pageRange: '55-80'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Coptic Iconography: Visual Theology, Symbolism, and Spiritual Aesthetics",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ فن الأيقونات القبطية: اللاهوت البصري، دلالات الرموز والألوان، والبعد الروحي للأيقونة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-CHR-CH02-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Coptic Iconography: Visual Theology, Symbolism, and Spiritual Aesthetics",
            "Apply analytical thinking to The Liturgical Year and Seasons of Fasting: Spiritual Asceticism and Inner Transformation",
            "Synthesize ethical resolutions for Ecclesiastical Architecture: The Basilica, Coptic Domes, and the Iconostasis"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ فن الأيقونات القبطية: اللاهوت البصري، دلالات الرموز والألوان، والبعد الروحي للأيقونة",
            "تطبيق التفكير التحليلي الناقد في مسألة السنة التوتية والأصوام الكنسية: الرياضة الروحية، التسامي عن الماديات، والتجدد الداخلي",
            "بناء رؤى أخلاقية متكاملة لـ العمارة الكنسية القبطية: الطراز الباسيليكي، القباب الثلاث، وحامل الأيقونات (الأيقونوستاس)"
          ],
          prerequisitesEn: ['Christian Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة المسيحية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Theology of Sacraments', definition: 'Visible holy signs conveying invisible divine grace to believers' },
            { term: 'Agape Love', definition: 'Unconditional, sacrificial love reflecting divine nature' }
          ],
          keyVocabularyAr: [
            { term: 'اللاهوت الأسراري', definition: 'علامات مقدسة منظورة تمنح نعمة إلهية غير منظورة للمؤمنين' },
            { term: 'المحبة الباذلة (أغابي)', definition: 'محبة روحية غير مشروطة تتفانى في الخير وبذل الذات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Biblical and patristic context and reflective dialogue', activitiesAr: 'استعراض الشواهد الكتابية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق اللاهوتي', duration: '75 min', activitiesEn: 'Doctrinal analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing external ceremonial ritualism with genuine inward spiritual transformation and repentance'
          ],
          commonMisconceptionsAr: [
            'الخلط بين المظاهر الطقسية والشكلية الخارجية وبين التوبة الحقيقية والتحول القلبي الباطن'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative patristic studies and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للنصوص والأحكام.',
            advanced: 'تكليف بدراسات مقارنة في فكر الآباء وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Coptic Iconography: Visual Theology, Symbolism, and Spiritual Aesthetics?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (فن الأيقونات القبطية: اللاهوت البصري، دلالات الرموز والألوان، والبعد الروحي للأيقونة)؟",
            solutionEn: "Coptic icons are not decorative pictures, but \"windows to heaven\" and visual theology expressing divine truth through sacred artistic language.",
            solutionAr: "الأيقونة القبطية ليست مجرد لوحة فنية للزينة، بل هي \"نافذة إلى السماء\" وتعبير لاهوتي بصري يُجسد حقائق الإيمان عبر رموز وألوان مقدسة."
          }
        },
        worksheet: {
          id: 'egbac_chr_ch2_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Coptic Iconography: Visual Theology, Symbolism, and Spiritual Aesthetics",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ فن الأيقونات القبطية: اللاهوت البصري، دلالات الرموز والألوان، والبعد الروحي للأيقونة",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'christian_heritage_studio',
          titleEn: "Christian Dogmatics & Liturgical Arts Studio",
          titleAr: "استوديو اللاهوت المسيحي والفنون الليتورجية",
          descriptionEn: 'Interactive Christian studies studio featuring holy sacraments, Coptic monastic heritage, biblical synoptics, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة الأسرار الكنسية السبعة، تاريخ الرهبنة القبطية، دراسات الأناجيل، والأخلاقيات الحيوية.'
        }
      }
    ],
    databank: egBacChristianCh2Databank,
    solvedExamples: egBacChristianCh2SolvedExamples,
    exerciseProblems: egBacChristianCh2Exercises
  },
  {
    id: 'egbac_chr_ch3',
    chapterNumber: 3,
    titleEn: "Module 3: Coptic Heritage, Monasticism, and Global Ecumenical Contributions",
    titleAr: "الوحدة الثالثة: التراث القبطي، نشأة الرهبنة في مصر، ومجمع نيقية والمساهمة الحضارية والمسكونية العالمية",
    descriptionEn: "Origins of Christian monasticism in the Egyptian desert (St. Antony, St. Pachomius), the Desert Fathers, the Flight of the Holy Family to Egypt, and Coptic cultural contributions.",
    descriptionAr: "نشأة الرهبنة المسيحية في براري مصر (أنطونيوس وباخوميوس)، حكمة آباء البرية، رحلة العائلة المقدسة ومباركة أرض مصر، والمساهمة القبطية في صياغة الفكر الإنساني واللاهوتي العالمي.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_chr_ch3_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Origins of Christian Monasticism: St. Antony the Great in the Egyptian Desert",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ نشأة الرهبنة في العالم: القديس أنطونيوس الكبير (أبو الرهبان) في برية مصر الشرقية",
        summaryEn: "Comprehensive conceptual and applied mastery of Origins of Christian Monasticism: St. Antony the Great in the Egyptian Desert, Communal Monasticism (Cenobitic Life): St. Pachomius and Shenouda the Archimandrite, and Spiritual Wisdom of the Desert Fathers and Mothers (Apophthegmata Patrum).",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ نشأة الرهبنة في العالم: القديس أنطونيوس الكبير (أبو الرهبان) في برية مصر الشرقية، الرهبنة الديرية المجتمعية (الشركة الباخومية): القديس باخوميوس والأنبا شنودة رئيس المتوحدين، و حكمة آباء وأمهات البرية (أقوال الآباء - فردوس الرهبان): علم النفس الروحي وفضيلة التواضع.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Origins of Christian Monasticism: St. Antony the Great in the Egyptian Desert\nChristian monasticism was born in Egypt in the 3rd century when St. Antony retreated into the Eastern Desert to dedicate his life entirely to prayer and contemplation.\n\nSt. Athanasius wrote \"Life of Antony,\" which became an international bestseller throughout the Roman Empire, inspiring thousands to embrace monastic life across Europe and the East.\n\nAntonian anchoritic monasticism (solitary hermitage) demonstrated that spiritual warfare against inner passions and ego is the ultimate victory of human consciousness.\n\n#### 2. Communal Monasticism (Cenobitic Life): St. Pachomius and Shenouda the Archimandrite\nSt. Pachomius founded communal monasticism (Koinonia) in Upper Egypt, establishing structured daily routines of shared prayer, manual labor, and communal meals.\n\nPachomian monasteries functioned as self-sustaining, productive economic and scholarly communities, developing textiles, agriculture, pottery, and copying rare manuscripts.\n\nSt. Shenouda the Archimandrite expanded cenobitic discipline while establishing profound vernacular Coptic literature, promoting social justice and national cultural identity.\n\n#### 3. Spiritual Wisdom of the Desert Fathers and Mothers (Apophthegmata Patrum)\nThe sayings of the Desert Fathers (Apophthegmata Patrum) constitute timeless psychological and spiritual wisdom centered on humility, silence, and avoiding judging others.\n\nThe desert elders taught that conquering anger, pride, and greed begins with cognitive vigilance (Nepsis / mindfulness of thoughts) and deep personal honesty.\n\nDesert monasticism offered a non-violent, radical counter-culture against imperial decadence, prioritizing profound inner freedom over worldly status and wealth.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. نشأة الرهبنة في العالم: القديس أنطونيوس الكبير (أبو الرهبان) في برية مصر الشرقية\nنشأت الرهبنة المسيحية في العالم على أرض مصر في القرن الثالث الميلادي، حين انطلق القديس أنطونيوس الكبير إلى الصحراء الشرقية مكرساً حياته للصلاة والتأمل.\n\nكتب القديس أثناسيوس كتاب \"حياة أنطونيوس\" الذي تُرجم سريعاً إلى اللغات القديمة، ملهماً آلاف الشباب والعلماء في الشرق والغرب لاتباع درب التبتل الروحي.\n\nأثبتت رهبنة التوحد الأنطونية أن النصرة على شهوات الذات والارتقاء الروحي في خلوة البرية هي أسمى معارك الوعي الإنساني وأعظم صور البطولة الروحية.\n\n#### ٢. الرهبنة الديرية المجتمعية (الشركة الباخومية): القديس باخوميوس والأنبا شنودة رئيس المتوحدين\nأسس القديس باخوميوس نظام الرهبنة الجماعية (الشركة) في صعيد مصر، واضعاً قوانين صارمة للصلوات المشتركة والعمل اليدوي المنتظم والوجبات الجماعية.\n\nتحولت الأديرة الباخومية إلى مراكز إنتاجية وثقافية متكاملة، برعت في النسيج والزراعة والفخار، ونسخ المخطوطات النادرة وخدمة المحتاجين في المجتمع المحيط.\n\n#### ٢. حكمة آباء وأمهات البرية (أقوال الآباء - فردوس الرهبان): علم النفس الروحي وفضيلة التواضع\nتشكل أقوال آباء البرية كنزاً خالداً في علم النفس الروحي وفن مداواة النفوس، مركزة على فضائل التواضع وإنكار الذات، والصمت، وعدم إدانة الآخرين.\n\nعلم شيوخ البرية أن اقتلاع الغضب والغرور والطمع يبدأ بحراسة الأفكار واليقظة الباطنية (النيبسيس) والمكاشفة الصادقة مع الأب الروحي.\n\nقدمت رهبنة الصحراء بديلاً روحياً وإنسانياً راديكالياً ضد ترف المدن الرومانية وفسادها، معلية قيمة الحرية الداخلية على المناصب والمقتنيات الفانية.",
        formulas: [
          {
            labelEn: "Origins of Christian Monasticism: St. Antony the Great in the Egyptian Desert",
            labelAr: "نشأة الرهبنة في العالم: القديس أنطونيوس الكبير (أبو الرهبان) في برية مصر الشرقية",
            latex: "\\text{Core Rule: } Origins of Christian Monastici"
          },
          {
            labelEn: "Communal Monasticism (Cenobitic Life): St. Pachomius and Shenouda the Archimandrite",
            labelAr: "الرهبنة الديرية المجتمعية (الشركة الباخومية): القديس باخوميوس والأنبا شنودة رئيس المتوحدين",
            latex: "\\text{Applied Maxim: } Communal Monasticism (Cenobiti"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Christian Studies",
          bookTitleAr: "التربية الدينية المسيحية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-CHR-CH03-L1",
          pageRange: '75-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Origins of Christian Monasticism: St. Antony the Great in the Egyptian Desert",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ نشأة الرهبنة في العالم: القديس أنطونيوس الكبير (أبو الرهبان) في برية مصر الشرقية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-CHR-CH03-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Origins of Christian Monasticism: St. Antony the Great in the Egyptian Desert",
            "Apply analytical thinking to Communal Monasticism (Cenobitic Life): St. Pachomius and Shenouda the Archimandrite",
            "Synthesize ethical resolutions for Spiritual Wisdom of the Desert Fathers and Mothers (Apophthegmata Patrum)"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ نشأة الرهبنة في العالم: القديس أنطونيوس الكبير (أبو الرهبان) في برية مصر الشرقية",
            "تطبيق التفكير التحليلي الناقد في مسألة الرهبنة الديرية المجتمعية (الشركة الباخومية): القديس باخوميوس والأنبا شنودة رئيس المتوحدين",
            "بناء رؤى أخلاقية متكاملة لـ حكمة آباء وأمهات البرية (أقوال الآباء - فردوس الرهبان): علم النفس الروحي وفضيلة التواضع"
          ],
          prerequisitesEn: ['Christian Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة المسيحية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Theology of Sacraments', definition: 'Visible holy signs conveying invisible divine grace to believers' },
            { term: 'Agape Love', definition: 'Unconditional, sacrificial love reflecting divine nature' }
          ],
          keyVocabularyAr: [
            { term: 'اللاهوت الأسراري', definition: 'علامات مقدسة منظورة تمنح نعمة إلهية غير منظورة للمؤمنين' },
            { term: 'المحبة الباذلة (أغابي)', definition: 'محبة روحية غير مشروطة تتفانى في الخير وبذل الذات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Biblical and patristic context and reflective dialogue', activitiesAr: 'استعراض الشواهد الكتابية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق اللاهوتي', duration: '75 min', activitiesEn: 'Doctrinal analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing external ceremonial ritualism with genuine inward spiritual transformation and repentance'
          ],
          commonMisconceptionsAr: [
            'الخلط بين المظاهر الطقسية والشكلية الخارجية وبين التوبة الحقيقية والتحول القلبي الباطن'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative patristic studies and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للنصوص والأحكام.',
            advanced: 'تكليف بدراسات مقارنة في فكر الآباء وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Origins of Christian Monasticism: St. Antony the Great in the Egyptian Desert?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (نشأة الرهبنة في العالم: القديس أنطونيوس الكبير (أبو الرهبان) في برية مصر الشرقية)؟",
            solutionEn: "Christian monasticism was born in Egypt in the 3rd century when St. Antony retreated into the Eastern Desert to dedicate his life entirely to prayer and contemplation.",
            solutionAr: "نشأت الرهبنة المسيحية في العالم على أرض مصر في القرن الثالث الميلادي، حين انطلق القديس أنطونيوس الكبير إلى الصحراء الشرقية مكرساً حياته للصلاة والتأمل."
          }
        },
        worksheet: {
          id: 'egbac_chr_ch3_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Origins of Christian Monasticism: St. Antony the Great in the Egyptian Desert",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ نشأة الرهبنة في العالم: القديس أنطونيوس الكبير (أبو الرهبان) في برية مصر الشرقية",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'christian_heritage_studio',
          titleEn: "Sacraments & Coptic Monastic Heritage Studio",
          titleAr: "استوديو الأسرار الكنسية وتراث الرهبنة القبطية",
          descriptionEn: 'Interactive Christian studies studio featuring holy sacraments, Coptic monastic heritage, biblical synoptics, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة الأسرار الكنسية السبعة، تاريخ الرهبنة القبطية، دراسات الأناجيل، والأخلاقيات الحيوية.'
        }
      },
      {
        id: 'egbac_chr_ch3_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Egypt in Sacred Scripture: The Flight of the Holy Family and Prophetic Blessing",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ مصر في الأسفار الإلهية: رحلة العائلة المقدسة، بركة أرض مصر، والملاذ التاريخي الآمن",
        summaryEn: "Comprehensive conceptual and applied mastery of Egypt in Sacred Scripture: The Flight of the Holy Family and Prophetic Blessing, Historical Role of St. Athanasius and St. Cyril in Universal Ecumenical Councils, and Coptic Language, Manuscripts, and Architecture as Integral Pillars of Egyptian Identity.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ مصر في الأسفار الإلهية: رحلة العائلة المقدسة، بركة أرض مصر، والملاذ التاريخي الآمن، دور القديس أثناسيوس وكيرلس الكبير في المجامع المسكونية ودفاعهما عن الإيمان الجامع، و اللغة والمخطوطات والعمارة القبطية كركائز أصيلة للهوية والحضارة المصرية المتصلة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Egypt in Sacred Scripture: The Flight of the Holy Family and Prophetic Blessing\nEgypt holds a unique sacred position in biblical history: the Holy Family (Jesus, Mary, Joseph) sought refuge in Egypt to escape the cruelty of King Herod.\n\nThe trail of the Holy Family spanning the Delta, Cairo, and Upper Egypt consecrates historical sites (e.g., Old Cairo churches, Mount Qusqam) recognized globally as heritage routes.\n\nThe prophetic scripture \"Blessed be Egypt My people\" (Isaiah 19:25) singles out Egypt with an unprecedented divine blessing among world civilizations.\n\n#### 2. Historical Role of St. Athanasius and St. Cyril in Universal Ecumenical Councils\nAlexandrian popes played decisive leadership roles in formulating global Christian theology at the Ecumenical Councils of Nicaea (325 AD) and Ephesus (431 AD).\n\nSt. Athanasius endured five exiles spanning seventeen years rather than compromising the apostolic faith regarding the eternal divinity of Jesus Christ.\n\nSt. Cyril of Alexandria developed theological precision regarding the term \"Theotokos\" (Mother of God), preserving the inseparable oneness of Christ's person.\n\n#### 3. Coptic Language, Manuscripts, and Architecture as Integral Pillars of Egyptian Identity\nThe Coptic language represents the final developmental stage of ancient Egyptian, written in Greek script supplemented by seven Demotic letters.\n\nThe Coptic language was instrumental in Champollion's decipherment of the Rosetta Stone, unlocking the secrets of hieroglyphs and ancient Egyptian monuments.\n\nCoptic heritage serves as an unbreakable cultural bridge preserving pharaonic folklore, medical knowledge, agricultural calendars, and art within modern Egyptian civilization.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. مصر في الأسفار الإلهية: رحلة العائلة المقدسة، بركة أرض مصر، والملاذ التاريخي الآمن\nتحظى مصر بمكانة روحية وتاريخية فريدة في الكتاب المقدس، حيث جاءت إليها العائلة المقدسة لاجئة آمنة من بطش الملك هيرودس، مباركة ربوع الوطن.\n\nيمتد مسار العائلة المقدسة من سيناء والدلتا إلى وادي النطرون والقاهرة والصعيد (دير المحرق)، مشكلاً تراثاً حضارياً وإنسانياً ووجهة حج ديني عالمية.\n\nتتفرد مصر في نبوة إشعياء الرسول بالبركة الإلهية الخالدة: \"مبارك شعبي مصر\" (إشعياء ١٩: ٢٥)، مؤكدة رسالتها الحضارية كملاذ للسلام والبر والإيمان.\n\n#### ٢. دور القديس أثناسيوس وكيرلس الكبير في المجامع المسكونية ودفاعهما عن الإيمان الجامع\nقاد بطاركة الإسكندرية المجامع المسكونية الكبرى؛ فالقديس أثناسيوس قاد مجمع نيقية (٣٢٥م)، والقديس كيرلس عمود الدين ترأس مجمع أفسس (٤٣١م).\n\nتحمل القديس أثناسيوس النفي خمس مرات لسبعة عشر عاماً دفاعاً عن الحق الإيماني ومواجهة الضغوط الإمبراطورية تحت شعار \"أثناسيوس ضد العالم\".\n\n#### ٢. اللغة والمخطوطات والعمارة القبطية كركائز أصيلة للهوية والحضارة المصرية المتصلة\nتُمثل اللغة القبطية المرحلة التطورية الأخيرة للغة المصرية القديمة (لغة الفراعنة)، كُتبت بالحروف اليونانية مع سبعة أحرف من الخط الديموطيقي.\n\nكانت معرفة شامبليون باللغة القبطية المفتاح الحاسم والوحيد لفك رموز حجر رشيد واستعادة قراءة النصوص الهيروغليفية وتاريخ الحضارة الفرعونية.\n\nيشكل التراث القبطي الجسر الحي الذي حفظ الفنون، والموسيقى، وأسماء القرى، والتقويم الزراعي المصري القديم، مؤكداً استمرارية الشخصية المصرية عبر العصور.",
        formulas: [
          {
            labelEn: "Egypt in Sacred Scripture: The Flight of the Holy Family and Prophetic Blessing",
            labelAr: "مصر في الأسفار الإلهية: رحلة العائلة المقدسة، بركة أرض مصر، والملاذ التاريخي الآمن",
            latex: "\\text{Core Rule: } Egypt in Sacred Scripture: The"
          },
          {
            labelEn: "Historical Role of St. Athanasius and St. Cyril in Universal Ecumenical Councils",
            labelAr: "دور القديس أثناسيوس وكيرلس الكبير في المجامع المسكونية ودفاعهما عن الإيمان الجامع",
            latex: "\\text{Applied Maxim: } Historical Role of St. Athanas"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Christian Studies",
          bookTitleAr: "التربية الدينية المسيحية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-CHR-CH03-L2",
          pageRange: '90-115'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Egypt in Sacred Scripture: The Flight of the Holy Family and Prophetic Blessing",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ مصر في الأسفار الإلهية: رحلة العائلة المقدسة، بركة أرض مصر، والملاذ التاريخي الآمن",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-CHR-CH03-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Egypt in Sacred Scripture: The Flight of the Holy Family and Prophetic Blessing",
            "Apply analytical thinking to Historical Role of St. Athanasius and St. Cyril in Universal Ecumenical Councils",
            "Synthesize ethical resolutions for Coptic Language, Manuscripts, and Architecture as Integral Pillars of Egyptian Identity"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ مصر في الأسفار الإلهية: رحلة العائلة المقدسة، بركة أرض مصر، والملاذ التاريخي الآمن",
            "تطبيق التفكير التحليلي الناقد في مسألة دور القديس أثناسيوس وكيرلس الكبير في المجامع المسكونية ودفاعهما عن الإيمان الجامع",
            "بناء رؤى أخلاقية متكاملة لـ اللغة والمخطوطات والعمارة القبطية كركائز أصيلة للهوية والحضارة المصرية المتصلة"
          ],
          prerequisitesEn: ['Christian Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة المسيحية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Theology of Sacraments', definition: 'Visible holy signs conveying invisible divine grace to believers' },
            { term: 'Agape Love', definition: 'Unconditional, sacrificial love reflecting divine nature' }
          ],
          keyVocabularyAr: [
            { term: 'اللاهوت الأسراري', definition: 'علامات مقدسة منظورة تمنح نعمة إلهية غير منظورة للمؤمنين' },
            { term: 'المحبة الباذلة (أغابي)', definition: 'محبة روحية غير مشروطة تتفانى في الخير وبذل الذات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Biblical and patristic context and reflective dialogue', activitiesAr: 'استعراض الشواهد الكتابية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق اللاهوتي', duration: '75 min', activitiesEn: 'Doctrinal analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing external ceremonial ritualism with genuine inward spiritual transformation and repentance'
          ],
          commonMisconceptionsAr: [
            'الخلط بين المظاهر الطقسية والشكلية الخارجية وبين التوبة الحقيقية والتحول القلبي الباطن'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative patristic studies and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للنصوص والأحكام.',
            advanced: 'تكليف بدراسات مقارنة في فكر الآباء وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Egypt in Sacred Scripture: The Flight of the Holy Family and Prophetic Blessing?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (مصر في الأسفار الإلهية: رحلة العائلة المقدسة، بركة أرض مصر، والملاذ التاريخي الآمن)؟",
            solutionEn: "Egypt holds a unique sacred position in biblical history: the Holy Family (Jesus, Mary, Joseph) sought refuge in Egypt to escape the cruelty of King Herod.",
            solutionAr: "تحظى مصر بمكانة روحية وتاريخية فريدة في الكتاب المقدس، حيث جاءت إليها العائلة المقدسة لاجئة آمنة من بطش الملك هيرودس، مباركة ربوع الوطن."
          }
        },
        worksheet: {
          id: 'egbac_chr_ch3_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Egypt in Sacred Scripture: The Flight of the Holy Family and Prophetic Blessing",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ مصر في الأسفار الإلهية: رحلة العائلة المقدسة، بركة أرض مصر، والملاذ التاريخي الآمن",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'christian_heritage_studio',
          titleEn: "Sacraments & Coptic Monastic Heritage Studio",
          titleAr: "استوديو الأسرار الكنسية وتراث الرهبنة القبطية",
          descriptionEn: 'Interactive Christian studies studio featuring holy sacraments, Coptic monastic heritage, biblical synoptics, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة الأسرار الكنسية السبعة، تاريخ الرهبنة القبطية، دراسات الأناجيل، والأخلاقيات الحيوية.'
        }
      }
    ],
    databank: egBacChristianCh3Databank,
    solvedExamples: egBacChristianCh3SolvedExamples,
    exerciseProblems: egBacChristianCh3Exercises
  },
  {
    id: 'egbac_chr_ch4',
    chapterNumber: 4,
    titleEn: "Module 4: Bioethics, Environmental Ecology, and Modern Societal Challenges in Christian Thought",
    titleAr: "الوحدة الرابعة: الأخلاقيات الحيوية والطبية، حماية البيئة ورعاية الخليقة، والمسائل المعاصرة في الفكر المسيحي",
    descriptionEn: "Human dignity as the Image of God (Imago Dei), organ transplantation, bioethical dilemmas, environmental ecology and creation care, AI and transhumanism, and Christian social justice.",
    descriptionAr: "كرامة الإنسان كصورة الله ومثاله، ضوابط زراعة الأعضاء والهندسة الوراثية، رفض القتل الرحيم، رعاية البيئة ومسؤولية حماية الخليقة، تحديات الذكاء الاصطناعي، ومبادئ العدالة الاجتماعية والتضامن الإنساني.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_chr_ch4_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Theological Anthropology: Human Dignity as the Image of God (Imago Dei)",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ الأنثروبولوجيا اللاهوتية: كرامة الإنسان وقدسية الحياة كصورة الله ومثاله (Imago Dei)",
        summaryEn: "Comprehensive conceptual and applied mastery of Theological Anthropology: Human Dignity as the Image of God (Imago Dei), Biomedical Ethics: Organ Transplantation, Brain Death, and Genetic Engineering, and Sanctity of Life at Margins: Rejection of Euthanasia and Promotion of Palliative Care.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ الأنثروبولوجيا اللاهوتية: كرامة الإنسان وقدسية الحياة كصورة الله ومثاله (Imago Dei)، الأخلاقيات الطبية والحيوية: التبرع بالأعضاء، موت الدماغ، والهندسة الوراثية، و قدسية الحياة عند المنعطفات: رفض القتل الرحيم، وتطوير الرعاية التلطيفية للمرضى.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Theological Anthropology: Human Dignity as the Image of God (Imago Dei)\nEvery human being possesses intrinsic, inalienable dignity because humans are created in the Image and Likeness of God (Genesis 1:26).\n\nHuman worth is independent of social status, physical capability, cognitive health, or economic productivity—the vulnerable and disabled possess equal dignity.\n\nThe Imago Dei doctrine forms the historical and philosophical bedrock of universal human rights, invalidating slavery, discrimination, and utilitarian exploitation.\n\n#### 2. Biomedical Ethics: Organ Transplantation, Brain Death, and Genetic Engineering\nChristian bioethics supports voluntary organ donation as an act of altruistic charity, provided it is strictly non-commercial and causes no direct harm to the living donor.\n\nDetermination of death requires irreversible cessation of total brain and brainstem function, verified by rigorous independent medical protocols.\n\nGenetic therapy aimed at curing fatal hereditary disorders is encouraged, while reproductive cloning and eugenic modifications violate human individuality and divine order.\n\n#### 3. Sanctity of Life at Margins: Rejection of Euthanasia and Promotion of Palliative Care\nLife is a sacred gift from God from conception until natural death; deliberate termination of human life through euthanasia or assisted suicide is morally rejected.\n\nChristianity advocates comprehensive palliative medicine, pain management, and compassionate companionship so terminal patients pass away with dignity and peace.\n\nDistinction is maintained between active euthanasia (prohibited) and withholding disproportionate, futile therapeutic obstinacy when death is naturally imminent.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. الأنثروبولوجيا اللاهوتية: كرامة الإنسان وقدسية الحياة كصورة الله ومثاله (Imago Dei)\nيتمتع كل إنسان بكرامة أصيلة لا تقبل المساس أو المقايضة، لكونه مخلوقاً على صورة الله ومثاله، مما يمنحه قيمة روحية مطلقة.\n\nلا تتوقف قيمة الإنسان على كفاءته الإنتاجية أو ثروته أو سلامته البدنية؛ فالضعفاء وذوو الاحتياجات الخاصة والمرضى متساوون في الحق والكرامة.\n\nيُعد مبدأ صورة الله الأساس الفلسفي والأخلاقي الأصيل لشرعة حقوق الإنسان العالمية، مجرماً كافة أشكال الاستعباد والتمييز العنصري والاستغلال النفعي.\n\n#### ٢. الأخلاقيات الطبية والحيوية: التبرع بالأعضاء، موت الدماغ، والهندسة الوراثية\nيجيز الفكر المسيحي التبرع الطوعي بالأعضاء باعتباره عملاً من أعمال الإيثار والمحبة لإنقاذ حياة مريض، مع التحريم القاطع للاتجار بالأعضاء.\n\nيشترط لتشخيص الوفاة السريرية التوقف التام وغير القابل للرجوع لكامل وظائف المخ وجذع الدماغ وفق بروتوكولات طبية مستقلة وصارمة.\n\n#### ٢. قدسية الحياة عند المنعطفات: رفض القتل الرحيم، وتطوير الرعاية التلطيفية للمرضى\nالحياة هبة إلهية مقدسة منذ تكوينها وحتى نهايتها الطبيعية؛ ويرفض الفكر المسيحي القتل الرحيم أو الانتحار المساعد باعتباره تعدياً على سلطان الخالق.\n\nتدعو الكنيسة إلى تعزيز الطب التلطيفي، وتسكين الآلام، وتوفير المرافقة الروحية والإنسانية للمرضى في أيامهم الأخيرة دون تعذيب أو استعجال للموت.\n\nيُميز اللاهوت الأخلاقي بوضوح بين القتل الإيجابي الممنوع، وبين عدم اللجوء إلى الإصرار العلاجي العبثي الذي يطيل معاناة الاحتضار دون أي أمل طبي.",
        formulas: [
          {
            labelEn: "Theological Anthropology: Human Dignity as the Image of God (Imago Dei)",
            labelAr: "الأنثروبولوجيا اللاهوتية: كرامة الإنسان وقدسية الحياة كصورة الله ومثاله (Imago Dei)",
            latex: "\\text{Core Rule: } Theological Anthropology: Huma"
          },
          {
            labelEn: "Biomedical Ethics: Organ Transplantation, Brain Death, and Genetic Engineering",
            labelAr: "الأخلاقيات الطبية والحيوية: التبرع بالأعضاء، موت الدماغ، والهندسة الوراثية",
            latex: "\\text{Applied Maxim: } Biomedical Ethics: Organ Trans"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Christian Studies",
          bookTitleAr: "التربية الدينية المسيحية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-CHR-CH04-L1",
          pageRange: '110-135'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Theological Anthropology: Human Dignity as the Image of God (Imago Dei)",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ الأنثروبولوجيا اللاهوتية: كرامة الإنسان وقدسية الحياة كصورة الله ومثاله (Imago Dei)",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-CHR-CH04-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Theological Anthropology: Human Dignity as the Image of God (Imago Dei)",
            "Apply analytical thinking to Biomedical Ethics: Organ Transplantation, Brain Death, and Genetic Engineering",
            "Synthesize ethical resolutions for Sanctity of Life at Margins: Rejection of Euthanasia and Promotion of Palliative Care"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ الأنثروبولوجيا اللاهوتية: كرامة الإنسان وقدسية الحياة كصورة الله ومثاله (Imago Dei)",
            "تطبيق التفكير التحليلي الناقد في مسألة الأخلاقيات الطبية والحيوية: التبرع بالأعضاء، موت الدماغ، والهندسة الوراثية",
            "بناء رؤى أخلاقية متكاملة لـ قدسية الحياة عند المنعطفات: رفض القتل الرحيم، وتطوير الرعاية التلطيفية للمرضى"
          ],
          prerequisitesEn: ['Christian Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة المسيحية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Theology of Sacraments', definition: 'Visible holy signs conveying invisible divine grace to believers' },
            { term: 'Agape Love', definition: 'Unconditional, sacrificial love reflecting divine nature' }
          ],
          keyVocabularyAr: [
            { term: 'اللاهوت الأسراري', definition: 'علامات مقدسة منظورة تمنح نعمة إلهية غير منظورة للمؤمنين' },
            { term: 'المحبة الباذلة (أغابي)', definition: 'محبة روحية غير مشروطة تتفانى في الخير وبذل الذات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Biblical and patristic context and reflective dialogue', activitiesAr: 'استعراض الشواهد الكتابية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق اللاهوتي', duration: '75 min', activitiesEn: 'Doctrinal analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing external ceremonial ritualism with genuine inward spiritual transformation and repentance'
          ],
          commonMisconceptionsAr: [
            'الخلط بين المظاهر الطقسية والشكلية الخارجية وبين التوبة الحقيقية والتحول القلبي الباطن'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative patristic studies and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للنصوص والأحكام.',
            advanced: 'تكليف بدراسات مقارنة في فكر الآباء وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Theological Anthropology: Human Dignity as the Image of God (Imago Dei)?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (الأنثروبولوجيا اللاهوتية: كرامة الإنسان وقدسية الحياة كصورة الله ومثاله (Imago Dei))؟",
            solutionEn: "Every human being possesses intrinsic, inalienable dignity because humans are created in the Image and Likeness of God (Genesis 1:26).",
            solutionAr: "يتمتع كل إنسان بكرامة أصيلة لا تقبل المساس أو المقايضة، لكونه مخلوقاً على صورة الله ومثاله، مما يمنحه قيمة روحية مطلقة."
          }
        },
        worksheet: {
          id: 'egbac_chr_ch4_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Theological Anthropology: Human Dignity as the Image of God (Imago Dei)",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ الأنثروبولوجيا اللاهوتية: كرامة الإنسان وقدسية الحياة كصورة الله ومثاله (Imago Dei)",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'christian_heritage_studio',
          titleEn: "Christian Ethics & Bioethics Sandbox",
          titleAr: "مختبر الأخلاقيات المسيحية والبيوأخلاقيات المعاصرة",
          descriptionEn: 'Interactive Christian studies studio featuring holy sacraments, Coptic monastic heritage, biblical synoptics, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة الأسرار الكنسية السبعة، تاريخ الرهبنة القبطية، دراسات الأناجيل، والأخلاقيات الحيوية.'
        }
      },
      {
        id: 'egbac_chr_ch4_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Environmental Stewardship (Creation Care): Ecological Ecology and Climate Ethics",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ رعاية الخليقة والمسؤولية البيئية: اللاهوت البيئي، حماية المناخ، وصيانة التنوع الحيوي",
        summaryEn: "Comprehensive conceptual and applied mastery of Environmental Stewardship (Creation Care): Ecological Ecology and Climate Ethics, Artificial Intelligence, Transhumanism, and the Limits of Computational Rationality, and Social Justice, Human Solidarity, and Alleviating Poverty in Christian Social Thought.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ رعاية الخليقة والمسؤولية البيئية: اللاهوت البيئي، حماية المناخ، وصيانة التنوع الحيوي، الذكاء الاصطناعي وما بعد الإنسانية (Transhumanism): حدود الآلة وأصالة الوعي والروح، و العدالة الاجتماعية، التضامن الإنساني، ومكافحة الفقر في الفكر الاجتماعي المسيحي.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Environmental Stewardship (Creation Care): Ecological Ecology and Climate Ethics\nHumankind was placed in the Garden of Eden \"to cultivate and keep it\" (Genesis 2:15), commanding responsible stewardship rather than destructive exploitation.\n\nEcological degradation, excessive pollution, and climate disruptions are ethical failures rooted in human greed, consumerism, and disregard for the vulnerable.\n\nThe concept of \"Ecological Metanoia\" summons humanity to repent of exploitative environmental attitudes, embracing sustainable living as a spiritual commitment.\n\n#### 2. Artificial Intelligence, Transhumanism, and the Limits of Computational Rationality\nAI technologies are powerful human tools to be harnessed for societal good, medical advances, and education, under strict ethical human oversight.\n\nAlgorithms lack souls, consciousness, empathy, and moral agency; they cannot replace human ethical responsibility, pastoral care, or judicial conscience.\n\nTranshumanist ideologies claiming to achieve immortality through cybernetic enhancement misunderstand human nature, ignoring that true transcendence is spiritual.\n\n#### 3. Social Justice, Human Solidarity, and Alleviating Poverty in Christian Social Thought\nChristianity champions active social justice: defending the rights of laborers, caring for orphans and widows, and sharing wealth with the impoverished.\n\nPrivate property carries a social mortgage: wealth is a trust granted by God to be utilized responsibly for human development and public welfare.\n\nThe Option for the Poor is not mere philanthropy, but an identification with Christ who proclaimed: \"As you did it to one of the least of these, you did it to Me.\"",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. رعاية الخليقة والمسؤولية البيئية: اللاهوت البيئي، حماية المناخ، وصيانة التنوع الحيوي\nأُوكل الإنسان في جنة عدن \"ليعملها ويحفظها\" (تكوين ٢: ١٥)، مما يلزمه بحماية البيئة ورعاية المخلوقات وصيانة الموارد الطبيعية للأجيال القادمة.\n\nيعد تلويث البيئة وتبديد الثروات الطبيعية خطيئة أخلاقية ناشئة عن الجشع الاستهلاكي، والضحية الكبرى للتدهور البيئي هم الفقراء في العالم النامي.\n\nيدعو مفهوم \"الميتانويا البيئية\" البشرية إلى مراجعة أنماط الحياة الاستهلاكية، واعتبار حماية المناخ والتنوع الحيوي واجباً دينياً وأخلاقياً مقدساً.\n\n#### ٢. الذكاء الاصطناعي وما بعد الإنسانية (Transhumanism): حدود الآلة وأصالة الوعي والروح\nتُعد تقنيات الذكاء الاصطناعي أدوات تقنية متقدمة يجب تسخيرها لخدمة البشرية والطب والتعليم تحت إشراف وضوابط أخلاقية وإنسانية حازمة.\n\nتفتقر الخوارزميات الرقمية إلى الضمير الأخلاقي والوعي والروح والمشاعر، ولا يمكن تفويض القرارات الإنسانية المصيرية أو الرعوية لآلات صماء.\n\n#### ٢. العدالة الاجتماعية، التضامن الإنساني، ومكافحة الفقر في الفكر الاجتماعي المسيحي\nتتبنى المسيحية قضية العدالة الاجتماعية بكل قوة: الدفاع عن حقوق العمال، رعاية الأيتام والأرامل، وتقاسم الخيرات وسد احتياجات الفقراء والمعوزين.\n\nتخضع الملكية الفردية لمسؤولية مجتمعية؛ فالمال وزنة وأمانة إلهية يجب توظيفها في الاستثمار النافع، ومحاربة الاحتكار، وتوفير فرص العمل الكريمة.\n\nإن الانحياز للمستضعفين ليس إحساناً فوقياً، بل هو لقاء مع المسيح نفسه الذي أعلن في إنجيله: \"بما أنكم فعلتموه بأحد إخوتي هؤلاء الأصاغر، فبي فعلتم\".",
        formulas: [
          {
            labelEn: "Environmental Stewardship (Creation Care): Ecological Ecology and Climate Ethics",
            labelAr: "رعاية الخليقة والمسؤولية البيئية: اللاهوت البيئي، حماية المناخ، وصيانة التنوع الحيوي",
            latex: "\\text{Core Rule: } Environmental Stewardship (Cre"
          },
          {
            labelEn: "Artificial Intelligence, Transhumanism, and the Limits of Computational Rationality",
            labelAr: "الذكاء الاصطناعي وما بعد الإنسانية (Transhumanism): حدود الآلة وأصالة الوعي والروح",
            latex: "\\text{Applied Maxim: } Artificial Intelligence, Trans"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Christian Studies",
          bookTitleAr: "التربية الدينية المسيحية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-CHR-CH04-L2",
          pageRange: '125-150'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Environmental Stewardship (Creation Care): Ecological Ecology and Climate Ethics",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ رعاية الخليقة والمسؤولية البيئية: اللاهوت البيئي، حماية المناخ، وصيانة التنوع الحيوي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-CHR-CH04-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Environmental Stewardship (Creation Care): Ecological Ecology and Climate Ethics",
            "Apply analytical thinking to Artificial Intelligence, Transhumanism, and the Limits of Computational Rationality",
            "Synthesize ethical resolutions for Social Justice, Human Solidarity, and Alleviating Poverty in Christian Social Thought"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ رعاية الخليقة والمسؤولية البيئية: اللاهوت البيئي، حماية المناخ، وصيانة التنوع الحيوي",
            "تطبيق التفكير التحليلي الناقد في مسألة الذكاء الاصطناعي وما بعد الإنسانية (Transhumanism): حدود الآلة وأصالة الوعي والروح",
            "بناء رؤى أخلاقية متكاملة لـ العدالة الاجتماعية، التضامن الإنساني، ومكافحة الفقر في الفكر الاجتماعي المسيحي"
          ],
          prerequisitesEn: ['Christian Foundations', 'General Secondary Humanities Competencies'],
          prerequisitesAr: ['الأصول العامة للثقافة المسيحية', 'مهارات العلوم الإنسانية للمرحلة الثانوية'],
          keyVocabularyEn: [
            { term: 'Theology of Sacraments', definition: 'Visible holy signs conveying invisible divine grace to believers' },
            { term: 'Agape Love', definition: 'Unconditional, sacrificial love reflecting divine nature' }
          ],
          keyVocabularyAr: [
            { term: 'اللاهوت الأسراري', definition: 'علامات مقدسة منظورة تمنح نعمة إلهية غير منظورة للمؤمنين' },
            { term: 'المحبة الباذلة (أغابي)', definition: 'محبة روحية غير مشروطة تتفانى في الخير وبذل الذات' }
          ],
          teachingPacing: [
            { phaseEn: 'Introduction & Scriptural Context', phaseAr: 'التهيئة والمدخل التأسيسي للنصوص', duration: '15 min', activitiesEn: 'Review of Biblical and patristic context and reflective dialogue', activitiesAr: 'استعراض الشواهد الكتابية وإطلاق الحوار الاستكشافي' },
            { phaseEn: 'Concept Deep Dive & Analysis', phaseAr: 'التحليل المفاهيمي والتطبيق اللاهوتي', duration: '75 min', activitiesEn: 'Doctrinal analysis, solved examples, and interactive databank assessment', activitiesAr: 'شرح القواعد، حل المسائل النموذجية، وتقييم بنك الأسئلة' }
          ],
          commonMisconceptionsEn: [
            'Confusing external ceremonial ritualism with genuine inward spiritual transformation and repentance'
          ],
          commonMisconceptionsAr: [
            'الخلط بين المظاهر الطقسية والشكلية الخارجية وبين التوبة الحقيقية والتحول القلبي الباطن'
          ],
          differentiationEn: {
            struggling: 'Provide guided concept maps and simplified scriptural summaries.',
            advanced: 'Assign comparative patristic studies and contemporary bioethics debate papers.'
          },
          differentiationAr: {
            struggling: 'توفير خرائط مفاهيمية إيضاحية وملخصات مبسطة للنصوص والأحكام.',
            advanced: 'تكليف بدراسات مقارنة في فكر الآباء وبحوث في الأخلاقيات الحيوية.'
          },
          formativeAssessmentEn: 'Four-option ministerial MCQ diagnostic checkpoint measuring textual comprehension and ethical reasoning.',
          formativeAssessmentAr: 'تقييم تشخيصي تفاعلي من 4 خيارات لقياس الاستيعاب الدلالي والتحليل القيمي.',
          exitTicketQuestion: {
            questionEn: "What is the accredited curriculum determination regarding Environmental Stewardship (Creation Care): Ecological Ecology and Climate Ethics?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (رعاية الخليقة والمسؤولية البيئية: اللاهوت البيئي، حماية المناخ، وصيانة التنوع الحيوي)؟",
            solutionEn: "Humankind was placed in the Garden of Eden \"to cultivate and keep it\" (Genesis 2:15), commanding responsible stewardship rather than destructive exploitation.",
            solutionAr: "أُوكل الإنسان في جنة عدن \"ليعملها ويحفظها\" (تكوين ٢: ١٥)، مما يلزمه بحماية البيئة ورعاية المخلوقات وصيانة الموارد الطبيعية للأجيال القادمة."
          }
        },
        worksheet: {
          id: 'egbac_chr_ch4_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Environmental Stewardship (Creation Care): Ecological Ecology and Climate Ethics",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ رعاية الخليقة والمسؤولية البيئية: اللاهوت البيئي، حماية المناخ، وصيانة التنوع الحيوي",
          descriptionEn: 'Formative assessment and applied conceptual practice worksheet.',
          descriptionAr: 'ورقة عمل تدريبية وتطبيق مفاهيمي وقيمي للدرس.',
          estimatedTimeMinutes: 30,
          problems: []
        },
        interactiveWidget: {
          type: 'christian_heritage_studio',
          titleEn: "Christian Ethics & Bioethics Sandbox",
          titleAr: "مختبر الأخلاقيات المسيحية والبيوأخلاقيات المعاصرة",
          descriptionEn: 'Interactive Christian studies studio featuring holy sacraments, Coptic monastic heritage, biblical synoptics, and bioethics.',
          descriptionAr: 'استوديو تفاعلي حي لمحاكاة الأسرار الكنسية السبعة، تاريخ الرهبنة القبطية، دراسات الأناجيل، والأخلاقيات الحيوية.'
        }
      }
    ],
    databank: egBacChristianCh4Databank,
    solvedExamples: egBacChristianCh4SolvedExamples,
    exerciseProblems: egBacChristianCh4Exercises
  }
];

export const egBacChristianBranch: Branch = {
  id: 'egbac_christian',
  titleEn: "Egyptian Baccalaureate Christian Studies",
  titleAr: "التربية الدينية المسيحية للبكالوريا المصرية",
  categoryEn: "Egyptian Baccalaureate Humanities & Religion",
  categoryAr: "العلوم الإنسانية والتربية الدينية للبكالوريا",
  iconName: 'BookOpen',
  colorGradient: 'from-amber-950 via-rose-900 to-purple-950',
  chapters
};
