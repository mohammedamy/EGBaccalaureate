import type { SolvedProblem } from '../../../types/curriculum';

export const egBacPhysCh5SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_phys_ch5_se_01",
    "titleEn": "Lorentz Relativistic Factor Calculation",
    "titleAr": "حساب معامل لورنتز النسبي عند السرعات العالية",
    "difficulty": "easy",
    "questionEn": "In Einstein's special theory of relativity, the Lorentz factor is defined as $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$. Calculate the value of $\\gamma$ for a particle traveling at speed $v = 0.80c$.",
    "questionAr": "في النظرية النسبية الخاصة لأينشتاين، يُعرف معامل لورنتز بالعلاقة $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$. احسب قيمة $\\gamma$ لجسيم يتحرك بسرعة $v = 0.80c$.",
    "optionsEn": [
      "$\\gamma = 1.667 \\; (5/3)$",
      "$\\gamma = 1.250$",
      "$\\gamma = 2.000$",
      "$\\gamma = 1.333$"
    ],
    "optionsAr": [
      "$\\gamma = 1.667 \\; (5/3)$",
      "$\\gamma = 1.250$",
      "$\\gamma = 2.000$",
      "$\\gamma = 1.333$"
    ],
    "correctAnswer": "$\\gamma = 1.667 \\; (5/3)$",
    "correctIndex": 0,
    "hintEn": "Calculate 1 - (v/c)^2 = 1 - 0.64 = 0.36. Then take square root: sqrt(0.36) = 0.6. Then gamma = 1 / 0.6 = 5/3.",
    "hintAr": "احسب 1 - (v/c)^2 = 1 - 0.64 = 0.36. ثم الجذر: جذر(0.36) = 0.6. فتكون جاما = 1 / 0.6 = 5/3.",
    "stepByStepSolutionEn": [
      "1. State the formula for the Lorentz factor: $\\gamma = \\frac{1}{\\sqrt{1 - (v/c)^2}}$.",
      "2. Substitute $v/c = 0.80$: $1 - (v/c)^2 = 1 - (0.80)^2 = 1 - 0.64 = 0.36$.",
      "3. Take square root: $\\sqrt{0.36} = 0.60$.",
      "4. Compute: $\\gamma = \\frac{1}{0.60} = \\frac{5}{3} \\approx 1.667$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة معامل لورنتز: $\\gamma = \\frac{1}{\\sqrt{1 - (v/c)^2}}$.",
      "٢. التعويض: $1 - (0.80)^2 = 1 - 0.64 = 0.36$.",
      "٣. أخذ الجذر التربيعي: $\\sqrt{0.36} = 0.60$.",
      "٤. إذن: $\\gamma = \\frac{1}{0.60} = \\frac{5}{3} \\approx 1.667$."
    ],
    "teacherTipEn": "As velocity approaches the speed of light c, the Lorentz factor γ approaches infinity, preventing any massive particle from reaching c.",
    "teacherTipAr": "كلما اقتربت السرعة من سرعة الضوء c، يقترب معامل لورنتز من ما لا نهاية، مما يمنع أي جسيم ذي كتلة من بلوغ سرعة الضوء."
  },
  {
    "id": "egbac_phys_ch5_se_02",
    "titleEn": "Relativistic Time Dilation in High-Speed Atmospheric Muons",
    "titleAr": "تمدد الزمن النسبي في جسيمات الميونات الجوية فائقة السرعة",
    "difficulty": "medium",
    "questionEn": "Atmospheric muons are created in the upper atmosphere ($h = 10\\text{ km}$) and have a proper rest lifetime of $\\Delta t_0 = 2.20\\,\\mu\\text{s} = 2.20 \\times 10^{-6}\\text{ s}$. Traveling toward Earth at speed $v = 0.995c$ (for which $\\gamma = \\frac{1}{\\sqrt{1 - 0.995^2}} \\approx 10.01$), what is their dilated lifetime $\\Delta t = \\gamma \\Delta t_0$ as measured by Earth-based laboratory observers, and what average distance do they travel before decaying?",
    "questionAr": "تتولد جسيمات الميونات في طبقات الجو العليا ($10\\text{ كم}$) ويبلغ عمر النصف الذاتي لها في حالة السكون $\\Delta t_0 = 2.20\\text{ ميكرو ثانية}$. إذا هبطت نحو الأرض بسرعة $v = 0.995c$ (حيث $\\gamma \\approx 10.01$)، فما فترة عمرها الممتدة $\\Delta t = \\gamma \\Delta t_0$ كما يقيسها راصد على سطح الأرض، وما المسافة التي تقطعها قبل أن تضمحل؟",
    "optionsEn": [
      "$\\Delta t = 2.20\\,\\mu\\text{s}, \\quad d \\approx 0.66\\text{ km}$",
      "$\\Delta t = 22.02\\,\\mu\\text{s}, \\quad d \\approx 6.57\\text{ km}$",
      "$\\Delta t = 44.04\\,\\mu\\text{s}, \\quad d \\approx 13.14\\text{ km}$",
      "$\\Delta t = 11.01\\,\\mu\\text{s}, \\quad d \\approx 3.28\\text{ km}$"
    ],
    "optionsAr": [
      "$\\Delta t = 2.20\\text{ ميكرو ثانية}، \\quad d \\approx 0.66\\text{ كم}$",
      "$\\Delta t = 22.02\\text{ ميكرو ثانية}، \\quad d \\approx 6.57\\text{ كم}$",
      "$\\Delta t = 44.04\\text{ ميكرو ثانية}، \\quad d \\approx 13.14\\text{ كم}$",
      "$\\Delta t = 11.01\\text{ ميكرو ثانية}، \\quad d \\approx 3.28\\text{ كم}$"
    ],
    "correctAnswer": "$\\Delta t = 22.02\\,\\mu\\text{s}, \\quad d \\approx 6.57\\text{ km}$",
    "correctIndex": 1,
    "hintEn": "Calculate dilated time Delta t = gamma * Delta t_0, then distance d = v * Delta t.",
    "hintAr": "احسب الزمن الممتد Delta t = gamma * Delta t_0، ثم المسافة d = v * Delta t.",
    "stepByStepSolutionEn": [
      "1. Time dilation formula: $\\Delta t = \\gamma \\Delta t_0 = 10.01 \\times 2.20\\,\\mu\\text{s} \\approx 22.02\\,\\mu\\text{s} = 2.202 \\times 10^{-5}\\text{ s}$.",
      "2. Speed of muon: $v = 0.995 \\times (3.0 \\times 10^8\\text{ m/s}) = 2.985 \\times 10^8\\text{ m/s}$.",
      "3. Distance traveled in Earth frame: $d = v \\Delta t = (2.985 \\times 10^8\\text{ m/s})(2.202 \\times 10^{-5}\\text{ s}) \\approx 6573\\text{ m} \\approx 6.57\\text{ km}$.",
      "4. Without time dilation, classical distance would be only $v \\Delta t_0 = 657\\text{ m}$, and muons could never reach sea-level detectors!"
    ],
    "stepByStepSolutionAr": [
      "١. تمدد الزمن النسبي: $\\Delta t = \\gamma \\Delta t_0 = 10.01 \\times 2.20\\,\\mu\\text{s} \\approx 22.02\\text{ ميكرو ثانية}$.",
      "٢. سرعة الميون: $v = 0.995 \\times 3.0 \\times 10^8 = 2.985 \\times 10^8\\text{ م/ث}$.",
      "٣. المسافة في إطار الراصد الأرضي: $d = v \\Delta t = 2.985 \\times 10^8 \\times 2.202 \\times 10^{-5} \\approx 6.57\\text{ كم}$.",
      "٤. لولا تمدد الزمن لقطعت الميونات $657\\text{ متراً}$ فقط واستحال وصولها لسطح الأرض."
    ],
    "teacherTipEn": "Atmospheric muon detection was historically the first direct experimental confirmation of relativistic time dilation.",
    "teacherTipAr": "كان رصد الميونات الجوية على سطح الأرض تاريخياً أول تأكيد تجريبي مباشر على صحة تمدد الزمن في النسبية الخاصة."
  },
  {
    "id": "egbac_phys_ch5_se_03",
    "titleEn": "Relativistic Length Contraction of an Interstellar Spacecraft",
    "titleAr": "انكماش الطول النسبي لمركبة فضاء بين النجوم",
    "difficulty": "easy",
    "questionEn": "An interstellar spacecraft has a proper rest length of $L_0 = 100\\text{ m}$. When it races past a planetary tracking station at speed $v = 0.60c$, what length $L$ is measured by the station observers?",
    "questionAr": "مركبة فضاء بين النجوم يبلغ طولها السكوني في إطارها الخاص $L_0 = 100\\text{ متر}$. عندما تمر بسرعة $v = 0.60c$ بجوار محطة رصد كوكبية، ما الطول $L$ الذي يقيسه راصدو المحطة في اتجاه الحركة؟",
    "optionsEn": [
      "$L = 60\\text{ m}$",
      "$L = 125\\text{ m}$",
      "$L = 80\\text{ m}$",
      "$L = 100\\text{ m}$"
    ],
    "optionsAr": [
      "$L = 60\\text{ متراً}$",
      "$L = 125\\text{ متراً}$",
      "$L = 80\\text{ متراً}$",
      "$L = 100\\text{ متراً}$"
    ],
    "correctAnswer": "$L = 80\\text{ m}$",
    "correctIndex": 2,
    "hintEn": "Formula: L = L_0 * sqrt(1 - v^2/c^2) = L_0 / gamma.",
    "hintAr": "القانون: L = L_0 * sqrt(1 - v^2/c^2) = L_0 / gamma.",
    "stepByStepSolutionEn": [
      "1. Relativistic length contraction formula: $L = L_0 \\sqrt{1 - \\frac{v^2}{c^2}}$.",
      "2. For $v = 0.60c$: $\\sqrt{1 - (0.60)^2} = \\sqrt{1 - 0.36} = \\sqrt{0.64} = 0.80$.",
      "3. Calculate contracted length: $L = 100\\text{ m} \\times 0.80 = 80\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون انكماش الطول النسبي: $L = L_0 \\sqrt{1 - (v/c)^2}$.",
      "٢. عند $v = 0.60c$: $\\sqrt{1 - 0.36} = 0.80$.",
      "٣. الطول المنكمش: $L = 100 \\times 0.80 = 80\\text{ متراً}$."
    ],
    "teacherTipEn": "Length contraction occurs strictly along the axis parallel to the direction of relative motion; perpendicular dimensions remain unchanged.",
    "teacherTipAr": "يحدث انكماش الطول حصرياً في اتجاه محور الحركة النسبية، بينما تظل الأبعاد العمودية على اتجاه الحركة ثابتة دون أي انكماش."
  },
  {
    "id": "egbac_phys_ch5_se_04",
    "titleEn": "Relativistic Momentum of a High-Speed Electron",
    "titleAr": "كمية التحرك النسبي لإلكترون فائق السرعة",
    "difficulty": "medium",
    "questionEn": "An electron is accelerated in a synchrotron to speed $v = 0.98c$. Given $m_0 = 9.1 \\times 10^{-31}\\text{ kg}$ and $c = 3.0 \\times 10^8\\text{ m/s}$, calculate its relativistic linear momentum $p = \\gamma m_0 v$.",
    "questionAr": "عُجل إلكترون في مسارع سنكروترون حتى بلغت سرعته $v = 0.98c$. بمعلومية كتلة السكون $m_0 = 9.1 \\times 10^{-31}\\text{ كجم}$ وسرعة الضوء $c = 3.0 \\times 10^8\\text{ م/ث}$، احسب كمية تحركه الخطي النسبي $p = \\gamma m_0 v$.",
    "optionsEn": [
      "$2.67 \\times 10^{-22}\\text{ kg}\\cdot\\text{m/s}$",
      "$6.70 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}$",
      "$9.10 \\times 10^{-22}\\text{ kg}\\cdot\\text{m/s}$",
      "$1.34 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "optionsAr": [
      "$2.67 \\times 10^{-22}\\text{ كجم}\\cdot\\text{م/ث}$",
      "$6.70 \\times 10^{-21}\\text{ كجم}\\cdot\\text{م/ث}$",
      "$9.10 \\times 10^{-22}\\text{ كجم}\\cdot\\text{م/ث}$",
      "$1.34 \\times 10^{-21}\\text{ كجم}\\cdot\\text{م/ث}$"
    ],
    "correctAnswer": "$1.34 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}$",
    "correctIndex": 3,
    "hintEn": "Calculate gamma = 1 / sqrt(1 - 0.98^2) approx 5.025, then p = gamma * m_0 * v.",
    "hintAr": "احسب جاما = 1 / جذر(1 - 0.98^2) ≈ 5.025، ثم p = gamma * m_0 * v.",
    "stepByStepSolutionEn": [
      "1. Calculate the Lorentz factor: $\\gamma = \\frac{1}{\\sqrt{1 - 0.98^2}} = \\frac{1}{\\sqrt{1 - 0.9604}} = \\frac{1}{\\sqrt{0.0396}} \\approx 5.025$.",
      "2. Relativistic momentum formula: $p = \\gamma m_0 v$.",
      "3. Calculate: $p = 5.025 \\times (9.1 \\times 10^{-31}\\text{ kg}) \\times (0.98 \\times 3.0 \\times 10^8\\text{ m/s})$.",
      "4. Compute: $p = 5.025 \\times (9.1 \\times 10^{-31}) \\times (2.94 \\times 10^8) \\approx 1.344 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب معامل لورنتز: $\\gamma = \\frac{1}{\\sqrt{1 - 0.98^2}} \\approx 5.025$.",
      "٢. قانون كمية التحرك النسبي: $p = \\gamma m_0 v$.",
      "٣. الحساب: $p = 5.025 \\times 9.1 \\times 10^{-31} \\times (0.98 \\times 3.0 \\times 10^8) \\approx 1.344 \\times 10^{-21}\\text{ كجم}\\cdot\\text{م/ث}$."
    ],
    "teacherTipEn": "Notice that relativistic momentum is 5 times larger than the Newtonian classical value m_0 v!",
    "teacherTipAr": "لاحظ أن كمية التحرك النسبي تفوق القيمة الكلاسيكية لنيوتن (m_0 v) بأكثر من خمس مرات!"
  },
  {
    "id": "egbac_phys_ch5_se_05",
    "titleEn": "Total Relativistic Energy Invariant Relation",
    "titleAr": "علاقة الطاقة الكلية النسبية الثابتة هندسياً",
    "difficulty": "medium",
    "questionEn": "The relativistic energy-momentum invariant relation states $E^2 = (pc)^2 + (m_0 c^2)^2$. A particle has rest energy $m_0 c^2 = 0.511\\text{ MeV}$ and relativistic momentum $pc = 1.20\\text{ MeV}$. Calculate its total energy $E$ and relativistic kinetic energy $KE$.",
    "questionAr": "تنص العلاقة النسبية الثابتة بين الطاقة وكمية التحرك على $E^2 = (pc)^2 + (m_0 c^2)^2$. جسيم طاقة سكونه $m_0 c^2 = 0.511\\text{ MeV}$ وكمية تحركه مضروبة في سرعة الضوء $pc = 1.20\\text{ MeV}$. احسب طاقته الكلية $E$ وطاقة حركته النسبية $KE$.",
    "optionsEn": [
      "$E = 1.304\\text{ MeV}, \\quad KE = 0.793\\text{ MeV}$",
      "$E = 1.711\\text{ MeV}, \\quad KE = 1.200\\text{ MeV}$",
      "$E = 0.689\\text{ MeV}, \\quad KE = 0.178\\text{ MeV}$",
      "$E = 2.608\\text{ MeV}, \\quad KE = 1.586\\text{ MeV}$"
    ],
    "optionsAr": [
      "$E = 1.304\\text{ مليون إلكترون فولت}، \\quad KE = 0.793\\text{ مليون إلكترون فولت}$",
      "$E = 1.711\\text{ مليون إلكترون فولت}، \\quad KE = 1.200\\text{ مليون إلكترون فولت}$",
      "$E = 0.689\\text{ مليون إلكترون فولت}، \\quad KE = 0.178\\text{ مليون إلكترون فولت}$",
      "$E = 2.608\\text{ مليون إلكترون فولت}، \\quad KE = 1.586\\text{ مليون إلكترون فولت}$"
    ],
    "correctAnswer": "$E = 1.304\\text{ MeV}, \\quad KE = 0.793\\text{ MeV}$",
    "correctIndex": 0,
    "hintEn": "Calculate E = sqrt((pc)^2 + (m_0 c^2)^2). Then KE = E - m_0 c^2.",
    "hintAr": "احسب E = sqrt((pc)^2 + (m_0 c^2)^2). ثم KE = E - m_0 c^2.",
    "stepByStepSolutionEn": [
      "1. Apply invariant relation: $E = \\sqrt{(pc)^2 + (m_0 c^2)^2} = \\sqrt{(1.20)^2 + (0.511)^2} = \\sqrt{1.44 + 0.2611} = \\sqrt{1.7011} \\approx 1.3043\\text{ MeV}$.",
      "2. Relativistic kinetic energy: $KE = E - m_0 c^2 = 1.3043\\text{ MeV} - 0.511\\text{ MeV} \\approx 0.7933\\text{ MeV}$."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق العلاقة النسبية: $E = \\sqrt{(1.20)^2 + (0.511)^2} = \\sqrt{1.7011} \\approx 1.304\\text{ مليون إلكترون فولت}$.",
      "٢. طاقة الحركة النسبية: $KE = E - m_0 c^2 = 1.304 - 0.511 = 0.793\\text{ مليون إلكترون فولت}$."
    ],
    "teacherTipEn": "For massless particles like photons (m_0 = 0), this equation reduces to the familiar quantum relation E = pc.",
    "teacherTipAr": "بالنسبة للجسيمات عديمة كتلة السكون كالفوتونات (m_0 = 0)، تؤول المعادلة ببساطة إلى E = pc."
  },
  {
    "id": "egbac_phys_ch5_se_06",
    "titleEn": "Relativistic Kinetic Energy vs Classical Newtonian Approximation",
    "titleAr": "طاقة الحركة النسبية ومقارنتها بالتقريب الكلاسيكي لنيوتن",
    "difficulty": "medium",
    "questionEn": "A proton ($m_0 c^2 = 938.3\\text{ MeV}$) is accelerated to speed $v = 0.60c$ (where $\\gamma = 1.25$). Calculate the exact relativistic kinetic energy $KE_{\\text{rel}} = (\\gamma - 1)m_0 c^2$ and compare it with the classical approximation $KE_{\\text{class}} = \\frac{1}{2} m_0 v^2$.",
    "questionAr": "عُجل بروتون ($m_0 c^2 = 938.3\\text{ MeV}$) إلى سرعة $v = 0.60c$ (حيث $\\gamma = 1.25$). احسب طاقة الحركة النسبية الدقيقة $KE_{\\text{rel}} = (\\gamma - 1)m_0 c^2$ وقارنها بالتقريب النيوتوني الكلاسيكي $KE_{\\text{class}} = \\frac{1}{2} m_0 v^2$.",
    "optionsEn": [
      "$KE_{\\text{rel}} = 168.9\\text{ MeV}, \\quad KE_{\\text{class}} = 234.6\\text{ MeV}$",
      "$KE_{\\text{rel}} = 234.6\\text{ MeV}, \\quad KE_{\\text{class}} = 168.9\\text{ MeV} \\; (38.9\\%\\text{ error})$",
      "$KE_{\\text{rel}} = 469.2\\text{ MeV}, \\quad KE_{\\text{class}} = 337.8\\text{ MeV}$",
      "$KE_{\\text{rel}} = 234.6\\text{ MeV}, \\quad KE_{\\text{class}} = 234.6\\text{ MeV}$"
    ],
    "optionsAr": [
      "$KE_{\\text{rel}} = 168.9\\text{ مليون إلكترون فولت}، \\quad KE_{\\text{class}} = 234.6\\text{ مليون إلكترون فولت}$",
      "$KE_{\\text{rel}} = 234.6\\text{ مليون إلكترون فولت}، \\quad KE_{\\text{class}} = 168.9\\text{ مليون إلكترون فولت}$",
      "$KE_{\\text{rel}} = 469.2\\text{ مليون إلكترون فولت}، \\quad KE_{\\text{class}} = 337.8\\text{ مليون إلكترون فولت}$",
      "$KE_{\\text{rel}} = 234.6\\text{ مليون إلكترون فولت}، \\quad KE_{\\text{class}} = 234.6\\text{ مليون إلكترون فولت}$"
    ],
    "correctAnswer": "$KE_{\\text{rel}} = 234.6\\text{ MeV}, \\quad KE_{\\text{class}} = 168.9\\text{ MeV} \\; (38.9\\%\\text{ error})$",
    "correctIndex": 1,
    "hintEn": "KE_rel = (gamma - 1) * m_0 * c^2. Classical is 0.5 * m_0 * (0.6c)^2 = 0.18 * m_0 * c^2.",
    "hintAr": "KE_rel = (gamma - 1) * m_0 * c^2. الكلاسيكية = 0.5 * m_0 * (0.6c)^2 = 0.18 * m_0 * c^2.",
    "stepByStepSolutionEn": [
      "1. Relativistic kinetic energy: $KE_{\\text{rel}} = (\\gamma - 1) m_0 c^2 = (1.25 - 1)(938.3\\text{ MeV}) = 0.25 \\times 938.3 = 234.58\\text{ MeV}$.",
      "2. Classical kinetic energy: $KE_{\\text{class}} = \\frac{1}{2} m_0 v^2 = \\frac{1}{2} m_0 (0.60c)^2 = 0.18 m_0 c^2 = 0.18 \\times 938.3\\text{ MeV} \\approx 168.89\\text{ MeV}$.",
      "3. The classical formula underestimates the required energy by $65.7\\text{ MeV}$ ($38.9\\%$ error)."
    ],
    "stepByStepSolutionAr": [
      "١. طاقة الحركة النسبية: $KE_{\\text{rel}} = (1.25 - 1) \\times 938.3 = 0.25 \\times 938.3 = 234.58\\text{ مليون إلكترون فولت}$.",
      "٢. طاقة الحركة الكلاسيكية: $KE_{\\text{class}} = 0.5 \\times (0.60)^2 \\times 938.3 = 0.18 \\times 938.3 = 168.89\\text{ مليون إلكترون فولت}$.",
      "٣. تخطئ الصيغة الكلاسيكية بنقصان قدره $65.7\\text{ MeV}$ (خطأ بنسبة $38.9\\%$)."
    ],
    "teacherTipEn": "Classical mechanics fails dramatically for speeds exceeding v > 0.1c.",
    "teacherTipAr": "تفشل الميكانيكا الكلاسيكية بصورة حادة عند السرعات التي تتجاوز 10% من سرعة الضوء."
  },
  {
    "id": "egbac_phys_ch5_se_07",
    "titleEn": "Nuclear Mass Defect and Total Binding Energy in Helium-4",
    "titleAr": "النقص في الكتلة وطاقة الترابط النووي الكلية لنواة الهيليوم-٤",
    "difficulty": "medium",
    "questionEn": "An alpha particle (Helium-4 nucleus, $^4_2\\text{He}$) contains $2$ protons and $2$ neutrons. Given proton mass $m_p = 1.00728\\text{ u}$, neutron mass $m_n = 1.00866\\text{ u}$, measured $^4\\text{He}$ nucleus mass $M = 4.00150\\text{ u}$, and $1\\text{ u} = 931.5\\text{ MeV}/c^2$, calculate the mass defect $\\Delta m$ and the total nuclear binding energy $E_b$.",
    "questionAr": "تحتوي نواة الهيليوم-٤ (جسيم ألفا $^4_2\\text{He}$) على بروتونين ونيوترونين. بمعلومية كتلة البروتون $m_p = 1.00728\\text{ u}$، وكتلة النيوترون $m_n = 1.00866\\text{ u}$، والكتلة الفعلية لنواة الهيليوم $M = 4.00150\\text{ u}$، وتحويل الطاقة $1\\text{ u} = 931.5\\text{ MeV}$، احسب النقص في الكتلة $\\Delta m$ وطاقة الترابط النووي الكلية $E_b$.",
    "optionsEn": [
      "$\\Delta m = 0.01519\\text{ u}, \\quad E_b = 14.15\\text{ MeV}$",
      "$\\Delta m = 0.06076\\text{ u}, \\quad E_b = 56.60\\text{ MeV}$",
      "$\\Delta m = 0.03038\\text{ u}, \\quad E_b = 28.30\\text{ MeV}$",
      "$\\Delta m = 0.03038\\text{ u}, \\quad E_b = 7.075\\text{ MeV}$"
    ],
    "optionsAr": [
      "$\\Delta m = 0.01519\\text{ u}، \\quad E_b = 14.15\\text{ مليون إلكترون فولت}$",
      "$\\Delta m = 0.06076\\text{ u}، \\quad E_b = 56.60\\text{ مليون إلكترون فولت}$",
      "$\\Delta m = 0.03038\\text{ u}، \\quad E_b = 28.30\\text{ مليون إلكترون فولت}$",
      "$\\Delta m = 0.03038\\text{ u}، \\quad E_b = 7.075\\text{ مليون إلكترون فولت}$"
    ],
    "correctAnswer": "$\\Delta m = 0.03038\\text{ u}, \\quad E_b = 28.30\\text{ MeV}$",
    "correctIndex": 2,
    "hintEn": "Calculate constituent mass: 2 * m_p + 2 * m_n, then subtract M. Multiply by 931.5 MeV.",
    "hintAr": "احسب كتلة المكونات الحرة: 2 * m_p + 2 * m_n، ثم اطرح الكتلة الفعلية. اضرب الناتج في 931.5.",
    "stepByStepSolutionEn": [
      "1. Sum of masses of separated nucleons: $m_{\\text{nucleons}} = 2(1.00728) + 2(1.00866) = 2.01456 + 2.01732 = 4.03188\\text{ u}$.",
      "2. Nuclear mass defect: $\\Delta m = m_{\\text{nucleons}} - M = 4.03188 - 4.00150 = 0.03038\\text{ u}$.",
      "3. Total binding energy: $E_b = \\Delta m \\times 931.5\\text{ MeV/u} = 0.03038 \\times 931.5 \\approx 28.299\\text{ MeV} \\approx 28.30\\text{ MeV}$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع كتل المكونات الحرة: $2(1.00728) + 2(1.00866) = 4.03188\\text{ u}$.",
      "٢. النقص في الكتلة: $\\Delta m = 4.03188 - 4.00150 = 0.03038\\text{ u}$.",
      "٣. طاقة الترابط النووي: $E_b = 0.03038 \\times 931.5 = 28.30\\text{ مليون إلكترون فولت}$."
    ],
    "teacherTipEn": "This lost mass is converted into the binding energy that tightly glues the nucleons together via the strong nuclear force.",
    "teacherTipAr": "هذه الكتلة المفقودة تحولت إلى طاقة ربط هائلة تربط النيوكليونات معاً بواسطة القوة النووية القوية."
  },
  {
    "id": "egbac_phys_ch5_se_08",
    "titleEn": "Binding Energy Per Nucleon and Nuclear Stability Peak at Iron-56",
    "titleAr": "طاقة الترابط النووي لكل نيوكليون وقمة الاستقرار النووي عند الحديد-٥٦",
    "difficulty": "easy",
    "questionEn": "The Iron-56 nucleus ($^{56}_{26}\\text{Fe}$) has a total nuclear binding energy of $E_b = 492.26\\text{ MeV}$. What is its binding energy per nucleon ($E_b / A$), and what significance does this value have on the nuclear stability curve?",
    "questionAr": "تمتلك نواة الحديد-٥٦ ($^{56}_{26}\\text{Fe}$) طاقة ترابط نووي كلية قدرها $E_b = 492.26\\text{ مليون إلكترون فولت}$. ما طاقة الترابط لكل نيوكليون ($E_b / A$)، وما الدلالة الفيزيائية لهذه القيمة على منحنى الاستقرار النووي؟",
    "optionsEn": [
      "$E_b / A = 18.93\\text{ MeV/nucleon}$; it represents an unstable radioactive emitter.",
      "$E_b / A = 4.39\\text{ MeV/nucleon}$; it readily undergoes spontaneous fission.",
      "$E_b / A = 7.07\\text{ MeV/nucleon}$; it has identical stability to helium-4.",
      "$E_b / A = 8.79\\text{ MeV/nucleon}$; it represents the maximum peak of the nuclear stability curve."
    ],
    "optionsAr": [
      "$E_b / A = 18.93\\text{ مليون إلكترون فولت/نيوكليون}$؛ وتمثل عنصراً مشعاً سريع الاضمحلال.",
      "$E_b / A = 4.39\\text{ مليون إلكترون فولت/نيوكليون}$؛ وتخضع لانشطار تلقائي سهل.",
      "$E_b / A = 7.07\\text{ مليون إلكترون فولت/نيوكليون}$؛ ولها نفس استقرار الهيليوم-٤.",
      "$E_b / A = 8.79\\text{ مليون إلكترون فولت/نيوكليون}$؛ وتمثل قمة منحنى الاستقرار النووي كأكثر الأنوية تماسكاً واستقراراً."
    ],
    "correctAnswer": "$E_b / A = 8.79\\text{ MeV/nucleon}$; it represents the maximum peak of the nuclear stability curve.",
    "correctIndex": 3,
    "hintEn": "Divide total binding energy E_b by mass number A = 56.",
    "hintAr": "اقسم طاقة الترابط الكلية E_b على العدد الكتلي A = 56.",
    "stepByStepSolutionEn": [
      "1. Mass number of iron is $A = 56$.",
      "2. Binding energy per nucleon: $\\frac{E_b}{A} = \\frac{492.26\\text{ MeV}}{56} \\approx 8.790\\text{ MeV/nucleon}$.",
      "3. Because $^{56}\\text{Fe}$ sits at the pinnacle of the binding energy curve, fusing lighter elements releases energy, and fissioning heavier elements releases energy, both driving toward iron."
    ],
    "stepByStepSolutionAr": [
      "١. العدد الكتلي للحديد هو $A = 56$.",
      "٢. طاقة الترابط لكل نيوكليون: $\\frac{E_b}{A} = \\frac{492.26}{56} \\approx 8.79\\text{ مليون إلكترون فولت/نيوكليون}$.",
      "٣. تقع نواة الحديد عند قمة منحنى الاستقرار، ولذلك يُطلق الاندماج النووي طاقة عند دمج الأنوية الخفيفة، ويطلق الانشطار طاقة عند شطر الأنوية الثقيلة نحو الحديد."
    ],
    "teacherTipEn": "Iron is the cosmic nuclear 'ash' of stellar nucleosynthesis; stars cannot produce net energy by fusing iron in their cores.",
    "teacherTipAr": "الحديد هو الرماد النووي الكوني للنجوم، حيث تعجز قلوب النجوم عن استخلاص طاقة باندماج الحديد مما يؤدي لانهيارها كمستعر أعظم."
  },
  {
    "id": "egbac_phys_ch5_se_09",
    "titleEn": "Radioactive Decay Constant, Half-Life, and Sample Activity",
    "titleAr": "ثابت الاضمحلال الإشعاعي وفترة عمر النصف ونشاط العينة",
    "difficulty": "medium",
    "questionEn": "Cobalt-60 ($^{60}\\text{Co}$) is a radioactive gamma source with a half-life of $T_{1/2} = 5.27\\text{ years} = 1.663 \\times 10^8\\text{ s}$. Determine its decay constant $\\lambda = \\frac{\\ln 2}{T_{1/2}}$ and calculate the initial activity $A_0 = \\lambda N_0$ of a sample containing $N_0 = 1.0 \\times 10^{18}\\text{ atoms}$.",
    "questionAr": "الكوبالت-٦٠ ($^{60}\\text{Co}$) مصدر إشعاعي لأشعة غاما فترة عمر النصف له $T_{1/2} = 5.27\\text{ سنوات} = 1.663 \\times 10^8\\text{ ثانية}$. احسب ثابت الاضمحلال الإشعاعي له $\\lambda = \\frac{\\ln 2}{T_{1/2}}$ والنشاط الإشعاعي الابتدائي $A_0 = \\lambda N_0$ لعينة تحتوي على $N_0 = 1.0 \\times 10^{18}\\text{ ذرة}$.",
    "optionsEn": [
      "$\\lambda = 4.168 \\times 10^{-9}\\text{ s}^{-1}, \\quad A_0 = 4.17 \\times 10^9\\text{ Bq} \\; (4.17\\text{ GBq})$",
      "$\\lambda = 2.084 \\times 10^{-9}\\text{ s}^{-1}, \\quad A_0 = 2.08 \\times 10^9\\text{ Bq}$",
      "$\\lambda = 8.336 \\times 10^{-9}\\text{ s}^{-1}, \\quad A_0 = 8.34 \\times 10^9\\text{ Bq}$",
      "$\\lambda = 1.315 \\times 10^{-8}\\text{ s}^{-1}, \\quad A_0 = 1.32 \\times 10^{10}\\text{ Bq}$"
    ],
    "optionsAr": [
      "$\\lambda = 4.168 \\times 10^{-9}\\text{ ث}^{-1}، \\quad A_0 = 4.17 \\times 10^9\\text{ بيكرل} \\; (4.17\\text{ جيجا بيكرل})$",
      "$\\lambda = 2.084 \\times 10^{-9}\\text{ ث}^{-1}، \\quad A_0 = 2.08 \\times 10^9\\text{ بيكرل}$",
      "$\\lambda = 8.336 \\times 10^{-9}\\text{ ث}^{-1}، \\quad A_0 = 8.34 \\times 10^9\\text{ بيكرل}$",
      "$\\lambda = 1.315 \\times 10^{-8}\\text{ ث}^{-1}، \\quad A_0 = 1.32 \\times 10^{10}\\text{ بيكرل}$"
    ],
    "correctAnswer": "$\\lambda = 4.168 \\times 10^{-9}\\text{ s}^{-1}, \\quad A_0 = 4.17 \\times 10^9\\text{ Bq} \\; (4.17\\text{ GBq})$",
    "correctIndex": 0,
    "hintEn": "Use lambda = ln(2) / T_1/2 = 0.69315 / (1.663 * 10^8 s), then A_0 = lambda * N_0.",
    "hintAr": "طبق lambda = ln(2) / T_1/2 = 0.69315 / (1.663 * 10^8 ث)، ثم A_0 = lambda * N_0.",
    "stepByStepSolutionEn": [
      "1. Calculate radioactive decay constant: $\\lambda = \\frac{\\ln 2}{T_{1/2}} = \\frac{0.69315}{1.663 \\times 10^8\\text{ s}} \\approx 4.168 \\times 10^{-9}\\text{ s}^{-1}$.",
      "2. Initial activity in Becquerels (decays per second): $A_0 = \\lambda N_0 = (4.168 \\times 10^{-9}\\text{ s}^{-1})(1.0 \\times 10^{18}) = 4.168 \\times 10^9\\text{ Bq} \\approx 4.17\\text{ GBq}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب ثابت الاضمحلال الإشعاعي: $\\lambda = \\frac{0.69315}{1.663 \\times 10^8} \\approx 4.168 \\times 10^{-9}\\text{ ث}^{-1}$.",
      "٢. النشاط الإشعاعي بالبيكرل: $A_0 = \\lambda N_0 = 4.168 \\times 10^{-9} \\times 10^{18} = 4.17 \\times 10^9\\text{ بيكرل}$."
    ],
    "teacherTipEn": "One Becquerel (1 Bq) represents exactly 1 nuclear disintegration per second; 1 Curie (Ci) equals 3.7 * 10^10 Bq.",
    "teacherTipAr": "البيكرل الواحد (1 Bq) يمثل تحللاً نووياً واحداً في الثانية، بينما الكيوري يساوي 3.7 * 10^10 بيكرل."
  },
  {
    "id": "egbac_phys_ch5_se_10",
    "titleEn": "Energy Release (Q-Value) in Uranium-235 Thermal Fission",
    "titleAr": "الطاقة المحررة (قيمة Q) في انشطار اليورانيوم-٢٣٥ بالنيوترونات الحرارية",
    "difficulty": "hots",
    "questionEn": "In a typical nuclear fission event, a thermal neutron strikes $^{235}_{92}\\text{U}$: $^{235}_{92}\\text{U} + ^1_0n \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3 ^1_0n + Q$. Given masses: $^{235}\\text{U} = 235.0439\\text{ u}$, $^{141}\\text{Ba} = 140.9144\\text{ u}$, $^{92}\\text{Kr} = 91.9261\\text{ u}$, neutron $^1n = 1.00866\\text{ u}$, and $1\\text{ u} = 931.5\\text{ MeV}$, calculate the mass lost $\\Delta m$ and the energy $Q$ released per fission event.",
    "questionAr": "في تفاعل انشطار نووي نموذجي، يقتنص اليورانيوم-٢٣٥ نيوتروناً حرارياً: $^{235}_{92}\\text{U} + ^1_0n \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3 ^1_0n + Q$. بمعلومية الكتل الذرية وثابت تحويل الطاقة $931.5\\text{ MeV/u}$، احسب النقص في كتلة التفاعل $\\Delta m$ ومقدار الطاقة المحررة $Q$ لكل انشطار نووي مفرد.",
    "optionsEn": [
      "$\\Delta m = 0.0931\\text{ u}, \\quad Q \\approx 86.7\\text{ MeV}$",
      "$\\Delta m = 0.1861\\text{ u}, \\quad Q \\approx 173.3\\text{ MeV}$",
      "$\\Delta m = 0.3722\\text{ u}, \\quad Q \\approx 346.6\\text{ MeV}$",
      "$\\Delta m = 0.2147\\text{ u}, \\quad Q \\approx 200.0\\text{ MeV}$"
    ],
    "optionsAr": [
      "$\\Delta m = 0.0931\\text{ u}، \\quad Q \\approx 86.7\\text{ مليون إلكترون فولت}$",
      "$\\Delta m = 0.1861\\text{ u}، \\quad Q \\approx 173.3\\text{ مليون إلكترون فولت}$",
      "$\\Delta m = 0.3722\\text{ u}، \\quad Q \\approx 346.6\\text{ مليون إلكترون فولت}$",
      "$\\Delta m = 0.2147\\text{ u}، \\quad Q \\approx 200.0\\text{ مليون إلكترون فولت}$"
    ],
    "correctAnswer": "$\\Delta m = 0.1861\\text{ u}, \\quad Q \\approx 173.3\\text{ MeV}$",
    "correctIndex": 1,
    "hintEn": "Initial mass: U235 + n = 236.0526 u. Final mass: Ba141 + Kr92 + 3n. Delta m = initial - final, then Q = Delta m * 931.5.",
    "hintAr": "الكتلة الابتدائية: U235 + n = 236.0526 u. الكتلة النهائية: Ba141 + Kr92 + 3n. النقص = الابتدائية - النهائية، ثم Q = النقص * 931.5.",
    "stepByStepSolutionEn": [
      "1. Total initial mass: $M_i = 235.0439 + 1.00866 = 236.05256\\text{ u}$.",
      "2. Total final mass: $M_f = 140.9144 + 91.9261 + 3(1.00866) = 232.8405 + 3.02598 = 235.86648\\text{ u}$.",
      "3. Mass defect: $\\Delta m = M_i - M_f = 236.05256 - 235.86648 = 0.18608\\text{ u} \\approx 0.1861\\text{ u}$.",
      "4. Energy released: $Q = 0.18608 \\times 931.5\\text{ MeV/u} \\approx 173.33\\text{ MeV} \\approx 173.3\\text{ MeV}$ (with subsequent beta decay of fragments bringing the total to $\\sim 200\\text{ MeV}$)."
    ],
    "stepByStepSolutionAr": [
      "١. الكتلة الكلية الابتدائية: $235.0439 + 1.00866 = 236.05256\\text{ u}$.",
      "٢. الكتلة الكلية للنواتج: $140.9144 + 91.9261 + 3(1.00866) = 235.86648\\text{ u}$.",
      "٣. النقص في الكتلة: $\\Delta m = 236.05256 - 235.86648 = 0.18608\\text{ u}$.",
      "٤. الطاقة المحررة: $Q = 0.18608 \\times 931.5 \\approx 173.3\\text{ مليون إلكترون فولت}$ (تصل إلى نحو 200 مع اضمحلال الشظايا اللاحق)."
    ],
    "teacherTipEn": "This colossal energy per event (~200 MeV) makes nuclear fuel millions of times more energy-dense than chemical fossil fuels.",
    "teacherTipAr": "هذه الطاقة الهائلة لكل ذرة تجعل الوقود النووي أعلى كثافة طاقية بملايين المرات من الوقود الأحفوري الكيميائي."
  }
];

export const egBacPhysCh5Exercises: SolvedProblem[] = [
  {
    "id": "egbac_phys_ch5_ex_01",
    "titleEn": "Speed at Which Relativistic Mass Doubles Rest Mass",
    "titleAr": "السرعة التي تتضاعف عندها كتلة الجسيم النسبية عن كتلة سكونه",
    "difficulty": "medium",
    "questionEn": "At what speed $v$ (expressed as a fraction of the speed of light $c$) does the relativistic mass of a moving particle become exactly double its rest mass ($m = 2 m_0$, so $\\gamma = 2$)?",
    "questionAr": "عند أي سرعة $v$ (معبراً عنها ككسر من سرعة الضوء $c$) تصبح الكتلة النسبية للجسيم المتحرك ضعف كتلة سكونه تماماً ($m = 2 m_0$، أي $\\gamma = 2$)؟",
    "optionsEn": [
      "$v = 0.500c$",
      "$v = 0.707c$",
      "$v = \\frac{\\sqrt{3}}{2} c \\approx 0.866c$",
      "$v = 0.950c$"
    ],
    "optionsAr": [
      "$v = 0.500c$",
      "$v = 0.707c$",
      "$v = \\frac{\\sqrt{3}}{2} c \\approx 0.866c$",
      "$v = 0.950c$"
    ],
    "correctAnswer": "$v = \\frac{\\sqrt{3}}{2} c \\approx 0.866c$",
    "correctIndex": 2,
    "hintEn": "Set gamma = 2: 1 / sqrt(1 - v^2/c^2) = 2 implies 1 - v^2/c^2 = 1/4 = 0.25, so v^2/c^2 = 0.75.",
    "hintAr": "ضع جاما = 2: 1 - v^2/c^2 = 1/4 = 0.25، ومنها v^2/c^2 = 0.75 و v = جذر(3)/2 c.",
    "stepByStepSolutionEn": [
      "1. Relativistic condition: $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} = 2$.",
      "2. Square both sides: $1 - \\frac{v^2}{c^2} = \\frac{1}{4} = 0.25$.",
      "3. Solve for $v/c$: $\\frac{v^2}{c^2} = 1 - 0.25 = 0.75 = \\frac{3}{4} \\implies v = \\frac{\\sqrt{3}}{2} c \\approx 0.866c$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط مضاعفة الكتلة: $\\gamma = 2$.",
      "٢. بالتربيع: $1 - (v/c)^2 = 0.25$.",
      "٣. إذن: $(v/c)^2 = 0.75 \\implies v = \\frac{\\sqrt{3}}{2} c \\approx 0.866c$."
    ],
    "teacherTipEn": "At 86.6% the speed of light, relativistic inertia doubles, requiring double the force to maintain acceleration.",
    "teacherTipAr": "عند 86.6% من سرعة الضوء، يتضاعف القصور الذاتي النسبي للجسيم مما يتطلب ضعف القوة لمواصلة تسريعه."
  },
  {
    "id": "egbac_phys_ch5_ex_02",
    "titleEn": "Observed Lifetime of an Accelerated Unstable Subatomic Particle",
    "titleAr": "فترة العمر المرصودة لجسيم دون ذري غير مستقر معجل",
    "difficulty": "easy",
    "questionEn": "A neutral pion or meson has a proper lifetime in its own rest frame of $\\tau_0 = 1.0 \\times 10^{-8}\\text{ s}$. When accelerated in a particle beam to $\\gamma = 5.0$, what is its lifetime $\\tau$ as measured by stationary laboratory detectors?",
    "questionAr": "جسيم غير مستقر يبلغ عمره في إطار سكونه الخاص $\\tau_0 = 1.0 \\times 10^{-8}\\text{ ثانية}$. عند تعجيله في حزمة جسيمات بحيث أصبح معامل لورنتز له $\\gamma = 5.0$، فما فترة عمره $\\tau$ المقاسة بواسطة كواشف المختبر الساكنة؟",
    "optionsEn": [
      "$\\tau = 2.0 \\times 10^{-9}\\text{ s}$",
      "$\\tau = 1.0 \\times 10^{-8}\\text{ s}$",
      "$\\tau = 2.5 \\times 10^{-7}\\text{ s}$",
      "$\\tau = 5.0 \\times 10^{-8}\\text{ s}$"
    ],
    "optionsAr": [
      "$\\tau = 2.0 \\times 10^{-9}\\text{ ثانية}$",
      "$\\tau = 1.0 \\times 10^{-8}\\text{ ثانية}$",
      "$\\tau = 2.5 \\times 10^{-7}\\text{ ثانية}$",
      "$\\tau = 5.0 \\times 10^{-8}\\text{ ثانية}$"
    ],
    "correctAnswer": "$\\tau = 5.0 \\times 10^{-8}\\text{ s}$",
    "correctIndex": 3,
    "hintEn": "Formula: tau = gamma * tau_0 = 5 * (10^-8 s).",
    "hintAr": "القانون: tau = gamma * tau_0 = 5 * (10^-8 ث).",
    "stepByStepSolutionEn": [
      "1. Relativistic time dilation: $\\tau = \\gamma \\tau_0$.",
      "2. Substitute: $\\tau = 5.0 \\times (1.0 \\times 10^{-8}\\text{ s}) = 5.0 \\times 10^{-8}\\text{ s}$."
    ],
    "stepByStepSolutionAr": [
      "١. تمدد الزمن النسبي: $\\tau = \\gamma \\tau_0$.",
      "٢. الحساب: $\\tau = 5.0 \\times 1.0 \\times 10^{-8} = 5.0 \\times 10^{-8}\\text{ ثانية}$."
    ],
    "teacherTipEn": "Moving clocks run slow according to stationary observers ('running clocks run slow').",
    "teacherTipAr": "الساعات المتحركة تبدو دائماً للراصد الساكن وكأنها تدور بمعدل أبطأ."
  },
  {
    "id": "egbac_phys_ch5_ex_03",
    "titleEn": "Relativistic Volume Contraction of a Moving Solid Cube",
    "titleAr": "انكماش الحجم النسبي لمكعب صلب متحرك",
    "difficulty": "medium",
    "questionEn": "A solid cube has edges of rest length $L_0$ and rest volume $V_0 = L_0^3$. If the cube moves at speed $v$ parallel to one of its edges, what is its apparent volume $V$ measured by a stationary observer?",
    "questionAr": "مكعب صلب طول ضلعه في السكون $L_0$ وحجمه السكوني $V_0 = L_0^3$. إذا تحرك المكعب بسرعة $v$ موازياً لأحد أضلاعه، فما حجمه الظاهري $V$ كما يقيسه راصد ساكن؟",
    "optionsEn": [
      "$V = V_0 \\sqrt{1 - v^2/c^2} = \\frac{V_0}{\\gamma}$",
      "$V = V_0 \\left(1 - v^2/c^2\\right)^{3/2} = \\frac{V_0}{\\gamma^3}$",
      "$V = V_0 \\left(1 - v^2/c^2\\right) = \\frac{V_0}{\\gamma^2}$",
      "$V = V_0$ (volume is invariant)"
    ],
    "optionsAr": [
      "$V = V_0 \\sqrt{1 - v^2/c^2} = \\frac{V_0}{\\gamma}$",
      "$V = V_0 \\left(1 - v^2/c^2\\right)^{3/2} = \\frac{V_0}{\\gamma^3}$",
      "$V = V_0 \\left(1 - v^2/c^2\\right) = \\frac{V_0}{\\gamma^2}$",
      "$V = V_0$ (الحجم ثابت لا يتغير)"
    ],
    "correctAnswer": "$V = V_0 \\sqrt{1 - v^2/c^2} = \\frac{V_0}{\\gamma}$",
    "correctIndex": 0,
    "hintEn": "Only the dimension parallel to motion contracts: L_x = L_0 / gamma, while L_y = L_0 and L_z = L_0.",
    "hintAr": "ينكمش فقط البعد الموازي لاتجاه الحركة: L_x = L_0 / gamma، بينما L_y = L_0 و L_z = L_0.",
    "stepByStepSolutionEn": [
      "1. Dimensions perpendicular to motion do not change: $L_y = L_0$, $L_z = L_0$.",
      "2. Dimension along motion contracts: $L_x = L_0 / \\gamma$.",
      "3. Contracted volume: $V = L_x L_y L_z = \\left(\\frac{L_0}{\\gamma}\\right)(L_0)(L_0) = \\frac{L_0^3}{\\gamma} = \\frac{V_0}{\\gamma} = V_0 \\sqrt{1 - v^2/c^2}$."
    ],
    "stepByStepSolutionAr": [
      "١. الأبعاد العمودية على اتجاه الحركة لا تنكمش: $L_y = L_0$ و $L_z = L_0$.",
      "٢. البعد الموازي للحركة ينكمش: $L_x = L_0 / \\gamma$.",
      "٣. الحجم الناتج: $V = L_x L_y L_z = \\frac{V_0}{\\gamma} = V_0 \\sqrt{1 - (v/c)^2}$."
    ],
    "teacherTipEn": "Because volume contracts by 1/γ while relativistic mass increases by γ, relativistic density scales as γ^2!",
    "teacherTipAr": "نظراً لانكماش الحجم بمعامل 1/γ وزيادة الكتلة بمعامل γ، تتضاعف الكثافة النسبية بمعامل γ^2!"
  },
  {
    "id": "egbac_phys_ch5_ex_04",
    "titleEn": "Total Energy from Annihilation of 1.0 Gram of Matter",
    "titleAr": "الطاقة الكلية الناتجة عن فناء جرام واحد من المادة بالكامل",
    "difficulty": "easy",
    "questionEn": "Using Einstein's mass-energy equivalence equation $E = m c^2$ with $c = 3.0 \\times 10^8\\text{ m/s}$, calculate the total energy in Joules released if $m = 1.0\\text{ g} = 1.0 \\times 10^{-3}\\text{ kg}$ of matter is converted entirely into radiation.",
    "questionAr": "باستخدام معادلة أينشتاين لتكافؤ الكتلة والطاقة $E = m c^2$ حيث $c = 3.0 \\times 10^8\\text{ م/ث}$، احسب الطاقة الكلية بالجول الناتجة عن تحول $m = 1.0\\text{ جم} = 1.0 \\times 10^{-3}\\text{ كجم}$ من المادة تحولاً تاماً إلى إشعاع.",
    "optionsEn": [
      "$3.0 \\times 10^8\\text{ J}$",
      "$9.0 \\times 10^{13}\\text{ J} \\; (90\\text{ TJ})$",
      "$9.0 \\times 10^{10}\\text{ J}$",
      "$9.0 \\times 10^{16}\\text{ J}$"
    ],
    "optionsAr": [
      "$3.0 \\times 10^8\\text{ جول}$",
      "$9.0 \\times 10^{13}\\text{ جول} \\; (90\\text{ تيرا جول})$",
      "$9.0 \\times 10^{10}\\text{ جول}$",
      "$9.0 \\times 10^{16}\\text{ جول}$"
    ],
    "correctAnswer": "$9.0 \\times 10^{13}\\text{ J} \\; (90\\text{ TJ})$",
    "correctIndex": 1,
    "hintEn": "E = m * c^2 = (1.0 * 10^-3 kg) * (3.0 * 10^8 m/s)^2.",
    "hintAr": "E = m * c^2 = 1.0 * 10^-3 * (3.0 * 10^8)^2.",
    "stepByStepSolutionEn": [
      "1. Mass in SI units: $m = 1.0 \\times 10^{-3}\\text{ kg}$.",
      "2. Speed of light squared: $c^2 = (3.0 \\times 10^8\\text{ m/s})^2 = 9.0 \\times 10^{16}\\text{ m}^2/\\text{s}^2$.",
      "3. Calculate energy: $E = m c^2 = (1.0 \\times 10^{-3}\\text{ kg})(9.0 \\times 10^{16}\\text{ m}^2/\\text{s}^2) = 9.0 \\times 10^{13}\\text{ J}$ (equivalent to the energy of ~21 kilotons of TNT!)."
    ],
    "stepByStepSolutionAr": [
      "١. الكتلة بالكيلوجرام: $m = 1.0 \\times 10^{-3}\\text{ كجم}$.",
      "٢. مربع سرعة الضوء: $c^2 = 9.0 \\times 10^{16}\\text{ م}^2/\\text{ث}^2$.",
      "٣. الطاقة الناتجة: $E = 1.0 \\times 10^{-3} \\times 9.0 \\times 10^{16} = 9.0 \\times 10^{13}\\text{ جول}$ (ما يعادل طاقة 21 ألف طن من مادة TNT!)."
    ],
    "teacherTipEn": "The enormous value of c^2 explains why minute mass defects yield astronomical energy releases in nuclear reactions.",
    "teacherTipAr": "القيمة الهائلة لمربع سرعة الضوء c^2 تفسر كيف يؤدي نقص ضئيل في الكتلة إلى توليد كميات جبارة من الطاقة."
  },
  {
    "id": "egbac_phys_ch5_ex_05",
    "titleEn": "Conservation Laws in Nuclear Alpha Decay",
    "titleAr": "قوانين البقاء في الانحلال الإشعاعي بجسيمات ألفا",
    "difficulty": "easy",
    "questionEn": "In radioactive alpha decay, a parent nucleus $^{238}_{92}\\text{U}$ decays by emitting an alpha particle ($^4_2\\text{He}$). What are the atomic number $Z$ and mass number $A$ of the daughter Thorium ($\\text{Th}$) nucleus?",
    "questionAr": "في الاضمحلال الإشعاعي بانبعاث جسيم ألفا، تنحل نواة اليورانيوم-٢٣٨ ($^{238}_{92}\\text{U}$) بإطلاق جسيم ألفا ($^4_2\\text{He}$). ما العدد الذري $Z$ والعدد الكتلي $A$ لنواة الثوريوم ($\\text{Th}$) الوليدة الناتجة؟",
    "optionsEn": [
      "$A = 234, \\quad Z = 92$",
      "$A = 238, \\quad Z = 90$",
      "$A = 234, \\quad Z = 90 \\; (^{234}_{90}\\text{Th})$",
      "$A = 236, \\quad Z = 91$"
    ],
    "optionsAr": [
      "$A = 234، \\quad Z = 92$",
      "$A = 238، \\quad Z = 90$",
      "$A = 234، \\quad Z = 90 \\; (^{234}_{90}\\text{Th})$",
      "$A = 236، \\quad Z = 91$"
    ],
    "correctAnswer": "$A = 234, \\quad Z = 90 \\; (^{234}_{90}\\text{Th})$",
    "correctIndex": 2,
    "hintEn": "Charge and nucleon numbers are conserved: A_daughter = 238 - 4 = 234, Z_daughter = 92 - 2 = 90.",
    "hintAr": "انحفاظ الشحنة والعدد الكتلي: A_daughter = 238 - 4 = 234، Z_daughter = 92 - 2 = 90.",
    "stepByStepSolutionEn": [
      "1. Conservation of nucleon number (mass number): $238 = A_{\\text{daughter}} + 4 \\implies A_{\\text{daughter}} = 234$.",
      "2. Conservation of proton number (electric charge): $92 = Z_{\\text{daughter}} + 2 \\implies Z_{\\text{daughter}} = 90$.",
      "3. The resulting daughter nucleus is $^{234}_{90}\\text{Th}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاء عدد النيوكليونات (العدد الكتلي): $238 = A + 4 \\implies A = 234$.",
      "٢. بقاء الشحنة الكهربية (العدد الذري): $92 = Z + 2 \\implies Z = 90$.",
      "٣. النواة الناتجة هي الثوريوم-٢٣٤ ($^{234}_{90}\\text{Th}$)."
    ],
    "teacherTipEn": "Alpha decay reduces the mass number by 4 and decreases the atomic number by 2.",
    "teacherTipAr": "يؤدي انبعاث جسيم ألفا دائماً إلى تقليل العدد الكتلي بمقدار 4 والعدد الذري بمقدار 2."
  },
  {
    "id": "egbac_phys_ch5_ex_06",
    "titleEn": "Beta-Minus Decay and the Neutrino Hypothesis",
    "titleAr": "اضمحلال بيتا السالبة وفرضية وجود النيوترينو",
    "difficulty": "medium",
    "questionEn": "When a neutron inside an unstable nucleus converts into a proton via beta-minus ($\\beta^-$) decay ($n \\to p + e^- + \\bar{\\nu}_e$), why did Wolfgang Pauli postulate the existence of the antineutrino ($\\bar{\\nu}_e$)?",
    "questionAr": "عندما يتحول نيوترون داخل نواة غير مستقرة إلى بروتون عبر اضمحلال بيتا السالبة ($n \\to p + e^- + \\bar{\\nu}_e$)، لماذا افترض فولفغانغ باولي وجود جسيم مضاد النيوترينو ($\\bar{\\nu}_e$)؟",
    "optionsEn": [
      "To neutralize the electric charge of the emitted electron.",
      "To bind the proton and neutron together through gravity.",
      "To prevent the nucleus from undergoing instantaneous nuclear fission.",
      "To account for the continuous kinetic energy spectrum of emitted electrons and conserve total energy, linear momentum, and spin angular momentum."
    ],
    "optionsAr": [
      "لمعادلة الشحنة الكهربية للإلكترون المنبعث وجعلها صفراً.",
      "لربط البروتون بالنيوترون عن طريق قوى الجاذبية الأرضية.",
      "لمنع النواة من الانشطار الفوري التلقائي.",
      "لتفسير الطيف المتصل لطاقة حركة إلكترونات بيتا المنبعثة وضمان بقاء الطاقة الكلية وكمية التحرك الخطي والزاوي (الغزل)."
    ],
    "correctAnswer": "To account for the continuous kinetic energy spectrum of emitted electrons and conserve total energy, linear momentum, and spin angular momentum.",
    "correctIndex": 3,
    "hintEn": "If only an electron were emitted, it would have a discrete single energy. The continuous spectrum proved energy was shared with a third neutral particle.",
    "hintAr": "لو انبعث الإلكترون منفرداً لامتلك طاقة محددة ثابتة. وقد أثبت الطيف المتصل تقاسم الطاقة مع جسيم ثالث متعادل عديم الكتلة تقريباً.",
    "stepByStepSolutionEn": [
      "1. In beta-minus decay, a neutron converts into a proton, an electron, and an electron antineutrino: $n \\to p + e^- + \\bar{\\nu}_e$.",
      "2. If only two bodies were produced, conservation of linear momentum and energy would force the electron to carry an exact, monoenergetic discrete kinetic energy.",
      "3. The observed continuous energy spectrum from zero up to the maximum endpoint $E_{\\max}$ conclusively showed that the available reaction energy is shared continuously between the electron and an elusive neutral particle (the antineutrino)."
    ],
    "stepByStepSolutionAr": [
      "١. في تحلل بيتا السالبة، يتحول النيوترون إلى بروتون وإلكترون ومضاد نيوترينو: $n \\to p + e^- + \\bar{\\nu}_e$.",
      "٢. إذا كان ناتج الاضمحلال جسيمين فقط، لفرضت قوانين بقاء الطاقة وكمية الحركة طاقة حركة محددة وثابتة تماماً للإلكترون.",
      "٣. أثبت الطيف المستمر لطاقة الإلكترونات تقاسم طاقة التفاعل بين الإلكترون وجسيم ثالث متعادل وخفيف جداً وهو مضاد النيوترينو."
    ],
    "teacherTipEn": "Pauli proposed the neutrino in 1930; it was experimentally confirmed by Cowan and Reines in 1956.",
    "teacherTipAr": "اقترح باولي وجود النيوترينو عام 1930، وأثبته كوان وراينس تجريبياً عام 1956."
  },
  {
    "id": "egbac_phys_ch5_ex_07",
    "titleEn": "Beta-Plus (Positron) Emission Mechanism",
    "titleAr": "آلية انبعاث إشعاع بيتا الموجبة (البوزيترون)",
    "difficulty": "easy",
    "questionEn": "In positron emission ($\\beta^+$ decay), a proton within a proton-rich nucleus converts into a neutron: $p \\to n + e^+ + \\nu_e$. What happens to the atomic number $Z$ and mass number $A$ of the parent nucleus?",
    "questionAr": "في اضمحلال بيتا الموجبة (انبعاث البوزيترون $\\beta^+$)، يتحول بروتون في نواة غنية بالبروتونات إلى نيوترون: $p \\to n + e^+ + \\nu_e$. ماذا يحدث للعدد الذري $Z$ والعدد الكتلي $A$ للنواة الأصلية؟",
    "optionsEn": [
      "$Z$ decreases by $1$, while $A$ remains constant.",
      "$Z$ increases by $1$, while $A$ remains constant.",
      "$A$ decreases by $1$, while $Z$ remains constant.",
      "Both $Z$ and $A$ decrease by $1$."
    ],
    "optionsAr": [
      "يقل العدد الذري $Z$ بمقدار $1$، بينما يظل العدد الكتلي $A$ ثابتاً دون تغيير.",
      "يزداد العدد الذري $Z$ بمقدار $1$، بينما يظل $A$ ثابتاً.",
      "يقل العدد الكتلي $A$ بمقدار $1$، بينما يظل $Z$ ثابتاً.",
      "يقل كل من $Z$ و $A$ بمقدار $1$."
    ],
    "correctAnswer": "$Z$ decreases by $1$, while $A$ remains constant.",
    "correctIndex": 0,
    "hintEn": "A proton becomes a neutron: Z decreases by 1, but total nucleons A = Z + N is conserved.",
    "hintAr": "يتحول بروتون إلى نيوترون: يقل Z بواحد، ولكن مجموع النيوكليونات A = Z + N يظل ثابتاً.",
    "stepByStepSolutionEn": [
      "1. Nuclear reaction: $^A_Z X \\to ^A_{Z-1} Y + ^0_{+1} e + \\nu_e$.",
      "2. Total charge: $Z = (Z - 1) + 1 = Z$ (conserved).",
      "3. Total nucleons: $A = A + 0 = A$ (conserved)."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة التفاعل النووي: $^A_Z X \\to ^A_{Z-1} Y + ^0_{+1} e + \\nu_e$.",
      "٢. الشحنة الكهربية: $Z = (Z - 1) + 1$ (محفوظة).",
      "٣. عدد النيوكليونات: $A$ يظل ثابتاً لأن بروتوناً حل محله نيوترون."
    ],
    "teacherTipEn": "Positron emission is the basis of medical Positron Emission Tomography (PET scans) in cancer diagnostics.",
    "teacherTipAr": "يعد انبعاث البوزيترون الأساس الفيزيائي لتقنية التصوير المقطعي بالإصدار البوزيتروني (PET) في تشخيص الأورام."
  },
  {
    "id": "egbac_phys_ch5_ex_08",
    "titleEn": "Gamma Ray De-Excitation of Nuclear Isomers",
    "titleAr": "التهدئة الإشعاعية لمتماكبات الأنوية المثارة بأشعة غاما",
    "difficulty": "easy",
    "questionEn": "A metastable technetium-99m nucleus ($^{99m}_{43}\\text{Tc}$) undergoes isomeric transition to its ground state ($^{99}_{43}\\text{Tc}$) by emitting a gamma-ray photon ($\\gamma$). What change occurs in the atomic number $Z$ and mass number $A$ of the nucleus?",
    "questionAr": "تنتقل نواة التكنيشيوم-٩٩m شبه المستقرة ($^{99m}_{43}\\text{Tc}$) إلى حالتها الأرضية ($^{99}_{43}\\text{Tc}$) عبر انبعاث فوتون أشعة غاما ($\\gamma$). ما التغير الذي يطرأ على العدد الذري $Z$ والعدد الكتلي $A$ للنواة؟",
    "optionsEn": [
      "$Z$ increases by $1$, while $A$ decreases by $1$.",
      "Neither $Z$ nor $A$ changes; only the internal nuclear energy decreases.",
      "$A$ decreases by $4$, and $Z$ decreases by $2$.",
      "$Z$ decreases by $1$, while $A$ remains constant."
    ],
    "optionsAr": [
      "يزداد $Z$ بمقدار $1$، بينما يقل $A$ بمقدار $1$.",
      "لا يتغير أي من $Z$ أو $A$؛ وتهبط النواة فقط من مستوى طاقة نووي مثار إلى مستوى طاقة أدنى مستقر.",
      "يقل $A$ بمقدار $4$، ويقل $Z$ بمقدار $2$.",
      "يقل $Z$ بمقدار $1$، بينما يظل $A$ ثابتاً."
    ],
    "correctAnswer": "Neither $Z$ nor $A$ changes; only the internal nuclear energy decreases.",
    "correctIndex": 1,
    "hintEn": "Gamma emission is pure electromagnetic photon de-excitation carrying zero charge and zero mass.",
    "hintAr": "انبعاث أشعة غاما هو مجرد تخلص من الطاقة الكهرومغناطيسية الفائضة للنواة دون انبعاث جسيمات مشحونة أو كتلية.",
    "stepByStepSolutionEn": [
      "1. Gamma decay equation: $^{99m}_{43}\\text{Tc} \\to ^{99}_{43}\\text{Tc} + \\gamma$ ($E_\\gamma = 140.5\\text{ keV}$).",
      "2. Protons and neutrons are unaffected ($Z = 43, A = 99$).",
      "3. The excited nucleus drops to its ground state, radiating excess energy as a high-frequency gamma photon."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة انحلال غاما: $^{99m}_{43}\\text{Tc} \\to ^{99}_{43}\\text{Tc} + \\gamma$ ($140.5\\text{ keV}$).",
      "٢. لا يتغير عدد البروتونات ولا النيوترونات ($Z=43, A=99$).",
      "٣. تتخلص النواة المثارة من طاقتها الزائدة في صورة إشعاع كهرومغناطيسي عالي الطاقة."
    ],
    "teacherTipEn": "Technetium-99m is the most widely used medical radioisotope in the world due to its pure 140 keV gamma ray.",
    "teacherTipAr": "يعد التكنيشيوم-99m النظير المشع الأكثر استخداماً عالمياً في التصوير الطبي لطاقته المثالية وقصر فترة عمره (6 ساعات)."
  },
  {
    "id": "egbac_phys_ch5_ex_09",
    "titleEn": "Fraction of Radioisotope Remaining After 4 Half-Lives",
    "titleAr": "النسبة المتبقية من عنصر مشع بعد مرور ٤ فترات عمر نصف",
    "difficulty": "easy",
    "questionEn": "After an elapsed time equal to $4$ half-lives ($t = 4 T_{1/2}$), what percentage of the original radioactive parent nuclei remains undecayed in the sample?",
    "questionAr": "بعد مرور فترة زمنية تعادل $4$ فترات عمر نصف ($t = 4 T_{1/2}$)، ما النسبة المئوية المتبقية من أنوية العنصر المشع الأصلي دون انحلال؟",
    "optionsEn": [
      "$12.50\\% \\; (1/8)$",
      "$25.00\\% \\; (1/4)$",
      "$6.25\\% \\; (1/16)$",
      "$3.125\\% \\; (1/32)$"
    ],
    "optionsAr": [
      "$12.50\\% \\; (1/8)$",
      "$25.00\\% \\; (1/4)$",
      "$6.25\\% \\; (1/16)$",
      "$3.125\\% \\; (1/32)$"
    ],
    "correctAnswer": "$6.25\\% \\; (1/16)$",
    "correctIndex": 2,
    "hintEn": "Remaining fraction is (1/2)^n where n = 4: (1/2)^4 = 1/16.",
    "hintAr": "النسبة المتبقية هي (1/2)^n حيث n = 4: (1/2)^4 = 1/16.",
    "stepByStepSolutionEn": [
      "1. Radioactive decay law: $\\frac{N}{N_0} = \\left(\\frac{1}{2}\\right)^n$, where $n = \\frac{t}{T_{1/2}} = 4$.",
      "2. Calculate: $\\frac{N}{N_0} = \\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16} = 0.0625 = 6.25\\%$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الاضمحلال الإشعاعي: $\\frac{N}{N_0} = (1/2)^n$ حيث $n = 4$.",
      "٢. الحساب: $(1/2)^4 = 1/16 = 6.25\\%$."
    ],
    "teacherTipEn": "Each successive half-life halves the remaining radioactive population regardless of initial sample quantity.",
    "teacherTipAr": "كل فترة عمر نصف تقلل الكمية المتبقية إلى النصف بغض النظر عن حجم العينة الابتدائية."
  },
  {
    "id": "egbac_phys_ch5_ex_10",
    "titleEn": "Archaeological Radiocarbon-14 Age Determination",
    "titleAr": "تحديد العمر الزمني لقطعة أثرية بنظير الكربون-١٤ المشع",
    "difficulty": "medium",
    "questionEn": "Living wood has a specific Carbon-14 activity of $A_0 = 15.3\\text{ decays/min}\\cdot\\text{g}$. An ancient wooden artifact excavated from an Egyptian tomb exhibits an activity of $A = 3.825\\text{ decays/min}\\cdot\\text{g}$. Given that the half-life of $^{14}\\text{C}$ is $T_{1/2} = 5730\\text{ years}$, calculate the age of the artifact.",
    "questionAr": "يمتلك الخشب الحي نشاطاً إشعاعياً نوعياً للكربون-١٤ قدره $A_0 = 15.3\\text{ تحلل/دقيقة}\\cdot\\text{جم}$. أظهرت قطعة خشبية أثرية استُخرجت من مقبرة فرعونية نشاطاً إشعاعياً قدره $A = 3.825\\text{ تحلل/دقيقة}\\cdot\\text{جم}$. إذا كانت فترة عمر النصف للكربون-١٤ هي $T_{1/2} = 5730\\text{ سنة}$، فما عمر هذه القطعة الأثرية؟",
    "optionsEn": [
      "$5,730\\text{ years}$",
      "$17,190\\text{ years}$",
      "$22,920\\text{ years}$",
      "$11,460\\text{ years}$"
    ],
    "optionsAr": [
      "$5,730\\text{ سنة}$",
      "$17,190\\text{ سنة}$",
      "$22,920\\text{ سنة}$",
      "$11,460\\text{ سنة}$"
    ],
    "correctAnswer": "$11,460\\text{ years}$",
    "correctIndex": 3,
    "hintEn": "Find the activity ratio: A / A_0 = 3.825 / 15.3 = 0.25 = 1/4 = (1/2)^2. This corresponds to exactly 2 half-lives.",
    "hintAr": "احسب نسبة النشاط: A / A_0 = 3.825 / 15.3 = 0.25 = 1/4 = (1/2)^2. هذا يماثل فترتي عمر نصف بالضبط.",
    "stepByStepSolutionEn": [
      "1. Ratio of measured activity: $\\frac{A}{A_0} = \\frac{3.825}{15.3} = 0.25 = \\frac{1}{4}$.",
      "2. Since $\\frac{A}{A_0} = \\left(\\frac{1}{2}\\right)^n$, we have $n = 2$ half-lives.",
      "3. Age of artifact: $t = n \\times T_{1/2} = 2 \\times 5730\\text{ years} = 11,460\\text{ years}$."
    ],
    "stepByStepSolutionAr": [
      "١. نسبة النشاط الإشعاعي: $\\frac{A}{A_0} = \\frac{3.825}{15.3} = 0.25 = \\frac{1}{4}$.",
      "٢. بما أن $(1/2)^n = 1/4$، إذن عدد فترات عمر النصف المنقضية $n = 2$.",
      "٣. عمر القطعة الأثرية: $t = 2 \\times 5730 = 11460\\text{ سنة}$."
    ],
    "teacherTipEn": "Radiocarbon dating revolutionized archaeology by providing absolute quantitative chronologies for organic artifacts.",
    "teacherTipAr": "أحدث التأريخ بالكربون المشع ثورة كبرى في علم الآثار بتقديمه تواريخ زمنية مطلقة للمخلفات العضوية القديمة."
  },
  {
    "id": "egbac_phys_ch5_ex_11",
    "titleEn": "Total Energy Yield of 1.0 kg of Uranium-235 Fission",
    "titleAr": "الطاقة الكلية المحررة من انشطار كيلوجرام واحد من اليورانيوم-٢٣٥",
    "difficulty": "medium",
    "questionEn": "Assuming each fission event in $^{235}\\text{U}$ releases an average energy of $Q = 200\\text{ MeV} = 3.20 \\times 10^{-11}\\text{ J}$, calculate the total energy in Joules released by the complete nuclear fission of $m = 1.0\\text{ kg}$ of pure Uranium-235. (Given molar mass $M = 235\\text{ g/mol}$ and Avogadro constant $N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$).",
    "questionAr": "بفرض أن كل انشطار نووي لليورانيوم-٢٣٥ يحرر متوسط طاقة $Q = 200\\text{ MeV} = 3.20 \\times 10^{-11}\\text{ جول}$، احسب الطاقة الكلية بالجول الناتجة عن الانشطار التام لكتلة $m = 1.0\\text{ كجم}$ من اليورانيوم-٢٣٥ النقي. (بمعلومية الكتلة المولية $M = 235\\text{ جم/مول}$ وثابت أفوجادرو $N_A = 6.022 \\times 10^{23}\\text{ مول}^{-1}$).",
    "optionsEn": [
      "$8.20 \\times 10^{13}\\text{ J} \\; (82.0\\text{ TJ})$",
      "$4.10 \\times 10^{13}\\text{ J}$",
      "$1.64 \\times 10^{14}\\text{ J}$",
      "$2.05 \\times 10^{12}\\text{ J}$"
    ],
    "optionsAr": [
      "$8.20 \\times 10^{13}\\text{ جول} \\; (82.0\\text{ تيرا جول})$",
      "$4.10 \\times 10^{13}\\text{ جول}$",
      "$1.64 \\times 10^{14}\\text{ جول}$",
      "$2.05 \\times 10^{12}\\text{ جول}$"
    ],
    "correctAnswer": "$8.20 \\times 10^{13}\\text{ J} \\; (82.0\\text{ TJ})$",
    "correctIndex": 0,
    "hintEn": "Calculate number of nuclei N = (m / M) * N_A = (1000 / 235) * 6.022 * 10^23, then E = N * Q.",
    "hintAr": "احسب عدد الأنوية N = (m / M) * N_A، ثم الطاقة الكلية E = N * Q.",
    "stepByStepSolutionEn": [
      "1. Number of moles in $1000\\text{ g}$: $n_{\\text{mol}} = \\frac{1000\\text{ g}}{235\\text{ g/mol}} \\approx 4.2553\\text{ mol}$.",
      "2. Total number of $^{235}\\text{U}$ nuclei: $N = 4.2553 \\times (6.022 \\times 10^{23}) \\approx 2.5626 \\times 10^{24}\\text{ nuclei}$.",
      "3. Total energy released: $E = N \\cdot Q = (2.5626 \\times 10^{24})(3.20 \\times 10^{-11}\\text{ J}) \\approx 8.20 \\times 10^{13}\\text{ J} = 82\\text{ TJ}$ (equivalent to burning $2,800\\text{ metric tons}$ of high-grade coal!)."
    ],
    "stepByStepSolutionAr": [
      "١. عدد المولات في كيلوجرام: $n = 1000 / 235 \\approx 4.255\\text{ مول}$.",
      "٢. عدد الأنوية: $N = 4.255 \\times 6.022 \\times 10^{23} \\approx 2.563 \\times 10^{24}\\text{ نواة}$.",
      "٣. الطاقة الكلية: $E = 2.563 \\times 10^{24} \\times 3.20 \\times 10^{-11} = 8.20 \\times 10^{13}\\text{ جول}$ (ما يعادل حرق 2800 طن من الفحم الحجري!)."
    ],
    "teacherTipEn": "One kilogram of enriched uranium pellet provides equivalent electricity to millions of liters of oil.",
    "teacherTipAr": "قرص وقود نووي وزنه كيلوجرام واحد يولد طاقة كهربائية تكافئ احتراق ملايين اللترات من البترول."
  },
  {
    "id": "egbac_phys_ch5_ex_12",
    "titleEn": "Energy Yield in Deuterium-Tritium Thermonuclear Fusion",
    "titleAr": "الطاقة المحررة في الاندماج النووي الحراري لديوتيريوم وتريتيوم",
    "difficulty": "easy",
    "questionEn": "The primary thermonuclear reaction pursued for clean fusion energy reactors (such as ITER) is the D-T reaction: $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0n + Q$. Given that the mass defect of this reaction is $\\Delta m = 0.01888\\text{ u}$ and $1\\text{ u} = 931.5\\text{ MeV}$, calculate the energy yield $Q$.",
    "questionAr": "التفاعل النووي الحراري الأساسي المعتمد في مفاعلات الاندماج النظيف (مثل مشروع ITER الدولي) هو تفاعل ديوتيريوم - تريتيوم: $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0n + Q$. إذا كان النقص الكتلي لهذا التفاعل $\\Delta m = 0.01888\\text{ u}$، فما مقدار الطاقة الناتجة $Q$؟",
    "optionsEn": [
      "$Q = 3.27\\text{ MeV}$",
      "$Q = 17.59\\text{ MeV} \\approx 17.6\\text{ MeV}$",
      "$Q = 28.3\\text{ MeV}$",
      "$Q = 8.8\\text{ MeV}$"
    ],
    "optionsAr": [
      "$Q = 3.27\\text{ مليون إلكترون فولت}$",
      "$Q = 17.59\\text{ مليون إلكترون فولت} \\approx 17.6\\text{ مليون إلكترون فولت}$",
      "$Q = 28.3\\text{ مليون إلكترون فولت}$",
      "$Q = 8.8\\text{ مليون إلكترون فولت}$"
    ],
    "correctAnswer": "$Q = 17.59\\text{ MeV} \\approx 17.6\\text{ MeV}$",
    "correctIndex": 1,
    "hintEn": "Multiply mass defect by 931.5: Q = 0.01888 * 931.5 MeV.",
    "hintAr": "اضرب النقص الكتلي في 931.5: Q = 0.01888 * 931.5.",
    "stepByStepSolutionEn": [
      "1. Energy yield formula: $Q = \\Delta m \\times 931.5\\text{ MeV/u}$.",
      "2. Calculate: $Q = 0.01888\\text{ u} \\times 931.5\\text{ MeV/u} \\approx 17.587\\text{ MeV} \\approx 17.6\\text{ MeV}$.",
      "3. About $14.1\\text{ MeV}$ ($80\\%$) is carried away by the high-speed neutron, and $3.5\\text{ MeV}$ ($20\\%$) by the alpha particle."
    ],
    "stepByStepSolutionAr": [
      "١. حساب الطاقة: $Q = \\Delta m \\times 931.5$.",
      "٢. التعويض: $Q = 0.01888 \\times 931.5 \\approx 17.6\\text{ مليون إلكترون فولت}$.",
      "٣. يحمل النيوترون السريع نحو $14.1\\text{ MeV}$ ($80\\%$) من هذه الطاقة، بينما يحمل جسيم ألفا $3.5\\text{ MeV}$."
    ],
    "teacherTipEn": "Per unit fuel mass, fusion produces four times more energy than uranium fission and leaves no long-lived radioactive fission wastes.",
    "teacherTipAr": "لكل وحدة كتلة وقود، ينتج الاندماج أربعة أضعاف طاقة الانشطار دون مخلفات انشطارية مشعة طويلة العمر."
  },
  {
    "id": "egbac_phys_ch5_ex_13",
    "titleEn": "Binding Energy of Deuterium (Heavy Hydrogen)",
    "titleAr": "طاقة الترابط النووي لنواة الديوتيريوم (الهيدروجين الثقيل)",
    "difficulty": "easy",
    "questionEn": "The nucleus of deuterium (deuteron, $^2_1\\text{H}$) consists of $1$ proton and $1$ neutron. Given $m_p = 1.00728\\text{ u}$, $m_n = 1.00866\\text{ u}$, and deuteron mass $M_d = 2.01355\\text{ u}$, what is the binding energy $E_b$ of the deuteron?",
    "questionAr": "تتألف نواة الديوتيريوم (الديوترون $^2_1\\text{H}$) من بروتون واحد ونيوترون واحد. بمعلومية كتلة البروتون $m_p = 1.00728\\text{ u}$، وكتلة النيوترون $m_n = 1.00866\\text{ u}$، وكتلة الديوترون الفعلية $M_d = 2.01355\\text{ u}$، ما طاقة الترابط النووي $E_b$ لنواة الديوتيريوم؟",
    "optionsEn": [
      "$E_b = 1.113\\text{ MeV}$",
      "$E_b = 4.452\\text{ MeV}$",
      "$E_b = 2.226\\text{ MeV}$",
      "$E_b = 8.790\\text{ MeV}$"
    ],
    "optionsAr": [
      "$E_b = 1.113\\text{ مليون إلكترون فولت}$",
      "$E_b = 4.452\\text{ مليون إلكترون فولت}$",
      "$E_b = 2.226\\text{ مليون إلكترون فولت}$",
      "$E_b = 8.790\\text{ مليون إلكترون فولت}$"
    ],
    "correctAnswer": "$E_b = 2.226\\text{ MeV}$",
    "correctIndex": 2,
    "hintEn": "Mass defect: Delta m = m_p + m_n - M_d = 2.01594 - 2.01355 = 0.00239 u. Then E_b = Delta m * 931.5.",
    "hintAr": "النقص الكتلي: Delta m = m_p + m_n - M_d = 0.00239 u. ثم E_b = Delta m * 931.5.",
    "stepByStepSolutionEn": [
      "1. Mass of constituents: $m_p + m_n = 1.00728 + 1.00866 = 2.01594\\text{ u}$.",
      "2. Mass defect: $\\Delta m = 2.01594 - 2.01355 = 0.00239\\text{ u}$.",
      "3. Binding energy: $E_b = 0.00239 \\times 931.5\\text{ MeV/u} \\approx 2.226\\text{ MeV}$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع كتل المكونات: $1.00728 + 1.00866 = 2.01594\\text{ u}$.",
      "٢. النقص في الكتلة: $\\Delta m = 2.01594 - 2.01355 = 0.00239\\text{ u}$.",
      "٣. طاقة الترابط النووي: $E_b = 0.00239 \\times 931.5 = 2.226\\text{ مليون إلكترون فولت}$."
    ],
    "teacherTipEn": "A gamma photon with energy E_gamma > 2.226 MeV can photo-disintegrate a deuteron back into a free proton and neutron.",
    "teacherTipAr": "أي فوتون غاما طاقته أكبر من 2.226 MeV قادر على تفتيت نواة الديوتيريوم شطرين إلى بروتون ونيوترون حرين."
  },
  {
    "id": "egbac_phys_ch5_ex_14",
    "titleEn": "Relativistic Doppler Redshift in Cosmological Receding Galaxies",
    "titleAr": "إزاحة دوبلر النسبية نحو الأحمر في المجرات الكونية المتباعدة",
    "difficulty": "medium",
    "questionEn": "A distant galaxy moves away from Earth at speed $v = 0.60c$. According to the relativistic longitudinal Doppler effect, the observed wavelength $\\lambda_{\\text{obs}}$ of light emitted at rest wavelength $\\lambda_0$ is $\\lambda_{\\text{obs}} = \\lambda_0 \\sqrt{\\frac{1 + v/c}{1 - v/c}}$. For an emitted spectral line of $\\lambda_0 = 400\\text{ nm}$, what wavelength $\\lambda_{\\text{obs}}$ is received on Earth?",
    "questionAr": "تبتعد مجرة كونية سحيقة عن الأرض بسرعة $v = 0.60c$. وفق تأثير دوبلر الطولي النسبي، يرتبط الطول الموجي المرصود $\\lambda_{\\text{obs}}$ بالطول الموجي الأصلي $\\lambda_0$ بالعلاقة $\\lambda_{\\text{obs}} = \\lambda_0 \\sqrt{\\frac{1 + v/c}{1 - v/c}}$. إذا كان الطول الموجي للخط الطيفي المنبعث هو $\\lambda_0 = 400\\text{ نانومتر}$، فما الطول الموجي $\\lambda_{\\text{obs}}$ الذي تستقبله تلسكوبات الأرض؟",
    "optionsEn": [
      "$\\lambda_{\\text{obs}} = 640\\text{ nm}$",
      "$\\lambda_{\\text{obs}} = 500\\text{ nm}$",
      "$\\lambda_{\\text{obs}} = 1000\\text{ nm}$",
      "$\\lambda_{\\text{obs}} = 800\\text{ nm}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\text{obs}} = 640\\text{ نانومتر}$",
      "$\\lambda_{\\text{obs}} = 500\\text{ نانومتر}$",
      "$\\lambda_{\\text{obs}} = 1000\\text{ نانومتر}$",
      "$\\lambda_{\\text{obs}} = 800\\text{ نانومتر}$"
    ],
    "correctAnswer": "$\\lambda_{\\text{obs}} = 800\\text{ nm}$",
    "correctIndex": 3,
    "hintEn": "Calculate sqrt((1 + 0.6) / (1 - 0.6)) = sqrt(1.6 / 0.4) = sqrt(4) = 2. Then lambda_obs = 2 * 400 nm = 800 nm.",
    "hintAr": "احسب جذر((1 + 0.6) / (1 - 0.6)) = جذر(1.6 / 0.4) = جذر(4) = 2. إذن الطول المرصود = 2 * 400 = 800 نانومتر.",
    "stepByStepSolutionEn": [
      "1. Relativistic Doppler redshift formula: $\\frac{\\lambda_{\\text{obs}}}{\\lambda_0} = \\sqrt{\\frac{1 + v/c}{1 - v/c}}$.",
      "2. Substitute $v/c = 0.60$: $\\sqrt{\\frac{1 + 0.60}{1 - 0.60}} = \\sqrt{\\frac{1.60}{0.40}} = \\sqrt{4} = 2.0$.",
      "3. Calculate observed wavelength: $\\lambda_{\\text{obs}} = 2.0 \\times 400\\text{ nm} = 800\\text{ nm}$ (shifted completely from visible violet into the near-infrared!)."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة دوبلر النسبية للانزياح نحو الأحمر: $\\lambda_{\\text{obs}} = \\lambda_0 \\sqrt{\\frac{1 + v/c}{1 - v/c}}$.",
      "٢. التعويض: $\\sqrt{\\frac{1.60}{0.40}} = \\sqrt{4} = 2.0$.",
      "٣. الطول الموجي المستقبَل: $\\lambda_{\\text{obs}} = 2.0 \\times 400 = 800\\text{ نانومتر}$ (انزاح من البنفسجي المرئي إلى الأشعة تحت الحمراء)."
    ],
    "teacherTipEn": "This relativistic redshift provided Edwin Hubble with the observational foundation demonstrating cosmic expansion.",
    "teacherTipAr": "وفر هذا الانزياح النسبي نحو الأحمر لإدوين هابل الأساس الرصدي القاطع لإثبات تمدد الكون."
  },
  {
    "id": "egbac_phys_ch5_ex_15",
    "titleEn": "Neutron Multiplication Factor k and Nuclear Reactor Criticality",
    "titleAr": "معامل تضاعف النيوترونات k وحالة الحرجية في المفاعلات النووية",
    "difficulty": "easy",
    "questionEn": "In a nuclear fission reactor core, the effective neutron multiplication factor is defined as $k = \\frac{\\text{neutrons in generation } n+1}{\\text{neutrons in generation } n}$. What is the operating state of the reactor when $k = 1.0$, $k > 1.0$, and $k < 1.0$?",
    "questionAr": "في قلب مفاعل الانشطار النووي، يُعرف معامل تضاعف النيوترونات الفعال بالعلاقة $k = \\frac{\\text{عدد نيوترونات الجيل الحالي}}{\\text{عدد نيوترونات الجيل السابق}}$. ما الحالة التشغيلية للمفاعل عندما يكون $k = 1.0$، و $k > 1.0$، و $k < 1.0$؟",
    "optionsEn": [
      "$k = 1.0$: Critical (steady-state power); $k > 1.0$: Supercritical (exponential power growth); $k < 1.0$: Subcritical (decaying chain reaction).",
      "$k = 1.0$: Subcritical; $k > 1.0$: Critical; $k < 1.0$: Supercritical.",
      "$k = 1.0$: Meltdown; $k > 1.0$: Safe shutdown; $k < 1.0$: Thermal explosion.",
      "$k = 1.0$: Fusion mode; $k > 1.0$: Fission mode; $k < 1.0$: Radioactive decay."
    ],
    "optionsAr": [
      "$k = 1.0$: حرج (قدرة مستقرة ثابتة)؛ $k > 1.0$: فوق حرج (نمو أسي للقدرة)؛ $k < 1.0$: تحت حرج (اضمحلال التفاعل المتسلسل).",
      "$k = 1.0$: تحت حرج؛ $k > 1.0$: حرج؛ $k < 1.0$: فوق حرج.",
      "$k = 1.0$: انصهار القلب؛ $k > 1.0$: إغلاق آمن؛ $k < 1.0$: انفجار حراري.",
      "$k = 1.0$: نمط اندماج؛ $k > 1.0$: نمط انشطار؛ $k < 1.0$: اضمحلال إشعاعي."
    ],
    "correctAnswer": "$k = 1.0$: Critical (steady-state power); $k > 1.0$: Supercritical (exponential power growth); $k < 1.0$: Subcritical (decaying chain reaction).",
    "correctIndex": 0,
    "hintEn": "k=1 means constant neutron population; k>1 means exponential multiplication; k<1 means die-out.",
    "hintAr": "k=1 تعني ثبات عدد النيوترونات واستقرار المفاعل، k>1 تعني تزايد أسي، k<1 تعني موت التفاعل.",
    "stepByStepSolutionEn": [
      "1. The effective multiplication factor $k$ measures the ratio of fissions from one generation to the next.",
      "2. When $k = 1.0$, the neutron population and fission rate are perfectly constant (critical state, steady commercial power generation).",
      "3. When $k > 1.0$, the neutron population grows exponentially (supercritical, used to raise power or in prompt supercriticality of explosions).",
      "4. When $k < 1.0$, each generation has fewer neutrons than the preceding one, causing the chain reaction to decay and die out (subcritical state, reactor shutdown)."
    ],
    "stepByStepSolutionAr": [
      "١. يقيس معامل التضاعف الفعال $k$ نسبة انشطارات جيل معين مقارنة بالجيل السابق.",
      "٢. عند $k = 1.0$، يكون عدد النيوترونات ومعدل الانشطار ثابتاً تماماً (الحالة الحرجة، توليد طاقة تجاري مستقر).",
      "٣. عند $k > 1.0$، يتزايد عدد النيوترونات بمعدل أسي (فوق حرج، لرفع قدرة المفاعل).",
      "٤. عند $k < 1.0$، يقل عدد النيوترونات في كل جيل متعاقب وتخمد السلسلة الانشطارية (تحت حرج، إيقاف المفاعل)."
    ],
    "teacherTipEn": "Control rods containing boron or cadmium absorb excess neutrons to maintain k exactly at 1.000 during power generation.",
    "teacherTipAr": "تُستخدم قضبان التحكم المصنوعة من البورون أو الكادميوم لامتصاص النيوترونات الزائدة للحفاظ على k = 1.000 بدقة أثناء توليد الطاقة."
  }
];
