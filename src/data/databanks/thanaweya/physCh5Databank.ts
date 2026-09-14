import type { ChapterDatabank } from '../../../types/curriculum';

export const physCh5Databank: ChapterDatabank = {
  easy: [
  {
    "id": "phys_ch5_db_easy_01",
    "titleEn": "Wien Displacement Law (1)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (1)",
    "difficulty": "easy",
    "questionEn": "According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_02",
    "titleEn": "Einstein Photoelectric Equation (2)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (2)",
    "difficulty": "easy",
    "questionEn": "Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_03",
    "titleEn": "Compton Effect Characteristics (3)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (3)",
    "difficulty": "easy",
    "questionEn": "In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_04",
    "titleEn": "de Broglie Matter-Wave Duality (4)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (4)",
    "difficulty": "easy",
    "questionEn": "The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_05",
    "titleEn": "Wien Displacement Law (5)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (5)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 5] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 5] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_06",
    "titleEn": "Einstein Photoelectric Equation (6)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (6)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 6] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 6] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_07",
    "titleEn": "Compton Effect Characteristics (7)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 7] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_08",
    "titleEn": "de Broglie Matter-Wave Duality (8)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 8] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_09",
    "titleEn": "Wien Displacement Law (9)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 9] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_10",
    "titleEn": "Einstein Photoelectric Equation (10)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 10] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_11",
    "titleEn": "Compton Effect Characteristics (11)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 11] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_12",
    "titleEn": "de Broglie Matter-Wave Duality (12)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 12] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_13",
    "titleEn": "Wien Displacement Law (13)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 13] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_14",
    "titleEn": "Einstein Photoelectric Equation (14)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 14] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_15",
    "titleEn": "Compton Effect Characteristics (15)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 15] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_16",
    "titleEn": "de Broglie Matter-Wave Duality (16)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 16] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_17",
    "titleEn": "Wien Displacement Law (17)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 17] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_18",
    "titleEn": "Einstein Photoelectric Equation (18)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 18] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_19",
    "titleEn": "Compton Effect Characteristics (19)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 19] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_20",
    "titleEn": "de Broglie Matter-Wave Duality (20)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 20] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_21",
    "titleEn": "Wien Displacement Law (21)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 21] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_22",
    "titleEn": "Einstein Photoelectric Equation (22)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 22] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_23",
    "titleEn": "Compton Effect Characteristics (23)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 23] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_24",
    "titleEn": "de Broglie Matter-Wave Duality (24)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 24] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_25",
    "titleEn": "Wien Displacement Law (25)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 25] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_26",
    "titleEn": "Einstein Photoelectric Equation (26)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 26] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_27",
    "titleEn": "Compton Effect Characteristics (27)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 27] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_28",
    "titleEn": "de Broglie Matter-Wave Duality (28)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 28] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_29",
    "titleEn": "Wien Displacement Law (29)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 29] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_30",
    "titleEn": "Einstein Photoelectric Equation (30)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 30] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_31",
    "titleEn": "Compton Effect Characteristics (31)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 31] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_32",
    "titleEn": "de Broglie Matter-Wave Duality (32)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 32] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_33",
    "titleEn": "Wien Displacement Law (33)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 33] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_34",
    "titleEn": "Einstein Photoelectric Equation (34)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 34] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_35",
    "titleEn": "Compton Effect Characteristics (35)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 35] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_36",
    "titleEn": "de Broglie Matter-Wave Duality (36)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 36] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_37",
    "titleEn": "Wien Displacement Law (37)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 37] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_38",
    "titleEn": "Einstein Photoelectric Equation (38)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 38] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_39",
    "titleEn": "Compton Effect Characteristics (39)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 39] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_40",
    "titleEn": "de Broglie Matter-Wave Duality (40)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 40] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_41",
    "titleEn": "Wien Displacement Law (41)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 41] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_42",
    "titleEn": "Einstein Photoelectric Equation (42)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 42] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_43",
    "titleEn": "Compton Effect Characteristics (43)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 43] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_44",
    "titleEn": "de Broglie Matter-Wave Duality (44)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 44] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_45",
    "titleEn": "Wien Displacement Law (45)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 45] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_46",
    "titleEn": "Einstein Photoelectric Equation (46)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 46] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_47",
    "titleEn": "Compton Effect Characteristics (47)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 47] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_48",
    "titleEn": "de Broglie Matter-Wave Duality (48)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 48] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_49",
    "titleEn": "Wien Displacement Law (49)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 49] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_50",
    "titleEn": "Einstein Photoelectric Equation (50)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 50] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_51",
    "titleEn": "Compton Effect Characteristics (51)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 51] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_52",
    "titleEn": "de Broglie Matter-Wave Duality (52)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 52] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_53",
    "titleEn": "Wien Displacement Law (53)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 53] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_54",
    "titleEn": "Einstein Photoelectric Equation (54)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 54] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  },
  {
    "id": "phys_ch5_db_easy_55",
    "titleEn": "Compton Effect Characteristics (55)",
    "titleAr": "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
    "questionAr": "[مسألة متدرجة 55] في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
    "optionsEn": [
      "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
      "A shorter wavelength, higher frequency, and higher speed than $c$",
      "The identical energy, frequency, and wavelength as the incident photon",
      "Zero energy and transforms entirely into a static positron"
    ],
    "optionsAr": [
      "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
      "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
      "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
      "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
    ],
    "correctAnswer": "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
    "correctIndex": 0,
    "hintEn": "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
    "hintAr": "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
    "stepByStepSolutionEn": [
      "Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."
    ],
    "teacherTipEn": "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
    "teacherTipAr": "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
  },
  {
    "id": "phys_ch5_db_easy_56",
    "titleEn": "de Broglie Matter-Wave Duality (56)",
    "titleAr": "معادلة دي برولي وازدواجية الموجة والجسيم (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
    "questionAr": "[مسألة متدرجة 56] الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
      "$\\lambda = \\frac{h m}{v}$",
      "$\\lambda = \\frac{m v^2}{h}$",
      "$\\lambda = \\frac{h c}{m v^2}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
    "correctIndex": 0,
    "hintEn": "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
    "hintAr": "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
    "stepByStepSolutionEn": [
      "de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."
    ],
    "teacherTipEn": "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
    "teacherTipAr": "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
  },
  {
    "id": "phys_ch5_db_easy_57",
    "titleEn": "Wien Displacement Law (57)",
    "titleAr": "قانون فين لإشعاع الجسم الأسود (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
    "questionAr": "[مسألة متدرجة 57] وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
    "optionsEn": [
      "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
      "Directly proportional to the absolute temperature squared ($T^2$)",
      "Directly proportional to the surface area of the emitting body",
      "Completely independent of the temperature of the blackbody"
    ],
    "optionsAr": [
      "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
      "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
      "يتناسب طردياً مع مساحة سطح الجسم المشع",
      "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
    ],
    "correctAnswer": "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
    "hintAr": "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
    "stepByStepSolutionEn": [
      "Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."
    ],
    "teacherTipEn": "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
    "teacherTipAr": "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
  },
  {
    "id": "phys_ch5_db_easy_58",
    "titleEn": "Einstein Photoelectric Equation (58)",
    "titleAr": "معادلة أينشتاين للظاهرة الكهروضوئية (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
    "questionAr": "[مسألة متدرجة 58] فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
    "optionsEn": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "optionsAr": [
      "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
      "$h\\nu = W_e - KE_{\\max}$",
      "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
      "$h\\nu = m_e c^2 + W_e$"
    ],
    "correctAnswer": "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
    "correctIndex": 0,
    "hintEn": "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
    "hintAr": "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
    "stepByStepSolutionEn": [
      "Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."
    ],
    "teacherTipEn": "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
    "teacherTipAr": "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
  }
],
  medium: [
  {
    "id": "phys_ch5_db_medium_01",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (1)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (1)",
    "difficulty": "medium",
    "questionEn": "A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_02",
    "titleEn": "Photon Momentum and Linear Force (2)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (2)",
    "difficulty": "medium",
    "questionEn": "A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_03",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (3)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (3)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 3] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 3] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_04",
    "titleEn": "Photon Momentum and Linear Force (4)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 4] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_05",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (5)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 5] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_06",
    "titleEn": "Photon Momentum and Linear Force (6)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 6] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_07",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (7)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 7] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_08",
    "titleEn": "Photon Momentum and Linear Force (8)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 8] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_09",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (9)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 9] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_10",
    "titleEn": "Photon Momentum and Linear Force (10)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 10] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_11",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (11)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 11] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_12",
    "titleEn": "Photon Momentum and Linear Force (12)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 12] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_13",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (13)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 13] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_14",
    "titleEn": "Photon Momentum and Linear Force (14)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 14] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_15",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (15)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 15] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_16",
    "titleEn": "Photon Momentum and Linear Force (16)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 16] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_17",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (17)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 17] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_18",
    "titleEn": "Photon Momentum and Linear Force (18)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 18] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_19",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (19)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 19] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_20",
    "titleEn": "Photon Momentum and Linear Force (20)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 20] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_21",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (21)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 21] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_22",
    "titleEn": "Photon Momentum and Linear Force (22)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 22] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_23",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (23)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 23] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_24",
    "titleEn": "Photon Momentum and Linear Force (24)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 24] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_25",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (25)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 25] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_26",
    "titleEn": "Photon Momentum and Linear Force (26)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 26] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_27",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (27)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 27] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_28",
    "titleEn": "Photon Momentum and Linear Force (28)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 28] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_29",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (29)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 29] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_30",
    "titleEn": "Photon Momentum and Linear Force (30)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 30] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_31",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (31)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 31] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_32",
    "titleEn": "Photon Momentum and Linear Force (32)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 32] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_33",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (33)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 33] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_34",
    "titleEn": "Photon Momentum and Linear Force (34)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 34] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_35",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (35)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 35] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_36",
    "titleEn": "Photon Momentum and Linear Force (36)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 36] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_37",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (37)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 37] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_38",
    "titleEn": "Photon Momentum and Linear Force (38)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 38] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_39",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (39)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 39] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_40",
    "titleEn": "Photon Momentum and Linear Force (40)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 40] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_41",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (41)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 41] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_42",
    "titleEn": "Photon Momentum and Linear Force (42)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 42] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_43",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (43)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 43] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_44",
    "titleEn": "Photon Momentum and Linear Force (44)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 44] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_45",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (45)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 45] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_46",
    "titleEn": "Photon Momentum and Linear Force (46)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 46] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_47",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (47)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 47] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_48",
    "titleEn": "Photon Momentum and Linear Force (48)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 48] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_49",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (49)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 49] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_50",
    "titleEn": "Photon Momentum and Linear Force (50)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 50] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_51",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (51)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 51] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_52",
    "titleEn": "Photon Momentum and Linear Force (52)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 52] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_53",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (53)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 53] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_54",
    "titleEn": "Photon Momentum and Linear Force (54)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 54] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_55",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (55)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 55] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_56",
    "titleEn": "Photon Momentum and Linear Force (56)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 56] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_57",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (57)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 57] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  },
  {
    "id": "phys_ch5_db_medium_58",
    "titleEn": "Photon Momentum and Linear Force (58)",
    "titleAr": "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
    "questionAr": "[مسألة متدرجة 58] شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
    "optionsEn": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-7}\\text{ N}$",
      "$2 \\times 10^{-7}\\text{ N}$",
      "$1.8 \\times 10^{10}\\text{ N}$",
      "$8 \\times 10^{-7}\\text{ N}$"
    ],
    "correctAnswer": "$4 \\times 10^{-7}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a reflecting surface: $F = \\frac{2P}{c}$.",
    "hintAr": "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
    ],
    "teacherTipEn": "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
    "teacherTipAr": "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
  },
  {
    "id": "phys_ch5_db_medium_59",
    "titleEn": "Photoelectric Threshold Wavelength Calculation (59)",
    "titleAr": "حساب الطول الموجي الحرج ودالة الشغل (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
    "questionAr": "[مسألة متدرجة 59] فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
    "optionsEn": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "optionsAr": [
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$400\\text{ nm}$",
      "$500\\text{ nm}$",
      "$750\\text{ nm}$"
    ],
    "correctAnswer": "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_c = \\frac{hc}{W_e}$.",
    "hintAr": "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
    ],
    "teacherTipEn": "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
    "teacherTipAr": "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
  }
],
  hots: [
  {
    "id": "phys_ch5_db_hots_01",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (1)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (1)",
    "difficulty": "hots",
    "questionEn": "In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_02",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (2)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (2)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 2] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 2] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_03",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (3)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 3] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_04",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (4)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 4] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_05",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (5)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 5] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_06",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (6)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 6] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_07",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (7)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 7] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_08",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (8)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 8] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_09",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (9)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 9] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_10",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (10)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 10] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_11",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (11)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 11] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_12",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (12)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 12] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_13",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (13)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 13] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_14",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (14)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 14] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_15",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (15)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 15] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_16",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (16)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 16] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_17",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (17)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 17] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_18",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (18)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 18] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_19",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (19)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 19] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_20",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (20)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 20] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_21",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (21)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 21] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_22",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (22)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 22] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_23",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (23)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 23] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_24",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (24)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 24] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_25",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (25)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 25] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_26",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (26)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 26] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_27",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (27)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 27] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_28",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (28)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 28] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_29",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (29)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 29] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_30",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (30)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 30] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_31",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (31)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 31] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_32",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (32)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 32] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_33",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (33)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 33] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_34",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (34)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 34] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_35",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (35)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 35] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_36",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (36)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 36] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_37",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (37)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 37] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_38",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (38)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 38] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_39",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (39)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 39] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_40",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (40)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 40] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_41",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (41)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 41] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_42",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (42)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 42] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_43",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (43)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 43] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_44",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (44)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 44] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_45",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (45)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 45] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_46",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (46)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 46] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_47",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (47)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 47] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_48",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (48)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 48] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_49",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (49)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 49] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_50",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (50)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 50] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_51",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (51)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 51] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_52",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (52)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 52] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_53",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (53)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 53] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_54",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (54)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 54] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_55",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (55)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 55] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_56",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (56)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 56] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_57",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (57)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 57] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  },
  {
    "id": "phys_ch5_db_hots_58",
    "titleEn": "Electron Wavelength and Accelerating Voltage Relation (58)",
    "titleAr": "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
    "questionAr": "[مسألة متدرجة 58] في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
    "optionsEn": [
      "Decrease to one-half its initial value ($\\lambda / 2$)",
      "Decrease to one-fourth its initial value ($\\lambda / 4$)",
      "Double to twice its initial value ($2\\lambda$)",
      "Remain completely unaffected"
    ],
    "optionsAr": [
      "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
      "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
      "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
      "يظل ثابتاً لا يتغير"
    ],
    "correctAnswer": "Decrease to one-half its initial value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
    "hintAr": "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
    ],
    "teacherTipEn": "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
    "teacherTipAr": "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
  }
]
};
