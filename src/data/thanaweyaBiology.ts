import type { Branch } from '../types/curriculum';
import { bioCh1Databank } from './databanks/thanaweya/bioCh1Databank';

export const thanaweyaBiologyBranch: Branch = {
  id: 'thanaweya_biology',
  titleEn: 'Biology (Natural Sciences)',
  titleAr: 'الأحياء (العلوم الطبيعية)',
  categoryEn: 'Natural Sciences',
  categoryAr: 'العلوم الطبيعية',
  iconName: 'Dna',
  colorGradient: 'from-purple-600 to-indigo-900',
  chapters: [
    {
      id: 'th_bio_ch1',
      chapterNumber: 1,
      titleEn: 'Support and Movement in Living Organisms',
      titleAr: 'الدعامة والحركة في الكائنات الحية',
      descriptionEn: 'Physiological and structural support in plants, the human skeletal system (axial and appendicular skeleton, joints, ligaments, tendons), and physiology of muscle contraction according to Huxley\'s sliding filament theory.',
      descriptionAr: 'الدعامة الفسيولوجية والتركيبية في النبات، الجهاز الهيكلي في الإنسان (الهيكل المحوري والطرفي، المفاصل، الأربطة والأوتار)، وآلية انقباض العضلات الهيكلية وفق نظرية الخيوط المنزلقة لهكسلي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_bio_l1',
          titleEn: 'Skeletal Support & Physiology of Muscular Contraction',
          titleAr: 'الدعامة الهيكلية وآلية الحركة وانقباض العضلات',
          summaryEn: 'Comprehensive study of plant turgidity and cell-wall depositions, the 206 bones of the human skeleton, vertebral column anatomy (33 vertebrae), synovial joints, motor units, and Huxley\'s sliding filament model powered by ATP and calcium ions.',
          summaryAr: 'دراسة شاملة لضغط الامتلاء والترسيبات الجدارية في النبات، عظام الهيكل العظمي البالغة 206 عظمة، العمود الفقري (33 فقرة)، المفاصل الزلالية، الوحدة الحركية، ونظرية الخيوط المنزلقة بالاستعانة بـ ATP وأيونات الكالسيوم.',
          theoryContentEn: `### 1. Support in Plants
- **Physiological Support (دعامة فسيولوجية):**
  - **Temporary** and affects the cell as a whole.
  - Water enters the sap vacuole by **osmosis**, increasing its volume and creating turgor pressure that pushes the protoplasm outwards against the cell wall.
  - The cell wall stretches and becomes tense, maintaining plant erectness. Lost upon wilting due to water loss.
- **Structural Support (دعامة تركيبية):**
  - **Permanent** support achieved by deposition of solid, impermeable, or rigid substances on cell walls:
    1. **Cellulose:** Deposited in collenchyma and sclerenchyma cells (provides flexibility and mechanical tensile strength).
    2. **Lignin:** Deposited on inner walls of xylem vessels and sclerenchyma stone cells (provides rigidity and hardness).
    3. **Suberin:** Deposited in walls of cork cells (prevents water loss).
    4. **Cutin:** Waxy layer coating outer walls of epidermal cells (minimizes transpiration).

### 2. The Human Skeletal System (206 Bones)
- **Axial Skeleton (الهيكل المحوري - 80 bones):**
  1. **Vertebral Column (33 vertebrae / 26 bones):**
     - Cervical (7 separate, movable).
     - Thoracic / Dorsal (12 separate, articulating with ribs).
     - Lumbar (5 separate, largest, facing abdominal cavity).
     - Sacral (5 fused as 1 bone).
     - Coccygeal (4 fused as 1 bone).
  2. **Skull (29 bones):** Facial (14) + Cranial (8 fused) + Associated bones (6 auditory ossicles + 1 hyoid).
  3. **Thoracic Cage (37 bones):** 12 pairs of ribs (first 10 pairs connected to sternum, 2 pairs floating ribs) + 1 sternum + 12 thoracic vertebrae.
- **Appendicular Skeleton (الهيكل الطرفي - 126 bones):**
  - Pectoral Girdle & Upper Limbs (64 bones).
  - Pelvic Girdle & Lower Limbs (62 bones).
- **Skeletal Connections:**
  - **Cartilages:** Avascular connective tissue nourished by diffusion from adjacent bone vessels.
  - **Joints:** Fibrous (immovable, e.g., skull sutures), Cartilaginous (limited movement, e.g., intervertebral discs), Synovial (freely movable with synovial fluid, e.g., elbow, shoulder, knee).
  - **Ligaments:** Strong, flexible bundles of collagen connective tissue connecting **bone to bone** at joints, determining the range of motion.
  - **Tendons:** Tough connective tissue cords connecting **muscle to bone** (e.g., Achilles tendon connecting gastrocnemius muscle to the calcaneus heel bone).

### 3. Physiology of Muscular Contraction (Huxley's Sliding Filament Model)
- **Neuromuscular Junction (Motor End Plate):**
  1. Action potential arrives at the axon terminal of a motor neuron.
  2. $\\text{Ca}^{2+}$ enters the terminal via voltage-gated channels, triggering exocytosis of **acetylcholine (ACh)** vesicles into the synaptic cleft.
  3. ACh binds to receptors on the sarcolemma, increasing $\\text{Na}^+$ permeability, leading to membrane **depolarization** and generation of a muscle impulse.
  4. The enzyme **acetylcholinesterase** hydrolyzes ACh into choline and acetic acid to restore the resting polarized state.
- **Huxley's Mechanism:**
  - Myosin thick filaments possess transverse cross-bridges extending under the influence of **$\\text{Ca}^{2+}$ ions** and energized by **$\\text{ATP}$**.
  - Cross-bridges hook onto actin thin filaments and pull them toward the center of the sarcomere ($H$-zone narrows or disappears, $I$-band shortens, while $A$-band remains unchanged in length).
  - Muscle relaxation requires $\\text{ATP}$ to detach the cross-bridges from actin.
- **Motor Unit (الوحدة الحركية):** The functional unit of skeletal muscle, consisting of one motor neuron and the group of muscle fibers it innervates (ranging from $5$ to $100$ fibers).
- **Muscle Fatigue & Muscle Spasm:**
  - **Fatigue:** Continuous muscle exertion reduces oxygen delivery, forcing anaerobic respiration and accumulation of **lactic acid**, accompanied by reduced $\\text{ATP}$ production.
  - **Spasm:** Severe deficiency of $\\text{ATP}$ prevents detachment of myosin cross-bridges, locking the muscle in sustained, painful involuntary contraction, or due to erroneous nerve impulses from the CNS.`,
          theoryContentAr: `### ١. الدعامة في النبات
- **الدعامة الفسيولوجية:**
  - دعامة **مؤقتة** تتناول الخلية ككل.
  - يدخل الماء إلى الفجوة العصارية بالخاصية **الأسموزية** فيزيد حجم العصير الخلوي ويضغط على البروتوبلازم ويدفعه للخارج نحو الجدار الخلوي.
  - يتمدد الجدار ويصبح متوتراً وتكتسب النبتة دعامتها واستقامتها، وتزول بفقده للماء أثناء الجفاف.
- **الدعامة التركيبية:**
  - دعامة **دائمة** تتم بترسيب مواد صلبة وقوية وغير منفذة للماء على جدر الخلايا:
    ١. **السليلوز:** يترسب في خلايا الأنسجة الكولنشيمية والاسكلرنشيمية (يكسبها المرونة والقوة الميكانيكية).
    ٢. **اللجنين:** يترسب على الجدر الداخلية للأوعية الخشبية والخلايا الحجرية (يكسبها الصلابة والقوة).
    ٣. **الكيوتين:** مادة شمعية تغطي بشرة الأوراق والسيقان لمنع فقدان الماء بالنتح.
    ٤. **السوبرين:** يترسب في جدران خلايا النسيج الفليني لمنع نفاذ الماء.

### ٢. الجهاز الهيكلي في الإنسان (٢٠٦ عظمة)
- **الهيكل المحوري (٨٠ عظمة):**
  ١. **العمود الفقري (٣٣ فقرة / ٢٦ عظمة):**
     - ٧ عنقية (متمفصلة).
     - ١٢ ظهرية (متمفصلة تتصل بالضلوع).
     - ٥ قطنية (متمفصلة وهي الأكبر وتواجه التجويف البطني).
     - ٥ عجزية (ملتحمة كعظمة واحدة).
     - ٤ عصعصية (ملتحمة كعظمة واحدة).
  ٢. **الجمجمة (٢٩ عظمة):** الجزء الوجهي (١٤) + الجزء المخي (٨ عظام ملتحمة بأطراف مسننة) + ملحقات (٦ عظيمات سمعية + عظم لامي).
  ٣. **القفص الصدري (٣٧ عظمة):** ١٢ زوجاً من الضلوع (١٠ أزواج متصلة بالقص + زوجان عائمان) + عظمة القص + ١٢ فقرة ظهرية.
- **الهيكل الطرفي (١٢٦ عظمة):**
  - الحزام الصدري والطرفان العلويان (٦٤ عظمة).
  - الحزام الحوضي والطرفان السفليان (٦٢ عظمة).
- **الروابط الهيكلية:**
  - **الغضاريف:** نسيج ضام خالٍ من الأوعية الدموية ويتغذى بالانتشار من العظام المجاورة.
  - **المفاصل:** ليفية (عديمة الحركة كعظام الجمجمة)، غضروفية (محدودة الحركة بين الفقرات)، زلالية (مرنة واسعة الحركة مبطنة بسائل زلالي مصلي كالكوع والركبة والكتف).
  - **الأربطة:** حزم من نسيج ضام ليفي قوي ومرن تصل **العظام بالعظام** عند المفاصل وتحدد اتجاه حركتها.
  - **الأوتار:** حبال ليفية قوية تصل **العضلات بالعظام** (مثل وتر أخيل الذي يربط العضلة التوأمية بعظمة الكعب).

### ٣. آلية انقباض العضلات (نظرية الخيوط المنزلقة لهكسلي)
- **التشابك العصبي العضلي:**
  ١. وصول السيال العصبي إلى نهايات العصب الحركي يفتح قنوات الكالسيوم.
  ٢. تتدفق أيونات $\\text{Ca}^{2+}$ وتفجر حويصلات النواقل العصبية لتحرير **الأسيتيل كولين**.
  ٣. يرتبط الأسيتيل كولين بمستقبلات غشاء الليفة العضلية (الساركوليما)، فتزداد نفاذية أيونات $\\text{Na}^+$ ويزول الاستقطاب (حالة إثارة).
  ٤. يحطم إنزيم **الكولين إستريز** الأسيتيل كولين ليعود الغشاء لحالة الاستقطاب والراحة.
- **آلية هكسلي:**
  - تمتد من خيوط الميوسين السميكة روابط مستعرضة بمساعدة **أيونات الكالسيوم** وتعمل كخطاطيف تسحب خيوط الأكتين الرفيعة بمساعدة طاقة **$\\text{ATP}$**.
  - تقترب خطوط $Z$ من بعضها، ويقل طول المنطقة المضيئة $I$، وشبه المضيئة $H$ (قد تنعدم في الانقباض التام)، بينما يظل طول المنطقة الداكنة $A$ ثابتاً دون تغير.
- **الوحدة الحركية:** الوحدة الوظيفية للعضلة الهيكلية، وتتكون من خلية عصبية حركية ومجموعة الألياف العضلية التي تغذيها (من ٥ إلى ١٠٠ ليفة عضلية).
- **الإجهاد العضلي والشد العضلي:**
  - **الإجهاد:** نقص الأكسجين نتيجة المجهود العنيف يؤدي للتنفس اللاهوائي وتراكم **حمض اللاكتيك** وقلة $\\text{ATP}$.
  - **الشد العضلي:** النقص الحاد في جزيئات $\\text{ATP}$ يمنع انفصال الروابط المستعرضة عن خيوط الأكتين فتظل العضلة منقبضة بصورة مؤلمة، أو بسبب سيالات عصبية غير صحيحة من المخ.`,
          formulas: [
            { labelEn: 'Bones in Adult Human Skeleton', labelAr: 'عدد عظام الهيكل العظمي البالغ', latex: 'N_{\\text{bones}} = 206' },
            { labelEn: 'Vertebral Column Count', labelAr: 'فقرات وعظام العمود الفقري', latex: '33\\,\\text{Vertebrae} \\to 26\\,\\text{Bones}' },
            { labelEn: 'Motor Unit Innervation Ratio', labelAr: 'نسبة التغذية في الوحدة الحركية', latex: '1\\,\\text{Neuron} : (5 - 100)\\,\\text{Muscle Fibers}' },
            { labelEn: 'Sliding Filament Invariant', labelAr: 'ثبات طول المنطقة الداكنة', latex: '\\Delta L_{\\text{A-band}} = 0' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Biology Textbook Grade 12',
            bookTitleAr: 'كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-BIO-CH1-L1',
            pageRange: 'pp. 1 - 36'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Skeletal Biomechanics & Huxley Sliding Filament Contraction',
            titleAr: 'خطة درس: الميكانيكا الحيوية الهيكلية وانقباض الخيوط المنزلقة لهكسلي',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-BIO-CH1-L1',
            bloomsObjectivesEn: [
              'Differentiate between physiological turgor support and structural cell-wall depositions in plants.',
              'Calculate total bone counts in adult humans and analyze the articulation of the 12 pairs of ribs.',
              'Evaluate the role of ATP and calcium ions in the attachment and detachment of myosin cross-bridges.'
            ],
            bloomsObjectivesAr: [
              'المقارنة بين الدعامة الفسيولوجية المؤقتة والدعامة التركيبية الدائمة في النبات.',
              'حساب عدد عظام الهيكل المحوري والطرفي وتحديد الفقرات المتصلة بالضلوع العائمة.',
              'تفسير الدور المزدوج لجزيئات ATP وأيونات الكالسيوم في انقباض وانبساط العضلة الهيكلية.'
            ],
            prerequisitesEn: ['Cell wall structure', 'Nerve impulses', 'ATP energetics'],
            prerequisitesAr: ['تركيب الجدار الخلوي', 'انتقال السيال العصبي', 'مركبات الطاقة ATP'],
            keyVocabularyEn: [
              { term: 'Sarcomere', definition: 'The structural and contractile unit of a myofibril bounded between two successive Z-lines.' },
              { term: 'Motor Unit', definition: 'A single motor neuron and all the muscle fibers it innervates.' }
            ],
            keyVocabularyAr: [
              { term: 'القطعة العضلية (الساركومير)', definition: 'المسافة بين كل خطين متتاليين Z وتمثل أصغر وحدة انقباض في اللييفة العضلية.' },
              { term: 'الوحدة الحركية', definition: 'الوحدة الوظيفية للعضلة الهيكلية وتتكون من ليف عصبي حركي والألياف العضلية التي يغذيها.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Plant Support Biomechanics',
                phaseAr: 'دعامة النبات الفيزيائية',
                duration: '25 mins',
                activitiesEn: 'Demonstrating osmosis in potato strips and analyzing cell-wall cellulose/lignin.',
                activitiesAr: 'تجربة الأسموزية وضغط الامتلاء ومقارنة ترسبات الكيوتين والسليلوز واللجنين.'
              },
              {
                phaseEn: 'Human Skeleton Anatomy',
                phaseAr: 'تشريح الهيكل العظمي',
                duration: '35 mins',
                activitiesEn: 'Counting and classifying the 33 vertebrae and identifying floating rib pairs.',
                activitiesAr: 'تصنيف فقرات العمود الفقري وحساب عدد العظام والتفريق بين الأربطة والأوتار.'
              },
              {
                phaseEn: 'Sliding Filament Simulation',
                phaseAr: 'محاكاة الخيوط المنزلقة',
                duration: '30 mins',
                activitiesEn: 'Simulating the cycle of myosin cross-bridges binding and ATP detachment.',
                activitiesAr: 'تمثيل دورة ارتباط وانفصال الروابط المستعرضة وتفسير الإجهاد والشد العضلي.'
              }
            ],
            commonMisconceptionsEn: [
              'Believing the adult vertebral column has 33 separate bones (it has 33 vertebrae, but 26 bones due to sacral/coccygeal fusion).',
              'Thinking muscle relaxation does not require energy (ATP is mandatory to release cross-bridges).'
            ],
            commonMisconceptionsAr: [
              'الاعتقاد بأن العمود الفقري في الشخص البالغ يتكون من 33 عظمة (هو 33 فقرة لكن 26 عظمة بسبب التحام العجز والعصعص).',
              'الظن بأن الانبساط العضلي يحدث تلقائياً دون طاقة (يلزم جزيئات ATP لفصل الروابط المستعرضة عن الأكتين).'
            ],
            differentiationEn: {
              struggling: 'Use 3D sarcomere models showing Z-line movement during contraction.',
              advanced: 'Calculate the total number of motor units required for fine motor control versus gross power muscles.'
            },
            differentiationAr: {
              struggling: 'استخدام نماذج ثلاثية الأبعاد متحركة لتوضيح تقارب خطوط Z واختفاء المنطقة H.',
              advanced: 'حساب النسبة بين عدد الألياف العصبية والعضلية في عضلات العين الدقيقة مقارنة بعضلات الفخذ الكبيرة.'
            },
            formativeAssessmentEn: 'What changes occur to the length of the A-band, I-band, and H-zone during complete contraction?',
            formativeAssessmentAr: 'ما التغيرات التي تطرأ على أطوال كل من المنطقة الداكنة A، المضيئة I، وشبه المضيئة H أثناء الانقباض التام؟',
            exitTicketQuestion: {
              questionEn: 'Which rib pair articulates posteriorly with the 17th vertebra of the vertebral column?',
              questionAr: 'أي زوج من الضلوع يتصل من الخلف بالفقرة رقم (17) من فقرات العمود الفقري؟',
              solutionEn: 'The first 7 vertebrae are cervical, so thoracic vertebrae begin at vertebra 8. Vertebra 17 corresponds to the 10th thoracic vertebra ($17 - 7 = 10$). Hence it articulates with the 10th pair of ribs.',
              solutionAr: 'الفقرات الـ 7 الأولى عنقية، والفقرات الظهرية تبدأ من الفقرة 8. الفقرة رقم 17 هي الفقرة الظهرية العاشرة ($17 - 7 = 10$). إذن تتصل بالزوج العاشر من الضلوع.'
            }
          },
          worksheet: {
            id: 'th_bio_ws_1',
            titleEn: 'Worksheet: Skeletal Systems & Muscular Contraction',
            titleAr: 'ورقة عمل: الجهاز الهيكلي وآلية الانقباض العضلي',
            descriptionEn: 'Rigorous problems on bone numbers, vertebral alignments, neuromuscular synapse transmission, and Huxley sliding filaments.',
            descriptionAr: 'مسائل دقيقة على عدد العظام، مفاصل العمود الفقري، آلية التشابك العصبي العضلي ونظرية الخيوط المنزلقة.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'th_bio_ws_p1',
                titleEn: 'Vertebral Articulation and Rib Connections',
                titleAr: 'تمفصل الفقرات واتصال الضلوع بالعمود الفقري',
                difficulty: 'medium',
                questionEn: 'The floating ribs (pairs 11 and 12) articulate posteriorly with which vertebrae of the human vertebral column?',
                questionAr: 'الضلوع العائمة (الزوجان 11 و 12) تتصل من الخلف بأي فقرات من فقرات العمود الفقري للإنسان؟',
                optionsEn: ['Vertebrae 18 and 19', 'Vertebrae 11 and 12', 'Vertebrae 19 and 20', 'Vertebrae 12 and 13'],
                optionsAr: ['الفقرتان 18 و 19', 'الفقرتان 11 و 12', 'الفقرتان 19 و 20', 'الفقرتان 12 و 13'],
                correctAnswer: 'Vertebrae 18 and 19',
                correctIndex: 0,
                hintEn: 'Add 7 cervical vertebrae to thoracic vertebra numbers 11 and 12 ($7 + 11 = 18$ and $7 + 12 = 19$).',
                hintAr: 'أضف الـ 7 فقرات عنقية إلى رقمي الفقرتين الظهرتين 11 و 12 ($7 + 11 = 18$ و $7 + 12 = 19$).',
                stepByStepSolutionEn: [
                  'Vertebral column has 7 cervical vertebrae (1 to 7).',
                  'Thoracic vertebrae are numbered 8 through 19 (12 thoracic vertebrae in total).',
                  'Rib pair 11 articulates with thoracic vertebra 11, which is overall vertebra $7 + 11 = 18$.',
                  'Rib pair 12 articulates with thoracic vertebra 12, which is overall vertebra $7 + 12 = 19$.'
                ],
                stepByStepSolutionAr: [
                  'العمود الفقري يبدأ بـ 7 فقرات عنقية (من 1 إلى 7).',
                  'الفقرات الظهرية عددها 12 وترتيبها من 8 إلى 19 في العمود الفقري.',
                  'زوج الضلوع رقم 11 يتصل بالفقرة الظهرية 11 وترتيبها العام $7 + 11 = 18$.',
                  'زوج الضلوع رقم 12 يتصل بالفقرة الظهرية 12 وترتيبها العام $7 + 12 = 19$.'
                ],
                teacherTipEn: 'Floating ribs do not connect to the sternum anteriorly, giving the lungs space during respiration.',
                teacherTipAr: 'الضلوع العائمة قصيرة ولا تتصل بعظمة القص من الأمام وتتصل فقط بالفقرتين 18 و 19 من الخلف.'
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: 'Sarcomere Contraction Simulator',
            titleAr: 'محاكي انقباض القطعة العضلية والساركومير',
            descriptionEn: 'Interactive sliding filament animation displaying Z-line displacement, H-zone narrowing, and cross-bridge cycling.',
            descriptionAr: 'محاكاة تفاعلية لحركة خيوط الأكتين والميوسين وتقارب خطوط Z تحت تأثير أيونات الكالسيوم و ATP.'
          }
        },
        {
          "id": "th_bio_l2",
          "titleEn": "Endocrine Coordination & Hormonal Homeostasis",
          "titleAr": "التنسيق الهرموني والاتزان الداخلي في الكائنات الحية",
          "summaryEn": "Discovery of hormones, plant auxins, human endocrine glands (pituitary master gland, thyroid, parathyroids, adrenals, pancreas, gonads), and feedback regulation.",
          "summaryAr": "اكتشاف الهرمونات، الأوكسينات في النبات، الغدد الصماء في الإنسان (النخامية، الدرقية، جارات الدرقية، الكظريتان، البنكرياس، والمناسل)، وآليات التغذية الراجعة.",
          "theoryContentEn": "### 1. Discovery and Nature of Hormones\n- **Claude Bernard (1855):** Considered glycogen stored in the liver as its internal secretion, and bile as its external secretion.\n- **Starling (1905):** Discovered that the mucous membrane of the duodenum secretes chemical messengers into the bloodstream that travel to the pancreas, stimulating it to secrete pancreatic juices even after cutting all nerve connections (coined the term **Hormones**, from Greek meaning \"to excite\").\n- **Plant Hormones (Auxins):**\n  - Synthesized by apical buds and growing root tips (no specialized glands in plants).\n  - Indole-3-acetic acid ($IAA$) is the most common auxin. Discovered by Boysen-Jensen (1913).\n  - Regulate phototropism, cell elongation, fruit ripening, and leaf abscission.\n\n### 2. Human Endocrine Glands\n1. **Pituitary Gland (Master Gland - Hypophysis):**\n   - **Adenohypophysis (Anterior & Intermediate Lobes):**\n     - $GH$ (Growth Hormone): Regulates protein synthesis and bone elongation.\n     - $TSH$: Stimulates thyroid gland.\n     - $ACTH$: Stimulates adrenal cortex.\n     - $FSH$ & $LH$: Gonadotropic hormones regulating gametogenesis and sex steroid secretion.\n     - $\\text{Prolactin}$: Stimulates milk synthesis in mammary glands.\n   - **Neurohypophysis (Posterior Lobe & Infundibulum):**\n     - Synthesized by hypothalamic neurosecretory cells.\n     - $ADH$ (Vasopressin): Stimulates water reabsorption in kidney nephrons and constricts peripheral arterioles, elevating blood pressure.\n     - $\\text{Oxytocin}$: Stimulates rhythmic uterine contractions during parturition and milk ejection during nursing.\n2. **Thyroid & Parathyroid Glands:**\n   - **Thyroxine ($T_4$):** Requires iodine; regulates basal metabolic rate ($BMR$), stimulates physical and mental development, and promotes monosaccharide absorption from the intestine.\n   - **Calcitonin & Parathormone ($PTH$):** Antagonistic pair regulating serum calcium ($9 - 11\\text{ mg/dL}$). Calcitonin lowers blood calcium by inhibiting bone resorption; $PTH$ raises blood calcium by mobilizing it from bones and increasing renal reabsorption.\n3. **Adrenal (Suprarenal) Glands:**\n   - **Cortex:** Mineralocorticoids (Aldosterone: saves $\\text{Na}^+$, excretes $\\text{K}^+$), Glucocorticoids (Cortisone: carbohydrate metabolism), and adrenal sex steroids.\n   - **Medulla:** Adrenaline & Noradrenaline (emergency flight-or-fight response; stimulates cardiac contractility, glycogenolysis in liver, and vasoconstriction).\n4. **Pancreas (Islets of Langerhans):**\n   - $\\alpha$-cells: Secrete **Glucagon** (elevates blood glucose via liver glycogenolysis).\n   - $\\beta$-cells: Secrete **Insulin** (lowers blood glucose by facilitating cellular glucose uptake and stimulating glycogen synthesis in liver and muscles).",
          "theoryContentAr": "### ١. اكتشاف الهرمونات وطبيعتها\n- **كلود برنار (١٨٥٥):** اعتبر الكبد ذا إفراز داخلي (السكر المدخر به كجليكوجين) وإفراز خارجي (الصفراء).\n- **ستارلنج (١٩٠٥):** وجد أن الغشاء المخاطي المبطن للاثني عشر يفرز مواد كيميائية تسري في تيار الدم إلى البنكرياس لتنبهه لإفراز عصارته الهاضمة فور وصول الغذاء، حتى بعد قطع الاتصال العصبي، وسماها **هرمونات** (كلمة يونانية تعني المنشطات).\n- **الهرمونات النباتية (الأوكسينات):**\n  - تفرزها القمم النامية والبراعم (لا توجد غدد خاصة في النبات)، وأشهرها إندول حمض الخليك ($IAA$).\n  - تنظم تتابع نمو الأنسجة وتمايزها، وتؤثر في نمو الثمار وسقوط الأوراق وانتحاء الساق نحو الضوء.\n\n### ٢. الغدد الصماء في الإنسان\n١. **الغدة النخامية (سيدة الغدد):**\n   - **الجزء الغدي (الفص الأمامي والأوسط):**\n     - هرمون النمو ($GH$): يتحكم في أيض البروتين ونمو العظام. نقصه في الطفولة يسبب القزامة، وزيادته تسبب العملاقة، وزيادته في البالغين تسبب الأكروميجالي.\n     - هرمونات منبهة: $TSH$ للدرقية، $ACTH$ لقشرة الكظرية، $FSH$ و $LH$ للمناسل، والبرولاكتين لإفراز اللبن.\n   - **الجزء العصبي (الفص الخلفي والقمع):**\n     - هرمونات تفرزها خلايا عصبية مفرزة في الهيبوثالامس وتخزن في الفص الخلفي.\n     - $ADH$ (المضاد لإدرار البول والرافع لضغط الدم): يزيد من نفاذية أنابيب النفرون للماء فيقلل حجم البول، ويقبض الأوعية الدموية.\n     - الأوكسيتوسين: ينبه عضلات الرحم للانقباض بشدة أثناء الولادة لتسهيل خروج الجنين، وله أثر مشجع في اندفاع الحليب.\n٢. **الغدة الدرقية وجارات الدرقية:**\n   - **الثيروكسين:** يحتوي على اليود، ينظم الأيض الأساسي وامتصاص السكريات الأحادية. نقصه الحاد يسبب القماءة في الأطفال والميكسيديما في البالغين؛ زيادته تسبب الجويتر الجحوظي.\n   - **الكالسيتونين والباراثورمون:** زوج متضاد؛ الكالسيتونين يقلل كالسيوم الدم ويمنع سحبه من العظام، بينما الباراثورمون يسحب الكالسيوم من العظام عند نقصه بالدم. نقصه الحاد يسبب التشنجات العضلية المؤلمة (التيتاني).\n٣. **الغدتان الكظريتان (فوق الكلوية):**\n   - **القشرة:** تفرز هرمونات ستيرويدية: معدنية (الألدوستيرون لحفظ الصوديوم والتخلص من البوتاسيوم)، سكرية (الكورتيزون)، وجنسية.\n   - **النخاع:** يفرز الأدرينالين والنورأدرينالين في حالات الطوارئ والخوف والقتال تحت تنبيه عصبي سمبثاوي مباشر.\n٤. **البنكرياس (جزر لانجرهانز):**\n   - خلايا بيتا: تفرز الأنسولين (يخفض جلوكوز الدم بالسماح بمروره للخلايا وتخزينه كجليكوجين بالكبد والعضلات).\n   - خلايا ألفا: تفرز الجلوكاجون (يرفع جلوكوز الدم بتحليل جليكوجين الكبد فقط).",
          "formulas": [
            {
              "labelEn": "Normal Blood Glucose Concentration",
              "labelAr": "التركيز الطبيعي لجلوكوز الدم",
              "latex": "80\\,\\text{mg/dL} \\le [\\text{Glucose}] \\le 120\\,\\text{mg/dL}"
            },
            {
              "labelEn": "Normal Serum Calcium Concentration",
              "labelAr": "التركيز الطبيعي لكالسيوم الدم",
              "latex": "9.0\\,\\text{mg/dL} \\le [\\text{Ca}^{2+}] \\le 11.0\\,\\text{mg/dL}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Biology Textbook Grade 12",
            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-BIO-CH2-L1",
            "pageRange": "pp. 37 - 58"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Endocrine Integration & Feedback Loops",
            "titleAr": "خطة درس: التكامل الهرموني وحلقات التغذية الراجعة",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-BIO-CH2-L1",
            "bloomsObjectivesEn": [
              "Compare anterior and posterior pituitary lobes by embryonic origin and hormone synthesis sites.",
              "Analyze the antagonistic homeostatic loops of Insulin/Glucagon and Calcitonin/Parathormone.",
              "Diagnose clinical cases of acromegaly, myxedema, tetany, and diabetes mellitus from laboratory values."
            ],
            "bloomsObjectivesAr": [
              "المقارنة بين الفص الأمامي والخلفي للغدة النخامية من حيث منشأ الهرمونات وموقع تصنيعها.",
              "تحليل آليات التضاد بين هرموني الأنسولين والجلوكاجون، وهرموني الكالسيتونين والباراثورمون.",
              "تشخيص الحالات المرضية (الأكروميجالي، الميكسيديما، التيتاني، والبول السكري) بناءً على الأعراض والتحاليل."
            ],
            "prerequisitesEn": [
              "Cellular receptors",
              "Autonomic nervous system",
              "Osmoregulation"
            ],
            "prerequisitesAr": [
              "مستقبلات الغشاء الخلوي",
              "الجهاز العصبي الذاتي",
              "التنظيم الأسموزي"
            ],
            "keyVocabularyEn": [
              {
                "term": "Neurosecretory Cells",
                "definition": "Specialized neurons in the hypothalamus that synthesize ADH and Oxytocin."
              },
              {
                "term": "Islets of Langerhans",
                "definition": "Endocrine cell clusters in the pancreas containing alpha and beta cells."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "الخلايا العصبية المفرزة",
                "definition": "خلايا عصبية في الهيبوثالامس تقوم بتصنيع هرموني ADH والأوكسيتوسين وتصبها في الفص الخلفي."
              },
              {
                "term": "جزر لانجرهانز",
                "definition": "تجمعات خلوية صماء في البنكرياس تحتوي على خلايا ألفا المفرزة للجلوكاجون وخلايا بيتا المفرزة للأنسولين."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Historical Discovery & Plant Auxins",
                "phaseAr": "تاريخ اكتشاف الهرمونات والأوكسينات",
                "duration": "20 mins",
                "activitiesEn": "Analyzing Boysen-Jensen and Went experiments on phototropism.",
                "activitiesAr": "مناقشة تجارب بويسن-جنسن وفينت في انتحاء القمم النامية."
              },
              {
                "phaseEn": "Hypothalamic-Pituitary Axis",
                "phaseAr": "محور الهيبوثالامس والنخامية",
                "duration": "35 mins",
                "activitiesEn": "Tracing anterior versus posterior lobe hormones and target feedback.",
                "activitiesAr": "تتبع هرمونات الفص الغدي والعصبي ودور الهرمونات المنبهة."
              },
              {
                "phaseEn": "Pancreatic and Calcium Homeostasis",
                "phaseAr": "اتزان الجلوكوز والكالسيوم",
                "duration": "35 mins",
                "activitiesEn": "Interactive simulations of insulin/glucagon and calcitonin/PTH dynamics.",
                "activitiesAr": "محاكاة تفاعلية لتغير نسب الجلوكوز والكالسيوم وتأثير الأمراض المرتبطة بهما."
              }
            ],
            "commonMisconceptionsEn": [
              "Assuming the posterior pituitary synthesizes its own hormones (hypothalamus synthesizes them).",
              "Thinking glucagon breaks down muscle glycogen (glucagon only acts on liver glycogen)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن الفص الخلفي للنخامية يصنع هرموناته (الهيبوثالامس هو من يصنعها).",
              "الظن بأن الجلوكاجون يحلل جليكوجين العضلات (الجلوكاجون يعمل حصراً على جليكوجين الكبد)."
            ],
            "differentiationEn": {
              "struggling": "Use visual feedback flowcharts with color-coded positive and negative signs.",
              "advanced": "Calculate osmotic pressure changes during severe ADH deficiency (Diabetes Insipidus)."
            },
            "differentiationAr": {
              "struggling": "استخدام مخططات تدفق ملونة لتوضيح مسارات التغذية الراجعة السلبية والإيجابية.",
              "advanced": "حساب التغير في الضغط الأسموزي للدم والبول في حالة النقص الشديد لهرمون ADH."
            },
            "formativeAssessmentEn": "Why does severe parathyroid deficiency trigger painful muscle spasms (tetany)?",
            "formativeAssessmentAr": "فسر: لماذا يؤدي الاستئصال الجراحي للغدد جارات الدرقية إلى حدوث تشنجات عضلية مؤلمة؟",
            "exitTicketQuestion": {
              "questionEn": "Which hormone accelerates the absorption of monosaccharides from the intestinal lumen into blood?",
              "questionAr": "أي الهرمونات التالية يحفز امتصاص السكريات الأحادية من القناة الهضمية إلى تيار الدم؟",
              "solutionEn": "Thyroxine directly stimulates the intestinal absorption of monosaccharides (glucose, galactose, fructose).",
              "solutionAr": "هرمون الثيروكسين هو الهرمون المسؤول عن تحفيز امتصاص السكريات الأحادية من الغشاء المخاطي للأمعاء الدقيقة."
            }
          },
          "worksheet": {
            "id": "th_bio_ws_2",
            "titleEn": "Worksheet: Endocrine Regulation & Clinical Endocrinology",
            "titleAr": "ورقة عمل: التنظيم الهرموني والأمراض الغدية",
            "descriptionEn": "Rigorous problems analyzing hormone feedback loops, target organ specificity, and endocrine pathologies.",
            "descriptionAr": "مسائل تحليلية دقيقة على آليات التغذية الراجعة وتشخيص الاضطرابات الهرمونية.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_bio_ws_p2_1",
                "titleEn": "Hormonal Control of Blood Osmolarity",
                "titleAr": "التنظيم الهرموني لأسموزية الدم وحجم البول",
                "difficulty": "medium",
                "questionEn": "A healthy individual drinks a large volume of pure water after exercising. What immediate change occurs to the secretion rate of ADH?",
                "questionAr": "تناول شخص سليم كمية وفيرة من الماء النقي بعد أداء تمرين رياضي. ما التغير الفوري الذي يطرأ على معدل إفراز هرمون ADH؟",
                "optionsEn": [
                  "ADH secretion decreases significantly",
                  "ADH secretion increases significantly",
                  "ADH secretion remains strictly unchanged",
                  "ADH converts into oxytocin"
                ],
                "optionsAr": [
                  "يقل إفراز هرمون ADH بدرجة ملحوظة",
                  "يزداد إفراز هرمون ADH بدرجة كبيرة",
                  "يظل إفراز هرمون ADH ثابتاً دون تغير",
                  "يتحول هرمون ADH إلى أوكسيتوسين"
                ],
                "correctAnswer": "ADH secretion decreases significantly",
                "correctIndex": 0,
                "hintEn": "Hydration lowers blood osmolarity, so the body needs to excrete dilute urine.",
                "hintAr": "وفرة الماء تقلل أسموزية الدم، فيتوقف إفراز ADH للسماح بإخراج الماء الزائد في البول.",
                "stepByStepSolutionEn": [
                  "High water intake dilutes blood solutes, lowering plasma osmolarity.",
                  "Osmoreceptors in the hypothalamus detect the drop in osmotic pressure.",
                  "Secretion of ADH from the posterior pituitary is inhibited.",
                  "Water reabsorption in collecting ducts drops, producing dilute, voluminous urine."
                ],
                "stepByStepSolutionAr": [
                  "شرب الماء بكثرة يخفف تركيز الذائبات في الدم ويهبط بالضغط الأسموزي.",
                  "تستشعر المستقبلات الأسموزية في الهيبوثالامس انخفاض الضغط الأسموزي.",
                  "يثبط إفراز هرمون ADH من الفص الخلفي للنخامية.",
                  "تقل نفاذية النفرونات للماء فيخرج الماء الزائد في صورة بول مخفف ذي كمية كبيرة."
                ],
                "teacherTipEn": "ADH secretion is inversely proportional to body hydration and directly proportional to blood osmolarity.",
                "teacherTipAr": "إفراز ADH يتناسب طردياً مع أسموزية الدم (العطش والجفاف) وعكسياً مع كمية الماء المتناولة."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Endocrine Glucose & Calcium Homeostasis Simulator",
            "titleAr": "محاكي الاتزان الداخلي للجلوكوز والكالسيوم بالدم",
            "descriptionEn": "Interactive dual homeostatic feedback simulator showing alpha/beta pancreatic response and calcitonin/parathormone counter-regulation.",
            "descriptionAr": "محاكاة تفاعلية لحلقات التغذية الراجعة لتنظيم تركيز الجلوكوز وكالسيوم الدم بواسطة الأنسولين والجلوكاجون والكالسيتونين والباراثورمون."
          }
        },
        {
          "id": "th_bio_l3",
          "titleEn": "Reproduction in Living Organisms & Human Embryology",
          "titleAr": "التكاثر في الكائنات الحية وتكوين الجنين في الإنسان",
          "summaryEn": "Asexual vs sexual reproduction modalities, conjugation in Spirogyra, alternation of generations (Plasmodium & Polypodium), flowering plant double fertilization, and human reproductive physiology (gametogenesis, 28-day menstrual cycle, fertilization, embryonic membranes).",
          "summaryAr": "صور التكاثر اللاجنسي والجنسي، الاقتران في الإسبيروجيرا، تعاقب الأجيال في البلازموديوم والسراخس، الإخصاب المزدوج في النباتات الزهرية، والتكاثر في الإنسان (تكوين الأمشاج، دورة الطمث، الإخصاب، وأغشية الجنين).",
          "theoryContentEn": "### 1. Types of Reproduction in Living Organisms\n- **Asexual Reproduction:**\n  1. **Binary Fission:** Ameba, Paramecium, bacteria (equal cell division; in adverse conditions, Ameba secretes a protective chitinous cyst).\n  2. **Budding:** Yeast (unicellular), Hydra and Sponges (multicellular from interstitial cells).\n  3. **Regeneration:** Planaria (transverse or longitudinal), Hydra, and Starfish (an arm containing part of the central disc regenerates a whole individual).\n  4. **Sporogenesis:** Fungi (Bread mold), Ferns (spores resist dry conditions and disperse widely).\n  5. **Parthenogenesis (التوالد البكري):** Development of an egg into an embryo without fertilization:\n     - Natural: Honeybee queen lays unfertilized eggs ($n$) that develop into male drones ($n$); fertilized eggs ($2n$) develop into queens or worker females ($2n$). Aphid insects lay diploid eggs ($2n$) by mitosis during spring.\n     - Artificial: Stimulating unfertilized frog or sea urchin eggs with electric shock, prick, or salinity changes.\n  6. **Tissue Culture:** Culturing somatic plant cells in a nourishing medium (coconut milk rich in nutrients and auxins) to regenerate complete plants (e.g. carrot, tobacco).\n- **Conjugation in Spirogyra (Green Alga):**\n  - Occurs during adverse environmental conditions (drought, temperature changes).\n  - Scalariform conjugation (between two filaments) and Lateral conjugation (between adjacent cells in the same filament).\n  - Forms a diploid zygospore ($2n$) that undergoes meiosis upon improvement of conditions to produce haploid filaments ($n$).\n- **Alternation of Generations (تعاقب الأجيال):**\n  - **Plasmodium malariae:** Sexual cycle in female *Anopheles* mosquito (gametocytes fuse $\\to$ diploid ookinete $2n$ $\\to$ oocyst $n$ by meiosis $\\to$ sporozoites $n$ by sporogony); Asexual cycle in humans (schizogony in liver $\\to$ merozoites in RBCs $\\to$ toxins released causing malaria fever shivering every 48 hours).\n  - **Polypodium Fern:** Sporophyte ($2n$) reproduces asexually via spores; Gametophyte ($n$) reproduces sexually via antheridia (sperms) and archegonia (eggs).\n\n### 2. Human Reproductive Physiology\n- **Male Reproductive System:**\n  - Testes: Seminiferous tubules produce spermatozoa (Spermatogonia $\\to$ Primary spermatocyte $\\to$ Secondary spermatocytes $\\to$ Spermatids $\\to$ Spermatozoa).\n  - Sertoli cells: Nourish developing sperm and perform immune barrier function.\n  - Interstitial cells of Leydig: Secrete testosterone under pituitary $LH$ influence.\n- **Female Reproductive System & Menstrual Cycle (28 Days):**\n  - **Follicular Phase (Days 1–13):** Pituitary $FSH$ stimulates Graafian follicle growth; developing follicle secretes Estrogen, repairing and proliferating the uterine endometrium.\n  - **Ovulation (Day 14):** Massive surge of pituitary $LH$ ruptures the Graafian follicle, releasing the secondary oocyte into the Fallopian tube.\n  - **Luteal Phase (Days 15–28):** Residual follicle transforms into the **Corpus Luteum**, which secretes large amounts of **Progesterone** (and estrogen), thickening the endometrium and increasing its vascularity.\n  - If no fertilization occurs, corpus luteum degenerates by day 28, progesterone drops sharply, and the endometrium breaks down into menstrual flow (Days 1–5).\n  - If fertilization occurs in the upper third of the Fallopian tube, embryonic $hCG$ maintains the corpus luteum until the placenta takes over progesterone secretion at the end of the 3rd month.",
          "theoryContentAr": "### ١. صور التكاثر في الكائنات الحية\n- **التكاثر اللاجنسي:**\n  ١. **الانشطار الثنائي:** الأميبا والبراميسيوم والبكتيريا (في الظروف غير المناسبة تحيط الأميبا نفسها بغلاف كيتيني واقٍ وتنقسم بداخله بالانشطار الثنائي المتكرر).\n  ٢. **التبرعم:** فطر الخميرة (وحيد خلية)، والهيدرا والإسفنج (عديدة خلايا من الخلايا البينية).\n  ٣. **التجدد:** دودة البلاناريا (طولياً أو عرضياً)، الهيدرا، ونجم البحر (ذراع مع قطعة من القرص المركزي يجدد كائناً كاملاً).\n  ٤. **تكوين الجراثيم:** عفن الخبز وعيش الغراب وسرخس الفوجير (الجراثيم سريعة الانتشار وتتحمل الظروف القاسية).\n  ٥. **التوالد البكري:** إنتاج أفراد جديدة من بويضة بدون إخصاب:\n     - طبيعي: ملكة نحل العسل تضع بيضاً غير مخصب ($n$) ينمو بالتوالد البكري ليعطي ذكوراً ($n$)، بينما البيض المخصب ($2n$) يعطي إناثاً (شغالات أو ملكات). حشرة المن تضع بيضاً ثنائي المجموعة الصبغية ($2n$) بالانقسام الميتوزي.\n     - صناعي: تنشيط بويضات نجم البحر أو الضفدعة بالصدمة الحرارية أو الكهربية أو الوخز بالإبر لتتضاعف صبغياتها دون إخصاب ($2n$).\n  ٦. **زراعة الأنسجة:** إنماء خلايا نباتية حية في وسط غذائي شبه طبيعي (مثل لبن جوز الهند المحتوي على هرمونات نباتية وعناصر غذائية) لإنتاج نبات كامل.\n- **الاقتران في طحلب الإسبيروجيرا:**\n  - يلجأ للتكاثر الجنسي بالاقتران في الظروف غير المناسبة (جفاف، تغير نقاوة الماء).\n  - اقتران سلمي (بين خيطين متجاورين) واقتران جانبي (بين خليتين متجاورتين في نفس الخيط). تتكون لاقحة جرثومية (زيجوسبور $2n$) تحاط بجدار سميك، وتنقسم ميوزياً عند تحسن الظروف.\n- **تعاقب الأجيال:**\n  - **بلازموديوم الملاريا:** دورة جنسية في معدة أنثى بعوضة الأنوفيلس (أمشاج $\\to$ طور حركي $2n$ $\\to$ كيس البيض $n$ بالانقسام الميوزي $\\to$ سبوروزويتات $n$ بالتجرثم)؛ دورة لاجنسية في الإنسان (بالتقطع في الكبد ثم كرات الدم الحمراء التي تنفجر كل ٤٨ ساعة مطلقة الميروزويتات والسموم ومسببة نوبات الحمى والرعشة).\n  - **سرخس الفوجير:** طور جرثومي سائد ($2n$) يتكاثر لاجنسياً بالجراثيم، وطور مشيجي قلبي الشكل ($n$) يتكاثر جنسياً بالأمشاج الناتجة من الأنثريديا والأرشيجونيا.\n\n### ٢. التكاثر وتكوين الجنين في الإنسان\n- **الجهاز التناسلي الذكري:** الخصيتان تحتويان على أنيببات منوية تنتج الحيوانات المنوية، وخلايا سرتولي تغذيها، وخلايا بينية تفرز التستوستيرون بتأثير هرمون $LH$.\n- **دورة الطمث في أنثى الإنسان (٢٨ يوماً):**\n  - **مرحلة نضج البويضة (الأيام ١ إلى ١٣):** يفرز $FSH$ لإنضاج حويصلة جراف التي تفرز الإستروجين لإنماء بطانة الرحم.\n  - **مرحلة التبويض (اليوم ١٤):** انفجار حويصلة جراف بتأثير الارتفاع المفاجئ لـ $LH$ وتحرر البويضة لقناة فالوب.\n  - **مرحلة تكوين الجسم الأصفر (الأيام ١٥ إلى ٢٨):** تفرز بقايا الحويصلة (الجسم الأصفر) هرمون **البروجستيرون** الذي يزيد من سمك بطانة الرحم وإمدادها الدموي استعداداً للحمل.\n  - في حالة عدم الإخصاب، يضمر الجسم الأصفر ويقل البروجستيرون وتتمزق البطانة ويحدث الطمث (الأيام ١ إلى ٥).\n  - في حالة الإخصاب في الثلث الأول من قناة فالوب، يظل الجسم الأصفر نشطاً مفرزاً للبروجستيرون حتى نهاية الشهر الثالث حين يضمر بعد أن تكتمل المشيمة وتتولى إفراز البروجستيرون.",
          "formulas": [
            {
              "labelEn": "Menstrual Cycle Regular Duration",
              "labelAr": "المدة النموذجية لدورة الطمث",
              "latex": "T_{\\text{cycle}} = 28\\,\\text{Days}"
            },
            {
              "labelEn": "Double Fertilization Ploidy in Angiosperms",
              "labelAr": "المجموعات الصبغية للإخصاب المزدوج",
              "latex": "\\text{Zygote} = 2n, \\quad \\text{Endosperm} = 3n"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Biology Textbook Grade 12",
            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-BIO-CH3-L1",
            "pageRange": "pp. 59 - 104"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Reproductive Strategies & Human Embryology",
            "titleAr": "خطة درس: استراتيجيات التكاثر والتطور الجنيني في الإنسان",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-BIO-CH3-L1",
            "bloomsObjectivesEn": [
              "Contrast natural parthenogenesis in honeybees versus aphids by ploidy and sex determination.",
              "Analyze the chronological events and hormonal curves of the 28-day human menstrual cycle.",
              "Explain the mechanism of double fertilization in flowering plants and endosperm formation."
            ],
            "bloomsObjectivesAr": [
              "المقارنة بين التوالد البكري في نحل العسل وحشرة المن من حيث عدد الصبغيات وجنس الأفراد الناتجة.",
              "تحليل التغيرات الهرمونية المتزامنة لدورة الطمث خلال الـ ٢٨ يوماً وأثر الإخصاب عليها.",
              "تفسير ظاهرة الإخصاب المزدوج في النباتات الزهرية وتكوين نسيج الإندوسبيرم ($3n$)."
            ],
            "prerequisitesEn": [
              "Mitosis & Meiosis",
              "Flower anatomy",
              "Hormonal signaling"
            ],
            "prerequisitesAr": [
              "الانقسام الميتوزي والميوزي",
              "تركيب الزهرة النموذجية",
              "التنظيم الهرموني"
            ],
            "keyVocabularyEn": [
              {
                "term": "Corpus Luteum",
                "definition": "The endocrine structure formed from ruptured Graafian follicle that secretes progesterone."
              },
              {
                "term": "Parthenogenesis",
                "definition": "Development of an embryo from an unfertilized ovum without sperm fertilization."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "الجسم الأصفر",
                "definition": "غدة صماء مؤقتة تنشأ من بقايا حويصلة جراف المنفجرة بعد التبويض وتفرز هرمون البروجستيرون."
              },
              {
                "term": "التوالد البكري",
                "definition": "قدرة البويضة على النمو لتكوين فرد جديد بدون إخصاب من المشيج المذكر."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Comparative Asexual & Sexual Mechanisms",
                "phaseAr": "صور التكاثر والاقتران",
                "duration": "25 mins",
                "activitiesEn": "Analyzing Spirogyra conjugation under microscope and honeybee parthenogenesis.",
                "activitiesAr": "دراسة اقتران الإسبيروجيرا ومقارنة التوالد البكري في نحل العسل والمن."
              },
              {
                "phaseEn": "Alternation of Generations",
                "phaseAr": "تعاقب الأجيال في الملاريا والفوجير",
                "duration": "30 mins",
                "activitiesEn": "Tracing the life cycles of Plasmodium and Polypodium fern.",
                "activitiesAr": "تتبع دورة حياة بلازموديوم الملاريا وسرخس الفوجير على لوحات تفاعلية."
              },
              {
                "phaseEn": "Human Menstrual Cycle Dynamics",
                "phaseAr": "دورة الطمث ومحاكاة الحمل",
                "duration": "35 mins",
                "activitiesEn": "Interactive day-by-day simulation of FSH, LH, Estrogen, Progesterone and endometrium.",
                "activitiesAr": "محاكاة تفاعلية لمنحنيات الهرمونات الأربعة وتغيرات سمك بطانة الرحم أثناء الدورة والحمل."
              }
            ],
            "commonMisconceptionsEn": [
              "Thinking male honeybee drones reproduce by meiosis (they produce sperms by mitosis because they are haploid $n$).",
              "Believing the placenta forms immediately after fertilization (takes until end of 3rd month; corpus luteum sustains early pregnancy)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن ذكر نحل العسل ينتج حيواناته المنوية بالانقسام الميوزي (ينتجها بالميتوزي لأنه أحادي المجموعة $n$).",
              "الظن بأن المشيمة تفرز البروجستيرون فور الإخصاب (الجسم الأصفر هو المسؤول حتى نهاية الشهر الثالث حين تحل المشيمة محله)."
            ],
            "differentiationEn": {
              "struggling": "Use side-by-side synchronized calendar charts for ovarian and uterine cycle phases.",
              "advanced": "Calculate total chromosome numbers and gamete probabilities in multiple twin pregnancies (monozygotic vs dizygotic)."
            },
            "differentiationAr": {
              "struggling": "استخدام تقويم زمني ملون يوضح التزامن الدقيق بين هرمونات النخامية وهرمونات المبيض وبطانة الرحم.",
              "advanced": "المقارنة الوراثية والتشريحية بين التوائم المتماثلة (أحادية اللقحة) والتوائم المتآخية (ثنائية اللقحة)."
            },
            "formativeAssessmentEn": "Why do malaria fever symptoms recur in patients strictly every 48 hours?",
            "formativeAssessmentAr": "علل: تتكرر نوبات حمى الملاريا على المريض بانتظام كل يومين (٤٨ ساعة)؟",
            "exitTicketQuestion": {
              "questionEn": "How many sperms and ova are produced from 10 primary spermatocytes and 10 primary oocytes, respectively?",
              "questionAr": "كم عدد الحيوانات المنوية والبويضات الناضجة الناتجة على الترتيب من ١٠ خلايا منوية أولية و ١٠ خلايا بيضية أولية؟",
              "solutionEn": "Each primary spermatocyte yields 4 sperm ($10 \\times 4 = 40$ sperms). Each primary oocyte yields 1 ovum and 3 polar bodies ($10 \\times 1 = 10$ ova).",
              "solutionAr": "كل خلية منوية أولية تعطي ٤ حيوانات منوية ($١٠ \\times ٤ = ٤٠$). وكل خلية بيضية أولية تعطي بويضة واحدة و٣ أجسام قطبية ($١٠ \\times ١ = ١٠$ بويضات)."
            }
          },
          "worksheet": {
            "id": "th_bio_ws_3",
            "titleEn": "Worksheet: Gametogenesis & Menstrual Cycle Calculations",
            "titleAr": "ورقة عمل: حسابات تكوين الأمشاج ودورة الطمث",
            "descriptionEn": "Quantitative problems calculating polar bodies, sperm numbers, ovulation days, and ploidy levels across life cycles.",
            "descriptionAr": "مسائل عددية دقيقة لحساب عدد الأجسام القطبية، أيام التبويض، وأعداد الصبغيات في تعاقب الأجيال.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_bio_ws_p3_1",
                "titleEn": "Polar Body Production during Oogenesis",
                "titleAr": "حساب الأجسام القطبية الناتجة أثناء نضج البويضات",
                "difficulty": "medium",
                "questionEn": "If 20 primary oocytes undergo complete maturation division through meiosis I and II, how many polar bodies are produced?",
                "questionAr": "إذا مرت ٢٠ خلية بيضية أولية بمرحلتي الانقسام الميوزي الأول والثاني حتى اكتمال الإخصاب، فكم يكون عدد الأجسام القطبية المتكونة؟",
                "optionsEn": [
                  "60 polar bodies",
                  "20 polar bodies",
                  "40 polar bodies",
                  "80 polar bodies"
                ],
                "optionsAr": [
                  "٦٠ جسماً قطبياً",
                  "٢٠ جسماً قطبياً",
                  "٤٠ جسماً قطبياً",
                  "٨٠ جسماً قطبياً"
                ],
                "correctAnswer": "60 polar bodies",
                "correctIndex": 0,
                "hintEn": "Each primary oocyte produces 1 secondary oocyte and 1 first polar body. Meiosis II yields 1 ovum and 3 polar bodies total.",
                "hintAr": "كل خلية بيضية أولية تنتج في النهاية بويضة واحدة و٣ أجسام قطبية (١ من انقسام الخلية + ٢ من انقسام الجسم القطبي الأول).",
                "stepByStepSolutionEn": [
                  "Meiosis I of each primary oocyte yields 1 secondary oocyte and 1 first polar body.",
                  "Upon fertilization, meiosis II completes: secondary oocyte yields 1 ovum and 1 polar body, while the first polar body divides into 2 polar bodies.",
                  "Total polar bodies per primary oocyte = $1 + 2 = 3$.",
                  "For 20 primary oocytes: $20 \\times 3 = 60$ polar bodies."
                ],
                "stepByStepSolutionAr": [
                  "الانقسام الميوزي الأول ينتج خلية بيضية ثانوية وجسماً قطبياً أول.",
                  "عند الإخصاب يكتمل الميوزي الثاني لتعطي البيضية الثانوية بويضة وجسماً قطبياً، وينقسم الجسم القطبي الأول لجسمين قطبيين.",
                  "العدد الإجمالي للأجسام القطبية الناتجة من كل خلية بيضية أولية = ٣ أجسام قطبية.",
                  "لعدد ٢٠ خلية بيضية أولية: $٢٠ \\times ٣ = ٦٠$ جسماً قطبياً."
                ],
                "teacherTipEn": "Polar bodies ensure the ovum retains the vast majority of nourishing cytoplasm for initial embryonic cleavage.",
                "teacherTipAr": "الهدف البيولوجي من تكون الأجسام القطبية هو اختزال الصبغيات للنصف مع احتفاظ البويضة بمعظم السيتوبلازم والغذاء المدخر."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "28-Day Menstrual & Ovarian Cycle Simulator",
            "titleAr": "محاكي دورة الطمث والمبيض التفاعلي (٢٨ يوماً)",
            "descriptionEn": "Interactive hormone curve tracking FSH, LH surge, Estrogen, Progesterone, and endometrial thickness.",
            "descriptionAr": "محاكاة تفاعلية لتغيرات هرمونات النخامية والمبيض وتطور بطانة الرحم ونمو حويصلة جراف والجسم الأصفر."
          }
        },
        {
          "id": "th_bio_l4",
          "titleEn": "Immunology & Human Defense Mechanisms",
          "titleAr": "المناعة في الكائنات الحية وآليات الدفاع في الإنسان",
          "summaryEn": "Plant structural and biochemical defenses, human lymphoid organs (bone marrow, thymus, spleen, lymph nodes, tonsils), lymphocytes (B, T, NK), antibodies IgG structure and 5 mechanisms, and humoral vs cell-mediated dual immunity.",
          "summaryAr": "المناعة التركيبية والبيوكيميائية في النبات، الأعضاء الليمفاوية في الإنسان (نخاع العظام، التيموسية، الطحال، العقد)، الأجسام المضادة IgG وطرق عملها الخمسة، والمناعة الخلطية والخلوية.",
          "theoryContentEn": "### 1. Immunity in Plants\n- **Structural Plant Defenses:**\n  - Pre-existing: Waxy epidermal cuticle (prevents water accumulation and fungal germination), epidermal hairs and thorns.\n  - Formed upon infection: Cork formation (isolates wounded tissue), tyloses (balloon-like outgrowths from xylem parenchyma that block infected xylem vessels), gum deposition around lesions, and hypersensitive response (plant kills its own infected leaves to starve the pathogen).\n- **Biochemical Plant Defenses:**\n  - Receptors: Recognize pathogen antigens and trigger defense cascades.\n  - Phenols and Flavonoids: Toxic non-protein chemical compounds inhibiting fungal growth.\n  - Non-protein amino acids: Canavanine and Cephalosporin (toxic amino acids).\n  - Anti-toxin enzymes: Detoxify microbial poisons.\n\n### 2. The Human Immune System\n- **Lymphoid Organs:**\n  - **Bone Marrow:** Primary organ producing all blood cells (RBCs, WBCs, platelets) and site of maturation for **B-cells** and **NK cells**.\n  - **Thymus Gland:** Primary organ situated behind sternum; secretes **Thymosin** to mature and differentiate stem cells into **T-lymphocytes** ($T_H, T_C, T_S$).\n  - **Spleen:** The \"lymph filter\" and graveyard of worn-out RBCs; rich in macrophages and lymphocytes.\n  - **Lymph Nodes:** Distributed along lymphatic vessels to filter lymph fluid from bacteria and cellular debris.\n  - **Tonsils & Peyer's Patches:** Guarding digestive and respiratory portals.\n- **Immune Cells:**\n  - **B-Lymphocytes (10–15% of blood lymphocytes):** Produce specific antibodies.\n  - **T-Lymphocytes (80% of blood lymphocytes):**\n    - Helper $T_H$ ($CD4^+$): Activates B-cells (via Interleukins) and cell-mediated immunity (via Cytokines).\n    - Cytotoxic $T_C$ ($CD8^+$): Destroys cancer cells, virally-infected cells, and transplanted organs via **Perforin** (pore-forming protein) and **Lymphotoxins** (apoptotic nucleases).\n    - Suppressor $T_S$ ($CD8^+$): Secretes **Lymphokines** to inhibit immune responses after infection clearance.\n  - **Natural Killer (NK) Cells (5–10%):** Attack abnormal cells and tumor cells via non-specific enzymes.\n  - **Phagocytes & Macrophages:** Fixed and circulating macrophages that phagocytose antigens, digest them with lysosomal lysozymes, and present antigen fragments bound to **MHC-II**.\n\n### 3. Antibodies (Immunoglobulins - Ig)\n- Y-shaped glycoproteins synthesized exclusively by differentiated **Plasma B-Cells**.\n- 5 Classes: $\\text{IgG}, \\text{IgM}, \\text{IgA}, \\text{IgE}, \\text{IgD}$ (abbreviated *GAMED*).\n- **Structure:** 2 identical heavy chains ($H$) linked to 2 identical light chains ($L$) by **4 interchain disulfide bridges (S-S)**. Each arm features a **Variable Region ($V_H, V_L$)** with an antigen-binding site specific to one epitope.\n- **5 Mechanisms of Antibody Action:**\n  1. **Neutralization:** Binding viral coats to prevent adhesion and genome injection.\n  2. **Agglutination (Clumping):** Pentameric $\\text{IgM}$ binds multiple microbes, aggregating them for rapid phagocytosis.\n  3. **Precipitation:** Insoluble antigen-antibody lattice formation.\n  4. **Lysis:** Activation of the complement cascade to punch holes in bacterial membranes.\n  5. **Antitoxin:** Binding toxins and activating complements to chemically neutralize poisonous compounds.",
          "theoryContentAr": "### ١. المناعة في النبات\n- **المناعة التركيبية:**\n  - حواجز فطرية موجودة سلفاً: الأدمة الخارجية للجدار الخلوي (الشعيرات، الأشواك، وطبقة الكيوتين الشمعية لمنع تجمع الماء وتكاثر الفطريات).\n  - وسائل تتكون كاستجابة للإصابة: تكوين الفلين (لعزل المناطق المقطوعة)، تكوين التيلوزات (نموات زائدة من الخلايا البارنشيمية المجاورة لقصيبات الخشب تسد الوعاء لمنع انتشار الميكروب)، ترسيب الصموغ حول مناطق الجروح، والتخلص من النسيج المصاب (الحساسية المفرطة حيث يقتل النبات نسيجه لمنع انتشار الغازي).\n- **المناعة البيوكيميائية:**\n  - المستقبلات: تدرك وجود الميكروب وتنشط دفاعات النبات.\n  - الفينولات والجلوكوزيدات: مركبات كيميائية سامة تقتل الكائنات الممرضة أو تثبط نموها.\n  - أحماض أمينية غير بروتينية: مثل الكانافانين والسيفالوسبورين وتعمل كمواد واقية.\n  - بروتينات مضادة للميكروبات: مثل إنزيمات نزع السمية التي تتفاعل مع سموم البكتيريا وتبطل مفعولها.\n\n### ٢. الجهاز المناعي في الإنسان\n- **الأعضاء الليمفاوية:**\n  - **نخاع العظام الأحمر:** ينتج جميع خلايا الدم، وموقع نضج وتمايز الخلايا البائية ($B$) والخلايا القاتلة الطبيعية ($NK$).\n  - **الغدة التيموسية:** تقع على القصبة الهوائية خلف القص، تفرز هرمون **التيموسين** الذي يحث على نضج الخلايا التائية وتمايزها إلى ($T_H, T_C, T_S$).\n  - **الطحال:** مقبرة كرات الدم الحمراء المسنة ومرشح الدم الليمفاوي الأكبر.\n  - **العقد الليمفاوية:** تنتشر على طول شبكة الأوعية الليمفاوية لتنقية اللمف من الميكروبات وحطام الخلايا.\n- **الخلايا الليمفاوية (٢٠ - ٣٠٪ من خلايا الدم البيضاء):**\n  - **الخلايا البائية (١٠ - ١٥٪):** تنتج الأجسام المضادة في المناعة الخلطية.\n  - **الخلايا التائية (٨٠٪):**\n    - تائية مساعدة $T_H$ ($CD4$): تنشط الخلايا البائية بالإنترلوكينات، وتنشط المناعة الخلوية بالسيتوكينات.\n    - تائية سامة $T_C$ ($CD8$): تهاجم الخلايا المصابة بفيروس والأورام والأنفجة المزروعة بإفراز **البيرفورين** (بروتين يثقب غشاء الخلية) و**السموم الليمفاوية** (تنشط جينات تؤدي لتدمير نواة الخلية).\n    - تائية مثبطة $T_S$ ($CD8$): تفرز **الليمفوكينات** بعد القضاء على الميكروب لتكبح الاستجابة المناعية وتوقف إنتاج الأجسام المضادة.\n  - **الخلايا القاتلة الطبيعية NK (٥ - ١٠٪):** تهاجم الأورام والفيروسات بإنزيمات غير متخصصة.\n  - **الخلايا البلعمية الكبيرة:** تبتلع الميكروبات وتفككها بالليسوسوم، وتربط شظايا الأنتيجين ببروتين التوافق النسيجي $MHC-II$ وتعرضه على سطحها لتنشيط $T_H$.\n\n### ٣. الأجسام المضادة (الجلبولينات المناعية)\n- بروتينات على شكل حرف Y تنتجها حصراً **الخلايا البائية البلازمية**.\n- خمس فئات رئيسية: $IgG, IgM, IgA, IgE, IgD$.\n- **التركيب:** سلسلتان ثقيلتان وسلسلتان خفيفتان ترتبط ببعضها بواسطة **٤ روابط كبريتيدية ثنائية (S-S)**. يحتوي كل ذراع على **منطقة متغيرة ($V_H, V_L$)** بها موقع ارتباط متخصص يتطابق مع أنتيجين محدد كالقفل والمفتاح.\n- **طرق عمل الأجسام المضادة الخمسة:**\n  ١. التعادل (تحييد الفيروسات ومنع اختراقها).\n  ٢. التلازن (تجمع ميكروبات كثيرة بواسطة IgM ذي الـ ١٠ مواقع).\n  ٣. الترسيب (ترسيب الأنتيجينات الذائبة).\n  ٤. التحلل (تنشيط المتممات لإذابة غلاف الميكروب).\n  ٥. إبطال مفعول السموم (تفاعل الأجسام والمتممات مع السموم لإبطال سميتها).",
          "formulas": [
            {
              "labelEn": "Interchain Disulfide Bridges in IgG",
              "labelAr": "الروابط الكبريتيدية البينية في جزيء IgG",
              "latex": "N_{\\text{S-S}} = 4\\,\\text{Bridges}"
            },
            {
              "labelEn": "Antigen Binding Sites per Monomeric IgG",
              "labelAr": "مواقع الارتباط بالأنتيجين في IgG",
              "latex": "N_{\\text{binding}} = 2\\,\\text{Sites}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Biology Textbook Grade 12",
            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-BIO-CH4-L1",
            "pageRange": "pp. 105 - 138"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: Innate & Acquired Immunity Pathways",
            "titleAr": "خطة درس: مسارات المناعة الفطرية والمكتسبة والأجسام المضادة",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-BIO-CH4-L1",
            "bloomsObjectivesEn": [
              "Compare plant structural defenses formed before infection versus those triggered post-infection.",
              "Differentiate between humoral B-cell immunity and cell-mediated cytotoxic T-cell immunity.",
              "Analyze the structural significance of variable regions, disulfide bonds, and hinge regions in IgG antibodies."
            ],
            "bloomsObjectivesAr": [
              "المقارنة بين وسائل المناعة التركيبية الفطرية والمستحدثة في النبات (التيلوزات والصموغ والحساسية المفرطة).",
              "التمييز بين آليات المناعة الخلطية بالخلايا البائية والمناعة الخلوية بالخلايا التائية السامة.",
              "تحليل التركيب الفراغي للجسم المضاد IgG ودور الروابط الكبريتيدية والمواقع المتغيرة في التخصص المناعي."
            ],
            "prerequisitesEn": [
              "Blood components",
              "Protein quaternary structure",
              "Phagocytosis"
            ],
            "prerequisitesAr": [
              "مكونات الدم وخلايا الدم البيضاء",
              "التركيب الرباعي للبروتينات",
              "البلعمة الخلوية"
            ],
            "keyVocabularyEn": [
              {
                "term": "Perforin",
                "definition": "A pore-forming protein secreted by cytotoxic T-cells to puncture target cell membranes."
              },
              {
                "term": "Major Histocompatibility Complex (MHC)",
                "definition": "Cell-surface protein that presents processed antigen fragments to T-lymphocytes."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "البيرفورين (البروتين صانع الثقوب)",
                "definition": "بروتين تفرزه الخلايا التائية السامة T_C يثقب غشاء الخلية المصابة لتدميرها."
              },
              {
                "term": "بروتين التوافق النسيجي (MHC)",
                "definition": "بروتين يرتبط بشظايا الأنتيجين المعالجة داخل البلعمية ويعرضها على السطح لتتعرف عليها T_H."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Plant Immunity Adaptations",
                "phaseAr": "مناعة النبات التكيفية",
                "duration": "20 mins",
                "activitiesEn": "Analyzing tyloses in xylem vessels under microscope and gum secretions.",
                "activitiesAr": "دراسة تكوين التيلوزات في أوعية الخشب ومقارنة الفينولات بالجلوكوزيدات."
              },
              {
                "phaseEn": "Human Lymphoid Organs & Cells",
                "phaseAr": "الأعضاء والخلايا الليمفاوية",
                "duration": "35 mins",
                "activitiesEn": "Tracing maturation of B and T cells in bone marrow and thymus.",
                "activitiesAr": "تتبع نضج الخلايا الليمفاوية في نخاع العظام والغدة التيموسية ودور الطحال والعقد."
              },
              {
                "phaseEn": "Humoral vs Cell-Mediated Cascade",
                "phaseAr": "مسارات المناعة الخلطية والخلوية",
                "duration": "35 mins",
                "activitiesEn": "Simulating the step-by-step cytokine and perforin cascade from antigen capture to suppression.",
                "activitiesAr": "محاكاة تفاعلية لدور الإنترلوكينات والسيتوكينات والبيرفورين ثم الليمفوكينات."
              }
            ],
            "commonMisconceptionsEn": [
              "Thinking antibodies penetrate inside living cells to kill viruses (antibodies cannot cross cell membranes; T_C cells destroy infected cells).",
              "Assuming tyloses are present in healthy plants (tyloses only form after injury to xylem vessels)."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن الأجسام المضادة تدخل داخل الخلايا الحية لقتل الفيروس (الأجسام المضادة لا تنفذ عبر الغشاء؛ الخلايا التائية السامة هي من تدمر الخلايا المصابة).",
              "الظن بأن التيلوزات توجد في النبات السليم (تتكون التيلوزات فقط عند تعرض الجهاز الوعائي للقطع أو الغزو)."
            ],
            "differentiationEn": {
              "struggling": "Use the lock-and-key 3D antibody model to illustrate antigen-binding cleft specificity.",
              "advanced": "Analyze monoclonal antibody synthesis via hybridoma technology and target epitope affinity."
            },
            "differentiationAr": {
              "struggling": "استخدام مجسم القفل والمفتاح لتوضيح تطابق موقع الارتباط مع مولد الضد.",
              "advanced": "تفسير إنتاج الأجسام المضادة وحيدة النسيلة (Monoclonal antibodies) بواسطة تقنية الهجين الخلوي."
            },
            "formativeAssessmentEn": "What is the specific biochemical weapon deployed by cytotoxic T-cells (T_C) to perforate host cell membranes?",
            "formativeAssessmentAr": "ما هو السلاح البيوكيميائي المتخصص الذي تفرزه الخلايا التائية السامة لثقب أغشية الخلايا الغازية؟",
            "exitTicketQuestion": {
              "questionEn": "How many interchain disulfide bridges connect the two heavy chains together in a standard monomeric IgG antibody?",
              "questionAr": "كم عدد الروابط الكبريتيدية الثنائية التي تربط السلسلتين الثقيلتين معاً في منطقة المفصلة لجزيء IgG؟",
              "solutionEn": "Exactly 2 interchain disulfide bridges connect the two heavy chains together at the hinge region (out of 4 primary interchain bonds in total).",
              "solutionAr": "ترتبط السلسلتان الثقيلتان معاً برابطتين كبريتيديتين ثنائيتين عند منطقة المفصلة (من أصل ٤ روابط كبريتيدية بينية في جزيء الجسم المضاد ككل)."
            }
          },
          "worksheet": {
            "id": "th_bio_ws_4",
            "titleEn": "Worksheet: Lymphocyte Ratios & Antibody Molecular Topology",
            "titleAr": "ورقة عمل: نسب الخلايا الليمفاوية والتركيب الجزيئي للأجسام المضادة",
            "descriptionEn": "Rigorous problems calculating white blood cell counts, lymphocyte percentages, and antibody binding sites.",
            "descriptionAr": "مسائل رياضية دقيقة على حساب نسب خلايا الدم البيضاء، أعداد الخلايا التائية والبائية، ومواقع ارتباط الأجسام المضادة.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_bio_ws_p4_1",
                "titleEn": "Lymphocyte Subpopulation Calculations",
                "titleAr": "حسابات أعداد الخلايا التائية والبائية في عينة دم",
                "difficulty": "medium",
                "questionEn": "A blood sample contains 8,000 white blood cells per cubic millimeter. If lymphocytes represent 25% of the total WBCs, what is the average number of T-lymphocytes present in this sample?",
                "questionAr": "عينة دم تحتوي على ٨,٠٠٠ خلية دم بيضاء في المليمتر المكعب. فإذا كانت الخلايا الليمفاوية تمثل ٢٥٪ من إجمالي خلايا الدم البيضاء، فما متوسط عدد الخلايا التائية في هذه العينة؟",
                "optionsEn": [
                  "1,600 T-cells",
                  "2,000 T-cells",
                  "800 T-cells",
                  "250 T-cells"
                ],
                "optionsAr": [
                  "١,٦٠٠ خلية تائية",
                  "٢,٠٠٠ خلية تائية",
                  "٨٠٠ خلية تائية",
                  "٢٥٠ خلية تائية"
                ],
                "correctAnswer": "1,600 T-cells",
                "correctIndex": 0,
                "hintEn": "Calculate total lymphocytes first ($8000 \\times 25\\% = 2000$), then calculate T-cells as 80% of lymphocytes.",
                "hintAr": "احسب عدد الخلايا الليمفاوية أولاً ($٨٠٠٠ \\times ٢٥٪ = ٢٠٠٠$)، ثم احسب الخلايا التائية كـ ٨٠٪ من الليمفاوية.",
                "stepByStepSolutionEn": [
                  "Total lymphocytes = $8,000 \\times 0.25 = 2,000$ cells/$\\text{mm}^3$.",
                  "T-lymphocytes constitute approximately 80% of total lymphocytes.",
                  "Number of T-cells = $2,000 \\times 0.80 = 1,600$ cells/$\\text{mm}^3$."
                ],
                "stepByStepSolutionAr": [
                  "عدد الخلايا الليمفاوية = $٨,٠٠٠ \\times ٠.٢٥ = ٢,٠٠٠$ خلية/مم٣.",
                  "الخلايا التائية تمثل نحو ٨٠٪ من إجمالي الخلايا الليمفاوية.",
                  "متوسط عدد الخلايا التائية = $٢,٠٠٠ \\times ٠.٨٠ = ١,٦٠٠$ خلية تائية/مم٣."
                ],
                "teacherTipEn": "Remember lymphocyte percentages: T-cells are 80%, B-cells are 10-15%, and NK cells are 5-10% of total lymphocytes.",
                "teacherTipAr": "احفظ نسب الخلايا الليمفاوية: التائية ٨٠٪، البائية من ١٠-١٥٪، والقاتلة الطبيعية من ٥-١٠٪ من الليمفاوية."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "Immunoglobulin IgG & Immune Response Simulator",
            "titleAr": "محاكي تركيب الأجسام المضادة IgG والاستجابة المناعية",
            "descriptionEn": "Explore IgG heavy/light chains, antigen-binding variable clefts, and dual humoral vs cell-mediated defense curves.",
            "descriptionAr": "استكشاف بنية الجسم المضاد IgG وسلاسله الثقيلة والخفيفة وروابطه الكبريتيدية، ومقارنة الاستجابة المناعية الأولية والثانوية."
          }
        },
        {
          "id": "th_bio_l5",
          "titleEn": "Molecular Biology, Genetic Code & Recombinant DNA",
          "titleAr": "البيولوجيا الجزيئية والشفرة الوراثية والهندسة الوراثية",
          "summaryEn": "DNA proof as genetic material, Watson-Crick double helix, replication enzymes, transcription of mRNA/tRNA/rRNA, 64-codon universal code, translation on ribosomes, and recombinant DNA applications.",
          "summaryAr": "إثبات DNA كمادة وراثية، لولب واطسون وكريك المزدوج، إنزيمات التضاعف، نسخ mRNA و tRNA و rRNA، الشفرة الوراثية العالمية (٦٤ كودون)، الترجمة في الريبوسومات، وتطبيقات الهندسة الوراثية.",
          "theoryContentEn": "### 1. Proof of DNA as the Genetic Material\n- **Bacterial Transformation (Griffith 1928, Avery 1944):**\n  - Smooth ($S$) virulent strain vs Rough ($R$) non-virulent strain.\n  - Heat-killed $S$ + living $R$ killed mice; Avery isolated DNA and showed **Deoxyribonuclease (DNase)** destroys transforming activity, while proteases do not.\n- **Hershey-Chase Bacteriophage Experiment (1952):**\n  - Labeled bacteriophage $T_2$ protein with $^{35}\\text{S}$ and DNA with $^{32}\\text{P}$. Only $^{32}\\text{P}$ entered bacteria, proving DNA is the genetic material.\n\n### 2. DNA Architecture and Replication\n- **Watson-Crick Double Helix (1953):**\n  - Antiparallel strands: One $5' \\to 3'$, opposite $3' \\to 5'$.\n  - Purines ($A, G$) pair with Pyrimidines ($T, C$): $A = T$ (2 H-bonds), $G \\equiv C$ (3 H-bonds).\n  - Chargaff rules: $\\%A = \\%T$ and $\\%G = \\%C$.\n- **Replication Enzymes:**\n  - **DNA Helicase:** Unwinds the double helix at replication forks.\n  - **DNA Polymerase:** Synthesizes new strand strictly in the $5' \\to 3'$ direction. Leading strand is continuous; lagging strand is synthesized as discontinuous Okazaki fragments.\n  - **DNA Ligase:** Joins Okazaki fragments and repairs mismatched base mutations (repairs thousands of spontaneous depurinations daily).\n\n### 3. RNA & Protein Biosynthesis (Central Dogma)\n- **Transcription (DNA $\\to$ mRNA):**\n  - **RNA Polymerase** binds promoter and synthesizes mRNA complementary to template strand in $5' \\to 3'$ direction.\n  - mRNA features: $5'$ Methylated Guanosine Cap, $AUG$ Start Codon, coding sequence, Stop Codon ($UAA, UAG, UGA$), and $3'$ Poly-A Tail (~200 adenines protecting against enzymatic degradation).\n- **The Genetic Code (64 Codons):**\n  - Triplet, degenerate (multiple codons code for same amino acid), universal across all living organisms.\n- **Translation on Ribosomes:**\n  - Ribosome consists of Small and Large subunits with $P$-site (Peptidyl) and $A$-site (Aminoacyl).\n  - Initiation: Small subunit binds mRNA at cap; initiator $tRNA^{\\text{Met}}$ binds $AUG$; large subunit binds.\n  - Elongation: Peptide bond formed by **Peptidyl Transferase** (rRNA ribozyme). Ribosome translocates by one codon ($5' \\to 3'$).\n  - Termination: Release Factor binds Stop Codon, dissociating ribosomal complex and releasing nascent polypeptide.\n\n### 4. Recombinant DNA Technology\n- **Restriction Endonucleases:** Bacterial enzymes recognizing specific palindromic sequences (4–7 bp) and cleaving DNA producing sticky ends.\n- **Plasmids & DNA Cloning:** Splicing foreign genes into bacterial plasmids via DNA ligase to produce recombinant human insulin and interferon.\n- **Polymerase Chain Reaction (PCR):** Thermal cycler automated amplification using thermostable **Taq Polymerase** at high temperatures ($95^\\circ\\text{C} \\to 55^\\circ\\text{C} \\to 72^\\circ\\text{C}$).",
          "theoryContentAr": "### ١. إثبات DNA كمادة وراثية\n- **التحول البكتيري (جريفث ١٩٢٨، وأفري ١٩٤٤):**\n  - سلالة $S$ المميتة وسلالة $R$ غير المميتة.\n  - تسخين $S$ وخلطها مع حية $R$ قتل الفئران؛ عزل أفري مادة التحول وأثبت أن إنزيم **دي أوكسي ريبونيوكليز (DNase)** هو الوحيد الذي يحلل DNA تماماً ويوقف التحول البكتيري، بينما إنزيمات البروتين لا تؤثر.\n- **تجربة هيرشي وتشيس (١٩٥٢) بالبكتيريوفاج:**\n  - ترقيم بروتين الفاج بالكبريت المشع $^{35}\\text{S}$ وترقيم DNA بالفوسفور المشع $^{32}\\text{P}$. دخل الفوسفور المشع فقط إلى داخل البكتيريا، مما أثبت بشكل قاطع أن DNA هو المادة الوراثية.\n\n### ٢. تركيب وتضاعف DNA\n- **نموذج واطسون وكريك للولب المزدوج (١٩٥٣):**\n  - شريطان متعاكسان: أحدهما في اتجاه $5' \\to 3'$ والآخر في اتجاه $3' \\to 5'$.\n  - البيورينات ذات الحلقتين ($A, G$) ترتبط بالبيريميدينات ذات الحلقة ($T, C$): $A = T$ برابطتين هيدروجينيتين، $G \\equiv C$ بثلاث روابط هيدروجينية.\n  - قواعد شارجاف: نسبة $A = T$ ونسبة $G = C$.\n- **إنزيمات التضاعف:**\n  - **إنزيم اللولب:** يفصل شريطي DNA عن بعضهما عند شوكة التضاعف بكسر الروابط الهيدروجينية.\n  - **إنزيم بلمرة DNA:** يبني الشريط الجديد حصراً في اتجاه $5' \\to 3'$. الشريط القالب $3' \\to 5'$ يبنى شريطه المقابل متصلاً، بينما القالب $5' \\to 3'$ يبنى في صورة قطع صغيرة (أوكازاكي).\n  - **إنزيم الربط:** يربط قطع أوكازاكي، ويصلح عيوب وتلف قواعد DNA الناتجة عن الحرارة والبيئة المائية (يصلح آلاف العيوب يومياً بالاعتماد على الشريط المقابل).\n\n### ٣. تخليق البروتين والعقيدة المركزية\n- **النسخ (من DNA إلى mRNA):**\n  - يرتبط إنزيم **بلمرة RNA** بالمحفز ويبني جزيء mRNA مكملاً للشريط القالب في اتجاه $5' \\to 3'$.\n  - أجزاء mRNA: موقع الارتباط بالريبوسوم، كودون البدء $AUG$، تتابعات الشفرة، كودون الوقف ($UAA$ أو $UAG$ أو $UGA$)، وذيل عديد الأدينين (~٢٠٠ قاعدة لحمايته من التحلل في السيتوبلازم).\n- **الشفرة الوراثية (٦٤ كودون):**\n  - ثلاثية، شاملة وعامة لجميع الكائنات الحية، وبها ترادف (أكثر من كودون للحمض الأميني الواحد).\n- **الترجمة في الريبوسومات:**\n  - الريبوسوم يتكون من تحت وحدتين وموقعين نشطين: موقع الببتيديل ($P$) وموقع الأمينوأسيل ($A$).\n  - البدء: ارتباط تحت الوحدة الصغيرة ثم أول tRNA حامل للميثيونين ثم تحت الوحدة الكبيرة.\n  - الاستطالة: تتكون الرابطة الببتيدية بواسطة إنزيم **تفاعل نقل الببتيديل** (جزء من تحت الوحدة الكبيرة)، ويتحرك الريبوسوم بمقدار كودون واحد.\n  - الإنهاء: يرتبط **عامل الإطلاق** بكودون الوقف، فتنفصل السلسلة البروتينية وتتفكك تحت وحدتي الريبوسوم.\n\n### ٤. تكنولوجيا DNA معاد الاتحاد والهندسة الوراثية\n- **إنزيمات القصر البكتيرية:** تتعرف على تتابعات نيوكليوتيدات متماثلة (Palindromes) من ٤ إلى ٧ أزواج وتقص عندها تاركة أطرافاً لاصقة.\n- **البلازميدات واستنساخ التتابعات:** إدخال جينات بشرية (مثل جين الإنسولين البشري والإنترفيرون) في بلازميدات البكتيريا وإنتاجها تجارياً.\n- **جهاز التفاعل المتسلسل للبلمرة (PCR):** يضاعف قطع DNA آلاف المرات في دقائق معدودة باستخدام إنزيم **تاك بوليمريز (Taq Polymerase)** المقاوم لدرجات الحرارة العالية.",
          "formulas": [
            {
              "labelEn": "Universal Genetic Code Total Codons",
              "labelAr": "إجمالي كودونات الشفرة الوراثية",
              "latex": "4^3 = 64\\,\\text{Codons}"
            },
            {
              "labelEn": "Amino Acid Coding Codons",
              "labelAr": "كودونات تترجم لأحماض أمينية",
              "latex": "64 - 3\\,\\text{Stops} = 61\\,\\text{Codons}"
            }
          ],
          "moeRef": {
            "bookTitleEn": "Ministry Biology Textbook Grade 12",
            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
            "grade": "Grade 12",
            "term": "Full Year",
            "officialCode": "MOE-SEC3-BIO-CH5-L1",
            "pageRange": "pp. 139 - 180"
          },
          "lessonPlan": {
            "titleEn": "Lesson Plan: DNA Central Dogma & Protein Biosynthesis",
            "titleAr": "خطة درس: العقيدة المركزية للـ DNA وتخليق البروتين في الريبوسوم",
            "gradeLevel": "Grade 12 Secondary",
            "durationMinutes": 90,
            "moeCode": "MOE-SEC3-BIO-CH5-L1",
            "bloomsObjectivesEn": [
              "Compare DNA replication and transcription enzymes by directionality and fidelity.",
              "Decode mRNA sequences using the 64-codon universal table and translate into polypeptide chains.",
              "Evaluate the mechanism of restriction endonucleases in recombinant DNA vector ligation."
            ],
            "bloomsObjectivesAr": [
              "المقارنة بين إنزيمات تضاعف DNA وإنزيم بلمرة RNA من حيث اتجاه البناء والدقة.",
              "ترجمة تتابعات mRNA باستخدام جدول الشفرة الوراثية الكامل إلى سلسلة عديد ببتيد.",
              "تفسير دور إنزيمات القصر البكتيرية وإنزيمات الربط في بناء بلازميدات DNA معاد الاتحاد."
            ],
            "prerequisitesEn": [
              "Nucleotide structure",
              "Base pairing rules",
              "Ribosomal structure"
            ],
            "prerequisitesAr": [
              "تركيب النيوكليوتيدة",
              "قواعد تكامل القواعد النتروجينية",
              "تركيب الريبوسومات"
            ],
            "keyVocabularyEn": [
              {
                "term": "Peptidyl Transferase",
                "definition": "Enzymatic component of the large ribosomal subunit that catalyzes peptide bond formation."
              },
              {
                "term": "Sticky Ends",
                "definition": "Single-stranded overhangs produced by restriction enzyme cleavage that pair with complementary vectors."
              }
            ],
            "keyVocabularyAr": [
              {
                "term": "تفاعل نقل الببتيديل",
                "definition": "تفاعل كيميائي ينشطه إنزيم بروتيني ريبوزي في تحت الوحدة الكبيرة لتكوين الروابط الببتيدية."
              },
              {
                "term": "الأطراف اللاصقة",
                "definition": "أطراف مفردة قصيرة مائلة تنتج عن قص إنزيمات القصر وتتكامل مع أي DNA قُص بنفس الإنزيم."
              }
            ],
            "teachingPacing": [
              {
                "phaseEn": "Hershey-Chase & Watson-Crick Double Helix",
                "phaseAr": "تجارب المادة الوراثية ونموذج واطسون وكريك",
                "duration": "25 mins",
                "activitiesEn": "Analyzing bacteriophage radiolabeling and double helix dimensions.",
                "activitiesAr": "مناقشة تجربة هيرشي وتشيس بالفسفور المشع وحسابات لفات لولب DNA."
              },
              {
                "phaseEn": "Transcription & Translation Studio",
                "phaseAr": "استوديو النسخ والترجمة",
                "duration": "35 mins",
                "activitiesEn": "Interactive translation of codons using the complete 64-codon table.",
                "activitiesAr": "تطبيق عملي على ترجمة تتابعات mRNA وتحديد مضادات الكودونات في tRNA."
              },
              {
                "phaseEn": "Genetic Engineering & PCR Tech",
                "phaseAr": "الهندسة الوراثية وتطبيقات PCR",
                "duration": "30 mins",
                "activitiesEn": "Simulating restriction endonuclease cleavage and plasmid recombination.",
                "activitiesAr": "محاكاة مواقع التعرف وقص إنزيمات القصر وإنتاج الإنسولين بالبكتيريا."
              }
            ],
            "commonMisconceptionsEn": [
              "Assuming all 64 codons code for amino acids (3 codons UAA, UAG, UGA are STOP codons that code for no amino acids).",
              "Thinking DNA polymerase can initiate new strand synthesis without a free 3-OH group."
            ],
            "commonMisconceptionsAr": [
              "الاعتقاد بأن جميع الكودونات الـ ٦٤ تشفر لأحماض أمينية (٣ كودونات وقف UAA, UAG, UGA لا تشفر لأي حمض أميني).",
              "الظن بأن إنزيم بلمرة DNA يبني في اتجاه 3 إلى 5 (يبني حصراً في اتجاه 5 إلى 3)."
            ],
            "differentiationEn": {
              "struggling": "Use magnetic physical codon blocks to simulate A-site and P-site ribosomal translocation.",
              "advanced": "Calculate the total number of phosphodiester bonds and hydrogen bonds in a plasmid of 4,000 base pairs."
            },
            "differentiationAr": {
              "struggling": "استخدام بطاقات ملونة لتمثيل حركة الريبوسوم وانتقال tRNA بين الموقعين P و A.",
              "advanced": "حساب عدد الروابط التساهمية الفوسفاتية والهيدروجينية في بلازميد حلقي طوله ٤,٠٠٠ زوج من القواعد."
            },
            "formativeAssessmentEn": "What is the anticodon carried by the initiator tRNA that binds the start codon AUG?",
            "formativeAssessmentAr": "ما هو مضاد الكودون الذي يحمله أول جزيء tRNA يرتبط بكودون البدء AUG؟",
            "exitTicketQuestion": {
              "questionEn": "If an mRNA molecule contains 300 nucleotides from the start codon to the stop codon inclusive, how many amino acids are in the synthesized peptide?",
              "questionAr": "إذا كان جزيء mRNA يحتوي على ٣٠٠ نيوكليوتيدة من كودون البدء وحتى كودون الوقف شاملاً كلاهما، فكم يكون عدد الأحماض الأمينية في السلسلة الناتجة؟",
              "solutionEn": "$300 / 3 = 100$ total codons. Subtracting 1 stop codon (which does not code for any amino acid) leaves 99 amino acids.",
              "solutionAr": "$٣٠٠ / ٣ = ١٠٠$ كودون. وبطرح كودون الوقف (الذي لا يترجم لأي حمض أميني) يكون عدد الأحماض الأمينية = ٩٩ حمضاً أمينياً."
            }
          },
          "worksheet": {
            "id": "th_bio_ws_5",
            "titleEn": "Worksheet: Nucleic Acid Stoichiometry & Codon Translation",
            "titleAr": "ورقة عمل: حسابات الأحماض النووية والشفرة الوراثية",
            "descriptionEn": "Rigorous problems on hydrogen bonds, base pairs, helical turns, and amino acid sequences from gene templates.",
            "descriptionAr": "مسائل رياضية دقيقة على عدد الروابط الهيدروجينية، عدد لفات اللولب المزدوج، وترجمة الجينات.",
            "estimatedTimeMinutes": 45,
            "problems": [
              {
                "id": "th_bio_ws_p5_1",
                "titleEn": "DNA Helical Turns and Hydrogen Bonds",
                "titleAr": "حساب لفات جزيء DNA والروابط الهيدروجينية",
                "difficulty": "medium",
                "questionEn": "A piece of double-stranded DNA contains 10 complete helical turns. If the number of adenine bases is 30, what is the total number of hydrogen bonds in this piece?",
                "questionAr": "قطعة من لولب DNA مزدوج تحتوي على ١٠ لفات كاملة. فإذا كان عدد قواعد الأدينين في هذه القطعة يساوي ٣٠ قاعدة، فاحسب العدد الكلي للروابط الهيدروجينية في هذه القطعة.",
                "optionsEn": [
                  "270 hydrogen bonds",
                  "200 hydrogen bonds",
                  "230 hydrogen bonds",
                  "300 hydrogen bonds"
                ],
                "optionsAr": [
                  "٢٧٠ رابطة هيدروجينية",
                  "٢٠٠ رابطة هيدروجينية",
                  "٢٣٠ رابطة هيدروجينية",
                  "٣٠٠ رابطة هيدروجينية"
                ],
                "correctAnswer": "270 hydrogen bonds",
                "correctIndex": 0,
                "hintEn": "Each complete turn has 10 base pairs (20 nucleotides). Total nucleotides = 200. Pair $A=T$ has 2 bonds, $G=C$ has 3 bonds.",
                "hintAr": "كل لفة تحتوي على ١٠ أزواج من النيوكليوتيدات (٢٠ نيوكليوتيدة). الإجمالي = ٢٠٠ نيوكليوتيدة. $A=T$ برابطتين، و $G=C$ بثلاث روابط.",
                "stepByStepSolutionEn": [
                  "Total nucleotides = $10 \\text{ turns} \\times 20 = 200$ nucleotides (100 base pairs).",
                  "Since $A = 30$, then $T = 30$. Total $A + T = 60$ bases (30 pairs).",
                  "Remaining base pairs $G-C = 100 - 30 = 70$ pairs.",
                  "Hydrogen bonds = $(30 \\times 2) + (70 \\times 3) = 60 + 210 = 270$ hydrogen bonds."
                ],
                "stepByStepSolutionAr": [
                  "إجمالي النيوكليوتيدات = $١٠ \\text{ لفات} \\times ٢٠ = ٢٠٠$ نيوكليوتيدة (١٠٠ زوج من القواعد).",
                  "بما أن $A = ٣٠$، إذن $T = ٣٠$. مجموع $A + T = ٦٠$ قاعدة (٣٠ زوجاً).",
                  "أزواج $G - C$ المتبقية = $١٠٠ - ٣٠ = ٧٠$ زوجاً.",
                  "مجموع الروابط الهيدروجينية = $(٣٠ \\times ٢) + (٧٠ \\times ٣) = ٦٠ + ٢١٠ = ٢٧٠$ رابطة هيدروجينية."
                ],
                "teacherTipEn": "Every complete helical turn of dsDNA spans 3.4 nm and contains exactly 10 base pairs (20 nucleotides).",
                "teacherTipAr": "كل لفة كاملة من اللولب المزدوج لـ DNA تحتوي بدقة على ١٠ أزواج من النيوكليوتيدات (٢٠ نيوكليوتيدة)."
              }
            ]
          },
          "interactiveWidget": {
            "type": "statics_friction",
            "titleEn": "DNA Double Helix & 64-Codon Translation Engine",
            "titleAr": "محاكي اللولب المزدوج ومحرك ترجمة الشفرة الوراثية (٦٤ كودون)",
            "descriptionEn": "Interactive 64-codon table, Watson-Crick base pairing, and ribosomal peptide elongation simulator.",
            "descriptionAr": "جدول تفاعلي كامل للشفرة الوراثية يضم ٦٤ كودون، مع محاكاة ازدواج القواعد وتخليق البروتين."
          }
        }
      ],
      solvedExamples: [
        {
          id: 'th_bio_se_01',
          titleEn: 'MoE Example 1: Motor Unit Calculations',
          titleAr: 'مثال الوزارة ١: حسابات ألياف الوحدة الحركية',
          difficulty: 'easy',
          questionEn: 'A skeletal muscle consists of 10 motor units. If each motor unit innervates 40 muscle fibers, calculate the total number of muscle fibers in this muscle.',
          questionAr: 'عضلة هيكلية تتكون من 10 وحدات حركية. فإذا كانت كل وحدة حركية تغذي 40 ليفة عضلية، فاحسب العدد الكلي للألياف العضلية في هذه العضلة.',
          optionsEn: ['400 muscle fibers', '40 muscle fibers', '100 muscle fibers', '4000 muscle fibers'],
          optionsAr: ['400 ليفة عضلية', '40 ليفة عضلية', '100 ليفة عضلية', '4000 ليفة عضلية'],
          correctAnswer: '400 muscle fibers',
          correctIndex: 0,
          hintEn: 'Total muscle fibers = Number of motor units $\\times$ fibers per motor unit.',
          hintAr: 'العدد الكلي للألياف العضلية = عدد الوحدات الحركية $\\times$ عدد الألياف في الوحدة الواحدة.',
          stepByStepSolutionEn: [
            'Total muscle fibers = $10 \\times 40 = 400$ fibers.',
            'Each motor unit is supplied by 1 motor neuron, so there are also 10 motor neurons.'
          ],
          stepByStepSolutionAr: [
            'العدد الكلي للألياف العضلية = $10 \\times 40 = 400$ ليفة عضلية.',
            'كل وحدة حركية يغذيها ليف عصبي حركي واحد، إذن تحتوي العضلة على 10 ألياف عصبية حركية.'
          ],
          teacherTipEn: 'The ratio of nerve fibers to muscle fibers determines the precision of muscle movement.',
          teacherTipAr: 'النسبة بين عدد الألياف العصبية والألياف العضلية تحدد مدى دقة وقوة الحركة.'
        }
      ],
      exerciseProblems: [
        {
          id: 'th_bio_ex_01',
          titleEn: 'Exercise 1: Sarcomere Bands During Contraction',
          titleAr: 'تمرين ١: أطوال مناطق القطعة العضلية أثناء الانقباض',
          difficulty: 'easy',
          questionEn: 'During complete skeletal muscle contraction according to Huxley\'s sliding filament model, which of the following regions remains completely unchanged in length?',
          questionAr: 'أثناء الانقباض التام للعضلة الهيكلية وفقاً لنظرية الخيوط المنزلقة لهكسلي، أي من المناطق التالية يظل طولها ثابتاً دون أي تغير؟',
          optionsEn: ['The Dark A-Band', 'The Light I-Band', 'The Semi-light H-Zone', 'The distance between two Z-lines'],
          optionsAr: ['المنطقة الداكنة A', 'المنطقة المضيئة I', 'المنطقة شبه المضيئة H', 'المسافة بين خطي Z'],
          correctAnswer: 'The Dark A-Band',
          correctIndex: 0,
          hintEn: 'The dark A-band represents the constant physical length of the thick myosin filaments.',
          hintAr: 'المنطقة الداكنة A تمثل الطول الفعلي لخيوط الميوسين السميكة ولا يتغير طولها أثناء الانزلاق.',
          stepByStepSolutionEn: [
            'During contraction, actin filaments slide past myosin filaments.',
            'The distance between Z-lines shortens (sarcomere shortens).',
            'The light I-band shortens as actin overlaps further with myosin.',
            'The semi-light H-zone narrows and may disappear completely.',
            'The dark A-band remains strictly unchanged in length because the myosin filaments do not shorten.'
          ],
          stepByStepSolutionAr: [
            'أثناء الانقباض تنزلق خيوط الأكتين فوق خيوط الميوسين.',
            'تقترب خطوط Z من بعضها فيقل طول القطعة العضلية ككل.',
            'يقل طول المنطقة المضيئة I نتيجة تداخل الأكتين.',
            'تقل المنطقة شبه المضيئة H وقد تختفي تماماً عند الانقباض التام.',
            'تظل المنطقة الداكنة A ثابتة في الطول لأنها تمثل طول خيوط الميوسين التي لا تنكمش.'
          ],
          teacherTipEn: 'Always remember: A-band is constant ($\\Delta L_A = 0$), while I, H, and sarcomere length decrease.',
          teacherTipAr: 'تذكر دائماً: المنطقة الداكنة A طولها ثابت تماماً، بينما يقل طول كل من I و H والقطعة العضلية.'
        }
      ],
      databank: bioCh1Databank
    }
  ]
};
