import type { Branch } from '../types/curriculum';
import { nanotechnologyCh1Textbook } from './textbook/thanaweya/nanotechnologyCh1Textbook';
import { nanotechnologyCh2Textbook } from './textbook/thanaweya/nanotechnologyCh2Textbook';
import { nanotechnologyCh3Textbook } from './textbook/thanaweya/nanotechnologyCh3Textbook';
import { nanotechnologyCh4Textbook } from './textbook/thanaweya/nanotechnologyCh4Textbook';
import { nanotechnologyCh1Databank } from './databanks/thanaweya/nanotechnologyCh1Databank';
import { nanotechnologyCh2Databank } from './databanks/thanaweya/nanotechnologyCh2Databank';
import { nanotechnologyCh3Databank } from './databanks/thanaweya/nanotechnologyCh3Databank';
import { nanotechnologyCh4Databank } from './databanks/thanaweya/nanotechnologyCh4Databank';

export const thanaweyaNanotechnologyBranch: Branch = {
  id: 'thanaweya_nanotechnology',
  titleEn: 'Nanotechnology & Advanced Materials Science',
  titleAr: 'النانوتكنولوجي وعلوم المواد المتقدمة',
  iconName: 'Atom',
  colorGradient: 'from-teal-600 via-cyan-600 to-blue-700',
  categoryEn: 'Nanotechnology & Advanced Materials',
  categoryAr: 'النانوتكنولوجي والمواد المتقدمة',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_nanotechnology_ch1',
      chapterNumber: 1,
      titleEn: 'Foundations of Nanoscale Physics & Quantum Confinement',
      titleAr: 'أسس فيزياء مقياس النانو وظواهر الحبس الكمي',
      descriptionEn: 'Specific surface area explosion, quantum confinement, Brus bandgap expansion equation, exciton Bohr radius, top-down vs bottom-up synthesis, and high-resolution electron microscopy (SEM/TEM/AFM).',
      descriptionAr: 'الانفجار الهندسي للمساحة السطحية النوعية، الحبس الكمي، معادلة بروس لاتساع فجوة الطاقة، نصف قطر بور للإكسيتون، طرق التصنيع من أعلى لأسفل ومن أسفل لأعلى، والمجهر الإلكتروني فائق الدقة (SEM/TEM/AFM).',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_nanotechnology_ch1_l1',
          titleEn: 'Nanoscale Scaling Laws, Quantum Confinement & Synthesis Methods',
          titleAr: 'قوانين التحجيم النانوية، الحبس الكمي وطرائق التخليق المتقدمة',
          summaryEn: 'Surface-to-volume ratio scaling, quantum dot discrete states, Brus equation bandgap tuning, ball milling, chemical vapor deposition, and electron microscopy.',
          summaryAr: 'معدلات تزايد نسبة المساحة إلى الحجم، مستويات الطاقة المنفصلة في النقاط الكمية، ضبط فجوة الطاقة بمعادلة بروس، الطحن الكروي، الترسيب البخاري الكيميائي والمجهر الإلكتروني.',
          theoryContentEn: 'At the nanoscale (1–100 nm), materials exhibit drastic deviations from classical bulk behavior. The surface-to-volume ratio scales inversely with characteristic dimension d (6/d for spheres), rendering surface atoms highly energetic and catalytically active. When the particle radius drops below the exciton Bohr radius, spatial confinement quantizes electron and hole wavefunctions, discretizing continuous energy bands into atom-like states as described by the Brus equation: E_g(R) = E_g,bulk + (ħ²π²)/(2m*R²) - 1.8e²/(4πε₀ε_r R). Top-down fabrication techniques (photolithography, planetary ball milling) reduce macroscopic bulk matter through mechanical shear, whereas bottom-up synthesis (sol-gel, hydrothermal, CVD) self-assembles atomic and molecular precursors with atomic precision. Characterization relies on de Broglie electron wavelengths in SEM and TEM, exceeding optical diffraction limits down to picometer resolutions.',
          theoryContentAr: 'عند مقياس النانو (1–100 نانومتر)، تُظهر المواد تحولات جذرية عن السلوك الفيزيائي للمادة الكتلية. تتناسب نسبة مساحة السطح إلى الحجم عكسياً مع القطر المميز d (6/d للكرات)، مما يجعل ذرات السطح ذات طاقة فائقة ونشاط تحفيزي هائل. وعندما يقل نصف قطر الجسيم عن نصف قطر بور للإكسيتون، يؤدي الحبس المكاني إلى تكميم الدوال الموجية للإلكترونات والفجوات، محولاً نطاقات الطاقة المستمرة إلى مستويات ذرية منفصلة وفق معادلة بروس. وتعتمد طرائق التصنيع من أعلى لأسفل (كالطحن الكروي والطباعة الضوئية) على تفتيت المادة ميكانيكياً، بينما تقوم طرائق من أسفل لأعلى (كالصول-جل والترسيب البخاري CVD) على التجميع الذاتي للذرات والجزيئات. ويتم التوصيف الفيزيائي عبر طول موجة دي برولي للإلكترونات في مجاهر SEM و TEM متجاوزة حدود الحيود الضوئي.',
          moeRef: {
            bookTitleEn: 'Egyptian Secondary Curriculum: Nanotechnology & Advanced Materials Science',
            bookTitleAr: 'المنهج الوزاري الثانوي: النانوتكنولوجي وعلوم المواد المتقدمة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-NANOTECH-G12-CH1',
            pageRange: 'pp. 1-78'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Quantum Confinement Derivation & Electron Microscopy Calibration',
            titleAr: 'خطة الدرس: استنتاج معادلة الحبس الكمي ومعايرة المجهر الإلكتروني',
            gradeLevel: 'Grade 12 STEM / Secondary',
            durationMinutes: 90,
            objectives: [
              'Calculate surface area to volume ratio scaling across micro and nanoscale transitions',
              'Derive optical bandgap blue-shift in CdSe quantum dots using the Brus equation',
              'Determine electron de Broglie wavelength and theoretical resolution in TEM under 200 kV accelerating voltage'
            ]
          },
          worksheet: {
            id: 'ws_th_nanotechnology_ch1_l1',
            titleEn: 'Worksheet 1: Brus Equation Shift & Specific Surface Area Calculations',
            titleAr: 'ورقة عمل 1: حسابات إزاحة معادلة بروس والمساحة السطحية النوعية',
            descriptionEn: 'Compute emission peak shifts, exciton Bohr radii, and BET specific surface areas for gold and titanium oxide nanoparticles.',
            descriptionAr: 'حساب إزاحات قمم الانبعاث الضوئي، وأنصاف أقطار بور، والمساحة السطحية النوعية لجزيئات الذهب وأكسيد التيتانيوم.',
            estimatedTimeMinutes: 45,
            problems: nanotechnologyCh1Textbook.slice(0, 3)
          },
          interactiveWidget: {
            type: 'quantum_dot_confinement_simulator',
            titleEn: 'Quantum Dot Exciton Confinement & Bandgap Tuner',
            titleAr: 'محاكي الحبس الكمي للإكسيتون وضبط فجوة الطاقة في النقاط الكمية',
            descriptionEn: 'Tune quantum dot radius in real-time to observe the Brus blue-shift in optical absorption and photoluminescence spectra.',
            descriptionAr: 'غيّر نصف قطر النقطة الكمية لحظياً لمشاهدة الإزاحة الزرقاء في طيف الامتصاص والانبعاث الفلوري.'
          }
        }
      ],
      solvedExamples: nanotechnologyCh1Textbook.slice(0, 10),
      exerciseProblems: nanotechnologyCh1Textbook.slice(10, 25),
      databank: nanotechnologyCh1Databank
    },
    {
      id: 'th_nanotechnology_ch2',
      chapterNumber: 2,
      titleEn: 'Carbon Allotropes, Graphene & Low-Dimensional Nanostructures',
      titleAr: 'متآصلات الكربون، الجرافين والتراكيب النانوية منخفضة الأبعاد',
      descriptionEn: 'sp² hybridization, Dirac cone band dispersion in graphene, single-walled and multi-walled carbon nanotubes (chiral indices n,m), mechanical tensile strength, electrical ballistic transport, and MXenes.',
      descriptionAr: 'التهجين sp²، تشتت مخاريط ديراك في الجرافين، أنابيب الكربون النانوية أحادية ومتعددة الجدران (المؤشرات الكيرالية n,m)، قوة الشد الميكانيكية، التوصيل الكهربي الباليستي، ومواد الماكسين ثنائية الأبعاد.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_nanotechnology_ch2_l1',
          titleEn: 'Dirac Fermions, Carbon Nanotube Chirality & 2D Layered Materials',
          titleAr: 'فرميونات ديراك، كيرالية أنابيب الكربون النانوية والمواد ثنائية الأبعاد',
          summaryEn: 'Graphene honeycomb lattice, massless Dirac fermions, CNT chiral indices (n,m) governing metallic vs semiconducting states, and MXene intercalation.',
          summaryAr: 'الشبكة السداسية للجرافين، فرميونات ديراك عديمة الكتلة، المؤشرات الكيرالية (n,m) الحاكمة للموصلية وشبه الموصلية، وتداخل طبقات الماكسينات.',
          theoryContentEn: 'Carbon allotropes demonstrate how dimensional reduction transforms material physics. Monolayer graphene comprises a two-dimensional honeycomb lattice of sp²-hybridized carbon atoms. Its low-energy electronic excitations behave as massless relativistic Dirac fermions governed by the Dirac equation, yielding exceptional carrier mobility (>200,000 cm²/V·s) and ballistic transport. Carbon nanotubes (CNTs) are cylindrical structures formed by rolling graphene sheets along a chiral vector C_h = n a₁ + m a₂. The chiral indices (n,m) dictate whether the nanotube is metallic (when (2n+m)/3 or (n-m)/3 is an integer) or semiconducting. CNTs achieve colossal axial Young moduli (~1 TPa) and tensile strengths (~100 GPa). Transition metal carbides and nitrides (MXenes) expand 2D materials into electrochemical energy storage through hydrophilic surface terminations and high volumetric capacitances.',
          theoryContentAr: 'توضح متآصلات الكربون كيف يغير خفض الأبعاد الخواص الفيزيائية للمادة. يتكون الجرافين أحادي الطبقة من شبكة سداسية ثنائية الأبعاد لذرات كربون مهجنة sp². وتتصرف الإلكترونات فيه كفرميونات ديراك نسبية عديمة الكتلة، محققة حركية ناقلات فائقة تتجاوز 200,000 cm²/V·s ونقلاً باليستياً. وتتشكل أنابيب الكربون النانوية (CNTs) من طي صفائح الجرافين على امتداد متجه كيرالي C_h = n a₁ + m a₂. وتحدد المؤشرات (n,m) ما إذا كان الأنبوب موصلاً معدنياً (عندما يقبل (n-m) القسمة على 3) أو شبه موصل. وتحقق أنابيب الكربون معامل يونغ هائل (~1 TPa) وقوة شد تفوق 100 GPa. وتوسع مواد الماكسينات ثنائية الأبعاد تطبيقات تخزين الطاقة الكهروكيميائية بسعات حجمية استثنائية.',
          moeRef: {
            bookTitleEn: 'Egyptian Secondary Curriculum: Nanotechnology & Advanced Materials Science',
            bookTitleAr: 'المنهج الوزاري الثانوي: النانوتكنولوجي وعلوم المواد المتقدمة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-NANOTECH-G12-CH2',
            pageRange: 'pp. 79-158'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: CNT Chiral Vector Analysis & Graphene Dirac Point Transport',
            titleAr: 'خطة الدرس: تحليل المتجه الكيرالي للأنابيب النانوية ونقل الشحنات عند نقاط ديراك',
            gradeLevel: 'Grade 12 STEM / Secondary',
            durationMinutes: 90,
            objectives: [
              'Calculate carbon nanotube diameter and chiral angle from indices (n,m)',
              'Differentiate metallic and semiconducting carbon nanotubes using the modular chiral condition (n-m) mod 3',
              'Analyze ballistic electrical conductance in graphene quantum Hall regimes'
            ]
          },
          worksheet: {
            id: 'ws_th_nanotechnology_ch2_l1',
            titleEn: 'Worksheet 2: Nanotube Diameter & Tensile Stress Limits',
            titleAr: 'ورقة عمل 2: أقطار الأنابيب النانوية وحدود إجهاد الشد الميكانيكي',
            descriptionEn: 'Compute chiral vector lengths, nanotube diameters, rolling angles, and breaking force limits.',
            descriptionAr: 'حساب أطوال المتجهات الكيرالية، وأقطار الأنابيب النانوية، وزوايا اللف، وحدود قوى الانقطاع.',
            estimatedTimeMinutes: 45,
            problems: nanotechnologyCh2Textbook.slice(0, 3)
          },
          interactiveWidget: {
            type: 'cnt_chirality_simulator',
            titleEn: 'Carbon Nanotube Chirality & Electronic Band Structure Generator',
            titleAr: 'محاكي كيرالية أنابيب الكربون النانوية وبنية حزم الطاقة الإلكترونية',
            descriptionEn: 'Select indices (n,m) to roll 2D graphene into metallic armchair or semiconducting zig-zag/chiral nanotubes.',
            descriptionAr: 'اختر المؤشرات الكيرالية (n,m) لطي شبكة الجرافين وملاحظة الحزم الإلكترونية المعدنية وشبه الموصلة.'
          }
        }
      ],
      solvedExamples: nanotechnologyCh2Textbook.slice(0, 10),
      exerciseProblems: nanotechnologyCh2Textbook.slice(10, 25),
      databank: nanotechnologyCh2Databank
    },
    {
      id: 'th_nanotechnology_ch3',
      chapterNumber: 3,
      titleEn: 'Nanomaterials for Clean Energy, Catalysis & Environment',
      titleAr: 'المواد النانوية للطاقة النظيفة، الحفز الكيميائي والبيئة',
      descriptionEn: 'Nanostructured perovskite solar cells, dye-sensitized solar cells (DSSC), heterogeneous photocatalysis on TiO₂, green hydrogen water splitting, and nanostructured lithium/sodium battery anodes.',
      descriptionAr: 'خلايا البيروفسكايت الشمسية النانوية، الخلايا الشمسية الصبغية (DSSC)، التحفيز الضوئي غير المتجانس على ثاني أكسيد التيتانيوم، إنتاج الهيدروجين الأخضر بشطر الماء، ومصاعد بطاريات الليثيوم النانوية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_nanotechnology_ch3_l1',
          titleEn: 'Photocatalytic Solar Water Splitting, Perovskites & Advanced Battery Nanomaterials',
          titleAr: 'شطر الماء ضوئياً بالتحفيز الشمسي، البيروفسكايت ومواد البطاريات النانوية المتقدمة',
          summaryEn: 'Band alignment in TiO₂ photocatalysis, electron-hole recombination kinetics, triple-cation perovskite photovoltaics, and silicon nanoparticle lithium battery anodes.',
          summaryAr: 'محاذاة حزم الطاقة في تحفيز ثاني أكسيد التيتانيوم، حركية إعادة اتحاد الإلكترون والفجوة، خلايا البيروفسكايت ثلاثية الكاتيونات، ومصاعد السيليكون النانوية للبطاريات.',
          theoryContentEn: 'Nanomaterials play a transformative role in decarbonization, solar energy conversion, and electrochemical storage. In heterogeneous photocatalysis, incident photons with energy exceeding the bandgap of nanocrystalline TiO₂ (3.2 eV anatase) generate electron-hole pairs. Photogenerated holes oxidize surface-adsorbed water to generate highly reactive hydroxyl radicals (·OH) and oxygen, while conduction-band electrons reduce protons into green hydrogen gas. In photovoltaics, organometal halide perovskites (CH₃NH₃PbI₃) achieve power conversion efficiencies surpassing 26% owing to long carrier diffusion lengths, high absorption coefficients, and nanostructured mesoporous TiO₂ scaffold electron collectors. In battery engineering, silicon nanoparticle anodes accommodate huge volume expansions (~300%) during lithiation without mechanical pulverization, delivering theoretical capacities of 4,200 mAh/g compared to conventional graphite (372 mAh/g).',
          theoryContentAr: 'تلعب المواد النانوية دوراً محورياً في خفض الانبعاثات والتحول للطاقة الشمسية والتخزين الكهروكيميائي. ففي التحفيز الضوئي غير المتجانس، تولد فوتونات الضوء ذات الطاقة الأعلى من فجوة حزمة TiO₂ النانوي (3.2 eV للأناتاز) أزواج الإلكترون والفجوة. وتؤكسد الفجوات جزيئات الماء لتكوين جذور الهيدروكسيل الحرة (·OH) وغاز الأكسجين، بينما تختزل إلكترونات حزمة التوصيل البروتونات لإنتاج الهيدروجين الأخضر. وفي الخلايا الكهروضوئية، تحقق بيروفسكايت هاليد الرصاص العضوي كفاءات تحويل تفوق 26% بفضل أطوال انتشار الناقلات المديدة ودعامات TiO₂ النانوية المسامية. وفي هندسة البطاريات، تستوعب مصاعد جسيمات السيليكون النانوية التمدد الحجمي الهائل (~300%) أثناء شحن الليثيوم مانحة سعات نوعية تبلغ 4,200 mAh/g مقارنة بالجرافيت التقليدي (372 mAh/g).',
          moeRef: {
            bookTitleEn: 'Egyptian Secondary Curriculum: Nanotechnology & Advanced Materials Science',
            bookTitleAr: 'المنهج الوزاري الثانوي: النانوتكنولوجي وعلوم المواد المتقدمة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-NANOTECH-G12-CH3',
            pageRange: 'pp. 159-236'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Photocatalytic Solar-to-Hydrogen & Perovskite Efficiency Limits',
            titleAr: 'خطة الدرس: كفاءة تحويل الطاقة الشمسية لهيدروجين وحدود أداء البيروفسكايت',
            gradeLevel: 'Grade 12 STEM / Secondary',
            durationMinutes: 90,
            objectives: [
              'Calculate theoretical solar-to-hydrogen (STH) conversion efficiency from photocatalytic water splitting rates',
              'Analyze band edge potentials of semiconductors relative to redox potentials of H⁺/H₂ and O₂/H₂O',
              'Evaluate volumetric strain accommodation in nanostructured core-shell silicon battery anodes'
            ]
          },
          worksheet: {
            id: 'ws_th_nanotechnology_ch3_l1',
            titleEn: 'Worksheet 3: STH Photocatalysis & Anode Capacity Calculations',
            titleAr: 'ورقة عمل 3: حسابات كفاءة إنتاج الهيدروجين وسعات المصاعد النانوية',
            descriptionEn: 'Compute hydrogen gas production moles, solar-to-hydrogen efficiencies, and electrochemical charge capacities.',
            descriptionAr: 'حساب مولات الهيدروجين الناتجة، وكفاءات STH، والسعات التخزينية الكهروكيميائية للبطاريات.',
            estimatedTimeMinutes: 45,
            problems: nanotechnologyCh3Textbook.slice(0, 3)
          },
          interactiveWidget: {
            type: 'photocatalytic_hydrogen_simulator',
            titleEn: 'Solar Photocatalysis & Water Splitting Kinetic Reactor',
            titleAr: 'مفاعل حركية التحفيز الضوئي الشمسي وشطر الماء للهيدروجين',
            descriptionEn: 'Simulate photon absorption, electron-hole transport, and hydrogen gas generation across tailored semiconductor heterojunctions.',
            descriptionAr: 'محاكاة امتصاص الفوتونات ونقل الإلكترونات وإنتاج غاز الهيدروجين عبر الوصلات شبه الموصلة النانوية.'
          }
        }
      ],
      solvedExamples: nanotechnologyCh3Textbook.slice(0, 10),
      exerciseProblems: nanotechnologyCh3Textbook.slice(10, 25),
      databank: nanotechnologyCh3Databank
    },
    {
      id: 'th_nanotechnology_ch4',
      chapterNumber: 4,
      titleEn: 'Nanomedicine, Targeted Drug Delivery & Biosensing',
      titleAr: 'الطب النانوي، التوصيل الموجه للأدوية والاستشعار الحيوي',
      descriptionEn: 'Enhanced Permeability and Retention (EPR) effect, liposomes, dendrimers, magnetic nanoparticle hyperthermia, localized surface plasmon resonance (LSPR) biosensors, and nanotoxicology safety.',
      descriptionAr: 'تأثير النفاذية والاستبقاء المعزز (EPR)، الليبوزومات، الديندريمرات، المعالجة الحرارية بالجزيئات المغناطيسية، مجسات الرنين البلازموني السطحي الموضعي (LSPR)، وسلامة السمية النانوية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_nanotechnology_ch4_l1',
          titleEn: 'Targeted Oncology Nanocarriers, LSPR Optical Biosensing & Nanotoxicology',
          titleAr: 'نواقل الأورام النانوية الموجهة، مجسات LSPR الضوئية وسمية المواد النانوية',
          summaryEn: 'Tumor microvascular fenestrations, PEGylation stealth coatings, gold nanoparticle LSPR refractive index sensitivity, and reactive oxygen species toxicity.',
          summaryAr: 'ثقوب الأوعية الدموية للأورام، تغليف التخفي بـ PEG، حساسية الرنين البلازموني LSPR لمعامل الانكسار، وسمية أنواع الأكسجين التفاعلية.',
          theoryContentEn: 'Nanomedicine exploits nanoscale phenomena to revolutionize oncological therapeutics and point-of-care diagnostics. Solid tumor architectures feature hyperpermeable fenestrated endothelium (100–700 nm pore cutoffs) and impaired lymphatic clearance, enabling passive accumulation of 30–150 nm nanocarriers via the Enhanced Permeability and Retention (EPR) effect. Surface functionalization with polyethylene glycol (PEGylation) suppresses opsonization and phagocytic clearance by macrophages, establishing extended blood circulation times. Active targeting conjugates ligands (folate, transferrin, monoclonal antibodies) to direct nanocarriers into receptor-overexpressing malignant cells. In diagnostic biosensing, localized surface plasmon resonance (LSPR) in gold and silver nanoparticles creates extreme optical near-field enhancements; binding of single biomarker molecules induces a measurable refractive index shift in the extinction resonance wavelength. Nanotoxicological screening monitors cellular uptake, lysosomal disruption, and reactive oxygen species (ROS) generation.',
          theoryContentAr: 'يوظف الطب النانوي الظواهر النانوية لإحداث ثورة في علاج الأورام والتشخيص الطبي فائق الدقة. تتميز الأورام الخبيثة بأوعية دموية مسامية (ثقوب 100–700 نانومتر) وانعدام التصريف اللمفاوي، مما يسمح بتراكم الجزيئات النانوية (30–150 نانومتر) سلبياً عبر تأثير النفاذية والاستبقاء المعزز (EPR). ويمنع تغليف السطح بالبولي إيثيلين جليكول (PEG) التعرف المناعي والبلعمة، مما يطيل زمن الدوران في الدم. ويقوم الاستهداف النشط على ربط مستقبلات نوعية (حمض الفوليك أو الأجسام المضادة) لتوجيه النواقل لخلايا الورم. وفي التشخيص، يُحدث الرنين البلازموني السطحي الموضعي (LSPR) في جسيمات الذهب والفضة تضخيماً كهرومغناطيسياً هائلاً في المجال القريب؛ بحيث يُحدث ارتباط الجزيء الحيوي إزاحة فورية في طول موجة الرنين. وتراقب اختبارات السمية النانوية إجهاد الأكسدة وإطلاق جذور ROS لضمان السلامة السريرية.',
          moeRef: {
            bookTitleEn: 'Egyptian Secondary Curriculum: Nanotechnology & Advanced Materials Science',
            bookTitleAr: 'المنهج الوزاري الثانوي: النانوتكنولوجي وعلوم المواد المتقدمة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-NANOTECH-G12-CH4',
            pageRange: 'pp. 237-314'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: EPR Tumor Delivery Kinetics & LSPR Refractive Index Sensitivity',
            titleAr: 'خطة الدرس: حركية توصيل الدواء عبر تأثير EPR وحساسية مجسات LSPR البلازمونية',
            gradeLevel: 'Grade 12 STEM / Secondary',
            durationMinutes: 90,
            objectives: [
              'Model pharmacokinetic circulation half-life improvement in PEGylated liposomes',
              'Calculate optical resonance wavelength red-shifts in gold nanosphere biosensors based on local refractive index changes',
              'Assess magnetic field specific absorption rate (SAR) in hyperthermia cancer therapies'
            ]
          },
          worksheet: {
            id: 'ws_th_nanotechnology_ch4_l1',
            titleEn: 'Worksheet 4: LSPR Peak Wavelength Shift & Drug Delivery Fractions',
            titleAr: 'ورقة عمل 4: إزاحة قمة LSPR ونسب تحرر الدواء المستهدف',
            descriptionEn: 'Compute resonance peak red-shifts, tumor accumulation ratios, and magnetic SAR heat outputs.',
            descriptionAr: 'حساب إزاحات قمم الرنين البلازموني، ونسب تراكم الدواء بالأورام، ومعدلات الامتصاص النوعي المغناطيسي SAR.',
            estimatedTimeMinutes: 45,
            problems: nanotechnologyCh4Textbook.slice(0, 3)
          },
          interactiveWidget: {
            type: 'lspr_biosensor_simulator',
            titleEn: 'Gold Nanoparticle LSPR Biosensor & Drug Release Simulator',
            titleAr: 'محاكي مجسات الذهب البلازمونية LSPR وحركية تحرر الدواء النانوي',
            descriptionEn: 'Simulate biomarker antibody-antigen binding events, real-time plasmon peak shifts, and pH-triggered liposomal drug release curves.',
            descriptionAr: 'محاكاة ارتباط الأجسام المضادة بالمستضدات، وإزاحة قمة البلازمون اللحظية، ومنحنيات تحرر الدواء عند تغير درجة الحموضة pH.'
          }
        }
      ],
      solvedExamples: nanotechnologyCh4Textbook.slice(0, 10),
      exerciseProblems: nanotechnologyCh4Textbook.slice(10, 25),
      databank: nanotechnologyCh4Databank
    }
  ]
};
