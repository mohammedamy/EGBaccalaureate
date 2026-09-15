import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacPhysCh5Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_phys_ch5_db_easy_01",
    "titleEn": "Wien Displacement Law Definition",
    "titleAr": "مفهوم قانون فين لإشعاع الجسم الأسود",
    "difficulty": "easy",
    "questionEn": "According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) is:",
    "questionAr": "وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Independent of the temperature of the emitting body"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم المشع"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{const}$.",
    "hintAr": "العلاقة: $\\lambda_{\\max} \\cdot T = \\text{ثابت}$.",
    "stepByStepSolutionEn": [
      "Wien's law states that $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation peaks at shorter wavelengths."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. بزيادة درجة الحرارة تزاح قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Sun radiates at $\\sim 6000\\text{ K}$ (peak in visible green), Earth at $\\sim 300\\text{ K}$ (peak in infrared).",
    "teacherTipAr": "قمة إشعاع الشمس عند 6000 كلفن في الضوء المرئي، وقمة إشعاع الأرض عند 300 كلفن في الأشعة تحت الحمراء."
  },
  {
    "id": "egbac_phys_ch5_db_easy_02",
    "titleEn": "Planck Quantum Concept of Radiation",
    "titleAr": "فرض بلانك لتكميم الطاقة الإشعاعية",
    "difficulty": "easy",
    "questionEn": "Max Planck explained blackbody radiation by assuming that electromagnetic radiation consists of discreet energy packets called:",
    "questionAr": "فسر ماكس بلانك إشعاع الجسم الأسود بافتراض أن الإشعاع يتألف من كمات منفصلة تسمى:",
    "optionsEn": [
      "Continuous waves of infinite energy amplitude",
      "Photons (quanta), each of energy $E = h\\nu$",
      "Static electric charges distributed uniformly across the surface",
      "High-speed neutrons emitted from unstable atomic nuclei"
    ],
    "optionsAr": [
      "موجات متصلة ذات سعة طاقة لانهائية",
      "فوتونات (كمات)، طاقة كل منها $E = h\\nu$",
      "شحنات كهربية ساكنة موزعة بانتظام على السطح",
      "نيوترونات سريعة منبعثة من أنوية الذرات غير المستقرة"
    ],
    "correctAnswer": "Photons (quanta), each of energy $E = h\\nu$",
    "correctIndex": 1,
    "hintEn": "$E = h\\nu = \\frac{hc}{\\lambda}$.",
    "hintAr": "طاقة الفوتون: $E = h\\nu$.",
    "stepByStepSolutionEn": [
      "Radiation is emitted and absorbed as discrete packets (photons) of energy proportional to frequency."
    ],
    "stepByStepSolutionAr": [
      "الإشعاع ينبعث ويمتص على شكل كمات منفصلة من الطاقة تسمى فوتونات، وتتناسب طاقة الفوتون طردياً مع تردده."
    ],
    "teacherTipEn": "Planck constant $h \\approx 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$.",
    "teacherTipAr": "ثابت بلانك $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_03",
    "titleEn": "Classical Physics Failure in Blackbody Radiation",
    "titleAr": "فشل الفيزياء الكلاسيكية في تفسير إشعاع الجسم الأسود",
    "difficulty": "easy",
    "questionEn": "Classical physics (Rayleigh-Jeans law) failed in explaining blackbody radiation because it predicted that intensity:",
    "questionAr": "فشلت الفيزياء الكلاسيكية (قانون رايلي-جينز) في تفسير إشعاع الجسم الأسود لأنها توقعت أن شدة الإشعاع:",
    "optionsEn": [
      "Decreases to zero at very high frequencies",
      "Depends strictly on the mass of the blackbody container",
      "Increases continuously toward infinity at very short wavelengths (ultraviolet catastrophe)",
      "Remains constant across all wavelengths regardless of temperature"
    ],
    "optionsAr": [
      "تنعدم تماماً عند الترددات العالية جداً",
      "تعتمد فقط على كتلة الوعاء الحاوي للجسم الأسود",
      "تزداد باستمرار نحو اللانهاية كلما قل الطول الموجي (كارثة الأشعة فوق البنفسجية)",
      "تظل ثابتة لجميع الأطوال الموجية بغض النظر عن درجة الحرارة"
    ],
    "correctAnswer": "Increases continuously toward infinity at very short wavelengths (ultraviolet catastrophe)",
    "correctIndex": 2,
    "hintEn": "Classical theory treated radiation as continuous waves rather than quantized photons.",
    "hintAr": "الفيزياء الكلاسيكية اعتبرت الإشعاع موجات متصلة تزداد شدتها بزيادة التردد.",
    "stepByStepSolutionEn": [
      "Classical wave theory assumed continuous emission, leading to infinite energy at $\\lambda \\to 0$. Planck showed intensity drops to zero at high frequencies."
    ],
    "stepByStepSolutionAr": [
      "توقعت الكلاسيكية زيادة مستمرة في الشدة بنقصان الطول الموجي، بينما أثبت بلانك أن شدة الإشعاع تقترب من الصفر عند الترددات العالية جداً."
    ],
    "teacherTipEn": "At high frequencies, the energy per quantum ($h\\nu$) is so large that fewer oscillators can be excited.",
    "teacherTipAr": "عند الترددات العالية تكون طاقة الكم الواحد $h\\nu$ كبيرة جداً فيقل عدد الفوتونات المنبعثة وتقترب الشدة من الصفر."
  },
  {
    "id": "egbac_phys_ch5_db_easy_04",
    "titleEn": "Nature of an Ideal Blackbody",
    "titleAr": "مفهوم الجسم الأسود المثالي",
    "difficulty": "easy",
    "questionEn": "An ideal blackbody in modern physics is best defined as an object that:",
    "questionAr": "يُعرف الجسم الأسود المثالي في الفيزياء الحديثة بأنه جسم:",
    "optionsEn": [
      "Reflects all visible light without absorbing any thermal energy",
      "Emits only monochromatic red radiation regardless of temperature",
      "Transmits electromagnetic waves without any absorption or reflection",
      "Absorbs all incident radiation of all wavelengths and re-emits it completely"
    ],
    "optionsAr": [
      "يعكس جميع أطياف الضوء المرئي دون امتصاص أي طاقة حرارية",
      "يشع فقط ضوءاً أحادي اللون أحمر بغض النظر عن درجة حرارته",
      "ينفذ الموجات الكهرومغناطيسية بالكامل دون امتصاص أو انعكاس",
      "يمتص جميع الإشعاعات الساقطة عليه بجميع أطوالها الموجية ثم يعيد إشعاعها كاملة"
    ],
    "correctAnswer": "Absorbs all incident radiation of all wavelengths and re-emits it completely",
    "correctIndex": 3,
    "hintEn": "A hollow cavity with a tiny aperture acts as a near-perfect blackbody.",
    "hintAr": "الفجوة المجوفة ذات الثقب الضيق تمثل جسماً أسود مثالياً.",
    "stepByStepSolutionEn": [
      "An ideal blackbody is a perfect absorber (absorptivity = 1) and a perfect emitter."
    ],
    "stepByStepSolutionAr": [
      "الجسم الأسود ممتص مثالي (يمتص كل الإشعاع الساقط) وباعث مثالي عند رفع درجة حرارته."
    ],
    "teacherTipEn": "A small pinhole in a closed hollow cavity traps light by repeated internal reflections.",
    "teacherTipAr": "يمثل الثقب الصغير في تجويف مغلق نموذجاً عملياً للجسم الأسود لاحتجاز الضوء بالانعكاسات المتكررة."
  },
  {
    "id": "egbac_phys_ch5_db_easy_05",
    "titleEn": "Solar Radiation Spectrum Distribution",
    "titleAr": "توزيع طيف الإشعاع الشمسي",
    "difficulty": "easy",
    "questionEn": "The solar radiation reaching outer space consists approximately of:",
    "questionAr": "يتكون طيف الإشعاع الشمسي تقريباً من النسب التالية:",
    "optionsEn": [
      "$50\\%$ thermal infrared, $40\\%$ visible light, and $10\\%$ ultraviolet radiation",
      "$90\\%$ visible light and $10\\%$ gamma rays",
      "$100\\%$ visible light across all solar coordinates",
      "$80\\%$ ultraviolet and $20\\%$ radio waves"
    ],
    "optionsAr": [
      "$50\\%$ أشعة حرارية تحت حمراء، $40\\%$ ضوء مرئي، و $10\\%$ أشعة فوق بنفسجية",
      "$90\\%$ ضوء مرئي و $10\\%$ أشعة جاما",
      "$100\\%$ ضوء مرئي على مدار كامل إحداثيات الشمس",
      "$80\\%$ أشعة فوق بنفسجية و $20\\%$ موجات راديوية"
    ],
    "correctAnswer": "$50\\%$ thermal infrared, $40\\%$ visible light, and $10\\%$ ultraviolet radiation",
    "correctIndex": 0,
    "hintEn": "Recall the standard division of the solar spectrum: 50% IR, 40% visible, 10% UV.",
    "hintAr": "توزيع طيف الشمس الوزاري: 50% حراري، 40% مرئي، 10% فوق بنفسجي وباقي الأطياف.",
    "stepByStepSolutionEn": [
      "Because $T_{\\text{sun}} \\approx 6000\\text{ K}$, the peak lies in the visible spectrum with substantial IR and UV contributions."
    ],
    "stepByStepSolutionAr": [
      "لأن درجة حرارة سطح الشمس نحو 6000 كلفن، تقع قمة الإشعاع في الضوء المرئي وتتوزع باقي الطاقة بين تحت الحمراء والفوق بنفسجية."
    ],
    "teacherTipEn": "Contrast with an incandescent lamp ($3000\\text{ K}$), which emits $80\\%$ infrared and only $20\\%$ visible light.",
    "teacherTipAr": "قارن ذلك بالمصباح التنجستني (3000 كلفن) الذي يشع 80% تحت حمراء و20% فقط ضوءاً مرئياً."
  },
  {
    "id": "egbac_phys_ch5_db_easy_06",
    "titleEn": "Earth Radiation Characteristics",
    "titleAr": "خصائص الإشعاع الأرضي",
    "difficulty": "easy",
    "questionEn": "Compared to solar radiation, Earth's thermal radiation is characterized by:",
    "questionAr": "بالمقارنة مع إشعاع الشمس، يتميز الإشعاع الحراري الصادر عن كوكب الأرض بأنه:",
    "optionsEn": [
      "Emitting predominantly high-energy ultraviolet radiation",
      "Occurring entirely in the invisible long-wave infrared region ($T \\approx 300\\text{ K}$)",
      "Producing bright visible illumination that illuminates lunar craters",
      "Having a peak wavelength shorter than that of the Sun"
    ],
    "optionsAr": [
      "يشع بصفة أساسية أشعة فوق بنفسجية عالية الطاقة",
      "يقع بأكمله في منطقة الأشعة تحت الحمراء غير المرئية ذات الأطوال الموجية الطويلة ($T \\approx 300\\text{ K}$)",
      "ينتج إضاءة مرئية ساطعة تضيء فوهات القمر",
      "يمتلك طولاً موجياً لأقصى شدة إشعاع أقصر من الطول الموجي الشمسي"
    ],
    "correctAnswer": "Occurring entirely in the invisible long-wave infrared region ($T \\approx 300\\text{ K}$)",
    "correctIndex": 1,
    "hintEn": "By Wien's law, lower temperature implies much longer wavelength.",
    "hintAr": "وفق قانون فين: انخفاض درجة حرارة الأرض يعني طولاً موجياً كبيراً جداً.",
    "stepByStepSolutionEn": [
      "Earth's temperature is $\\sim 300\\text{ K}$ ($20\\times$ lower than Sun), so $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (far infrared)."
    ],
    "stepByStepSolutionAr": [
      "درجة حرارة الأرض منخفضة (نحو 300 كلفن) مقارنة بالشمس (6000 كلفن)، لذا يقع إشعاعها بالكامل في نطاق الأشعة تحت الحمراء غير المرئية."
    ],
    "teacherTipEn": "This thermal radiation is trapped by greenhouse gases, maintaining global temperatures.",
    "teacherTipAr": "تحتجز غازات الاحتباس الحراري هذا الإشعاع الأرضي للحفاظ على دفء الغلاف الجوي."
  },
  {
    "id": "egbac_phys_ch5_db_easy_07",
    "titleEn": "Applications of Infrared Remote Sensing",
    "titleAr": "تطبيقات الاستشعار عن بعد بالأشعة تحت الحمراء",
    "difficulty": "easy",
    "questionEn": "Which of the following is a direct technological application of infrared radiation detection?",
    "questionAr": "أي مما يلي يعد تطبيقاً تكنولوجياً مباشراً لرصد الإشعاع الحراري تحت الأحمر؟",
    "optionsEn": [
      "Diffraction grating fabrication for optical spectrometry",
      "Measuring atomic lattice constants by X-ray reflection",
      "Night-vision equipment and airborne geological resource mapping",
      "Stimulated emission in helium-neon gas lasers"
    ],
    "optionsAr": [
      "تصنيع محزوزات الحيود في التحليل الطيفي الضوئي",
      "قياس ثوابت الشبكة البلورية للذرات بانعكاس أشعة إكس",
      "أجهزة الرؤية الليلية والتصوير الجوي لرصد الثروات الطبيعية في باطن الأرض",
      "الانبعاث المستحث في ليزر الهيليوم-نيون الغازي"
    ],
    "correctAnswer": "Night-vision equipment and airborne geological resource mapping",
    "correctIndex": 2,
    "hintEn": "Infrared sensors detect thermal emission from warm living bodies and mineral deposits.",
    "hintAr": "أجهزة الأشعة تحت الحمراء ترصد الانبعاث الحراري للأجسام والكائنات الحية والمصادر الطبيعية.",
    "stepByStepSolutionEn": [
      "Infrared imaging allows viewing in complete darkness by sensing emitted body heat, and satellite sensors map mineral and water resources."
    ],
    "stepByStepSolutionAr": [
      "تستخدم أجهزة الرؤية الليلية الإشعاع الحراري المنبعث من الأجسام، كما يستخدم الاستشعار عن بعد في استكشاف الثروات الطبيعية."
    ],
    "teacherTipEn": "Forensic science also utilizes thermal imaging to identify locations previously occupied by suspects.",
    "teacherTipAr": "تستفيد الأدلة الجنائية أيضاً من الأثر الحراري المتبقي بعد مغادرة الأشخاص لمسرح الجريمة."
  },
  {
    "id": "egbac_phys_ch5_db_easy_08",
    "titleEn": "Surface Potential Barrier in Metals",
    "titleAr": "حاجز جهد السطح في الفلزات",
    "difficulty": "easy",
    "questionEn": "The 'surface potential barrier' of a metallic conductor represents:",
    "questionAr": "يُقصد بـ 'حاجز جهد السطح' في الفلزات:",
    "optionsEn": [
      "The repulsive nuclear forces exerted by valence neutrons",
      "The magnetic field produced by orbital electron spin",
      "The gravitational attraction between free conduction electrons",
      "The inward electrostatic attractive forces that prevent free electrons from escaping the metal surface"
    ],
    "optionsAr": [
      "قوى التنافر النووية التي تؤثر بها نيوترونات التكافؤ",
      "المجال المغناطيسي الناشئ عن الغزل المداري للإلكترونات",
      "قوى التجاذب التثاقلي المتبادلة بين إلكترونات التوصيل الحرة",
      "قوى التجاذب الكهربية للداخل التي تمنع الإلكترونات الحرة من مغادرة سطح الفلز"
    ],
    "correctAnswer": "The inward electrostatic attractive forces that prevent free electrons from escaping the metal surface",
    "correctIndex": 3,
    "hintEn": "Free electrons are held inside the crystal lattice by positive ion attractions.",
    "hintAr": "تنجذب الإلكترونات الحرة نحو أيونات الفلز الموجبة للداخل فتمنع تحررها تلقائياً.",
    "stepByStepSolutionEn": [
      "To extract an electron, external energy (thermal or radiant) must overcome this attractive potential barrier."
    ],
    "stepByStepSolutionAr": [
      "لتحرير الإلكترون يلزم تزويده بطاقة خارجية (حرارية أو ضوئية) تتغلب على حاجز جهد السطح."
    ],
    "teacherTipEn": "Work function $W_e$ is the minimum energy needed to overcome this barrier.",
    "teacherTipAr": "دالة الشغل $W_e$ هي الحد الأدنى من الطاقة اللازمة للتغلب على حاجز جهد السطح."
  },
  {
    "id": "egbac_phys_ch5_db_easy_09",
    "titleEn": "Function of Control Grid in CRT",
    "titleAr": "وظيفة الشبكة في أنبوبة أشعة الكاثود (CRT)",
    "difficulty": "easy",
    "questionEn": "In a Cathode Ray Tube (CRT), the control grid carries a negative potential whose purpose is to:",
    "questionAr": "في أنبوبة أشعة الكاثود (CRT)، تحمل الشبكة جهداً سالباً ووظيفتها الأساسية هي:",
    "optionsEn": [
      "Control the beam intensity and screen brightness by repelling electrons",
      "Deflect the beam horizontally across the screen",
      "Heat the cathode to stimulate thermionic emission",
      "Emit green fluorescent photons upon electron impact"
    ],
    "optionsAr": [
      "التحكم في شدة الشعاع الإلكتروني ودرجة إضاءة الشاشة بتنافر الإلكترونات",
      "حرف الشعاع الإلكتروني أفقياً على امتداد الشاشة",
      "تسخين الكاثود لتحفيز الانبعاث الحراري للإلكترونات",
      "إشعاع فوتونات فلورية خضراء عند اصطدام الإلكترونات"
    ],
    "correctAnswer": "Control the beam intensity and screen brightness by repelling electrons",
    "correctIndex": 0,
    "hintEn": "Making the grid more negative decreases the number of electrons reaching the screen.",
    "hintAr": "زيادة سلبية الشبكة تزيد من تنافر الإلكترونات فتقل شدة الإضاءة على الشاشة.",
    "stepByStepSolutionEn": [
      "The control grid modulates electron flux. Increasing negative potential dims the screen; reducing it brightens the spot."
    ],
    "stepByStepSolutionAr": [
      "تتحكم الشبكة في عدد الإلكترونات المارة للشاشة. كلما زاد جهدها السالب قل عدد الإلكترونات وقلت الإضاءة والعكس صحيح."
    ],
    "teacherTipEn": "If the grid loses its negative potential, the screen becomes excessively bright.",
    "teacherTipAr": "إذا فقدت الشبكة سالبيتها يمر سيل هائل من الإلكترونات مسبباً إضاءة شديدة."
  },
  {
    "id": "egbac_phys_ch5_db_easy_10",
    "titleEn": "Role of Deflection Plates in CRT",
    "titleAr": "دور ألواح التوجيه (المجال الحارف) في CRT",
    "difficulty": "easy",
    "questionEn": "What happens in a Cathode Ray Tube if the horizontal and vertical deflection fields fail completely?",
    "questionAr": "ماذا يحدث في أنبوبة أشعة الكاثود إذا تعطل نظام الألواح الحارفة (المجالان الكهربي والمغناطيسي)؟",
    "optionsEn": [
      "The fluorescent coating on the screen vaporizes instantly",
      "The electron beam strikes the center of the screen only, forming a single bright stationary spot",
      "Electrons reverse their direction and strike the filament",
      "The screen produces a steady multicolored raster image"
    ],
    "optionsAr": [
      "يتبخر الطلاء الفلوري للشاشة بصورة فورية",
      "يصطدم الشعاع الإلكتروني بمنتصف الشاشة فقط مكوناً بقعة مضيئة ساكنة",
      "ترتد الإلكترونات في الاتجاه المعاكس لتصطدم بالفتيلة",
      "تنتج الشاشة صورة مكتملة الألوان منتظمة ومستقرة"
    ],
    "correctAnswer": "The electron beam strikes the center of the screen only, forming a single bright stationary spot",
    "correctIndex": 1,
    "hintEn": "Deflection plates scan the beam across all points on the screen.",
    "hintAr": "وظيفة ألواح التوجيه هي مسح الشاشة نقطة بنقطة لتكوين الصورة الكاملة.",
    "stepByStepSolutionEn": [
      "Without deflection fields, the undeflected electron beam travels in a straight line and strikes the exact center of the screen."
    ],
    "stepByStepSolutionAr": [
      "عند غياب مجالات الحرف، يتحرك الشعاع الإلكتروني في خط مستقيم دون انحراف وتظهر نقطة مضيئة في منتصف الشاشة."
    ],
    "teacherTipEn": "This was a classic ministerial exam question on the function of $X$ and $Y$ plates.",
    "teacherTipAr": "سؤال وزاري متكرر: أهمية ألواح التوجيه مسح الشاشة نقطة بنقطة لتكتمل الصورة المتتابعة."
  },
  {
    "id": "egbac_phys_ch5_db_easy_11",
    "titleEn": "Threshold Frequency Definition",
    "titleAr": "تعريف التردد الحرج للفلز",
    "difficulty": "easy",
    "questionEn": "The threshold frequency ($\\nu_c$) of a metallic surface is defined as:",
    "questionAr": "يُعرف التردد الحرج ($\\nu_c$) لسطح فلز بأنه:",
    "optionsEn": [
      "The maximum frequency of light that causes specular reflection",
      "The frequency at which all emitted electrons achieve speed $c$",
      "The minimum photon frequency required to liberate an electron without imparting kinetic energy",
      "The frequency of thermal vibrations in the metal ions"
    ],
    "optionsAr": [
      "أقصى تردد للضوء يسبب انعكاساً منتظماً",
      "التردد الذي تكتسب عنده جميع الإلكترونات سرعة الضوء $c$",
      "أقل تردد لفوتون الضوء الساقط يكفي لتحرير إلكترون من سطح الفلز دون إكسابه طاقة حركة",
      "تردد الاهتزاز الحراري لأيونات الفلز داخل الشبكة البلورية"
    ],
    "correctAnswer": "The minimum photon frequency required to liberate an electron without imparting kinetic energy",
    "correctIndex": 2,
    "hintEn": "$W_e = h\\nu_c$.",
    "hintAr": "دالة الشغل: $W_e = h\\nu_c$.",
    "stepByStepSolutionEn": [
      "Threshold frequency depends solely on the nature of the metal and represents the cutoff boundary for photoelectric emission."
    ],
    "stepByStepSolutionAr": [
      "التردد الحرج خاصية مميزة لنوع مادة الفلز، وهو أقل تردد يلزم لتحرير الإلكترون."
    ],
    "teacherTipEn": "Light with $\\nu < \\nu_c$ cannot liberate electrons regardless of intensity.",
    "teacherTipAr": "الضوء ذو التردد الأقل من الحرج لا يحرر إلكترونات مهما بلغت شدته أو زمن تعرض السطح له."
  },
  {
    "id": "egbac_phys_ch5_db_easy_12",
    "titleEn": "Work Function Nature",
    "titleAr": "طبيعة دالة الشغل للفلز",
    "difficulty": "easy",
    "questionEn": "The work function ($W_e$) of a photosensitive metal depends exclusively on:",
    "questionAr": "تتوقف دالة الشغل ($W_e$) لسطح فلز حساس للضوء فقط على:",
    "optionsEn": [
      "The intensity and brightness of the incident light beam",
      "The surface area and thickness of the metal plate",
      "The duration of time the surface is exposed to radiation",
      "The chemical nature and composition of the metal surface"
    ],
    "optionsAr": [
      "شدة الضوء الساقط وسطوعه على السطح",
      "مساحة سطح لوح الفلز وسمكه الإجمالي",
      "زمن تعرض سطح الفلز للإشعاع الساقط",
      "نوع مادة الفلز وطبيعة تركيبه الذري"
    ],
    "correctAnswer": "The chemical nature and composition of the metal surface",
    "correctIndex": 3,
    "hintEn": "$W_e = h\\nu_c = \\frac{hc}{\\lambda_c}$ depends only on the material.",
    "hintAr": "دالة الشغل خاصية مميزة لنوع المادة ولا تتغير بتغير الضوء الساقط.",
    "stepByStepSolutionEn": [
      "Work function is a characteristic physical constant for each metal, reflecting how tightly valence electrons are bound to the surface."
    ],
    "stepByStepSolutionAr": [
      "دالة الشغل ثابت فيزيائي خاص بكل فلز، وتعبر عن مدى إحكام ارتباط الإلكترونات بذرات الفلز."
    ],
    "teacherTipEn": "Cesium and potassium have very low work functions, making them ideal for photocells.",
    "teacherTipAr": "تتميز فلزات السيزيوم والبوتاسيوم بصغر دالة الشغل لذا تستخدم في الخلايا الكهروضوئية."
  },
  {
    "id": "egbac_phys_ch5_db_easy_13",
    "titleEn": "Effect of Light Intensity on Photocurrent",
    "titleAr": "أثر شدة الضوء على شدة التيار الكهروضوئي",
    "difficulty": "easy",
    "questionEn": "When monochromatic light of frequency $\\nu > \\nu_c$ strikes a photocell, doubling the light intensity causes:",
    "questionAr": "عند سقوط ضوء أحادي اللون تردده $\\nu > \\nu_c$ على خلية كهروضوئية، فإن مضاعفة شدة الضوء تؤدي إلى:",
    "optionsEn": [
      "Doubling the photocurrent (rate of emitted photoelectrons) while keeping their maximum kinetic energy constant",
      "Doubling the maximum kinetic energy of the emitted photoelectrons",
      "Doubling the threshold frequency of the cathode",
      "Halving the stopping potential required to cut off photocurrent"
    ],
    "optionsAr": [
      "مضاعفة شدة التيار الكهروضوئي (معدل انبعاث الإلكترونات) مع ثبوت أقصى طاقة حركة لها",
      "مضاعفة أقصى طاقة حركة تكتسبها الإلكترونات المنبعثة",
      "مضاعفة التردد الحرج لمهبط الخلية الكهروضوئية",
      "إنقاص جهد الإيقاف اللازم لقطع التيار إلى النصف"
    ],
    "correctAnswer": "Doubling the photocurrent (rate of emitted photoelectrons) while keeping their maximum kinetic energy constant",
    "correctIndex": 0,
    "hintEn": "Intensity means number of photons per second. More photons liberate more electrons.",
    "hintAr": "زيادة شدة الضوء تعني زيادة عدد الفوتونات الساقطة بالثانية، فيزداد عدد الإلكترونات المتحررة.",
    "stepByStepSolutionEn": [
      "Each photon interacts with a single electron. Higher intensity means more photons per second, thus a larger photocurrent, but individual photon energy is unchanged."
    ],
    "stepByStepSolutionAr": [
      "كل فوتون يتفاعل مع إلكترون واحد. زيادة الشدة تزيد عدد الفوتونات المنبعثة بالثانية وبالتالي التيار، بينما طاقة الإلكترون تعتمد على التردد فقط."
    ],
    "teacherTipEn": "Key ministerial takeaway: Intensity affects quantity (current); frequency affects energy (kinetic energy and stopping voltage).",
    "teacherTipAr": "القاعدة الذهبية: الشدة تؤثر في العدد (شدة التيار)، والتردد يؤثر في الطاقة (طاقة الحركة وجهد الإيقاف)."
  },
  {
    "id": "egbac_phys_ch5_db_easy_14",
    "titleEn": "Effect of Light Frequency on Photoelectron Energy",
    "titleAr": "أثر تردد الضوء على طاقة حركة الإلكترونات",
    "difficulty": "easy",
    "questionEn": "When increasing the frequency of monochromatic light shining on a metal plate (with $\\nu > \\nu_c$):",
    "questionAr": "عند زيادة تردد الضوء الأحادي الساقط على سطح فلز (حيث $\\nu > \\nu_c$):",
    "optionsEn": [
      "The work function of the metal increases proportionally",
      "The maximum kinetic energy and maximum velocity of the emitted photoelectrons both increase",
      "The number of liberated electrons increases proportionally",
      "The threshold wavelength of the metal shifts to shorter values"
    ],
    "optionsAr": [
      "تزداد دالة الشغل لمادة الفلز بنسبة طردية",
      "تزداد أقصى طاقة حركة وأقصى سرعة تكتسبها الإلكترونات الكهروضوئية المنبعثة",
      "يزداد عدد الإلكترونات المتحررة بنسبة طردية مع التردد",
      "يزاح الطول الموجي الحرج للفلز نحو قيم أصغر"
    ],
    "correctAnswer": "The maximum kinetic energy and maximum velocity of the emitted photoelectrons both increase",
    "correctIndex": 1,
    "hintEn": "$KE_{\\max} = h\\nu - W_e = \\frac{1}{2}m_e v_{\\max}^2$.",
    "hintAr": "طاقة الحركة: $KE_{\\max} = h\\nu - W_e$.",
    "stepByStepSolutionEn": [
      "Since $KE_{\\max} = h\\nu - W_e$, raising photon energy $h\\nu$ leaves more surplus energy as electron kinetic energy."
    ],
    "stepByStepSolutionAr": [
      "بما أن $KE_{\\max} = h\\nu - W_e$، فإن زيادة طاقة الفوتون تزيد الفائض المتبقي كطاقة حركة للإلكترون."
    ],
    "teacherTipEn": "The rate of electron emission (current) remains constant if photon flux is unchanged.",
    "teacherTipAr": "يظل معدل انبعاث الإلكترونات (التيار) ثابتاً طالما بقيت شدة الضوء ثابتة."
  },
  {
    "id": "egbac_phys_ch5_db_easy_15",
    "titleEn": "Slope of Photoelectric Kinetic Energy vs Frequency Graph",
    "titleAr": "ميل الخط البياني لطاقة الحركة ضد التردد",
    "difficulty": "easy",
    "questionEn": "In the standard plot of maximum kinetic energy ($KE_{\\max}$) versus incident photon frequency ($\\nu$):",
    "questionAr": "في الرسم البياني القياسي للعلاقة بين أقصى طاقة حركة ($KE_{\\max}$) وتردد الضوء الساقط ($\\nu$):",
    "optionsEn": [
      "The slope equals the work function ($W_e$) of the metal",
      "The slope depends on the mass of the cathode metal",
      "The slope of the line equals Planck's constant ($h$) for all metals",
      "The slope equals the electron charge ($e$)"
    ],
    "optionsAr": [
      "يمثل ميل الخط المستقيم دالة الشغل ($W_e$) للفلز",
      "يتغير ميل الخط المستقيم بتغير كتلة مهبط الفلز",
      "يمثل ميل الخط المستقيم ثابت بلانك ($h$) وهو متساوٍ لجميع الفلزات",
      "يمثل ميل الخط المستقيم شحنة الإلكترون ($e$)"
    ],
    "correctAnswer": "The slope of the line equals Planck's constant ($h$) for all metals",
    "correctIndex": 2,
    "hintEn": "Equation is $KE_{\\max} = h\\cdot \\nu - W_e$, which matches $y = mx + c$.",
    "hintAr": "المعادلة هي $KE_{\\max} = h\\nu - W_e$، وبالتالي الميل $m = h$.",
    "stepByStepSolutionEn": [
      "The slope is $h$ (universal constant), the x-intercept is $\\nu_c$, and the negative y-intercept is $-W_e$."
    ],
    "stepByStepSolutionAr": [
      "ميل الخط البياني دائماً هو ثابت بلانك $h$ لجميع المواد، ونقطة التقاطع مع محور التردد هي $\\nu_c$ ومع محور الطاقة هي $-W_e$."
    ],
    "teacherTipEn": "All lines for different metals are parallel because they share the identical slope $h$.",
    "teacherTipAr": "الخطوط البيانية لمختلف الفلزات تكون متوازية تماماً لأن لها نفس الميل (ثابت بلانك)."
  },
  {
    "id": "egbac_phys_ch5_db_easy_16",
    "titleEn": "Stopping Potential Physical Meaning",
    "titleAr": "المعنى الفيزيائي لجهد الإيقاف (جهد القطع)",
    "difficulty": "easy",
    "questionEn": "The stopping potential ($V_s$) in a photoelectric experiment is the negative anode voltage required to:",
    "questionAr": "يُعرف جهد الإيقاف ($V_s$) في تجربة التأثير الكهروضوئي بأنه الجهد السالب للمصعد اللازم لـ:",
    "optionsEn": [
      "Neutralize all positive ions in the cathode material",
      "Accelerate electrons to their maximum possible speed",
      "Dissociate diatomic gas molecules in the vacuum tube",
      "Reduce the photocurrent to zero by stopping the fastest emitted photoelectrons ($eV_s = KE_{\\max}$)"
    ],
    "optionsAr": [
      "معادلة جميع الشحنات الموجبة في مادة المهبط",
      "تعجيل الإلكترونات للوصول إلى أقصى سرعة ممكنة لها",
      "تأيين جزيئات الغاز المتبقية في الأنبوبة المفرغة",
      "إنقاص شدة التيار الكهروضوئي إلى الصفر بإيقاف أسرع الإلكترونات المنبعثة ($eV_s = KE_{\\max}$)"
    ],
    "correctAnswer": "Reduce the photocurrent to zero by stopping the fastest emitted photoelectrons ($eV_s = KE_{\\max}$)",
    "correctIndex": 3,
    "hintEn": "$e V_s = KE_{\\max} = \\frac{1}{2}m_e v_{\\max}^2$.",
    "hintAr": "طاقة الإيقاف: $eV_s = KE_{\\max}$.",
    "stepByStepSolutionEn": [
      "Stopping potential measures the kinetic energy of the most energetic photoelectrons: $eV_s = KE_{\\max}$."
    ],
    "stepByStepSolutionAr": [
      "يقيس جهد الإيقاف أقصى طاقة حركة يمتلكها أسرع إلكترون: $eV_s = KE_{\\max}$."
    ],
    "teacherTipEn": "Stopping potential depends on incident frequency $\\nu$ and work function $W_e$, but is independent of light intensity.",
    "teacherTipAr": "يعتمد جهد الإيقاف على التردد ودالة الشغل، ولا يتأثر إطلاقاً بشدة الضوء الساقط."
  },
  {
    "id": "egbac_phys_ch5_db_easy_17",
    "titleEn": "Instantaneous Nature of Photoelectric Emission",
    "titleAr": "الطبيعة اللحظية للانبعاث الكهروضوئي",
    "difficulty": "easy",
    "questionEn": "Experimental measurements demonstrate that when light with $\\nu > \\nu_c$ illuminates a metal, electron emission occurs:",
    "questionAr": "أثبتت القياسات التجريبية الدقيقة أنه عند سقوط ضوء تردده $\\nu > \\nu_c$ على فلز، فإن انبعاث الإلكترونات يحدث:",
    "optionsEn": [
      "Instantaneously (within less than $10^{-9}\\text{ seconds}$) without any measurable time lag",
      "After several hours of cumulative wave absorption",
      "Only after heating the cathode to red incandescence",
      "Exclusively during nighttime when thermal noise is zero"
    ],
    "optionsAr": [
      "لحظياً (في زمن أقل من $10^{-9}\\text{ ثانية}$) دون أي فترة تأخير قابلة للقياس",
      "بعد مرور عدة ساعات من التجميع التدريجي للطاقة الموجية",
      "فقط بعد تسخين المهبط حتى درجة التوهج الأحمر",
      "حصرياً خلال ساعات الليل عند انعدام الشوشرة الحرارية"
    ],
    "correctAnswer": "Instantaneously (within less than $10^{-9}\\text{ seconds}$) without any measurable time lag",
    "correctIndex": 0,
    "hintEn": "Classical physics required time for energy accumulation; quantum physics shows instantaneous photon absorption.",
    "hintAr": "الكلاسيكية افترضت حاجة الإلكترون لوقت لتجميع الطاقة، بينما أثبت أينشتاين أن الانبعاث لحظي.",
    "stepByStepSolutionEn": [
      "A photon delivers its entire energy packet $h\\nu$ in a single localized collision, liberating the electron immediately."
    ],
    "stepByStepSolutionAr": [
      "ينقل الفوتون طاقته كحزمة واحدة فور اصطدامه بالإلكترون فيتحرر لحظياً دون تراكم زمني."
    ],
    "teacherTipEn": "This instantaneous emission conclusively disproved the classical wave theory of light.",
    "teacherTipAr": "شكل هذا الانبعاث اللحظي دليلاً قاطعاً على بطلان النظرية الموجية الكلاسيكية للضوء."
  },
  {
    "id": "egbac_phys_ch5_db_easy_18",
    "titleEn": "Photocell Applications",
    "titleAr": "تطبيقات الخلية الكهروضوئية",
    "difficulty": "easy",
    "questionEn": "The primary operating principle of an automated security door sensor is:",
    "questionAr": "تعتمد فكرة عمل أجهزة الإنذار وأبواب المصاعد الأوتوماتيكية الحساسة للضوء على:",
    "optionsEn": [
      "Nuclear magnetic resonance in crystal boundaries",
      "The photoelectric effect converting light interruptions into electrical control signals",
      "Electrostatic induction inside a dielectric capacitor",
      "Continuous thermionic emission inside a cathode ray tube"
    ],
    "optionsAr": [
      "الرنين المغناطيسي النووي في حدود الحبيبات البلورية",
      "الظاهرة الكهروضوئية لتحويل انقطاع الضوء إلى إشارات تحكم كهربية",
      "الحث الكهروستاتيكي داخل مكثف ذي وسط عازل",
      "الانبعاث الكهروحراري المستمر داخل أنبوبة أشعة الكاثود"
    ],
    "correctAnswer": "The photoelectric effect converting light interruptions into electrical control signals",
    "correctIndex": 1,
    "hintEn": "Photocell conducts when illuminated and stops when beam is broken.",
    "hintAr": "الخلية الكهروضوئية يمر بها تيار عند إضاءتها وينقطع عند حجب الضوء.",
    "stepByStepSolutionEn": [
      "When an object interrupts the light beam hitting the photocell, the circuit opens, triggering a relay to open the door or sound an alarm."
    ],
    "stepByStepSolutionAr": [
      "عندما يقطع شخص شعاع الضوء الساقط على الخلية، ينقطع التيار الكهروضوئي وتعمل دائرة التنبيه أو يفتح الباب أوتوماتيكياً."
    ],
    "teacherTipEn": "Photocells are also used in photographic exposure meters and solar calculators.",
    "teacherTipAr": "تستخدم الخلايا الكهروضوئية أيضاً في مقاييس الضوء لآلات التصوير والحواسيب الشمسية."
  },
  {
    "id": "egbac_phys_ch5_db_easy_19",
    "titleEn": "Comparison of Light Bulbs on Photoelectric Emission",
    "titleAr": "مقارنة مصادر الضوء المختلفة في إحداث التأثير الكهروضوئي",
    "difficulty": "easy",
    "questionEn": "A dim blue light liberates photoelectrons from a cesium cathode, but an intense bright red spotlight fails to liberate any electrons. This occurs because:",
    "questionAr": "يستطيع ضوء أزرق خافت تحرير إلكترونات من مهبط السيزيوم، بينما يفشل ضوء أحمر ساطع وشديد في تحرير أي إلكترون. يرجع ذلك إلى:",
    "optionsEn": [
      "Red photons travel much slower than blue photons in vacuum",
      "Blue light contains more total energy than the red spotlight",
      "The frequency of blue light exceeds the threshold frequency, whereas red light frequency is below $\\nu_c$",
      "Red photons are absorbed exclusively by the glass envelope"
    ],
    "optionsAr": [
      "فوتونات الضوء الأحمر تتحرك بسرعة أقل بكثير من فوتونات الضوء الأزرق في الفراغ",
      "الضوء الأزرق الخافت يمتلك طاقة كلية أكبر من الضوء الأحمر الساطع",
      "تردد الضوء الأزرق أكبر من التردد الحرج للسيزيوم، بينما تردد الضوء الأحمر أقل من التردد الحرج",
      "فوتونات الضوء الأحمر تمتص كلياً بواسطة زجاج الغلاف الخارجي"
    ],
    "correctAnswer": "The frequency of blue light exceeds the threshold frequency, whereas red light frequency is below $\\nu_c$",
    "correctIndex": 2,
    "hintEn": "Photoelectric release depends on individual photon frequency, not collective brightness.",
    "hintAr": "تحرير الإلكترون يشترط أن تكون طاقة الفوتون الواحد أكبر من دالة الشغل (أي $\\nu > \\nu_c$).",
    "stepByStepSolutionEn": [
      "Blue light has $\\nu_{\\text{blue}} > \\nu_c$, so each photon carries sufficient energy to eject an electron. Red light has $\\nu_{\\text{red}} < \\nu_c$, so no single photon can liberate an electron, regardless of intensity."
    ],
    "stepByStepSolutionAr": [
      "تردد الضوء الأزرق كافٍ لتحرير الإلكترون، بينما تردد الأحمر أقل من التردد الحرج فلا يستطيع تحرير أي إلكترون مهما زادت شدته."
    ],
    "teacherTipEn": "Intensity cannot compensate for inadequate photon frequency.",
    "teacherTipAr": "شدة الضوء لا تعوض نقص التردد لأن تفاعل الفوتون مع الإلكترون تفاعل فردي (1 إلى 1)."
  },
  {
    "id": "egbac_phys_ch5_db_easy_20",
    "titleEn": "Work Function Units: Joules and Electron-Volts",
    "titleAr": "وحدات قياس دالة الشغل والإلكترون-فولت",
    "difficulty": "easy",
    "questionEn": "To convert an energy value from electron-volts ($\\text{eV}$) into Joules ($\\text{J}$), one must:",
    "questionAr": "للتحويل من وحدة إلكترون-فولت ($\\text{eV}$) إلى وحدة الجول ($\\text{J}$)، يجب:",
    "optionsEn": [
      "Divide by Planck's constant ($h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$)",
      "Multiply by the speed of light squared ($c^2 = 9 \\times 10^{16}\\text{ m}^2/\\text{s}^2$)",
      "Divide by Avogadro's number",
      "Multiply by the elementary charge ($e = 1.6 \\times 10^{-19}\\text{ C}$)"
    ],
    "optionsAr": [
      "القسمة على ثابت بلانك ($h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$)",
      "الضرب في مربع سرعة الضوء ($c^2 = 9 \\times 10^{16}\\text{ m}^2/\\text{s}^2$)",
      "القسمة على عدد أفوجادرو",
      "الضرب في شحنة الإلكترون الأساسية ($e = 1.6 \\times 10^{-19}\\text{ C}$)"
    ],
    "correctAnswer": "Multiply by the elementary charge ($e = 1.6 \\times 10^{-19}\\text{ C}$)",
    "correctIndex": 3,
    "hintEn": "$1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$.",
    "hintAr": "العلاقة: $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$.",
    "stepByStepSolutionEn": [
      "An electron-volt is the energy gained by an electron accelerated through $1\\text{ V}$: $1\\text{ eV} = e \\times 1\\text{ V} = 1.6 \\times 10^{-19}\\text{ J}$."
    ],
    "stepByStepSolutionAr": [
      "الإلكترون-فولت هو الطاقة التي يكتسبها إلكترون عند تسريعه عبر فرق جهد 1 فولت: $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$."
    ],
    "teacherTipEn": "Always verify units: if $W_e$ is given in $\\text{eV}$, multiply by $1.6 \\times 10^{-19}$ before calculating $\\nu_c$ using $h$ in $\\text{J}\\cdot\\text{s}$.",
    "teacherTipAr": "انتبه دائماً في المسائل: إذا كانت دالة الشغل بالإلكترون-فولت يجب تحويلها للجول قبل التعويض في معادلة بلانك."
  },
  {
    "id": "egbac_phys_ch5_db_easy_21",
    "titleEn": "Compton Effect Phenomenon Definition",
    "titleAr": "تعريف ظاهرة كومتون",
    "difficulty": "easy",
    "questionEn": "In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron:",
    "questionAr": "في ظاهرة كومتون، عند اصطدام فوتون أشعة سينية عالي الطاقة بإلكترون حر ساكن:",
    "optionsEn": [
      "The scattered photon has a longer wavelength and lower frequency, while the electron gains kinetic energy",
      "The photon is absorbed completely and disappears without trace",
      "The photon gains energy and its speed increases above $c$",
      "The electron's rest mass doubles following the collision"
    ],
    "optionsAr": [
      "يزداد الطول الموجي للفوتون المشتت ويقل تردده، بينما يكتسب الإلكترون طاقة حركة",
      "يمتص الفوتون كلياً ويختفي دون أن يترك أي أثر إشعاعي",
      "يكتسب الفوتون طاقة وتزداد سرعته عن سرعة الضوء $c$",
      "تتضاعف كتلة سكون الإلكترون نتيجة التصادم"
    ],
    "correctAnswer": "The scattered photon has a longer wavelength and lower frequency, while the electron gains kinetic energy",
    "correctIndex": 0,
    "hintEn": "Compton effect is an elastic collision between a photon and a free electron.",
    "hintAr": "تصادم كومتون تصادم مرن بين فوتون وإلكترون حر يحقق بقاء الطاقة وكمية الحركة.",
    "stepByStepSolutionEn": [
      "The incident photon transfers part of its energy to the electron. The scattered photon has lower energy ($h\\nu' < h\\nu$) $\\implies \\lambda' > \\lambda$."
    ],
    "stepByStepSolutionAr": [
      "ينقل الفوتون جزءاً من طاقته للإلكترون كطاقة حركة، فتقل طاقة الفوتون المشتت ويقل تردده ويزداد طوله الموجي."
    ],
    "teacherTipEn": "The speed of both incident and scattered photons in vacuum is identically $c$.",
    "teacherTipAr": "سرعة الفوتون قبل التصادم وبعده في الفراغ ثابتة وتساوي دائماً $c$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_22",
    "titleEn": "Photon Properties Conserved in Compton Scattering",
    "titleAr": "الكميات الفيزيائية المحفوظة في تصادم كومتون",
    "difficulty": "easy",
    "questionEn": "Which of the following physical quantities are strictly conserved during the Compton collision?",
    "questionAr": "أي من الكميات الفيزيائية التالية تكون محفوظة تماماً أثناء تصادم كومتون؟",
    "optionsEn": [
      "Wavelength of the photon and speed of the electron",
      "Total energy and total vector linear momentum of the system",
      "Frequency of the photon and total number of protons",
      "Rest mass of the photon and charge of the photon"
    ],
    "optionsAr": [
      "الطول الموجي للفوتون وسرعة الإلكترون",
      "الطاقة الكلية وكمية التحرك الخطي المتجهة للمجموعة",
      "تردد الفوتون والعدد الإجمالي للبروتونات",
      "كتلة السكون للفوتون وشحنة الفوتون"
    ],
    "correctAnswer": "Total energy and total vector linear momentum of the system",
    "correctIndex": 1,
    "hintEn": "Compton scattering obeys classical conservation of energy and momentum for relativistic particles.",
    "hintAr": "يطبق على تصادم كومتون قانونا بقاء الطاقة وبقاء كمية الحركة الخطية.",
    "stepByStepSolutionEn": [
      "$\\sum E_{\\text{initial}} = \\sum E_{\\text{final}}$ and $\\sum \\vec{p}_{\\text{initial}} = \\sum \\vec{p}_{\\text{final}}$. This proves photons act like colliding particles with linear momentum."
    ],
    "stepByStepSolutionAr": [
      "مجموع طاقتي الفوتون والإلكترون قبل التصادم = مجموع طاقتيهما بعد التصادم، ومجموع كميتي حركتيهما قبل التصادم = مجموع كميتي حركتيهما بعد التصادم."
    ],
    "teacherTipEn": "Compton effect provided decisive proof that electromagnetic radiation has corpuscular (particle) properties.",
    "teacherTipAr": "تعتبر ظاهرة كومتون دليلاً حاسماً لا يقبل الشك على الخاصية الجسيمية للإشعاع الكهرومغناطيسي."
  },
  {
    "id": "egbac_phys_ch5_db_easy_23",
    "titleEn": "Photon Linear Momentum Expression",
    "titleAr": "علاقة كمية تحرك الفوتون",
    "difficulty": "easy",
    "questionEn": "The linear momentum ($p_L$) of a photon of frequency $\\nu$ and wavelength $\\lambda$ is given by:",
    "questionAr": "تتعين كمية تحرك الفوتون ($p_L$) ذي التردد $\\nu$ والطول الموجي $\\lambda$ من العلاقة:",
    "optionsEn": [
      "$p_L = \\frac{h c}{\\nu}$",
      "$p_L = \\frac{1}{2}m c^2$",
      "$p_L = \\frac{h}{\\lambda} = \\frac{h\\nu}{c} = mc$",
      "$p_L = h\\lambda c$"
    ],
    "optionsAr": [
      "$p_L = \\frac{h c}{\\nu}$",
      "$p_L = \\frac{1}{2}m c^2$",
      "$p_L = \\frac{h}{\\lambda} = \\frac{h\\nu}{c} = mc$",
      "$p_L = h\\lambda c$"
    ],
    "correctAnswer": "$p_L = \\frac{h}{\\lambda} = \\frac{h\\nu}{c} = mc$",
    "correctIndex": 2,
    "hintEn": "Combine de Broglie $\\lambda = h/p$ and Einstein $E = pc = h\\nu$.",
    "hintAr": "من علاقتي أينشتاين ودي برولي: $p = \\frac{h}{\\lambda} = \\frac{h\\nu}{c}$.",
    "stepByStepSolutionEn": [
      "A photon has momentum $p = mc = \\frac{E}{c} = \\frac{h\\nu}{c} = \\frac{h}{\\lambda}$."
    ],
    "stepByStepSolutionAr": [
      "يمتلك الفوتون كمية تحرك خطية تساوي كتلته في سرعته: $p = mc = \\frac{h\\nu}{c} = \\frac{h}{\\lambda}$."
    ],
    "teacherTipEn": "Although a photon has zero rest mass ($m_0 = 0$), its dynamic mass while moving at $c$ is $m = \\frac{h\\nu}{c^2}$.",
    "teacherTipAr": "على الرغم من أن كتلة سكون الفوتون صفر، إلا أنه يمتلك كتلة مكافئة لطاقته أثناء حركته بسرعة الضوء."
  },
  {
    "id": "egbac_phys_ch5_db_easy_24",
    "titleEn": "Speed of Scattered Photon in Compton Effect",
    "titleAr": "سرعة الفوتون المشتت في ظاهرة كومتون",
    "difficulty": "easy",
    "questionEn": "Following a Compton collision, the speed of the scattered photon in vacuum:",
    "questionAr": "بعد حدوث تصادم كومتون، فإن سرعة الفوتون المشتت في الفراغ:",
    "optionsEn": [
      "Decreases proportionally to its loss of energy",
      "Increases because its wavelength has become longer",
      "Drops to zero as the photon is stopped by the electron",
      "Remains exactly equal to the speed of light ($c = 3 \\times 10^8\\text{ m/s}$)"
    ],
    "optionsAr": [
      "تقل بنسبة تعادل ما فقده الفوتون من طاقة",
      "تزداد لأن طوله الموجي أصبح أكبر بعد التصادم",
      "تهبط إلى الصفر حيث يتوقف الفوتون بتأثير الإلكترون",
      "تظل مساوية تماماً لسرعة الضوء في الفراغ ($c = 3 \\times 10^8\\text{ m/s}$)"
    ],
    "correctAnswer": "Remains exactly equal to the speed of light ($c = 3 \\times 10^8\\text{ m/s}$)",
    "correctIndex": 3,
    "hintEn": "All photons travel at speed c in vacuum regardless of frequency.",
    "hintAr": "سرعة جميع الموجات الكهرومغناطيسية والفوتونات في الفراغ ثابتة دائماً وتساوي $c$.",
    "stepByStepSolutionEn": [
      "The energy loss reduces the frequency ($\\nu = c/\\lambda$), but the propagation speed in vacuum is invariant at $c$."
    ],
    "stepByStepSolutionAr": [
      "فقدان الفوتون للطاقة يقلل تردده ويزيد طوله الموجي، ولكن سرعة انتشاره في الفراغ ثابت فيزيائي لا يتغير ($c$)."
    ],
    "teacherTipEn": "Common trap: Students often confuse photon energy reduction with velocity reduction!",
    "teacherTipAr": "خطأ شائع: يخلط بعض الطلاب بين نقصان طاقة الفوتون ونقصان سرعته؛ سرعة الفوتون في الفراغ ثابتة دائماً."
  },
  {
    "id": "egbac_phys_ch5_db_easy_25",
    "titleEn": "Photon Force on a Reflecting Surface",
    "titleAr": "القوة الناتجة عن انعكاس حزمة فوتونات",
    "difficulty": "easy",
    "questionEn": "A beam of light of total power $P$ strikes a flat surface perpendicularly. If the surface is perfectly reflecting, the total continuous force exerted by the beam is:",
    "questionAr": "تسقط حزمة ضوئية قدرتها الإجمالية $P$ عمودياً على سطح مستوٍ. إذا كان السطح عاكساً تماماً، فإن القوة التي تؤثر بها الحزمة على السطح تساوي:",
    "optionsEn": [
      "$F = \\frac{2P}{c}$",
      "$F = \\frac{P}{c}$",
      "$F = \\frac{P}{2c}$",
      "$F = 2Pc$"
    ],
    "optionsAr": [
      "$F = \\frac{2P}{c}$",
      "$F = \\frac{P}{c}$",
      "$F = \\frac{P}{2c}$",
      "$F = 2Pc$"
    ],
    "correctAnswer": "$F = \\frac{2P}{c}$",
    "correctIndex": 0,
    "hintEn": "Reflecting surface causes momentum change $\\Delta p = 2mc = 2p$.",
    "hintAr": "في السطح العاكس يرتد الفوتون بنفس كمية التحرك في الاتجاه المعاكس: $\\Delta p = 2p$.",
    "stepByStepSolutionEn": [
      "Force is rate of change of momentum: $F = \\phi_L \\cdot \\Delta p = \\phi_L \\cdot (2mc) = 2 \\phi_L \\frac{h\\nu}{c} = \\frac{2P}{c}$."
    ],
    "stepByStepSolutionAr": [
      "القوة هي معدل التغير في كمية التحرك: $F = \\frac{\\Delta p}{\\Delta t} = \\frac{2P}{c}$."
    ],
    "teacherTipEn": "If the surface were completely absorbing, the force would be $F = \\frac{P}{c}$.",
    "teacherTipAr": "إذا كان السطح ممتصاً تماماً تكون القوة $F = \\frac{P}{c}$ فقط."
  },
  {
    "id": "egbac_phys_ch5_db_easy_26",
    "titleEn": "Why Light Force Does Not Move Heavy Objects",
    "titleAr": "تفسير عدم تحريك الضوء للأجسام الكبيرة",
    "difficulty": "easy",
    "questionEn": "Although light exerts a measurable force ($F = \\frac{2P}{c}$), illuminating a wall does not cause it to move because:",
    "questionAr": "على الرغم من أن الضوء يؤثر بقوة ($F = \\frac{2P}{c}$)، إلا أن تسليط الضوء على جدار لا يحركه بسبب:",
    "optionsEn": [
      "Photons carry zero momentum when striking solid obstacles",
      "The force is exceedingly small due to the huge speed of light $c$ in the denominator ($10^8\\text{ m/s}$)",
      "The wall repels photons by an equal electrostatic anti-force",
      "Light waves cancel each other completely upon reflection"
    ],
    "optionsAr": [
      "الفوتونات تنعدم كمية تحركها عند اصطدامها بالأجسام الصلبة",
      "القوة متناهية في الصغر لكبر سرعة الضوء $c$ في المقام ($3 \\times 10^8\\text{ m/s}$) مقارنة بكتلة الجدار الكبيرة",
      "الجدار يطرد الفوتونات بقوة كهربية ساكنة مضادة ومساوية",
      "الموجات الضوئية تتلاشى كلياً عند الانعكاس بالتداخل الهدام"
    ],
    "correctAnswer": "The force is exceedingly small due to the huge speed of light $c$ in the denominator ($10^8\\text{ m/s}$)",
    "correctIndex": 1,
    "hintEn": "$F = \\frac{2P}{c}$. Since $c = 3 \\times 10^8\\text{ m/s}$, $F$ is typically micro-Newtons.",
    "hintAr": "بما أن سرعة الضوء $c = 3 \\times 10^8$ م/ث، فإن القوة تكون في حدود $10^{-7}$ نيوتن وهي مهملة للأجسام الكبيرة.",
    "stepByStepSolutionEn": [
      "For a high-power $300\\text{ W}$ light, $F = \\frac{600}{3 \\times 10^8} = 2 \\times 10^{-6}\\text{ N}$, which causes negligible acceleration on heavy macroscopic objects ($a = F/m \\approx 0$)."
    ],
    "stepByStepSolutionAr": [
      "لقدرة 300 وات تكون القوة $2 \\times 10^{-6}$ نيوتن فقط، فتكون العجلة شبه منعدمة للأجسام الكبيرة."
    ],
    "teacherTipEn": "However, when striking a single microscopic electron ($m_e \\approx 9.1 \\times 10^{-31}\\text{ kg}$), this force produces massive acceleration (Compton effect).",
    "teacherTipAr": "لكن عند اصطدام هذا الفوتون بإلكترون متناهي الصغر، يكتسب الإلكترون تسارعاً هائلاً وطاقة حركة كبيرة."
  },
  {
    "id": "egbac_phys_ch5_db_easy_27",
    "titleEn": "Dual Nature of Light Summary",
    "titleAr": "خلاصة الطبيعة المزدوجة للضوء",
    "difficulty": "easy",
    "questionEn": "The concept of 'wave-particle duality' of light implies that:",
    "questionAr": "المقصود بـ 'ازدواجية الموجة والجسيم' للضوء هو أن:",
    "optionsEn": [
      "Light is composed of electrons oscillating in a gravitational field",
      "Light behaves strictly as continuous waves under all physical conditions",
      "Light exhibits wave properties (interference, diffraction) during propagation, and particle properties (Compton, photoelectric) during emission and absorption",
      "Light loses its energy completely when traveling through vacuum"
    ],
    "optionsAr": [
      "الضوء يتكون من إلكترونات تهتز داخل مجال تثاقلي",
      "الضوء يسلك دائماً سلوك موجات كلاسيكية متصلة في جميع الظروف الفيزيائية",
      "يسلك الضوء سلوك الموجات (تداخل، حيود) أثناء انتشاره، وسلوك الجسيمات (كومتون، كهروضوئية) عند تفاعله وامتصاصه",
      "الضوء يفقد طاقته تماماً عند انتقاله في الفراغ"
    ],
    "correctAnswer": "Light exhibits wave properties (interference, diffraction) during propagation, and particle properties (Compton, photoelectric) during emission and absorption",
    "correctIndex": 2,
    "hintEn": "Propagation = Wave model; Interaction with matter = Photon particle model.",
    "hintAr": "الانتشار يفسر بالنموذج الموجي (ماكرو)، والتفاعل مع المادة يفسر بالنموذج الجسيمي (ميكرو).",
    "stepByStepSolutionEn": [
      "Macroscopic phenomena involving large obstacles compared to wavelength exhibit wave properties. Microscopic atomic interactions with electrons exhibit particle properties."
    ],
    "stepByStepSolutionAr": [
      "عندما يتعامل الضوء مع عوائق أكبر بكثير من طوله الموجي يظهر كحزمة موجية، وعندما يتعامل مع جسيمات مجهرية كالإلكترون يظهر كفوتونات منفصلة."
    ],
    "teacherTipEn": "Bohr's principle of complementarity states both models are necessary for a complete description of light.",
    "teacherTipAr": "مبدأ التكامل لبور: النموذجان الموجي والجسيمي يكمل كل منهما الآخر لوصف طبيعة الضوء كاملة."
  },
  {
    "id": "egbac_phys_ch5_db_easy_28",
    "titleEn": "Photon Rest Mass",
    "titleAr": "كتلة سكون الفوتون",
    "difficulty": "easy",
    "questionEn": "What is the rest mass ($m_0$) of a photon when it is brought to rest?",
    "questionAr": "ما هي كتلة السكون ($m_0$) للفوتون إذا توقف عن الحركة؟",
    "optionsEn": [
      "Equal to the rest mass of an electron ($9.1 \\times 10^{-31}\\text{ kg}$)",
      "Equal to the mass of a proton",
      "Infinite, causing complete spacetime collapse",
      "Zero ($m_0 = 0$); a photon only possesses mass and momentum while traveling at speed $c$"
    ],
    "optionsAr": [
      "مساوية لكتلة سكون الإلكترون ($9.1 \\times 10^{-31}\\text{ kg}$)",
      "مساوية لكتلة البروتون داخل النواة",
      "لانهائية، مما يؤدي إلى انهيار الزمكان",
      "صفر ($m_0 = 0$)؛ الفوتون لا يمتلك كتلة وكمية تحرك إلا أثناء حركته بسرعة الضوء $c$"
    ],
    "correctAnswer": "Zero ($m_0 = 0$); a photon only possesses mass and momentum while traveling at speed $c$",
    "correctIndex": 3,
    "hintEn": "Photons cannot exist at rest. Energy $E = mc^2$ implies mass exists only in motion.",
    "hintAr": "الفوتون جسيم لا يوجد في حالة سكون؛ إذا استقر في مادة يمتص وتتحول طاقته إلى شكل آخر.",
    "stepByStepSolutionEn": [
      "A photon cannot be at rest; if it is stopped by matter, it is absorbed and ceases to exist, transferring all its energy."
    ],
    "stepByStepSolutionAr": [
      "كتلة سكون الفوتون منعدمة، فإذا توقف يمتص بالكامل وتتحول طاقته إلى طاقة داخلية أو حركة للإلكترون."
    ],
    "teacherTipEn": "Its dynamic relativistic mass while moving is $m = \\frac{h\\nu}{c^2}$.",
    "teacherTipAr": "كتلة الفوتون أثناء حركته هي كتلة مكافئة لطاقته: $m = \\frac{h\\nu}{c^2}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_29",
    "titleEn": "Photon Frequency and Energy Proportionality",
    "titleAr": "التناسب بين تردد الفوتون وطاقته",
    "difficulty": "easy",
    "questionEn": "If the wavelength of a monochromatic light beam is halved ($\\lambda_2 = \\frac{\\lambda_1}{2}$), the energy of each photon:",
    "questionAr": "إذا قل الطول الموجي لشعاع ضوئي أحادي اللون إلى النصف ($\\lambda_2 = \\frac{\\lambda_1}{2}$)، فإن طاقة كل فوتون:",
    "optionsEn": [
      "Doubles ($E_2 = 2E_1$)",
      "Halves ($E_2 = \\frac{E_1}{2}$)",
      "Increases fourfold ($E_2 = 4E_1$)",
      "Remains completely unchanged"
    ],
    "optionsAr": [
      "تتضاعف وتصبح مثلي ما كانت عليه ($E_2 = 2E_1$)",
      "تقل إلى النصف ($E_2 = \\frac{E_1}{2}$)",
      "تزداد إلى أربعة أمثالها ($E_2 = 4E_1$)",
      "تظل ثابتة دون أي تغيير"
    ],
    "correctAnswer": "Doubles ($E_2 = 2E_1$)",
    "correctIndex": 0,
    "hintEn": "$E = \\frac{hc}{\\lambda} \\implies E \\propto \\frac{1}{\\lambda}$.",
    "hintAr": "العلاقة: $E = \\frac{hc}{\\lambda}$ تناسب عكسي مع $\\lambda$.",
    "stepByStepSolutionEn": [
      "Energy is inversely proportional to wavelength: $E = \\frac{hc}{\\lambda}$. Halving $\\lambda$ doubles photon energy $E$."
    ],
    "stepByStepSolutionAr": [
      "طاقة الفوتون تتناسب عكسياً مع الطول الموجي: $E = \\frac{hc}{\\lambda}$. إنقاص الطول الموجي للنصف يضاعف طاقة الفوتون."
    ],
    "teacherTipEn": "Similarly, the momentum $p = \\frac{h}{\\lambda}$ also doubles.",
    "teacherTipAr": "وكذلك كمية التحرك $p = \\frac{h}{\\lambda}$ تتضاعف أيضاً لنفس السبب."
  },
  {
    "id": "egbac_phys_ch5_db_easy_30",
    "titleEn": "de Broglie Matter Wave Hypothesis",
    "titleAr": "فرضية دي برولي للموجات المادية",
    "difficulty": "easy",
    "questionEn": "Louis de Broglie postulated that every moving material particle of mass $m$ and velocity $v$ is accompanied by a wave whose wavelength is:",
    "questionAr": "افترض لويس دي برولي أن أي جسيم مادي كتلته $m$ ويتحرك بسرعة $v$ تصاحبه موجة مادية طولها الموجي يتعين من:",
    "optionsEn": [
      "$\\lambda = \\frac{mv}{h}$",
      "$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$",
      "$\\lambda = \\frac{h v}{m}$",
      "$\\lambda = \\frac{m c^2}{h v}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{mv}{h}$",
      "$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$",
      "$\\lambda = \\frac{h v}{m}$",
      "$\\lambda = \\frac{m c^2}{h v}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$",
    "correctIndex": 1,
    "hintEn": "$\\lambda = \\frac{h}{p}$.",
    "hintAr": "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "Matter waves (de Broglie waves) accompany any moving body. Their wavelength is inversely proportional to linear momentum $mv$."
    ],
    "stepByStepSolutionAr": [
      "الموجات المادية تصاحب حركة الجسيمات المادية، ويتناسب طولها الموجي عكسياً مع كمية تحرك الجسيم $mv$."
    ],
    "teacherTipEn": "Matter waves are NOT electromagnetic; their speed is not $c$ and they are not produced by oscillating charges.",
    "teacherTipAr": "الموجات المادية ليست موجات كهرومغناطيسية ولا تنتشر بسرعة الضوء، بل هي موجات تصاحب الجسيم المتحرك."
  },
  {
    "id": "egbac_phys_ch5_db_easy_31",
    "titleEn": "Difference Between Matter Waves and EM Waves",
    "titleAr": "الفرق بين الموجات المادية والموجات الكهرومغناطيسية",
    "difficulty": "easy",
    "questionEn": "How do de Broglie matter waves fundamentally differ from electromagnetic waves?",
    "questionAr": "بماذا تختلف الموجات المادية لدي برولي جوهرياً عن الموجات الكهرومغناطيسية؟",
    "optionsEn": [
      "Matter waves can only propagate in dense metallic solids",
      "Electromagnetic waves carry mass and positive electrical charge",
      "Matter waves accompany moving particles and do not propagate at speed $c$, nor are they radiated away from the particle",
      "Matter waves have infinite frequency regardless of momentum"
    ],
    "optionsAr": [
      "الموجات المادية تنتشر فقط في الأجسام الصلبة الفلزية كثيفة الذرات",
      "الموجات الكهرومغناطيسية تحمل كتلة وشحنة كهربية موجبة",
      "الموجات المادية تصاحب الجسيمات المتحركة ولا تنتشر بسرعة الضوء $c$ ولا تنفصل عن الجسيم المشع",
      "الموجات المادية لها تردد لانهائي بصرف النظر عن كمية تحرك الجسيم"
    ],
    "correctAnswer": "Matter waves accompany moving particles and do not propagate at speed $c$, nor are they radiated away from the particle",
    "correctIndex": 2,
    "hintEn": "EM waves propagate independently at $c$; matter waves are tied to the moving mass.",
    "hintAr": "الكهرومغناطيسية موجات مستعرضة تنفصل وتنتشر بسرعة $c$، والمادية تصاحب حركة الجسم.",
    "stepByStepSolutionEn": [
      "EM waves consist of oscillating electric and magnetic fields traveling at $c$ in vacuum. Matter waves describe the probability distribution of finding the particle."
    ],
    "stepByStepSolutionAr": [
      "الموجات الكهرومغناطيسية مجالات كهربية ومغناطيسية متعامدة تنتشر بسرعة $c$، أما الموجات المادية فترتبط بحركة الجسيم المادي."
    ],
    "teacherTipEn": "Matter waves cannot be separated from the moving body.",
    "teacherTipAr": "لا يمكن فصل الموجة المادية عن الجسيم المتحرك المصاحب لها."
  },
  {
    "id": "egbac_phys_ch5_db_easy_32",
    "titleEn": "Why Wave Nature of Macroscopic Bodies is Unobservable",
    "titleAr": "سبب عدم ملاحظة الطبيعة الموجية للأجسام الكبيرة",
    "difficulty": "easy",
    "questionEn": "Why do we not observe diffraction or interference when a moving football passes through a doorway?",
    "questionAr": "لماذا لا نلاحظ حيوداً أو تداخلاً عند مرور كرة قدم متحركة خلال فتحة باب؟",
    "optionsEn": [
      "Because macroscopic objects do not possess momentum",
      "Because Planck's constant is infinitely large for sports equipment",
      "Because matter waves only exist at absolute zero temperature",
      "Because the ball's mass is large, making its de Broglie wavelength unimaginably tiny ($< 10^{-34}\\text{ m}$) compared to the opening"
    ],
    "optionsAr": [
      "لأن الأجسام الكبيرة الماكروسكوبية لا تمتلك كمية تحرك خطية",
      "لأن ثابت بلانك كبير جداً للأجسام الرياضية",
      "لأن الموجات المادية لا تنشأ إلا عند درجة الصفر المطلق",
      "لكبر كتلة الكرة، فيكون الطول الموجي المصاحب لحركتها متناهي الصغر جداً مقارنة بأبعاد فتحة الباب"
    ],
    "correctAnswer": "Because the ball's mass is large, making its de Broglie wavelength unimaginably tiny ($< 10^{-34}\\text{ m}$) compared to the opening",
    "correctIndex": 3,
    "hintEn": "Diffraction requires aperture dimension $\\approx \\lambda$. For football, $\\lambda \\sim 10^{-34}\\text{ m}$.",
    "hintAr": "شرط الحيود أن تكون أبعاد العائق مقاربة للطول الموجي، وللكرة $\\lambda$ أصغر بكثير من أي عائق.",
    "stepByStepSolutionEn": [
      "Since $\\lambda = \\frac{h}{mv}$, and $h = 6.625 \\times 10^{-34}$, a macroscopic mass ($m \\sim 0.5\\text{ kg}$) yields $\\lambda \\sim 10^{-34}\\text{ m}$, completely undetectable by macroscopic openings."
    ],
    "stepByStepSolutionAr": [
      "بسبب صغر قيمة ثابت بلانك وكبر كتلة الكرة، يكون الطول الموجي لدي برولي متناهي الصغر فلا تظهر أي خواص موجية."
    ],
    "teacherTipEn": "For electrons ($m \\sim 10^{-30}\\text{ kg}$), $\\lambda$ is comparable to interatomic distances ($10^{-10}\\text{ m}$), making diffraction clearly visible.",
    "teacherTipAr": "أما للإلكترون، فصغر كتلته يجعل طوله الموجي مقارباً للمسافات بين الذرات في البلورات فيحدث الحيود بوضوح."
  },
  {
    "id": "egbac_phys_ch5_db_easy_33",
    "titleEn": "Operating Principle of Electron Microscope",
    "titleAr": "فكرة عمل الميكروسكوب الإلكتروني",
    "difficulty": "easy",
    "questionEn": "The operating principle of the transmission electron microscope is fundamentally based on:",
    "questionAr": "تعتمد فكرة عمل الميكروسكوب الإلكتروني بصفة أساسية على:",
    "optionsEn": [
      "The wave nature of high-speed electrons having an extremely short de Broglie wavelength",
      "The continuous thermionic emission of photons inside an optical lens",
      "Total internal reflection of electron beams inside fiber optics",
      "Nuclear fission occurring inside the specimen under test"
    ],
    "optionsAr": [
      "الطبيعة الموجية للإلكترونات فائقة السرعة وتمتعها بطول موجي لدي برولي متناهي الصغر",
      "الانبعاث الكهروحراري المستمر للفوتونات داخل عدسة زجاجية بصرية",
      "الانعكاس الكلي الداخلي لحزم الإلكترونات داخل الألياف الضوئية",
      "الانشطار النووي الحادث داخل نسيج العينة المراد فحصها"
    ],
    "correctAnswer": "The wave nature of high-speed electrons having an extremely short de Broglie wavelength",
    "correctIndex": 0,
    "hintEn": "Short wavelength $\\implies$ high resolving power.",
    "hintAr": "صغر الطول الموجي للإلكترونات السريعة يحقق شرط الرؤية والتكبير العالي.",
    "stepByStepSolutionEn": [
      "To resolve details of size $d$, the probe wavelength must satisfy $\\lambda \\le d$. Accelerating electrons with high voltage yields $\\lambda < 0.1\\text{ nm}$, resolving tiny viruses."
    ],
    "stepByStepSolutionAr": [
      "لرؤية تفاصيل فيروس أبعاده $d$ يلزم أن يكون $\\lambda \\le d$. بتعجيل الإلكترونات بجهد عالٍ يصغر طولها الموجي لدي برولي لأقل من أبعاد الفيروس."
    ],
    "teacherTipEn": "The optical microscope is limited by visible light ($\\lambda \\sim 400 - 700\\text{ nm}$) and cannot resolve viruses.",
    "teacherTipAr": "الميكروسكوب الضوئي مقيد بطول موجي كبير للضوء المرئي (400 - 700 نانومتر) فلا يستطيع تكبير الفيروسات."
  },
  {
    "id": "egbac_phys_ch5_db_easy_34",
    "titleEn": "Resolving Power Criterion in Microscopy",
    "titleAr": "شرط التمييز والتكبير في المجاهر",
    "difficulty": "easy",
    "questionEn": "To clearly resolve the fine internal details of a microscopic virus of dimension $d$, the illuminating beam must have a wavelength $\\lambda$ that satisfies:",
    "questionAr": "لرؤية وتحديد تفاصيل فيروس دقيق أبعاده $d$ بواسطة مجهر، يجب أن يحقق الطول الموجي للشعاع المستخدم $\\lambda$ الشرط التالي:",
    "optionsEn": [
      "$\\lambda \\ge 1000 d$",
      "$\\lambda \\le d$ (wavelength must be smaller than or comparable to the dimension of the object)",
      "$\\lambda = c \\cdot d^2$",
      "$\\lambda$ must be in the audible frequency range"
    ],
    "optionsAr": [
      "$\\lambda \\ge 1000 d$",
      "$\\lambda \\le d$ (أن يكون الطول الموجي للشعاع أصغر من أو مساوياً لأبعاد الجسم المراد رؤيته)",
      "$\\lambda = c \\cdot d^2$",
      "أن يقع الطول الموجي في نطاق الترددات الصوتية المسموعة"
    ],
    "correctAnswer": "$\\lambda \\le d$ (wavelength must be smaller than or comparable to the dimension of the object)",
    "correctIndex": 1,
    "hintEn": "Diffraction blurs the image if $\\lambda > d$. Resolution requires $\\lambda \\le d$.",
    "hintAr": "شرط التمييز: أن يكون الطول الموجي مساوياً لأبعاد الجسم أو أصغر منه لتفادي الحيود حوله.",
    "stepByStepSolutionEn": [
      "If $\\lambda > d$, the wave bends around the object by diffraction without forming a distinct shadow. Thus resolving power requires $\\lambda \\le d$."
    ],
    "stepByStepSolutionAr": [
      "إذا كان الطول الموجي أكبر من أبعاد الفيروس ينحني الضوء حوله ولا يظهر تفاصيله؛ لذا يشترط صغر الطول الموجي للتمييز."
    ],
    "teacherTipEn": "This is why accelerating voltage $V$ in electron microscopes is made very high: $V \\uparrow \\implies v \\uparrow \\implies \\lambda \\downarrow$.",
    "teacherTipAr": "لذلك يُزاد فرق الجهد المعجل في الميكروسكوب الإلكتروني لتزيد سرعة الإلكترونات فيقل طولها الموجي وتتحقق الرؤية."
  },
  {
    "id": "egbac_phys_ch5_db_easy_35",
    "titleEn": "Effect of Accelerating Voltage on Electron Wavelength",
    "titleAr": "أثر زيادة جهد التعجيل على الطول الموجي للإلكترون",
    "difficulty": "easy",
    "questionEn": "In an electron microscope, quadrupling the accelerating voltage applied to the electron gun ($V_2 = 4V_1$) causes the de Broglie wavelength to:",
    "questionAr": "في الميكروسكوب الإلكتروني، عند زيادة فرق الجهد المعجل للإلكترونات إلى أربعة أمثاله ($V_2 = 4V_1$)، فإن الطول الموجي لدي برولي:",
    "optionsEn": [
      "Double ($\\lambda_2 = 2\\lambda_1$)",
      "Decrease to one-fourth ($\\lambda_2 = \\frac{\\lambda_1}{4}$)",
      "Decrease to half its initial value ($\\lambda_2 = \\frac{\\lambda_1}{2}$)",
      "Remain constant because electron mass is fixed"
    ],
    "optionsAr": [
      "يتضاعف إلى مثلي قيمته الأصلية ($\\lambda_2 = 2\\lambda_1$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda_2 = \\frac{\\lambda_1}{4}$)",
      "يقل إلى نصف قيمته الأصلية ($\\lambda_2 = \\frac{\\lambda_1}{2}$)",
      "يظل ثابتاً لأن كتلة الإلكترون ثابتة"
    ],
    "correctAnswer": "Decrease to half its initial value ($\\lambda_2 = \\frac{\\lambda_1}{2}$)",
    "correctIndex": 2,
    "hintEn": "$\\lambda = \\frac{h}{\\sqrt{2m_e eV}} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "العلاقة: $\\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "Since $eV = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$, the de Broglie wavelength $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$. Quadrupling $V$ reduces $\\lambda$ by $\\sqrt{4} = 2$."
    ],
    "stepByStepSolutionAr": [
      "بما أن طاقة الحركة $eV = \\frac{1}{2}mv^2$، فإن السرعة تتناسب مع $\\sqrt{V}$، وطول دي برولي $\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 أمثال تقلل الطول الموجي للنصف."
    ],
    "teacherTipEn": "This increases the resolving power of the microscope by a factor of 2.",
    "teacherTipAr": "وبالتالي تتضاعف قدرة المجهر على التمييز والتكبير بمقدار الضعف."
  },
  {
    "id": "egbac_phys_ch5_db_easy_36",
    "titleEn": "Lenses in the Electron Microscope",
    "titleAr": "العدسات المستخدمة في الميكروسكوب الإلكتروني",
    "difficulty": "easy",
    "questionEn": "Instead of ordinary glass lenses, an electron microscope focuses the electron beam using:",
    "questionAr": "بدلاً من العدسات الزجاجية، يتم تركيز وتوجيه الحزمة الإلكترونية في الميكروسكوب الإلكتروني باستخدام:",
    "optionsEn": [
      "High-density borosilicate concave mirrors",
      "Piezoelectric quartz crystal plates",
      "Liquid immersion oil with refractive index $1.5$",
      "Electromagnetic and electrostatic fields acting as magnetic lenses"
    ],
    "optionsAr": [
      "مرايا مقعرة عالية الكثافة من زجاج البوروسيليكات",
      "ألواح بلورية كهرضغطية من مادة الكوارتز",
      "زيت غمر سائل ذي معامل انكسار 1.5",
      "مجالات كهرومغناطيسية وكهروستاتيكية تعمل كعدسات مغناطيسية"
    ],
    "correctAnswer": "Electromagnetic and electrostatic fields acting as magnetic lenses",
    "correctIndex": 3,
    "hintEn": "Electrons are charged particles and are deflected by magnetic fields via Lorentz force.",
    "hintAr": "تتأثر الإلكترونات المشحونة بالمجالات المغناطيسية والكهربية فتنحرف وتتركز كما تفعل العدسات الضوئية.",
    "stepByStepSolutionEn": [
      "Because electrons cannot penetrate glass lenses, shaped electromagnetic coils produce inhomogeneous magnetic fields that focus the diverging electron beam."
    ],
    "stepByStepSolutionAr": [
      "نظراً لامتصاص الزجاج للإلكترونات، تستخدم ملفات كهرومغناطيسية تنتج مجالات مغناطيسية تحرف الإلكترونات وتركزها بدقة عالية."
    ],
    "teacherTipEn": "Focal length of a magnetic lens can be adjusted electronically by changing the coil current.",
    "teacherTipAr": "يمكن تعديل البعد البؤري للعدسة المغناطيسية بسهولة بتغيير شدة التيار المار في ملفاتها."
  },
  {
    "id": "egbac_phys_ch5_db_easy_37",
    "titleEn": "Screen Type in Electron Microscope",
    "titleAr": "شاشة استقبال الصورة في الميكروسكوب الإلكتروني",
    "difficulty": "easy",
    "questionEn": "The final magnified image in an electron microscope is viewed on:",
    "questionAr": "يتم استقبال وعرض الصورة المكبرة النهائية في الميكروسكوب الإلكتروني على:",
    "optionsEn": [
      "A fluorescent screen or high-resolution digital charge-coupled device (CCD)",
      "A plane silvered glass mirror reflecting sunlight",
      "A blackened cardboard sheet coated with charcoal powder",
      "An optical eyepiece containing ocular glass lenses"
    ],
    "optionsAr": [
      "شاشة فلورية حساسة أو حساس إلكتروني رقمي عالي الدقة (CCD)",
      "مرآة مستوية فضية تعكس ضوء الشمس المباشر",
      "لوح كرتوني مسود مطلي بمسحوق الفحم النباتي",
      "عدسة عينية زجاجية مباشرة تنظر إليها العين بالضوء"
    ],
    "correctAnswer": "A fluorescent screen or high-resolution digital charge-coupled device (CCD)",
    "correctIndex": 0,
    "hintEn": "Electrons are invisible to the naked human eye; they require a fluorescent converter.",
    "hintAr": "الإلكترونات غير مرئية للعين البشرية وتحتاج شاشة فلورية تتوهج عند اصطدامها بها.",
    "stepByStepSolutionEn": [
      "Because human retinas cannot detect electrons directly, the electrons strike a fluorescent phosphorescent screen which emits visible photons, or a digital sensor array."
    ],
    "stepByStepSolutionAr": [
      "تصطدم الإلكترونات بطلاء فلوري فيتوهج معطياً صورة مرئية واضحة للعين أو تلتقطها حساسات رقمية للشاشات الحديثة."
    ],
    "teacherTipEn": "The specimen must be kept in a high vacuum so electrons are not scattered by air molecules.",
    "teacherTipAr": "يجب تفريغ مسار الحزمة من الهواء لتفادي تشتت الإلكترونات باصطدامها بجزيئات الغاز."
  },
  {
    "id": "egbac_phys_ch5_db_easy_38",
    "titleEn": "Vacuum Requirement in Electron Tube Devices",
    "titleAr": "ضرورة تفريغ الأجهزة الإلكترونية من الهواء",
    "difficulty": "easy",
    "questionEn": "Why must the interior of both the Cathode Ray Tube and Electron Microscope be maintained under high vacuum?",
    "questionAr": "لماذا يجب تفريغ أنبوبة أشعة الكاثود والميكروسكوب الإلكتروني تماماً من الهواء؟",
    "optionsEn": [
      "To prevent atmospheric air from oxidizing the fluorescent phosphor at room temperature",
      "To prevent high-speed electrons from colliding with and being scattered by air gas molecules",
      "To increase the speed of light inside the vacuum tube",
      "To allow acoustic waves to resonate with electron oscillations"
    ],
    "optionsAr": [
      "لحماية الطلاء الفلوري من التأكسد بالهواء الجوي عند درجة حرارة الغرفة",
      "لمنع تصادم الإلكترونات السريعة مع جزيئات الهواء وتشتتها وفقدان طاقتها",
      "لزيادة سرعة الضوء داخل الأنبوبة المفرغة",
      "لإتاحة رنين الموجات الصوتية مع اهتزازات الإلكترونات"
    ],
    "correctAnswer": "To prevent high-speed electrons from colliding with and being scattered by air gas molecules",
    "correctIndex": 1,
    "hintEn": "Air molecules would deflect and decelerate the electron beam.",
    "hintAr": "جزيئات الهواء تعيق حركة الإلكترونات وتشتت مسارها فلا تصل إلى الشاشة بانتظام.",
    "stepByStepSolutionEn": [
      "If gas molecules were present, electrons would undergo random collisions, causing beam dispersion, ionization, and complete loss of focus."
    ],
    "stepByStepSolutionAr": [
      "وجود الهواء يسبب تصادم الإلكترونات بجزيئات الغاز، فتتشتت الحزمة ولا تصل للشاشة بمسار منتظم وتفسد الصورة."
    ],
    "teacherTipEn": "High vacuum ensures mean free path of electrons is much larger than tube dimensions.",
    "teacherTipAr": "يضمن التفريغ العالي أن يكون متوسط المسار الحر للإلكترونات أطول بكثير من أبعاد الجهاز."
  },
  {
    "id": "egbac_phys_ch5_db_easy_39",
    "titleEn": "De Broglie Wavelength of an Accelerated Electron Formula",
    "titleAr": "صيغة طول موجة دي برولي لإلكترون معجل",
    "difficulty": "easy",
    "questionEn": "Which equation correctly gives the de Broglie wavelength ($\\lambda$) of an electron accelerated from rest across a potential difference $V$?",
    "questionAr": "أي معادلة تعبر بصورة صحيحة عن الطول الموجي لموجة دي برولي المصاحبة لإلكترون عُجل بفرق جهد $V$؟",
    "optionsEn": [
      "$\\lambda = \\frac{h \\sqrt{V}}{2 m_e e}$",
      "$\\lambda = \\frac{2 m_e e V}{h}$",
      "$\\lambda = \\frac{h}{\\sqrt{2 m_e e V}}$",
      "$\\lambda = \\frac{h c}{e V^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h \\sqrt{V}}{2 m_e e}$",
      "$\\lambda = \\frac{2 m_e e V}{h}$",
      "$\\lambda = \\frac{h}{\\sqrt{2 m_e e V}}$",
      "$\\lambda = \\frac{h c}{e V^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{\\sqrt{2 m_e e V}}$",
    "correctIndex": 2,
    "hintEn": "$KE = eV = \\frac{p^2}{2m_e} \\implies p = \\sqrt{2m_e eV}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{p^2}{2m} \\implies p = \\sqrt{2m eV}$.",
    "stepByStepSolutionEn": [
      "From $eV = \\frac{1}{2}m_e v^2$, momentum is $p = m_e v = \\sqrt{2m_e eV}$. Substituting into $\\lambda = h/p$ gives $\\lambda = \\frac{h}{\\sqrt{2m_e eV}}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $eV = \\frac{1}{2}m_e v^2 = \\frac{p^2}{2m_e}$، فإن $p = \\sqrt{2m_e eV}$. وبالتعويض في علاقة دي برولي: $\\lambda = \\frac{h}{\\sqrt{2m_e eV}}$."
    ],
    "teacherTipEn": "This shows that wavelength is inversely proportional to the square root of the potential difference.",
    "teacherTipAr": "توضح هذه الصيغة أن الطول الموجي يتناسب عكسياً مع الجذر التربيعي لفرق الجهد المعجل."
  },
  {
    "id": "egbac_phys_ch5_db_easy_40",
    "titleEn": "Continuous Spectrum of X-rays Origin",
    "titleAr": "منشأ الطيف المستمر للأشعة السينية",
    "difficulty": "easy",
    "questionEn": "In an X-ray Coolidge tube, the continuous spectrum (Bremsstrahlung) is produced when:",
    "questionAr": "في أنبوبة كولدج لتوليد الأشعة السينية، ينشأ الطيف المستمر (إشعاع الكابح) نتيجة:",
    "optionsEn": [
      "Valence electrons recombine with inner shell vacancies in target atoms",
      "Photons reflect elastically off the tungsten target face",
      "Nuclear alpha decay occurs in the tungsten filament",
      "High-speed electrons decelerate and lose kinetic energy near the heavy target nuclei"
    ],
    "optionsAr": [
      "عودة إلكترونات التكافؤ لملء الفجوات في المستويات القريبة من النواة",
      "انعكاس الفوتونات الساقطة انعكاساً مرناً عن سطح هدف التنجستين",
      "حدوث تحلل إشعاعي تلقائي لجسيمات ألفا داخل فتيلة التنجستين",
      "تباطؤ الإلكترونات السريعة وفقدان طاقتها الحركية بالتدريج قرب مجالات أنوية مادة الهدف"
    ],
    "correctAnswer": "High-speed electrons decelerate and lose kinetic energy near the heavy target nuclei",
    "correctIndex": 3,
    "hintEn": "Bremsstrahlung means 'braking radiation' due to electron deceleration.",
    "hintAr": "إشعاع الفرملة ينتج عن تناقص سرعة الإلكترون بتأثير المجال الكهربي لنواة مادة الهدف.",
    "stepByStepSolutionEn": [
      "When fast electrons approach positive target nuclei, electrostatic repulsion/attraction causes deceleration. By electrodynamics, decelerating charges emit radiation of continuous frequencies."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب الإلكترونات السريعة من أنوية ذرات الهدف، تتناقص سرعتها بفعل المجال الكهربي لنواة الهدف فتفقد طاقتها كإشعاع كهرومغناطيسي مستمر."
    ],
    "teacherTipEn": "Minimum wavelength $\\lambda_{\\min} = \\frac{hc}{eV}$ depends only on tube accelerating voltage $V$.",
    "teacherTipAr": "أقصر طول موجي للطيف المستمر $\\lambda_{\\min} = \\frac{hc}{eV}$ يعتمد فقط على فرق الجهد المعجل."
  },
  {
    "id": "egbac_phys_ch5_db_easy_41",
    "titleEn": "Minimum Wavelength in Continuous X-Ray Spectrum",
    "titleAr": "أقصر طول موجي للطيف المستمر للأشعة السينية",
    "difficulty": "easy",
    "questionEn": "The minimum wavelength ($\\lambda_{\\min}$) of the continuous X-ray spectrum from a Coolidge tube depends exclusively on:",
    "questionAr": "يتوقف أقصر طول موجي ($\\lambda_{\\min}$) للطيف المستمر للأشعة السينية في أنبوبة كولدج فقط على:",
    "optionsEn": [
      "The accelerating potential difference ($V$) applied between the cathode and anode",
      "The atomic number ($Z$) of the target material",
      "The temperature and thermal conductivity of the cooling fins",
      "The atmospheric pressure surrounding the glass envelope"
    ],
    "optionsAr": [
      "فرق الجهد الكهربي المعجل ($V$) المطبق بين المهبط والمصعد",
      "العدد الذري ($Z$) لمادة الهدف المستخدمة",
      "درجة حرارة ريش التبريد وموصلية النحاس الحرارية",
      "الضغط الجوي للهواء المحيط بأنبوبة كولدج"
    ],
    "correctAnswer": "The accelerating potential difference ($V$) applied between the cathode and anode",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\min} = \\frac{hc}{eV}$.",
    "hintAr": "العلاقة: $\\lambda_{\\min} = \\frac{hc}{eV}$.",
    "stepByStepSolutionEn": [
      "When an electron gives up its entire kinetic energy in a single collision: $eV = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}} \\implies \\lambda_{\\min} = \\frac{hc}{eV}$."
    ],
    "stepByStepSolutionAr": [
      "عندما يفقد الإلكترون كامل طاقة حركته في تصادم واحد: $eV = \\frac{hc}{\\lambda_{\\min}}$، فيتوقف $\\lambda_{\\min}$ على فرق الجهد فقط."
    ],
    "teacherTipEn": "Characteristic spectrum lines depend on target atomic number $Z$; continuous minimum wavelength depends only on voltage $V$.",
    "teacherTipAr": "الطيف الخطي للأشعة السينية يعتمد على العدد الذري $Z$، بينما أقصر طول موجي للطيف المستمر يعتمد على فرق الجهد $V$ فقط."
  },
  {
    "id": "egbac_phys_ch5_db_easy_42",
    "titleEn": "Target Material Selection in Coolidge Tube",
    "titleAr": "اختيار مادة الهدف في أنبوبة كولدج",
    "difficulty": "easy",
    "questionEn": "Why is tungsten preferentially chosen as the target material in an X-ray Coolidge tube?",
    "questionAr": "لماذا يفضل استخدام عنصر التنجستين كمادة للهدف في أنبوبة كولدج؟",
    "optionsEn": [
      "Because it is a transparent dielectric insulator",
      "Because of its high melting point and high atomic number ($Z = 74$)",
      "Because it absorbs all X-rays to protect the operator",
      "Because its work function is zero at all temperatures"
    ],
    "optionsAr": [
      "لأنه مادة عازلة شفافة للضوء المرئي",
      "لكبر درجة انصهاره العالية وارتفاع عدده الذري ($Z = 74$)",
      "لأنه يمتص جميع الأشعة السينية لحماية المشغل",
      "لأن دالة الشغل لسطحه منعدمة عند جميع درجات الحرارة"
    ],
    "correctAnswer": "Because of its high melting point and high atomic number ($Z = 74$)",
    "correctIndex": 1,
    "hintEn": "High Z increases X-ray intensity; high melting point withstands intense heat.",
    "hintAr": "العدد الذري العالي يرفع كفاءة إنتاج الأشعة السينية، ودرجة الانصهار العالية تتحمل الحرارة الشديدة.",
    "stepByStepSolutionEn": [
      "Over $99\\%$ of kinetic energy turns into heat, so high melting point prevents melting. High $Z$ increases characteristic X-ray frequencies and overall efficiency."
    ],
    "stepByStepSolutionAr": [
      "يتحول أكثر من 99% من طاقة الإلكترونات إلى حرارة فيلزم معدن لا ينصهر بسهولة كالتنجستين، وكبر عدده الذري يزيد كفاءة إصدار الأشعة السينية."
    ],
    "teacherTipEn": "Copper rods with cooling fins are also attached to conduct heat away rapidly.",
    "teacherTipAr": "توصل ساق نحاسية مزودة بريش تبريد لتسريب الحرارة الهائلة المتولدة بسرعة."
  },
  {
    "id": "egbac_phys_ch5_db_easy_43",
    "titleEn": "X-Ray Wave Nature and Crystal Diffraction",
    "titleAr": "الطبيعة الموجية لأشعة إكس وحيودها في البلورات",
    "difficulty": "easy",
    "questionEn": "Max von Laue demonstrated the wave nature of X-rays by observing that they undergo:",
    "questionAr": "أثبت العالم ماكس فون لاو الطبيعة الموجية للأشعة السينية عندما لاحظ أنها تخضع لـ:",
    "optionsEn": [
      "Total absorption by all transparent optical media",
      "Spontaneous nuclear transmutation inside crystalline salts",
      "Diffraction through the atomic crystal lattices of solids, acting as natural diffraction gratings",
      "Deflection by weak electrostatic fields in vacuum"
    ],
    "optionsAr": [
      "الامتصاص التام داخل جميع الأوساط الضوئية الشفافة",
      "التحول النووي التلقائي داخل الأملاح المتبلورة",
      "الحيود عند نفاذها خلال الشبكات البلورية للمواد الصلبة كأنها محزوزات حيود طبيعية",
      "الانحراف بالمجالات الكهربية الساكنة الضعيفة في الفراغ"
    ],
    "correctAnswer": "Diffraction through the atomic crystal lattices of solids, acting as natural diffraction gratings",
    "correctIndex": 2,
    "hintEn": "Interatomic distances in crystals are comparable to X-ray wavelength (~0.1 nm).",
    "hintAr": "المسافات البينية بين ذرات البلورة في حدود 0.1 نانومتر، وهي مقاربة للطول الموجي لأشعة إكس فيحدث الحيود.",
    "stepByStepSolutionEn": [
      "Because interatomic spacing ($d \\sim 10^{-10}\\text{ m}$) is comparable to X-ray wavelengths, crystals act as natural three-dimensional diffraction gratings."
    ],
    "stepByStepSolutionAr": [
      "تعمل ذرات البلورة المنتظمة كشبيكة حيود طبيعية لتطابق أبعاد المسافات البينية مع الطول الموجي لأشعة إكس فيحدث الحيود."
    ],
    "teacherTipEn": "This discovery founded the field of X-ray crystallography, used to determine DNA structure.",
    "teacherTipAr": "مهد هذا الاكتشاف لتحديد التركيب البلوري للمواد وتركيب جزيء الحمض النووي DNA."
  },
  {
    "id": "egbac_phys_ch5_db_easy_44",
    "titleEn": "Photon Mass Expression While Moving",
    "titleAr": "كتلة الفوتون أثناء الحركة",
    "difficulty": "easy",
    "questionEn": "The dynamic relativistic mass ($m$) of a moving photon of frequency $\\nu$ is expressed as:",
    "questionAr": "تتعين الكتلة المكافئة ($m$) لفوتون متحرك تردده $\\nu$ من العلاقة:",
    "optionsEn": [
      "$m = \\frac{h c^2}{\\nu}$",
      "$m = \\frac{h\\lambda}{c^2}$",
      "$m = h\\nu c^2$",
      "$m = \\frac{h\\nu}{c^2} = \\frac{h}{c\\lambda}$"
    ],
    "optionsAr": [
      "$m = \\frac{h c^2}{\\nu}$",
      "$m = \\frac{h\\lambda}{c^2}$",
      "$m = h\\nu c^2$",
      "$m = \\frac{h\\nu}{c^2} = \\frac{h}{c\\lambda}$"
    ],
    "correctAnswer": "$m = \\frac{h\\nu}{c^2} = \\frac{h}{c\\lambda}$",
    "correctIndex": 3,
    "hintEn": "Equate $E = h\\nu$ with $E = mc^2$.",
    "hintAr": "بمساواة طاقة بلانك بطاقة أينشتاين: $h\\nu = mc^2$.",
    "stepByStepSolutionEn": [
      "From Einstein's mass-energy equivalence $E = mc^2$, and Planck's quantum equation $E = h\\nu$, we have $mc^2 = h\\nu \\implies m = \\frac{h\\nu}{c^2}$."
    ],
    "stepByStepSolutionAr": [
      "من معادلة أينشتاين $E = mc^2$ ومعادلة بلانك $E = h\\nu$ ينتج: $mc^2 = h\\nu \\implies m = \\frac{h\\nu}{c^2} = \\frac{h}{c\\lambda}$."
    ],
    "teacherTipEn": "A photon with higher frequency has greater dynamic mass.",
    "teacherTipAr": "الفوتون ذو التردد الأعلى تكون كتلته المكافئة أكبر."
  },
  {
    "id": "egbac_phys_ch5_db_easy_45",
    "titleEn": "Ratio of Photon Energy to Momentum",
    "titleAr": "النسبة بين طاقة الفوتون وكمية تحركه",
    "difficulty": "easy",
    "questionEn": "The ratio of the energy ($E$) of a photon to its linear momentum ($p$) equals:",
    "questionAr": "النسبة بين طاقة الفوتون ($E$) وكمية تحركه ($p$) في الفراغ تساوي:",
    "optionsEn": [
      "The speed of light in vacuum ($c$)",
      "Planck's constant ($h$)",
      "The work function of the emitter",
      "The square root of wavelength ($\\sqrt{\\lambda}$)"
    ],
    "optionsAr": [
      "سرعة الضوء في الفراغ ($c$)",
      "ثابت بلانك ($h$)",
      "دالة الشغل للسطح الباعث",
      "الجذر التربيعي للطول الموجي ($\\sqrt{\\lambda}$)"
    ],
    "correctAnswer": "The speed of light in vacuum ($c$)",
    "correctIndex": 0,
    "hintEn": "$E = pc \\implies \\frac{E}{p} = c$.",
    "hintAr": "العلاقة: $E = pc \\implies \\frac{E}{p} = c$.",
    "stepByStepSolutionEn": [
      "Since $E = h\\nu$ and $p = \\frac{h\\nu}{c}$, the ratio $\\frac{E}{p} = \\frac{h\\nu}{h\\nu/c} = c$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $E = h\\nu$ و $p = \\frac{h\\nu}{c}$، فإن النسبة $\\frac{E}{p} = c$ وهي سرعة الضوء في الفراغ."
    ],
    "teacherTipEn": "This ratio is invariant for all photons of any wavelength in vacuum.",
    "teacherTipAr": "هذه النسبة ثابتة لجميع الفوتونات أياً كان ترددها أو طاقتها في الفراغ."
  },
  {
    "id": "egbac_phys_ch5_db_easy_46",
    "titleEn": "Color Temperature Relationship",
    "titleAr": "العلاقة بين لون النجم المشع ودرجة حرارته",
    "difficulty": "easy",
    "questionEn": "According to Wien's law, a blue star and a red star have different surface temperatures such that:",
    "questionAr": "وفقاً لقانون فين لإشعاع الجسم الأسود، فإن المقارنة بين نجم أزرق ونجم أحمر تدل على أن:",
    "optionsEn": [
      "The red star has a higher surface temperature because red light penetrates further",
      "The blue star has a higher surface temperature because its peak wavelength is shorter",
      "Both stars have identical surface temperatures regardless of spectral peak",
      "The blue star has lower temperature because blue photons have smaller energy"
    ],
    "optionsAr": [
      "النجم الأحمر أعلى في درجة حرارة سطحه لأن الضوء الأحمر ينفذ لمسافات أبعد",
      "النجم الأزرق أعلى في درجة حرارة سطحه لأن طوله الموجي لأقصى شدة إشعاع أقصر",
      "كلا النجمين لهما نفس درجة حرارة السطح بغض النظر عن لون القمة الطيفية",
      "النجم الأزرق أقل في درجة حرارته لأن فوتونات الضوء الأزرق أقل في الطاقة"
    ],
    "correctAnswer": "The blue star has a higher surface temperature because its peak wavelength is shorter",
    "correctIndex": 1,
    "hintEn": "Wien's law: $\\lambda_{\\max} \\propto 1/T$. Blue $\\lambda <$ Red $\\lambda \\implies T_{\\text{blue}} > T_{\\text{red}}$.",
    "hintAr": "قانون فين: الطول الموجي يتناسب عكسياً مع درجة الحرارة، والأزرق طوله الموجي أقصر فيكون أسخن.",
    "stepByStepSolutionEn": [
      "Blue light has shorter wavelength ($\\sim 450\\text{ nm}$) than red light ($\\sim 700\\text{ nm}$). Since $\\lambda_{\\max} \\propto 1/T$, the blue star is much hotter."
    ],
    "stepByStepSolutionAr": [
      "الطول الموجي للضوء الأزرق أقصر من الأحمر، وقانون فين ينص على التناسب العكسي مع درجة الحرارة المطلقة، لذا يكون النجم الأزرق أسخن بكثير."
    ],
    "teacherTipEn": "Astronomers determine stellar surface temperatures directly from spectral color peaks.",
    "teacherTipAr": "يحدد علماء الفلك درجات حرارة أسطح النجوم مباشرة من تحديد قمة الإشعاع الطيفي."
  },
  {
    "id": "egbac_phys_ch5_db_easy_47",
    "titleEn": "Kinetic Energy of Photoelectron vs Light Intensity",
    "titleAr": "طاقة حركة الإلكترون الكهروضوئي ضد شدة الضوء",
    "difficulty": "easy",
    "questionEn": "A plot of maximum kinetic energy ($KE_{\\max}$) of emitted photoelectrons versus incident light intensity (for fixed $\\nu > \\nu_c$) is:",
    "questionAr": "الرسم البياني للعلاقة بين أقصى طاقة حركة للإلكترونات المنبعثة ($KE_{\\max}$) وشدة الضوء الساقط (عند ثبوت $\\nu > \\nu_c$) يمثل بـ:",
    "optionsEn": [
      "A straight line passing through the origin with positive slope",
      "A parabola curving steeply upward",
      "A horizontal straight line parallel to the intensity axis (kinetic energy is independent of intensity)",
      "A hyperbolic curve approaching zero asymptotically"
    ],
    "optionsAr": [
      "خط مستقيم يمر بنقطة الأصل ذو ميل موجب",
      "منحنى قطع مكافئ يتصاعد لأعلى بسرعة",
      "خط مستقيم أفقي موازٍ لمحور شدة الضوء (طاقة الحركة لا تعتمد على الشدة)",
      "منحنى قطع زائد يقترب من الصفر تناقصياً"
    ],
    "correctAnswer": "A horizontal straight line parallel to the intensity axis (kinetic energy is independent of intensity)",
    "correctIndex": 2,
    "hintEn": "$KE_{\\max} = h\\nu - W_e$ depends only on frequency, not intensity.",
    "hintAr": "طاقة الحركة تعتمد على تردد الضوء ودالة الشغل ولا تتأثر مطلقاً بشدة الضوء.",
    "stepByStepSolutionEn": [
      "Light intensity changes only the number of photons striking the plate per second, not the energy of individual photons. Thus $KE_{\\max}$ remains constant."
    ],
    "stepByStepSolutionAr": [
      "تؤثر شدة الضوء في عدد الفوتونات الساقطة بالثانية فقط وليس في طاقة كل فوتون، لذا تظل أقصى طاقة حركة للإلكترون ثابتة."
    ],
    "teacherTipEn": "This horizontal line graph is a frequent feature on physics final exams.",
    "teacherTipAr": "رسم بياني وزاري مشهور: خط أفقي موازٍ لمحور شدة الإشعاع يوضح استقلال طاقة الحركة عن الشدة."
  },
  {
    "id": "egbac_phys_ch5_db_easy_48",
    "titleEn": "Stopping Potential vs Frequency Graph Slope",
    "titleAr": "ميل خط جهد الإيقاف ضد التردد",
    "difficulty": "easy",
    "questionEn": "When plotting stopping potential ($V_s$) on the vertical axis versus photon frequency ($\\nu$) on the horizontal axis, the slope equals:",
    "questionAr": "عند رسم جهد الإيقاف ($V_s$) على المحور الرأسي ضد تردد الضوء ($\\nu$) على المحور الأفقي، فإن ميل الخط المستقيم يساوي:",
    "optionsEn": [
      "$h$ (Planck's constant alone)",
      "$\\frac{W_e}{h}$",
      "$e$ (elementary charge)",
      "$\\frac{h}{e}$ (Planck's constant divided by electron charge)"
    ],
    "optionsAr": [
      "$h$ (ثابت بلانك منفرداً)",
      "$\\frac{W_e}{h}$",
      "$e$ (شحنة الإلكترون منفرداً)",
      "$\\frac{h}{e}$ (ثابت بلانك مقسوماً على شحنة الإلكترون)"
    ],
    "correctAnswer": "$\\frac{h}{e}$ (Planck's constant divided by electron charge)",
    "correctIndex": 3,
    "hintEn": "$eV_s = h\\nu - W_e \\implies V_s = \\frac{h}{e}\\nu - \\frac{W_e}{e}$. Slope $= h/e$.",
    "hintAr": "بقسمة طرفي معادلة أينشتاين على $e$: $V_s = \\frac{h}{e}\\nu - \\frac{W_e}{e}$، فيكون الميل $\\frac{h}{e}$.",
    "stepByStepSolutionEn": [
      "From $eV_s = h\\nu - W_e$, solving for $V_s$ gives $V_s = \\left(\\frac{h}{e}\\right)\\nu - \\frac{W_e}{e}$. The slope is $\\frac{h}{e}$."
    ],
    "stepByStepSolutionAr": [
      "من المعادلة $V_s = \\frac{h}{e}\\nu - \\frac{W_e}{e}$، يمثل المعامل المضروب في $\\nu$ ميل الخط وهو $\\frac{h}{e}$."
    ],
    "teacherTipEn": "This experiment provides an accurate laboratory method to measure the ratio $h/e$.",
    "teacherTipAr": "تعتبر هذه التجربة من أدق الطرق المعملية لتعيين النسبة بين ثابت بلانك وشحنة الإلكترون."
  },
  {
    "id": "egbac_phys_ch5_db_easy_49",
    "titleEn": "Wavelength of Emitted Photon in Downward Transition",
    "titleAr": "الطول الموجي للفوتون المنبعث عند الانتقال لأسفل",
    "difficulty": "easy",
    "questionEn": "When an excited atomic electron drops from energy level $E_2$ to a lower level $E_1$, the wavelength of the emitted photon is:",
    "questionAr": "عند هبوط إلكترون ذرة مثارة من مستوى طاقة أعلى $E_2$ إلى مستوى طاقة أدنى $E_1$، فإن الطول الموجي للفوتون المنبعث يتعين من:",
    "optionsEn": [
      "$\\lambda = \\frac{hc}{E_2 - E_1}$",
      "$\\lambda = \\frac{E_2 - E_1}{hc}$",
      "$\\lambda = \\frac{h(E_2 - E_1)}{c}$",
      "$\\lambda = \\frac{c}{h(E_2 + E_1)}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{hc}{E_2 - E_1}$",
      "$\\lambda = \\frac{E_2 - E_1}{hc}$",
      "$\\lambda = \\frac{h(E_2 - E_1)}{c}$",
      "$\\lambda = \\frac{c}{h(E_2 + E_1)}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{hc}{E_2 - E_1}$",
    "correctIndex": 0,
    "hintEn": "$\\Delta E = h\\nu = \\frac{hc}{\\lambda} \\implies \\lambda = \\frac{hc}{\\Delta E}$.",
    "hintAr": "فارق الطاقة: $\\Delta E = \\frac{hc}{\\lambda} \\implies \\lambda = \\frac{hc}{\\Delta E}$.",
    "stepByStepSolutionEn": [
      "By Bohr's frequency condition, $\\Delta E = E_2 - E_1 = h\\nu = \\frac{hc}{\\lambda}$. Solving for $\\lambda$ yields $\\lambda = \\frac{hc}{E_2 - E_1}$."
    ],
    "stepByStepSolutionAr": [
      "ينص فرض بور على أن طاقة الفوتون المنبعث تساوي فرق الطاقة بين المستويين: $E_2 - E_1 = \\frac{hc}{\\lambda}$ ومنها $\\lambda = \\frac{hc}{E_2 - E_1}$."
    ],
    "teacherTipEn": "Make sure energies are in Joules before calculating wavelength in meters.",
    "teacherTipAr": "تأكد دائماً من تحويل طاقات المستويات إلى الجول قبل حساب الطول الموجي بالمتر."
  },
  {
    "id": "egbac_phys_ch5_db_easy_50",
    "titleEn": "Relation Between Photon Mass and Wavelength",
    "titleAr": "العلاقة بين كتلة الفوتون وطوله الموجي",
    "difficulty": "easy",
    "questionEn": "For two photons $A$ and $B$, if the wavelength of photon $A$ is three times that of photon $B$ ($\\lambda_A = 3\\lambda_B$), the ratio of their dynamic masses $\\frac{m_A}{m_B}$ is:",
    "questionAr": "فوتونان $A$ و $B$، إذا كان الطول الموجي للفوتون $A$ ثلاثة أمثال الطول الموجي للفوتون $B$ ($\\lambda_A = 3\\lambda_B$)، فإن النسبة بين كتلتيهما $\\frac{m_A}{m_B}$ تساوي:",
    "optionsEn": [
      "$3$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{9}$",
      "$9$"
    ],
    "optionsAr": [
      "$3$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{9}$",
      "$9$"
    ],
    "correctAnswer": "$\\frac{1}{3}$",
    "correctIndex": 1,
    "hintEn": "$m = \\frac{h}{c\\lambda} \\implies m \\propto \\frac{1}{\\lambda}$.",
    "hintAr": "العلاقة: $m \\propto \\frac{1}{\\lambda}$ تناسب عكسي بين الكتلة والطول الموجي.",
    "stepByStepSolutionEn": [
      "Since $m = \\frac{h}{c\\lambda}$, mass is inversely proportional to wavelength. Therefore, $\\frac{m_A}{m_B} = \\frac{\\lambda_B}{\\lambda_A} = \\frac{1}{3}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن كتلة الفوتون $m = \\frac{h}{c\\lambda}$، تتناسب الكتلة عكسياً مع الطول الموجي، فتكون النسبة $\\frac{m_A}{m_B} = \\frac{1}{3}$."
    ],
    "teacherTipEn": "The photon with the shorter wavelength is the more massive and energetic one.",
    "teacherTipAr": "الفوتون ذو الطول الموجي الأقصر يكون أكبر كتلة وأعلى طاقة وكمية تحرك."
  },
  {
    "id": "egbac_phys_ch5_db_easy_51",
    "titleEn": "Diffraction Condition for Light",
    "titleAr": "شرط حدوث حيود واضح للموجات",
    "difficulty": "easy",
    "questionEn": "A wave experiences pronounced diffraction when it encounters an obstacle or aperture whose dimensions are:",
    "questionAr": "تحدث ظاهرة الحيود للموجات بصورة واضحة عندما تمر بعائق أو فتحة تكون أبعادها:",
    "optionsEn": [
      "At least a million times larger than the wavelength",
      "Infinite in all dimensions",
      "Comparable to or smaller than the wavelength of the wave ($d \\approx \\lambda$)",
      "Zero under all vacuum conditions"
    ],
    "optionsAr": [
      "أكبر بمليون مرة على الأقل من الطول الموجي للموجة",
      "لانهائية في جميع الأبعاد الهندسية",
      "مقاربة للطول الموجي للموجة أو أصغر منه ($d \\approx \\lambda$)",
      "منعدمة تماماً في جميع ظروف الفراغ"
    ],
    "correctAnswer": "Comparable to or smaller than the wavelength of the wave ($d \\approx \\lambda$)",
    "correctIndex": 2,
    "hintEn": "Diffraction requires aperture size roughly matching wavelength.",
    "hintAr": "يحدث الحيود بوضوح عندما يقترب اتساع الفتحة من الطول الموجي للموجة.",
    "stepByStepSolutionEn": [
      "When $d \\gg \\lambda$, waves travel in rectilinear straight rays (geometric optics). When $d \\approx \\lambda$, wavefronts bend significantly around boundaries."
    ],
    "stepByStepSolutionAr": [
      "إذا كانت الفتحة كبيرة جداً ينتشر الضوء في خطوط مستقيمة، أما إذا قاربت أبعاد الفتحة الطول الموجي فتنحني الموجات وتظهر أهداب الحيود."
    ],
    "teacherTipEn": "This explains why light diffracts through micro-slits but sounds diffract easily through open doors.",
    "teacherTipAr": "لهذا يحيود الضوء في الفتحات المجهرية بينما يحيد الصوت بسهولة حول الأبواب لكبر طوله الموجي."
  },
  {
    "id": "egbac_phys_ch5_db_easy_52",
    "titleEn": "Photocell with Different Cathodes",
    "titleAr": "سلوك الخلية الكهروضوئية مع مهابط مختلفة",
    "difficulty": "easy",
    "questionEn": "Two photocells with cathodes made of zinc ($W_e = 4.3\\text{ eV}$) and cesium ($W_e = 2.14\\text{ eV}$) are illuminated with identical ultraviolet light ($h\\nu = 5.0\\text{ eV}$). The photoelectrons emitted from the cesium photocell will have:",
    "questionAr": "خليتان كهروضوئيتان مهبطاهما من الخارصين ($W_e = 4.3\\text{ eV}$) والسيزيوم ($W_e = 2.14\\text{ eV}$) سقط عليهما نفس الضوء فوق البنفسجي ($h\\nu = 5.0\\text{ eV}$). فإن الإلكترونات المنبعثة من مهبط السيزيوم تمتلك:",
    "optionsEn": [
      "The identical kinetic energy because the incident light is identical",
      "Lower velocity because cesium atoms are heavier than zinc atoms",
      "Zero kinetic energy because ultraviolet light is completely absorbed",
      "Greater maximum kinetic energy and higher maximum speed than those from zinc"
    ],
    "optionsAr": [
      "نفس طاقة الحركة تماماً لتساوي طاقة الضوء الساقط في الحالتين",
      "سرعة أقل لأن ذرات السيزيوم أثقل من ذرات الخارصين",
      "طاقة حركة منعدمة لامتصاص الأشعة فوق البنفسجية بالكامل",
      "أقصى طاقة حركة وأقصى سرعة أكبر من المنبعثة من مهبط الخارصين"
    ],
    "correctAnswer": "Greater maximum kinetic energy and higher maximum speed than those from zinc",
    "correctIndex": 3,
    "hintEn": "$KE_{\\max} = h\\nu - W_e$. Smaller $W_e \\implies$ larger $KE_{\\max}$.",
    "hintAr": "العلاقة: $KE = h\\nu - W_e$، الفلز ذو دالة الشغل الأصغر يعطي إلكترونات أسرع وأعلى طاقة حركة.",
    "stepByStepSolutionEn": [
      "For cesium: $KE = 5.0 - 2.14 = 2.86\\text{ eV}$. For zinc: $KE = 5.0 - 4.3 = 0.7\\text{ eV}$. The cesium photoelectrons have much greater kinetic energy."
    ],
    "stepByStepSolutionAr": [
      "للسيزيوم: $KE = 5.0 - 2.14 = 2.86\\text{ eV}$، وللخارصين: $KE = 5.0 - 4.3 = 0.7\\text{ eV}$، فتكون إلكترونات السيزيوم أسرع وأعلى طاقة."
    ],
    "teacherTipEn": "Metals with low work functions yield faster electrons for the same incident frequency.",
    "teacherTipAr": "الفلز ذو دالة الشغل الأقل يتحرر منه إلكترونات بفائض طاقة حركة أكبر لنفس التردد الساقط."
  },
  {
    "id": "egbac_phys_ch5_db_easy_53",
    "titleEn": "Role of Fluorescent Screen in CRT",
    "titleAr": "دور الشاشة الفلورية في أنبوبة أشعة الكاثود",
    "difficulty": "easy",
    "questionEn": "The fluorescent coating on the inside of a television CRT screen glows when struck by:",
    "questionAr": "يتوهج الطلاء الفلوري على الجدار الداخلي لشاشة أنبوبة أشعة الكاثود عند اصطدامه بـ:",
    "optionsEn": [
      "Energetic electrons transferring their kinetic energy to the phosphor coating",
      "Thermal infrared radiation emitted from the heating filament",
      "Radio waves captured by the television antenna",
      "Positive ions circulating in the anode chamber"
    ],
    "optionsAr": [
      "الإلكترونات عالية الطاقة ناقلة طاقتها الحركية إلى ذرات الطلاء الفلوري",
      "الأشعة تحت الحمراء الحرارية الصادرة عن فتيلة التسخين",
      "موجات الراديو الملتقطة بهوائي جهاز التلفاز",
      "الأيونات الموجبة الدوارة في غرفة المصعد"
    ],
    "correctAnswer": "Energetic electrons transferring their kinetic energy to the phosphor coating",
    "correctIndex": 0,
    "hintEn": "Phosphors absorb electron kinetic energy and re-emit visible photons.",
    "hintAr": "تمتص المادة الفلورية طاقة حركة الإلكترونات وتعيد إشعاعها كفوتونات ضوء مرئي.",
    "stepByStepSolutionEn": [
      "Fluorescence is the phenomenon where a substance absorbs energetic particles and immediately re-emits visible light."
    ],
    "stepByStepSolutionAr": [
      "الفلورية هي خاصية امتصاص طاقة الإلكترونات السريعة وإعادة إشعاعها في نطاق الضوء المرئي."
    ],
    "teacherTipEn": "Zinc sulfide is a common fluorescent material used in CRT screens.",
    "teacherTipAr": "كبريتيد الخارصين مادة فلورية شهيرة تستخدم لطلاء الشاشات."
  },
  {
    "id": "egbac_phys_ch5_db_easy_54",
    "titleEn": "Stopping Potential Independence of Intensity",
    "titleAr": "استقلال جهد الإيقاف عن شدة الضوء",
    "difficulty": "easy",
    "questionEn": "If the intensity of light falling on a photocell is increased threefold while keeping its frequency constant, the stopping potential ($V_s$):",
    "questionAr": "إذا زادت شدة الضوء الساقط على خلية كهروضوئية إلى ثلاثة أمثالها مع ثبوت تردده، فإن جهد الإيقاف ($V_s$):",
    "optionsEn": [
      "Triples to three times its initial value",
      "Remains completely unchanged",
      "Decreases to one-third",
      "Drops instantly to zero"
    ],
    "optionsAr": [
      "يزداد إلى ثلاثة أمثال قيمته الأصلية",
      "يظل ثابتاً دون أي تغيير",
      "يقل إلى ثلث قيمته الأصلية",
      "يهبط لحظياً إلى الصفر"
    ],
    "correctAnswer": "Remains completely unchanged",
    "correctIndex": 1,
    "hintEn": "$eV_s = KE_{\\max} = h\\nu - W_e$. Intensity does not appear in this equation.",
    "hintAr": "جهد الإيقاف يعتمد على التردد ودالة الشغل فقط: $eV_s = h\\nu - W_e$.",
    "stepByStepSolutionEn": [
      "Stopping potential depends solely on the energy of the individual photons ($h\\nu$) and the work function ($W_e$). Increasing intensity adds more photons but doesn't change their individual energy."
    ],
    "stepByStepSolutionAr": [
      "جهد الإيقاف مقياس لطاقة حركة أسرع إلكترون، وبما أن طاقة الفوتون ثابتة بثبوت التردد فإن طاقة الحركة وجهد الإيقاف يظلان ثابتين."
    ],
    "teacherTipEn": "Only the saturation photocurrent will increase threefold.",
    "teacherTipAr": "الذي يزداد لثلاثة أمثاله هو شدة تيار التشبع الكهروضوئي فقط."
  },
  {
    "id": "egbac_phys_ch5_db_easy_55",
    "titleEn": "Photon Frequency Formula from Momentum",
    "titleAr": "حساب تردد الفوتون من كمية تحركه",
    "difficulty": "easy",
    "questionEn": "The frequency $\\nu$ of a photon having linear momentum $p$ is given by:",
    "questionAr": "يتعين تردد الفوتون $\\nu$ الذي يمتلك كمية تحرك خطية $p$ من العلاقة:",
    "optionsEn": [
      "$\\nu = \\frac{h}{p c}$",
      "$\\nu = \\frac{p h}{c}$",
      "$\\nu = \\frac{p c}{h}$",
      "$\\nu = \\frac{c}{p h}$"
    ],
    "optionsAr": [
      "$\\nu = \\frac{h}{p c}$",
      "$\\nu = \\frac{p h}{c}$",
      "$\\nu = \\frac{p c}{h}$",
      "$\\nu = \\frac{c}{p h}$"
    ],
    "correctAnswer": "$\\nu = \\frac{p c}{h}$",
    "correctIndex": 2,
    "hintEn": "$p = \\frac{h\\nu}{c} \\implies \\nu = \\frac{pc}{h}$.",
    "hintAr": "العلاقة: $p = \\frac{h\\nu}{c} \\implies \\nu = \\frac{pc}{h}$.",
    "stepByStepSolutionEn": [
      "Since momentum is $p = \\frac{h\\nu}{c}$, rearranging for frequency gives $\\nu = \\frac{pc}{h}$."
    ],
    "stepByStepSolutionAr": [
      "من علاقة كمية التحرك $p = \\frac{h\\nu}{c}$، بقسمة الطرفين ينتج $\\nu = \\frac{pc}{h}$."
    ],
    "teacherTipEn": "This directly links photon momentum with its wave frequency.",
    "teacherTipAr": "تربط هذه العلاقة المباشرة بين كمية تحرك الفوتون وتردده الموجي."
  },
  {
    "id": "egbac_phys_ch5_db_easy_56",
    "titleEn": "de Broglie Wavelength of Gas Molecules",
    "titleAr": "طول موجة دي برولي لجزيئات الغاز المتحركة حرارياً",
    "difficulty": "easy",
    "questionEn": "When the temperature of a gas is raised, the average thermal speed of its molecules increases. Consequently, their de Broglie wavelength:",
    "questionAr": "عند رفع درجة حرارة غاز، تزداد السرعة الحرارية المتوسطة لجزيئاته. ونتيجة لذلك فإن الطول الموجي لموجات دي برولي المصاحبة لحركتها:",
    "optionsEn": [
      "Increases proportionally to the temperature in Celsius",
      "Remains constant because molecule mass does not change",
      "Becomes infinite as molecules become classical",
      "Decreases because wavelength is inversely proportional to momentum"
    ],
    "optionsAr": [
      "يزداد بنسبة طردية مع درجة الحرارة السيلزيوسية",
      "يظل ثابتاً لأن كتلة جزيء الغاز لا تتغير",
      "يصبح لانهائياً لتحول الجزيئات لجسيمات كلاسيكية",
      "يقل لأن الطول الموجي يتناسب عكسياً مع كمية التحرك"
    ],
    "correctAnswer": "Decreases because wavelength is inversely proportional to momentum",
    "correctIndex": 3,
    "hintEn": "$T \\uparrow \\implies v \\uparrow \\implies p \\uparrow \\implies \\lambda = h/p \\downarrow$.",
    "hintAr": "زيادة الحرارة تزيد السرعة فيزيد كمية التحرك ويقل الطول الموجي.",
    "stepByStepSolutionEn": [
      "Higher temperature increases thermal kinetic energy and velocity $v$. Since $\\lambda = \\frac{h}{mv}$, increasing $v$ reduces the de Broglie wavelength."
    ],
    "stepByStepSolutionAr": [
      "بارتفاع درجة الحرارة تزداد سرعة الجزيئات وتزداد كمية تحركها $mv$ فيقل طول موجة دي برولي المصاحبة لها."
    ],
    "teacherTipEn": "At ultra-low temperatures (near absolute zero), de Broglie wavelength becomes large, leading to Bose-Einstein condensation.",
    "teacherTipAr": "عند درجات الحرارة متناهية الصغر يقترب الطول الموجي من المسافات البينية وتتداخل الموجات المادية مكونة تكاثف بوز-أينشتاين."
  },
  {
    "id": "egbac_phys_ch5_db_easy_57",
    "titleEn": "Photoelectric Current vs Voltage Characteristic Curve",
    "titleAr": "منحنى خواص التيار الكهروضوئي مع فرق الجهد",
    "difficulty": "easy",
    "questionEn": "In the characteristic $I-V$ curve of a vacuum photocell, the current reaches a constant maximum value called:",
    "questionAr": "في منحنى الخواص المميز للخلية الكهروضوئية ($I-V$)، يثبت التيار عند قيمة عظمى تسمى:",
    "optionsEn": [
      "Saturation photocurrent, where all emitted electrons are collected by the anode",
      "Breakdown reverse current due to dielectric ionization",
      "Zero-point vacuum current",
      "Resonance alternating current"
    ],
    "optionsAr": [
      "تيار التشبع الكهروضوئي، حيث ينجذب كل الإلكترونات المنبعثة من المهبط إلى المصعد",
      "تيار الانهيار العكسي الناتج عن تأين الوسط العازل",
      "تيار نقطة الصفر للفراغ الكمومي",
      "التيار المتردد الرنيني التوافقي"
    ],
    "correctAnswer": "Saturation photocurrent, where all emitted electrons are collected by the anode",
    "correctIndex": 0,
    "hintEn": "Increasing positive anode voltage collects 100% of emitted electrons.",
    "hintAr": "بزيادة الجهد الموجب للمصعد ينجذب جميع الإلكترونات المنبعثة فيثبت التيار عند تيار التشبع.",
    "stepByStepSolutionEn": [
      "Once the anode is positive enough to capture every emitted electron, further increases in voltage cannot increase the current. This limit is the saturation current."
    ],
    "stepByStepSolutionAr": [
      "عندما يصبح جهد المصعد موجباً بدرجة كافية لالتقاط جميع الإلكترونات المنبعثة، يثبت التيار ويسمى تيار التشبع."
    ],
    "teacherTipEn": "Saturation current increases only if incident light intensity is increased.",
    "teacherTipAr": "لا يزداد تيار التشبع إلا بزيادة شدة الضوء الساقط (عدد الفوتونات بالثانية)."
  },
  {
    "id": "egbac_phys_ch5_db_easy_58",
    "titleEn": "Experimental Proof of Electron Waves",
    "titleAr": "الأساس الكمي لازدواجية الفوتون والإلكترون",
    "difficulty": "easy",
    "questionEn": "The experimental proof that electrons have wave properties was provided by electron diffraction, which proved that:",
    "questionAr": "التأكيد التجريبي على تمتع الإلكترونات بخصائص موجية جاء عن طريق تجارب حيود الإلكترونات، مما أثبت أن:",
    "optionsEn": [
      "Electrons are massless packets of pure energy",
      "Wave-particle duality is a universal law governing both matter and radiation",
      "Electrons can never be localized at any point in space",
      "Newtonian classical mechanics is accurate at all atomic scales"
    ],
    "optionsAr": [
      "الإلكترونات جسيمات منعدمة الكتلة مكونة من طاقة نقية",
      "ازدواجية الموجة والجسيم قانون كوني عام ينطبق على المادة كما ينطبق على الإشعاع",
      "الإلكترونات لا يمكن تحديد موضعها في أي نقطة في الفضاء",
      "ميكانيكا نيوتن الكلاسيكية صحيحة ودقيقة لجميع المقاييس الذرية"
    ],
    "correctAnswer": "Wave-particle duality is a universal law governing both matter and radiation",
    "correctIndex": 1,
    "hintEn": "Davisson and Germer observed diffraction rings with electron beams.",
    "hintAr": "تجربة دافيسون وجيرمر أثبتت حيود الإلكترونات في بلورات النيكل مؤكدة فرض دي برولي.",
    "stepByStepSolutionEn": [
      "Just as light (classically a wave) has particle properties, electrons (classically particles) exhibit wave properties such as diffraction and interference."
    ],
    "stepByStepSolutionAr": [
      "كما أثبتت التجارب أن الضوء يسلك سلوك الجسيمات، أثبت حيود الإلكترونات أن الجسيمات المادية تسلك سلوك الموجات."
    ],
    "teacherTipEn": "This unified quantum view earned Louis de Broglie the Nobel Prize in Physics.",
    "teacherTipAr": "وحصل لويس دي برولي على جائزة نوبل بعد التأكيد المعملي لفرضيته الثورية."
  }
],
  medium: [
  {
    "id": "egbac_phys_ch5_db_med_01",
    "titleEn": "Blue Photon Energy Calculation",
    "titleAr": "حساب طاقة فوتون الضوء الأزرق",
    "difficulty": "medium",
    "questionEn": "Calculate the energy of a single photon of blue light having a frequency of $\\nu = 6.0 \\times 10^{14}\\text{ Hz}$ (take $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$):",
    "questionAr": "احسب طاقة فوتون واحد من الضوء الأزرق تردده $\\nu = 6.0 \\times 10^{14}\\text{ Hz}$ (علماً بأن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$):",
    "optionsEn": [
      "$E \\approx 3.975 \\times 10^{-19}\\text{ J} \\approx 2.48\\text{ eV}$",
      "$E \\approx 1.10 \\times 10^{-48}\\text{ J}$",
      "$E \\approx 9.06 \\times 10^{47}\\text{ J}$",
      "$E \\approx 5.50 \\times 10^{-19}\\text{ J}$"
    ],
    "optionsAr": [
      "$E \\approx 3.975 \\times 10^{-19}\\text{ J} \\approx 2.48\\text{ eV}$",
      "$E \\approx 1.10 \\times 10^{-48}\\text{ J}$",
      "$E \\approx 9.06 \\times 10^{47}\\text{ J}$",
      "$E \\approx 5.50 \\times 10^{-19}\\text{ J}$"
    ],
    "correctAnswer": "$E \\approx 3.975 \\times 10^{-19}\\text{ J} \\approx 2.48\\text{ eV}$",
    "correctIndex": 0,
    "hintEn": "Use Planck relation $E = h\\nu$.",
    "hintAr": "طبق علاقة بلانك $E = h\\nu$.",
    "stepByStepSolutionEn": [
      "$E = h\\nu = (6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}) \\times (6.0 \\times 10^{14}\\text{ s}^{-1}) = 3.975 \\times 10^{-19}\\text{ J}$. Dividing by $1.6 \\times 10^{-19}$ gives $2.48\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$E = h\\nu = (6.625 \\times 10^{-34}) \\times (6.0 \\times 10^{14}) = 3.975 \\times 10^{-19}\\text{ جول} = 2.48\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "To convert from Joules to electron-volts, divide by $1.6 \\times 10^{-19}\\text{ J/eV}$.",
    "teacherTipAr": "للتحويل من الجول إلى الإلكترون فولت نقسم دائماً على شحنة الإلكترون $1.6 \\times 10^{-19}$."
  },
  {
    "id": "egbac_phys_ch5_db_med_02",
    "titleEn": "Wien Law for Stellar Surface Temperature",
    "titleAr": "تطبيق قانون فين لحساب درجة حرارة سطح نجم",
    "difficulty": "medium",
    "questionEn": "The peak emission wavelength of solar radiation is $\\lambda_{\\max} = 500\\text{ nm}$ at $T = 6000\\text{ K}$. A distant star emits radiation with peak intensity at $\\lambda_{\\max} = 400\\text{ nm}$. The star surface temperature is:",
    "questionAr": "الطول الموجي المصاحب لأقصى شدة إشعاع للشمس هو $\\lambda_{\\max} = 500\\text{ nm}$ عند $T = 6000\\text{ K}$. فإذا كان الطول الموجي لأقصى شدة إشعاع لنجم آخر هو $400\\text{ nm}$، فإن درجة حرارة سطح هذا النجم تساوي:",
    "optionsEn": [
      "$T = 4800\\text{ K}$",
      "$T = 7500\\text{ K}$",
      "$T = 8500\\text{ K}$",
      "$T = 6500\\text{ K}$"
    ],
    "optionsAr": [
      "$T = 4800\\text{ K}$",
      "$T = 7500\\text{ K}$",
      "$T = 8500\\text{ K}$",
      "$T = 6500\\text{ K}$"
    ],
    "correctAnswer": "$T = 7500\\text{ K}$",
    "correctIndex": 1,
    "hintEn": "Wien's law: $\\frac{\\lambda_1}{\\lambda_2} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: تناسب عكسي بين $\\lambda_{\\max}$ ودرجة الحرارة المطلقة $T$.",
    "stepByStepSolutionEn": [
      "$\\frac{T_{\\text{star}}}{T_{\\text{sun}}} = \\frac{\\lambda_{\\max, \\text{sun}}}{\\lambda_{\\max, \\text{star}}} = \\frac{500}{400} = 1.25 \\implies T_{\\text{star}} = 1.25 \\times 6000\\text{ K} = 7500\\text{ K}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{T_{\\text{star}}}{6000} = \\frac{500}{400} = 1.25 \\implies T_{\\text{star}} = 7500\\text{ كلفن}$."
    ],
    "teacherTipEn": "Notice the inverse proportionality: shorter peak wavelength corresponds to a hotter emitting body.",
    "teacherTipAr": "تذكر دائماً أن التناسب عكسي في قانون فين: الطول الموجي الأقصر يعني درجة حرارة أعلى."
  },
  {
    "id": "egbac_phys_ch5_db_med_03",
    "titleEn": "Laser Radiation Force on Mirror",
    "titleAr": "القوة المؤثرة بحزمة ليزر على مرآة عاكسة",
    "difficulty": "medium",
    "questionEn": "A continuous laser beam of power $P = 600\\text{ MW}$ strikes a completely reflecting mirror perpendicularly. The total radiation force exerted on the mirror is:",
    "questionAr": "تسقط حزمة ليزر مستمرة قدرتها $P = 600\\text{ MW}$ عمودياً على مرآة مستوية تامة الانعكاس. القوة الكلية التي يؤثر بها شعاع الليزر على المرآة تساوي:",
    "optionsEn": [
      "$F = 2.0\\text{ N}$",
      "$F = 1.8 \\times 10^8\\text{ N}$",
      "$F = 4.0\\text{ N}$",
      "$F = 0.5\\text{ N}$"
    ],
    "optionsAr": [
      "$F = 2.0\\text{ N}$",
      "$F = 1.8 \\times 10^8\\text{ N}$",
      "$F = 4.0\\text{ N}$",
      "$F = 0.5\\text{ N}$"
    ],
    "correctAnswer": "$F = 4.0\\text{ N}$",
    "correctIndex": 2,
    "hintEn": "For reflection, $F = \\frac{2P}{c}$.",
    "hintAr": "في حالة الانعكاس التام: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 600 \\times 10^6\\text{ W}}{3 \\times 10^8\\text{ m/s}} = \\frac{12 \\times 10^8}{3 \\times 10^8} = 4.0\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 600 \\times 10^6}{3 \\times 10^8} = 4\\text{ نيوتن}$."
    ],
    "teacherTipEn": "For complete reflection the momentum change of each photon is $2p$, so force is $2P/c$. For complete absorption it is $P/c$.",
    "teacherTipAr": "في حالة الانعكاس التام يتضاعف التغير في كمية التحرك فيكون $F = 2P/c$، بينما في الامتصاص التام $F = P/c$."
  },
  {
    "id": "egbac_phys_ch5_db_med_04",
    "titleEn": "Photon Emission Rate of Radio Transmitter",
    "titleAr": "معدل انبعاث الفوتونات من محطة إرسال إذاعي",
    "difficulty": "medium",
    "questionEn": "A radio transmitter operates with an output power of $P = 100\\text{ kW}$ at a frequency of $\\nu = 100\\text{ MHz}$. The number of photons emitted per second is approximately:",
    "questionAr": "محطة إذاعية تبث بقدرة $P = 100\\text{ kW}$ عند تردد $\\nu = 100\\text{ MHz}$. عدد الفوتونات المنبعثة في الثانية الواحدة يساوي تقريباً:",
    "optionsEn": [
      "$\\Phi_L \\approx 1.51 \\times 10^{24}\\text{ photons/s}$",
      "$\\Phi_L \\approx 6.63 \\times 10^{-26}\\text{ photons/s}$",
      "$\\Phi_L \\approx 3.0 \\times 10^{18}\\text{ photons/s}$",
      "$\\Phi_L \\approx 1.51 \\times 10^{30}\\text{ photons/s}$"
    ],
    "optionsAr": [
      "$\\Phi_L \\approx 1.51 \\times 10^{24}\\text{ فوتون/ثانية}$",
      "$\\Phi_L \\approx 6.63 \\times 10^{-26}\\text{ فوتون/ثانية}$",
      "$\\Phi_L \\approx 3.0 \\times 10^{18}\\text{ فوتون/ثانية}$",
      "$\\Phi_L \\approx 1.51 \\times 10^{30}\\text{ فوتون/ثانية}$"
    ],
    "correctAnswer": "$\\Phi_L \\approx 1.51 \\times 10^{30}\\text{ photons/s}$",
    "correctIndex": 3,
    "hintEn": "$\\Phi_L = \\frac{P}{h\\nu}$.",
    "hintAr": "معدل انبعاث الفوتونات $\\Phi_L = \\frac{P}{h\\nu}$.",
    "stepByStepSolutionEn": [
      "Energy of one photon: $E = h\\nu = (6.625 \\times 10^{-34}) \\times (100 \\times 10^6) = 6.625 \\times 10^{-26}\\text{ J}$. Rate $\\Phi_L = \\frac{P}{E} = \\frac{10^5}{6.625 \\times 10^{-26}} \\approx 1.51 \\times 10^{30}\\text{ photons/s}$."
    ],
    "stepByStepSolutionAr": [
      "طاقة الفوتون الواحد $E = h\\nu = 6.625 \\times 10^{-26}\\text{ جول}$. إذن $\\Phi_L = \\frac{P}{h\\nu} = \\frac{100 \\times 10^3}{6.625 \\times 10^{-26}} \\approx 1.51 \\times 10^{30}\\text{ فوتون/ثانية}$."
    ],
    "teacherTipEn": "At low radio frequencies, photon energy is minuscule, so astronomical numbers of photons are emitted per second, making radiation appear continuous.",
    "teacherTipAr": "في الترددات الإذاعية تكون طاقة الفوتون بالغة الضآلة، لذا ينبعث عدد فلكي هائل من الفوتونات في الثانية فيظهر الإشعاع كأمواج متصلة كلاسيكياً."
  },
  {
    "id": "egbac_phys_ch5_db_med_05",
    "titleEn": "Threshold Frequency of Zinc Metal",
    "titleAr": "التردد الحرج لمعدن الخارصين",
    "difficulty": "medium",
    "questionEn": "The work function of zinc is $W_e = 4.24\\text{ eV}$. What is the threshold frequency $\\nu_c$ below which no photoelectrons can be ejected?",
    "questionAr": "دالة الشغل لمعدن الخارصين تساوي $W_e = 4.24\\text{ eV}$. ما هو التردد الحرج $\\nu_c$ الذي لا تنبعث تحته أي إلكترونات ضوئية؟",
    "optionsEn": [
      "$\\nu_c \\approx 1.024 \\times 10^{15}\\text{ Hz}$",
      "$\\nu_c \\approx 6.40 \\times 10^{14}\\text{ Hz}$",
      "$\\nu_c \\approx 2.81 \\times 10^{15}\\text{ Hz}$",
      "$\\nu_c \\approx 4.55 \\times 10^{13}\\text{ Hz}$"
    ],
    "optionsAr": [
      "$\\nu_c \\approx 1.024 \\times 10^{15}\\text{ Hz}$",
      "$\\nu_c \\approx 6.40 \\times 10^{14}\\text{ Hz}$",
      "$\\nu_c \\approx 2.81 \\times 10^{15}\\text{ Hz}$",
      "$\\nu_c \\approx 4.55 \\times 10^{13}\\text{ Hz}$"
    ],
    "correctAnswer": "$\\nu_c \\approx 1.024 \\times 10^{15}\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "Convert $W_e$ to Joules: $W_e = 4.24 \\times 1.6 \\times 10^{-19}\\text{ J}$, then $\\nu_c = W_e / h$.",
    "hintAr": "حول دالة الشغل للجول ثم احسب $\\nu_c = W_e / h$.",
    "stepByStepSolutionEn": [
      "$W_e = 4.24 \\times 1.6 \\times 10^{-19}\\text{ J} = 6.784 \\times 10^{-19}\\text{ J}$. $\\nu_c = \\frac{6.784 \\times 10^{-19}}{6.625 \\times 10^{-34}} \\approx 1.024 \\times 10^{15}\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\nu_c = \\frac{W_e}{h} = \\frac{4.24 \\times 1.6 \\times 10^{-19}}{6.625 \\times 10^{-34}} \\approx 1.024 \\times 10^{15}\\text{ هرتز}$ (يقع في نطاق الأشعة فوق البنفسجية)."
    ],
    "teacherTipEn": "Because $\\nu_c$ for zinc lies in the ultraviolet region, visible light cannot produce photoelectric emission from zinc.",
    "teacherTipAr": "بما أن التردد الحرج للخارصين يقع في نطاق الأشعة فوق البنفسجية، فإن الضوء المرئي بجميع ألوانه يعجز عن تحرير إلكترونات منه."
  },
  {
    "id": "egbac_phys_ch5_db_med_06",
    "titleEn": "Photoelectric Kinetic Energy on Cesium Cathode",
    "titleAr": "أقصى طاقة حركة لإلكترون متحرر من مهبط السيزيوم",
    "difficulty": "medium",
    "questionEn": "A cesium photocathode ($W_e = 1.9\\text{ eV}$) is illuminated by monochromatic light of photon energy $E = 3.1\\text{ eV}$. The maximum kinetic energy $KE_{\\max}$ of emitted electrons is:",
    "questionAr": "يسقط ضوء أحادي اللون طاقة فوتوناته $E = 3.1\\text{ eV}$ على مهبط خلية كهروضوئية من السيزيوم ($W_e = 1.9\\text{ eV}$). فإن أقصى طاقة حركة $KE_{\\max}$ للإلكترونات المنبعثة تساوي:",
    "optionsEn": [
      "$KE_{\\max} = 5.0\\text{ eV} = 8.0 \\times 10^{-19}\\text{ J}$",
      "$KE_{\\max} = 1.2\\text{ eV} = 1.92 \\times 10^{-19}\\text{ J}$",
      "$KE_{\\max} = 2.4\\text{ eV} = 3.84 \\times 10^{-19}\\text{ J}$",
      "$KE_{\\max} = 0.6\\text{ eV} = 0.96 \\times 10^{-19}\\text{ J}$"
    ],
    "optionsAr": [
      "$KE_{\\max} = 5.0\\text{ eV} = 8.0 \\times 10^{-19}\\text{ J}$",
      "$KE_{\\max} = 1.2\\text{ eV} = 1.92 \\times 10^{-19}\\text{ J}$",
      "$KE_{\\max} = 2.4\\text{ eV} = 3.84 \\times 10^{-19}\\text{ J}$",
      "$KE_{\\max} = 0.6\\text{ eV} = 0.96 \\times 10^{-19}\\text{ J}$"
    ],
    "correctAnswer": "$KE_{\\max} = 1.2\\text{ eV} = 1.92 \\times 10^{-19}\\text{ J}$",
    "correctIndex": 1,
    "hintEn": "Einstein's photoelectric equation: $KE_{\\max} = h\\nu - W_e$.",
    "hintAr": "معادلة أينشتاين الكهروضوئية: $KE_{\\max} = E - W_e$.",
    "stepByStepSolutionEn": [
      "$KE_{\\max} = E - W_e = 3.1\\text{ eV} - 1.9\\text{ eV} = 1.2\\text{ eV}$. In Joules: $1.2 \\times 1.6 \\times 10^{-19} = 1.92 \\times 10^{-19}\\text{ J}$."
    ],
    "stepByStepSolutionAr": [
      "$KE_{\\max} = 3.1 - 1.9 = 1.2\\text{ إلكترون فولت} = 1.92 \\times 10^{-19}\\text{ جول}$."
    ],
    "teacherTipEn": "All excess photon energy beyond the work function is imparted to the ejected photoelectron as kinetic energy.",
    "teacherTipAr": "فائض طاقة الفوتون الساقط عن دالة الشغل يكتسبه الإلكترون المتحرر في صورة طاقة حركة."
  },
  {
    "id": "egbac_phys_ch5_db_med_07",
    "titleEn": "Stopping Potential from Maximum Kinetic Energy",
    "titleAr": "حساب جهد الإيقاف من أقصى طاقة حركة",
    "difficulty": "medium",
    "questionEn": "If the maximum kinetic energy of photoelectrons emitted from a metallic surface is $KE_{\\max} = 4.8 \\times 10^{-19}\\text{ J}$, the stopping (cutoff) potential $V_s$ required to halt the photocurrent is:",
    "questionAr": "إذا كانت أقصى طاقة حركة للإلكترونات الضوئية المنبعثة من سطح فلز هي $KE_{\\max} = 4.8 \\times 10^{-19}\\text{ J}$، فإن جهد الإيقاف $V_s$ اللازم لوقف تيار الخلية تماماً يساوي:",
    "optionsEn": [
      "$V_s = 1.5\\text{ V}$",
      "$V_s = 4.8\\text{ V}$",
      "$V_s = 3.0\\text{ V}$",
      "$V_s = 7.68\\text{ V}$"
    ],
    "optionsAr": [
      "$V_s = 1.5\\text{ V}$",
      "$V_s = 4.8\\text{ V}$",
      "$V_s = 3.0\\text{ V}$",
      "$V_s = 7.68\\text{ V}$"
    ],
    "correctAnswer": "$V_s = 3.0\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "$eV_s = KE_{\\max} \\implies V_s = \\frac{KE_{\\max}}{e}$.",
    "hintAr": "$V_s = \\frac{KE_{\\max}}{e}$.",
    "stepByStepSolutionEn": [
      "$V_s = \\frac{4.8 \\times 10^{-19}\\text{ J}}{1.6 \\times 10^{-19}\\text{ C}} = 3.0\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$V_s = \\frac{4.8 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 3.0\\text{ فولت}$."
    ],
    "teacherTipEn": "Notice the numerical equivalence: an energy of $3.0\\text{ eV}$ requires exactly a stopping potential of $3.0\\text{ V}$.",
    "teacherTipAr": "لاحظ التوافق العددي: طاقة حركة قدرها $3.0\\text{ eV}$ يلزمها تماماً جهد إيقاف قدره $3.0\\text{ V}$."
  },
  {
    "id": "egbac_phys_ch5_db_med_08",
    "titleEn": "Maximum Velocity of Photoelectrons",
    "titleAr": "أقصى سرعة للإلكترونات الضوئية المنبعثة",
    "difficulty": "medium",
    "questionEn": "Photoelectrons are emitted from a cathode with $KE_{\\max} = 1.82 \\times 10^{-19}\\text{ J}$. Given electron mass $m_e = 9.1 \\times 10^{-31}\\text{ kg}$, their maximum emission velocity $v_{\\max}$ is:",
    "questionAr": "تنبعث إلكترونات ضوئية من مهبط بأقصى طاقة حركة $KE_{\\max} = 1.82 \\times 10^{-19}\\text{ J}$. علماً بأن كتلة الإلكترون $m_e = 9.1 \\times 10^{-31}\\text{ kg}$، فإن أقصى سرعة انبعاث $v_{\\max}$ تساوي:",
    "optionsEn": [
      "$v_{\\max} \\approx 4.0 \\times 10^{11}\\text{ m/s}$",
      "$v_{\\max} \\approx 2.0 \\times 10^5\\text{ m/s}$",
      "$v_{\\max} \\approx 3.0 \\times 10^8\\text{ m/s}$",
      "$v_{\\max} \\approx 6.32 \\times 10^5\\text{ m/s}$"
    ],
    "optionsAr": [
      "$v_{\\max} \\approx 4.0 \\times 10^{11}\\text{ m/s}$",
      "$v_{\\max} \\approx 2.0 \\times 10^5\\text{ m/s}$",
      "$v_{\\max} \\approx 3.0 \\times 10^8\\text{ m/s}$",
      "$v_{\\max} \\approx 6.32 \\times 10^5\\text{ m/s}$"
    ],
    "correctAnswer": "$v_{\\max} \\approx 6.32 \\times 10^5\\text{ m/s}$",
    "correctIndex": 3,
    "hintEn": "$KE = \\frac{1}{2} m_e v^2 \\implies v = \\sqrt{\\frac{2 KE}{m_e}}$.",
    "hintAr": "$v = \\sqrt{\\frac{2 KE}{m_e}}$.",
    "stepByStepSolutionEn": [
      "$v = \\sqrt{\\frac{2 \\times 1.82 \\times 10^{-19}\\text{ J}}{9.1 \\times 10^{-31}\\text{ kg}}} = \\sqrt{0.4 \\times 10^{12}} = \\sqrt{4.0 \\times 10^{11}} \\approx 6.32 \\times 10^5\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "$v = \\sqrt{\\frac{2 \\times 1.82 \\times 10^{-19}}{9.1 \\times 10^{-31}}} = \\sqrt{4 \\times 10^{11}} \\approx 6.32 \\times 10^5\\text{ م/ث}$."
    ],
    "teacherTipEn": "Always remember the factor of 2 under the square root when converting kinetic energy to velocity.",
    "teacherTipAr": "تذكر دائماً ضرب طاقة الحركة في 2 قبل القسمة على الكتلة وأخذ الجذر التربيعي."
  },
  {
    "id": "egbac_phys_ch5_db_med_09",
    "titleEn": "Non-Linear Response to Incident Light Frequency Doubling",
    "titleAr": "أثر مضاعفة تردد الضوء الساقط على طاقة الحركة العظمى",
    "difficulty": "medium",
    "questionEn": "Light of frequency $\\nu_1 = 2\\nu_c$ illuminates a metal, ejecting photoelectrons with maximum kinetic energy $KE_1$. If the frequency is increased to $\\nu_2 = 4\\nu_c$, the new kinetic energy $KE_2$ is:",
    "questionAr": "يسقط ضوء تردده $\\nu_1 = 2\\nu_c$ على فلز، فتنبعث إلكترونات بأقصى طاقة حركة $KE_1$. إذا زاد تردد الضوء الساقط إلى $\\nu_2 = 4\\nu_c$، فإن أقصى طاقة حركة جديدة $KE_2$ تصبح:",
    "optionsEn": [
      "$KE_2 = 3 KE_1$",
      "$KE_2 = 2 KE_1$",
      "$KE_2 = 4 KE_1$",
      "$KE_2 = \\sqrt{2} KE_1$"
    ],
    "optionsAr": [
      "$KE_2 = 3 KE_1$",
      "$KE_2 = 2 KE_1$",
      "$KE_2 = 4 KE_1$",
      "$KE_2 = \\sqrt{2} KE_1$"
    ],
    "correctAnswer": "$KE_2 = 3 KE_1$",
    "correctIndex": 0,
    "hintEn": "$KE_1 = h(2\\nu_c) - h\\nu_c = h\\nu_c$. For $\\nu_2$: $KE_2 = h(4\\nu_c) - h\\nu_c = 3h\\nu_c$.",
    "hintAr": "$KE = h\\nu - W_e$. احسب النسبة بين $KE_1$ و $KE_2$.",
    "stepByStepSolutionEn": [
      "$KE_1 = 2h\\nu_c - h\\nu_c = h\\nu_c$. When $\\nu_2 = 4\\nu_c$, $KE_2 = 4h\\nu_c - h\\nu_c = 3h\\nu_c$. Therefore, $KE_2 = 3 KE_1$."
    ],
    "stepByStepSolutionAr": [
      "$KE_1 = 2h\\nu_c - h\\nu_c = h\\nu_c$. عند التردد $4\\nu_c$: $KE_2 = 4h\\nu_c - h\\nu_c = 3h\\nu_c$. إذن $KE_2 = 3 KE_1$ (وليس الضعف)."
    ],
    "teacherTipEn": "A classic exam trap: because of the subtracted work function constant, kinetic energy does NOT scale in direct proportion to frequency.",
    "teacherTipAr": "من أهم خدع الامتحانات: بسبب طرح دالة الشغل الثابتة، لا تتضاعف طاقة الحركة عند مضاعفة التردد."
  },
  {
    "id": "egbac_phys_ch5_db_med_10",
    "titleEn": "Photocurrent Under Doubled Light Intensity",
    "titleAr": "تأثير مضاعفة شدة الضوء عند ثبوت التردد فوق الحرج",
    "difficulty": "medium",
    "questionEn": "A photocell is illuminated by light of frequency $\\nu > \\nu_c$. When the intensity of the incident light is doubled while keeping its frequency constant, what happens to the saturation current and stopping potential?",
    "questionAr": "خلية كهروضوئية يسقط عليها ضوء بتردد $\\nu > \\nu_c$. عند مضاعفة شدة الضوء الساقط مع ثبوت تردده، ماذا يحدث لتيار التشبع وجهد الإيقاف؟",
    "optionsEn": [
      "Both saturation photocurrent and stopping potential double",
      "Saturation photocurrent doubles, while stopping potential remains unchanged",
      "Stopping potential doubles, while saturation current remains unchanged",
      "Saturation current increases fourfold, while stopping potential decreases by half"
    ],
    "optionsAr": [
      "يتضاعف كل من تيار التشبع وجهد الإيقاف معاً",
      "يتضاعف تيار التشبع الكهروضوئي، بينما يظل جهد الإيقاف ثابتاً دون تغير",
      "يتضاعف جهد الإيقاف، بينما يظل تيار التشبع ثابتاً",
      "يزداد تيار التشبع إلى أربعة أمثاله، بينما يقل جهد الإيقاف إلى النصف"
    ],
    "correctAnswer": "Saturation photocurrent doubles, while stopping potential remains unchanged",
    "correctIndex": 1,
    "hintEn": "Intensity governs photon count per second (current); frequency governs photon energy (stopping voltage).",
    "hintAr": "الشدة تتحكم في عدد الفوتونات (التيار)، والتردد يتحكم في طاقة الفوتون (جهد الإيقاف).",
    "stepByStepSolutionEn": [
      "Doubling intensity doubles the number of incident photons per second ($\\Phi_L$), thus doubling the emitted electron count per second (photocurrent). Since photon energy $h\\nu$ is unchanged, $KE_{\\max}$ and $V_s$ remain strictly constant."
    ],
    "stepByStepSolutionAr": [
      "زيادة الشدة تعني زيادة عدد الفوتونات الساقطة بالثانية فيتضاعف عدد الإلكترونات المنبعثة بالثانية (التيار). وبقاء التردد ثابتاً يعني بقاء طاقة حركة الإلكترونات وجهد الإيقاف ثابتاً."
    ],
    "teacherTipEn": "Remember the golden dichotomy: Intensity $\\to$ Quantity of electrons; Frequency $\\to$ Energy of electrons.",
    "teacherTipAr": "القاعدة الذهبية: شدة الضوء تؤثر في عدد الإلكترونات، بينما تردد الضوء يؤثر في طاقة وسرعة الإلكترونات."
  },
  {
    "id": "egbac_phys_ch5_db_med_11",
    "titleEn": "Physical Interpretation of KE vs Frequency Graph",
    "titleAr": "المدلول الفيزيائي للميل والمقاطع في رسم طاقة الحركة والتردد",
    "difficulty": "medium",
    "questionEn": "In the experimental graph plotting maximum kinetic energy ($KE_{\\max}$) on the vertical axis versus incident light frequency ($\\nu$) on the horizontal axis:",
    "questionAr": "في الرسم البياني التجريبي للعلاقة بين أقصى طاقة حركة للإلكترونات ($KE_{\\max}$) على المحور الرأسي وتردد الضوء ($\\nu$) على المحور الأفقي:",
    "optionsEn": [
      "The slope depends on the work function of the metal plate",
      "The x-intercept represents the stopping potential $V_s$",
      "The slope represents Planck's constant $h$, the x-intercept is $\\nu_c$, and the y-intercept is $-W_e$",
      "The y-intercept represents the saturation current"
    ],
    "optionsAr": [
      "يعتمد ميل الخط المستقيم على نوع الفلز ودالة شغله",
      "تمثل نقطة التقاطع مع المحور الأفقي جهد الإيقاف $V_s$",
      "يمثل ميل الخط المستقيم ثابت بلانك $h$، ونقطة التقاطع مع محور التردد هي $\\nu_c$، والامتداد الرأسي السالب يمثل $-W_e$",
      "يمثل الجزء المقطوع من المحور الرأسي تيار التشبع"
    ],
    "correctAnswer": "The slope represents Planck's constant $h$, the x-intercept is $\\nu_c$, and the y-intercept is $-W_e$",
    "correctIndex": 2,
    "hintEn": "Compare $KE_{\\max} = h\\nu - W_e$ to the linear equation $y = mx + c$.",
    "hintAr": "قارن $KE = h\\nu - W_e$ بمعادلة الخط المستقيم $y = mx + c$.",
    "stepByStepSolutionEn": [
      "From $KE_{\\max} = h\\nu - W_e$: the slope is $m = h$ (universal constant for all metals), the horizontal intercept ($KE = 0$) is $\\nu = \\nu_c$, and the vertical intercept ($\\nu = 0$) is $-W_e$."
    ],
    "stepByStepSolutionAr": [
      "بالمقارنة بمعادلة الخط المستقيم $y = mx + c$: نجد أن الميل $m = h$ (ثابت كوني لجميع الفلزات)، ونقطة تقاطع محور التردد هي $\\nu_c$، ونقطة تقاطع المحور الرأسي في الاتجاه السالب هي $-W_e$."
    ],
    "teacherTipEn": "Because $h$ is a universal physical constant, straight lines for different metals on this plot are all strictly parallel.",
    "teacherTipAr": "بما أن ثابت بلانك قيمة كونية ثابتة، فإن الخطوط البيانية لمختلف الفلزات تكون خطوطاً متوازية تماماً ولها نفس الميل."
  },
  {
    "id": "egbac_phys_ch5_db_med_12",
    "titleEn": "Cutoff Wavelength of Potassium Cathode",
    "titleAr": "الطول الموجي الحرج لمهبط البوتاسيوم",
    "difficulty": "medium",
    "questionEn": "Potassium has a work function of $W_e = 2.25\\text{ eV}$. What is the maximum wavelength (threshold wavelength $\\lambda_c$) of light that can release photoelectrons from potassium?",
    "questionAr": "دالة الشغل للبوتاسيوم تساوي $W_e = 2.25\\text{ eV}$. ما هو أقصى طول موجي (الطول الموجي الحرج $\\lambda_c$) للضوء يمكنه تحرير إلكترونات من البوتاسيوم؟",
    "optionsEn": [
      "$\\lambda_c \\approx 320\\text{ nm}$",
      "$\\lambda_c \\approx 780\\text{ nm}$",
      "$\\lambda_c \\approx 950\\text{ nm}$",
      "$\\lambda_c \\approx 552\\text{ nm}$ (yellow-green light)"
    ],
    "optionsAr": [
      "$\\lambda_c \\approx 320\\text{ nm}$",
      "$\\lambda_c \\approx 780\\text{ nm}$",
      "$\\lambda_c \\approx 950\\text{ nm}$",
      "$\\lambda_c \\approx 552\\text{ nm}$ (ضوء أصفر مخضر)"
    ],
    "correctAnswer": "$\\lambda_c \\approx 552\\text{ nm}$ (yellow-green light)",
    "correctIndex": 3,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$. Convert $W_e$ to Joules.",
    "hintAr": "$\\lambda_c = \\frac{hc}{W_e}$ مع تحويل دالة الشغل إلى الجول.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{(6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}) \\times (3 \\times 10^8\\text{ m/s})}{2.25 \\times 1.6 \\times 10^{-19}\\text{ J}} = \\frac{1.9875 \\times 10^{-25}}{3.6 \\times 10^{-19}} \\approx 5.52 \\times 10^{-7}\\text{ m} = 552\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{hc}{W_e} = \\frac{1.9875 \\times 10^{-25}}{2.25 \\times 1.6 \\times 10^{-19}} \\approx 552\\text{ نانومتر}$."
    ],
    "teacherTipEn": "Light of wavelength $\\lambda \\le \\lambda_c$ (frequencies $\\nu \\ge \\nu_c$) will eject photoelectrons. Longer wavelengths have insufficient photon energy.",
    "teacherTipAr": "أي ضوء طوله الموجي أقل من أو يساوي $552\\text{ nm}$ يحرر إلكترونات، بينما الأطوال الموجية الأكبر تعجز عن ذلك."
  },
  {
    "id": "egbac_phys_ch5_db_med_13",
    "titleEn": "Cathode Ray Electron Final Speed",
    "titleAr": "السرعة النهائية لإلكترونات أنبوبة أشعة الكاثود",
    "difficulty": "medium",
    "questionEn": "In a cathode ray tube (CRT), electrons are accelerated from rest through a potential difference of $V = 1000\\text{ V}$. Their final velocity upon exiting the electron gun is:",
    "questionAr": "في أنبوبة أشعة الكاثود، تُعجل الإلكترونات من السكون عبر فرق جهد $V = 1000\\text{ V}$. فإن سرعتها النهائية عند خروجها من المدفع الإلكتروني تساوي:",
    "optionsEn": [
      "$v \\approx 1.875 \\times 10^7\\text{ m/s}$",
      "$v \\approx 5.93 \\times 10^5\\text{ m/s}$",
      "$v \\approx 3.0 \\times 10^8\\text{ m/s}$",
      "$v \\approx 3.52 \\times 10^{14}\\text{ m/s}$"
    ],
    "optionsAr": [
      "$v \\approx 1.875 \\times 10^7\\text{ m/s}$",
      "$v \\approx 5.93 \\times 10^5\\text{ m/s}$",
      "$v \\approx 3.0 \\times 10^8\\text{ m/s}$",
      "$v \\approx 3.52 \\times 10^{14}\\text{ m/s}$"
    ],
    "correctAnswer": "$v \\approx 1.875 \\times 10^7\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Conservation of energy: $eV = \\frac{1}{2} m_e v^2 \\implies v = \\sqrt{\\frac{2eV}{m_e}}$.",
    "hintAr": "$eV = \\frac{1}{2} m_e v^2 \\implies v = \\sqrt{\\frac{2eV}{m_e}}$.",
    "stepByStepSolutionEn": [
      "$v = \\sqrt{\\frac{2 \\times (1.6 \\times 10^{-19}\\text{ C}) \\times 1000\\text{ V}}{9.1 \\times 10^{-31}\\text{ kg}}} = \\sqrt{\\frac{3.2 \\times 10^{-16}}{9.1 \\times 10^{-31}}} = \\sqrt{3.516 \\times 10^{14}} \\approx 1.875 \\times 10^7\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "$v = \\sqrt{\\frac{2 \\times 1.6 \\times 10^{-19} \\times 1000}{9.1 \\times 10^{-31}}} \\approx 1.875 \\times 10^7\\text{ م/ث}$ (حوالي $6.25\\%$ من سرعة الضوء)."
    ],
    "teacherTipEn": "The electric potential energy lost by the electron ($eV$) is converted entirely into kinetic energy ($\\frac{1}{2}m_e v^2$).",
    "teacherTipAr": "طاقة الوضع الكهربية المفقودة تتحول بالكامل إلى طاقة حركة تكسب الإلكترون هذه السرعة الهائلة."
  },
  {
    "id": "egbac_phys_ch5_db_med_14",
    "titleEn": "Compton Wavelength Shift at Right Angles",
    "titleAr": "إزاحة كومبتون في الطول الموجي عند زاوية قائمة",
    "difficulty": "medium",
    "questionEn": "An X-ray photon collides with a stationary free electron and is scattered at an angle of $\\theta = 90^\\circ$. Given Compton wavelength $\\lambda_C = \\frac{h}{m_e c} = 2.426 \\times 10^{-12}\\text{ m}$, the increase in photon wavelength $\\Delta\\lambda$ is:",
    "questionAr": "اصطدم فوتون من أشعة إكس بإلكترون حر ساكن وتشتت الفوتون بزاوية $\\theta = 90^\\circ$. علماً بأن طول موجة كومبتون $\\frac{h}{m_e c} = 2.426 \\times 10^{-12}\\text{ m}$، فإن مقدار الزيادة في طول موجة الفوتون $\\Delta\\lambda$ يساوي:",
    "optionsEn": [
      "$\\Delta\\lambda = 4.852 \\times 10^{-12}\\text{ m}$",
      "$\\Delta\\lambda = 2.426 \\times 10^{-12}\\text{ m}$",
      "$\\Delta\\lambda = 0\\text{ m}$",
      "$\\Delta\\lambda = 1.213 \\times 10^{-12}\\text{ m}$"
    ],
    "optionsAr": [
      "$\\Delta\\lambda = 4.852 \\times 10^{-12}\\text{ m}$",
      "$\\Delta\\lambda = 2.426 \\times 10^{-12}\\text{ m}$",
      "$\\Delta\\lambda = 0\\text{ m}$",
      "$\\Delta\\lambda = 1.213 \\times 10^{-12}\\text{ m}$"
    ],
    "correctAnswer": "$\\Delta\\lambda = 2.426 \\times 10^{-12}\\text{ m}$",
    "correctIndex": 1,
    "hintEn": "Compton formula: $\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$.",
    "hintAr": "قانون كومبتون: $\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$.",
    "stepByStepSolutionEn": [
      "At $\\theta = 90^\\circ$, $\\cos 90^\\circ = 0 \\implies \\Delta\\lambda = \\frac{h}{m_e c}(1 - 0) = 2.426 \\times 10^{-12}\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "عند زاوية $\\theta = 90^\\circ$ يكون $\\cos 90^\\circ = 0$، إذن $\\Delta\\lambda = \\frac{h}{m_e c} = 2.426 \\times 10^{-12}\\text{ م}$."
    ],
    "teacherTipEn": "The shift $\\Delta\\lambda$ depends only on the scattering angle $\\theta$, completely independent of the incident photon's initial wavelength or energy.",
    "teacherTipAr": "إزاحة كومبتون تعتمد حصرياً على زاوية التشتت $\\theta$ ولا تعتمد إطلاقاً على الطول الموجي للفوتون الساقط."
  },
  {
    "id": "egbac_phys_ch5_db_med_15",
    "titleEn": "Maximum Compton Wavelength Shift at 180 Degrees",
    "titleAr": "أقصى زيادة في طول موجة فوتون مشتت في ظاهرة كومبتون",
    "difficulty": "medium",
    "questionEn": "In Compton scattering, the maximum possible increase in wavelength ($\\Delta\\lambda_{\\max}$) of the scattered photon occurs at a scattering angle of:",
    "questionAr": "في تأثير كومبتون، تحدث أقصى زيادة ممكنة في الطول الموجي للفوتون المشتت ($\\Delta\\lambda_{\\max}$) عندما تكون زاوية التشتت:",
    "optionsEn": [
      "$\\theta = 90^\\circ$, where $\\Delta\\lambda_{\\max} = \\frac{h}{m_e c}$",
      "$\\theta = 0^\\circ$ (forward transmission without deflection)",
      "$\\theta = 180^\\circ$ (backscattering), where $\\Delta\\lambda_{\\max} = \\frac{2h}{m_e c} \\approx 4.85 \\times 10^{-12}\\text{ m}$",
      "$\\theta = 45^\\circ$, where $\\Delta\\lambda_{\\max} = \\frac{h}{\\sqrt{2} m_e c}$"
    ],
    "optionsAr": [
      "$\\theta = 90^\\circ$، حيث $\\Delta\\lambda_{\\max} = \\frac{h}{m_e c}$",
      "$\\theta = 0^\\circ$ (استمرار الفوتون في نفس اتجاهه دون انحراف)",
      "$\\theta = 180^\\circ$ (ارتداد الفوتون للخلف)، حيث $\\Delta\\lambda_{\\max} = \\frac{2h}{m_e c} \\approx 4.85 \\times 10^{-12}\\text{ m}$",
      "$\\theta = 45^\\circ$، حيث $\\Delta\\lambda_{\\max} = \\frac{h}{\\sqrt{2} m_e c}$"
    ],
    "correctAnswer": "$\\theta = 180^\\circ$ (backscattering), where $\\Delta\\lambda_{\\max} = \\frac{2h}{m_e c} \\approx 4.85 \\times 10^{-12}\\text{ m}$",
    "correctIndex": 2,
    "hintEn": "Maximize $(1 - \\cos\\theta)$: minimum $\\cos\\theta = -1$ at $\\theta = 180^\\circ$.",
    "hintAr": "القيمة العظمى للمقدار $(1 - \\cos\\theta)$ تكون عندما يكون $\\cos\\theta = -1$ أي $\\theta = 180^\\circ$.",
    "stepByStepSolutionEn": [
      "$\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$. The term $(1 - \\cos\\theta)$ reaches its maximum value of $2$ when $\\cos\\theta = -1$ ($\\theta = 180^\\circ$). Thus $\\Delta\\lambda_{\\max} = \\frac{2h}{m_e c} \\approx 4.852 \\times 10^{-12}\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "أقصى قيمة للمقدار $(1 - \\cos\\theta)$ تساوي $2$ عندما تكون زاوية الارتداد $180^\\circ$ فيكون أقصى تغير في الطول الموجي $\\frac{2h}{m_e c}$."
    ],
    "teacherTipEn": "At $\\theta = 180^\\circ$, the photon transfers the maximum possible kinetic energy and linear momentum to the recoil electron.",
    "teacherTipAr": "عند الارتداد بزاوية $180^\\circ$ يفقد الفوتون أقصى كمية ممكنة من طاقته وكمية تحركه لصالح الإلكترون."
  },
  {
    "id": "egbac_phys_ch5_db_med_16",
    "titleEn": "Kinetic Energy Gained by Recoil Electron in Compton Effect",
    "titleAr": "طاقة الحركة التي يكتسبها الإلكترون في ظاهرة كومبتون",
    "difficulty": "medium",
    "questionEn": "An incident X-ray photon carries energy $E_1 = 60\\text{ keV}$. After scattering off a free stationary electron, the photon scatters with energy $E_2 = 45\\text{ keV}$. What kinetic energy $KE_e$ did the electron acquire?",
    "questionAr": "فوتون أشعة سينية طاقته $E_1 = 60\\text{ keV}$ اصطدم بإلكترون حر ساكن، فتشتت الفوتون بطاقة $E_2 = 45\\text{ keV}$. ما طاقة الحركة $KE_e$ التي اكتسبها الإلكترون؟",
    "optionsEn": [
      "$KE_e = 105\\text{ keV} = 1.68 \\times 10^{-14}\\text{ J}$",
      "$KE_e = 45\\text{ keV} = 7.2 \\times 10^{-15}\\text{ J}$",
      "$KE_e = 1.33\\text{ keV} = 2.13 \\times 10^{-16}\\text{ J}$",
      "$KE_e = 15\\text{ keV} = 2.4 \\times 10^{-15}\\text{ J}$"
    ],
    "optionsAr": [
      "$KE_e = 105\\text{ keV} = 1.68 \\times 10^{-14}\\text{ J}$",
      "$KE_e = 45\\text{ keV} = 7.2 \\times 10^{-15}\\text{ J}$",
      "$KE_e = 1.33\\text{ keV} = 2.13 \\times 10^{-16}\\text{ J}$",
      "$KE_e = 15\\text{ keV} = 2.4 \\times 10^{-15}\\text{ J}$"
    ],
    "correctAnswer": "$KE_e = 15\\text{ keV} = 2.4 \\times 10^{-15}\\text{ J}$",
    "correctIndex": 3,
    "hintEn": "Conservation of total energy: $E_{\\text{photon, initial}} = E_{\\text{photon, scattered}} + KE_e$.",
    "hintAr": "قانون بقاء الطاقة: طاقة الفوتون الساقط = طاقة الفوتون المشتت + طاقة حركة الإلكترون.",
    "stepByStepSolutionEn": [
      "$KE_e = E_1 - E_2 = 60\\text{ keV} - 45\\text{ keV} = 15\\text{ keV} = 15 \\times 10^3 \\times 1.6 \\times 10^{-19}\\text{ J} = 2.4 \\times 10^{-15}\\text{ J}$."
    ],
    "stepByStepSolutionAr": [
      "$KE_e = 60 - 45 = 15\\text{ كيلو إلكترون فولت} = 15 \\times 10^3 \\times 1.6 \\times 10^{-19} = 2.4 \\times 10^{-15}\\text{ جول}$."
    ],
    "teacherTipEn": "Energy lost by the photon is exactly equal to the kinetic energy gained by the recoil electron.",
    "teacherTipAr": "الطاقة التي يفقدها الفوتون تساوي تماماً طاقة الحركة التي يكتسبها الإلكترون المرتد طبقاً لبقاء الطاقة."
  },
  {
    "id": "egbac_phys_ch5_db_med_17",
    "titleEn": "de Broglie Wavelength of Electron Under 100 V Acceleration",
    "titleAr": "طول موجة دي برولي لإلكترون معجل بجهد 100 فولت",
    "difficulty": "medium",
    "questionEn": "An electron is accelerated from rest through a potential difference of $V = 100\\text{ V}$. Its associated de Broglie wavelength $\\lambda$ is approximately:",
    "questionAr": "عُجل إلكترون من السكون عبر فرق جهد قدره $V = 100\\text{ V}$. فإن طول موجة دي برولي المصاحبة لحركته تساوي تقريباً:",
    "optionsEn": [
      "$\\lambda \\approx 1.23 \\times 10^{-10}\\text{ m} = 0.123\\text{ nm} = 1.23\\text{ \\AA}$",
      "$\\lambda \\approx 5.5 \\times 10^{-7}\\text{ m}$",
      "$\\lambda \\approx 2.4 \\times 10^{-12}\\text{ m}$",
      "$\\lambda \\approx 6.63 \\times 10^{-34}\\text{ m}$"
    ],
    "optionsAr": [
      "$\\lambda \\approx 1.23 \\times 10^{-10}\\text{ m} = 0.123\\text{ nm} = 1.23\\text{ \\AA}$",
      "$\\lambda \\approx 5.5 \\times 10^{-7}\\text{ m}$",
      "$\\lambda \\approx 2.4 \\times 10^{-12}\\text{ m}$",
      "$\\lambda \\approx 6.63 \\times 10^{-34}\\text{ m}$"
    ],
    "correctAnswer": "$\\lambda \\approx 1.23 \\times 10^{-10}\\text{ m} = 0.123\\text{ nm} = 1.23\\text{ \\AA}$",
    "correctIndex": 0,
    "hintEn": "$\\lambda = \\frac{h}{\\sqrt{2m_e e V}}$.",
    "hintAr": "علاقة دي برولي للإلكترون المعجل بفرق جهد: $\\lambda = \\frac{h}{\\sqrt{2m_e e V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{6.625 \\times 10^{-34}}{\\sqrt{2 \\times (9.1 \\times 10^{-31}) \\times (1.6 \\times 10^{-19}) \\times 100}} = \\frac{6.625 \\times 10^{-34}}{\\sqrt{2.912 \\times 10^{-47}}} = \\frac{6.625 \\times 10^{-34}}{5.396 \\times 10^{-24}} \\approx 1.228 \\times 10^{-10}\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{h}{\\sqrt{2m_e e V}} \\approx \\frac{1.23}{\\sqrt{100}} = 0.123\\text{ نانومتر}$."
    ],
    "teacherTipEn": "Useful examination shortcut: for an electron accelerated through $V$ volts, $\\lambda \\approx \\frac{1.23}{\\sqrt{V}}\\text{ nm}$.",
    "teacherTipAr": "قاعدة سريعة للامتحانات: طول موجة دي برولي للإلكترون بالنانومتر تساوي تقريباً $\\frac{1.23}{\\sqrt{V}}$ حيث $V$ بالفولت."
  },
  {
    "id": "egbac_phys_ch5_db_med_18",
    "titleEn": "Ratio of de Broglie Wavelengths for Voltage Quadrupled",
    "titleAr": "نسبة طولي موجة دي برولي عند مضاعفة فرق الجهد أربع مرات",
    "difficulty": "medium",
    "questionEn": "An electron is accelerated through potential difference $V_1 = 25\\text{ V}$, having de Broglie wavelength $\\lambda_1$. If the potential is increased to $V_2 = 100\\text{ V}$, the ratio $\\lambda_1 / \\lambda_2$ is:",
    "questionAr": "عُجل إلكترون بفرق جهد $V_1 = 25\\text{ V}$ فكان طول موجته المصاحبة $\\lambda_1$. فإذا زاد فرق الجهد إلى $V_2 = 100\\text{ V}$، فإن النسبة $\\frac{\\lambda_1}{\\lambda_2}$ تساوي:",
    "optionsEn": [
      "$\\frac{\\lambda_1}{\\lambda_2} = 4$",
      "$\\frac{\\lambda_1}{\\lambda_2} = 2$",
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{2}$",
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{4}$"
    ],
    "optionsAr": [
      "$\\frac{\\lambda_1}{\\lambda_2} = 4$",
      "$\\frac{\\lambda_1}{\\lambda_2} = 2$",
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{2}$",
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{4}$"
    ],
    "correctAnswer": "$\\frac{\\lambda_1}{\\lambda_2} = 2$",
    "correctIndex": 1,
    "hintEn": "$\\lambda \\propto \\frac{1}{\\sqrt{V}} \\implies \\frac{\\lambda_1}{\\lambda_2} = \\sqrt{\\frac{V_2}{V_1}}$.",
    "hintAr": "تناسب عكسي مع الجذر التربيعي لفرق الجهد: $\\frac{\\lambda_1}{\\lambda_2} = \\sqrt{\\frac{V_2}{V_1}}$.",
    "stepByStepSolutionEn": [
      "Since $\\lambda = \\frac{h}{\\sqrt{2m_e e V}}$, we have $\\frac{\\lambda_1}{\\lambda_2} = \\sqrt{\\frac{V_2}{V_1}} = \\sqrt{\\frac{100}{25}} = \\sqrt{4} = 2$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\lambda_1}{\\lambda_2} = \\sqrt{\\frac{V_2}{V_1}} = \\sqrt{\\frac{100}{25}} = 2$."
    ],
    "teacherTipEn": "Quadrupling accelerating potential doubles velocity and halves the de Broglie wavelength.",
    "teacherTipAr": "زيادة فرق الجهد أربعة أمثال تضاعف سرعة وكمية تحرك الإلكترون، فيقل طول موجته المصاحبة إلى النصف."
  },
  {
    "id": "egbac_phys_ch5_db_med_19",
    "titleEn": "Accelerating Potential Required for Electron Microscope Resolution",
    "titleAr": "فرق الجهد اللازم لرؤية فيروس في المجهر الإلكتروني",
    "difficulty": "medium",
    "questionEn": "To distinguish a virus of diameter $d = 0.05\\text{ nm}$ using an electron microscope, the de Broglie wavelength must satisfy $\\lambda \\le d$. The minimum accelerating voltage required is approximately:",
    "questionAr": "لرؤية وتفصيل فيروس قطره $d = 0.05\\text{ nm}$ بالمجهر الإلكتروني، يلزم أن يكون $\\lambda \\le d$. أقل فرق جهد معجل يلزم استخدامه يساوي تقريباً:",
    "optionsEn": [
      "$V \\approx 24.6\\text{ V}$",
      "$V \\approx 100\\text{ V}$",
      "$V \\approx 605\\text{ V}$",
      "$V \\approx 15000\\text{ V}$"
    ],
    "optionsAr": [
      "$V \\approx 24.6\\text{ V}$",
      "$V \\approx 100\\text{ V}$",
      "$V \\approx 605\\text{ V}$",
      "$V \\approx 15000\\text{ V}$"
    ],
    "correctAnswer": "$V \\approx 605\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "Set $\\lambda = 0.05\\text{ nm} = 5 \\times 10^{-11}\\text{ m}$ in $V = \\frac{h^2}{2m_e e \\lambda^2}$.",
    "hintAr": "عوض في $V = \\frac{h^2}{2m_e e \\lambda^2}$ بطول موجي يساوي قطر الفيروس.",
    "stepByStepSolutionEn": [
      "Using shortcut $\\lambda \\approx \\frac{1.23}{\\sqrt{V}}\\text{ nm} \\implies \\sqrt{V} = \\frac{1.23}{0.05} = 24.6 \\implies V = (24.6)^2 \\approx 605.16\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "باستخدام العلاقة $\\lambda = \\frac{1.23}{\\sqrt{V}}\\text{ nm} \\implies \\sqrt{V} = \\frac{1.23}{0.05} = 24.6 \\implies V \\approx 605\\text{ فولت}$."
    ],
    "teacherTipEn": "The resolving power criterion requires that the probe wavelength be smaller than or equal to the dimension of the object to be resolved.",
    "teacherTipAr": "شرط الرؤية والتكبير أن يكون الطول الموجي للشعاع المستخدم مساوياً أو أصغر من أبعاد الجسم المراد فحصه."
  },
  {
    "id": "egbac_phys_ch5_db_med_20",
    "titleEn": "Photon Linear Momentum from Wavelength",
    "titleAr": "حساب كمية تحرك فوتون من طوله الموجي",
    "difficulty": "medium",
    "questionEn": "What is the linear momentum $p$ of a single photon of green light having wavelength $\\lambda = 500\\text{ nm}$?",
    "questionAr": "ما هي كمية التحرك الخطي $p$ لفوتون واحد من الضوء الأخضر طوله الموجي $\\lambda = 500\\text{ nm}$؟",
    "optionsEn": [
      "$p = 3.975 \\times 10^{-19}\\text{ kg}\\cdot\\text{m/s}$",
      "$p = 7.55 \\times 10^{26}\\text{ kg}\\cdot\\text{m/s}$",
      "$p = 2.426 \\times 10^{-35}\\text{ kg}\\cdot\\text{m/s}$",
      "$p = 1.325 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "optionsAr": [
      "$p = 3.975 \\times 10^{-19}\\text{ kg}\\cdot\\text{m/s}$",
      "$p = 7.55 \\times 10^{26}\\text{ kg}\\cdot\\text{m/s}$",
      "$p = 2.426 \\times 10^{-35}\\text{ kg}\\cdot\\text{m/s}$",
      "$p = 1.325 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "correctAnswer": "$p = 1.325 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$",
    "correctIndex": 3,
    "hintEn": "de Broglie relation for photon: $p = \\frac{h}{\\lambda}$.",
    "hintAr": "كمية تحرك الفوتون: $p = \\frac{h}{\\lambda}$.",
    "stepByStepSolutionEn": [
      "$p = \\frac{h}{\\lambda} = \\frac{6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}}{500 \\times 10^{-9}\\text{ m}} = 1.325 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$."
    ],
    "stepByStepSolutionAr": [
      "$p = \\frac{h}{\\lambda} = \\frac{6.625 \\times 10^{-34}}{500 \\times 10^{-9}} = 1.325 \\times 10^{-27}\\text{ كجم}\\cdot\\text{م/ث}$."
    ],
    "teacherTipEn": "Even though photons have zero rest mass, they possess real physical momentum proportional to frequency and inversely proportional to wavelength.",
    "teacherTipAr": "رغم انعدام الكتلة السكونية للفوتون، إلا أنه يحمل كمية تحرك حقيقية تتناسب طردياً مع تردده وعكسياً مع طوله الموجي."
  },
  {
    "id": "egbac_phys_ch5_db_med_21",
    "titleEn": "Equivalent Relativistic Mass of Gamma Photon",
    "titleAr": "الكتلة المكافئة المتحركة لفوتون أشعة جاما",
    "difficulty": "medium",
    "questionEn": "A gamma-ray photon has a frequency of $\\nu = 3.0 \\times 10^{19}\\text{ Hz}$. What is its equivalent dynamic mass $m$ while propagating at speed $c$?",
    "questionAr": "فوتون من أشعة جاما تردده $\\nu = 3.0 \\times 10^{19}\\text{ Hz}$. ما كتلته المكافئة أثناء حركته بسرعة الضوء؟",
    "optionsEn": [
      "$m \\approx 2.21 \\times 10^{-31}\\text{ kg}$ (comparable to electron mass)",
      "$m \\approx 9.1 \\times 10^{-31}\\text{ kg}$",
      "$m \\approx 6.63 \\times 10^{-34}\\text{ kg}$",
      "$m = 0\\text{ kg}$ (all masses are strictly zero)"
    ],
    "optionsAr": [
      "$m \\approx 2.21 \\times 10^{-31}\\text{ kg}$ (تقترب من ربع كتلة الإلكترون)",
      "$m \\approx 9.1 \\times 10^{-31}\\text{ kg}$",
      "$m \\approx 6.63 \\times 10^{-34}\\text{ kg}$",
      "$m = 0\\text{ kg}$ (الكتلة دائماً منعدمة)"
    ],
    "correctAnswer": "$m \\approx 2.21 \\times 10^{-31}\\text{ kg}$ (comparable to electron mass)",
    "correctIndex": 0,
    "hintEn": "Einstein mass-energy equivalence: $E = mc^2 = h\\nu \\implies m = \\frac{h\\nu}{c^2}$.",
    "hintAr": "$m = \\frac{h\\nu}{c^2}$.",
    "stepByStepSolutionEn": [
      "$m = \\frac{h\\nu}{c^2} = \\frac{(6.625 \\times 10^{-34}) \\times (3.0 \\times 10^{19})}{(3.0 \\times 10^8)^2} = \\frac{1.9875 \\times 10^{-14}}{9.0 \\times 10^{16}} \\approx 2.208 \\times 10^{-31}\\text{ kg}$."
    ],
    "stepByStepSolutionAr": [
      "$m = \\frac{h\\nu}{c^2} = \\frac{1.9875 \\times 10^{-14}}{9 \\times 10^{16}} \\approx 2.21 \\times 10^{-31}\\text{ كجم}$."
    ],
    "teacherTipEn": "A photon has zero REST mass ($m_0 = 0$), but while traveling at $c$ it exhibits an equivalent inertial mass $m = \\frac{h\\nu}{c^2}$.",
    "teacherTipAr": "الفوتون كتلته السكونية صفر، ولكن أثناء حركته بسرعة الضوء يمتلك كتلة مكافئة لطاقته تسمى الكتلة المكافئة أثناء الحركة."
  },
  {
    "id": "egbac_phys_ch5_db_med_22",
    "titleEn": "de Broglie Wavelength Ratio for Electron and Proton with Same Velocity",
    "titleAr": "نسبة طولي موجة دي برولي لإلكترون وبروتون يتحركان بنفس السرعة",
    "difficulty": "medium",
    "questionEn": "An electron and a proton are moving at the exact same velocity $v \\ll c$. Given $m_p \\approx 1836\\, m_e$, the ratio of their de Broglie wavelengths $\\lambda_e / \\lambda_p$ is:",
    "questionAr": "يتحرك إلكترون وبروتون بنفس السرعة $v$. إذا علمت أن كتلة البروتون $m_p \\approx 1836\\, m_e$، فإن نسبة طولي موجة دي برولي المصاحبة لحركتيهما $\\frac{\\lambda_e}{\\lambda_p}$ تساوي:",
    "optionsEn": [
      "$\\frac{\\lambda_e}{\\lambda_p} = \\frac{1}{1836}$",
      "$\\frac{\\lambda_e}{\\lambda_p} = 1836$",
      "$\\frac{\\lambda_e}{\\lambda_p} = 1$",
      "$\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{1836} \\approx 42.8$"
    ],
    "optionsAr": [
      "$\\frac{\\lambda_e}{\\lambda_p} = \\frac{1}{1836}$",
      "$\\frac{\\lambda_e}{\\lambda_p} = 1836$",
      "$\\frac{\\lambda_e}{\\lambda_p} = 1$",
      "$\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{1836} \\approx 42.8$"
    ],
    "correctAnswer": "$\\frac{\\lambda_e}{\\lambda_p} = 1836$",
    "correctIndex": 1,
    "hintEn": "$\\lambda = \\frac{h}{mv}$. For equal velocities: $\\frac{\\lambda_e}{\\lambda_p} = \\frac{m_p}{m_e}$.",
    "hintAr": "$\\lambda = \\frac{h}{mv}$. عند ثبوت السرعة تتناسب $\\lambda$ عكسياً مع الكتلة.",
    "stepByStepSolutionEn": [
      "$\\frac{\\lambda_e}{\\lambda_p} = \\frac{h/(m_e v)}{h/(m_p v)} = \\frac{m_p}{m_e} \\approx 1836$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\lambda_e}{\\lambda_p} = \\frac{m_p}{m_e} = 1836$."
    ],
    "teacherTipEn": "Because the electron is 1836 times lighter, its wave nature is vastly more prominent than that of the heavier proton at equal velocity.",
    "teacherTipAr": "لأن كتلة الإلكترون أصغر 1836 مرة، فإن طول موجته أكبر بكثير وتكون خصائصه الموجية أكثر وضوحاً."
  },
  {
    "id": "egbac_phys_ch5_db_med_23",
    "titleEn": "de Broglie Wavelength Ratio for Particles with Same Kinetic Energy",
    "titleAr": "نسبة طولي موجة دي برولي لإلكترون وبروتون لهما نفس طاقة الحركة",
    "difficulty": "medium",
    "questionEn": "An electron and a proton have identical kinetic energies ($KE_e = KE_p$). The ratio of their de Broglie wavelengths $\\lambda_e / \\lambda_p$ is:",
    "questionAr": "إلكترون وبروتون لهما نفس طاقة الحركة ($KE_e = KE_p$). فإن نسبة طولي موجة دي برولي المصاحبة لهما $\\frac{\\lambda_e}{\\lambda_p}$ تساوي:",
    "optionsEn": [
      "$\\frac{\\lambda_e}{\\lambda_p} = \\frac{m_p}{m_e} \\approx 1836$",
      "$\\frac{\\lambda_e}{\\lambda_p} = 1$",
      "$\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{\\frac{m_p}{m_e}} \\approx 42.8$",
      "$\\frac{\\lambda_e}{\\lambda_p} = \\frac{m_e}{m_p} \\approx \\frac{1}{1836}$"
    ],
    "optionsAr": [
      "$\\frac{\\lambda_e}{\\lambda_p} = \\frac{m_p}{m_e} \\approx 1836$",
      "$\\frac{\\lambda_e}{\\lambda_p} = 1$",
      "$\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{\\frac{m_p}{m_e}} \\approx 42.8$",
      "$\\frac{\\lambda_e}{\\lambda_p} = \\frac{m_e}{m_p} \\approx \\frac{1}{1836}$"
    ],
    "correctAnswer": "$\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{\\frac{m_p}{m_e}} \\approx 42.8$",
    "correctIndex": 2,
    "hintEn": "Express momentum in terms of kinetic energy: $p = \\sqrt{2m KE} \\implies \\lambda = \\frac{h}{\\sqrt{2m KE}}$.",
    "hintAr": "$p = \\sqrt{2m KE} \\implies \\lambda = \\frac{h}{\\sqrt{2m KE}}$.",
    "stepByStepSolutionEn": [
      "Since $KE$ is the same: $\\frac{\\lambda_e}{\\lambda_p} = \\frac{h/\\sqrt{2m_e KE}}{h/\\sqrt{2m_p KE}} = \\sqrt{\\frac{m_p}{m_e}} \\approx \\sqrt{1836} \\approx 42.8$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{\\frac{m_p}{m_e}} \\approx \\sqrt{1836} \\approx 42.8$."
    ],
    "teacherTipEn": "Notice the difference: at equal velocity the ratio is $m_p/m_e$, whereas at equal kinetic energy the ratio is $\\sqrt{m_p/m_e}$.",
    "teacherTipAr": "انتبه للفرق الهام: عند ثبوت السرعة النسبة هي $m_p/m_e$، بينما عند ثبوت طاقة الحركة النسبة هي $\\sqrt{m_p/m_e}$."
  },
  {
    "id": "egbac_phys_ch5_db_med_24",
    "titleEn": "de Broglie Wavelength Ratio for Particles with Equal Momentum",
    "titleAr": "نسبة طولي موجة دي برولي لجسيمين لهما نفس كمية التحرك",
    "difficulty": "medium",
    "questionEn": "An electron and an alpha particle have equal linear momenta ($p_e = p_\\alpha$). The ratio of their de Broglie wavelengths $\\lambda_e / \\lambda_\\alpha$ is:",
    "questionAr": "إلكترون وجسيم ألفا لهما نفس كمية التحرك الخطي ($p_e = p_\\alpha$). فإن النسبة بين طولي موجتي دي برولي المصاحبتين لهما $\\frac{\\lambda_e}{\\lambda_\\alpha}$ تساوي:",
    "optionsEn": [
      "$\\frac{\\lambda_e}{\\lambda_\\alpha} = \\frac{m_\\alpha}{m_e} \\approx 7344$",
      "$\\frac{\\lambda_e}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha}{m_e}}$",
      "$\\frac{\\lambda_e}{\\lambda_\\alpha} = \\frac{1}{7344}$",
      "$\\frac{\\lambda_e}{\\lambda_\\alpha} = 1$"
    ],
    "optionsAr": [
      "$\\frac{\\lambda_e}{\\lambda_\\alpha} = \\frac{m_\\alpha}{m_e} \\approx 7344$",
      "$\\frac{\\lambda_e}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha}{m_e}}$",
      "$\\frac{\\lambda_e}{\\lambda_\\alpha} = \\frac{1}{7344}$",
      "$\\frac{\\lambda_e}{\\lambda_\\alpha} = 1$"
    ],
    "correctAnswer": "$\\frac{\\lambda_e}{\\lambda_\\alpha} = 1$",
    "correctIndex": 3,
    "hintEn": "$\\lambda = \\frac{h}{p}$. If $p$ is identical, $\\lambda$ must be identical.",
    "hintAr": "علاقة دي برولي: $\\lambda = \\frac{h}{p}$. إذا تساوت كمية التحرك تساوى الطول الموجي.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{h}{p}$. Since both particles carry the exact same linear momentum $p$, their de Broglie wavelengths are identical ($\\lambda_e / \\lambda_\\alpha = 1$), regardless of their vastly different masses."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\lambda = \\frac{h}{p}$ وكمية التحرك متساوية للاثنين وثابت بلانك ثابت، فإن الطول الموجي يكون متساوياً تماماً والنسبة تساوي 1."
    ],
    "teacherTipEn": "de Broglie wavelength depends exclusively on momentum $p = mv$. Mass and speed matter only through their product.",
    "teacherTipAr": "طول موجة دي برولي يعتمد حصرياً على حاصل ضرب الكتلة في السرعة (كمية التحرك)."
  },
  {
    "id": "egbac_phys_ch5_db_med_25",
    "titleEn": "Blackbody Radiated Power Temperature Scaling",
    "titleAr": "معدل الإشعاع الكلي للجسم الأسود عند رفع درجة حرارته",
    "difficulty": "medium",
    "questionEn": "If the absolute temperature of an ideal blackbody radiator is doubled from $T_1 = 1000\\text{ K}$ to $T_2 = 2000\\text{ K}$, the total radiant power emitted per unit area increases by a factor of:",
    "questionAr": "إذا ارتفعت درجة الحرارة المطلقة لجسم أسود مثالي من $T_1 = 1000\\text{ K}$ إلى $T_2 = 2000\\text{ K}$ (تضاعفت)، فإن معدل الطاقة الكلية المشعة لكل وحدة مساحات يزداد بمقدار:",
    "optionsEn": [
      "$16\\text{ times } (2^4 = 16)$",
      "$2\\text{ times}$",
      "$4\\text{ times } (2^2 = 4)$",
      "$8\\text{ times } (2^3 = 8)$"
    ],
    "optionsAr": [
      "$16\\text{ مرة } (2^4 = 16)$",
      "$2\\text{ مرة (يتضاعف فقط)}$",
      "$4\\text{ مرات } (2^2 = 4)$",
      "$8\\text{ مرات } (2^3 = 8)$"
    ],
    "correctAnswer": "$16\\text{ times } (2^4 = 16)$",
    "correctIndex": 0,
    "hintEn": "Stefan-Boltzmann relation / total area under Planck curve: $E_{\\text{total}} \\propto T^4$.",
    "hintAr": "المساحة الكلية تحت منحنى بلانك تتناسب مع الأس الرابع لدرجة الحرارة المطلقة $T^4$.",
    "stepByStepSolutionEn": [
      "The total radiant energy across all frequencies (represented by the total area under the Planck distribution curve) is proportional to $T^4$. Since $T_2 / T_1 = 2$, the emitted power increases by $2^4 = 16$."
    ],
    "stepByStepSolutionAr": [
      "الطاقة الكلية المشعة (المساحة أسفل منحنى بلانك) تتناسب طردياً مع $T^4$. وبمضاعفة درجة الحرارة تزداد الطاقة إلى $2^4 = 16$ مرة."
    ],
    "teacherTipEn": "Do not confuse Wien's law (which scales as $\\lambda_{\\max} \\propto 1/T$) with total radiant energy (which scales as $T^4$).",
    "teacherTipAr": "لا تخلط بين قانون فين ($\\lambda_{\\max} \\propto 1/T$) وبين الطاقة الإشعاعية الكلية التي تتناسب مع $T^4$."
  },
  {
    "id": "egbac_phys_ch5_db_med_26",
    "titleEn": "Comparative Work Functions of Two Metal Photocathodes",
    "titleAr": "مقارنة دالة الشغل لفلزين من جهود الإيقاف",
    "difficulty": "medium",
    "questionEn": "When monochromatic light of frequency $\\nu$ illuminates metal A, the stopping potential is $V_{sA} = 1.2\\text{ V}$. When the same light illuminates metal B, the stopping potential is $V_{sB} = 2.8\\text{ V}$. What is the difference between their work functions ($W_{eA} - W_{eB}$)?",
    "questionAr": "عند سقوط ضوء أحادي اللون بتردد $\\nu$ على فلز A كان جهد الإيقاف $V_{sA} = 1.2\\text{ V}$. وعند سقوطه على فلز B كان جهد الإيقاف $V_{sB} = 2.8\\text{ V}$. ما الفرق بين دالتي الشغل لهما ($W_{eA} - W_{eB}$)؟",
    "optionsEn": [
      "$W_{eA} - W_{eB} = -1.6\\text{ eV}$",
      "$W_{eA} - W_{eB} = +1.6\\text{ eV}$ (Metal A has larger work function)",
      "$W_{eA} - W_{eB} = +4.0\\text{ eV}$",
      "$W_{eA} - W_{eB} = 0\\text{ eV}$"
    ],
    "optionsAr": [
      "$W_{eA} - W_{eB} = -1.6\\text{ eV}$",
      "$W_{eA} - W_{eB} = +1.6\\text{ eV}$ (دالة شغل الفلز A أكبر بمقدار 1.6 إلكترون فولت)",
      "$W_{eA} - W_{eB} = +4.0\\text{ eV}$",
      "$W_{eA} - W_{eB} = 0\\text{ eV}$"
    ],
    "correctAnswer": "$W_{eA} - W_{eB} = +1.6\\text{ eV}$ (Metal A has larger work function)",
    "correctIndex": 1,
    "hintEn": "$eV_s = h\\nu - W_e \\implies W_e = h\\nu - eV_s$.",
    "hintAr": "$W_{eA} - W_{eB} = e(V_{sB} - V_{sA})$.",
    "stepByStepSolutionEn": [
      "From Einstein's relation: $W_{eA} = h\\nu - eV_{sA}$ and $W_{eB} = h\\nu - eV_{sB}$. Subtracting gives $W_{eA} - W_{eB} = e(V_{sB} - V_{sA}) = 2.8\\text{ eV} - 1.2\\text{ eV} = +1.6\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$W_{eA} - W_{eB} = e(V_{sB} - V_{sA}) = 2.8 - 1.2 = 1.6\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "A smaller stopping potential means electrons were emitted with less kinetic energy, indicating that the metal required more energy to liberate them (larger work function).",
    "teacherTipAr": "جهد الإيقاف الأقل يعني طاقة حركة أقل، مما يدل على أن الفلز استهلك طاقة أكبر لتحرير الإلكترون (دالة شغل أكبر)."
  },
  {
    "id": "egbac_phys_ch5_db_med_27",
    "titleEn": "Momentum Comparison of Photon and Electron with Identical Wavelength",
    "titleAr": "مقارنة كمية تحرك فوتون وإلكترون لهما نفس الطول الموجي",
    "difficulty": "medium",
    "questionEn": "A photon and an electron each have a wavelength of $\\lambda = 0.2\\text{ nm}$. The ratio of the photon's linear momentum to the electron's linear momentum ($p_{\\text{photon}} / p_{\\text{electron}}$) is:",
    "questionAr": "فوتون وإلكترون لكل منهما نفس الطول الموجي $\\lambda = 0.2\\text{ nm}$. فإن نسبة كمية تحرك الفوتون إلى كمية تحرك الإلكترون ($\\frac{p_{\\text{photon}}}{p_{\\text{electron}}}$) تساوي:",
    "optionsEn": [
      "$\\frac{c}{v_e} \\gg 1$",
      "$\\frac{m_e c^2}{h\\nu}$",
      "$1$",
      "$\\sqrt{\\frac{m_e c}{\\lambda}}$"
    ],
    "optionsAr": [
      "$\\frac{c}{v_e} \\gg 1$",
      "$\\frac{m_e c^2}{h\\nu}$",
      "$1$",
      "$\\sqrt{\\frac{m_e c}{\\lambda}}$"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 2,
    "hintEn": "de Broglie: $p = \\frac{h}{\\lambda}$ applies universally to both photons and matter particles.",
    "hintAr": "علاقة دي برولي $p = \\frac{h}{\\lambda}$ عامة تنطبق على الفوتونات والجسيمات المادية.",
    "stepByStepSolutionEn": [
      "For both photon and electron: $p = \\frac{h}{\\lambda}$. Since their wavelengths are equal, their linear momenta must be strictly identical: $\\frac{p_{\\text{photon}}}{p_{\\text{electron}}} = 1$."
    ],
    "stepByStepSolutionAr": [
      "لكل من الفوتون والإلكترون: $p = \\frac{h}{\\lambda}$. وبما أن الطول الموجي متطابق، فإن كمية التحرك متساوية تماماً والنسبة بينهما 1."
    ],
    "teacherTipEn": "Wavelength and momentum are linked by Planck's constant alone ($p = h/\\lambda$), completely independent of whether the entity is a massless photon or massive particle.",
    "teacherTipAr": "العلاقة بين الطول الموجي وكمية التحرك تحكمها علاقة دي برولي فقط دون النظر لكون الجسيم ذا كتلة سكونية أم فوتوناً."
  },
  {
    "id": "egbac_phys_ch5_db_med_28",
    "titleEn": "Energy Comparison of Photon and Electron with Identical Wavelength",
    "titleAr": "مقارنة طاقة فوتون وطاقة حركة إلكترون لهما نفس الطول الموجي",
    "difficulty": "medium",
    "questionEn": "A photon and an electron each have a wavelength of $\\lambda = 0.1\\text{ nm}$. How does the energy of the photon $E_{\\text{ph}}$ compare to the kinetic energy of the electron $KE_e$?",
    "questionAr": "فوتون وإلكترون لكل منهما طول موجي $\\lambda = 0.1\\text{ nm}$. كيف تقارن طاقة الفوتون $E_{\\text{ph}}$ بطاقة حركة الإلكترون $KE_e$؟",
    "optionsEn": [
      "$E_{\\text{ph}} = KE_e$ (they must have identical energy)",
      "$KE_e \\gg E_{\\text{ph}}$",
      "$E_{\\text{ph}} = 2 KE_e$",
      "$E_{\\text{ph}} \\approx 12400\\text{ eV}$, while $KE_e \\approx 150\\text{ eV}$ ($E_{\\text{ph}} \\gg KE_e$)"
    ],
    "optionsAr": [
      "$E_{\\text{ph}} = KE_e$ (طاقتيهما متساويتان تماماً)",
      "$KE_e \\gg E_{\\text{ph}}$",
      "$E_{\\text{ph}} = 2 KE_e$",
      "$E_{\\text{ph}} \\approx 12400\\text{ eV}$ بينما $KE_e \\approx 150\\text{ eV}$ (طاقة الفوتون أكبر بكثير من طاقة حركة الإلكترون)"
    ],
    "correctAnswer": "$E_{\\text{ph}} \\approx 12400\\text{ eV}$, while $KE_e \\approx 150\\text{ eV}$ ($E_{\\text{ph}} \\gg KE_e$)",
    "correctIndex": 3,
    "hintEn": "$E_{\\text{ph}} = \\frac{hc}{\\lambda}$, whereas $KE_e = \\frac{p^2}{2m_e} = \\frac{h^2}{2m_e \\lambda^2}$.",
    "hintAr": "$E_{\\text{ph}} = \\frac{hc}{\\lambda}$ بينما $KE_e = \\frac{p^2}{2m_e} = \\frac{h^2}{2m_e \\lambda^2}$.",
    "stepByStepSolutionEn": [
      "Photon: $E_{\\text{ph}} = \\frac{hc}{\\lambda} = \\frac{1.9875 \\times 10^{-25}}{10^{-10}} \\approx 1.99 \\times 10^{-15}\\text{ J} \\approx 12.4\\text{ keV}$. Electron: $KE_e = \\frac{h^2}{2m_e \\lambda^2} = \\frac{4.389 \\times 10^{-67}}{2 \\times 9.1 \\times 10^{-31} \\times 10^{-20}} \\approx 2.41 \\times 10^{-17}\\text{ J} \\approx 151\\text{ eV}$. Thus $E_{\\text{ph}} \\approx 82 \\times KE_e$."
    ],
    "stepByStepSolutionAr": [
      "طاقة الفوتون $E = \\frac{hc}{\\lambda} \\approx 12.4\\text{ keV}$. طاقة حركة الإلكترون $KE = \\frac{p^2}{2m} \\approx 151\\text{ eV}$. فطاقة الفوتون أكبر بحوالي 82 مرة."
    ],
    "teacherTipEn": "At the same wavelength, a photon carries vastly higher energy because it propagates at $c$, whereas the electron travels at a non-relativistic speed $v \\ll c$.",
    "teacherTipAr": "عند نفس الطول الموجي تكون طاقة الفوتون أكبر بكثير لأن سرعته $c$ بينما سرعة الإلكترون أقل بكثير من سرعة الضوء."
  },
  {
    "id": "egbac_phys_ch5_db_med_29",
    "titleEn": "Stopping Potential from Incident Frequency and Work Function",
    "titleAr": "حساب جهد الإيقاف بمعلومية تردد الضوء ودالة الشغل",
    "difficulty": "medium",
    "questionEn": "Monochromatic light of frequency $\\nu = 1.5 \\times 10^{15}\\text{ Hz}$ falls on a metal with work function $W_e = 3.5\\text{ eV}$. The stopping potential $V_s$ is:",
    "questionAr": "يسقط ضوء أحادي اللون تردده $\\nu = 1.5 \\times 10^{15}\\text{ Hz}$ على فلز دالة شغله $W_e = 3.5\\text{ eV}$. فإن جهد الإيقاف $V_s$ اللازم لمنع وصول الإلكترونات للمصعد يساوي:",
    "optionsEn": [
      "$V_s \\approx 2.71\\text{ V}$",
      "$V_s \\approx 6.21\\text{ V}$",
      "$V_s \\approx 0.79\\text{ V}$",
      "$V_s \\approx 1.50\\text{ V}$"
    ],
    "optionsAr": [
      "$V_s \\approx 2.71\\text{ V}$",
      "$V_s \\approx 6.21\\text{ V}$",
      "$V_s \\approx 0.79\\text{ V}$",
      "$V_s \\approx 1.50\\text{ V}$"
    ],
    "correctAnswer": "$V_s \\approx 2.71\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "Calculate $E = h\\nu$ in eV, then $eV_s = E - W_e \\implies V_s = \\frac{E - W_e}{e}$.",
    "hintAr": "$E = \\frac{h\\nu}{e} = 6.21\\text{ eV} \\implies V_s = 6.21 - 3.5 = 2.71\\text{ V}$.",
    "stepByStepSolutionEn": [
      "$E = \\frac{6.625 \\times 10^{-34} \\times 1.5 \\times 10^{15}}{1.6 \\times 10^{-19}}\\text{ eV} = \\frac{9.9375 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 6.21\\text{ eV}$. Then $eV_s = 6.21 - 3.5 = 2.71\\text{ eV} \\implies V_s = 2.71\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "طاقة الفوتون $E = 6.21\\text{ إلكترون فولت}$. إذن $KE_{\\max} = 6.21 - 3.5 = 2.71\\text{ إلكترون فولت}$، وبالتالي جهد الإيقاف $V_s = 2.71\\text{ فولت}$."
    ],
    "teacherTipEn": "Direct method: express photon energy directly in electron-volts to quickly subtract the work function.",
    "teacherTipAr": "طريقة سريعة: احسب طاقة الفوتون مباشرة بالإلكترون فولت ثم اطرح دالة الشغل لتحصل على جهد الإيقاف بالفولت."
  },
  {
    "id": "egbac_phys_ch5_db_med_30",
    "titleEn": "Ratio of Light Force on Reflecting vs Absorbing Surface",
    "titleAr": "النسبة بين قوة الضوء على سطح عاكس وسطح ماص",
    "difficulty": "medium",
    "questionEn": "Two identical laser beams of power $P$ illuminate two different plates: Plate 1 is a 100% reflecting mirror, and Plate 2 is a 100% absorbing black surface. The ratio of forces $F_1 / F_2$ exerted on the plates is:",
    "questionAr": "سقط شعاعا ليزر متماثلان قدرة كل منهما $P$ على لوحين: اللوح الأول مرآة تامة الانعكاس 100%، واللوح الثاني سطح أسود تام الامتصاص 100%. فإن النسبة بين القوتين $F_1 / F_2$ تساوي:",
    "optionsEn": [
      "$\\frac{F_1}{F_2} = 1$",
      "$\\frac{F_1}{F_2} = 2$",
      "$\\frac{F_1}{F_2} = \\frac{1}{2}$",
      "$\\frac{F_1}{F_2} = 4$"
    ],
    "optionsAr": [
      "$\\frac{F_1}{F_2} = 1$",
      "$\\frac{F_1}{F_2} = 2$",
      "$\\frac{F_1}{F_2} = \\frac{1}{2}$",
      "$\\frac{F_1}{F_2} = 4$"
    ],
    "correctAnswer": "$\\frac{F_1}{F_2} = 2$",
    "correctIndex": 1,
    "hintEn": "Reflecting: $\\Delta p = 2p \\implies F_1 = \\frac{2P}{c}$. Absorbing: $\\Delta p = p \\implies F_2 = \\frac{P}{c}$.",
    "hintAr": "الانعكاس يغير كمية التحرك بمقدار $2p$ بينما الامتصاص بمقدار $p$.",
    "stepByStepSolutionEn": [
      "For reflection, incoming momentum is $+p$ and outgoing is $-p$, so $\\Delta p = 2p$, giving $F_1 = \\frac{2P}{c}$. For absorption, outgoing momentum is zero, so $\\Delta p = p$, giving $F_2 = \\frac{P}{c}$. Therefore $F_1 / F_2 = 2$."
    ],
    "stepByStepSolutionAr": [
      "في الانعكاس التام $\\Delta p = 2p \\implies F_1 = \\frac{2P}{c}$، وفي الامتصاص التام $\\Delta p = p \\implies F_2 = \\frac{P}{c}$، فتكون النسبة 2."
    ],
    "teacherTipEn": "Reflection imparts twice the mechanical force and radiation pressure of absorption because the photons bounce backward.",
    "teacherTipAr": "الانعكاس يعطي ضعف القوة والضغط الإشعاعي لأن الفوتونات ترتد في الاتجاه المعاكس."
  },
  {
    "id": "egbac_phys_ch5_db_med_31",
    "titleEn": "Mass Ratio of Photons with Different Wavelengths",
    "titleAr": "نسبة الكتلة المكافئة لفوتونين مختلفين في الطول الموجي",
    "difficulty": "medium",
    "questionEn": "Two photons have wavelengths $\\lambda_1 = 400\\text{ nm}$ (violet) and $\\lambda_2 = 800\\text{ nm}$ (infrared). The ratio of their equivalent masses during motion ($m_1 / m_2$) is:",
    "questionAr": "فوتونان طولاهما الموجيان $\\lambda_1 = 400\\text{ nm}$ و $\\lambda_2 = 800\\text{ nm}$. فإن النسبة بين كتلتيهما المكافئتين أثناء الحركة ($\\frac{m_1}{m_2}$) تساوي:",
    "optionsEn": [
      "$\\frac{m_1}{m_2} = \\frac{1}{2}$",
      "$\\frac{m_1}{m_2} = 4$",
      "$\\frac{m_1}{m_2} = 2$",
      "$\\frac{m_1}{m_2} = 1$"
    ],
    "optionsAr": [
      "$\\frac{m_1}{m_2} = \\frac{1}{2}$",
      "$\\frac{m_1}{m_2} = 4$",
      "$\\frac{m_1}{m_2} = 2$",
      "$\\frac{m_1}{m_2} = 1$"
    ],
    "correctAnswer": "$\\frac{m_1}{m_2} = 2$",
    "correctIndex": 2,
    "hintEn": "$m = \\frac{h}{c\\lambda} \\propto \\frac{1}{\\lambda} \\implies \\frac{m_1}{m_2} = \\frac{\\lambda_2}{\\lambda_1}$.",
    "hintAr": "الكتلة المكافئة للفوتون تتناسب عكسياً مع الطول الموجي: $m = \\frac{h}{c\\lambda}$.",
    "stepByStepSolutionEn": [
      "From $E = mc^2 = \\frac{hc}{\\lambda}$, we have $m = \\frac{h}{c\\lambda}$. Thus $\\frac{m_1}{m_2} = \\frac{\\lambda_2}{\\lambda_1} = \\frac{800}{400} = 2$."
    ],
    "stepByStepSolutionAr": [
      "$m = \\frac{h}{c\\lambda} \\implies \\frac{m_1}{m_2} = \\frac{\\lambda_2}{\\lambda_1} = \\frac{800}{400} = 2$."
    ],
    "teacherTipEn": "Shorter wavelength photons have higher frequency, higher energy, higher momentum, and higher dynamic mass.",
    "teacherTipAr": "الفوتون ذو الطول الموجي الأقصر له تردد وطاقة وكمية تحرك وكتلة مكافئة أكبر."
  },
  {
    "id": "egbac_phys_ch5_db_med_32",
    "titleEn": "de Broglie Wavelength of Alpha Particle vs Proton at Same Speed",
    "titleAr": "طول موجة دي برولي لجسيم ألفا مقارنة ببروتون لهما نفس السرعة",
    "difficulty": "medium",
    "questionEn": "An alpha particle ($m_\\alpha \\approx 4 m_p$) and a proton ($m_p$) move at the same speed $v$. If the de Broglie wavelength of the proton is $\\lambda_p = 2.0\\text{ pm}$, the wavelength of the alpha particle is:",
    "questionAr": "يتحرك جسيم ألفا ($m_\\alpha \\approx 4 m_p$) وبروتون ($m_p$) بنفس السرعة $v$. فإذا كان طول موجة دي برولي المصاحبة للبروتون $\\lambda_p = 2.0\\text{ pm}$، فإن طول موجة جسيم ألفا $\\lambda_\\alpha$ يساوي:",
    "optionsEn": [
      "$\\lambda_\\alpha = 8.0\\text{ pm}$",
      "$\\lambda_\\alpha = 4.0\\text{ pm}$",
      "$\\lambda_\\alpha = 1.0\\text{ pm}$",
      "$\\lambda_\\alpha = 0.5\\text{ pm}$"
    ],
    "optionsAr": [
      "$\\lambda_\\alpha = 8.0\\text{ pm}$",
      "$\\lambda_\\alpha = 4.0\\text{ pm}$",
      "$\\lambda_\\alpha = 1.0\\text{ pm}$",
      "$\\lambda_\\alpha = 0.5\\text{ pm}$"
    ],
    "correctAnswer": "$\\lambda_\\alpha = 0.5\\text{ pm}$",
    "correctIndex": 3,
    "hintEn": "$\\lambda = \\frac{h}{mv} \\implies \\frac{\\lambda_\\alpha}{\\lambda_p} = \\frac{m_p}{m_\\alpha} = \\frac{1}{4}$.",
    "hintAr": "عند ثبوت السرعة: $\\lambda_\\alpha = \\lambda_p \\times \\frac{m_p}{m_\\alpha} = \\frac{2.0}{4}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_\\alpha = \\frac{h}{m_\\alpha v} = \\frac{h}{4 m_p v} = \\frac{1}{4} \\lambda_p = \\frac{2.0\\text{ pm}}{4} = 0.5\\text{ pm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_\\alpha = \\frac{\\lambda_p}{4} = \\frac{2.0}{4} = 0.5\\text{ بيكومتر}$."
    ],
    "teacherTipEn": "Heavier particles moving at the same speed have shorter de Broglie wavelengths because momentum is larger.",
    "teacherTipAr": "الجسيمات الأثقل التي تتحرك بنفس السرعة تمتلك كمية تحرك أكبر فيكون طول موجتها المصاحبة أقصر."
  },
  {
    "id": "egbac_phys_ch5_db_med_33",
    "titleEn": "Frequency Calculation for Orange Light Photon",
    "titleAr": "حساب تردد فوتون الضوء البرتقالي",
    "difficulty": "medium",
    "questionEn": "What is the frequency of a photon of orange light with a wavelength of $\\lambda = 600\\text{ nm}$ in vacuum ($c = 3.0 \\times 10^8\\text{ m/s}$)?",
    "questionAr": "ما هو تردد فوتون من الضوء البرتقالي طوله الموجي $\\lambda = 600\\text{ nm}$ في الفراغ؟",
    "optionsEn": [
      "$\\nu = 5.0 \\times 10^{14}\\text{ Hz}$",
      "$\\nu = 2.0 \\times 10^{14}\\text{ Hz}$",
      "$\\nu = 1.8 \\times 10^{15}\\text{ Hz}$",
      "$\\nu = 5.0 \\times 10^{11}\\text{ Hz}$"
    ],
    "optionsAr": [
      "$\\nu = 5.0 \\times 10^{14}\\text{ Hz}$",
      "$\\nu = 2.0 \\times 10^{14}\\text{ Hz}$",
      "$\\nu = 1.8 \\times 10^{15}\\text{ Hz}$",
      "$\\nu = 5.0 \\times 10^{11}\\text{ Hz}$"
    ],
    "correctAnswer": "$\\nu = 5.0 \\times 10^{14}\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$\\nu = \\frac{c}{\\lambda}$. Convert nm to meters ($10^{-9}\\text{ m}$).",
    "hintAr": "$\\nu = \\frac{c}{\\lambda}$ مع تحويل النانومتر إلى متر.",
    "stepByStepSolutionEn": [
      "$\\nu = \\frac{c}{\\lambda} = \\frac{3.0 \\times 10^8\\text{ m/s}}{600 \\times 10^{-9}\\text{ m}} = \\frac{3.0 \\times 10^8}{6.0 \\times 10^{-7}} = 5.0 \\times 10^{14}\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\nu = \\frac{3 \\times 10^8}{600 \\times 10^{-9}} = 5.0 \\times 10^{14}\\text{ هرتز}$."
    ],
    "teacherTipEn": "Always verify unit prefixes: $1\\text{ nm} = 10^{-9}\\text{ m}$, $1\\text{ \\AA} = 10^{-10}\\text{ m}$, $1\\text{ pm} = 10^{-12}\\text{ m}$.",
    "teacherTipAr": "تأكد دائماً من تحويل الوحدات: النانومتر $10^{-9}$، الأنجستروم $10^{-10}$، والبيكومتر $10^{-12}$."
  },
  {
    "id": "egbac_phys_ch5_db_med_34",
    "titleEn": "Compton Photon Frequency Loss",
    "titleAr": "النقص في تردد الفوتون بعد تشتته في ظاهرة كومبتون",
    "difficulty": "medium",
    "questionEn": "In a Compton collision, an incident photon with frequency $\\nu_1$ scatters at an angle $\\theta > 0$. Which relation correctly describes the frequency $\\nu_2$ and speed $c_2$ of the scattered photon?",
    "questionAr": "في تصادم كومبتون، فوتون ساقط تردده $\\nu_1$ تشتت بزاوية $\\theta > 0$. أي العلاقات التالية تصف تردد $\\nu_2$ وسرعة $c_2$ الفوتون المشتت بشكل صحيح؟",
    "optionsEn": [
      "$\\nu_2 < \\nu_1$ and $c_2 < c_1$",
      "$\\nu_2 < \\nu_1$ and $c_2 = c_1 = c$",
      "$\\nu_2 > \\nu_1$ and $c_2 = c$",
      "$\\nu_2 = \\nu_1$ and $c_2 < c$"
    ],
    "optionsAr": [
      "$\\nu_2 < \\nu_1$ وسرعته تقل $c_2 < c_1$",
      "$\\nu_2 < \\nu_1$ وسرعته $c_2 = c_1 = c$ (ثابتة لا تتغير)",
      "$\\nu_2 > \\nu_1$ وسرعته ثابتة $c_2 = c$",
      "$\\nu_2 = \\nu_1$ وسرعته تقل $c_2 < c$"
    ],
    "correctAnswer": "$\\nu_2 < \\nu_1$ and $c_2 = c_1 = c$",
    "correctIndex": 1,
    "hintEn": "Photon energy decreases ($E = h\\nu \\implies \\nu \\downarrow$), but light always travels at speed $c$ in vacuum.",
    "hintAr": "طاقة الفوتون وتردده يقلان، لكن سرعة الضوء في الفراغ ثابت كوني $c$.",
    "stepByStepSolutionEn": [
      "The scattered photon gives up part of its energy to the electron, so $h\\nu_2 < h\\nu_1 \\implies \\nu_2 < \\nu_1$ (and $\\lambda_2 > \\lambda_1$). However, its speed in vacuum remains strictly invariant at $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته فيقل تردده ويزداد طوله الموجي، ولكن سرعته تظل ثابتة وتساوي سرعة الضوء $c$."
    ],
    "teacherTipEn": "A classic misconception: photons do NOT slow down when they lose energy; their frequency drops while speed remains $c$.",
    "teacherTipAr": "خطأ شائع: الفوتون لا يبطئ عند فقد الطاقة بل يقل تردده وتظل سرعته ثابتة $c$."
  },
  {
    "id": "egbac_phys_ch5_db_med_35",
    "titleEn": "Work Function from Known Threshold Frequency",
    "titleAr": "حساب دالة الشغل بمعلومية التردد الحرج",
    "difficulty": "medium",
    "questionEn": "The threshold frequency of a metallic surface is $\\nu_c = 8.0 \\times 10^{14}\\text{ Hz}$. The work function of this metal in electron-volts is:",
    "questionAr": "التردد الحرج لسطح فلز هو $\\nu_c = 8.0 \\times 10^{14}\\text{ Hz}$. فإن دالة شغل هذا الفلز بالإلكترون فولت تساوي:",
    "optionsEn": [
      "$W_e \\approx 5.30\\text{ eV}$",
      "$W_e \\approx 1.60\\text{ eV}$",
      "$W_e \\approx 3.31\\text{ eV}$",
      "$W_e \\approx 8.00\\text{ eV}$"
    ],
    "optionsAr": [
      "$W_e \\approx 5.30\\text{ eV}$",
      "$W_e \\approx 1.60\\text{ eV}$",
      "$W_e \\approx 3.31\\text{ eV}$",
      "$W_e \\approx 8.00\\text{ eV}$"
    ],
    "correctAnswer": "$W_e \\approx 3.31\\text{ eV}$",
    "correctIndex": 2,
    "hintEn": "$W_e = h\\nu_c$ in Joules, then divide by $1.6 \\times 10^{-19}\\text{ J/eV}$.",
    "hintAr": "$W_e = \\frac{h\\nu_c}{e}$.",
    "stepByStepSolutionEn": [
      "$W_e = \\frac{(6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}) \\times (8.0 \\times 10^{14}\\text{ s}^{-1})}{1.6 \\times 10^{-19}\\text{ J/eV}} = \\frac{5.30 \\times 10^{-19}\\text{ J}}{1.6 \\times 10^{-19}\\text{ J/eV}} \\approx 3.3125\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$W_e = \\frac{6.625 \\times 10^{-34} \\times 8 \\times 10^{14}}{1.6 \\times 10^{-19}} \\approx 3.31\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "The work function is the minimum energy required to liberate the most weakly bound valence electron from the surface without imparting kinetic energy.",
    "teacherTipAr": "دالة الشغل هي أقل طاقة تكفي لتحرير أضعف الإلكترونات ارتباطاً بسطح الفلز دون إكسابها طاقة حركة."
  },
  {
    "id": "egbac_phys_ch5_db_med_36",
    "titleEn": "Zero Current for Sub-Threshold Radiation",
    "titleAr": "انعدام التيار الكهروضوئي للترددات دون الحرجة",
    "difficulty": "medium",
    "questionEn": "A high-intensity laser of power $P = 1000\\text{ W}$ emits light of frequency $\\nu < \\nu_c$ onto a photocell. What is the reading of the sensitive microammeter connected in the circuit?",
    "questionAr": "سقطت حزمة ليزر عالية الشدة قدرتها $P = 1000\\text{ W}$ بتردد $\\nu < \\nu_c$ على مهبط خلية كهروضوئية. ما قراءة الميكروأميتر الحساس المتصل بالدائرة؟",
    "optionsEn": [
      "$I = 1000\\text{ A}$",
      "$I$ increases linearly with time as electrons accumulate thermal energy",
      "$I$ equals the saturation current divided by work function",
      "$I = 0\\text{ A}$ (strictly zero, regardless of intensity or exposure duration)"
    ],
    "optionsAr": [
      "$I = 1000\\text{ A}$",
      "$I$ يزداد تدريجياً مع الزمن بتراكم الطاقة على الإلكترونات",
      "$I$ يساوي تيار التشبع مقسوماً على دالة الشغل",
      "$I = 0\\text{ A}$ (صفر تماماً مهما بلغت شدة الضوء أو زمن التعريض)"
    ],
    "correctAnswer": "$I = 0\\text{ A}$ (strictly zero, regardless of intensity or exposure duration)",
    "correctIndex": 3,
    "hintEn": "If $\\nu < \\nu_c$, individual photons lack sufficient energy to liberate an electron ($h\\nu < W_e$).",
    "hintAr": "طالما أن التردد أقل من التردد الحرج، لا تنبعث أي إلكترونات أياً كانت الشدة.",
    "stepByStepSolutionEn": [
      "Photoelectric emission is a one-to-one photon-electron interaction. If $h\\nu < W_e$, no single photon has enough energy to liberate an electron, so photocurrent is exactly zero, regardless of beam intensity."
    ],
    "stepByStepSolutionAr": [
      "الانبعاث الكهروضوئي تفاعل فوتون واحد مع إلكترون واحد. وبما أن طاقة الفوتون أقل من دالة الشغل، لا يتحرر أي إلكترون ويظل التيار صفراً مهما بلغت الشدة."
    ],
    "teacherTipEn": "This direct failure of classical physics was the definitive experimental proof that light is quantized into discrete localized photons.",
    "teacherTipAr": "عجز الشدة العالية عن تحرير إلكترون كان الدليل القاطع على خطأ النظرية الموجية الكلاسيكية وصحة نظرية الكم لأينشتاين."
  },
  {
    "id": "egbac_phys_ch5_db_med_37",
    "titleEn": "Control Grid Voltage Effect in CRT",
    "titleAr": "دور جهد الشبكة الحاكمة في أنبوبة أشعة الكاثود",
    "difficulty": "medium",
    "questionEn": "In a cathode ray tube (CRT), making the control grid potential more negative with respect to the cathode causes:",
    "questionAr": "في أنبوبة أشعة الكاثود، عند زيادة الجهد السالب للشبكة الحاكمة بالنسبة للكاثود، فإن ذلك يؤدي إلى:",
    "optionsEn": [
      "Decreasing the number of electrons reaching the screen, reducing screen brightness",
      "Increasing the speed of electrons and deflecting them horizontally",
      "Changing the color of light emitted by the fluorescent screen",
      "Increasing the de Broglie wavelength without changing electron count"
    ],
    "optionsAr": [
      "تقليل عدد الإلكترونات المارة نحو الشاشة، فتقل إضاءة الشاشة الفلورسية",
      "زيادة سرعة الإلكترونات وانحرافها أفقياً",
      "تغيير لون الضوء المنبعث من الشاشة الفلورسية",
      "زيادة طول موجة دي برولي دون تغيير عدد الإلكترونات"
    ],
    "correctAnswer": "Decreasing the number of electrons reaching the screen, reducing screen brightness",
    "correctIndex": 0,
    "hintEn": "The negative grid repels electrons, throttling the beam flux.",
    "hintAr": "جهد الشبكة السالب يتنافر مع الإلكترونات فيتحكم في شدة التيار الإلكتروني.",
    "stepByStepSolutionEn": [
      "The control grid carries a negative potential that repels electrons emitted by the cathode. Making it more negative repels more electrons, decreasing the electron current that reaches the screen and dimming the image."
    ],
    "stepByStepSolutionAr": [
      "تحمل الشبكة جهداً سالباً يتنافر مع الإلكترونات. وبزيادة سلبيتها يتنافر عدد أكبر من الإلكترونات فيقل تيار الحزمة وتقل شدة إضاءة النقطة على الشاشة."
    ],
    "teacherTipEn": "The control grid controls brightness (current intensity); the anode controls speed (kinetic energy).",
    "teacherTipAr": "الشبكة تتحكم في شدة الإضاءة (عدد الإلكترونات)، بينما المصعد المعجل يتحكم في سرعة وطاقة الإلكترونات."
  },
  {
    "id": "egbac_phys_ch5_db_med_38",
    "titleEn": "Resolving Limit Ratio: Electron vs Optical Microscope",
    "titleAr": "مقارنة القدرة التحليلية للمجهر الإلكتروني والمجهر الضوئي",
    "difficulty": "medium",
    "questionEn": "The wavelength of visible light is $\\lambda_{\\text{light}} \\sim 500\\text{ nm}$. An electron microscope operates with electron wavelength $\\lambda_e \\sim 0.05\\text{ nm}$. The ratio of the electron microscope's resolving limit to that of the optical microscope is approximately:",
    "questionAr": "الطول الموجي للضوء المرئي $\\sim 500\\text{ nm}$، بينما الطول الموجي للإلكترونات في مجهر إلكتروني $\\sim 0.05\\text{ nm}$. النسبة بين القدرة التحليلية (القدرة على الفصل) للمجهر الإلكتروني إلى المجهر الضوئي تساوي تقريباً:",
    "optionsEn": [
      "$100\\text{ times higher}$",
      "$10000\\text{ times higher } \\left(\\frac{500}{0.05} = 10^4\\right)$",
      "$10\\text{ times higher}$",
      "$2\\text{ times higher}$"
    ],
    "optionsAr": [
      "$100\\text{ مرة أكبر}$",
      "$10000\\text{ مرة أكبر } \\left(\\frac{500}{0.05} = 10^4\\right)$",
      "$10\\text{ مرات أكبر}$",
      "$2\\text{ مرة فقط}$"
    ],
    "correctAnswer": "$10000\\text{ times higher } \\left(\\frac{500}{0.05} = 10^4\\right)$",
    "correctIndex": 1,
    "hintEn": "Resolving power is inversely proportional to wavelength: $\\text{RP} \\propto \\frac{1}{\\lambda}$.",
    "hintAr": "القدرة على التكبير والفصل تتناسب عكسياً مع الطول الموجي للشعاع المستخدم.",
    "stepByStepSolutionEn": [
      "Resolving power is inversely proportional to the probing wavelength: $\\frac{\\text{RP}_e}{\\text{RP}_{\\text{light}}} = \\frac{\\lambda_{\\text{light}}}{\\lambda_e} = \\frac{500\\text{ nm}}{0.05\\text{ nm}} = 10000$."
    ],
    "stepByStepSolutionAr": [
      "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: $\\frac{500}{0.05} = 10000$ مرة."
    ],
    "teacherTipEn": "The extremely short de Broglie wavelength of accelerated electrons overcomes the optical diffraction limit, allowing direct imaging of viruses and macromolecular structures.",
    "teacherTipAr": "قصر الطول الموجي لموجات دي برولي المصاحبة للإلكترونات المعجلة يمكننا من التغلب على حيود الضوء ورؤية الفيروسات الدقيقة."
  },
  {
    "id": "egbac_phys_ch5_db_med_39",
    "titleEn": "Kinetic Energy of Electron from de Broglie Wavelength",
    "titleAr": "حساب طاقة حركة الإلكترون من طول موجة دي برولي",
    "difficulty": "medium",
    "questionEn": "An electron has a de Broglie wavelength of $\\lambda = 0.2\\text{ nm}$. What is its kinetic energy in electron-volts?",
    "questionAr": "إلكترون طول موجة دي برولي المصاحبة له $\\lambda = 0.2\\text{ nm}$. ما هي طاقة حركته بالإلكترون فولت؟",
    "optionsEn": [
      "$KE \\approx 150.4\\text{ eV}$",
      "$KE \\approx 9.4\\text{ eV}$",
      "$KE \\approx 37.6\\text{ eV}$",
      "$KE \\approx 300\\text{ eV}$"
    ],
    "optionsAr": [
      "$KE \\approx 150.4\\text{ eV}$",
      "$KE \\approx 9.4\\text{ eV}$",
      "$KE \\approx 37.6\\text{ eV}$",
      "$KE \\approx 300\\text{ eV}$"
    ],
    "correctAnswer": "$KE \\approx 37.6\\text{ eV}$",
    "correctIndex": 2,
    "hintEn": "$KE = \\frac{p^2}{2m_e} = \\frac{h^2}{2m_e \\lambda^2}$.",
    "hintAr": "$KE = \\frac{h^2}{2m_e \\lambda^2}$ ثم حول للإلكترون فولت.",
    "stepByStepSolutionEn": [
      "$p = \\frac{h}{\\lambda} = \\frac{6.625 \\times 10^{-34}}{0.2 \\times 10^{-9}} = 3.3125 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$. Then $KE = \\frac{p^2}{2m_e} = \\frac{(3.3125 \\times 10^{-24})^2}{2 \\times 9.1 \\times 10^{-31}} \\approx 6.03 \\times 10^{-18}\\text{ J} \\approx 37.68\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$KE = \\frac{p^2}{2m_e} \\approx 6.03 \\times 10^{-18}\\text{ جول} \\approx 37.7\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "Recall that $\\lambda \\propto \\frac{1}{\\sqrt{KE}}$. Doubling the wavelength from $0.1\\text{ nm}$ to $0.2\\text{ nm}$ reduces $KE$ by a factor of 4 (from $\\sim 150.4\\text{ eV}$ to $\\sim 37.6\\text{ eV}$).",
    "teacherTipAr": "تذكر أن مضاعفة الطول الموجي إلى الضعف يقلل طاقة الحركة إلى الربع لأن التناسب عكسي مع مربع الطول الموجي."
  },
  {
    "id": "egbac_phys_ch5_db_med_40",
    "titleEn": "Photon Relativistic Linear Momentum Formula",
    "titleAr": "صيغ كمية تحرك الفوتون",
    "difficulty": "medium",
    "questionEn": "Which set of expressions correctly gives the linear momentum $p$ of a photon in vacuum?",
    "questionAr": "أي مجموعات العلاقات التالية تعبر بدقة عن كمية تحرك الفوتون $p$ في الفراغ؟",
    "optionsEn": [
      "$p = \\frac{h\\nu}{c^2} = mc^2$",
      "$p = \\frac{h}{\\nu} = \\frac{Ec}{\\lambda}$",
      "$p = \\frac{1}{2} mc = \\frac{h\\lambda}{c}$",
      "$p = \\frac{h}{\\lambda} = \\frac{h\\nu}{c} = \\frac{E}{c} = mc$"
    ],
    "optionsAr": [
      "$p = \\frac{h\\nu}{c^2} = mc^2$",
      "$p = \\frac{h}{\\nu} = \\frac{Ec}{\\lambda}$",
      "$p = \\frac{1}{2} mc = \\frac{h\\lambda}{c}$",
      "$p = \\frac{h}{\\lambda} = \\frac{h\\nu}{c} = \\frac{E}{c} = mc$"
    ],
    "correctAnswer": "$p = \\frac{h}{\\lambda} = \\frac{h\\nu}{c} = \\frac{E}{c} = mc$",
    "correctIndex": 3,
    "hintEn": "Use $E = pc$ and $E = h\\nu = \\frac{hc}{\\lambda}$.",
    "hintAr": "علاقات كمية التحرك: $p = \\frac{E}{c} = \\frac{h\\nu}{c} = \\frac{h}{\\lambda} = mc$.",
    "stepByStepSolutionEn": [
      "Since $E = pc$, we have $p = \\frac{E}{c} = \\frac{h\\nu}{c} = \\frac{h}{\\lambda} = mc$, where $m = \\frac{h\\nu}{c^2}$ is the dynamic equivalent mass."
    ],
    "stepByStepSolutionAr": [
      "من العلاقة $E = pc$ نجد أن $p = \\frac{E}{c} = \\frac{h\\nu}{c} = \\frac{h}{\\lambda} = mc$."
    ],
    "teacherTipEn": "These equivalences bridge Einstein's mass-energy relation ($E = mc^2$) and de Broglie's wave relation ($p = h/\\lambda$).",
    "teacherTipAr": "هذه الصيغ تربط بين معادلة أينشتاين للكتلة والطاقة ومعادلة دي برولي للموجات المادية."
  },
  {
    "id": "egbac_phys_ch5_db_med_41",
    "titleEn": "Fundamental Distinction: Compton Effect vs Photoelectric Effect",
    "titleAr": "الفارق الجوهري بين تأثير كومبتون والظاهرة الكهروضوئية",
    "difficulty": "medium",
    "questionEn": "In the photoelectric effect, the incident photon is completely absorbed by a bound electron. In the Compton effect:",
    "questionAr": "في التأثير الكهروضوئي يمتص الإلكترون المرتبط فوتون الضوء الساقط كلياً. بينما في تأثير كومبتون:",
    "optionsEn": [
      "The photon collides elastically with a free/loosely bound electron, scattering with reduced energy and longer wavelength",
      "The electron is destroyed and converted entirely into photon energy",
      "The photon splits into two electrons of equal opposite charges",
      "The scattered photon has higher frequency and shorter wavelength than the incident photon"
    ],
    "optionsAr": [
      "يتصادم الفوتون تصادماً مرناً مع إلكترون حر، فيتشتت الفوتون بطاقة أقل وطول موجي أكبر محتفظاً بوجوده كفوتون",
      "يفنى الإلكترون ويتحول بالكامل إلى طاقة إشعاعية",
      "ينقسم الفوتون إلى إلكترونين متساويين في الشحنة ومتضادين في الإشارة",
      "يمتلك الفوتون المشتت تردداً أعلى وطولاً موجياً أقصر من الفوتون الساقط"
    ],
    "correctAnswer": "The photon collides elastically with a free/loosely bound electron, scattering with reduced energy and longer wavelength",
    "correctIndex": 0,
    "hintEn": "Compton scattering is an elastic collision between a photon and a free electron.",
    "hintAr": "تصادم كومبتون هو تصادم مرن بين فوتون وإلكترون حر.",
    "stepByStepSolutionEn": [
      "Because a completely free electron cannot absorb a photon without violating simultaneous conservation of energy and momentum, the photon must scatter elastically, transferring a portion of its momentum and energy to the electron."
    ],
    "stepByStepSolutionAr": [
      "لا يمكن لإلكترون حر امتصاص فوتون كلياً لمخالفة ذلك لقانوني بقاء الطاقة وكمية التحرك معاً، لذلك يتشتت الفوتون فاقداً جزءاً من طاقته وكمية تحركه."
    ],
    "teacherTipEn": "Photoelectric effect occurs with bound inner/outer electrons in metals; Compton scattering occurs primarily with free or weakly bound electrons.",
    "teacherTipAr": "الظاهرة الكهروضوئية تحدث مع إلكترونات مرتبطة بالسطح، بينما تأثير كومبتون يحدث مع إلكترونات حرة."
  },
  {
    "id": "egbac_phys_ch5_db_med_42",
    "titleEn": "Recoil Electron Velocity in Compton Interaction",
    "titleAr": "سرعة الإلكترون المرتد في تأثير كومبتون",
    "difficulty": "medium",
    "questionEn": "In a Compton collision, an electron receives kinetic energy $KE = 8.19 \\times 10^{-16}\\text{ J}$ from an X-ray photon. What is the approximate non-relativistic speed of the recoil electron ($m_e = 9.1 \\times 10^{-31}\\text{ kg}$)?",
    "questionAr": "في تصادم كومبتون اكتسب إلكترون طاقة حركة $KE = 8.19 \\times 10^{-16}\\text{ J}$ من فوتون أشعة سينية. ما هي السرعة التقريبية للإلكترون المرتد؟",
    "optionsEn": [
      "$v \\approx 3.0 \\times 10^8\\text{ m/s}$",
      "$v \\approx 4.24 \\times 10^7\\text{ m/s}$",
      "$v \\approx 9.0 \\times 10^6\\text{ m/s}$",
      "$v \\approx 1.8 \\times 10^8\\text{ m/s}$"
    ],
    "optionsAr": [
      "$v \\approx 3.0 \\times 10^8\\text{ m/s}$",
      "$v \\approx 4.24 \\times 10^7\\text{ m/s}$",
      "$v \\approx 9.0 \\times 10^6\\text{ m/s}$",
      "$v \\approx 1.8 \\times 10^8\\text{ m/s}$"
    ],
    "correctAnswer": "$v \\approx 4.24 \\times 10^7\\text{ m/s}$",
    "correctIndex": 1,
    "hintEn": "$v = \\sqrt{\\frac{2 KE}{m_e}}$.",
    "hintAr": "$v = \\sqrt{\\frac{2 KE}{m_e}}$.",
    "stepByStepSolutionEn": [
      "$v = \\sqrt{\\frac{2 \\times 8.19 \\times 10^{-16}\\text{ J}}{9.1 \\times 10^{-31}\\text{ kg}}} = \\sqrt{1.8 \\times 10^{15}} \\approx 4.24 \\times 10^7\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "$v = \\sqrt{\\frac{2 \\times 8.19 \\times 10^{-16}}{9.1 \\times 10^{-31}}} \\approx 4.24 \\times 10^7\\text{ م/ث}$."
    ],
    "teacherTipEn": "The recoil electron travels at a significant fraction of light speed ($\\sim 14\\% c$), carrying away the momentum lost by the scattered photon.",
    "teacherTipAr": "يكتسب الإلكترون المرتد سرعة كبيرة تمثل جزءاً ملحوظاً من سرعة الضوء حاملاً كمية التحرك المفقودة من الفوتون."
  },
  {
    "id": "egbac_phys_ch5_db_med_43",
    "titleEn": "Photoelectron Emission Rate from Laser Illumination",
    "titleAr": "معدل انبعاث الإلكترونات الضوئية عند سقوط شعاع ليزر",
    "difficulty": "medium",
    "questionEn": "A monochromatic UV laser ($\\lambda = 200\\text{ nm}$, photon energy $6.21\\text{ eV}$) with power $P = 3.1\\text{ mW}$ illuminates a photocathode ($W_e = 4.0\\text{ eV}$). Assuming every photon ejects one electron (100% quantum efficiency), the photoelectric saturation current is approximately:",
    "questionAr": "يسقط شعاع ليزر فوق بنفسجي ($\\lambda = 200\\text{ nm}$، طاقة فوتونه $6.21\\text{ eV}$) قدرته $P = 3.1\\text{ mW}$ على مهبط خلية ($W_e = 4.0\\text{ eV}$). بافتراض كفاءة انبعاث 100% (كل فوتون يحرر إلكتروناً)، فإن تيار التشبع الكهروضوئي يساوي تقريباً:",
    "optionsEn": [
      "$I \\approx 3.1\\text{ A}$",
      "$I \\approx 1.6 \\times 10^{-19}\\text{ A}$",
      "$I \\approx 5.0 \\times 10^{-4}\\text{ A} = 0.5\\text{ mA}$",
      "$I \\approx 1.24\\text{ mA}$"
    ],
    "optionsAr": [
      "$I \\approx 3.1\\text{ A}$",
      "$I \\approx 1.6 \\times 10^{-19}\\text{ A}$",
      "$I \\approx 5.0 \\times 10^{-4}\\text{ A} = 0.5\\text{ mA}$",
      "$I \\approx 1.24\\text{ mA}$"
    ],
    "correctAnswer": "$I \\approx 5.0 \\times 10^{-4}\\text{ A} = 0.5\\text{ mA}$",
    "correctIndex": 2,
    "hintEn": "$\\Phi_L = \\frac{P}{E_{\\text{photon}}}$, then current $I = \\Phi_L \\times e$.",
    "hintAr": "احسب عدد الفوتونات في الثانية $\\Phi_L = \\frac{P}{E}$ ثم التيار $I = \\Phi_L \\times e$.",
    "stepByStepSolutionEn": [
      "Photon energy in Joules: $E = 6.21 \\times 1.6 \\times 10^{-19}\\text{ J} \\approx 9.936 \\times 10^{-19}\\text{ J}$. Photon rate $\\Phi_L = \\frac{3.1 \\times 10^{-3}\\text{ W}}{9.936 \\times 10^{-19}\\text{ J}} \\approx 3.12 \\times 10^{15}\\text{ photons/s}$. Saturation current $I = \\Phi_L \\times e = 3.12 \\times 10^{15} \\times 1.6 \\times 10^{-19}\\text{ C/s} \\approx 5.0 \\times 10^{-4}\\text{ A} = 0.5\\text{ mA}$."
    ],
    "stepByStepSolutionAr": [
      "$\\Phi_L = \\frac{P}{E} = \\frac{3.1 \\times 10^{-3}}{6.21 \\times 1.6 \\times 10^{-19}} \\approx 3.12 \\times 10^{15}\\text{ فوتون/ثانية}$. إذن $I = \\Phi_L \\times e = 0.5\\text{ مللي أمبير}$."
    ],
    "teacherTipEn": "Notice that $I = \\frac{P}{E_{\\text{photon}}} \\times e = \\frac{P}{E_{\\text{photon (in eV)}}}$, providing an elegant shortcut.",
    "teacherTipAr": "قاعدة سريعة: التيار = القدرة بالواط مقسومة على طاقة الفوتون بالإلكترون فولت مباشرة."
  },
  {
    "id": "egbac_phys_ch5_db_med_44",
    "titleEn": "Thermal Neutron de Broglie Wavelength",
    "titleAr": "طول موجة دي برولي لنيوترون حراري",
    "difficulty": "medium",
    "questionEn": "A thermal neutron at room temperature has average kinetic energy $KE = 0.04\\text{ eV}$. Given neutron mass $m_n = 1.675 \\times 10^{-27}\\text{ kg}$, its de Broglie wavelength is approximately:",
    "questionAr": "نيوترون حراري عند درجة حرارة الغرفة يمتلك متوسط طاقة حركة $KE = 0.04\\text{ eV}$. علماً بأن كتلة النيوترون $m_n = 1.675 \\times 10^{-27}\\text{ kg}$، فإن طول موجة دي برولي المصاحبة له تساوي تقريباً:",
    "optionsEn": [
      "$\\lambda \\approx 5.5 \\times 10^{-7}\\text{ m}$",
      "$\\lambda \\approx 2.4 \\times 10^{-15}\\text{ m}$",
      "$\\lambda \\approx 6.63 \\times 10^{-34}\\text{ m}$",
      "$\\lambda \\approx 1.43 \\times 10^{-10}\\text{ m} = 0.143\\text{ nm} = 1.43\\text{ \\AA}$"
    ],
    "optionsAr": [
      "$\\lambda \\approx 5.5 \\times 10^{-7}\\text{ m}$",
      "$\\lambda \\approx 2.4 \\times 10^{-15}\\text{ m}$",
      "$\\lambda \\approx 6.63 \\times 10^{-34}\\text{ m}$",
      "$\\lambda \\approx 1.43 \\times 10^{-10}\\text{ m} = 0.143\\text{ nm} = 1.43\\text{ \\AA}$"
    ],
    "correctAnswer": "$\\lambda \\approx 1.43 \\times 10^{-10}\\text{ m} = 0.143\\text{ nm} = 1.43\\text{ \\AA}$",
    "correctIndex": 3,
    "hintEn": "$\\lambda = \\frac{h}{\\sqrt{2m_n KE}}$. Convert $0.04\\text{ eV}$ to Joules.",
    "hintAr": "$\\lambda = \\frac{h}{\\sqrt{2m_n KE}}$ مع تحويل $0.04\\text{ eV}$ إلى جول.",
    "stepByStepSolutionEn": [
      "$KE = 0.04 \\times 1.6 \\times 10^{-19}\\text{ J} = 6.4 \\times 10^{-21}\\text{ J}$. Then $p = \\sqrt{2 \\times (1.675 \\times 10^{-27}) \\times (6.4 \\times 10^{-21})} = \\sqrt{2.144 \\times 10^{-47}} \\approx 4.63 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$. $\\lambda = \\frac{6.625 \\times 10^{-34}}{4.63 \\times 10^{-24}} \\approx 1.43 \\times 10^{-10}\\text{ m} = 0.143\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{h}{\\sqrt{2m_n KE}} \\approx 0.143\\text{ نانومتر} = 1.43\\text{ أنجستروم}$."
    ],
    "teacherTipEn": "Because thermal neutrons have wavelengths comparable to interatomic crystal spacings ($\\sim 1-2\\text{ \\AA}$), they are widely used for neutron diffraction crystal studies.",
    "teacherTipAr": "لأن الطول الموجي للنيوترونات الحرارية يقارب المسافات البينية في البلورات، تُستخدم بكثرة في دراسة تراكيب البلورات بالحيود."
  },
  {
    "id": "egbac_phys_ch5_db_med_45",
    "titleEn": "Parallel Plots for Different Metals on KE vs Frequency Graph",
    "titleAr": "تفسير توازي خطوط الفلزات المختلفة في رسم طاقة الحركة والتردد",
    "difficulty": "medium",
    "questionEn": "When the relationship between maximum kinetic energy ($KE_{\\max}$) and incident frequency ($\\nu$) is plotted for three different metals (Cesium, Potassium, and Silver), the resulting three straight lines are:",
    "questionAr": "عند رسم العلاقة بين أقصى طاقة حركة للإلكترونات ($KE_{\\max}$) وتردد الضوء الساقط ($\\nu$) لثلاثة فلزات مختلفة (السيزيوم، البوتاسيوم، والفضة)، فإن الخطوط المستقيمة الناتجة تكون:",
    "optionsEn": [
      "Strictly parallel lines having the exact same slope equal to Planck's constant $h$",
      "Converging at a single common intercept on the frequency axis",
      "Lines whose slopes increase proportionally with the atomic weight of the metal",
      "Lines perpendicular to one another"
    ],
    "optionsAr": [
      "خطوطاً متوازية تماماً ولها نفس الميل الذي يساوي ثابت بلانك $h$",
      "خطوطاً تلتقي في نقطة واحدة مشتركة على محور التردد",
      "خطوطاً يزداد ميلها بزيادة الوزن الذري للفلز",
      "خطوطاً متعامدة على بعضها البعض"
    ],
    "correctAnswer": "Strictly parallel lines having the exact same slope equal to Planck's constant $h$",
    "correctIndex": 0,
    "hintEn": "Slope $=\\frac{\\Delta KE}{\\Delta \\nu} = h$, which is a universal physical constant.",
    "hintAr": "ميل الخط المستقيم دائماً يساوي ثابت بلانك $h$ وهو ثابت كوني.",
    "stepByStepSolutionEn": [
      "The slope of $KE_{\\max} = h\\nu - W_e$ with respect to $\\nu$ is identically $h$. Since Planck's constant is a fundamental universal constant of nature, it is identical for all metals. Hence, all lines are parallel."
    ],
    "stepByStepSolutionAr": [
      "ميل الخط يمثل ثابت بلانك $h$، وبما أن ثابت بلانك ثابت كوني عام لا يتغير بتغير نوع مادة المهبط، فإن جميع الخطوط تكون متوازية تماماً ولها نفس الميل."
    ],
    "teacherTipEn": "The only difference between the metals is their position along the frequency axis (different threshold frequencies $\\nu_c$) and vertical intercepts (different work functions $-W_e$).",
    "teacherTipAr": "الفارق الوحيد بين الفلزات هو موضع تقاطعها مع محور التردد ($\\nu_c$) ومحور الطاقة ($-W_e$)."
  },
  {
    "id": "egbac_phys_ch5_db_med_46",
    "titleEn": "Work Function Relation to Cutoff Wavelength",
    "titleAr": "العلاقة الرياضية لدالة الشغل بدلالة الطول الموجي الحرج",
    "difficulty": "medium",
    "questionEn": "The work function $W_e$ of a metal is mathematically related to its cutoff threshold wavelength $\\lambda_c$ by:",
    "questionAr": "ترتبط دالة الشغل $W_e$ لفلز بطوله الموجي الحرج $\\lambda_c$ بالعلاقة الرياضية:",
    "optionsEn": [
      "$W_e = \\frac{h\\lambda_c}{c}$",
      "$W_e = \\frac{hc}{\\lambda_c}$",
      "$W_e = \\frac{c\\lambda_c}{h}$",
      "$W_e = hc\\lambda_c$"
    ],
    "optionsAr": [
      "$W_e = \\frac{h\\lambda_c}{c}$",
      "$W_e = \\frac{hc}{\\lambda_c}$",
      "$W_e = \\frac{c\\lambda_c}{h}$",
      "$W_e = hc\\lambda_c$"
    ],
    "correctAnswer": "$W_e = \\frac{hc}{\\lambda_c}$",
    "correctIndex": 1,
    "hintEn": "$W_e = h\\nu_c$ and $\\nu_c = \\frac{c}{\\lambda_c}$.",
    "hintAr": "$W_e = h\\nu_c = \\frac{hc}{\\lambda_c}$.",
    "stepByStepSolutionEn": [
      "By definition, the threshold frequency is $\\nu_c = \\frac{c}{\\lambda_c}$. Substituting into $W_e = h\\nu_c$ gives $W_e = \\frac{hc}{\\lambda_c}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\nu_c = \\frac{c}{\\lambda_c}$ ودالة الشغل $W_e = h\\nu_c$، إذن $W_e = \\frac{hc}{\\lambda_c}$."
    ],
    "teacherTipEn": "Notice the inverse relationship: a metal with a large work function has a short threshold wavelength.",
    "teacherTipAr": "لاحظ التناسب العكسي: الفلز ذو دالة الشغل الكبيرة يكون طوله الموجي الحرج قصيراً."
  },
  {
    "id": "egbac_phys_ch5_db_med_47",
    "titleEn": "Independence of Stopping Potential from Incident Intensity",
    "titleAr": "استقلال جهد الإيقاف عن شدة الضوء الساقط",
    "difficulty": "medium",
    "questionEn": "A metal surface is illuminated by monochromatic light of frequency $\\nu > \\nu_c$. If the intensity of the light is increased from $100\\text{ W/m}^2$ to $400\\text{ W/m}^2$, the stopping potential $V_s$ will:",
    "questionAr": "سقط ضوء أحادي اللون بتردد $\\nu > \\nu_c$ على فلز. إذا زادت شدة الضوء الساقط من $100\\text{ W/m}^2$ إلى $400\\text{ W/m}^2$ مع ثبوت التردد، فإن جهد الإيقاف $V_s$:",
    "optionsEn": [
      "Increase by a factor of 4",
      "Increase by a factor of 2",
      "Remain strictly unchanged",
      "Decrease to one-fourth its initial value"
    ],
    "optionsAr": [
      "يزداد بمقدار 4 أمثال",
      "يتضاعف إلى مثليه",
      "يظل ثابتاً تماماً دون أي تغير",
      "يقل إلى ربع قيمته الأصلية"
    ],
    "correctAnswer": "Remain strictly unchanged",
    "correctIndex": 2,
    "hintEn": "$eV_s = h\\nu - W_e$ depends only on frequency $\\nu$ and work function $W_e$, not on beam intensity.",
    "hintAr": "جهد الإيقاف يعتمد على طاقة الفوتون الواحد $h\\nu$ ودالة الشغل فقط، ولا يعتمد إطلاقاً على الشدة.",
    "stepByStepSolutionEn": [
      "Stopping potential is determined exclusively by the maximum kinetic energy of the photoelectrons: $eV_s = KE_{\\max} = h\\nu - W_e$. Because neither $h\\nu$ nor $W_e$ changes with intensity, $V_s$ is completely unaffected."
    ],
    "stepByStepSolutionAr": [
      "جهد الإيقاف يحدده أقصى طاقة حركة يحملها إلكترون منبعث: $eV_s = h\\nu - W_e$. وبما أن التردد ودالة الشغل لم يتغيرا، يظل جهد الإيقاف ثابتاً."
    ],
    "teacherTipEn": "This independence was one of the key milestones that disproved classical wave theory, which predicted that higher intensity waves should impart more kinetic energy.",
    "teacherTipAr": "ثبوت طاقة حركة الإلكترونات مع زيادة شدة الضوء كان أحد الأدلة الفاصلة التي أثبتت فشل النظرية الكلاسيكية."
  },
  {
    "id": "egbac_phys_ch5_db_med_48",
    "titleEn": "Speed Scaling with Accelerating Voltage in Electron Optics",
    "titleAr": "تغير سرعة الإلكترون بتغير فرق الجهد المعجل",
    "difficulty": "medium",
    "questionEn": "An electron accelerated from rest across a voltage $V$ reaches speed $v$. If the accelerating voltage is increased to $9V$, its new speed is:",
    "questionAr": "عُجل إلكترون من السكون عبر فرق جهد $V$ فاكتسب سرعة $v$. إذا زاد فرق الجهد المعجل إلى $9V$، فإن سرعته الجديدة تصبح:",
    "optionsEn": [
      "$9v$",
      "$\\sqrt{3}v$",
      "$\\frac{v}{3}$",
      "$3v$"
    ],
    "optionsAr": [
      "$9v$",
      "$\\sqrt{3}v$",
      "$\\frac{v}{3}$",
      "$3v$"
    ],
    "correctAnswer": "$3v$",
    "correctIndex": 3,
    "hintEn": "$v = \\sqrt{\\frac{2eV}{m_e}} \\implies v \\propto \\sqrt{V}$.",
    "hintAr": "$v \\propto \\sqrt{V}$.",
    "stepByStepSolutionEn": [
      "Since $eV = \\frac{1}{2}m_e v^2$, velocity is proportional to the square root of the potential difference: $v \\propto \\sqrt{V}$. Increasing voltage by a factor of 9 increases speed by $\\sqrt{9} = 3$ times."
    ],
    "stepByStepSolutionAr": [
      "بما أن $v = \\sqrt{\\frac{2eV}{m_e}}$ فإن السرعة تتناسب طردياً مع الجذر التربيعي لفرق الجهد. إذن زيادة الجهد 9 أمثال تزيد السرعة بمقدار $\\sqrt{9} = 3$ أمثال."
    ],
    "teacherTipEn": "Be careful not to confuse speed ($v \\propto \\sqrt{V}$) with kinetic energy ($KE \\propto V$).",
    "teacherTipAr": "احذر الخلط بين السرعة التي تتناسب مع $\\sqrt{V}$ وطاقة الحركة التي تتناسب طردياً مع $V$."
  },
  {
    "id": "egbac_phys_ch5_db_med_49",
    "titleEn": "Wien Peak Shift Direction upon Heating",
    "titleAr": "اتجاه إزاحة قمة منحنى بلانك عند تسخين الجسم المشع",
    "difficulty": "medium",
    "questionEn": "As a heated solid body's temperature is raised from $1000\\text{ K}$ to $3000\\text{ K}$, the peak of its radiation curve:",
    "questionAr": "عند رفع درجة حرارة جسم صلب متوهج من $1000\\text{ K}$ إلى $3000\\text{ K}$، فإن قمة منحنى إشعاعه:",
    "optionsEn": [
      "Shifts toward shorter wavelengths (higher frequencies), and the total area under the curve increases dramatically",
      "Shifts toward longer wavelengths, and the peak height decreases",
      "Remains at the same wavelength while decreasing in amplitude",
      "Shifts toward the infrared region"
    ],
    "optionsAr": [
      "تنزاح نحو أطوال موجية أقصر (ترددات أعلى)، وتزداد المساحة الكلية أسفل المنحنى زيادة هائلة",
      "تنزاح نحو أطوال موجية أطول، ويقل ارتفاع القمة",
      "تثبت عند نفس الطول الموجي مع انخفاض شدة الإشعاع",
      "تنزاح نحو منطقة الأشعة تحت الحمراء"
    ],
    "correctAnswer": "Shifts toward shorter wavelengths (higher frequencies), and the total area under the curve increases dramatically",
    "correctIndex": 0,
    "hintEn": "Wien's law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. Stefan-Boltzmann: Area $\\propto T^4$.",
    "hintAr": "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. والمساحة الكلية تتناسب مع $T^4$.",
    "stepByStepSolutionEn": [
      "According to Wien's displacement law, peak wavelength decreases inversely with temperature: $\\lambda_{\\max} \\propto 1/T$, shifting the peak leftward toward higher frequencies (violet/UV). Simultaneously, total emitted energy (area under curve) scales as $T^4$."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لقانون فين، يقل الطول الموجي لأقصى شدة إشعاع مع ارتفاع درجة الحرارة المطلقة فتنزاح القمة يساراً نحو الترددات الأعلى، وتزداد المساحة الكلية أسفل المنحنى بمقدار $T^4$."
    ],
    "teacherTipEn": "This explains why heating an iron bar makes it glow dull red, then bright orange, then brilliant yellow-white.",
    "teacherTipAr": "هذا يفسر تدرج لون قطعة الحديد عند تسخينها من الأحمر القاتم إلى البرتقالي ثم الأصفر وأخيراً الأبيض المتوهج."
  },
  {
    "id": "egbac_phys_ch5_db_med_50",
    "titleEn": "Laser Force on Completely Absorbing Target",
    "titleAr": "قوة شعاع الليزر على هدف تام الامتصاص",
    "difficulty": "medium",
    "questionEn": "A high-power laser beam with power $P = 900\\text{ MW}$ is completely absorbed by a black target. The force exerted on the target is:",
    "questionAr": "يسقط شعاع ليزر عالي القدرة $P = 900\\text{ MW}$ على هدف أسود تام الامتصاص. فإن القوة التي يؤثر بها الشعاع على الهدف تساوي:",
    "optionsEn": [
      "$F = 6.0\\text{ N}$",
      "$F = 3.0\\text{ N}$",
      "$F = 1.5\\text{ N}$",
      "$F = 2.7 \\times 10^{17}\\text{ N}$"
    ],
    "optionsAr": [
      "$F = 6.0\\text{ N}$",
      "$F = 3.0\\text{ N}$",
      "$F = 1.5\\text{ N}$",
      "$F = 2.7 \\times 10^{17}\\text{ N}$"
    ],
    "correctAnswer": "$F = 3.0\\text{ N}$",
    "correctIndex": 1,
    "hintEn": "Complete absorption: $F = \\frac{P}{c}$.",
    "hintAr": "في حالة الامتصاص التام: $F = \\frac{P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{P}{c} = \\frac{900 \\times 10^6\\text{ W}}{3 \\times 10^8\\text{ m/s}} = 3.0\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{P}{c} = \\frac{900 \\times 10^6}{3 \\times 10^8} = 3\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Compare: if the target were a perfect mirror (100% reflection), the force would be double: $\\frac{2P}{c} = 6.0\\text{ N}$.",
    "teacherTipAr": "للمقارنة: لو كان السطح عاكساً تماماً لكانت القوة الضعف: $\\frac{2P}{c} = 6\\text{ نيوتن}$."
  },
  {
    "id": "egbac_phys_ch5_db_med_51",
    "titleEn": "Direct Kinetic Energy Calculation in Joules",
    "titleAr": "حساب أقصى طاقة حركة للإلكترون المنبعث بالجول",
    "difficulty": "medium",
    "questionEn": "Photons of energy $E = 7.0 \\times 10^{-19}\\text{ J}$ strike a metal having work function $W_e = 4.2 \\times 10^{-19}\\text{ J}$. The maximum kinetic energy of the released electrons is:",
    "questionAr": "تسقط فوتونات طاقتها $E = 7.0 \\times 10^{-19}\\text{ J}$ على فلز دالة شغله $W_e = 4.2 \\times 10^{-19}\\text{ J}$. فإن أقصى طاقة حركة للإلكترونات المنبعثة تساوي:",
    "optionsEn": [
      "$KE_{\\max} = 11.2 \\times 10^{-19}\\text{ J}$",
      "$KE_{\\max} = 1.67 \\times 10^{-19}\\text{ J}$",
      "$KE_{\\max} = 2.8 \\times 10^{-19}\\text{ J} = 1.75\\text{ eV}$",
      "$KE_{\\max} = 2.94 \\times 10^{-38}\\text{ J}$"
    ],
    "optionsAr": [
      "$KE_{\\max} = 11.2 \\times 10^{-19}\\text{ J}$",
      "$KE_{\\max} = 1.67 \\times 10^{-19}\\text{ J}$",
      "$KE_{\\max} = 2.8 \\times 10^{-19}\\text{ J} = 1.75\\text{ eV}$",
      "$KE_{\\max} = 2.94 \\times 10^{-38}\\text{ J}$"
    ],
    "correctAnswer": "$KE_{\\max} = 2.8 \\times 10^{-19}\\text{ J} = 1.75\\text{ eV}$",
    "correctIndex": 2,
    "hintEn": "$KE_{\\max} = E - W_e$.",
    "hintAr": "$KE_{\\max} = E - W_e$.",
    "stepByStepSolutionEn": [
      "$KE_{\\max} = 7.0 \\times 10^{-19}\\text{ J} - 4.2 \\times 10^{-19}\\text{ J} = 2.8 \\times 10^{-19}\\text{ J}$. In eV: $\\frac{2.8 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 1.75\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$KE_{\\max} = 7.0 \\times 10^{-19} - 4.2 \\times 10^{-19} = 2.8 \\times 10^{-19}\\text{ جول} = 1.75\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "Consistently verify that both energy and work function are in the same unit (either both in Joules or both in eV) before subtracting.",
    "teacherTipAr": "تأكد دائماً من توحيد الوحدات (إما كلاهما بالجول أو كلاهما بالإلكترون فولت) قبل إجراء عملية الطرح."
  },
  {
    "id": "egbac_phys_ch5_db_med_52",
    "titleEn": "Electron Speed Ratio for Two Accelerating Voltages",
    "titleAr": "نسبة سرعتي إلكترونين معجلين بجهدين مختلفين",
    "difficulty": "medium",
    "questionEn": "Two electrons are accelerated from rest across potential differences of $V_1 = 50\\text{ V}$ and $V_2 = 200\\text{ V}$ respectively. The ratio of their final speeds $v_1 / v_2$ is:",
    "questionAr": "عُجل إلكترونان من السكون بفرقي جهد $V_1 = 50\\text{ V}$ و $V_2 = 200\\text{ V}$ على الترتيب. فإن النسبة بين سرعتيهما النهائيتين $\\frac{v_1}{v_2}$ تساوي:",
    "optionsEn": [
      "$\\frac{v_1}{v_2} = \\frac{1}{4}$",
      "$\\frac{v_1}{v_2} = 2$",
      "$\\frac{v_1}{v_2} = \\frac{1}{\\sqrt{2}}$",
      "$\\frac{v_1}{v_2} = \\frac{1}{2}$"
    ],
    "optionsAr": [
      "$\\frac{v_1}{v_2} = \\frac{1}{4}$",
      "$\\frac{v_1}{v_2} = 2$",
      "$\\frac{v_1}{v_2} = \\frac{1}{\\sqrt{2}}$",
      "$\\frac{v_1}{v_2} = \\frac{1}{2}$"
    ],
    "correctAnswer": "$\\frac{v_1}{v_2} = \\frac{1}{2}$",
    "correctIndex": 3,
    "hintEn": "$\\frac{v_1}{v_2} = \\sqrt{\\frac{V_1}{V_2}}$.",
    "hintAr": "$\\frac{v_1}{v_2} = \\sqrt{\\frac{V_1}{V_2}}$.",
    "stepByStepSolutionEn": [
      "From $v = \\sqrt{\\frac{2eV}{m_e}}$, we obtain $\\frac{v_1}{v_2} = \\sqrt{\\frac{V_1}{V_2}} = \\sqrt{\\frac{50}{200}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{v_1}{v_2} = \\sqrt{\\frac{50}{200}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2}$."
    ],
    "teacherTipEn": "Kinetic energy scales directly with $V$, so speed scales with $\\sqrt{V}$.",
    "teacherTipAr": "طاقة الحركة تتناسب مع $V$ مباشرة، ولذلك تتناسب السرعة مع $\\sqrt{V}$."
  },
  {
    "id": "egbac_phys_ch5_db_med_53",
    "titleEn": "de Broglie Wavelength for 150 V Accelerated Electron",
    "titleAr": "حساب طول موجة دي برولي لإلكترون معجل بجهد 150 فولت",
    "difficulty": "medium",
    "questionEn": "An electron is accelerated from rest through a potential difference of $V = 150\\text{ V}$. Its de Broglie wavelength is:",
    "questionAr": "عُجل إلكترون من السكون عبر فرق جهد $V = 150\\text{ V}$. فإن طول موجة دي برولي المصاحبة له تساوي:",
    "optionsEn": [
      "$\\lambda \\approx 1.00 \\times 10^{-10}\\text{ m} = 0.100\\text{ nm} = 1.00\\text{ \\AA}$",
      "$\\lambda \\approx 2.45 \\times 10^{-10}\\text{ m}$",
      "$\\lambda \\approx 0.50 \\times 10^{-10}\\text{ m}$",
      "$\\lambda \\approx 1.50 \\times 10^{-9}\\text{ m}$"
    ],
    "optionsAr": [
      "$\\lambda \\approx 1.00 \\times 10^{-10}\\text{ m} = 0.100\\text{ nm} = 1.00\\text{ \\AA}$",
      "$\\lambda \\approx 2.45 \\times 10^{-10}\\text{ m}$",
      "$\\lambda \\approx 0.50 \\times 10^{-10}\\text{ m}$",
      "$\\lambda \\approx 1.50 \\times 10^{-9}\\text{ m}$"
    ],
    "correctAnswer": "$\\lambda \\approx 1.00 \\times 10^{-10}\\text{ m} = 0.100\\text{ nm} = 1.00\\text{ \\AA}$",
    "correctIndex": 0,
    "hintEn": "$\\lambda \\approx \\frac{1.228}{\\sqrt{V}}\\text{ nm} = \\frac{1.228}{\\sqrt{150}}$.",
    "hintAr": "$\\lambda = \\frac{h}{\\sqrt{2m_e e V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{6.625 \\times 10^{-34}}{\\sqrt{2 \\times 9.1 \\times 10^{-31} \\times 1.6 \\times 10^{-19} \\times 150}} = \\frac{6.625 \\times 10^{-34}}{\\sqrt{4.368 \\times 10^{-47}}} \\approx 1.003 \\times 10^{-10}\\text{ m} = 0.100\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{1.228}{\\sqrt{150}} \\approx \\frac{1.228}{12.247} \\approx 0.100\\text{ نانومتر} = 1\\text{ أنجستروم}$."
    ],
    "teacherTipEn": "An accelerating voltage of $150\\text{ V}$ produces an electron beam whose wavelength is exactly $1\\text{ \\AA}$, ideal for atomic lattice diffraction.",
    "teacherTipAr": "فرق جهد $150\\text{ V}$ يعطي إلكترونات بطول موجي $1\\text{ \\AA}$ مساوٍ تماماً للمسافات البينية الذرية في البلورات."
  },
  {
    "id": "egbac_phys_ch5_db_med_54",
    "titleEn": "Vector Momentum Conservation in Compton Scattering",
    "titleAr": "بقاء كمية التحرك كمتجه في تصادم كومبتون",
    "difficulty": "medium",
    "questionEn": "During a Compton collision between an incident X-ray photon and an initially stationary electron, total vector linear momentum is:",
    "questionAr": "أثناء تصادم كومبتون بين فوتون أشعة سينية ساقط وإلكترون ساكن، فإن كمية التحرك الخطية المتجهة الكلية:",
    "optionsEn": [
      "Conserved in magnitude only, not in direction",
      "Strictly conserved in magnitude and direction: $\\vec{p}_{\\text{initial, photon}} = \\vec{p}_{\\text{scattered, photon}} + \\vec{p}_{\\text{recoil, electron}}$",
      "Not conserved because light waves cannot carry physical momentum",
      "Converted entirely into rotational angular momentum"
    ],
    "optionsAr": [
      "محفوظة في المقدار فقط دون الاتجاه",
      "محفوظة تماماً مقداراً واتجاهاً: كمية تحرك الفوتون الساقط = المجموع الاتجاهي لكميتي تحرك الفوتون المشتت والإلكترون المرتد",
      "غير محفوظة لأن الأمواج الضوئية لا تحمل كمية تحرك ميكانيكية",
      "تتحول بالكامل إلى كمية تحرك زاوية دورانية"
    ],
    "correctAnswer": "Strictly conserved in magnitude and direction: $\\vec{p}_{\\text{initial, photon}} = \\vec{p}_{\\text{scattered, photon}} + \\vec{p}_{\\text{recoil, electron}}$",
    "correctIndex": 1,
    "hintEn": "Momentum is a vector quantity conserved in all elastic collisions.",
    "hintAr": "كمية التحرك كمية متجهة وقانون بقائها ينطبق في جميع التصادمات المرنة.",
    "stepByStepSolutionEn": [
      "Compton demonstrated that the photon-electron interaction is a textbook relativistic elastic collision. Both total energy and total vector linear momentum are strictly conserved: $\\vec{p}_1 = \\vec{p}_2 + \\vec{p}_e$."
    ],
    "stepByStepSolutionAr": [
      "أثبت كومبتون أن تصادم الفوتون مع الإلكترون تصادم مرن يخضع لقانون بقاء كمية التحرك متجهاً: $\\vec{p}_1 = \\vec{p}_2 + \\vec{p}_e$ وقانون بقاء الطاقة معاً."
    ],
    "teacherTipEn": "Because momentum is a vector, we analyze momentum components along both the original incident beam axis and the perpendicular axis.",
    "teacherTipAr": "بما أن كمية التحرك كمية متجهة، يتم تحليلها في اتجاهين متعامدين (اتجاه حركة الفوتون الساقط والاتجاه العمودي عليه)."
  },
  {
    "id": "egbac_phys_ch5_db_med_55",
    "titleEn": "Stopping Potential at Triple Threshold Frequency",
    "titleAr": "جهد الإيقاف عند ثلاثة أمثال التردد الحرج",
    "difficulty": "medium",
    "questionEn": "Monochromatic light of frequency $\\nu = 3\\nu_c$ illuminates a metal with work function $W_e$. What is the stopping potential $V_s$ in terms of $W_e$ and $e$?",
    "questionAr": "يسقط ضوء أحادي اللون تردده $\\nu = 3\\nu_c$ على فلز دالة شغله $W_e$. ما قيمة جهد الإيقاف $V_s$ بدلالة $W_e$ و $e$؟",
    "optionsEn": [
      "$V_s = \\frac{3W_e}{e}$",
      "$V_s = \\frac{W_e}{e}$",
      "$V_s = \\frac{2W_e}{e}$",
      "$V_s = \\frac{4W_e}{e}$"
    ],
    "optionsAr": [
      "$V_s = \\frac{3W_e}{e}$",
      "$V_s = \\frac{W_e}{e}$",
      "$V_s = \\frac{2W_e}{e}$",
      "$V_s = \\frac{4W_e}{e}$"
    ],
    "correctAnswer": "$V_s = \\frac{2W_e}{e}$",
    "correctIndex": 2,
    "hintEn": "$eV_s = h\\nu - W_e = h(3\\nu_c) - h\\nu_c = 2h\\nu_c = 2W_e$.",
    "hintAr": "$eV_s = 3W_e - W_e = 2W_e \\implies V_s = \\frac{2W_e}{e}$.",
    "stepByStepSolutionEn": [
      "Since $\\nu = 3\\nu_c$, photon energy is $E = 3h\\nu_c = 3W_e$. Then $KE_{\\max} = E - W_e = 3W_e - W_e = 2W_e$. Since $eV_s = KE_{\\max}$, we obtain $V_s = \\frac{2W_e}{e}$."
    ],
    "stepByStepSolutionAr": [
      "$E = 3W_e$. إذن $KE_{\\max} = 3W_e - W_e = 2W_e$. وبما أن $eV_s = KE_{\\max}$، إذن $V_s = \\frac{2W_e}{e}$."
    ],
    "teacherTipEn": "Notice that the kinetic energy is twice the work function ($2W_e$), not three times.",
    "teacherTipAr": "لاحظ أن طاقة الحركة الناتجة تساوي ضعف دالة الشغل وليس ثلاثة أمثالها بسبب خصم دالة الشغل للتحرير."
  },
  {
    "id": "egbac_phys_ch5_db_med_56",
    "titleEn": "Photon Energy Wavelength Inverse Proportionality",
    "titleAr": "التناسب العكسي بين طاقة الفوتون وطوله الموجي",
    "difficulty": "medium",
    "questionEn": "Which graph correctly represents the relationship between photon energy $E$ on the vertical axis and photon wavelength $\\lambda$ on the horizontal axis?",
    "questionAr": "أي الأشكال البيانية التالية يمثل العلاقة بين طاقة الفوتون $E$ على المحور الرأسي وطوله الموجي $\\lambda$ على المحور الأفقي؟",
    "optionsEn": [
      "A straight line passing through the origin with positive slope",
      "A horizontal straight line parallel to the wavelength axis",
      "A parabolic curve opening upward ($E \\propto \\lambda^2$)",
      "A rectangular hyperbola representing inverse variation ($E \\propto \\frac{1}{\\lambda}$)"
    ],
    "optionsAr": [
      "خط مستقيم يمر بنقطة الأصل ذو ميل موجب",
      "خط مستقيم أفقي موازٍ لمحور الطول الموجي",
      "منحنى قطع مكافئ ينفتح لأعلى ($E \\propto \\lambda^2$)",
      "منحنى قطع زائد يمثل تناسباً عكسياً ($E \\propto \\frac{1}{\\lambda}$)"
    ],
    "correctAnswer": "A rectangular hyperbola representing inverse variation ($E \\propto \\frac{1}{\\lambda}$)",
    "correctIndex": 3,
    "hintEn": "$E = \\frac{hc}{\\lambda} \\implies E \\cdot \\lambda = hc = \\text{constant}$.",
    "hintAr": "$E = \\frac{hc}{\\lambda}$ تمثل علاقة عكسية من الدرجة الأولى (قطع زائد).",
    "stepByStepSolutionEn": [
      "Since $E = \\frac{hc}{\\lambda}$, the product $E \\lambda = hc$ is constant. Plotting $E$ vs $\\lambda$ gives a smooth rectangular hyperbola approaching both axes asymptotically."
    ],
    "stepByStepSolutionAr": [
      "العلاقة بين $E$ و $\\lambda$ علاقة عكسية طبقاً للقانون $E = \\frac{hc}{\\lambda}$، فيكون الرسم البياني منحنى عكسي (قطع زائد). وإذا رُسمت $E$ مع $\\frac{1}{\\lambda}$ تعطي خطاً مستقيماً ميله $hc$."
    ],
    "teacherTipEn": "If plotted against the reciprocal of wavelength ($1/\\lambda$), the graph becomes a straight line passing through the origin with slope $hc$.",
    "teacherTipAr": "لو رسمت العلاقة بين $E$ ومقلوب الطول الموجي $\\frac{1}{\\lambda}$ لكانت خطاً مستقيماً ميله $hc$ ويمر بنقطة الأصل."
  },
  {
    "id": "egbac_phys_ch5_db_med_57",
    "titleEn": "de Broglie Wavelength of Macroscopic Moving Car",
    "titleAr": "طول موجة دي برولي لسيارة متحركة في المقياس الماكروسكوبي",
    "difficulty": "medium",
    "questionEn": "A car of mass $m = 1000\\text{ kg}$ travels at a speed of $v = 30\\text{ m/s}$. Its associated de Broglie wavelength is:",
    "questionAr": "سيارة كتلتها $m = 1000\\text{ kg}$ تتحرك بسرعة $v = 30\\text{ m/s}$. فإن طول موجة دي برولي المصاحبة لحركتها تساوي:",
    "optionsEn": [
      "$\\lambda \\approx 2.21 \\times 10^{-38}\\text{ m}$ (completely unobservable at macroscopic scales)",
      "$\\lambda \\approx 1.23\\text{ nm}$",
      "$\\lambda \\approx 500\\text{ nm}$",
      "$\\lambda = 0\\text{ m}$ (macroscopic bodies have no de Broglie waves)"
    ],
    "optionsAr": [
      "$\\lambda \\approx 2.21 \\times 10^{-38}\\text{ m}$ (متناهية الصغر ويستحيل رصدها عملياً)",
      "$\\lambda \\approx 1.23\\text{ nm}$",
      "$\\lambda \\approx 500\\text{ nm}$",
      "$\\lambda = 0\\text{ m}$ (الأجسام الكبيرة ليس لها موجات دي برولي مطلقاً)"
    ],
    "correctAnswer": "$\\lambda \\approx 2.21 \\times 10^{-38}\\text{ m}$ (completely unobservable at macroscopic scales)",
    "correctIndex": 0,
    "hintEn": "$\\lambda = \\frac{h}{mv}$.",
    "hintAr": "$\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{h}{mv} = \\frac{6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}}{1000\\text{ kg} \\times 30\\text{ m/s}} = \\frac{6.625 \\times 10^{-34}}{3.0 \\times 10^4} \\approx 2.21 \\times 10^{-38}\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{6.625 \\times 10^{-34}}{1000 \\times 30} \\approx 2.21 \\times 10^{-38}\\text{ متر}$."
    ],
    "teacherTipEn": "Because Planck's constant is extremely tiny ($10^{-34}$), macroscopic objects have wavelengths trillions of times smaller than an atomic nucleus, rendering wave effects like diffraction completely undetectable.",
    "teacherTipAr": "لصغر ثابت بلانك الفائق، يكون الطول الموجي للأجسام الكبيرة صغيراً جداً لأقصى درجة تفوق أبعاد النواة، فلا تظهر لها أي مظاهر حيود أو تداخل."
  },
  {
    "id": "egbac_phys_ch5_db_med_58",
    "titleEn": "Energy Ratio for Photons of Frequencies Nu and Two Nu",
    "titleAr": "نسبة طاقتي فوتونين تردداهما نيو واثنان نيو",
    "difficulty": "medium",
    "questionEn": "Two monochromatic beams consist of photons with frequencies $\\nu_1 = \\nu$ and $\\nu_2 = 2\\nu$. The ratio of their photon energies $E_1 / E_2$ is:",
    "questionAr": "حزمتان ضوئيتان أحاديتا اللون، تردد فوتونات الأولى $\\nu_1 = \\nu$ وتردد فوتونات الثانية $\\nu_2 = 2\\nu$. فإن نسبة طاقتي فوتونيهما $\\frac{E_1}{E_2}$ تساوي:",
    "optionsEn": [
      "$\\frac{E_1}{E_2} = 2$",
      "$\\frac{E_1}{E_2} = \\frac{1}{2}$",
      "$\\frac{E_1}{E_2} = \\frac{1}{4}$",
      "$\\frac{E_1}{E_2} = 1$"
    ],
    "optionsAr": [
      "$\\frac{E_1}{E_2} = 2$",
      "$\\frac{E_1}{E_2} = \\frac{1}{2}$",
      "$\\frac{E_1}{E_2} = \\frac{1}{4}$",
      "$\\frac{E_1}{E_2} = 1$"
    ],
    "correctAnswer": "$\\frac{E_1}{E_2} = \\frac{1}{2}$",
    "correctIndex": 1,
    "hintEn": "$E = h\\nu \\implies \\frac{E_1}{E_2} = \\frac{\\nu_1}{\\nu_2}$.",
    "hintAr": "$E \\propto \\nu \\implies \\frac{E_1}{E_2} = \\frac{\\nu_1}{\\nu_2}$.",
    "stepByStepSolutionEn": [
      "Since $E = h\\nu$ and $h$ is constant, energy is directly proportional to frequency: $\\frac{E_1}{E_2} = \\frac{\\nu}{2\\nu} = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $E = h\\nu$، فإن الطاقة تتناسب طردياً مع التردد: $\\frac{E_1}{E_2} = \\frac{\\nu}{2\\nu} = \\frac{1}{2}$."
    ],
    "teacherTipEn": "A photon with twice the frequency carries exactly twice the energy and twice the linear momentum.",
    "teacherTipAr": "الفوتون ذو التردد المضاعف يحمل ضعف الطاقة وضعف كمية التحرك."
  },
  {
    "id": "egbac_phys_ch5_db_med_59",
    "titleEn": "Stopping Potential Definition and Collector Polarity",
    "titleAr": "قطبية لوحي الخلية الكهروضوئية عند قياس جهد الإيقاف",
    "difficulty": "medium",
    "questionEn": "To measure the stopping potential $V_s$ in a photoelectric circuit, the polarity of the cell terminals must be set such that:",
    "questionAr": "لقياس جهد الإيقاف $V_s$ في دائرة الخلية الكهروضوئية، يجب ضبط قطبية لوحي الخلية بحيث يكون:",
    "optionsEn": [
      "The anode is made positive to attract electrons with greater force",
      "Both plates are grounded to zero potential",
      "The anode (collector) is made negative with respect to the cathode (emitter) to repel incoming electrons",
      "An alternating voltage with high frequency is applied between cathode and anode"
    ],
    "optionsAr": [
      "المصعد متصلاً بالقطب الموجب لجذب الإلكترونات بقوة أكبر",
      "كلا اللوحين متصلين بالأرض بجهد منعدم",
      "المصعد (اللوح الجامع) متصلاً بالقطب السالب بالنسبة للمهبط ليتنافر مع الإلكترونات المنبعثة ويبطئها",
      "توصيل جهد متردد عالي التردد بين المهبط والمصعد"
    ],
    "correctAnswer": "The anode (collector) is made negative with respect to the cathode (emitter) to repel incoming electrons",
    "correctIndex": 2,
    "hintEn": "A retarding negative potential on the collector repels electrons.",
    "hintAr": "جهد الإيقاف هو جهد سالب يوصل بالمصعد لإيقاف أسرع الإلكترونات عن الوصول إليه.",
    "stepByStepSolutionEn": [
      "By making the anode negative with respect to the cathode, an opposing electric field is created that decelerates the photoelectrons. The minimum negative potential that halts even the fastest electrons (reducing current to zero) is the stopping potential $V_s$."
    ],
    "stepByStepSolutionAr": [
      "يوصل المصعد بالقطب السالب فيعمل المجال الكهربي المعاكس على إبطاء الإلكترونات المنبعثة. وأقل جهد سالب يوقف أسرع الإلكترونات (فيصبح التيار صفراً) هو جهد الإيقاف."
    ],
    "teacherTipEn": "At stopping potential, the electrostatic potential energy barrier $eV_s$ equals the maximum initial kinetic energy $KE_{\\max}$.",
    "teacherTipAr": "عند جهد الإيقاف يتحول كل $KE_{\\max}$ لأسرع إلكترون إلى طاقة وضع كهربية $eV_s$."
  }
],
  hots: [
  {
    "id": "egbac_phys_ch5_db_hots_01",
    "titleEn": "Classical Wave Theory Failure on Threshold Frequency",
    "titleAr": "فشل النظرية الموجية الكلاسيكية في تفسير التردد الحرج",
    "difficulty": "hots",
    "questionEn": "Classical wave theory failed to explain the photoelectric effect because it assumed that:",
    "questionAr": "فشلت النظرية الموجية الكلاسيكية في تفسير الظاهرة الكهروضوئية لأنها افترضت أن:",
    "optionsEn": [
      "Electron emission depends solely on wave intensity, and light of any frequency could liberate electrons if intensity is high enough or exposure is long enough",
      "Light consists of localized discrete energy packets called photons",
      "Electrons inside the metal are bound by discrete energy levels",
      "The speed of light varies inversely with its frequency"
    ],
    "optionsAr": [
      "انبعاث الإلكترونات يعتمد فقط على شدة الموجة، وأن أي ضوء بأي تردد يمكنه تحرير إلكترونات إذا كانت شدته كافية أو تُرِك لفترة كافية",
      "الضوء يتكون من كمات منفصلة من الطاقة تسمى فوتونات",
      "الإلكترونات داخل الفلز مقيدة بمستويات طاقة كمية منفصلة",
      "سرعة الضوء تتغير عكسياً مع تردده في الفراغ"
    ],
    "correctAnswer": "Electron emission depends solely on wave intensity, and light of any frequency could liberate electrons if intensity is high enough or exposure is long enough",
    "correctIndex": 0,
    "hintEn": "Classical physics treated light as a continuous wave where energy accumulates over time.",
    "hintAr": "الفيزياء الكلاسيكية اعتبرت الضوء موجة متصلة تتراكم طاقتها بمرور الزمن.",
    "stepByStepSolutionEn": [
      "Classical wave mechanics predicted that an electron would gradually absorb energy from continuous electromagnetic wavefronts until reaching the liberation threshold, regardless of frequency. Experiments proved that emission is instantaneous and occurs only when photon frequency $\\nu \\ge \\nu_c$."
    ],
    "stepByStepSolutionAr": [
      "افترضت النظرية الكلاسيكية أن طاقة الموجة تتوزع بانتظام على مقدمة الموجة وتعتمد على الشدة، فبمرور الوقت تتراكم الطاقة ويتحرر الإلكترون. ولكن التجارب أثبتت أن الانبعاث لحظي ولا يحدث أبداً إذا كان التردد أقل من التردد الحرج مهما كانت الشدة."
    ],
    "teacherTipEn": "Einstein showed that energy is localized in indivisible quanta ($E = h\\nu$); an electron interacts with only one photon at a time.",
    "teacherTipAr": "أثبت أينشتاين أن طاقة الضوء مركزة في فوتونات كمية ($E = h\\nu$) وأن الإلكترون يمتص فوتوناً واحداً دفعة واحدة."
  },
  {
    "id": "egbac_phys_ch5_db_hots_02",
    "titleEn": "Why Compton Shift is Undetectable in Visible Light",
    "titleAr": "سبب عدم إمكانية رصد تأثير كومبتون في الضوء المرئي",
    "difficulty": "hots",
    "questionEn": "Why is the Compton wavelength shift ($\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta) \\sim 10^{-12}\\text{ m}$) readily observed with X-rays and gamma rays but completely undetectable with visible light?",
    "questionAr": "لماذا تُرصد إزاحة كومبتون ($\\Delta\\lambda \\sim 10^{-12}\\text{ m}$) بوضوح في أشعة إكس وجاما بينما يستحيل رصدها في الضوء المرئي؟",
    "optionsEn": [
      "Because visible light photons travel much slower than speed $c$",
      "Because the maximum shift $\\Delta\\lambda \\sim 0.00485\\text{ nm}$ is a significant fraction of X-ray wavelengths ($\\sim 1-5\\%$), but negligible compared to visible light wavelengths ($\\sim 0.001\\%$)",
      "Because visible light photons carry no linear momentum",
      "Because visible light cannot collide with electrons in matter"
    ],
    "optionsAr": [
      "لأن فوتونات الضوء المرئي تتحرك بسرعة أقل بكثير من سرعة الضوء",
      "لأن أقصى إزاحة $\\sim 0.00485\\text{ nm}$ تمثل نسبة محسوسة من طول موجة أشعة إكس ($\\sim 1-5\\%$)، بينما لا تكاد تذكر مقارنة بالضوء المرئي ($\\sim 0.001\\%$)",
      "لأن فوتونات الضوء المرئي لا تحمل كمية تحرك خطية",
      "لأن الضوء المرئي لا يصطدم بالإلكترونات في المادة"
    ],
    "correctAnswer": "Because the maximum shift $\\Delta\\lambda \\sim 0.00485\\text{ nm}$ is a significant fraction of X-ray wavelengths ($\\sim 1-5\\%$), but negligible compared to visible light wavelengths ($\\sim 0.001\\%$)",
    "correctIndex": 1,
    "hintEn": "Compare the magnitude of $\\Delta\\lambda$ to the initial photon wavelength $\\lambda$.",
    "hintAr": "قارن مقدار التغير $\\Delta\\lambda$ بالطول الموجي الأصلي للفوتون $\\lambda$.",
    "stepByStepSolutionEn": [
      "The maximum shift $\\Delta\\lambda_{\\max} \\approx 4.85 \\times 10^{-12}\\text{ m} = 0.00485\\text{ nm}$. For an X-ray photon with $\\lambda \\sim 0.1\\text{ nm}$, $\\frac{\\Delta\\lambda}{\\lambda} \\sim 5\\%$, easily detected by spectrometers. For visible light ($\\lambda \\sim 500\\text{ nm}$), $\\frac{\\Delta\\lambda}{\\lambda} \\sim 0.001\\%$, far too small to measure."
    ],
    "stepByStepSolutionAr": [
      "أقصى إزاحة في الطول الموجي $\\sim 0.00485\\text{ nm}$. في أشعة إكس ($\\lambda \\sim 0.1\\text{ nm}$) تمثل الإزاحة حوالي 5% وهي نسبة كبيرة يمكن قياسها، بينما في الضوء المرئي ($\\lambda \\sim 500\\text{ nm}$) تمثل الإزاحة أقل من 0.001% وهي نسبة ضئيلة جداً لا يمكن رصدها."
    ],
    "teacherTipEn": "Compton shift is absolute ($\\Delta\\lambda$ depends only on angle $\\theta$), but its fractional observability ($\\Delta\\lambda / \\lambda$) depends on having very short initial wavelengths.",
    "teacherTipAr": "إزاحة كومبتون مقدار ثابت يعتمد فقط على زاوية التشتت، ولكن نسبة التغير في الطول الموجي لا تكون محسوسة إلا للأمواج ذات الطول الموجي القصير جداً كأشعة إكس."
  },
  {
    "id": "egbac_phys_ch5_db_hots_03",
    "titleEn": "Relativistic Proof: Free Electron Cannot Absorb a Photon",
    "titleAr": "استحالة امتصاص الإلكترون الحر لفوتون امتصاصاً تاماً",
    "difficulty": "hots",
    "questionEn": "From relativistic conservation of energy and momentum, why CANNOT a completely free, isolated electron in vacuum absorb a photon entirely and remain a single particle?",
    "questionAr": "بناءً على قانوني بقاء الطاقة وكمية التحرك، لماذا يستحيل على إلكترون حر ومعزول في الفراغ امتصاص فوتون امتصاصاً كلياً والبقاء كجسيم واحد؟",
    "optionsEn": [
      "Because free electrons possess no electric charge",
      "Because the photon has infinite rest mass",
      "Because simultaneous conservation of energy and linear momentum cannot be satisfied in any inertial frame for a single free particle",
      "Because Pauli's exclusion principle forbids photon absorption"
    ],
    "optionsAr": [
      "لأن الإلكترونات الحرة لا تحمل شحنة كهربية",
      "لأن الفوتون يمتلك كتلة سكونية لانهائية",
      "لأنه يستحيل تحقيق قانوني بقاء الطاقة وكمية التحرك معاً في أي إطار إسناد لجسيم حر منفرد",
      "لأن مبدأ الاستبعاد لباولي يمنع امتصاص الفوتونات"
    ],
    "correctAnswer": "Because simultaneous conservation of energy and linear momentum cannot be satisfied in any inertial frame for a single free particle",
    "correctIndex": 2,
    "hintEn": "Analyze the invariant mass in the center-of-momentum frame.",
    "hintAr": "في إطار سكون الإلكترون بعد الامتصاص يجب أن تكون كمية التحرك صفراً لكن طاقة الفوتون تمنع ذلك.",
    "stepByStepSolutionEn": [
      "In the rest frame of the final electron, the total momentum would be zero. But before absorption, the photon carries momentum $p = E/c \\ne 0$, so total initial momentum cannot be zero. Thus, a third body (such as an atomic nucleus or metal lattice) must absorb recoil momentum, which is why photoelectric emission only happens in bound systems."
    ],
    "stepByStepSolutionAr": [
      "في إطار سكون الإلكترون النهائي تكون كمية التحرك صفراً، بينما قبل الامتصاص يحمل الفوتون كمية تحرك $p = E/c \\ne 0$، فيستحيل حفظ كمية التحرك والطاقة معاً دون وجود نواة أو شبكة بلورية لامتصاص ارتداد كمية التحرك."
    ],
    "teacherTipEn": "This fundamental relativistic theorem explains why Compton scattering (where the photon survives as a scattered particle) occurs with free electrons, while photoelectric absorption requires bound electrons.",
    "teacherTipAr": "هذا المبدأ يفسر لماذا يحدث تشتت كومبتون (مع بقاء الفوتون مشتتاً) مع الإلكترونات الحرة، بينما يحدث الامتصاص الكهروضوئي فقط مع الإلكترونات المقيدة بنواة الذرة."
  },
  {
    "id": "egbac_phys_ch5_db_hots_04",
    "titleEn": "Ultraviolet Catastrophe and Planck Quantum Resolution",
    "titleAr": "كارثة الأشعة فوق البنفسجية وحل بلانك الكمي",
    "difficulty": "hots",
    "questionEn": "Classical physics predicted via Rayleigh-Jeans law that blackbody radiation intensity should approach infinity as wavelength approaches zero (the Ultraviolet Catastrophe). Max Planck resolved this crisis by postulating that:",
    "questionAr": "توقعت الفيزياء الكلاسيكية بقانون رايلي-جينز أن شدة إشعاع الجسم الأسود تقترب من اللانهاية عندما يقترب الطول الموجي من الصفر (كارثة الأشعة فوق البنفسجية). حل ماكس بلانك هذه المعضلة بافتراض أن:",
    "optionsEn": [
      "Blackbodies cannot radiate at temperatures above absolute zero",
      "Electromagnetic radiation travels at variable speeds dependent on cavity volume",
      "Energy is continuous but light changes into sound at high frequencies",
      "Oscillators in cavity walls emit radiation in discrete energy packets $E = nh\\nu$, suppressing high-frequency mode excitation"
    ],
    "optionsAr": [
      "الأجسام السوداء لا يمكنها الإشعاع عند درجات حرارة أعلى من الصفر المطلق",
      "الإشعاع الكهرومغناطيسي يتحرك بسرعات متغيرة تعتمد على حجم التجويف",
      "الطاقة متصلة ولكن الضوء يتحول إلى موجات صوتية عند الترددات العالية",
      "المذبذبات في جدران التجويف تشع الطاقة في كمات منفصلة $E = nh\\nu$، مما يجعل احتمال إثارة الترددات العالية جداً يؤول للصفر"
    ],
    "correctAnswer": "Oscillators in cavity walls emit radiation in discrete energy packets $E = nh\\nu$, suppressing high-frequency mode excitation",
    "correctIndex": 3,
    "hintEn": "High frequency requires high quantum energy ($h\\nu$), making excitation exponentially improbable at finite $T$.",
    "hintAr": "الترددات العالية تتطلب كمات طاقة هائلة يصعب على الجسم توفيرها حرارياً عند درجة حرارة معينة.",
    "stepByStepSolutionEn": [
      "Under classical equipartition, every wave mode gets equal average energy $k_B T$, leading to an infinite energy sum at $\\nu \\to \\infty$. Planck showed that because energy is quantized in chunks of $h\\nu$, high-frequency modes require too much energy to be thermally excited, causing radiation intensity to plunge toward zero at very short wavelengths."
    ],
    "stepByStepSolutionAr": [
      "كلاسيكياً كانت كل درجة حرية تأخذ طاقة متساوية $k_B T$ بغض النظر عن التردد، مما يسبب طاقة لانهائية عند الترددات العالية. ولكن بلانك افترض أن الإشعاع كمات $h\\nu$، والترددات العالية جداً تتطلب كمات طاقة ضخمة جداً يقل احتمال انبعاثها حرارياً فتهبط شدة الإشعاع إلى الصفر."
    ],
    "teacherTipEn": "This quantum suppression of high-frequency emission is the fundamental reason Planck's curve bends downward to zero at the left side of the spectrum.",
    "teacherTipAr": "هذا الانخفاض الكمي عند الترددات العالية هو السبب في انحناء منحنى بلانك واقترابه من الصفر عند الأطوال الموجية القصيرة جداً."
  },
  {
    "id": "egbac_phys_ch5_db_hots_05",
    "titleEn": "Microscopic vs Macroscopic Criteria for Radiation",
    "titleAr": "النموذج الماكروسكوبي والميكروسكوبي لتفاعل الإشعاع مع المادة",
    "difficulty": "hots",
    "questionEn": "When electromagnetic radiation interacts with an obstacle or aperture of characteristic dimension $d$:",
    "questionAr": "عند تفاعل الإشعاع الكهرومغناطيسي مع عائق أو فتحة ذات بعد مميز $d$:",
    "optionsEn": [
      "If $d \\gg \\lambda$, the wave model applies (reflection and refraction); if $d \\sim \\lambda$ or smaller, the photon/particle model must be used",
      "The wave model applies only when the light source is a laser",
      "The photon model applies only when the light is completely polarized",
      "Light behaves as particles at all dimensions regardless of wavelength"
    ],
    "optionsAr": [
      "إذا كان $d \\gg \\lambda$ ينطبق النموذج الماكروسكوبي الموجي (انعكاس وانكسار)؛ وإذا كان $d \\sim \\lambda$ أو أصغر ينطبق النموذج الميكروسكوبي الفوتوني",
      "ينطبق النموذج الموجي فقط عندما يكون مصدر الضوء ليزراً",
      "ينطبق النموذج الفوتوني فقط عندما يكون الضوء مستقطباً تماماً",
      "يسلك الضوء سلوك الجسيمات دائماً عند جميع الأبعاد بصرف النظر عن الطول الموجي"
    ],
    "correctAnswer": "If $d \\gg \\lambda$, the wave model applies (reflection and refraction); if $d \\sim \\lambda$ or smaller, the photon/particle model must be used",
    "correctIndex": 0,
    "hintEn": "Compare wavelength $\\lambda$ with the characteristic size of the interacting object $d$.",
    "hintAr": "قارن الطول الموجي $\\lambda$ بأبعاد العائق أو الفتحة $d$.",
    "stepByStepSolutionEn": [
      "When obstacle size is vastly larger than wavelength ($d \\gg \\lambda$, like macroscopic mirrors or lenses), photons act collectively as continuous classical waves. When obstacle size is comparable to or smaller than wavelength ($d \\le \\lambda$, like an atom or free electron), radiation interacts as discrete individual photons."
    ],
    "stepByStepSolutionAr": [
      "إذا كانت أبعاد العائق أكبر بكثير من الطول الموجي ($d \\gg \\lambda$) يتعامل الإشعاع كحزمة متصلة ويسلك سلوك الموجات الكلاسيكية (انعكاس وانكسار). أما إذا كانت أبعاد العائق في حدود الطول الموجي أو أصغر ($d \\le \\lambda$) مثل الذرة أو الإلكترون، فيسلك الإشعاع سلوك فوتونات منفصلة."
    ],
    "teacherTipEn": "This criterion is a cornerstone of the Modern Physics curriculum in Egyptian General Secondary education.",
    "teacherTipAr": "هذا المعيار الماكروسكوبي/الميكروسكوبي من أهم ركائز منهج الفيزياء الحديثة للثانوية العامة المصرية."
  },
  {
    "id": "egbac_phys_ch5_db_hots_06",
    "titleEn": "Abbe Diffraction Limit and Electron Microscope Resolving Power",
    "titleAr": "حد الحيود لأبي وتفسير دقة المجهر الإلكتروني الفائقة",
    "difficulty": "hots",
    "questionEn": "Optical microscopes fail to resolve viral structures smaller than $\\sim 200\\text{ nm}$ because of optical diffraction. Electron microscopes resolve these structures because:",
    "questionAr": "تعجز المجاهر الضوئية عن رؤية الفيروسات الدقيقة التي يقل حجمها عن $\\sim 200\\text{ nm}$ بسبب حيود الضوء. بينما يستطيع المجهر الإلكتروني رؤيتها بوضوح لأن:",
    "optionsEn": [
      "Electrons carry negative charge, which stains viral capsids with color",
      "High-voltage electrons possess de Broglie wavelengths of order $\\sim 0.01-0.1\\text{ nm}$, vastly smaller than viral dimensions",
      "Electrons travel at speeds exceeding the speed of light in vacuum",
      "Magnetic lenses produce infinite magnification without aberrations"
    ],
    "optionsAr": [
      "الإلكترونات تحمل شحنة سالبة تصبغ غلاف الفيروس بألوان متباينة",
      "الإلكترونات المعجلة بجهد عالي تمتلك أطوال موجات دي برولي قصيرة جداً ($\\sim 0.01-0.1\\text{ nm}$)، وهي أصغر بكثير من أبعاد الفيروسات",
      "الإلكترونات تتحرك بسرعة تفوق سرعة الضوء في الفراغ",
      "العدسات المغناطيسية تعطي تكبيراً لانهائياً خالياً من الزيغ"
    ],
    "correctAnswer": "High-voltage electrons possess de Broglie wavelengths of order $\\sim 0.01-0.1\\text{ nm}$, vastly smaller than viral dimensions",
    "correctIndex": 1,
    "hintEn": "Resolution requires probing wavelength $\\lambda \\le \\text{object dimension } d$.",
    "hintAr": "شرط الرؤية أن يكون الطول الموجي للشعاع أصغر من أو يساوي أبعاد العينة المراد تكبيرها.",
    "stepByStepSolutionEn": [
      "Diffraction blurs any image if the object's dimensions are comparable to or smaller than the probe wavelength ($d \\le \\lambda$). For visible light, $\\lambda \\sim 400-700\\text{ nm}$, so objects $< 200\\text{ nm}$ cannot be resolved. By accelerating electrons through thousands of volts, their de Broglie wavelength is reduced to $< 0.1\\text{ nm}$, fulfilling $\\lambda \\ll d$."
    ],
    "stepByStepSolutionAr": [
      "لتمييز تفاصيل جسم أبعاده $d$، يشترط ألا يتعدى الطول الموجي أبعاد الجسم ($\\lambda \\le d$). الضوء المرئي طوله الموجي بين $400$ و $700\\text{ nm}$ فيحيد حول الفيروس ($< 200\\text{ nm}$) ولا يراه. أما الإلكترونات المعجلة فطول موجتها المصاحبة قصير جداً ($< 0.1\\text{ nm}$) فتنفذ وتفصل تفاصيله بدقة."
    ],
    "teacherTipEn": "Remember: accelerating voltage $V \\uparrow \\implies \\text{velocity } v \\uparrow \\implies \\text{momentum } p \\uparrow \\implies \\lambda \\downarrow \\implies \\text{resolving power } \\uparrow$.",
    "teacherTipAr": "سلسلة العلاقات الأساسية: زيادة فرق الجهد $\\to$ زيادة السرعة $\\to$ زيادة كمية التحرك $\\to$ قصر طول موجة دي برولي $\\to$ زيادة القدرة التحليلية والتكبير."
  },
  {
    "id": "egbac_phys_ch5_db_hots_07",
    "titleEn": "Source Distance Invariance of Photoelectric Stopping Potential",
    "titleAr": "استقلال جهد الإيقاف عن المسافة بين مصدر الضوء ومهبط الخلية",
    "difficulty": "hots",
    "questionEn": "A monochromatic point light source is moved from a distance of $d = 20\\text{ cm}$ to $d = 60\\text{ cm}$ from a photocell. What happens to the saturation photocurrent and the stopping potential?",
    "questionAr": "حُرِّك مصدر ضوئي أحادي اللون من مسافة $20\\text{ cm}$ إلى مسافة $60\\text{ cm}$ من مهبط خلية كهروضوئية. ماذا يحدث لكل من تيار التشبع وجهد الإيقاف؟",
    "optionsEn": [
      "Both saturation photocurrent and stopping potential decrease to $\\frac{1}{9}$",
      "Stopping potential increases while saturation photocurrent decreases",
      "Saturation photocurrent decreases to $\\frac{1}{9}$ its initial value, while stopping potential remains strictly constant",
      "Saturation photocurrent remains constant while stopping potential decreases"
    ],
    "optionsAr": [
      "يقل كل من تيار التشبع وجهد الإيقاف إلى $\\frac{1}{9}$ معاً",
      "يزداد جهد الإيقاف بينما يقل تيار التشبع",
      "يقل تيار التشبع إلى $\\frac{1}{9}$ قيمته الأصلية، بينما يظل جهد الإيقاف ثابتاً تماماً دون أي تغير",
      "يثبت تيار التشبع بينما يقل جهد الإيقاف"
    ],
    "correctAnswer": "Saturation photocurrent decreases to $\\frac{1}{9}$ its initial value, while stopping potential remains strictly constant",
    "correctIndex": 2,
    "hintEn": "Intensity follows inverse-square law: $I \\propto \\frac{1}{d^2}$. Frequency is unchanged.",
    "hintAr": "شدة الضوء تتبع قانون التربيع العكسي $I \\propto \\frac{1}{d^2}$، بينما تردد الفوتون ثابت.",
    "stepByStepSolutionEn": [
      "Moving the source from $20\\text{ cm}$ to $60\\text{ cm}$ triples the distance ($3\\times$). By the inverse-square law, incident light intensity (photon flux) drops by $3^2 = 9$ times, so saturation current decreases to $1/9$. However, since the source remains monochromatic, photon energy $h\\nu$ is unchanged, meaning $KE_{\\max}$ and stopping potential $V_s$ remain strictly constant."
    ],
    "stepByStepSolutionAr": [
      "زيادة المسافة 3 أمثال تقلل شدة الضوء الساقط إلى التسع ($\\frac{1}{3^2} = \\frac{1}{9}$) فيقل تيار التشبع إلى التسع لنقص عدد الفوتونات الساقطة بالثانية. ولكن طاقة الفوتون الواحد وتردده لم يتغيرا، فتظل طاقة الحركة العظمى وجهد الإيقاف ثابتين."
    ],
    "teacherTipEn": "Distance affects quantity of photons (current), NEVER the energy of individual photons (stopping voltage).",
    "teacherTipAr": "المسافة تؤثر فقط في شدة الضوء وعدد الفوتونات (التيار)، ولا تؤثر إطلاقاً على طاقة الفوتون الفردي (جهد الإيقاف)."
  },
  {
    "id": "egbac_phys_ch5_db_hots_08",
    "titleEn": "Wave-Particle Duality in Single-Electron Double-Slit Experiment",
    "titleAr": "ازدواجية الموجة والجسيم في تجربة الشق المزدوج بإلكترونات منفردة",
    "difficulty": "hots",
    "questionEn": "When electrons are sent one by one at long time intervals through a double-slit apparatus onto a sensitive detector screen:",
    "questionAr": "عند إطلاق إلكترونات مفردة واحداً تلو الآخر بفواصل زمنية متباعدة عبر جهاز الشق المزدوج نحو شاشة كاشفة حساسة:",
    "optionsEn": [
      "No interference fringes ever form because single particles cannot interfere",
      "Electrons split physically in half, one half passing through each slit",
      "Electrons bounce off the slits and travel backward to the emitter",
      "Each electron lands as a discrete localized particle dot, but over time the collective dots form a wave interference fringe pattern"
    ],
    "optionsAr": [
      "لا تتكون أي هدب تداخل مطلقاً لأن الجسيمات المفردة لا تتداخل",
      "ينقسم الإلكترون مادياً إلى نصفين يمر كل نصف عبر أحد الشقين",
      "ترتد الإلكترونات عن الشقين وتعود إلى المدفع الإلكتروني",
      "يصل كل إلكترون كنقطة جسيمية محددة الموضع، وبمرور الوقت وتراكم النقاط يتشكل نمط هدب تداخل موجي متكامل"
    ],
    "correctAnswer": "Each electron lands as a discrete localized particle dot, but over time the collective dots form a wave interference fringe pattern",
    "correctIndex": 3,
    "hintEn": "Wave-particle duality: detection is particle-like, propagation is wave-like.",
    "hintAr": "خاصية الازدواجية: السلوك أثناء الحركة موجي، وعند الاصطدام بالكاشف جسيمي موضعي.",
    "stepByStepSolutionEn": [
      "Each individual electron arrives as a localized lump of charge and mass (particle behavior), but its arrival probability is governed by the interference of its associated de Broglie wave passing through both slits (wave behavior). Over time, thousands of dots accumulate to trace bright and dark interference fringes."
    ],
    "stepByStepSolutionAr": [
      "يسجل كل إلكترون وصوله كنقطة مضيئة دقيقة في مكان محدد (سلوك جسيمي)، ولكن احتمال وصوله إلى أي نقطة تحكمه دالة موجة دي برولي المتداخلة عبر الشقين (سلوك موجي)، فتتراكم النقاط مكونة هدب التداخل المضيئة والمظلمة."
    ],
    "teacherTipEn": "This landmark experiment conclusively proves that wave-particle duality is an intrinsic property of individual quantum particles, not an interaction among many particles.",
    "teacherTipAr": "أثبتت هذه التجربة التاريخية أن الازدواجية خاصية متأصلة في الإلكترون الفردي وليست ناتجة عن تفاعل جمعي بين حزمة إلكترونات."
  },
  {
    "id": "egbac_phys_ch5_db_hots_09",
    "titleEn": "Work Function Independence from Cathode Operating Temperature",
    "titleAr": "استقلال دالة الشغل عن درجة حرارة الفلز في الظاهرة الكهروضوئية",
    "difficulty": "hots",
    "questionEn": "In a vacuum photocell operating at room temperature versus heated slightly below thermionic emission threshold:",
    "questionAr": "في خلية كهروضوئية مفرغة تعمل عند درجة حرارة الغرفة مقارنة بتسخينها قليلاً تحت حد الانبعاث الكهروحراري:",
    "optionsEn": [
      "The work function $W_e$ and threshold frequency $\\nu_c$ remain practically constant, characteristic of the metal lattice itself",
      "The work function drops to zero as soon as temperature rises",
      "Planck's constant decreases proportionally with temperature",
      "The threshold frequency doubles for every 10 degree rise in temperature"
    ],
    "optionsAr": [
      "تظل دالة الشغل $W_e$ والتردد الحرج $\\nu_c$ ثابتين عملياً كخاصية مميزة لنوع مادة الفلز وشبكته البلورية",
      "تهبط دالة الشغل إلى الصفر بمجرد ارتفاع درجة الحرارة",
      "يتناقص ثابت بلانك طردياً مع ارتفاع درجة الحرارة",
      "يتضاعف التردد الحرج لكل ارتفاع قدره 10 درجات في درجة الحرارة"
    ],
    "correctAnswer": "The work function $W_e$ and threshold frequency $\\nu_c$ remain practically constant, characteristic of the metal lattice itself",
    "correctIndex": 0,
    "hintEn": "Work function is an intrinsic surface property governed by the positive ion lattice potential barrier.",
    "hintAr": "دالة الشغل خاصية فيزيائية مميزة لنوع مادة سطح الفلز.",
    "stepByStepSolutionEn": [
      "The work function $W_e$ represents the potential barrier depth created by the positive ion lattice at the surface. While modest thermal agitation slightly broadens electron energy distributions, $W_e$ and $\\nu_c$ are treated in standard curricula as fundamental constants unique to the metal."
    ],
    "stepByStepSolutionAr": [
      "دالة الشغل تعبر عن حاجز جهد السطح الذي تجذبه به أنوية الفلز الإلكترونات الحرة نحو الداخل، وتعتبر خاصية فيزيائية ثابتة للفلز لا تتغير إلا بتغير نوع مادة السطح."
    ],
    "teacherTipEn": "Remember: work function depends ONLY on the identity of the metal and its surface condition, NOT on incident radiation or room temperature.",
    "teacherTipAr": "تذكر دائماً: دالة الشغل تعتمد فقط على نوع مادة الفلز وحالة سطحه، ولا تعتمد على شدة أو تردد الضوء الساقط."
  },
  {
    "id": "egbac_phys_ch5_db_hots_10",
    "titleEn": "Self-Limiting Photoelectric Emission from Isolated Metal Sphere",
    "titleAr": "الانبعاث الكهروضوئي المقيد ذاتياً من كرة فلزية معزولة",
    "difficulty": "hots",
    "questionEn": "An uncharged, electrically isolated metal sphere in vacuum is continuously illuminated by UV light of frequency $\\nu > \\nu_c$. As photoelectrons are ejected:",
    "questionAr": "كرة فلزية متعادلة ومعزولة كهربياً في الفراغ سقط عليها ضوء فوق بنفسجي مستمر بتردد $\\nu > \\nu_c$. مع انبعاث الإلكترونات الضوئية منها:",
    "optionsEn": [
      "The sphere emits electrons indefinitely until all its conduction electrons are depleted",
      "The sphere becomes increasingly positively charged, until its positive potential reaches $V_s = \\frac{h\\nu - W_e}{e}$, where emission halts completely",
      "The sphere acquires a negative charge because light deposits extra negative energy",
      "The threshold frequency of the sphere decreases to zero"
    ],
    "optionsAr": [
      "تستمر الكرة في إطلاق الإلكترونات بلا نهاية حتى تنفد جميع إلكتروناتها الحرة",
      "تكتسب الكرة شحنة موجبة متزايدة حتى يصل جهدها الموجب إلى جهد الإيقاف $V_s = \\frac{h\\nu - W_e}{e}$، وعندها يتوقف الانبعاث تماماً",
      "تكتسب الكرة شحنة سالبة لأن الضوء يودع طاقة سالبة في الفلز",
      "يهبط التردد الحرج لمعدن الكرة إلى الصفر"
    ],
    "correctAnswer": "The sphere becomes increasingly positively charged, until its positive potential reaches $V_s = \\frac{h\\nu - W_e}{e}$, where emission halts completely",
    "correctIndex": 1,
    "hintEn": "Ejection of negative electrons leaves behind an unneutralized positive charge.",
    "hintAr": "فقد الإلكترونات السالبة يجعل الكرة موجبة الشحنة فيتولد جهد موجب يمنع هروب باقي الإلكترونات.",
    "stepByStepSolutionEn": [
      "Each departing electron leaves behind an unbalanced positive ion. As the net positive charge builds up, the sphere's electric potential rises positively. This positive potential acts as an attractive retarding voltage that pulls emitted electrons back. When the positive potential equals the stopping potential $V_s = KE_{\\max}/e$, no electron has enough kinetic energy to escape to infinity, halting further emission."
    ],
    "stepByStepSolutionAr": [
      "بانبعاث كل إلكترون تتبقى شحنة موجبة على الكرة فيزداد جهدها الموجب. هذا الجهد الموجب يجذب الإلكترونات المنبعثة نحو السطح مرة أخرى. وعندما يصل جهد الكرة إلى جهد الإيقاف $V_s$ تعجز أسرع الإلكترونات عن الهروب ويتوقف الانبعاث تماماً."
    ],
    "teacherTipEn": "This self-limiting electrostatic feedback is a famous high-level physics olympiad problem.",
    "teacherTipAr": "هذه المسألة من أشهر المسائل التحليلية المتقدمة في امتحانات التفوق والأولمبياد."
  },
  {
    "id": "egbac_phys_ch5_db_hots_11",
    "titleEn": "Fractional Energy Loss in Compton Scattering",
    "titleAr": "نسبة الطاقة المفقودة من الفوتون في ظاهرة كومبتون",
    "difficulty": "hots",
    "questionEn": "In a Compton collision, which parameter directly governs the fraction of photon energy transferred to the recoil electron?",
    "questionAr": "في تصادم كومبتون، أي العوامل التالية يحدد مباشرة الكسر من طاقة الفوتون المنتقلة إلى الإلكترون المرتد؟",
    "optionsEn": [
      "The electric charge of the incident photon",
      "The temperature of the scattering medium exclusively",
      "The scattering angle $\\theta$ and the ratio of incident photon energy to electron rest energy $\\frac{h\\nu_1}{m_e c^2}$",
      "The intensity of the incident X-ray beam"
    ],
    "optionsAr": [
      "مقدار الشحنة الكهربية للفوتون الساقط",
      "درجة حرارة وسط التشتت حصرياً",
      "زاوية التشتت $\\theta$ والنسبة بين طاقة الفوتون الساقط وطاقة السكون للإلكترون $\\frac{h\\nu_1}{m_e c^2}$",
      "شدة حزمة الأشعة السينية الساقطة"
    ],
    "correctAnswer": "The scattering angle $\\theta$ and the ratio of incident photon energy to electron rest energy $\\frac{h\\nu_1}{m_e c^2}$",
    "correctIndex": 2,
    "hintEn": "Analyze $\\frac{\\Delta E}{E} = \\frac{\\Delta\\lambda}{\\lambda + \\Delta\\lambda}$.",
    "hintAr": "طاقة الإلكترون المكتسبة تعتمد على زاوية التشتت وطاقة الفوتون الساقط بالنسبة لكتلة سكون الإلكترون.",
    "stepByStepSolutionEn": [
      "The wavelength shift is $\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$. The energy lost is $\\Delta E = hc \\left(\\frac{1}{\\lambda_1} - \\frac{1}{\\lambda_2}\\right) = E_1 \\frac{\\Delta\\lambda}{\\lambda_1 + \\Delta\\lambda}$. This fraction increases with larger scattering angle $\\theta$ (maximum at $180^\\circ$) and higher incident photon energy $E_1$."
    ],
    "stepByStepSolutionAr": [
      "مقدار الزيادة في الطول الموجي $\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$. وبذلك تكون نسبة الطاقة المنتقلة للإلكترون أكبر ما يمكن عند زاوية الارتداد $180^\\circ$ وتزداد كلما كانت طاقة الفوتون الساقط أكبر."
    ],
    "teacherTipEn": "At low photon energies ($h\\nu \\ll m_e c^2$), the fractional energy transfer is negligible (Thomson scattering limit). At high energies ($h\\nu \\ge m_e c^2$), the photon can lose most of its energy.",
    "teacherTipAr": "عند الطاقات المنخفضة تكون نسبة الطاقة المنتقلة للإلكترون ضئيلة جداً، بينما عند الطاقات العالية يمكن للفوتون أن يفقد معظم طاقته لصالح الإلكترون."
  },
  {
    "id": "egbac_phys_ch5_db_hots_12",
    "titleEn": "Physical Nature of de Broglie Matter Waves",
    "titleAr": "الطبيعة الفيزيائية الحقيقية لأمواج دي برولي المادية",
    "difficulty": "hots",
    "questionEn": "The de Broglie matter wave accompanying a moving electron is fundamentally different from an electromagnetic wave because:",
    "questionAr": "تختلف موجة دي برولي المادية المصاحبة لحركة الإلكترون جوهرياً عن الموجة الكهرومغناطيسية في أن:",
    "optionsEn": [
      "It travels at speed $c$ in vacuum like light",
      "It consists of oscillating electric and magnetic field vectors",
      "It can be refracted by glass prisms in vacuum",
      "It is a non-electromagnetic probability wave that cannot separate from the particle, and its speed depends on particle momentum ($v \\ll c$)"
    ],
    "optionsAr": [
      "تتحرك بسرعة الضوء $c$ في الفراغ مثل موجات الراديو",
      "تتكون من مجالات كهربية ومغناطيسية متعامدة متذبذبة",
      "يمكن كسرها بواسطة منشور زجاجي في الفراغ",
      "موجة مادية احتمالية غير كهرومغناطيسية لا تنفصل عن الجسيم وتتحرك بسرعته ($v \\ll c$)"
    ],
    "correctAnswer": "It is a non-electromagnetic probability wave that cannot separate from the particle, and its speed depends on particle momentum ($v \\ll c$)",
    "correctIndex": 3,
    "hintEn": "Matter waves accompany moving mass; electromagnetic waves are propagating electromagnetic field disturbances.",
    "hintAr": "أمواج دي برولي أمواج مادية تصاحب حركة الجسيمات وليست أمواجاً كهرومغناطيسية.",
    "stepByStepSolutionEn": [
      "Electromagnetic waves consist of oscillating transverse electric and magnetic fields that propagate through vacuum at speed $c$ independently of any charge. Matter waves accompany any moving mass, cannot separate from the particle, have no transverse $E$ or $B$ vector fields, and travel at particle velocity $v$."
    ],
    "stepByStepSolutionAr": [
      "الموجات الكهرومغناطيسية تنتشر في الفراغ بسرعة الضوء $c$ وتتكون من مجالات كهربية ومغناطيسية متذبذبة. بينما أمواج دي برولي أمواج مادية احتمالية تلازم حركة الجسيم المادي ولا تنفصل عنه وتتحرك بسرعة الجسيم نفسه $v$."
    ],
    "teacherTipEn": "Crucial distinction: accelerated charges EMIT electromagnetic waves, but matter waves ACCOMPANY any moving particle whether charged or neutral.",
    "teacherTipAr": "فارق دقيق: الشحنة المعجلة تشع موجات كهرومغناطيسية، بينما موجات دي برولي تصاحب حركة أي جسيم حتى لو كان متعادلاً كالنيوترون."
  },
  {
    "id": "egbac_phys_ch5_db_hots_13",
    "titleEn": "Why Electron Diffraction Requires Crystal Lattices",
    "titleAr": "لماذا يشترط لحيود الإلكترونات استخدام بلورات طبيعية دون محزوزات الحيود العادية",
    "difficulty": "hots",
    "questionEn": "Why did Davisson and Germer have to use a nickel crystal lattice instead of an ordinary optical diffraction grating to observe electron diffraction?",
    "questionAr": "لماذا استخدم دافيسون وجيرمر شبكة بلورية من النيكل بدلاً من محزوز الحيود الضوئي العادي لمشاهدة حيود الإلكترونات؟",
    "optionsEn": [
      "Because the de Broglie wavelength of electrons ($\\sim 0.1\\text{ nm}$) is comparable to atomic lattice spacings ($\\sim 0.1-0.2\\text{ nm}$), whereas optical gratings have slit spacings thousands of times too large ($\\sim 1000\\text{ nm}$)",
      "Because electrons cannot pass through air or vacuum",
      "Because nickel crystals possess a strong net electrostatic charge",
      "Because optical gratings absorb 100% of electrons as heat"
    ],
    "optionsAr": [
      "لأن طول موجة دي برولي للإلكترونات ($\\sim 0.1\\text{ nm}$) يقارب المسافات البينية بين ذرات البلورة ($\\sim 0.1-0.2\\text{ nm}$)، بينما شقوق المحزوز الضوئي أوسع بآلاف المرات ($\\sim 1000\\text{ nm}$)",
      "لأن الإلكترونات لا تستطيع المرور في الهواء أو الفراغ",
      "لأن بلورات النيكل تمتلك شحنة كهربية استاتيكية صافية",
      "لأن محزوزات الحيود الضوئية تمتص كل الإلكترونات وتحولها لحرارة"
    ],
    "correctAnswer": "Because the de Broglie wavelength of electrons ($\\sim 0.1\\text{ nm}$) is comparable to atomic lattice spacings ($\\sim 0.1-0.2\\text{ nm}$), whereas optical gratings have slit spacings thousands of times too large ($\\sim 1000\\text{ nm}$)",
    "correctIndex": 0,
    "hintEn": "Diffraction is observable only when slit width $d$ is comparable to wavelength $\\lambda$.",
    "hintAr": "شرط حدوث الحيود بوضوح أن تكون أبعاد الفتحات أو العوائق مقاربة للطول الموجي للموجة.",
    "stepByStepSolutionEn": [
      "Diffraction produces noticeable interference fringes only when aperture spacing $d \\approx \\lambda$. For non-relativistic electrons, $\\lambda \\approx 0.1-0.2\\text{ nm}$. Man-made optical gratings have rulings spaced around $1000\\text{ nm} = 1\\,\\mu\\text{m}$, which is $10000$ times too wide. Atomic crystal planes naturally provide aperture spacings of $\\sim 0.15\\text{ nm}$, perfectly matching the electron wavelength."
    ],
    "stepByStepSolutionAr": [
      "يحدث الحيود بوضوح عندما تكون أبعاد الفتحات مقاربة للطول الموجي ($d \\approx \\lambda$). طول موجة الإلكترونات $\\sim 0.1\\text{ nm}$، وأضيق شقوق صناعية في محزوز الحيود الضوئي اتساعها $\\sim 1000\\text{ nm}$ فلا يحدث حيود. أما المسافات البينية لذرات بلورة النيكل فتبلغ $\\sim 0.15\\text{ nm}$ وهي مقاربة تماماً لطول موجة دي برولي للإلكترونات."
    ],
    "teacherTipEn": "This is identical to why X-ray diffraction requires crystals (von Laue experiment).",
    "teacherTipAr": "نفس السبب الذي جعل فون لاوه يستخدم بلورات كبريتيد الخارصين لإثبات حيود الأشعة السينية."
  },
  {
    "id": "egbac_phys_ch5_db_hots_14",
    "titleEn": "Human Body Thermal Radiation Peak in Infrared",
    "titleAr": "إشعاع الجسم البشري في نطاق الأشعة تحت الحمراء",
    "difficulty": "hots",
    "questionEn": "Applying Wien's displacement law ($\\lambda_{\\max} T = 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$) to the human body at normal skin temperature ($T \\approx 310\\text{ K}$):",
    "questionAr": "بتطبيق قانون فين ($\\lambda_{\\max} T = 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$) على جسم الإنسان عند درجة حرارة الجلد الطبيعية ($T \\approx 310\\text{ K}$):",
    "optionsEn": [
      "$\\lambda_{\\max} \\approx 500\\text{ nm}$ (green visible light, humans glow green in the dark)",
      "$\\lambda_{\\max} \\approx 9.35\\,\\mu\\text{m}$ (far infrared), which is completely invisible to human eyes but detected by thermal night-vision sensors",
      "$\\lambda_{\\max} \\approx 10\\text{ pm}$ (penetrating gamma radiation)",
      "$\\lambda_{\\max} \\approx 100\\text{ m}$ (AM radio frequencies)"
    ],
    "optionsAr": [
      "$\\lambda_{\\max} \\approx 500\\text{ nm}$ (ضوء أخضر مرئي، يضيء الإنسان بالأخضر في الظلام)",
      "$\\lambda_{\\max} \\approx 9.35\\,\\mu\\text{m}$ (أشعة تحت حمراء بعيدة)، وهي غير مرئية للعين البشرية وتكشفها أجهزة الرؤية الليلية والتصوير الحراري",
      "$\\lambda_{\\max} \\approx 10\\text{ pm}$ (أشعة جاما نافذة)",
      "$\\lambda_{\\max} \\approx 100\\text{ m}$ (موجات راديو طويلة)"
    ],
    "correctAnswer": "$\\lambda_{\\max} \\approx 9.35\\,\\mu\\text{m}$ (far infrared), which is completely invisible to human eyes but detected by thermal night-vision sensors",
    "correctIndex": 1,
    "hintEn": "$\\lambda_{\\max} = \\frac{2.898 \\times 10^{-3}}{310}$.",
    "hintAr": "$\\lambda_{\\max} = \\frac{2.898 \\times 10^{-3}}{310}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_{\\max} = \\frac{2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}}{310\\text{ K}} \\approx 9.35 \\times 10^{-6}\\text{ m} = 9.35\\,\\mu\\text{m}$. This lies deep within the infrared thermal region of the electromagnetic spectrum."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\max} = \\frac{2.898 \\times 10^{-3}}{310} \\approx 9.35 \\times 10^{-6}\\text{ م} = 9.35\\text{ ميكرومتر}$ (أشعة تحت حمراء)."
    ],
    "teacherTipEn": "This physical principle underpins military night vision, passive infrared (PIR) security motion detectors, and airport thermal scanners.",
    "teacherTipAr": "هذا الأساس الفيزيائي هو ما تعتمد عليه أجهزة الرؤية الليلية العسكرية وكاميرات الفحص الحراري في المطارات."
  },
  {
    "id": "egbac_phys_ch5_db_hots_15",
    "titleEn": "Universal Constants from Photoelectric KE Plot",
    "titleAr": "استنتاج الثوابت الفيزيائية من الرسم البياني للظاهرة الكهروضوئية",
    "difficulty": "hots",
    "questionEn": "From an experimental plot of maximum kinetic energy $KE_{\\max}$ versus incident light frequency $\\nu$ for a clean metal cathode, how can one determine Planck's constant $h$, threshold frequency $\\nu_c$, and work function $W_e$?",
    "questionAr": "من الرسم البياني التجريبي للعلاقة بين $KE_{\\max}$ والتردد $\\nu$ لمهبط فلزي نقي، كيف نعين كلاً من ثابت بلانك $h$ والتردد الحرج $\\nu_c$ ودالة الشغل $W_e$؟",
    "optionsEn": [
      "$h = \\text{vertical intercept}$, $\\nu_c = \\text{slope}$, and $W_e = \\text{horizontal intercept}$",
      "All three quantities equal the area under the triangular portion of the graph",
      "$h = \\text{slope}$, $\\nu_c = \\text{horizontal frequency intercept}$, and $W_e = |\\text{vertical energy intercept}|$",
      "$h$ is the product of both intercepts, while $W_e$ is zero"
    ],
    "optionsAr": [
      "$h = \\text{المحور الرأسي}$، $\\nu_c = \\text{الميل}$، و $W_e = \\text{نقطة التقاطع الأفقية}$",
      "جميع هذه الكميات الثلاث تساوي المساحة أسفل الجزء المثلث من الرسم",
      "$h = \\text{ميل الخط المستقيم}$، $\\nu_c = \\text{نقطة التقاطع مع محور التردد}$، و $W_e = \\text{القيمة المطلقة للجزء المقطوع من محور الطاقة السالب}$",
      "$h$ يساوي حاصل ضرب المقطعين بينما $W_e$ تساوي صفراً"
    ],
    "correctAnswer": "$h = \\text{slope}$, $\\nu_c = \\text{horizontal frequency intercept}$, and $W_e = |\\text{vertical energy intercept}|$",
    "correctIndex": 2,
    "hintEn": "Match $KE_{\\max} = h\\nu - W_e$ with the standard line $y = mx + c$.",
    "hintAr": "طابق $KE_{\\max} = h\\nu - W_e$ مع معادلة الخط المستقيم $y = mx + c$.",
    "stepByStepSolutionEn": [
      "Equation of line: $KE_{\\max} = h\\nu - W_e$. Slope $\\frac{d(KE)}{d\\nu} = h$. Horizontal intercept ($KE = 0$) gives $h\\nu_c - W_e = 0 \\implies \\nu = \\nu_c$. Vertical intercept ($\\nu = 0$) gives $KE = -W_e$, so magnitude of vertical intercept is $W_e$."
    ],
    "stepByStepSolutionAr": [
      "معادلة الخط المستقيم هي $KE = h\\nu - W_e$. الميل هو $h$، ونقطة التقاطع مع محور السينات (عند $KE=0$) تعطي التردد الحرج $\\nu_c$، والامتداد السالب على محور الصادات (عند $\\nu=0$) يعطي $-W_e$."
    ],
    "teacherTipEn": "If the vertical axis is stopping potential $V_s$ instead of $KE$, the slope becomes $h/e$ and vertical intercept is $-W_e/e$.",
    "teacherTipAr": "انتبه في الامتحانات: إذا كان المحور الرأسي هو جهد الإيقاف $V_s$ بدلاً من $KE$، يصبح الميل مساوياً $\\frac{h}{e}$ والجزء المقطوع $-\\frac{W_e}{e}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_16",
    "titleEn": "Comparative Speeds of Photon and Electron After Compton Collision",
    "titleAr": "مقارنة سرعتي الفوتون والإلكترون بعد تصادم كومبتون",
    "difficulty": "hots",
    "questionEn": "Immediately following a Compton collision between an incident X-ray photon and a stationary electron in vacuum:",
    "questionAr": "مباشرة بعد حدوث تصادم كومبتون بين فوتون أشعة سينية ساقط وإلكترون ساكن في الفراغ:",
    "optionsEn": [
      "Both photon and electron travel at the exact same speed $c$",
      "The recoil electron travels faster than the photon ($v > c$)",
      "The scattered photon comes to rest while the electron moves at speed $c$",
      "The scattered photon travels at speed $c$, while the recoil electron travels at a speed $v < c$"
    ],
    "optionsAr": [
      "يتحرك كل من الفوتون والإلكترون بنفس السرعة $c$ تماماً",
      "يتحرك الإلكترون المرتد بسرعة أكبر من سرعة الفوتون",
      "يسكن الفوتون المشتت بينما يتحرك الإلكترون بسرعة الضوء $c$",
      "يتحرك الفوتون المشتت بسرعة الضوء $c$، بينما يتحرك الإلكترون المرتد بسرعة $v < c$"
    ],
    "correctAnswer": "The scattered photon travels at speed $c$, while the recoil electron travels at a speed $v < c$",
    "correctIndex": 3,
    "hintEn": "Photons always travel at $c$ in vacuum; massive particles cannot reach $c$.",
    "hintAr": "الفوتون جسيم عديم الكتلة السكونية وسرعته دائماً $c$، بينما الإلكترون جسيم ذو كتلة وسرعته حتماً أقل من $c$.",
    "stepByStepSolutionEn": [
      "Because a photon has zero invariant rest mass, its speed in vacuum is invariant at $c = 3 \\times 10^8\\text{ m/s}$, regardless of its energy or scattering history. An electron has non-zero rest mass $m_e = 9.1 \\times 10^{-31}\\text{ kg}$, so Special Relativity strictly requires that its speed $v < c$."
    ],
    "stepByStepSolutionAr": [
      "الفوتون جسيم عديم الكتلة السكونية، وسرعته في الفراغ ثابت كوني $c = 3 \\times 10^8\\text{ م/ث}$ لا تتغير بفقد جزء من طاقته. أما الإلكترون فله كتلة سكونية حقيقية، ولذلك طبقاً للنسبية يستحيل أن تبلغ سرعته سرعة الضوء وتكون حتماً $v < c$."
    ],
    "teacherTipEn": "Never say that the photon slowed down in Compton scattering: its frequency decreased, but its speed remained $c$.",
    "teacherTipAr": "إياك أن تقول إن الفوتون أبطأ بعد التصادم: الفوتون قل تردده وزاد طوله الموجي ولكن سرعته ثابتة $c$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_17",
    "titleEn": "Electron Trajectory Between Deflecting Plates in CRT",
    "titleAr": "مسار شعاع الإلكترونات بين ألواح الانحراف في أنبوبة الكاثود",
    "difficulty": "hots",
    "questionEn": "In a cathode ray tube (CRT), electrons passing between two parallel horizontal deflecting plates subject to a constant electric field follow:",
    "questionAr": "في أنبوبة أشعة الكاثود، عند مرور الإلكترونات بين لوحين متوازيين أفقيين يؤثر بينهما مجال كهربي ثابت، فإن مسارها بين اللوحين يكون:",
    "optionsEn": [
      "A parabolic trajectory curving toward the positive plate",
      "A circular orbit around the central axis",
      "A sinusoidal wave oscillating between the two plates",
      "A straight line completely unaffected by electric fields"
    ],
    "optionsAr": [
      "مساراً منحنى على شكل قطع مكافئ ينحرف نحو اللوح الموجب",
      "مساراً دائرياً مغلقاً حول المحور الأصلي",
      "مساراً موجياً جيبياً يتذبذب بين اللوحين",
      "خطاً مستقيماً لا يتأثر بالمجال الكهربي"
    ],
    "correctAnswer": "A parabolic trajectory curving toward the positive plate",
    "correctIndex": 0,
    "hintEn": "Constant velocity horizontally + constant acceleration vertically = parabolic path.",
    "hintAr": "سرعة أفقية منتظمة + عجلة رأسية منتظمة بسبب القوة الكهربية = مسار قطع مكافئ.",
    "stepByStepSolutionEn": [
      "The electron travels horizontally with constant speed $v_x$. The vertical electric field $E = V/d$ exerts a constant vertical force $F_y = eE$, causing constant vertical acceleration $a_y = \\frac{eE}{m_e}$. The combination of constant $v_x$ and constant $a_y$ generates a parabolic trajectory ($y \\propto x^2$), bending toward the positive plate."
    ],
    "stepByStepSolutionAr": [
      "تتحرك الإلكترونات أفقياً بسرعة ثابتة $v_x$، بينما يؤثر المجال الكهربي الرأسي بقوة ثابتة $F = eE$ نحو اللوح الموجب فتكسبها عجلة منتظمة $a_y = \\frac{eE}{m_e}$. اجتماع السرعة الأفقية الثابتة مع العجلة الرأسية المنتظمة يجعل المسار قطعاً مكافئاً ($y \\propto x^2$) نحو اللوح الموجب."
    ],
    "teacherTipEn": "Once exiting the plates into the field-free region, the electrons continue in a straight line tangentially toward the fluorescent screen.",
    "teacherTipAr": "بمجرد خروج الإلكترونات من بين اللوحين إلى منطقة خالية من المجال، تسير في خط مستقيم مماس للمنحنى حتى تصطدم بالشاشة."
  },
  {
    "id": "egbac_phys_ch5_db_hots_18",
    "titleEn": "Blackbody Approximation Using a Hollow Cavity with a Pin-Hole",
    "titleAr": "تفسير اعتبار التجويف ذي الثقب الصغير جسماً أسود مثالياً",
    "difficulty": "hots",
    "questionEn": "Why is a hollow enclosed cavity with a tiny pin-hole considered the closest physical approximation to an ideal blackbody radiator?",
    "questionAr": "لماذا يعتبر تجويف مجوف أسود ذو فتحة ضيقة صغيرة أفضل تقريب عملي للجسم الأسود المثالي؟",
    "optionsEn": [
      "Because the hole cools the cavity to absolute zero",
      "Because any ray entering through the hole undergoes repeated internal reflections, being almost 100% absorbed before it can escape",
      "Because electromagnetic waves cannot penetrate metal surfaces",
      "Because the pin-hole polarizes 100% of incident photons"
    ],
    "optionsAr": [
      "لأن الفتحة تبرد التجويف إلى الصفر المطلق",
      "لأن أي إشعاع يدخل عبر الفتحة يعاني انعكاسات متتالية على الجدران الداخلية فيمتص بالكامل تقريباً قبل أن يتمكن من الخروج",
      "لأن الموجات الكهرومغناطيسية لا تنفذ من أسطح المعادن",
      "لأن الفتحة الضيقة تستقطب كل الفوتونات الساقطة بنسبة 100%"
    ],
    "correctAnswer": "Because any ray entering through the hole undergoes repeated internal reflections, being almost 100% absorbed before it can escape",
    "correctIndex": 1,
    "hintEn": "Multiple internal reflections trap incoming radiation completely.",
    "hintAr": "الانعكاسات المتكررة داخل التجويف تضمن امتصاص كل الأشعة الساقطة عبر الثقب.",
    "stepByStepSolutionEn": [
      "When radiation enters the pin-hole, each bounce on the inner walls absorbs a fraction $(1 - r)$. After multiple diffuse reflections, virtually all incident energy is absorbed (absorptivity $\\alpha \\approx 1$). When the cavity is heated, radiation escaping through the pin-hole represents pure thermal blackbody equilibrium radiation."
    ],
    "stepByStepSolutionAr": [
      "عند دخول أي شعاع عبر الفتحة الضيقة، يعاني انعكاسات متتالية على الجدران الداخلية ويمتص جزء منه في كل انعكاس، فلا يخرج منه شيء ويمتصه التجويف بالكامل (ممتص مثالي). وعند تسخين التجويف فإن الإشعاع الخارج من الثقب يمثل إشعاع الجسم الأسود المثالي (مشع مثالي)."
    ],
    "teacherTipEn": "Kirchhoff's law of thermal radiation: a perfect absorber is also a perfect emitter at the same temperature.",
    "teacherTipAr": "قانون كيرشوف للإشعاع: الجسم الذي يمتص كل الإشعاع الساقط عليه هو أيضاً أفضل باعث للإشعاع عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch5_db_hots_19",
    "titleEn": "Tungsten Filament vs Solar Emission Spectrum Comparison",
    "titleAr": "مقارنة إشعاع فتيلة مصباح التنجستن بإشعاع الشمس",
    "difficulty": "hots",
    "questionEn": "A tungsten filament lamp operates at $T_1 = 3000\\text{ K}$, while the surface of the Sun is at $T_2 = 6000\\text{ K}$. Comparing their radiation outputs:",
    "questionAr": "فتيلة مصباح تنجستن تتوهج عند $T_1 = 3000\\text{ K}$، بينما سطح الشمس عند $T_2 = 6000\\text{ K}$. بمقارنة إشعاع كل منهما:",
    "optionsEn": [
      "Both have peak emission in the ultraviolet region",
      "The lamp emits 16 times more total radiant energy than the Sun per unit area",
      "The solar peak is in the visible spectrum ($\\sim 500\\text{ nm}$), whereas the lamp peak lies in the infrared ($\\sim 1000\\text{ nm}$), so the lamp produces mainly heat rather than visible light",
      "The Sun emits zero radiation in the infrared region"
    ],
    "optionsAr": [
      "قمة إشعاع كل منهما تقع في نطاق الأشعة فوق البنفسجية",
      "يشع المصباح طاقة كلية لكل وحدة مساحات أكبر بـ 16 مرة من الشمس",
      "قمة إشعاع الشمس تقع في نطاق الضوء المرئي ($\\sim 500\\text{ nm}$)، بينما قمة إشعاع المصباح تقع في الأشعة تحت الحمراء ($\\sim 1000\\text{ nm}$)، ولذلك ينتج المصباح حرارة أكبر بكثير من الضوء المرئي",
      "لا تشع الشمس أي إشعاع في نطاق الأشعة تحت الحمراء"
    ],
    "correctAnswer": "The solar peak is in the visible spectrum ($\\sim 500\\text{ nm}$), whereas the lamp peak lies in the infrared ($\\sim 1000\\text{ nm}$), so the lamp produces mainly heat rather than visible light",
    "correctIndex": 2,
    "hintEn": "Wien's law: $\\lambda_1 T_1 = \\lambda_2 T_2$. Ratio $6000/3000 = 2$.",
    "hintAr": "قانون فين: نسبة درجات الحرارة 2:1، إذن نسبة الأطوال الموجية لأقصى شدة 1:2.",
    "stepByStepSolutionEn": [
      "From Wien's law: $\\frac{\\lambda_{\\max, \\text{lamp}}}{\\lambda_{\\max, \\text{sun}}} = \\frac{T_{\\text{sun}}}{T_{\\text{lamp}}} = \\frac{6000}{3000} = 2$. Thus $\\lambda_{\\max, \\text{lamp}} = 2 \\times 500\\text{ nm} = 1000\\text{ nm}$ (infrared). Over $80\\%$ of a tungsten bulb's output is invisible infrared heat, making it an inefficient lighting source."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لقانون فين: $\\frac{\\lambda_1}{\\lambda_2} = \\frac{T_2}{T_1} = \\frac{6000}{3000} = 2$. إذن الطول الموجي لأقصى شدة إشعاع للمصباح ضعف الشمس ($1000\\text{ nm}$) ويقع في نطاق الأشعة تحت الحمراء. لذلك حوالي 80% من إشعاع مصباح التنجستن حرارة غير مرئية و20% فقط ضوء مرئي."
    ],
    "teacherTipEn": "This is why incandescent bulbs have been largely replaced by high-efficiency LED lighting.",
    "teacherTipAr": "لهذا السبب تم استبدال المصابيح المتوهجة بمصابيح الليد الأكثر كفاءة التي لا تعتمد على الإشعاع الحراري المتوهج."
  },
  {
    "id": "egbac_phys_ch5_db_hots_20",
    "titleEn": "Momentum Conservation Mechanism: Bound vs Free Electron",
    "titleAr": "آلية حفظ كمية التحرك: الإلكترون المقيد مقابل الإلكترون الحر",
    "difficulty": "hots",
    "questionEn": "Why does the photoelectric effect require a BOUND electron in a metallic lattice, whereas the Compton effect occurs readily with a FREE electron?",
    "questionAr": "لماذا تشترط الظاهرة الكهروضوئية وجود إلكترون مقيد في شبكة بلورية، بينما يحدث تأثير كومبتون مع إلكترون حر؟",
    "optionsEn": [
      "Because bound electrons have zero mass inside metals",
      "Because free electrons possess infinite electrical resistance",
      "Because photons cannot interact with uncharged entities",
      "Because the entire metallic crystal lattice absorbs the recoil momentum during complete photon absorption, satisfying momentum conservation"
    ],
    "optionsAr": [
      "لأن الإلكترونات المقيدة تصبح عديمة الكتلة داخل الفلزات",
      "لأن الإلكترونات الحرة تمتلك مقاومة كهربية لانهائية",
      "لأن الفوتونات لا تتفاعل مع الأجسام غير المشحونة",
      "لأن الشبكة البلورية للفلز بالكامل تمتص ارتداد كمية التحرك أثناء امتصاص الفوتون، فيتحقق قانون بقاء كمية التحرك"
    ],
    "correctAnswer": "Because the entire metallic crystal lattice absorbs the recoil momentum during complete photon absorption, satisfying momentum conservation",
    "correctIndex": 3,
    "hintEn": "Complete absorption of a photon by a single particle violates momentum conservation unless a lattice recoils.",
    "hintAr": "الامتصاص التام للفوتون يتطلب وجود جسم ثالث (الشبكة البلورية) لامتصاص كمية التحرك المتبقية.",
    "stepByStepSolutionEn": [
      "When a photon is absorbed completely, its energy and momentum must both be conserved. A free electron cannot conserve both simultaneously. But when the electron is bound in a metal crystal, the entire crystal lattice (with mass $M_{\\text{lattice}} \\approx \\infty$) absorbs the excess momentum with essentially zero kinetic energy ($KE_{\\text{recoil}} = p^2 / 2M \\approx 0$). In Compton scattering, the scattered photon carries away the excess momentum, so no lattice is needed."
    ],
    "stepByStepSolutionAr": [
      "عند امتصاص الفوتون كلياً، يستحيل لإلكترون حر منفرد تحقيق قانوني بقاء الطاقة وكمية التحرك معاً. ولكن عند ارتباط الإلكترون بالفلز، تمتص بلورة الفلز بالكامل كمية التحرك المرتدة دون أن تكتسب طاقة حركة محسوسة لعظم كتلتها. أما في كومبتون فالإلكترون الحر يتشتت معه فوتون آخر يحمل فائض كمية التحرك."
    ],
    "teacherTipEn": "This deep theoretical insight connects solid state physics with quantum electrodynamics.",
    "teacherTipAr": "هذا الربط الفيزيائي العميق بين فيزياء الجوامد وميكانيكا الكم من أرقى مفاهيم التفكير العليا."
  },
  {
    "id": "egbac_phys_ch5_db_hots_21",
    "titleEn": "Determining Planck Constant from Two Stopping Voltages",
    "titleAr": "تعيين ثابت بلانك عملياً من قراءتي جهد إيقاف لترددين مختلفين",
    "difficulty": "hots",
    "questionEn": "A photocell is illuminated by light of frequency $\\nu_1$, yielding stopping potential $V_{s1}$. When illuminated by frequency $\\nu_2$ ($\\nu_2 > \\nu_1$), the stopping potential is $V_{s2}$. Planck's constant $h$ can be determined from this data as:",
    "questionAr": "خلية كهروضوئية يسقط عليها ضوء بتردد $\\nu_1$ فكان جهد الإيقاف $V_{s1}$. وعند سقوط ضوء بتردد $\\nu_2$ ($\\nu_2 > \\nu_1$) كان جهد الإيقاف $V_{s2}$. يمكن حساب ثابت بلانك $h$ من هذه النتائج بالعلاقة:",
    "optionsEn": [
      "$h = \\frac{e(V_{s2} - V_{s1})}{\\nu_2 - \\nu_1}$",
      "$h = \\frac{V_{s2} - V_{s1}}{e(\\nu_2 - \\nu_1)}$",
      "$h = \\frac{e(V_{s1} + V_{s2})}{\\nu_1 + \\nu_2}$",
      "$h = \\frac{e \\nu_1 \\nu_2}{V_{s2} - V_{s1}}$"
    ],
    "optionsAr": [
      "$h = \\frac{e(V_{s2} - V_{s1})}{\\nu_2 - \\nu_1}$",
      "$h = \\frac{V_{s2} - V_{s1}}{e(\\nu_2 - \\nu_1)}$",
      "$h = \\frac{e(V_{s1} + V_{s2})}{\\nu_1 + \\nu_2}$",
      "$h = \\frac{e \\nu_1 \\nu_2}{V_{s2} - V_{s1}}$"
    ],
    "correctAnswer": "$h = \\frac{e(V_{s2} - V_{s1})}{\\nu_2 - \\nu_1}$",
    "correctIndex": 0,
    "hintEn": "Subtract $eV_{s1} = h\\nu_1 - W_e$ from $eV_{s2} = h\\nu_2 - W_e$.",
    "hintAr": "اطرح المعادلتين: $e(V_{s2} - V_{s1}) = h(\\nu_2 - \\nu_1)$.",
    "stepByStepSolutionEn": [
      "We have $eV_{s2} = h\\nu_2 - W_e$ and $eV_{s1} = h\\nu_1 - W_e$. Subtracting the first equation from the second eliminates the unknown work function $W_e$: $e(V_{s2} - V_{s1}) = h(\\nu_2 - \\nu_1) \\implies h = \\frac{e(V_{s2} - V_{s1})}{\\nu_2 - \\nu_1}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $eV_{s2} = h\\nu_2 - W_e$ و $eV_{s1} = h\\nu_1 - W_e$. بطرح المعادلتين للتخلص من دالة الشغل $W_e$ المجهولة، نحصل على $e(V_{s2} - V_{s1}) = h(\\nu_2 - \\nu_1)$ ومنها $h = \\frac{e(V_{s2} - V_{s1})}{\\nu_2 - \\nu_1}$."
    ],
    "teacherTipEn": "This was Millikan's Nobel-prize-winning precision method for measuring Planck's constant.",
    "teacherTipAr": "هذه الطريقة الدقيقة هي التي استخدمها روبرت ميليكان عملياً لقياس ثابت بلانك ونال عليها جائزة نوبل."
  },
  {
    "id": "egbac_phys_ch5_db_hots_22",
    "titleEn": "Physical Meaning of Photocurrent Saturation",
    "titleAr": "المعنى الفيزيائي لوصول التيار الكهروضوئي إلى حالة التشبع",
    "difficulty": "hots",
    "questionEn": "In a photoelectric cell, the current reaches saturation when:",
    "questionAr": "في الخلية الكهروضوئية، يصل التيار إلى حالة التشبع عندما:",
    "optionsEn": [
      "The work function of the cathode becomes zero",
      "The anode voltage is sufficiently positive to collect 100% of the photoelectrons ejected from the cathode per second",
      "The accelerating voltage equals the stopping potential",
      "The incident light frequency is doubled"
    ],
    "optionsAr": [
      "تصبح دالة شغل المهبط مساوية للصفر",
      "يصبح جهد المصعد موجباً بدرجة كافية لجذب 100% من جميع الإلكترونات المنبعثة من المهبط في الثانية",
      "يتساوى جهد المصعد المعجل مع جهد الإيقاف",
      "يتضاعف تردد الضوء الساقط إلى مثليه"
    ],
    "correctAnswer": "The anode voltage is sufficiently positive to collect 100% of the photoelectrons ejected from the cathode per second",
    "correctIndex": 1,
    "hintEn": "Saturation means rate of electron collection equals rate of electron emission.",
    "hintAr": "التشبع يعني أن معدل وصول الإلكترونات للمصعد يساوي تماماً معدل انبعاثها من المهبط.",
    "stepByStepSolutionEn": [
      "Photoelectrons are emitted from the cathode at a rate determined strictly by light intensity ($\\Phi_L$). When the anode potential is positive enough, every single emitted electron is drawn across the vacuum to the anode. Increasing the voltage further cannot increase the current because there are no additional electrons to collect."
    ],
    "stepByStepSolutionAr": [
      "تنبعث الإلكترونات بمعدل يحدده عدد الفوتونات الساقطة بالثانية (الشدة). وعندما يصبح جهد المصعد موجباً بدرجة كافية، يجذب كل هذه الإلكترونات دون استثناء فيثبت التيار. وأي زيادة إضافية في الجهد لن تزيد التيار لعدم وجود إلكترونات إضافية."
    ],
    "teacherTipEn": "To increase saturation current, the ONLY way is to increase the light intensity (incident photon rate $\\Phi_L$).",
    "teacherTipAr": "الوسيلة الوحيدة لزيادة تيار التشبع هي زيادة شدة الضوء الساقط (عدد الفوتونات الساقطة بالثانية)."
  },
  {
    "id": "egbac_phys_ch5_db_hots_23",
    "titleEn": "Relativistic Limit of Accelerated Electrons in Electron Microscope",
    "titleAr": "الحد النسبي لسرعة الإلكترونات في المجهر الإلكتروني فائق الجهد",
    "difficulty": "hots",
    "questionEn": "In a high-voltage transmission electron microscope operating at $V = 100\\text{ kV}$:",
    "questionAr": "في مجهر إلكتروني نافذ فائق الجهد يعمل بفرق جهد $V = 100\\text{ kV}$:",
    "optionsEn": [
      "The electron velocity exceeds $2c$",
      "The de Broglie wavelength increases with higher voltage",
      "The electron's kinetic energy ($100\\text{ keV}$) is a significant fraction of its rest mass energy ($m_e c^2 \\approx 511\\text{ keV}$), requiring relativistic corrections for precise wavelength calculations",
      "The electron converts into a proton upon reaching the specimen"
    ],
    "optionsAr": [
      "سرعة الإلكترون تتجاوز ضعفي سرعة الضوء $2c$",
      "يزداد طول موجة دي برولي بزيادة فرق الجهد المعجل",
      "طاقة حركة الإلكترون ($100\\text{ keV}$) تمثل نسبة محسوسة تقارب 20% من طاقة سكونه ($m_e c^2 \\approx 511\\text{ keV}$)، مما يستلزم تطبيق التصحيحات النسبية لحساب طول الموجة بدقة",
      "يتحول الإلكترون إلى بروتون عند اصطدامه بالعينة"
    ],
    "correctAnswer": "The electron's kinetic energy ($100\\text{ keV}$) is a significant fraction of its rest mass energy ($m_e c^2 \\approx 511\\text{ keV}$), requiring relativistic corrections for precise wavelength calculations",
    "correctIndex": 2,
    "hintEn": "Compare kinetic energy $eV = 100\\text{ keV}$ with rest mass energy $m_e c^2 \\approx 511\\text{ keV}$.",
    "hintAr": "قارن طاقة الحركة بطاقة كتلة سكون الإلكترون $m_0 c^2 \\approx 511\\text{ keV}$.",
    "stepByStepSolutionEn": [
      "The electron rest energy is $E_0 = m_e c^2 \\approx 511\\text{ keV}$. At $V = 100\\text{ kV}$, $KE = 100\\text{ keV} \\approx 0.2 E_0$. The electron speed reaches $\\sim 0.55c$, so relativistic mass increase and momentum $p = \\gamma m_e v$ shorten the actual de Broglie wavelength further than classical predictions."
    ],
    "stepByStepSolutionAr": [
      "طاقة السكون للإلكترون حوالي $511\\text{ keV}$. عند $100\\text{ kV}$ تكون طاقة الحركة حوالي 20% من طاقة السكون وتبلغ سرعته أكثر من نصف سرعة الضوء ($0.55c$)، مما يجعل كتلته تزداد نسبياً ويزداد كمية تحركه ويصبح طول موجته أقصر من الحسابات الكلاسيكية."
    ],
    "teacherTipEn": "High-voltage TEM instruments exploit this relativistic shortening to achieve sub-angstrom atomic resolution ($< 0.05\\text{ \\AA}$).",
    "teacherTipAr": "تستغل المجاهر الإلكترونية المتقدمة هذا القصر النسبي لتحقيق قدرة تحليلية ذرية فائقة تقل عن نصف أنجستروم."
  },
  {
    "id": "egbac_phys_ch5_db_hots_24",
    "titleEn": "Area Under Planck Blackbody Curve as Total Radiative Emittance",
    "titleAr": "المساحة أسفل منحنى بلانك ومدلولها الفيزيائي",
    "difficulty": "hots",
    "questionEn": "The total area enclosed under the Planck blackbody radiation curve (plotting spectral emissive power versus wavelength) physically represents:",
    "questionAr": "المساحة الكلية المحصورة أسفل منحنى بلانك لإشعاع الجسم الأسود (بين شدة الإشعاع والطول الموجي) تمثل فيزيائياً:",
    "optionsEn": [
      "The threshold frequency of the radiating blackbody",
      "The de Broglie wavelength of photons inside the cavity",
      "The speed of light in the cavity medium",
      "The total radiant energy emitted per second per unit surface area across all wavelengths ($E_{\\text{total}} = \\sigma T^4$)"
    ],
    "optionsAr": [
      "التردد الحرج لمادة الجسم الأسود المشع",
      "طول موجة دي برولي للفوتونات داخل التجويف",
      "سرعة الضوء داخل وسط التجويف",
      "الطاقة الإشعاعية الكلية المنبعثة في الثانية من وحدة المساحات عبر جميع الأطوال الموجية ($E_{\\text{total}} = \\sigma T^4$)"
    ],
    "correctAnswer": "The total radiant energy emitted per second per unit surface area across all wavelengths ($E_{\\text{total}} = \\sigma T^4$)",
    "correctIndex": 3,
    "hintEn": "Integration of spectral intensity over all wavelengths gives total emittance.",
    "hintAr": "تكامل شدة الإشعاع على جميع الأطوال الموجية يعطي القدرة الإشعاعية الكلية.",
    "stepByStepSolutionEn": [
      "The integral $\\int_0^\\infty E_\\lambda d\\lambda$ represents the total energy emitted by the blackbody per unit time per unit area over the entire electromagnetic spectrum. By Stefan-Boltzmann's law, this area is proportional to $T^4$."
    ],
    "stepByStepSolutionAr": [
      "المساحة الكلية أسفل المنحنى هي التكامل الرياضي لشدة الإشعاع على جميع الأطوال الموجية، وتمثل الطاقة الكلية المشعة في الثانية من وحدة المساحات من سطح الجسم وتتناسب مع الأس الرابع لدرجة الحرارة المطلقة $T^4$."
    ],
    "teacherTipEn": "Doubling the absolute temperature increases the area under the curve by $2^4 = 16$ times.",
    "teacherTipAr": "مضاعفة درجة الحرارة المطلقة تزيد المساحة أسفل المنحنى بمقدار 16 مرة."
  },
  {
    "id": "egbac_phys_ch5_db_hots_25",
    "titleEn": "Photon Flux Density: Radio Waves vs Gamma Rays at Equal Beam Power",
    "titleAr": "كثافة تدفق الفوتونات: موجات الراديو مقابل أشعة جاما عند ثبوت القدرة",
    "difficulty": "hots",
    "questionEn": "Two beams of equal cross-sectional area and equal power $P = 100\\text{ W}$ carry radio waves ($\\nu = 10^6\\text{ Hz}$) and gamma rays ($\\nu = 10^{20}\\text{ Hz}$) respectively. How do their photon emission rates $\\Phi_L$ compare?",
    "questionAr": "حزمتان لهما نفس مساحة المقطع ونفس القدرة $P = 100\\text{ W}$، إحداهما موجات راديو ($\\nu = 10^6\\text{ Hz}$) والأخرى أشعة جاما ($\\nu = 10^{20}\\text{ Hz}$). كيف يقارن معدل انبعاث الفوتونات $\\Phi_L$ في الحزمتين؟",
    "optionsEn": [
      "The radio beam emits $10^{14}$ times more photons per second than the gamma ray beam",
      "The gamma ray beam emits $10^{14}$ times more photons per second",
      "Both beams emit the exact same number of photons per second",
      "The radio beam emits zero photons because radio waves are purely classical"
    ],
    "optionsAr": [
      "حزمة الراديو ينبعث منها فوتونات بمعدل يزيد بمقدار $10^{14}$ مرة عن حزمة أشعة جاما",
      "حزمة أشعة جاما ينبعث منها فوتونات بمعدل يزيد بمقدار $10^{14}$ مرة",
      "كلا الحزمتين ينبعث منهما نفس عدد الفوتونات تماماً في الثانية",
      "حزمة الراديو لا ينبعث منها أي فوتونات لأن موجات الراديو كلاسيكية فقط"
    ],
    "correctAnswer": "The radio beam emits $10^{14}$ times more photons per second than the gamma ray beam",
    "correctIndex": 0,
    "hintEn": "$\\Phi_L = \\frac{P}{h\\nu} \\implies \\frac{\\Phi_{L, \\text{radio}}}{\\Phi_{L, \\text{gamma}}} = \\frac{\\nu_{\\text{gamma}}}{\\nu_{\\text{radio}}}$.",
    "hintAr": "معدل انبعاث الفوتونات يتناسب عكسياً مع التردد عند ثبوت القدرة: $\\Phi_L = \\frac{P}{h\\nu}$.",
    "stepByStepSolutionEn": [
      "Since $\\Phi_L = \\frac{P}{h\\nu}$, at constant total power $P$, photon rate is inversely proportional to frequency: $\\frac{\\Phi_{L, \\text{radio}}}{\\Phi_{L, \\text{gamma}}} = \\frac{10^{20}}{10^6} = 10^{14}$. Each gamma photon carries a huge amount of energy, so relatively few are needed to make $100\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\Phi_L = \\frac{P}{h\\nu}$، فإن معدل الفوتونات يتناسب عكسياً مع تردد الفوتون الفردي عند ثبوت القدرة. فوتون جاما يحمل طاقة هائلة فيكفي عدد قليل منه لتكوين قدرة $100\\text{ W}$، بينما فوتون الراديو طاقته ضئيلة جداً فيلزم عدد فلكي هائل منه ($10^{14}$ ضعف)."
    ],
    "teacherTipEn": "This explains why radio waves behave as a continuous classical wave field, while gamma rays reveal their individual particulate nature.",
    "teacherTipAr": "هذا يفسر لماذا تبدو موجات الراديو كموجات متصلة ناعمة، بينما تظهر أشعة جاما خصائصها الجسيمية المنفصلة بوضوح شديد."
  },
  {
    "id": "egbac_phys_ch5_db_hots_26",
    "titleEn": "Why Cathode Ray Tube Must Be Under High Vacuum",
    "titleAr": "سبب تفريغ أنبوبة أشعة الكاثود تفريغاً عالياً",
    "difficulty": "hots",
    "questionEn": "Why must the glass envelope of a cathode ray tube (CRT) be evacuated to an ultra-high vacuum before operation?",
    "questionAr": "لماذا يجب تفريغ أنبوبة أشعة الكاثود من الهواء تماماً حتى ضغط منخفض جداً قبل تشغيلها؟",
    "optionsEn": [
      "To make the cathode cooler than absolute zero",
      "To prevent moving electrons from colliding with gas molecules, which would scatter the beam, cause energy loss, and ionize gas into disruptive glow discharges",
      "To allow light photons to travel faster than speed $c$",
      "To increase the resistance of the electron gun filament to infinity"
    ],
    "optionsAr": [
      "لتبريد الكاثود إلى ما دون الصفر المطلق",
      "لمنع تصادم الإلكترونات المعجلة بجزيئات الهواء، مما يشتت الحزمة ويفقدها طاقتها ويؤين الغاز مسبباً تفريغاً هادماً",
      "للسماح للفوتونات بالتحرك بسرعة تفوق سرعة الضوء",
      "لزيادة مقاومة فتيلة المدفع الإلكتروني إلى اللانهاية"
    ],
    "correctAnswer": "To prevent moving electrons from colliding with gas molecules, which would scatter the beam, cause energy loss, and ionize gas into disruptive glow discharges",
    "correctIndex": 1,
    "hintEn": "Gas molecules in the tube would scatter electrons through collisions.",
    "hintAr": "وجود جزيئات الغاز يعيق حركة الإلكترونات ويشتت مسارها.",
    "stepByStepSolutionEn": [
      "Electrons have very small mass and are easily deflected or stopped by collisions with gas molecules. Evacuating the tube gives electrons a mean free path longer than the tube length, ensuring an unhindered, focused electron beam reaches the screen."
    ],
    "stepByStepSolutionAr": [
      "صغر كتلة الإلكترون يجعله عرضة للتشتت وفقد الطاقة عند أي تصادم مع جزيئات الغاز، كما أن تأين جزيئات الغاز يعطل عمل الألواح الحاكمة. التفريغ العالي يضمن وصول الإلكترونات في خطوط مستقيمة دون عوائق للشاشة."
    ],
    "teacherTipEn": "High vacuum is essential in all electronic vacuum tubes (CRT, electron microscope, Coolidge X-ray tube).",
    "teacherTipAr": "التفريغ العالي ضروري في جميع الأنابيب الإلكترونية (الكاثود، المجهر الإلكتروني، وأنبوبة كولدج)."
  },
  {
    "id": "egbac_phys_ch5_db_hots_27",
    "titleEn": "Fluorescent Screen Energy Conversion in CRT",
    "titleAr": "تحولات الطاقة على الشاشة الفلورسية في أنبوبة الكاثود",
    "difficulty": "hots",
    "questionEn": "The fluorescent screen in a cathode ray tube (CRT) serves the essential function of:",
    "questionAr": "الوظيفة الأساسية للشاشة الفلورسية في أنبوبة أشعة الكاثود هي:",
    "optionsEn": [
      "Accelerating electrons to higher velocities",
      "Absorbing magnetic fields from surrounding coils",
      "Converting the kinetic energy of striking electrons into visible light flashes via luminescence",
      "Converting light into electric voltage"
    ],
    "optionsAr": [
      "زيادة تعجيل الإلكترونات لسرعات أكبر",
      "امتصاص المجالات المغناطيسية من الملفات المحيطة",
      "تحويل طاقة حركة الإلكترونات المصطدمة بها إلى وميض ضوئي مرئي عن طريق الفلورة",
      "تحويل الضوء إلى جهد كهربي"
    ],
    "correctAnswer": "Converting the kinetic energy of striking electrons into visible light flashes via luminescence",
    "correctIndex": 2,
    "hintEn": "Phosphor atoms absorb electron kinetic energy and emit visible light photons upon de-excitation.",
    "hintAr": "مادة الشاشة الفلورسية تضيء وتومض عند اصطدام الإلكترونات بها.",
    "stepByStepSolutionEn": [
      "The inner surface of the screen is coated with a phosphor material (e.g. zinc sulfide). When fast-moving electrons collide with phosphor atoms, their kinetic energy excites bound atomic electrons, which subsequently de-excite by emitting photons of visible light."
    ],
    "stepByStepSolutionAr": [
      "تطلى الشاشة من الداخل بمادة فلورسية تومض عند اصطدام الإلكترونات بها. طاقة حركة الإلكترونات تثير ذرات المادة الفلورسية، وعند هبوطها تشع فوتونات ضوء مرئي ترسم الصورة على الشاشة."
    ],
    "teacherTipEn": "Energy conversion sequence in CRT: Electric potential energy $\\to$ Electron kinetic energy $\\to$ Optical photon radiant energy.",
    "teacherTipAr": "سلسلة تحولات الطاقة في الكاثود: طاقة وضع كهربية $\\to$ طاقة حركة للإلكترونات $\\to$ طاقة ضوئية مرئية على الشاشة."
  },
  {
    "id": "egbac_phys_ch5_db_hots_28",
    "titleEn": "Instantaneous Quantum Photoelectric Emission",
    "titleAr": "التفسير الكمي للانبعاث الكهروضوئي اللحظي",
    "difficulty": "hots",
    "questionEn": "Experiments prove that photoelectric emission occurs in less than $10^{-9}\\text{ s}$ after illumination with $\\nu \\ge \\nu_c$, even under extremely dim light. This proves that:",
    "questionAr": "أثبتت التجارب أن الانبعاث الكهروضوئي يحدث في زمن أقل من $10^{-9}\\text{ s}$ من سقوط الضوء ($\\nu \\ge \\nu_c$) حتى مع الضوء الخافت جداً. هذا يثبت أن:",
    "optionsEn": [
      "Electrons store thermal energy indefinitely in the metal",
      "Light travels faster at low intensities",
      "The work function of metals decreases over time",
      "Light energy is localized in discrete photon packets absorbed instantaneously by individual electrons, with no time lag for wave energy accumulation"
    ],
    "optionsAr": [
      "الإلكترونات تخزن الطاقة الحرارية إلى أجل غير مسمى داخل الفلز",
      "الضوء يتحرك بسرعة أكبر عند الشدات المنخفضة",
      "دالة شغل الفلزات تتناقص بمرور الزمن",
      "طاقة الضوء مركزة في فوتونات كمية يمتصها الإلكترون لحظياً دفعة واحدة، دون الحاجة لفترة انتظار لتراكم طاقة الموجة"
    ],
    "correctAnswer": "Light energy is localized in discrete photon packets absorbed instantaneously by individual electrons, with no time lag for wave energy accumulation",
    "correctIndex": 3,
    "hintEn": "A single photon delivers its entire quantum of energy $h\\nu$ in a single collision event.",
    "hintAr": "امتصاص طاقة الفوتون تفاعل فردي فوري لا يحتاج لزمن تراكم.",
    "stepByStepSolutionEn": [
      "In classical wave theory, continuous wavefronts would spread energy thinly over countless atoms, requiring hours of exposure for a single electron to absorb enough energy to escape. The absence of any time lag proves that photon energy is absorbed in full in a single instantaneous quantum event."
    ],
    "stepByStepSolutionAr": [
      "كلاسيكياً كانت الطاقة تتوزع بانتظام على مساحة الموجة، فتحتاج ساعات لجمع طاقة تكفي لتحرير إلكترون واحد في الضوء الخافت. الانبعاث اللحظي أثبت أن فوتوناً واحداً يمنح كامل طاقته لإلكترون واحد في تصادم فوري."
    ],
    "teacherTipEn": "Instantaneous emission even in dim light was the crowning experimental blow against the classical wave theory of light.",
    "teacherTipAr": "الانبعاث اللحظي للضوء الخافت كان الضربة القاضية للنظرية الموجية الكلاسيكية."
  },
  {
    "id": "egbac_phys_ch5_db_hots_29",
    "titleEn": "Why Alkali Metals Are Chosen for Photocathodes",
    "titleAr": "سبب استخدام فلزات الأقلاء في مهابط الخلايا الكهروضوئية",
    "difficulty": "hots",
    "questionEn": "Why are alkali metals (such as cesium and potassium) preferentially selected as cathode materials for visible-light photoelectric cells?",
    "questionAr": "لماذا تفضل فلزات الأقلاء (مثل السيزيوم والبوتاسيوم) في صناعة مهابط الخلايا الكهروضوئية للضوء المرئي؟",
    "optionsEn": [
      "Because they have the largest atomic radii and lowest work functions, allowing visible light photons to eject photoelectrons",
      "Because they are radioactive and emit alpha particles",
      "Because they have infinite electrical resistivity",
      "Because their threshold frequency lies in the far ultraviolet region"
    ],
    "optionsAr": [
      "لأنها تمتلك أكبر أنصاف أقطار ذرية وأقل دوال شغل، مما يمكن فوتونات الضوء المرئي من تحرير إلكترونات منها",
      "لأنها مواد مشعة تطلق جسيمات ألفا تلقائياً",
      "لأن مقاومتها الكهربية النوعية لانهائية",
      "لأن ترددها الحرج يقع في نطاق الأشعة فوق البنفسجية البعيدة"
    ],
    "correctAnswer": "Because they have the largest atomic radii and lowest work functions, allowing visible light photons to eject photoelectrons",
    "correctIndex": 0,
    "hintEn": "Large atomic radius $\\implies$ weakly bound valence electron $\\implies$ low work function $W_e$.",
    "hintAr": "كبر نصف القطر الذري يضعف جذب النواة للإلكترون الخارجي فتقل دالة الشغل.",
    "stepByStepSolutionEn": [
      "Alkali metals have a single valence electron far from the nucleus, resulting in very low ionization energies and work functions ($W_e \\sim 1.9-2.2\\text{ eV}$). Consequently, their threshold wavelengths extend into the visible and infrared spectrum ($\\lambda_c \\sim 550-650\\text{ nm}$), making them responsive to visible light."
    ],
    "stepByStepSolutionAr": [
      "فلزات الأقلاء تتميز بكبر حجم ذراتها وضعف ارتباط إلكترونات التكافؤ بالأنوية، فتقل دالة الشغل ($W_e \\sim 1.9\\text{ eV}$ في السيزيوم) ويزداد طولها الموجي الحرج ليشمل الضوء المرئي."
    ],
    "teacherTipEn": "Cesium has the lowest work function of all stable elements ($W_e \\approx 1.9\\text{ eV}$), making it the gold standard for photocathodes.",
    "teacherTipAr": "السيزيوم يمتلك أقل دالة شغل بين العناصر المستقرة ($1.9\\text{ eV}$) لذا فهو المادة المثالية للخلايا الكهروضوئية."
  },
  {
    "id": "egbac_phys_ch5_db_hots_30",
    "titleEn": "Sign and Polarity of Stopping Potential",
    "titleAr": "المدلول الفيزيائي لجهد الإيقاف السالب",
    "difficulty": "hots",
    "questionEn": "In a photoelectric cell circuit, why is the stopping potential $V_s$ applied with a negative polarity to the collector anode?",
    "questionAr": "في دائرة الخلية الكهروضوئية، لماذا يطبق جهد الإيقاف بقطبية سالبة على المصعد (اللوح الجامع)؟",
    "optionsEn": [
      "To increase the rate of photon absorption at the cathode",
      "To establish a retarding electric field that does negative work on ejected electrons, stopping even the fastest ones ($KE_{\\max} = eV_s$)",
      "To heat the anode to cause thermionic emission",
      "To convert the photoelectrons into positrons"
    ],
    "optionsAr": [
      "لزيادة معدل امتصاص الفوتونات عند المهبط",
      "لتكوين مجال كهربي كابح يبذل شغلاً سالباً على الإلكترونات المنبعثة لإيقاف أسرعها عن الوصول للمصعد ($KE_{\\max} = eV_s$)",
      "لتسخين المصعد لإحداث انبعاث كهروحراري معاكس",
      "لتحويل الإلكترونات المنبعثة إلى بوزيترونات موجبة"
    ],
    "correctAnswer": "To establish a retarding electric field that does negative work on ejected electrons, stopping even the fastest ones ($KE_{\\max} = eV_s$)",
    "correctIndex": 1,
    "hintEn": "A negative potential on the anode repels negative electrons.",
    "hintAr": "الجهد السالب للمصعد يتنافر مع شحنة الإلكترون السالبة ويبطئه.",
    "stepByStepSolutionEn": [
      "Since electrons carry negative charge $-e$, making the anode negative creates an opposing electric field that exerts a retarding force $F = eE$ backward. The retarding electrostatic work $W = -eV_s$ drains the kinetic energy until $v = 0$ for all electrons."
    ],
    "stepByStepSolutionAr": [
      "شحنة الإلكترون سالبة، وتوصيل المصعد بالقطب السالب يولد مجالاً كهربياً معاكساً يتنافر مع الإلكترونات ويبذل شغلاً سالباً ينقص من طاقة حركتها حتى يقف أسرعها ويصبح التيار صفراً."
    ],
    "teacherTipEn": "At stopping potential, $eV_s = \\frac{1}{2}m_e v_{\\max}^2 = h\\nu - W_e$.",
    "teacherTipAr": "عند جهد الإيقاف: $eV_s = \\frac{1}{2}m_e v_{\\max}^2 = h\\nu - W_e$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_31",
    "titleEn": "Electron Yield from Two Beams of Equal Power but Different Frequencies",
    "titleAr": "مقارنة معدل الإلكترونات المنبعثة من شعاعين متساويين في القدرة ومختلفين في التردد",
    "difficulty": "hots",
    "questionEn": "Two monochromatic light sources have identical radiant power $P$. Source 1 emits at frequency $\\nu_1 = 2\\nu_c$, while Source 2 emits at $\\nu_2 = 3\\nu_c$. Assuming 100% quantum efficiency, which source ejects more photoelectrons per second from the same metal?",
    "questionAr": "مصدران ضوئيان أحاديا اللون لهما نفس القدرة الضوئية $P$. المصدر الأول تردده $\\nu_1 = 2\\nu_c$ والمصدر الثاني تردده $\\nu_2 = 3\\nu_c$. بافتراض كفاءة انبعاث 100%، أي المصدرين يحرر عدداً أكبر من الإلكترونات في الثانية من نفس الفلز؟",
    "optionsEn": [
      "Source 2, because higher frequency always produces more electrons",
      "Both sources eject the exact same number of electrons per second",
      "Source 1, because each of its photons carries less energy ($E_1 < E_2$), so at equal total power it delivers more photons per second",
      "Neither source can eject any electrons because power is conserved"
    ],
    "optionsAr": [
      "المصدر الثاني، لأن التردد الأعلى يعطي دائماً تياراً أكبر",
      "كلا المصدرين يحرران نفس عدد الإلكترونات تماماً في الثانية",
      "المصدر الأول، لأن طاقة فوتونه الفردي أقل، فيبعث عدداً أكبر من الفوتونات في الثانية عند نفس القدرة الكلية",
      "لا يمكن لأي من المصدرين تحرير إلكترونات لبقاء القدرة"
    ],
    "correctAnswer": "Source 1, because each of its photons carries less energy ($E_1 < E_2$), so at equal total power it delivers more photons per second",
    "correctIndex": 2,
    "hintEn": "$\\Phi_L = \\frac{P}{h\\nu} \\implies \\frac{\\Phi_{L1}}{\\Phi_{L2}} = \\frac{\\nu_2}{\\nu_1} = \\frac{3}{2}$.",
    "hintAr": "عدد الفوتونات في الثانية $\\Phi_L = \\frac{P}{h\\nu}$. التردد الأقل يمتلك عدداً أكبر من الفوتونات عند ثبوت القدرة.",
    "stepByStepSolutionEn": [
      "Total power is $P = \\Phi_L h\\nu$. Therefore, photon emission rate is $\\Phi_L = \\frac{P}{h\\nu}$. For Source 1: $\\Phi_{L1} = \\frac{P}{2h\\nu_c}$. For Source 2: $\\Phi_{L2} = \\frac{P}{3h\\nu_c}$. Since each photon releases one electron, Source 1 yields $1.5\\times$ more electrons per second, producing a larger saturation current."
    ],
    "stepByStepSolutionAr": [
      "القدرة $P = \\Phi_L h\\nu$. إذن معدل الفوتونات $\\Phi_L = \\frac{P}{h\\nu}$. الفوتون الأقل طاقة يحتاج المصدر منه عدداً أكبر لتحقيق نفس القدرة بالواط، فيسقط عدد فوتونات أكبر ويحرر عدداً أكبر من الإلكترونات."
    ],
    "teacherTipEn": "A classic high-level conceptual exam problem: Source 1 yields more electrons with LESS kinetic energy; Source 2 yields fewer electrons with MORE kinetic energy.",
    "teacherTipAr": "من أروع مسائل التفكير العليا: المصدر الأول يعطي عدداً أكبر من الإلكترونات بطاقة حركة أقل، بينما المصدر الثاني يعطي عدداً أقل من الإلكترونات بطاقة حركة أكبر."
  },
  {
    "id": "egbac_phys_ch5_db_hots_32",
    "titleEn": "Why Compton Collision Requires 2D Momentum Vector Analysis",
    "titleAr": "لماذا يتطلب تصادم كومبتون تحليلاً اتجاهياً ثنائي الأبعاد لكمية التحرك",
    "difficulty": "hots",
    "questionEn": "In general Compton scattering where the photon is deflected at angle $\\theta$ and the electron recoils at angle $\\phi$:",
    "questionAr": "في تشتت كومبتون العام حيث ينحرف الفوتون بزاوية $\\theta$ ويرتد الإلكترون بزاوية $\\phi$:",
    "optionsEn": [
      "Linear momentum is only conserved if $\\theta = 0^\\circ$",
      "The electron acquires zero momentum in the transverse direction",
      "Energy is lost to the creation of gravitational waves",
      "Linear momentum must be resolved and conserved independently along both the incident beam axis and the perpendicular axis"
    ],
    "optionsAr": [
      "كمية التحرك تكون محفوظة فقط إذا كانت زاوية الانحراف صفراً",
      "لا يكتسب الإلكترون أي كمية تحرك في الاتجاه العمودي",
      "تتحول الطاقة المفقودة إلى موجات جاذبية",
      "يجب تحليل وحفظ كمية التحرك الخطي بشكل مستقل على كلا المحورين: محور حزمة السقوط والمحور العمودي عليه"
    ],
    "correctAnswer": "Linear momentum must be resolved and conserved independently along both the incident beam axis and the perpendicular axis",
    "correctIndex": 3,
    "hintEn": "Momentum is a vector quantity: $\\Sigma p_x = \\text{const}$ and $\\Sigma p_y = \\text{const}$.",
    "hintAr": "كمية التحرك كمية متجهة تحفظ في كل اتجاه مستقل.",
    "stepByStepSolutionEn": [
      "Before collision, the incident photon moves along the x-axis ($p_x = h/\\lambda_1$, $p_y = 0$). After collision: $p_{x, \\text{total}} = \\frac{h}{\\lambda_2} \\cos\\theta + p_e \\cos\\phi$ and $p_{y, \\text{total}} = \\frac{h}{\\lambda_2} \\sin\\theta - p_e \\sin\\phi = 0$. The transverse components must cancel exactly."
    ],
    "stepByStepSolutionAr": [
      "قبل التصادم كمية التحرك في الاتجاه الرأسي صفر، وبعد التصادم يجب أن تتساوى المركبتان الرأسيتان للفوتون والإلكترون في المقدار وتتضادا في الاتجاه ($p_{ph} \\sin\\theta = p_e \\sin\\phi$) لتلغي كل منهما الأخرى."
    ],
    "teacherTipEn": "This vector cancellation proves that the photon acts as an authentic localized billiard ball particle in 2D space.",
    "teacherTipAr": "هذا التوازن الاتجاهي يؤكد أن الفوتون يتصرف ككرة بلياردو حقيقية محددة الموضع والاتجاه في الفضاء."
  },
  {
    "id": "egbac_phys_ch5_db_hots_33",
    "titleEn": "Percentage Decrease in Electron de Broglie Wavelength",
    "titleAr": "النسبة المئوية للنقص في طول موجة دي برولي عند زيادة فرق الجهد",
    "difficulty": "hots",
    "questionEn": "An electron has a de Broglie wavelength $\\lambda$. If the potential difference accelerating the electron is increased by $300\\%$ (i.e. becomes $4V$), the percentage decrease in its de Broglie wavelength is:",
    "questionAr": "إلكترون معجل طول موجته المصاحبة $\\lambda$. إذا زاد فرق الجهد المعجل للإلكترون بمقدار 300% (أي أصبح 4 أمثال قيمته الأصلية)، فإن النسبة المئوية للنقص في طول موجة دي برولي المصاحبة له تساوي:",
    "optionsEn": [
      "$50\\%$ decrease (new wavelength is $0.5\\lambda$)",
      "$75\\%$ decrease",
      "$25\\%$ decrease",
      "$300\\%$ decrease"
    ],
    "optionsAr": [
      "50% نقصاً (يصبح طول الموجة الجديد $0.5\\lambda$)",
      "75% نقصاً",
      "25% نقصاً",
      "300% نقصاً"
    ],
    "correctAnswer": "$50\\%$ decrease (new wavelength is $0.5\\lambda$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. If $V_2 = 4V_1$, $\\lambda_2 = \\frac{\\lambda_1}{\\sqrt{4}} = 0.5\\lambda_1$.",
    "hintAr": "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 أمثال تقلل الطول الموجي للنصف.",
    "stepByStepSolutionEn": [
      "The new potential is $V_2 = V_1 + 3V_1 = 4V_1$. The new wavelength is $\\lambda_2 = \\frac{\\lambda_1}{\\sqrt{4}} = 0.5\\lambda_1$. The decrease is $\\Delta\\lambda = \\lambda_1 - 0.5\\lambda_1 = 0.5\\lambda_1$, corresponding to a $50\\%$ reduction."
    ],
    "stepByStepSolutionAr": [
      "الجهد الجديد أصبح $4V_1$. إذن الطول الموجي الجديد $\\lambda_2 = \\frac{\\lambda_1}{\\sqrt{4}} = 0.5\\lambda_1$. مقدار النقص $\\lambda_1 - 0.5\\lambda_1 = 0.5\\lambda_1$، أي بنسبة 50%."
    ],
    "teacherTipEn": "Pay close attention to wording in ministerial exams: 'increased BY 300%' means $V_2 = 4V$, whereas 'increased TO 300%' means $V_2 = 3V$.",
    "teacherTipAr": "انتبه لصيغة السؤال في امتحانات الثانوية العامة: (زاد بمقدار 300%) تعني أن الجهد الجديد أربعة أمثال، بينما (زاد إلى 300%) تعني ثلاثة أمثال."
  },
  {
    "id": "egbac_phys_ch5_db_hots_34",
    "titleEn": "Electromagnetic Lenses vs Optical Glass Lenses",
    "titleAr": "العدسات الكهرومغناطيسية في المجهر الإلكتروني ومقارنتها بالعدسات الزجاجية",
    "difficulty": "hots",
    "questionEn": "In an electron microscope, magnetic fields produced by coils are used instead of glass lenses because:",
    "questionAr": "في المجهر الإلكتروني، تُستخدم مجالات مغناطيسية متولدة من ملفات بدلاً من العدسات الزجاجية لأن:",
    "optionsEn": [
      "Glass lenses would reflect 100% of electrons as light",
      "Electrons are charged particles that cannot pass through solid glass, but can be focused and deflected continuously by Lorentz magnetic forces $\\vec{F} = -e(\\vec{v} \\times \\vec{B})$",
      "Magnetic fields increase the mass of electrons to infinity",
      "Glass lenses melt under the low pressure of the vacuum chamber"
    ],
    "optionsAr": [
      "العدسات الزجاجية تعكس كل الإلكترونات في صورة ضوء",
      "الإلكترونات جسيمات مشحونة لا تستطيع اختراق الزجاج المصمت، ولكن يمكن التحكم في مسارها وتركيزها بقوة لورنتز المغناطيسية $\\vec{F} = -e(\\vec{v} \\times \\vec{B})$",
      "المجالات المغناطيسية تزيد كتلة الإلكترونات إلى ما لا نهاية",
      "العدسات الزجاجية تنصهر تحت ضغط التفريغ المنخفض"
    ],
    "correctAnswer": "Electrons are charged particles that cannot pass through solid glass, but can be focused and deflected continuously by Lorentz magnetic forces $\\vec{F} = -e(\\vec{v} \\times \\vec{B})$",
    "correctIndex": 1,
    "hintEn": "Glass absorbs and stops electrons; inhomogeneous magnetic fields refract electron beams in vacuum.",
    "hintAr": "الزجاج يمتص الإلكترونات ويوقفها، بينما المجال المغناطيسي يوجهها دون ملامسة مادية.",
    "stepByStepSolutionEn": [
      "An electron beam cannot penetrate glass lenses without scattering and absorbing. A magnetic lens creates an inhomogeneous magnetic field in vacuum that exerts a radial Lorentz force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ on passing electrons, bending their trajectories toward a focal point, exactly analogous to a convex glass lens focusing light rays."
    ],
    "stepByStepSolutionAr": [
      "لا تستطيع الإلكترونات النفاذ من الزجاج دون أن تصطدم بذراته وتمتص. العدسة المغناطيسية تولد مجالاً مغناطيسياً في الفراغ يؤثر بقوة مغناطيسية عمودية على حركة الإلكترونات فتحني مساراتها وتركزها في بؤرة محددة، مثل عمل العدسة المحدبة تماماً للضوء."
    ],
    "teacherTipEn": "Focal length of a magnetic lens can be dynamically tuned simply by adjusting the electric current flowing through its coil.",
    "teacherTipAr": "الميزة الهائلة للعدسات المغناطيسية أنه يمكن تغيير بعدها البؤري وقوة تكبيرها بسهولة بمجرد تغيير شدة التيار المار في ملفاتها."
  },
  {
    "id": "egbac_phys_ch5_db_hots_35",
    "titleEn": "I-V Curve Characteristics for Varied Intensity at Fixed Frequency",
    "titleAr": "منحنى التيار وفرق الجهد عند تغير الشدة وثبوت التردد",
    "difficulty": "hots",
    "questionEn": "When plotting the characteristic $I-V$ curve of a photocell for two incident monochromatic beams of the same frequency $\\nu > \\nu_c$ but different intensities ($I_2 > I_1$):",
    "questionAr": "عند رسم منحنى الخواص ($I-V$) لخلية كهروضوئية لحزمتين ضوئيتين لهما نفس التردد $\\nu > \\nu_c$ وشدتان مختلفتان ($I_2 > I_1$):",
    "optionsEn": [
      "Curve 2 has a more negative stopping potential than Curve 1",
      "Both curves have identical saturation currents but different stopping voltages",
      "Both curves intersect the negative voltage axis at the EXACT SAME stopping potential $-V_s$, but Curve 2 reaches a higher saturation current",
      "The two curves are completely identical in every respect"
    ],
    "optionsAr": [
      "المنحنى 2 يتقاطع عند جهد إيقاف سالب أكبر من المنحنى 1",
      "المنحنيان لهما نفس تيار التشبع ويختلفان في جهد الإيقاف",
      "يتقاطع المنحنيان مع المحور السالب لفرق الجهد عند نفس جهد الإيقاف $-V_s$ تماماً، ولكن المنحنى 2 يصل إلى تيار تشبع أعلى",
      "المنحنيان متطابقان تماماً في كل شيء"
    ],
    "correctAnswer": "Both curves intersect the negative voltage axis at the EXACT SAME stopping potential $-V_s$, but Curve 2 reaches a higher saturation current",
    "correctIndex": 2,
    "hintEn": "Equal frequency $\\implies$ equal photon energy $\\implies$ identical stopping potential $V_s$.",
    "hintAr": "نفس التردد يعني نفس جهد الإيقاف، والشدة الأعلى تعني تيار تشبع أكبر.",
    "stepByStepSolutionEn": [
      "Because the frequency is identical, the maximum kinetic energy $KE_{\\max} = h\\nu - W_e$ is identical, so both beams require the exact same stopping potential $V_s$. The higher intensity beam carries more photons per second, producing a proportionally larger saturation current."
    ],
    "stepByStepSolutionAr": [
      "بما أن التردد متطابق، فإن طاقة فوتونات الحزمتين متساوية، وتكون أقصى طاقة حركة للإلكترونات متساوية وجهد الإيقاف متطابقاً تماماً. والشدة الأعلى تعني عدداً أكبر من الفوتونات فيكون تيار التشبع أعلى."
    ],
    "teacherTipEn": "A prominent graph in Egyptian ministerial exams: common intercept at $-V_s$, different plateaus at saturation.",
    "teacherTipAr": "رسم بياني شهير جداً في امتحانات الثانوية العامة: نقطة تقاطع واحدة عند $-V_s$، وارتفاعات مختلفة في خطوط التشبع الأفقية."
  },
  {
    "id": "egbac_phys_ch5_db_hots_36",
    "titleEn": "I-V Curve Characteristics for Varied Frequency at Fixed Intensity",
    "titleAr": "منحنى التيار وفرق الجهد عند تغير التردد وثبوت القدرة",
    "difficulty": "hots",
    "questionEn": "When plotting the $I-V$ curve of a photocell for two monochromatic beams having frequencies $\\nu_2 > \\nu_1 > \\nu_c$ at the same total power:",
    "questionAr": "عند رسم منحنى ($I-V$) لخلية كهروضوئية لشعاعين لهما ترددان $\\nu_2 > \\nu_1 > \\nu_c$ عند نفس القدرة الكلية:",
    "optionsEn": [
      "Beam 2 has a less negative stopping potential",
      "Both beams share the exact same stopping potential",
      "Beam 2 produces zero current at all voltages",
      "Beam 2 has a more negative stopping potential ($|V_{s2}| > |V_{s1}|$) and a lower saturation current"
    ],
    "optionsAr": [
      "الشعاع 2 يمتلك جهد إيقاف أقل في الاتجاه السالب",
      "كلا الشعاعين لهما نفس جهد الإيقاف تماماً",
      "الشعاع 2 لا يولد أي تيار عند جميع فروق الجهد",
      "الشعاع 2 يمتلك جهد إيقاف أكبر في الاتجاه السالب ($|V_{s2}| > |V_{s1}|$) وتيار تشبع أقل قليلاً"
    ],
    "correctAnswer": "Beam 2 has a more negative stopping potential ($|V_{s2}| > |V_{s1}|$) and a lower saturation current",
    "correctIndex": 3,
    "hintEn": "Higher frequency gives higher $KE_{\\max} \\implies$ larger $|V_s|$; at fixed power, $\\Phi_L = P/h\\nu$ is smaller.",
    "hintAr": "التردد الأعلى يعطي طاقة حركة أكبر وجهد إيقاف أكبر، ولكن عدد فوتوناته أقل عند ثبوت القدرة.",
    "stepByStepSolutionEn": [
      "Higher frequency $\\nu_2$ gives larger photon energy, ejecting photoelectrons with greater $KE_{\\max} = h\\nu_2 - W_e$, requiring a more negative stopping potential $V_{s2}$. Because total power $P = \\Phi_L h\\nu$ is held constant, the higher-frequency beam delivers fewer photons per second, resulting in a slightly lower saturation photocurrent."
    ],
    "stepByStepSolutionAr": [
      "التردد الأعلى $\\nu_2$ يعطي طاقة حركة أكبر للإلكترونات فيلزم جهد إيقاف سالب أكبر لإيقافها. وبثبوت القدرة الكلية بالواط، يكون عدد فوتونات التردد الأعلى أقل ($\\Phi_L = P/h\\nu$) فيكون تيار التشبع للشعاع الثاني أقل."
    ],
    "teacherTipEn": "This dual comparison tests the complete mastery of the difference between photon energy ($h\\nu$) and beam intensity ($P$).",
    "teacherTipAr": "هذا السؤال يختبر الفهم العميق للفارق بين طاقة الفوتون الفردي والقدرة الكلية للحزمة."
  },
  {
    "id": "egbac_phys_ch5_db_hots_37",
    "titleEn": "Comet Tail Direction Explained by Radiation Pressure",
    "titleAr": "تفسير اتجاه ذيل المذنب بقوة الإشعاع الشمسي",
    "difficulty": "hots",
    "questionEn": "Why does a comet's tail always point directly AWAY from the Sun, both as it approaches and as it recedes from the Sun?",
    "questionAr": "لماذا يشير ذيل المذنب دائماً في الاتجاه المعاكس للشمس مبتعداً عنها، سواء أثناء اقتراب المذنب من الشمس أو ابتعاده عنها؟",
    "optionsEn": [
      "Because solar radiation pressure and solar wind exert an outward repulsive photon force on microscopic dust particles that exceeds solar gravitational attraction",
      "Because the comet has negative mass",
      "Because comets are pushed by magnetic fields of outer planets",
      "Because ice cannot exist in the vacuum of space"
    ],
    "optionsAr": [
      "لأن ضغط الإشعاع الشمسي والرياح الشمسية يؤثران بقوة فوتونية دافعة للخارج على دقائق الغبار تتغلب على الجاذبية",
      "لأن المذنب يمتلك كتلة سالبة تتنافر مع الشمس",
      "لأن المذنب يندفع بالمجالات المغناطيسية للكواكب الخارجية",
      "لأن الجليد لا يمكن أن يتواجد في فراغ الفضاء"
    ],
    "correctAnswer": "Because solar radiation pressure and solar wind exert an outward repulsive photon force on microscopic dust particles that exceeds solar gravitational attraction",
    "correctIndex": 0,
    "hintEn": "Radiation force on microscopic dust ($F_{\\text{rad}} \\propto r^2$) overtakes gravity ($F_g \\propto r^3$) as particle size drops.",
    "hintAr": "ضغط الإشعاع يدفع الجسيمات الدقيقة للخارج لأن قوة دفع الفوتونات تتناسب مع المساحة وتفوق الجاذبية للجسيمات متناهية الصغر.",
    "stepByStepSolutionEn": [
      "Photons carry real linear momentum and exert radiation force $F = \\frac{2P}{c}$. For microscopic dust particles and gas molecules sublimating from the comet, the ratio of surface area (radiation push) to volume/mass (gravitational pull) becomes enormous, propelling the tail directly away from the Sun regardless of orbital velocity direction."
    ],
    "stepByStepSolutionAr": [
      "فوتونات ضوء الشمس تحمل كمية تحرك وتؤثر بقوة دفع إشعاعي حقيقية $F = \\frac{2P}{c}$. ولدقائق الغبار المتناهية الصغر يكون دفع الإشعاع الشمسي أقوى بكثير من الجاذبية، فيدفعها للخارج بعيداً عن الشمس في جميع مراحل مدار المذنب."
    ],
    "teacherTipEn": "This astronomical phenomenon provided early macroscopic proof that light carries mechanical momentum.",
    "teacherTipAr": "كان اتجاه ذيل المذنب من أوائل الأدلة الفلكية على أن الضوء يحمل كمية تحرك ميكانيكية ويدفع الأجسام."
  },
  {
    "id": "egbac_phys_ch5_db_hots_38",
    "titleEn": "Stopping Potential Under Halved Wavelength",
    "titleAr": "جهد الإيقاف عند تقليل الطول الموجي إلى النصف",
    "difficulty": "hots",
    "questionEn": "When a metal cathode is illuminated by light of wavelength $\\lambda$, the stopping potential is $V_s$. If the wavelength is reduced to $\\lambda/2$, the new stopping potential $V_s'$ satisfies:",
    "questionAr": "عند سقوط ضوء طوله الموجي $\\lambda$ على مهبط فلزي كان جهد الإيقاف $V_s$. فإذا قل الطول الموجي للضوء الساقط إلى النصف $\\lambda/2$، فإن جهد الإيقاف الجديد $V_s'$:",
    "optionsEn": [
      "$V_s' = 2V_s$ (exactly doubles)",
      "$V_s' > 2V_s$ (more than double the initial stopping potential)",
      "$V_s' < V_s$ (decreases)",
      "$V_s' = \\frac{V_s}{2}$"
    ],
    "optionsAr": [
      "$V_s' = 2V_s$ (يتضاعف تماماً)",
      "$V_s' > 2V_s$ (يصبح أكبر من ضعف جهد الإيقاف الأصلي)",
      "$V_s' < V_s$ (يقل عن قيمته الأصلية)",
      "$V_s' = \\frac{V_s}{2}$"
    ],
    "correctAnswer": "$V_s' > 2V_s$ (more than double the initial stopping potential)",
    "correctIndex": 1,
    "hintEn": "$eV_s = E - W_e$. When wavelength is halved, photon energy doubles: $E' = 2E$. Then $eV_s' = 2E - W_e = 2(eV_s + W_e) - W_e = 2eV_s + W_e$.",
    "hintAr": "$eV_s' = 2eV_s + W_e$. وبما أن $W_e > 0$ فإن $V_s' > 2V_s$.",
    "stepByStepSolutionEn": [
      "Initial: $eV_s = \\frac{hc}{\\lambda} - W_e \\implies \\frac{hc}{\\lambda} = eV_s + W_e$. When wavelength is halved, new photon energy is $\\frac{hc}{\\lambda/2} = 2\\frac{hc}{\\lambda}$. New stopping potential: $eV_s' = 2\\left(\\frac{hc}{\\lambda}\\right) - W_e = 2(eV_s + W_e) - W_e = 2eV_s + W_e$. Since $W_e > 0$, $V_s' = 2V_s + \\frac{W_e}{e} > 2V_s$."
    ],
    "stepByStepSolutionAr": [
      "طاقة الفوتون تتضاعف: $E' = 2E$. إذن $eV_s' = 2E - W_e = 2(eV_s + W_e) - W_e = 2eV_s + W_e$. وبما أن دالة الشغل قيمة موجبة، فإن جهد الإيقاف الجديد يساوي ضعف القديم مضافاً إليه مقدار ثابت موجب، فيكون أكبر من الضعف حتماً."
    ],
    "teacherTipEn": "A classic high-difficulty conceptual multiple-choice question in ministerial physics exams.",
    "teacherTipAr": "من أدق المسائل المفاهيمية في امتحانات الوزارة: جهد الإيقاف الجديد يكون أكبر من ضعف القديم وليس مساوياً للضعف."
  },
  {
    "id": "egbac_phys_ch5_db_hots_39",
    "titleEn": "Why Wave Properties of a Thrown Baseball Are Undetectable",
    "titleAr": "سبب انعدام الخصائص الموجية لكرة بيسبول مقذوفة",
    "difficulty": "hots",
    "questionEn": "A baseball of mass $m = 0.15\\text{ kg}$ thrown at $v = 40\\text{ m/s}$ has a de Broglie wavelength $\\lambda \\approx 1.1 \\times 10^{-34}\\text{ m}$. Diffraction is completely unobservable because:",
    "questionAr": "كرة بيسبول كتلتها $m = 0.15\\text{ kg}$ مقذوفة بسرعة $v = 40\\text{ m/s}$ طول موجة دي برولي المصاحبة لها $\\sim 1.1 \\times 10^{-34}\\text{ m}$. يستحيل رصد حيود هذه الكرة لأن:",
    "optionsEn": [
      "Baseballs lose mass as they travel through air",
      "Planck's constant only applies to electromagnetic waves",
      "Its wavelength is vastly smaller than the dimensions of any possible physical opening or obstacle in the universe",
      "The ball's speed is zero relative to the pitcher"
    ],
    "optionsAr": [
      "كرة البيسبول تفقد جزءاً من كتلتها أثناء حركتها في الهواء",
      "ثابت بلانك يقتصر تطبيقه على الموجات الكهرومغناطيسية فقط",
      "طول موجتها أصغر بمليارات المرات من أبعاد أي فتحة أو عائق في الكون المادي",
      "سرعة الكرة صفرية بالنسبة للرامي"
    ],
    "correctAnswer": "Its wavelength is vastly smaller than the dimensions of any possible physical opening or obstacle in the universe",
    "correctIndex": 2,
    "hintEn": "Diffraction requires aperture dimension $d \\approx \\lambda$.",
    "hintAr": "شرط حدوث الحيود وجود فتحة أو عائق أبعاده مقاربة للطول الموجي.",
    "stepByStepSolutionEn": [
      "To observe wave diffraction, an aperture or obstacle must have dimensions comparable to the wavelength ($d \\sim \\lambda$). The wavelength of a baseball is $\\sim 10^{-34}\\text{ m}$, which is twenty orders of magnitude smaller than a single proton ($\\sim 10^{-15}\\text{ m}$). No physical aperture of that size exists, so the wave nature remains entirely imperceptible."
    ],
    "stepByStepSolutionAr": [
      "لحدوث الحيود يلزم وجود فتحة اتساعها يقارب الطول الموجي للموجة. طول موجة كرة البيسبول $\\sim 10^{-34}\\text{ م}$ وهو أصغر من قطر البروتون بعشرين رتبة عشرية، ولا توجد في الكون أي فتحة بهذه الضآلة، فتسلك الكرة سلوكاً جسيمياً كلاسيكياً بحتاً."
    ],
    "teacherTipEn": "Matter waves exist for ALL moving objects, but produce detectable physical effects only for microscopic particles with microscopic masses.",
    "teacherTipAr": "الموجات المادية تصاحب حركة جميع الأجسام، ولكن لا تظهر خصائصها الموجية عملياً إلا للجسيمات الذرية بالغة الصغر."
  },
  {
    "id": "egbac_phys_ch5_db_hots_40",
    "titleEn": "Metal Selectivity in Photoelectric Effect",
    "titleAr": "خاصية نوع مادة السطح في الظاهرة الكهروضوئية",
    "difficulty": "hots",
    "questionEn": "Which of the following physical quantities in the photoelectric effect depends EXCLUSIVELY on the nature of the metal surface and is independent of the incident radiation?",
    "questionAr": "أي الكميات الفيزيائية التالية في الظاهرة الكهروضوئية تعتمد حصرياً على نوع مادة سطح الفلز ولا تتغير بتغير الإشعاع الساقط؟",
    "optionsEn": [
      "The maximum kinetic energy of the emitted photoelectrons",
      "The stopping potential required to reduce photocurrent to zero",
      "The saturation photocurrent",
      "The work function $W_e$, threshold frequency $\\nu_c$, and cutoff wavelength $\\lambda_c$"
    ],
    "optionsAr": [
      "أقصى طاقة حركة للإلكترونات الضوئية المنبعثة",
      "جهد الإيقاف اللازم لجعل شدة التيار الكهروضوئي صفراً",
      "شدة تيار التشبع الكهروضوئي",
      "دالة الشغل $W_e$ والتردد الحرج $\\nu_c$ والطول الموجي الحرج $\\lambda_c$"
    ],
    "correctAnswer": "The work function $W_e$, threshold frequency $\\nu_c$, and cutoff wavelength $\\lambda_c$",
    "correctIndex": 3,
    "hintEn": "Intrinsic surface properties vs interaction variables.",
    "hintAr": "الخواص المميزة لمادة السطح مقابل متغيرات التجربة.",
    "stepByStepSolutionEn": [
      "The work function $W_e = h\\nu_c = \\frac{hc}{\\lambda_c}$ is an intrinsic material property determined solely by the electrostatic binding of conduction electrons within that specific metal lattice. Quantities like $KE_{\\max}$, $V_s$, and saturation current all depend on incident light frequency and intensity."
    ],
    "stepByStepSolutionAr": [
      "دالة الشغل والتردد الحرج والطول الموجي الحرج ثوابت فيزيائية مميزة لنوع مادة الفلز نفسه وتعتمد على قوة جذب الأنوية لإلكترونات السطح. أما طاقة الحركة وجهد الإيقاف وتيار التشبع فكلها تعتمد على خواص الضوء الساقط (تردده وشدته)."
    ],
    "teacherTipEn": "Remember: only changing the metal changes $W_e$, $\\nu_c$, and $\\lambda_c$.",
    "teacherTipAr": "تذكر دائماً: العامل الوحيد الذي يغير دالة الشغل والتردد الحرج هو تغيير نوع مادة السطح فقط."
  },
  {
    "id": "egbac_phys_ch5_db_hots_41",
    "titleEn": "Compton Collision with Heavy Atomic Nucleus vs Free Electron",
    "titleAr": "تصادم فوتون أشعة سينية بنواة ذرة ثقيلة مقارنة بإلكترون حر",
    "difficulty": "hots",
    "questionEn": "If a high-energy X-ray photon collides with a heavy atomic nucleus of mass $M \\approx 40000\\, m_e$ instead of a light electron, the Compton wavelength shift $\\Delta\\lambda$ will be:",
    "questionAr": "إذا تصادم فوتون أشعة سينية بنواة ذرة ثقيلة كتلتها $M \\approx 40000\\, m_e$ بدلاً من إلكترون خفيف، فإن إزاحة كومبتون $\\Delta\\lambda$ ستكون:",
    "optionsEn": [
      "Negligibly small ($\\Delta\\lambda \\approx 0$), resulting in coherent Rayleigh scattering where the photon bounces back with virtually unchanged frequency",
      "$40000\\text{ times larger}$ than with an electron",
      "Infinite, absorbing the photon completely",
      "Independent of the mass of the scattering target"
    ],
    "optionsAr": [
      "ضئيلة جداً وتكاد تنعدم ($\\Delta\\lambda \\approx 0$)، فيحدث تشتت مرن متماسك يعود فيه الفوتون بنفس تردده وطاقته تقريباً",
      "أكبر بـ 40000 مرة من حالة الإلكترون",
      "لانهائية، فتمتص النواة الفوتون كلياً",
      "مستقلة تماماً عن كتلة الجسم المتصادم معه"
    ],
    "correctAnswer": "Negligibly small ($\\Delta\\lambda \\approx 0$), resulting in coherent Rayleigh scattering where the photon bounces back with virtually unchanged frequency",
    "correctIndex": 0,
    "hintEn": "$\\Delta\\lambda = \\frac{h}{M c}(1 - \\cos\\theta) \\propto \\frac{1}{M}$.",
    "hintAr": "إزاحة الطول الموجي تتناسب عكسياً مع كتلة الجسيم المشتت: $\\Delta\\lambda \\propto \\frac{1}{M}$.",
    "stepByStepSolutionEn": [
      "The Compton shift formula is $\\Delta\\lambda = \\frac{h}{M c}(1 - \\cos\\theta)$. Because the nuclear mass $M$ is tens of thousands of times greater than the electron mass $m_e$, the wavelength shift is reduced by the same factor ($\\Delta\\lambda \\sim 10^{-16}\\text{ m} \\approx 0$). The photon scatters elastically with effectively zero energy loss (Rayleigh scattering)."
    ],
    "stepByStepSolutionAr": [
      "صيغة كومبتون هي $\\Delta\\lambda = \\frac{h}{M c}(1 - \\cos\\theta)$. وبما أن كتلة النواة أكبر بعشرات آلاف المرات من كتلة الإلكترون، فإن إزاحة الطول الموجي تصبح شبه معدومة ($\\Delta\\lambda \\approx 0$). يرتد الفوتون بنفس طاقته وتردده تقريباً دون أن ينقل للنواة طاقة حركة محسوسة."
    ],
    "teacherTipEn": "This proves why Compton scattering requires light, free electrons to yield a detectable wavelength shift.",
    "teacherTipAr": "هذا يثبت لماذا لا يُرصد تأثير كومبتون الملحوظ إلا عند تصادم الفوتون بجسيم بالغ الخفة كالإلكترون."
  },
  {
    "id": "egbac_phys_ch5_db_hots_42",
    "titleEn": "Multi-Photon Photoelectric Effect in Intense Femtosecond Lasers",
    "titleAr": "الامتصاص متعدد الفوتونات في مجالات الليزر فائقة الشدة",
    "difficulty": "hots",
    "questionEn": "Under ultra-intense, tightly focused femtosecond laser pulses, electron emission can occasionally be observed even when single-photon energy is below the work function ($h\\nu < W_e$). This modern non-linear phenomenon is explained by:",
    "questionAr": "تحت نبضات ليزر الفيمتوثانية فائقة الشدة والتركيز، يمكن أحياناً رصد انبعاث إلكترونات حتى لو كانت طاقة الفوتون الفردي أقل من دالة الشغل ($h\\nu < W_e$). تفسير هذه الظاهرة غير الخطية هو:",
    "optionsEn": [
      "The work function of the metal dropping to zero",
      "Simultaneous absorption of two or more photons by the same electron within a fleeting sub-femtosecond window ($nh\\nu \\ge W_e$)",
      "Electrons traveling backward in time",
      "The speed of light becoming infinite in the laser focal spot"
    ],
    "optionsAr": [
      "هبوط دالة شغل الفلز إلى الصفر",
      "امتصاص الإلكترون نفسه لفوتونين أو أكثر في نفس اللحظة تقريباً داخل نافذة زمنية بالغة الصغر ($nh\\nu \\ge W_e$)",
      "تحرك الإلكترونات إلى الوراء في الزمن",
      "وصول سرعة الضوء إلى اللانهاية في بؤرة الليزر"
    ],
    "correctAnswer": "Simultaneous absorption of two or more photons by the same electron within a fleeting sub-femtosecond window ($nh\\nu \\ge W_e$)",
    "correctIndex": 1,
    "hintEn": "Extreme photon density permits multi-photon quantum absorption events.",
    "hintAr": "الكثافة الفوتونية الفائقة لليزر تسمح بامتصاص أكثر من فوتون في نفس اللحظة.",
    "stepByStepSolutionEn": [
      "When laser intensity reaches extreme levels ($> 10^{14}\\text{ W/cm}^2$), the photon flux is so dense that an electron can absorb two or more photons simultaneously (multi-photon ionization). The combined energy $2h\\nu$ or $3h\\nu$ exceeds the work function $W_e$, allowing emission even though each individual photon has $h\\nu < W_e$."
    ],
    "stepByStepSolutionAr": [
      "عند الكثافات الفوتونية الهائلة لشعاع الليزر، يصبح احتمال تصادم فوتونين مع نفس الإلكترون في نفس اللحظة كبيراً، فتمتص طاقتهما معاً ($2h\\nu$) وتتغلب على دالة الشغل، وهو ما يعرف بالتأثير الكهروضوئي متعدد الفوتونات."
    ],
    "teacherTipEn": "This cutting-edge laser phenomenon reinforces quantum theory by demonstrating energy conservation in multi-quantum transitions.",
    "teacherTipAr": "هذا الامتصاص متعدد الفوتونات من أحدث تطبيقات الليزر ويؤكد صحة فيزياء الكم في التفاعلات غير الخطية."
  },
  {
    "id": "egbac_phys_ch5_db_hots_43",
    "titleEn": "Fundamental Contrast: Thermionic vs Photoelectric Emission",
    "titleAr": "المقارنة الجوهرية بين الانبعاث الكهروحراري والانبعاث الكهروضوئي",
    "difficulty": "hots",
    "questionEn": "Both thermionic emission (in CRT) and photoelectric emission (in photocells) liberate electrons from metals by overcoming the surface work function barrier. The fundamental difference between them is:",
    "questionAr": "كلا الانبعاثين: الكهروحراري (في أنبوبة الكاثود) والكهروضوئي (في الخلية الكهروضوئية) يحرران إلكترونات بالتغلب على حاجز دالة الشغل. الفارق الجوهري بينهما هو:",
    "optionsEn": [
      "Thermionic electrons are positively charged while photoelectrons are negatively charged",
      "Thermionic emission produces a continuous wave rather than particles",
      "Thermionic emission supplies energy through thermal conduction heating of the lattice, while photoelectric emission supplies energy through quantum absorption of individual photons",
      "Photoelectric emission requires high voltage while thermionic emission requires zero energy"
    ],
    "optionsAr": [
      "الإلكترونات الكهروحرارية موجبة الشحنة بينما الإلكترونات الضوئية سالبة الشحنة",
      "الانبعاث الكهروحراري يولد موجات متصلة بدلاً من الجسيمات",
      "الانبعاث الكهروحراري يوفر الطاقة بالتسخين الحراري للشبكة البلورية، بينما الانبعاث الكهروضوئي يوفر الطاقة بالامتصاص الكمي لفوتونات ضوئية فردية",
      "الانبعاث الكهروضوئي يتطلب جهداً عالياً بينما الكهروحراري لا يتطلب أي طاقة"
    ],
    "correctAnswer": "Thermionic emission supplies energy through thermal conduction heating of the lattice, while photoelectric emission supplies energy through quantum absorption of individual photons",
    "correctIndex": 2,
    "hintEn": "Mechanism of energy delivery: Thermal heating vs Photon quanta.",
    "hintAr": "آلية إمداد الطاقة للسطح: طاقة حرارية بالتسخين مقابل طاقة كمية بالفوتونات.",
    "stepByStepSolutionEn": [
      "In thermionic emission, heating a filament supplies thermal kinetic energy to conduction electrons until the fastest electrons overcome the surface barrier. In photoelectric emission, incoming photons deliver quantized packets of electromagnetic energy $h\\nu$ directly to electrons via single-collision events."
    ],
    "stepByStepSolutionAr": [
      "في الانبعاث الكهروحراري تُكتسب الطاقة حرارياً بتسخين الفتيلة فتزداد طاقة حركة الإلكترونات الحرة وتتغلب على حاجز جهد السطح. وفي الانبعاث الكهروضوئي يمتص الإلكترون فوتوناً ضوئياً فردياً طاقته $h\\nu \\ge W_e$."
    ],
    "teacherTipEn": "Both processes overcome the exact same surface potential barrier (work function $W_e$) of the metal.",
    "teacherTipAr": "في الحالتين يتحرر الإلكترون بالتغلب على نفس حاجز جهد السطح (دالة الشغل) لمعدن المهبط."
  },
  {
    "id": "egbac_phys_ch5_db_hots_44",
    "titleEn": "Differential Relationship Between Speed and de Broglie Wavelength",
    "titleAr": "العلاقة التفاضلية بين نسبة التغير في السرعة وطول موجة دي برولي",
    "difficulty": "hots",
    "questionEn": "For a non-relativistic electron moving at speed $v$, if its speed is increased by a small fraction ($+1\\%$), its de Broglie wavelength changes by approximately:",
    "questionAr": "لإلكترون يتحرك بسرعة غير نسبية $v$، إذا زادت سرعته بنسبة صغيرة قدرها ($+1\\%$)، فإن طول موجة دي برولي المصاحبة لحركته يتغير بنسبة:",
    "optionsEn": [
      "$+1\\%$ (increases by $1\\%$)",
      "$-2\\%$ (decreases by $2\\%$)",
      "Zero change",
      "$-1\\%$ (decreases by $1\\%$)"
    ],
    "optionsAr": [
      "$+1\\%$ (يزداد بنسبة $1\\%$)",
      "$-2\\%$ (يقل بنسبة $2\\%$)",
      "لا يتغير إطلاقاً",
      "$-1\\%$ (يقل بنسبة $1\\%$)"
    ],
    "correctAnswer": "$-1\\%$ (decreases by $1\\%$)",
    "correctIndex": 3,
    "hintEn": "$\\lambda = \\frac{h}{mv} \\implies \\ln\\lambda = \\ln(h/m) - \\ln v \\implies \\frac{d\\lambda}{\\lambda} = -\\frac{dv}{v}$.",
    "hintAr": "التناسب عكسي بسيط مع السرعة: $\\frac{\\Delta\\lambda}{\\lambda} \\approx -\\frac{\\Delta v}{v}$.",
    "stepByStepSolutionEn": [
      "Because $\\lambda = \\frac{h}{mv}$ is inversely proportional to velocity, taking logarithmic differentials gives $\\frac{d\\lambda}{\\lambda} = -\\frac{dv}{v}$. A small $+1\\%$ increase in velocity produces an equal and opposite $-1\\%$ change (a $1\\%$ decrease) in de Broglie wavelength."
    ],
    "stepByStepSolutionAr": [
      "بما أن طول موجة دي برولي يتناسب عكسياً مع سرعة الإلكترون ($\\lambda = \\frac{h}{mv}$)، فإن نسبة التغير الصغير في الطول الموجي تساوي سالب نسبة التغير في السرعة: $\\frac{\\Delta\\lambda}{\\lambda} \\approx -\\frac{\\Delta v}{v} = -1\\%$."
    ],
    "teacherTipEn": "Contrast with kinetic energy: a $+1\\%$ increase in velocity produces a $+2\\%$ increase in kinetic energy ($KE \\propto v^2$).",
    "teacherTipAr": "للمقارنة: زيادة السرعة بنسبة 1% تزيد طاقة الحركة بنسبة 2% لأن طاقة الحركة تتناسب مع مربع السرعة."
  },
  {
    "id": "egbac_phys_ch5_db_hots_45",
    "titleEn": "Wien Law Application: Earth Planetary Radiation Balance",
    "titleAr": "تطبيق قانون فين على الاتزان الحراري لإشعاع كوكب الأرض",
    "difficulty": "hots",
    "questionEn": "The Sun has surface temperature $T_S \\approx 6000\\text{ K}$ and radiates primarily in visible light ($\\lambda_{\\max} \\approx 500\\text{ nm}$). Earth has average surface temperature $T_E \\approx 300\\text{ K}$. Applying Wien's law, Earth re-radiates heat into space primarily at:",
    "questionAr": "سطح الشمس عند $T_S \\approx 6000\\text{ K}$ ويشع أساساً في نطاق الضوء المرئي ($\\lambda_{\\max} \\approx 500\\text{ nm}$). متوسط درجة حرارة سطح الأرض $T_E \\approx 300\\text{ K}$. بتطبيق قانون فين، فإن الأرض تعيد إشعاع طاقتها الحرارية نحو الفضاء عند طول موجي:",
    "optionsEn": [
      "$\\lambda_{\\max} \\approx 10\\,\\mu\\text{m} = 10000\\text{ nm}$ (thermal infrared, absorbed by greenhouse gases)",
      "$\\lambda_{\\max} \\approx 50\\text{ nm}$ (extreme ultraviolet)",
      "$\\lambda_{\\max} \\approx 500\\text{ nm}$ (visible light, Earth acts like a mini-sun)",
      "$\\lambda_{\\max} \\approx 0.1\\text{ nm}$ (X-rays)"
    ],
    "optionsAr": [
      "$\\lambda_{\\max} \\approx 10\\,\\mu\\text{m} = 10000\\text{ nm}$ (أشعة تحت حمراء حرارية، تمتصها غازات الاحتباس الحراري)",
      "$\\lambda_{\\max} \\approx 50\\text{ nm}$ (أشعة فوق بنفسجية)",
      "$\\lambda_{\\max} \\approx 500\\text{ nm}$ (ضوء مرئي، تشع الأرض كشمس صغيرة)",
      "$\\lambda_{\\max} \\approx 0.1\\text{ nm}$ (أشعة سينية)"
    ],
    "correctAnswer": "$\\lambda_{\\max} \\approx 10\\,\\mu\\text{m} = 10000\\text{ nm}$ (thermal infrared, absorbed by greenhouse gases)",
    "correctIndex": 0,
    "hintEn": "$\\frac{\\lambda_E}{\\lambda_S} = \\frac{T_S}{T_E} = \\frac{6000}{300} = 20$.",
    "hintAr": "قانون فين: النسبة بين درجات الحرارة $6000/300 = 20$، إذن طول موجة إشعاع الأرض 20 ضعف الشمس.",
    "stepByStepSolutionEn": [
      "From Wien's law: $\\lambda_E = \\lambda_S \\frac{T_S}{T_E} = 500\\text{ nm} \\times \\frac{6000\\text{ K}}{300\\text{ K}} = 500 \\times 20 = 10000\\text{ nm} = 10\\,\\mu\\text{m}$. This thermal infrared radiation is trapped by atmospheric greenhouse gases ($\\text{CO}_2$, $\\text{H}_2\\text{O}$), keeping Earth warm."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لقانون فين: $\\lambda_E = 500 \\times \\frac{6000}{300} = 10000\\text{ نانومتر} = 10\\text{ ميكرومتر}$. هذا الإشعاع يقع في نطاق الأشعة تحت الحمراء الحرارية وتمتصه الغازات الدفيئة مما يحفظ حرارة الغلاف الجوي."
    ],
    "teacherTipEn": "This demonstrates how fundamental modern physics connects to planetary climate science and astrophysics.",
    "teacherTipAr": "هذا التطبيق يربط فيزياء الإشعاع الحديثة بعلوم المناخ والفيزياء الفلكية."
  },
  {
    "id": "egbac_phys_ch5_db_hots_46",
    "titleEn": "Bohr's Principle of Quantum Complementarity in Double-Slit Experiment",
    "titleAr": "مبدأ التكامل الكمي لبور وتفسير اختفاء هدب التداخل عند رصد الإلكترون",
    "difficulty": "hots",
    "questionEn": "In an electron double-slit interference experiment, if a sensitive detector is placed at the slits to determine WHICH specific slit each electron passed through:",
    "questionAr": "في تجربة الشق المزدوج للإلكترونات، إذا وُضِع كاشف حساس عند الشقين لتحديد المسار الفعلي لأي شق مر منه كل إلكترون:",
    "optionsEn": [
      "The interference fringes become twice as sharp and bright",
      "The wave interference fringe pattern on the screen immediately collapses and disappears, replaced by two separate classical particle mounds",
      "The electrons reflect backward and stop moving",
      "The detector is destroyed by electron charge"
    ],
    "optionsAr": [
      "تزداد الهدب وضوحاً وسطوعاً إلى الضعف",
      "ينهار نمط تداخل الهدب الموجي فوراً ويختفي، وتظهر بدلاً منه بقعتان كلاسيكيتان لتوزيع الجسيمات",
      "ترتد الإلكترونات للخلف وتتوقف عن الحركة",
      "يتلف الكاشف بسبب شحنة الإلكترونات"
    ],
    "correctAnswer": "The wave interference fringe pattern on the screen immediately collapses and disappears, replaced by two separate classical particle mounds",
    "correctIndex": 1,
    "hintEn": "Measurement disturbs the quantum state and destroys phase coherence.",
    "hintAr": "محاولة رصد المسار الجسيمي تلغي الخصائص الموجية وتدمر نمط التداخل.",
    "stepByStepSolutionEn": [
      "According to Bohr's Principle of Complementarity, wave and particle behaviors are mutually exclusive in a single measurement. Detecting 'which-way' information forces the electron to act strictly as a localized particle, destroying the phase coherence between the two path wave functions and eliminating the interference pattern."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لمبدأ التكامل لبور، لا يمكن رصد السلوك الموجي والجسيمي معاً في نفس القياس. محاولة معرفة الشق الذي مر منه الإلكترون تكشف سلوكه الجسيمي فوراً وتدمر التداخل والطور الموجي، فتختفي الهدب وتظهر توزيعات كلاسيكية."
    ],
    "teacherTipEn": "You can observe wave interference OR particle trajectory, but quantum mechanics strictly forbids observing both simultaneously.",
    "teacherTipAr": "يمكن رصد التداخل الموجي أو المسار الجسيمي، ولكن يستحيل فيزيائياً رصدهما في نفس التجربة معاً."
  },
  {
    "id": "egbac_phys_ch5_db_hots_47",
    "titleEn": "de Broglie Wavelength Proof: Electron Cannot Reside Inside Nucleus",
    "titleAr": "إثبات دي برولي لعدم إمكانية وجود الإلكترون داخل النواة الذرية",
    "difficulty": "hots",
    "questionEn": "An atomic nucleus has a radius of $R \\sim 10^{-14}\\text{ m}$. Using Louis de Broglie's wave hypothesis, why CANNOT an electron be a permanent resident inside the nucleus?",
    "questionAr": "نصف قطر نواة الذرة في حدود $R \\sim 10^{-14}\\text{ m}$. باستخدام فرضية دي برولي، لماذا يستحيل أن يكون الإلكترون ساكناً أو مستقراً داخل النواة؟",
    "optionsEn": [
      "Because negative charges cannot touch positive charges under any circumstances",
      "Because the nucleus has zero volume",
      "Confinement to nuclear dimensions ($\\lambda \\le 10^{-14}\\text{ m}$) requires an enormous momentum and kinetic energy ($> 20\\text{ MeV}$), vastly exceeding nuclear binding potential wells",
      "Because electrons convert into neutrons whenever they enter a nucleus"
    ],
    "optionsAr": [
      "لأن الشحنات السالبة لا تلامس الشحنات الموجبة إطلاقاً",
      "لأن النواة ليس لها حجم حقيقي",
      "حصر الإلكترون في حيز النواة الضيق ($\\lambda \\le 10^{-14}\\text{ m}$) يتطلب كمية تحرك وطاقة حركة هائلة ($> 20\\text{ MeV}$) تفوق طاقة الربط النووي بمراحل",
      "لأن الإلكترون يتحول لنيوترون بمجرد دخوله النواة"
    ],
    "correctAnswer": "Confinement to nuclear dimensions ($\\lambda \\le 10^{-14}\\text{ m}$) requires an enormous momentum and kinetic energy ($> 20\\text{ MeV}$), vastly exceeding nuclear binding potential wells",
    "correctIndex": 2,
    "hintEn": "Small confinement $\\Delta x \\implies$ large momentum $p \\approx h/\\Delta x \\implies$ enormous kinetic energy.",
    "hintAr": "صغر حيز الحركة يفرض طول موجة دي برولي بالغ الصغر مما يعطي طاقة حركة هائلة تدفع الإلكترون للهروب فوراً.",
    "stepByStepSolutionEn": [
      "If an electron were trapped inside a nucleus of size $\\Delta x \\sim 10^{-14}\\text{ m}$, its de Broglie wavelength would be at most $\\lambda \\sim 10^{-14}\\text{ m}$. This corresponds to momentum $p = h/\\lambda \\approx 6.6 \\times 10^{-20}\\text{ kg}\\cdot\\text{m/s}$ and kinetic energy $E \\approx pc \\approx 20\\text{ MeV}$. No nuclear attractive force on an electron can contain such enormous kinetic energy."
    ],
    "stepByStepSolutionAr": [
      "إذا حُبس الإلكترون داخل النواة ($\\Delta x \\sim 10^{-14}\\text{ م}$)، يجب ألا يتعدى طول موجته أبعاد النواة، مما يفرض عليه امتلاك كمية تحرك بالغة الكبر وطاقة حركة تفوق 20 مليون إلكترون فولت، ولا توجد أي قوة نووية أو كهربية قادرة على تقييد هذه الطاقة الهائلة فيطرد للخارج فوراً."
    ],
    "teacherTipEn": "This elegant wave-mechanics proof answered one of the biggest mysteries of 1920s nuclear physics.",
    "teacherTipAr": "هذا البرهان الموجي البديع حل أحد أكبر ألغاز الفيزياء الذرية في مطلع القرن العشرين."
  },
  {
    "id": "egbac_phys_ch5_db_hots_48",
    "titleEn": "Mechanical Force of Focused Laser Pulse on Microscopic Target",
    "titleAr": "القوة الميكانيكية لنبضة ليزر مركزة على هدف ميكروسكوبي",
    "difficulty": "hots",
    "questionEn": "A focused laser pulse delivers energy $E = 3.0\\text{ J}$ in duration $\\Delta t = 10\\text{ ns}$ onto a small completely reflecting mirror. The average force exerted during the pulse is:",
    "questionAr": "نبضة ليزر مركزة طاقتها $E = 3.0\\text{ J}$ وزمنها $\\Delta t = 10\\text{ ns}$ سقطت على مرآة صغيرة تامة الانعكاس. القوة المتوسطة التي تؤثر بها النبضة أثناء زمن سقوطها تساوي:",
    "optionsEn": [
      "$F = 1.0\\text{ N}$",
      "$F = 200\\text{ N}$",
      "$F = 6.0 \\times 10^{-8}\\text{ N}$",
      "$F = 2.0\\text{ N}$"
    ],
    "optionsAr": [
      "$F = 1.0\\text{ N}$",
      "$F = 200\\text{ N}$",
      "$F = 6.0 \\times 10^{-8}\\text{ N}$",
      "$F = 2.0\\text{ N}$"
    ],
    "correctAnswer": "$F = 2.0\\text{ N}$",
    "correctIndex": 3,
    "hintEn": "Pulse power $P = \\frac{E}{\\Delta t} = \\frac{3.0}{10^{-8}} = 3.0 \\times 10^8\\text{ W}$, then $F = \\frac{2P}{c}$.",
    "hintAr": "احسب القدرة $P = \\frac{E}{\\Delta t}$ ثم القوة $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "Average pulse power is $P = \\frac{E}{\\Delta t} = \\frac{3.0\\text{ J}}{10 \\times 10^{-9}\\text{ s}} = 3.0 \\times 10^8\\text{ W} = 300\\text{ MW}$. The radiation force for complete reflection is $F = \\frac{2P}{c} = \\frac{2 \\times (3.0 \\times 10^8\\text{ W})}{3.0 \\times 10^8\\text{ m/s}} = 2.0\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "قدرة النبضة $P = \\frac{3.0}{10 \\times 10^{-9}} = 3 \\times 10^8\\text{ واط}$. القوة على سطح عاكس $F = \\frac{2P}{c} = \\frac{2 \\times 3 \\times 10^8}{3 \\times 10^8} = 2.0\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Although $2.0\\text{ N}$ sounds modest, on a microscopic biological cell or nanoparticle of mass $10^{-9}\\text{ kg}$, it produces an astronomical acceleration of $a = 2 \\times 10^9\\text{ m/s}^2$ (the operating basis of optical tweezers).",
    "teacherTipAr": "رغم أن 2 نيوتن تبدو قوة عادية، إلا أنها إذا أثرت على خلية ميكروسكوبية تكسبها عجلة تسارع هائلة تفوق ملايين أضعاف الجاذبية (أساس عمل الملاقط الضوئية)."
  },
  {
    "id": "egbac_phys_ch5_db_hots_49",
    "titleEn": "Work Function Determination from Intercept and Slope",
    "titleAr": "حساب دالة الشغل من النسبة بين المقطع والميل",
    "difficulty": "hots",
    "questionEn": "On a graph of stopping potential $V_s$ versus incident light frequency $\\nu$, the vertical intercept is $-V_0$ and the slope is $S$. The work function of the metal is simply given by:",
    "questionAr": "في الرسم البياني لجهد الإيقاف $V_s$ على المحور الرأسي وتردد الضوء $\\nu$ على المحور الأفقي، الجزء المقطوع من المحور الرأسي السالب هو $-V_0$ والميل هو $S$. دالة شغل الفلز بالجول تساوي:",
    "optionsEn": [
      "$W_e = e V_0$ (or $W_e = h\\nu_c$ where $\\nu_c = \\frac{V_0}{S}$)",
      "$W_e = \\frac{S}{V_0}$",
      "$W_e = \\frac{V_0}{eS}$",
      "$W_e = S \\cdot V_0^2$"
    ],
    "optionsAr": [
      "$W_e = e V_0$ (أو $W_e = h\\nu_c$ حيث $\\nu_c = \\frac{V_0}{S}$)",
      "$W_e = \\frac{S}{V_0}$",
      "$W_e = \\frac{V_0}{eS}$",
      "$W_e = S \\cdot V_0^2$"
    ],
    "correctAnswer": "$W_e = e V_0$ (or $W_e = h\\nu_c$ where $\\nu_c = \\frac{V_0}{S}$)",
    "correctIndex": 0,
    "hintEn": "Line equation: $V_s = \\left(\\frac{h}{e}\\right)\\nu - \\frac{W_e}{e}$. Vertical intercept magnitude is $\\frac{W_e}{e}$.",
    "hintAr": "$V_s = \\frac{h}{e}\\nu - \\frac{W_e}{e}$. الجزء المقطوع يمثل $\\frac{W_e}{e}$.",
    "stepByStepSolutionEn": [
      "From Einstein's photoelectric equation: $eV_s = h\\nu - W_e \\implies V_s = \\left(\\frac{h}{e}\\right)\\nu - \\frac{W_e}{e}$. The magnitude of the vertical intercept is $V_0 = \\frac{W_e}{e}$. Therefore, the work function in Joules is $W_e = e V_0$, and in electron-volts it is simply numerically equal to $V_0$."
    ],
    "stepByStepSolutionAr": [
      "بقسمة طرفي معادلة أينشتاين على شحنة الإلكترون: $V_s = \\left(\\frac{h}{e}\\right)\\nu - \\frac{W_e}{e}$. الجزء المقطوع من المحور الرأسي هو $V_0 = \\frac{W_e}{e}$، إذن دالة الشغل بالجول هي $W_e = e V_0$ وقيمتها بالإلكترون فولت تساوي عددياً قيمة $V_0$."
    ],
    "teacherTipEn": "A classic graphical identity: the vertical intercept of a $V_s-\\nu$ plot directly gives the work function in electron-volts.",
    "teacherTipAr": "قاعدة ذهبية: الجزء المقطوع من المحور الرأسي في رسم $V_s$ مع $\\nu$ يعطي مباشرة دالة الشغل بالإلكترون فولت."
  },
  {
    "id": "egbac_phys_ch5_db_hots_50",
    "titleEn": "Effect of Cathode Surface Area on Photoelectric Current",
    "titleAr": "تأثير مساحة سطح المهبط على التيار الكهروضوئي",
    "difficulty": "hots",
    "questionEn": "A photocell is illuminated by a uniform wide beam of light ($\\nu > \\nu_c$). If the surface area of the photocathode exposed to the beam is doubled while light intensity per unit area remains constant:",
    "questionAr": "خلية كهروضوئية يسقط عليها ضوء منتظم متسع بتردد $\\nu > \\nu_c$. إذا تضاعفت مساحة سطح المهبط المعرض للضوء إلى الضعف مع ثبوت شدة الضوء لكل وحدة مساحات:",
    "optionsEn": [
      "Both saturation current and stopping potential double",
      "The saturation current doubles, while the stopping potential remains unchanged",
      "The stopping potential doubles while saturation current remains constant",
      "The threshold frequency of the cathode is halved"
    ],
    "optionsAr": [
      "يتضاعف كل من تيار التشبع وجهد الإيقاف معاً",
      "يتضاعف تيار التشبع الكهروضوئي، بينما يظل جهد الإيقاف ثابتاً دون أي تغير",
      "يتضاعف جهد الإيقاف بينما يثبت تيار التشبع",
      "يقل التردد الحرج للمهبط إلى النصف"
    ],
    "correctAnswer": "The saturation current doubles, while the stopping potential remains unchanged",
    "correctIndex": 1,
    "hintEn": "Total incident photons per second $\\Phi_L = \\text{Intensity} \\times \\text{Area}$. Stopping potential depends only on frequency.",
    "hintAr": "عدد الفوتونات الكلي بالثانية = الشدة × المساحة. وجهد الإيقاف يعتمد على تردد الفوتون فقط.",
    "stepByStepSolutionEn": [
      "Doubling the exposed cathode area intercepts twice as many photons per second: $\\Phi_L = \\frac{I_{\\text{beam}} \\times A}{h\\nu}$. Twice as many photoelectrons are ejected per second, doubling the saturation current. Because the frequency $\\nu$ of each photon is unchanged, $KE_{\\max}$ and $V_s$ remain strictly invariant."
    ],
    "stepByStepSolutionAr": [
      "مضاعفة المساحة المعرضة للشعاع تضاعف عدد الفوتونات الساقطة في الثانية على المهبط، فيتضاعف عدد الإلكترونات المنبعثة بالثانية ويتضاعف تيار التشبع. وبقاء التردد ثابتاً يعني بقاء طاقة حركة الإلكترونات وجهد الإيقاف ثابتاً."
    ],
    "teacherTipEn": "Area affects quantity of emitted charges (amperes), never their individual kinetic energy (volts).",
    "teacherTipAr": "المساحة تؤثر في كمية الشحنات المنبعثة بالثانية (شدة التيار)، ولا تؤثر مطلقاً في طاقة حركة الإلكترون الفردي (جهد الإيقاف)."
  },
  {
    "id": "egbac_phys_ch5_db_hots_51",
    "titleEn": "Thermal de Broglie Wavelength Scaling with Absolute Temperature",
    "titleAr": "تناسب طول موجة دي برولي لجزيئات الغاز مع درجة الحرارة المطلقة",
    "difficulty": "hots",
    "questionEn": "For gas molecules of mass $m$ in thermal equilibrium at absolute temperature $T$, their average kinetic energy is $\\frac{3}{2} k_B T$. Their associated de Broglie wavelength is proportional to:",
    "questionAr": "لجزيئات غاز كتلة كل منها $m$ في اتزان حراري عند درجة حرارة مطلقة $T$، متوسط طاقة حركتها $\\frac{3}{2} k_B T$. فإن طول موجة دي برولي المصاحبة لحركتها يتناسب مع:",
    "optionsEn": [
      "$\\lambda \\propto \\sqrt{T}$",
      "$\\lambda \\propto \\frac{1}{T}$",
      "$\\lambda \\propto \\frac{1}{\\sqrt{T}}$",
      "$\\lambda \\propto T^2$"
    ],
    "optionsAr": [
      "$\\lambda \\propto \\sqrt{T}$",
      "$\\lambda \\propto \\frac{1}{T}$",
      "$\\lambda \\propto \\frac{1}{\\sqrt{T}}$",
      "$\\lambda \\propto T^2$"
    ],
    "correctAnswer": "$\\lambda \\propto \\frac{1}{\\sqrt{T}}$",
    "correctIndex": 2,
    "hintEn": "$p = \\sqrt{2m KE} = \\sqrt{3m k_B T} \\implies \\lambda = \\frac{h}{\\sqrt{3m k_B T}}$.",
    "hintAr": "$\\lambda = \\frac{h}{\\sqrt{3m k_B T}} \\implies \\lambda \\propto \\frac{1}{\\sqrt{T}}$.",
    "stepByStepSolutionEn": [
      "The thermal momentum is $p = \\sqrt{2m (\\frac{3}{2} k_B T)} = \\sqrt{3m k_B T}$. The thermal de Broglie wavelength is $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{3m k_B T}}$. Thus $\\lambda \\propto \\frac{1}{\\sqrt{T}}$."
    ],
    "stepByStepSolutionAr": [
      "متوسط كمية التحرك الحرارية $p = \\sqrt{3m k_B T}$. إذن طول موجة دي برولي $\\lambda = \\frac{h}{\\sqrt{3m k_B T}}$ يتناسب عكسياً مع الجذر التربيعي لدرجة الحرارة المطلقة."
    ],
    "teacherTipEn": "At ultra-low temperatures (near absolute zero), de Broglie wavelengths expand until they overlap, forming a Bose-Einstein condensate.",
    "teacherTipAr": "عند درجات الحرارة متناهية الصغر يزداد الطول الموجي للموجات المادية وتتداخل مكونة حالة تكاثف بوز-أينشتاين."
  },
  {
    "id": "egbac_phys_ch5_db_hots_52",
    "titleEn": "Conservation Laws in Single-Photon Photoelectric Absorption",
    "titleAr": "قوانين البقاء في الامتصاص الكهروضوئي للفوتون الفردي",
    "difficulty": "hots",
    "questionEn": "During a single photoelectric emission event where a photon of energy $h\\nu$ liberates an electron with maximum kinetic energy $KE_{\\max} = h\\nu - W_e$, which conservation laws are satisfied?",
    "questionAr": "أثناء حدث انبعاث كهروضوئي يحرر فيه فوتون طاقته $h\\nu$ إلكتروناً بأقصى طاقة حركة $KE_{\\max} = h\\nu - W_e$، أي قوانين البقاء التالية يتحقق؟",
    "optionsEn": [
      "Conservation of energy only; momentum is destroyed",
      "Conservation of momentum only; energy is destroyed",
      "Neither conservation law applies at atomic scales",
      "Both conservation of total energy and conservation of total linear momentum (with the metal lattice absorbing recoil momentum)"
    ],
    "optionsAr": [
      "بقاء الطاقة فقط بينما تفنى كمية التحرك",
      "بقاء كمية التحرك فقط بينما تفنى الطاقة",
      "لا ينطبق أي من قانوني البقاء على المستوى الذري",
      "كلا قانوني بقاء الطاقة الكلية وبقاء كمية التحرك الخطي (حيث تمتص الشبكة البلورية للفلز ارتداد كمية التحرك)"
    ],
    "correctAnswer": "Both conservation of total energy and conservation of total linear momentum (with the metal lattice absorbing recoil momentum)",
    "correctIndex": 3,
    "hintEn": "Conservation of energy and momentum are universal and inviolable in all quantum processes.",
    "hintAr": "قوانين بقاء الطاقة وكمية التحرك قوانين كونية صارمة تنطبق على جميع العمليات الكمية.",
    "stepByStepSolutionEn": [
      "Energy is conserved: the photon energy $h\\nu$ is divided between the work done against the surface potential ($W_e$) and electron kinetic energy ($KE_{\\max}$). Momentum is also conserved: the incoming photon momentum $h/\\lambda$ is partitioned between the escaping electron and the macroscopic metal lattice as a whole."
    ],
    "stepByStepSolutionAr": [
      "قانون بقاء الطاقة يتحقق لأن طاقة الفوتون الساقط تتوزع بين الشغل المبذول للتغلب على حاجز جهد السطح وطاقة حركة الإلكترون. وقانون بقاء كمية التحرك يتحقق بامتصاص الشبكة البلورية للفلز بالكامل لكمية التحرك المرتدة."
    ],
    "teacherTipEn": "Energy and momentum conservation are the foundational pillars of all modern physics.",
    "teacherTipAr": "قوانين البقاء هي الأساس المتين الذي بنيت عليه كل نظريات الفيزياء الحديثة."
  },
  {
    "id": "egbac_phys_ch5_db_hots_53",
    "titleEn": "Photon Spatial Coherence and Energy Density in Laser vs Thermal Light",
    "titleAr": "الكثافة الفوتونية والترابط في حزم الليزر مقارنة بالضوء الحراري",
    "difficulty": "hots",
    "questionEn": "A $5\\text{ mW}$ red laser pointer ($\\lambda = 632.8\\text{ nm}$) focused to a spot of diameter $1\\text{ mm}$ produces a beam intensity far exceeding direct sunlight at that wavelength because:",
    "questionAr": "مؤشر ليزر أحمر قدرته $5\\text{ mW}$ ($\\lambda = 632.8\\text{ nm}$) مركز في بقعة قطرها $1\\text{ mm}$، يعطي شدة إشعاعية تفوق ضوء الشمس عند هذا الطول الموجي لأن:",
    "optionsEn": [
      "All laser photons are in phase, traveling in identical spatial directions with virtually zero angular divergence, packing immense photon flux into a tiny area",
      "Laser photons travel at three times the speed of light",
      "Laser photons each carry 1000 times more energy than solar photons of the same color",
      "Laser photons carry positive electric charges that pull them together"
    ],
    "optionsAr": [
      "جميع فوتونات الليزر متفقة في الطور وتتحرك في اتجاه مكاني واحد بانفراجية زاوية شبه منعدمة، مما يركز تدفقاً فوتونياً هائلاً في مساحة متناهية الصغر",
      "فوتونات الليزر تتحرك بثلاثة أمثال سرعة الضوء",
      "فوتونات الليزر يحمل كل منها طاقة أكبر بألف مرة من فوتونات الشمس التي لها نفس اللون",
      "فوتونات الليزر تحمل شحنات كهربية موجبة تجذبها لبعضها"
    ],
    "correctAnswer": "All laser photons are in phase, traveling in identical spatial directions with virtually zero angular divergence, packing immense photon flux into a tiny area",
    "correctIndex": 0,
    "hintEn": "Spatial coherence and zero divergence concentrate all photons into a microscopic area.",
    "hintAr": "الترابط المكاني والزمني وانعدام الانفراجية يركز كل الطاقة في بقعة ضوئية بالغة الصغر.",
    "stepByStepSolutionEn": [
      "While solar radiation spreads over all directions and a huge spectrum of wavelengths, laser photons are emitted via stimulated emission into a single spatial mode with high temporal and spatial coherence. Thus, immense numbers of photons pass through a tiny area, creating extremely high radiant intensity ($I = P/A$)."
    ],
    "stepByStepSolutionAr": [
      "ضوء الشمس إشعاع حراري عشوائي غير مترابط يتشتت في جميع الاتجاهات عبر أطوال موجية متباينة. أما الليزر فهو إشعاع مترابط ناتج عن الانبعاث المستحث، فوتوناته متفقة في الطور والاتجاه والتردد، مما يركز كامل القدرة في حزمة دقيقة موازية ذات كثافة شدة فائقة."
    ],
    "teacherTipEn": "Never confuse photon energy ($E = h\\nu$, identical for laser and sun photons of same $\\lambda$) with beam intensity ($I = P/A$).",
    "teacherTipAr": "إياك أن تخلط بين طاقة الفوتون الفردي (وهي متطابقة للون نفسه $h\\nu$) وشدة الحزمة التي تعتمد على تركيز الفوتونات في وحدة المساحات."
  },
  {
    "id": "egbac_phys_ch5_db_hots_54",
    "titleEn": "Higher Frequency at Fixed Power: Decrease in Saturation Photocurrent",
    "titleAr": "أثر زيادة التردد عند ثبوت القدرة الساقطة على تيار التشبع",
    "difficulty": "hots",
    "questionEn": "A metal surface ($W_e = 2.0\\text{ eV}$) is illuminated by light beam 1 ($h\\nu_1 = 3.0\\text{ eV}$) and then by light beam 2 ($h\\nu_2 = 6.0\\text{ eV}$) at the EXACT same total radiant power $P = 10\\text{ W}$. How does the saturation current $I_{\\text{sat}}$ compare?",
    "questionAr": "سقط على فلز دالة شغله $W_e = 2.0\\text{ eV}$ شعاعان ضوئيان: الأول طاقة فوتوناته $h\\nu_1 = 3.0\\text{ eV}$ والثاني طاقة فوتوناته $h\\nu_2 = 6.0\\text{ eV}$ بنفس القدرة الكلية تماماً $P = 10\\text{ W}$. كيف يقارن تيار التشبع $I_{\\text{sat}}$ في الحالتين؟",
    "optionsEn": [
      "Saturation current for Beam 2 is twice that of Beam 1",
      "Saturation current for Beam 1 is TWICE that of Beam 2 ($I_{\\text{sat, 1}} = 2 I_{\\text{sat, 2}}$) because it supplies twice as many photons per second",
      "Both beams produce the exact same saturation current",
      "Beam 2 produces zero current because frequency is too high"
    ],
    "optionsAr": [
      "تيار التشبع للشعاع 2 ضعف تيار التشبع للشعاع 1",
      "تيار التشبع للشعاع 1 ضعف تيار التشبع للشعاع 2 ($I_{\\text{sat, 1}} = 2 I_{\\text{sat, 2}}$) لأنه يحتوي على ضعف عدد الفوتونات في الثانية",
      "كلا الشعاعين ينتج نفس تيار التشبع تماماً",
      "الشعاع 2 ينتج تياراً صفرياً لارتفاع تردده"
    ],
    "correctAnswer": "Saturation current for Beam 1 is TWICE that of Beam 2 ($I_{\\text{sat, 1}} = 2 I_{\\text{sat, 2}}$) because it supplies twice as many photons per second",
    "correctIndex": 1,
    "hintEn": "$\\Phi_L = \\frac{P}{h\\nu}$. Twice the photon energy means half the photon rate at equal power.",
    "hintAr": "$\\Phi_L = \\frac{P}{h\\nu}$. مضاعفة طاقة الفوتون عند ثبوت القدرة تعني انخفاض عدد الفوتونات للنصف.",
    "stepByStepSolutionEn": [
      "Number of photons per second is $\\Phi_L = \\frac{P}{h\\nu}$. For Beam 1: $\\Phi_{L1} = \\frac{10}{3.0\\text{ eV}}$. For Beam 2: $\\Phi_{L2} = \\frac{10}{6.0\\text{ eV}} = \\frac{1}{2}\\Phi_{L1}$. Since each photon releases one electron, the saturation current for Beam 1 is twice as large as that for Beam 2."
    ],
    "stepByStepSolutionAr": [
      "معدل انبعاث الفوتونات $\\Phi_L = \\frac{P}{h\\nu}$. طاقة فوتون الشعاع الثاني ضعف الأول ($6.0\\text{ eV}$ مقابل $3.0\\text{ eV}$)، فبثبوت القدرة الكلية بالواط يكون عدد فوتونات الشعاع الأول ضعف الثاني في الثانية، فيحرر ضعف عدد الإلكترونات ويكون تيار تشبعه الضعف."
    ],
    "teacherTipEn": "A classic high-difficulty question testing the relationship between power, photon count, and saturation current.",
    "teacherTipAr": "مسألة امتحانات وزارية من الطراز الرفيع: ثبوت القدرة مع زيادة التردد يقلل عدد الفوتونات بالثانية فيقل تيار التشبع."
  },
  {
    "id": "egbac_phys_ch5_db_hots_55",
    "titleEn": "Davisson-Germer Quantitative Proof of de Broglie Hypothesis",
    "titleAr": "التأكيد الكمي الحسابي لفرضية دي برولي في تجربة دافيسون وجيرمر",
    "difficulty": "hots",
    "questionEn": "In the historic Davisson-Germer experiment (1927), electrons accelerated through $V = 54\\text{ V}$ scattered off nickel crystal planes ($d = 0.091\\text{ nm}$) producing a diffraction peak at $\\theta = 65^\\circ$. The Bragg wavelength matched the de Broglie formula $\\lambda = \\frac{h}{\\sqrt{2m_e e V}} = 0.167\\text{ nm}$. This proved that:",
    "questionAr": "في تجربة دافيسون وجيرمر التاريخية (1927)، عُجلت إلكترونات بجهد $V = 54\\text{ V}$ ونفذت في بلورة نيكل ($d = 0.091\\text{ nm}$) فأعطت قمة حيود عند زاوية $\\theta = 65^\\circ$. وتطابق الطول الموجي المحسوب من قانون براغ مع طول موجة دي برولي $\\lambda = 0.167\\text{ nm}$. هذا أثبت تجريبياً أن:",
    "optionsEn": [
      "Electrons cannot have mass",
      "X-rays are composed of electrons",
      "de Broglie's matter wave equation $\\lambda = \\frac{h}{p}$ is a physical reality that accurately predicts the wave behavior of moving electrons",
      "Bohr's atomic model is completely invalid"
    ],
    "optionsAr": [
      "الإلكترونات لا تمتلك كتلة مادية",
      "الأشعة السينية تتكون من إلكترونات سريعة",
      "معادلة دي برولي للموجات المادية $\\lambda = \\frac{h}{p}$ حقيقة فيزيائية مؤكدة تتنبأ بدقة بالسلوك الموجي للإلكترونات المتحركة",
      "نموذج بور الذري غير صحيح في كل بنوده"
    ],
    "correctAnswer": "de Broglie's matter wave equation $\\lambda = \\frac{h}{p}$ is a physical reality that accurately predicts the wave behavior of moving electrons",
    "correctIndex": 2,
    "hintEn": "Diffraction peak angle directly confirmed the numerical value of $\\lambda = h/p$.",
    "hintAr": "تطابق زاوية قمة الحيود عددياً أكد صحة معادلة دي برولي تجريبياً.",
    "stepByStepSolutionEn": [
      "By measuring the angle of the diffraction maximum from known crystal lattice spacing using Bragg's law, Davisson and Germer calculated $\\lambda_{\\text{exp}} = 0.165\\text{ nm}$. The theoretical de Broglie wavelength for $54\\text{ V}$ was $\\lambda_{\\text{theor}} = \\frac{1.228}{\\sqrt{54}} \\approx 0.167\\text{ nm}$. The stunning agreement proved electron matter waves beyond doubt."
    ],
    "stepByStepSolutionAr": [
      "باستخدام قانون براغ للحيود وزوايا التشتت قيس الطول الموجي عملياً فكان $0.165\\text{ nm}$، وتطابق بشكل مذهل مع حسابات دي برولي النظرية $\\frac{1.228}{\\sqrt{54}} \\approx 0.167\\text{ nm}$، مما أثبت الخصائص الموجية للإلكترونات ونال عليه دي برولي جائزة نوبل."
    ],
    "teacherTipEn": "This quantitative confirmation earned Louis de Broglie the 1929 Nobel Prize and Davisson the 1937 Nobel Prize in Physics.",
    "teacherTipAr": "هذا التأكيد التجريبي القاطع توج بمنح دي برولي جائزة نوبل عام 1929 ودافيسون عام 1937."
  },
  {
    "id": "egbac_phys_ch5_db_hots_56",
    "titleEn": "Photon Invariant Rest Mass vs Dynamic Relativistic Mass",
    "titleAr": "الكتلة السكونية للفوتون مقابل كتلته المكافئة أثناء الحركة",
    "difficulty": "hots",
    "questionEn": "In modern physics, the mass of a photon is properly stated as:",
    "questionAr": "في الفيزياء الحديثة، يُعبر عن كتلة الفوتون بدقة علمية بأنها:",
    "optionsEn": [
      "Always equal to the electron rest mass $9.1 \\times 10^{-31}\\text{ kg}$",
      "Infinite at all times",
      "Variable depending on the temperature of the observer",
      "Zero invariant rest mass ($m_0 = 0$), but possessing an equivalent dynamic inertial mass during motion at speed $c$ given by $m = \\frac{h\\nu}{c^2}$"
    ],
    "optionsAr": [
      "تساوي دائماً كتلة سكون الإلكترون $9.1 \\times 10^{-31}\\text{ kg}$",
      "لانهائية في جميع الأوقات",
      "متغيرة تعتمد على درجة حرارة الراصد",
      "كتلته السكونية منعدمة تماماً ($m_0 = 0$)، ولكن يمتلك كتلة قصورية مكافئة أثناء حركته بسرعة الضوء $c$ تساوي $m = \\frac{h\\nu}{c^2}$"
    ],
    "correctAnswer": "Zero invariant rest mass ($m_0 = 0$), but possessing an equivalent dynamic inertial mass during motion at speed $c$ given by $m = \\frac{h\\nu}{c^2}$",
    "correctIndex": 3,
    "hintEn": "$E = mc^2 = h\\nu \\implies m = \\frac{h\\nu}{c^2}$, but rest mass $m_0 = 0$.",
    "hintAr": "الكتلة السكونية صفر، وأثناء الحركة يمتلك كتلة مكافئة $m = \\frac{h\\nu}{c^2}$.",
    "stepByStepSolutionEn": [
      "A photon never exists at rest; it is always created and propagates at speed $c$. Its invariant rest mass is strictly zero ($m_0 = 0$). However, because it carries energy $E = h\\nu$, Einstein's relation $E = mc^2$ assigns it an effective inertial mass during motion: $m = \\frac{h\\nu}{c^2} = \\frac{h}{c\\lambda}$."
    ],
    "stepByStepSolutionAr": [
      "الفوتون لا يمكن أن يتواجد في حالة سكون، فسرعته دائماً $c$ وكتلته السكونية صفر تماماً ($m_0 = 0$). ولكن لحمله طاقة $E = h\\nu$ فإن له كتلة مكافئة أثناء حركته تحسب من معادلة أينشتاين: $m = \\frac{h\\nu}{c^2} = \\frac{h}{c\\lambda}$."
    ],
    "teacherTipEn": "If a photon is stopped or absorbed by matter, its dynamic mass vanishes, and its entire energy transforms into other forms (e.g. electron kinetic energy or heat).",
    "teacherTipAr": "عند امتصاص الفوتون تتلاشى كتلته المكافئة تماماً وتتحول طاقته بالكامل إلى طاقة حركة للإلكترونات أو طاقة حرارية."
  },
  {
    "id": "egbac_phys_ch5_db_hots_57",
    "titleEn": "Why TEM Specimens Must Be Ultra-Thin (Nanometer Scale)",
    "titleAr": "سبب اشتراط أن تكون عينات المجهر الإلكتروني النافذ رقيقة جداً",
    "difficulty": "hots",
    "questionEn": "Why must biological and material specimens examined under a Transmission Electron Microscope (TEM) be sliced into ultra-thin sections ($\\sim 20-100\\text{ nm}$)?",
    "questionAr": "لماذا يجب تقطيع العينات البيولوجية والمادية المفحوصة بالمجهر الإلكتروني النافذ إلى شرائح رقيقة جداً ($\\sim 20-100\\text{ nm}$)؟",
    "optionsEn": [
      "Because electrons have very low penetrating power in dense matter and would be absorbed or heavily scattered by thick specimens, blocking image formation",
      "Because thin specimens make electrons travel faster than light",
      "Because biological cells expand to fill the entire vacuum chamber",
      "Because magnetic lenses only work on transparent specimens"
    ],
    "optionsAr": [
      "لأن قدرة الإلكترونات على النفاذ في المادة الكثيفة منخفضة جداً، فالعينات السميكة تمتص أو تشتت كل الإلكترونات وتمنع نفاذها لتكوين الصورة",
      "لأن العينات الرقيقة تجعل الإلكترونات تتحرك بسرعة تفوق سرعة الضوء",
      "لأن الخلايا البيولوجية تتمدد وتملأ حجرة التفريغ بالكامل",
      "لأن العدسات المغناطيسية لا تعمل إلا مع العينات الشفافة للضوء"
    ],
    "correctAnswer": "Because electrons have very low penetrating power in dense matter and would be absorbed or heavily scattered by thick specimens, blocking image formation",
    "correctIndex": 0,
    "hintEn": "Electrons interact strongly with atomic nuclei and electrons, having short penetration depth.",
    "hintAr": "تتفاعل الإلكترونات بقوة مع ذرات المادة ولذلك تكون قدرتها على النفاذ محدودة جداً وتتطلب عينات فائقة الرقة.",
    "stepByStepSolutionEn": [
      "Because electrons carry electric charge and interact via Coulomb forces with atomic nuclei and orbital electrons, their penetration depth in solid matter is tiny. In a thick specimen, multiple scattering events would stop or randomize the beam, preventing transmission to the detector. Slicing specimens to $< 100\\text{ nm}$ allows electrons to pass through with contrast generated by local density variations."
    ],
    "stepByStepSolutionAr": [
      "تحمل الإلكترونات شحنة كهربية وتتفاعل بقوة مع أنوية وإلكترونات مادة العينة عبر قوى كولوم، فتكون قدرتها على النفاذ محدودة جداً. وإذا كانت العينة سميكة تمتص حزمة الإلكترونات أو تتشتت عشوائياً. تقطيع العينات لسمك أقل من $100\\text{ nm}$ يسمح بنفاذ الإلكترونات وتكوين صورة متباينة."
    ],
    "teacherTipEn": "This fundamental requirement distinguishes Transmission Electron Microscopy (TEM) from Scanning Electron Microscopy (SEM), which looks at surface reflected/secondary electrons.",
    "teacherTipAr": "هذا يوضح الفارق بين المجهر النافذ (TEM) الذي يتطلب عينات رقيقة جداً، والمجهر الماسح (SEM) الذي يفحص تضاريس الأسطح الخارجية."
  },
  {
    "id": "egbac_phys_ch5_db_hots_58",
    "titleEn": "The Philosophical Paradigm Shift of Quantum Mechanics",
    "titleAr": "التحول الفكري الثوري لميكانيكا الكم في تفسير الظواهر الطبيعية",
    "difficulty": "hots",
    "questionEn": "The transition from classical physics to quantum theory (pioneered by Planck, Einstein, and de Broglie in Chapter 5) fundamentally shifted our understanding of nature by proving that:",
    "questionAr": "التحول الجذري من الفيزياء الكلاسيكية إلى نظرية الكم (بقيادة بلانك وأينشتاين ودي برولي في الفصل الخامس) أحدث ثورة علمية كبرى بإثبات أن:",
    "optionsEn": [
      "Classical physics was 100% correct in all domains and quantum theory was an approximation",
      "Energy, radiation, and matter exhibit universal wave-particle duality, where energy is exchanged in discrete quanta $h\\nu$ and measurement outcomes at atomic scales are intrinsically probabilistic",
      "Light has no physical existence and is an optical illusion",
      "Electrons can never be observed under any circumstance"
    ],
    "optionsAr": [
      "الفيزياء الكلاسيكية كانت صحيحة تماماً في كل المجالات ونظرية الكم مجرد تقريب",
      "الطاقة والإشعاع والمادة تخضع لقانون ازدواجية الموجة والجسيم الكوني، حيث تتبادل الطاقة في كمات منفصلة $h\\nu$ وتخضع القياسات الذرية لقوانين احتمالية حتمية",
      "الضوء ليس له وجود فيزيائي حقيقي وهو مجرد وهم بصري",
      "الإلكترونات لا يمكن رصدها تحت أي ظرف من الظروف"
    ],
    "correctAnswer": "Energy, radiation, and matter exhibit universal wave-particle duality, where energy is exchanged in discrete quanta $h\\nu$ and measurement outcomes at atomic scales are intrinsically probabilistic",
    "correctIndex": 1,
    "hintEn": "Wave-particle duality, energy quantization, and quantum probability replaced classical determinism.",
    "hintAr": "ازدواجية الموجة والجسيم وتكميم الطاقة حلت محل الحتمية الكلاسيكية في فهم الكون المجهري.",
    "stepByStepSolutionEn": [
      "Classical physics assumed continuous energy, infinite precision, and separate wave vs particle categories. Chapter 5 establishes that light has particle properties (photoelectric, Compton, radiation pressure) and matter particles have wave properties (de Broglie, electron microscope, electron diffraction), unifying both radiation and matter under the universal banner of wave-particle duality."
    ],
    "stepByStepSolutionAr": [
      "الفيزياء الكلاسيكية اعتبرت الطاقة متصلة وفرقت فصلاً تاماً بين عالم الموجات وعالم الجسيمات. أثبت الفصل الخامس أن الضوء يسلك سلوك الجسيمات (الظاهرة الكهروضوئية، تأثير كومبتون، ضغط الإشعاع) وأن المادة تسلك سلوك الموجات (أمواج دي برولي، المجهر الإلكتروني، حيود الإلكترونات)، موحداً الكون تحت مظلة ازدواجية الموجة والجسيم."
    ],
    "teacherTipEn": "This monumental unification is the crowning achievement of the Egyptian General Secondary Modern Physics curriculum.",
    "teacherTipAr": "هذا التوحيد الثوري هو التتويج الأعظم لمنهج الفيزياء الحديثة بالثانوية العامة المصرية."
  }
]
};
