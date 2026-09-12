import type { Branch } from '../types/curriculum';

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
      databank: {
        easy: [
          {
            id: 'th_bio_db_easy_01',
            titleEn: 'Total Bones in Adult Human Skeleton',
            titleAr: 'عدد عظام الهيكل العظمي في الإنسان البالغ',
            difficulty: 'easy',
            questionEn: 'How many bones are present in the adult human skeleton?',
            questionAr: 'كم يبلغ عدد عظام الهيكل العظمي في الإنسان البالغ؟',
            optionsEn: ['206 bones', '208 bones', '270 bones', '300 bones'],
            optionsAr: ['206 عظمة', '208 عظام', '270 عظمة', '300 عظمة'],
            correctAnswer: '206 bones',
            correctIndex: 0,
            hintEn: 'The adult human skeleton comprises 80 axial bones and 126 appendicular bones.',
            hintAr: 'يتكون الهيكل العظمي في الإنسان البالغ من 80 عظمة في الهيكل المحوري و 126 عظمة في الهيكل الطرفي.',
            stepByStepSolutionEn: [
              'Axial skeleton: 80 bones.',
              'Appendicular skeleton: 126 bones.',
              'Total count: $80 + 126 = 206$ bones.'
            ],
            stepByStepSolutionAr: [
              'الهيكل المحوري: 80 عظمة.',
              'الهيكل الطرفي: 126 عظمة.',
              'المجموع الكلي: $80 + 126 = 206$ عظمة في الإنسان البالغ.'
            ],
            teacherTipEn: 'Infants have more bones (~270), which later fuse during development.',
            teacherTipAr: 'يولد الطفل بعدد أكبر من العظام (~270 عظمة) تلتحم مع النمو لتصبح 206 عظمة في البالغين.'
          }
        ],
        medium: [
          {
            id: 'th_bio_db_med_01',
            titleEn: 'Connective Tissue Joining Muscle to Bone',
            titleAr: 'النسيج الضام الذي يربط العضلات بالعظام',
            difficulty: 'medium',
            questionEn: 'Which fibrous connective tissue structure specifically connects skeletal muscles to bones, such as connecting the calf muscle to the heel bone?',
            questionAr: 'أي تراكيب الأنسجة الضامة الليفية التالية تربط العضلات الهيكلية بالعظام، مثل ربط العضلة التوأمية بعظمة الكعب؟',
            optionsEn: ['Tendons (e.g., Achilles tendon)', 'Ligaments', 'Cartilage', 'Synovial membranes'],
            optionsAr: ['الأوتار (مثل وتر أخيل)', 'الأربطة', 'الغضاريف', 'الأغشية الزلالية'],
            correctAnswer: 'Tendons (e.g., Achilles tendon)',
            correctIndex: 0,
            hintEn: 'Tendons connect muscle to bone; ligaments connect bone to bone.',
            hintAr: 'الأوتار تربط العضلة بالعظم؛ بينما الأربطة تربط العظم بالعظم عند المفاصل.',
            stepByStepSolutionEn: [
              'Tendons are tough, non-elastic bands of dense fibrous connective tissue connecting muscle to bone.',
              'A prime example is the Achilles tendon, connecting the gastrocnemius (calf muscle) to the calcaneus (heel bone).',
              'Ligaments connect bone to bone to stabilize joints.'
            ],
            stepByStepSolutionAr: [
              'الأوتار هي حبال ليفية قوية تربط العضلات الهيكلية بالعظام وتنقل قوة الانقباض.',
              'أشهر مثال في المنهج هو وتر أخيل الذي يربط العضلة التوأمية (بطن الساق) بعظمة الكعب.',
              'بينما الأربطة تربط العظام بالعظام عند المفاصل لتحديد حركتها.'
            ],
            teacherTipEn: 'Rupture of the Achilles tendon can occur due to sudden violent exertion or severe muscle spasms.',
            teacherTipAr: 'تمزق وتر أخيل يحدث بسبب بذل مجهود عنيف مفاجئ أو تقلص حاد مفاجئ في العضلة التوأمية.'
          }
        ],
        hots: [
          {
            id: 'th_bio_db_hots_01',
            titleEn: 'Biochemical Cause of Muscle Spasms',
            titleAr: 'السبب الكيميائي الحيوي لحدوث الشد العضلي',
            difficulty: 'hots',
            questionEn: 'What is the primary biochemical reason why a skeletal muscle fails to relax and remains in a sustained painful muscle spasm?',
            questionAr: 'ما السبب الكيميائي الحيوي الرئيسي وراء عدم قدرة العضلة الهيكلية على الانبساط واستمرارها في حالة شد عضلي مؤلم؟',
            optionsEn: ['Severe deficiency of ATP molecules preventing detachment of cross-bridges', 'Accumulation of excessive glycogen inside the sarcolemma', 'Destruction of all calcium ions inside the muscle fiber', 'Excessive presence of acetylcholinesterase in the synapse'],
            optionsAr: ['النقص الحاد في جزيئات ATP مما يمنع انفصال الروابط المستعرضة عن الأكتين', 'تراكم الجليكوجين الزائد داخل الساركوبلازم', 'انعدام أيونات الكالسيوم داخل الليفة العضلية', 'زيادة نشاط إنزيم الكولين إستريز في شق التشابك'],
            correctAnswer: 'Severe deficiency of ATP molecules preventing detachment of cross-bridges',
            correctIndex: 0,
            hintEn: 'ATP is required not only for contraction but crucially to detach myosin cross-bridges from actin during relaxation.',
            hintAr: 'جزيئات ATP لازمة ليس فقط للانقباض بل بشكل حاسم لفصل الروابط المستعرضة عن الأكتين عند الانبساط.',
            stepByStepSolutionEn: [
              'During contraction, myosin cross-bridges pull actin filaments.',
              'For relaxation to occur, ATP must bind to the myosin heads to release them from actin.',
              'When ATP is severely depleted (due to intense prolonged effort without sufficient oxygen), cross-bridges remain locked to actin, resulting in sustained painful muscle spasm.'
            ],
            stepByStepSolutionAr: [
              'أثناء الانقباض ترتبط الروابط المستعرضة بخيوط الأكتين وتسحبها نحو مركز الساركومير.',
              'لحدوث الانبساط، يجب أن ترتبط جزيئات ATP برؤوس الميوسين لتفصلها عن خيوط الأكتين.',
              'عند حدوث نقص حاد في جزيئات ATP (نتيجة الإجهاد الشديد وانعدام التنفس الهوائي)، تفشل الروابط في الانفصال فتظل العضلة في حالة انقباض مستمر ومؤلم (الشد العضلي).'
            ],
            teacherTipEn: 'Distinguish clearly between muscle fatigue (lactic acid accumulation) and muscle spasm (ATP depletion locking cross-bridges).',
            teacherTipAr: 'فرّق بدقة بين الإجهاد العضلي (تراكم حمض اللاكتيك) والشد العضلي (نقص حاد في ATP يعجز عن فك الروابط المستعرضة).'
          }
        ]
      }
    }
  ]
};
