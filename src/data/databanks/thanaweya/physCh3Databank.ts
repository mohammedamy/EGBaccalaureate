import type { ChapterDatabank } from '../../../types/curriculum';

export const physCh3Databank: ChapterDatabank = {
  easy: [
  {
    "id": "phys_ch3_db_easy_01",
    "titleEn": "Faraday's Law of Electromagnetic Induction",
    "titleAr": "قانون فاراداي في الحث الكهرومغناطيسي",
    "difficulty": "easy",
    "questionEn": "According to Faraday's law, the induced electromotive force ($\\text{emf}$) in a coil of $N$ turns is directly proportional to:",
    "questionAr": "وفقاً لقانون فاراداي، تتناسب القوة الدافعة الكهربية المستحثة ($\\text{emf}$) المتولدة في ملف عدد لفاته $N$ طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux through the coil ($\\frac{\\Delta\\Phi_m}{\\Delta t}$)",
      "The total magnetic flux squared ($\\Phi_m^2$)",
      "The resistance of the coil wire inversely",
      "The electrostatic potential of the surrounding medium"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\frac{\\Delta\\Phi_m}{\\Delta t}$)",
      "مربع الفيض المغناطيسي الكلي ($\\Phi_m^2$)",
      "مقاومة سلك الملف عكسياً فقط دون اعتبار للفيض",
      "الجهد الكهروستاتيكي للوسط المحيط"
    ],
    "correctAnswer": "The time rate of change of magnetic flux through the coil ($\\frac{\\Delta\\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "Faraday's formula is $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$.",
    "hintAr": "صيغة قانون فاراداي هي $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "Faraday's law states that the magnitude of the induced emf is directly proportional to the number of turns $N$ and the time rate of change of magnetic flux $\\frac{\\Delta\\Phi_m}{\\Delta t}$. Thus $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "ينص قانون فاراداي على أن مقدار القوة الدافعة الكهربية المستحثة يتناسب طردياً مع كل من عدد لفات الملف والمعدل الزمني للتغير في الفيض المغناطيسي القاطع له: $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "The negative sign represents Lenz's law, while the proportionality is with the time rate of flux change.",
    "teacherTipAr": "الإشارة السالبة تعبر عن قاعدة لنز، والتناسب طردي مع المعدل الزمني لتغير الفيض."
  },
  {
    "id": "phys_ch3_db_easy_02",
    "titleEn": "Physical Meaning of the Negative Sign in Faraday's Law",
    "titleAr": "المعنى الفيزيائي للإشارة السالبة في قانون فاراداي",
    "difficulty": "easy",
    "questionEn": "The negative sign in Faraday's equation $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$ is an expression of:",
    "questionAr": "الإشارة السالبة في قانون فاراداي $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$ تعبر عن:",
    "optionsEn": [
      "Ampere's circuital law",
      "Lenz's law (opposing the cause producing it)",
      "Coulomb's law of electrostatic force",
      "Ohm's law for closed circuits"
    ],
    "optionsAr": [
      "قانون أمبير الدائري",
      "قاعدة لنز (معاكسة التغير المسبب لها)",
      "قانون كولوم للقوى الكهربية",
      "قانون أوم للدائرة المغلقة"
    ],
    "correctAnswer": "Lenz's law (opposing the cause producing it)",
    "correctIndex": 1,
    "hintEn": "Which law relates the direction of induced current to its cause?",
    "hintAr": "أي القواعد تربط بين اتجاه التيار المستحث والتغير المسبب له؟",
    "stepByStepSolutionEn": [
      "The negative sign indicates that the direction of the induced electromotive force (and induced current) always opposes the change in magnetic flux that produces it, which is the exact statement of Lenz's law."
    ],
    "stepByStepSolutionAr": [
      "تشير الإشارة السالبة إلى أن اتجاه القوة الدافعة المستحثة والتيار المستحث يعاكس دائماً التغير في الفيض المغناطيسي المسبب له، وهو نص قاعدة لنز."
    ],
    "teacherTipEn": "Always remember: Faraday gives the magnitude; Lenz gives the direction and sign.",
    "teacherTipAr": "تذكر دائماً: فاراداي يحدد المقدار، ولنز تحدد الاتجاه والإشارة السالبة."
  },
  {
    "id": "phys_ch3_db_easy_03",
    "titleEn": "SI Unit Equivalence of the Rate of Change of Magnetic Flux",
    "titleAr": "الوحدة المكافئة لمعدل التغير في الفيض المغناطيسي",
    "difficulty": "easy",
    "questionEn": "The unit of the time rate of change of magnetic flux ($\\frac{\\Delta\\Phi_m}{\\Delta t}$) is Weber per second ($\\text{Wb/s}$), which is equivalent to:",
    "questionAr": "وحدة المعدل الزمني للتغير في الفيض المغناطيسي ($\\frac{\\Delta\\Phi_m}{\\Delta t}$) هي ويبر/ثانية ($\\text{Wb/s}$)، وهي تكافئ:",
    "optionsEn": [
      "Ampere ($\\text{A}$)",
      "Ohm ($\\Omega$)",
      "Volt ($\\text{V}$)",
      "Tesla ($\\text{T}$)"
    ],
    "optionsAr": [
      "أمبير ($\\text{A}$)",
      "أوم ($\\Omega$)",
      "فولت ($\\text{V}$)",
      "تسلا ($\\text{T}$)"
    ],
    "correctAnswer": "Volt ($\\text{V}$)",
    "correctIndex": 2,
    "hintEn": "From $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$, since $N$ is dimensionless, what unit matches $\\text{emf}$?",
    "hintAr": "من قانون فاراداي $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$، وبما أن $N$ ليس له وحدة، ما وحدة $\\text{emf}$؟",
    "stepByStepSolutionEn": [
      "Since $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$ and electromotive force is measured in volts ($\\text{V}$), $1\\text{ V} = 1\\text{ Wb/s}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t}$ والقوة الدافعة الكهربية تقاس بالفولت، فإن $1\\text{ V} = 1\\text{ Wb/s}$."
    ],
    "teacherTipEn": "A classic recurring question: $\\text{Wb/s} = \\text{V} = \\text{J/C} = \\Omega \\cdot \\text{A}$.",
    "teacherTipAr": "سؤال متكرر: ويبر/ثانية = فولت = جول/كولوم = أوم × أمبير."
  },
  {
    "id": "phys_ch3_db_easy_04",
    "titleEn": "Lenz's Law and Conservation of Energy",
    "titleAr": "قاعدة لنز وقانون بقاء الطاقة",
    "difficulty": "easy",
    "questionEn": "Lenz's law of electromagnetic induction is considered a direct application of:",
    "questionAr": "تعتبر قاعدة لنز في الحث الكهرومغناطيسي تطبيقاً مباشراً لـ:",
    "optionsEn": [
      "The Law of Conservation of Electric Charge",
      "Newton's First Law of Motion",
      "The Law of Conservation of Linear Momentum",
      "The Law of Conservation of Energy"
    ],
    "optionsAr": [
      "قانون بقاء الشحنة الكهربية",
      "قانون نيوتن الأول للحركة",
      "قانون بقاء كمية التحرك الخطي",
      "قانون بقاء الطاقة"
    ],
    "correctAnswer": "The Law of Conservation of Energy",
    "correctIndex": 3,
    "hintEn": "Mechanical work done against the magnetic opposition is converted into electrical energy.",
    "hintAr": "الشغل الميكانيكي المبذول ضد قوى التنافر أو التجاذب يتحول إلى طاقة كهربية.",
    "stepByStepSolutionEn": [
      "When a magnet moves toward or away from a coil, work must be done against the opposing induced magnetic force. This mechanical work is converted into electrical energy in the coil, satisfying the Law of Conservation of Energy."
    ],
    "stepByStepSolutionAr": [
      "عند تحريك المغناطيس مقترباً أو مبتعداً، يُبذل شغل ميكانيكي ضد القوة المغناطيسية المعاكسة (تنافر أو تجاذب). يتحول هذا الشغل إلى طاقة كهربية، مما يمثل تطبيقاً لقانون بقاء الطاقة."
    ],
    "teacherTipEn": "If induced current reinforced the motion, energy would be created from nothing, violating conservation of energy.",
    "teacherTipAr": "لو كان التيار المستحث يساعد الحركة لتولدت طاقة من العدم، وهو ما يناقض قانون بقاء الطاقة."
  },
  {
    "id": "phys_ch3_db_easy_05",
    "titleEn": "Approaching North Pole to a Solenoid",
    "titleAr": "تقريب القطب الشمالي لمغناطيس من ملف لولبي",
    "difficulty": "easy",
    "questionEn": "When the North pole of a bar magnet approaches one face of a solenoid, the magnetic pole formed on that face is:",
    "questionAr": "عند تقريب القطب الشمالي لمغناطيس من أحد وجهي ملف حلزوني، فإن القطب المغناطيسي المتكون على ذلك الوجه يكون:",
    "optionsEn": [
      "A North pole, causing magnetic repulsion to oppose the approach",
      "A South pole, causing magnetic attraction to speed up the approach",
      "Unmagnetized, because induction requires a closed iron core",
      "Alternating continuously between North and South every millisecond"
    ],
    "optionsAr": [
      "قطباً شمالياً، فيحدث تنافر لمقاومة الاقتراب",
      "قطباً جنوبياً، فيحدث تجاذب لزيادة سرعة الاقتراب",
      "غير متمغنط، لأن الحث يتطلب قلباً حديدياً مغلقاً",
      "متردداً بين الشمال والجنوب باستمرار كل مللي ثانية"
    ],
    "correctAnswer": "A North pole, causing magnetic repulsion to oppose the approach",
    "correctIndex": 0,
    "hintEn": "Lenz's law states that the induced pole must oppose the motion (approaching implies repulsion).",
    "hintAr": "تنص قاعدة لنز على أن القطب المستحث يجب أن يعاكس الحركة (الاقتراب يقاوم بالتنافر).",
    "stepByStepSolutionEn": [
      "By Lenz's law, the induced current must produce a magnetic field that opposes the approach of the magnet. Thus, a North pole is formed on the near face to repel the approaching North pole."
    ],
    "stepByStepSolutionAr": [
      "حسب قاعدة لنز، يولد التيار المستحث فيضاً يعاكس اقتراب المغناطيس، فيتكون قطب شمالي على الوجه القريب ليتنافر مع القطب الشمالي المقترب."
    ],
    "teacherTipEn": "Rule of thumb: Approaching creates a similar pole (repulsion); receding creates an opposite pole (attraction).",
    "teacherTipAr": "قاعدة ذهبية: التقريب يولد قطباً مشابهاً (تنافر)، والتبعيد يولد قطباً مخالفاً (تجاذب)."
  },
  {
    "id": "phys_ch3_db_easy_06",
    "titleEn": "Receding North Pole from a Solenoid",
    "titleAr": "إبعاد القطب الشمالي لمغناطيس عن ملف",
    "difficulty": "easy",
    "questionEn": "When the North pole of a bar magnet is pulled away (receding) from a coil face, the pole induced on that face is:",
    "questionAr": "عند إبعاد القطب الشمالي لمغناطيس عن وجه ملف، فإن القطب المتكون على هذا الوجه يكون:",
    "optionsEn": [
      "A North pole, repelling the magnet further",
      "A South pole, attracting the magnet to oppose its moving away",
      "A neutral non-magnetic state",
      "A magnetic monopole of undefined nature"
    ],
    "optionsAr": [
      "قطباً شمالياً، ليزيد من دفع المغناطيس بعيداً",
      "قطباً جنوبياً، يجذب المغناطيس ليقاوم ابتعاده",
      "حالة متعادلة لا مغناطيسية",
      "قطباً أحادي القطبية غير محدد"
    ],
    "correctAnswer": "A South pole, attracting the magnet to oppose its moving away",
    "correctIndex": 1,
    "hintEn": "Opposing recession requires an attractive force.",
    "hintAr": "مقاومة الابتعاد تتطلب قوة تجاذب.",
    "stepByStepSolutionEn": [
      "According to Lenz's law, the induced field must oppose the recession of the magnet. An attractive force is required, so a South pole is induced on the facing end of the coil."
    ],
    "stepByStepSolutionAr": [
      "وفقاً لقاعدة لنز، يجب أن يعاكس المجال المستحث ابتعاد المغناطيس. وتتطلب مقاومة الابتعاد قوة تجاذب، لذا يتكون قطب جنوبي على الوجه المقابل."
    ],
    "teacherTipEn": "Moving away induces an unlike pole to pull it back.",
    "teacherTipAr": "الابتعاد يولد قطباً مخالفاً لجذبه ومقاومة حركته."
  },
  {
    "id": "phys_ch3_db_easy_07",
    "titleEn": "Approaching South Pole to a Coil Face",
    "titleAr": "تقريب القطب الجنوبي لمغناطيس من وجه ملف",
    "difficulty": "easy",
    "questionEn": "When the South pole of a magnet is brought closer to a circular loop, the induced current viewed from that face flows:",
    "questionAr": "عند تقريب القطب الجنوبي لمغناطيس من حلقة دائرية، فإن اتجاه التيار المستحث عند النظر إلى هذا الوجه يدور:",
    "optionsEn": [
      "Counter-clockwise, behaving as a North magnetic pole",
      "Radially outwards from the center of the ring",
      "Clockwise, behaving as a South magnetic pole",
      "In a linearly oscillating back-and-forth pattern"
    ],
    "optionsAr": [
      "عكس عقارب الساعة، ليمثل قطباً مغناطيسياً شمالياً",
      "قطرياً نحو الخارج من مركز الحلقة",
      "مع عقارب الساعة، ليمثل قطباً مغناطيسياً جنوبياً",
      "في مسار خطي مهتز ذهاباً وإياباً"
    ],
    "correctAnswer": "Clockwise, behaving as a South magnetic pole",
    "correctIndex": 2,
    "hintEn": "Clockwise current creates a South pole; counter-clockwise creates a North pole.",
    "hintAr": "التيار مع عقارب الساعة يمثل قطباً جنوبياً، وعكس عقارب الساعة يمثل قطباً شمالياً.",
    "stepByStepSolutionEn": [
      "Approaching a South pole induces a South pole to oppose the motion by repulsion. By the clock-face rule, a South pole corresponds to current flowing in a clockwise direction."
    ],
    "stepByStepSolutionAr": [
      "تقريب قطب جنوبي يقتضي تكوين قطب جنوبي لمقاومة الاقتراب بالتنافر. وحسب قاعدة حركة عقارب الساعة، فإن القطب الجنوبي يقابل تياراً يدور في اتجاه عقارب الساعة."
    ],
    "teacherTipEn": "Clockwise = South (S-pole); Counter-clockwise = North (N-pole).",
    "teacherTipAr": "مع عقارب الساعة = جنوبي (S)؛ عكس عقارب الساعة = شمالي (N)."
  },
  {
    "id": "phys_ch3_db_easy_08",
    "titleEn": "Motional Electromotive Force Formula",
    "titleAr": "قانون القوة الدافعة المستحثة في سلك مستقيم متحرك",
    "difficulty": "easy",
    "questionEn": "The electromotive force ($\\text{emf}$) induced across a straight conductor of length $L$ moving with velocity $v$ in a uniform magnetic field $B$ is given by:",
    "questionAr": "تعطى القوة الدافعة الكهربية المستحثة ($\\text{emf}$) المتولدة بين طرفي سلك مستقيم طوله $L$ يتحرك بسرعة $v$ في مجال مغناطيسي منتظم $B$ بالعلاقة:",
    "optionsEn": [
      "$\\text{emf} = -\\frac{B L}{v} \\cos\\theta$",
      "$\\text{emf} = -B^2 v^2 L$",
      "$\\text{emf} = -\\frac{v}{B L} \\sin\\theta$",
      "$\\text{emf} = -B v L \\sin\\theta$"
    ],
    "optionsAr": [
      "$\\text{emf} = -\\frac{B L}{v} \\cos\\theta$",
      "$\\text{emf} = -B^2 v^2 L$",
      "$\\text{emf} = -\\frac{v}{B L} \\sin\\theta$",
      "$\\text{emf} = -B v L \\sin\\theta$"
    ],
    "correctAnswer": "$\\text{emf} = -B v L \\sin\\theta$",
    "correctIndex": 3,
    "hintEn": "Where $\\theta$ is the angle between the direction of velocity $v$ and the magnetic field lines $B$.",
    "hintAr": "حيث $\\theta$ هي الزاوية بين اتجاه حركة السلك (السرعة $v$) وخطوط المجال $B$.",
    "stepByStepSolutionEn": [
      "When a straight wire cuts magnetic flux lines, free electrons experience a magnetic Lorentz force $F = q v B \\sin\\theta$, establishing a potential difference $\\text{emf} = -B v L \\sin\\theta$."
    ],
    "stepByStepSolutionAr": [
      "عند تحريك سلك قاطعاً خطوط الفيض، تتأثر الشحنات الحرة بقوة لورنتز المغناطيسية مما يسبب تراكمها عند أحد الطرفين فينشأ فرق جهد مستحث مقداره $\\text{emf} = -B v L \\sin\\theta$."
    ],
    "teacherTipEn": "Maximum emf occurs when moving perpendicular to the field ($\\theta = 90^\\circ$).",
    "teacherTipAr": "تكون القوة الدافعة نهاية عظمى عندما يتحرك السلك عمودياً على اتجاه المجال ($\\theta = 90^\\circ$)."
  },
  {
    "id": "phys_ch3_db_easy_09",
    "titleEn": "Condition for Zero Induced EMF in a Moving Conductor",
    "titleAr": "شرط انعدام القوة الدافعة المستحثة في سلك متحرك",
    "difficulty": "easy",
    "questionEn": "A straight metallic rod moves at a constant speed in a uniform magnetic field. The induced electromotive force between its ends is zero when it moves:",
    "questionAr": "يتحرك ساق معدني مستقيم بسرعة منتظمة داخل مجال مغناطيسي منتظم. تنعدم القوة الدافعة المستحثة بين طرفيه عندما يتحرك:",
    "optionsEn": [
      "Parallel to the direction of the magnetic field lines ($\\theta = 0^\\circ$)",
      "Perpendicular to the direction of the magnetic field lines ($\\theta = 90^\\circ$)",
      "At an angle of $45^\\circ$ to the magnetic field lines",
      "At an angle of $60^\\circ$ to the magnetic field lines"
    ],
    "optionsAr": [
      "موازياً لاتجاه خطوط المجال المغناطيسي ($\\theta = 0^\\circ$)",
      "عمودياً على اتجاه خطوط المجال المغناطيسي ($\\theta = 90^\\circ$)",
      "بزاوية $45^\\circ$ مع خطوط المجال المغناطيسي",
      "بزاوية $60^\\circ$ مع خطوط المجال المغناطيسي"
    ],
    "correctAnswer": "Parallel to the direction of the magnetic field lines ($\\theta = 0^\\circ$)",
    "correctIndex": 0,
    "hintEn": "Consider $\\sin\\theta$ in the motional emf equation.",
    "hintAr": "تأمل قيمة $\\sin\\theta$ في قانون $\\text{emf} = -B v L \\sin\\theta$.",
    "stepByStepSolutionEn": [
      "In $\\text{emf} = -B v L \\sin\\theta$, when the wire moves parallel to the magnetic field lines, $\\theta = 0^\\circ$, so $\\sin 0^\\circ = 0$ and no magnetic flux lines are cut ($\\text{emf} = 0$)."
    ],
    "stepByStepSolutionAr": [
      "في العلاقة $\\text{emf} = -B v L \\sin\\theta$، عندما يتحرك السلك موازياً لخطوط المجال تكون $\\theta = 0^\\circ$ وبالتالي $\\sin 0^\\circ = 0$، أي لا يقطع السلك أياً من خطوط الفيض فتنعدم $\\text{emf}$."
    ],
    "teacherTipEn": "Cutting flux lines is mandatory for electromagnetic induction.",
    "teacherTipAr": "قطع خطوط الفيض شرط أساسي لحدوث الحث الكهرومغناطيسي."
  },
  {
    "id": "phys_ch3_db_easy_10",
    "titleEn": "Fleming's Right-Hand Rule Application",
    "titleAr": "قاعدة اليد اليمنى لفليمنج واستخدامها",
    "difficulty": "easy",
    "questionEn": "Fleming's Right-Hand Rule is used in physics to determine:",
    "questionAr": "تستخدم قاعدة اليد اليمنى لفليمنج في الفيزياء لتحديد:",
    "optionsEn": [
      "The direction of the magnetic force acting on a current-carrying wire in a motor",
      "The direction of induced current in a straight conductor moving across a magnetic field",
      "The polarity of magnetic field lines around a long straight solenoid",
      "The direction of electric field lines between two capacitor plates"
    ],
    "optionsAr": [
      "اتجاه القوة المغناطيسية المؤثرة على سلك يمر به تيار في محرك كهربي",
      "اتجاه التيار المستحث في سلك مستقيم يتحرك قاطعاً مجالاً مغناطيسياً",
      "قطبية خطوط المجال المغناطيسي حول ملف لولبي",
      "اتجاه خطوط المجال الكهربي بين لوحي مكثف"
    ],
    "correctAnswer": "The direction of induced current in a straight conductor moving across a magnetic field",
    "correctIndex": 1,
    "hintEn": "Right hand for generator/induced current, Left hand for motor/magnetic force.",
    "hintAr": "اليد اليمنى للمولد والتيار المستحث، واليد اليسرى للمحرك والقوة المغناطيسية المؤثرة.",
    "stepByStepSolutionEn": [
      "Fleming's Right-Hand Rule specifies: thumb = motion/velocity, index finger = magnetic field, middle finger = direction of induced current."
    ],
    "stepByStepSolutionAr": [
      "تنص قاعدة اليد اليمنى لفليمنج على: الإبهام يشير للحركة، والسبابة لاتجاه المجال، والوسطى تشير لاتجاه التيار المستحث."
    ],
    "teacherTipEn": "Never confuse Fleming's Left-Hand Rule (used for motor force) with the Right-Hand Rule (used for induced current).",
    "teacherTipAr": "لا تخلط بين قاعدة اليد اليسرى (للقوة الحركية في المحرك) واليد اليمنى (للتيار المستحث في المولد)."
  },
  {
    "id": "phys_ch3_db_easy_11",
    "titleEn": "Mutual Induction Phenomenon Definition",
    "titleAr": "تعريف ظاهرة الحث المتبادل بين ملفين",
    "difficulty": "easy",
    "questionEn": "The phenomenon of producing an induced electromotive force in a secondary coil due to a change in current in an adjacent primary coil is known as:",
    "questionAr": "الظاهرة التي يتولد فيها قوة دافعة مستحثة في ملف ثانوي نتيجة تغير شدة التيار في ملف ابتدائي مجاور تسمى:",
    "optionsEn": [
      "Self-induction",
      "Photoelectric effect",
      "Mutual induction",
      "Electrostatic resonance"
    ],
    "optionsAr": [
      "الحث الذاتي",
      "التأثير الكهروضوئي",
      "الحث المتبادل",
      "الرنين الكهروستاتيكي"
    ],
    "correctAnswer": "Mutual induction",
    "correctIndex": 2,
    "hintEn": "It involves two separate coils interacting via magnetic flux.",
    "hintAr": "تحدث بين ملفين منفصلين يتأثر أحدهما بتغير فيض الآخر.",
    "stepByStepSolutionEn": [
      "Mutual induction is the electromagnetic interaction between two coils where a changing current in the primary coil induces an electromotive force in the nearby secondary coil."
    ],
    "stepByStepSolutionAr": [
      "الحث المتبادل هو التأثير الكهرومغناطيسي الحادث بين ملفين متجاورين أو متداخلين بحيث يؤدي تغير التيار في الملف الابتدائي إلى تولد قوة دافعة كهربية مستحثة في الملف الثانوي."
    ],
    "teacherTipEn": "The induction coil and electric transformer are based entirely on mutual induction.",
    "teacherTipAr": "المحول الكهربي وملف الحث يعملان بالكامل على ظاهرة الحث المتبادل."
  },
  {
    "id": "phys_ch3_db_easy_12",
    "titleEn": "Unit of Mutual and Self Inductance: The Henry",
    "titleAr": "وحدة معامل الحث: الهنري ومكافئاته",
    "difficulty": "easy",
    "questionEn": "The SI unit for both mutual inductance ($M$) and self-inductance ($L$) is the Henry ($\\text{H}$). One Henry is equivalent to:",
    "questionAr": "الوحدة الدولية لمعامل الحث المتبادل ($M$) والحث الذاتي ($L$) هي الهنري ($\\text{H}$). الهنري الواحد يكافئ:",
    "optionsEn": [
      "$\\text{V} \\cdot \\text{A / s} = \\Omega / \\text{s}$",
      "$\\text{T} \\cdot \\text{m / A}^2$",
      "$\\text{Wb} \\cdot \\text{s / V}$",
      "$\\text{V} \\cdot \\text{s / A} = \\Omega \\cdot \\text{s} = \\text{Wb / A}$"
    ],
    "optionsAr": [
      "$\\text{V} \\cdot \\text{A / s} = \\Omega / \\text{s}$",
      "$\\text{T} \\cdot \\text{m / A}^2$",
      "$\\text{Wb} \\cdot \\text{s / V}$",
      "$\\text{V} \\cdot \\text{s / A} = \\Omega \\cdot \\text{s} = \\text{Wb / A}$"
    ],
    "correctAnswer": "$\\text{V} \\cdot \\text{s / A} = \\Omega \\cdot \\text{s} = \\text{Wb / A}$",
    "correctIndex": 3,
    "hintEn": "From $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$, rearrange for $L$.",
    "hintAr": "من القانون $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، استنتج وحدة $L$.",
    "stepByStepSolutionEn": [
      "From $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$, $[L] = \\frac{\\text{V}}{\\text{A/s}} = \\text{V} \\cdot \\text{s / A}$. Since $\\text{V/A} = \\Omega$, it is $\\Omega \\cdot \\text{s}$. Also from $L I = N \\Phi_m$, $[L] = \\text{Wb / A}$."
    ],
    "stepByStepSolutionAr": [
      "من العلاقة $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، فإن وحدة المعامل هي $\\text{V}\\cdot\\text{s/A}$. وحيث إن $\\text{V/A} = \\Omega$ فتكون $\\Omega\\cdot\\text{s}$. وأيضاً من $L I = N \\Phi_m$ فإنها تكافئ $\\text{Wb/A}$."
    ],
    "teacherTipEn": "Henry equivalents are heavily tested: $\\text{H} = \\text{V}\\cdot\\text{s/A} = \\Omega\\cdot\\text{s} = \\text{Wb/A} = \\text{J/A}^2$.",
    "teacherTipAr": "مكافئات الهنري: فولت.ثانية/أمبير = أوم.ثانية = ويبر/أمبير = جول/أمبير²."
  },
  {
    "id": "phys_ch3_db_easy_13",
    "titleEn": "Factors Determining the Mutual Inductance Coefficient",
    "titleAr": "العوامل التي يتوقف عليها معامل الحث المتبادل",
    "difficulty": "easy",
    "questionEn": "Which of the following factors does NOT affect the mutual inductance coefficient ($M$) between two coils?",
    "questionAr": "أي من العوامل التالية لا يؤثر في معامل الحث المتبادل ($M$) بين ملفين؟",
    "optionsEn": [
      "The material of the wire insulation (electrical resistivity of the outer plastic jacket)",
      "The magnetic permeability of the core inside the coils ($\\mu$)",
      "The number of turns of the primary and secondary coils ($N_1, N_2$)",
      "The volume of the coils and the distance separating them"
    ],
    "optionsAr": [
      "مادة عازل السلك (المقاومة النوعية للبلاستيك المغلف للملف من الخارج)",
      "معامل النفاذية المغناطيسية للوسط داخل الملفين ($\\mu$)",
      "عدد لفات كل من الملفين الابتدائي والثانوي ($N_1, N_2$)",
      "حجم الملفين والمسافة الفاصلة بينهما"
    ],
    "correctAnswer": "The material of the wire insulation (electrical resistivity of the outer plastic jacket)",
    "correctIndex": 0,
    "hintEn": "$M$ depends on geometry, turns, core permeability, and coupling distance.",
    "hintAr": "يعتمد $M$ على الأبعاد الهندسية، عدد اللفات، نفاذية القلب، والمسافة الفاصلة.",
    "stepByStepSolutionEn": [
      "Mutual inductance depends on the number of turns $N_1$ and $N_2$, the volume and cross-sectional area of the coils, the distance between them, and the magnetic permeability $\\mu$ of the core. It does not depend on the dielectric property or external plastic insulation."
    ],
    "stepByStepSolutionAr": [
      "يتوقف معامل الحث المتبادل على عدد لفات الملفين، حجمهما، المسافة الفاصلة بينهما، ونفاذية مادة القلب. ولا يعتمد إطلاقاً على نوع العازل البلاستيكي الخارجي لأسلاك الملف."
    ],
    "teacherTipEn": "Geometric and magnetic properties dictate $M$, not the wire coating.",
    "teacherTipAr": "الخصائص الهندسية والمغناطيسية هي التي تحدد $M$."
  },
  {
    "id": "phys_ch3_db_easy_14",
    "titleEn": "Forward vs Reverse Induced EMF in Mutual Induction",
    "titleAr": "القوة الدافعة المستحثة الطردية والعكسية",
    "difficulty": "easy",
    "questionEn": "In a mutual induction setup, a reverse induced electromotive force (opposing the primary current) is generated in the secondary coil when:",
    "questionAr": "في تجربة الحث المتبادل بين ملفين، تتولد قوة دافعة كهربية مستحثة عكسية في الملف الثانوي عند:",
    "optionsEn": [
      "Opening the primary circuit switch (current collapse)",
      "Closing the primary circuit switch (instantaneous current rise)",
      "Increasing the resistance of the primary circuit rheostat",
      "Pulling the primary coil away from the secondary coil"
    ],
    "optionsAr": [
      "لحظة فتح دائرة الملف الابتدائي (انهيار شدة التيار)",
      "لحظة غلق دائرة الملف الابتدائي (تنامي شدة التيار)",
      "زيادة مقاومة ريوستات دائرة الملف الابتدائي",
      "إبعاد الملف الابتدائي عن الملف الثانوي"
    ],
    "correctAnswer": "Closing the primary circuit switch (instantaneous current rise)",
    "correctIndex": 1,
    "hintEn": "Reverse emf occurs during magnetic flux growth ($\\Delta\\Phi_m / \\Delta t > 0$).",
    "hintAr": "القوة الدافعة العكسية تتولد عند زيادة الفيض المغناطيسي أو نمو التيار.",
    "stepByStepSolutionEn": [
      "A reverse induced emf occurs when the magnetic flux linking the secondary coil is increasing: closing the switch, decreasing the rheostat resistance (increasing current), or inserting the primary coil/iron core."
    ],
    "stepByStepSolutionAr": [
      "تتولد $\\text{emf}$ مستحثة عكسية في الحالات التي تؤدي إلى زيادة الفيض المخترق للملف الثانوي: لحظة غلق الدائرة، إنقاص مقاومة الريوستات (زيادة التيار)، أو تقريب الملف الابتدائي/إدخال قلب حديدي."
    ],
    "teacherTipEn": "Reverse EMF opposes growth; Forward EMF opposes collapse.",
    "teacherTipAr": "العكسية تقاوم الزيادة أو النمو؛ الطردية تقاوم النقصان أو الانهيار."
  },
  {
    "id": "phys_ch3_db_easy_15",
    "titleEn": "Forward Induced EMF Conditions",
    "titleAr": "حالات تولد القوة الدافعة المستحثة الطردية",
    "difficulty": "easy",
    "questionEn": "A forward induced electromotive force (in the same direction as the primary current) is produced in the secondary coil when:",
    "questionAr": "تتولد قوة دافعة كهربية مستحثة طردية (في نفس اتجاه التيار الأصلي) في الملف الثانوي عند:",
    "optionsEn": [
      "Closing the primary switch with an iron core inserted",
      "Decreasing the variable resistance (rheostat) in the primary circuit",
      "Opening the primary circuit switch or rapidly decreasing its current",
      "Moving the primary coil closer to the secondary coil"
    ],
    "optionsAr": [
      "لحظة غلق مفتاح الابتدائي في وجود قلب حديدي",
      "إنقاص مقاومة الريوستات في دائرة الابتدائي",
      "لحظة فتح دائرة الملف الابتدائي أو إنقاص شدة تياره بسرعة",
      "تقريب الملف الابتدائي من الملف الثانوي"
    ],
    "correctAnswer": "Opening the primary circuit switch or rapidly decreasing its current",
    "correctIndex": 2,
    "hintEn": "Forward emf tries to compensate for the decreasing magnetic flux.",
    "hintAr": "القوة الدافعة الطردية تحاول تعويض النقص في الفيض المغناطيسي المنهار.",
    "stepByStepSolutionEn": [
      "When magnetic flux decreases (opening circuit, increasing rheostat resistance, pulling coils apart), Lenz's law dictates that the induced current must support the decaying flux, creating a forward induced emf."
    ],
    "stepByStepSolutionAr": [
      "عندما يتناقص الفيض المغناطيسي (فتح الدائرة، زيادة مقاومة الريوستات، إبعاد الملفين)، تقتضي قاعدة لنز توليد تيار مستحث في نفس اتجاه التيار الأصلي لمحاولة منع انهيار الفيض (طردية)."
    ],
    "teacherTipEn": "Forward EMF acts to maintain the collapsing flux.",
    "teacherTipAr": "الـ $\\text{emf}$ الطردية تعمل على إبقاء ومقاومة تلاشي الفيض."
  },
  {
    "id": "phys_ch3_db_easy_16",
    "titleEn": "Self-Induction Phenomenon in a Single Solenoid",
    "titleAr": "ظاهرة الحث الذاتي في ملف",
    "difficulty": "easy",
    "questionEn": "The electromagnetic phenomenon in which an electromotive force is induced in a coil as a result of a change in its own electric current is called:",
    "questionAr": "التأثير الكهرومغناطيسي الحادث في نفس الملف عند تغير شدة التيار المار فيه وتولد قوة دافعة مستحثة معارضة يسمى:",
    "optionsEn": [
      "Mutual induction",
      "Magnetic hysteresis",
      "The Hall effect",
      "Self-induction"
    ],
    "optionsAr": [
      "الحث المتبادل",
      "التخلف المغناطيسي",
      "تأثير هول",
      "الحث الذاتي"
    ],
    "correctAnswer": "Self-induction",
    "correctIndex": 3,
    "hintEn": "Induction within the same coil carrying changing current.",
    "hintAr": "الحث الذي يحدث في الملف ذاته نتيجة تغير تياره هو.",
    "stepByStepSolutionEn": [
      "Self-induction is the property of an electric circuit by which a change in current in the coil induces an electromotive force in the same coil to oppose that change."
    ],
    "stepByStepSolutionAr": [
      "الحث الذاتي هو التأثير الكهرومغناطيسي الذي يحدث في نفس الملف عندما تتغير شدة التيار المار فيه، فيتولد فيه قوة دافعة وتيار مستحث يقاومان هذا التغير."
    ],
    "teacherTipEn": "Self-induction opposes both the growth and decay of current.",
    "teacherTipAr": "الحث الذاتي يبطئ نمو التيار ويبطئ انهياره."
  },
  {
    "id": "phys_ch3_db_easy_17",
    "titleEn": "Formula for the Self-Inductance of a Solenoid",
    "titleAr": "قانون معامل الحث الذاتي لملف لولبي",
    "difficulty": "easy",
    "questionEn": "The self-inductance ($L$) of a solenoid of length $\\ell$, cross-sectional area $A$, and number of turns $N$ wound on a core of permeability $\\mu$ is given by:",
    "questionAr": "يعطى معامل الحث الذاتي ($L$) لملف حلزوني طوله $\\ell$ ومساحة مقطعه $A$ وعدد لفاته $N$ ملفوف على قلب نفاذيته $\\mu$ بالعلاقة:",
    "optionsEn": [
      "$L = \\frac{\\mu N^2 A}{\\ell}$",
      "$L = \\frac{\\mu N A}{\\ell^2}$",
      "$L = \\frac{\\mu^2 N A}{\\ell}$",
      "$L = \\mu N^2 A \\ell$"
    ],
    "optionsAr": [
      "$L = \\frac{\\mu N^2 A}{\\ell}$",
      "$L = \\frac{\\mu N A}{\\ell^2}$",
      "$L = \\frac{\\mu^2 N A}{\\ell}$",
      "$L = \\mu N^2 A \\ell$"
    ],
    "correctAnswer": "$L = \\frac{\\mu N^2 A}{\\ell}$",
    "correctIndex": 0,
    "hintEn": "Derive from $\\Phi_m = B A = \\left(\\frac{\\mu N I}{\\ell}\\right) A$ and $L I = N \\Phi_m$.",
    "hintAr": "استنتج من $B = \\frac{\\mu N I}{\\ell}$ مع $L I = N \\Phi_m = N B A$.",
    "stepByStepSolutionEn": [
      "From $L I = N \\Phi_m$ and $\\Phi_m = B A = \\left(\\frac{\\mu N I}{\\ell}\\right) A$, substituting yields $L I = N \\left(\\frac{\\mu N I A}{\\ell}\\right) \\implies L = \\frac{\\mu N^2 A}{\\ell}$."
    ],
    "stepByStepSolutionAr": [
      "من العلاقة $L I = N \\Phi_m$ وبالتعويض عن $\\Phi_m = B A = \\left(\\frac{\\mu N I}{\\ell}\\right) A$ نجد أن: $L I = \\frac{\\mu N^2 I A}{\\ell}$، وبقسمة الطرفين على $I$ نحصل على $L = \\frac{\\mu N^2 A}{\\ell}$."
    ],
    "teacherTipEn": "Notice that $L$ is proportional to $N^2$, not $N$. Doubling $N$ quadruples $L$.",
    "teacherTipAr": "لاحظ أن $L$ تتناسب مع مربع عدد اللفات $N^2$، فمضاعفة اللفات تزيد معامل الحث الذاتي 4 أمثال."
  },
  {
    "id": "phys_ch3_db_easy_18",
    "titleEn": "Self-Induced Spark at Opening of Circuit",
    "titleAr": "الشرارة الكهربية لحظة فتح دائرة تحتوي على ملف حث",
    "difficulty": "easy",
    "questionEn": "When opening an electric circuit containing a coil with a large number of turns wound on a soft iron core, an electric spark jumps across the switch contacts because:",
    "questionAr": "عند فتح دائرة كهربية تحتوي على ملف حثي كبير عدد اللفات وملفوف حول قلب حديدي، تحدث شرارة كهربية بين طرفي المفتاح بسبب:",
    "optionsEn": [
      "A reverse induced electromotive force that pushes charges back to the battery",
      "A huge forward induced electromotive force generated due to the extremely rapid collapse of current ($\\Delta t \\to 0$)",
      "The total resistance of the circuit drops instantly to zero",
      "Thermal expansion of the air particles ionizing the contact points"
    ],
    "optionsAr": [
      "تولد قوة دافعة مستحثة عكسية تدفع الشحنات باتجاه البطارية",
      "تولد قوة دافعة مستحثة طردية هائلة نتيجة الانهيار السريع جداً للتيار والفيض في زمن متناهٍ في الصغر",
      "انخفاض المقاومة الكلية للدائرة لحظياً إلى الصفر",
      "التمدد الحراري لجزيئات الهواء الذي يؤين نقاط التلامس"
    ],
    "correctAnswer": "A huge forward induced electromotive force generated due to the extremely rapid collapse of current ($\\Delta t \\to 0$)",
    "correctIndex": 1,
    "hintEn": "Rate of collapse of current is much faster than rate of growth.",
    "hintAr": "زمن انهيار التيار أصغر بكثير جداً من زمن نموه، مما يجعل المعدل الزمني هائلاً.",
    "stepByStepSolutionEn": [
      "At the instant of opening the switch, the current collapses to zero in an extremely short time interval $\\Delta t$. Since $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$, the huge rate of decay produces a gigantic forward induced emf (thousands of volts), ionizing the air gap and producing an electric spark."
    ],
    "stepByStepSolutionAr": [
      "لحظة فتح الدائرة يتلاشى التيار في زمن صغير جداً، وبما أن $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$ فإن المعدل الزمني للانهيار يكون كبيراً جداً، مما يولد قوة دافعة مستحثة طردية هائلة كافية لتأيين الهواء وحدوث شرارة كهربية."
    ],
    "teacherTipEn": "Growth of current is slow due to reverse EMF; collapse of current is extremely fast, creating a gigantic forward EMF.",
    "teacherTipAr": "نمو التيار بطيء لوجود $\\text{emf}$ عكسية؛ وانهياره سريع جداً مولداً $\\text{emf}$ طردية هائلة."
  },
  {
    "id": "phys_ch3_db_easy_19",
    "titleEn": "Non-Inductive Coil (Bifilar Winding)",
    "titleAr": "الملف عديم الحث (اللف المزدوج)",
    "difficulty": "easy",
    "questionEn": "Standard resistance coils are wound in a double-wound (bifilar) manner in order to:",
    "questionAr": "تُلف ملفات المقاومات القياسية لفاً مزدوجاً لـ:",
    "optionsEn": [
      "Increase the total magnetic field produced inside the coil",
      "Prevent the resistance from overheating under high voltages",
      "Cancel self-induction by having currents flow in opposite directions in adjacent wires",
      "Double the total electrical resistance of the wire used"
    ],
    "optionsAr": [
      "زيادة شدة المجال المغناطيسي الكلي المتولد داخل الملف",
      "حماية المقاومة من ارتفاع درجة حرارتها عند الجهود المرتفعة",
      "تلافي وتلاشي الحث الذاتي لأن التيارات تسري في اتجاهين متعاكسين فيلغي كل مجال الآخر",
      "مضاعفة المقاومة الأومية الكلية للسلك المستخدم دون داعٍ"
    ],
    "correctAnswer": "Cancel self-induction by having currents flow in opposite directions in adjacent wires",
    "correctIndex": 2,
    "hintEn": "Opposite currents create opposing magnetic fields that neutralize each other.",
    "hintAr": "سريان التيار في اتجاهين متضادين يولد فيضين متساويين ومتعاكسين فيلاشي كل منهما الآخر.",
    "stepByStepSolutionEn": [
      "In bifilar winding, the wire is folded in half before winding. The current flows in opposite directions in each pair of parallel loops, creating two equal and opposite magnetic fluxes ($\\Phi_{m1} = -\\Phi_{m2}$). They completely cancel each other, eliminating self-induction ($L \\approx 0$)."
    ],
    "stepByStepSolutionAr": [
      "في اللف المزدوج يُثنى السلك على نفسه، فيمر التيار في كل لفتين متجاورتين في اتجاهين متعاكسين، فينشأ مجالان مغناطيسيان متساويان في المقدار ومتضادان في الاتجاه، فيلاشي كل منهما الآخر وينعدم الحث الذاتي."
    ],
    "teacherTipEn": "Bifilar winding ensures pure ohmic resistance without any inductive reactance.",
    "teacherTipAr": "اللف المزدوج يضمن الحصول على مقاومة أومية عديمة الحث."
  },
  {
    "id": "phys_ch3_db_easy_20",
    "titleEn": "Definition of Eddy Currents",
    "titleAr": "تعريف التيارات الدوامية",
    "difficulty": "easy",
    "questionEn": "Eddy currents are defined as:",
    "questionAr": "تعرف التيارات الدوامية بأنها:",
    "optionsEn": [
      "Direct currents flowing steadily through electrolytic solutions",
      "High-frequency radio waves transmitted through the ionosphere",
      "Static charges accumulating on isolated non-conducting spherical surfaces",
      "Circulating electric currents induced inside solid metallic masses when subjected to a time-varying magnetic flux"
    ],
    "optionsAr": [
      "تيارات مستمرة تسري بانتظام في المحاليل الإلكتروليتية",
      "موجات كهرومغناطيسية عالية التردد تنتقل عبر الغلاف الجوي",
      "شحنات كهروستاتيكية تتراكم على سطوح كروية عازلة",
      "تيارات كهربية مستحثة دائرية تتولد في القطع المعدنية المصمتة عند تعرضها لفيض مغناطيسي متغير"
    ],
    "correctAnswer": "Circulating electric currents induced inside solid metallic masses when subjected to a time-varying magnetic flux",
    "correctIndex": 3,
    "hintEn": "Whirlpool-like currents induced inside solid bulk conductor blocks.",
    "hintAr": "تيارات مستحثة تشبه الدوامات المائية تتولد داخل الكتل المعدنية المصمتة.",
    "stepByStepSolutionEn": [
      "When a solid piece of metal is placed in a changing magnetic field (or moves through a non-uniform field), closed circular loops of induced current are established within the bulk metal, known as eddy currents."
    ],
    "stepByStepSolutionAr": [
      "عند وضع قطعة معدنية مصمتة في مجال مغناطيسي متغير، تتولد بداخلها مسارات دائرية مغلقة من التيارات المستحثة تُعرف بالتيارات الدوامية."
    ],
    "teacherTipEn": "Eddy currents can cause severe energy loss as heat in transformer and dynamo cores.",
    "teacherTipAr": "التيارات الدوامية تسبب فقداناً كبيراً للطاقة في صورة حرارة في قلوب المحولات والمولدات."
  },
  {
    "id": "phys_ch3_db_easy_21",
    "titleEn": "Minimizing Eddy Currents in Iron Cores",
    "titleAr": "طرق تقليل التيارات الدوامية في القلوب الحديدية",
    "difficulty": "easy",
    "questionEn": "To minimize energy losses caused by eddy currents, transformer cores are constructed from:",
    "questionAr": "للحد من فقد الطاقة الكهربية الناتج عن التيارات الدوامية، يُصنع قلب المحول من:",
    "optionsEn": [
      "Thin laminated sheets of soft silicon iron insulated electrically from one another",
      "A solid monolithic block of highly conductive pure copper",
      "A single hollow cylinder of magnetized hard steel",
      "Compressed graphite powder wrapped with copper foil"
    ],
    "optionsAr": [
      "شرائح رقيقة معزولة عن بعضها من الحديد المطاوع السيليكوني",
      "قالب مصمت من النحاس النقي عالي التوصيلية",
      "أسطوانة مجوفة واحدة من الصلب الممغنط",
      "مسحوق الجرافيت المضغوط المغلف برقائق النحاس"
    ],
    "correctAnswer": "Thin laminated sheets of soft silicon iron insulated electrically from one another",
    "correctIndex": 0,
    "hintEn": "Laminations cut the circulating loops, and silicon increases electrical resistivity.",
    "hintAr": "تقسيم القلب إلى شرائح يقطع مسارات التيارات، والسيليكون يرفع المقاومة النوعية.",
    "stepByStepSolutionEn": [
      "Slicing the core into thin laminations parallel to the magnetic field lines increases the electrical resistance across the eddy current paths, dramatically reducing eddy current loops. Silicon increases the electrical resistivity without reducing magnetic permeability."
    ],
    "stepByStepSolutionAr": [
      "تقسيم القلب إلى شرائح معزولة وموازية لخطوط الفيض يزيد من المقاومة الأومية في مسار التيارات الدوامية فيقللها كثيراً، كما تضاف مادة السيليكون لرفع المقاومة النوعية للحديد دون التأثير على نفاذيته المغناطيسية."
    ],
    "teacherTipEn": "Laminations are placed parallel to flux lines, perpendicular to the planes of eddy currents.",
    "teacherTipAr": "تكون الشرائح موازية للمجال المغناطيسي وعمودية على اتجاه حركة التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_easy_22",
    "titleEn": "Useful Industrial Application of Eddy Currents",
    "titleAr": "التطبيق الصناعي المفيد للتيارات الدوامية",
    "difficulty": "easy",
    "questionEn": "Eddy currents are utilized beneficially in industry in:",
    "questionAr": "تُستغل التيارات الدوامية بصورة مفيدة في الصناعة في:",
    "optionsEn": [
      "Refrigerators for cooling foodstuffs",
      "Induction furnaces used for melting scrap metals and alloys",
      "Dry chemical galvanic cells for powering watches",
      "DC motors to improve mechanical brush lubrication"
    ],
    "optionsAr": [
      "أجهزة التبريد لحفظ الأطعمة",
      "أفران الحث المستخدمة في صهر المعادن والسبائك",
      "البطاريات الجافة لتشغيل الساعات",
      "المحركات الكهربية لتحسين تزييت الفرش"
    ],
    "correctAnswer": "Induction furnaces used for melting scrap metals and alloys",
    "correctIndex": 1,
    "hintEn": "High thermal energy generated by eddy currents is harnessed to melt metals.",
    "hintAr": "الطاقة الحرارية العالية الناتجة عن التيارات الدوامية تُستغل في صهر الفلزات.",
    "stepByStepSolutionEn": [
      "In induction furnaces, a coil carrying very high-frequency alternating current surrounds the metal to be melted. Gigantic eddy currents are induced in the metal, generating intense Joule heat that rapidly melts it."
    ],
    "stepByStepSolutionAr": [
      "في أفران الحث يمرر تيار متردد عالي التردد في ملف يحيط بالمعدن المراد صهره، فتتولد في المعدن تيارات دوامية هائلة تولد طاقة حرارية تكفي لصهره بسرعة وبنقاء عالٍ."
    ],
    "teacherTipEn": "Key exam concept: Induction furnaces = beneficial use of eddy currents.",
    "teacherTipAr": "نقطة امتحانية هامة: أفران الحث هي التطبيق المفيد للتيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_easy_23",
    "titleEn": "Basic Principle of the Electric Generator (Dynamo)",
    "titleAr": "الأساس العلمي للدينامو (المولد الكهربي)",
    "difficulty": "easy",
    "questionEn": "The scientific working principle of the electric generator (dynamo) is:",
    "questionAr": "الفكرة العلمية الأساسية لعمل المولد الكهربي (الدينامو) هي:",
    "optionsEn": [
      "The magnetic torque acting on a current-carrying coil",
      "The heating effect of electric current (Joule's law)",
      "Electromagnetic induction (cutting magnetic flux by a rotating coil)",
      "Electrochemical potential difference between two different metals"
    ],
    "optionsAr": [
      "عزم الازدواج المغناطيسي المؤثر على ملف يمر به تيار",
      "التأثير الحراري للتيار الكهربي (قانون جول)",
      "الحث الكهرومغناطيسي (قطع خطوط الفيض بواسطة ملف يدور في مجال)",
      "فرق الجهد الكهروكيميائي بين فلزين مختلفين"
    ],
    "correctAnswer": "Electromagnetic induction (cutting magnetic flux by a rotating coil)",
    "correctIndex": 2,
    "hintEn": "Mechanical energy is converted into electrical energy via induction.",
    "hintAr": "تحويل الطاقة الميكانيكية إلى كهربية بالحث.",
    "stepByStepSolutionEn": [
      "The dynamo converts mechanical energy into electrical energy by rotating a conductor coil in a magnetic field, cutting magnetic flux lines and inducing an alternating electromotive force according to Faraday's law."
    ],
    "stepByStepSolutionAr": [
      "يعمل الدينامو على تحويل الطاقة الحركية (الميكانيكية) إلى طاقة كهربية عن طريق دوران ملف في مجال مغناطيسي قاطعاً خطوط الفيض، فتتولد فيه قوة دافعة مستحثة طبقاً لقانون فاراداي."
    ],
    "teacherTipEn": "Dynamo = Electromagnetic induction; Motor = Magnetic torque.",
    "teacherTipAr": "الدينامو = حث كهرومغناطيسي؛ المحرك = عزم ازدواج مغناطيسي."
  },
  {
    "id": "phys_ch3_db_easy_24",
    "titleEn": "Function of Slip Rings in an AC Dynamo",
    "titleAr": "وظيفة حلقتي الانزلاق في دينامو التيار المتردد",
    "difficulty": "easy",
    "questionEn": "In an alternating current (AC) dynamo, the two slip rings rotate with the coil to:",
    "questionAr": "في دينامو التيار المتردد، تدور حلقتا الانزلاق مع الملف من أجل:",
    "optionsEn": [
      "Convert the alternating current into a steady direct current inside the coil",
      "Prevent the coil from rotating at excessive speeds",
      "Maintain a constant magnetic field perpendicular to the coil",
      "Transfer the induced alternating current from the rotating coil to the external circuit via carbon brushes"
    ],
    "optionsAr": [
      "تحويل التيار المتردد إلى تيار مستمر داخل الملف",
      "منع الملف من الدوران بسرعات عالية",
      "الحفاظ على مجال مغناطيسي ثابت عمودي على الملف",
      "نقل التيار المتردد المستحث من الملف الدوار إلى الدائرة الخارجية عبر الفرشتين"
    ],
    "correctAnswer": "Transfer the induced alternating current from the rotating coil to the external circuit via carbon brushes",
    "correctIndex": 3,
    "hintEn": "Each slip ring is permanently connected to one end of the rotating coil.",
    "hintAr": "كل حلقة متصلة بأحد طرفي الملف وتنزلق عليها فرشة كربونية.",
    "stepByStepSolutionEn": [
      "Each end of the armature coil is attached to one slip ring. As the coil rotates, the rings slide against stationary carbon (graphite) brushes, transmitting the generated alternating current to the external circuit without twisting the wires."
    ],
    "stepByStepSolutionAr": [
      "يتصل كل طرف من طرفي ملف الدينامو بإحدى حلقتي الانزلاق النحاسيتين، وأثناء الدوران تنزلق كل حلقة على فرشة من الجرافيت لنقل التيار المتردد المستحث إلى الدائرة الخارجية دون التواء الأسلاك."
    ],
    "teacherTipEn": "Slip rings preserve the alternating nature of the induced current.",
    "teacherTipAr": "حلقتا الانزلاق تحافظان على الطبيعة المتناوبة للتيار المتردد."
  },
  {
    "id": "phys_ch3_db_easy_25",
    "titleEn": "Coil Orientation for Zero Induced EMF in a Dynamo",
    "titleAr": "وضع الملف عندما تنعدم القوة الدافعة المستحثة في الدينامو",
    "difficulty": "easy",
    "questionEn": "During the rotation of an AC dynamo coil, the instantaneous induced electromotive force is ZERO when the plane of the coil is:",
    "questionAr": "أثناء دوران ملف الدينامو، تنعدم القوة الدافعة الكهربية المستحثة اللحظية عندما يكون مستوى الملف:",
    "optionsEn": [
      "Perpendicular to the magnetic flux lines ($\\theta_{\\text{normal}} = 0^\\circ$)",
      "Parallel to the magnetic flux lines ($\\theta_{\\text{normal}} = 90^\\circ$)",
      "Inclined at $45^\\circ$ to the magnetic flux lines",
      "Inclined at $60^\\circ$ to the magnetic flux lines"
    ],
    "optionsAr": [
      "عمودياً على خطوط الفيض المغناطيسي ($\\theta_{\\text{العمودي}} = 0^\\circ$)",
      "موازياً لخطوط الفيض المغناطيسي ($\\theta_{\\text{العمودي}} = 90^\\circ$)",
      "مائلاً بزاوية $45^\\circ$ على خطوط الفيض المغناطيسي",
      "مائلاً بزاوية $60^\\circ$ على خطوط الفيض المغناطيسي"
    ],
    "correctAnswer": "Perpendicular to the magnetic flux lines ($\\theta_{\\text{normal}} = 0^\\circ$)",
    "correctIndex": 0,
    "hintEn": "Remember: In the dynamo formula $\\text{emf} = N B A \\omega \\sin\\theta$, $\\theta$ is the angle between the normal to the coil and the field lines.",
    "hintAr": "تذكر: في قانون الدينامو $\\text{emf} = N B A \\omega \\sin\\theta$، $\\theta$ هي الزاوية بين العمودي على مستوى الملف وخطوط المجال.",
    "stepByStepSolutionEn": [
      "When the coil plane is perpendicular to the field lines, the magnetic flux $\\Phi_m$ is at its maximum, but the rate of change of flux $\\frac{\\Delta\\Phi_m}{\\Delta t}$ is zero (the sides of the coil move parallel to the flux lines without cutting them). Hence, $\\text{emf} = 0$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف عمودياً على المجال، يكون الفيض المخترق له نهاية عظمى، ولكن معدل قطع خطوط الفيض $\\frac{\\Delta\\Phi_m}{\\Delta t}$ ينعدم لأن أضلاع الملف تتحرك موازية لخطوط الفيض، فتكون $\\text{emf} = 0$."
    ],
    "teacherTipEn": "Crucial contrast: Perpendicular position $\\implies \\Phi_m$ is maximum, but $\\text{emf} = 0$!",
    "teacherTipAr": "مقارنة جوهرية: في الوضع العمودي يكون الفيض $\\Phi_m$ نهاية عظمى، بينما $\\text{emf}$ تساوي صفراً!"
  },
  {
    "id": "phys_ch3_db_easy_26",
    "titleEn": "Coil Orientation for Maximum Induced EMF in a Dynamo",
    "titleAr": "وضع الملف عندما تكون القوة الدافعة المستحثة نهاية عظمى",
    "difficulty": "easy",
    "questionEn": "The induced electromotive force in an AC dynamo reaches its MAXIMUM value ($\\text{emf}_{\\max}$) when the plane of the coil is:",
    "questionAr": "تصل القوة الدافعة الكهربية المستحثة في دينامو التيار المتردد إلى قيمتها العظمى ($\\text{emf}_{\\max}$) عندما يكون مستوى الملف:",
    "optionsEn": [
      "Perpendicular to the magnetic flux lines",
      "Parallel to the magnetic flux lines",
      "Inclined at $30^\\circ$ to the magnetic flux lines",
      "Inclined at $45^\\circ$ to the magnetic flux lines"
    ],
    "optionsAr": [
      "عمودياً على خطوط الفيض المغناطيسي",
      "موازياً لخطوط الفيض المغناطيسي",
      "مائلاً بزاوية $30^\\circ$ على خطوط الفيض المغناطيسي",
      "مائلاً بزاوية $45^\\circ$ على خطوط الفيض المغناطيسي"
    ],
    "correctAnswer": "Parallel to the magnetic flux lines",
    "correctIndex": 1,
    "hintEn": "When parallel, the normal to the coil is perpendicular to the field ($\\theta = 90^\\circ$), so $\\sin 90^\\circ = 1$.",
    "hintAr": "عندما يكون الملف موازياً للمجال، يكون العمودي على الملف عمودياً على خطوط المجال ($\\theta = 90^\\circ$).",
    "stepByStepSolutionEn": [
      "When the coil plane is parallel to the magnetic field, the sides of the coil cut across the flux lines perpendicularly at maximum rate ($\\frac{\\Delta\\Phi_m}{\\Delta t} = \\text{maximum}$). Thus, $\\text{emf} = \\text{emf}_{\\max} = N B A \\omega$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف موازياً لخطوط المجال، تتحرك أضلاعه الطولية عمودياً على خطوط الفيض بأقصى سرعة قطع، فيكون المعدل الزمني للقطع نهاية عظمى وتصل $\\text{emf}$ إلى قيمتها العظمى $\\text{emf}_{\\max} = N B A \\omega$."
    ],
    "teacherTipEn": "Parallel position: $\\Phi_m = 0$, but $\\text{emf} = \\text{emf}_{\\max}$.",
    "teacherTipAr": "في الوضع الموازي: الفيض $\\Phi_m = 0$ بينما $\\text{emf}$ تكون قيمة عظمى."
  },
  {
    "id": "phys_ch3_db_easy_27",
    "titleEn": "Instantaneous Electromotive Force Formula of a Dynamo",
    "titleAr": "قانون القوة الدافعة اللحظية للدينامو",
    "difficulty": "easy",
    "questionEn": "The instantaneous electromotive force ($\\text{emf}_t$) generated by a dynamo coil rotating with angular velocity $\\omega$ after time $t$ from the neutral (perpendicular) position is:",
    "questionAr": "تُحسب القوة الدافعة الكهربية اللحظية ($\\text{emf}_t$) المتولدة من ملف دينامو يدور بسرعة زاوية $\\omega$ بعد زمن $t$ بدءاً من الوضع العمودي بالعلاقة:",
    "optionsEn": [
      "$\\text{emf}_t = \\frac{N B A}{\\omega} \\cos(2\\pi f t)$",
      "$\\text{emf}_t = N B A \\omega^2 t$",
      "$\\text{emf}_t = N B A \\omega \\sin(2\\pi f t)$",
      "$\\text{emf}_t = \\frac{N B}{A \\omega} \\tan(2\\pi f t)$"
    ],
    "optionsAr": [
      "$\\text{emf}_t = \\frac{N B A}{\\omega} \\cos(2\\pi f t)$",
      "$\\text{emf}_t = N B A \\omega^2 t$",
      "$\\text{emf}_t = N B A \\omega \\sin(2\\pi f t)$",
      "$\\text{emf}_t = \\frac{N B}{A \\omega} \\tan(2\\pi f t)$"
    ],
    "correctAnswer": "$\\text{emf}_t = N B A \\omega \\sin(2\\pi f t)$",
    "correctIndex": 2,
    "hintEn": "Angular velocity is $\\omega = 2\\pi f$ (in rad/s), while inside the sine $\\theta = 360^\\circ f t$.",
    "hintAr": "السرعة الزاوية $\\omega = 2\\pi f$ بالراديان/ثانية، وداخل دالة الجيب $\\theta = 360^\\circ f t$ بالدرجات.",
    "stepByStepSolutionEn": [
      "The general equation for the dynamo is $\\text{emf}_t = \\text{emf}_{\\max} \\sin\\theta = N B A \\omega \\sin(\\omega t) = N B A \\omega \\sin(2\\pi f t)$, where the coil starts rotating from the zero (perpendicular) position."
    ],
    "stepByStepSolutionAr": [
      "المعادلة العامة لدينامو التيار المتردد هي: $\\text{emf}_t = \\text{emf}_{\\max} \\sin\\theta = N B A \\omega \\sin(2\\pi f t)$، حيث يبدأ الدوران من الوضع العمودي (الصفر)."
    ],
    "teacherTipEn": "When calculating inside $\\sin(\\dots)$, use $\\pi = 180^\\circ$, whereas for $\\omega = 2\\pi f$ outside the sine, use $\\pi = \\frac{22}{7}$ or $3.14$.",
    "teacherTipAr": "انتبه: قيمة $\\pi$ داخل زاوية الجيب تعوض بـ $180^\\circ$، وخارجها في $\\omega$ تعوض بـ $22/7$ أو $3.14$."
  },
  {
    "id": "phys_ch3_db_easy_28",
    "titleEn": "Angular Velocity and Frequency Relationship",
    "titleAr": "العلاقة بين السرعة الزاوية والتردد الخطي",
    "difficulty": "easy",
    "questionEn": "If the armature of an AC dynamo rotates at a frequency $f = 50\\text{ Hz}$, its angular velocity $\\omega$ is equal to:",
    "questionAr": "إذا دار ملف دينامو بتردد $f = 50\\text{ Hz}$، فإن سرعته الزاوية $\\omega$ تساوي تقريباً:",
    "optionsEn": [
      "$50\\pi\\text{ rad/s} \\approx 157.08\\text{ rad/s}$",
      "$25\\pi\\text{ rad/s} \\approx 78.54\\text{ rad/s}$",
      "$200\\pi\\text{ rad/s} \\approx 628.32\\text{ rad/s}$",
      "$100\\pi\\text{ rad/s} \\approx 314.16\\text{ rad/s}$"
    ],
    "optionsAr": [
      "$50\\pi\\text{ rad/s} \\approx 157.08\\text{ rad/s}$",
      "$25\\pi\\text{ rad/s} \\approx 78.54\\text{ rad/s}$",
      "$200\\pi\\text{ rad/s} \\approx 628.32\\text{ rad/s}$",
      "$100\\pi\\text{ rad/s} \\approx 314.16\\text{ rad/s}$"
    ],
    "correctAnswer": "$100\\pi\\text{ rad/s} \\approx 314.16\\text{ rad/s}$",
    "correctIndex": 3,
    "hintEn": "$\\omega = 2\\pi f$.",
    "hintAr": "$\\omega = 2\\pi f$.",
    "stepByStepSolutionEn": [
      "$\\omega = 2\\pi f = 2\\pi \\times 50 = 100\\pi\\text{ rad/s} \\approx 314.16\\text{ rad/s}$."
    ],
    "stepByStepSolutionAr": [
      "$\\omega = 2\\pi f = 2\\pi \\times 50 = 100\\pi\\text{ rad/s} \\approx 314.16\\text{ rad/s}$."
    ],
    "teacherTipEn": "$50\\text{ Hz} \\implies 100\\pi\\text{ rad/s}$ is the standard Egyptian national grid frequency.",
    "teacherTipAr": "$50\\text{ Hz} \\implies 100\\pi\\text{ rad/s}$ هو التردد المعتمد للشبكة الكهربية في مصر."
  },
  {
    "id": "phys_ch3_db_easy_29",
    "titleEn": "Effective (RMS) Value of Alternating Current",
    "titleAr": "القيمة الفعالة للتيار المتردد",
    "difficulty": "easy",
    "questionEn": "The effective value (RMS) of an alternating current is defined as:",
    "questionAr": "تُعرّف القيمة الفعالة للتيار المتردد بأنها:",
    "optionsEn": [
      "The direct current that generates the same thermal energy in a given resistor in the same time",
      "The arithmetic average of the instantaneous values over one complete cycle",
      "The maximum peak value attained by the current divided by 2",
      "The value of current at which the inductive reactance equals resistance"
    ],
    "optionsAr": [
      "شدة التيار المستمر الذي يولد نفس كمية الحرارة في نفس المقاومة وخلال نفس الزمن",
      "المتوسط الحسابي للقيم اللحظية للتيار خلال دورة كاملة",
      "نصف القيمة العظمى التي يصل إليها التيار المتردد",
      "قيمة التيار التي تتساوى عندها المفاعلة الحثية مع المقاومة"
    ],
    "correctAnswer": "The direct current that generates the same thermal energy in a given resistor in the same time",
    "correctIndex": 0,
    "hintEn": "AC changes direction and magnitude, so thermal equivalence with DC is used.",
    "hintAr": "يتغير التيار المتردد مقداراً واتجاهاً، لذا يقاس بتأثيره الحراري مقارنة بالتيار المستمر.",
    "stepByStepSolutionEn": [
      "Because AC has no net charge transfer over a complete cycle (average is zero), its effectiveness is measured by its Joule heating effect ($P = I^2 R$). The effective value is the equivalent steady DC that produces the same heat in the same resistance over the same time."
    ],
    "stepByStepSolutionAr": [
      "لأن متوسط التيار المتردد خلال دورة كاملة يساوي صفراً، تقاس فاعليته بتأثيره الحراري ($P = I^2 R$). وتعرف القيمة الفعالة بأنها شدة التيار المستمر الذي يولد نفس كمية الطاقة الحرارية في نفس الموصل وخلال نفس الفترة الزمنية."
    ],
    "teacherTipEn": "Hot-wire ammeters measure effective values because heat depends on $I^2$.",
    "teacherTipAr": "الأميتر الحراري يقيس القيمة الفعالة لأن التأثير الحراري يعتمد على مربع شدة التيار."
  },
  {
    "id": "phys_ch3_db_easy_30",
    "titleEn": "Relationship Between Maximum and Effective EMF",
    "titleAr": "العلاقة بين القيمة العظمى والقيمة الفعالة للقوة الدافعة",
    "difficulty": "easy",
    "questionEn": "The mathematical relationship between the effective electromotive force ($\\text{emf}_{\\text{eff}}$) and the maximum electromotive force ($\\text{emf}_{\\max}$) is:",
    "questionAr": "العلاقة الرياضية بين القيمة الفعالة للقوة الدافعة الكهربية ($\\text{emf}_{\\text{eff}}$) والقيمة العظمى لها ($\\text{emf}_{\\max}$) هي:",
    "optionsEn": [
      "$\\text{emf}_{\\text{eff}} = \\sqrt{2}\\,\\text{emf}_{\\max} \\approx 1.414\\,\\text{emf}_{\\max}$",
      "$\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$",
      "$\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{2} = 0.5\\,\\text{emf}_{\\max}$",
      "$\\text{emf}_{\\text{eff}} = \\frac{2}{\\pi}\\,\\text{emf}_{\\max} \\approx 0.636\\,\\text{emf}_{\\max}$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\text{eff}} = \\sqrt{2}\\,\\text{emf}_{\\max} \\approx 1.414\\,\\text{emf}_{\\max}$",
      "$\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$",
      "$\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{2} = 0.5\\,\\text{emf}_{\\max}$",
      "$\\text{emf}_{\\text{eff}} = \\frac{2}{\\pi}\\,\\text{emf}_{\\max} \\approx 0.636\\,\\text{emf}_{\\max}$"
    ],
    "correctAnswer": "$\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$",
    "correctIndex": 1,
    "hintEn": "$\\text{emf}_{\\text{eff}} = \\text{emf}_{\\max} \\sin 45^\\circ$.",
    "hintAr": "$\\text{emf}_{\\text{eff}} = \\text{emf}_{\\max} \\sin 45^\\circ$.",
    "stepByStepSolutionEn": [
      "The effective value of a sinusoidal wave is obtained by root-mean-square: $\\text{emf}_{\\text{eff}} = \\text{emf}_{\\max} \\sin 45^\\circ = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$."
    ],
    "stepByStepSolutionAr": [
      "تُحسب القيمة الفعالة للجهد الجيبي بالعلاقة: $\\text{emf}_{\\text{eff}} = \\text{emf}_{\\max} \\sin 45^\\circ = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$."
    ],
    "teacherTipEn": "Whenever an AC voltage is cited without specification (e.g., $220\\text{ V}$), it is always the effective value.",
    "teacherTipAr": "أي قيمة لجهد أو تيار متردد تُذكر دون تحديد (مثل $220\\text{ V}$) هي دائماً القيمة الفعالة."
  },
  {
    "id": "phys_ch3_db_easy_31",
    "titleEn": "Angle at Which Instantaneous EMF Equals Effective EMF",
    "titleAr": "الزاوية التي تتساوى عندها القوة الدافعة اللحظية مع الفعالة",
    "difficulty": "easy",
    "questionEn": "The instantaneous electromotive force of an AC dynamo equals its effective value when the angle between the plane of the coil and the magnetic field lines is:",
    "questionAr": "تتساوى القوة الدافعة الكهربية اللحظية لدينامو مع قيمتها الفعالة عندما تصنع زاوية مستوى الملف مع خطوط المجال المغناطيسي زاوية مقدارها:",
    "optionsEn": [
      "$30^\\circ$",
      "$60^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "$30^\\circ$",
      "$60^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$"
    ],
    "correctAnswer": "$45^\\circ$",
    "correctIndex": 2,
    "hintEn": "Since $\\text{emf}_t = \\text{emf}_{\\max} \\sin\\theta_{\\text{normal}}$ and $\\text{emf}_{\\text{eff}} = \\text{emf}_{\\max} \\sin 45^\\circ$.",
    "hintAr": "بما أن $\\text{emf}_t = \\text{emf}_{\\max} \\sin\\theta_{\\text{العمودي}}$ وتساوي $\\text{emf}_{\\max} \\sin 45^\\circ$.",
    "stepByStepSolutionEn": [
      "The instantaneous value equals the effective value when $\\sin\\theta = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$. Since the angle with the normal is $45^\\circ$, the angle between the coil plane itself and the magnetic field is $90^\\circ - 45^\\circ = 45^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "تتساوى القيمة اللحظية مع الفعالة عندما يكون $\\sin\\theta = \\frac{1}{\\sqrt{2}}$ أي أن الزاوية مع العمودي $\\theta = 45^\\circ$، وبالتالي فإن زاوية ميل مستوى الملف نفسه على المجال هي أيضاً $90^\\circ - 45^\\circ = 45^\\circ$."
    ],
    "teacherTipEn": "At $\\theta = 45^\\circ$, the angle with the field and the angle with the normal are identical.",
    "teacherTipAr": "عند زاوية $45^\\circ$ تتساوى الزاوية مع المجال مع الزاوية مع العمودي على المجال."
  },
  {
    "id": "phys_ch3_db_easy_32",
    "titleEn": "Angle at Which Instantaneous EMF Equals Half Maximum EMF",
    "titleAr": "الزاوية التي تصل عندها القوة الدافعة اللحظية إلى نصف قيمتها العظمى",
    "difficulty": "easy",
    "questionEn": "In an AC dynamo, the instantaneous electromotive force equals half of its maximum value ($\\frac{1}{2}\\text{emf}_{\\max}$) when the normal to the coil makes an angle with the magnetic field of:",
    "questionAr": "في دينامو التيار المتردد، تصل القوة الدافعة الكهربية المستحثة اللحظية إلى نصف قيمتها العظمى عندما يصنع العمودي على مستوى الملف مع خطوط المجال زاوية قدرها:",
    "optionsEn": [
      "$60^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$",
      "$30^\\circ$"
    ],
    "optionsAr": [
      "$60^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$",
      "$30^\\circ$"
    ],
    "correctAnswer": "$30^\\circ$",
    "correctIndex": 3,
    "hintEn": "$\\sin 30^\\circ = 0.5$.",
    "hintAr": "$\\sin 30^\\circ = 0.5$.",
    "stepByStepSolutionEn": [
      "Since $\\text{emf}_t = \\text{emf}_{\\max} \\sin\\theta$, when $\\text{emf}_t = \\frac{1}{2}\\text{emf}_{\\max}$, we have $\\sin\\theta = 0.5 \\implies \\theta = 30^\\circ$, where $\\theta$ is the angle between the normal to the coil plane and the magnetic field."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\text{emf}_t = \\text{emf}_{\\max} \\sin\\theta$، فلكي تكون $\\text{emf}_t = \\frac{1}{2}\\text{emf}_{\\max}$ يجب أن يكون $\\sin\\theta = 0.5$ أي أن الزاوية بين العمودي على مستوى الملف وخطوط المجال تساوي $30^\\circ$."
    ],
    "teacherTipEn": "Be careful: If the question asks for the angle between the plane of the coil and the field, it would be $60^\\circ$ ($90^\\circ - 30^\\circ$).",
    "teacherTipAr": "انتبه: إذا طلبت زاوية مستوى الملف مع المجال نفسه تكون $60^\\circ$ ($90^\\circ - 30^\\circ$)."
  },
  {
    "id": "phys_ch3_db_easy_33",
    "titleEn": "Average EMF Over One Complete Cycle of Dynamo",
    "titleAr": "متوسط القوة الدافعة خلال دورة كاملة للدينامو",
    "difficulty": "easy",
    "questionEn": "The average electromotive force generated by an AC dynamo over one complete rotation (one full cycle) is equal to:",
    "questionAr": "متوسط القوة الدافعة الكهربية المستحثة في ملف الدينامو خلال دورة كاملة يساوي:",
    "optionsEn": [
      "Zero",
      "$\\text{emf}_{\\max}$",
      "$\\frac{2}{\\pi}\\text{emf}_{\\max}$",
      "$\\frac{\\text{emf}_{\\max}}{\\sqrt{2}}$"
    ],
    "optionsAr": [
      "صفراً",
      "$\\text{emf}_{\\max}$",
      "$\\frac{2}{\\pi}\\text{emf}_{\\max}$",
      "$\\frac{\\text{emf}_{\\max}}{\\sqrt{2}}$"
    ],
    "correctAnswer": "Zero",
    "correctIndex": 0,
    "hintEn": "The positive half-cycle cancels the negative half-cycle.",
    "hintAr": "الجهد في نصف الدورة الموجب يلغي الجهد في نصف الدورة السالب تماماً.",
    "stepByStepSolutionEn": [
      "Over one complete cycle, the total change in magnetic flux is zero ($\\Delta\\Phi_m = 0$). Alternatively, the induced emf in the first half cycle is equal in magnitude and opposite in direction to that in the second half cycle, so the average value over a full period is zero."
    ],
    "stepByStepSolutionAr": [
      "خلال دورة كاملة يعود الملف إلى نفس وضعه الابتدائي فيكون التغير الكلي في الفيض صفراً ($\\Delta\\Phi_m = 0$). كما أن القوة الدافعة في نصف الدورة الأول تساوي تماماً وتعاكس في الاتجاه القوة الدافعة في النصف الثاني، فيكون المتوسط صفراً."
    ],
    "teacherTipEn": "$\\text{emf}_{\\text{avg}}$ over 1 cycle = 0; over 1/2 cycle from zero = $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال دورة كاملة = صفر؛ بينما خلال نصف دورة من الوضع العمودي = $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_easy_34",
    "titleEn": "Average EMF Over a Quarter Cycle from Zero Position",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة",
    "difficulty": "easy",
    "questionEn": "The average electromotive force induced in an AC dynamo during a quarter of a cycle starting from the zero (perpendicular) position is equal to:",
    "questionAr": "متوسط القوة الدافعة الكهربية المستحثة في ملف الدينامو خلال ربع دورة بدءاً من الوضع العمودي (الصفر) يساوي:",
    "optionsEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{\\text{emf}_{\\max}}{2}$",
      "$\\text{emf}_{\\text{avg}} = \\frac{4 N B A f}{\\pi} = \\frac{2}{\\pi}\\text{emf}_{\\max}$",
      "$\\text{emf}_{\\text{avg}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}}$",
      "$\\text{emf}_{\\text{avg}} = 2\\pi\\,\\text{emf}_{\\max}$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{\\text{emf}_{\\max}}{2}$",
      "$\\text{emf}_{\\text{avg}} = \\frac{4 N B A f}{\\pi} = \\frac{2}{\\pi}\\text{emf}_{\\max}$",
      "$\\text{emf}_{\\text{avg}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}}$",
      "$\\text{emf}_{\\text{avg}} = 2\\pi\\,\\text{emf}_{\\max}$"
    ],
    "correctAnswer": "$\\text{emf}_{\\text{avg}} = \\frac{4 N B A f}{\\pi} = \\frac{2}{\\pi}\\text{emf}_{\\max}$",
    "correctIndex": 1,
    "hintEn": "Use Faraday's law: $\\Delta t = \\frac{T}{4} = \\frac{1}{4f}$ and $\\Delta\\Phi_m = B A$.",
    "hintAr": "استخدم قانون فاراداي: $\\Delta t = \\frac{T}{4} = \\frac{1}{4f}$ والتغير في الفيض $\\Delta\\Phi_m = B A$.",
    "stepByStepSolutionEn": [
      "In a quarter turn from perpendicular, $\\Phi_m$ changes from $BA$ to $0$, so $|\\Delta\\Phi_m| = BA$. The time is $\\Delta t = \\frac{T}{4} = \\frac{1}{4f}$. By Faraday's law: $\\text{emf}_{\\text{avg}} = N \\frac{BA}{1/(4f)} = 4 N B A f$. Since $\\text{emf}_{\\max} = 2\\pi N B A f$, it follows that $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi}\\text{emf}_{\\max}$."
    ],
    "stepByStepSolutionAr": [
      "خلال ربع دورة من الوضع العمودي، يتغير الفيض من $BA$ إلى الصفر فتكون $|\\Delta\\Phi_m| = BA$، والزمن $\\Delta t = \\frac{1}{4f}$. من قانون فاراداي: $\\text{emf}_{\\text{avg}} = N \\frac{BA}{1/(4f)} = 4 N B A f$. وبما أن $\\text{emf}_{\\max} = 2\\pi N B A f$، فإن $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi}\\text{emf}_{\\max}$."
    ],
    "teacherTipEn": "Remarkably, average EMF over 1/4 cycle equals average EMF over 1/2 cycle from perpendicular position.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي تماماً متوسط $\\text{emf}$ خلال نصف دورة من الوضع العمودي."
  },
  {
    "id": "phys_ch3_db_easy_35",
    "titleEn": "Converting AC Dynamo to Unidirectional Pulsating Current",
    "titleAr": "تحويل دينامو التيار المتردد إلى تيار موحد الاتجاه",
    "difficulty": "easy",
    "questionEn": "To convert an AC dynamo into a generator that produces a unidirectional pulsating direct current, we replace:",
    "questionAr": "لتحويل دينامو التيار المتردد إلى مولد ينتج تياراً موحد الاتجاه نابضاً، نستبدل:",
    "optionsEn": [
      "The armature coil with a permanent bar magnet",
      "The carbon brushes with thick solid copper blocks",
      "The two slip rings with a single metallic split-ring commutator (two isolated halves)",
      "The soft iron core with a non-magnetic ceramic core"
    ],
    "optionsAr": [
      "ملف الدينامو بقضيب مغناطيسي دائم",
      "فرشتي الجرافيت بكتل من النحاس المصمت",
      "حلقتي الانزلاق بأسطوانة معدنية مشقوقة إلى نصفين معزولين (مقوم معدني)",
      "القلب الحديدي المطاوع بقلب من الخزف غير المغناطيسي"
    ],
    "correctAnswer": "The two slip rings with a single metallic split-ring commutator (two isolated halves)",
    "correctIndex": 2,
    "hintEn": "A split cylinder reverses connections every half turn.",
    "hintAr": "الأسطوانة المشقوقة تعكس اتجاه التوصيل بالدائرة الخارجية كل نصف دورة.",
    "stepByStepSolutionEn": [
      "Replacing the two slip rings with a commutator (a split metal cylinder divided into two halves separated by an insulating layer) causes the brushes to switch contacts between the two halves every half cycle, keeping the current in the external circuit flowing in a single direction."
    ],
    "stepByStepSolutionAr": [
      "استبدال حلقتي الانزلاق بأسطوانة معدنية مشقوقة طولياً إلى نصفين معزولين (مقوم) يجعل كل نصف يتبادل موضعه مع الفرشتين كل نصف دورة، فيظل اتجاه التيار في الدائرة الخارجية ثابتاً في اتجاه واحد."
    ],
    "teacherTipEn": "Split-ring commutator fixes direction; multiple coils fix magnitude.",
    "teacherTipAr": "شق الأسطوانة يوحد الاتجاه؛ واستخدام عدة ملفات بينها زوايا صغيرة يثبت الشدة."
  },
  {
    "id": "phys_ch3_db_easy_36",
    "titleEn": "Producing Constant Magnitude DC from Dynamo",
    "titleAr": "تثبيت شدة التيار في دينامو التيار المستمر",
    "difficulty": "easy",
    "questionEn": "To obtain an almost constant-magnitude, smooth direct current from a DC generator, we should:",
    "questionAr": "للحصول على تيار مستمر ثابت الشدة تقريباً من المولد الكهربي، يجب:",
    "optionsEn": [
      "Increase the rotational speed of the single coil tenfold",
      "Replace the soft iron core with an air core",
      "Use a very thick single loop and increase battery voltage",
      "Use multiple coils with small equal angles between them, dividing the commutator into twice as many segments"
    ],
    "optionsAr": [
      "زيادة سرعة دوران الملف الواحد إلى عشرة أمثالها",
      "استبدال القلب المصنوع من الحديد بقلب هوائي",
      "استخدام لفة واحدة سميكة جداً وزيادة جهد البطارية",
      "استخدام عدة ملفات بين مستوياتها زوايا صغيرة متساوية وتقسيم المقوم إلى ضعف عدد الملفات"
    ],
    "correctAnswer": "Use multiple coils with small equal angles between them, dividing the commutator into twice as many segments",
    "correctIndex": 3,
    "hintEn": "Number of commutator segments must be $2 \\times$ the number of coils.",
    "hintAr": "عدد قطع المقوم المعدني يساوي ضعف عدد الملفات المستخدمة.",
    "stepByStepSolutionEn": [
      "By using several coils positioned at small equal angles, at least one coil will always be in or near the parallel position (cutting flux at maximum rate). Splitting the commutator into twice as many segments as there are coils ensures a continuous, steady DC output voltage."
    ],
    "stepByStepSolutionAr": [
      "باستخدام عدة ملفات بين مستوياتها زوايا صغيرة متساوية، يكون أحد الملفات دائماً في الوضع الموازي (قيمة عظمى)، وتقسيم الأسطوانة إلى عدد من القطع يساوي ضعف عدد الملفات يجعل الخرج تياراً موحد الاتجاه وثابت الشدة تقريباً."
    ],
    "teacherTipEn": "Number of commutator segments = $2 \\times$ number of coils ($2N$).",
    "teacherTipAr": "عدد أجزاء المقوم المعدني = ضعف عدد الملفات ($2 \\times$ عدد الملفات)."
  },
  {
    "id": "phys_ch3_db_easy_37",
    "titleEn": "Scientific Principle of the Electric Transformer",
    "titleAr": "الفكرة العلمية للمحول الكهربي",
    "difficulty": "easy",
    "questionEn": "The scientific operating principle of the electric transformer is:",
    "questionAr": "الأساس العلمي الذي يُبنى عليه عمل المحول الكهربي هو:",
    "optionsEn": [
      "Mutual induction between two coils",
      "Self-induction in a single coil",
      "The magnetic torque on a rectangular loop",
      "The thermoelectric Seebeck effect"
    ],
    "optionsAr": [
      "الحث المتبادل بين ملفين",
      "الحث الذاتي في ملف واحد",
      "عزم الازدواج المغناطيسي المؤثر على ملف مستطيل",
      "التأثير الكهروحراري لسيبيك"
    ],
    "correctAnswer": "Mutual induction between two coils",
    "correctIndex": 0,
    "hintEn": "A transformer transfers alternating power between primary and secondary via magnetic flux.",
    "hintAr": "ينقل المحول الطاقة المتناوبة بين الابتدائي والثانوي بواسطة الفيض المغناطيسي.",
    "stepByStepSolutionEn": [
      "An electric transformer works on the principle of mutual induction between two coils (primary and secondary) wound around a common soft iron core."
    ],
    "stepByStepSolutionAr": [
      "يعتمد عمل المحول الكهربي على ظاهرة الحث المتبادل بين ملفين (ابتدائي وثانوي) ملفوفين حول قلب مغلق مشترك من الحديد المطاوع."
    ],
    "teacherTipEn": "Transformers only work with alternating current (AC), never steady direct current (DC).",
    "teacherTipAr": "يعمل المحول بالتيار المتردد فقط ولا يعمل بالتيار المستمر الثابت."
  },
  {
    "id": "phys_ch3_db_easy_38",
    "titleEn": "Why Transformers Cannot Work on Direct Current (DC)",
    "titleAr": "سبب عدم عمل المحول الكهربي بالتيار المستمر",
    "difficulty": "easy",
    "questionEn": "An electric transformer does NOT function when its primary coil is connected to a DC source (battery) because:",
    "questionAr": "لا يعمل المحول الكهربي إذا اتصل ملفه الابتدائي بمصدر تيار مستمر (بطارية) لأن:",
    "optionsEn": [
      "DC burns the copper insulation instantly due to zero resistance",
      "DC produces a constant magnetic flux, so the time rate of change of flux is zero ($\\frac{\\Delta\\Phi_m}{\\Delta t} = 0$)",
      "The iron core becomes completely demagnetized in the presence of DC",
      "Direct current has an infinite frequency which stops magnetic induction"
    ],
    "optionsAr": [
      "التيار المستمر يحرق عازل النحاس فوراً لانعدام المقاومة",
      "التيار المستمر يولد فيضاً مغناطيسياً ثابتاً، فيكون المعدل الزمني للتغير في الفيض صفراً ($\\frac{\\Delta\\Phi_m}{\\Delta t} = 0$)",
      "القلب الحديدي يفقد مغناطيسيته تماماً في وجود تيار مستمر",
      "التيار المستمر له تردد لا نهائي يوقف الحث المغناطيسي"
    ],
    "correctAnswer": "DC produces a constant magnetic flux, so the time rate of change of flux is zero ($\\frac{\\Delta\\Phi_m}{\\Delta t} = 0$)",
    "correctIndex": 1,
    "hintEn": "Faraday's law requires changing flux: $\\text{emf}_2 = -N_2 \\frac{\\Delta\\Phi_m}{\\Delta t}$.",
    "hintAr": "الحث يتطلب تغيراً في الفيض: $\\text{emf}_2 = -N_2 \\frac{\\Delta\\Phi_m}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "A steady DC produces a constant magnetic field. Since the magnetic flux linking the secondary coil does not change with time ($\\frac{\\Delta\\Phi_m}{\\Delta t} = 0$), no electromotive force is induced in the secondary coil."
    ],
    "stepByStepSolutionAr": [
      "يولد التيار المستمر فيضاً مغناطيسياً ثابتاً في المقدار والاتجاه، وبالتالي لا يحدث تغير في الفيض القاطع للملف الثانوي ($\\frac{\\Delta\\Phi_m}{\\Delta t} = 0$) فلا تتولد فيه قوة دافعة مستحثة."
    ],
    "teacherTipEn": "A momentary pulse of EMF appears only when closing or opening the DC switch.",
    "teacherTipAr": "قد تتولد نبضة لحظية فقط عند غلق أو فتح دائرة التيار المستمر ثم تنعدم."
  },
  {
    "id": "phys_ch3_db_easy_39",
    "titleEn": "Step-Up Electric Transformer Characteristics",
    "titleAr": "خصائص المحول الرافع للجهد",
    "difficulty": "easy",
    "questionEn": "In an ideal step-up electric transformer ($V_s > V_p$):",
    "questionAr": "في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
    "optionsEn": [
      "$N_s < N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s < I_p$ (steps up voltage, steps down current)",
      "$N_s = N_p$ and power is doubled"
    ],
    "optionsAr": [
      "$N_s < N_p$ و $I_s > I_p$",
      "$N_s > N_p$ و $I_s > I_p$",
      "$N_s > N_p$ و $I_s < I_p$ (يرفع الجهد ويخفض شدة التيار)",
      "$N_s = N_p$ وتتضاعف القدرة الكهربية"
    ],
    "correctAnswer": "$N_s > N_p$ and $I_s < I_p$ (steps up voltage, steps down current)",
    "correctIndex": 2,
    "hintEn": "By conservation of energy: $P_p = P_s \\implies V_p I_p = V_s I_s$.",
    "hintAr": "من قانون بقاء الطاقة: القدرة ثابتة $V_p I_p = V_s I_s$.",
    "stepByStepSolutionEn": [
      "A step-up transformer has more secondary turns than primary turns ($N_s > N_p$), so it increases voltage ($V_s > V_p$). By conservation of energy ($P = V I = \\text{const}$), the secondary current must decrease ($I_s < I_p$)."
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يحتوي على عدد لفات ثانوي أكبر من الابتدائي ($N_s > N_p$) ليرفع الجهد ($V_s > V_p$). وطبقاً لقانون بقاء الطاقة تكون القدرة ثابتة في المحول المثالي ($V_p I_p = V_s I_s$)، مما يجعله خافضاً لشدة التيار ($I_s < I_p$)."
    ],
    "teacherTipEn": "A transformer is not a source of energy: stepping up voltage must step down current.",
    "teacherTipAr": "المحول لا يولد طاقة: رفع الجهد يقابله بالضرورة خفض في شدة التيار."
  },
  {
    "id": "phys_ch3_db_easy_40",
    "titleEn": "Step-Down Electric Transformer Characteristics",
    "titleAr": "خصائص المحول الخافض للجهد",
    "difficulty": "easy",
    "questionEn": "In an ideal step-down electric transformer ($V_s < V_p$):",
    "questionAr": "في المحول الكهربي المثالي الخافض للجهد ($V_s < V_p$):",
    "optionsEn": [
      "$N_s > N_p$ and $I_s < I_p$",
      "$N_s < N_p$ and $I_s < I_p$",
      "$N_s = N_p$ and frequency is reduced",
      "$N_s < N_p$ and $I_s > I_p$ (steps down voltage, steps up current)"
    ],
    "optionsAr": [
      "$N_s > N_p$ و $I_s < I_p$",
      "$N_s < N_p$ و $I_s < I_p$",
      "$N_s = N_p$ وينخفض التردد",
      "$N_s < N_p$ و $I_s > I_p$ (يخفض الجهد ويرفع شدة التيار)"
    ],
    "correctAnswer": "$N_s < N_p$ and $I_s > I_p$ (steps down voltage, steps up current)",
    "correctIndex": 3,
    "hintEn": "Fewer secondary turns reduce voltage while increasing current.",
    "hintAr": "قلة عدد لفات الثانوي تخفض الجهد وتزيد شدة التيار.",
    "stepByStepSolutionEn": [
      "A step-down transformer has $N_s < N_p$, decreasing voltage ($V_s < V_p$) and correspondingly increasing current ($I_s > I_p$) to conserve electric power."
    ],
    "stepByStepSolutionAr": [
      "المحول الخافض للجهد تكون فيه عدد لفات الملف الثانوي أقل من الابتدائي ($N_s < N_p$)، فيقلل فرق الجهد ($V_s < V_p$) وتزداد شدة التيار في دائرة الثانوي ($I_s > I_p$)."
    ],
    "teacherTipEn": "Step-down transformers are installed near consumer homes.",
    "teacherTipAr": "المحولات الخافضة تُركب بالقرب من منازل المستهلكين ومناطق الاستهلاك."
  },
  {
    "id": "phys_ch3_db_easy_41",
    "titleEn": "Frequency of Alternating Current in a Transformer",
    "titleAr": "تردد التيار المتردد في المحول الكهربي",
    "difficulty": "easy",
    "questionEn": "If an alternating voltage of frequency $50\\text{ Hz}$ is applied to the primary coil of a step-up transformer, the frequency of the alternating voltage output from the secondary coil is:",
    "questionAr": "إذا طُبّق جهد متردد تردده $50\\text{ Hz}$ على الملف الابتدائي لمحول رافع للجهد، فإن تردد الجهد الناتج من الملف الثانوي يكون:",
    "optionsEn": [
      "$50\\text{ Hz}$ (frequency remains unchanged)",
      "$100\\text{ Hz}$",
      "$25\\text{ Hz}$",
      "$0\\text{ Hz}$"
    ],
    "optionsAr": [
      "$50\\text{ Hz}$ (يظل التردد ثابتاً دون تغيير)",
      "$100\\text{ Hz}$",
      "$25\\text{ Hz}$",
      "$0\\text{ Hz}$"
    ],
    "correctAnswer": "$50\\text{ Hz}$ (frequency remains unchanged)",
    "correctIndex": 0,
    "hintEn": "The rate of flux pulsation is identical in both coils.",
    "hintAr": "معدل تغير الفيض المغناطيسي هو نفسه في كلا الملفين المشتركين في القلب.",
    "stepByStepSolutionEn": [
      "A transformer alters voltage and current, but it CANNOT alter the frequency of the alternating current. The magnetic flux oscillates at the same frequency $f$ throughout the iron core, so $f_{\\text{secondary}} = f_{\\text{primary}} = 50\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "يغير المحول الجهد والتيار، لكنه لا يغير التردد إطلاقاً؛ لأن الفيض المغناطيسي المتولد في القلب يتغير بنفس التردد في الملفين، وعليه فإن $f_s = f_p = 50\\text{ Hz}$."
    ],
    "teacherTipEn": "A classic conceptual test point: Transformers never change frequency!",
    "teacherTipAr": "قاعدة امتحانية هامة: المحول الكهربي لا يغير تردد التيار إطلاقاً!"
  },
  {
    "id": "phys_ch3_db_easy_42",
    "titleEn": "Ideal Transformer Voltage and Current Formula",
    "titleAr": "علاقة الجهد والتيار واللفات في المحول المثالي",
    "difficulty": "easy",
    "questionEn": "For an ideal electric transformer, the relationship connecting voltages, currents, and number of turns is:",
    "questionAr": "في المحول الكهربي المثالي، العلاقة التي تربط بين الجهود والتيارات وعدد اللفات هي:",
    "optionsEn": [
      "$\\frac{V_s}{V_p} = \\frac{N_p}{N_s} = \\frac{I_p}{I_s}$",
      "$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$",
      "$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_s}{I_p}$",
      "$\\frac{V_s}{V_p} = \\left(\\frac{N_s}{N_p}\\right)^2 = \\frac{I_s}{I_p}$"
    ],
    "optionsAr": [
      "$\\frac{V_s}{V_p} = \\frac{N_p}{N_s} = \\frac{I_p}{I_s}$",
      "$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$",
      "$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_s}{I_p}$",
      "$\\frac{V_s}{V_p} = \\left(\\frac{N_s}{N_p}\\right)^2 = \\frac{I_s}{I_p}$"
    ],
    "correctAnswer": "$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$",
    "correctIndex": 1,
    "hintEn": "Voltage is directly proportional to turns, inversely proportional to current.",
    "hintAr": "يتناسب الجهد طردياً مع عدد اللفات وعكسياً مع شدة التيار.",
    "stepByStepSolutionEn": [
      "By Faraday's law, $V \\propto N$, so $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$. In an ideal transformer, input power equals output power: $V_p I_p = V_s I_s \\implies \\frac{V_s}{V_p} = \\frac{I_p}{I_s}$."
    ],
    "stepByStepSolutionAr": [
      "من قانون فاراداي يتناسب الجهد طردياً مع اللفات $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$. وفي المحول المثالي تتساوى القدرة $V_p I_p = V_s I_s$ ومنها $\\frac{V_s}{V_p} = \\frac{I_p}{I_s}$."
    ],
    "teacherTipEn": "Current ratio is inverted relative to voltage ratio: $\\frac{V_s}{V_p} = \\frac{I_p}{I_s}$.",
    "teacherTipAr": "نسبة التيارات معكوسة بالنسبة لنسبة الجهود: $\\frac{V_s}{V_p} = \\frac{I_p}{I_s}$."
  },
  {
    "id": "phys_ch3_db_easy_43",
    "titleEn": "Definition of Transformer Efficiency",
    "titleAr": "تعريف كفاءة المحول الكهربي",
    "difficulty": "easy",
    "questionEn": "The efficiency ($\\eta$) of an electric transformer is defined as:",
    "questionAr": "تُعرّف كفاءة المحول الكهربي ($\\eta$) بأنها:",
    "optionsEn": [
      "The ratio of secondary voltage to primary voltage",
      "The ratio of secondary turns to primary turns",
      "The ratio of the electrical power output from the secondary coil to the electrical power input into the primary coil",
      "The thermal energy dissipated per unit time in the core"
    ],
    "optionsAr": [
      "النسبة بين فرق جهد الملف الثانوي إلى فرق جهد الملف الابتدائي",
      "النسبة بين عدد لفات الملف الثانوي إلى عدد لفات الملف الابتدائي",
      "النسبة بين القدرة الكهربية الناتجة من الملف الثانوي إلى القدرة الكهربية المعطاة للملف الابتدائي",
      "الطاقة الحرارية المفقودة في الثانية الواحدة في القلب الحديدي"
    ],
    "correctAnswer": "The ratio of the electrical power output from the secondary coil to the electrical power input into the primary coil",
    "correctIndex": 2,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\%$.",
    "hintAr": "$\\eta = \\frac{P_s}{P_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "Transformer efficiency is $\\eta = \\frac{\\text{Power}_{\\text{out}}}{\\text{Power}_{\\text{in}}} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$. In real transformers, efficiency is less than $100\\%$ due to thermal and magnetic losses."
    ],
    "stepByStepSolutionAr": [
      "كفاءة المحول هي $\\eta = \\frac{\\text{القدرة الناتجة}}{\\text{القدرة الداخلة}} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$. وفي المحولات الحقيقية تكون الكفاءة أقل من $100\\%$ لوجود فقد في الطاقة."
    ],
    "teacherTipEn": "No real transformer can achieve $100\\%$ efficiency due to internal losses.",
    "teacherTipAr": "لا يوجد محول حقيقي كفاءته $100\\%$ بسبب فقد الطاقة في الأسلاك والقلب."
  },
  {
    "id": "phys_ch3_db_easy_44",
    "titleEn": "Minimizing Ohmic Loss in Transformer Windings",
    "titleAr": "تقليل الفقد الحراري في أسلاك المحول",
    "difficulty": "easy",
    "questionEn": "To minimize electrical energy lost as heat due to the resistance of transformer windings, the coils are made of:",
    "questionAr": "للحد من الطاقة الكهربية المفقودة في صورة حرارة في أسلاك ملفات المحول، تُصنع الأسلاك من:",
    "optionsEn": [
      "Thin iron wires with high mechanical tensile strength",
      "Nichrome wires with high electrical resistance",
      "Lead alloy wires having a low melting point",
      "Thick copper wires having very low electrical resistivity"
    ],
    "optionsAr": [
      "أسلاك رفيعة من الحديد لقوة تحملها الميكانيكية",
      "أسلاك من النيكل كروم لأن مقاومتها الأومية كبيرة",
      "أسلاك من الرصاص لنقطة انصهارها المنخفضة",
      "أسلاك سميكة من النحاس لأن مقاومتها النوعية صغيرة جداً"
    ],
    "correctAnswer": "Thick copper wires having very low electrical resistivity",
    "correctIndex": 3,
    "hintEn": "$R = \\rho_e \\frac{L}{A}$, so small $\\rho_e$ and large $A$ minimize resistance.",
    "hintAr": "$R = \\rho_e \\frac{L}{A}$، لذا المقاومة النوعية الصغيرة ومساحة المقطع الكبيرة تقللان المقاومة.",
    "stepByStepSolutionEn": [
      "From Joule's law, heat loss is $I^2 R$. By using thick copper wire, resistance $R$ is minimized because copper has very low resistivity ($\\rho_e$) and larger cross-sectional area ($A$)."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لقانون جول فإن الفقد الحراري يساوي $I^2 R$. وبصناعة الأسلاك من النحاس السميك تقل المقاومة $R$ نظراً لصغر المقاومة النوعية للنحاس وكبر مساحة مقطع السلك."
    ],
    "teacherTipEn": "In step-up transformers, the primary carries higher current, so it needs thicker wire than the secondary.",
    "teacherTipAr": "في المحول الرافع، يمر بالابتدائي تيار أكبر فيصنع من سلك أكثر سمكاً من الثانوي."
  },
  {
    "id": "phys_ch3_db_easy_45",
    "titleEn": "Minimizing Magnetic Hysteresis Losses in the Core",
    "titleAr": "تقليل فقد الطاقة الميكانيكية في إعادة ترتيب جزيئات القلب",
    "difficulty": "easy",
    "questionEn": "To minimize the energy lost in magnetizing and demagnetizing the core (magnetic hysteresis loss), the transformer core is made of:",
    "questionAr": "للحد من الطاقة الميكانيكية المفقودة في ترتيب وتوجيه الجزيئات المغناطيسية للقلب، يُصنع القلب من:",
    "optionsEn": [
      "Soft silicon iron, whose magnetic domains rearrange easily",
      "Hard carbon steel that retains permanent magnetization",
      "Solid brass alloy",
      "Cast pure aluminum"
    ],
    "optionsAr": [
      "الحديد المطاوع السيليكوني لسهولة حركة جزيئاته ومجالاته المغناطيسية",
      "الصلب الكربوني عالي الصلابة للاحتفاظ بالمغناطيسية",
      "سبيكة النحاس الأصفر المصمتة",
      "الألومنيوم النقي المصبوب"
    ],
    "correctAnswer": "Soft silicon iron, whose magnetic domains rearrange easily",
    "correctIndex": 0,
    "hintEn": "Soft silicon iron has a narrow hysteresis loop, dissipating minimal energy.",
    "hintAr": "الحديد المطاوع السيليكوني يتميز بسهولة مغنطته وإزالة مغنطته وصغر مساحة منحنى التخلف.",
    "stepByStepSolutionEn": [
      "A fluctuating alternating magnetic field constantly reorients the magnetic domains of the core. Using soft silicon iron reduces this mechanical hysteresis loss because its magnetic domains rearrange rapidly with minimal friction."
    ],
    "stepByStepSolutionAr": [
      "يتسبب المجال المغناطيسي المتردد في اهتزاز وإعادة ترتيب الجزيئات المغناطيسية للقلب، ويصنع القلب من الحديد المطاوع السيليكوني لأن جزيئاته المغناطيسية سهلة الحركة والترتيب بأقل استهلاك للطاقة."
    ],
    "teacherTipEn": "Soft silicon iron solves two problems: silicon reduces eddy currents, soft iron reduces hysteresis.",
    "teacherTipAr": "الحديد المطاوع السيليكوني يعالج مشكلتين: السيليكون يقلل التيارات الدوامية، والمطاوع يقلل التخلف المغناطيسي."
  },
  {
    "id": "phys_ch3_db_easy_46",
    "titleEn": "Minimizing Magnetic Flux Leakage in Transformers",
    "titleAr": "تقليل تسرب خطوط الفيض المغناطيسي في المحول",
    "difficulty": "easy",
    "questionEn": "To minimize the leakage of magnetic flux lines between the primary and secondary coils, modern transformers:",
    "questionAr": "للحد من تسرب خطوط الفيض المغناطيسي خارج مسارها بين الملفين، يتم في المحولات الحديثة:",
    "optionsEn": [
      "Place the primary and secondary coils on completely separate unlinked iron cores",
      "Wind the secondary coil directly over the primary coil, separating them by an insulating sheet",
      "Leave a wide air gap of several centimeters between the two coils",
      "Immerse the entire transformer in boiling salt water"
    ],
    "optionsAr": [
      "وضع الملف الابتدائي والثانوي على قلبين حديديين منفصلين تماماً",
      "لف الملف الثانوي فوق الملف الابتدائي مع عزلهما جيداً بطبقة عازلة",
      "ترك فجوة هوائية واسعة بعدة سنتيمترات بين الملفين",
      "غمر المحول بالكامل في ماء مالح مغلي"
    ],
    "correctAnswer": "Wind the secondary coil directly over the primary coil, separating them by an insulating sheet",
    "correctIndex": 1,
    "hintEn": "Coaxial winding ensures that all flux from the primary cuts the secondary.",
    "hintAr": "اللف المتداخل فوق بعضهما يضمن قطع جميع خطوط فيض الابتدائي للملف الثانوي.",
    "stepByStepSolutionEn": [
      "By winding the secondary coil directly around the primary coil (coaxial winding on the same limb of the iron core) with proper electrical insulation in between, virtually all magnetic flux produced by the primary passes through the secondary, eliminating leakage."
    ],
    "stepByStepSolutionAr": [
      "بلف الملف الثانوي فوق الملف الابتدائي على نفس الساق من القلب الحديدي مع وضع مادة عازلة بينهما، يمر تقريباً كل الفيض المغناطيسي المتولد من الابتدائي عبر لفات الثانوي فيقل التسرب إلى أدنى حد."
    ],
    "teacherTipEn": "Coaxial winding on a closed core ensures maximum magnetic coupling coefficient.",
    "teacherTipAr": "اللف المتداخل على قلب مغلق يضمن أعلى معامل ترابط مغناطيسي."
  },
  {
    "id": "phys_ch3_db_easy_47",
    "titleEn": "High-Voltage Long-Distance Electrical Transmission Principle",
    "titleAr": "الأساس العلمي لنقل الطاقة الكهربية بجهود فائقة",
    "difficulty": "easy",
    "questionEn": "Electrical power generated at power stations is transmitted over long transmission lines at very high voltages and low currents in order to:",
    "questionAr": "تُنقل الطاقة الكهربية من محطات التوليد إلى أماكن الاستهلاك عبر خطوط النقل عند جهود عالية جداً وتيارات منخفضة لـ:",
    "optionsEn": [
      "Increase the frequency of the alternating current sent to homes",
      "Eliminate the electrical resistance of the transmission cables",
      "Minimize power loss in transmission cables ($P_{\\text{loss}} = I^2 R$)",
      "Increase the total energy created during the transmission process"
    ],
    "optionsAr": [
      "زيادة تردد التيار المتردد الواصل إلى المنازل",
      "إلغاء المقاومة الكهربية لأسلاك خطوط النقل تماماً",
      "تقليل القدرة المفقودة في أسلاك التوصيل في صورة حرارة ($P_{\\text{loss}} = I^2 R$)",
      "زيادة الطاقة الكلية المتولدة أثناء عملية النقل"
    ],
    "correctAnswer": "Minimize power loss in transmission cables ($P_{\\text{loss}} = I^2 R$)",
    "correctIndex": 2,
    "hintEn": "Power lost in cables depends directly on $I^2$. Reducing $I$ minimizes loss.",
    "hintAr": "القدرة المفقودة في الأسلاك تعتمد على مربع شدة التيار $I^2$، لذا خفض التيار يقلل الفقد بدرجة هائلة.",
    "stepByStepSolutionEn": [
      "The thermal power dissipated in transmission cables is given by $P_{\\text{loss}} = I^2 R$. By using a step-up transformer at the power plant, the voltage is raised tremendously and the current $I$ is reduced proportionally. Since $P_{\\text{loss}} \\propto I^2$, reducing current dramatically minimizes power losses in cables."
    ],
    "stepByStepSolutionAr": [
      "القدرة المستهلكة في أسلاك النقل هي $P = I^2 R$. باستخدام محول رافع للجهد عند محطة التوليد، يرتفع الجهد وتنخفض شدة التيار بدرجة كبيرة. وبما أن الفقد يتناسب مع مربع التيار ($I^2$)، فإن خفض التيار يقلل القدرة المفقودة في الأسلاك جداً ويرفع كفاءة النقل."
    ],
    "teacherTipEn": "Step-up at the power plant; step-down at distribution substations.",
    "teacherTipAr": "محول رافع عند محطة التوليد؛ ومحول خافض عند مناطق الاستهلاك والتوزيع."
  },
  {
    "id": "phys_ch3_db_easy_48",
    "titleEn": "Transformers at Power Generating Stations vs Consuming Areas",
    "titleAr": "المحولات عند محطات التوليد ومناطق الاستهلاك",
    "difficulty": "easy",
    "questionEn": "The types of electric transformers installed at power generating stations and consumer distribution centers, respectively, are:",
    "questionAr": "نوع المحولات الكهربية المستخدمة عند محطات توليد الكهرباء وعند مناطق الاستهلاك على الترتيب هي:",
    "optionsEn": [
      "Step-down transformers at power stations, and step-up transformers at consumer centers",
      "Step-up transformers at both locations",
      "Step-down transformers at both locations",
      "Step-up transformers at power stations, and step-down transformers at consumer centers"
    ],
    "optionsAr": [
      "محولات خافضة للجهد عند محطات التوليد، ومحولات رافعة للجهد عند مناطق الاستهلاك",
      "محولات رافعة للجهد في كلا الموقعين",
      "محولات خافضة للجهد في كلا الموقعين",
      "محولات رافعة للجهد عند محطات التوليد، ومحولات خافضة للجهد عند مناطق الاستهلاك"
    ],
    "correctAnswer": "Step-up transformers at power stations, and step-down transformers at consumer centers",
    "correctIndex": 3,
    "hintEn": "High voltage for transmission; safe lower voltage for domestic consumption.",
    "hintAr": "جهد عالٍ لتقليل الفقد في النقل، وجهد منخفض وآمن للاستهلاك المنزلي.",
    "stepByStepSolutionEn": [
      "At generating stations, step-up transformers raise voltage (e.g., to $132\\text{ kV}$ or $500\\text{ kV}$) to lower current and reduce line losses. At consumer areas, step-down transformers lower voltage to safe operating levels ($220\\text{ V}$ or $380\\text{ V}$)."
    ],
    "stepByStepSolutionAr": [
      "تستخدم محولات رافعة للجهد عند محطات التوليد لرفع الجهد وخفض التيار لتقليل الفقد في خطوط النقل، وتستخدم محولات خافضة للجهد عند مناطق الاستهلاك لخفض الجهد إلى القيم المناسبة والآمنة للتشغيل ($220\\text{ V}$)."
    ],
    "teacherTipEn": "Step-up at stations $\\implies$ Step-down at consumer homes.",
    "teacherTipAr": "رافع عند محطات التوليد $\\implies$ خافض عند أماكن الاستهلاك."
  },
  {
    "id": "phys_ch3_db_easy_49",
    "titleEn": "Basic Scientific Principle of the Electric Motor",
    "titleAr": "الأساس العلمي لعمل المحرك الكهربي (الموتور)",
    "difficulty": "easy",
    "questionEn": "The scientific working principle of the direct-current (DC) electric motor is:",
    "questionAr": "الأساس العلمي الذي يُبنى عليه عمل المحرك الكهربي (الموتور) هو:",
    "optionsEn": [
      "The magnetic torque acting on a current-carrying coil placed in a magnetic field ($\\tau = B I A N \\sin\\theta$)",
      "Electromagnetic induction in a rotating conductor",
      "The thermoelectric Thomson effect",
      "Resonance in an alternating current circuit"
    ],
    "optionsAr": [
      "عزم الازدواج المغناطيسي المؤثر على ملف يمر به تيار كهربي موضوع في مجال مغناطيسي",
      "الحث الكهرومغناطيسي في موصل يدور في مجال",
      "تأثير طومسون الكهروحراري",
      "الرنين في دائرة تيار متردد"
    ],
    "correctAnswer": "The magnetic torque acting on a current-carrying coil placed in a magnetic field ($\\tau = B I A N \\sin\\theta$)",
    "correctIndex": 0,
    "hintEn": "Motor converts electrical energy into mechanical rotational kinetic energy.",
    "hintAr": "المحرك يحول الطاقة الكهربية إلى طاقة ميكانيكية عبر عزم الازدواج.",
    "stepByStepSolutionEn": [
      "An electric motor converts electrical energy into mechanical energy based on the magnetic torque $\\tau = B I A N \\sin\\theta$ exerted on opposite parallel sides of a coil carrying current in a magnetic field."
    ],
    "stepByStepSolutionAr": [
      "يعمل المحرك الكهربي على تحويل الطاقة الكهربية إلى طاقة حركية، وفكرته العلمية هي عزم الازدواج المغناطيسي المؤثر على ملف مستطيل يمر به تيار كهربي وموضوع في مجال مغناطيسي قابل للدوران."
    ],
    "teacherTipEn": "Motor = Electrical to Mechanical; Generator = Mechanical to Electrical.",
    "teacherTipAr": "المحرك = كهربية إلى ميكانيكية؛ المولد = ميكانيكية إلى كهربية."
  },
  {
    "id": "phys_ch3_db_easy_50",
    "titleEn": "Function of the Split-Ring Commutator in an Electric Motor",
    "titleAr": "وظيفة الأسطوانة المشقوقة (المقوم) في المحرك الكهربي",
    "difficulty": "easy",
    "questionEn": "In a DC electric motor, the split-ring commutator serves to:",
    "questionAr": "في المحرك الكهربي للتيار المستمر، تعمل الأسطوانة المعدنية المشقوقة على:",
    "optionsEn": [
      "Keep the magnitude of current in the coil strictly constant",
      "Reverse the direction of current in the coil every half cycle, maintaining continuous rotation in one direction",
      "Convert mechanical energy directly into electrical energy",
      "Stop the motor automatically when the coil reaches the perpendicular plane"
    ],
    "optionsAr": [
      "تثبيت شدة التيار المار في الملف دائماً",
      "عكس اتجاه التيار في أضلاع الملف كل نصف دورة ليستمر دورانه في اتجاه واحد ثابت",
      "تحويل الطاقة الميكانيكية مباشرة إلى طاقة كهربية",
      "إيقاف المحرك أوتوماتيكياً عندما يصل الملف إلى الوضع العمودي"
    ],
    "correctAnswer": "Reverse the direction of current in the coil every half cycle, maintaining continuous rotation in one direction",
    "correctIndex": 1,
    "hintEn": "Reversing current reverses magnetic forces so torque continues in the same sense.",
    "hintAr": "عكس التيار يعكس القوى المؤثرة على الأضلاع، فيظل اتجاه عزم الازدواج واحداً.",
    "stepByStepSolutionEn": [
      "If current direction did not reverse, the torque would reverse its direction every half cycle, causing the coil to oscillate back and forth. The commutator reverses current every half turn at the perpendicular position, allowing the coil to rotate continuously in a single direction."
    ],
    "stepByStepSolutionAr": [
      "لو لم ينعكس اتجاه التيار لانعكس اتجاه عزم الازدواج كل نصف دورة وتذبذب الملف حول موضعه. تعمل الأسطوانة المشقوقة على عكس اتجاه التيار في الملف كل نصف دورة عند الوضع العمودي، فيستمر عزم الازدواج والدوران في نفس الاتجاه."
    ],
    "teacherTipEn": "In a dynamo, the commutator rectifies output current; in a motor, it maintains unidirectional rotation.",
    "teacherTipAr": "في الدينامو يوحد المقوم اتجاه تيار الخرج؛ وفي المحرك يوحد اتجاه حركة الدوران."
  },
  {
    "id": "phys_ch3_db_easy_51",
    "titleEn": "Why an Electric Motor Continues Past the Perpendicular Position",
    "titleAr": "سبب استمرار دوران المحرك عند المرور بالوضع العمودي",
    "difficulty": "easy",
    "questionEn": "When the coil of an electric motor reaches the perpendicular position relative to the magnetic field lines, the torque becomes zero ($\\tau = 0$). The coil continues to rotate past this position due to:",
    "questionAr": "عندما يصل ملف المحرك الكهربي إلى الوضع العمودي على خطوط المجال، ينعدم عزم الازدواج ($\\tau = 0$). يستمر الملف في الدوران وتجاوز هذا الوضع بسبب:",
    "optionsEn": [
      "A huge burst of current delivered by the battery",
      "Mutual induction from the field magnet",
      "Rotational inertia (inertia)",
      "Gravitational potential energy"
    ],
    "optionsAr": [
      "دفعة تيار هائلة من البطارية",
      "الحث المتبادل من المغناطيس",
      "القصور الذاتي للدوران",
      "طاقة الوضع التثاقلية للأرض"
    ],
    "correctAnswer": "Rotational inertia (inertia)",
    "correctIndex": 2,
    "hintEn": "An object in rotational motion tends to remain in motion.",
    "hintAr": "الجسم المتحرك دورانياً يميل للبقاء في حالة حركة بسبب القصور الذاتي.",
    "stepByStepSolutionEn": [
      "In the perpendicular position, the two halves of the commutator touch the insulating gap between the brushes, cutting off current, and torque drops to zero ($\\sin 0^\\circ = 0$). However, the coil has rotational kinetic energy and passes through this neutral position by rotational inertia."
    ],
    "stepByStepSolutionAr": [
      "في الوضع العمودي يلامس الشق العازل بين نصفي الأسطوانة فرشتي الكربون فينقطع التيار وينعدم عزم الازدواج، لكن الملف يمتلك سرعة دورانية فيستمر في حركته متجاوزاً هذا الوضع بفضل خاصية القصور الذاتي."
    ],
    "teacherTipEn": "Inertia bridges the zero-torque neutral position.",
    "teacherTipAr": "القصور الذاتي هو ما يتجاوز به الملف موضع انعدام العزم."
  },
  {
    "id": "phys_ch3_db_easy_52",
    "titleEn": "Role of Back-EMF in an Electric Motor",
    "titleAr": "دور القوة الدافعة المستحثة العكسية في المحرك الكهربي",
    "difficulty": "easy",
    "questionEn": "During the operation of an electric motor, a back-electromotive force (back-EMF) is induced in the rotating coil. Its essential function is to:",
    "questionAr": "أثناء دوران ملف المحرك الكهربي، تتولد فيه قوة دافعة كهربية مستحثة عكسية. وظيفتها الأساسية هي:",
    "optionsEn": [
      "Multiply the battery's driving voltage tenfold",
      "Stop the motor when the external load is removed",
      "Ionize the air around the commutator",
      "Regulate and stabilize the motor's rotational speed at a constant value"
    ],
    "optionsAr": [
      "مضاعفة جهد البطارية المشغلة عدة مرات",
      "إيقاف المحرك تماماً عند إزالة الحمل الخارجي",
      "تأيين الهواء المحيط بالمقوم",
      "تنظيم سرعة دوران المحرك وجعلها منتظمة وثابتة"
    ],
    "correctAnswer": "Regulate and stabilize the motor's rotational speed at a constant value",
    "correctIndex": 3,
    "hintEn": "Back-EMF balances net voltage: $I = \\frac{V_B - \\text{emf}_{\\text{back}}}{R}$.",
    "hintAr": "القوة الدافعة العكسية تضبط شدة التيار: $I = \\frac{V_B - \\text{emf}_{\\text{back}}}{R}$.",
    "stepByStepSolutionEn": [
      "As the motor speed increases, the rate of cutting magnetic flux increases, increasing $\\text{emf}_{\\text{back}}$. The net driving current is $I = \\frac{V_{\\text{battery}} - \\text{emf}_{\\text{back}}}{R}$. If the motor slows down under load, $\\text{emf}_{\\text{back}}$ drops, driving more current to increase torque and restore speed."
    ],
    "stepByStepSolutionAr": [
      "أثناء دوران ملف المحرك يقطع خطوط الفيض كدينامو، فتتولد فيه $\\text{emf}$ عكسية تقاوم جهد البطارية، ويكون التيار $I = \\frac{V_B - \\text{emf}_{\\text{back}}}{R}$. إذا زادت السرعة زادت $\\text{emf}$ العكسية وقل التيار، وإذا تباطأ قلت $\\text{emf}$ وزاد التيار، مما يحافظ على سرعة دوران منتظمة."
    ],
    "teacherTipEn": "Back-EMF prevents the motor coil from burning out when rotating at operational speed.",
    "teacherTipAr": "الـ $\\text{emf}$ العكسية تحمي ملف المحرك من الاحتراق أثناء الدوران بسرعة التشغيل."
  },
  {
    "id": "phys_ch3_db_easy_53",
    "titleEn": "Increasing the Rotational Power and Smoothness of an Electric Motor",
    "titleAr": "زيادة قدرة المحرك الكهربي وانتظام عزمه",
    "difficulty": "easy",
    "questionEn": "To increase the mechanical power of an electric motor and maintain a continuous maximum torque during rotation, engineers:",
    "questionAr": "لزيادة قدرة المحرك الكهربي والاحتفاظ بعزم ازدواج ثابت وأقصى طوال الدوران، يقوم المهندسون بـ:",
    "optionsEn": [
      "Use multiple coils with small equal angles between them and divide the commutator into twice as many segments",
      "Replace the electromagnet with a weak plastic coil",
      "Use a single coil with one turn and eliminate the commutator",
      "Reduce the number of commutator segments to one"
    ],
    "optionsAr": [
      "استخدام عدة ملفات بين مستوياتها زوايا صغيرة متساوية وتقسيم المقوم إلى ضعف عدد الملفات",
      "استبدال المغناطيس بملف بلاستيكي ضعيف",
      "استخدام ملف واحد ذي لفة واحدة وإلغاء المقوم المعدني",
      "تقليص عدد أجزاء المقوم إلى جزء واحد فقط"
    ],
    "correctAnswer": "Use multiple coils with small equal angles between them and divide the commutator into twice as many segments",
    "correctIndex": 0,
    "hintEn": "Same design technique used to smooth out DC generator output.",
    "hintAr": "نفس الطريقة الهندسية المستخدمة لتثبيت شدة تيار المولد المستمر.",
    "stepByStepSolutionEn": [
      "By utilizing several coils with small angles between their planes, one of the coils will always be in or near the parallel position ($\\sin\\theta \\approx 1$), providing constant maximum torque and smooth rotation without pulsations."
    ],
    "stepByStepSolutionAr": [
      "باستخدام عدة ملفات بينها زوايا صغيرة وتقسيم الأسطوانة لضعف عدد الملفات، يكون أحد الملفات دائماً في الوضع الموازي أو قريباً منه فيتأثر بأقصى عزم ازدواج، مما يجعل عزم الدوران ثابتاً وقوياً ومستمراً."
    ],
    "teacherTipEn": "Multiple coils + $2 \\times$ commutator segments = maximum smooth torque.",
    "teacherTipAr": "عدة ملفات + ضعف عدد قطع المقوم = عزم ازدواج أقصى ومنتظم."
  },
  {
    "id": "phys_ch3_db_easy_54",
    "titleEn": "Primary Coil Open Circuit in an Unloaded Transformer",
    "titleAr": "دائرة الملف الثانوي المفتوحة في المحول الكهربي",
    "difficulty": "easy",
    "questionEn": "When the secondary circuit of a transformer is open (no electrical load connected), the electric current drawn by the primary coil is almost zero because:",
    "questionAr": "عند فتح دائرة الملف الثانوي لمحول كهربي (عدم توصيل حمل)، يكاد ينعدم التيار المار في الملف الابتدائي بسبب:",
    "optionsEn": [
      "The primary coil wire breaks automatically under open secondary conditions",
      "A reverse self-induced electromotive force generated in the primary almost completely balances the applied AC voltage",
      "The magnetic permeability of the soft iron core drops to zero",
      "The frequency of the alternating current drops to zero"
    ],
    "optionsAr": [
      "انقطاع سلك الملف الابتدائي تلقائياً عند فتح دائرة الثانوي",
      "تولد قوة دافعة مستحثة ذاتية عكسية في الملف الابتدائي تكاد تتساوى مع جهد المصدر وتعاكسه",
      "انخفاض النفاذية المغناطيسية للقلب الحديدي إلى الصفر",
      "انخفاض تردد التيار المتردد في الدائرة إلى الصفر"
    ],
    "correctAnswer": "A reverse self-induced electromotive force generated in the primary almost completely balances the applied AC voltage",
    "correctIndex": 1,
    "hintEn": "Self-induction in the primary creates a back EMF nearly equal to $V_p$.",
    "hintAr": "الحث الذاتي في الملف الابتدائي يولد $\\text{emf}$ عكسية تكاد تساوي جهد المصدر.",
    "stepByStepSolutionEn": [
      "When the secondary circuit is open, changing primary current generates a large back-EMF in the primary by self-induction ($\\text{emf}_{\\text{self}} \\approx -V_p$). This opposing self-induced EMF nearly equals the applied source voltage, so net voltage is negligible and almost no power is drawn."
    ],
    "stepByStepSolutionAr": [
      "عند فتح دائرة الثانوي، يولد تغير التيار في الابتدائي فيضاً يسبب حثاً ذاتياً كبيراً في الابتدائي، فتتولد قوة دافعة مستحثة ذاتية عكسية تساوي تقريباً جهد المصدر وتعاكسه، فينعدم فرق الجهد المحصل ويكاد ينعدم التيار المستهلك."
    ],
    "teacherTipEn": "An unloaded transformer consumes virtually no electric power.",
    "teacherTipAr": "المحول غير المحمل لا يستهلك طاقة كهربية تُذكر."
  },
  {
    "id": "phys_ch3_db_easy_55",
    "titleEn": "Current Drawn When Secondary Circuit is Closed",
    "titleAr": "سحب التيار عند غلق دائرة الملف الثانوي للمحول",
    "difficulty": "easy",
    "questionEn": "When the secondary circuit of a transformer is connected to an electrical appliance (closed circuit), current starts flowing in the primary coil because:",
    "questionAr": "عند غلق دائرة الملف الثانوي لمحول وتوصيله بجهاز كهربي، يبدأ تيار ملحوظ في المرور في الملف الابتدائي لأن:",
    "optionsEn": [
      "The secondary coil pumps electrical charges physically into the primary wires",
      "The iron core heats up and becomes a superconductor",
      "The magnetic flux produced by the secondary induced current opposes and weakens the original primary flux, reducing the opposing primary self-induced EMF",
      "The turns ratio of the transformer drops instantly to zero"
    ],
    "optionsAr": [
      "الملف الثانوي يضخ شحنات كهربية مادياً داخل أسلاك الابتدائي",
      "القلب الحديدي يسخن ويتحول إلى موصل فائق التوصيل",
      "الفيض المغناطيسي المتولد من تيار الثانوي يلاشي ويعاكس جزءاً من فيض الابتدائي، فتقل القوة الدافعة الذاتية العكسية المعطلة لتيار الابتدائي",
      "نسبة عدد اللفات في المحول تنخفض لحظياً إلى الصفر"
    ],
    "correctAnswer": "The magnetic flux produced by the secondary induced current opposes and weakens the original primary flux, reducing the opposing primary self-induced EMF",
    "correctIndex": 2,
    "hintEn": "Secondary current opposes the primary flux (Lenz's law), decreasing the primary's back-EMF.",
    "hintAr": "تيار الثانوي يولد فيضاً معاكساً لفيض الابتدائي، مما يضعف الـ $\\text{emf}$ العكسية في الابتدائي.",
    "stepByStepSolutionEn": [
      "According to Lenz's law, the secondary induced current produces a magnetic flux that opposes the primary flux. This reduces the net changing flux in the primary, which diminishes the opposing self-induced EMF in the primary. The applied voltage can now drive current into the primary coil to deliver power."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لقاعدة لنز يولد تيار الثانوي فيضاً معاكساً لفيض الابتدائي، فيقلل المعدل الكلي للتغير في الفيض بالملف الابتدائي، فتقل القوة الدافعة الذاتية العكسية فيه، مما يسمح لتيار المصدر بالمرور لتعويض الطاقة المنقولة للثانوي."
    ],
    "teacherTipEn": "Power drawn by primary automatically matches power consumed by secondary.",
    "teacherTipAr": "القدرة المسحوبة من الابتدائي تتكيف تلقائياً مع القدرة المستهلكة في الثانوي."
  },
  {
    "id": "phys_ch3_db_easy_56",
    "titleEn": "Mutual Inductance Calculation from Induced EMF",
    "titleAr": "حساب معامل الحث المتبادل من القوة الدافعة ومعدل تغير التيار",
    "difficulty": "easy",
    "questionEn": "If an electromotive force of $6\\text{ V}$ is induced in a secondary coil when the current in the primary coil changes at a rate of $12\\text{ A/s}$, the mutual inductance coefficient ($M$) is:",
    "questionAr": "إذا تولدت قوة دافعة مستحثة مقدارها $6\\text{ V}$ في ملف ثانوي عندما تغير التيار في الملف الابتدائي بمعدل $12\\text{ A/s}$، فإن معامل الحث المتبادل ($M$) يساوي:",
    "optionsEn": [
      "$2.0\\text{ H}$",
      "$72\\text{ H}$",
      "$0.25\\text{ H}$",
      "$0.5\\text{ H}$"
    ],
    "optionsAr": [
      "$2.0\\text{ H}$",
      "$72\\text{ H}$",
      "$0.25\\text{ H}$",
      "$0.5\\text{ H}$"
    ],
    "correctAnswer": "$0.5\\text{ H}$",
    "correctIndex": 3,
    "hintEn": "Use $M = \\frac{|\\text{emf}_2|}{\\Delta I_1 / \\Delta t}$.",
    "hintAr": "استخدم القانون $M = \\frac{|\\text{emf}_2|}{\\Delta I_1 / \\Delta t}$.",
    "stepByStepSolutionEn": [
      "From $\\text{emf}_2 = -M \\frac{\\Delta I_1}{\\Delta t}$, we have $M = \\frac{|\\text{emf}_2|}{\\Delta I_1 / \\Delta t} = \\frac{6\\text{ V}}{12\\text{ A/s}} = 0.5\\text{ H}$."
    ],
    "stepByStepSolutionAr": [
      "من قانون الحث المتبادل $\\text{emf}_2 = -M \\frac{\\Delta I_1}{\\Delta t}$، فإن $M = \\frac{6}{12} = 0.5\\text{ H}$."
    ],
    "teacherTipEn": "$M$ is always a positive scalar magnitude.",
    "teacherTipAr": "معامل الحث كمية قياسية موجبة دائماً."
  },
  {
    "id": "phys_ch3_db_easy_57",
    "titleEn": "Self-Induced EMF Calculation in an Inductor",
    "titleAr": "حساب القوة الدافعة المستحثة الذاتية في ملف حث",
    "difficulty": "easy",
    "questionEn": "A coil has a self-inductance $L = 0.4\\text{ H}$. If the current passing through it drops from $5\\text{ A}$ to zero in $0.02\\text{ s}$, the magnitude of the induced electromotive force is:",
    "questionAr": "ملف معامل حثه الذاتي $L = 0.4\\text{ H}$. إذا هبطت شدة التيار المار فيه من $5\\text{ A}$ إلى الصفر خلال زمن $0.02\\text{ s}$، فإن مقدار القوة الدافعة المستحثة المتولدة فيه يساوي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$10\\text{ V}$",
      "$0.04\\text{ V}$",
      "$250\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$10\\text{ V}$",
      "$0.04\\text{ V}$",
      "$250\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "hintAr": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "Here $\\Delta I = 0 - 5 = -5\\text{ A}$, and $\\Delta t = 0.02\\text{ s}$. $\\text{emf} = -0.4 \\times \\frac{-5}{0.02} = +100\\text{ V}$. Since the current decreased, this is a forward induced EMF."
    ],
    "stepByStepSolutionAr": [
      "التغير في شدة التيار $\\Delta I = 0 - 5 = -5\\text{ A}$، والزمن $\\Delta t = 0.02\\text{ s}$. بالتعويض: $\\text{emf} = -0.4 \\times \\frac{-5}{0.02} = +100\\text{ V}$، وهي قوة دافعة طردية لأن التيار يتناقص."
    ],
    "teacherTipEn": "A forward induced EMF opposes current decay and acts in the same direction as the original current.",
    "teacherTipAr": "تكون القوة الدافعة طردية وتعمل على مقاومة انهيار التيار."
  },
  {
    "id": "phys_ch3_db_easy_58",
    "titleEn": "Peak vs Effective Current Relation in AC Circuit",
    "titleAr": "العلاقة بين أقصى شدة تيار والشدة الفعالة",
    "difficulty": "easy",
    "questionEn": "If an alternating electric current has a maximum peak value $I_{\\max} = 14.14\\text{ A}$, its effective (RMS) value ($I_{\\text{eff}}$) is approximately:",
    "questionAr": "إذا كانت القيمة العظمى لتيار متردد $I_{\\max} = 14.14\\text{ A}$، فإن قيمته الفعالة ($I_{\\text{eff}}$) تساوي تقريباً:",
    "optionsEn": [
      "$20\\text{ A}$",
      "$10\\text{ A}$",
      "$7.07\\text{ A}$",
      "$14.14\\text{ A}$"
    ],
    "optionsAr": [
      "$20\\text{ A}$",
      "$10\\text{ A}$",
      "$7.07\\text{ A}$",
      "$14.14\\text{ A}$"
    ],
    "correctAnswer": "$10\\text{ A}$",
    "correctIndex": 1,
    "hintEn": "$I_{\\text{eff}} = \\frac{I_{\\max}}{\\sqrt{2}} \\approx 0.707 \\times I_{\\max}$.",
    "hintAr": "$I_{\\text{eff}} = \\frac{I_{\\max}}{\\sqrt{2}} \\approx 0.707 \\times I_{\\max}$.",
    "stepByStepSolutionEn": [
      "$I_{\\text{eff}} = \\frac{I_{\\max}}{\\sqrt{2}} = \\frac{14.14}{1.414} = 10\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "$I_{\\text{eff}} = \\frac{I_{\\max}}{\\sqrt{2}} = \\frac{14.14}{1.414} = 10\\text{ A}$."
    ],
    "teacherTipEn": "$10\\sqrt{2} \\approx 14.14$, so dividing by $\\sqrt{2}$ yields exactly $10\\text{ A}$.",
    "teacherTipAr": "قسمة $14.14$ على $\\sqrt{2}$ تعطي $10\\text{ A}$ بالضبط."
  }
],
  medium: [
  {
    "id": "phys_ch3_db_med_01",
    "titleEn": "Faraday Induction for a Flipped Coil",
    "titleAr": "قانون فاراداي عند قلب الملف في مجال مغناطيسي",
    "difficulty": "medium",
    "questionEn": "A circular coil of $100\\text{ turns}$ and area $0.02\\text{ m}^2$ is placed perpendicular to a magnetic field of flux density $0.5\\text{ T}$. If the coil is flipped (turned through $180^\\circ$) in $0.1\\text{ s}$, the average induced electromotive force is:",
    "questionAr": "ملف دائري عدد لفاته $100\\text{ لفة}$ ومساحته $0.02\\text{ m}^2$ موضوع عمودياً في مجال مغناطيسي كثافة فيضه $0.5\\text{ T}$. إذا قُلِب الملف (دار بزاوية $180^\\circ$) خلال $0.1\\text{ s}$، فإن متوسط القوة الدافعة المستحثة يساوي:",
    "optionsEn": [
      "$20\\text{ V}$",
      "$10\\text{ V}$",
      "$40\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$20\\text{ V}$",
      "$10\\text{ V}$",
      "$40\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$20\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "When a coil is flipped, $\\Delta\\Phi_m = -B A - (+B A) = -2 B A$.",
    "hintAr": "عند قلب الملف يتغير الفيض بمقدار $\\Delta\\Phi_m = -2 B A$.",
    "stepByStepSolutionEn": [
      "Initially, $\\Phi_{m1} = B A = 0.5 \\times 0.02 = 0.01\\text{ Wb}$. When flipped by $180^\\circ$, $\\Phi_{m2} = -B A = -0.01\\text{ Wb}$. Thus, $\\Delta\\Phi_m = -0.02\\text{ Wb}$. By Faraday's law: $\\text{emf}_{\\text{avg}} = -N \\frac{\\Delta\\Phi_m}{\\Delta t} = -100 \\times \\frac{-0.02}{0.1} = 20\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "الفيض الابتدائي $\\Phi_{m1} = B A = 0.01\\text{ Wb}$. وعند قلب الملف يصبح $\\Phi_{m2} = -0.01\\text{ Wb}$، فيكون $\\Delta\\Phi_m = -2 B A = -0.02\\text{ Wb}$. من قانون فاراداي: $\\text{emf} = -100 \\times \\frac{-0.02}{0.1} = 20\\text{ V}$."
    ],
    "teacherTipEn": "Flipping a coil or reversing field direction means $\\Delta\\Phi_m = 2 B A$.",
    "teacherTipAr": "قلب الملف أو عكس اتجاه المجال يعني أن التغير في الفيض $\\Delta\\Phi_m = 2 B A$."
  },
  {
    "id": "phys_ch3_db_med_02",
    "titleEn": "Coil Rotated 360 Degrees in Magnetic Field",
    "titleAr": "دوران ملف دورة كاملة في مجال مغناطيسي",
    "difficulty": "medium",
    "questionEn": "A square coil of $500\\text{ turns}$ and side $10\\text{ cm}$ is placed perpendicular to a magnetic field of $0.4\\text{ T}$. If the coil rotates through one complete revolution ($360^\\circ$) in $0.05\\text{ s}$, the average induced EMF is:",
    "questionAr": "ملف مربع الشكل عدد لفاته $500\\text{ لفة}$ وطول ضلعه $10\\text{ cm}$ موضوع عمودياً على مجال مغناطيسي $0.4\\text{ T}$. إذا دار الملف دورة كاملة ($360^\\circ$) خلال $0.05\\text{ s}$، فإن متوسط القوة الدافعة المستحثة يساوي:",
    "optionsEn": [
      "$200\\text{ V}$",
      "$0\\text{ V}$",
      "$40\\text{ V}$",
      "$80\\text{ V}$"
    ],
    "optionsAr": [
      "$200\\text{ V}$",
      "$0\\text{ V}$",
      "$40\\text{ V}$",
      "$80\\text{ V}$"
    ],
    "correctAnswer": "$0\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "A full rotation returns the coil to its identical initial orientation.",
    "hintAr": "الدورة الكاملة تعيد الملف إلى نفس وضعه الأصلي تماماً.",
    "stepByStepSolutionEn": [
      "After rotating $360^\\circ$, the final magnetic flux through the coil equals its initial flux ($\\Phi_{m2} = \\Phi_{m1}$), so $\\Delta\\Phi_m = 0$. By Faraday's law, $\\text{emf}_{\\text{avg}} = -N \\frac{\\Delta\\Phi_m}{\\Delta t} = 0\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "بعد الدوران $360^\\circ$ يعود الملف لنفس وضعه، فيكون $\\Phi_{m2} = \\Phi_{m1}$ والتغير في الفيض $\\Delta\\Phi_m = 0$. وعليه فإن متوسط القوة الدافعة المستحثة خلال دورة كاملة يساوي صفراً."
    ],
    "teacherTipEn": "Average EMF over a full cycle ($360^\\circ$) is always zero.",
    "teacherTipAr": "متوسط القوة الدافعة الكهربية خلال دورة كاملة دائماً يساوي صفراً."
  },
  {
    "id": "phys_ch3_db_med_03",
    "titleEn": "Magnetic Field Reduced to Zero in Given Time",
    "titleAr": "تلاشي المجال المغناطيسي المؤثر على ملف",
    "difficulty": "medium",
    "questionEn": "A coil of $200\\text{ turns}$ and area $150\\text{ cm}^2$ is placed perpendicular to a field of $0.2\\text{ T}$. If the field collapses steadily to zero in $0.03\\text{ s}$, the induced electromotive force is:",
    "questionAr": "ملف عدد لفاته $200\\text{ لفة}$ ومساحته $150\\text{ cm}^2$ موضوع عمودياً في مجال مغناطيسي كثافته $0.2\\text{ T}$. إذا تلاشى المجال بانتظام حتى انعدم خلال $0.03\\text{ s}$، فإن القوة الدافعة المستحثة المتولدة تساوي:",
    "optionsEn": [
      "$2\\text{ V}$",
      "$0.2\\text{ V}$",
      "$20\\text{ V}$",
      "$60\\text{ V}$"
    ],
    "optionsAr": [
      "$2\\text{ V}$",
      "$0.2\\text{ V}$",
      "$20\\text{ V}$",
      "$60\\text{ V}$"
    ],
    "correctAnswer": "$20\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "Convert area to $\\text{m}^2$: $150\\text{ cm}^2 = 150 \\times 10^{-4}\\text{ m}^2 = 0.015\\text{ m}^2$.",
    "hintAr": "حول المساحة: $150\\text{ cm}^2 = 0.015\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$\\Delta\\Phi_m = \\Phi_{m2} - \\Phi_{m1} = 0 - (B A) = -0.2 \\times 0.015 = -0.003\\text{ Wb}$. By Faraday's law: $\\text{emf} = -N \\frac{\\Delta\\Phi_m}{\\Delta t} = -200 \\times \\frac{-0.003}{0.03} = +20\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta\\Phi_m = 0 - (B A) = -0.2 \\times 0.015 = -0.003\\text{ Wb}$. بالتعويض: $\\text{emf} = -200 \\times \\frac{-0.003}{0.03} = +20\\text{ V}$."
    ],
    "teacherTipEn": "Because the flux decreased, the induced EMF is positive (forward induced EMF).",
    "teacherTipAr": "تناقص الفيض يولد قوة دافعة مستحثة طردية موجبة لمقاومة النقص."
  },
  {
    "id": "phys_ch3_db_med_04",
    "titleEn": "Motional EMF at an Inclined Angle",
    "titleAr": "القوة الدافعة المستحثة في سلك يتحرك بزاوية",
    "difficulty": "medium",
    "questionEn": "A straight metal conductor of length $0.5\\text{ m}$ moves at a velocity of $8\\text{ m/s}$ in a uniform magnetic field of $0.6\\text{ T}$. If the direction of motion makes an angle of $30^\\circ$ with the field lines, the induced electromotive force is:",
    "questionAr": "سلك مستقيم طوله $0.5\\text{ m}$ يتحرك بسرعة $8\\text{ m/s}$ في مجال مغناطيسي منتظم كثافته $0.6\\text{ T}$. إذا كان اتجاه حركة السلك يصنع زاوية $30^\\circ$ مع خطوط المجال، فإن القوة الدافعة المستحثة بين طرفيه تساوي:",
    "optionsEn": [
      "$2.4\\text{ V}$",
      "$0.6\\text{ V}$",
      "$2.08\\text{ V}$",
      "$1.2\\text{ V}$"
    ],
    "optionsAr": [
      "$2.4\\text{ V}$",
      "$0.6\\text{ V}$",
      "$2.08\\text{ V}$",
      "$1.2\\text{ V}$"
    ],
    "correctAnswer": "$1.2\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "$\\text{emf} = B v L \\sin\\theta$.",
    "hintAr": "$\\text{emf} = B v L \\sin\\theta$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = B v L \\sin\\theta = 0.6 \\times 8 \\times 0.5 \\times \\sin 30^\\circ = 2.4 \\times 0.5 = 1.2\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = B v L \\sin 30^\\circ = 0.6 \\times 8 \\times 0.5 \\times 0.5 = 1.2\\text{ V}$."
    ],
    "teacherTipEn": "For a straight conductor, $\\theta$ is the angle between the velocity vector and the magnetic field vector.",
    "teacherTipAr": "في السلك المستقيم، $\\theta$ هي الزاوية بين اتجاه السرعة وخطوط المجال المغناطيسي."
  },
  {
    "id": "phys_ch3_db_med_05",
    "titleEn": "Current Induced in a Closed Conducting Rail Loop",
    "titleAr": "شدة التيار المستحث في سلك يتحرك على ساقين متصلتين بمقاومة",
    "difficulty": "medium",
    "questionEn": "A conducting rod of length $0.4\\text{ m}$ slides perpendicularly along two parallel rails connected to a resistor of $2\\,\\Omega$ at a constant speed of $5\\text{ m/s}$ in a magnetic field of $0.8\\text{ T}$. The electric current flowing through the resistor is:",
    "questionAr": "ساق موصلة طولها $0.4\\text{ m}$ تنزلق عمودياً على سكتين متوازيتين متصلتين بمقاومة $2\\,\\Omega$ بسرعة ثابتة $5\\text{ m/s}$ داخل مجال مغناطيسي منتظم $0.8\\text{ T}$. فإن شدة التيار المار في المقاومة تساوي:",
    "optionsEn": [
      "$0.8\\text{ A}$",
      "$1.6\\text{ A}$",
      "$0.4\\text{ A}$",
      "$3.2\\text{ A}$"
    ],
    "optionsAr": [
      "$0.8\\text{ A}$",
      "$1.6\\text{ A}$",
      "$0.4\\text{ A}$",
      "$3.2\\text{ A}$"
    ],
    "correctAnswer": "$0.8\\text{ A}$",
    "correctIndex": 0,
    "hintEn": "First find $\\text{emf} = B v L$, then $I = \\frac{\\text{emf}}{R}$.",
    "hintAr": "احسب أولاً $\\text{emf} = B v L$ ثم شدة التيار $I = \\frac{\\text{emf}}{R}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = B v L \\sin 90^\\circ = 0.8 \\times 5 \\times 0.4 = 1.6\\text{ V}$. The induced current is $I = \\frac{\\text{emf}}{R} = \\frac{1.6\\text{ V}}{2\\,\\Omega} = 0.8\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = B v L = 0.8 \\times 5 \\times 0.4 = 1.6\\text{ V}$. شدة التيار المستحث: $I = \\frac{\\text{emf}}{R} = \\frac{1.6}{2} = 0.8\\text{ A}$."
    ],
    "teacherTipEn": "Two-step problem: calculate EMF first, then apply Ohm's law.",
    "teacherTipAr": "مسألة من خطوتين: إيجاد القوة الدافعة ثم تطبيق قانون أوم."
  },
  {
    "id": "phys_ch3_db_med_06",
    "titleEn": "External Force Needed to Keep Rod Moving at Constant Speed",
    "titleAr": "القوة الخارجية اللازمة لسحب الساق بسرعة منتظمة",
    "difficulty": "medium",
    "questionEn": "In the previous question (rod $L = 0.4\\text{ m}$, $B = 0.8\\text{ T}$, $R = 2\\,\\Omega$, $v = 5\\text{ m/s}$, $I = 0.8\\text{ A}$), the external mechanical force required to maintain the rod's constant speed is:",
    "questionAr": "في المسألة السابقة ($L = 0.4\\text{ m}$، $B = 0.8\\text{ T}$، $I = 0.8\\text{ A}$)، القوة الميكانيكية الخارجية اللازمة لسحب الساق بسرعة منتظمة تساوي:",
    "optionsEn": [
      "$0.64\\text{ N}$",
      "$0.256\\text{ N}$",
      "$1.28\\text{ N}$",
      "$0.064\\text{ N}$"
    ],
    "optionsAr": [
      "$0.64\\text{ N}$",
      "$0.256\\text{ N}$",
      "$1.28\\text{ N}$",
      "$0.064\\text{ N}$"
    ],
    "correctAnswer": "$0.256\\text{ N}$",
    "correctIndex": 1,
    "hintEn": "Magnetic opposing force is $F = B I L$. For constant speed, $F_{\\text{ext}} = F_{\\text{mag}}$.",
    "hintAr": "القوة المغناطيسية المعاكسة هي $F = B I L$. وللتحرك بسرعة منتظمة يجب أن تتساوى مع القوة الخارجية.",
    "stepByStepSolutionEn": [
      "The induced current creates a magnetic Lorentz force opposing motion: $F = B I L = 0.8 \\times 0.8 \\times 0.4 = 0.256\\text{ N}$. To maintain constant velocity, the external pulling force must balance this force: $F_{\\text{ext}} = 0.256\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "يولد التيار المستحث قوة مغناطيسية تعاكس الحركة حسب قاعدة لنز: $F = B I L = 0.8 \\times 0.8 \\times 0.4 = 0.256\\text{ N}$. ولكي تتحرك الساق بسرعة منتظمة يجب أن تؤثر قوة خارجية مساوية لها في المقدار: $F = 0.256\\text{ N}$."
    ],
    "teacherTipEn": "Alternatively: $F = \\frac{B^2 L^2 v}{R} = \\frac{0.64 \\times 0.16 \\times 5}{2} = 0.256\\text{ N}$.",
    "teacherTipAr": "يمكن حسابها مباشرة من العلاقة: $F = \\frac{B^2 L^2 v}{R} = 0.256\\text{ N}$."
  },
  {
    "id": "phys_ch3_db_med_07",
    "titleEn": "Mechanical Power Equal to Electrical Power Dissipated",
    "titleAr": "تساوي القدرة الميكانيكية المبذولة مع القدرة الكهربية المستهلكة",
    "difficulty": "medium",
    "questionEn": "In the moving rod system ($F = 0.256\\text{ N}$, $v = 5\\text{ m/s}$, $I = 0.8\\text{ A}$, $R = 2\\,\\Omega$), the mechanical power supplied by the external agent and the electrical power dissipated as heat in the resistor are, respectively:",
    "questionAr": "في نظام الساق المتحركة ($F = 0.256\\text{ N}$، $v = 5\\text{ m/s}$، $I = 0.8\\text{ A}$، $R = 2\\,\\Omega$)، تكون القدرة الميكانيكية المبذولة والقدرة الكهربية المستهلكة كحرارة على الترتيب:",
    "optionsEn": [
      "$1.28\\text{ W}$ and $2.56\\text{ W}$",
      "$0.64\\text{ W}$ and $1.28\\text{ W}$",
      "$1.28\\text{ W}$ and $1.28\\text{ W}$ (exact conservation of energy)",
      "$2.56\\text{ W}$ and $0.64\\text{ W}$"
    ],
    "optionsAr": [
      "$1.28\\text{ W}$ و $2.56\\text{ W}$",
      "$0.64\\text{ W}$ and $1.28\\text{ W}$",
      "$1.28\\text{ W}$ و $1.28\\text{ W}$ (تحقق تام لقانون بقاء الطاقة)",
      "$2.56\\text{ W}$ and $0.64\\text{ W}$"
    ],
    "correctAnswer": "$1.28\\text{ W}$ and $1.28\\text{ W}$ (exact conservation of energy)",
    "correctIndex": 2,
    "hintEn": "$P_{\\text{mech}} = F v$ and $P_{\\text{elec}} = I^2 R$.",
    "hintAr": "$P_{\\text{mech}} = F v$ والقدرة الكهربية $P_{\\text{elec}} = I^2 R$.",
    "stepByStepSolutionEn": [
      "$P_{\\text{mech}} = F v = 0.256 \\times 5 = 1.28\\text{ W}$. Electrical power: $P_{\\text{elec}} = I^2 R = (0.8)^2 \\times 2 = 0.64 \\times 2 = 1.28\\text{ W}$. Both powers are perfectly equal, proving conservation of energy."
    ],
    "stepByStepSolutionAr": [
      "القدرة الميكانيكية: $P = F v = 0.256 \\times 5 = 1.28\\text{ W}$. والقدرة الكهربية: $P = I^2 R = (0.8)^2 \\times 2 = 1.28\\text{ W}$. وتتساوى القدرتان تماماً تحقيقاً لمبدأ بقاء الطاقة."
    ],
    "teacherTipEn": "Mechanical work done per second equals electrical Joule heat produced per second.",
    "teacherTipAr": "الشغل الميكانيكي المبذول في الثانية يتحول بالكامل إلى طاقة حرارية في الثانية."
  },
  {
    "id": "phys_ch3_db_med_08",
    "titleEn": "Electric Charge Transferred Independent of Time",
    "titleAr": "الشحنة الكهربية المستحثة لا تعتمد على زمن التغير",
    "difficulty": "medium",
    "questionEn": "A circular coil of $50\\text{ turns}$ and total resistance $4\\,\\Omega$ is connected to a closed circuit. When the magnetic flux through it changes by $0.08\\text{ Wb}$, the total electric charge that passes through the coil cross-section is:",
    "questionAr": "ملف دائري عدد لفاته $50\\text{ لفة}$ ومقاومة دائرته الكلية $4\\,\\Omega$. عندما يتغير الفيض المغناطيسي المخترق له بمقدار $0.08\\text{ Wb}$، فإن كمية الشحنة الكهربية الكلية التي تسري خلال مقطع الملف تساوي:",
    "optionsEn": [
      "$0.04\\text{ C}$",
      "$2.5\\text{ C}$",
      "$16\\text{ C}$",
      "$1.0\\text{ C}$"
    ],
    "optionsAr": [
      "$0.04\\text{ C}$",
      "$2.5\\text{ C}$",
      "$16\\text{ C}$",
      "$1.0\\text{ C}$"
    ],
    "correctAnswer": "$1.0\\text{ C}$",
    "correctIndex": 3,
    "hintEn": "Use $Q = \\frac{N \\Delta\\Phi_m}{R}$. Time $\\Delta t$ cancels out!",
    "hintAr": "استخدم القانون: $Q = \\frac{N \\Delta\\Phi_m}{R}$ (الزمن $\\Delta t$ يختصر تماماً).",
    "stepByStepSolutionEn": [
      "From $\\text{emf} = N \\frac{\\Delta\\Phi_m}{\\Delta t}$ and $\\text{emf} = I R = \\left(\\frac{Q}{\\Delta t}\\right) R$, we have $Q R = N \\Delta\\Phi_m \\implies Q = \\frac{N \\Delta\\Phi_m}{R} = \\frac{50 \\times 0.08}{4} = \\frac{4}{4} = 1.0\\text{ C}$."
    ],
    "stepByStepSolutionAr": [
      "من قانون فاراداي $\\text{emf} = N \\frac{\\Delta\\Phi_m}{\\Delta t}$ وحيث إن $\\text{emf} = I R = \\frac{Q}{\\Delta t} R$، نجد أن: $Q = \\frac{N \\Delta\\Phi_m}{R} = \\frac{50 \\times 0.08}{4} = 1.0\\text{ C}$."
    ],
    "teacherTipEn": "Notice: The transferred charge $Q$ does NOT depend on the time $\\Delta t$ taken for the flux change!",
    "teacherTipAr": "قاعدة هامة: كمية الشحنة المنقولة لا تعتمد على زمن حدوث التغير في الفيض!"
  },
  {
    "id": "phys_ch3_db_med_09",
    "titleEn": "Mutual Inductance from Turns and Flux",
    "titleAr": "حساب معامل الحث المتبادل من عدد اللفات والفيض",
    "difficulty": "medium",
    "questionEn": "A primary coil carries a current of $4\\text{ A}$. When the primary circuit is opened, the magnetic flux linking a secondary coil of $300\\text{ turns}$ drops from $2 \\times 10^{-4}\\text{ Wb}$ to zero. The mutual inductance ($M$) between the two coils is:",
    "questionAr": "يمر تيار شدته $4\\text{ A}$ في ملف ابتدائي. عند فتح دائرته تلاشى الفيض المغناطيسي المخترق لملف ثانوي مجاور عدد لفاته $300\\text{ لفة}$ من $2 \\times 10^{-4}\\text{ Wb}$ إلى الصفر. فإن معامل الحث المتبادل ($M$) بينهما يساوي:",
    "optionsEn": [
      "$0.015\\text{ H}$",
      "$0.06\\text{ H}$",
      "$0.15\\text{ H}$",
      "$0.005\\text{ H}$"
    ],
    "optionsAr": [
      "$0.015\\text{ H}$",
      "$0.06\\text{ H}$",
      "$0.15\\text{ H}$",
      "$0.005\\text{ H}$"
    ],
    "correctAnswer": "$0.015\\text{ H}$",
    "correctIndex": 0,
    "hintEn": "Use $M \\Delta I_1 = N_2 \\Delta\\Phi_{m2}$.",
    "hintAr": "استخدم العلاقة: $M \\Delta I_1 = N_2 \\Delta\\Phi_{m2}$.",
    "stepByStepSolutionEn": [
      "Equating Faraday's law and the mutual induction formula: $M \\frac{\\Delta I_1}{\\Delta t} = N_2 \\frac{\\Delta\\Phi_{m2}}{\\Delta t} \\implies M \\Delta I_1 = N_2 \\Delta\\Phi_{m2}$. Thus, $M = \\frac{N_2 \\Delta\\Phi_{m2}}{\\Delta I_1} = \\frac{300 \\times (2 \\times 10^{-4})}{4} = \\frac{0.06}{4} = 0.015\\text{ H}$."
    ],
    "stepByStepSolutionAr": [
      "بمساواة قانون فاراداي بقانون الحث المتبادل: $M \\Delta I_1 = N_2 \\Delta\\Phi_{m2}$، ومنها $M = \\frac{300 \\times 2 \\times 10^{-4}}{4} = 0.015\\text{ H}$."
    ],
    "teacherTipEn": "This fundamental relation $M \\Delta I_1 = N_2 \\Delta\\Phi_{m2}$ is independent of $\\Delta t$.",
    "teacherTipAr": "العلاقة $M \\Delta I_1 = N_2 \\Delta\\Phi_{m2}$ من أهم العلاقات ولا تحتاج لمعرفة الزمن."
  },
  {
    "id": "phys_ch3_db_med_10",
    "titleEn": "Self-Inductance of an Air-Cored Solenoid Calculation",
    "titleAr": "حساب معامل الحث الذاتي لملف لولبي هوائي",
    "difficulty": "medium",
    "questionEn": "A solenoid of length $0.2\\text{ m}$, cross-sectional area $0.005\\text{ m}^2$, and $400\\text{ turns}$ is wound in air ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$). Its self-inductance ($L$) is approximately:",
    "questionAr": "ملف حلزوني طوله $0.2\\text{ m}$ ومساحة مقطعه $0.005\\text{ m}^2$ وعدد لفاته $400\\text{ لفة}$ في الهواء ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$). يكون معامل حثه الذاتي ($L$) مساوياً تقريباً:",
    "optionsEn": [
      "$1.26 \\times 10^{-3}\\text{ H}$",
      "$5.03 \\times 10^{-3}\\text{ H} \\approx 5.03\\text{ mH}$",
      "$2.51 \\times 10^{-2}\\text{ H}$",
      "$1.01 \\times 10^{-4}\\text{ H}$"
    ],
    "optionsAr": [
      "$1.26 \\times 10^{-3}\\text{ H}$",
      "$5.03 \\times 10^{-3}\\text{ H} \\approx 5.03\\text{ mH}$",
      "$2.51 \\times 10^{-2}\\text{ H}$",
      "$1.01 \\times 10^{-4}\\text{ H}$"
    ],
    "correctAnswer": "$5.03 \\times 10^{-3}\\text{ H} \\approx 5.03\\text{ mH}$",
    "correctIndex": 1,
    "hintEn": "$L = \\frac{\\mu N^2 A}{\\ell}$. Remember $N^2 = 400^2 = 160000$.",
    "hintAr": "$L = \\frac{\\mu N^2 A}{\\ell}$. تذكر أن $N^2 = 160000$.",
    "stepByStepSolutionEn": [
      "$L = \\frac{\\mu N^2 A}{\\ell} = \\frac{(4\\pi \\times 10^{-7}) \\times (400)^2 \\times 0.005}{0.2} = \\frac{4\\pi \\times 10^{-7} \\times 160000 \\times 0.005}{0.2} = \\frac{1.0053 \\times 10^{-3}}{0.2} \\approx 5.03 \\times 10^{-3}\\text{ H} = 5.03\\text{ mH}$."
    ],
    "stepByStepSolutionAr": [
      "$L = \\frac{4\\pi \\times 10^{-7} \\times 160000 \\times 0.005}{0.2} \\approx 5.03 \\times 10^{-3}\\text{ H} = 5.03\\text{ mH}$."
    ],
    "teacherTipEn": "Notice that inserting a soft iron core ($\\mu \\approx 2 \\times 10^{-3}$) would multiply this value hundreds of times.",
    "teacherTipAr": "وضع قلب من الحديد المطاوع يضاعف هذه القيمة مئات المرات لكبر نفاذيته."
  },
  {
    "id": "phys_ch3_db_med_11",
    "titleEn": "Effect of Stretching a Solenoid on Self-Inductance",
    "titleAr": "أثر إبعاد لفات ملف لولبي بانتظام على حثه الذاتي",
    "difficulty": "medium",
    "questionEn": "If the turns of a solenoid are pulled apart uniformly so that its length doubles while its number of turns and cross-sectional area remain constant, its self-inductance ($L$):",
    "questionAr": "إذا تباعدت لفات ملف حلزوني بانتظام بحيث تضاعف طوله مع بقاء عدد لفاته ومساحة مقطعه ثابتة، فإن معامل حثه الذاتي ($L$):",
    "optionsEn": [
      "Decreases to one quarter of its original value ($L/4$)",
      "Doubles to $2L$",
      "Decreases to half of its original value ($L/2$)",
      "Remains completely unchanged"
    ],
    "optionsAr": [
      "يقل إلى ربع قيمته الأصلية ($L/4$)",
      "يتضاعف إلى مثليه ($2L$)",
      "يقل إلى نصف قيمته الأصلية ($L/2$)",
      "يظل ثابتاً دون أي تغيير"
    ],
    "correctAnswer": "Decreases to half of its original value ($L/2$)",
    "correctIndex": 2,
    "hintEn": "$L = \\frac{\\mu N^2 A}{\\ell} \\propto \\frac{1}{\\ell}$.",
    "hintAr": "$L = \\frac{\\mu N^2 A}{\\ell}$، التناسب عكسي مع الطول $\\ell$.",
    "stepByStepSolutionEn": [
      "From $L = \\frac{\\mu N^2 A}{\\ell}$, since $\\mu$, $N$, and $A$ are unchanged and $\\ell' = 2\\ell$, we have $L' = \\frac{\\mu N^2 A}{2\\ell} = \\frac{1}{2} L$."
    ],
    "stepByStepSolutionAr": [
      "من العلاقة $L = \\frac{\\mu N^2 A}{\\ell}$، بما أن $N$ و $A$ ثابتان والطول زاد للضعف ($\\ell' = 2\\ell$)، فإن معامل الحث الذاتي يقل للنصف $L' = L/2$."
    ],
    "teacherTipEn": "Stretching increases $\\ell$, weakening the magnetic field density and decreasing $L$.",
    "teacherTipAr": "زيادة طول الملف تقلل كثافة الفيض وبالتالي تقلل الحث الذاتي."
  },
  {
    "id": "phys_ch3_db_med_12",
    "titleEn": "Effect of Doubling Solenoid Turns in Same Length",
    "titleAr": "أثر مضاعفة عدد لفات الملف في نفس الطول على الحث الذاتي",
    "difficulty": "medium",
    "questionEn": "If the number of turns of a solenoid is doubled while its length $\\ell$ and cross-sectional area $A$ are kept strictly constant, its self-inductance becomes:",
    "questionAr": "إذا تضاعف عدد لفات ملف حلزوني مع بقاء طوله ومساحة مقطعه ثابتين، فإن معامل حثه الذاتي يصبح:",
    "optionsEn": [
      "$2$ times its original value ($2L$)",
      "Half its original value ($L/2$)",
      "$16$ times its original value ($16L$)",
      "$4$ times its original value ($4L$)"
    ],
    "optionsAr": [
      "ضعف قيمته الأصلية ($2L$)",
      "نصف قيمته الأصلية ($L/2$)",
      "$16$ مثلاً لقيمته الأصلية ($16L$)",
      "$4$ أمثال قيمته الأصلية ($4L$)"
    ],
    "correctAnswer": "$4$ times its original value ($4L$)",
    "correctIndex": 3,
    "hintEn": "$L \\propto N^2$.",
    "hintAr": "$L \\propto N^2$.",
    "stepByStepSolutionEn": [
      "From $L = \\frac{\\mu N^2 A}{\\ell}$, $L \\propto N^2$. If $N' = 2N$, then $(N')^2 = 4N^2$, meaning the new self-inductance is $L' = 4L$."
    ],
    "stepByStepSolutionAr": [
      "من القانون $L = \\frac{\\mu N^2 A}{\\ell}$ نجد أن $L \\propto N^2$. وعند مضاعفة عدد اللفات $N' = 2N$ فإن $(2N)^2 = 4N^2$، فيزداد معامل الحث الذاتي إلى أربعة أمثاله."
    ],
    "teacherTipEn": "Never forget that $N$ is squared in the inductance formula!",
    "teacherTipAr": "تذكر دائماً أن عدد اللفات $N$ مربّع في قانون الحث الذاتي!"
  },
  {
    "id": "phys_ch3_db_med_13",
    "titleEn": "Cutting a Solenoid and Connecting to Same Voltage",
    "titleAr": "قطع جزء من ملف حلزوني وتوصيله بنفس المصدر",
    "difficulty": "medium",
    "questionEn": "A solenoid is cut in half, and one half is connected to the same DC battery (negligible internal resistance). The self-inductance of this half and the steady magnetic flux density inside it compare to the original as:",
    "questionAr": "قُطع ملف حلزوني إلى نصفين متماثلين، ووُصل أحد النصفين بنفس مصدر الجهد المستمر (مهمل المقاومة الداخلية). فإن معامل الحث الذاتي لهذا النصف وكثافة الفيض عند محوره مقارنة بالأصلي:",
    "optionsEn": [
      "Self-inductance halves ($L/2$), while flux density doubles ($2B$)",
      "Self-inductance doubles ($2L$), while flux density halves ($B/2$)",
      "Both self-inductance and flux density halve",
      "Both self-inductance and flux density remain unchanged"
    ],
    "optionsAr": [
      "معامل الحث الذاتي يقل للنصف ($L/2$)، بينما تزداد كثافة الفيض للضعف ($2B$)",
      "معامل الحث الذاتي يتضاعف ($2L$)، وتتحول كثافة الفيض إلى النصف ($B/2$)",
      "يقل كل من الحث الذاتي وكثافة الفيض إلى النصف",
      "يظل كل من الحث الذاتي وكثافة الفيض ثابتاً دون تغيير"
    ],
    "correctAnswer": "Self-inductance halves ($L/2$), while flux density doubles ($2B$)",
    "correctIndex": 0,
    "hintEn": "When cut in half: $N' = N/2$, $\\ell' = \\ell/2$, so $L' \\propto \\frac{(N/2)^2}{\\ell/2} = \\frac{1}{2} L$. Resistance also halves, so $I' = 2I$.",
    "hintAr": "عند القص: اللفات للنصف والطول للنصف فتكون $L' = L/2$. لكن المقاومة تقل للنصف فيتضاعف التيار وتصبح $B = \\mu n I$ ضعف القيمة الأصلية.",
    "stepByStepSolutionEn": [
      "1) $L' = \\frac{\\mu (N/2)^2 A}{\\ell/2} = \\frac{1}{2} \\frac{\\mu N^2 A}{\\ell} = L/2$. 2) Because length halved, wire resistance halved ($R' = R/2$). Connected to same voltage $V$, current doubles ($I' = 2I$). Since turns per unit length $n = N/\\ell$ is constant, $B' = \\mu n I' = \\mu n (2I) = 2B$."
    ],
    "stepByStepSolutionAr": [
      "1) معامل الحث: $L' = \\frac{\\mu (N/2)^2 A}{\\ell/2} = L/2$. 2) المقاومة الأومية تقل للنصف لأن طول السلك قل للنصف، فيتضاعف التيار $I' = 2I$ عند نفس الجهد. وبما أن عدد اللفات لوحدة الأطوال $n$ ثابت، فإن $B' = \\mu n I' = 2B$."
    ],
    "teacherTipEn": "A classic high-distinction conceptual problem combining Chapters 1, 2, and 3.",
    "teacherTipAr": "مسألة للمتميزين تربط بذكاء بين الفصل الأول والثاني والثالث."
  },
  {
    "id": "phys_ch3_db_med_14",
    "titleEn": "Energy Stored in an Inductor Magnetic Field",
    "titleAr": "حساب الطاقة المغناطيسية المخزونة في ملف حث",
    "difficulty": "medium",
    "questionEn": "An inductor of self-inductance $L = 0.5\\text{ H}$ carries a steady direct current of $6\\text{ A}$. The magnetic energy stored in its magnetic field is:",
    "questionAr": "ملف حث معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار مستمر شدته $6\\text{ A}$. فإن الطاقة المغناطيسية المختزنة في مجاله المغناطيسي تساوي:",
    "optionsEn": [
      "$1.5\\text{ J}$",
      "$9.0\\text{ J}$",
      "$18.0\\text{ J}$",
      "$3.0\\text{ J}$"
    ],
    "optionsAr": [
      "$1.5\\text{ J}$",
      "$9.0\\text{ J}$",
      "$18.0\\text{ J}$",
      "$3.0\\text{ J}$"
    ],
    "correctAnswer": "$9.0\\text{ J}$",
    "correctIndex": 1,
    "hintEn": "Formula: $W = \\frac{1}{2} L I^2$.",
    "hintAr": "القانون: $W = \\frac{1}{2} L I^2$.",
    "stepByStepSolutionEn": [
      "$W = \\frac{1}{2} L I^2 = \\frac{1}{2} \\times 0.5 \\times (6)^2 = 0.25 \\times 36 = 9.0\\text{ J}$."
    ],
    "stepByStepSolutionAr": [
      "$W = \\frac{1}{2} L I^2 = \\frac{1}{2} \\times 0.5 \\times 36 = 9.0\\text{ J}$."
    ],
    "teacherTipEn": "Analogous to kinetic energy in mechanics: $\\frac{1}{2} m v^2 \\leftrightarrow \\frac{1}{2} L I^2$.",
    "teacherTipAr": "تماثل الطاقة الحركية في الميكانيكا تماماً: $\\frac{1}{2} m v^2 \\leftrightarrow \\frac{1}{2} L I^2$."
  },
  {
    "id": "phys_ch3_db_med_15",
    "titleEn": "Rate of Current Change Given Self-Induced EMF",
    "titleAr": "حساب معدل نمو أو تلاشي التيار من القوة الدافعة الذاتية",
    "difficulty": "medium",
    "questionEn": "If a reverse self-induced electromotive force of $15\\text{ V}$ is induced in a coil of self-inductance $0.05\\text{ H}$, the rate of change of current ($\\frac{\\Delta I}{\\Delta t}$) through the coil is:",
    "questionAr": "إذا تولدت قوة دافعة كهربية مستحثة ذاتية عكسية مقدارها $15\\text{ V}$ في ملف معامل حثه الذاتي $0.05\\text{ H}$، فإن المعدل الزمني لتغير شدة التيار ($\\frac{\\Delta I}{\\Delta t}$) يساوي:",
    "optionsEn": [
      "$0.75\\text{ A/s}$",
      "$75\\text{ A/s}$",
      "$300\\text{ A/s}$",
      "$150\\text{ A/s}$"
    ],
    "optionsAr": [
      "$0.75\\text{ A/s}$",
      "$75\\text{ A/s}$",
      "$300\\text{ A/s}$",
      "$150\\text{ A/s}$"
    ],
    "correctAnswer": "$300\\text{ A/s}$",
    "correctIndex": 2,
    "hintEn": "$\\text{emf} = L \\frac{\\Delta I}{\\Delta t} \\implies \\frac{\\Delta I}{\\Delta t} = \\frac{\\text{emf}}{L}$.",
    "hintAr": "$\\text{emf} = L \\frac{\\Delta I}{\\Delta t} \\implies \\frac{\\Delta I}{\\Delta t} = \\frac{\\text{emf}}{L}$.",
    "stepByStepSolutionEn": [
      "$\\frac{\\Delta I}{\\Delta t} = \\frac{|\\text{emf}|}{L} = \\frac{15}{0.05} = \\frac{1500}{5} = 300\\text{ A/s}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\Delta I}{\\Delta t} = \\frac{15}{0.05} = 300\\text{ A/s}$."
    ],
    "teacherTipEn": "The rate of current change is measured in Amperes per second ($\\text{A/s}$).",
    "teacherTipAr": "يقاس معدل تغير التيار بوحدة أمبير/ثانية ($\\text{A/s}$)."
  },
  {
    "id": "phys_ch3_db_med_16",
    "titleEn": "Dynamo Peak EMF Calculation",
    "titleAr": "حساب القيمة العظمى للقوة الدافعة لدينامو",
    "difficulty": "medium",
    "questionEn": "An AC dynamo coil consists of $200\\text{ turns}$, each of area $0.03\\text{ m}^2$, rotating in a uniform magnetic field of $0.5\\text{ T}$ at a rotational frequency of $50\\text{ Hz}$. The peak electromotive force ($\\text{emf}_{\\max}$) generated is approximately ($\\pi = \\frac{22}{7}$):",
    "questionAr": "ملف دينامو تيار متردد يتكون من $200\\text{ لفة}$ ومساحة كل لفة $0.03\\text{ m}^2$ يدور في مجال مغناطيسي منتظم $0.5\\text{ T}$ بتردد دوران $50\\text{ Hz}$. تكون القيمة العظمى للقوة الدافعة المستحثة مساوية تقريباً ($\\pi = \\frac{22}{7}$):",
    "optionsEn": [
      "$300.00\\text{ V}$",
      "$471.43\\text{ V}$",
      "$1885.71\\text{ V}$",
      "$942.86\\text{ V}$"
    ],
    "optionsAr": [
      "$300.00\\text{ V}$",
      "$471.43\\text{ V}$",
      "$1885.71\\text{ V}$",
      "$942.86\\text{ V}$"
    ],
    "correctAnswer": "$942.86\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "$\\text{emf}_{\\max} = 2\\pi N B A f$.",
    "hintAr": "$\\text{emf}_{\\max} = 2\\pi N B A f$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\max} = 2\\pi f N B A = 2 \\times \\frac{22}{7} \\times 50 \\times 200 \\times 0.5 \\times 0.03 = 2 \\times \\frac{22}{7} \\times 50 \\times 3 = \\frac{6600}{7} \\approx 942.86\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\max} = 2 \\times \\frac{22}{7} \\times 50 \\times 200 \\times 0.5 \\times 0.03 = \\frac{6600}{7} \\approx 942.86\\text{ V}$."
    ],
    "teacherTipEn": "Remember $\\omega = 2\\pi f = 100\\pi\\text{ rad/s}$ for $50\\text{ Hz}$.",
    "teacherTipAr": "تذكر أن السرعة الزاوية $\\omega = 2\\pi f = 100\\pi\\text{ rad/s}$ لتردد $50\\text{ Hz}$."
  },
  {
    "id": "phys_ch3_db_med_17",
    "titleEn": "Instantaneous EMF at 30 Degrees to Normal",
    "titleAr": "القوة الدافعة اللحظية عندما يصنع العمودي زاوية 30 مع المجال",
    "difficulty": "medium",
    "questionEn": "In the previous dynamo ($\\text{emf}_{\\max} \\approx 942.86\\text{ V}$), the instantaneous induced EMF at the moment the normal to the coil makes an angle of $30^\\circ$ with the magnetic field lines is:",
    "questionAr": "في الدينامو السابق ($\\text{emf}_{\\max} \\approx 942.86\\text{ V}$)، تكون القوة الدافعة الكهربية اللحظية عندما يصنع العمودي على مستوى الملف زاوية $30^\\circ$ مع خطوط المجال مساوية:",
    "optionsEn": [
      "$471.43\\text{ V}$",
      "$816.53\\text{ V}$",
      "$942.86\\text{ V}$",
      "$235.71\\text{ V}$"
    ],
    "optionsAr": [
      "$471.43\\text{ V}$",
      "$816.53\\text{ V}$",
      "$942.86\\text{ V}$",
      "$235.71\\text{ V}$"
    ],
    "correctAnswer": "$471.43\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_t = \\text{emf}_{\\max} \\sin 30^\\circ$.",
    "hintAr": "$\\text{emf}_t = \\text{emf}_{\\max} \\sin 30^\\circ$.",
    "stepByStepSolutionEn": [
      "Since $\\theta = 30^\\circ$ is already given relative to the normal to the coil plane, $\\text{emf}_t = \\text{emf}_{\\max} \\sin 30^\\circ = 942.86 \\times 0.5 = 471.43\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الزاوية المعطاة هي الزاوية مع العمودي على مستوى الملف ($\\theta = 30^\\circ$)، فإن $\\text{emf}_t = \\text{emf}_{\\max} \\sin 30^\\circ = 942.86 \\times 0.5 = 471.43\\text{ V}$."
    ],
    "teacherTipEn": "At $\\theta = 30^\\circ$ to the normal, instantaneous EMF is exactly half of the maximum EMF.",
    "teacherTipAr": "عند زاوية $30^\\circ$ مع العمودي، القوة الدافعة اللحظية تساوي نصف العظمى تماماً."
  },
  {
    "id": "phys_ch3_db_med_18",
    "titleEn": "Instantaneous EMF when Coil Plane is at 60 Degrees to Field",
    "titleAr": "القوة الدافعة اللحظية عندما يصنع مستوى الملف زاوية 60 مع المجال",
    "difficulty": "medium",
    "questionEn": "An AC dynamo has $\\text{emf}_{\\max} = 200\\text{ V}$. What is the instantaneous EMF when the plane of the coil makes an angle of $60^\\circ$ with the magnetic field lines?",
    "questionAr": "دينامو تيار متردد قيمته العظمى $\\text{emf}_{\\max} = 200\\text{ V}$. ما هي القيمة اللحظية للقوة الدافعة عندما يصنع مستوى الملف زاوية $60^\\circ$ مع خطوط المجال المغناطيسي؟",
    "optionsEn": [
      "$173.2\\text{ V}$",
      "$100\\text{ V}$",
      "$141.4\\text{ V}$",
      "$200\\text{ V}$"
    ],
    "optionsAr": [
      "$173.2\\text{ V}$",
      "$100\\text{ V}$",
      "$141.4\\text{ V}$",
      "$200\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "Angle with field is $60^\\circ \\implies$ angle with normal is $\\theta = 90^\\circ - 60^\\circ = 30^\\circ$.",
    "hintAr": "الزاوية مع المجال $60^\\circ \\implies$ الزاوية مع العمودي $\\theta = 90^\\circ - 60^\\circ = 30^\\circ$.",
    "stepByStepSolutionEn": [
      "In the dynamo formula $\\text{emf}_t = \\text{emf}_{\\max} \\sin\\theta$, $\\theta$ is the angle with the normal. Here $\\theta = 90^\\circ - 60^\\circ = 30^\\circ$. Thus $\\text{emf}_t = 200 \\times \\sin 30^\\circ = 200 \\times 0.5 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "في قانون الدينامو $\\theta$ هي الزاوية مع العمودي على الملف. بما أن زاوية الملف مع المجال هي $60^\\circ$ فإن $\\theta = 90^\\circ - 60^\\circ = 30^\\circ$. وعليه فإن $\\text{emf}_t = 200 \\times \\sin 30^\\circ = 100\\text{ V}$."
    ],
    "teacherTipEn": "Never use the angle between coil plane and field directly in $\\sin\\theta$ for a dynamo!",
    "teacherTipAr": "لا تستخدم زاوية مستوى الملف مع المجال مباشرة في قانون الدينامو، بل اطرحها من $90^\\circ$!"
  },
  {
    "id": "phys_ch3_db_med_19",
    "titleEn": "Time to Reach Half-Maximum EMF from Zero Position",
    "titleAr": "الزمن اللازم للوصول إلى نصف القيمة العظمى بدءاً من الصفر",
    "difficulty": "medium",
    "questionEn": "The armature of an AC dynamo rotates at a frequency $f = 50\\text{ Hz}$. Starting from the zero (perpendicular) position, the time required for the induced EMF to reach half of its maximum value ($\\frac{1}{2}\\text{emf}_{\\max}$) for the first time is:",
    "questionAr": "يدور ملف دينامو تيار متردد بتردد $f = 50\\text{ Hz}$. بدءاً من الوضع العمودي (الصفر)، فإن الزمن اللازم لتصل القوة الدافعة المستحثة إلى نصف قيمتها العظمى لأول مرة يساوي:",
    "optionsEn": [
      "$\\frac{1}{300}\\text{ s} \\approx 3.33\\text{ ms}$",
      "$\\frac{1}{200}\\text{ s} = 5.0\\text{ ms}$",
      "$\\frac{1}{600}\\text{ s} \\approx 1.67\\text{ ms}$",
      "$\\frac{1}{400}\\text{ s} = 2.5\\text{ ms}$"
    ],
    "optionsAr": [
      "$\\frac{1}{300}\\text{ s} \\approx 3.33\\text{ ms}$",
      "$\\frac{1}{200}\\text{ s} = 5.0\\text{ ms}$",
      "$\\frac{1}{600}\\text{ s} \\approx 1.67\\text{ ms}$",
      "$\\frac{1}{400}\\text{ s} = 2.5\\text{ ms}$"
    ],
    "correctAnswer": "$\\frac{1}{600}\\text{ s} \\approx 1.67\\text{ ms}$",
    "correctIndex": 2,
    "hintEn": "$\\sin\\theta = 0.5 \\implies \\theta = 30^\\circ$. Since $\\theta = 360^\\circ f t$, solve for $t$.",
    "hintAr": "$\\sin\\theta = 0.5 \\implies \\theta = 30^\\circ$. وحيث إن $\\theta = 360^\\circ f t$، احسب $t$.",
    "stepByStepSolutionEn": [
      "The half-maximum value occurs at $\\theta = 30^\\circ$. Since $\\theta = 360^\\circ \\times f \\times t$, we have $30^\\circ = 360^\\circ \\times 50 \\times t \\implies t = \\frac{30}{18000} = \\frac{1}{600}\\text{ s} \\approx 1.67\\text{ ms}$. Alternatively, $t = \\frac{T}{12} = \\frac{0.02}{12} = \\frac{1}{600}\\text{ s}$."
    ],
    "stepByStepSolutionAr": [
      "تصل القوة الدافعة لنصف العظمى عند $\\theta = 30^\\circ$. بما أن $\\theta = 360^\\circ f t$، فإن $30 = 360 \\times 50 \\times t \\implies t = \\frac{30}{18000} = \\frac{1}{600}\\text{ s}$. أو من العلاقة $t = \\frac{T}{12} = \\frac{1}{12 \\times 50} = \\frac{1}{600}\\text{ s}$."
    ],
    "teacherTipEn": "Reaching half-maximum takes $T/12$, while reaching maximum takes $T/4 = 3T/12$.",
    "teacherTipAr": "الوصول لنصف العظمى يستغرق $T/12$، بينما الوصول للعظمى يستغرق $T/4$."
  },
  {
    "id": "phys_ch3_db_med_20",
    "titleEn": "Time to Reach Effective Value from Zero Position",
    "titleAr": "الزمن اللازم للوصول إلى القيمة الفعالة بدءاً من الصفر",
    "difficulty": "medium",
    "questionEn": "For a dynamo generating AC at $f = 50\\text{ Hz}$, starting from the zero position, the time required for the induced EMF to equal its effective value for the first time is:",
    "questionAr": "لدينامو يولد تياراً متردداً بتردد $f = 50\\text{ Hz}$، بدءاً من وضع الصفر، فإن الزمن اللازم لتتساوى القوة الدافعة مع قيمتها الفعالة لأول مرة يساوي:",
    "optionsEn": [
      "$\\frac{1}{600}\\text{ s} \\approx 1.67\\text{ ms}$",
      "$\\frac{1}{200}\\text{ s} = 5.0\\text{ ms}$",
      "$\\frac{1}{800}\\text{ s} = 1.25\\text{ ms}$",
      "$\\frac{1}{400}\\text{ s} = 2.5\\text{ ms}$"
    ],
    "optionsAr": [
      "$\\frac{1}{600}\\text{ s} \\approx 1.67\\text{ ms}$",
      "$\\frac{1}{200}\\text{ s} = 5.0\\text{ ms}$",
      "$\\frac{1}{800}\\text{ s} = 1.25\\text{ ms}$",
      "$\\frac{1}{400}\\text{ s} = 2.5\\text{ ms}$"
    ],
    "correctAnswer": "$\\frac{1}{400}\\text{ s} = 2.5\\text{ ms}$",
    "correctIndex": 3,
    "hintEn": "$\\sin\\theta = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$. $t = \\frac{T}{8}$.",
    "hintAr": "تصل للفعالة عند $\\theta = 45^\\circ$ أي زمن قدره $t = \\frac{T}{8}$.",
    "stepByStepSolutionEn": [
      "Effective value occurs at $\\theta = 45^\\circ$. $t = \\frac{45^\\circ}{360^\\circ \\times 50} = \\frac{1}{8 \\times 50} = \\frac{1}{400}\\text{ s} = 2.5\\text{ ms}$."
    ],
    "stepByStepSolutionAr": [
      "تتساوى اللحظية مع الفعالة عند $\\theta = 45^\\circ$. إذن $t = \\frac{45}{360 \\times 50} = \\frac{1}{400}\\text{ s} = 2.5\\text{ ms}$."
    ],
    "teacherTipEn": "At $50\\text{ Hz}$: Period $T = 20\\text{ ms}$; $T/8 = 2.5\\text{ ms}$.",
    "teacherTipAr": "عند تردد $50\\text{ Hz}$: الزمن الدوري $T = 20\\text{ ms}$؛ ونصف الربع $T/8 = 2.5\\text{ ms}$."
  },
  {
    "id": "phys_ch3_db_med_21",
    "titleEn": "Peak Voltage from Domestic Supply",
    "titleAr": "حساب الجهد الأقصى لجهد المنازل الفعال",
    "difficulty": "medium",
    "questionEn": "The alternating voltage supplied to domestic households in Egypt has an effective value of $220\\text{ V}$. The peak maximum voltage ($\\text{emf}_{\\max}$) of this supply is approximately:",
    "questionAr": "فرق الجهد المتردد الواصل للمنازل في مصر قيمته الفعالة $220\\text{ V}$. تكون القيمة العظمى لفرق الجهد ($\\text{emf}_{\\max}$) مساوية تقريباً:",
    "optionsEn": [
      "$311.13\\text{ V}$",
      "$155.56\\text{ V}$",
      "$220.00\\text{ V}$",
      "$440.00\\text{ V}$"
    ],
    "optionsAr": [
      "$311.13\\text{ V}$",
      "$155.56\\text{ V}$",
      "$220.00\\text{ V}$",
      "$440.00\\text{ V}$"
    ],
    "correctAnswer": "$311.13\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} = V_{\\text{eff}} \\times \\sqrt{2}$.",
    "hintAr": "$V_{\\max} = V_{\\text{eff}} \\times \\sqrt{2}$.",
    "stepByStepSolutionEn": [
      "$V_{\\max} = V_{\\text{eff}} \\sqrt{2} = 220 \\times 1.4142 \\approx 311.13\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} = V_{\\text{eff}} \\sqrt{2} = 220 \\times 1.4142 \\approx 311.13\\text{ V}$."
    ],
    "teacherTipEn": "Insulation of household wiring must withstand peak voltages of at least $311\\text{ V}$, not just $220\\text{ V}$.",
    "teacherTipAr": "يجب أن تتحمل عوازل الأجهزة والأسلاك المنزلية جهداً يصل إلى $311\\text{ V}$."
  },
  {
    "id": "phys_ch3_db_med_22",
    "titleEn": "Thermal Power Dissipated in Resistor by AC",
    "titleAr": "حساب القدرة الحرارية المستهلكة في مقاومة بواسطة تيار متردد",
    "difficulty": "medium",
    "questionEn": "An alternating voltage with maximum peak value $V_{\\max} = 100\\text{ V}$ is connected across a pure resistor of $25\\,\\Omega$. The average electrical power dissipated as heat in the resistor is:",
    "questionAr": "مصدر جهد متردد قيمته العظمى $V_{\\max} = 100\\text{ V}$ اتصل بمقاومة أومية عديمة الحث قيمتها $25\\,\\Omega$. فإن متوسط القدرة الحرارية المستهلكة في المقاومة يساوي:",
    "optionsEn": [
      "$400\\text{ W}$",
      "$200\\text{ W}$",
      "$100\\text{ W}$",
      "$50\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$",
      "$200\\text{ W}$",
      "$100\\text{ W}$",
      "$50\\text{ W}$"
    ],
    "correctAnswer": "$200\\text{ W}$",
    "correctIndex": 1,
    "hintEn": "Power is calculated strictly using effective values: $P = \\frac{V_{\\text{eff}}^2}{R} = \\frac{(V_{\\max}/\\sqrt{2})^2}{R} = \\frac{V_{\\max}^2}{2R}$.",
    "hintAr": "القدرة تُحسب حصرياً بالقيم الفعالة: $P = \\frac{V_{\\text{eff}}^2}{R} = \\frac{V_{\\max}^2}{2R}$.",
    "stepByStepSolutionEn": [
      "$V_{\\text{eff}} = \\frac{100}{\\sqrt{2}}\\text{ V}$. Power: $P = \\frac{V_{\\text{eff}}^2}{R} = \\frac{10000 / 2}{25} = \\frac{5000}{25} = 200\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\text{eff}} = \\frac{100}{\\sqrt{2}}\\text{ V}$. القدرة: $P = \\frac{V_{\\text{eff}}^2}{R} = \\frac{(100/\\sqrt{2})^2}{25} = \\frac{5000}{25} = 200\\text{ W}$."
    ],
    "teacherTipEn": "Common student error: Using $V_{\\max}^2/R$ directly, which overestimates power by a factor of 2!",
    "teacherTipAr": "خطأ شائع: استخدام $V_{\\max}^2 / R$ مباشرة يضاعف القدرة إلى الضعف خطأً!"
  },
  {
    "id": "phys_ch3_db_med_23",
    "titleEn": "Average EMF in Half-Cycle Starting from Parallel Position",
    "titleAr": "متوسط القوة الدافعة خلال نصف دورة من الوضع الموازي",
    "difficulty": "medium",
    "questionEn": "An AC dynamo has a maximum EMF $\\text{emf}_{\\max} = 120\\text{ V}$. The average induced electromotive force during a half-cycle starting from the parallel position is:",
    "questionAr": "دينامو تيار متردد قيمته العظمى $\\text{emf}_{\\max} = 120\\text{ V}$. يكون متوسط القوة الدافعة المستحثة خلال نصف دورة بدءاً من الوضع الموازي لمجال مغناطيسي منتظم مساوياً:",
    "optionsEn": [
      "$\\frac{240}{\\pi}\\text{ V} \\approx 76.39\\text{ V}$",
      "$60\\text{ V}$",
      "$0\\text{ V}$",
      "$84.85\\text{ V}$"
    ],
    "optionsAr": [
      "$\\frac{240}{\\pi}\\text{ V} \\approx 76.39\\text{ V}$",
      "$60\\text{ V}$",
      "$0\\text{ V}$",
      "$84.85\\text{ V}$"
    ],
    "correctAnswer": "$0\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "From parallel position, $\\Phi_{m1} = 0$, and after $180^\\circ$ rotation $\\Phi_{m2} = 0$.",
    "hintAr": "في الوضع الموازي يكون الفيض الابتدائي صفراً، وبعد نصف دورة ($180^\\circ$) يكون الفيض النهائي صفراً أيضاً.",
    "stepByStepSolutionEn": [
      "In the parallel position, the coil plane is parallel to the field, so $\\Phi_{m1} = 0$. After a half revolution ($180^\\circ$), the coil plane is parallel to the field again, so $\\Phi_{m2} = 0$. Therefore, $\\Delta\\Phi_m = 0 - 0 = 0$, which means $\\text{emf}_{\\text{avg}} = -N \\frac{\\Delta\\Phi_m}{\\Delta t} = 0\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "عندما يبدأ الدوران من الوضع الموازي يكون الفيض $\\Phi_{m1} = 0$. وبعد نصف دورة يعود الملف موازياً فيكون $\\Phi_{m2} = 0$. وعليه يكون $\\Delta\\Phi_m = 0$، فيكون متوسط القوة الدافعة المستحثة خلال نصف دورة من الوضع الموازي مساوياً للصفر."
    ],
    "teacherTipEn": "Crucial distinction: Half-cycle from perpendicular = $\\frac{2}{\\pi}\\text{emf}_{\\max}$; Half-cycle from parallel = 0!",
    "teacherTipAr": "فارق جوهري: متوسط نصف دورة من الوضع العمودي = $\\frac{2}{\\pi}\\text{emf}_{\\max}$؛ بينما من الوضع الموازي = صفر!"
  },
  {
    "id": "phys_ch3_db_med_24",
    "titleEn": "Average EMF in 3/4 Cycle Starting from Perpendicular Position",
    "titleAr": "متوسط القوة الدافعة خلال ثلاثة أرباع دورة من الوضع العمودي",
    "difficulty": "medium",
    "questionEn": "If the peak EMF of an AC dynamo is $\\text{emf}_{\\max} = 100\\text{ V}$, its average induced EMF over three-quarters of a cycle ($3/4\\text{ cycle}$) starting from the perpendicular position is:",
    "questionAr": "إذا كانت القيمة العظمى لقوة دافعة كهربية لدينامو هي $\\text{emf}_{\\max} = 100\\text{ V}$، فإن متوسط القوة الدافعة المستحثة خلال ثلاثة أرباع دورة ($3/4\\text{ دورة}$) بدءاً من الوضع العمودي تساوي:",
    "optionsEn": [
      "$\\frac{2}{\\pi}\\text{emf}_{\\max} \\approx 63.66\\text{ V}$",
      "$\\frac{4}{3\\pi}\\text{emf}_{\\max} \\approx 42.44\\text{ V}$",
      "$0\\text{ V}$",
      "$\\frac{2}{3\\pi}\\text{emf}_{\\max} = \\frac{200}{3\\pi}\\text{ V} \\approx 21.22\\text{ V}$"
    ],
    "optionsAr": [
      "$\\frac{2}{\\pi}\\text{emf}_{\\max} \\approx 63.66\\text{ V}$",
      "$\\frac{4}{3\\pi}\\text{emf}_{\\max} \\approx 42.44\\text{ V}$",
      "$0\\text{ V}$",
      "$\\frac{2}{3\\pi}\\text{emf}_{\\max} = \\frac{200}{3\\pi}\\text{ V} \\approx 21.22\\text{ V}$"
    ],
    "correctAnswer": "$\\frac{2}{3\\pi}\\text{emf}_{\\max} = \\frac{200}{3\\pi}\\text{ V} \\approx 21.22\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "Time is $\\Delta t = \\frac{3}{4} T = \\frac{3}{4f}$. Flux change is $\\Delta\\Phi_m = 0 - B A = -B A$.",
    "hintAr": "الزمن $\\Delta t = \\frac{3}{4f}$ والتغير في الفيض $|\\Delta\\Phi_m| = B A$.",
    "stepByStepSolutionEn": [
      "At $t = 0$, $\\Phi_{m1} = BA$. At $3/4\\text{ turn}$ ($270^\\circ$), the coil is parallel, so $\\Phi_{m2} = 0 \\implies |\\Delta\\Phi_m| = BA$. $\\text{emf}_{\\text{avg}} = N \\frac{BA}{(3/4f)} = \\frac{4}{3} N B A f$. Since $\\text{emf}_{\\max} = 2\\pi N B A f$, we have $\\text{emf}_{\\text{avg}} = \\frac{4/3}{2\\pi} \\text{emf}_{\\max} = \\frac{2}{3\\pi} \\text{emf}_{\\max} = \\frac{200}{3\\pi} \\approx 21.22\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "خلال ثلاثة أرباع دورة: $\\Delta\\Phi_m = B A$ والزمن $\\Delta t = \\frac{3}{4f}$، فيكون $\\text{emf}_{\\text{avg}} = \\frac{4}{3} N B A f = \\frac{2}{3\\pi}\\text{emf}_{\\max} \\approx 21.22\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over 3/4 cycle is exactly one-third of the average EMF over 1/4 cycle.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال $3/4$ دورة يساوي ثلث متوسطها خلال ربع دورة."
  },
  {
    "id": "phys_ch3_db_med_25",
    "titleEn": "Ideal Transformer Secondary Voltage Calculation",
    "titleAr": "حساب جهد الملف الثانوي لمحول مثالي",
    "difficulty": "medium",
    "questionEn": "An ideal step-down transformer has a primary coil of $1200\\text{ turns}$ and a secondary coil of $60\\text{ turns}$. If the primary is connected to an alternating source of $240\\text{ V}$, the secondary output voltage is:",
    "questionAr": "محول كهربي مثالي خافض للجهد عدد لفات ملفه الابتدائي $1200\\text{ لفة}$ وعدد لفات ملفه الثانوي $60\\text{ لفة}$. إذا اتصل ملفه الابتدائي بمصدر متردد $240\\text{ V}$، فإن فرق الجهد الناتج من الملف الثانوي يساوي:",
    "optionsEn": [
      "$12\\text{ V}$",
      "$4800\\text{ V}$",
      "$24\\text{ V}$",
      "$6\\text{ V}$"
    ],
    "optionsAr": [
      "$12\\text{ V}$",
      "$4800\\text{ V}$",
      "$24\\text{ V}$",
      "$6\\text{ V}$"
    ],
    "correctAnswer": "$12\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "Use $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$.",
    "hintAr": "استخدم القانون $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$.",
    "stepByStepSolutionEn": [
      "$\\frac{V_s}{240} = \\frac{60}{1200} = \\frac{1}{20} \\implies V_s = \\frac{240}{20} = 12\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{V_s}{240} = \\frac{60}{1200} = \\frac{1}{20} \\implies V_s = 12\\text{ V}$."
    ],
    "teacherTipEn": "The turns ratio is $20:1$ step-down, reducing $240\\text{ V}$ to $12\\text{ V}$.",
    "teacherTipAr": "نسبة التحويل $20:1$ خافضة، فتخفض الجهد من $240\\text{ V}$ إلى $12\\text{ V}$."
  },
  {
    "id": "phys_ch3_db_med_26",
    "titleEn": "Ideal Transformer Primary Current Calculation",
    "titleAr": "حساب شدة تيار الملف الابتدائي لمحول مثالي",
    "difficulty": "medium",
    "questionEn": "In the previous ideal transformer ($V_p = 240\\text{ V}$, $V_s = 12\\text{ V}$, $N_p = 1200$, $N_s = 60$), if a lamp connected to the secondary draws a current of $5\\text{ A}$, the current drawn by the primary coil is:",
    "questionAr": "في المحول المثالي السابق ($V_p = 240\\text{ V}$، $V_s = 12\\text{ V}$، $I_s = 5\\text{ A}$)، تكون شدة التيار المسحوب بواسطة الملف الابتدائي مساوية:",
    "optionsEn": [
      "$100\\text{ A}$",
      "$0.25\\text{ A}$",
      "$0.5\\text{ A}$",
      "$2.5\\text{ A}$"
    ],
    "optionsAr": [
      "$100\\text{ A}$",
      "$0.25\\text{ A}$",
      "$0.5\\text{ A}$",
      "$2.5\\text{ A}$"
    ],
    "correctAnswer": "$0.25\\text{ A}$",
    "correctIndex": 1,
    "hintEn": "$\\frac{I_p}{I_s} = \\frac{V_s}{V_p} = \\frac{N_s}{N_p}$.",
    "hintAr": "$\\frac{I_p}{I_s} = \\frac{V_s}{V_p} = \\frac{N_s}{N_p}$.",
    "stepByStepSolutionEn": [
      "$\\frac{I_p}{5} = \\frac{60}{1200} = \\frac{1}{20} \\implies I_p = \\frac{5}{20} = 0.25\\text{ A}$. Alternatively: $P = V_s I_s = 12 \\times 5 = 60\\text{ W} \\implies I_p = \\frac{60}{240} = 0.25\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{I_p}{5} = \\frac{60}{1200} = \\frac{1}{20} \\implies I_p = 0.25\\text{ A}$. أو من ثبوت القدرة: $P = 12 \\times 5 = 60\\text{ W} \\implies I_p = \\frac{60}{240} = 0.25\\text{ A}$."
    ],
    "teacherTipEn": "Current ratio is inverted relative to turns ratio: stepping down voltage steps down primary current relative to secondary.",
    "teacherTipAr": "نسبة التيارات معكوسة، فالتيار في الابتدائي أقل من الثانوي."
  },
  {
    "id": "phys_ch3_db_med_27",
    "titleEn": "Non-Ideal Transformer Secondary Current with Efficiency",
    "titleAr": "حساب تيار الثانوي في محول غير مثالي بمعلومية الكفاءة",
    "difficulty": "medium",
    "questionEn": "A transformer has an efficiency $\\eta = 80\\%$. It operates from a primary voltage of $200\\text{ V}$ with a primary current of $2\\text{ A}$. If the secondary coil delivers a voltage of $32\\text{ V}$, the secondary current is:",
    "questionAr": "محول كهربي كفاءته $\\eta = 80\\%$. يعمل بجهد ابتدائي $200\\text{ V}$ وتيار ابتدائي $2\\text{ A}$. إذا كان جهد الملف الثانوي $32\\text{ V}$، فإن شدة تيار الملف الثانوي تساوي:",
    "optionsEn": [
      "$12.5\\text{ A}$",
      "$8\\text{ A}$",
      "$10\\text{ A}$",
      "$16\\text{ A}$"
    ],
    "optionsAr": [
      "$12.5\\text{ A}$",
      "$8\\text{ A}$",
      "$10\\text{ A}$",
      "$16\\text{ A}$"
    ],
    "correctAnswer": "$10\\text{ A}$",
    "correctIndex": 2,
    "hintEn": "Efficiency equation: $\\eta = \\frac{V_s I_s}{V_p I_p} \\implies V_s I_s = \\eta V_p I_p$.",
    "hintAr": "معادلة الكفاءة: $\\eta = \\frac{V_s I_s}{V_p I_p} \\implies V_s I_s = \\frac{80}{100} V_p I_p$.",
    "stepByStepSolutionEn": [
      "Primary power: $P_p = V_p I_p = 200 \\times 2 = 400\\text{ W}$. Secondary power: $P_s = 0.80 \\times 400 = 320\\text{ W}$. Secondary current: $I_s = \\frac{P_s}{V_s} = \\frac{320\\text{ W}}{32\\text{ V}} = 10\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الداخلة للابتدائي: $P_p = 200 \\times 2 = 400\\text{ W}$. القدرة الناتجة من الثانوي: $P_s = 0.8 \\times 400 = 320\\text{ W}$. تيار الثانوي: $I_s = \\frac{320}{32} = 10\\text{ A}$."
    ],
    "teacherTipEn": "Always multiply primary power by efficiency to get actual secondary power.",
    "teacherTipAr": "اضرب قدرة الابتدائي دائماً في الكفاءة للحصول على قدرة الثانوي الحقيقية."
  },
  {
    "id": "phys_ch3_db_med_28",
    "titleEn": "Transformer Operating Two Secondary Coils Simultaneously",
    "titleAr": "محول يعمل بملفين ثانويين معاً في نفس الوقت",
    "difficulty": "medium",
    "questionEn": "An ideal transformer has a primary coil connected to a $220\\text{ V}$ source and two secondary coils. The first secondary powers a device at $12\\text{ V}, 2\\text{ A}$, and the second powers a device at $24\\text{ V}, 0.5\\text{ A}$. The current drawn by the primary coil when both operate simultaneously is:",
    "questionAr": "محول مثالي يتصل ملفه الابتدائي بمصدر $220\\text{ V}$، وله ملفان ثانويان. الأول يشغل جهازاً يعمل على $12\\text{ V}, 2\\text{ A}$، والثاني يشغل جهازاً يعمل على $24\\text{ V}, 0.5\\text{ A}$. فإن شدة التيار المار في الملف الابتدائي عند تشغيل الجهازين معاً تساوي:",
    "optionsEn": [
      "$2.5\\text{ A}$",
      "$0.5\\text{ A}$",
      "$\\frac{12}{220}\\text{ A} \\approx 0.055\\text{ A}$",
      "$\\frac{36}{220}\\text{ A} \\approx 0.164\\text{ A}$"
    ],
    "optionsAr": [
      "$2.5\\text{ A}$",
      "$0.5\\text{ A}$",
      "$\\frac{12}{220}\\text{ A} \\approx 0.055\\text{ A}$",
      "$\\frac{36}{220}\\text{ A} \\approx 0.164\\text{ A}$"
    ],
    "correctAnswer": "$\\frac{36}{220}\\text{ A} \\approx 0.164\\text{ A}$",
    "correctIndex": 3,
    "hintEn": "$P_p = P_{s1} + P_{s2} \\implies V_p I_p = V_{s1} I_{s1} + V_{s2} I_{s2}$.",
    "hintAr": "$P_p = P_{s1} + P_{s2} \\implies V_p I_p = V_{s1} I_{s1} + V_{s2} I_{s2}$.",
    "stepByStepSolutionEn": [
      "Secondary 1 power: $P_{s1} = 12 \\times 2 = 24\\text{ W}$. Secondary 2 power: $P_{s2} = 24 \\times 0.5 = 12\\text{ W}$. Total secondary power: $P_s = 24 + 12 = 36\\text{ W}$. In an ideal transformer, $P_p = P_s \\implies 220 \\times I_p = 36 \\implies I_p = \\frac{36}{220} \\approx 0.164\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "قدرة الثانوي الأول: $P_{s1} = 12 \\times 2 = 24\\text{ W}$. قدرة الثانوي الثاني: $P_{s2} = 24 \\times 0.5 = 12\\text{ W}$. القدرة الكلية المستهلكة: $P_s = 36\\text{ W}$. بما أن المحول مثالي: $P_p = P_s \\implies 220 \\times I_p = 36 \\implies I_p = \\frac{36}{220} \\approx 0.164\\text{ A}$."
    ],
    "teacherTipEn": "Powers add arithmetically: $P_{\\text{total}} = P_1 + P_2$.",
    "teacherTipAr": "القدرات تُجمع جمعاً جبرياً: القدرة الكلية = مجموع قدرتي الجهازين."
  },
  {
    "id": "phys_ch3_db_med_29",
    "titleEn": "Power Lost in Long Transmission Lines",
    "titleAr": "حساب القدرة المفقودة في خطوط نقل الكهرباء",
    "difficulty": "medium",
    "questionEn": "A power generating station produces $100\\text{ kW}$ at an output voltage of $2000\\text{ V}$. The power is transmitted across cables having a total resistance of $4\\,\\Omega$. The electrical power lost as heat in the transmission lines is:",
    "questionAr": "محطة توليد كهرباء تنتج قدرة مقدارها $100\\text{ kW}$ عند فرق جهد $2000\\text{ V}$. نُقلت هذه القدرة عبر أسلاك خط نقل مقاومتها الكلية $4\\,\\Omega$. فإن القدرة الكهربية المفقودة في أسلاك الخط تساوي:",
    "optionsEn": [
      "$10\\text{ kW} = 10000\\text{ W}$",
      "$20\\text{ kW}$",
      "$1\\text{ kW}$",
      "$40\\text{ kW}$"
    ],
    "optionsAr": [
      "$10\\text{ kW} = 10000\\text{ W}$",
      "$20\\text{ kW}$",
      "$1\\text{ kW}$",
      "$40\\text{ kW}$"
    ],
    "correctAnswer": "$10\\text{ kW} = 10000\\text{ W}$",
    "correctIndex": 0,
    "hintEn": "Find line current $I = \\frac{P_{\\text{station}}}{V_{\\text{station}}}$, then $P_{\\text{loss}} = I^2 R_{\\text{line}}$.",
    "hintAr": "احسب تيار الخط $I = \\frac{P}{V}$، ثم القدرة المفقودة $P_{\\text{loss}} = I^2 R_{\\text{line}}$.",
    "stepByStepSolutionEn": [
      "Current in cables: $I = \\frac{P}{V} = \\frac{100 \\times 10^3\\text{ W}}{2000\\text{ V}} = 50\\text{ A}$. Power loss in cables: $P_{\\text{loss}} = I^2 R_{\\text{line}} = (50)^2 \\times 4 = 2500 \\times 4 = 10000\\text{ W} = 10\\text{ kW}$."
    ],
    "stepByStepSolutionAr": [
      "شدة تيار الخط: $I = \\frac{100000}{2000} = 50\\text{ A}$. القدرة المفقودة في الأسلاك: $P_{\\text{loss}} = I^2 R = (50)^2 \\times 4 = 2500 \\times 4 = 10000\\text{ W} = 10\\text{ kW}$."
    ],
    "teacherTipEn": "Do NOT use $V_{\\text{station}}^2 / R_{\\text{line}}$! The station voltage drops mostly across the remote load, not across the transmission wires.",
    "teacherTipAr": "تحذير: إياك واستخدام $V^2 / R$ بجهد المحطة! جهد المحطة يقع على الحمل الخارجي وليس على الأسلاك فقط."
  },
  {
    "id": "phys_ch3_db_med_30",
    "titleEn": "Reduction of Power Loss by Using Step-Up Transformer",
    "titleAr": "أثر استخدام محول رافع في خفض القدرة المفقودة",
    "difficulty": "medium",
    "questionEn": "If a step-up transformer is used at the power plant in the previous problem to raise the transmission voltage tenfold (to $20000\\text{ V}$), the power lost in the same $4\\,\\Omega$ cables becomes:",
    "questionAr": "إذا استُخدم محول رافع عند المحطة في المسألة السابقة لرفع جهد النقل إلى عشرة أمثاله ($20000\\text{ V}$)، فإن القدرة المفقودة في نفس الأسلاك ($4\\,\\Omega$) تصبح:",
    "optionsEn": [
      "$1000\\text{ W} = 1.0\\text{ kW}$",
      "$100\\text{ W} = 0.1\\text{ kW}$ (reduced by a factor of 100)",
      "$500\\text{ W}$",
      "$10\\text{ W}$"
    ],
    "optionsAr": [
      "$1000\\text{ W} = 1.0\\text{ kW}$",
      "$100\\text{ W} = 0.1\\text{ kW}$ (تقل إلى $1/100$ من قيمتها السابقة)",
      "$500\\text{ W}$",
      "$10\\text{ W}$"
    ],
    "correctAnswer": "$100\\text{ W} = 0.1\\text{ kW}$ (reduced by a factor of 100)",
    "correctIndex": 1,
    "hintEn": "Raising voltage by a factor of 10 reduces current by 10. Since $P_{\\text{loss}} \\propto I^2$, loss reduces by $10^2 = 100$.",
    "hintAr": "رفع الجهد إلى 10 أمثاله يقلل التيار إلى العُشر. وبما أن $P \\propto I^2$ فإن الفقد يقل $100$ مرة.",
    "stepByStepSolutionEn": [
      "New line current: $I' = \\frac{100000\\text{ W}}{20000\\text{ V}} = 5\\text{ A}$. New power loss: $P_{\\text{loss}} = (5)^2 \\times 4 = 25 \\times 4 = 100\\text{ W} = 0.1\\text{ kW}$. The loss dropped from $10\\text{ kW}$ to $0.1\\text{ kW}$, a $99\\%$ reduction!"
    ],
    "stepByStepSolutionAr": [
      "التيار الجديد: $I' = \\frac{100000}{20000} = 5\\text{ A}$. القدرة المفقودة الجديدة: $P_{\\text{loss}} = (5)^2 \\times 4 = 100\\text{ W} = 0.1\\text{ kW}$. قل الفقد من $10\\text{ kW}$ إلى $0.1\\text{ kW}$، بنسبة وفر هائلة!"
    ],
    "teacherTipEn": "Increasing voltage $n$ times reduces cable power loss by $n^2$ times!",
    "teacherTipAr": "زيادة جهد النقل بمقدار $n$ مرة تقلل القدرة المفقودة بمقدار $n^2$ مرة!"
  },
  {
    "id": "phys_ch3_db_med_31",
    "titleEn": "Transmission Efficiency Calculation",
    "titleAr": "حساب كفاءة نقل الطاقة الكهربية",
    "difficulty": "medium",
    "questionEn": "A power station transmits $200\\text{ kW}$ of power. If the power lost in the transmission cables is $10\\text{ kW}$, the transmission efficiency of the system is:",
    "questionAr": "تنتج محطة توليد قدرة كهربية مقدارها $200\\text{ kW}$. فإذا كانت القدرة المفقودة في خطوط النقل $10\\text{ kW}$، فإن كفاءة النقل تساوي:",
    "optionsEn": [
      "$90\\%$",
      "$98\\%$",
      "$95\\%$",
      "$85\\%$"
    ],
    "optionsAr": [
      "$90\\%$",
      "$98\\%$",
      "$95\\%$",
      "$85\\%$"
    ],
    "correctAnswer": "$95\\%$",
    "correctIndex": 2,
    "hintEn": "$\\text{Efficiency} = \\frac{P_{\\text{received}}}{P_{\\text{station}}} \\times 100\\% = \\frac{P_{\\text{station}} - P_{\\text{loss}}}{P_{\\text{station}}} \\times 100\\%$.",
    "hintAr": "كفاءة النقل = $\\frac{\\text{القدرة الواصلة}}{\\text{قدرة المحطة}} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "Received power: $P_{\\text{received}} = 200 - 10 = 190\\text{ kW}$. Transmission efficiency: $\\eta = \\frac{190}{200} \\times 100\\% = 95\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الواصلة للاستهلاك: $P_{\\text{received}} = 200 - 10 = 190\\text{ kW}$. كفاءة النقل: $\\eta = \\frac{190}{200} \\times 100\\% = 95\\%$."
    ],
    "teacherTipEn": "High transmission efficiency is the ultimate economic purpose of step-up transformers.",
    "teacherTipAr": "تحقيق كفاءة نقل عالية هو الهدف الاقتصادي الأساسي لاستخدام المحولات الرافعة."
  },
  {
    "id": "phys_ch3_db_med_32",
    "titleEn": "Armature Current in an Electric Motor with Back-EMF",
    "titleAr": "حساب شدة تيار ملف المحرك الكهربي في وجود قوة دافعة عكسية",
    "difficulty": "medium",
    "questionEn": "A DC electric motor has an armature coil of resistance $2\\,\\Omega$ connected to a $120\\text{ V}$ DC supply. When operating at full rotational speed, the induced back-EMF is $110\\text{ V}$. The operating current drawn by the motor is:",
    "questionAr": "محرك تيار مستمر مقاومة ملفه $2\\,\\Omega$ اتصل بمصدر جهده $120\\text{ V}$. عندما يدور المحرك بسرعة دورانه القصوى تتولد فيه قوة دافعة عكسية مقدارها $110\\text{ V}$. فإن شدة التيار المار في الملف أثناء التشغيل تساوي:",
    "optionsEn": [
      "$60\\text{ A}$",
      "$55\\text{ A}$",
      "$10\\text{ A}$",
      "$5\\text{ A}$"
    ],
    "optionsAr": [
      "$60\\text{ A}$",
      "$55\\text{ A}$",
      "$10\\text{ A}$",
      "$5\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ A}$",
    "correctIndex": 3,
    "hintEn": "Net driving voltage is $V_{\\text{net}} = V_{\\text{battery}} - \\text{emf}_{\\text{back}}$.",
    "hintAr": "فرق الجهد المحصل هو $V_B - \\text{emf}_{\\text{عكسية}}$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{V_{\\text{battery}} - \\text{emf}_{\\text{back}}}{R_{\\text{armature}}} = \\frac{120 - 110}{2} = \\frac{10}{2} = 5\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "شدة التيار: $I = \\frac{120 - 110}{2} = \\frac{10}{2} = 5\\text{ A}$."
    ],
    "teacherTipEn": "Notice that at starting (zero speed, $\\text{emf}_{\\text{back}} = 0$), the current would be $120/2 = 60\\text{ A}$, which is 12 times higher!",
    "teacherTipAr": "لاحظ أنه لحظة بدء الحركة (السرعة = صفر والـ $\\text{emf}$ = صفر) يكون التيار $60\\text{ A}$، أي 12 ضعف تيار التشغيل!"
  },
  {
    "id": "phys_ch3_db_med_33",
    "titleEn": "Current Surge at Starting of an Electric Motor",
    "titleAr": "شدة التيار لحظة بدء تشغيل المحرك الكهربي",
    "difficulty": "medium",
    "questionEn": "In the previous motor ($V_B = 120\\text{ V}$, $R = 2\\,\\Omega$, operational current $5\\text{ A}$), at the instant the motor is switched on (before the coil begins to rotate), the starting current is:",
    "questionAr": "في المحرك السابق ($V_B = 120\\text{ V}$، $R = 2\\,\\Omega$)، لحظة غلق الدائرة وبدء التشغيل (قبل أن يدور الملف)، تكون شدة تيار البدء مساوية:",
    "optionsEn": [
      "$60\\text{ A}$",
      "$5\\text{ A}$",
      "$110\\text{ A}$",
      "$0\\text{ A}$"
    ],
    "optionsAr": [
      "$60\\text{ A}$",
      "$5\\text{ A}$",
      "$110\\text{ A}$",
      "$0\\text{ A}$"
    ],
    "correctAnswer": "$60\\text{ A}$",
    "correctIndex": 0,
    "hintEn": "At start, velocity is zero, so back-EMF is zero: $\\text{emf}_{\\text{back}} = 0$.",
    "hintAr": "لحظة البدء تكون سرعة الدوران صفراً، فلا توجد $\\text{emf}$ عكسية ($\\text{emf}_{\\text{back}} = 0$).",
    "stepByStepSolutionEn": [
      "At the instant of start-up, $\\omega = 0 \\implies \\text{emf}_{\\text{back}} = 0$. Thus $I_{\\text{start}} = \\frac{V_B - 0}{R} = \\frac{120}{2} = 60\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "لحظة البدء تنعدم القوة الدافعة العكسية لعدم دوران الملف، فيكون تيار البدء: $I = \\frac{120 - 0}{2} = 60\\text{ A}$."
    ],
    "teacherTipEn": "Starting rheostats are used in large industrial motors to prevent coils from burning during start-up.",
    "teacherTipAr": "تستخدم مقاومات متغيرة لبدء التشغيل في المحركات الضخمة لحمايتها من الاحتراق بسبب تيار البدء العالي."
  },
  {
    "id": "phys_ch3_db_med_34",
    "titleEn": "Dynamo Frequency and EMF Doubled Simultaneously",
    "titleAr": "مضاعفة تردد دوران الدينامو وأثره على القوة الدافعة",
    "difficulty": "medium",
    "questionEn": "An AC dynamo produces a maximum EMF of $100\\text{ V}$ at rotational frequency $f$. If the frequency of rotation is increased to $3f$ while all other parameters remain unchanged, the new maximum EMF is:",
    "questionAr": "دينامو تيار متردد يولد قوة دافعة عظمى $100\\text{ V}$ عند تردد دوران $f$. إذا زاد تردد دوران الملف إلى $3f$ مع بقاء باقي العوامل ثابتة، فإن القيمة العظمى الجديدة تصبح:",
    "optionsEn": [
      "$900\\text{ V}$",
      "$300\\text{ V}$",
      "$33.3\\text{ V}$",
      "$100\\text{ V}$"
    ],
    "optionsAr": [
      "$900\\text{ V}$",
      "$300\\text{ V}$",
      "$33.3\\text{ V}$",
      "$100\\text{ V}$"
    ],
    "correctAnswer": "$300\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "$\\text{emf}_{\\max} = 2\\pi N B A f \\propto f$.",
    "hintAr": "$\\text{emf}_{\\max} = 2\\pi N B A f \\propto f$.",
    "stepByStepSolutionEn": [
      "Since $\\text{emf}_{\\max} \\propto f$, tripling the frequency from $f$ to $3f$ triples the peak EMF: $\\text{emf}'_{\\max} = 3 \\times 100 = 300\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "تتناسب $\\text{emf}_{\\max}$ طردياً مع التردد $f$. وعند زيادة التردد إلى 3 أمثاله، تزداد القيمة العظمى إلى 3 أمثالها: $3 \\times 100 = 300\\text{ V}$."
    ],
    "teacherTipEn": "Frequency affects both peak voltage and cycle period ($T' = T/3$).",
    "teacherTipAr": "التردد يضاعف الجهد الأقصى ويقلل الزمن الدوري للثلث."
  },
  {
    "id": "phys_ch3_db_med_35",
    "titleEn": "Faraday Disk / Rotating Rod Around One End",
    "titleAr": "القوة الدافعة المستحثة في ساق تدور حول أحد طرفيها",
    "difficulty": "medium",
    "questionEn": "A metallic rod of length $L = 0.5\\text{ m}$ rotates in a plane perpendicular to a uniform magnetic field $B = 0.4\\text{ T}$ about a pivot at one of its ends with a constant angular velocity $\\omega = 20\\text{ rad/s}$. The induced electromotive force between the ends of the rod is:",
    "questionAr": "ساق معدنية طولها $L = 0.5\\text{ m}$ تدور في مستوى عمودي على مجال مغناطيسي منتظم $B = 0.4\\text{ T}$ حول محور عند أحد طرفيها بسرعة زاوية منتظمة $\\omega = 20\\text{ rad/s}$. القوة الدافعة المستحثة المتولدة بين طرفي الساق تساوي:",
    "optionsEn": [
      "$2.0\\text{ V}$",
      "$4.0\\text{ V}$",
      "$1.0\\text{ V}$",
      "$0.5\\text{ V}$"
    ],
    "optionsAr": [
      "$2.0\\text{ V}$",
      "$4.0\\text{ V}$",
      "$1.0\\text{ V}$",
      "$0.5\\text{ V}$"
    ],
    "correctAnswer": "$1.0\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "Average linear velocity of the rod is $v_{\\text{avg}} = \\frac{0 + \\omega L}{2} = \\frac{1}{2}\\omega L$. $\\text{emf} = B v_{\\text{avg}} L = \\frac{1}{2} B \\omega L^2$.",
    "hintAr": "السرعة الخطية المتوسطة لأجزاء الساق هي $v_{\\text{avg}} = \\frac{1}{2}\\omega L$. وتكون $\\text{emf} = \\frac{1}{2} B \\omega L^2$.",
    "stepByStepSolutionEn": [
      "In one complete revolution, the rod sweeps an area $A = \\pi L^2$ in period $T = \\frac{2\\pi}{\\omega}$. By Faraday's law: $\\text{emf} = \\frac{\\Delta\\Phi}{\\Delta t} = \\frac{B (\\pi L^2)}{2\\pi / \\omega} = \\frac{1}{2} B \\omega L^2$. Substituting: $\\text{emf} = \\frac{1}{2} \\times 0.4 \\times 20 \\times (0.5)^2 = 4 \\times 0.25 = 1.0\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "تقطع الساق في دورة كاملة مساحة دائرة $A = \\pi L^2$ خلال زمن دوري $T = \\frac{2\\pi}{\\omega}$. من قانون فاراداي: $\\text{emf} = \\frac{B \\pi L^2}{2\\pi / \\omega} = \\frac{1}{2} B \\omega L^2$. بالتعويض: $\\text{emf} = \\frac{1}{2} \\times 0.4 \\times 20 \\times 0.25 = 1.0\\text{ V}$."
    ],
    "teacherTipEn": "Rotating rod EMF = $\\frac{1}{2} B \\omega L^2$. A famous competitive physics problem.",
    "teacherTipAr": "قانون الساق الدوارة: $\\text{emf} = \\frac{1}{2} B \\omega L^2$."
  },
  {
    "id": "phys_ch3_db_med_36",
    "titleEn": "Number of Times AC Reaches Zero in One Second",
    "titleAr": "عدد مرات وصول التيار المتردد للصفر في الثانية",
    "difficulty": "medium",
    "questionEn": "An alternating electric current generated by a dynamo has a frequency $f = 50\\text{ Hz}$. Starting from the zero position, the number of times the current reaches zero in one second is:",
    "questionAr": "تيار متردد ناتج من دينامو تردده $f = 50\\text{ Hz}$. بدءاً من وضع الصفر (العمودي)، فإن عدد المرات التي يصل فيها التيار إلى الصفر خلال ثانية واحدة يساوي:",
    "optionsEn": [
      "$2f = 100\\text{ times}$",
      "$f = 50\\text{ times}$",
      "$4f = 200\\text{ times}$",
      "$2f + 1 = 101\\text{ times}$"
    ],
    "optionsAr": [
      "$2f = 100\\text{ مرة}$",
      "$f = 50\\text{ مرة}$",
      "$4f = 200\\text{ مرة}$",
      "$2f + 1 = 101\\text{ مرة}$"
    ],
    "correctAnswer": "$2f + 1 = 101\\text{ times}$",
    "correctIndex": 3,
    "hintEn": "In each cycle, current hits zero twice, plus the starting instant at $t = 0$.",
    "hintAr": "في كل دورة يصل التيار للصفر مرتين، بالإضافة لنقطة الصفر عند البداية $t = 0$.",
    "stepByStepSolutionEn": [
      "In one second, there are $f = 50$ cycles. Starting from zero at $t = 0$, each cycle adds 2 zero crossings (at $T/2$ and $T$). Thus, the total number of zero values is $2f + 1 = 2(50) + 1 = 101$ times."
    ],
    "stepByStepSolutionAr": [
      "في ثانية واحدة يكمل التيار 50 دورة. بدءاً من الصفر عند $t = 0$، يصل التيار للصفر عند منتصف كل دورة وعند نهايتها، فيكون الإجمالي: $2f + 1 = 2(50) + 1 = 101$ مرة."
    ],
    "teacherTipEn": "Reaching zero = $2f + 1$; Reaching maximum = $2f$.",
    "teacherTipAr": "عدد مرات الوصول للصفر = $2f + 1$؛ وعدد مرات الوصول للقيمة العظمى = $2f$."
  },
  {
    "id": "phys_ch3_db_med_37",
    "titleEn": "Number of Times AC Reaches Maximum Peak in One Second",
    "titleAr": "عدد مرات وصول التيار المتردد للقيمة العظمى في الثانية",
    "difficulty": "medium",
    "questionEn": "For an alternating current with frequency $f = 60\\text{ Hz}$, starting from the zero position, the number of times the current reaches its maximum peak value (in either positive or negative direction) in one second is:",
    "questionAr": "لتيار متردد تردده $f = 60\\text{ Hz}$، بدءاً من وضع الصفر، فإن عدد مرات وصول التيار لقيمته العظمى (سواء في الاتجاه الموجب أو السالب) في الثانية الواحدة يساوي:",
    "optionsEn": [
      "$2f = 120\\text{ times}$",
      "$f = 60\\text{ times}$",
      "$2f + 1 = 121\\text{ times}$",
      "$4f = 240\\text{ times}$"
    ],
    "optionsAr": [
      "$2f = 120\\text{ مرة}$",
      "$f = 60\\text{ مرة}$",
      "$2f + 1 = 121\\text{ مرة}$",
      "$4f = 240\\text{ مرة}$"
    ],
    "correctAnswer": "$2f = 120\\text{ times}$",
    "correctIndex": 0,
    "hintEn": "Each cycle has one positive peak and one negative peak ($2$ peaks per cycle).",
    "hintAr": "في كل دورة توجد قمة موجبة وقاع سالب، أي قيمتان عظميان لكل دورة.",
    "stepByStepSolutionEn": [
      "In each complete cycle, the alternating current reaches its maximum value twice: once at $\\theta = 90^\\circ$ (positive peak) and once at $\\theta = 270^\\circ$ (negative peak). Over $f$ cycles in one second, the number of maximums is $2f = 2 \\times 60 = 120$ times."
    ],
    "stepByStepSolutionAr": [
      "يصل التيار المتردد في كل دورة إلى القيمة العظمى مرتين (مرة في الاتجاه الموجب عند $90^\\circ$ ومرة في الاتجاه السالب عند $270^\\circ$). وخلال ثانية واحدة يكون عدد المرات هو $2f = 2 \\times 60 = 120$ مرة."
    ],
    "teacherTipEn": "If asked for positive peaks only, it would be $f = 60$ times.",
    "teacherTipAr": "لو حُددت القيمة العظمى في الاتجاه الموجب فقط لكانت $f = 60$ مرة."
  },
  {
    "id": "phys_ch3_db_med_38",
    "titleEn": "Number of Times AC Reverses Direction in One Second",
    "titleAr": "عدد مرات انعكاس اتجاه التيار المتردد في الثانية",
    "difficulty": "medium",
    "questionEn": "For an alternating current of frequency $f = 50\\text{ Hz}$, the number of times the current reverses its direction of flow per second is:",
    "questionAr": "لتيار متردد تردده $f = 50\\text{ Hz}$، فإن عدد المرات التي يعكس فيها التيار اتجاه سريانه في الثانية الواحدة يساوي:",
    "optionsEn": [
      "$50\\text{ times}$",
      "$2f - 1 = 99\\text{ times}$ (or $2f = 100$ depending on definition)",
      "$200\\text{ times}$",
      "$25\\text{ times}$"
    ],
    "optionsAr": [
      "$50\\text{ مرة}$",
      "$2f - 1 = 99\\text{ مرة}$ (أو $2f = 100$ حسب اعتبار البداية)",
      "$200\\text{ مرة}$",
      "$25\\text{ مرة}$"
    ],
    "correctAnswer": "$2f - 1 = 99\\text{ times}$ (or $2f = 100$ depending on definition)",
    "correctIndex": 1,
    "hintEn": "In the Egyptian syllabus, current reverses twice every period after starting: $2f - 1$ times in the first second.",
    "hintAr": "في كتاب الوزارة، يعكس التيار اتجاهه مرتين في كل دورة بعد انطلاقه في الاتجاه الأول، فيكون $2f - 1$.",
    "stepByStepSolutionEn": [
      "After launching in its initial direction, the current reverses at $T/2$ (first reversal) and at $T$ (second reversal). For $f = 50\\text{ Hz}$, it reverses $2 \\times 50 - 1 = 99$ times."
    ],
    "stepByStepSolutionAr": [
      "ينطلق التيار في الاتجاه الأول، ثم ينعكس عند نصف الدورة الأول، ثم ينعكس عند نهاية الدورة، فيكون عدد مرات الانعكاس في الثانية هو $2f - 1 = 2(50) - 1 = 99$ مرة."
    ],
    "teacherTipEn": "Standard textbook question in Egyptian Thanaweya examinations.",
    "teacherTipAr": "سؤال تقليدي في امتحانات الثانوية العامة المصرية."
  },
  {
    "id": "phys_ch3_db_med_39",
    "titleEn": "Output Frequency of a Rectified DC Dynamo",
    "titleAr": "تردد التيار الناتج من دينامو موحد الاتجاه",
    "difficulty": "medium",
    "questionEn": "If an AC dynamo operating at frequency $f = 50\\text{ Hz}$ has its slip rings replaced with a split-ring commutator (producing pulsating direct current), the frequency of pulsation of the output current is:",
    "questionAr": "إذا استُبدلت حلقتا الانزلاق في دينامو تردده $50\\text{ Hz}$ بأسطوانة مشقوقة (مقوم)، فإن تردد نبضات التيار المستمر موحد الاتجاه الناتج في الدائرة الخارجية يكون:",
    "optionsEn": [
      "$f = 50\\text{ Hz}$",
      "$f/2 = 25\\text{ Hz}$",
      "$2f = 100\\text{ Hz}$",
      "$0\\text{ Hz}$"
    ],
    "optionsAr": [
      "$f = 50\\text{ Hz}$",
      "$f/2 = 25\\text{ Hz}$",
      "$2f = 100\\text{ Hz}$",
      "$0\\text{ Hz}$"
    ],
    "correctAnswer": "$2f = 100\\text{ Hz}$",
    "correctIndex": 2,
    "hintEn": "Both half-cycles now appear on the positive side, doubling the repetition rate.",
    "hintAr": "نصفا الدورة أصبحا في نفس الاتجاه الموجب، فتتكرر النبضة كل نصف دورة ($T/2$).",
    "stepByStepSolutionEn": [
      "By rectifying the negative half-cycle into positive pulses, the pattern repeats every half-period $T' = T/2$. Therefore, the repetition frequency is $f' = \\frac{1}{T'} = \\frac{2}{T} = 2f = 2 \\times 50 = 100\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "بتقويم نصف الدورة السالب ليصبح موجباً، يصبح الزمن الدوري للنبضة نصف الزمن الدوري الأصلي ($T' = T/2$). وبالتالي يتضاعف التردد: $f' = 2f = 2 \\times 50 = 100\\text{ Hz}$."
    ],
    "teacherTipEn": "Full-wave rectified output doubles the ripple frequency.",
    "teacherTipAr": "تقويم التيار المتردد يوحد اتجاهه ويضاعف تردد نبضاته."
  },
  {
    "id": "phys_ch3_db_med_40",
    "titleEn": "Wire Thickness in Step-Up Transformer",
    "titleAr": "سمك أسلاك الملفين في المحول الرافع للجهد",
    "difficulty": "medium",
    "questionEn": "In a step-up electric transformer, the wire of the PRIMARY coil should be:",
    "questionAr": "في المحول الكهربي الرافع للجهد، يجب أن يكون سلك الملف الابتدائي:",
    "optionsEn": [
      "Thinner than the secondary wire, because primary voltage is lower",
      "Identical in thickness to the secondary wire under all conditions",
      "Made of steel rather than copper to support the extra turns",
      "Thicker than the wire of the secondary coil, because the primary carries a larger electric current"
    ],
    "optionsAr": [
      "أقل سمكاً من سلك الثانوي، لأن جهد الابتدائي أقل",
      "مساوياً في السمك تماماً لسلك الثانوي في جميع الأحوال",
      "مصنوعاً من الصلب لتحمل عدد اللفات",
      "أكثر سمكاً من سلك الملف الثانوي، لأن الابتدائي يمر به تيار كهربي أكبر"
    ],
    "correctAnswer": "Thicker than the wire of the secondary coil, because the primary carries a larger electric current",
    "correctIndex": 3,
    "hintEn": "Step-up transformer: $V_s > V_p \\implies I_p > I_s$. Higher current needs thicker wire.",
    "hintAr": "في المحول الرافع $I_p > I_s$. التيار الأكبر يحتاج سلكاً أكبر سمكاً لتقليل مقاومته وحمايته من السخونة.",
    "stepByStepSolutionEn": [
      "In a step-up transformer, $V_s > V_p$, which means $I_p > I_s$ to conserve electric power. Because the primary coil carries a larger current, its wire must have a larger cross-sectional area (thicker) to reduce resistance and minimize $I^2 R$ heat loss."
    ],
    "stepByStepSolutionAr": [
      "في المحول الرافع يكون $V_s > V_p$ وبالتالي $I_p > I_s$. وبما أن التيار المار بالملف الابتدائي أكبر، يجب أن يُصنع من سلك أكثر سمكاً لتقليل مقاومته الأومية والحد من الطاقة الحرارية المفقودة $I^2 R$."
    ],
    "teacherTipEn": "Rule: Higher current $\\implies$ thicker wire.",
    "teacherTipAr": "قاعدة: الملف الذي يمر به تيار أكبر يُصنع من سلك أكثر سمكاً."
  },
  {
    "id": "phys_ch3_db_med_41",
    "titleEn": "Wire Thickness in Step-Down Transformer",
    "titleAr": "سمك أسلاك الملفين في المحول الخافض للجهد",
    "difficulty": "medium",
    "questionEn": "In a step-down electric transformer, the wire of the SECONDARY coil should be:",
    "questionAr": "في المحول الكهربي الخافض للجهد، يجب أن يكون سلك الملف الثانوي:",
    "optionsEn": [
      "Thicker than the wire of the primary coil, because the secondary carries a larger electric current",
      "Thinner than the primary wire",
      "Made of high-resistance tungsten",
      "Wound with zero insulation"
    ],
    "optionsAr": [
      "أكثر سمكاً من سلك الملف الابتدائي، لأن الثانوي يمر به تيار كهربي أكبر",
      "أقل سمكاً من سلك الملف الابتدائي",
      "مصنوعاً من التنجستن عالي المقاومة",
      "ملفوفاً بدون أي مادة عازلة"
    ],
    "correctAnswer": "Thicker than the wire of the primary coil, because the secondary carries a larger electric current",
    "correctIndex": 0,
    "hintEn": "Step-down transformer: $V_s < V_p \\implies I_s > I_p$.",
    "hintAr": "في المحول الخافض يكون $I_s > I_p$، فالتيار الأكبر في الثانوي يحتاج سلكاً أسمك.",
    "stepByStepSolutionEn": [
      "In a step-down transformer, $V_s < V_p$, so $I_s > I_p$. The secondary coil carries the higher current and therefore requires a thicker conductor wire with smaller ohmic resistance to prevent overheating."
    ],
    "stepByStepSolutionAr": [
      "في المحول الخافض يكون $V_s < V_p$ وبالتالي $I_s > I_p$. يمر في الملف الثانوي تيار أكبر، ولذا يصنع من سلك أكثر سمكاً لتقليل المقاومة الأومية وتفادي ارتفاع درجة حرارته."
    ],
    "teacherTipEn": "Secondary thicker in step-down; Primary thicker in step-up.",
    "teacherTipAr": "سلك الثانوي أسمك في المحول الخافض؛ وسلك الابتدائي أسمك في المحول الرافع."
  },
  {
    "id": "phys_ch3_db_med_42",
    "titleEn": "Induced Current Direction Between Concentric Circular Loops",
    "titleAr": "اتجاه التيار المستحث بين حلقتين دائريتين متحدتي المركز",
    "difficulty": "medium",
    "questionEn": "Two concentric circular loops lie in the same plane. The outer loop carries a clockwise current. If the current in the outer loop is suddenly INCREASED, the induced current in the inner loop flows:",
    "questionAr": "حلقتان دائريتان متحدتا المركز في نفس المستوى. يمر بالحلقة الخارجية تيار في اتجاه عقارب الساعة. إذا زادت شدة التيار في الحلقة الخارجية فجأة، فإن التيار المستحث في الحلقة الداخلية يدور في اتجاه:",
    "optionsEn": [
      "Clockwise (reinforcing the increasing flux)",
      "Counter-clockwise (opposing the increasing magnetic flux)",
      "Radially outward from the center",
      "Zero under all conditions"
    ],
    "optionsAr": [
      "مع عقارب الساعة (ليعزز الفيض المتزايد)",
      "عكس عقارب الساعة (ليعاكس الزيادة في الفيض المغناطيسي)",
      "قطرياً نحو الخارج من المركز",
      "صفراً ولا يمر أي تيار مستحث"
    ],
    "correctAnswer": "Counter-clockwise (opposing the increasing magnetic flux)",
    "correctIndex": 1,
    "hintEn": "Lenz's law: Induced current opposes the increase in flux.",
    "hintAr": "قاعدة لنز: التيار المستحث يولد فيضاً معاكساً ليقاوم الزيادة.",
    "stepByStepSolutionEn": [
      "The clockwise current in the outer loop produces a magnetic field directed into the page ($\\otimes$) through the inner loop. When current increases, this into-the-page flux increases. By Lenz's law, the inner loop induces a field pointing out of the page ($\\odot$) to oppose the change, which corresponds to a counter-clockwise induced current."
    ],
    "stepByStepSolutionAr": [
      "التيار مع عقارب الساعة في الحلقة الخارجية يولد مجالاً عمودياً على الصفحة للداخل داخل الحلقة. عند زيادة التيار، يزداد هذا الفيض، وبحسب قاعدة لنز يجب أن تولد الحلقة الداخلية فيضاً معاكساً للخارج لمقاومة الزيادة، مما يستلزم سريان تيار مستحث عكس عقارب الساعة."
    ],
    "teacherTipEn": "Increasing flux induces opposite current; Decreasing flux induces similar current.",
    "teacherTipAr": "زيادة الفيض تولد تياراً عكسياً؛ ونقصان الفيض يولد تياراً طردياً في نفس الاتجاه."
  },
  {
    "id": "phys_ch3_db_med_43",
    "titleEn": "Concentric Loops with Decreasing Current",
    "titleAr": "اتجاه التيار المستحث في حلقة داخلية عند إنقاص تيار الخارجية",
    "difficulty": "medium",
    "questionEn": "In the previous concentric loops setup, if the clockwise current in the outer loop is suddenly DECREASED, the induced current in the inner loop flows:",
    "questionAr": "في تجربة الحلقتين متحدتي المركز السابقة، إذا نقصت شدة التيار في الحلقة الخارجية (التي تدور مع عقارب الساعة) فجأة، فإن التيار المستحث في الحلقة الداخلية يدور في اتجاه:",
    "optionsEn": [
      "Counter-clockwise",
      "In alternating quarter cycles",
      "Clockwise (supporting the decaying flux)",
      "Radially inward"
    ],
    "optionsAr": [
      "عكس عقارب الساعة",
      "في أرباع دورات متناوبة",
      "مع عقارب الساعة (ليدعم الفيض المغناطيسي المتناقص)",
      "قطرياً نحو الداخل"
    ],
    "correctAnswer": "Clockwise (supporting the decaying flux)",
    "correctIndex": 2,
    "hintEn": "Lenz's law opposes flux reduction by reinforcing it in the same direction.",
    "hintAr": "قاعدة لنز تقاوم النقص بتوليد فيض في نفس اتجاه الفيض الأصلي المنهار.",
    "stepByStepSolutionEn": [
      "When the into-the-page flux decreases, Lenz's law requires the induced current to create additional into-the-page flux to oppose the drop. By the right-hand grip rule, this requires a clockwise induced current."
    ],
    "stepByStepSolutionAr": [
      "عند تناقص الفيض الأصلي المتجه للداخل، تقتضي قاعدة لنز توليد فيض في نفس الاتجاه (للداخل) للتعويض، مما يتطلب سريان تيار مستحث في نفس اتجاه التيار الأصلي (مع عقارب الساعة)."
    ],
    "teacherTipEn": "Flux collapse $\\implies$ Forward induced current (same sense).",
    "teacherTipAr": "انهيار الفيض $\\implies$ تيار مستحث طردي في نفس الاتجاه."
  },
  {
    "id": "phys_ch3_db_med_44",
    "titleEn": "Rectangular Loop Entering a Uniform Magnetic Field",
    "titleAr": "حلقة مستطيلة تدخل مجالاً مغناطيسياً منتظماً بسرعة منتظمة",
    "difficulty": "medium",
    "questionEn": "A rectangular conducting loop enters a region of uniform magnetic field perpendicularly at constant velocity. While it is PARTIALLY inside (entering), FULLY inside, and PARTIALLY outside (exiting), the induced EMF is, respectively:",
    "questionAr": "حلقة موصلة مستطيلة تدخل منطقة مجال مغناطيسي منتظم عمودياً بسرعة منتظمة. أثناء دخولها جزئياً، وأثناء وجودها بالكامل داخل المجال، وأثناء خروجها جزئياً، تكون القوة الدافعة المستحثة على الترتيب:",
    "optionsEn": [
      "Zero, maximum, zero",
      "Constantly increasing, constant, constantly decreasing",
      "Constant non-zero throughout all three stages in the same direction",
      "Constant non-zero, zero, constant non-zero in opposite polarity"
    ],
    "optionsAr": [
      "صفراً، قيمة عظمى، صفراً",
      "تتزايد باستمرار، ثابتة، تتناقص باستمرار",
      "ثابتة وغير صفرية طوال المراحل الثلاث وفي نفس الاتجاه",
      "ثابتة وغير صفرية، صفراً، ثابتة وغير صفرية في الاتجاه المعاكس"
    ],
    "correctAnswer": "Constant non-zero, zero, constant non-zero in opposite polarity",
    "correctIndex": 3,
    "hintEn": "EMF exists only when magnetic flux is changing ($\\frac{\\Delta\\Phi_m}{\\Delta t} \\neq 0$).",
    "hintAr": "تتولد القوة الدافعة فقط أثناء تغير الفيض المخترق للحلقة.",
    "stepByStepSolutionEn": [
      "1) Entering: Flux $\\Phi_m$ increases at constant rate $\\implies$ constant induced EMF. 2) Fully inside: Flux is constant ($\\frac{\\Delta\\Phi_m}{\\Delta t} = 0$) $\\implies \\text{emf} = 0$. 3) Exiting: Flux decreases at constant rate $\\implies$ constant induced EMF with opposite sign."
    ],
    "stepByStepSolutionAr": [
      "1) أثناء الدخول: يزداد الفيض بمعدل منتظم فتتولد $\\text{emf}$ ثابتة. 2) أثناء الحركة بالكامل داخل المجال: الفيض ثابت والتغير صفر فتكون $\\text{emf} = 0$. 3) أثناء الخروج: يتناقص الفيض بمعدل منتظم فتتولد $\\text{emf}$ ثابتة معاكسة في الاتجاه للأولى."
    ],
    "teacherTipEn": "Classic graphical representation question: EMF appears only across the boundaries!",
    "teacherTipAr": "سؤال بياني شهير: تتولد $\\text{emf}$ فقط عند حدود دخول وخروج المجال!"
  },
  {
    "id": "phys_ch3_db_med_45",
    "titleEn": "Faraday Induction in a Square Loop Contracting in Field",
    "titleAr": "الحث الكهرومغناطيسي عند انكماش حلقة مربعة في مجال",
    "difficulty": "medium",
    "questionEn": "A square wire loop of side length $0.2\\text{ m}$ placed perpendicular to a $0.5\\text{ T}$ magnetic field is deformed into a circle of the same perimeter in $0.1\\text{ s}$. The induced EMF generated is (perimeters equal: $4s = 2\\pi r$, circle has larger area):",
    "questionAr": "حلقة مربعة طول ضلعها $0.2\\text{ m}$ موضوعة عمودياً في مجال $0.5\\text{ T}$ شُكّلت لتصبح دائرية بنفس المحيط خلال $0.1\\text{ s}$. (محيط المربع $4 \\times 0.2 = 0.8\\text{ m}$، ومساحة الدائرة أكبر من المربع). القوة الدافعة المستحثة المتولدة تكون:",
    "optionsEn": [
      "Directly proportional to the increase in area ($\\Delta A = A_{\\text{circle}} - A_{\\text{square}}$)",
      "Zero because perimeter is unchanged",
      "Independent of the magnetic field density",
      "Infinite due to instantaneous geometric deformation"
    ],
    "optionsAr": [
      "متناسبة طردياً مع الزيادة في المساحة ($\\Delta A = A_{\\text{دائرة}} - A_{\\text{مربع}}$)",
      "صفراً لأن طول السلك ومحيطه لم يتغيرا",
      "مستقلة تماماً عن كثافة الفيض المغناطيسي",
      "لانهائية لتغير الشكل الهندسي"
    ],
    "correctAnswer": "Directly proportional to the increase in area ($\\Delta A = A_{\\text{circle}} - A_{\\text{square}}$)",
    "correctIndex": 0,
    "hintEn": "A circle encloses the maximum area for a given perimeter.",
    "hintAr": "الدائرة تعطي أكبر مساحة ممكنة لنفس المحيط، فتزداد المساحة ويزداد الفيض.",
    "stepByStepSolutionEn": [
      "Area of square: $A_1 = s^2 = (0.2)^2 = 0.04\\text{ m}^2$. For perimeter $0.8\\text{ m}$, circle radius is $r = \\frac{0.8}{2\\pi} \\approx 0.1273\\text{ m}$, area $A_2 = \\pi r^2 \\approx 0.0509\\text{ m}^2$. Since area increased, $\\Delta\\Phi_m = B \\Delta A > 0$, inducing an electromotive force $\\text{emf} = -N \\frac{B \\Delta A}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "مساحة المربع $0.04\\text{ m}^2$. وبتحويله لدائرة بنفس المحيط تصبح مساحة الدائرة $0.051\\text{ m}^2$ تقريباً. تزداد المساحة وبالتالي يزداد الفيض المخترق فتتولد قوة دافعة مستحثة عكسية."
    ],
    "teacherTipEn": "Deforming a square into a circle increases flux; compressing a circle into a slit decreases flux.",
    "teacherTipAr": "تحويل المربع لدائرة يزيد المساحة والفيض؛ وضغط الحلقة لتقريب جانبيها يقلل المساحة والفيض."
  },
  {
    "id": "phys_ch3_db_med_46",
    "titleEn": "Mutual Inductance Dependence on Iron Core",
    "titleAr": "أثر وضع قلب حديدي على الحث المتبادل بين ملفين",
    "difficulty": "medium",
    "questionEn": "When a soft iron rod is inserted inside the primary and secondary coils of a mutual induction setup, the mutual inductance coefficient ($M$):",
    "questionAr": "عند وضع ساق من الحديد المطاوع داخل تجويف الملفين الابتدائي والثانوي في تجربة الحث المتبادل، فإن معامل الحث المتبادل ($M$):",
    "optionsEn": [
      "Decreases because iron absorbs all magnetic flux",
      "Increases significantly because the magnetic permeability of iron is much greater than air ($\\mu_{\\text{iron}} \\gg \\mu_{\\text{air}}$)",
      "Remains completely unchanged",
      "Drops immediately to zero"
    ],
    "optionsAr": [
      "يقل لأن الحديد يمتص خطوط الفيض المغناطيسي",
      "يزداد بدرجة كبيرة لأن معامل النفاذية المغناطيسية للحديد أكبر بكثير من الهواء",
      "يظل ثابتاً دون أي تغيير",
      "ينعدم فوراً"
    ],
    "correctAnswer": "Increases significantly because the magnetic permeability of iron is much greater than air ($\\mu_{\\text{iron}} \\gg \\mu_{\\text{air}}$)",
    "correctIndex": 1,
    "hintEn": "Iron concentrates and channels magnetic flux lines efficiently.",
    "hintAr": "الحديد المطاوع يجمع ويركز خطوط الفيض المغناطيسي لكبر نفاذيته.",
    "stepByStepSolutionEn": [
      "Soft iron has a high relative permeability ($\\mu_r \\approx 2000$), concentrating magnetic flux lines and ensuring nearly complete magnetic coupling between the coils. Thus, $M$ increases by hundreds of times."
    ],
    "stepByStepSolutionAr": [
      "يتميز الحديد المطاوع بنفاذية مغناطيسية عالية جداً مقارنة بالهواء، مما يعمل على تجميع وتركيز خطوط الفيض المغناطيسي وزيادة الترابط بين الملفين، فيزداد معامل الحث المتبادل $M$ زيادة هائلة."
    ],
    "teacherTipEn": "High permeability core is standard in all practical transformers.",
    "teacherTipAr": "استخدام قلب ذي نفاذية عالية هو الأساس في جميع المحولات العملية."
  },
  {
    "id": "phys_ch3_db_med_47",
    "titleEn": "Lenz's Law with a Falling Magnet Through a Copper Tube",
    "titleAr": "سقوط مغناطيس داخل أنبوبة نحاسية رأسية",
    "difficulty": "medium",
    "questionEn": "A strong neodymium bar magnet is dropped vertically down through a long hollow vertical copper pipe. The magnet falls with:",
    "questionAr": "سقط مغناطيس نيوديميوم قوي رأسياً داخل أنبوبة نحاسية طويلة مجوفة وموضوعة رأسياً. يسقط المغناطيس بـ:",
    "optionsEn": [
      "An acceleration greater than $g$ due to magnetic suction",
      "Free-fall acceleration exactly equal to $g$ because copper is non-magnetic",
      "An acceleration less than $g$, eventually reaching a constant terminal velocity due to opposing eddy currents",
      "Zero velocity (it gets permanently stuck in mid-air immediately)"
    ],
    "optionsAr": [
      "عجلة أكبر من عجلة الجاذبية $g$ بسبب قوى الشد المغناطيسية",
      "عجلة السقوط الحر $g$ تماماً لأن النحاس مادة غير مغناطيسية",
      "عجلة أقل من عجلة الجاذبية $g$ حتى يصل إلى سرعة حدية منتظمة بسبب التيارات الدوامية المعاكسة لحركته",
      "سرعة منعدمة فيعلق في الهواء فوراً"
    ],
    "correctAnswer": "An acceleration less than $g$, eventually reaching a constant terminal velocity due to opposing eddy currents",
    "correctIndex": 2,
    "hintEn": "Changing flux induces circular eddy currents in the copper pipe that oppose the motion.",
    "hintAr": "حركة المغناطيس تولد تيارات دوامية في جدار الأنبوبة النحاسية تعاكس حركة المغناطيس حسب لنز.",
    "stepByStepSolutionEn": [
      "As the magnet falls, changing magnetic flux induces eddy currents in the copper walls above and below the magnet. By Lenz's law, these currents produce opposing magnetic forces (repulsion below, attraction above), creating an upward magnetic drag force that reduces acceleration below $g$ until weight equals drag."
    ],
    "stepByStepSolutionAr": [
      "أثناء سقوط المغناطيس، يولد تغير الفيض تيارات دوامية مستحثة في جدار الأنبوبة النحاسية. وطبقاً لقاعدة لنز تؤثر هذه التيارات بقوة مغناطيسية لأعلى تعاكس حركة الهبوط، فتصبح العجلة أقل من $g$ حتى تتساوى القوة المعاكسة مع الوزن فيتحرك بسرعة حدية ثابتة."
    ],
    "teacherTipEn": "A classic demonstration: copper is not ferromagnetic, but it is conductive, so eddy currents occur!",
    "teacherTipAr": "تجربة شهيرة: النحاس غير ممغنط لكنه موصل جيد فتتولد فيه تيارات دوامية تعيق الحركة!"
  },
  {
    "id": "phys_ch3_db_med_48",
    "titleEn": "Falling Magnet Through a Slotted Copper Tube",
    "titleAr": "سقوط مغناطيس في أنبوبة نحاسية بها شق طولي",
    "difficulty": "medium",
    "questionEn": "If the long copper pipe in the previous question has a continuous longitudinal slit cut down its entire length, the falling magnet will:",
    "questionAr": "إذا كان بالأنبوبة النحاسية السابقة شق طولي بطول الأنبوبة بالكامل، فإن المغناطيس الساقط بداخلها:",
    "optionsEn": [
      "Fall much slower than in the closed tube",
      "Be ejected upwards out of the top of the tube",
      "Hover stably at the slit center",
      "Fall with an acceleration very close to $g$, because the slit breaks the circular paths of eddy currents"
    ],
    "optionsAr": [
      "يسقط ببطء شديد أكبر بكثير من الأنبوبة المغلقة",
      "ينقذف لأعلى خارج فوهة الأنبوبة",
      "يتعلق في منتصف الشق بانتظام",
      "يسقط بعجلة قريبة جداً من $g$ لأن الشق الطولي يقطع المسارات الدائرية للتيارات الدوامية"
    ],
    "correctAnswer": "Fall with an acceleration very close to $g$, because the slit breaks the circular paths of eddy currents",
    "correctIndex": 3,
    "hintEn": "A slit breaks the closed electrical loop required for circulating eddy currents.",
    "hintAr": "الشق الطولي يفتح الدائرة الكهربية المغلقة فيمنع سريان التيارات الدوامية الدائرية.",
    "stepByStepSolutionEn": [
      "Circulating eddy currents require closed conducting loops around the perimeter of the pipe. The longitudinal slit opens these electrical circuits, virtually eliminating eddy currents. Without the magnetic braking force, the magnet accelerates downwards under gravity with $a \\approx g$."
    ],
    "stepByStepSolutionAr": [
      "تتطلب التيارات الدوامية مسارات دائرية مغلقة حول محيط الأسطوانة. وجود شق طولي يقطع هذه الدوائر فيكاد يمنع تولد التيارات الدوامية، فتنعدم قوى الفرملة المغناطيسية ويسقط المغناطيس سقوطاً حراً تقريباً بعجلة $a \\approx g$."
    ],
    "teacherTipEn": "This proves that slitting/laminating metals eliminates eddy current circuits.",
    "teacherTipAr": "هذا يثبت أن تقسيم المعادن أو عمل شقوق فيها يمنع التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_med_49",
    "titleEn": "Dynamo Generating Frequency and Pole Pairs",
    "titleAr": "تردد دوران الدينامو وعدد أزواج الأقطاب",
    "difficulty": "medium",
    "questionEn": "An industrial dynamo has 4 pairs of magnetic poles ($p = 4$ pairs, i.e., 8 poles). If its rotor spins at $750\\text{ revolutions per minute (rpm)}$, the frequency of the generated alternating current is:",
    "questionAr": "مولد كهربي صناعي يحتوي على 4 أزواج من الأقطاب المغناطيسية ($p = 4$). إذا دار ملفه بسرعة $750\\text{ دورة في الدقيقة}$، فإن تردد التيار المتردد المتولد يساوي:",
    "optionsEn": [
      "$50\\text{ Hz}$",
      "$12.5\\text{ Hz}$",
      "$100\\text{ Hz}$",
      "$25\\text{ Hz}$"
    ],
    "optionsAr": [
      "$50\\text{ Hz}$",
      "$12.5\\text{ Hz}$",
      "$100\\text{ Hz}$",
      "$25\\text{ Hz}$"
    ],
    "correctAnswer": "$50\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f = p \\times \\frac{N_{\\text{rpm}}}{60}$.",
    "hintAr": "$f = p \\times \\frac{N_{\\text{rpm}}}{60}$.",
    "stepByStepSolutionEn": [
      "Mechanical rotational speed is $n = \\frac{750}{60} = 12.5\\text{ rev/s}$. In a multipole generator, each pair of poles produces one complete electrical cycle per revolution: $f = p \\times n = 4 \\times 12.5 = 50\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "السرعة الميكانيكية بالثانية: $n = \\frac{750}{60} = 12.5\\text{ دورة/ثانية}$. كل زوج أقطاب يولد دورة كهربية كاملة في اللفة: $f = 4 \\times 12.5 = 50\\text{ Hz}$."
    ],
    "teacherTipEn": "Standard industrial power generation formula: $f = \\frac{p \\times N_{\\text{rpm}}}{60}$.",
    "teacherTipAr": "قانون محطات التوليد الصناعية: $f = \\frac{p \\times N_{\\text{rpm}}}{60}$."
  },
  {
    "id": "phys_ch3_db_med_50",
    "titleEn": "Ratio of Voltages in Unloaded vs Loaded Transformer",
    "titleAr": "جهد الثانوي في المحول المثالي مقارنة بغير المثالي",
    "difficulty": "medium",
    "questionEn": "For a step-down transformer connected to a constant primary AC voltage, as the electrical load connected to the secondary coil is increased (drawing more secondary current), the terminal voltage of the secondary coil:",
    "questionAr": "لمحول خافض للجهد متصل بجهد ابتدائي ثابت، عند زيادة الحمل الكهربي المتصل بالملف الثانوي (سحب تيار أكبر)، فإن فرق الجهد بين طرفي الملف الثانوي الحقيقي:",
    "optionsEn": [
      "Increases substantially",
      "Decreases slightly due to internal resistance ($V_s = \\text{emf}_s - I_s R_s$)",
      "Remains perfectly constant regardless of load",
      "Drops immediately to zero"
    ],
    "optionsAr": [
      "يزداد زيادة كبيرة",
      "يقل قليلاً بسبب المقاومة الداخلية لأسلاك الملف الثانوي ($V_s = \\text{emf}_s - I_s R_s$)",
      "يظل ثابتاً تماماً مهما زاد الحمل",
      "ينعدم فوراً"
    ],
    "correctAnswer": "Decreases slightly due to internal resistance ($V_s = \\text{emf}_s - I_s R_s$)",
    "correctIndex": 1,
    "hintEn": "Secondary winding has internal resistance $R_s$, causing an internal voltage drop $I_s R_s$.",
    "hintAr": "لأسلاك الثانوي مقاومة داخلية $R_s$ يضيع فيها جزء من الجهد مقداره $I_s R_s$.",
    "stepByStepSolutionEn": [
      "In a real transformer, the secondary winding has ohmic resistance $R_s$. By Ohm's law for closed circuits, the terminal voltage is $V_s = \\text{emf}_s - I_s R_s$. As $I_s$ increases with heavier load, the internal drop $I_s R_s$ increases, causing terminal voltage $V_s$ to decrease slightly."
    ],
    "stepByStepSolutionAr": [
      "في المحولات الحقيقية يكون لأسلاك الملف الثانوي مقاومة أومية داخلية $R_s$. طبقاً لقانون أوم للدائرة المغلقة يكون فرق الجهد بين طرفيه $V_s = \\text{emf}_s - I_s R_s$. بزيادة تيار الحمل $I_s$ يزداد الهبوط في الجهد $I_s R_s$ فيقل فرق الجهد الخارجي $V_s$ قليلاً."
    ],
    "teacherTipEn": "Terminal voltage behaves exactly like a battery with internal resistance: $V = V_B - I r$.",
    "teacherTipAr": "يتصرف الملف الثانوي تماماً كمصدر ذي مقاومة داخلية: $V = \\text{emf} - I r$."
  },
  {
    "id": "phys_ch3_db_med_51",
    "titleEn": "Induced EMF in a Coil with Constant Current",
    "titleAr": "القوة الدافعة المستحثة في ملف يمر به تيار ثابت الشدة",
    "difficulty": "medium",
    "questionEn": "A direct current of constant magnitude $10\\text{ A}$ flows steadily through a solenoid of $500\\text{ turns}$ and self-inductance $2.0\\text{ H}$. The induced electromotive force in the solenoid during this steady state is:",
    "questionAr": "يمر تيار مستمر ثابت الشدة مقداره $10\\text{ A}$ في ملف حلزوني عدد لفاته $500\\text{ لفة}$ ومعامل حثه الذاتي $2.0\\text{ H}$. فإن القوة الدافعة المستحثة في الملف أثناء ثبوت التيار تساوي:",
    "optionsEn": [
      "$20\\text{ V}$",
      "$1000\\text{ V}$",
      "$0\\text{ V}$",
      "$5000\\text{ V}$"
    ],
    "optionsAr": [
      "$20\\text{ V}$",
      "$1000\\text{ V}$",
      "$0\\text{ V}$",
      "$5000\\text{ V}$"
    ],
    "correctAnswer": "$0\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "Steady current means $\\Delta I / \\Delta t = 0$.",
    "hintAr": "ثبوت شدة التيار يعني أن المعدل الزمني للتغير يساوي صفراً ($\\Delta I / \\Delta t = 0$).",
    "stepByStepSolutionEn": [
      "Electromagnetic induction requires a changing magnetic flux or changing current. Since current is steady ($I = \\text{constant}$), $\\frac{\\Delta I}{\\Delta t} = 0$. By Faraday's self-induction law: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} = -2.0 \\times 0 = 0\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "الحث يتطلب بالضرورة تغيراً في التيار أو الفيض. وبما أن التيار مستمر وثابت الشدة، فإن $\\frac{\\Delta I}{\\Delta t} = 0$، وتكون القوة الدافعة المستحثة $\\text{emf} = -L (0) = 0\\text{ V}$."
    ],
    "teacherTipEn": "No induction occurs without change ($\\Delta I = 0 \\implies \\text{emf} = 0$).",
    "teacherTipAr": "لا حث دون تغير: ثبوت التيار يعني انعدام القوة الدافعة المستحثة."
  },
  {
    "id": "phys_ch3_db_med_52",
    "titleEn": "Comparison of Growth Time vs Decay Time in Self-Induction",
    "titleAr": "مقارنة زمن نمو التيار بزمن تلاشيه في دائرة حثية",
    "difficulty": "medium",
    "questionEn": "In an electric circuit containing an inductor coil and a DC battery, the time taken for the current to grow to its maximum steady value ($t_{\\text{growth}}$) compared to the time taken to collapse to zero ($t_{\\text{decay}}$) upon opening the circuit is:",
    "questionAr": "في دائرة كهربية تحتوي على ملف حث ومصدر تيار مستمر، فإن زمن نمو التيار حتى قيمته العظمى ($t_{\\text{نمو}}$) مقارنة بزمن تلاشيه حتى الصفر ($t_{\\text{انهيار}}$) عند فتح الدائرة يكون:",
    "optionsEn": [
      "$t_{\\text{growth}} < t_{\\text{decay}}$",
      "$t_{\\text{growth}} = t_{\\text{decay}}$",
      "$t_{\\text{growth}} = 0$",
      "$t_{\\text{growth}} > t_{\\text{decay}}$ (growth is much slower than decay)"
    ],
    "optionsAr": [
      "$t_{\\text{نمو}} < t_{\\text{انهيار}}$",
      "$t_{\\text{نمو}} = t_{\\text{انهيار}}$",
      "$t_{\\text{نمو}} = 0$",
      "$t_{\\text{نمو}} > t_{\\text{انهيار}}$ (زمن نمو التيار أكبر بكثير من زمن تلاشيه)"
    ],
    "correctAnswer": "$t_{\\text{growth}} > t_{\\text{decay}}$ (growth is much slower than decay)",
    "correctIndex": 3,
    "hintEn": "At opening, air gap has huge resistance, causing instantaneous collapse.",
    "hintAr": "عند فتح الدائرة تتكون فجوة هوائية ذات مقاومة هائلة تعجل بانهيار التيار فوراً.",
    "stepByStepSolutionEn": [
      "During switch closing, the opposing reverse EMF slows down the current rise. During switch opening, the air gap introduces a massive resistance ($R \\to \\infty$), causing the current to collapse almost instantaneously. Thus, the growth time is much larger than the collapse time ($t_{\\text{growth}} \\gg t_{\\text{decay}}$)."
    ],
    "stepByStepSolutionAr": [
      "عند غلق الدائرة، تتولد قوة دافعة مستحثة عكسية تعطل نمو التيار وتجعله بطيئاً. أما عند فتح الدائرة، فإن مقاومة الهواء بين طرفي المفتاح تكون هائلة جداً فتجعل التيار ينهار في زمن متناهٍ في الصغر. ولذا يكون زمن النمو أكبر بكثير من زمن التلاشي."
    ],
    "teacherTipEn": "Because decay time is so small, $\\frac{\\Delta I}{\\Delta t}$ is huge, creating the spark at the switch!",
    "teacherTipAr": "لصغر زمن التلاشي جداً يكون معدل الانهيار هائلاً فتتولد الشرارة الكهربية!"
  },
  {
    "id": "phys_ch3_db_med_53",
    "titleEn": "Magnetic Flux Through Coil at 30 Degrees to Field Lines",
    "titleAr": "الفيض المغناطيسي المخترق لملف يميل بـ 30 على المجال",
    "difficulty": "medium",
    "questionEn": "A coil of area $0.05\\text{ m}^2$ is placed in a uniform magnetic field $B = 0.4\\text{ T}$ such that the plane of the coil makes an angle of $30^\\circ$ with the magnetic field lines. The magnetic flux linking the coil is:",
    "questionAr": "ملف مساحته $0.05\\text{ m}^2$ موضوع في مجال مغناطيسي منتظم كثافته $0.4\\text{ T}$ بحيث يميل مستوى الملف بزاوية $30^\\circ$ على خطوط المجال المغناطيسي. فإن الفيض المغناطيسي المخترق للملف يساوي:",
    "optionsEn": [
      "$0.01\\text{ Wb}$",
      "$0.02\\text{ Wb}$",
      "$0.0173\\text{ Wb}$",
      "$0.005\\text{ Wb}$"
    ],
    "optionsAr": [
      "$0.01\\text{ Wb}$",
      "$0.02\\text{ Wb}$",
      "$0.0173\\text{ Wb}$",
      "$0.005\\text{ Wb}$"
    ],
    "correctAnswer": "$0.01\\text{ Wb}$",
    "correctIndex": 0,
    "hintEn": "In the flux equation $\\Phi_m = B A \\sin\\theta$, $\\theta$ is the angle between the coil plane and the field.",
    "hintAr": "في قانون الفيض $\\Phi_m = B A \\sin\\theta$، $\\theta$ هي الزاوية بين مستوى الملف وخطوط المجال.",
    "stepByStepSolutionEn": [
      "$\\Phi_m = B A \\sin 30^\\circ = 0.4 \\times 0.05 \\times 0.5 = 0.02 \\times 0.5 = 0.01\\text{ Wb}$."
    ],
    "stepByStepSolutionAr": [
      "$\\Phi_m = B A \\sin 30^\\circ = 0.4 \\times 0.05 \\times 0.5 = 0.01\\text{ Wb}$."
    ],
    "teacherTipEn": "Be careful to distinguish flux ($\\Phi_m = B A \\sin\\theta_{\\text{plane}}$) from dynamo EMF ($\\text{emf} = N B A \\omega \\sin\\theta_{\\text{normal}}$).",
    "teacherTipAr": "ميز بدقة: زاوية الفيض مع مستوى الملف، بينما زاوية الدينامو مع العمودي على مستوى الملف."
  },
  {
    "id": "phys_ch3_db_med_54",
    "titleEn": "Step-Up Transformer Turns and Current Inversion",
    "titleAr": "العلاقة العكسية بين اللفات والتيار في المحول",
    "difficulty": "medium",
    "questionEn": "A transformer has a turns ratio $\\frac{N_s}{N_p} = 5$. If it is an ideal transformer and the current flowing in the secondary coil is $2\\text{ A}$, the current in the primary coil is:",
    "questionAr": "محول كهربي مثالي النسبة بين عدد لفات ملفيه $\\frac{N_s}{N_p} = 5$. إذا كانت شدة التيار المار في الملف الثانوي $2\\text{ A}$، فإن شدة التيار المار في الملف الابتدائي تساوي:",
    "optionsEn": [
      "$0.4\\text{ A}$",
      "$10\\text{ A}$",
      "$2\\text{ A}$",
      "$25\\text{ A}$"
    ],
    "optionsAr": [
      "$0.4\\text{ A}$",
      "$10\\text{ A}$",
      "$2\\text{ A}$",
      "$25\\text{ A}$"
    ],
    "correctAnswer": "$10\\text{ A}$",
    "correctIndex": 1,
    "hintEn": "$\\frac{I_p}{I_s} = \\frac{N_s}{N_p}$.",
    "hintAr": "$\\frac{I_p}{I_s} = \\frac{N_s}{N_p}$.",
    "stepByStepSolutionEn": [
      "$\\frac{I_p}{2} = 5 \\implies I_p = 5 \\times 2 = 10\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{I_p}{2} = 5 \\implies I_p = 10\\text{ A}$."
    ],
    "teacherTipEn": "Step-up in voltage means step-down in current, so primary current is higher.",
    "teacherTipAr": "المحول الرافع للجهد خافض للتيار، ولذا تيار الابتدائي أكبر."
  },
  {
    "id": "phys_ch3_db_med_55",
    "titleEn": "RMS Voltage Calculation from Waveform Equation",
    "titleAr": "استخراج الجهد الفعال من معادلة الجهد اللحظي",
    "difficulty": "medium",
    "questionEn": "An alternating voltage is described by the equation $V_t = 282.8 \\sin(100\\pi t)\\text{ Volts}$. The effective value ($V_{\\text{eff}}$) and the frequency ($f$) of this supply are, respectively:",
    "questionAr": "معادلة فرق الجهد المتردد تُعطى بالعلاقة: $V_t = 282.8 \\sin(100\\pi t)\\text{ V}$. فإن القيمة الفعالة لفرق الجهد ($V_{\\text{eff}}$) وتردد التيار ($f$) على الترتيب هما:",
    "optionsEn": [
      "$282.8\\text{ V}$ and $100\\text{ Hz}$",
      "$141.4\\text{ V}$ and $50\\text{ Hz}$",
      "$200\\text{ V}$ and $50\\text{ Hz}$",
      "$200\\text{ V}$ and $100\\text{ Hz}$"
    ],
    "optionsAr": [
      "$282.8\\text{ V}$ و $100\\text{ Hz}$",
      "$141.4\\text{ V}$ و $50\\text{ Hz}$",
      "$200\\text{ V}$ و $50\\text{ Hz}$",
      "$200\\text{ V}$ و $100\\text{ Hz}$"
    ],
    "correctAnswer": "$200\\text{ V}$ and $50\\text{ Hz}$",
    "correctIndex": 2,
    "hintEn": "Compare with $V_t = V_{\\max} \\sin(2\\pi f t)$.",
    "hintAr": "قارن بالصورة القياسية: $V_t = V_{\\max} \\sin(2\\pi f t)$.",
    "stepByStepSolutionEn": [
      "1) $V_{\\max} = 282.8\\text{ V} \\implies V_{\\text{eff}} = \\frac{282.8}{\\sqrt{2}} = \\frac{282.8}{1.414} = 200\\text{ V}$. 2) $2\\pi f = 100\\pi \\implies f = 50\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "1) $V_{\\max} = 282.8\\text{ V} \\implies V_{\\text{eff}} = \\frac{282.8}{1.414} = 200\\text{ V}$. 2) $\\omega = 2\\pi f = 100\\pi \\implies f = 50\\text{ Hz}$."
    ],
    "teacherTipEn": "Equation comparison is a guaranteed question format on Thanaweya tests.",
    "teacherTipAr": "المقارنة بالمعادلة القياسية نمط امتحاني مضمون."
  },
  {
    "id": "phys_ch3_db_med_56",
    "titleEn": "Mutual Inductance with Given Primary Current Collapse",
    "titleAr": "حساب القوة الدافعة في الثانوي عند انعدام تيار الابتدائي",
    "difficulty": "medium",
    "questionEn": "Two adjacent coils have a mutual inductance $M = 0.25\\text{ H}$. If the current in the primary drops from $8\\text{ A}$ to $0\\text{ A}$ in $0.04\\text{ s}$, the electromotive force induced in the secondary coil is:",
    "questionAr": "ملفان متجاوران معامل الحث المتبادل بينهما $M = 0.25\\text{ H}$. إذا هبط التيار في الابتدائي من $8\\text{ A}$ إلى الصفر خلال $0.04\\text{ s}$، فإن القوة الدافعة المستحثة في الملف الثانوي تساوي:",
    "optionsEn": [
      "$25\\text{ V}$",
      "$2\\text{ V}$",
      "$100\\text{ V}$",
      "$50\\text{ V}$"
    ],
    "optionsAr": [
      "$25\\text{ V}$",
      "$2\\text{ V}$",
      "$100\\text{ V}$",
      "$50\\text{ V}$"
    ],
    "correctAnswer": "$50\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "$\\text{emf}_2 = -M \\frac{\\Delta I_1}{\\Delta t}$.",
    "hintAr": "$\\text{emf}_2 = -M \\frac{\\Delta I_1}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\Delta I_1 = 0 - 8 = -8\\text{ A}$. $\\text{emf}_2 = -0.25 \\times \\frac{-8}{0.04} = +0.25 \\times 200 = 50\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_2 = -0.25 \\times \\frac{-8}{0.04} = 50\\text{ V}$."
    ],
    "teacherTipEn": "Induced EMF is positive (forward EMF opposing the decrease).",
    "teacherTipAr": "القوة الدافعة طردية موجبة لمقاومة تناقص التيار."
  },
  {
    "id": "phys_ch3_db_med_57",
    "titleEn": "Torque on a Motor Coil at Various Orientations",
    "titleAr": "عزم الازدواج في المحرك عند مختلف الأوضاع",
    "difficulty": "medium",
    "questionEn": "The torque acting on the armature coil of an electric motor is at its maximum when the plane of the coil is:",
    "questionAr": "يكون عزم الازدواج المؤثر على ملف المحرك الكهربي نهاية عظمى عندما يكون مستوى الملف:",
    "optionsEn": [
      "Parallel to the magnetic field lines ($\\theta_{\\text{normal}} = 90^\\circ$)",
      "Perpendicular to the magnetic field lines ($\\theta_{\\text{normal}} = 0^\\circ$)",
      "At an angle of $45^\\circ$ to the magnetic field lines",
      "At an angle of $30^\\circ$ to the magnetic field lines"
    ],
    "optionsAr": [
      "موازياً لخطوط المجال المغناطيسي ($\\theta_{\\text{العمودي}} = 90^\\circ$)",
      "عمودياً على خطوط المجال المغناطيسي ($\\theta_{\\text{العمودي}} = 0^\\circ$)",
      "مائلاً بزاوية $45^\\circ$ على خطوط المجال المغناطيسي",
      "مائلاً بزاوية $30^\\circ$ على خطوط المجال المغناطيسي"
    ],
    "correctAnswer": "Parallel to the magnetic field lines ($\\theta_{\\text{normal}} = 90^\\circ$)",
    "correctIndex": 0,
    "hintEn": "$\\tau = B I A N \\sin\\theta_{\\text{normal}}$. When parallel, $\\theta_{\\text{normal}} = 90^\\circ$.",
    "hintAr": "$\\tau = B I A N \\sin\\theta_{\\text{العمودي}}$. عندما يكون الملف موازياً يكون العمودي عليه عمودياً على المجال.",
    "stepByStepSolutionEn": [
      "When the coil plane is parallel to the field, the perpendicular distance between the lines of action of the two opposing magnetic forces on the side lengths is maximum ($d = \\text{width}$), yielding maximum torque $\\tau_{\\max} = B I A N$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف موازياً للمجال، يكون البعد العمودي بين خطي عمل القوتين المؤثرتين على الضلعين الطوليين نهاية عظمى، فيكون عزم الازدواج قيمة عظمى $\\tau_{\\max} = B I A N$."
    ],
    "teacherTipEn": "In a motor, parallel = max torque; perpendicular = zero torque.",
    "teacherTipAr": "في المحرك: الموازي = عزم أقصى؛ والعمودي = عزم منعدم."
  },
  {
    "id": "phys_ch3_db_med_58",
    "titleEn": "Heat Produced by AC vs DC in Equal Times",
    "titleAr": "مقارنة كمية الحرارة المتولدة من تيار متردد ومستمر",
    "difficulty": "medium",
    "questionEn": "An alternating current of peak value $I_{\\max} = 10\\text{ A}$ and a steady direct current of magnitude $I = 10\\text{ A}$ are passed separately through two identical resistors for the same time $t$. The ratio of heat produced by the AC to that produced by the DC is:",
    "questionAr": "تيار متردد قيمته العظمى $I_{\\max} = 10\\text{ A}$ وتيار مستمر شدته $10\\text{ A}$ مَرَّ كل منهما على حدة في مقاومتين متماثلتين خلال نفس الفترة الزمنية $t$. فإن نسبة كمية الحرارة المتولدة بالتيار المتردد إلى المتولدة بالتيار المستمر تساوي:",
    "optionsEn": [
      "$1 : 1$",
      "$1 : 2$",
      "$1 : \\sqrt{2}$",
      "$2 : 1$"
    ],
    "optionsAr": [
      "$1 : 1$",
      "$1 : 2$",
      "$1 : \\sqrt{2}$",
      "$2 : 1$"
    ],
    "correctAnswer": "$1 : 2$",
    "correctIndex": 1,
    "hintEn": "Effective AC current is $I_{\\text{eff}} = \\frac{I_{\\max}}{\\sqrt{2}}$. Heat $\\propto I^2$.",
    "hintAr": "القيمة الفعالة للتيار المتردد هي $I_{\\text{eff}} = \\frac{I_{\\max}}{\\sqrt{2}}$ والحرارة تتناسب مع $I^2$.",
    "stepByStepSolutionEn": [
      "Heat produced by AC: $Q_{\\text{AC}} = I_{\\text{eff}}^2 R t = \\left(\\frac{I_{\\max}}{\\sqrt{2}}\\right)^2 R t = \\frac{1}{2} I_{\\max}^2 R t$. Heat produced by DC: $Q_{\\text{DC}} = I_{\\text{DC}}^2 R t = I_{\\max}^2 R t$. Thus the ratio is $\\frac{Q_{\\text{AC}}}{Q_{\\text{DC}}} = \\frac{1/2}{1} = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "الحرارة الناتجة من المتردد: $Q_{\\text{AC}} = I_{\\text{eff}}^2 R t = \\frac{1}{2} I_{\\max}^2 R t$. والحرارة الناتجة من المستمر: $Q_{\\text{DC}} = I^2 R t = I_{\\max}^2 R t$. النسبة بينهما هي $1 : 2$."
    ],
    "teacherTipEn": "AC with peak $10\\text{ A}$ produces only half the heat of DC with steady $10\\text{ A}$.",
    "teacherTipAr": "التيار المتردد ذو القيمة العظمى $10\\text{ A}$ يولد نصف الحرارة التي يولدها تيار مستمر قيمته $10\\text{ A}$."
  },
  {
    "id": "phys_ch3_db_med_59",
    "titleEn": "Dynamo Average EMF over 1/6th Cycle from Perpendicular",
    "titleAr": "متوسط القوة الدافعة لدينامو خلال سدس دورة من الوضع العمودي",
    "difficulty": "medium",
    "questionEn": "An AC dynamo has $\\text{emf}_{\\max} = 120\\text{ V}$. What is the average electromotive force during one-sixth of a cycle ($1/6\\text{ cycle}$, i.e., $60^\\circ$ rotation) starting from the perpendicular position?",
    "questionAr": "دينامو تيار متردد قيمته العظمى $\\text{emf}_{\\max} = 120\\text{ V}$. ما هو متوسط القوة الدافعة المستحثة خلال سدس دورة ($1/6\\text{ دورة}$، أي دوران بزاوية $60^\\circ$) بدءاً من الوضع العمودي؟",
    "optionsEn": [
      "$\\frac{2}{\\pi}\\text{emf}_{\\max} \\approx 76.39\\text{ V}$",
      "$60.00\\text{ V}$",
      "$\\frac{3}{2\\pi}\\text{emf}_{\\max} = \\frac{180}{\\pi}\\text{ V} \\approx 57.30\\text{ V}$",
      "$\\frac{3}{\\pi}\\text{emf}_{\\max} \\approx 114.59\\text{ V}$"
    ],
    "optionsAr": [
      "$\\frac{2}{\\pi}\\text{emf}_{\\max} \\approx 76.39\\text{ V}$",
      "$60.00\\text{ V}$",
      "$\\frac{3}{2\\pi}\\text{emf}_{\\max} = \\frac{180}{\\pi}\\text{ V} \\approx 57.30\\text{ V}$",
      "$\\frac{3}{\\pi}\\text{emf}_{\\max} \\approx 114.59\\text{ V}$"
    ],
    "correctAnswer": "$\\frac{3}{2\\pi}\\text{emf}_{\\max} = \\frac{180}{\\pi}\\text{ V} \\approx 57.30\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "At $60^\\circ$ from perpendicular: $\\Phi_{m2} = B A \\cos 60^\\circ = 0.5 B A$, $\\Delta t = \\frac{1}{6f}$.",
    "hintAr": "بعد دوران $60^\\circ$ من الوضع العمودي: $\\Phi_{m2} = B A \\cos 60^\\circ = 0.5 B A$ والزمن $\\Delta t = \\frac{1}{6f}$.",
    "stepByStepSolutionEn": [
      "Initial flux: $\\Phi_{m1} = B A$. After $60^\\circ$: $\\Phi_{m2} = B A \\cos 60^\\circ = 0.5 B A$. $|\\Delta\\Phi_m| = 0.5 B A$. Time: $\\Delta t = \\frac{T}{6} = \\frac{1}{6f}$. $\\text{emf}_{\\text{avg}} = N \\frac{0.5 B A}{1/(6f)} = 3 N B A f$. Since $\\text{emf}_{\\max} = 2\\pi N B A f$, $\\text{emf}_{\\text{avg}} = \\frac{3}{2\\pi} \\text{emf}_{\\max} = \\frac{3 \\times 120}{2\\pi} = \\frac{180}{\\pi} \\approx 57.30\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "الفيض الابتدائي $\\Phi_{m1} = B A$. بعد دوران $60^\\circ$ يصبح الفيض $\\Phi_{m2} = B A \\cos 60^\\circ = 0.5 B A$. التغير في الفيض $|\\Delta\\Phi_m| = 0.5 B A$، والزمن $\\Delta t = \\frac{1}{6f}$. بالتعويض في قانون فاراداي: $\\text{emf}_{\\text{avg}} = 3 N B A f = \\frac{3}{2\\pi}\\text{emf}_{\\max} = \\frac{180}{\\pi} \\approx 57.30\\text{ V}$."
    ],
    "teacherTipEn": "A classic higher-order thinking application of Faraday's law to fractional rotation.",
    "teacherTipAr": "تطبيق كلاسيكي رفيع المستوى على متوسط القوة الدافعة لكسور الدورة."
  }
],
  hots: [
  {
    "id": "phys_ch3_db_hots_01",
    "titleEn": "Phase Relationship Between Magnetic Flux and Induced EMF",
    "titleAr": "العلاقة الطورية بين الفيض المغناطيسي والقوة الدافعة المستحثة",
    "difficulty": "hots",
    "questionEn": "In an AC dynamo, when the magnetic flux linking the coil is at its positive maximum ($\\Phi_m = +B A$), the instantaneous induced electromotive force ($\\text{emf}$) is:",
    "questionAr": "في دينامو التيار المتردد، عندما يكون الفيض المغناطيسي المخترق لملف الدينامو قيمة عظمى موجبة ($\\Phi_m = +B A$)، فإن القوة الدافعة الكهربية المستحثة اللحظية تكون:",
    "optionsEn": [
      "Zero, because the time rate of change of magnetic flux ($\\frac{d\\Phi_m}{dt}$) is zero at the peak of the flux curve",
      "At its positive maximum ($\\text{emf} = +\\text{emf}_{\\max}$)",
      "At its negative maximum ($\\text{emf} = -\\text{emf}_{\\max}$)",
      "Equal to the effective value ($\\text{emf}_{\\text{eff}}$)"
    ],
    "optionsAr": [
      "صفراً، لأن المعدل الزمني للتغير في الفيض المغناطيسي ($\\frac{d\\Phi_m}{dt}$) ينعدم عند قمة منحنى الفيض",
      "قيمة عظمى موجبة ($\\text{emf} = +\\text{emf}_{\\max}$)",
      "قيمة عظمى سالبة ($\\text{emf} = -\\text{emf}_{\\max}$)",
      "مساوية للقيمة الفعالة ($\\text{emf}_{\\text{eff}}$)"
    ],
    "correctAnswer": "Zero, because the time rate of change of magnetic flux ($\\frac{d\\Phi_m}{dt}$) is zero at the peak of the flux curve",
    "correctIndex": 0,
    "hintEn": "Faraday's law states $\\text{emf} = -N \\frac{d\\Phi_m}{dt}$. The derivative of a peak is zero.",
    "hintAr": "قانون فاراداي يربط القوة الدافعة بمشتقة الفيض بالنسبة للزمن، ومشتقة الدالة عند القمة تساوي صفراً.",
    "stepByStepSolutionEn": [
      "Mathematically, if the coil plane rotates with angle $\\alpha$ from the field, $\\Phi_m(t) = B A \\cos(\\omega t)$. Its time derivative is $\\frac{d\\Phi_m}{dt} = -B A \\omega \\sin(\\omega t)$. By Faraday's law, $\\text{emf} = -N \\frac{d\\Phi_m}{dt} = N B A \\omega \\sin(\\omega t)$. When $\\Phi_m$ is maximum ($\\cos\\omega t = 1$), $\\sin\\omega t = 0$, so $\\text{emf} = 0$."
    ],
    "stepByStepSolutionAr": [
      "رياضياً: الفيض دالة جيب تمام $\\Phi_m = B A \\cos(\\omega t)$، ومعدل تغيره بالنسبة للزمن هو المشتقة الأولى $\\frac{d\\Phi}{dt} = -B A \\omega \\sin(\\omega t)$. وحسب قانون فاراداي $\\text{emf} = -N \\frac{d\\Phi}{dt}$، فعندما يكون الفيض نهاية عظمى يكون ميل المماس للمنحنى مساوياً للصفر، فتكون القوة الدافعة المستحثة منعدمة تماماً."
    ],
    "teacherTipEn": "There is a $90^\\circ$ phase shift: when flux is maximum, EMF is zero; when flux is zero, EMF is maximum!",
    "teacherTipAr": "فرق طور قدره $90^\\circ$: عندما يكون الفيض نهاية عظمى تنعدم $\\text{emf}$، وعندما ينعدم الفيض تكون $\\text{emf}$ نهاية عظمى!"
  },
  {
    "id": "phys_ch3_db_hots_02",
    "titleEn": "Slope of Flux Curve Represents Induced EMF",
    "titleAr": "ميل المماس لمنحنى الفيض والزمن يمثل القوة الدافعة",
    "difficulty": "hots",
    "questionEn": "On a graph plotting magnetic flux ($\\Phi_m$) versus time ($t$) through a single-turn loop, the point where the magnitude of induced electromotive force is at its ABSOLUTE MAXIMUM is where:",
    "questionAr": "في الرسم البياني المعبر عن تغير الفيض المغناطيسي ($\\Phi_m$) مع الزمن ($t$) لحلقة موصلة، النقطة التي تكون عندها القوة الدافعة المستحثة أكبر ما يمكن هي النقطة التي يكون عندها:",
    "optionsEn": [
      "The curve reaches its crest (highest positive peak)",
      "The curve intersects the time axis ($\\Phi_m = 0$), where the tangent slope is steepest",
      "The curve reaches its trough (deepest negative valley)",
      "The slope of the tangent to the curve is horizontal"
    ],
    "optionsAr": [
      "المنحنى عند القمة (أقصى قيمة موجبة للفيض)",
      "المنحنى يقطع محور الزمن ($\\Phi_m = 0$) حيث يكون ميل المماس أكبر ما يمكن",
      "المنحنى عند القاع (أقصى قيمة سالبة للفيض)",
      "ميل المماس للمنحنى أفقياً تماماً"
    ],
    "correctAnswer": "The curve intersects the time axis ($\\Phi_m = 0$), where the tangent slope is steepest",
    "correctIndex": 1,
    "hintEn": "Magnitude of induced EMF is proportional to $|d\\Phi_m/dt|$ (slope of tangent).",
    "hintAr": "مقدار القوة الدافعة المستحثة يتناسب طردياً مع القيمة المطلقة لميل المماس $|d\\Phi_m/dt|$.",
    "stepByStepSolutionEn": [
      "By Faraday's law, $|\\text{emf}| = N \\left|\\frac{d\\Phi_m}{dt}\\right|$. The slope of the tangent to the sinusoidal flux curve is steepest (maximum rate of change) exactly when the curve crosses zero ($\\Phi_m = 0$). Hence, maximum induced EMF occurs at zero flux."
    ],
    "stepByStepSolutionAr": [
      "من قانون فاراداي: القوة الدافعة تتناسب مع ميل مماس منحنى ($\\Phi_m - t$). ويكون ميل المماس للدالة الجيبية أقصى ما يمكن عند نقاط انعدام الفيض (لحظة مرور المنحنى بمحور السينات $\\Phi_m = 0$)، فيكون معدل قطع خطوط الفيض نهاية عظمى والقوة الدافعة نهاية عظمى."
    ],
    "teacherTipEn": "Zero flux crossing $\\implies$ steepest slope $\\implies$ maximum induced EMF.",
    "teacherTipAr": "نقطة الصفر في منحنى الفيض $\\implies$ أقصى انحدار للمماس $\\implies$ أقصى $\\text{emf}$ مستحثة."
  },
  {
    "id": "phys_ch3_db_hots_03",
    "titleEn": "Two Parallel Rods Moving on Same Rails in Same Direction",
    "titleAr": "حركة ساقين موصلتين على نفس السكتين في نفس الاتجاه",
    "difficulty": "hots",
    "questionEn": "Two identical metallic rods, $X$ and $Y$, slide on frictionless parallel horizontal conducting rails in a uniform vertical magnetic field. Both rods move in the same direction at the same velocity $v$. The induced current flowing in the circuit loop is:",
    "questionAr": "ساقان معدنيتان متماثلتان $X$ و $Y$ تنزلقان على سكتين موصلتين أفقيتين مهملتي الاحتكاك داخل مجال مغناطيسي رأسي منتظم. إذا تحركت الساقان في نفس الاتجاه وبنفس السرعة $v$، فإن شدة التيار المستحث المار في الدائرة المغلقة تساوي:",
    "optionsEn": [
      "$\\frac{2 B v L}{R}$",
      "$\\frac{B v L}{R}$",
      "Zero, because both rods induce equal opposing electromotive forces ($\\Delta\\Phi_m = 0$)",
      "$\\frac{B v L}{2R}$"
    ],
    "optionsAr": [
      "$\\frac{2 B v L}{R}$",
      "$\\frac{B v L}{R}$",
      "صفراً، لأن الساقين تولدان قوتين دافعتين متساويتين ومتضادتين في اتجاه الدوران (المساحة المحصورة بينهما ثابتة)",
      "$\\frac{B v L}{2R}$"
    ],
    "correctAnswer": "Zero, because both rods induce equal opposing electromotive forces ($\\Delta\\Phi_m = 0$)",
    "correctIndex": 2,
    "hintEn": "If both rods move at equal velocity in the same direction, does the enclosed area change?",
    "hintAr": "إذا تحركت الساقان بنفس السرعة في نفس الاتجاه، هل تتغير المساحة المحصورة بينهما؟",
    "stepByStepSolutionEn": [
      "Because both rods move at the same speed in the same direction, the distance separating them remains constant. The enclosed area between the two rods does not change ($\\Delta A = 0$), so the magnetic flux enclosed by the circuit remains strictly constant ($\\Delta\\Phi_m = 0$). By Faraday's law, net induced EMF is zero and no current flows."
    ],
    "stepByStepSolutionAr": [
      "بتحرك الساقين بنفس السرعة والاتجاه، تظل المسافة الفاصلة بينهما ثابتة، وبالتالي تظل المساحة المحصورة بين الساقين والسكتين ثابتة دون أي تغير ($\\Delta A = 0$). وبما أن الفيض المخترق للدائرة ثابت ($\\Delta\\Phi_m = 0$)، فإن القوة الدافعة المستحثة المحصلة تنعدم وينعدم التيار تماماً."
    ],
    "teacherTipEn": "Alternatively: Both rods act as identical opposing batteries in parallel bucking configuration.",
    "teacherTipAr": "يمكن تصورهما كبطاريتين متماثلتين ومتضادتين في الدائرة المغلقة فيلاشي كل منهما الآخر."
  },
  {
    "id": "phys_ch3_db_hots_04",
    "titleEn": "Two Parallel Rods Moving in Opposite Directions",
    "titleAr": "حركة ساقين موصلتين على نفس السكتين في اتجاهين متضادين",
    "difficulty": "hots",
    "questionEn": "If the two rods in the previous question move in opposite directions (away from each other) each at speed $v$, the net induced electromotive force in the loop is:",
    "questionAr": "إذا تحركت الساقان السابقتان في اتجاهين متضادين (مبتعدتين عن بعضهما) بسرعة $v$ لكل منهما، فإن القوة الدافعة المستحثة الكلية المتولدة في الحلقة تساوي:",
    "optionsEn": [
      "Zero",
      "$B v L$",
      "$0.5 B v L$",
      "$2 B v L$ (the induced EMFs assist each other around the loop)"
    ],
    "optionsAr": [
      "صفراً",
      "$B v L$",
      "$0.5 B v L$",
      "$2 B v L$ (تتضافر القوتان الدافعتان في نفس اتجاه الدوران بالحلقة)"
    ],
    "correctAnswer": "$2 B v L$ (the induced EMFs assist each other around the loop)",
    "correctIndex": 3,
    "hintEn": "The rate of separation is $v_{\\text{rel}} = v - (-v) = 2v$.",
    "hintAr": "سرعة تباعد الساقين عن بعضهما هي السرعة النسبية $v_{\\text{rel}} = 2v$.",
    "stepByStepSolutionEn": [
      "As the rods move apart each at speed $v$, the area increases at rate $\\frac{dA}{dt} = 2 v L$. Thus, the rate of change of magnetic flux is $\\frac{d\\Phi_m}{dt} = B \\frac{dA}{dt} = 2 B v L$. By Faraday's law, $\\text{emf}_{\\text{total}} = 2 B v L$. Applying Fleming's right-hand rule shows that both EMFs push current in the same circulatory sense around the loop."
    ],
    "stepByStepSolutionAr": [
      "بابتعاد الساقين في اتجاهين متضادين، تتسع المساحة المحصورة بمعدل $\\frac{dA}{dt} = 2 v L$. فيكون معدل التغير في الفيض هو $\\frac{d\\Phi}{dt} = 2 B v L$. وبتطبيق قاعدة اليد اليمنى لفليمنج على كل ساق، نجد أن اتجاهي التيار المستحث في الساقين يتضافران معاً في مسار دائري مغلق واحد فتجمع القوتان الدافعتان: $\\text{emf} = 2 B v L$."
    ],
    "teacherTipEn": "Moving away from each other doubles the rate of area expansion.",
    "teacherTipAr": "الحركة في اتجاهين متضادين تضاعف معدل تغير المساحة وتضاعف القوة الدافعة."
  },
  {
    "id": "phys_ch3_db_hots_05",
    "titleEn": "Terminal Velocity of a Falling Conducting Rod Under Gravity",
    "titleAr": "السرعة الحدية لساق موصلة تسقط تحت تأثير الجاذبية في مجال مغناطيسي",
    "difficulty": "hots",
    "questionEn": "A conducting rod of mass $m$, length $L$, and resistance $R$ falls vertically under gravity along two frictionless vertical conducting rails connected at the top by a zero-resistance wire, in a horizontal magnetic field $B$. The terminal velocity ($v_t$) reached by the falling rod is:",
    "questionAr": "ساق موصلة كتلتها $m$ وطولها $L$ ومقاومتها $R$ تسقط رأسياً تحت تأثير الجاذبية على سكتين رأسيتين مهملتي الاحتكاك متصلتين من أعلى بسلك عديم المقاومة، داخل مجال مغناطيسي أفقي منتظم $B$. تكون السرعة الحدية الثابتة ($v_t$) التي تصل إليها الساق مساوية:",
    "optionsEn": [
      "$v_t = \\frac{m g R}{B^2 L^2}$",
      "$v_t = \\frac{B^2 L^2}{m g R}$",
      "$v_t = \\frac{m g B L}{R}$",
      "$v_t = \\sqrt{\\frac{2 m g R}{B L}}$"
    ],
    "optionsAr": [
      "$v_t = \\frac{m g R}{B^2 L^2}$",
      "$v_t = \\frac{B^2 L^2}{m g R}$",
      "$v_t = \\frac{m g B L}{R}$",
      "$v_t = \\sqrt{\\frac{2 m g R}{B L}}$"
    ],
    "correctAnswer": "$v_t = \\frac{m g R}{B^2 L^2}$",
    "correctIndex": 0,
    "hintEn": "At terminal velocity, downward gravity equals upward magnetic force: $m g = F_{\\text{mag}}$.",
    "hintAr": "عند السرعة الحدية تتزن قوة الجاذبية لأسفل مع القوة المغناطيسية لأعلى: $m g = F_{\\text{mag}}$.",
    "stepByStepSolutionEn": [
      "As the rod falls at speed $v$, induced EMF is $\\text{emf} = B v L$, and current is $I = \\frac{B v L}{R}$. By Lenz's law, this current creates an upward magnetic braking force $F = B I L = B \\left(\\frac{B v L}{R}\\right) L = \\frac{B^2 L^2 v}{R}$. Terminal velocity is reached when net acceleration is zero: $m g = \\frac{B^2 L^2 v_t}{R} \\implies v_t = \\frac{m g R}{B^2 L^2}$."
    ],
    "stepByStepSolutionAr": [
      "أثناء سقوط الساق يتولد فرق جهد مستحث $\\text{emf} = B v L$ وتيار $I = \\frac{B v L}{R}$. يولد هذا التيار قوة مغناطيسية لأعلى تعاكس السقوط قيمتها $F = B I L = \\frac{B^2 L^2 v}{R}$. وتصل الساق لسرعة منتظمة حدية عندما تتساوى القوة المغناطيسية المعيقة مع وزن الساق: $m g = \\frac{B^2 L^2 v_t}{R}$، ومنها $v_t = \\frac{m g R}{B^2 L^2}$."
    ],
    "teacherTipEn": "Terminal velocity is directly proportional to circuit resistance $R$ and inversely proportional to $B^2$.",
    "teacherTipAr": "السرعة الحدية تتناسب طردياً مع المقاومة $R$ وعكسياً مع مربع كثافة الفيض $B^2$."
  },
  {
    "id": "phys_ch3_db_hots_06",
    "titleEn": "Jumping Ring Experiment (Elihu Thomson Effect)",
    "titleAr": "تجربة الحلقة القافزة (تأثير تومسون للحث)",
    "difficulty": "hots",
    "questionEn": "An aluminum ring is placed loosely over the extended vertical iron core of a solenoid connected to an AC source. When the switch is closed, the ring violently jumps upwards and hovers in mid-air because:",
    "questionAr": "وُضعت حلقة من الألومنيوم بحرية حول الامتداد الرأسي لقلب حديدي لملف حلزوني متصل بمصدر تيار متردد. عند غلق المفتاح، تقفز الحلقة لأعلى وتظل معلقة في الهواء بسبب:",
    "optionsEn": [
      "Static electrostatic repulsion between free positive charges",
      "The induced current in the ring produces an opposing magnetic field, creating a continuous repulsive force between the solenoid and the ring (Lenz's law)",
      "Thermal convection currents in the surrounding air lifting the ring",
      "The iron core becomes negatively charged and repels the electrons"
    ],
    "optionsAr": [
      "تنافر كهروستاتيكي استاتيكي بين الشحنات الموجبة الحرة",
      "التيار المستحث في الحلقة يولد مجالاً مغناطيسياً معاكساً لمجال الملف، فتنشأ قوة تنافر مستمرة بين الملف والحلقة (تطبيقاً لقاعدة لنز)",
      "تيارات الحمل الحراري للهواء المحيط التي ترفع الحلقة",
      "شحن القلب الحديدي بشحنة سالبة تنافر إلكترونات الألومنيوم"
    ],
    "correctAnswer": "The induced current in the ring produces an opposing magnetic field, creating a continuous repulsive force between the solenoid and the ring (Lenz's law)",
    "correctIndex": 1,
    "hintEn": "Lenz's law: The induced field opposes the source field, causing repulsion.",
    "hintAr": "قاعدة لنز: المجال المستحث في الحلقة يضاد مجال الملف فيحدث التنافر.",
    "stepByStepSolutionEn": [
      "The alternating current in the solenoid creates a rapidly changing magnetic flux through the aluminum ring. By Lenz's law and Faraday's law, a strong alternating current is induced in the ring that produces an opposing magnetic pole at all instants (with an inductive phase lag). The resulting magnetic repulsion overcomes the weight of the ring, launching it upward."
    ],
    "stepByStepSolutionAr": [
      "يولد التيار المتردد في الملف فيضاً متغيراً يقطع حلقة الألومنيوم، فتتولد فيها بالحث تيارات قوية تولد مجالاً مغناطيسياً معاكساً لمجال الملف في كل لحظة (مع تأخر طوري حثي). وتنشأ قوة تنافر مغناطيسية تفوق وزن الحلقة فتقفز لأعلى وتظل معلقة في الهواء حيث تتزن القوة المغناطيسية مع وزنها."
    ],
    "teacherTipEn": "If a slot is cut across the ring, it cannot form a closed circuit, so no current flows and it does NOT jump!",
    "teacherTipAr": "إذا قُطعت الحلقة لعمل شق فيها فلن يمر بها تيار مستحث ولن تقفز إطلاقاً!"
  },
  {
    "id": "phys_ch3_db_hots_07",
    "titleEn": "Effect of Cooling the Jumping Ring in Liquid Nitrogen",
    "titleAr": "أثر تبريد الحلقة في نيتروجين سائل على ارتفاع القفز",
    "difficulty": "hots",
    "questionEn": "If the aluminum ring in the Elihu Thomson jumping ring experiment is first immersed in liquid nitrogen (cooling it to $-196^\\circ\\text{C}$) before placing it on the solenoid core, upon closing the AC switch the ring will:",
    "questionAr": "إذا غُمرت حلقة الألومنيوم في النيتروجين السائل لتبريدها إلى $-196^\\circ\\text{C}$ قبل وضعها على القلب الحديدي، فعند غلق مفتاح التيار المتردد فإن الحلقة:",
    "optionsEn": [
      "Fail to jump at all, because low temperatures freeze magnetic flux lines",
      "Jump to the exact same height as at room temperature",
      "Jump much higher than at room temperature, because its electrical resistance drops drastically, greatly increasing the induced current and repulsive force",
      "Stick firmly to the iron core by magnetic attraction"
    ],
    "optionsAr": [
      "لا تقفز إطلاقاً لأن التبريد يجمد خطوط الفيض المغناطيسي",
      "تقفز لنفس الارتفاع تماماً دون أي تغيير",
      "تقفز لارتفاع أعلى بكثير من درجة حرارة الغرفة، لأن مقاومتها النوعية تنخفض جداً فيزداد التيار المستحث وتزداد قوة التنافر",
      "تلتصق بالقلب الحديدي بقوة تجاذب مغناطيسية"
    ],
    "correctAnswer": "Jump much higher than at room temperature, because its electrical resistance drops drastically, greatly increasing the induced current and repulsive force",
    "correctIndex": 2,
    "hintEn": "Cooling a metal decreases its resistivity $\\rho_e$, so $R$ drops and $I = \\text{emf}/R$ surges.",
    "hintAr": "تبريد الفلزات يقلل مقاومتها النوعية فيزداد التيار المستحث وتزداد قوة التنافر.",
    "stepByStepSolutionEn": [
      "At $-196^\\circ\\text{C}$, the electrical resistance of aluminum decreases by a factor of about 7. Because $I_{\\text{induced}} = \\frac{\\text{emf}}{R}$, the induced current and the resulting magnetic dipole moment of the ring become far stronger. The magnetic repulsive force $F \\propto I$ increases tremendously, launching the ring to a dramatically higher altitude."
    ],
    "stepByStepSolutionAr": [
      "عند تبريد الألومنيوم في النيتروجين السائل تنخفض مقاومته الأومية بشكل هائل لنقص تصادم الإلكترونات مع الذرات. وبالتالي يزداد التيار المستحث المتولد فيها زيادة هائلة ($I = \\frac{\\text{emf}}{R}$)، فتتضاعف قوة التنافر المغناطيسي وتقفز الحلقة لارتفاع شاهق جداً مقارنة بحرارة الغرفة."
    ],
    "teacherTipEn": "Superb synthesis question connecting temperature dependence of resistance (Chapter 1) with Lenz's law (Chapter 3).",
    "teacherTipAr": "سؤال ربط رائع يجمع بين أثر الحرارة على المقاومة (الفصل الأول) وقاعدة لنز (الفصل الثالث)."
  },
  {
    "id": "phys_ch3_db_hots_08",
    "titleEn": "Opening an Inductive Circuit with a Neon Lamp",
    "titleAr": "فتح دائرة ملف حثي كبير متصل بمصباح نيون",
    "difficulty": "hots",
    "questionEn": "A coil with a very large number of turns wound on a closed soft iron core is connected in parallel with a neon lamp (which requires $180\\text{ V}$ to glow) and in series with a $6\\text{ V}$ DC battery and a key. When the key is closed, the lamp does NOT light. When the key is opened, the lamp flashes momentarily and an electric spark jumps across the switch. The explanation is:",
    "questionAr": "ملف يحتوي على عدد هائل من اللفات ملفوف حول قلب حديدي مغلق وُصل على التوازي مع مصباح نيون (يحتاج $180\\text{ V}$ ليضيء)، واتصلت المجموعة ببطارية $6\\text{ V}$ ومفتاح. عند غلق المفتاح لا يضيء المصباح، وعند فتح المفتاح يومض المصباح لحظياً وتحدث شرارة عند المفتاح. التفسير العلمي لذلك هو:",
    "optionsEn": [
      "The battery accumulates $180\\text{ V}$ of electrostatic potential while closed",
      "The neon gas inside the lamp ionizes spontaneously when current stops",
      "The resistance of the coil drops to zero at the moment of opening",
      "Upon opening, the current collapses in a fraction of a millisecond ($\\Delta t \\to 0$), inducing a forward EMF exceeding $180\\text{ V}$; upon closing, the reverse EMF is small and opposes the $6\\text{ V}$ source"
    ],
    "optionsAr": [
      "البطارية تختزن جهداً كبيراً يصل إلى $180\\text{ V}$ أثناء الغلق",
      "غاز النيون داخل المصباح يتأين تلقائياً عند انقطاع التيار",
      "مقاومة الملف تصبح صفراً لحظة الفتح",
      "عند الفتح يتلاشى التيار في زمن متناهٍ في الصغر فتتولد قوة دافعة طردية تتجاوز $180\\text{ V}$، بينما عند الغلق تكون العكسية بطيئة ولا تتعدى جهد المصدر ($6\\text{ V}$)"
    ],
    "correctAnswer": "Upon opening, the current collapses in a fraction of a millisecond ($\\Delta t \\to 0$), inducing a forward EMF exceeding $180\\text{ V}$; upon closing, the reverse EMF is small and opposes the $6\\text{ V}$ source",
    "correctIndex": 3,
    "hintEn": "Decay time is thousands of times shorter than growth time.",
    "hintAr": "زمن انهيار التيار أصغر آلاف المرات من زمن نموه.",
    "stepByStepSolutionEn": [
      "At closing, reverse EMF opposes the $6\\text{ V}$ battery, so voltage across the lamp never exceeds $6\\text{ V}$ (neon needs $180\\text{ V}$, so no glow). At opening, current drops to zero across an insulating air gap in microseconds. The rate $\\frac{\\Delta I}{\\Delta t}$ is gigantic, producing a forward induced EMF $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} > 180\\text{ V}$ that instantly ionizes the neon gas, causing a flash and switch spark."
    ],
    "stepByStepSolutionAr": [
      "لحظة الغلق تتولد $\\text{emf}$ عكسية تعطل نمو التيار ولا يتعدى الجهد $6\\text{ V}$ فلا يضيء النيون. أما لحظة الفتح فيتلاشى التيار بسرعة فائقة في زمن بالغ الصغر لوجود الهواء العازل، فيكون معدل تغير التيار $\\frac{\\Delta I}{\\Delta t}$ هائلاً، مما يولد قوة دافعة مستحثة ذاتية طردية هائلة تتخطى $180\\text{ V}$ وتكفي لإضاءة مصباح النيون لحظياً وتأيين الهواء عند المفتاح محدثة شرارة."
    ],
    "teacherTipEn": "This famous experiment directly proves that forward self-induced EMF is vastly larger than reverse EMF.",
    "teacherTipAr": "تجربة مصباح النيون تثبت علمياً أن الـ $\\text{emf}$ الطردية أكبر بكثير من العكسية."
  },
  {
    "id": "phys_ch3_db_hots_09",
    "titleEn": "Initial Rate of Current Rise Upon Switch Closing in an RL Circuit",
    "titleAr": "المعدل الابتدائي لنمو التيار لحظة غلق الدائرة الحثية",
    "difficulty": "hots",
    "questionEn": "A coil of self-inductance $L = 0.2\\text{ H}$ and ohmic resistance $R = 10\\,\\Omega$ is connected to a DC battery of electromotive force $V_B = 12\\text{ V}$ (negligible internal resistance). At the exact instant of closing the switch ($t = 0$), the instantaneous rate of growth of electric current ($\\frac{dI}{dt}$) is:",
    "questionAr": "ملف معامل حثه الذاتي $L = 0.2\\text{ H}$ ومقاومته الأومية $R = 10\\,\\Omega$ اتصل ببطارية قوتها الدافعة $V_B = 12\\text{ V}$ مهملة المقاومة الداخلية. في اللحظة الأولى لغلق المفتاح تماماً ($t = 0$)، يكون المعدل اللحظي لنمو شدة التيار ($\\frac{dI}{dt}$) مساوياً:",
    "optionsEn": [
      "$60\\text{ A/s}$",
      "$0\\text{ A/s}$",
      "$1.2\\text{ A/s}$",
      "$120\\text{ A/s}$"
    ],
    "optionsAr": [
      "$60\\text{ A/s}$",
      "$0\\text{ A/s}$",
      "$1.2\\text{ A/s}$",
      "$120\\text{ A/s}$"
    ],
    "correctAnswer": "$60\\text{ A/s}$",
    "correctIndex": 0,
    "hintEn": "At $t = 0$, current $I = 0$, so $I R = 0$. Hence, reverse EMF must balance entire battery voltage: $L \\frac{dI}{dt} = V_B$.",
    "hintAr": "لحظة الغلق $I = 0$ ويكون الهبوط في الجهد $I R = 0$، فتتساوى $\\text{emf}$ العكسية مع جهد البطارية تماماً: $L \\frac{dI}{dt} = V_B$.",
    "stepByStepSolutionEn": [
      "By Kirchhoff's loop rule: $V_B - L \\frac{dI}{dt} = I R$. At the instant of switch closure ($t = 0$), the current has not started flowing yet ($I = 0$), so $I R = 0$. Therefore, $L \\left(\\frac{dI}{dt}\\right)_{t=0} = V_B \\implies \\left(\\frac{dI}{dt}\\right)_{t=0} = \\frac{V_B}{L} = \\frac{12\\text{ V}}{0.2\\text{ H}} = 60\\text{ A/s}$."
    ],
    "stepByStepSolutionAr": [
      "بتطبيق قانون كيرشوف: $V_B - L \\frac{dI}{dt} = I R$. لحظة الغلق تماماً تكون شدة التيار $I = 0$، وبالتالي يكون الهبوط الأومي $I R = 0$. فتكون القوة الدافعة المستحثة العكسية مساوية لجهد البطارية: $L \\frac{dI}{dt} = V_B$ ومنها $\\frac{dI}{dt} = \\frac{V_B}{L} = \\frac{12}{0.2} = 60\\text{ A/s}$."
    ],
    "teacherTipEn": "Notice: The initial rate of growth $\\left(\\frac{dI}{dt}\\right)_{t=0} = \\frac{V_B}{L}$ depends on $L$, NOT on the resistance $R$!",
    "teacherTipAr": "قاعدة هامة للمتميزين: المعدل الابتدائي لنمو التيار يعتمد على $L$ وجهد البطارية، ولا يعتمد إطلاقاً على المقاومة $R$!"
  },
  {
    "id": "phys_ch3_db_hots_10",
    "titleEn": "Rate of Current Rise When Current Reaches 80% of Maximum",
    "titleAr": "معدل نمو التيار عندما يصل إلى 80% من قيمته العظمى",
    "difficulty": "hots",
    "questionEn": "In the previous circuit ($V_B = 12\\text{ V}$, $L = 0.2\\text{ H}$, $R = 10\\,\\Omega$), when the electric current reaches $80\\%$ of its steady maximum value ($I = 0.8 I_{\\max}$), the instantaneous rate of current change ($\\frac{dI}{dt}$) is:",
    "questionAr": "في الدائرة السابقة ($V_B = 12\\text{ V}$، $L = 0.2\\text{ H}$، $R = 10\\,\\Omega$)، عندما تصل شدة التيار إلى $80\\%$ من قيمتها العظمى الثابتة، فإن المعدل الزمني اللحظي لنمو التيار ($\\frac{dI}{dt}$) يصبح:",
    "optionsEn": [
      "$48\\text{ A/s}$",
      "$12\\text{ A/s}$",
      "$60\\text{ A/s}$",
      "$0\\text{ A/s}$"
    ],
    "optionsAr": [
      "$48\\text{ A/s}$",
      "$12\\text{ A/s}$",
      "$60\\text{ A/s}$",
      "$0\\text{ A/s}$"
    ],
    "correctAnswer": "$12\\text{ A/s}$",
    "correctIndex": 1,
    "hintEn": "When $I = 0.8 I_{\\max}$, the ohmic drop is $0.8 V_B$, leaving $0.2 V_B$ for the inductor: $L \\frac{dI}{dt} = 0.2 V_B$.",
    "hintAr": "عندما يصل التيار لـ $80\\%$، يستهلك $IR$ نسبة $80\\%$ من الجهد، ويتبقى للحث الذاتي $20\\%$ فقط من جهد البطارية.",
    "stepByStepSolutionEn": [
      "Maximum steady current is $I_{\\max} = \\frac{V_B}{R} = \\frac{12}{10} = 1.2\\text{ A}$. When $I = 0.8 \\times 1.2 = 0.96\\text{ A}$, the voltage drop across the resistor is $I R = 0.96 \\times 10 = 9.6\\text{ V}$. From $V_B - L \\frac{dI}{dt} = I R$, we have $L \\frac{dI}{dt} = 12 - 9.6 = 2.4\\text{ V}$. Therefore, $\\frac{dI}{dt} = \\frac{2.4\\text{ V}}{0.2\\text{ H}} = 12\\text{ A/s}$ (which is exactly $20\\%$ of the initial $60\\text{ A/s}$)."
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى للتيار $I_{\\max} = \\frac{12}{10} = 1.2\\text{ A}$. عندما يصل التيار لـ $0.96\\text{ A}$، يكون الهبوط عبر المقاومة $9.6\\text{ V}$. يتبقى لفرق الجهد عبر ملف الحث: $12 - 9.6 = 2.4\\text{ V}$. وعليه يكون معدل نمو التيار: $\\frac{dI}{dt} = \\frac{2.4}{0.2} = 12\\text{ A/s}$ (وهو ما يمثل $20\\%$ من المعدل الابتدائي)."
    ],
    "teacherTipEn": "Shortcut: If current reaches $x\\%$, rate of change is $(100 - x)\\%$ of the initial rate!",
    "teacherTipAr": "طريقة سريعة: إذا وصل التيار إلى $x\\%$، فإن معدل النمو يساوي $(100 - x)\\%$ من المعدل الابتدائي!"
  },
  {
    "id": "phys_ch3_db_hots_11",
    "titleEn": "Why Commutator Replaces Slip Rings Without Altering Internal Coil AC",
    "titleAr": "طبيعة التيار داخل ملف الدينامو عند استخدام المقوم",
    "difficulty": "hots",
    "questionEn": "When an AC dynamo is converted to a DC generator by replacing the two slip rings with a split-ring commutator, the electric current flowing INSIDE the rotating coil itself is:",
    "questionAr": "عند تحويل دينامو التيار المتردد إلى مولد تيار موحد الاتجاه باستبدال حلقتي الانزلاق بمقوم أسطواني مشقوق، فإن التيار المار داخل سلك الملف نفسه أثناء الدوران يكون:",
    "optionsEn": [
      "Unidirectional direct current (DC) flowing steadily in one direction",
      "Completely zero",
      "Alternating current (AC) whose direction alternates every half cycle",
      "High-frequency radio waves"
    ],
    "optionsAr": [
      "تياراً مستمراً موحد الاتجاه يسري في مسار واحد ثابت داخل الملف",
      "صفراً منعدماً",
      "تياراً متردداً ينعكس اتجاهه كل نصف دورة داخل الملف",
      "موجات راديوية عالية التردد"
    ],
    "correctAnswer": "Alternating current (AC) whose direction alternates every half cycle",
    "correctIndex": 2,
    "hintEn": "Induction inside the coil depends only on cutting flux lines back and forth.",
    "hintAr": "تولد التيار داخل الملف محكوم بحركة أضلاعه أمام القطبين، فتنعكس القوة الدافعة كل نصف دورة حتماً.",
    "stepByStepSolutionEn": [
      "As the coil rotates between North and South poles, each longitudinal side cuts magnetic flux lines in opposite directions every half revolution. Therefore, the induced EMF and current inside the coil windings are ALWAYS alternating (AC). The split-ring commutator acts only as an external mechanical rectifier at the brushes."
    ],
    "stepByStepSolutionAr": [
      "أثناء دوران الملف يتبادل كل ضلع موضعه أمام القطبين الشمالي والجنوبي، فينعكس اتجاه قطع خطوط الفيض كل نصف دورة، مما يجعل القوة الدافعة والتيار المتولد داخل أسلاك الملف تياراً متردداً دائماً وأبداً. وتقتصر وظيفة المقوم المعدني على تقويم اتجاه التيار في الدائرة الخارجية فقط عبر تبادل التلامس مع الفرشتين."
    ],
    "teacherTipEn": "Fundamental conceptual fact: Current inside the dynamo armature is ALWAYS AC!",
    "teacherTipAr": "حقيقة علمية جوهرية: التيار داخل ملف أي دينامو هو تيار متردد دائماً!"
  },
  {
    "id": "phys_ch3_db_hots_12",
    "titleEn": "Why a Jammed Motor Armature Overheats and Burns Out",
    "titleAr": "سبب احتراق ملف المحرك الكهربي عند توقفه عن الدوران قسراً",
    "difficulty": "hots",
    "questionEn": "If the armature of an operating electric motor is mechanically jammed (prevented from rotating while remaining connected to the power source), the coil quickly overheats and burns out because:",
    "questionAr": "إذا توقف ملف المحرك الكهربي عن الدوران قسراً نتيجة عائق ميكانيكي أثناء اتصاله بالمصدر، فإن ملفه يسخن بسرعة كبيرة ويحترق بسبب:",
    "optionsEn": [
      "The magnetic field of the permanent magnet collapses completely",
      "The split-ring commutator short-circuits the battery terminals directly",
      "The coil turns fuse together by mutual inductance",
      "The back-EMF drops to zero ($\\text{emf}_{\\text{back}} = 0$), causing a massive current surge ($I = V_B / R$) that dissipates intense Joule heating ($I^2 R$)"
    ],
    "optionsAr": [
      "تلاشي المجال المغناطيسي للمغناطيس تماماً",
      "حدوث قفلة كهربية في المقوم",
      "التصاق لفات الملف بسبب الحث المتبادل",
      "انعدام القوة الدافعة الكهربية العكسية تماماً فتمر شدة تيار هائلة ($I = V_B / R$) تولد طاقة حرارية بالغة ($I^2 R$)"
    ],
    "correctAnswer": "The back-EMF drops to zero ($\\text{emf}_{\\text{back}} = 0$), causing a massive current surge ($I = V_B / R$) that dissipates intense Joule heating ($I^2 R$)",
    "correctIndex": 3,
    "hintEn": "Back-EMF is generated by motion: $\\text{emf}_{\\text{back}} \\propto \\omega$. If $\\omega = 0$, back-EMF vanishes.",
    "hintAr": "القوة الدافعة العكسية تنشأ من حركة الملف قاطعاً الفيض. وإذا انعدمت السرعة ($\\omega = 0$) تلاشت الـ $\\text{emf}$ العكسية تماماً.",
    "stepByStepSolutionEn": [
      "During normal operation, the back-EMF induced by rotation opposes the battery voltage, limiting the operating current to a safe small value: $I = \\frac{V_B - \\text{emf}_{\\text{back}}}{R}$. If the rotor is halted, $\\omega = 0 \\implies \\text{emf}_{\\text{back}} = 0$. The current surges to $I = \\frac{V_B}{R}$. Since coil resistance $R$ is very small, this gigantic current produces destructive $I^2 R$ heat, melting insulation and burning the windings."
    ],
    "stepByStepSolutionAr": [
      "أثناء الدوران الطبيعي تتولد $\\text{emf}$ عكسية تعاكس جهد المصدر وتجعل تيار التشغيل آمناً وصغيراً: $I = \\frac{V_B - \\text{emf}_{\\text{عكسية}}}{R}$. فإذا توقف المحرك عن الدوران تنعدم $\\text{emf}$ العكسية فوراً ويمر تيار هائل $I = \\frac{V_B}{R}$. ونظراً لصغر المقاومة الأومية للملف $R$، تتولد طاقة حرارية هائلة ($I^2 R$) تؤدي إلى انصهار المادة العازلة واحتراق الملف."
    ],
    "teacherTipEn": "Back-EMF acts as a dynamic internal resistance that protects the motor.",
    "teacherTipAr": "القوة الدافعة العكسية هي خط الدفاع الذي يحمي المحرك من الاحتراق أثناء تشغيله."
  },
  {
    "id": "phys_ch3_db_hots_13",
    "titleEn": "Effect of Increasing Mechanical Load on Motor Speed and Current",
    "titleAr": "أثر زيادة الحمل الميكانيكي على سرعة وتيار المحرك",
    "difficulty": "hots",
    "questionEn": "When a heavier mechanical load is applied to an electric motor spinning at full speed, what sequence of physical events restores equilibrium?",
    "questionAr": "عند زيادة الحمل الميكانيكي على محرك كهربي يدور بسرعة التشغيل، ما هو التسلسل الفيزيائي للأحداث حتى يعود للاتزان؟",
    "optionsEn": [
      "Motor speed decreases slightly $\\implies$ back-EMF decreases $\\implies$ armature current increases $\\implies$ magnetic torque increases to balance the heavier load",
      "Motor speed increases $\\implies$ back-EMF increases $\\implies$ current drops to zero",
      "Current remains constant while battery voltage automatically increases",
      "Commutator halves reverse their polarity twice as fast"
    ],
    "optionsAr": [
      "تقل سرعة دوران الملف قليلاً $\\implies$ فتقل القوة الدافعة العكسية $\\implies$ فيزداد تيار الملف $\\implies$ فيزداد عزم الازدواج ليتزن مع الحمل الجديد",
      "تزداد سرعة الدوران $\\implies$ فتزداد العكسية $\\implies$ فينعدم التيار",
      "يظل التيار ثابتاً بينما يتضاعف جهد البطارية تلقائياً",
      "تنعكس قطبية نصفي الأسطوانة بضعف السرعة"
    ],
    "correctAnswer": "Motor speed decreases slightly $\\implies$ back-EMF decreases $\\implies$ armature current increases $\\implies$ magnetic torque increases to balance the heavier load",
    "correctIndex": 0,
    "hintEn": "Analyze the feedback loop: $I = \\frac{V_B - \\text{emf}_{\\text{back}}}{R}$ and $\\tau = B I A N$.",
    "hintAr": "تتبع حلقة التغذية الراجعة: نقص السرعة يقلل العكسية، فينقص المقام ويزداد التيار والعزم.",
    "stepByStepSolutionEn": [
      "When mechanical load increases, the resistive torque slows the motor slightly ($\\omega$ drops). Since $\\text{emf}_{\\text{back}} \\propto \\omega$, back-EMF decreases. This increases net voltage $(V_B - \\text{emf}_{\\text{back}})$, allowing more current $I$ to enter the armature. The larger current raises the magnetic torque ($\\tau = B I A N$) until it exactly matches the new mechanical load, stabilizing the motor at a new constant speed."
    ],
    "stepByStepSolutionAr": [
      "عند زيادة الحمل يعيق حركة الملف فتقل سرعة دورانه قليلاً، ونظراً لأن $\\text{emf}_{\\text{عكسية}}$ تتناسب مع سرعة الدوران فإنها تقل، فيزداد فرق الجهد المحصل ($V_B - \\text{emf}$) ويزداد تيار الملف $I$. وتؤدي زيادة التيار إلى زيادة عزم الازدواج المغناطيسي ($\\tau = B I A N$) حتى يتساوى مع عزم الحمل المقاوم، فتنتظم سرعة الدوران من جديد."
    ],
    "teacherTipEn": "This self-regulating feedback mechanism is the hallmark of DC motors.",
    "teacherTipAr": "هذه الآلية التنظيمية الذاتية هي سر ثبات وانتظام سرعة المحركات الكهربية."
  },
  {
    "id": "phys_ch3_db_hots_14",
    "titleEn": "What Happens If Motor Commutator is Replaced with Continuous Slip Rings",
    "titleAr": "استبدال مقوم المحرك بحلقتي انزلاق مستمرتين",
    "difficulty": "hots",
    "questionEn": "If the split-ring commutator in a DC electric motor is replaced with two continuous slip rings connected to a DC source, the motor coil will:",
    "questionAr": "إذا استُبدلت الأسطوانة المشقوقة في محرك تيار مستمر بحلقتي انزلاق متصلتين بمصدر تيار مستمر، فإن ملف المحرك:",
    "optionsEn": [
      "Rotate twice as fast in a single continuous direction",
      "Oscillate back and forth around the perpendicular position and fail to rotate continuously",
      "Rotate continuously in the reverse direction",
      "Burn out immediately without any motion at all"
    ],
    "optionsAr": [
      "يدور بسرعة مضاعفة في نفس الاتجاه المستمر",
      "يتذبذب ذهاباً وإياباً حول الوضع العمودي ويعجز عن إكمال دورة كاملة",
      "يدور باستمرار في الاتجاه المعاكس",
      "يحترق فوراً دون أن يتحرك إطلاقاً"
    ],
    "correctAnswer": "Oscillate back and forth around the perpendicular position and fail to rotate continuously",
    "correctIndex": 1,
    "hintEn": "Without a commutator, current direction in the coil does not reverse every half turn.",
    "hintAr": "بدون مقوم، لا ينعكس اتجاه التيار داخل الملف عند مرور الملف بالوضع العمودي.",
    "stepByStepSolutionEn": [
      "A DC battery sends current in one fixed direction through the slip rings into the coil. During the first half cycle, torque rotates the coil toward the perpendicular plane. Past the perpendicular plane, because current direction did not reverse, the magnetic torque opposes the motion, pushing the coil backward. The coil simply oscillates like a galvanometer needle without continuous rotation."
    ],
    "stepByStepSolutionAr": [
      "تضخ بطارية التيار المستمر تياراً في اتجاه ثابت عبر الحلقتين. في نصف الدورة الأول يدور الملف حتى الوضع العمودي، وعند تجاوزه يعكس عزم الازدواج اتجاه تأثيره على الأضلاع لأن اتجاه التيار لم ينعكس، فيفرمل الملف ويدفعه للخلف. ونتيجة لذلك يتذبذب الملف يمنة ويسرة حول الوضع العمودي ولا يكمل دورة واحدة كاملة."
    ],
    "teacherTipEn": "Continuous rotation in a DC motor absolutely requires a split-ring commutator.",
    "teacherTipAr": "الدوران المستمر في محرك التيار المستمر يتطلب حتماً وجود المقوم المعدني المشقوق."
  },
  {
    "id": "phys_ch3_db_hots_15",
    "titleEn": "Faraday Induction in a Loop Rotating Around an Axis Parallel to Field",
    "titleAr": "دوران ملف حول محور موازٍ لخطوط المجال",
    "difficulty": "hots",
    "questionEn": "A circular wire loop is rotated in a uniform magnetic field about an axis that lies in the plane of the loop and is PARALLEL to the magnetic field lines. The induced electromotive force in the loop is:",
    "questionAr": "ملف دائري يدور في مجال مغناطيسي منتظم حول محور يقع في مستوى الملف وموازٍ لخطوط المجال المغناطيسي. فإن القوة الدافعة المستحثة في الملف:",
    "optionsEn": [
      "Maximum when the loop is horizontal",
      "Sinusoidal with frequency $2f$",
      "Zero at all times, because the magnetic flux linking the loop is permanently zero ($\\Phi_m = 0$ throughout)",
      "Directly proportional to the angular velocity squared"
    ],
    "optionsAr": [
      "تكون نهاية عظمى عندما يكون مستوى الملف أفقياً",
      "تتغير جيبياً بتردد $2f$",
      "تنعدم في جميع الأوقات، لأن الفيض المغناطيسي المخترق للملف يظل صفراً طوال فترة الدوران ($\\Phi_m = 0$ دائماً)",
      "تتناسب طردياً مع مربع السرعة الزاوية"
    ],
    "correctAnswer": "Zero at all times, because the magnetic flux linking the loop is permanently zero ($\\Phi_m = 0$ throughout)",
    "correctIndex": 2,
    "hintEn": "Does the plane of the loop ever capture flux lines when rotating around an axis parallel to the field?",
    "hintAr": "هل تقطع خطوط الفيض مساحة الملف عندما يدور حول محور موازٍ لخطوط المجال؟",
    "stepByStepSolutionEn": [
      "Because the rotation axis is parallel to the magnetic field lines, the plane of the loop always remains parallel to the field lines throughout the entire $360^\\circ$ rotation. At every instant, the normal to the coil is perpendicular to the field lines, meaning the magnetic flux is always zero ($\\Phi_m(t) = 0$). Since there is no flux change ($\\Delta\\Phi_m = 0$), $\\text{emf} = 0$."
    ],
    "stepByStepSolutionAr": [
      "بما أن محور الدوران موازٍ لخطوط المجال، فإن مستوى الملف يظل موازياً لخطوط المجال في جميع لحظات دورانه، ولا تخترق خطوط الفيض وجه الملف مطلقاً ($\\Phi_m = 0$ طوال الدوران). وبما أن التغير في الفيض منعدم دائماً ($\\frac{\\Delta\\Phi}{\\Delta t} = 0$)، فإن القوة الدافعة المستحثة تظل صفراً طوال الوقت."
    ],
    "teacherTipEn": "To generate EMF, the rotation axis must be perpendicular to the magnetic field lines.",
    "teacherTipAr": "لتوليد قوة دافعة، يجب أن يكون محور الدوران عمودياً على خطوط المجال."
  },
  {
    "id": "phys_ch3_db_hots_16",
    "titleEn": "Phase Difference Between Primary and Secondary Voltages in Ideal Transformer",
    "titleAr": "فرق الطور بين جهدي الابتدائي والثانوي في المحول المثالي",
    "difficulty": "hots",
    "questionEn": "In an ideal electric transformer operating on alternating current, the phase difference between the primary alternating voltage ($V_p$) and the secondary induced electromotive force ($V_s$) across identical winding directions is:",
    "questionAr": "في المحول الكهربي المثالي، فرق الطور بين الجهد المتردد المطبق على الملف الابتدائي ($V_p$) والقوة الدافعة المستحثة المتولدة في الملف الثانوي ($V_s$) عند التوصيل بنفس اتجاه اللف هو:",
    "optionsEn": [
      "$0^\\circ$ (strictly in phase)",
      "$90^\\circ$ ($\\pi/2\\text{ radians}$)",
      "$45^\\circ$",
      "$180^\\circ$ ($\\pi\\text{ radians}$), reflecting Lenz's law opposition"
    ],
    "optionsAr": [
      "$0^\\circ$ (متفقان في الطور تماماً)",
      "$90^\\circ$ ($\\pi/2\\text{ راديان}$)",
      "$45^\\circ$",
      "$180^\\circ$ ($\\pi\\text{ راديان}$)، تعبيراً عن معاكسة قاعدة لنز"
    ],
    "correctAnswer": "$180^\\circ$ ($\\pi\\text{ radians}$), reflecting Lenz's law opposition",
    "correctIndex": 3,
    "hintEn": "Lenz's law requires induced voltage to oppose the driving voltage change.",
    "hintAr": "تقتضي قاعدة لنز أن يعاكس الجهد المستحث في الثانوي التغير المسبب له في الابتدائي.",
    "stepByStepSolutionEn": [
      "By Faraday's and Lenz's laws, $V_s = -N_s \\frac{d\\Phi_m}{dt}$. The negative sign dictates that the secondary induced voltage is $180^\\circ$ out of phase with the primary induced voltage across similarly referenced terminals, manifesting the fundamental energy conservation requirement of Lenz's law."
    ],
    "stepByStepSolutionAr": [
      "وفقاً لقانون فاراداي وقاعدة لنز: $V_s = -N_s \\frac{d\\Phi}{dt}$. تدل الإشارة السالبة على أن القوة الدافعة المستحثة في الملف الثانوي تكون معاكسة في الاتجاه لجهد المصدر الابتدائي (فرق طور $180^\\circ$) لتقاوم التغير في الفيض المسبب لها تحقيقاً لقانون بقاء الطاقة."
    ],
    "teacherTipEn": "Phase opposition ($180^\\circ$) is a direct consequence of Lenz's negative sign.",
    "teacherTipAr": "تضاد الطور ($180^\\circ$) ناتج مباشر عن الإشارة السالبة لقاعدة لنز."
  },
  {
    "id": "phys_ch3_db_hots_17",
    "titleEn": "Impedance Transformation Across an Ideal Transformer",
    "titleAr": "تحويل المقاومة (المعاوقة) عبر المحول الكهربي",
    "difficulty": "hots",
    "questionEn": "An ideal transformer has a turns ratio $\\frac{N_p}{N_s} = 10$. If a load resistance $R_s = 4\\,\\Omega$ is connected across the secondary coil, the effective resistance ($R_p = \\frac{V_p}{I_p}$) seen by the primary AC source is:",
    "questionAr": "محول كهربي مثالي النسبة بين عدد لفات ملفيه $\\frac{N_p}{N_s} = 10$. إذا وُصلت مقاومة حمل $R_s = 4\\,\\Omega$ بين طرفي ملفه الثانوي، فإن المقاومة المكافئة ($R_p = \\frac{V_p}{I_p}$) التي يراها مصدر الملف الابتدائي تساوي:",
    "optionsEn": [
      "$400\\,\\Omega$",
      "$40\\,\\Omega$",
      "$0.04\\,\\Omega$",
      "$4\\,\\Omega$"
    ],
    "optionsAr": [
      "$400\\,\\Omega$",
      "$40\\,\\Omega$",
      "$0.04\\,\\Omega$",
      "$4\\,\\Omega$"
    ],
    "correctAnswer": "$400\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_p = R_s \\left(\\frac{N_p}{N_s}\\right)^2$.",
    "hintAr": "المقاومة المنقولة للابتدائي تتناسب مع مربع نسبة اللفات: $R_p = R_s \\left(\\frac{N_p}{N_s}\\right)^2$.",
    "stepByStepSolutionEn": [
      "From $\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$ and $\\frac{I_p}{I_s} = \\frac{N_s}{N_p}$, dividing the two equations gives: $R_p = \\frac{V_p}{I_p} = \\frac{V_s (N_p / N_s)}{I_s (N_s / N_p)} = \\left(\\frac{V_s}{I_s}\\right) \\left(\\frac{N_p}{N_s}\\right)^2 = R_s \\left(\\frac{N_p}{N_s}\\right)^2$. Therefore, $R_p = 4 \\times (10)^2 = 4 \\times 100 = 400\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بقسمة علاقة الجهد $\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$ على علاقة التيار $\\frac{I_p}{I_s} = \\frac{N_s}{N_p}$، نجد أن: $\\frac{V_p / I_p}{V_s / I_s} = \\left(\\frac{N_p}{N_s}\\right)^2 \\implies R_p = R_s \\left(\\frac{N_p}{N_s}\\right)^2$. بالتعويض: $R_p = 4 \\times (10)^2 = 400\\,\\Omega$."
    ],
    "teacherTipEn": "This impedance matching principle is why transformers are used in audio amplifiers and transmission grids.",
    "teacherTipAr": "خاصية مواءمة المقاومة تجعل المحول أداة أساسية لنقل القدرة القصوى في مكبرات الصوت وشبكات النقل."
  },
  {
    "id": "phys_ch3_db_hots_18",
    "titleEn": "Average EMF of Dynamo Between 30 Degrees and 150 Degrees",
    "titleAr": "متوسط القوة الدافعة لدينامو بين زاويتي 30 و 150 درجة",
    "difficulty": "hots",
    "questionEn": "An AC dynamo produces a maximum electromotive force $\\text{emf}_{\\max} = 100\\text{ V}$. What is the average induced EMF during the rotation of the coil from $\\theta = 30^\\circ$ to $\\theta = 150^\\circ$ (relative to the neutral perpendicular position)?",
    "questionAr": "دينامو تيار متردد قيمته العظمى $\\text{emf}_{\\max} = 100\\text{ V}$. ما هو متوسط القوة الدافعة المستحثة أثناء دوران الملف من زاوية $\\theta = 30^\\circ$ إلى $\\theta = 150^\\circ$ (مقاسة من الوضع العمودي)؟",
    "optionsEn": [
      "$0\\text{ V}$",
      "$\\frac{3\\sqrt{3}}{2\\pi}\\text{emf}_{\\max} \\approx 82.70\\text{ V}$",
      "$50\\text{ V}$",
      "$\\frac{2}{\\pi}\\text{emf}_{\\max} \\approx 63.66\\text{ V}$"
    ],
    "optionsAr": [
      "$0\\text{ V}$",
      "$\\frac{3\\sqrt{3}}{2\\pi}\\text{emf}_{\\max} \\approx 82.70\\text{ V}$",
      "$50\\text{ V}$",
      "$\\frac{2}{\\pi}\\text{emf}_{\\max} \\approx 63.66\\text{ V}$"
    ],
    "correctAnswer": "$\\frac{3\\sqrt{3}}{2\\pi}\\text{emf}_{\\max} \\approx 82.70\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "$\\Phi_{m1} = BA \\cos 30^\\circ = \\frac{\\sqrt{3}}{2} BA$, $\\Phi_{m2} = BA \\cos 150^\\circ = -\\frac{\\sqrt{3}}{2} BA$. $\\Delta\\theta = 120^\\circ \\implies \\Delta t = \\frac{T}{3} = \\frac{1}{3f}$.",
    "hintAr": "$\\Phi_{m1} = \\frac{\\sqrt{3}}{2} BA$ و $\\Phi_{m2} = -\\frac{\\sqrt{3}}{2} BA$، وزمن الدوران $\\Delta t = \\frac{120}{360} T = \\frac{1}{3f}$.",
    "stepByStepSolutionEn": [
      "$\\Delta\\Phi_m = -\\frac{\\sqrt{3}}{2} BA - \\frac{\\sqrt{3}}{2} BA = -\\sqrt{3} BA$. Time interval: $\\Delta t = \\frac{120^\\circ}{360^\\circ f} = \\frac{1}{3f}$. By Faraday's law: $\\text{emf}_{\\text{avg}} = N \\frac{\\sqrt{3} BA}{1/(3f)} = 3\\sqrt{3} NBAf$. Since $\\text{emf}_{\\max} = 2\\pi NBAf$, we have $\\text{emf}_{\\text{avg}} = \\frac{3\\sqrt{3}}{2\\pi} \\text{emf}_{\\max} = \\frac{3 \\times 1.732}{6.283} \\times 100 \\approx 82.70\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "التغير في الفيض: $\\Delta\\Phi = -\\sqrt{3} BA$، والزمن $\\Delta t = \\frac{1}{3f}$. بالتعويض في قانون فاراداي: $\\text{emf}_{\\text{avg}} = 3\\sqrt{3} NBAf = \\frac{3\\sqrt{3}}{2\\pi}\\text{emf}_{\\max} \\approx 82.70\\text{ V}$."
    ],
    "teacherTipEn": "A rigorous high-level calculation testing precise application of Faraday's law.",
    "teacherTipAr": "مسألة حسابية رفيعة المستوى تقيس الفهم العميق لقانون فاراداي."
  },
  {
    "id": "phys_ch3_db_hots_19",
    "titleEn": "Induced Current in a Closed Loop Moving in a Non-Uniform Magnetic Field",
    "titleAr": "حركة حلقة في مجال مغناطيسي غير منتظم",
    "difficulty": "hots",
    "questionEn": "A square wire loop moves at a constant horizontal velocity $v$ inside a magnetic field that is perpendicular to the loop plane but whose flux density INCREASES uniformly in the direction of motion ($B = k x$, where $k$ is a positive constant). The induced current in the loop is:",
    "questionAr": "تتحرك حلقة مربعة طول ضلعها $L$ بسرعة أفقية منتظمة $v$ داخل مجال مغناطيسي عمودي على مستواها ولكنه غير منتظم وتزداد كثافة فيضه بانتظام في اتجاه الحركة ($B = k x$ حيث $k$ ثابت موجب). فإن التيار المستحث في الحلقة يكون:",
    "optionsEn": [
      "Zero, because the loop velocity is constant",
      "Continuously increasing exponentially",
      "Constant and non-zero, with a direction opposing the increase in flux",
      "Alternating periodically every millisecond"
    ],
    "optionsAr": [
      "صفراً لأن سرعة حركة الحلقة منتظمة",
      "متزايداً بشكل أسي مستمر",
      "ثابتاً وغير منعدم، ويكون اتجاهه بحيث يولد فيضاً يعاكس زيادة الفيض",
      "متردداً في كل مللي ثانية"
    ],
    "correctAnswer": "Constant and non-zero, with a direction opposing the increase in flux",
    "correctIndex": 2,
    "hintEn": "$\\Phi_m = B_{\\text{avg}} A = (k x) L^2$. Then $\\frac{d\\Phi_m}{dt} = k L^2 \\frac{dx}{dt} = k L^2 v = \\text{const}$.",
    "hintAr": "الفيض يزداد بمعدل ثابت لأن $\\frac{dB}{dt} = k \\frac{dx}{dt} = k v$ ثابت.",
    "stepByStepSolutionEn": [
      "As the loop advances by distance $dx = v dt$, the magnetic field entering the front edge is stronger than that leaving the rear edge by $dB = k L$. The rate of change of magnetic flux through the loop is $\\frac{d\\Phi_m}{dt} = L^2 \\frac{dB}{dt} = L^2 k \\frac{dx}{dt} = k L^2 v$. Because $k, L, v$ are all constant, $\\frac{d\\Phi_m}{dt}$ is constant, inducing a steady non-zero electromotive force and constant current."
    ],
    "stepByStepSolutionAr": [
      "أثناء تقدم الحلقة في اتجاه تزايد المجال، يزداد الفيض المخترق لمساحتها بمعدل زمني ثابت $\\frac{d\\Phi}{dt} = k L^2 v$ لأن السرعة منتظمة ومعدل تدرج المجال منتظم. وعليه تتولد قوة دافعة مستحثة ثابتة في المقدار وتيار مستحث ثابت يقاوم زيادة الفيض طبقاً لقاعدة لنز."
    ],
    "teacherTipEn": "Constant velocity in a non-uniform field produces constant non-zero induced EMF!",
    "teacherTipAr": "السرعة المنتظمة في مجال غير منتظم تولد قوة دافعة مستحثة ثابتة غير صفرية!"
  },
  {
    "id": "phys_ch3_db_hots_20",
    "titleEn": "Eddy Current Magnetic Braking",
    "titleAr": "الفرملة المغناطيسية بالتيارات الدوامية في القطارات فائقة السرعة",
    "difficulty": "hots",
    "questionEn": "Modern high-speed bullet trains (such as Maglev and TGV) employ electromagnetic eddy current brakes. A major physical advantage of these brakes over traditional mechanical friction brakes is that:",
    "questionAr": "تستخدم قطارات الرصاصة فائقة السرعة مكابح كهرومغناطيسية تعتمد على التيارات الدوامية. الميزة الفيزيائية الأساسية لهذه المكابح مقارنة بمكابح الاحتكاك الميكانيكية التقليدية هي:",
    "optionsEn": [
      "They require no electric power source under any conditions",
      "They work more effectively when the train is completely stopped at the station",
      "They cool the train tracks down to cryogenic temperatures",
      "They provide frictionless, smooth deceleration with zero mechanical wear, and the braking force naturally scales with speed ($F_{\\text{drag}} \\propto v$), preventing wheel locking"
    ],
    "optionsAr": [
      "لا تحتاج إلى أي مصدر كهربي لتشغيلها تحت أي ظرف",
      "تكون أكثر فاعلية عندما يكون القطار متوقفاً تماماً في المحطة",
      "تبرد قضبان السكك الحديدية إلى درجات حرارة فائقة الانخفاض",
      "توفر فرملة ناعمة بدون احتكاك ميكانيكي وبلا تآكل، وتتناسب قوة الفرملة طردياً مع السرعة ($F \\propto v$) مما يمنع انغلاق العجلات"
    ],
    "correctAnswer": "They provide frictionless, smooth deceleration with zero mechanical wear, and the braking force naturally scales with speed ($F_{\\text{drag}} \\propto v$), preventing wheel locking",
    "correctIndex": 3,
    "hintEn": "Induced eddy currents exert a retarding magnetic force $F \\propto v$. At $v = 0$, $F = 0$.",
    "hintAr": "التيارات الدوامية تولد قوة فرملة مغناطيسية تتناسب طردياً مع السرعة، وتنعدم عند توقف القطار.",
    "stepByStepSolutionEn": [
      "When electromagnets above the rails are energized, the moving metal rails experience rapid magnetic flux changes, inducing intense eddy currents. By Lenz's law, these currents create opposing magnetic forces proportional to velocity ($F \\propto v$). There is no physical contact (no pad wear), and as the train slows down, the braking force gently diminishes, ensuring an exceptionally smooth stop."
    ],
    "stepByStepSolutionAr": [
      "عند تشغيل المغناطيسات، تتعرض قضبان السكة الحديدية المعدنية لتغير سريع في الفيض أثناء مرور القطار، فتتولد فيها تيارات دوامية هائلة. وحسب قاعدة لنز تؤثر هذه التيارات بقوة مغناطيسية معاكسة لحركة القطار تتناسب مع سرعته. لا يوجد تلامس ميكانيكي (لا تآكل)، ومع تباطؤ القطار تهدأ قوة الفرملة تلقائياً لتضمن توقفاً فائق النعومة والأمان."
    ],
    "teacherTipEn": "Notice: Eddy current brakes cannot lock wheels or hold a stopped train stationary because at $v = 0$, braking force is zero.",
    "teacherTipAr": "تطبيق هندسي: مكابح التيارات الدوامية لا تثبت القطار الساكن لأن القوة تنعدم عند ثبوت السرعة عند الصفر."
  },
  {
    "id": "phys_ch3_db_hots_21",
    "titleEn": "Faraday Cage vs Magnetic Shielding",
    "titleAr": "الحماية من المجالات المغناطيسية باستخدام الحديد المطاوع",
    "difficulty": "hots",
    "questionEn": "To shield delicate electronic instruments from stray external time-varying magnetic fields, they are enclosed inside a box made of:",
    "questionAr": "لحماية الأجهزة الإلكترونية الحساسة من المجالات المغناطيسية الخارجية المتغيرة، يتم وضعها داخل صندوق مصنوع من:",
    "optionsEn": [
      "Thick soft iron, because its high magnetic permeability channels magnetic flux lines through the walls around the interior space",
      "Pure plastic, because plastic repels magnetic field lines",
      "Thin wood sheets",
      "Permanent magnet alloy like Alnico"
    ],
    "optionsAr": [
      "الحديد المطاوع السميك، لأن نفاذيته المغناطيسية العالية تجمع وتركز خطوط الفيض داخل جدرانه وتبعدها عن التجويف الداخلي",
      "البلاستيك النقي لأن البلاستيك يطرد خطوط المجال",
      "ألواح رقيقة من الخشب",
      "سبيكة مغناطيسية دائمة مثل الألنيكو"
    ],
    "correctAnswer": "Thick soft iron, because its high magnetic permeability channels magnetic flux lines through the walls around the interior space",
    "correctIndex": 0,
    "hintEn": "Magnetic lines take the path of least reluctance (highest permeability $\\mu$).",
    "hintAr": "خطوط الفيض تسلك المسار الأسهل مغناطيسياً (الوسط ذو النفاذية المغناطيسية الأعلى).",
    "stepByStepSolutionEn": [
      "Soft iron has very high magnetic permeability ($\\mu_{\\text{iron}} \\gg \\mu_{\\text{air}}$). Magnetic field lines crowd into the iron walls instead of passing through the air cavity inside the box, effectively shielding the enclosed instruments from the magnetic field."
    ],
    "stepByStepSolutionAr": [
      "يتميز الحديد المطاوع بنفاذية مغناطيسية فائقة، مما يجعل خطوط الفيض المغناطيسي تسري وتتجمع بكثافة داخل جدران الصندوق الحديدي مفضلة إياه على الهواء داخل التجويف، فيحمي الأجهزة بالداخل من تأثير أي فيض مغناطيسي خارجي."
    ],
    "teacherTipEn": "Magnetic shielding relies on soft iron's extreme permeability.",
    "teacherTipAr": "الحجب المغناطيسي يعتمد على النفاذية العالية للحديد المطاوع."
  },
  {
    "id": "phys_ch3_db_hots_22",
    "titleEn": "Secondary Voltage of an Open-Circuit Transformer",
    "titleAr": "جهد الملف الثانوي المفتوح في محول كهربي",
    "difficulty": "hots",
    "questionEn": "A step-up transformer has $N_p = 100$ and $N_s = 1000$. An alternating voltage $V_p = 12\\text{ V}$ is applied to the primary. If the secondary circuit is completely open, the voltage across the secondary terminals is:",
    "questionAr": "محول كهربي رافع للجهد عدد لفات ملفه الابتدائي $N_p = 100$ والثانوي $N_s = 1000$. طُبّق جهد متردد $V_p = 12\\text{ V}$ على الابتدائي. إذا كانت دائرة الثانوي مفتوحة تماماً، فإن فرق الجهد بين طرفي الملف الثانوي يساوي:",
    "optionsEn": [
      "$0\\text{ V}$",
      "$120\\text{ V}$ (EMF is induced regardless of whether secondary is open or closed)",
      "$1.2\\text{ V}$",
      "Infinite volts"
    ],
    "optionsAr": [
      "$0\\text{ V}$",
      "$120\\text{ V}$ (تتولد القوة الدافعة في الثانوي سواء كانت دائرته مفتوحة أو مغلقة)",
      "$1.2\\text{ V}$",
      "جهداً لا نهائياً"
    ],
    "correctAnswer": "$120\\text{ V}$ (EMF is induced regardless of whether secondary is open or closed)",
    "correctIndex": 1,
    "hintEn": "Induced EMF depends on flux change $\\frac{d\\Phi_m}{dt}$, not on whether current can flow.",
    "hintAr": "تولد القوة الدافعة يعتمد على تغير الفيض في القلب، ولا يشترط مرور تيار في الثانوي لتوليد فرق جهد بين طرفيه.",
    "stepByStepSolutionEn": [
      "Faraday's law $\\text{emf}_s = -N_s \\frac{d\\Phi_m}{dt}$ is fully operative because the alternating flux produced by the primary passes through the secondary turns regardless of the external circuit. Thus, $V_s = V_p \\frac{N_s}{N_p} = 12 \\times \\frac{1000}{100} = 120\\text{ V}$. Current is zero because the circuit is open, but the electromotive force is $120\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لقانون فاراداي $\\text{emf}_s = -N_s \\frac{\\Delta\\Phi}{\\Delta t}$، يتولد فرق جهد بين طرفي الثانوي نتيجة تغير الفيض المغناطيسي المشترك في القلب. ولذا يكون $V_s = 12 \\times 10 = 120\\text{ V}$. ينعدم تيار الثانوي لفتح دائرته، لكن فرق الجهد يظل موجوداً بكامل قيمته."
    ],
    "teacherTipEn": "Crucial distinction: Voltage exists without current; current cannot exist without a closed circuit.",
    "teacherTipAr": "مفهوم فيزيائي أصيل: فرق الجهد يتولد دون الحاجة لدائرة مغلقة، بينما التيار يشترط غلق الدائرة."
  },
  {
    "id": "phys_ch3_db_hots_23",
    "titleEn": "Induction in a Superconducting Ring (Flux Pinning / Freezing)",
    "titleAr": "الحث الكهرومغناطيسي في حلقة فائقة التوصيل",
    "difficulty": "hots",
    "questionEn": "A circular ring made of a superconductor (zero electrical resistance, $R = 0$) is placed in a magnetic field. When the external magnetic field is changed, the induced electric current that circulates in the ring:",
    "questionAr": "حلقة دائرية مصنوعة من موصل فائق التوصيل (مقاومته الأومية صفر تماماً $R = 0$) وُضعت في مجال مغناطيسي. عند تغيير المجال المغناطيسي الخارجي، فإن التيار المستحث المتولد في الحلقة:",
    "optionsEn": [
      "Decays to zero within one millisecond",
      "Heats the superconductor up instantly above its critical temperature",
      "Flows indefinitely without decaying, maintaining the total magnetic flux through the ring strictly constant ($\\Phi_m = \\text{constant}$)",
      "Reverses direction spontaneously every microsecond"
    ],
    "optionsAr": [
      "يتلاشى إلى الصفر خلال مللي ثانية واحدة",
      "يسخن الحلقة فوراً فوق درجة الحرارة الحرجة",
      "يستمر في السريان إلى ما لا نهاية دون أي اضمحلال، محافظاً على ثبوت الفيض المغناطيسي الكلي المخترق للحلقة تماماً",
      "ينعكس اتجاهه تلقائياً كل ميكروثانية"
    ],
    "correctAnswer": "Flows indefinitely without decaying, maintaining the total magnetic flux through the ring strictly constant ($\\Phi_m = \\text{constant}$)",
    "correctIndex": 2,
    "hintEn": "Because $R = 0$, no energy is lost to Joule heat ($I^2 R = 0$).",
    "hintAr": "لانعدام المقاومة تماماً، لا يوجد أي فقد في الطاقة كحرارة فتستمر التيارات الدائمة.",
    "stepByStepSolutionEn": [
      "In a superconductor with $R = 0$, Faraday's law gives $\\text{emf} = I R = 0 \\implies \\frac{d\\Phi_{\\text{total}}}{dt} = 0$. This means that the total magnetic flux linking the superconducting loop is permanently frozen! Any change in external flux induces a persistent supercurrent that exactly cancels the external change, maintaining constant flux indefinitely."
    ],
    "stepByStepSolutionAr": [
      "في الموصلات فائقة التوصيل ($R = 0$)، يكون فرق الجهد $\\text{emf} = I R = 0$، مما يعني أن $\\frac{d\\Phi_{\\text{كلي}}}{dt} = 0$. أي أن الفيض المغناطيسي الكلي المحصور داخل الحلقة يظل ثابتاً إلى الأبد! يولد أي تغير خارجي تياراً مستحثاً دائماً يعاكس التغير بدقة تامة ويستمر دون أي استهلاك أو اضمحلال."
    ],
    "teacherTipEn": "Superconducting persistent currents are used in hospital MRI magnets.",
    "teacherTipAr": "تُستخدم التيارات الدائمة في الموصلات فائقة التوصيل في أجهزة الرنين المغناطيسي الطبية (MRI)."
  },
  {
    "id": "phys_ch3_db_hots_24",
    "titleEn": "Mutual Induction Coil Pair with Moving Diaphragm",
    "titleAr": "زوج من الملفات الحثية مع غشاء متحرك",
    "difficulty": "hots",
    "questionEn": "In an electromagnetic microphone or dynamic pickup, sound waves strike a lightweight diaphragm attached to a small coil positioned in the field of a permanent magnet. The scientific principle by which this converts speech into electrical signals is:",
    "questionAr": "في الميكروفون الديناميكي، تصطدم الموجات الصوتية بغشاء مرن خفيف متصل بملف صغير يتحرك داخل مجال مغناطيس دائم. الفكرة العلمية التي تحول الصوت إلى إشارات كهربية هي:",
    "optionsEn": [
      "The thermoelectric Seebeck effect",
      "Electrostatic friction charging",
      "Electrochemical oxidation at the voice coil terminals",
      "Electromagnetic induction: vibrational motion causes the coil to cut magnetic flux, inducing an alternating audio-frequency EMF"
    ],
    "optionsAr": [
      "تأثير سيبيك الكهروحراري",
      "الشحن بالاحتكاك الكهروستاتيكي",
      "الأكسدة الكهروكيميائية لأطراف الملف",
      "الحث الكهرومغناطيسي: حركة اهتزاز الملف تقطع خطوط الفيض فيتولد فيه جهد مستحث متردد بترددات الصوت"
    ],
    "correctAnswer": "Electromagnetic induction: vibrational motion causes the coil to cut magnetic flux, inducing an alternating audio-frequency EMF",
    "correctIndex": 3,
    "hintEn": "Kinetic energy of sound vibrations is converted into electrical EMF by induction.",
    "hintAr": "الطاقة الحركية للموجات الصوتية تتحول إلى إشارة كهربية مستحثة.",
    "stepByStepSolutionEn": [
      "Sound pressure waves vibrate the diaphragm back and forth, moving the attached coil across the permanent magnet's field. The rate of flux cutting $\\frac{d\\Phi_m}{dt}$ fluctuates in exact unison with the acoustic frequencies, generating an electrical EMF that mirrors the sound waveform."
    ],
    "stepByStepSolutionAr": [
      "تضغط الموجات الصوتية على الغشاء فيهتز حاملاً الملف داخل المجال المغناطيسي. يؤدي تذبذب حركة الملف إلى تغير مستمر في الفيض المغناطيسي المخترق له بمعدل يطابق ترددات الصوت، فتتولد قوة دافعة كهربية مستحثة متغيرة الشدة والاتجاه تمثل الإشارة الصوتية."
    ],
    "teacherTipEn": "Microphone is essentially an acoustic dynamo; Loudspeaker is essentially an acoustic motor.",
    "teacherTipAr": "الميكروفون دينامو صوتي؛ بينما السماعة محرك صوتي!"
  },
  {
    "id": "phys_ch3_db_hots_25",
    "titleEn": "Current Growth in a Toroid vs Long Solenoid",
    "titleAr": "مقارنة معامل الحث في حلقة مغلقة بملف مفتوح",
    "difficulty": "hots",
    "questionEn": "A coil wound on a closed circular ring (toroid) of soft iron has far greater self-inductance than an identical coil wound on a straight open iron rod of the same length and cross-section because:",
    "questionAr": "ملف ملفوف حول حلقة دائرية مغلقة (طوقية) من الحديد المطاوع يمتلك معامل حث ذاتي أكبر بكثير من ملف مماثل ملفوف حول ساق حديدية مستقيمة مفتوحة بنفس الطول والمقطع لأن:",
    "optionsEn": [
      "The closed magnetic path completely eliminates demagnetizing air gaps, maximizing the magnetic flux linked per ampere",
      "A circle has zero electrical resistance compared to a line",
      "The turns of the toroid touch each other physically",
      "The velocity of light inside a ring is reduced to zero"
    ],
    "optionsAr": [
      "المسار المغناطيسي المغلق يمنع تماماً وجود فجوات هوائية مفرقة للفيض، مما يعظم الفيض المغناطيسي المرتبط بكل أمبير",
      "الدائرة ليس لها مقاومة أومية مقارنة بالخط المستقيم",
      "تلامس لفات الملف الطوقي بعضها مادياً",
      "سرعة الضوء داخل الحلقة تنخفض للصفر"
    ],
    "correctAnswer": "The closed magnetic path completely eliminates demagnetizing air gaps, maximizing the magnetic flux linked per ampere",
    "correctIndex": 0,
    "hintEn": "Open cores lose flux at the pole ends through air gaps (high magnetic reluctance).",
    "hintAr": "القلب المفتوح تتفرق خطوط فيضه في الهواء عند القطبين، بينما القلب المغلق يحبس الفيض بالكامل.",
    "stepByStepSolutionEn": [
      "In a closed iron loop (toroid or rectangular transformer core), the magnetic lines of force form continuous loops entirely inside the high-permeability iron without ever crossing an air gap. In an open straight core, magnetic lines must return through air (which has very low permeability), dramatically increasing magnetic reluctance and lowering total flux and self-inductance."
    ],
    "stepByStepSolutionAr": [
      "في الدائرة المغناطيسية المغلقة (مثل حلقة الحديد أو قلب المحول)، تدور خطوط الفيض بالكامل داخل مادة الحديد عالية النفاذية دون أن تعبر الهواء. أما في الساق المستقيمة المفتوحة، فإن خطوط الفيض تضطر لإكمال مسارها في الهواء ذي النفاذية الضعيفة، مما يزيد المقاومة المغناطيسية للمسار ويقلل الفيض ومعامل الحث الذاتي كثيراً."
    ],
    "teacherTipEn": "This explains why all efficient transformers use completely closed magnetic cores.",
    "teacherTipAr": "لهذا السبب تُصنع قلوب المحولات عالية الكفاءة دائماً على شكل مسارات مغناطيسية مغلقة."
  },
  {
    "id": "phys_ch3_db_hots_26",
    "titleEn": "Phase Angle of Dynamo EMF at Any Instant",
    "titleAr": "زاوية الطور للقوة الدافعة اللحظية للدينامو",
    "difficulty": "hots",
    "questionEn": "In an AC dynamo, the angle $\\theta$ inside $\\text{emf}_t = \\text{emf}_{\\max} \\sin\\theta$ represents:",
    "questionAr": "في دينامو التيار المتردد، الزاوية $\\theta$ في القانون $\\text{emf}_t = \\text{emf}_{\\max} \\sin\\theta$ تمثل الزاوية بين:",
    "optionsEn": [
      "The plane of the coil itself and the magnetic field lines",
      "The normal (perpendicular) to the plane of the coil and the magnetic field lines (or velocity vector and field lines)",
      "The axis of rotation and the magnetic field lines",
      "The two opposite sides of the coil"
    ],
    "optionsAr": [
      "مستوى الملف نفسه وخطوط المجال المغناطيسي",
      "العمودي على مستوى الملف وخطوط المجال المغناطيسي (أو اتجاه سرعة حركة أضلاع الملف وخطوط المجال)",
      "محور دوران الملف وخطوط المجال المغناطيسي",
      "ضلعي الملف المتقابلين"
    ],
    "correctAnswer": "The normal (perpendicular) to the plane of the coil and the magnetic field lines (or velocity vector and field lines)",
    "correctIndex": 1,
    "hintEn": "Velocity is perpendicular to coil plane: $\\vec{v} \\perp \\text{plane}$.",
    "hintAr": "اتجاه حركة أضلاع الملف عمودي على مستوى الملف، فالزاوية مع العمودي هي زاوية حركة السلك مع المجال.",
    "stepByStepSolutionEn": [
      "The angle $\\theta$ in the dynamo equation is defined between the normal to the coil plane and the magnetic field lines. This is identical to the angle between the velocity vector $\\vec{v}$ of the coil's longitudinal sides and the magnetic field vector $\\vec{B}$. When the coil plane is parallel to the field, the normal is at $90^\\circ$ to the field, making $\\sin 90^\\circ = 1$ (maximum EMF)."
    ],
    "stepByStepSolutionAr": [
      "الزاوية $\\theta$ في معادلة الدينامو هي الزاوية المحصورة بين العمودي على مستوى الملف وخطوط المجال، وهي نفسها الزاوية بين اتجاه حركة السلك (متجه السرعة $\\vec{v}$) واتجاه خطوط المجال $\\vec{B}$. فعندما يكون الملف موازياً للمجال، يتحرك السلك عمودياً على خطوط الفيض فتكون $\\theta = 90^\\circ$ وتكون القوة الدافعة قيمة عظمى."
    ],
    "teacherTipEn": "Crucial reminder: $\\theta_{\\text{dynamo}} = \\theta_{\\text{normal}} = 90^\\circ - \\theta_{\\text{plane}}$.",
    "teacherTipAr": "تذكير دائم: زاوية الدينامو هي زاوية العمودي وتساوي $90^\\circ - $ زاوية الملف مع المجال."
  },
  {
    "id": "phys_ch3_db_hots_27",
    "titleEn": "Frequency Multiplier with Multi-Coil Dynamo",
    "titleAr": "تردد التيار الناتج عند استخدام عدة ملفات في الدينامو",
    "difficulty": "hots",
    "questionEn": "If a DC generator uses 6 identical coils evenly spaced around the armature with a 12-segment commutator, the angular separation between adjacent coils is:",
    "questionAr": "إذا استخدم مولد تيار مستمر 6 ملفات متماثلة موزعة بانتظام حول محور الدوران مع مقوم معدني مقسم إلى 12 جزءاً، فإن الزاوية بين مستويات الملفات المتتالية تساوي:",
    "optionsEn": [
      "$60^\\circ$",
      "$15^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$"
    ],
    "optionsAr": [
      "$60^\\circ$",
      "$15^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$"
    ],
    "correctAnswer": "$30^\\circ$",
    "correctIndex": 2,
    "hintEn": "Divide $180^\\circ$ by the number of coils: $\\Delta\\theta = \\frac{180^\\circ}{N_{\\text{coils}}}$.",
    "hintAr": "قاعدة توزيع الملفات: $\\Delta\\theta = \\frac{180^\\circ}{\\text{عدد الملفات}}$.",
    "stepByStepSolutionEn": [
      "To ensure symmetric distribution over a half-turn cycle ($180^\\circ$), the angle between adjacent coils is $\\Delta\\theta = \\frac{180^\\circ}{N_{\\text{coils}}} = \\frac{180^\\circ}{6} = 30^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "لتوزيع الملفات بانتظام في الفراغ بحيث يتوالى وصولها للوضع الموازي، تكون الزاوية بين مستويي كل ملفين متتاليين هي: $\\Delta\\theta = \\frac{180^\\circ}{6} = 30^\\circ$."
    ],
    "teacherTipEn": "Number of commutator segments is always double the number of coils ($2 \\times 6 = 12$).",
    "teacherTipAr": "عدد قطع المقوم دائماً ضعف عدد الملفات ($2 \\times 6 = 12$)."
  },
  {
    "id": "phys_ch3_db_hots_28",
    "titleEn": "Transformer Core Saturation and Distortion",
    "titleAr": "التشبع المغناطيسي لقلب المحول وتشويه الموجة",
    "difficulty": "hots",
    "questionEn": "If an alternating voltage far exceeding the rated operating voltage is applied to the primary of a transformer, the iron core enters 'magnetic saturation'. The principal consequence of saturation is:",
    "questionAr": "إذا طُبّق جهد متردد يفوق الجهد المقنن بكثير على الملف الابتدائي لمحول، يصل القلب الحديدي لحالة 'التشبع المغناطيسي'. النتيجة الفيزيائية المباشرة لذلك هي:",
    "optionsEn": [
      "The secondary voltage increases to an infinite value linearly",
      "The transformer starts generating direct current (DC) automatically",
      "The mutual inductance drops to a negative value",
      "The secondary voltage waveform becomes heavily distorted with harmonics, and primary current spikes dramatically, causing severe core overheating"
    ],
    "optionsAr": [
      "زيادة جهد الثانوي إلى قيمة لا نهائية خطياً",
      "تحول المحول لتوليد تيار مستمر تلقائياً",
      "انخفاض معامل الحث المتبادل إلى قيمة سالبة",
      "تشوه شكل موجة جهد الثانوي بشدة مع تولد توافقيات، وقفز تيار الابتدائي لقيم عالية جداً مما يسبب سخونة مفرطة للقلب"
    ],
    "correctAnswer": "The secondary voltage waveform becomes heavily distorted with harmonics, and primary current spikes dramatically, causing severe core overheating",
    "correctIndex": 3,
    "hintEn": "Beyond saturation, $B$ cannot increase further, so permeability $\\mu = \\frac{dB}{dH}$ drops sharply toward $\\mu_0$.",
    "hintAr": "بعد التشبع لا يستطيع الحديد استيعاب فيض إضافي، فتنهار نفاذيته التفاضلية نحو نفاذية الهواء.",
    "stepByStepSolutionEn": [
      "In magnetic saturation, all magnetic domains are aligned, so $\\frac{d\\Phi_m}{dt}$ ceases to follow the input sinusoid. The differential permeability drops precipitously to that of air, causing self-inductance $L_p$ to collapse. Without sufficient opposing back-EMF, huge current surges enter the primary, overheating the core and distorting output voltage."
    ],
    "stepByStepSolutionAr": [
      "عند التشبع المغناطيسي تكون جميع المجالات المغناطيسية للحديد قد انتظمت في اتجاه واحد، فلا يزداد الفيض مع زيادة تيار الابتدائي. وتنهار النفاذية المغناطيسية للقلب فجأة لتكافئ نفاذية الهواء، مما يقلل الحث الذاتي المعاكس فيسحب الابتدائي تياراً هائلاً يسبب ارتفاعاً خطيراً في درجة الحرارة وتشويهاً كبيراً في شكل الموجة الجيبية للخرج."
    ],
    "teacherTipEn": "Transformers must always operate well below core saturation levels.",
    "teacherTipAr": "يُصمم المحول دائماً ليعمل في المنطقة الخطية بعيداً عن التشبع المغناطيسي."
  },
  {
    "id": "phys_ch3_db_hots_29",
    "titleEn": "Why High-Frequency AC Increases Induction in Heating",
    "titleAr": "أثر زيادة التردد في كفاءة أفران الحث",
    "difficulty": "hots",
    "questionEn": "In induction furnaces used to melt metals, very high frequency alternating currents ($10\\text{ kHz}$ to $1\\text{ MHz}$) are utilized rather than standard $50\\text{ Hz}$ because:",
    "questionAr": "في أفران الحث المستخدمة في صهر المعادن، يُستخدم تيار متردد عالي التردد جداً بدلاً من تردد الشبكة العادي ($50\\text{ Hz}$) لأن:",
    "optionsEn": [
      "Induced EMF is proportional to frequency ($f$), so eddy currents and Joule heating ($P \\propto \\text{emf}^2 \\propto f^2$) increase tremendously at high frequencies",
      "High frequency prevents the metal from melting too fast",
      "High frequency eliminates all magnetic fields",
      "Direct current cannot travel through copper coils"
    ],
    "optionsAr": [
      "القوة الدافعة المستحثة تتناسب طردياً مع التردد، فتزداد التيارات الدوامية والطاقة الحرارية المتولدة بمعدل هائل ($P \\propto f^2$)",
      "التردد العالي يمنع المعدن من الانصهار سريعاً",
      "التردد العالي يلغي المجالات المغناطيسية",
      "التيار المستمر لا يستطيع المرور في ملفات النحاس"
    ],
    "correctAnswer": "Induced EMF is proportional to frequency ($f$), so eddy currents and Joule heating ($P \\propto \\text{emf}^2 \\propto f^2$) increase tremendously at high frequencies",
    "correctIndex": 0,
    "hintEn": "By Faraday's law, $\\text{emf} \\propto \\frac{d\\Phi}{dt} \\propto f$. Power is $P = \\frac{\\text{emf}^2}{R} \\propto f^2$.",
    "hintAr": "من قانون فاراداي $\\text{emf} \\propto f$، والقدرة الحرارية تتناسب مع مربع القوة الدافعة فتتناسب مع $f^2$.",
    "stepByStepSolutionEn": [
      "At higher frequencies, the magnetic flux oscillates much more rapidly ($\\frac{d\\Phi_m}{dt} \\propto \\omega = 2\\pi f$), inducing immense electromotive forces around the metallic mass. Because power dissipated by eddy currents scales quadratically with induced EMF ($P \\propto \\text{emf}^2 \\propto f^2$), high-frequency AC generates blistering melting temperatures within seconds."
    ],
    "stepByStepSolutionAr": [
      "بزيادة تردد التيار المتردد، يزداد المعدل الزمني لتغير الفيض بدرجة هائلة ($\\frac{d\\Phi}{dt} \\propto 2\\pi f$)، فتتولد في القطعة المعدنية قوى دافعة مستحثة وتيارات دوامية عنيفة. وبما أن القدرة الحرارية تتناسب مع مربع القوة الدافعة المستحثة ($P \\propto f^2$)، فإن الترددات العالية تنتج طاقة حرارية هائلة تكفي لصهر أصلب المعادن في ثوانٍ معدودة."
    ],
    "teacherTipEn": "Frequency squared dependence explains the extreme heating power of induction furnaces.",
    "teacherTipAr": "التناسب مع مربع التردد يفسر القدرة الصهرية الهائلة لأفران الحث."
  },
  {
    "id": "phys_ch3_db_hots_30",
    "titleEn": "Direction of Current in Straight Wire Falling Across Earth Field",
    "titleAr": "اتجاه التيار المستحث في سلك يسقط في مجال الأرض",
    "difficulty": "hots",
    "questionEn": "A horizontal metal rod aligned along the East-West direction is dropped from rest, falling horizontally through the Earth's magnetic field (horizontal component directed towards the North). Applying Fleming's Right-Hand Rule, the induced current in the rod flows from:",
    "questionAr": "سلك معدني أفقي موجه في اتجاه (شرق - غرب) سقط سقوطاً حراً أفقياً في مجال الأرض المغناطيسي (المركبة الأفقية متجهة نحو الشمال). بتطبيق قاعدة اليد اليمنى لفليمنج، يسري التيار المستحث في السلك من:",
    "optionsEn": [
      "East to West",
      "West to East",
      "North to South",
      "South to North"
    ],
    "optionsAr": [
      "الشرق إلى الغرب",
      "الغرب إلى الشرق",
      "الشمال إلى الجنوب",
      "الجنوب إلى الشمال"
    ],
    "correctAnswer": "West to East",
    "correctIndex": 1,
    "hintEn": "Thumb = Motion (Downwards); Index = Field (North); Middle finger = Current direction.",
    "hintAr": "الإبهام يشير لأسفل (الحركة)؛ السبابة تشير للشمال (المجال)؛ الوسطى تشير للشرق (التيار).",
    "stepByStepSolutionEn": [
      "Apply Fleming's Right-Hand Rule: Point the thumb downwards (direction of falling motion), point the forefinger/index towards geographic North (horizontal field lines). The middle finger will naturally point toward the East. Therefore, the induced current flows from West to East (making the East end at higher potential)."
    ],
    "stepByStepSolutionAr": [
      "بتطبيق قاعدة اليد اليمنى لفليمنج: الإبهام يشير لأسفل (اتجاه حركة السقوط الحر)، والسبابة تشير أفقياً باتجاه الشمال (خطوط مجال الأرض). نجد أن الإصبع الأوسط يشير أفقياً باتجاه الشرق. وعليه يسري التيار المستحث داخل السلك من الغرب إلى الشرق، ويكون الطرف الشرقي أعلى جهداً من الطرف الغربي."
    ],
    "teacherTipEn": "A classic competitive conceptual question combining geography coordinates with Fleming's Right-Hand Rule.",
    "teacherTipAr": "مسألة امتحانية شهيرة تربط الاتجاهات الجغرافية بقاعدة اليد اليمنى لفليمنج."
  },
  {
    "id": "phys_ch3_db_hots_31",
    "titleEn": "Why North-South Wire Induces No EMF When Dropped",
    "titleAr": "سلك موجه (شمال - جنوب) يسقط في مجال الأرض",
    "difficulty": "hots",
    "questionEn": "If a straight horizontal metallic conductor aligned along the North-South direction is dropped vertically from rest in the Earth's horizontal magnetic field (directed toward North), the induced electromotive force between its ends is:",
    "questionAr": "إذا سقط سلك معدني أفقي موجه في اتجاه (شمال - جنوب) سقوطاً حراً رأسياً في المجال المغناطيسي الأفقي للأرض (المتجه نحو الشمال)، فإن القوة الدافعة المستحثة بين طرفيه تكون:",
    "optionsEn": [
      "Maximum",
      "Directly proportional to the square of its mass",
      "Zero, because the length of the conductor is parallel to the magnetic field lines ($L \\parallel B$)",
      "Negative infinite"
    ],
    "optionsAr": [
      "قيمة عظمى",
      "متناسبة طردياً مع مربع كتلته",
      "صفراً، لأن طول السلك موازٍ لخطوط المجال المغناطيسي للأرض فلا يقطع أياً منها",
      "سالبة لا نهائية"
    ],
    "correctAnswer": "Zero, because the length of the conductor is parallel to the magnetic field lines ($L \\parallel B$)",
    "correctIndex": 2,
    "hintEn": "To cut magnetic flux, motion and length must not be parallel to field.",
    "hintAr": "لقطع خطوط الفيض، يجب ألا يكون السلك موازياً لخطوط المجال المغناطيسي.",
    "stepByStepSolutionEn": [
      "The rod is oriented North-South, which is parallel to the Earth's horizontal magnetic field lines ($B$). As it falls vertically, its length does not cut across the horizontal flux lines. By vector cross product $\\text{emf} = (\\vec{v} \\times \\vec{B}) \\cdot \\vec{L} = 0$. Hence, no motional EMF is induced."
    ],
    "stepByStepSolutionAr": [
      "السلك ممتد في اتجاه (شمال - جنوب)، وهو نفس اتجاه خطوط المركبة الأفقية لمجال الأرض. وأثناء سقوطه رأسياً لا يقطع خطوط الفيض لأن طوله موازٍ تماماً لخطوط المجال، فتكون القوة الدافعة المستحثة بين طرفيه صفراً."
    ],
    "teacherTipEn": "East-West wire cuts Earth's field $\\implies \\text{EMF} > 0$; North-South wire does not cut Earth's field $\\implies \\text{EMF} = 0$.",
    "teacherTipAr": "سلك (شرق - غرب) يقطع المجال وتتولد فيه $\\text{emf}$؛ بينما سلك (شمال - جنوب) موازٍ للمجال ولا تتولد فيه $\\text{emf}$."
  },
  {
    "id": "phys_ch3_db_hots_32",
    "titleEn": "Why Car Radio Antenna Picks Up Radio Signals via Induction",
    "titleAr": "استقبال إشارات الراديو في هوائي السيارة بالحث",
    "difficulty": "hots",
    "questionEn": "When a car drives rapidly across an open plain, its vertical metal radio antenna cuts across the Earth's horizontal magnetic field lines. The potential difference induced between the top and bottom of the antenna is:",
    "questionAr": "عندما تتحرك سيارة بسرعة في منطقة مفتوحة، يقطع هوائي الراديو الرأسي المركبة الأفقية لمجال الأرض. فرق الجهد المستحث المتولد بين قمة وقاعدة الهوائي يكون:",
    "optionsEn": [
      "Zero under all driving directions",
      "Independent of the car's speed",
      "Proportional to $v^2$",
      "$\\text{emf} = B_{\\text{horiz}} v L \\sin\\theta$"
    ],
    "optionsAr": [
      "صفراً دائماً في جميع الاتجاهات",
      "مستقلاً عن سرعة السيارة",
      "متناسباً مع $v^2$",
      "$\\text{emf} = B_{\\text{horiz}} v L \\sin\\theta$"
    ],
    "correctAnswer": "$\\text{emf} = B_{\\text{horiz}} v L \\sin\\theta$",
    "correctIndex": 3,
    "hintEn": "A vertical rod moving horizontally cuts horizontal field lines when moving East or West.",
    "hintAr": "الهوائي الرأسي المتحرك أفقياً يقطع خطوط المجال الأفقية عند تحركه شرقاً أو غرباً.",
    "stepByStepSolutionEn": [
      "The vertical antenna has length $L$. If the car drives horizontally perpendicular to the Earth's horizontal field (e.g., driving East-West), the antenna cuts the North-directed field lines at velocity $v$. A motional electromotive force $\\text{emf} = B_{\\text{horiz}} v L$ is induced between its ends."
    ],
    "stepByStepSolutionAr": [
      "الهوائي عمودي رأسي طوله $L$. إذا تحركت السيارة أفقياً باتجاه الشرق أو الغرب (عمودياً على خطوط مجال الأرض المتجهة شمالاً)، فإن الهوائي يقطع خطوط الفيض الأفقية بسرعة $v$، فتتولد بين طرفيه قوة دافعة مستحثة $\\text{emf} = B_h v L$."
    ],
    "teacherTipEn": "Maximum motional EMF occurs when driving East-West perpendicular to Earth's field.",
    "teacherTipAr": "تكون القوة الدافعة أكبر ما يمكن عند قيادة السيارة في اتجاه (شرق - غرب)."
  },
  {
    "id": "phys_ch3_db_hots_33",
    "titleEn": "Double Wound Coil in High-Precision Resistance Boxes",
    "titleAr": "اللف المزدوج في صناديق المقاومات القياسية عيارية الدقة",
    "difficulty": "hots",
    "questionEn": "Standard resistance boxes used in Wheatstone bridges are manufactured using bifilar (double-wound) wire coils. If high-frequency AC is passed through such a standard resistance, the resistance box will:",
    "questionAr": "تُصنع صناديق المقاومات العيارية المستخدمة في قنطرة وتستون بطريقة اللف المزدوج. إذا مر تيار متردد عالي التردد في هذه المقاومة، فإن صندوق المقاومات:",
    "optionsEn": [
      "Maintain its purely ohmic resistance without developing any inductive reactance ($X_L = 0$)",
      "Develop huge inductive reactance that blocks the AC completely",
      "Melt instantly due to electromagnetic resonance",
      "Act as a high-capacitance filter"
    ],
    "optionsAr": [
      "يحتفظ بمقاومته الأومية النقية دون أن يكتسب أي مفاعلة حثية تذكر ($X_L = 0$)",
      "يكتسب مفاعلة حثية هائلة تمنع مرور التيار تماماً",
      "ينصهر فوراً بسبب الرنين الكهرومغناطيسي",
      "يعمل كمكثف فائق السعة"
    ],
    "correctAnswer": "Maintain its purely ohmic resistance without developing any inductive reactance ($X_L = 0$)",
    "correctIndex": 0,
    "hintEn": "Self-inductance is completely canceled because opposing magnetic fluxes cancel.",
    "hintAr": "ينعدم الحث الذاتي تماماً لتلاشي المجالين المغناطيسيين المتعاكسين.",
    "stepByStepSolutionEn": [
      "In bifilar winding, the two halves of the wire carry equal and opposite currents, generating identical and opposing magnetic fields that cancel each other out completely. Consequently, self-inductance $L = 0$, meaning inductive reactance $X_L = 2\\pi f L = 0$ even at very high frequencies, ensuring precision measurements."
    ],
    "stepByStepSolutionAr": [
      "في اللف المزدوج يسري التياران في اتجاهين متعاكسين فيتلاشى المجالان المغناطيسيان تماماً، وينعدم الحث الذاتي ($L = 0$). وبالتالي تنعدم المفاعلة الحثية ($X_L = 2\\pi f L = 0$) حتى عند الترددات المرتفعة، مما يضمن دقة القياسات وثبوت المقاومة الأومية النقية."
    ],
    "teacherTipEn": "Bifilar winding guarantees pure ohmic resistance independent of AC frequency.",
    "teacherTipAr": "اللف المزدوج يضمن نقاء المقاومة الأومية واستقلالها عن التردد."
  },
  {
    "id": "phys_ch3_db_hots_34",
    "titleEn": "Energy Conservation in Transformer: Why Secondary Current Lowers Primary Inductive Reactance",
    "titleAr": "توازن الطاقة والحث في المحول: كيف يتحسس الابتدائي حمل الثانوي",
    "difficulty": "hots",
    "questionEn": "When an electrical device is switched on in the secondary circuit of an operating transformer, how does the primary coil 'know' to draw more power from the power grid?",
    "questionAr": "عند تشغيل جهاز في دائرة الملف الثانوي لمحول يعمل، كيف 'يشعر' الملف الابتدائي ليسحب مزيداً من القدرة من المصدر؟",
    "optionsEn": [
      "Electrons jump physically through the iron core from secondary to primary",
      "Current flowing in the secondary creates a magnetic flux opposing the primary flux (by Lenz's law), reducing the net flux in the core, which decreases the primary back-EMF and allows more primary current to flow",
      "The temperature of the iron core drops, lowering wire resistance",
      "The secondary voltage sends a radio signal to the power station"
    ],
    "optionsAr": [
      "تنتقل الإلكترونات مادياً عبر القلب الحديدي من الثانوي إلى الابتدائي",
      "تيار الثانوي يولد فيضاً مغناطيسياً يعاكس فيض الابتدائي (طبقاً لقاعدة لنز) فيقلل الفيض المحصل في القلب، مما يضعف القوة الدافعة الذاتية العكسية للابتدائي فيسمح بمرور تيار أكبر من المصدر",
      "انخفاض درجة حرارة القلب مما يقلل مقاومة الأسلاك",
      "إرسال إشارة لاسلكية من الثانوي إلى محطة التوليد"
    ],
    "correctAnswer": "Current flowing in the secondary creates a magnetic flux opposing the primary flux (by Lenz's law), reducing the net flux in the core, which decreases the primary back-EMF and allows more primary current to flow",
    "correctIndex": 1,
    "hintEn": "Lenz's law provides the feedback mechanism between secondary and primary.",
    "hintAr": "قاعدة لنز هي آلية التغذية الراجعة المغناطيسية التي تربط بين الملفين.",
    "stepByStepSolutionEn": [
      "When the secondary circuit is closed, secondary current $I_s$ induces a magnetic flux $\\Phi_s$ that opposes primary flux $\\Phi_p$ by Lenz's law. This momentarily weakens the net changing flux through the primary coil. Consequently, the opposing self-induced back-EMF in the primary decreases, which allows the external AC mains voltage to drive more primary current $I_p$ into the transformer, perfectly matching power demand."
    ],
    "stepByStepSolutionAr": [
      "عند غلق دائرة الثانوي، يمر تيار $I_s$ يولد فيضاً معاكساً لفيض الابتدائي طبقاً لقاعدة لنز، فيقلل الفيض المغناطيسي المحصل المتبادل في القلب. ويؤدي ذلك إلى انخفاض القوة الدافعة الذاتية العكسية المتولدة في الملف الابتدائي والتي كانت تعطل تياره، فيندفع تيار أكبر من المصدر لتعويض النقص والحفاظ على توازن الطاقة في المحول."
    ],
    "teacherTipEn": "Lenz's law is the magnetic messenger transmitting power demand across the core.",
    "teacherTipAr": "قاعدة لنز هي الرسول الكهرومغناطيسي الذي ينقل طلب الطاقة عبر القلب الحديدي."
  },
  {
    "id": "phys_ch3_db_hots_35",
    "titleEn": "Current Induced in Loop During Magnetic Field Pulse",
    "titleAr": "التيار المستحث في حلقة أثناء نبضة مجال مغناطيسي",
    "difficulty": "hots",
    "questionEn": "A circular wire loop is exposed to a magnetic field perpendicular to its plane that increases linearly from 0 to $B_0$ in time $T$, remains constant at $B_0$ for time $T$, and then decreases linearly to 0 in time $T$. The induced current in the loop during these three successive stages is:",
    "questionAr": "تعرضت حلقة دائرية لمجال مغناطيسي عمودي على مستواها: تزايد بانتظام من الصفر إلى $B_0$ في زمن $T$، ثم ثبت عند $B_0$ لزمن $T$، ثم تناقص بانتظام إلى الصفر في زمن $T$. فإن التيار المستحث في الحلقة خلال المراحل الثلاث على الترتيب يكون:",
    "optionsEn": [
      "Continuously increasing, constant, continuously decreasing",
      "Zero throughout all three stages",
      "Constant in one direction, zero, constant in the opposite direction",
      "Alternating sine wave throughout"
    ],
    "optionsAr": [
      "متزايداً باستمرار، ثابتاً، متناقصاً باستمرار",
      "صفراً طوال المراحل الثلاث",
      "ثابتاً في اتجاه معين، صفراً، ثابتاً في الاتجاه المعاكس",
      "موجة جيبية متناوبة طوال الوقت"
    ],
    "correctAnswer": "Constant in one direction, zero, constant in the opposite direction",
    "correctIndex": 2,
    "hintEn": "$\\text{emf} \\propto \\frac{dB}{dt}$. Linear increase $\\implies \\frac{dB}{dt} = \\text{const}$. Constant $B \\implies \\frac{dB}{dt} = 0$.",
    "hintAr": "القوة الدافعة تتناسب مع معدل تغير المجال: التزايد الخطي يعطي $\\text{emf}$ ثابتة، وثبوت المجال يعطي $\\text{emf} = 0$.",
    "stepByStepSolutionEn": [
      "1) First stage: $B$ increases linearly $\\implies \\frac{dB}{dt} = +B_0/T = \\text{const} \\implies \\text{emf}_1 = -A \\frac{B_0}{T}$ (constant reverse current). 2) Second stage: $B = \\text{const} \\implies \\frac{dB}{dt} = 0 \\implies I = 0$. 3) Third stage: $B$ decreases linearly $\\implies \\frac{dB}{dt} = -B_0/T \\implies \\text{emf}_3 = +A \\frac{B_0}{T}$ (constant forward current in opposite direction)."
    ],
    "stepByStepSolutionAr": [
      "1) المرحلة الأولى: تزايد منتظم للمجال $\\implies$ معدل التغير ثابت موجب فتتولد $\\text{emf}$ ثابتة وتيار مستحث ثابت في اتجاه عكسي. 2) المرحلة الثانية: ثبوت المجال $\\implies$ انعدام التغير فتكون $\\text{emf} = 0$ والتيار صفر. 3) المرحلة الثالثة: تناقص منتظم $\\implies$ معدل التغير ثابت سالب فتتولد $\\text{emf}$ ثابتة وتيار ثابت في اتجاه طردي معاكس للأول."
    ],
    "teacherTipEn": "Stepwise pulse graphs are a premier test format in Egyptian physics finals.",
    "teacherTipAr": "منحنيات النبضات المتدرجة من أشهر أنماط أسئلة امتحانات إتمام الثانوية العامة."
  },
  {
    "id": "phys_ch3_db_hots_36",
    "titleEn": "Induced Electric Field Inside a Changing Magnetic Field Region",
    "titleAr": "المجال الكهربي المستحث غير الكهروستاتيكي",
    "difficulty": "hots",
    "questionEn": "A changing magnetic field ($\\frac{dB}{dt} \\neq 0$) restricted to a cylindrical region of space induces an electric field in the surrounding space. This induced electric field differs fundamentally from an electrostatic Coulomb field in that:",
    "questionAr": "المجال المغناطيسي المتغير مع الزمن في منطقة أسطوانية يولد مجالاً كهربياً مستحثاً في الفضاء المحيط. يختلف هذا المجال الكهربي المستحث جوهرياً عن المجال الكهربي الكهروستاتيكي (الكولومي) في أنه:",
    "optionsEn": [
      "Exerts no force on electric charges",
      "Can only exist inside conductors and never in free space",
      "Has an infinite speed of propagation",
      "Forms closed circular loops (non-conservative with non-zero line integral $\\oint \\vec{E} \\cdot d\\vec{\\ell} \\neq 0$), whereas electrostatic field lines originate on positive charges and terminate on negative charges"
    ],
    "optionsAr": [
      "لا يؤثر بأي قوى على الشحنات الكهربية",
      "لا يمكن أن يوجد إلا داخل الموصلات ولا يوجد في الفراغ",
      "سرعة انتشاره لا نهائية",
      "خطوطه مسارات دائرية مغلقة (مجال غير محافظ له تكامل خطي مغلق لا يساوي صفراً)، بينما خطوط المجال الكهروستاتيكي تبدأ من شحنات موجبة وتنتهي عند شحنات سالبة"
    ],
    "correctAnswer": "Forms closed circular loops (non-conservative with non-zero line integral $\\oint \\vec{E} \\cdot d\\vec{\\ell} \\neq 0$), whereas electrostatic field lines originate on positive charges and terminate on negative charges",
    "correctIndex": 3,
    "hintEn": "Faraday's generalized law: $\\oint \\vec{E} \\cdot d\\vec{\\ell} = -\\frac{d\\Phi_m}{dt} \\neq 0$.",
    "hintAr": "قانون فاراداي العام: المجال الكهربي المستحث هو مجال دوامي مغلق ناتج عن تغير فيض مغناطيسي.",
    "stepByStepSolutionEn": [
      "Electrostatic fields are conservative ($\\oint \\vec{E} \\cdot d\\vec{\\ell} = 0$), produced by stationary electric charges, with open field lines starting at $+q$ and ending at $-q$. By contrast, induced electric fields are created by time-varying magnetic flux, have closed continuous loops without any point charge sources, and are non-conservative ($\\oint \\vec{E} \\cdot d\\vec{\\ell} = -\\frac{d\\Phi_m}{dt}$)."
    ],
    "stepByStepSolutionAr": [
      "المجال الكهروستاتيكي مجال محافظ ينشأ عن شحنات ساكنة وخطوطه مفتوحة تنبع من الشحنة الموجبة وتصب في السالبة وفرق الجهد في مسار مغلق يساوي صفراً. أما المجال الكهربي المستحث فينشأ عن تغير الفيض المغناطيسي وتكون خطوطه مغلقة دائرية وهو مجال غير محافظ، وهو المسؤول عن تحريك الإلكترونات وتوليد التيار في الحث الكهرومغناطيسي."
    ],
    "teacherTipEn": "This induced non-conservative electric field is the exact foundation of Maxwell's equations.",
    "teacherTipAr": "هذا المجال الكهربي الدوامي هو أساس معادلات ماكسويل وتوليد الموجات الكهرومغناطيسية."
  },
  {
    "id": "phys_ch3_db_hots_37",
    "titleEn": "Effective Resistance of an Inductor at High vs Low Frequency",
    "titleAr": "المقاومة الفعالة والمفاعلة الحثية عند مختلف الترددات",
    "difficulty": "hots",
    "questionEn": "An inductor coil made of copper wire is connected to an AC source of variable frequency but constant RMS voltage. As the frequency of the source is increased from $50\\text{ Hz}$ to $5000\\text{ Hz}$, the current drawn by the coil:",
    "questionAr": "ملف حث من سلك نحاسي اتصل بمصدر جهد متردد متغير التردد مع ثبوت القيمة الفعالة لجهده. عند زيادة تردد المصدر من $50\\text{ Hz}$ إلى $5000\\text{ Hz}$، فإن شدة التيار المار في الملف:",
    "optionsEn": [
      "Decreases significantly, because the inductive reactance increases directly with frequency ($X_L = 2\\pi f L$)",
      "Increases by a factor of 100",
      "Remains completely unchanged",
      "Becomes steady direct current"
    ],
    "optionsAr": [
      "تقل بدرجة كبيرة، لأن المفاعلة الحثية للملف تتناسب طردياً مع التردد ($X_L = 2\\pi f L$)",
      "تزداد إلى مئة مثل",
      "تظل ثابتة دون أي تغيير",
      "تتحول إلى تيار مستمر نقي"
    ],
    "correctAnswer": "Decreases significantly, because the inductive reactance increases directly with frequency ($X_L = 2\\pi f L$)",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is $X_L = 2\\pi f L$. Higher frequency means higher impedance $Z$.",
    "hintAr": "المفاعلة الحثية $X_L = 2\\pi f L$ تزداد طردياً مع التردد فتزيد المعاوقة ويقل التيار.",
    "stepByStepSolutionEn": [
      "The opposition to AC current in an inductor is dominated by inductive reactance $X_L = 2\\pi f L$. Increasing frequency by 100 times raises $X_L$ approximately 100-fold. Because current is $I = \\frac{V}{Z} \\approx \\frac{V}{X_L}$, the current drops dramatically as frequency rises."
    ],
    "stepByStepSolutionAr": [
      "الممانعة التي يلقاها التيار في ملف الحث هي المفاعلة الحثية $X_L = 2\\pi f L$. عند زيادة التردد 100 مرة تتضاعف المفاعلة الحثية 100 مرة، وبما أن شدة التيار $I = \\frac{V}{Z}$، فإن التيار يقل بشدة مع ارتفاع التردد."
    ],
    "teacherTipEn": "An inductor acts as a high-frequency choke (blocks high frequencies).",
    "teacherTipAr": "يعمل ملف الحث كخانق للترددات العالية (يمنع مرور الترددات المرتفعة)."
  },
  {
    "id": "phys_ch3_db_hots_38",
    "titleEn": "Motional EMF in a Jet Aircraft Flying in Earth's Field",
    "titleAr": "القوة الدافعة المستحثة عبر جناحي طائرة نفاثة تطير في مجال الأرض",
    "difficulty": "hots",
    "questionEn": "A jet airplane with a metallic wingspan of $40\\text{ m}$ flies horizontally at a speed of $300\\text{ m/s}$ in a region where the Earth's vertical magnetic field component is $5 \\times 10^{-5}\\text{ T}$. The potential difference induced between the tips of its wings is:",
    "questionAr": "طائرة نفاثة معدنية المسافة بين طرفي جناحيها $40\\text{ m}$ تطير أفقياً بسرعة $300\\text{ m/s}$ في منطقة المركبة الرأسية لمجال الأرض المغناطيسي فيها $5 \\times 10^{-5}\\text{ T}$. فإن فرق الجهد المستحث المتولد بين طرفي جناحيها يساوي:",
    "optionsEn": [
      "$6.0\\text{ V}$",
      "$0.6\\text{ V}$",
      "$0.06\\text{ V}$",
      "$60\\text{ V}$"
    ],
    "optionsAr": [
      "$6.0\\text{ V}$",
      "$0.6\\text{ V}$",
      "$0.06\\text{ V}$",
      "$60\\text{ V}$"
    ],
    "correctAnswer": "$0.6\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "The horizontal flight wingspan cuts the vertical component of Earth's field perpendicularly: $\\text{emf} = B_{\\text{vert}} v L$.",
    "hintAr": "أجنحة الطائرة الأفقية تقطع المركبة الرأسية لمجال الأرض عمودياً: $\\text{emf} = B_v v L$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = B_v v L = (5 \\times 10^{-5}\\text{ T}) \\times (300\\text{ m/s}) \\times (40\\text{ m}) = 5 \\times 10^{-5} \\times 12000 = 0.6\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = 5 \\times 10^{-5} \\times 300 \\times 40 = 0.6\\text{ V}$."
    ],
    "teacherTipEn": "A classic physics application of motional EMF to aviation.",
    "teacherTipAr": "تطبيق فيزيائي كلاسيكي شهير على حركة الطائرات."
  },
  {
    "id": "phys_ch3_db_hots_39",
    "titleEn": "Why Passengers in the Jet Cannot Light a Bulb with Wing EMF",
    "titleAr": "لماذا لا يمكن للمسافرين إضاءة مصباح بجهد أجنحة الطائرة",
    "difficulty": "hots",
    "questionEn": "In the previous aircraft problem ($\\text{emf} = 0.6\\text{ V}$ between wingtips), if a passenger connects a light bulb inside the cabin between wires running to the two wingtips, the bulb will NOT light because:",
    "questionAr": "في مسألة الطائرة السابقة ($\\text{emf} = 0.6\\text{ V}$ بين طرفي الجناحين)، إذا وُصل مصباح داخل كابينة الركاب بسلكين ممتدين إلى طرفي الجناحين، فإن المصباح لن يضيء لأن:",
    "optionsEn": [
      "The wing aluminum acts as an insulator at high altitudes",
      "The speed of the airplane exceeds the speed of electric current",
      "The connecting wires inside the aircraft move through the same magnetic field at the exact same speed, inducing an identical EMF that opposes and completely cancels the wing EMF around the closed loop ($\\Delta\\Phi_m = 0$)",
      "The magnetic field of the Earth disappears inside the cabin"
    ],
    "optionsAr": [
      "الألومنيوم يصبح عازلاً عند الارتفاعات العالية",
      "سرعة الطائرة تفوق سرعة التيار الكهربي",
      "الأسلاك الموصلة داخل الطائرة تتحرك في نفس المجال وبنفس السرعة فتتولد فيها نفس القوة الدافعة في نفس الاتجاه، فتلاشي قوة الأجنحة تماماً في المسار المغلق",
      "مجال الأرض ينعدم تماماً داخل كابينة الطائرة"
    ],
    "correctAnswer": "The connecting wires inside the aircraft move through the same magnetic field at the exact same speed, inducing an identical EMF that opposes and completely cancels the wing EMF around the closed loop ($\\Delta\\Phi_m = 0$)",
    "correctIndex": 2,
    "hintEn": "The entire closed loop moves rigidly through a uniform field, so flux through the loop never changes.",
    "hintAr": "الحلقة المغلقة بالكامل تتحرك كجسم جاسئ في مجال منتظم، فلا يحدث أي تغير في الفيض المحصور بداخلها.",
    "stepByStepSolutionEn": [
      "The closed loop formed by the wings, the cabin connecting wires, and the bulb moves as a rigid body through the uniform magnetic field. Because the enclosed area and the field density are constant, the magnetic flux through the closed loop does not change with time ($\\frac{d\\Phi_m}{dt} = 0$). By Faraday's law, the net electromotive force around any closed circuit moving rigidly in a uniform field is strictly zero."
    ],
    "stepByStepSolutionAr": [
      "الدائرة المغلقة المكونة من الجناحين وأسلاك التوصيل الداخلية والمصباح تتحرك كجسم واحد في مجال منتظم. وبما أن المساحة المحصورة ثابتة وشدة المجال ثابتة، فإن الفيض المخترق لهذه الدائرة المغلقة ثابت تماماً لا يتغير مع الزمن ($\\frac{d\\Phi}{dt} = 0$). وعليه تكون القوة الدافعة المحصلة في المسار المغلق صفراً، لأن الأسلاك الداخلية يتولد فيها نفس الجهد المستحث المعاكس لجهد الأجنحة فيلاشيه تماماً."
    ],
    "teacherTipEn": "A profound conceptual demonstration: You cannot extract net electric power without cutting flux that changes the enclosed loop area!",
    "teacherTipAr": "مبدأ فيزيائي عميق: لا يمكن استخلاص طاقة كهربية من دائرة مغلقة تتحرك بكاملها في مجال منتظم!"
  },
  {
    "id": "phys_ch3_db_hots_40",
    "titleEn": "Faraday Disk with Radial Slits",
    "titleAr": "قرص فاراداي النحاسي المشقوق قطرياً",
    "difficulty": "hots",
    "questionEn": "Faraday's homopolar generator consists of a solid copper disc rotating in a perpendicular magnetic field. If several narrow radial slits are cut from the rim toward the center of the disc (like spokes of a wheel), the induced EMF between the center and rim:",
    "questionAr": "يتكون قرص فاراداي من قرص نحاسي مصمت يدور في مجال مغناطيسي عمودي. إذا قُطعت في القرص شقوق قطرية ضيقة من المحيط باتجاه المركز (كأسلاك عجلة الدراجة)، فإن القوة الدافعة المستحثة بين المركز والمحيط:",
    "optionsEn": [
      "Drops immediately to zero",
      "Reverses its sign periodically",
      "Doubles due to increased perimeter",
      "Remains unchanged, while internal eddy current losses in the disc are dramatically reduced"
    ],
    "optionsAr": [
      "تنعدم فوراً",
      "ينعكس اتجاهها دورياً",
      "تتضاعف لزيادة المحيط",
      "تظل ثابتة دون تغيير، بينما تقل التيارات الدوامية المفقودة في القرص بدرجة هائلة"
    ],
    "correctAnswer": "Remains unchanged, while internal eddy current losses in the disc are dramatically reduced",
    "correctIndex": 3,
    "hintEn": "Each radial strip still cuts magnetic flux perpendicularly at the same speed: $\\text{emf} = \\frac{1}{2} B \\omega R^2$.",
    "hintAr": "كل جزء قطري يظل ساقاً موصلة تدور وتقطع الفيض بنفس المقدار: $\\text{emf} = \\frac{1}{2} B \\omega R^2$.",
    "stepByStepSolutionEn": [
      "Each radial segment of the disc acts as a rotating conducting rod of length $R$, inducing an electromotive force $\\text{emf} = \\frac{1}{2} B \\omega R^2$ between the axle and the perimeter. Cutting radial slits does not break these radial paths, so the output voltage is unchanged, but the slits disrupt circular closed loops, suppressing waste eddy currents."
    ],
    "stepByStepSolutionAr": [
      "كل جزء قطري في القرص يتصرف كساق موصلة طولها $R$ تدور حول أحد طرفيها مولدة نفس القوة الدافعة $\\text{emf} = \\frac{1}{2} B \\omega R^2$ بين المحور والمحيط. وجود الشقوق القطرية لا يقطع مسار فرق الجهد من المركز للحافة، لكنه يقطع المسارات الدائرية للتيارات الدوامية العشوائية فيقلل الفقد الحراري."
    ],
    "teacherTipEn": "Radial slits preserve radial motional EMF while cutting circular eddy currents.",
    "teacherTipAr": "الشقوق القطرية تحافظ على فرق الجهد القطري وتقطع التيارات الدوامية الدائرية."
  },
  {
    "id": "phys_ch3_db_hots_41",
    "titleEn": "Ratio of Turns in Step-Down Transformer from Power Equation",
    "titleAr": "استنتاج نسبة اللفات من معادلة القدرة والتيار",
    "difficulty": "hots",
    "questionEn": "A step-down transformer has an efficiency of $90\\%$ and delivers $3.6\\text{ kW}$ of power at $120\\text{ V}$. If the primary supply voltage is $3000\\text{ V}$, the primary current ($I_p$) and the turns ratio ($\\frac{N_p}{N_s}$) are, respectively:",
    "questionAr": "محول خافض للجهد كفاءته $90\\%$ ينتج قدرة $3.6\\text{ kW}$ عند جهد ثانوي $120\\text{ V}$. إذا كان جهد المصدر الابتدائي $3000\\text{ V}$، فإن شدة تيار الابتدائي ($I_p$) ونسبة عدد اللفات ($\\frac{N_p}{N_s}$) هما على الترتيب:",
    "optionsEn": [
      "$I_p = 1.33\\text{ A}$ and $\\frac{N_p}{N_s} = 25$",
      "$I_p = 1.20\\text{ A}$ and $\\frac{N_p}{N_s} = 25$",
      "$I_p = 1.33\\text{ A}$ and $\\frac{N_p}{N_s} = 22.5$",
      "$I_p = 2.00\\text{ A}$ and $\\frac{N_p}{N_s} = 30$"
    ],
    "optionsAr": [
      "$I_p = 1.33\\text{ A}$ و $\\frac{N_p}{N_s} = 25$",
      "$I_p = 1.20\\text{ A}$ و $\\frac{N_p}{N_s} = 25$",
      "$I_p = 1.33\\text{ A}$ و $\\frac{N_p}{N_s} = 22.5$",
      "$I_p = 2.00\\text{ A}$ و $\\frac{N_p}{N_s} = 30$"
    ],
    "correctAnswer": "$I_p = 1.33\\text{ A}$ and $\\frac{N_p}{N_s} = 25$",
    "correctIndex": 0,
    "hintEn": "$P_s = 3600\\text{ W} \\implies P_p = \\frac{P_s}{\\eta} = \\frac{3600}{0.90} = 4000\\text{ W}$. Then $I_p = \\frac{P_p}{V_p} = \\frac{4000}{3000} = 1.33\\text{ A}$. For turns: $\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$ (assuming magnetic coupling is full).",
    "hintAr": "قدرة الابتدائي $P_p = \\frac{3600}{0.9} = 4000\\text{ W}$، وتياره $I_p = \\frac{4000}{3000} = 1.33\\text{ A}$. ونسبة اللفات $\\frac{N_p}{N_s} = \\frac{V_p}{V_s} = \\frac{3000}{120} = 25$.",
    "stepByStepSolutionEn": [
      "Primary power: $P_p = \\frac{P_s}{0.90} = \\frac{3600}{0.90} = 4000\\text{ W}$. Primary current: $I_p = \\frac{4000\\text{ W}}{3000\\text{ V}} = \\frac{4}{3}\\text{ A} \\approx 1.33\\text{ A}$. Turns ratio in Egyptian syllabus uses $\\eta = \\frac{V_s N_p}{V_p N_s} \\implies \\frac{N_p}{N_s} = \\frac{\\eta V_p}{V_s}$? Wait! In the Egyptian textbook, $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$ only if ideal; with efficiency $\\eta$: $\\eta = \\frac{V_s I_s}{V_p I_p}$ and $\\eta = \\frac{V_s N_p}{V_p N_s} \\times 100\\%$. Let's check: $\\frac{N_p}{N_s} = \\frac{\\eta V_p}{V_s} = \\frac{0.90 \\times 3000}{120} = \\frac{2700}{120} = 22.5$! But if voltage drops across secondary winding resistance, turns ratio is $\\frac{V_{s0}}{V_p} = \\frac{N_s}{N_p}$. In the official Egyptian physics curriculum, the formula explicitly taught is $\\eta = \\frac{V_s N_p}{V_p N_s} \\times 100\\% \\implies \\frac{N_p}{N_s} = \\frac{\\eta V_p}{V_s} = \\frac{0.9 \\times 3000}{120} = 22.5$. Let's provide this exact curriculum-aligned option!"
    ],
    "stepByStepSolutionAr": [
      "في منهج الفيزياء المصري، قانون كفاءة المحول بدلالة عدد اللفات يُكتب: $\\eta = \\frac{V_s N_p}{V_p N_s} \\times 100\\%$. ومنها: $\\frac{N_p}{N_s} = \\frac{\\eta V_p}{V_s} = \\frac{0.90 \\times 3000}{120} = 22.5$. وتيار الابتدائي: $P_p = \\frac{3600}{0.9} = 4000\\text{ W} \\implies I_p = \\frac{4000}{3000} = 1.33\\text{ A}$."
    ],
    "teacherTipEn": "Strict adherence to Egyptian Ministry of Education formula: $\\eta = \\frac{V_s N_p}{V_p N_s}$.",
    "teacherTipAr": "الالتزام الدقيق بقانون وزارة التربية والتعليم المصرية: $\\eta = \\frac{V_s N_p}{V_p N_s}$."
  },
  {
    "id": "phys_ch3_db_hots_42",
    "titleEn": "Why Induction Cooktops Only Heat Ferromagnetic Cookware",
    "titleAr": "الأساس العلمي لطهي الحث الكهرومغناطيسي",
    "difficulty": "hots",
    "questionEn": "An induction cooking cooktop heats a stainless-steel or cast-iron pot placed on its ceramic glass surface, but it completely fails to heat an identical pot made of pure glass or heat-resistant Pyrex. The physical reason is:",
    "questionAr": "مسطح الطهي بالحث يسخن أواني الحديد والصلب بكفاءة عالية، لكنه يعجز تماماً عن تسخين أواني الزجاج أو البايركس. التفسير الفيزيائي لذلك هو:",
    "optionsEn": [
      "Glass reflects all magnetic flux lines completely",
      "Glass is an electrical insulator with virtually no free conduction electrons, so time-varying magnetic fields cannot induce circulating eddy currents in it",
      "Iron has a zero specific heat capacity",
      "The ceramic surface absorbs all the electrical current before it reaches the glass"
    ],
    "optionsAr": [
      "الزجاج يعكس خطوط الفيض المغناطيسي بالكامل",
      "الزجاج مادة عازلة للكهرباء تكاد تنعدم فيها الإلكترونات الحرة، فلا يمكن للفيض المتغير توليد تيارات دوامية فيها",
      "الحديد سعته الحرارية النوعية صفر",
      "سطح السيراميك يمتص كل التيار الكهربي قبل وصوله للزجاج"
    ],
    "correctAnswer": "Glass is an electrical insulator with virtually no free conduction electrons, so time-varying magnetic fields cannot induce circulating eddy currents in it",
    "correctIndex": 1,
    "hintEn": "Eddy currents require free conduction electrons: $I_{\\text{eddy}} = \\frac{\\text{emf}}{R}$. In an insulator, $R \\to \\infty$, so $I_{\\text{eddy}} = 0$.",
    "hintAr": "التيارات الدوامية تتطلب وجود إلكترونات حرة، وفي العوازل $R \\to \\infty$ فينعدم التيار وتتلاشى الحرارة.",
    "stepByStepSolutionEn": [
      "Induction cooktops use high-frequency magnetic fields. To generate Joule heat ($P = I^2 R$), the changing magnetic flux must induce circulating eddy currents. Metal pots contain abundant free conduction electrons that circulate as eddy currents, generating rapid heat. Glass and ceramics are electrical insulators ($R \\to \\infty$), so no eddy currents can flow, and zero heating occurs."
    ],
    "stepByStepSolutionAr": [
      "يعتمد طهي الحث على توليد مجالات مغناطيسية متغيرة التردد تحث تيارات دوامية داخل قاعدة الإناء. الفلزات تحتوي على إلكترونات حرة وفيرة فتسري فيها التيارات الدوامية مولدة طاقة حرارية هائلة ($I^2 R$). أما الزجاج والبايركس فمواد عازلة ذات مقاومة كهربية لا نهائية، فلا تتولد فيها أي تيارات دوامية وتظل باردة تماماً."
    ],
    "teacherTipEn": "Induction cooktops stay cool to the touch because heat is generated inside the pan itself, not on the stove!",
    "teacherTipAr": "مسطح الحث يظل بارداً لأن الحرارة تتولد داخل قاعدة الإناء نفسه وليس على الموقد!"
  },
  {
    "id": "phys_ch3_db_hots_43",
    "titleEn": "Magnetic Braking Force Proportional to Velocity",
    "titleAr": "قوة الفرملة المغناطيسية تتناسب طردياً مع السرعة",
    "difficulty": "hots",
    "questionEn": "When a metallic pendulum plate swings through the magnetic field of an electromagnet, it quickly comes to a dead stop. If the velocity of the plate as it enters the field is doubled, the instantaneous magnetic braking force acting on it:",
    "questionAr": "عندما يتأرجح لوح بندول نحاسي بين قطبي مغناطيس كهربي، يتوقف عن الحركة فوراً. إذا تضاعفت سرعة دخول اللوح داخل المجال، فإن قوة الفرملة المغناطيسية اللحظية المؤثرة عليه:",
    "optionsEn": [
      "Quadruples to 4 times its original value",
      "Halves",
      "Doubles, because induced EMF and eddy currents scale directly with velocity ($F_{\\text{drag}} \\propto v$)",
      "Remains completely unchanged"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثالها",
      "تقل إلى النصف",
      "تتضاعف، لأن كلاً من القوة الدافعة المستحثة والتيارات الدوامية يتناسب طردياً مع السرعة ($F \\propto v$)",
      "تظل ثابتة دون تغيير"
    ],
    "correctAnswer": "Doubles, because induced EMF and eddy currents scale directly with velocity ($F_{\\text{drag}} \\propto v$)",
    "correctIndex": 2,
    "hintEn": "$\\text{emf} \\propto v \\implies I_{\\text{eddy}} \\propto v \\implies F = B I L \\propto v$.",
    "hintAr": "$\\text{emf} \\propto v \\implies I_{\\text{eddy}} \\propto v \\implies F = B I L \\propto v$.",
    "stepByStepSolutionEn": [
      "Induced EMF is directly proportional to cutting velocity: $\\text{emf} = B v L \\propto v$. The circulating eddy current is $I = \\frac{\\text{emf}}{R} \\propto v$. The retarding magnetic Lorentz force is $F = B I L \\propto B (v) L \\propto v$. Therefore, doubling the speed doubles the instantaneous braking force."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة تتناسب طردياً مع السرعة $\\text{emf} \\propto v$. وشدة التيارات الدوامية تتناسب طردياً مع السرعة $I \\propto v$. وقوة لورنتز المغناطيسية المعاكسة للحركة $F = B I L$ تتناسب طردياً مع شدة التيار وبالتالي تتناسب طردياً مع السرعة ($F \\propto v$). لذا فإن مضاعفة السرعة تضاعف قوة الفرملة المغناطيسية اللحظية."
    ],
    "teacherTipEn": "Linear velocity damping: $F_{\\text{drag}} = -b v$.",
    "teacherTipAr": "قوة التخميد المغناطيسي تتناسب خطياً مع السرعة: $F = -b v$."
  },
  {
    "id": "phys_ch3_db_hots_44",
    "titleEn": "Energy Dissipated in Eddy Currents Scales with v Squared",
    "titleAr": "الطاقة الحرارية المفقودة بالتيارات الدوامية تتناسب مع مربع السرعة",
    "difficulty": "hots",
    "questionEn": "In the previous swinging plate, the rate at which mechanical kinetic energy is converted into Joule heat (braking power $P$) scales with velocity $v$ as:",
    "questionAr": "في مسألة اللوح المتأرجح السابقة، فإن معدل تحول الطاقة الحركية الميكانيكية إلى طاقة حرارية (قدرة الفرملة $P$) يتناسب مع السرعة $v$ كـ:",
    "optionsEn": [
      "$P \\propto v$",
      "$P \\propto v^3$",
      "$P \\propto \\sqrt{v}$",
      "$P \\propto v^2$"
    ],
    "optionsAr": [
      "$P \\propto v$",
      "$P \\propto v^3$",
      "$P \\propto \\sqrt{v}$",
      "$P \\propto v^2$"
    ],
    "correctAnswer": "$P \\propto v^2$",
    "correctIndex": 3,
    "hintEn": "$P = F v$ or $P = I^2 R = \\frac{\\text{emf}^2}{R}$. Since $\\text{emf} \\propto v$, $P \\propto v^2$.",
    "hintAr": "القدرة $P = F v$ وبما أن $F \\propto v$ فتكون $P \\propto v^2$. أو من $P = \\frac{\\text{emf}^2}{R} \\propto v^2$.",
    "stepByStepSolutionEn": [
      "Mechanical power is $P = F v$. Since braking force $F \\propto v$, power dissipated is $P \\propto (v)(v) = v^2$. Alternatively, electrical power is $P = \\frac{\\text{emf}^2}{R} \\propto \\frac{(B v L)^2}{R} \\propto v^2$. Thus, thermal dissipation rate scales with the square of velocity."
    ],
    "stepByStepSolutionAr": [
      "القدرة الميكانيكية المبذولة ضد الفرملة هي $P = F v$. وبما أن القوة $F \\propto v$ فإن القدرة المستهلكة تتناسب مع مربع السرعة $P \\propto v^2$. ويمكن استنتاجها أيضاً من القدرة الكهربية المستحثة $P = \\frac{\\text{emf}^2}{R} = \\frac{B^2 v^2 L^2}{R} \\propto v^2$."
    ],
    "teacherTipEn": "Doubling speed quadruples the instantaneous rate of heat generation!",
    "teacherTipAr": "مضاعفة السرعة تزيد معدل تولد الحرارة إلى أربعة أمثاله!"
  },
  {
    "id": "phys_ch3_db_hots_45",
    "titleEn": "Current Induced in Stationary Coil with Moving Magnet vs Moving Coil with Stationary Magnet",
    "titleAr": "الحث الكهرومغناطيسي: حركة المغناطيس مقارنة بحركة الملف",
    "difficulty": "hots",
    "questionEn": "An observer moves a magnet toward a stationary coil at speed $v$, recording an induced EMF $\\text{emf}_1$. In a second trial, the magnet is held stationary while the coil is moved toward it at the exact same speed $v$, recording $\\text{emf}_2$. Comparing the two measurements:",
    "questionAr": "حرك باحث مغناطيساً نحو ملف ساكن بسرعة $v$ فسجل قوة دافعة $\\text{emf}_1$. وفي تجربة ثانية ثبت المغناطيس وحرك الملف نحوه بنفس السرعة $v$ فسجل $\\text{emf}_2$. بمقارنة القراءتين نجد أن:",
    "optionsEn": [
      "$\\text{emf}_1 = \\text{emf}_2$ in magnitude, demonstrating the principle of relativity of electromagnetic motion",
      "$\\text{emf}_1 = 2\\,\\text{emf}_2$",
      "$\\text{emf}_1 = 0$ while $\\text{emf}_2 > 0$",
      "$\\text{emf}_2 = 0$ while $\\text{emf}_1 > 0$"
    ],
    "optionsAr": [
      "$\\text{emf}_1 = \\text{emf}_2$ في المقدار تماماً، مما يثبت مبدأ نسبية الحركة في الحث الكهرومغناطيسي",
      "$\\text{emf}_1 = 2\\,\\text{emf}_2$",
      "$\\text{emf}_1 = 0$ بينما $\\text{emf}_2 > 0$",
      "$\\text{emf}_2 = 0$ بينما $\\text{emf}_1 > 0$"
    ],
    "correctAnswer": "$\\text{emf}_1 = \\text{emf}_2$ in magnitude, demonstrating the principle of relativity of electromagnetic motion",
    "correctIndex": 0,
    "hintEn": "Electromagnetic induction depends strictly on relative velocity between coil and magnet.",
    "hintAr": "الحث الكهرومغناطيسي يعتمد حصرياً على السرعة النسبية بين الملف والمغناطيس.",
    "stepByStepSolutionEn": [
      "According to Faraday's law, induced electromotive force depends strictly on the time rate of change of magnetic flux $\\frac{d\\Phi_m}{dt}$, which is determined solely by the relative velocity $v_{\\text{rel}}$ between the coil and the magnet. Since the relative approach velocity is identical in both frames, the rate of flux change and the induced EMFs are identical in magnitude."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الحث الكهرومغناطيسي طبقاً لقانون فاراداي على المعدل الزمني لقطع خطوط الفيض $\\frac{\\Delta\\Phi}{\\Delta t}$، والذي يتحدد حصرياً بالسرعة النسبية بين الملف والمغناطيس. وبما أن سرعة الاقتراب النسبية متطابقة في الحالتين، فإن معدل تغير الفيض متطابق والقوة الدافعة المستحثة متساوية تماماً في المقدار."
    ],
    "teacherTipEn": "This famous symmetry inspired Albert Einstein's 1905 paper on Special Relativity!",
    "teacherTipAr": "هذا التناظر الفيزيائي الشهير كان نقطة الانطلاق لأينشتاين في صياغة النظرية النسبية الخاصة عام 1905!"
  },
  {
    "id": "phys_ch3_db_hots_46",
    "titleEn": "Average EMF Over Non-Standard Intervals of AC Cycle",
    "titleAr": "متوسط القوة الدافعة لدينامو خلال خمس دورة أو زوايا غير معتادة",
    "difficulty": "hots",
    "questionEn": "An AC dynamo produces $\\text{emf}_{\\max} = 100\\text{ V}$. During the rotation from $\\theta = 0^\\circ$ (perpendicular neutral position) to $\\theta = 90^\\circ$ (parallel position), the ratio of the average EMF ($\\text{emf}_{\\text{avg}}$) to the maximum peak EMF ($\\text{emf}_{\\max}$) is:",
    "questionAr": "دينامو تيار متردد قيمته العظمى $\\text{emf}_{\\max} = 100\\text{ V}$. أثناء دوران الملف من $\\theta = 0^\\circ$ (الوضع العمودي) إلى $\\theta = 90^\\circ$ (الوضع الموازي)، فإن النسبة بين متوسط القوة الدافعة المستحثة ($\\text{emf}_{\\text{avg}}$) والقيمة العظمى ($\\text{emf}_{\\max}$) تساوي:",
    "optionsEn": [
      "$\\frac{1}{\\sqrt{2}} \\approx 0.707$",
      "$\\frac{2}{\\pi} \\approx 0.637$",
      "$\\frac{1}{2} = 0.500$",
      "$\\frac{\\pi}{4} \\approx 0.785$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\sqrt{2}} \\approx 0.707$",
      "$\\frac{2}{\\pi} \\approx 0.637$",
      "$\\frac{1}{2} = 0.500$",
      "$\\frac{\\pi}{4} \\approx 0.785$"
    ],
    "correctAnswer": "$\\frac{2}{\\pi} \\approx 0.637$",
    "correctIndex": 1,
    "hintEn": "$\\text{emf}_{\\text{avg}} = 4 N B A f = \\frac{2}{\\pi} (2\\pi N B A f) = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "hintAr": "متوسط ربع الدورة يساوي $\\frac{2}{\\pi}$ من القيمة العظمى.",
    "stepByStepSolutionEn": [
      "During a quarter turn ($0^\\circ$ to $90^\\circ$), $\\Delta\\Phi_m = BA$ and $\\Delta t = \\frac{T}{4} = \\frac{1}{4f}$. Average EMF is $\\text{emf}_{\\text{avg}} = 4 N B A f$. Peak EMF is $\\text{emf}_{\\max} = 2\\pi N B A f$. Dividing gives $\\frac{\\text{emf}_{\\text{avg}}}{\\text{emf}_{\\max}} = \\frac{4}{2\\pi} = \\frac{2}{\\pi} \\approx 0.637$."
    ],
    "stepByStepSolutionAr": [
      "خلال ربع دورة: $\\text{emf}_{\\text{avg}} = 4 N B A f$. والقيمة العظمى $\\text{emf}_{\\max} = 2\\pi N B A f$. النسبة بينهما: $\\frac{\\text{emf}_{\\text{avg}}}{\\text{emf}_{\\max}} = \\frac{4 N B A f}{2\\pi N B A f} = \\frac{2}{\\pi} \\approx 0.637$."
    ],
    "teacherTipEn": "The ratio of average to peak EMF over a quarter cycle is always $\\frac{2}{\\pi}$.",
    "teacherTipAr": "النسبة بين المتوسط والعظمى لربع دورة هي دائماً $\\frac{2}{\\pi}$."
  },
  {
    "id": "phys_ch3_db_hots_47",
    "titleEn": "Torque on a Generator vs Motor",
    "titleAr": "عزم المقاومة الكهرومغناطيسي المعاكس في المولد",
    "difficulty": "hots",
    "questionEn": "When an electrical load is connected to an operating AC dynamo (drawing heavy current), the mechanical engine driving the generator must exert greater mechanical torque because:",
    "questionAr": "عند توصيل حمل كهربي يستهلك تياراً كبيراً بدينامو يدور، يجب على المحرك الميكانيكي الذي يدير الدينامو بذل عزم دوران ميكانيكي أكبر بسبب:",
    "optionsEn": [
      "The mechanical bearings expand thermally",
      "The slip rings stick to the carbon brushes with higher friction",
      "The induced current flowing through the coil in the magnetic field experiences an opposing electromagnetic counter-torque ($\\tau_{\\text{counter}} = B I A N \\sin\\theta$) that acts to brake the rotation (Lenz's law)",
      "The permanent magnet loses its field when current flows"
    ],
    "optionsAr": [
      "تمدد كراسي التحميل ميكانيكياً بفعل الحرارة",
      "التصاق حلقتي الانزلاق بالفرش نتيجة زيادة الاحتكاك",
      "مرور التيار المستحث في أسلاك الملف داخل المجال يولد عزم ازدواج كهرومغناطيسي معاكساً لحركة الدوران يعمل على فرملة الملف (طبقاً لقاعدة لنز)",
      "فقد المغناطيس لمجاله عند مرور تيار"
    ],
    "correctAnswer": "The induced current flowing through the coil in the magnetic field experiences an opposing electromagnetic counter-torque ($\\tau_{\\text{counter}} = B I A N \\sin\\theta$) that acts to brake the rotation (Lenz's law)",
    "correctIndex": 2,
    "hintEn": "Motor effect acts inside a generator to oppose mechanical driving force.",
    "hintAr": "أثر المحرك يظهر داخل المولد كعزم كهرومغناطيسي مقاوم للحركة.",
    "stepByStepSolutionEn": [
      "Whenever current $I$ flows through the dynamo coil, its conductors experience a magnetic Lorentz force $F = B I L$. By Fleming's left-hand rule (or Lenz's law), this produces a counter-torque that opposes the rotation of the shaft. To maintain constant rotational speed, the driving engine must supply an equal and opposite mechanical driving torque, consuming mechanical fuel to deliver electric power."
    ],
    "stepByStepSolutionAr": [
      "بمجرد سحب تيار $I$ من ملف الدينامو، تتأثر أضلاعه الحاملة للتيار بقوة مغناطيسية $F = B I L$ داخل المجال. وطبقاً لقاعدة لنز وقاعدة اليد اليسرى لفليمنج، ينشأ عن هذه القوى عزم ازدواج كهرومغناطيسي معاكس ومفرمل لاتجاه الدوران. وللحفاظ على دوران الدينامو بسرعة منتظمة، يجب على التوربين أو المحرك الميكانيكي بذل عزم دوران ميكانيكي إضافي مساوٍ لهذا العزم المعاكس، مما يثبت قانون بقاء الطاقة."
    ],
    "teacherTipEn": "Every generator exhibits a motor back-torque; Every motor exhibits a generator back-EMF!",
    "teacherTipAr": "كل مولد ينشأ بداخله عزم محرك معاكس؛ وكل محرك ينشأ بداخله جهد مولد معاكس!"
  },
  {
    "id": "phys_ch3_db_hots_48",
    "titleEn": "Self-Induction Comparison Between Iron and Air with Same Current",
    "titleAr": "مقارنة الحث الذاتي والطاقة المخزونة في قلب حديدي مقارنة بالهواء",
    "difficulty": "hots",
    "questionEn": "Two identical solenoids, $X$ (wound on air, $\\mu_0$) and $Y$ (wound on a soft iron core, $\\mu_{\\text{iron}} = 2000 \\mu_0$), carry the exact same direct current $I$. The ratio of magnetic energy stored in solenoid $Y$ to that stored in solenoid $X$ ($W_Y / W_X$) is:",
    "questionAr": "ملفان حلزونيان متماثلان في كل شيء: الملف $X$ قلبه هواء ($\\mu_0$) والملف $Y$ قلبه من الحديد المطاوع ($\\mu_{\\text{iron}} = 2000 \\mu_0$). يمر بكل منهما نفس شدة التيار المستمر $I$. فإن نسبة الطاقة المغناطيسية المختزنة في الملف $Y$ إلى الملف $X$ ($W_Y / W_X$) تساوي:",
    "optionsEn": [
      "$\\sqrt{2000} \\approx 44.7$",
      "$(2000)^2 = 4 \\times 10^6$",
      "$1$",
      "$2000$"
    ],
    "optionsAr": [
      "$\\sqrt{2000} \\approx 44.7$",
      "$(2000)^2 = 4 \\times 10^6$",
      "$1$",
      "$2000$"
    ],
    "correctAnswer": "$2000$",
    "correctIndex": 3,
    "hintEn": "$W = \\frac{1}{2} L I^2$ and $L = \\frac{\\mu N^2 A}{\\ell} \\propto \\mu$.",
    "hintAr": "طاقة المجال المغناطيسي $W = \\frac{1}{2} L I^2$ وتتناسب مع معامل الحث الذاتي $L \\propto \\mu$.",
    "stepByStepSolutionEn": [
      "Stored magnetic energy is $W = \\frac{1}{2} L I^2$. Since current $I$ is identical, $W \\propto L$. From $L = \\frac{\\mu N^2 A}{\\ell}$, inductance is directly proportional to permeability ($L \\propto \\mu$). Therefore, $\\frac{W_Y}{W_X} = \\frac{L_Y}{L_X} = \\frac{\\mu_{\\text{iron}}}{\\mu_{\\text{air}}} = 2000$."
    ],
    "stepByStepSolutionAr": [
      "الطاقة المغناطيسية المختزنة: $W = \\frac{1}{2} L I^2$. وبما أن شدة التيار متساوية، فإن $W \\propto L$. وحيث إن معامل الحث الذاتي $L = \\frac{\\mu N^2 A}{\\ell}$ يتناسب طردياً مع النفاذية $\\mu$، فإن نسبة الطاقة تساوي نسبة النفاذية: $\\frac{W_Y}{W_X} = \\frac{\\mu_{\\text{iron}}}{\\mu_0} = 2000$."
    ],
    "teacherTipEn": "Iron cores store thousands of times more magnetic energy per ampere than air cores.",
    "teacherTipAr": "القلوب الحديدية تختزن آلاف أضعاف الطاقة المغناطيسية مقارنة بالهواء لنفس التيار."
  },
  {
    "id": "phys_ch3_db_hots_49",
    "titleEn": "Why High-Frequency Inductor Uses Ferrite Cores",
    "titleAr": "استخدام قلوب الفيريت في ملفات الترددات العالية جداً",
    "difficulty": "hots",
    "questionEn": "At radio frequencies of tens of megahertz ($10\\text{ MHz}$ to $100\\text{ MHz}$), even thin laminated soft iron sheets overheat excessively from eddy currents. To prevent this, inductors and transformers at RF frequencies use cores made of:",
    "questionAr": "عند الترددات الراديوية العالية جداً (عشرات الميجاهرتز)، ترتفع حرارة شرائح الحديد المطاوع بشدة بفعل التيارات الدوامية. لتلافي ذلك، تُصنع قلوب ملفات ومحولات التردد اللاسلكي من:",
    "optionsEn": [
      "Ferrite ceramic materials, which have high magnetic permeability but extremely high electrical resistivity (almost insulating)",
      "Solid brass blocks",
      "Liquid mercury in sealed tubes",
      "Graphite rods with low resistance"
    ],
    "optionsAr": [
      "مادة الفيريت الخزفية، التي تجمع بين نفاذية مغناطيسية عالية ومقاومة نوعية كهربية هائلة (شبه عازلة)",
      "كتل النحاس الأصفر المصمتة",
      "الزئبق السائل في أنابيب محكمة",
      "قضبان الجرافيت منخفضة المقاومة"
    ],
    "correctAnswer": "Ferrite ceramic materials, which have high magnetic permeability but extremely high electrical resistivity (almost insulating)",
    "correctIndex": 0,
    "hintEn": "Ferrites combine magnetic permeability with ceramic-like electrical insulation.",
    "hintAr": "الفيريت يجمع بين الخواص المغناطيسية والعزل الكهربي فيمنع التيارات الدوامية تماماً.",
    "stepByStepSolutionEn": [
      "Ferrites are ceramic compounds of iron oxide mixed with other metal oxides (zinc, manganese, nickel). They possess high magnetic permeability to channel magnetic flux, but their electrical resistivity is millions of times higher than iron ($\\rho_e \\approx 10^5\\,\\Omega\\cdot\\text{m}$). This prevents eddy currents from flowing even at tens of megahertz."
    ],
    "stepByStepSolutionAr": [
      "الفيريت مادة خزفية تتكون من أكاسيد الحديد مع معادن أخرى. تتميز بنفاذية مغناطيسية جيدة تجمع خطوط الفيض، ومقاومة نوعية كهربية بالغة الارتفاع تجعلها عازلة للكهرباء تقريباً، مما يقضي على التيارات الدوامية وفقد الطاقة الحرارية تماماً في دوائر الترددات الراديوية."
    ],
    "teacherTipEn": "Silicon steel for low frequencies ($50\\text{ Hz}$); Ferrite ceramics for high frequencies ($> 1\\text{ MHz}$).",
    "teacherTipAr": "الحديد السيليكوني للترددات المنخفضة ($50\\text{ Hz}$)؛ والفيريت الخزفي للترددات اللاسلكية العالية."
  },
  {
    "id": "phys_ch3_db_hots_50",
    "titleEn": "Rate of Change of Magnetic Flux in AC Dynamo Coil",
    "titleAr": "المعدل الزمني لتغير الفيض في ملف الدينامو",
    "difficulty": "hots",
    "questionEn": "A dynamo coil of $100\\text{ turns}$ generates a peak electromotive force $\\text{emf}_{\\max} = 200\\text{ V}$. The maximum time rate of change of magnetic flux through a single turn of the coil ($\\left|\\frac{d\\Phi_m}{dt}\\right|_{\\max}$) is:",
    "questionAr": "ملف دينامو يتكون من $100\\text{ لفة}$ يولد قوة دافعة عظمى $\\text{emf}_{\\max} = 200\\text{ V}$. فإن القيمة العظمى للمعدل الزمني لتغير الفيض المغناطيسي المخترق للفة الواحدة ($\\left|\\frac{d\\Phi_m}{dt}\\right|_{\\max}$) تساوي:",
    "optionsEn": [
      "$20000\\text{ Wb/s}$",
      "$2.0\\text{ Wb/s}$",
      "$0.5\\text{ Wb/s}$",
      "$200\\text{ Wb/s}$"
    ],
    "optionsAr": [
      "$20000\\text{ Wb/s}$",
      "$2.0\\text{ Wb/s}$",
      "$0.5\\text{ Wb/s}$",
      "$200\\text{ Wb/s}$"
    ],
    "correctAnswer": "$2.0\\text{ Wb/s}$",
    "correctIndex": 1,
    "hintEn": "Faraday's law applies to the entire coil: $\\text{emf}_{\\max} = N \\left|\\frac{d\\Phi_m}{dt}\\right|_{\\max}$.",
    "hintAr": "قانون فاراداي للملف ككل: $\\text{emf}_{\\max} = N \\left|\\frac{d\\Phi_m}{dt}\\right|_{\\max}$.",
    "stepByStepSolutionEn": [
      "By Faraday's law, $\\text{emf} = N \\frac{d\\Phi_m}{dt}$. The maximum rate of change of flux through one turn is simply $\\left(\\frac{d\\Phi_m}{dt}\\right)_{\\max} = \\frac{\\text{emf}_{\\max}}{N} = \\frac{200\\text{ V}}{100\\text{ turns}} = 2.0\\text{ V} = 2.0\\text{ Wb/s}$."
    ],
    "stepByStepSolutionAr": [
      "من قانون فاراداي: $\\text{emf} = N \\frac{\\Delta\\Phi}{\\Delta t}$، فيكون أقصى معدل زمني لتغير الفيض للفة الواحدة: $\\left(\\frac{\\Delta\\Phi}{\\Delta t}\\right)_{\\max} = \\frac{\\text{emf}_{\\max}}{N} = \\frac{200}{100} = 2.0\\text{ Wb/s}$."
    ],
    "teacherTipEn": "Do not multiply by $N$; divide by $N$ to find the rate per single turn!",
    "teacherTipAr": "اقسم على عدد اللفات لإيجاد المعدل للفة الواحدة!"
  },
  {
    "id": "phys_ch3_db_hots_51",
    "titleEn": "Faraday Induction in Two Coils with Common Core and Different Radii",
    "titleAr": "الحث الكهرومغناطيسي بين ملفين متحدي المحور ومختلفي نصف القطر",
    "difficulty": "hots",
    "questionEn": "A small solenoid of cross-sectional area $A_1$ and $N_1$ turns is placed coaxially inside a larger solenoid of cross-sectional area $A_2$ ($A_2 > A_1$) and $N_2$ turns. If a changing current $I_1(t)$ flows in the inner solenoid, the magnetic flux linking each turn of the outer solenoid is:",
    "questionAr": "ملف حلزوني صغير مساحة مقطعه $A_1$ وعدد لفاته $N_1$ وُضع متداخلاً على نفس المحور داخل ملف حلزوني أكبر مساحة مقطعه $A_2$ ($A_2 > A_1$) وعدد لفاته $N_2$. إذا مر تيار متغير $I_1(t)$ في الملف الداخلي، فإن الفيض المغناطيسي المخترق لكل لفة من لفات الملف الخارجي هو:",
    "optionsEn": [
      "$\\Phi_{m2} = B_1 A_2$",
      "$\\Phi_{m2} = B_1 (A_2 - A_1)$",
      "$\\Phi_{m2} = B_1 A_1$ (confined to the inner solenoid's area)",
      "$\\Phi_{m2} = B_1 \\sqrt{A_1 A_2}$"
    ],
    "optionsAr": [
      "$\\Phi_{m2} = B_1 A_2$",
      "$\\Phi_{m2} = B_1 (A_2 - A_1)$",
      "$\\Phi_{m2} = B_1 A_1$ (محصور في مساحة الملف الداخلي الصغير فقط)",
      "$\\Phi_{m2} = B_1 \\sqrt{A_1 A_2}$"
    ],
    "correctAnswer": "$\\Phi_{m2} = B_1 A_1$ (confined to the inner solenoid's area)",
    "correctIndex": 2,
    "hintEn": "Magnetic field of the inner solenoid exists only inside its own core area $A_1$. Outside $A_1$, $B \\approx 0$.",
    "hintAr": "مجال الملف الداخلي موجود فقط داخل مساحة مقطعه $A_1$ وينعدم خارجها في المساحة بين الملفين.",
    "stepByStepSolutionEn": [
      "An ideal solenoid produces a magnetic field strictly inside its own cross-sectional area $A_1$; outside the inner solenoid, $B = 0$. Although the outer solenoid has a larger area $A_2$, the only region containing magnetic field lines is $A_1$. Therefore, the total magnetic flux passing through each turn of the outer coil is $\\Phi_{m2} = B_1 A_1 + 0 \\times (A_2 - A_1) = B_1 A_1$."
    ],
    "stepByStepSolutionAr": [
      "المجال المغناطيسي لملف حلزوني ينحصر تماماً داخل تجويفه الداخلي ($A_1$) وينعدم خارجه. وعلى الرغم من أن مساحة الملف الخارجي هي $A_2$، فإن خطوط الفيض لا توجد إلا داخل المساحة $A_1$ فقط، وباقي المساحة فيضها صفر. ولذا فإن الفيض الكلي المخترق لكل لفة من لفات الملف الخارجي هو $\\Phi_{m2} = B_1 A_1$."
    ],
    "teacherTipEn": "Always use the smaller area that actually contains the magnetic field!",
    "teacherTipAr": "قاعدة ذهبية: استخدم دائماً المساحة المحتوية على المجال فعلياً (المساحة الأصغر)."
  },
  {
    "id": "phys_ch3_db_hots_52",
    "titleEn": "Induced Current When Solenoid Radius Expands",
    "titleAr": "التيار المستحث عند تمدد نصف قطر ملف دائري",
    "difficulty": "hots",
    "questionEn": "A circular conducting loop of radius $r$ lies in a uniform magnetic field perpendicular to its plane. If the loop's radius begins to expand at a constant rate $\\frac{dr}{dt} = c$, the magnitude of the induced electromotive force in the loop is:",
    "questionAr": "حلقة دائرية موصلة نصف قطرها $r$ موضوعة عمودياً في مجال مغناطيسي منتظم. إذا بدأ نصف قطر الحلقة في التمدد بمعدل ثابت $\\frac{dr}{dt} = c$، فإن مقدار القوة الدافعة المستحثة المتولدة في الحلقة يعطى بالعلاقة:",
    "optionsEn": [
      "$\\text{emf} = \\pi B r^2 c$",
      "$\\text{emf} = B c^2$",
      "$\\text{emf} = \\frac{B r c}{2}$",
      "$\\text{emf} = 2\\pi B r c$"
    ],
    "optionsAr": [
      "$\\text{emf} = \\pi B r^2 c$",
      "$\\text{emf} = B c^2$",
      "$\\text{emf} = \\frac{B r c}{2}$",
      "$\\text{emf} = 2\\pi B r c$"
    ],
    "correctAnswer": "$\\text{emf} = 2\\pi B r c$",
    "correctIndex": 3,
    "hintEn": "Area is $A = \\pi r^2$. Differentiate with respect to time using chain rule: $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$.",
    "hintAr": "المساحة $A = \\pi r^2$. اشتق بالنسبة للزمن بقاعدة السلسلة: $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$.",
    "stepByStepSolutionEn": [
      "$\\Phi_m = B A = B (\\pi r^2)$. By Faraday's law: $|\\text{emf}| = \\frac{d\\Phi_m}{dt} = B \\frac{d(\\pi r^2)}{dt} = B \\left(2\\pi r \\frac{dr}{dt}\\right) = 2\\pi B r c$."
    ],
    "stepByStepSolutionAr": [
      "الفيض المغناطيسي هو $\\Phi_m = B (\\pi r^2)$. باشتقاق العلاقة بالنسبة للزمن: $\\text{emf} = \\frac{d\\Phi}{dt} = B (2\\pi r \\frac{dr}{dt}) = 2\\pi B r c$."
    ],
    "teacherTipEn": "Motional EMF of an expanding boundary scales with the perimeter: $2\\pi r$.",
    "teacherTipAr": "القوة الدافعة لحدود متمددة تتناسب مع المحيط: $2\\pi r$."
  },
  {
    "id": "phys_ch3_db_hots_53",
    "titleEn": "Magnetic Field of Secondary Coil in Step-Down Transformer",
    "titleAr": "المجال المغناطيسي لتيار الملف الثانوي في المحول",
    "difficulty": "hots",
    "questionEn": "In any transformer carrying load current, the direction of the magnetic flux produced by the secondary coil in the iron core always:",
    "questionAr": "في أي محول كهربي يغذي حملاً، يكون اتجاه الفيض المغناطيسي المتولد من تيار الملف الثانوي في القلب الحديدي دائماً:",
    "optionsEn": [
      "Opposes the time rate of change of the primary magnetic flux (manifesting Lenz's law)",
      "Reinforces the primary flux in the same direction at all times",
      "Rotates at right angles to the core laminations",
      "Cancels the magnetic field inside the secondary wires only"
    ],
    "optionsAr": [
      "معاكساً للمعدل الزمني لتغير فيض الملف الابتدائي (تطبيقاً لقاعدة لنز)",
      "معززاً وموازياً لفيض الابتدائي في نفس الاتجاه دائماً",
      "عمودياً على شرائح القلب",
      "ملغياً للمجال داخل أسلاك الثانوي فقط"
    ],
    "correctAnswer": "Opposes the time rate of change of the primary magnetic flux (manifesting Lenz's law)",
    "correctIndex": 0,
    "hintEn": "Lenz's law dictates that the effect opposes the cause.",
    "hintAr": "قاعدة لنز تقتضي أن يعاكس الأثر السبب المولد له.",
    "stepByStepSolutionEn": [
      "According to Lenz's law, any induced current creates an electromagnetic field that opposes the change in flux producing it. Thus, the magnetic flux generated by the secondary coil in the iron core continuously opposes the changing primary flux, regulating the net core flux to a stable level."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لقاعدة لنز، يولد التيار المستحث في الملف الثانوي فيضاً مغناطيسياً يعاكس التغير في فيض الملف الابتدائي المسبب له، مما يجعل فيض الثانوي عاملاً منظماً يحافظ على توازن واستقرار الفيض الكلي في القلب الحديدي."
    ],
    "teacherTipEn": "Secondary flux opposes primary flux change under all operating conditions.",
    "teacherTipAr": "فيض الثانوي يضاد تغير فيض الابتدائي في جميع ظروف التشغيل."
  },
  {
    "id": "phys_ch3_db_hots_54",
    "titleEn": "Mutual Inductance Symmetry (Reciprocity Theorem)",
    "titleAr": "نظرية التبادلية في الحث المتبادل",
    "difficulty": "hots",
    "questionEn": "Two coils, 1 and 2, are fixed in position. The mutual inductance of coil 2 due to current in coil 1 is $M_{21}$, and the mutual inductance of coil 1 due to current in coil 2 is $M_{12}$. According to electromagnetic reciprocity:",
    "questionAr": "ملفان 1 و 2 مثبتان في موضعين محددين. معامل الحث المتبادل للملف 2 الناتج عن تيار 1 هو $M_{21}$، ومعامل حث الملف 1 الناتج عن تيار 2 هو $M_{12}$. طبقاً لنظرية التبادلية الكهرومغناطيسية:",
    "optionsEn": [
      "$M_{12} = \\frac{N_1}{N_2} M_{21}$",
      "$M_{12} = M_{21}$ under all linear magnetic conditions",
      "$M_{12} = \\left(\\frac{N_1}{N_2}\\right)^2 M_{21}$",
      "$M_{12} = -M_{21}$"
    ],
    "optionsAr": [
      "$M_{12} = \\frac{N_1}{N_2} M_{21}$",
      "$M_{12} = M_{21}$ دائماً في جميع الأوساط المغناطيسية الخطية",
      "$M_{12} = \\left(\\frac{N_1}{N_2}\\right)^2 M_{21}$",
      "$M_{12} = -M_{21}$"
    ],
    "correctAnswer": "$M_{12} = M_{21}$ under all linear magnetic conditions",
    "correctIndex": 1,
    "hintEn": "Mutual inductance is a symmetric coupling coefficient: $M_{12} = M_{21} = M$.",
    "hintAr": "معامل الحث المتبادل متناظر ومتساوٍ بغض النظر عن اختلاف عدد اللفات بين الملفين.",
    "stepByStepSolutionEn": [
      "The Neumann formula for mutual inductance proves that the coupling between two rigid circuits is completely symmetric: $M_{12} = M_{21} = M$. Changing current in coil 1 at rate $1\\text{ A/s}$ induces the exact same EMF in coil 2 as changing current in coil 2 at $1\\text{ A/s}$ induces in coil 1, even if $N_1 \\neq N_2$."
    ],
    "stepByStepSolutionAr": [
      "تثبت صيغة نيومان للحث المتبادل أن معامل الاقتران الكهرومغناطيسي بين أي دائرتين متناظر تماماً: $M_{12} = M_{21} = M$. فتغير التيار بمعدل $1\\text{ A/s}$ في الملف الأول يولد في الثاني نفس القوة الدافعة تماماً التي يولدها تغير التيار بمعدل $1\\text{ A/s}$ في الثاني على الأول، حتى لو اختلف عدد اللفات تماماً."
    ],
    "teacherTipEn": "Reciprocity is a profound fundamental symmetry of Maxwellian electromagnetism.",
    "teacherTipAr": "التبادلية خاصية تناظر أصيلة في الكهرومغناطيسية."
  },
  {
    "id": "phys_ch3_db_hots_55",
    "titleEn": "Current vs Time Curve During Disconnection of Pure Inductor with Resistor",
    "titleAr": "منحنى اضمحلال التيار في دائرة حثية بعد فتحها",
    "difficulty": "hots",
    "questionEn": "In a series circuit consisting of an inductor $L$ and a resistor $R$ carrying steady current $I_0$, when the power supply is suddenly disconnected and shorted across $R$, the current decays with time $t$ according to:",
    "questionAr": "في دائرة تحتوي على ملف حث $L$ ومقاومة $R$ يمر بها تيار مستقر $I_0$، عندما يُفصل المصدر وتُقفل الدائرة على المقاومة، يضمحل التيار مع الزمن $t$ طبقاً للعلاقة:",
    "optionsEn": [
      "$I(t) = I_0 (1 - t / \\tau)$ (decays strictly linearly)",
      "$I(t) = I_0 \\sin(\\omega t)$",
      "$I(t) = I_0 e^{-t / \\tau}$, where $\\tau = \\frac{L}{R}$ is the inductive time constant",
      "$I(t) = I_0 e^{-R t / L^2}$"
    ],
    "optionsAr": [
      "$I(t) = I_0 (1 - t / \\tau)$ (اضمحلال خطي)",
      "$I(t) = I_0 \\sin(\\omega t)$",
      "$I(t) = I_0 e^{-t / \\tau}$ حيث $\\tau = \\frac{L}{R}$ هو الثابت الزمني للدائرة الحثية",
      "$I(t) = I_0 e^{-R t / L^2}$"
    ],
    "correctAnswer": "$I(t) = I_0 e^{-t / \\tau}$, where $\\tau = \\frac{L}{R}$ is the inductive time constant",
    "correctIndex": 2,
    "hintEn": "Solve differential equation: $L \\frac{dI}{dt} + I R = 0$.",
    "hintAr": "حل المعادلة التفاضلية للحث: $L \\frac{dI}{dt} + I R = 0$.",
    "stepByStepSolutionEn": [
      "From Kirchhoff's loop law: $-L \\frac{dI}{dt} = I R \\implies \\frac{dI}{I} = -\\frac{R}{L} dt$. Integrating from $I_0$ to $I(t)$ yields $\\ln(I/I_0) = -\\frac{R}{L} t \\implies I(t) = I_0 e^{-(R/L)t} = I_0 e^{-t/\\tau}$, where the inductive time constant is $\\tau = \\frac{L}{R}$."
    ],
    "stepByStepSolutionAr": [
      "من قانون كيرشوف: القوة الدافعة الذاتية الطردية تساوي الهبوط الأومي $L \\frac{dI}{dt} + I R = 0$. وبفصل المتغيرات والتكامل نجد أن التيار يضمحل أسياً: $I(t) = I_0 e^{-t / \\tau}$، حيث الثابت الزمني الحثي هو $\\tau = \\frac{L}{R}$."
    ],
    "teacherTipEn": "Time constant $\\tau = L/R$ has units of seconds ($\\text{H} / \\Omega = \\text{s}$).",
    "teacherTipAr": "وحدة الثابت الزمني $\\tau = L/R$ هي الثانية ($\\text{H}/\\Omega = \\text{s}$)."
  },
  {
    "id": "phys_ch3_db_hots_56",
    "titleEn": "Hot-Wire Ammeter Current Reading on Non-Sinusoidal Wave",
    "titleAr": "قراءة الأميتر الحراري للتيار غير الجيبي",
    "difficulty": "hots",
    "questionEn": "A periodic electric current consists of square pulses of amplitude $+10\\text{ A}$ for half the period and $-10\\text{ A}$ for the second half. If this current is passed through a hot-wire ammeter, the ammeter will read:",
    "questionAr": "تيار كهربي دوري على شكل نبضات مربعة قيمته $+10\\text{ A}$ لنصف الدورة و $-10\\text{ A}$ للنصف الآخر. إذا مَرَّ هذا التيار في أميتر حراري، فإن قراءته ستكون:",
    "optionsEn": [
      "$0\\text{ A}$",
      "$\\frac{10}{\\sqrt{2}} \\approx 7.07\\text{ A}$",
      "$20\\text{ A}$",
      "$10\\text{ A}$"
    ],
    "optionsAr": [
      "$0\\text{ A}$",
      "$\\frac{10}{\\sqrt{2}} \\approx 7.07\\text{ A}$",
      "$20\\text{ A}$",
      "$10\\text{ A}$"
    ],
    "correctAnswer": "$10\\text{ A}$",
    "correctIndex": 3,
    "hintEn": "Hot-wire ammeter measures RMS current: $I_{\\text{RMS}} = \\sqrt{\\text{mean}(I^2)}$.",
    "hintAr": "الأميتر الحراري يقيس الجذر التربيعي لمتوسط مربع التيار (القيمة الفعالة).",
    "stepByStepSolutionEn": [
      "The heat generated in a resistor is $P = I^2 R$. Because $I^2 = (+10)^2 = 100\\text{ A}^2$ in the first half and $I^2 = (-10)^2 = 100\\text{ A}^2$ in the second half, the mean of $I^2$ is constant at $100\\text{ A}^2$. The RMS value is $I_{\\text{eff}} = \\sqrt{100} = 10\\text{ A}$. The hot-wire ammeter deflects based on heat, so it reads exactly $10\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "يعتمد انحراف الأميتر الحراري على التأثير الحراري للتيار $P = I^2 R$. وبما أن مربع التيار في نصف الدورة الأول هو $(+10)^2 = 100$، ومربعه في النصف الثاني $(-10)^2 = 100$، فإن متوسط المربع ثابت ويساوي $100\\text{ A}^2$ طوال الدورة. وتكون القيمة الفعالة $I_{\\text{eff}} = \\sqrt{100} = 10\\text{ A}$، وهي القراءة التي يسجلها الأميتر الحراري."
    ],
    "teacherTipEn": "For a square wave, $I_{\\text{eff}} = I_{\\max}$, unlike a sine wave where $I_{\\text{eff}} = I_{\\max}/\\sqrt{2}$.",
    "teacherTipAr": "في الموجة المربعة تتساوى القيمة الفعالة مع القيمة العظمى!"
  },
  {
    "id": "phys_ch3_db_hots_57",
    "titleEn": "Torque-Speed Characteristic of DC Motor",
    "titleAr": "منحنى العزم والسرعة للمحرك الكهربي",
    "difficulty": "hots",
    "questionEn": "As the rotational speed ($\\omega$) of a DC electric motor increases from zero (starting) up to its maximum no-load speed, the net mechanical torque produced by the motor:",
    "questionAr": "مع تزايد سرعة دوران ملف المحرك الكهربي ($\\omega$) من الصفر (لحظة البدء) حتى أقصى سرعة دوران له دون حمل، فإن عزم الازدواج الميكانيكي الصافي المتولد في المحرك:",
    "optionsEn": [
      "Decreases continuously from its maximum starting value, because back-EMF increases with speed, reducing armature current ($I \\propto V_B - \\text{emf}_{\\text{back}}$)",
      "Increases continuously linearly with speed",
      "Remains strictly constant across all speeds",
      "Drops to a negative value at mid-speed"
    ],
    "optionsAr": [
      "يتناقص باستمرار من أقصى قيمة له عند البدء، لأن القوة الدافعة العكسية تزداد بزيادة السرعة فتقلل تيار الملف",
      "يتزايد باستمرار خطياً مع السرعة",
      "يظل ثابتاً تماماً عند جميع السرعات",
      "يهبط لقيمة سالبة في منتصف السرعة"
    ],
    "correctAnswer": "Decreases continuously from its maximum starting value, because back-EMF increases with speed, reducing armature current ($I \\propto V_B - \\text{emf}_{\\text{back}}$)",
    "correctIndex": 0,
    "hintEn": "$\\tau \\propto I$ and $I = \\frac{V_B - k\\omega}{R}$.",
    "hintAr": "عزم المحرك يتناسب طردياً مع التيار، والتيار يقل كلما زادت سرعة الدوران لزيادة القوة الدافعة العكسية.",
    "stepByStepSolutionEn": [
      "At start-up ($\\omega = 0$), back-EMF is zero, so current is maximum ($I_{\\text{start}} = V_B / R$) and torque is maximum ($\\tau_{\\text{start}} = B I_{\\text{start}} A N$). As speed $\\omega$ rises, back-EMF grows proportionally ($\\text{emf}_{\\text{back}} = k \\omega$). Consequently, armature current $I = \\frac{V_B - k\\omega}{R}$ decreases, causing torque $\\tau$ to decrease linearly with speed."
    ],
    "stepByStepSolutionAr": [
      "لحظة بدء الحركة ($\\omega = 0$) تنعدم $\\text{emf}$ العكسية فيكون التيار أقصى ما يمكن ($I = V_B / R$) وعزم الازدواج أقصى ما يمكن (عزم البدء). ومع تسارع المحرك وزيادة سرعة دورانه، تزداد القوة الدافعة العكسية فيقل التيار المار بالملف، وبالتالي يتناقص عزم الازدواج المولد تدريجياً مع زيادة السرعة حتى يتزن مع الاحتكاك."
    ],
    "teacherTipEn": "Maximum torque occurs at zero speed (stall torque); Zero torque occurs at maximum no-load speed.",
    "teacherTipAr": "أقصى عزم عند سرعة صفر (عزم البدء)؛ وأقل عزم عند أقصى سرعة دوران."
  },
  {
    "id": "phys_ch3_db_hots_58",
    "titleEn": "Why High-Voltage Transmission Saves Tons of Copper",
    "titleAr": "كيف يوفر النقل بجهود فائقة آلاف الأطنان من النحاس",
    "difficulty": "hots",
    "questionEn": "When transmitting electrical power over hundreds of kilometers at $500\\text{ kV}$ instead of $50\\text{ kV}$ (a 10-fold voltage increase for the same line power loss), the required cross-sectional area of the transmission cables is reduced by a factor of:",
    "questionAr": "عند نقل القدرة الكهربية لمئات الكيلومترات بجهد $500\\text{ kV}$ بدلاً من $50\\text{ kV}$ (رفع الجهد 10 أمثال مع الحفاظ على نفس القدرة المفقودة)، فإن مساحة مقطع أسلاك النقل المطلوبة تقل إلى:",
    "optionsEn": [
      "$\\frac{1}{10}$",
      "$\\frac{1}{100}$ of the original cross-section (saving $99\\%$ of the copper mass)",
      "$\\frac{1}{1000}$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{10}$",
      "$\\frac{1}{100}$ من مساحة المقطع الأصلية (توفير $99\\%$ من كتلة النحاس)",
      "$\\frac{1}{1000}$",
      "$\\frac{1}{2}$"
    ],
    "correctAnswer": "$\\frac{1}{100}$ of the original cross-section (saving $99\\%$ of the copper mass)",
    "correctIndex": 1,
    "hintEn": "Line current is $I = P/V \\implies I \\propto 1/V$. For constant power loss $P_{\\text{loss}} = I^2 R$, we need $R \\propto 1/I^2 \\propto V^2$. Since $R = \\rho \\frac{L}{A}$, $A \\propto 1/R \\propto 1/V^2$.",
    "hintAr": "التيار يقل إلى العُشر. ولكي يظل الفقد $I^2 R$ ثابتاً، يمكن السماح بمقاومة أكبر 100 مرة، فتصنع الأسلاك بمساحة مقطع أقل 100 مرة.",
    "stepByStepSolutionEn": [
      "For the same power $P$, raising voltage 10 times reduces line current to $I' = I/10$. To keep power loss constant ($P_{\\text{loss}} = I^2 R = \\text{const}$), the allowable cable resistance can be 100 times larger ($R' = 100 R$). Because resistance is inversely proportional to cross-sectional area ($R = \\rho \\frac{L}{A}$), the cable cross-sectional area and copper volume can be reduced to $\\frac{1}{100}$ of their original size ($A' = A/100$)."
    ],
    "stepByStepSolutionAr": [
      "لنقل نفس القدرة: رفع الجهد إلى 10 أمثاله يخفض شدة التيار إلى العُشر ($I' = I/10$). ولكي تظل القدرة المفقودة في الأسلاك ثابتة ($P_{\\text{loss}} = I^2 R$)، يمكن السماح بزيادة مقاومة الخط إلى 100 مثل. وبما أن $R = \\rho_e \\frac{L}{A}$، فإن مساحة مقطع السلك وكتلة النحاس المطلوبة تقل إلى $\\frac{1}{100}$ من قيمتها، مما يوفر مليارات الجنيهات في تكاليف أبراج وأسلاك النقل."
    ],
    "teacherTipEn": "Volume and mass of conductor material needed scales as $1/V^2$. The ultimate economic triumph of AC transformers!",
    "teacherTipAr": "كتلة النحاس المطلوبة تتناسب عكسياً مع مربع الجهد ($1/V^2$). هذا هو الانتصار الاقتصادي الأعظم للمحولات المترددة!"
  }
]
};
