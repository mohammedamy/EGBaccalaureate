import type { Branch } from '../types/curriculum';
import { bioCh1Databank } from './databanks/thanaweya/bioCh1Databank';
import { bioCh2Databank } from './databanks/thanaweya/bioCh2Databank';
import { bioCh3Databank } from './databanks/thanaweya/bioCh3Databank';
import { bioCh4Databank } from './databanks/thanaweya/bioCh4Databank';
import { bioCh5Databank } from './databanks/thanaweya/bioCh5Databank';

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
          "id": "th_bio_ch1",
          "chapterNumber": 1,
          "titleEn": "Support and Movement in Living Organisms",
          "titleAr": "الدعامة والحركة في الكائنات الحية",
          "descriptionEn": "Physiological and structural support in plants, the human skeletal system (axial and appendicular skeleton, joints, ligaments, tendons), and physiology of muscle contraction according to Huxley's sliding filament theory.",
          "descriptionAr": "الدعامة الفسيولوجية والتركيبية في النبات، الجهاز الهيكلي في الإنسان (الهيكل المحوري والطرفي، المفاصل، الأربطة والأوتار)، وآلية انقباض العضلات الهيكلية وفق نظرية الخيوط المنزلقة لهكسلي.",
          "isFullyEquipped": true,
          "lessons": [
                {
                      "id": "th_bio_ch1_l1",
                      "titleEn": "Support in Plants & The Human Skeletal System",
                      "titleAr": "الدعامة في النبات والجهاز الهيكلي في الإنسان",
                      "summaryEn": "Comparative study of plant turgor physiological support and cell-wall structural depositions (cellulose, lignin, suberin, cutin), alongside the human skeletal system (80 axial bones: 33 vertebrae / 26 bones, 29 skull bones, 37 thoracic cage bones; 126 appendicular bones; cartilages, joints, ligaments, and tendons).",
                      "summaryAr": "دراسة مقارنة تفصيلية للدعامة الفسيولوجية وضغط الامتلاء والدعامة التركيبية في النبات، والهيكل العظمي في الإنسان (80 عظمة في الهيكل المحوري تشمل 33 فقرة / 26 عظمة و29 عظمة للجمجمة و37 عظمة للقفص الصدري؛ و126 عظمة في الهيكل الطرفي، والغضاريف والمفاصل والأربطة والأوتار).",
                      "theoryContentEn": "### 1. Support in Plants\n- **Physiological Support (دعامة فسيولوجية):**\n  - **Temporary** and affects the plant cell as a whole.\n  - Water enters the large central sap vacuole by **osmosis**, increasing its volume and creating **turgor pressure** that pushes the protoplasm outwards against the cell wall.\n  - The cell wall stretches and becomes tense, maintaining plant erectness and tissue firmness. Lost upon wilting due to drought.\n- **Structural Support (دعامة تركيبية):**\n  - **Permanent** support achieved by deposition of solid, rigid, or impermeable substances within cell walls:\n    1. **Cellulose:** Deposited in collenchyma and sclerenchyma cells (provides flexibility and tensile mechanical strength).\n    2. **Lignin:** Deposited on inner secondary walls of xylem vessels and sclerenchyma stone cells (provides rigidity and hardness).\n    3. **Suberin:** Deposited in walls of peripheral cork cells (impermeable to water).\n    4. **Cutin:** Waxy layer coating outer walls of epidermal cells (minimizes transpiration).\n\n### 2. The Human Skeletal System (206 Bones)\n- **Axial Skeleton (الهيكل المحوري - 80 bones):**\n  1. **Vertebral Column (33 vertebrae / 26 bones):**\n     - Cervical: 7 separate movable vertebrae (Vertebrae 1–7).\n     - Thoracic / Dorsal: 12 separate articulating with ribs (Vertebrae 8–19).\n     - Lumbar: 5 separate, largest, facing abdominal cavity (Vertebrae 20–24).\n     - Sacral: 5 fused as 1 single triangular bone.\n     - Coccygeal: 4 fused as 1 small terminal bone.\n     - Total articulating vertebrae = $7 + 12 + 5 = 24$ movable vertebrae. Total bones = $24 + 1 + 1 = 26$ bones.\n  2. **Skull (29 bones):**\n     - Cranial / Cerebral box: 8 bones with serrated edges fused by fibrous connective tissue (enclosing foramen magnum at base).\n     - Facial portion: 14 bones (jawbones, orbits, nasal cavities).\n     - Associated auditory ossicles: 6 bones (malleus, incus, stapes in middle ear).\n     - Hyoid bone: 1 bone suspended in anterior neck.\n  3. **Thoracic Cage (37 bones):**\n     - 12 pairs of ribs articulating posteriorly with thoracic vertebrae.\n     - First 7 pairs (True ribs): connect directly to sternum via costal cartilages.\n     - Pairs 8, 9, 10 (False ribs): connect indirectly to sternum via cartilage of rib 7.\n     - Pairs 11 and 12 (Floating ribs): short, do not connect anteriorly to sternum, articulate posteriorly with thoracic vertebrae 11 and 12 (Vertebrae 18 and 19).\n     - Sternum: 1 broad flat bone with a pointed cartilaginous lower tip.\n     - Total thoracic cage bones = $24\\text{ ribs} + 1\\text{ sternum} + 12\\text{ thoracic vertebrae} = 37$ bones.\n\n- **Appendicular Skeleton (الهيكل الطرفي - 126 bones):**\n  1. **Pectoral Girdle & Upper Limbs (64 bones):**\n     - Pectoral Girdle: 2 clavicles + 2 scapulae bearing the glenoid cavity.\n     - Upper Limbs (30 bones each): Humerus, Forearm (radius + ulna articulating with trochlea), Carpus (8 wrist bones in 2 rows), Metacarpus (5 bones), Phalanges (14 bones in 5 digits).\n  2. **Pelvic Girdle & Lower Limbs (62 bones):**\n     - Pelvic Girdle: 2 fused hip halves (ilium, ischium, pubis meeting at acetabulum).\n     - Lower Limbs (30 bones each): Femur (with 2 large condyles), Patella (kneecap), Shank (tibia + fibula), Tarsus (7 ankle bones, largest is calcaneus heel bone), Metatarsus (5 bones), Phalanges (14 bones).\n\n- **Skeletal Articulations & Connective Tissues:**\n  - **Cartilages:** Semirigid avascular connective tissue nourished solely by diffusion from adjacent bone perichondrium.\n  - **Joints:**\n    - Fibrous (immovable skull sutures turning into bone with age).\n    - Cartilaginous (limited movement, e.g., intervertebral fibrocartilage discs and pubic symphysis).\n    - Synovial (freely movable, covered by hyaline cartilage and lubricated by synovial fluid: pivot, hinge, ball-and-socket).\n  - **Ligaments:** Strong, flexible bundles of dense collagenous fibers connecting **bone to bone** at joints, determining permissible range of motion.\n  - **Tendons:** Strong, inelastic fibrous cords connecting **muscle to bone**, transmitting tensile force (e.g., Achilles tendon connecting gastrocnemius calf muscle to calcaneus heel bone).",
                      "theoryContentAr": "### ١. الدعامة في النبات\n- **الدعامة الفسيولوجية:**\n  - دعامة **مؤقتة** تتناول الخلية النباتية ككل.\n  - يدخل الماء إلى الفجوة العصارية بـ **الخاصية الأسموزية**، فيزداد حجم العصير الخلوي ويولد **ضغط امتلاء** يضغط على البروتوبلازم ويدفعه للخارج نحو الجدار الخلوي.\n  - يتمدد الجدار الخلوي ويصبح متوتراً، فتكتسب النبتة الاستقامة والصلابة. وتزول هذه الدعامة عند الذبول وجفاف التربة.\n- **الدعامة التركيبية:**\n  - دعامة **دائمة** تتم بترسيب مواد صلبة وقوية وغير منفذة للماء على جدران الخلايا:\n    1. **السليلوز:** يترسب في خلايا النسيج الكولنشيمي والاسكلرنشيمي (يكسب النبات الليونة والمرونة وقوة الشد).\n    2. **اللجنين:** يترسب على السطح الداخلي لجدران أوعية الخشب والخلايا الحجرية (يكسب النبات الصلابة والقوة).\n    3. **السوبرين:** يترسب في جدران خلايا النسيج الفليني المحيط (غير منفذ للماء لمنع فقدانه).\n    4. **الكيوتين:** طبقة شمعية تغطي خلايا بشرة الأوراق والسيقان (تقلل من عملية النتح).\n\n### ٢. الجهاز الهيكلي في الإنسان (٢٠٦ عظمة)\n- **الهيكل المحوري (٨٠ عظمة):**\n  1. **العمود الفقري (٣٣ فقرة / ٢٦ عظمة):**\n     - الفقرات العنقية: 7 فقرات متمفصلة متوسطة الحجم (الفقرات 1 إلى 7).\n     - الفقرات الظهرية: 12 فقرة متمفصلة أكبر حجماً تتصل بالضلوع (الفقرات 8 إلى 19).\n     - الفقرات القطنية: 5 فقرات متمفصلة، وهي الأكبر حجماً وتواجه تجويف البطن (الفقرات 20 إلى 24).\n     - الفقرات العجزية: 5 فقرات عريضة ومفلطحة ملتحمة معاً كعظمة واحدة.\n     - الفقرات العصعصية: 4 فقرات صغيرة ملتحمة معاً كعظمة واحدة.\n     - مجموع الفقرات المتمفصلة = $7 + 12 + 5 = 24$ فقرة. مجموع العظام = $24 + 1 + 1 = 26$ عظمة.\n  2. **الجمجمة (٢٩ عظمة):**\n     - الجزء المخي (الخلفي): 8 عظام تتصل أطرافها المسننة اتصالات متينة بواسطة أنسجة ليفية (يوجد بقاعه الثقب الكبير لمرور الحبل الشوكي).\n     - الجزء الوجهي (الأمامي): 14 عظمة تشمل الفكين ومواضع أعضاء الحس.\n     - العظيمات السمعية: 6 عظيمات (المطرقة، السندان، الركاب في كل أذن).\n     - العظم اللامي: عظمة واحدة معلقة أعلى الحنجرة.\n  3. **القفص الصدري (٣٧ عظمة):**\n     - 12 زوجاً من الضلوع تتصل من الخلف بالفقرات الظهرية (الفقرات 8 إلى 19).\n     - الأزواج السبعة الأولى (ضلوع حقيقية): تتصل مباشرة بعظمة القص بغضاريف.\n     - الأزواج 8 و9 و10 (ضلوع كاذبة): تتصل بعظمة القص اتصالاً غير مباشر عبر غضروف الضلع السابع.\n     - الزوجان 11 و12 (الضلوع العائمة): ضلعان قصيران لا يتصلان بعظمة القص من الأمام، ويتصلان من الخلف بالفقرتين الظهرتين 11 و12 (الفقرتين 18 و19 في العمود الفقري).\n     - عظمة القص: عظمة مفلطحة ومفصصة ومدببة من أسفل بجزء غضروفي.\n     - مجموع عظام القفص الصدري = $24\\text{ ضلعاً} + 1\\text{ عظمة قص} + 12\\text{ فقرة ظهرية} = 37$ عظمة.\n\n- **الهيكل الطرفي (١٢٦ عظمة):**\n  1. **الحزام الصدري والطرفان العلويان (٦٤ عظمة):**\n     - الحزام الصدري: 2 ترقوة + 2 لوح كتف يستقر برأسه التجويف الأروح.\n     - كل طرف علوي (30 عظمة): العضد، الساعد (الكعبرة المتحركة + الزند الثابت)، رسغ اليد (8 عظام في صفين)، راحة اليد (5 أمشاط)، والأصابع (14 سلامية).\n  2. **الحزام الحوضي والطرفان السفليان (٦٢ عظمة):**\n     - الحزام الحوضي: نصفان متماثلان يلتحمان عند الارتفاق العاني، ويتكون كل نصف من الحرقفة الظهرية والورك والعانة وتلتقي عند التجويف الحقي.\n     - كل طرف سفلي (30 عظمة): الفخذ، الرضفة (صابونة الركبة)، الساق (القصبة الداخلية + الشظية الخارجية)، رسغ القدم (7 عظام أكبرها عظم الكعب)، مشط القدم (5 أمشاط)، والأصابع (14 سلامية).\n\n- **المفاصل والأربطة والأوتار:**\n  - **الغضاريف:** نسيج ضام نصف صلب لا يحتوي على أوعية دموية ويتغذى بالانتشار من العظام المجاورة.\n  - **المفاصل:** ليفية (عديمة الحركة كعظام الجمجمة)، غضروفية (محدودة الحركة كأقراص الفقرات والارتفاق العاني)، زلالية (حرة الحركة ومغطاة بطبقة غضروفية ملساء ومملوءة بسائل زلالي مصلي).\n  - **الأربطة:** حزم منفصلة من النسيج الضام الليفي تصل **عظمة بعظمة أخرى** عند المفاصل، وتحدد مدى حركة المفصل.\n  - **الأوتار:** حبال نسيجية ضامة متينة غير مرنة تصل **العضلات بالعظام** لنقل قوة الانقباض (مثل وتر أخيل الذي يصل عضلة بطن الساق التوأمية بعظمة الكعب).",
                      "formulas": [
                            {
                                  "labelEn": "Total Adult Skeleton Bones",
                                  "labelAr": "إجمالي عظام الهيكل العظمي البالغ",
                                  "latex": "N_{\\text{bones}} = 206"
                            },
                            {
                                  "labelEn": "Axial Skeleton Bones",
                                  "labelAr": "عظام الهيكل المحوري",
                                  "latex": "N_{\\text{axial}} = 80"
                            },
                            {
                                  "labelEn": "Appendicular Skeleton Bones",
                                  "labelAr": "عظام الهيكل الطرفي",
                                  "latex": "N_{\\text{appendicular}} = 126"
                            },
                            {
                                  "labelEn": "Vertebral Count to Bone Count",
                                  "labelAr": "نسبة فقرات العمود الفقري لعظامه",
                                  "latex": "33\\,\\text{Vertebrae} \\to 26\\,\\text{Bones}"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH1-L1",
                            "pageRange": "pp. 1–22"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: Support Mechanisms in Plants and Humans",
                            "titleAr": "خطة درس: آليات الدعامة في النبات والجهاز الهيكلي البشري",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH1-L1",
                            "bloomsObjectivesEn": [
                                  "Differentiate between temporary osmotic physiological support and permanent structural deposition in plant tissues.",
                                  "Calculate vertebral indices, articulating bone counts, and thoracic cage articulations in the human skeleton.",
                                  "Analyze the functional and structural distinctions between tendons (muscle-bone) and ligaments (bone-bone)."
                            ],
                            "bloomsObjectivesAr": [
                                  "المقارنة بين الدعامة الفسيولوجية الأسموزية المؤقتة والدعامة التركيبية الدائمة في النبات.",
                                  "حساب أرقام الفقرات المتصلة بالأزواج الضلعية وتحديد عظام الهيكل المحوري والطرفي.",
                                  "التمييز التركيبي والوظيفي بين الأربطة (عظم بعظم) والأوتار (عضلة بعظم)."
                            ],
                            "prerequisitesEn": [
                                  "Plant histology",
                                  "Osmotic pressure",
                                  "Connective tissue anatomy"
                            ],
                            "prerequisitesAr": [
                                  "أنسجة النبات",
                                  "الضغط الأسموزي",
                                  "تشريح النسيج الضام"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "Turgor Pressure",
                                        "definition": "Hydrostatic pressure exerted by water inside the central vacuole pushing the protoplasm against the cell wall."
                                  },
                                  {
                                        "term": "Synovial Joint",
                                        "definition": "Freely movable joint characterized by articular cartilage, a fibrous capsule, and lubricating synovial fluid."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "ضغط الامتلاء",
                                        "definition": "الضغط الهيدروستاتيكي الناشئ عن امتلاء الفجوة العصارية بالماء والذي يدفع البروتوبلازم للخارج ضد الجدار الخلوي."
                                  },
                                  {
                                        "term": "المفصل الزلالي",
                                        "definition": "مفصل مرن حر الحركة تغطي أطراف عظامه طبقة غضروفية ملساء ومزود بسائل زلالي مصلي يمنع الاحتكاك."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Warm-up & Osmotic Plant Turgor",
                                        "phaseAr": "التهيئة والدعامة الفسيولوجية",
                                        "duration": "15 min",
                                        "activitiesEn": "Demonstrating wilted vs turgid plant stems.",
                                        "activitiesAr": "عرض مقارنة عملية لنبات ذابل وآخر ممتلئ بالماء."
                                  },
                                  {
                                        "phaseEn": "Direct Instruction: 206 Skeleton Bones",
                                        "phaseAr": "التدريس المباشر: عظام الهيكل الـ 206",
                                        "duration": "35 min",
                                        "activitiesEn": "3D anatomical atlas inspection of vertebral column and rib cage.",
                                        "activitiesAr": "شرح أطلس الهيكل العظمي ثلاثي الأبعاد وتحديد اتصالات الضلوع."
                                  },
                                  {
                                        "phaseEn": "Guided Problem Solving",
                                        "phaseAr": "التدريب الموجه على المسائل الحسابية",
                                        "duration": "25 min",
                                        "activitiesEn": "Calculating vertebral sequence numbers for floating ribs.",
                                        "activitiesAr": "حل مسائل حساب أرقام الفقرات المتصلة بالضلوع العائمة."
                                  },
                                  {
                                        "phaseEn": "Formative Synthesis & Exit Ticket",
                                        "phaseAr": "الغلق وتقييم الخروج",
                                        "duration": "15 min",
                                        "activitiesEn": "Exit ticket problem on vertebral bone arithmetic.",
                                        "activitiesAr": "سؤال تذكرة الخروج حول حساب عظام العمود الفقري."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Thinking that physiological support involves chemical depositions like cutin or suberin (it relies purely on osmosis).",
                                  "Confusing the number of vertebrae (33) with the number of vertebral bones (26)."
                            ],
                            "commonMisconceptionsAr": [
                                  "الاعتقاد بأن الدعامة الفسيولوجية تعتمد على ترسيبات كيميائية كالكيوتين (هي تعتمد كلياً على الأسموزية).",
                                  "الخلط بين عدد فقرات العمود الفقري (33 فقرة) وعدد عظام العمود الفقري (26 عظمة بسبب الالتحام)."
                            ],
                            "differentiationEn": {
                                  "struggling": "Provide color-coded regional vertebral column charts and physical skeleton bone-counting models.",
                                  "advanced": "Calculate biomechanical load distributions across lumbar vertebrae L4-L5 during weightlifting."
                            },
                            "differentiationAr": {
                                  "struggling": "توفير مخططات ملونة لمجموعات الفقرات ونماذج مجسمة لحساب عظام الهيكل خطوة بخطوة.",
                                  "advanced": "حساب عزوم القوى والتحميل الميكانيكي على الفقرات القطنية الرابعة والخامسة أثناء رفع الأثقال."
                            },
                            "formativeAssessmentEn": "Which rib pair articulates with the 18th vertebra of the vertebral column?",
                            "formativeAssessmentAr": "أي زوج من الضلوع يتمفصل مع الفقرة رقم 18 في العمود الفقري للإنسان؟",
                            "exitTicketQuestion": {
                                  "questionEn": "Calculate the total number of bones formed by the human vertebral column and the thoracic rib cage combined.",
                                  "questionAr": "احسب العدد الكلي للعظام المكونة للعمود الفقري والقفص الصدري معاً في الإنسان البالغ.",
                                  "solutionEn": "Vertebral column has 26 bones. Thoracic cage has 24 ribs + 1 sternum + 12 thoracic vertebrae. Since thoracic vertebrae are already counted in the vertebral column, the combined bone count is 26 + 24 + 1 = 51 bones.",
                                  "solutionAr": "العمود الفقري يتكون من 26 عظمة. والقفص الصدري يتكون من 24 ضلعاً + عظمة القص + 12 فقرة ظهرية. وبما أن الفقرات الظهرية محسوبة بالفعل ضمن عظام العمود الفقري، فإن إجمالي العظام المشتركة = 26 + 24 + 1 = 51 عظمة."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch1_l1_ws",
                            "titleEn": "Worksheet: Plant Turgidity & Skeletal Osteology",
                            "titleAr": "ورقة عمل: الدعامة الفسيولوجية وتشريح الجهاز الهيكلي",
                            "descriptionEn": "Quantitative problems on bone numbering, vertebral articulations, and osmotic turgor pressure.",
                            "descriptionAr": "مسائل تطبيقية على ترقيم الفقرات، اتصالات الضلوع، والضغط الأسموزي.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch1_l1_ws_p1",
                                        "titleEn": "Floating Ribs Vertebral Connections",
                                        "titleAr": "اتصال الضلوع العائمة بالعمود الفقري",
                                        "difficulty": "medium",
                                        "questionEn": "The second pair of floating ribs (rib pair 12) articulates posteriorly with which vertebra of the human vertebral column?",
                                        "questionAr": "يتصل الزوج الثاني من الضلوع العائمة (زوج الضلوع رقم 12) من الخلف بأي فقرة من فقرات العمود الفقري؟",
                                        "optionsEn": [
                                              "Vertebra 19 (Thoracic vertebra 12)",
                                              "Vertebra 18 (Thoracic vertebra 11)",
                                              "Vertebra 12 (Thoracic vertebra 5)",
                                              "Vertebra 20 (Lumbar vertebra 1)"
                                        ],
                                        "optionsAr": [
                                              "الفقرة رقم 19 (الفقرة الظهرية 12)",
                                              "الفقرة رقم 18 (الفقرة الظهرية 11)",
                                              "الفقرة رقم 12 (الفقرة الظهرية 5)",
                                              "الفقرة رقم 20 (الفقرة القطنية 1)"
                                        ],
                                        "correctAnswer": "Vertebra 19 (Thoracic vertebra 12)",
                                        "correctIndex": 0,
                                        "hintEn": "Add the 7 cervical vertebrae to the thoracic vertebra number: 7 + 12 = 19.",
                                        "hintAr": "أضف الـ 7 فقرات عنقية إلى رقم الفقرة الظهرية: 7 + 12 = 19.",
                                        "stepByStepSolutionEn": [
                                              "The human vertebral column begins with 7 cervical vertebrae (1–7).",
                                              "Thoracic vertebrae follow from 8 to 19.",
                                              "Rib pair 12 attaches to thoracic vertebra 12, which is vertebra 7 + 12 = 19."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "يبدأ العمود الفقري بـ 7 فقرات عنقية (من 1 إلى 7).",
                                              "تليها الفقرات الظهرية من 8 إلى 19.",
                                              "يتصل زوج الضلوع رقم 12 بالفقرة الظهرية رقم 12، وترتيبها العام 7 + 12 = 19."
                                        ],
                                        "teacherTipEn": "Always use Formula: Total Vertebra # = 7 + Rib Pair #.",
                                        "teacherTipAr": "قاعدة دائمة: رقم الفقرة = 7 (عنقية) + رقم زوج الضلوع."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Human Skeleton 3D Explorer",
                            "titleAr": "مستكشف الهيكل العظمي البشري التفاعلي",
                            "descriptionEn": "Interactive osteological viewer detailing 206 bones, axial vs appendicular classifications, and joint articulations.",
                            "descriptionAr": "أطلس تفاعلي لتفاصيل الـ 206 عظمة في الهيكل العظمي وتصنيفاتها والمفاصل الزلالية."
                      }
                },
                {
                      "id": "th_bio_ch1_l2",
                      "titleEn": "Movement in Living Organisms & Muscle Contraction",
                      "titleAr": "الحركة في الكائنات الحية وآلية انقباض العضلات",
                      "summaryEn": "Plant movement modalities (touch, nyctinasty, tropisms, tendril twining, and cytoplasmic streaming) and human muscular system physiology (620+ muscles, myofibril sarcomere ultrastructure, Huxley sliding filament theory powered by ATP and Ca2+, neuromuscular transmission, motor units, and muscle fatigue/spasm).",
                      "summaryAr": "أنماط الحركة في النبات (اللمس، النوم، الانتحاء، الشد في المحاليق والجذور، والانسياب السيتوبلازمي) وفسيولوجيا الجهاز العضلي في الإنسان (620 عضلة هيكلية، التركيب المجهري للقطعة العضلية، نظرية الخيوط المنزلقة لهكسلي، الوحدة الحركية، والإجهاد والشد العضلي).",
                      "theoryContentEn": "### 1. Movement in Plants\n- **Types of Plant Movements:**\n  1. **Touch Movement (حركة اللمس):** In *Mimosa pudica*, touching leaflets causes sudden drooping due to rapid water efflux from pulvini cells.\n  2. **Sleep / Nyctinasty Movement (حركة النوم واليقظة):** Leaves fold at nightfall and re-expand in daylight (common in legumes).\n  3. **Tropisms (الانتحاء):** Curvature toward or away from unilateral external stimuli (Phototropism, Geotropism, Hydrotropism) mediated by auxin redistribution.\n  4. **Twining / Pulling Movement (حركة الشد):**\n     - **Climbing Tendrils (Peas, Grapes):** The tendril twines in the air until contacting a solid support. Due to auxin accumulation on the non-contact side, it grows faster than the contact side, coiling tightly around the support and pulling the weak plant stem vertically erect. If no support is found, the tendril withers and dies.\n     - **Corms and Bulbs:** Contractile roots contract, pulling the subterranean storage stem downwards to an optimal safe depth protecting aerial parts from wind and predators.\n  5. **Cytoplasmic Streaming (الحركة الدورانية السيتوبلازمية):** Continuous microscopic rotational flow of the living protoplasmic layer inside plant cells (easily observed in *Elodea* leaf cells by tracking moving chloroplasts).\n\n### 2. The Human Muscular System (620+ Muscles)\n- **Muscular Tissue Types:**\n  - Skeletal (striated, voluntary, attached to skeleton, multinucleated).\n  - Cardiac (striated, involuntary, branched, intercalated discs, heart wall).\n  - Smooth (non-striated, involuntary, spindle-shaped, single nucleus, blood vessel walls and alimentary tract).\n- **Structure of Skeletal Muscle:**\n  - Muscle $\\to$ Muscle Bundles (surrounded by perimysium) $\\to$ Muscle Fibers (muscle cells enclosed by **sarcolemma** membrane and containing **sarcoplasm**, multiple nuclei, and sarcoplasmic reticulum).\n  - Each muscle fiber contains $1,000$ to $2,000$ longitudinal **myofibrils**.\n- **Sarcomere Fine Ultrastructure (القطعة العضلية):**\n  - The functional contractile unit bounded between **two successive Z-lines**.\n  - **Light I-Band (المنطقة المضيئة):** Formed exclusively of thin **actin** protein filaments, bisected by dark **Z-line**.\n  - **Dark A-Band (المنطقة الداكنة):** Formed of thick **myosin** filaments overlapping with thin actin filaments at its extremities.\n  - **Semi-Light H-Zone (المنطقة شبه المضيئة):** Located in the center of the A-band, formed exclusively of thick myosin filaments, bisected by the **M-line**.\n\n### 3. Huxley's Sliding Filament Theory of Muscle Contraction\n- Developed by Andrew Huxley using electron microscopy:\n  1. **Nerve Impulse Arrival:** Action potential reaches the motor axon terminal, opening voltage-gated **calcium ($Ca^{2+}$) channels**.\n  2. **Neurotransmitter Exocytosis:** $Ca^{2+}$ triggers vesicles to fuse and release **Acetylcholine (ACh)** into the synaptic cleft.\n  3. **Sarcolemma Depolarization:** ACh binds to nicotinic receptors on the motor end-plate, increasing membrane permeability to **$Na^+$ ions**, which rush inwards, reversing polarity (depolarization) and generating a muscle action potential.\n  4. **Cross-Bridge Action:** $Ca^{2+}$ released from the sarcoplasmic reticulum exposes myosin-binding sites on actin. Hook-like **transverse cross-bridges** extending from myosin filaments bind to actin filaments.\n  5. **Sliding Motion:** Powered by energy released from **ATP hydrolysis**, cross-bridges pull opposing sets of actin filaments inward toward the sarcomere center.\n  6. **Sarcomere Dimensional Changes During Complete Contraction:**\n     - **Dark A-Band:** Length remains **strictly constant** ($\\Delta L_A = 0$) because myosin filaments do not shorten.\n     - **Light I-Band:** **Shortens** in length.\n     - **Semi-Light H-Zone:** **Shortens** and may completely disappear.\n     - **Z-Lines:** Approach each other $\\implies$ Sarcomere shortens $\\implies$ Muscle contracts.\n  7. **Relaxation:** The enzyme **Acetylcholinesterase** hydrolyzes ACh into acetate and choline, restoring resting potential (repolarization). ATP is required to detach cross-bridges from actin.\n\n### 4. Motor Unit, Muscle Fatigue & Muscle Spasm\n- **Motor Unit (الوحدة الحركية):**\n  - The functional unit of skeletal muscle contraction: consists of **1 motor neuron** and all the muscle fibers it innervates (ranging between **5 to 100 muscle fibers**).\n  - The terminal arborization of the axon connects to muscle fibers at the **Neuromuscular Junction (Motor End-Plate)**.\n- **Muscle Fatigue (الإجهاد العضلي):**\n  - Caused by continuous, vigorous muscle exertion without adequate oxygen delivery.\n  - Muscle shifts to **anaerobic respiration**, converting glucose/glycogen to **lactic acid**, yielding only $2\\text{ ATP}$ per glucose molecule instead of $38\\text{ ATP}$.\n  - Lactic acid accumulation lowers intracellular pH, impairing cross-bridge cycling and reducing contractile force.\n- **Muscle Spasm (الشد العضلي):**\n  - Severe painful sustained contraction caused by:\n    1. **Complete ATP Depletion:** Insufficient ATP prevents myosin cross-bridges from detaching from actin filaments.\n    2. **Conflicting Nerve Impulses:** Abnormal incorrect electrical signals traveling from the brain to muscles during somatic reflexes.\n    3. Severe spasm can cause micro-tears in muscle tissue and capillary bleeding.",
                      "theoryContentAr": "### ١. الحركة في النبات\n- **أنواع الحركات النباتية:**\n  1. **حركة اللمس:** في نبات المستحية، تتدلى الوريقات عند لمسها وكأنها أصابها الذبول نتيجة الخروج السريع للماء من خلايا الانتفاخات القاعدية.\n  2. **حركة النوم واليقظة:** تتقارب الوريقات ليلاً وتنبسط نهاراً (شائعة في البقوليات).\n  3. **الانتحاء:** انحناء الساق أو الجذر استجابة لمؤثر خارجي غير متماثل (ضوئي، أرضي، مائي) نتيجة تباين توزيع هرمون الأوكسين.\n  4. **حركة الشد:**\n     - **المحاليق في النباتات المتسلقة (البازلاء، العنب):** يدور المحلاق في الهواء باحثاً عن دعامة صلبة. وبمجرد ملامستها، وبفعل هجرة الأوكسينات للجانب البعيد عن الدعامة، ينمو الجانب غير الملامس أسرع من الملامس، فيلتف المحلاق حول الدعامة ويتموج ما تبقى منه مقترباً بالساق الضعيفة رأسياً نحو الدعامة. فإذا لم يجد دعامة ذبل ومات.\n     - **الكورمات والأبصال:** تتقلص الجذور الشادة فتجذب الساق الأرضية المخزنة لأسفل، لتستقر على عمق مناسب يحمي أجزاءها الهوائية من الرياح.\n  5. **الحركة الدورانية السيتوبلازمية:** انسياب مجهري مستمر للبروتوبلازم في اتجاه واحد داخل الخلية الحية (يُلاحظ بوضوح في خلايا نبات الإيلوديا المائي بمتابعة دوران البلاستيدات الخضراء).\n\n### ٢. الجهاز العضلي في الإنسان (٦٢٠ عضلة فأكثر)\n- **أنواع الأنسجة العضلية:**\n  - عضلات هيكلية (مخططة، إرادية، تتصل بالهيكل العظمي، عديدة الأنوية).\n  - عضلات قلبية (مخططة، لاإرادية، متفرعة وتحتوي على أقراص بينية، جدار القلب).\n  - عضلات ملساء (غير مخططة، لاإرادية، مغزلية، أحادية النواة، جدران الأوعية الدموية والقناة الهضمية).\n- **التركيب المجهري للييفة العضلية والقطعة العضلية (الساركومير):**\n  - العضلة الهيكلية تتكون من حزم عضلية محاطة بغشاء، والحزمة تتكون من ألياف عضلية.\n  - الليفة العضلية تحتوي على سيتوبلازم (ساركوبلازم) وغشاء خلوي (ساركوليما) وعدة أنوية، وبها من 1000 إلى 2000 لييفة عضلية.\n  - **القطعة العضلية (الساركومير):** المسافة المحصورة بين كل خطين متتاليين Z.\n  - **المنطقة المضيئة I:** تتكون من خيوط بروتينية رفيعة من **الأكتين** فقط، وينصفها خط داكن **Z**.\n  - **المنطقة الداكنة A:** تتكون من خيوط سميكة من **الميوسين** تتداخل مع خيوط الأكتين عند أطرافها.\n  - **المنطقة شبه المضيئة H:** تتوسط المنطقة الداكنة A، وتتكون من خيوط الميوسين السميكة فقط، وينصفها خط **M**.\n\n### ٣. نظرية الخيوط المنزلقة لهكسلي (آلية الانقباض العضلي)\n1. **وصول السيال العصبي:** يصل السيال العصبي إلى النهاية العصبية، فتنفتح **قنوات الكالسيوم ($Ca^{2+}$)**.\n2. **تحرر الناقل العصبي:** تتدفق أيونات الكالسيوم مفجرة الحويصلات العصبية ليتحرر **الأسيتيل كولين (ACh)** في الشق التشابكي.\n3. **إزالة الاستقطاب:** يرتبط الأسيتيل كولين بمستقبلات غشاء الليفة العضلية (الصفيحة النهائية الحركية)، فتزيد نفاذية الغشاء لـ **أيونات الصوديوم ($Na^+$)** التي تندفع للداخل وتتلاشى الشحنات (حالة الاستقطاب تنقلب لإزالة الاستقطاب).\n4. **تكوين الروابط المستعرضة:** بمساعدة **أيونات الكالسيوم** المتحررة من الشبكة الساركوبلازمية، تمتد **روابط مستعرضة** كخطاطيف من خيوط الميوسين لترتبط بخيوط الأكتين.\n5. **آلية الانزلاق:** تستهلك الروابط المستعرضة الطاقة المخزنة في **جزيئات ATP** لتسحب خيوط الأكتين المتجاورة باتجاه بعضها نحو مركز الساركومير.\n6. **التغيرات في أطوال المناطق أثناء الانقباض التام:**\n   - **المنطقة الداكنة A:** **يظل طولها ثابتاً تماماً** ($\\Delta L_A = 0$) لأن خيوط الميوسين لا تقصر.\n   - **المنطقة المضيئة I:** **يقل طولها**.\n   - **المنطقة شبه المضيئة H:** **يقل طولها وقد تختفي تماماً** عند الانقباض التام.\n   - **خطوط Z:** تقترب من بعضها فيقصر طول القطعة العضلية وتنقبض العضلة.\n7. **الانبساط:** يقوم إنزيم **الكولين إستريز** بتحطيم الأسيتيل كولين إلى حمض خليك وكولين، وتعود الليفة لحالة الراحة (الاستقطاب)، وتستهلك جزيئات **ATP** لفصل الروابط المستعرضة عن الأكتين.\n\n### ٤. الوحدة الحركية والإجهاد والشد العضلي\n- **الوحدة الحركية:**\n  - الوحدة الوظيفية للعضلة الهيكلية: تتكون من **ليف عصبي حركي واحد** يغذي مجموعة من الألياف العضلية يتراوح عددها من **5 إلى 100 ليفة عضلية** عبر تفرعاته النهائية.\n- **الإجهاد العضلي:**\n  - ينشأ عند انقباض العضلة بصورة متتالية وسريعة دون وصول أكسجين كافٍ.\n  - تلجأ العضلة إلى **التنفس اللاهوائي** لإنتاج الطاقة، فيتراكم **حمض اللاكتيك** مسبباً حموضة داخلية وإجهاداً للعضلة، وينتج عن ذلك 2 ATP فقط لكل جزيء جلوكوز بدلاً من 38 ATP.\n- **الشد العضلي المؤلم:**\n  - انقباض مستمر مؤلم ينتج عن:\n    1. **النقص الحاد في جزيئات ATP:** فلا تنفصل الروابط المستعرضة عن خيوط الأكتين فتظل العضلة منقبضة.\n    2. **السيالات العصبية الخاطئة:** وصول نبضات عصبية غير صحيحة من المخ إلى العضلات فيتعارض التنبيه مع الأداء الطبيعي.\n    3. قد يؤدي الشد العضلي العنيف إلى تمزق العضلة وحدوث نزيف دموي.",
                      "formulas": [
                            {
                                  "labelEn": "A-Band Length Invariance",
                                  "labelAr": "ثبات طول المنطقة الداكنة",
                                  "latex": "\\Delta L_{\\text{A-band}} = 0"
                            },
                            {
                                  "labelEn": "Motor Unit Innervation Ratio",
                                  "labelAr": "نسبة ألياف الوحدة الحركية",
                                  "latex": "1\\,\\text{Motor Neuron} : (5 - 100)\\,\\text{Muscle Fibers}"
                            },
                            {
                                  "labelEn": "Sarcomere Contraction",
                                  "labelAr": "محصلة تقارب خطوط Z",
                                  "latex": "L_{\\text{sarcomere}} = L_A + 2 \\cdot d_{\\text{actin-overlap}}"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH1-L2",
                            "pageRange": "pp. 23–45"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: Muscle Contraction Physiology & Huxley's Sliding Filament Model",
                            "titleAr": "خطة درس: فسيولوجيا الحركة وانقباض العضلات بنظرية هكسلي",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH1-L2",
                            "bloomsObjectivesEn": [
                                  "Explain the electrochemical events of neuromuscular transmission and acetylcholine receptor binding.",
                                  "Detail Huxley's sliding filament mechanism including the dual role of ATP and calcium ions.",
                                  "Differentiate between lactic acid muscle fatigue and ATP-depletion muscle spasm."
                            ],
                            "bloomsObjectivesAr": [
                                  "تفسير الخطوات الكهروكيميائية لانتقال السيال العصبي عبر التشابك العصبي العضلي.",
                                  "شرح نظرية الخيوط المنزلقة لهكسلي مع بيان الدور المزدوج لجزيئات ATP وأيونات الكالسيوم.",
                                  "المقارنة الفسيولوجية بين الإجهاد العضلي (حمض اللاكتيك) والشد العضلي (نقص ATP)."
                            ],
                            "prerequisitesEn": [
                                  "Nerve impulse transmission",
                                  "Action potentials",
                                  "Protein filament structure"
                            ],
                            "prerequisitesAr": [
                                  "انتقال السيال العصبي",
                                  "جهد الفعالية والاستقطاب",
                                  "تركيب الخيوط البروتينية"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "Sarcomere",
                                        "definition": "The structural and functional contractile unit of a myofibril bounded between two consecutive Z-lines."
                                  },
                                  {
                                        "term": "Motor Unit",
                                        "definition": "A single motor neuron and all the skeletal muscle fibers it innervates (5 to 100 fibers)."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "الساركومير (القطعة العضلية)",
                                        "definition": "الوحدة الوظيفية للانقباض في اللييفة العضلية والمحصورة بين خطين متتاليين Z."
                                  },
                                  {
                                        "term": "الوحدة الحركية",
                                        "definition": "ليف عصبي حركي واحد وجميع الألياف العضلية الهيكلية التي يغذيها بتفرعاته النهائية (5 إلى 100 ليفة)."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Warm-up: Microscopic Myofibril Bands",
                                        "phaseAr": "التهيئة: مناطق القطعة العضلية",
                                        "duration": "15 min",
                                        "activitiesEn": "Identifying A, I, and H zones on electron micrographs.",
                                        "activitiesAr": "تحديد مناطق A و I و H على صور المجهر الإلكتروني."
                                  },
                                  {
                                        "phaseEn": "Huxley's Sliding Filament Simulation",
                                        "phaseAr": "محاكاة نظرية الخيوط المنزلقة",
                                        "duration": "35 min",
                                        "activitiesEn": "Tracking cross-bridge cycles powered by ATP hydrolysis.",
                                        "activitiesAr": "محاكاة حركة الروابط المستعرضة بـ ATP وأيونات الكالسيوم."
                                  },
                                  {
                                        "phaseEn": "Motor Unit Calculations",
                                        "phaseAr": "حسابات الوحدة الحركية",
                                        "duration": "25 min",
                                        "activitiesEn": "Solving numerical problems on neuron-to-fiber ratios.",
                                        "activitiesAr": "حل مسائل النسبة بين الألياف العضلية والعصبية."
                                  },
                                  {
                                        "phaseEn": "Exit Ticket on Fatigue vs Spasm",
                                        "phaseAr": "تقييم الخروج: الإجهاد والشد",
                                        "duration": "15 min",
                                        "activitiesEn": "Formative evaluation on ATP exhaustion.",
                                        "activitiesAr": "تقييم تكويني على أسباب الشد العضلي ونقص ATP."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Believing that myosin filaments physically contract or shorten (their length remains strictly invariant).",
                                  "Thinking that ATP is only needed for contraction (ATP is equally vital for cross-bridge detachment during relaxation)."
                            ],
                            "commonMisconceptionsAr": [
                                  "الاعتقاد بأن خيوط الميوسين تنكمش أو تقصر في الطول (طولها يظل ثابتاً تماماً).",
                                  "الاعتقاد بأن ATP مطلوب فقط للانقباض (ATP ضروري جداً أيضاً لفصل الروابط المستعرضة أثناء الانبساط)."
                            ],
                            "differentiationEn": {
                                  "struggling": "Use mechanical analog sliding rulers to demonstrate Z-line rapprochement while A-band length is locked.",
                                  "advanced": "Calculate the ATP consumption rate per second in an athletic sprint with 10,000 active motor units."
                            },
                            "differentiationAr": {
                                  "struggling": "استخدام مساطر منزلقة مجسمة لتوضيح تقارب خطوط Z مع ثبات طول خيوط الميوسين والمنطقة الداكنة A.",
                                  "advanced": "حساب معدل استهلاك جزيئات ATP في الثانية أثناء العدو السريع بـ 10,000 وحدة حركية نشطة."
                            },
                            "formativeAssessmentEn": "What happens to the length of the H-zone during maximum physiological contraction?",
                            "formativeAssessmentAr": "ماذا يحدث لطول المنطقة شبه المضيئة H عند أقصى انقباض فسيولوجي للعضلة؟",
                            "exitTicketQuestion": {
                                  "questionEn": "A muscle contains 12 motor units, each innervating 50 muscle fibers. Calculate the total number of motor neurons and total muscle fibers.",
                                  "questionAr": "عضلة هيكلية تحتوي على 12 وحدة حركية، كل وحدة تغذي 50 ليفة عضلية. احسب عدد الخلايا العصبية الحركية وعدد الألياف العضلية الكلي.",
                                  "solutionEn": "Each motor unit has 1 motor neuron, so there are 12 motor neurons. Total muscle fibers = 12 * 50 = 600 muscle fibers.",
                                  "solutionAr": "كل وحدة حركية يغذيها ليف عصبي حركي واحد، إذن عدد الأعصاب = 12 ليفاً عصبياً. والعدد الكلي للألياف العضلية = 12 × 50 = 600 ليفة عضلية."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch1_l2_ws",
                            "titleEn": "Worksheet: Huxley Sliding Filaments & Motor Units",
                            "titleAr": "ورقة عمل: نظرية الخيوط المنزلقة وحسابات الوحدة الحركية",
                            "descriptionEn": "Analytical problems on sarcomere band lengths, calcium release, and motor unit ratios.",
                            "descriptionAr": "مسائل تحليلية على أطوال مناطق القطعة العضلية، دور الكالسيوم، وحسابات الوحدات الحركية.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch1_l2_ws_p1",
                                        "titleEn": "A-Band Invariant During Muscle Contraction",
                                        "titleAr": "ثبات طول المنطقة الداكنة A أثناء الانقباض",
                                        "difficulty": "easy",
                                        "questionEn": "According to Huxley's sliding filament theory, which of the following regions exhibits zero change in physical length during complete skeletal muscle contraction?",
                                        "questionAr": "وفقاً لنظرية الخيوط المنزلقة لهكسلي، أي من المناطق التالية لا يطرأ على طولها أي تغير على الإطلاق أثناء الانقباض التام للعضلة الهيكلية؟",
                                        "optionsEn": [
                                              "The Dark A-Band",
                                              "The Light I-Band",
                                              "The Semi-light H-Zone",
                                              "The distance between two consecutive Z-lines"
                                        ],
                                        "optionsAr": [
                                              "المنطقة الداكنة A",
                                              "المنطقة المضيئة I",
                                              "المنطقة شبه المضيئة H",
                                              "المسافة بين خطي Z المتتاليين"
                                        ],
                                        "correctAnswer": "The Dark A-Band",
                                        "correctIndex": 0,
                                        "hintEn": "The A-band represents the constant physical length of thick myosin filaments.",
                                        "hintAr": "المنطقة A تمثل الطول الفعلي لخيوط الميوسين السميكة التي لا تقصر.",
                                        "stepByStepSolutionEn": [
                                              "Myosin filaments do not shorten during contraction.",
                                              "The A-band length corresponds exactly to the length of myosin filaments.",
                                              "Therefore, Delta L_A = 0."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "خيوط الميوسين لا تنكمش ولا يقصر طولها أثناء الانزلاق.",
                                              "طول المنطقة الداكنة A يطابق تماماً طول خيوط الميوسين.",
                                              "وبالتالي يظل طول المنطقة A ثابتاً دون أي تغير."
                                        ],
                                        "teacherTipEn": "Only A-band is constant. I, H, and Z-Z distance decrease.",
                                        "teacherTipAr": "فقط المنطقة A تظل ثابتة، بينما تقل أطوال I و H والمسافة بين خطي Z."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Sarcomere Sliding Filament Simulator",
                            "titleAr": "محاكي انزلاق خيوط الساركومير",
                            "descriptionEn": "Interactive visualization of cross-bridge cycling and Z-line displacement.",
                            "descriptionAr": "محاكاة مرئية تفاعلية لدورات الروابط المستعرضة وتقارب خطوط Z."
                      }
                }
          ],
          "solvedExamples": [
                {
                      "id": "th_bio_se_01",
                      "titleEn": "MoE Example 1: Motor Unit Calculations",
                      "titleAr": "مثال الوزارة ١: حسابات ألياف الوحدة الحركية",
                      "difficulty": "easy",
                      "questionEn": "A skeletal muscle consists of 10 motor units. If each motor unit innervates 40 muscle fibers, calculate the total number of muscle fibers in this muscle.",
                      "questionAr": "عضلة هيكلية تتكون من 10 وحدات حركية. فإذا كانت كل وحدة حركية تغذي 40 ليفة عضلية، فاحسب العدد الكلي للألياف العضلية في هذه العضلة.",
                      "stepByStepSolutionEn": [
                            "Total muscle fibers = 10 * 40 = 400 fibers.",
                            "Each motor unit is supplied by 1 motor neuron, so there are also 10 motor neurons."
                      ],
                      "stepByStepSolutionAr": [
                            "العدد الكلي للألياف العضلية = 10 × 40 = 400 ليفة عضلية.",
                            "كل وحدة حركية يغذيها ليف عصبي حركي واحد، إذن تحتوي العضلة على 10 ألياف عصبية حركية."
                      ],
                      "teacherTipEn": "The ratio of nerve fibers to muscle fibers determines the precision of muscle movement.",
                      "teacherTipAr": "النسبة بين عدد الألياف العصبية والألياف العضلية تحدد مدى دقة وقوة الحركة.",
                      "hintEn": "The ratio of nerve fibers to muscle fibers determines the precision of muscle movement.",
                      "hintAr": "النسبة بين عدد الألياف العصبية والألياف العضلية تحدد مدى دقة وقوة الحركة."
                },
                {
                      "id": "th_bio_se_02",
                      "titleEn": "MoE Example 2: Vertebral Column Regional Calculations",
                      "titleAr": "مثال الوزارة ٢: حسابات مجموعات فقرات العمود الفقري",
                      "difficulty": "medium",
                      "questionEn": "The human vertebral column contains 33 vertebrae. Calculate the number of articulating (movable) vertebrae, and identify the largest movable vertebra and the vertebra articulating with rib pair number 10.",
                      "questionAr": "يحتوي العمود الفقري في الإنسان على 33 فقرة. احسب عدد الفقرات المتمفصلة، وحدد الفقرة الأكبر حجماً، والفقرة التي تتمفصل مع زوج الضلوع العاشر.",
                      "stepByStepSolutionEn": [
                            "1. Movable (articulating) vertebrae = 7 cervical + 12 thoracic + 5 lumbar = 24 articulating vertebrae.",
                            "2. The largest movable vertebra is the last lumbar vertebra (Vertebra #24).",
                            "3. Rib pair #10 articulates with Thoracic vertebra #10, which corresponds to Vertebra #17 of the vertebral column (7 cervical + 10 thoracic = 17)."
                      ],
                      "stepByStepSolutionAr": [
                            "١. عدد الفقرات المتمفصلة = 7 عنقية + 12 ظهرية + 5 قطنية = 24 فقرة متمفصلة.",
                            "٢. أكبر الفقرات المتمفصلة حجماً هي الفقرة القطنية الأخيرة (الفقرة رقم 24).",
                            "٣. زوج الضلوع العاشر يتمفصل مع الفقرة الظهرية العاشرة، وهي تمثل الفقرة رقم 17 في العمود الفقري (7 عنقية + 10 ظهرية = 17)."
                      ],
                      "teacherTipEn": "Formula for thoracic vertebra position: Absolute vertebra number = 7 + rib pair number.",
                      "teacherTipAr": "قاعدة ذهبية: رقم الفقرة المتصلة بزوج الضلوع = 7 (عنقية) + رقم زوج الضلوع.",
                      "hintEn": "Formula for thoracic vertebra position: Absolute vertebra number = 7 + rib pair number.",
                      "hintAr": "قاعدة ذهبية: رقم الفقرة المتصلة بزوج الضلوع = 7 (عنقية) + رقم زوج الضلوع."
                },
                {
                      "id": "th_bio_se_03",
                      "titleEn": "MoE Example 3: Huxley's Band Length Dynamics",
                      "titleAr": "مثال الوزارة ٣: ديناميكية أطوال مناطق اللييفة العضلية أثناء الانقباض",
                      "difficulty": "hots",
                      "questionEn": "During complete physiological contraction of a sarcomere, describe the quantitative changes in the length of: (a) A-band, (b) I-band, (c) H-zone, and (d) distance between two Z-lines.",
                      "questionAr": "أثناء الانقباض التام لقطعة عضلية (ساركومير)، صف التغيرات الكمية في أطوال كل من: (أ) المنطقة الداكنة A، (ب) المنطقة المضيئة I، (ج) المنطقة شبه المضيئة H، و(د) المسافة بين خطي Z.",
                      "stepByStepSolutionEn": [
                            "1. A-band (Dark): Length remains strictly constant because thick myosin filaments do not change their physical length.",
                            "2. I-band (Light): Shortens as thin actin filaments slide deeper into the A-band towards sarcomere center.",
                            "3. H-zone (Semi-light): Narrows and may completely disappear when actin filaments overlap across the sarcomere center.",
                            "4. Distance between Z-lines: Decreases as Z-lines are pulled closer together by actin sliding, resulting in sarcomere shortening."
                      ],
                      "stepByStepSolutionAr": [
                            "١. المنطقة الداكنة A: يظل طولها ثابتاً تماماً لأن طول خيوط الميوسين السميكة لا يتغير.",
                            "٢. المنطقة المضيئة I: يقل طولها نتيجة انزلاق خيوط الأكتين الرفيعة للداخل وتداخلها مع الميوسين.",
                            "٣. المنطقة شبه المضيئة H: يقل طولها وقد تختفي تماماً عند الانقباض التام بسبب تلامس وتداخل أطراف خيوط الأكتين.",
                            "٤. المسافة بين خطي Z: تقل مقتربة من بعضها، وهو ما يؤدي لقصر طول القطعة العضلية وانقباض العضلة ككل."
                      ],
                      "teacherTipEn": "Only A-band length is invariant. I-band, H-zone, and Z-Z distance decrease during contraction.",
                      "teacherTipAr": "فقط المنطقة A يظل طولها ثابتاً، بينما يقل طول كل من المنطقة I، والمنطقة H، والمسافة بين خطي Z.",
                      "hintEn": "Only A-band length is invariant. I-band, H-zone, and Z-Z distance decrease during contraction.",
                      "hintAr": "فقط المنطقة A يظل طولها ثابتاً، بينما يقل طول كل من المنطقة I، والمنطقة H، والمسافة بين خطي Z."
                },
                {
                      "id": "th_bio_se_04",
                      "titleEn": "MoE Example 4: Physiological vs Structural Plant Support",
                      "titleAr": "مثال الوزارة ٤: المقارنة الفسيولوجية بين الدعامة الفسيولوجية والتركيبية",
                      "difficulty": "easy",
                      "questionEn": "Compare physiological support and structural support in plants regarding: location affected, permanence, and primary mechanism.",
                      "questionAr": "قارن بين الدعامة الفسيولوجية والدعامة التركيبية في النبات من حيث: النطاق المتأثر، الديمومة، والآلية الأساسية.",
                      "stepByStepSolutionEn": [
                            "1. Scope: Physiological support affects the whole living cell; structural support is localized to cell walls.",
                            "2. Permanence: Physiological support is temporary (dependent on water availability); structural support is permanent.",
                            "3. Mechanism: Physiological relies on osmotic water absorption creating turgor pressure; structural relies on chemical deposition of cellulose, lignin, cutin, or suberin."
                      ],
                      "stepByStepSolutionAr": [
                            "١. النطاق: الفسيولوجية تتناول الخلية ككل ككتلة بيولوجية؛ بينما التركيبية تتناول جدران الخلايا أو أجزاء منها.",
                            "٢. الديمومة: الفسيولوجية دعامة مؤقتة ترتبط بوجود الماء والري؛ بينما التركيبية دعامة دائمة لا تزول.",
                            "٣. الآلية: الفسيولوجية تعتمد على الخاصية الأسموزية وضغط الامتلاء؛ بينما التركيبية تعتمد على ترسيب مواد صلبة كالسليلوز واللجنين والكيوتين والسوبرين."
                      ],
                      "teacherTipEn": "Physiological support is dynamic; structural support is anatomical.",
                      "teacherTipAr": "الدعامة الفسيولوجية بيوفيزيائية ديناميكية بينما الدعامة التركيبية كيميائية تشريحية دائمة.",
                      "hintEn": "Physiological support is dynamic; structural support is anatomical.",
                      "hintAr": "الدعامة الفسيولوجية بيوفيزيائية ديناميكية بينما الدعامة التركيبية كيميائية تشريحية دائمة."
                },
                {
                      "id": "th_bio_se_05",
                      "titleEn": "MoE Example 5: Depolarization & Synaptic Transmission at Motor End Plate",
                      "titleAr": "مثال الوزارة ٥: إزالة الاستقطاب وانتقال السيال العصبي عند الصفيحة العضلية النهائية",
                      "difficulty": "hots",
                      "questionEn": "Explain the role of calcium ions (Ca2+) and acetylcholine (ACh) at the neuromuscular junction during the generation of a muscle impulse.",
                      "questionAr": "وضح دور أيونات الكالسيوم (Ca2+) والأسيتيل كولين (ACh) عند التشابك العصبي العضلي في توليد السيال العصبي العضلي.",
                      "stepByStepSolutionEn": [
                            "1. When the nerve impulse arrives at the terminal arborization, voltage-gated calcium channels open, allowing Ca2+ to enter the axon terminal.",
                            "2. Influx of Ca2+ ruptures synaptic vesicles, releasing acetylcholine into the synaptic cleft by exocytosis.",
                            "3. ACh diffuses across the cleft and binds to specific nicotinic receptors on the sarcolemma (motor end plate).",
                            "4. Binding increases sarcolemmal permeability to Na+ ions, which rush into the muscle fiber, reversing membrane polarity from -70 mV to positive values (depolarization), initiating contraction."
                      ],
                      "stepByStepSolutionAr": [
                            "١. عند وصول السيال العصبي للنهايات العصبية، تفتح مضخات الكالسيوم لتدخل أيونات Ca2+ داخل الخلية العصبية.",
                            "٢. تعمل أيونات الكالسيوم على تفجير الحويصلات المشبكية فيتحرر الناقل العصبي الأسيتيل كولين في شق التشابك.",
                            "٣. يسبح الأسيتيل كولين ويرتبط بمستقبلاته الخاصة على غشاء الليفة العضلية (الصفيحة النهائية).",
                            "٤. يؤدي ذلك إلى زيادة نفاذية الغشاء لأيونات الصوديوم (Na+) التي تتدفق للداخل مسببة زوال الاستقطاب (انعكاس الشحنات) وبدء انقباض العضلة."
                      ],
                      "teacherTipEn": "Ca2+ has two distinct roles: in synaptic terminals for ACh release, and inside sarcomeres to activate cross-bridges.",
                      "teacherTipAr": "للكالسيوم دوران منفصلان: دور في النهايات العصبية لتحرير الأسيتيل كولين، ودور داخل اللييفة لتكوين الروابط المستعرضة.",
                      "hintEn": "Ca2+ has two distinct roles: in synaptic terminals for ACh release, and inside sarcomeres to activate cross-bridges.",
                      "hintAr": "للكالسيوم دوران منفصلان: دور في النهايات العصبية لتحرير الأسيتيل كولين، ودور داخل اللييفة لتكوين الروابط المستعرضة."
                },
                {
                      "id": "th_bio_se_06",
                      "titleEn": "MoE Example 6: ATP Role in Muscle Contraction and Relaxation",
                      "titleAr": "مثال الوزارة ٦: دور جزيئات ATP المزدوج في الانقباض والانبساط العضلي",
                      "difficulty": "medium",
                      "questionEn": "Why is ATP energy required during BOTH skeletal muscle contraction and muscle relaxation?",
                      "questionAr": "علل: يلزم توافر جزيئات ATP في كل من عمليتي انقباض وانبساط العضلة الهيكلية.",
                      "stepByStepSolutionEn": [
                            "1. In Contraction: ATP is hydrolyzed by myosin ATPase to provide the energy needed for cross-bridges to pull actin filaments towards the sarcomere center (power stroke).",
                            "2. In Relaxation: Binding of a new ATP molecule to the myosin head is essential to break the actin-myosin cross-bridge bond, allowing actin to return to its resting position."
                      ],
                      "stepByStepSolutionAr": [
                            "١. في الانقباض: يتحلل ATP بواسطة إنزيم ATPase برؤوس الميوسين لتوفير الطاقة اللازمة لسحب الروابط المستعرضة لخيوط الأكتين نحو مركز الساركومير.",
                            "٢. في الانبساط: يلزم ارتباط جزيء جديد من ATP برأس الميوسين لفصل الروابط المستعرضة عن خيوط الأكتين، مما يسمح للعضلة بالانبساط."
                      ],
                      "teacherTipEn": "ATP exhaustion prevents cross-bridge detachment, leading to painful muscle spasms (rigor).",
                      "teacherTipAr": "نفاد ATP يمنع انفصال الروابط المستعرضة عن الأكتين مسبباً الشد العضلي المؤلم.",
                      "hintEn": "ATP exhaustion prevents cross-bridge detachment, leading to painful muscle spasms (rigor).",
                      "hintAr": "نفاد ATP يمنع انفصال الروابط المستعرضة عن الأكتين مسبباً الشد العضلي المؤلم."
                },
                {
                      "id": "th_bio_se_07",
                      "titleEn": "MoE Example 7: Tendons versus Ligaments Structure and Function",
                      "titleAr": "مثال الوزارة ٧: المقارنة التشريحية والوظيفية بين الأوتار والأربطة",
                      "difficulty": "easy",
                      "questionEn": "Differentiate between tendons and ligaments in terms of: tissues connected, degree of elasticity, and clinical injury consequences.",
                      "questionAr": "قارن بين الأوتار والأربطة من حيث: الأنسجة التي تربط بينها، درجة المرونة، والآثار السريرية للإصابة.",
                      "stepByStepSolutionEn": [
                            "1. Tissues Connected: Tendons connect muscle to bone; ligaments connect bone to bone at joints.",
                            "2. Elasticity: Ligaments possess high degree of elasticity to allow joint flexibility; tendons are strong, tough cords with minimal elasticity to transmit pulling force efficiently.",
                            "3. Injuries: Excessive joint twisting tears ligaments (e.g., cruciate ligament tear); extreme exertion or contraction can rupture tendons (e.g., Achilles tendon rupture)."
                      ],
                      "stepByStepSolutionAr": [
                            "١. الأنسجة المتصلة: الأوتار تربط العضلات بالعظام؛ بينما الأربطة تربط العظام ببعضها عند المفاصل.",
                            "٢. المرونة: الأربطة تتميز بدرجة عالية من المرونة لتسمح بحركة المفصل؛ بينما الأوتار قوية وغير مرنة لنقل قوة الشد العضلي بكفاءة.",
                            "٣. الإصابات: الالتواء الشديد يسبب تمزق الأربطة (كالرباط الصليبي)؛ بينما المجهود العنيف أو تقلص العضلة المفاجئ قد يقطع الوتر (كوتر أخيل)."
                      ],
                      "teacherTipEn": "Mnemonic: Tendon = Muscle to Bone (TMB); Ligament = Bone to Bone (LBB).",
                      "teacherTipAr": "الأوتار: عضلات بعظام؛ الأربطة: عظام بعظام.",
                      "hintEn": "Mnemonic: Tendon = Muscle to Bone (TMB); Ligament = Bone to Bone (LBB).",
                      "hintAr": "الأوتار: عضلات بعظام؛ الأربطة: عظام بعظام."
                },
                {
                      "id": "th_bio_se_08",
                      "titleEn": "MoE Example 8: Calculation of Sarcomere Band Counts",
                      "titleAr": "مثال الوزارة ٨: حساب عدد المناطق والخطوط في اللييفة العضلية",
                      "difficulty": "medium",
                      "questionEn": "A myofibril contains 5 sarcomeres. Calculate the number of: (a) Z-lines, (b) Dark A-bands, (c) Semi-light H-zones, and (d) Complete and incomplete Light I-bands.",
                      "questionAr": "لييفة عضلية تحتوي على 5 قطع عضلية (ساركوميرات). احسب عدد: (أ) خطوط Z، (ب) المناطق الداكنة A، (ج) المناطق شبه المضيئة H، و(د) المناطق المضيئة الكاملة وغير الكاملة I.",
                      "stepByStepSolutionEn": [
                            "1. Z-lines = Number of sarcomeres + 1 = 5 + 1 = 6 Z-lines.",
                            "2. Dark A-bands = Number of sarcomeres = 5 A-bands.",
                            "3. Semi-light H-zones = Number of sarcomeres = 5 H-zones (in resting state).",
                            "4. Incomplete I-bands = Exactly 2 (one at each peripheral end of the myofibril).",
                            "5. Complete I-bands = Number of sarcomeres - 1 = 5 - 1 = 4 complete I-bands."
                      ],
                      "stepByStepSolutionAr": [
                            "١. عدد خطوط Z = عدد القطع العضلية + 1 = 5 + 1 = 6 خطوط Z.",
                            "٢. عدد المناطق الداكنة A = عدد القطع العضلية = 5 مناطق A.",
                            "٣. عدد المناطق شبه المضيئة H = عدد القطع العضلية = 5 مناطق H (في حالة الراحة).",
                            "٤. عدد المناطق المضيئة غير الكاملة = 2 دائماً (عند طرفي اللييفة).",
                            "٥. عدد المناطق المضيئة الكاملة = عدد القطع العضلية - 1 = 5 - 1 = 4 مناطق كاملة."
                      ],
                      "teacherTipEn": "Always remember that each myofibril has exactly 2 incomplete I-bands at its ends.",
                      "teacherTipAr": "تذكر دائماً: أي لييفة عضلية بها منطقتان مضيئتان غير كاملتين فقط عند طرفيها.",
                      "hintEn": "Always remember that each myofibril has exactly 2 incomplete I-bands at its ends.",
                      "hintAr": "تذكر دائماً: أي لييفة عضلية بها منطقتان مضيئتان غير كاملتين فقط عند طرفيها."
                },
                {
                      "id": "th_bio_se_09",
                      "titleEn": "MoE Example 9: Plant Translocation & Tendril Twining Mechanism",
                      "titleAr": "مثال الوزارة ٩: آلية حركة الشد في محاليق النباتات المتسلقة",
                      "difficulty": "hots",
                      "questionEn": "Explain the physiological and anatomical mechanism by which a climbing plant tendril twines around a solid support upon contact.",
                      "questionAr": "فسر الآلية الفسيولوجية والتشريحية التي تجعل محلاق النبات المتسلق يلتف حول الدعامة الصلبة بمجرد ملامستها.",
                      "stepByStepSolutionEn": [
                            "1. When the tendril touches a hard support, auxins migrate away from the point of contact to the opposite side.",
                            "2. The side touching the support suffers slow cellular elongation due to lower auxin concentration.",
                            "3. The side facing away from the support undergoes accelerated cellular elongation due to high auxin concentration.",
                            "4. This differential growth causes the tendril to curve tightly around the support, anchoring the climbing stem vertically."
                      ],
                      "stepByStepSolutionAr": [
                            "١. عند ملامسة المحلاق لدعامة صلبة، تهاجر الأوكسينات من جانب الملامسة إلى الجانب البعيد عن الدعامة.",
                            "٢. يتباطأ نمو واستطالة خلايا الجانب الملامس للدعامة بسبب قلة تركيز الأوكسينات به.",
                            "٣. تتسارع استطالة خلايا الجانب غير الملامس (البعيد) للدعامة لزيادة تركيز الأوكسينات به.",
                            "٤. هذا التباين في معدل النمو يؤدي إلى التفاف المحلاق حول الدعامة واستقامة الساق رأسياً."
                      ],
                      "teacherTipEn": "If a tendril fails to find a support, it withers and dies.",
                      "teacherTipAr": "إذا لم يجد المحلاق الدعامة المناسبة أثناء دورانه فإنه يذبل ويموت.",
                      "hintEn": "If a tendril fails to find a support, it withers and dies.",
                      "hintAr": "إذا لم يجد المحلاق الدعامة المناسبة أثناء دورانه فإنه يذبل ويموت."
                },
                {
                      "id": "th_bio_se_10",
                      "titleEn": "MoE Example 10: Muscle Fatigue versus Muscle Spasm Diagnosis",
                      "titleAr": "مثال الوزارة ١٠: التشخيص الفسيولوجي المقارن بين التعب العضلي والشد العضلي",
                      "difficulty": "hots",
                      "questionEn": "Differentiate between muscle fatigue and muscle spasm in terms of causes, metabolic products, and sarcomere status.",
                      "questionAr": "فرق بين التعب العضلي والإجهاد العضلي والشد العضلي من حيث: الأسباب، النواتج الأيضية، وحالة الروابط المستعرضة.",
                      "stepByStepSolutionEn": [
                            "1. Muscle Fatigue: Caused by continuous exertion with insufficient O2 delivery, forcing anaerobic glycolysis, yielding lactic acid and small amounts of ATP (2 ATP/glucose). The muscle contracts and relaxes with delayed speed and reduced force.",
                            "2. Muscle Spasm: Caused by severe, critical depletion of ATP, preventing cross-bridge detachment from actin; or due to abnormal neural firing from the CNS. The muscle remains locked in persistent, painful contraction and cannot relax."
                      ],
                      "stepByStepSolutionAr": [
                            "١. التعب العضلي: ينتج عن المجهود المستمر مع نقص وصول الأكسجين، فتلجأ العضلة للتنفس اللاهوائي ويتراكم حمض اللاكتيك ويقل إنتاج ATP، فتتأخر العضلة في الانقباض والانبساط وتضعف قوتها.",
                            "٢. الشد العضلي: ينتج عن النقص الحاد والكامل في جزيئات ATP مما يمنع انفصال الروابط المستعرضة عن الأكتين، أو بسبب وصول سيالات عصبية خاطئة من المخ، فيظل الساركومير منقبضاً بشكل مستمر ومؤلم دون انبساط."
                      ],
                      "teacherTipEn": "Lactic acid causes fatigue; ATP exhaustion causes spasm.",
                      "teacherTipAr": "حمض اللاكتيك يسبب الإجهاد؛ بينما النقص الحاد في ATP يسبب الشد العضلي.",
                      "hintEn": "Lactic acid causes fatigue; ATP exhaustion causes spasm.",
                      "hintAr": "حمض اللاكتيك يسبب الإجهاد؛ بينما النقص الحاد في ATP يسبب الشد العضلي."
                }
          ],
          "exerciseProblems": [
                {
                      "id": "th_bio_ex_01",
                      "titleEn": "Exercise 1: Sarcomere Bands During Contraction",
                      "titleAr": "تمرين ١: أطوال مناطق القطعة العضلية أثناء الانقباض",
                      "difficulty": "easy",
                      "questionEn": "During complete skeletal muscle contraction according to Huxley's sliding filament model, which of the following regions remains completely unchanged in length?",
                      "questionAr": "أثناء الانقباض التام للعضلة الهيكلية وفقاً لنظرية الخيوط المنزلقة لهكسلي، أي من المناطق التالية يظل طولها ثابتاً دون أي تغير؟",
                      "optionsEn": [
                            "The Dark A-Band",
                            "The Light I-Band",
                            "The Semi-light H-Zone",
                            "The distance between two Z-lines"
                      ],
                      "optionsAr": [
                            "المنطقة الداكنة A",
                            "المنطقة المضيئة I",
                            "المنطقة شبه المضيئة H",
                            "المسافة بين خطي Z"
                      ],
                      "correctAnswer": "The Dark A-Band",
                      "correctIndex": 0,
                      "hintEn": "The dark A-band represents the constant physical length of the thick myosin filaments.",
                      "hintAr": "المنطقة الداكنة A تمثل الطول الفعلي لخيوط الميوسين السميكة ولا يتغير طولها أثناء الانزلاق.",
                      "stepByStepSolutionEn": [
                            "During contraction, actin filaments slide past myosin filaments.",
                            "The distance between Z-lines shortens (sarcomere shortens).",
                            "The light I-band shortens as actin overlaps further with myosin.",
                            "The semi-light H-zone narrows and may disappear completely.",
                            "The dark A-band remains strictly unchanged in length because the myosin filaments do not shorten."
                      ],
                      "stepByStepSolutionAr": [
                            "أثناء الانقباض تنزلق خيوط الأكتين فوق خيوط الميوسين.",
                            "تقترب خطوط Z من بعضها فيقل طول القطعة العضلية ككل.",
                            "يقل طول المنطقة المضيئة I نتيجة تداخل الأكتين.",
                            "تقل المنطقة شبه المضيئة H وقد تختفي تماماً عند الانقباض التام.",
                            "تظل المنطقة الداكنة A ثابتة في الطول لأنها تمثل طول خيوط الميوسين التي لا تنكمش."
                      ],
                      "teacherTipEn": "Always remember: A-band is constant (Delta L_A = 0), while I, H, and sarcomere length decrease.",
                      "teacherTipAr": "تذكر دائماً: المنطقة الداكنة A طولها ثابت تماماً، بينما يقل طول كل من I و H والقطعة العضلية."
                },
                {
                      "id": "th_bio_ex_02",
                      "titleEn": "Exercise 2: Articulating Vertebrae Identification",
                      "titleAr": "تمرين ٢: تحديد عدد الفقرات المتمفصلة",
                      "difficulty": "easy",
                      "questionEn": "How many articulating (movable) vertebrae are found in the adult human vertebral column?",
                      "questionAr": "كم عدد الفقرات المتمفصلة (المتحركة) في العمود الفقري للإنسان البالغ؟",
                      "optionsEn": [
                            "24 vertebrae",
                            "33 vertebrae",
                            "26 vertebrae",
                            "12 vertebrae"
                      ],
                      "optionsAr": [
                            "24 فقرة",
                            "33 فقرة",
                            "26 فقرة",
                            "12 فقرة"
                      ],
                      "correctAnswer": "24 vertebrae",
                      "correctIndex": 0,
                      "hintEn": "Sum cervical, thoracic, and lumbar vertebrae.",
                      "hintAr": "اجمع الفقرات العنقية والظهرية والقطنية.",
                      "stepByStepSolutionEn": [
                            "Cervical = 7, Thoracic = 12, Lumbar = 5.",
                            "Total articulating vertebrae = 7 + 12 + 5 = 24 vertebrae."
                      ],
                      "stepByStepSolutionAr": [
                            "العنقية = 7، الظهرية = 12، القطنية = 5.",
                            "المجموع = 7 + 12 + 5 = 24 فقرة متمفصلة."
                      ],
                      "teacherTipEn": "Sacral (5) and coccygeal (4) vertebrae are fused, not articulating.",
                      "teacherTipAr": "الفقرات العجزية والعصعصية ملتحمة وغير متمفصلة."
                },
                {
                      "id": "th_bio_ex_03",
                      "titleEn": "Exercise 3: Enzyme Breaking Down Neurotransmitter",
                      "titleAr": "تمرين ٣: الإنزيم المحلل للناقل العصبي",
                      "difficulty": "easy",
                      "questionEn": "Which enzyme hydrolyzes acetylcholine in the synaptic cleft to terminate muscle contraction?",
                      "questionAr": "ما الإنزيم الذي يحطم الأسيتيل كولين في شق التشابك العصبي العضلي لإنهاء الانقباض؟",
                      "optionsEn": [
                            "Amylase",
                            "Cholinesterase",
                            "DNA Polymerase",
                            "Pepsin"
                      ],
                      "optionsAr": [
                            "الأميليز",
                            "الكولين إستريز",
                            "بلمرة DNA",
                            "الببسين"
                      ],
                      "correctAnswer": "Cholinesterase",
                      "correctIndex": 1,
                      "hintEn": "It breaks acetylcholine into choline and acetic acid.",
                      "hintAr": "يحول الأسيتيل كولين إلى كولين وحمض خليك.",
                      "stepByStepSolutionEn": [
                            "Cholinesterase is located at the motor end plate.",
                            "It hydrolyzes acetylcholine, allowing the sarcolemma to repolarize and relax."
                      ],
                      "stepByStepSolutionAr": [
                            "يتواجد إنزيم الكولين إستريز في الصفيحة النهائية.",
                            "يحطم الأسيتيل كولين ميكانيكياً ليعود الغشاء لحالة الراحة والاستقطاب."
                      ],
                      "teacherTipEn": "Without cholinesterase, muscle remains in continuous spasm.",
                      "teacherTipAr": "غياب إنزيم الكولين إستريز يؤدي لبقاء العضلة في حالة شد عضلي مستمر."
                },
                {
                      "id": "th_bio_ex_04",
                      "titleEn": "Exercise 4: Structural Support Substance in Cork Cells",
                      "titleAr": "تمرين ٤: المادة المرسبة في جدر خلايا الفلين",
                      "difficulty": "medium",
                      "questionEn": "Which impermeable chemical substance is deposited in the cell walls of cork tissue to provide structural support and prevent water loss?",
                      "questionAr": "أي المواد غير المنفذة تترسب في جدران خلايا النسيج الفليني لتوفير الدعامة التركيبية ومنع فقد الماء؟",
                      "optionsEn": [
                            "Cellulose",
                            "Pectin",
                            "Suberin",
                            "Glycogen"
                      ],
                      "optionsAr": [
                            "السليلوز",
                            "البكتين",
                            "السوبرين",
                            "الجليكوجين"
                      ],
                      "correctAnswer": "Suberin",
                      "correctIndex": 2,
                      "hintEn": "It is characteristic of cork cells.",
                      "hintAr": "مادة خاصة بجدر خلايا الفلين.",
                      "stepByStepSolutionEn": [
                            "Suberin is a waxy, impermeable substance deposited in cork cell walls.",
                            "It prevents water loss and protects plant internal tissues."
                      ],
                      "stepByStepSolutionAr": [
                            "السوبرين مادة شمعية غير منفذة تترسب في جدر خلايا الفلين.",
                            "تمنع نفاذ الماء وتكسب النبات دعامة تركيبية دائمة."
                      ],
                      "teacherTipEn": "Cutin coats the epidermis, whereas suberin coats cork tissue.",
                      "teacherTipAr": "الكيوتين يغطي خلايا البشرة، بينما السوبرين يترسب في جدران خلايا الفلين."
                },
                {
                      "id": "th_bio_ex_05",
                      "titleEn": "Exercise 5: Motor Unit Terminal Count Calculation",
                      "titleAr": "تمرين ٥: حساب عدد الوصلات العصبية العضلية في العضلة",
                      "difficulty": "medium",
                      "questionEn": "If a skeletal muscle consists of 5 motor units and each motor unit supplies 30 muscle fibers, how many neuromuscular junctions are present in this muscle?",
                      "questionAr": "إذا كانت عضلة هيكلية تتكون من 5 وحدات حركية، وكل وحدة تغذي 30 ليفة عضلية، فكم عدد الوصلات العصبية العضلية في هذه العضلة؟",
                      "optionsEn": [
                            "150 junctions",
                            "35 junctions",
                            "6 junctions",
                            "1500 junctions"
                      ],
                      "optionsAr": [
                            "150 وصلة",
                            "35 وصلة",
                            "6 وصلات",
                            "1500 وصلة"
                      ],
                      "correctAnswer": "150 junctions",
                      "correctIndex": 0,
                      "hintEn": "Each muscle fiber requires exactly one neuromuscular junction.",
                      "hintAr": "كل ليفة عضلية تتصل بوصلة عصبية عضلية واحدة.",
                      "stepByStepSolutionEn": [
                            "Total muscle fibers = 5 motor units * 30 fibers = 150 fibers.",
                            "Since each fiber has 1 junction, total junctions = 150."
                      ],
                      "stepByStepSolutionAr": [
                            "العدد الكلي للألياف العضلية = 5 * 30 = 150 ليفة.",
                            "بما أن كل ليفة عضلية تتصل بنهاية عصبية واحدة، إذن عدد الوصلات = 150 وصلة."
                      ],
                      "teacherTipEn": "Number of fibers = Number of motor end plates = Number of neuromuscular junctions.",
                      "teacherTipAr": "عدد الألياف العضلية = عدد الصفائح النهائية = عدد الوصلات العصبية العضلية."
                },
                {
                      "id": "th_bio_ex_06",
                      "titleEn": "Exercise 6: Mineral Ion Required for Synaptic Vesicle Exocytosis",
                      "titleAr": "تمرين ٦: الأيون المعدني اللازم لتفجير حويصلات التشابك",
                      "difficulty": "easy",
                      "questionEn": "Which positive ion is required to trigger the rupture of synaptic vesicles and release acetylcholine at the neuromuscular junction?",
                      "questionAr": "أي الأيونات الموجبة يلزم لدخول النهايات العصبية لتفجير حويصلات التشابك وتحرير الأسيتيل كولين؟",
                      "optionsEn": [
                            "Iron Fe2+",
                            "Calcium Ca2+",
                            "Potassium K+",
                            "Iodide I-"
                      ],
                      "optionsAr": [
                            "الحديد Fe2+",
                            "الكالسيوم Ca2+",
                            "البوتاسيوم K+",
                            "اليود I-"
                      ],
                      "correctAnswer": "Calcium Ca2+",
                      "correctIndex": 1,
                      "hintEn": "It enters through voltage-gated channels upon action potential arrival.",
                      "hintAr": "يدخل عبر مضخات خاصة عند وصول السيال العصبي للنهاية العصبية.",
                      "stepByStepSolutionEn": [
                            "Action potential arrival opens voltage-gated Ca2+ channels.",
                            "Ca2+ influx causes synaptic vesicle fusion with presynaptic membrane and release of ACh."
                      ],
                      "stepByStepSolutionAr": [
                            "وصول السيال العصبي يفتح قنوات الكالسيوم.",
                            "تدفق أيونات Ca2+ يفجر حويصلات التشابك ويحرر الأسيتيل كولين."
                      ],
                      "teacherTipEn": "Without extracellular Ca2+, neurotransmitter release is completely blocked.",
                      "teacherTipAr": "غياب الكالسيوم يمنع تحرر الناقل العصبي وانقباض العضلة."
                },
                {
                      "id": "th_bio_ex_07",
                      "titleEn": "Exercise 7: Human Thoracic Cage Composition",
                      "titleAr": "تمرين ٧: تكوين القفص الصدري في الإنسان",
                      "difficulty": "medium",
                      "questionEn": "What is the total number of bones comprising the human thoracic cage (excluding auditory and clavicle bones)?",
                      "questionAr": "ما هو العدد الكلي لعظام القفص الصدري في الإنسان (بدون الترقوة ولوح الكتف)؟",
                      "optionsEn": [
                            "37 bones",
                            "24 bones",
                            "25 bones",
                            "12 bones"
                      ],
                      "optionsAr": [
                            "37 عظمة",
                            "24 عظمة",
                            "25 عظمة",
                            "12 عظمة"
                      ],
                      "correctAnswer": "37 bones",
                      "correctIndex": 0,
                      "hintEn": "Sum ribs (12 pairs), sternum (1), and thoracic vertebrae (12).",
                      "hintAr": "اجمع الضلوع (24) والقص (1) والفقرات الظهرية (12).",
                      "stepByStepSolutionEn": [
                            "Ribs = 24 (12 pairs).",
                            "Sternum = 1.",
                            "Thoracic vertebrae = 12.",
                            "Total bones = 24 + 1 + 12 = 37 bones."
                      ],
                      "stepByStepSolutionAr": [
                            "الضلوع = 24 (12 زوجاً).",
                            "عظمة القص = 1.",
                            "الفقرات الظهرية = 12.",
                            "المجموع الكلي = 24 + 1 + 12 = 37 عظمة."
                      ],
                      "teacherTipEn": "Do not forget the 12 thoracic vertebrae that articulate with the ribs posteriorly.",
                      "teacherTipAr": "لا تنس إضافة الفقرات الظهرية الـ 12 المتصلة بالضلوع من الخلف."
                },
                {
                      "id": "th_bio_ex_08",
                      "titleEn": "Exercise 8: Sarcomere Band Behavior during Muscle Extension",
                      "titleAr": "تمرين ٨: سلوك مناطق القطعة العضلية عند تمدد العضلة",
                      "difficulty": "hots",
                      "questionEn": "When a skeletal muscle is passively stretched, what happens to the width of the semi-light H-zone and light I-band?",
                      "questionAr": "عند تمدد العضلة الهيكلية وانبساطها، ماذا يحدث لعرض كل من المنطقة شبه المضيئة H والمنطقة المضيئة I؟",
                      "optionsEn": [
                            "Both widen as actin filaments slide away from the center",
                            "Both disappear completely",
                            "H-zone narrows while I-band stays fixed",
                            "A-band increases by double its length"
                      ],
                      "optionsAr": [
                            "يتسع كلاهما مع ابتعاد خيوط الأكتين عن مركز القطعة العضلية",
                            "يختفي كلاهما تماماً",
                            "تضيق المنطقة H وتظل I ثابتة",
                            "تتضاعف المنطقة A في الطول"
                      ],
                      "correctAnswer": "Both widen as actin filaments slide away from the center",
                      "correctIndex": 0,
                      "hintEn": "Relaxation is the reverse of sliding contraction.",
                      "hintAr": "الانبساط عكس الانقباض؛ تبتعد خيوط الأكتين عن بعضها.",
                      "stepByStepSolutionEn": [
                            "During relaxation and stretching, actin filaments slide away from the sarcomere center.",
                            "The distance between Z-lines increases, widening both the I-band and H-zone.",
                            "The A-band remains invariant."
                      ],
                      "stepByStepSolutionAr": [
                            "أثناء الانبساط والتمدد تبتعد خيوط الأكتين عن المركز وعن بعضها.",
                            "يزداد طول كل من المنطقة I والمنطقة H، بينما تظل المنطقة A ثابتة."
                      ],
                      "teacherTipEn": "Sarcomere elongation increases I and H widths.",
                      "teacherTipAr": "استطالة الساركومير تزيد من اتساع المنطقتين I و H."
                },
                {
                      "id": "th_bio_ex_09",
                      "titleEn": "Exercise 9: Achilles Tendon Injury Cause",
                      "titleAr": "تمرين ٩: أسباب تمزق وتر أخيل",
                      "difficulty": "medium",
                      "questionEn": "Which factor is a direct cause of Achilles tendon rupture in athletes?",
                      "questionAr": "أي العوامل التالية يعتبر سبباً مباشراً لتمزق وتر أخيل لدى الرياضيين؟",
                      "optionsEn": [
                            "Severe lack of Vitamin D in diet",
                            "Sudden intense exertion or loss of elasticity in the gastrocnemius muscle",
                            "Excessive accumulation of glycogen in liver cells",
                            "Excessive secretion of calcitonin"
                      ],
                      "optionsAr": [
                            "النقص الحاد في فيتامين D في الغذاء",
                            "بذل مجهود عنيف مفاجئ أو تقلص مفاجئ للعضلة التوأمية مع انعدام مرونتها",
                            "تراكم الجليكوجين الزائد في الكبد",
                            "زيادة إفراز هرمون الكالسيتونين"
                      ],
                      "correctAnswer": "Sudden intense exertion or loss of elasticity in the gastrocnemius muscle",
                      "correctIndex": 1,
                      "hintEn": "Achilles connects the gastrocnemius calf muscle to the calcaneus heel bone.",
                      "hintAr": "وتر أخيل يصل العضلة التوأمية (عضلة بطن الساق) بعظمة الكعب.",
                      "stepByStepSolutionEn": [
                            "Achilles tendon connects the gastrocnemius muscle to the calcaneus bone.",
                            "Sudden exertion, contraction of the calf muscle, or loss of elasticity can rupture this tendon."
                      ],
                      "stepByStepSolutionAr": [
                            "يصل وتر أخيل العضلة التوأمية بعظمة الكعب.",
                            "المجهود العنيف المفاجئ أو انقباض العضلة التوأمية بشكل حاد يسبب تمزق الوتر."
                      ],
                      "teacherTipEn": "Achilles rupture is treated with anti-inflammatories, splints, or surgical intervention.",
                      "teacherTipAr": "يعالج تمزق وتر أخيل بالأدوية المضادة للالتهاب والجبيرة الطبية أو التدخل الجراحي عند التمزق الكامل."
                },
                {
                      "id": "th_bio_ex_10",
                      "titleEn": "Exercise 10: Synovial Joints Cartilage Function",
                      "titleAr": "تمرين ١٠: وظيفة الغضاريف في المفاصل الزلالية",
                      "difficulty": "easy",
                      "questionEn": "What is the primary role of the articular cartilage covering the articulating bone ends in synovial joints?",
                      "questionAr": "ما الوظيفة الأساسية للغضاريف المفصلية الملساء التي تغطي نهايات العظام في المفاصل الزلالية؟",
                      "optionsEn": [
                            "To prevent bone friction and enable smooth sliding movement",
                            "To generate white blood cells",
                            "To produce thyroid hormones",
                            "To anchor skeletal muscles to skin"
                      ],
                      "optionsAr": [
                            "منع تآكل العظام وتسهيل حركتها بمرونة واحتكاك منعدم",
                            "توليد خلايا الدم البيضاء",
                            "إنتاج هرمونات الغدة الدرقية",
                            "تثبيت العضلات الهيكلية في الجلد"
                      ],
                      "correctAnswer": "To prevent bone friction and enable smooth sliding movement",
                      "correctIndex": 0,
                      "hintEn": "Cartilage is smooth and bathed in synovial fluid.",
                      "hintAr": "نسيج أملس مغطى بسائل زلالي يمتص الصدمات.",
                      "stepByStepSolutionEn": [
                            "Articular cartilage is a smooth, transparent connective tissue layer.",
                            "It absorbs shock and prevents direct bone-on-bone abrasion during locomotion."
                      ],
                      "stepByStepSolutionAr": [
                            "الغضاريف المفصلية طبقة ملساء وشفافة تقلل الاحتكاك.",
                            "تمنع تآكل نهايات العظام وتسهل انزلاقها فوق بعضها مع السائل الزلالي."
                      ],
                      "teacherTipEn": "Cartilage has no blood vessels and is nourished by diffusion from bone vessels.",
                      "teacherTipAr": "الغضاريف لا تحتوي أوعية دموية وتتغذى بالانتشار من العظام المجاورة."
                },
                {
                      "id": "th_bio_ex_11",
                      "titleEn": "Exercise 11: Floating Ribs Articulation",
                      "titleAr": "تمرين ١١: تمفصل الضلوع العائمة",
                      "difficulty": "medium",
                      "questionEn": "Why are the 11th and 12th pairs of ribs termed 'floating ribs'?",
                      "questionAr": "لماذا يُطلق على الزوجين الحادي عشر والثاني عشر من الضلوع اسم 'الضلوع العائمة'؟",
                      "optionsEn": [
                            "Because they articulate with vertebrae posteriorly but do not attach to the sternum anteriorly",
                            "Because they float freely in the abdominal cavity without attaching to vertebrae",
                            "Because they are composed entirely of liquid cartilage",
                            "Because they can detach and migrate to the pelvic girdle"
                      ],
                      "optionsAr": [
                            "لأنها تتصل بالفقرات الظهرية من الخلف ولا تتصل بعظمة القص من الأمام",
                            "لأنها تسبح بحرية في البطن دون أي اتصال بالعمود الفقري",
                            "لأنها تتكون بالكامل من غضاريف سائلة",
                            "لأنها تنفصل وتتحرك نحو الحوض"
                      ],
                      "correctAnswer": "Because they articulate with vertebrae posteriorly but do not attach to the sternum anteriorly",
                      "correctIndex": 0,
                      "hintEn": "They are short and do not reach the anterior sternum.",
                      "hintAr": "ضلوع قصيرة تتصل بفقرات الظهر فقط من الخلف.",
                      "stepByStepSolutionEn": [
                            "Rib pairs 11 and 12 articulate with thoracic vertebrae 11 and 12.",
                            "They are short and their anterior ends remain unattached to the sternum, allowing thoracic expansion."
                      ],
                      "stepByStepSolutionAr": [
                            "يتصل الزوجان 11 و 12 بالفقرتين الظهرتين 11 و 12.",
                            "لا يصل طرفاهما الأماميان لعظمة القص فيظلان عائمين لتسهيل حركة الحجاب الحاجز."
                      ],
                      "teacherTipEn": "Floating ribs correspond to vertebrae numbers 18 and 19 of the vertebral column.",
                      "teacherTipAr": "تتصل الضلوع العائمة بالفقرتين رقم 18 و 19 في العمود الفقري."
                },
                {
                      "id": "th_bio_ex_12",
                      "titleEn": "Exercise 12: Motor Neuron Axon Innervation Range",
                      "titleAr": "تمرين ١٢: مدى تفرع الليف العصبي الحركي في الوحدة الحركية",
                      "difficulty": "hots",
                      "questionEn": "According to the Egyptian national curriculum, a single motor neuron in a motor unit innervates a bundle of muscle fibers within which range?",
                      "questionAr": "وفقاً للمنهج المصري، يغذي الليف العصبي الحركي الواحد في الوحدة الحركية حزمة من الألياف العضلية يتراوح عددها بين:",
                      "optionsEn": [
                            "5 to 100 fibers",
                            "1 to 2 fibers",
                            "500 to 1000 fibers",
                            "Exactly 206 fibers"
                      ],
                      "optionsAr": [
                            "5 إلى 100 ليفة",
                            "1 إلى 2 ليفة",
                            "500 إلى 1000 ليفة",
                            "206 ليفة بالضبط"
                      ],
                      "correctAnswer": "5 to 100 fibers",
                      "correctIndex": 0,
                      "hintEn": "The ratio determines precision versus power.",
                      "hintAr": "النسبة تتراوح بين حد أدنى وأقصى محدد بالمنهج.",
                      "stepByStepSolutionEn": [
                            "Each motor neuron branches terminal twigs entering muscle fibers.",
                            "The standard motor unit ratio is 1 neuron to 5-100 muscle fibers."
                      ],
                      "stepByStepSolutionAr": [
                            "يتفرع الليف العصبي الحركي لنهايات عصبية تغذي أليافاً عضلية.",
                            "يتراوح عدد الألياف العضلية التي تغذيها الوحدة الحركية بين 5 إلى 100 ليفة عضلية."
                      ],
                      "teacherTipEn": "Small motor units (1:5) control precise movements (eyes); large units (1:100) control powerful movements (legs).",
                      "teacherTipAr": "الوحدات الحركية الصغيرة مسؤولة عن الحركات الدقيقة، والكبيرة مسؤولة عن القوة العضلية."
                },
                {
                      "id": "th_bio_ex_13",
                      "titleEn": "Exercise 13: Plant Turgidity Loss during Wilting",
                      "titleAr": "تمرين ١٣: فقدان ضغط الامتلاء أثناء ذبول النبات",
                      "difficulty": "medium",
                      "questionEn": "When an herbaceous plant wilts on a hot dry day, what physiological change takes place inside its parenchyma cells?",
                      "questionAr": "عندما يذبل نبات عشبي في يوم حار جاف، ما التغير الفسيولوجي الذي يحدث داخل خلاياه البارنشيمية؟",
                      "optionsEn": [
                            "Water leaves the sap vacuole by osmosis, lowering turgor pressure against the cell wall",
                            "Cellulose walls are completely digested by amylase",
                            "Lignin dissolves into the cytoplasm",
                            "Ribosomes double in volume"
                      ],
                      "optionsAr": [
                            "يخرج الماء من الفجوة العصارية بالأسموزية فيقل ضغط الامتلاء على الجدار الخلوي",
                            "تتهدم الجدران السليلوزية بالكامل بفعل إنزيم الأميليز",
                            "يذوب اللجنين في السيتوبلازم",
                            "يتضاعف حجم الريبوسومات"
                      ],
                      "correctAnswer": "Water leaves the sap vacuole by osmosis, lowering turgor pressure against the cell wall",
                      "correctIndex": 0,
                      "hintEn": "Physiological support is dependent on vacuolar water content.",
                      "hintAr": "الدعامة الفسيولوجية تعتمد على امتلاء الفجوة العصارية بالماء.",
                      "stepByStepSolutionEn": [
                            "Excessive transpiration without soil water replenishment causes water to leave the vacuole by osmosis.",
                            "Turgor pressure decreases, the protoplasm pulls away from the wall, and the stems wilt."
                      ],
                      "stepByStepSolutionAr": [
                            "زيادة النتح ونقص الامتصاص يسحب الماء من الفجوات العصارية بالخاصية الأسموزية.",
                            "يهبط ضغط الامتلاء ويرتخي الجدار الخلوي فيذبل النبات ويفقد استقامته."
                      ],
                      "teacherTipEn": "Wilting is temporary; irrigating the soil restores turgor pressure immediately.",
                      "teacherTipAr": "الذبول ظاهرة مؤقتة تزول بري التربة واستعادة امتلاء الفجوات العصارية."
                },
                {
                      "id": "th_bio_ex_14",
                      "titleEn": "Exercise 14: Sliding Filament Theory Cross-Bridge Composition",
                      "titleAr": "تمرين ١٤: تركيب الروابط المستعرضة في نظرية هكسلي",
                      "difficulty": "hots",
                      "questionEn": "According to Huxley's sliding filament model, from which filament do the cross-bridges originate, and which protein do they attach to during contraction?",
                      "questionAr": "وفقاً لفرضية الخيوط المنزلقة لهكسلي، من أي الخيوط تمتد الروابط المستعرضة، وإلى أي بروتين ترتبط أثناء الانقباض؟",
                      "optionsEn": [
                            "Extend from thick myosin filaments and attach to thin actin filaments",
                            "Extend from thin actin filaments and attach to collagen",
                            "Extend from Z-lines and attach directly to the sarcolemma",
                            "Extend from hemoglobin and attach to elastin"
                      ],
                      "optionsAr": [
                            "تمتد من خيوط الميوسين السميكة وترتبط بخيوط الأكتين الرفيعة",
                            "تمتد من خيوط الأكتين الرفيعة وترتبط بالكولاجين",
                            "تمتد من خطوط Z وترتبط بغشاء الليفة",
                            "تمتد من الهيموجلوبين وترتبط بالإيلاستين"
                      ],
                      "correctAnswer": "Extend from thick myosin filaments and attach to thin actin filaments",
                      "correctIndex": 0,
                      "hintEn": "Myosin heads act as grappling hooks.",
                      "hintAr": "رؤوس الميوسين تعمل كخطاطيف تسحب الأكتين.",
                      "stepByStepSolutionEn": [
                            "Myosin filaments have globular heads called cross-bridges.",
                            "Under the influence of Ca2+ and energized by ATP, they hook onto binding sites on actin filaments."
                      ],
                      "stepByStepSolutionAr": [
                            "تمتد الروابط المستعرضة بمساعدة أيونات الكالسيوم من خيوط الميوسين السميكة.",
                            "تتصل بخيوط الأكتين المجاورة وتسحبها في اتجاه مركز القطعة العضلية بواسطة طاقة ATP."
                      ],
                      "teacherTipEn": "Myosin is thick and stationary; actin is thin and slides.",
                      "teacherTipAr": "الميوسين سميك وثابت؛ والأكتين رفيع وينزلق."
                },
                {
                      "id": "th_bio_ex_15",
                      "titleEn": "Exercise 15: Synovial Fluid Function in Movable Joints",
                      "titleAr": "تمرين ١٥: دور السائل الزلالي المصلي في المفاصل",
                      "difficulty": "easy",
                      "questionEn": "What is the primary mechanical role of the synovial fluid present inside synovial joint cavities?",
                      "questionAr": "ما الدور الميكانيكي الأساسي للسائل الزلالي المصلي داخل تجاويف المفاصل الزلالية؟",
                      "optionsEn": [
                            "Lubricates cartilage surfaces to facilitate frictionless motion and absorb shocks",
                            "Dissolves bone calcium into the blood",
                            "Hardens the joint into an immovable suture",
                            "Replaces muscle fibers during running"
                      ],
                      "optionsAr": [
                            "تزييت وتليين أسطح الغضاريف المفصلية لمنع الاحتكاك وامتصاص الصدمات",
                            "إذابة كالسيوم العظام في مجرى الدم",
                            "تحويل المفصل إلى درز عظمي عديم الحركة",
                            "استبدال الألياف العضلية أثناء الركض"
                      ],
                      "correctAnswer": "Lubricates cartilage surfaces to facilitate frictionless motion and absorb shocks",
                      "correctIndex": 0,
                      "hintEn": "It acts like biological lubricating oil.",
                      "hintAr": "يعمل بمثابة سائل زيتي لزج يقلل الاحتكاك.",
                      "stepByStepSolutionEn": [
                            "Synovial fluid is a viscous fluid secreted by the synovial membrane.",
                            "It lubricates articulating cartilage surfaces, easing joint motion and cushioning mechanical shocks."
                      ],
                      "stepByStepSolutionAr": [
                            "السائل الزلالي يغطي نهايات العظام المفصلية.",
                            "يسهل انزلاق الغضاريف فوق بعضها بمرونة ويقلل الاحتكاك ويمتص الصدمات."
                      ],
                      "teacherTipEn": "Synovial joints represent the majority of body joints (e.g., knee, shoulder, elbow).",
                      "teacherTipAr": "تمثل المفاصل الزلالية معظم مفاصل الجسم (كالركبة والكتف والكوع)."
                }
          ],
          "databank": bioCh1Databank
        },
    {
          "id": "th_bio_ch2",
          "chapterNumber": 2,
          "titleEn": "Hormonal Coordination in Living Organisms",
          "titleAr": "التنسيق الهرموني في الكائنات الحية",
          "descriptionEn": "Discovery of phytohormones (auxins), the human endocrine system, endocrine glands (pituitary, thyroid, parathyroid, adrenal, pancreas, gonads, and digestive mucosa), mechanisms of hormonal regulation, and pathological disorders of hypersecretion and hyposecretion.",
          "descriptionAr": "اكتشاف الهرمونات النباتية (الأوكسينات)، جهاز الغدد الصماء في الإنسان، دراسة تفصيلية للغدد (النخامية، الدرقية، جارات الدرقية، الكظرية، البنكرياس، المناسل، وغدد القناة الهضمية)، وآليات التغذية الراجعة واضطرابات زيادة ونقص الإفراز.",
          "isFullyEquipped": true,
          "lessons": [
                {
                      "id": "th_bio_ch2_l1",
                      "titleEn": "Plant Hormones (Auxins) & Pituitary Master Gland",
                      "titleAr": "الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء",
                      "summaryEn": "Discovery of plant hormones (auxins) by Boysen-Jensen and Went, indole-3-acetic acid (IAA) tropisms, endocrine gland definitions, and pituitary master control (anterior and posterior lobes).",
                      "summaryAr": "اكتشاف الأوكسينات وتجارب بويسن جنسن ووينت، الانتحاء وإندول حمض الخليك، مفهوم الغدد الصماء واللاقنوية، والغدة النخامية بفصيها الأمامي والخلفي والتحكم الهرموني المركزي.",
                      "theoryContentEn": "### 1. Plant Hormones (Phytohormones - Auxins)\n- **Discovery:**\n  - **Boysen-Jensen (1913):** Proved that the coleoptile tip of oat (*Avena*) secretes chemical substances (auxins) that diffuse through agar or gelatin to cause phototropic curvature toward light, but cannot penetrate mica sheets.\n  - **Went (1928):** Quantified auxin distribution in unilateral light: $65\\%$ of auxin migrates to the shaded side while $35\\%$ remains on the illuminated side.\n  - **Chemical Nature:** Predominantly **Indole-3-acetic acid (IAA)** synthesized in growing tips (apical buds) and young leaves (plants lack specialized glands).\n- **Functions:**\n  - Regulate tissue growth, differentiation, and apical dominance.\n  - Mediate tropisms (phototropism, geotropism, hydrotropism).\n  - Influence flowering, fruit formation, leaf shedding, and seed germination.\n\n### 2. The Human Endocrine System\n- **Endocrine Glands (الغدد الصماء):** Ductless glands that secrete hormones directly into the capillary bloodstream.\n- **Master Gland: Pituitary Gland (الغدة النخامية):**\n  - **Anterior Lobe (Adenohypophysis):**\n    1. **Growth Hormone (GH):** Regulates protein metabolism and physical growth. Hyposecretion in childhood leads to *Dwarfism*; Hypersecretion in childhood leads to *Gigantism*; Hypersecretion in adults causes *Acromegaly* (enlargement of extremities and facial bones).\n    2. **TSH:** Stimulates thyroid hormone secretion.\n    3. **ACTH:** Stimulates adrenal cortex secretion.\n    4. **Prolactin:** Stimulates milk production in mammary glands.\n    5. **FSH & LH:** Gonadotropic hormones regulating gametogenesis and sex hormone synthesis.\n  - **Posterior Lobe (Neurohypophysis):**\n    1. **ADH (Vasopressin):** Increases water reabsorption in renal tubules (concentrating urine and elevating arterial blood pressure).\n    2. **Oxytocin:** Stimulates rhythmic uterine contractions during parturition and milk ejection during suckling.\n",
                      "theoryContentAr": "### ١. الهرمونات النباتية (الأوكسينات)\n- **اكتشاف الأوكسينات:**\n  - **تجارب بويسن جنسن (١٩١٣):** أثبت أن القمة النامية لغلاف بادرة الشوفان تفرز مواد كيميائية (الأوكسينات) تعبر صفيحة الجيلاتين أو الأجار وتحدث انتحاءً ضوئياً نحو مصدر الضوء، ولكنها لا تعبر صفيحة الميكا غير المنفذة.\n  - **تجارب فريتز وينت (١٩٢٨):** قاس توزيع الأوكسين عند التعرض لضوء جانبي: وجد أن $65\\%$ من الأوكسينات تهاجر إلى الجانب المظلم (البعيد عن الضوء) بينما يتبقى $35\\%$ في الجانب المضيء.\n  - **التركيب الكيميائي:** أشهرها **إندول حمض الخليك (IAA)**، وتُفرز من القمم النامية والبراعم (إذ لا توجد غدد خاصة في النبات).\n- **الأهمية الوظيفية للأوكسينات:**\n  - تنظيم تتابع نمو الأنسجة وتمايزها والتأثير في ظاهرة السيادة القمية.\n  - إحداث الانتحاءات (الضوئي، الأرضي، والمائي).\n  - تنظيم مواعيد تفتح الأزهار وتساقط الأوراق ونضج الثمار وتساقطها.\n\n### ٢. جهاز الغدد الصماء في الإنسان\n- **الغدد الصماء (Ductless Glands):** غدد لا قنوية تصب إفرازاتها من الهرمونات مباشرة في مجرى الدم المحيط بها.\n- **سيدة الغدد: الغدة النخامية (Pituitary Gland):**\n  - **الفص الأمامي والأوسط (الجزء الغدي):**\n    ١. **هرمون النمو (GH):** ينظم أيض البروتينات ونمو العظام والجسم. نقصه في الطفولة يسبب *القزامة*؛ زيادته في الطفولة تسبب *العملاقة*؛ وزيادته في البالغين تسبب حالة *الأكروميجالي* (تجدد نمو الأجزاء البعيدة لعظام الأطراف والوجه).\n    ٢. **الهرمون المنبه للدرقية (TSH):** يحفز إفراز هرمونات الدرقية.\n    ٣. **الهرمون المنبه لقشرة الكظر (ACTH):** ينشط إفرازات قشرة الغدة الكظرية.\n    ٤. **هرمون البرولاكتين (Prolactin):** يحفز إفراز الحليب من الغدد الثديية.\n    ٥. **الهرمونات المنبهة للمناسل (FSH و LH):** تنضج الحويصلات وتكون الجسم الأصفر وتنظم إفراز الهرمونات الجنسية.\n  - **الفص الخلفي والعنق العصبي (الجزء العصبي):**\n    ١. **الهرمون المضاد لإدرار البول (ADH / الفازوبريسين):** يزيد إعادة امتصاص الماء في النفرونات الكلوية فيقل حجم البول ويرتفع ضغط الدم الشرياني.\n    ٢. **الهرمون المنبه لعضلات الرحم (الأوكسيتوسين):** يحفز الانقباضات الإيقاعية للرحم أثناء الولادة ويدفع الحليب استجابة للرضاعة.\n",
                      "formulas": [
                            {
                                  "labelEn": "Auxin Phototropic Distribution",
                                  "labelAr": "توزيع الأوكسينات في الانتحاء الضوئي",
                                  "latex": "\\%\\text{Shaded} = 65\\% \\quad \\text{vs} \\quad \\%\\text{Illuminated} = 35\\%"
                            },
                            {
                                  "labelEn": "Pituitary Feedback Axis",
                                  "labelAr": "محور التغذية الراجعة النخامية",
                                  "latex": "\\text{Anterior Lobe} \\implies \\text{GH}, \\text{TSH}, \\text{ACTH}, \\text{FSH}, \\text{LH}, \\text{PRL}"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH2-L1",
                            "pageRange": "pp. 55–74"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: Plant Hormones (Auxins) & Pituitary Master Gland",
                            "titleAr": "خطة درس: الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH2-L1",
                            "bloomsObjectivesEn": [
                                  "Analyze the biological structures and functional roles associated with Plant Hormones (Auxins) & Pituitary Master Gland.",
                                  "Evaluate experimental and quantitative evidence governing these cellular mechanisms.",
                                  "Synthesize physiological feedback mechanisms to solve exam-standard analytical problems."
                            ],
                            "bloomsObjectivesAr": [
                                  "تحليل التراكيب البيولوجية والأدوار الوظيفية المرتبطة بـ الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء.",
                                  "تقييم الأدلة التجريبية والكمية الحاكمة لهذه الآليات الخلوية.",
                                  "تطبيق آليات التغذية الراجعة الفسيولوجية لحل المسائل التحليلية المتقدمة."
                            ],
                            "prerequisitesEn": [
                                  "General cell biology",
                                  "Biomolecules and enzymes",
                                  "Basic human physiology"
                            ],
                            "prerequisitesAr": [
                                  "بيولوجيا الخلية العامة",
                                  "الجزيئات الحيوية والإنزيمات",
                                  "مبادئ الفسيولوجيا البشرية"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "Plant Hormones (Auxins) & Pituitary Master Gland",
                                        "definition": "Core concept of Plant Hormones (Auxins) & Pituitary Master Gland as defined in the official curriculum."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء",
                                        "definition": "المفهوم المحوري لـ الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء وفق نواتج التعلم المعتمدة."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Inquiry Hook & Real-world Context",
                                        "phaseAr": "التهيئة والربط بالواقع",
                                        "duration": "15 min",
                                        "activitiesEn": "Examining microscopic micrographs and physiological scenarios.",
                                        "activitiesAr": "مناقشة صور مجهرية وحالات فسيولوجية واقعية."
                                  },
                                  {
                                        "phaseEn": "Direct Instruction & Concept Exploration",
                                        "phaseAr": "التدريس المباشر واستكشاف المفاهيم",
                                        "duration": "35 min",
                                        "activitiesEn": "Interactive diagram tracing and biochemical pathway mapping.",
                                        "activitiesAr": "تتبع المسارات الكيميائية الحيوية على المخططات التفاعلية."
                                  },
                                  {
                                        "phaseEn": "Collaborative Problem Solving",
                                        "phaseAr": "التدريب التشاركي وحل المسائل",
                                        "duration": "25 min",
                                        "activitiesEn": "Working through high-order thinking multi-tier questions.",
                                        "activitiesAr": "حل مسائل متدرجة تقيس مهارات التفكير العليا."
                                  },
                                  {
                                        "phaseEn": "Closure & Formative Exit Ticket",
                                        "phaseAr": "الغلق وتقييم الخروج التكويني",
                                        "duration": "15 min",
                                        "activitiesEn": "Individual synthesis and exit ticket response.",
                                        "activitiesAr": "تقييم تكويني فردي للتحقق من تحقيق نواتج التعلم."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Confusing cause and effect in the hormonal or molecular feedback of Plant Hormones (Auxins) & Pituitary Master Gland."
                            ],
                            "commonMisconceptionsAr": [
                                  "الخلط بين السبب والنتيجة في آليات التغذية الراجعة الخاصة بـ الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء."
                            ],
                            "differentiationEn": {
                                  "struggling": "Provide annotated anatomical diagrams, concept flowcharts, and structured question hints.",
                                  "advanced": "Challenge with novel clinical case studies and multi-variable bioenergetic experiments."
                            },
                            "differentiationAr": {
                                  "struggling": "توفير مخططات تشريحية توضيحية وخرائط تدفق وتلميحات متدرجة للحل.",
                                  "advanced": "تكليف بدراسة حالات إكلينيكية وتصميم تجارب حيوية متعددة المتغيرات."
                            },
                            "formativeAssessmentEn": "What is the diagnostic significance and primary function of Plant Hormones (Auxins) & Pituitary Master Gland?",
                            "formativeAssessmentAr": "ما الأهمية الحيوية والدور الوظيفي الأساسي لـ الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء؟",
                            "exitTicketQuestion": {
                                  "questionEn": "Summarize the key physiological principle governing Plant Hormones (Auxins) & Pituitary Master Gland.",
                                  "questionAr": "لخص المبدأ الفسيولوجي الأساسي الحاكم لـ الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء.",
                                  "solutionEn": "Accurate statement of structural organization, molecular triggers, and physiological outcomes.",
                                  "solutionAr": "تحديد العلاقة الدقيقة بين البنية الجزيئية والمحفزات الحيوية والنتيجة الفسيولوجية."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch2_l1_ws",
                            "titleEn": "Worksheet: Plant Hormones (Auxins) & Pituitary Master Gland",
                            "titleAr": "ورقة عمل: الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء",
                            "descriptionEn": "Comprehensive problem sheet reinforcing key principles and exam problem patterns for Plant Hormones (Auxins) & Pituitary Master Gland.",
                            "descriptionAr": "ورقة تدريبية شاملة لترسيخ المفاهيم وأنماط الأسئلة الامتحانية لـ الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch2_l1_ws_p1",
                                        "titleEn": "Core Standard Question: Plant Hormones (Auxins) & Pituitary Master Gland",
                                        "titleAr": "سؤال قياسي: الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء",
                                        "difficulty": "medium",
                                        "questionEn": "Which statement best characterizes the official biological mechanism of Plant Hormones (Auxins) & Pituitary Master Gland according to national curriculum standards?",
                                        "questionAr": "أي العبارات التالية تصف بدقة الآلية البيولوجية لـ الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء وفقاً لمعايير المنهج الوزاري المعتمد؟",
                                        "optionsEn": [
                                              "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                              "Spontaneous non-enzymatic decay lacking cellular or genetic control",
                                              "Static unchanging equilibrium that does not respond to environmental stimuli",
                                              "Complete cellular shutdown during normal physiological homeostasis"
                                        ],
                                        "optionsAr": [
                                              "تفاعلات جزيئية متخصصة خاضعة للتنظيم عبر المستقبلات والمسارات الإنزيمية الدقيقة",
                                              "تحلل عشوائي تلقائي بدون أي تحكم خلوي أو وراثي",
                                              "اتزان استاتيكي جامد لا يستجيب لأي مؤثرات بيئية أو هرمونية",
                                              "توقف كامل للنشاط الخلوي أثناء الأداء الفسيولوجي الطبيعي"
                                        ],
                                        "correctAnswer": "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                        "correctIndex": 0,
                                        "hintEn": "Focus on the regulated, highly specific nature of physiological and genetic mechanisms.",
                                        "hintAr": "ركز على الطبيعة المنظمة وعالية التخصص للآليات الفسيولوجية والوراثية.",
                                        "stepByStepSolutionEn": [
                                              "Analyze the biological process described in the curriculum.",
                                              "Biological mechanisms operate through specific receptor, enzymatic, or structural cascades.",
                                              "This statement correctly represents the verified scientific curriculum standard."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "تحليل الآلية الحيوية المحددة في المنهج.",
                                              "تعمل الآليات البيولوجية من خلال تسلسلات متخصصة من المستقبلات والإنزيمات.",
                                              "هذه الإجابة تمثل بدقة المفهوم العلمي المعتمد في كتاب الوزارة."
                                        ],
                                        "teacherTipEn": "Remind students that biological control is always dynamic, specific, and regulated.",
                                        "teacherTipAr": "تذكير الطلاب بأن التحكم البيولوجي يتسم دائماً بالدقة والتخصص والتنظيم الفسيولوجي."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Interactive Simulation: Plant Hormones (Auxins) & Pituitary Master Gland",
                            "titleAr": "محاكاة تفاعلية: الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء",
                            "descriptionEn": "Interactive virtual laboratory exploring dynamic variables in Plant Hormones (Auxins) & Pituitary Master Gland.",
                            "descriptionAr": "محاكاة تفاعلية لاستكشاف المتغيرات الفسيولوجية في الهرمونات النباتية (الأوكسينات) والغدة النخامية سيدة الغدد الصماء."
                      }
                },
                {
                      "id": "th_bio_ch2_l2",
                      "titleEn": "Endocrine Glands, Calcium & Glucose Homeostasis",
                      "titleAr": "الغدد الصماء والتوازن الكالسيومي والسكري في الدم",
                      "summaryEn": "Thyroid and parathyroid calcium antagonism (calcitonin vs parathormone), adrenal stress cortex/medulla regulation (aldosterone, cortisol, adrenaline), and pancreatic glucose homeostasis (insulin vs glucagon).",
                      "summaryAr": "دراسة تفصيلية للغدة الدرقية وجارات الدرقية والتوازن الكالسيومي، الغدة الكظرية وقشرتها ونخاعها، والبنكرياس وتنظيم سكر الدم بالإنسولين والجلوكاجون وهرمونات المناسل والقناة الهضمية.",
                      "theoryContentEn": "### 3. Thyroid & Parathyroid Glands\n- **Thyroid Gland (الغدة الدرقية):**\n  - **Thyroxine:** Iodine-containing hormone regulating basal metabolic rate, physical and mental development.\n    - Hyposecretion: *Simple Goitre* (iodine deficiency), *Cretinism* in children (severe mental and growth retardation), *Myxedema* in adults (low BMR, weight gain, dry skin).\n    - Hypersecretion: *Exophthalmic Goitre* (elevated BMR, weight loss, rapid pulse, exophthalmos).\n  - **Calcitonin:** Lowers blood $\\text{Ca}^{2+}$ levels by inhibiting bone resorption and preventing bone calcium loss.\n- **Parathyroid Glands (الغدد جارات الدرقية):**\n  - **Parathormone:** Increases blood $\\text{Ca}^{2+}$ levels by promoting bone resorption and renal/intestinal calcium reabsorption. Works antagonistically with calcitonin.\n\n### 4. Adrenal Glands (Suprarenal - الغدتان الكظريتان)\n- **Adrenal Cortex (قشرة الكظر):**\n  1. **Glucocorticoids (Cortisone, Cortisol):** Regulate carbohydrate (sugar and starch) metabolism.\n  2. **Mineralocorticoids (Aldosterone):** Maintains electrolyte balance by promoting renal $\\text{Na}^+$ reabsorption and $\\text{K}^+$ excretion.\n  3. **Sex Hormones:** Androgens and estrogens that supplement gonadal hormones. Imbalance leads to virilization or feminization.\n- **Adrenal Medulla (نخاع الكظر):**\n  - **Adrenaline & Noradrenaline:** Fight-or-flight emergency hormones that increase glycogen breakdown into glucose, accelerate heart rate, elevate blood pressure, and dilate bronchioles.\n\n### 5. Pancreas & Glucose Homeostasis\n- **Mixed (Heterocrine) Gland:** Exocrine acinar cells secrete pancreatic digestive juice; Endocrine **Islets of Langerhans** regulate glycemia:\n  - **$\\alpha$ Cells ($10-15\\%$):** Secrete **Glucagon** to stimulate hepatic glycogenolysis, elevating blood glucose.\n  - **$\\beta$ Cells ($80-85\\%$):** Secrete **Insulin** to facilitate cellular glucose uptake and oxidation, and hepatic/muscular glycogenesis, lowering blood glucose.\n  - **Normal Fasting Blood Glucose:** $80 - 120\\text{ mg/dL}$.\n  - **Diabetes Mellitus:** Caused by insulin hyposecretion or receptor resistance, manifesting as hyperglycemia, polyuria, polydipsia, and ketoacidosis.\n\n### 6. Gonads & Gastrointestinal Hormones\n- **Testes:** Leydig (interstitial) cells secrete **Testosterone** and **Androsterone** (secondary male sex characteristics).\n- **Ovaries:**\n  - Graafian follicles secrete **Estrogen (Estradiol)**.\n  - Corpus luteum secretes **Progesterone** and **Relaxin** (relaxes pubic symphysis).\n- **Gastrointestinal Mucosa:** **Gastrin** (gastric juice secretion), **Secretin** & **Cholecystokinin (CCK)** (pancreatic juice and bile ejection).",
                      "theoryContentAr": "### ٣. الغدة الدرقية والغدد جارات الدرقية\n- **الغدة الدرقية (Thyroid Gland):**\n  - **هرمون الثيروكسين:** يحتوي على اليود، وينظم معدل الأيض الأساسي والنمو البدني والعقلي.\n    - نقص الإفراز: *الجويتر البسيط* (نقص اليود)، *القصر أو القماءة* في الأطفال (تأخر عقلي وبدني وقصر قامة)، و*الميكسيديما* في البالغين (هبوط الأيض، زيادة الوزن، تساقط الشعر، وجفاف الجلد).\n    - زيادة الإفراز: *الجويتر الجحوظي* (ارتفاع معدل الأيض، نقص الوزن، سرعة النبض، وجحوظ العينين).\n  - **هرمون الكالسيتونين:** يقلل نسبة الكالسيوم في الدم ويمنع سحبه من العظام.\n- **الغدد جارات الدرقية (Parathyroid Glands - ٤ غدد):**\n  - **هرمون الباراثورمون:** يزيد نسبة الكالسيوم في الدم عن طريق سحبه من العظام وتحفيز امتصاصه من الكلى والأمعاء (يعمل بتضاد مع الكالسيتونين).\n\n### ٤. الغدتان الكظريتان (فوق الكلويتين)\n- **قشرة الكظر (تفرز هرمونات ستيرويدية بتنبيه من ACTH):**\n  ١. **مجموعة الهرمونات السكرية (الكورتيزون والكورتيزول):** تنظم أيض الكربوهيدرات (السكريات والنشويات).\n  ٢. **مجموعة الهرمونات المعدنية (الألدوستيرون):** تحافظ على التوازن المعدني بإعادة امتصاص الصوديوم والتخلص من البوتاسيوم الزائد عبر الكليتين.\n  ٣. **مجموعة الهرمونات الجنسية:** هرمونات شبيهة بالإستروجين والتستوستيرون.\n- **نخاع الكظر (يفرز بتنبيه عصبي سمبثاوي):**\n  - **الأدرينالين والنورأدرينالين:** هرمونا الطوارئ والنجدة، يرفعان سكر الدم بتحفيز تحلل جليكوجين الكبد إلى جلوكوز، ويزيدان قوة وسرعة ضربات القلب ويرفعان ضغط الدم.\n\n### ٥. البنكرياس وتنظيم سكر الدم\n- **غدة مختلطة (مشتركة):** خلايا حويصلية قنوية تفرز العصارة الهاضمة، و**جزر لانجرهانز** الصماء تفرز الهرمونات:\n  - **خلايا ألفا ($10-15\\%$):** تفرز **الجلوكاجون** لرفع سكر الدم بتحفيز تحويل جليكوجين الكبد فقط إلى جلوكوز.\n  - **خلايا بيتا ($80-85\\%$):** تفرز **الإنسولين** لخفض سكر الدم بتحفيز مرور السكريات الأحادية لأكسدتها بالخلايا وتحفيز تحويل الجلوكوز لجليكوجين في الكبد والعضلات أو دهون بالأنسجة الدهنية.\n  - **المستوى الطبيعي لجلوكوز الدم:** $80 - 120\\text{ ملجم/١٠٠ سم}^3$.\n  - **مرض البول السكري:** ينشط بسبب نقص إفراز الإنسولين أو خلل مستقبلاته، مسبباً ارتفاع السكر، تعدد التبول، والعطش المستمر.\n\n### ٦. هرمونات المناسل والقناة الهضمية\n- **الخصية:** الخلايا البينية تفرز **التستوستيرون** و**الأندروستيرون** (الصفات الجنسية الذكرية ونمو البروستاتا).\n- **المبيض:** حويصلة جراف تفرز **الإستروجين** (إظهار الصفات الأنثوية وتنظيم الطمث)؛ والجسم الأصفر يفرز **البروجسترون** (إمداد بطانة الرحم بالدم) و**الريلاكسين** (ارتخاء الارتفاق العاني عند الولادة).\n- **الغشاء المخاطي للقناة الهضمية:** **الجاسترين** (يحث المعدة على إفراز عصارتها)، و**السيكرتين والكوليسيستوكينين** (يحثان البنكرياس على إفراز عصارته الهاضمة).",
                      "formulas": [
                            {
                                  "labelEn": "Calcium Homeostasis",
                                  "labelAr": "اتزان الكالسيوم في الدم",
                                  "latex": "\\text{Blood } [Ca^{2+}]: \\text{Calcitonin} (\\downarrow) \\iff \\text{Parathormone} (\\uparrow)"
                            },
                            {
                                  "labelEn": "Normal Fasting Blood Glucose",
                                  "labelAr": "مستوى الجلوكوز الطبيعي في الدم",
                                  "latex": "[\\text{Glucose}]_{\\text{normal}} = 80 - 120\\,\\text{mg/dL}"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH2-L2",
                            "pageRange": "pp. 75–98"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: Endocrine Glands, Calcium & Glucose Homeostasis",
                            "titleAr": "خطة درس: الغدد الصماء والتوازن الكالسيومي والسكري في الدم",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH2-L2",
                            "bloomsObjectivesEn": [
                                  "Analyze the biological structures and functional roles associated with Endocrine Glands, Calcium & Glucose Homeostasis.",
                                  "Evaluate experimental and quantitative evidence governing these cellular mechanisms.",
                                  "Synthesize physiological feedback mechanisms to solve exam-standard analytical problems."
                            ],
                            "bloomsObjectivesAr": [
                                  "تحليل التراكيب البيولوجية والأدوار الوظيفية المرتبطة بـ الغدد الصماء والتوازن الكالسيومي والسكري في الدم.",
                                  "تقييم الأدلة التجريبية والكمية الحاكمة لهذه الآليات الخلوية.",
                                  "تطبيق آليات التغذية الراجعة الفسيولوجية لحل المسائل التحليلية المتقدمة."
                            ],
                            "prerequisitesEn": [
                                  "General cell biology",
                                  "Biomolecules and enzymes",
                                  "Basic human physiology"
                            ],
                            "prerequisitesAr": [
                                  "بيولوجيا الخلية العامة",
                                  "الجزيئات الحيوية والإنزيمات",
                                  "مبادئ الفسيولوجيا البشرية"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "Endocrine Glands, Calcium & Glucose Homeostasis",
                                        "definition": "Core concept of Endocrine Glands, Calcium & Glucose Homeostasis as defined in the official curriculum."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "الغدد الصماء والتوازن الكالسيومي والسكري في الدم",
                                        "definition": "المفهوم المحوري لـ الغدد الصماء والتوازن الكالسيومي والسكري في الدم وفق نواتج التعلم المعتمدة."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Inquiry Hook & Real-world Context",
                                        "phaseAr": "التهيئة والربط بالواقع",
                                        "duration": "15 min",
                                        "activitiesEn": "Examining microscopic micrographs and physiological scenarios.",
                                        "activitiesAr": "مناقشة صور مجهرية وحالات فسيولوجية واقعية."
                                  },
                                  {
                                        "phaseEn": "Direct Instruction & Concept Exploration",
                                        "phaseAr": "التدريس المباشر واستكشاف المفاهيم",
                                        "duration": "35 min",
                                        "activitiesEn": "Interactive diagram tracing and biochemical pathway mapping.",
                                        "activitiesAr": "تتبع المسارات الكيميائية الحيوية على المخططات التفاعلية."
                                  },
                                  {
                                        "phaseEn": "Collaborative Problem Solving",
                                        "phaseAr": "التدريب التشاركي وحل المسائل",
                                        "duration": "25 min",
                                        "activitiesEn": "Working through high-order thinking multi-tier questions.",
                                        "activitiesAr": "حل مسائل متدرجة تقيس مهارات التفكير العليا."
                                  },
                                  {
                                        "phaseEn": "Closure & Formative Exit Ticket",
                                        "phaseAr": "الغلق وتقييم الخروج التكويني",
                                        "duration": "15 min",
                                        "activitiesEn": "Individual synthesis and exit ticket response.",
                                        "activitiesAr": "تقييم تكويني فردي للتحقق من تحقيق نواتج التعلم."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Confusing cause and effect in the hormonal or molecular feedback of Endocrine Glands, Calcium & Glucose Homeostasis."
                            ],
                            "commonMisconceptionsAr": [
                                  "الخلط بين السبب والنتيجة في آليات التغذية الراجعة الخاصة بـ الغدد الصماء والتوازن الكالسيومي والسكري في الدم."
                            ],
                            "differentiationEn": {
                                  "struggling": "Provide annotated anatomical diagrams, concept flowcharts, and structured question hints.",
                                  "advanced": "Challenge with novel clinical case studies and multi-variable bioenergetic experiments."
                            },
                            "differentiationAr": {
                                  "struggling": "توفير مخططات تشريحية توضيحية وخرائط تدفق وتلميحات متدرجة للحل.",
                                  "advanced": "تكليف بدراسة حالات إكلينيكية وتصميم تجارب حيوية متعددة المتغيرات."
                            },
                            "formativeAssessmentEn": "What is the diagnostic significance and primary function of Endocrine Glands, Calcium & Glucose Homeostasis?",
                            "formativeAssessmentAr": "ما الأهمية الحيوية والدور الوظيفي الأساسي لـ الغدد الصماء والتوازن الكالسيومي والسكري في الدم؟",
                            "exitTicketQuestion": {
                                  "questionEn": "Summarize the key physiological principle governing Endocrine Glands, Calcium & Glucose Homeostasis.",
                                  "questionAr": "لخص المبدأ الفسيولوجي الأساسي الحاكم لـ الغدد الصماء والتوازن الكالسيومي والسكري في الدم.",
                                  "solutionEn": "Accurate statement of structural organization, molecular triggers, and physiological outcomes.",
                                  "solutionAr": "تحديد العلاقة الدقيقة بين البنية الجزيئية والمحفزات الحيوية والنتيجة الفسيولوجية."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch2_l2_ws",
                            "titleEn": "Worksheet: Endocrine Glands, Calcium & Glucose Homeostasis",
                            "titleAr": "ورقة عمل: الغدد الصماء والتوازن الكالسيومي والسكري في الدم",
                            "descriptionEn": "Comprehensive problem sheet reinforcing key principles and exam problem patterns for Endocrine Glands, Calcium & Glucose Homeostasis.",
                            "descriptionAr": "ورقة تدريبية شاملة لترسيخ المفاهيم وأنماط الأسئلة الامتحانية لـ الغدد الصماء والتوازن الكالسيومي والسكري في الدم.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch2_l2_ws_p1",
                                        "titleEn": "Core Standard Question: Endocrine Glands, Calcium & Glucose Homeostasis",
                                        "titleAr": "سؤال قياسي: الغدد الصماء والتوازن الكالسيومي والسكري في الدم",
                                        "difficulty": "medium",
                                        "questionEn": "Which statement best characterizes the official biological mechanism of Endocrine Glands, Calcium & Glucose Homeostasis according to national curriculum standards?",
                                        "questionAr": "أي العبارات التالية تصف بدقة الآلية البيولوجية لـ الغدد الصماء والتوازن الكالسيومي والسكري في الدم وفقاً لمعايير المنهج الوزاري المعتمد؟",
                                        "optionsEn": [
                                              "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                              "Spontaneous non-enzymatic decay lacking cellular or genetic control",
                                              "Static unchanging equilibrium that does not respond to environmental stimuli",
                                              "Complete cellular shutdown during normal physiological homeostasis"
                                        ],
                                        "optionsAr": [
                                              "تفاعلات جزيئية متخصصة خاضعة للتنظيم عبر المستقبلات والمسارات الإنزيمية الدقيقة",
                                              "تحلل عشوائي تلقائي بدون أي تحكم خلوي أو وراثي",
                                              "اتزان استاتيكي جامد لا يستجيب لأي مؤثرات بيئية أو هرمونية",
                                              "توقف كامل للنشاط الخلوي أثناء الأداء الفسيولوجي الطبيعي"
                                        ],
                                        "correctAnswer": "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                        "correctIndex": 0,
                                        "hintEn": "Focus on the regulated, highly specific nature of physiological and genetic mechanisms.",
                                        "hintAr": "ركز على الطبيعة المنظمة وعالية التخصص للآليات الفسيولوجية والوراثية.",
                                        "stepByStepSolutionEn": [
                                              "Analyze the biological process described in the curriculum.",
                                              "Biological mechanisms operate through specific receptor, enzymatic, or structural cascades.",
                                              "This statement correctly represents the verified scientific curriculum standard."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "تحليل الآلية الحيوية المحددة في المنهج.",
                                              "تعمل الآليات البيولوجية من خلال تسلسلات متخصصة من المستقبلات والإنزيمات.",
                                              "هذه الإجابة تمثل بدقة المفهوم العلمي المعتمد في كتاب الوزارة."
                                        ],
                                        "teacherTipEn": "Remind students that biological control is always dynamic, specific, and regulated.",
                                        "teacherTipAr": "تذكير الطلاب بأن التحكم البيولوجي يتسم دائماً بالدقة والتخصص والتنظيم الفسيولوجي."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Interactive Simulation: Endocrine Glands, Calcium & Glucose Homeostasis",
                            "titleAr": "محاكاة تفاعلية: الغدد الصماء والتوازن الكالسيومي والسكري في الدم",
                            "descriptionEn": "Interactive virtual laboratory exploring dynamic variables in Endocrine Glands, Calcium & Glucose Homeostasis.",
                            "descriptionAr": "محاكاة تفاعلية لاستكشاف المتغيرات الفسيولوجية في الغدد الصماء والتوازن الكالسيومي والسكري في الدم."
                      }
                }
          ],
          "solvedExamples": [
                {
                      "id": "th_bio_ch2_se_01",
                      "titleEn": "Example 1: Blood Glucose Regulation Dynamics",
                      "titleAr": "مثال محلول ١: ديناميكية تنظيم سكر الجلوكوز في الدم",
                      "difficulty": "medium",
                      "questionEn": "A healthy individual consumes a carbohydrate-rich meal. One hour later, blood glucose reaches 150 mg/dL, and two hours later returns to 95 mg/dL. Detail the endocrine response responsible for this recovery.",
                      "questionAr": "تناول شخص سليم وجبة غنية بالكربوهيدرات، وبعد ساعة ارتفع سكر الدم إلى 150 ملجم/100 سم3، وبعد ساعتين عاد إلى 95 ملجم/100 سم3. وضح الاستجابة الهرمونية المسؤولة عن عودة السكر للمعدل الطبيعي.",
                      "stepByStepSolutionEn": [
                            "1. Elevated blood glucose (>120 mg/dL) directly stimulates beta cells in the islets of Langerhans.",
                            "2. Beta cells secrete insulin into the bloodstream.",
                            "3. Insulin promotes the passage of monosaccharides (except fructose) through cell membranes to be oxidized for cellular energy.",
                            "4. Insulin stimulates the liver and muscles to convert excess glucose into glycogen (glycogenesis), and stores excess as fat in adipose tissue.",
                            "5. Blood glucose returns to the normal fasting baseline range (80-120 mg/dL)."
                      ],
                      "stepByStepSolutionAr": [
                            "١. ارتفاع جلوكوز الدم (>120 ملجم) يحفز خلايا بيتا في جزر لانجرهانز بالبنكرياس.",
                            "٢. تفرز خلايا بيتا هرمون الإنسولين في مجرى الدم.",
                            "٣. يحث الإنسولين على مرور السكريات الأحادية (ما عدا الفركتوز) عبر أغشية الخلايا لأكسدتها وإنتاج الطاقة.",
                            "٤. يحفز الإنسولين الكبد والعضلات على تحويل الجلوكوز الزائد إلى جليكوجين مخزون، وتخزين الفائض كأنسجة دهنية.",
                            "٥. يعود تركيز الجلوكوز في الدم إلى مستواه الطبيعي (80 - 120 ملجم/100 سم3)."
                      ],
                      "teacherTipEn": "Fructose is unique because it passes into cells without requiring insulin.",
                      "teacherTipAr": "تذكر دائماً أن سكر الفركتوز يمر إلى داخل الخلايا ويُمتص دون الحاجة لهرمون الإنسولين.",
                      "hintEn": "Fructose is unique because it passes into cells without requiring insulin.",
                      "hintAr": "تذكر دائماً أن سكر الفركتوز يمر إلى داخل الخلايا ويُمتص دون الحاجة لهرمون الإنسولين."
                },
                {
                      "id": "th_bio_ch2_se_02",
                      "titleEn": "Example 2: Calcium Regulation (Calcitonin vs Parathormone)",
                      "titleAr": "مثال محلول ٢: الاتزان الهرموني للكالسيوم بالدم",
                      "difficulty": "medium",
                      "questionEn": "Explain the antagonistic endocrine mechanism maintaining serum calcium levels when dietary calcium intake is severely deficient.",
                      "questionAr": "وضح الآلية الهرمونية المتضادة التي تحافظ على تركيز كالسيوم الدم ثابتاً في حالة النقص الشديد في الكالسيوم الغذائي.",
                      "stepByStepSolutionEn": [
                            "1. Low blood calcium stimulates the four parathyroid glands to increase Parathormone secretion.",
                            "2. Parathormone stimulates osteoclasts to resorb bone matrix, releasing Ca2+ into circulation.",
                            "3. Parathormone enhances calcium reabsorption in renal tubules and stimulates activation of vitamin D to increase intestinal calcium absorption.",
                            "4. Meanwhile, thyroid Calcitonin secretion is inhibited, preventing calcium deposition in bone.",
                            "5. Blood calcium concentration rises back to normal physiological levels."
                      ],
                      "stepByStepSolutionAr": [
                            "١. يؤدي هبوط كالسيوم الدم إلى استثارة الغدد جارات الدرقية الأربع لزيادة إفراز هرمون الباراثورمون.",
                            "٢. يحفز الباراثورمون سحب الكالسيوم من العظام وإطلاقه في مجرى الدم.",
                            "٣. يزيد الباراثورمون إعادة امتصاص الكالسيوم من النفرونات الكلوية والأمعاء الدقيقة.",
                            "٤. في المقابل، يثبط إفراز هرمون الكالسيتونين من الغدة الدرقية ليتوقف ترسيب الكالسيوم بالعظام.",
                            "٥. يستعيد الدم تركيز الكالسيوم الطبيعي الضروري لانقباض العضلات والسيال العصبي."
                      ],
                      "teacherTipEn": "Prolonged high parathormone weakens bones (osteoporosis) because calcium is chronically withdrawn.",
                      "teacherTipAr": "زيادة إفراز الباراثورمون لفترات طويلة تسبب هشاشة العظام وتعرضها للانحناء والكسر بسهولة.",
                      "hintEn": "Prolonged high parathormone weakens bones (osteoporosis) because calcium is chronically withdrawn.",
                      "hintAr": "زيادة إفراز الباراثورمون لفترات طويلة تسبب هشاشة العظام وتعرضها للانحناء والكسر بسهولة."
                },
                {
                      "id": "th_bio_ch2_se_03",
                      "titleEn": "Example 3: Differentiating Gigantism and Acromegaly",
                      "titleAr": "مثال محلول ٣: التفريق بين العملاقة والأكروميجالي",
                      "difficulty": "easy",
                      "questionEn": "Contrast the skeletal manifestations of growth hormone (GH) hypersecretion occurring before versus after puberty.",
                      "questionAr": "قارن بين المظاهر الهيكلية لفرط إفراز هرمون النمو (GH) قبل البلوغ مقارنة بحدوثه بعد البلوغ.",
                      "stepByStepSolutionEn": [
                            "1. Before puberty (childhood): Epiphyseal growth plates of long bones are open. GH excess causes proportional elongation of all long bones, resulting in Gigantism.",
                            "2. After puberty (adulthood): Epiphyseal plates have ossified and fused. GH excess cannot lengthen bones vertically, but causes renewed growth of distal extremities (hands, feet, fingers) and enlargement of facial bones (jaw, brow), resulting in Acromegaly."
                      ],
                      "stepByStepSolutionAr": [
                            "١. قبل البلوغ (في الطفولة): أقراص النمو العظمية مفتوحة؛ فيؤدي فرط النمو إلى استطالة متناسقة في عظام الأطراف مسبباً حالة العملاقة.",
                            "٢. بعد البلوغ (في البالغين): التحمت أقراص النمو العظمية؛ فلا يحدث طول في القامة، بل يتجدد نمو الأجزاء البعيدة كالأيدي والأقدام والأصابع، وتتضخم عظام الوجه والفك مسبباً حالة الأكروميجالي."
                      ],
                      "teacherTipEn": "Key diagnostic: Gigantism increases height; Acromegaly widens extremities without increasing height.",
                      "teacherTipAr": "الفيصل في التشخيص: العملاقة تزيد الطول الكلي للقامة؛ بينما الأكروميجالي تضخم الأطراف والوجه دون زيادة في الطول.",
                      "hintEn": "Key diagnostic: Gigantism increases height; Acromegaly widens extremities without increasing height.",
                      "hintAr": "الفيصل في التشخيص: العملاقة تزيد الطول الكلي للقامة؛ بينما الأكروميجالي تضخم الأطراف والوجه دون زيادة في الطول."
                },
                {
                      "id": "th_bio_ch2_se_04",
                      "titleEn": "Example 4: Posterior Pituitary Hormone Synthesis",
                      "titleAr": "مثال محلول ٤: أصل تصنيع هرمونات الفص الخلفي للنخامية",
                      "difficulty": "medium",
                      "questionEn": "Why is the posterior lobe of the pituitary considered a neurohemal storage organ rather than a true endocrine gland?",
                      "questionAr": "علل: يعتبر الفص الخلفي للغدة النخامية عضواً تخزينياً عصبياً وليس غدة مفرزة حقيقية.",
                      "stepByStepSolutionEn": [
                            "1. The posterior lobe hormones (ADH and Oxytocin) are synthesized by neurosecretory cells located in the hypothalamus of the brain.",
                            "2. Hormones travel down axons through the infundibular stalk and are stored in nerve terminals within the posterior pituitary.",
                            "3. The posterior lobe merely releases these hormones into the bloodstream upon neurological stimulation, without synthesizing them de novo."
                      ],
                      "stepByStepSolutionAr": [
                            "١. هرمونات الفص الخلفي (ADH والأوكسيتوسين) تصنعها خلايا عصبية مفرزة متواجدة في منطقة تحت المهاد (الهايبوثلاموس) بالمخ.",
                            "٢. تنتقل الهرمونات عبر المحاور العصبية بالعنق العصبي وتُخزن في النهايات العصبية بالفص الخلفي للنخامية.",
                            "٣. يقتصر دور الفص الخلفي على تخزين وتحرير هذه الهرمونات في الدم عند الحاجة دون تصنيعها ذاتياً."
                      ],
                      "teacherTipEn": "Neurosecretory cells in the hypothalamus are where ADH and oxytocin are actually made.",
                      "teacherTipAr": "الخلايا العصبية المفرزة في تحت المهاد (الهايبوثلاموس) هي المصدر الحقيقي لتصنيع ADH والأوكسيتوسين.",
                      "hintEn": "Neurosecretory cells in the hypothalamus are where ADH and oxytocin are actually made.",
                      "hintAr": "الخلايا العصبية المفرزة في تحت المهاد (الهايبوثلاموس) هي المصدر الحقيقي لتصنيع ADH والأوكسيتوسين."
                },
                {
                      "id": "th_bio_ch2_se_05",
                      "titleEn": "Example 5: Mechanism of Water Retention by ADH",
                      "titleAr": "مثال محلول ٥: آلية عمل هرمون ADH في الحفاظ على الماء",
                      "difficulty": "hots",
                      "questionEn": "A desert traveler deprived of water experiences increased blood osmolarity. Detail the ADH-mediated homeostatic response and its effect on urine and blood parameters.",
                      "questionAr": "تعرض مسافر في الصحراء لنقص حاد في مياه الشرب فارتفعت الخاصية الأسموزية لدمه. وضح الاستجابة الهرمونية لهرمون ADH وتأثيرها على البول والدم.",
                      "stepByStepSolutionEn": [
                            "1. High blood osmolarity stimulates hypothalamic osmoreceptors, triggering the posterior pituitary to release ADH (antidiuretic hormone).",
                            "2. ADH acts on the collecting ducts and distal convoluted tubules of nephrons, inserting aquaporin channels.",
                            "3. Water is actively reabsorbed from the tubular lumen back into blood capillaries.",
                            "4. Urine volume decreases, while urine concentration and osmolarity increase.",
                            "5. Blood volume increases, blood osmolarity decreases back to normal, and arterial blood pressure rises."
                      ],
                      "stepByStepSolutionAr": [
                            "١. ارتفاع أسموزية الدم (زيادة تركيز الذائبات) يستحث المستقبلات الأسموزية في الهايبوثلاموس، مما يحفز تحرير هرمون ADH من الفص الخلفي للنخامية.",
                            "٢. يعمل ADH على القنوات الجامعة والأنابيب الملتفة البعيدة في نفرونات الكلية لزيادة نفاذية الماء.",
                            "٣. يُعاد امتصاص الماء إلى الدم، مما يقلل كمية البول ويزيد تركيزه وأسموزيته.",
                            "٤. يزداد حجم بلازما الدم، وتنخفض أسموزية الدم لمعدلها الطبيعي، ويرتفع ضغط الدم الشرياني."
                      ],
                      "teacherTipEn": "ADH decreases urine volume but increases urine concentration, while decreasing blood osmolarity.",
                      "teacherTipAr": "تذكر دائماً: هرمون ADH يقلل كمية البول ويزيد تركيزه، بينما يزيد حجم الدم ويقلل أسموزيته.",
                      "hintEn": "ADH decreases urine volume but increases urine concentration, while decreasing blood osmolarity.",
                      "hintAr": "تذكر دائماً: هرمون ADH يقلل كمية البول ويزيد تركيزه، بينما يزيد حجم الدم ويقلل أسموزيته."
                },
                {
                      "id": "th_bio_ch2_se_06",
                      "titleEn": "Example 6: Hormonal Response to Severe Acute Hemorrhage",
                      "titleAr": "مثال محلول ٦: الاستجابة الهرمونية للنزيف الحاد وهبوط ضغط الدم",
                      "difficulty": "hots",
                      "questionEn": "Which two distinct hormones collaborate synergistically to restore circulating blood volume and arterial pressure during massive acute blood loss?",
                      "questionAr": "ما الهرمونان اللذان يتعاونان معاً لإنقاذ حياة مريض أصيب بنزيف دموي حاد وهبوط شديد في ضغط الدم؟",
                      "stepByStepSolutionEn": [
                            "1. ADH (Vasopressin) from the posterior pituitary induces direct vasoconstriction of peripheral arterioles and maximizes renal water reabsorption.",
                            "2. Aldosterone from the adrenal cortex stimulates renal reabsorption of sodium ions (Na+), with water following passively by osmosis, expanding circulating fluid volume.",
                            "3. Together, increased systemic vascular resistance and expanded blood volume elevate blood pressure toward normal."
                      ],
                      "stepByStepSolutionAr": [
                            "١. هرمون ADH (الفازوبريسين) من الفص الخلفي للنخامية: يقبض العضلات الملساء للأوعية الدموية ويرفع ضغط الدم، كما يعيد امتصاص الماء بالكلية.",
                            "٢. هرمون الألدوستيرون من قشرة الكظر: يعيد امتصاص أملاح الصوديوم (Na+) بالكلية فيتبعه الماء بالأسموزية لزيادة حجم الدم.",
                            "٣. بتكامل الهرمونين، يرتفع ضغط الدم الشرياني ويزداد حجم الدم المتدفق للمخ والقلب."
                      ],
                      "teacherTipEn": "ADH retains water directly; Aldosterone retains sodium, which pulls water along secondarily.",
                      "teacherTipAr": "ADH يعيد امتصاص الماء مباشرة؛ بينما الألدوستيرون يعيد امتصاص الصوديوم فيتبعه الماء أسموزياً.",
                      "hintEn": "ADH retains water directly; Aldosterone retains sodium, which pulls water along secondarily.",
                      "hintAr": "ADH يعيد امتصاص الماء مباشرة؛ بينما الألدوستيرون يعيد امتصاص الصوديوم فيتبعه الماء أسموزياً."
                },
                {
                      "id": "th_bio_ch2_se_07",
                      "titleEn": "Example 7: Clinical Features of Myxedema vs Cretinism",
                      "titleAr": "مثال محلول ٧: التفريق بين الميكسيديما والقماءة",
                      "difficulty": "medium",
                      "questionEn": "Contrast the clinical presentation and developmental impact of severe thyroxine deficiency in an infant versus a 40-year-old adult.",
                      "questionAr": "قارن بين المظاهر السريرية والأثر النمائي للنقص الحاد في إفراز الثيروكسين في رضيع مقارنة بشخص بالغ بعمر 40 عاماً.",
                      "stepByStepSolutionEn": [
                            "1. In an infant (Cretinism): Thyroxine is critical for neural myelination and skeletal elongation. Deficiency causes permanent mental retardation, short disproportionate stature (large head, short neck and limbs), and delayed sexual maturity.",
                            "2. In an adult (Myxedema): Neural wiring is already complete. Deficiency manifests as depressed basal metabolic rate, intolerance to cold, weight gain, dry skin, hair loss, mental sluggishness, and subcutaneous mucinous fluid accumulation (puffy face and hands)."
                      ],
                      "stepByStepSolutionAr": [
                            "١. في الرضيع (القماءة): الثيروكسين ضروري لنمو المخ والعظام؛ فنقصه يسبب تخلفاً عقلياً دائماً، قصر القامة غير المتناسق (كبر الرأس وقصر الرقبة)، وتأخر النضج الجنسي.",
                            "٢. في البالغ (الميكسيديما): اكتمل نمو المخ؛ فتظهر الأعراض في صورة هبوط التمثيل الغذائي، عدم تحمل البرودة، زيادة الوزن، تساقط الشعر، جفاف الجلد، وبطء الاستجابة مع انتفاخ الوجه واليدين."
                      ],
                      "teacherTipEn": "Mental retardation is irreversible in cretinism if treatment with thyroxine is delayed past early infancy.",
                      "teacherTipAr": "التخلف العقلي في القماءة يصبح دائماً وغير قابل للعلاج إذا لم يتم التدخل المبكر بهرمون الثيروكسين.",
                      "hintEn": "Mental retardation is irreversible in cretinism if treatment with thyroxine is delayed past early infancy.",
                      "hintAr": "التخلف العقلي في القماءة يصبح دائماً وغير قابل للعلاج إذا لم يتم التدخل المبكر بهرمون الثيروكسين."
                },
                {
                      "id": "th_bio_ch2_se_08",
                      "titleEn": "Example 8: Adrenal Cortex Mineralocorticoid Feedback",
                      "titleAr": "مثال محلول ٨: الضبط الأسموزي بهرمون الألدوستيرون",
                      "difficulty": "medium",
                      "questionEn": "A patient exhibits muscle weakness and cardiac arrhythmia. Lab tests reveal elevated serum potassium (hyperkalemia) and low serum sodium (hyponatremia). Identify the defective endocrine hormone.",
                      "questionAr": "يعاني مريض من ضعف عضلي واضطراب في ضربات القلب، وأظهرت التحاليل ارتفاع بوتاسيوم الدم وانخفاض الصوديوم. حدد الهرمون المسؤول عن هذا الخلل.",
                      "stepByStepSolutionEn": [
                            "1. The hormone regulating sodium and potassium balance is Aldosterone, secreted by the adrenal cortex.",
                            "2. Aldosterone normally promotes Na+ reabsorption and K+ excretion in the distal nephron.",
                            "3. Deficiency of aldosterone (hypoaldosteronism, seen in Addison's disease) leads to excessive renal loss of Na+ and toxic retention of K+ in the blood.",
                            "4. Treatment requires mineralocorticoid replacement therapy."
                      ],
                      "stepByStepSolutionAr": [
                            "١. الهرمون المسؤول عن توازن الصوديوم والبوتاسيوم هو هرمون الألدوستيرون (من مجموعة الهرمونات المعدنية بقشرة الكظر).",
                            "٢. وظيفته الطبيعية هي إعادة امتصاص الصوديوم إلى الدم والتخلص من البوتاسيوم في البول.",
                            "٣. يؤدي نقص الألدوستيرون إلى فقدان الصوديوم بالبول وتراكم البوتاسيوم السام في الدم وضعف العضلات واضطراب القلب.",
                            "٤. يتطلب العلاج تعويض المريض بهرمونات القشرة الكظرية المعدنية."
                      ],
                      "teacherTipEn": "Remember: Aldosterone saves Sodium (Na+) and throws Potassium (K+) into the urine.",
                      "teacherTipAr": "قاعدة ذهبية: الألدوستيرون يحبس الصوديوم في الدم ويطرد البوتاسيوم في البول.",
                      "hintEn": "Remember: Aldosterone saves Sodium (Na+) and throws Potassium (K+) into the urine.",
                      "hintAr": "قاعدة ذهبية: الألدوستيرون يحبس الصوديوم في الدم ويطرد البوتاسيوم في البول."
                },
                {
                      "id": "th_bio_ch2_se_09",
                      "titleEn": "Example 9: Mechanism of Gastric Secretion Control",
                      "titleAr": "مثال محلول ٩: التنظيم الهرموني لإفراز حمض المعدة",
                      "difficulty": "easy",
                      "questionEn": "Explain how food arriving in the stomach stimulates gastric juice secretion via an endocrine rather than an exocrine pathway.",
                      "questionAr": "وضح كيف يحفز وصول الطعام إلى تجويف المعدة إفراز حمضها عبر مسار هرموني دموي وليس إفرازاً موضعياً مباشراً.",
                      "stepByStepSolutionEn": [
                            "1. The presence of food (especially peptides) and distension of the stomach stimulates G-cells in the gastric mucosa.",
                            "2. G-cells secrete the hormone Gastrin into local capillaries.",
                            "3. Gastrin travels through the systemic bloodstream and returns via the gastric arteries to bind parietal cells in the stomach wall.",
                            "4. This triggers parietal cells to secrete hydrochloric acid (HCl) and pepsinogen into the stomach lumen."
                      ],
                      "stepByStepSolutionAr": [
                            "١. وصول الطعام وتمدد جدار المعدة يحفز خلايا الغشاء المخاطي للمعدة على إفراز هرمون الجاسترين.",
                            "٢. يُفرز الجاسترين إلى الأوعية الدموية الشعرية وينتقل في الدورة الدموية العامة.",
                            "٣. يعود الجاسترين عبر الشرايين المغذية للمعدة ليرتبط بخلايا جدار المعدة المفرزة.",
                            "٤. يحث الجاسترين المعدة على إفراز العصير المعدي (حمض HCl والبيبسينوجين) في تجويفها لهضم البروتينات."
                      ],
                      "teacherTipEn": "Gastrin is a classic example of an organ secreting a hormone that circles back to stimulate the same organ.",
                      "teacherTipAr": "الجاسترين مثال فريد لعضو يفرز هرموناً في الدم ليعود وينشط نفس العضو لإفراز عصارته.",
                      "hintEn": "Gastrin is a classic example of an organ secreting a hormone that circles back to stimulate the same organ.",
                      "hintAr": "الجاسترين مثال فريد لعضو يفرز هرموناً في الدم ليعود وينشط نفس العضو لإفراز عصارته."
                },
                {
                      "id": "th_bio_ch2_se_10",
                      "titleEn": "Example 10: Went Auxin Block Diffusion Experiment",
                      "titleAr": "مثال محلول ١٠: تجربة وينت لقياس تركيز الأوكسين بكتل الأجار",
                      "difficulty": "hots",
                      "questionEn": "Frits Went placed decapitated oat coleoptile tips exposed to unilateral light on two separated agar blocks (A on the shaded side, B on the lit side). When placed on decapitated seedlings in darkness, block A caused a 27-degree curvature, while block B caused a 10-degree curvature. Analyze this result.",
                      "questionAr": "وضع فريتز وينت قمة نامية معرضة لضوء جانبي فوق كتلتين منفصلتين من الأجار (الكتلة A في الجانب المظلم، والكتلة B في الجانب المضيء)، ثم نقلهما لبادرات مقطوعة القمة في الظلام، فسببت الكتلة A انتحاءً بزاوية 27 درجة، والكتلة B انتحاءً بزاوية 10 درجات. حلل هذه النتيجة.",
                      "stepByStepSolutionEn": [
                            "1. Auxin diffuses laterally away from unilateral light across the apical meristem.",
                            "2. Block A accumulated approximately 65% of the total auxin, while block B accumulated approximately 35%.",
                            "3. When placed unilaterally on decapitated seedlings, auxin diffuses down that side, stimulating cell elongation relative to the untreated side.",
                            "4. The degree of curvature is directly proportional to auxin concentration: 27 degrees from block A confirms a much higher auxin content than the 10 degrees from block B.",
                            "5. This proved quantitatively that phototropism is caused by asymmetrical auxin distribution rather than auxin destruction."
                      ],
                      "stepByStepSolutionAr": [
                            "١. تهاجر الأوكسينات جانبياً بعيداً عن مصدر الضوء في القمة النامية للبادرة.",
                            "٢. جمعت الكتلة A في الجانب المظلم حوالي 65% من الأوكسينات، بينما جمعت الكتلة B في الجانب المضيء حوالي 35%.",
                            "٣. عند وضع كتل الأجار على أحد جانبي بادرة مقطوعة القمة، ينتشر الأوكسين مسبباً استطالة خلايا هذا الجانب بدرجة تفوق الجانب الآخر.",
                            "٤. تتناسب زاوية الانحناء طردياً مع كمية الأوكسين: الزاوية الكبيرة (27 درجة) للكتلة A تثبت زيادة تركيز الأوكسين بالجانب المظلم.",
                            "٥. أثبتت التجربة رياضياً أن الانتحاء الضوئي ينشأ عن عدم تجانس توزيع الأوكسينات وليس تحللها بالضوء."
                      ],
                      "teacherTipEn": "Higher auxin in plant stems stimulates elongation; in roots, high auxin inhibits elongation.",
                      "teacherTipAr": "تذكر: زيادة تركيز الأوكسين في الساق تحفز الاستطالة؛ بينما في الجذر تؤدي لتعطيل الاستطالة.",
                      "hintEn": "Higher auxin in plant stems stimulates elongation; in roots, high auxin inhibits elongation.",
                      "hintAr": "تذكر: زيادة تركيز الأوكسين في الساق تحفز الاستطالة؛ بينما في الجذر تؤدي لتعطيل الاستطالة."
                }
          ],
          "exerciseProblems": [
                {
                      "id": "th_bio_ch2_ex_01",
                      "titleEn": "Exercise 1: Acromegaly Bone Changes",
                      "titleAr": "تمرين ١: التغيرات الهيكلية في مرض الأكروميجالي",
                      "difficulty": "easy",
                      "questionEn": "Which skeletal symptom is characteristic of acromegaly caused by growth hormone hypersecretion in adults?",
                      "questionAr": "أي من الأعراض الهيكلية التالية يعتبر مميزاً لمرض الأكروميجالي الناتج عن زيادة إفراز هرمون النمو في البالغين؟",
                      "optionsEn": [
                            "Enlargement of facial bones and renewal of growth in distal parts of extremities (hands and feet)",
                            "Proportional elongation of the entire vertebral column and long bones of legs",
                            "Severe dwarfism and failure of sexual maturity",
                            "Softening of bones due to extreme loss of calcium salts"
                      ],
                      "optionsAr": [
                            "تضخم عظام الوجه وتجدد نمو الأجزاء البعيدة في الأطراف كالأيدي والأقدام",
                            "استطالة متناسقة في كامل العمود الفقري وعظام الساقين الطويلة",
                            "قزامة شديدة وتوقف تام في النضج الجنسي",
                            "لين العظام نتيجة الفقدان الحاد لأملاح الكالسيوم"
                      ],
                      "correctAnswer": "Enlargement of facial bones and renewal of growth in distal parts of extremities (hands and feet)",
                      "correctIndex": 0,
                      "hintEn": "In adults, growth plates are fused, so vertical height cannot increase.",
                      "hintAr": "في البالغين تلتحم أقراص النمو العظمية، فلا يمكن استطالة العظام طولياً بل تنمو أطرافها عرضياً.",
                      "stepByStepSolutionEn": [
                            "In adults, epiphyseal growth plates have already closed and fused.",
                            "Excess growth hormone stimulates periosteal appositional growth, enlarging the acral bones (hands, feet, mandible, and skull)."
                      ],
                      "stepByStepSolutionAr": [
                            "في البالغين تلتحم أقراص النمو العظمية بصفة نهائية.",
                            "تؤدي زيادة هرمون النمو إلى تجدد نمو الأجزاء البعيدة لعظام الأطراف كالأيدي والأقدام وتضخم عظام الفك والوجه."
                      ],
                      "teacherTipEn": "Gigantism occurs in children; Acromegaly occurs in adults.",
                      "teacherTipAr": "العملاقة في الأطفال قبل التحام العظام؛ والأكروميجالي في البالغين بعد التحامها."
                },
                {
                      "id": "th_bio_ch2_ex_02",
                      "titleEn": "Exercise 2: Action of Aldosterone on Kidney Nephrons",
                      "titleAr": "تمرين ٢: تأثير هرمون الألدوستيرون على النفرونات",
                      "difficulty": "medium",
                      "questionEn": "What is the primary physiological effect of aldosterone secreted by the adrenal cortex?",
                      "questionAr": "ما التأثير الفسيولوجي الأساسي لهرمون الألدوستيرون المفرز من قشرة الغدة الكظرية؟",
                      "optionsEn": [
                            "Reabsorption of sodium ions and excretion of excess potassium ions by renal tubules",
                            "Rapid breakdown of liver glycogen into free blood glucose",
                            "Direct lowering of blood pressure by dilating systemic arteries",
                            "Stimulation of calcium deposition into bone mineral matrix"
                      ],
                      "optionsAr": [
                            "إعادة امتصاص أيونات الصوديوم والتخلص من البوتاسيوم الزائد عبر الكليتين",
                            "تحلل جليكوجين الكبد السريع إلى جلوكوز حر في مجرى الدم",
                            "خفض ضغط الدم المباشر عبر توسيع الشرايين الطرفية",
                            "تحفيز ترسيب الكالسيوم في مصفوفة العظام"
                      ],
                      "correctAnswer": "Reabsorption of sodium ions and excretion of excess potassium ions by renal tubules",
                      "correctIndex": 0,
                      "hintEn": "Aldosterone is a mineralocorticoid regulating electrolytes.",
                      "hintAr": "الألدوستيرون هرمون معدني ينظم نسب أملاح الصوديوم والبوتاسيوم في الدم.",
                      "stepByStepSolutionEn": [
                            "Aldosterone acts on the distal convoluted tubules and collecting ducts.",
                            "It promotes active reabsorption of Na+ back into the blood and excretion of K+ into the urine."
                      ],
                      "stepByStepSolutionAr": [
                            "يعمل الألدوستيرون على الأنابيب الكلوية في النفرونات.",
                            "يحفز استعادة أيونات الصوديوم للدم والتخلص من أيونات البوتاسيوم الزائدة مع البول."
                      ],
                      "teacherTipEn": "Aldosterone saves Na+ and disposes of K+.",
                      "teacherTipAr": "احفظها دائماً: الألدوستيرون يحفظ الصوديوم ويطرد البوتاسيوم."
                },
                {
                      "id": "th_bio_ch2_ex_03",
                      "titleEn": "Exercise 3: Calcitonin Site of Secretion",
                      "titleAr": "تمرين ٣: الغدة المفرزة لهرمون الكالسيتونين",
                      "difficulty": "easy",
                      "questionEn": "Which endocrine gland secretes the hormone calcitonin to reduce blood calcium concentration?",
                      "questionAr": "أي الغدد الصماء التالية تفرز هرمون الكالسيتونين المسؤول عن تقليل نسبة الكالسيوم بالدم؟",
                      "optionsEn": [
                            "The Parathyroid glands",
                            "The Thyroid gland",
                            "The Adrenal medulla",
                            "The Islets of Langerhans"
                      ],
                      "optionsAr": [
                            "الغدد جارات الدرقية",
                            "الغدة الدرقية",
                            "نخاع الغدة الكظرية",
                            "جزر لانجرهانز بالبنكرياس"
                      ],
                      "correctAnswer": "The Thyroid gland",
                      "correctIndex": 1,
                      "hintEn": "It is secreted by the same gland that produces thyroxine.",
                      "hintAr": "تفرزه نفس الغدة الحويصلية المسؤولة عن إفراز هرمون الثيروكسين.",
                      "stepByStepSolutionEn": [
                            "The thyroid gland secretes two distinct hormones: Thyroxine and Calcitonin.",
                            "Calcitonin acts to decrease blood calcium by preventing its withdrawal from bone."
                      ],
                      "stepByStepSolutionAr": [
                            "تفرز الغدة الدرقية هرمونين رئيسيين هما: الثيروكسين والكالسيتونين.",
                            "يعمل الكالسيتونين على تقليل نسبة الكالسيوم في الدم ومنع سحبه من العظام."
                      ],
                      "teacherTipEn": "Parathyroid secretes Parathormone; Thyroid secretes Calcitonin.",
                      "teacherTipAr": "جارات الدرقية تفرز الباراثورمون؛ والدرقية تفرز الكالسيتونين والثيروكسين."
                },
                {
                      "id": "th_bio_ch2_ex_04",
                      "titleEn": "Exercise 4: Monosaccharide Uptake Independent of Insulin",
                      "titleAr": "تمرين ٤: السكر الأحادي المستقل عن هرمون الإنسولين",
                      "difficulty": "medium",
                      "questionEn": "Which monosaccharide passes across plasma membranes into cells without requiring insulin assistance?",
                      "questionAr": "أي السكريات الأحادية التالية يمر عبر الأغشية البلازمية إلى داخل الخلايا دون الحاجة لهرمون الإنسولين؟",
                      "optionsEn": [
                            "Glucose",
                            "Galactose",
                            "Fructose",
                            "Ribose"
                      ],
                      "optionsAr": [
                            "الجلوكوز",
                            "الجالاكتوز",
                            "الفركتوز",
                            "الريبوز"
                      ],
                      "correctAnswer": "Fructose",
                      "correctIndex": 2,
                      "hintEn": "It is commonly known as fruit sugar.",
                      "hintAr": "هو السكر الأحادي المميز والمعروف بسكر الفاكهة.",
                      "stepByStepSolutionEn": [
                            "Insulin is required for the cellular entry and oxidation of all monosaccharides except fructose.",
                            "Fructose is absorbed and utilized by cells independently of insulin."
                      ],
                      "stepByStepSolutionAr": [
                            "يحث الإنسولين على مرور كافة السكريات الأحادية لأكسدتها ما عدا سكر الفركتوز.",
                            "يمر الفركتوز إلى داخل الخلايا ويُمتص دون الحاجة لمساعدة الإنسولين."
                      ],
                      "teacherTipEn": "A favorite exam question: Fructose enters cells without insulin.",
                      "teacherTipAr": "سؤال امتحاني شهير: سكر الفركتوز يعبر إلى الخلايا بدون الحاجة للإنسولين."
                },
                {
                      "id": "th_bio_ch2_ex_05",
                      "titleEn": "Exercise 5: Target Tissue of the Hormone Glucagon",
                      "titleAr": "تمرين ٥: العضو المستهدف لهرمون الجلوكاجون",
                      "difficulty": "medium",
                      "questionEn": "Where does the pancreatic hormone glucagon act to stimulate glycogen breakdown into glucose?",
                      "questionAr": "أين يعمل هرمون الجلوكاجون المفرز من خلايا ألفا بالبنكرياس لتحفيز تحلل الجليكوجين إلى جلوكوز؟",
                      "optionsEn": [
                            "In skeletal muscle cells only",
                            "In both skeletal muscle and liver cells",
                            "In liver cells only",
                            "In kidney nephron tubules"
                      ],
                      "optionsAr": [
                            "في خلايا العضلات الهيكلية فقط",
                            "في خلايا الكبد والعضلات الهيكلية معاً",
                            "في خلايا الكبد فقط",
                            "في أنابيب نفرونات الكلى"
                      ],
                      "correctAnswer": "In liver cells only",
                      "correctIndex": 2,
                      "hintEn": "Adrenaline acts on both liver and muscle, but glucagon acts on only one organ.",
                      "hintAr": "الأدرينالين يحلل جليكوجين الكبد والعضلات؛ بينما الجلوكاجون يقتصر عمله على عضو واحد.",
                      "stepByStepSolutionEn": [
                            "Glucagon acts strictly on the liver to convert hepatic glycogen into free glucose.",
                            "It has no receptor effect on muscle glycogen breakdown (which is stimulated by adrenaline)."
                      ],
                      "stepByStepSolutionAr": [
                            "يعمل هرمون الجلوكاجون على الكبد فقط لتحويل الجليكوجين المخزن به إلى جلوكوز بالدم.",
                            "لا يؤثر الجلوكاجون على جليكوجين العضلات (الذي يتحلل بتأثير الأدرينالين أثناء النشاط العضلي)."
                      ],
                      "teacherTipEn": "Glucagon converts Liver glycogen only; Adrenaline converts Liver AND Muscle glycogen.",
                      "teacherTipAr": "الجلوكاجون يحول جليكوجين الكبد فقط؛ بينما الأدرينالين يحول جليكوجين الكبد والعضلات."
                },
                {
                      "id": "th_bio_ch2_ex_06",
                      "titleEn": "Exercise 6: Hormone Stimulating Milk Secretion vs Ejection",
                      "titleAr": "تمرين ٦: هرمون إفراز الحليب مقابل هرمون اندفاع الحليب",
                      "difficulty": "medium",
                      "questionEn": "Which pair of hormones correctly matches the hormone responsible for milk formation with that responsible for milk ejection?",
                      "questionAr": "أي من أزواج الهرمونات التالية يطابق بدقة الهرمون المسؤول عن تكوين الحليب مع الهرمون المسؤول عن اندفاعه؟",
                      "optionsEn": [
                            "Formation: Prolactin; Ejection: Oxytocin",
                            "Formation: Oxytocin; Ejection: Prolactin",
                            "Formation: Estrogen; Ejection: Progesterone",
                            "Formation: Prolactin; Ejection: Progesterone"
                      ],
                      "optionsAr": [
                            "تكوين الحليب: البرولاكتين؛ اندفاع الحليب: الأوكسيتوسين",
                            "تكوين الحليب: الأوكسيتوسين؛ اندفاع الحليب: البرولاكتين",
                            "تكوين الحليب: الإستروجين؛ اندفاع الحليب: البروجسترون",
                            "تكوين الحليب: البرولاكتين؛ اندفاع الحليب: البروجسترون"
                      ],
                      "correctAnswer": "Formation: Prolactin; Ejection: Oxytocin",
                      "correctIndex": 0,
                      "hintEn": "Prolactin is from the anterior pituitary; Oxytocin is from the posterior pituitary.",
                      "hintAr": "البرولاكتين يُفرز من الفص الأمامي للنخامية؛ والأوكسيتوسين يُحرر من الفص الخلفي.",
                      "stepByStepSolutionEn": [
                            "Prolactin (anterior pituitary) stimulates the mammary gland acini to produce and secrete milk.",
                            "Oxytocin (posterior pituitary) stimulates the contraction of myoepithelial cells around mammary alveoli to eject milk."
                      ],
                      "stepByStepSolutionAr": [
                            "هرمون البرولاكتين (من الفص الأمامي للنخامية) يعمل على بناء وإفراز الحليب في الغدد الثديية.",
                            "هرمون الأوكسيتوسين (من الفص الخلفي) ينبه انقباض عضلات القنوات اللبنية لاندفاع ونزول الحليب استجابة للرضاعة."
                      ],
                      "teacherTipEn": "Prolactin = Producer of milk; Oxytocin = Outflow of milk.",
                      "teacherTipAr": "البرولاكتين = بناء وتكوين الحليب؛ والأوكسيتوسين = نزول واندفاع الحليب."
                },
                {
                      "id": "th_bio_ch2_ex_07",
                      "titleEn": "Exercise 7: Consequence of Simple Goitre",
                      "titleAr": "تمرين ٧: الأثر الأولي لنقص اليود في الغذاء",
                      "difficulty": "easy",
                      "questionEn": "What is the initial cause of simple goitre (endemic goitre)?",
                      "questionAr": "ما السبب الأولي لحدوث الجويتر البسيط (التضخم البسيط)؟",
                      "optionsEn": [
                            "Excessive dietary intake of mineral salts",
                            "Deficiency of iodine in food, water, and air",
                            "Hypersecretion of parathormone by parathyroid glands",
                            "Bacterial infection of the adrenal cortex"
                      ],
                      "optionsAr": [
                            "الإفراط الشديد في تناول الأملاح المعدنية في الغذاء",
                            "نقص عنصر اليود في الغذاء والماء والهواء",
                            "فرط إفراز هرمون الباراثورمون من جارات الدرقية",
                            "عدوى بكتيرية حادة في قشرة الغدة الكظرية"
                      ],
                      "correctAnswer": "Deficiency of iodine in food, water, and air",
                      "correctIndex": 1,
                      "hintEn": "Iodine is an essential building block of thyroxine.",
                      "hintAr": "اليود عنصر كيميائي يدخل في التركيب البنائي لهرمون الثيروكسين.",
                      "stepByStepSolutionEn": [
                            "Thyroxine requires iodine for biosynthesis.",
                            "Iodine deficiency reduces thyroxine production, triggering pituitary TSH elevation that causes compensatory thyroid hypertrophy (simple goitre)."
                      ],
                      "stepByStepSolutionAr": [
                            "يدخل اليود في تركيب هرمون الثيروكسين.",
                            "يؤدي نقص اليود في الغذاء والماء إلى نقص إفراز الثيروكسين وتضخم الغدة الدرقية كاستجابة تعويضية."
                      ],
                      "teacherTipEn": "Adding iodine to table salt effectively prevents simple goitre.",
                      "teacherTipAr": "إضافة اليود إلى ملح الطعام من أهم الوسائل الطبية للوقاية من الجويتر البسيط."
                },
                {
                      "id": "th_bio_ch2_ex_08",
                      "titleEn": "Exercise 8: Source of the Hormone Relaxin",
                      "titleAr": "تمرين ٨: الأنسجة المفرزة لهرمون الريلاكسين",
                      "difficulty": "medium",
                      "questionEn": "Which set of tissues produces the hormone relaxin during pregnancy?",
                      "questionAr": "أي من الأنسجة التالية يشارك في إفراز هرمون الريلاكسين أثناء فترة الحمل؟",
                      "optionsEn": [
                            "Corpus luteum, Endometrium of uterus, and Placenta",
                            "Anterior pituitary, Posterior pituitary, and Hypothalamus",
                            "Adrenal cortex, Adrenal medulla, and Thyroid",
                            "Graafian follicle and interstitial testicular cells"
                      ],
                      "optionsAr": [
                            "الجسم الأصفر، وبطانة الرحم، والمشيمة",
                            "الفص الأمامي للنخامية، والفص الخلفي، والهايبوثلاموس",
                            "قشرة الكظر، ونخاع الكظر، والغدة الدرقية",
                            "حويصلة جراف والخلايا البينية في الخصية"
                      ],
                      "correctAnswer": "Corpus luteum, Endometrium of uterus, and Placenta",
                      "correctIndex": 0,
                      "hintEn": "It relaxes the pubic symphysis to widen the birth canal.",
                      "hintAr": "يرخي الارتفاق العاني ويزداد إفرازه في نهاية الحمل من أعضاء الحمل.",
                      "stepByStepSolutionEn": [
                            "Relaxin is secreted by the corpus luteum in the ovary.",
                            "It is also secreted by the uterine endometrium and the placenta in increasing amounts toward the end of pregnancy."
                      ],
                      "stepByStepSolutionAr": [
                            "يُفرز هرمون الريلاكسين من الجسم الأصفر في المبيض.",
                            "كما يُفرز أيضاً من بطانة الرحم والمشيمة، ويزداد إفرازه عند نهاية الحمل لتسهيل الولادة."
                      ],
                      "teacherTipEn": "Relaxin is produced by three reproductive tissues: Corpus luteum, Uterine lining, and Placenta.",
                      "teacherTipAr": "ثلاثة مصادر لهرمون الريلاكسين: الجسم الأصفر، بطانة الرحم، والمشيمة."
                },
                {
                      "id": "th_bio_ch2_ex_09",
                      "titleEn": "Exercise 9: Secretin and CCK Target Organ",
                      "titleAr": "تمرين ٩: العضو المستهدف لهرموني السيكرتين والكوليسيستوكينين",
                      "difficulty": "easy",
                      "questionEn": "Which digestive organ is stimulated to release its alkaline digestive juice by secretin and cholecystokinin?",
                      "questionAr": "أي الأعضاء الهضمية التالية يتم تنشيطه لإفراز عصارته القلوية الهاضمة بواسطة السيكرتين والكوليسيستوكينين؟",
                      "optionsEn": [
                            "The Stomach",
                            "The Pancreas",
                            "The Spleen",
                            "The Large intestine"
                      ],
                      "optionsAr": [
                            "المعدة",
                            "البنكرياس",
                            "الطحال",
                            "الأمعاء الغليظة"
                      ],
                      "correctAnswer": "The Pancreas",
                      "correctIndex": 1,
                      "hintEn": "Discovered by Starling in 1905.",
                      "hintAr": "اكتشف تأثيرهما العالم ستارلنج عام 1905 على الإفراز القنوي.",
                      "stepByStepSolutionEn": [
                            "When chyme enters the duodenum, duodenal mucosa secretes secretin and CCK into the blood.",
                            "They stimulate the exocrine acinar cells of the pancreas to secrete pancreatic juice."
                      ],
                      "stepByStepSolutionAr": [
                            "عند وصول الغذاء للاثني عشر، يفرز غشاؤه المخاطي هرموني السيكرتين والكوليسيستوكينين في الدم.",
                            "ينتقل الهرمونان للبنكرياس ويحثان خلاياه الحويصلية على إفراز العصارة البنكرياسية."
                      ],
                      "teacherTipEn": "Starling proved that the pancreas responds to chemical hormones even after cutting nerve connections.",
                      "teacherTipAr": "أثبت ستارلنج أن البنكرياس يفرز عصارته الهاضمة بتنبيه هرموني حتى بعد قطع اتصاله العصبي."
                },
                {
                      "id": "th_bio_ch2_ex_10",
                      "titleEn": "Exercise 10: Adrenaline Action on Cardiac Muscle",
                      "titleAr": "تمرين ١٠: تأثير الأدرينالين على الجهاز الدوري",
                      "difficulty": "medium",
                      "questionEn": "What combined cardiovascular changes are triggered by adrenaline during emergency situations?",
                      "questionAr": "ما التغيرات الدورانية والقلبية المشتركة التي يطلقها هرمون الأدرينالين أثناء مواجهة الخطر المفاجئ؟",
                      "optionsEn": [
                            "Decreased heart rate and profound hypotension",
                            "Increased rate and force of heart contractions and elevated blood pressure",
                            "Constriction of coronary arteries and cessation of breathing",
                            "Rapid removal of glucose from skeletal muscle fibers"
                      ],
                      "optionsAr": [
                            "هبوط معدل نبضات القلب وانخفاض حاد في ضغط الدم",
                            "زيادة قوة وسرعة انقباض القلب وارتفاع ضغط الدم الشرياني",
                            "تضيق الشرايين التاجية وتوقف حركات التنفس",
                            "السحب السريع لجزيئات الجلوكوز من ألياف العضلات"
                      ],
                      "correctAnswer": "Increased rate and force of heart contractions and elevated blood pressure",
                      "correctIndex": 1,
                      "hintEn": "Adrenaline acts to maximize blood and oxygen pumping to vital organs.",
                      "hintAr": "يهدف الأدرينالين لضخ أقصى كمية من الدم المحمل بالأكسجين للعضلات والمخ.",
                      "stepByStepSolutionEn": [
                            "Adrenaline acts on beta-1 adrenergic receptors in the heart to increase rate and contractility.",
                            "It causes vasoconstriction in skin and viscera, redirecting blood to skeletal muscle and elevating arterial pressure."
                      ],
                      "stepByStepSolutionAr": [
                            "ينبه الأدرينالين عضلة القلب، مما يرفع سرعة وقوة ضربات القلب.",
                            "يحدث انقباضاً في أوعية الجلد والأحشاء ويوجه الدم للعضلات الهيكلية رافعاً ضغط الدم."
                      ],
                      "teacherTipEn": "Adrenaline prepares the body for fight or flight.",
                      "teacherTipAr": "الأدرينالين هو هرمون النجدة والقتال أو الهروب."
                },
                {
                      "id": "th_bio_ch2_ex_11",
                      "titleEn": "Exercise 11: Endocrine Origin of Testosterone",
                      "titleAr": "تمرين ١١: خلايا إفراز هرمون التستوستيرون",
                      "difficulty": "easy",
                      "questionEn": "Which specific cellular structures inside the testes synthesize and secrete testosterone?",
                      "questionAr": "أي التراكيب الخلوية النوعية داخل الخصية تقوم بتخليق وإفراز هرمون التستوستيرون؟",
                      "optionsEn": [
                            "Sertoli cells inside seminiferous tubules",
                            "Spermatogonia cells undergoing meiosis",
                            "Interstitial cells (Leydig cells) stimulated by LH",
                            "The tunica albuginea fibrous capsule"
                      ],
                      "optionsAr": [
                            "خلايا سرتولي داخل الأنيبيبات المنوية",
                            "أمهات المني أثناء انقسامها الميوزي",
                            "الخلايا البينية (خلايا ليدج) بتنبيه من هرمون LH",
                            "الغلالة البيضاء المحيطة بالخصية"
                      ],
                      "correctAnswer": "Interstitial cells (Leydig cells) stimulated by LH",
                      "correctIndex": 2,
                      "hintEn": "LH from the pituitary gland stimulates their development and secretion.",
                      "hintAr": "يحفز تكوينها وإفرازها الهرمون المنبه لتكوين الجسم الأصفر LH المفرز من النخامية.",
                      "stepByStepSolutionEn": [
                            "The interstitial cells situated between seminiferous tubules secrete male androgens (testosterone and androsterone).",
                            "Their secretion is under direct control of pituitary luteinizing hormone (LH)."
                      ],
                      "stepByStepSolutionAr": [
                            "تقع الخلايا البينية بين الأنيبيبات المنوية في الخصية وتفرز هرموني التستوستيرون والأندروستيرون.",
                            "يتحكم في نموها وإفرازها هرمون LH المفرز من الفص الأمامي للغدة النخامية."
                      ],
                      "teacherTipEn": "FSH forms seminiferous tubules and sperm; LH forms interstitial cells and testosterone.",
                      "teacherTipAr": "FSH يكون الأنيبيبات المنوية والحيوانات المنوية؛ و LH يكون الخلايا البينية والتستوستيرون."
                },
                {
                      "id": "th_bio_ch2_ex_12",
                      "titleEn": "Exercise 12: Pituitary Neurosecretory Cell Connections",
                      "titleAr": "تمرين ١٢: اتصال الخلايا العصبية المفرزة بالنخامية",
                      "difficulty": "medium",
                      "questionEn": "Where are the cell bodies of the neurosecretory neurons whose axon terminals release ADH and oxytocin located?",
                      "questionAr": "أين تقع أجسام الخلايا العصبية المفرزة التي تنتهي محاورها في الفص الخلفي للنخامية؟",
                      "optionsEn": [
                            "In the cerebral cortex grey matter",
                            "In the hypothalamus of the brain",
                            "In the medulla oblongata",
                            "In the anterior pituitary pars distalis"
                      ],
                      "optionsAr": [
                            "في المادة الرمادية للقشرة المخية",
                            "في منطقة تحت المهاد (الهايبوثلاموس)",
                            "في النخاع المستطيل",
                            "في الفص الأمامي للغدة النخامية"
                      ],
                      "correctAnswer": "In the hypothalamus of the brain",
                      "correctIndex": 1,
                      "hintEn": "This brain region forms the master link between the nervous and endocrine systems.",
                      "hintAr": "المنطقة المخية التي تشكل همزة الوصل بين الجهاز العصبي وجهاز الغدد الصماء.",
                      "stepByStepSolutionEn": [
                            "Neurosecretory cell bodies reside in the supraoptic and paraventricular nuclei of the hypothalamus.",
                            "Their axons project downward through the pituitary stalk into the posterior lobe."
                      ],
                      "stepByStepSolutionAr": [
                            "تقع أجسام الخلايا العصبية المفرزة في منطقة تحت المهاد (الهايبوثلاموس) بالمخ.",
                            "تمتد محاورها عبر القمع أو العنق العصبي لتنتهي في الفص الخلفي للغدة النخامية."
                      ],
                      "teacherTipEn": "The neurohypophysis is an extension of the hypothalamus.",
                      "teacherTipAr": "الفص الخلفي للنخامية هو امتداد عصبي تركيبي لمنطقة تحت المهاد."
                },
                {
                      "id": "th_bio_ch2_ex_13",
                      "titleEn": "Exercise 13: Auxin Distribution in Negative Geotropism of the Stem",
                      "titleAr": "تمرين ١٣: توزيع الأوكسين في الانتحاء الأرضي السالب للساق",
                      "difficulty": "hots",
                      "questionEn": "When a plant seedling is placed horizontally, why does the stem bend upward away from gravity (negative geotropism)?",
                      "questionAr": "عند وضع بادرة نبات في وضع أفقي، لماذا ينحني الساق لأعلى بعيداً عن الجاذبية (انتحاء أرضي سالب)؟",
                      "optionsEn": [
                            "Auxins accumulate on the upper side, inhibiting its growth",
                            "Auxins accumulate on the lower side, stimulating faster elongation of lower cells",
                            "Auxins are completely destroyed by gravity on both sides",
                            "The lower side cells divide meiotically to push the stem upward"
                      ],
                      "optionsAr": [
                            "تتراكم الأوكسينات في الجانب العلوي معطلة نموه",
                            "تتراكم الأوكسينات في الجانب السفلي بفعل الجاذبية فتحفز استطالة خلاياه بمعدل أكبر",
                            "تتحلل الأوكسينات تماماً بالجاذبية في كلا الجانبين",
                            "تنقسم خلايا الجانب السفلي ميوزياً لتدفع الساق لأعلى"
                      ],
                      "correctAnswer": "Auxins accumulate on the lower side, stimulating faster elongation of lower cells",
                      "correctIndex": 1,
                      "hintEn": "In stems, higher auxin stimulates elongation.",
                      "hintAr": "في الساق تؤدي زيادة تركيز الأوكسين إلى زيادة وتنشيط استطالة الخلايا.",
                      "stepByStepSolutionEn": [
                            "Gravity pulls auxins to the lower side of the horizontal stem.",
                            "In stems, increased auxin concentration stimulates cellular elongation.",
                            "The lower side elongates faster than the upper side, causing the stem to curve upward."
                      ],
                      "stepByStepSolutionAr": [
                            "تتجمع الأوكسينات بفعل الجاذبية الأرضية في الجانب السفلي للساق الأفقي.",
                            "في الساق، يؤدي التركيز العالي للأوكسينات إلى تنشيط استطالة الخلايا بدرجة أكبر من الجانب العلوي.",
                            "يستطيل الجانب السفلي بمعدل أكبر فينحني الساق لأعلى ضد الجاذبية الأرضية."
                      ],
                      "teacherTipEn": "Stems are negatively geotropic; Roots are positively geotropic (high auxin inhibits root cells).",
                      "teacherTipAr": "الساق سالب الانتحاء الأرضي؛ بينما الجذر موجب الانتحاء الأرضي (الأوكسين العالي يثبط خلايا الجذر)."
                },
                {
                      "id": "th_bio_ch2_ex_14",
                      "titleEn": "Exercise 14: Physiological Disturbance in Diabetes Mellitus",
                      "titleAr": "تمرين ١٤: الاضطراب الأيضي في مرض البول السكري",
                      "difficulty": "medium",
                      "questionEn": "Why does a diabetic patient with insulin deficiency suffer from frequent urination (polyuria) and extreme thirst (polydipsia)?",
                      "questionAr": "علل: يعاني مريض البول السكري غير المعالج من ظاهرتي تعدد التبول والعطش المستمر.",
                      "optionsEn": [
                            "Hyperglycemia exceeds renal tubular threshold; glucose excreted in urine draws water osmotically, causing dehydration",
                            "Insulin deficiency directly blocks water reabsorption in the stomach wall",
                            "Excess insulin dissolves nephron glomeruli, leading to uncontrollable water loss",
                            "Excess glucagon freezes urine inside the bladder, causing pain"
                      ],
                      "optionsAr": [
                            "تجاوز الجلوكوز قدرة الكلية على إعادة الامتصاص فيخرج في البول ساحباً الماء وراءه بالأسموزية",
                            "نقص الإنسولين يعطل امتصاص الماء في جدار المعدة مباشرة",
                            "زيادة الإنسولين تذيب كبيبات الكلى مسببة فقداناً غير منضبط للماء",
                            "زيادة الجلوكاجون تجمد البول داخل المثانة"
                      ],
                      "correctAnswer": "Hyperglycemia exceeds renal tubular threshold; glucose excreted in urine draws water osmotically, causing dehydration",
                      "correctIndex": 0,
                      "hintEn": "Glucose in urine exerts osmotic pull on water.",
                      "hintAr": "خروج الجلوكوز مع البول يصحبه خروج كميات كبيرة من الماء بالخاصية الأسموزية.",
                      "stepByStepSolutionEn": [
                            "Insulin deficiency elevates blood glucose beyond the renal threshold (~180 mg/dL).",
                            "Excess glucose spills into urine, creating an osmotic diuretic gradient that draws water, resulting in polyuria.",
                            "The resulting cellular and vascular dehydration stimulates hypothalamic thirst centers, leading to polydipsia."
                      ],
                      "stepByStepSolutionAr": [
                            "يؤدي نقص الإنسولين إلى ارتفاع حاد في جلوكوز الدم متجاوزاً عتبة الكلى.",
                            "يفرز الجلوكوز في البول ويسحب معه كميات كبيرة من الماء بالخاصية الأسموزية مسبباً تعدد التبول.",
                            "فقدان الماء المستمر يسبب جفافاً يستحث مركز العطش في الهايبوثلاموس مسبباً العطش المستمر."
                      ],
                      "teacherTipEn": "Osmotic diuresis is the clinical term for glucose pulling water into urine.",
                      "teacherTipAr": "الإدرار الأسموزي هو السبب في تعدد التبول في مرضى السكري."
                },
                {
                      "id": "th_bio_ch2_ex_15",
                      "titleEn": "Exercise 15: Hormonal Feedback in Thyroid Control",
                      "titleAr": "تمرين ١٥: التغذية الراجعة السلبية في تنظيم هرمونات الدرقية",
                      "difficulty": "hots",
                      "questionEn": "What would be the expected blood levels of TSH and Thyroxine in a patient whose anterior pituitary has suffered a destructive tumor destroying its secretory cells?",
                      "questionAr": "ما المستويات المتوقعة في دم مريض أصيب بورم مدمر لخلايا الفص الأمامي للغدة النخامية لكل من TSH والثيروكسين؟",
                      "optionsEn": [
                            "Low TSH and Low Thyroxine",
                            "High TSH and High Thyroxine",
                            "High TSH and Low Thyroxine",
                            "Low TSH and High Thyroxine"
                      ],
                      "optionsAr": [
                            "انخفاض TSH وانخفاض الثيروكسين",
                            "ارتفاع TSH وارتفاع الثيروكسين",
                            "ارتفاع TSH وانخفاض الثيروكسين",
                            "انخفاض TSH وارتفاع الثيروكسين"
                      ],
                      "correctAnswer": "Low TSH and Low Thyroxine",
                      "correctIndex": 0,
                      "hintEn": "The pituitary makes TSH, which is required to stimulate the thyroid to make thyroxine.",
                      "hintAr": "النخامية تصنع TSH؛ وبدونه لا تتلقى الدرقية التنبيه اللازم لتصنيع الثيروكسين.",
                      "stepByStepSolutionEn": [
                            "Destruction of the anterior pituitary abolishes TSH production.",
                            "Without TSH stimulation, the normal thyroid gland lacks the signal to synthesize and secrete thyroxine.",
                            "Consequently, both TSH and Thyroxine concentrations fall below normal levels (secondary hypothyroidism)."
                      ],
                      "stepByStepSolutionAr": [
                            "تدمير الفص الأمامي للنخامية يوقف تصنيع وإفراز هرمون TSH المنبه للدرقية.",
                            "في غياب تنبيه TSH، يتوقف نسيج الغدة الدرقية السليم عن إفراز هرمون الثيروكسين.",
                            "النتيجة: انخفاض مستوى كل من هرمون TSH وهرمون الثيروكسين في دم المريض."
                      ],
                      "teacherTipEn": "Distinguish primary thyroid failure (High TSH, Low Thyroxine) from secondary pituitary failure (Low TSH, Low Thyroxine).",
                      "teacherTipAr": "مهم جداً: خلل الدرقية الأولي (TSH مرتفع والثيروكسين منخفض)؛ خلل النخامية الثانوي (TSH منخفض والثيروكسين منخفض)."
                }
          ],
          "databank": bioCh2Databank
        },
    {
          "id": "th_bio_ch3",
          "chapterNumber": 3,
          "titleEn": "Reproduction in Living Organisms",
          "titleAr": "التكاثر في الكائنات الحية",
          "descriptionEn": "Comprehensive study of asexual and sexual reproduction modes, alternation of generations (Plasmodium malariae and Polypodium fern life cycles), reproduction in flowering plants (microsporogenesis, megasporogenesis, double fertilization, seed and fruit development), and human reproduction (gametogenesis, menstrual cycle hormonal surges, embryonic development, and reproductive technologies).",
          "descriptionAr": "دراسة شاملة لصور التكاثر اللاجنسي والجنسي، تعاقب الأجيال (دورة حياة بلازموديوم الملاريا وسرخس الفوجير)، التكاثر في النباتات الزهرية (تكوين حبوب اللقاح والبويضات، الإخصاب المزدوج، تكوين الثمار والبذور)، والتكاثر في الإنسان (تكوين الأمشاج، دورة الطمث، الإخصاب والنمو الجنيني، وتطبيقات التكاثر الحديثة).",
          "isFullyEquipped": true,
          "lessons": [
                {
                      "id": "th_bio_ch3_l1",
                      "titleEn": "Asexual, Sexual Reproduction & Alternation of Generations",
                      "titleAr": "أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال",
                      "summaryEn": "Modalities of asexual reproduction (binary fission, budding, regeneration, sporogenesis, parthenogenesis, tissue culture), conjugation in Spirogyra, and alternation of generations in Plasmodium and Polypodium fern.",
                      "summaryAr": "صور التكاثر اللاجنسي (الانشطار الثنائي، التبرعم، التجدد، الجراثيم، التوالد البكري، زراعة الأنسجة)، الاقتران في الإسبيروجيرا، وتعاقب الأجيال في بلازموديوم الملاريا وسرخس الفوجير.",
                      "theoryContentEn": "### 1. Modes of Asexual Reproduction\n- **Binary Fission (الانشطار الثنائي):**\n  - Common in unicellular organisms (Amoeba, Paramecium, bacteria).\n  - Under unfavorable conditions, Amoeba secretes a protective **chitinous cyst** and divides repeatedly by multiple fission to release numerous amoebulae upon condition improvement.\n- **Budding (التبرعم):**\n  - In unicellular yeast and multicellular Hydra / sponges. Bud arises as a lateral outgrowth; nucleus divides mitotically, one daughter nucleus migrates into the bud. Bud may separate or remain to form a colony.\n- **Regeneration (التجدد):**\n  - Planaria flatworm (regenerates when cut transversely into segments or longitudinally into two halves).\n  - Hydra (regenerates if cut transversely into several pieces).\n  - Starfish (*Asterias*): An arm cut with part of the central disc regenerates into a complete individual.\n- **Sporogenesis (Spore Formation - التكاثر بالجراثيم):**\n  - Most primitive fungi (bread mold *Rhizopus*, mushrooms) and ferns. Spores are single cells protected by thick resistant walls with minimal cytoplasm, carrying immense dispersal capacity.\n- **Parthenogenesis (التوالد البكري):**\n  - Development of an unfertilized ovum into an embryo without fertilization:\n    - **Honeybees (*Apis mellifera*):** Queen lays unfertilized haploid ($n$) eggs that develop into fertile haploid **drones (males)**; fertilized diploid ($2n$) eggs develop into diploid **females (queens or sterile workers)**.\n    - **Aphids (*Aphis*):** In spring, unfertilized diploid ($2n$) eggs produced by mitosis develop into diploid females without fertilization; in autumn, eggs produced by meiosis are fertilized sexually.\n    - **Artificial Parthenogenesis:** Stimulating unfertilized sea urchin or frog eggs with thermal, osmotic, or mechanical shocks or electric shock causes chromosome doubling ($2n$) into adult females.\n- **Tissue Culture (زراعة الأنسجة):**\n  - Culturing plant somatic cells in a nutrient medium containing hormones (e.g., coconut milk) to regenerate complete plants (proven by Steward in carrot and tobacco).\n\n### 2. Alternation of Generations (ظاهرة تعاقب الأجيال)\n- Life cycle combines a sexual generation reproducing by gametes with an asexual generation reproducing by spores to achieve genetic diversity and rapid numerical propagation:\n- **Plasmodium malariae (Malaria parasite):**\n  1. Mosquito injects infective needle-shaped **sporozoites ($n$)** into human blood with saliva.\n  2. Sporozoites invade liver cells and undergo two asexual cycles of **schizogony** without pigment, producing **merozoites ($n$)**.\n  3. Merozoites invade red blood cells, undergoing multiple schizogony cycles every $48$ hours. Rupture of RBCs releases toxic hemozoin pigments, causing cyclical malaria attacks (high fever, chills, profuse sweating).\n  4. Some merozoites differentiate into **gametocytes ($n$)** in human blood.\n  5. Female *Anopheles* mosquito sucks blood containing gametocytes; in her stomach cavity, gametes fuse to form a diploid zygote ($2n$).\n  6. Zygote transforms into a motile worm-like **ookinete ($2n$)** that penetrates the stomach wall, undergoes **meiosis** to form a spherical **oocyst ($n$)**.\n  7. Oocyst divides asexually by **sporogony** to produce thousands of sporozoites ($n$) that migrate to mosquito salivary glands.\n- **Polypodium Fern (سرخس الفوجير):**\n  - Dominant leafy **sporophyte ($2n$)** produces sporangia on undersides of fronds (sori). Diploid spore mother cells undergo meiosis to produce haploid spores ($n$).\n  - Spore germinates into a heart-shaped subterranean **gametophyte (prothallus, $n$)** bearing rhizoids and sex organs:\n    - **Antheridia ($n$):** Release motile ciliated sperms.\n    - **Archegonia ($n$):** Flask-shaped organs each containing an egg ($n$).\n  - Water is mandatory for flagellated sperms to swim to archegonia to fertilize the egg, forming a zygote ($2n$) that grows into a new sporophyte relying temporarily on the gametophyte.\n",
                      "theoryContentAr": "### ١. صور التكاثر اللاجنسي\n- **الانشطار الثنائي:** شائع في البدائيات والطحالب البسيطة والأوليات الحيوانية كالأميبا والبراميسيوم. في الظروف غير المناسبة تفرز الأميبا غلافاً كيتينياً للحماية وتنقسم داخله بالانشطار الثنائي المتكرر وتتحرر عند تحسن الظروف.\n- **التبرعم:** في الخميرة والهيدرا والإسفنج؛ ينشأ البرعم كبروز جانبي، وتنقسم النواة ميتوزياً وتهاجر إحدى النواتين للبرعم الذي قد ينفصل أو يبقى مكوناً مستعمرة خلوية.\n- **التجدد:** يتدرج من التئام الجروح في الفقاريات العليا إلى تعويض الأطراف في البرمائيات والتكاثر الكامل في البلاناريا (طولياً أو عرضياً) ونجم البحر (بشرط احتوائه على جزء من القرص المركزي).\n- **التجرثم (تكوين الجراثيم):** أفضل صور التكاثر اللاجنسي (فطر عفن الخبز، عش الغراب، والسرخسيات). الجرثومة خلية وحيدة متحورة للنمو المباشر وتتميز بجدار سميك وتحمل الظروف القاسية وسرعة الانتشار.\n- **التوالد البكري:** قدرة البويضة على النمو إلى فرد جديد دون إخصاب:\n  - **نحل العسل:** الملكة تضع بيضاً غير مخصب ($n$) ينمو لذكور (طائفة الذكور أحادية المجموعة الصبغية $n$)؛ وبيضاً مخصباً ($2n$) ينمو لإناث (ملكات وشغالات).\n  - **حشرة المن:** تضع إناث المن في الربيع بيضاً ثنائي المجموعة ($2n$) بالانقسام الميتوزي ينمو لإناث دون إخصاب؛ وفي الخريف تتكاثر جنسياً.\n  - **التوالد البكري الصناعي:** تنشيط بويضات نجم البحر والضفدعة صناعياً بالإشعاع أو الصدمات الحرارية أو الكهربائية فتتضاعف صبغياتها ($2n$) وتنمو لأفراد إناث.\n- **زراعة الأنسجة:** تنمية خلايا أو أجزاء نباتية حية في وسط غذائي شبه طبيعي (مثل لبن جوز الهند المحتوي على الأوكسينات والعناصر الغذائية) لإنتاج نباتات كاملة (تجارب ستيوارد على الجزر والطباق).\n\n### ٢. ظاهرة تعاقب الأجيال\n- **دورة حياة بلازموديوم الملاريا:**\n  ١. تلدغ أنثى بعوضة الأنوفيلس السليمة جلد الإنسان وتصب لعابها المحتوي على **السبوروزويتات ($n$)**.\n  ٢. تتجه السبوروزويتات للكبد وتتكاثر دورتين لاجنسيتين بالتقطع منتجة **ميروزويتات ($n$)**.\n  ٣. تهاجم الميروزويتات خلايا الدم الحمراء وتقضي دورات لاجنسية متكررة كل 48 ساعة، ويؤدي انفجار كرات الدم لإطلاق مادة الهيموزوين السامة وظهور نوبات حمى الملاريا (ارتعاش شديد، حرارة مرتفعة، وعرق غزير).\n  ٤. تتحول بعض الميروزويتات إلى **أطوار مشيجية ($n$)**.\n  ٥. تلدغ بعوضة أخرى المريض وتمتص الأطوار المشيجية؛ وفي تجويف معدة البعوضة تندمج الأمشاج مكونة **اللاقحة أو الزيجوت ($2n$)**.\n  ٦. يتحول الزيجوت إلى **طور حركي (أوكينيت $2n$)** يخترق جدار معدة البعوضة وينقسم **ميوزياً** مكوناً **كيس البيض ($n$)**.\n  ٧. ينقسم كيس البيض لاجنسياً بالتجرثم منتجاً آلاف السبوروزويتات ($n$) التي تهاجر لغدد البعوضة اللعابية.\n- **دورة حياة سرخس الفوجير (نباتات زينة في المشاتل):**\n  - **الطور الجرثومي ($2n$):** يحمل حوافظ جرثومية على السطح السفلي للأوراق (بثرات)، تنقسم خلاياها الأمية ميوزياً لإنتاج جراثيم ($n$).\n  - تسقط الجرثومة على تربة رطبة وتنبت مكونة **الطور المشيجي ($n$)**، وهو نبات قلبي الشكل مفلطح ينمو على سطحه السفلي أشباه جذور وأعضاء جنسية:\n    - **الأنثريديا ($n$):** أعضاء التذكير التي تنتج السوابح المهدبة ($n$).\n    - **الأرشيجونيا ($n$):** أعضاء التأنيث التي تحتوي على البويضة ($n$).\n  - تسبح السوابح المهدبة فوق ماء التربة لتخصب بويضة الأرشيجونيا مكونة لاقحة ($2n$) تنمو لنبات جرثومي جديد يعتمد في بدايته على الطور المشيجي حتى يضمر.\n",
                      "formulas": [
                            {
                                  "labelEn": "Alternation of Generations Ratio",
                                  "labelAr": "دورة تعاقب الأجيال",
                                  "latex": "\\text{Sporophyte } (2n) \\xrightarrow{\\text{meiosis}} \\text{Spores } (n) \\to \\text{Gametophyte } (n) \\xrightarrow{\\text{mitosis}} \\text{Gametes } (n)"
                            },
                            {
                                  "labelEn": "Honeybee Parthenogenesis",
                                  "labelAr": "التوالد البكري في نحل العسل",
                                  "latex": "\\text{Ovum } (n) \\xrightarrow{\\text{unfertilized}} \\text{Drone } (n) \\quad \\text{vs} \\quad \\text{Zygote } (2n) \\to \\text{Queen / Worker } (2n)"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH3-L1",
                            "pageRange": "pp. 99–124"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: Asexual, Sexual Reproduction & Alternation of Generations",
                            "titleAr": "خطة درس: أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH3-L1",
                            "bloomsObjectivesEn": [
                                  "Analyze the biological structures and functional roles associated with Asexual, Sexual Reproduction & Alternation of Generations.",
                                  "Evaluate experimental and quantitative evidence governing these cellular mechanisms.",
                                  "Synthesize physiological feedback mechanisms to solve exam-standard analytical problems."
                            ],
                            "bloomsObjectivesAr": [
                                  "تحليل التراكيب البيولوجية والأدوار الوظيفية المرتبطة بـ أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال.",
                                  "تقييم الأدلة التجريبية والكمية الحاكمة لهذه الآليات الخلوية.",
                                  "تطبيق آليات التغذية الراجعة الفسيولوجية لحل المسائل التحليلية المتقدمة."
                            ],
                            "prerequisitesEn": [
                                  "General cell biology",
                                  "Biomolecules and enzymes",
                                  "Basic human physiology"
                            ],
                            "prerequisitesAr": [
                                  "بيولوجيا الخلية العامة",
                                  "الجزيئات الحيوية والإنزيمات",
                                  "مبادئ الفسيولوجيا البشرية"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "Asexual, Sexual Reproduction & Alternation of Generations",
                                        "definition": "Core concept of Asexual, Sexual Reproduction & Alternation of Generations as defined in the official curriculum."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال",
                                        "definition": "المفهوم المحوري لـ أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال وفق نواتج التعلم المعتمدة."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Inquiry Hook & Real-world Context",
                                        "phaseAr": "التهيئة والربط بالواقع",
                                        "duration": "15 min",
                                        "activitiesEn": "Examining microscopic micrographs and physiological scenarios.",
                                        "activitiesAr": "مناقشة صور مجهرية وحالات فسيولوجية واقعية."
                                  },
                                  {
                                        "phaseEn": "Direct Instruction & Concept Exploration",
                                        "phaseAr": "التدريس المباشر واستكشاف المفاهيم",
                                        "duration": "35 min",
                                        "activitiesEn": "Interactive diagram tracing and biochemical pathway mapping.",
                                        "activitiesAr": "تتبع المسارات الكيميائية الحيوية على المخططات التفاعلية."
                                  },
                                  {
                                        "phaseEn": "Collaborative Problem Solving",
                                        "phaseAr": "التدريب التشاركي وحل المسائل",
                                        "duration": "25 min",
                                        "activitiesEn": "Working through high-order thinking multi-tier questions.",
                                        "activitiesAr": "حل مسائل متدرجة تقيس مهارات التفكير العليا."
                                  },
                                  {
                                        "phaseEn": "Closure & Formative Exit Ticket",
                                        "phaseAr": "الغلق وتقييم الخروج التكويني",
                                        "duration": "15 min",
                                        "activitiesEn": "Individual synthesis and exit ticket response.",
                                        "activitiesAr": "تقييم تكويني فردي للتحقق من تحقيق نواتج التعلم."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Confusing cause and effect in the hormonal or molecular feedback of Asexual, Sexual Reproduction & Alternation of Generations."
                            ],
                            "commonMisconceptionsAr": [
                                  "الخلط بين السبب والنتيجة في آليات التغذية الراجعة الخاصة بـ أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال."
                            ],
                            "differentiationEn": {
                                  "struggling": "Provide annotated anatomical diagrams, concept flowcharts, and structured question hints.",
                                  "advanced": "Challenge with novel clinical case studies and multi-variable bioenergetic experiments."
                            },
                            "differentiationAr": {
                                  "struggling": "توفير مخططات تشريحية توضيحية وخرائط تدفق وتلميحات متدرجة للحل.",
                                  "advanced": "تكليف بدراسة حالات إكلينيكية وتصميم تجارب حيوية متعددة المتغيرات."
                            },
                            "formativeAssessmentEn": "What is the diagnostic significance and primary function of Asexual, Sexual Reproduction & Alternation of Generations?",
                            "formativeAssessmentAr": "ما الأهمية الحيوية والدور الوظيفي الأساسي لـ أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال؟",
                            "exitTicketQuestion": {
                                  "questionEn": "Summarize the key physiological principle governing Asexual, Sexual Reproduction & Alternation of Generations.",
                                  "questionAr": "لخص المبدأ الفسيولوجي الأساسي الحاكم لـ أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال.",
                                  "solutionEn": "Accurate statement of structural organization, molecular triggers, and physiological outcomes.",
                                  "solutionAr": "تحديد العلاقة الدقيقة بين البنية الجزيئية والمحفزات الحيوية والنتيجة الفسيولوجية."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch3_l1_ws",
                            "titleEn": "Worksheet: Asexual, Sexual Reproduction & Alternation of Generations",
                            "titleAr": "ورقة عمل: أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال",
                            "descriptionEn": "Comprehensive problem sheet reinforcing key principles and exam problem patterns for Asexual, Sexual Reproduction & Alternation of Generations.",
                            "descriptionAr": "ورقة تدريبية شاملة لترسيخ المفاهيم وأنماط الأسئلة الامتحانية لـ أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch3_l1_ws_p1",
                                        "titleEn": "Core Standard Question: Asexual, Sexual Reproduction & Alternation of Generations",
                                        "titleAr": "سؤال قياسي: أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال",
                                        "difficulty": "medium",
                                        "questionEn": "Which statement best characterizes the official biological mechanism of Asexual, Sexual Reproduction & Alternation of Generations according to national curriculum standards?",
                                        "questionAr": "أي العبارات التالية تصف بدقة الآلية البيولوجية لـ أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال وفقاً لمعايير المنهج الوزاري المعتمد؟",
                                        "optionsEn": [
                                              "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                              "Spontaneous non-enzymatic decay lacking cellular or genetic control",
                                              "Static unchanging equilibrium that does not respond to environmental stimuli",
                                              "Complete cellular shutdown during normal physiological homeostasis"
                                        ],
                                        "optionsAr": [
                                              "تفاعلات جزيئية متخصصة خاضعة للتنظيم عبر المستقبلات والمسارات الإنزيمية الدقيقة",
                                              "تحلل عشوائي تلقائي بدون أي تحكم خلوي أو وراثي",
                                              "اتزان استاتيكي جامد لا يستجيب لأي مؤثرات بيئية أو هرمونية",
                                              "توقف كامل للنشاط الخلوي أثناء الأداء الفسيولوجي الطبيعي"
                                        ],
                                        "correctAnswer": "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                        "correctIndex": 0,
                                        "hintEn": "Focus on the regulated, highly specific nature of physiological and genetic mechanisms.",
                                        "hintAr": "ركز على الطبيعة المنظمة وعالية التخصص للآليات الفسيولوجية والوراثية.",
                                        "stepByStepSolutionEn": [
                                              "Analyze the biological process described in the curriculum.",
                                              "Biological mechanisms operate through specific receptor, enzymatic, or structural cascades.",
                                              "This statement correctly represents the verified scientific curriculum standard."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "تحليل الآلية الحيوية المحددة في المنهج.",
                                              "تعمل الآليات البيولوجية من خلال تسلسلات متخصصة من المستقبلات والإنزيمات.",
                                              "هذه الإجابة تمثل بدقة المفهوم العلمي المعتمد في كتاب الوزارة."
                                        ],
                                        "teacherTipEn": "Remind students that biological control is always dynamic, specific, and regulated.",
                                        "teacherTipAr": "تذكير الطلاب بأن التحكم البيولوجي يتسم دائماً بالدقة والتخصص والتنظيم الفسيولوجي."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Interactive Simulation: Asexual, Sexual Reproduction & Alternation of Generations",
                            "titleAr": "محاكاة تفاعلية: أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال",
                            "descriptionEn": "Interactive virtual laboratory exploring dynamic variables in Asexual, Sexual Reproduction & Alternation of Generations.",
                            "descriptionAr": "محاكاة تفاعلية لاستكشاف المتغيرات الفسيولوجية في أنماط التكاثر اللاجنسي والجنسي وتعاقب الأجيال."
                      }
                },
                {
                      "id": "th_bio_ch3_l2",
                      "titleEn": "Reproduction in Flowering Plants (Angiosperms)",
                      "titleAr": "التكاثر في النباتات الزهرية وتكوين البذور والثمار",
                      "summaryEn": "Flower anatomy, microsporogenesis (pollen grains), megasporogenesis (embryo sac 8 nuclei), pollination, double fertilization (syngamy + triple fusion), and seed/fruit formation.",
                      "summaryAr": "تشريح الزهرة النموذجية، تكوين حبوب اللقاح في المتك، تكوين البويضات في المبيض، التلقيح والإخصاب المزدوج والاندماج الثلاثي (3n)، وتكوين البذور والثمار الحقيقية والكاذبة والإثمار العذري.",
                      "theoryContentEn": "### 3. Reproduction in Flowering Plants (Angiosperms)\n- **Flower Anatomy:** Typical flower consists of 4 whorls on a receptacle: Calyx (sepals), Corolla (petals), Androecium (stamens: filament + anther), and Gynoecium (pistil/carpel: stigma, style, ovary).\n- **Microsporogenesis (Pollen Formation):**\n  - Anther has 4 pollen sacs filled with diploid spore mother cells ($2n$).\n  - Each microsporocyte ($2n$) undergoes meiosis $\\to$ 4 haploid microspores ($n$).\n  - Nucleus divides mitotically into a **tube nucleus** and a **generative nucleus**, surrounded by a thick wall $\\to$ mature **pollen grain ($n$)**.\n- **Megasporogenesis (Embryo Sac Formation):**\n  - Ovary contains ovule attached by a funicle. Large diploid megaspore mother cell ($2n$) undergoes meiosis $\\to$ row of 4 cells; 3 degenerate and 1 enlarges to form the **embryo sac ($n$)**.\n  - Embryo sac nucleus divides mitotically 3 times $\\to$ 8 nuclei:\n    - 3 antipodal cells at chalazal end ($n$).\n    - 2 synergid cells + 1 central egg cell at micropyle end ($n$).\n    - 2 polar nuclei in center of embryo sac ($n + n$).\n- **Double Fertilization (الإخصاب المزدوج):**\n  1. **Syngamy:** One male gamete ($n$) fuses with the egg nucleus ($n$) $\\to$ diploid zygote ($2n$) $\\to$ plant embryo.\n  2. **Triple Fusion (الاندماج الثلاثي):** Second male gamete ($n$) fuses with the two polar nuclei ($n + n$) $\\to$ triploid endosperm nucleus ($3n$), which divides to form the nutritive **endosperm ($3n$)**.\n- **Seed & Fruit Formation:**\n  - Ovary wall $\\to$ Fruit pericarp; Ovule integuments $\\to$ Seed coat (Testa).\n  - **False Fruit:** Any fruit in which a floral part other than the ovary participates in fleshy enlargement (e.g., Apple where the **receptacle** swells).\n  - **Parthenocarpy (الإثمار العذري):** Fruit formation without fertilization (seedless fruits, e.g., banana, navel orange, or induced spraying with auxin / indole-acetic acid).\n",
                      "theoryContentAr": "### ٣. التكاثر في النباتات الزهرية\n- **أعضاء الزهرة:** كأس (سبلات)، تويج (بتلات)، طلع (أسدية: خيوط ومتوك)، ومتاع (كرابل: مياسم وأقلام ومبايض).\n- **تكوين حبوب اللقاح:** المتك يحتوي 4 أكياس؛ تنقسم الخلايا الجرثومية الأمية ($2n$) ميوزياً لـ 4 جراثيم صغيرة ($n$)، تنقسم نواة كل منها ميتوزياً لنواة أنبوبية ونواة مولدة $\\to$ حبة لقاح ناضجة.\n- **تكوين البويضة:** تنقسم الخلية الجرثومية الأمية ($2n$) ميوزياً لصف من 4 خلايا، تتحلل 3 وتنمو الرابعة لتكون الكيس الجنيني ($n$)، وتنقسم نواته ميتوزياً 3 مرات لتعطي 8 أنوية (3 خلايا سمتية، خليتان مساعدتان، بيضة، ونواتا الكيس الجنيني).\n- **الإخصاب المزدوج:**\n  ١. اندماج نواة زكرية ($n$) بنواة البيضة ($n$) $\\to$ زيجوت ($2n$) ينمو للجنين.\n  ٢. اندماج النواة الذكرية الثانية ($n$) بالنواتين القطبيتين ($n+n$) $\\to$ نواة الإندوسبرم ($3n$) لتكوين نسيج الإندوسبرم المغذي للجنين.\n- **الثمرة الكاذبة:** ثمرة يتشحم فيها أي جزء زهري آخر غير المبيض (مثل التفاح حيث يتشحم التخت).\n",
                      "formulas": [
                            {
                                  "labelEn": "Double Fertilization Equation",
                                  "labelAr": "معادلة الإخصاب المزدوج",
                                  "latex": "\\begin{cases} \\text{Sperm } (n) + \\text{Egg } (n) \\to \\text{Zygote } (2n) \\\\ \\text{Sperm } (n) + 2\\,\\text{Polar Nuclei } (n+n) \\to \\text{Endosperm Nucleus } (3n) \\end{cases}"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH3-L2",
                            "pageRange": "pp. 125–148"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: Reproduction in Flowering Plants (Angiosperms)",
                            "titleAr": "خطة درس: التكاثر في النباتات الزهرية وتكوين البذور والثمار",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH3-L2",
                            "bloomsObjectivesEn": [
                                  "Analyze the biological structures and functional roles associated with Reproduction in Flowering Plants (Angiosperms).",
                                  "Evaluate experimental and quantitative evidence governing these cellular mechanisms.",
                                  "Synthesize physiological feedback mechanisms to solve exam-standard analytical problems."
                            ],
                            "bloomsObjectivesAr": [
                                  "تحليل التراكيب البيولوجية والأدوار الوظيفية المرتبطة بـ التكاثر في النباتات الزهرية وتكوين البذور والثمار.",
                                  "تقييم الأدلة التجريبية والكمية الحاكمة لهذه الآليات الخلوية.",
                                  "تطبيق آليات التغذية الراجعة الفسيولوجية لحل المسائل التحليلية المتقدمة."
                            ],
                            "prerequisitesEn": [
                                  "General cell biology",
                                  "Biomolecules and enzymes",
                                  "Basic human physiology"
                            ],
                            "prerequisitesAr": [
                                  "بيولوجيا الخلية العامة",
                                  "الجزيئات الحيوية والإنزيمات",
                                  "مبادئ الفسيولوجيا البشرية"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "Reproduction in Flowering Plants (Angiosperms)",
                                        "definition": "Core concept of Reproduction in Flowering Plants (Angiosperms) as defined in the official curriculum."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "التكاثر في النباتات الزهرية وتكوين البذور والثمار",
                                        "definition": "المفهوم المحوري لـ التكاثر في النباتات الزهرية وتكوين البذور والثمار وفق نواتج التعلم المعتمدة."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Inquiry Hook & Real-world Context",
                                        "phaseAr": "التهيئة والربط بالواقع",
                                        "duration": "15 min",
                                        "activitiesEn": "Examining microscopic micrographs and physiological scenarios.",
                                        "activitiesAr": "مناقشة صور مجهرية وحالات فسيولوجية واقعية."
                                  },
                                  {
                                        "phaseEn": "Direct Instruction & Concept Exploration",
                                        "phaseAr": "التدريس المباشر واستكشاف المفاهيم",
                                        "duration": "35 min",
                                        "activitiesEn": "Interactive diagram tracing and biochemical pathway mapping.",
                                        "activitiesAr": "تتبع المسارات الكيميائية الحيوية على المخططات التفاعلية."
                                  },
                                  {
                                        "phaseEn": "Collaborative Problem Solving",
                                        "phaseAr": "التدريب التشاركي وحل المسائل",
                                        "duration": "25 min",
                                        "activitiesEn": "Working through high-order thinking multi-tier questions.",
                                        "activitiesAr": "حل مسائل متدرجة تقيس مهارات التفكير العليا."
                                  },
                                  {
                                        "phaseEn": "Closure & Formative Exit Ticket",
                                        "phaseAr": "الغلق وتقييم الخروج التكويني",
                                        "duration": "15 min",
                                        "activitiesEn": "Individual synthesis and exit ticket response.",
                                        "activitiesAr": "تقييم تكويني فردي للتحقق من تحقيق نواتج التعلم."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Confusing cause and effect in the hormonal or molecular feedback of Reproduction in Flowering Plants (Angiosperms)."
                            ],
                            "commonMisconceptionsAr": [
                                  "الخلط بين السبب والنتيجة في آليات التغذية الراجعة الخاصة بـ التكاثر في النباتات الزهرية وتكوين البذور والثمار."
                            ],
                            "differentiationEn": {
                                  "struggling": "Provide annotated anatomical diagrams, concept flowcharts, and structured question hints.",
                                  "advanced": "Challenge with novel clinical case studies and multi-variable bioenergetic experiments."
                            },
                            "differentiationAr": {
                                  "struggling": "توفير مخططات تشريحية توضيحية وخرائط تدفق وتلميحات متدرجة للحل.",
                                  "advanced": "تكليف بدراسة حالات إكلينيكية وتصميم تجارب حيوية متعددة المتغيرات."
                            },
                            "formativeAssessmentEn": "What is the diagnostic significance and primary function of Reproduction in Flowering Plants (Angiosperms)?",
                            "formativeAssessmentAr": "ما الأهمية الحيوية والدور الوظيفي الأساسي لـ التكاثر في النباتات الزهرية وتكوين البذور والثمار؟",
                            "exitTicketQuestion": {
                                  "questionEn": "Summarize the key physiological principle governing Reproduction in Flowering Plants (Angiosperms).",
                                  "questionAr": "لخص المبدأ الفسيولوجي الأساسي الحاكم لـ التكاثر في النباتات الزهرية وتكوين البذور والثمار.",
                                  "solutionEn": "Accurate statement of structural organization, molecular triggers, and physiological outcomes.",
                                  "solutionAr": "تحديد العلاقة الدقيقة بين البنية الجزيئية والمحفزات الحيوية والنتيجة الفسيولوجية."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch3_l2_ws",
                            "titleEn": "Worksheet: Reproduction in Flowering Plants (Angiosperms)",
                            "titleAr": "ورقة عمل: التكاثر في النباتات الزهرية وتكوين البذور والثمار",
                            "descriptionEn": "Comprehensive problem sheet reinforcing key principles and exam problem patterns for Reproduction in Flowering Plants (Angiosperms).",
                            "descriptionAr": "ورقة تدريبية شاملة لترسيخ المفاهيم وأنماط الأسئلة الامتحانية لـ التكاثر في النباتات الزهرية وتكوين البذور والثمار.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch3_l2_ws_p1",
                                        "titleEn": "Core Standard Question: Reproduction in Flowering Plants (Angiosperms)",
                                        "titleAr": "سؤال قياسي: التكاثر في النباتات الزهرية وتكوين البذور والثمار",
                                        "difficulty": "medium",
                                        "questionEn": "Which statement best characterizes the official biological mechanism of Reproduction in Flowering Plants (Angiosperms) according to national curriculum standards?",
                                        "questionAr": "أي العبارات التالية تصف بدقة الآلية البيولوجية لـ التكاثر في النباتات الزهرية وتكوين البذور والثمار وفقاً لمعايير المنهج الوزاري المعتمد؟",
                                        "optionsEn": [
                                              "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                              "Spontaneous non-enzymatic decay lacking cellular or genetic control",
                                              "Static unchanging equilibrium that does not respond to environmental stimuli",
                                              "Complete cellular shutdown during normal physiological homeostasis"
                                        ],
                                        "optionsAr": [
                                              "تفاعلات جزيئية متخصصة خاضعة للتنظيم عبر المستقبلات والمسارات الإنزيمية الدقيقة",
                                              "تحلل عشوائي تلقائي بدون أي تحكم خلوي أو وراثي",
                                              "اتزان استاتيكي جامد لا يستجيب لأي مؤثرات بيئية أو هرمونية",
                                              "توقف كامل للنشاط الخلوي أثناء الأداء الفسيولوجي الطبيعي"
                                        ],
                                        "correctAnswer": "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                        "correctIndex": 0,
                                        "hintEn": "Focus on the regulated, highly specific nature of physiological and genetic mechanisms.",
                                        "hintAr": "ركز على الطبيعة المنظمة وعالية التخصص للآليات الفسيولوجية والوراثية.",
                                        "stepByStepSolutionEn": [
                                              "Analyze the biological process described in the curriculum.",
                                              "Biological mechanisms operate through specific receptor, enzymatic, or structural cascades.",
                                              "This statement correctly represents the verified scientific curriculum standard."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "تحليل الآلية الحيوية المحددة في المنهج.",
                                              "تعمل الآليات البيولوجية من خلال تسلسلات متخصصة من المستقبلات والإنزيمات.",
                                              "هذه الإجابة تمثل بدقة المفهوم العلمي المعتمد في كتاب الوزارة."
                                        ],
                                        "teacherTipEn": "Remind students that biological control is always dynamic, specific, and regulated.",
                                        "teacherTipAr": "تذكير الطلاب بأن التحكم البيولوجي يتسم دائماً بالدقة والتخصص والتنظيم الفسيولوجي."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Interactive Simulation: Reproduction in Flowering Plants (Angiosperms)",
                            "titleAr": "محاكاة تفاعلية: التكاثر في النباتات الزهرية وتكوين البذور والثمار",
                            "descriptionEn": "Interactive virtual laboratory exploring dynamic variables in Reproduction in Flowering Plants (Angiosperms).",
                            "descriptionAr": "محاكاة تفاعلية لاستكشاف المتغيرات الفسيولوجية في التكاثر في النباتات الزهرية وتكوين البذور والثمار."
                      }
                },
                {
                      "id": "th_bio_ch3_l3",
                      "titleEn": "Human Reproduction, Gametogenesis & Embryology",
                      "titleAr": "التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين",
                      "summaryEn": "Male and female reproductive systems, spermatogenesis, oogenesis, the 28-day menstrual cycle hormonal dynamics, oviduct fertilization, cleavage, embryonic membranes, and IVF reproductive technologies.",
                      "summaryAr": "تشريح الجهازين التناسليين الذكري والأنثوي، مراحل تكوين الحيوانات المنوية والبويضات، دورة الطمث الهرمونية (28 يوماً)، الإخصاب وتفلج الزيجوت، الأغشية الجنينية والمشيمة، والتوائم وتقنيات الإنجاب المساعدة.",
                      "theoryContentEn": "### 4. Human Reproduction & Menstrual Cycle\n- **Male Reproductive System:**\n  - Testes located in scrotal sac outside pelvic cavity ($2-3^\\circ\\text{C}$ below body core temperature for viable spermatogenesis).\n  - **Seminiferous Tubules:** Germinal epithelium undergoes **Spermatogenesis**:\n    - Spermatogonia ($2n$) $\\xrightarrow{\\text{Growth}}$ Primary spermatocytes ($2n$) $\\xrightarrow{\\text{Meiosis I}}$ Secondary spermatocytes ($n$) $\\xrightarrow{\\text{Meiosis II}}$ Spermatids ($n$) $\\xrightarrow{\\text{Metamorphosis}}$ Spermatozoa ($n$).\n    - **Sertoli Cells:** Nourish developing sperms inside tubules and provide immunological barrier.\n  - **Leydig (Interstitial) Cells:** Secrete testosterone and androsterone under LH stimulation.\n- **Female Reproductive System:**\n  - Ovaries produce ova and sex hormones.\n  - **Oogenesis:**\n    - Multiplication phase (fetal life): Oogonia ($2n$) multiply by mitosis.\n    - Growth phase (fetal life): Oogonia store food, transforming into primary oocytes ($2n$).\n    - Maturation phase: Primary oocyte ($2n$) completes Meiosis I $\\to$ large secondary oocyte ($n$) + 1st polar body ($n$).\n    - Secondary oocyte undergoes Meiosis II **only at the moment of sperm penetration** (fertilization) $\\to$ mature ovum ($n$) + 2nd polar body ($n$).\n- **The Menstrual Cycle (28 Days):**\n  1. **Proliferative (Follicular) Phase (Days 1 - 14):** Pituitary secretes **FSH**, stimulating Graafian follicle growth, which secretes **Estrogen** to repair and thicken uterine endometrium.\n  2. **Ovulation Phase (Day 14):** Surge in **LH** ruptures mature Graafian follicle, releasing secondary oocyte into Fallopian tube. Ruptured follicle transforms into the **Corpus Luteum**, which secretes **Progesterone** to increase endometrial vascularity and glandular secretion.\n  3. **Secretory / Luteal Phase (Days 14 - 28):** High progesterone inhibits pituitary FSH/LH (negative feedback). If pregnancy does not occur, corpus luteum degenerates by day 28, progesterone plunges, endometrial capillaries rupture, shedding uterine lining as **Menstruation (3 - 5 days)**.\n- **Twins:**\n  - **Identical (Monozygotic):** One ovum fertilized by one sperm; zygote splits during early cleavage $\\implies$ identical genome, same sex, share single placenta.\n  - **Fraternal (Dizygotic):** Two separate ova released simultaneously and fertilized by two different sperms $\\implies$ distinct genomes, may differ in sex, have separate independent placentas.",
                      "theoryContentAr": "### ٤. التكاثر في الإنسان ودورة الطمث\n- **الجهاز التناسلي الذكري:** الخصيتان خارج البطن بكيس الصفن ($2-3^\\circ\\text{م}$ أقل من حرارة الجسم).\n  - الأنيبيبات المنوية: تكوين الحيوانات المنوية، وخلايا سيرتولي لإفراز سائل مغذي للحيوانات المنوية.\n  - الخلايا البينية: تفرز التستوستيرون بتأثير هرمون LH.\n- **الجهاز التناسلي الأنثوي:** المبيضان، قناتا فالوب، الرحم، والمهبل.\n- **دورة الطمث (٢٨ يوماً):**\n  ١. **مرحلة نضج الحويصلة (١ - ١٤):** هرمون FSH ينضج حويصلة جراف التي تفرز الإستروجين لإنماء بطانة الرحم.\n  ٢. **مرحلة التبويض (يوم ١٤):** انفجار حويصلة جراف بتأثير LH وتحرر الخلية البيضية الثانوية وتكون الجسم الأصفر الذي يفرز البروجسترون لزيادة سمك وإمداد بطانة الرحم بالدم.\n  ٣. **مرحلة الطمث (يوم ٢٨):** عند عدم الإخصاب يضمر الجسم الأصفر ويهبط البروجسترون وتتمزق بطانة الرحم وينزل دم الحيض (٣ - ٥ أيام).\n- **التوائم:**\n  - التوأم المتماثل (أحادي اللاقحة): بويضة واحدة وحيوان منوي واحد، ينقسم الزيجوت لجنينين لهما نفس الجنس والمشيمة والجينات.\n  - التوأم المتآخي (ثنائي اللاقحة): بويضتان مختلفتان بحيوانين منويين مختلفين، مشيمتان منفصلتان وقد يختلفان في الجنس.",
                      "formulas": [
                            {
                                  "labelEn": "Menstrual Cycle Phasic Pacing",
                                  "labelAr": "المراحل الزمنية لدورة الطمث",
                                  "latex": "\\text{Follicular: } 10\\,\\text{d} \\to \\text{Ovulation: Day } 14 \\to \\text{Luteal: } 14\\,\\text{d} \\to \\text{Menstruation: } 3 - 5\\,\\text{d}"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH3-L3",
                            "pageRange": "pp. 149–168"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: Human Reproduction, Gametogenesis & Embryology",
                            "titleAr": "خطة درس: التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH3-L3",
                            "bloomsObjectivesEn": [
                                  "Analyze the biological structures and functional roles associated with Human Reproduction, Gametogenesis & Embryology.",
                                  "Evaluate experimental and quantitative evidence governing these cellular mechanisms.",
                                  "Synthesize physiological feedback mechanisms to solve exam-standard analytical problems."
                            ],
                            "bloomsObjectivesAr": [
                                  "تحليل التراكيب البيولوجية والأدوار الوظيفية المرتبطة بـ التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين.",
                                  "تقييم الأدلة التجريبية والكمية الحاكمة لهذه الآليات الخلوية.",
                                  "تطبيق آليات التغذية الراجعة الفسيولوجية لحل المسائل التحليلية المتقدمة."
                            ],
                            "prerequisitesEn": [
                                  "General cell biology",
                                  "Biomolecules and enzymes",
                                  "Basic human physiology"
                            ],
                            "prerequisitesAr": [
                                  "بيولوجيا الخلية العامة",
                                  "الجزيئات الحيوية والإنزيمات",
                                  "مبادئ الفسيولوجيا البشرية"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "Human Reproduction, Gametogenesis & Embryology",
                                        "definition": "Core concept of Human Reproduction, Gametogenesis & Embryology as defined in the official curriculum."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين",
                                        "definition": "المفهوم المحوري لـ التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين وفق نواتج التعلم المعتمدة."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Inquiry Hook & Real-world Context",
                                        "phaseAr": "التهيئة والربط بالواقع",
                                        "duration": "15 min",
                                        "activitiesEn": "Examining microscopic micrographs and physiological scenarios.",
                                        "activitiesAr": "مناقشة صور مجهرية وحالات فسيولوجية واقعية."
                                  },
                                  {
                                        "phaseEn": "Direct Instruction & Concept Exploration",
                                        "phaseAr": "التدريس المباشر واستكشاف المفاهيم",
                                        "duration": "35 min",
                                        "activitiesEn": "Interactive diagram tracing and biochemical pathway mapping.",
                                        "activitiesAr": "تتبع المسارات الكيميائية الحيوية على المخططات التفاعلية."
                                  },
                                  {
                                        "phaseEn": "Collaborative Problem Solving",
                                        "phaseAr": "التدريب التشاركي وحل المسائل",
                                        "duration": "25 min",
                                        "activitiesEn": "Working through high-order thinking multi-tier questions.",
                                        "activitiesAr": "حل مسائل متدرجة تقيس مهارات التفكير العليا."
                                  },
                                  {
                                        "phaseEn": "Closure & Formative Exit Ticket",
                                        "phaseAr": "الغلق وتقييم الخروج التكويني",
                                        "duration": "15 min",
                                        "activitiesEn": "Individual synthesis and exit ticket response.",
                                        "activitiesAr": "تقييم تكويني فردي للتحقق من تحقيق نواتج التعلم."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Confusing cause and effect in the hormonal or molecular feedback of Human Reproduction, Gametogenesis & Embryology."
                            ],
                            "commonMisconceptionsAr": [
                                  "الخلط بين السبب والنتيجة في آليات التغذية الراجعة الخاصة بـ التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين."
                            ],
                            "differentiationEn": {
                                  "struggling": "Provide annotated anatomical diagrams, concept flowcharts, and structured question hints.",
                                  "advanced": "Challenge with novel clinical case studies and multi-variable bioenergetic experiments."
                            },
                            "differentiationAr": {
                                  "struggling": "توفير مخططات تشريحية توضيحية وخرائط تدفق وتلميحات متدرجة للحل.",
                                  "advanced": "تكليف بدراسة حالات إكلينيكية وتصميم تجارب حيوية متعددة المتغيرات."
                            },
                            "formativeAssessmentEn": "What is the diagnostic significance and primary function of Human Reproduction, Gametogenesis & Embryology?",
                            "formativeAssessmentAr": "ما الأهمية الحيوية والدور الوظيفي الأساسي لـ التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين؟",
                            "exitTicketQuestion": {
                                  "questionEn": "Summarize the key physiological principle governing Human Reproduction, Gametogenesis & Embryology.",
                                  "questionAr": "لخص المبدأ الفسيولوجي الأساسي الحاكم لـ التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين.",
                                  "solutionEn": "Accurate statement of structural organization, molecular triggers, and physiological outcomes.",
                                  "solutionAr": "تحديد العلاقة الدقيقة بين البنية الجزيئية والمحفزات الحيوية والنتيجة الفسيولوجية."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch3_l3_ws",
                            "titleEn": "Worksheet: Human Reproduction, Gametogenesis & Embryology",
                            "titleAr": "ورقة عمل: التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين",
                            "descriptionEn": "Comprehensive problem sheet reinforcing key principles and exam problem patterns for Human Reproduction, Gametogenesis & Embryology.",
                            "descriptionAr": "ورقة تدريبية شاملة لترسيخ المفاهيم وأنماط الأسئلة الامتحانية لـ التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch3_l3_ws_p1",
                                        "titleEn": "Core Standard Question: Human Reproduction, Gametogenesis & Embryology",
                                        "titleAr": "سؤال قياسي: التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين",
                                        "difficulty": "medium",
                                        "questionEn": "Which statement best characterizes the official biological mechanism of Human Reproduction, Gametogenesis & Embryology according to national curriculum standards?",
                                        "questionAr": "أي العبارات التالية تصف بدقة الآلية البيولوجية لـ التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين وفقاً لمعايير المنهج الوزاري المعتمد؟",
                                        "optionsEn": [
                                              "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                              "Spontaneous non-enzymatic decay lacking cellular or genetic control",
                                              "Static unchanging equilibrium that does not respond to environmental stimuli",
                                              "Complete cellular shutdown during normal physiological homeostasis"
                                        ],
                                        "optionsAr": [
                                              "تفاعلات جزيئية متخصصة خاضعة للتنظيم عبر المستقبلات والمسارات الإنزيمية الدقيقة",
                                              "تحلل عشوائي تلقائي بدون أي تحكم خلوي أو وراثي",
                                              "اتزان استاتيكي جامد لا يستجيب لأي مؤثرات بيئية أو هرمونية",
                                              "توقف كامل للنشاط الخلوي أثناء الأداء الفسيولوجي الطبيعي"
                                        ],
                                        "correctAnswer": "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                        "correctIndex": 0,
                                        "hintEn": "Focus on the regulated, highly specific nature of physiological and genetic mechanisms.",
                                        "hintAr": "ركز على الطبيعة المنظمة وعالية التخصص للآليات الفسيولوجية والوراثية.",
                                        "stepByStepSolutionEn": [
                                              "Analyze the biological process described in the curriculum.",
                                              "Biological mechanisms operate through specific receptor, enzymatic, or structural cascades.",
                                              "This statement correctly represents the verified scientific curriculum standard."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "تحليل الآلية الحيوية المحددة في المنهج.",
                                              "تعمل الآليات البيولوجية من خلال تسلسلات متخصصة من المستقبلات والإنزيمات.",
                                              "هذه الإجابة تمثل بدقة المفهوم العلمي المعتمد في كتاب الوزارة."
                                        ],
                                        "teacherTipEn": "Remind students that biological control is always dynamic, specific, and regulated.",
                                        "teacherTipAr": "تذكير الطلاب بأن التحكم البيولوجي يتسم دائماً بالدقة والتخصص والتنظيم الفسيولوجي."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Interactive Simulation: Human Reproduction, Gametogenesis & Embryology",
                            "titleAr": "محاكاة تفاعلية: التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين",
                            "descriptionEn": "Interactive virtual laboratory exploring dynamic variables in Human Reproduction, Gametogenesis & Embryology.",
                            "descriptionAr": "محاكاة تفاعلية لاستكشاف المتغيرات الفسيولوجية في التكاثر في الإنسان وتكوين الأمشاج ودورة الطمث ونمو الجنين."
                      }
                }
          ],
          "solvedExamples": [
                {
                      "id": "th_bio_ch3_se_01",
                      "titleEn": "Example 1: Pollen and Nuclei Numerical Yields",
                      "titleAr": "مثال محلول ١: حسابات نواتج حبوب اللقاح والأنوية الزهرية",
                      "difficulty": "medium",
                      "questionEn": "An anther contains 20 diploid microspore mother cells across its 4 sacs. Calculate: (a) total pollen grains produced, (b) total generative nuclei, and (c) total male gamete nuclei produced upon pollen germination on the stigma.",
                      "questionAr": "متك زهرة يحتوي على 20 خلية جرثومية أمية في أكياسه الأربعة مجتمعة. احسب: (أ) العدد الكلي لحبوب اللقاح الناتجة، (ب) عدد الأنوية المولدة، و(ج) عدد الأنوية الزكرية الناتجة عند إنبات حبوب اللقاح على الميسم.",
                      "stepByStepSolutionEn": [
                            "1. Each microspore mother cell (2n) undergoes meiosis to produce 4 pollen grains (n).",
                            "   Total pollen grains = 20 * 4 = 80 pollen grains.",
                            "2. Each mature pollen grain contains 1 generative nucleus.",
                            "   Total generative nuclei = 80 * 1 = 80 generative nuclei.",
                            "3. Upon germination, each generative nucleus divides mitotically into 2 male gametes.",
                            "   Total male gamete nuclei = 80 * 2 = 160 male gamete nuclei."
                      ],
                      "stepByStepSolutionAr": [
                            "١. كل خلية جرثومية أمية (2n) تنقسم ميوزياً لتعطي 4 حبوب لقاح (n).",
                            "   العدد الكلي لحبوب اللقاح = 20 × 4 = 80 حبة لقاح.",
                            "٢. كل حبة لقاح ناضجة تحتوي على نواة مولدة واحدة.",
                            "   عدد الأنوية المولدة = 80 × 1 = 80 نواة مولدة.",
                            "٣. أثناء الإنبات تنقسم النواة المولدة ميتوزياً إلى نواتين زكريتين.",
                            "   عدد الأنوية الزكرية = 80 × 2 = 160 نواة زكرية."
                      ],
                      "teacherTipEn": "Generative nucleus gives 2 male nuclei; tube nucleus guides pollen tube growth.",
                      "teacherTipAr": "النواة المولدة تنقسم لتعطي نواتين زكريتين، بينما النواة الأنبوبية تقود نمو أنبوبة اللقاح وتتلاشى.",
                      "hintEn": "Generative nucleus gives 2 male nuclei; tube nucleus guides pollen tube growth.",
                      "hintAr": "النواة المولدة تنقسم لتعطي نواتين زكريتين، بينما النواة الأنبوبية تقود نمو أنبوبة اللقاح وتتلاشى."
                },
                {
                      "id": "th_bio_ch3_se_02",
                      "titleEn": "Example 2: Menstrual Cycle Hormonal Timeline Analysis",
                      "titleAr": "مثال محلول ٢: تتبع المنحنيات الهرمونية خلال دورة الطمث",
                      "difficulty": "hots",
                      "questionEn": "In a regular 28-day menstrual cycle starting on day 1 (onset of menses): (a) on which day does the LH surge peak, (b) when is progesterone at its highest concentration, and (c) what triggers the menstruation that begins day 29?",
                      "questionAr": "في دورة طمث منتظمة مدتها 28 يوماً تبدأ في اليوم الأول بنزول دم الحيض: (أ) في أي يوم يصل هرمون LH إلى قمته، (ب) متى يصل هرمون البروجسترون لأعلى تركيز له، و(ج) ما الذي يحفز حدوث الطمث في اليوم 29؟",
                      "stepByStepSolutionEn": [
                            "1. The LH surge peaks abruptly around Day 13 - 14, triggering ovulation (rupture of Graafian follicle on Day 14).",
                            "2. Progesterone peaks during the mid-luteal phase, approximately Days 21 - 23, secreted actively by the mature corpus luteum.",
                            "3. In the absence of pregnancy, the corpus luteum degenerates around Day 28, causing a steep decline in progesterone and estrogen, which leads to spasm of endometrial arterioles, breakdown of the endometrium, and onset of menstruation."
                      ],
                      "stepByStepSolutionAr": [
                            "١. يصل هرمون LH لأعلى ذروة له في اليوم 13 - 14 مسبباً تفجير حويصلة جراف وحدوث التبويض في اليوم 14.",
                            "٢. يصل هرمون البروجسترون لأقصى تركيز له في منتصف مرحلة التبويض (الأيام 21 - 23) لإفرازه بغزارة من الجسم الأصفر.",
                            "٣. في حالة عدم حدوث إخصاب، يضمر الجسم الأصفر قرب اليوم 28، فيهبط مستوى البروجسترون والإستروجين في الدم هبوطاً حاداً، مما يسبب تمزق بطانة الرحم وشعيراتها الدموية ونزول دم الحيض."
                      ],
                      "teacherTipEn": "Day 14 is the landmark: Estrogen falls, LH spikes, ovulation occurs, and Progesterone rises.",
                      "teacherTipAr": "اليوم 14 هو الفاصل: يقل الإستروجين، يقفز LH، يتحرر المشيج الأنثوي، ويبدأ صعود البروجسترون.",
                      "hintEn": "Day 14 is the landmark: Estrogen falls, LH spikes, ovulation occurs, and Progesterone rises.",
                      "hintAr": "اليوم 14 هو الفاصل: يقل الإستروجين، يقفز LH، يتحرر المشيج الأنثوي، ويبدأ صعود البروجسترون."
                },
                {
                      "id": "th_bio_ch3_se_03",
                      "titleEn": "Example 3: Chromosomal Ploidy in Plasmodium Life Cycle",
                      "titleAr": "مثال محلول ٣: المجموعات الصبغية في دورة حياة بلازموديوم الملاريا",
                      "difficulty": "medium",
                      "questionEn": "Identify the chromosomal ploidy ($n$ or $2n$) of the following stages of Plasmodium malariae: Sporozoite, Merozoite, Gametocyte, Zygote, Ookinete, and Oocyst.",
                      "questionAr": "حدد المجموعة الصبغية (n أم 2n) للأطوار التالية في دورة حياة بلازموديوم الملاريا: السبوروزويت، الميروزويت، الطور المشيجي، الزيجوت، الطور الحركي، وكيس البيض.",
                      "stepByStepSolutionEn": [
                            "1. Sporozoite: Haploid (n).",
                            "2. Merozoite: Haploid (n).",
                            "3. Gametocyte: Haploid (n).",
                            "4. Zygote: Diploid (2n) - formed by gamete fusion in mosquito stomach cavity.",
                            "5. Ookinete: Diploid (2n) - motile elongated zygote.",
                            "6. Oocyst: Haploid (n) - formed when ookinete undergoes meiosis in stomach wall."
                      ],
                      "stepByStepSolutionAr": [
                            "١. السبوروزويت: أحادي المجموعة الصبغية (n).",
                            "٢. الميروزويت: أحادي المجموعة الصبغية (n).",
                            "٣. الطور المشيجي: أحادي المجموعة الصبغية (n).",
                            "٤. اللاقحة (الزيجوت): ثنائي المجموعة الصبغية (2n) باندماج الأمشاج بمعدة البعوضة.",
                            "٥. الطور الحركي (الأوكينيت): ثنائي المجموعة الصبغية (2n).",
                            "٦. كيس البيض: أحادي المجموعة الصبغية (n) لانقسام الطور الحركي ميوزياً."
                      ],
                      "teacherTipEn": "Notice that only Zygote and Ookinete are 2n; all other stages in human and mosquito are n.",
                      "teacherTipAr": "لاحظ جيداً: فقط الزيجوت والطور الحركي (2n)، بينما باقي جميع أطوار البلازموديوم (n).",
                      "hintEn": "Notice that only Zygote and Ookinete are 2n; all other stages in human and mosquito are n.",
                      "hintAr": "لاحظ جيداً: فقط الزيجوت والطور الحركي (2n)، بينما باقي جميع أطوار البلازموديوم (n)."
                },
                {
                      "id": "th_bio_ch3_se_04",
                      "titleEn": "Example 4: Spermatogenesis Quantitative Progression",
                      "titleAr": "مثال محلول ٤: الحسابات الكمية لمراحل تكوين الحيوانات المنوية",
                      "difficulty": "easy",
                      "questionEn": "If a male seminiferous tubule contains 50 primary spermatocytes, calculate: (a) secondary spermatocytes formed, (b) spermatids formed, and (c) mature spermatozoa produced.",
                      "questionAr": "إذا احتوت أنيبيبة منوية في ذكر إنسان على 50 خلية منوية أولية، فاحسب: (أ) عدد الخلايا المنوية الثانوية، (ب) عدد الطلايع المنوية، و(ج) عدد الحيوانات المنوية الناضجة المتكونة.",
                      "stepByStepSolutionEn": [
                            "1. Each primary spermatocyte (2n) undergoes Meiosis I to produce 2 secondary spermatocytes (n).",
                            "   Secondary spermatocytes = 50 * 2 = 100 cells.",
                            "2. Each secondary spermatocyte undergoes Meiosis II to produce 2 spermatids (n).",
                            "   Spermatids = 100 * 2 = 200 cells (or 50 * 4 = 200).",
                            "3. Each spermatid metamorphoses without division into 1 spermatozoon.",
                            "   Mature spermatozoa = 200 sperms."
                      ],
                      "stepByStepSolutionAr": [
                            "١. كل خلية منوية أولية (2n) تنقسم ميوزياً أول لتعطي خليتين منويتين ثانويتين (n).",
                            "   عدد الخلايا المنوية الثانوية = 50 × 2 = 100 خلية.",
                            "٢. كل خلية منوية ثانوية تنقسم ميوزياً ثان لتعطي طليعتين منويتين (n).",
                            "   عدد الطلائع المنوية = 100 × 2 = 200 طليعة منوية.",
                            "٣. كل طليعة منوية تتشكل نهائياً دون انقسام إلى حيوان منوي واحد.",
                            "   عدد الحيوانات المنوية الناضجة = 200 حيوان منوي."
                      ],
                      "teacherTipEn": "Primary spermatocyte yields 4 functional sperms; Primary oocyte yields only 1 functional ovum.",
                      "teacherTipAr": "المنوية الأولية تعطي 4 حيوانات منوية؛ بينما البيضية الأولية تعطي بويضة واحدة صالحة فقط و3 أجسام قطبية.",
                      "hintEn": "Primary spermatocyte yields 4 functional sperms; Primary oocyte yields only 1 functional ovum.",
                      "hintAr": "المنوية الأولية تعطي 4 حيوانات منوية؛ بينما البيضية الأولية تعطي بويضة واحدة صالحة فقط و3 أجسام قطبية."
                },
                {
                      "id": "th_bio_ch3_se_05",
                      "titleEn": "Example 5: Double Fertilization Endosperm Calculation",
                      "titleAr": "مثال محلول ٥: حسابات نسيج الإندوسبرم في الإخصاب المزدوج",
                      "difficulty": "medium",
                      "questionEn": "If a somatic cell of a wheat plant contains 42 chromosomes (2n = 42), calculate the chromosome number in: (a) a petal cell, (b) generative nucleus, (c) polar nucleus, (d) zygote, and (e) endosperm cell.",
                      "questionAr": "إذا كانت خلية جسدية لنبات القمح تحتوي على 42 كروموسوماً (2n = 42). احسب عدد الكروموسومات في: (أ) خلية من بتلة الزهرة، (ب) النواة المولدة، (ج) النواة القطبية، (د) الزيجوت، و(هـ) خلية من نسيج الإندوسبرم.",
                      "stepByStepSolutionEn": [
                            "Given 2n = 42, then n = 21 chromosomes.",
                            "1. Petal cell: Somatic cell (2n) = 42 chromosomes.",
                            "2. Generative nucleus: Haploid (n) = 21 chromosomes.",
                            "3. Polar nucleus: Haploid (n) = 21 chromosomes.",
                            "4. Zygote: Diploid (2n) = 42 chromosomes.",
                            "5. Endosperm cell: Triploid (3n) = 3 * 21 = 63 chromosomes."
                      ],
                      "stepByStepSolutionAr": [
                            "بما أن 2n = 42، إذن العدد الفردي n = 21 كروموسوماً.",
                            "١. خلية البتلة: خلية جسدية (2n) = 42 كروموسوماً.",
                            "٢. النواة المولدة: مشيجية أحادية (n) = 21 كروموسوماً.",
                            "٣. النواة القطبية: نواة مفردة بالكيس الجنيني (n) = 21 كروموسوماً.",
                            "٤. الزيجوت: ناتج اندماج مشيجين (2n) = 42 كروموسوماً.",
                            "٥. خلية الإندوسبرم: ثلاثية المجموعة (3n) = 3 × 21 = 63 كروموسوماً."
                      ],
                      "teacherTipEn": "Endosperm is 3n because it results from the fusion of 3 haploid nuclei (triple fusion).",
                      "teacherTipAr": "الإندوسبرم 3n لأنه ينتج من اندماج 3 أنوية أحادية (النواة الزكرية مع نواتي الكيس الجنيني).",
                      "hintEn": "Endosperm is 3n because it results from the fusion of 3 haploid nuclei (triple fusion).",
                      "hintAr": "الإندوسبرم 3n لأنه ينتج من اندماج 3 أنوية أحادية (النواة الزكرية مع نواتي الكيس الجنيني)."
                },
                {
                      "id": "th_bio_ch3_se_06",
                      "titleEn": "Example 6: Parthenogenesis in Honeybees vs Aphids",
                      "titleAr": "مثال محلول ٦: المقارنة بين التوالد البكري في نحل العسل وحشرة المن",
                      "difficulty": "medium",
                      "questionEn": "Contrast natural parthenogenesis in honeybees versus aphids regarding: sex of offspring, ploidy of eggs, and type of cellular division producing the ova.",
                      "questionAr": "قارن بين التوالد البكري الطبيعي في نحل العسل وحشرة المن من حيث: جنس الأفراد الناتجة، المجموعة الصبغية للبويضات، ونوع الانقسام المكون للبويضات.",
                      "stepByStepSolutionEn": [
                            "1. Honeybees: Queen produces haploid eggs (n) via MEIOSIS. Unfertilized eggs develop exclusively into MALES (drones, n).",
                            "2. Aphids: Female produces diploid eggs (2n) via MITOSIS in spring. Unfertilized eggs develop exclusively into FEMALES (2n)."
                      ],
                      "stepByStepSolutionAr": [
                            "١. نحل العسل: تضع الملكة بويضات أحادية (n) ناتجة بانقسام ميوزي، تنمو البويضات غير المخصبة لذكور فقط (n).",
                            "٢. حشرة المن: تضع الإناث بويضات ثنائية (2n) ناتجة بانقسام ميتوزي، تنمو البويضات غير المخصبة لإناث فقط (2n)."
                      ],
                      "teacherTipEn": "Aphid parthenogenesis yields 2n females; Bee parthenogenesis yields n males.",
                      "teacherTipAr": "التوالد البكري بالمن ينتج إناثاً 2n؛ بينما بنحل العسل ينتج ذكوراً n.",
                      "hintEn": "Aphid parthenogenesis yields 2n females; Bee parthenogenesis yields n males.",
                      "hintAr": "التوالد البكري بالمن ينتج إناثاً 2n؛ بينما بنحل العسل ينتج ذكوراً n."
                },
                {
                      "id": "th_bio_ch3_se_07",
                      "titleEn": "Example 7: Contraceptive Mechanisms Comparison",
                      "titleAr": "مثال محلول ٧: المقارنة الفسيولوجية بين وسائل منع الحمل",
                      "difficulty": "hots",
                      "questionEn": "Explain the precise physiological mechanism of contraception for: (a) Contraceptive pills, (b) Intrauterine device (IUD), and (c) Tubal ligation.",
                      "questionAr": "وضح الآلية الفسيولوجية الدقيقة لمنع الحمل في كل من: (أ) أقراص منع الحمل، (ب) اللولب، و(ج) التعقيم الجراحي بربط قناتي فالوب.",
                      "stepByStepSolutionEn": [
                            "1. Contraceptive Pills: Contain synthetic estrogen and progesterone; taken for 21 days to exert negative feedback on pituitary, inhibiting FSH and LH secretion, thereby preventing ovulation entirely.",
                            "2. Intrauterine Device (IUD): Inserted into uterine cavity; does not stop ovulation or fertilization, but prevents the fertilized blastocyst from implanting in the uterine endometrium.",
                            "3. Tubal Ligation: Both Fallopian tubes are severed and ligated; ovulation continues normally, but sperms cannot reach the secondary oocyte in the ampulla, preventing fertilization."
                      ],
                      "stepByStepSolutionAr": [
                            "١. أقراص منع الحمل: تحتوي هرمونات صناعية شبيهة بالإستروجين والبروجسترون تؤخذ لـ 21 يوماً؛ تثبط إفراز FSH و LH من النخامية فتمنع التبويض تماماً.",
                            "٢. اللولب: يستقر في تجويف الرحم؛ لا يمنع التبويض ولا يمنع الإخصاب بقناة فالوب، ولكنه يمنع استقرار وانغراس البويضة المخصبة (التوتية) في بطانة الرحم.",
                            "٣. ربط قناتي فالوب: قطع وربط القناتين؛ يحدث التبويض طبيعياً، ولكنه يمنع التقاء الحيوانات المنوية بالبويضة بقناة فالوب فيمنع الإخصاب."
                      ],
                      "teacherTipEn": "Pills stop ovulation; IUD stops implantation; Condoms and Ligation stop fertilization.",
                      "teacherTipAr": "الأقراص تمنع التبويض؛ اللولب يمنع الاستقرار بالرحم؛ الواقي والربط يمنعان الإخصاب.",
                      "hintEn": "Pills stop ovulation; IUD stops implantation; Condoms and Ligation stop fertilization.",
                      "hintAr": "الأقراص تمنع التبويض؛ اللولب يمنع الاستقرار بالرحم؛ الواقي والربط يمنعان الإخصاب."
                },
                {
                      "id": "th_bio_ch3_se_08",
                      "titleEn": "Example 8: Syngamy and Polar Bodies in Oogenesis",
                      "titleAr": "مثال محلول ٨: لحظة الانقسام الميوزي الثاني وتكوين الأجسام القطبية",
                      "difficulty": "hots",
                      "questionEn": "Why is the second meiotic division (Meiosis II) in human female oogenesis referred to as a 'conditional or deferred division'?",
                      "questionAr": "علل: يسمى الانقسام الميوزي الثاني في تكوين البويضة بالانقسام المؤجل أو المشروط.",
                      "stepByStepSolutionEn": [
                            "1. At ovulation, the released gamete is not a mature ovum, but a secondary oocyte arrested in Metaphase II.",
                            "2. Meiosis II does not take place unless a sperm penetrates the outer zona pellucida of the secondary oocyte in the Fallopian tube.",
                            "3. Upon sperm entry, Meiosis II promptly completes, producing the mature haploid ovum nucleus and the second polar body. In the absence of sperm entry, the secondary oocyte disintegrates without ever completing Meiosis II."
                      ],
                      "stepByStepSolutionAr": [
                            "١. المشيج الأنثوي المتحرر عند التبويض ليس بويضة ناضجة بل خلية بيضية ثانوية متوقفة في الطور الاستوائي الميوزي الثاني.",
                            "٢. لا يتم الانقسام الميوزي الثاني إلا بلحظة دخول رأس الحيوان المنوي وتخصيب غشاء الخلية البيضية الثانوية بالثلث الأول لقناة فالوب.",
                            "٣. بمجرد الاختراق يكتمل الانقسام الميوزي الثاني فوراً لإنتاج بويضة ناضجة وجسم قطبي ثان؛ وإذا لم يحدث إخصاب تتحلل الخلية البيضية الثانوية دون اكتماله."
                      ],
                      "teacherTipEn": "Condition for Meiosis II = Sperm penetration (Fertilization).",
                      "teacherTipAr": "شرط اكتمال الميوزي الثاني = وصول واختراق الحيوان المنوي (لحظة الإخصاب).",
                      "hintEn": "Condition for Meiosis II = Sperm penetration (Fertilization).",
                      "hintAr": "شرط اكتمال الميوزي الثاني = وصول واختراق الحيوان المنوي (لحظة الإخصاب)."
                },
                {
                      "id": "th_bio_ch3_se_09",
                      "titleEn": "Example 9: False Fruits & Parthenocarpy Distinction",
                      "titleAr": "مثال محلول ٩: التمييز العلمي بين الثمرة الكاذبة والإثمار العذري",
                      "difficulty": "medium",
                      "questionEn": "Differentiate between a false fruit (e.g., Apple) and parthenocarpy (e.g., Seedless Banana) in terms of structure, fertilization, and seed content.",
                      "questionAr": "قارن بين مفهومي الثمرة الكاذبة (كالتفاح) والإثمار العذري (كالموز والأناناس) من حيث: التركيب، حدوث الإخصاب، ووجود البذور.",
                      "stepByStepSolutionEn": [
                            "1. False Fruit: Normal double fertilization occurs, forming true seeds inside. However, a floral whorl other than the ovary (the floral receptacle in apple) swells with nutrients to form the edible fruit fleshy layer.",
                            "2. Parthenocarpy: Ovary wall is stimulated by natural or artificial auxins to swell into a fleshy fruit WITHOUT any fertilization occurring. Consequently, the fruit is completely devoid of seeds (seedless)."
                      ],
                      "stepByStepSolutionAr": [
                            "١. الثمرة الكاذبة: يحدث إخصاب وتتكون بذور حقيقية بالداخل، ولكن يتشحم جزء زهري آخر غير المبيض (مثل التخت في التفاح) ليصبح هو الجزء المأكول.",
                            "٢. الإثمار العذري: يتشحم جدار المبيض طبيعياً أو برش الأوكسينات دون حدوث أي إخصاب، والنتيجة تكوين ثمار خالية تماماً من البذور (كالموز والبرتقال أبو سرة)."
                      ],
                      "teacherTipEn": "Apples have seeds (false fruit); Bananas lack seeds (parthenocarpy). Parthenocarpy is NOT reproduction because it produces no offspring.",
                      "teacherTipAr": "التفاح به بذور (ثمرة كاذبة)؛ الموز لا بذور له (إثمار عذري). الإثمار العذري ليس تكاثراً لأنه لا ينتج أفراداً جديدة.",
                      "hintEn": "Apples have seeds (false fruit); Bananas lack seeds (parthenocarpy). Parthenocarpy is NOT reproduction because it produces no offspring.",
                      "hintAr": "التفاح به بذور (ثمرة كاذبة)؛ الموز لا بذور له (إثمار عذري). الإثمار العذري ليس تكاثراً لأنه لا ينتج أفراداً جديدة."
                },
                {
                      "id": "th_bio_ch3_se_10",
                      "titleEn": "Example 10: Spirogyra Scalariform vs Lateral Conjugation",
                      "titleAr": "مثال محلول ١٠: الاقتران السلمي والجانبي في طحلب الإسبيروجيرا",
                      "difficulty": "hots",
                      "questionEn": "Describe how Spirogyra reproduces sexually under drought or cold conditions, contrasting scalariform versus lateral conjugation.",
                      "questionAr": "وضح كيفية تكاثر طحلب الإسبيروجيرا (ريم البرك) جنسياً في الظروف غير المناسبة كالجفاف وبرودة الماء، مقارناً بين الاقتران السلمي والجانبي.",
                      "stepByStepSolutionEn": [
                            "1. Scalariform Conjugation (الاقتران السلمي): Occurs between two parallel adjacent filaments. A conjugation tube grows between opposing cells; protoplast of one cell condenses and migrates through the tube to fuse with the other cell protoplast, forming a diploid zygote (2n). It yields greater genetic variation.",
                            "2. Lateral Conjugation (الاقتران الجانبي): Occurs between two neighboring cells within the SAME single filament via an opening in the dividing cross-wall. It produces less genetic variation but ensures survival when only one filament is present.",
                            "3. In both cases, zygote secretes a thick chitinous wall forming a zygospore (2n) that remains dormant until water returns, then undergoes MEIOSIS before germinating to restore the haploid (n) vegetative filament."
                      ],
                      "stepByStepSolutionAr": [
                            "١. الاقتران السلمي: يحدث بين خيطين متجاورين طولياً؛ تنمو قناة اقتران بين الخليتين المتقابلتين، ويتكور سيتوبلازم إحدى الخليتين ويهاجر عبر القناة ليلتحم مع الأخرى مكوناً لاقحة (2n)؛ يتيح تنوعاً وراثياً أكبر.",
                            "٢. الاقتران الجانبي: يحدث بين خليتين متجاورتين في نفس الخيط الطحلبي الواحد عبر فتحة في الجدار الفاصل بينهما؛ تنوع وراثي أقل لكنه يضمن التكاثر في وجود خيط منفرد.",
                            "٣. في كلتا الحالتين تحاط اللاقحة بجدار سميك مكونة لاقحة جرثومية (زيجوسبور 2n) تقاوم الجفاف؛ وعند تحسن الظروف تنقسم ميوزياً قبل الإنبات ليعود الخيط الطحلبي أحادي المجموعة (n)."
                      ],
                      "teacherTipEn": "Meiosis in Spirogyra occurs UPON GERMINATION, not during zygospore formation.",
                      "teacherTipAr": "تذكر دائماً: الانقسام الميوزي في الإسبيروجيرا يحدث عند الإنبات وليس أثناء الاقتران.",
                      "hintEn": "Meiosis in Spirogyra occurs UPON GERMINATION, not during zygospore formation.",
                      "hintAr": "تذكر دائماً: الانقسام الميوزي في الإسبيروجيرا يحدث عند الإنبات وليس أثناء الاقتران."
                }
          ],
          "exerciseProblems": [
                {
                      "id": "th_bio_ch3_ex_01",
                      "titleEn": "Exercise 1: Plasmodium Malaria Ingestion Stage",
                      "titleAr": "تمرين ١: الطور المعدي لأنثى بعوضة الأنوفيلس",
                      "difficulty": "easy",
                      "questionEn": "Which stage of the malaria parasite (Plasmodium) is sucked from human blood by the female Anopheles mosquito to continue its sexual life cycle?",
                      "questionAr": "أي أطوار بلازموديوم الملاريا تمتصه أنثى بعوضة الأنوفيلس من دم الإنسان المصاب لتستكمل دورة حياتها الجنسية؟",
                      "optionsEn": [
                            "Gametocytes",
                            "Sporozoites",
                            "Merozoites",
                            "Oocysts"
                      ],
                      "optionsAr": [
                            "الأطوار المشيجية",
                            "السبوروزويتات",
                            "الميروزويتات",
                            "أكياس البيض"
                      ],
                      "correctAnswer": "Gametocytes",
                      "correctIndex": 0,
                      "hintEn": "They differentiate into mature gametes inside the mosquito stomach cavity.",
                      "hintAr": "تتحول إلى أمشاج مذكرة ومؤنثة داخل تجويف معدة البعوضة.",
                      "stepByStepSolutionEn": [
                            "Gametocytes circulate in human peripheral blood.",
                            "When sucked by the mosquito, they enter its stomach cavity and mature into gametes for fertilization."
                      ],
                      "stepByStepSolutionAr": [
                            "تنتقل الأطوار المشيجية في تيار دم المريض.",
                            "عندما تسحبها البعوضة تنضج داخل تجويف معدتها وتندمج مكونة اللاقحة."
                      ],
                      "teacherTipEn": "Infective stage for humans = Sporozoite; Infective stage for mosquito = Gametocyte.",
                      "teacherTipAr": "الطور المعدي للإنسان هو السبوروزويت؛ بينما الطور المعدي للبعوضة هو الطور المشيجي."
                },
                {
                      "id": "th_bio_ch3_ex_02",
                      "titleEn": "Exercise 2: Chromosome Ploidy of Drone Honeybee",
                      "titleAr": "تمرين ٢: المجموعة الصبغية لخلايا ذكر نحل العسل",
                      "difficulty": "easy",
                      "questionEn": "What is the chromosomal constitution of a somatic cell and a sperm cell in a male honeybee (drone)?",
                      "questionAr": "ما التركيب الصبغي للخلية الجسدية والحيوان المنوي في ذكر نحل العسل؟",
                      "optionsEn": [
                            "Somatic cell is 2n, sperm is n",
                            "Both somatic cell and sperm are haploid (n)",
                            "Somatic cell is 3n, sperm is 2n",
                            "Both somatic cell and sperm are diploid (2n)"
                      ],
                      "optionsAr": [
                            "الخلية الجسدية 2n والحيوان المنوي n",
                            "كلا الخلية الجسدية والحيوان المنوي أحادي المجموعة الصبغية (n)",
                            "الخلية الجسدية 3n والحيوان المنوي 2n",
                            "كلا الخلية الجسدية والحيوان المنوي ثنائي المجموعة الصبغية (2n)"
                      ],
                      "correctAnswer": "Both somatic cell and sperm are haploid (n)",
                      "correctIndex": 1,
                      "hintEn": "Male honeybees develop from unfertilized eggs and divide by mitosis.",
                      "hintAr": "ينشأ الذكر من بويضة غير مخصبة وينتج حيواناته المنوية بالانقسام الميتوزي.",
                      "stepByStepSolutionEn": [
                            "Male honeybees originate from unfertilized haploid eggs (n) via parthenogenesis.",
                            "All their somatic cells are haploid (n), and their gametes are formed by mitosis, remaining haploid (n)."
                      ],
                      "stepByStepSolutionAr": [
                            "ينشأ ذكر النحل من بويضة غير مخصبة (n) بالتوالد البكري.",
                            "جميع خلاياه الجسدية أحادية (n)، وينتج أمشاجه بالانقسام الميتوزي فتظل (n)."
                      ],
                      "teacherTipEn": "Male honeybees produce sperms by MITOSIS, not meiosis.",
                      "teacherTipAr": "ينتج ذكر نحل العسل حيواناته المنوية بالانقسام الميتوزي وليس الميوزي."
                },
                {
                      "id": "th_bio_ch3_ex_03",
                      "titleEn": "Exercise 3: Origin of Pericarp in True Fruits",
                      "titleAr": "تمرين ٣: أصل غلاف الثمرة في الثمار الحقيقية",
                      "difficulty": "medium",
                      "questionEn": "In true flowering plant fruits, which floral part develops directly into the fleshy fruit pericarp after fertilization?",
                      "questionAr": "في الثمار الحقيقية للنباتات الزهرية، أي الأجزاء الزهرية يتحول مباشرة إلى غلاف وجدار الثمرة بعد الإخصاب؟",
                      "optionsEn": [
                            "The stamen anther",
                            "The style duct",
                            "The ovary wall",
                            "The calyx sepals"
                      ],
                      "optionsAr": [
                            "متك السداة",
                            "قناة القلم",
                            "جدار المبيض",
                            "سبلات الكأس"
                      ],
                      "correctAnswer": "The ovary wall",
                      "correctIndex": 2,
                      "hintEn": "The ovary becomes the fruit; the ovule becomes the seed.",
                      "hintAr": "المبيض يتحول إلى الثمرة، والبويضة تتحول إلى البذرة.",
                      "stepByStepSolutionEn": [
                            "After fertilization, the ovary enlarges under auxin stimulation.",
                            "Its wall thickens and ripens into the fruit pericarp surrounding the seeds."
                      ],
                      "stepByStepSolutionAr": [
                            "بعد الإخصاب يتضخم المبيض بتأثير الأوكسينات.",
                            "يتحول جدار المبيض إلى غلاف الثمرة الذي يحمي البذور بالداخل."
                      ],
                      "teacherTipEn": "Ovary wall -> Fruit wall; Ovule integument -> Seed coat (Testa).",
                      "teacherTipAr": "جدار المبيض -> غلاف الثمرة؛ أغلفة البويضة -> القصرة (غلاف البذرة)."
                },
                {
                      "id": "th_bio_ch3_ex_04",
                      "titleEn": "Exercise 4: Site of Human Fertilization",
                      "titleAr": "تمرين ٤: موقع إخصاب البويضة في الجهاز التناسلي الأنثوي",
                      "difficulty": "easy",
                      "questionEn": "In which anatomical location does physiological fertilization of the secondary oocyte by a spermatozoon normally take place in the human female?",
                      "questionAr": "في أي موقع تشريحي يحدث الإخصاب الطبيعي للخلية البيضية الثانوية بالحيوان المنوي في أنثى الإنسان؟",
                      "optionsEn": [
                            "Inside the uterine cervix",
                            "Inside the vaginal canal",
                            "Inside the ovarian stroma",
                            "In the first third (ampulla) of the Fallopian tube"
                      ],
                      "optionsAr": [
                            "داخل عنق الرحم",
                            "داخل تجويف المهبل",
                            "داخل نسيج المبيض",
                            "في الثلث الأول (بداية) قناة فالوب"
                      ],
                      "correctAnswer": "In the first third (ampulla) of the Fallopian tube",
                      "correctIndex": 3,
                      "hintEn": "The funnel receives the oocyte, and fertilization occurs immediately at the tubular beginning.",
                      "hintAr": "يستقبل القمع البويضة ويتم الإخصاب في بداية القناة مباشرة.",
                      "stepByStepSolutionEn": [
                            "The secondary oocyte is swept by the fimbriae into the Fallopian tube funnel.",
                            "Fertilization occurs in the upper third (ampulla) of the Fallopian tube within 24 to 48 hours of ovulation."
                      ],
                      "stepByStepSolutionAr": [
                            "تلتقط الزوائد الإصبعية لقمع فالوب الخلية البيضية الثانوية.",
                            "يتم الإخصاب في الثلث الأول من قناة فالوب خلال يوم إلى يومين من التبويض."
                      ],
                      "teacherTipEn": "If fertilization does not happen in the first third of Fallopian tube, the oocyte dies.",
                      "teacherTipAr": "إذا لم تخصب البويضة في الثلث الأول لقناة فالوب فإنها تتحلل وتموت."
                },
                {
                      "id": "th_bio_ch3_ex_05",
                      "titleEn": "Exercise 5: Triple Fusion Components",
                      "titleAr": "تمرين ٥: مكونات الاندماج الثلاثي في الكيس الجنيني",
                      "difficulty": "medium",
                      "questionEn": "Which nuclei participate in the 'triple fusion' event inside the embryo sac of flowering plants?",
                      "questionAr": "أي الأنوية تشارك في حدث 'الاندماج الثلاثي' داخل الكيس الجنيني للنباتات الزهرية؟",
                      "optionsEn": [
                            "One male gamete nucleus (n) + Two polar nuclei of the embryo sac (n + n)",
                            "Two male gamete nuclei (n + n) + One egg nucleus (n)",
                            "Three antipodal cell nuclei (n + n + n)",
                            "One sperm nucleus (n) + Two synergid nuclei (n + n)"
                      ],
                      "optionsAr": [
                            "نواة ذكرية واحدة (n) + نواتا الكيس الجنيني القطبيتان (n + n)",
                            "نواتان ذكريتان (n + n) + نواة البيضة (n)",
                            "ثلاث أنوية للخلايا السمتية (n + n + n)",
                            "نواة حيوان منوي (n) + نواتا الخليتين المساعدتين (n + n)"
                      ],
                      "correctAnswer": "One male gamete nucleus (n) + Two polar nuclei of the embryo sac (n + n)",
                      "correctIndex": 0,
                      "hintEn": "It yields the 3n endosperm.",
                      "hintAr": "ينتج عنه نواة الإندوسبرم (3n).",
                      "stepByStepSolutionEn": [
                            "The second male gamete (n) migrates to the center of the embryo sac.",
                            "It fuses with the two polar nuclei (n + n) to form the triploid endosperm nucleus (3n)."
                      ],
                      "stepByStepSolutionAr": [
                            "تهاجر النواة الزكرية الثانية (n) إلى مركز الكيس الجنيني.",
                            "تندمج مع نواتي الكيس الجنيني (n + n) لتكوين نواة الإندوسبرم (3n)."
                      ],
                      "teacherTipEn": "Triple fusion + Syngamy = Double fertilization.",
                      "teacherTipAr": "الاندماج الثلاثي + الإخصاب المشيجي = الإخصاب المزدوج."
                },
                {
                      "id": "th_bio_ch3_ex_06",
                      "titleEn": "Exercise 6: Hormone Maintaining Pregnancy in the First Trimester",
                      "titleAr": "تمرين ٦: الهرمون المثبت للحمل في الثلث الأول",
                      "difficulty": "medium",
                      "questionEn": "During the first three months of human pregnancy, which endocrine structure secretes the progesterone necessary to maintain the uterine lining?",
                      "questionAr": "خلال الأشهر الثلاثة الأولى من الحمل في الإنسان، أي التراكيب يفرز هرمون البروجسترون الضروري لتثبيت بطانة الرحم؟",
                      "optionsEn": [
                            "The anterior pituitary gland",
                            "The corpus luteum in the ovary",
                            "The uterine cervix",
                            "The adrenal cortex medulla"
                      ],
                      "optionsAr": [
                            "الفص الأمامي للغدة النخامية",
                            "الجسم الأصفر في المبيض",
                            "عنق الرحم",
                            "نخاع قشرة الكظر"
                      ],
                      "correctAnswer": "The corpus luteum in the ovary",
                      "correctIndex": 1,
                      "hintEn": "The placenta takes over this function starting in the 4th month.",
                      "hintAr": "تحل المشيمة محله في إفراز البروجسترون بدءاً من الشهر الرابع.",
                      "stepByStepSolutionEn": [
                            "The corpus luteum persists and actively secretes progesterone through the end of the third month.",
                            "At the beginning of the fourth month, the fully developed placenta assumes progesterone secretion, and the corpus luteum degenerates."
                      ],
                      "stepByStepSolutionAr": [
                            "يستمر الجسم الأصفر في النمو وإفراز البروجسترون حتى نهاية الشهر الثالث.",
                            "في بداية الشهر الرابع يضمر الجسم الأصفر وتتولى المشيمة المكتملة إفراز البروجسترون."
                      ],
                      "teacherTipEn": "Removal of the corpus luteum before the 4th month leads to miscarriage (abortion).",
                      "teacherTipAr": "استئصال المبيض المحتوي على الجسم الأصفر قبل الشهر الرابع يؤدي للإجهاض فوراً."
                },
                {
                      "id": "th_bio_ch3_ex_07",
                      "titleEn": "Exercise 7: Gametophyte Reproductive Organs in Ferns",
                      "titleAr": "تمرين ٧: الأعضاء الجنسية في الطور المشيجي للفوجير",
                      "difficulty": "hots",
                      "questionEn": "On the ventral surface of the heart-shaped prothallus (gametophyte) of Polypodium fern, where are the antheridia and archegonia situated?",
                      "questionAr": "على السطح السفلي للطور المشيجي القلبي لسخس الفوجير، أين تتواجد المناسل المذكرة (الأنثريديا) والمؤنثة (الأرشيجونيا)؟",
                      "optionsEn": [
                            "Both are located inside the upper green leaves of the sporophyte",
                            "Inside the underground rhizome vascular bundles",
                            "Archegonia are near the anterior apical notch; Antheridia are near the posterior rhizoids",
                            "Inside the airborne spore capsules"
                      ],
                      "optionsAr": [
                            "كلاهما داخل الأوراق الخضراء العلوية للطور الجرثومي",
                            "داخل الحزم الوعائية للريزوما الأرضية",
                            "الأرشيجونيا قرب الطرف العريض المتقدم (القمة)، والأنثريديا بالقرب من أشباه الجذور بالخلف",
                            "داخل كبسولات الجراثيم المحمولة بالهواء"
                      ],
                      "correctAnswer": "Archegonia are near the anterior apical notch; Antheridia are near the posterior rhizoids",
                      "correctIndex": 2,
                      "hintEn": "Archegonia are near the broad anterior notch, antheridia are amongst rhizoids.",
                      "hintAr": "الأرشيجونيا قرب الانخفاض الأمامي، والأنثريديا في الخلف بين أشباه الجذور.",
                      "stepByStepSolutionEn": [
                            "On the ventral heart-shaped surface, archegonia develop near the anterior notch.",
                            "Antheridia develop posteriorly near the base amidst the water-absorbing rhizoids."
                      ],
                      "stepByStepSolutionAr": [
                            "توجد الأرشيجونيا (المناسل المؤنثة) قرب مقدمة السطح السفلي العريض.",
                            "توجد الأنثريديا (المناسل المذكرة) في الجزء الخلفي بين أشباه الجذور."
                      ],
                      "teacherTipEn": "Both antheridia and archegonia are haploid (n) because the entire gametophyte is n.",
                      "teacherTipAr": "الأنثريديا والأرشيجونيا والسوابح المهدبة والبويضة كلها أحادية الصبغيات (n)."
                },
                {
                      "id": "th_bio_ch3_ex_08",
                      "titleEn": "Exercise 8: Monozygotic vs Dizygotic Twins Identification",
                      "titleAr": "تمرين ٨: التمييز التكويني للتوائم المتماثلة والمتآخية",
                      "difficulty": "medium",
                      "questionEn": "Which observation definitively confirms that two newborn twins are fraternal (dizygotic) rather than identical (monozygotic)?",
                      "questionAr": "أي الملاحظات السريرية التالية تؤكد بشكل قاطع أن التوأمين حديثي الولادة توأم متآخٍ (غير متماثل) وليس متماثلاً؟",
                      "optionsEn": [
                            "They have identical blood groups",
                            "They share the exact same birthday",
                            "Both are male with identical eye color",
                            "One is male and the other is female"
                      ],
                      "optionsAr": [
                            "لهما نفس فصيلة الدم تماماً",
                            "ولدا في نفس اليوم وبنفس الساعة",
                            "كلاهما ذكر ولهما نفس لون العيون",
                            "أحدهما ذكر والآخر أنثى"
                      ],
                      "correctAnswer": "One is male and the other is female",
                      "correctIndex": 3,
                      "hintEn": "Monozygotic twins develop from one zygote and must share the same sex.",
                      "hintAr": "التوأم المتماثل ناتج من لاقحة واحدة ولهما دائماً نفس الجنس حتماً.",
                      "stepByStepSolutionEn": [
                            "Identical (monozygotic) twins originate from a single zygote, so they are genetically identical and MUST have the same sex.",
                            "Fraternal (dizygotic) twins originate from two separate ova and two separate sperms, so they may be of opposite sex (one male, one female)."
                      ],
                      "stepByStepSolutionAr": [
                            "التوأم المتماثل ينشأ من بويضة واحدة وحيوان منوي واحد؛ لذلك لهما نفس التركيب الجيني ونفس الجنس حتماً.",
                            "التوأم المتآخي ينتج من بويضتين وحيوانين منويين؛ لذلك يمكن أن يختلفا في الجنس (ذكر وأنثى)."
                      ],
                      "teacherTipEn": "Opposite sex twins are 100% dizygotic.",
                      "teacherTipAr": "اختلاف جنس التوأم ينفي تماماً كونهما متماثلين."
                },
                {
                      "id": "th_bio_ch3_ex_09",
                      "titleEn": "Exercise 9: Microscopic Feature of Insect-Pollinated Pollen",
                      "titleAr": "تمرين ٩: التكيف التركيبي لحبوب اللقاح في التلقيح الحشري",
                      "difficulty": "easy",
                      "questionEn": "What characteristic structural adaptation is found in pollen grains of flowers pollinated by insects?",
                      "questionAr": "ما التكيف التركيبي المميز لحبوب اللقاح في أزهار النباتات التي يتم تلقيحها بواسطة الحشرات؟",
                      "optionsEn": [
                            "Rough, spiny, or sticky exine to adhere easily to insect bodies",
                            "Completely smooth wall with large aerodynamic air sacs",
                            "Absence of a generative nucleus",
                            "Total weight 100 times heavier than water"
                      ],
                      "optionsAr": [
                            "جدار خشن أو شوكي أو لزج ليلتصق بسهولة بأجسام الحشرات الزائرة",
                            "جدار أملس تماماً ومزود بأكياس هوائية طافية",
                            "انعدام وجود النواة المولدة",
                            "كتلتها أكبر بـ 100 مرة من الماء"
                      ],
                      "correctAnswer": "Rough, spiny, or sticky exine to adhere easily to insect bodies",
                      "correctIndex": 0,
                      "hintEn": "Stickiness helps transfer pollen via legs and thorax.",
                      "hintAr": "الخشونة واللزوجة تساعد على التعلق بجسم الحشرة.",
                      "stepByStepSolutionEn": [
                            "Insect-pollinated flowers produce heavy, sticky, or spiny pollen grains that cling to insect setae.",
                            "Wind-pollinated flowers, in contrast, produce light, smooth, winged pollen in massive quantities."
                      ],
                      "stepByStepSolutionAr": [
                            "تتميز حبوب لقاح التلقيح الحشري بكونها لزجة وخشنة لتعلق بشعر الحشرات.",
                            "بينما حبوب لقاح التلقيح الهوائي تكون خفيفة وملساء وأعدادها هائلة وتطفو بالهواء."
                      ],
                      "teacherTipEn": "Insect-pollinated: colorful petals, nectar, sticky pollen. Wind-pollinated: exposed hanging anthers, feathery stigmas.",
                      "teacherTipAr": "التلقيح الحشري: بتلات ملونة، رحيق، وحبوب لقاح خشنة؛ التلقيح الهوائي: متوك مدلاة ومياسم ريشية."
                },
                {
                      "id": "th_bio_ch3_ex_10",
                      "titleEn": "Exercise 10: Acrosome Enzyme Function in Fertilization",
                      "titleAr": "تمرين ١٠: وظيفة إنزيم الجسم القمي (الأكروسوم) في الإخصاب",
                      "difficulty": "medium",
                      "questionEn": "Which digestive enzyme is secreted by the acrosome of the sperm head to dissolve a path through the ovum coating?",
                      "questionAr": "أي الإنزيمات الهاضمة يفرزها الجسم القمي (الأكروسوم) في مقدمة رأس الحيوان المنوي لإذابة جزء من غلاف البويضة؟",
                      "optionsEn": [
                            "Amylase enzyme",
                            "Hyaluronidase enzyme",
                            "Peptidic ligase enzyme",
                            "RNA polymerase enzyme"
                      ],
                      "optionsAr": [
                            "إنزيم الأميليز",
                            "إنزيم الهيالورونيز",
                            "إنزيم الليجاز الببتيدي",
                            "إنزيم بلمرة RNA"
                      ],
                      "correctAnswer": "Hyaluronidase enzyme",
                      "correctIndex": 1,
                      "hintEn": "It breaks down hyaluronic acid binding the ovum follicular cells.",
                      "hintAr": "يحلل حمض الهيالورورنيك المتماسك بغلاف البويضة.",
                      "stepByStepSolutionEn": [
                            "The ovum is surrounded by a thick coat cemented by hyaluronic acid.",
                            "Millions of sperms secrete hyaluronidase to collectively dissolve the coat, allowing one sperm to penetrate."
                      ],
                      "stepByStepSolutionAr": [
                            "تحاط البويضة بغلاف متماسك بفعل حمض الهيالورورنيك.",
                            "تفرز ملايين الحيوانات المنوية إنزيم الهيالورونيز لإذابة الغلاف والسماح لحيوان منوي واحد بالاختراق."
                      ],
                      "teacherTipEn": "Millions of sperms are required because the hyaluronidase of one sperm is insufficient.",
                      "teacherTipAr": "يلزم ملايين الحيوانات المنوية للمشاركة في إذابة حمض الهيالورونيك."
                },
                {
                      "id": "th_bio_ch3_ex_11",
                      "titleEn": "Exercise 11: Blastocyst Implantation Day",
                      "titleAr": "تمرين ١١: توقيت انغراس التوتية في بطانة الرحم",
                      "difficulty": "hots",
                      "questionEn": "Approximately how many days after fertilization does the blastocyst (morula) reach the uterus and implant into the thickened endometrium?",
                      "questionAr": "بعد كم يوماً تقريباً من الإخصاب تصل التوتية إلى تجويف الرحم وتنغرس في بطانته السميكة؟",
                      "optionsEn": [
                            "After exactly 28 days",
                            "Immediately within 2 hours",
                            "Around the end of the first week (day 6 - 7)",
                            "In the middle of the third month"
                      ],
                      "optionsAr": [
                            "بعد 28 يوماً بالضبط",
                            "فوراً خلال ساعتين",
                            "في نهاية الأسبوع الأول تقريباً (اليوم 6 - 7)",
                            "في منتصف الشهر الثالث"
                      ],
                      "correctAnswer": "Around the end of the first week (day 6 - 7)",
                      "correctIndex": 2,
                      "hintEn": "It takes about 6-7 days for the dividing embryo to travel down the Fallopian tube.",
                      "hintAr": "تستغرق رحلة الجنين المفلج في قناة فالوب نحو أسبوع تقريباً.",
                      "stepByStepSolutionEn": [
                            "The zygote divides into 2 cells on day 1, 4 on day 2, forming a morula by day 4-5.",
                            "Driven by ciliary beats and muscular contractions of the tube, it enters the uterus and implants by days 6-7."
                      ],
                      "stepByStepSolutionAr": [
                            "تنقسم اللاقحة إلى خليتين بنهاية اليوم الأول ثم تتضاعف مكونة كتلة من الخلايا (التوتية).",
                            "تدفعها أهداب قناة فالوب لتصل للرحم وتنغرس بين ثنايا بطانته بنهاية الأسبوع الأول (اليوم 6 - 7)."
                      ],
                      "teacherTipEn": "Fallopian tube transit takes about 6 days before uterine implantation.",
                      "teacherTipAr": "تنغرس التوتية في نهاية الأسبوع الأول من الإخصاب."
                },
                {
                      "id": "th_bio_ch3_ex_12",
                      "titleEn": "Exercise 12: Tissue Culture Nutrient Medium",
                      "titleAr": "تمرين ١٢: الوسط الغذائي المستخدم في زراعة الأنسجة النباتية",
                      "difficulty": "easy",
                      "questionEn": "Which natural liquid medium was utilized by F.C. Steward in groundbreaking carrot tissue culture experiments due to its rich auxin and mineral content?",
                      "questionAr": "أي الأوساط السائلة الطبيعية استخدمه العالم ستيوارد في تجاربه الشهيرة لزراعة أنسجة نبات الجزر لغناه بالأوكسينات والعناصر الغذائية؟",
                      "optionsEn": [
                            "Distilled saline solution",
                            "Sulfuric acid bath",
                            "Boiled tap water",
                            "Coconut milk"
                      ],
                      "optionsAr": [
                            "محلول ملحي مقطر",
                            "حمام حمض الكبريتيك",
                            "ماء صنبور مغلي",
                            "لبن جوز الهند"
                      ],
                      "correctAnswer": "Coconut milk",
                      "correctIndex": 3,
                      "hintEn": "It is the liquid endosperm of the coconut seed.",
                      "hintAr": "السائل الإندوسبرمي المغذي لجنين جوز الهند.",
                      "stepByStepSolutionEn": [
                            "Coconut milk is rich in plant growth hormones (auxins, cytokinins) and essential organic nutrients.",
                            "Isolated carrot phloem cells cultured in coconut milk regenerated into complete, fertile carrot plants."
                      ],
                      "stepByStepSolutionAr": [
                            "يحتوي لبن جوز الهند على جميع الهرمونات النباتية والمغذيات اللازمة للنمو.",
                            "فصل ستيوارد خلايا من لحاء جذر الجزر ونماها في لبن جوز الهند فكونت نبات جزر كاملاً."
                      ],
                      "teacherTipEn": "Tissue culture proves that any somatic cell containing complete DNA can grow into a whole organism.",
                      "teacherTipAr": "تثبت زراعة الأنسجة أن الخلية النباتية التي تحتوي المعلومات الوراثية الكاملة قادرة على تكوين نبات كامل."
                },
                {
                      "id": "th_bio_ch3_ex_13",
                      "titleEn": "Exercise 13: Sertoli Cells Immunological and Nutritive Role",
                      "titleAr": "تمرين ١٣: الوظيفة المناعية والغذائية لخلايا سيرتولي",
                      "difficulty": "medium",
                      "questionEn": "In addition to nourishing developing spermatozoa inside the seminiferous tubules, what other vital role is attributed to Sertoli cells?",
                      "questionAr": "بالإضافة إلى تغذية الحيوانات المنوية داخل الأنيبيبات المنوية، ما الوظيفة الحيوية الأخرى المنسوبة لخلايا سيرتولي؟",
                      "optionsEn": [
                            "They are believed to play an immunological protective role for developing sperms",
                            "They secrete thyroid thyroxine into blood",
                            "They synthesize stomach hydrochloric acid",
                            "They break down pelvic bone ligaments"
                      ],
                      "optionsAr": [
                            "يُعتقد أن لها وظيفة مناعية لحماية الحيوانات المنوية النامية من الجهاز المناعي",
                            "تفرز هرمون الثيروكسين في الدم",
                            "تصنع حمض الهيدروكلوريك للمعدة",
                            "تكسر أربطة عظام الحوض"
                      ],
                      "correctAnswer": "They are believed to play an immunological protective role for developing sperms",
                      "correctIndex": 0,
                      "hintEn": "They act as part of the blood-testis barrier.",
                      "hintAr": "تشكل جزءاً من الحاجز الدموي الخصوي المناعي.",
                      "stepByStepSolutionEn": [
                            "Sertoli cells provide physical and nutritional support to developing spermatids.",
                            "They also form tight junctions constituting the blood-testis barrier, shielding haploid sperms from autoimmune attack."
                      ],
                      "stepByStepSolutionAr": [
                            "تفرز خلايا سيرتولي سائلاً يغذي الحيوانات المنوية بالخصية.",
                            "يعتقد العلماء أن لها وظيفة مناعية تحمي الحيوانات المنوية النامية من خلايا المناعة الذاتية."
                      ],
                      "teacherTipEn": "Sertoli cells = Nutrition + Immunity; Leydig cells = Testosterone.",
                      "teacherTipAr": "سيرتولي = تغذية ومناعة؛ الخلايا البينية = إفراز التستوستيرون."
                },
                {
                      "id": "th_bio_ch3_ex_14",
                      "titleEn": "Exercise 14: Relaxin Secretion Timing at Parturition",
                      "titleAr": "تمرين ١٤: توقيت إفراز هرمون الريلاكسين عند الولادة",
                      "difficulty": "medium",
                      "questionEn": "Which hormone increases significantly towards the end of pregnancy to facilitate birth by causing relaxation of the pubic symphysis?",
                      "questionAr": "أي الهرمونات يزداد إفرازه بشكل ملحوظ في نهاية فترة الحمل لتسهيل الولادة عبر ارتخاء الارتفاق العاني؟",
                      "optionsEn": [
                            "Glucagon",
                            "Relaxin",
                            "Calcitonin",
                            "Aldosterone"
                      ],
                      "optionsAr": [
                            "الجلوكاجون",
                            "الريلاكسين",
                            "الكالسيتونين",
                            "الألدوستيرون"
                      ],
                      "correctAnswer": "Relaxin",
                      "correctIndex": 1,
                      "hintEn": "Secreted by corpus luteum, placenta, and uterine lining.",
                      "hintAr": "يفرز من الجسم الأصفر والمشيمة وبطانة الرحم.",
                      "stepByStepSolutionEn": [
                            "Relaxin is secreted by the corpus luteum, endometrium, and placenta.",
                            "It relaxes the fibrocartilaginous pubic symphysis, widening the pelvic canal for the passage of the fetus."
                      ],
                      "stepByStepSolutionAr": [
                            "يفرز هرمون الريلاكسين من الجسم الأصفر والمشيمة وبطانة الرحم.",
                            "يعمل على ارتخاء الارتفاق العاني فيسهل خروج الجنين أثناء عملية الولادة."
                      ],
                      "teacherTipEn": "Oxytocin contracts the uterine muscles; Relaxin loosens the pubic symphysis joint.",
                      "teacherTipAr": "الأوكسيتوسين يقبض عضلات الرحم؛ والريلاكسين يرخي مفصل الارتفاق العاني."
                },
                {
                      "id": "th_bio_ch3_ex_15",
                      "titleEn": "Exercise 15: Regeneration in Starfish Limitation",
                      "titleAr": "تمرين ١٥: شرط التجدد التكاثري في نجم البحر",
                      "difficulty": "hots",
                      "questionEn": "Under what structural condition can an amputated arm of a starfish (Asterias) successfully regenerate into a complete new organism?",
                      "questionAr": "تحت أي شرط تركيبي يمكن لذراع مقطوع من نجم البحر أن ينجح في التجدد والتكاثر وتكوين فرد كامل جديد؟",
                      "optionsEn": [
                            "Only if exposed to intense ultraviolet radiation",
                            "Only if it was severed during a full solar eclipse",
                            "Only if the severed arm contains a portion of the central disc",
                            "Only if immersed in boiling freshwater"
                      ],
                      "optionsAr": [
                            "فقط إذا تعرض لإشعاع فوق بنفسجي مكثف",
                            "فقط إذا قُطع أثناء كسوف كلي للشمس",
                            "فقط إذا كان الذراع المقطوع يحتوي على جزء من القرص المركزي للحيوان",
                            "فقط إذا غُمر في ماء عذب مغلي"
                      ],
                      "correctAnswer": "Only if the severed arm contains a portion of the central disc",
                      "correctIndex": 2,
                      "hintEn": "The central disc contains the vital cells required for morphogenesis.",
                      "hintAr": "القرص المركزي يحتوي على الخلايا الحيوية القادرة على التمايز الكامل.",
                      "stepByStepSolutionEn": [
                            "In starfish, arm regeneration into a complete individual requires the presence of stem cells located in the central disc.",
                            "An isolated arm lacking any portion of the central disc withers and dies."
                      ],
                      "stepByStepSolutionAr": [
                            "يشترط لتجدد ذراع نجم البحر إلى فرد كامل أن يحتوي على قطعة من القرص المركزي.",
                            "إذا قُطع الذراع منفرداً دون أي جزء من القرص المركزي فإنه يتحلل ويموت."
                      ],
                      "teacherTipEn": "Fishermen used to cut starfish to kill them, unwittingly multiplying them instead!",
                      "teacherTipAr": "كان صيادو اللؤلؤ يقطعون نجم البحر ويلقونه بالبحر فيتكاثر بالتجدد ويفترس محار اللؤلؤ!"
                }
          ],
          "databank": bioCh3Databank
        },
    {
          "id": "th_bio_ch4",
          "chapterNumber": 4,
          "titleEn": "Immunity in Living Organisms",
          "titleAr": "المناعة في الكائنات الحية",
          "descriptionEn": "Comprehensive study of plant immune adaptations (structural and biochemical defense pathways), human lymphoid architecture (central and peripheral lymphoid organs, white blood cells, and natural killer cells), antibody molecular biochemistry and clonal selection, the 3 lines of physiological defense, and cellular cytotoxic cascades.",
          "descriptionAr": "دراسة شاملة للمناعة في النبات (التركيبية والبيوكيميائية)، الجهاز اللمفاوي في الإنسان (الأعضاء اللمفاوية، خلايا الدم البيضاء، الخلايا التائية والبائية والقاتلة الطبيعية)، الأجسام المضادة وآليات عملها، خطوط الدفاع الثلاثة، والمناعة الخلطية والخلوية وخلايا الذاكرة.",
          "isFullyEquipped": true,
          "lessons": [
                {
                      "id": "th_bio_ch4_l1",
                      "titleEn": "Plant Immunity & Human Lymphoid Architecture",
                      "titleAr": "المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي",
                      "summaryEn": "Plant structural defenses (cuticle, cork, tyloses) and biochemical defenses (receptors, canavanine, detoxifying enzymes), alongside human primary/secondary lymphoid organs, white blood cells, and natural killer cells.",
                      "summaryAr": "المناعة التركيبية (الفلين والتيلوزات والصموغ) والمناعة البيوكيميائية (المستقبلات والفينولات وإنزيمات نزع السمية) في النبات، والأعضاء اللمفاوية وخلايا الدم البيضاء اللمفاوية والبلعمية في الإنسان.",
                      "theoryContentEn": "### 1. Immunity in Plants\n- **Causes of Plant Disease & Injury:**\n  1. Unfavorable environmental conditions (temperature extremes, drought, nutrient deficiency) - mostly reversible.\n  2. Toxic substances (smoke, herbicides, polluted industrial water) - fatal or reversible.\n  3. Deadly enemies (fungi, bacteria, viruses, insects, grazing herbivores) - usually fatal.\n- **Structural Immunity (المناعة التركيبية):**\n  - **Pre-existing Structural Barriers (وسائل تركيبية موجودة أصلاً):**\n    1. **Epidermal Wall:** Coated by a waxy **cuticle** that prevents water accumulation (inhibiting fungal spore germination and bacterial proliferation); possessed of **thorns or hairs (trichomes)** preventing herbivore grazing and water pooling.\n    2. **Cellular Wall:** The outer cellulose boundary; strengthened with lignin in sclerenchyma cells, forming a formidable mechanical barrier against pathogen penetration.\n  - **Induced Structural Defenses (وسائل تركيبية مستحثة استجابة للإصابة):**\n    1. **Cork Formation (تكوين الفلين):** Insulates injured plant tissues caused by leaf fall, fruit picking, or growth in thickness, blocking pathogen ingress.\n    2. **Tyloses Formation (تكوين التيلوزات):** Balloon-like protrusions of adjacent xylem parenchyma cells that grow through pits into xylem vessels, blocking the upward spread of vascular fungi/bacteria.\n    3. **Gum Secretion (ترسيب الصموغ):** Secreted around wounded stem surfaces to seal breaches.\n    4. **Cellular Structural Modifications:** Swelling of parenchymal cell walls during fungal penetration; surrounding fungal hyphae with a protective sheath to prevent mycelial spread.\n    5. **Hypersensitivity (الحساسية المفرطة):** The plant intentionally kills its own infected tissue to deprive the obligate parasite of food and arrest its advance.\n- **Biochemical Immunity (المناعة البيوكيميائية):**\n  1. **Receptors (المستقبلات):** Compounds that recognize pathogen antigens and trigger the plant's systemic acquired resistance mechanisms (increase post-infection).\n  2. **Antimicrobial Chemicals:**\n     - **Phenols & Glucosides:** Toxic chemicals that kill bacteria or inhibit fungal spore growth.\n     - **Non-protein Amino Acids:** Such as **Canavanine** and **Cephalosporin**, which act as toxic deterrents against invading microbes.\n  3. **Antimicrobial Proteins:** Enzymes such as **De-toxifying Enzymes** that chemically neutralize bacterial toxins.\n\n### 2. The Human Lymphatic System\n- **Primary (Central) Lymphoid Organs:**\n  - **Red Bone Marrow (نخاع العظام الأحمر):** Found in flat bones (sternum, skull, pelvis, ribs) and epiphyseal heads of long bones (femur, humerus). Produces all blood cells (RBCs, WBCs, platelets) and matures **B-lymphocytes** and **Natural Killer (NK) cells**.\n  - **Thymus Gland (الغدة التيموسية):** Located on the trachea behind the sternum and above the heart. Secretes **Thymosin** hormone to stimulate the maturation of immature stem lymphocytes into **T-lymphocytes** and their differentiation into specialized subsets (Helper $T_h$, Cytotoxic $T_c$, and Suppressor $T_s$).\n- **Secondary (Peripheral) Lymphoid Organs:**\n  - **Spleen (الطحال):** Dark red organ on upper-left abdominal cavity. Contains abundant macrophages that phagocytose and destroy aged worn-out erythrocytes ($120$ days old), recycling their iron, and contains lymph follicles with lymphocytes.\n  - **Lymph Nodes (العقد الليمفاوية):** Small bead-like nodes ($1\\text{ mm} - 2\\text{ cm}$) distributed along lymphatic vessels (neck, armpits, groin, viscera). Filter lymph of microbes, debris, and cellular debris via networks of sinuses packed with B-cells, T-cells, and macrophages.\n  - **Tonsils (اللوزتان):** Located on both sides of the back of the pharynx; trap ingested or inhaled pathogens.\n  - **Peyer's Patches (بقع باير):** Small aggregates of lymphoid nodules in the mucous membrane lining the lower ileum of the small intestine; play an essential local mucosal immune surveillance role.\n",
                      "theoryContentAr": "### ١. المناعة في النبات\n- **مسببات المرض والموت في النبات:**\n  ١. الأعداء الخطرة (الفطريات، البكتيريا، الفيروسات، وحيوانات الرعي) - تسبب أضراراً بالغة قد تودي بحياة النبات.\n  ٢. الظروف غير الملائمة (الحرارة والبرودة الشديدة، نقص أو زيادة الماء، ونقص العناصر الغذائية) - أضرار يمكن تلافيها بزوال السبب.\n  ٣. المواد السامة (الدخان، المبيدات، ومياه الصرف غير المعالجة).\n- **المناعة التركيبية:**\n  - **وسائل تركيبية موجودة أصلاً (خط الدفاع الأول):**\n    ١. **طبقة الأدمة الخارجية:** مغطاة بطبقة شمعية (**الكيوتين**) تمنع استقرار الماء فلا تتوفر بيئة لإنبات جراثيم الفطريات وتكاثر البكتيريا؛ أو مزودة **بأشواك أو شعيرات** تمنع رعي الحيوانات وتجمع الماء.\n    ٢. **الجدار الخلوي:** يتكون أساساً من السليلوز ويتغلظ باللجنين، مشكلاً حاجزاً ميكانيكياً صلباً يصعب على الميكروب اختراقه.\n  - **وسائل تركيبية تتكون كاستجابة للإصابة:**\n    ١. **تكوين الفلين:** يعزل المناطق المقطوعة أو المجروحة لمنع دخول الميكروب (عند تساقط الأوراق أو جمع الثمار أو نمو الساق في السمك).\n    ٢. **تكوين التيلوزات:** نموات زائدة تنشأ من تمدد الخلايا البارنشيمية المجاورة لقصيبات الخشب وتبرز داخلها عبر النقر، لتسد أوعية الخشب وتمنع تحرك الميكروب للأعلى.\n    ٣. **ترسيب الصموغ:** تفرزها النباتات حول مواضع الجروح لمنع دخول البكتيريا.\n    ٤. **تراكيب مناعية خلوية:** انتفاخ الجدر الخلوية أثناء اختراق الفطر، أو إحاطة خيوط الغزل الفطري بغلاف عازل لمنع انتشاره.\n    ٥. **الحساسية المفرطة:** يتخلص النبات من الكائن الممرض بقتل نسيجه المصاب ذاتياً ليموت الميكروب جوعاً داخل الأنسجة الميتة.\n- **المناعة البيوكيميائية:**\n  ١. **المستقبلات:** مركبات تدرك وجود الميكروب وتنشط دفاعات النبات الفطرية الموروثة (يزداد تركيزها عقب الإصابة).\n  ٢. **مواد كيميائية مضادة للكائنات الدقيقة:**\n     - **الفينولات والجلوكوزيدات:** مواد كيميائية سامة تقتل الميكروبات أو تثبط نموها.\n     - **أحماض أمينية غير بروتينية:** مثل **الكاناڤانين** و**السيفالوسبورين**، تعمل كمواد واقية سامة للغزاة.\n  ٣. **بروتينات مضادة للكائنات الدقيقة:** مثل **إنزيمات نزع السمية** التي تتفاعل مع السموم التي تفرزها البكتيريا وتحولها لمواد غير سامة.\n\n### ٢. الجهاز الليمفاوي في الإنسان\n- **الأعضاء الليمفاوية الأولية (المركزية):**\n  - **نخاع العظام الأحمر:** يوجد في العظام المسطحة (القص، الجمجمة، الحوض، والضلوع) ورؤوس العظام الطويلة (الفخذ والعضد). يكون جميع خلايا الدم الحمراء والبيضاء والصفائح، ومسؤول عن نضج **الخلايا البائية (B)** و**الخلايا القاتلة الطبيعية (NK)**.\n  - **الغدة التيموسية:** تقع على القصبة الهوائية أعلى القلب وخلف القص. تفرز هرمون **التيموسين** الذي يحفز نضج الخلايا الليمفاوية الجذعية إلى **خلايا تائية (T)** وتمايزها إلى أنواعها (المساعدة Th، السامة Tc، والمثبطة Ts).\n- **الأعضاء الليمفاوية الثانوية (المحيطية):**\n  - **الطحال:** مقبرة كرات الدم الحمراء الهرمة (عمرها 120 يوماً)، يحتوي على بلعاميات كبيرة تبتلع الخلايا الميتة وتفككها ليعاد استخدام الحديد بالدم.\n  - **العقد الليمفاوية:** مصافي صغيرة (من 1 ملم إلى 2 سم) تنتشر بطول الأوعية الليمفاوية، وظيفتها تنقية الليمف من الميكروبات وحطام الخلايا بما تحتويه من خلايا بائية وتائية وبلعمية.\n  - **اللوزتان:** تقعان على جانبي الجزء الخلفي من الفم، وتلتقطان أي ميكروبات تدخل مع الهواء أو الطعام.\n  - **بقع باير:** عقد ليمفاوية صغيرة تنتشر في الغشاء المخاطي المبطن للجزء السفلي من الأمعاء الدقيقة (اللفائفي) لمقاومة ميكروبات القناة الهضمية.\n",
                      "formulas": [
                            {
                                  "labelEn": "Lymphocyte Ratio in Blood",
                                  "labelAr": "نسبة الخلايا اللمفاوية في الدم",
                                  "latex": "\\text{Lymphocytes} = 20\\% - 30\\% \\text{ of circulating WBCs}"
                            },
                            {
                                  "labelEn": "T-Lymphocyte Proportions",
                                  "labelAr": "نسب الخلايا التائية",
                                  "latex": "T\\text{-Cells} \\approx 80\\% \\quad [T_H (CD4^+), T_C (CD8^+), T_S (CD8^+)]"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH4-L1",
                            "pageRange": "pp. 169–196"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: Plant Immunity & Human Lymphoid Architecture",
                            "titleAr": "خطة درس: المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH4-L1",
                            "bloomsObjectivesEn": [
                                  "Analyze the biological structures and functional roles associated with Plant Immunity & Human Lymphoid Architecture.",
                                  "Evaluate experimental and quantitative evidence governing these cellular mechanisms.",
                                  "Synthesize physiological feedback mechanisms to solve exam-standard analytical problems."
                            ],
                            "bloomsObjectivesAr": [
                                  "تحليل التراكيب البيولوجية والأدوار الوظيفية المرتبطة بـ المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي.",
                                  "تقييم الأدلة التجريبية والكمية الحاكمة لهذه الآليات الخلوية.",
                                  "تطبيق آليات التغذية الراجعة الفسيولوجية لحل المسائل التحليلية المتقدمة."
                            ],
                            "prerequisitesEn": [
                                  "General cell biology",
                                  "Biomolecules and enzymes",
                                  "Basic human physiology"
                            ],
                            "prerequisitesAr": [
                                  "بيولوجيا الخلية العامة",
                                  "الجزيئات الحيوية والإنزيمات",
                                  "مبادئ الفسيولوجيا البشرية"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "Plant Immunity & Human Lymphoid Architecture",
                                        "definition": "Core concept of Plant Immunity & Human Lymphoid Architecture as defined in the official curriculum."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي",
                                        "definition": "المفهوم المحوري لـ المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي وفق نواتج التعلم المعتمدة."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Inquiry Hook & Real-world Context",
                                        "phaseAr": "التهيئة والربط بالواقع",
                                        "duration": "15 min",
                                        "activitiesEn": "Examining microscopic micrographs and physiological scenarios.",
                                        "activitiesAr": "مناقشة صور مجهرية وحالات فسيولوجية واقعية."
                                  },
                                  {
                                        "phaseEn": "Direct Instruction & Concept Exploration",
                                        "phaseAr": "التدريس المباشر واستكشاف المفاهيم",
                                        "duration": "35 min",
                                        "activitiesEn": "Interactive diagram tracing and biochemical pathway mapping.",
                                        "activitiesAr": "تتبع المسارات الكيميائية الحيوية على المخططات التفاعلية."
                                  },
                                  {
                                        "phaseEn": "Collaborative Problem Solving",
                                        "phaseAr": "التدريب التشاركي وحل المسائل",
                                        "duration": "25 min",
                                        "activitiesEn": "Working through high-order thinking multi-tier questions.",
                                        "activitiesAr": "حل مسائل متدرجة تقيس مهارات التفكير العليا."
                                  },
                                  {
                                        "phaseEn": "Closure & Formative Exit Ticket",
                                        "phaseAr": "الغلق وتقييم الخروج التكويني",
                                        "duration": "15 min",
                                        "activitiesEn": "Individual synthesis and exit ticket response.",
                                        "activitiesAr": "تقييم تكويني فردي للتحقق من تحقيق نواتج التعلم."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Confusing cause and effect in the hormonal or molecular feedback of Plant Immunity & Human Lymphoid Architecture."
                            ],
                            "commonMisconceptionsAr": [
                                  "الخلط بين السبب والنتيجة في آليات التغذية الراجعة الخاصة بـ المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي."
                            ],
                            "differentiationEn": {
                                  "struggling": "Provide annotated anatomical diagrams, concept flowcharts, and structured question hints.",
                                  "advanced": "Challenge with novel clinical case studies and multi-variable bioenergetic experiments."
                            },
                            "differentiationAr": {
                                  "struggling": "توفير مخططات تشريحية توضيحية وخرائط تدفق وتلميحات متدرجة للحل.",
                                  "advanced": "تكليف بدراسة حالات إكلينيكية وتصميم تجارب حيوية متعددة المتغيرات."
                            },
                            "formativeAssessmentEn": "What is the diagnostic significance and primary function of Plant Immunity & Human Lymphoid Architecture?",
                            "formativeAssessmentAr": "ما الأهمية الحيوية والدور الوظيفي الأساسي لـ المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي؟",
                            "exitTicketQuestion": {
                                  "questionEn": "Summarize the key physiological principle governing Plant Immunity & Human Lymphoid Architecture.",
                                  "questionAr": "لخص المبدأ الفسيولوجي الأساسي الحاكم لـ المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي.",
                                  "solutionEn": "Accurate statement of structural organization, molecular triggers, and physiological outcomes.",
                                  "solutionAr": "تحديد العلاقة الدقيقة بين البنية الجزيئية والمحفزات الحيوية والنتيجة الفسيولوجية."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch4_l1_ws",
                            "titleEn": "Worksheet: Plant Immunity & Human Lymphoid Architecture",
                            "titleAr": "ورقة عمل: المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي",
                            "descriptionEn": "Comprehensive problem sheet reinforcing key principles and exam problem patterns for Plant Immunity & Human Lymphoid Architecture.",
                            "descriptionAr": "ورقة تدريبية شاملة لترسيخ المفاهيم وأنماط الأسئلة الامتحانية لـ المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch4_l1_ws_p1",
                                        "titleEn": "Core Standard Question: Plant Immunity & Human Lymphoid Architecture",
                                        "titleAr": "سؤال قياسي: المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي",
                                        "difficulty": "medium",
                                        "questionEn": "Which statement best characterizes the official biological mechanism of Plant Immunity & Human Lymphoid Architecture according to national curriculum standards?",
                                        "questionAr": "أي العبارات التالية تصف بدقة الآلية البيولوجية لـ المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي وفقاً لمعايير المنهج الوزاري المعتمد؟",
                                        "optionsEn": [
                                              "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                              "Spontaneous non-enzymatic decay lacking cellular or genetic control",
                                              "Static unchanging equilibrium that does not respond to environmental stimuli",
                                              "Complete cellular shutdown during normal physiological homeostasis"
                                        ],
                                        "optionsAr": [
                                              "تفاعلات جزيئية متخصصة خاضعة للتنظيم عبر المستقبلات والمسارات الإنزيمية الدقيقة",
                                              "تحلل عشوائي تلقائي بدون أي تحكم خلوي أو وراثي",
                                              "اتزان استاتيكي جامد لا يستجيب لأي مؤثرات بيئية أو هرمونية",
                                              "توقف كامل للنشاط الخلوي أثناء الأداء الفسيولوجي الطبيعي"
                                        ],
                                        "correctAnswer": "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                        "correctIndex": 0,
                                        "hintEn": "Focus on the regulated, highly specific nature of physiological and genetic mechanisms.",
                                        "hintAr": "ركز على الطبيعة المنظمة وعالية التخصص للآليات الفسيولوجية والوراثية.",
                                        "stepByStepSolutionEn": [
                                              "Analyze the biological process described in the curriculum.",
                                              "Biological mechanisms operate through specific receptor, enzymatic, or structural cascades.",
                                              "This statement correctly represents the verified scientific curriculum standard."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "تحليل الآلية الحيوية المحددة في المنهج.",
                                              "تعمل الآليات البيولوجية من خلال تسلسلات متخصصة من المستقبلات والإنزيمات.",
                                              "هذه الإجابة تمثل بدقة المفهوم العلمي المعتمد في كتاب الوزارة."
                                        ],
                                        "teacherTipEn": "Remind students that biological control is always dynamic, specific, and regulated.",
                                        "teacherTipAr": "تذكير الطلاب بأن التحكم البيولوجي يتسم دائماً بالدقة والتخصص والتنظيم الفسيولوجي."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Interactive Simulation: Plant Immunity & Human Lymphoid Architecture",
                            "titleAr": "محاكاة تفاعلية: المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي",
                            "descriptionEn": "Interactive virtual laboratory exploring dynamic variables in Plant Immunity & Human Lymphoid Architecture.",
                            "descriptionAr": "محاكاة تفاعلية لاستكشاف المتغيرات الفسيولوجية في المناعة في النبات وأعضاء وخلايا الجهاز اللمفاوي."
                      }
                },
                {
                      "id": "th_bio_ch4_l2",
                      "titleEn": "Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated)",
                      "titleAr": "خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة",
                      "summaryEn": "Complement system, interferons, antibody structure and 5 modes of action, 2nd line inflammation, and 3rd line adaptive humoral (B-cell antibodies) vs cell-mediated (TC perforin/granzymes) immunity.",
                      "summaryAr": "المتممات، الإنترفيرونات، تركيب الأجسام المضادة وآليات عملها، الاستجابة بالالتهاب، والمناعة المكتسبة التكيفية بشقيها الخلطي بالأجسام المضادة والخلوي بالخلايا التائية والبيرفورين وخلايا الذاكرة.",
                      "theoryContentEn": "### 3. White Blood Cells & Immune Effector Cells\n- **Lymphocytes ($20-30\\%$ of total circulating leukocytes):**\n  1. **B-Lymphocytes ($10-15\\%$ of lymphocytes):** Mature in bone marrow; upon activation by antigen and helper T-cell cytokines, differentiate into **Plasma B cells** that secrete circulating **Antibodies (Immunoglobulins)**, and long-lived **Memory B cells**.\n  2. **T-Lymphocytes ($80\\%$ of lymphocytes):** Mature in the thymus under thymosin:\n     - **Helper T-cells ($T_h$, $\\text{CD4}^+$):** Master orchestrators; recognize antigen-MHC Class II complex on macrophages, secrete **Interleukins** to activate B-cells and **Cytokines** to recruit and activate cytotoxic T-cells, macrophages, and NK cells.\n     - **Cytotoxic T-cells ($T_c$, $\\text{CD8}^+$):** Attack foreign transplanted tissues, cancer cells, and virus-infected cells by secreting **Perforin** (pore-forming protein that perforates target membrane) and **Granzymes (Lymphotoxins)** that activate target cell apoptosis (programmed cell death).\n     - **Suppressor / Regulatory T-cells ($T_s$, $\\text{CD8}^+$):** Secrete **Lymphokines** after pathogen clearance to suppress and terminate the immune response, inducing apoptosis in excess plasma cells and returning immune activity to baseline homeostasis.\n  3. **Natural Killer (NK) Cells ($5-10\\%$ of lymphocytes):** Non-specific innate lymphocytes; attack tumor cells and virus-infected cells by secreting lytic enzymes.\n- **Other Leukocytes:**\n  - **Phagocytes:** Monocytes (differentiate into fixed or wandering Macrophages), Neutrophils (most abundant granulocyte, phagocytic), Eosinophils, and Basophils (release histamine in allergic inflammation).\n\n### 4. Antibodies (Immunoglobulins - Igs)\n- Y-shaped glycoproteins synthesized exclusively by plasma B-cells.\n- **Molecular Structure:**\n  - Consists of **4 polypeptide chains**: 2 identical Heavy chains and 2 identical Light chains linked by **disulfide bonds**.\n  - **Variable Region (Fab):** Forms the specific antigen-binding site at the tip of each arm (2 identical antigen-binding sites per Y-monomer); complementary in shape like a lock and key to a specific epitope.\n  - **Constant Region (Fc):** Identical across a class; anchors to macrophage or complement receptors.\n- **Five Classes:** **IgG, IgM, IgA, IgD, IgE** (mnemonic: GAMED).\n  - **IgM:** Pentameric structure with **10 antigen-binding sites**; highly effective in agglutination.\n- **Mechanisms of Antibody Action:**\n  1. **Neutralization (التعادل):** Coating viral coat proteins or bacterial toxins to prevent attachment to host cell receptors.\n  2. **Agglutination (التلازن / الالتصاق):** Cross-linking multiple microbes together into clumps (especially by pentameric IgM), facilitating rapid phagocytosis.\n  3. **Precipitation (الترسيب):** Binding soluble antigens to form insoluble lattice precipitates easily devoured by phagocytes.\n  4. **Lysis (التحلل):** Activating the **Complement System**, which drills holes into the microbial cell wall, causing osmotic bursting.\n  5. **Antitoxin Action (إبطال مفعول السموم):** Antibodies bind toxins and activate complements to biochemically degrade toxins into harmless compounds.\n\n### 5. Dual Adaptive Immunity: Humoral vs Cell-Mediated\n- **Humoral Immunity (المناعة بالخلطية / بالأجسام المضادة):**\n  - Defends against extracellular pathogens, free bacteria, and circulating toxins in blood and lymph.\n  - Mediated by **Plasma B cells** producing specific **antibodies**.\n- **Cell-Mediated Immunity (المناعة بالخلايا / الخلوية):**\n  - Defends against intracellular pathogens (viruses inside cells), cancerous cells, and transplanted allografts.\n  - Mediated directly by activated **Cytotoxic T-cells ($T_c$)** and **Natural Killer (NK) cells**.\n- **Primary vs Secondary Immune Response:**\n  - **Primary:** Slow ($5-10$ days for antibody appearance), mild symptoms, low antibody titer, establishes memory cells.\n  - **Secondary:** Extremely rapid and massive antibody production, no clinical symptoms (pathogen destroyed before disease manifests), mediated by reactivated **Memory B and T cells** that persist for decades.",
                      "theoryContentAr": "### ٣. خلايا الدم البيضاء والخلايا الليمفاوية\n- **الخلايا الليمفاوية (٢٠ - ٣٠٪ من خلايا الدم البيضاء):**\n  ١. **الخلايا البائية B (١٠ - ١٥٪):** تنضج في نخاع العظام، وتتحول عند التنشيط إلى **خلايا بائية بلازمية** تفرز الأجسام المضادة، و**خلايا بائية ذاكرة**.\n  ٢. **الخلايا التائية T (٨٠٪ من الليمفاوية):** تنضج في الغدة التيموسية:\n     - **المساعدة ($T_h$):** تحمل مستقبل CD4، تنشط الخلايا البائية بإفراز **الإنترلوكينات** وتنشط المناعة الخلوية بإفراز **السيتوكينات**.\n     - **السامة أو القاتلة ($T_c$):** تحمل مستقبل CD8، تهاجم الخلايا السرطانية وزراعة الأعضاء والخلايا المصابة بالفيروسات بإفراز بروتين **البيرفورين** (صانع الثقوب) و**السموم الليمفاوية** التي تنشط جينات تفتيت الـ DNA والموت الذاتي.\n     - **المثبطة أو الكابحة ($T_s$):** تحمل مستقبل CD8، تفرز **الليمفوكينات** بعد القضاء على الميكروب لتثبيط المناعة وإيقاف إفراز الأجسام المضادة وموت الفائض من الخلايا البلازمية.\n  ٣. **القاتلة الطبيعية NK (٥ - ١٠٪):** تهاجم الخلايا السرطانية والمصابة بالفيروسات غير تخصصياً بإنزيمات هاضمة.\n\n### ٤. الأجسام المضادة (الأجسام المناعية)\n- جزيئات جلوبيولينية على شكل حرف Y تفرزها الخلايا البائية البلازمية.\n- **التركيب:** زوجان من السلاسل الببتيدية (سلسلتان ثقيلتان وسلسلتان خفيفتان) تتصلان بروابط كبريتيدية ثنائية.\n  - **المنطقة المتغيرة (Fab):** تمثل موقع الارتباط بالأنتيجين (يوجد موقعان متماثلان على كل جسم مضاد) وتتشكل كالقفل والمفتاح لتلائم أنتيجين معين.\n  - **المنطقة الثابتة (Fc):** متطابقة في الفئة الواحدة.\n- **الفئات الخمس:** IgG, IgM, IgA, IgD, IgE.\n  - الجسم المضاد **IgM** يتكون من 5 وحدات متصلة ويحتوي على **10 مواقع ارتباط للأنتيجين**، وهو الأكفأ في التلازن والالتصاق.\n- **طرق عمل الأجسام المضادة:**\n  ١. **التعادل:** تحييد الفيروسات ومنعها من الالتصاق بغشاء الخلية.\n  ٢. **التلازن (الالتصاق):** جمع الميكروبات بأعداد كبيرة على نفس الجسم المضاد (مثل IgM) لتسهيل التهامها بالبلعاميات.\n  ٣. **الترسيب:** تحويل الأنتيجينات الذائبة إلى رواسب غير ذائبة لتبتلعها البلعميات.\n  ٤. **التحلل:** تنشيط بروتينات **المتممات** التي تحلل غلاف الميكروب الخارجي وتفجره أسموزياً.\n  ٥. **إبطال مفعول السموم:** تكوين معقدات مع السموم وتنشيط المتممات لإبطال سميتها بتفاعلات متسلسلة.",
                      "formulas": [
                            {
                                  "labelEn": "Antibody Stoichiometry",
                                  "labelAr": "تركيب جزيء الجسم المضاد",
                                  "latex": "\\text{Immunoglobulin} = 2\\,\\text{Heavy Chains} + 2\\,\\text{Light Chains} + \\text{Disulfide Bonds}"
                            },
                            {
                                  "labelEn": "Cytotoxic T-Cell Activation",
                                  "labelAr": "آلية القضاء على الخلايا المصابة",
                                  "latex": "T_C \\xrightarrow{CD8} \\text{Perforin } (\\text{pore formation}) + \\text{Lymphotoxins } (\\text{apoptosis})"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH4-L2",
                            "pageRange": "pp. 197–224"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated)",
                            "titleAr": "خطة درس: خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH4-L2",
                            "bloomsObjectivesEn": [
                                  "Analyze the biological structures and functional roles associated with Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated).",
                                  "Evaluate experimental and quantitative evidence governing these cellular mechanisms.",
                                  "Synthesize physiological feedback mechanisms to solve exam-standard analytical problems."
                            ],
                            "bloomsObjectivesAr": [
                                  "تحليل التراكيب البيولوجية والأدوار الوظيفية المرتبطة بـ خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة.",
                                  "تقييم الأدلة التجريبية والكمية الحاكمة لهذه الآليات الخلوية.",
                                  "تطبيق آليات التغذية الراجعة الفسيولوجية لحل المسائل التحليلية المتقدمة."
                            ],
                            "prerequisitesEn": [
                                  "General cell biology",
                                  "Biomolecules and enzymes",
                                  "Basic human physiology"
                            ],
                            "prerequisitesAr": [
                                  "بيولوجيا الخلية العامة",
                                  "الجزيئات الحيوية والإنزيمات",
                                  "مبادئ الفسيولوجيا البشرية"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated)",
                                        "definition": "Core concept of Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated) as defined in the official curriculum."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة",
                                        "definition": "المفهوم المحوري لـ خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة وفق نواتج التعلم المعتمدة."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Inquiry Hook & Real-world Context",
                                        "phaseAr": "التهيئة والربط بالواقع",
                                        "duration": "15 min",
                                        "activitiesEn": "Examining microscopic micrographs and physiological scenarios.",
                                        "activitiesAr": "مناقشة صور مجهرية وحالات فسيولوجية واقعية."
                                  },
                                  {
                                        "phaseEn": "Direct Instruction & Concept Exploration",
                                        "phaseAr": "التدريس المباشر واستكشاف المفاهيم",
                                        "duration": "35 min",
                                        "activitiesEn": "Interactive diagram tracing and biochemical pathway mapping.",
                                        "activitiesAr": "تتبع المسارات الكيميائية الحيوية على المخططات التفاعلية."
                                  },
                                  {
                                        "phaseEn": "Collaborative Problem Solving",
                                        "phaseAr": "التدريب التشاركي وحل المسائل",
                                        "duration": "25 min",
                                        "activitiesEn": "Working through high-order thinking multi-tier questions.",
                                        "activitiesAr": "حل مسائل متدرجة تقيس مهارات التفكير العليا."
                                  },
                                  {
                                        "phaseEn": "Closure & Formative Exit Ticket",
                                        "phaseAr": "الغلق وتقييم الخروج التكويني",
                                        "duration": "15 min",
                                        "activitiesEn": "Individual synthesis and exit ticket response.",
                                        "activitiesAr": "تقييم تكويني فردي للتحقق من تحقيق نواتج التعلم."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Confusing cause and effect in the hormonal or molecular feedback of Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated)."
                            ],
                            "commonMisconceptionsAr": [
                                  "الخلط بين السبب والنتيجة في آليات التغذية الراجعة الخاصة بـ خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة."
                            ],
                            "differentiationEn": {
                                  "struggling": "Provide annotated anatomical diagrams, concept flowcharts, and structured question hints.",
                                  "advanced": "Challenge with novel clinical case studies and multi-variable bioenergetic experiments."
                            },
                            "differentiationAr": {
                                  "struggling": "توفير مخططات تشريحية توضيحية وخرائط تدفق وتلميحات متدرجة للحل.",
                                  "advanced": "تكليف بدراسة حالات إكلينيكية وتصميم تجارب حيوية متعددة المتغيرات."
                            },
                            "formativeAssessmentEn": "What is the diagnostic significance and primary function of Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated)?",
                            "formativeAssessmentAr": "ما الأهمية الحيوية والدور الوظيفي الأساسي لـ خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة؟",
                            "exitTicketQuestion": {
                                  "questionEn": "Summarize the key physiological principle governing Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated).",
                                  "questionAr": "لخص المبدأ الفسيولوجي الأساسي الحاكم لـ خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة.",
                                  "solutionEn": "Accurate statement of structural organization, molecular triggers, and physiological outcomes.",
                                  "solutionAr": "تحديد العلاقة الدقيقة بين البنية الجزيئية والمحفزات الحيوية والنتيجة الفسيولوجية."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch4_l2_ws",
                            "titleEn": "Worksheet: Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated)",
                            "titleAr": "ورقة عمل: خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة",
                            "descriptionEn": "Comprehensive problem sheet reinforcing key principles and exam problem patterns for Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated).",
                            "descriptionAr": "ورقة تدريبية شاملة لترسيخ المفاهيم وأنماط الأسئلة الامتحانية لـ خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch4_l2_ws_p1",
                                        "titleEn": "Core Standard Question: Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated)",
                                        "titleAr": "سؤال قياسي: خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة",
                                        "difficulty": "medium",
                                        "questionEn": "Which statement best characterizes the official biological mechanism of Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated) according to national curriculum standards?",
                                        "questionAr": "أي العبارات التالية تصف بدقة الآلية البيولوجية لـ خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة وفقاً لمعايير المنهج الوزاري المعتمد؟",
                                        "optionsEn": [
                                              "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                              "Spontaneous non-enzymatic decay lacking cellular or genetic control",
                                              "Static unchanging equilibrium that does not respond to environmental stimuli",
                                              "Complete cellular shutdown during normal physiological homeostasis"
                                        ],
                                        "optionsAr": [
                                              "تفاعلات جزيئية متخصصة خاضعة للتنظيم عبر المستقبلات والمسارات الإنزيمية الدقيقة",
                                              "تحلل عشوائي تلقائي بدون أي تحكم خلوي أو وراثي",
                                              "اتزان استاتيكي جامد لا يستجيب لأي مؤثرات بيئية أو هرمونية",
                                              "توقف كامل للنشاط الخلوي أثناء الأداء الفسيولوجي الطبيعي"
                                        ],
                                        "correctAnswer": "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                        "correctIndex": 0,
                                        "hintEn": "Focus on the regulated, highly specific nature of physiological and genetic mechanisms.",
                                        "hintAr": "ركز على الطبيعة المنظمة وعالية التخصص للآليات الفسيولوجية والوراثية.",
                                        "stepByStepSolutionEn": [
                                              "Analyze the biological process described in the curriculum.",
                                              "Biological mechanisms operate through specific receptor, enzymatic, or structural cascades.",
                                              "This statement correctly represents the verified scientific curriculum standard."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "تحليل الآلية الحيوية المحددة في المنهج.",
                                              "تعمل الآليات البيولوجية من خلال تسلسلات متخصصة من المستقبلات والإنزيمات.",
                                              "هذه الإجابة تمثل بدقة المفهوم العلمي المعتمد في كتاب الوزارة."
                                        ],
                                        "teacherTipEn": "Remind students that biological control is always dynamic, specific, and regulated.",
                                        "teacherTipAr": "تذكير الطلاب بأن التحكم البيولوجي يتسم دائماً بالدقة والتخصص والتنظيم الفسيولوجي."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Interactive Simulation: Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated)",
                            "titleAr": "محاكاة تفاعلية: خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة",
                            "descriptionEn": "Interactive virtual laboratory exploring dynamic variables in Innate & Adaptive Immune Mechanisms (Humoral & Cell-Mediated).",
                            "descriptionAr": "محاكاة تفاعلية لاستكشاف المتغيرات الفسيولوجية في خطوط الدفاع والمناعة الخلطية والخلوية والأجسام المضادة."
                      }
                }
          ],
          "solvedExamples": [
                {
                      "id": "th_bio_ch4_se_01",
                      "titleEn": "Example 1: Leukocyte and Lymphocyte Subpopulation Calculation",
                      "titleAr": "مثال محلول ١: حسابات أعداد وتوزيع خلايا الدم البيضاء والليمفاوية",
                      "difficulty": "medium",
                      "questionEn": "A laboratory blood test shows that a patient has 8,000 white blood cells (WBCs) per mm3. Calculate: (a) minimum number of lymphocytes, (b) maximum number of lymphocytes, (c) average number of T-cells, (d) average number of B-cells, and (e) average number of NK cells.",
                      "questionAr": "أظهر تحليل دم لشخص أن عدد كرات الدم البيضاء 8,000 خلية/مم3. احسب: (أ) أقل عدد للخلايا الليمفاوية، (ب) أكبر عدد للخلايا الليمفاوية، (ج) متوسط عدد الخلايا التائية، (د) متوسط عدد الخلايا البائية، و(هـ) متوسط عدد خلايا القاتلة الطبيعية (NK).",
                      "stepByStepSolutionEn": [
                            "1. Lymphocytes represent 20% to 30% of total WBCs (average = 25%).",
                            "   Minimum lymphocytes = 8,000 * 0.20 = 1,600 cells.",
                            "   Maximum lymphocytes = 8,000 * 0.30 = 2,400 cells.",
                            "   Average lymphocytes = 8,000 * 0.25 = 2,000 cells.",
                            "2. T-lymphocytes = 80% of lymphocytes:",
                            "   Average T-cells = 2,000 * 0.80 = 1,600 cells.",
                            "3. B-lymphocytes = 10% to 15% of lymphocytes (average = 12.5%):",
                            "   Average B-cells = 2,000 * 0.125 = 250 cells.",
                            "4. Natural Killer (NK) cells = 5% to 10% of lymphocytes (average = 7.5%):",
                            "   Average NK cells = 2,000 * 0.075 = 150 cells."
                      ],
                      "stepByStepSolutionAr": [
                            "١. تشكل الخلايا الليمفاوية من 20% إلى 30% من إجمالي خلايا الدم البيضاء (المتوسط = 25%):",
                            "   أقل عدد للخلايا الليمفاوية = 8,000 × 0.20 = 1,600 خلية.",
                            "   أكبر عدد للخلايا الليمفاوية = 8,000 × 0.30 = 2,400 خلية.",
                            "   متوسط عدد الخلايا الليمفاوية = 8,000 × 0.25 = 2,000 خلية.",
                            "٢. الخلايا التائية = 80% من الخلايا الليمفاوية:",
                            "   متوسط الخلايا التائية = 2,000 × 0.80 = 1,600 خلية.",
                            "٣. الخلايا البائية = 10% إلى 15% (المتوسط = 12.5%):",
                            "   متوسط الخلايا البائية = 2,000 × 0.125 = 250 خلية.",
                            "٤. خلايا القاتلة الطبيعية (NK) = 5% إلى 10% (المتوسط = 7.5%):",
                            "   متوسط خلايا NK = 2,000 × 0.075 = 150 خلية."
                      ],
                      "teacherTipEn": "Notice that T + B + NK = 80% + 12.5% + 7.5% = 100% of lymphocytes.",
                      "teacherTipAr": "لاحظ دائماً أن مجموع التائية (80%) والبائية (12.5%) والقاتلة الطبيعية (7.5%) يمثل 100% من الخلايا الليمفاوية.",
                      "hintEn": "Notice that T + B + NK = 80% + 12.5% + 7.5% = 100% of lymphocytes.",
                      "hintAr": "لاحظ دائماً أن مجموع التائية (80%) والبائية (12.5%) والقاتلة الطبيعية (7.5%) يمثل 100% من الخلايا الليمفاوية."
                },
                {
                      "id": "th_bio_ch4_se_02",
                      "titleEn": "Example 2: Molecular Architecture and Bonds of Antibodies",
                      "titleAr": "مثال محلول ٢: التركيب الجزيئي والروابط في الجسم المضاد",
                      "difficulty": "medium",
                      "questionEn": "Describe the polypeptide chains and chemical bonds that stabilize the Y-shaped immunoglobulin monomer (e.g., IgG), and specify the total number of antigen-binding sites and disulfide bridges.",
                      "questionAr": "صف السلاسل الببتيدية والروابط الكيميائية التي تثبت جزيء الجسم المضاد Y (مثل IgG)، وحدد عدد مواقع الارتباط بالأنتيجين والروابط الكبريتيدية الثنائية.",
                      "stepByStepSolutionEn": [
                            "1. Chains: Each monomer consists of 4 polypeptide chains: 2 identical Heavy (long) chains and 2 identical Light (short) chains.",
                            "2. Bonds: The chains are linked together by Disulfide Bonds (-S-S-):",
                            "   - 2 disulfide bonds link the two heavy chains together in the hinge region.",
                            "   - 1 disulfide bond links each light chain to its adjacent heavy chain (2 bonds total).",
                            "   - Total minimum interchain disulfide bonds = 4 bonds.",
                            "3. Antigen-binding sites: Located at the variable N-terminal regions (Fab) of the arms. Each arm has 1 site formed by the variable domain of 1 heavy and 1 light chain. Total sites per monomer = 2 identical antigen-binding sites."
                      ],
                      "stepByStepSolutionAr": [
                            "١. السلاسل: يتكون الجسم المضاد من 4 سلاسل ببتيدية: سلسلتان ثقيلتان (طويلتان) متماثلتان، وسلسلتان خفيفتان (قصيرتان) متماثلتان.",
                            "٢. الروابط: ترتبط السلاسل بروابط كبريتيدية ثنائية:",
                            "   - رابطتان كبريتيديتان ثنائيتان تربطان السلسلتين الثقيلتين ببعضهما عند منطقة المفصلة.",
                            "   - رابطة كبريتيدية ثنائية واحدة تربط كل سلسلة خفيفة بالسلسلة الثقيلة المجاورة لها (رابطتان).",
                            "   - إجمالي الروابط الكبريتيدية الثنائية بين السلاسل = 4 روابط.",
                            "٣. مواقع الارتباط بالأنتيجين: توجد في الجزء المتغير (Fab) عند طرفي حرف Y، وتتكون من السلسلة الخفيفة والثقيلة معاً؛ فيمتلك الجسم المضاد المفرد موقعين متماثلين للارتباط بالأنتيجين."
                      ],
                      "teacherTipEn": "One antibody monomer has 4 polypeptide chains, 4 interchain disulfide bonds, and 2 antigen-binding sites.",
                      "teacherTipAr": "الجسم المضاد المفرد به 4 سلاسل ببتيدية، 4 روابط كبريتيدية ثنائية، وموقعان لارتباط الأنتيجين.",
                      "hintEn": "One antibody monomer has 4 polypeptide chains, 4 interchain disulfide bonds, and 2 antigen-binding sites.",
                      "hintAr": "الجسم المضاد المفرد به 4 سلاسل ببتيدية، 4 روابط كبريتيدية ثنائية، وموقعان لارتباط الأنتيجين."
                },
                {
                      "id": "th_bio_ch4_se_03",
                      "titleEn": "Example 3: Plant Structural Barrier Dynamics (Tyloses Formation)",
                      "titleAr": "مثال محلول ٣: ديناميكية تكوين التيلوزات في النسيج الوعائي للنبات",
                      "difficulty": "hots",
                      "questionEn": "Explain the anatomical mechanism of tyloses formation in plants, what triggers it, and what physiological risk it poses to the plant if it becomes excessive.",
                      "questionAr": "وضح الآلية التشريحية لتكون التيلوزات في النبات، وما المثير لتكونها، وما الخطر الفسيولوجي الذي قد تسببه للنبات عند الإفراط في تكونها.",
                      "stepByStepSolutionEn": [
                            "1. Trigger: Wounding or pathogenic penetration of the xylem vascular system (e.g., fungal or bacterial vascular wilt).",
                            "2. Mechanism: Living xylem parenchyma cells adjacent to dead xylem vessels balloon and expand into the vessel lumen through the pits.",
                            "3. Immune Benefit: These physical plugs block the vessel lumen, halting the longitudinal spread of the pathogen up to the leaves.",
                            "4. Physiological Risk: If tyloses proliferate excessively across all vascular bundles, they obstruct sap flow (water and mineral transport) from roots to leaves, causing severe leaf wilting and potential plant death."
                      ],
                      "stepByStepSolutionAr": [
                            "١. المثير: تعرض الجهاز الوعائي (قصيبات وأوعية الخشب) للقطع أو غزو الكائنات الممرضة كفطريات الذبول الوعائي.",
                            "٢. الآلية: تتمدد الخلايا البارنشيمية المجاورة لقصيبات الخشب وتبرز داخل تجويف الأوعية عبر النقر كنموات تشبه البالون.",
                            "٣. الفائدة المناعية: تعمل كسدادة فيزيائية تعترض مسار الميكروب وتمنع انتشاره وانتقاله للأعلى نحو الأوراق وباقي أجزاء النبات.",
                            "٤. الخطر الفسيولوجي: إذا انسدت معظم أوعية الخشب بالتيلوزات يتعطل صعود الماء والأملاح المعدنية من الجذر للأوراق مما يسبب جفاف وذبول النبات وموته."
                      ],
                      "teacherTipEn": "Tyloses form only in xylem vessels having adjacent living parenchyma cells and pits.",
                      "teacherTipAr": "تتكون التيلوزات فقط داخل أوعية الخشب عبر النقر بفعل تمدد خلايا بارنشيما الخشب المجاورة.",
                      "hintEn": "Tyloses form only in xylem vessels having adjacent living parenchyma cells and pits.",
                      "hintAr": "تتكون التيلوزات فقط داخل أوعية الخشب عبر النقر بفعل تمدد خلايا بارنشيما الخشب المجاورة."
                },
                {
                      "id": "th_bio_ch4_se_04",
                      "titleEn": "Example 4: Humoral vs Cell-Mediated Immunity Activation Pathway",
                      "titleAr": "مثال محلول ٤: مسار تنشيط المناعة الخلطية مقارنة بالمناعة الخلوية",
                      "difficulty": "hots",
                      "questionEn": "Trace the step-by-step molecular sequence by which a macrophage activates a Helper T-cell (Th), and how this Th then activates BOTH humoral and cell-mediated branches.",
                      "questionAr": "تتبع التسلسل الجزيئي الذي تقوم به الخلية البلعمية الكبيرة لتنشيط الخلية التائية المساعدة (Th)، وكيف تحفز هذه الأخيرة كلاً من المناعة الخلطية والخلوية.",
                      "stepByStepSolutionEn": [
                            "1. The macrophage engulfs the microbe, lysosomal enzymes degrade it into antigenic fragments, which bind inside the cell to Major Histocompatibility Complex (MHC) protein.",
                            "2. The macrophage displays the Antigen-MHC Class II complex on its plasma membrane.",
                            "3. A resting Helper T-cell (Th) binds to the displayed Antigen-MHC complex via its CD4 receptor.",
                            "4. Binding activates Th to secrete Interleukins.",
                            "5. In Humoral Immunity: Interleukins stimulate antigen-bound B-cells to proliferate into Plasma B-cells (secreting antibodies) and Memory B-cells.",
                            "6. In Cell-Mediated Immunity: Activated Th secretes Cytokines, which attract and activate Cytotoxic T-cells (Tc), Natural Killer (NK) cells, and additional Macrophages."
                      ],
                      "stepByStepSolutionAr": [
                            "١. تبتلع البلعمية الكبيرة الميكروب وتفككه بإنزيمات الليسوسومات إلى شظايا أنتيجينية ترتبط ببروتين التوافق النسيجي (MHC).",
                            "٢. تعرض الخلية البلعمية مركب (الأنتيجين - MHC) على غشائها البلازمي الخارجي.",
                            "٣. تتعرف الخلية التائية المساعدة (Th) وترتبط بالمركب المعروض عبر مستقبلها المناعي النوعي CD4.",
                            "٤. تنشط الخلية Th وتفرز مواد كيميائية تسمى الإنترلوكينات.",
                            "٥. في المناعة الخلطية: تنشط الإنترلوكينات الخلايا البائية المرتبطة بنفس الأنتيجين لتنقسم إلى خلايا بائية بلازمية (تفرز أجساماً مضادة) وخلايا ذاكرة.",
                            "٦. في المناعة الخلوية: تفرز خلايا Th النشطة بروتينات السيتوكينات التي تجذب وتنشط الخلايا التائية السامة (Tc) والقاتلة الطبيعية (NK) والبلعميات الكبيرة."
                      ],
                      "teacherTipEn": "Interleukins activate B-cells (Humoral); Cytokines recruit Tc and NK cells (Cell-Mediated).",
                      "teacherTipAr": "الإنترلوكينات تنشط الخلايا البائية؛ بينما السيتوكينات تجذب وتنشط التائية السامة والقاتلة الطبيعية.",
                      "hintEn": "Interleukins activate B-cells (Humoral); Cytokines recruit Tc and NK cells (Cell-Mediated).",
                      "hintAr": "الإنترلوكينات تنشط الخلايا البائية؛ بينما السيتوكينات تجذب وتنشط التائية السامة والقاتلة الطبيعية."
                },
                {
                      "id": "th_bio_ch4_se_05",
                      "titleEn": "Example 5: Agglutination Mechanism Superiority of IgM",
                      "titleAr": "مثال محلول ٥: أفضلية الجسم المضاد IgM في آلية التلازن",
                      "difficulty": "easy",
                      "questionEn": "Why is the antibody class IgM considered the most potent and efficient immunoglobulin in neutralizing bacteria through the agglutination mechanism?",
                      "questionAr": "علل: يعتبر الجسم المضاد من الفئة IgM الأكثر فاعلية وكفاءة في القضاء على البكتيريا بطريقة التلازن (الالتصاق).",
                      "stepByStepSolutionEn": [
                            "1. IgM is a pentamer consisting of 5 Y-shaped units joined by a J-chain.",
                            "2. As a result, a single IgM molecule possesses 10 antigen-binding sites.",
                            "3. This high valence allows one IgM molecule to bind multiple bacteria simultaneously, clumping dozens of microbes into large, immobile aggregates.",
                            "4. These aggregates are readily trapped and devoured by surrounding phagocytes in massive numbers."
                      ],
                      "stepByStepSolutionAr": [
                            "١. يتكون الجسم المضاد IgM من 5 وحدات متصلة ببعضها (بوليمر خماسي).",
                            "٢. لذلك يمتلك جزيء IgM الواحد 10 مواقع للارتباط بالأنتيجينات.",
                            "٣. يتيح هذا التعدد لجزيء واحد من IgM الارتباط بالعديد من الميكروبات في آن واحد، فيجمعها في كتل كبيرة متلاصقة وضعيفة الحركة.",
                            "٤. تصبح هذه التجمعات البكتيرية فريسة سهلة تلتهمها الخلايا البلعمية الكبيرة بأعداد غفيرة وبكفاءة وسرعة فائقة."
                      ],
                      "teacherTipEn": "Valence of IgM = 10; Valence of IgG/IgA/IgD/IgE = 2.",
                      "teacherTipAr": "تكافؤ الارتباط في IgM = 10؛ بينما في باقي الأجسام المضادة المفردة = 2 فقط.",
                      "hintEn": "Valence of IgM = 10; Valence of IgG/IgA/IgD/IgE = 2.",
                      "hintAr": "تكافؤ الارتباط في IgM = 10؛ بينما في باقي الأجسام المضادة المفردة = 2 فقط."
                },
                {
                      "id": "th_bio_ch4_se_06",
                      "titleEn": "Example 6: Perforin and Lymphotoxins Cytotoxic Cascades",
                      "titleAr": "مثال محلول ٦: آليتا عمل بروتين البيرفورين والسموم الليمفاوية",
                      "difficulty": "medium",
                      "questionEn": "Contrast the lethal mechanism of Perforin versus Lymphotoxins (Granzymes) secreted by activated Cytotoxic T-cells (Tc).",
                      "questionAr": "قارن بين الآلية القاتلة لكل من بروتين البيرفورين والسموم الليمفاوية التي تفرزها الخلايا التائية السامة النشطة (Tc).",
                      "stepByStepSolutionEn": [
                            "1. Perforin (Pore-Forming Protein): Secreted into the immunological synapse between Tc and target cell. It inserts into the target cell membrane and polymerizes, forming physical pores (holes) that disrupt osmotic equilibrium, causing cell lysis.",
                            "2. Lymphotoxins (Granzymes): Toxic proteins that enter the target cell and activate specific internal enzymatic cascades (caspases) and nuclear genes that direct the fragmentation of target cell DNA, triggering apoptosis (programmed cell suicide)."
                      ],
                      "stepByStepSolutionAr": [
                            "١. بروتين البيرفورين (بروتين صانع الثقوب): يفرز على غشاء الخلية المصابة فيتغلغل داخله ويكون ثقوباً فيزيائية في الغشاء البلازمي، مسبباً اختلال التوازن الأسموزي وانفجار الخلية.",
                            "٢. السموم الليمفاوية: مواد بروتينية تنفذ لداخل الخلية المصابة وتنشط جينات معينة داخل نواتها لتفتيت الـ DNA وتدمير مكوناتها، مما يؤدي إلى موتها ذاتياً (الموت المبرمج للخلية)."
                      ],
                      "teacherTipEn": "Perforin punctures the cell membrane; Lymphotoxins destroy the internal DNA.",
                      "teacherTipAr": "البيرفورين يثقب الغشاء الخارجي؛ والسموم الليمفاوية تفتت الحمض النووي بالداخل.",
                      "hintEn": "Perforin punctures the cell membrane; Lymphotoxins destroy the internal DNA.",
                      "hintAr": "البيرفورين يثقب الغشاء الخارجي؛ والسموم الليمفاوية تفتت الحمض النووي بالداخل."
                },
                {
                      "id": "th_bio_ch4_se_07",
                      "titleEn": "Example 7: Primary vs Secondary Response Dynamics",
                      "titleAr": "مثال محلول ٧: مقارنة منحنى الاستجابة المناعية الأولية والثانوية",
                      "difficulty": "medium",
                      "questionEn": "When an individual is exposed to the measles virus for the first time, clinical symptoms manifest. If exposed a second time 5 years later, no symptoms appear. Explain this immunological phenomenon.",
                      "questionAr": "عندما يتعرض شخص لفيروس الحصبة لأول مرة تظهر عليه أعراض المرض، ولكن عند تعرضه لنفس الفيروس بعد 5 سنوات لا تظهر عليه أي أعراض. فسر هذه الظاهرة المناعية.",
                      "stepByStepSolutionEn": [
                            "1. First exposure induces a Primary Immune Response: B and T cells require 5-10 days to recognize the novel antigen, proliferate, and differentiate into plasma cells. During this delay, the virus multiplies rapidly, damaging tissues and producing clinical illness.",
                            "2. During this primary response, long-lived Memory B and Memory T cells are generated and stored in lymph nodes for decades.",
                            "3. Second exposure triggers a Secondary Immune Response: Memory cells immediately recognize the antigen without lag, proliferating within hours into vast armies of plasma B and Tc cells.",
                            "4. A massive antibody surge clears the virus before it can multiply or damage cells, preventing clinical symptoms completely."
                      ],
                      "stepByStepSolutionAr": [
                            "١. عند التعرض الأول تحدث استجابة مناعية أولية: تستغرق الخلايا الليمفاوية وقتاً (5 - 10 أيام) للتعرف والتضاعف وتكوين الأجسام المضادة، وخلال هذا الوقت يتكاثر الفيروس وتظهر أعراض المرض.",
                            "٢. تتكون أثناء الاستجابة الأولية خلايا ذاكرة بائية وتائية تبقى حية في العقد الليمفاوية لعشرات السنين.",
                            "٣. عند التعرض الثاني تحدث استجابة مناعية ثانوية: تنشط خلايا الذاكرة فوراً خلال ساعات وتنتج كميات هائلة من الأجسام المضادة والخلايا القاتلة.",
                            "٤. يُباد الفيروس بسرعة خاطفة قبل أن يتمكن من التكاثر وإتلاف الأنسجة، فلا تظهر أي أعراض مرضية على الإطلاق."
                      ],
                      "teacherTipEn": "Memory cells persist 20-30 years in human bodies.",
                      "teacherTipAr": "تبقى خلايا الذاكرة في دم الإنسان من 20 إلى 30 سنة أو طوال العمر.",
                      "hintEn": "Memory cells persist 20-30 years in human bodies.",
                      "hintAr": "تبقى خلايا الذاكرة في دم الإنسان من 20 إلى 30 سنة أو طوال العمر."
                },
                {
                      "id": "th_bio_ch4_se_08",
                      "titleEn": "Example 8: Thymus Role Proven by Athymic Nude Mice Experiments",
                      "titleAr": "مثال محلول ٨: استنتاج وظيفة الغدة التيموسية من تجارب استئصالها",
                      "difficulty": "easy",
                      "questionEn": "What immunological defects are observed in laboratory mice born with a congenital absence of the thymus gland (athymic mice)?",
                      "questionAr": "ما الخلل المناعي الملاحظ في فئران تجارب ولدت بعيب خلقي تمثل في غياب الغدة التيموسية تماماً؟",
                      "stepByStepSolutionEn": [
                            "1. The thymus gland secretes Thymosin, which is essential for the maturation of stem lymphocytes into T-cells.",
                            "2. Athymic mice completely lack mature T-lymphocytes (Th, Tc, Ts).",
                            "3. Consequently, they are incapable of mounting cell-mediated immune responses (they cannot reject foreign organ grafts or fight viral infections), and their humoral immunity is severely crippled due to lack of Th helper signals."
                      ],
                      "stepByStepSolutionAr": [
                            "١. تفرز الغدة التيموسية هرمون التيموسين المسؤول عن نضج وتمايز الخلايا الليمفاوية الجذعية إلى خلايا تائية.",
                            "٢. غياب الغدة التيموسية يؤدي إلى الانعدام التام للخلايا التائية الناضجة (المساعدة والسامة والمثبطة).",
                            "٣. يفقد الحيوان المناعة الخلوية تماماً (يعجز عن رفض الأعضاء المزروعة أو مقاومة الفيروسات) وتضعف مناعته الخلطية لغياب الخلايا المساعدة."
                      ],
                      "teacherTipEn": "Thymus deficiency cripples T-cells, but B-cells can still be produced in bone marrow.",
                      "teacherTipAr": "استئصال التيموسية يعطل الخلايا التائية تماماً، بينما تظل الخلايا البائية تتكون بالنخاع ولكن ينقصها التنشيط.",
                      "hintEn": "Thymus deficiency cripples T-cells, but B-cells can still be produced in bone marrow.",
                      "hintAr": "استئصال التيموسية يعطل الخلايا التائية تماماً، بينما تظل الخلايا البائية تتكون بالنخاع ولكن ينقصها التنشيط."
                },
                {
                      "id": "th_bio_ch4_se_09",
                      "titleEn": "Example 9: Phytoalexins vs Non-Protein Amino Acids in Plants",
                      "titleAr": "مثال محلول ٩: التفريق بين الفينولات والأحماض الأمينية غير البروتينية في النبات",
                      "difficulty": "medium",
                      "questionEn": "Differentiate between Phenols and Non-Protein Amino Acids (e.g., Canavanine) as biochemical defense weapons in plants.",
                      "questionAr": "قارن بين الفينولات والجلوكوزيدات من جهة، والأحماض الأمينية غير البروتينية (كالكاناڤانين والسيفالوسبورين) من جهة أخرى كأسلحة مناعية بيوكيميائية بالنبات.",
                      "stepByStepSolutionEn": [
                            "1. Phenols & Glucosides: Organic chemical compounds that act directly as broad antimicrobial poisons, killing bacteria or halting fungal spore germination. They may pre-exist in small baseline amounts and multiply upon infection.",
                            "2. Non-Protein Amino Acids: Amino acid analogs (e.g., Canavanine, Cephalosporin) that do NOT participate in building plant cellular proteins. Instead, they act as toxic chemical deterrents that poison pathogenic microbes or herbivorous insects upon ingestion."
                      ],
                      "stepByStepSolutionAr": [
                            "١. الفينولات والجلوكوزيدات: مركبات كيميائية سامة تقتل الميكروبات أو تثبط نمو الفطريات، وقد توجد أصلاً بالنبات أو تتكون وتزداد عقب الإصابة.",
                            "٢. الأحماض الأمينية غير البروتينية: مثل الكاناڤانين والسيفالوسبورين؛ مركبات لا تدخل في بناء بروتينات النبات ذاته، بل تعمل كمواد واقية وسامة للكائنات الممرضة وحيوانات الرعي."
                      ],
                      "teacherTipEn": "Canavanine mimics arginine and disrupts pathogen protein synthesis.",
                      "teacherTipAr": "الأحماض الأمينية غير البروتينية تمنح النبات مناعة بيوكيميائية واقية دون أن تدخل في تركيبه.",
                      "hintEn": "Canavanine mimics arginine and disrupts pathogen protein synthesis.",
                      "hintAr": "الأحماض الأمينية غير البروتينية تمنح النبات مناعة بيوكيميائية واقية دون أن تدخل في تركيبه."
                },
                {
                      "id": "th_bio_ch4_se_10",
                      "titleEn": "Example 10: Complement System Activation & Antitoxin Cascade",
                      "titleAr": "مثال محلول ١٠: تنشيط نظام المتممات وآلية إبطال مفعول السموم",
                      "difficulty": "hots",
                      "questionEn": "Explain the molecular cooperation between antibodies and the Complement System during the destruction of bacterial toxins (Antitoxin mechanism).",
                      "questionAr": "وضح التعاون الجزيئي بين الأجسام المضادة ونظام المتممات في تدمير السموم البكتيرية (آلية إبطال مفعول السموم).",
                      "stepByStepSolutionEn": [
                            "1. Free bacterial toxins in the circulation are bound specifically by the antigen-binding sites (Fab) of circulating antibodies.",
                            "2. Formation of the Antibody-Toxin complex exposes a specific complement-binding site on the constant (Fc) region of the antibody.",
                            "3. Complements bind to this site and become activated, initiating an enzymatic cascade of sequential reactions.",
                            "4. These active complement enzymes biochemically hydrolyze and decompose the toxin molecules, converting them into harmless non-toxic compounds that can be safely eliminated."
                      ],
                      "stepByStepSolutionAr": [
                            "١. ترتبط الأجسام المضادة النوعية بالسموم البكتيرية الذائبة في مجرى الدم بمواقع ارتباطها المتغيرة (Fab).",
                            "٢. يؤدي تكون معقد (جسم مضاد - سم) إلى كشف وتنشيط موقع ارتباط المتممات على المنطقة الثابتة للجسم المضاد.",
                            "٣. ترتبط بروتينات المتممات بهذا الموقع وتتنشط لتبدأ سلسلة من التفاعلات الإنزيمية المتتالية.",
                            "٤. تحطم هذه الإنزيمات النشطة جزيئات السم كيميائياً وتفككها لمواد غير سامة وغير ضارة بالجسم يسهل التخلص منها."
                      ],
                      "teacherTipEn": "Complements only function AFTER antibodies bind antigen; they cannot bind free antigens alone.",
                      "teacherTipAr": "المتممات لا تعمل بمفردها أبداً، بل تشترط ارتباط الجسم المضاد بالأنتيجين أولاً لتتنشط.",
                      "hintEn": "Complements only function AFTER antibodies bind antigen; they cannot bind free antigens alone.",
                      "hintAr": "المتممات لا تعمل بمفردها أبداً، بل تشترط ارتباط الجسم المضاد بالأنتيجين أولاً لتتنشط."
                }
          ],
          "exerciseProblems": [
                {
                      "id": "th_bio_ch4_ex_01",
                      "titleEn": "Exercise 1: Primary Lymphoid Organ for T-Cell Maturation",
                      "titleAr": "تمرين ١: العضو الليمفاوي المسؤول عن نضج الخلايا التائية",
                      "difficulty": "easy",
                      "questionEn": "Which primary lymphoid organ is responsible for the maturation and functional differentiation of T-lymphocytes under the influence of the hormone thymosin?",
                      "questionAr": "أي الأعضاء الليمفاوية الأولية مسؤول عن نضج وتمايز الخلايا الليمفاوية التائية تحت تأثير هرمون التيموسين؟",
                      "optionsEn": [
                            "The thymus gland",
                            "The abdominal spleen",
                            "The palatine tonsils",
                            "The thoracic lymph nodes"
                      ],
                      "optionsAr": [
                            "الغدة التيموسية",
                            "طحال البطن",
                            "لوزتا الحلق",
                            "عقد الصدر الليمفاوية"
                      ],
                      "correctAnswer": "The thymus gland",
                      "correctIndex": 0,
                      "hintEn": "It is located in the upper chest above the heart.",
                      "hintAr": "تقع على القصبة الهوائية أعلى القلب وخلف عظمة القص.",
                      "stepByStepSolutionEn": [
                            "Immature stem lymphocytes migrate from bone marrow to the thymus gland.",
                            "Under thymosin secretion, they mature into functional T-cells and differentiate into Th, Tc, and Ts."
                      ],
                      "stepByStepSolutionAr": [
                            "تهاجر الخلايا الليمفاوية الجذعية من نخاع العظام إلى الغدة التيموسية.",
                            "بتأثير هرمون التيموسين تنضج وتتمايز إلى خلايا تائية مساعدة وسامة ومثبطة."
                      ],
                      "teacherTipEn": "Bone marrow forms ALL lymphocytes, but only B and NK mature there; T-cells mature in the thymus.",
                      "teacherTipAr": "نخاع العظام ينتج جميع الخلايا، لكن التائية تهاجر لتنضج في الغدة التيموسية."
                },
                {
                      "id": "th_bio_ch4_ex_02",
                      "titleEn": "Exercise 2: Pentameric Antibody Structure",
                      "titleAr": "تمرين ٢: عدد مواقع الارتباط في الجسم المضاد IgM",
                      "difficulty": "easy",
                      "questionEn": "How many antigen-binding sites are present in a single complete molecule of the pentameric antibody IgM?",
                      "questionAr": "كم عدد مواقع الارتباط بالأنتيجينات في جزيء واحد كامل من الجسم المضاد الخماسي IgM؟",
                      "optionsEn": [
                            "2 antigen-binding sites",
                            "10 antigen-binding sites",
                            "4 antigen-binding sites",
                            "20 antigen-binding sites"
                      ],
                      "optionsAr": [
                            "موقعان فقط",
                            "10 مواقع ارتباط",
                            "4 مواقع ارتباط",
                            "20 موقع ارتباط"
                      ],
                      "correctAnswer": "10 antigen-binding sites",
                      "correctIndex": 1,
                      "hintEn": "IgM consists of 5 interconnected Y-shaped antibody units.",
                      "hintAr": "يتكون IgM من 5 وحدات متصلة، وكل وحدة بها موقعان.",
                      "stepByStepSolutionEn": [
                            "Each antibody monomer has 2 antigen-binding sites.",
                            "Since IgM is a pentamer of 5 units: 5 * 2 = 10 antigen-binding sites."
                      ],
                      "stepByStepSolutionAr": [
                            "كل وحدة جسم مضاد منفردة تمتلك موقعين للارتباط بالأنتيجين.",
                            "بما أن IgM يتكون من 5 وحدات: 5 × 2 = 10 مواقع ارتباط."
                      ],
                      "teacherTipEn": "This is why IgM is the champion of agglutination.",
                      "teacherTipAr": "لذلك يعتبر IgM الأكفأ في تجميع ولصق الميكروبات بطريقة التلازن."
                },
                {
                      "id": "th_bio_ch4_ex_03",
                      "titleEn": "Exercise 3: Surface Receptor of Helper T-Cells",
                      "titleAr": "تمرين ٣: بروتين المستقبل المناعي للخلايا التائية المساعدة",
                      "difficulty": "easy",
                      "questionEn": "Which surface protein receptor specifically characterizes Helper T-lymphocytes (Th) and enables them to bind the Antigen-MHC Class II complex on macrophages?",
                      "questionAr": "أي البروتينات المستقبلة على الغشاء الخارجي تميز الخلايا الليمفاوية التائية المساعدة (Th) وتمكنها من الارتباط بمركب (الأنتيجين - MHC)؟",
                      "optionsEn": [
                            "CD8 receptor protein",
                            "Histamine receptor",
                            "CD4 receptor protein",
                            "Insulin receptor"
                      ],
                      "optionsAr": [
                            "بروتين المستقبل CD8",
                            "مستقبل الهيستامين",
                            "بروتين المستقبل CD4",
                            "مستقبل الإنسولين"
                      ],
                      "correctAnswer": "CD4 receptor protein",
                      "correctIndex": 2,
                      "hintEn": "Tc and Ts carry CD8, while Th carries CD4.",
                      "hintAr": "الخلايا السامة والمثبطة تحمل CD8، بينما المساعدة تحمل CD4.",
                      "stepByStepSolutionEn": [
                            "Helper T-cells specifically express CD4 on their cell surface.",
                            "CD4 binds to MHC Class II molecules presenting foreign antigenic peptides."
                      ],
                      "stepByStepSolutionAr": [
                            "تتميز الخلايا التائية المساعدة بوجود مستقبل CD4 على سطحها.",
                            "يتعرف CD4 على معقد التوافق النسيجي المعروض على الخلية البلعمية."
                      ],
                      "teacherTipEn": "Th = CD4; Tc = CD8; Ts = CD8.",
                      "teacherTipAr": "المساعدة = CD4؛ السامة = CD8؛ المثبطة = CD8."
                },
                {
                      "id": "th_bio_ch4_ex_04",
                      "titleEn": "Exercise 4: Induced Structural Defense in Plants",
                      "titleAr": "تمرين ٤: الوسائل المناعية التركيبية المستحثة في النبات",
                      "difficulty": "medium",
                      "questionEn": "Which of the following plant defense mechanisms represents an INDUCED structural defense formed strictly in response to infection or wounding?",
                      "questionAr": "أي الآليات المناعية النباتية التالية تمثل وسيلة مناعية تركيبية مستحثة تتكون فقط كاستجابة للإصابة أو الجروح؟",
                      "optionsEn": [
                            "Pre-existing epidermal cutin coating",
                            "Cellulose fibers of the primary cell wall",
                            "Epidermal hairs and trichomes",
                            "Formation of cork layers around severed tissues"
                      ],
                      "optionsAr": [
                            "طبقة الكيوتين الشمعية الموجودة بالبشرة أصلاً",
                            "ألياف السليلوز في الجدار الخلوي الابتدائي",
                            "الشعيرات والأشواك الموجودة بالبشرة",
                            "تكوين طبقات الفلين حول الأنسجة المجروحة"
                      ],
                      "correctAnswer": "Formation of cork layers around severed tissues",
                      "correctIndex": 3,
                      "hintEn": "Cutin, cellulose walls, and trichomes are pre-existing structural barriers.",
                      "hintAr": "الكيوتين والسليلوز والأشواك موجودة أصلاً؛ بينما الفلين والتيلوزات تتكون عقب الجرح.",
                      "stepByStepSolutionEn": [
                            "Pre-existing structural defenses include cutin, cell walls, and thorns.",
                            "Induced structural defenses include cork formation, tyloses, gums, and hypersensitivity."
                      ],
                      "stepByStepSolutionAr": [
                            "المناعة التركيبية الموجودة أصلاً تشمل طبقة الكيوتين والجدار الخلوي والأشواك.",
                            "المناعة التركيبية المستحثة الناتجة عن الإصابة تشمل الفلين، التيلوزات، الصموغ، والحساسية المفرطة."
                      ],
                      "teacherTipEn": "Cork seals wounds; Tyloses block xylem pipes; both are induced.",
                      "teacherTipAr": "الفلين يعزل الجروح؛ والتيلوزات تسد أوعية الخشب؛ وكلاهما وسيلة مستحثة."
                },
                {
                      "id": "th_bio_ch4_ex_05",
                      "titleEn": "Exercise 5: Lymphocyte Percentage in Peripheral Blood",
                      "titleAr": "تمرين ٥: النسبة المئوية للخلايا الليمفاوية في الدم",
                      "difficulty": "easy",
                      "questionEn": "In normal human circulating blood, what percentage of the total white blood cell count is represented by lymphocytes?",
                      "questionAr": "في دم الإنسان الطبيعي، كم تمثل الخلايا الليمفاوية من إجمالي خلايا الدم البيضاء؟",
                      "optionsEn": [
                            "20% to 30%",
                            "1% to 2%",
                            "70% to 80%",
                            "95% to 99%"
                      ],
                      "optionsAr": [
                            "20% إلى 30%",
                            "1% إلى 2%",
                            "70% إلى 80%",
                            "95% إلى 99%"
                      ],
                      "correctAnswer": "20% to 30%",
                      "correctIndex": 0,
                      "hintEn": "Average is 25%.",
                      "hintAr": "المتوسط هو 25%.",
                      "stepByStepSolutionEn": [
                            "Lymphocytes account for 20% - 30% of total white blood cells.",
                            "The remaining 70% - 80% are other leukocytes (neutrophils, monocytes, etc.)."
                      ],
                      "stepByStepSolutionAr": [
                            "تمثل الخلايا الليمفاوية من 20% إلى 30% من إجمالي خلايا الدم البيضاء.",
                            "بينما باقي خلايا الدم البيضاء (البلعمية والمحببة) تمثل من 70% إلى 80%."
                      ],
                      "teacherTipEn": "Lymphocyte count average = 25% of total WBCs.",
                      "teacherTipAr": "متوسط نسبة الليمفاويات = 25% من خلايا الدم البيضاء."
                },
                {
                      "id": "th_bio_ch4_ex_06",
                      "titleEn": "Exercise 6: Cytotoxic T-Cell Pore-Forming Weapon",
                      "titleAr": "تمرين ٦: البروتين المثقب للغشاء المفرز من الخلايا التائية السامة",
                      "difficulty": "easy",
                      "questionEn": "Which pore-forming protein is secreted by activated Cytotoxic T-lymphocytes (Tc) to perforate the plasma membrane of target cancer or infected cells?",
                      "questionAr": "أي البروتينات صانعة الثقوب تفرزها الخلايا التائية السامة النشطة (Tc) لتثقيب الغشاء البلازمي للخلايا السرطانية أو المصابة؟",
                      "optionsEn": [
                            "Amylase enzyme",
                            "Perforin protein",
                            "Insulin protein",
                            "Hemoglobin protein"
                      ],
                      "optionsAr": [
                            "إنزيم الأميليز",
                            "بروتين البيرفورين",
                            "بروتين الإنسولين",
                            "بروتين الهيموجلوبين"
                      ],
                      "correctAnswer": "Perforin protein",
                      "correctIndex": 1,
                      "hintEn": "Its name derives from 'perforate'.",
                      "hintAr": "اسمه مشتق من كلمة تثقيب (Perforate).",
                      "stepByStepSolutionEn": [
                            "Activated Tc cells release perforin directly onto the target cell membrane.",
                            "Perforin polymerizes into cylindrical transmembrane pores, destroying membrane integrity."
                      ],
                      "stepByStepSolutionAr": [
                            "تفرز الخلايا التائية السامة بروتين البيرفورين (البروتين صانع الثقوب).",
                            "ينغرس في غشاء الخلية المصابة محدثاً ثقوباً تعطل نفاذيته وتسبب انفجارها."
                      ],
                      "teacherTipEn": "Tc secretes Perforin (punctures membrane) + Lymphotoxins (fragments DNA).",
                      "teacherTipAr": "تفرز Tc البيرفورين (يثقب الغشاء) والسموم الليمفاوية (تفتت الـ DNA)."
                },
                {
                      "id": "th_bio_ch4_ex_07",
                      "titleEn": "Exercise 7: Chemical Secreting Cells Terminating Immune Response",
                      "titleAr": "تمرين ٧: الخلايا المفرزة للمواد الكيميائية المثبطة للمناعة",
                      "difficulty": "medium",
                      "questionEn": "Which cell type secretes lymphokines to suppress plasma cells and terminate the immune response after eradication of the pathogen?",
                      "questionAr": "أي الخلايا تفرز بروتينات الليمفوكينات لتثبيط الخلايا البلازمية وإنهاء الاستجابة المناعية بعد القضاء على الميكروب؟",
                      "optionsEn": [
                            "Helper T-cells (Th)",
                            "Plasma B-cells",
                            "Suppressor T-cells (Ts)",
                            "Red blood erythrocytes"
                      ],
                      "optionsAr": [
                            "الخلايا التائية المساعدة Th",
                            "الخلايا البائية البلازمية",
                            "الخلايا التائية المثبطة (الكابحة) Ts",
                            "خلايا الدم الحمراء"
                      ],
                      "correctAnswer": "Suppressor T-cells (Ts)",
                      "correctIndex": 2,
                      "hintEn": "They express CD8 and restore immune homeostasis.",
                      "hintAr": "تحمل مستقبل CD8 وتعيد الجهاز المناعي لحالة الاتزان والهدوء.",
                      "stepByStepSolutionEn": [
                            "Suppressor T-cells (Ts) regulate the immune response.",
                            "Upon pathogen clearance, they secrete lymphokines that arrest plasma cell antibody production and induce apoptosis of excess T-cells."
                      ],
                      "stepByStepSolutionAr": [
                            "تتولى الخلايا التائية المثبطة تنظيم كفاءة الاستجابة المناعية.",
                            "تفرز بروتينات الليمفوكينات التي توقف الخلايا البلازمية عن إنتاج الأجسام المضادة وتسبب موت فائض الخلايا التائية والبائية."
                      ],
                      "teacherTipEn": "Ts prevents autoimmune damage and excessive inflammation.",
                      "teacherTipAr": "تمنع الخلايا المثبطة أمراض المناعة الذاتية وهدر طاقة الجسم."
                },
                {
                      "id": "th_bio_ch4_ex_08",
                      "titleEn": "Exercise 8: Soluble Antigen Neutralization Mechanism",
                      "titleAr": "تمرين ٨: آلية التعامل مع الأنتيجينات الذائبة",
                      "difficulty": "medium",
                      "questionEn": "Which antibody mechanism of action is specifically utilized to convert soluble, dissolved antigens into insoluble lattice complexes that phagocytes can easily devour?",
                      "questionAr": "أي طرق عمل الأجسام المضادة تختص بتحويل الأنتيجينات الذائبة في السوائل إلى رواسب غير ذائبة يسهل على البلعميات التهامها؟",
                      "optionsEn": [
                            "Lysis via complement pores",
                            "Neutralization of viral capsids",
                            "Antitoxin enzymatic hydrolysis",
                            "Precipitation mechanism"
                      ],
                      "optionsAr": [
                            "التحلل بثقوب المتممات",
                            "التعادل مع أغلفة الفيروسات",
                            "إبطال مفعول السموم بالتحلل",
                            "آلية الترسيب"
                      ],
                      "correctAnswer": "Precipitation mechanism",
                      "correctIndex": 3,
                      "hintEn": "Binding soluble molecules into insoluble solids.",
                      "hintAr": "تحويل الذائب إلى راسب صلب.",
                      "stepByStepSolutionEn": [
                            "Precipitation occurs when antibodies cross-link soluble antigens.",
                            "The resulting insoluble antigen-antibody complex precipitates out of solution and is rapidly phagocytosed."
                      ],
                      "stepByStepSolutionAr": [
                            "تحدث آلية الترسيب غالباً مع الأنتيجينات الذائبة.",
                            "ترتبط بها الأجسام المضادة فتكون مركبات غير ذائبة تترسب ويسهل على الخلايا البلعمية التهامها."
                      ],
                      "teacherTipEn": "Agglutination is for insoluble cells (bacteria); Precipitation is for soluble molecules.",
                      "teacherTipAr": "التلازن للخلايا الميكروبية؛ والترسيب للأنتيجينات الجزيئية الذائبة."
                },
                {
                      "id": "th_bio_ch4_ex_09",
                      "titleEn": "Exercise 9: Spleen Erythrocyte Recycling Function",
                      "titleAr": "تمرين ٩: إعادة تدوير مكونات كرات الدم الحمراء في الطحال",
                      "difficulty": "medium",
                      "questionEn": "When macrophages in the spleen break down aged worn-out red blood cells (120 days old), which valuable metallic element is conserved and recycled to the red bone marrow?",
                      "questionAr": "عندما تبتلع البلعميات الكبيرة بالطحال خلايا الدم الحمراء الهرمة (عمرها 120 يوماً)، أي العناصر الفلزية الثمينة يُعاد تدويره وإرساله لنخاع العظام؟",
                      "optionsEn": [
                            "Iron (Fe)",
                            "Calcium (Ca)",
                            "Magnesium (Mg)",
                            "Iodine (I)"
                      ],
                      "optionsAr": [
                            "عنصر الحديد (Fe)",
                            "عنصر الكالسيوم (Ca)",
                            "عنصر الماغنسيوم (Mg)",
                            "عنصر اليود (I)"
                      ],
                      "correctAnswer": "Iron (Fe)",
                      "correctIndex": 0,
                      "hintEn": "It is the central atom of hemoglobin heme rings.",
                      "hintAr": "يدخل في تركيب الهيموجلوبين الحامل للأكسجين.",
                      "stepByStepSolutionEn": [
                            "Splenic macrophages dismantle hemoglobin into globin proteins and heme.",
                            "Iron is extracted and transported back to the red bone marrow to synthesize new hemoglobin for fresh erythrocytes."
                      ],
                      "stepByStepSolutionAr": [
                            "تفكك خلايا الطحال البلعمية الهيموجلوبين إلى بروتين وحديد.",
                            "يُسترجع الحديد ويُنقل عبر تيار الدم لنخاع العظام لإعادة استخدامه في تصنيع كرات دم حمراء جديدة."
                      ],
                      "teacherTipEn": "The spleen acts as a blood filter, immunological graveyard, and iron recycler.",
                      "teacherTipAr": "الطحال يمثل فلتر الدم، ومقبرة الخلايا الهرمة، ومحطة إعادة تدوير الحديد."
                },
                {
                      "id": "th_bio_ch4_ex_10",
                      "titleEn": "Exercise 10: Disulfide Bonds in Single IgG Monomer",
                      "titleAr": "تمرين ١٠: عدد الروابط الكبريتيدية الثنائية بين سلاسل الجسم المضاد",
                      "difficulty": "hots",
                      "questionEn": "In a standard Y-shaped monomeric antibody (such as IgG), how many total interchain disulfide bonds hold the four polypeptide chains together?",
                      "questionAr": "في جزيء الجسم المضاد المفرد النموذجي (مثل IgG)، كم عدد الروابط الكبريتيدية الثنائية التي تربط بين السلاسل الببتيدية الأربع معاً؟",
                      "optionsEn": [
                            "1 disulfide bond",
                            "4 disulfide bonds",
                            "10 disulfide bonds",
                            "100 disulfide bonds"
                      ],
                      "optionsAr": [
                            "رابطة واحدة",
                            "4 روابط كبريتيدية ثنائية",
                            "10 روابط كبريتيدية",
                            "100 رابطة كبريتيدية"
                      ],
                      "correctAnswer": "4 disulfide bonds",
                      "correctIndex": 1,
                      "hintEn": "2 between the two heavy chains, and 1 between each light and heavy chain.",
                      "hintAr": "اثنتان بين السلسلتين الثقيلتين، وواحدة بين كل سلسلة خفيفة وثقيلة مجاورة.",
                      "stepByStepSolutionEn": [
                            "The two heavy chains are connected by 2 disulfide bonds in the hinge region.",
                            "Each light chain is connected to a heavy chain by 1 disulfide bond (2 bonds total).",
                            "Total interchain disulfide bonds = 2 + 2 = 4 bonds."
                      ],
                      "stepByStepSolutionAr": [
                            "ترتبط السلسلتان الثقيلتان ببعضهما برابطتين كبريتيديتين ثنائيتين.",
                            "ترتبط كل سلسلة خفيفة بالسلسلة الثقيلة برابطة كبريتيدية ثنائية واحدة (رابطتان).",
                            "المجموع الكلي للروابط الكبريتيدية الرابطة بين السلاسل = 2 + 2 = 4 روابط."
                      ],
                      "teacherTipEn": "4 polypeptide chains = 4 interchain disulfide bonds.",
                      "teacherTipAr": "4 سلاسل ببتيدية تقابلها 4 روابط كبريتيدية ثنائية بين السلاسل."
                },
                {
                      "id": "th_bio_ch4_ex_11",
                      "titleEn": "Exercise 11: Non-Protein Amino Acids Examples",
                      "titleAr": "تمرين ١١: أمثلة الأحماض الأمينية غير البروتينية في النبات",
                      "difficulty": "medium",
                      "questionEn": "Which pair of chemical compounds exemplifies non-protein amino acids synthesized by plants to act as toxic protective deterrents against herbivores and microbes?",
                      "questionAr": "أي زوج من المركبات الكيميائية التالية يمثل أحماضاً أمينية غير بروتينية يصنعها النبات لتعمل كمواد واقية وسامة للميكروبات؟",
                      "optionsEn": [
                            "Cellulose and Suberin",
                            "Glucose and Fructose",
                            "Canavanine and Cephalosporin",
                            "Insulin and Glucagon"
                      ],
                      "optionsAr": [
                            "السليلوز والسوبرين",
                            "الجلوكوز والفركتوز",
                            "الكاناڤانين والسيفالوسبورين",
                            "الإنسولين والجلوكاجون"
                      ],
                      "correctAnswer": "Canavanine and Cephalosporin",
                      "correctIndex": 2,
                      "hintEn": "They do not enter into protein synthesis.",
                      "hintAr": "لا تشارك في بناء بروتينات النبات.",
                      "stepByStepSolutionEn": [
                            "Canavanine and cephalosporin are non-protein amino acids.",
                            "They are toxic chemical substances that protect the plant by poisoning invading pathogens."
                      ],
                      "stepByStepSolutionAr": [
                            "الكاناڤانين والسيفالوسبورين من الأحماض الأمينية غير البروتينية.",
                            "تعمل كمواد مناعية بيوكيميائية واقية وسامة للميكروبات الغازية للنبات."
                      ],
                      "teacherTipEn": "Memorize these two: Canavanine and Cephalosporin.",
                      "teacherTipAr": "احفظ هذين النموذجين للمنهج: الكاناڤانين والسيفالوسبورين."
                },
                {
                      "id": "th_bio_ch4_ex_12",
                      "titleEn": "Exercise 12: Natural Killer Cells Weaponry",
                      "titleAr": "تمرين ١٢: سلاح الخلايا القاتلة الطبيعية في مهاجمة الخلايا المصابة",
                      "difficulty": "medium",
                      "questionEn": "How do Natural Killer (NK) cells destroy virus-infected host cells and tumor cells without prior immunological sensitization?",
                      "questionAr": "كيف تدمر خلايا القاتلة الطبيعية (NK) الخلايا المصابة بالفيروسات والخلايا السرطانية دون حاجة لتنشيط نوعي مسبق؟",
                      "optionsEn": [
                            "By engulfing them whole by endocytosis",
                            "By wrapping them in thick cellulose coats",
                            "By converting them into red blood cells",
                            "By secreting specialized cytotoxic enzymes directly onto target cells"
                      ],
                      "optionsAr": [
                            "بابتلاعها كاملة بالبلعمة",
                            "بتغليفها بطبقات سميكة من السليلوز",
                            "بتحويلها إلى خلايا دم حمراء",
                            "بإفراز إنزيمات هاضمة خاصة تصبها مباشرة على الخلايا المستهدفة"
                      ],
                      "correctAnswer": "By secreting specialized cytotoxic enzymes directly onto target cells",
                      "correctIndex": 3,
                      "hintEn": "They destroy target cells by enzyme secretion.",
                      "hintAr": "تفرز إنزيمات خاصة تذيب وتحلل الخلية الهدف.",
                      "stepByStepSolutionEn": [
                            "Natural Killer cells are innate cytotoxic lymphocytes (5-10% of lymphocytes).",
                            "They bind abnormally altered cells and secrete perforating and digestive enzymes to eliminate them."
                      ],
                      "stepByStepSolutionAr": [
                            "الخلايا القاتلة الطبيعية خلايا مناعية غير تخصصية تمثل 5 - 10% من الليمفاويات.",
                            "تهاجم الخلايا السرطانية والمصابة بالفيروسات وتفرز عليها إنزيمات هاضمة تدمرها."
                      ],
                      "teacherTipEn": "NK attacks non-specifically; Tc attacks specifically.",
                      "teacherTipAr": "NK تهاجم غير تخصصياً؛ بينما Tc تهاجم بآلية تخصصية معقدة."
                },
                {
                      "id": "th_bio_ch4_ex_13",
                      "titleEn": "Exercise 13: Variable Region Determination in Antibodies",
                      "titleAr": "تمرين ١٣: سبب التنوع الهائل في المنطقة المتغيرة للأجسام المضادة",
                      "difficulty": "hots",
                      "questionEn": "What biochemical factor determines the immense structural diversity and specific binding conformation of the variable region (Fab) across different antibodies?",
                      "questionAr": "ما العامل البيوكيميائي المسؤول عن التنوع الهائل والشكل الفراغي النوعي للمنطقة المتغيرة (Fab) في الأجسام المضادة المختلفة؟",
                      "optionsEn": [
                            "Variation in amino acid sequence, types, numbers, and tertiary folding in the variable loops",
                            "The thickness of the fat tissue inside the lymph nodes",
                            "The concentration of sodium chloride dissolved in lymph plasma",
                            "The temperature of the human bone marrow"
                      ],
                      "optionsAr": [
                            "اختلاف تتابع وأنواع وأعداد وتشكيل الأحماض الأمينية في السلاسل الببتيدية بالمنطقة المتغيرة",
                            "سماكة الأنسجة الدهنية داخل العقد الليمفاوية",
                            "تركيز كلوريد الصوديوم الذائب في بلازما الليمف",
                            "درجة حرارة نخاع العظام في الإنسان"
                      ],
                      "correctAnswer": "Variation in amino acid sequence, types, numbers, and tertiary folding in the variable loops",
                      "correctIndex": 0,
                      "hintEn": "The amino acid sequence dictates the 3D shape complementary to an epitope.",
                      "hintAr": "ترتيب الأحماض الأمينية يحدد التطابق الفراغي كالقفل والمفتاح مع الأنتيجين.",
                      "stepByStepSolutionEn": [
                            "The variable region consists of hypervariable amino acid sequences.",
                            "Variations in amino acid order, number, and spatial folding generate millions of unique binding clefts matching different antigens."
                      ],
                      "stepByStepSolutionAr": [
                            "تتشكل المنطقة المتغيرة من تتابعات متباينة من الأحماض الأمينية.",
                            "اختلاف ترتيب وأعداد وأنواع الأحماض والروابط الهيدروجينية يشكل موقعاً فراغياً يطابق أنتيجيناً بعينه كالقفل والمفتاح."
                      ],
                      "teacherTipEn": "Lock-and-key fit: Antigen epitope fits antibody variable pocket.",
                      "teacherTipAr": "التطابق المناعي: يتطابق موقع الارتباط مع الأنتيجين كالقفل مع مفتاحه."
                },
                {
                      "id": "th_bio_ch4_ex_14",
                      "titleEn": "Exercise 14: Plant Receptors Role in Acquired Resistance",
                      "titleAr": "تمرين ١٤: دور المستقبلات النباتية في تنشيط المناعة المكتسبة",
                      "difficulty": "medium",
                      "questionEn": "What is the primary role of Receptors in plant biochemical immunity, and how does their concentration change following microbial infection?",
                      "questionAr": "ما الدور الأساسي لـ 'المستقبلات' في المناعة البيوكيميائية للنبات، وكيف يتغير تركيزها عقب الإصابة الميكروبية؟",
                      "optionsEn": [
                            "They synthesize cellulose to patch damaged leaf surfaces",
                            "They recognize the presence of foreign pathogens and trigger the plant's systemic defense mechanisms, increasing in concentration post-infection",
                            "They consume bacterial proteins as metabolic food for chloroplasts",
                            "They evaporate water from stomata to drown fungal spores"
                      ],
                      "optionsAr": [
                            "تصنع السليلوز لترقيع الأوراق المصابة",
                            "تدرك وجود الميكروب وتنشط دفاعات النبات الموروثة، ويزداد تركيزها في النبات بعد الإصابة",
                            "تلتهم البروتينات البكتيرية كغذاء للبلاستيدات الخضراء",
                            "تبخر الماء من الثغور لإغراق جراثيم الفطريات"
                      ],
                      "correctAnswer": "They recognize the presence of foreign pathogens and trigger the plant's systemic defense mechanisms, increasing in concentration post-infection",
                      "correctIndex": 1,
                      "hintEn": "Receptors = Pathogen recognition + Defense activation.",
                      "hintAr": "المستقبلات = إدراك وجود الميكروب + تنشيط دفاعات النبات، ويزداد تركيزها بعد الإصابة.",
                      "stepByStepSolutionEn": [
                            "Receptors are compounds existing naturally in plants.",
                            "Upon infection, their concentration spikes as they detect microbial molecules and stimulate the synthesis of antimicrobial proteins and structural defenses."
                      ],
                      "stepByStepSolutionAr": [
                            "المستقبلات مركبات توجد في النباتات السليمة والمصابة.",
                            "يزداد تركيزها عقب العدوى حيث تدرك وجود الكائن الممرض وتطلق إشارات تنشيط الدفاعات الكيميائية والتركيبية بالنبات."
                      ],
                      "teacherTipEn": "Receptors exist before infection but increase significantly after infection.",
                      "teacherTipAr": "المستقبلات توجد قبل الإصابة لكن تركيزها يقفز بصورة كبيرة عقب الإصابة."
                },
                {
                      "id": "th_bio_ch4_ex_15",
                      "titleEn": "Exercise 15: Peyer's Patches Anatomical Location",
                      "titleAr": "تمرين ١٥: الموقع التشريحي الدقيق لبقع باير في الإنسان",
                      "difficulty": "hots",
                      "questionEn": "In which anatomical section of the human gastrointestinal tract are Peyer's Patches located to perform their mucosal immune function?",
                      "questionAr": "في أي جزء تشريحي من القناة الهضمية للإنسان تتواجد بقع باير لتقوم بوظيفتها المناعية المخاطية؟",
                      "optionsEn": [
                            "Under the tongue in the oral cavity",
                            "Inside the stomach cardiac sphincter",
                            "In the mucous membrane lining the lower small intestine (ileum)",
                            "Inside the lumen of the gallbladder"
                      ],
                      "optionsAr": [
                            "تحت اللسان في التجويف الفمي",
                            "داخل فؤاد المعدة",
                            "في الغشاء المخاطي المبطن للجزء السفلي من الأمعاء الدقيقة (اللفائفي)",
                            "داخل تجويف المرارة"
                      ],
                      "correctAnswer": "In the mucous membrane lining the lower small intestine (ileum)",
                      "correctIndex": 2,
                      "hintEn": "They protect the lower small intestine from bacterial proliferation.",
                      "hintAr": "عقد ليمفاوية صغيرة في جدار اللفائفي بالأمعاء الدقيقة.",
                      "stepByStepSolutionEn": [
                            "Peyer's patches are small macroscopic aggregates of lymphoid tissue.",
                            "They are situated in the mucosa and submucosa of the ileum (lower small intestine) to monitor intestinal microbes."
                      ],
                      "stepByStepSolutionAr": [
                            "بقع باير عقد ليمفاوية دقيقة تتجمع على شكل لطع.",
                            "تنتشر في الغشاء المخاطي المبطن للجزء السفلي من الأمعاء الدقيقة (اللفائفي) لتلعب دوراً مناعياً حيوياً ضد ميكروبات الأمعاء."
                      ],
                      "teacherTipEn": "Peyer's patches = Ileum mucosal immune guardians.",
                      "teacherTipAr": "بقع باير = حراس المناعة في الغشاء المخاطي لللفائفي بالأمعاء الدقيقة."
                }
          ],
          "databank": bioCh4Databank
        },
    {
          "id": "th_bio_ch5",
          "chapterNumber": 5,
          "titleEn": "Molecular Biology: Nucleic Acids & Genetic Engineering",
          "titleAr": "البيولوجيا الجزيئية: الأحماض النووية والهندسة الوراثية",
          "descriptionEn": "Discovery of DNA as the genetic material (Griffith, Avery, Hershey-Chase), Watson-Crick double helix, semi-conservative replication, chromatin packaging, RNA transcription, universal codon matrix, ribosomal protein synthesis, gene mutations, and recombinant DNA biotechnology.",
          "descriptionAr": "الأدلة القاطعة على أن DNA هو المادة الوراثية، نموذج واطسون وكريك للولب المزدوج، إنزيمات التضاعف والربط وإصلاح عيوب الـ DNA، أنواع RNA وعملية النسخ، الشفرة الوراثية وتخليق البروتين، وتكنولوجيا DNA معاد الاتحاد والهندسة الوراثية.",
          "isFullyEquipped": true,
          "lessons": [
                {
                      "id": "th_bio_ch5_l1",
                      "titleEn": "Discovery of Genetic Material, DNA Architecture & Replication",
                      "titleAr": "إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA",
                      "summaryEn": "Griffith transformation, Avery DNase proof, Hershey-Chase bacteriophage blender experiment, Watson-Crick double helix, Chargaff rules, chromatin packaging, and semi-conservative replication fork enzymology.",
                      "summaryAr": "تجارب جريفث وأفري وهيرشي وتشيس لإثبات أن DNA هو المادة الوراثية، نموذج واطسون وكريك واللولب المزدوج، قواعد شارجاف، تكثيف الكروماتين بالهيستونات، وإنزيمات تضاعف DNA اللولب والبلمرة والربط وإصلاح عيوب الـ DNA.",
                      "theoryContentEn": "### 1. Evidence of DNA as Genetic Material\n- **Historical Experiments:**\n  1. **Griffith (1928):** Transformation in *Streptococcus pneumoniae*: Heat-killed virulent $S$ strain transferred its capsule trait to non-virulent $R$ strain, transforming it into living virulent $S$ bacteria.\n  2. **Avery, MacLeod & McCarty (1944):** Purified the transforming factor and subjected it to enzymatic digestion. Proteases and RNase did not eliminate transformation; only **Deoxyribonuclease (DNase)** destroyed transforming ability, confirming DNA is the genetic substance.\n  3. **Hershey & Chase (1952):** Labeled bacteriophage protein coats with $^{35}\\text{S}$ and DNA core with $^{32}\\text{P}$. Only $^{32}\\text{P}$ was injected into bacterial host cells, proving viral genetic inheritance is mediated by DNA, not protein.\n  4. **Quantitative Cellular Evidence:** Somatic cells contain double the DNA of haploid gametes ($2n$ vs $n$), whereas protein quantities fluctuate erratically across tissues.\n\n### 2. Watson-Crick Double Helix & Chromatin Packaging\n- **Watson-Crick Model (1953):**\n  - Two antiparallel polynucleotide strands coiled into a right-handed double helix.\n  - **Backbone:** Alternating deoxyribose sugar and phosphate groups linked by covalent phosphodiester bonds (from $5'$ carbon to $3'$ carbon).\n  - **Base Pairing (Interior):** Adenine ($A$) pairs with Thymine ($T$) via **2 hydrogen bonds**; Guanine ($G$) pairs with Cytosine ($C$) via **3 hydrogen bonds**.\n  - **Dimensions:** Double helix diameter $= 2.0\\text{ nm}$; each complete turn spans $3.4\\text{ nm}$ and contains **10 base pairs** ($20$ nucleotides).\n- **Chargaff's Rules:**\n  $$\\%A = \\%T, \\quad \\%G = \\%C, \\quad \\frac{\\%A + \\%G}{\\%T + \\%C} = 1.0$$\n- **Chromatin Packaging in Eukaryotes:**\n  - Human DNA spans ~2 meters in a cell nucleus of $2-3\\,\\mu\\text{m}$ diameter, requiring $100,000$-fold condensation.\n  - **Histone Proteins:** Basic proteins rich in positively charged amino acids (**Arginine and Lysine**) whose side chains bind electrostatically to the negatively charged phosphate groups ($-\\text{PO}_4^{3-}$) of DNA, forming bead-like **Nucleosomes** ($10\\text{ nm}$ fiber; shortens DNA 10-fold).\n  - **Non-Histone Structural & Regulatory Proteins:** Fold nucleosome strings into loops and densely coiled $30\\text{ nm}$ fibers and metaphase chromosomes ($100,000$-fold compaction).\n\n### 3. DNA Replication & Enzymatic Repair\n- **Replication Fork Machinery:**\n  1. **DNA Helicase:** Unwinds the double helix and severs hydrogen bonds, exposing single-stranded templates.\n  2. **DNA Polymerase:** Synthesizes new strands strictly in the $5' \\to 3'$ direction:\n     - Continuously on the leading template ($3' \\to 5'$).\n     - Discontinuously on the lagging template ($5' \\to 3'$) as short **Okazaki fragments**.\n  3. **DNA Ligase:** Covalently seals phosphodiester nicks between adjacent fragments.\n- **DNA Repair Mechanisms:**\n  - High temperature and cellular environment cause the spontaneous loss of ~5,000 purine bases ($A$ and $G$) daily in human cells.\n  - A suite of **20 DNA Repair Enzymes** scans the double helix, excises the damaged base, and utilizes DNA polymerase and DNA ligase to re-insert the correct complementary base using the undamaged opposite strand as a template.\n  - In single-stranded RNA viruses (e.g., retroviruses, flu, coronavirus), mutation rates are enormous because there is no complementary template strand for proofreading.\n",
                      "theoryContentAr": "### ١. أدلة إثبات أن DNA هو المادة الوراثية\n- **التجارب التاريخية الحاسمة:**\n  ١. **تجارب جريفث (١٩٢٨) في التحول البكتيري:** سلالة البكتيريا الملساء الميتة حرارياً ($S$) نقلت مادتها الوراثية للسلالة الخشنة غير المميتة ($R$) فتحولت إلى سلالة ملساء حية مميتة.\n  ٢. **تجارب أفري وأعوانه (١٩٤٤):** عزلوا مادة التحول وعاملوها بالإنزيمات؛ لم يتأثر التحول بإنزيمات البروتين والـ RNA، ولكن إنزيم **ديوكسي ريبونيوكليز (DNase)** حلل DNA تماماً وأوقف التحول الوراثي مؤكداً أن DNA هو مادة الوراثة.\n  ٣. **تجارب هيرشي وتشيس (١٩٥٢) على البكتيريوفاج:** رقما غلاف الفيروس بالكبريت المشع ($^{35}\\text{S}$) والـ DNA بالفوسفور المشع ($^{32}\\text{P}$). أثبتت التجربة دخول الفوسفور المشع فقط لداخل الخلية البكتيرية وتكاثره، مؤكدة أن DNA هو المادة الوراثية.\n  ٤. **كمية DNA في الخلايا:** الخلايا الجسدية تحتوي ضعف كمية الـ DNA في الأمشاج ($2n$ إلى $n$)، بينما البروتين كميته متباينة وغير متساوية.\n\n### ٢. نموذج واطسون وكريك وتكثيف المادة الوراثية\n- **نموذج واطسون وكريك للولب المزدوج (١٩٥٣):**\n  - شريطان متعاكسان يلتفان لولبياً لليمين؛ شريط يتجه من $5' \\to 3'$ والآخر من $3' \\to 5'$.\n  - **هيكل سكر فوسفات:** يتبادل فيه السكر والفوسفات بروابط تساهمية ثنائية الإستر بالخارج.\n  - **ازدواج القواعد بالداخل:** الأدنين ($A$) يرتبط بالثايمين ($T$) برابطتين هيدروجينيتين، والجوانين ($G$) يرتبط بالسيتوزين ($C$) بثلاث روابط هيدروجينية.\n  - **الأبعاد:** قطر اللولب $2.0\\text{ نانومتر}$، وتحتوي كل لفة كاملة على **10 أزواج من القواعد** (20 نيوكليوتيدة) بطول $3.4\\text{ نانومتر}$.\n- **قواعد شارجاف للـ dsDNA:**\n  $$\\%A = \\%T, \\quad \\%G = \\%C, \\quad \\frac{\\%A + \\%G}{\\%T + \\%C} = 1.0$$\n- **تكثيف DNA في حقيقيات النوى:**\n  - يبلغ طول DNA البشري مترين داخل نواة قطرها $2-3\\,\\mu\\text{m}$، ويتطلب تقصيره 100,000 مرة.\n  - **البروتينات الهستونية:** بروتينات قاعدية غنية بالحمضين الأمينيين القاعديين **الأرجنين والليسين** ذوي الشحنة الموجبة، يرتبطان بمجموعات الفوسفات السالبة للـ DNA مكونين **النيوكليوسومات** (تقصر DNA عشر مرات).\n  - **البروتينات غير الهستونية التركيبية والتنظيمية:** تكثف النيوكليوسومات إلى ألياف وحلقات ثم كروماتين مكثف وصبغيات (تقصير 100,000 مرة).\n\n### ٣. تضاعف DNA وإنزيمات إصلاح العيوب\n- **إنزيمات التضاعف:**\n  ١. **إنزيم اللولب:** يفصل شريطي الـ DNA ويكسر الروابط الهيدروجينية.\n  ٢. **إنزيم بلمرة DNA:** يضيف النيوكليوتيدات الجديدة في اتجاه $5' \\to 3'$ فقط:\n     - متصلاً على الشريط القالب $3' \\to 5'$.\n     - متقطعاً على شكل قطع صغيرة (أوكازاكي) على الشريط القالب $5' \\to 3'$.\n  ٣. **إنزيم الربط:** يربط القطع المتقطعة لتكوين شريط كامل متصل.\n- **إصلاح عيوب الـ DNA:**\n  - تفقد خلايا الإنسان يومياً نحو 5,000 قاعدة بيورينية ($A$ أو $G$) بفعل حرارة الجسم والبيئة المائية.\n  - تتعاون **20 إنزيماً من إنزيمات الربط والإصلاح** للتعرف على التلف واستئصال النيوكليوتيدة التالفة واستبدالها بنوكليوتيدة صحيحة اعتماداً على تتابع الشريط المقابل كقالب سليم.\n  - في الفيروسات ذات المحتوى الجيني RNA المفرد (كالإنفلونزا والإيدز والكورونا)، لا يوجد شريط مكمل للإصلاح، ولذلك ترتفع فيها معدلات الطفرات الوراثية بصورة هائلة.\n",
                      "formulas": [
                            {
                                  "labelEn": "Chargaff's Equivalence Rule",
                                  "labelAr": "قاعدة شارجاف للتكافؤ البيوريني",
                                  "latex": "\\%A = \\%T \\quad \\text{and} \\quad \\%G = \\%C \\implies \\frac{A + G}{T + C} = 1"
                            },
                            {
                                  "labelEn": "DNA Helical Geometry",
                                  "labelAr": "أبعاد اللولب المزدوج",
                                  "latex": "1\\,\\text{Turn} = 10\\,\\text{Base Pairs} = 20\\,\\text{Nucleotides} = 3.4\\,\\text{nm}"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH5-L1",
                            "pageRange": "pp. 225–252"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: Discovery of Genetic Material, DNA Architecture & Replication",
                            "titleAr": "خطة درس: إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH5-L1",
                            "bloomsObjectivesEn": [
                                  "Analyze the biological structures and functional roles associated with Discovery of Genetic Material, DNA Architecture & Replication.",
                                  "Evaluate experimental and quantitative evidence governing these cellular mechanisms.",
                                  "Synthesize physiological feedback mechanisms to solve exam-standard analytical problems."
                            ],
                            "bloomsObjectivesAr": [
                                  "تحليل التراكيب البيولوجية والأدوار الوظيفية المرتبطة بـ إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA.",
                                  "تقييم الأدلة التجريبية والكمية الحاكمة لهذه الآليات الخلوية.",
                                  "تطبيق آليات التغذية الراجعة الفسيولوجية لحل المسائل التحليلية المتقدمة."
                            ],
                            "prerequisitesEn": [
                                  "General cell biology",
                                  "Biomolecules and enzymes",
                                  "Basic human physiology"
                            ],
                            "prerequisitesAr": [
                                  "بيولوجيا الخلية العامة",
                                  "الجزيئات الحيوية والإنزيمات",
                                  "مبادئ الفسيولوجيا البشرية"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "Discovery of Genetic Material, DNA Architecture & Replication",
                                        "definition": "Core concept of Discovery of Genetic Material, DNA Architecture & Replication as defined in the official curriculum."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA",
                                        "definition": "المفهوم المحوري لـ إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA وفق نواتج التعلم المعتمدة."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Inquiry Hook & Real-world Context",
                                        "phaseAr": "التهيئة والربط بالواقع",
                                        "duration": "15 min",
                                        "activitiesEn": "Examining microscopic micrographs and physiological scenarios.",
                                        "activitiesAr": "مناقشة صور مجهرية وحالات فسيولوجية واقعية."
                                  },
                                  {
                                        "phaseEn": "Direct Instruction & Concept Exploration",
                                        "phaseAr": "التدريس المباشر واستكشاف المفاهيم",
                                        "duration": "35 min",
                                        "activitiesEn": "Interactive diagram tracing and biochemical pathway mapping.",
                                        "activitiesAr": "تتبع المسارات الكيميائية الحيوية على المخططات التفاعلية."
                                  },
                                  {
                                        "phaseEn": "Collaborative Problem Solving",
                                        "phaseAr": "التدريب التشاركي وحل المسائل",
                                        "duration": "25 min",
                                        "activitiesEn": "Working through high-order thinking multi-tier questions.",
                                        "activitiesAr": "حل مسائل متدرجة تقيس مهارات التفكير العليا."
                                  },
                                  {
                                        "phaseEn": "Closure & Formative Exit Ticket",
                                        "phaseAr": "الغلق وتقييم الخروج التكويني",
                                        "duration": "15 min",
                                        "activitiesEn": "Individual synthesis and exit ticket response.",
                                        "activitiesAr": "تقييم تكويني فردي للتحقق من تحقيق نواتج التعلم."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Confusing cause and effect in the hormonal or molecular feedback of Discovery of Genetic Material, DNA Architecture & Replication."
                            ],
                            "commonMisconceptionsAr": [
                                  "الخلط بين السبب والنتيجة في آليات التغذية الراجعة الخاصة بـ إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA."
                            ],
                            "differentiationEn": {
                                  "struggling": "Provide annotated anatomical diagrams, concept flowcharts, and structured question hints.",
                                  "advanced": "Challenge with novel clinical case studies and multi-variable bioenergetic experiments."
                            },
                            "differentiationAr": {
                                  "struggling": "توفير مخططات تشريحية توضيحية وخرائط تدفق وتلميحات متدرجة للحل.",
                                  "advanced": "تكليف بدراسة حالات إكلينيكية وتصميم تجارب حيوية متعددة المتغيرات."
                            },
                            "formativeAssessmentEn": "What is the diagnostic significance and primary function of Discovery of Genetic Material, DNA Architecture & Replication?",
                            "formativeAssessmentAr": "ما الأهمية الحيوية والدور الوظيفي الأساسي لـ إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA؟",
                            "exitTicketQuestion": {
                                  "questionEn": "Summarize the key physiological principle governing Discovery of Genetic Material, DNA Architecture & Replication.",
                                  "questionAr": "لخص المبدأ الفسيولوجي الأساسي الحاكم لـ إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA.",
                                  "solutionEn": "Accurate statement of structural organization, molecular triggers, and physiological outcomes.",
                                  "solutionAr": "تحديد العلاقة الدقيقة بين البنية الجزيئية والمحفزات الحيوية والنتيجة الفسيولوجية."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch5_l1_ws",
                            "titleEn": "Worksheet: Discovery of Genetic Material, DNA Architecture & Replication",
                            "titleAr": "ورقة عمل: إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA",
                            "descriptionEn": "Comprehensive problem sheet reinforcing key principles and exam problem patterns for Discovery of Genetic Material, DNA Architecture & Replication.",
                            "descriptionAr": "ورقة تدريبية شاملة لترسيخ المفاهيم وأنماط الأسئلة الامتحانية لـ إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch5_l1_ws_p1",
                                        "titleEn": "Core Standard Question: Discovery of Genetic Material, DNA Architecture & Replication",
                                        "titleAr": "سؤال قياسي: إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA",
                                        "difficulty": "medium",
                                        "questionEn": "Which statement best characterizes the official biological mechanism of Discovery of Genetic Material, DNA Architecture & Replication according to national curriculum standards?",
                                        "questionAr": "أي العبارات التالية تصف بدقة الآلية البيولوجية لـ إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA وفقاً لمعايير المنهج الوزاري المعتمد؟",
                                        "optionsEn": [
                                              "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                              "Spontaneous non-enzymatic decay lacking cellular or genetic control",
                                              "Static unchanging equilibrium that does not respond to environmental stimuli",
                                              "Complete cellular shutdown during normal physiological homeostasis"
                                        ],
                                        "optionsAr": [
                                              "تفاعلات جزيئية متخصصة خاضعة للتنظيم عبر المستقبلات والمسارات الإنزيمية الدقيقة",
                                              "تحلل عشوائي تلقائي بدون أي تحكم خلوي أو وراثي",
                                              "اتزان استاتيكي جامد لا يستجيب لأي مؤثرات بيئية أو هرمونية",
                                              "توقف كامل للنشاط الخلوي أثناء الأداء الفسيولوجي الطبيعي"
                                        ],
                                        "correctAnswer": "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                        "correctIndex": 0,
                                        "hintEn": "Focus on the regulated, highly specific nature of physiological and genetic mechanisms.",
                                        "hintAr": "ركز على الطبيعة المنظمة وعالية التخصص للآليات الفسيولوجية والوراثية.",
                                        "stepByStepSolutionEn": [
                                              "Analyze the biological process described in the curriculum.",
                                              "Biological mechanisms operate through specific receptor, enzymatic, or structural cascades.",
                                              "This statement correctly represents the verified scientific curriculum standard."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "تحليل الآلية الحيوية المحددة في المنهج.",
                                              "تعمل الآليات البيولوجية من خلال تسلسلات متخصصة من المستقبلات والإنزيمات.",
                                              "هذه الإجابة تمثل بدقة المفهوم العلمي المعتمد في كتاب الوزارة."
                                        ],
                                        "teacherTipEn": "Remind students that biological control is always dynamic, specific, and regulated.",
                                        "teacherTipAr": "تذكير الطلاب بأن التحكم البيولوجي يتسم دائماً بالدقة والتخصص والتنظيم الفسيولوجي."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Interactive Simulation: Discovery of Genetic Material, DNA Architecture & Replication",
                            "titleAr": "محاكاة تفاعلية: إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA",
                            "descriptionEn": "Interactive virtual laboratory exploring dynamic variables in Discovery of Genetic Material, DNA Architecture & Replication.",
                            "descriptionAr": "محاكاة تفاعلية لاستكشاف المتغيرات الفسيولوجية في إثبات المادة الوراثية، نموذج واطسون وكريك وتضاعف DNA."
                      }
                },
                {
                      "id": "th_bio_ch5_l2",
                      "titleEn": "RNA Transcription, Genetic Code Translation & Biotechnology",
                      "titleAr": "تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد",
                      "summaryEn": "Types of RNA (mRNA, rRNA, tRNA), RNA polymerase transcription, universal triplet codon table, ribosomal peptide elongation, point/chromosomal mutations, restriction endonucleases, plasmids, PCR, and genetic engineering.",
                      "summaryAr": "أنواع RNA الثلاثة، عملية النسخ، الشفرة الوراثية، خطوات تخليق البروتين في الريبوسوم، الطفرات الجينية والصبغية، إنزيمات القصر البكتيرية وتكنولوجيا DNA معاد الاتحاد وتفاعل PCR وتطبيقات الهندسة الوراثية.",
                      "theoryContentEn": "### 4. Transcription & Protein Translation\n- **Types of Cellular RNA:**\n  1. **mRNA (Messenger RNA):** Carries the genetic message from nucleus to cytoplasm. Possesses a $5'$ methylated cap (ribosome binding site), start codon $\\text{AUG}$, coding sequence, and a $3'$ **poly-A tail** (~200 adenine nucleotides) that protects mRNA from cytoplasmic enzymatic degradation.\n  2. **rRNA (Ribosomal RNA):** 4 distinct types synthesized in the nucleolus, complexed with 70 ribosomal polypeptides to form the small and large ribosomal subunits.\n  3. **tRNA (Transfer RNA):** Cloverleaf-shaped adapter molecule. Features an **anticodon loop** that base-pairs with mRNA codons, and a $3'$ CCA terminal arm that covalently binds a specific activated amino acid.\n- **The Genetic Code:**\n  - Composed of 64 triplet codons. Universal start: $\\text{AUG}$ (Methionine). Stop codons: $\\text{UAA}, \\text{UAG}, \\text{UGA}$ (bind protein release factor).\n- **Ribosomal Translation Process:**\n  1. **Initiation:** Small subunit binds mRNA $5'$ cap; initiator $\\text{tRNA}^{\\text{Met}}$ binds $\\text{AUG}$; large subunit joins, forming Peptidyl ($P$) and Aminoacyl ($A$) sites.\n  2. **Elongation:** Successive aminoacyl-tRNAs enter the $A$ site; **peptidyl transferase** enzyme (part of large subunit rRNA) forms a peptide bond between the amino acid at $P$ site and the new amino acid at $A$ site. Ribosome translocates by 1 codon ($5' \\to 3'$).\n  3. **Termination:** When a stop codon reaches the $A$ site, a **Release Factor** binds it, releasing the completed polypeptide chain and dissociating the ribosomal subunits.\n\n### 5. Genetic Engineering & Molecular Biotechnology\n- **Bacterial Restriction Endonucleases:**\n  - Enzymes discovered in bacteria that cleave foreign viral DNA at specific **palindromic recognition sequences** ($4-7$ base pairs that read identical $5' \\to 3'$ on both strands).\n  - Produce staggered single-stranded **sticky ends** that anneal with complementary DNA fragments.\n  - Bacterial host protects its own genomic DNA by adding methyl ($-\\text{CH}_3$) groups to recognition sites using **Modification Enzymes**.\n- **Recombinant DNA & Cloning Plasmids:**\n  - Cleaving a bacterial plasmid and foreign gene of interest with the same restriction enzyme creates identical sticky ends.\n  - **DNA Ligase** covalently bonds them into a recombinant plasmid, transformed into *E. coli* to produce insulin, human growth hormone, or interferon at industrial scale.\n- **Polymerase Chain Reaction (PCR):**\n  - Rapid *in vitro* DNA amplification using a thermal cycler and heat-stable **Taq Polymerase** (isolated from *Thermus aquaticus* hot spring bacteria), producing billions of copies in hours.\n- **DNA Hybridization:**\n  - Heating two DNA samples from different species to $100^\\circ\\text{C}$ denatures them into single strands. Upon cooling, strands with high complementary sequences form hybrid double helices.\n  - The temperature required to re-separate hybrid DNA is directly proportional to sequence homology and evolutionary kinship.",
                      "theoryContentAr": "### ٤. النسخ وتخليق البروتين\n- **أنواع الـ RNA:**\n  ١. **mRNA (الرسول):** يحمل الشفرة من النواة للريبوسوم؛ يمتلك موقع ارتباط بالريبوسوم عند الطرف 5'، كودون بدء $\\text{AUG}$، و**ذيل عديد الأدنين** (~200 قاعدة أدنين) عند الطرف 3' لحمايته من التحلل الإنزيمي بالسيتوبلازم.\n  ٢. **rRNA (الريبوسومي):** 4 أنواع تشترك مع 70 نوعاً من عديد الببتيد في النوية لتكوين تحت وحدتي الريبوسوم الكبيرة والصغيرة.\n  ٣. **tRNA (الناقل):** يحمل الأحماض الأمينية للريبوسوم؛ يتميز بوجود موقع مضاد الكودون الذي يتكامل مع كودون mRNA، وطرف 3' ينتهي بتتابع CCA يرتبط بالحمض الأميني.\n- **الشفرة الوراثية:** 64 كودون ثلاثي. كودون البدء $\\text{AUG}$ يشفر للميثيونين. كودونات الوقف: $\\text{UAA}, \\text{UAG}, \\text{UGA}$ يرتبط بها عامل الإطلاق.\n- **مراحل تخليق البروتين:**\n  ١. البدء: ارتباط تحت الوحدة الصغيرة بـ mRNA والـ tRNA البادئ، ثم انضمام تحت الوحدة الكبيرة بموقعي $P$ و $A$.\n  ٢. الاستطالة: دخول الـ tRNA التالي لموقع $A$، ونشاط إنزيم **تفاعل نقل الببتيديل** (جزء من rRNA) لتكوين الرابطة الببتيدية، ثم تحرك الريبوسوم كودوناً واحداً.\n  ٣. الإنهاء: وصول كودون الوقف لموقع $A$ وارتباط عامل الإطلاق به، فيتحرر البروتين وتنفصل تحت وحدتا الريبوسوم.\n\n### ٥. الهندسة الوراثية والتكنولوجيا الحيوية\n- **إنزيمات القصر البكتيرية (الإنزيمات القاطعة):**\n  - إنزيمات تفصل وتقطع الـ DNA عند مواقع تعرف محددة تتكون من 4 إلى 7 نيوكليوتيدات تقرأ بنفس التتابع من $5' \\to 3'$ على كلا الشريطين (موقع تعرّف متناظر)، وتترك أطرافاً لاصقة مفردة مائلة.\n  - تحمي البكتيريا جينومها الخاص بإضافة مجموعات ميثيل ($-\\text{CH}_3$) لمواقع التعرف بواسطة **إنزيمات التعديل**.\n- **الـ DNA معاد الاتحاد:** إدخال جين مرغوب (كالإنسولين البشري أو الإنترفيرون) داخل بلازميد بكتيري بعد معاملتهما بنفس إنزيم القصر وربطهما بإنزيم الربط، ومضاعفته داخل بكتيريا *E. coli*.\n- **تفاعل البلمرة المتسلسل (PCR):** مضاعفة آلاف القطع من DNA في دقائق باستخدام جهاز الثيرموسايكلير وإنزيم **تاك بوليمريز** المتحمل للحرارة العالية.\n- **تهجين الحمض النووي:** خلط شريطي DNA من كائنين مختلفين والتسخين لـ $100^\\circ\\text{م}$ ثم التبريد؛ وتدل درجة الحرارة اللازمة لفصل اللولب الهجين على درجة القرابة التطورية بين الكائنين.",
                      "formulas": [
                            {
                                  "labelEn": "Triplet Codon Permutations",
                                  "labelAr": "تباديل الشفرة الوراثية الثلاثية",
                                  "latex": "4^3 = 64\\,\\text{Codons} \\quad (61\\,\\text{Sense} + 3\\,\\text{Stop: UAA, UAG, UGA})"
                            },
                            {
                                  "labelEn": "Polypeptide Length Formula",
                                  "labelAr": "حساب عدد الأحماض الأمينية",
                                  "latex": "N_{\\text{amino acids}} = \\frac{N_{\\text{coding nucleotides}}}{3} - 1"
                            }
                      ],
                      "moeRef": {
                            "bookTitleEn": "Ministry Biology Textbook Grade 12",
                            "bookTitleAr": "كتاب الأحياء للصف الثالث الثانوي - وزارة التربية والتعليم",
                            "grade": "Grade 12",
                            "term": "Full Year",
                            "officialCode": "MOE-SEC3-BIO-CH5-L2",
                            "pageRange": "pp. 253–276"
                      },
                      "lessonPlan": {
                            "titleEn": "Lesson Plan: RNA Transcription, Genetic Code Translation & Biotechnology",
                            "titleAr": "خطة درس: تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد",
                            "gradeLevel": "Grade 12",
                            "durationMinutes": 90,
                            "moeCode": "MOE-SEC3-BIO-CH5-L2",
                            "bloomsObjectivesEn": [
                                  "Analyze the biological structures and functional roles associated with RNA Transcription, Genetic Code Translation & Biotechnology.",
                                  "Evaluate experimental and quantitative evidence governing these cellular mechanisms.",
                                  "Synthesize physiological feedback mechanisms to solve exam-standard analytical problems."
                            ],
                            "bloomsObjectivesAr": [
                                  "تحليل التراكيب البيولوجية والأدوار الوظيفية المرتبطة بـ تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد.",
                                  "تقييم الأدلة التجريبية والكمية الحاكمة لهذه الآليات الخلوية.",
                                  "تطبيق آليات التغذية الراجعة الفسيولوجية لحل المسائل التحليلية المتقدمة."
                            ],
                            "prerequisitesEn": [
                                  "General cell biology",
                                  "Biomolecules and enzymes",
                                  "Basic human physiology"
                            ],
                            "prerequisitesAr": [
                                  "بيولوجيا الخلية العامة",
                                  "الجزيئات الحيوية والإنزيمات",
                                  "مبادئ الفسيولوجيا البشرية"
                            ],
                            "keyVocabularyEn": [
                                  {
                                        "term": "RNA Transcription, Genetic Code Translation & Biotechnology",
                                        "definition": "Core concept of RNA Transcription, Genetic Code Translation & Biotechnology as defined in the official curriculum."
                                  }
                            ],
                            "keyVocabularyAr": [
                                  {
                                        "term": "تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد",
                                        "definition": "المفهوم المحوري لـ تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد وفق نواتج التعلم المعتمدة."
                                  }
                            ],
                            "teachingPacing": [
                                  {
                                        "phaseEn": "Inquiry Hook & Real-world Context",
                                        "phaseAr": "التهيئة والربط بالواقع",
                                        "duration": "15 min",
                                        "activitiesEn": "Examining microscopic micrographs and physiological scenarios.",
                                        "activitiesAr": "مناقشة صور مجهرية وحالات فسيولوجية واقعية."
                                  },
                                  {
                                        "phaseEn": "Direct Instruction & Concept Exploration",
                                        "phaseAr": "التدريس المباشر واستكشاف المفاهيم",
                                        "duration": "35 min",
                                        "activitiesEn": "Interactive diagram tracing and biochemical pathway mapping.",
                                        "activitiesAr": "تتبع المسارات الكيميائية الحيوية على المخططات التفاعلية."
                                  },
                                  {
                                        "phaseEn": "Collaborative Problem Solving",
                                        "phaseAr": "التدريب التشاركي وحل المسائل",
                                        "duration": "25 min",
                                        "activitiesEn": "Working through high-order thinking multi-tier questions.",
                                        "activitiesAr": "حل مسائل متدرجة تقيس مهارات التفكير العليا."
                                  },
                                  {
                                        "phaseEn": "Closure & Formative Exit Ticket",
                                        "phaseAr": "الغلق وتقييم الخروج التكويني",
                                        "duration": "15 min",
                                        "activitiesEn": "Individual synthesis and exit ticket response.",
                                        "activitiesAr": "تقييم تكويني فردي للتحقق من تحقيق نواتج التعلم."
                                  }
                            ],
                            "commonMisconceptionsEn": [
                                  "Confusing cause and effect in the hormonal or molecular feedback of RNA Transcription, Genetic Code Translation & Biotechnology."
                            ],
                            "commonMisconceptionsAr": [
                                  "الخلط بين السبب والنتيجة في آليات التغذية الراجعة الخاصة بـ تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد."
                            ],
                            "differentiationEn": {
                                  "struggling": "Provide annotated anatomical diagrams, concept flowcharts, and structured question hints.",
                                  "advanced": "Challenge with novel clinical case studies and multi-variable bioenergetic experiments."
                            },
                            "differentiationAr": {
                                  "struggling": "توفير مخططات تشريحية توضيحية وخرائط تدفق وتلميحات متدرجة للحل.",
                                  "advanced": "تكليف بدراسة حالات إكلينيكية وتصميم تجارب حيوية متعددة المتغيرات."
                            },
                            "formativeAssessmentEn": "What is the diagnostic significance and primary function of RNA Transcription, Genetic Code Translation & Biotechnology?",
                            "formativeAssessmentAr": "ما الأهمية الحيوية والدور الوظيفي الأساسي لـ تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد؟",
                            "exitTicketQuestion": {
                                  "questionEn": "Summarize the key physiological principle governing RNA Transcription, Genetic Code Translation & Biotechnology.",
                                  "questionAr": "لخص المبدأ الفسيولوجي الأساسي الحاكم لـ تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد.",
                                  "solutionEn": "Accurate statement of structural organization, molecular triggers, and physiological outcomes.",
                                  "solutionAr": "تحديد العلاقة الدقيقة بين البنية الجزيئية والمحفزات الحيوية والنتيجة الفسيولوجية."
                            }
                      },
                      "worksheet": {
                            "id": "th_bio_ch5_l2_ws",
                            "titleEn": "Worksheet: RNA Transcription, Genetic Code Translation & Biotechnology",
                            "titleAr": "ورقة عمل: تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد",
                            "descriptionEn": "Comprehensive problem sheet reinforcing key principles and exam problem patterns for RNA Transcription, Genetic Code Translation & Biotechnology.",
                            "descriptionAr": "ورقة تدريبية شاملة لترسيخ المفاهيم وأنماط الأسئلة الامتحانية لـ تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد.",
                            "estimatedTimeMinutes": 45,
                            "problems": [
                                  {
                                        "id": "th_bio_ch5_l2_ws_p1",
                                        "titleEn": "Core Standard Question: RNA Transcription, Genetic Code Translation & Biotechnology",
                                        "titleAr": "سؤال قياسي: تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد",
                                        "difficulty": "medium",
                                        "questionEn": "Which statement best characterizes the official biological mechanism of RNA Transcription, Genetic Code Translation & Biotechnology according to national curriculum standards?",
                                        "questionAr": "أي العبارات التالية تصف بدقة الآلية البيولوجية لـ تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد وفقاً لمعايير المنهج الوزاري المعتمد؟",
                                        "optionsEn": [
                                              "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                              "Spontaneous non-enzymatic decay lacking cellular or genetic control",
                                              "Static unchanging equilibrium that does not respond to environmental stimuli",
                                              "Complete cellular shutdown during normal physiological homeostasis"
                                        ],
                                        "optionsAr": [
                                              "تفاعلات جزيئية متخصصة خاضعة للتنظيم عبر المستقبلات والمسارات الإنزيمية الدقيقة",
                                              "تحلل عشوائي تلقائي بدون أي تحكم خلوي أو وراثي",
                                              "اتزان استاتيكي جامد لا يستجيب لأي مؤثرات بيئية أو هرمونية",
                                              "توقف كامل للنشاط الخلوي أثناء الأداء الفسيولوجي الطبيعي"
                                        ],
                                        "correctAnswer": "Specific molecular interactions mediated by regulated receptor and enzymatic pathways",
                                        "correctIndex": 0,
                                        "hintEn": "Focus on the regulated, highly specific nature of physiological and genetic mechanisms.",
                                        "hintAr": "ركز على الطبيعة المنظمة وعالية التخصص للآليات الفسيولوجية والوراثية.",
                                        "stepByStepSolutionEn": [
                                              "Analyze the biological process described in the curriculum.",
                                              "Biological mechanisms operate through specific receptor, enzymatic, or structural cascades.",
                                              "This statement correctly represents the verified scientific curriculum standard."
                                        ],
                                        "stepByStepSolutionAr": [
                                              "تحليل الآلية الحيوية المحددة في المنهج.",
                                              "تعمل الآليات البيولوجية من خلال تسلسلات متخصصة من المستقبلات والإنزيمات.",
                                              "هذه الإجابة تمثل بدقة المفهوم العلمي المعتمد في كتاب الوزارة."
                                        ],
                                        "teacherTipEn": "Remind students that biological control is always dynamic, specific, and regulated.",
                                        "teacherTipAr": "تذكير الطلاب بأن التحكم البيولوجي يتسم دائماً بالدقة والتخصص والتنظيم الفسيولوجي."
                                  }
                            ]
                      },
                      "interactiveWidget": {
                            "type": "statics_friction",
                            "titleEn": "Interactive Simulation: RNA Transcription, Genetic Code Translation & Biotechnology",
                            "titleAr": "محاكاة تفاعلية: تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد",
                            "descriptionEn": "Interactive virtual laboratory exploring dynamic variables in RNA Transcription, Genetic Code Translation & Biotechnology.",
                            "descriptionAr": "محاكاة تفاعلية لاستكشاف المتغيرات الفسيولوجية في تخليق البروتين، الشفرة الوراثية وتكنولوجيا DNA معاد الاتحاد."
                      }
                }
          ],
          "solvedExamples": [
                {
                      "id": "th_bio_ch5_se_01",
                      "titleEn": "Example 1: DNA Stoichiometry & Hydrogen Bond Calculation",
                      "titleAr": "مثال محلول ١: حسابات أعداد القواعد واللفات والروابط الهيدروجينية في DNA",
                      "difficulty": "medium",
                      "questionEn": "A double-stranded DNA fragment contains 1,000 nucleotides. If Adenine represents 15% of the total nucleotides, calculate: (a) number of Thymine, Guanine, and Cytosine bases, (b) number of complete helical turns in this fragment, and (c) total number of hydrogen bonds stabilizing this fragment.",
                      "questionAr": "قطعة من لولب DNA مزدوج الشريط تحتوي على 1,000 نيوكليوتيدة. فإذا كانت نسبة قواعد الأدنين 15% من إجمالي النيوكليوتيدات، فاحسب: (أ) عدد كل من قواعد الثايمين والجوانين والسيتوزين، (ب) عدد اللفات الكاملة في هذه القطعة، و(ج) العدد الكلي للروابط الهيدروجينية التي تربط بين شريطي هذه القطعة.",
                      "stepByStepSolutionEn": [
                            "1. According to Chargaff's rules for dsDNA: %A = %T = 15%.",
                            "   Number of Adenine bases = 1,000 * 0.15 = 150 bases.",
                            "   Number of Thymine bases = 150 bases.",
                            "2. %G + %C = 100% - (15% + 15%) = 70%. Since %G = %C: %G = %C = 35%.",
                            "   Number of Guanine bases = 1,000 * 0.35 = 350 bases.",
                            "   Number of Cytosine bases = 350 bases.",
                            "3. Complete helical turns: Each turn contains 20 nucleotides (10 base pairs).",
                            "   Number of turns = 1,000 / 20 = 50 complete turns.",
                            "4. Total hydrogen bonds = 2 * N(A-T) + 3 * N(G-C):",
                            "   H-bonds = 2 * 150 + 3 * 350 = 300 + 1,050 = 1,350 hydrogen bonds."
                      ],
                      "stepByStepSolutionAr": [
                            "١. وفقاً لقواعد شارجاف للولب المزدوج: نسبة A = نسبة T = 15%:",
                            "   عدد قواعد الأدنين = 1,000 × 0.15 = 150 قاعدة.",
                            "   عدد قواعد الثايمين = 150 قاعدة.",
                            "٢. نسبة G + C = 100% - (15% + 15%) = 70%. وبما أن G = C: إذن نسبة كل منهما = 35%:",
                            "   عدد قواعد الجوانين = 1,000 × 0.35 = 350 قاعدة.",
                            "   عدد قواعد السيتوزين = 350 قاعدة.",
                            "٣. عدد اللفات الكاملة: تحتوي اللفة الواحدة على 20 نيوكليوتيدة (10 أزواج):",
                            "   عدد اللفات = 1,000 ÷ 20 = 50 لفة كاملة.",
                            "٤. العدد الكلي للروابط الهيدروجينية = 2 × عدد (A-T) + 3 × عدد (G-C):",
                            "   الروابط = 2 × 150 + 3 × 350 = 300 + 1050 = 1,350 رابطة هيدروجينية."
                      ],
                      "teacherTipEn": "Turns = Total nucleotides / 20 = Base pairs / 10.",
                      "teacherTipAr": "عدد اللفات = إجمالي النيوكليوتيدات على الشريطين ÷ 20 = عدد أزواج القواعد ÷ 10.",
                      "hintEn": "Turns = Total nucleotides / 20 = Base pairs / 10.",
                      "hintAr": "عدد اللفات = إجمالي النيوكليوتيدات على الشريطين ÷ 20 = عدد أزواج القواعد ÷ 10."
                },
                {
                      "id": "th_bio_ch5_se_02",
                      "titleEn": "Example 2: Protein Translation Codon-to-Peptide Calculation",
                      "titleAr": "مثال محلول ٢: حسابات كودونات mRNA وعدد الأحماض الأمينية والـ tRNA",
                      "difficulty": "medium",
                      "questionEn": "A synthesized polypeptide chain consists of 149 amino acids. Calculate: (a) minimum number of codons on the translating mRNA, (b) minimum number of nucleotides on the mRNA (excluding poly-A tail), (c) number of base pairs in the genomic gene that coded for this mRNA, and (d) number of tRNA molecules that participated in translation.",
                      "questionAr": "سلسلة عديد ببتيد تم تخليقها تتكون من 149 حمضاً أمينياً. احسب: (أ) أقل عدد من كودونات mRNA، (ب) أقل عدد نيوكليوتيدات على شريط mRNA (بدون ذيل عديد الأدنين)، (ج) عدد أزواج نيوكليوتيدات الجين في DNA الذي نُسخ منه هذا الشريط، و(د) عدد جزيئات tRNA التي شاركت في عملية الترجمة.",
                      "stepByStepSolutionEn": [
                            "1. Each amino acid corresponds to 1 coding codon, plus 1 stop codon (which does not code for an amino acid):",
                            "   Minimum mRNA codons = 149 + 1 = 150 codons.",
                            "2. Each codon consists of 3 nucleotides:",
                            "   Minimum mRNA nucleotides = 150 * 3 = 450 nucleotides.",
                            "3. The mRNA was transcribed from a double-stranded DNA gene segment:",
                            "   Number of base pairs in gene = 450 base pairs (i.e., 900 total nucleotides across both strands).",
                            "4. Each amino acid is delivered by 1 tRNA molecule:",
                            "   Number of tRNAs used = 149 tRNA molecules (the stop codon binds a release factor, not tRNA)."
                      ],
                      "stepByStepSolutionAr": [
                            "١. كل حمض أميني يلزمه كودون مشفر، بالإضافة لكودون وقف واحد في النهاية:",
                            "   أقل عدد لكودونات mRNA = 149 + 1 = 150 كودوناً.",
                            "٢. كل كودون يتكون من 3 نيوكليوتيدات:",
                            "   أقل عدد لنيوكليوتيدات mRNA = 150 × 3 = 450 نيوكليوتيدة.",
                            "٣. شريط mRNA منسوخ من أحد شريطي الجين في DNA:",
                            "   عدد أزواج نيوكليوتيدات الجين = 450 زوجاً (أي 900 نيوكليوتيدة على الشريطين).",
                            "٤. كل حمض أميني يحمله جزيء tRNA واحد (وكودون الوقف يرتبط بعامل الإطلاق ولا tRNA له):",
                            "   عدد جزيئات tRNA المشاركة = 149 جزيء tRNA."
                      ],
                      "teacherTipEn": "Always add 1 for the stop codon when converting amino acids to codons, but do NOT count tRNA for the stop codon.",
                      "teacherTipAr": "تذكر دائماً: أضف 1 لكودون الوقف عند حساب كودونات mRNA، ولا تحسب tRNA لكودون الوقف.",
                      "hintEn": "Always add 1 for the stop codon when converting amino acids to codons, but do NOT count tRNA for the stop codon.",
                      "hintAr": "تذكر دائماً: أضف 1 لكودون الوقف عند حساب كودونات mRNA، ولا تحسب tRNA لكودون الوقف."
                },
                {
                      "id": "th_bio_ch5_se_03",
                      "titleEn": "Example 3: Palindromic Recognition Sequences of Restriction Enzymes",
                      "titleAr": "مثال محلول ٣: تحليل مواقع التعرف المتناظرة لإنزيمات القصر",
                      "difficulty": "hots",
                      "questionEn": "The restriction enzyme EcoRI recognizes the sequence 5'-GAATTC-3'. Demonstrate why this sequence is palindromic, identify the cleavage sites, and draw the resulting single-stranded sticky ends.",
                      "questionAr": "يتعرف إنزيم القصر EcoRI على التتابع 5'-GAATTC-3'. أثبت أن هذا التتابع متناظر (Palindromic)، وحدد مواضع القطع، واكتب الأطراف اللاصقة الناتجة.",
                      "stepByStepSolutionEn": [
                            "1. Write the double-stranded sequence:",
                            "   Top strand:    5'-G A A T T C-3'",
                            "   Bottom strand: 3'-C T T A A G-5'",
                            "2. Read both strands 5' to 3':",
                            "   Top (5'->3'): G - A - A - T - T - C",
                            "   Bottom (5'->3'): G - A - A - T - T - C",
                            "   The sequence reads identically in the 5' to 3' direction on both strands; therefore, it is a palindrome.",
                            "3. Cleavage site: EcoRI cuts between G and A on both strands:",
                            "   Top: 5'-G | A A T T C-3'",
                            "   Bottom: 3'-C T T A A | G-5'",
                            "4. Sticky ends produced:",
                            "   Left fragment:  5'-G-3' with 3'-C T T A A-5'",
                            "   Right fragment: 5'-A A T T C-3' with 3'-G-5'",
                            "   Single-stranded sticky overhang is 5'-AATT-3'."
                      ],
                      "stepByStepSolutionAr": [
                            "١. كتابة قطعتي الشريطين المزدوجين:",
                            "   الشريط العلوي: 5'-G A A T T C-3'",
                            "   الشريط السفلي: 3'-C T T A A G-5'",
                            "٢. قراءة الشريطين من الطرف 5' إلى 3':",
                            "   العلوي: G-A-A-T-T-C، والسفلي: G-A-A-T-T-C؛ نفس القراءة بالضبط إذن هو موقع تعرّف متناظر.",
                            "٣. موضع القطع: يقطع الإنزيم بين قاعدة G وقاعدة A على كلا الشريطين:",
                            "   العلوي: 5'-G | A A T T C-3'",
                            "   السفلي: 3'-C T T A A | G-5'",
                            "٤. الأطراف اللاصقة الناتجة: أطراف مائلة مفردة تبرز فيها النيوكليوتيدات (5'-AATT-3') لتلتحم مع أي شريط مكمل."
                      ],
                      "teacherTipEn": "Palindrome test: Read 5'->3' on the forward strand; it must match 5'->3' on the reverse strand.",
                      "teacherTipAr": "شرط التناظر: تتابع القواعد من 5 إلى 3 على الشريط الأول يطابق تماماً تتابع القواعد من 5 إلى 3 على الشريط المقابل.",
                      "hintEn": "Palindrome test: Read 5'->3' on the forward strand; it must match 5'->3' on the reverse strand.",
                      "hintAr": "شرط التناظر: تتابع القواعد من 5 إلى 3 على الشريط الأول يطابق تماماً تتابع القواعد من 5 إلى 3 على الشريط المقابل."
                },
                {
                      "id": "th_bio_ch5_se_04",
                      "titleEn": "Example 4: Histone Arginine/Lysine Electrostatic Binding",
                      "titleAr": "مثال محلول ٤: آلية الارتباط الكهربي بين الهستونات وDNA في النيوكليوسومات",
                      "difficulty": "medium",
                      "questionEn": "Explain the biochemical basis of the intense attraction and spontaneous binding between DNA and histone proteins during the formation of nucleosomes.",
                      "questionAr": "فسر الأساس البيوكيميائي لقوة الجذب والارتباط التلقائي بين جزيء DNA وبروتينات الهستونات عند تكوين النيوكليوسومات.",
                      "stepByStepSolutionEn": [
                            "1. Histone proteins are exceptionally rich in the basic amino acids Arginine and Lysine.",
                            "2. At normal physiological pH, the alkyl side-chain radical groups (R) of arginine and lysine carry positive electric charges (+).",
                            "3. DNA possesses a sugar-phosphate backbone in which the phosphate groups carry negative electric charges (-PO4^(3-)) that protrude outward.",
                            "4. Powerful ionic (electrostatic) bonds form spontaneously between the positively charged histone amino acid side-chains and the negatively charged phosphate groups of DNA, tightly wrapping DNA around the histone octamer cores."
                      ],
                      "stepByStepSolutionAr": [
                            "١. تتميز البروتينات الهستونية بأنها بروتينات قاعدية غنية بالحمضين الأمينيين القاعديين الأرجنين والليسين.",
                            "٢. عند الأس الهيدروجيني الفسيولوجي الطبيعي للخلية، تحمل مجموعات الألكيل الجانبية (R) للأرجنين والليسين شحنات كهربية موجبة (+).",
                            "٣. في المقابل، يحتوي هيكل سكر فوسفات للـ DNA على مجموعات فوسفات سالبة الشحنة (-PO4) تبرز للخارج.",
                            "٤. تنشأ قوى تجاذب كهربي وروابط أيونية قوية بين مجموعات الألكيل الموجبة للهستونات ومجموعات الفوسفات السالبة للـ DNA ليلتف حولها مكوناً النيوكليوسومات."
                      ],
                      "teacherTipEn": "Histones = Positive charge (Arginine & Lysine); DNA = Negative charge (Phosphate groups).",
                      "teacherTipAr": "الهستونات = شحنة موجبة (أرجنين وليسين)؛ الـ DNA = شحنة سالبة (مجموعات الفوسفات).",
                      "hintEn": "Histones = Positive charge (Arginine & Lysine); DNA = Negative charge (Phosphate groups).",
                      "hintAr": "الهستونات = شحنة موجبة (أرجنين وليسين)؛ الـ DNA = شحنة سالبة (مجموعات الفوسفات)."
                },
                {
                      "id": "th_bio_ch5_se_05",
                      "titleEn": "Example 5: Daily Purine Loss & Repair Enzyme Efficacy",
                      "titleAr": "مثال محلول ٥: فقدان القواعد البيورينية اليومي ودور إنزيمات الربط والإصلاح",
                      "difficulty": "hots",
                      "questionEn": "In a human cell, approximately 5,000 purine bases are lost daily due to body heat and the aqueous medium. How many of these mutations typically become permanent per year, and under what specific structural condition does an irreversible mutation occur?",
                      "questionAr": "تفقد الخلية البشرية يومياً نحو 5,000 قاعدة بيورينية بفعل حرارة الجسم والوسط المائي. كم طفرة وراثية تستقر عادة في الخلية سنوياً، وفي أي حالة تركيبية محددة تحدث طفرة غير قابلة للإصلاح؟",
                      "stepByStepSolutionEn": [
                            "1. The cell utilizes 20 different DNA Repair Enzymes (primarily DNA ligases and polymerases) that continuously proofread and repair DNA. Out of ~5,000 lost purines daily (~1.8 million per year), only 2 to 3 mutations typically become permanent annually.",
                            "2. An irreversible, permanent mutation occurs ONLY when both opposing complementary bases at the exact same location across the two strands are lost or damaged simultaneously. Under this circumstance, repair enzymes lack an intact template strand to guide the insertion of the correct complementary base, leading to an irreparable alteration in the genetic code."
                      ],
                      "stepByStepSolutionAr": [
                            "١. تمتلك الخلية 20 إنزيماً مختلفاً من إنزيمات الربط والإصلاح تفحص وتصلح العيوب بانتظام؛ فمن بين 5,000 قاعدة مفقودة يومياً (نحو 1.8 مليون سنوياً)، لا يستقر كطفرات دائمة سوى 2 إلى 3 طفرات فقط كل عام.",
                            "٢. تحدث الطفرة الدائمة غير القابلة للإصلاح في حالة وحيدة فقط: عند تلف قاعدتين متقابلتين في نفس الموضع وفي نفس الوقت على كلا الشريطيَن معاً؛ حيث تعجز إنزيمات الربط عن معرفة القاعدة الأصلية لغياب الشريط القالب السليم."
                      ],
                      "teacherTipEn": "Repair enzymes require one intact strand as a template. Simultaneous opposite damage = permanent mutation.",
                      "teacherTipAr": "شرط نجاح الإصلاح: وجود شريط سليم كقالب؛ تلف القاعدتين المتقابلتين معاً = طفرة وراثية دائمة حتماً.",
                      "hintEn": "Repair enzymes require one intact strand as a template. Simultaneous opposite damage = permanent mutation.",
                      "hintAr": "شرط نجاح الإصلاح: وجود شريط سليم كقالب؛ تلف القاعدتين المتقابلتين معاً = طفرة وراثية دائمة حتماً."
                },
                {
                      "id": "th_bio_ch5_se_06",
                      "titleEn": "Example 6: PCR Kinetics & Exponential Amplification",
                      "titleAr": "مثال محلول ٦: حسابات التضاعف الأسي في جهاز تفاعل البلمرة المتسلسل (PCR)",
                      "difficulty": "medium",
                      "questionEn": "A single target gene fragment of DNA is placed in a PCR thermal cycler with Taq polymerase, primers, and dNTPs. Assuming 100% reaction efficiency, how many copies of the gene are produced after: (a) 5 thermal cycles, and (b) 20 thermal cycles?",
                      "questionAr": "وُضعت قطعة مفردة من جين مرغوب (جزيء DNA واحد) في جهاز PCR مع إنزيم تاك بوليمريز والبادئات والنيوكليوتيدات. بافتراض كفاءة تامة (100%)، احسب عدد نسخ الجين المتكونة بعد: (أ) 5 دورات حرارية، و(ب) 20 دورة حرارية.",
                      "stepByStepSolutionEn": [
                            "1. PCR follows exponential amplification: N = N0 * 2^n, where N0 is initial copies (N0 = 1) and n is cycle number.",
                            "2. After 5 cycles: N = 1 * 2^5 = 32 copies.",
                            "3. After 20 cycles: N = 1 * 2^20 = 1,048,576 copies (over 1 million copies generated in under 2 hours)."
                      ],
                      "stepByStepSolutionAr": [
                            "١. يتضاعف DNA في تفاعل PCR أسياً وفق العلاقة: N = N0 × 2^n (حيث N0 العدد الابتدائي = 1، و n رقم الدورة).",
                            "٢. بعد 5 دورات حرارية: N = 1 × 2^5 = 32 نسخة.",
                            "٣. بعد 20 دورة حرارية: N = 1 × 2^20 = 1,048,576 نسخة (أكثر من مليون نسخة في أقل من ساعتين)."
                      ],
                      "teacherTipEn": "Formula for PCR amplification: Final copies = Initial copies * 2^(number of cycles).",
                      "teacherTipAr": "قاعدة التضاعف بـ PCR: الناتج = العدد الابتدائي × 2^(عدد الدورات).",
                      "hintEn": "Formula for PCR amplification: Final copies = Initial copies * 2^(number of cycles).",
                      "hintAr": "قاعدة التضاعف بـ PCR: الناتج = العدد الابتدائي × 2^(عدد الدورات)."
                },
                {
                      "id": "th_bio_ch5_se_07",
                      "titleEn": "Example 7: DNA Hybridization and Evolutionary Kinship",
                      "titleAr": "مثال محلول ٧: تحديد درجة القرابة التطورية بتهجين الحمض النووي",
                      "difficulty": "medium",
                      "questionEn": "Hybrid double-stranded DNA is formed between Species A and Species B, and between Species A and Species C. The hybrid A-B dissociates at 88°C, while hybrid A-C dissociates at 72°C. Which pair of species shares closer evolutionary kinship, and why?",
                      "questionAr": "تم تكوين لولب هجين من DNA بين النوع A والنوع B، ولولب هجين آخر بين النوع A والنوع C. تفكك اللولب الهجين A-B عند 88°م، بينما تفكك اللولب A-C عند 72°م. أي النوعين (B أم C) أكثر قرابة وتطوراً وتطابقاً جينياً مع النوع A؟ ولماذا؟",
                      "stepByStepSolutionEn": [
                            "1. Dissociation temperature of hybrid DNA is directly proportional to the number of complementary hydrogen bonds formed between the two strands.",
                            "2. A higher melting temperature (88°C for A-B) indicates a greater degree of base-pairing complementarity, reflecting extensive nucleotide sequence homology.",
                            "3. A lower melting temperature (72°C for A-C) indicates numerous mismatched non-complementary bases, resulting in fewer hydrogen bonds and easier separation.",
                            "4. Conclusion: Species B shares significantly closer evolutionary kinship and more recent common ancestry with Species A than does Species C."
                      ],
                      "stepByStepSolutionAr": [
                            "١. تتناسب درجة حرارة فصل اللولب المزدوج الهجين طردياً مع عدد الروابط الهيدروجينية المتكونة بين الشريطين.",
                            "٢. ارتفاع درجة حرارة الفصل (88°م للهجين A-B) يدل على درجة تكامل وتزاوج عالية بين القواعد النيتروجينية، مما يعكس تشابهاً وتطابقاً جينياً كبيراً في التتابعات.",
                            "٣. انخفاض درجة حرارة الفصل (72°م للهجين A-C) يعكس وجود مناطق كثيرة غير متكاملة وضعف الروابط وسهولة الانفصال.",
                            "٤. الاستنتاج: النوع B أكثر قرابة تطورية وتطابقاً وراثياً مع النوع A من النوع C."
                      ],
                      "teacherTipEn": "Higher melting temperature = Higher sequence homology = Closer evolutionary kinship.",
                      "teacherTipAr": "درجة حرارة فصل أعلى = تطابق جيني أكبر = قرابة تطورية أقرب.",
                      "hintEn": "Higher melting temperature = Higher sequence homology = Closer evolutionary kinship.",
                      "hintAr": "درجة حرارة فصل أعلى = تطابق جيني أكبر = قرابة تطورية أقرب."
                },
                {
                      "id": "th_bio_ch5_se_08",
                      "titleEn": "Example 8: tRNA Cloverleaf Functional Regions",
                      "titleAr": "مثال محلول ٨: المواقع الوظيفية الثابتة في جزيء tRNA",
                      "difficulty": "easy",
                      "questionEn": "Identify the two most critical functional sites on a Transfer RNA (tRNA) molecule, state their nucleotide sequences or characteristics, and describe their roles in protein synthesis.",
                      "questionAr": "حدد الموقعين الوظيفيين الأكثر أهمية على جزيء tRNA، واذكر تتابعهما أو خصائصهما، وصف دورهما في تخليق البروتين.",
                      "stepByStepSolutionEn": [
                            "1. Amino Acid Attachment Site: Located at the 3' end of the tRNA molecule. It universally terminates in the single-stranded nucleotide sequence 5'-CCA-3'. The activated amino acid is covalently bonded to the terminal adenine nucleotide.",
                            "2. Anticodon Loop: Located at the opposite loop of the cloverleaf structure. It consists of a triplet of bases that temporarily pairs via complementary hydrogen bonding with the corresponding codon on the mRNA molecule at the ribosome."
                      ],
                      "stepByStepSolutionAr": [
                            "١. موقع الارتباط بالحمض الأميني: يقع عند الطرف 3' لجزيء tRNA، وينتهي دائماً بالتتابع الثابت CCA؛ حيث يرتبط الحمض الأميني المنشط برابطة تساهمية عند قاعدة الأدنين.",
                            "٢. موقع مضاد الكودون: يقع في اللفة المقابلة لطرفي الجزيء، ويتكون من 3 قواعد نيتروجينية تتكامل وتتزاوج مؤقتاً بروابط هيدروجينية مع كودون mRNA المقابل داخل الريبوسوم لضمان وضع الحمض الأميني الصحيح."
                      ],
                      "teacherTipEn": "All tRNAs end with CCA at the 3' terminus.",
                      "teacherTipAr": "جميع جزيئات tRNA تنتهي بالتتابع CCA عند الطرف 3'.",
                      "hintEn": "All tRNAs end with CCA at the 3' terminus.",
                      "hintAr": "جميع جزيئات tRNA تنتهي بالتتابع CCA عند الطرف 3'."
                },
                {
                      "id": "th_bio_ch5_se_09",
                      "titleEn": "Example 9: Reverse Transcriptase in Retroviruses and cDNA Cloning",
                      "titleAr": "مثال محلول ٩: إنزيم النسخ العكسي وتطبيقاته في إنتاج مكتبات cDNA",
                      "difficulty": "hots",
                      "questionEn": "What reaction does Reverse Transcriptase catalyze, in which organisms was it originally discovered, and how do biotechnologists exploit it to clone eukaryotic genes (such as human insulin) in bacteria?",
                      "questionAr": "ما التفاعل الذي يحفزه إنزيم النسخ العكسي، وفي أي الكائنات اكتُشف أصلاً، وكيف يستغله علماء التكنولوجيا الحيوية لاستنساخ الجينات البشرية (كالإنسولين) في البكتيريا؟",
                      "stepByStepSolutionEn": [
                            "1. Reaction: Catalyzes the synthesis of complementary single-stranded DNA from an RNA template (RNA -> DNA), reversing the normal central dogma.",
                            "2. Discovery: Discovered in retroviruses whose genetic material is single-stranded RNA (e.g., HIV, avian sarcoma virus), which use it to convert their RNA genome into DNA to integrate into host chromosomes.",
                            "3. Biotechnology Application: Human active genes are transcribed into mature processed mRNA (devoid of non-coding introns). Biotechnologists isolate mature insulin mRNA from pancreatic beta cells, use reverse transcriptase to synthesize a single cDNA strand, and then use DNA polymerase to create double-stranded cDNA. This intron-free cDNA can be successfully transcribed and translated inside bacteria, which lack mRNA splicing machinery."
                      ],
                      "stepByStepSolutionAr": [
                            "١. التفاعل: يحفز بناء شريط DNA مفرد باستخدام شريط RNA كقالب (عكس الاتجاه الطبيعي للنسخ).",
                            "٢. الاكتشاف: اكتُشف في الفيروسات القهقرية التي مادتها الوراثية RNA (كفيروس الإيدز) لتحويل جينومها إلى DNA للاندماج مع جينوم الخلية العائل.",
                            "٣. التطبيق التكنولوجي: عزل mRNA الناضج الخاص بالإنسولين من خلايا بيتا بالبنكرياس (وهو خالٍ من الأجزاء غير المشفرة أو الإنترونات)، ومعاملته بإنزيم النسخ العكسي لبناء شريط DNA مكمل، ثم استخدام بلمرة DNA لبناء الشريط المزدوج. يتم إدخال هذا الجين في بلازميد بكتيري فتنجح البكتيريا في إنتاج الإنسولين البشري بكفاءة لأنها تفتقر لآليات تهذيب الإنترونات."
                      ],
                      "teacherTipEn": "Reverse transcriptase uses mRNA to make DNA; essential because bacteria cannot splice eukaryotic introns.",
                      "teacherTipAr": "النسخ العكسي يبني DNA من mRNA، وهو الحل المثالي لأن البكتيريا تعجز عن معالجة إنترونات الجينات البشرية.",
                      "hintEn": "Reverse transcriptase uses mRNA to make DNA; essential because bacteria cannot splice eukaryotic introns.",
                      "hintAr": "النسخ العكسي يبني DNA من mRNA، وهو الحل المثالي لأن البكتيريا تعجز عن معالجة إنترونات الجينات البشرية."
                },
                {
                      "id": "th_bio_ch5_se_10",
                      "titleEn": "Example 10: Peptidyl Transferase and Ribosomal Translocation",
                      "titleAr": "مثال محلول ١٠: إنزيم تفاعل نقل الببتيديل وحركة الريبوسوم",
                      "difficulty": "hots",
                      "questionEn": "Describe the chemical reaction catalyzed by Peptidyl Transferase during protein translation, its molecular identity, and what event follows this reaction.",
                      "questionAr": "صف التفاعل الكيميائي الذي يحفزه إنزيم تفاعل نقل الببتيديل أثناء ترجمة البروتين، وما طبيعته الجزيئية، وما الحدث الذي يليه مباشرة؟",
                      "stepByStepSolutionEn": [
                            "1. Chemical Reaction: Peptidyl Transferase catalyzes the formation of a peptide bond between the carboxyl group (-COOH) of the amino acid at the Peptidyl (P) site and the amino group (-NH2) of the newly arrived amino acid at the Aminoacyl (A) site, releasing a molecule of water (dehydration synthesis).",
                            "2. Molecular Identity: Remarkably, peptidyl transferase is not a standard protein enzyme; it is an intrinsic catalytic component of the 23S/28S ribosomal RNA (rRNA) embedded in the large ribosomal subunit (a ribozyme).",
                            "3. Subsequent Event: Once the peptide bond forms, the tRNA at the P site is discharged of its amino acid. The ribosome translocates exactly 1 codon along the mRNA in the 5' -> 3' direction, shifting the newly formed peptidyl-tRNA from the A site into the P site, opening the A site to accept the next incoming aminoacyl-tRNA."
                      ],
                      "stepByStepSolutionAr": [
                            "١. التفاعل الكيميائي: يحفز تكوين رابطة ببتيدية بين مجموعة الكربوكسيل (-COOH) للحمض الأميني في موقع الببتيديل (P) ومجموعة الأمين (-NH2) للحمض الأميني في موقع الأمينوأسيل (A)، مع نزع جزيء ماء.",
                            "٢. الطبيعة الجزيئية: ليس بروتيناً تقليدياً، بل هو جزء مدمج من الـ rRNA في تحت وحدة الريبوسوم الكبيرة يعمل كإنزيم ريبوزيمي محفز.",
                            "٣. الحدث التالي: يصبح الـ tRNA في موقع P فارغاً؛ ويتحرك الريبوسوم بمقدار كودون واحد في اتجاه 5' إلى 3'، مما ينقل سلسلة عديد الببتيد النامية لموقع P، ويصبح موقع A فارغاً لاستقبال جزيء tRNA جديد يحمل الحمض الأميني التالي."
                      ],
                      "teacherTipEn": "Peptidyl transferase is an RNA enzyme (Ribozyme) within the large subunit.",
                      "teacherTipAr": "إنزيم نقل الببتيديل عبارة عن جزء تحفيزي من الـ rRNA في تحت الوحدة الكبيرة.",
                      "hintEn": "Peptidyl transferase is an RNA enzyme (Ribozyme) within the large subunit.",
                      "hintAr": "إنزيم نقل الببتيديل عبارة عن جزء تحفيزي من الـ rRNA في تحت الوحدة الكبيرة."
                }
          ],
          "exerciseProblems": [
                {
                      "id": "th_bio_ch5_ex_01",
                      "titleEn": "Exercise 1: Bacterial Transformation Destroying Enzyme",
                      "titleAr": "تمرين ١: الإنزيم الذي حلل مادة التحول البكتيري تماماً",
                      "difficulty": "easy",
                      "questionEn": "Which enzyme was utilized by Avery and his team to unequivocally prove that DNA is the active bacterial transforming principle?",
                      "questionAr": "أي الإنزيمات استخدمه العالم أفري وزملاؤه لإثبات أن DNA هو مادة التحول البكتيري بشكل قاطع؟",
                      "optionsEn": [
                            "Deoxyribonuclease (DNase)",
                            "Ribonuclease (RNase)",
                            "Trypsin protease",
                            "Amylase enzyme"
                      ],
                      "optionsAr": [
                            "ديوكسي ريبونيوكليز (DNase)",
                            "ريبونيوكليز (RNase)",
                            "إنزيم التربسين البروتيني",
                            "إنزيم الأميليز"
                      ],
                      "correctAnswer": "Deoxyribonuclease (DNase)",
                      "correctIndex": 0,
                      "hintEn": "It digests DNA completely without affecting RNA or proteins.",
                      "hintAr": "يحلل DNA تحليلاً كاملاً ولا يؤثر على البروتين أو RNA.",
                      "stepByStepSolutionEn": [
                            "Avery treated the transforming extract with DNase.",
                            "DNase hydrolyzed the DNA, completely abolishing transforming capacity, proving DNA is the active principle."
                      ],
                      "stepByStepSolutionAr": [
                            "عامل أفري مستخلص التحول بإنزيم ديوكسي ريبونيوكليز.",
                            "حلل الإنزيم جزيئات DNA فتوقفت قدرة المستخلص على إحداث التحول البكتيري تماماً."
                      ],
                      "teacherTipEn": "Proteases and RNase did NOT stop transformation; only DNase stopped it.",
                      "teacherTipAr": "الإنزيمات المحللة للبروتين لم توقف التحول؛ فقط ديوكسي ريبونيوكليز هو الذي أوقفه."
                },
                {
                      "id": "th_bio_ch5_ex_02",
                      "titleEn": "Exercise 2: Hershey and Chase Radioactive Isotopes",
                      "titleAr": "تمرين ٢: النظائر المشعة في تجارب هيرشي وتشيس",
                      "difficulty": "easy",
                      "questionEn": "Which radioactive isotopes did Hershey and Chase utilize to differentially label the protein coat and DNA of bacteriophage T2?",
                      "questionAr": "أي النظائر المشعة استخدمها هيرشي وتشيس لترقيم الغلاف البروتيني والحمض النووي للبكتيريوفاج T2 على التوالي؟",
                      "optionsEn": [
                            "Radioactive Carbon-14 and Nitrogen-15",
                            "Radioactive Sulfur-35 for protein and Phosphorus-32 for DNA",
                            "Radioactive Oxygen-18 and Hydrogen-3",
                            "Radioactive Uranium-235 and Iodine-131"
                      ],
                      "optionsAr": [
                            "الكربون المشع-14 والنيتروجين-15",
                            "الكبريت المشع-35 للبروتين والفوسفور المشع-32 للـ DNA",
                            "الأكسجين المشع-18 والهيدروجين-3",
                            "اليورانيوم المشع-235 واليود المشع-131"
                      ],
                      "correctAnswer": "Radioactive Sulfur-35 for protein and Phosphorus-32 for DNA",
                      "correctIndex": 1,
                      "hintEn": "Phosphorus is in DNA; Sulfur is in proteins (methionine/cysteine).",
                      "hintAr": "الفوسفور يدخل في تركيب DNA ولا يدخل بالبروتين؛ والكبريت يدخل بالبروتين ولا يدخل بـ DNA.",
                      "stepByStepSolutionEn": [
                            "DNA contains phosphorus but no sulfur (labeled with 32P).",
                            "Protein contains sulfur in cysteine/methionine but no phosphorus (labeled with 35S)."
                      ],
                      "stepByStepSolutionAr": [
                            "يدخل الفوسفور في تركيب DNA ولا يدخل في البروتين (رُقم بـ 32P).",
                            "يدخل الكبريت في تركيب البروتين ولا يدخل في DNA (رُقم بـ 35S)."
                      ],
                      "teacherTipEn": "32P entered the bacteria; 35S remained outside in the supernatant.",
                      "teacherTipAr": "دخل الفوسفور 32P إلى داخل البكتيريا وتكاثر، بينما بقي الكبريت 35S خارج الخلايا."
                },
                {
                      "id": "th_bio_ch5_ex_03",
                      "titleEn": "Exercise 3: Complete Turn Nucleotide Count",
                      "titleAr": "تمرين ٣: عدد النيوكليوتيدات في اللفة الكاملة من لولب DNA",
                      "difficulty": "easy",
                      "questionEn": "In the Watson-Crick double helix, how many total nucleotides are contained within one complete helical turn spanning both strands?",
                      "questionAr": "في نموذج واطسون وكريك للولب المزدوج، كم عدد النيوكليوتيدات الكلية في لفة واحدة كاملة على كلا الشريطيَن معاً؟",
                      "optionsEn": [
                            "10 nucleotides",
                            "4 nucleotides",
                            "20 nucleotides",
                            "64 nucleotides"
                      ],
                      "optionsAr": [
                            "10 نيوكليوتيدات",
                            "4 نيوكليوتيدات",
                            "20 نيوكليوتيدة",
                            "64 نيوكليوتيدة"
                      ],
                      "correctAnswer": "20 nucleotides",
                      "correctIndex": 2,
                      "hintEn": "10 base pairs = 10 on one strand + 10 on the other.",
                      "hintAr": "10 أزواج من القواعد = 10 على شريط و10 على الشريط المقابل.",
                      "stepByStepSolutionEn": [
                            "One complete turn has 10 base pairs.",
                            "Total nucleotides across both strands = 10 * 2 = 20 nucleotides."
                      ],
                      "stepByStepSolutionAr": [
                            "تحتوي اللفة الواحدة على 10 أزواج من القواعد النيتروجينية.",
                            "إجمالي النيوكليوتيدات على الشريطين في اللفة = 10 × 2 = 20 نيوكليوتيدة."
                      ],
                      "teacherTipEn": "10 nucleotides on a single strand; 20 nucleotides on the double helix.",
                      "teacherTipAr": "10 نيوكليوتيدات على الشريط المفرد؛ و20 نيوكليوتيدة على اللولب المزدوج."
                },
                {
                      "id": "th_bio_ch5_ex_04",
                      "titleEn": "Exercise 4: Histone Core Basic Amino Acids",
                      "titleAr": "تمرين ٤: الأحماض الأمينية القاعدية في بروتينات الهستونات",
                      "difficulty": "medium",
                      "questionEn": "Which two basic amino acids are heavily concentrated in histone proteins to facilitate electrostatic wrapping of the negatively charged DNA molecule?",
                      "questionAr": "أي حمضين أمينيين قاعديين يتوافران بكثرة في بروتينات الهستونات لتسهيل الالتفاف الكهربي لجزيء DNA سالب الشحنة؟",
                      "optionsEn": [
                            "Valine and Alanine",
                            "Glycine and Proline",
                            "Serine and Threonine",
                            "Arginine and Lysine"
                      ],
                      "optionsAr": [
                            "الفالين والألانين",
                            "الجليسين والبرولين",
                            "السيرين والثريونين",
                            "الأرجنين والليسين"
                      ],
                      "correctAnswer": "Arginine and Lysine",
                      "correctIndex": 3,
                      "hintEn": "They possess positively charged basic side chains.",
                      "hintAr": "أحماض أمينية قاعدية تحمل شحنات موجبة على مجموعاتها الجانبية.",
                      "stepByStepSolutionEn": [
                            "Histones are rich in arginine and lysine.",
                            "Their positively charged alkyl side-chains bind electrostatically to the negative phosphate groups of DNA."
                      ],
                      "stepByStepSolutionAr": [
                            "تحتوي الهستونات على نسب عالية من الأرجنين والليسين.",
                            "تحمل مجموعاتها الجانبية شحنات موجبة ترتبط بالفوسفات السالب للـ DNA."
                      ],
                      "teacherTipEn": "Arginine and Lysine = Positive charges creating nucleosomes.",
                      "teacherTipAr": "الأرجنين والليسين = الشحنة الموجبة لتكوين النيوكليوسومات."
                },
                {
                      "id": "th_bio_ch5_ex_05",
                      "titleEn": "Exercise 5: Universal Start Codon Sequence",
                      "titleAr": "تمرين ٥: تتابع كودون البدء العام على شريط mRNA",
                      "difficulty": "easy",
                      "questionEn": "What is the universal start codon present at the beginning of the coding sequence on an mRNA molecule?",
                      "questionAr": "ما هو تتابع كودون البدء العام الموجود في بداية الجزء المشفر على جزيء mRNA؟",
                      "optionsEn": [
                            "5'-AUG-3'",
                            "5'-UAA-3'",
                            "5'-UAG-3'",
                            "5'-UGA-3'"
                      ],
                      "optionsAr": [
                            "5'-AUG-3'",
                            "5'-UAA-3'",
                            "5'-UAG-3'",
                            "5'-UGA-3'"
                      ],
                      "correctAnswer": "5'-AUG-3'",
                      "correctIndex": 0,
                      "hintEn": "It codes for the amino acid Methionine.",
                      "hintAr": "يشفر للحمض الأميني ميثيونين.",
                      "stepByStepSolutionEn": [
                            "AUG is the start codon in virtually all organisms.",
                            "It codes for Methionine and establishes the reading frame for the ribosome."
                      ],
                      "stepByStepSolutionAr": [
                            "كودون البدء العام هو AUG.",
                            "يشفر للحمض الأميني ميثيونين ويحدد إطار القراءة في الريبوسوم."
                      ],
                      "teacherTipEn": "AUG = Start (Methionine); UAA/UAG/UGA = Stop.",
                      "teacherTipAr": "AUG = كودون البدء (ميثيونين)؛ UAA, UAG, UGA = كودونات الوقف الثلاثة."
                },
                {
                      "id": "th_bio_ch5_ex_06",
                      "titleEn": "Exercise 6: DNA Repair Enzyme Daily Purine Loss",
                      "titleAr": "تمرين ٦: عدد القواعد البيورينية المفقودة يومياً في الخلية البشرية",
                      "difficulty": "medium",
                      "questionEn": "Approximately how many purine bases (Adenine and Guanine) are spontaneously lost every single day from the DNA of a living human cell due to body temperature and hydration?",
                      "questionAr": "كم عدد القواعد البيورينية (الأدنين والجوانين) التي تفقدها الخلية البشرية الحية يومياً تلقائياً بفعل حرارة الجسم والبيئة المائية؟",
                      "optionsEn": [
                            "About 50 bases",
                            "About 5,000 bases",
                            "About 500,000 bases",
                            "Exactly 0 bases"
                      ],
                      "optionsAr": [
                            "نحو 50 قاعدة",
                            "نحو 5,000 قاعدة",
                            "نحو 500,000 قاعدة",
                            "صفر قاعدة تماماً"
                      ],
                      "correctAnswer": "About 5,000 bases",
                      "correctIndex": 1,
                      "hintEn": "A suite of 20 repair enzymes works continuously to fix them.",
                      "hintAr": "تعمل 20 إنزيماً من إنزيمات الإصلاح والربط لإصلاحها باستمرار.",
                      "stepByStepSolutionEn": [
                            "Human DNA loses about 5,000 purine bases daily due to thermal cleavage of glycosidic bonds.",
                            "DNA repair enzymes scan and replace these lost bases using the opposite strand as a template."
                      ],
                      "stepByStepSolutionAr": [
                            "تفقد خلية الإنسان يومياً نحو 5,000 قاعدة بيورينية بسبب حرارة الجسم والوسط المائي.",
                            "تتعرف عليها إنزيمات الربط الـ 20 وتستبدلها بالاعتماد على الشريط المقابل السليم."
                      ],
                      "teacherTipEn": "5000 purines/day lost; only 2-3 mutations/year survive.",
                      "teacherTipAr": "يُفقد 5,000 بيورين يومياً؛ ولا ينجو كطفرات سوى 2 إلى 3 طفرات سنوياً."
                },
                {
                      "id": "th_bio_ch5_ex_07",
                      "titleEn": "Exercise 7: Palindromic Cleavage Pattern of Restriction Enzymes",
                      "titleAr": "تمرين ٧: الخاصية المميزة لمواقع تعرّف إنزيمات القصر البكتيرية",
                      "difficulty": "medium",
                      "questionEn": "What distinctive structural feature characterizes the recognition sequences recognized and cleaved by bacterial restriction endonucleases?",
                      "questionAr": "ما الخاصية التركيبية المميزة لمواقع التعرف التي تتعرف عليها وتقطع عندها إنزيمات القصر البكتيرية؟",
                      "optionsEn": [
                            "They consist of purely uracil nucleotides",
                            "They are palindromic sequences of 4 to 7 base pairs that read identically 5' to 3' on both strands",
                            "They are always located inside the nuclear membrane",
                            "They code exclusively for hemoglobin"
                      ],
                      "optionsAr": [
                            "تتكون بالكامل من نيوكليوتيدات اليوراسيل",
                            "تتابعات متناظرة (Palindromic) تتكون من 4 إلى 7 أزواج تقرأ بنفس التتابع من 5' إلى 3' على كلا الشريطين",
                            "توجد دائماً داخل الغشاء النووي",
                            "تشفر فقط لبروتين الهيموجلوبين"
                      ],
                      "correctAnswer": "They are palindromic sequences of 4 to 7 base pairs that read identically 5' to 3' on both strands",
                      "correctIndex": 1,
                      "hintEn": "A palindrome reads the same backwards and forwards.",
                      "hintAr": "موقع التعرف متناظر يقرأ بنفس الترتيب في اتجاه 5 إلى 3 على كلا الشريطين.",
                      "stepByStepSolutionEn": [
                            "Restriction enzymes recognize short palindromes (4-7 base pairs).",
                            "The sequence on one strand from 5'->3' matches the complementary strand from 5'->3'."
                      ],
                      "stepByStepSolutionAr": [
                            "تتعرف إنزيمات القصر على تتابعات متناظرة من 4 إلى 7 أزواج من القواعد.",
                            "تكون قراءة الشريط الأول من 5' إلى 3' مطابقة لقراءة الشريط المكمل من 5' إلى 3'."
                      ],
                      "teacherTipEn": "Restriction enzymes leave complementary single-stranded sticky ends.",
                      "teacherTipAr": "تترك إنزيمات القصر أطرافاً لاصقة مفردة يسهل التحامها مع جينات أخرى."
                },
                {
                      "id": "th_bio_ch5_ex_08",
                      "titleEn": "Exercise 8: Enzyme Synthesizing DNA from RNA Template",
                      "titleAr": "تمرين ٨: الإنزيم الذي يبني شريط DNA من قالب RNA",
                      "difficulty": "medium",
                      "questionEn": "Which viral enzyme catalyzes the synthesis of complementary DNA (cDNA) using a single-stranded RNA molecule as a template?",
                      "questionAr": "أي الإنزيمات الفيروسية يحفز بناء شريط DNA مكمل باستخدام شريط RNA مفرد كقالب؟",
                      "optionsEn": [
                            "DNA Helicase",
                            "Amylase enzyme",
                            "Reverse Transcriptase",
                            "RNA Polymerase"
                      ],
                      "optionsAr": [
                            "إنزيم اللولب",
                            "إنزيم الأميليز",
                            "إنزيم النسخ العكسي",
                            "إنزيم بلمرة RNA"
                      ],
                      "correctAnswer": "Reverse Transcriptase",
                      "correctIndex": 2,
                      "hintEn": "It reverses the normal flow of transcription.",
                      "hintAr": "يعكس اتجاه النسخ الطبيعي من RNA إلى DNA.",
                      "stepByStepSolutionEn": [
                            "Reverse transcriptase synthesizes DNA from an RNA template.",
                            "It is found in retroviruses and is extensively used in recombinant DNA technology to clone processed genes."
                      ],
                      "stepByStepSolutionAr": [
                            "يقوم إنزيم النسخ العكسي ببناء شريط DNA من قالب RNA.",
                            "يوجد في الفيروسات القهقرية ويستخدم لاستنساخ الجينات الخالية من الإنترونات."
                      ],
                      "teacherTipEn": "RNA -> DNA = Reverse Transcriptase; DNA -> RNA = RNA Polymerase.",
                      "teacherTipAr": "من RNA إلى DNA = نسخ عكسي؛ من DNA إلى RNA = بلمرة RNA."
                },
                {
                      "id": "th_bio_ch5_ex_09",
                      "titleEn": "Exercise 9: Discontinuous Synthesis and Okazaki Fragments",
                      "titleAr": "تمرين ٩: التضاعف غير المتصل وقطع أوكازاكي",
                      "difficulty": "hots",
                      "questionEn": "Why is the lagging strand synthesized discontinuously in short Okazaki fragments during DNA replication?",
                      "questionAr": "لماذا يتم بناء الشريط المتخلف (Lagging strand) بشكل غير متصل على هيئة قطع أوكازاكي صغيرة أثناء تضاعف DNA؟",
                      "optionsEn": [
                            "Because DNA polymerase can only synthesize in the 5' to 3' direction, while the replication fork moves towards the 3' end of that template strand",
                            "Because helicase moves backward every 10 seconds",
                            "Because RNA primase runs out of ATP",
                            "Because lagging strands are composed of cellulose"
                      ],
                      "optionsAr": [
                            "لأن إنزيم بلمرة DNA يضيف النيوكليوتيدات في اتجاه 5' إلى 3' فقط، بينما يتحرك شوكة التضاعف في اتجاه الطرف 3' لشريط القالب المقابل",
                            "لأن إنزيم اللولب يتحرك للخلف كل 10 ثوانٍ",
                            "لأن إنزيم بلمرة RNA تنفد منه طاقة ATP",
                            "لأن الشريط المتخلف يتكون من ألياف السليلوز"
                      ],
                      "correctAnswer": "Because DNA polymerase can only synthesize in the 5' to 3' direction, while the replication fork moves towards the 3' end of that template strand",
                      "correctIndex": 0,
                      "hintEn": "DNA polymerase works strictly 5' -> 3'.",
                      "hintAr": "إنزيم البلمرة يعمل فقط في اتجاه 5' إلى 3'.",
                      "stepByStepSolutionEn": [
                            "DNA polymerase can only append nucleotides to a free 3'-OH group (5' -> 3' direction).",
                            "On the lagging template (5' -> 3'), synthesis must occur in bursts away from the fork, forming Okazaki fragments subsequently joined by DNA ligase."
                      ],
                      "stepByStepSolutionAr": [
                            "يعمل إنزيم بلمرة DNA في اتجاه 5' إلى 3' فقط.",
                            "لذلك يُبنى الشريط المقابل للقالب 5' -> 3' على هيئة قطع صغيرة تسمى قطع أوكازاكي يربطها إنزيم الربط لاحقاً."
                      ],
                      "teacherTipEn": "Leading strand = Continuous; Lagging strand = Okazaki fragments + DNA Ligase.",
                      "teacherTipAr": "الشريط المتقدم = متصل؛ والشريط المتأخر = قطع أوكازاكي وإنزيم الربط."
                },
                {
                      "id": "th_bio_ch5_ex_10",
                      "titleEn": "Exercise 10: Bacterial Modification Enzyme Role",
                      "titleAr": "تمرين ١٠: وظيفة الإنزيمات المعدلة في حماية جينوم البكتيريا",
                      "difficulty": "medium",
                      "questionEn": "How do bacterial Modification Enzymes protect the host bacterium's own DNA from destruction by its endogenous restriction endonucleases?",
                      "questionAr": "كيف تحمي الإنزيمات المعدلة البكتيرية الحمض النووي الخاص بالخلية البكتيرية من التحلل بفعل إنزيمات القصر الموجودة داخلها؟",
                      "optionsEn": [
                            "By coating the entire bacterial chromosome with a waxy cuticle",
                            "By adding methyl groups (-CH3) to specific nucleotides within recognition sequences",
                            "By heating the bacterial cytoplasm to 100°C",
                            "By neutralizing bacterial DNA with hydrochloric acid"
                      ],
                      "optionsAr": [
                            "بتغليف الكروموسوم البكتيري بطبقة كيوتين شمعية",
                            "بإضافة مجموعات ميثيل (-CH3) إلى نيوكليوتيدات معينة بمواقع التعرف في جينوم البكتيريا",
                            "بتسخين سيتوبلازم البكتيريا إلى 100°م",
                            "بمعادلة الـ DNA بحمض الهيدروكلوريك"
                      ],
                      "correctAnswer": "By adding methyl groups (-CH3) to specific nucleotides within recognition sequences",
                      "correctIndex": 1,
                      "hintEn": "Methylation changes the recognition site shape.",
                      "hintAr": "المثيلة (إضافة مجموعة ميثيل) تعطل تعرف إنزيم القصر عليها.",
                      "stepByStepSolutionEn": [
                            "Modification enzymes add methyl (-CH3) groups to recognition sites on bacterial genomic DNA.",
                            "The methylated sites cannot be bound or cleaved by restriction endonucleases, sparing host DNA while destroying unmethylated viral DNA."
                      ],
                      "stepByStepSolutionAr": [
                            "تضيف الإنزيمات المعدلة مجموعات ميثيل (-CH3) إلى مواقع التعرف في جينوم البكتيريا.",
                            "تمنع مجموعات الميثيل إنزيمات القصر من قطع DNA البكتيريا فتحمي نفسها وتدمر DNA الفيروسي غير المميثل."
                      ],
                      "teacherTipEn": "Restriction cuts; Modification protects via methylation.",
                      "teacherTipAr": "إنزيمات القصر تقطع؛ والإنزيمات المعدلة تحمي بإضافة مجموعات الميثيل."
                },
                {
                      "id": "th_bio_ch5_ex_11",
                      "titleEn": "Exercise 11: Poly-A Tail Function on mRNA",
                      "titleAr": "تمرين ١١: الدور الحيوي لذيل عديد الأدنين على جزيء mRNA",
                      "difficulty": "easy",
                      "questionEn": "What is the primary biological role of the poly-A tail (~200 adenine nucleotides) attached to the 3' end of an mRNA molecule?",
                      "questionAr": "ما الوظيفة البيولوجية الأساسية لذيل عديد الأدنين (نحو 200 نيوكليوتيدة أدنين) المتصل بالطرف 3' لجزيء mRNA؟",
                      "optionsEn": [
                            "It codes for 200 essential amino acids",
                            "It anchors the mRNA to the nuclear pore permanently",
                            "It protects the mRNA from enzymatic degradation by cytoplasmic nucleases",
                            "It unwinds DNA during replication"
                      ],
                      "optionsAr": [
                            "يشفر لـ 200 حمض أميني أساسي",
                            "يثبت جزيء mRNA في الثقب النووي بشكل دائم",
                            "يحمي جزيء mRNA من التحلل بفعل الإنزيمات الهاضمة في السيتوبلازم",
                            "يفك التفاف لولب DNA أثناء التضاعف"
                      ],
                      "correctAnswer": "It protects the mRNA from enzymatic degradation by cytoplasmic nucleases",
                      "correctIndex": 2,
                      "hintEn": "It is a protective buffer, not a coding sequence.",
                      "hintAr": "ذيل واقٍ لا يشفر لأي أحماض أمينية.",
                      "stepByStepSolutionEn": [
                            "The poly-A tail consists of ~200 adenines at the 3' end.",
                            "It does not code for proteins; it shields mRNA from exonucleases in the cytoplasm."
                      ],
                      "stepByStepSolutionAr": [
                            "يتكون ذيل عديد الأدنين من نحو 200 قاعدة أدنين عند الطرف 3'.",
                            "لا يمثل شفرة وراثية، ووظيفته حماية mRNA من الإنزيمات الهاضمة بالسيتوبلازم."
                      ],
                      "teacherTipEn": "Cap at 5' binds ribosome; Poly-A tail at 3' protects from degradation.",
                      "teacherTipAr": "الطرف 5' به موقع الارتباط بالريبوسوم؛ والطرف 3' به ذيل عديد الأدنين للحماية."
                },
                {
                      "id": "th_bio_ch5_ex_12",
                      "titleEn": "Exercise 12: Stop Codons and Release Factor Binding",
                      "titleAr": "تمرين ١٢: كودونات الوقف وارتباط عامل الإطلاق",
                      "difficulty": "medium",
                      "questionEn": "Which of the following triplets is one of the three stop codons that does NOT code for any amino acid and binds the translation release factor?",
                      "questionAr": "أي من الثلاثيات التالية يمثل أحد كودونات الوقف الثلاثة التي لا تشفر لأي حمض أميني ويرتبط بها بروتين عامل الإطلاق؟",
                      "optionsEn": [
                            "5'-AUG-3'",
                            "5'-CCC-3'",
                            "5'-GGG-3'",
                            "5'-UAG-3'"
                      ],
                      "optionsAr": [
                            "5'-AUG-3'",
                            "5'-CCC-3'",
                            "5'-GGG-3'",
                            "5'-UAG-3'"
                      ],
                      "correctAnswer": "5'-UAG-3'",
                      "correctIndex": 3,
                      "hintEn": "Stop codons are UAA, UAG, and UGA.",
                      "hintAr": "كودونات الوقف الثلاثة هي UAA و UAG و UGA.",
                      "stepByStepSolutionEn": [
                            "The three universal stop codons are UAA, UAG, and UGA.",
                            "When any of these codons enters the A site, the Release Factor binds it, releasing the polypeptide."
                      ],
                      "stepByStepSolutionAr": [
                            "كودونات الوقف الثلاثة في جدول الشفرة هي UAA و UAG و UGA.",
                            "عند وصول أحدها لموقع A يرتبط به عامل الإطلاق فتتوقف الترجمة ويتحرر البروتين."
                      ],
                      "teacherTipEn": "Stop codons do NOT have matching tRNAs; they bind the Release Factor protein.",
                      "teacherTipAr": "كودونات الوقف لا يوجد لها tRNA مقابل؛ بل يرتبط بها بروتين عامل الإطلاق."
                },
                {
                      "id": "th_bio_ch5_ex_13",
                      "titleEn": "Exercise 13: Chargaff Purine-Pyrimidine Equivalence",
                      "titleAr": "تمرين ١٣: نسبة البيورينات إلى البيريميدينات وفق قواعد شارجاف",
                      "difficulty": "easy",
                      "questionEn": "According to Chargaff's rules for double-stranded DNA, what is the exact numerical ratio of total Purines (A + G) to total Pyrimidines (T + C)?",
                      "questionAr": "وفقاً لقواعد شارجاف للولب DNA المزدوج، ما النسبة العددية الدقيقة لمجموع قواعد البيورينات (A + G) إلى مجموع قواعد البيريميدينات (T + C)؟",
                      "optionsEn": [
                            "1.0 (or 1 : 1)",
                            "2.0 (or 2 : 1)",
                            "3.0 (or 3 : 1)",
                            "0.5 (or 1 : 2)"
                      ],
                      "optionsAr": [
                            "1.0 (أو 1 : 1)",
                            "2.0 (أو 2 : 1)",
                            "3.0 (أو 3 : 1)",
                            "0.5 (أو 1 : 2)"
                      ],
                      "correctAnswer": "1.0 (or 1 : 1)",
                      "correctIndex": 0,
                      "hintEn": "A = T and G = C, so (A+G) = (T+C).",
                      "hintAr": "بما أن A = T و G = C، إذن (A+G) = (T+C).",
                      "stepByStepSolutionEn": [
                            "In double-stranded DNA, Adenine pairs with Thymine, Guanine with Cytosine.",
                            "Total Purines (A + G) = Total Pyrimidines (T + C) = 50% of all bases, so ratio = 1.0."
                      ],
                      "stepByStepSolutionAr": [
                            "في لولب DNA المزدوج يرتبط كل بيورين ببيريميدين مقابل.",
                            "مجموع البيورينات (A + G) يساوي مجموع البيريميدينات (T + C) ويساوي 50%؛ فالنسبة 1.0 دائماً."
                      ],
                      "teacherTipEn": "Purines = Pyrimidines = 50% in any dsDNA.",
                      "teacherTipAr": "البيورينات = البيريميدينات = 50% في أي لولب مزدوج DNA."
                },
                {
                      "id": "th_bio_ch5_ex_14",
                      "titleEn": "Exercise 14: Taq Polymerase Hot Spring Origin",
                      "titleAr": "تمرين ١٤: مصدر إنزيم تاك بوليمريز وخصائصه الحرارية",
                      "difficulty": "medium",
                      "questionEn": "Why is Taq polymerase specifically utilized in PCR thermocyclers instead of ordinary human or bacterial DNA polymerases?",
                      "questionAr": "لماذا يُستخدم إنزيم تاك بوليمريز (Taq Polymerase) تحديداً في أجهزة PCR بدلاً من إنزيمات بلمرة DNA العادية في الإنسان أو البكتيريا؟",
                      "optionsEn": [
                            "Because it functions only in freezing conditions",
                            "Because it is thermostable and withstands high temperatures (95°C) required to denature DNA without becoming denatured itself",
                            "Because it synthesizes RNA instead of DNA",
                            "Because it transforms bacteria into plant cells"
                      ],
                      "optionsAr": [
                            "لأنه يعمل فقط في درجات التجمد",
                            "لأنه إنزيم متكيف مع الحرارة العالية ويتحمل درجات حرارة تصل لـ 95°م دون أن يتلف أو يفقد فاعليته أثناء فصل شريطي DNA",
                            "لأنه يصنع RNA بدلاً من DNA",
                            "لأنه يحول البكتيريا إلى خلايا نباتية"
                      ],
                      "correctAnswer": "Because it is thermostable and withstands high temperatures (95°C) required to denature DNA without becoming denatured itself",
                      "correctIndex": 1,
                      "hintEn": "Isolated from Thermus aquaticus bacteria living in volcanic hot springs.",
                      "hintAr": "مستخلص من بكتيريا تعيش في الينابيع المائية الحارة البركانية.",
                      "stepByStepSolutionEn": [
                            "PCR requires heating to 95°C to denature DNA strands.",
                            "Normal polymerases denature at 95°C; Taq polymerase from Thermus aquaticus thrives at high heat and synthesizes DNA at 72°C."
                      ],
                      "stepByStepSolutionAr": [
                            "يتطلب تفاعل PCR تسخين العينة لـ 95°م لفصل الشريطيَن.",
                            "تتلف الإنزيمات العادية بالحرارة؛ بينما تاك بوليمريز مستخلص من بكتيريا الينابيع الحارة ويتحمل الحرارة العالية بكفاءة."
                      ],
                      "teacherTipEn": "Taq = Thermus aquaticus, heat-tolerant polymerase.",
                      "teacherTipAr": "تاك بوليمريز إنزيم بلمرة متحمل للحرارة العالية ومثالي لجهاز PCR."
                },
                {
                      "id": "th_bio_ch5_ex_15",
                      "titleEn": "Exercise 15: tRNA 3' Terminal Sequence",
                      "titleAr": "تمرين ١٥: التتابع النيوكليوتيدي الثابت عند الطرف 3' لجزيء tRNA",
                      "difficulty": "easy",
                      "questionEn": "What invariant single-stranded trinucleotide sequence is present at the 3' terminus of every functional transfer RNA (tRNA) molecule to attach an activated amino acid?",
                      "questionAr": "ما التتابع النيوكليوتيدي الثلاثي الثابت المتواجد عند الطرف 3' لجميع جزيئات الـ tRNA الناقلة لترتبط بالحمض الأميني؟",
                      "optionsEn": [
                            "5'-AUG-3'",
                            "5'-UAA-3'",
                            "5'-CCA-3'",
                            "5'-GGG-3'"
                      ],
                      "optionsAr": [
                            "5'-AUG-3'",
                            "5'-UAA-3'",
                            "5'-CCA-3'",
                            "5'-GGG-3'"
                      ],
                      "correctAnswer": "5'-CCA-3'",
                      "correctIndex": 2,
                      "hintEn": "It ends with Adenine, where the amino acid carboxyl attaches.",
                      "hintAr": "ينتهي بقاعدة الأدنين التي يرتبط بها الحمض الأميني برابطة تساهمية.",
                      "stepByStepSolutionEn": [
                            "The 3' end of tRNA terminates in the sequence CCA.",
                            "The amino acid is attached covalently to the terminal ribose of this CCA tail."
                      ],
                      "stepByStepSolutionAr": [
                            "ينتهي الطرف 3' لجميع جزيئات tRNA بالتتابع الثابت CCA.",
                            "يرتبط الحمض الأميني المنشط بنهاية هذا التتابع عند قاعدة الأدنين."
                      ],
                      "teacherTipEn": "All tRNAs carry CCA at their 3' end.",
                      "teacherTipAr": "جميع جزيئات tRNA تحمل التتابع CCA عند طرفها 3'."
                }
          ],
          "databank": bioCh5Databank
        }
  ]
};
