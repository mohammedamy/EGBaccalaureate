import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacPhysCh4Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_phys_ch4_db_easy_01",
    "titleEn": "Intrinsic Semiconductor Carrier Equality",
    "titleAr": "تساوي تركيز الشحنات في شبه الموصل النقي",
    "difficulty": "easy",
    "questionEn": "In a pure, intrinsic semiconductor (such as pure Silicon) at thermal equilibrium, the electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "في بلورة شبه موصل نقي (مثل السيليكون النقي) عند الاتزان الحراري، يرتبط تركيز الإلكترونات الحرة $n$ بتركيز الفجوات الموجبة $p$ بالعلاقة:",
    "optionsEn": [
      "$n = p = n_i$ (where $n_i$ is the intrinsic carrier concentration)",
      "$n \\gg p$",
      "$p \\gg n$",
      "$n + p = 0$ strictly at all temperatures"
    ],
    "optionsAr": [
      "$n = p = n_i$ (حيث $n_i$ هو تركيز الشحنات الذاتية في شبه الموصل النقي)",
      "$n \\gg p$",
      "$p \\gg n$",
      "$n + p = 0$ تماماً عند جميع درجات الحرارة"
    ],
    "correctAnswer": "$n = p = n_i$ (where $n_i$ is the intrinsic carrier concentration)",
    "correctIndex": 0,
    "hintEn": "Every broken covalent bond simultaneously releases one free electron and leaves behind one hole.",
    "hintAr": "كل كسر لرابطة تساهمية يحرر إلكتروناً حراً واحداً ويترك مكانه فجوة موجبة واحدة.",
    "stepByStepSolutionEn": [
      "Thermal agitation breaks covalent bonds in intrinsic silicon, generating electron-hole pairs in equal pairs. Therefore, the electron density strictly equals the hole density: $n = p = n_i$."
    ],
    "stepByStepSolutionAr": [
      "تؤدي الطاقة الحرارية لكسر الروابط التساهمية وتوليد أزواج من الإلكترونات والفجوات بالتساوي، وعليه يتساوى تركيزهما تماماً في شبه الموصل النقي."
    ],
    "teacherTipEn": "Intrinsic semiconductors are electrically neutral and carry equal densities of positive and negative mobile charge carriers.",
    "teacherTipAr": "شبه الموصل النقي متعادل كهربياً ويحمل تركيزات متساوية من الشحنات الموجبة والسالبة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_02",
    "titleEn": "Intrinsic Carrier Concentration Temperature Dependence",
    "titleAr": "تأثير رفع درجة الحرارة على التوصيلية في شبه الموصل النقي",
    "difficulty": "easy",
    "questionEn": "When the temperature of an intrinsic semiconductor is increased, its electrical conductivity increases significantly because:",
    "questionAr": "عند رفع درجة حرارة شبه موصل نقي، تزداد موصليته الكهربية بشكل ملحوظ لأن:",
    "optionsEn": [
      "The atomic mass of silicon nuclei decreases by half",
      "Thermal energy breaks more covalent bonds, exponentially increasing the intrinsic carrier concentration $n_i$",
      "Electrons lose their electrical charge and become neutral neutrons",
      "The physical length of the semiconductor crystal shrinks to zero"
    ],
    "optionsAr": [
      "الكتلة الذرية لأنوية السيليكون تنخفض إلى النصف",
      "الطاقة الحرارية تكسر المزيد من الروابط التساهمية، مما يضاعف تركيز الشحنات الحرة $n_i$ أسياً",
      "الإلكترونات تفقد شحنتها الكهربية وتتحول لنيوترونات متعادلة",
      "الطول الفيزيائي لبلورة شبه الموصل ينكمش للصفر"
    ],
    "correctAnswer": "Thermal energy breaks more covalent bonds, exponentially increasing the intrinsic carrier concentration $n_i$",
    "correctIndex": 1,
    "hintEn": "Thermal generation increases $n_i \\propto T^{3/2} e^{-E_g / 2kT}$. Metals have negative temp coefficient; semiconductors have positive!",
    "hintAr": "التوليد الحراري يرفع عدد حاملات الشحنة أسياً. الفلزات تقل موصليتها بالحرارة، بينما أشباه الموصلات تزداد موصليتها!",
    "stepByStepSolutionEn": [
      "Unlike metals where resistance increases with temperature due to lattice scattering, semiconductors have a strong negative temperature coefficient of resistance (NTC): higher $T$ excites massive numbers of electrons across the bandgap $E_g$."
    ],
    "stepByStepSolutionAr": [
      "بخلاف الفلزات التي تزداد مقاومتها بالحرارة، تمتلك أشباه الموصلات معامل حراري سالب للمقاومة: رفع الحرارة يكسر الروابط ويضخ ملايين الإلكترونات لحزمة التوصيل فترتفع الموصلية."
    ],
    "teacherTipEn": "Thermistor temperature sensors rely directly on this NTC behavior.",
    "teacherTipAr": "تعتمد مجسات الثيرمستور الحرارية على هذه الخاصية مباشرة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_03",
    "titleEn": "Silicon Bandgap Energy at Room Temperature",
    "titleAr": "قيمة فجوة الطاقة للسيليكون عند درجة حرارة الغرفة",
    "difficulty": "easy",
    "questionEn": "The fundamental energy bandgap $E_g$ of crystalline Silicon at room temperature ($300\\text{ K}$) is approximately:",
    "questionAr": "تبلغ فجوة الطاقة المحظورة $E_g$ لبلورة السيليكون عند درجة حرارة الغرفة (300 كلفن) حوالي:",
    "optionsEn": [
      "$0.05\\text{ eV}$",
      "$6.00\\text{ eV}$",
      "$1.12\\text{ eV}$",
      "$0.00\\text{ eV}$ (overlapping bands)"
    ],
    "optionsAr": [
      "$0.05\\text{ eV}$",
      "$6.00\\text{ eV}$",
      "$1.12\\text{ eV}$",
      "$0.00\\text{ eV}$ (تداخل الحزم)"
    ],
    "correctAnswer": "$1.12\\text{ eV}$",
    "correctIndex": 2,
    "hintEn": "Compare: Silicon is $1.12\\text{ eV}$, Germanium is $0.67\\text{ eV}$, Insulator $> 5\\text{ eV}$.",
    "hintAr": "قارن: السيليكون 1.12 إلكترون فولت، الجرمانيوم 0.67 إلكترون فولت، العوازل تفوق 5 إلكترون فولت.",
    "stepByStepSolutionEn": [
      "Silicon has an indirect bandgap of $E_g \\approx 1.12\\text{ eV}$ at $300\\text{ K}$, placing it comfortably in the semiconductor domain where room-temperature thermal energy ($k_B T \\approx 0.026\\text{ eV}$) generates modest intrinsic carriers ($n_i \\approx 1.5 \\times 10^{10}\\text{ cm}^{-3}$)."
    ],
    "stepByStepSolutionAr": [
      "فجوة طاقة السيليكون تبلغ نحو 1.12 إلكترون فولت عند 300 كلفن، مما يجعله شبه موصل مثالي للاستقرار الحراري عند درجات حرارة الأجهزة الإلكترونية المعتادة."
    ],
    "teacherTipEn": "Germanium has a smaller bandgap ($0.67\\text{ eV}$), making it more thermally sensitive and prone to leakage current.",
    "teacherTipAr": "الجرمانيوم فجوته أصغر (0.67 إلكترون فولت)، ولذا يتأثر بالحرارة ويسرب تياراً أكبر."
  },
  {
    "id": "egbac_phys_ch4_db_easy_04",
    "titleEn": "N-Type Semiconductor Pentavalent Dopants",
    "titleAr": "الشوائب الخماسية لإنتاج شبه الموصل من النوع N",
    "difficulty": "easy",
    "questionEn": "An n-type extrinsic semiconductor is produced by doping pure tetravalent silicon with tiny traces of pentavalent atoms (Group V) such as:",
    "questionAr": "يتم الحصول على شبه موصل غير نقي من النوع N بتطعيم السيليكون رباعي التكافؤ بشوائب خماسية التكافؤ (المجموعة الخامسة) مثل:",
    "optionsEn": [
      "Boron ($\\text{B}$), Aluminum ($\\text{Al}$), or Gallium ($\\text{Ga}$)",
      "Helium ($\\text{He}$), Neon ($\\text{Ne}$), or Argon ($\\text{Ar}$)",
      "Sodium ($\\text{Na}$), Potassium ($\\text{K}$), or Calcium ($\\text{Ca}$)",
      "Phosphorus ($\\text{P}$), Arsenic ($\\text{As}$), or Antimony ($\\text{Sb}$)"
    ],
    "optionsAr": [
      "البورون ($\\text{B}$)، أو الألومنيوم ($\\text{Al}$)، أو الغاليوم ($\\text{Ga}$)",
      "الهيليوم ($\\text{He}$)، أو النيون ($\\text{Ne}$)، أو الأرجون ($\\text{Ar}$)",
      "الصوديوم ($\\text{Na}$)، أو البوتاسيوم ($\\text{K}$)، أو الكالسيوم ($\\text{Ca}$)",
      "الفوسفور ($\\text{P}$)، أو الزرنيخ ($\\text{As}$)، أو الأنتيمون ($\\text{Sb}$)"
    ],
    "correctAnswer": "Phosphorus ($\\text{P}$), Arsenic ($\\text{As}$), or Antimony ($\\text{Sb}$)",
    "correctIndex": 3,
    "hintEn": "Group V elements have 5 valence electrons: 4 form bonds, 1 is easily donated.",
    "hintAr": "عناصر المجموعة الخامسة تمتلك 5 إلكترونات تكافؤ: 4 تشارك في الروابط والخامس يتحرر بسهولة.",
    "stepByStepSolutionEn": [
      "Doping with pentavalent donor atoms (P, As, Sb) supplies an extra fifth valence electron that is not tied in covalent bonds and requires only $\\sim 0.05\\text{ eV}$ to enter the conduction band, vastly multiplying free electrons."
    ],
    "stepByStepSolutionAr": [
      "تحتوي ذرة الشائبة المانحة على 5 إلكترونات تكافؤ، ترتبط 4 منها مع ذرات السيليكون ويبقى الخامس حراً ضعيف الارتباط، ليتحرر بطاقة حرارية ضئيلة جداً (~0.05 إلكترون فولت) مانحاً إلكترونات حرة."
    ],
    "teacherTipEn": "Remember: Pentavalent $\\to$ Donors $\\to$ N-type.",
    "teacherTipAr": "احفظ القاعدة: شائبة خماسية $\\to$ ذرة مانحة $\\to$ شبه موصل نوع N."
  },
  {
    "id": "egbac_phys_ch4_db_easy_05",
    "titleEn": "P-Type Semiconductor Trivalent Dopants",
    "titleAr": "الشوائب الثلاثية لإنتاج شبه الموصل من النوع P",
    "difficulty": "easy",
    "questionEn": "A p-type extrinsic semiconductor is produced by doping tetravalent silicon with trivalent acceptor impurities (Group III) such as:",
    "questionAr": "يتم إنتاج شبه موصل غير نقي من النوع P بتطعيم بلورة السيليكون بشوائب ثلاثية التكافؤ (المجموعة الثالثة) مثل:",
    "optionsEn": [
      "Boron ($\\text{B}$), Aluminum ($\\text{Al}$), or Indium ($\\text{In}$)",
      "Phosphorus ($\\text{P}$), Bismuth ($\\text{Bi}$), or Arsenic ($\\text{As}$)",
      "Iron ($\\text{Fe}$), Cobalt ($\\text{Co}$), or Nickel ($\\text{Ni}$)",
      "Carbon ($\\text{C}$), Tin ($\\text{Sn}$), or Lead ($\\text{Pb}$)"
    ],
    "optionsAr": [
      "البورون ($\\text{B}$)، أو الألومنيوم ($\\text{Al}$)، أو الإنديوم ($\\text{In}$)",
      "الفوسفور ($\\text{P}$)، أو البزموت ($\\text{Bi}$)، أو الزرنيخ ($\\text{As}$)",
      "الحديد ($\\text{Fe}$)، أو الكوبالت ($\\text{Co}$)، أو النيكل ($\\text{Ni}$)",
      "الكربون ($\\text{C}$)، أو القصدير ($\\text{Sn}$)، أو الرصاص ($\\text{Pb}$)"
    ],
    "correctAnswer": "Boron ($\\text{B}$), Aluminum ($\\text{Al}$), or Indium ($\\text{In}$)",
    "correctIndex": 0,
    "hintEn": "Group III elements have 3 valence electrons: one bond lacks an electron, creating a hole.",
    "hintAr": "عناصر المجموعة الثالثة تمتلك 3 إلكترونات تكافؤ، فيبقى موضع رابطة فارغاً يمثل فجوة موجبة متقبلة.",
    "stepByStepSolutionEn": [
      "Trivalent atoms (Boron, Aluminum, Gallium, Indium) accept an electron from a neighboring silicon atom to complete their octet, creating mobile positively charged vacancies (holes) in the valence band."
    ],
    "stepByStepSolutionAr": [
      "تحتوي الشائبة الثلاثية (مثل البورون) على 3 إلكترونات تكافؤ، فتتقبل إلكتروناً من رابطة مجاورة تاركة فجوة موجبة حرة الحركة في حزمة التكافؤ وتتحول لأيون سالب ثابت."
    ],
    "teacherTipEn": "Remember: Trivalent $\\to$ Acceptors $\\to$ P-type.",
    "teacherTipAr": "احفظ القاعدة: شائبة ثلاثية $\\to$ ذرة متقبلة $\\to$ شبه موصل نوع P."
  },
  {
    "id": "egbac_phys_ch4_db_easy_06",
    "titleEn": "Law of Mass Action in Semiconductors",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات",
    "difficulty": "easy",
    "questionEn": "In any non-degenerate semiconductor at thermal equilibrium, the product of the free electron concentration $n$ and hole concentration $p$ is strictly governed by the Law of Mass Action:",
    "questionAr": "في أي شبه موصل غير منحط عند الاتزان الحراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بقانون فعل الكتلة:",
    "optionsEn": [
      "$n + p = n_i$",
      "$n \\cdot p = n_i^2$",
      "$\\frac{n}{p} = n_i^2$",
      "$n \\cdot p = 2 n_i$"
    ],
    "optionsAr": [
      "$n + p = n_i$",
      "$n \\cdot p = n_i^2$",
      "$\\frac{n}{p} = n_i^2$",
      "$n \\cdot p = 2 n_i$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 1,
    "hintEn": "Mass action product $n \\cdot p$ depends only on temperature and bandgap, NOT on doping level.",
    "hintAr": "حاصل ضرب التركيزين $n \\cdot p = n_i^2$ ثابت عند نفس درجة الحرارة ولا يعتمد على تركيز الشوائب.",
    "stepByStepSolutionEn": [
      "At thermal equilibrium, generation rate equals recombination rate: $G = R = r \\cdot n \\cdot p$. Since $G = r \\cdot n_i^2$, we have $n \\cdot p = n_i^2$. Increasing electron density $n$ by donor doping suppresses hole concentration $p$ proportionally."
    ],
    "stepByStepSolutionAr": [
      "عند الاتزان الحراري يتساوى معدل التوليد مع معدل الالتحام: $R = r \\cdot n \\cdot p$. وبما أن التوليد ثابت بالحرارة، فإن $n \\cdot p = n_i^2$. ولذا فإن زيادة الإلكترونات بالتطعيم المانح تقلل الفجوات بالالتحام."
    ],
    "teacherTipEn": "Holds true for both n-type and p-type materials as long as degenerate limits are not exceeded.",
    "teacherTipAr": "ينطبق قانون فعل الكتلة على النوعين N و P عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_07",
    "titleEn": "Overall Electrical Neutrality of Doped Semiconductors",
    "titleAr": "التعادل الكهربي العام لشبه الموصل المطعم",
    "difficulty": "easy",
    "questionEn": "Why is a crystal of n-type silicon electrically neutral as a whole, despite having an overwhelmingly large concentration of free negative electrons ($n \\gg p$)?",
    "questionAr": "لماذا تكون بلورة شبه الموصل من النوع N متعادلة كهربياً ككل، على الرغم من احتوائها على تركيز هائل من الإلكترونات الحرة السالبة ($n \\gg p$)؟",
    "optionsEn": [
      "Electrons lose their electrical charge when entering silicon",
      "Silicon atoms attract positrons from outer space to cancel electrons",
      "Every free electron contributed by a donor dopant is balanced by an immobile, positively charged ionized donor nucleus ($N_d^+$) fixed in the lattice: $n = p + N_d^+$",
      "The crystal has zero total mass and zero net charge"
    ],
    "optionsAr": [
      "لأن الإلكترونات تفقد شحنتها الكهربية بمجرد دخولها بلورة السيليكون",
      "لأن ذرات السيليكون تجذب بوزيترونات من الفضاء الخارجي لمعادلة الإلكترونات",
      "لأن كل إلكترون حر تمنحه الشائبة تعادله شحنة موجبة متطابقة لأيون مانح موجب ثابت ($N_d^+$) في الشبكة البلورية: $n = p + N_d^+$",
      "لأن البلورة عديمة الكتلة والشحنة تماماً"
    ],
    "correctAnswer": "Every free electron contributed by a donor dopant is balanced by an immobile, positively charged ionized donor nucleus ($N_d^+$) fixed in the lattice: $n = p + N_d^+$",
    "correctIndex": 2,
    "hintEn": "Doping adds neutral atoms. Mobile electrons are matched by fixed positive donor ions.",
    "hintAr": "الذرات المضافة متعادلة أصلاً. تحرر الإلكترون السالب يترك وراءه أيوناً مانحاً موجباً ثابتاً فيتعادل الجسم.",
    "stepByStepSolutionEn": [
      "A common student misconception is thinking n-type means negatively charged. The donor atom is neutral before ionization; losing an electron leaves an immobile positive core $N_d^+$. Net charge density is $\\rho = q(p - n + N_d^+ - N_a^-) = 0$."
    ],
    "stepByStepSolutionAr": [
      "خطأ شائع يقع فيه الطلاب: النوع N لا يعني أن البلورة مشحونة سالباً! بل هي متعادلة كهربياً لأن الشحنات الحرة السالبة تعادلها بدقة الأيونات الموجبة الثابتة في الشبكة البلورية."
    ],
    "teacherTipEn": "Both n-type and p-type crystals are strictly electrically neutral.",
    "teacherTipAr": "كلا النوعين N و P متعادلان كهربياً في حالتهما الكلية."
  },
  {
    "id": "egbac_phys_ch4_db_easy_08",
    "titleEn": "Majority and Minority Carriers in N-Type Material",
    "titleAr": "حاملات الشحنة السائدة والأقلية في النوع N",
    "difficulty": "easy",
    "questionEn": "In an n-type silicon crystal, the majority and minority charge carriers are, respectively:",
    "questionAr": "في بلورة السيليكون من النوع N، تكون حاملات الشحنة السائدة (الأغلبية) والأقلية على الترتيب هي:",
    "optionsEn": [
      "Holes (majority) and electrons (minority)",
      "Positrons (majority) and neutrons (minority)",
      "Positive ions (majority) and negative ions (minority)",
      "Electrons (majority) and holes (minority)"
    ],
    "optionsAr": [
      "الفجوات الموجبة (أغلبية) والإلكترونات الحرة (أقلية)",
      "البوزيترونات (أغلبية) والنيوترونات (أقلية)",
      "الأيونات الموجبة (أغلبية) والأيونات السالبة (أقلية)",
      "الإلكترونات الحرة (أغلبية) والفجوات الموجبة (أقلية)"
    ],
    "correctAnswer": "Electrons (majority) and holes (minority)",
    "correctIndex": 3,
    "hintEn": "N-type: Negative electrons dominate ($n \\approx N_d \\gg p$).",
    "hintAr": "النوع N: الإلكترونات السالبة هي الأغلبية السائدة ($n \\approx N_d \\gg p$).",
    "stepByStepSolutionEn": [
      "Donor dopants provide vast electron numbers ($n \\approx N_d$). By the law of mass action, $p = n_i^2 / N_d \\ll n$. Thus, electrons are the majority carriers, and thermal holes are the minority carriers."
    ],
    "stepByStepSolutionAr": [
      "توفر الشوائب المانحة كثافة إلكترونات ضخمة تجعلها حاملات الشحنة السائدة (الأغلبية)، بينما يتقلص تركيز الفجوات وفق قانون فعل الكتلة لتصبح حاملات الشحنة الأقلية."
    ],
    "teacherTipEn": "In p-type, the roles are reversed: holes are majority, electrons are minority.",
    "teacherTipAr": "في النوع P ينعكس الوضع: الفجوات أغلبية والإلكترونات أقلية."
  },
  {
    "id": "egbac_phys_ch4_db_easy_09",
    "titleEn": "Fermi Level Position in Doped Semiconductors",
    "titleAr": "موقع مستوى فيرمي في أشباه الموصلات المطمعة",
    "difficulty": "easy",
    "questionEn": "In an n-type semiconductor at low-to-moderate temperatures, the Fermi energy level $E_F$ is located:",
    "questionAr": "في شبه موصل من النوع N عند درجات حرارة معتدلة، يقع مستوى فيرمي $E_F$:",
    "optionsEn": [
      "Near the bottom of the conduction band $E_c$, above the intrinsic midgap level $E_i$",
      "Near the top of the valence band $E_v$",
      "Exactly in the center of the atomic nucleus",
      "Infinitely far above the vacuum energy level"
    ],
    "optionsAr": [
      "قريباً من قاع حزمة التوصيل $E_c$، أعلى من منتصف فجوة الطاقة الذاتية $E_i$",
      "قريباً من قمة حزمة التكافؤ $E_v$",
      "في مركز النواة الذرية تماماً",
      "في مالانهاية فوق طاقة الفراغ"
    ],
    "correctAnswer": "Near the bottom of the conduction band $E_c$, above the intrinsic midgap level $E_i$",
    "correctIndex": 0,
    "hintEn": "Fermi level rises toward $E_c$ in n-type, and drops toward $E_v$ in p-type.",
    "hintAr": "يرتفع مستوى فيرمي نحو حزمة التوصيل في النوع N، ويهبط نحو حزمة التكافؤ في النوع P.",
    "stepByStepSolutionEn": [
      "Because $n = N_c e^{-(E_c - E_F)/kT}$, high electron concentration $n \\approx N_d$ pushes $E_F$ upward toward the conduction band edge $E_c$. In p-type, high hole concentration pulls $E_F$ down toward $E_v$."
    ],
    "stepByStepSolutionAr": [
      "وفق إحصاء فيرمي-ديراك، فإن زيادة تركيز الإلكترونات ترفع مستوى فيرمي ليقترب من حزمة التوصيل $E_c$. بينما في النوع P تجذبه الفجوات ليهبط نحو حزمة التكافؤ $E_v$."
    ],
    "teacherTipEn": "In intrinsic semiconductor, $E_F$ lies virtually at the exact midgap.",
    "teacherTipAr": "في شبه الموصل النقي يقع مستوى فيرمي في منتصف فجوة الطاقة تماماً."
  },
  {
    "id": "egbac_phys_ch4_db_easy_10",
    "titleEn": "Formation of the P-N Junction Depletion Region",
    "titleAr": "تكون منطقة النضوب (القحط) في الوصلة الثنائية PN",
    "difficulty": "easy",
    "questionEn": "When a p-type region and an n-type region meet in a continuous semiconductor crystal, the depletion region (space charge layer) is formed by:",
    "questionAr": "عند تلامس منطقتي P و N في بلورة شبه موصل متصلة، تتشكل منطقة النضوب (حاجز الجهد) نتيجة:",
    "optionsEn": [
      "Complete chemical melting of the junction into liquid silicon",
      "Diffusion of majority electrons and holes across the metallurgical junction, recombining and leaving behind uncompensated fixed ionized donors ($N_d^+$) and acceptors ($N_a^-$)",
      "Air leaking into the microscopic gap between the two sides",
      "Electrons acquiring infinite mass and freezing permanently in place"
    ],
    "optionsAr": [
      "الانصهار الكيميائي التام للوصلة إلى سيليكون سائل",
      "انتشار إلكترونات وفجوات الأغلبية عبر السطح الفاصل والتحامها، تاركة وراءها أيونات مانحة موجبة ($N_d^+$) وأيونات متقبلة سالبة ($N_a^-$) ثابتة وغير معوضة",
      "تسرب الهواء في الفجوة المجهرية بين الطرفين",
      "اكتساب الإلكترونات لكتلة لا نهائية وتجمدها في مكانها"
    ],
    "correctAnswer": "Diffusion of majority electrons and holes across the metallurgical junction, recombining and leaving behind uncompensated fixed ionized donors ($N_d^+$) and acceptors ($N_a^-$)",
    "correctIndex": 1,
    "hintEn": "Diffusion empties the border region of mobile carriers, unmasking fixed bound ionic charges.",
    "hintAr": "الانتشار يفرغ منطقة التماس من الشحنات الحرة، كاشفاً الأيونات الثابتة المقيدة في الشبكة البلورية.",
    "stepByStepSolutionEn": [
      "Concentration gradients drive electrons from n to p and holes from p to n. As they diffuse and recombine, they leave behind bare ionized donor atoms ($+q$) on the n-side and acceptor atoms ($-q$) on the p-side, devoid of mobile carriers ('depleted')."
    ],
    "stepByStepSolutionAr": [
      "يدفع فارق التركيز الإلكترونات للانتشار من N إلى P والفجوات من P إلى N. والتحامهما يفرغ منطقة التماس من الشحنات الحرة، كاشفاً الأيونات الموجبة في الجانب N والسالبة في الجانب P لتنشأ منطقة النضوب."
    ],
    "teacherTipEn": "This space charge layer establishes the internal built-in electric field.",
    "teacherTipAr": "طبقة الشحنة الفراغية هذه هي التي تنشئ المجال الكهربي الداخلي للوصلة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_11",
    "titleEn": "Built-In Electric Field Direction in P-N Junction",
    "titleAr": "اتجاه المجال الكهربي الداخلي في الوصلة الثنائية PN",
    "difficulty": "easy",
    "questionEn": "The internal built-in electric field $\\vec{E}_{\\text{bi}}$ inside the depletion region of an unbiased p-n junction points:",
    "questionAr": "يشير اتجاه المجال الكهربي الداخلي $\\vec{E}_{\\text{bi}}$ داخل منطقة النضوب لوصلة PN غير المنحازة:",
    "optionsEn": [
      "From the p-region towards the n-region",
      "Parallel to the contact wires outside the diode",
      "From the positively charged n-region towards the negatively charged p-region",
      "In circular loops rotating clockwise around the junction"
    ],
    "optionsAr": [
      "من منطقة P نحو منطقة N",
      "موازياً للأسلاك الموصلة خارج الدايود",
      "من منطقة N ذات الأيونات الموجبة نحو منطقة P ذات الأيونات السالبة",
      "في حلقات دائرية تدور مع عقارب الساعة حول الوصلة"
    ],
    "correctAnswer": "From the positively charged n-region towards the negatively charged p-region",
    "correctIndex": 2,
    "hintEn": "Electric field always points from positive charges ($N_d^+$ on n-side) to negative charges ($N_a^-$ on p-side).",
    "hintAr": "خطوط المجال الكهربي تنبع دائماً من الشحنات الموجبة (أيونات N) إلى السالبة (أيونات P).",
    "stepByStepSolutionEn": [
      "Fixed donor ions on the n-side carry positive charge $+q$, while fixed acceptor ions on the p-side carry negative charge $-q$. By electrostatics, the built-in electric field $\\vec{E}$ points strictly from n to p, opposing further majority carrier diffusion."
    ],
    "stepByStepSolutionAr": [
      "تحمل الأيونات المانحة في N شحنة موجبة، والأيونات المتقبلة في P شحنة سالبة. وبقوانين الكهربية الساكنة، يتجه المجال الداخلي من N إلى P، معارضاً استمرار انتشار حاملات الشحنة."
    ],
    "teacherTipEn": "This internal field drives drift current that exactly cancels diffusion current at equilibrium.",
    "teacherTipAr": "يولد هذا المجال الداخلي تيار انجراف يعادل تيار الانتشار تماماً عند الاتزان."
  },
  {
    "id": "egbac_phys_ch4_db_easy_12",
    "titleEn": "Thermal Equilibrium Dynamic Balance in P-N Junction",
    "titleAr": "الاتزان الديناميكي بين تيار الانتشار والانجراف",
    "difficulty": "easy",
    "questionEn": "At zero external bias voltage ($V = 0$), the net electrical current through an ideal p-n junction is strictly zero because:",
    "questionAr": "عند انعدام الجهد الخارجي ($V = 0$)، ينعدم التيار الكهربي الصافي المار في الوصلة الثنائية PN تماماً لأن:",
    "optionsEn": [
      "All mobile carriers inside the crystal have ceased moving",
      "The semiconductor material has turned into a superconductor",
      "The battery inside the crystal has run out of chemical energy",
      "The forward diffusion current of majority carriers is precisely balanced and canceled by the reverse drift current of minority carriers"
    ],
    "optionsAr": [
      "جميع الشحنات الحرة داخل البلورة توقفت عن الحركة تماماً",
      "مادة شبه الموصل تحولت إلى موصل فائق",
      "البطارية الداخلية فرغت من طاقتها الكيميائية",
      "تيار الانتشار الأمامي لحاملات الأغلبية يتوازن ويتلاشى بدقة مع تيار الانجراف العكسي لحاملات الأقلية"
    ],
    "correctAnswer": "The forward diffusion current of majority carriers is precisely balanced and canceled by the reverse drift current of minority carriers",
    "correctIndex": 3,
    "hintEn": "Dynamic equilibrium: Diffusion (pushed by concentration gradient) = Drift (pushed by built-in field).",
    "hintAr": "اتزان ديناميكي: تيار الانتشار (بفعل تدرج التركيز) يعادل تيار الانجراف (بفعل المجال الداخلي).",
    "stepByStepSolutionEn": [
      "Electrons diffuse from n to p against the built-in electric field, while minority thermal electrons in the p-region are swept by the field from p to n (drift). At zero bias, $J_{\\text{diff}} + J_{\\text{drift}} = 0$ for both electrons and holes identically."
    ],
    "stepByStepSolutionAr": [
      "تنتشر إلكترونات الأغلبية من N إلى P ضد المجال الداخلي، بينما تنجرف إلكترونات الأقلية الحرارية بفعل المجال من P إلى N. وعند غياب الجهد الخارجي، يتساوى التياران في المقدار ويتعاكسان في الاتجاه فينعدم التيار الصافي."
    ],
    "teacherTipEn": "Crucial thermodynamic law: a passive two-terminal device at thermal equilibrium produces zero current.",
    "teacherTipAr": "قانون ديناميكي أساسي: لا يمكن لأي نبيطة غير منحازة أن تولد تياراً ذاتياً عند الاتزان الحراري."
  },
  {
    "id": "egbac_phys_ch4_db_easy_13",
    "titleEn": "P-N Junction Forward Bias Electrical Behavior",
    "titleAr": "سلوك الوصلة الثنائية PN عند التوصيل الأمامي",
    "difficulty": "easy",
    "questionEn": "When a p-n junction is connected in forward bias (positive terminal of battery connected to p-side, negative to n-side):",
    "questionAr": "عند توصيل الوصلة الثنائية PN في حالة انحياز أمامي (توصيل القطب الموجب بالطرف P والسالب بالطرف N):",
    "optionsEn": [
      "The external potential opposes and reduces the built-in barrier, narrowing the depletion width and allowing massive majority carrier diffusion current",
      "The depletion region expands until it fills the entire crystal",
      "The barrier height increases by the battery voltage",
      "All electrons reverse their direction and flow backward into the battery positive pole"
    ],
    "optionsAr": [
      "يعاكس الجهد الخارجي حاجز الجهد الداخلي ويقلله، مما يقلص سمك منطقة النضوب ويسمح بمرور تيار انتشار هائل لحاملات الأغلبية",
      "تتسع منطقة النضوب حتى تملأ البلورة كاملة",
      "يزداد ارتفاع حاجز الجهد بمقدار جهد البطارية",
      "تعكس جميع الإلكترونات اتجاهها وتتدفق للخلف نحو القطب الموجب"
    ],
    "correctAnswer": "The external potential opposes and reduces the built-in barrier, narrowing the depletion width and allowing massive majority carrier diffusion current",
    "correctIndex": 0,
    "hintEn": "Forward bias lowers the hill: barrier becomes $V_{bi} - V_f$, allowing exponential carrier flow.",
    "hintAr": "الانحياز الأمامي يخفض حاجز الجهد: يصبح الفارق $V_{bi} - V_f$، مما يفتح الطريق لتدفق هائل للتيار.",
    "stepByStepSolutionEn": [
      "The applied forward voltage $V_f$ counteracts the built-in potential $V_{bi}$, lowering the net barrier to $V_{bi} - V_f$. Depletion width $W \\propto \\sqrt{V_{bi} - V_f}$ shrinks, enabling electrons and holes to overcome the barrier and flood across the junction."
    ],
    "stepByStepSolutionAr": [
      "يطبق الجهد الخارجي مجالاً يعاكس المجال الداخلي، فينخفض الحاجز الكلي إلى $V_{bi} - V_f$ ويضيق سمك منطقة النضوب، مما يتيح للإلكترونات والفجوات عبور الوصلة بسهولة والتدفق كتيار أمامي كبير."
    ],
    "teacherTipEn": "Typical threshold turn-on voltage is $\\approx 0.7\\text{ V}$ for Silicon and $\\approx 0.3\\text{ V}$ for Germanium.",
    "teacherTipAr": "جهد الحاجز الأمامي للتوصيل هو نحو 0.7 فولت للسيليكون و 0.3 فولت للجرمانيوم."
  },
  {
    "id": "egbac_phys_ch4_db_easy_14",
    "titleEn": "P-N Junction Reverse Bias Electrical Behavior",
    "titleAr": "سلوك الوصلة الثنائية PN عند التوصيل العكسي",
    "difficulty": "easy",
    "questionEn": "When a p-n junction is placed in reverse bias (positive battery terminal to n-side, negative to p-side):",
    "questionAr": "عند توصيل الوصلة الثنائية PN في حالة انحياز عكسي (القطب الموجب بالطرف N والسالب بالطرف P):",
    "optionsEn": [
      "Current increases exponentially up to thousands of amperes instantly",
      "The barrier height increases to $V_{bi} + V_r$, the depletion region widens, majority diffusion drops to zero, and only a minute reverse saturation current $I_s$ flows",
      "The depletion layer disappears completely",
      "The diode turns into a high-gain radio transmitter"
    ],
    "optionsAr": [
      "يزداد التيار أسياً حتى آلاف الأمبيرات فورياً",
      "يزداد ارتفاع حاجز الجهد إلى $V_{bi} + V_r$، وتتسع منطقة النضوب، وينعدم تيار انتشار الأغلبية، ولا يمر سوى تيار إشباع عكسي ضئيل للغاية $I_s$",
      "تختفي منطقة النضوب تماماً من الوجود",
      "يتحول الدايود إلى جهاز إرسال راديوي عالي التكبير"
    ],
    "correctAnswer": "The barrier height increases to $V_{bi} + V_r$, the depletion region widens, majority diffusion drops to zero, and only a minute reverse saturation current $I_s$ flows",
    "correctIndex": 1,
    "hintEn": "Reverse bias widens the depletion zone: barrier becomes $V_{bi} + V_r$, blocking majority carriers.",
    "hintAr": "الانحياز العكسي يوسع منطقة النضوب: يرتفع الحاجز إلى $V_{bi} + V_r$ مانعاً مرور شحنات الأغلبية.",
    "stepByStepSolutionEn": [
      "The applied voltage aids the built-in field, pulling majority carriers further away from the junction. Depletion width expands ($W \\propto \\sqrt{V_{bi} + V_r}$). Majority carrier diffusion is completely halted; only thermally generated minority carriers drift across, creating a tiny saturation current $I_s$ (picoamps to nanoamps)."
    ],
    "stepByStepSolutionAr": [
      "يعزز الجهد العكسي المجال الداخلي، ساحباً حاملات الأغلبية بعيداً عن الوصلة، فتتسع منطقة النضوب مانعة الانتشار تماماً، ولا يمر إلا تيار ضئيل جداً ناتج عن انجراف حاملات الأقلية الحرارية يسمى تيار الإشباع العكسي."
    ],
    "teacherTipEn": "This one-way conduction property makes the p-n junction an ideal electrical rectifier.",
    "teacherTipAr": "خاصية تمرير التيار في اتجاه واحد تجعل الوصلة الثنائية مقوماً مثالياً للتيار المتردد."
  },
  {
    "id": "egbac_phys_ch4_db_easy_15",
    "titleEn": "Ideal Diode Shockley Equation",
    "titleAr": "معادلة شوكلي للدايود المثالي",
    "difficulty": "easy",
    "questionEn": "The current-voltage ($I-V$) characteristic of an ideal p-n junction diode under applied bias $V$ is described by the Shockley equation:",
    "questionAr": "توصف العلاقة بين التيار والجهد ($I-V$) للوصلة الثنائية المثالية تحت جهد $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_s \\cdot \\frac{qV}{k_B T}$",
      "$I = I_s \\left( 1 - e^{-qV / k_B T} \\right)^2$",
      "$I = I_s \\left( e^{qV / (n k_B T)} - 1 \\right)$",
      "$I = \\frac{V^2}{I_s \\cdot R}$"
    ],
    "optionsAr": [
      "$I = I_s \\cdot \\frac{qV}{k_B T}$",
      "$I = I_s \\left( 1 - e^{-qV / k_B T} \\right)^2$",
      "$I = I_s \\left( e^{qV / (n k_B T)} - 1 \\right)$",
      "$I = \\frac{V^2}{I_s \\cdot R}$"
    ],
    "correctAnswer": "$I = I_s \\left( e^{qV / (n k_B T)} - 1 \\right)$",
    "correctIndex": 2,
    "hintEn": "Exponential in forward bias ($V > 0$); saturates to $-I_s$ in reverse bias ($V < 0$).",
    "hintAr": "دالة أسية في التوصيل الأمامي ($V>0$) وتؤول إلى $-I_s$ في التوصيل العكسي ($V<0$).",
    "stepByStepSolutionEn": [
      "Under forward bias ($V \\gg k_B T/q$), the exponential term dominates: $I \\approx I_s e^{qV / n k_B T}$. Under reverse bias ($V < 0$), the exponential term vanishes, leaving $I \\approx -I_s$."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل الأمامي تهيمن الدالة الأسية ليتصاعد التيار بسرعة فائقة، بينما في التوصيل العكسي تتلاشى الدالة الأسية ليتبقى تيار الإشباع العكسي الثابت $-I_s$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / q \\approx 25.9\\text{ mV}$ at room temperature.",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / q$ يعادل نحو 26 مللي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_16",
    "titleEn": "Half-Wave Rectification Using a P-N Junction",
    "titleAr": "تقويم نصف الموجة باستخدام الوصلة الثنائية",
    "difficulty": "easy",
    "questionEn": "In a half-wave rectifier circuit driven by an alternating sinusoidal AC voltage, the single diode conducts current:",
    "questionAr": "في دائرة تقويم نصف الموجة المغذاة بجهد تيار متردد جيبي، يمرر الدايود الواحد التيار:",
    "optionsEn": [
      "Continuously in both directions with doubled frequency",
      "Only during the negative half-cycles with zero voltage drop",
      "Never, acting as a permanent open circuit at all frequencies",
      "Only during the positive half-cycles when the diode is forward-biased, blocking current during negative half-cycles"
    ],
    "optionsAr": [
      "باستمرار في كلا الاتجاهين مع مضاعفة التردد",
      "خلال أنصاف الدورات السالبة فقط دون أي هبوط في الجهد",
      "لا يمرر التيار أبداً ويعمل كدائرة مفتوحة دائماً",
      "خلال أنصاف الدورات الموجبة فقط عندما يكون الدايود في حالة انحياز أمامي، بينما يحجب التيار في أنصاف الدورات السالبة"
    ],
    "correctAnswer": "Only during the positive half-cycles when the diode is forward-biased, blocking current during negative half-cycles",
    "correctIndex": 3,
    "hintEn": "A diode is a one-way valve: passes forward current, blocks reverse current.",
    "hintAr": "الدايود صمام أحادي: يسمح بمرور التيار في اتجاه واحد ويمنعه في الاتجاه المعاكس.",
    "stepByStepSolutionEn": [
      "During positive half-cycles, anode is positive relative to cathode, forward-biasing the diode and delivering current to load $R_L$. During negative half-cycles, it is reverse-biased, dropping all voltage across the diode and delivering zero load current."
    ],
    "stepByStepSolutionAr": [
      "في النصف الموجب يكون الدايود منحازاً أمامياً فيوصل التيار للحمل، وفي النصف السالب يكون منحازاً عكسياً فيمنع مرور التيار، محولاً التيار المتردد إلى تيار موحد الاتجاه نبضي."
    ],
    "teacherTipEn": "Output is unidirectional pulsating DC with efficiency $\\le 40.6\\%$.",
    "teacherTipAr": "الخرج تيار موحد الاتجاه نبضي بكفاءة قصوى لا تتجاوز 40.6%."
  },
  {
    "id": "egbac_phys_ch4_db_easy_17",
    "titleEn": "Full-Wave Bridge Rectifier Diode Conduction Pairs",
    "titleAr": "عمل أزواج الدايودات في مقوم الموجة الكاملة القنطري",
    "difficulty": "easy",
    "questionEn": "In a four-diode bridge rectifier converting AC to DC, how many diodes conduct simultaneously during each half-cycle of the AC input?",
    "questionAr": "في دائرة مقوم القنطرة ذي الدايودات الأربعة لتحويل AC إلى DC، كم دايوداً يوصل التيار في آن واحد خلال كل نصف دورة؟",
    "optionsEn": [
      "Two diagonally opposite diodes conduct in series, routing current through the load in the same direction on both half-cycles",
      "All four diodes conduct simultaneously in parallel",
      "Only one diode conducts while the other three melt",
      "Zero diodes conduct because bridge circuits cancel all current"
    ],
    "optionsAr": [
      "دايودان متقابلان قطرياً يوصلان على التوالي، موجهين التيار عبر الحمل في نفس الاتجاه في كلا نصفي الدورة",
      "الأربعة دايودات توصل معاً في نفس اللحظة على التوازي",
      "دايود واحد فقط يوصل بينما تنصهر الثلاثة الباقية",
      "لا يوصل أي دايود لأن دوائر القنطرة تلغي التيار تماماً"
    ],
    "correctAnswer": "Two diagonally opposite diodes conduct in series, routing current through the load in the same direction on both half-cycles",
    "correctIndex": 0,
    "hintEn": "Diodes work in pairs: $(D_1, D_3)$ on positive half, $(D_2, D_4)$ on negative half.",
    "hintAr": "تعمل الدايودات في أزواج: زوج في النصف الموجب والزوج المقابل في النصف السالب لتمرير التيار في نفس الاتجاه بالحمل.",
    "stepByStepSolutionEn": [
      "During positive half-cycle, diodes $D_1$ and $D_2$ conduct, steering current through the load from top to bottom. During negative half-cycle, $D_3$ and $D_4$ conduct, steering current through the load in the exact same direction, yielding full-wave DC."
    ],
    "stepByStepSolutionAr": [
      "خلال النصف الموجب يوصل زوج دايودات قطري، وخلال النصف السالب يوصل الزوج الآخر، مما يضمن تدفق التيار في الحمل بنفس الاتجاه دائماً في كلا نصفي الدورة."
    ],
    "teacherTipEn": "Full-wave rectification achieves double the efficiency ($\\le 81.2\\%$) of half-wave.",
    "teacherTipAr": "يحقق مقوم الموجة الكاملة كفاءة مضاعفة تصل إلى 81.2% مقارنة بنصف الموجة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_18",
    "titleEn": "Capacitor Filter Smoothing in DC Power Supplies",
    "titleAr": "تنعيم تيار الخرج بمكثف الترشيح",
    "difficulty": "easy",
    "questionEn": "A high-capacitance filter capacitor connected in parallel across the load resistor of a rectifier circuit serves to:",
    "questionAr": "تتمثل وظيفة مكثف الترشيح ذي السعة الكبيرة المتصل على التوازي مع مقاومة الحمل في دائرة التقويم في:",
    "optionsEn": [
      "Double the AC input voltage frequency to $1000\\text{ Hz}$",
      "Smooth out voltage ripples by charging to peak voltage and discharging slowly through the load during diode non-conduction intervals",
      "Convert all DC power into radioactive microwaves",
      "Short-circuit the load to ground permanently"
    ],
    "optionsAr": [
      "مضاعفة تردد جهد الدخل المتردد إلى 1000 هرتز",
      "تنعيم تموجات الجهد بشحنه إلى القيمة العظمى وتفريغه ببطء عبر الحمل أثناء فترات عدم توصيل الدايود",
      "تحويل كامل قدرة التيار المستمر إلى موجات ميكروويف مشعة",
      "عمل قصر كهربي دائم لمقاومة الحمل مع الأرضي"
    ],
    "correctAnswer": "Smooth out voltage ripples by charging to peak voltage and discharging slowly through the load during diode non-conduction intervals",
    "correctIndex": 1,
    "hintEn": "Capacitor acts as an electrical reservoir, holding voltage nearly constant between peaks.",
    "hintAr": "يعمل المكثف كمستودع شحنة يحتفظ بجهد شبه ثابت بين ذروات الموجة المتقادمة.",
    "stepByStepSolutionEn": [
      "The pulsating rectified DC voltage drops to zero periodically. The parallel capacitor charges to peak voltage $V_p$ and discharges slowly through $R_L$ with time constant $\\tau = R_L C$. If $R_L C \\gg T$, ripple voltage drops dramatically, giving nearly pure DC."
    ],
    "stepByStepSolutionAr": [
      "يهبط الجهد المقوم دورياً للصفر، فيشحن المكثف عند القمة ويفرغ شحنته ببطء في الحمل خلال الهبوط بثابت زمني $\\tau = R_C$، مما يخمد التموجات ويعطي جهداً مستمراً شبه نقي وثابت القيمة."
    ],
    "teacherTipEn": "Ripple factor $r \\approx \\frac{1}{2\\sqrt{3} f R_L C}$ drops inversely with capacitance $C$.",
    "teacherTipAr": "معامل التموج يتناسب عكسياً مع سعة المكثف $C$ ومقاومة الحمل $R_L$."
  },
  {
    "id": "egbac_phys_ch4_db_easy_19",
    "titleEn": "Zener Breakdown Mechanism in Heavily Doped Diodes",
    "titleAr": "آلية انهيار زنر في الوصلات عالية التطعيم",
    "difficulty": "easy",
    "questionEn": "In a heavily doped p-n junction with an ultra-thin depletion layer ($W < 10\\text{ nm}$), Zener breakdown occurs under reverse bias because:",
    "questionAr": "في وصلة ثنائية عالية التطعيم ذات منطقة نضوب فائقة الضيق ($W < 10\\text{ nm}$)، يحدث انهيار زنر تحت الانحياز العكسي لأن:",
    "optionsEn": [
      "The silicon atoms fuse into helium atoms releasing neutrons",
      "Thermal heat melts the entire diode into liquid glass",
      "The intense electric field ($\\mathcal{E} > 10^6\\text{ V/cm}$) enables quantum mechanical tunneling of valence electrons directly into empty conduction band states",
      "Radioactive alpha particles jump across the external leads"
    ],
    "optionsAr": [
      "ذرات السيليكون تندمج معطية ذرات هيليوم مطلقة نيوترونات",
      "الحرارة تصهر الدايود بالكامل إلى زجاج سائل",
      "المجال الكهربي الهائل ($\\mathcal{E} > 10^6\\text{ V/cm}$) يتيح العبور النفقي الكمي لإلكترونات حزمة التكافؤ مباشرة إلى مستويات حزمة التوصيل الخالية",
      "جسيمات ألفا المشعة تقفز عبر الأسلاك الخارجية"
    ],
    "correctAnswer": "The intense electric field ($\\mathcal{E} > 10^6\\text{ V/cm}$) enables quantum mechanical tunneling of valence electrons directly into empty conduction band states",
    "correctIndex": 2,
    "hintEn": "Quantum tunneling across a narrow barrier without thermal destruction.",
    "hintAr": "عبور نفقي كمي عبر حاجز جهد فائق الرقة دون أي تدمير حراري للدايود.",
    "stepByStepSolutionEn": [
      "Heavy doping creates an ultra-narrow depletion width ($< 10\\text{ nm}$). A modest reverse voltage of $3-5\\text{ V}$ produces an immense field $\\mathcal{E} = V/W > 10^6\\text{ V/cm}$. At this threshold, valence electrons tunnel quantum-mechanically across the forbidden bandgap into conduction states."
    ],
    "stepByStepSolutionAr": [
      "التطعيم الكثيف يقلص سمك منطقة النضوب لأقل من 10 نانومتر، فيكفي جهد عكسي ضئيل (3-5 فولت) لإنشاء مجال كهربي مهول يمزق الروابط التساهمية بالأنفاق الكمية المباشرة دون إتلاف الدايود."
    ],
    "teacherTipEn": "Zener breakdown occurs predominantly at low voltages ($V_Z < 5-6\\text{ V}$).",
    "teacherTipAr": "يحدث انهيار زنر تحديداً عند جهود عكسية منخفضة تقل عن 5 إلى 6 فولت."
  },
  {
    "id": "egbac_phys_ch4_db_easy_20",
    "titleEn": "Avalanche Breakdown in Lightly Doped Diodes",
    "titleAr": "آلية الانهيار الانهياري في الوصلات خفيفة التطعيم",
    "difficulty": "easy",
    "questionEn": "In lightly or moderately doped p-n junctions with wide depletion layers, reverse breakdown occurs via the Avalanche mechanism, where:",
    "questionAr": "في الوصلات الثنائية خفيفة التطعيم ذات مناطق النضوب العريضة، يحدث الانهيار العكسي بآلية الانهيار الانهياري (Avalanche) حيث:",
    "optionsEn": [
      "The diode turns into a vacuum tube emitting green sparks",
      "The atomic mass of the crystal triples instantly",
      "The crystal freezes down to liquid nitrogen temperature",
      "Thermally generated minority carriers are accelerated by the high electric field, acquiring kinetic energy to knock out valence electrons through impact ionization in a multiplying chain reaction"
    ],
    "optionsAr": [
      "يتحول الدايود إلى صمام مفرغ يطلق شرارات خضراء",
      "تتضاعف الكتلة الذرية للبلورة ثلاث مرات لحظياً",
      "تتجمد البلورة لدرجة حرارة النيتروجين السائل",
      "تتسارع حاملات الأقلية الحرارية بالمجال الكهربي الشديد وتكتسب طاقة حركية تكفي لانتزاع إلكترونات التكافؤ بالتأين التصادمي في تفاعل متسلسل متضاعف"
    ],
    "correctAnswer": "Thermally generated minority carriers are accelerated by the high electric field, acquiring kinetic energy to knock out valence electrons through impact ionization in a multiplying chain reaction",
    "correctIndex": 3,
    "hintEn": "Impact ionization cascade: one electron hits an atom and frees a second, then two free four, etc.",
    "hintAr": "تأين تصادمي متضاعف: إلكترون سريع يصدم ذرة فيحرر إلكتروناً إضافياً، ثم يتضاعف العدد ككرة الثلج.",
    "stepByStepSolutionEn": [
      "In a wide depletion region, carriers travel long mean free paths, accelerating to kinetic energies exceeding $E_g$. Colliding with lattice atoms, they knock valence electrons into the conduction band (impact ionization). Newly created pairs accelerate and free more carriers, triggering an avalanche multiplication."
    ],
    "stepByStepSolutionAr": [
      "في مناطق النضوب العريضة يقطع الإلكترون مسافة كافية ليكتسب طاقة حركية تفوق فجوة الطاقة، فيصدم ذرات الشبكة البلورية ويحرر إلكترونات جديدة تتسارع بدورها وتصدم غيرها في تيار انهياري متسلسل."
    ],
    "teacherTipEn": "Avalanche breakdown occurs at higher voltages ($V_{BR} > 6-8\\text{ V}$) and has a positive temperature coefficient.",
    "teacherTipAr": "يسود الانهيار الانهياري عند جهود تفوق 6 إلى 8 فولت وله معامل حراري موجب."
  },
  {
    "id": "egbac_phys_ch4_db_easy_21",
    "titleEn": "Zener Diode Application in Voltage Regulation",
    "titleAr": "تطبيق دايود زنر في تنظيم وتثبيت الجهد",
    "difficulty": "easy",
    "questionEn": "A Zener diode is operated in the reverse-breakdown region specifically to serve as a voltage regulator because:",
    "questionAr": "يشغل دايود زنر في منطقة الانهيار العكسي تحديداً ليعمل كمنظم ومثبت للجهد لأن:",
    "optionsEn": [
      "Its terminal voltage remains virtually constant ($V_Z$) across wide variations in reverse operating current",
      "It absorbs 100% of all electric power and stores it permanently",
      "It converts alternating current into radio waves",
      "It changes the frequency of wall electricity to 120 GHz"
    ],
    "optionsAr": [
      "جهد أطرافه يظل ثابتاً تماماً تقريباً ($V_Z$) عبر تغيرات واسعة في تيار التشغيل العكسي",
      "أنه يمتص 100% من القدرة الكهربية ويخزنها نهائياً",
      "أنه يحول التيار المتردد إلى موجات راديوية",
      "أنه يغير تردد كهرباء الحائط إلى 120 جيجاهرتز"
    ],
    "correctAnswer": "Its terminal voltage remains virtually constant ($V_Z$) across wide variations in reverse operating current",
    "correctIndex": 0,
    "hintEn": "Steep vertical $I-V$ curve in reverse breakdown means voltage is pinned at $V_Z$ regardless of current.",
    "hintAr": "المنحنى الرأسي الحاد للتيار عند الانهيار يعني ثبات الجهد عند قيمة زنر $V_Z$ مهما تغير التيار.",
    "stepByStepSolutionEn": [
      "In the breakdown region, the dynamic resistance $r_z = \\Delta V_Z / \\Delta I_Z$ is extremely small (a few ohms). As source voltage or load current fluctuates, the Zener diode absorbs the current variations while clamping the load voltage at $V_Z$."
    ],
    "stepByStepSolutionAr": [
      "في منطقة الانهيار تكون المقاومة الديناميكية لزنر صغيرة جداً (بضعة أوم). وعند تغير جهد المصدر، يمتص دايود زنر فروق التيار مبقياً الجهد على طرفي الحمل ثابتاً بدقة عند $V_Z$."
    ],
    "teacherTipEn": "A series current-limiting resistor $R_s$ is mandatory to prevent thermal burnout.",
    "teacherTipAr": "يجب وضع مقاومة توالي محددة للتيار $R_s$ لحماية دايود زنر من الاحتراق بالتيار الزائد."
  },
  {
    "id": "egbac_phys_ch4_db_easy_22",
    "titleEn": "Light-Emitting Diode (LED) Recombination Physics",
    "titleAr": "فيزياء انبعاث الضوء في الصمام الثنائي الباعث للضوء (LED)",
    "difficulty": "easy",
    "questionEn": "A Light-Emitting Diode (LED) emits optical radiation when operated under forward bias because:",
    "questionAr": "يشع الصمام الثنائي الباعث للضوء (LED) ضوءاً عند توصيله بانحياز أمامي لأن:",
    "optionsEn": [
      "The diode burns inside a glass vacuum tube like a matchstick",
      "Injected electrons from the n-side recombine with holes from the p-side, releasing energy as photons of energy $h\\nu \\approx E_g$",
      "High voltage ionizes surrounding air into radioactive plasma",
      "Nuclear beta decay produces green photons"
    ],
    "optionsAr": [
      "الدايود يحترق داخل أنبوبة زجاجية مثل عود الثقاب",
      "الإلكترونات المحقونة من الجانب N تلتحم بالفجوات من الجانب P مطلقة طاقة الربط كفوتونات ضوئية $h\\nu \\approx E_g$",
      "الجهد العالي يؤين الهواء المحيط إلى بلازما مشعة",
      "انحلال بيتا الإشعاعي يطلق فوتونات خضراء"
    ],
    "correctAnswer": "Injected electrons from the n-side recombine with holes from the p-side, releasing energy as photons of energy $h\\nu \\approx E_g$",
    "correctIndex": 1,
    "hintEn": "Direct radiative recombination across the bandgap: $E = h\\nu \\approx E_g$.",
    "hintAr": "التحام إشعاعي مباشر للإلكترون بالفجوة عبر فجوة النطاق مطلقاً فوتوناً: $h\\nu \\approx E_g$.",
    "stepByStepSolutionEn": [
      "Forward bias floods the junction with excess electrons and holes. In direct bandgap semiconductors (GaAs, GaN), electrons drop directly from conduction to valence band, releasing their transition energy as light: $\\lambda \\approx hc / E_g$."
    ],
    "stepByStepSolutionAr": [
      "يحقن الانحياز الأمامي شحنات الأغلبية عبر الوصلة، فتهبط الإلكترونات مباشرة من حزمة التوصيل لتلتحم بالفجوات في حزمة التكافؤ مطلقة طاقتها كفوتونات ضوئية بطول موجي يتحدد بفجوة النطاق $\\lambda \\approx hc / E_g$."
    ],
    "teacherTipEn": "Indirect bandgap materials like pure Silicon release energy as heat (phonons), making them useless for LEDs.",
    "teacherTipAr": "السيليكون النقي ذو فجوة غير مباشرة فيطلق طاقته كحرارة واهتزازات شبكية (فونونات) ولا يصلح لصنع مصابيح LED."
  },
  {
    "id": "egbac_phys_ch4_db_easy_23",
    "titleEn": "Photodiode Reverse Bias Detection Mechanism",
    "titleAr": "آلية عمل الصمام الثنائي الضوئي بالانحياز العكسي",
    "difficulty": "easy",
    "questionEn": "Why are semiconductor photodiodes standardly operated under reverse bias when used as optical detectors?",
    "questionAr": "لماذا يتم تشغيل الصمامات الثنائية الضوئية (Photodiodes) تحت انحياز عكسي عند استخدامها ككواشف ضوئية؟",
    "optionsEn": [
      "Reverse bias heats the diode to $500^\\circ\\text{C}$ to melt the contacts",
      "Reverse bias stops all electrical current permanently",
      "Reverse bias widens the depletion layer and establishes a strong electric field that rapidly sweeps photo-generated electron-hole pairs, producing a linear photocurrent $I_{\\text{ph}} \\propto P_{\\text{light}}$",
      "Reverse bias generates blue laser light inside the sensor"
    ],
    "optionsAr": [
      "لأن الانحياز العكسي يسخن الدايود لدرجة 500 مئوية لصهر نقاط التوصيل",
      "لأن الانحياز العكسي يوقف مرور أي تيار كهربي نهائياً",
      "لأن الانحياز العكسي يوسع منطقة النضوب وينشئ مجالاً كهربياً قوياً يجرف أزواج الشحنات المحررة ضوئياً بسرعة، مولداً تياراً ضوئياً خطياً $I_{\\text{ph}} \\propto P_{\\text{light}}$",
      "لأن الانحياز العكسي يولد ليزراً أزرق داخل المستشعر"
    ],
    "correctAnswer": "Reverse bias widens the depletion layer and establishes a strong electric field that rapidly sweeps photo-generated electron-hole pairs, producing a linear photocurrent $I_{\\text{ph}} \\propto P_{\\text{light}}$",
    "correctIndex": 2,
    "hintEn": "Reverse bias gives low dark current, low junction capacitance (high speed), and linear optical response.",
    "hintAr": "الانحياز العكسي يضمن تيار ظلام ضئيل جداً، وسعة وصلة منخفضة لسرعة الاستجابة، وتناسباً خطياً مع شدة الضوء.",
    "stepByStepSolutionEn": [
      "Incident photons with $h\\nu \\ge E_g$ absorbed in the wide depletion region generate electron-hole pairs. The high reverse electric field separates them before they can recombine, creating an external reverse photocurrent directly proportional to optical power: $I_{\\text{ph}} = \\mathcal{R} P_{\\text{opt}}$."
    ],
    "stepByStepSolutionAr": [
      "تمتص الفوتونات ذات الطاقة $h\\nu \\ge E_g$ في منطقة النضوب مولدة أزواج إلكترون-فجوة، فيفصلها المجال العكسي الشديد بسرعة قبل التحامها، لتتدفق كتيار ضوئي عكسي يتناسب طردياً مع شدة الإشعاع الضوئي الساقط."
    ],
    "teacherTipEn": "Used as high-speed receivers in fiber optic communications and solar radiation sensors.",
    "teacherTipAr": "تستخدم كمستقبلات فائقة السرعة في شبكات الألياف الضوئية وكواشف الإشعاع الشمسي."
  },
  {
    "id": "egbac_phys_ch4_db_easy_24",
    "titleEn": "Solar Cell Photovoltaic Energy Conversion",
    "titleAr": "التحويل الكهروضوئي في الخلايا الشمسية",
    "difficulty": "easy",
    "questionEn": "A silicon solar cell generates clean electrical power without any external bias battery by utilizing:",
    "questionAr": "تولد الخلية الشمسية المصنوعة من السيليكون قدرة كهربية نظيفة دون أي بطارية تغذية خارجية من خلال استغلال:",
    "optionsEn": [
      "Chemical burning of silicon with atmospheric oxygen",
      "Nuclear fission of silicon nuclei triggered by sunlight",
      "Radioactive beta emission from the metallic frame",
      "The photovoltaic effect, where sunlight creates electron-hole pairs separated by the built-in junction field, producing an open-circuit photovoltage ($V_{\\text{oc}}$)"
    ],
    "optionsAr": [
      "الاحتراق الكيميائي للسيليكون مع أكسجين الهواء الجوي",
      "الانشطار النووي لأنوية السيليكون بفعل ضوء الشمس",
      "انبعاث بيتا الإشعاعي من الإطار الفلزي للخلية",
      "التأثير الكهروضوئي (Photovoltaic effect)، حيث يولد ضوء الشمس أزواج إلكترون-فجوة يفصلها المجال الكهربي الداخلي للوصلة، مولداً فرق جهد كهروضوئي ($V_{\\text{oc}}$)"
    ],
    "correctAnswer": "The photovoltaic effect, where sunlight creates electron-hole pairs separated by the built-in junction field, producing an open-circuit photovoltage ($V_{\\text{oc}}$)",
    "correctIndex": 3,
    "hintEn": "Photovoltaic effect operates in the 4th quadrant of the I-V curve, delivering power to an external load.",
    "hintAr": "تعمل الخلية الشمسية في الربع الرابع لمنحنى الجهد والتيار، مانحة قدرة كهربية صافية للحمل الخارجي.",
    "stepByStepSolutionEn": [
      "Sunlight penetrates the ultra-thin front layer into the p-n junction. Photons with $h\\nu > 1.12\\text{ eV}$ create electron-hole pairs. The internal built-in field sweeps electrons to the n-side and holes to the p-side, driving a DC electric current through an external load resistor."
    ],
    "stepByStepSolutionAr": [
      "تنفذ فوتونات الشمس إلى الوصلة وتولد أزواج إلكترون-فجوة، فيقوم المجال الداخلي بفصلها طارداً الإلكترونات لطرف N والفجوات لطرف P، مما ينشئ فرق جهد كهرضوئي يدفع تياراً مستمراً عبر الدائرة الخارجية."
    ],
    "teacherTipEn": "Theoretical Shockley-Queisser single-junction efficiency limit is $\\approx 33.7\\%$.",
    "teacherTipAr": "الحد النظري الأقصى لكفاءة الخلية الشمسية أحادية الوصلة هو نحو 33.7%."
  },
  {
    "id": "egbac_phys_ch4_db_easy_25",
    "titleEn": "BJT Terminal Structure and Doping Profiles",
    "titleAr": "البنية الهندسية ونسب التطعيم في ترانزستور ثنائي القطبية (BJT)",
    "difficulty": "easy",
    "questionEn": "In a standard bipolar junction transistor (npn or pnp), the three terminals (Emitter, Base, Collector) are fabricated with which specific doping and physical dimensions?",
    "questionAr": "في ترانزستور ثنائي القطبية القياسي (npn أو pnp)، تصنع أطراف الترانزستور الثلاثة (الباعث، القاعدة، المجمع) بأي مواصفات هندسية ونسب تطعيم؟",
    "optionsEn": [
      "Emitter is heavily doped; Base is extremely thin and lightly doped; Collector is moderately doped with the largest physical surface area",
      "All three regions have identical doping and identical cubic dimensions",
      "Base is the thickest and most heavily doped region",
      "Collector is heavily doped with zero physical thickness"
    ],
    "optionsAr": [
      "الباعث عالي التطعيم بكثافة؛ القاعدة رقيقة جداً ومنخفضة التطعيم؛ المجمع متوسط التطعيم وذو أكبر مساحة سطحية",
      "جميع المناطق الثلاث تمتلك نفس التطعيم ونفس الأبعاد المكعبة تماماً",
      "القاعدة هي الأكثر سمكاً والأعلى تطعيماً بين جميع المناطق",
      "المجمع عالي التطعيم وسمكه الفيزيائي مساوٍ للصفر"
    ],
    "correctAnswer": "Emitter is heavily doped; Base is extremely thin and lightly doped; Collector is moderately doped with the largest physical surface area",
    "correctIndex": 0,
    "hintEn": "Emitter injects, Base transmits without recombining, Collector collects and dissipates heat.",
    "hintAr": "الباعث يحقن الشحنات بكثافة، القاعدة تمررها بسرعة دون التحام، والمجمع يجمع الشحنات ويشتت الحرارة الناتجة.",
    "stepByStepSolutionEn": [
      "The Emitter must be heavily doped ($n^{++}$) to inject massive majority carriers. The Base must be ultra-thin ($\\sim 1\\ \\mu\\text{m}$) and lightly doped ($p^-$) so carriers diffuse across without recombining. The Collector has the largest area to dissipate thermal heat generated by collector-base reverse voltage drop."
    ],
    "stepByStepSolutionAr": [
      "يطعم الباعث بكثافة فائقة لحقن الشحنات، وتصنع القاعدة فائقة الرقة وقليلة التطعيم لتعبرها الشحنات دون أن تلتحم، ويصنع المجمع بأكبر مساحة سطحية لتشتيت الحرارة العالية الناتجة عن قدرة التشغيل."
    ],
    "teacherTipEn": "This asymmetric construction explains why emitter and collector cannot simply be swapped in a circuit.",
    "teacherTipAr": "هذا البناء الهندسي غير المتناظر يفسر عدم إمكانية تبديل طرفي الباعث والمجمع في الدائرة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_26",
    "titleEn": "BJT Active Mode Junction Biasing Conditions",
    "titleAr": "شروط انحياز وصلتي الترانزستور في منطقة التشغيل الفعالة",
    "difficulty": "easy",
    "questionEn": "For a bipolar junction transistor (BJT) to operate in its normal active mode as a linear amplifier, its junctions must be biased such that:",
    "questionAr": "لكي يعمل ترانزستور ثنائي القطبية (BJT) في منطقة التشغيل الفعالة (Active mode) كمضخم خطي للإشارات، يجب أن يكون انحياز وصلتيه كالتالي:",
    "optionsEn": [
      "Both junctions are forward-biased simultaneously",
      "Emitter-Base junction is forward-biased, and Collector-Base junction is reverse-biased",
      "Both junctions are reverse-biased simultaneously",
      "Emitter-Base is reverse-biased and Collector-Base is forward-biased"
    ],
    "optionsAr": [
      "كلا الوصلتين في حالة انحياز أمامي معاً",
      "وصلة الباعث-القاعدة في حالة انحياز أمامي، ووصلة المجمع-القاعدة في حالة انحياز عكسي",
      "كلا الوصلتين في حالة انحياز عكسي معاً",
      "وصلة الباعث-القاعدة في حالة انحياز عكسي والمجمع-القاعدة في حالة انحياز أمامي"
    ],
    "correctAnswer": "Emitter-Base junction is forward-biased, and Collector-Base junction is reverse-biased",
    "correctIndex": 1,
    "hintEn": "Forward EB injects carriers; reverse CB sweeps them into the collector.",
    "hintAr": "الانحياز الأمامي للباعث يحقن الشحنات، والانحياز العكسي للمجمع يجذبها ويجمعها.",
    "stepByStepSolutionEn": [
      "Forward-biasing the emitter-base junction lowers its barrier, injecting huge numbers of electrons into the base. Reverse-biasing the collector-base junction establishes a strong electric field pulling these diffused electrons across the depletion region into the collector."
    ],
    "stepByStepSolutionAr": [
      "الانحياز الأمامي لوصلة الباعث يخفض حاجز الجهد فيحقن شحنات الأغلبية في القاعدة الرقيقة، ويقوم الانحياز العكسي لوصلة المجمع باجتذاب هذه الشحنات المندفعة وسحبها بقوة إلى دائرة المجمع."
    ],
    "teacherTipEn": "Active mode is the standard configuration for audio, radio, and signal amplification.",
    "teacherTipAr": "منطقة التشغيل الفعالة هي الأساس في تكبير وتضخيم الإشارات الصوتية والراديوية."
  },
  {
    "id": "egbac_phys_ch4_db_easy_27",
    "titleEn": "BJT Kirchhoff Current Relation",
    "titleAr": "قانون كيرشوف لتيارات الترانزستور",
    "difficulty": "easy",
    "questionEn": "In any bipolar junction transistor operating in the active mode, the terminal currents satisfy Kirchhoff's current conservation law:",
    "questionAr": "في أي ترانزستور ثنائي القطبية يعمل في المنطقة الفعالة، تحقق تيارات الأطراف قانون كيرشوف للتيار بالعلاقة:",
    "optionsEn": [
      "$I_B = I_E + I_C$",
      "$I_C = I_E + I_B$",
      "$I_E = I_B + I_C$",
      "$I_E = I_B \\cdot I_C$"
    ],
    "optionsAr": [
      "$I_B = I_E + I_C$",
      "$I_C = I_E + I_B$",
      "$I_E = I_B + I_C$",
      "$I_E = I_B \\cdot I_C$"
    ],
    "correctAnswer": "$I_E = I_B + I_C$",
    "correctIndex": 2,
    "hintEn": "Emitter current is the total source current splitting into a tiny base current and large collector current.",
    "hintAr": "تيار الباعث هو التيار الكلي الصادر الذي يتوزع إلى تيار قاعدة ضئيل وتيار مجمع رئيسي.",
    "stepByStepSolutionEn": [
      "Charge conservation demands total current entering must equal total current leaving: $I_E = I_B + I_C$. Because the base is ultra-thin, nearly all injected carriers reach the collector ($I_C \\approx 98-99.5\\% I_E$), while only a tiny fraction recombinate in the base ($I_B \\approx 0.5-2\\% I_E$)."
    ],
    "stepByStepSolutionAr": [
      "وفق قانون حفظ الشحنة: $I_E = I_B + I_C$. ولأن القاعدة فائقة الرقة، فإن معظم الشحنات تصل للمجمع ($I_C \\approx 99\\% I_E$) ولا يلتحم في القاعدة سوى كسر ضئيل يمثل تيار القاعدة ($I_B \\approx 1\\% I_E$)."
    ],
    "teacherTipEn": "Remember: $I_E$ is always the largest of the three transistor currents.",
    "teacherTipAr": "تذكر دائماً: تيار الباعث $I_E$ هو الأكبر دوماً بين تيارات الترانزستور الثلاثة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_28",
    "titleEn": "Common-Emitter Current Gain Beta Definition",
    "titleAr": "تعريف معامل تكبير التيار بيتا (Beta) في الباعث المشترك",
    "difficulty": "easy",
    "questionEn": "The common-emitter DC current gain $\\beta$ (also designated $h_{FE}$) of a bipolar junction transistor is defined as the ratio of:",
    "questionAr": "يعرف معامل تكبير التيار المستمر $\\beta$ (أو $h_{FE}$) لترانزستور في دائرة الباعث المشترك بأنه النسبة بين:",
    "optionsEn": [
      "Collector current to emitter current: $\\beta = \\frac{I_C}{I_E}$",
      "Base current to emitter current: $\\beta = \\frac{I_B}{I_E}$",
      "Emitter current to collector current: $\\beta = \\frac{I_E}{I_C}$",
      "Collector current to base current: $\\beta = \\frac{I_C}{I_B}$"
    ],
    "optionsAr": [
      "تيار المجمع إلى تيار الباعث: $\\beta = \\frac{I_C}{I_E}$",
      "تيار القاعدة إلى تيار الباعث: $\\beta = \\frac{I_B}{I_E}$",
      "تيار الباعث إلى تيار المجمع: $\\beta = \\frac{I_E}{I_C}$",
      "تيار المجمع إلى تيار القاعدة: $\\beta = \\frac{I_C}{I_B}$"
    ],
    "correctAnswer": "Collector current to base current: $\\beta = \\frac{I_C}{I_B}$",
    "correctIndex": 3,
    "hintEn": "Beta measures how many times the collector current is larger than the controlling base current.",
    "hintAr": "معامل بيتا يقيس كم مرة يتضاعف تيار المجمع مقارنة بتيار القاعدة المتحكم فيه.",
    "stepByStepSolutionEn": [
      "In common-emitter mode, input signal controls base current $I_B$, controlling a magnified collector current $I_C = \\beta I_B$. Typical commercial transistors have $\\beta$ values between 50 and 300."
    ],
    "stepByStepSolutionAr": [
      "في دائرة الباعث المشترك، تتحكم إشارة الدخل في تيار القاعدة الضعيف $I_B$، فيتحكم بدوره في تيار مجمع مضخم $I_C = \\beta I_B$. وتتراوح قيمة $\\beta$ تجارياً بين 50 إلى 300 ضعف."
    ],
    "teacherTipEn": "Relates to alpha by: $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
    "teacherTipAr": "يرتبط بمعامل التوزيع ألفا بالعلاقة: $\\beta = \\frac{\\alpha}{1 - \\alpha}$."
  },
  {
    "id": "egbac_phys_ch4_db_easy_29",
    "titleEn": "Alpha Current Transfer Ratio Definition",
    "titleAr": "تعريف معامل التوزيع ألفا (Alpha) في الترانزستور",
    "difficulty": "easy",
    "questionEn": "The common-base current transfer ratio $\\alpha$ represents the fraction of emitter current reaching the collector, defined as:",
    "questionAr": "يعبر معامل التوزيع أو النقل $\\alpha$ في الترانزستور عن نسبة تيار الباعث التي تنجح في الوصول إلى المجمع، ويعرف بالعلاقة:",
    "optionsEn": [
      "$\\alpha = \\frac{I_C}{I_E}$ (always strictly less than 1, typically $0.98 - 0.998$)",
      "$\\alpha = \\frac{I_E}{I_C}$ (always greater than 100)",
      "$\\alpha = \\frac{I_B}{I_C}$",
      "$\\alpha = I_B \\cdot I_C$"
    ],
    "optionsAr": [
      "$\\alpha = \\frac{I_C}{I_E}$ (دائماً أقل من الواحد الصحيح، ويتراوح عادة بين 0.98 و 0.998)",
      "$\\alpha = \\frac{I_E}{I_C}$ (أكبر من 100 دائماً)",
      "$\\alpha = \\frac{I_B}{I_C}$",
      "$\\alpha = I_B \\cdot I_C$"
    ],
    "correctAnswer": "$\\alpha = \\frac{I_C}{I_E}$ (always strictly less than 1, typically $0.98 - 0.998$)",
    "correctIndex": 0,
    "hintEn": "Alpha is fraction of emitter carriers collected: $I_C / I_E < 1$.",
    "hintAr": "معامل ألفا هو كسر تيار الباعث الذي يصل للمجمع، وهو دائماً أقل قليلاً من 1.",
    "stepByStepSolutionEn": [
      "Because a tiny fraction of injected carriers recombines in the base ($I_B > 0$), $I_C < I_E$ always. Therefore, $\\alpha = I_C / I_E = \\frac{\\beta}{\\beta + 1}$ is slightly less than unity (e.g. if $\\beta = 100$, $\\alpha = 100/101 \\approx 0.990$)."
    ],
    "stepByStepSolutionAr": [
      "بما أن جزءاً ضئيلاً من الإلكترونات يلتحم في القاعدة ($I_B > 0$)، فإن تيار المجمع يكون دائماً أقل قليلاً من تيار الباعث، وتكون $\\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1}$ أقل من الواحد بقليل (مثل 0.99)."
    ],
    "teacherTipEn": "Common-base amplifiers provide voltage gain, but their current gain $\\alpha$ is slightly below unity.",
    "teacherTipAr": "مضخم القاعدة المشتركة يكبر الجهد لكن تكبيره للتيار $\\alpha$ يكون أقل من 1 بقليل."
  },
  {
    "id": "egbac_phys_ch4_db_easy_30",
    "titleEn": "Transistor Common-Emitter Inverter Phase Inversion",
    "titleAr": "انقلاب الطور بزاوية 180 درجة في مضخم الباعث المشترك",
    "difficulty": "easy",
    "questionEn": "In a common-emitter (CE) voltage amplifier, the output voltage signal at the collector is phase-shifted relative to the input base voltage signal by:",
    "questionAr": "في مضخم الجهد ذي الباعث المشترك (CE)، تنزاح إشارة جهد الخرج عند المجمع في الطور بالنسبة لإشارة جهد الدخل عند القاعدة بزاوية:",
    "optionsEn": [
      "$0^\\circ$ (strictly in phase)",
      "$180^\\circ$ ($\\pi\\text{ radians}$), meaning the output is inverted",
      "$90^\\circ$ ($\\pi/2\\text{ radians}$)",
      "$360^\\circ$ phase lead"
    ],
    "optionsAr": [
      "$0^\\circ$ (متفقة تماماً في الطور)",
      "$180^\\circ$ ($\\pi\\text{ راديان}$)، أي أن إشارة الخرج تكون مقلوبة الطور تماماً",
      "$90^\\circ$ ($\\pi/2\\text{ راديان}$)",
      "$360^\\circ$ تقدم في الطور"
    ],
    "correctAnswer": "$180^\\circ$ ($\\pi\\text{ radians}$), meaning the output is inverted",
    "correctIndex": 1,
    "hintEn": "When $V_{\\text{in}}$ rises, $I_B$ rises, $I_C$ rises, increasing drop across $R_C$, so $V_{\\text{out}} = V_{CC} - I_C R_C$ falls!",
    "hintAr": "عند زيادة جهد الدخل يزداد تيار المجمع، فيزداد الهبوط في جهد المقاومة $R_C$ فيهبط جهد الخرج $V_{CE} = V_{CC} - I_C R_C$!",
    "stepByStepSolutionEn": [
      "The output voltage is $V_{\\text{out}} = V_{CC} - I_C R_C$. A positive swing in $v_{\\text{in}}$ increases $i_B$ and $i_C$, causing a larger voltage drop across the collector resistor $R_C$, which pulls the collector voltage $v_{\\text{out}}$ downward. Thus, the voltage gain is negative: $A_v = -g_m R_C$."
    ],
    "stepByStepSolutionAr": [
      "يتحدد جهد الخرج بالعلاقة $V_{\\text{out}} = V_{CC} - I_C R_C$. عندما ترتفع إشارة الدخل يزداد تيار المجمع، فيزداد الهبوط في جهد $R_C$ مما يخفض جهد المجمع للأسفل، فتكون إشارة الخرج مقلوبة الطور بزاوية $180^\\circ$."
    ],
    "teacherTipEn": "This intrinsic $180^\\circ$ phase inversion also allows the transistor to function as a digital NOT gate (inverter).",
    "teacherTipAr": "هذا الانقلاب في الطور بزاوية $180^\\circ$ هو الأساس الذي يجعل الترانزستور يعمل كبوابة نفي منطقية (NOT gate)."
  },
  {
    "id": "egbac_phys_ch4_db_easy_31",
    "titleEn": "Transistor as a Switch in Cutoff State",
    "titleAr": "الترانزستور كمفتاح في حالة القطع (OFF)",
    "difficulty": "easy",
    "questionEn": "When a bipolar junction transistor (BJT) is used as an electronic digital switch and its base input voltage is zero ($V_{\\text{in}} = 0\\text{ V}$):",
    "questionAr": "عند استخدام الترانزستور كمفتاح إلكتروني رقمي ويكون جهد الدخل عند القاعدة صفراً ($V_{\\text{in}} = 0\\text{ V}$):",
    "optionsEn": [
      "The transistor is fully saturated with zero collector voltage ($V_{CE} = 0\\text{ V}$)",
      "The collector current explodes to infinity",
      "The transistor is in CUTOFF ($I_B = 0, I_C = 0$), behaving as an OPEN switch, and the output voltage equals the supply voltage ($V_{CE} = V_{CC}$)",
      "The transistor emits bright green laser light"
    ],
    "optionsAr": [
      "يكون الترانزستور في حالة تشبع كامل ويكون جهد المجمع صفراً",
      "تيار المجمع يزداد إلى ما لا نهاية",
      "يكون الترانزستور في حالة قطع ($I_B = 0, I_C = 0$) ويعمل كمفتاح مفتوح (OFF)، ويكون جهد الخرج مساوياً لجهد المصدر ($V_{CE} = V_{CC}$)",
      "الترانزستور يشع ضوء ليزر أخضر ساطعاً"
    ],
    "correctAnswer": "The transistor is in CUTOFF ($I_B = 0, I_C = 0$), behaving as an OPEN switch, and the output voltage equals the supply voltage ($V_{CE} = V_{CC}$)",
    "correctIndex": 2,
    "hintEn": "Zero base current $\\implies$ zero collector current $\\implies$ no voltage drop across $R_C$ $\\implies V_{\\text{out}} = V_{CC}$.",
    "hintAr": "انعدام تيار القاعدة $\\implies$ انعدام تيار المجمع $\\implies$ انعدام هبوط الجهد على $R_C$ $\\implies V_{\\text{out}} = V_{CC}$.",
    "stepByStepSolutionEn": [
      "When $V_{\\text{in}} < 0.7\\text{ V}$, the base-emitter junction is off ($I_B = 0$). Collector current is zero ($I_C = 0$). With no voltage drop across the collector resistor, $V_{CE} = V_{CC} - I_C R_C = V_{CC}$. The switch is OPEN (OFF)."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون جهد الدخل صفراً، تكون وصلة الباعث غير موصلة ($I_B = 0$) فينقطع تيار المجمع ($I_C = 0$)، ولا يحدث هبوط في جهد المقاومة $R_C$ فيكون جهد الخرج $V_{CE} = V_{CC}$ كأنه مفتاح كهربائي مفتوح في دائرة."
    ],
    "teacherTipEn": "In binary logic, this corresponds to input 0 producing output 1 (Logic Inverter).",
    "teacherTipAr": "في المنطق الثنائي، دخل 0 يعطي خرج 1 (بوابة عاكسة)."
  },
  {
    "id": "egbac_phys_ch4_db_easy_32",
    "titleEn": "Transistor as a Switch in Saturation State",
    "titleAr": "الترانزستور كمفتاح في حالة التشبع (ON)",
    "difficulty": "easy",
    "questionEn": "When a sufficiently large base drive current ($I_B > I_{C,\\text{sat}} / \\beta$) is applied to a common-emitter switching circuit:",
    "questionAr": "عند تطبيق تيار دخل كبير على قاعدة الترانزستور ($I_B > I_{C,\\text{sat}} / \\beta$) في دائرة مفتاح الباعث المشترك:",
    "optionsEn": [
      "The transistor enters cutoff and current stops flowing",
      "The base resistor catches fire instantly",
      "The collector-emitter voltage jumps to $10,000\\text{ V}$",
      "The transistor enters SATURATION ($V_{CE} \\approx 0.2\\text{ V}$), behaving as a CLOSED switch (ON), with maximum collector current $I_{C,\\text{sat}} \\approx V_{CC} / R_C$"
    ],
    "optionsAr": [
      "يدخل الترانزستور في حالة قطع ويتوقف مرور التيار",
      "تحترق مقاومة القاعدة فورياً",
      "يقفز جهد المجمع-الباعث إلى 10,000 فولت",
      "يدخل الترانزستور في حالة تشبع ($V_{CE} \\approx 0.2\\text{ V}$) متصرفاً كمفتاح مغلق (ON)، ويمر أقصى تيار مجمع $I_{C,\\text{sat}} \\approx V_{CC} / R_C$"
    ],
    "correctAnswer": "The transistor enters SATURATION ($V_{CE} \\approx 0.2\\text{ V}$), behaving as a CLOSED switch (ON), with maximum collector current $I_{C,\\text{sat}} \\approx V_{CC} / R_C$",
    "correctIndex": 3,
    "hintEn": "Large base current drives $V_{CE}$ down to saturation voltage ($0.2\\text{ V}$), acting like a closed circuit.",
    "hintAr": "التيار الكبير على القاعدة يهبط بجهد المجمع لأدنى قيمة ($0.2\\text{ V}$) كأنه سلك مغلق يوصل التيار.",
    "stepByStepSolutionEn": [
      "Overdriving the base forces both junctions into forward bias (saturation). The collector voltage drops to its minimum saturation level $V_{CE(\\text{sat})} \\approx 0.2\\text{ V}$ (nearly zero). Full supply voltage drops across $R_C$, giving $I_C \\approx V_{CC} / R_C$. The switch is CLOSED (ON)."
    ],
    "stepByStepSolutionAr": [
      "عند ضخ تيار قاعدة كبير، تنحاز كلتا الوصلتين أمامياً (حالة التشبع)، فيهبط جهد الخرج لأدنى قيمة $V_{CE} \\approx 0.2\\text{ V}$ مقترباً من الصفر، ويسري أقصى تيار مجمع متاح في الدائرة كأنه مفتاح مغلق تماماً."
    ],
    "teacherTipEn": "In digital logic, input 1 produces output 0.",
    "teacherTipAr": "في الدوائر الرقمية، دخل 1 يعطي خرج 0."
  },
  {
    "id": "egbac_phys_ch4_db_easy_33",
    "titleEn": "Digital NOT Gate (Inverter) Operation",
    "titleAr": "جدول الحقيقة وعمل بوابة النفي (NOT Gate)",
    "difficulty": "easy",
    "questionEn": "The logic NOT gate (inverter) performs which fundamental Boolean operation on a single binary input $A$?",
    "questionAr": "تؤدي بوابة النفي المنطقية (بوابة العاكس NOT) أي وظيفة بوليانية على دخل ثنائي وحيد $A$؟",
    "optionsEn": [
      "$Y = \\overline{A}$ (Inversion: input 0 yields output 1, and input 1 yields output 0)",
      "$Y = A \\cdot A$ (Output is always 0)",
      "$Y = 1$ unconditionally for all inputs",
      "$Y = A + 2$"
    ],
    "optionsAr": [
      "$Y = \\overline{A}$ (العكس: الدخل 0 يعطي خرجاً 1، والدخل 1 يعطي خرجاً 0)",
      "$Y = A \\cdot A$ (الخرج دائماً 0)",
      "$Y = 1$ دائماً مهما كان الدخل",
      "$Y = A + 2$"
    ],
    "correctAnswer": "$Y = \\overline{A}$ (Inversion: input 0 yields output 1, and input 1 yields output 0)",
    "correctIndex": 0,
    "hintEn": "NOT flips binary state: $\\bar{0} = 1$ and $\\bar{1} = 0$.",
    "hintAr": "بوابة NOT تقلب الحالة الثنائية: نفي الصفر يعطي 1 ونفي الواحد يعطي 0.",
    "stepByStepSolutionEn": [
      "The NOT gate has one input and one output. Its truth table is: if $A = 0 \\implies Y = 1$; if $A = 1 \\implies Y = 0$. In electronics, a single common-emitter transistor switch naturally implements this function."
    ],
    "stepByStepSolutionAr": [
      "تمتلك بوابة NOT مدخلاً واحداً ومخرجاً واحداً، وتقلب القيمة المنطقية للدخل، ويمثلها ترانزستور الباعث المشترك كمفتاح عاكس للجهد."
    ],
    "teacherTipEn": "Symbolized by a triangle with an inversion bubble on the output.",
    "teacherTipAr": "يرمز لها بمثلث ينتهي بدائرة صغيرة تمثل فقاعة النفي."
  },
  {
    "id": "egbac_phys_ch4_db_easy_34",
    "titleEn": "Digital AND Gate Logic Operation",
    "titleAr": "جدول الحقيقة وعمل بوابة التوافق (AND Gate)",
    "difficulty": "easy",
    "questionEn": "A two-input logic AND gate ($Y = A \\cdot B$) produces an active HIGH output ($Y = 1$):",
    "questionAr": "تنتج بوابة التوافق المنطقية ذات المدخلين (بوابة AND) خرجاً مرتفعاً ($Y = 1$):",
    "optionsEn": [
      "Whenever either input is 1, even if the other is 0",
      "Only when BOTH inputs $A$ and $B$ are simultaneously HIGH ($A=1$ AND $B=1$)",
      "Only when both inputs are simultaneously 0",
      "At random intervals determined by ambient temperature"
    ],
    "optionsAr": [
      "عندما يكون أي من المدخلين 1 حتى لو كان الآخر 0",
      "فقط عندما يكون كلا المدخلين $A$ و $B$ معاً في الحالة المرتفعة ($A=1$ و $B=1$)",
      "فقط عندما يكون كلا المدخلين معاً 0",
      "في فترات عشوائية تحددها درجة الحرارة"
    ],
    "correctAnswer": "Only when BOTH inputs $A$ and $B$ are simultaneously HIGH ($A=1$ AND $B=1$)",
    "correctIndex": 1,
    "hintEn": "AND is equivalent to two electrical switches in series.",
    "hintAr": "بوابة AND تكافئ مفتاحين متصلين على التوالي في دائرة كهربية.",
    "stepByStepSolutionEn": [
      "Boolean multiplication dictates: $0 \\cdot 0 = 0$, $0 \\cdot 1 = 0$, $1 \\cdot 0 = 0$, and $1 \\cdot 1 = 1$. Both conditions must be satisfied simultaneously for output to be true."
    ],
    "stepByStepSolutionAr": [
      "جداء بوليان المنطقي: لا يمر التيار ولا يخرج 1 إلا إذا تحقق كلا الشرطين معاً على المدخلين، مثل مفتاحين متصلين توالياً في دائرة مصباح."
    ],
    "teacherTipEn": "Truth table has only a single 1 row out of four possible combinations.",
    "teacherTipAr": "جدول الحقيقة يحوي واحداً فقط في صف واحد من بين الحالات الأربع."
  },
  {
    "id": "egbac_phys_ch4_db_easy_35",
    "titleEn": "Digital OR Gate Logic Operation",
    "titleAr": "جدول الحقيقة وعمل بوابة الاختيار (OR Gate)",
    "difficulty": "easy",
    "questionEn": "A two-input logic OR gate ($Y = A + B$) produces an output of LOW ($Y = 0$):",
    "questionAr": "تنتج بوابة الاختيار المنطقية ذات المدخلين (بوابة OR) خرجاً منخفضاً ($Y = 0$):",
    "optionsEn": [
      "Whenever at least one input is 1",
      "Whenever input $A$ is 1 and input $B$ is 0",
      "Only when BOTH inputs $A$ and $B$ are simultaneously LOW ($A=0$ AND $B=0$)",
      "Continuously under all operational conditions"
    ],
    "optionsAr": [
      "كلما كان أحد المدخلين على الأقل 1",
      "عندما يكون المدخل A يساوي 1 والمدخل B يساوي 0",
      "فقط عندما يكون كلا المدخلين $A$ و $B$ معاً في الحالة المنخفضة ($A=0$ و $B=0$)",
      "باستمرار تحت جميع ظروف التشغيل"
    ],
    "correctAnswer": "Only when BOTH inputs $A$ and $B$ are simultaneously LOW ($A=0$ AND $B=0$)",
    "correctIndex": 2,
    "hintEn": "OR is equivalent to two electrical switches connected in parallel.",
    "hintAr": "بوابة OR تكافئ مفتاحين متصلين على التوازي في دائرة كهربية.",
    "stepByStepSolutionEn": [
      "Boolean addition gives: $0 + 0 = 0$, $0 + 1 = 1$, $1 + 0 = 1$, $1 + 1 = 1$. The output is 1 if any input is 1. It drops to 0 only when all inputs are 0."
    ],
    "stepByStepSolutionAr": [
      "الجمع المنطقي: الخرج 1 إذا تحقق أي من المدخلين، ولا ينعدم الخرج ليكون صفراً إلا إذا كان كلاهما صفراً، مثل مفتاحين على التوازي يضيء المصباح إذا أغلق أحدهما أو كلاهما."
    ],
    "teacherTipEn": "Truth table has three 1s and one 0.",
    "teacherTipAr": "يحتوي جدول الحقيقة على ثلاثة آحاد وصفر وحيد."
  },
  {
    "id": "egbac_phys_ch4_db_easy_36",
    "titleEn": "Universal NAND Gate Logic Property",
    "titleAr": "خاصية الشمولية لبوابة NAND (البوابة العامة)",
    "difficulty": "easy",
    "questionEn": "Why is the NAND gate celebrated in digital electronics as a 'universal logic gate'?",
    "questionAr": "لماذا توصف بوابة NAND في الإلكترونيات الرقمية بأنها 'بوابة منطقية عامة أو شاملة'؟",
    "optionsEn": [
      "NAND gates never consume any electrical power",
      "A single NAND gate can replace a nuclear power plant",
      "NAND gates operate only in outer space without gravity",
      "Any arbitrary Boolean logic function (including NOT, AND, OR, and XOR) can be constructed exclusively using only NAND gates"
    ],
    "optionsAr": [
      "لأن بوابات NAND لا تستهلك أي طاقة كهربية نهائياً",
      "لأن بوابة NAND واحدة تستطيع استبدال محطة نووية",
      "لأن بوابات NAND لا تعمل إلا في الفضاء الخارجي دون جاذبية",
      "لأنه يمكن بناء أي دالة أو دائرة منطقية (بما فيها NOT و AND و OR و XOR) باستخدام بوابات NAND وحدها دون الحاجة لأي نوع آخر"
    ],
    "correctAnswer": "Any arbitrary Boolean logic function (including NOT, AND, OR, and XOR) can be constructed exclusively using only NAND gates",
    "correctIndex": 3,
    "hintEn": "Functional completeness: connecting inputs together makes NOT ($\\overline{A \\cdot A} = \\bar{A}$). Adding an inverter makes AND ($\\overline{\\overline{A \\cdot B}} = A \\cdot B$).",
    "hintAr": "خاصية الاكتمال الوظيفي: ربط مدخلي NAND معاً يعطي بوابة NOT، وربط عاكس خلفها يعطي AND، وتطبيق دي مورغان يعطي OR.",
    "stepByStepSolutionEn": [
      "NAND has functional completeness. Inverting input gives NOT. Inverting NAND output gives AND. Inverting inputs into a NAND gives OR (by De Morgan: $\\overline{\\bar{A}\\cdot\\bar{B}} = A + B$). Entire microprocessors can be fabricated using identical NAND gate cells."
    ],
    "stepByStepSolutionAr": [
      "تمتلك بوابة NAND خاصية الشمولية المنطقية الكاملة، حيث تصنع منها بوابات العاكس والتوافق والاختيار، مما يتيح تصنيع المعالجات الدقيقة بالكامل من خلايا NAND متطابقة لخفض تكلفة الرقاقات."
    ],
    "teacherTipEn": "NOR is the only other standard two-input universal gate.",
    "teacherTipAr": "بوابة NOR هي البوابة العامة القياسية الأخرى بجانب NAND."
  },
  {
    "id": "egbac_phys_ch4_db_easy_37",
    "titleEn": "NAND Gate Truth Table Output",
    "titleAr": "جدول حقيقة بوابة NAND",
    "difficulty": "easy",
    "questionEn": "For a two-input NAND gate with inputs $A$ and $B$, the Boolean output expression and truth table result are:",
    "questionAr": "لبوابة NAND ذات مدخلين $A$ و $B$، يكون التعبير البولياني للخرج وجدول الحقيقة هو:",
    "optionsEn": [
      "$Y = \\overline{A \\cdot B}$; output is 0 ONLY when both inputs are 1, and 1 for all other input combinations",
      "$Y = A \\cdot B$; output is 1 only when both are 1",
      "$Y = \\overline{A + B}$; output is 1 only when both are 0",
      "$Y = A \\oplus B$; output is 1 only when inputs differ"
    ],
    "optionsAr": [
      "$Y = \\overline{A \\cdot B}$؛ يكون الخرج 0 فقط عندما يكون كلا المدخلين 1، ويكون الخرج 1 في جميع الحالات الأخرى",
      "$Y = A \\cdot B$؛ الخرج 1 فقط عندما يكون كلاهما 1",
      "$Y = \\overline{A + B}$؛ الخرج 1 فقط عندما يكون كلاهما 0",
      "$Y = A \\oplus B$؛ الخرج 1 فقط عندما يختلف المدخلان"
    ],
    "correctAnswer": "$Y = \\overline{A \\cdot B}$; output is 0 ONLY when both inputs are 1, and 1 for all other input combinations",
    "correctIndex": 0,
    "hintEn": "NAND = NOT AND. Invert the AND truth table.",
    "hintAr": "بوابة NAND هي نفي بوابة AND، اقلب مخرجات جدول حقيقة AND.",
    "stepByStepSolutionEn": [
      "AND produces $(0, 0, 0, 1)$. Inverting each output bit gives NAND: $(1, 1, 1, 0)$. Thus, $Y=0$ occurs solely when $A=1$ and $B=1$."
    ],
    "stepByStepSolutionAr": [
      "مخرجات بوابة AND هي $(0, 0, 0, 1)$. وبنفيها نحصل على مخرجات NAND: $(1, 1, 1, 0)$. وعليه لا يكون الخرج صفراً إلا عندما يكون كلا المدخلين 1 معاً."
    ],
    "teacherTipEn": "Frequently checked in multiple-choice logic gate assessments.",
    "teacherTipAr": "من أهم الأسئلة في اختبارات الدوائر المنطقية."
  },
  {
    "id": "egbac_phys_ch4_db_easy_38",
    "titleEn": "NOR Gate Truth Table Output",
    "titleAr": "جدول حقيقة بوابة NOR",
    "difficulty": "easy",
    "questionEn": "For a two-input NOR gate with inputs $A$ and $B$, the Boolean output expression is:",
    "questionAr": "لبوابة NOR ذات مدخلين $A$ و $B$، يتعين الخرج البولياني وجدول الحقيقة بـ:",
    "optionsEn": [
      "$Y = A + B$; output is 1 if any input is 1",
      "$Y = \\overline{A + B}$; output is 1 ONLY when both inputs are 0, and 0 for all other combinations",
      "$Y = A \\cdot B$; output is 0 always",
      "$Y = 1$ unconditionally"
    ],
    "optionsAr": [
      "$Y = A + B$؛ الخرج 1 إذا كان أي مدخل 1",
      "$Y = \\overline{A + B}$؛ يكون الخرج 1 فقط عندما يكون كلا المدخلين 0، ويكون الخرج 0 في جميع الحالات الأخرى",
      "$Y = A \\cdot B$؛ الخرج 0 دائماً",
      "$Y = 1$ دون شروط"
    ],
    "correctAnswer": "$Y = \\overline{A + B}$; output is 1 ONLY when both inputs are 0, and 0 for all other combinations",
    "correctIndex": 1,
    "hintEn": "NOR = NOT OR. Invert the OR truth table.",
    "hintAr": "بوابة NOR هي نفي بوابة OR، اقلب مخرجات جدول حقيقة OR.",
    "stepByStepSolutionEn": [
      "OR produces $(0, 1, 1, 1)$. Inverting each bit gives NOR: $(1, 0, 0, 0)$. The output is 1 exclusively when both inputs are zero ($A=0, B=0$)."
    ],
    "stepByStepSolutionAr": [
      "مخرجات بوابة OR هي $(0, 1, 1, 1)$. وبنفيها نحصل على مخرجات NOR: $(1, 0, 0, 0)$. فالخرج لا يكون 1 إلا إذا انعدم كلا المدخلين معاً."
    ],
    "teacherTipEn": "NOR is also a universal gate capable of building all logic functions.",
    "teacherTipAr": "بوابة NOR بوابة عامة يمكن بناء كافة الدوال المنطقية منها أيضاً."
  },
  {
    "id": "egbac_phys_ch4_db_easy_39",
    "titleEn": "Exclusive OR (XOR) Gate Truth Table",
    "titleAr": "جدول حقيقة بوابة الاختيار الحصري (XOR)",
    "difficulty": "easy",
    "questionEn": "A two-input Exclusive-OR (XOR) gate ($Y = A \\oplus B$) produces an output of 1 when:",
    "questionAr": "تنتج بوابة الاختيار الحصري ذات المدخلين (بوابة XOR: $Y = A \\oplus B$) خرجاً مساوياً لـ 1 عندما:",
    "optionsEn": [
      "Both inputs are identical ($A = B$)",
      "Both inputs are 1 simultaneously",
      "The two inputs are different from each other ($A \\neq B$: either $A=1, B=0$ or $A=0, B=1$)",
      "Both inputs are 0 simultaneously"
    ],
    "optionsAr": [
      "يكون كلا المدخلين متطابقين تماماً ($A = B$)",
      "يكون كلا المدخلين 1 معاً",
      "يكون المدخلان مختلفين عن بعضهما ($A \\neq B$: إما $A=1, B=0$ أو $A=0, B=1$)",
      "يكون كلا المدخلين 0 معاً"
    ],
    "correctAnswer": "The two inputs are different from each other ($A \\neq B$: either $A=1, B=0$ or $A=0, B=1$)",
    "correctIndex": 2,
    "hintEn": "XOR detects inequality of inputs: $0 \\oplus 0 = 0$, $0 \\oplus 1 = 1$, $1 \\oplus 0 = 1$, $1 \\oplus 1 = 0$.",
    "hintAr": "بوابة XOR تكشف عدم التساوي: الخرج 1 عند اختلاف المدخلين، وصفر عند تشابههما.",
    "stepByStepSolutionEn": [
      "Boolean formula is $Y = A\\bar{B} + \\bar{A}B$. Output is 1 if and only if one input is 1 and the other is 0. If both are 0 or both are 1, output is 0."
    ],
    "stepByStepSolutionAr": [
      "صيغة بوليان: $Y = A\\bar{B} + \\bar{A}B$. يكون الخرج 1 إذا كان أحد المدخلين 1 والآخر 0 حصراً، وينعدم الخرج إذا تماثل المدخلان كلاهما 0 أو كلاهما 1."
    ],
    "teacherTipEn": "Core component of half-adders, full-adders, and parity checkers in computer CPUs.",
    "teacherTipAr": "المكون الأساسي لدوائر الجمع النصفي والكامل وتدقيق الخطأ في المعالجات."
  },
  {
    "id": "egbac_phys_ch4_db_easy_40",
    "titleEn": "De Morgan's First Law of Boolean Algebra",
    "titleAr": "قانون دي مورغان الأول للجبر البولياني",
    "difficulty": "easy",
    "questionEn": "De Morgan's first fundamental law of Boolean algebra states that:",
    "questionAr": "ينص قانون دي مورغان الأول في الجبر البولياني على أن:",
    "optionsEn": [
      "$\\overline{A + B} = \\overline{A} + \\overline{B}$",
      "$\\overline{A + B} = A \\cdot B$",
      "$\\overline{A + B} = A + B$",
      "$\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ (NOR is logically equivalent to inverted-input AND)"
    ],
    "optionsAr": [
      "$\\overline{A + B} = \\overline{A} + \\overline{B}$",
      "$\\overline{A + B} = A \\cdot B$",
      "$\\overline{A + B} = A + B$",
      "$\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ (بوابة NOR تكافئ منطقياً بوابة AND ذات مداخل معكوسة)"
    ],
    "correctAnswer": "$\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ (NOR is logically equivalent to inverted-input AND)",
    "correctIndex": 3,
    "hintEn": "Break the bar, change the sign: NOT(A OR B) = (NOT A) AND (NOT B).",
    "hintAr": "اكسر الخط واقلب الإشارة: نفي (A أو B) يساوي (نفي A) و (نفي B).",
    "stepByStepSolutionEn": [
      "The complement of a logical sum equals the logical product of the complements: $\\overline{A+B} = \\bar{A}\\cdot\\bar{B}$. This allows converting NOR architectures into equivalent AND operations."
    ],
    "stepByStepSolutionAr": [
      "نفي المجموع المنطقي يساوي حاصل ضرب المنفيات: $\\overline{A+B} = \\bar{A} \\cdot \\bar{B}$. وتتيح هذه العلاقة تبسيط الدوائر المنطقية المعقدة في تصميم المعالجات."
    ],
    "teacherTipEn": "Memorize: Sum inverted becomes product of inverses.",
    "teacherTipAr": "احفظ: نفي الجمع ينقلب لضرب المنفيات."
  },
  {
    "id": "egbac_phys_ch4_db_easy_41",
    "titleEn": "De Morgan's Second Law of Boolean Algebra",
    "titleAr": "قانون دي مورغان الثاني للجبر البولياني",
    "difficulty": "easy",
    "questionEn": "De Morgan's second fundamental law of Boolean algebra states that:",
    "questionAr": "ينص قانون دي مورغان الثاني في الجبر البولياني على أن:",
    "optionsEn": [
      "$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ (NAND is logically equivalent to inverted-input OR)",
      "$\\overline{A \\cdot B} = \\overline{A} \\cdot \\overline{B}$",
      "$\\overline{A \\cdot B} = A + B$",
      "$\\overline{A \\cdot B} = 1$"
    ],
    "optionsAr": [
      "$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ (بوابة NAND تكافئ منطقياً بوابة OR ذات مداخل معكوسة)",
      "$\\overline{A \\cdot B} = \\overline{A} \\cdot \\overline{B}$",
      "$\\overline{A \\cdot B} = A + B$",
      "$\\overline{A \\cdot B} = 1$"
    ],
    "correctAnswer": "$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ (NAND is logically equivalent to inverted-input OR)",
    "correctIndex": 0,
    "hintEn": "Break the bar, change the sign: NOT(A AND B) = (NOT A) OR (NOT B).",
    "hintAr": "اكسر الخط واقلب الإشارة: نفي (A و B) يساوي (نفي A) أو (نفي B).",
    "stepByStepSolutionEn": [
      "The complement of a logical product equals the logical sum of the complements: $\\overline{A\\cdot B} = \\bar{A} + \\bar{B}$. A NAND gate can be replaced by an OR gate with active-low inputs."
    ],
    "stepByStepSolutionAr": [
      "نفي الجداء المنطقي يساوي حاصل جمع المنفيات: $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$. وتكافئ بوابة NAND بوابة OR ذات المداخل المعكوسة."
    ],
    "teacherTipEn": "Dual theorem to the first law; foundational for circuit minimization.",
    "teacherTipAr": "القانون المتمم للقانون الأول وأساس تبسيط الدوائر الرقمية."
  },
  {
    "id": "egbac_phys_ch4_db_easy_42",
    "titleEn": "Definition of Carrier Drift in Semiconductors",
    "titleAr": "تعريف تيار الانجراف في أشباه الموصلات",
    "difficulty": "easy",
    "questionEn": "In solid-state semiconductor physics, carrier drift refers to:",
    "questionAr": "في فيزياء الجوامد وأشباه الموصلات، يقصد بحركة وانجراف الشحنات (Drift):",
    "optionsEn": [
      "The random thermal scattering of carriers in the absence of any electric field",
      "The net directional movement of charge carriers driven by an applied electric field, characterized by drift velocity $v_d = \\mu \\mathcal{E}$",
      "The evaporation of silicon atoms into air",
      "The rotation of the entire crystal on a turntable"
    ],
    "optionsAr": [
      "الحركة العشوائية الحرارية للشحنات في غياب أي مجال كهربي",
      "الحركة الاتجاهية المحصلة لحاملات الشحنة الواقعة تحت تأثير مجال كهربي، وتتميز بسرعة انجراف $v_d = \\mu \\mathcal{E}$",
      "تبخر ذرات السيليكون في الهواء الجوي",
      "دوران البلورة بالكامل على طاولة دوارة"
    ],
    "correctAnswer": "The net directional movement of charge carriers driven by an applied electric field, characterized by drift velocity $v_d = \\mu \\mathcal{E}$",
    "correctIndex": 1,
    "hintEn": "Drift is field-driven motion: $v_d = \\mu \\mathcal{E}$. Diffusion is concentration-driven motion.",
    "hintAr": "الانجراف حركة تسوقها القوة الكهربية ($v_d = \\mu \\mathcal{E}$)، بينما الانتشار حركة يسوقها تدرج التركيز.",
    "stepByStepSolutionEn": [
      "When an electric field $\\mathcal{E}$ is applied, it exerts a Coulomb force $F = q\\mathcal{E}$ that superimposes a net directional drift velocity $v_d = \\mu \\mathcal{E}$ on top of random thermal motion, giving drift current density $J = q n v_d = q n \\mu \\mathcal{E}$."
    ],
    "stepByStepSolutionAr": [
      "عند تطبيق مجال كهربي $\\mathcal{E}$، تؤثر قوة كولوم محركة الإلكترونات والفجوات بسرعة انجراف اتجاهية محصلة $v_d = \\mu \\mathcal{E}$ فوق حركتها الحرارية العشوائية، مولدة تيار الانجراف الكهربي."
    ],
    "teacherTipEn": "Mobility $\\mu$ represents how quickly carriers drift per unit electric field.",
    "teacherTipAr": "الحركية $\\mu$ تعبر عن سرعة انجراف الشحنة لكل وحدة مجال كهربي."
  },
  {
    "id": "egbac_phys_ch4_db_easy_43",
    "titleEn": "Definition of Carrier Diffusion in Semiconductors",
    "titleAr": "تعريف تيار الانتشار في أشباه الموصلات",
    "difficulty": "easy",
    "questionEn": "In a semiconductor, carrier diffusion current arises purely from:",
    "questionAr": "في شبه الموصل، ينشأ تيار انتشار الشحنات بصورة حصرية نتيجة:",
    "optionsEn": [
      "A magnetic field deflecting neutral silicon atoms",
      "The mechanical vibration of the circuit board",
      "A spatial gradient in carrier concentration ($\\frac{dn}{dx} \\neq 0$ or $\\frac{dp}{dx} \\neq 0$), causing random thermal motion to produce net flow from high to low concentration regions",
      "Gravitational pulling of heavy holes downward"
    ],
    "optionsAr": [
      "مجال مغناطيسي يحرف ذرات السيليكون المتعادلة",
      "الاهتزاز الميكانيكي للوحة الدوائر المطبوعة",
      "وجود تدرج مكاني في تركيز حاملات الشحنة ($\\frac{dn}{dx} \\neq 0$)، مما يدفع الحركة الحرارية العشوائية لتوليد تدفق محصل من التركيز الأعلى للأدنى",
      "سحب الجاذبية للفجوات الثقيلة نحو الأسفل"
    ],
    "correctAnswer": "A spatial gradient in carrier concentration ($\\frac{dn}{dx} \\neq 0$ or $\\frac{dp}{dx} \\neq 0$), causing random thermal motion to produce net flow from high to low concentration regions",
    "correctIndex": 2,
    "hintEn": "Diffusion requires NO electric field; it is driven entirely by concentration differences.",
    "hintAr": "لا يحتاج الانتشار لأي مجال كهربي، بل ينشأ ذاتياً بفعل الحركة العشوائية نحو التركيز الأقل.",
    "stepByStepSolutionEn": [
      "By Fick's first law, carriers undergo random thermal motion. Statistically, more particles jump away from high-density regions than jump into them, creating net diffusion current densities: $J_{n,\\text{diff}} = q D_n \\frac{dn}{dx}$ and $J_{p,\\text{diff}} = -q D_p \\frac{dp}{dx}$."
    ],
    "stepByStepSolutionAr": [
      "وفق قانون فيك، تتحرك الشحنات عشوائياً، وينتج عن فارق الكثافة تدفق محصل من المناطق المكتظة إلى الخالية دون الحاجة لمجال كهربي، مولداً تيار الانتشار $J_{\\text{diff}} \\propto \\frac{dn}{dx}$."
    ],
    "teacherTipEn": "Total current is always the sum of drift plus diffusion: $J = J_{\\text{drift}} + J_{\\text{diff}}$.",
    "teacherTipAr": "التيار الكلي هو دائماً مجموع تيار الانجراف وتيار الانتشار."
  },
  {
    "id": "egbac_phys_ch4_db_easy_44",
    "titleEn": "Electron vs Hole Mobility Asymmetry in Silicon",
    "titleAr": "تفوق حركية الإلكترونات على الفجوات في السيليكون",
    "difficulty": "easy",
    "questionEn": "In crystalline silicon at room temperature, why is electron mobility ($\\mu_n \\approx 1400\\text{ cm}^2/\\text{V}\\cdot\\text{s}$) more than three times higher than hole mobility ($\\mu_p \\approx 450\\text{ cm}^2/\\text{V}\\cdot\\text{s}$)?",
    "questionAr": "في بلورة السيليكون عند درجة حرارة الغرفة، لماذا تفوق حركية الإلكترونات ($\\mu_n \\approx 1400\\text{ cm}^2/\\text{V}\\cdot\\text{s}$) حركية الفجوات ($\\mu_p \\approx 450\\text{ cm}^2/\\text{V}\\cdot\\text{s}$) بأكثر من ثلاثة أضعاف؟",
    "optionsEn": [
      "Holes have twice the electrical charge of electrons",
      "Electrons travel at the speed of light in vacuum",
      "Holes freeze solid at room temperature",
      "Free electrons in the conduction band have a significantly smaller effective mass and experience less periodic lattice scattering than bound valence-band holes"
    ],
    "optionsAr": [
      "لأن الفجوات تحمل ضعف شحنة الإلكترون",
      "لأن الإلكترونات تسير بسرعة الضوء في الفراغ",
      "لأن الفجوات تتجمد في درجة حرارة الغرفة",
      "لأن الإلكترونات الحرة في حزمة التوصيل تمتلك كتلة فعالة أصغر وتخضع لتشتت شبكي أقل مقارنة بحركة الفجوات المقيدة في حزمة التكافؤ"
    ],
    "correctAnswer": "Free electrons in the conduction band have a significantly smaller effective mass and experience less periodic lattice scattering than bound valence-band holes",
    "correctIndex": 3,
    "hintEn": "Conduction band electrons move through free space of the lattice; holes require moving bound electrons sequentially.",
    "hintAr": "إلكترونات التوصيل تتحرك بحرية في الفراغ البلوري، بينما حركة الفجوة تتطلب قفزات متعاقبة لإلكترونات الروابط التساهمية.",
    "stepByStepSolutionEn": [
      "Holes are not physical particles; they are missing valence electrons. A hole moves when an electron from an adjacent covalent bond hops into the vacancy, requiring overcoming bond potential barriers. Conduction electrons roam freely through the periodic lattice with smaller effective mass $m^*_n < m^*_p$, giving $\\mu_n = q\\tau/m^*_n > \\mu_p$."
    ],
    "stepByStepSolutionAr": [
      "الفجوة ليست جسيماً مستقلاً بل فراغ في رابطة، وحركتها تتطلب قفز إلكترون من رابطة مجاورة مقيداً بحواجز الجهد، بينما تسبح إلكترونات التوصيل بحرية في الفراغ البلوري بكتلة فعالة أصغر فتكون حركيتها أعلى بكثير."
    ],
    "teacherTipEn": "This mobility advantage makes npn transistors faster than pnp transistors.",
    "teacherTipAr": "ميزة الحركية هذه تجعل ترانزستورات NPN أسرع وأكفأ من PNP."
  },
  {
    "id": "egbac_phys_ch4_db_easy_45",
    "titleEn": "Semiconductor Electrical Conductivity Formula",
    "titleAr": "صيغة التوصيلية الكهربية لشبه الموصل",
    "difficulty": "easy",
    "questionEn": "The total electrical conductivity $\\sigma$ of a semiconductor with electron concentration $n$, hole concentration $p$, and mobilities $\\mu_n$ and $\\mu_p$ is expressed as:",
    "questionAr": "يعبر عن التوصيلية الكهربية الكلية $\\sigma$ لشبه موصل يحمل تركيز إلكترونات $n$ وفجوات $p$ وحركيات $\\mu_n$ و $\\mu_p$ بالعلاقة:",
    "optionsEn": [
      "$\\sigma = q (n \\mu_n + p \\mu_p)$",
      "$\\sigma = \\frac{q}{n \\mu_n + p \\mu_p}$",
      "$\\sigma = q (n + p) (\\mu_n - \\mu_p)$",
      "$\\sigma = \\frac{n \\mu_n}{p \\mu_p}$"
    ],
    "optionsAr": [
      "$\\sigma = q (n \\mu_n + p \\mu_p)$",
      "$\\sigma = \\frac{q}{n \\mu_n + p \\mu_p}$",
      "$\\sigma = q (n + p) (\\mu_n - \\mu_p)$",
      "$\\sigma = \\frac{n \\mu_n}{p \\mu_p}$"
    ],
    "correctAnswer": "$\\sigma = q (n \\mu_n + p \\mu_p)$",
    "correctIndex": 0,
    "hintEn": "Conductivity is sum of electron and hole contributions: $\\sigma = \\sigma_n + \\sigma_p$.",
    "hintAr": "التوصيلية هي مجموع إسهامي الإلكترونات والفجوات معاً: $\\sigma = q n \\mu_n + q p \\mu_p$.",
    "stepByStepSolutionEn": [
      "Total drift current density is $J = J_n + J_p = (q n \\mu_n \\mathcal{E}) + (q p \\mu_p \\mathcal{E}) = q (n\\mu_n + p\\mu_p)\\mathcal{E}$. By Ohm's law $J = \\sigma \\mathcal{E}$, electrical conductivity is $\\sigma = q (n\\mu_n + p\\mu_p)$."
    ],
    "stepByStepSolutionAr": [
      "كثافة تيار الانجراف الكلي هي مجموع تياري الإلكترونات والفجوات: $J = q(n\\mu_n + p\\mu_p)\\mathcal{E}$. وبمقارنتها بقانون أوم $J = \\sigma \\mathcal{E}$، تنتج التوصيلية الكهربية $\\sigma = q(n\\mu_n + p\\mu_p)$."
    ],
    "teacherTipEn": "Resistivity is the inverse of conductivity: $\\rho = 1 / \\sigma$.",
    "teacherTipAr": "المقاومة النوعية هي مقلوب التوصيلية الكهربية: $\\rho = 1/\\sigma$."
  },
  {
    "id": "egbac_phys_ch4_db_easy_46",
    "titleEn": "Tetrahedral Diamond Lattice of Crystalline Silicon",
    "titleAr": "التركيب البلوري التساهمي للسيليكون النقي",
    "difficulty": "easy",
    "questionEn": "In a pure silicon crystal, each silicon atom shares its four valence electrons with neighboring atoms through:",
    "questionAr": "في بلورة السيليكون النقي، تشارك كل ذرة سيليكون إلكترونات تكافؤها الأربعة مع الذرات المجاورة بواسطة:",
    "optionsEn": [
      "Ionic electrostatic bonds with positive sodium ions",
      "Four covalent bonds in a tetrahedral diamond cubic crystal geometry ($sp^3$ hybridization)",
      "Metallic sea of completely unbonded free valence electrons",
      "Nuclear strong forces binding adjacent electron clouds"
    ],
    "optionsAr": [
      "روابط أيونية كهروستاتيكية مع أيونات صوديوم موجبة",
      "أربع روابط تساهمية في تركيب بلوري رباعي الأوجه (بلورة شبيهة بالألماس بتهجين $sp^3$)",
      "روابط فلزية في بحر من الإلكترونات الحرة غير المرتبطة",
      "قوى نووية شديدة تربط السحب الإلكترونية المجاورة"
    ],
    "correctAnswer": "Four covalent bonds in a tetrahedral diamond cubic crystal geometry ($sp^3$ hybridization)",
    "correctIndex": 1,
    "hintEn": "Silicon is Group IV: 4 valence electrons form 4 tetrahedral covalent bonds.",
    "hintAr": "السيليكون عنصر رباعي التكافؤ: 4 إلكترونات تكون 4 روابط تساهمية فراغية رباعية الأوجه.",
    "stepByStepSolutionEn": [
      "Silicon crystallizes in the diamond lattice structure. Each silicon atom is covalently bonded to four equidistant nearest neighbors at tetrahedral angles of $109.5^\\circ$. All valence electrons are tightly bound at $0\\text{ K}$, making it an insulator."
    ],
    "stepByStepSolutionAr": [
      "يتبلور السيليكون في شبكة بلورية ماسية، حيث ترتبط كل ذرة بأربع ذرات مجاورة بروابط تساهمية بزوايا $109.5^\\circ$. وعند درجة الصفر المطلق تكون جميع الإلكترونات مقيدة تماماً في الروابط فيتصرف السيليكون كعازل مثالي."
    ],
    "teacherTipEn": "Thermal energy at $T > 0\\text{ K}$ breaks a small fraction of these bonds.",
    "teacherTipAr": "الطاقة الحرارية عند درجات الحرارة العادية تكسر جزءاً ضئيلاً من هذه الروابط لتحرر الشحنات."
  },
  {
    "id": "egbac_phys_ch4_db_easy_47",
    "titleEn": "Energy Band Structure of Insulators vs Semiconductors",
    "titleAr": "مقارنة حزم الطاقة بين العوازل وأشباه الموصلات",
    "difficulty": "easy",
    "questionEn": "An electrical insulator differs fundamentally from a semiconductor in its energy band diagram because:",
    "questionAr": "تختلف المادة العازلة كهربياً بصورة جوهرية عن شبه الموصل في مخطط حزم الطاقة لأن:",
    "optionsEn": [
      "An insulator has zero electrons in its atomic nuclei",
      "An insulator has an infinite electrical conductivity",
      "An insulator has an extremely wide forbidden energy bandgap ($E_g > 5-9\\text{ eV}$), preventing thermal excitation of electrons into the conduction band at ordinary temperatures",
      "In insulators, conduction and valence bands overlap completely"
    ],
    "optionsAr": [
      "المادة العازلة خالية تماماً من الإلكترونات",
      "المادة العازلة تمتلك موصلية كهربية لا نهائية",
      "المادة العازلة تمتلك فجوة طاقة محظورة عريضة جداً ($E_g > 5-9\\text{ eV}$)، مما يمنع الإثارة الحرارية للإلكترونات إلى حزمة التوصيل عند درجات الحرارة المعتادة",
      "في العوازل تتداخل حزمتا التوصيل والتكافؤ تماماً"
    ],
    "correctAnswer": "An insulator has an extremely wide forbidden energy bandgap ($E_g > 5-9\\text{ eV}$), preventing thermal excitation of electrons into the conduction band at ordinary temperatures",
    "correctIndex": 2,
    "hintEn": "Semiconductors have moderate gaps ($E_g \\sim 1\\text{ eV}$); insulators have gigantic gaps ($E_g > 5\\text{ eV}$).",
    "hintAr": "أشباه الموصلات فجوتها معتدلة (~1 إلكترون فولت) وتتأثر بالحرارة، بينما العوازل فجوتها ضخمة تفوق 5 إلكترون فولت.",
    "stepByStepSolutionEn": [
      "In insulators (e.g. diamond $E_g = 5.5\\text{ eV}$, $\\text{SiO}_2$ $E_g \\approx 9\\text{ eV}$), the bandgap is so large that room temperature thermal energy ($k_B T \\approx 0.026\\text{ eV}$) yields an essentially zero probability of promoting electrons ($e^{-E_g / 2kT} \\approx 10^{-75}$)."
    ],
    "stepByStepSolutionAr": [
      "في العوازل مثل الألماس وأكسيد السيليكون، تكون فجوة الطاقة كبيرة جداً (5 إلى 9 إلكترون فولت) بحيث يستحيل على الطاقة الحرارية العادية نقل أي إلكترون لحزمة التوصيل، فتظل حزمة التوصيل خالية تماماً وتبقى المقاومة هائلة."
    ],
    "teacherTipEn": "In metals, the bandgap is zero ($E_g = 0$), so conduction band is partially filled even at $0\\text{ K}$.",
    "teacherTipAr": "في الفلزات تنعدم فجوة الطاقة ($E_g = 0$) وتتداخل الحزم فتكون موصلة دوماً."
  },
  {
    "id": "egbac_phys_ch4_db_easy_48",
    "titleEn": "Photodiode Dark Current Origin",
    "titleAr": "مصدر تيار الظلام في الصمام الثنائي الضوئي",
    "difficulty": "easy",
    "questionEn": "When a photodiode is completely shielded from all light in a dark room under reverse bias, a small residual current called the 'dark current' still flows because:",
    "questionAr": "عند حجب الصمام الثنائي الضوئي تماماً عن أي ضوء في غرفة مظلمة تحت انحياز عكسي، يظل هناك تيار متبقٍ ضئيل يسمى 'تيار الظلام' بسبب:",
    "optionsEn": [
      "Radioactive decay of the plastic package casing",
      "Electrons traveling backward in time across the junction",
      "Light stored permanently in the silicon crystal from previous days",
      "Spontaneous thermal generation of electron-hole pairs inside and near the depletion layer, swept across by the reverse electric field"
    ],
    "optionsAr": [
      "الانحلال الإشعاعي للغلاف البلاستيكي",
      "حركة الإلكترونات إلى الوراء في الزمن عبر الوصلة",
      "الضوء المخزن في بلورة السيليكون من الأيام السابقة",
      "التوليد الحراري التلقائي لأزواج إلكترون-فجوة داخل منطقة النضوب وقربها، والتي يجرفها المجال الكهربي العكسي"
    ],
    "correctAnswer": "Spontaneous thermal generation of electron-hole pairs inside and near the depletion layer, swept across by the reverse electric field",
    "correctIndex": 3,
    "hintEn": "Dark current is simply the thermal reverse saturation current $I_s$ of the junction.",
    "hintAr": "تيار الظلام هو ببساطة تيار الإشباع العكسي الحراري للوصلة الثنائية.",
    "stepByStepSolutionEn": [
      "Thermal agitation continuously breaks covalent bonds at rate $G_{\\text{th}}$. Any electron-hole pair generated in the depletion zone is instantly separated by the built-in and reverse fields, creating a baseline leakage current (dark current)."
    ],
    "stepByStepSolutionAr": [
      "تولد الحرارة أزواج إلكترون-فجوة باستمرار بمعدل حراري طبيعي، فيفصلها المجال الكهربي لمنطقة النضوب لتتدفق كتيار تسريب عكسي أساسي يسمى تيار الظلام."
    ],
    "teacherTipEn": "Cooling photodiodes reduces dark current, improving signal-to-noise ratio in astronomical cameras.",
    "teacherTipAr": "تبريد الكواشف الضوئية يخفض تيار الظلام ويرفع حساسية تلسكوبات الفضاء."
  },
  {
    "id": "egbac_phys_ch4_db_easy_49",
    "titleEn": "LED Color and Forward Threshold Voltage Relationship",
    "titleAr": "علاقة لون LED بجهد الإشعال الأمامي",
    "difficulty": "easy",
    "questionEn": "Why does a blue Gallium Nitride LED require a significantly higher forward turn-on voltage ($V_{\\text{on}} \\approx 3.0-3.4\\text{ V}$) than a red Gallium Arsenide Phosphide LED ($V_{\\text{on}} \\approx 1.8-2.0\\text{ V}$)?",
    "questionAr": "لماذا يتطلب الصمام الثنائي الباعث للضوء الأزرق (GaN) جهد إشعال أمامياً أعلى بكثير ($V_{\\text{on}} \\approx 3.0-3.4\\text{ V}$) من صمام LED الأحمر ($V_{\\text{on}} \\approx 1.8-2.0\\text{ V}$)؟",
    "optionsEn": [
      "Blue photons carry higher quantum energy ($h\\nu_{\\text{blue}} \\approx 2.8-3.1\\text{ eV}$), requiring a semiconductor with a larger bandgap ($E_g \\approx 3.4\\text{ eV}$) and correspondingly higher junction barrier height: $q V_{\\text{on}} \\approx E_g$",
      "Because blue paint on the plastic lens adds electrical resistance",
      "Because red LEDs contain miniature step-up transformers inside",
      "Because blue electrons are three times heavier than red electrons"
    ],
    "optionsAr": [
      "لأن فوتونات الضوء الأزرق تحمل طاقة كمية أعلى ($h\\nu \\approx 3\\text{ eV}$)، مما يتطلب شبه موصل ذا فجوة طاقة أوسع ($E_g \\approx 3.4\\text{ eV}$) وحاجز جهد داخلي أعلى يجب التغلب عليه: $q V_{\\text{on}} \\approx E_g$",
      "لأن الطلاء الأزرق على العدسة البلاستيكية يضيف مقاومة كهربية",
      "لأن مصابيح LED الحمراء تحتوي على محولات رافعة للجهد بالداخل",
      "لأن الإلكترونات الزرقاء أثقل بثلاث مرات من الحمراء"
    ],
    "correctAnswer": "Blue photons carry higher quantum energy ($h\\nu_{\\text{blue}} \\approx 2.8-3.1\\text{ eV}$), requiring a semiconductor with a larger bandgap ($E_g \\approx 3.4\\text{ eV}$) and correspondingly higher junction barrier height: $q V_{\\text{on}} \\approx E_g$",
    "correctIndex": 0,
    "hintEn": "Turn-on voltage tracks photon energy: $q V_{\\text{on}} \\approx h\\nu = hc/\\lambda$. Shorter wavelength $\\implies$ higher voltage.",
    "hintAr": "جهد العتبة يطابق طاقة الفوتون: $q V_{\\text{on}} \\approx hc/\\lambda$. الطول الموجي الأقصر يعني طاقة أكبر وجهداً أعلى.",
    "stepByStepSolutionEn": [
      "To inject carriers across the junction and initiate radiative recombination, the applied forward voltage must roughly match the built-in potential $q V_{bi} \\approx E_g$. Blue LEDs emit at $\\lambda \\approx 450\\text{ nm}$ ($E_{\\text{photon}} \\approx 2.76\\text{ eV}$), necessitating $V_{\\text{on}} \\approx 3.0\\text{ V}$, compared to $\\approx 1.8\\text{ V}$ for red ($\\lambda \\approx 650\\text{ nm}$)."
    ],
    "stepByStepSolutionAr": [
      "لبدء حقن الشحنات والالتحام المشع، يجب أن يتغلب الجهد الخارجي على حاجز الجهد المطابق لفجوة النطاق $q V \\approx E_g$. وبما أن فوتون الأزرق طاقته نحو 2.8 إلى 3 إلكترون فولت فإنه يتطلب جهداً لا يقل عن 3 فولت، مقارنة بنحو 1.8 فولت للأحمر."
    ],
    "teacherTipEn": "The invention of the blue GaN LED earned Akasaki, Amano, and Nakamura the 2014 Nobel Prize in Physics.",
    "teacherTipAr": "نال مخترعو LED الأزرق جائزة نوبل في الفيزياء عام 2014 لتمكينهم البشرية من الإضاءة البيضاء الموفرة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_50",
    "titleEn": "Solar Cell Fill Factor (FF) Definition",
    "titleAr": "تعريف معامل الامتلاء (Fill Factor) للخلية الشمسية",
    "difficulty": "easy",
    "questionEn": "The Fill Factor ($\\text{FF}$) of a photovoltaic solar cell, measuring the squareness of its $I-V$ characteristic and quality, is defined as:",
    "questionAr": "يعرف معامل الامتلاء (Fill Factor - FF) للخلية الشمسية الكهروضوئية، والذي يقيس كفاءة وجودة منحنى $I-V$، بأنه النسبة:",
    "optionsEn": [
      "$\\text{FF} = \\frac{V_{\\text{oc}}}{I_{\\text{sc}}}$",
      "$\\text{FF} = \\frac{P_{\\text{max}}}{V_{\\text{oc}} \\cdot I_{\\text{sc}}} = \\frac{V_{\\text{mp}} \\cdot I_{\\text{mp}}}{V_{\\text{oc}} \\cdot I_{\\text{sc}}}$",
      "$\\text{FF} = V_{\\text{oc}} \\cdot I_{\\text{sc}} \\cdot P_{\\text{max}}$",
      "$\\text{FF} = \\frac{I_{\\text{sc}}}{V_{\\text{oc}}}$"
    ],
    "optionsAr": [
      "$\\text{FF} = \\frac{V_{\\text{oc}}}{I_{\\text{sc}}}$",
      "$\\text{FF} = \\frac{P_{\\text{max}}}{V_{\\text{oc}} \\cdot I_{\\text{sc}}} = \\frac{V_{\\text{mp}} \\cdot I_{\\text{mp}}}{V_{\\text{oc}} \\cdot I_{\\text{sc}}}$",
      "$\\text{FF} = V_{\\text{oc}} \\cdot I_{\\text{sc}} \\cdot P_{\\text{max}}$",
      "$\\text{FF} = \\frac{I_{\\text{sc}}}{V_{\\text{oc}}}$"
    ],
    "correctAnswer": "$\\text{FF} = \\frac{P_{\\text{max}}}{V_{\\text{oc}} \\cdot I_{\\text{sc}}} = \\frac{V_{\\text{mp}} \\cdot I_{\\text{mp}}}{V_{\\text{oc}} \\cdot I_{\\text{sc}}}$",
    "correctIndex": 1,
    "hintEn": "Ratio of actual maximum power rectangle to ideal open-circuit short-circuit rectangle: $\\text{FF} < 1$.",
    "hintAr": "نسبة مستطيل أقصى قدرة فعلية إلى المستطيل المثالي الناتج عن ضرب جهد الدائرة المفتوحة في تيار القصر.",
    "stepByStepSolutionEn": [
      "The theoretical upper limit of power is $V_{\\text{oc}} I_{\\text{sc}}$. The actual maximum power operating point delivers $P_{\\text{max}} = V_{\\text{mp}} I_{\\text{mp}}$. The ratio $\\text{FF} = \\frac{V_{\\text{mp}} I_{\\text{mp}}}{V_{\\text{oc}} I_{\\text{sc}}}$ (typically $0.75 - 0.85$ in high-grade silicon) reflects low parasitic series resistance and high shunt resistance."
    ],
    "stepByStepSolutionAr": [
      "أقصى قدرة نظرية هي جداء $V_{\\text{oc}} I_{\\text{sc}}$. بينما نقطة التشغيل العظمى الفعلية تعطي $P_{\\text{max}} = V_{\\text{mp}} I_{\\text{mp}}$. النسبة بينهما هي معامل الامتلاء (0.75 إلى 0.85 للسيليكون الجيد) وتعبر عن خلو الخلية من مقاومات الفقد الداخلية."
    ],
    "teacherTipEn": "Solar cell efficiency is $\\eta = \\frac{P_{\\text{max}}}{P_{\\text{in}}} = \\frac{V_{\\text{oc}} I_{\\text{sc}} \\text{FF}}{P_{\\text{in}}}$.",
    "teacherTipAr": "كفاءة الخلية الكلية تساوي حاصل ضرب جهد الدائرة المفتوحة وتيار القصر ومعامل الامتلاء مقسوماً على القدرة الشمسية الساقطة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_51",
    "titleEn": "Transistor Base-Width Modulation (Early Effect)",
    "titleAr": "تأثير إيرلي وتعديل عرض القاعدة في الترانزستور",
    "difficulty": "easy",
    "questionEn": "In a bipolar junction transistor, the 'Early effect' (base-width modulation) refers to:",
    "questionAr": "في ترانزستور ثنائي القطبية، يقصد بـ 'تأثير إيرلي' (Early effect أو تعديل عرض القاعدة):",
    "optionsEn": [
      "The transistor turning on 10 minutes earlier than scheduled",
      "The physical expansion of the copper collector lead under thermal heating",
      "The narrowing of the effective neutral base width as reverse collector-base voltage $V_{CB}$ increases, causing the collector depletion layer to widen deeper into the lightly doped base",
      "The permanent chemical transmutation of silicon into germanium"
    ],
    "optionsAr": [
      "بدء تشغيل الترانزستور قبل موعده بعشر دقائق",
      "التمدد الفيزيائي لسلك المجمع النحاسي بالحرارة",
      "تقلص العرض الفعال للقاعدة المحايدة مع زيادة الجهد العكسي للمجمع $V_{CB}$، نتيجة اتساع منطقة نضوب المجمع داخل منطقة القاعدة خفيفة التطعيم",
      "التحول الكيميائي الدائم لذرات السيليكون إلى جرمانيوم"
    ],
    "correctAnswer": "The narrowing of the effective neutral base width as reverse collector-base voltage $V_{CB}$ increases, causing the collector depletion layer to widen deeper into the lightly doped base",
    "correctIndex": 2,
    "hintEn": "Higher reverse collector voltage widens CB depletion zone, eating into the thin base.",
    "hintAr": "زيادة الجهد العكسي للمجمع توسع منطقة النضوب فتلتهم جزءاً من سمك القاعدة الرقيقة أصلاً.",
    "stepByStepSolutionEn": [
      "Because the base is lightly doped compared to the collector, the collector-base reverse depletion region extends predominantly into the base. Increasing $V_{CE}$ widens this depletion layer, shrinking the effective neutral base width $W_B$. This reduces recombination, slightly increasing $I_C$ and giving a finite output resistance $r_o$."
    ],
    "stepByStepSolutionAr": [
      "لأن القاعدة خفيفة التطعيم مقارنة بالمجمع، فإن اتساع منطقة النضوب العكسية للمجمع يتوغل داخل القاعدة، مما يقلص سمكها الفعال مع زيادة الجهد العكسي. هذا يقلل فرص التحام الشحنات في القاعدة فيزداد تيار المجمع طفيفاً كاشفاً عن مقاومة خرج غير لا نهائية."
    ],
    "teacherTipEn": "Named after James M. Early, who analyzed the phenomenon at Bell Labs in 1952.",
    "teacherTipAr": "سمي تيمناً بالعالم جيمس إيرلي في مختبرات بل عام 1952."
  },
  {
    "id": "egbac_phys_ch4_db_easy_52",
    "titleEn": "Binary Digital Logic Voltage Level Standards",
    "titleAr": "المستويات المنطقية الثنائية للجهد في الدوائر الرقمية",
    "difficulty": "easy",
    "questionEn": "In standard Transistor-Transistor Logic (TTL) digital integrated circuits, binary '0' (LOW) and binary '1' (HIGH) are typically represented by which voltage ranges?",
    "questionAr": "في الدوائر المتكاملة الرقمية القياسية من عائلة TTL، يمثل المنطق الثنائي '0' (منخفض) و '1' (مرتفع) بأي نطاقي جهد؟",
    "optionsEn": [
      "Binary 0 is $-1000\\text{ V}$ and binary 1 is $+1000\\text{ V}$",
      "Binary 0 is $100\\text{ V}$ AC and binary 1 is $0\\text{ V}$ DC",
      "Both binary 0 and 1 are represented by the exact same voltage",
      "Binary 0 is represented by $0\\text{ V} - 0.8\\text{ V}$, and binary 1 is represented by $2.0\\text{ V} - 5.0\\text{ V}$"
    ],
    "optionsAr": [
      "الصفر الثنائي يمثله -1000 فولت والواحد الثنائي +1000 فولت",
      "الصفر الثنائي يمثله 100 فولت تيار متردد والواحد الثنائي صفر فولت مستمر",
      "يمثل الصفر والواحد بنفس الجهد الكهربي تماماً",
      "الصفر الثنائي يمثله نطاق جهد $0\\text{ V} - 0.8\\text{ V}$، والواحد الثنائي يمثله نطاق جهد $2.0\\text{ V} - 5.0\\text{ V}$"
    ],
    "correctAnswer": "Binary 0 is represented by $0\\text{ V} - 0.8\\text{ V}$, and binary 1 is represented by $2.0\\text{ V} - 5.0\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "Noise margins guarantee stable logic recognition: LOW near ground ($0\\text{ V}$); HIGH near supply ($5\\text{ V}$).",
    "hintAr": "هوامش الضوضاء تضمن تمييز الحالات الرقمية: المستوى المنخفض قرب الأرضي (صفر فولت)، والمستوى المرتفع قرب المصدر (5 فولت).",
    "stepByStepSolutionEn": [
      "In 5V TTL systems, any voltage below $0.8\\text{ V}$ is unambiguously recognized as logical 0, while any voltage above $2.0\\text{ V}$ is recognized as logical 1. The region between $0.8\\text{ V}$ and $2.0\\text{ V}$ is the forbidden transition band, providing noise immunity."
    ],
    "stepByStepSolutionAr": [
      "في أنظمة TTL ذات الـ 5 فولت، يعتبر أي جهد دون 0.8 فولت صفراً منطقياً قاطعاً، وأي جهد يعلو 2.0 فولت واحداً منطقياً، والمنطقة البينية محظورة لمنع أخطاء الضوضاء والتشويش الكهربائي."
    ],
    "teacherTipEn": "Modern CMOS microprocessors use lower supply voltages ($1.8\\text{ V}, 1.2\\text{ V}, 0.8\\text{ V}$) to reduce dynamic switching power dissipation ($P \\propto f C V^2$).",
    "teacherTipAr": "تستخدم المعالجات الحديثة جهوداً أصغر (1.2 أو 0.8 فولت) لتقليل استهلاك الطاقة والحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_53",
    "titleEn": "Monolithic Integrated Circuit (IC) Fabrication Principle",
    "titleAr": "مفهوم الدائرة المتكاملة الأحادية (Integrated Circuit - IC)",
    "difficulty": "easy",
    "questionEn": "A monolithic Integrated Circuit (IC), invented by Jack Kilby and Robert Noyce, is fundamentally defined as:",
    "questionAr": "تعرف الدائرة المتكاملة الأحادية (IC - ابتكار كيلبي ونويس) بصورة جوهرية بأنها:",
    "optionsEn": [
      "A complete functional electronic circuit consisting of millions to billions of interconnected transistors, diodes, and resistors fabricated together onto a single microscopic silicon substrate chip",
      "A mechanical board where discrete vacuum tubes are wired with thick copper cables",
      "A glass battery that generates alternating current using radioactive radium",
      "A hand-soldered collection of macroscopic lightbulbs"
    ],
    "optionsAr": [
      "دائرة إلكترونية وظيفية كاملة تضم ملايين إلى مليارات الترانزستورات والدايودات والمقاومات المترابطة والمصنعة معاً على رقاقة سيليكون مجهرية موحدة",
      "لوحة ميكانيكية توصل فيها صمامات مفرغة منفصلة بكابلات نحاسية سميكة",
      "بطارية زجاجية تولد تياراً متردداً بالراديوم المشع",
      "مجموعة مصابيح مجمعة يدوياً بأسلاك اللحام"
    ],
    "correctAnswer": "A complete functional electronic circuit consisting of millions to billions of interconnected transistors, diodes, and resistors fabricated together onto a single microscopic silicon substrate chip",
    "correctIndex": 0,
    "hintEn": "Microscopic planar batch fabrication of entire systems on a single silicon die.",
    "hintAr": "تصنيع منظومات إلكترونية متكاملة بمليارات الترانزستورات دفعة واحدة على شريحة سيليكون دقيقة بتقنية المستوي الواحد.",
    "stepByStepSolutionEn": [
      "Instead of soldering individual discrete components, photolithography, diffusion, ion implantation, and thin-film metallization create billions of nanoscale transistors simultaneously on a single wafer of silicon, multiplying speed and reliability while collapsing cost."
    ],
    "stepByStepSolutionAr": [
      "بدلاً من لحام مكونات منفصلة، تتيح تقنيات الطباعة الضوئية والزرع الأيوني حفر وتصنيع مليارات الترانزستورات النانوية دفعة واحدة على رقاقة سيليكون وحيدة، مما ضاعف السرعة والأمان وخفض تكلفة الحواسيب."
    ],
    "teacherTipEn": "Jack Kilby was awarded the 2000 Nobel Prize in Physics for inventing the integrated circuit.",
    "teacherTipAr": "نال جاك كيلبي جائزة نوبل في الفيزياء عام 2000 تكريماً لابتكاره الدائرة المتكاملة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_54",
    "titleEn": "Silicon vs Germanium Thermal Temperature Limits",
    "titleAr": "الاستقرار الحراري المتفوق للسيليكون مقارنة بالجرمانيوم",
    "difficulty": "easy",
    "questionEn": "Why did Silicon completely replace Germanium as the dominant material for manufacturing transistors and computer chips?",
    "questionAr": "لماذا حل السيليكون محل الجرمانيوم تماماً كعنصر رئيسي مهيمن في صناعة الترانزستورات ورقاقات الحواسيب؟",
    "optionsEn": [
      "Because Germanium does not exist on Earth",
      "Silicon's wider bandgap ($1.12\\text{ eV}$ vs $0.67\\text{ eV}$) gives vastly lower reverse leakage current and allows stable operation at much higher temperatures (up to $150-200^\\circ\\text{C}$ vs $75^\\circ\\text{C}$ for Ge), plus silicon easily forms a stable insulating native oxide ($\\text{SiO}_2$)",
      "Because Silicon is a radioactive element that powers itself",
      "Because Germanium dissolves in dry air"
    ],
    "optionsAr": [
      "لأن الجرمانيوم غير موجود على كوكب الأرض",
      "لأن فجوة طاقة السيليكون الأوسع (1.12 إلكترون فولت مقابل 0.67 للجرمانيوم) تعطي تيار تسريب عكسي أقل بآلاف المرات وتتحمل درجات حرارة تشغيل أعلى (حتى 200 مئوية مقابل 75 للجرمانيوم)، فضلاً عن تكوين أكسيد عازل ممتاز ($\\text{SiO}_2$)",
      "لأن السيليكون عنصر مشع يغذي نفسه ذاتياً",
      "لأن الجرمانيوم يذوب في الهواء الجاف"
    ],
    "correctAnswer": "Silicon's wider bandgap ($1.12\\text{ eV}$ vs $0.67\\text{ eV}$) gives vastly lower reverse leakage current and allows stable operation at much higher temperatures (up to $150-200^\\circ\\text{C}$ vs $75^\\circ\\text{C}$ for Ge), plus silicon easily forms a stable insulating native oxide ($\\text{SiO}_2$)",
    "correctIndex": 1,
    "hintEn": "Wider bandgap $\\implies$ million times smaller $n_i \\implies$ negligible thermal leakage current; native $\\text{SiO}_2$ enables planar photolithography.",
    "hintAr": "فجوة الطاقة الأكبر تعني تيار تسريب حراري أقل بمليون مرة؛ وتكوين طبقة أكسيد السيليكون العازلة ($\\text{SiO}_2$) فتح باب الطباعة الضوئية للرقاقات.",
    "stepByStepSolutionEn": [
      "Germanium diodes suffer severe reverse leakage that doubles every $10^\\circ\\text{C}$, causing thermal runaway above $75^\\circ\\text{C}$. Silicon functions reliably up to $150^\\circ\\text{C}$ with picoamp leakage. Furthermore, growing a high-quality insulating passivation layer of $\\text{SiO}_2$ on silicon enabled the planar process and MOSFET revolution."
    ],
    "stepByStepSolutionAr": [
      "يعاني الجرمانيوم من تيار تسريب عكسي يتضاعف بسرعة بالحرارة فينهار عند 75 مئوية، بينما يعمل السيليكون بثبات حتى 150-200 مئوية. كما أن أكسدة السيليكون تنتج طبقة عازلة فائقة الجودة من ثاني أكسيد السيليكون مكنت من تصنيع ترانزستورات MOSFET الحديثة."
    ],
    "teacherTipEn": "Silicon is also the second most abundant element in the Earth's crust (sand / quartz).",
    "teacherTipAr": "السيليكون هو ثاني أكثر العناصر وفرة في القشرة الأرضية (الرمال والكوارتز)."
  },
  {
    "id": "egbac_phys_ch4_db_easy_55",
    "titleEn": "Photodiode Linear Dynamic Range",
    "titleAr": "المدى الديناميكي الخطي للصمام الثنائي الضوئي",
    "difficulty": "easy",
    "questionEn": "In a reverse-biased photodiode, the relationship between the generated photocurrent $I_{\\text{ph}}$ and the incident optical power $P_{\\text{opt}}$ is:",
    "questionAr": "في الصمام الثنائي الضوئي المنحاز عكسياً، تكون العلاقة بين التيار الضوئي المتولد $I_{\\text{ph}}$ والقدرة الضوئية الساقطة $P_{\\text{opt}}$:",
    "optionsEn": [
      "Inversely proportional: $I_{\\text{ph}} \\propto 1 / P_{\\text{opt}}$",
      "Exponentially saturating at 1 microwatt",
      "Strictly linear across many decades of optical power: $I_{\\text{ph}} = \\mathcal{R} \\cdot P_{\\text{opt}}$ (where $\\mathcal{R}$ is the responsivity in $\\text{A/W}$)",
      "Completely unpredictable and oscillating randomly"
    ],
    "optionsAr": [
      "تناسباً عكسياً: $I_{\\text{ph}} \\propto 1 / P_{\\text{opt}}$",
      "تشبعاً أسياً عند 1 ميكروواط",
      "خطية تماماً عبر عدة مراتب أُسية من شدة الضوء: $I_{\\text{ph}} = \\mathcal{R} \\cdot P_{\\text{opt}}$ (حيث $\\mathcal{R}$ هي الاستجابية بوحدة أمبير/واط)",
      "عشوائية متذبذبة وغير متوقعة"
    ],
    "correctAnswer": "Strictly linear across many decades of optical power: $I_{\\text{ph}} = \\mathcal{R} \\cdot P_{\\text{opt}}$ (where $\\mathcal{R}$ is the responsivity in $\\text{A/W}$)",
    "correctIndex": 2,
    "hintEn": "One absorbed photon creates one electron-hole pair: current is directly proportional to photon arrival rate.",
    "hintAr": "كل فوتون يمتص يحرر زوج إلكترون-فجوة واحداً، وعليه يتناسب التيار طردياً وخطياً مع معدل سقوط الفوتونات.",
    "stepByStepSolutionEn": [
      "Because each photon of energy $h\\nu$ generates a single electron-hole pair with quantum efficiency $\\eta$, the generated photocurrent is $I_{\\text{ph}} = q \\eta \\left(\\frac{P_{\\text{opt}}}{h\\nu}\\right) = \\mathcal{R} P_{\\text{opt}}$. This exact linearity spans over 6 to 8 orders of magnitude, making photodiodes ideal optical power meters."
    ],
    "stepByStepSolutionAr": [
      "بما أن كل فوتون يولد زوج شحنات بكفاءة كمية $\\eta$، فإن التيار الضوئي هو $I_{\\text{ph}} = \\frac{q \\eta}{h\\nu} P_{\\text{opt}} = \\mathcal{R} P_{\\text{opt}}$. هذه العلاقة الخطية الصارمة تمتد لأكثر من 7 رتب عشرية، مما يجعل الدايود الضوئي أداة قياس دقيقة لشدة الضوء."
    ],
    "teacherTipEn": "Responsivity $\\mathcal{R}$ is typically $0.5 - 0.9\\text{ A/W}$ for silicon and InGaAs.",
    "teacherTipAr": "استجابية الدايود الضوئي تبلغ عادة نحو 0.5 إلى 0.9 أمبير لكل واط."
  },
  {
    "id": "egbac_phys_ch4_db_easy_56",
    "titleEn": "Semiconductor Valence and Conduction Band Filling at Absolute Zero",
    "titleAr": "حالة حزم الطاقة عند درجة الصفر المطلق",
    "difficulty": "easy",
    "questionEn": "At absolute zero temperature ($T = 0\\text{ K}$), an intrinsic semiconductor crystal behaves as:",
    "questionAr": "عند درجة الصفر المطلق ($T = 0\\text{ K}$)، تتصرف بلورة شبه الموصل النقي كـ:",
    "optionsEn": [
      "A perfect superconductor with zero electrical resistance",
      "A molten liquid plasma emitting sparks",
      "A radioactive source of thermal neutrons",
      "A perfect electrical insulator, because the valence band is completely full and the conduction band is completely empty"
    ],
    "optionsAr": [
      "موصل فائق مثالي ذي مقاومة كهربية صفرية",
      "بلازما سائلة منصهرة تطلق شرارات",
      "مصدر مشع للنيوترونات الحرارية",
      "عازل كهربي مثالي، لأن حزمة التكافؤ ممتلئة بالكامل بالإلكترونات وحزمة التوصيل خالية تماماً"
    ],
    "correctAnswer": "A perfect electrical insulator, because the valence band is completely full and the conduction band is completely empty",
    "correctIndex": 3,
    "hintEn": "At 0 K, thermal energy is zero ($k_B T = 0$). Zero broken bonds means zero free carriers.",
    "hintAr": "عند الصفر المطلق تنعدم الطاقة الحرارية تماماً وتكون كافة الروابط سليمة، فلا توجد أي شحنات حرة للحركة.",
    "stepByStepSolutionEn": [
      "At $T = 0\\text{ K}$, all electrons reside in the lowest available energy states. The valence band is $100\\%$ filled (no holes), and the conduction band has $0\\%$ occupancy ($n = 0, p = 0$). With no empty states in the valence band and no electrons in the conduction band, electrical conduction is strictly zero."
    ],
    "stepByStepSolutionAr": [
      "عند الصفر المطلق تستقر جميع الإلكترونات في أدنى مستويات الطاقة، فتكون حزمة التكافؤ ممتلئة بنسبة 100% وحزمة التوصيل فارغة تماماً. وبانعدام الإلكترونات في التوصيل وانعدام الفجوات في التكافؤ، تصبح الموصلية الكهربية صفراً مطلقاً ويعمل شبه الموصل كعازل تام."
    ],
    "teacherTipEn": "Thermal excitation is mandatory to awaken semiconductor conductivity.",
    "teacherTipAr": "الطاقة الحرارية أمر إلزامي لبدء التوصيل الكهربي في أشباه الموصلات."
  },
  {
    "id": "egbac_phys_ch4_db_easy_57",
    "titleEn": "De Morgan's Theorem Application to Logic Simplification",
    "titleAr": "تطبيق نظريات دي مورغان في تبسيط التعبيرات المنطقية",
    "difficulty": "easy",
    "questionEn": "Using De Morgan's laws and Boolean algebra, the expression $Y = \\overline{\\overline{A} + \\overline{B}}$ simplifies directly to:",
    "questionAr": "باستخدام قوانين دي مورغان والجبر المنطقي، يبسط التعبير $Y = \\overline{\\overline{A} + \\overline{B}}$ مباشرة إلى:",
    "optionsEn": [
      "$Y = A \\cdot B$ (a standard AND gate)",
      "$Y = A + B$",
      "$Y = \\overline{A \\cdot B}$",
      "$Y = \\overline{A} \\cdot B$"
    ],
    "optionsAr": [
      "$Y = A \\cdot B$ (بوابة AND قياسية)",
      "$Y = A + B$",
      "$Y = \\overline{A \\cdot B}$",
      "$Y = \\overline{A} \\cdot B$"
    ],
    "correctAnswer": "$Y = A \\cdot B$ (a standard AND gate)",
    "correctIndex": 0,
    "hintEn": "Apply first De Morgan law: $\\overline{X + Y} = \\bar{X} \\cdot \\bar{Y}$. Here $X = \\bar{A}$ and $Y = \\bar{B}$.",
    "hintAr": "طبق قانون دي مورغان الأول: نفي المجموع ينقلب لضرب المنفيات مع حذف النفي المزدوج.",
    "stepByStepSolutionEn": [
      "Applying De Morgan's theorem: $\\overline{\\bar{A} + \\bar{B}} = \\overline{\\overline{A}} \\cdot \\overline{\\overline{B}}$. Because double inversion cancels ($\\overline{\\overline{A}} = A$ and $\\overline{\\overline{B}} = B$), this simplifies identically to $Y = A \\cdot B$."
    ],
    "stepByStepSolutionAr": [
      "بتطبيق قانون دي مورغان: $\\overline{\\bar{A} + \\bar{B}} = \\overline{\\overline{A}} \\cdot \\overline{\\overline{B}}$. وبما أن نفي النفي إثبات ($\\overline{\\overline{A}} = A$)، يبسط التعبير مباشرة إلى $Y = A \\cdot B$ وهي بوابة AND."
    ],
    "teacherTipEn": "A classic Boolean simplification problem appearing frequently on physics exams.",
    "teacherTipAr": "مسألة كلاسيكية في تبسيط البوابات المنطقية."
  },
  {
    "id": "egbac_phys_ch4_db_easy_58",
    "titleEn": "Digital Half-Adder Architecture",
    "titleAr": "بنية دائرة نصف الجامع الرقمي (Half-Adder)",
    "difficulty": "easy",
    "questionEn": "A digital binary half-adder circuit that adds two single-bit inputs ($A$ and $B$) to produce a Sum bit ($S$) and a Carry bit ($C$) consists of which two logic gates?",
    "questionAr": "تتكون دائرة نصف الجامع الثنائي الرقمي (Half-Adder) التي تجمع بتين مفردين ($A$ و $B$) لإنتاج بت المجموع ($S$) وبت الحمل ($C$) من أي بوابتين منطقيتين؟",
    "optionsEn": [
      "Two OR gates connected in parallel",
      "An XOR gate for the Sum ($S = A \\oplus B$) and an AND gate for the Carry ($C = A \\cdot B$)",
      "A single NOT gate connected to a capacitor",
      "Two NAND gates with inverted power supplies"
    ],
    "optionsAr": [
      "بوابتي OR متصلتين على التوازي",
      "بوابة XOR لبت المجموع ($S = A \\oplus B$) وبوابة AND لبت الحمل ($C = A \\cdot B$)",
      "بوابة NOT واحدة متصلة بمكثف",
      "بوابتي NAND مع عكس أقطاب التغذية"
    ],
    "correctAnswer": "An XOR gate for the Sum ($S = A \\oplus B$) and an AND gate for the Carry ($C = A \\cdot B$)",
    "correctIndex": 1,
    "hintEn": "Binary addition rules: $0+0=00$, $0+1=01$, $1+0=01$, $1+1=10$ (Sum is 0, Carry is 1).",
    "hintAr": "قواعد الجمع الثنائي: $1+1=10$ (المجموع 0 والحمل 1). المجموع يطابق XOR والحمل يطابق AND.",
    "stepByStepSolutionEn": [
      "The truth table for binary addition shows that the Sum bit is 1 when inputs differ ($S = A \\oplus B$, implemented by XOR), and the Carry bit is 1 only when both inputs are 1 ($C = A \\cdot B$, implemented by AND)."
    ],
    "stepByStepSolutionAr": [
      "يوضح جدول جمع الأعداد الثنائية أن بت المجموع يكون 1 عند اختلاف المدخلين فقط ($S = A \\oplus B$) وهو سلوك بوابة XOR، بينما لا يظهر بت الحمل $C=1$ إلا عندما يكون كلا المدخلين 1 ($C = A \\cdot B$) وهو سلوك بوابة AND."
    ],
    "teacherTipEn": "Cascading two half-adders with an OR gate forms a full-adder capable of processing carry-in bits.",
    "teacherTipAr": "دمج نصفي جامع مع بوابة OR يشكل دائرة الجامع الكامل في الحواسيب."
  }
],
  medium: [
  {
    "id": "egbac_phys_ch4_db_med_01",
    "titleEn": "Law of Mass Action Numerical Minority Hole Concentration",
    "titleAr": "حساب تركيز الفجوات الأقلية بقانون فعل الكتلة",
    "difficulty": "medium",
    "questionEn": "In a silicon sample at $T = 300\\text{ K}$ with intrinsic concentration $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$, donor phosphorus atoms are doped to a concentration of $N_d = 1.0 \\times 10^{16}\\text{ cm}^{-3}$. The thermal equilibrium minority hole concentration $p$ is:",
    "questionAr": "في عينة سيليكون عند 300 كلفن ذات تركيز ذاتي $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$، طعمت بذرات فوسفور مانحة بتركيز $N_d = 1.0 \\times 10^{16}\\text{ cm}^{-3}$. تركيز فجوات الأقلية الحرارية $p$ عند الاتزان يساوي:",
    "optionsEn": [
      "$2.25 \\times 10^4\\text{ cm}^{-3}$",
      "$1.50 \\times 10^6\\text{ cm}^{-3}$",
      "$1.00 \\times 10^{16}\\text{ cm}^{-3}$",
      "$2.25 \\times 10^{20}\\text{ cm}^{-3}$"
    ],
    "optionsAr": [
      "$2.25 \\times 10^4\\text{ cm}^{-3}$",
      "$1.50 \\times 10^6\\text{ cm}^{-3}$",
      "$1.00 \\times 10^{16}\\text{ cm}^{-3}$",
      "$2.25 \\times 10^{20}\\text{ cm}^{-3}$"
    ],
    "correctAnswer": "$2.25 \\times 10^4\\text{ cm}^{-3}$",
    "correctIndex": 0,
    "hintEn": "Use the Law of Mass Action: $n \\cdot p = n_i^2 \\implies p = n_i^2 / N_d$.",
    "hintAr": "طبق قانون فعل الكتلة: $p = n_i^2 / N_d$.",
    "stepByStepSolutionEn": [
      "$n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$. Since $n \\approx N_d = 1.0 \\times 10^{16}\\text{ cm}^{-3}$, we have $p = \\frac{2.25 \\times 10^{20}}{1.0 \\times 10^{16}} = 2.25 \\times 10^4\\text{ cm}^{-3}$."
    ],
    "stepByStepSolutionAr": [
      "$n_i^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$. وبما أن $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$، فإن $p = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^4\\text{ cm}^{-3}$."
    ],
    "teacherTipEn": "Massive majority electron concentration ($10^{16}$) suppresses minority holes to a tiny trace ($22,500\\text{ cm}^{-3}$).",
    "teacherTipAr": "التركيز الهائل لإلكترونات الأغلبية يخفض تركيز الفجوات الأقلية إلى قيمة ضئيلة جداً بالالتحام."
  },
  {
    "id": "egbac_phys_ch4_db_med_02",
    "titleEn": "P-Type Semiconductor Minority Electron Density Calculation",
    "titleAr": "حساب تركيز الإلكترونات الأقلية في شبه الموصل نوع P",
    "difficulty": "medium",
    "questionEn": "A silicon crystal is doped with boron acceptors to $N_a = 5.0 \\times 10^{15}\\text{ cm}^{-3}$. Taking $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$, what is the minority electron concentration $n$?",
    "questionAr": "طعمت بلورة سيليكون بشوائب بورون متقبلة بتركيز $N_a = 5.0 \\times 10^{15}\\text{ cm}^{-3}$. باعتبار $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$، ما تركيز الإلكترونات الأقلية $n$؟",
    "optionsEn": [
      "$3.00 \\times 10^5\\text{ cm}^{-3}$",
      "$4.50 \\times 10^4\\text{ cm}^{-3}$",
      "$7.50 \\times 10^{25}\\text{ cm}^{-3}$",
      "$5.00 \\times 10^{15}\\text{ cm}^{-3}$"
    ],
    "optionsAr": [
      "$3.00 \\times 10^5\\text{ cm}^{-3}$",
      "$4.50 \\times 10^4\\text{ cm}^{-3}$",
      "$7.50 \\times 10^{25}\\text{ cm}^{-3}$",
      "$5.00 \\times 10^{15}\\text{ cm}^{-3}$"
    ],
    "correctAnswer": "$4.50 \\times 10^4\\text{ cm}^{-3}$",
    "correctIndex": 1,
    "hintEn": "$n = n_i^2 / N_a$.",
    "hintAr": "طبق قانون فعل الكتلة: $n = n_i^2 / N_a$.",
    "stepByStepSolutionEn": [
      "$n = \\frac{n_i^2}{p} \\approx \\frac{2.25 \\times 10^{20}\\text{ cm}^{-6}}{5.0 \\times 10^{15}\\text{ cm}^{-3}} = 4.5 \\times 10^4\\text{ cm}^{-3}$."
    ],
    "stepByStepSolutionAr": [
      "$n = \\frac{2.25 \\times 10^{20}}{5 \\times 10^{15}} = 4.5 \\times 10^4\\text{ cm}^{-3}$."
    ],
    "teacherTipEn": "Holes are majority ($p \\approx 5 \\times 10^{15}\\text{ cm}^{-3}$) while electrons are suppressed to minority ($4.5 \\times 10^4\\text{ cm}^{-3}$).",
    "teacherTipAr": "الفجوات أغلبية ($5 \\times 10^{15}\\text{ cm}^{-3}$) والإلكترونات أقلية مجهرية."
  },
  {
    "id": "egbac_phys_ch4_db_med_03",
    "titleEn": "Built-In Potential Formula of a P-N Junction",
    "titleAr": "صيغة حاجز الجهد الداخلي للوصلة الثنائية PN",
    "difficulty": "medium",
    "questionEn": "The built-in potential barrier $V_{bi}$ formed across a step p-n junction with acceptor doping $N_a$, donor doping $N_d$, and intrinsic concentration $n_i$ is given by:",
    "questionAr": "يتعين حاجز الجهد الداخلي $V_{bi}$ المتكون عبر وصلة PN ذات تطعيم متقبل $N_a$ وتطعيم مانح $N_d$ وتركيز ذاتي $n_i$ بالعلاقة:",
    "optionsEn": [
      "$V_{bi} = \\frac{q}{k_B T} \\frac{N_a + N_d}{n_i}$",
      "$V_{bi} = V_T \\frac{n_i^2}{N_a N_d}$",
      "$V_{bi} = \\frac{k_B T}{q} \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right) = V_T \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$",
      "$V_{bi} = \\frac{k_B T}{q} \\sqrt{N_a N_d}$"
    ],
    "optionsAr": [
      "$V_{bi} = \\frac{q}{k_B T} \\frac{N_a + N_d}{n_i}$",
      "$V_{bi} = V_T \\frac{n_i^2}{N_a N_d}$",
      "$V_{bi} = \\frac{k_B T}{q} \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right) = V_T \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$",
      "$V_{bi} = \\frac{k_B T}{q} \\sqrt{N_a N_d}$"
    ],
    "correctAnswer": "$V_{bi} = \\frac{k_B T}{q} \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right) = V_T \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$",
    "correctIndex": 2,
    "hintEn": "Integrate the electric field or equate Fermi levels: $q V_{bi} = (E_{Fi,p} - E_{Fi,n}) = k_B T \\ln(p_p / p_n)$.",
    "hintAr": "حاجز الجهد يساوي حاصل ضرب الجهد الحراري في لوغاريتم نسبة الشحنات: $V_T \\ln(N_a N_d / n_i^2)$.",
    "stepByStepSolutionEn": [
      "The difference in Fermi levels before contact sets the contact potential: $V_{bi} = \\frac{k_B T}{q} \\ln\\left(\\frac{p_p}{p_n}\\right)$. Substituting $p_p \\approx N_a$ and $p_n \\approx n_i^2 / N_d$ gives $V_{bi} = V_T \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "فارق طاقتي فيرمي بين المنطقتين قبل التلامس يحدد حاجز الجهد: $V_{bi} = V_T \\ln(p_p / p_n)$. وبالتعويض ينتج $V_{bi} = V_T \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$."
    ],
    "teacherTipEn": "Heavier doping pushes $V_{bi}$ higher, approaching the full bandgap potential ($E_g / q \\approx 1.1\\text{ V}$ in Si).",
    "teacherTipAr": "زيادة كثافة الشوائب ترفع من قيمة حاجز الجهد الداخلي مقتربة من فجوة الطاقة."
  },
  {
    "id": "egbac_phys_ch4_db_med_04",
    "titleEn": "Numerical Built-In Potential Calculation",
    "titleAr": "حساب عددي لحاجز الجهد الداخلي للسيليكون",
    "difficulty": "medium",
    "questionEn": "A silicon p-n junction at $T = 300\\text{ K}$ has thermal voltage $V_T = 0.026\\text{ V}$, $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$, with $N_a = 1.0 \\times 10^{17}\\text{ cm}^{-3}$ and $N_d = 1.0 \\times 10^{16}\\text{ cm}^{-3}$. The built-in potential $V_{bi}$ is approximately:",
    "questionAr": "وصلة سيليكون ثنائية عند 300 كلفن جهدها الحراري $V_T = 0.026\\text{ V}$ و $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ وتطعيمها $N_a = 10^{17}\\text{ cm}^{-3}$ و $N_d = 10^{16}\\text{ cm}^{-3}$. حاجز الجهد الداخلي $V_{bi}$ يساوي تقريباً:",
    "optionsEn": [
      "$1.120\\text{ V}$",
      "$0.026\\text{ V}$",
      "$5.200\\text{ V}$",
      "$0.757\\text{ V}$ (approx $0.76\\text{ V}$)"
    ],
    "optionsAr": [
      "$1.120\\text{ V}$",
      "$0.026\\text{ V}$",
      "$5.200\\text{ V}$",
      "$0.757\\text{ V}$ (نحو $0.76\\text{ V}$)"
    ],
    "correctAnswer": "$0.757\\text{ V}$ (approx $0.76\\text{ V}$)",
    "correctIndex": 3,
    "hintEn": "Calculate the ratio $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} = 4.44 \\times 10^{12}$. Then take natural log and multiply by $0.026\\text{ V}$.",
    "hintAr": "احسب النسبة داخل اللوغاريتم: $\\frac{10^{33}}{2.25 \\times 10^{20}} = 4.44 \\times 10^{12}$ ثم اضرب $\\ln$ في 0.026.",
    "stepByStepSolutionEn": [
      "$\\frac{N_a N_d}{n_i^2} = \\frac{10^{17} \\times 10^{16}}{2.25 \\times 10^{20}} = 4.444 \\times 10^{12}$. Then $\\ln(4.444 \\times 10^{12}) \\approx 29.12$. Finally, $V_{bi} = 0.026\\text{ V} \\times 29.12 \\approx 0.757\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "النسبة = $4.44 \\times 10^{12}$. واللوغاريتم الطبيعي لها $\\approx 29.12$. إذن $V_{bi} = 0.026 \\times 29.12 = 0.757\\text{ V} \\approx 0.76\\text{ V}$."
    ],
    "teacherTipEn": "Matches the experimental turn-on voltage ($\\approx 0.7\\text{ V}$) of standard silicon diodes.",
    "teacherTipAr": "يتطابق بدقة مع جهد العتبة العملي لدايود السيليكون (~0.7 فولت)."
  },
  {
    "id": "egbac_phys_ch4_db_med_05",
    "titleEn": "Depletion Region Width Asymmetry in One-Sided Junctions",
    "titleAr": "توزع سمك منطقة النضوب في الوصلات غير المتناظرة ($p^+$-$n$)",
    "difficulty": "medium",
    "questionEn": "In an asymmetric one-sided $p^+$-$n$ junction where the p-side is heavily doped compared to the lightly doped n-side ($N_a \\gg N_d$):",
    "questionAr": "في وصلة ثنائية غير متناظرة من النوع $p^+$-$n$ حيث الجانب P عالي التطعيم جداً مقارنة بالجانب N ($N_a \\gg N_d$):",
    "optionsEn": [
      "The depletion region extends almost entirely into the lightly doped n-side, with width $W \\approx x_n = \\sqrt{\\frac{2\\epsilon_s V_{\\text{total}}}{q N_d}}$",
      "The depletion region is confined 100% inside the $p^+$ region",
      "The depletion width drops to zero permanently",
      "Both sides have identical depletion depths regardless of doping"
    ],
    "optionsAr": [
      "تمتد منطقة النضوب بالكامل تقريباً داخل الجانب N منخفض التطعيم، ويكون سمكها $W \\approx x_n = \\sqrt{\\frac{2\\epsilon_s V_{\\text{total}}}{q N_d}}$",
      "تنحصر منطقة النضوب بنسبة 100% داخل منطقة $p^+$ عالية التطعيم",
      "ينعدم سمك منطقة النضوب ليصبح صفراً تماماً",
      "يكون سمك منطقة النضوب متساوياً في الجانبين بصرف النظر عن التطعيم"
    ],
    "correctAnswer": "The depletion region extends almost entirely into the lightly doped n-side, with width $W \\approx x_n = \\sqrt{\\frac{2\\epsilon_s V_{\\text{total}}}{q N_d}}$",
    "correctIndex": 0,
    "hintEn": "Charge neutrality: $q N_a x_p = q N_d x_n$. Large $N_a$ means tiny $x_p$.",
    "hintAr": "شرط تعادل الشحنة: $N_a x_p = N_d x_n$. التطعيم الكثيف لـ P يجعل توغل النضوب فيه ضئيلاً جداً.",
    "stepByStepSolutionEn": [
      "Total charge must balance: $N_a x_p = N_d x_n \\implies \\frac{x_p}{x_n} = \\frac{N_d}{N_a}$. When $N_a \\gg N_d$, $x_p \\ll x_n$, so the depletion layer penetrates almost entirely into the lower-doped n-region."
    ],
    "stepByStepSolutionAr": [
      "تتساوى الشحنات المقيدة على الجانبين: $N_a x_p = N_d x_n$. وبما أن $N_a \\gg N_d$ فإن $x_p \\ll x_n$، مما يجعل منطقة النضوب تمتد بالكامل تقريباً داخل الطرف N الأقل تطعيماً."
    ],
    "teacherTipEn": "Critical engineering design rule in power diodes, photodiodes, and BJTs.",
    "teacherTipAr": "قاعدة تصميمية أساسية في دايودات القدرة والكواشف الضوئية والترانزستور."
  },
  {
    "id": "egbac_phys_ch4_db_med_06",
    "titleEn": "Depletion Junction Capacitance Bias Dependence",
    "titleAr": "اعتماد سعة الوصلة الانتقالية على الجهد العكسي",
    "difficulty": "medium",
    "questionEn": "Under reverse bias voltage $V_r$, the depletion layer (junction) capacitance $C_j$ of an abrupt p-n junction scales with applied voltage as:",
    "questionAr": "تحت تأثير جهد الانحياز العكسي $V_r$، تتناسب سعة منطقة النضوب (السعة الانتقالية) $C_j$ لوصلة PN مع الجهد المطبق كـ:",
    "optionsEn": [
      "$C_j \\propto (V_{bi} + V_r)^2$",
      "$C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_r}}$",
      "$C_j \\propto \\sqrt{V_{bi} + V_r}$",
      "$C_j$ is strictly independent of reverse bias voltage"
    ],
    "optionsAr": [
      "$C_j \\propto (V_{bi} + V_r)^2$",
      "$C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_r}}$",
      "$C_j \\propto \\sqrt{V_{bi} + V_r}$",
      "$C_j$ مستقلة تماماً عن قيمة الجهد العكسي"
    ],
    "correctAnswer": "$C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_r}}$",
    "correctIndex": 1,
    "hintEn": "Parallel-plate capacitor: $C = \\epsilon A / W$. Reverse bias widens $W \\propto \\sqrt{V_r}$, decreasing capacitance.",
    "hintAr": "سعة مكثف اللوحين المتوازيين: $C = \\epsilon A / W$. الجهد العكسي يوسع المسافة $W$ فتقل السعة.",
    "stepByStepSolutionEn": [
      "The depletion region acts as a parallel-plate capacitor with dielectric $\\epsilon_s$ and plate separation $W$. Because $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\dots(V_{bi}+V_r)}$, capacitance $C_j = \\frac{\\epsilon_s A}{W} \\propto (V_{bi} + V_r)^{-1/2}$ decreases with reverse bias."
    ],
    "stepByStepSolutionAr": [
      "تسلك منطقة النضوب الخالية من الشحنات كوسط عازل بين لوحي مكثف سمكه $W$. وبما أن $W \\propto \\sqrt{V_{bi} + V_r}$، فإن السعة $C_j = \\frac{\\epsilon A}{W}$ تتناسب عكسياً مع جذر الجهد العكسي."
    ],
    "teacherTipEn": "Exploited in varactor diodes for voltage-controlled electronic RF tuning.",
    "teacherTipAr": "تستغل في دايود الفاركتور (المكثف المتغير بالجهد) لتوليف محطات الراديو إلكترونياً."
  },
  {
    "id": "egbac_phys_ch4_db_med_07",
    "titleEn": "Forward Diode Dynamic AC Resistance Formula",
    "titleAr": "صيغة المقاومة الديناميكية للدايود الأمامي",
    "difficulty": "medium",
    "questionEn": "For a forward-biased diode conducting DC current $I_D$, the small-signal AC dynamic resistance $r_d = \\frac{dV}{dI}$ is given by:",
    "questionAr": "لدايود في حالة انحياز أمامي يمر فيه تيار مستمر $I_D$، تتعين المقاومة الديناميكية المترددة للإشارات الصغيرة $r_d = \\frac{dV}{dI}$ بالعلاقة:",
    "optionsEn": [
      "$r_d = \\frac{I_D}{\\eta V_T}$",
      "$r_d = \\eta V_T \\cdot I_D$",
      "$r_d = \\frac{\\eta V_T}{I_D}$ (where $V_T = \\frac{k_B T}{q}$ is thermal voltage and $\\eta$ is ideality factor)",
      "$r_d = \\frac{\\eta^2 V_T^2}{I_D^2}$"
    ],
    "optionsAr": [
      "$r_d = \\frac{I_D}{\\eta V_T}$",
      "$r_d = \\eta V_T \\cdot I_D$",
      "$r_d = \\frac{\\eta V_T}{I_D}$ (حيث $V_T = \\frac{k_B T}{q}$ هو الجهد الحراري و $\\eta$ معامل المثالية)",
      "$r_d = \\frac{\\eta^2 V_T^2}{I_D^2}$"
    ],
    "correctAnswer": "$r_d = \\frac{\\eta V_T}{I_D}$ (where $V_T = \\frac{k_B T}{q}$ is thermal voltage and $\\eta$ is ideality factor)",
    "correctIndex": 2,
    "hintEn": "Differentiate Shockley equation: $dI/dV = I / (\\eta V_T) \\implies r_d = dV/dI = \\eta V_T / I$.",
    "hintAr": "فاضل معادلة شوكلي: $dI/dV = I / (\\eta V_T)$ ومنها $r_d = \\eta V_T / I_D$.",
    "stepByStepSolutionEn": [
      "From $I \\approx I_s e^{V / \\eta V_T}$, the conductance is $g_d = \\frac{dI}{dV} = \\frac{I}{\\eta V_T}$. Inverting gives dynamic resistance $r_d = \\frac{\\eta V_T}{I_D}$. Higher forward current makes dynamic resistance smaller."
    ],
    "stepByStepSolutionAr": [
      "من معادلة الدايود، يكون ميل المماس $dI/dV = \\frac{I_D}{\\eta V_T}$. ومقلوبه يعطي المقاومة الديناميكية $r_d = \\frac{\\eta V_T}{I_D}$. وكلما زاد تيار الانحياز الأمامي قلت المقاومة الديناميكية للدايود."
    ],
    "teacherTipEn": "At $I_D = 2.6\\text{ mA}$ with $\\eta = 1$, $r_d = 26\\text{ mV} / 2.6\\text{ mA} = 10\\ \\Omega$.",
    "teacherTipAr": "عند تيار 2.6 مللي أمبير، تكون المقاومة الديناميكية 10 أوم فقط."
  },
  {
    "id": "egbac_phys_ch4_db_med_08",
    "titleEn": "Reverse Leakage Current Temperature Doubling Rule",
    "titleAr": "قاعدة مضاعفة تيار التسريب العكسي كل 10 درجات مئوية",
    "difficulty": "medium",
    "questionEn": "In a silicon p-n diode, the reverse saturation current $I_s$ doubles approximately every $10^\\circ\\text{C}$ temperature increase. If $I_s = 2.0\\text{ nA}$ at $25^\\circ\\text{C}$, what is $I_s$ at $55^\\circ\\text{C}$?",
    "questionAr": "في دايود السيليكون، يتضاعف تيار الإشباع العكسي $I_s$ كلما ارتفعت الحرارة بمقدار $10^\\circ\\text{C}$. إذا كان $I_s = 2.0\\text{ nA}$ عند $25^\\circ\\text{C}$، فكم تصبح قيمته عند $55^\\circ\\text{C}$؟",
    "optionsEn": [
      "$6.0\\text{ nA}$",
      "$20.0\\text{ nA}$",
      "$128.0\\text{ nA}$",
      "$16.0\\text{ nA}$ ($1.6 \\times 10^{-8}\\text{ A}$)"
    ],
    "optionsAr": [
      "$6.0\\text{ nA}$",
      "$20.0\\text{ nA}$",
      "$128.0\\text{ nA}$",
      "$16.0\\text{ nA}$ ($1.6 \\times 10^{-8}\\text{ A}$)"
    ],
    "correctAnswer": "$16.0\\text{ nA}$ ($1.6 \\times 10^{-8}\\text{ A}$)",
    "correctIndex": 3,
    "hintEn": "Temperature rise $\\Delta T = 55 - 25 = 30^\\circ\\text{C}$, corresponding to 3 doubling steps: $2^3 = 8$.",
    "hintAr": "فارق الحرارة = $30^\\circ\\text{C}$، أي ثلاث فترات مضاعفة: يتضاعف التيار $2^3 = 8$ مرات.",
    "stepByStepSolutionEn": [
      "The number of $10^\\circ\\text{C}$ increments is $m = \\frac{55 - 25}{10} = 3$. Then $I_s(55^\\circ\\text{C}) = I_s(25^\\circ\\text{C}) \\times 2^3 = 2.0\\text{ nA} \\times 8 = 16.0\\text{ nA}$."
    ],
    "stepByStepSolutionAr": [
      "عدد مرات التضاعف = $(55 - 25)/10 = 3$. ويكون التيار = $2.0 \\times 2^3 = 2.0 \\times 8 = 16.0\\text{ nA}$."
    ],
    "teacherTipEn": "A classic rule of thumb in electronics: thermal leakage grows exponentially with temperature.",
    "teacherTipAr": "قاعدة ذهبية في الإلكترونيات: تيار التسريب الحراري يتضاعف أسياً بالحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_med_09",
    "titleEn": "Einstein Relation Between Mobility and Diffusion",
    "titleAr": "علاقة أينشتاين بين الحركية ومعامل الانتشار",
    "difficulty": "medium",
    "questionEn": "In solid-state physics, the Einstein relation connects carrier diffusion coefficient $D$ and mobility $\\mu$ at temperature $T$ according to:",
    "questionAr": "في فيزياء الجوامد، تربط علاقة أينشتاين بين معامل انتشار الشحنات $D$ وحركيتها $\\mu$ عند درجة حرارة $T$ بالعلاقة:",
    "optionsEn": [
      "$\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = \\frac{k_B T}{q} = V_T$",
      "$\\frac{D_n}{\\mu_n} = \\frac{q}{k_B T}$",
      "$D_n \\cdot \\mu_n = \\frac{k_B T}{q}$",
      "$\\frac{D_n}{\\mu_n} = \\sqrt{\\frac{k_B T}{q}}$"
    ],
    "optionsAr": [
      "$\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = \\frac{k_B T}{q} = V_T$",
      "$\\frac{D_n}{\\mu_n} = \\frac{q}{k_B T}$",
      "$D_n \\cdot \\mu_n = \\frac{k_B T}{q}$",
      "$\\frac{D_n}{\\mu_n} = \\sqrt{\\frac{k_B T}{q}}$"
    ],
    "correctAnswer": "$\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = \\frac{k_B T}{q} = V_T$",
    "correctIndex": 0,
    "hintEn": "Ratio of diffusion to mobility is the thermal voltage $V_T \\approx 0.026\\text{ V}$ at room temperature.",
    "hintAr": "نسبة معامل الانتشار إلى الحركية تساوي الجهد الحراري $V_T \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "By balancing drift and diffusion currents in thermal equilibrium inside a non-uniform semiconductor, Einstein derived $\\frac{D}{\\mu} = \\frac{k_B T}{q}$. Particles with higher mobility $\\mu$ necessarily diffuse faster with larger $D$."
    ],
    "stepByStepSolutionAr": [
      "بموازنة تياري الانجراف والانتشار عند الاتزان الحراري، استنتج أينشتاين أن $\\frac{D}{\\mu} = \\frac{k_B T}{q}$. فالشحنات ذات الحركية الأكبر تنتشر أسرع بمعامل انتشار أكبر طردياً."
    ],
    "teacherTipEn": "Holds rigorously for non-degenerate semiconductors in equilibrium.",
    "teacherTipAr": "تنطبق بدقة على أشباه الموصلات غير المنحطة عند الاتزان."
  },
  {
    "id": "egbac_phys_ch4_db_med_10",
    "titleEn": "Numerical Electron Diffusion Coefficient Calculation",
    "titleAr": "حساب عددي لمعامل انتشار الإلكترونات",
    "difficulty": "medium",
    "questionEn": "If electrons in a silicon sample have a mobility of $\\mu_n = 1350\\text{ cm}^2/\\text{V}\\cdot\\text{s}$ at $T = 300\\text{ K}$ (thermal voltage $V_T = 0.0259\\text{ V}$), what is the electron diffusion coefficient $D_n$?",
    "questionAr": "إذا كانت حركية الإلكترونات في السيليكون $\\mu_n = 1350\\text{ cm}^2/\\text{V}\\cdot\\text{s}$ عند 300 كلفن ($V_T = 0.0259\\text{ V}$)، فما قيمة معامل انتشار الإلكترونات $D_n$؟",
    "optionsEn": [
      "$5.21 \\times 10^4\\text{ cm}^2/\\text{s}$",
      "$35.0\\text{ cm}^2/\\text{s}$",
      "$0.035\\text{ cm}^2/\\text{s}$",
      "$1.92 \\times 10^{-5}\\text{ cm}^2/\\text{s}$"
    ],
    "optionsAr": [
      "$5.21 \\times 10^4\\text{ cm}^2/\\text{s}$",
      "$35.0\\text{ cm}^2/\\text{s}$",
      "$0.035\\text{ cm}^2/\\text{s}$",
      "$1.92 \\times 10^{-5}\\text{ cm}^2/\\text{s}$"
    ],
    "correctAnswer": "$35.0\\text{ cm}^2/\\text{s}$",
    "correctIndex": 1,
    "hintEn": "$D_n = \\mu_n \\times V_T = 1350 \\times 0.0259$.",
    "hintAr": "عوض في علاقة أينشتاين: $D_n = \\mu_n \\cdot V_T$.",
    "stepByStepSolutionEn": [
      "$D_n = \\mu_n \\left(\\frac{k_B T}{q}\\right) = (1350\\text{ cm}^2/\\text{V}\\cdot\\text{s}) \\times (0.0259\\text{ V}) \\approx 34.965\\text{ cm}^2/\\text{s} \\approx 35.0\\text{ cm}^2/\\text{s}$."
    ],
    "stepByStepSolutionAr": [
      "$D_n = 1350 \\times 0.0259 \\approx 35.0\\text{ cm}^2/\\text{s}$."
    ],
    "teacherTipEn": "Holes have lower mobility ($\\mu_p \\approx 480$), so hole diffusion coefficient is smaller: $D_p \\approx 12.4\\text{ cm}^2/\\text{s}$.",
    "teacherTipAr": "الفجوات حركيتها أقل فيكون معامل انتشارها أصغر: نحو 12.4 سم²/ثانية."
  },
  {
    "id": "egbac_phys_ch4_db_med_11",
    "titleEn": "Minority Carrier Diffusion Length Formula",
    "titleAr": "صيغة طول انتشار حاملات الشحنة الأقلية",
    "difficulty": "medium",
    "questionEn": "The average distance $L_n$ that excess minority electrons diffuse before recombining with majority holes is given by the diffusion length:",
    "questionAr": "تتعين المسافة المتوسطة $L_n$ التي تنتشرها إلكترونات الأقلية الفائضة قبل التحامها بالفجوات بطول الانتشار بالعلاقة:",
    "optionsEn": [
      "$L_n = \\frac{D_n}{\\tau_n}$",
      "$L_n = D_n^2 \\cdot \\tau_n$",
      "$L_n = \\sqrt{D_n \\cdot \\tau_n}$ (where $\\tau_n$ is minority carrier lifetime)",
      "$L_n = \\frac{\\tau_n^2}{D_n}$"
    ],
    "optionsAr": [
      "$L_n = \\frac{D_n}{\\tau_n}$",
      "$L_n = D_n^2 \\cdot \\tau_n$",
      "$L_n = \\sqrt{D_n \\cdot \\tau_n}$ (حيث $\\tau_n$ هو العمر الزمني لحاملات الأقلية)",
      "$L_n = \\frac{\\tau_n^2}{D_n}$"
    ],
    "correctAnswer": "$L_n = \\sqrt{D_n \\cdot \\tau_n}$ (where $\\tau_n$ is minority carrier lifetime)",
    "correctIndex": 2,
    "hintEn": "Root-mean-square random walk diffusion distance: $x_{\\text{rms}} \\propto \\sqrt{D t}$.",
    "hintAr": "مسافة السير العشوائي للانتشار تتناسب مع الجذر التربيعي لحاصل ضرب معامل الانتشار في الزمن.",
    "stepByStepSolutionEn": [
      "Solving the steady-state continuity diffusion equation $\\frac{d^2(\\Delta n)}{dx^2} = \\frac{\\Delta n}{D_n \\tau_n}$ yields exponential decay $\\Delta n(x) = \\Delta n(0) e^{-x/L_n}$, where the characteristic decay length is $L_n = \\sqrt{D_n \\tau_n}$."
    ],
    "stepByStepSolutionAr": [
      "حل معادلة الانتشار والاستمرارية يعطي اضمحلالاً أسياً للمسافة: $\\Delta n(x) = \\Delta n_0 e^{-x/L_n}$، حيث ثابت الاضمحلال المميز هو طول الانتشار $L_n = \\sqrt{D_n \\tau_n}$."
    ],
    "teacherTipEn": "In BJTs, the base width $W_B$ must be much smaller than $L_n$ ($W_B \\ll L_n$) to ensure high current gain.",
    "teacherTipAr": "في الترانزستور يجب أن يكون سمك القاعدة أصغر بكثير من طول الانتشار لضمان وصول الشحنات للمجمع."
  },
  {
    "id": "egbac_phys_ch4_db_med_12",
    "titleEn": "Numerical Minority Diffusion Length Calculation",
    "titleAr": "حساب عددي لطول انتشار حاملات الأقلية",
    "difficulty": "medium",
    "questionEn": "In a p-type silicon region, electrons have diffusion coefficient $D_n = 36\\text{ cm}^2/\\text{s}$ and lifetime $\\tau_n = 1.0\\ \\mu\\text{s}$ ($1.0 \\times 10^{-6}\\text{ s}$). The electron diffusion length $L_n$ is:",
    "questionAr": "في منطقة سيليكون من النوع P، تمتلك الإلكترونات معامل انتشار $D_n = 36\\text{ cm}^2/\\text{s}$ وعمراً زمنياً $\\tau_n = 1.0\\ \\mu\\text{s}$ ($1.0 \\times 10^{-6}\\text{ s}$). طول انتشار الإلكترونات $L_n$ يساوي:",
    "optionsEn": [
      "$36.0\\text{ cm}$",
      "$6.0\\ \\mu\\text{m}$",
      "$0.36\\text{ mm}$",
      "$60\\ \\mu\\text{m}$ ($6.0 \\times 10^{-3}\\text{ cm}$)"
    ],
    "optionsAr": [
      "$36.0\\text{ cm}$",
      "$6.0\\ \\mu\\text{m}$",
      "$0.36\\text{ mm}$",
      "$60\\ \\mu\\text{m}$ ($6.0 \\times 10^{-3}\\text{ cm}$)"
    ],
    "correctAnswer": "$60\\ \\mu\\text{m}$ ($6.0 \\times 10^{-3}\\text{ cm}$)",
    "correctIndex": 3,
    "hintEn": "$L_n = \\sqrt{D_n \\tau_n} = \\sqrt{36 \\times 10^{-6}}$.",
    "hintAr": "طبق $L_n = \\sqrt{D_n \\tau_n}$.",
    "stepByStepSolutionEn": [
      "$L_n = \\sqrt{36\\text{ cm}^2/\\text{s} \\times 1.0 \\times 10^{-6}\\text{ s}} = \\sqrt{3.6 \\times 10^{-5}\\text{ cm}^2} = 6.0 \\times 10^{-3}\\text{ cm} = 60\\ \\mu\\text{m}$."
    ],
    "stepByStepSolutionAr": [
      "$L_n = \\sqrt{36 \\times 10^{-6}} = 6 \\times 10^{-3}\\text{ cm} = 60\\ \\mu\\text{m}$."
    ],
    "teacherTipEn": "If base width is $W_B = 1\\ \\mu\\text{m}$, then $W_B \\ll L_n$ ($1\\ \\mu\\text{m} \\ll 60\\ \\mu\\text{m}$), ensuring $> 99\\%$ of electrons cross safely.",
    "teacherTipAr": "إذا كان سمك قاعدة الترانزستور 1 ميكرومتر، فإنه أصغر بكثير من 60 ميكرومتر، مما يضمن عبور 99% من الإلكترونات دون التحام."
  },
  {
    "id": "egbac_phys_ch4_db_med_13",
    "titleEn": "Silicon Resistivity Calculation from Doping Density",
    "titleAr": "حساب المقاومة النوعية للسيليكون المطعم",
    "difficulty": "medium",
    "questionEn": "An n-type silicon wafer is uniformly doped with phosphorus to $N_d = 1.0 \\times 10^{16}\\text{ cm}^{-3}$. Given $q = 1.6 \\times 10^{-19}\\text{ C}$ and $\\mu_n = 1250\\text{ cm}^2/\\text{V}\\cdot\\text{s}$, the electrical resistivity $\\rho = 1/\\sigma$ is:",
    "questionAr": "طعمت رقاقة سيليكون نوع N بالفوسفور بتركيز $N_d = 1.0 \\times 10^{16}\\text{ cm}^{-3}$. باعتبار $q = 1.6 \\times 10^{-19}\\text{ C}$ وحركية الإلكترونات $\\mu_n = 1250\\text{ cm}^2/\\text{V}\\cdot\\text{s}$، فإن المقاومة النوعية $\\rho = 1/\\sigma$ تساوي:",
    "optionsEn": [
      "$0.50\\ \\Omega\\cdot\\text{cm}$",
      "$2.00\\ \\Omega\\cdot\\text{cm}$",
      "$50.0\\ \\Omega\\cdot\\text{cm}$",
      "$0.005\\ \\Omega\\cdot\\text{cm}$"
    ],
    "optionsAr": [
      "$0.50\\ \\Omega\\cdot\\text{cm}$",
      "$2.00\\ \\Omega\\cdot\\text{cm}$",
      "$50.0\\ \\Omega\\cdot\\text{cm}$",
      "$0.005\\ \\Omega\\cdot\\text{cm}$"
    ],
    "correctAnswer": "$0.50\\ \\Omega\\cdot\\text{cm}$",
    "correctIndex": 0,
    "hintEn": "$\\sigma = q N_d \\mu_n$; then $\\rho = 1 / \\sigma$.",
    "hintAr": "احسب التوصيلية $\\sigma = q N_d \\mu_n$ ثم خذ مقلوبها $\\rho = 1/\\sigma$.",
    "stepByStepSolutionEn": [
      "$\\sigma \\approx q N_d \\mu_n = (1.6 \\times 10^{-19}\\text{ C}) \\times (1.0 \\times 10^{16}\\text{ cm}^{-3}) \\times (1250\\text{ cm}^2/\\text{V}\\cdot\\text{s}) = 2.0\\ (\\Omega\\cdot\\text{cm})^{-1}$. Then $\\rho = \\frac{1}{\\sigma} = \\frac{1}{2.0} = 0.50\\ \\Omega\\cdot\\text{cm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sigma = (1.6 \\times 10^{-19}) \\times (10^{16}) \\times 1250 = 2.0\\ (\\Omega\\cdot\\text{cm})^{-1}$. وتكون المقاومة النوعية $\\rho = 1/2.0 = 0.50\\ \\Omega\\cdot\\text{cm}$."
    ],
    "teacherTipEn": "By comparison, pure intrinsic silicon has $\\rho \\approx 230,000\\ \\Omega\\cdot\\text{cm}$. Doping drops resistivity by nearly a million times!",
    "teacherTipAr": "بالمقارنة، تبلغ مقاومة السيليكون النقي نحو 230 ألف أوم·سم، والتطعيم يخفضها لنصف أوم·سم فقط!"
  },
  {
    "id": "egbac_phys_ch4_db_med_14",
    "titleEn": "Mathematical Relation Between Transistor Alpha and Beta",
    "titleAr": "التحويل الرياضي بين معاملي الترانزستور ألفا وبيتا",
    "difficulty": "medium",
    "questionEn": "The exact mathematical relationship connecting common-base current gain $\\alpha$ and common-emitter current gain $\\beta$ is:",
    "questionAr": "تتعين العلاقة الرياضية الدقيقة التي تربط بين معامل التوزيع $\\alpha$ ومعامل تكبير التيار $\\beta$ بالصيغة:",
    "optionsEn": [
      "$\\beta = \\frac{1 - \\alpha}{\\alpha}$",
      "$\\beta = \\frac{\\alpha}{1 - \\alpha} \\iff \\alpha = \\frac{\\beta}{\\beta + 1}$",
      "$\\beta = \\alpha^2 - 1$",
      "$\\beta = \\alpha \\cdot (\\alpha + 1)$"
    ],
    "optionsAr": [
      "$\\beta = \\frac{1 - \\alpha}{\\alpha}$",
      "$\\beta = \\frac{\\alpha}{1 - \\alpha} \\iff \\alpha = \\frac{\\beta}{\\beta + 1}$",
      "$\\beta = \\alpha^2 - 1$",
      "$\\beta = \\alpha \\cdot (\\alpha + 1)$"
    ],
    "correctAnswer": "$\\beta = \\frac{\\alpha}{1 - \\alpha} \\iff \\alpha = \\frac{\\beta}{\\beta + 1}$",
    "correctIndex": 1,
    "hintEn": "Start from $I_E = I_B + I_C$. Divide by $I_C$: $1/\\alpha = 1/\\beta + 1$.",
    "hintAr": "انطلق من $I_E = I_B + I_C$ واقسم على $I_C$: $1/\\alpha = 1/\\beta + 1$.",
    "stepByStepSolutionEn": [
      "Using $I_C = \\alpha I_E$ and $I_E = I_B + I_C$, we have $I_B = I_E - I_C = I_C(1/\\alpha - 1) = I_C \\left(\\frac{1 - \\alpha}{\\alpha}\\right)$. Thus $\\beta = \\frac{I_C}{I_B} = \\frac{\\alpha}{1 - \\alpha}$. Inverting gives $\\alpha = \\frac{\\beta}{\\beta + 1}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $I_B = I_E - I_C = I_C(1/\\alpha - 1) = I_C(\\frac{1-\\alpha}{\\alpha})$، فإن $\\beta = \\frac{I_C}{I_B} = \\frac{\\alpha}{1 - \\alpha}$. وبحلها لـ $\\alpha$ ينتج $\\alpha = \\frac{\\beta}{\\beta + 1}$."
    ],
    "teacherTipEn": "Because $\\alpha$ is very close to 1 ($0.99$), the denominator $1-\\alpha$ ($0.01$) is tiny, making $\\beta$ very large ($100$).",
    "teacherTipAr": "لأن $\\alpha$ قريبة جداً من 1، فإن المقام $1-\\alpha$ صغير جداً مما يجعل $\\beta$ كبيرة جداً."
  },
  {
    "id": "egbac_phys_ch4_db_med_15",
    "titleEn": "Numerical Calculation of Transistor Beta from Alpha",
    "titleAr": "حساب عددي لمعامل بيتا من معامل ألفا",
    "difficulty": "medium",
    "questionEn": "A bipolar junction transistor has an emitter injection and collection efficiency giving $\\alpha = 0.992$. What is its common-emitter current amplification factor $\\beta$?",
    "questionAr": "ترانزستور ثنائي القطبية يمتلك معامل توزيع $\\alpha = 0.992$. ما قيمة معامل تكبير التيار في الباعث المشترك $\\beta$؟",
    "optionsEn": [
      "$99.2$",
      "$0.008$",
      "$124$",
      "$500$"
    ],
    "optionsAr": [
      "$99.2$",
      "$0.008$",
      "$124$",
      "$500$"
    ],
    "correctAnswer": "$124$",
    "correctIndex": 2,
    "hintEn": "$\\beta = \\frac{\\alpha}{1 - \\alpha} = \\frac{0.992}{1 - 0.992} = \\frac{0.992}{0.008}$.",
    "hintAr": "طبق $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
    "stepByStepSolutionEn": [
      "$\\beta = \\frac{0.992}{1 - 0.992} = \\frac{0.992}{0.008} = 124$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta = \\frac{0.992}{0.008} = 124$."
    ],
    "teacherTipEn": "A mere $0.8\\%$ change in $\\alpha$ (from $0.992$ to $0.984$) drops $\\beta$ from $124$ down to $61.5$!",
    "teacherTipAr": "تغير طفيف في ألفا بنسبة أقل من 1% يؤدي لهبوط بيتا للنصف!"
  },
  {
    "id": "egbac_phys_ch4_db_med_16",
    "titleEn": "Transistor Collector and Base Current Calculation",
    "titleAr": "حساب تيارات الترانزستور بمعامل التكبير",
    "difficulty": "medium",
    "questionEn": "In a common-emitter amplifier, a transistor with $\\beta = 150$ has an applied base current of $I_B = 20\\ \\mu\\text{A}$ ($2.0 \\times 10^{-5}\\text{ A}$). The collector current $I_C$ and emitter current $I_E$ are, respectively:",
    "questionAr": "في مضخم باعث مشترك، يمتلك ترانزستور معامل تكبير $\\beta = 150$ وتيار قاعدته $I_B = 20\\ \\mu\\text{A}$ ($2.0 \\times 10^{-5}\\text{ A}$). تيار المجمع $I_C$ وتيار الباعث $I_E$ هما على الترتيب:",
    "optionsEn": [
      "$I_C = 150\\text{ mA}$ and $I_E = 150\\text{ mA}$",
      "$I_C = 0.13\\ \\mu\\text{A}$ and $I_E = 20.13\\ \\mu\\text{A}$",
      "$I_C = 30\\text{ A}$ and $I_E = 30\\text{ A}$",
      "$I_C = 3.0\\text{ mA}$ and $I_E = 3.02\\text{ mA}$"
    ],
    "optionsAr": [
      "$I_C = 150\\text{ mA}$ و $I_E = 150\\text{ mA}$",
      "$I_C = 0.13\\ \\mu\\text{A}$ و $I_E = 20.13\\ \\mu\\text{A}$",
      "$I_C = 30\\text{ A}$ و $I_E = 30\\text{ A}$",
      "$I_C = 3.0\\text{ mA}$ و $I_E = 3.02\\text{ mA}$"
    ],
    "correctAnswer": "$I_C = 3.0\\text{ mA}$ and $I_E = 3.02\\text{ mA}$",
    "correctIndex": 3,
    "hintEn": "$I_C = \\beta I_B$; $I_E = I_B + I_C$.",
    "hintAr": "احسب تيار المجمع $I_C = \\beta I_B$ ثم اجمع عليه تيار القاعدة لتحصل على تيار الباعث $I_E$.",
    "stepByStepSolutionEn": [
      "$I_C = \\beta I_B = 150 \\times (20 \\times 10^{-6}\\text{ A}) = 3.0 \\times 10^{-3}\\text{ A} = 3.0\\text{ mA}$. Then $I_E = I_B + I_C = 0.02\\text{ mA} + 3.0\\text{ mA} = 3.02\\text{ mA}$."
    ],
    "stepByStepSolutionAr": [
      "$I_C = 150 \\times (20\\ \\mu\\text{A}) = 3000\\ \\mu\\text{A} = 3.0\\text{ mA}$. وتيار الباعث $I_E = 3.0 + 0.02 = 3.02\\text{ mA}$."
    ],
    "teacherTipEn": "Notice that $I_E \\approx I_C$, differing by only the minuscule $I_B$.",
    "teacherTipAr": "لاحظ أن تيار الباعث يقارب تيار المجمع جداً ولا يفترقان إلا بتيار القاعدة الصغير."
  },
  {
    "id": "egbac_phys_ch4_db_med_17",
    "titleEn": "Transistor Common-Emitter DC Load Line Equation",
    "titleAr": "معادلة خط الحمل المستمر في دائرة الباعث المشترك",
    "difficulty": "medium",
    "questionEn": "In a common-emitter circuit with supply voltage $V_{CC}$ and collector load resistor $R_C$, the DC load line equation plotted on the $I_C - V_{CE}$ output characteristics is:",
    "questionAr": "في دائرة الباعث المشترك ذات جهد التغذية $V_{CC}$ ومقاومة حمل المجمع $R_C$، تتعين معادلة خط الحمل المستمر على منحنى الخرج $I_C - V_{CE}$ بالعلاقة:",
    "optionsEn": [
      "$V_{CE} = V_{CC} - I_C R_C \\iff I_C = -\\frac{1}{R_C} V_{CE} + \\frac{V_{CC}}{R_C}$",
      "$V_{CE} = V_{CC} + I_C R_C$",
      "$I_C = V_{CC} \\cdot R_C \\cdot V_{CE}$",
      "$V_{CE} = \\frac{R_C}{I_C} - V_{CC}$"
    ],
    "optionsAr": [
      "$V_{CE} = V_{CC} - I_C R_C \\iff I_C = -\\frac{1}{R_C} V_{CE} + \\frac{V_{CC}}{R_C}$",
      "$V_{CE} = V_{CC} + I_C R_C$",
      "$I_C = V_{CC} \\cdot R_C \\cdot V_{CE}$",
      "$V_{CE} = \\frac{R_C}{I_C} - V_{CC}$"
    ],
    "correctAnswer": "$V_{CE} = V_{CC} - I_C R_C \\iff I_C = -\\frac{1}{R_C} V_{CE} + \\frac{V_{CC}}{R_C}$",
    "correctIndex": 0,
    "hintEn": "Apply Kirchhoff's Voltage Law to the output collector loop: $V_{CC} - I_C R_C - V_{CE} = 0$.",
    "hintAr": "طبق قانون كيرشوف للجهد على دائرة المجمع: $V_{CC} - I_C R_C - V_{CE} = 0$.",
    "stepByStepSolutionEn": [
      "Kirchhoff's voltage law around the collector-emitter loop yields $V_{CC} = I_C R_C + V_{CE}$. Rearranging in slope-intercept form gives a straight line $I_C = -\\left(\\frac{1}{R_C}\\right) V_{CE} + \\frac{V_{CC}}{R_C}$ with negative slope $-1/R_C$."
    ],
    "stepByStepSolutionAr": [
      "وفق قانون كيرشوف الثاني لحلقة خرج المجمع: $V_{CC} = I_C R_C + V_{CE}$. وبترتيبها كمعادلة خط مستقيم: $I_C = -\\frac{1}{R_C} V_{CE} + \\frac{V_{CC}}{R_C}$ ذي ميل سالب مقداره $-1/R_C$."
    ],
    "teacherTipEn": "The intersection of this line with the base current curve determines the operating Q-point.",
    "teacherTipAr": "نقطة تقاطع خط الحمل مع منحنى تيار القاعدة تحدد نقطة تشغيل الترانزستور (Q-point)."
  },
  {
    "id": "egbac_phys_ch4_db_med_18",
    "titleEn": "Load Line Saturation and Cutoff Intercepts Calculation",
    "titleAr": "حساب نقطتي تقاطع خط الحمل عند التشبع والقطع",
    "difficulty": "medium",
    "questionEn": "A common-emitter circuit has $V_{CC} = 12\\text{ V}$ and collector resistor $R_C = 2.0\\text{ k}\\Omega$ ($2000\\ \\Omega$). What are the coordinates of the saturation point ($V_{CE} = 0$) and cutoff point ($I_C = 0$) on the load line?",
    "questionAr": "دائرة باعث مشترك تعمل بجهد تغذية $V_{CC} = 12\\text{ V}$ ومقاومة مجمع $R_C = 2.0\\text{ k}\\Omega$ ($2000\\ \\Omega$). ما إحداثيات نقطة التشبع ($V_{CE} = 0$) ونقطة القطع ($I_C = 0$) على خط الحمل؟",
    "optionsEn": [
      "Saturation point: $I_C = 24.0\\text{ mA}$; Cutoff point: $V_{CE} = 6.0\\text{ V}$",
      "Saturation point: $I_{C,\\text{sat}} = 6.0\\text{ mA}$; Cutoff point: $V_{CE,\\text{cutoff}} = 12.0\\text{ V}$",
      "Saturation point: $I_C = 0\\text{ mA}$; Cutoff point: $V_{CE} = 0\\text{ V}$",
      "Saturation point: $I_C = 12.0\\text{ A}$; Cutoff point: $V_{CE} = 2.0\\text{ V}$"
    ],
    "optionsAr": [
      "نقطة التشبع: $I_C = 24.0\\text{ mA}$؛ نقطة القطع: $V_{CE} = 6.0\\text{ V}$",
      "نقطة التشبع: $I_{C,\\text{sat}} = 6.0\\text{ mA}$؛ نقطة القطع: $V_{CE,\\text{cutoff}} = 12.0\\text{ V}$",
      "نقطة التشبع: $I_C = 0\\text{ mA}$؛ نقطة القطع: $V_{CE} = 0\\text{ V}$",
      "نقطة التشبع: $I_C = 12.0\\text{ A}$؛ نقطة القطع: $V_{CE} = 2.0\\text{ V}$"
    ],
    "correctAnswer": "Saturation point: $I_{C,\\text{sat}} = 6.0\\text{ mA}$; Cutoff point: $V_{CE,\\text{cutoff}} = 12.0\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "Set $V_{CE} = 0 \\implies I_C = V_{CC}/R_C$. Set $I_C = 0 \\implies V_{CE} = V_{CC}$.",
    "hintAr": "عند $V_{CE} = 0$ يكون $I_C = V_{CC}/R_C$. وعند $I_C = 0$ يكون $V_{CE} = V_{CC}$.",
    "stepByStepSolutionEn": [
      "When $V_{CE} = 0$, $I_{C,\\text{sat}} = \\frac{V_{CC}}{R_C} = \\frac{12\\text{ V}}{2000\\ \\Omega} = 6.0\\text{ mA}$. When $I_C = 0$, $V_{CE} = V_{CC} = 12\\text{ V}$. Connecting $(12\\text{ V}, 0\\text{ mA})$ and $(0\\text{ V}, 6.0\\text{ mA})$ draws the complete DC load line."
    ],
    "stepByStepSolutionAr": [
      "عند قصر الترانزستور ($V_{CE}=0$) يكون أقصى تيار $I_{C,\\text{sat}} = \\frac{12}{2000} = 6.0\\text{ mA}$. وعند قطع التيار ($I_C=0$) يكون الجهد أقصى ما يمكن مساوياً للمصدر $V_{CE} = 12\\text{ V}$."
    ],
    "teacherTipEn": "Transistor operation is physically restricted between these two boundary points.",
    "teacherTipAr": "ينحصر عمل الترانزستور الآمن بين هاتين النقطتين الطرفيتين."
  },
  {
    "id": "egbac_phys_ch4_db_med_19",
    "titleEn": "Transconductance (gm) Formula of a Bipolar Transistor",
    "titleAr": "صيغة التوصيلية التبادلية (gm) لترانزستور BJT",
    "difficulty": "medium",
    "questionEn": "The small-signal transconductance $g_m = \\frac{\\partial I_C}{\\partial V_{BE}}$ of a bipolar transistor operating at collector bias current $I_C$ is expressed as:",
    "questionAr": "تتعين التوصيلية التبادلية للإشارات الصغيرة $g_m = \\frac{\\partial I_C}{\\partial V_{BE}}$ لترانزستور يعمل عند تيار مجمع $I_C$ بالعلاقة:",
    "optionsEn": [
      "$g_m = \\frac{V_T}{I_C}$",
      "$g_m = I_C \\cdot V_T$",
      "$g_m = \\frac{I_C}{V_T} = \\frac{q I_C}{k_B T}$",
      "$g_m = \\frac{I_C^2}{V_T^2}$"
    ],
    "optionsAr": [
      "$g_m = \\frac{V_T}{I_C}$",
      "$g_m = I_C \\cdot V_T$",
      "$g_m = \\frac{I_C}{V_T} = \\frac{q I_C}{k_B T}$",
      "$g_m = \\frac{I_C^2}{V_T^2}$"
    ],
    "correctAnswer": "$g_m = \\frac{I_C}{V_T} = \\frac{q I_C}{k_B T}$",
    "correctIndex": 2,
    "hintEn": "Differentiate $I_C = I_S e^{V_{BE}/V_T} \\implies \\frac{\\partial I_C}{\\partial V_{BE}} = \\frac{I_C}{V_T}$.",
    "hintAr": "فاضل تيار المجمع بالنسبة لجهد القاعدة: $dI_C/dV_{BE} = I_C / V_T$.",
    "stepByStepSolutionEn": [
      "From Shockley's collector equation $I_C \\approx I_S e^{V_{BE}/V_T}$, differentiation yields $g_m = \\frac{I_C}{V_T}$. At room temperature ($V_T \\approx 26\\text{ mV}$), $g_m \\approx 38.5 \\times I_C(\\text{mA})\\text{ mS}$."
    ],
    "stepByStepSolutionAr": [
      "من معادلة المجمع الأسية، يكون التفاضل $g_m = \\frac{I_C}{V_T}$. وعند حرارة الغرفة (26 مللي فولت) تكون التوصيلية التبادلية $g_m \\approx 38.5 \\times I_C(\\text{mA})$ مللي سيمنز."
    ],
    "teacherTipEn": "BJT transconductance is purely proportional to bias current, far exceeding field-effect transistors (FETs).",
    "teacherTipAr": "تتميز ترانزستورات BJT بتوصيلية تبادلية هائلة تفوق ترانزستورات FET عند نفس تيار التشغيل."
  },
  {
    "id": "egbac_phys_ch4_db_med_20",
    "titleEn": "Common-Emitter Voltage Gain Calculation",
    "titleAr": "حساب تكبير الجهد لمضخم الباعث المشترك",
    "difficulty": "medium",
    "questionEn": "A common-emitter BJT amplifier operates with collector bias current $I_C = 2.0\\text{ mA}$ ($V_T = 26\\text{ mV} \\implies g_m \\approx 76.9\\text{ mS}$) and collector load resistor $R_C = 3.0\\text{ k}\\Omega$ ($3000\\ \\Omega$). Neglecting Early effect, the small-signal voltage gain $A_v = -g_m R_C$ is:",
    "questionAr": "مضخم باعث مشترك يعمل بتيار مجمع $I_C = 2.0\\text{ mA}$ ($V_T = 26\\text{ mV} \\implies g_m \\approx 76.9\\text{ mS}$) ومقاومة حمل مجمع $R_C = 3.0\\text{ k}\\Omega$ ($3000\\ \\Omega$). بإهمال تأثير إيرلي، فإن تكبير الجهد $A_v = -g_m R_C$ يساوي:",
    "optionsEn": [
      "$-1.50$",
      "$+500.0$",
      "$-0.015$",
      "$-230.8$ (a magnitude of $\\approx 231$ with $180^\\circ$ phase inversion)"
    ],
    "optionsAr": [
      "$-1.50$",
      "$+500.0$",
      "$-0.015$",
      "$-230.8$ (تكبير مقداره نحو 231 ضعفاً مع انقلاب في الطور)"
    ],
    "correctAnswer": "$-230.8$ (a magnitude of $\\approx 231$ with $180^\\circ$ phase inversion)",
    "correctIndex": 3,
    "hintEn": "$A_v = -g_m R_C = -\\left(\\frac{I_C}{V_T}\\right) R_C$.",
    "hintAr": "تكبير الجهد = $-g_m R_C = -\\frac{I_C}{V_T} R_C$.",
    "stepByStepSolutionEn": [
      "$g_m = \\frac{2.0 \\times 10^{-3}\\text{ A}}{0.026\\text{ V}} \\approx 0.07692\\text{ S}$. Then $A_v = -g_m R_C = -0.07692\\text{ S} \\times 3000\\ \\Omega \\approx -230.77 \\approx -231$."
    ],
    "stepByStepSolutionAr": [
      "$g_m = \\frac{2.0\\text{ mA}}{26\\text{ mV}} \\approx 76.92\\text{ mA/V}$. وتكبير الجهد = $-76.92 \\times 3.0\\text{ k}\\Omega \\approx -230.8$."
    ],
    "teacherTipEn": "The negative sign denotes the mandatory $180^\\circ$ phase shift of the common-emitter configuration.",
    "teacherTipAr": "الإشارة السالبة تؤكد حدوث انقلاب في الطور بزاوية 180 درجة."
  },
  {
    "id": "egbac_phys_ch4_db_med_21",
    "titleEn": "Emitter Degeneration Resistor Effect on Gain Stability",
    "titleAr": "تأثير مقاومة الباعث (RE) على استقرار تكبير الجهد",
    "difficulty": "medium",
    "questionEn": "In a common-emitter amplifier, adding an unbypassed emitter resistor $R_E$ reduces the voltage gain to $A_v \\approx -\\frac{R_C}{R_E}$. Why do circuit designers deliberately include $R_E$ despite the lower gain?",
    "questionAr": "في مضخم الباعث المشترك، يؤدي وضع مقاومة باعث غير مجزأة $R_E$ إلى خفض تكبير الجهد إلى $A_v \\approx -\\frac{R_C}{R_E}$. لماذا يتعمد مهندسو الدوائر إدراج $R_E$ بالرغم من خفضها للتكبير؟",
    "optionsEn": [
      "It provides negative feedback that stabilizes voltage gain against temperature variations and manufacturing spreads in transistor $\\beta$",
      "It converts the amplifier into a radio transmitter",
      "It reduces the power supply voltage from $100\\text{ V}$ to zero",
      "It makes the input impedance zero ohms"
    ],
    "optionsAr": [
      "لأنها توفر تغذية مرتدة سالبة تثبت تكبير الجهد ضد التغيرات الحرارية وتفاوتات معامل بيتا $\\beta$ بين الترانزستورات",
      "لأنها تحول المضخم إلى جهاز إرسال راديوي",
      "لأنها تخفض جهد التغذية من 100 فولت إلى الصفر",
      "لأنها تجعل مقاومة الدخل مساوية للصفر أوم"
    ],
    "correctAnswer": "It provides negative feedback that stabilizes voltage gain against temperature variations and manufacturing spreads in transistor $\\beta$",
    "correctIndex": 0,
    "hintEn": "Gain becomes determined by precision external resistors ($R_C / R_E$), independent of transistor parameters.",
    "hintAr": "يصبح التكبير محكوماً بدقة بنسبة المقاومات الخارجية المستقرة ($R_C / R_E$) بمعزل عن تقلبات الترانزستور.",
    "stepByStepSolutionEn": [
      "Without $R_E$, gain is $A_v = -g_m R_C = -\\frac{I_C R_C}{V_T}$, which is highly temperature sensitive ($V_T \\propto T$). Adding $R_E$ introduces negative feedback: $A_v = -\\frac{R_C}{r_e + R_E} \\approx -\\frac{R_C}{R_E}$. The gain becomes linear, distortion drops, and performance is immune to thermal drift."
    ],
    "stepByStepSolutionAr": [
      "بدون $R_E$ يتأثر التكبير بشدة بالحرارة وتقلبات بيتا. وبإضافة $R_E$، تصبح المعادلة $A_v \\approx -R_C / R_E$، فيعتمد التكبير على مقاومات خارجية ثابتة، مما يمنع التشوه الصوتي ويحمي الدائرة من الهروب الحراري."
    ],
    "teacherTipEn": "A bypass capacitor $C_E$ can be placed across $R_E$ to restore high AC gain while retaining DC stability.",
    "teacherTipAr": "يمكن وضع مكثف تمرير $C_E$ على التوازي مع $R_E$ للحفاظ على الاستقرار المستمر مع رفع تكبير الإشارات المترددة."
  },
  {
    "id": "egbac_phys_ch4_db_med_22",
    "titleEn": "Common-Collector (Emitter Follower) Characteristics",
    "titleAr": "خصائص مضخم المجمع المشترك (تابع الباعث)",
    "difficulty": "medium",
    "questionEn": "The Common-Collector (Emitter Follower) transistor configuration is widely utilized as an impedance matching buffer because it possesses:",
    "questionAr": "تستخدم دائرة الترانزستور ذات المجمع المشترك (تابع الباعث Emitter Follower) بكثرة كدائرة عازلة لمطابقة المعاوقة لأنها تتميز بـ:",
    "optionsEn": [
      "Voltage gain exceeding $10,000$ and negative input resistance",
      "High input impedance, very low output impedance, and voltage gain near unity ($A_v \\approx 1$) with zero phase shift",
      "Zero current gain and infinite output impedance",
      "Ability to amplify only DC voltages while blocking AC signals"
    ],
    "optionsAr": [
      "تكبير جهد يفوق 10,000 ومقاومة دخل سالبة",
      "معاوقة دخل عالية جداً، ومعاوقة خرج منخفضة جداً، وتكبير جهد يقارب الواحد الصحيح ($A_v \\approx 1$) مع انعدام فرق الطور",
      "تكبير تيار مساوٍ للصفر ومعاوقة خرج لا نهائية",
      "القدرة على تكبير الجهود المستمرة فقط وحجب الإشارات المترددة"
    ],
    "correctAnswer": "High input impedance, very low output impedance, and voltage gain near unity ($A_v \\approx 1$) with zero phase shift",
    "correctIndex": 1,
    "hintEn": "Follower: output voltage at the emitter follows input voltage at the base ($V_{\\text{out}} = V_{\\text{in}} - 0.7\\text{ V}$).",
    "hintAr": "تابع الباعث: يتبع جهد الخرج عند الباعث جهد الدخل عند القاعدة ($V_{\\text{out}} \\approx V_{\\text{in}}$) بدون انقلاب طور.",
    "stepByStepSolutionEn": [
      "Because the output is taken from the emitter, negative feedback is $100\\%$, yielding $A_v = \\frac{R_E}{r_e + R_E} \\approx 0.99 \\approx 1$. However, current gain is large ($\\beta + 1$), transforming a high-impedance sensor input into a stiff, low-impedance driver for cables or loudspeakers."
    ],
    "stepByStepSolutionAr": [
      "لأن الخرج يؤخذ من الباعث، تكون التغذية المرتدة 100% فيكون تكبير الجهد قريباً من 1، ولكن تكبير التيار يكون كبيراً ($\\beta + 1$). هذا يتيح للمضخم ربط الحساسات ذات المقاومة العالية مع مكبرات الصوت والأحمال الثقيلة دون هبوط الجهد."
    ],
    "teacherTipEn": "Acts as the electrical analog of a mechanical lever or hydraulic transformer.",
    "teacherTipAr": "يعمل كمحول معاوقة إلكتروني مثالي بين المراحل المختلفة."
  },
  {
    "id": "egbac_phys_ch4_db_med_23",
    "titleEn": "Zener Voltage Regulator Minimum Series Resistance",
    "titleAr": "حساب المقاومة التوالي لمنظم الجهد بفرع زنر",
    "difficulty": "medium",
    "questionEn": "A DC voltage regulator uses a $10.0\\text{ V}$ Zener diode ($V_Z = 10\\text{ V}$) connected to an input supply that fluctuates between $V_{\\text{in,min}} = 14.0\\text{ V}$ and $V_{\\text{in,max}} = 18.0\\text{ V}$. The load draws current $I_L = 30\\text{ mA}$, and the Zener requires a minimum knee current of $I_{Z,\\text{min}} = 10\\text{ mA}$ to stay in breakdown. The maximum allowable series resistance $R_s$ is:",
    "questionAr": "منظم جهد مستمر يستخدم دايود زنر جهده $V_Z = 10.0\\text{ V}$ متصلاً بمصدر دخل يتراوح جهده بين $14.0\\text{ V}$ و $18.0\\text{ V}$. يسحب الحمل تياراً $I_L = 30\\text{ mA}$، ويشترط زنر تيار ركبة أدنى $I_{Z,\\text{min}} = 10\\text{ mA}$ للبقاء في منطقة الانهيار. أقصى مقاومة توالي مسموح بها $R_s$ هي:",
    "optionsEn": [
      "$400\\ \\Omega$",
      "$25\\ \\Omega$",
      "$100\\ \\Omega$",
      "$1.0\\ \\text{k}\\Omega$"
    ],
    "optionsAr": [
      "$400\\ \\Omega$",
      "$25\\ \\Omega$",
      "$100\\ \\Omega$",
      "$1.0\\ \\text{k}\\Omega$"
    ],
    "correctAnswer": "$100\\ \\Omega$",
    "correctIndex": 2,
    "hintEn": "Worst-case condition occurs at minimum input voltage: $R_s \\le \\frac{V_{\\text{in,min}} - V_Z}{I_L + I_{Z,\\text{min}}}$.",
    "hintAr": "احسب عند أسوأ ظرف (أدنى جهد دخل): $R_s = \\frac{V_{\\text{in,min}} - V_Z}{I_L + I_{Z,\\text{min}}}$.",
    "stepByStepSolutionEn": [
      "Total current is $I_{\\text{total}} = I_L + I_{Z,\\text{min}} = 30\\text{ mA} + 10\\text{ mA} = 40\\text{ mA} = 0.040\\text{ A}$. Voltage drop across $R_s$ at minimum input is $V_{\\text{in,min}} - V_Z = 14.0 - 10.0 = 4.0\\text{ V}$. Then $R_s = \\frac{4.0\\text{ V}}{0.040\\text{ A}} = 100\\ \\Omega$."
    ],
    "stepByStepSolutionAr": [
      "التيار الكلي المار في $R_s$ هو $30 + 10 = 40\\text{ mA} = 0.040\\text{ A}$. فرق الجهد على المقاومة عند أدنى دخل = $14 - 10 = 4\\text{ V}$. وتكون المقاومة = $\\frac{4.0}{0.040} = 100\\ \\Omega$."
    ],
    "teacherTipEn": "Any resistor larger than $100\\ \\Omega$ would starve the Zener diode below its knee current when input drops to $14\\text{ V}$.",
    "teacherTipAr": "أي مقاومة أكبر من 100 أوم ستؤدي لانطفاء زنر وفقدان تنظيم الجهد عند هبوط الدخل."
  },
  {
    "id": "egbac_phys_ch4_db_med_24",
    "titleEn": "Full-Wave Bridge Rectifier Output Ripple Frequency",
    "titleAr": "تردد تموجات الخرج في مقوم الموجة الكاملة",
    "difficulty": "medium",
    "questionEn": "When a full-wave bridge rectifier is powered from an AC mains line operating at frequency $f = 50\\text{ Hz}$, the fundamental ripple frequency of the pulsating DC output voltage is:",
    "questionAr": "عند تغذية مقوم قنطرة للموجة الكاملة بمصدر تيار متردد تردده $f = 50\\text{ Hz}$، فإن تردد تموجات جهد الخرج المستمر النبضي يساوي:",
    "optionsEn": [
      "$50\\text{ Hz}$ ($f$)",
      "$25\\text{ Hz}$ ($f/2$)",
      "$200\\text{ Hz}$ ($4f$)",
      "$100\\text{ Hz}$ ($2f$)"
    ],
    "optionsAr": [
      "$50\\text{ Hz}$ ($f$)",
      "$25\\text{ Hz}$ ($f/2$)",
      "$200\\text{ Hz}$ ($4f$)",
      "$100\\text{ Hz}$ ($2f$)"
    ],
    "correctAnswer": "$100\\text{ Hz}$ ($2f$)",
    "correctIndex": 3,
    "hintEn": "Full-wave rectifies both halves: 2 output pulses per AC cycle $\\implies f_{\\text{ripple}} = 2f$.",
    "hintAr": "يقوم مقوم الموجة الكاملة نصفي الموجة معاً: نبضتان في كل دورة $\\implies$ تردد التموج ضعف تردد الدخل $2f$.",
    "stepByStepSolutionEn": [
      "In half-wave rectification, only 1 pulse appears per AC period ($f_{\\text{ripple}} = 50\\text{ Hz}$). In full-wave rectification, both positive and negative half-cycles are folded into positive peaks, producing 2 output pulses per period: $f_{\\text{ripple}} = 2 \\times 50\\text{ Hz} = 100\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "في تقويم نصف الموجة تظهر قمة واحدة كل دورة فيكون التردد 50 هرتز. أما في تقويم الموجة الكاملة فتنقلب القيعان السالبة لقمم موجبة، فتظهر قمتان في الدورة الواحدة ليصبح تردد التموج $2 \\times 50 = 100\\text{ Hz}$."
    ],
    "teacherTipEn": "Doubled ripple frequency makes filtering capacitor smoothing twice as effective.",
    "teacherTipAr": "مضاعفة تردد التموج يسهل تنعيم الجهد بمكثفات أصغر سعة وأقل حجماً."
  },
  {
    "id": "egbac_phys_ch4_db_med_25",
    "titleEn": "LED Current-Limiting Resistor Design Calculation",
    "titleAr": "حساب مقاومة الحماية المحددة لتيار دايود LED",
    "difficulty": "medium",
    "questionEn": "A standard blue GaN indicator LED has a forward voltage drop of $V_{\\text{LED}} = 3.2\\text{ V}$ and a rated operating current of $I_{\\text{LED}} = 20\\text{ mA}$ ($0.020\\text{ A}$). To operate it safely from a $V_{CC} = 12.0\\text{ V}$ DC battery, the required series current-limiting resistor $R_s$ is:",
    "questionAr": "صمام LED أزرق ذو جهد تشغيل أمامي $V_{\\text{LED}} = 3.2\\text{ V}$ وتيار تشغيل آمن $I_{\\text{LED}} = 20\\text{ mA}$ ($0.020\\text{ A}$). لتشغيله بأمان من بطارية $V_{CC} = 12.0\\text{ V}$، فإن مقاومة التوالي المحددة للتيار $R_s$ المطلوبة هي:",
    "optionsEn": [
      "$440\\ \\Omega$",
      "$600\\ \\Omega$",
      "$160\\ \\Omega$",
      "$44\\ \\Omega$"
    ],
    "optionsAr": [
      "$440\\ \\Omega$",
      "$600\\ \\Omega$",
      "$160\\ \\Omega$",
      "$44\\ \\Omega$"
    ],
    "correctAnswer": "$440\\ \\Omega$",
    "correctIndex": 0,
    "hintEn": "Ohm's law on the series loop: $R_s = \\frac{V_{CC} - V_{\\text{LED}}}{I_{\\text{LED}}}$.",
    "hintAr": "طبق قانون أوم على دائرة التوالي: $R_s = \\frac{V_{CC} - V_{\\text{LED}}}{I_{\\text{LED}}}$.",
    "stepByStepSolutionEn": [
      "The voltage drop that must be absorbed by the series resistor is $V_R = V_{CC} - V_{\\text{LED}} = 12.0\\text{ V} - 3.2\\text{ V} = 8.8\\text{ V}$. The required resistance is $R_s = \\frac{8.8\\text{ V}}{0.020\\text{ A}} = 440\\ \\Omega$."
    ],
    "stepByStepSolutionAr": [
      "فرق الجهد الذي يجب أن تسقطه المقاومة هو $12.0 - 3.2 = 8.8\\text{ V}$. وقيمة المقاومة المطلوبة = $\\frac{8.8}{0.020} = 440\\ \\Omega$."
    ],
    "teacherTipEn": "Connecting an LED directly across a 12V battery without $R_s$ causes instantaneous thermal destruction.",
    "teacherTipAr": "توصيل LED مباشرة بالبطارية دون مقاومة حماية يؤدي لاحتراقه فورياً بالتيار المفرط."
  },
  {
    "id": "egbac_phys_ch4_db_med_26",
    "titleEn": "Photodiode Responsivity Calculation",
    "titleAr": "حساب استجابية الصمام الثنائي الضوئي",
    "difficulty": "medium",
    "questionEn": "A silicon photodiode has a quantum efficiency of $\\eta = 0.75$ ($75\\%$) at an operating wavelength of $\\lambda = 800\\text{ nm}$ ($0.80\\ \\mu\\text{m}$). What is its spectral responsivity $\\mathcal{R}$ in amperes per watt ($\\text{A/W}$)?",
    "questionAr": "صمام ثنائي ضوئي من السيليكون كفاءته الكمية $\\eta = 0.75$ ($75\\%$) عند طول موجي $\\lambda = 800\\text{ nm}$ ($0.80\\ \\mu\\text{m}$). ما استجابيته الطيفية $\\mathcal{R}$ بوحدة أمبير لكل واط ($\\text{A/W}$)؟",
    "optionsEn": [
      "$1.240\\text{ A/W}$",
      "$0.484\\text{ A/W}$",
      "$0.075\\text{ A/W}$",
      "$6.63\\text{ A/W}$"
    ],
    "optionsAr": [
      "$1.240\\text{ A/W}$",
      "$0.484\\text{ A/W}$",
      "$0.075\\text{ A/W}$",
      "$6.63\\text{ A/W}$"
    ],
    "correctAnswer": "$0.484\\text{ A/W}$",
    "correctIndex": 1,
    "hintEn": "Formula: $\\mathcal{R} = \\frac{\\eta q \\lambda}{h c} \\approx \\frac{\\eta \\cdot \\lambda(\\mu\\text{m})}{1.24}$.",
    "hintAr": "عوض في صيغة الاستجابية: $\\mathcal{R} \\approx \\frac{\\eta \\cdot \\lambda(\\mu\\text{m})}{1.24}$.",
    "stepByStepSolutionEn": [
      "$\\mathcal{R} = \\frac{\\eta \\cdot \\lambda(\\mu\\text{m})}{1.2398} = \\frac{0.75 \\times 0.80\\ \\mu\\text{m}}{1.2398} = \\frac{0.60}{1.2398} \\approx 0.4839\\text{ A/W} \\approx 0.484\\text{ A/W}$."
    ],
    "stepByStepSolutionAr": [
      "$\\mathcal{R} = \\frac{0.75 \\times 0.80}{1.24} \\approx 0.484\\text{ A/W}$."
    ],
    "teacherTipEn": "For every milliwatt of incident $800\\text{ nm}$ light, the photodiode delivers $0.484\\text{ mA}$ of photocurrent.",
    "teacherTipAr": "لكل مللي واط من الضوء الساقط، يولد الدايود تياراً ضوئياً مقداره 0.484 مللي أمبير."
  },
  {
    "id": "egbac_phys_ch4_db_med_27",
    "titleEn": "Solar Cell Efficiency Determination",
    "titleAr": "حساب الكفاءة التحويلية للخلية الشمسية",
    "difficulty": "medium",
    "questionEn": "A silicon solar cell of area $A = 200\\text{ cm}^2$ ($0.020\\text{ m}^2$) is illuminated by standard sunlight of intensity $I_{\\text{sun}} = 1000\\text{ W/m}^2$. The cell produces $V_{\\text{oc}} = 0.60\\text{ V}$, short-circuit current $I_{\\text{sc}} = 7.0\\text{ A}$, and has a fill factor $\\text{FF} = 0.80$. The electrical conversion efficiency $\\eta$ is:",
    "questionAr": "خلية شمسية من السيليكون مساحتها $A = 200\\text{ cm}^2$ ($0.020\\text{ m}^2$) تسقط عليها أشعة شمس قياسية بشدة $I_{\\text{sun}} = 1000\\text{ W/m}^2$. تولد الخلية $V_{\\text{oc}} = 0.60\\text{ V}$ وتيار قصر $I_{\\text{sc}} = 7.0\\text{ A}$ ومعامل امتلاء $\\text{FF} = 0.80$. الكفاءة التحويلية للخلية $\\eta$ تساوي:",
    "optionsEn": [
      "$33.6\\%$",
      "$4.2\\%$",
      "$16.8\\%$",
      "$84.0\\%$"
    ],
    "optionsAr": [
      "$33.6\\%$",
      "$4.2\\%$",
      "$16.8\\%$",
      "$84.0\\%$"
    ],
    "correctAnswer": "$16.8\\%$",
    "correctIndex": 2,
    "hintEn": "Total input power $P_{\\text{in}} = I_{\\text{sun}} \\times A$. Max output power $P_{\\text{max}} = V_{\\text{oc}} I_{\\text{sc}} \\text{FF}$. Then $\\eta = P_{\\text{max}} / P_{\\text{in}}$.",
    "hintAr": "القدرة الشمسية الساقطة = الشدة × المساحة. القدرة الناتجة العظمى = $V_{\\text{oc}} I_{\\text{sc}} \\text{FF}$. الكفاءة = الخرج / الدخل.",
    "stepByStepSolutionEn": [
      "Incident optical power is $P_{\\text{in}} = (1000\\text{ W/m}^2) \\times (0.020\\text{ m}^2) = 20.0\\text{ W}$. Maximum electrical power is $P_{\\text{max}} = (0.60\\text{ V}) \\times (7.0\\text{ A}) \\times 0.80 = 3.36\\text{ W}$. The efficiency is $\\eta = \\frac{3.36\\text{ W}}{20.0\\text{ W}} = 0.168 = 16.8\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الساقطة = $1000 \\times 0.020 = 20.0\\text{ W}$. القدرة الكهربية القصوى = $0.60 \\times 7.0 \\times 0.80 = 3.36\\text{ W}$. وتكون الكفاءة = $\\frac{3.36}{20.0} = 0.168 = 16.8\\%$."
    ],
    "teacherTipEn": "Commercially manufactured rooftop silicon panels operate in this exact $16-22\\%$ efficiency window.",
    "teacherTipAr": "تطابق الكفاءة العملية للألواح الشمسية التجارية المثبتة على أسطح المنازل."
  },
  {
    "id": "egbac_phys_ch4_db_med_28",
    "titleEn": "Boolean Logic Absorption Law Simplification",
    "titleAr": "قانون الامتصاص في الجبر البولياني",
    "difficulty": "medium",
    "questionEn": "The Boolean algebraic expression $Y = A + A \\cdot B$ simplifies via fundamental logic axioms to:",
    "questionAr": "يبسط التعبير الجبري البولياني $Y = A + A \\cdot B$ باستخدام مسلمات المنطق الأساسية إلى:",
    "optionsEn": [
      "$Y = B$",
      "$Y = A \\cdot B$",
      "$Y = 1$",
      "$Y = A$"
    ],
    "optionsAr": [
      "$Y = B$",
      "$Y = A \\cdot B$",
      "$Y = 1$",
      "$Y = A$"
    ],
    "correctAnswer": "$Y = A$",
    "correctIndex": 3,
    "hintEn": "Factor out $A$: $A(1 + B)$. Note that in Boolean algebra $1 + B = 1$.",
    "hintAr": "خذ $A$ عاملاً مشتركاً: $A(1 + B)$. وتذكر أن $1 + B = 1$ دائماً في المنطق.",
    "stepByStepSolutionEn": [
      "Factoring gives $Y = A(1 + B)$. Since in Boolean logic $1 + X = 1$ for any variable $X$, we have $Y = A \\cdot 1 = A$. The term $A \\cdot B$ is completely 'absorbed' by $A$."
    ],
    "stepByStepSolutionAr": [
      "بأخذ A كعامل مشترك: $Y = A(1 + B)$. وبما أن $1 + B = 1$ لأي قيمة منطقية، فإن $Y = A \\cdot 1 = A$. يمتص الحد A الحد المركب $A \\cdot B$ بالكامل."
    ],
    "teacherTipEn": "Fundamental rule for minimizing gates in digital hardware circuits.",
    "teacherTipAr": "قاعدة أساسية لاختصار البوابات في تصميم الدوائر الرقمية."
  },
  {
    "id": "egbac_phys_ch4_db_med_29",
    "titleEn": "Constructing a NOT Gate Using a Single NAND Gate",
    "titleAr": "بناء بوابة NOT باستخدام بوابة NAND وحيدة",
    "difficulty": "medium",
    "questionEn": "How can a standard two-input NAND gate be converted into an operational digital NOT gate (inverter)?",
    "questionAr": "كيف يمكن تحويل بوابة NAND قياسية ذات مدخلين إلى بوابة نفي (NOT gate) عاملة؟",
    "optionsEn": [
      "Connect both inputs $A$ and $B$ together to form a single common input terminal ($A = B \\implies Y = \\overline{A \\cdot A} = \\overline{A}$)",
      "Connect one input to ground ($0\\text{ V}$) and leave the other floating",
      "Reverse the DC supply voltage polarities",
      "Add a high-voltage inductor in parallel with the output"
    ],
    "optionsAr": [
      "ربط كلا المدخلين $A$ و $B$ معاً لتكوين مدخل مشترك وحيد ($A = B \\implies Y = \\overline{A \\cdot A} = \\overline{A}$)",
      "توصيل أحد المدخلين بالأرضي وترك الآخر معلقاً في الهواء",
      "عكس أقطاب جهد التغذية المستمر",
      "إضافة ملف حثي عالي الجهد على التوازي مع الخرج"
    ],
    "correctAnswer": "Connect both inputs $A$ and $B$ together to form a single common input terminal ($A = B \\implies Y = \\overline{A \\cdot A} = \\overline{A}$)",
    "correctIndex": 0,
    "hintEn": "If inputs are tied: when input is 0, both are 0 $\\implies \\overline{0\\cdot 0} = 1$; when input is 1, both are 1 $\\implies \\overline{1\\cdot 1} = 0$.",
    "hintAr": "عند ربط المدخلين معاً: إذا كان الدخل 0 فالخرج 1، وإذا كان الدخل 1 فالخرج 0، وهو بالضبط عمل بوابة NOT.",
    "stepByStepSolutionEn": [
      "By tying inputs together, $B = A$. The NAND operation becomes $Y = \\overline{A \\cdot A}$. In Boolean algebra $A \\cdot A = A$, so $Y = \\overline{A}$, which is the pure definition of a NOT gate."
    ],
    "stepByStepSolutionAr": [
      "بربط المدخلين معاً، تصبح الدالة $Y = \\overline{A \\cdot A} = \\overline{A}$ وهي دالة بوابة العاكس NOT تماماً."
    ],
    "teacherTipEn": "Alternatively, tying one input permanently to HIGH ($+5\\text{ V}$) also creates an inverter: $\\overline{A \\cdot 1} = \\bar{A}$.",
    "teacherTipAr": "يمكن أيضاً ربط أحد المدخلين بجهد مرتفع دائم 1 لتحويلها لعاكس: $\\overline{A \\cdot 1} = \\bar{A}$."
  },
  {
    "id": "egbac_phys_ch4_db_med_30",
    "titleEn": "Constructing an AND Gate from NAND Gates",
    "titleAr": "بناء بوابة AND باستخدام بوابات NAND",
    "difficulty": "medium",
    "questionEn": "To construct a two-input AND gate using ONLY universal NAND gates, how many NAND gates are required and how must they be connected?",
    "questionAr": "لبناء بوابة AND ذات مدخلين باستخدام بوابات NAND العامة فقط، كم بوابة يلزم وكيف توصل؟",
    "optionsEn": [
      "Five NAND gates connected in a closed ring oscillator",
      "Two NAND gates: the first gate computes $\\overline{A \\cdot B}$, and the second gate (configured as an inverter) inverts the result to yield $\\overline{\\overline{A \\cdot B}} = A \\cdot B$",
      "A single NAND gate with its output wire cut in half",
      "Ten NAND gates connected in parallel to ground"
    ],
    "optionsAr": [
      "خمس بوابات NAND موصلة في حلقة مذبذبة مغلقة",
      "بوابتا NAND: تحسب البوابة الأولى $\\overline{A \\cdot B}$، وتعمل البوابة الثانية كعاكس لنفي الناتج والحصول على $\\overline{\\overline{A \\cdot B}} = A \\cdot B$",
      "بوابة NAND واحدة مع قطع سلك الخرج إلى نصفين",
      "عشر بوابات NAND متصلة على التوازي مع الأرضي"
    ],
    "correctAnswer": "Two NAND gates: the first gate computes $\\overline{A \\cdot B}$, and the second gate (configured as an inverter) inverts the result to yield $\\overline{\\overline{A \\cdot B}} = A \\cdot B$",
    "correctIndex": 1,
    "hintEn": "Double negation cancels out: NOT(NAND) = AND.",
    "hintAr": "نفي النفي إثبات: وضع عاكس بعد بوابة NAND يعيدها لبوابة AND أصلية.",
    "stepByStepSolutionEn": [
      "A NAND gate produces $Y_1 = \\overline{A \\cdot B}$. Feeding $Y_1$ into a second NAND gate wired as an inverter yields $Y_2 = \\overline{Y_1} = \\overline{\\overline{A \\cdot B}} = A \\cdot B$, which is the exact output of an AND gate."
    ],
    "stepByStepSolutionAr": [
      "تنتج بوابة NAND الأولى $Y_1 = \\overline{A \\cdot B}$. وبتمرير هذا الخرج عبر بوابة NAND ثانية تعمل كعاكس، ينفى الخرج مرة أخرى: $\\overline{\\overline{A \\cdot B}} = A \\cdot B$ لنحصل بدقة على بوابة AND."
    ],
    "teacherTipEn": "Two NAND gates synthesize an AND gate.",
    "teacherTipAr": "يلزم بوابتا NAND فقط لتكوين بوابة AND."
  },
  {
    "id": "egbac_phys_ch4_db_med_31",
    "titleEn": "Synthesizing an OR Gate using Only NAND Gates",
    "titleAr": "بناء بوابة OR باستخدام بوابات NAND فقط",
    "difficulty": "medium",
    "questionEn": "According to De Morgan's laws ($\\overline{\\bar{A} \\cdot \\bar{B}} = A + B$), what is the minimum number of 2-input NAND gates required to synthesize a standard two-input OR gate?",
    "questionAr": "وفقاً لقوانين دي مورغان ($\\overline{\\bar{A} \\cdot \\bar{B}} = A + B$)، ما أقل عدد من بوابات NAND ذات المدخلين يلزم لتكوين بوابة OR قياسية؟",
    "optionsEn": [
      "One single NAND gate with reverse polarity",
      "Two NAND gates connected in parallel",
      "Three NAND gates: two configured as inverters for inputs $A$ and $B$, feeding into a third NAND gate",
      "Six NAND gates arranged in a bridge"
    ],
    "optionsAr": [
      "بوابة NAND واحدة فقط ذات قطبية معكوسة",
      "بوابتا NAND موصلتان على التوازي",
      "ثلاث بوابات NAND: بوابتان تعملان كعاكسين للمدخلين $A$ و $B$، وتغذيان بوابة NAND ثالثة",
      "ست بوابات NAND مرتبة في شكل قنطرة"
    ],
    "correctAnswer": "Three NAND gates: two configured as inverters for inputs $A$ and $B$, feeding into a third NAND gate",
    "correctIndex": 2,
    "hintEn": "Invert both inputs first: $\\bar{A}$ and $\\bar{B}$ require 2 NAND gates. Feeding them into a NAND gate yields $\\overline{\\bar{A}\\cdot\\bar{B}} = A + B$.",
    "hintAr": "نفي المدخلين أولاً يتطلب بوابتي NAND لإنتاج $\\bar{A}$ و $\\bar{B}$، ثم إدخالهما في بوابة NAND ثالثة يعطي $\\overline{\\bar{A}\\cdot\\bar{B}} = A + B$.",
    "stepByStepSolutionEn": [
      "Applying De Morgan's theorem: $A + B = \\overline{\\overline{A + B}} = \\overline{\\bar{A} \\cdot \\bar{B}}$. Inverting $A$ uses 1 NAND gate, inverting $B$ uses 1 NAND gate, and combining them in a 3rd NAND gate computes $\\overline{\\bar{A} \\cdot \\bar{B}} = A + B$. Hence, exactly 3 NAND gates are required."
    ],
    "stepByStepSolutionAr": [
      "بتطبيق نظرية دي مورغان: $A + B = \\overline{\\bar{A} \\cdot \\bar{B}}$. يلزم عاكس للمدخل $A$ (بوابة واحدة)، وعاكس للمدخل $B$ (بوابة ثانية)، وبوابة ثالثة لضرب المنفيين ونفيهما معاً، ليكون المجموع 3 بوابات NAND."
    ],
    "teacherTipEn": "Remember: NAND is universal; OR requires 3 NANDs, NOR requires 4 NANDs.",
    "teacherTipAr": "تذكر: بوابة NAND عامة وشاملة؛ يلزم 3 بوابات NAND لبناء OR و4 لبناء NOR."
  },
  {
    "id": "egbac_phys_ch4_db_med_32",
    "titleEn": "Synthesizing an OR Gate using Only NOR Gates",
    "titleAr": "بناء بوابة OR باستخدام بوابات NOR فقط",
    "difficulty": "medium",
    "questionEn": "How many two-input NOR gates are required to construct a two-input OR gate, and how are they arranged?",
    "questionAr": "كم بوابة NOR ذات مدخلين يلزم لتكوين بوابة OR ذات مدخلين، وكيف يتم ترتيبها؟",
    "optionsEn": [
      "Four NOR gates arranged in a ring counter",
      "One NOR gate without any external connections",
      "Five NOR gates in parallel",
      "Two NOR gates: the first produces $\\overline{A + B}$ and the second acts as an inverter to yield $\\overline{\\overline{A + B}} = A + B$"
    ],
    "optionsAr": [
      "أربع بوابات NOR في عداد حلقي",
      "بوابة NOR واحدة بدون أي توصيلات خارجية",
      "خمس بوابات NOR على التوازي",
      "بوابتا NOR: الأولى تنتج $\\overline{A + B}$ والثانية تعمل كعاكس لإنتاج $\\overline{\\overline{A + B}} = A + B$"
    ],
    "correctAnswer": "Two NOR gates: the first produces $\\overline{A + B}$ and the second acts as an inverter to yield $\\overline{\\overline{A + B}} = A + B$",
    "correctIndex": 3,
    "hintEn": "NOR produces $\\overline{A+B}$; inverting this output restores $A+B$.",
    "hintAr": "بوابة NOR تعطي نفي الجمع $\\overline{A+B}$، ونفي هذا الخرج يعيد دالة الجمع الأصلية $A+B$.",
    "stepByStepSolutionEn": [
      "A NOR gate computes $Y_1 = \\overline{A + B}$. By feeding $Y_1$ into a second NOR gate whose inputs are tied together (acting as a NOT gate), the output becomes $Y = \\overline{Y_1} = \\overline{\\overline{A + B}} = A + B$. Thus, exactly 2 NOR gates are required."
    ],
    "stepByStepSolutionAr": [
      "تنتج بوابة NOR الأولى $Y_1 = \\overline{A + B}$. بتمرير هذا الناتج إلى بوابة NOR ثانية موصلة كعاكس، يصبح الخرج النهائي $\\overline{\\overline{A + B}} = A + B$، وبالتالي يلزم بوابتان فقط."
    ],
    "teacherTipEn": "NOT(NOR) = OR, directly analogous to NOT(NAND) = AND.",
    "teacherTipAr": "نفي بوابة NOR يعطي مباشرة بوابة OR، تماماً كما أن نفي NAND يعطي AND."
  },
  {
    "id": "egbac_phys_ch4_db_med_33",
    "titleEn": "Synthesizing an AND Gate using Only NOR Gates",
    "titleAr": "بناء بوابة AND باستخدام بوابات NOR فقط",
    "difficulty": "medium",
    "questionEn": "Using De Morgan's theorem ($A \\cdot B = \\overline{\\bar{A} + \\bar{B}}$), how many two-input NOR gates are required to implement a two-input AND gate?",
    "questionAr": "باستخدام نظرية دي مورغان ($A \\cdot B = \\overline{\\bar{A} + \\bar{B}}$)، كم بوابة NOR ذات مدخلين يلزم لبناء بوابة AND ذات مدخلين؟",
    "optionsEn": [
      "Three NOR gates: two to invert inputs $A$ and $B$, and a third to combine $\\bar{A}$ and $\\bar{B}$",
      "One NOR gate with high input current",
      "Two NOR gates in series",
      "Six NOR gates in a symmetrical lattice"
    ],
    "optionsAr": [
      "ثلاث بوابات NOR: اثنتان لنفي المدخلين $A$ و $B$، وثالثة لدمج ونفي $\\bar{A}$ و $\\bar{B}$",
      "بوابة NOR واحدة بتيار دخل مرتفع",
      "بوابتا NOR على التوالي",
      "ست بوابات NOR في شبكة متماثلة"
    ],
    "correctAnswer": "Three NOR gates: two to invert inputs $A$ and $B$, and a third to combine $\\bar{A}$ and $\\bar{B}$",
    "correctIndex": 0,
    "hintEn": "Dual of NAND realization: invert each input first, then NOR them together.",
    "hintAr": "مبدأ الازدواجية مع NAND: ننفي كل مدخل أولاً، ثم نمررهما على بوابة NOR.",
    "stepByStepSolutionEn": [
      "By De Morgan's law, $A \\cdot B = \\overline{\\bar{A} + \\bar{B}}$. Inverting $A$ requires 1 NOR gate, inverting $B$ requires 1 NOR gate, and the third NOR gate computes $\\overline{\\bar{A} + \\bar{B}} = A \\cdot B$. Exactly 3 NOR gates are needed."
    ],
    "stepByStepSolutionAr": [
      "وفق قانون دي مورغان $A \\cdot B = \\overline{\\bar{A} + \\bar{B}}$. نحتاج بوابة NOR كعاكس لـ $A$، وبوابة ثانية كعاكس لـ $B$، وبوابة ثالثة لحساب $\\overline{\\bar{A} + \\bar{B}} = A \\cdot B$. المجموع 3 بوابات."
    ],
    "teacherTipEn": "AND from NOR requires 3 gates; OR from NAND requires 3 gates.",
    "teacherTipAr": "بناء AND من NOR يتطلب 3 بوابات، وبناء OR من NAND يتطلب 3 بوابات أيضاً."
  },
  {
    "id": "egbac_phys_ch4_db_med_34",
    "titleEn": "XOR Gate Boolean Function and Truth Table",
    "titleAr": "الدالة المنطقية وجدول التحقيق لبوابة XOR",
    "difficulty": "medium",
    "questionEn": "What is the Boolean algebraic expression and logic condition for the output of an Exclusive-OR (XOR) gate with inputs $A$ and $B$?",
    "questionAr": "ما التعبير الجبري البولياني والشرط المنطقي لخرج بوابة الاختيار الحصري (XOR) ذات المدخلين $A$ و $B$؟",
    "optionsEn": [
      "$Y = AB + \\bar{A}\\bar{B}$; output is HIGH when both inputs are identical",
      "$Y = A \\oplus B = A\\bar{B} + \\bar{A}B$; output is HIGH ($1$) if and only if the inputs are different ($A \\ne B$)",
      "$Y = A + B$; output is LOW only when both inputs are HIGH",
      "$Y = \\overline{A \\cdot B}$; output is independent of input $B$"
    ],
    "optionsAr": [
      "$Y = AB + \\bar{A}\\bar{B}$؛ ويكون الخرج مرتفعاً إذا كان المدخلان متطابقين",
      "$Y = A \\oplus B = A\\bar{B} + \\bar{A}B$؛ ويكون الخرج مرتفعاً ($1$) إذا وفقط إذا كان المدخلان مختلفين ($A \\ne B$)",
      "$Y = A + B$؛ ويكون الخرج منخفضاً فقط عندما يكون كلاهما مرتفعاً",
      "$Y = \\overline{A \\cdot B}$؛ والخرج مستقل تماماً عن المدخل $B$"
    ],
    "correctAnswer": "$Y = A \\oplus B = A\\bar{B} + \\bar{A}B$; output is HIGH ($1$) if and only if the inputs are different ($A \\ne B$)",
    "correctIndex": 1,
    "hintEn": "XOR produces 1 only when inputs differ: (0,1) or (1,0).",
    "hintAr": "تعطي بوابة XOR القيمة 1 فقط عندما يختلف المدخلان: (0,1) أو (1,0).",
    "stepByStepSolutionEn": [
      "The XOR gate represents modulo-2 addition: $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$. When $A=0, B=0 \\implies Y=0$; $A=0, B=1 \\implies Y=1$; $A=1, B=0 \\implies Y=1$; $A=1, B=1 \\implies Y=0$. It outputs 1 strictly when inputs are unequal."
    ],
    "stepByStepSolutionAr": [
      "تمثل بوابة XOR الجمع الثنائي بدون حمل: $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$. عند تساوي المدخلين (0,0 أو 1,1) يكون الخرج 0، وعند اختلافهما يكون الخرج 1."
    ],
    "teacherTipEn": "XOR is used in half-adders to compute the sum bit: $\\text{Sum} = A \\oplus B$.",
    "teacherTipAr": "تستخدم بوابة XOR في دوائر الجامع النصفي لحساب خانة المجموع: $\\text{Sum} = A \\oplus B$."
  },
  {
    "id": "egbac_phys_ch4_db_med_35",
    "titleEn": "XNOR Gate Function and Application",
    "titleAr": "دالة وتطبيق بوابة XNOR (المطابقة)",
    "difficulty": "medium",
    "questionEn": "What is the Boolean expression for an Exclusive-NOR (XNOR) gate, and why is it also designated as an 'equivalence' or 'equality detector' gate?",
    "questionAr": "ما الصيغة البوليانية لبوابة XNOR، ولماذا تسمى أيضاً بوابة التكافؤ أو كاشف التطابق؟",
    "optionsEn": [
      "$Y = A + \\bar{B}$; it outputs HIGH only when $A = 1$ and $B = 0$",
      "$Y = \\bar{A} \\cdot \\bar{B}$; it outputs HIGH only when both inputs are floating",
      "$Y = \\overline{A \\oplus B} = AB + \\bar{A}\\bar{B}$; it outputs HIGH ($1$) if and only if both inputs have the same logic level ($A = B$)",
      "$Y = \\overline{AB}$; it outputs LOW for all odd input states"
    ],
    "optionsAr": [
      "$Y = A + \\bar{B}$؛ وتعطي خرجاً 1 فقط عندما يكون $A=1$ و $B=0$",
      "$Y = \\bar{A} \\cdot \\bar{B}$؛ وتعطي 1 فقط عندما يكون كلا المدخلين غير متصلين",
      "$Y = \\overline{A \\oplus B} = AB + \\bar{A}\\bar{B}$؛ وتعطي خرجاً مرتفعاً ($1$) إذا وفقط إذا تساوى المدخلان في الحالة المنطقية ($A = B$)",
      "$Y = \\overline{AB}$؛ وتعطي 0 لجميع حالات الدخل الفردية"
    ],
    "correctAnswer": "$Y = \\overline{A \\oplus B} = AB + \\bar{A}\\bar{B}$; it outputs HIGH ($1$) if and only if both inputs have the same logic level ($A = B$)",
    "correctIndex": 2,
    "hintEn": "XNOR is the inverse of XOR: it outputs 1 when $A=B$ (i.e. 0-0 or 1-1).",
    "hintAr": "بوابة XNOR هي معكوس XOR: تعطي 1 عند تطابق المدخلين (0 مع 0، أو 1 مع 1).",
    "stepByStepSolutionEn": [
      "XNOR is the complement of XOR: $Y = \\overline{A\\bar{B} + \\bar{A}B} = (\\bar{A} + B)(A + \\bar{B}) = AB + \\bar{A}\\bar{B}$. This evaluates to 1 when $A=B=0$ or $A=B=1$. Therefore, it directly compares two bits and outputs 1 when they are identical, acting as a bit-equality detector."
    ],
    "stepByStepSolutionAr": [
      "بوابة XNOR هي نفي XOR: $Y = AB + \\bar{A}\\bar{B}$. تعطي 1 عندما يتطابق المدخلان (كلاهما 0 أو كلاهما 1). لذا تستخدم في مقارنات الأعداد الثنائية ككاشف تطابق."
    ],
    "teacherTipEn": "XNOR is true when $A$ and $B$ agree.",
    "teacherTipAr": "تكون XNOR صحيحة (1) فقط عندما يتفق المدخلان."
  },
  {
    "id": "egbac_phys_ch4_db_med_36",
    "titleEn": "Propagation Delay in Logic Gate Cascades",
    "titleAr": "زمن التأخير الإشاري في البوابات المنطقية المتتابعة",
    "difficulty": "medium",
    "questionEn": "If each logic gate in a circuit has an average propagation delay $t_{pd} = 8\\text{ ns}$, what is the total propagation delay through a critical path consisting of 5 cascaded gates?",
    "questionAr": "إذا كان لكل بوابة منطقية في دائرة متوسط زمن تأخير إشاري $t_{pd} = 8\\text{ ns}$، فما إجمالي زمن التأخير عبر مسار حرج يتكون من 5 بوابات متتابعة على التوالي؟",
    "optionsEn": [
      "$t_{total} = 8 / 5 = 1.6\\text{ ns}$",
      "$t_{total} = 8^5\\text{ ns} \\approx 32.7\\mu\\text{s}$",
      "$t_{total} = 0\\text{ ns}$ because digital propagation is instantaneous",
      "$t_{total} = 5 \\times 8\\text{ ns} = 40\\text{ ns}$"
    ],
    "optionsAr": [
      "$t_{total} = 8 / 5 = 1.6\\text{ ns}$",
      "$t_{total} = 8^5\\text{ ns} \\approx 32.7\\mu\\text{s}$",
      "$t_{total} = 0\\text{ ns}$ لأن الانتقال الرقمي فوري وبلا تأخير",
      "$t_{total} = 5 \\times 8\\text{ ns} = 40\\text{ ns}$"
    ],
    "correctAnswer": "$t_{total} = 5 \\times 8\\text{ ns} = 40\\text{ ns}$",
    "correctIndex": 3,
    "hintEn": "Delays along a series path add linearly: $t_{total} = N \\times t_{pd}$.",
    "hintAr": "أزمنة التأخير للبوابات المتصلة على التوالي تجمع خطياً: $t_{total} = N \\times t_{pd}$.",
    "stepByStepSolutionEn": [
      "For a series chain of $N$ identical logic gates, the signal must transition through each gate sequentially. The total propagation delay along the path is the sum of the individual gate delays: $t_{total} = \\sum_{i=1}^N t_{pd, i} = 5 \\times 8\\text{ ns} = 40\\text{ ns}$."
    ],
    "stepByStepSolutionAr": [
      "في سلسلة من $N$ بوابة متتابعة، تتراكم أزمنة الانتقال عبر كل بوابة تباعاً: $t_{total} = 5 \\times 8\\text{ ns} = 40\\text{ ns}$."
    ],
    "teacherTipEn": "Propagation delay sets the upper limit on the maximum clock frequency: $f_{max} \\le \\frac{1}{t_{total}}$.",
    "teacherTipAr": "يحدد زمن التأخير الإجمالي الحد الأقصى لتردد الساعة: $f_{max} \\le \\frac{1}{t_{total}}$."
  },
  {
    "id": "egbac_phys_ch4_db_med_37",
    "titleEn": "Fan-Out Definition in Digital Logic Families",
    "titleAr": "مفهوم معامل التفريع (Fan-Out) في الدوائر الرقمية",
    "difficulty": "medium",
    "questionEn": "In digital electronics, what does the 'fan-out' of a logic gate specify?",
    "questionAr": "في الإلكترونيات الرقمية، ماذا يحدد معامل التفريع (Fan-out) لبوابة منطقية؟",
    "optionsEn": [
      "The maximum number of standard logic inputs that the output of the gate can reliably drive simultaneously without violating logic voltage thresholds",
      "The physical number of cooling fans required to cool the integrated circuit",
      "The frequency in megahertz at which the gate switches from HIGH to LOW",
      "The number of power supply pins on the chip package"
    ],
    "optionsAr": [
      "أقصى عدد من مداخل البوابات المنطقية القياسية التي يستطيع خرج البوابة تشغيلها بشكل موثوق في آن واحد دون الإخلال بحدود الجهود المنطقية",
      "عدد مراوح التبريد المادية المطلوبة لتبريد الدائرة المتكاملة",
      "التردد بالميغاهرتز الذي تنتقل به البوابة بين الحالتين المرتفعة والمنخفضة",
      "عدد أطراف التغذية الكهربائية في رقاقة الدائرة المتكاملة"
    ],
    "correctAnswer": "The maximum number of standard logic inputs that the output of the gate can reliably drive simultaneously without violating logic voltage thresholds",
    "correctIndex": 0,
    "hintEn": "Fan-out is limited by the current driving capability: $I_{OH}/I_{IH}$ or $I_{OL}/I_{IL}$.",
    "hintAr": "يحدد معامل التفريع أقصى قدرة تيارية للخرج: نسبة تيار الخرج إلى تيار الدخل للبوابات المحمولة.",
    "stepByStepSolutionEn": [
      "Fan-out is defined as $\\min\\left(\\frac{I_{OH}}{I_{IH}}, \\frac{I_{OL}}{I_{IL}}\\right)$. It measures the maximum load (number of input gates) that can be connected to the gate output while maintaining the output voltage above $V_{OH,min}$ or below $V_{OL,max}$."
    ],
    "stepByStepSolutionAr": [
      "يُعرّف معامل التفريع بأنه أقصى عدد من المداخل التي يمكن لخرج البوابة تغذيتها مع بقاء جهد الخرج ضمن الحدود المسموح بها للمستويات المنطقية ($V_{OH}$ و $V_{OL}$)."
    ],
    "teacherTipEn": "Exceeding fan-out causes logic levels to degrade and increases propagation delay.",
    "teacherTipAr": "تجاوز معامل التفريع يؤدي لانهيار المستويات المنطقية وزيادة زمن التأخير."
  },
  {
    "id": "egbac_phys_ch4_db_med_38",
    "titleEn": "Noise Margins in Digital Logic Circuits",
    "titleAr": "هوامش الضوضاء في الدوائر المنطقية الرقمية",
    "difficulty": "medium",
    "questionEn": "A digital logic family has $V_{OH,min} = 4.4\\text{ V}$, $V_{IH,min} = 3.5\\text{ V}$, $V_{IL,max} = 1.5\\text{ V}$, and $V_{OL,max} = 0.4\\text{ V}$. What is the high-level noise margin ($NM_H$)?",
    "questionAr": "عائلة منطقية رقمية تمتلك المواصفات التالية: $V_{OH,min} = 4.4\\text{ V}$، $V_{IH,min} = 3.5\\text{ V}$، $V_{IL,max} = 1.5\\text{ V}$، و $V_{OL,max} = 0.4\\text{ V}$. ما قيمة هامش الضوضاء للمستوى المرتفع ($NM_H$)؟",
    "optionsEn": [
      "$NM_H = V_{OH,min} - V_{OL,max} = 4.4 - 0.4 = 4.0\\text{ V}$",
      "$NM_H = V_{OH,min} - V_{IH,min} = 4.4 - 3.5 = 0.9\\text{ V}$",
      "$NM_H = V_{IH,min} - V_{IL,max} = 3.5 - 1.5 = 2.0\\text{ V}$",
      "$NM_H = V_{IL,max} - V_{OL,max} = 1.5 - 0.4 = 1.1\\text{ V}$"
    ],
    "optionsAr": [
      "$NM_H = V_{OH,min} - V_{OL,max} = 4.4 - 0.4 = 4.0\\text{ V}$",
      "$NM_H = V_{OH,min} - V_{IH,min} = 4.4 - 3.5 = 0.9\\text{ V}$",
      "$NM_H = V_{IH,min} - V_{IL,max} = 3.5 - 1.5 = 2.0\\text{ V}$",
      "$NM_H = V_{IL,max} - V_{OL,max} = 1.5 - 0.4 = 1.1\\text{ V}$"
    ],
    "correctAnswer": "$NM_H = V_{OH,min} - V_{IH,min} = 4.4 - 3.5 = 0.9\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "$NM_H$ is the difference between minimum output HIGH and minimum input HIGH: $V_{OH,min} - V_{IH,min}$.",
    "hintAr": "هامش الضوضاء العالي هو الفارق بين أدنى جهد خرج مرتفع وأدنى جهد دخل مرتفع مقبول: $V_{OH,min} - V_{IH,min}$.",
    "stepByStepSolutionEn": [
      "The high-level noise margin represents the maximum noise voltage that can be added to a HIGH signal before it is misidentified as LOW: $NM_H = V_{OH,min} - V_{IH,min} = 4.4\\text{ V} - 3.5\\text{ V} = 0.9\\text{ V}$. (Note: $NM_L = V_{IL,max} - V_{OL,max} = 1.5 - 0.4 = 1.1\\text{ V}$)."
    ],
    "stepByStepSolutionAr": [
      "يمثل هامش الضوضاء للمستوى المرتفع أقصى جهد تشويش يمكن أن يضاف للإشارة المرتفعة دون أن تفسر خطأ: $NM_H = V_{OH,min} - V_{IH,min} = 4.4 - 3.5 = 0.9\\text{ V}$."
    ],
    "teacherTipEn": "A larger noise margin indicates higher circuit immunity to electrical interference.",
    "teacherTipAr": "كلما زاد هامش الضوضاء، زادت مناعة الدائرة ضد التداخلات الكهربائية."
  },
  {
    "id": "egbac_phys_ch4_db_med_39",
    "titleEn": "LED Current-Limiting Resistor Calculation",
    "titleAr": "حساب مقاومة تحديد تيار الدايود المشع للضوء (LED)",
    "difficulty": "medium",
    "questionEn": "An LED with a forward voltage drop $V_F = 2.0\\text{ V}$ is to be operated at a forward current $I_F = 15\\text{ mA}$ from a DC supply $V_{CC} = 5.0\\text{ V}$. What series current-limiting resistor $R$ is required?",
    "questionAr": "يراد تشغيل دايود مشع للضوء (LED) بجهد أمامي $V_F = 2.0\\text{ V}$ وتيار أمامي $I_F = 15\\text{ mA}$ من مصدر مستمر $V_{CC} = 5.0\\text{ V}$. ما قيمة مقاومة التوالي $R$ المحددة للتيار؟",
    "optionsEn": [
      "$R = \\frac{V_{CC}}{I_F} = \\frac{5.0}{0.015} \\approx 333\\ \\Omega$",
      "$R = \\frac{V_F}{I_F} = \\frac{2.0}{0.015} \\approx 133\\ \\Omega$",
      "$R = \\frac{V_{CC} - V_F}{I_F} = \\frac{5.0 - 2.0}{0.015} = 200\\ \\Omega$",
      "$R = (V_{CC} + V_F) \\times I_F = 7.0 \\times 0.015 = 0.105\\ \\Omega$"
    ],
    "optionsAr": [
      "$R = \\frac{V_{CC}}{I_F} = \\frac{5.0}{0.015} \\approx 333\\ \\Omega$",
      "$R = \\frac{V_F}{I_F} = \\frac{2.0}{0.015} \\approx 133\\ \\Omega$",
      "$R = \\frac{V_{CC} - V_F}{I_F} = \\frac{5.0 - 2.0}{0.015} = 200\\ \\Omega$",
      "$R = (V_{CC} + V_F) \\times I_F = 7.0 \\times 0.015 = 0.105\\ \\Omega$"
    ],
    "correctAnswer": "$R = \\frac{V_{CC} - V_F}{I_F} = \\frac{5.0 - 2.0}{0.015} = 200\\ \\Omega$",
    "correctIndex": 2,
    "hintEn": "The voltage across the resistor is $V_R = V_{CC} - V_F$. By Ohm's law, $R = V_R / I_F$.",
    "hintAr": "الجهد عبر المقاومة هو $V_R = V_{CC} - V_F$. وبتطبيق قانون أوم $R = V_R / I_F$.",
    "stepByStepSolutionEn": [
      "Applying Kirchhoff's voltage law: $V_{CC} - I_F R - V_F = 0 \\implies R = \\frac{V_{CC} - V_F}{I_F} = \\frac{5.0\\text{ V} - 2.0\\text{ V}}{0.015\\text{ A}} = \\frac{3.0}{0.015} = 200\\ \\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بتطبيق قانون كيرشوف للجهد: $V_{CC} = I_F R + V_F$. ومنه $R = \\frac{5.0 - 2.0}{0.015} = 200\\ \\Omega$."
    ],
    "teacherTipEn": "The resistor prevents excessive current from burning out the delicate pn junction.",
    "teacherTipAr": "تحمي المقاومة وصلة الدايود الحساسة من الاحتراق بفعل التيار الزائد."
  },
  {
    "id": "egbac_phys_ch4_db_med_40",
    "titleEn": "Photodiode Responsivity and Quantum Efficiency",
    "titleAr": "استجابية الدايود الضوئي والكفاءة الكمية",
    "difficulty": "medium",
    "questionEn": "A silicon photodiode has a quantum efficiency $\\eta = 80\\%$ at an incident laser wavelength $\\lambda = 827\\text{ nm}$. Given $hc/q \\approx 1.24\\mu\\text{m}\\cdot\\text{eV}$, what is the responsivity $\\mathcal{R}$ of the photodiode in $\\text{A/W}$?",
    "questionAr": "دايود ضوئي من السيليكون يمتلك كفاءة كمية $\\eta = 80\\%$ عند سقوط ليزر بطول موجي $\\lambda = 827\\text{ nm}$. بفرض $hc/q \\approx 1.24\\mu\\text{m}\\cdot\\text{eV}$، ما هي استجابية الدايود الضوئي $\\mathcal{R}$ بوحدة $\\text{A/W}$؟",
    "optionsEn": [
      "$\\mathcal{R} = \\frac{h c}{\\eta q \\lambda} \\approx 1.88\\text{ A/W}$",
      "$\\mathcal{R} = \\eta \\lambda = 0.80 \\times 827 = 661.6\\text{ A/W}$",
      "$\\mathcal{R} = 0.80\\text{ A/W}$ independent of wavelength",
      "$\\mathcal{R} = \\frac{\\eta q \\lambda}{h c} = \\frac{0.80 \\times 0.827\\mu\\text{m}}{1.24\\mu\\text{m}} \\approx 0.533\\text{ A/W}$"
    ],
    "optionsAr": [
      "$\\mathcal{R} = \\frac{h c}{\\eta q \\lambda} \\approx 1.88\\text{ A/W}$",
      "$\\mathcal{R} = \\eta \\lambda = 0.80 \\times 827 = 661.6\\text{ A/W}$",
      "$\\mathcal{R} = 0.80\\text{ A/W}$ مستقلاً عن الطول الموجي",
      "$\\mathcal{R} = \\frac{\\eta q \\lambda}{h c} = \\frac{0.80 \\times 0.827\\mu\\text{m}}{1.24\\mu\\text{m}} \\approx 0.533\\text{ A/W}$"
    ],
    "correctAnswer": "$\\mathcal{R} = \\frac{\\eta q \\lambda}{h c} = \\frac{0.80 \\times 0.827\\mu\\text{m}}{1.24\\mu\\text{m}} \\approx 0.533\\text{ A/W}$",
    "correctIndex": 3,
    "hintEn": "Responsivity formula: $\\mathcal{R} = \\frac{I_p}{P_{opt}} = \\frac{\\eta q}{h\\nu} = \\frac{\\eta \\lambda (\\mu\\text{m})}{1.24}$.",
    "hintAr": "قانون الاستجابية: $\\mathcal{R} = \\frac{\\eta \\lambda (\\mu\\text{m})}{1.24}$.",
    "stepByStepSolutionEn": [
      "Responsivity $\\mathcal{R}$ relates photocurrent $I_p$ to incident optical power $P_{opt}$: $\\mathcal{R} = \\frac{\\eta q \\lambda}{h c} = \\frac{\\eta \\times \\lambda\\,[\\mu\\text{m}]}{1.24\\,[\\mu\\text{m}\\cdot\\text{W/A}]} = \\frac{0.80 \\times 0.827}{1.24} \\approx 0.533\\text{ A/W}$."
    ],
    "stepByStepSolutionAr": [
      "تعبر الاستجابية عن نسبة التيار الضوئي المتولد إلى القدرة الضوئية الساقطة: $\\mathcal{R} = \\frac{0.80 \\times 0.827}{1.24} \\approx 0.533\\text{ A/W}$."
    ],
    "teacherTipEn": "Responsivity increases with wavelength up to the bandgap cutoff wavelength $\\lambda_g = hc/E_g$.",
    "teacherTipAr": "تزداد الاستجابية خطياً مع زيادة الطول الموجي حتى الوصول لطول موجة العتبة المقابل لفجوة الطاقة."
  },
  {
    "id": "egbac_phys_ch4_db_med_41",
    "titleEn": "Solar Cell Fill Factor Definition and Calculation",
    "titleAr": "تعريف وحساب عامل الامتلاء (Fill Factor) للخلية الشمسية",
    "difficulty": "medium",
    "questionEn": "A silicon solar cell has an open-circuit voltage $V_{oc} = 0.60\\text{ V}$, a short-circuit current $I_{sc} = 4.0\\text{ A}$, and delivers maximum power $P_{max} = 1.92\\text{ W}$ at its maximum power point ($V_m = 0.50\\text{ V}, I_m = 3.84\\text{ A}$). What is its fill factor ($FF$)?",
    "questionAr": "خلية شمسية سيليكونية لها جهد دائرة مفتوحة $V_{oc} = 0.60\\text{ V}$، وتيار دائرة قصر $I_{sc} = 4.0\\text{ A}$، وتعطي أقصى قدرة $P_{max} = 1.92\\text{ W}$ عند نقطة التشغيل العظمى ($V_m = 0.50\\text{ V}, I_m = 3.84\\text{ A}$). ما قيمة عامل الامتلاء ($FF$) لها؟",
    "optionsEn": [
      "$FF = \\frac{P_{max}}{V_{oc} I_{sc}} = \\frac{1.92}{0.60 \\times 4.0} = \\frac{1.92}{2.40} = 0.80\\text{ (or } 80\\%)$",
      "$FF = \\frac{V_{oc} I_{sc}}{P_{max}} = \\frac{2.40}{1.92} = 1.25$",
      "$FF = \\frac{V_m}{V_{oc}} = \\frac{0.50}{0.60} \\approx 0.833$",
      "$FF = \\frac{I_m}{I_{sc}} = \\frac{3.84}{4.0} = 0.96$"
    ],
    "optionsAr": [
      "$FF = \\frac{P_{max}}{V_{oc} I_{sc}} = \\frac{1.92}{0.60 \\times 4.0} = \\frac{1.92}{2.40} = 0.80\\text{ (أي } 80\\%)$",
      "$FF = \\frac{V_{oc} I_{sc}}{P_{max}} = \\frac{2.40}{1.92} = 1.25$",
      "$FF = \\frac{V_m}{V_{oc}} = \\frac{0.50}{0.60} \\approx 0.833$",
      "$FF = \\frac{I_m}{I_{sc}} = \\frac{3.84}{4.0} = 0.96$"
    ],
    "correctAnswer": "$FF = \\frac{P_{max}}{V_{oc} I_{sc}} = \\frac{1.92}{0.60 \\times 4.0} = \\frac{1.92}{2.40} = 0.80\\text{ (or } 80\\%)$",
    "correctIndex": 0,
    "hintEn": "Fill Factor is the ratio of maximum actual power to the theoretical product $V_{oc} \\times I_{sc}$.",
    "hintAr": "عامل الامتلاء هو نسبة أقصى قدرة فعلية إلى حاصل الضرب النظري $V_{oc} \\times I_{sc}$.",
    "stepByStepSolutionEn": [
      "Fill Factor ($FF$) evaluates the squareness of the solar cell $I$-$V$ characteristic: $FF = \\frac{P_{max}}{V_{oc} I_{sc}} = \\frac{V_m I_m}{V_{oc} I_{sc}} = \\frac{1.92\\text{ W}}{0.60\\text{ V} \\times 4.0\\text{ A}} = \\frac{1.92}{2.40} = 0.80$. A higher $FF$ reflects lower internal parasitic series resistance and higher shunt resistance."
    ],
    "stepByStepSolutionAr": [
      "يقيس عامل الامتلاء مدى اقتراب منحنى الخواص من الشكل المستطيل المثالي: $FF = \\frac{1.92}{0.60 \\times 4.0} = 0.80$. تشير القيمة العالية إلى جودة الخلية وانخفاض المقاومة الداخلية."
    ],
    "teacherTipEn": "Commercial silicon solar cells typically exhibit $FF$ between $0.75$ and $0.85$.",
    "teacherTipAr": "يتراوح عامل الامتلاء للخلايا السيليكونية التجارية عادة بين $0.75$ و $0.85$."
  },
  {
    "id": "egbac_phys_ch4_db_med_42",
    "titleEn": "Solar Cell Power Conversion Efficiency Calculation",
    "titleAr": "حساب كفاءة تحويل القدرة للخلية الشمسية",
    "difficulty": "medium",
    "questionEn": "A solar cell with active surface area $A = 100\\text{ cm}^2$ is illuminated by standard solar irradiance $P_{in} = 1000\\text{ W/m}^2$. If it produces an open-circuit voltage $V_{oc} = 0.62\\text{ V}$, short-circuit current $I_{sc} = 3.5\\text{ A}$, and a fill factor $FF = 0.78$, what is the power conversion efficiency $\\eta$?",
    "questionAr": "خلية شمسية مساحتها الفعالة $A = 100\\text{ cm}^2$ معرضة لإشعاع شمسي قياسي $P_{in} = 1000\\text{ W/m}^2$. إذا أنتجت جهد دائرة مفتوحة $V_{oc} = 0.62\\text{ V}$ وتيار قصر $I_{sc} = 3.5\\text{ A}$ وعامل امتلاء $FF = 0.78$، فما كفاءة تحويل الطاقة $\\eta$؟",
    "optionsEn": [
      "$\\eta = \\frac{1.6926\\text{ W}}{100\\text{ W}} \\approx 1.69\\%$",
      "$\\eta = \\frac{V_{oc} I_{sc} FF}{P_{incident}} = \\frac{0.62 \\times 3.5 \\times 0.78}{10\\text{ W}} = \\frac{1.6926\\text{ W}}{10\\text{ W}} \\approx 16.9\\%$",
      "$\\eta = \\frac{0.62 \\times 3.5}{10} \\times 100\\% \\approx 21.7\\%$",
      "$\\eta = \\frac{10\\text{ W}}{1.6926\\text{ W}} \\approx 59.1\\%$"
    ],
    "optionsAr": [
      "$\\eta = \\frac{1.6926\\text{ W}}{100\\text{ W}} \\approx 1.69\\%$",
      "$\\eta = \\frac{V_{oc} I_{sc} FF}{P_{incident}} = \\frac{0.62 \\times 3.5 \\times 0.78}{10\\text{ W}} = \\frac{1.6926\\text{ W}}{10\\text{ W}} \\approx 16.9\\%$",
      "$\\eta = \\frac{0.62 \\times 3.5}{10} \\times 100\\% \\approx 21.7\\%$",
      "$\\eta = \\frac{10\\text{ W}}{1.6926\\text{ W}} \\approx 59.1\\%$"
    ],
    "correctAnswer": "$\\eta = \\frac{V_{oc} I_{sc} FF}{P_{incident}} = \\frac{0.62 \\times 3.5 \\times 0.78}{10\\text{ W}} = \\frac{1.6926\\text{ W}}{10\\text{ W}} \\approx 16.9\\%$",
    "correctIndex": 1,
    "hintEn": "First calculate incident optical power: $P_{incident} = \\text{Irradiance} \\times \\text{Area} = 1000 \\times 100 \\times 10^{-4} = 10\\text{ W}$.",
    "hintAr": "احسب القدرة الساقطة أولاً: $P_{incident} = 1000 \\times (100 \\times 10^{-4}\\text{ m}^2) = 10\\text{ W}$.",
    "stepByStepSolutionEn": [
      "The incident optical power is $P_{in,tot} = 1000\\text{ W/m}^2 \\times (100 \\times 10^{-4}\\text{ m}^2) = 10\\text{ W}$. Maximum electrical power is $P_{max} = V_{oc} \\cdot I_{sc} \\cdot FF = 0.62 \\times 3.5 \\times 0.78 = 1.6926\\text{ W}$. The efficiency is $\\eta = \\frac{P_{max}}{P_{in,tot}} = \\frac{1.6926}{10} = 0.1693 = 16.93\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الضوئية الساقطة الكلية هي $10\\text{ W}$. والقدرة الكهربائية العظمى المتولدة هي $P_{max} = 0.62 \\times 3.5 \\times 0.78 = 1.6926\\text{ W}$. إذن الكفاءة $\\eta = \\frac{1.6926}{10} \\times 100\\% \\approx 16.9\\%$."
    ],
    "teacherTipEn": "Always convert area to $\\text{m}^2$: $100\\text{ cm}^2 = 100 \\times 10^{-4}\\text{ m}^2 = 0.01\\text{ m}^2$.",
    "teacherTipAr": "تأكد دائماً من تحويل المساحة إلى المتر المربع: $100\\text{ cm}^2 = 0.01\\text{ m}^2$."
  },
  {
    "id": "egbac_phys_ch4_db_med_43",
    "titleEn": "Diode Dynamic (AC) Resistance Formula",
    "titleAr": "صيغة المقاومة الديناميكية (الترددية) للدايود",
    "difficulty": "medium",
    "questionEn": "At room temperature ($V_T = \\frac{k_B T}{q} \\approx 26\\text{ mV}$), what is the dynamic (AC) small-signal resistance $r_d$ of an ideal pn junction diode ($\\eta = 1$) carrying a forward DC bias current $I_D = 2.0\\text{ mA}$?",
    "questionAr": "عند درجة حرارة الغرفة ($V_T \\approx 26\\text{ mV}$)، ما هي المقاومة الديناميكية للإشارة الصغيرة $r_d$ لدايود مثالي ($\\eta = 1$) يمر به تيار مستمر أمامي $I_D = 2.0\\text{ mA}$؟",
    "optionsEn": [
      "$r_d = \\frac{I_D}{V_T} = \\frac{2.0}{26} \\approx 0.077\\ \\Omega$",
      "$r_d = V_T \\times I_D = 0.026 \\times 0.002 = 5.2 \\times 10^{-5}\\ \\Omega$",
      "$r_d = \\frac{V_T}{I_D} = \\frac{26\\text{ mV}}{2.0\\text{ mA}} = 13\\ \\Omega$",
      "$r_d = \\frac{0.7\\text{ V}}{2.0\\text{ mA}} = 350\\ \\Omega$"
    ],
    "optionsAr": [
      "$r_d = \\frac{I_D}{V_T} = \\frac{2.0}{26} \\approx 0.077\\ \\Omega$",
      "$r_d = V_T \\times I_D = 0.026 \\times 0.002 = 5.2 \\times 10^{-5}\\ \\Omega$",
      "$r_d = \\frac{V_T}{I_D} = \\frac{26\\text{ mV}}{2.0\\text{ mA}} = 13\\ \\Omega$",
      "$r_d = \\frac{0.7\\text{ V}}{2.0\\text{ mA}} = 350\\ \\Omega$"
    ],
    "correctAnswer": "$r_d = \\frac{V_T}{I_D} = \\frac{26\\text{ mV}}{2.0\\text{ mA}} = 13\\ \\Omega$",
    "correctIndex": 2,
    "hintEn": "Dynamic resistance is the inverse derivative of Shockley's equation: $r_d = \\frac{dV_D}{dI_D} = \\frac{\\eta V_T}{I_D}$.",
    "hintAr": "المقاومة الديناميكية هي مقلوب مشتقة تيار شوكلي: $r_d = \\frac{V_T}{I_D}$.",
    "stepByStepSolutionEn": [
      "Differentiating Shockley's equation $I_D = I_s e^{V_D / \\eta V_T}$ with respect to $V_D$ gives $\\frac{dI_D}{dV_D} = \\frac{I_D}{\\eta V_T}$. The dynamic small-signal resistance is $r_d = \\left(\\frac{dI_D}{dV_D}\\right)^{-1} = \\frac{\\eta V_T}{I_D} = \\frac{26\\text{ mV}}{2.0\\text{ mA}} = 13\\ \\Omega$."
    ],
    "stepByStepSolutionAr": [
      "باشتقاق معادلة شوكلي نجد أن المقاومة الديناميكية تعطى بالقانون: $r_d = \\frac{\\eta V_T}{I_D} = \\frac{26\\text{ mV}}{2.0\\text{ mA}} = 13\\ \\Omega$."
    ],
    "teacherTipEn": "Note that dynamic resistance is inversely proportional to the DC bias current $I_D$.",
    "teacherTipAr": "لاحظ أن المقاومة الديناميكية تتناسب عكسياً مع قيمة تيار الانحياز المستمر $I_D$."
  },
  {
    "id": "egbac_phys_ch4_db_med_44",
    "titleEn": "Diode Small-Signal Superposition Concept",
    "titleAr": "مبدأ تراكب الإشارة الصغيرة في الدايود",
    "difficulty": "medium",
    "questionEn": "In a diode circuit driven by both a DC source and a small AC sinusoidal voltage $v_{ac}(t) = V_m \\sin(\\omega t)$, what fundamental condition must be satisfied for the linear small-signal approximation to hold?",
    "questionAr": "في دائرة دايود يغذيها مصدر مستمر وإشارة جيبية متناوبة صغيرة $v_{ac}(t) = V_m \\sin(\\omega t)$، ما الشرط الأساسي لصحة تقريب الإشارة الصغيرة الخطية؟",
    "optionsEn": [
      "The AC frequency must be exactly equal to the power grid frequency of $50\\text{ Hz}$",
      "The diode DC bias voltage must exceed $100\\text{ V}$",
      "The diode must operate in the breakdown region under reverse bias",
      "The peak AC voltage must be much smaller than the thermal voltage ($V_m \\ll \\eta V_T \\approx 26\\text{ mV}$), ensuring the exponential $I$-$V$ curve is locally linear"
    ],
    "optionsAr": [
      "أن يكون تردد الإشارة المتناوبة مساوياً تماماً لتردد شبكة الكهرباء $50\\text{ Hz}$",
      "أن يتجاوز جهد انحياز الدايود المستمر $100\\text{ V}$",
      "أن يعمل الدايود في منطقة الانهيار تحت انحياز عكسي",
      "أن تكون سعة جهد الإشارة المتناوبة أصغر بكثير من الجهد الحراري ($V_m \\ll \\eta V_T \\approx 26\\text{ mV}$)، مما يضمن خطية منحنى الخواص موضعياً"
    ],
    "correctAnswer": "The peak AC voltage must be much smaller than the thermal voltage ($V_m \\ll \\eta V_T \\approx 26\\text{ mV}$), ensuring the exponential $I$-$V$ curve is locally linear",
    "correctIndex": 3,
    "hintEn": "Small-signal linearization requires $v_d \\ll V_T$ so that $e^{v_d/V_T} \\approx 1 + \\frac{v_d}{V_T}$.",
    "hintAr": "يتطلب التقريب الخطي أن يكون $v_d \\ll V_T$ لتطبيق تقريب مفكوك تايلور $e^{v_d/V_T} \\approx 1 + \\frac{v_d}{V_T}$.",
    "stepByStepSolutionEn": [
      "Expanding the exponential diode current around the operating point: $I_D(t) = I_Q e^{v_d / V_T} \\approx I_Q \\left(1 + \\frac{v_d}{V_T}\\right) = I_Q + \\frac{I_Q}{V_T} v_d = I_Q + \\frac{v_d}{r_d}$. This first-order Taylor approximation is valid only when $v_d \\ll V_T \\approx 26\\text{ mV}$ (typically $v_d \\le 5\\text{ mV}$)."
    ],
    "stepByStepSolutionAr": [
      "بفك الدالة الأسية حول نقطة التشغيل $I_D \\approx I_Q (1 + v_d/V_T) = I_Q + v_d/r_d$. يصح هذا التقريب الخطي فقط عند تحقق الشرط $v_d \\ll V_T$ (عادة أقل من $5\\text{ mV}$)."
    ],
    "teacherTipEn": "If $v_d$ is large, non-linear distortion and harmonic generation occur.",
    "teacherTipAr": "إذا كانت سعة الإشارة كبيرة، يحدث تشوه غير خطي وتتولد توافقيات غير مرغوبة."
  },
  {
    "id": "egbac_phys_ch4_db_med_45",
    "titleEn": "Zener Diode Regulator: Minimum Load Resistance",
    "titleAr": "منظم دايود زنر: المقاومة الصغرى للحمل",
    "difficulty": "medium",
    "questionEn": "A Zener voltage regulator has $V_{in} = 15\\text{ V}$, series resistance $R_S = 100\\ \\Omega$, and a Zener diode with $V_Z = 10\\text{ V}$ and minimum knee current $I_{ZK} = 5\\text{ mA}$. What is the minimum load resistance $R_{L,min}$ for which the circuit maintains regulation?",
    "questionAr": "دائرة تنظيم جهد بفرط الزنر بها $V_{in} = 15\\text{ V}$، ومقاومة توالي $R_S = 100\\ \\Omega$، ودايود زنر جهده $V_Z = 10\\text{ V}$ وأدنى تيار استقرار $I_{ZK} = 5\\text{ mA}$. ما أقل مقاومة حمل $R_{L,min}$ تحافظ على ثبات التنظيم؟",
    "optionsEn": [
      "$R_{L,min} = \\frac{V_Z}{I_{S} - I_{ZK}} = \\frac{10\\text{ V}}{50\\text{ mA} - 5\\text{ mA}} = \\frac{10}{0.045\\text{ A}} \\approx 222.2\\ \\Omega$",
      "$R_{L,min} = \\frac{10\\text{ V}}{50\\text{ mA}} = 200\\ \\Omega$",
      "$R_{L,min} = \\frac{15\\text{ V}}{5\\text{ mA}} = 3000\\ \\Omega$",
      "$R_{L,min} = R_S = 100\\ \\Omega$"
    ],
    "optionsAr": [
      "$R_{L,min} = \\frac{V_Z}{I_{S} - I_{ZK}} = \\frac{10\\text{ V}}{50\\text{ mA} - 5\\text{ mA}} = \\frac{10}{0.045\\text{ A}} \\approx 222.2\\ \\Omega$",
      "$R_{L,min} = \\frac{10\\text{ V}}{50\\text{ mA}} = 200\\ \\Omega$",
      "$R_{L,min} = \\frac{15\\text{ V}}{5\\text{ mA}} = 3000\\ \\Omega$",
      "$R_{L,min} = R_S = 100\\ \\Omega$"
    ],
    "correctAnswer": "$R_{L,min} = \\frac{V_Z}{I_{S} - I_{ZK}} = \\frac{10\\text{ V}}{50\\text{ mA} - 5\\text{ mA}} = \\frac{10}{0.045\\text{ A}} \\approx 222.2\\ \\Omega$",
    "correctIndex": 0,
    "hintEn": "Calculate total supply current $I_S = (V_{in} - V_Z)/R_S = (15 - 10)/100 = 50\\text{ mA}$. Then $I_{L,max} = I_S - I_{ZK}$.",
    "hintAr": "احسب التيار الكلي $I_S = (15 - 10)/100 = 50\\text{ mA}$، ثم أقصى تيار حمل مسموح $I_{L,max} = 50 - 5 = 45\\text{ mA}$.",
    "stepByStepSolutionEn": [
      "The total current through $R_S$ is constant: $I_S = \\frac{V_{in} - V_Z}{R_S} = \\frac{15 - 10}{100} = 50\\text{ mA}$. By KCL, $I_S = I_Z + I_L$. To maintain regulation, $I_Z \\ge I_{ZK} = 5\\text{ mA}$, which means $I_{L,max} = I_S - I_{ZK} = 50 - 5 = 45\\text{ mA}$. Therefore, $R_{L,min} = \\frac{V_Z}{I_{L,max}} = \\frac{10}{0.045} \\approx 222.2\\ \\Omega$."
    ],
    "stepByStepSolutionAr": [
      "التيار القادم من المصدر ثابت: $I_S = \\frac{15 - 10}{100} = 50\\text{ mA}$. وبحسب كيرشوف $I_S = I_Z + I_L$. لضمان التنظيم يجب أن يكون $I_Z \\ge 5\\text{ mA}$، مما يجعل $I_{L,max} = 45\\text{ mA}$. وتكون أقل مقاومة حمل $R_{L,min} = 10 / 0.045 \\approx 222.2\\ \\Omega$."
    ],
    "teacherTipEn": "If $R_L < R_{L,min}$, $I_L$ draws too much current, $I_Z$ falls below $I_{ZK}$, and the Zener drops out of breakdown.",
    "teacherTipAr": "إذا انخفضت مقاومة الحمل عن هذه القيمة، يسحب الحمل تياراً كبيراً فينخفض تيار الزنر عن $I_{ZK}$ ويفقد تنظيمه للجهد."
  },
  {
    "id": "egbac_phys_ch4_db_med_46",
    "titleEn": "Zener Maximum Power Dissipation and Input Range",
    "titleAr": "أقصى قدرة مبددة في دايود زنر ومدى جهد الدخل",
    "difficulty": "medium",
    "questionEn": "A Zener diode with $V_Z = 12\\text{ V}$ has a maximum power rating $P_{Z,max} = 1.2\\text{ W}$. If it is used in a regulator with $R_S = 150\\ \\Omega$ with no load connected ($I_L = 0$), what is the maximum permissible DC input voltage $V_{in,max}$ before damaging the Zener?",
    "questionAr": "دايود زنر جهده $V_Z = 12\\text{ V}$ وقدرته القصوى المسموحة $P_{Z,max} = 1.2\\text{ W}$. إذا استخدم في دائرة تنظيم بمقاومة $R_S = 150\\ \\Omega$ بدون حمل ($I_L = 0$)، فما أقصى جهد دخل مستمر مسموح $V_{in,max}$ قبل تلف الدايود؟",
    "optionsEn": [
      "$V_{in,max} = 12\\text{ V} + 1.2\\text{ V} = 13.2\\text{ V}$",
      "$V_{in,max} = V_Z + I_{Z,max} R_S = 12 + (0.10\\text{ A} \\times 150\\ \\Omega) = 12 + 15 = 27\\text{ V}$",
      "$V_{in,max} = \\frac{P_{Z,max} \\times R_S}{V_Z} = \\frac{1.2 \\times 150}{12} = 15\\text{ V}$",
      "$V_{in,max} = 12 \\times \\sqrt{1.2} \\approx 13.1\\text{ V}$"
    ],
    "optionsAr": [
      "$V_{in,max} = 12\\text{ V} + 1.2\\text{ V} = 13.2\\text{ V}$",
      "$V_{in,max} = V_Z + I_{Z,max} R_S = 12 + (0.10\\text{ A} \\times 150\\ \\Omega) = 12 + 15 = 27\\text{ V}$",
      "$V_{in,max} = \\frac{P_{Z,max} \\times R_S}{V_Z} = \\frac{1.2 \\times 150}{12} = 15\\text{ V}$",
      "$V_{in,max} = 12 \\times \\sqrt{1.2} \\approx 13.1\\text{ V}$"
    ],
    "correctAnswer": "$V_{in,max} = V_Z + I_{Z,max} R_S = 12 + (0.10\\text{ A} \\times 150\\ \\Omega) = 12 + 15 = 27\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "Find maximum Zener current: $I_{Z,max} = P_{Z,max} / V_Z = 1.2 / 12 = 0.10\\text{ A} = 100\\text{ mA}$.",
    "hintAr": "احسب أقصى تيار للزنر: $I_{Z,max} = 1.2 / 12 = 0.10\\text{ A}$. ثم أوجد الجهد عبر مقاومة التوالي.",
    "stepByStepSolutionEn": [
      "The maximum rated Zener current is $I_{Z,max} = \\frac{P_{Z,max}}{V_Z} = \\frac{1.2\\text{ W}}{12\\text{ V}} = 0.10\\text{ A} = 100\\text{ mA}$. Under no-load conditions ($I_L = 0$), all current passes through the Zener ($I_S = I_Z$). Therefore: $V_{in,max} = V_Z + I_{Z,max} R_S = 12\\text{ V} + (0.10\\text{ A})(150\\ \\Omega) = 12 + 15 = 27\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "أقصى تيار زنر مسموح هو $I_{Z,max} = 1.2 / 12 = 0.10\\text{ A}$. في حالة انعدام الحمل، يمر تيار المصدر بأكمله في الزنر. وعليه يكون أقصى جهد دخل: $V_{in,max} = 12 + (0.10 \\times 150) = 27\\text{ V}$."
    ],
    "teacherTipEn": "Exceeding $27\\text{ V}$ will cause thermal breakdown and destroy the diode.",
    "teacherTipAr": "تجاوز جهد $27\\text{ V}$ سيؤدي إلى انهيار حراري واحتراق دايود الزنر."
  },
  {
    "id": "egbac_phys_ch4_db_med_47",
    "titleEn": "BJT Characteristic Regions on Output Curves",
    "titleAr": "مناطق تشغيل الترانزستور على منحنيات الخرج",
    "difficulty": "medium",
    "questionEn": "On the family of output characteristic curves ($I_C$ versus $V_{CE}$ at constant $I_B$) of an npn bipolar junction transistor, which operational region is characterized by $V_{CE} < V_{CE,sat} \\approx 0.2\\text{ V}$ where both junctions are forward-biased?",
    "questionAr": "على منحنيات خواص الخرج ($I_C$ مقابل $V_{CE}$ عند ثبوت $I_B$) لترانزستور npn، أي منطقة تشغيل تتميز بكون $V_{CE} < V_{CE,sat} \\approx 0.2\\text{ V}$ وتكون فيها وصلتا الترانزستور منحازتين أمامياً؟",
    "optionsEn": [
      "The Active Linear Amplification Region",
      "The Cutoff Region ($I_B = 0$)",
      "The Saturation Region",
      "The Avalanche Breakdown Region"
    ],
    "optionsAr": [
      "المنطقة الفعالة الخطية (Active Region)",
      "منطقة القطع (Cutoff Region)",
      "منطقة التشبع (Saturation Region)",
      "منطقة الانهيار الصاعق"
    ],
    "correctAnswer": "The Saturation Region",
    "correctIndex": 2,
    "hintEn": "Saturation occurs when $V_{CE}$ drops below ~0.2 V and collector current is limited by external circuit.",
    "hintAr": "يحدث التشبع عندما يهبط $V_{CE}$ لأقل من نحو 0.2 فولت وينحاز كلاهما أمامياً.",
    "stepByStepSolutionEn": [
      "In the Saturation Region, both the base-emitter and base-collector junctions are forward-biased. The collector-emitter voltage collapses to $V_{CE,sat} \\approx 0.1\\text{ to } 0.3\\text{ V}$, and $I_C$ becomes independent of $I_B$, dictated primarily by $V_{CC}/R_C$. In the active region, BE is forward and BC is reverse biased."
    ],
    "stepByStepSolutionAr": [
      "في منطقة التشبع، تنحاز كلتا الوصلتين (القاعدة-المشع والقاعدة-المجمع) أمامياً. ويهبط جهد المجمع-المشع إلى قيمة التشبع الصغيرة $V_{CE,sat} \\approx 0.2\\text{ V}$، ويصبح تيار المجمع محكوماً بمقاومة الدائرة الخارجية وليس بتيار القاعدة."
    ],
    "teacherTipEn": "In digital logic, saturation corresponds to the logic LOW state (closed switch).",
    "teacherTipAr": "في الدوائر الرقمية، يمثل التشبع حالة المفتاح المغلق (المستوى المنطقي 0)."
  },
  {
    "id": "egbac_phys_ch4_db_med_48",
    "titleEn": "BJT DC Load Line: Endpoints Calculation",
    "titleAr": "خط الحمل المستمر للترانزستور: حساب نقاط النهاية",
    "difficulty": "medium",
    "questionEn": "In a common-emitter BJT circuit with $V_{CC} = 12\\text{ V}$ and collector resistor $R_C = 2.0\\text{ k}\\Omega$, what are the coordinates of the two endpoints of the DC load line on the $I_C$ versus $V_{CE}$ graph?",
    "questionAr": "في دائرة ترانزستور ذي مشع مشترك بجهد تغذية $V_{CC} = 12\\text{ V}$ ومقاومة مجمع $R_C = 2.0\\text{ k}\\Omega$، ما إحداثيات نقطتي طرفي خط الحمل المستمر على منحنى $I_C$ مقابل $V_{CE}$؟",
    "optionsEn": [
      "Cutoff point: $(V_{CE} = 0, I_C = 12\\text{ mA})$; Saturation point: $(V_{CE} = 6.0\\text{ V}, I_C = 0)$",
      "Cutoff point: $(V_{CE} = 2.0\\text{ V}, I_C = 2.0\\text{ mA})$; Saturation point: $(V_{CE} = 12\\text{ V}, I_C = 12\\text{ mA})$",
      "Cutoff point: $(V_{CE} = 24\\text{ V}, I_C = 0)$; Saturation point: $(V_{CE} = 0, I_C = 3.0\\text{ mA})$",
      "Cutoff point: $(V_{CE} = 12\\text{ V}, I_C = 0)$; Saturation point: $(V_{CE} = 0, I_C = 6.0\\text{ mA})$"
    ],
    "optionsAr": [
      "نقطة القطع: $(V_{CE} = 0, I_C = 12\\text{ mA})$؛ ونقطة التشبع: $(V_{CE} = 6.0\\text{ V}, I_C = 0)$",
      "نقطة القطع: $(V_{CE} = 2.0\\text{ V}, I_C = 2.0\\text{ mA})$؛ ونقطة التشبع: $(V_{CE} = 12\\text{ V}, I_C = 12\\text{ mA})$",
      "نقطة القطع: $(V_{CE} = 24\\text{ V}, I_C = 0)$؛ ونقطة التشبع: $(V_{CE} = 0, I_C = 3.0\\text{ mA})$",
      "نقطة القطع: $(V_{CE} = 12\\text{ V}, I_C = 0)$؛ ونقطة التشبع: $(V_{CE} = 0, I_C = 6.0\\text{ mA})$"
    ],
    "correctAnswer": "Cutoff point: $(V_{CE} = 12\\text{ V}, I_C = 0)$; Saturation point: $(V_{CE} = 0, I_C = 6.0\\text{ mA})$",
    "correctIndex": 3,
    "hintEn": "KVL for collector loop: $V_{CE} = V_{CC} - I_C R_C$. Set $I_C = 0$ for x-intercept and $V_{CE} = 0$ for y-intercept.",
    "hintAr": "معادلة حلقة المجمع: $V_{CE} = V_{CC} - I_C R_C$. عند $I_C=0$ يكون $V_{CE}=V_{CC}$، وعند $V_{CE}=0$ يكون $I_C=V_{CC}/R_C$.",
    "stepByStepSolutionEn": [
      "The DC load line is governed by KVL: $V_{CC} = I_C R_C + V_{CE}$. When $I_C = 0$ (cutoff), $V_{CE} = V_{CC} = 12\\text{ V}$. When $V_{CE} = 0$ (ideal saturation), $I_C = \\frac{V_{CC}}{R_C} = \\frac{12\\text{ V}}{2000\\ \\Omega} = 6.0\\text{ mA}$. Connecting these two intercepts defines the load line."
    ],
    "stepByStepSolutionAr": [
      "يحكم خط الحمل قانون كيرشوف: $V_{CC} = I_C R_C + V_{CE}$. عند انعدام التيار (القطع) نجد $V_{CE} = 12\\text{ V}$. وعند انعدام الجهد (التشبع المثالي) نجد $I_C = 12 / 2000 = 6.0\\text{ mA}$. ويصل خط الحمل بين هاتين النقطتين."
    ],
    "teacherTipEn": "The operating Q-point is the intersection between the load line and the specific base current curve.",
    "teacherTipAr": "نقطة التشغيل Q هي نقطة تقاطع خط الحمل مع منحنى تيار القاعدة المطبق."
  },
  {
    "id": "egbac_phys_ch4_db_med_49",
    "titleEn": "Thermal Stabilization Mechanism with Emitter Resistor",
    "titleAr": "آلية الاستقرار الحراري باستخدام مقاومة المشع",
    "difficulty": "medium",
    "questionEn": "Why is an emitter resistor $R_E$ inserted in the common-emitter amplifier circuit, and how does it prevent thermal runaway?",
    "questionAr": "لماذا تضاف مقاومة المشع $R_E$ في دائرة مكبر المشع المشترك، وكيف تمنع ظاهرة الهروب الحراري؟",
    "optionsEn": [
      "It provides negative DC feedback: an increase in temperature increases $I_C$, which increases $V_E = I_E R_E$, thereby reducing $V_{BE} = V_B - V_E$ and stabilizing $I_C$",
      "It dissipates all excess heat by radiating electromagnetic waves into the environment",
      "It converts the transistor from npn type into pnp type dynamically",
      "It increases the voltage gain of the amplifier to infinity"
    ],
    "optionsAr": [
      "توفر تغذية راجعة سالبة مستمرة: زيادة الحرارة ترفع $I_C$، مما يرفع جهد المشع $V_E = I_E R_E$، فيقل جهد القاعدة-المشع $V_{BE} = V_B - V_E$ ويحد من زيادة $I_C$",
      "تبدد كل الحرارة الزائدة عن طريق إشعاع موجات كهرومغناطيسية في الوسط المحيط",
      "تحول الترانزستور ديناميكياً من نوع npn إلى نوع pnp",
      "ترفع كسب الجهد للمكبر إلى ما لا نهاية"
    ],
    "correctAnswer": "It provides negative DC feedback: an increase in temperature increases $I_C$, which increases $V_E = I_E R_E$, thereby reducing $V_{BE} = V_B - V_E$ and stabilizing $I_C$",
    "correctIndex": 0,
    "hintEn": "Emitter resistor feedback loop: $T \\uparrow \\implies I_C \\uparrow \\implies V_E \\uparrow \\implies V_{BE} \\downarrow \\implies I_B \\downarrow \\implies I_C \\downarrow$.",
    "hintAr": "حلقة التغذية العكسية لمقاومة المشع: ارتفاع الحرارة يرفع التيار فيرفع جهد المشع، مما يقلل جهد $V_{BE}$ فيكبح التيار ويستقر.",
    "stepByStepSolutionEn": [
      "If temperature rises, $I_C$ increases due to increased intrinsic carrier generation and higher $\\beta$. Since $I_E \\approx I_C$, the voltage drop $V_E = I_E R_E$ rises. Because base voltage $V_B$ is relatively fixed by the bias network, the effective junction voltage $V_{BE} = V_B - V_E$ decreases. Since $I_C$ depends exponentially on $V_{BE}$, this reduction strongly counteracts the initial increase in $I_C$, stabilizing the Q-point."
    ],
    "stepByStepSolutionAr": [
      "عند ارتفاع درجة الحرارة، يميل تيار المجمع $I_C$ للزيادة. وبما أن $I_E \\approx I_C$، يرتفع هبوط الجهد عبر مقاومة المشع $V_E = I_E R_E$. وبقاء جهد القاعدة $V_B$ ثابتاً يؤدي إلى نقصان مباشر في جهد الوصلة $V_{BE} = V_B - V_E$، مما يكبح تيار القاعدة والمجمع ويعيد نقطة التشغيل للاستقرار."
    ],
    "teacherTipEn": "This negative feedback stabilizes DC bias against temperature and $\\beta$ variations.",
    "teacherTipAr": "تضمن هذه التغذية الراجعة السالبة استقرار نقطة التشغيل ضد تغيرات درجة الحرارة ومعامل التكبير $\\beta$."
  },
  {
    "id": "egbac_phys_ch4_db_med_50",
    "titleEn": "Voltage Divider Bias: Thevenin Equivalent Voltage and Resistance",
    "titleAr": "انحياز مجزئ الجهد: جهد ومقاومة ثيفنين المكافئة",
    "difficulty": "medium",
    "questionEn": "A BJT voltage divider bias network has $V_{CC} = 15\\text{ V}$, upper resistor $R_1 = 30\\text{ k}\\Omega$, and lower resistor $R_2 = 10\\text{ k}\\Omega$. What are the Thevenin equivalent open-circuit voltage $V_{TH}$ and Thevenin resistance $R_{TH}$ looking into the base?",
    "questionAr": "دائرة انحياز بمجزئ جهد لترانزستور بها $V_{CC} = 15\\text{ V}$، والمقاومة العلوية $R_1 = 30\\text{ k}\\Omega$، والمقاومة السفلية $R_2 = 10\\text{ k}\\Omega$. ما جهد ومقاومة ثيفنين المكافئة ($V_{TH}$ و $R_{TH}$) عند النظر إلى طرف القاعدة؟",
    "optionsEn": [
      "$V_{TH} = 5.0\\text{ V}$ and $R_{TH} = 40\\text{ k}\\Omega$",
      "$V_{TH} = 3.75\\text{ V}$ and $R_{TH} = 7.5\\text{ k}\\Omega$",
      "$V_{TH} = 11.25\\text{ V}$ and $R_{TH} = 20\\text{ k}\\Omega$",
      "$V_{TH} = 1.5\\text{ V}$ and $R_{TH} = 3.0\\text{ k}\\Omega$"
    ],
    "optionsAr": [
      "$V_{TH} = 5.0\\text{ V}$ و $R_{TH} = 40\\text{ k}\\Omega$",
      "$V_{TH} = 3.75\\text{ V}$ و $R_{TH} = 7.5\\text{ k}\\Omega$",
      "$V_{TH} = 11.25\\text{ V}$ و $R_{TH} = 20\\text{ k}\\Omega$",
      "$V_{TH} = 1.5\\text{ V}$ و $R_{TH} = 3.0\\text{ k}\\Omega$"
    ],
    "correctAnswer": "$V_{TH} = 3.75\\text{ V}$ and $R_{TH} = 7.5\\text{ k}\\Omega$",
    "correctIndex": 1,
    "hintEn": "$V_{TH} = V_{CC} \\frac{R_2}{R_1 + R_2}$, and $R_{TH} = R_1 \\parallel R_2 = \\frac{R_1 R_2}{R_1 + R_2}$.",
    "hintAr": "جهد ثيفنين هو جهد مجزئ الجهد: $V_{TH} = V_{CC} \\frac{R_2}{R_1 + R_2}$ ومقاومة ثيفنين هي توازي المقاومتين: $R_{TH} = R_1 \\parallel R_2$.",
    "stepByStepSolutionEn": [
      "The Thevenin voltage is $V_{TH} = V_{CC} \\frac{R_2}{R_1 + R_2} = 15\\text{ V} \\times \\frac{10}{30 + 10} = 15 \\times \\frac{10}{40} = 3.75\\text{ V}$. The Thevenin resistance with $V_{CC}$ grounded is $R_{TH} = R_1 \\parallel R_2 = \\frac{30 \\times 10}{30 + 10} = \\frac{300}{40} = 7.5\\text{ k}\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "جهد ثيفنين يمثل جهد الدائرة المفتوحة عند القاعدة: $V_{TH} = 15 \\times \\frac{10}{40} = 3.75\\text{ V}$. وبإلغاء مصدر الجهد تصبح المقاومتان على التوازي: $R_{TH} = \\frac{30 \\times 10}{30 + 10} = 7.5\\text{ k}\\Omega$."
    ],
    "teacherTipEn": "Voltage divider bias provides excellent Q-point stability independent of transistor $\\beta$.",
    "teacherTipAr": "يوفر انحياز مجزئ الجهد استقراراً فائقاً لنقطة التشغيل مستقلاً عن تشتت معامل $\\beta$."
  },
  {
    "id": "egbac_phys_ch4_db_med_51",
    "titleEn": "Base Current in Voltage Divider Biasing",
    "titleAr": "حساب تيار القاعدة في دائرة مجزئ الجهد",
    "difficulty": "medium",
    "questionEn": "In a voltage divider bias circuit with $V_{TH} = 3.7\\text{ V}$, $R_{TH} = 5.0\\text{ k}\\Omega$, $V_{BE} = 0.7\\text{ V}$, emitter resistor $R_E = 1.0\\text{ k}\\Omega$, and common-emitter current gain $\\beta = 99$, what is the quiescent base current $I_B$?",
    "questionAr": "في دائرة انحياز بمجزئ جهد بجهد مكافئ $V_{TH} = 3.7\\text{ V}$، ومقاومة مكافئة $R_{TH} = 5.0\\text{ k}\\Omega$، و $V_{BE} = 0.7\\text{ V}$، ومقاومة مشع $R_E = 1.0\\text{ k}\\Omega$، ومعامل تكبير تيار $\\beta = 99$، ما قيمة تيار انحياز القاعدة $I_B$؟",
    "optionsEn": [
      "$I_B = \\frac{V_{TH} - V_{BE}}{R_{TH} + R_E} = \\frac{3.0\\text{ V}}{6.0\\text{ k}\\Omega} = 500\\mu\\text{A}$",
      "$I_B = \\frac{3.7\\text{ V}}{5.0\\text{ k}\\Omega} = 740\\mu\\text{A}$",
      "$I_B = \\frac{V_{TH} - V_{BE}}{R_{TH} + (\\beta + 1)R_E} = \\frac{3.7 - 0.7}{5.0\\text{ k}\\Omega + 100(1.0\\text{ k}\\Omega)} = \\frac{3.0\\text{ V}}{105\\text{ k}\\Omega} \\approx 28.57\\mu\\text{A}$",
      "$I_B = \\frac{0.7\\text{ V}}{100\\text{ k}\\Omega} = 7.0\\mu\\text{A}$"
    ],
    "optionsAr": [
      "$I_B = \\frac{V_{TH} - V_{BE}}{R_{TH} + R_E} = \\frac{3.0\\text{ V}}{6.0\\text{ k}\\Omega} = 500\\mu\\text{A}$",
      "$I_B = \\frac{3.7\\text{ V}}{5.0\\text{ k}\\Omega} = 740\\mu\\text{A}$",
      "$I_B = \\frac{V_{TH} - V_{BE}}{R_{TH} + (\\beta + 1)R_E} = \\frac{3.7 - 0.7}{5.0\\text{ k}\\Omega + 100(1.0\\text{ k}\\Omega)} = \\frac{3.0\\text{ V}}{105\\text{ k}\\Omega} \\approx 28.57\\mu\\text{A}$",
      "$I_B = \\frac{0.7\\text{ V}}{100\\text{ k}\\Omega} = 7.0\\mu\\text{A}$"
    ],
    "correctAnswer": "$I_B = \\frac{V_{TH} - V_{BE}}{R_{TH} + (\\beta + 1)R_E} = \\frac{3.7 - 0.7}{5.0\\text{ k}\\Omega + 100(1.0\\text{ k}\\Omega)} = \\frac{3.0\\text{ V}}{105\\text{ k}\\Omega} \\approx 28.57\\mu\\text{A}$",
    "correctIndex": 2,
    "hintEn": "Apply KVL to the base loop: $V_{TH} - I_B R_{TH} - V_{BE} - I_E R_E = 0$, with $I_E = (\\beta + 1) I_B$.",
    "hintAr": "طبق كيرشوف في حلقة القاعدة: $V_{TH} - I_B R_{TH} - V_{BE} - (\\beta + 1)I_B R_E = 0$.",
    "stepByStepSolutionEn": [
      "Writing KVL around the base-emitter circuit: $V_{TH} = I_B R_{TH} + V_{BE} + I_E R_E$. Substituting $I_E = (\\beta + 1)I_B$: $V_{TH} - V_{BE} = I_B [R_{TH} + (\\beta + 1)R_E]$. Solving for $I_B$: $I_B = \\frac{3.7 - 0.7}{5.0\\text{ k}\\Omega + (99+1)(1.0\\text{ k}\\Omega)} = \\frac{3.0\\text{ V}}{105\\text{ k}\\Omega} \\approx 0.02857\\text{ mA} = 28.57\\mu\\text{A}$."
    ],
    "stepByStepSolutionAr": [
      "بتطبيق قانون كيرشوف للجهد حول حلقة القاعدة: $V_{TH} - V_{BE} = I_B [R_{TH} + (\\beta+1)R_E]$. بالتعويض بالأرقام: $I_B = \\frac{3.0}{5 + 100 \\times 1} = \\frac{3.0}{105\\text{ k}\\Omega} \\approx 28.57\\mu\\text{A}$."
    ],
    "teacherTipEn": "Notice how $R_E$ is reflected into the base circuit scaled by $(\\beta + 1)$.",
    "teacherTipAr": "لاحظ كيف تنعكس مقاومة المشع $R_E$ إلى دائرة القاعدة مضروبة في المعامل $(\\beta + 1)$."
  },
  {
    "id": "egbac_phys_ch4_db_med_52",
    "titleEn": "Collector-Emitter Voltage Calculation in CE Circuit",
    "titleAr": "حساب جهد المجمع-المشع في دائرة المشع المشترك",
    "difficulty": "medium",
    "questionEn": "In a CE amplifier with $V_{CC} = 18\\text{ V}$, $R_C = 3.3\\text{ k}\\Omega$, $R_E = 1.2\\text{ k}\\Omega$, and an operating collector current $I_C = 2.5\\text{ mA}$ (assuming $I_E \\approx I_C$), what is the quiescent collector-emitter voltage $V_{CE}$?",
    "questionAr": "في مكبر مشع مشترك بجهد تغذية $V_{CC} = 18\\text{ V}$، ومقاومة مجمع $R_C = 3.3\\text{ k}\\Omega$، ومقاومة مشع $R_E = 1.2\\text{ k}\\Omega$، وتيار مجمع $I_C = 2.5\\text{ mA}$ (مع فرض $I_E \\approx I_C$)، ما جهد المجمع-المشع $V_{CE}$ عند نقطة السكون؟",
    "optionsEn": [
      "$V_{CE} = 18 - (2.5 \\times 3.3) = 9.75\\text{ V}$",
      "$V_{CE} = 18 - (2.5 \\times 1.2) = 15.0\\text{ V}$",
      "$V_{CE} = 18 / 2 = 9.0\\text{ V}$",
      "$V_{CE} = V_{CC} - I_C(R_C + R_E) = 18 - 2.5\\text{ mA} \\times 4.5\\text{ k}\\Omega = 18 - 11.25 = 6.75\\text{ V}$"
    ],
    "optionsAr": [
      "$V_{CE} = 18 - (2.5 \\times 3.3) = 9.75\\text{ V}$",
      "$V_{CE} = 18 - (2.5 \\times 1.2) = 15.0\\text{ V}$",
      "$V_{CE} = 18 / 2 = 9.0\\text{ V}$",
      "$V_{CE} = V_{CC} - I_C(R_C + R_E) = 18 - 2.5\\text{ mA} \\times 4.5\\text{ k}\\Omega = 18 - 11.25 = 6.75\\text{ V}$"
    ],
    "correctAnswer": "$V_{CE} = V_{CC} - I_C(R_C + R_E) = 18 - 2.5\\text{ mA} \\times 4.5\\text{ k}\\Omega = 18 - 11.25 = 6.75\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "Total loop resistance in the collector-emitter path is $R_C + R_E$.",
    "hintAr": "المقاومة الكلية في مسار المجمع-المشع هي مجموع المقاومتين $R_C + R_E$.",
    "stepByStepSolutionEn": [
      "Writing KVL for the output loop: $V_{CC} - I_C R_C - V_{CE} - I_E R_E = 0$. Since $I_E \\approx I_C$: $V_{CE} = V_{CC} - I_C(R_C + R_E) = 18\\text{ V} - (2.5 \\times 10^{-3}\\text{ A})(3300 + 1200\\ \\Omega) = 18 - 11.25 = 6.75\\text{ V}$. Since $V_{CE} > 0.3\\text{ V}$, the BJT is in the active linear region."
    ],
    "stepByStepSolutionAr": [
      "بتطبيق قانون كيرشوف للجهد على حلقة الخرج: $V_{CC} = I_C R_C + V_{CE} + I_E R_E$. وبما أن $I_E \\approx I_C$: $V_{CE} = 18 - 2.5 \\times (3.3 + 1.2) = 18 - 11.25 = 6.75\\text{ V}$."
    ],
    "teacherTipEn": "The value $V_{CE} = 6.75\\text{ V}$ is comfortably centered between saturation and cutoff.",
    "teacherTipAr": "تقع القيمة $6.75\\text{ V}$ في موقع مناسب في منتصف المنطقة الفعالة بعيداً عن التشبع والقطع."
  },
  {
    "id": "egbac_phys_ch4_db_med_53",
    "titleEn": "CE Voltage Gain with Unbypassed Emitter Resistor",
    "titleAr": "كسب الجهد لمكبر المشع المشترك مع مقاومة مشع غير مجزأة",
    "difficulty": "medium",
    "questionEn": "In a common-emitter amplifier with an unbypassed emitter resistor $R_E = 500\\ \\Omega$, collector resistor $R_C = 4.0\\text{ k}\\Omega$, and dynamic emitter resistance $r_e = 20\\ \\Omega$, what is the approximate small-signal voltage gain $A_v$?",
    "questionAr": "في مكبر مشع مشترك به مقاومة مشع غير مجزأة (بدون مكثف توازي) $R_E = 500\\ \\Omega$، ومقاومة مجمع $R_C = 4.0\\text{ k}\\Omega$، ومقاومة مشع ديناميكية $r_e = 20\\ \\Omega$، ما كسب الجهد التقريبي للإشارة الصغيرة $A_v$؟",
    "optionsEn": [
      "$A_v = -\\frac{R_C}{r_e + R_E} = -\\frac{4000}{20 + 500} = -\\frac{4000}{520} \\approx -7.69$",
      "$A_v = -\\frac{R_C}{r_e} = -\\frac{4000}{20} = -200$",
      "$A_v = +\\frac{R_E}{R_C} = +\\frac{500}{4000} = +0.125$",
      "$A_v = -\\frac{R_C + R_E}{r_e} = -\\frac{4500}{20} = -225$"
    ],
    "optionsAr": [
      "$A_v = -\\frac{R_C}{r_e + R_E} = -\\frac{4000}{20 + 500} = -\\frac{4000}{520} \\approx -7.69$",
      "$A_v = -\\frac{R_C}{r_e} = -\\frac{4000}{20} = -200$",
      "$A_v = +\\frac{R_E}{R_C} = +\\frac{500}{4000} = +0.125$",
      "$A_v = -\\frac{R_C + R_E}{r_e} = -\\frac{4500}{20} = -225$"
    ],
    "correctAnswer": "$A_v = -\\frac{R_C}{r_e + R_E} = -\\frac{4000}{20 + 500} = -\\frac{4000}{520} \\approx -7.69$",
    "correctIndex": 0,
    "hintEn": "With unbypassed $R_E$, negative feedback reduces gain to $A_v \\approx -R_C / (r_e + R_E) \\approx -R_C / R_E$.",
    "hintAr": "في غياب مكثف التوازي، تخفض التغذية السالبة الكسب إلى $A_v \\approx -\\frac{R_C}{r_e + R_E}$.",
    "stepByStepSolutionEn": [
      "Small-signal voltage gain is $A_v = \\frac{v_o}{v_i} = -\\frac{i_c R_C}{i_b r_\\pi + i_e R_E} \\approx -\\frac{\\alpha R_C}{r_e + R_E} \\approx -\\frac{R_C}{r_e + R_E} = -\\frac{4000}{520} \\approx -7.69$. The negative sign indicates a $180^\\circ$ phase inversion between input and output."
    ],
    "stepByStepSolutionAr": [
      "يعطى كسب الجهد بالإشارة الصغيرة بالعلاقة: $A_v \\approx -\\frac{R_C}{r_e + R_E} = -\\frac{4000}{520} \\approx -7.69$. تشير الإشارة السالبة إلى قلب الطور بمقدار $180^\\circ$."
    ],
    "teacherTipEn": "An unbypassed $R_E$ trades voltage gain for significantly enhanced linearity and bandwidth.",
    "teacherTipAr": "تضحي مقاومة المشع غير المجزأة بجزء من كسب الجهد في مقابل تحسين الخطية وزيادة نطاق التردد."
  },
  {
    "id": "egbac_phys_ch4_db_med_54",
    "titleEn": "Function of the Emitter Bypass Capacitor",
    "titleAr": "وظيفة مكثف تمرير (توازي) المشع $C_E$",
    "difficulty": "medium",
    "questionEn": "What is the specific engineering purpose of connecting a bypass capacitor $C_E$ in parallel with the emitter resistor $R_E$ in a common-emitter amplifier?",
    "questionAr": "ما الغرض الهندسي الدقيق من توصيل مكثف تمرير (توازي) $C_E$ على التوازي مع مقاومة المشع $R_E$ في مكبر المشع المشترك؟",
    "optionsEn": [
      "To completely block all DC supply current from entering the transistor",
      "To short-circuit AC signal currents to ground ($X_{CE} \\approx 0$), maximizing AC voltage gain ($A_v \\approx -R_C/r_e$) while preserving DC thermal stability",
      "To eliminate the $180^\\circ$ phase inversion between input and output voltages",
      "To prevent high-frequency oscillations by generating strong magnetic fields"
    ],
    "optionsAr": [
      "منع تيار التغذية المستمر كلياً من دخول الترانزستور",
      "تأريض إشارة التيار المتناوب ($X_{CE} \\approx 0$) لتعظيم كسب الجهد المتناوب ($A_v \\approx -R_C/r_e$) مع الحفاظ الكامل على الاستقرار الحراري المستمر",
      "إلغاء فرق الطور البالغ $180^\\circ$ بين جهد الدخل وجهد الخرج",
      "منع التذبذبات عالية التردد بتوليد مجالات مغناطيسية قوية"
    ],
    "correctAnswer": "To short-circuit AC signal currents to ground ($X_{CE} \\approx 0$), maximizing AC voltage gain ($A_v \\approx -R_C/r_e$) while preserving DC thermal stability",
    "correctIndex": 1,
    "hintEn": "At signal frequencies, $C_E$ has low impedance, bypassing $R_E$ for AC only.",
    "hintAr": "عند ترددات الإشارة يكون للمكثف ممانعة منخفضة جداً فيقصر $R_E$ للمتناوب فقط.",
    "stepByStepSolutionEn": [
      "For DC, the capacitor acts as an open circuit ($X_C \\to \\infty$), leaving $R_E$ fully in the circuit to provide negative feedback and temperature stabilization of the Q-point. For AC signals, the capacitor acts as a virtual short ($X_C \\approx 0$), bypassing $R_E$ and yielding maximum AC voltage gain $A_v \\approx -R_C / r_e$."
    ],
    "stepByStepSolutionAr": [
      "في التيار المستمر يعمل المكثف كدائرة مفتوحة فتبقى $R_E$ في الدائرة لضمان الاستقرار الحراري لنقطة التشغيل. وفي التيار المتناوب يعمل المكثف كدائرة قصر تقريباً فيلغي تأثير $R_E$ ويرتفع كسب الجهد إلى $A_v \\approx -R_C / r_e$."
    ],
    "teacherTipEn": "This dual-behavior is a hallmark of analog BJT amplifier design.",
    "teacherTipAr": "يمثل هذا السلوك المزدوج ركيزة أساسية في تصميم مكبرات الترانزستور التناظرية."
  },
  {
    "id": "egbac_phys_ch4_db_med_55",
    "titleEn": "Transistor Inverter as a Switch: Saturation Condition",
    "titleAr": "الترانزستور كمفتاح: شرط التشبع",
    "difficulty": "medium",
    "questionEn": "A BJT switch controls an LED load in the collector circuit with $V_{CC} = 5.0\\text{ V}$, $R_C = 1.0\\text{ k}\\Omega$, and $V_{CE,sat} = 0.2\\text{ V}$. If the transistor has a minimum guaranteed current gain $\\beta_{min} = 40$, what minimum base current $I_{B,min}$ is required to guarantee deep saturation?",
    "questionAr": "يعمل ترانزستور كمفتاح للتحكم في حمل مجمع بجهد تغذية $V_{CC} = 5.0\\text{ V}$، ومقاومة $R_C = 1.0\\text{ k}\\Omega$، وجهد تشبع $V_{CE,sat} = 0.2\\text{ V}$. إذا كان أدنى معامل تكبير تيار مضمون هو $\\beta_{min} = 40$، فما أقل تيار قاعدة $I_{B,min}$ يضمن تشبع الترانزستور بالكامل؟",
    "optionsEn": [
      "$I_{B,min} = \\frac{5.0\\text{ V} / 1.0\\text{ k}\\Omega}{40} = 12.5\\mu\\text{A}$",
      "$I_{B,min} = 4.8\\text{ mA} \\times 40 = 192\\text{ mA}$",
      "$I_{B,min} = \\frac{I_{C,sat}}{\\beta_{min}} = \\frac{(5.0 - 0.2)\\text{ V} / 1.0\\text{ k}\\Omega}{40} = \\frac{4.8\\text{ mA}}{40} = 0.12\\text{ mA} = 120\\mu\\text{A}$",
      "$I_{B,min} = \\frac{0.2\\text{ V}}{1000\\ \\Omega} = 200\\mu\\text{A}$"
    ],
    "optionsAr": [
      "$I_{B,min} = \\frac{5.0\\text{ V} / 1.0\\text{ k}\\Omega}{40} = 12.5\\mu\\text{A}$",
      "$I_{B,min} = 4.8\\text{ mA} \\times 40 = 192\\text{ mA}$",
      "$I_{B,min} = \\frac{I_{C,sat}}{\\beta_{min}} = \\frac{(5.0 - 0.2)\\text{ V} / 1.0\\text{ k}\\Omega}{40} = \\frac{4.8\\text{ mA}}{40} = 0.12\\text{ mA} = 120\\mu\\text{A}$",
      "$I_{B,min} = \\frac{0.2\\text{ V}}{1000\\ \\Omega} = 200\\mu\\text{A}$"
    ],
    "correctAnswer": "$I_{B,min} = \\frac{I_{C,sat}}{\\beta_{min}} = \\frac{(5.0 - 0.2)\\text{ V} / 1.0\\text{ k}\\Omega}{40} = \\frac{4.8\\text{ mA}}{40} = 0.12\\text{ mA} = 120\\mu\\text{A}$",
    "correctIndex": 2,
    "hintEn": "First calculate $I_{C,sat} = (V_{CC} - V_{CE,sat})/R_C$, then divide by $\\beta_{min}$.",
    "hintAr": "احسب تيار التشبع أولاً: $I_{C,sat} = (5.0 - 0.2)/1000 = 4.8\\text{ mA}$، ثم اقسمه على $\\beta_{min}$.",
    "stepByStepSolutionEn": [
      "At saturation, collector current is $I_{C,sat} = \\frac{V_{CC} - V_{CE,sat}}{R_C} = \\frac{5.0 - 0.2}{1000} = 4.8\\text{ mA}$. To bring the transistor into saturation, base current must satisfy $I_B \\ge \\frac{I_{C,sat}}{\\beta_{min}} = \\frac{4.8\\text{ mA}}{40} = 0.12\\text{ mA} = 120\\mu\\text{A}$."
    ],
    "stepByStepSolutionAr": [
      "تيار المجمع عند التشبع هو $I_{C,sat} = \\frac{5.0 - 0.2}{1000} = 4.8\\text{ mA}$. ولضمان وصول الترانزستور لمنطقة التشبع يجب أن يتحقق الشرط $I_B \\ge \\frac{I_{C,sat}}{\\beta_{min}} = \\frac{4.8}{40} = 0.12\\text{ mA} = 120\\mu\\text{A}$."
    ],
    "teacherTipEn": "Engineers typically apply an overdrive factor of 2 to 5 ($I_B \\approx 240\\text{ to } 600\\mu\\text{A}$) to guarantee saturation across temperature.",
    "teacherTipAr": "يطبق المهندسون عادة معامل قيادة فائقة من 2 إلى 5 لضمان التشبع العميق في جميع الظروف."
  },
  {
    "id": "egbac_phys_ch4_db_med_56",
    "titleEn": "BJT Transconductance ($g_m$) Calculation",
    "titleAr": "حساب التوصيلية التبادلية (المواصلة) $g_m$ للترانزستور",
    "difficulty": "medium",
    "questionEn": "At room temperature ($V_T \\approx 26\\text{ mV}$), what is the small-signal transconductance $g_m$ of a BJT biased at a quiescent collector current $I_C = 2.6\\text{ mA}$?",
    "questionAr": "عند درجة حرارة الغرفة ($V_T \\approx 26\\text{ mV}$)، ما هي المواصلة التبادلية للإشارة الصغيرة $g_m$ لترانزستور ثنائي القطبية عند تيار مجمع هادئ $I_C = 2.6\\text{ mA}$؟",
    "optionsEn": [
      "$g_m = \\frac{V_T}{I_C} = \\frac{26}{2.6} = 10\\ \\Omega$",
      "$g_m = I_C \\times V_T = 2.6 \\times 26 = 67.6\\text{ mW}$",
      "$g_m = \\frac{1}{2.6\\text{ mA}} \\approx 384.6\\ \\Omega$",
      "$g_m = \\frac{I_C}{V_T} = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.10\\text{ A/V} = 100\\text{ mA/V (or } 100\\text{ mS)}$"
    ],
    "optionsAr": [
      "$g_m = \\frac{V_T}{I_C} = \\frac{26}{2.6} = 10\\ \\Omega$",
      "$g_m = I_C \\times V_T = 2.6 \\times 26 = 67.6\\text{ mW}$",
      "$g_m = \\frac{1}{2.6\\text{ mA}} \\approx 384.6\\ \\Omega$",
      "$g_m = \\frac{I_C}{V_T} = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.10\\text{ A/V} = 100\\text{ mA/V (أي } 100\\text{ mS)}$"
    ],
    "correctAnswer": "$g_m = \\frac{I_C}{V_T} = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.10\\text{ A/V} = 100\\text{ mA/V (or } 100\\text{ mS)}$",
    "correctIndex": 3,
    "hintEn": "Transconductance is the derivative of output current with respect to input voltage: $g_m = \\frac{dI_C}{dV_{BE}} = \\frac{I_C}{V_T}$.",
    "hintAr": "المواصلة التبادلية هي مشتقة تيار المجمع بالنسبة لجهد الدخل: $g_m = \\frac{I_C}{V_T}$.",
    "stepByStepSolutionEn": [
      "In a BJT, collector current is given by $I_C = I_S e^{V_{BE}/V_T}$. Taking the derivative with respect to $V_{BE}$ gives the transconductance: $g_m = \\frac{dI_C}{dV_{BE}} = \\frac{I_C}{V_T} = \\frac{2.6 \\times 10^{-3}\\text{ A}}{0.026\\text{ V}} = 0.1\\text{ S} = 100\\text{ mS}$."
    ],
    "stepByStepSolutionAr": [
      "يعطى تيار المجمع بالعلاقة الأسية $I_C = I_S e^{V_{BE}/V_T}$. وباشتقاقه بالنسبة لجهد القاعدة $V_{BE}$ نجد المواصلة التبادلية: $g_m = \\frac{I_C}{V_T} = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 100\\text{ mS}$."
    ],
    "teacherTipEn": "A higher $g_m$ directly translates to higher voltage gain in all BJT amplifier topologies.",
    "teacherTipAr": "تعني القيمة العالية للمواصلة التبادلية كسب جهد أكبر في جميع تشكيلات المكبرات."
  },
  {
    "id": "egbac_phys_ch4_db_med_57",
    "titleEn": "Small-Signal Base Input Resistance $r_\\pi$",
    "titleAr": "مقاومة دخل القاعدة للإشارة الصغيرة $r_\\pi$",
    "difficulty": "medium",
    "questionEn": "For a BJT amplifier with small-signal transconductance $g_m = 40\\text{ mA/V}$ and AC current gain $\\beta = 120$, what is the small-signal input resistance looking into the base ($r_\\pi$)?",
    "questionAr": "لمكبر ترانزستور ثنائي القطبية ذي مواصلة تبادلية $g_m = 40\\text{ mA/V}$ ومعامل تكبير تيار متناوب $\\beta = 120$، ما قيمة مقاومة دخل القاعدة للإشارة الصغيرة ($r_\\pi$)؟",
    "optionsEn": [
      "$r_\\pi = \\frac{\\beta}{g_m} = \\frac{120}{0.040\\text{ A/V}} = 3000\\ \\Omega = 3.0\\text{ k}\\Omega$",
      "$r_\\pi = \\beta \\times g_m = 120 \\times 0.040 = 4.8\\ \\Omega$",
      "$r_\\pi = \\frac{g_m}{\\beta} = \\frac{0.040}{120} \\approx 3.33 \\times 10^{-4}\\ \\Omega$",
      "$r_\\pi = \\frac{1}{g_m} = \\frac{1}{0.040} = 25\\ \\Omega$"
    ],
    "optionsAr": [
      "$r_\\pi = \\frac{\\beta}{g_m} = \\frac{120}{0.040\\text{ A/V}} = 3000\\ \\Omega = 3.0\\text{ k}\\Omega$",
      "$r_\\pi = \\beta \\times g_m = 120 \\times 0.040 = 4.8\\ \\Omega$",
      "$r_\\pi = \\frac{g_m}{\\beta} = \\frac{0.040}{120} \\approx 3.33 \\times 10^{-4}\\ \\Omega$",
      "$r_\\pi = \\frac{1}{g_m} = \\frac{1}{0.040} = 25\\ \\Omega$"
    ],
    "correctAnswer": "$r_\\pi = \\frac{\\beta}{g_m} = \\frac{120}{0.040\\text{ A/V}} = 3000\\ \\Omega = 3.0\\text{ k}\\Omega$",
    "correctIndex": 0,
    "hintEn": "The hybrid-$\\pi$ base resistance relates to transconductance via $r_\\pi = \\beta / g_m$.",
    "hintAr": "ترتبط مقاومة الدخل بالنموذج الهجين مع المواصلة التبادلية بالقانون: $r_\\pi = \\beta / g_m$.",
    "stepByStepSolutionEn": [
      "In the hybrid-$\\pi$ small-signal model, the AC base current is $i_b = v_{be} / r_\\pi$ and the AC collector current is $i_c = g_m v_{be} = \\beta i_b$. Equating expressions gives $g_m v_{be} = \\beta (v_{be} / r_\\pi) \\implies r_\\pi = \\frac{\\beta}{g_m} = \\frac{120}{0.040\\text{ S}} = 3000\\ \\Omega = 3.0\\text{ k}\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "في نموذج الإشارة الصغيرة $\\pi$ الهجين، يرتبط تيار القاعدة بتيار المجمع: $i_c = \\beta i_b = g_m v_{be}$. ومنها نستنتج أن $r_\\pi = \\frac{\\beta}{g_m} = \\frac{120}{0.040} = 3000\\ \\Omega = 3.0\\text{ k}\\Omega$."
    ],
    "teacherTipEn": "Note that $r_\\pi = (\\beta + 1) r_e \\approx \\beta r_e$, where $r_e = 1/g_m = 25\\ \\Omega$.",
    "teacherTipAr": "لاحظ أيضاً أن $r_\\pi \\approx \\beta r_e$ حيث $r_e = 1/g_m = 25\\ \\Omega$ و $120 \\times 25 = 3000\\ \\Omega$."
  },
  {
    "id": "egbac_phys_ch4_db_med_58",
    "titleEn": "CMOS Inverter Dynamic Power Dissipation Formula",
    "titleAr": "صيغة القدرة الديناميكية المبددة في عاكس CMOS",
    "difficulty": "medium",
    "questionEn": "A digital CMOS logic gate operating from a DC supply voltage $V_{DD} = 3.3\\text{ V}$ drives a total load capacitance $C_L = 20\\text{ pF}$ at a clock switching frequency $f = 100\\text{ MHz}$. What is the dynamic power dissipation $P_{dyn}$?",
    "questionAr": "بوابة منطقية رقمية بتقنية CMOS تعمل بجهد تغذية $V_{DD} = 3.3\\text{ V}$ وتشحن وتفرغ سعة حمل كلية $C_L = 20\\text{ pF}$ عند تردد تبديل $f = 100\\text{ MHz}$. ما مقدار القدرة الديناميكية المبددة $P_{dyn}$؟",
    "optionsEn": [
      "$P_{dyn} = C_L V_{DD} f = 20 \\times 10^{-12} \\times 3.3 \\times 10^8 = 6.6\\text{ mW}$",
      "$P_{dyn} = C_L V_{DD}^2 f = (20 \\times 10^{-12}\\text{ F}) \\times (3.3\\text{ V})^2 \\times (10^8\\text{ s}^{-1}) \\approx 21.78\\text{ mW}$",
      "$P_{dyn} = \\frac{1}{2} C_L V_{DD}^2 = \\frac{1}{2} \\times 20 \\times 10^{-12} \\times 10.89 \\approx 0.109\\text{ nW}$",
      "$P_{dyn} = V_{DD}^2 / (C_L f) \\approx 54.45\\text{ W}$"
    ],
    "optionsAr": [
      "$P_{dyn} = C_L V_{DD} f = 20 \\times 10^{-12} \\times 3.3 \\times 10^8 = 6.6\\text{ mW}$",
      "$P_{dyn} = C_L V_{DD}^2 f = (20 \\times 10^{-12}\\text{ F}) \\times (3.3\\text{ V})^2 \\times (10^8\\text{ s}^{-1}) \\approx 21.78\\text{ mW}$",
      "$P_{dyn} = \\frac{1}{2} C_L V_{DD}^2 = \\frac{1}{2} \\times 20 \\times 10^{-12} \\times 10.89 \\approx 0.109\\text{ nW}$",
      "$P_{dyn} = V_{DD}^2 / (C_L f) \\approx 54.45\\text{ W}$"
    ],
    "correctAnswer": "$P_{dyn} = C_L V_{DD}^2 f = (20 \\times 10^{-12}\\text{ F}) \\times (3.3\\text{ V})^2 \\times (10^8\\text{ s}^{-1}) \\approx 21.78\\text{ mW}$",
    "correctIndex": 1,
    "hintEn": "Dynamic power in CMOS arises from charging and discharging load capacitance: $P_{dyn} = C_L V_{DD}^2 f$.",
    "hintAr": "تنتج القدرة الديناميكية في CMOS من شحن وتفريغ مكثف الحمل: $P_{dyn} = C_L V_{DD}^2 f$.",
    "stepByStepSolutionEn": [
      "In each clock cycle, the energy drawn from the supply to charge $C_L$ is $E = C_L V_{DD}^2$ (half is stored in the capacitor and dissipated during discharge, half is lost in the PMOS pull-up). Multiplying by frequency gives the average dynamic power: $P_{dyn} = C_L V_{DD}^2 f = (20 \\times 10^{-12}) \\times (10.89) \\times (10^8) = 2.178 \\times 10^{-2}\\text{ W} = 21.78\\text{ mW}$."
    ],
    "stepByStepSolutionAr": [
      "في كل دورة ساعة، تسحب الدائرة طاقة قدرها $E = C_L V_{DD}^2$ لشحن وتفريغ المكثف. وبضربها في تردد التبديل $f$ نجد القدرة الديناميكية المبددة: $P = (20 \\times 10^{-12}) \\times (3.3)^2 \\times 10^8 = 21.78\\text{ mW}$."
    ],
    "teacherTipEn": "Reducing supply voltage $V_{DD}$ provides quadratic power savings, driving modern low-power IC design.",
    "teacherTipAr": "يوفر خفض جهد التغذية $V_{DD}$ وفراً هائلاً في استهلاك الطاقة لتناسبه مع مربع الجهد."
  },
  {
    "id": "egbac_phys_ch4_db_med_59",
    "titleEn": "Early Effect and Output Resistance in BJT",
    "titleAr": "تأثير إيرلي (Early Effect) ومقاومة الخرج في الترانزستور",
    "difficulty": "medium",
    "questionEn": "A BJT has an Early voltage $V_A = 100\\text{ V}$. If the quiescent collector current is $I_C = 2.0\\text{ mA}$, what is the small-signal output resistance $r_o$ looking into the collector?",
    "questionAr": "ترانزستور ثنائي القطبية يمتلك جهد إيرلي $V_A = 100\\text{ V}$. إذا كان تيار المجمع عند نقطة السكون $I_C = 2.0\\text{ mA}$، فما هي مقاومة الخرج للإشارة الصغيرة $r_o$ عند طرف المجمع؟",
    "optionsEn": [
      "$r_o = V_A \\times I_C = 100 \\times 0.002 = 0.2\\ \\Omega$",
      "$r_o = \\frac{I_C}{V_A} = \\frac{0.002}{100} = 20\\mu\\Omega$",
      "$r_o = \\frac{V_A + V_{CE}}{I_C} \\approx \\frac{V_A}{I_C} = \\frac{100\\text{ V}}{2.0\\text{ mA}} = 50\\text{ k}\\Omega$",
      "$r_o = \\frac{V_A}{\\beta} = \\frac{100}{100} = 1\\ \\Omega$"
    ],
    "optionsAr": [
      "$r_o = V_A \\times I_C = 100 \\times 0.002 = 0.2\\ \\Omega$",
      "$r_o = \\frac{I_C}{V_A} = \\frac{0.002}{100} = 20\\mu\\Omega$",
      "$r_o = \\frac{V_A + V_{CE}}{I_C} \\approx \\frac{V_A}{I_C} = \\frac{100\\text{ V}}{2.0\\text{ mA}} = 50\\text{ k}\\Omega$",
      "$r_o = \\frac{V_A}{\\beta} = \\frac{100}{100} = 1\\ \\Omega$"
    ],
    "correctAnswer": "$r_o = \\frac{V_A + V_{CE}}{I_C} \\approx \\frac{V_A}{I_C} = \\frac{100\\text{ V}}{2.0\\text{ mA}} = 50\\text{ k}\\Omega$",
    "correctIndex": 2,
    "hintEn": "Output resistance due to base-width modulation is modeled by $r_o \\approx V_A / I_C$.",
    "hintAr": "تُمثل مقاومة الخرج الناتجة عن تعديل عرض القاعدة بالقانون: $r_o \\approx V_A / I_C$.",
    "stepByStepSolutionEn": [
      "The Early effect (base-width modulation) gives a non-zero slope to the active region of the $I_C$-$V_{CE}$ curves. Extrapolating the curves back yields the Early voltage $-V_A$ on the voltage axis. The resulting small-signal output resistance is $r_o = \\left(\\frac{\\partial I_C}{\\partial V_{CE}}\\right)^{-1} \\approx \\frac{V_A}{I_C} = \\frac{100\\text{ V}}{2.0 \\times 10^{-3}\\text{ A}} = 50\\text{ k}\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "يؤدي تأثير إيرلي (تعديل عرض القاعدة مع تغير جهد المجمع العكسي) إلى ميل خفيف في منحنيات الخرج للمجمع. وتكون مقاومة الخرج الناتجة هي مقلوب هذا الميل: $r_o \\approx \\frac{V_A}{I_C} = \\frac{100}{0.002} = 50\\text{ k}\\Omega$."
    ],
    "teacherTipEn": "Higher Early voltage implies a more ideal constant-current source with larger $r_o$.",
    "teacherTipAr": "يدل ارتفاع جهد إيرلي على اقتراب الترانزستور من سلوك مصدر تيار مثالي بمقاومة خرج لا نهائية."
  }
],
  hots: [
  {
    "id": "egbac_phys_ch4_db_hots_01",
    "titleEn": "Ebers-Moll Reciprocity Theorem in BJT",
    "titleAr": "نظرية التبادلية لإيبرز-مول في الترانزستور ثنائي القطبية",
    "difficulty": "hots",
    "questionEn": "In the fundamental Ebers-Moll model of a bipolar junction transistor, what exact relationship connects the forward and reverse saturation currents ($I_{ES}, I_{CS}$) with the common-base current gains ($\\alpha_F, \\alpha_R$)?",
    "questionAr": "في نموذج إيبرز-مول الأساسي لترانزستور ثنائي القطبية، ما العلاقة الدقيقة التي تربط بين تياري التشبع الأمامي والعكسي ($I_{ES}, I_{CS}$) ومعاملي كسب تيار القاعدة المشتركة ($\\alpha_F, \\alpha_R$)؟",
    "optionsEn": [
      "$\\alpha_F I_{ES} = \\alpha_R I_{CS} = I_S$ (the reciprocal transport saturation current)",
      "$\\alpha_F I_{CS} = \\alpha_R I_{ES}$",
      "$\\alpha_F \\alpha_R = I_{ES} I_{CS}$",
      "$I_{ES} / \\alpha_F = I_{CS} / \\alpha_R = I_S^2$"
    ],
    "optionsAr": [
      "$\\alpha_F I_{ES} = \\alpha_R I_{CS} = I_S$ (تيار التشبع التبادلي للنقل)",
      "$\\alpha_F I_{CS} = \\alpha_R I_{ES}$",
      "$\\alpha_F \\alpha_R = I_{ES} I_{CS}$",
      "$I_{ES} / \\alpha_F = I_{CS} / \\alpha_R = I_S^2$"
    ],
    "correctAnswer": "$\\alpha_F I_{ES} = \\alpha_R I_{CS} = I_S$ (the reciprocal transport saturation current)",
    "correctIndex": 0,
    "hintEn": "Onsager reciprocity in carrier diffusion across the neutral base establishes $\\alpha_F I_{ES} = \\alpha_R I_{CS} = I_S$.",
    "hintAr": "تؤدي تبادلية أونساجر لانتشار حاملات الشحنة عبر القاعدة إلى تساوي حاصل ضرب الكسب في تيار التشبع لكلا الاتجاهين: $\\alpha_F I_{ES} = \\alpha_R I_{CS}$.",
    "stepByStepSolutionEn": [
      "The Ebers-Moll model describes BJT terminal currents under arbitrary bias. The reciprocity theorem arises directly from the symmetric Green's function for minority carrier diffusion in the neutral base: $\\alpha_F I_{ES} = \\alpha_R I_{CS} = I_S$. Here $I_S$ is the fundamental transfer saturation current dictated by base width and doping."
    ],
    "stepByStepSolutionAr": [
      "ينبثق نموذج إيبرز-مول من حل معادلة انتشار الحاملات الأقلية في منطقة القاعدة المحايدة. وتثبت نظرية التبادلية أن حاصل ضرب كسب التيار الأمامي في تيار تشبع المشع يساوي تماماً حاصل ضرب كسب التيار العكسي في تيار تشبع المجمع: $\\alpha_F I_{ES} = \\alpha_R I_{CS} = I_S$."
    ],
    "teacherTipEn": "Even though BJTs are physically asymmetric ($N_E \\gg N_C$), their transfer saturation currents obey exact reciprocity.",
    "teacherTipAr": "رغم عدم التماثل الهندسي والتطعيمي للترانزستور ($N_E \\gg N_C$)، فإن تيار النقل التبادلي يخضع بدقة لهذه العلاقة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_02",
    "titleEn": "High-Level Injection and Webster Effect in BJT Base",
    "titleAr": "الحقن عالي المستوى وتأثير وبستر في قاعدة الترانزستور",
    "difficulty": "hots",
    "questionEn": "What phenomenon occurs in a BJT operating at extremely high collector currents when the injected excess minority carrier density $\\Delta p$ in the base approaches or exceeds the background majority dopant concentration $N_B$?",
    "questionAr": "ما الظاهرة التي تحدث في الترانزستور عند تشغيله بتيارات مجمع فائقة الارتفاع عندما تقترب كثافة الحاملات الأقلية المحقونة $\\Delta p$ في القاعدة من تركيز شوائب الأغلبية $N_B$ أو تتجاوزها؟",
    "optionsEn": [
      "Complete permanent thermal melting of the silicon lattice within picoseconds",
      "The Webster effect: majority carrier accumulation sets up an internal aiding drift field, doubling the effective base diffusion coefficient while reducing current gain $\\beta$",
      "Instantaneous conversion of the transistor into a vacuum tube triode",
      "The base width expands symmetrically to infinite thickness"
    ],
    "optionsAr": [
      "انصهار حراري دائم وكامل للشبكة البلورية في غضون بيكوثانية",
      "تأثير وبستر: يسبب تجمع حاملات الأغلبية مجالاً كهربائياً داخلياً يضاعف معامل الانتشار الفعال لكنه يخفض معامل تكبير التيار $\\beta$",
      "تحول فوري للترانزستور إلى صمام ثلاثي مفرغ",
      "اتساع عرض القاعدة هندسياً إلى سمك لا نهائي"
    ],
    "correctAnswer": "The Webster effect: majority carrier accumulation sets up an internal aiding drift field, doubling the effective base diffusion coefficient while reducing current gain $\\beta$",
    "correctIndex": 1,
    "hintEn": "High-level injection invalidates low-level assumptions; majority carrier concentration increases to preserve quasi-neutrality.",
    "hintAr": "الحقن عالي المستوى يلغي فرضيات الحقن الضعيف؛ حيث تزداد حاملات الأغلبية لمعادلة الشحنة المحقونة مما ينشئ مجالاً داخلياً.",
    "stepByStepSolutionEn": [
      "Under high-level injection ($\\Delta n \\approx \\Delta p \\ge N_B$), space-charge neutrality requires majority carrier concentration to increase significantly. This creates an electric field in the base that aids minority transport, effectively doubling diffusion ($D_{eff} \\approx 2 D_n$). Concurrently, increased base charge enhances recombination and emitter-base reverse injection, causing current gain $\\beta$ to drop sharply (Webster effect)."
    ],
    "stepByStepSolutionAr": [
      "عند الحقن الكثيف ($\\Delta p \\ge N_B$)، تتجمع حاملات أغلبية إضافية لحفظ التعادل الكهربائي. ينشأ عن ذلك مجال كهربائي يسحب الشحنات ويضاعف معامل الانتشار الفعال ($D_{eff} \\approx 2 D$)، ولكن زيادة حقن القاعدة العكسي نحو المشع يؤدي إلى هبوط حاد في معامل التكبير $\\beta$، وهو ما يعرف بتأثير وبستر."
    ],
    "teacherTipEn": "High-level injection limits the maximum usable linear collector current in power BJTs.",
    "teacherTipAr": "يحدد الحقن عالي المستوى الحد الأقصى للتيار الخطي في ترانزستورات القدرة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_03",
    "titleEn": "Kirk Effect: Base Push-Out at High Current Densities",
    "titleAr": "تأثير كيرك: اندفاع القاعدة للخارج عند كثافة تيار عالية",
    "difficulty": "hots",
    "questionEn": "In a BJT operating at high collector current densities, the Kirk effect (base push-out) occurs when collector current density $J_C$ exceeds which critical threshold?",
    "questionAr": "في ترانزستور ثنائي القطبية يعمل عند كثافات تيار مجمع مرتفعة، متى يحدث تأثير كيرك (اندفاع حدود القاعدة نحو المجمع)؟",
    "optionsEn": [
      "When $J_C < q \\mu_n V_{CC} / W_B$",
      "When the temperature falls strictly below absolute zero ($0\\text{ K}$)",
      "When $J_C > q v_{sat} N_C$, where mobile electrons compensate and invert the positive fixed space charge of the collector depletion region",
      "When the collector voltage exceeds the speed of light in vacuum"
    ],
    "optionsAr": [
      "عندما تكون $J_C < q \\mu_n V_{CC} / W_B$",
      "عندما تهبط درجة الحرارة دون الصفر المطلق",
      "عندما تتجاوز كثافة التيار $J_C > q v_{sat} N_C$، حيث تعادل الإلكترونات المتحركة الشحنة الموجبة للأيونات في منطقة نضوب المجمع",
      "عندما يتجاوز جهد المجمع سرعة الضوء في الفراغ"
    ],
    "correctAnswer": "When $J_C > q v_{sat} N_C$, where mobile electrons compensate and invert the positive fixed space charge of the collector depletion region",
    "correctIndex": 2,
    "hintEn": "Kirk effect occurs when mobile carrier density $n = J_C / (q v_{sat})$ exceeds donor doping $N_C$ in the collector.",
    "hintAr": "يحدث تأثير كيرك عندما تتجاوز كثافة الإلكترونات العابرة $n = J_C / (q v_{sat})$ كثافة الشوائب المانحة $N_C$ في المجمع.",
    "stepByStepSolutionEn": [
      "At high current, electrons traverse the reverse-biased BC depletion region at saturation velocity $v_{sat}$. Their density is $n = J_C / (q v_{sat})$. When $n > N_C$, the net space charge changes from positive ($q N_C$) to negative ($q(N_C - n) < 0$). This pushes the peak electric field to the $n/n^+$ sub-collector boundary, effectively extending the neutral base into the collector region ($W_B$ increases). This base push-out drastically increases base transit time and collapses the unity-gain cutoff frequency $f_T$."
    ],
    "stepByStepSolutionAr": [
      "عند تيارات مجمع عالية، تعبر الإلكترونات منطقة استنزاف المجمع بسرعة الإشباع $v_{sat}$. عندما تتجاوز كثافتها تركيز المانحات $N_C$، تنقلب شحنة الفضاء الكلية للسالب، مما يزيح منطقة الاستنزاف بعيداً نحو المجمع ويزيد العرض الفعال للقاعدة $W_B$. يؤدي هذا التمدد إلى زيادة زمن عبور القاعدة وانهيار تردد القطع $f_T$."
    ],
    "teacherTipEn": "The Kirk effect is a primary limitation on high-frequency RF power transistors.",
    "teacherTipAr": "يمثل تأثير كيرك العائق الأكبر أمام أداء ترانزستورات القدرة الراديوية عالية التردد."
  },
  {
    "id": "egbac_phys_ch4_db_hots_04",
    "titleEn": "BJT Cutoff Frequency ($f_T$) and Base Transit Time",
    "titleAr": "تردد القطع الموحد ($f_T$) وزمن عبور القاعدة للترانزستور",
    "difficulty": "hots",
    "questionEn": "A high-frequency npn BJT has an effective neutral base width $W_B = 0.20\\mu\\text{m}$ and electron diffusion coefficient $D_n = 20\\text{ cm}^2/\\text{s}$. If the total emitter-to-collector delay is dominated by base transit time $\\tau_B = \\frac{W_B^2}{2 D_n}$, what is the base transit time and corresponding cutoff frequency $f_T \\approx \\frac{1}{2\\pi \\tau_B}$?",
    "questionAr": "ترانزستور npn عالي التردد له عرض قاعدة محايدة فعال $W_B = 0.20\\mu\\text{m}$ ومعامل انتشار للإلكترونات $D_n = 20\\text{ cm}^2/\\text{s}$. إذا كان زمن التأخير الكلي محكوماً بزمن عبور القاعدة $\\tau_B = \\frac{W_B^2}{2 D_n}$، فما زمن عبور القاعدة وتردد القطع المقابل $f_T \\approx \\frac{1}{2\\pi \\tau_B}$؟",
    "optionsEn": [
      "$\\tau_B = 1.0\\text{ ns}$ and $f_T \\approx 159\\text{ MHz}$",
      "$\\tau_B = 100\\text{ ps}$ and $f_T \\approx 1.59\\text{ GHz}$",
      "$\\tau_B = 2.0\\mu\\text{s}$ and $f_T \\approx 80\\text{ kHz}$",
      "$\\tau_B = 10\\text{ ps}$ and $f_T \\approx 15.9\\text{ GHz}$"
    ],
    "optionsAr": [
      "$\\tau_B = 1.0\\text{ ns}$ و $f_T \\approx 159\\text{ MHz}$",
      "$\\tau_B = 100\\text{ ps}$ و $f_T \\approx 1.59\\text{ GHz}$",
      "$\\tau_B = 2.0\\mu\\text{s}$ و $f_T \\approx 80\\text{ kHz}$",
      "$\\tau_B = 10\\text{ ps}$ و $f_T \\approx 15.9\\text{ GHz}$"
    ],
    "correctAnswer": "$\\tau_B = 10\\text{ ps}$ and $f_T \\approx 15.9\\text{ GHz}$",
    "correctIndex": 3,
    "hintEn": "Convert units carefully: $W_B = 0.20\\times 10^{-4}\\text{ cm}$, $D_n = 20\\text{ cm}^2/\\text{s}$.",
    "hintAr": "حول الوحدات للسنتيمتر: $W_B = 2 \\times 10^{-5}\\text{ cm}$. ثم طبق $\\tau_B = W_B^2 / (2 D_n)$.",
    "stepByStepSolutionEn": [
      "Base transit time is $\\tau_B = \\frac{W_B^2}{2 D_n} = \\frac{(0.20 \\times 10^{-4}\\text{ cm})^2}{2 \\times 20\\text{ cm}^2/\\text{s}} = \\frac{4.0 \\times 10^{-10}}{40} = 1.0 \\times 10^{-11}\\text{ s} = 10\\text{ ps}$. The unity-gain frequency is $f_T = \\frac{1}{2\\pi \\tau_B} = \\frac{1}{2\\pi \\times 10 \\times 10^{-12}\\text{ s}} \\approx \\frac{10^{11}}{6.283} \\approx 1.59 \\times 10^{10}\\text{ Hz} = 15.9\\text{ GHz}$."
    ],
    "stepByStepSolutionAr": [
      "زمن عبور القاعدة هو $\\tau_B = \\frac{(2 \\times 10^{-5})^2}{2 \\times 20} = 10^{-11}\\text{ s} = 10\\text{ ps}$. وتردد القطع الموحد للكسب هو $f_T = \\frac{1}{2\\pi \\tau_B} \\approx 15.9\\text{ GHz}$."
    ],
    "teacherTipEn": "Narrowing the base width quadratically reduces transit time, dramatically boosting RF bandwidth.",
    "teacherTipAr": "تقليل عرض القاعدة يقلل زمن العبور تناسباً مع مربع العرض، رافعاً النطاق الترددي بشكل هائل."
  },
  {
    "id": "egbac_phys_ch4_db_hots_05",
    "titleEn": "Miller Effect on Input Capacitance in Inverting Amplifiers",
    "titleAr": "تأثير ميلر على سعة الدخل في المكبرات العاكسة",
    "difficulty": "hots",
    "questionEn": "In a common-emitter BJT amplifier with midband inverting voltage gain $A_v = -150$, the base-collector junction depletion capacitance is $C_\\mu = 2.0\\text{ pF}$ and the base-emitter capacitance is $C_\\pi = 18\\text{ pF}$. What is the total effective small-signal input capacitance $C_{in}$ due to the Miller effect?",
    "questionAr": "في مكبر مشع مشترك ذي كسب جهد عاكس في الترددات المتوسطة $A_v = -150$، تبلغ سعة وصلة القاعدة-المجمع العكسية $C_\\mu = 2.0\\text{ pF}$ وسعة وصلة القاعدة-المشع $C_\\pi = 18\\text{ pF}$. ما إجمالي سعة الدخل الفعالة $C_{in}$ للإشارة الصغيرة بفعل تأثير ميلر؟",
    "optionsEn": [
      "$C_{in} = C_\\pi + C_\\mu(1 - A_v) = 18\\text{ pF} + 2.0\\text{ pF} \\times (1 - (-150)) = 18 + 302 = 320\\text{ pF}$",
      "$C_{in} = C_\\pi + C_\\mu = 18 + 2.0 = 20\\text{ pF}$",
      "$C_{in} = C_\\pi + \\frac{C_\\mu}{|A_v|} = 18 + \\frac{2}{150} \\approx 18.01\\text{ pF}$",
      "$C_{in} = |A_v| \\times (C_\\pi + C_\\mu) = 150 \\times 20 = 3000\\text{ pF}$"
    ],
    "optionsAr": [
      "$C_{in} = C_\\pi + C_\\mu(1 - A_v) = 18\\text{ pF} + 2.0\\text{ pF} \\times (1 - (-150)) = 18 + 302 = 320\\text{ pF}$",
      "$C_{in} = C_\\pi + C_\\mu = 18 + 2.0 = 20\\text{ pF}$",
      "$C_{in} = C_\\pi + \\frac{C_\\mu}{|A_v|} = 18 + \\frac{2}{150} \\approx 18.01\\text{ pF}$",
      "$C_{in} = |A_v| \\times (C_\\pi + C_\\mu) = 150 \\times 20 = 3000\\text{ pF}$"
    ],
    "correctAnswer": "$C_{in} = C_\\pi + C_\\mu(1 - A_v) = 18\\text{ pF} + 2.0\\text{ pF} \\times (1 - (-150)) = 18 + 302 = 320\\text{ pF}$",
    "correctIndex": 0,
    "hintEn": "Miller's theorem multiplies bridging feedback capacitance by $(1 - A_v) = (1 + |A_v|)$.",
    "hintAr": "تضرب نظرية ميلر سعة التغذية الراجعة بين الدخل والخرج في المعامل $(1 - A_v) = (1 + |A_v|)$.",
    "stepByStepSolutionEn": [
      "The feedback capacitor $C_\\mu$ connected between input (base) and output (collector) carries current $i = \\omega C_\\mu (v_{in} - v_{out}) = \\omega C_\\mu v_{in} (1 - A_v)$. Thus, the effective capacitance looking into the input node is $C_M = C_\\mu(1 - A_v) = 2.0\\text{ pF}(1 + 150) = 302\\text{ pF}$. Total input capacitance is $C_{in} = C_\\pi + C_M = 18 + 302 = 320\\text{ pF}$."
    ],
    "stepByStepSolutionAr": [
      "توصل السعة $C_\\mu$ بين القاعدة والمجمع. بتطبيق نظرية ميلر، تنعكس هذه السعة على الدخل مضخمة: $C_M = C_\\mu (1 - A_v) = 2.0 \\times 151 = 302\\text{ pF}$. وتكون سعة الدخل الكلية $C_{in} = C_\\pi + C_M = 18 + 302 = 320\\text{ pF}$."
    ],
    "teacherTipEn": "The large Miller capacitance creates a dominant pole, severely limiting high-frequency gain.",
    "teacherTipAr": "تخلق سعة ميلر الكبيرة قطباً مهيمناً يخفض كسب الدائرة بشكل حاد عند الترددات العالية."
  },
  {
    "id": "egbac_phys_ch4_db_hots_06",
    "titleEn": "BJT Storage Time in Saturated Switching Circuits",
    "titleAr": "زمن التخزين للترانزستور في دوائر التبديل المشبعة",
    "difficulty": "hots",
    "questionEn": "When an npn transistor switching between ON (deep saturation) and OFF is driven with a reverse turn-off base current $I_{B2} < 0$, what determines the storage time delay $t_s$ before the collector current begins to decay?",
    "questionAr": "عند إطفاء ترانزستور يعمل في حالة التشبع العميق بتطبيق تيار قاعدة عكسي $I_{B2} < 0$، ما الذي يحدد زمن التخزين $t_s$ قبل أن يبدأ تيار المجمع في الانخفاض؟",
    "optionsEn": [
      "The time taken for mechanical sound waves to traverse the transistor package",
      "The time required to remove excess minority carrier charge stored in the neutral base and collector regions ($t_s = \\tau_s \\ln\\left[\\frac{I_{B1} - I_{B2}}{I_{Csat}/\\beta - I_{B2}}\\right]$)",
      "The time required for all silicon atoms to ionize into free protons",
      "The speed of light divided by the emitter contact wire thickness"
    ],
    "optionsAr": [
      "الزمن اللازم لانتقال الموجات الصوتية الميكانيكية عبر غلاف الترانزستور",
      "الزمن اللازم لإزالة شحنة الحاملات الأقلية الزائدة المخزنة في منطقتي القاعدة والمجمع ($t_s = \\tau_s \\ln\\left[\\frac{I_{B1} - I_{B2}}{I_{Csat}/\\beta - I_{B2}}\\right]$)",
      "الزمن اللازم لتأين ذرات السيليكون إلى بروتونات حرة",
      "سرعة الضوء مقسومة على سمك سلك توصيل المشع"
    ],
    "correctAnswer": "The time required to remove excess minority carrier charge stored in the neutral base and collector regions ($t_s = \\tau_s \\ln\\left[\\frac{I_{B1} - I_{B2}}{I_{Csat}/\\beta - I_{B2}}\\right]$)",
    "correctIndex": 1,
    "hintEn": "In saturation, excess charge $Q_s$ must be evacuated before the BC junction becomes reverse-biased.",
    "hintAr": "في التشبع، يجب سحب الشحنة الزائدة $Q_s$ أولاً قبل أن تعود وصلة القاعدة-المجمع للانحياز العكسي.",
    "stepByStepSolutionEn": [
      "In deep saturation, both BE and BC junctions are forward biased, storing excess minority carrier charge $Q_s = \\tau_s (I_{B1} - I_{Csat}/\\beta)$ in the base. When switching OFF, collector current remains clamped at $I_{Csat}$ until this excess charge is completely extracted by reverse current $I_{B2}$ and internal recombination. This causes storage delay $t_s = \\tau_s \\ln\\left(\\frac{I_{B1} - I_{B2}}{I_{Csat}/\\beta - I_{B2}}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "في التشبع العميق، تُخزن شحنة أقلية هائلة في القاعدة. وعند إطفاء الترانزستور، لا يهبط تيار المجمع فوراً، بل يظل ثابتاً حتى يتم كسح هذه الشحنات المخزنة بواسطة التيار العكسي $I_{B2}$ وإعادة الالتحام. يسمى هذا التأخير بزمن التخزين $t_s$."
    ],
    "teacherTipEn": "Schottky-clamped BJTs (74S / 74LS TTL) prevent saturation entirely, virtually eliminating $t_s$.",
    "teacherTipAr": "تمنع ترانزستورات شوتكي وصول الترانزستور للتشبع، مما يقضي تماماً على زمن التخزين."
  },
  {
    "id": "egbac_phys_ch4_db_hots_07",
    "titleEn": "Quantum Mechanical Tunneling in Degenerate Tunnel Diodes",
    "titleAr": "الأنفاقية الكمية في دايود الأنفاق (دايود إيساكي) عالي التطعيم",
    "difficulty": "hots",
    "questionEn": "A tunnel diode (Esaki diode) exhibits Negative Differential Resistance (NDR) in a portion of its forward $I$-$V$ characteristic. What physical condition enables quantum tunneling to occur across its pn junction?",
    "questionAr": "يُظهر دايود الأنفاق (دايود إيساكي) مقاومة تفاضلية سالبة (NDR) في جزء من منحنى خواصه الأمامي. ما الشرط الفيزيائي الذي يسمح بحدوث الأنفاقية الكمية عبر وصلته؟",
    "optionsEn": [
      "Operating the diode inside an absolute vacuum at temperatures exceeding $2000^\\circ\\text{C}$",
      "Using an intrinsic semiconductor crystal with zero dopant impurities",
      "Extremely heavy (degenerate) doping ($N_A, N_D > 10^{19}\\text{ cm}^{-3}$) on both sides, making the depletion width ultra-thin ($W < 10\\text{ nm}$) and aligning the conduction band of the n-side with empty states in the valence band of the p-side",
      "Applying a high-frequency acoustic sound wave to vibrate the chemical bonds"
    ],
    "optionsAr": [
      "تشغيل الدايود داخل فراغ مطلق عند حرارة تتجاوز $2000^\\circ\\text{C}$",
      "استخدام بلورة شبه موصل نقي خالية تماماً من الشوائب",
      "تطعيم عالي جداً (تطاول/انحلال) على الجانبين ($N_A, N_D > 10^{19}\\text{ cm}^{-3}$) يجعل عرض النضوب فائق الرقة ($W < 10\\text{ nm}$) مع محاذاة حزمة التوصيل بالجانب n مع حالات فارغة في حزمة التكافؤ بالجانب p",
      "تطبيق موجة صوتية عالية التردد لهز الروابط الكيميائية"
    ],
    "correctAnswer": "Extremely heavy (degenerate) doping ($N_A, N_D > 10^{19}\\text{ cm}^{-3}$) on both sides, making the depletion width ultra-thin ($W < 10\\text{ nm}$) and aligning the conduction band of the n-side with empty states in the valence band of the p-side",
    "correctIndex": 2,
    "hintEn": "Tunneling requires degenerate doping pushing Fermi levels into bands and a barrier $< 10\\text{ nm}$.",
    "hintAr": "تتطلب الأنفاقية الكمية تطعيماً فائقاً يدخل مستوى فيرمي داخل الحزم وحاجز نضوب رقيقاً جداً أقل من 10 نانومتر.",
    "stepByStepSolutionEn": [
      "In degenerate semiconductors, the Fermi level lies within the conduction band on the n-side and within the valence band on the p-side. The ultra-narrow barrier ($W < 10\\text{ nm}$) allows electrons to quantum-tunnel directly through the forbidden gap without acquiring thermal activation energy. As forward bias increases, filled states un-align with available empty states, causing current to drop from peak ($I_P$) to valley ($I_V$), producing NDR."
    ],
    "stepByStepSolutionAr": [
      "في أشباه الموصلات المنحلة، يقع مستوى فيرمي داخل حزمتي التوصيل والتكافؤ. وبسبب ضيق حاجز النضوب الشديد ($<10\\text{ nm}$)، تنفذ الإلكترونات نفقياً عبر فجوة الطاقة المحظورة. وعند زيادة الجهد تنفصل الحزم المحاذاة، فيهبط التيار من القمة إلى القاع مولداً مقاومة ديناميكية سالبة."
    ],
    "teacherTipEn": "The NDR property makes tunnel diodes suitable for microwave oscillators and ultra-fast switches.",
    "teacherTipAr": "تتيح خاصية المقاومة السالبة استخدام دايود الأنفاق في مذبذبات الميكروويف والتبديل فائق السرعة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_08",
    "titleEn": "Avalanche Photodiode (APD) Multiplication Factor",
    "titleAr": "معامل التضاعف في الدايود الضوئي الانهياري (APD)",
    "difficulty": "hots",
    "questionEn": "An Avalanche Photodiode (APD) operates under high reverse bias near breakdown $V_{BD} = 100\\text{ V}$. Using Miller's empirical relation for the multiplication factor $M = \\frac{1}{1 - (V_R / V_{BD})^n}$ with exponent $n = 3$, what is the internal photocurrent gain $M$ at an operating reverse voltage $V_R = 98\\text{ V}$?",
    "questionAr": "يعمل دايود ضوئي انهياري (APD) تحت انحياز عكسي كبير قرب جهد الانهيار $V_{BD} = 100\\text{ V}$. باستخدام صيغة ميلر التجريبية لمعامل التضاعف $M = \\frac{1}{1 - (V_R / V_{BD})^n}$ بأس $n = 3$، ما كسب التيار الداخلي $M$ عند جهد تشغيل عكسي $V_R = 98\\text{ V}$؟",
    "optionsEn": [
      "$M = \\frac{98}{100} = 0.98$",
      "$M = 1 - 0.98 = 0.02$",
      "$M = (98 \\times 3) / 100 = 2.94$",
      "$M = \\frac{1}{1 - (0.98)^3} = \\frac{1}{1 - 0.941192} \\approx \\frac{1}{0.0588} \\approx 17.0$"
    ],
    "optionsAr": [
      "$M = \\frac{98}{100} = 0.98$",
      "$M = 1 - 0.98 = 0.02$",
      "$M = (98 \\times 3) / 100 = 2.94$",
      "$M = \\frac{1}{1 - (0.98)^3} = \\frac{1}{1 - 0.941192} \\approx \\frac{1}{0.0588} \\approx 17.0$"
    ],
    "correctAnswer": "$M = \\frac{1}{1 - (0.98)^3} = \\frac{1}{1 - 0.941192} \\approx \\frac{1}{0.0588} \\approx 17.0$",
    "correctIndex": 3,
    "hintEn": "Calculate $(V_R/V_{BD})^3 = (0.98)^3 \\approx 0.9412$, then $M = 1 / (1 - 0.9412)$.",
    "hintAr": "احسب $(0.98)^3 \\approx 0.9412$ أولاً، ثم عوض في صيغة ميلر: $M = 1 / (1 - 0.9412)$.",
    "stepByStepSolutionEn": [
      "Miller's multiplication equation models impact ionization: $M = \\frac{1}{1 - (V_R / V_{BD})^n}$. Here, $V_R / V_{BD} = 98 / 100 = 0.98$. Raising to the power $n = 3$: $(0.98)^3 \\approx 0.941192$. Then $1 - (0.98)^3 \\approx 0.058808$. Thus, $M = \\frac{1}{0.058808} \\approx 17.0$. The primary photocurrent is amplified by a factor of 17 via carrier impact ionization."
    ],
    "stepByStepSolutionAr": [
      "تصف معادلة ميلر التأين الصدمي: $M = \\frac{1}{1 - (98/100)^3} = \\frac{1}{1 - 0.9412} \\approx 17.0$. يؤدي هذا إلى تضخيم التيار الضوئي الأولي 17 مرة داخلياً بفضل التأين الصدمي للإلكترونات المتسارعة في المجال الكهربائي الشديد."
    ],
    "teacherTipEn": "APDs provide high sensitivity for long-haul fiber-optic receivers and LIDAR systems.",
    "teacherTipAr": "توفر دايودات APD حساسية فائقة في استقبال اتصالات الألياف الضوئية وأنظمة الليدار."
  },
  {
    "id": "egbac_phys_ch4_db_hots_09",
    "titleEn": "Parasitic Resistances in Solar Cells ($R_s$ and $R_{sh}$)",
    "titleAr": "المقاومات الطفيلية في الخلايا الشمسية (مقاومة التوالي والتوازي)",
    "difficulty": "hots",
    "questionEn": "In the practical equivalent circuit model of a solar cell, what are the distinct degrading effects of parasitic series resistance $R_s$ and shunt resistance $R_{sh}$ on the $I$-$V$ characteristic?",
    "questionAr": "في نموذج الدائرة المكافئة العملية للخلية الشمسية، ما الآثار السلبية المميزة لكل من مقاومة التوالي الطفيلية $R_s$ ومقاومة التوازي $R_{sh}$ على منحنى الخواص $I$-$V$؟",
    "optionsEn": [
      "Increased $R_s$ degrades the slope near $V_{oc}$ and reduces short-circuit current, while decreased $R_{sh}$ provides a leakage path that degrades the slope near $I_{sc}$ and reduces open-circuit voltage",
      "Both $R_s$ and $R_{sh}$ increase the solar cell open-circuit voltage to over $100\\text{ V}$",
      "$R_s$ converts sunlight into sound waves while $R_{sh}$ converts sunlight into gamma rays",
      "Parasitic resistances have strictly zero impact on fill factor or power conversion efficiency"
    ],
    "optionsAr": [
      "زيادة مقاومة التوالي $R_s$ تُقلل الميل قرب $V_{oc}$ وتخفض تيار القصر، بينما انخفاض مقاومة التوازي $R_{sh}$ يوفر مسار تسريب يخفض الميل قرب $I_{sc}$ ويقلل جهد الدائرة المفتوحة",
      "ترفع كل من $R_s$ و $R_{sh}$ جهد الدائرة المفتوحة للخلية إلى أكثر من $100\\text{ V}$",
      "تحول $R_s$ الضوء إلى صوت بينما تحول $R_{sh}$ الضوء إلى أشعة غاما",
      "ليس للمقاومات الطفيلية أي تأثير على عامل الامتلاء أو كفاءة الخلية"
    ],
    "correctAnswer": "Increased $R_s$ degrades the slope near $V_{oc}$ and reduces short-circuit current, while decreased $R_{sh}$ provides a leakage path that degrades the slope near $I_{sc}$ and reduces open-circuit voltage",
    "correctIndex": 0,
    "hintEn": "Ideal solar cell has $R_s = 0$ and $R_{sh} = \\infty$; deviations drastically reduce Fill Factor.",
    "hintAr": "الخلية المثالية تمتلك $R_s = 0$ و $R_{sh} = \\infty$؛ وأي انحراف عنهما يقلل عامل الامتلاء والقدرة.",
    "stepByStepSolutionEn": [
      "Series resistance $R_s$ arises from bulk semiconductor resistivity, contact resistance, and metallic grid fingers; it limits maximum current and shifts the knee of the $I$-$V$ curve to the left. Shunt resistance $R_{sh}$ arises from crystal defects and edge leakage; low $R_{sh}$ diverts photogenerated carriers away from the load, slanting the flat plateau near $I_{sc}$ and reducing $V_{oc}$. Both effects substantially reduce the Fill Factor ($FF$)."
    ],
    "stepByStepSolutionAr": [
      "تنشأ مقاومة التوالي $R_s$ من مقاومة البلورة وتوصيلات الشبكة المعدنية وتحد من أقصى تيار مستخرج. بينما تنشأ مقاومة التوازي $R_{sh}$ من عيوب البلورة وتسريب الحواف، حيث يؤدي صغرها إلى تسريب التيار الضوئي وتقليل جهد $V_{oc}$. كلا العيبين يدمران عامل الامتلاء $FF$."
    ],
    "teacherTipEn": "In high-efficiency solar cells, keeping $R_s < 0.5\\ \\Omega\\cdot\\text{cm}^2$ and $R_{sh} > 10\\text{ k}\\Omega\\cdot\\text{cm}^2$ is critical.",
    "teacherTipAr": "في الخلايا عالية الكفاءة، يُشترط بقاء $R_s < 0.5\\ \\Omega\\cdot\\text{cm}^2$ و $R_{sh} > 10\\text{ k}\\Omega\\cdot\\text{cm}^2$."
  },
  {
    "id": "egbac_phys_ch4_db_hots_10",
    "titleEn": "Heterojunction Bipolar Transistor (HBT) Advantages",
    "titleAr": "مزايا ترانزستور الوصلة غير المتجانسة (HBT)",
    "difficulty": "hots",
    "questionEn": "Why does a Heterojunction Bipolar Transistor (HBT)—utilizing a wider bandgap semiconductor for the emitter (e.g., AlGaAs) and a narrower bandgap for the base (e.g., GaAs)—fundamentally outperform a conventional homojunction BJT?",
    "questionAr": "لماذا يتفوق ترانزستور الوصلة غير المتجانسة (HBT) — الذي يستخدم مادة ذات فجوة طاقة أوسع للمشع (مثل AlGaAs) وفجوة أضيق للقاعدة (مثل GaAs) — تفوقاً جذرياً على الترانزستور المتجانس التقليدي؟",
    "optionsEn": [
      "The wide bandgap emitter allows the transistor to generate free nuclear energy continuously",
      "The valence band discontinuity ($\\Delta E_v$) creates an enormous barrier to reverse hole injection from base to emitter, allowing heavy base doping (lowering base resistance $r_b$) without degrading emitter injection efficiency $\\gamma$",
      "It eliminates the need for any collector terminal, operating as a one-terminal amplifier",
      "It allows the transistor to operate only when submerged in liquid nitrogen"
    ],
    "optionsAr": [
      "تسمح فجوة الطاقة الواسعة للترانزستور بتوليد طاقة نووية مجانية باستمرار",
      "يخلق انقطاع حزمة التكافؤ ($\\Delta E_v$) حاجزاً هائلاً يمنع حقن الفجوات العكسي من القاعدة للمشع، مما يسمح بتطعيم القاعدة بكثافة عالية جداً لتقليل مقاومتها $r_b$ دون الإضرار بكفاءة حقن المشع $\\gamma$",
      "يلغي الحاجة لطرف المجمع تماماً، ويعمل كمكبر أحادي الطرف",
      "يجعل الترانزستور يعمل فقط عند غمره في النيتروجين السائل"
    ],
    "correctAnswer": "The valence band discontinuity ($\\Delta E_v$) creates an enormous barrier to reverse hole injection from base to emitter, allowing heavy base doping (lowering base resistance $r_b$) without degrading emitter injection efficiency $\\gamma$",
    "correctIndex": 1,
    "hintEn": "In homojunctions, high $\\gamma$ requires $N_E \\gg N_B$. In HBTs, band offsets decouple $\\gamma$ from doping.",
    "hintAr": "في الوصلات المتجانسة يلزم $N_E \\gg N_B$، أما في HBT فإن فارق حزم الطاقة يحجب الحقن العكسي بغض النظر عن التطعيم.",
    "stepByStepSolutionEn": [
      "In conventional BJTs, high emitter injection efficiency $\\gamma \\approx 1$ requires $N_E \\gg N_B$, forcing low base doping and high base resistance $r_b$, which severely limits high-frequency performance. In HBTs, the bandgap difference $\\Delta E_g = \\Delta E_c + \\Delta E_v$ provides an extra electrostatic barrier $\\exp(\\Delta E_v / k_B T)$ against reverse minority injection. This allows $N_B \\gg N_E$, drastically reducing base sheet resistance and base transit time, reaching cutoff frequencies $f_{max} > 300\\text{ GHz}$."
    ],
    "stepByStepSolutionAr": [
      "في الترانزستور التقليدي يُشترط $N_E \\gg N_B$ لضمان كفاءة الحقن، مما يجعل القاعدة عالية المقاومة ويحد من التردد. في ترانزستور HBT، يشكل فارق فجوة الطاقة حاجزاً أمام الحقن العكسي، مما يتيح تطعيم القاعدة بكثافة تفوق المشع ($N_B \\gg N_E$) وخفض مقاومتها بشكل كبير والوصول لترددات تتجاوز $300\\text{ GHz}$."
    ],
    "teacherTipEn": "HBTs are dominant in mobile phone RF power amplifiers and optical communication front-ends.",
    "teacherTipAr": "تعتبر ترانزستورات HBT الركيزة الأساسية في مكبرات القدرة اللاسلكية للهواتف الذكية."
  },
  {
    "id": "egbac_phys_ch4_db_hots_11",
    "titleEn": "MOSFET Strong Inversion Condition and Threshold Voltage",
    "titleAr": "شرط الانقلاب القوي وجهد العتبة في ترانزستور MOSFET",
    "difficulty": "hots",
    "questionEn": "In an n-channel MOSFET built on a p-type silicon substrate, what electrostatic condition defines the onset of strong channel inversion (the threshold voltage $V_{th}$)?",
    "questionAr": "في ترانزستور MOSFET ذي القناة السالبة (NMOS) المبني على ركيزة سيليكونية من النوع الموجب p، ما الشرط الكهروستاتيكي الذي يُعرّف بداية الانقلاب القوي للقناة (جهد العتبة $V_{th}$)؟",
    "optionsEn": [
      "The gate voltage equals the breakdown voltage of the silicon oxide",
      "The surface potential drops strictly to zero volts",
      "The surface potential reaches twice the bulk Fermi potential ($\\phi_s = 2\\phi_B$), where the electron concentration at the semiconductor-oxide interface equals the bulk hole concentration",
      "The drain current drops to zero under all operating temperatures"
    ],
    "optionsAr": [
      "تساوي جهد البوابة مع جهد انهيار أكسيد السيليكون العازل",
      "هبوط الجهد السطحي إلى الصفر تماماً",
      "وصول الجهد السطحي إلى ضعف جهد فيرمي الحجمي ($\\phi_s = 2\\phi_B$)، حيث يتساوى تركيز الإلكترونات عند السطح مع تركيز الفجوات في قلب البلورة",
      "انعدام تيار المصب تماماً عند جميع درجات الحرارة"
    ],
    "correctAnswer": "The surface potential reaches twice the bulk Fermi potential ($\\phi_s = 2\\phi_B$), where the electron concentration at the semiconductor-oxide interface equals the bulk hole concentration",
    "correctIndex": 2,
    "hintEn": "Strong inversion occurs when electron concentration at surface $n_s$ matches substrate doping $N_A$, meaning $\\phi_s = 2\\phi_B$.",
    "hintAr": "يحدث الانقلاب القوي عندما يصبح تركيز الإلكترونات على السطح مساوياً لتركيز شوائب الركيزة الموجبة $N_A$، أي $\\phi_s = 2\\phi_B$.",
    "stepByStepSolutionEn": [
      "As positive gate voltage increases, the surface potential $\\phi_s$ bends downward. When $\\phi_s = \\phi_B$, the surface is intrinsic ($n_s = p_s = n_i$). When $\\phi_s = 2\\phi_B = 2 \\frac{k_B T}{q} \\ln\\left(\\frac{N_A}{n_i}\\right)$, the surface electron density equals the bulk acceptor concentration ($n_s = N_A$). Beyond this point, any additional gate charge is accommodated by mobile inversion electrons rather than widening the depletion region, establishing the conductive n-channel."
    ],
    "stepByStepSolutionAr": [
      "عند تطبيق جهد موجب على البوابة، تنحني حزم الطاقة لأسفل. وعندما يبلغ الجهد السطحي $\\phi_s = 2\\phi_B$، يصل تركيز الإلكترونات الحرة المتجمعة على السطح إلى تركيز شوائب الركيزة ($n_s = N_A$). بعد هذه النقطة يتوقف اتساع منطقة النضوب وتبدأ الإلكترونات في تكوين قناة التوصيل وتمرير تيار المصب."
    ],
    "teacherTipEn": "Threshold voltage expression: $V_{th} = V_{FB} + 2\\phi_B + \\frac{\\sqrt{2q\\varepsilon_s N_A(2\\phi_B)}}{C_{ox}}$.",
    "teacherTipAr": "معادلة جهد العتبة: $V_{th} = V_{FB} + 2\\phi_B + \\frac{\\sqrt{2q\\varepsilon_s N_A(2\\phi_B)}}{C_{ox}}$."
  },
  {
    "id": "egbac_phys_ch4_db_hots_12",
    "titleEn": "MOSFET Subthreshold Swing Fundamental Limit",
    "titleAr": "الحد الأساسي للميل دون العتبة في ترانزستور MOSFET",
    "difficulty": "hots",
    "questionEn": "What is the theoretical minimum thermal limit for the subthreshold swing ($S$) of a conventional MOSFET at room temperature ($T = 300\\text{ K}$), and what physical mechanism imposes this lower bound?",
    "questionAr": "ما الحد الأدنى النظري للميل دون العتبة ($S$) لترانزستور MOSFET تقليدي عند درجة حرارة الغرفة ($T = 300\\text{ K}$)، وما الآلية الفيزيائية التي تفرض هذا الحد الأدنى؟",
    "optionsEn": [
      "$S_{min} = 0\\text{ mV/decade}$, enabling instant step switching",
      "$S_{min} = 1.0\\text{ V/decade}$ regardless of temperature",
      "$S_{min} = \\frac{h c}{\\lambda} \\approx 1.24\\text{ V/dec}$",
      "$S_{min} = (\\ln 10) \\frac{k_B T}{q} \\approx 59.6\\text{ mV/decade} \\approx 60\\text{ mV/dec}$, dictated by the Boltzmann thermal distribution of carrier energies"
    ],
    "optionsAr": [
      "$S_{min} = 0\\text{ mV/decade}$، مما يسمح بتبديل فوري كالدالة الدرجية",
      "$S_{min} = 1.0\\text{ V/decade}$ مستقلاً عن درجة الحرارة",
      "$S_{min} = \\frac{h c}{\\lambda} \\approx 1.24\\text{ V/dec}$",
      "$S_{min} = (\\ln 10) \\frac{k_B T}{q} \\approx 59.6\\text{ mV/decade} \\approx 60\\text{ mV/dec}$، ويفرضه التوزيع الحراري لبولتزمان لطاقات الحاملات"
    ],
    "correctAnswer": "$S_{min} = (\\ln 10) \\frac{k_B T}{q} \\approx 59.6\\text{ mV/decade} \\approx 60\\text{ mV/dec}$, dictated by the Boltzmann thermal distribution of carrier energies",
    "correctIndex": 3,
    "hintEn": "Subthreshold swing $S = \\frac{dV_{GS}}{d(\\log_{10} I_D)} = (\\ln 10) \\frac{k_B T}{q} (1 + C_d/C_{ox})$.",
    "hintAr": "الميل دون العتبة يقيس الجهد اللازم لزيادة التيار بمقدار عقد (10 أضعاف): $S \\ge 60\\text{ mV/decade}$ عند حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "In the subthreshold region ($V_{GS} < V_{th}$), current flows by diffusion over the source-to-channel barrier: $I_D \\propto \\exp\\left(\\frac{q \\phi_s}{k_B T}\\right)$. The subthreshold swing is $S = \\frac{\\partial V_{GS}}{\\partial \\log_{10} I_D} = (\\ln 10) \\frac{k_B T}{q} \\left(1 + \\frac{C_d}{C_{ox}}\\right)$. Even with ideal gate coupling ($C_{ox} \\gg C_d$), the thermal tail of the Fermi-Dirac / Boltzmann distribution sets an unbreakable lower limit of $S = 2.303 \\times 25.86\\text{ mV} \\approx 59.6\\text{ mV/decade}$ at $300\\text{ K}$."
    ],
    "stepByStepSolutionAr": [
      "في منطقة دون العتبة، يتحرك التيار بالانتشار عبر الحاجز الحراري ويتناسب طردياً مع دالة بولتزمان الأسية. أصغر جهد يلزم لتغيير التيار بعشرة أضعاف هو $S_{min} = 2.303 \\times \\frac{k_B T}{q} \\approx 60\\text{ mV/decade}$. هذا القيد الحراري يمنع خفض جهد تشغيل المعالجات دون حدود معينة لتجنب تيار التسريب."
    ],
    "teacherTipEn": "Overcoming this 'Boltzmann tyranny' requires alternative devices like Tunnel FETs (TFETs) or Negative Capacitance FETs (NC-FETs).",
    "teacherTipAr": "يتطلب كسر هذا الحاجز تقنيات حديثة مثل ترانزستورات الأنفاقية الكمية TFET أو السعة السالبة NC-FET."
  },
  {
    "id": "egbac_phys_ch4_db_hots_13",
    "titleEn": "Drain-Induced Barrier Lowering (DIBL) in Short Channels",
    "titleAr": "انخفاض الحاجز بفعل جهد المصب (DIBL) في القنوات القصيرة",
    "difficulty": "hots",
    "questionEn": "In modern short-channel MOSFETs, what physical consequence results from Drain-Induced Barrier Lowering (DIBL)?",
    "questionAr": "في ترانزستورات MOSFET ذات القنوات القصيرة، ما النتيجة الفيزيائية المباشرة الناتجة عن ظاهرة انخفاض الحاجز بفعل جهد المصب (DIBL)؟",
    "optionsEn": [
      "High drain voltage ($V_{DS}$) extends the drain depletion region into the channel, electrostatically lowering the source-channel injection barrier and decreasing threshold voltage $V_{th}$",
      "The channel becomes completely immune to electrostatic noise",
      "The threshold voltage increases linearly towards $+100\\text{ V}$",
      "The gate oxide layer transforms into metallic copper"
    ],
    "optionsAr": [
      "يؤدي ارتفاع جهد المصب ($V_{DS}$) إلى تمدد منطقة نضوبه داخل القناة، مما يخفض حاجز الجهد بين المنبع والقناة ويهبط بجهد العتبة $V_{th}$",
      "تصبح القناة محصنة تماماً ضد أي ضوضاء كهرومغناطيسية",
      "يزداد جهد العتبة خطياً حتى يصل إلى $+100\\text{ V}$",
      "تتحول طبقة أكسيد البوابة العازلة إلى نحاس معدني موصل"
    ],
    "correctAnswer": "High drain voltage ($V_{DS}$) extends the drain depletion region into the channel, electrostatically lowering the source-channel injection barrier and decreasing threshold voltage $V_{th}$",
    "correctIndex": 0,
    "hintEn": "DIBL causes threshold voltage rolloff as drain voltage increases: $\\Delta V_{th} = -\\text{DIBL} \\times \\Delta V_{DS}$.",
    "hintAr": "تؤدي ظاهرة DIBL إلى تراجع جهد العتبة وزيادة تيار التسريب عند ارتفاع جهد المصب في القنوات النانوية.",
    "stepByStepSolutionEn": [
      "In a long-channel MOSFET, the source-channel potential barrier is modulated exclusively by the gate voltage. In short-channel devices, the drain depletion region reaches into the channel. Applying a high drain bias ($V_{DS}$) lowers the energy barrier at the source edge electrostatically, facilitating unwanted electron injection even when $V_{GS} < V_{th}$. This manifests as a drain-bias-dependent threshold voltage shift and severe subthreshold leakage."
    ],
    "stepByStepSolutionAr": [
      "في القنوات الطويلة، تتحكم البوابة بمفردها في حاجز طاقة المنبع. أما في القنوات النانوية القصيرة، يقترب المصب بشدة من المنبع، ويؤدي تطبيق جهد مصب كبير $V_{DS}$ إلى خفض حاجز الجهد عند طرف المنبع ذاتياً، مما يسبب مرور تيار تسريب حتى والبوابة مطفأة ويهبط بجهد العتبة."
    ],
    "teacherTipEn": "DIBL is quantified in $\\text{mV/V}$: $\\text{DIBL} = \\frac{V_{th}(V_{DS,low}) - V_{th}(V_{DS,high})}{V_{DS,high} - V_{DS,low}}$.",
    "teacherTipAr": "تقاس ظاهرة DIBL بوحدة $\\text{mV/V}$ وتعد مقياساً لجودة التحكم الكهروستاتيكي للبوابة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_14",
    "titleEn": "BJT Collector Breakdown: $BV_{CEO}$ versus $BV_{CBO}$",
    "titleAr": "انهيار مجمع الترانزستور: مقارنة بين $BV_{CEO}$ و $BV_{CBO}$",
    "difficulty": "hots",
    "questionEn": "Why is the open-base collector-emitter breakdown voltage $BV_{CEO}$ substantially lower than the open-emitter collector-base breakdown voltage $BV_{CBO}$ ($BV_{CEO} \\approx BV_{CBO} / \\sqrt[n]{\\beta}$)?",
    "questionAr": "لماذا يكون جهد انهيار المجمع-المشع عند فتح القاعدة $BV_{CEO}$ أقل بكثير من جهد انهيار المجمع-القاعدة عند فتح المشع $BV_{CBO}$ ($BV_{CEO} \\approx BV_{CBO} / \\sqrt[n]{\\beta}$)؟",
    "optionsEn": [
      "The emitter terminal exerts an attractive gravitational force on the collector atoms",
      "Avalanche-generated secondary carriers in the CB depletion region are injected into the base, where BJT current amplification ($\\beta$) multiplies them and feeds them back into the collector",
      "Because open-base circuits generate negative electrical resistance in the copper wires",
      "The dielectric constant of silicon drops to zero when the base is disconnected"
    ],
    "optionsAr": [
      "يمارس طرف المشع قوة تجاذب ثقالي تسحب ذرات المجمع",
      "حاملات الشحنة المتولدة بالانهيار الصاعق في منطقة استنزاف المجمع تُحقن في القاعدة، فيقوم الترانزستور بتكبيرها بمعامل الكسب $\\beta$ وإعادتها للمجمع في حلقة تغذية راجعة موجبة",
      "لأن فتح دائرة القاعدة يولد مقاومة كهربائية سالبة في أسلاك النحاس",
      "ينخفض ثابت العزل الكهربائي للسيليكون للصفر عند فصل القاعدة"
    ],
    "correctAnswer": "Avalanche-generated secondary carriers in the CB depletion region are injected into the base, where BJT current amplification ($\\beta$) multiplies them and feeds them back into the collector",
    "correctIndex": 1,
    "hintEn": "Condition for breakdown with open base is $\\alpha M = 1$, whereas for $BV_{CBO}$ it is $M \\to \\infty$.",
    "hintAr": "شرط الانهيار في حالة القاعدة المفتوحة هو $\\alpha M = 1$، بينما في المشع المفتوح يتطلب $M \\to \\infty$.",
    "stepByStepSolutionEn": [
      "Under common-emitter breakdown ($I_B = 0$), collector current is $I_C = \\frac{M I_{CBO}}{1 - \\alpha M}$. Breakdown occurs when the denominator vanishes, i.e., $\\alpha M = 1$. Since $\\alpha \\approx 1$, multiplication factor $M$ only needs to barely exceed 1 (specifically $M = 1/\\alpha = 1 + 1/\\beta$). Using Miller's formula $M = \\frac{1}{1 - (V/BV_{CBO})^n} = 1 + \\frac{1}{\\beta}$ yields $BV_{CEO} = BV_{CBO} (1 - \\alpha)^{1/n} = \\frac{BV_{CBO}}{\\beta^{1/n}}$."
    ],
    "stepByStepSolutionAr": [
      "عند فتح القاعدة ($I_B = 0$)، يعطى تيار المجمع بالعلاقة: $I_C = \\frac{M I_{CBO}}{1 - \\alpha M}$. يحدث الانهيار عندما يصبح المقام صفراً، أي $\\alpha M = 1$. وبما أن $\\alpha \\approx 1$، يكفي أن يتجاوز معامل التضاعف $M$ الواحد بقليل ($M \\approx 1 + 1/\\beta$) لبدء الانهيار، مما يجعل $BV_{CEO} \\approx BV_{CBO}/\\sqrt[n]{\\beta}$ أصغر بكثير من $BV_{CBO}$."
    ],
    "teacherTipEn": "Typically, $BV_{CEO}$ is only about $30\\%$ to $50\\%$ of $BV_{CBO}$.",
    "teacherTipAr": "عادة ما يتراوح $BV_{CEO}$ بين $30\\%$ إلى $50\\%$ فقط من قيمة $BV_{CBO}$."
  },
  {
    "id": "egbac_phys_ch4_db_hots_15",
    "titleEn": "Schottky Barrier Diode Physics and Switching Speed",
    "titleAr": "فيزياء دايود حاجز شوتكي وسرعة التبديل",
    "difficulty": "hots",
    "questionEn": "Why do metal-semiconductor Schottky barrier diodes have virtually zero reverse recovery time ($t_{rr} \\approx 0$), enabling ultra-high-speed switching in RF and power supply circuits?",
    "questionAr": "لماذا تمتلك دايودات حاجز شوتكي (معدن-شبه موصل) زمن استعادة عكسية يقارب الصفر ($t_{rr} \\approx 0$)، مما يتيح لها العمل بسرعات تبديل فائقة في دوائر التردد الراديوي ومصادر التغذية؟",
    "optionsEn": [
      "The metal anode dissolves completely during reverse bias to break the circuit",
      "Electrons travel at supersonic speeds inside the metal lattice",
      "Current conduction is entirely dominated by majority carriers (electrons in n-type Schottky) via thermionic emission, eliminating minority carrier storage and diffusion capacitance",
      "Because Schottky diodes do not contain any atoms or electrons"
    ],
    "optionsAr": [
      "يذوب مصعد المعدن كلياً أثناء الانحياز العكسي لقطع الدائرة ميكانيكياً",
      "تتحرك الإلكترونات بسرعات تفوق سرعة الصوت داخل الشبكة المعدنية",
      "يعتمد التوصيل كلياً على حاملات الأغلبية (الإلكترونات في شوتكي نوع n) عبر الانبعاث الحراري الأيوني، مما يلغي تماماً تخزين الحاملات الأقلية وسعة الانتشار",
      "لأن دايودات شوتكي لا تحتوي على أي ذرات أو إلكترونات"
    ],
    "correctAnswer": "Current conduction is entirely dominated by majority carriers (electrons in n-type Schottky) via thermionic emission, eliminating minority carrier storage and diffusion capacitance",
    "correctIndex": 2,
    "hintEn": "No minority carriers are injected across a Schottky barrier; only majority carriers participate.",
    "hintAr": "لا يتم حقن أي حاملات شحنة أقلية عبر حاجز شوتكي، بل تتدفق حاملات الأغلبية فقط عبر الانبعاث فوق الحاجز.",
    "stepByStepSolutionEn": [
      "In a standard pn junction, forward current consists of minority carrier injection across the depletion layer, accumulating a large diffusion charge $Q_d = \\tau_p I_D$ that must be removed during turn-off, causing reverse recovery delay $t_{rr}$. In a Schottky diode (metal on n-Si), forward current is governed by thermionic emission of majority electrons over the barrier into the metal. Since there is negligible minority carrier injection into the semiconductor, minority storage time is zero, making switching limited only by RC parasitic junction capacitance."
    ],
    "stepByStepSolutionAr": [
      "في وصلة pn العادية، يعتمد التيار الأمامي على حقن حاملات الأقلية التي تتراكم في البلورة وتستغرق زمناً لتفريغها عند عكس القطبية ($t_{rr}$). أما في دايود شوتكي، فيحدث التوصيل بانبعاث إلكترونات الأغلبية الساخنة فوق حاجز المعدن. ونظراً لغياب شحنة الأقلية المخزنة، ينعدم زمن الاستعادة العكسية ويكون التبديل فائق السرعة."
    ],
    "teacherTipEn": "Schottky diodes also offer a lower forward knee voltage ($0.2\\text{ to }0.3\\text{ V}$) compared to silicon pn diodes ($0.7\\text{ V}$).",
    "teacherTipAr": "يتميز دايود شوتكي أيضاً بجهد عتبة أمامي منخفض ($0.2\\text{ to }0.3\\text{ V}$) مما يقلل القدرة المبددة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_16",
    "titleEn": "Varactor Diode in Voltage-Controlled Oscillators (VCO)",
    "titleAr": "دايود السعة المتغيرة (الفاراكتور) في المذبذبات المضبوطة بالجهد",
    "difficulty": "hots",
    "questionEn": "A hyperabrupt junction varactor diode has junction capacitance modeled by $C_j(V_R) = \\frac{C_{j0}}{\\sqrt{1 + V_R / V_{bi}}}$. With $C_{j0} = 40\\text{ pF}$ and built-in potential $V_{bi} = 0.80\\text{ V}$, what is the junction capacitance at a reverse tuning voltage $V_R = 7.2\\text{ V}$, and in what ratio does it shift the resonant frequency of an LC tank?",
    "questionAr": "دايود سعة متغيرة (فاراكتور) بوصلة مفرطة التدرج تتبع سعته العلاقة $C_j(V_R) = \\frac{C_{j0}}{\\sqrt{1 + V_R / V_{bi}}}$. إذا كانت $C_{j0} = 40\\text{ pF}$ وجهد الحاجز الداخلي $V_{bi} = 0.80\\text{ V}$، فما سعة الدايود عند جهد انحياز عكسي $V_R = 7.2\\text{ V}$، وما نسبة تغير تردد الرنين لدائرة رنين LC متصلة به؟",
    "optionsEn": [
      "$C_j = 40 \\times \\sqrt{10} \\approx 126.5\\text{ pF}$; resonant frequency decreases by half",
      "$C_j = 40 - 7.2 = 32.8\\text{ pF}$; frequency stays constant",
      "$C_j = 0\\text{ pF}$; oscillations cease immediately",
      "$C_j(7.2\\text{ V}) = \\frac{40\\text{ pF}}{\\sqrt{1 + 9}} = \\frac{40}{\\sqrt{10}} \\approx 12.65\\text{ pF}$; resonant frequency increases by a factor of $\\sqrt{40 / 12.65} \\approx 1.78$"
    ],
    "optionsAr": [
      "$C_j = 40 \\times \\sqrt{10} \\approx 126.5\\text{ pF}$؛ وينخفض تردد الرنين للنصف",
      "$C_j = 40 - 7.2 = 32.8\\text{ pF}$؛ ويبقى التردد ثابتاً",
      "$C_j = 0\\text{ pF}$؛ وتتوقف التذبذبات تماماً",
      "$C_j(7.2\\text{ V}) = \\frac{40\\text{ pF}}{\\sqrt{1 + 9}} = \\frac{40}{\\sqrt{10}} \\approx 12.65\\text{ pF}$؛ ويزداد تردد الرنين بمعامل $\\sqrt{40 / 12.65} \\approx 1.78$"
    ],
    "correctAnswer": "$C_j(7.2\\text{ V}) = \\frac{40\\text{ pF}}{\\sqrt{1 + 9}} = \\frac{40}{\\sqrt{10}} \\approx 12.65\\text{ pF}$; resonant frequency increases by a factor of $\\sqrt{40 / 12.65} \\approx 1.78$",
    "correctIndex": 3,
    "hintEn": "Evaluate the term under the square root: $1 + 7.2 / 0.8 = 1 + 9 = 10$. Then $f_0 \\propto 1/\\sqrt{C_j}$.",
    "hintAr": "احسب ما تحت الجذر أولاً: $1 + 7.2 / 0.8 = 10$. وتذكر أن تردد الرنين يتناسب عكسياً مع جذر السعة: $f_0 \\propto 1/\\sqrt{C}$.",
    "stepByStepSolutionEn": [
      "The depletion capacitance under reverse bias is $C_j = \\frac{C_{j0}}{\\sqrt{1 + V_R / V_{bi}}} = \\frac{40\\text{ pF}}{\\sqrt{1 + 7.2 / 0.8}} = \\frac{40}{\\sqrt{10}} \\approx 12.65\\text{ pF}$. In an LC tank oscillator, the resonant frequency is $f_0 = \\frac{1}{2\\pi\\sqrt{L C_j}}$. As capacitance drops from $40\\text{ pF}$ to $12.65\\text{ pF}$, the resonant frequency increases by $\\sqrt{C_{j,old} / C_{j,new}} = \\sqrt{40 / 12.65} = \\sqrt{3.162} \\approx 1.78$."
    ],
    "stepByStepSolutionAr": [
      "سعة النضوب العكسية هي $C_j = \\frac{40}{\\sqrt{1 + 9}} = \\frac{40}{\\sqrt{10}} \\approx 12.65\\text{ pF}$. يعطى تردد رنين الدائرة بالقانون $f_0 = \\frac{1}{2\\pi\\sqrt{L C}}$. وبنقصان السعة، يرتفع تردد الرنين بنسبة $\\sqrt{40/12.65} \\approx 1.78$ ضعفاً."
    ],
    "teacherTipEn": "Varactors serve as voltage-variable tuning elements in FM synthesizers and Phase-Locked Loops (PLLs).",
    "teacherTipAr": "تستخدم دايودات الفاراكتور كعناصر ضبط ترددية في دوائر التوليف ومعدلات التردد FM."
  },
  {
    "id": "egbac_phys_ch4_db_hots_17",
    "titleEn": "Common-Collector (Emitter Follower) Impedance Transformation",
    "titleAr": "تحويل المعاوقة في مكبر المجمع المشترك (تابع المشع)",
    "difficulty": "hots",
    "questionEn": "In a common-collector (emitter follower) buffer amplifier with $\\beta = 100$, dynamic emitter resistance $r_e = 10\\ \\Omega$, emitter resistor $R_E = 2.0\\text{ k}\\Omega$, and load $R_L = 2.0\\text{ k}\\Omega$, what are the input resistance $R_{in(base)}$ looking into the base and the output resistance $R_{out}$ looking into the emitter (driven by a source resistance $R_S = 1.0\\text{ k}\\Omega$)?",
    "questionAr": "في مكبر عازل ذي مجمع مشترك (تابع مشع) بمعامل تكبير $\\beta = 100$، ومقاومة مشع ديناميكية $r_e = 10\\ \\Omega$، ومقاومة مشع $R_E = 2.0\\text{ k}\\Omega$، وحمل $R_L = 2.0\\text{ k}\\Omega$، ما هي مقاومة الدخل $R_{in(base)}$ ومقاومة الخرج $R_{out}$ (بفرض مقاومة المصدر $R_S = 1.0\\text{ k}\\Omega$)؟",
    "optionsEn": [
      "$R_{in(base)} \\approx (\\beta + 1)(r_e + R_E \\parallel R_L) = 101 \\times (10 + 1000) \\approx 102\\text{ k}\\Omega$; $R_{out} \\approx R_E \\parallel \\left(r_e + \\frac{R_S}{\\beta + 1}\\right) \\approx 2000 \\parallel (10 + 9.9) \\approx 19.7\\ \\Omega$",
      "$R_{in(base)} = 10\\ \\Omega$; $R_{out} = 100\\text{ k}\\Omega$",
      "$R_{in(base)} = R_E = 2.0\\text{ k}\\Omega$; $R_{out} = R_S = 1.0\\text{ k}\\Omega$",
      "$R_{in(base)} = 101\\ \\Omega$; $R_{out} = 2000\\ \\Omega$"
    ],
    "optionsAr": [
      "$R_{in(base)} \\approx (\\beta + 1)(r_e + R_E \\parallel R_L) \\approx 102\\text{ k}\\Omega$؛ و $R_{out} \\approx R_E \\parallel \\left(r_e + \\frac{R_S}{\\beta + 1}\\right) \\approx 19.7\\ \\Omega$",
      "$R_{in(base)} = 10\\ \\Omega$؛ و $R_{out} = 100\\text{ k}\\Omega$",
      "$R_{in(base)} = R_E = 2.0\\text{ k}\\Omega$؛ و $R_{out} = R_S = 1.0\\text{ k}\\Omega$",
      "$R_{in(base)} = 101\\ \\Omega$؛ و $R_{out} = 2000\\ \\Omega$"
    ],
    "correctAnswer": "$R_{in(base)} \\approx (\\beta + 1)(r_e + R_E \\parallel R_L) = 101 \\times (10 + 1000) \\approx 102\\text{ k}\\Omega$; $R_{out} \\approx R_E \\parallel \\left(r_e + \\frac{R_S}{\\beta + 1}\\right) \\approx 2000 \\parallel (10 + 9.9) \\approx 19.7\\ \\Omega$",
    "correctIndex": 0,
    "hintEn": "Emitter follower multiplies emitter load by $(\\beta+1)$ for input, and divides source resistance by $(\\beta+1)$ for output.",
    "hintAr": "يضاعف تابع المشع مقاومة الحمل عند الدخل بالمعامل $(\\beta+1)$، ويقسم مقاومة المصدر عند الخرج على $(\\beta+1)$.",
    "stepByStepSolutionEn": [
      "The emitter follower acts as an impedance transformer. The AC emitter load is $R_E \\parallel R_L = 2\\text{ k}\\Omega \\parallel 2\\text{ k}\\Omega = 1.0\\text{ k}\\Omega = 1000\\ \\Omega$. Looking into the base, this impedance is magnified: $R_{in(base)} = (\\beta + 1)(r_e + R_E \\parallel R_L) = 101 \\times 1010\\ \\Omega \\approx 102\\text{ k}\\Omega$. Looking into the emitter, source resistance $R_S$ is reduced: $R_{out} = R_E \\parallel \\left(r_e + \\frac{R_S}{\\beta + 1}\\right) = 2000 \\parallel (10 + 1000/101) = 2000 \\parallel 19.9\\ \\Omega \\approx 19.7\\ \\Omega$."
    ],
    "stepByStepSolutionAr": [
      "يعمل تابع المشع كمحول معاوقة مثالي: يرفع مقاومة الدخل لتصل إلى $102\\text{ k}\\Omega$ لتفادي تحميل مراحل الإشارة السابقة، ويخفض مقاومة الخرج إلى نحو $19.7\\ \\Omega$ ليتمكن من قيادة أحمال ثقيلة بتيار وافر."
    ],
    "teacherTipEn": "Voltage gain is slightly less than unity ($A_v \\approx 0.99$), but power and current gains are substantial.",
    "teacherTipAr": "كسب الجهد أقل قليلاً من الواحد ($A_v \\approx 0.99$)، لكن كسب التيار والقدرة كبير جداً."
  },
  {
    "id": "egbac_phys_ch4_db_hots_18",
    "titleEn": "Common-Base Amplifier RF Characteristics",
    "titleAr": "خصائص مكبر القاعدة المشتركة في الترددات الراديوية",
    "difficulty": "hots",
    "questionEn": "Why is the Common-Base (CB) amplifier architecture widely preferred over the Common-Emitter (CE) amplifier in ultra-high-frequency (UHF) RF applications?",
    "questionAr": "لماذا يُفضل معمار مكبر القاعدة المشتركة (CB) على مكبر المشع المشترك (CE) في تطبيقات الترددات الراديوية فائقة الارتفاع (UHF)؟",
    "optionsEn": [
      "The CB amplifier provides infinite input impedance and zero output impedance",
      "The base terminal is at AC ground, completely shielding input from output and eliminating the Miller multiplication of collector-base capacitance ($C_\\mu$)",
      "It operates without consuming any DC electrical power from the power supply",
      "It shifts the signal phase by exactly $3600^\\circ$ at all frequencies"
    ],
    "optionsAr": [
      "يوفر مكبر القاعدة المشتركة مقاومة دخل لا نهائية ومقاومة خرج صفرية",
      "تكون القاعدة مؤرضة لإشارات التيار المتناوب، مما يعزل الدخل تماماً عن الخرج ويقضي على مضاعفة ميلر لسعة المجمع-القاعدة ($C_\\mu$)",
      "يعمل دون استهلاك أي قدرة كهربائية مستمرة من مصدر التغذية",
      "يقلب طور الإشارة بمقدار $3600^\\circ$ عند جميع الترددات"
    ],
    "correctAnswer": "The base terminal is at AC ground, completely shielding input from output and eliminating the Miller multiplication of collector-base capacitance ($C_\\mu$)",
    "correctIndex": 1,
    "hintEn": "In CB, the bridging capacitor $C_\\mu$ connects between output and AC ground, not between input and output.",
    "hintAr": "في القاعدة المشتركة، توصل السعة $C_\\mu$ بين الخرج والأرضي مباشرة، فلا توجد سعة تغذية راجعة تسبب تأثير ميلر.",
    "stepByStepSolutionEn": [
      "In a CE amplifier, $C_\\mu$ connects between input (base) and output (collector), multiplying by $(1 - A_v)$ and creating a low-frequency dominant pole. In a CB amplifier, the input is at the emitter and the base is grounded. The capacitance $C_\\mu$ merely sits between output (collector) and AC ground, completely eliminating Miller feedback multiplication. This allows the CB amplifier to operate up to the full transistor unity-gain frequency $f_T$."
    ],
    "stepByStepSolutionAr": [
      "في مكبر المشع المشترك، تسبب السعة $C_\\mu$ بين القاعدة والمجمع تضخيماً لسعة الدخل عبر تأثير ميلر مما يحد من استجابة الترددات العالية. أما في القاعدة المشتركة، فإن تأريض القاعدة يضع $C_\\mu$ بين الخرج والأرضي مباشرة، مما يلغي التغذية الراجعة السلبية ويسمح بالعمل بكامل النطاق الترددي للترانزستور حتى $f_T$."
    ],
    "teacherTipEn": "Input impedance of CB is very low ($R_{in} \\approx r_e$), naturally matching $50\\ \\Omega$ RF cables.",
    "teacherTipAr": "تتميز القاعدة المشتركة أيضاً بمقاومة دخل منخفضة ($R_{in} \\approx r_e$) تناسب مواءمة كابلات RF المعيارية $50\\ \\Omega$."
  },
  {
    "id": "egbac_phys_ch4_db_hots_19",
    "titleEn": "Gummel Number and BJT Saturation Current Relation",
    "titleAr": "رقم غوميل (Gummel Number) وتيار تشبع الترانزستور",
    "difficulty": "hots",
    "questionEn": "In advanced semiconductor device modeling, the collector saturation current of an npn BJT is given by $I_S = \\frac{q A D_n n_i^2}{G_B}$. What does the base Gummel number $G_B$ physically represent?",
    "questionAr": "في نمذجة نبائط أشباه الموصلات المتقدمة، يعطى تيار تشبع المجمع لترانزستور npn بالعلاقة $I_S = \\frac{q A D_n n_i^2}{G_B}$. ماذا يمثل رقم غوميل للقاعدة $G_B$ فيزيائياً؟",
    "optionsEn": [
      "The number of silicon atoms per cubic centimeter in the collector",
      "The ratio of the speed of light to the thermal voltage",
      "The total integrated majority dopant charge dose per unit area across the neutral base ($G_B = \\int_0^{W_B} N_A(x)\\,dx$)",
      "The total mechanical mass of the transistor package in grams"
    ],
    "optionsAr": [
      "عدد ذرات السيليكون في السنتيمتر المكعب داخل المجمع",
      "نسبة سرعة الضوء إلى الجهد الحراري في البلورة",
      "إجمالي جرعة شوائب الأغلبية المتكاملة لكل وحدة مساحة عبر عرض القاعدة المحايدة ($G_B = \\int_0^{W_B} N_A(x)\\,dx$)",
      "الكتلة الميكانيكية الكلية لغلاف الترانزستور بالجرام"
    ],
    "correctAnswer": "The total integrated majority dopant charge dose per unit area across the neutral base ($G_B = \\int_0^{W_B} N_A(x)\\,dx$)",
    "correctIndex": 2,
    "hintEn": "Gummel number $G_B$ represents the integrated impurity profile in the base region.",
    "hintAr": "يمثل رقم غوميل التكامل المكاني لتركيز الشوائب عبر سمك القاعدة المحايدة.",
    "stepByStepSolutionEn": [
      "Minority carrier transport through a non-uniformly doped base is governed by drift and diffusion. Solving the transport equation demonstrates that the collector saturation current depends inversely on the total integrated base dopant concentration per unit area: $G_B = \\int_0^{W_B} N_A(x)\\,dx$. The saturation current is $I_S = \\frac{q A \\bar{D}_n n_i^2}{G_B}$. A higher Gummel number reduces $I_S$, requiring a higher $V_{BE}$ for the same collector current."
    ],
    "stepByStepSolutionAr": [
      "تتحكم حركة الحاملات الأقلية في القاعدة غير المنتظمة التطعيم بالانسياق والانتشار. ويثبت حل المعادلة أن تيار تشبع المجمع يتناسب عكسياً مع إجمالي تركيز الشوائب المتكامل عبر سمك القاعدة: $G_B = \\int_0^{W_B} N_A(x)\\,dx$. وتؤدي زيادة رقم غوميل إلى تقليل تيار التشبع $I_S$."
    ],
    "teacherTipEn": "The Gummel plot ($\\log I_C$ and $\\log I_B$ vs $V_{BE}$) is a standard tool for extracting $I_S$ and $G_B$.",
    "teacherTipAr": "يعد منحنى غوميل الأداة القياسية الأهم لاستخراج بارامترات النمذجة الدقيقة للترانزستور."
  },
  {
    "id": "egbac_phys_ch4_db_hots_20",
    "titleEn": "Hall Inversion and Zero Hall Coefficient Condition",
    "titleAr": "انقلاب هول وشرط انعدام معامل هول في التوصيل المختلط",
    "difficulty": "hots",
    "questionEn": "In a semiconductor exhibiting mixed conduction with both electrons and holes, the Hall coefficient is $R_H = \\frac{p \\mu_p^2 - n \\mu_n^2}{q(p \\mu_p + n \\mu_n)^2}$. Under what specific condition does the Hall coefficient vanish ($R_H = 0$)?",
    "questionAr": "في شبه موصل يُظهر توصيلاً مختلطاً بالإلكترونات والفجوات معاً، يُعطى معامل هول بالعلاقة $R_H = \\frac{p \\mu_p^2 - n \\mu_n^2}{q(p \\mu_p + n \\mu_n)^2}$. تحت أي شرط دقيق ينعدم معامل هول ($R_H = 0$)؟",
    "optionsEn": [
      "When the magnetic field strength is increased to infinity",
      "When electron concentration equals hole concentration ($n = p$)",
      "When the temperature reaches absolute zero ($T = 0\\text{ K}$)",
      "$p \\mu_p^2 = n \\mu_n^2$, meaning the hole concentration must exceed electron concentration by $p = n \\left(\\frac{\\mu_n}{\\mu_p}\\right)^2$ to balance the higher mobility of electrons"
    ],
    "optionsAr": [
      "عند زيادة شدة المجال المغناطيسي المطبق إلى ما لا نهاية",
      "عند تساوي تركيز الإلكترونات مع تركيز الفجوات ($n = p$)",
      "عند وصول درجة الحرارة إلى الصفر المطلق ($T = 0\\text{ K}$)",
      "$p \\mu_p^2 = n \\mu_n^2$، أي يجب أن يتجاوز تركيز الفجوات تركيز الإلكترونات بنسبة $p = n \\left(\\frac{\\mu_n}{\\mu_p}\\right)^2$ لمعادلة الحركية الأعلى للإلكترونات"
    ],
    "correctAnswer": "$p \\mu_p^2 = n \\mu_n^2$, meaning the hole concentration must exceed electron concentration by $p = n \\left(\\frac{\\mu_n}{\\mu_p}\\right)^2$ to balance the higher mobility of electrons",
    "correctIndex": 3,
    "hintEn": "The numerator of $R_H$ is $p \\mu_p^2 - n \\mu_n^2$. Setting it to zero yields $p / n = (\\mu_n / \\mu_p)^2$.",
    "hintAr": "بسط معامل هول هو $p \\mu_p^2 - n \\mu_n^2$. وبمساواته بالصفر نجد أن $p = n (\\mu_n / \\mu_p)^2$.",
    "stepByStepSolutionEn": [
      "Under a magnetic field, both electrons and holes are deflected toward the same face of the sample by the Lorentz force, setting up opposing Hall electric fields. Because electrons generally have substantially higher mobility than holes ($\\mu_n > \\mu_p$), an intrinsic sample ($n = p = n_i$) exhibits a negative Hall coefficient. To reach $R_H = 0$ (Hall inversion), the hole density must be heavily enriched such that $p \\mu_p^2 = n \\mu_n^2$, or $p/n = (\\mu_n / \\mu_p)^2 > 1$."
    ],
    "stepByStepSolutionAr": [
      "تحت تأثير المجال المغناطيسي، تنحرف الإلكترونات والفجوات إلى نفس الجهة من العينة بقوة لورنتز، مولدة مجالين كهربائيين متعاكسين لهول. ولأن حركية الإلكترونات أعلى من الفجوات ($\\mu_n > \\mu_p$)، فإن العينة النقية تظهر معاملاً سالباً. لكي ينعدم معامل هول، يجب زيادة تركيز الفجوات بحيث يعوض فارق مربع الحركية: $p \\mu_p^2 = n \\mu_n^2$."
    ],
    "teacherTipEn": "Measuring the Hall inversion temperature allows precise determination of the mobility ratio $b = \\mu_n / \\mu_p$.",
    "teacherTipAr": "يتيح قياس درجة حرارة انقلاب هول تحديد نسبة الحركية $b = \\mu_n / \\mu_p$ بدقة متناهية."
  },
  {
    "id": "egbac_phys_ch4_db_hots_21",
    "titleEn": "Degenerate Semiconductors and Einstein Relation Correction",
    "titleAr": "أشباه الموصلات المنحلة وتصحيح علاقة أينشتاين",
    "difficulty": "hots",
    "questionEn": "In heavily doped degenerate semiconductors where the Fermi level penetrates deep inside the conduction band, how does the ratio of diffusion coefficient to mobility ($D_n / \\mu_n$) deviate from the classical Einstein relation $k_B T / q$?",
    "questionAr": "في أشباه الموصلات المنحلة (عالية التطعيم) حيث يخترق مستوى فيرمي حزمة التوصيل، كيف تنحرف النسبة بين معامل الانتشار والحركية ($D_n / \\mu_n$) عن علاقة أينشتاين الكلاسيكية $k_B T / q$؟",
    "optionsEn": [
      "$D_n / \\mu_n$ exceeds $k_B T / q$ by a Fermi-Dirac integral ratio factor: $\\frac{D_n}{\\mu_n} = \\frac{k_B T}{q} \\frac{\\mathcal{F}_{1/2}(\\eta_F)}{\\mathcal{F}_{-1/2}(\\eta_F)} > \\frac{k_B T}{q}$",
      "$D_n / \\mu_n$ drops strictly to zero due to Pauli exclusion",
      "$D_n / \\mu_n$ becomes negative, reversing carrier diffusion",
      "The classical Einstein relation remains exact under all doping concentrations"
    ],
    "optionsAr": [
      "تتجاوز النسبة $\\frac{D_n}{\\mu_n}$ القيمة الكلاسيكية بمعامل نسبة تكاملات فيرمي-ديراك: $\\frac{D_n}{\\mu_n} = \\frac{k_B T}{q} \\frac{\\mathcal{F}_{1/2}(\\eta_F)}{\\mathcal{F}_{-1/2}(\\eta_F)} > \\frac{k_B T}{q}$",
      "تهبط النسبة إلى الصفر تماماً بسبب مبدأ استبعاد باولي",
      "تصبح النسبة سالبة مما يعكس اتجاه انتشار الشحنات",
      "تبقى علاقة أينشتاين الكلاسيكية دقيقة ومطابقة عند جميع التراكيز"
    ],
    "correctAnswer": "$D_n / \\mu_n$ exceeds $k_B T / q$ by a Fermi-Dirac integral ratio factor: $\\frac{D_n}{\\mu_n} = \\frac{k_B T}{q} \\frac{\\mathcal{F}_{1/2}(\\eta_F)}{\\mathcal{F}_{-1/2}(\\eta_F)} > \\frac{k_B T}{q}$",
    "correctIndex": 0,
    "hintEn": "Classical Einstein relation assumes Boltzmann statistics. Degeneracy requires Fermi-Dirac statistics.",
    "hintAr": "تفترض علاقة أينشتاين الكلاسيكية إحصاء بولتزمان، بينما يتطلب الانحلال تطبيق إحصاء فيرمي-ديراك.",
    "stepByStepSolutionEn": [
      "The classical relation $D/\\mu = k_B T / q$ is derived assuming Maxwell-Boltzmann distribution, valid when $E_C - E_F \\gg 3 k_B T$. In degenerate semiconductors where $E_F$ lies within the conduction band, carrier density is $n = N_C \\mathcal{F}_{1/2}(\\eta_F)$. Differentiating with respect to Fermi level yields the generalized Einstein relation: $\\frac{D_n}{\\mu_n} = \\frac{n}{q (dn/dE_F)} = \\frac{k_B T}{q} \\frac{\\mathcal{F}_{1/2}(\\eta_F)}{\\mathcal{F}_{-1/2}(\\eta_F)}$. This factor is strictly greater than 1, reflecting increased carrier kinetic energy."
    ],
    "stepByStepSolutionAr": [
      "تعتمد علاقة أينشتاين الكلاسيكية $D/\\mu = k_B T/q$ على تقريب بولتزمان. ولكن في أشباه الموصلات المنحلة، تشغل الإلكترونات حالات طاقة أعلى وفق مبدأ باولي، مما يجعل متوسط طاقتها الحركية أعلى من الطاقة الحرارية الكلاسيكية، وتصبح نسبة الانتشار للحركية أكبر من $k_B T / q$ بمقدار نسبة تكاملات فيرمي-ديراك."
    ],
    "teacherTipEn": "This correction is vital when modeling heavily doped source/drain regions and tunnel junctions.",
    "teacherTipAr": "يعد هذا التصحيح أساسياً في المحاكاة الدقيقة للمناطق عالية التطعيم في رقائق النانو."
  },
  {
    "id": "egbac_phys_ch4_db_hots_22",
    "titleEn": "Quasi-Fermi Levels in Non-Equilibrium Steady State",
    "titleAr": "مستويات شبه فيرمي في حالة الاستقرار غير المتزنة",
    "difficulty": "hots",
    "questionEn": "When a pn junction is forward-biased with a steady DC voltage $V$, what fundamental thermodynamic relation describes the carrier product $n p$ in terms of the electron and hole quasi-Fermi levels ($E_{Fn}, E_{Fp}$)?",
    "questionAr": "عند انحياز وصلة pn أمامياً بجهد مستمر ثابت $V$، ما العلاقة الديناميكية الحرارية الأساسية التي تصف حاصل ضرب الحاملات $n p$ بدلالة مستويي شبه فيرمي للإلكترونات والفجوات ($E_{Fn}, E_{Fp}$)؟",
    "optionsEn": [
      "$n p = n_i^2$ regardless of bias voltage",
      "$n p = n_i^2 \\exp\\left(\\frac{E_{Fn} - E_{Fp}}{k_B T}\\right) = n_i^2 \\exp\\left(\\frac{q V}{k_B T}\\right)$",
      "$n p = n_i^2 \\exp\\left(-\\frac{q V}{k_B T}\\right)$",
      "$n p = \\frac{E_{Fn} + E_{Fp}}{q V}$"
    ],
    "optionsAr": [
      "$n p = n_i^2$ دائماً وبصرف النظر عن جهد الانحياز",
      "$n p = n_i^2 \\exp\\left(\\frac{E_{Fn} - E_{Fp}}{k_B T}\\right) = n_i^2 \\exp\\left(\\frac{q V}{k_B T}\\right)$",
      "$n p = n_i^2 \\exp\\left(-\\frac{q V}{k_B T}\\right)$",
      "$n p = \\frac{E_{Fn} + E_{Fp}}{q V}$"
    ],
    "correctAnswer": "$n p = n_i^2 \\exp\\left(\\frac{E_{Fn} - E_{Fp}}{k_B T}\\right) = n_i^2 \\exp\\left(\\frac{q V}{k_B T}\\right)$",
    "correctIndex": 1,
    "hintEn": "Under bias, a single Fermi level splits into two quasi-Fermi levels separated by $qV$.",
    "hintAr": "عند تطبيق جهد، ينشطر مستوى فيرمي الأحادي إلى مستويي شبه فيرمي بفرق طاقة قدره $qV$.",
    "stepByStepSolutionEn": [
      "In thermal equilibrium ($V = 0$), $E_{Fn} = E_{Fp} = E_F$, and $np = n_i^2$. Under external excitation (optical illumination or forward bias $V$), the populations of conduction electrons and valence holes fall out of mutual equilibrium, splitting the chemical potential into two quasi-Fermi levels such that $n = n_i e^{(E_{Fn} - E_i)/k_B T}$ and $p = n_i e^{(E_i - E_{Fp})/k_B T}$. Multiplying gives $np = n_i^2 \\exp\\left(\\frac{E_{Fn} - E_{Fp}}{k_B T}\\right) = n_i^2 \\exp\\left(\\frac{q V}{k_B T}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "في الاتزان الحراري يتطابق مستويا فيرمي ويكون $np = n_i^2$. ولكن تحت الانحياز الأمامي أو الإضاءة، ينفصل التوازن بين الحزمتين وينشطر مستوى فيرمي إلى مستويين يفصل بينهما فرق الجهد المطبق: $E_{Fn} - E_{Fp} = qV$. ويصبح حاصل ضرب تركيز الحاملات $np = n_i^2 e^{qV/k_B T}$."
    ],
    "teacherTipEn": "The gradient of the quasi-Fermi level drives total (drift + diffusion) current: $J_n = n \\mu_n \\nabla E_{Fn}$.",
    "teacherTipAr": "يمثل انحدار مستوى شبه فيرمي القوة الدافعة للتيار الكلي (انسياق + انتشار): $J_n = n \\mu_n \\nabla E_{Fn}$."
  },
  {
    "id": "egbac_phys_ch4_db_hots_23",
    "titleEn": "Shockley-Read-Hall (SRH) Recombination Kinetics",
    "titleAr": "حركية إعادة الالتحام عبر المصائد لـ شوكلي-ريد-هول (SRH)",
    "difficulty": "hots",
    "questionEn": "According to Shockley-Read-Hall (SRH) recombination theory, at what energy level $E_t$ within the forbidden bandgap do localized deep-level defect states act as the most effective recombination centers?",
    "questionAr": "وفقاً لنظرية شوكلي-ريد-هول (SRH) لإعادة الالتحام، عند أي مستوى طاقة للمصيدة $E_t$ داخل فجوة النطاق المحظورة تعمل العيوب البلورية العميقة كأكثر مراكز الالتحام فعالية وكفاءة؟",
    "optionsEn": [
      "Directly at the conduction band edge ($E_t = E_C$)",
      "Directly at the valence band edge ($E_t = E_V$)",
      "Near the intrinsic midgap energy level ($E_t \\approx E_i$), where the trap can alternately capture an electron and a hole with equal maximum probability",
      "Deep inside the atomic core orbitals of silicon"
    ],
    "optionsAr": [
      "عند حافة حزمة التوصيل مباشرة ($E_t = E_C$)",
      "عند حافة حزمة التكافؤ مباشرة ($E_t = E_V$)",
      "قرب منتصف فجوة الطاقة الذاتية ($E_t \\approx E_i$)، حيث تمتلك المصيدة أقصى احتمال متساوٍ لاقتناص إلكترون ثم فجوة بالتناوب",
      "في مدارات قلب ذرة السيليكون الداخلية العميقة"
    ],
    "correctAnswer": "Near the intrinsic midgap energy level ($E_t \\approx E_i$), where the trap can alternately capture an electron and a hole with equal maximum probability",
    "correctIndex": 2,
    "hintEn": "Midgap states maximize the product of electron and hole capture rates.",
    "hintAr": "تحقق مستويات منتصف الفجوة أقصى معدل متوازن لاقتناص الإلكترونات والفجوات معاً.",
    "stepByStepSolutionEn": [
      "SRH recombination requires two sequential steps: capturing an electron from the conduction band, followed by capturing a hole from the valence band. Traps located near the band edges (shallow levels) readily re-emit captured carriers before capturing the complementary carrier. The denominator of the SRH rate contains $[n + n_1 + p + p_1]$ where $n_1 = n_i e^{(E_t - E_i)/k_B T}$ and $p_1 = n_i e^{(E_i - E_t)/k_B T}$. The sum $(n_1 + p_1)$ is minimized when $E_t = E_i$, maximizing the recombination rate $U_{SRH}$."
    ],
    "stepByStepSolutionAr": [
      "تتطلب عملية الالتحام عبر المصائد اقتناص إلكترون ثم اقتناص فجوة لإفنائه. فإذا كانت المصيدة قريبة من حافة حزمة التوصيل، فإنها تعيد إطلاق الإلكترون حرارياً قبل وصول فجوة. ويكون معدل الالتحام في ذروته العظمى عندما يقع مستوى المصيدة في منتصف فجوة الطاقة تماماً ($E_t \\approx E_i$) حيث يتوازن معدل الاقتناص للنوعين."
    ],
    "teacherTipEn": "Gold and platinum create midgap states in silicon, intentionally used as lifetime killers in fast switches.",
    "teacherTipAr": "تخلق شوائب الذهب والبلاتين مستويات في منتصف الفجوة في السيليكون لتقليل زمن بقاء الحاملات وتسريع التبديل."
  },
  {
    "id": "egbac_phys_ch4_db_hots_24",
    "titleEn": "Auger Recombination Mechanism at High Carrier Densities",
    "titleAr": "آلية إعادة الالتحام لأوجيه عند كثافات الحاملات العالية",
    "difficulty": "hots",
    "questionEn": "What is the defining characteristic of Auger recombination, and why does it dominate carrier lifetime at very high doping or carrier injection levels?",
    "questionAr": "ما هي السمة المميزة لإعادة الالتحام لـ أوجيه (Auger Recombination)، ولماذا تهيمن على زمن بقاء الحاملات عند مستويات التطعيم أو الحقن الكثيف جداً؟",
    "optionsEn": [
      "It produces a high-energy laser photon for every recombining electron",
      "It violates conservation of energy by destroying mass",
      "It occurs exclusively at temperatures near absolute zero",
      "It is a three-particle interaction where an electron and hole recombine and transfer the released energy and momentum to a third carrier (electron or hole), making the rate scale cubically with carrier concentration ($R_{Auger} \\propto n^2 p \\text{ or } n p^2$)"
    ],
    "optionsAr": [
      "يولد فوتون ليزر عالي الطاقة لكل إلكترون يلتحم",
      "ينتهك قانون حفظ الطاقة عن طريق إفناء الكتلة",
      "يحدث حصرياً عند درجات حرارة قريبة من الصفر المطلق",
      "هو تفاعل ثلاثي الجسيمات حيث يلتحم إلكترون وفجوة وتنتقل الطاقة والزخم الناتجين إلى جسيم ثالث (إلكترون أو فجوة)، مما يجعل معدل الالتحام يتناسب تكعيبياً مع تركيز الحاملات ($R_{Auger} \\propto n^2 p \\text{ أو } n p^2$)"
    ],
    "correctAnswer": "It is a three-particle interaction where an electron and hole recombine and transfer the released energy and momentum to a third carrier (electron or hole), making the rate scale cubically with carrier concentration ($R_{Auger} \\propto n^2 p \\text{ or } n p^2$)",
    "correctIndex": 3,
    "hintEn": "Auger is a non-radiative 3-body collision process; rate scales as $C_n n^2 p + C_p n p^2$.",
    "hintAr": "التحام أوجيه هو تصادم ثلاثي غير إشعاعي تتناسب سرعته مع مكعب تركيز الشحنات.",
    "stepByStepSolutionEn": [
      "Unlike radiative (two-particle, $R \\propto np$) or SRH ($R \\propto \\Delta n$) recombination, Auger recombination involves three particles. When an electron recombines with a hole, the bandgap energy is transferred non-radiatively to a second conduction electron (which thermalizes back down) or to a valence hole. Because the event requires two electrons and one hole (eeh process) or one electron and two holes (ehh process), its rate is $R_{Auger} = C_n n^2 p + C_p n p^2$. At high densities ($n > 10^{18}\\text{ cm}^{-3}$), this cubic dependence causes Auger to dwarf all other recombination mechanisms."
    ],
    "stepByStepSolutionAr": [
      "على عكس الالتحام الإشعاعي (الذي يتطلب تصادم جسيمين وينتج فوتوناً)، فإن التحام أوجيه تصادم ثلاثي: يلتحم إلكترون مع فجوة وتنتقل الطاقة الناتجة كطاقة حركية لإلكترون ثالث يقفز لأعلى الحزمة ثم يفقدها كحرارة. ولأنه يعتمد على التصادم المتزامن لثلاثة جسيمات، فإن معدله يتناسب مع $n^2 p$ أو $n p^2$، مما يجعله المهيمن المطلق في التركيزات العالية جداً."
    ],
    "teacherTipEn": "Auger recombination is the primary cause of 'efficiency droop' in high-power blue InGaN LEDs.",
    "teacherTipAr": "يعد التحام أوجيه السبب الرئيسي لظاهرة تراجع كفاءة الدايودات المشعة للضوء (LED) عند التيارات العالية."
  },
  {
    "id": "egbac_phys_ch4_db_hots_25",
    "titleEn": "Surface Recombination Velocity and Solar Cell Spectral Response",
    "titleAr": "سرعة الالتحام السطحي والاستجابة الطيفية للخلية الشمسية",
    "difficulty": "hots",
    "questionEn": "How does a high surface recombination velocity ($s$) at the front illuminated surface of a solar cell specifically degrade its short-wavelength (blue/UV) spectral response?",
    "questionAr": "كيف تؤدي سرعة الالتحام السطحي العالية ($s$) عند السطح الأمامي المضاء للخلية الشمسية إلى تدهور استجابتها الطيفية للأطوال الموجية القصيرة (الضوء الأزرق وفوق البنفسجي) بشكل خاص؟",
    "optionsEn": [
      "Short-wavelength photons have high absorption coefficients and generate electron-hole pairs within nanometers of the surface, where high $s$ annihilates them before they can diffuse to the pn junction",
      "Short-wavelength photons pass through the solar cell completely without being absorbed",
      "High $s$ permanently reflects all visible light back into outer space",
      "It causes the open-circuit voltage to become negative"
    ],
    "optionsAr": [
      "تمتلك الفوتونات قصيرة الموجة معامل امتصاص كبيراً فتولد أزواج إلكترون-فجوة على بعد نانومترات من السطح، حيث تفنيها سرعة الالتحام السطحي العالية قبل انتشارها للوصلة",
      "تنفذ الفوتونات قصيرة الموجة عبر الخلية بالكامل دون أي امتصاص",
      "تعكس سرعة الالتحام العالية كل الضوء المرئي إلى الفضاء الخارجي",
      "تجعل جهد الدائرة المفتوحة قيمة سالبة"
    ],
    "correctAnswer": "Short-wavelength photons have high absorption coefficients and generate electron-hole pairs within nanometers of the surface, where high $s$ annihilates them before they can diffuse to the pn junction",
    "correctIndex": 0,
    "hintEn": "Blue light is absorbed near the front surface ($x \\approx 0$); red light penetrates deeply into the bulk.",
    "hintAr": "يمتص الضوء الأزرق في الطبقة السطحية الرقيقة الأولى ($x \\approx 0$) بينما ينفذ الضوء الأحمر عميقاً في قلب البلورة.",
    "stepByStepSolutionEn": [
      "The optical absorption coefficient $\\alpha(\\lambda)$ of silicon rises steeply with photon energy ($> 10^5\\text{ cm}^{-1}$ in the blue/UV). Consequently, high-energy blue photons are absorbed within a fraction of a micron from the front surface. At the surface, dangling bonds create high trap densities characterized by surface recombination velocity $s$. The boundary condition is $D_n \\frac{\\partial \\Delta n}{\\partial x}\\Big|_{surface} = s \\Delta n(0)$. A high $s$ acts as a carrier sink, recombining surface-generated photocarriers and destroying the blue internal quantum efficiency (IQE)."
    ],
    "stepByStepSolutionAr": [
      "يمتلك الضوء الأزرق معامل امتصاص ضخم في السيليكون، مما يجعل امتصاصه وتوليد الشحنات محصوراً في النانومترات الأولى من السطح. عند السطح توجد روابط ذرية غير مكتملة تمثل مراكز التحام شرهة تقاس سرعتها بـ $s$. فإذا كانت $s$ عالية، تُفنى كل الشحنات المولدة بالضوء الأزرق فوراً على السطح قبل أن تتمكن من الوصول لمجال استنزاف الوصلة."
    ],
    "teacherTipEn": "Passivation dielectric coatings ($\\text{SiO}_2$, $\\text{SiN}_x$, or $\\text{Al}_2\\text{O}_3$) reduce $s$ from $10^6\\text{ cm/s}$ to $< 10\\text{ cm/s}$.",
    "teacherTipAr": "تستخدم طبقات التخميل العازلة للحد من روابط السطح وخفض سرعة الالتحام من مليون إلى أقل من 10 cm/s."
  },
  {
    "id": "egbac_phys_ch4_db_hots_26",
    "titleEn": "Diode Forward Voltage Temperature Coefficient",
    "titleAr": "المعامل الحراري لجهد الانحياز الأمامي للدايود",
    "difficulty": "hots",
    "questionEn": "When a silicon pn junction diode carries a constant forward DC current $I_D$, what is its typical temperature coefficient of forward voltage ($\\frac{dV_D}{dT}$), and what physical factor drives this variation?",
    "questionAr": "عندما يمر في دايود سيليكوني تيار أمامي مستمر ثابت $I_D$، ما هي القيمة النموذجية للمعامل الحراري لجهد الانحياز الأمامي ($\\frac{dV_D}{dT}$)، وما العامل الفيزيائي المسؤول عن هذا التغير؟",
    "optionsEn": [
      "$\\frac{dV_D}{dT} \\approx +2.0\\text{ V/}^\\circ\\text{C}$, increasing linearly with temperature",
      "$\\frac{dV_D}{dT} \\approx -2.0\\text{ mV/}^\\circ\\text{C}$, driven primarily by the strong exponential increase of the intrinsic carrier concentration $n_i^2(T) \\propto T^3 \\exp(-E_g / k_B T)$ with temperature",
      "$\\frac{dV_D}{dT} = 0\\text{ mV/}^\\circ\\text{C}$, completely temperature independent",
      "$\\frac{dV_D}{dT} \\approx -100\\text{ mV/}^\\circ\\text{C}$"
    ],
    "optionsAr": [
      "$\\frac{dV_D}{dT} \\approx +2.0\\text{ V/}^\\circ\\text{C}$، ويتزايد خطياً مع درجة الحرارة",
      "$\\frac{dV_D}{dT} \\approx -2.0\\text{ mV/}^\\circ\\text{C}$، ويعود سببه الرئيسي إلى الزيادة الأسية الهائلة في تركيز الحاملات الذاتية $n_i^2(T) \\propto T^3 \\exp(-E_g / k_B T)$ مع الحرارة",
      "$\\frac{dV_D}{dT} = 0\\text{ mV/}^\\circ\\text{C}$، مستقل تماماً عن درجة الحرارة",
      "$\\frac{dV_D}{dT} \\approx -100\\text{ mV/}^\\circ\\text{C}$"
    ],
    "correctAnswer": "$\\frac{dV_D}{dT} \\approx -2.0\\text{ mV/}^\\circ\\text{C}$, driven primarily by the strong exponential increase of the intrinsic carrier concentration $n_i^2(T) \\propto T^3 \\exp(-E_g / k_B T)$ with temperature",
    "correctIndex": 1,
    "hintEn": "Forward voltage has a negative tempco of approx $-2\\text{ mV/}^\\circ\\text{C}$ at constant current.",
    "hintAr": "جهد الدايود الأمامي يمتلك معاملاً حرارياً سالباً يقارب $-2\\text{ mV/}^\\circ\\text{C}$ عند ثبوت التيار.",
    "stepByStepSolutionEn": [
      "From Shockley's equation at constant $I_D$: $V_D(T) \\approx \\frac{E_g(0)}{q} - \\frac{k_B T}{q} \\ln\\left(\\frac{C T^\\gamma}{I_D}\\right)$. Taking the derivative with respect to temperature gives $\\frac{dV_D}{dT} \\approx -\\frac{V_g - V_D + \\gamma (k_B T / q)}{T} \\approx -1.8\\text{ to } -2.2\\text{ mV/}^\\circ\\text{C}$. Even though $V_T = k_BT/q$ increases, the reverse saturation current $I_s(T) \\propto n_i^2(T)$ grows much faster, reducing the forward voltage needed to maintain constant $I_D$."
    ],
    "stepByStepSolutionAr": [
      "باشتقاق معادلة شوكلي مع ثبوت تيار الدايود $I_D$: نجد أن نمو تيار التشبع العكسي $I_s \\propto n_i^2$ يتزايد أُسياً مع الحرارة بمعدل يفوق بكثير زيادة الجهد الحراري $V_T$. ونتيجة لذلك، يقل جهد الحاجز اللازم لتمرير نفس التيار بمعدل يقارب $-2\\text{ mV}$ لكل درجة مئوية."
    ],
    "teacherTipEn": "This predictable $-2\\text{ mV/}^\\circ\\text{C}$ slope allows pn junctions to serve as accurate electronic temperature sensors.",
    "teacherTipAr": "يُستغل هذا الميل الثابت الدقيق $-2\\text{ mV/}^\\circ\\text{C}$ لاستخدام الدايود كمجس حراري إلكتروني دقيق."
  },
  {
    "id": "egbac_phys_ch4_db_hots_27",
    "titleEn": "Breakdown Mechanism: Zener vs Avalanche Comparison",
    "titleAr": "مقارنة آليات الانهيار: انهيار زنر مقابل الانهيار الصاعق",
    "difficulty": "hots",
    "questionEn": "How do Zener breakdown and Avalanche breakdown differ fundamentally in terms of their physical mechanism, operating voltage range, and temperature coefficient of breakdown voltage ($TC_{BV}$)?",
    "questionAr": "كيف يختلف انهيار زنر عن الانهيار الصاعق جذرياً من حيث الآلية الفيزيائية، ومدى جهد التشغيل، والمعامل الحراري لجهد الانهيار ($TC_{BV}$)؟",
    "optionsEn": [
      "Zener breakdown occurs above $1000\\text{ V}$ with positive coefficient; Avalanche occurs below $1\\text{ V}$ with zero coefficient",
      "Both mechanisms are identical and have negative temperature coefficients at all voltages",
      "Zener breakdown occurs below $\\sim 5\\text{ V}$ via quantum mechanical tunneling in heavily doped junctions and has a NEGATIVE temperature coefficient; Avalanche breakdown occurs above $\\sim 6\\text{ V}$ via impact ionization in lightly doped junctions and has a POSITIVE temperature coefficient",
      "Zener breakdown is an optical process, while Avalanche is a purely gravitational process"
    ],
    "optionsAr": [
      "يحدث انهيار زنر فوق $1000\\text{ V}$ بمعامل موجب؛ والانهيار الصاعق تحت $1\\text{ V}$ بمعامل صفري",
      "الآليتان متطابقتان تماماً وتمتلكان معاملاً حرارياً سالباً عند جميع الجهود",
      "يحدث انهيار زنر تحت $\\sim 5\\text{ V}$ بالأنفاقية الكمية في الوصلات عالية التطعيم وله معامل حراري سالب؛ بينما يحدث الانهيار الصاعق فوق $\\sim 6\\text{ V}$ بالتأين الصدمي في الوصلات منخفضة التطعيم وله معامل حراري موجب",
      "انهيار زنر ظاهرة بصرية، بينما الانهيار الصاعق ظاهرة ثقالية بحتة"
    ],
    "correctAnswer": "Zener breakdown occurs below $\\sim 5\\text{ V}$ via quantum mechanical tunneling in heavily doped junctions and has a NEGATIVE temperature coefficient; Avalanche breakdown occurs above $\\sim 6\\text{ V}$ via impact ionization in lightly doped junctions and has a POSITIVE temperature coefficient",
    "correctIndex": 2,
    "hintEn": "Zener: tunneling, $<5\\text{ V}$, negative tempco. Avalanche: impact ionization, $>6\\text{ V}$, positive tempco.",
    "hintAr": "زنر: أنفاقية، أقل من 5 فولت، معامل حراري سالب. الانهيار الصاعق: تأين صدمي، أكبر من 6 فولت، معامل موجب.",
    "stepByStepSolutionEn": [
      "In heavily doped junctions, the narrow depletion width produces electric fields $> 10^6\\text{ V/cm}$ at low voltages ($V_Z < 5\\text{ V}$), enabling direct quantum tunneling of valence electrons to the conduction band (Zener effect). As $T$ rises, bandgap $E_g$ narrows, facilitating tunneling at lower voltages ($TC < 0$). In wider junctions ($V_{BD} > 6\\text{ V}$), electrons acquire kinetic energy to knock out valence electrons (avalanche impact ionization). As $T$ rises, lattice vibrations scatter carriers, requiring higher voltage ($TC > 0$)."
    ],
    "stepByStepSolutionAr": [
      "في الوصلات عالية التطعيم يكون حاجز النضوب فائق الضيق مما يولد مجالاً كهربائياً جباراً يسمح بعبور الإلكترونات نفقياً (تأثير زنر $<5\\text{ V}$). بارتفاع الحرارة تضيق فجوة الطاقة فيحدث النفقية عند جهد أقل (معامل حراري سالب). أما في الوصلات الأقل تطعيماً فيحدث تأين صدمي تعيقه اهتزازات الشبكة البلورية بالحرارة مما يتطلب جهداً أكبر (معامل حراري موجب)."
    ],
    "teacherTipEn": "At $\\approx 5.6\\text{ V}$, the two opposite temperature coefficients cancel, yielding zero-drift voltage reference diodes.",
    "teacherTipAr": "عند جهد $\\approx 5.6\\text{ V}$، يتساوى المعاملان ويتعاكسان فيلغي كل منهما الآخر، مما يعطي دايود زنر فائق الاستقرار الحراري."
  },
  {
    "id": "egbac_phys_ch4_db_hots_28",
    "titleEn": "Optocoupler Galvanic Isolation and CTR",
    "titleAr": "العزل الجلفاني ومعامل نقل التيار (CTR) في العازل الضوئي",
    "difficulty": "hots",
    "questionEn": "An optocoupler consists of an infrared LED coupled to a phototransistor across a transparent optical dielectric barrier. If the input forward current is $I_F = 10\\text{ mA}$ and the device has a Current Transfer Ratio $\\text{CTR} = 150\\%$, what is the output collector current $I_C$, and what is the primary engineering function of an optocoupler?",
    "questionAr": "يتكون العازل الضوئي (Optocoupler) من دايود مشع للأشعة تحت الحمراء مقترن بترانزستور ضوئي عبر حاجز عازل شفاف. إذا كان تيار الدخل الأمامي $I_F = 10\\text{ mA}$ ومعامل نقل التيار $\\text{CTR} = 150\\%$، فما تيار المجمع في الخرج $I_C$، وما الوظيفة الهندسية الأساسية للعازل الضوئي؟",
    "optionsEn": [
      "$I_C = 10 / 1.5 = 6.67\\text{ mA}$; it generates high-frequency radio waves",
      "$I_C = 150\\text{ mA}$; it converts digital signals directly into optical laser power",
      "$I_C = 0\\text{ mA}$; optocouplers block all signals permanently",
      "$I_C = I_F \\times \\text{CTR} = 10\\text{ mA} \\times 1.50 = 15\\text{ mA}$; it provides electrical galvanic isolation (preventing high-voltage ground loops and transients between sub-circuits)"
    ],
    "optionsAr": [
      "$I_C = 10 / 1.5 = 6.67\\text{ mA}$؛ ووظيفته توليد موجات راديوية",
      "$I_C = 150\\text{ mA}$؛ ووظيفته تحويل الإشارات الرقمية إلى ليزر",
      "$I_C = 0\\text{ mA}$؛ والعوازل الضوئية تمنع مرور الإشارات كلياً",
      "$I_C = I_F \\times \\text{CTR} = 10\\text{ mA} \\times 1.50 = 15\\text{ mA}$؛ ووظيفته توفير عزل كهربائي جلفاني كامل (منع الحلقات الأرضية والجهود العالية العابرة)"
    ],
    "correctAnswer": "$I_C = I_F \\times \\text{CTR} = 10\\text{ mA} \\times 1.50 = 15\\text{ mA}$; it provides electrical galvanic isolation (preventing high-voltage ground loops and transients between sub-circuits)",
    "correctIndex": 3,
    "hintEn": "$\\text{CTR} = (I_C / I_F) \\times 100\\% \\implies I_C = I_F \\times (\\text{CTR} / 100)$.",
    "hintAr": "معامل نقل التيار هو نسبة تيار الخرج إلى تيار الدخل: $I_C = I_F \\times (\\text{CTR}/100)$.",
    "stepByStepSolutionEn": [
      "The Current Transfer Ratio ($\\text{CTR}$) is defined as $\\text{CTR} = \\frac{I_C}{I_F} \\times 100\\%$. For $I_F = 10\\text{ mA}$ and $\\text{CTR} = 150\\%$: $I_C = 10\\text{ mA} \\times 1.50 = 15\\text{ mA}$. The primary purpose of an optocoupler is complete galvanic isolation: signals are transmitted purely via photons across an insulating optical gap with breakdown ratings typically exceeding $2500\\text{ to }5000\\text{ V}_{RMS}$, protecting sensitive microcontrollers from high-voltage spikes."
    ],
    "stepByStepSolutionAr": [
      "يُعرّف معامل نقل التيار $\\text{CTR}$ بنسبة تيار المجمع للترانزستور إلى تيار تشغيل الدايود: $I_C = 10 \\times 1.5 = 15\\text{ mA}$. وتتمثل الوظيفة الجوهرية للعازل الضوئي في تحقيق العزل الجلفاني التام، حيث تنتقل الإشارة عبر الضوء فقط عبر عازل يتحمل آلاف الفولتات، مما يحمي الدوائر الرقمية الحساسة من النبضات القاتلة لشبكات الجهد العالي."
    ],
    "teacherTipEn": "CTR degrades over operating life due to LED emitter aging.",
    "teacherTipAr": "يتراجع معامل CTR تدريجياً على مدار سنوات التشغيل بسبب شيخوخة الدايود المشع."
  },
  {
    "id": "egbac_phys_ch4_db_hots_29",
    "titleEn": "Cascode Amplifier: CE-CB Configuration Benefits",
    "titleAr": "مكبر الكاسكود (Cascode): مزايا دمج المشع المشترك والقاعدة المشتركة",
    "difficulty": "hots",
    "questionEn": "A cascode amplifier configuration cascades a Common-Emitter (CE) input stage with a Common-Base (CB) output stage. What major high-frequency advantage does this topology provide compared to a single-stage CE amplifier?",
    "questionAr": "تتكون بنية مكبر الكاسكود (Cascode) من مرحلة دخل بمشع مشترك (CE) تليها مباشرة مرحلة خرج بقاعدة مشتركة (CB). ما الميزة الرئيسية التي تقدمها هذه البنية في الترددات العالية مقارنة بمكبر المشع المشترك المنفرد؟",
    "optionsEn": [
      "The low input impedance of the CB stage ($R_{in2} \\approx r_{e2}$) loads the CE stage, keeping its voltage gain near unity ($|A_{v1}| \\approx 1$), which suppresses the Miller multiplication of $C_{\\mu1}$ and dramatically broadens amplifier bandwidth",
      "It allows the amplifier to generate free DC power from ambient magnetic fields",
      "It reduces the overall voltage gain to zero to prevent signal distortion",
      "It converts all AC audio signals directly into microwave signals"
    ],
    "optionsAr": [
      "تحمل مقاومة دخل مرحلة القاعدة المشتركة المنخفضة ($R_{in2} \\approx r_{e2}$) مرحلة المشع المشترك، فيبقى كسب جهدها قريباً من الواحد ($|A_{v1}| \\approx 1$)، مما يلغي تضخيم ميلر لسعة $C_{\\mu1}$ ويوسع نطاق التردد بشكل هائل",
      "تتيح للمكبر توليد طاقة مستمرة مجانية من المجالات المغناطيسية المحيطة",
      "تخفض كسب الجهد الكلي إلى الصفر لمنع تشوه الإشارة",
      "تحول إشارات الصوت المتناوبة إلى موجات ميكروويف مباشرة"
    ],
    "correctAnswer": "The low input impedance of the CB stage ($R_{in2} \\approx r_{e2}$) loads the CE stage, keeping its voltage gain near unity ($|A_{v1}| \\approx 1$), which suppresses the Miller multiplication of $C_{\\mu1}$ and dramatically broadens amplifier bandwidth",
    "correctIndex": 0,
    "hintEn": "CE provides transconductance; CB eliminates Miller multiplication of CE collector capacitance.",
    "hintAr": "توفر مرحلة المشع المشترك المواصلة التبادلية، بينما تلغي مرحلة القاعدة المشتركة تضخيم سعة ميلر.",
    "stepByStepSolutionEn": [
      "In a standard CE amplifier, voltage gain $A_v = -g_m R_L$ multiplies $C_\\mu$ by $(1 + g_m R_L)$, creating a narrow input bandwidth. In the cascode topology, the CE transistor sees the emitter input of the CB transistor as its load, which has resistance $r_e = 1/g_m$. The voltage gain of the first transistor is $A_{v1} \\approx -g_m (1/g_m) = -1$. Therefore, the Miller capacitance is only $C_{M1} = C_{\\mu1}(1 - (-1)) = 2 C_{\\mu1}$ rather than hundreds of picofarads. The second stage (CB) has no Miller effect and provides the full voltage gain $A_v \\approx -g_m R_L$."
    ],
    "stepByStepSolutionAr": [
      "في مكبر المشع المشترك المنفرد، تضخم سعة ميلر الكسب وتحد من التردد. في مكبر الكاسكود، يرى ترانزستور الدخل مقاومة دخل ترانزستور الخرج وهي $r_e = 1/g_m$، فيكون كسب جهد مرحلة الدخل مساوياً تقريباً لـ $-1$. وبالتالي تصبح سعة ميلر $2 C_\\mu$ فقط بدلاً من مئات البيكوفاراد، بينما تتولى مرحلة القاعدة المشتركة تضخيم الجهد بكامل الكفاءة وبنطاق ترددي شاسع."
    ],
    "teacherTipEn": "Cascode stages also exhibit substantially higher output resistance ($r_{out} \\approx \\beta r_o$).",
    "teacherTipAr": "تتميز بنية الكاسكود أيضاً بمقاومة خرج فائقة الارتفاع ($r_{out} \\approx \\beta r_o$)."
  },
  {
    "id": "egbac_phys_ch4_db_hots_30",
    "titleEn": "Darlington Pair vs Sziklai Pair Comparison",
    "titleAr": "مقارنة زوج دارلينغتون وزوج زيكلاي (الزوج المركب)",
    "difficulty": "hots",
    "questionEn": "How does a complementary Sziklai pair (compound npn-pnp transistor) compare against a standard Darlington pair (npn-npn) regarding saturation voltage drop $V_{CE,sat}$ and thermal stability?",
    "questionAr": "كيف يقارن زوج زيكلاي المتكامل (ترانزستور مركب npn-pnp) بزوج دارلينغتون القياسي (npn-npn) من حيث هبوط جهد التشبع $V_{CE,sat}$ والاستقرار الحراري؟",
    "optionsEn": [
      "The Darlington pair consumes zero power, whereas the Sziklai pair requires external cooling with liquid helium",
      "The Sziklai pair has a much lower saturation voltage ($V_{CE,sat} \\approx V_{CE,sat1} + V_{BE2} \\approx 0.2\\text{ to }0.3\\text{ V}$) and only one $V_{BE}$ turn-on drop ($\\approx 0.7\\text{ V}$), with superior thermal stability compared to the Darlington ($V_{CE,sat} \\approx 0.9\\text{ V}$, $V_{BE,tot} \\approx 1.4\\text{ V}$)",
      "The Sziklai pair cannot amplify electrical current under any circumstances",
      "The Darlington pair only conducts electricity in reverse"
    ],
    "optionsAr": [
      "لا يستهلك زوج دارلينغتون أي قدرة، بينما يحتاج زوج زيكلاي للتبريد بالهيليوم السائل",
      "يمتلك زوج زيكلاي جهد تشبع أقل بكثير ($V_{CE,sat} \\approx 0.2\\text{ to }0.3\\text{ V}$) وجهد تشغيل وحيد فقط ($V_{BE} \\approx 0.7\\text{ V}$) مع استقرار حراري أفضل مقارنة بدارلينغتون ($V_{CE,sat} \\approx 0.9\\text{ V}$ و $V_{BE} \\approx 1.4\\text{ V}$)",
      "لا يستطيع زوج زيكلاي تكبير التيار الكهربائي تحت أي ظرف",
      "يوصل زوج دارلينغتون التيار في الاتجاه العكسي فقط"
    ],
    "correctAnswer": "The Sziklai pair has a much lower saturation voltage ($V_{CE,sat} \\approx V_{CE,sat1} + V_{BE2} \\approx 0.2\\text{ to }0.3\\text{ V}$) and only one $V_{BE}$ turn-on drop ($\\approx 0.7\\text{ V}$), with superior thermal stability compared to the Darlington ($V_{CE,sat} \\approx 0.9\\text{ V}$, $V_{BE,tot} \\approx 1.4\\text{ V}$)",
    "correctIndex": 1,
    "hintEn": "Darlington stacks two BE junctions ($V_{BE} \\approx 1.4\\text{ V}$, $V_{CE,sat} \\ge 0.7\\text{ V}$). Sziklai has $V_{BE} \\approx 0.7\\text{ V}$ and low $V_{CE,sat}$.",
    "hintAr": "يجمع دارلينغتون وصلتي قاعدة ومشع على التوالي ($1.4\\text{ V}$ و $0.9\\text{ V}$ تشبع)، بينما يمتلك زيكلاي وصلة واحدة وتشبعاً منخفضاً $\\sim 0.2\\text{ V}$.",
    "stepByStepSolutionEn": [
      "In a Darlington pair (two npn BJTs), the collector of $Q_1$ connects to the collector of $Q_2$. Consequently, $V_{CE,sat} = V_{BE2} + V_{CE,sat1} \\approx 0.7 + 0.2 = 0.9\\text{ V}$, and turn-on voltage is $2 V_{BE} \\approx 1.4\\text{ V}$, causing substantial power dissipation in power output stages. The Sziklai pair uses an npn input transistor driving a pnp output transistor. Its turn-on voltage is a single $V_{BE1} \\approx 0.7\\text{ V}$, and its saturation voltage is $V_{CE,sat} \\approx V_{CE,sat1} \\approx 0.2\\text{ to }0.3\\text{ V}$, significantly reducing conduction loss and thermal runaway."
    ],
    "stepByStepSolutionAr": [
      "في زوج دارلينغتون، يتصل مجمع الترانزستور الأول بقاعدة الثاني ومجمعه بمجمع الثاني، مما يفرض $V_{CE,sat} \\approx 0.9\\text{ V}$ و $V_{BE} \\approx 1.4\\text{ V}$ ويزيد الفقد الحراري. أما في زوج زيكلاي التكاملي (npn مع pnp)، فإن جهد الدخل هو $V_{BE1} \\approx 0.7\\text{ V}$ فقط، ويهبط جهد التشبع إلى نحو $0.2\\text{ V}$، مما يرفع كفاءة مراحل القدرة ويحسن الاستقرار الحراري."
    ],
    "teacherTipEn": "Both pairs provide composite current gain $\\beta \\approx \\beta_1 \\beta_2$.",
    "teacherTipAr": "يوفر كلا الزوجين معامل تكبير تيار مركب هائل $\\beta \\approx \\beta_1 \\beta_2$."
  },
  {
    "id": "egbac_phys_ch4_db_hots_31",
    "titleEn": "PIN Diode RF Attenuation and Carrier Lifetime",
    "titleAr": "دايود PIN للتوهين الترددي وزمن بقاء الحاملات",
    "difficulty": "hots",
    "questionEn": "A PIN diode contains a wide, lightly doped intrinsic ($i$) layer sandwiched between heavily doped $p^+$ and $n^+$ layers. Why does a PIN diode behave as an almost pure DC-controlled linear variable resistor at radio and microwave frequencies ($f > 100\\text{ MHz}$)?",
    "questionAr": "يحتوي دايود PIN على طبقة ذاتية عريضة شبه نقية ($i$) محصورة بين طبقتين عاليتي التطعيم $p^+$ و $n^+$. لماذا يسلك دايود PIN سلوك مقاومة خطية متغيرة يمكن التحكم بقيمتها بتيار مستمر عند ترددات الراديو والميكروويف ($f > 100\\text{ MHz}$)؟",
    "optionsEn": [
      "The intrinsic layer emits electromagnetic radiation that cancels the RF signal completely",
      "Because the PIN diode has zero electrical resistance at all frequencies",
      "The RF period ($T = 1/f$) is much shorter than the carrier recombination lifetime in the intrinsic layer ($\\tau$), preventing carrier modulation by the RF wave and making RF resistance inversely proportional to DC bias current ($R_{RF} \\propto 1/I_{DC}$)",
      "The diode mechanically vibrates to modulate the incident wave"
    ],
    "optionsAr": [
      "تُشع الطبقة الذاتية إشعاعاً كهرومغناطيسياً يلغي الإشارة الترددية كلياً",
      "لأن دايود PIN يمتلك مقاومة كهربائية صفرية عند جميع الترددات",
      "زمن الدورة الترددية ($T = 1/f$) أقصر بكثير من زمن بقاء الحاملات بالطبقة الذاتية ($\\tau$)، مما يمنع تشويه الحاملات بالموجة المتناوبة ويجعل المقاومة الترددية متناسبة عكسياً مع تيار الانحياز المستمر ($R_{RF} \\propto 1/I_{DC}$)",
      "يهتز الدايود ميكانيكياً لتعديل الموجة الساقطة"
    ],
    "correctAnswer": "The RF period ($T = 1/f$) is much shorter than the carrier recombination lifetime in the intrinsic layer ($\\tau$), preventing carrier modulation by the RF wave and making RF resistance inversely proportional to DC bias current ($R_{RF} \\propto 1/I_{DC}$)",
    "correctIndex": 2,
    "hintEn": "When $f \\gg 1/(2\\pi \\tau)$, the stored charge cannot track the high-frequency AC field, behaving as a pure resistance.",
    "hintAr": "عندما يكون التردد أعلى بكثير من مقلوب زمن البقاء، لا تستطيع الشحنات المخزنة مواكبة التردد، فيسلك الدايود سلوك مقاومة نقية.",
    "stepByStepSolutionEn": [
      "In a PIN diode, the intrinsic layer stores a large charge $Q = I_{DC} \\cdot \\tau$. At microwave frequencies where the signal period $T \\ll \\tau$, the RF electric field reverses too fast to inject or remove charge carriers. Consequently, the carrier density in the $i$-region remains constant and unmodulated throughout the RF cycle, behaving as a linear resistor with value $R_{RF} \\approx \\frac{W^2}{2 \\mu_{eff} I_{DC} \\tau}$. Adjusting $I_{DC}$ tunes $R_{RF}$ smoothly without rectifying the RF signal."
    ],
    "stepByStepSolutionAr": [
      "في دايود PIN، تخزن الطبقة الذاتية شحنة $Q = I_{DC} \\cdot \\tau$. وعند الترددات الميكروية حيث زمن الدورة أقصر بكثير من زمن الالتحام، لا تتمكن الشحنات من متابعة تغير المجال، فيعمل الدايود كمقاومة أومية نقية خالية من التشوه وتتناسب عكسياً مع تيار الانحياز المستمر."
    ],
    "teacherTipEn": "PIN diodes are universally utilized as microwave RF switches, phase shifters, and variable attenuators.",
    "teacherTipAr": "تستخدم دايودات PIN كعناصر أساسية في مفاتيح الميكروويف، ومزاحات الطور، ومخففات الإشارة الترددية."
  },
  {
    "id": "egbac_phys_ch4_db_hots_32",
    "titleEn": "Gunn Diode Transferred-Electron Effect (RWH Theory)",
    "titleAr": "دايود غن وتأثير انتقال الإلكترونات (نظرية RWH)",
    "difficulty": "hots",
    "questionEn": "In a GaAs Gunn diode, what solid-state band structure mechanism enables the generation of microwave oscillations under a high applied electric field ($E > 3.2\\text{ kV/cm}$)?",
    "questionAr": "في دايود غن (Gunn diode) المصنوع من زرنيخيد الغاليوم (GaAs)، ما الآلية الفيزيائية في بنية حزم الطاقة التي تولد تذبذبات ميكروية عند تطبيق مجال كهربائي عالٍ ($E > 3.2\\text{ kV/cm}$)؟",
    "optionsEn": [
      "Electrons undergo nuclear fission inside the gallium atoms",
      "The semiconductor crystal transforms permanently into a superconductor",
      "The bandgap collapses to zero, making GaAs a metal",
      "Hot electrons gain sufficient energy to transfer from the high-mobility, low-effective-mass central $\\Gamma$-valley to lower-mobility, high-effective-mass satellite $L$-valleys, causing Negative Differential Mobility (NDM)"
    ],
    "optionsAr": [
      "تخضع الإلكترونات لانشطار نووي داخل ذرات الغاليوم",
      "تتحول بلورة شبه الموصل بشكل دائم إلى موصل فائق",
      "تنهار فجوة الطاقة للصفر، ليتحول GaAs إلى معدن",
      "تكتسب الإلكترونات الساخنة طاقة كافية للانتقال من وادي $\\Gamma$ المركزي (ذي الحركية العالية والكتلة الفعالة الصغيرة) إلى أودية $L$ الجانبية (ذات الحركية المنخفضة والكتلة الكبيرة)، مولدة حركية تفاضلية سالبة (NDM)"
    ],
    "correctAnswer": "Hot electrons gain sufficient energy to transfer from the high-mobility, low-effective-mass central $\\Gamma$-valley to lower-mobility, high-effective-mass satellite $L$-valleys, causing Negative Differential Mobility (NDM)",
    "correctIndex": 3,
    "hintEn": "Gunn effect is a bulk property (no pn junction); electrons scatter into satellite valleys with higher effective mass.",
    "hintAr": "تأثير غن خاصية حجمية للبلورة دون وصلة؛ تنتقل الإلكترونات لأودية جانبية بكتلة فعالة أكبر وحركية أبطأ.",
    "stepByStepSolutionEn": [
      "The conduction band of GaAs has a central $\\Gamma$-valley with low effective mass ($m^* = 0.067 m_0$) and high mobility ($\\mu \\approx 8500\\text{ cm}^2/\\text{V}\\cdot\\text{s}$). An upper satellite valley located $0.31\\text{ eV}$ above has high effective mass ($m^* = 0.22 m_0$) and low mobility ($\\mu \\approx 100\\text{ cm}^2/\\text{V}\\cdot\\text{s}$). When electric field exceeds the threshold ($3.2\\text{ kV/cm}$), electrons are excited into the upper valley, reducing their drift velocity with increasing field ($dv/dE < 0$). This Negative Differential Resistance creates traveling high-field dipole domains that generate microwave oscillations."
    ],
    "stepByStepSolutionAr": [
      "تمتلك حزمة التوصيل في GaAs وادياً مركزياً $\\Gamma$ بحركية فائقة وكتلة صغيرة، ويفصله $0.31\\text{ eV}$ عن وادٍ جانبي بحركية منخفضة وكتلة كبيرة. عند تجاوز المجال الكهربائي العتبة ($3.2\\text{ kV/cm}$)، تقفز الإلكترونات للأودية العلوية فتتباطأ، وتظهر مقاومة تفاضلية سالبة تتشكل معها نطاقات مجال متحركة تنتج موجات ميكروية بترددات تصل لعشرات الجيجاهرتز."
    ],
    "teacherTipEn": "Gunn diodes are widely used in radar speed guns, motion detectors, and microwave transceivers.",
    "teacherTipAr": "تستخدم دايودات غن في رادارات قياس سرعة السيارات، ومجسات الحركة، وأجهزة الإرسال الميكروية."
  },
  {
    "id": "egbac_phys_ch4_db_hots_33",
    "titleEn": "IMPATT Diode Negative Resistance Mechanism",
    "titleAr": "آلية المقاومة الديناميكية السالبة في دايود IMPATT",
    "difficulty": "hots",
    "questionEn": "How does an IMPATT (Impact Avalanche Transit Time) diode produce negative dynamic resistance at millimeter-wave frequencies?",
    "questionAr": "كيف يولد دايود IMPATT مقاومة ديناميكية سالبة عند ترددات الموجات المليمترية الفائقة؟",
    "optionsEn": [
      "A $90^\\circ$ phase lag from the avalanche buildup process combined with an additional $90^\\circ$ transit time delay across the drift region produces a total $180^\\circ$ phase shift between AC terminal voltage and external AC current",
      "It uses an internal miniature mechanical tuning fork operating at resonant frequency",
      "By absorbing all ambient heat and cooling down to absolute zero",
      "By inverting the sign of the elementary charge of the electron"
    ],
    "optionsAr": [
      "تأخر طوري بمقدار $90^\\circ$ من عملية تراكم الانهيار الصاعق يندمج مع تأخير إضافي بمقدار $90^\\circ$ لزمن العبور عبر منطقة الانسياق، لينتج فرق طور إجمالي قدره $180^\\circ$ بين الجهد والتيار المتناوبين",
      "يستخدم شوكة رنانة ميكانيكية دقيقة مدمجة بالداخل تعمل عند تردد الرنين",
      "بامتصاص كل الحرارة المحيطة وتبريد نفسه للصفر المطلق",
      "عن طريق عكس إشارة الشحنة الأساسية للإلكترون لتصبح موجبة"
    ],
    "correctAnswer": "A $90^\\circ$ phase lag from the avalanche buildup process combined with an additional $90^\\circ$ transit time delay across the drift region produces a total $180^\\circ$ phase shift between AC terminal voltage and external AC current",
    "correctIndex": 0,
    "hintEn": "IMPATT achieves $180^\\circ$ phase inversion: $90^\\circ$ from avalanche inductance $+ 90^\\circ$ from transit delay.",
    "hintAr": "يحقق دايود IMPATT قلباً للطور بمقدار $180^\\circ$: $90^\\circ$ من حثية الانهيار الصاعق و $90^\\circ$ من زمن عبور الشحنات.",
    "stepByStepSolutionEn": [
      "An IMPATT diode operates under reverse breakdown. The generation of electron-hole pairs by impact ionization peaks when the RF voltage reaches its maximum, but the injected current pulse lags the voltage by $90^\\circ$ due to the finite avalanche buildup time. As this carrier packet drifts through the depletion drift region at saturation velocity $v_{sat}$, it incurs a transit time delay $\\theta_d = \\omega \\tau_d = \\pi$ ($90^\\circ$ delay). The resulting external induced current is $180^\\circ$ out of phase with the RF voltage, delivering RF power to the circuit ($P_{ac} < 0$, negative resistance)."
    ],
    "stepByStepSolutionAr": [
      "يعمل دايود IMPATT تحت انهيار عكسي؛ يتأخر تيار الحقن الناتج عن التأين الصدمي بمقدار $90^\\circ$ عن قمة الجهد. ثم تعبر الشحنات منطقة الانسياق بسرعة الإشباع مستغرقة زمناً يضيف تأخيراً إضافياً بمقدار $90^\\circ$. ينتج عن ذلك تيار خارجي معاكس للجهد في الطور بفرق $180^\\circ$ تماماً، مما يمثل مقاومة ديناميكية سالبة تضخ قدرة تذبذبية في الدائرة."
    ],
    "teacherTipEn": "IMPATT diodes provide the highest continuous-wave (CW) power output of any solid-state device above $30\\text{ GHz}$.",
    "teacherTipAr": "تولد دايودات IMPATT أعلى قدرة مستمرة بين جميع نبائط أشباه الموصلات عند الترددات الأعلى من $30\\text{ GHz}$."
  },
  {
    "id": "egbac_phys_ch4_db_hots_34",
    "titleEn": "Quantum Well Laser Diode Threshold Reduction",
    "titleAr": "خفض تيار العتبة في ليزر الدايود ذي البئر الكمي",
    "difficulty": "hots",
    "questionEn": "Why does a Quantum Well (QW) laser diode exhibit a drastically lower threshold current density ($J_{th}$) and superior temperature stability compared to a conventional bulk double-heterostructure laser diode?",
    "questionAr": "لماذا يُظهر ليزر الدايود ذو البئر الكمي (Quantum Well Laser) كثافة تيار عتبة ($J_{th}$) أقل بكثير واستقراراً حرارياً متفوقاً مقارنة بليزر الوصلة غير المتجانسة المزدوجة الحجمي التقليدي؟",
    "optionsEn": [
      "Quantum well lasers eliminate the need for optical mirrors in the laser cavity",
      "Quantum confinement into a 2D nanostructure changes the carrier Density of States (DOS) from parabolic ($\\propto \\sqrt{E}$) to a step-like staircase function, concentrating injected carriers into states that directly contribute to stimulated emission at the band edge",
      "Because quantum wells allow photons to travel faster than the speed of light",
      "The quantum well laser only operates with atomic hydrogen gas"
    ],
    "optionsAr": [
      "يلغي ليزر البئر الكمي الحاجة لمرايا عاكسة في تجويف الليزر",
      "يغير الحصر الكمي في بنية نانوية ثنائية الأبعاد كثافة الحالات (DOS) من دالة مكافئة ($\\propto \\sqrt{E}$) إلى دالة درجية، مما يركز الحاملات المحقونة عند حافة الحزمة لتساهم مباشرة في الانبعاث المستحث",
      "لأن الآبار الكمية تجعل الفوتونات تتحرك بأسرع من الضوء",
      "يعمل ليزر البئر الكمي فقط باستخدام غاز الهيدروجين الذري"
    ],
    "correctAnswer": "Quantum confinement into a 2D nanostructure changes the carrier Density of States (DOS) from parabolic ($\\propto \\sqrt{E}$) to a step-like staircase function, concentrating injected carriers into states that directly contribute to stimulated emission at the band edge",
    "correctIndex": 1,
    "hintEn": "Step-like 2D DOS avoids wasting carriers in high-energy states, enabling population inversion at lower injection.",
    "hintAr": "كثافة الحالات الدرجية ثنائية الأبعاد تمنع إهدار الشحنات في طاقات عليا، وتحقق الانعكاس السكاني بتيار حقن ضئيل.",
    "stepByStepSolutionEn": [
      "In bulk semiconductors, the 3D density of states $g(E) \\propto \\sqrt{E}$ has a tail at the band edge, requiring massive carrier injection before achieving population inversion ($E_{Fn} - E_{Fp} > E_g$). In a quantum well ($d \\sim 10\\text{ nm}$), 1D confinement creates quantized subbands with step-like 2D DOS: $g_{2D}(E) = \\frac{m^*}{\\pi \\hbar^2} \\sum_n \\Theta(E - E_n)$. This delivers a high density of states right at the subband edge, allowing population inversion and optical gain to be achieved with minimal carrier density ($J_{th} < 100\\text{ A/cm}^2$)."
    ],
    "stepByStepSolutionAr": [
      "في المادة الحجمية ثلاثية الأبعاد، تبدأ كثافة الحالات تدريجياً وتتوزع الشحنات على طاقات متباعدة، مما يتطلب تياراً ضخماً لتحقيق الانعكاس السكاني. أما في البئر الكمي الرقيق ($10\\text{ nm}$)، فإن الحصر يفرض كثافة حالات درجية عمودية توفر مقاعد طاقة فورية عند حافة الحزمة، فيتحقق شرط برنارد-دورا بضخ تيار تيار قليل جداً وتقل الحرارة المبددة."
    ],
    "teacherTipEn": "Multiple Quantum Wells (MQW) are the standard gain medium in telecom lasers and Blu-ray optical pickups.",
    "teacherTipAr": "تعد الآبار الكمية المتعددة (MQW) المعيار الصناعي المعتمد في ليزرات الألياف الضوئية وقارئات البلو راي."
  },
  {
    "id": "egbac_phys_ch4_db_hots_35",
    "titleEn": "VCSEL vs Edge-Emitting Laser Comparison",
    "titleAr": "مقارنة ليزر الانبعاث السطحي (VCSEL) بالليزر ذي الانبعاث الحافي",
    "difficulty": "hots",
    "questionEn": "What are the defining structural characteristics and operational advantages of a Vertical-Cavity Surface-Emitting Laser (VCSEL) utilizing Distributed Bragg Reflectors (DBRs)?",
    "questionAr": "ما الخصائص البنيوية المميزة والمزايا التشغيلية لليزر الانبعاث السطحي ذي الفجوة الرأسية (VCSEL) الذي يستخدم عواكس براغ الموزعة (DBR)؟",
    "optionsEn": [
      "Light is emitted parallel to the wafer edge with an irregular elliptical shape and requires $100\\text{ A}$ of current",
      "VCSELs cannot be integrated with electronic microchips",
      "Light is emitted perpendicular to the wafer surface from a circular aperture using microcavity DBR mirrors with reflectivity $> 99.9\\%$, yielding a circular symmetric beam, low threshold current ($\\sim 1\\text{ mA}$), and on-wafer testing capability",
      "VCSELs require high-voltage mechanical spark plugs to ignite"
    ],
    "optionsAr": [
      "ينبعث الضوء موازياً لحافة الرقاقة بحزمة بيضاوية مشوهة ويتطلب تياراً قدره $100\\text{ A}$",
      "لا يمكن دمج ليزرات VCSEL مع الرقائق الإلكترونية",
      "ينبعث الضوء عمودياً على سطح الرقاقة من فتحة دائرية باستخدام مرايا DBR ذات انعكاسية فائقة تتجاوز $99.9\\%$، مما ينتج حزمة ليزر دائرية متماثلة بتيار عتبة ضئيل ($\\sim 1\\text{ mA}$) مع إمكانية الاختبار على الرقاقة قبل التقطيع",
      "تتطلب ليزرات VCSEL شمعات إشعال ميكانيكية ذات جهد عالٍ للتشغيل"
    ],
    "correctAnswer": "Light is emitted perpendicular to the wafer surface from a circular aperture using microcavity DBR mirrors with reflectivity $> 99.9\\%$, yielding a circular symmetric beam, low threshold current ($\\sim 1\\text{ mA}$), and on-wafer testing capability",
    "correctIndex": 2,
    "hintEn": "VCSEL cavity length is on the order of microns; DBR mirrors require $R > 99.9\\%$ to achieve lasing threshold.",
    "hintAr": "طول تجويف VCSEL ميكروني فائق الصغر، ولذا تتطلب مرايا براغ DBR انعكاسية تفوق $99.9\\%$ لتعويض قصر مسار الكسب.",
    "stepByStepSolutionEn": [
      "In edge-emitting lasers, the optical cavity extends hundreds of microns along the cleaved facet, allowing lasing with mirror reflectivities $R \\approx 30\\%$. In a VCSEL, the cavity is oriented vertically and is only a few microns thick (active length $\\sim 20\\text{ nm}$). To satisfy round-trip gain $R_1 R_2 e^{2(\\Gamma g - \\alpha)L} = 1$, the DBR mirrors (composed of alternating $\\lambda/4$ dielectric/semiconductor layers) must have $R > 99.9\\%$. The circular aperture produces an unastigmatic low-divergence circular beam easily coupled into optical fibers."
    ],
    "stepByStepSolutionAr": [
      "في ليزر الحافة، يمتد التجويف لمئات الميكرونات أفقياً وتكفي مرايا بانعكاسية $30\\%$. أما في VCSEL، يكون التجويف رأسياً بسماكة ميكرونية فائقة القصر، مما يفرض استخدام مرايا براغ DBR تتكون من طبقات ربع موجية متعاقبة تحقق انعكاساً يفوق $99.9\\%$. يوفر ذلك حزمة ضوئية دائرية نقية وسهلة الإدخال في كابلات الألياف الضوئية مع استهلاك ضئيل للطاقة."
    ],
    "teacherTipEn": "VCSEL arrays power facial recognition 3D sensors (FaceID) in smartphones and datacenter optical interconnects.",
    "teacherTipAr": "تُشغّل مصفوفات VCSEL مجسات التعرف ثلاثي الأبعاد على الوجه في الهواتف الذكية ومراكز البيانات السحابية."
  },
  {
    "id": "egbac_phys_ch4_db_hots_36",
    "titleEn": "Thyristor (SCR) Two-Transistor Analogy and Latch-Up",
    "titleAr": "نموذج الترانزستورين للثايرستور (SCR) وآلية الإمساك (Latch-Up)",
    "difficulty": "hots",
    "questionEn": "Using the two-transistor (pnp-npn) regenerative analogy of a Silicon Controlled Rectifier (SCR), what exact condition triggers regenerative latch-up into the low-impedance conducting state?",
    "questionAr": "باستخدام النموذج المكافئ لترانزستورين متكاملين (pnp-npn) للثايرستور (SCR)، ما الشرط الرياضي الدقيق الذي يطلق التغذية الراجعة الموجبة الممسكة (Latch-Up) للتحول إلى حالة التوصيل منخفضة المعاوقة؟",
    "optionsEn": [
      "$\\alpha_1 \\times \\alpha_2 = 0$",
      "The gate current is reversed to negative infinity",
      "The cathode voltage exceeds the positive anode voltage by $500\\text{ V}$",
      "The sum of the common-base current gains satisfies $\\alpha_1 + \\alpha_2 = 1$, causing the regenerative loop gain to reach unity and the anode current denominator $I_A = \\frac{\\alpha_2 I_G + I_{CO}}{1 - (\\alpha_1 + \\alpha_2)}$ to approach zero"
    ],
    "optionsAr": [
      "$\\alpha_1 \\times \\alpha_2 = 0$",
      "عكس تيار البوابة ليصبح سالباً لا نهائياً",
      "زيادة جهد المهبط عن جهد المصعد بمقدار $500\\text{ V}$",
      "وصول مجموع معاملي كسب القاعدة المشتركة إلى الواحد ($\\alpha_1 + \\alpha_2 = 1$)، مما يجعل كسب الحلقة المتجددة مساوياً للواحد ويجعل مقام تيار المصعد $I_A = \\frac{\\alpha_2 I_G + I_{CO}}{1 - (\\alpha_1 + \\alpha_2)}$ يقترب من الصفر"
    ],
    "correctAnswer": "The sum of the common-base current gains satisfies $\\alpha_1 + \\alpha_2 = 1$, causing the regenerative loop gain to reach unity and the anode current denominator $I_A = \\frac{\\alpha_2 I_G + I_{CO}}{1 - (\\alpha_1 + \\alpha_2)}$ to approach zero",
    "correctIndex": 3,
    "hintEn": "An SCR latches ON when the loop gain $A\\beta = \\alpha_1 + \\alpha_2 \\ge 1$.",
    "hintAr": "يمسك الثايرستور في حالة التوصيل ON عندما يصل كسب الحلقة التجددية إلى الواحد: $\\alpha_1 + \\alpha_2 \\ge 1$.",
    "stepByStepSolutionEn": [
      "An SCR is a four-layer pnpn structure. It can be partitioned into an upper pnp transistor ($Q_1$) and a lower npn transistor ($Q_2$), where the collector of $Q_1$ drives the base of $Q_2$, and the collector of $Q_2$ drives the base of $Q_1$. The anode current is $I_A = \\frac{\\alpha_2 I_G + I_{CO1} + I_{CO2}}{1 - (\\alpha_1 + \\alpha_2)}$. At low current, $\\alpha_1 + \\alpha_2 \\ll 1$ (OFF state). Injecting gate current $I_G$ increases emitter currents, which increases $\\alpha_1$ and $\\alpha_2$ until $\\alpha_1 + \\alpha_2 = 1$. The loop gain reaches unity, causing regenerative runaway and latching the device into saturation."
    ],
    "stepByStepSolutionAr": [
      "يتكون الثايرستور من 4 طبقات pnpn تمثل ترانزستورين متعانقين pnp و npn. يغذي خرج كل منهما قاعدة الآخر في حلقة تغذية موجبة. في حالة الإطفاء يكون $\\alpha_1 + \\alpha_2 \\ll 1$. وعند حقن نبضة تيار عبر البوابة $I_G$ يزداد التيار وتنمو قيم $\\alpha$ حتى يصل مجموعهما $\\alpha_1 + \\alpha_2 = 1$. عندئذ يصبح كسب الحلقة واحداً، ويغلق الثايرستور على وضع التوصيل الذاتي المستمر حتى لو أزيلت نبضة البوابة."
    ],
    "teacherTipEn": "Once latched, gate control is lost; turn-off requires reducing anode current below the holding current $I_H$.",
    "teacherTipAr": "بمجرد الإمساك، تفقد البوابة التحكم؛ ولا ينطفئ الثايرستور إلا بهبوط تيار المصعد دون تيار المسك $I_H$."
  },
  {
    "id": "egbac_phys_ch4_db_hots_37",
    "titleEn": "Gate Turn-Off Thyristor (GTO) Extraction Physics",
    "titleAr": "فيزياء الإطفاء بالبوابة في ثايرستور GTO",
    "difficulty": "hots",
    "questionEn": "How does a Gate Turn-Off (GTO) thyristor differ in internal geometric design from a conventional SCR, enabling it to be turned OFF by applying a negative gate pulse?",
    "questionAr": "كيف يختلف ثايرستور الإطفاء بالبوابة (GTO) في تصميمه الهندسي الداخلي عن الثايرستور التقليدي (SCR)، مما يتيح له الإطفاء القسري بتطبيق نبضة بوابة سالبة؟",
    "optionsEn": [
      "It features a highly interdigitated (comb-like) gate-cathode layout with narrow cathode fingers, ensuring low lateral base resistance so that reverse gate current can extract stored minority carriers uniformly without current crowding",
      "It contains a built-in mechanical spring that disconnects the anode wire",
      "It utilizes a permanent diamond insulator between anode and cathode",
      "The GTO requires zero control pulses to operate"
    ],
    "optionsAr": [
      "يتميز بتصميم هندسي متداخل كأصابع المشط للبوابة والمهبط بأصابع مهبط دقيقة، مما يقلل مقاومة القاعدة العرضية ويتيح لتيار البوابة العكسي سحب الحاملات الأقلية المخزنة بانتظام دون حدوث تركز موضعي للتيار",
      "يحتوي على زنبرك ميكانيكي داخلي يفصل سلك المصعد فيزيائياً",
      "يستخدم عازلاً ماسياً دائماً بين المصعد والمهبط",
      "يعمل ثايرستور GTO بدون أي نبضات تحكم على الإطلاق"
    ],
    "correctAnswer": "It features a highly interdigitated (comb-like) gate-cathode layout with narrow cathode fingers, ensuring low lateral base resistance so that reverse gate current can extract stored minority carriers uniformly without current crowding",
    "correctIndex": 0,
    "hintEn": "Narrow interdigitated fingers prevent current filamentation and thermal destruction during turn-off.",
    "hintAr": "تمنع أصابع المهبط الدقيقة المتداخلة ظاهرة انكماش وتكدس التيار التي تدمر الثايرستور العادي عند محاولة إطفائه.",
    "stepByStepSolutionEn": [
      "In a conventional SCR, attempting to turn off the device with a negative gate current squeezes the conducting current into a narrow filament in the center of the cathode due to lateral base voltage drops ($V = I_{lateral} R_{base}$). This localized filament experiences extreme current density and destroys the device thermally. A GTO solves this by splitting the cathode into hundreds of narrow, parallel, interdigitated fingers surrounded by gate metallization. The lateral resistance is minimized, allowing a massive reverse gate current pulse ($I_{GR} \\approx I_A / 4$) to extract all stored base charge simultaneously and interrupt conduction."
    ],
    "stepByStepSolutionAr": [
      "في الثايرستور العادي، تؤدي محاولة سحب تيار عكسي من البوابة إلى حشر التيار في مسار مركزي دقيق بسبب المقاومة العرضية للقاعدة، مما يحرق البلورة موضعياً. يعالج ثايرستور GTO ذلك بتقسيم المهبط إلى مئات الأصابع الدقيقة المتداخلة مع البوابة لتقليل المقاومة العرضية، مما يسمح لنبضة تيار سالبة قوية بكسح شحنات القاعدة بالتساوي وإطفاء التيار بأمان."
    ],
    "teacherTipEn": "GTOs and IGCTs handle megawatt-scale power switching in electric locomotives and industrial drives.",
    "teacherTipAr": "تتحكم ثايرستورات GTO و IGCT في قدرات بالميجاوات في قطارات الجر الكهربائي ومحركات المصانع الضخمة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_38",
    "titleEn": "TRIAC Four-Quadrant Operation and Diac Triggering",
    "titleAr": "تشغيل الترياك (TRIAC) في الأرباع الأربعة والقدح بالدياك",
    "difficulty": "hots",
    "questionEn": "In AC power control circuits (such as lamp dimmers and AC motor speed controllers), why is a DIAC commonly placed in series with the gate of a TRIAC?",
    "questionAr": "في دوائر التحكم بقدرة التيار المتناوب (مثل خافتات الإضاءة والتحكم في سرعة محركات AC)، لماذا يوصل دايود ثنائي الاتجاه (DIAC) على التوالي مع بوابة الترياك (TRIAC)؟",
    "optionsEn": [
      "The DIAC converts AC electricity into pure DC before entering the TRIAC",
      "The DIAC provides a sharp, symmetrical breakover voltage threshold in both polarities, ensuring a crisp, high-energy gate current firing pulse that eliminates false triggering and phase jitter",
      "The DIAC eliminates all electrical current to save 100% of electric power",
      "The DIAC acts as a physical heat sink to cool the TRIAC mechanically"
    ],
    "optionsAr": [
      "يحول الدياك التيار المتناوب إلى تيار مستمر نقي قبل دخوله للترياك",
      "يوفر الدياك عتبة جهد انهيار حادة ومتماثلة في كلا الاتجاهين، مما يضمن نبضة إشعال قوية وحاسمة لبوابة الترياك تقضي على القدح الخاطئ والارتعاش الطوري",
      "يلغي الدياك التيار تماماً لتوفير الطاقة بنسبة 100%",
      "يعمل الدياك كمشتت حراري لتبريد الترياك ميكانيكياً"
    ],
    "correctAnswer": "The DIAC provides a sharp, symmetrical breakover voltage threshold in both polarities, ensuring a crisp, high-energy gate current firing pulse that eliminates false triggering and phase jitter",
    "correctIndex": 1,
    "hintEn": "A DIAC has a symmetrical breakover voltage ($V_{BO} \\approx 30\\text{ V}$) and negative resistance, discharging a capacitor rapidly into the gate.",
    "hintAr": "يمتلك الدياك جهد انهيار متماثلاً ($\\approx 30\\text{ V}$) ومقاومة سالبة تفرغ شحنة المكثف بنبضة تيار حادة في البوابة.",
    "stepByStepSolutionEn": [
      "A TRIAC can conduct in either direction and be triggered in all four quadrants ($MT2+/G+$, $MT2+/G-$, $MT2-/G+$, $MT2-/G-$). However, its gate sensitivity varies across quadrants, causing asymmetrical firing and DC offset if triggered by a slowly rising voltage. Placing a bilateral DIAC in series ensures that triggering occurs only when the timing capacitor charges to the precise breakover voltage $V_{BO}$ ($\\approx 30\\text{ to } 35\\text{ V}$). The DIAC abruptly snaps into negative resistance, delivering a fast, high-amplitude current pulse into the gate for reliable, jitter-free turn-on in both half-cycles."
    ],
    "stepByStepSolutionAr": [
      "الترياك مفتاح متناوب ثنائي الاتجاه يعمل في الأرباع الأربعة، لكن حساسية بوابته غير متماثلة بدقة لكل نصف موجة. يوفر الدياك الموصول بالتوالي عتبة انهيار متناظرة حادة ($\\sim 32\\text{ V}$)؛ فعندما يفرغ مكثف التوقيت شحنته عبر الدياك، تنطلق نبضة تيار قوية وفورية نحو بوابة الترياك، مما يضمن قدحاً متطابقاً وثابتاً في نصفي الموجة الموجب والسالب ويمنع التشويش."
    ],
    "teacherTipEn": "Phase-angle control dynamically slices the AC sine wave to adjust delivered RMS power smoothly.",
    "teacherTipAr": "يتحكم هذا النظام في زاوية الطور لقص جزء من موجة الجهد المتناوب والتحكم في القدرة الفعالة بسلاسة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_39",
    "titleEn": "IGBT Device Physics: MOS Gate and Bipolar Conductivity Modulation",
    "titleAr": "فيزياء ترانزستور IGBT: بوابة MOS والتعديل التوصيلي ثنائي القطبية",
    "difficulty": "hots",
    "questionEn": "What unique combination of semiconductor device physics enables the Insulated Gate Bipolar Transistor (IGBT) to dominate high-voltage, high-current power conversion (e.g., in electric vehicles and solar inverters)?",
    "questionAr": "ما التوليفة الفريدة من فيزياء نبائط أشباه الموصلات التي تُمكّن ترانزستور البوابة المعزولة ثنائي القطبية (IGBT) من الهيمنة على تحويل القدرة الكهربائية العالية (كالسيارات الكهربائية ومحولات الطاقة الشمسية)؟",
    "optionsEn": [
      "It uses a chemical liquid electrolyte to carry power between terminals",
      "It eliminates the need for semiconductor doping completely",
      "It combines the voltage-controlled, ultra-high input impedance of an insulated MOSFET gate with the heavy conductivity modulation (low on-state conduction loss) of a wide-base bipolar junction transistor",
      "It can only operate in direct outer-space sunlight"
    ],
    "optionsAr": [
      "يستخدم كهرلاً كيميائياً سائلاً لنقل القدرة بين أطرافه",
      "يلغي الحاجة لتطعيم أشباه الموصلات بالشوائب تماماً",
      "يجمع بين التحكم بالجهد ومقاومة الدخل فائقة الارتفاع لبوابة MOSFET المعزولة، مع التعديل التوصيلي الكثيف (انخفاض مفقودات التوصيل) لترانزستور ثنائي القطبية ذي قاعدة عريضة",
      "يعمل فقط في ضوء الشمس المباشر في الفضاء الخارجي"
    ],
    "correctAnswer": "It combines the voltage-controlled, ultra-high input impedance of an insulated MOSFET gate with the heavy conductivity modulation (low on-state conduction loss) of a wide-base bipolar junction transistor",
    "correctIndex": 2,
    "hintEn": "IGBT = MOSFET input + BJT output; conductivity modulation drastically lowers on-state resistance $R_{ON}$.",
    "hintAr": "ترانزستور IGBT = دخل MOSFET سهل القيادة + خرج BJT ذو فقد توصيل ضئيل بفضل ضخ الشحنات الكثيف.",
    "stepByStepSolutionEn": [
      "Power MOSFETs require very thick, lightly doped drift regions to withstand high breakdown voltages ($> 600\\text{ V}$), causing their on-state resistance to scale aggressively ($R_{DS,on} \\propto V_{BD}^{2.5}$). The IGBT solves this by introducing an additional $p^+$ substrate beneath the $n^-$ drift region. When the MOS gate turns ON, electron current from the NMOS channel triggers massive hole injection from the $p^+$ substrate into the $n^-$ drift region. This carrier flood (conductivity modulation) drops the on-resistance by orders of magnitude, maintaining a low forward saturation drop ($V_{CE,sat} \\approx 1.5\\text{ to } 2.0\\text{ V}$) even at hundreds of amperes."
    ],
    "stepByStepSolutionAr": [
      "في ترانزستورات Power MOSFET ذات الجهود العالية، تزداد مقاومة التشغيل أُسياً مع جهد الانهيار. يعالج IGBT ذلك بإضافة طبقة $p^+$ سفلية تحت منطقة الانسياق. عند فتح بوابة MOS، تتدفق الإلكترونات وتستحث حقناً هائلاً للفجوات في منطقة الانسياق، مما يغمرها بحاملات الشحنة ويهبط بمقاومتها إلى قيم ضئيلة جداً (التعديل التوصيلي)، محافظاً على هبوط جهد صغير ($1.5\\text{ V}$) حتى عند تيارات بمئات الأمبيرات."
    ],
    "teacherTipEn": "IGBTs are the foundational power switch in high-speed trains, EV traction inverters, and wind turbines.",
    "teacherTipAr": "يمثل IGBT القلب النابض في محولات الجر للسيارات الكهربائية، والقطارات السريعة، وتوربينات الرياح."
  },
  {
    "id": "egbac_phys_ch4_db_hots_40",
    "titleEn": "CMOS Latch-Up Prevention and Well Engineering",
    "titleAr": "منع الإمساك الطفيلي (Latch-Up) في CMOS وهندسة الآبار",
    "difficulty": "hots",
    "questionEn": "In complementary MOS (CMOS) integrated circuits, what physical phenomenon causes destructive 'latch-up', and what primary structural countermeasure is employed during layout and fabrication to prevent it?",
    "questionAr": "في الدوائر المتكاملة بتقنية CMOS، ما الظاهرة الفيزيائية التي تسبب 'الإمساك الطفيلي المدمر' (Latch-Up)، وما الإجراء الوقائي الهيكلي الأساسي المتبع لمنع حدوثها؟",
    "optionsEn": [
      "Latch-up occurs when the chip runs out of clock cycles; it is prevented by adding more RAM memory",
      "It is caused by cosmic rays burning the plastic packaging; it is prevented by painting the chip black",
      "It is the evaporation of gate oxide under low voltage; it is prevented by vacuum sealing the motherboard",
      "Latch-up is the triggering of a parasitic pnpn silicon-controlled rectifier formed by adjacent PMOS and NMOS wells; it is prevented by incorporating heavily doped guard rings connected to $V_{DD}$ and $V_{SS}$ and using retrograde/epitaxial well substrates to shunt parasitic base currents"
    ],
    "optionsAr": [
      "يحدث الإمساك الطفيلي عند نفاد دورات الساعة؛ ويمنع بإضافة المزيد من ذاكرة الرام",
      "ينتج من احتراق الغلاف البلاستيكي بالأشعة الكونية؛ ويمنع بطلاء الشريحة باللون الأسود",
      "هو تبخر أكسيد البوابة عند الجهود المنخفضة؛ ويمنع بتفريغ اللوحة الأم من الهواء",
      "الإمساك الطفيلي هو اشتعال ثايرستور طفيلي pnpn يتشكل ذاتياً بين آبار PMOS و NMOS المتجاورة؛ ويُمنع بوضع حلقات حماية عالية التطعيم متصلة بالتغذية والأرضي واستخدام ركائز فوقية منخفضة المقاومة لتصريف تيارات القواعد الطفيلية"
    ],
    "correctAnswer": "Latch-up is the triggering of a parasitic pnpn silicon-controlled rectifier formed by adjacent PMOS and NMOS wells; it is prevented by incorporating heavily doped guard rings connected to $V_{DD}$ and $V_{SS}$ and using retrograde/epitaxial well substrates to shunt parasitic base currents",
    "correctIndex": 3,
    "hintEn": "Parasitic vertical pnp (PMOS) and lateral npn (NMOS) form a thyristor; guard rings clamp the loop gain.",
    "hintAr": "يشكل ترانزستور pnp الرأسي مع npn الأفقي ثايرستوراً طفيلياً؛ وتعمل حلقات الحماية على خفض كسب الحلقة دون الواحد.",
    "stepByStepSolutionEn": [
      "In bulk CMOS, a parasitic vertical pnp transistor exists (p+ source of PMOS, n-well base, p-substrate collector) alongside a parasitic lateral npn transistor (n+ source of NMOS, p-substrate base, n-well collector). These two transistors form a cross-coupled pnpn thyristor structure. If transient voltage noise or radiation injects current into the substrate, regenerative feedback can turn both transistors ON, creating a low-impedance short circuit between $V_{DD}$ and $V_{SS}$ that burns the metal lines. Guard rings (low-resistance tap diffusions surrounding NMOS/PMOS) collect stray carriers and keep parasitic loop gain far below unity ($\\beta_1 \\beta_2 \\ll 1$)."
    ],
    "stepByStepSolutionAr": [
      "في رقائق CMOS، تنشأ ترانزستورات ثنائية القطبية طفيلية تشكل ثايرستوراً متخفياً بين خطوط التغذية والأرضي. عند حدوث طفرة جهد أو تشويش، يشتعل هذا الثايرستور ويمسك في وضع قصر كهربائي مباشر يسحب تياراً مدمراً يحرق الرقاقة. تُزرع 'حلقات حماية' عالية التطعيم حول الترانزستورات لشفط الشحنات الشاردة وضمان بقاء كسب الحلقة الطفيلية أقل بكثير من الواحد."
    ],
    "teacherTipEn": "Silicon-on-Insulator (SOI) technology eliminates latch-up entirely by providing complete oxide dielectric isolation.",
    "teacherTipAr": "تقضي تقنية السيليكون على عازل (SOI) على هذه المشكلة تماماً بعزل الترانزستورات بأكسيد مدفون."
  },
  {
    "id": "egbac_phys_ch4_db_hots_41",
    "titleEn": "HEMT / MODFET 2DEG Transport and Mobility",
    "titleAr": "غاز الإلكترونات ثنائي الأبعاد والحركية الفائقة في ترانزستور HEMT",
    "difficulty": "hots",
    "questionEn": "In a High Electron Mobility Transistor (HEMT / MODFET), why does the Two-Dimensional Electron Gas (2DEG) formed at the AlGaAs/GaAs heterojunction exhibit extraordinary electron mobilities ($> 2 \\times 10^6\\text{ cm}^2/\\text{V}\\cdot\\text{s}$ at cryogenic temperatures)?",
    "questionAr": "في ترانزستور الحركية الإلكترونية العالية (HEMT / MODFET)، لماذا يمتلك غاز الإلكترونات ثنائي الأبعاد (2DEG) المتشكل عند وصلة AlGaAs/GaAs غير المتجانسة حركية إلكترونية فائقة تفوق مليوني $\\text{cm}^2/\\text{V}\\cdot\\text{s}$ عند درجات الحرارة المنخفضة؟",
    "optionsEn": [
      "Modulation doping spatially separates the conduction electrons in the undoped GaAs channel from their parent ionized donor impurities in the doped AlGaAs layer via an undoped spacer, virtually eliminating ionized impurity Coulomb scattering",
      "Because the electrons undergo nuclear fusion to become massless neutrinos",
      "The heterojunction creates a magnetic black hole that pulls electrons forward",
      "Electrons travel through the air above the transistor chip"
    ],
    "optionsAr": [
      "يعمل التطعيم التعديلي (Modulation Doping) على فصل الإلكترونات مكانياً في قناة GaAs النقية عن شوائبها المانحة المتأينة في طبقة AlGaAs عبر طبقة فاصلة نقية، مما يقضي تماماً على تشتت كولوم بالشوائب المتأينة",
      "لأن الإلكترونات تندمج نووياً لتتحول إلى نيوترينوات عديمة الكتلة",
      "تخلق الوصلة ثقباً أسود مغناطيسياً يجذب الإلكترونات للأمام",
      "تنتقل الإلكترونات عبر الهواء فوق سطح الرقاقة"
    ],
    "correctAnswer": "Modulation doping spatially separates the conduction electrons in the undoped GaAs channel from their parent ionized donor impurities in the doped AlGaAs layer via an undoped spacer, virtually eliminating ionized impurity Coulomb scattering",
    "correctIndex": 0,
    "hintEn": "Modulation doping isolates carriers from scatterers; spacer layer preserves ultra-high mobility.",
    "hintAr": "يفصل التطعيم التعديلي الشحنات الحرة عن مراكز التشتت الأيونية؛ فتتحرك الإلكترونات في مادة نقية دون تصادمات أومية.",
    "stepByStepSolutionEn": [
      "In standard bulk-doped semiconductors, achieving high carrier concentration requires heavy donor doping, which inevitably introduces ionized donor ions that Coulomb-scatter mobile electrons and severely degrade mobility. In a HEMT, silicon donors are placed exclusively in the wide-bandgap AlGaAs layer. The donor electrons transfer into the lower-energy conduction band notch of the undoped GaAs layer, forming a 2DEG confined in a triangular quantum well. An undoped AlGaAs spacer layer ($2\\text{ to }5\\text{ nm}$) separates the 2DEG from the ionized donors. In this pristine undoped channel, ionized impurity scattering is eliminated, leaving mobility limited only by phonons."
    ],
    "stepByStepSolutionAr": [
      "في الترانزستور العادي، يؤدي التطعيم الكثيف إلى زيادة الأيونات الموجبة التي تصطدم بالإلكترونات وتبطئ حركتها. في ترانزستور HEMT، تُوضع الشوائب في طبقة AlGaAs فقط، فتهبط الإلكترونات حراً نحو وادي طاقة في طبقة GaAs النقية تماماً، مع وجود طبقة فاصلة عازلة بينهما. تتحرك الإلكترونات في وسط بلوري نقي تماماً كغاز ثنائي الأبعاد فائق الحركية والسرعة دون أي تصادمات كولومية معيقة."
    ],
    "teacherTipEn": "HEMT devices dominate satellite TV low-noise downconverters (LNB), radio astronomy, and 5G/6G millimeter-wave front-ends.",
    "teacherTipAr": "تهيمن ترانزستورات HEMT على مستقبلات الأقمار الصناعية منخفضة الضوضاء، ومراصد الراديو الفلكية، ومكبرات الجيل الخامس 5G."
  },
  {
    "id": "egbac_phys_ch4_db_hots_42",
    "titleEn": "FinFET 3D Tri-Gate Architecture Advantages",
    "titleAr": "مزايا المعمار ثلاثي الأبعاد لبوابات FinFET ثلاثية الأوجه",
    "difficulty": "hots",
    "questionEn": "Why did the semiconductor industry transition from planar MOSFETs to 3D FinFET (Tri-Gate) transistors at and below the $22\\text{ nm}$ technology node?",
    "questionAr": "لماذا انتقلت صناعة أشباه الموصلات العالمية من ترانزستورات MOSFET المستوية إلى ترانزستورات FinFET ثلاثية الأبعاد (ثلاثية البوابات) عند عقدة تصنيع $22\\text{ nm}$ وما دونها؟",
    "optionsEn": [
      "FinFETs are made entirely of biological wood fibers instead of silicon",
      "The thin vertical silicon fin is wrapped on three sides by the gate electrode, providing superior electrostatic control that suppresses short-channel effects, cuts subthreshold leakage, and enables higher drive current per footprint",
      "Planar transistors cannot conduct current at voltages below $1000\\text{ V}$",
      "FinFETs generate cold ice to cool the microprocessor chip internally"
    ],
    "optionsAr": [
      "تُصنع ترانزستورات FinFET من ألياف الخشب الحيوية بدلاً من السيليكون",
      "تُحاط زعنفة السيليكون الرأسية الدقيقة بالبوابة المعدنية من ثلاثة أوجه، مما يوفر تحكماً كهروستاتيكياً فائقاً يكبح تأثيرات القناة القصيرة، ويخفض تيار التسريب دون العتبة، ويزيد تيار القيادة لكل مساحة",
      "الترانزستورات المستوية لا يمكنها تمرير تيار عند جهود أقل من $1000\\text{ V}$",
      "تولد ترانزستورات FinFET جليداً لتبريد المعالج ذاتياً من الداخل"
    ],
    "correctAnswer": "The thin vertical silicon fin is wrapped on three sides by the gate electrode, providing superior electrostatic control that suppresses short-channel effects, cuts subthreshold leakage, and enables higher drive current per footprint",
    "correctIndex": 1,
    "hintEn": "Multigate electrostatics: wrapping the gate around the fin eliminates drain control over the channel barrier.",
    "hintAr": "التحكم الكهروستاتيكي متعدد الأوجه للبوابة يمنع جهد المصب من اختراق القناة وخفض حاجزها.",
    "stepByStepSolutionEn": [
      "In planar MOSFETs scaled below $22\\text{ nm}$, the drain electric field penetrates beneath the channel, causing severe drain-induced barrier lowering (DIBL), punch-through, and unacceptable off-state leakage ($I_{off}$). In a FinFET, the conducting channel is formed inside a vertical silicon fin (width $W_{fin} \\le 8\\text{ nm}$). The gate wraps around three sides of the fin (top and both sidewalls). Because the channel is fully depleted and electrostatically pinched from both sides, the gate maintains absolute control over the channel potential, eliminating subterranean leakage paths."
    ],
    "stepByStepSolutionAr": [
      "في الترانزستورات المستوية النانوية، يتسلل مجال المصب الكهربائي من أسفل القناة مسبباً تسريباً هائلاً للطاقة. في ترانزستور FinFET، تُشكل القناة داخل 'زعنفة' سيليكونية عمودية نحيفة جداً تحيط بها البوابة من الأعلى ومن الجانبين. يضمن هذا الحصار الكهروستاتيكي الثلاثي إطفاء القناة تماماً ومنع المصب من التأثير عليها، مما يخفض الفقد ويزيد سرعة المعالجات."
    ],
    "teacherTipEn": "Fin width must satisfy $W_{fin} \\le L_g / 2$ for robust short-channel control.",
    "teacherTipAr": "يُشترط هندسياً أن يكون سمك الزعنفة أقل من نصف طول البوابة لضمان كبح التسريب."
  },
  {
    "id": "egbac_phys_ch4_db_hots_43",
    "titleEn": "Gate-All-Around (GAA) Nanosheet Architecture",
    "titleAr": "معمار الألواح النانوية محاطة البوابة بالكامل (GAA Nanosheets)",
    "difficulty": "hots",
    "questionEn": "Why is the semiconductor industry transitioning from FinFETs to Gate-All-Around (GAA) horizontally stacked nanosheet transistors (e.g., RibbonFET / MBCFET) at the $3\\text{ nm}$ and $2\\text{ nm}$ technology nodes?",
    "questionAr": "لماذا تنتقل صناعة الرقائق الدقيقة حالياً من FinFET إلى ترانزستورات الألواح النانوية الأفقية محاطة البوابة بالكامل (GAA Nanosheets) عند عقدتي $3\\text{ nm}$ و $2\\text{ nm}$؟",
    "optionsEn": [
      "GAA nanosheets replace electrons with optical photons for computing",
      "FinFETs cannot be manufactured with ultraviolet photolithography",
      "The gate material fully encloses each stacked nanosheet channel on all four sides, maximizing electrostatic gate control, eliminating bottom fin leakage, and allowing variable nanosheet widths for flexible circuit drive-current optimization",
      "GAA transistors allow CPUs to operate without any power supply connection"
    ],
    "optionsAr": [
      "تستبدل ترانزستورات GAA الإلكترونات بفوتونات ضوئية لإجراء الحسابات",
      "لا يمكن تصنيع ترانزستورات FinFET باستخدام الطباعة الضوئية فوق البنفسجية",
      "تُحيط البوابة المعدنية بكل لوح نانوي أفقي من جهاته الأربع بالكامل، مما يحقق أقصى إحكام كهروستاتيكي، ويلغي تسريب قاع الزعنفة، ويتيح تغيير عرض الألواح لتحسين تيار القيادة بمرونة",
      "تسمح ترانزستورات GAA للمعالجات بالعمل بدون توصيل بمصدر كهرباء"
    ],
    "correctAnswer": "The gate material fully encloses each stacked nanosheet channel on all four sides, maximizing electrostatic gate control, eliminating bottom fin leakage, and allowing variable nanosheet widths for flexible circuit drive-current optimization",
    "correctIndex": 2,
    "hintEn": "GAA provides 4-sided electrostatic confinement; nanosheet width can be continuous, unlike discrete fin counts.",
    "hintAr": "توفر GAA حصاراً رباعي الأبعاد، وتسمح بضبط تيار الترانزستور بتغيير عرض اللوح بدلاً من الاعتماد على عدد محدد من الزعانف.",
    "stepByStepSolutionEn": [
      "As FinFET dimensions scale down, fin tallness and spacing become structurally unfeasible, and the un-gated bottom of the fin allows parasitic leakage. GAA nanosheets utilize epitaxial Si/SiGe superlattices where SiGe layers are selectively etched away, releasing suspended horizontal silicon nanosheets. The gate dielectric and metal completely wrap around all four surfaces of each sheet. This 4-sided electrostatic gate coupling delivers ideal subthreshold slope ($S \\approx 65\\text{ mV/dec}$) and enables designers to tune sheet width for power/speed tradeoffs."
    ],
    "stepByStepSolutionAr": [
      "مع استمرار تصغير أبعاد الزعانف، تصبح الزعنفة عرضة للانهيار ويسرب قاعها غير المغطى بالبوابة تياراً ملحوظاً. تعتمد تقنية GAA على حفر طبقات متبادلة لإطلاق ألواح سيليكون نانوية أفقية معلقة، ثم ترسيب مادة البوابة العازلة والمعدنية لتغلف كل لوح من جهاته الأربع كحلقة مغلقة. يمنح هذا تغليفاً تاماً يمنع التسريب ويتيح للمهندسين التحكم بعرض اللوح وضبط الأداء."
    ],
    "teacherTipEn": "GAA architectures (such as TSMC N2 and Intel 20A RibbonFET) define the frontier of sub-2nm supercomputing.",
    "teacherTipAr": "تشكل تقنية GAA الأساس الحاكم لرقائق الجيل القادم النانوية الفائقة مثل عُقد TSMC N2 و Intel 20A."
  },
  {
    "id": "egbac_phys_ch4_db_hots_44",
    "titleEn": "Hot Carrier Injection (HCI) Reliability Degradation",
    "titleAr": "تدهور الموثوقية بالحقن الساخن للحاملات (HCI) في MOSFET",
    "difficulty": "hots",
    "questionEn": "In submicron MOSFETs, what physical mechanism causes Hot Carrier Injection (HCI), and how does it degrade transistor performance over operating lifetime?",
    "questionAr": "في ترانزستورات MOSFET دون الميكرونية، ما الآلية الفيزيائية التي تسبب ظاهرة حقن الحاملات الساخنة (HCI)، وكيف تؤدي لتدهور أداء الترانزستور مع تقادم عمر التشغيل؟",
    "optionsEn": [
      "Hot carriers heat the copper circuit board until it melts into liquid",
      "Electrons are converted into high-energy alpha particles inside the silicon",
      "HCI improves transistor speed by 1000% every year of operation",
      "Electrons accelerated by the intense electric field near the drain gain enough kinetic energy to overcome the $\\text{Si-SiO}_2$ barrier, injecting into the oxide and creating interface traps that permanently shift threshold voltage ($V_{th}$) and degrade transconductance ($g_m$)"
    ],
    "optionsAr": [
      "تسخن الحاملات الساخنة اللوحة النحاسية حتى تنصهر كلياً",
      "تتحول الإلكترونات إلى جسيمات ألفا عالية الطاقة داخل السيليكون",
      "تزيد ظاهرة الحقن الساخن سرعة الترانزستور بنسبة 1000% سنوياً",
      "تكتسب الإلكترونات المتسارعة بالمجال الكهربائي الشديد قرب المصب طاقة حركية كافية لتجاوز حاجز $\\text{Si-SiO}_2$، وتُحقن في الأكسيد العازل مخلفة مصائد سطحية تُزيح جهد العتبة $V_{th}$ بشكل دائم وتخفض المواصلة $g_m$"
    ],
    "correctAnswer": "Electrons accelerated by the intense electric field near the drain gain enough kinetic energy to overcome the $\\text{Si-SiO}_2$ barrier, injecting into the oxide and creating interface traps that permanently shift threshold voltage ($V_{th}$) and degrade transconductance ($g_m$)",
    "correctIndex": 3,
    "hintEn": "High lateral field near drain heats electrons ($T_e \\gg T_{lattice}$); impact damage accumulates over time.",
    "hintAr": "المجال الكهربائي العرضي الهائل يسخن الإلكترونات لدرجة تتجاوز حرارة الشبكة، فتصطدم بالعازل وتتلفه تدريجياً.",
    "stepByStepSolutionEn": [
      "Near the drain pinch-off region, lateral electric fields exceed $10^5\\text{ V/cm}$. Electrons traversing this region acquire kinetic energies well above thermal equilibrium ('hot electrons'). Some carriers undergo impact ionization, while others scatter into the gate dielectric, overcoming the $3.15\\text{ eV}$ conduction band offset at the $\\text{Si/SiO}_2$ interface. Over thousands of operating hours, these trapped charges dissociate interface bonds, shifting $V_{th}$, reducing drain saturation current, and degrading switching speed."
    ],
    "stepByStepSolutionAr": [
      "قرب منطقة انقطاع القناة عند المصب، تشتد المجالات الكهربائية وتكتسب الإلكترونات طاقات حركية هائلة تجعلها 'إلكترونات ساخنة'. تقتحم بعض هذه الإلكترونات طبقة أكسيد البوابة العازلة محطمة روابط السيليكون والهيدروجين ومحتجزة داخل العازل. يؤدي هذا التراكم عبر آلاف ساعات العمل إلى زحزحة جهد العتبة وضعف كسب الترانزستور وتراجع تردد المعالج."
    ],
    "teacherTipEn": "Lightly Doped Drain (LDD) structures are incorporated to spread the peak electric field and mitigate HCI.",
    "teacherTipAr": "تضاف مناطق مصب خفيفة التطعيم (LDD) لتوزيع هبوط الجهد وتقليل ذروة المجال الكهربائي لكبح هذه الظاهرة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_45",
    "titleEn": "Bias Temperature Instability (BTI) in Advanced CMOS",
    "titleAr": "عدم الاستقرار بالانحياز والحرارة (BTI) في دوائر CMOS المتقدمة",
    "difficulty": "hots",
    "questionEn": "How does Negative Bias Temperature Instability (NBTI) degrade pMOS transistors in modern processor logic gates under continuous elevated temperature and negative gate stress?",
    "questionAr": "كيف تؤدي ظاهرة عدم الاستقرار بالانحياز السالب والحرارة (NBTI) إلى تدهور ترانزستورات pMOS في بوابات المعالجات الحديثة تحت تأثير الحرارة المرتفعة والإجهاد المستمر لجهد البوابة؟",
    "optionsEn": [
      "Negative gate bias and heat break passivated $\\text{Si-H}$ bonds at the dielectric interface, generating positive interface traps and fixed oxide charges that shift the pMOS threshold voltage negatively ($|V_{thp}|$ increases), slowing circuit timing",
      "NBTI causes the pMOS transistor to switch instantly into an nMOS transistor",
      "It causes the silicon chip to emit visible blue laser light continuously",
      "NBTI permanently dissolves the metal power pins of the microchip package"
    ],
    "optionsAr": [
      "يكسر الجهد السالب للبوابة مع الحرارة روابط $\\text{Si-H}$ المخملة عند السطح البيني، مولداً مصائد موجبة وشحنات أكسيد ثابتة تُزيح جهد العتبة للاتجاه السالب (يزداد $|V_{thp}|$) مما يبطئ توقيت الدوائر",
      "تؤدي ظاهرة NBTI إلى تحول ترانزستور pMOS فورياً إلى ترانزستور nMOS",
      "تجعل رقاقة السيليكون تُشع ضوء ليزر أزرق مرئي باستمرار",
      "تذيب ظاهرة NBTI أطراف التوصيل المعدنية لغلاف الشريحة نهائياً"
    ],
    "correctAnswer": "Negative gate bias and heat break passivated $\\text{Si-H}$ bonds at the dielectric interface, generating positive interface traps and fixed oxide charges that shift the pMOS threshold voltage negatively ($|V_{thp}|$ increases), slowing circuit timing",
    "correctIndex": 0,
    "hintEn": "NBTI shifts $|V_{thp}|$ upward over years, degrading drive current and causing timing violations.",
    "hintAr": "ترفع ظاهرة NBTI القيمة المطلقة لجهد عتبة pMOS مع السنين، مما يقلل تيار التشغيل ويبطئ استجابة البوابات المنطقية.",
    "stepByStepSolutionEn": [
      "When a pMOS transistor is biased with $V_{GS} = -V_{DD}$ at elevated operating temperatures ($T = 80\\text{ to } 125^\\circ\\text{C}$), holes in the inversion layer interact with passivated $\\text{Si-H}$ bonds at the channel-dielectric interface. The reaction breaks $\\text{Si-H}$ bonds, releasing neutral hydrogen species that diffuse into the oxide bulk, leaving behind positively charged dangling bond defects ($\\text{Si}^\\bullet$). These positive traps increase $|V_{thp}|$, reducing overdrive voltage $(V_{GS} - V_{thp})$, decaying drain saturation current, and causing critical timing path failures."
    ],
    "stepByStepSolutionAr": [
      "عند تعرض ترانزستور pMOS لجهد بوابة سالب عند درجات حرارة تشغيل المعالج العالية ($100^\\circ\\text{C}$)، تتفاعل الفجوات مع روابط السيليكون والهيدروجين عند السطح العازل وتفككها. يتحرر الهيدروجين تاركاً مصائد موجبة الشحنة ترفع جهد العتبة المطلوب لتشغيل الترانزستور. يؤدي هذا التناقص في تيار المحرك إلى زيادة أزمنة التأخير وظهور أخطاء توقيت حاسمة في المعالج."
    ],
    "teacherTipEn": "Guardbands and adaptive voltage scaling (AVS) are implemented to ensure chips survive a 10-year lifespan.",
    "teacherTipAr": "تطبق المعالجات هوامش حماية وأنظمة ضبط جهد تكيفية لضمان عمل المعالج بكفاءة طوال عمره الافتراضي."
  },
  {
    "id": "egbac_phys_ch4_db_hots_46",
    "titleEn": "Thermoelectric Figure of Merit ($ZT$) and Seebeck Effect",
    "titleAr": "معامل الجدارة الكهروحراري ($ZT$) وتأثير سيبك",
    "difficulty": "hots",
    "questionEn": "In thermoelectric energy harvesting and Peltier solid-state cooling, what fundamental expression defines the dimensionless figure of merit $ZT$, and what material properties must be maximized or minimized to optimize it?",
    "questionAr": "في حصاد الطاقة الكهروحرارية والتبريد ببلتير، ما التعبير الرياضي الذي يُعرّف معامل الجدارة الكهروحراري اللابعدي $ZT$، وما الخواص المادية التي يجب تعظيمها أو تقليلها لتحسينه؟",
    "optionsEn": [
      "$ZT = \\frac{\\kappa}{S^2 \\sigma T}$; requires minimizing electrical conductivity to zero",
      "$ZT = \\frac{S^2 \\sigma T}{\\kappa}$; requires maximizing Seebeck coefficient $S$ and electrical conductivity $\\sigma$ while minimizing total thermal conductivity $\\kappa = \\kappa_e + \\kappa_{lattice}$",
      "$ZT = S \\times \\sigma \\times \\kappa \\times T^2$",
      "$ZT = \\frac{T}{S + \\sigma + \\kappa}$"
    ],
    "optionsAr": [
      "$ZT = \\frac{\\kappa}{S^2 \\sigma T}$؛ ويتطلب تقليل التوصيلية الكهربائية للصفر",
      "$ZT = \\frac{S^2 \\sigma T}{\\kappa}$؛ ويتطلب تعظيم معامل سيبك $S$ والتوصيلية الكهربائية $\\sigma$ مع تقليل التوصيلية الحرارية الكلية $\\kappa = \\kappa_e + \\kappa_{lattice}$",
      "$ZT = S \\times \\sigma \\times \\kappa \\times T^2$",
      "$ZT = \\frac{T}{S + \\sigma + \\kappa}$"
    ],
    "correctAnswer": "$ZT = \\frac{S^2 \\sigma T}{\\kappa}$; requires maximizing Seebeck coefficient $S$ and electrical conductivity $\\sigma$ while minimizing total thermal conductivity $\\kappa = \\kappa_e + \\kappa_{lattice}$",
    "correctIndex": 1,
    "hintEn": "Optimize power factor $S^2 \\sigma$ and minimize thermal conductivity $\\kappa$ to maintain temperature gradient.",
    "hintAr": "يجب تعظيم عامل القدرة الكهروحراري $S^2\\sigma$ وخفض التوصيل الحراري $\\kappa$ للحفاظ على فارق درجات الحرارة.",
    "stepByStepSolutionEn": [
      "The thermoelectric figure of merit $ZT = \\frac{S^2 \\sigma}{\\kappa} T$ governs the thermodynamic conversion efficiency of Seebeck generators and Peltier coolers. Achieving $ZT > 1$ requires a material that conducts electricity like a metal but conducts heat like glass ('phonon-glass electron-crystal'). Heavily doped semiconductors like bismuth telluride ($\\text{Bi}_2\\text{Te}_3$) and silicon-germanium ($\\text{SiGe}$) are optimal because nanostructuring introduces grain boundaries that scatter phonons (reducing lattice thermal conductivity $\\kappa_L$) without impeding electron transport."
    ],
    "stepByStepSolutionAr": [
      "يحدد معامل الجدارة الكهروحراري $ZT = \\frac{S^2 \\sigma T}{\\kappa}$ كفاءة تحويل الحرارة لكهرباء مباشرة. لتحقيق كفاءة عالية، يجب أن تتصرف المادة كبلورة موصلة للكهرباء وعازلة للحرارة كالزجاج. وتعتبر أشباه الموصلات مثل تلوريد البزموت ($\\text{Bi}_2\\text{Te}_3$) مثالية؛ حيث تُهندس بلوراتها نانوياً لتشتيت الفونونات الحرارية وخفض التوصيل الحراري دون إعاقة تدفق الإلكترونات."
    ],
    "teacherTipEn": "Thermoelectric generators power deep-space probes (RTGs on Voyager and Curiosity) via radioactive decay heat.",
    "teacherTipAr": "تولد المولدات الكهروحرارية الكهرباء لمسبارات الفضاء السحيق (فوياجر وكيوريوسيتي) باستغلال حرارة التحلل الإشعاعي."
  },
  {
    "id": "egbac_phys_ch4_db_hots_47",
    "titleEn": "Piezoresistive Effect in Silicon MEMS Sensors",
    "titleAr": "التأثير المقاوم الانضغاطي (Piezoresistive) في مجسات MEMS السيليكونية",
    "difficulty": "hots",
    "questionEn": "Why is the piezoresistive effect in crystalline silicon orders of magnitude larger than the geometric piezoresistance of conventional metal strain gauges, making silicon ideal for MEMS pressure sensors?",
    "questionAr": "لماذا يكون التأثير المقاوم الانضغاطي في السيليكون البلوري أكبر بعدة مراتب من التغير الهندسي للمقاومة في مقاييس الانفعال المعدنية، مما يجعله مثالياً لمجسات الضغط الكهروميكانيكية الدقيقة (MEMS)؟",
    "optionsEn": [
      "Stress converts silicon atoms directly into gold atoms, lowering resistance",
      "Mechanical strain causes the silicon crystal to produce liquid water internally",
      "Mechanical stress breaks crystal symmetry and lifts the degeneracy of conduction/valence band valleys, shifting carrier populations between energy ellipsoids with radically different directional effective masses and mobilities",
      "Metal strain gauges only work when exposed to radioactive materials"
    ],
    "optionsAr": [
      "يحول الإجهاد الميكانيكي ذرات السيليكون إلى ذهب فينخفض العائق الأومي",
      "يولد الانفعال الميكانيكي ماءً سائلاً داخل البلورة",
      "يكسر الإجهاد الميكانيكي التماثل البلوري ويزيل انحلال أودية حزم الطاقة، مما يُعيد توزيع الحاملات بين أودية ذات كتل فعالة وحركيات اتجاهية شديدة التباين",
      "مقاييس الانفعال المعدنية تعمل فقط عند تعريضها لمواد مشعة"
    ],
    "correctAnswer": "Mechanical stress breaks crystal symmetry and lifts the degeneracy of conduction/valence band valleys, shifting carrier populations between energy ellipsoids with radically different directional effective masses and mobilities",
    "correctIndex": 2,
    "hintEn": "Metal strain gauges rely on dimensional changes ($\\Delta R/R \\approx 2 \\epsilon$); silicon changes intrinsic resistivity via band splitting ($\\Delta \\rho/\\rho > 100 \\epsilon$).",
    "hintAr": "تعتمد المعادن على التمدد الهندسي ($K \\approx 2$) بينما يغير السيليكون مقاومته النوعية جذرياً بانشطار الحزم والحركية ($K > 100$).",
    "stepByStepSolutionEn": [
      "In metals, piezoresistance is governed primarily by dimensional changes (Poisson effect), yielding a gauge factor $G \\approx 2$. In semiconductors like silicon, mechanical strain breaks cubic lattice symmetry. In n-type Si, longitudinal compression lowers the energy of conduction band valleys aligned with the stress axis while raising perpendicular valleys. Electrons transfer into the lower valleys where effective mass is high and mobility is low, altering resistivity by over $50\\%$ without any volume change. This delivers gauge factors $G = \\frac{\\Delta R / R}{\\epsilon} > 100\\text{ to } 150$."
    ],
    "stepByStepSolutionAr": [
      "في المعادن، تتغير المقاومة طفيفاً بسبب استطالة السلك ونقصان قطره بمعامل حساسية $G \\approx 2$. أما في السيليكون، يسبب الضغط الميكانيكي انضغاطاً شبكياً ينشطر معه تكافؤ حزم الطاقة، فتهاجر الإلكترونات إلى أودية طاقة ذات كتلة فعالة أثقل وحركية أبطأ، مما يقفز بالمقاومة النوعية بمعامل حساسية يفوق 150 ضعفاً."
    ],
    "teacherTipEn": "Silicon piezoresistors are diffused onto micro-machined silicon diaphragms in automotive MAP and tire pressure sensors.",
    "teacherTipAr": "تُدمج المقاومات الانضغاطية على أغشية السيليكون الدقيقة في مجسات ضغط الهواء والفرامل في السيارات."
  },
  {
    "id": "egbac_phys_ch4_db_hots_48",
    "titleEn": "Spintronics: Giant and Tunnel Magnetoresistance (GMR / TMR)",
    "titleAr": "الإلكترونيات الدورانية (سبنترونيكس): المقاومة المغناطيسية العملاقة والنفقية (GMR / TMR)",
    "difficulty": "hots",
    "questionEn": "In spintronic devices such as Magnetic Tunnel Junctions (MTJ) used in MRAM and hard disk drive read heads, what physical principle governs the dramatic change in electrical resistance between parallel and antiparallel magnetization states?",
    "questionAr": "في نبائط الإلكترونيات الدورانية مثل وصلات النفق المغناطيسي (MTJ) المستخدمة في MRAM ورؤوس قراءة الأقراص الصلبة، ما المبدأ الفيزيائي الحاكم للتغير الهائل في المقاومة بين حالتي المغنطة المتوازية والمتعاكسة؟",
    "optionsEn": [
      "The magnetic field physically pushes the two metal plates apart to break the circuit",
      "Electrons lose their electrical charge when their spin flips",
      "Antiparallel magnetization generates a gravitational force that traps electrons",
      "Spin-dependent quantum tunneling across an ultra-thin insulating barrier ($\\text{MgO}$): density of available electron spin states aligns when ferromagnets have parallel magnetization (low resistance $R_P$), but mismatches when antiparallel (high resistance $R_{AP}$)"
    ],
    "optionsAr": [
      "يدفع المجال المغناطيسي اللوحين المعدنيين للتباعد ميكانيكياً لقطع الدائرة",
      "تفقد الإلكترونات شحنتها الكهربائية عند انقلاب لفها المغزلي",
      "تولد المغنطة المتعاكسة قوة جاذبية تحبس الإلكترونات",
      "الأنفاقية الكمية المعتمدة على اللف المغزلي عبر عازل فائق الرقة ($\\text{MgO}$): تتطابق كثافة حالات اللف للإلكترونات عند توازي المغنطة (مقاومة منخفضة $R_P$)، وتتعاكس عند تعاكس المغنطة (مقاومة مرتفعة $R_{AP}$)"
    ],
    "correctAnswer": "Spin-dependent quantum tunneling across an ultra-thin insulating barrier ($\\text{MgO}$): density of available electron spin states aligns when ferromagnets have parallel magnetization (low resistance $R_P$), but mismatches when antiparallel (high resistance $R_{AP}$)",
    "correctIndex": 3,
    "hintEn": "TMR ratio is given by Julliere's formula: $\\text{TMR} = \\frac{R_{AP} - R_P}{R_P} = \\frac{2 P_1 P_2}{1 - P_1 P_2}$.",
    "hintAr": "تعطى نسبة TMR بصيغة جوليير بدلالة الاستقطاب المغزلي: $\\text{TMR} = \\frac{2 P_1 P_2}{1 - P_1 P_2}$.",
    "stepByStepSolutionEn": [
      "A Magnetic Tunnel Junction consists of two ferromagnetic layers separated by an atomic-scale insulating barrier (crystalline $\\text{MgO} \\sim 1\\text{ nm}$). In ferromagnets, the density of states at the Fermi level is split between spin-up (majority) and spin-down (minority) electrons. When both layers have parallel magnetization, majority spin electrons tunnel readily into empty majority states of the receiving layer ($R_P$ is low). When antiparallel, spin-up electrons find few matching empty states, suppressing tunneling and producing high resistance ($R_{AP}$). TMR ratios exceed $200\\%$, representing binary 0 and 1 non-volatile states."
    ],
    "stepByStepSolutionAr": [
      "تتكون وصلة MTJ من طبقتين مغناطيسيتين يفصل بينهما عازل ذري فائق الرقة من أكسيد المغنيسيوم. في المواد المغناطيسية، تنقسم مستويات الطاقة بين إلكترونات ذات عزم مغزلي لأعلى وأخرى لأسفل. عندما تتوازى مغنطة الطبقتين، تعبر الإلكترونات نفقياً بسهولة لوجود حالات شاغرة متطابقة (مقاومة صغرى 0). وعند تعاكس المغنطة، تصطدم الإلكترونات بندرة الحالات الشاغرة المتوافقة مع غزلها فيعاق العبور (مقاومة عظمى 1)."
    ],
    "teacherTipEn": "Spin-Transfer Torque (STT-MRAM) writes data by passing spin-polarized currents directly through the MTJ.",
    "teacherTipAr": "تستخدم ذواكر STT-MRAM عزم نقل اللف المغزلي لتعديل اتجاه المغنطة مباشرة بتيار كهربائي دون مجالات مغناطيسية خارجية."
  },
  {
    "id": "egbac_phys_ch4_db_hots_49",
    "titleEn": "CCD vs CMOS Image Sensor Architecture and Readout",
    "titleAr": "مقارنة معمارية مجسات الصور CCD ومجسات CMOS النشطة",
    "difficulty": "hots",
    "questionEn": "How does the signal readout mechanism differ fundamentally between a Charge-Coupled Device (CCD) and a CMOS Active Pixel Sensor (APS)?",
    "questionAr": "كيف تختلف آلية قراءة الإشارة جذرياً بين مجس اقتران الشحنة (CCD) ومجس الصور النشط بتقنية CMOS (CMOS APS)؟",
    "optionsEn": [
      "A CCD transfers photogenerated charge packets sequentially row-by-row through analog shift registers to a single common output amplifier, whereas a CMOS APS converts charge to voltage directly inside every individual pixel using dedicated in-pixel transistors (3T/4T)",
      "CCD sensors only detect infrared light, while CMOS sensors only detect sound waves",
      "CCD pixels process digital bits, whereas CMOS pixels contain optical lenses only",
      "CMOS sensors require chemical photographic film to record images"
    ],
    "optionsAr": [
      "ينقل مجس CCD حزم الشحنات الضوئية بالتتابع سطراً بسطر عبر مسجلات إزاحة تناظرية إلى مكبر خرج مشترك وحيد، بينما يحول مجس CMOS الشحنة لجهد كهربائي مباشرة داخل كل بكسل بمكبرات مدمجة (3T/4T)",
      "تكتشف مجسات CCD الأشعة تحت الحمراء فقط، بينما تكتشف مجسات CMOS الموجات الصوتية",
      "تعالج بكسلات CCD بيانات رقمية، بينما تحتوي بكسلات CMOS على عدسات بصرية فقط",
      "تتطلب مجسات CMOS أفلاماً كيميائية فوتوغرافية لتسجيل الصور"
    ],
    "correctAnswer": "A CCD transfers photogenerated charge packets sequentially row-by-row through analog shift registers to a single common output amplifier, whereas a CMOS APS converts charge to voltage directly inside every individual pixel using dedicated in-pixel transistors (3T/4T)",
    "correctIndex": 0,
    "hintEn": "CCD: bucket-brigade analog charge transfer to corner amplifier. CMOS: in-pixel charge-to-voltage conversion ($V = q/C$).",
    "hintAr": "مجس CCD: نقل تناظري للشحنات كصف دلاء لمكبر وحيد في الزاوية. مجس CMOS: تحويل الشحنة لجهد فورياً داخل البكسل نفسه.",
    "stepByStepSolutionEn": [
      "In a CCD, photons generate electron packets stored in potential wells. During readout, multiphase clock pulses shift entire rows of charge packets downward to a serial horizontal register, which routes them to a single precision output amplifier. This achieves high uniformity but high power and serial bottleneck. In a CMOS Active Pixel Sensor, each pixel contains a pinned photodiode, a reset transistor, a source-follower amplifier, and a row-select transistor (4T cell). Photocarriers are converted to voltage right at the pixel ($V = \\Delta Q / C_{FD}$) and read out via parallel column buses at high frame rates and low power."
    ],
    "stepByStepSolutionAr": [
      "في مجسات CCD، تُنقل الشحنات الضوئية كحزم إلكترونية سليمة عبر خلايا السيليكون بنظام النقل المتسلسل حتى تصل لمكبر نهائي موحد، مما يوفر نقاءً عالياً لكن باستهلاك طاقة مرتفع. أما في مجسات CMOS الحديثة، يحتوي كل بكسل على دايود ومكبر ترانزستوري مستقل يحول الشحنة إلى جهد رقمي فوري على مستوى البكسل، مما يتيح سرعات تصوير فائقة واستهلاكاً ضئيلاً للطاقة ودمج معالجة الصور على نفس الرقاقة."
    ],
    "teacherTipEn": "Global shutter in advanced CMOS eliminates rolling-shutter spatial skew distortion.",
    "teacherTipAr": "تتيح تقنية الغالق العام (Global Shutter) في CMOS التقاط الأجسام سريعة الحركة دون أي تشوه هندسي."
  },
  {
    "id": "egbac_phys_ch4_db_hots_50",
    "titleEn": "Shannon-Hartley Channel Capacity Theorem",
    "titleAr": "نظرية شانون-هارتلي لسعة القناة الرقمية",
    "difficulty": "hots",
    "questionEn": "According to Shannon's channel capacity theorem $C = B \\log_2(1 + \\text{SNR})$, what is the maximum theoretical error-free data rate $C$ of an analog communication channel with bandwidth $B = 1.0\\text{ MHz}$ operating at a signal-to-noise ratio $\\text{SNR} = 1023$ ($30.1\\text{ dB}$)?",
    "questionAr": "وفقاً لنظرية شانون-هارتلي لسعة القناة $C = B \\log_2(1 + \\text{SNR})$، ما أقصى معدل نظري لنقل البيانات بدون أخطاء $C$ لقناة اتصال تناظرية ذات نطاق ترددي $B = 1.0\\text{ MHz}$ تعمل عند نسبة إشارة إلى ضوضاء $\\text{SNR} = 1023$ ($30.1\\text{ dB}$)؟",
    "optionsEn": [
      "$C = 1.0\\text{ MHz} \\times 1023 = 1023\\text{ Mbps}$",
      "$C = 1.0\\text{ MHz} \\times \\log_2(1 + 1023) = 1.0 \\times \\log_2(1024) = 1.0 \\times 10 = 10\\text{ Mbps}$",
      "$C = \\frac{1023}{1.0\\text{ MHz}} = 1.023\\text{ kbps}$",
      "$C = \\log_2(1023) \\approx 9.99\\text{ bps}$"
    ],
    "optionsAr": [
      "$C = 1.0\\text{ MHz} \\times 1023 = 1023\\text{ Mbps}$",
      "$C = 1.0\\text{ MHz} \\times \\log_2(1 + 1023) = 1.0 \\times \\log_2(1024) = 1.0 \\times 10 = 10\\text{ Mbps}$",
      "$C = \\frac{1023}{1.0\\text{ MHz}} = 1.023\\text{ kbps}$",
      "$C = \\log_2(1023) \\approx 9.99\\text{ bps}$"
    ],
    "correctAnswer": "$C = 1.0\\text{ MHz} \\times \\log_2(1 + 1023) = 1.0 \\times \\log_2(1024) = 1.0 \\times 10 = 10\\text{ Mbps}$",
    "correctIndex": 1,
    "hintEn": "Note that $1 + \\text{SNR} = 1 + 1023 = 1024 = 2^{10}$, so $\\log_2(1024) = 10$.",
    "hintAr": "لاحظ أن $1 + 1023 = 1024 = 2^{10}$، إذن اللوغاريتم للأساس 2 يساوي 10 بالضبط.",
    "stepByStepSolutionEn": [
      "The Shannon-Hartley theorem defines the absolute mathematical capacity of a channel perturbed by additive white Gaussian noise: $C = B \\log_2(1 + \\text{SNR})$. Substituting given parameters: $1 + \\text{SNR} = 1 + 1023 = 1024$. Since $1024 = 2^{10}$, $\\log_2(1024) = 10\\text{ bits/cycle}$. Multiplying by bandwidth: $C = (1.0 \\times 10^6\\text{ Hz}) \\times 10 = 10 \\times 10^6\\text{ bps} = 10\\text{ Mbps}$. No coding algorithm can exceed this rate without non-zero error."
    ],
    "stepByStepSolutionAr": [
      "تحدد نظرية شانون السقف الرياضي الأعلى لمعدل نقل المعلومات في وجود ضوضاء غاوسية بيضاء: $C = B \\log_2(1 + \\text{SNR})$. بالتعويض: $1 + 1023 = 1024 = 2^{10}$. إذن السعة هي $C = 10^6 \\times 10 = 10\\text{ Mbps}$. يستحيل لأي تقنية تشفير أو تضمين تجاوز هذا المعدل دون حدوث أخطاء في البيانات."
    ],
    "teacherTipEn": "Shannon's limit proves that bandwidth and SNR can be traded off logarithmically.",
    "teacherTipAr": "تثبت نظرية شانون إمكانية مقايضة النطاق الترددي بنسبة الإشارة إلى الضوضاء وفق علاقة لوغاريتمية."
  },
  {
    "id": "egbac_phys_ch4_db_hots_51",
    "titleEn": "Nyquist-Shannon Sampling and Aliasing Prevention",
    "titleAr": "نظرية نايكويست-شانون لأخذ العينات ومنع الترددات الزائفة (Aliasing)",
    "difficulty": "hots",
    "questionEn": "In digital signal processing, if an analog audio signal contains spectral components up to $f_{max} = 22\\text{ kHz}$, what is the strict Nyquist sampling rate requirement, and why must an analog Anti-Aliasing Low-Pass Filter (LPF) precede the ADC?",
    "questionAr": "في المعالجة الرقمية للإشارة، إذا كانت إشارة صوتية تناظرية تحتوي على مركبات ترددية حتى $f_{max} = 22\\text{ kHz}$، ما هو معدل أخذ العينات لنايكويست، ولماذا يجب وضع مرشح تناظري لتمرير الترددات المنخفضة (Anti-Aliasing LPF) قبل المحول التناظري الرقمي؟",
    "optionsEn": [
      "Sampling rate must be exactly $10\\text{ Hz}$, and the filter converts sound to ultrasound",
      "Sampling rate must equal the speed of light, and the filter absorbs high-voltage electricity",
      "Sampling frequency must satisfy $f_s \\ge 2 f_{max} = 44\\text{ kHz}$; the LPF attenuates any input frequencies above $f_s/2$ that would otherwise fold back (alias) into the audio band as unremovable phantom distortion",
      "Sampling can be arbitrarily slow without any information loss"
    ],
    "optionsAr": [
      "يجب أن يكون معدل العينات $10\\text{ Hz}$ بالضبط، ويحول المرشح الصوت لموجات فوق صوتية",
      "يجب أن يساوي معدل العينات سرعة الضوء، ويمتص المرشح الكهرباء عالية الجهد",
      "يجب أن يحقق تردد أخذ العينات $f_s \\ge 2 f_{max} = 44\\text{ kHz}$؛ ويعمل المرشح على إخماد أي ترددات أعلى من $f_s/2$ لمنع انطوائها وانعكاسها في النطاق المسموع كتشوهات وهمية غير قابلة للإزالة",
      "يمكن أخذ العينات بأي معدل بطيء دون أي فقد للمعلومات"
    ],
    "correctAnswer": "Sampling frequency must satisfy $f_s \\ge 2 f_{max} = 44\\text{ kHz}$; the LPF attenuates any input frequencies above $f_s/2$ that would otherwise fold back (alias) into the audio band as unremovable phantom distortion",
    "correctIndex": 2,
    "hintEn": "Nyquist rate is $f_s \\ge 2 f_{max}$; sampling creates spectral copies at $k f_s \\pm f$.",
    "hintAr": "معدل نايكويست هو ضعف أعلى تردد: $f_s \\ge 2 f_{max}$. وينشئ أخذ العينات نسخاً طيفية عند مضاعفات $f_s$.",
    "stepByStepSolutionEn": [
      "Sampling in time multiplies the signal by a Dirac comb, which convolves the spectrum with impulses spaced by $f_s$, replicating the signal spectrum centered at integer multiples of $f_s$. If the input contains frequencies $f > f_s/2$ (the Nyquist folding frequency), these copies overlap and fold back into the baseband spectrum ($f_{alias} = |f_s - f|$). Because this overlap corrupts the baseband irreversibly, an analog steep roll-off low-pass anti-aliasing filter must eradicate all spectral energy above $f_s/2$ before sampling occurs."
    ],
    "stepByStepSolutionAr": [
      "يؤدي أخذ العينات زمنياً إلى تكرار طيف الإشارة الأصلي حول مضاعفات تردد العينات $f_s$. فإذا وُجدت أي إشارة بتردد يفوق نصف تردد العينات $f_s/2$، فإن طيفها ينطوي وينعكس داخل النطاق الترددي الأصلي مسبباً تشوهاً لا يمكن فصله أو معالجته برمجياً. ولذلك يُلزم وضع مرشح تناظري قاطع يمنع دخول أي تردد يتجاوز $f_s/2$ قبل أخذ العينات."
    ],
    "teacherTipEn": "Standard CD audio uses $f_s = 44.1\\text{ kHz}$ to capture the full $20\\text{ kHz}$ human auditory range.",
    "teacherTipAr": "يعتمد الصوت الرقمي للأقراص المدمجة $44.1\\text{ kHz}$ لتغطية كامل مجال السمع البشري حتى 20 كيلوهرتز بدقة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_52",
    "titleEn": "Master-Slave D Flip-Flop Edge-Triggering Mechanism",
    "titleAr": "آلية القدح الحافي في قلاب D الرئيسي-التابع (Master-Slave)",
    "difficulty": "hots",
    "questionEn": "How does a Master-Slave D flip-flop achieve true edge-triggered operation, completely eliminating the 'race-around' condition that plagues level-sensitive latches?",
    "questionAr": "كيف يحقق قلاب D من نوع (الرئيسي-التابع Master-Slave) قدحاً حقيقياً عند حافة النبضة، قاضياً تماماً على مشكلة 'حالة السباق' (Race-Around) التي تعيب الماسكات الحساسة للمستوى؟",
    "optionsEn": [
      "It contains a mechanical governor that slows down electron velocity",
      "It operates only when the clock frequency is strictly zero hertz",
      "It changes output randomly without any relation to input data",
      "It uses two cascading latches clocked with complementary phases: the Master isolates and samples input $D$ while clock is HIGH, and transfers the state to the Slave only on the falling edge when the Master input is locked"
    ],
    "optionsAr": [
      "يحتوي على منظم ميكانيكي يبطئ سرعة حركة الإلكترونات",
      "يعمل فقط عندما يكون تردد نبضات الساعة صفراً تماماً",
      "يغير الخرج عشوائياً دون أي ارتباط ببيانات الدخل",
      "يستخدم ماسكين متعاقبين يعملان بطورين متعاكسين للساعة: يعزل الرئيسي الدخل $D$ ويأخذ عينته عندما تكون الساعة مرتفعة، وينقل الحالة للتابع فقط عند الحافة الهابطة بعد إقفال دخل الرئيسي"
    ],
    "correctAnswer": "It uses two cascading latches clocked with complementary phases: the Master isolates and samples input $D$ while clock is HIGH, and transfers the state to the Slave only on the falling edge when the Master input is locked",
    "correctIndex": 3,
    "hintEn": "Master transparent when $CLK=1$ (Slave latched); Slave updates when $CLK=0$ (Master locked).",
    "hintAr": "يكون الرئيسي شفافاً عندما تكون الساعة 1 والتابع مقفلاً؛ وينتقل الخرج للتابع عند هبوط الساعة مع إقفال الرئيسي.",
    "stepByStepSolutionEn": [
      "In a level-sensitive latch, if clock remains HIGH while output feeds back to input, signals can race through multiple cycles unpredictably. A Master-Slave D flip-flop cascades two latches. When Clock is HIGH, the Master latch is enabled and stores $D$, while the inverted clock disables the Slave latch, isolating the output $Q$. On the clock transition, the Master is disabled (locking its internal state), and the Slave is enabled, updating $Q$ with the locked Master state. No continuous path exists between input and output simultaneously, eliminating race hazards."
    ],
    "stepByStepSolutionAr": [
      "في الماسك العادي، يؤدي بقاء نبضة الساعة مرتفعة إلى حدوث سباق إشارات غير منضبط إذا وُجدت تغذية راجعة. يعالج القلاب الرئيسي-التابع ذلك بوضع ماسكين على التوالي بنبضتي ساعة متعاكستين: يفتح الرئيسي ليسجل الدخل ويظل التابع مقفلاً، وعند هبوط نبضة الساعة يُقفل الرئيسي على بياناته فوراً ويفتح التابع ليعرض الخرج النهائي، فلا يلتقي الدخل بالخرج في آن واحد أبداً."
    ],
    "teacherTipEn": "Setup time ($t_{su}$) and hold time ($t_h$) define the narrow temporal aperture around the active clock edge.",
    "teacherTipAr": "يحدد زمنا الاستقرار والإمساك ($t_{su}$ و $t_h$) النافذة الزمنية الصارمة حول حافة الساعة لتفادي عدم الاستقرار."
  },
  {
    "id": "egbac_phys_ch4_db_hots_53",
    "titleEn": "Universal Shift Register Operational Modes",
    "titleAr": "أطوار تشغيل مسجل الإزاحة العام (Universal Shift Register)",
    "difficulty": "hots",
    "questionEn": "A 4-bit Universal Shift Register (e.g., 74HC194) utilizes a 4-to-1 multiplexer before each flip-flop with two mode control inputs ($S_1, S_0$). What are the four operational modes corresponding to $(S_1 S_0) = 00, 01, 10, 11$?",
    "questionAr": "يستخدم مسجل الإزاحة العام ذو 4 بت (مثل 74HC194) مجمّعاً 4 إلى 1 قبل كل قلاب مع طرفي تحكم بالنمط ($S_1, S_0$). ما هي الأنماط التشغيلية الأربعة المقابلة لتوليفات التحكم $(S_1 S_0) = 00, 01, 10, 11$؟",
    "optionsEn": [
      "$00$: Hold state (no change); $01$: Shift Right; $10$: Shift Left; $11$: Parallel Load",
      "$00$: Clear to zero; $01$: Invert all bits; $10$: Count up; $11$: Power down",
      "$00$: Shift Left; $01$: Shift Left; $10$: Shift Left; $11$: Shift Left",
      "$00$: Output sound; $01$: Output light; $10$: Output heat; $11$: Self-destruct"
    ],
    "optionsAr": [
      "$00$: إمساك الحالة (لا تغيير)؛ $01$: إزاحة لليمين؛ $10$: إزاحة لليسار؛ $11$: تحميل متوازٍ مباشر",
      "$00$: مسح وتصفير؛ $01$: قلب جميع الخانات؛ $10$: عد تصاعدي؛ $11$: إطفاء الطاقة",
      "$00$: إزاحة يسار؛ $01$: إزاحة يسار؛ $10$: إزاحة يسار؛ $11$: إزاحة يسار",
      "$00$: إخراج صوت؛ $01$: إخراج ضوء؛ $10$: إخراج حرارة؛ $11$: تدمير ذاتي"
    ],
    "correctAnswer": "$00$: Hold state (no change); $01$: Shift Right; $10$: Shift Left; $11$: Parallel Load",
    "correctIndex": 0,
    "hintEn": "Universal registers multiplex 4 sources: current $Q$ (hold), $Q_{i+1}$ (shift left), $Q_{i-1}$ (shift right), and external $D_i$ (load).",
    "hintAr": "يتحكم المجمع في تغذية القلاب: إعادة تدوير الخرج الحالي (ثبات)، أو إزاحة من الجار اليمين أو اليسار، أو إدخال متوازٍ.",
    "stepByStepSolutionEn": [
      "The universal shift register incorporates four D flip-flops with internal multiplexers. At mode $S_1 S_0 = 00$, each flip-flop input is routed back from its own output ($D_i = Q_i$), preserving data indefinitely. At $01$, input is taken from the preceding stage ($D_i = Q_{i-1}$), shifting data right. At $10$, input is taken from the succeeding stage ($D_i = Q_{i+1}$), shifting data left. At $11$, inputs connect directly to external parallel data bus pins ($D_i = I_i$), enabling synchronous parallel loading in one clock pulse."
    ],
    "stepByStepSolutionAr": [
      "يحتوي مسجل الإزاحة العام على مجمعات توجه البيانات: عند 00 يُعاد ربط الخرج بالدخل فيحافظ على الذاكرة دون تغيير. عند 01 تؤخذ البيانات من القلاب السابق فتزاح لليمين (قسمة على 2). وعند 10 تؤخذ من اللاحق فتزاح لليسار (ضرب في 2). وعند 11 تُحمل بيانات خارجية متوازية بضربة ساعة واحدة."
    ],
    "teacherTipEn": "Shift registers form the core architecture of serial-to-parallel communications (UART, SPI, and USB).",
    "teacherTipAr": "تشكل مسجلات الإزاحة الركيزة الأساسية لبروتوكولات الاتصال التسلسلي مثل UART و SPI و USB."
  },
  {
    "id": "egbac_phys_ch4_db_hots_54",
    "titleEn": "Ripple Counter Propagation Glitch vs Synchronous Counter",
    "titleAr": "خلل أزمنة التأخير في العدادات غير المتزامنة وميزة العدادات المتزامنة",
    "difficulty": "hots",
    "questionEn": "Why do asynchronous (ripple) binary counters suffer from transient output glitches and frequency limitations, and how does a synchronous counter architecture resolve this?",
    "questionAr": "لماذا تعاني العدادات الثنائية غير المتزامنة (التموجية) من ثغرات إخراج عابرة (Glitches) ومحدودية في أقصى تردد، وكيف تحل معمارية العداد المتزامن هذه المشكلة؟",
    "optionsEn": [
      "Ripple counters only count odd numbers, while synchronous counters only count even numbers",
      "In a ripple counter, each flip-flop is clocked by the output of the preceding stage, accumulating propagation delays ($t_{total} = N \\cdot t_{pd}$) that generate false decoded states; synchronous counters clock all flip-flops simultaneously from a common master clock",
      "Ripple counters consume 1000 times more physical power than synchronous counters",
      "Because synchronous counters do not contain any logic gates or transistors"
    ],
    "optionsAr": [
      "تعد العدادات التموجية الأرقام الفردية فقط، بينما تعد المتزامنة الأرقام الزوجية فقط",
      "في العداد التموجي، يُقدح كل قلاب بخرج القلاب السابق فتتراكم أزمنة التأخير ($t_{total} = N \\cdot t_{pd}$) مسببة حالات رقمية عابرة خاطئة؛ بينما يقدح العداد المتزامن جميع القلابات بضربة ساعة واحدة مشتركة",
      "تستهلك العدادات التموجية قدرة تزيد بألف ضعف عن المتزامنة",
      "لأن العدادات المتزامنة لا تحتوي على أي بوابات أو ترانزستورات"
    ],
    "correctAnswer": "In a ripple counter, each flip-flop is clocked by the output of the preceding stage, accumulating propagation delays ($t_{total} = N \\cdot t_{pd}$) that generate false decoded states; synchronous counters clock all flip-flops simultaneously from a common master clock",
    "correctIndex": 1,
    "hintEn": "Ripple counters accumulate delay: $N \\times t_{pd}$. Synchronous counters have constant delay equal to one flip-flop.",
    "hintAr": "تتراكم أزمنة التأخير في العداد التموجي لتصل إلى $N \\times t_{pd}$، بينما في المتزامن يكون التأخير ثابتاً لقلاب واحد فقط.",
    "stepByStepSolutionEn": [
      "In an asynchronous counter, flip-flop 0 toggles flip-flop 1, which toggles flip-flop 2. For an $N$-bit transition (e.g. from $0111_2 \\to 1000_2$), the ripple carry must propagate through $N$ stages, taking time $N \\cdot t_{pd}$. During this settling interval, intermediate transient states appear (e.g. $0110, 0100, 0000$), producing severe glitches in downstream decoder circuits. In a synchronous counter, all clock pins are tied to a single common clock line, and look-ahead AND logic computes enable conditions in parallel. All output bits transition simultaneously in exactly $1 t_{pd}$."
    ],
    "stepByStepSolutionAr": [
      "في العداد التموجي (غير المتزامن)، يتنقل نبض القدح كالموجة من قلاب لآخر. فعند الانتقال من 0111 إلى 1000، يتتابع تبديل القلابات واحداً تلو الآخر مستغرقاً زمناً تراكمياً $N \\cdot t_{pd}$ تمر خلاله مخرجات العداد بحالات عابرة وهمية تشغل أجهزة التحكم خطأ. أما في العداد المتزامن، فتتصل كل القلابات بساعة مشتركة وتتحكم بوابات توجيه منطقية بالتبديل المتزامن بضربة واحدة دقيقة."
    ],
    "teacherTipEn": "High-speed digital designs strictly mandate synchronous clock architectures.",
    "teacherTipAr": "تفرض الأنظمة الرقمية الحديثة عالية السرعة استخدام التصاميم المتزامنة الصارمة تجنباً لأخطاء التوقيت."
  },
  {
    "id": "egbac_phys_ch4_db_hots_55",
    "titleEn": "Carry-Lookahead Adder (CLA) Speed Enhancement",
    "titleAr": "تسريع الجمع الرقمي باستخدام جامع استباق الحمل (CLA)",
    "difficulty": "hots",
    "questionEn": "In high-speed arithmetic logic units (ALUs), how does a Carry-Lookahead Adder (CLA) reduce calculation latency compared to a ripple-carry adder?",
    "questionAr": "في وحدات الحساب والمنطق (ALU) فائقة السرعة، كيف يقلل جامع استباق الحمل (CLA) زمن تأخير الحساب مقارنة بجامع الحمل التموجي التقليدي؟",
    "optionsEn": [
      "It rounds all input numbers to the nearest multiple of ten before adding",
      "It performs digital addition using analog mechanical gears",
      "It precomputes carry bits simultaneously across all bit positions using carry generate ($G_i = A_i B_i$) and carry propagate ($P_i = A_i \\oplus B_i$) logic, reducing addition delay from linear $O(N)$ to logarithmic $O(\\log N)$",
      "It eliminates the carry bit completely, performing approximate addition"
    ],
    "optionsAr": [
      "يقرب جميع الأرقام المدخلة لأقرب مضاعف للعشرة قبل إجراء الجمع",
      "يجري الجمع الرقمي باستخدام تروس ميكانيكية تناظرية",
      "يحسب خانات الحمل مسبقاً لجميع المواضع في آن واحد باستخدام دوال توليد الحمل ($G_i = A_i B_i$) ونقل الحمل ($P_i = A_i \\oplus B_i$)، مما يخفض زمن التأخير من خطي $O(N)$ إلى لوغاريتمي $O(\\log N)$",
      "يلغي خانة الحمل نهائياً ويجري جمعاً تقريبياً للأعداد"
    ],
    "correctAnswer": "It precomputes carry bits simultaneously across all bit positions using carry generate ($G_i = A_i B_i$) and carry propagate ($P_i = A_i \\oplus B_i$) logic, reducing addition delay from linear $O(N)$ to logarithmic $O(\\log N)$",
    "correctIndex": 2,
    "hintEn": "Generate: $G_i = A_i B_i$; Propagate: $P_i = A_i \\oplus B_i$; Carry: $C_{i+1} = G_i + P_i C_i$.",
    "hintAr": "توليد الحمل: $G_i = A_i B_i$؛ ونقل الحمل: $P_i = A_i \\oplus B_i$؛ ومعادلة الحمل: $C_{i+1} = G_i + P_i C_i$.",
    "stepByStepSolutionEn": [
      "In a ripple-carry adder, each full adder must wait for the carry bit $C_{in}$ from the prior stage, causing a delay that grows linearly with word length ($t \\propto N$). In a CLA, each stage generates $G_i = A_i B_i$ (a carry is definitely born) and $P_i = A_i + B_i$ (a carry is passed along). Expanding the carry recursion yields $C_1 = G_0 + P_0 C_0$, $C_2 = G_1 + P_1 G_0 + P_1 P_0 C_0$, etc. Because all carries are expressed purely in terms of the initial inputs $A, B$ and $C_0$, they are evaluated in parallel through 2 gate levels, yielding $O(\\log N)$ total delay for large hierarchical adders."
    ],
    "stepByStepSolutionAr": [
      "في جامع الحمل التموجي، ينتظر كل جامع اكتمال حمل الخانة السابقة، فيزداد التأخير خطياً مع عدد الخانات. يحل جامع CLA ذلك بتعريف دالتين لكل خانة: توليد الحمل $G_i = A_i B_i$ ونقل الحمل $P_i = A_i \\oplus B_i$. وبفك المعادلات رياضياً، يُعبر عن كل حمل $C_i$ بدلالة المدخلات الأصلية مباشرة، فيتم احتساب جميع الحمول بالتوازي في مستويين منطقيين فقط، مما يسرع المعالجة بشكل هائل."
    ],
    "teacherTipEn": "CLA blocks form the computational core of CPU math co-processors and GPU shader pipelines.",
    "teacherTipAr": "تشكل وحدات CLA النواة الحسابية لمعالجات الحواسيب وبطاقات معالجة الرسوميات GPU."
  },
  {
    "id": "egbac_phys_ch4_db_hots_56",
    "titleEn": "Flash ADC Architecture and Comparator Complexity",
    "titleAr": "معمارية المحول التناظري الرقمي الومضي (Flash ADC) وتعقيد المقارنات",
    "difficulty": "hots",
    "questionEn": "What architectural tradeoff characterizes a Flash (Direct-Conversion) Analog-to-Digital Converter (ADC), enabling ultra-high conversion speed at the expense of circuit complexity?",
    "questionAr": "ما هي المقايضة الهندسية الأساسية التي تميز المحول التناظري الرقمي الومضي (Flash ADC)، والتي تمنحه سرعة تحويل فائقة السرعة على حساب التعقيد الدائري؟",
    "optionsEn": [
      "It converts data by scanning an optical laser across a rotating mirror over several seconds",
      "It requires zero comparators and zero electrical components to digitize signals",
      "It has an exponential conversion time $O(2^N)$ with only one comparator",
      "It uses an array of $2^N - 1$ high-speed analog comparators operating in parallel against a precision resistor divider ladder, digitizing the input in a single clock cycle ($O(1)$ time) but scaling comparator count exponentially ($O(2^N)$ hardware)"
    ],
    "optionsAr": [
      "يحول البيانات بمسح ليزر ضوئي عبر مرآة دوارة خلال عدة ثوانٍ",
      "لا يتطلب أي مقارنات أو مكونات إلكترونية لتحويل الإشارات",
      "يمتلك زمن تحويل أسياً بطيئاً جداً باستخدام مقارن وحيد",
      "يستخدم مصفوفة من $2^N - 1$ مقارناً تناظرياً سريعاً تعمل بالتوازي ضد سلم مجزئ جهد، فيحول الإشارة في دورة ساعة واحدة ($O(1)$) بتكلفة تضاعف أسي لعدد المقارنات ($O(2^N)$)"
    ],
    "correctAnswer": "It uses an array of $2^N - 1$ high-speed analog comparators operating in parallel against a precision resistor divider ladder, digitizing the input in a single clock cycle ($O(1)$ time) but scaling comparator count exponentially ($O(2^N)$ hardware)",
    "correctIndex": 3,
    "hintEn": "Flash ADC requires $2^N - 1$ comparators: 8-bit needs 255 comparators, 10-bit needs 1023.",
    "hintAr": "يحتاج محول Flash إلى $2^N - 1$ مقارناً: يتطلب 8 بت 255 مقارناً، ويتطلب 10 بت 1023 مقارناً متوازياً.",
    "stepByStepSolutionEn": [
      "A Flash ADC is the fastest ADC architecture. A resistive reference ladder divides the reference voltage into $2^N$ equal voltage steps. Each node feeds the inverting terminal of a comparator, while the analog input $V_{in}$ connects to all non-inverting terminals simultaneously. In one instant, all comparators whose reference is below $V_{in}$ output '1', generating a 'thermometer code'. A priority logic encoder converts this code to binary in a single clock cycle ($t_{conv} \\sim 1\\text{ ns}$). However, the component count $2^N - 1$ doubles for each additional bit, making resolutions $> 8\\text{ to } 10\\text{ bits}$ prohibitively power-hungry."
    ],
    "stepByStepSolutionAr": [
      "يعد المحول الومضي Flash أسرع محول على الإطلاق؛ حيث يقسم سلم مقاومات الجهد المرجعي لـ $2^N$ مستوى، وتتصل كلها بـ $2^N - 1$ مقارناً تناظرياً في آن واحد. تقارن الدائرة الدخل مع كل المستويات بالتوازي وتخرج كوداً حرارياً (Thermometer code) يُترجم فوراً لكود ثنائي في دورة ساعة واحدة. لكن تضاعف عدد المقارنات مع كل بت يجعل تطبيقه فوق 8 بت مكلفاً جداً في استهلاك الطاقة."
    ],
    "teacherTipEn": "Flash ADCs are essential for digital storage oscilloscopes, radar receivers, and optical fiber transceivers.",
    "teacherTipAr": "تستخدم المحولات الومضية في راسمات الإشارة الرقمية (Oscilloscopes) وأجهزة الاستقبال الرادارية."
  },
  {
    "id": "egbac_phys_ch4_db_hots_57",
    "titleEn": "Successive Approximation Register (SAR) ADC Binary Search",
    "titleAr": "المحول التناظري الرقمي ذو السجل التتابعي (SAR ADC) والبحث الثنائي",
    "difficulty": "hots",
    "questionEn": "How does a Successive Approximation Register (SAR) ADC digitize an analog input voltage $V_{in}$, and what is its exact conversion latency in clock cycles for an $N$-bit output?",
    "questionAr": "كيف يحول محول SAR التناظري الرقمي جهد الدخل $V_{in}$ إلى رقم ثنائي، وما هو زمن التحويل الدقيق بدورات الساعة لمخرج بدقة $N$-بت؟",
    "optionsEn": [
      "It executes a binary search algorithm using a single comparator and an internal DAC, testing bits sequentially from Most Significant Bit (MSB) to Least Significant Bit (LSB) in exactly $N$ clock cycles",
      "It counts upwards from 0 to $2^N$ one by one, taking $2^N$ clock cycles",
      "It digitizes in $1/N$ clock cycles by dividing the clock frequency",
      "It requires $N^2$ comparators operating simultaneously"
    ],
    "optionsAr": [
      "ينفذ خوارزمية بحث ثنائي باستخدام مقارن وحيد ومحول رقمي-تناظري داخلي (DAC)، مختبراً الخانات بالتتابع من الخانة الأكثر أهمية (MSB) إلى الأقل (LSB) في $N$ دورة ساعة بالضبط",
      "يعد تصاعدياً من 0 إلى $2^N$ خطوة بخطوة، مستغرقاً $2^N$ دورة ساعة",
      "يحول الإشارة في $1/N$ دورة ساعة عن طريق قسمة تردد الساعة",
      "يتطلب $N^2$ مقارناً تعمل بالتوازي في آن واحد"
    ],
    "correctAnswer": "It executes a binary search algorithm using a single comparator and an internal DAC, testing bits sequentially from Most Significant Bit (MSB) to Least Significant Bit (LSB) in exactly $N$ clock cycles",
    "correctIndex": 0,
    "hintEn": "SAR ADC tests one bit per clock cycle: MSB first ($V_{ref}/2$), then $V_{ref}/4$, etc. Takes $N$ cycles.",
    "hintAr": "يختبر محول SAR خانة واحدة في كل نبضة ساعة بدءاً من الخانة الكبرى (نصف الجهد) كالبحث الثنائي مستغرقاً $N$ نبضة.",
    "stepByStepSolutionEn": [
      "A SAR ADC uses a sample-and-hold circuit, a single analog comparator, a Successive Approximation Register, and an internal DAC. In cycle 1, SAR sets the MSB to 1 ($V_{DAC} = V_{ref}/2$). The comparator determines if $V_{in} > V_{DAC}$; if true, the bit remains 1, otherwise it is cleared to 0. In cycle 2, the next bit is set ($V_{DAC} = V_{ref}/2 \\pm V_{ref}/4$) and tested. This binary search process repeats down to the LSB, converging on the exact digital code in precisely $N$ clock cycles with minimal power and hardware footprint."
    ],
    "stepByStepSolutionAr": [
      "يعتمد محول SAR على خوارزمية البحث الثنائي الأنيقة: في النبضة الأولى يختبر نصف الجهد المرجعي (MSB=1) عبر مقارن وحيد؛ فإذا كان دخل الإشارة أكبر يثبت البت 1 وإلا يعيده لـ 0. ثم يختبر الربع، ثم الثمن، وهكذا دواليك لكل خانة. يكتمل التحويل في $N$ دورة ساعة بالضبط بمكونات بسيطة واستهلاك طاقة ضئيل للغاية ودقة عالية تصل إلى 18 بت."
    ],
    "teacherTipEn": "SAR ADCs dominate modern microcontrollers, biomedical implants, and IoT sensor nodes.",
    "teacherTipAr": "تهيمن محولات SAR على وحدات التحكم الدقيقة (Microcontrollers) والمجسات الطبية الحيوية وأجهزة إنترنت الأشياء."
  },
  {
    "id": "egbac_phys_ch4_db_hots_58",
    "titleEn": "SRAM 6T Cell vs DRAM 1T1C Cell Comparison",
    "titleAr": "مقارنة خلية ذاكرة SRAM سداسية الترانزستورات بخلية DRAM أحادية المكثف",
    "difficulty": "hots",
    "questionEn": "How do Static RAM (SRAM) and Dynamic RAM (DRAM) memory cells differ in circuit architecture, speed, density, and volatile data retention mechanisms?",
    "questionAr": "كيف تختلف خلايا الذاكرة العشوائية الساكنة (SRAM) والديناميكية (DRAM) في البنية الدائرية، والسرعة، والكثافة، وآلية الحفاظ على البيانات المتطايرة؟",
    "optionsEn": [
      "SRAM uses magnetic disk plates, while DRAM uses flash optical memory",
      "SRAM uses a 6-transistor (6T) cross-coupled bistable inverter latch that holds data statically without refreshing at ultra-high speed (CPU cache), whereas DRAM stores charge on a microscopic capacitor gated by a single transistor (1T1C), requiring periodic refreshing every $\\sim 64\\text{ ms}$ due to leakage but achieving vastly higher storage density (main memory)",
      "SRAM loses its data when read once, while DRAM retains data permanently after power is switched off",
      "DRAM operates at $1000\\text{ GHz}$, whereas SRAM is limited to $1\\text{ Hz}$"
    ],
    "optionsAr": [
      "تستخدم SRAM أقراصاً مغناطيسية، بينما تستخدم DRAM ذاكرة ضوئية وميضية",
      "تستخدم SRAM خلية من 6 ترانزستورات (6T) كماسك ثنائي الاستقرار يحفظ البيانات ذاتياً دون إنعاش بسرعة فائقة (كاش المعالج)، بينما تخزن DRAM الشحنة على مكثف مجهري بخلية ترانزستور ومكثف (1T1C) تتطلب إنعاشاً دورياً كل $\\sim 64\\text{ ms}$ للتسريب ولكنها توفر كثافة تخزينية هائلة (الذاكرة الرئيسية)",
      "تفقد SRAM بياناتها عند قراءتها مرة واحدة، بينما تحتفظ DRAM ببياناتها حتى بعد انقطاع الكهرباء",
      "تعمل ذاكرة DRAM بتردد 1000 جيجاهرتز بينما تقتصر SRAM على تردد 1 هرتز فقط"
    ],
    "correctAnswer": "SRAM uses a 6-transistor (6T) cross-coupled bistable inverter latch that holds data statically without refreshing at ultra-high speed (CPU cache), whereas DRAM stores charge on a microscopic capacitor gated by a single transistor (1T1C), requiring periodic refreshing every $\\sim 64\\text{ ms}$ due to leakage but achieving vastly higher storage density (main memory)",
    "correctIndex": 1,
    "hintEn": "SRAM = 6T bistable latch (fast, low density, no refresh). DRAM = 1T1C charge storage (high density, needs refresh).",
    "hintAr": "ذاكرة SRAM: 6 ترانزستورات متعاكسة (فائقة السرعة، كثافة منخفضة، بلا إنعاش). ذاكرة DRAM: ترانزستور ومكثف (كثافة ضخمة، تحتاج إنعاش دوري).",
    "stepByStepSolutionEn": [
      "A 6T SRAM cell consists of two cross-coupled CMOS inverters forming a bistable multivibrator, flanked by two access transistors connected to complementary bit lines ($BL, \\overline{BL}$). Data is held indefinitely as long as $V_{DD}$ is supplied, allowing sub-nanosecond access times suitable for L1/L2 CPU caches. A DRAM cell consists of a single access NMOS transistor and a trench/stack storage capacitor ($C_s \\approx 25\\text{ fF}$). Because charge leaks through junction and dielectric subthreshold paths, the cell must be refreshed every $64\\text{ ms}$ via read-and-rewrite cycles. However, its tiny footprint enables gigabits per chip for computer RAM."
    ],
    "stepByStepSolutionAr": [
      "تتكون خلية SRAM من عاكسين متصالبين (6 ترانزستورات) يشكلان ماسكاً ثنائي الاستقرار يحفظ البيانات مادام التيار مستمراً دون أي حاجة لإنعاش وبسرعات نانوية تناسب كاش المعالج (Cache). أما DRAM فتتكون من ترانزستور ومكثف فائق الصغر (1T1C). وبسبب تسريب الشحنات الكهربائية من المكثف، يجب إعادة إنعاش شحنته دورياً كل نحو 64 ملي ثانية. لكن حجمها المجهري البالغ جزءاً صغيراً من حجم خلية SRAM يتيح وضع مليارات الخلايا على الرقاقة للذاكرة العشوائية الرئيسية (RAM)."
    ],
    "teacherTipEn": "Modern High Bandwidth Memory (HBM) stacks DRAM dies vertically using Through-Silicon Vias (TSVs).",
    "teacherTipAr": "تُدمج رقائق DRAM حالياً عمودياً عبر تقنية الحفر السيليكوني (TSV) لإنتاج ذواكر النطاق الترددي الفائق HBM للذكاء الاصطناعي."
  }
]
};
