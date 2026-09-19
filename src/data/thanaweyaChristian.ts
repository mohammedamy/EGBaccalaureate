import type { Branch, Chapter } from '../types/curriculum';
import { christianCh1Databank } from './databanks/thanaweya/christianCh1Databank';
import { christianCh1SolvedExamples, christianCh1Exercises } from './textbook/thanaweya/christianCh1Textbook';
import { christianCh2Databank } from './databanks/thanaweya/christianCh2Databank';
import { christianCh2SolvedExamples, christianCh2Exercises } from './textbook/thanaweya/christianCh2Textbook';
import { christianCh3Databank } from './databanks/thanaweya/christianCh3Databank';
import { christianCh3SolvedExamples, christianCh3Exercises } from './textbook/thanaweya/christianCh3Textbook';
import { christianCh4Databank } from './databanks/thanaweya/christianCh4Databank';
import { christianCh4SolvedExamples, christianCh4Exercises } from './textbook/thanaweya/christianCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'th_chr_ch1',
    chapterNumber: 1,
    titleEn: "Chapter 1: The Holy Bible: Structure, Inspiration, Biblical Hermeneutics, and The Gospels",
    titleAr: "الفصل الأول: الكتاب المقدس: الأسفار، الوحي الإلهي، البشائر الأربع، ومبادئ التفسير",
    descriptionEn: "Structure of the Old and New Testaments, divine inspiration (Theopneustos), manuscript preservation, the Four Gospels, the Sermon on the Mount, and parables of the Kingdom of God.",
    descriptionAr: "أسفار العهدين القديم والجديد، الوحي الإلهي وعصمة النص وحفظ المخطوطات، البشائر الإنجيلية الأربع، العظة على الجبل ودستور الكمال الأخلاقي، وأمثال ملكوت الله في حياة المؤمن.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_chr_ch1_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Structure of the Holy Bible: Unity of the Old and New Testaments and Divine Inspiration",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ أسفار الكتاب المقدس: وحدة العهدين القديم والجديد، الوحي الإلهي، وعصمة النص المقدس",
        summaryEn: "Comprehensive conceptual and applied mastery of Structure of the Holy Bible: Unity of the Old and New Testaments and Divine Inspiration, The Four Holy Gospels: Theological Distinctives, Synoptic Perspectives, and Johannine Christology, and The Sermon on the Mount (Matthew 5-7): The Beatitudes, Moral Perfection, and Christian Righteousness.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ أسفار الكتاب المقدس: وحدة العهدين القديم والجديد، الوحي الإلهي، وعصمة النص المقدس، البشائر الإنجيلية الأربع: الخصائص اللاهوتية، الأناجيل الإزائية، ولاهوت البشارة الرابعة للقديس يوحنا، و العظة على الجبل (متى ٥-٧): التطويبات، دستور الكمال الأخلاقي، والبر المسيحي الأسمى.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Structure of the Holy Bible: Unity of the Old and New Testaments and Divine Inspiration\nThe Holy Bible consists of the Old and New Testaments written by holy men inspired by the Holy Spirit over 1,600 years in complete organic unity.\n\nBiblical inspiration (Theopneustos) implies that the Holy Spirit guided the sacred writers while preserving their personal language, culture, and literary expressions.\n\nThe historical reliability of biblical manuscripts is demonstrated by thousands of ancient papyri and codices (such as Codex Sinaiticus, Vaticanus, and Alexandrinus) predating print eras.\n\n#### 2. The Four Holy Gospels: Theological Distinctives, Synoptic Perspectives, and Johannine Christology\nThe four Gospels (Matthew, Mark, Luke, John) present the life, teachings, miracles, crucifixion, and glorious resurrection of Jesus Christ.\n\nMatthew addresses the Jewish mind emphasizing Christ as the Promised King/Messiah; Mark highlights divine power and immediate action; Luke focuses on the Savior of all humanity.\n\nThe Gospel of St. John opens with profound theological contemplation on the eternal Logos incarnate (John 1:1-14), presenting Christ's eternal divinity and personal encounters.\n\n#### 3. The Sermon on the Mount (Matthew 5-7): The Beatitudes, Moral Perfection, and Christian Righteousness\nThe Beatitudes establish inward spiritual purity, humility, meekness, mercifulness, and peacemaking as fundamental prerequisites for citizens of God's kingdom.\n\nChrist elevated ethical righteousness from external formal compliance (Mosaic law) to internal sanctification of motives, forbidding anger, harboring lust, and hypocrisy.\n\nThe radical ethical mandate \"Love your enemies, bless those who curse you\" redefines human moral agency by eradicating retributive cycles through active divine benevolence.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. أسفار الكتاب المقدس: وحدة العهدين القديم والجديد، الوحي الإلهي، وعصمة النص المقدس\nيتكون الكتاب المقدس من العهدين القديم والجديد، دُوّن بروح الوحي الإلهي على مدار ١٦٠٠ عام عبر رجال الله القديسين في وحدة عضوية ورسالة خلاصية متكاملة.\n\nالوحي الإلهي يعني أن الروح القدس قاد الكَتَبَة وصانهم من الخطأ في إيصال الحقائق اللاهوتية والخلاصية مع الحفاظ على خصائصهم اللغوية وثقافتهم الإنسانية.\n\nتتأكد الموثوقية التاريخية للأسفار المقدسة بآلاف المخطوطات القديمة كالمخطوطة السينائية والفاتيكانية والإسكندرية وبرديات نجع حمادي، مثبتة دقة التواتر النصي تاريخياً.\n\n#### ٢. البشائر الإنجيلية الأربع: الخصائص اللاهوتية، الأناجيل الإزائية، ولاهوت البشارة الرابعة للقديس يوحنا\nتقدم الأناجيل الأربعة (متى، مرقس، لوقا، يوحنا) شهادة رسولية متكاملة عن حياة السيد المسيح وتعاليمه ومعجزاته وفدائه وقيامته المجيدة.\n\nخاطب متى الفكر اليهودي مبرزاً المسيح المسيا الملك متمم النبوات، وأبرز مرقس قدرة المسيح الفاعلة، بينما أكد لوقا شمولية الخلاص ومحبة ابن الإنسان للبشرية.\n\n#### ٢. العظة على الجبل (متى ٥-٧): التطويبات، دستور الكمال الأخلاقي، والبر المسيحي الأسمى\nتؤسس التطويبات لنقاء القلب الروحي، والتواضع، والوداعة، والرحمة، وصنع السلام، باعتبارها المعايير الأخلاقية والجوهرية لملائكة ملكوت الله.\n\nارتقى السيد المسيح بالبر من حدود الطاعة الحرفية الشكلية إلى تقديس النوايا القلبية، مجرّماً الغضب الباطل، والشهوة القلبية، والرياء في الصلاة والصدقة.\n\nيعد المبدأ الأخلاقي الجذري \"أحبوا أعداءكم، باركوا لاعنيكم\" تحولاً نوعياً في فلسفة الأخلاق، إذ يكسر دوائر الانتقام بالخير الإلهي الفاعل والغفران غير المشروط.",
        formulas: [
          {
            labelEn: "Structure of the Holy Bible: Unity of the Old and New Testaments and Divine Inspiration",
            labelAr: "أسفار الكتاب المقدس: وحدة العهدين القديم والجديد، الوحي الإلهي، وعصمة النص المقدس",
            latex: "\\text{Core Rule: } Structure of the Holy Bible: U"
          },
          {
            labelEn: "The Four Holy Gospels: Theological Distinctives, Synoptic Perspectives, and Johannine Christology",
            labelAr: "البشائر الإنجيلية الأربع: الخصائص اللاهوتية، الأناجيل الإزائية، ولاهوت البشارة الرابعة للقديس يوحنا",
            latex: "\\text{Applied Maxim: } The Four Holy Gospels: Theolog"
          }
        ],
        moeRef: {
          bookTitleEn: "Christian Religious Education Grade 12",
          bookTitleAr: "التربية الدينية المسيحية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-CHR-CH01-L1",
          pageRange: '5-30'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Structure of the Holy Bible: Unity of the Old and New Testaments and Divine Inspiration",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ أسفار الكتاب المقدس: وحدة العهدين القديم والجديد، الوحي الإلهي، وعصمة النص المقدس",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-CHR-CH01-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Structure of the Holy Bible: Unity of the Old and New Testaments and Divine Inspiration",
            "Apply analytical thinking to The Four Holy Gospels: Theological Distinctives, Synoptic Perspectives, and Johannine Christology",
            "Synthesize ethical resolutions for The Sermon on the Mount (Matthew 5-7): The Beatitudes, Moral Perfection, and Christian Righteousness"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ أسفار الكتاب المقدس: وحدة العهدين القديم والجديد، الوحي الإلهي، وعصمة النص المقدس",
            "تطبيق التفكير التحليلي الناقد في مسألة البشائر الإنجيلية الأربع: الخصائص اللاهوتية، الأناجيل الإزائية، ولاهوت البشارة الرابعة للقديس يوحنا",
            "بناء رؤى أخلاقية متكاملة لـ العظة على الجبل (متى ٥-٧): التطويبات، دستور الكمال الأخلاقي، والبر المسيحي الأسمى"
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
            questionEn: "What is the accredited curriculum determination regarding Structure of the Holy Bible: Unity of the Old and New Testaments and Divine Inspiration?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (أسفار الكتاب المقدس: وحدة العهدين القديم والجديد، الوحي الإلهي، وعصمة النص المقدس)؟",
            solutionEn: "The Holy Bible consists of the Old and New Testaments written by holy men inspired by the Holy Spirit over 1,600 years in complete organic unity.",
            solutionAr: "يتكون الكتاب المقدس من العهدين القديم والجديد، دُوّن بروح الوحي الإلهي على مدار ١٦٠٠ عام عبر رجال الله القديسين في وحدة عضوية ورسالة خلاصية متكاملة."
          }
        },
        worksheet: {
          id: 'th_chr_ch1_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Structure of the Holy Bible: Unity of the Old and New Testaments and Divine Inspiration",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ أسفار الكتاب المقدس: وحدة العهدين القديم والجديد، الوحي الإلهي، وعصمة النص المقدس",
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
        id: 'th_chr_ch1_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Parables of the Kingdom: The Prodigal Son, The Good Samaritan, and Grace of Repentance",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ أمثال ملكوت الله: الابن الضال، السامري الصالح، وقوة النعمة وقبول التوبة الصادقة",
        summaryEn: "Comprehensive conceptual and applied mastery of Parables of the Kingdom: The Prodigal Son, The Good Samaritan, and Grace of Repentance, Epistles of St. Paul and the General Epistles: Faith, Works, Grace, and Communal Life, and The Book of Revelation (Apocalypse): Eschatological Hope, Endurance, and New Creation.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ أمثال ملكوت الله: الابن الضال، السامري الصالح، وقوة النعمة وقبول التوبة الصادقة، رسائل بولس الرسول والرسائل الجامعة: الإيمان العامل بالمحبة، النعمة، والأعمال الصالحة، و سفر الرؤيا: الرجاء الأخروي، الصمود في وجه الاضطهاد، وتجديد الخليقة الأبدي.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Parables of the Kingdom: The Prodigal Son, The Good Samaritan, and Grace of Repentance\nThe Parable of the Prodigal Son reveals the unconditional fatherly love and joy of God upon receiving every returning and repentant sinner.\n\nThe Parable of the Good Samaritan demonstrates that true neighborly love transcends ethnic, national, and religious boundaries through practical compassionate care.\n\nThe older brother in the parable of the Prodigal Son epitomizes the spiritual pathology of self-righteous legalism, incapable of sharing in divine redemptive rejoicings.\n\n#### 2. Epistles of St. Paul and the General Epistles: Faith, Works, Grace, and Communal Life\nSt. Paul taught that salvation is a gift of divine grace received through living faith working actively through sacrificial love and good deeds.\n\nSt. James harmonizes theological doctrine by affirming that faith without righteous and merciful deeds is dead and ineffective in the sight of God.\n\nPauline theology of the Body of Christ (1 Corinthians 12) articulates an organic ecclesiology where diverse members possess distinct gifts functioning in unified harmony.\n\n#### 3. The Book of Revelation (Apocalypse): Eschatological Hope, Endurance, and New Creation\nThe Book of Revelation offers divine encouragement and spiritual victory for believers enduring earthly trials and persecution.\n\nApocalyptic symbols like the Lamb standing as slain depict sacrificial redemptive power triumphing over tyrannical worldly empires through patience and faithfulness.\n\nThe vision of the New Jerusalem (Revelation 21-22) completes the cosmic biblical narrative: God dwelling eternally among transformed humanity where sorrow and death are wiped away.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. أمثال ملكوت الله: الابن الضال، السامري الصالح، وقوة النعمة وقبول التوبة الصادقة\nيكشف مثل الابن الضال عن المحبة الأبوية الإلهية الفائقة وفرح السماء بقبول كل نفس خاطئة تائهة ترجع بنقاء وانسحاق قلب وتوبة حقيقية.\n\nيبرهن مثل السامري الصالح على أن المحبة الإنسانية الحقيقية تتجاوز الحدود القومية والعرقية والدينية عبر تقديم العون العملي والإحسان الملموس للمتألمين.\n\nيجسد الابن الأكبر في المثل علّة التدين الشكلي والبر الذاتي القاسي، الذي يحجب الإنسان عن التناغم مع محبة الله ورحمته الشاملة نحو الخطاة التائبين.\n\n#### ٢. رسائل بولس الرسول والرسائل الجامعة: الإيمان العامل بالمحبة، النعمة، والأعمال الصالحة\nأكد القديس بولس الرسول أن الخلاص هبة مجانية من نعمة الله تُنال بالإيمان الحي الفاعل بالمحبة والتضحية والأعمال الصالحة المنتجة.\n\nأوضح القديس يعقوب التوازن اللاهوتي الضروري بتأكيده الحاسم أن \"الإيمان بدون أعمال ميت في ذاته\"، فالأعمال ثمرة حتمية للإيمان الصادق.\n\n#### ٢. سفر الرؤيا: الرجاء الأخروي، الصمود في وجه الاضطهاد، وتجديد الخليقة الأبدي\nيقدم سفر الرؤيا بشارة عزاء ورجاء إلهي عظيم للمؤمنين بالصمود الروحي والنصرة الإلهية الحتمية للحق على كل قوى الظلم والاضطهاد.\n\nترمز الرؤى النبوية كـ \"الحَمَل القائم كأنه مذبوح\" إلى قوة الفداء والغلبة الأخلاقية والروحية على قوى الشر بصبر الإيمان والأمانة حتى الاستشهاد.\n\nتكتمل الرواية الخلاصية برؤيا أورشليم السمائية حيث يسكن الله في وسط شعبه ممسحاً كل دمعة من عيونهم ومبدداً الموت والحزن في حياة أبدية مجيدة.",
        formulas: [
          {
            labelEn: "Parables of the Kingdom: The Prodigal Son, The Good Samaritan, and Grace of Repentance",
            labelAr: "أمثال ملكوت الله: الابن الضال، السامري الصالح، وقوة النعمة وقبول التوبة الصادقة",
            latex: "\\text{Core Rule: } Parables of the Kingdom: The P"
          },
          {
            labelEn: "Epistles of St. Paul and the General Epistles: Faith, Works, Grace, and Communal Life",
            labelAr: "رسائل بولس الرسول والرسائل الجامعة: الإيمان العامل بالمحبة، النعمة، والأعمال الصالحة",
            latex: "\\text{Applied Maxim: } Epistles of St. Paul and the G"
          }
        ],
        moeRef: {
          bookTitleEn: "Christian Religious Education Grade 12",
          bookTitleAr: "التربية الدينية المسيحية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-CHR-CH01-L2",
          pageRange: '20-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Parables of the Kingdom: The Prodigal Son, The Good Samaritan, and Grace of Repentance",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ أمثال ملكوت الله: الابن الضال، السامري الصالح، وقوة النعمة وقبول التوبة الصادقة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-CHR-CH01-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Parables of the Kingdom: The Prodigal Son, The Good Samaritan, and Grace of Repentance",
            "Apply analytical thinking to Epistles of St. Paul and the General Epistles: Faith, Works, Grace, and Communal Life",
            "Synthesize ethical resolutions for The Book of Revelation (Apocalypse): Eschatological Hope, Endurance, and New Creation"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ أمثال ملكوت الله: الابن الضال، السامري الصالح، وقوة النعمة وقبول التوبة الصادقة",
            "تطبيق التفكير التحليلي الناقد في مسألة رسائل بولس الرسول والرسائل الجامعة: الإيمان العامل بالمحبة، النعمة، والأعمال الصالحة",
            "بناء رؤى أخلاقية متكاملة لـ سفر الرؤيا: الرجاء الأخروي، الصمود في وجه الاضطهاد، وتجديد الخليقة الأبدي"
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
            questionEn: "What is the accredited curriculum determination regarding Parables of the Kingdom: The Prodigal Son, The Good Samaritan, and Grace of Repentance?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (أمثال ملكوت الله: الابن الضال، السامري الصالح، وقوة النعمة وقبول التوبة الصادقة)؟",
            solutionEn: "The Parable of the Prodigal Son reveals the unconditional fatherly love and joy of God upon receiving every returning and repentant sinner.",
            solutionAr: "يكشف مثل الابن الضال عن المحبة الأبوية الإلهية الفائقة وفرح السماء بقبول كل نفس خاطئة تائهة ترجع بنقاء وانسحاق قلب وتوبة حقيقية."
          }
        },
        worksheet: {
          id: 'th_chr_ch1_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Parables of the Kingdom: The Prodigal Son, The Good Samaritan, and Grace of Repentance",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ أمثال ملكوت الله: الابن الضال، السامري الصالح، وقوة النعمة وقبول التوبة الصادقة",
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
    databank: christianCh1Databank,
    solvedExamples: christianCh1SolvedExamples,
    exerciseProblems: christianCh1Exercises
  },
  {
    id: 'th_chr_ch2',
    chapterNumber: 2,
    titleEn: "Chapter 2: Christian Creed and Dogmatics: The Holy Trinity, Incarnation, Redemption, and Resurrection",
    titleAr: "الفصل الثاني: العقيدة واللاهوت المسيحي: الثالوث الأقدس، التجسد الإلهي، الفداء والصلب، والقيامة المجيدة",
    descriptionEn: "Tenets of the Christian faith: The Holy Trinity (One Essence in Three Hypostases), Incarnation, the Nicene Creed, sacrificial atonement on the Cross, and historic resurrection.",
    descriptionAr: "أركان العقيدة المسيحية: وحدانية الله الجامعة في الثالوث الأقدس، سر التجسد الإلهي، قانون الإيمان النيقاوي القسطنطيني، كفارة الصليب والفداء الشامل، وحقيقة القيامة ورجاء الخلود.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_chr_ch2_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of The Monotheistic Doctrine of the Holy Trinity: One Divine Essence in Three Hypostases",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ وحدانية الله في الثالوث الأقدس: الإيمان بإله واحد جوهر واحد في ثلاثة أقانيم متساوية",
        summaryEn: "Comprehensive conceptual and applied mastery of The Monotheistic Doctrine of the Holy Trinity: One Divine Essence in Three Hypostases, The Mystery of the Holy Incarnation: Fully Divine and Fully Human in One United Nature, and The Nicene-Constantinopolitan Creed (325 and 381 AD): Historical Defense of Orthodox Faith.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ وحدانية الله في الثالوث الأقدس: الإيمان بإله واحد جوهر واحد في ثلاثة أقانيم متساوية، سر التجسد الإلهي: الطبيعة الواحدة المتجسدة لله الكلمة (كمال اللاهوت وكمال الناسوت)، و قانون الإيمان النيقاوي القسطنطيني (٣٢٥ و٣٨١م): الإجماع المسكوني وصياغة العقيدة القويمة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. The Monotheistic Doctrine of the Holy Trinity: One Divine Essence in Three Hypostases\nChristianity affirms uncompromising monotheism: God is One Divine Essence (Ousia) existing in Three Eternal Hypostases (Father, Son, Holy Spirit).\n\nThe three Hypostases are distinguished by hypostatic properties: the Father is unbegotten, the Son is eternally begotten, and the Holy Spirit proceeds from the Father.\n\nDivine Trinity demonstrates that God is intrinsically Love (1 John 4:8) prior to creation—eternal relational love and communion within the Godhead.\n\n#### 2. The Mystery of the Holy Incarnation: Fully Divine and Fully Human in One United Nature\nIn the Incarnation, the eternal Son took complete human nature (body and rational soul) from the Virgin Mary through the Holy Spirit without sin.\n\nChrist is one united divine-human nature (Mia Physis) from two natures without mingling (ikhtilat), confusion (imtizaj), or alteration (istihala).\n\nSt. Athanasius formulated the core theological purpose: \"He became man that we might become divine (by grace),\" restoring corruptible humanity to immortality.\n\n#### 3. The Nicene-Constantinopolitan Creed (325 and 381 AD): Historical Defense of Orthodox Faith\nThe Nicene Creed was formulated by universal church councils to confess faith in the Trinity, Incarnation, Church, Baptism, and Resurrection.\n\nThe term \"Homoousios\" (consubstantial / of one essence with the Father) defeated the Arian heresy by defending the full and eternal deity of Christ.\n\nThe council of Constantinople completed the creed by affirming the deity of the Holy Spirit as \"the Lord, the Giver of Life, who proceeds from the Father and is worshiped and glorified.\"",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. وحدانية الله في الثالوث الأقدس: الإيمان بإله واحد جوهر واحد في ثلاثة أقانيم متساوية\nتؤمن المسيحية بالوحدانية المطلقة لله: إله واحد مثلث الأقانيم (الآب والابن والروح القدس)، جوهر إلهي واحد أزلي متساوٍ في المجد والقدرة واللاهوت.\n\nتتمايز الأقانيم بالخواص الأقنومية الأزلية دون انفصال: الآب هو الأصل والينبوع، الابن مولود أزلياً من الآب، والروح القدس منبثق أزلياً من الآب.\n\nتؤكد عقيدة الثالوث أن الله في ذاته محبة أزلية مطلقة (١ يوحنا ٤: ٨)، فالمحبة كينونة إلهية أزلية متبادلة بين الأقانيم قبل خلقة العالم والكون.\n\n#### ٢. سر التجسد الإلهي: الطبيعة الواحدة المتجسدة لله الكلمة (كمال اللاهوت وكمال الناسوت)\nفي سر التجسد العظيم، اتخذ ابن الله الكلمة الأزلي طبيعة بشرية كاملة (جسداً ونفساً عاقلة) من القديسة مريم العذراء بحلول الروح القدس بلا خطية.\n\nالمسيح هو طبيعة واحدة متجسدة لله الكلمة من طبيعتين متمايزتين باتحاد حقيقي كامل بغير اختلاط ولا امتزاج ولا تغيير ولا انفصال لحظة واحدة.\n\n#### ٢. قانون الإيمان النيقاوي القسطنطيني (٣٢٥ و٣٨١م): الإجماع المسكوني وصياغة العقيدة القويمة\nصيغ قانون الإيمان في المجمعين المسكونيين بنيقية (٣٢٥م) والقسطنطينية (٣٨١م) كدستور إيماني جامع يعلن الإيمان بالثالوث والتجسد والمعمودية والقيامة.\n\nأكد مصطلح \"هومواوسيوس\" (مساوٍ للآب في الجوهر) الألوهية الكاملة والأزلية للسيد المسيح، داحضاً بدعة أريوس ومؤكداً استحقاق المسيح للعبادة الإلهية.\n\nاستكمل مجمع القسطنطينية قانون الإيمان بتأكيد لاهوت الروح القدس \"الرب المحيي المنبثق من الآب، الذي هو مع الآب والابن مسجود له وممجد\".",
        formulas: [
          {
            labelEn: "The Monotheistic Doctrine of the Holy Trinity: One Divine Essence in Three Hypostases",
            labelAr: "وحدانية الله في الثالوث الأقدس: الإيمان بإله واحد جوهر واحد في ثلاثة أقانيم متساوية",
            latex: "\\text{Core Rule: } The Monotheistic Doctrine of t"
          },
          {
            labelEn: "The Mystery of the Holy Incarnation: Fully Divine and Fully Human in One United Nature",
            labelAr: "سر التجسد الإلهي: الطبيعة الواحدة المتجسدة لله الكلمة (كمال اللاهوت وكمال الناسوت)",
            latex: "\\text{Applied Maxim: } The Mystery of the Holy Incarn"
          }
        ],
        moeRef: {
          bookTitleEn: "Christian Religious Education Grade 12",
          bookTitleAr: "التربية الدينية المسيحية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-CHR-CH02-L1",
          pageRange: '40-65'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of The Monotheistic Doctrine of the Holy Trinity: One Divine Essence in Three Hypostases",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ وحدانية الله في الثالوث الأقدس: الإيمان بإله واحد جوهر واحد في ثلاثة أقانيم متساوية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-CHR-CH02-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of The Monotheistic Doctrine of the Holy Trinity: One Divine Essence in Three Hypostases",
            "Apply analytical thinking to The Mystery of the Holy Incarnation: Fully Divine and Fully Human in One United Nature",
            "Synthesize ethical resolutions for The Nicene-Constantinopolitan Creed (325 and 381 AD): Historical Defense of Orthodox Faith"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ وحدانية الله في الثالوث الأقدس: الإيمان بإله واحد جوهر واحد في ثلاثة أقانيم متساوية",
            "تطبيق التفكير التحليلي الناقد في مسألة سر التجسد الإلهي: الطبيعة الواحدة المتجسدة لله الكلمة (كمال اللاهوت وكمال الناسوت)",
            "بناء رؤى أخلاقية متكاملة لـ قانون الإيمان النيقاوي القسطنطيني (٣٢٥ و٣٨١م): الإجماع المسكوني وصياغة العقيدة القويمة"
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
            questionEn: "What is the accredited curriculum determination regarding The Monotheistic Doctrine of the Holy Trinity: One Divine Essence in Three Hypostases?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (وحدانية الله في الثالوث الأقدس: الإيمان بإله واحد جوهر واحد في ثلاثة أقانيم متساوية)؟",
            solutionEn: "Christianity affirms uncompromising monotheism: God is One Divine Essence (Ousia) existing in Three Eternal Hypostases (Father, Son, Holy Spirit).",
            solutionAr: "تؤمن المسيحية بالوحدانية المطلقة لله: إله واحد مثلث الأقانيم (الآب والابن والروح القدس)، جوهر إلهي واحد أزلي متساوٍ في المجد والقدرة واللاهوت."
          }
        },
        worksheet: {
          id: 'th_chr_ch2_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of The Monotheistic Doctrine of the Holy Trinity: One Divine Essence in Three Hypostases",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ وحدانية الله في الثالوث الأقدس: الإيمان بإله واحد جوهر واحد في ثلاثة أقانيم متساوية",
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
        id: 'th_chr_ch2_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of The Mystery of Divine Redemption and the Cross: Atonement, Reconciliation, and Cosmic Victory",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ سر الفداء الإلهي وكفارة الصليب: المصالحة، التبرير، والنصرة الكونية على الموت والخطية",
        summaryEn: "Comprehensive conceptual and applied mastery of The Mystery of Divine Redemption and the Cross: Atonement, Reconciliation, and Cosmic Victory, The Glorious Resurrection of Jesus Christ: The Foundation of Christian Hope and Historical Reality, and Christian Eschatology: The Second Coming, General Resurrection, and the Kingdom of Heaven.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ سر الفداء الإلهي وكفارة الصليب: المصالحة، التبرير، والنصرة الكونية على الموت والخطية، القيامة المجيدة للسيد المسيح: ركيزة الإيمان المسيحي، إبادة الموت، وضمان القيامة العامة، و الإيمان بالأبديات: المجيء الثاني، القيامة العامة للأجساد، الحساب العادل، والحياة الدائمة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. The Mystery of Divine Redemption and the Cross: Atonement, Reconciliation, and Cosmic Victory\nChrist offered Himself voluntarily on the Cross as a pure, infinite sacrifice to forgive human sins and reconcile humanity with God.\n\nThe Cross manifested the harmony of infinite divine Justice and infinite divine Mercy, fulfilling the demands of righteousness while liberating the transgressor.\n\nChrist's crucifixion was not a tragic defeat but a cosmic triumph, disarming principalities of evil (Colossians 2:15) and breaking the curse of eternal alienation.\n\n#### 2. The Glorious Resurrection of Jesus Christ: The Foundation of Christian Hope and Historical Reality\nOn the third day, Jesus Christ rose bodily from the dead with power, conquering death and opening eternal life to all who believe in Him.\n\nThe historic truth of the Resurrection is validated by the empty tomb, transformation of frightened disciples into fearless apostles, and hundreds of eyewitnesses.\n\nSt. Paul proclaimed: \"If Christ has not been raised, your faith is futile; you are still in your sins\" (1 Cor 15:17), establishing Resurrection as the cornerstone of redemption.\n\n#### 3. Christian Eschatology: The Second Coming, General Resurrection, and the Kingdom of Heaven\nChristians await the glorious Second Coming (Parousia) of Christ to judge the living and the dead and establish His everlasting kingdom of righteousness.\n\nAt the end of days, all humanity shall experience a bodily resurrection: righteous souls united with incorruptible spiritual bodies for eternal joy.\n\nChristian eschatology does not preach passive world-abandonment but inspires active ethical stewardship, transforming society in anticipation of the renewal of all creation.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. سر الفداء الإلهي وكفارة الصليب: المصالحة، التبرير، والنصرة الكونية على الموت والخطية\nبذل السيد المسيح ذاته طوعاً على الصليب ذبيحة كفارية غير محدودة للتكفير عن خطايا البشرية وتحقيق المصالحة الإلهية والسلام مع الله.\n\nأظهر الصليب التناغم الفائق بين العدل الإلهي والرحمة الإلهية، حيث حُمل حكم الموت عِوضاً عن الإنسان ليوهب الحياة والحرية والبر بالنعمة.\n\nلم يكن الصليب هزيمة بل كان عرش النصرة الكونية، حيث جرد قوى الظلمة وسحق شوكة إبليس وحطم قيود العبودية والعداوة الروحية القديمة.\n\n#### ٢. القيامة المجيدة للسيد المسيح: ركيزة الإيمان المسيحي، إبادة الموت، وضمان القيامة العامة\nقام السيد المسيح في اليوم الثالث منتصراً بجسد ممجد، حاطماً شوكة الموت، ومؤسساً فجر الرجاء الحي والحياة الأبدية لكل المؤمنين به.\n\nتتأكد حقيقة القيامة التاريخية بالقبر الفارغ، وتغير الرسل الجذري من الخوف إلى بذل حياتهم بشجاعة، وظهورات المسيح لمئات الشهود العيان الموثقين.\n\n#### ٢. الإيمان بالأبديات: المجيء الثاني، القيامة العامة للأجساد، الحساب العادل، والحياة الدائمة\nينتظر المؤمنون المجيء الثاني المجيد للسيد المسيح ليدين الأحياء والأموات بعدل، ويُعلن ملكوته الأبدي الكامل حيث يسود البر والسلام والنور.\n\nتشهد نهاية الدهور القيامة العامة لجميع الأجساد متحدة بأرواحها، فتلبس الأجساد عدم فساد ونورانية لميراث الملكوت السماوي والنعيم الأبدي.\n\nلا تدعو الإسخاتولوجيا المسيحية إلى الهروب السلبي من الواقع، بل تحفز على البناء والعمل الصالح وإصلاح المجتمع انتظاراً لتجديد الخليقة الشامل.",
        formulas: [
          {
            labelEn: "The Mystery of Divine Redemption and the Cross: Atonement, Reconciliation, and Cosmic Victory",
            labelAr: "سر الفداء الإلهي وكفارة الصليب: المصالحة، التبرير، والنصرة الكونية على الموت والخطية",
            latex: "\\text{Core Rule: } The Mystery of Divine Redempti"
          },
          {
            labelEn: "The Glorious Resurrection of Jesus Christ: The Foundation of Christian Hope and Historical Reality",
            labelAr: "القيامة المجيدة للسيد المسيح: ركيزة الإيمان المسيحي، إبادة الموت، وضمان القيامة العامة",
            latex: "\\text{Applied Maxim: } The Glorious Resurrection of J"
          }
        ],
        moeRef: {
          bookTitleEn: "Christian Religious Education Grade 12",
          bookTitleAr: "التربية الدينية المسيحية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-CHR-CH02-L2",
          pageRange: '55-80'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of The Mystery of Divine Redemption and the Cross: Atonement, Reconciliation, and Cosmic Victory",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ سر الفداء الإلهي وكفارة الصليب: المصالحة، التبرير، والنصرة الكونية على الموت والخطية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-CHR-CH02-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of The Mystery of Divine Redemption and the Cross: Atonement, Reconciliation, and Cosmic Victory",
            "Apply analytical thinking to The Glorious Resurrection of Jesus Christ: The Foundation of Christian Hope and Historical Reality",
            "Synthesize ethical resolutions for Christian Eschatology: The Second Coming, General Resurrection, and the Kingdom of Heaven"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ سر الفداء الإلهي وكفارة الصليب: المصالحة، التبرير، والنصرة الكونية على الموت والخطية",
            "تطبيق التفكير التحليلي الناقد في مسألة القيامة المجيدة للسيد المسيح: ركيزة الإيمان المسيحي، إبادة الموت، وضمان القيامة العامة",
            "بناء رؤى أخلاقية متكاملة لـ الإيمان بالأبديات: المجيء الثاني، القيامة العامة للأجساد، الحساب العادل، والحياة الدائمة"
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
            questionEn: "What is the accredited curriculum determination regarding The Mystery of Divine Redemption and the Cross: Atonement, Reconciliation, and Cosmic Victory?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (سر الفداء الإلهي وكفارة الصليب: المصالحة، التبرير، والنصرة الكونية على الموت والخطية)؟",
            solutionEn: "Christ offered Himself voluntarily on the Cross as a pure, infinite sacrifice to forgive human sins and reconcile humanity with God.",
            solutionAr: "بذل السيد المسيح ذاته طوعاً على الصليب ذبيحة كفارية غير محدودة للتكفير عن خطايا البشرية وتحقيق المصالحة الإلهية والسلام مع الله."
          }
        },
        worksheet: {
          id: 'th_chr_ch2_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of The Mystery of Divine Redemption and the Cross: Atonement, Reconciliation, and Cosmic Victory",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ سر الفداء الإلهي وكفارة الصليب: المصالحة، التبرير، والنصرة الكونية على الموت والخطية",
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
    databank: christianCh2Databank,
    solvedExamples: christianCh2SolvedExamples,
    exerciseProblems: christianCh2Exercises
  },
  {
    id: 'th_chr_ch3',
    chapterNumber: 3,
    titleEn: "Chapter 3: The Seven Holy Sacraments of the Church (Al-Asrar al-Kanasiyyah)",
    titleAr: "الفصل الثالث: الأسرار الكنسية السبعة: مفاهيمها اللاهوتية، فاعليتها الروحية، وممارساتها الإيمانية",
    descriptionEn: "Theology of sacraments, Christian initiation (Baptism, Myron), the Holy Eucharist, Repentance and Confession, Priesthood, Holy Matrimony, and Unction of the Sick.",
    descriptionAr: "اللاهوت الأسراري للكنيسة: نعمة الأسرار غير المنظورة، أسرار التأسيس (المعمودية والميرون)، سر الإفخارستيا والتناول، سر التوبة والاعتراف، الكهنوت، الزيجة، ومسحة المرضى.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_chr_ch3_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Theology of Church Sacraments: Visible Signs Conveying Invisible Divine Grace",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ مفهوم اللاهوت الأسراري: العلامات المنظورة المانحة للنعمة الإلهية غير المنظورة",
        summaryEn: "Comprehensive conceptual and applied mastery of Theology of Church Sacraments: Visible Signs Conveying Invisible Divine Grace, Sacraments of Christian Initiation: Holy Baptism (Second Birth) and Holy Myron (Chrismation), and The Sacrament of the Holy Eucharist (Holy Communion): The Real Presence and Communal Unity.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ مفهوم اللاهوت الأسراري: العلامات المنظورة المانحة للنعمة الإلهية غير المنظورة، أسرار التأسيس المسيحي: سر المعمودية المقدس (الولادة الجديدة) وسر الميرون (ختم الروح القدس)، و سر الإفخارستيا (التناول المقدس): الحضور الإلهي الحقيقي، التغذية الروحية، ووحدة الكنيسة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Theology of Church Sacraments: Visible Signs Conveying Invisible Divine Grace\nA sacrament is a holy act instituted by Jesus Christ through which believers receive invisible grace via visible material elements administered by ordained priests.\n\nThe seven sacraments comprise: Baptism, Myron (Chrismation), Eucharist, Repentance/Confession, Priesthood, Matrimony, and Unction of the Sick.\n\nSacraments are classified into Redemptive non-repeatable sacraments (Baptism, Myron, Priesthood) and repeatable life-sustaining sacraments (Eucharist, Confession, Unction).\n\n#### 2. Sacraments of Christian Initiation: Holy Baptism (Second Birth) and Holy Myron (Chrismation)\nBaptism is the door of faith wherein the believer is immersed thrice in consecrated water in the name of the Trinity, dying and rising with Christ.\n\nHoly Myron (Chrismation) immediately follows baptism, anointing 36 parts of the body with holy oil to consecrate the believer as a temple of the Holy Spirit.\n\nBaptism completely washes original guilt and personal sins, restoring the divine image and grafting the newly born Christian into the organic mystical Body of Christ.\n\n#### 3. The Sacrament of the Holy Eucharist (Holy Communion): The Real Presence and Communal Unity\nThe Holy Eucharist is the sacrament instituted by Christ at the Last Supper wherein bread and wine become His true, life-giving Body and Blood.\n\nPartaking of the Holy Communion grants remission of sins, spiritual vitality, eternal life, and deep mystical fellowship with Christ and fellow believers.\n\nThe Eucharist is not a re-sacrificing of Christ, but the perpetual, non-bloody presence of the one historical, all-sufficient sacrifice of Golgotha.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. مفهوم اللاهوت الأسراري: العلامات المنظورة المانحة للنعمة الإلهية غير المنظورة\nالسر الكنسي هو عمل مقدس أسسه السيد المسيح، ينال فيه المؤمن نعمة إلهية غير منظورة تحت وسائط وعلامات مادية منظورة بمباشرة كاهن شرعي.\n\nأسرار الكنيسة السبعة هي: المعمودية، الميرون، الإفخارستيا، التوبة والاعتراف، الكهنوت، الزيجة، ومسحة المرضى، وتلبي احتياجات الإنسان الروحية والجسدية.\n\nتُقسم الأسرار إلى أسرار خلاصية غير قابلة للتكرار تترك وسماً روحياً أبدياً (المعمودية، الميرون، الكهنوت)، وأسرار قابلة للتكرار لبناء الحياة اليومية والتجدد.\n\n#### ٢. أسرار التأسيس المسيحي: سر المعمودية المقدس (الولادة الجديدة) وسر الميرون (ختم الروح القدس)\nالمعمودية هي باب الأسرار والولادة الروحية الثانية بالتغطيس الثلاثي في الماء المدشن باسم الثالوث الأقدس، لموت الإنسان العتيق والقيامة مع المسيح.\n\nيمنح سر الميرون المقدس مباشرة بعد المعمودية بالمسح بزيت الميرون على ٣٦ موضعاً في الجسد، لتقديس الحواس وتدشين الإنسان هيكلاً حياً لسكنى الروح القدس.\n\n#### ٢. سر الإفخارستيا (التناول المقدس): الحضور الإلهي الحقيقي، التغذية الروحية، ووحدة الكنيسة\nسر الإفخارستيا هو سر الأسرار وتاج العبادة الذي أسسه الرب في العشاء الأخير، حيث يستحيل الخبز والخمر بالروح القدس إلى جسد ودم المسيح الأقدسين.\n\nيهب التناول المقدس من الأسرار مغفرة الخطايا، والثبات في المسيح، والنمو الروحي، والاتحاد الحقيقي بين أعضاء الكنيسة في جسد واحد.\n\nليست الإفخارستيا تكراراً لذبيحة الصليب، بل هي امتداد حي غير دموي وحضور دائم لنفس ذبيحة الجلجثة الكفارية الواحدة الجامعة الكافية لكل الأجيال.",
        formulas: [
          {
            labelEn: "Theology of Church Sacraments: Visible Signs Conveying Invisible Divine Grace",
            labelAr: "مفهوم اللاهوت الأسراري: العلامات المنظورة المانحة للنعمة الإلهية غير المنظورة",
            latex: "\\text{Core Rule: } Theology of Church Sacraments:"
          },
          {
            labelEn: "Sacraments of Christian Initiation: Holy Baptism (Second Birth) and Holy Myron (Chrismation)",
            labelAr: "أسرار التأسيس المسيحي: سر المعمودية المقدس (الولادة الجديدة) وسر الميرون (ختم الروح القدس)",
            latex: "\\text{Applied Maxim: } Sacraments of Christian Initia"
          }
        ],
        moeRef: {
          bookTitleEn: "Christian Religious Education Grade 12",
          bookTitleAr: "التربية الدينية المسيحية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-CHR-CH03-L1",
          pageRange: '75-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Theology of Church Sacraments: Visible Signs Conveying Invisible Divine Grace",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ مفهوم اللاهوت الأسراري: العلامات المنظورة المانحة للنعمة الإلهية غير المنظورة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-CHR-CH03-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Theology of Church Sacraments: Visible Signs Conveying Invisible Divine Grace",
            "Apply analytical thinking to Sacraments of Christian Initiation: Holy Baptism (Second Birth) and Holy Myron (Chrismation)",
            "Synthesize ethical resolutions for The Sacrament of the Holy Eucharist (Holy Communion): The Real Presence and Communal Unity"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ مفهوم اللاهوت الأسراري: العلامات المنظورة المانحة للنعمة الإلهية غير المنظورة",
            "تطبيق التفكير التحليلي الناقد في مسألة أسرار التأسيس المسيحي: سر المعمودية المقدس (الولادة الجديدة) وسر الميرون (ختم الروح القدس)",
            "بناء رؤى أخلاقية متكاملة لـ سر الإفخارستيا (التناول المقدس): الحضور الإلهي الحقيقي، التغذية الروحية، ووحدة الكنيسة"
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
            questionEn: "What is the accredited curriculum determination regarding Theology of Church Sacraments: Visible Signs Conveying Invisible Divine Grace?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (مفهوم اللاهوت الأسراري: العلامات المنظورة المانحة للنعمة الإلهية غير المنظورة)؟",
            solutionEn: "A sacrament is a holy act instituted by Jesus Christ through which believers receive invisible grace via visible material elements administered by ordained priests.",
            solutionAr: "السر الكنسي هو عمل مقدس أسسه السيد المسيح، ينال فيه المؤمن نعمة إلهية غير منظورة تحت وسائط وعلامات مادية منظورة بمباشرة كاهن شرعي."
          }
        },
        worksheet: {
          id: 'th_chr_ch3_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Theology of Church Sacraments: Visible Signs Conveying Invisible Divine Grace",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ مفهوم اللاهوت الأسراري: العلامات المنظورة المانحة للنعمة الإلهية غير المنظورة",
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
        id: 'th_chr_ch3_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of The Sacrament of Repentance and Confession: Metanoia, Absolution, and Spiritual Counseling",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ سر التوبة والاعتراف: الميتانويا (التحول القلبي)، الإقرار بالخطايا، وحل الغفران والإرشاد",
        summaryEn: "Comprehensive conceptual and applied mastery of The Sacrament of Repentance and Confession: Metanoia, Absolution, and Spiritual Counseling, The Sacrament of Priesthood (Holy Orders): Apostolic Succession, Shepherding, and Sacramental Grace, and Sacraments of Family and Healing: Holy Matrimony (Christian Marriage) and Unction of the Sick.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ سر التوبة والاعتراف: الميتانويا (التحول القلبي)، الإقرار بالخطايا، وحل الغفران والإرشاد، سر الكهنوت المقدس: الخلافة الرسولية، الرعاية الأبوية، وحراسة الإيمان والتعليم، و أسرار الأسرة والشفاء: سر الزيجة المقدس (قدسية الرابطة الزوجية) وسر مسحة المرضى.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. The Sacrament of Repentance and Confession: Metanoia, Absolution, and Spiritual Counseling\nRepentance and Confession is the ongoing medicine of the soul wherein the believer examines conscience, repents, and confesses before the priest to receive God's absolution.\n\nTrue repentance requires inner remorse, cessation of evil habits, restitution for harms done, and firm commitment to live a holy, righteous life.\n\nThe priest does not forgive sins by personal authority, but serves as a sacramental minister and spiritual father exercising the apostolic authority of loosening and binding (John 20:23).\n\n#### 2. The Sacrament of Priesthood (Holy Orders): Apostolic Succession, Shepherding, and Sacramental Grace\nPriesthood is the sacrament by which the bishop lays hands on candidates to bestow the grace of the Holy Spirit for pastoral, liturgical, and teaching ministries.\n\nThe orders of priesthood encompass three fundamental ranks established in the New Testament: Deacons (servants), Priests (presbyters/pastors), and Bishops (overseers/episcopoi).\n\nApostolic Succession maintains an unbroken historical and sacramental lineage connecting contemporary church leadership directly to the twelve Apostles of Christ.\n\n#### 3. Sacraments of Family and Healing: Holy Matrimony (Christian Marriage) and Unction of the Sick\nHoly Matrimony unites a Christian man and woman in holy, indissoluble spiritual union; Unction of the Sick provides prayers and sacred anointing for physical and spiritual healing.\n\nChristian marriage reflects Christ's sacrificial love for the Church (Ephesians 5), founded on mutual submission, lifelong fidelity, and raising children in godliness.\n\nUnction of the Sick (Sacrament of the Lamp) fulfills the apostolic mandate of St. James (James 5:14), offering bodily comfort alongside the remission of unconfessed frailties.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. سر التوبة والاعتراف: الميتانويا (التحول القلبي)، الإقرار بالخطايا، وحل الغفران والإرشاد\nسر التوبة والاعتراف هو بلسم النفس والتجديد المستمر، حيث يفحص المؤمن ضميره ويندم بصدق ويقر بخطاياه أمام الكاهن لنيل الغفران الإلهي.\n\nتتطلب التوبة الحقيقية محاسبة النفس، والندم القلبي، والعزم الأكيد على ترك الخطية، ورد الحقوق لأصحابها، والسعي المستمر نحو القداسة والبر.\n\nلا يمنح الكاهن الغفران بسلطان شخصي، بل هو وكيل لأسرار الله وأب روحي يمارس سلطان الحل والربط المسلم للرسل من فم السيد المسيح (يوحنا ٢٠: ٢٣).\n\n#### ٢. سر الكهنوت المقدس: الخلافة الرسولية، الرعاية الأبوية، وحراسة الإيمان والتعليم\nالكهنوت سر مقدس ينال فيه المختارون بوضع يد الأسقف نفخة الروح القدس لممارسة الخدمة الرعوية، وإقامة الأسرار، وتعليم كلمة الحق باستقامة.\n\nتنتظم الرتب الكهنوتية في ثلاث درجات كتابية متدرجة: الشمامسة (خدمة ومساعدة)، القسوس (الرعاية وإقامة الأسرار)، والأساقفة (الرئاسة والتدبير والرسامة).\n\n#### ٢. أسرار الأسرة والشفاء: سر الزيجة المقدس (قدسية الرابطة الزوجية) وسر مسحة المرضى\nيوحد سر الزيجة رجلاً وامرأة مسيحيين في رباط روحي مقدس غير منحل؛ بينما يقدم سر مسحة المرضى صلوات ومسحة زيت مقدسة لشفاء النفس والجسد.\n\nتُشبه الزيجة المسيحية محبة المسيح الباذلة للكنيسة (أفسس ٥)، وتقوم على التضحية المتبادلة، والأمانة الدائمة، والتعاون في بناء أسرة صالحة نافعة للوطن.\n\nيحقق سر مسحة المرضى (القنديل) وصية القديس يعقوب (يعقوب ٥: ١٤)، مانحاً راحة جسدية وروحية للمريض مع غفران الخطايا والضعفات بالصلاة الإيمانية.",
        formulas: [
          {
            labelEn: "The Sacrament of Repentance and Confession: Metanoia, Absolution, and Spiritual Counseling",
            labelAr: "سر التوبة والاعتراف: الميتانويا (التحول القلبي)، الإقرار بالخطايا، وحل الغفران والإرشاد",
            latex: "\\text{Core Rule: } The Sacrament of Repentance an"
          },
          {
            labelEn: "The Sacrament of Priesthood (Holy Orders): Apostolic Succession, Shepherding, and Sacramental Grace",
            labelAr: "سر الكهنوت المقدس: الخلافة الرسولية، الرعاية الأبوية، وحراسة الإيمان والتعليم",
            latex: "\\text{Applied Maxim: } The Sacrament of Priesthood (H"
          }
        ],
        moeRef: {
          bookTitleEn: "Christian Religious Education Grade 12",
          bookTitleAr: "التربية الدينية المسيحية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-CHR-CH03-L2",
          pageRange: '90-115'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of The Sacrament of Repentance and Confession: Metanoia, Absolution, and Spiritual Counseling",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ سر التوبة والاعتراف: الميتانويا (التحول القلبي)، الإقرار بالخطايا، وحل الغفران والإرشاد",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-CHR-CH03-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of The Sacrament of Repentance and Confession: Metanoia, Absolution, and Spiritual Counseling",
            "Apply analytical thinking to The Sacrament of Priesthood (Holy Orders): Apostolic Succession, Shepherding, and Sacramental Grace",
            "Synthesize ethical resolutions for Sacraments of Family and Healing: Holy Matrimony (Christian Marriage) and Unction of the Sick"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ سر التوبة والاعتراف: الميتانويا (التحول القلبي)، الإقرار بالخطايا، وحل الغفران والإرشاد",
            "تطبيق التفكير التحليلي الناقد في مسألة سر الكهنوت المقدس: الخلافة الرسولية، الرعاية الأبوية، وحراسة الإيمان والتعليم",
            "بناء رؤى أخلاقية متكاملة لـ أسرار الأسرة والشفاء: سر الزيجة المقدس (قدسية الرابطة الزوجية) وسر مسحة المرضى"
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
            questionEn: "What is the accredited curriculum determination regarding The Sacrament of Repentance and Confession: Metanoia, Absolution, and Spiritual Counseling?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (سر التوبة والاعتراف: الميتانويا (التحول القلبي)، الإقرار بالخطايا، وحل الغفران والإرشاد)؟",
            solutionEn: "Repentance and Confession is the ongoing medicine of the soul wherein the believer examines conscience, repents, and confesses before the priest to receive God's absolution.",
            solutionAr: "سر التوبة والاعتراف هو بلسم النفس والتجديد المستمر، حيث يفحص المؤمن ضميره ويندم بصدق ويقر بخطاياه أمام الكاهن لنيل الغفران الإلهي."
          }
        },
        worksheet: {
          id: 'th_chr_ch3_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of The Sacrament of Repentance and Confession: Metanoia, Absolution, and Spiritual Counseling",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ سر التوبة والاعتراف: الميتانويا (التحول القلبي)، الإقرار بالخطايا، وحل الغفران والإرشاد",
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
    databank: christianCh3Databank,
    solvedExamples: christianCh3SolvedExamples,
    exerciseProblems: christianCh3Exercises
  },
  {
    id: 'th_chr_ch4',
    chapterNumber: 4,
    titleEn: "Chapter 4: Christian Ethics, Social Harmony, Family Life, and Civic Responsibility",
    titleAr: "الفصل الرابع: الأخلاق والفضائل المسيحية، التماسك الأسري، والمواطنة والمسؤولية المجتمعية والوطنية",
    descriptionEn: "Christian love (Agape) and forgiveness, family values and marriage sanctity, work ethic and diligence, patriotism and peaceful coexistence in Egypt, and resisting moral degradation.",
    descriptionAr: "الفضائل والأخلاق المسيحية الكبرى: المحبة الباذلة، التسامح، قدسية الأسرة وتربية النشء، قيمة العمل المتقن وعمارة الوطن، المواطنة والوحدة الوطنية في مصر، والتحصين الأخلاقي ضد الإدمان والمادية.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'th_chr_ch4_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of The Supreme Virtue of Christian Love (Agape) and Forgiveness: Sacrificial Benevolence",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ فضيلة المحبة المسيحية الفائقة (الأغابي): البذل غير المشروط، التسامح، ومحبة الأعداء",
        summaryEn: "Comprehensive conceptual and applied mastery of The Supreme Virtue of Christian Love (Agape) and Forgiveness: Sacrificial Benevolence, Christian Family Values: Sanctity of Marriage, Mutual Respect, and Raising Children in Virtue, and Work Ethic, Mastery (Itqan), Diligence, and Scientific Learning as Acts of Stewardship.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ فضيلة المحبة المسيحية الفائقة (الأغابي): البذل غير المشروط، التسامح، ومحبة الأعداء، قيم الأسرة المسيحية: قدسية الزواج، الاحترام المتبادل، وتربية الأبناء على الفضيلة والمحبة، و قيمة العمل، الإتقان والاجتهاد، والبحث العلمي كأمانة ومسؤولية تكليفية نحو المجتمع.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. The Supreme Virtue of Christian Love (Agape) and Forgiveness: Sacrificial Benevolence\nAgape is divine, self-giving, sacrificial love that seeks the highest welfare of others regardless of personal gain or reciprocating feelings.\n\nChristian forgiveness requires letting go of vengeance, actively praying for adversaries, and breaking destructive spirals of hatred through reconciliation.\n\n1 Corinthians 13 articulates love as the supreme virtue surpassing intellectual prowess, miraculous faith, and ascetic austerity—love that never fails.\n\n#### 2. Christian Family Values: Sanctity of Marriage, Mutual Respect, and Raising Children in Virtue\nThe family is a domestic church founded on holy marriage, where husband and wife practice mutual love, fidelity, and shared spiritual devotion.\n\nParents bear the solemn moral duty to educate children not merely in academic success, but in integrity, compassion, humility, and civic responsibility.\n\nChristian teaching resists modern hedonistic trivialization of family bonds, emphasizing that marital self-sacrifice mirrors the relationship between Christ and humanity.\n\n#### 3. Work Ethic, Mastery (Itqan), Diligence, and Scientific Learning as Acts of Stewardship\nHonest work is a divine calling and ethical duty: St. Paul declared, \"If anyone will not work, neither shall he eat\" (2 Thessalonians 3:10).\n\nChristian ethics condemns sloth and parasitic dependence, encouraging diligent effort, mastery in vocational careers, and contributing to national prosperity.\n\nScientific inquiry and vocational labor are viewed as participating in God's creative providence, utilizing intellect to alleviate suffering and cultivate creation.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. فضيلة المحبة المسيحية الفائقة (الأغابي): البذل غير المشروط، التسامح، ومحبة الأعداء\nالمحبة المسيحية (أغابي) هي محبة روحية باذلة تتفانى في خدمة الآخرين والخير العام دون انتظار مقابل مادي أو مصلحة شخصية.\n\nيقتضي التسامح المسيحي نبذ روح الانتقام والضغينة، ومقابلة الإساءة بالإحسان، والصلاة لأجل المسيئين لكسر دوائر العنف والكراهية.\n\nتضع أنشودة المحبة (١ كورنثوس ١٣) المحبة فوق كل موهبة عقلية أو معجزية؛ فالإيمان والرجاء عظيمان، أما أعظمهما فهي المحبة التي لا تسقط أبداً.\n\n#### ٢. قيم الأسرة المسيحية: قدسية الزواج، الاحترام المتبادل، وتربية الأبناء على الفضيلة والمحبة\nالأسرة المسيحية كنيسة صغيرة تقوم على المحبة الزوجية النقية والاحترام المتبادل والوفاء، وتنشئة الأبناء في مخافة الله وبر الوالدين.\n\nيتحمل الوالدان مسؤولية تربوية مقدسة لتنشئة الأبناء على الاستقامة الأخلاقية، والصدق، والرحمة بالضعفاء، والمواطنة الصالحة والاجتهاد.\n\n#### ٢. قيمة العمل، الإتقان والاجتهاد، والبحث العلمي كأمانة ومسؤولية تكليفية نحو المجتمع\nالعمل الشريف المتقن فريضة وواجب ديني وإنساني؛ وقد أعلن بولس الرسول بحزم: \"إن كان أحد لا يريد أن يشتغل، فلا يأكل أيضاً\" (٢ تس ٣: ١٠).\n\nتنبذ التعاليم المسيحية الكسل والتواكل، وتحث على التميز والإتقان المهني، والمساهمة الفاعلة في تنمية المجتمع وازدهار الاقتصاد الوطني.\n\nيعد البحث العلمي المخلص والعمل المنتج شكلاً من أشكال الشراكة في عمارة الكون وتخفيف آلام البشر وتطوير سبل العيش الكريم للجميع.",
        formulas: [
          {
            labelEn: "The Supreme Virtue of Christian Love (Agape) and Forgiveness: Sacrificial Benevolence",
            labelAr: "فضيلة المحبة المسيحية الفائقة (الأغابي): البذل غير المشروط، التسامح، ومحبة الأعداء",
            latex: "\\text{Core Rule: } The Supreme Virtue of Christia"
          },
          {
            labelEn: "Christian Family Values: Sanctity of Marriage, Mutual Respect, and Raising Children in Virtue",
            labelAr: "قيم الأسرة المسيحية: قدسية الزواج، الاحترام المتبادل، وتربية الأبناء على الفضيلة والمحبة",
            latex: "\\text{Applied Maxim: } Christian Family Values: Sanct"
          }
        ],
        moeRef: {
          bookTitleEn: "Christian Religious Education Grade 12",
          bookTitleAr: "التربية الدينية المسيحية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-CHR-CH04-L1",
          pageRange: '110-135'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of The Supreme Virtue of Christian Love (Agape) and Forgiveness: Sacrificial Benevolence",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ فضيلة المحبة المسيحية الفائقة (الأغابي): البذل غير المشروط، التسامح، ومحبة الأعداء",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-CHR-CH04-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of The Supreme Virtue of Christian Love (Agape) and Forgiveness: Sacrificial Benevolence",
            "Apply analytical thinking to Christian Family Values: Sanctity of Marriage, Mutual Respect, and Raising Children in Virtue",
            "Synthesize ethical resolutions for Work Ethic, Mastery (Itqan), Diligence, and Scientific Learning as Acts of Stewardship"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ فضيلة المحبة المسيحية الفائقة (الأغابي): البذل غير المشروط، التسامح، ومحبة الأعداء",
            "تطبيق التفكير التحليلي الناقد في مسألة قيم الأسرة المسيحية: قدسية الزواج، الاحترام المتبادل، وتربية الأبناء على الفضيلة والمحبة",
            "بناء رؤى أخلاقية متكاملة لـ قيمة العمل، الإتقان والاجتهاد، والبحث العلمي كأمانة ومسؤولية تكليفية نحو المجتمع"
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
            questionEn: "What is the accredited curriculum determination regarding The Supreme Virtue of Christian Love (Agape) and Forgiveness: Sacrificial Benevolence?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (فضيلة المحبة المسيحية الفائقة (الأغابي): البذل غير المشروط، التسامح، ومحبة الأعداء)؟",
            solutionEn: "Agape is divine, self-giving, sacrificial love that seeks the highest welfare of others regardless of personal gain or reciprocating feelings.",
            solutionAr: "المحبة المسيحية (أغابي) هي محبة روحية باذلة تتفانى في خدمة الآخرين والخير العام دون انتظار مقابل مادي أو مصلحة شخصية."
          }
        },
        worksheet: {
          id: 'th_chr_ch4_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of The Supreme Virtue of Christian Love (Agape) and Forgiveness: Sacrificial Benevolence",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ فضيلة المحبة المسيحية الفائقة (الأغابي): البذل غير المشروط، التسامح، ومحبة الأعداء",
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
        id: 'th_chr_ch4_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Patriotism, Citizenship, and Civic Duties: Loyalty, Defense of the Homeland, and Obeying Laws",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ المواطنة والانتماء الوطني: حب مصر، الالتزام بالقوانين، والواجبات المدنية والدفاع عن الوطن",
        summaryEn: "Comprehensive conceptual and applied mastery of Patriotism, Citizenship, and Civic Duties: Loyalty, Defense of the Homeland, and Obeying Laws, Interfaith Harmony, Tolerance, and National Unity in Modern Egyptian History, and Spiritual Vigilance against Contemporary Vices: Addictions, Nihilism, and Materialism.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ المواطنة والانتماء الوطني: حب مصر، الالتزام بالقوانين، والواجبات المدنية والدفاع عن الوطن، التآخي الديني، التسامح، والوحدة الوطنية الراسخة في تاريخ مصر المعاصر، و التحصين الروحي والأخلاقي ضد الآفات المعاصرة: الإدمان، الإباحية، والنزعة الاستهلاكية.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Patriotism, Citizenship, and Civic Duties: Loyalty, Defense of the Homeland, and Obeying Laws\nChristians are called to love their homeland deeply, obey established civil authorities, pay taxes faithfully, and defend the nation's integrity.\n\nChrist articulated civic balance: \"Render therefore to Caesar the things that are Caesar's, and to God the things that are God's\" (Matthew 22:21).\n\nTrue citizenship entails proactive contribution to societal welfare: combating corruption, volunteering in public health, and defending the vulnerable.\n\n#### 2. Interfaith Harmony, Tolerance, and National Unity in Modern Egyptian History\nMuslims and Christians in Egypt share an unbreakable bond of national fraternity, standing united across centuries in joy, challenges, and defense of the nation.\n\nHistorical milestones—such as the 1919 Revolution, the October 1973 Victory, and the 2013 national realignment—embody enduring Egyptian cohesion.\n\nChristianity views people of other faiths not as strangers, but as brethren created in God's image, fostering collaborative coexistence and reciprocal respect.\n\n#### 3. Spiritual Vigilance against Contemporary Vices: Addictions, Nihilism, and Materialism\nBelievers maintain personal sanctity by keeping their bodies as temples of the Holy Spirit, rejecting narcotics, alcohol abuse, and destructive addictions.\n\nSpiritual discipline and mental resilience protect youths from consumerist materialism and existential nihilism, anchoring identity in spiritual purpose.\n\nPastoral care combines compassionate psychiatric and medical rehabilitation with spiritual renewal, restoring addicted individuals to community life.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. المواطنة والانتماء الوطني: حب مصر، الالتزام بالقوانين، والواجبات المدنية والدفاع عن الوطن\nيلتزم المسيحي بمحبة وطنه مصر حباً صادقاً، وإطاعة القوانين والأنظمة الدستورية، وأداء الضرائب بنزاهة، والدفاع عن تراب الوطن وسيادته.\n\nأقر السيد المسيح التوازن المدني والروحي الحكيم: \"أعطوا ما لقيصر لقيصر وما لله لله\"، مؤكداً أداء الواجبات الوطنية المدنية في تكامل تام مع العبادة.\n\nتتجاوز المواطنة الحقيقية السلبية الشكلية إلى المبادرة الإيجابية في محاربة الفساد، ومساندة جهود التنمية المجتمعية، ودعم الاستقرار الوطني.\n\n#### ٢. التآخي الديني، التسامح، والوحدة الوطنية الراسخة في تاريخ مصر المعاصر\nيتشارك المسلمون والمسيحيون في مصر نسيجاً وطنياً واحداً ولحمة اجتماعية صلبة واجهت عبر التاريخ كافة التحديات وحققت انتصارات الوطن المشتركة.\n\nتجسد المحطات الوطنية الكبرى كثورة ١٩١٩، ونصر أكتوبر المجيد ١٩٧٣، وثورة ٣٠ يونيو ٢٠١٣، عمق التلاحم الشعبي ووحدة المصير بين أبناء النيل.\n\n#### ٢. التحصين الروحي والأخلاقي ضد الآفات المعاصرة: الإدمان، الإباحية، والنزعة الاستهلاكية\nيحفظ المؤمن طهارة جسده ونقاء فكره باعتباره هيكلاً للروح القدس، ممتنعاً بحزم عن المخدرات، والمسكرات، وكافة أنواع الإدمان السلوكي والمادي.\n\nيوفر الامتلاء الروحي والصلاة حصانة نفسية للشباب ضد النزعات العدمية والاستهلاكية الجارفة، موجهاً الطاقات نحو الإبداع والخدمة البناءة.\n\nتدمج الرعاية الكنسية والمجتمعية بين العلاج الطبي والنفسي المتخصص والدعم الروحي والأخلاقي لانتشال المتعافين وإعادة دمجهم في المجتمع كأعضاء فاعلين.",
        formulas: [
          {
            labelEn: "Patriotism, Citizenship, and Civic Duties: Loyalty, Defense of the Homeland, and Obeying Laws",
            labelAr: "المواطنة والانتماء الوطني: حب مصر، الالتزام بالقوانين، والواجبات المدنية والدفاع عن الوطن",
            latex: "\\text{Core Rule: } Patriotism, Citizenship, and C"
          },
          {
            labelEn: "Interfaith Harmony, Tolerance, and National Unity in Modern Egyptian History",
            labelAr: "التآخي الديني، التسامح، والوحدة الوطنية الراسخة في تاريخ مصر المعاصر",
            latex: "\\text{Applied Maxim: } Interfaith Harmony, Tolerance,"
          }
        ],
        moeRef: {
          bookTitleEn: "Christian Religious Education Grade 12",
          bookTitleAr: "التربية الدينية المسيحية للصف الثالث الثانوي",
          grade: '12',
          term: 'Full Year',
          officialCode: "TH-CHR-CH04-L2",
          pageRange: '125-150'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Patriotism, Citizenship, and Civic Duties: Loyalty, Defense of the Homeland, and Obeying Laws",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ المواطنة والانتماء الوطني: حب مصر، الالتزام بالقوانين، والواجبات المدنية والدفاع عن الوطن",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "TH-CHR-CH04-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Patriotism, Citizenship, and Civic Duties: Loyalty, Defense of the Homeland, and Obeying Laws",
            "Apply analytical thinking to Interfaith Harmony, Tolerance, and National Unity in Modern Egyptian History",
            "Synthesize ethical resolutions for Spiritual Vigilance against Contemporary Vices: Addictions, Nihilism, and Materialism"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ المواطنة والانتماء الوطني: حب مصر، الالتزام بالقوانين، والواجبات المدنية والدفاع عن الوطن",
            "تطبيق التفكير التحليلي الناقد في مسألة التآخي الديني، التسامح، والوحدة الوطنية الراسخة في تاريخ مصر المعاصر",
            "بناء رؤى أخلاقية متكاملة لـ التحصين الروحي والأخلاقي ضد الآفات المعاصرة: الإدمان، الإباحية، والنزعة الاستهلاكية"
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
            questionEn: "What is the accredited curriculum determination regarding Patriotism, Citizenship, and Civic Duties: Loyalty, Defense of the Homeland, and Obeying Laws?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (المواطنة والانتماء الوطني: حب مصر، الالتزام بالقوانين، والواجبات المدنية والدفاع عن الوطن)؟",
            solutionEn: "Christians are called to love their homeland deeply, obey established civil authorities, pay taxes faithfully, and defend the nation's integrity.",
            solutionAr: "يلتزم المسيحي بمحبة وطنه مصر حباً صادقاً، وإطاعة القوانين والأنظمة الدستورية، وأداء الضرائب بنزاهة، والدفاع عن تراب الوطن وسيادته."
          }
        },
        worksheet: {
          id: 'th_chr_ch4_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Patriotism, Citizenship, and Civic Duties: Loyalty, Defense of the Homeland, and Obeying Laws",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ المواطنة والانتماء الوطني: حب مصر، الالتزام بالقوانين، والواجبات المدنية والدفاع عن الوطن",
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
    databank: christianCh4Databank,
    solvedExamples: christianCh4SolvedExamples,
    exerciseProblems: christianCh4Exercises
  }
];

export const thanaweyaChristianBranch: Branch = {
  id: 'thanaweya_christian',
  titleEn: "Thanaweya Amma Christian Studies",
  titleAr: "التربية الدينية المسيحية للثانوية العامة",
  categoryEn: "National Religious Education",
  categoryAr: "التربية الدينية القومية للثانوية العامة",
  iconName: 'BookOpen',
  colorGradient: 'from-amber-950 via-rose-900 to-purple-950',
  chapters
};
