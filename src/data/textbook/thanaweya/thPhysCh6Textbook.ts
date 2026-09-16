import type { SolvedProblem } from '../../../types/curriculum';

export const thPhysCh6SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_phys_ch6_se_01",
    "titleEn": "MoE Example 1: Hydrogen Spectrum Lyman vs Balmer Series",
    "titleAr": "مثال الوزارة ١: متسلسلات طيف الهيدروجين (ليمان وبالمر)",
    "difficulty": "easy",
    "questionEn": "Calculate the energy of the photon emitted when an electron in a hydrogen atom transitions from the third energy level ($n = 3$) to the ground state ($n = 1$). To which spectral series does this line belong, and in which electromagnetic region does it lie? ($E_1 = -13.6\\text{ eV}$)",
    "questionAr": "احسب طاقة الفوتون المنبعث عند انتقال إلكترون ذرة الهيدروجين من المستوى الثالث ($n = 3$) إلى المستوى الأرضي الأول ($n = 1$). إلى أي متسلسلات الطيف ينتمي هذا الخط، وفي أي منطقة من الطيف الكهرومغناطيسي يقع؟",
    "optionsEn": [
      "$12.09\\text{ eV}$, Lyman series, Ultraviolet region",
      "$1.89\\text{ eV}$, Balmer series, Visible light region",
      "$12.09\\text{ eV}$, Balmer series, Ultraviolet region",
      "$10.20\\text{ eV}$, Lyman series, Infrared region"
    ],
    "optionsAr": [
      "$12.09\\text{ إلكترون فولت}$، متسلسلة ليمان، منطقة الأشعة فوق البنفسجية",
      "$1.89\\text{ إلكترون فولت}$، متسلسلة بالمر، منطقة الضوء المرئي",
      "$12.09\\text{ إلكترون فولت}$، متسلسلة بالمر، منطقة فوق البنفسجية",
      "$10.20\\text{ إلكترون فولت}$، متسلسلة ليمان، منطقة تحت الحمراء"
    ],
    "correctAnswer": "$12.09\\text{ eV}$, Lyman series, Ultraviolet region",
    "correctIndex": 0,
    "hintEn": "E_n = -13.6 / n^2. E3 = -13.6 / 9 = -1.51 eV. E1 = -13.6 eV. Delta E = E3 - E1 = -1.51 - (-13.6) = 12.09 eV. Transition to n=1 is Lyman (UV).",
    "hintAr": "طاقة المستويات: $E_3 = -1.51\\text{ eV}$، $E_1 = -13.6\\text{ eV}$. طاقة الفوتون: $\\Delta E = E_3 - E_1 = 12.09\\text{ eV}$. الهبوط للمستوى الأول هو متسلسلة ليمان في نطاق الأشعة فوق البنفسجية.",
    "stepByStepSolutionEn": [
      "E_n = -13.6 / n^2. E3 = -13.6 / 9 = -1.51 eV. E1 = -13.6 eV. Delta E = E3 - E1 = -1.51 - (-13.6) = 12.09 eV. Transition to n=1 is Lyman (UV).",
      "Therefore, the correct answer is: $12.09\\text{ eV}$, Lyman series, Ultraviolet region"
    ],
    "stepByStepSolutionAr": [
      "طاقة المستويات: $E_3 = -1.51\\text{ eV}$، $E_1 = -13.6\\text{ eV}$. طاقة الفوتون: $\\Delta E = E_3 - E_1 = 12.09\\text{ eV}$. الهبوط للمستوى الأول هو متسلسلة ليمان في نطاق الأشعة فوق البنفسجية.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $12.09\\text{ إلكترون فولت}$، متسلسلة ليمان، منطقة الأشعة فوق البنفسجية"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_se_02",
    "titleEn": "MoE Example 2: Coolidge Tube Minimum X-Ray Wavelength",
    "titleAr": "مثال الوزارة ٢: أقصر طول موجي للأشعة السينية المستمرة في أنبوبة كولدج",
    "difficulty": "easy",
    "questionEn": "In a Coolidge X-ray tube, the potential difference applied between the cathode filament and tungsten target is $V = 50\\text{ kV}$. Calculate the minimum continuous X-ray wavelength ($\\lambda_{\\min}$) emitted. ($h c \\approx 1.9875 \\times 10^{-25}\\text{ J}\\cdot\\text{m}$, $e = 1.6 \\times 10^{-19}\\text{ C}$)",
    "questionAr": "في أنبوبة كولدج لتوليد الأشعة السينية، فرق الجهد المطبق بين الفتيلة والهدف $50\\text{ كيلو فولت}$. احسب أقصر طول موجي للأشعة السينية المستمرة ($\\lambda_{\\min}$).",
    "optionsEn": [
      "$0.0248\\text{ nm} = 0.248\\text{ \\AA}$",
      "$0.0496\\text{ nm} = 0.496\\text{ \\AA}$",
      "$0.0124\\text{ nm} = 0.124\\text{ \\AA}$",
      "$0.248\\text{ nm} = 2.48\\text{ \\AA}$"
    ],
    "optionsAr": [
      "$0.0248\\text{ نانومتر} = 0.248\\text{ أنجستروم}$",
      "$0.0496\\text{ نانومتر} = 0.496\\text{ أنجستروم}$",
      "$0.0124\\text{ نانومتر} = 0.124\\text{ أنجستروم}$",
      "$0.248\\text{ نانومتر} = 2.48\\text{ أنجستروم}$"
    ],
    "correctAnswer": "$0.0248\\text{ nm} = 0.248\\text{ \\AA}$",
    "correctIndex": 0,
    "hintEn": "lambda_min = hc / (e * V) = (1.9875 * 10^-25) / (1.6 * 10^-19 * 50,000) = 2.484 * 10^-11 m = 0.0248 nm.",
    "hintAr": "أقصر طول موجي مستمر: $\\lambda_{\\min} = \\frac{hc}{eV} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{50000\\text{ eV}} = 0.0248\\text{ نانومتر}$.",
    "stepByStepSolutionEn": [
      "lambda_min = hc / (e * V) = (1.9875 * 10^-25) / (1.6 * 10^-19 * 50,000) = 2.484 * 10^-11 m = 0.0248 nm.",
      "Therefore, the correct answer is: $0.0248\\text{ nm} = 0.248\\text{ \\AA}$"
    ],
    "stepByStepSolutionAr": [
      "أقصر طول موجي مستمر: $\\lambda_{\\min} = \\frac{hc}{eV} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{50000\\text{ eV}} = 0.0248\\text{ نانومتر}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0.0248\\text{ نانومتر} = 0.248\\text{ أنجستروم}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_se_03",
    "titleEn": "MoE Example 3: Characteristic vs Continuous X-Ray Spectra",
    "titleAr": "مثال الوزارة ٣: التمييز بين الطيف المستمر والطيف الخطي للأشعة السينية",
    "difficulty": "medium",
    "questionEn": "Which of the following modifications will reduce the wavelength of the characteristic (line) X-ray spectrum produced by a Coolidge tube?",
    "questionAr": "أي التعديلات الآتية تؤدي إلى تقليل الطول الموجي للطيف الخطي المميز للأشعة السينية الناتجة من أنبوبة كولدج؟",
    "optionsEn": [
      "Replacing the target metal with another of higher atomic number ($Z$)",
      "Increasing the potential difference between filament and target",
      "Increasing the filament heating current",
      "Decreasing the distance between cathode and anode"
    ],
    "optionsAr": [
      "استبدال مادة الهدف بفلز آخر له عدد ذري أكبر ($Z$)",
      "زيادة فرق الجهد بين الفتيلة ومادة الهدف",
      "زيادة شدة تيار تسخين الفتيلة",
      "تقليل المسافة بين الكاثود والأنود"
    ],
    "correctAnswer": "Replacing the target metal with another of higher atomic number ($Z$)",
    "correctIndex": 0,
    "hintEn": "Characteristic line spectrum depends solely on the target material: Delta E = h nu proportional to Z^2. Higher Z means higher Delta E and shorter characteristic wavelength.",
    "hintAr": "الطيف الخطي المميز خاصية نوعية لمادة الهدف تعتمد على العدد الذري $Z$، فبزيادة العدد الذري تزداد طاقة المستويات الداخلية ويقل الطول الموجي الخطي المميز.",
    "stepByStepSolutionEn": [
      "Characteristic line spectrum depends solely on the target material: Delta E = h nu proportional to Z^2. Higher Z means higher Delta E and shorter characteristic wavelength.",
      "Therefore, the correct answer is: Replacing the target metal with another of higher atomic number ($Z$)"
    ],
    "stepByStepSolutionAr": [
      "الطيف الخطي المميز خاصية نوعية لمادة الهدف تعتمد على العدد الذري $Z$، فبزيادة العدد الذري تزداد طاقة المستويات الداخلية ويقل الطول الموجي الخطي المميز.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: استبدال مادة الهدف بفلز آخر له عدد ذري أكبر ($Z$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_se_04",
    "titleEn": "MoE Example 4: Condition of Population Inversion in Lasers",
    "titleAr": "مثال الوزارة ٤: مفهوم وحالة الإسكان المعكوس في الليزر",
    "difficulty": "medium",
    "questionEn": "What is meant by the physical state of 'population inversion' required for laser amplification to occur?",
    "questionAr": "ما المقصود بالحالة الفيزيائية لـ 'الإسكان المعكوس' (Population Inversion) اللازمة لحدوث الفعل الليزري؟",
    "optionsEn": [
      "The state in which the number of excited atoms in a higher metastable energy level exceeds the number of atoms in the ground or lower level",
      "The state where all atoms in the active medium become completely ionized",
      "The state where atoms emit photons spontaneously at random phases",
      "The state where the temperature of the active medium drops to absolute zero"
    ],
    "optionsAr": [
      "حالة تكون فيها نسبة الذرات المثارة في مستوى شبه مستقر أعلى أكبر من عدد الذرات في المستوى الأدنى أو الأرضي",
      "الحالة التي تتأين فيها ذرات الوسط الفعال بالكامل",
      "الحالة التي تنبعث فيها الفوتونات تلقائياً وبأطوار عشوائية",
      "الحالة التي تنخفض فيها درجة حرارة الوسط الفعال للصفر المطلق"
    ],
    "correctAnswer": "The state in which the number of excited atoms in a higher metastable energy level exceeds the number of atoms in the ground or lower level",
    "correctIndex": 0,
    "hintEn": "Normally N_ground > N_excited. Laser action requires reversing this distribution (N_metastable > N_lower) by external optical or electrical pumping.",
    "hintAr": "الإسكان المعكوس هو تراكم الذرات في مستوى الطاقة شبه المستقر ذي العمر النسبي الطويل ($10^{-3}\\text{ s}$) بحيث يفوق عددها في المستويات الأدنى.",
    "stepByStepSolutionEn": [
      "Normally N_ground > N_excited. Laser action requires reversing this distribution (N_metastable > N_lower) by external optical or electrical pumping.",
      "Therefore, the correct answer is: The state in which the number of excited atoms in a higher metastable energy level exceeds the number of atoms in the ground or lower level"
    ],
    "stepByStepSolutionAr": [
      "الإسكان المعكوس هو تراكم الذرات في مستوى الطاقة شبه المستقر ذي العمر النسبي الطويل ($10^{-3}\\text{ s}$) بحيث يفوق عددها في المستويات الأدنى.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: حالة تكون فيها نسبة الذرات المثارة في مستوى شبه مستقر أعلى أكبر من عدد الذرات في المستوى الأدنى أو الأرضي"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_se_05",
    "titleEn": "MoE Example 5: He-Ne Laser Resonant Energy Transfer",
    "titleAr": "مثال الوزارة ٥: آلية نقل الطاقة بالرنين في ليزر الهيليوم-نيون",
    "difficulty": "medium",
    "questionEn": "In a Helium-Neon (He-Ne) laser, what is the primary mechanism by which Neon atoms are excited to their metastable level?",
    "questionAr": "في ليزر الهيليوم - نيون، ما هي الآلية الأساسية التي تُثار بها ذرات النيون إلى مستواها شبه المستقر لإنتاج شعاع الليزر؟",
    "optionsEn": [
      "Inelastic collisions with excited Helium atoms having nearly identical energy levels ($20.61\\text{ eV} \\approx 20.66\\text{ eV}$)",
      "Direct electrical discharge ionization of Neon atoms",
      "Absorption of visible white light from an optical flashlamp",
      "Spontaneous emission from atmospheric nitrogen"
    ],
    "optionsAr": [
      "التصادمات غير المرنة مع ذرات الهيليوم المثارة لتقارب طاقتي المستويين شبه المستقرين فيهما ($20.61\\text{ eV} \\approx 20.66\\text{ eV}$)",
      "التفريغ الكهربي المباشر لذرات النيون بواسطة الإلكترونات الحرة",
      "امتصاص ضوء أبيض مرئي من مصباح وميضي",
      "الانبعاث التلقائي للنيتروجين الجوي"
    ],
    "correctAnswer": "Inelastic collisions with excited Helium atoms having nearly identical energy levels ($20.61\\text{ eV} \\approx 20.66\\text{ eV}$)",
    "correctIndex": 0,
    "hintEn": "Electric discharge excites He to 20.61 eV. He transfers this energy via resonant collision to Ne (20.66 eV), achieving population inversion in Ne.",
    "hintAr": "تثار ذرات الهيليوم أولاً بالتفريغ الكهربي إلى $20.61\\text{ eV}$ ثم تصطدم غير مرناً بذرات النيون غير المثارة وتنقل لها الطاقة لتقارب المستويين ($20.66\\text{ eV}$).",
    "stepByStepSolutionEn": [
      "Electric discharge excites He to 20.61 eV. He transfers this energy via resonant collision to Ne (20.66 eV), achieving population inversion in Ne.",
      "Therefore, the correct answer is: Inelastic collisions with excited Helium atoms having nearly identical energy levels ($20.61\\text{ eV} \\approx 20.66\\text{ eV}$)"
    ],
    "stepByStepSolutionAr": [
      "تثار ذرات الهيليوم أولاً بالتفريغ الكهربي إلى $20.61\\text{ eV}$ ثم تصطدم غير مرناً بذرات النيون غير المثارة وتنقل لها الطاقة لتقارب المستويين ($20.66\\text{ eV}$).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: التصادمات غير المرنة مع ذرات الهيليوم المثارة لتقارب طاقتي المستويين شبه المستقرين فيهما ($20.61\\text{ eV} \\approx 20.66\\text{ eV}$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_se_06",
    "titleEn": "MoE Example 6: Holography vs Conventional Photography",
    "titleAr": "مثال الوزارة ٦: التصوير المجسم (الهولوجرام) والتصوير التقليدي",
    "difficulty": "medium",
    "questionEn": "Why can conventional photographic plates record only a flat two-dimensional image, whereas holography records a realistic three-dimensional image?",
    "questionAr": "علل: يسجل اللوح الفوتوغرافي في التصوير العادي صورة مسطحة ثنائية الأبعاد، بينما يسجل الهولوجرام صورة ثلاثية الأبعاد؟",
    "optionsEn": [
      "Conventional photography records only the intensity (amplitude squared) of light waves, while holography uses interference with a reference beam to record both amplitude and phase differences",
      "Conventional photography uses laser light while holography uses sunlight",
      "Conventional cameras record only ultraviolet light",
      "Holography eliminates all shadows completely"
    ],
    "optionsAr": [
      "التصوير العادي يسجل شدة الضوء فقط (مربع السعة) ويفقد فرق الطور، بينما الهولوجرام يسجل كلاً من شدة الضوء وفروق الطور عبر تداخل الأشعة المنعكسة مع الأشعة المرجعية",
      "التصوير العادي يستخدم الليزر بينما الهولوجرام يستخدم ضوء الشمس",
      "كاميرات التصوير العادي تسجل الأشعة فوق البنفسجية فقط",
      "الهولوجرام يلغي الظلال تماماً من الصورة"
    ],
    "correctAnswer": "Conventional photography records only the intensity (amplitude squared) of light waves, while holography uses interference with a reference beam to record both amplitude and phase differences",
    "correctIndex": 0,
    "hintEn": "Phase difference = (2 * pi / lambda) * path difference. Interference with coherent reference beam encodes depth/phase information into the hologram.",
    "hintAr": "فرق الطور $= \\frac{2\\pi}{\\lambda} \\times$ فرق المسار. يتيح تداخل الأشعة المرجعية مع الأشعة الحاملة لمعلومات الجسم تسجيل التضاريس والعمق ثلاثي الأبعاد.",
    "stepByStepSolutionEn": [
      "Phase difference = (2 * pi / lambda) * path difference. Interference with coherent reference beam encodes depth/phase information into the hologram.",
      "Therefore, the correct answer is: Conventional photography records only the intensity (amplitude squared) of light waves, while holography uses interference with a reference beam to record both amplitude and phase differences"
    ],
    "stepByStepSolutionAr": [
      "فرق الطور $= \\frac{2\\pi}{\\lambda} \\times$ فرق المسار. يتيح تداخل الأشعة المرجعية مع الأشعة الحاملة لمعلومات الجسم تسجيل التضاريس والعمق ثلاثي الأبعاد.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: التصوير العادي يسجل شدة الضوء فقط (مربع السعة) ويفقد فرق الطور، بينما الهولوجرام يسجل كلاً من شدة الضوء وفروق الطور عبر تداخل الأشعة المنعكسة مع الأشعة المرجعية"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_se_07",
    "titleEn": "MoE Example 7: Law of Mass Action in Doped Semiconductors",
    "titleAr": "مثال الوزارة ٧: قانون فعل الكتلة في أشباه الموصلات المطعمة",
    "difficulty": "medium",
    "questionEn": "A pure silicon crystal has an intrinsic carrier concentration of $n_i = 10^{10}\\text{ cm}^{-3}$. If it is doped with phosphorus atoms at a concentration of $N_d = 10^{16}\\text{ cm}^{-3}$, determine the concentration of free electrons ($n$) and holes ($p$) at thermal equilibrium.",
    "questionAr": "بلورة سيليكون نقية تركيز الإلكترونات الحرة بها $n_i = 10^{10}\\text{ cm}^{-3}$. إذا غُمست بذرات فوسفور خماسية التكافؤ بتركيز $N_d = 10^{16}\\text{ cm}^{-3}$، فاحسب تركيز الإلكترونات الحرة ($n$) وتركيز الفجوات ($p$) عند الاتزان الحراري.",
    "optionsEn": [
      "$n \\approx 10^{16}\\text{ cm}^{-3},\\, p = 10^4\\text{ cm}^{-3}$",
      "$n \\approx 10^{10}\\text{ cm}^{-3},\\, p = 10^{16}\\text{ cm}^{-3}$",
      "$n \\approx 10^{16}\\text{ cm}^{-3},\\, p = 10^6\\text{ cm}^{-3}$",
      "$n \\approx 10^8\\text{ cm}^{-3},\\, p = 10^{12}\\text{ cm}^{-3}$"
    ],
    "optionsAr": [
      "$n \\approx 10^{16}\\text{ cm}^{-3},\\, p = 10^4\\text{ cm}^{-3}$",
      "$n \\approx 10^{10}\\text{ cm}^{-3},\\, p = 10^{16}\\text{ cm}^{-3}$",
      "$n \\approx 10^{16}\\text{ cm}^{-3},\\, p = 10^6\\text{ cm}^{-3}$",
      "$n \\approx 10^8\\text{ cm}^{-3},\\, p = 10^{12}\\text{ cm}^{-3}$"
    ],
    "correctAnswer": "$n \\approx 10^{16}\\text{ cm}^{-3},\\, p = 10^4\\text{ cm}^{-3}$",
    "correctIndex": 0,
    "hintEn": "For n-type: n ≈ Nd = 10^16 cm^-3. By law of mass action: n * p = n_i^2 => p = n_i^2 / n = (10^10)^2 / 10^16 = 10^20 / 10^16 = 10^4 cm^-3.",
    "hintAr": "في البلورة السالبة $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$. ومن قانون فعل الكتلة: $n \\cdot p = n_i^2 \\implies p = \\frac{(10^{10})^2}{10^{16}} = 10^4\\text{ cm}^{-3}$.",
    "stepByStepSolutionEn": [
      "For n-type: n ≈ Nd = 10^16 cm^-3. By law of mass action: n * p = n_i^2 => p = n_i^2 / n = (10^10)^2 / 10^16 = 10^20 / 10^16 = 10^4 cm^-3.",
      "Therefore, the correct answer is: $n \\approx 10^{16}\\text{ cm}^{-3},\\, p = 10^4\\text{ cm}^{-3}$"
    ],
    "stepByStepSolutionAr": [
      "في البلورة السالبة $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$. ومن قانون فعل الكتلة: $n \\cdot p = n_i^2 \\implies p = \\frac{(10^{10})^2}{10^{16}} = 10^4\\text{ cm}^{-3}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $n \\approx 10^{16}\\text{ cm}^{-3},\\, p = 10^4\\text{ cm}^{-3}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_se_08",
    "titleEn": "MoE Example 8: Transistor Current Relations & Beta Gain",
    "titleAr": "مثال الوزارة ٨: معاملات الترانزستور (ألفا وبيتا) وتوزيع التيارات",
    "difficulty": "hots",
    "questionEn": "In an npn transistor, the emitter current is $I_E = 10\\text{ mA}$ and the base current is $I_B = 100\\,\\mu\\text{A}$. Calculate the collector current $I_C$, the current gain factor $\\beta$, and the current distribution ratio $\\alpha$.",
    "questionAr": "في ترانزستور من النوع npn، كانت شدة تيار الباعث $I_E = 10\\text{ mA}$ وشدة تيار القاعدة $I_B = 100\\,\\mu\\text{A}$. احسب تيار المجمع $I_C$ ومعامل التكبير $\\beta$ ونسبة التوزيع $\\alpha$.",
    "optionsEn": [
      "$I_C = 9.9\\text{ mA},\\, \\beta = 99,\\, \\alpha = 0.99$",
      "$I_C = 9.0\\text{ mA},\\, \\beta = 90,\\, \\alpha = 0.90$",
      "$I_C = 9.9\\text{ mA},\\, \\beta = 100,\\, \\alpha = 0.99$",
      "$I_C = 9.5\\text{ mA},\\, \\beta = 95,\\, \\alpha = 0.95$"
    ],
    "optionsAr": [
      "$I_C = 9.9\\text{ mA},\\, \\beta = 99,\\, \\alpha = 0.99$",
      "$I_C = 9.0\\text{ mA},\\, \\beta = 90,\\, \\alpha = 0.90$",
      "$I_C = 9.9\\text{ mA},\\, \\beta = 100,\\, \\alpha = 0.99$",
      "$I_C = 9.5\\text{ mA},\\, \\beta = 95,\\, \\alpha = 0.95$"
    ],
    "correctAnswer": "$I_C = 9.9\\text{ mA},\\, \\beta = 99,\\, \\alpha = 0.99$",
    "correctIndex": 0,
    "hintEn": "IB = 0.1 mA. IE = IB + IC => IC = 10 - 0.1 = 9.9 mA. beta = IC / IB = 9.9 / 0.1 = 99. alpha = IC / IE = 9.9 / 10 = 0.99.",
    "hintAr": "$I_B = 0.1\\text{ mA}$. تيار المجمع: $I_C = I_E - I_B = 9.9\\text{ mA}$. معامل التكبير: $\\beta = \\frac{I_C}{I_B} = 99$. نسبة التوزيع: $\\alpha = \\frac{I_C}{I_E} = 0.99$.",
    "stepByStepSolutionEn": [
      "IB = 0.1 mA. IE = IB + IC => IC = 10 - 0.1 = 9.9 mA. beta = IC / IB = 9.9 / 0.1 = 99. alpha = IC / IE = 9.9 / 10 = 0.99.",
      "Therefore, the correct answer is: $I_C = 9.9\\text{ mA},\\, \\beta = 99,\\, \\alpha = 0.99$"
    ],
    "stepByStepSolutionAr": [
      "$I_B = 0.1\\text{ mA}$. تيار المجمع: $I_C = I_E - I_B = 9.9\\text{ mA}$. معامل التكبير: $\\beta = \\frac{I_C}{I_B} = 99$. نسبة التوزيع: $\\alpha = \\frac{I_C}{I_E} = 0.99$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $I_C = 9.9\\text{ mA},\\, \\beta = 99,\\, \\alpha = 0.99$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_se_09",
    "titleEn": "MoE Example 9: Transistor as an Inverter (NOT Gate Switch)",
    "titleAr": "مثال الوزارة ٩: الترانزستور كمفتاح عاكس (NOT Gate)",
    "difficulty": "hots",
    "questionEn": "In a common-emitter transistor switch, $V_{CC} = 5\\text{ V}$ and $R_C = 1\\text{ k}\\Omega$. When a high input voltage (logic 1) is applied to the base, the transistor saturates with $I_C = 4.8\\text{ mA}$. Find the output voltage across the collector-emitter terminals ($V_{CE}$) and state its logic level.",
    "questionAr": "في دائرة ترانزستور ذي باعث مشترك يعمل كمفتاح، $V_{CC} = 5\\text{ V}$ و $R_C = 1\\text{ k}\\Omega$. عند تطبيق جهد دخل مرتفع على القاعدة (Logic 1)، تشبع الترانزستور ومر تيار مجمع $I_C = 4.8\\text{ mA}$. احسب جهد الخرج بين المجمع والباعث ($V_{CE}$) وحدد مستواه المنطقي.",
    "optionsEn": [
      "$V_{CE} = 0.2\\text{ V}$ (Logic 0 / Low)",
      "$V_{CE} = 4.8\\text{ V}$ (Logic 1 / High)",
      "$V_{CE} = 5.0\\text{ V}$ (Logic 1 / High)",
      "$V_{CE} = 0\\text{ V}$ (Logic 0 / Low)"
    ],
    "optionsAr": [
      "$V_{CE} = 0.2\\text{ V}$ (مستوى منطقي منخفض Logic 0)",
      "$V_{CE} = 4.8\\text{ V}$ (مستوى منطقي مرتفع Logic 1)",
      "$V_{CE} = 5.0\\text{ V}$ (مستوى منطقي مرتفع Logic 1)",
      "$V_{CE} = 0\\text{ V}$ (مستوى منطقي منخفض Logic 0)"
    ],
    "correctAnswer": "$V_{CE} = 0.2\\text{ V}$ (Logic 0 / Low)",
    "correctIndex": 0,
    "hintEn": "V_CE = V_CC - I_C * R_C = 5 - (4.8 * 10^-3 * 1000) = 5 - 4.8 = 0.2 V. High input produces low output (Inverter / NOT gate).",
    "hintAr": "معادلة الخرج: $V_{CE} = V_{CC} - I_C R_C = 5 - 4.8 = 0.2\\text{ V}$، وهو جهد صغير جداً يمثل المستوى المنطقي (0)، مما يؤكد عمل الترانزستور كعاكس.",
    "stepByStepSolutionEn": [
      "V_CE = V_CC - I_C * R_C = 5 - (4.8 * 10^-3 * 1000) = 5 - 4.8 = 0.2 V. High input produces low output (Inverter / NOT gate).",
      "Therefore, the correct answer is: $V_{CE} = 0.2\\text{ V}$ (Logic 0 / Low)"
    ],
    "stepByStepSolutionAr": [
      "معادلة الخرج: $V_{CE} = V_{CC} - I_C R_C = 5 - 4.8 = 0.2\\text{ V}$، وهو جهد صغير جداً يمثل المستوى المنطقي (0)، مما يؤكد عمل الترانزستور كعاكس.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $V_{CE} = 0.2\\text{ V}$ (مستوى منطقي منخفض Logic 0)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_se_10",
    "titleEn": "MoE Example 10: Binary to Decimal & Logic Gate Circuit Analysis",
    "titleAr": "مثال الوزارة ١٠: تحليل الدوائر المنطقية والتحويل بين الثنائي والعشري",
    "difficulty": "hots",
    "questionEn": "What is the decimal equivalent of the binary number $(1101)_2$, and what output does an AND gate produce when its inputs are $A = 1$ and $B = 0$?",
    "questionAr": "ما القيمة العشرية المكافئة للعدد الثنائي $(1101)_2$، وما الخرج الناتج من بوابة التوافق (AND Gate) عندما يكون دخلاها $A = 1$ و $B = 0$؟",
    "optionsEn": [
      "Decimal: $13$, Output: $0$",
      "Decimal: $11$, Output: $1$",
      "Decimal: $13$, Output: $1$",
      "Decimal: $15$, Output: $0$"
    ],
    "optionsAr": [
      "القيمة العشرية: $13$، والخرج: $0$",
      "القيمة العشرية: $11$، والخرج: $1$",
      "القيمة العشرية: $13$، والخرج: $1$",
      "القيمة العشرية: $15$، والخرج: $0$"
    ],
    "correctAnswer": "Decimal: $13$, Output: $0$",
    "correctIndex": 0,
    "hintEn": "Binary 1101 = 1*(2^3) + 1*(2^2) + 0*(2^1) + 1*(2^0) = 8 + 4 + 0 + 1 = 13. AND gate gives 1 only if all inputs are 1, so 1 AND 0 = 0.",
    "hintAr": "$(1101)_2 = 1 \\times 8 + 1 \\times 4 + 0 \\times 2 + 1 \\times 1 = 13$. وبوابة AND لا تعطي 1 إلا إذا كانت جميع المدخلات 1، إذن $1 \\text{ AND } 0 = 0$.",
    "stepByStepSolutionEn": [
      "Binary 1101 = 1*(2^3) + 1*(2^2) + 0*(2^1) + 1*(2^0) = 8 + 4 + 0 + 1 = 13. AND gate gives 1 only if all inputs are 1, so 1 AND 0 = 0.",
      "Therefore, the correct answer is: Decimal: $13$, Output: $0$"
    ],
    "stepByStepSolutionAr": [
      "$(1101)_2 = 1 \\times 8 + 1 \\times 4 + 0 \\times 2 + 1 \\times 1 = 13$. وبوابة AND لا تعطي 1 إلا إذا كانت جميع المدخلات 1، إذن $1 \\text{ AND } 0 = 0$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: القيمة العشرية: $13$، والخرج: $0$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];

export const thPhysCh6Exercises: SolvedProblem[] = [
  {
    "id": "th_phys_ch6_ex_01",
    "titleEn": "Exercise 1: Longest Wavelength in Lyman Series",
    "titleAr": "تمرين ١: أكبر طول موجي في متسلسلة ليمان",
    "difficulty": "easy",
    "questionEn": "Which electronic transition produces the longest wavelength (lowest frequency) photon in the Lyman spectral series of hydrogen?",
    "questionAr": "أي الانتقالات الإلكترونية الآتية يعطي أكبر طول موجي (أقل تردد) في متسلسلة ليمان لطيف الهيدروجين؟",
    "optionsEn": [
      "From $n = 2$ to $n = 1$",
      "From $n = 3$ to $n = 1$",
      "From $n = \\infty$ to $n = 1$",
      "From $n = 3$ to $n = 2$"
    ],
    "optionsAr": [
      "من المستوى $n = 2$ إلى المستوى $n = 1$",
      "من المستوى $n = 3$ إلى المستوى $n = 1$",
      "من المستوى $n = \\infty$ إلى المستوى $n = 1$",
      "من المستوى $n = 3$ إلى المستوى $n = 2$"
    ],
    "correctAnswer": "From $n = 2$ to $n = 1$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength corresponds to minimum energy transition in the Lyman series, which is n=2 to n=1.",
    "hintAr": "أكبر طول موجي يعني أقل طاقة، وفي متسلسلة ليمان أقل انتقال طاقة هو من المستوى المجاور $n = 2$ إلى $n = 1$.",
    "stepByStepSolutionEn": [
      "Longest wavelength corresponds to minimum energy transition in the Lyman series, which is n=2 to n=1.",
      "Therefore, the correct answer is: From $n = 2$ to $n = 1$"
    ],
    "stepByStepSolutionAr": [
      "أكبر طول موجي يعني أقل طاقة، وفي متسلسلة ليمان أقل انتقال طاقة هو من المستوى المجاور $n = 2$ إلى $n = 1$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: من المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_02",
    "titleEn": "Exercise 2: Balmer Series Region of Spectrum",
    "titleAr": "تمرين ٢: منطقة الطيف الكهرومغناطيسي لمتسلسلة بالمر",
    "difficulty": "easy",
    "questionEn": "In which region of the electromagnetic spectrum do the emission spectral lines of the Balmer series of hydrogen lie?",
    "questionAr": "في أي نطاق من الطيف الكهرومغناطيسي تقع خطوط الانبعاث الطيفية لمتسلسلة بالمر لذرة الهيدروجين؟",
    "optionsEn": [
      "Visible light region",
      "Ultraviolet region",
      "Infrared region",
      "X-ray region"
    ],
    "optionsAr": [
      "منطقة الضوء المرئي",
      "منطقة الأشعة فوق البنفسجية",
      "منطقة الأشعة تحت الحمراء",
      "منطقة الأشعة السينية"
    ],
    "correctAnswer": "Visible light region",
    "correctIndex": 0,
    "hintEn": "Balmer series transitions terminate at n=2 and lie in the visible spectrum (Red, Green, Blue, Violet lines).",
    "hintAr": "متسلسلة بالمر تنتج عن عودة الإلكترون للمستوى الثاني $n = 2$ وهي المتسلسلة الوحيدة التي تقع في نطاق الضوء المرئي.",
    "stepByStepSolutionEn": [
      "Balmer series transitions terminate at n=2 and lie in the visible spectrum (Red, Green, Blue, Violet lines).",
      "Therefore, the correct answer is: Visible light region"
    ],
    "stepByStepSolutionAr": [
      "متسلسلة بالمر تنتج عن عودة الإلكترون للمستوى الثاني $n = 2$ وهي المتسلسلة الوحيدة التي تقع في نطاق الضوء المرئي.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: منطقة الضوء المرئي"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_03",
    "titleEn": "Exercise 3: Origin of Continuous Spectrum in X-Rays",
    "titleAr": "تمرين ٣: سبب نشأة الطيف المستمر للأشعة السينية",
    "difficulty": "easy",
    "questionEn": "What is the physical cause of the continuous (braking) spectrum produced in a Coolidge X-ray tube?",
    "questionAr": "ما هو السبب الفيزيائي لنشأة الطيف المستمر (إشعاع الكبح أو الفرملة) في أنبوبة كولدج للأشعة السينية؟",
    "optionsEn": [
      "Deceleration of high-speed electrons due to electric field interactions with target atomic nuclei",
      "Transition of target electrons between inner energy levels",
      "Nuclear fusion in the tungsten target",
      "Thermionic emission from the filament"
    ],
    "optionsAr": [
      "تباطؤ الإلكترونات المعجلة السريعة وفقد طاقتها تدريجياً عند مرورها قرب المجال الكهربي لنوى ذرات الهدف",
      "انتقال إلكترونات مادة الهدف بين المستويات الداخلية",
      "حدوث اندماج نووي في هدف التنجستن",
      "الانبعاث الأيوني الحراري من الفتيلة"
    ],
    "correctAnswer": "Deceleration of high-speed electrons due to electric field interactions with target atomic nuclei",
    "correctIndex": 0,
    "hintEn": "Bremsstrahlung radiation arises from electrodynamic braking of colliding electrons near the heavy nucleus.",
    "hintAr": "إشعاع الفرملة ينتج عن تناقص سرعة الإلكترونات عند اقترابها من نوى ذرات التنجستن فتفقد طاقتها على دفعات في صورة فوتونات مستمرة.",
    "stepByStepSolutionEn": [
      "Bremsstrahlung radiation arises from electrodynamic braking of colliding electrons near the heavy nucleus.",
      "Therefore, the correct answer is: Deceleration of high-speed electrons due to electric field interactions with target atomic nuclei"
    ],
    "stepByStepSolutionAr": [
      "إشعاع الفرملة ينتج عن تناقص سرعة الإلكترونات عند اقترابها من نوى ذرات التنجستن فتفقد طاقتها على دفعات في صورة فوتونات مستمرة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تباطؤ الإلكترونات المعجلة السريعة وفقد طاقتها تدريجياً عند مرورها قرب المجال الكهربي لنوى ذرات الهدف"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_04",
    "titleEn": "Exercise 4: Optical Resonator in Lasers",
    "titleAr": "تمرين ٤: وظيفة التجويف الرنيني في أجهزة الليزر",
    "difficulty": "easy",
    "questionEn": "In a laser system, what is the main function of the resonant optical cavity (pair of parallel mirrors)?",
    "questionAr": "في أجهزة الليزر، ما الوظيفة الأساسية للتجويف الرنيني (زوج المرآتين المتوازيتين)؟",
    "optionsEn": [
      "To reflect emitted photons back and forth through the active medium, amplifying the beam by repeated stimulated emissions",
      "To supply electric power to the active medium",
      "To cool down the laser tube",
      "To absorb spontaneous photons completely"
    ],
    "optionsAr": [
      "عكس الفوتونات المتولدة ذهاباً وإياباً عبر الوسط الفعال لتضخيم الإشعاع عبر الانبعاث المستحث المتكرر",
      "إمداد الوسط الفعال بالطاقة الكهربية اللازمة للإثارة",
      "تبريد أنبوبة الليزر من الحرارة الزائدة",
      "امتصاص فوتونات الانبعاث التلقائي تماماً"
    ],
    "correctAnswer": "To reflect emitted photons back and forth through the active medium, amplifying the beam by repeated stimulated emissions",
    "correctIndex": 0,
    "hintEn": "The optical cavity traps coherent photons along its axis, triggering avalanche amplification via stimulated emission.",
    "hintAr": "التجويف الرنيني هو وعاء التكبير والتضخيم؛ حيث تعكس المرآتان الفوتونات عبر الوسط الفعال لتضاعف عدد الفوتونات المترابطة بالانبعاث المستحث.",
    "stepByStepSolutionEn": [
      "The optical cavity traps coherent photons along its axis, triggering avalanche amplification via stimulated emission.",
      "Therefore, the correct answer is: To reflect emitted photons back and forth through the active medium, amplifying the beam by repeated stimulated emissions"
    ],
    "stepByStepSolutionAr": [
      "التجويف الرنيني هو وعاء التكبير والتضخيم؛ حيث تعكس المرآتان الفوتونات عبر الوسط الفعال لتضاعف عدد الفوتونات المترابطة بالانبعاث المستحث.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: عكس الفوتونات المتولدة ذهاباً وإياباً عبر الوسط الفعال لتضخيم الإشعاع عبر الانبعاث المستحث المتكرر"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_se_05b",
    "titleEn": "Exercise 5: Monochromaticity Property of Laser Light",
    "titleAr": "تمرين ٥: خاصية النقاء الطيفي لأشعة الليزر",
    "difficulty": "medium",
    "questionEn": "What is meant by the 'monochromaticity' (spectral purity) of a laser beam compared to ordinary light?",
    "questionAr": "ما المقصود بخاصية 'النقاء الطيفي' لأشعة الليزر مقارنة بمصادر الضوء العادية؟",
    "optionsEn": [
      "It has an extremely narrow spectral linewidth centered on a single precise wavelength with almost zero spread",
      "It contains all colors of the rainbow simultaneously",
      "Its speed in glass is greater than regular light",
      "Its wavelength changes continuously during propagation"
    ],
    "optionsAr": [
      "يتميز بمدى طيفي ضيق جداً يكاد يتركز حول طول موجي واحد محدد دون اتساع ملحوظ",
      "يحتوي على جميع ألوان الطيف السبعة معاً بنفس الشدة",
      "سرعته في الزجاج تفوق سرعة الضوء العادي",
      "طوله الموجي يتغير باستمرار أثناء الانتشار"
    ],
    "correctAnswer": "It has an extremely narrow spectral linewidth centered on a single precise wavelength with almost zero spread",
    "correctIndex": 0,
    "hintEn": "Ordinary light has a broad spectral spread Delta lambda. Laser light has Delta lambda ≈ 0.",
    "hintAr": "النقاء الطيفي يعني تركز الشدة الإشعاعية في مدى ضيق جداً يكاد يكون طولاً موجياً واحداً $\\Delta \\lambda \\approx 0$.",
    "stepByStepSolutionEn": [
      "Ordinary light has a broad spectral spread Delta lambda. Laser light has Delta lambda ≈ 0.",
      "Therefore, the correct answer is: It has an extremely narrow spectral linewidth centered on a single precise wavelength with almost zero spread"
    ],
    "stepByStepSolutionAr": [
      "النقاء الطيفي يعني تركز الشدة الإشعاعية في مدى ضيق جداً يكاد يكون طولاً موجياً واحداً $\\Delta \\lambda \\approx 0$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: يتميز بمدى طيفي ضيق جداً يكاد يتركز حول طول موجي واحد محدد دون اتساع ملحوظ"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_06",
    "titleEn": "Exercise 6: Coherence of Laser Photons",
    "titleAr": "تمرين ٦: ترابط فوتونات شعاع الليزر زمانياً ومكانياً",
    "difficulty": "medium",
    "questionEn": "Why do photons in a laser beam maintain constant phase relationships (spatial and temporal coherence) over immense distances?",
    "questionAr": "علل: تتميز فوتونات شعاع الليزر بالترابط الزماني والمكاني وثبوت فرق الطور لمسافات شاسعة؟",
    "optionsEn": [
      "Because they are all generated by stimulated emission, triggered by identical photons with identical frequency, phase, polarization, and direction",
      "Because they are focused by convex glass lenses",
      "Because they have no electric or magnetic fields",
      "Because they are absorbed by air molecules"
    ],
    "optionsAr": [
      "لأنها تنتج جميعاً بالانبعاث المستحث الذي يولد فوتونات متطابقة تماماً في التردد والطور والاتجاه والاستقطاب مع الفوتون الحاث",
      "لأنها تُجمع بعدسات زجاجية محدبة قوية",
      "لأنها لا تحتوي على مجالات كهربية أو مغناطيسية",
      "لأن جزيئات الهواء تمتص كل الترددات المخالفة"
    ],
    "correctAnswer": "Because they are all generated by stimulated emission, triggered by identical photons with identical frequency, phase, polarization, and direction",
    "correctIndex": 0,
    "hintEn": "Stimulated emission replicates the exact quantum state (frequency, phase, and direction) of the triggering photon.",
    "hintAr": "الانبعاث المستحث يولد فوتوناً توأماً للفوتون الساقط يماثله في التردد والطور والاتجاه، فتكون الحزمة مترابطة تماماً.",
    "stepByStepSolutionEn": [
      "Stimulated emission replicates the exact quantum state (frequency, phase, and direction) of the triggering photon.",
      "Therefore, the correct answer is: Because they are all generated by stimulated emission, triggered by identical photons with identical frequency, phase, polarization, and direction"
    ],
    "stepByStepSolutionAr": [
      "الانبعاث المستحث يولد فوتوناً توأماً للفوتون الساقط يماثله في التردد والطور والاتجاه، فتكون الحزمة مترابطة تماماً.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأنها تنتج جميعاً بالانبعاث المستحث الذي يولد فوتونات متطابقة تماماً في التردد والطور والاتجاه والاستقطاب مع الفوتون الحاث"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_07",
    "titleEn": "Exercise 7: Semiconductor Electrical Conductivity vs Temperature",
    "titleAr": "تمرين ٧: أثر رفع درجة الحرارة على توصيلية شبه الموصل النقي",
    "difficulty": "medium",
    "questionEn": "When the temperature of a pure silicon crystal is raised from $0\\text{ K}$ to $300\\text{ K}$, how does its electrical conductivity change?",
    "questionAr": "عند رفع درجة حرارة بلورة سيليكون نقية من الصفر المطلق ($0\\text{ K}$) إلى درجة حرارة الغرفة ($300\\text{ K}$)، كيف تتغير توصيليتها الكهربية؟",
    "optionsEn": [
      "Increases significantly because thermal energy breaks covalent bonds, generating free electron-hole pairs",
      "Decreases because atomic lattice vibrations increase",
      "Remains strictly zero at all temperatures",
      "Drops to half its initial value"
    ],
    "optionsAr": [
      "تزداد بدرجة ملحوظة لأن الطاقة الحرارية تكسر بعض الروابط التساهمية وتولد أزواجاً من الإلكترونات الحرة والفجوات",
      "تقل لزيادة سعة اهتزاز ذرات الشبكة البلورية",
      "تظل منعدمة تماماً عند جميع درجات الحرارة",
      "تقل إلى النصف"
    ],
    "correctAnswer": "Increases significantly because thermal energy breaks covalent bonds, generating free electron-hole pairs",
    "correctIndex": 0,
    "hintEn": "Unlike metals (where heating raises resistivity), heating semiconductors increases charge carrier density n and p exponentially.",
    "hintAr": "في أشباه الموصلات، رفع الحرارة يكسر الروابط التساهمية فيزداد تركيز الإلكترونات الحرة والفجوات وترتفع التوصيلية الكهربية.",
    "stepByStepSolutionEn": [
      "Unlike metals (where heating raises resistivity), heating semiconductors increases charge carrier density n and p exponentially.",
      "Therefore, the correct answer is: Increases significantly because thermal energy breaks covalent bonds, generating free electron-hole pairs"
    ],
    "stepByStepSolutionAr": [
      "في أشباه الموصلات، رفع الحرارة يكسر الروابط التساهمية فيزداد تركيز الإلكترونات الحرة والفجوات وترتفع التوصيلية الكهربية.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تزداد بدرجة ملحوظة لأن الطاقة الحرارية تكسر بعض الروابط التساهمية وتولد أزواجاً من الإلكترونات الحرة والفجوات"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_08",
    "titleEn": "Exercise 8: Forward vs Reverse Bias in p-n Junction Diode",
    "titleAr": "تمرين ٨: التوصيل الأمامي والعكسي للوصلة الثنائية",
    "difficulty": "medium",
    "questionEn": "In forward bias of a p-n junction diode, the positive terminal of the battery is connected to:",
    "questionAr": "في حالة التوصيل الأمامي للوصلة الثنائية (p-n diode)، يُوصل القطب الموجب للبطارية بـ:",
    "optionsEn": [
      "The p-type region, reducing the internal barrier potential and thinning the depletion layer",
      "The n-type region, increasing the barrier potential",
      "Both regions simultaneously",
      "Neither region, as no battery is required"
    ],
    "optionsAr": [
      "المنطقة الموجبة (p-type)، فيعاكس الجهد الخارجي الجهد الحاجز ويقلل سمك منطقة النضوب ويسمح بمرور تيار كبير",
      "المنطقة السالبة (n-type)، فيزداد الجهد الحاجز",
      "كلا المنطقتين في نفس الوقت",
      "لا يُوصل بأي منهما"
    ],
    "correctAnswer": "The p-type region, reducing the internal barrier potential and thinning the depletion layer",
    "correctIndex": 0,
    "hintEn": "Forward bias opposes the internal barrier field, narrowing the depletion region and permitting heavy diffusion current.",
    "hintAr": "التوصيل الأمامي: الموجب مع الموجب والسالب مع السالب، فيقل اتساع المنطقة القاحلة ويتغلب الجهد الخارجي على الجهد الحاجز ويمر التيار.",
    "stepByStepSolutionEn": [
      "Forward bias opposes the internal barrier field, narrowing the depletion region and permitting heavy diffusion current.",
      "Therefore, the correct answer is: The p-type region, reducing the internal barrier potential and thinning the depletion layer"
    ],
    "stepByStepSolutionAr": [
      "التوصيل الأمامي: الموجب مع الموجب والسالب مع السالب، فيقل اتساع المنطقة القاحلة ويتغلب الجهد الخارجي على الجهد الحاجز ويمر التيار.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: المنطقة الموجبة (p-type)، فيعاكس الجهد الخارجي الجهد الحاجز ويقلل سمك منطقة النضوب ويسمح بمرور تيار كبير"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_09",
    "titleEn": "Exercise 9: Majority and Minority Carriers in p-type Silicon",
    "titleAr": "تمرين ٩: حاملات الشحنة السائدة والأقلية في شبه الموصل الموجب",
    "difficulty": "medium",
    "questionEn": "In a p-type semiconductor crystal doped with trivalent Boron atoms, what are the majority and minority charge carriers, respectively?",
    "questionAr": "في بلورة شبه موصل من النوع الموجب (p-type) مطعمة بذرات البورون ثلاثية التكافؤ، ما هي حاملات الشحنة السائدة والأقلية على الترتيب؟",
    "optionsEn": [
      "Majority: Positive holes; Minority: Free electrons",
      "Majority: Free electrons; Minority: Positive holes",
      "Both majority and minority are free electrons",
      "Both majority and minority are positive donor ions"
    ],
    "optionsAr": [
      "السائدة: الفجوات الموجبة؛ والأقلية: الإلكترونات الحرة",
      "السائدة: الإلكترونات الحرة؛ والأقلية: الفجوات الموجبة",
      "كلاهما إلكترونات حرة",
      "كلاهما أيونات مانحة موجبة"
    ],
    "correctAnswer": "Majority: Positive holes; Minority: Free electrons",
    "correctIndex": 0,
    "hintEn": "Trivalent impurity creates excess holes: p ≈ Na- (majority), while free electrons arise only from thermal bond breakage (minority).",
    "hintAr": "التطعيم بذرات ثلاثية التكافؤ يولد فجوات موجبة بكثرة كحاملات شحنة سائدة، وتكون الإلكترونات الحرة الناتجة عن الحرارة هي الأقلية.",
    "stepByStepSolutionEn": [
      "Trivalent impurity creates excess holes: p ≈ Na- (majority), while free electrons arise only from thermal bond breakage (minority).",
      "Therefore, the correct answer is: Majority: Positive holes; Minority: Free electrons"
    ],
    "stepByStepSolutionAr": [
      "التطعيم بذرات ثلاثية التكافؤ يولد فجوات موجبة بكثرة كحاملات شحنة سائدة، وتكون الإلكترونات الحرة الناتجة عن الحرارة هي الأقلية.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: السائدة: الفجوات الموجبة؛ والأقلية: الإلكترونات الحرة"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_10",
    "titleEn": "Exercise 10: Alpha and Beta Current Gain Mathematical Link",
    "titleAr": "تمرين ١٠: العلاقة الرياضية بين معامل التكبير ونسبة التوزيع للترانزستور",
    "difficulty": "medium",
    "questionEn": "If the current gain factor of a transistor is $\\beta = 49$, what is the current distribution ratio $\\alpha$?",
    "questionAr": "إذا كان معامل تكبير التيار لترانزستور $\\beta = 49$، فما هي قيمة نسبة التوزيع $\\alpha$؟",
    "optionsEn": [
      "$0.98$",
      "$0.95$",
      "$0.50$",
      "$0.49$"
    ],
    "optionsAr": [
      "$0.98$",
      "$0.95$",
      "$0.50$",
      "$0.49$"
    ],
    "correctAnswer": "$0.98$",
    "correctIndex": 0,
    "hintEn": "alpha = beta / (1 + beta) = 49 / (1 + 49) = 49 / 50 = 0.98.",
    "hintAr": "نسبة التوزيع: $\\alpha = \\frac{\\beta}{1 + \\beta} = \\frac{49}{50} = 0.98$.",
    "stepByStepSolutionEn": [
      "alpha = beta / (1 + beta) = 49 / (1 + 49) = 49 / 50 = 0.98.",
      "Therefore, the correct answer is: $0.98$"
    ],
    "stepByStepSolutionAr": [
      "نسبة التوزيع: $\\alpha = \\frac{\\beta}{1 + \\beta} = \\frac{49}{50} = 0.98$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0.98$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_11",
    "titleEn": "Exercise 11: Bremsstrahlung Continuous X-Ray Spectrum Shift with Voltage",
    "titleAr": "تمرين ١١: إزاحة الطيف المستمر للأشعة السينية بزيادة فرق الجهد",
    "difficulty": "hots",
    "questionEn": "When the potential difference across a Coolidge X-ray tube is increased, what happens to the minimum continuous wavelength $\\lambda_{\\min}$ and the intensity of the characteristic lines?",
    "questionAr": "عند زيادة فرق الجهد المطبق على أنبوبة كولدج، ماذا يحدث لأقصر طول موجي مستمر $\\lambda_{\\min}$ ولشدة خطوط الطيف المميز؟",
    "optionsEn": [
      "$\\lambda_{\\min}$ shifts to a shorter wavelength, and characteristic line intensity increases",
      "$\\lambda_{\\min}$ shifts to a longer wavelength, and line intensity decreases",
      "$\\lambda_{\\min}$ remains constant, while line intensity doubles",
      "Both remain completely unchanged"
    ],
    "optionsAr": [
      "يزاح $\\lambda_{\\min}$ نحو طول موجي أقصر (تردد أعلى)، وتزداد شدة خطوط الطيف المميز",
      "يزاح $\\lambda_{\\min}$ نحو طول موجي أطول، وتقل شدة الخطوط",
      "يظل $\\lambda_{\\min}$ ثابتاً وتتضاعف شدة الخطوط",
      "يظلان ثابتين دون أي تغيير"
    ],
    "correctAnswer": "$\\lambda_{\\min}$ shifts to a shorter wavelength, and characteristic line intensity increases",
    "correctIndex": 0,
    "hintEn": "lambda_min = hc / (eV) shifts left as V increases. High-energy electrons also have greater probability of ejecting K-shell electrons, boosting characteristic intensity.",
    "hintAr": "يزاح الطيف المستمر نحو أطوال موجية أقصر لأن $\\lambda_{\\min} \\propto \\frac{1}{V}$، وتزداد شدة الطيف المميز لزيادة احتمال انتزاع إلكترونات المستويات الداخلية.",
    "stepByStepSolutionEn": [
      "lambda_min = hc / (eV) shifts left as V increases. High-energy electrons also have greater probability of ejecting K-shell electrons, boosting characteristic intensity.",
      "Therefore, the correct answer is: $\\lambda_{\\min}$ shifts to a shorter wavelength, and characteristic line intensity increases"
    ],
    "stepByStepSolutionAr": [
      "يزاح الطيف المستمر نحو أطوال موجية أقصر لأن $\\lambda_{\\min} \\propto \\frac{1}{V}$، وتزداد شدة الطيف المميز لزيادة احتمال انتزاع إلكترونات المستويات الداخلية.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: يزاح $\\lambda_{\\min}$ نحو طول موجي أقصر (تردد أعلى)، وتزداد شدة خطوط الطيف المميز"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_12",
    "titleEn": "Exercise 12: Inelastic Collision Efficiency in He-Ne System",
    "titleAr": "تمرين ١٢: سبب اختيار غازي الهيليوم والنيون معاً في الليزر الغازي",
    "difficulty": "hots",
    "questionEn": "Why is an exact mixture of Helium and Neon (approximately $10:1$ ratio) chosen specifically for the He-Ne laser system?",
    "questionAr": "علل: يُستخدم خليط من غازي الهيليوم والنيون بنسبة (١٠ إلى ١ تقريباً) في ليزر الهيليوم-نيون؟",
    "optionsEn": [
      "Because the energy levels of their metastable excited states are remarkably close ($20.61\\text{ eV}$ for He and $20.66\\text{ eV}$ for Ne), facilitating highly efficient resonant energy transfer",
      "Because Helium and Neon react chemically to form an excimer compound",
      "Because Neon is an electrical insulator while Helium is a superconductor",
      "Because Helium prevents the laser tube from overheating"
    ],
    "optionsAr": [
      "لتقارب طاقتي المستويين شبه المستقرين فيهما ($20.61\\text{ eV}$ للهيليوم و $20.66\\text{ eV}$ للنيون)، مما يسهل نقل طاقة الإثارة بالرنين بكفاءة عالية",
      "لأنهما يتفاعلان كيميائياً لتكوين مركب نشط",
      "لأن النيون عازل للكهرباء بينما الهيليوم فائق التوصيل",
      "لأن الهيليوم يمنع الأنبوبة من الانفجار"
    ],
    "correctAnswer": "Because the energy levels of their metastable excited states are remarkably close ($20.61\\text{ eV}$ for He and $20.66\\text{ eV}$ for Ne), facilitating highly efficient resonant energy transfer",
    "correctIndex": 0,
    "hintEn": "Resonant excitation requires matching Delta E within thermal energy k_B T.",
    "hintAr": "تقارب مستويات الطاقة شبه المستقرة يتيح نقل الطاقة الحركية التصادمية إلى طاقة إثارة في النيون وتحقيق الإسكان المعكوس بسهولة.",
    "stepByStepSolutionEn": [
      "Resonant excitation requires matching Delta E within thermal energy k_B T.",
      "Therefore, the correct answer is: Because the energy levels of their metastable excited states are remarkably close ($20.61\\text{ eV}$ for He and $20.66\\text{ eV}$ for Ne), facilitating highly efficient resonant energy transfer"
    ],
    "stepByStepSolutionAr": [
      "تقارب مستويات الطاقة شبه المستقرة يتيح نقل الطاقة الحركية التصادمية إلى طاقة إثارة في النيون وتحقيق الإسكان المعكوس بسهولة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لتقارب طاقتي المستويين شبه المستقرين فيهما ($20.61\\text{ eV}$ للهيليوم و $20.66\\text{ eV}$ للنيون)، مما يسهل نقل طاقة الإثارة بالرنين بكفاءة عالية"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_13",
    "titleEn": "Exercise 13: Electrical Neutrality of Doped Semiconductors",
    "titleAr": "تمرين ١٣: التعادل الكهربي لبلورة شبه الموصل المطعمة",
    "difficulty": "hots",
    "questionEn": "Why is an n-type or p-type semiconductor crystal electrically neutral as a whole at all temperatures?",
    "questionAr": "علل: بلورة شبه الموصل من النوع السالب (n-type) أو الموجب (p-type) متعادلة كهربياً ككل؟",
    "optionsEn": [
      "Because total positive charges (holes + donor ions $N_d^+$) exactly equal total negative charges (electrons + acceptor ions $N_a^-$)",
      "Because it contains no free charges whatsoever",
      "Because it is kept inside an insulated plastic casing",
      "Because the atoms lose all their protons"
    ],
    "optionsAr": [
      "لأن مجموع الشحنات الموجبة (الفجوات + الأيونات المانحة الموجبة $N_d^+$) يساوي تماماً مجموع الشحنات السالبة (الإلكترونات الحرة + الأيونات المستقبلة السالبة $N_a^-$)",
      "لعدم احتوائها على أي شحنات حرة إطلاقاً",
      "لوجودها داخل غلاف عازل",
      "لأن ذرات الشائبة تفقد بروتوناتها"
    ],
    "correctAnswer": "Because total positive charges (holes + donor ions $N_d^+$) exactly equal total negative charges (electrons + acceptor ions $N_a^-$)",
    "correctIndex": 0,
    "hintEn": "Semiconductor crystals are composed of neutral parent atoms and neutral dopant atoms: n + Na- = p + Nd+.",
    "hintAr": "شرط التعادل الكهربي العام: $n + N_a^- = p + N_d^+$. البلورة متعادلة لأن ذرات السيليكون والشائبة متعادلة كهربياً قبل وبعد تكوين البلورة.",
    "stepByStepSolutionEn": [
      "Semiconductor crystals are composed of neutral parent atoms and neutral dopant atoms: n + Na- = p + Nd+.",
      "Therefore, the correct answer is: Because total positive charges (holes + donor ions $N_d^+$) exactly equal total negative charges (electrons + acceptor ions $N_a^-$)"
    ],
    "stepByStepSolutionAr": [
      "شرط التعادل الكهربي العام: $n + N_a^- = p + N_d^+$. البلورة متعادلة لأن ذرات السيليكون والشائبة متعادلة كهربياً قبل وبعد تكوين البلورة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن مجموع الشحنات الموجبة (الفجوات + الأيونات المانحة الموجبة $N_d^+$) يساوي تماماً مجموع الشحنات السالبة (الإلكترونات الحرة + الأيونات المستقبلة السالبة $N_a^-$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_14",
    "titleEn": "Exercise 14: OR Gate Truth Table with Multiple Inputs",
    "titleAr": "تمرين ١٤: جدول التحقيق لبوابة الاختيار OR",
    "difficulty": "hots",
    "questionEn": "An electronic control circuit uses a two-input OR logic gate. Under what condition will the output of the gate be $0$ (LOW)?",
    "questionAr": "دائرة تحكم إلكترونية تستخدم بوابة اختيار (OR Gate) ذات مدخلين. تحت أي ظرف يكون خرج البوابة صفراً (LOW)؟",
    "optionsEn": [
      "Only when both inputs are simultaneously $0$",
      "When either input is $1$",
      "When both inputs are $1$",
      "The output of an OR gate is never $0$"
    ],
    "optionsAr": [
      "فقط عندما يكون كلا المدخلين مساوياً للصفر في نفس الوقت ($0$ و $0$)",
      "عندما يكون أي من المدخلين $1$",
      "عندما يكون كلا المدخلين $1$",
      "خرج بوابة OR لا يمكن أن يكون صفراً إطلاقاً"
    ],
    "correctAnswer": "Only when both inputs are simultaneously $0$",
    "correctIndex": 0,
    "hintEn": "OR logic: Output = A + B. It produces 0 if and only if A = 0 and B = 0.",
    "hintAr": "بوابة OR تمثل مفتاحين على التوازي، فلا ينعدم الخرج إلا إذا فُتح كلا المفتاحين معاً ($A = 0$ و $B = 0$).",
    "stepByStepSolutionEn": [
      "OR logic: Output = A + B. It produces 0 if and only if A = 0 and B = 0.",
      "Therefore, the correct answer is: Only when both inputs are simultaneously $0$"
    ],
    "stepByStepSolutionAr": [
      "بوابة OR تمثل مفتاحين على التوازي، فلا ينعدم الخرج إلا إذا فُتح كلا المفتاحين معاً ($A = 0$ و $B = 0$).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: فقط عندما يكون كلا المدخلين مساوياً للصفر في نفس الوقت ($0$ و $0$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch6_ex_15",
    "titleEn": "Exercise 15: Hologram Interference Pattern Storage",
    "titleAr": "تمرين ١٥: تكوين أهداب التداخل على لوح الهولوجرام",
    "difficulty": "hots",
    "questionEn": "When a developed hologram plate is illuminated with the original coherent laser reference beam, what optical phenomenon reconstructs the 3D wavefront of the object?",
    "questionAr": "عند إضاءة لوح الهولوجرام المحمض بنفس شعاع الليزر المرجعي الأصلي، أي الظواهر الضوئية الآتية تؤدي إلى إعادة تكوين صدر الموجة ثلاثي الأبعاد للجسم؟",
    "optionsEn": [
      "Diffraction of laser light through the micro-interference fringe patterns on the plate",
      "Total internal reflection inside the glass emulsion",
      "Polarization rotation by double refraction",
      "Thermionic emission of secondary electrons"
    ],
    "optionsAr": [
      "حيود ضوء الليزر عبر أهداب التداخل الدقيقة المسجلة على اللوح والتي تعمل كشبكة حيود مجسمة",
      "الانعكاس الكلي الداخلي داخل المادة الجيلاتينية للوح",
      "دوران مستوى الاستقطاب بالانكسار المزدوج",
      "الانبعاث الأيوني الحراري للإلكترونات الثانوية"
    ],
    "correctAnswer": "Diffraction of laser light through the micro-interference fringe patterns on the plate",
    "correctIndex": 0,
    "hintEn": "The recorded interference fringes act as a complex diffraction grating, recreating the exact phase and amplitude wavefronts of the original 3D object.",
    "hintAr": "أهداب التداخل المجهرية المسجلة على اللوح تعمل كشبكة حيود متطورة، فعند سقوط الشعاع المرجعي عليها يحيد وتخرج أشعة مطابقة تماماً للمنعكسة من الجسم الأصلي.",
    "stepByStepSolutionEn": [
      "The recorded interference fringes act as a complex diffraction grating, recreating the exact phase and amplitude wavefronts of the original 3D object.",
      "Therefore, the correct answer is: Diffraction of laser light through the micro-interference fringe patterns on the plate"
    ],
    "stepByStepSolutionAr": [
      "أهداب التداخل المجهرية المسجلة على اللوح تعمل كشبكة حيود متطورة، فعند سقوط الشعاع المرجعي عليها يحيد وتخرج أشعة مطابقة تماماً للمنعكسة من الجسم الأصلي.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: حيود ضوء الليزر عبر أهداب التداخل الدقيقة المسجلة على اللوح والتي تعمل كشبكة حيود مجسمة"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];
