import type { Branch, Chapter } from '../types/curriculum';
import { egBacIslamicCh1Databank } from './databanks/egbac/egBacIslamicCh1Databank';
import { egBacIslamicCh1SolvedExamples, egBacIslamicCh1Exercises } from './textbook/egbac/egBacIslamicCh1Textbook';
import { egBacIslamicCh2Databank } from './databanks/egbac/egBacIslamicCh2Databank';
import { egBacIslamicCh2SolvedExamples, egBacIslamicCh2Exercises } from './textbook/egbac/egBacIslamicCh2Textbook';
import { egBacIslamicCh3Databank } from './databanks/egbac/egBacIslamicCh3Databank';
import { egBacIslamicCh3SolvedExamples, egBacIslamicCh3Exercises } from './textbook/egbac/egBacIslamicCh3Textbook';
import { egBacIslamicCh4Databank } from './databanks/egbac/egBacIslamicCh4Databank';
import { egBacIslamicCh4SolvedExamples, egBacIslamicCh4Exercises } from './textbook/egbac/egBacIslamicCh4Textbook';

const chapters: Chapter[] = [
  {
    id: 'egbac_isl_ch1',
    chapterNumber: 1,
    titleEn: "Module 1: Philosophy of Islamic Jurisprudence, Major Legal Maxims, and Bioethics",
    titleAr: "الوحدة الأولى: فلسفة التشريع الإسلامي، القواعد الفقهية الكبرى، والأخلاقيات الحيوية (Bioethics)",
    descriptionEn: "Foundational philosophy of Islamic jurisprudence, five major legal maxims (Al-Qawa'id al-Fiqhiyyah), contemporary ijtihad mechanisms, and ethical determinations in biomedical sciences and genetic engineering.",
    descriptionAr: "فلسفة التشريع الإسلامي، القواعد الفقهية الكلية الكبرى الخمس، آليات الاجتهاد المعاصر وفقه النوازل، والضوابط الأخلاقية والشرعية في الطب الحيوي والهندسة الوراثية وزراعة الأعضاء.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_isl_ch1_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of The Five Major Legal Maxims (Al-Qawa'id al-Fiqhiyyah al-Kubra) in Islamic Jurisprudence",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ القواعد الفقهية الكبرى الخمس في الفقه وأصول التشريع الإسلامي",
        summaryEn: "Comprehensive conceptual and applied mastery of The Five Major Legal Maxims (Al-Qawa'id al-Fiqhiyyah al-Kubra) in Islamic Jurisprudence, Contemporary Ijtihad and Jurisprudence of Emerging Realities (Fiqh an-Nawazil), and Bioethics and Organ Transplantation: Brainstem Death and Bodily Inviolability.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ القواعد الفقهية الكبرى الخمس في الفقه وأصول التشريع الإسلامي، الاجتهاد المعاصر وفقه النوازل والمستجدات الفكرية والطبية والتقنية، و الأخلاقيات الطبية الحيوية (Bioethics): زراعة الأعضاء، موت الدماغ، وحرمة الجسد الإنساني.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. The Five Major Legal Maxims (Al-Qawa'id al-Fiqhiyyah al-Kubra) in Islamic Jurisprudence\nThe five universal maxims encompass: Matters are judged by intentions, Certainty is not superseded by doubt, Hardship begets facility, Harm must be eliminated, and Custom is arbitral.\n\nThe maxim \"Hardship begets facility\" justifies legal dispensations (Rukhsah) during illness, travel, medical emergencies, and societal duress.\n\nThe maxim \"Harm must be eliminated\" operates with systemic preventive maxims, establishing that preventing systemic corruption takes precedence over procuring marginal utility.\n\n#### 2. Contemporary Ijtihad and Jurisprudence of Emerging Realities (Fiqh an-Nawazil)\nContemporary Ijtihad is the systematic scholarly exertion to deduce normative Sharia rulings for unprecedented modern developments and dilemmas.\n\nCollective Ijtihad through international Fiqh academies (such as Al-Azhar Islamic Research Academy) supersedes individual fatwas on complex public issues.\n\nModern juridical methodology utilizes purposive extrapolation (Tahqiq al-Manat) and cross-disciplinary consultation with specialized physicians, economists, and scientists.\n\n#### 3. Bioethics and Organ Transplantation: Brainstem Death and Bodily Inviolability\nIslamic jurisprudence permits post-mortem and living organ donation solely as an altruistic act of saving life without any commercial exchange.\n\nLiving organ donation is strictly conditional upon not inflicting fatal harm or functional collapse upon the donor, honoring the maxim of no self-harm.\n\nRecognizing clinical brainstem death requires consensus from a multi-disciplinary independent medical team verifying irreversible cessation of brain function before organ harvesting.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. القواعد الفقهية الكبرى الخمس في الفقه وأصول التشريع الإسلامي\nالقواعد الفقهية الكبرى الخمس هي: الأمور بمقاصدها، اليقين لا يزول بالشك، المشقة تجلب التيسير، الضرر يزال، والعادة مُحكَّمة.\n\nتؤسس قاعدة \"المشقة تجلب التيسير\" للرخص الشرعية الاستثنائية عند المرض والسفر والأوبئة والاضطرار حفظاً للنفس والتيسير على المكلفين.\n\nتتفرع عن قاعدة \"الضرر يزال\" قواعد ترجيحية كبرى مثل \"درء المفاسد مقدم على جلب المصالح\" و\"يُتحمل الضرر الخاص لدفع الضرر العام\".\n\n#### ٢. الاجتهاد المعاصر وفقه النوازل والمستجدات الفكرية والطبية والتقنية\nالاجتهاد المعاصر هو بذل الفقيه المؤهل غاية وسعه لاستنباط الأحكام الشرعية العملية للنوازل والمستحدثات المعاصرة التي لا نص فيها.\n\nالاجتهاد الجماعي عبر المجامع الفقهية المعتمدة (كمجمع البحوث الإسلامية بالأزهر) هو المعتمد في القضايا العامة والنوازل الكبرى المعقدة.\n\n#### ٢. الأخلاقيات الطبية الحيوية (Bioethics): زراعة الأعضاء، موت الدماغ، وحرمة الجسد الإنساني\nأجازت الشريعة الإسلامية التبرع بالأعضاء بعد الوفاة أو في الحياة كعمل إنساني إنقاذي بشرط انعدام البيع أو المقابل المادي تماماً.\n\nيُشترط في التبرع بالأعضاء من الحي ألا يلحق به ضرر فادح أو هلاك، إعمالاً لقاعدة \"لا ضرر ولا ضرار\" وحفظاً لنفس المتبرع.\n\nيشترط الفقهاء لتحقق الوفاة الدماغية شهادة لجنة طبية مستقلة تؤكد التوقف النهائي غير القابل للرجوع لجميع وظائف جذع المخ والمراكز الحيوية.",
        formulas: [
          {
            labelEn: "The Five Major Legal Maxims (Al-Qawa'id al-Fiqhiyyah al-Kubra) in Islamic Jurisprudence",
            labelAr: "القواعد الفقهية الكبرى الخمس في الفقه وأصول التشريع الإسلامي",
            latex: "\\text{Core Rule: } The Five Major Legal Maxims (A"
          },
          {
            labelEn: "Contemporary Ijtihad and Jurisprudence of Emerging Realities (Fiqh an-Nawazil)",
            labelAr: "الاجتهاد المعاصر وفقه النوازل والمستجدات الفكرية والطبية والتقنية",
            latex: "\\text{Applied Maxim: } Contemporary Ijtihad and Juris"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Islamic Studies",
          bookTitleAr: "التربية الدينية الإسلامية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-ISL-CH01-L1",
          pageRange: '5-30'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of The Five Major Legal Maxims (Al-Qawa'id al-Fiqhiyyah al-Kubra) in Islamic Jurisprudence",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ القواعد الفقهية الكبرى الخمس في الفقه وأصول التشريع الإسلامي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-ISL-CH01-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of The Five Major Legal Maxims (Al-Qawa'id al-Fiqhiyyah al-Kubra) in Islamic Jurisprudence",
            "Apply analytical thinking to Contemporary Ijtihad and Jurisprudence of Emerging Realities (Fiqh an-Nawazil)",
            "Synthesize ethical resolutions for Bioethics and Organ Transplantation: Brainstem Death and Bodily Inviolability"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ القواعد الفقهية الكبرى الخمس في الفقه وأصول التشريع الإسلامي",
            "تطبيق التفكير التحليلي الناقد في مسألة الاجتهاد المعاصر وفقه النوازل والمستجدات الفكرية والطبية والتقنية",
            "بناء رؤى أخلاقية متكاملة لـ الأخلاقيات الطبية الحيوية (Bioethics): زراعة الأعضاء، موت الدماغ، وحرمة الجسد الإنساني"
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
            questionEn: "What is the accredited curriculum determination regarding The Five Major Legal Maxims (Al-Qawa'id al-Fiqhiyyah al-Kubra) in Islamic Jurisprudence?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (القواعد الفقهية الكبرى الخمس في الفقه وأصول التشريع الإسلامي)؟",
            solutionEn: "The five universal maxims encompass: Matters are judged by intentions, Certainty is not superseded by doubt, Hardship begets facility, Harm must be eliminated, and Custom is arbitral.",
            solutionAr: "القواعد الفقهية الكبرى الخمس هي: الأمور بمقاصدها، اليقين لا يزول بالشك، المشقة تجلب التيسير، الضرر يزال، والعادة مُحكَّمة."
          }
        },
        worksheet: {
          id: 'egbac_isl_ch1_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of The Five Major Legal Maxims (Al-Qawa'id al-Fiqhiyyah al-Kubra) in Islamic Jurisprudence",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ القواعد الفقهية الكبرى الخمس في الفقه وأصول التشريع الإسلامي",
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
        id: 'egbac_isl_ch1_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Genetic Engineering, Gene Editing (CRISPR), and Human Cloning Boundaries in Sharia",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ الهندسة الوراثية، تعديل الجينات (CRISPR)، وحدود الاستنساخ البشري في ضوء المقاصد الشرعية",
        summaryEn: "Comprehensive conceptual and applied mastery of Genetic Engineering, Gene Editing (CRISPR), and Human Cloning Boundaries in Sharia, Fiqh of Facilitation (Taysir) and Legal Dispensations in Times of Global Crises and Pandemics, and Harmonizing Sharia Objectives with International Human Rights and Global Ethical Declarations.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ الهندسة الوراثية، تعديل الجينات (CRISPR)، وحدود الاستنساخ البشري في ضوء المقاصد الشرعية، فقه التيسير والتطبيقات الاستثنائية للرخص الشرعية في الأزمات والجوائح الصحية العالمية، و التكامل بين مقاصد الشريعة الإسلامية والمواثيق والاتفاقيات الدولية لحقوق الإنسان.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Genetic Engineering, Gene Editing (CRISPR), and Human Cloning Boundaries in Sharia\nSharia warmly endorses genetic engineering and somatic cell gene editing to prevent or cure severe genetic diseases and hereditary disorders.\n\nReproductive human cloning is unanimously prohibited in Islamic jurisprudence because it destroys lineage, disrupts parenthood, and subverts familial sanctity.\n\nGermline genetic modifications targeting aesthetic enhancements or eugenic manipulation are prohibited, preserving the divine dignity of human creation.\n\n#### 2. Fiqh of Facilitation (Taysir) and Legal Dispensations in Times of Global Crises and Pandemics\nIslam prioritizes human preservation during public health crises, mandating quarantine measures and suspending congregational gatherings if transmission threatens lives.\n\nThe Prophetic directive on contagious plagues establishes the earliest epidemiological quarantine: not entering an infected land nor exiting it.\n\nThe ethical framework of Fiqh al-Taysir demonstrates that institutional dispensations are systemic applications of Sharia mercy, not concessions of religious conviction.\n\n#### 3. Harmonizing Sharia Objectives with International Human Rights and Global Ethical Declarations\nIslamic principles intrinsically champion fundamental human rights: dignity, justice, equality, freedom of belief, and protection of property.\n\nThe Quranic declaration \"We have certainly honored the children of Adam\" establishes universal, inalienable dignity regardless of race, gender, or religion.\n\nIslamic jurisprudence enriches contemporary international law by grounding human rights in spiritual accountability, linking legal entitlements with moral duty.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. الهندسة الوراثية، تعديل الجينات (CRISPR)، وحدود الاستنساخ البشري في ضوء المقاصد الشرعية\nترحب الشريعة الإسلامية بالهندسة الوراثية والعلاج الجيني للخلايا الجسدية لمعالجة الأمراض الوراثية المستعصية واستئصال العاهات.\n\nيحرم الاستنساخ البشري التكاثري بإجماع المجامع الفقهية لأنه يهدم نظام النسل والأسرة ويلغي الأبوة والأمومة الفطرية.\n\nيُحظر التعديل الجيني في الخلايا الجرثومية الوراثية إذا كان بهدف العبث بنظام الخلق أو التحسين التجميلي أو التمييز العرقي الجيني.\n\n#### ٢. فقه التيسير والتطبيقات الاستثنائية للرخص الشرعية في الأزمات والجوائح الصحية العالمية\nيقدم الإسلام حفظ النفس في الجوائح الصحية الكبرى، موجباً الحجر الصحي وجواز تعليق التجمعات والشعائر الجماعية درءاً للوباء والهلاك.\n\nأرست التوجيهات النبوية في الطاعون أقدم نظام للحجر الوبائي بعدم دخول البلد الموبوء وعدم الخروج منه حصراً لانتشار العدوى.\n\n#### ٢. التكامل بين مقاصد الشريعة الإسلامية والمواثيق والاتفاقيات الدولية لحقوق الإنسان\nتتطابق المقاصد الشرعية مع جوهر حقوق الإنسان في تكريم بني آدم والعدالة والمساواة وصيانة الحياة والحرية والملكية.\n\nيقرر قوله تعالى: \"ولقد كرمنا بني آدم\" الكرامة الإنسانية المتأصلة الشاملة لجميع البشر دون تمييز عرقي أو ديني أو طبقي.\n\nيمنح المنظور الإسلامي حقوق الإنسان عمقاً روحياً إلزامياً يربط الحقوق بالواجبات والمسؤولية الأخلاقية أمام الله والمجتمع.",
        formulas: [
          {
            labelEn: "Genetic Engineering, Gene Editing (CRISPR), and Human Cloning Boundaries in Sharia",
            labelAr: "الهندسة الوراثية، تعديل الجينات (CRISPR)، وحدود الاستنساخ البشري في ضوء المقاصد الشرعية",
            latex: "\\text{Core Rule: } Genetic Engineering, Gene Edit"
          },
          {
            labelEn: "Fiqh of Facilitation (Taysir) and Legal Dispensations in Times of Global Crises and Pandemics",
            labelAr: "فقه التيسير والتطبيقات الاستثنائية للرخص الشرعية في الأزمات والجوائح الصحية العالمية",
            latex: "\\text{Applied Maxim: } Fiqh of Facilitation (Taysir) "
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Islamic Studies",
          bookTitleAr: "التربية الدينية الإسلامية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-ISL-CH01-L2",
          pageRange: '20-45'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Genetic Engineering, Gene Editing (CRISPR), and Human Cloning Boundaries in Sharia",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ الهندسة الوراثية، تعديل الجينات (CRISPR)، وحدود الاستنساخ البشري في ضوء المقاصد الشرعية",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-ISL-CH01-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Genetic Engineering, Gene Editing (CRISPR), and Human Cloning Boundaries in Sharia",
            "Apply analytical thinking to Fiqh of Facilitation (Taysir) and Legal Dispensations in Times of Global Crises and Pandemics",
            "Synthesize ethical resolutions for Harmonizing Sharia Objectives with International Human Rights and Global Ethical Declarations"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ الهندسة الوراثية، تعديل الجينات (CRISPR)، وحدود الاستنساخ البشري في ضوء المقاصد الشرعية",
            "تطبيق التفكير التحليلي الناقد في مسألة فقه التيسير والتطبيقات الاستثنائية للرخص الشرعية في الأزمات والجوائح الصحية العالمية",
            "بناء رؤى أخلاقية متكاملة لـ التكامل بين مقاصد الشريعة الإسلامية والمواثيق والاتفاقيات الدولية لحقوق الإنسان"
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
            questionEn: "What is the accredited curriculum determination regarding Genetic Engineering, Gene Editing (CRISPR), and Human Cloning Boundaries in Sharia?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (الهندسة الوراثية، تعديل الجينات (CRISPR)، وحدود الاستنساخ البشري في ضوء المقاصد الشرعية)؟",
            solutionEn: "Sharia warmly endorses genetic engineering and somatic cell gene editing to prevent or cure severe genetic diseases and hereditary disorders.",
            solutionAr: "ترحب الشريعة الإسلامية بالهندسة الوراثية والعلاج الجيني للخلايا الجسدية لمعالجة الأمراض الوراثية المستعصية واستئصال العاهات."
          }
        },
        worksheet: {
          id: 'egbac_isl_ch1_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Genetic Engineering, Gene Editing (CRISPR), and Human Cloning Boundaries in Sharia",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ الهندسة الوراثية، تعديل الجينات (CRISPR)، وحدود الاستنساخ البشري في ضوء المقاصد الشرعية",
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
    databank: egBacIslamicCh1Databank,
    solvedExamples: egBacIslamicCh1SolvedExamples,
    exerciseProblems: egBacIslamicCh1Exercises
  },
  {
    id: 'egbac_isl_ch2',
    chapterNumber: 2,
    titleEn: "Module 2: Islamic Economic Thought, Participatory Finance, Green Sukuk, and Distributive Justice",
    titleAr: "الوحدة الثانية: الفكر الاقتصادي الإسلامي، التمويل التشاركي، الصكوك الخضراء، والعدالة التوزيعية",
    descriptionEn: "Principles of Islamic economics, prohibition of usury and exploitation, risk-sharing participatory finance (Mudarabah & Musharakah), Green Sukuk for renewable infrastructure, and sustainable Waqf endowments.",
    descriptionAr: "أسس الاقتصاد الإسلامي، تحريم الربا والاحتكار والاستغلال، التمويل التشاركي وتقاسم المخاطر والأرباح (المضاربة والمشاركة)، الصكوك الخضراء لتمويل التنمية المستدامة، والأوقاف التنموية.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_isl_ch2_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Core Principles of Islamic Economics: Prohibition of Riba, Gharar, and Unjust Enrichment",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ أصول ومبادئ الاقتصاد الإسلامي: تحريم الربا والغرر والاحتكار وأكل أموال الناس بالباطل",
        summaryEn: "Comprehensive conceptual and applied mastery of Core Principles of Islamic Economics: Prohibition of Riba, Gharar, and Unjust Enrichment, Participatory Risk-Sharing Finance: Mudarabah, Musharakah, and Asset-Backed Financing, and Green Sukuk (Islamic Green Bonds) for Renewable Energy and Ecological Infrastructure.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ أصول ومبادئ الاقتصاد الإسلامي: تحريم الربا والغرر والاحتكار وأكل أموال الناس بالباطل، التمويل التشاركي القائم على تقاسم المخاطر: المضاربة والمشاركة والتمويل العيني الحقيقي، و الصكوك الإسلامية الخضراء (Green Sukuk) وتمويل مشروعات الطاقة المتجددة والبنية التحتية المستدامة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Core Principles of Islamic Economics: Prohibition of Riba, Gharar, and Unjust Enrichment\nIslamic economic philosophy prohibits usury (Riba), extreme speculative ambiguity (Gharar), and exploitation in commercial transactions.\n\nWealth in Islam is a divine trust; humans possess stewardship over resources and must employ them productively for communal flourishing.\n\nIslamic economics forbids hoarding capital, enforcing circulation through Zakat so that wealth does not merely rotate among the affluent (\"Kay la yakuna dulatan bayna al-aghniya\").\n\n#### 2. Participatory Risk-Sharing Finance: Mudarabah, Musharakah, and Asset-Backed Financing\nIslamic financial contracts rely on equitable profit-and-loss sharing (PLS) rather than fixed guaranteed usurious interest rates.\n\nIn Mudarabah partnerships, one party provides capital while the other provides labor and expertise, distributing profits by agreed percentages.\n\nThe foundational maxim \"Entitlement to profit is accompanied by liability for loss\" (Al-Kharaj bi al-Daman) ties financial return directly to productive economic real-world value.\n\n#### 3. Green Sukuk (Islamic Green Bonds) for Renewable Energy and Ecological Infrastructure\nGreen Sukuk are Sharia-compliant asset-backed financial certificates dedicated exclusively to funding eco-friendly and renewable energy projects.\n\nUnlike conventional interest-bearing bonds, Sukuk holders own fractional tangible equity in underlying assets, sharing yields proportionally.\n\nGreen Sukuk bridge Islamic Maqasid (preservation of life and environment) with modern ESG (Environmental, Social, and Governance) global standards.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. أصول ومبادئ الاقتصاد الإسلامي: تحريم الربا والغرر والاحتكار وأكل أموال الناس بالباطل\nيقوم الاقتصاد الإسلامي على تحريم الربا والغرر والجهالة الفاحشة والغش والاحتكار في جميع المعاملات المالية.\n\nالمال في الإسلام مال الله والإنسان مستخلف فيه، وواجبه استثماره وتنميته بالحق والعدالة في مشاريع نافعة للمجتمع.\n\nيحرم الاقتصاد الإسلامي اكتناز الأموال وتجميدها، ويوجب تداولها بالإنتاج والزكاة تحقيقاً لقوله تعالى: \"كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ\".\n\n#### ٢. التمويل التشاركي القائم على تقاسم المخاطر: المضاربة والمشاركة والتمويل العيني الحقيقي\nيقوم التمويل التشاركي الإسلامي على مبدأ المشاركة في الربح والخسارة بديلاً عن الفوائد الربوية المحددة سلفاً دون مخاطرة.\n\nفي عقد المضاربة يقدم أحد الطرفين رأس المال والطرف الآخر الجهد والخبرة، ويقتسمان الأرباح بنسبة شائعة معلومة متفق عليها.\n\n#### ٢. الصكوك الإسلامية الخضراء (Green Sukuk) وتمويل مشروعات الطاقة المتجددة والبنية التحتية المستدامة\nالصكوك الخضراء هي أوراق مالية استثمارية إسلامية مدعومة بأصول حقيقية تُخصص لتمويل مشروعات الطاقة المتجددة وحماية البيئة.\n\nتتميز الصكوك عن السندات الربوية بأن حامل الصك يملك حصة شائعة في أعيان ومنافع المشروع الحقيقي ويستحق أرباح تشغيله.\n\nتمثل الصكوك الخضراء تجسيداً حياً لربط مقاصد الشريعة في حفظ البيئة والثروات بمعايير الاستدامة والحوكمة العالمية (ESG).",
        formulas: [
          {
            labelEn: "Core Principles of Islamic Economics: Prohibition of Riba, Gharar, and Unjust Enrichment",
            labelAr: "أصول ومبادئ الاقتصاد الإسلامي: تحريم الربا والغرر والاحتكار وأكل أموال الناس بالباطل",
            latex: "\\text{Core Rule: } Core Principles of Islamic Eco"
          },
          {
            labelEn: "Participatory Risk-Sharing Finance: Mudarabah, Musharakah, and Asset-Backed Financing",
            labelAr: "التمويل التشاركي القائم على تقاسم المخاطر: المضاربة والمشاركة والتمويل العيني الحقيقي",
            latex: "\\text{Applied Maxim: } Participatory Risk-Sharing Fin"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Islamic Studies",
          bookTitleAr: "التربية الدينية الإسلامية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-ISL-CH02-L1",
          pageRange: '40-65'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Core Principles of Islamic Economics: Prohibition of Riba, Gharar, and Unjust Enrichment",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ أصول ومبادئ الاقتصاد الإسلامي: تحريم الربا والغرر والاحتكار وأكل أموال الناس بالباطل",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-ISL-CH02-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Core Principles of Islamic Economics: Prohibition of Riba, Gharar, and Unjust Enrichment",
            "Apply analytical thinking to Participatory Risk-Sharing Finance: Mudarabah, Musharakah, and Asset-Backed Financing",
            "Synthesize ethical resolutions for Green Sukuk (Islamic Green Bonds) for Renewable Energy and Ecological Infrastructure"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ أصول ومبادئ الاقتصاد الإسلامي: تحريم الربا والغرر والاحتكار وأكل أموال الناس بالباطل",
            "تطبيق التفكير التحليلي الناقد في مسألة التمويل التشاركي القائم على تقاسم المخاطر: المضاربة والمشاركة والتمويل العيني الحقيقي",
            "بناء رؤى أخلاقية متكاملة لـ الصكوك الإسلامية الخضراء (Green Sukuk) وتمويل مشروعات الطاقة المتجددة والبنية التحتية المستدامة"
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
            questionEn: "What is the accredited curriculum determination regarding Core Principles of Islamic Economics: Prohibition of Riba, Gharar, and Unjust Enrichment?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (أصول ومبادئ الاقتصاد الإسلامي: تحريم الربا والغرر والاحتكار وأكل أموال الناس بالباطل)؟",
            solutionEn: "Islamic economic philosophy prohibits usury (Riba), extreme speculative ambiguity (Gharar), and exploitation in commercial transactions.",
            solutionAr: "يقوم الاقتصاد الإسلامي على تحريم الربا والغرر والجهالة الفاحشة والغش والاحتكار في جميع المعاملات المالية."
          }
        },
        worksheet: {
          id: 'egbac_isl_ch2_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Core Principles of Islamic Economics: Prohibition of Riba, Gharar, and Unjust Enrichment",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ أصول ومبادئ الاقتصاد الإسلامي: تحريم الربا والغرر والاحتكار وأكل أموال الناس بالباطل",
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
        id: 'egbac_isl_ch2_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of The Developmental Waqf (Endowment) System: Funding Healthcare, Academia, and Scientific Innovation",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ نظام الوقف الإسلامي التنموي: تمويل المستشفيات والمؤسسات التعليمية ورعاية البحث العلمي",
        summaryEn: "Comprehensive conceptual and applied mastery of The Developmental Waqf (Endowment) System: Funding Healthcare, Academia, and Scientific Innovation, Corporate Ethical Responsibility and Consumer Protection in Islamic Commercial Law, and Digital Economy, Cryptocurrencies, and Smart Contracts: Islamic Legal Perspectives.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ نظام الوقف الإسلامي التنموي: تمويل المستشفيات والمؤسسات التعليمية ورعاية البحث العلمي، المسؤولية الأخلاقية للشركات، حماية المستهلك، ونظام الحسبة في الرقابة على الأسواق، و الاقتصاد الرقمي، العملات المشفرة، والعقود الذكية من منظور الفقه الإسلامي المعاصر.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. The Developmental Waqf (Endowment) System: Funding Healthcare, Academia, and Scientific Innovation\nWaqf is an institutional perpetual charitable trust whose principal asset is preserved while its revenues fund public welfare in perpetuity.\n\nHistorically, Islamic endowments financed cutting-edge universities (Al-Azhar, Nizamiyyah) and advanced specialized hospitals (Bimaristans) free of charge.\n\nModern cash Waqf and innovation endowments provide non-governmental sustainable venture funding for scientific research, green technology, and poverty alleviation.\n\n#### 2. Corporate Ethical Responsibility and Consumer Protection in Islamic Commercial Law\nIslamic commercial jurisprudence mandates strict honesty in trade, forbidding false advertising, concealed defects, and market price manipulation.\n\nThe traditional Hisbah institution functioned as an autonomous market oversight ombudsman to verify weights, measures, quality, and fair competition.\n\nCorporate Social Responsibility (CSR) in Islamic jurisprudence is a non-negotiable legal obligation rather than discretionary philanthropy, bounded by preventing societal harm.\n\n#### 3. Digital Economy, Cryptocurrencies, and Smart Contracts: Islamic Legal Perspectives\nIslamic jurisprudence evaluates digital trade and fintech based on tangible utility, transparency, and elimination of deception.\n\nSmart self-executing blockchain contracts are validated if their underlying parameters fulfill Islamic contractual mutual consent and clarity.\n\nJuridical consensus cautions against speculative cryptocurrencies lacking sovereign backing and intrinsic value due to extreme volatility, while encouraging regulated sovereign digital currencies.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. نظام الوقف الإسلامي التنموي: تمويل المستشفيات والمؤسسات التعليمية ورعاية البحث العلمي\nالوقف هو حبس الأصل وتسبيل المنفعة لوجوه الخير والبر، ليكون صدقة جارية ومصدراً تنموياً مستداماً على مر الأجيال.\n\nموّل نظام الوقف كبرى الجامعات التاريخية كالأزهر والمستشفيات المتقدمة (البيمارستانات) وقدم العلاج والتعليم المجاني للجميع.\n\nيوفر الوقف النقدي والاستثماري المعاصر نموذجاً متطوراً لتمويل البحث العلمي والتكنولوجي والمشروعات الاجتماعية بعيداً عن أعباء الموازنات.\n\n#### ٢. المسؤولية الأخلاقية للشركات، حماية المستهلك، ونظام الحسبة في الرقابة على الأسواق\nيفرض الفقه التجاري الإسلامي الصدق والأمانة في البيع، ويجرم الغش والتدليس وإخفاء العيوب والتلاعب بأسعار السلع.\n\nكان نظام الحسبة جهازاً رقابياً لحماية الأسواق، وضبط الموازين والمكاييل، ومنع الاحتكار، وحماية حقوق المستهلك والمصالح العامة.\n\n#### ٢. الاقتصاد الرقمي، العملات المشفرة، والعقود الذكية من منظور الفقه الإسلامي المعاصر\nيقوم التقييم الفقهي للتكنولوجيا المالية والاقتصاد الرقمي على معايير المنفعة الحقيقية والشفافية التامة وخلوها من الغرر.\n\nتتوافق العقود الذكية المؤتمتة عبر البلوكشين مع الشريعة إذا توافر فيها الرضا الصريح والوضوح التام وانعدمت فيها شروط الربا.\n\nتحذر المجامع الفقهية من العملات المشفرة المضاربية شديدة التذبذب المفتقرة لضمانات اقتصادية، بينما تؤيد العملات الرقمية الرسمية المدعومة بأصول.",
        formulas: [
          {
            labelEn: "The Developmental Waqf (Endowment) System: Funding Healthcare, Academia, and Scientific Innovation",
            labelAr: "نظام الوقف الإسلامي التنموي: تمويل المستشفيات والمؤسسات التعليمية ورعاية البحث العلمي",
            latex: "\\text{Core Rule: } The Developmental Waqf (Endowm"
          },
          {
            labelEn: "Corporate Ethical Responsibility and Consumer Protection in Islamic Commercial Law",
            labelAr: "المسؤولية الأخلاقية للشركات، حماية المستهلك، ونظام الحسبة في الرقابة على الأسواق",
            latex: "\\text{Applied Maxim: } Corporate Ethical Responsibili"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Islamic Studies",
          bookTitleAr: "التربية الدينية الإسلامية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-ISL-CH02-L2",
          pageRange: '55-80'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of The Developmental Waqf (Endowment) System: Funding Healthcare, Academia, and Scientific Innovation",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ نظام الوقف الإسلامي التنموي: تمويل المستشفيات والمؤسسات التعليمية ورعاية البحث العلمي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-ISL-CH02-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of The Developmental Waqf (Endowment) System: Funding Healthcare, Academia, and Scientific Innovation",
            "Apply analytical thinking to Corporate Ethical Responsibility and Consumer Protection in Islamic Commercial Law",
            "Synthesize ethical resolutions for Digital Economy, Cryptocurrencies, and Smart Contracts: Islamic Legal Perspectives"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ نظام الوقف الإسلامي التنموي: تمويل المستشفيات والمؤسسات التعليمية ورعاية البحث العلمي",
            "تطبيق التفكير التحليلي الناقد في مسألة المسؤولية الأخلاقية للشركات، حماية المستهلك، ونظام الحسبة في الرقابة على الأسواق",
            "بناء رؤى أخلاقية متكاملة لـ الاقتصاد الرقمي، العملات المشفرة، والعقود الذكية من منظور الفقه الإسلامي المعاصر"
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
            questionEn: "What is the accredited curriculum determination regarding The Developmental Waqf (Endowment) System: Funding Healthcare, Academia, and Scientific Innovation?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (نظام الوقف الإسلامي التنموي: تمويل المستشفيات والمؤسسات التعليمية ورعاية البحث العلمي)؟",
            solutionEn: "Waqf is an institutional perpetual charitable trust whose principal asset is preserved while its revenues fund public welfare in perpetuity.",
            solutionAr: "الوقف هو حبس الأصل وتسبيل المنفعة لوجوه الخير والبر، ليكون صدقة جارية ومصدراً تنموياً مستداماً على مر الأجيال."
          }
        },
        worksheet: {
          id: 'egbac_isl_ch2_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of The Developmental Waqf (Endowment) System: Funding Healthcare, Academia, and Scientific Innovation",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ نظام الوقف الإسلامي التنموي: تمويل المستشفيات والمؤسسات التعليمية ورعاية البحث العلمي",
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
    databank: egBacIslamicCh2Databank,
    solvedExamples: egBacIslamicCh2SolvedExamples,
    exerciseProblems: egBacIslamicCh2Exercises
  },
  {
    id: 'egbac_isl_ch3',
    chapterNumber: 3,
    titleEn: "Module 3: Contributions of Islamic Civilization to the Scientific Method and Global Science",
    titleAr: "الوحدة الثالثة: إسهامات الحضارة الإسلامية في المنهج التجريبي وتطور العلوم العالمية",
    descriptionEn: "Pioneering empirical scientific methodology in Islamic civilization: Ibn al-Haytham in optics, Al-Khwarizmi in algebra, Al-Biruni in geodesy, Ibn Sina in medicine, and the House of Wisdom (Bayt al-Hikmah).",
    descriptionAr: "تأسيس المنهج التجريبي الاستقرائي في الحضارة الإسلامية: ابن الهيثم والبصريات، الخوارزمي والجبر والخوارزميات، البيروني وعلوم الفلك، ابن سينا في الطب، وبيت الحكمة ببغداد.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_isl_ch3_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Invention of the Empirical Scientific Method: Ibn al-Haytham (Alhazen) and Modern Optics",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ تأسيس المنهج العلمي التجريبي الاستقرائي: الحسن بن الهيثم وثورة علم البصريات الحديث",
        summaryEn: "Comprehensive conceptual and applied mastery of Invention of the Empirical Scientific Method: Ibn al-Haytham (Alhazen) and Modern Optics, Translation Movement and the House of Wisdom (Bayt al-Hikmah) in Baghdad: Cross-Cultural Synergy, and Innovations in Mathematics and Astronomy: Al-Khwarizmi's Algebra and Al-Biruni's Geodesy.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ تأسيس المنهج العلمي التجريبي الاستقرائي: الحسن بن الهيثم وثورة علم البصريات الحديث، حركة الترجمة وبيت الحكمة ببغداد: التلاقح الحضاري، رعاية العلوم، والتوليد المعرفي الإبداعي، و ابتكارات الرياضيات والفلك: الخوارزمي وتأسيس الجبر، والبيروني في قياس محيط الأرض بدقة مذهلة.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Invention of the Empirical Scientific Method: Ibn al-Haytham (Alhazen) and Modern Optics\nIbn al-Haytham pioneered the modern experimental scientific method by formulating hypotheses and validating them through controlled observation.\n\nIn his magnum opus \"Kitab al-Manazir\" (Book of Optics), Ibn al-Haytham proved that vision occurs by light rays reflecting from objects into the eye.\n\nIbn al-Haytham's epistemological insistence on systematic doubt and reproducibility laid the conceptual bedrock of the global scientific revolution.\n\n#### 2. Translation Movement and the House of Wisdom (Bayt al-Hikmah) in Baghdad: Cross-Cultural Synergy\nThe House of Wisdom (Bayt al-Hikmah) in Abbasid Baghdad was a monumental global academy translating and advancing universal scientific knowledge.\n\nMuslim scholars did not merely preserve Greek, Persian, and Indian texts; they critically critiqued, corrected, and vastly expanded them.\n\nThe Abbasid translation movement demonstrated Islam's profound intellectual openness, viewing truth and wisdom as universal human heritage.\n\n#### 3. Innovations in Mathematics and Astronomy: Al-Khwarizmi's Algebra and Al-Biruni's Geodesy\nMuhammad ibn Musa al-Khwarizmi founded Algebra as an independent discipline and introduced the concept of algorithms to mathematics.\n\nAbu Rayhan al-Biruni accurately measured the Earth's radius using trigonometric equations from a mountain peak, achieving 99% accuracy.\n\nThe development of decimal positional notation and the operational zero by Muslim mathematicians catalyzed modern global science and computing.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. تأسيس المنهج العلمي التجريبي الاستقرائي: الحسن بن الهيثم وثورة علم البصريات الحديث\nيعد الحسن بن الهيثم المؤسس الأول للمنهج العلمي التجريبي الحديث بجمعه بين الفرض النظري والتحقق بالتجربة المنضبطة.\n\nأثبت ابن الهيثم في كتابه الخالد \"المناظر\" بطلان نظرية الانبعاث اليونانية، مبرهناً أن الرؤية تتم بانعكاس أشعة الضوء من الأجسام إلى العين.\n\nأسس ابن الهيثم لفضيلة الشك المنهجي العلمي والتأكد من النتائج بالاختبار، مما مهد لانطلاق عصر النهضة العلمية العالمية.\n\n#### ٢. حركة الترجمة وبيت الحكمة ببغداد: التلاقح الحضاري، رعاية العلوم، والتوليد المعرفي الإبداعي\nكان بيت الحكمة ببغداد أكاديمية عالمية كبرى للترجمة والبحث العلمي جمعت علماء من مختلف الثقافات والأديان لرعاية المعرفة الإنسانية.\n\nلم يكتفِ علماء المسلمين بنقل التراث الإغريقي والفارسي والهندي، بل نقحوه وصححوا أخطاءه وأضافوا إليه ابتكارات أصيلة غير مسبوقة.\n\n#### ٢. ابتكارات الرياضيات والفلك: الخوارزمي وتأسيس الجبر، والبيروني في قياس محيط الأرض بدقة مذهلة\nأسس العالم محمد بن موسى الخوارزمي علم الجبر كفرع رياضي مستقل، وابتكر مفهوم الخوارزميات (Algorithms) أساس الحوسبة الحديثة.\n\nقاس أبو الريحان البيروني محيط الأرض ونصف قطرها بحساب مثلثي فلكي عبقري من قمة جبل بدقة تطابق 99% من القياسات الفضائية المعاصرة.\n\nأحدث تطوير النظام العشري واستخدام الصفر كقيمة حسابية ثورة رياضية غيرت مسار العلوم والتجارة والحوسبة في تاريخ البشرية.",
        formulas: [
          {
            labelEn: "Invention of the Empirical Scientific Method: Ibn al-Haytham (Alhazen) and Modern Optics",
            labelAr: "تأسيس المنهج العلمي التجريبي الاستقرائي: الحسن بن الهيثم وثورة علم البصريات الحديث",
            latex: "\\text{Core Rule: } Invention of the Empirical Sci"
          },
          {
            labelEn: "Translation Movement and the House of Wisdom (Bayt al-Hikmah) in Baghdad: Cross-Cultural Synergy",
            labelAr: "حركة الترجمة وبيت الحكمة ببغداد: التلاقح الحضاري، رعاية العلوم، والتوليد المعرفي الإبداعي",
            latex: "\\text{Applied Maxim: } Translation Movement and the H"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Islamic Studies",
          bookTitleAr: "التربية الدينية الإسلامية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-ISL-CH03-L1",
          pageRange: '75-100'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Invention of the Empirical Scientific Method: Ibn al-Haytham (Alhazen) and Modern Optics",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ تأسيس المنهج العلمي التجريبي الاستقرائي: الحسن بن الهيثم وثورة علم البصريات الحديث",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-ISL-CH03-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Invention of the Empirical Scientific Method: Ibn al-Haytham (Alhazen) and Modern Optics",
            "Apply analytical thinking to Translation Movement and the House of Wisdom (Bayt al-Hikmah) in Baghdad: Cross-Cultural Synergy",
            "Synthesize ethical resolutions for Innovations in Mathematics and Astronomy: Al-Khwarizmi's Algebra and Al-Biruni's Geodesy"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ تأسيس المنهج العلمي التجريبي الاستقرائي: الحسن بن الهيثم وثورة علم البصريات الحديث",
            "تطبيق التفكير التحليلي الناقد في مسألة حركة الترجمة وبيت الحكمة ببغداد: التلاقح الحضاري، رعاية العلوم، والتوليد المعرفي الإبداعي",
            "بناء رؤى أخلاقية متكاملة لـ ابتكارات الرياضيات والفلك: الخوارزمي وتأسيس الجبر، والبيروني في قياس محيط الأرض بدقة مذهلة"
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
            questionEn: "What is the accredited curriculum determination regarding Invention of the Empirical Scientific Method: Ibn al-Haytham (Alhazen) and Modern Optics?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (تأسيس المنهج العلمي التجريبي الاستقرائي: الحسن بن الهيثم وثورة علم البصريات الحديث)؟",
            solutionEn: "Ibn al-Haytham pioneered the modern experimental scientific method by formulating hypotheses and validating them through controlled observation.",
            solutionAr: "يعد الحسن بن الهيثم المؤسس الأول للمنهج العلمي التجريبي الحديث بجمعه بين الفرض النظري والتحقق بالتجربة المنضبطة."
          }
        },
        worksheet: {
          id: 'egbac_isl_ch3_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Invention of the Empirical Scientific Method: Ibn al-Haytham (Alhazen) and Modern Optics",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ تأسيس المنهج العلمي التجريبي الاستقرائي: الحسن بن الهيثم وثورة علم البصريات الحديث",
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
        id: 'egbac_isl_ch3_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Medicine, Pharmacology, and Institutional Hospitals: Ibn Sina (Avicenna) and Al-Zahrawi",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ تطور الطب والصيدلة وتأسيس المستشفيات المتقدمة: ابن سينا في القانون، والزهراوي في الجراحة",
        summaryEn: "Comprehensive conceptual and applied mastery of Medicine, Pharmacology, and Institutional Hospitals: Ibn Sina (Avicenna) and Al-Zahrawi, Sociology, Historical Philosophy, and Geography: Ibn Khaldun's Muqaddimah and Al-Idrisi, and Transmission of Islamic Scientific Heritage to Medieval Europe and the Dawn of Renaissance.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ تطور الطب والصيدلة وتأسيس المستشفيات المتقدمة: ابن سينا في القانون، والزهراوي في الجراحة، علم الاجتماع، فلسفة التاريخ، والجغرافيا: ابن خلدون ومقدمته التأسيسية، والإدريسي ورسم الخرائط، و انتقال التراث العلمي الإسلامي إلى أوروبا عبر الأندلس وصقلية وتأسيس عصر النهضة الأوروبية.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Medicine, Pharmacology, and Institutional Hospitals: Ibn Sina (Avicenna) and Al-Zahrawi\nIbn Sina authored \"The Canon of Medicine\" (Al-Qanun fi al-Tibb), which served as the preeminent medical textbook in European universities for centuries.\n\nAbu al-Qasim al-Zahrawi pioneered modern surgical instruments, inventing over 200 surgical tools and introducing dissolving catgut sutures.\n\nIslamic Bimaristans established the earliest integrated public hospital model, featuring triage, hygiene isolation wards, and psychiatric therapeutic care.\n\n#### 2. Sociology, Historical Philosophy, and Geography: Ibn Khaldun's Muqaddimah and Al-Idrisi\nIbn Khaldun founded Sociology and the philosophy of history in his landmark work \"Al-Muqaddimah\", analyzing civilizational rise and fall.\n\nAl-Sharif al-Idrisi created the most comprehensive and accurate world map of the Middle Ages, recording geographical coordinates and climate zones.\n\nIbn Khaldun's conceptualization of social cohesion (\"Asabiyyah\") and economic dynamics anticipated modern political science and socio-economic analysis.\n\n#### 3. Transmission of Islamic Scientific Heritage to Medieval Europe and the Dawn of Renaissance\nIslamic scholarship was transmitted to Europe primarily through translation centers in Muslim Spain (Cordoba, Toledo) and Norman Sicily.\n\nEuropean universities in Montpellier, Padua, and Oxford built their medical, scientific, and philosophical curricula on translated Arabic texts.\n\nRecognizing Islamic contributions to world science fosters global intercultural respect, proving that scientific progress is a collaborative human continuity.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. تطور الطب والصيدلة وتأسيس المستشفيات المتقدمة: ابن سينا في القانون، والزهراوي في الجراحة\nألّف ابن سينا موسوعة \"القانون في الطب\" التي ظلت المرجع التعليمي الأساسي في كليات الطب بأوروبا لأكثر من خمسة قرون.\n\nابتكر أبو القاسم الزهراوي في كتابه \"التصريف\" أكثر من 200 أداة جراحية وخيوط الجراحة القابلة للذوبان من أمعاء الحيوانات.\n\nأسست البيمارستانات الإسلامية نموذج المستشفى الجامعي الحديث بأقسام متخصصة وعزل للأمراض المعدية ورعاية طبية ونفسية مجانية شاملة.\n\n#### ٢. علم الاجتماع، فلسفة التاريخ، والجغرافيا: ابن خلدون ومقدمته التأسيسية، والإدريسي ورسم الخرائط\nأسس ابن خلدون علم الاجتماع وفلسفة التاريخ في كتابه الرائد \"المقدمة\"، واضعاً قوانين حركة العمران البشري وصعود الدول وسقوطها.\n\nرسم الشريف الإدريسي خريطة العالم الأكثر دقة وشمولاً في العصور الوسطى في كتابه \"نزهة المشتاق\"، محدداً الأقاليم والمسافات.\n\n#### ٢. انتقال التراث العلمي الإسلامي إلى أوروبا عبر الأندلس وصقلية وتأسيس عصر النهضة الأوروبية\nانتقلت العلوم الإسلامية إلى أوروبا عبر مراكز الترجمة في الأندلس (قرطبة وطليطلة) وصقلية، مشعلةً شرارة النهضة الأوروبية.\n\nاعتمدت الجامعات الأوروبية الأولى في بولونيا وبادوا وأكسفورد على ترجمات أمهات الكتب العلمية والفلسفية والطبية العربية.\n\nيبرهن الاعتراف بدور الحضارة الإسلامية العلمي على أن التطور الإنساني سلسلة معرفية تراكمية متكاملة تتجاوز التعصب والعرقية.",
        formulas: [
          {
            labelEn: "Medicine, Pharmacology, and Institutional Hospitals: Ibn Sina (Avicenna) and Al-Zahrawi",
            labelAr: "تطور الطب والصيدلة وتأسيس المستشفيات المتقدمة: ابن سينا في القانون، والزهراوي في الجراحة",
            latex: "\\text{Core Rule: } Medicine, Pharmacology, and In"
          },
          {
            labelEn: "Sociology, Historical Philosophy, and Geography: Ibn Khaldun's Muqaddimah and Al-Idrisi",
            labelAr: "علم الاجتماع، فلسفة التاريخ، والجغرافيا: ابن خلدون ومقدمته التأسيسية، والإدريسي ورسم الخرائط",
            latex: "\\text{Applied Maxim: } Sociology, Historical Philosop"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Islamic Studies",
          bookTitleAr: "التربية الدينية الإسلامية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-ISL-CH03-L2",
          pageRange: '90-115'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Medicine, Pharmacology, and Institutional Hospitals: Ibn Sina (Avicenna) and Al-Zahrawi",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ تطور الطب والصيدلة وتأسيس المستشفيات المتقدمة: ابن سينا في القانون، والزهراوي في الجراحة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-ISL-CH03-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Medicine, Pharmacology, and Institutional Hospitals: Ibn Sina (Avicenna) and Al-Zahrawi",
            "Apply analytical thinking to Sociology, Historical Philosophy, and Geography: Ibn Khaldun's Muqaddimah and Al-Idrisi",
            "Synthesize ethical resolutions for Transmission of Islamic Scientific Heritage to Medieval Europe and the Dawn of Renaissance"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ تطور الطب والصيدلة وتأسيس المستشفيات المتقدمة: ابن سينا في القانون، والزهراوي في الجراحة",
            "تطبيق التفكير التحليلي الناقد في مسألة علم الاجتماع، فلسفة التاريخ، والجغرافيا: ابن خلدون ومقدمته التأسيسية، والإدريسي ورسم الخرائط",
            "بناء رؤى أخلاقية متكاملة لـ انتقال التراث العلمي الإسلامي إلى أوروبا عبر الأندلس وصقلية وتأسيس عصر النهضة الأوروبية"
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
            questionEn: "What is the accredited curriculum determination regarding Medicine, Pharmacology, and Institutional Hospitals: Ibn Sina (Avicenna) and Al-Zahrawi?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (تطور الطب والصيدلة وتأسيس المستشفيات المتقدمة: ابن سينا في القانون، والزهراوي في الجراحة)؟",
            solutionEn: "Ibn Sina authored \"The Canon of Medicine\" (Al-Qanun fi al-Tibb), which served as the preeminent medical textbook in European universities for centuries.",
            solutionAr: "ألّف ابن سينا موسوعة \"القانون في الطب\" التي ظلت المرجع التعليمي الأساسي في كليات الطب بأوروبا لأكثر من خمسة قرون."
          }
        },
        worksheet: {
          id: 'egbac_isl_ch3_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Medicine, Pharmacology, and Institutional Hospitals: Ibn Sina (Avicenna) and Al-Zahrawi",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ تطور الطب والصيدلة وتأسيس المستشفيات المتقدمة: ابن سينا في القانون، والزهراوي في الجراحة",
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
    databank: egBacIslamicCh3Databank,
    solvedExamples: egBacIslamicCh3SolvedExamples,
    exerciseProblems: egBacIslamicCh3Exercises
  },
  {
    id: 'egbac_isl_ch4',
    chapterNumber: 4,
    titleEn: "Module 4: Contemporary Ijtihad, Artificial Intelligence Ethics, the Madinah Charter, and Global Citizenship",
    titleAr: "الوحدة الرابعة: الاجتهاد المعاصر، أخلاقيات الذكاء الاصطناعي، وثيقة المدينة، والمواطنة العالمية",
    descriptionEn: "Governing algorithmic systems, generative AI, and autonomous technologies through Sharia objectives, universal constitutionalism from the Madinah Charter, combating digital extremism, and global citizenship.",
    descriptionAr: "أخلاقيات الذكاء الاصطناعي والأنظمة الرقمية ذاتية القرار، حماية الخصوصية الرقمية، وثيقة المدينة وإلهام الدستور المدني، فقه التعايش ومكافحة التطرف، والمواطنة العالمية المشتركة.",
    isFullyEquipped: true,
    lessons: [
      {
        id: 'egbac_isl_ch4_l1',
        titleEn: "Lesson 1: Foundations, Principles, and Analysis of Artificial Intelligence Ethics, Algorithmic Bias, and Autonomous Systems in Sharia Jurisprudence",
        titleAr: "الدرس الأول: الأصول والمبادئ والتحليل لـ أخلاقيات الذكاء الاصطناعي، التحيز الخوارزمي، والأنظمة المستقلة في ضوء مقاصد الشريعة",
        summaryEn: "Comprehensive conceptual and applied mastery of Artificial Intelligence Ethics, Algorithmic Bias, and Autonomous Systems in Sharia Jurisprudence, Combating Deepfakes, Algorithmic Disinformation, and Protecting Digital Identity and Honor, and The Madinah Charter as a Universal Template for Pluralism, Human Dignity, and Modern Constitutionalism.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ أخلاقيات الذكاء الاصطناعي، التحيز الخوارزمي، والأنظمة المستقلة في ضوء مقاصد الشريعة، مكافحة التزييف العميق (Deepfake)، التضليل الرقمي، وصيانة الهوية والسمعة الإنسانية، و وثيقة المدينة المنورة كنموذج ملهم للدستور المدني الحديث، التعددية، والعدالة التعاقدية.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Artificial Intelligence Ethics, Algorithmic Bias, and Autonomous Systems in Sharia Jurisprudence\nAI technologies are valid instrumental tools under Sharia provided they serve human welfare, justice, and terrestrial flourishing.\n\nSharia ethics demands rigorous human oversight, algorithmic fairness, and elimination of systemic bias that discriminates against individuals.\n\nLegal accountability in autonomous systems (such as autonomous vehicles and robotic surgery) rests upon human engineers, deployers, and operational authorities.\n\n#### 2. Combating Deepfakes, Algorithmic Disinformation, and Protecting Digital Identity and Honor\nGenerating deepfakes to forge identities, invent defamatory speech, or simulate compromising footage is categorically forbidden in Sharia.\n\nFabricating digital forgeries violates the core objective of Preserving Honor and Reputation (Hifz al-'Ird), carrying severe moral and legal sanctions.\n\nDigital platforms are ethically obligated to deploy authentication watermarks and cryptographic signatures to detect and neutralize synthetic falsehood.\n\n#### 3. The Madinah Charter as a Universal Template for Pluralism, Human Dignity, and Modern Constitutionalism\nThe Madinah Charter demonstrates that an Islamic polity is constitutionally pluralistic, protecting religious communities within equal civic solidarity.\n\nModern constitutionalism in Muslim majority societies derives legitimacy from shared citizenship, democratic rule of law, and institutional justice.\n\nThe Charter proves that early Islamic statehood was contractually negotiated rather than theocratically autocratic, respecting diversity as a divine norm.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. أخلاقيات الذكاء الاصطناعي، التحيز الخوارزمي، والأنظمة المستقلة في ضوء مقاصد الشريعة\nتعد تقنيات الذكاء الاصطناعي أدوات تقنية مباحة ونافعة شرعاً ما دامت موجهة لخدمة الإنسانية والعدالة وعمارة الأرض.\n\nتوجب الأخلاقيات الإسلامية بقاء الإشراف البشري الكامل، ونزاهة الخوارزميات، ومنع التحيز والتمييز ضد الفئات المجتمعية.\n\nتقرر المسؤولية الفقهية في الأنظمة ذاتية القرار أن التبعة القانونية والضمان يقعان دائماً على المبرمجين والمصنعين والمستخدمين من البشر.\n\n#### ٢. مكافحة التزييف العميق (Deepfake)، التضليل الرقمي، وصيانة الهوية والسمعة الإنسانية\nيحرم قطعاً توليد مقاطع التزييف العميق لتلفيق الأقوال أو فبركة الفيديوهات لما فيه من الكذب والبهتان وهدم الثقة العامة.\n\nيمثل التزييف الرقمي انتهاكاً فادحاً لمقصد حفظ العرض والسمعة، ويستوجب العقوبات الرادعة حمايةً لحرمات المجتمع والأفراد.\n\n#### ٢. وثيقة المدينة المنورة كنموذج ملهم للدستور المدني الحديث، التعددية، والعدالة التعاقدية\nتثبت وثيقة المدينة أن النظام السياسي الإسلامي يقوم على التعددية الدستورية وحماية حقوق كافة المكونات ضمن مواطنة متكافئة.\n\nتستلهم الدساتير المعاصرة من وثيقة المدينة مبدأ سيادة القانون، وتكافؤ الفرص، وتجريم التمييز على أساس الدين أو العرق.\n\nتؤكد وثيقة المدينة أن الدولة في الإسلام نشأت تعاقدية مدنية تقوم على التراضي والمشترك الوطني، متجاوزة الاستبداد الأحادي.",
        formulas: [
          {
            labelEn: "Artificial Intelligence Ethics, Algorithmic Bias, and Autonomous Systems in Sharia Jurisprudence",
            labelAr: "أخلاقيات الذكاء الاصطناعي، التحيز الخوارزمي، والأنظمة المستقلة في ضوء مقاصد الشريعة",
            latex: "\\text{Core Rule: } Artificial Intelligence Ethics"
          },
          {
            labelEn: "Combating Deepfakes, Algorithmic Disinformation, and Protecting Digital Identity and Honor",
            labelAr: "مكافحة التزييف العميق (Deepfake)، التضليل الرقمي، وصيانة الهوية والسمعة الإنسانية",
            latex: "\\text{Applied Maxim: } Combating Deepfakes, Algorithm"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Islamic Studies",
          bookTitleAr: "التربية الدينية الإسلامية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-ISL-CH04-L1",
          pageRange: '110-135'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 1: Foundations, Principles, and Analysis of Artificial Intelligence Ethics, Algorithmic Bias, and Autonomous Systems in Sharia Jurisprudence",
          titleAr: "خطة الدرس التوجيهية: الدرس الأول: الأصول والمبادئ والتحليل لـ أخلاقيات الذكاء الاصطناعي، التحيز الخوارزمي، والأنظمة المستقلة في ضوء مقاصد الشريعة",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-ISL-CH04-L1",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Artificial Intelligence Ethics, Algorithmic Bias, and Autonomous Systems in Sharia Jurisprudence",
            "Apply analytical thinking to Combating Deepfakes, Algorithmic Disinformation, and Protecting Digital Identity and Honor",
            "Synthesize ethical resolutions for The Madinah Charter as a Universal Template for Pluralism, Human Dignity, and Modern Constitutionalism"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ أخلاقيات الذكاء الاصطناعي، التحيز الخوارزمي، والأنظمة المستقلة في ضوء مقاصد الشريعة",
            "تطبيق التفكير التحليلي الناقد في مسألة مكافحة التزييف العميق (Deepfake)، التضليل الرقمي، وصيانة الهوية والسمعة الإنسانية",
            "بناء رؤى أخلاقية متكاملة لـ وثيقة المدينة المنورة كنموذج ملهم للدستور المدني الحديث، التعددية، والعدالة التعاقدية"
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
            questionEn: "What is the accredited curriculum determination regarding Artificial Intelligence Ethics, Algorithmic Bias, and Autonomous Systems in Sharia Jurisprudence?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (أخلاقيات الذكاء الاصطناعي، التحيز الخوارزمي، والأنظمة المستقلة في ضوء مقاصد الشريعة)؟",
            solutionEn: "AI technologies are valid instrumental tools under Sharia provided they serve human welfare, justice, and terrestrial flourishing.",
            solutionAr: "تعد تقنيات الذكاء الاصطناعي أدوات تقنية مباحة ونافعة شرعاً ما دامت موجهة لخدمة الإنسانية والعدالة وعمارة الأرض."
          }
        },
        worksheet: {
          id: 'egbac_isl_ch4_l1_ws',
          titleEn: "Worksheet: Lesson 1: Foundations, Principles, and Analysis of Artificial Intelligence Ethics, Algorithmic Bias, and Autonomous Systems in Sharia Jurisprudence",
          titleAr: "ورقة عمل: الدرس الأول: الأصول والمبادئ والتحليل لـ أخلاقيات الذكاء الاصطناعي، التحيز الخوارزمي، والأنظمة المستقلة في ضوء مقاصد الشريعة",
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
        id: 'egbac_isl_ch4_l2',
        titleEn: "Lesson 2: Contemporary Applications and Real-World Evaluation of Civilizational and Inter-Faith Dialogue: Refuting the \"Clash of Civilizations\" Theory",
        titleAr: "الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ حوار الحضارات والأديان: تفنيد مقولة \"صدام الحضارات\" وتعزيز المشترك الإنساني العالمي",
        summaryEn: "Comprehensive conceptual and applied mastery of Civilizational and Inter-Faith Dialogue: Refuting the \"Clash of Civilizations\" Theory, Digital Sovereignty, Cybersecurity, and Privacy Protection from an Islamic Jurisprudential View, and Global Citizenship and Shared Ethical Responsibilities: Poverty Alleviation, Climate Action, and Relief.",
        summaryAr: "استيعاب مفاهيمي وتطبيقي شامل لـ حوار الحضارات والأديان: تفنيد مقولة \"صدام الحضارات\" وتعزيز المشترك الإنساني العالمي، السيادة الرقمية، الأمن السيبراني، وحرمة التجسس والخصوصية في الفضاء الإلكتروني، و المواطنة العالمية والالتزامات الأخلاقية المشتركة: مكافحة الفقر وتغير المناخ وإغاثة المنكوبين.",
        theoryContentEn: "### Academic Core Curriculum\n\n#### 1. Civilizational and Inter-Faith Dialogue: Refuting the \"Clash of Civilizations\" Theory\nThe Quran establishes human diversity as a purposeful divine design intended for mutual acquaintance and constructive collaboration (\"Li-ta'arafu\").\n\nIslamic scholarship actively refutes Samuel Huntington's \"Clash of Civilizations\" hypothesis, advocating intercultural dialogue and peaceful coexistence.\n\nEffective inter-faith dialogue focuses on shared moral imperatives—combatting poverty, disease, and global warming—while respecting theological uniqueness.\n\n#### 2. Digital Sovereignty, Cybersecurity, and Privacy Protection from an Islamic Jurisprudential View\nUnauthorized cyber-surveillance and hacking into private communications are strictly forbidden under the Quranic prohibition: \"Do not spy.\"\n\nSafeguarding critical national digital infrastructure and data sovereignty is a collective religious duty (Fard Kifayah) protecting the homeland.\n\nIslamic data ethics dictates that digital platforms cannot harvest, sell, or exploit individual user data without fully informed voluntary consent.\n\n#### 3. Global Citizenship and Shared Ethical Responsibilities: Poverty Alleviation, Climate Action, and Relief\nMuslims bear a global humanitarian obligation to aid victims of catastrophes, wars, and famines irrespective of their faith or geographic origin.\n\nCollaborating on international treaties to combat climate change, protect oceans, and eradicate poverty is a direct fulfillment of Quranic righteousness.\n\nThe Islamic worldview transcends narrow insularity, cultivating a compassionate global citizen who acts as an ambassador of mercy and justice for all creation.",
        theoryContentAr: "### المحتوى النظري والمنهجي المعتمد\n\n#### ١. حوار الحضارات والأديان: تفنيد مقولة \"صدام الحضارات\" وتعزيز المشترك الإنساني العالمي\nجعل القرآن التنوع البشري سنة كونية هادفة للتعارف والتكامل لا للصراع والتصادم: \"يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا\".\n\nيفند الفكر الإسلامي المستنير أطروحة \"صدام الحضارات\"، داعياً لحوار الحضارات والتثاقف البناء وتعزيز المشتركات الأخلاقية.\n\nيركز الحوار الحضاري والديني المعاصر على خدمة القضايا الإنسانية العادلة: مكافحة الفقر والأوبئة وأزمة المناخ مع احترام الخصوصية العقدية.\n\n#### ٢. السيادة الرقمية، الأمن السيبراني، وحرمة التجسس والخصوصية في الفضاء الإلكتروني\nيحرم التجسس الإلكتروني واختراق الحسابات والبيانات الشخصية للأفراد انطلاقاً من النهي القرآني القاطع: \"وَلَا تَجَسَّسُوا\".\n\nحماية البنية التحتية الرقمية والأمن السيبراني للدولة فريضة كفائية تحمي مصالح الأمة وسيادتها من الهجمات التخريبية.\n\n#### ٢. المواطنة العالمية والالتزامات الأخلاقية المشتركة: مكافحة الفقر وتغير المناخ وإغاثة المنكوبين\nيتحمل المسلم مسؤولية إنسانية عالمية في إغاثة المنكوبين وإعانة ضحايا الكوارث والحروب دون تمييز في الدين أو الجنس أو العرق.\n\nيعد التعاون الدولي للحد من الانبعاثات وحماية المحيطات ومكافحة الفقر استجابةً للأمر الإلهي: \"وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ\".\n\nيربي الإسلام الإنسان على أن يكون مواطناً عالمياً فاعلاً وسفيراً للرحمة والعدل لجميع المخلوقات: \"وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ\".",
        formulas: [
          {
            labelEn: "Civilizational and Inter-Faith Dialogue: Refuting the \"Clash of Civilizations\" Theory",
            labelAr: "حوار الحضارات والأديان: تفنيد مقولة \"صدام الحضارات\" وتعزيز المشترك الإنساني العالمي",
            latex: "\\text{Core Rule: } Civilizational and Inter-Faith"
          },
          {
            labelEn: "Digital Sovereignty, Cybersecurity, and Privacy Protection from an Islamic Jurisprudential View",
            labelAr: "السيادة الرقمية، الأمن السيبراني، وحرمة التجسس والخصوصية في الفضاء الإلكتروني",
            latex: "\\text{Applied Maxim: } Digital Sovereignty, Cybersecu"
          }
        ],
        moeRef: {
          bookTitleEn: "Egyptian Baccalaureate Islamic Studies",
          bookTitleAr: "التربية الدينية الإسلامية للبكالوريا المصرية",
          grade: '12',
          term: 'Full Year',
          officialCode: "EGBAC-ISL-CH04-L2",
          pageRange: '125-150'
        },
        lessonPlan: {
          titleEn: "Instructional Plan: Lesson 2: Contemporary Applications and Real-World Evaluation of Civilizational and Inter-Faith Dialogue: Refuting the \"Clash of Civilizations\" Theory",
          titleAr: "خطة الدرس التوجيهية: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ حوار الحضارات والأديان: تفنيد مقولة \"صدام الحضارات\" وتعزيز المشترك الإنساني العالمي",
          gradeLevel: 'Grade 12',
          durationMinutes: 90,
          moeCode: "EGBAC-ISL-CH04-L2",
          bloomsObjectivesEn: [
            "Demonstrate understanding of Civilizational and Inter-Faith Dialogue: Refuting the \"Clash of Civilizations\" Theory",
            "Apply analytical thinking to Digital Sovereignty, Cybersecurity, and Privacy Protection from an Islamic Jurisprudential View",
            "Synthesize ethical resolutions for Global Citizenship and Shared Ethical Responsibilities: Poverty Alleviation, Climate Action, and Relief"
          ],
          bloomsObjectivesAr: [
            "إظهار الفهم والاستيعاب لـ حوار الحضارات والأديان: تفنيد مقولة \"صدام الحضارات\" وتعزيز المشترك الإنساني العالمي",
            "تطبيق التفكير التحليلي الناقد في مسألة السيادة الرقمية، الأمن السيبراني، وحرمة التجسس والخصوصية في الفضاء الإلكتروني",
            "بناء رؤى أخلاقية متكاملة لـ المواطنة العالمية والالتزامات الأخلاقية المشتركة: مكافحة الفقر وتغير المناخ وإغاثة المنكوبين"
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
            questionEn: "What is the accredited curriculum determination regarding Civilizational and Inter-Faith Dialogue: Refuting the \"Clash of Civilizations\" Theory?",
            questionAr: "ما هو التقرير المنهجي المعتمد لـ (حوار الحضارات والأديان: تفنيد مقولة \"صدام الحضارات\" وتعزيز المشترك الإنساني العالمي)؟",
            solutionEn: "The Quran establishes human diversity as a purposeful divine design intended for mutual acquaintance and constructive collaboration (\"Li-ta'arafu\").",
            solutionAr: "جعل القرآن التنوع البشري سنة كونية هادفة للتعارف والتكامل لا للصراع والتصادم: \"يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا\"."
          }
        },
        worksheet: {
          id: 'egbac_isl_ch4_l2_ws',
          titleEn: "Worksheet: Lesson 2: Contemporary Applications and Real-World Evaluation of Civilizational and Inter-Faith Dialogue: Refuting the \"Clash of Civilizations\" Theory",
          titleAr: "ورقة عمل: الدرس الثاني: التطبيقات المعاصرة والتقييم الواقعي لـ حوار الحضارات والأديان: تفنيد مقولة \"صدام الحضارات\" وتعزيز المشترك الإنساني العالمي",
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
    databank: egBacIslamicCh4Databank,
    solvedExamples: egBacIslamicCh4SolvedExamples,
    exerciseProblems: egBacIslamicCh4Exercises
  }
];

export const egBacIslamicBranch: Branch = {
  id: 'egbac_islamic',
  titleEn: "Egyptian Baccalaureate Islamic Studies",
  titleAr: "التربية الدينية الإسلامية للبكالوريا المصرية",
  categoryEn: "Egyptian Baccalaureate Humanities & Religion",
  categoryAr: "العلوم الإنسانية والتربية الدينية للبكالوريا",
  iconName: 'BookOpen',
  colorGradient: 'from-emerald-950 via-teal-900 to-green-900',
  chapters
};
