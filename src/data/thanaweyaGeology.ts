import type { Branch } from '../types/curriculum';
import { geologyCh1Databank } from './databanks/thanaweya/geologyCh1Databank';
import { geologyCh2Databank } from './databanks/thanaweya/geologyCh2Databank';
import { geologyCh3Databank } from './databanks/thanaweya/geologyCh3Databank';
import { geologyCh4Databank } from './databanks/thanaweya/geologyCh4Databank';
import { geologyCh5Databank } from './databanks/thanaweya/geologyCh5Databank';
import { geologyCh6Databank } from './databanks/thanaweya/geologyCh6Databank';
import { geologyCh7Databank } from './databanks/thanaweya/geologyCh7Databank';
import { geologyCh1SolvedExamples, geologyCh1Exercises } from './textbook/thanaweya/geologyCh1Textbook';
import { geologyCh2SolvedExamples, geologyCh2Exercises } from './textbook/thanaweya/geologyCh2Textbook';
import { geologyCh3SolvedExamples, geologyCh3Exercises } from './textbook/thanaweya/geologyCh3Textbook';
import { geologyCh4SolvedExamples, geologyCh4Exercises } from './textbook/thanaweya/geologyCh4Textbook';
import { geologyCh5SolvedExamples, geologyCh5Exercises } from './textbook/thanaweya/geologyCh5Textbook';
import { geologyCh6SolvedExamples, geologyCh6Exercises } from './textbook/thanaweya/geologyCh6Textbook';
import { geologyCh7SolvedExamples, geologyCh7Exercises } from './textbook/thanaweya/geologyCh7Textbook';

export const thanaweyaGeologyBranch: Branch = {
  id: "thanaweya_geology",
  titleEn: "Geology & Environmental Sciences",
  titleAr: "الجيولوجيا والعلوم البيئية",
  categoryEn: "Scientific Division (Earth & Natural Sciences)",
  categoryAr: "شعبة علمي علوم (علوم الأرض والبيئة)",
  iconName: "Mountain",
  colorGradient: "from-amber-700 via-stone-700 to-emerald-800",
  chapters: [
    {
      id: "th_geo_earth_ch1",
      chapterNumber: 1,
      titleEn: "Unit 1: Earth Science, Planetary Structure & Geological Formations",
      titleAr: "الباب الأول: علم الجيولوجيا ومادة الأرض والتراكيب الجيولوجية",
      descriptionEn: "Earth interior layers (Crust, Mantle, Core), atmospheric and oceanic envelopes, primary vs tectonic secondary structures (Folds, Faults, Joints), unconformity surfaces, and geological time scale dating.",
      descriptionAr: "مكونات كوكب الأرض وأغلفتها، التراكيب الجيولوجية الأولية والتكتونية (الطيات، الفوالق، الفواصل)، أسطح عدم التوافق، والسلم الجيولوجي وتأريخ عمر الأرض بالحفريات المرشدة.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "th_geo_earth_ch1_l1",
          titleEn: "Earth Structure, Internal Layering & Planetary Envelopes",
          titleAr: "أفرع الجيولوجيا والتركيب الداخلي للأرض والأغلفة الطبيعية",
          summaryEn: "Branches of geology, structural layers (Continental/Oceanic Crust, Mantle, Molten Outer Core, Solid Inner Core), and the origin of Atmosphere and Hydrosphere.",
          summaryAr: "أفرع علم الجيولوجيا، ونطاقات كوكب الأرض (القشرة، الوشاح، اللب الخارجي والداخلي)، ونشأة الغلافين الجوي والمائي ومستوى سطح البحر.",
          theoryContentEn: "### 1. Branches of Geology & Core Disciplines\n- **Physical Geology (الجيولوجيا الطبيعية):** Studies surface and internal physical factors (winds, rivers, tectonic forces) affecting crustal rocks.\n- **Mineralogy & Crystallography (المعادن والبلورات):** Analyzes mineral crystal lattices, geometric forms, and physical/chemical properties.\n- **Stratigraphy (علم الطبقات):** Examines rules governing strata deposition, sedimentation conditions, and geological age.\n- **Paleontology (الأحافير القديمة):** Studies fossil remains of ancient fauna and flora to date strata and reconstruct paleoenvironments.\n- **Structural Geology (الجيولوجيا التركيبية):** Studies structural deformations (folds, faults, joints) produced by tectonic stresses.\n- **Geophysics (الجيوفيزياء):** Detects subsurface economic reserves (oil, gas, aquifers, ores) using sensitive seismic and electrical instruments.\n\n### 2. Earth's Structural Envelopes & Interior\n1. **Crust (القشرة الأرضية):**\n   - *Continental Crust (Sial):* Thick (~60 km under mountains), low density (2.8 g/cm³), rich in silica (~70%) and alumina.\n   - *Oceanic Crust (Sima):* Thin (8–12 km under oceans), dense (3.0 g/cm³), rich in silica (~45%) and magnesia (basaltic).\n2. **Mantle (الوشاح):**\n   - Represents ~80% of Earth's volume. Extends to a depth of 2,900 km.\n   - *Upper Mantle (Asthenosphere):* 350 km thick, ductile semi-molten rocks permitting thermal convection currents that drive continental drift.\n   - *Lower Mantle:* 2,550 km thick, rigid solid silicates of iron, magnesium, and silicon.\n3. **Core (اللب / النواة):**\n   - Represents 1/6 of Earth's volume and 1/3 of its mass due to high density. Radius ~3,486 km.\n   - *Outer Core:* 2,100 km thick, molten iron and nickel, density ~10 g/cm³, pressure ~3 million atmospheres.\n   - *Inner Core:* 1,386 km radius, solid iron and nickel alloy, ultra-high density ~14 g/cm³.\n   - *Dynamo Magnetic Origin:* Convective rotation of the molten outer core around the rigid inner core generates Earth's geomagnetic field.",
          theoryContentAr: "### ١. أفرع علم الجيولوجيا وأهميتها العلمية\n- **الجيولوجيا الطبيعية (Physical Geology):** دراسة العوامل الخارجية والداخلية وتأثيرها على صخور القشرة الأرضية.\n- **علم المعادن والبلورات:** دراسة أشكال المعادن وصور نظمها البلورية وخصائصها الفيزيائية والكيميائية.\n- **علم الطبقات (Stratigraphy):** دراسة القوانين والظروف المتحكمة في تكوين الطبقات الصخرية وأماكن ترسيبها.\n- **علم الأحافير القديمة (Paleontology):** دراسة بقايا الأحياء الفقرية واللافقارية لتحديد العمر الجيولوجي وظروف البيئة القديمة.\n- **الجيولوجيا التركيبية:** دراسة التراكيب والتشوهات الصخرية الناتجة عن القوى التكتونية (طيات، فوالق، فواصل).\n- **الجيوفيزياء (Geophysics):** البحث والاستكشاف عن مصادر الطاقة والمياه الجوفية والخامات المعدنية بأجهزة الكشف الحساسة.\n\n### ٢. مكونات كوكب الأرض ونطاقاته\n١. **القشرة الأرضية (Crust):**\n   - *قشرة قارية (السيال):* سمكها حوالي ٦٠ كم في سلاسل الجبال، صخور جرانيتية خفيفة الكثافة (٢٫٨ جم/سم٣) غنية بالسيليكا والألومنيوم.\n   - *قشرة محيطية (السيما):* سمكها من ٨ إلى ١٢ كم تحت المحيطات والبحار، صخور بازلتية عالية الكثافة (٣٫٠ جم/سم٣) غنية بالسيليكا والماغنسيوم.\n٢. **الوشاح (Mantle):**\n   - يمثل أكثر من ٨٠٪ من حجم صخور الأرض، ويمتد لعمق ٢٩٠٠ كم ويتكون من أكاسيد الحديد والماغنسيوم والسيليكون.\n   - *الأسينوسفير (الوشاح العلوي):* سمكه ٣٥٠ كم، صخور لزجة شبه منصهرة تتصرف كالسوائل وتسمح بانتشار دوامات تيارات الحمل الحرارية المسؤولة عن حركة القارات.\n   - *الوشاح السفلي:* صلب صخري سمكه ٢٥٥٠ كم.\n٣. **اللب أو النواة (Core):**\n   - يمثل سدس حجم الأرض وثلث كتلتها لارتفاع كثافة مواده، ونصف قطره ٣٤٨٦ كم.\n   - *اللب الخارجي:* سمكه ٢١٠٠ كم، منصهر من الحديد والنيكل، كثافته ١٠ جم/سم٣ وضغطه ٣ ملايين ضغط جوي.\n   - *اللب الداخلي الصلب:* نصف قطره ١٣٨٦ كم، صخور صلبة عالية الكثافة (١٤ جم/سم٣).\n   - *أصل المجال المغناطيسي:* دوران مصهور اللب الخارجي حول اللب الداخلي الصلب هو المسؤول عن توليد المجال المغناطيسي للأرض.",
          formulas: [
          {
                    "labelEn": "Earth Core Pressure Boundary",
                    "labelAr": "الضغط عند الحد الفاصل للب الأرض",
                    "latex": "P_{\\text{core}} \\ge 3.0 \\times 10^{6} \\text{ atm}"
          },
          {
                    "labelEn": "Core Mass-to-Volume Ratio",
                    "labelAr": "نسبة كتلة اللب إلى حجم الأرض",
                    "latex": "V_{\\text{core}} = \\frac{1}{6} V_{\\text{Earth}}, \\quad M_{\\text{core}} = \\frac{1}{3} M_{\\text{Earth}}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 5-30"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Earth Structure, Internal Layering & Planetary Envelopes",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "أفرع الجيولوجيا والتركيب الداخلي للأرض والأغلفة الطبيعية",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C1-L1",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_1_1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Earth Structure, Internal Layering & Planetary Envelopes",
            titleAr: "ورقة عمل تقييمية وزارية: " + "أفرع الجيولوجيا والتركيب الداخلي للأرض والأغلفة الطبيعية",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_1_1_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Earth Structure, Internal Layering & Planetary Envelopes",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "أفرع الجيولوجيا والتركيب الداخلي للأرض والأغلفة الطبيعية",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_1_1_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Earth Structure, Internal Layering & Planetary Envelopes",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "أفرع الجيولوجيا والتركيب الداخلي للأرض والأغلفة الطبيعية",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_1_1_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Earth Structure, Internal Layering & Planetary Envelopes",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "أفرع الجيولوجيا والتركيب الداخلي للأرض والأغلفة الطبيعية",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_stratigraphy_cross_section",
            titleEn: "Interactive Geology & Earth Studio: " + "Earth Structure, Internal Layering & Planetary Envelopes",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "أفرع الجيولوجيا والتركيب الداخلي للأرض والأغلفة الطبيعية",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch1_l2",
          titleEn: "Primary & Tectonic Structures: Folds, Faults & Joints",
          titleAr: "التراكيب الجيولوجية الأولية والتكتونية: الطيات والفوالق والفواصل",
          summaryEn: "Primary structures (cross-bedding, ripple marks, graded bedding, mud cracks), anticlines vs synclines, normal, reverse, thrust (dashr), horst, graben, and strike-slip faults.",
          summaryAr: "التراكيب الأولية (التطبق المتقاطع، علامات النيم، التدرج الطبقي، شقوق الطين)، الطيات المحدبة والمقعرة، والفوالق العادية والمعكوسة والدسرية والخندقية والبارزة، والفواصل.",
          theoryContentEn: "### 1. Primary Geological Structures\n- Formed during rock deposition by climate and environmental factors (no tectonic forces):\n  1. **Ripple Marks (علامات النيم):** Small wave-like ridges from water currents or desert wind.\n  2. **Cross-Bedding (التطبق المتقاطع):** Inclined laminations from changing wind or water current directions.\n  3. **Graded Bedding (التدرج الطبقي):** Coarser grains at bottom, fining upward within single strata.\n  4. **Mud Cracks (علامات الجفاف وشقوق الطين):** Polygonal fissures from drying and dehydration.\n\n### 2. Folds (الطيات)\n- Formed by compressional stress bending ductile strata:\n  - **Anticline (طية محدبة):** Strata bend upward; oldest rocks at the central core; limbs dip outward.\n  - **Syncline (طية مقعرة):** Strata bend downward; youngest rocks at the central core; limbs dip inward.\n  - *Structural Elements:* Axial Plane (مستوى محوري), Fold Axis (محور الطية), Limbs (جناحا الطية).\n\n### 3. Faults (الفوالق)\n- Fractures accompanied by relative displacement along fault plane:\n  - **Normal Fault (فالق عادي):** Hanging wall slides DOWNWARD relative to footwall under tensile stress.\n  - **Reverse Fault (فالق معكوس):** Hanging wall slides UPWARD relative to footwall under compressional stress.\n  - **Thrust Fault (فالق دسر / زحفي):** Low-angle reverse fault (dip angle < 45°); rocks crawl horizontally.\n  - **Horst Fault (فالق بارز):** Uplifted block bounded by two normal faults sharing the same footwall.\n  - **Graben Fault (فالق خندقي / خسفي):** Down-dropped block bounded by two normal faults sharing the hanging wall.\n  - **Strike-Slip Fault (فالق ذو حركة أفقية):** Pure horizontal displacement with zero vertical throw.",
          theoryContentAr: "### ١. التراكيب الجيولوجية الأولية\n- تتكون أثناء ترسب الصخور بفعل العوامل البيئية والمناخية دون تدخل القوى التكتونية:\n  ١. **علامات النيم:** تموجات رملية صغيرة ناتجة عن حركة التيارات المائية أو الرياح.\n  ٢. **التطبق المتقاطع:** طبقات مائلة تترسب في اتجاهات غير متوازية لتغير اتجاه التيارات.\n  ٣. **التدرج الطبقي:** تدرج حجم الحبيبات داخل الطبقة الواحدة من الأكبر أسفل إلى الأصغر أعلى.\n  ٤. **شقوق الطين:** فوالق انكماشية متعددة الأضلاع تنتج عن جفاف الطين بعد انحسار الماء.\n\n### ٢. الطيات (التراكيب الثانوية الالتوائية)\n- انثناء أو تجعد في صخور القشرة ينتج غالباً عن قوى ضغط تكتونية:\n  - **طية محدبة:** تنحني الطبقات لأعلى، وتقع أقدم الطبقات في المركز، ويتباعد الجناحان عن المحور.\n  - **طية مقعرة:** تنحني الطبقات لأسفل، وتقع أحدث الطبقات في المركز، ويتقارب الجناحان نحو المحور.\n  - *العناصر التركيبية:* المستوى المحوري، محورا الطية، وجناحا الطية.\n\n### ٣. الفوالق (التراكيب التصدعية)\n- كسور في الكتل الصخرية يصاحبها حركة وانزلاق نسبي للكتل المهشمة:\n  - **الفالق العادي:** تحرك صخور الحائط العلوي إلى أسفل نتيجة قوى شد تكتونية.\n  - **الفالق المعكوس:** تحرك صخور الحائط العلوي إلى أعلى نتيجة قوى ضغط تكتونية.\n  - **الفالق الدسر (الزحفي):** فالق معكوس شديد الانحدار بزاوية ميل تقل عن ٤٥ درجة تزحف صخوره أفقياً.\n  - **الفالق البارز (السواتر):** كتلة صخرية ترتفع بين فالقين عاديين يتحدان في صخور الحائط السفلي.\n  - **الفالق الخندقي (الخسفي):** كتلة صخرية تهبط بين فالقين عاديين يتحدان في صخور الحائط العلوي.\n  - **فالق ذو حركة أفقية:** إزاحة أفقية موازية لمستوى الفالق دون أي إزاحة رأسية.",
          formulas: [
          {
                    "labelEn": "Fault Throw & Slip Displacement",
                    "labelAr": "مقدار الإزاحة وميل مستوى الفالق",
                    "latex": "\\text{Vertical Throw} = \\Delta h = L \\cdot \\sin(\\theta), \\quad \\text{Heave} = L \\cdot \\cos(\\theta)"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 5-30"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Primary & Tectonic Structures: Folds, Faults & Joints",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "التراكيب الجيولوجية الأولية والتكتونية: الطيات والفوالق والفواصل",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C1-L2",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_1_2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Primary & Tectonic Structures: Folds, Faults & Joints",
            titleAr: "ورقة عمل تقييمية وزارية: " + "التراكيب الجيولوجية الأولية والتكتونية: الطيات والفوالق والفواصل",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_1_2_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Primary & Tectonic Structures: Folds, Faults & Joints",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "التراكيب الجيولوجية الأولية والتكتونية: الطيات والفوالق والفواصل",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_1_2_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Primary & Tectonic Structures: Folds, Faults & Joints",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "التراكيب الجيولوجية الأولية والتكتونية: الطيات والفوالق والفواصل",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_1_2_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Primary & Tectonic Structures: Folds, Faults & Joints",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "التراكيب الجيولوجية الأولية والتكتونية: الطيات والفوالق والفواصل",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_stratigraphy_cross_section",
            titleEn: "Interactive Geology & Earth Studio: " + "Primary & Tectonic Structures: Folds, Faults & Joints",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "التراكيب الجيولوجية الأولية والتكتونية: الطيات والفوالق والفواصل",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch1_l3",
          titleEn: "Unconformities, Geological Time Scale & Index Fossils",
          titleAr: "عدم التوافق الجيولوجي وتأريخ الصخور والسلم الجيولوجي",
          summaryEn: "Types of unconformities (Angular, Disconformity, Nonconformity), characteristics of index fossils, Earth age (4.6 billion years), Cryptozoic vs Phanerozoic eons.",
          summaryAr: "أنواع عدم التوافق (المتباين، الزاوي، الانقطاعي) والشواهد الجيولوجية، شروط الحفرية المرشدة، عمر الأرض (٤٫٦ مليار سنة)، ودهور ما قبل الكامبري والفانيروزوي.",
          theoryContentEn: "### 1. Unconformity Surfaces (أسطح عدم التوافق)\n- Erosion or non-deposition hiatus representing missing geological intervals:\n  1. **Nonconformity (عدم توافق متباين):** Younger sedimentary strata rest on older eroded igneous or metamorphic basement rocks.\n  2. **Angular Unconformity (عدم توافق زاوي):** Horizontal or gently dipping sedimentary strata rest on tilted or folded older sedimentary strata.\n  3. **Disconformity (عدم توافق انقطاعي):** Parallel sedimentary strata separated by an erosional hiatus identifiable by a gap in the index fossil sequence.\n- *Diagnostic Evidence:* Basal conglomerate pebbles resting directly on the unconformity; abrupt variation in bedding dip angle; termination of faults/dykes in lower strata without continuing into upper strata.\n\n### 2. Geological Time Scale (السلم الجيولوجي)\n- Earth age is determined at ~4.6 billion years via radioactive decay of uranium/lead:\n  - **Cryptozoic Eon (دهر الحياة الخفية - ما قبل الكامبري):** Accounts for 87% of Earth history. Divided into Hadean (Earth origin), Archean (oldest rocks, single-cell anaerobic bacteria), and Proterozoic (first algae, multicell invertebrates).\n  - **Phanerozoic Eon (دهر الحياة الظاهرة):** Accounts for 13% of Earth history. Divided into:\n    1. *Paleozoic Era (حقب الحياة القديمة - اللافقاريات):* Cambrian (Trilobites), Ordovician (First land plants & fish), Silurian (Vascular plants), Devonian (First insects & bony fish), Carboniferous (Coal forests, amphibians), Permian (First reptiles, ammonite emergence).\n    2. *Mesozoic Era (حقب الحياة المتوسطة - الزواحف):* Triassic (First mammals, ammonites), Jurassic (Giant dinosaurs, first birds), Cretaceous (Flowering plants, disappearance of dinosaurs at end).\n    3. *Cenozoic Era (حقب الحياة الحديثة - الثدييات):* Tertiary (Nummulites, mammals diversify, modern trees), Quaternary (Appearance of Homo sapiens / modern humans).",
          theoryContentAr: "### ١. أسطح عدم التوافق (Unconformities)\n- أسطح تعرية أو عدم ترسيب تفصل بين مجموعتين صخريتين وتدل على انقطاع الترسيب لفترات زمنية طويلة:\n  ١. **عدم التوافق المتباين:** طبقات رسوبية أحدث تعلو صخوراً نارية أو متحولة أقدم.\n  ٢. **عدم التوافق الزاوي:** طبقات رسوبية أفقية تعلو طبقات رسوبية مائلة أو مطوية تختلف في زاوية الميل.\n  ٣. **عدم التوافق الانقطاعي:** طبقات رسوبية متوازية تفصل بينها فترة تعرية تكشفها الحفريات المرشدة المفقودة.\n- *الشواهد الدالة:* وجود طبقة كونجلوميرات مستديرة تعلو سطح عدم التوافق مباشرة؛ اختلاف زاوية الميل؛ وتوقف الفوالق أو العروق النارية في الطبقات السفلية دون الوصول للطبقات العلوية.\n\n### ٢. السلم الجيولوجي وتأريخ عمر الأرض\n- يقدر عمر الأرض بـ ٤٫٦ مليار سنة، مقسمة إلى دهرين رئيسيين:\n  - **دهر الحياة الخفية (الكريبتوزوي):** يمثل ٨٧٪ من عمر الأرض. ينقسم إلى: الهدين (نشأة الأرض وأغلفتها)، الأركي (أقدم الصخور والبكتيريا اللاهوائية)، والبروتيروزوي (ظهور الطحالب الخضراء وبداية الكائنات عديدة الخلايا).\n  - **دهر الحياة الظاهرة (الفانيروزوي):** يمثل ١٣٪ من عمر الأرض. ينقسم إلى ثلاث حقب كبرى:\n    ١. *حقب الحياة القديمة (اللافقاريات):* الكامبري (سيادة ثلاثية الفصوص)، الأوردوفيشي (أول النباتات والفطريات)، السيلوري (أول الأسماك والنباتات الوعائية)، الديفوني (أول الحشرات وسيادة الأسماك)، الكربوني (أشجار الفحم والبرمائيات)، والبرمي (ازدهار الزواحف وبداية الأمونيتات).\n    ٢. *حقب الحياة المتوسطة (الزواحف):* الترياسي (انتشار الأمونيتات وأول الثدييات)، الجوراسي (سيادة الديناصورات العملاقة وأول الطيور)، والطباشيري (ظهور النباتات الزهرية وانقراض الديناصورات بنهايته).\n    ٣. *حقب الحياة الحديثة (الثدييات):* تطور الثدييات والطيور، وسيادة حفرية النيموليت، وظهور الإنسان في العصر الرابع.",
          formulas: [
          {
                    "labelEn": "Radiometric Decay Age Equation",
                    "labelAr": "معادلة التأريخ الإشعاعي لنصف العمر",
                    "latex": "t = \\frac{t_{1/2}}{\\ln(2)} \\cdot \\ln\\left(1 + \\frac{D}{P}\\right)"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 5-30"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Unconformities, Geological Time Scale & Index Fossils",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "عدم التوافق الجيولوجي وتأريخ الصخور والسلم الجيولوجي",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C1-L3",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_1_3_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Unconformities, Geological Time Scale & Index Fossils",
            titleAr: "ورقة عمل تقييمية وزارية: " + "عدم التوافق الجيولوجي وتأريخ الصخور والسلم الجيولوجي",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_1_3_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Unconformities, Geological Time Scale & Index Fossils",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "عدم التوافق الجيولوجي وتأريخ الصخور والسلم الجيولوجي",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_1_3_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Unconformities, Geological Time Scale & Index Fossils",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "عدم التوافق الجيولوجي وتأريخ الصخور والسلم الجيولوجي",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_1_3_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Unconformities, Geological Time Scale & Index Fossils",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "عدم التوافق الجيولوجي وتأريخ الصخور والسلم الجيولوجي",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_stratigraphy_cross_section",
            titleEn: "Interactive Geology & Earth Studio: " + "Unconformities, Geological Time Scale & Index Fossils",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "عدم التوافق الجيولوجي وتأريخ الصخور والسلم الجيولوجي",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        }
      ],
      databank: geologyCh1Databank,
      solvedExamples: geologyCh1SolvedExamples,
      exerciseProblems: geologyCh1Exercises
    },
    {
      id: "th_geo_earth_ch2",
      chapterNumber: 2,
      titleEn: "Unit 2: Minerals, 7 Crystal Systems & Physical Properties",
      titleAr: "الباب الثاني: المعادن والأنظمة البلورية والخواص الفيزيائية",
      descriptionEn: "Scientific definition of minerals, 7 crystal systems (Cubic to Triclinic), optical properties (luster, streak, play of colors), and cohesive properties (Mohs hardness, cleavage, fracture).",
      descriptionAr: "المفهوم العلمي للمعدن، الأنظمة البلورية السبعة من المكعبي إلى ثلاثي الميل، الخواص البصرية (البريق، المخدش، عرض الألوان)، والخواص التماسكية (الصلادة بمقياس موهس، الانفصام، المكسر).",
      isFullyEquipped: true,
      lessons: [
        {
          id: "th_geo_earth_ch2_l1",
          titleEn: "Mineral Definition, Chemical Composition & Crystal Structure",
          titleAr: "مفهوم المعدن والتركيب الكيميائي والبناء الذري الداخلي",
          summaryEn: "Five scientific conditions defining a mineral, chemical classification of crustal elements (O, Si, Al, Fe, Ca, Na, K, Mg), and internal crystalline atomic lattices.",
          summaryAr: "الشروط العلمية الخمسة لتعريف المعدن، العناصر الثمانية الكبرى المكونة للقشرة الأرضية، والبناء البلوري الداخلي وترتيب الذرات.",
          theoryContentEn: "### 1. Scientific Definition of a Mineral\n- For geologists, a true mineral must satisfy 5 fundamental criteria:\n  1. **Naturally occurring (طبيعي):** Formed purely by geological processes without human synthesis.\n  2. **Inorganic (غير عضوي):** Formed without the intervention of living organic tissue.\n  3. **Solid substance (صلب):** Definite state of matter under standard surface conditions.\n  4. **Definite chemical composition (تركيب كيميائي محدد):** Expressible by a fixed chemical formula.\n  5. **Characteristic crystalline form (شكل بلوري مميز):** An orderly internal three-dimensional atomic lattice.\n- *Counter-Examples:* Petroleum is rejected (liquid & organic); Coal is rejected (organic without crystalline lattice); Industrial diamonds are rejected (not natural).\n\n### 2. Geochemical Composition of Earth's Crust\n- Over 98.5% of the crust's rock weight consists of just 8 major elements:\n  1. Oxygen ($O$): 46.6%\n  2. Silicon ($Si$): 27.7%\n  3. Aluminum ($Al$): 8.1%\n  4. Iron ($Fe$): 5.0%\n  5. Calcium ($Ca$): 3.6%\n  6. Sodium ($Na$): 2.8%\n  7. Potassium ($K$): 2.6%\n  8. Magnesium ($Mg$): 2.1%\n  - All other 90+ elements combined (gold, copper, carbon, sulfur) comprise less than 1.5%.",
          theoryContentAr: "### ١. المفهوم العلمي الدقيق للمعدن\n- يشترط الجيولوجي خمسة أركان أساسية لاعتبار المادة معدناً حقيقياً:\n  ١. **مادة طبيعية:** تتكون بفعل العمليات الجيولوجية الطبيعية دون تدخل الإنسان.\n  ٢. **مادة غير عضوية:** لا تتكون من بقايا أو أنسجة كائنات حية.\n  ٣. **مادة صلبة:** في درجات الحرارة والضغوط الطبيعية على سطح الأرض.\n  ٤. **تركيب كيميائي محدد:** يعبر عنه بصيغة كيميائية دقيقة ثابتة أو متغيرة بنسب محددة.\n  ٥. **شكل بلوري مميز:** هيكل بنائي هندسي ذري داخلي منتظم ومتكرر في الأبعاد الثلاثة.\n- *أمثلة ليست معادن:* البترول (سائل ومن أصل عضوي)، الفحم (عضوي عديم النظام البلوري)، والماس الصناعي (صناعي تخليقي).\n\n### ٢. التركيب الجيوكيميائي لصخور القشرة الأرضية\n- أكثر من ٩٨٫٥٪ من وزن صخور القشرة الأرضية يتألف من ٨ عناصر كيميائية رئيسية فقط:\n  ١. الأكسجين: ٤٦٫٦٪\n  ٢. السيليكون: ٢٧٫٧٪\n  ٣. الألومنيوم: ٨٫١٪\n  ٤. الحديد: ٥٫٠٪\n  ٥. الكالسيوم: ٣٫٦٪\n  ٦. الصوديوم: ٢٫٨٪\n  ٧. البوتاسيوم: ٢٫٦٪\n  ٨. الماغنسيوم: ٢٫١٪\n  - باقي العناصر المعروفة (كالذهب والفضة والنحاس والكربون) لا تتعدى مجتمعة ١٫٥٪.",
          formulas: [
          {
                    "labelEn": "Crustal Silicate Dominance",
                    "labelAr": "نسبة السيليكون والأكسجين في صخور القشرة",
                    "latex": "\\% (O + Si) = 46.6\\% + 27.7\\% = 74.3\\%"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 25-50"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Mineral Definition, Chemical Composition & Crystal Structure",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "مفهوم المعدن والتركيب الكيميائي والبناء الذري الداخلي",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C2-L1",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_2_1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Mineral Definition, Chemical Composition & Crystal Structure",
            titleAr: "ورقة عمل تقييمية وزارية: " + "مفهوم المعدن والتركيب الكيميائي والبناء الذري الداخلي",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_2_1_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Mineral Definition, Chemical Composition & Crystal Structure",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "مفهوم المعدن والتركيب الكيميائي والبناء الذري الداخلي",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_2_1_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Mineral Definition, Chemical Composition & Crystal Structure",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "مفهوم المعدن والتركيب الكيميائي والبناء الذري الداخلي",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_2_1_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Mineral Definition, Chemical Composition & Crystal Structure",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "مفهوم المعدن والتركيب الكيميائي والبناء الذري الداخلي",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_crystal_systems",
            titleEn: "Interactive Geology & Earth Studio: " + "Mineral Definition, Chemical Composition & Crystal Structure",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "مفهوم المعدن والتركيب الكيميائي والبناء الذري الداخلي",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch2_l2",
          titleEn: "The Seven Crystal Systems & Crystallographic Geometry",
          titleAr: "الأنظمة البلورية السبعة والهندسة الفراغية للبلورات",
          summaryEn: "Crystal elements (axes a, b, c and angles alpha, beta, gamma), Cubic, Tetragonal, Orthorhombic, Monoclinic, Triclinic, Hexagonal, and Trigonal systems.",
          summaryAr: "العناصر البلورية (المحاور والزوايا المحورية)، الأنظمة ثلاثية المحاور (المكعبي، الرباعي، المعيني، أحادي وثلاثي الميل) والأنظمة رباعية المحاور (السداسي والثلاثي).",
          theoryContentEn: "### 1. Crystallographic Elements\n- **Crystallographic Axes:** Three axes ($a, b, c$) for 3-axis systems, intersecting at the center.\n- **Interaxial Angles:** $\\alpha$ (between $b$ and $c$), $\\beta$ (between $a$ and $c$), $\\gamma$ (between $a$ and $b$).\n\n### 2. Three-Axis Crystal Systems (5 Systems)\n1. **Isometric / Cubic (المكعبي):** $a_1 = a_2 = a_3$, $\\alpha = \\beta = \\gamma = 90^\\circ$. Maximum symmetry (e.g., Halite, Galena).\n2. **Tetragonal (الرباعي):** $a_1 = a_2 \\neq c$, $\\alpha = \\beta = \\gamma = 90^\\circ$. Vertical axis $c$ differs from horizontal axes.\n3. **Orthorhombic (المعيني القائم):** $a \\neq b \\neq c$, $\\alpha = \\beta = \\gamma = 90^\\circ$. Three unequal, mutually perpendicular axes.\n4. **Monoclinic (أحادي الميل):** $a \\neq b \\neq c$, $\\alpha = \\gamma = 90^\\circ \\neq \\beta$. The most common crystal system in rock-forming minerals.\n5. **Triclinic (ثلاثي الميل):** $a \\neq b \\neq c$, $\\alpha \\neq \\beta \\neq \\gamma \\neq 90^\\circ$. Minimum crystal symmetry.\n\n### 3. Four-Axis Crystal Systems (2 Systems)\n- Three horizontal equal axes ($a_1 = a_2 = a_3$) intersecting at $120^\\circ$ angles, plus vertical axis $c$ perpendicular to them ($90^\\circ$):\n  - **Hexagonal System (النظام السداسي):** Has a horizontal plane of symmetry (مستوى تماثل أفقي).\n  - **Trigonal System (النظام الثلاثي):** Lacks a horizontal plane of symmetry.",
          theoryContentAr: "### ١. عناصر التماثل البلوري والمحاور\n- **المحاور البلورية:** المحاور الثلاثة ($a, b, c$) المتقاطعة في مركز البلورة.\n- **الزوايا بين المحاور:** الزاوية $\\alpha$ (بين $b$ و $c$)، $\\beta$ (بين $a$ و $c$)، $\\gamma$ (بين $a$ و $b$).\n\n### ٢. الأنظمة البلورية التي تشمل ثلاثة محاور بلورية\n١. **النظام المكعبي:** $a_1 = a_2 = a_3$ والزوايا $\\alpha = \\beta = \\gamma = 90^\\circ$. يتميز بأعلى درجات التماثل البلوري (مثل بلورة الهاليت والجالينا).\n٢. **النظام الرباعي:** $a_1 = a_2 \\neq c$ والزوايا $\\alpha = \\beta = \\gamma = 90^\\circ$. المحور الرأسي يختلف في الطول عن المحورين الأفقيين.\n٣. **النظام المعيني القائم:** $a \\neq b \\neq c$ والزوايا $\\alpha = \\beta = \\gamma = 90^\\circ$. محاوره الثلاثة مختلفة الطول ومتعامدة.\n٤. **نظام أحادي الميل:** $a \\neq b \\neq c$ والزوايا $\\alpha = \\gamma = 90^\\circ \\neq \\beta$. تنتمي إليه أغلبية المعادن في الطبيعة.\n٥. **نظام ثلاثي الميل:** $a \\neq b \\neq c$ والزوايا $\\alpha \\neq \\beta \\neq \\gamma \\neq 90^\\circ$. أقل الأنظمة تماثلاً لانعدام التساوي والتعامد.\n\n### ٣. الأنظمة البلورية التي تشمل أربعة محاور بلورية\n- ثلاثة محاور أفقية متساوية تتقاطع بزوايا ١٢٠ درجة ($a_1, a_2, a_3$)، ومحور رأسي رابع متعامد عليها ($c$):\n  - **النظام السداسي:** يحتوي على مستوى تماثل أفقي يقسم البلورة إلى نصفين متطابقين تماماً.\n  - **النظام الثلاثي:** لا يحتوي على مستوى تماثل أفقي.",
          formulas: [
          {
                    "labelEn": "Cubic Symmetry Condition",
                    "labelAr": "شرط التماثل المكعبي الكامل",
                    "latex": "a_1 = a_2 = a_3, \\quad \\alpha = \\beta = \\gamma = 90^{\\circ}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 25-50"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "The Seven Crystal Systems & Crystallographic Geometry",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "الأنظمة البلورية السبعة والهندسة الفراغية للبلورات",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C2-L2",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_2_2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "The Seven Crystal Systems & Crystallographic Geometry",
            titleAr: "ورقة عمل تقييمية وزارية: " + "الأنظمة البلورية السبعة والهندسة الفراغية للبلورات",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_2_2_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "The Seven Crystal Systems & Crystallographic Geometry",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "الأنظمة البلورية السبعة والهندسة الفراغية للبلورات",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_2_2_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "The Seven Crystal Systems & Crystallographic Geometry",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "الأنظمة البلورية السبعة والهندسة الفراغية للبلورات",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_2_2_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "The Seven Crystal Systems & Crystallographic Geometry",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "الأنظمة البلورية السبعة والهندسة الفراغية للبلورات",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_crystal_systems",
            titleEn: "Interactive Geology & Earth Studio: " + "The Seven Crystal Systems & Crystallographic Geometry",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "الأنظمة البلورية السبعة والهندسة الفراغية للبلورات",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch2_l3",
          titleEn: "Physical Properties: Optical & Cohesive Diagnostics",
          titleAr: "الخواص الفيزيائية للمعادن: البصرية والتماسكية ومقياس موهس",
          summaryEn: "Optical properties (metallic/non-metallic luster, color, streak diagnostic constancy, play of color), and cohesive properties (Mohs scale 1 to 10, cleavage, fracture, specific gravity).",
          summaryAr: "الخواص البصرية (البريق، اللون، ثبات المخدش، خاصية اللألأة وعرض الألوان)، والخواص التماسكية (الصلادة بمقياس موهس، الانفصام، المكسر، والوزن النوعي).",
          theoryContentEn: "### 1. Optical Properties (الخواص البصرية)\n- **Luster (البريق):** How a mineral reflects light:\n  - *Metallic:* Highly reflective (Pyrite, Galena, Gold).\n  - *Non-Metallic:* Glassy (Quartz, Calcite), Pearly (Feldspar), Adamantine (Diamond), Silky (Asbestos).\n- **Color:** Variable due to trace impurities. Quartz is purple (amethyst with iron), pink (manganese), milky (gas bubbles), or smoky (radiation).\n- **Streak (المخدش):** The color of a mineral's fine powder against an unglazed porcelain plate. **Constant and diagnostic** (Quartz = always white; Pyrite = black; Hematite = dark red).\n- **Play of Colors (عرض الألوان):** Opal (chameleon-like iridescence); Labradorite; Diamond dispersing light into spectral colors.\n\n### 2. Cohesive Properties (الخواص التماسكية)\n- **Mohs Hardness Scale (مقياس موهس للصلادة):** Resistance to scratching:\n  1. Talc\n  2. Gypsum\n  3. Calcite (scratched by copper coin 3.5)\n  4. Fluorite\n  5. Apatite (scratched by window glass 5.5)\n  6. Orthoclase (scratched by porcelain plate / steel file 6.5)\n  7. Quartz\n  8. Topaz\n  9. Corundum\n  10. Diamond (hardest natural substance)\n- **Cleavage (الانفصام):** Tendency to split along weak atomic planes:\n  - Basal in one direction (Mica); Rhombohedral (Calcite); Cubic in 3 directions at 90° (Halite, Galena).\n- **Fracture (المكسر):** Shape of broken surface lacking cleavage: Conchoidal (Quartz, Flint), Hackly (Metals), Uneven.",
          theoryContentAr: "### ١. الخواص البصرية للمعادن\n- **البريق (Luster):** درجة وطبيعة انعكاس الضوء من سطح المعدن:\n  - *بريق فلزي:* يعكس الضوء بشدة (البيريت، الجالينا، الذهب).\n  - *بريق لافلزي:* زجاجي (الكوارتز والكالسيت)، لؤلؤي (الفلسبار)، ماسي (الماس)، وحريري (الجبس الليفي).\n- **اللون (Color):** خاصية قليلة الأهمية لتغيرها بالشوائب. الكوارتز لونه أبيض نقي ويتغير للبنفسجي (أكاسيد حديد) أو الوردي (منجنيز) أو الرمادي المدخن.\n- **المخدش (Streak):** لون مسحوق المعدن عند حكه فوق لوح مخدش خزفي (صلادته ٦٫٥). خاصية ثابتة تشخيصية (الكوارتز مخدشه أبيض دائماً، والبيريت أسود، والهيماتيت أحمر داكن).\n- **خاصية عرض الألوان:** تميز الأحجار الكريمة، كبريق الماس وتشتيته للضوء، وتلألؤ حجر الأوبال (عين الهر).\n\n### ٢. الخواص التماسكية للمعادن\n- **الصلادة (Hardness) ومقياس موهس:** درجة مقاومة المعدن للخدش (مرتب من ١ الأقل صلادة إلى ١٠ الأشد صلادة):\n  ١. تلك - ٢. جبس - ٣. كالسيت - ٤. فلوريت - ٥. أباتيت - ٦. أرثوكليز - ٧. كوارتز - ٨. توباز - ٩. كوراندوم - ١٠. ماس.\n  - *أدوات شائعة:* ظفر الإنسان (٢٫٥)، العملة النحاسية (٣٫٥)، زجاج النوافذ (٥٫٥)، نصل السكين ولوح المخدش (٦٫٥).\n- **الانفصام (Cleavage):** قابلية المعدن للتشقق على امتداد مستويات الروابط الضعيفة: صفائحي في اتجاه واحد (الميكا)، معيني الأوجه (الكالسيت)، ومكعبي في ٣ اتجاهات متعامدة (الهاليت والجالينا).\n- **المكسر (Fracture):** شكل السطح الناتج عن كسر المعدن في غير مستويات الانفصام: محاري (الكوارتز والصوان)، مسنن (أغلب المعادن في الطبيعة).",
          formulas: [
          {
                    "labelEn": "Mohs Scratch Criterion",
                    "labelAr": "قاعدة الخدش بمقياس موهس",
                    "latex": "\\text{Scratch Occurs} \\iff H_{\\text{tool}} > H_{\\text{mineral}}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 25-50"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Physical Properties: Optical & Cohesive Diagnostics",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "الخواص الفيزيائية للمعادن: البصرية والتماسكية ومقياس موهس",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C2-L3",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_2_3_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Physical Properties: Optical & Cohesive Diagnostics",
            titleAr: "ورقة عمل تقييمية وزارية: " + "الخواص الفيزيائية للمعادن: البصرية والتماسكية ومقياس موهس",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_2_3_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Physical Properties: Optical & Cohesive Diagnostics",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "الخواص الفيزيائية للمعادن: البصرية والتماسكية ومقياس موهس",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_2_3_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Physical Properties: Optical & Cohesive Diagnostics",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "الخواص الفيزيائية للمعادن: البصرية والتماسكية ومقياس موهس",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_2_3_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Physical Properties: Optical & Cohesive Diagnostics",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "الخواص الفيزيائية للمعادن: البصرية والتماسكية ومقياس موهس",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_crystal_systems",
            titleEn: "Interactive Geology & Earth Studio: " + "Physical Properties: Optical & Cohesive Diagnostics",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "الخواص الفيزيائية للمعادن: البصرية والتماسكية ومقياس موهس",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        }
      ],
      databank: geologyCh2Databank,
      solvedExamples: geologyCh2SolvedExamples,
      exerciseProblems: geologyCh2Exercises
    },
    {
      id: "th_geo_earth_ch3",
      chapterNumber: 3,
      titleEn: "Unit 3: Rock Cycle, Bowen's Series, Petrology & Volcanism",
      titleAr: "الباب الثالث: الصخور ودورة الصخور ومتسلسلة بوين والبراكين",
      descriptionEn: "James Hutton's rock cycle, Bowen's reaction series, igneous rock classification by silica and depth, intrusive bodies (batholiths, laccoliths, sills), volcanism, sedimentary rocks, and metamorphic foliation.",
      descriptionAr: "دورة الصخور لجيمس هاتون، متسلسلة تفاعلات بوين، تصنيف الصخور النارية حسب مكان التبلور ونسبة السيليكا، أشكال الصخور النارية المتداخلة، البراكين، الصخور الرسوبية، والتحول الصخري.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "th_geo_earth_ch3_l1",
          titleEn: "James Hutton's Rock Cycle & Bowen's Reaction Series",
          titleAr: "دورة الصخور لجيمس هاتون ومتسلسلة تفاعلات بوين",
          summaryEn: "Dynamic transitions between igneous, sedimentary, and metamorphic rocks, magma crystallization, Bowen's discontinuous (mafic) and continuous (plagioclase) branches.",
          summaryAr: "العلاقة التبادلية بين الصخور النارية والرسوبية والمتحولة، تبلور الصهارة، وفرعا متسلسلة بوين غير المتصل (الحديد والماغنسيوم) والمتصل (الفلسبار البلاجيوكليزي).",
          theoryContentEn: "### 1. The Rock Cycle (James Hutton, 1785)\n- The continuous geological process linking Earth's 3 major rock groups driven by internal and external forces:\n  - *Weathering & Transport:* Breaks down pre-existing rocks into sediments.\n  - *Sedimentation & Diagenesis:* Lithifies sediments into sedimentary rocks under pressure and cementation.\n  - *Metamorphism:* High heat and directed tectonic pressure recrystallize rocks into metamorphic rocks.\n  - *Melting:* Subduction and high temperatures melt rocks into magma.\n  - *Cooling & Crystallization:* Magma solidifies underground (plutonic) or lava cools at surface (volcanic) into igneous rocks.\n\n### 2. Bowen's Reaction Series (متسلسلة تفاعلات بوين)\n- Demonstrates how minerals crystallize sequentially as magma temperature drops from 1200°C to 750°C:\n  1. **Discontinuous Branch (الفرع غير المتصل):**\n     - Olivine (~1200°C, first to form, ultrabasic) $\\to$ Pyroxene $\\to$ Amphibole $\\to$ Biotite (black mica).\n  2. **Continuous Branch (الفرع المتصل):**\n     - Calcium-rich Plagioclase feldspar $\\to$ Calcium-Sodium Plagioclase $\\to$ Sodium-rich Plagioclase feldspar.\n  3. **Final Crystallization Phase (~800°C–750°C):**\n     - Potassium Feldspar (Orthoclase) $\\to$ Muscovite (white mica) $\\to$ **Quartz (last mineral to crystallize).**",
          theoryContentAr: "### ١. دورة الصخور للعالم جيمس هاتون (١٧٨٥م)\n- أول من ربط بين أنواع الصخور الثلاثة (النارية والرسوبية والمتحولة) في دورة مستمرة بفعل العوامل الطبيعية:\n  - *التجوية والتفتيت:* تفتت الصخور السطحية بعوامل الجو.\n  - *النقل والترسيب والتحجر:* تنقل الرواسب للأحواض المنخفضة وتتماسك بمادة لاحمة مكونة صخوراً رسوبية.\n  - *التحول الصخري:* هبوط الصخور لأعماق كبيرة تحت ضغط وحرارة عاليين يعيد تبلورها لصخور متحولة.\n  - *الانصهار:* زيادة الحرارة تؤدي لانصهار الصخور إلى صهارة (ماجما).\n  - *التبلور:* تبريد الصهارة في باطن الأرض أو لافا على السطح يعيد تكوين الصخور النارية.\n\n### ٢. متسلسلة تفاعلات بوين (Bowen's Reaction Series)\n- توضح الترتيب الدقيق لتبلور المعادن من الصهارة مع انخفاض درجة الحرارة من ١٢٠٠°م إلى ٧٥٠°م:\n  ١. **الفرع غير المتصل (غني بالحديد والماغنسيوم):**\n     - الأوليفين (أول المعادن تبلوراً عند ١٢٠٠°م) $\\to$ البيروكسين $\\to$ الأمفيبول $\\to$ البيوتيت (الميكا السوداء).\n  ٢. **الفرع المتصل (الفلسبار البلاجيوكليزي):**\n     - بلاجيوكليز كلسي غني بالكالسيوم $\\to$ بلاجيوكليز كلسي صودي $\\to$ بلاجيوكليز صودي غني بالصوديوم.\n  ٣. **المرحلة الأخيرة من التبلور (عند حوالي ٧٥٠°م):**\n     - الفلسبار البوتاسي (الأرثوكليز) $\\to$ الميكا البيضاء (المسكوفيت) $\\to$ **الكوارتز (آخر المعادن تبلوراً).**",
          formulas: [
          {
                    "labelEn": "Bowen Temperature Gradient",
                    "labelAr": "تدرج درجات حرارة تبلور الصهارة",
                    "latex": "T_{\\text{crystallization}}: 1200^{\\circ}\\text{C} \\;(\\text{Olivine}) \\longrightarrow 750^{\\circ}\\text{C} \\;(\\text{Quartz})"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 45-70"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "James Hutton's Rock Cycle & Bowen's Reaction Series",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "دورة الصخور لجيمس هاتون ومتسلسلة تفاعلات بوين",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C3-L1",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_3_1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "James Hutton's Rock Cycle & Bowen's Reaction Series",
            titleAr: "ورقة عمل تقييمية وزارية: " + "دورة الصخور لجيمس هاتون ومتسلسلة تفاعلات بوين",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_3_1_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "James Hutton's Rock Cycle & Bowen's Reaction Series",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "دورة الصخور لجيمس هاتون ومتسلسلة تفاعلات بوين",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_3_1_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "James Hutton's Rock Cycle & Bowen's Reaction Series",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "دورة الصخور لجيمس هاتون ومتسلسلة تفاعلات بوين",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_3_1_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "James Hutton's Rock Cycle & Bowen's Reaction Series",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "دورة الصخور لجيمس هاتون ومتسلسلة تفاعلات بوين",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_rock_cycle",
            titleEn: "Interactive Geology & Earth Studio: " + "James Hutton's Rock Cycle & Bowen's Reaction Series",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "دورة الصخور لجيمس هاتون ومتسلسلة تفاعلات بوين",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch3_l2",
          titleEn: "Igneous Rocks Classification, Textures & Intrusive Forms",
          titleAr: "تصنيف الصخور النارية وأنسجتها وأشكال الصخور المتداخلة",
          summaryEn: "Classification by silica content (Ultrabasic, Basic, Intermediate, Acidic), depth/texture (Plutonic, Hypabyssal, Volcanic), and intrusive structures (Batholiths, Laccoliths, Lopoliths, Dykes, Sills).",
          summaryAr: "تصنيف الصخور النارية حسب نسبة السيليكا (فوق قاعدية، قاعدية، متوسطة، حمضية)، وحسب مكان التبلور (جوفية، متداخلة، بركانية)، وأشكال الصخور المتداخلة (الباثوليث، اللاكوليث، اللوبوليث، العروق، الجدد).",
          theoryContentEn: "### 1. Classification by Chemical Composition & Silica Ratio\n1. **Ultrabasic (< 45% Silica):** Dark, dense, high Fe, Mg, Ca. Cooled at > 1100°C. Plutonic: *Peridotite*; Volcanic: *Komatiite*.\n2. **Basic (45%–52% Silica):** Dark colored. Plutonic: *Gabbro*; Hypabyssal: *Dolerite*; Volcanic: *Basalt* (most common oceanic rock).\n3. **Intermediate (52%–66% Silica):** Moderate color. Plutonic: *Diorite*; Hypabyssal: *Microdiorite*; Volcanic: *Andesite* (named after Andes mountains).\n4. **Acidic (> 66% Silica):** Light pink, high K, Na, Si. Cooled at ~750°C. Plutonic: *Granite*; Hypabyssal: *Microgranite*; Volcanic: *Rhyolite*, *Pumice* (vesicular), *Obsidian* (glassy).\n\n### 2. Intrusive Igneous Rock Bodies (أشكال الصخور النارية)\n- **Batholiths (الباثوليث):** Massive plutonic bodies hundreds of kilometers across, extending deep into the crust.\n- **Laccolith (اللاكوليث):** High-viscosity magma dome bending overlying layers upward into an **anticline fold**.\n- **Lopolith (اللوبوليث):** Low-viscosity saucer-like intrusion bending underlying strata downward into a **syncline fold**.\n- **Dykes (العروق القاطعة):** Tabular discordant intrusions cutting across strata bedding planes.\n- **Sills (الجدد الموازية):** Tabular concordant intrusions running parallel to sedimentary strata beds without cutting them.",
          theoryContentAr: "### ١. تصنيف الصخور النارية حسب نسبة السيليكا\n١. **صخور فوق قاعدية (السيليكا أقل من ٤٥٪):** داكنة السواد، غنية بالحديد والماغنسيوم، تتبلور عند أكثر من ١١٠٠°م. الجوفي: *بيريدوتيت*؛ البركاني: *كوماتيت*.\n٢. **صخور قاعدية (السيليكا ٤٥٪ إلى ٥٢٪):** داكنة اللون. الجوفي: *جابرو*؛ المتداخل: *دوليريت*؛ البركاني: *بازلت* (أكثر الصخور انتشاراً في قاع المحيطات).\n٣. **صخور متوسطة (السيليكا ٥٢٪ إلى ٦٦٪):** متوسطة اللون بين الفاتح والداكن. الجوفي: *ديوريت*؛ المتداخل: *ميكروديوريت*؛ البركاني: *أنديزيت* (نسبة لجبال الأنديز).\n٤. **صخور حمضية (السيليكا أكثر من ٦٦٪):** فاتحة وردية، غنية بالسيليكا والصوديوم والبوتاسيوم، تتبلور عند ٧٥٠°م. الجوفي: *جرانيت*؛ المتداخل: *ميكروجرانيت*؛ البركاني: *رايولايت*، *أوبسيديان* (زجاجي)، *بيومس* (فقاعي خفيف).\n\n### ٢. أشكال الصخور النارية المتداخلة في القشرة الأرضية\n- **الباثوليث:** أكبر الكتل الصخرية النارية الجوفية تمتد لمئات الكيلومترات وسمكها عدة كيلومترات.\n- **اللاكوليث (القبة العادية):** ماجما عالية اللزوجة تضغط على ما يعلوها من طبقات فتثنيها لأعلى مكونة **طية محدبة**.\n- **اللوبوليث (القبة المقلوبة):** ماجما قليلة اللزوجة تضغط على ما أسفلها فتثنيها لأسفل مكونة **طية مقعرة**.\n- **العروق القاطعة (Dykes):** تداخلات نارية قاطعة للطبقات الصخرية بشكل رأسي أو مائل.\n- **الجدد الموازية (Sills):** تداخلات نارية موازية لأسطح الطبقات ولا تقطعها.",
          formulas: [
          {
                    "labelEn": "Silica Classification Thresholds",
                    "labelAr": "حدود تصنيف الصخور النارية بالسيليكا",
                    "latex": "\\text{Acidic} > 66\\% \\;\\text{SiO}_2 \\;> \\text{Intermediate} > 52\\% \\;\\text{SiO}_2 \\;> \\text{Basic} > 45\\% \\;\\text{SiO}_2 \\;> \\text{Ultrabasic}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 45-70"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Igneous Rocks Classification, Textures & Intrusive Forms",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "تصنيف الصخور النارية وأنسجتها وأشكال الصخور المتداخلة",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C3-L2",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_3_2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Igneous Rocks Classification, Textures & Intrusive Forms",
            titleAr: "ورقة عمل تقييمية وزارية: " + "تصنيف الصخور النارية وأنسجتها وأشكال الصخور المتداخلة",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_3_2_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Igneous Rocks Classification, Textures & Intrusive Forms",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "تصنيف الصخور النارية وأنسجتها وأشكال الصخور المتداخلة",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_3_2_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Igneous Rocks Classification, Textures & Intrusive Forms",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "تصنيف الصخور النارية وأنسجتها وأشكال الصخور المتداخلة",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_3_2_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Igneous Rocks Classification, Textures & Intrusive Forms",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "تصنيف الصخور النارية وأنسجتها وأشكال الصخور المتداخلة",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_rock_cycle",
            titleEn: "Interactive Geology & Earth Studio: " + "Igneous Rocks Classification, Textures & Intrusive Forms",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "تصنيف الصخور النارية وأنسجتها وأشكال الصخور المتداخلة",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch3_l3",
          titleEn: "Sedimentary & Metamorphic Rocks & Hydrocarbon Reservoirs",
          titleAr: "الصخور الرسوبية والمتحولة ومصادر الطاقة البترولية",
          summaryEn: "Clastic, chemical, and biochemical sedimentary rocks, energy sources (coal, oil, gas, kerogen), thermal contact and regional metamorphism, foliated vs massive textures.",
          summaryAr: "أنواع الصخور الرسوبية (فتاتية، كيميائية، بيوكيميائية)، مصادر الطاقة (الفحم، البترول، الغاز، الكيروجين)، التحول بالتلامس الحراري والتحول الإقليمي، والنسيج المتورق والكتلي.",
          theoryContentEn: "### 1. Sedimentary Rocks & Economic Energy Deposits\n- Cover 75% of Earth's surface but represent only 5% of crust volume:\n  1. **Clastic (فتاتية):** Gravel > 2mm (*Breccia* with sharp angular clasts, *Conglomerate* with rounded pebbles); Sand 2mm–62µm (*Sandstone*); Mud < 62µm (*Clay* and *Shale*).\n  2. **Chemical Evaporites (كيميائية):** Gypsum ($CaSO_4 \\cdot 2H_2O$), Anhydrite ($CaSO_4$), Halite (Rock Salt), Travertine limestone.\n  3. **Biochemical / Organic (بيوكيميائية):** Fossiliferous Limestone (from coral/foram skeletons), Rock Phosphate (from vertebrate bones).\n  4. **Hydrocarbons & Energy Sources:**\n     - *Coal:* Buried plant remains in swamps deprived of oxygen (Carboniferous Era).\n     - *Petroleum & Natural Gas:* Microscopic marine plankton buried in fine mud source rocks (صخور المصدر), maturing at 70°C–107°C and 2–4 km depth, migrating to porous sandstone/limestone reservoir rocks (صخور الخزان).\n     - *Oil Shale (الطفل النفطي):* Mudstone containing solid hydrocarbon **Kerogen**, producing liquid petroleum only when heated to 480°C.\n\n### 2. Metamorphic Rocks (الصخور المتحولة)\n- Formed when rocks undergo extreme temperature and/or directed tectonic pressure:\n  - **Foliated Metamorphic Rocks (متورقة):** Directed pressure aligns platy minerals into parallel sheets:\n    - *Slate (الأردواز):* From low-grade metamorphism of clay shale (< 200°C).\n    - *Mica Schist (الشيست الميكائي):* Parallel continuous flakes of mica.\n    - *Gneiss (النيس):* From granite metamorphism; alternating discontinuous bands of quartz/feldspar and biotite.\n  - **Massive Non-Foliated Metamorphic Rocks (كتلية):** Formed purely by contact thermal heat:\n    - *Marble (الرخام):* Recrystallized limestone; interlocked calcite crystals produce ornamental stone.\n    - *Quartzite (الكوارتزيت):* Recrystallized quartz sandstone under thermal contact.",
          theoryContentAr: "### ١. الصخور الرسوبية ومصادر الطاقة\n- تغطي ٧٥٪ من سطح القارات لكنها لا تمثل سوى ٥٪ فقط من حجم صخور القشرة الأرضية:\n  ١. **صخور فتاتية:** رواسب الزلط (أكبر من ٢ ملم) كالبريشيا ذات الحواف الحادة والكونجلوميرات ذات الحصى المستدير؛ رواسب الرمل (٢ ملم إلى ٦٢ ميكرون) كالحجر الرملي؛ ورواسب الطين كالغرين والصلصال والطفل النفطي.\n  ٢. **صخور كيميائية النشأة (المتبخرات):** الجبس، الأنهيدريت، الملح الصخري (الهاليت)، ورواسب صواعد وهوابط المغارات.\n  ٣. **صخور بيوكيميائية وعضوية:** الحجر الجيري الغني بالأحافير والنيموليت، وصخور الفوسفات من بقايا هياكل فقاريات بحرية.\n  ٤. **مصادر الطاقة والمحروقات:**\n     - *الفحم الحجري:* طمر بقايا نباتية في مستنقعات خلف الدلتاوات بمعزل عن الهواء مع تركيز الكربون (العصر الكربوني).\n     - *النفط والغاز الطبيعي:* طمر كائنات بحرية دقيقة في صخور المصدر الطينية وتنضج عند حرارة ٧٠ إلى ١٠٧°م وعمق ٢ إلى ٤ كم، ثم تهاجر وتخزن في صخور الخزان المسامية (الحجر الرملي والجيري).\n     - *الطفل النفطي (الكيروجين):* صخر طيني غني بمادة شمعية هيدروكربونية صلبة لا تسيل إلا بالتسخين لـ ٤٨٠°م.\n\n### ٢. الصخور المتحولة\n- تنشأ بتعرض الصخور القديمة لارتفاع شديد في درجة الحرارة و/أو الضغط التكتوني:\n  - **صخور متحولة متورقة:** تنمو بلوراتها تحت الضغط والحرارة في اتجاه عمودي على اتجاه الضغط:\n    - *الأردواز:* تحول الطين الصفائحي عند حرارة أقل من ٢٠٠°م.\n    - *الشيست الميكائي:* ترتيب بلورات الميكا في صفائح متصلة رقيقة.\n    - *النيس:* تحول صخر الجرانيت حيث تترتب البلورات في خطوط متوازية متقطعة ومتبادلة.\n  - **صخور متحولة كتلية:** تنشأ بفعل التلامس الحراري للصهارة دون ضغط موجه:\n    - *الرخام:* تحول الحجر الجيري بتلاحم بلورات الكالسيت مما يكسبه صلادة وألواناً وتعرقات بديعة.\n    - *الكوارتزيت:* تحول الحجر الرملي بتلاحم حبيبات الكوارتز حرارياً.",
          formulas: [
          {
                    "labelEn": "Hydrocarbon Maturation Window",
                    "labelAr": "نافذة نضج النفط في باطن الأرض",
                    "latex": "70^{\\circ}\\text{C} \\le T_{\\text{maturation}} \\le 107^{\\circ}\\text{C}, \\quad 2\\text{ km} \\le \\text{Depth} \\le 4\\text{ km}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 45-70"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Sedimentary & Metamorphic Rocks & Hydrocarbon Reservoirs",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "الصخور الرسوبية والمتحولة ومصادر الطاقة البترولية",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C3-L3",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_3_3_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Sedimentary & Metamorphic Rocks & Hydrocarbon Reservoirs",
            titleAr: "ورقة عمل تقييمية وزارية: " + "الصخور الرسوبية والمتحولة ومصادر الطاقة البترولية",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_3_3_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Sedimentary & Metamorphic Rocks & Hydrocarbon Reservoirs",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "الصخور الرسوبية والمتحولة ومصادر الطاقة البترولية",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_3_3_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Sedimentary & Metamorphic Rocks & Hydrocarbon Reservoirs",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "الصخور الرسوبية والمتحولة ومصادر الطاقة البترولية",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_3_3_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Sedimentary & Metamorphic Rocks & Hydrocarbon Reservoirs",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "الصخور الرسوبية والمتحولة ومصادر الطاقة البترولية",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_rock_cycle",
            titleEn: "Interactive Geology & Earth Studio: " + "Sedimentary & Metamorphic Rocks & Hydrocarbon Reservoirs",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "الصخور الرسوبية والمتحولة ومصادر الطاقة البترولية",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        }
      ],
      databank: geologyCh3Databank,
      solvedExamples: geologyCh3SolvedExamples,
      exerciseProblems: geologyCh3Exercises
    },
    {
      id: "th_geo_earth_ch4",
      chapterNumber: 4,
      titleEn: "Unit 4: Earth Movements, Continental Drift, Plate Tectonics & Seismology",
      titleAr: "الباب الرابع: الحركات الأرضية والانجراف القاري وتكتونية الصفائح والزلازل",
      descriptionEn: "Epeirogenic vs Orogenic movements, Airy's isostasy, Wegener's continental drift evidences (paleomagnetism, ancient climates, tillites, fossils), plate tectonics boundaries (divergent, convergent, transform), and seismology (P/S waves, epicenter triangulation, Richter magnitude).",
      descriptionAr: "الحركات البانية للقارات والجبال، التوازن الإيزوستاتيكي للبروفيسور إيري، شواهد الانجراف القاري لألفريد فيجنر، حدود الصفائح التكتونية، والزلازل ورصدها بمحطات التسجيل ومقياس ريختر.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "th_geo_earth_ch4_l1",
          titleEn: "Epeirogenic vs Orogenic Movements & Airy's Isostasy",
          titleAr: "الحركات البانية للقارات والجبال ونظرية التوازن الإيزوستاتيكي",
          summaryEn: "Slow epeirogenic movements vs rapid orogenic folding/faulting, Sir George Airy's isostasy principle, and subterranean magma flow from deposition basins to erosion zones.",
          summaryAr: "الحركات البانية للقارات (حركات بطيئة لا تشوه الصخور) والحركات البانية لسلاسل الجبال (طيات وفوالق دسرية ضخمة)، ونظرية التوازن الإيزوستاتيكي لإيري وهجرة الصهارة.",
          theoryContentEn: "### 1. Earth Movements (الحركات الأرضية)\n- **Epeirogenic Movements (الحركات البانية للقارات):**\n  - Slow vertical crustal movements lasting geological eras.\n  - Elevate or submerge vast continental blocks without rock folding or severe faulting.\n  - Example: Marine limestone horizontal strata uplifted thousands of meters above sea level (e.g., Grand Canyon walls).\n- **Orogenic Movements (الحركات البانية لسلاسل الجبال):**\n  - Rapid, localized tectonic lateral compressions folding and intensely faulting strata.\n  - Produce high mountain chains with thrust faults (فوالق دسرية زحفية) and deep roots.\n  - Examples: The Himalayas in Asia, the Alps in Europe, the Atlas in North Africa, and Gebel El-Maghara in Egypt.\n\n### 2. Airy's Principle of Isostasy (التوازن الإيزوستاتيكي)\n- Formulated by Sir George Airy: Earth's crust is in dynamic hydrostatic equilibrium.\n- **Mountain Roots:** Low-density mountain granite chains (density 2.8 g/cm³) possess subterranean roots sinking into the dense mantle (density 3.3 g/cm³) to a depth **4 times their elevation** above sea level.\n- **Magma Flow Cycle:**\n  1. Denudation and weathering erode mountain peaks, reducing pressure on the crust underneath.\n  2. Sediments accumulate in marine sedimentary basins (e.g., Nile Delta and Mediterranean), dramatically increasing pressure on the basin floor.\n  3. High pressure forces light acidic magma rich in feldspar and silica to migrate underground from the deposition zone back toward the roots of the eroded mountains, maintaining crustal equilibrium and uplifting mountains anew.",
          theoryContentAr: "### ١. أنواع الحركات الأرضية الكبرى\n- **الحركات البانية للقارات (Epeirogenic):**\n  - حركات بطيئة تستمر لأزمنة جيولوجية متعاقبة وتؤثر على أجزاء شاسعة من القارات.\n  - تؤدي لرفع أو هبوط الصخور الرسوبية دون أن تشوهها أو تثنيها بطيات وتظل في وضع أفقي.\n  - مثال: جدران الأخدود العظيم لنهر كولورادو بأمريكا الشمالية حيث ترتفع رواسب بحرية أفقية لارتفاع ١٥٨٠ متراً.\n- **الحركات البانية لسلاسل الجبال (Orogenic):**\n  - حركات تكتونية جانبية سريعة تؤثر على نطاقات جغرافية ضيقة وتمتد لمسافات طويلة.\n  - تؤدي لتشوهات عنيفة في صخور القشرة بطيات شديدة وفوالق دسرية ذات ميل قليل وإزاحة جانبية كبيرة.\n  - أمثلة: جبال الهيمالايا، جبال الألب، جبال أطلس، وسلسلة قباب جبل المغارة وشبراويت وسيناء بمصر.\n\n### ٢. نظرية التوازن الإيزوستاتيكي (للبروفيسور إيري)\n- القشرة الأرضية في حالة اتزان هيدروستاتيكي وتكتوني دائم:\n  - **جذور الجبال:** سلاسل الجبال المكونة من صخور جرانيتية خفيفة (كثافتها ٢٫٨ جم/سم٣) تمتلك جذوراً تغوص في صخور الوشاح عالية الكثافة لعمق يصل إلى **٤ أمثال ارتفاع الجبل** فوق سطح البحر.\n  - **هجرة الصهارة ودورة التوازن:**\n    ١. تفتت عوامل التجوية قمم الجبال، فينخفض الضغط أسفل منطقة التفتيت.\n    ٢. تنتقل الرواسب وتترسب في أحواض الترسيب (كدلتا النيل)، فيزداد الضغط أسفل منطقة الترسيب بشدة.\n    ٣. نتيجة لاختلاف الضغط، تسري الصهارة الحامضية الخفيفة الغنية بالفلسبار والسيليكا من أسفل منطقة الترسيب إلى قاع منطقة التفتيت أسفل الجبال، مما يرفع الجبال مجدداً ويعيد الاتزان للقشرة.",
          formulas: [
          {
                    "labelEn": "Isostatic Mountain Root Ratio",
                    "labelAr": "معادلة جذر الجبل الإيزوستاتيكي",
                    "latex": "D_{\\text{root}} = 4 \\times H_{\\text{mountain}}, \\quad L_{\\text{total}} = 5 \\times H_{\\text{mountain}}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 65-90"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Epeirogenic vs Orogenic Movements & Airy's Isostasy",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "الحركات البانية للقارات والجبال ونظرية التوازن الإيزوستاتيكي",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C4-L1",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_4_1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Epeirogenic vs Orogenic Movements & Airy's Isostasy",
            titleAr: "ورقة عمل تقييمية وزارية: " + "الحركات البانية للقارات والجبال ونظرية التوازن الإيزوستاتيكي",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_4_1_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Epeirogenic vs Orogenic Movements & Airy's Isostasy",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "الحركات البانية للقارات والجبال ونظرية التوازن الإيزوستاتيكي",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_4_1_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Epeirogenic vs Orogenic Movements & Airy's Isostasy",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "الحركات البانية للقارات والجبال ونظرية التوازن الإيزوستاتيكي",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_4_1_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Epeirogenic vs Orogenic Movements & Airy's Isostasy",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "الحركات البانية للقارات والجبال ونظرية التوازن الإيزوستاتيكي",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_plate_tectonics",
            titleEn: "Interactive Geology & Earth Studio: " + "Epeirogenic vs Orogenic Movements & Airy's Isostasy",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "الحركات البانية للقارات والجبال ونظرية التوازن الإيزوستاتيكي",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch4_l2",
          titleEn: "Wegener's Continental Drift Theory & The Five Evidences",
          titleAr: "نظرية الانجراف القاري لألفريد فيجنر والشواهد الخمسة",
          summaryEn: "Pangaea supercontinent, breakup into Laurasia and Gondwana, thermal convection currents in asthenosphere, and the 5 diagnostic evidences (Paleomagnetism, Paleoclimates, Tillites, Fossils, Structural match).",
          summaryAr: "قارة أم البدايات (بانجيا) وانقسامها إلى لوراسيا وجندوانا، دوامات تيارات الحمل بالأسينوسفير، والشواهد الخمسة الحاسمة (المغناطيسية القديمة، المناخ القديم، رواسب الثلاجات، الأحافير، والبناء الجيولوجي).",
          theoryContentEn: "### 1. Alfred Wegener's Theory of Continental Drift (1922)\n- Earth's continents were once united as a single massive supercontinent called **Pangaea** (بانجيا) surrounded by a universal ocean (Panthalassa).\n- During the Mesozoic Era (Triassic, ~220 million years ago), Pangaea split into northern **Laurasia** and southern **Gondwana**, separated by the Tethys Sea. Continents drifted due to thermal convection currents in the ductile upper mantle (asthenosphere).\n\n### 2. The Five Diagnostic Evidences (الشواهد الخمسة)\n1. **Paleomagnetism (المغناطيسية القديمة):** Magnetic dip angle is 0° at the equator and 90° at magnetic poles. Discovering ancient rocks near the equator with 90° dip proves they drifted from the pole. Symmetrical magnetic stripes on ocean floor flanking mid-ocean ridges prove sea-floor spreading.\n2. **Ancient Climates (المناخ القديم):** Sedimentary belts (evaporites, coal beds, coral reefs) that historically formed in warm tropics are now found in polar latitudes.\n3. **Glacial Tillites of Southern Continents (مسالك جليد القطب الجنوبي):** Permo-Carboniferous glacial deposits across South America, South Africa, India, Australia, and Antarctica demonstrate they formed a single giant southern landmass (Gondwana) centered at the South Pole.\n4. **Fossil Flora and Fauna (الأحافير الحيوانية والنباتية):** Fossils of identical freshwater reptiles (*Mesosaurus*) unable to swim across oceans found exclusively in South America and South Africa.\n5. **Geological Structural Continuity (البناء الجيولوجي للقارات):** Mountain belts in South America match perfectly across the Atlantic with mountain structures in South Africa.",
          theoryContentAr: "### ١. نظرية الانجراف القاري لألفريد فيجنر (١٩٢٢م)\n- كانت القارات كتلة واحدة عملاقة متصلة تُدعى **بانجيا (أم القارات)** تحيط بها محيطات شاسعة.\n- في حقب الحياة المتوسطة (منذ ٢٢٠ مليون سنة)، بدأت بانجيا بالانفصال إلى كتلة شمالية (لوراسيا) وجنوبية (جندوانا) يفصل بينهما بحر التيثس القديم، وذلك بفعل تيارات الحمل الحرارية الناقلة في صخور الأسينوسفير اللدنة.\n\n### ٢. الشواهد الخمسة المؤيدة لنظرية الانجراف القاري\n١. **المغناطيسية القديمة (Paleomagnetism):** زاوية انحراف الإبرة المغناطيسية صفر عند خط الاستواء و٩٠° عند القطبين؛ وجود صخر انحرافه ٨٠° قرب خط الاستواء يثبت انتقاله من القطب. كما أن تشابه الأشرطة المغناطيسية على جانبي حيد وسط المحيط يثبت اتساع قاع البحر.\n٢. **المناخ القديم:** تتابع الأحزمة المناخية من خط الاستواء إلى القطب؛ فوجود رواسب المتبخرات وأحافير الشعاب المرجانية والفحم في مناطق قطبية باردة يثبت زحزحة القارات من مواقعها المدارية القديمة.\n٣. **مسالك جليد القطب الجنوبي القديم (رواسب الثلاجات):** وجود رواسب جليدية متطابقة من العصرين الكربوني والبرمي في أمريكا الجنوبية، جنوب أفريقيا، الهند، أستراليا، والقطب الجنوبي يثبت أنها كانت كتلة واحدة (جندوانا).\n٤. **الأحافير النباتية والحيوانية:** وجود أحافير زواحف من جنس «ميزوصور» لا تستطيع السباحة في مياه المحيطات مقصورة على صخور أمريكا الجنوبية وجنوب أفريقيا فقط.\n٥. **البناء الجيولوجي للقارات:** التطابق التام في حواف القارات وتراكيب السلاسل الجبلية في جنوب أفريقيا والأرجنتين كأنها لوحة واحدة تم تمزيقها.",
          formulas: [
          {
                    "labelEn": "Magnetic Declination Latitude Rule",
                    "labelAr": "قاعدة زاوية الانحراف المغناطيسي للقطب والاستواء",
                    "latex": "\\theta_{\\text{dip}} = 0^{\\circ} \\;(\\text{Equator}), \\quad \\theta_{\\text{dip}} = 90^{\\circ} \\;(\\text{Magnetic Pole})"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 65-90"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Wegener's Continental Drift Theory & The Five Evidences",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "نظرية الانجراف القاري لألفريد فيجنر والشواهد الخمسة",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C4-L2",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_4_2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Wegener's Continental Drift Theory & The Five Evidences",
            titleAr: "ورقة عمل تقييمية وزارية: " + "نظرية الانجراف القاري لألفريد فيجنر والشواهد الخمسة",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_4_2_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Wegener's Continental Drift Theory & The Five Evidences",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "نظرية الانجراف القاري لألفريد فيجنر والشواهد الخمسة",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_4_2_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Wegener's Continental Drift Theory & The Five Evidences",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "نظرية الانجراف القاري لألفريد فيجنر والشواهد الخمسة",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_4_2_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Wegener's Continental Drift Theory & The Five Evidences",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "نظرية الانجراف القاري لألفريد فيجنر والشواهد الخمسة",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_plate_tectonics",
            titleEn: "Interactive Geology & Earth Studio: " + "Wegener's Continental Drift Theory & The Five Evidences",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "نظرية الانجراف القاري لألفريد فيجنر والشواهد الخمسة",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch4_l3",
          titleEn: "Plate Tectonics Theory, Plate Boundaries & Seismology",
          titleAr: "نظرية تكتونية الصفائح وحدود الألواح والزلازل ورصدها",
          summaryEn: "7 major lithospheric plates, Divergent (Red Sea), Convergent (Himalayas, Andes, Island Arcs), Transform (San Andreas, Gulf of Aqaba), and Seismology (P/S waves, Richter magnitude vs Mercalli intensity).",
          summaryAr: "الصفائح التكتونية السبع الكبرى، الحدود التباعدية (البحر الأحمر)، الحدود التقاربية (الهيمالايا، الأنديز، أقواس الجزر)، الحدود الانزلاقية (صدع سان أندرياس، خليج العقبة)، والزلازل ورصدها.",
          theoryContentEn: "### 1. Plate Tectonics Theory (Isacks, Oliver, Sykes, 1968)\n- Earth's lithosphere is divided into ~7 major plates (African, Eurasian, North American, South American, Pacific, Australian, Antarctic) and several minor plates.\n- Plates float atop the ductile asthenosphere driven by rising and descending thermal convection currents.\n\n### 2. Plate Boundary Types (أنواع حدود الصفائح)\n1. **Divergent / Constructive Boundaries (حدود متباعدة بناءة):**\n   - Tensional stress pulls plates apart; magma rises forming new oceanic crust.\n   - Examples: **The Red Sea** (widening at 2.5 cm/year as Arabian plate pulls from African plate); Mid-Atlantic Ridge.\n2. **Convergent / Destructive Boundaries (حدود متقاربة هدامة):**\n   - *Continental-Continental Collision:* Intense folding forming towering mountains without volcanism (e.g., **The Himalayas**).\n   - *Oceanic-Continental Subduction:* Denser oceanic plate sinks under continental plate; melting produces volcanic chains (e.g., **The Andes Mountains**, **The Mediterranean Sea**).\n   - *Oceanic-Oceanic Subduction:* Forms deep oceanic trenches and **volcanic island arcs**.\n3. **Transform / Conservative Boundaries (حدود انزلاقية تطاحنية):**\n   - Lateral sliding along strike-slip faults with zero creation or destruction of crust.\n   - Examples: **San Andreas Fault** in California, and **The Gulf of Aqaba Fault** in Egypt.\n\n### 3. Seismology & Earthquake Triangulation (علم الزلازل)\n- Types of seismic waves:\n  - **P-Waves (Primary):** Longitudinal compressional, fastest, travel through solids, liquids, and gases.\n  - **S-Waves (Secondary):** Transverse shear, slower, travel **ONLY through solids**.\n  - **L-Waves (Surface):** Long amplitude, travel along crustal surface, cause catastrophic destruction.\n- **Epicenter Triangulation:** Recorded at 3 seismograph stations; arrival time intervals ($S - P$) define 3 radial circles whose unique intersection point locates the epicenter.\n- **Richter Scale:** Measures total released energy (Magnitude) on a logarithmic scale where each whole step represents ~32 times more energy.",
          theoryContentAr: "### ١. نظرية تكتونية الصفائح (١٩٦٨م)\n- الغلاف الصخري للأرض مقسم إلى ٧ ألواح تكتونية كبرى (الأفريقي، الأوراسي، الأمريكي الشمالي، الأمريكي الجنوبي، الهادي، الأسترالي، والقطبي) بالإضافة لألواح صغيرة.\n- تتحرك الألواح فوق الوشاح العلوي (الأسينوسفير) بفعل دوامات تيارات الحمل الحراري الصاعدة والهابطة بمعدل بطيء غير محسوس.\n\n### ٢. أنواع حركات الألواح التكتونية\n١. **حركة تباعدية بناءة (Divergent):**\n   - قوى شد تفصل الألواح وتولد قشرة محيطية جديدة.\n   - أمثلة: **نشأة البحر الأحمر** (يتسع بمعدل ٢٫٥ سم/سنة بتباعد اللوح العربي عن الأفريقي)، وحيد وسط المحيط الأطلنطي.\n٢. **حركة تقاربية هدامة (Convergent):**\n   - *لوحان قاريان:* تصادم عنيف يسبب طيات ضخمة دون براكين (مثل **جبال الهيمالايا**).\n   - *لوح قاري مع لوح محيطي:* يهبط اللوح المحيطي الأعلى كثافة أسفل القاري وينصهر مسبباً سلاسل جبلية بركانية (مثل **جبال الأنديز** وبحر **المتوسط**).\n   - *لوحان محيطيان:* هبوط أحدهما أسفل الآخر مسبباً خنادق سحيقة و**أقواس جزر بركانية**.\n٣. **حركة انزلاقية تطاحنية (Transform):**\n   - حركة أفقية على طول صدع انتقالي دون زيادة أو نقصان في مساحة القشرة.\n   - أمثلة: **صدع سان أندرياس** بكاليفورنيا، وصدوع **خليج العقبة** في مصر مسببة الزلازل.\n\n### ٣. علم الزلازل وتحديد المركز السطحي\n- أنواع الموجات الزلزالية:\n  - **موجات أولية (P):** طولية سريعة جداً، أول ما يصل لمحطات الرصد، تسري في الصلب والسائل والغاز.\n  - **موجات ثانوية (S):** مستعرضة اهتزازية، تسري في **الأجسام الصلبة فقط** وتثبت سيولة اللب الخارجي.\n  - **موجات سطحية (L):** موجات طويلة بطيئة تنطلق في القشرة السطحية وهي المسببة للدمار الشامل.\n- **تحديد المركز السطحي للزلزال (Epicenter):** يتطلب ٣ محطات رصد زلازل على الأقل، حيث يُرسم حول كل محطة دائرة نصف قطرها مسافة الزلزال، ونقطة تقاطع الدوائر الثلاث هي المركز السطحي.\n- **مقياس ريختر:** يقيس قدر الزلزال (كمية الطاقة المنطلقة) بمقياس لوغاريتمي مفتوح كل درجة تعادل زيادة ٣٢ ضعفاً في الطاقة.",
          formulas: [
          {
                    "labelEn": "Red Sea Spreading Velocity",
                    "labelAr": "معدل اتساع قاع البحر الأحمر سنوياً",
                    "latex": "v_{\\text{rift}} = 2.5 \\text{ cm/year}"
          },
          {
                    "labelEn": "Richter Logarithmic Energy Formula",
                    "labelAr": "معادلة طاقة الزلزال بمقياس ريختر",
                    "latex": "\\log_{10}(E) = 1.5 M + 4.8, \\quad \\frac{E_{M+1}}{E_M} \\approx 31.6"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 65-90"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Plate Tectonics Theory, Plate Boundaries & Seismology",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "نظرية تكتونية الصفائح وحدود الألواح والزلازل ورصدها",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C4-L3",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_4_3_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Plate Tectonics Theory, Plate Boundaries & Seismology",
            titleAr: "ورقة عمل تقييمية وزارية: " + "نظرية تكتونية الصفائح وحدود الألواح والزلازل ورصدها",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_4_3_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Plate Tectonics Theory, Plate Boundaries & Seismology",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "نظرية تكتونية الصفائح وحدود الألواح والزلازل ورصدها",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_4_3_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Plate Tectonics Theory, Plate Boundaries & Seismology",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "نظرية تكتونية الصفائح وحدود الألواح والزلازل ورصدها",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_4_3_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Plate Tectonics Theory, Plate Boundaries & Seismology",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "نظرية تكتونية الصفائح وحدود الألواح والزلازل ورصدها",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "seismic_shadow_zone_simulator",
            titleEn: "Interactive Geology & Earth Studio: " + "Plate Tectonics Theory, Plate Boundaries & Seismology",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "نظرية تكتونية الصفائح وحدود الألواح والزلازل ورصدها",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        }
      ],
      databank: geologyCh4Databank,
      solvedExamples: geologyCh4SolvedExamples,
      exerciseProblems: geologyCh4Exercises
    },
    {
      id: "th_geo_earth_ch5",
      chapterNumber: 5,
      titleEn: "Unit 5: Dynamic Geomorphology, Surface Processes & Weathering",
      titleAr: "الباب الخامس: التوازن في الحركة بين الماء والهواء واليابس والجيومورفولوجيا",
      descriptionEn: "Mechanical and chemical weathering (oxidation, carbonation, hydration), geological work of wind, torrents, groundwater, rivers (stages, meanders, deltas), oceans, lakes, and residual vs transported soils.",
      descriptionAr: "التجوية الميكانيكية والكيميائية، العمل الهدمي والبنائي للرياح والسيول والمياه الجوفية والأنهار (مراحل النهر والمياندرز والدلتاوات) والبحار والتربة.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "th_geo_earth_ch5_l1",
          titleEn: "Mechanical & Chemical Weathering Processes",
          titleAr: "عوامل التجوية الميكانيكية والكيميائية ونواتجها",
          summaryEn: "Mechanical weathering (frost wedging, thermal expansion, pressure release exfoliation in granite), chemical weathering (oxidation, carbonation, hydration, kaolinization of feldspar).",
          summaryAr: "التجوية الميكانيكية (تكرار التجمد والذوبان، التمدد الحراري، تخفيف الحمل وتقشر الجرانيت)، والتجوية الكيميائية (الأكسدة، الكربنة، التميؤ، وتحلل الفلسبار إلى كاولينيت).",
          theoryContentEn: "### 1. Mechanical Weathering (التجوية الميكانيكية)\n- Disintegrates rocks into smaller pieces with **zero chemical alteration**:\n  1. **Frost Wedging (تكرار تجمد وذوبان المياه):** Water in rock fractures expands by 9% upon freezing, generating massive outward hydraulic pressure that shatters rock fragments into scree slopes at mountain bases.\n  2. **Thermal Expansion & Contraction (التمدد والانكماش الحراري):** Extreme daily temperature swings in arid deserts cause mineral grains to expand by day and contract by night, weakening crystal boundaries until rocks fracture.\n  3. **Pressure Release by Unloading (تخفيف الحمل بالتعرية):** Uplift and erosion remove overlying heavy strata, causing underlying plutonic rocks (like granite) to expand upward, exfoliating into concentric curved sheets (تقشر كروي) aided by chemical weathering.\n\n### 2. Chemical Weathering (التجوية الكيميائية)\n- Alters mineral chemistry into new minerals stable under surface temperature, pressure, and moisture:\n  1. **Oxidation (الأكسدة):** Reaction of atmospheric oxygen dissolved in water with minerals rich in iron and magnesium (e.g., Basalt turning reddish-brown from iron oxide).\n  2. **Carbonation (الكربنة):** Rainwater containing dissolved carbon dioxide forms dilute carbonic acid ($H_2CO_3$), which dissolves limestone ($CaCO_3$) into soluble calcium bicarbonate ($Ca(HCO_3)_2$), creating subterranean karst caves.\n  3. **Hydration (التميؤ):** Adding water molecules into a mineral crystal lattice, such as converting anhydrous Anhydrite ($CaSO_4$) into Gypsum ($CaSO_4 \\cdot 2H_2O$), causing volume expansion.\n  4. **Kaolinization of Granite:** Carbonic acid attacks orthoclase feldspar in granite, stripping potassium and silica to produce dull clay mineral **Kaolinite**, while quartz remains completely unchanged.",
          theoryContentAr: "### ١. التجوية الميكانيكية\n- تفتت الصخور إلى قطع أصغر حجماً دون أي تغير في تركيبها الكيميائي أو المعدني:\n  ١. **تكرار تجمد وذوبان المياه:** يتمدد الماء بنسبة ٩٪ عند تجمده في الشقوق الصخرية مسبباً ضغطاً هيدروليكياً يفتت الصخور مكوناً منحدر الركام عند أقدام الجبال.\n  ٢. **التمدد والانكماش الحراري في الصحاري:** التباين اليومي الكبير في درجات الحرارة بين النهار والليل يؤدي لتمدد وانكماش معادن الصخر مما يضعف تماسكها وتتفتت قشورها.\n  ٣. **تخفيف الحمل بالتعرية:** إزالة صخور ثقيلة تعلو صخراً جوفياً كالجرانيت تسمح له بالتمدد لأعلى فتنفصل قشور كروية الشكل بمساعدة التجوية الكيميائية للفلسبار.\n\n### ٢. التجوية الكيميائية\n- تحلل المعادن وتغيير تركيبها لتصبح في اتزان كيميائي مع الظروف السطحية الرطبة:\n  ١. **الأكسدة (Oxidation):** تفاعل الأكسجين الذائب في الماء مع معادن الصخور الغنية بالحديد والماغنسيوم كالبازلت وتغير لونها للبني المحمر.\n  ٢. **الكربنة (Carbonation):** إذابة الحجر الجيري بواسطة حمض الكربونيك المخفف في مياه الأمطار وتحويله لبيكربونات كالسيوم ذائبة مكوناً الكهوف والمغارات.\n  ٣. **التميؤ (Hydration):** إضافة جزيئات الماء للتركيب البلوري، مثل تحول معدن الأنهيدريت اللامائي إلى جبس مائي بزيادة في الحجم.\n  ٤. **تحلل الجرانيت كيميائياً:** حمض الكربونيك يحلل فلسبار الجرانيت الأرثوكليز ويفقده بريقه ويحوله إلى معدن طيني ضعيف (الكاولينيت)، وتتحلل الميكا، بينما يظل الكوارتز ثابتاً لا يتغير لشدة مقاومته.",
          formulas: [
          {
                    "labelEn": "Carbonation Dissolution Equation",
                    "labelAr": "معادلة إذابة الحجر الجيري بحمض الكربونيك",
                    "latex": "\\text{CaCO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2 \\rightleftharpoons \\text{Ca}(\\text{HCO}_3)_2 \\;(\\text{Soluble Bicarbonate})"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 85-110"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Mechanical & Chemical Weathering Processes",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "عوامل التجوية الميكانيكية والكيميائية ونواتجها",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C5-L1",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_5_1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Mechanical & Chemical Weathering Processes",
            titleAr: "ورقة عمل تقييمية وزارية: " + "عوامل التجوية الميكانيكية والكيميائية ونواتجها",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_5_1_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Mechanical & Chemical Weathering Processes",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "عوامل التجوية الميكانيكية والكيميائية ونواتجها",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_5_1_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Mechanical & Chemical Weathering Processes",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "عوامل التجوية الميكانيكية والكيميائية ونواتجها",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_5_1_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Mechanical & Chemical Weathering Processes",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "عوامل التجوية الميكانيكية والكيميائية ونواتجها",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_stratigraphy_cross_section",
            titleEn: "Interactive Geology & Earth Studio: " + "Mechanical & Chemical Weathering Processes",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "عوامل التجوية الميكانيكية والكيميائية ونواتجها",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch5_l2",
          titleEn: "Geological Work of Wind, Torrents & Groundwater",
          titleAr: "العمل الجيولوجي للرياح والسيول والمياه الجوفية",
          summaryEn: "Wind erosion (yardangs, deflation) and deposition (Barchans, Seif dunes), torrent valleys and alluvial fans, groundwater chemical dissolution and cave speleothems (stalactites and stalagmites).",
          summaryAr: "العمل الهدمي للرياح (المصاطب والحصى الهرمي) والبنائي (الكثبان الهلالية وغرد أبو المحاريق)، أخوار ومخاريط السيول، والعمل الجيولوجي للمياه الجوفية والمغارات والهوابط والصواعد.",
          theoryContentEn: "### 1. Geological Action of Wind (الرياح)\n- Highly active in arid deserts due to lack of vegetation:\n  - *Destructive Action (Erosion):* Differential erosion carves soft strata faster than hard caprocks, producing mushroom-shaped rock pedestals (**Yardangs / المصاطب**). Sandblasting polishes desert stones into flat, triangular pyramids (**Ventifacts / حصى هرمي الشكل**).\n  - *Constructive Action (Deposition):* When wind velocity drops, it drops suspended sand into **Sand Dunes (كثبان رملية)**:\n    - *Barchans (كثبان هلالية):* Most common, gentle slope facing wind, steep leeward face.\n    - *Longitudinal / Seif (غرود مستطيلة):* Parallel to wind direction (e.g., Ghard Abu Moharik extending 650 km).\n    - *Coastal Dunes (كثبان ساحلية):* Composed of cemented calcareous shell fragments.\n\n### 2. Geological Action of Torrents (السيول)\n- Heavy downpours over mountainous slopes flow into steep ravines (أخوار):\n  - *Destructive:* Deepens and widens steep mountain gorges.\n  - *Constructive:* When emerging onto open plains, torrent velocity dissipates, depositing sediment in a semi-circle:\n    - **Alluvial Fan / Cone (مخروط السيل / مروحة السيل):** Coarsest boulders at the mountain exit, fining outward into gravel and sand.\n\n### 3. Geological Action of Groundwater (المياه الجوفية)\n- Subsurface water stored in aquifer pore spaces:\n  - *Destructive Chemical Action:* Carbonated groundwater dissolves limestone beds into massive underground caverns.\n  - *Constructive Deposition:* Evaporation of dripping subterranean calcium bicarbonate water leaves calcite deposits:\n    - **Stalactites (الهوابط / الاستلاكتيت):** Slender stone icicles hanging down from cavern ceilings.\n    - **Stalagmites (الصواعد / الاستلاجميت):** Stone pillars growing upward from the cavern floor.",
          theoryContentAr: "### ١. العمل الجيولوجي للرياح\n- يشتد تأثير الرياح في الصحاري القاحلة لخلوها من الغطاء النباتي:\n  - *العمل الهدمي:* النحت المتباين ينحت الطبقات الرخوة أسرع من الصلبة مكوناً **المصاطب الصحراوية**؛ وصنفرة الرمال تجعل الحصى الصحراوي **هرمي الشكل ومصقول الأوجه**.\n  - *العمل البنائي:* عندما تصطدم الرياح بعائق تقل سرعتها وترسب الرمال في صورة **كثبان رملية**:\n    - *كثبان هلالية:* انحدارها بسيط في اتجاه الرياح وشديد في الجهة المضادة وهي الأكثر انتشاراً.\n    - *كثبان مستطيلة (الغرود):* تمتد موازية لاتجاه الرياح كـ **غرد أبو المحاريق** (٦٥٠ كم بالصحراء الغربية).\n    - *كثبان ساحلية:* تتكون من حبيبات جيرية متماسكة على الساحل الشمالي لمصر.\n\n### ٢. العمل الجيولوجي للسيول\n- أمطار غزيرة تهبط فوق المرتفعات وتندفع في مجاري ضيقة تسمى الأخوار:\n  - *العمل الهدمي:* نحت وتعميق الأخوار الجبلية واكتساح الحصى والرمال.\n  - *العمل البنائي:* عند خروج السيل للسهل تقل سرعته فجأة ويرسب حمولته على شكل نصف دائرة مركزها مخرج الخور مكوناً **مخروط السيل (مروحة السيل)** أو الدلتا الجافة.\n\n### ٣. العمل الجيولوجي للمياه الجوفية (الأرضية)\n- المياه المخزنة في مسام وفواصل الصخور تحت السطح:\n  - *العمل الهدمي الكيميائي:* إذابة صخور الحجر الجيري بواسطة الماء المحمل بـ CO2 مسبباً تكوين الكهوف والمغارات.\n  - *العمل البنائي:* ترسب كربونات الكالسيوم عند تبخر قطرات الماء داخل المغارات:\n    - **الهوابط (الاستلاكتيت):** رواسب كلسية تتدلى من أسقف المغارات.\n    - **الصواعد (الاستلاجميت):** رواسب كلسية ترتفع وتنمو من أرضية المغارات.",
          formulas: [
          {
                    "labelEn": "Dune Migration Velocity",
                    "labelAr": "معدل حركة الكثبان الرملية الصحراوية",
                    "latex": "v_{\\text{dune}} = 5 \\text{ to } 8 \\text{ meters/year}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 85-110"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Geological Work of Wind, Torrents & Groundwater",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "العمل الجيولوجي للرياح والسيول والمياه الجوفية",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C5-L2",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_5_2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Geological Work of Wind, Torrents & Groundwater",
            titleAr: "ورقة عمل تقييمية وزارية: " + "العمل الجيولوجي للرياح والسيول والمياه الجوفية",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_5_2_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Geological Work of Wind, Torrents & Groundwater",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "العمل الجيولوجي للرياح والسيول والمياه الجوفية",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_5_2_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Geological Work of Wind, Torrents & Groundwater",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "العمل الجيولوجي للرياح والسيول والمياه الجوفية",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_5_2_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Geological Work of Wind, Torrents & Groundwater",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "العمل الجيولوجي للرياح والسيول والمياه الجوفية",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_stratigraphy_cross_section",
            titleEn: "Interactive Geology & Earth Studio: " + "Geological Work of Wind, Torrents & Groundwater",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "العمل الجيولوجي للرياح والسيول والمياه الجوفية",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch5_l3",
          titleEn: "Geological Work of Rivers, Seas, Lakes & Soil Horizons",
          titleAr: "العمل الجيولوجي للأنهار والبحار والبحيرات ونطاقات التربة",
          summaryEn: "River life stages (Youth, Maturity, Old Age, Rejuvenation), waterfalls, meanders, oxbow lakes, marine coastal bars, lakes, and soil profile (Horizons A, B, C).",
          summaryAr: "مراحل النهر (الشباب، النضوج، الشيخوخة، تصابي الأنهار)، الشلالات، المياندرز والبحيرات القوسية، الحواجز والألسنة البحرية، ونطاقات التربة (أ، ب، ج).",
          theoryContentEn: "### 1. River Morphological Life Stages (مراحل النهر)\n1. **Youth Stage (مرحلة الشباب):** Steep slope, high velocity; erosion predominates over deposition; cross-section is a narrow **V-shaped canyon**; characterized by waterfalls (الشلالات) and potholes.\n2. **Maturity Stage (مرحلة النضوج):** Moderate slope; erosion equals deposition; valley widens into a broad **U-shaped cross section**; characterized by river bends (**Meanders**) and cut-off **Oxbow Lakes (بحيرات قوسية)**.\n3. **Old Age Stage (مرحلة الشيخوخة):** Gentle slope, slow current; deposition predominates over erosion; riverbed cross section flattens into an **Alluvial Plain (سهل فيضي)** with natural levees; forms river **Deltas** when entering quiet seas.\n4. **Rejuvenation / Re-youth (تصابي الأنهار):** Tectonic uplift near headwaters steepens river gradient anew, carving stepped **River Terraces (شرفات نهرية)** where upper terraces are older than lower ones.\n\n### 2. Geological Work of Seas & Oceans (البحار والمحيطات)\n- Coastal erosion forms sea cliffs, sea caves, and coastal arches.\n- Coastal deposition forms **Spits (ألسنة)** and **Bars (حواجز)** sealing bays to form coastal lagoons (like Lake Edku and Lake Maryut).\n- Marine deposition zones: Shoreline zone, Shallow water zone (Continental shelf down to 200m), Bathyal slope zone (200m–2000m), and Abyssal deep plains (> 2000m with red clay).\n\n### 3. Soil Horizons (نطاقات التربة الناضجة)\n- **Horizon A (Topsoil):** Rich in dark decayed organic humus and living micro-organisms.\n- **Horizon B (Subsoil):** Compact oxidized clay minerals and leached iron compounds.\n- **Horizon C (Transition Zone):** Coarse weathered fragments resting directly atop unaltered parent bedrock.",
          theoryContentAr: "### ١. مراحل النهر الأربعة\n١. **مرحلة الشباب:** انحدار شديد وسرعة فائقة للتيار؛ النحت يسود على الترسيب؛ شكل المجرى **V ضيقة**؛ وتتميز بظهور الشلالات ومساقط المياه وظاهرة أسر الأنهار.\n٢. **مرحلة النضوج:** انحدار متوسط؛ يتساوى النحت مع الترسيب؛ يتسع الوادي ليصبح **V متسعة**؛ وتتميز بظهور التعرجات والالتواءات النهرية (**المياندرز**) والبحيرات القوسية واختفاء الشلالات.\n٣. **مرحلة الشيخوخة:** انحدار ضعيف وسرعة بطيئة؛ الترسيب يسود على النحت؛ يقل عمق المجرى ليصبح سهلاً فيضياً منبسطاً؛ وتصب الأنهار في البحار الهادئة مكونة **الدلتاوات**.\n٤. **مرحلة تصابي الأنهار (إعادة الشباب):** تحدث عند حدوث حركات أرضية رافعة قرب المنبع، فيستعيد النهر شبابه وينحت مجراه من جديد مكوناً **الشرفات النهرية** (الشرفة العليا هي الأقدم والسفلى هي الأحدث).\n\n### ٢. العمل الجيولوجي للبحار والمحيطات\n- أمواج وتيارات بحرية تنحت الصخور وتكون الجروف البحرية والمغارات الساحلية.\n- العمل البنائي يرسب الرمال مكوناً **الألسنة** و**الحواجز** التي تسد الخلجان مكونة بحيرات ملحية (كبحريرة مريوط وإدكو).\n- مناطق الترسيب البحري: المنطقة الشاطئية، منطقة الرف القاري (حتى عمق ٢٠٠ م)، منطقة المنحدر القاري (حتى ٢٠٠٠ م)، ومنطقة الأعماق السحيقة (تزيد عن ٢٠٠٠ م وتتميز بالطين الأحمر البركاني).\n\n### ٣. نطاقات التربة الناضجة\n- **النطاق (أ) التربة السطحية:** غنية بالدبال والمادة العضوية المتحللة وجذور النباتات.\n- **النطاق (ب) تحت التربة:** نطاق متماسك مؤكسد يترسب فيه الطين والحديد المتسرب من السطح.\n- **النطاق (ج) المنطقة المتدرجة:** صخور متفتتة متدرجة تعلو الصخر الأصلي مباشرة دون أن تتأثر بجذور النباتات.",
          formulas: [
          {
                    "labelEn": "Marine Zone Depth Limits",
                    "labelAr": "حدود أعماق المناطق البحرية الترسيبية",
                    "latex": "\\text{Shelf} \\le 200\\text{ m} < \\text{Bathyal} \\le 2000\\text{ m} < \\text{Abyssal Plains}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 85-110"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Geological Work of Rivers, Seas, Lakes & Soil Horizons",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "العمل الجيولوجي للأنهار والبحار والبحيرات ونطاقات التربة",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C5-L3",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_5_3_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Geological Work of Rivers, Seas, Lakes & Soil Horizons",
            titleAr: "ورقة عمل تقييمية وزارية: " + "العمل الجيولوجي للأنهار والبحار والبحيرات ونطاقات التربة",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_5_3_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Geological Work of Rivers, Seas, Lakes & Soil Horizons",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "العمل الجيولوجي للأنهار والبحار والبحيرات ونطاقات التربة",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_5_3_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Geological Work of Rivers, Seas, Lakes & Soil Horizons",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "العمل الجيولوجي للأنهار والبحار والبحيرات ونطاقات التربة",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_5_3_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Geological Work of Rivers, Seas, Lakes & Soil Horizons",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "العمل الجيولوجي للأنهار والبحار والبحيرات ونطاقات التربة",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "geology_stratigraphy_cross_section",
            titleEn: "Interactive Geology & Earth Studio: " + "Geological Work of Rivers, Seas, Lakes & Soil Horizons",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "العمل الجيولوجي للأنهار والبحار والبحيرات ونطاقات التربة",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        }
      ],
      databank: geologyCh5Databank,
      solvedExamples: geologyCh5SolvedExamples,
      exerciseProblems: geologyCh5Exercises
    },
    {
      id: "th_geo_earth_ch6",
      chapterNumber: 6,
      titleEn: "Unit 6: Environmental Concepts & Ecosystem Dynamics",
      titleAr: "الباب السادس: مفاهيم بيئية والنظم الإيكولوجية البحرية والصحراوية",
      descriptionEn: "Concept of biosphere (14 km max), ecology fundamentals, ecosystem characteristics (components, energy flow, waste cycling), marine ecosystem (hydrostatic pressure, light, food web), and desert adaptations (jerboa, fennec, drought perennials).",
      descriptionAr: "مفهوم الغلاف الحيوي (١٤ كم)، خصائص النظام البيئي وتدفق الطاقة، دراسة النظام البيئي البحري والضغط الهيدروستاتيكي وسلسلة الغذاء، والنظام الإيكولوجي الصحراوي وتكيف الكائنات.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "th_geo_earth_ch6_l1",
          titleEn: "Biosphere Concept, Ecology & Ecosystem Dynamics",
          titleAr: "مفهوم البيئة والغلاف الحيوي وخصائص النظام البيئي",
          summaryEn: "Scope of biosphere (14 km), Ernst Haeckel's ecology, living and non-living components, balance, interconnectedness, and cycling of organic wastes.",
          summaryAr: "حدود الغلاف الحيوي وسمكه (١٤ كم)، علم الإيكولوجي، مكونات النظام البيئي الحية وغير الحية، تشابك العلاقات، واستقرار النظام البيئي مع القابلية للتغير.",
          theoryContentEn: "### 1. Biosphere & Ecology\n- **Biosphere (الغلاف الحيوي):** The spatial envelope on Earth where life can exist and reproduce. Its maximum vertical thickness does not exceed **14 kilometers** (from the deepest oceanic trenches to the highest mountain peaks harboring life).\n- **Ecology (علم الإيكولوجي):** Coined by Ernst Haeckel (1869); studies the interactions between living organisms and their environmental habitats.\n- **Environmental Science (علم البيئة):** Focuses on application: conserving resources, combating pollution, and managing human-nature relationships.\n\n### 2. Characteristics of the Ecosystem (خصائص النظام البيئي)\n1. **Multiplicity of Components:**\n   - *Abiotic Factors:* Physical (light, temperature, radiation, pressure) and Chemical (salinity, pH, soil nutrients).\n   - *Biotic Factors:* Producers (green plants converting solar energy into chemical energy), Consumers (herbivores and carnivores), and Decomposers (bacteria and fungi recycling dead organic matter into soil nutrients).\n2. **Interconnectedness of Relations (تشابك العلاقات):** Complex food webs buffer ecosystems against localized shocks; high biodiversity creates maximum ecological stability.\n3. **Stability with Capacity to Change:** A balanced ecosystem quickly recovers from minor perturbations; severe disruptions force a temporary shift until a new equilibrium emerges.\n4. **Utilization of Wastes (استخدام الفضلات):** Zero waste in nature: fish excrete $CO_2$ utilized by aquatic plants for photosynthesis, which in turn release oxygen for fish respiration.",
          theoryContentAr: "### ١. الغلاف الحيوي ومفهوم الإيكولوجي\n- **الغلاف الحيوي:** الحيز المكاني الذي توجد به الحياة على كوكب الأرض، وأقصى سمك رأسي له لا يتعدى **١٤ كيلومتراً** بين قمم الجبال وقيعان المحيطات السحيقة.\n- **علم الإيكولوجي:** أطلقه العالم إرنست هيكل عام ١٨٦٩م؛ لدراسة مكان معيشة الكائن الحي وعلاقة الكائنات ببيئتها المحيطة.\n- **علم البيئة:** يهتم بتطبيق المعارف لحماية الموارد الطبيعية وحسن إدارتها ومكافحة التلوث ووقاية المجتمعات.\n\n### ٢. خصائص النظام البيئي المتكامل\n١. **تعدد المكونات:**\n   - *عوامل غير حية:* فيزيائية (الضوء، الحرارة، الرياح، الضغط) وكيميائية (الملوحة، الأحماض، مركبات النيتروجين والفوسفات).\n   - *عوامل حية:* كائنات منتجة للغذاء (النباتات الخضراء بالبناء الضوئي)، كائنات مستهلكة (آكلات عشب ولحوم)، وكائنات محللة (بكتيريا وفطريات الرمام تعيد العناصر للتربة).\n٢. **تشابك العلاقات:** تعقد شبكات الغذاء وتعدد مسارات الطاقة يمنح النظام البيئي استقراراً وقوة أمام التغيرات البيئية.\n٣. **الاستقرار مع القابلية للتغير:** النظام البيئي يمتلك قدرة ذاتية على العودة لحالة التوازن بعد الهزات البيئية البسيطة.\n٤. **استخدام الفضلات:** لا توجد فضلات مهدرة في الطبيعة؛ فالأسماك تخرج CO2 تمتصه الطحالب المائية للبناء الضوئي وتطلق الأكسجين اللازم لتنفس الأسماك.",
          formulas: [
          {
                    "labelEn": "Biosphere Vertical Maximum",
                    "labelAr": "أقصى سمك رأسي للغلاف الحيوي",
                    "latex": "H_{\\text{biosphere}} \\le 14 \\text{ km}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 105-130"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Biosphere Concept, Ecology & Ecosystem Dynamics",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "مفهوم البيئة والغلاف الحيوي وخصائص النظام البيئي",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C6-L1",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_6_1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Biosphere Concept, Ecology & Ecosystem Dynamics",
            titleAr: "ورقة عمل تقييمية وزارية: " + "مفهوم البيئة والغلاف الحيوي وخصائص النظام البيئي",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_6_1_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Biosphere Concept, Ecology & Ecosystem Dynamics",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "مفهوم البيئة والغلاف الحيوي وخصائص النظام البيئي",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_6_1_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Biosphere Concept, Ecology & Ecosystem Dynamics",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "مفهوم البيئة والغلاف الحيوي وخصائص النظام البيئي",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_6_1_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Biosphere Concept, Ecology & Ecosystem Dynamics",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "مفهوم البيئة والغلاف الحيوي وخصائص النظام البيئي",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "environmental_ecosystem_energy",
            titleEn: "Interactive Geology & Earth Studio: " + "Biosphere Concept, Ecology & Ecosystem Dynamics",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "مفهوم البيئة والغلاف الحيوي وخصائص النظام البيئي",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch6_l2",
          titleEn: "Marine Ecosystem: Physical Factors, Pressure & Trophic Energy",
          titleAr: "النظام الإيكولوجي البحري: العوامل الطبيعية والضغط وهرم الطاقة",
          summaryEn: "Abiotic marine factors (salinity, light penetration, hydrostatic pressure P = D/10 + 1), photic zones, marine food webs, and the 90% energy dissipation rule across trophic levels.",
          summaryAr: "العوامل غير الحية البحرية (الملوحة، اختراق الضوء، الضغط المائي P = العمق/١٠ + ١)، سلاسل الغذاء البحرية، وهرم الطاقة وقاعدة فقدان ٩٠٪ من الطاقة.",
          theoryContentEn: "### 1. Physical Factors of the Marine Ecosystem\n- Oceans cover > 70% of Earth's surface:\n  - **Light Penetration:** Maximum light in top 200m (photic zone). At 500m depth, total darkness prevails.\n  - **Salinity:** Variable: 40 g/L in the Red Sea and Arabian Gulf (high evaporation, low rain); 20 g/L in Baltic Sea (high river inflow).\n  - **Hydrostatic Pressure:** Pressure increases by 1 atmosphere for every 10 meters of depth:\n    $$P = \\frac{\\text{Depth in meters}}{10} + 1 \\text{ atm (at surface)}$$\n  - *Deep-Sea Adaptations:* Animals in abyssal depths have specialized physiological structures to withstand pressures exceeding hundreds of atmospheres.\n\n### 2. Marine Food Web & Energy Transfer Pyramid\n- **Level 1 (Producers):** Phytoplankton and microscopic algae capturing solar energy (100% baseline energy).\n- **Level 2 (Primary Consumers):** Microscopic zooplankton (crustaceans, protozoa).\n- **Level 3 (Secondary Consumers):** Small fish, squid, and herring.\n- **Level 4 (Tertiary Consumers):** Larger predatory fish (sharks, tuna).\n- **Level 5 (Top Predators):** Whales, dolphins, seals, and humans.\n- **The 10% Energy Transfer Law:** Only **10% of energy transfers** to the next trophic level upward; **90% is dissipated as metabolic heat and waste**. If Level 1 has 10,000 kcal, Level 2 receives 1,000 kcal, Level 3 receives 100 kcal, and Level 4 receives 10 kcal.",
          theoryContentAr: "### ١. العوامل غير الحية في النظام البيئي البحري\n- تشغل البحار والمحيطات أكثر من ٧٠٪ من مساحة الكرة الأرضية:\n  - **نفاذ الضوء:** ينتفذ الضوء جيداً حتى عمق ٢٠٠ م (المنطقة المضيئة)، ويتلاشى حتى ٥٠٠ م حيث يسود ظلام دامس.\n  - **الملوحة:** تبلغ ٤٠ جم/لتر في البحر الأحمر والخليج العربي لارتفاع البخر وقلة الأمطار، وتنخفض لـ ٢٠ جم/لتر في بحر البلطيق لتدفق مياه الأنهار.\n  - **الضغط الهيدروستاتيكي المائي:** يزداد الضغط بمعدل ١ ضغط جوي لكل ١٠ أمتار في العمق:\n    $$\\text{الضغط الجوي} = \\frac{\\text{العمق بالأمتار}}{١٠} + ١ \\text{ ض.ج}$$\n  - *تكيف كائنات الأعماق:* تمتلك أسماك الأعماق أجهزة فسيولوجية خاصة تمنع سحقها تحت ضغوط تفوق مئات الضغوط الجوية.\n\n### ٢. سلاسل الغذاء البحرية وهرم الطاقة\n- **الحلقة الأولى (المنتجون):** الهائمات النباتية والطحالب المجهرية الطافية (تمثل ١٠٠٪ من طاقة الأساس).\n- **الحلقة الثانية (المستهلك الأول):** الهائمات الحيوانية (القشريات الدقيقة والديدان واليرقات).\n- **الحلقة الثالثة (المستهلك الثاني):** الأسماك الصغيرة والقشريات والرخويات.\n- **الحلقة الرابعة (المستهلك الثالث):** الأسماك الكبيرة المفترسة وأسماك القرش.\n- **الحلقة الخامسة (قمة الهرم):** الحيتان والدلافين وسباع البحر والإنسان.\n- **قانون فقدان الطاقة (قاعدة العشر):** ينتقل **عشر الطاقة فقط (١٠٪)** إلى المستوى الغذائي التالي، بينما يُفقد **٩٠٪ من الطاقة** في كل حلقة كحرارة ونشاط حيوي. فإذا بدأت السلسلة بـ ١٠,٠٠٠ سعر، تصل للحلقة الثانية ١,٠٠٠، وللثالثة ١٠٠، وللرابعة ١٠ سعرات فقط.",
          formulas: [
          {
                    "labelEn": "Marine Hydrostatic Pressure Formula",
                    "labelAr": "قانون حساب الضغط الهيدروستاتيكي في البحار",
                    "latex": "P = \\frac{D}{10} + 1 \\quad \\text{[atm, where } D \\text{ is depth in meters]}"
          },
          {
                    "labelEn": "Trophic Energy Transfer Rule",
                    "labelAr": "قاعدة انتقال الطاقة بين المستويات الغذائية",
                    "latex": "E_{n+1} = 0.10 \\times E_n"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 105-130"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Marine Ecosystem: Physical Factors, Pressure & Trophic Energy",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "النظام الإيكولوجي البحري: العوامل الطبيعية والضغط وهرم الطاقة",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C6-L2",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_6_2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Marine Ecosystem: Physical Factors, Pressure & Trophic Energy",
            titleAr: "ورقة عمل تقييمية وزارية: " + "النظام الإيكولوجي البحري: العوامل الطبيعية والضغط وهرم الطاقة",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_6_2_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Marine Ecosystem: Physical Factors, Pressure & Trophic Energy",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "النظام الإيكولوجي البحري: العوامل الطبيعية والضغط وهرم الطاقة",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_6_2_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Marine Ecosystem: Physical Factors, Pressure & Trophic Energy",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "النظام الإيكولوجي البحري: العوامل الطبيعية والضغط وهرم الطاقة",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_6_2_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Marine Ecosystem: Physical Factors, Pressure & Trophic Energy",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "النظام الإيكولوجي البحري: العوامل الطبيعية والضغط وهرم الطاقة",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "environmental_ecosystem_energy",
            titleEn: "Interactive Geology & Earth Studio: " + "Marine Ecosystem: Physical Factors, Pressure & Trophic Energy",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "النظام الإيكولوجي البحري: العوامل الطبيعية والضغط وهرم الطاقة",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch6_l3",
          titleEn: "Desert Ecosystem: Extreme Aridity & Organism Adaptations",
          titleAr: "النظام الإيكولوجي الصحراوي: الجفاف الشديد والتكيف الحيوي",
          summaryEn: "Desert ecosystem covers 1/5 of land area, intense solar radiation, temporary vs permanent plants, animal physiological adaptations (Jerboas, Fennec fox, gazelles).",
          summaryAr: "الصحاري تشغل خمس مساحة اليابسة، قسوة العوامل المناخية، النباتات الحولية المؤقتة والدائمة، وتكيفات الحيوانات الصحراوية (اليرابيع، ثعلب الفنك، غزال الريم).",
          theoryContentEn: "### 1. Characteristics of the Desert Ecosystem\n- Arid deserts cover approximately **one-fifth (20%) of Earth's landmass**.\n- Characterized by extreme solar radiation, intense diurnal temperature fluctuations, severe water scarcity, and violent sandstorms.\n\n### 2. Producer Adaptations (النباتات الصحراوية)\n1. **Ephemeral Temporary Flora (نباتات حولية مؤقتة):** Non-specialized plants appearing only after seasonal rains; complete their life cycle in weeks, leaving drought-resistant seeds in the soil.\n2. **Permanent Perennial Flora (نباتات صحراوية حقيقية دائمية):**\n   - Shrubs, cacti, and acacia with structural adaptations:\n   - Deep taproots reaching aquifers up to 80 meters deep.\n   - Extensive lateral surface roots capturing morning dew droplets.\n   - Leaves reduced to sharp spines with thick waxy cuticles to minimize transpiration.\n\n### 3. Consumer Adaptations (الحيوانات الصحراوية)\n- **Herbivores:** Desert gazelles and **Jerboas (اليرابيع)**:\n  - Extract metabolic water from dry seed carbohydrates; never drink free water.\n  - Excrete highly concentrated urine and dry feces to preserve body fluids.\n  - Highly acute hearing and vision; active exclusively at night or dawn.\n- **Carnivores:** **Fennec Fox (ثعلب الفنك)** and desert snakes:\n  - Feed on jerboas and lizards to obtain fluids from prey blood.\n  - Enlarged ears on fennec fox serve as heat radiators to cool blood vessels in blistering desert climates.",
          theoryContentAr: "### ١. خصائص البيئة الصحراوية القاسية\n- تشغل الصحاري القاحلة حوالي **خمس (٢٠٪) مساحة اليابسة** على الكرة الأرضية.\n- تتميز بشدة الإشعاع الشمسي، والتباين الحراري الشديد بين حرارة النهار وبرودة الليل، والندرة الشديدة في المياه.\n\n### ٢. تكيف الكائنات المنتجة (الغطاء النباتي الصحراوي)\n١. **نباتات حولية مؤقتة:** تظهر عقب سقوط الأمطار في الشتاء وتزدهر وتنتج بذورها ثم تتلاشى سريعاً، وبذورها مقاومة للجفاف وتبقى للعام القادم.\n٢. **نباتات صحراوية حقيقية دائمة (كالصبار والسنط والتين الشوكي):**\n   - جذور رأسية غائرة في الأرض لأعماق تصل إلى ٨٠ متراً لامتصاص المياه الجوفية.\n   - جذور أفقية ممتدة أسفل السطح مباشرة لامتصاص قطرات الندى الصباحية.\n   - أوراق مختزلة على شكل أشواك مغطاة بطبقة كيوتين شمعية سميكة لتقليل فقد الماء بالنتح.\n\n### ٣. تكيف الكائنات المستهلكة (حيوانات الصحراء)\n- **آكلات العشب (كغزال الريم واليربوع):**\n  - تستخلص الماء من البذور الجافة عبر الأكسدة الأيضية ولا تشرب قطرة ماء طوال حياتها.\n  - تركز بولها وتجفف برازها لأقصى درجة لمنع إهدار السوائل.\n  - تنشط ليلاً أو في الصباح الباكر وتختبئ نهاراً في جحور رطبة.\n- **آكلات اللحوم (كثعلب الفنك وذئاب الصحراء والأفاعي):**\n  - تعتمد في سد حاجتها من الماء على امتصاص دماء وسوائل فرائسها من اليرابيع والزواحف.\n  - تمتاز بآذان كبيرة كآذان ثعلب الفنك التي تعمل كمشعاع حراري لتبريد الدم وحاسة سمع فائقة لاصطياد الفرائس في الظلام.",
          formulas: [
          {
                    "labelEn": "Desert Area Proportion",
                    "labelAr": "نسبة مساحة الصحاري من إجمالي مساحة اليابسة",
                    "latex": "\\text{Area}_{\\text{desert}} \\approx \\frac{1}{5} \\times \\text{Area}_{\\text{land}} = 20\\%"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 105-130"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Desert Ecosystem: Extreme Aridity & Organism Adaptations",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "النظام الإيكولوجي الصحراوي: الجفاف الشديد والتكيف الحيوي",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C6-L3",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_6_3_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Desert Ecosystem: Extreme Aridity & Organism Adaptations",
            titleAr: "ورقة عمل تقييمية وزارية: " + "النظام الإيكولوجي الصحراوي: الجفاف الشديد والتكيف الحيوي",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_6_3_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Desert Ecosystem: Extreme Aridity & Organism Adaptations",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "النظام الإيكولوجي الصحراوي: الجفاف الشديد والتكيف الحيوي",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_6_3_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Desert Ecosystem: Extreme Aridity & Organism Adaptations",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "النظام الإيكولوجي الصحراوي: الجفاف الشديد والتكيف الحيوي",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_6_3_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Desert Ecosystem: Extreme Aridity & Organism Adaptations",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "النظام الإيكولوجي الصحراوي: الجفاف الشديد والتكيف الحيوي",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "environmental_ecosystem_energy",
            titleEn: "Interactive Geology & Earth Studio: " + "Desert Ecosystem: Extreme Aridity & Organism Adaptations",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "النظام الإيكولوجي الصحراوي: الجفاف الشديد والتكيف الحيوي",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        }
      ],
      databank: geologyCh6Databank,
      solvedExamples: geologyCh6SolvedExamples,
      exerciseProblems: geologyCh6Exercises
    },
    {
      id: "th_geo_earth_ch7",
      chapterNumber: 7,
      titleEn: "Unit 7: Natural Resource Depletion, Environmental Conservation & Climate",
      titleAr: "الباب السابع: استنزاف الموارد الطبيعية وحمايتها وتغير المناخ",
      descriptionEn: "Renewable vs non-renewable resources, agricultural soil exhaustion, synthetic chemicals, urban encroachment, deforestation, overgrazing, water depletion, mineral and fossil fuel exhaustion, and sustainable clean energy solutions.",
      descriptionAr: "الموارد المتجددة وغير المتجددة، استنزاف التربة الزراعية بالمحصول الواحد، تجريف التربة والزحف العمراني، قطع الأشجار والرعي الجائر، إهدار المياه، نضوب الوقود الحفري، وبدائل الطاقة المستدامة والمحميات.",
      isFullyEquipped: true,
      lessons: [
        {
          id: "th_geo_earth_ch7_l1",
          titleEn: "Agricultural Soil Degradation, Topsoil Scraping & Water Waste",
          titleAr: "استنزاف التربة الزراعية وتجريفها وإهدار الموارد المائية",
          summaryEn: "Monoculture soil exhaustion, synthetic fertilizers vs organic manure, topsoil scraping for red bricks, urban sprawl, and modern drip irrigation vs flood irrigation.",
          summaryAr: "إجهاد التربة الزراعية بزراعة المحصول الواحد، الأسمدة الكيميائية مقابل العضوية، تجريف التربة لصناعة الطوب، الزحف العمراني، والري بالتنقيط مقابل الري بالغمر.",
          theoryContentEn: "### 1. Renewable vs Non-Renewable Resources\n- **Renewable Resources (موارد متجددة):** Naturally replenish via cycles as long as exploitation remains within regenerative capacity (e.g., agricultural soil, plants, water, wildlife).\n- **Non-Renewable Resources (موارد غير متجددة):** Fixed finite deposits formed over geological epochs that permanently deplete with use (e.g., crude oil, natural gas, coal, metallic ores).\n\n### 2. Agricultural Soil Degradation (استنزاف التربة الزراعية)\n1. **Monoculture (تعميم الزراعات وحيدة المحصول):** Sowing the same single crop year after year exhausts specific soil nutrients and reduces biological fertility. *Remedy:* Implement multi-year crop rotations (الدورات الزراعية).\n2. **Synthetic Fertilizers & Pesticides:** Excessive chemical fertilizers destroy soil structure and kill beneficial microorganisms. Pesticides wipe out beneficial predatory insects and earthworms. *Remedy:* Use natural organic manure and biological pest controls.\n3. **Topsoil Scraping for Brick Kilns (تجريف التربة الزراعية):** Scraping topsoil to make red clay bricks destroys thousands of years of Nile alluvial deposition in minutes. *Remedy:* Strict criminalization laws and manufacturing bricks from shale and cement.\n4. **Urban Encroachment (الزحف العمراني):** Sprawling cities consume fertile arable land. *Remedy:* Building new smart cities in desert plains.\n\n### 3. Water Waste & Depletion (إهدار الموارد المائية)\n- Traditional flood irrigation in open earthen canals loses massive volumes to soil seepage and evaporation.\n- *National Conservation Measures:*\n  - Transitioning to micro-drip and automated sprinkler irrigation.\n  - Canal lining (تبطين الترع) to prevent water loss.\n  - Treating agricultural and municipal wastewater for reuse in industrial timber forests.\n  - Rainwater harvesting and seawater desalination.",
          theoryContentAr: "### ١. الموارد المتجددة وغير المتجددة\n- **الموارد المتجددة:** موارد تظل متوافرة في البيئة لقدرتها على الاستمرار والتجدد طبيعياً ما لم يفرط الإنسان في استنزافها (كالماء والتربة والنبات والحيوان).\n- **الموارد غير المتجددة:** موارد مؤقتة محدودة الكمية تختفي من البيئة وتنفد بالاستهلاك الحتمي لأن ما يستهلك منها لا يعوض (كالفحم والبترول والغاز والمعادن).\n\n### ٢. مظاهر استنزاف التربة الزراعية وعلاجها\n١. **تعميم الزراعات وحيدة المحصول:** تكرار زراعة محصول واحد لسنوات ينهك التربة ويستنزف عناصر غذائية محددة. *العلاج:* تطبيق نظام الدورات الزراعية وتنويع المحاصيل وتناوبها مع البقوليات.\n٢. **الإفراط في الأسمدة الكيميائية والمبيدات:** الأسمدة المصنعة تفقد التربة خصوبتها الطبيعية وتطرد ديدان الأرض النافعة، والمبيدات تقضي على الحشرات المفترسة النافعة مسببة تحول الآفات الثانوية لآفات رئيسية خطيرة. *العلاج:* الاعتماد على السماد العضوي والمكافحة البيولوجية.\n٣. **تجريف التربة الزراعية لصناعة الطوب الأحمر:** إزالة الطبقة السطحية الخصبة لطمي النيل لصناعة الطوب يدمر مساحات زراعية شاسعة تكونت عبر آلاف السنين. *العلاج:* تجريم التجريف بالقانون، وصناعة الطوب البديل من الطفلة والأسمنت والرمال.\n٤. **الزحف العمراني:** البناء على الأراضي الزراعية الخصبة لتعويض النمو السكاني يلتهم الرقعة الخضراء. *العلاج:* توجيه التوسع العمراني للمدن الجديدة بالظهير الصحراوي.\n\n### ٣. إهدار الموارد المائية وترشيدها\n- إهدار المياه بالري بالغمر التقليدي والاستخدام المنزلي غير الرشيد يفاقم الفقر المائي.\n- *إجراءات الدولة لحماية الموارد المائية:*\n  - التحول لمنظومات الري الحديث بالرش والتنقيط لتوفير المياه وزيادة الإنتاجية.\n  - المشروع القومي لتبطين وتطهير الترع والمجاري المائية لمنع التسرب والبخر.\n  - معالجة مياه الصرف الصحي والزراعي (كمحطة بحر البقر ومحطة الدلتا الجديدة) لإعادة استخدامها في زراعة الغابات الشجرية ومحاصيل الاستصلاح.\n  - التوسع في تحلية مياه البحر بالمحافظات الساحلية وتجميع مياه السيول والأمطار.",
          formulas: [
          {
                    "labelEn": "Water Conservation Efficiency Ratio",
                    "labelAr": "معادلة كفاءة الري بالتنقيط مقارنة بالغمر",
                    "latex": "\\text{Efficiency}_{\\text{drip}} \\approx 85\\% \\text{ to } 95\\% \\quad \\text{vs} \\quad \\text{Efficiency}_{\\text{flood}} \\approx 40\\% \\text{ to } 50\\%"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 125-150"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Agricultural Soil Degradation, Topsoil Scraping & Water Waste",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "استنزاف التربة الزراعية وتجريفها وإهدار الموارد المائية",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C7-L1",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_7_1_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Agricultural Soil Degradation, Topsoil Scraping & Water Waste",
            titleAr: "ورقة عمل تقييمية وزارية: " + "استنزاف التربة الزراعية وتجريفها وإهدار الموارد المائية",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_7_1_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Agricultural Soil Degradation, Topsoil Scraping & Water Waste",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "استنزاف التربة الزراعية وتجريفها وإهدار الموارد المائية",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_7_1_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Agricultural Soil Degradation, Topsoil Scraping & Water Waste",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "استنزاف التربة الزراعية وتجريفها وإهدار الموارد المائية",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_7_1_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Agricultural Soil Degradation, Topsoil Scraping & Water Waste",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "استنزاف التربة الزراعية وتجريفها وإهدار الموارد المائية",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "environmental_ecosystem_energy",
            titleEn: "Interactive Geology & Earth Studio: " + "Agricultural Soil Degradation, Topsoil Scraping & Water Waste",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "استنزاف التربة الزراعية وتجريفها وإهدار الموارد المائية",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch7_l2",
          titleEn: "Deforestation, Overgrazing & Wildlife Depletion",
          titleAr: "القطع الجائر للأشجار والرعي الجائر وتدهور الحياة البرية",
          summaryEn: "Ecological impacts of deforestation (carbon sink collapse, soil erosion), overgrazing in steppes vs carrying capacity, poaching, and the role of natural protected reserves.",
          summaryAr: "الآثار الكارثية لقطع الأشجار (تفاقم الاحتباس الحراري، تعرية التربة)، الرعي الجائر وتدهور الغطاء النباتي، الصيد الجائر، ودور المحميات الطبيعية في حماية التنوع الحيوي.",
          theoryContentEn: "### 1. Deforestation (القطع الجائر للأشجار)\n- Trees are natural carbon sinks and windbreaks:\n  - *Catastrophic Impacts:* Releases billions of tons of stored $CO_2$ back into the atmosphere; accelerates global warming; causes flash floods and severe topsoil erosion; drives millions of forest species into extinction.\n  - *Remedy:* Strict moratoriums on tropical logging, establishment of protected reserves, and industrial tree planting.\n\n### 2. Overgrazing (الرعي الجائر)\n- Occurs when the consumption rate of vegetation by livestock exceeds the natural regeneration capacity of the pasture:\n  - *Ecosystem Impacts:* Destroys palatable nutritious plants, allowing unpalatable bitter weeds to take over; leads to severe desertification (تصحر) as seen in the Mediterranean coastal strip and Arab Badia.\n  - *Regulated Grazing:* Sustainable grazing where animal consumption is equal to or less than pasture regeneration, preserving ecosystem fertility.\n  - *Remedy:* Developing animal feed from agricultural byproducts and managing rangeland capacities.\n\n### 3. Overfishing & Wildlife Depletion (الصيد الجائر)\n- Unchecked hunting destroys biodiversity and causes species extinction:\n  - *Marine Overfishing:* Modern trawlers with acoustic sonar scoop juvenile fish before maturity.\n  - *Remedy:* Enforcing fishing bans during breeding seasons, regulating net mesh sizes, and establishing **Protected Nature Reserves (محميات طبيعية)** like Ras Mohammed in Egypt.",
          theoryContentAr: "### ١. القطع الجائر لأشجار الغابات\n- تمثل الغابات مصداً طبيعياً للرياح ومصرفاً عملاقاً لامتصاص غاز ثاني أكسيد الكربون وإنتاج الأكسجين:\n  - *الآثار الكارثية:* زيادة نسبة CO2 في الجو وتفاقم ظاهرة الاحتباس الحراري؛ تعرض المناطق المحيطة للرياح والأعاصير؛ جفاف التربة وتعريتها؛ وتشريد ملايين الكائنات وانقراض التنوع الحيوي للغابات.\n  - *العلاج:* حظر قطع الأشجار وسن تشريعات صارمة، والتوسع في زراعة غابات شجرية صناعية باستخدام مياه الصرف المعالجة.\n\n### ٢. الرعي الجائر (Overgrazing)\n- يحدث عندما يكون معدل استهلاك الأعشاب بواسطة الحيوانات أكبر بكثير من معدل نمو الحشائش الطبيعية:\n  - *الآثار المدمرة:* تدهور النباتات الدائمة المغذية وسيادة نباتات شوكية غير مستساغة؛ جفاف التربة وتعرية الأرض وتدهور المراعي الطبيعية وتحولها لأراض قاحلة (ظاهرة التصحر) كما حدث بالساحل الشمالي وبادية الشام.\n  - *الرعي المنظم:* رعي متزن يكون فيه معدل استهلاك الحيوانات أقل من أو مساوياً لمعدل نمو الأعشاب مما يحافظ على التوازن النباتي.\n  - *العلاج:* استزراع نباتات علفية جديدة، وتحويل المخلفات الزراعية إلى أعلاف صناعية لتخفيف الضغط على المراعي.\n\n### ٣. الصيد الجائر للأسماك والحيوانات البرية\n- الصيد العشوائي يدمر التوازن البيولوجي ويقود الكائنات النادرة للانقراض:\n  - شباك الصيد الضيقة وجرف القاع تدمر زريعة الأسماك والشعاب المرجانية النادرة.\n  - *العلاج:* سن قوانين تجرم صيد الكائنات المهددة بالانقراض، حظر الصيد في مواسم التكاثر، وإنشاء **المحميات الطبيعية** (كمحمية رأس محمد بجنوب سيناء ومحمية الزرانيق والعلبة ووادي الريان بمصر).",
          formulas: [
          {
                    "labelEn": "Grazing Sustainability Equilibrium",
                    "labelAr": "شرط التوازن البيئي للرعي المنظم",
                    "latex": "\\text{Rate}_{\\text{consumption}} \\le \\text{Rate}_{\\text{regeneration}}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 125-150"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Deforestation, Overgrazing & Wildlife Depletion",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "القطع الجائر للأشجار والرعي الجائر وتدهور الحياة البرية",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C7-L2",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_7_2_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Deforestation, Overgrazing & Wildlife Depletion",
            titleAr: "ورقة عمل تقييمية وزارية: " + "القطع الجائر للأشجار والرعي الجائر وتدهور الحياة البرية",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_7_2_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Deforestation, Overgrazing & Wildlife Depletion",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "القطع الجائر للأشجار والرعي الجائر وتدهور الحياة البرية",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_7_2_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Deforestation, Overgrazing & Wildlife Depletion",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "القطع الجائر للأشجار والرعي الجائر وتدهور الحياة البرية",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_7_2_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Deforestation, Overgrazing & Wildlife Depletion",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "القطع الجائر للأشجار والرعي الجائر وتدهور الحياة البرية",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "environmental_ecosystem_energy",
            titleEn: "Interactive Geology & Earth Studio: " + "Deforestation, Overgrazing & Wildlife Depletion",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "القطع الجائر للأشجار والرعي الجائر وتدهور الحياة البرية",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        },
        {
          id: "th_geo_earth_ch7_l3",
          titleEn: "Mineral & Fossil Fuel Depletion & Clean Energy Alternatives",
          titleAr: "استنزاف المعادن والوقود الحفري وبدائل الطاقة المستدامة",
          summaryEn: "Depletion rates of metals and fossil fuels (oil, gas), industrial recycling, alternative materials (plastics, ceramics), renewable energy (solar, wind, nuclear), and climate solutions.",
          summaryAr: "معدلات استنزاف المعادن والوقود الحفري (البترول والغاز)، إعادة تدوير الخردة والمعادن، بدائل اللدائن، وحلول الطاقة النظيفة (الشمس والرياح ومحطة الضبعة النووية).",
          theoryContentEn: "### 1. Depletion of Mineral Resources (استنزاف المعادن)\n- Global mineral consumption is skyrocketing at triple the population growth rate due to global industrialization:\n  - *Remedies for Mineral Depletion:*\n    1. **Metal Scrap Recycling (إعادة تدوير الخردة):** Remelting scrap iron, aluminum, and copper to conserve raw ores and save energy.\n    2. **Industrial Alternatives:** Replacing metals with engineered plastics, ceramics, and glass pipes in automotive and construction sectors.\n    3. **Feldspar Pottery:** Using abundant feldspar to manufacture household pottery and cooking utensils instead of scarce metals.\n\n### 2. Depletion of Fossil Fuels (استنزاف الوقود الحفري)\n- Petroleum and natural gas form over millions of years and cannot be replenished once consumed:\n  - Global oil consumption doubles every decade.\n  - *Petrochemicals Advantage:* Petrochemical synthesis (fibers, dyes, polymers, pharmaceuticals) generates far greater economic value and causes less pollution than direct fuel combustion.\n\n### 3. Sustainable Clean Energy Solutions (بدائل الطاقة المستدامة)\n1. **Solar Energy (الطاقة الشمسية):** Inexhaustible clean energy ideal for sun-belt nations like Egypt (e.g., Benban Solar Park in Aswan).\n2. **Wind Energy (طاقة الرياح):** Harnessing wind kinetic power (e.g., Zafarana and Gulf of Suez wind farms).\n3. **Peaceful Nuclear Energy (الطاقة النووية السلمية):** Clean, high-density baseload power with zero greenhouse emissions (e.g., Egypt's El-Dabaa Nuclear Power Plant).\n4. **Biogas & Biofuels (البيوجاز):** Generating methane gas from animal and agricultural organic waste decomposition.\n5. **Hydrogen Fuel Cells:** Utilizing green hydrogen generated via clean electrolysis for carbon-free transportation.",
          theoryContentAr: "### ١. استنزاف الخامات المعدنية\n- يتزايد الاستهلاك العالمي للمعادن بسرعة هائلة تفوق ثلاثة أمثال معدل النمو السكاني بسبب التقدم التكنولوجي والصناعي:\n  - *علاج استنزاف المعادن:*\n    ١. **إعادة تدوير الخردة (Recycling):** صهر وإعادة تصنيع خردة الحديد والألومنيوم والسيارات القديمة لتوفير الخامات والطاقة.\n    ٢. **استخدام بدائل صناعية:** استبدال المعادن باللدائن (البلاستيك) والفيبرجلاس والخزف في صناعة المواسير والسيارات.\n    ٣. **صناعة الفخار من الفلسبار:** استخدام خام الفلسبار الوفير في صناعة أواني الطهي الفخارية بدلاً من الأواني المعدنية.\n\n### ٢. استنزاف الوقود الحفري (البترول والغاز الطبيعي)\n- مواد هيدروكربونية استغرقت ملايين السنين لتتكون وتتضاعف معدلات استهلاكها كل ١٠ سنوات لنضوبها الحتمي:\n  - *الصناعات البتروكيميائية:* استخدام مشتقات النفط في صناعة البتروكيماويات (الألياف الصناعية، الأدوية، الأسمدة، اللدائن) يوفر عائداً اقتصادياً مضاعفاً ويقلل التلوث مقارنة بحرقه كوقود للطاقة.\n\n### ٣. حلول الطاقة البديلة المستدامة\n١. **الطاقة الشمسية:** طاقة نظيفة دائمة لا تنضب، وتعد مصر من أغنى دول العالم شمسياً (مثل مجمع بنبان للطاقة الشمسية بأسوان).\n٢. **طاقة الرياح:** توليد الكهرباء النظيفة من مزارع الرياح بالمناطق الساحلية (كمحطات الزعفرانة وجبل الزيت بخليج السويس).\n٣. **الطاقة النووية السلمية:** توليد كميات هائلة من الكهرباء النظيفة دون انبعاثات كربونية (كمشروع محطة الضبعة النووية السلمية بمصر).\n٤. **غاز الميثان الحيوي (البيوجاز):** استخراج غاز الوقود الحيوي من تخمير المخلفات الحيوانية والزراعية.\n٥. **الهيدروجين الأخضر:** التوسع في إنتاج الهيدروجين النظيف بالتحليل الكهربائي للماء باستخدام الطاقة المتجددة كوقود للمستقبل.",
          formulas: [
          {
                    "labelEn": "Mineral Consumption Growth Rate",
                    "labelAr": "معدل زيادة استهلاك المعادن مقارنة بالسكان",
                    "latex": "\\Delta_{\\text{mineral consumption}} = 3 \\times \\Delta_{\\text{population}}"
          }
],
          moeRef: {
            bookTitleEn: "Geology and Environmental Sciences for Secondary Stage",
            bookTitleAr: "الجيولوجيا والعلوم البيئية للصف الثالث الثانوي",
            grade: "Third Year Secondary (Grade 12)",
            term: "Full Academic Year",
            officialCode: "MOE-GEO-G12-2025",
            pageRange: "pp. 125-150"
          },
          lessonPlan: {
            titleEn: "Teacher Instructional Plan: " + "Mineral & Fossil Fuel Depletion & Clean Energy Alternatives",
            titleAr: "خطة التدريس الوزارية المعتمدة: " + "استنزاف المعادن والوقود الحفري وبدائل الطاقة المستدامة",
            gradeLevel: "Grade 12 / 3rd Secondary (Natural Sciences Division)",
            durationMinutes: 45,
            moeCode: "LP-GEO-G12-C7-L3",
            bloomsObjectivesEn: [
              "Remember foundational definitions and geological nomenclature",
              "Understand thermodynamic and environmental equilibrium mechanisms",
              "Apply diagnostic tests (Mohs hardness, fault slip, pressure formulas)",
              "Analyze cross-sections and stratigraphic unconformities",
              "Evaluate resource sustainability and conservation scenarios"
            ],
            bloomsObjectivesAr: [
              "تذكر المفاهيم والمصطلحات الجيولوجية والبيئية التأسيسية",
              "فهم آليات التوازن الإيزوستاتيكي والبيئي ودورة الصخور",
              "تطبيق الفحوصات التشخيصية (مقياس موهس، زوايا الفوالق، قوانين الضغط)",
              "تحليل القطاعات الجيولوجية وأسطح عدم التوافق وتاريخ الطبقات",
              "تقييم استدامة الموارد وحلول الطاقة النظيفة والتوازن البيئي"
            ],
            prerequisitesEn: ["Basic chemistry of elements", "Physical states of matter", "Atmospheric pressure principles"],
            prerequisitesAr: ["أساسيات التركيب الكيميائي للعناصر", "حالات المادة الفيزيائية", "مبادئ الضغط الجوي وعلوم الأرض"],
            keyVocabularyEn: [
              { term: "Asthenosphere", definition: "Ductile upper mantle layer enabling continental plate drift" },
              { term: "Mohs Hardness", definition: "Relative scratch resistance scale from 1 (Talc) to 10 (Diamond)" },
              { term: "Isostasy", definition: "Dynamic equilibrium between Earth's mountains and their subterranean roots" }
            ],
            keyVocabularyAr: [
              { term: "الأسينوسفير", definition: "الوشاح العلوي اللدن شبه المنصهر المسؤول عن حركة القارات" },
              { term: "مقياس موهس", definition: "مقياس نسبي لصلادة المعادن يبدأ بالتلك (١) وينتهي بالماس (١٠)" },
              { term: "التوازن الإيزوستاتيكي", definition: "الاتزان الهيدروستاتيكي بين سلاسل الجبال وجذورها الغائرة بالوشاح" }
            ],
            teachingPacing: [
              {
                phaseEn: "Warmup & Hook",
                phaseAr: "التهيئة وجذب الانتباه",
                duration: "7 min",
                activitiesEn: "Teacher introduces real-world geological phenomena and inquiry questions.",
                activitiesAr: "يقوم المعلم بعرض ظاهرة جيولوجية واقعية وتوجيه أسئلة استكشافية."
              },
              {
                phaseEn: "Interactive Theoretical Modeling",
                phaseAr: "الشرح النظري ونمذجة المفاهيم",
                duration: "18 min",
                activitiesEn: "Interactive visual modeling and step-by-step conceptual deconstruction.",
                activitiesAr: "نمذجة بصرية تفاعلية وتفكيك المفاهيم العلمية بأسلوب منهجي متدرج."
              },
              {
                phaseEn: "Guided Problem Solving",
                phaseAr: "التدريب الموجه على المسائل",
                duration: "12 min",
                activitiesEn: "Guided exercises analyzing stratigraphic sections, crystal systems, or ecological pyramids.",
                activitiesAr: "تطبيقات موجهة على تحليل القطاعات والبلورات وتوازن النظم البيئية."
              },
              {
                phaseEn: "Formative Assessment & Debrief",
                phaseAr: "التقييم الختامي والغلق",
                duration: "8 min",
                activitiesEn: "Diagnostic exit assessment and conceptual summary with ministerial exam tips.",
                activitiesAr: "تقييم تكويني ختامي وتلخيص المفاهيم الأساسية مع إرشادات الامتحانات الوزارية."
              }
            ],
            commonMisconceptionsEn: [
              "Confusing the hanging wall with the footwall by looking at geographic left/right instead of the inclined fault plane.",
              "Assuming that mineral cleavage and fracture are identical physical properties."
            ],
            commonMisconceptionsAr: [
              "الخلط الشائع بين صخور الحائط العلوي والحائط السفلي بالاعتماد على الاتجاه الأفقي بدلاً من ميل مستوى الفالق.",
              "الاعتقاد الخاطئ بأن انفصام المعدن هو نفسه مكسره رغم اختلاف البناء البلوري ومستويات الضعف."
            ],
            differentiationEn: {
              struggling: "Provide tactile 3D fault blocks, crystal axis models, and guided diagnostic flowcharts.",
              advanced: "Challenge students with complex polyphase tectonic cross-sections and Bowen reaction thermodynamic calculations."
            },
            differentiationAr: {
              struggling: "استخدام مجسمات ثلاثية الأبعاد للكتل الفالقة والأنظمة البلورية وخرائط مفاهيم متدرجة.",
              advanced: "تكليف الطلاب بتحليل قطاعات جيولوجية مركبة متعاقبة وحساب التدرج الحراري لتبلور الصهارة."
            },
            formativeAssessmentEn: "Diagnostic 4-option ministerial MCQ bubble sheet testing stratigraphic interpretation and geological principles.",
            formativeAssessmentAr: "تقييم مرحلي تفاعلي من 4 أسئلة اختيار من متعدد على النمط الوزاري يقيس مهارات تفسير القطاعات واستنتاج التاريخ الجيولوجي.",
            exitTicketQuestion: {
              questionEn: "What is the decisive criterion that distinguishes an angular unconformity from a disconformity in sedimentary sequences?",
              questionAr: "ما هو المعيار التشخيصي الفاصل بين عدم التوافق الزاوي وعدم التوافق الانقطاعي في التتابعات الرسوبية؟",
              solutionEn: "An angular unconformity features tilted or folded older strata beneath horizontal younger beds, whereas a disconformity occurs between two parallel sedimentary sequences separated by an erosional gap evidenced by index fossils.",
              solutionAr: "عدم التوافق الزاوي يتميز باختلاف ميل الطبقات (طبقات مائلة أو مطوية أسفل طبقات أفقية)، بينما الانقطاعي يفصل بين مجموعتين متوازيتين تماماً ويُستدل عليه بغياب حفري أو سطح تعرية مميز."
            }
          },
          worksheet: {
            id: "th_geo_earth_ws_7_3_ws",
            titleEn: "Ministry Standard Assessment Worksheet: " + "Mineral & Fossil Fuel Depletion & Clean Energy Alternatives",
            titleAr: "ورقة عمل تقييمية وزارية: " + "استنزاف المعادن والوقود الحفري وبدائل الطاقة المستدامة",
            descriptionEn: "Structured ministerial practice worksheet covering key objectives.",
            descriptionAr: "ورقة عمل تدريبية معتمدة تغطي نواتج التعلم الوزارية.",
            estimatedTimeMinutes: 25,
            problems: [
              {
                id: "th_geo_earth_ws_7_3_q1",
                titleEn: "Diagnostic Problem 1",
                titleAr: "مسألة تشخيصية 1",
                difficulty: "medium",
                questionEn: "Formulate the primary diagnostic distinction governing: " + "Mineral & Fossil Fuel Depletion & Clean Energy Alternatives",
                questionAr: "حدد المبدأ التشخيصي الحاكم للمفهوم الجيولوجي التالي: " + "استنزاف المعادن والوقود الحفري وبدائل الطاقة المستدامة",
                correctAnswer: "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                optionsEn: [
                  "Empirically validated scientific outcome complying with Egyptian MoE examination standards.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Empirically validated scientific outcome complying with Egyptian MoE examination standards."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "النتيجة العلمية المؤكدة المتوافقة مع معايير الامتحانات القومية لوزارة التربية والتعليم."
                ]
              },
              {
                id: "th_geo_earth_ws_7_3_q2",
                titleEn: "Diagnostic Problem 2",
                titleAr: "مسألة تشخيصية 2",
                difficulty: "medium",
                questionEn: "How does structural orientation determine the outcome in: " + "Mineral & Fossil Fuel Depletion & Clean Energy Alternatives",
                questionAr: "كيف يؤثر التوجيه التركيبي في تحديد النتيجة الجيولوجية لـ: " + "استنزاف المعادن والوقود الحفري وبدائل الطاقة المستدامة",
                correctAnswer: "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                optionsEn: [
                  "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Tectonic stress orientation dictates whether normal tensile or reverse compressional structures develop."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "اتجاه القوى التكتونية يحدد ما إذا كانت التراكيب الناتجة فوالق شد عادية أم فوالق ضغط معكوسة وطيات."
                ]
              },
              {
                id: "th_geo_earth_ws_7_3_q3",
                titleEn: "Diagnostic Problem 3",
                titleAr: "مسألة تشخيصية 3",
                difficulty: "medium",
                questionEn: "Calculate the physical parameter or equilibrium state associated with: " + "Mineral & Fossil Fuel Depletion & Clean Energy Alternatives",
                questionAr: "احسب المتغير الفيزيائي أو حالة الاتزان المرتبطة بـ: " + "استنزاف المعادن والوقود الحفري وبدائل الطاقة المستدامة",
                correctAnswer: "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                optionsEn: [
                  "Apply governing formula rigorously as defined in ministerial textbook reference tables.",
                  "Alternative theoretical hypothesis not supported by empirical stratigraphy",
                  "Secondary tectonic factor with minor regional influence",
                  "Transient surface condition with negligible lithological preservation"
                ],
                optionsAr: [
                  "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد.",
                  "فرضية نظرية بديلة غير مدعومة بالدراسات الطباقية والحقلية",
                  "عامل تكتوني ثانوي ذو تأثير إقليمي محدود",
                  "ظاهرة سطحية مؤقتة ذات تأثير جيولوجي غير محفوظ بالصخور"
                ],
                correctIndex: 0,
                hintEn: "Review the fundamental diagnostic criteria and verified MoE principles.",
                hintAr: "راجع المعايير التشخيصية والقواعد العلمية المعتمدة في منهج الوزارة.",
                stepByStepSolutionEn: [
                  "1. Identify the core geological principle.",
                  "2. Relate it to the verified MoE scientific specification.",
                  "3. Conclude the verified result: " + "Apply governing formula rigorously as defined in ministerial textbook reference tables."
                ],
                stepByStepSolutionAr: [
                  "١. تحديد المبدأ والظاهرة الجيولوجية الحاكمة.",
                  "٢. ربط المعطيات بالقواعد العلمية الواردة بالمنهج الوزاري.",
                  "٣. استنتاج النتيجة المؤكدة: " + "تطبيق القوانين الجيولوجية والبيئية بدقة كما وردت في جداول كتاب الوزارة المعتمد."
                ]
              }
            ]
          },
          interactiveWidget: {
            type: "environmental_ecosystem_energy",
            titleEn: "Interactive Geology & Earth Studio: " + "Mineral & Fossil Fuel Depletion & Clean Energy Alternatives",
            titleAr: "استوديو علوم الأرض التفاعلي: " + "استنزاف المعادن والوقود الحفري وبدائل الطاقة المستدامة",
            descriptionEn: "Interactive simulation for testing mineral crystals, rock suites, plate tectonic boundaries, or ecological trophic pyramids.",
            descriptionAr: "محاكاة تفاعلية لاختبار بلورات المعادن، متسلسلة الصخور، حواف الألواح التكتونية، أو أهرامات الطاقة البيئية."
          }
        }
      ],
      databank: geologyCh7Databank,
      solvedExamples: geologyCh7SolvedExamples,
      exerciseProblems: geologyCh7Exercises
    }
  ]
};
