import type { ChapterDatabank } from '../../../types/curriculum';

export const physCh6Databank: ChapterDatabank = {
  easy: [
  {
    "id": "phys_ch6_db_easy_01",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (1)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (1)",
    "difficulty": "easy",
    "questionEn": "According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_02",
    "titleEn": "Hydrogen Spectral Series Classification (2)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (2)",
    "difficulty": "easy",
    "questionEn": "In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_03",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (3)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (3)",
    "difficulty": "easy",
    "questionEn": "In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_04",
    "titleEn": "Four Core Properties of Laser Beams (4)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (4)",
    "difficulty": "easy",
    "questionEn": "Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_05",
    "titleEn": "Semiconductor Doping (n-type and p-type) (5)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (5)",
    "difficulty": "easy",
    "questionEn": "To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_06",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (6)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (6)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 6] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 6] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_07",
    "titleEn": "Hydrogen Spectral Series Classification (7)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 7] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_08",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (8)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 8] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_09",
    "titleEn": "Four Core Properties of Laser Beams (9)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "[مسألة متدرجة 9] تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_10",
    "titleEn": "Semiconductor Doping (n-type and p-type) (10)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "[مسألة متدرجة 10] للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_11",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (11)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 11] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_12",
    "titleEn": "Hydrogen Spectral Series Classification (12)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 12] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_13",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (13)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 13] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_14",
    "titleEn": "Four Core Properties of Laser Beams (14)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "[مسألة متدرجة 14] تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_15",
    "titleEn": "Semiconductor Doping (n-type and p-type) (15)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "[مسألة متدرجة 15] للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_16",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (16)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 16] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_17",
    "titleEn": "Hydrogen Spectral Series Classification (17)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 17] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_18",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (18)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 18] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_19",
    "titleEn": "Four Core Properties of Laser Beams (19)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "[مسألة متدرجة 19] تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_20",
    "titleEn": "Semiconductor Doping (n-type and p-type) (20)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "[مسألة متدرجة 20] للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_21",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (21)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 21] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_22",
    "titleEn": "Hydrogen Spectral Series Classification (22)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 22] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_23",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (23)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 23] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_24",
    "titleEn": "Four Core Properties of Laser Beams (24)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "[مسألة متدرجة 24] تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_25",
    "titleEn": "Semiconductor Doping (n-type and p-type) (25)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "[مسألة متدرجة 25] للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_26",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (26)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 26] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_27",
    "titleEn": "Hydrogen Spectral Series Classification (27)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 27] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_28",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (28)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 28] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_29",
    "titleEn": "Four Core Properties of Laser Beams (29)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "[مسألة متدرجة 29] تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_30",
    "titleEn": "Semiconductor Doping (n-type and p-type) (30)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "[مسألة متدرجة 30] للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_31",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (31)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 31] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_32",
    "titleEn": "Hydrogen Spectral Series Classification (32)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 32] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_33",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (33)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 33] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_34",
    "titleEn": "Four Core Properties of Laser Beams (34)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "[مسألة متدرجة 34] تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_35",
    "titleEn": "Semiconductor Doping (n-type and p-type) (35)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "[مسألة متدرجة 35] للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_36",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (36)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 36] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_37",
    "titleEn": "Hydrogen Spectral Series Classification (37)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 37] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_38",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (38)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 38] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_39",
    "titleEn": "Four Core Properties of Laser Beams (39)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "[مسألة متدرجة 39] تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_40",
    "titleEn": "Semiconductor Doping (n-type and p-type) (40)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "[مسألة متدرجة 40] للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_41",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (41)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 41] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_42",
    "titleEn": "Hydrogen Spectral Series Classification (42)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 42] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_43",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (43)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 43] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_44",
    "titleEn": "Four Core Properties of Laser Beams (44)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "[مسألة متدرجة 44] تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_45",
    "titleEn": "Semiconductor Doping (n-type and p-type) (45)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "[مسألة متدرجة 45] للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_46",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (46)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 46] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_47",
    "titleEn": "Hydrogen Spectral Series Classification (47)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 47] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_48",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (48)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 48] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_49",
    "titleEn": "Four Core Properties of Laser Beams (49)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "[مسألة متدرجة 49] تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_50",
    "titleEn": "Semiconductor Doping (n-type and p-type) (50)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "[مسألة متدرجة 50] للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_51",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (51)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 51] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_52",
    "titleEn": "Hydrogen Spectral Series Classification (52)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 52] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_53",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (53)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 53] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  },
  {
    "id": "phys_ch6_db_easy_54",
    "titleEn": "Four Core Properties of Laser Beams (54)",
    "titleAr": "الخصائص الأربع الأساسية لأشعة الليزر (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
    "questionAr": "[مسألة متدرجة 54] تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
    "optionsEn": [
      "Monochromaticity, high coherence, high directionality, and high intensity",
      "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
      "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
      "High absorption coefficient, thermal ionization, and random polarization"
    ],
    "optionsAr": [
      "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
      "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
      "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
      "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
    ],
    "correctAnswer": "Monochromaticity, high coherence, high directionality, and high intensity",
    "correctIndex": 0,
    "hintEn": "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "hintAr": "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
    "stepByStepSolutionEn": [
      "Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."
    ],
    "stepByStepSolutionAr": [
      "خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
    "teacherTipAr": "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
  },
  {
    "id": "phys_ch6_db_easy_55",
    "titleEn": "Semiconductor Doping (n-type and p-type) (55)",
    "titleAr": "تطعيم أشباه الموصلات (النوع السالب والموجب) (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
    "questionAr": "[مسألة متدرجة 55] للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
    "optionsEn": [
      "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
      "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
      "Divalent alkaline earth metal (such as Calcium or Magnesium)",
      "Monovalent alkali metal (such as Sodium or Potassium)"
    ],
    "optionsAr": [
      "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
      "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
      "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
      "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
    ],
    "correctAnswer": "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
    "correctIndex": 0,
    "hintEn": "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
    "hintAr": "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
    "stepByStepSolutionEn": [
      "Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."
    ],
    "stepByStepSolutionAr": [
      "العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."
    ],
    "teacherTipEn": "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
    "teacherTipAr": "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
  },
  {
    "id": "phys_ch6_db_easy_56",
    "titleEn": "Bohr Hydrogen Energy Levels Formula (56)",
    "titleAr": "طاقة مستويات ذرة بور للهيدروجين (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
    "questionAr": "[مسألة متدرجة 56] وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
      "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
      "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
    "correctIndex": 0,
    "hintEn": "The negative sign indicates that the electron is bound to the positive nucleus.",
    "hintAr": "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
    "stepByStepSolutionEn": [
      "Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."
    ],
    "stepByStepSolutionAr": [
      "قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."
    ],
    "teacherTipEn": "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
    "teacherTipAr": "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
  },
  {
    "id": "phys_ch6_db_easy_57",
    "titleEn": "Hydrogen Spectral Series Classification (57)",
    "titleAr": "تصنيف متسلسلات طيف ذرة الهيدروجين (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
    "questionAr": "[مسألة متدرجة 57] في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
    "optionsEn": [
      "First energy level ($n = 1$) in the ultraviolet region",
      "Second energy level ($n = 2$) in the visible region (Balmer)",
      "Third energy level ($n = 3$) in the infrared region (Paschen)",
      "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
    ],
    "optionsAr": [
      "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
      "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
      "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
      "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
    ],
    "correctAnswer": "First energy level ($n = 1$) in the ultraviolet region",
    "correctIndex": 0,
    "hintEn": "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
    "hintAr": "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
    "stepByStepSolutionEn": [
      "Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."
    ],
    "stepByStepSolutionAr": [
      "متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
    "teacherTipAr": "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_easy_58",
    "titleEn": "Continuous X-Ray Minimum Wavelength (Duane-Hunt) (58)",
    "titleAr": "أقصر طول موجي لطيف الأشعة السينية المستمر (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
    "questionAr": "[مسألة متدرجة 58] في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{h c}{e V}$",
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 0,
    "hintEn": "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
    "hintAr": "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
    "stepByStepSolutionEn": [
      "Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."
    ],
    "teacherTipEn": "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
    "teacherTipAr": "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
  }
],
  medium: [
  {
    "id": "phys_ch6_db_medium_01",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (1)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (1)",
    "difficulty": "medium",
    "questionEn": "In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_02",
    "titleEn": "Transistor Current Gain and Alpha Ratio (2)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (2)",
    "difficulty": "medium",
    "questionEn": "In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_03",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (3)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (3)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 3] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 3] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_04",
    "titleEn": "Transistor Current Gain and Alpha Ratio (4)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 4] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_05",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (5)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 5] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_06",
    "titleEn": "Transistor Current Gain and Alpha Ratio (6)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 6] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_07",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (7)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 7] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_08",
    "titleEn": "Transistor Current Gain and Alpha Ratio (8)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 8] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_09",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (9)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 9] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_10",
    "titleEn": "Transistor Current Gain and Alpha Ratio (10)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 10] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_11",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (11)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 11] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_12",
    "titleEn": "Transistor Current Gain and Alpha Ratio (12)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 12] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_13",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (13)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 13] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_14",
    "titleEn": "Transistor Current Gain and Alpha Ratio (14)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 14] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_15",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (15)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 15] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_16",
    "titleEn": "Transistor Current Gain and Alpha Ratio (16)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 16] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_17",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (17)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 17] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_18",
    "titleEn": "Transistor Current Gain and Alpha Ratio (18)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 18] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_19",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (19)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 19] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_20",
    "titleEn": "Transistor Current Gain and Alpha Ratio (20)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 20] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_21",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (21)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 21] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_22",
    "titleEn": "Transistor Current Gain and Alpha Ratio (22)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 22] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_23",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (23)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 23] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_24",
    "titleEn": "Transistor Current Gain and Alpha Ratio (24)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 24] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_25",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (25)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 25] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_26",
    "titleEn": "Transistor Current Gain and Alpha Ratio (26)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 26] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_27",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (27)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 27] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_28",
    "titleEn": "Transistor Current Gain and Alpha Ratio (28)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 28] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_29",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (29)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 29] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_30",
    "titleEn": "Transistor Current Gain and Alpha Ratio (30)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 30] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_31",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (31)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 31] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_32",
    "titleEn": "Transistor Current Gain and Alpha Ratio (32)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 32] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_33",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (33)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 33] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_34",
    "titleEn": "Transistor Current Gain and Alpha Ratio (34)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 34] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_35",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (35)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 35] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_36",
    "titleEn": "Transistor Current Gain and Alpha Ratio (36)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 36] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_37",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (37)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 37] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_38",
    "titleEn": "Transistor Current Gain and Alpha Ratio (38)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 38] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_39",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (39)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 39] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_40",
    "titleEn": "Transistor Current Gain and Alpha Ratio (40)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 40] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_41",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (41)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 41] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_42",
    "titleEn": "Transistor Current Gain and Alpha Ratio (42)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 42] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_43",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (43)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 43] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_44",
    "titleEn": "Transistor Current Gain and Alpha Ratio (44)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 44] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_45",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (45)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 45] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_46",
    "titleEn": "Transistor Current Gain and Alpha Ratio (46)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 46] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_47",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (47)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 47] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_48",
    "titleEn": "Transistor Current Gain and Alpha Ratio (48)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 48] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_49",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (49)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 49] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_50",
    "titleEn": "Transistor Current Gain and Alpha Ratio (50)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 50] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_51",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (51)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 51] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_52",
    "titleEn": "Transistor Current Gain and Alpha Ratio (52)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 52] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_53",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (53)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 53] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_54",
    "titleEn": "Transistor Current Gain and Alpha Ratio (54)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 54] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_55",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (55)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 55] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_56",
    "titleEn": "Transistor Current Gain and Alpha Ratio (56)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 56] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_57",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (57)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 57] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  },
  {
    "id": "phys_ch6_db_medium_58",
    "titleEn": "Transistor Current Gain and Alpha Ratio (58)",
    "titleAr": "معامل التكبير ونسبة التوزيع في الترانزستور (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
    "questionAr": "[مسألة متدرجة 58] في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
    "optionsEn": [
      "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
    ],
    "optionsAr": [
      "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
      "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
      "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
      "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
    ],
    "correctAnswer": "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{1980}{20} = 99$.",
      "$\\alpha_e = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
    "teacherTipAr": "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_medium_59",
    "titleEn": "Maximum and Minimum Wavelength in Balmer Series (59)",
    "titleAr": "حساب أطول وأقصر طول موجي في متسلسلة بالمير (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
    "questionAr": "[مسألة متدرجة 59] في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "Level $n = 3$ to $n = 2$",
      "Level $n = \\infty$ to $n = 2$",
      "Level $n = 4$ to $n = 2$",
      "Level $n = 2$ to $n = 1$"
    ],
    "optionsAr": [
      "المستوى $n = 3$ إلى المستوى $n = 2$",
      "المستوى $n = \\infty$ إلى المستوى $n = 2$",
      "المستوى $n = 4$ إلى المستوى $n = 2$",
      "المستوى $n = 2$ إلى المستوى $n = 1$"
    ],
    "correctAnswer": "Level $n = 3$ to $n = 2$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
    "hintAr": "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
    ],
    "stepByStepSolutionAr": [
      "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
    ],
    "teacherTipEn": "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
    "teacherTipAr": "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
  }
],
  hots: [
  {
    "id": "phys_ch6_db_hots_01",
    "titleEn": "Three-Dimensional Holographic Image Recording (1)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (1)",
    "difficulty": "hots",
    "questionEn": "In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_02",
    "titleEn": "Three-Dimensional Holographic Image Recording (2)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (2)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 2] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 2] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_03",
    "titleEn": "Three-Dimensional Holographic Image Recording (3)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 3] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_04",
    "titleEn": "Three-Dimensional Holographic Image Recording (4)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 4] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_05",
    "titleEn": "Three-Dimensional Holographic Image Recording (5)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 5] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_06",
    "titleEn": "Three-Dimensional Holographic Image Recording (6)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 6] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_07",
    "titleEn": "Three-Dimensional Holographic Image Recording (7)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 7] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_08",
    "titleEn": "Three-Dimensional Holographic Image Recording (8)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 8] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_09",
    "titleEn": "Three-Dimensional Holographic Image Recording (9)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 9] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_10",
    "titleEn": "Three-Dimensional Holographic Image Recording (10)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 10] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_11",
    "titleEn": "Three-Dimensional Holographic Image Recording (11)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 11] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_12",
    "titleEn": "Three-Dimensional Holographic Image Recording (12)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 12] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_13",
    "titleEn": "Three-Dimensional Holographic Image Recording (13)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 13] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_14",
    "titleEn": "Three-Dimensional Holographic Image Recording (14)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 14] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_15",
    "titleEn": "Three-Dimensional Holographic Image Recording (15)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 15] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_16",
    "titleEn": "Three-Dimensional Holographic Image Recording (16)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 16] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_17",
    "titleEn": "Three-Dimensional Holographic Image Recording (17)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 17] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_18",
    "titleEn": "Three-Dimensional Holographic Image Recording (18)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 18] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_19",
    "titleEn": "Three-Dimensional Holographic Image Recording (19)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 19] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_20",
    "titleEn": "Three-Dimensional Holographic Image Recording (20)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 20] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_21",
    "titleEn": "Three-Dimensional Holographic Image Recording (21)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 21] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_22",
    "titleEn": "Three-Dimensional Holographic Image Recording (22)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 22] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_23",
    "titleEn": "Three-Dimensional Holographic Image Recording (23)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 23] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_24",
    "titleEn": "Three-Dimensional Holographic Image Recording (24)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 24] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_25",
    "titleEn": "Three-Dimensional Holographic Image Recording (25)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 25] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_26",
    "titleEn": "Three-Dimensional Holographic Image Recording (26)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 26] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_27",
    "titleEn": "Three-Dimensional Holographic Image Recording (27)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 27] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_28",
    "titleEn": "Three-Dimensional Holographic Image Recording (28)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 28] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_29",
    "titleEn": "Three-Dimensional Holographic Image Recording (29)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 29] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_30",
    "titleEn": "Three-Dimensional Holographic Image Recording (30)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 30] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_31",
    "titleEn": "Three-Dimensional Holographic Image Recording (31)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 31] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_32",
    "titleEn": "Three-Dimensional Holographic Image Recording (32)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 32] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_33",
    "titleEn": "Three-Dimensional Holographic Image Recording (33)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 33] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_34",
    "titleEn": "Three-Dimensional Holographic Image Recording (34)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 34] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_35",
    "titleEn": "Three-Dimensional Holographic Image Recording (35)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 35] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_36",
    "titleEn": "Three-Dimensional Holographic Image Recording (36)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 36] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_37",
    "titleEn": "Three-Dimensional Holographic Image Recording (37)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 37] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_38",
    "titleEn": "Three-Dimensional Holographic Image Recording (38)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 38] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_39",
    "titleEn": "Three-Dimensional Holographic Image Recording (39)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 39] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_40",
    "titleEn": "Three-Dimensional Holographic Image Recording (40)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 40] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_41",
    "titleEn": "Three-Dimensional Holographic Image Recording (41)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 41] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_42",
    "titleEn": "Three-Dimensional Holographic Image Recording (42)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 42] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_43",
    "titleEn": "Three-Dimensional Holographic Image Recording (43)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 43] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_44",
    "titleEn": "Three-Dimensional Holographic Image Recording (44)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 44] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_45",
    "titleEn": "Three-Dimensional Holographic Image Recording (45)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 45] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_46",
    "titleEn": "Three-Dimensional Holographic Image Recording (46)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 46] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_47",
    "titleEn": "Three-Dimensional Holographic Image Recording (47)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 47] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_48",
    "titleEn": "Three-Dimensional Holographic Image Recording (48)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 48] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_49",
    "titleEn": "Three-Dimensional Holographic Image Recording (49)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 49] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_50",
    "titleEn": "Three-Dimensional Holographic Image Recording (50)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 50] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_51",
    "titleEn": "Three-Dimensional Holographic Image Recording (51)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 51] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_52",
    "titleEn": "Three-Dimensional Holographic Image Recording (52)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 52] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_53",
    "titleEn": "Three-Dimensional Holographic Image Recording (53)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 53] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_54",
    "titleEn": "Three-Dimensional Holographic Image Recording (54)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 54] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_55",
    "titleEn": "Three-Dimensional Holographic Image Recording (55)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 55] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_56",
    "titleEn": "Three-Dimensional Holographic Image Recording (56)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 56] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_57",
    "titleEn": "Three-Dimensional Holographic Image Recording (57)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 57] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  },
  {
    "id": "phys_ch6_db_hots_58",
    "titleEn": "Three-Dimensional Holographic Image Recording (58)",
    "titleAr": "التصوير المجسم ثلاثي الأبعاد (الهولوجرام) (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] In holography, recording a true 3D image of an object on a photographic plate requires:",
    "questionAr": "[مسألة متدرجة 58] في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
    "optionsEn": [
      "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
      "Using white light to expose the object at multiple shutter speeds",
      "Directly photographing the shadow of the object with a pinhole camera",
      "X-ray crystallography of the macroscopic object surface"
    ],
    "optionsAr": [
      "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
      "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
      "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
      "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
    ],
    "correctAnswer": "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
    "correctIndex": 0,
    "hintEn": "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
    "hintAr": "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
    "stepByStepSolutionEn": [
      "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
    ],
    "stepByStepSolutionAr": [
      "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
    ],
    "teacherTipEn": "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
    "teacherTipAr": "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
  }
]
};
