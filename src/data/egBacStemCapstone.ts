import type { Branch } from '../types/curriculum';
import { egBacStemCapstoneCh1SolvedExamples, egBacStemCapstoneCh1ExerciseProblems } from './textbook/egbac/egBacStemCapstoneCh1Textbook';
import { egBacStemCapstoneCh2SolvedExamples, egBacStemCapstoneCh2ExerciseProblems } from './textbook/egbac/egBacStemCapstoneCh2Textbook';
import { egBacStemCapstoneCh3SolvedExamples, egBacStemCapstoneCh3ExerciseProblems } from './textbook/egbac/egBacStemCapstoneCh3Textbook';
import { egBacStemCapstoneCh4SolvedExamples, egBacStemCapstoneCh4ExerciseProblems } from './textbook/egbac/egBacStemCapstoneCh4Textbook';
import { egBacStemCapstoneCh1Databank } from './databanks/egbac/egBacStemCapstoneCh1Databank';
import { egBacStemCapstoneCh2Databank } from './databanks/egbac/egBacStemCapstoneCh2Databank';
import { egBacStemCapstoneCh3Databank } from './databanks/egbac/egBacStemCapstoneCh3Databank';
import { egBacStemCapstoneCh4Databank } from './databanks/egbac/egBacStemCapstoneCh4Databank';

export const egBacStemCapstoneBranch: Branch = {
  id: 'egbac_stem_capstone',
  titleEn: 'Advanced STEM Capstone & Grand Challenges',
  titleAr: 'المشروع الهندسي المتقدم والتحديات القومية الكبرى',
  iconName: 'Cpu',
  colorGradient: 'from-cyan-600 via-blue-600 to-teal-500',
  categoryEn: 'Applied Engineering & Grand Challenges',
  categoryAr: 'الهندسة التطبيقية والتحديات القومية الكبرى',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_capstone_ch1',
      chapterNumber: 1,
      titleEn: 'Advanced Membrane Thermodynamics & Solar Distillation',
      titleAr: 'الديناميكا الحرارية للأغشية وتحلية المياه بالطاقة الشمسية',
      descriptionEn: 'Forward osmosis thermodynamics, 2D graphene oxide laminar nano-capillaries, Zero Liquid Discharge (ZLD), and microbial desalination cells (MDC).',
      descriptionAr: 'ديناميكا التناضح الأمامي، أغشية أكسيد الجرافين النانوية، تصفير الصرف السائل (ZLD)، وخلايا التحلية الميكروبية (MDC).',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_capstone_ch1_l1',
          titleEn: 'Next-Gen Desalination: FO, Graphene Membranes & ZLD Systems',
          titleAr: 'تقنيات التحلية المتقدمة: التناضح الأمامي وأغشية الجرافين وتصفير الصرف السائل',
          summaryEn: 'Thermolytic draw solute regeneration, 2D nano-capillary frictionless water transport, MVR vapor recompression, and bioelectrochemical MDC.',
          summaryAr: 'تجديد محاليل السحب بالحرارة المنخفضة، تدفق الماء فائق السرعة عبر قنوات الجرافين، إعادة ضغط البخار، وتحلية المياه الميكروبية.',
          theoryContentEn: 'Advanced desalination architectures transcend conventional SWRO through thermodynamic efficiency and novel nanostructured materials. Forward osmosis (FO) exploits hyper-osmotic thermolytic draw solutions (e.g., ammonium bicarbonate) that separate spontaneously upon mild heating at 60°C. Concurrently, laminar graphene oxide membranes achieve frictionless ballistic water transport through 0.9 nm inter-layer galleries while rejecting hydrated salt ions. For complete resource recovery, Zero Liquid Discharge (ZLD) systems combine mechanical vapor recompression with fractional crystallizers to recover over 95% water and precipitate commercial-grade dry salts.',
          theoryContentAr: 'تتجاوز نظم التحلية المتقدمة القيود التقليدية للتناضح العكسي عبر الابتكار في الديناميكا الحرارية والمواد النانوية. يستغل التناضح الأمامي (FO) محاليل سحب مفرطة الأسموزية تتفكك حرارياً عند ٦٠°م لاسترجاع الماء النقي بحرارة العادم الصناعي. وفي الوقت ذاته، تتيح أغشية أكسيد الجرافين تدفقاً فائق السرعة للماء عبر فجوات نانوية بحجم ٠.٩ نانومتر مع حجز تام لأيونات الأملاح. وتضمن منظومات تصفير الصرف السائل (ZLD) استرجاع أكثر من ٩٥٪ من المياه مع استخلاص أملاح تجارية عالية النقاوة.',
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced STEM Capstone & Applied Innovation Thesis',
            bookTitleAr: 'مرجع البكالوريا المصرية للابتكار التطبيقي وأبحاث التخرج المتقدمة (STEM)',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-CAPSTONE-G12-CH1',
            pageRange: 'pp. 1-64'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Forward Osmosis Mass Transfer and Graphene Sizing',
            titleAr: 'خطة الدرس: انتقال الكتلة في التناضح الأمامي وحسابات أغشية الجرافين',
            gradeLevel: 'Grade 12 Advanced',
            durationMinutes: 90,
            objectives: [
              'Model water flux in forward osmosis using membrane permeability coefficients',
              'Calculate permeate salinity and rejection rates in 2D graphene oxide membranes',
              'Design mass balances for Zero Liquid Discharge crystallization stages'
            ]
          },
          worksheet: {
            id: 'ws_egbac_capstone_ch1_l1',
            titleEn: 'Worksheet 1: Advanced Membrane Flux & ZLD Mass Balances',
            titleAr: 'ورقة عمل 1: تدفق الأغشية المتقدمة وموازنة كتل تصفير الصرف السائل',
            descriptionEn: 'Practice problems on FO osmotic flux, graphene rejection, and MVR salt precipitation rates.',
            descriptionAr: 'مسائل تدريبية على تدفق التناضح الأمامي ونقاء أغشية الجرافين ومعدلات تبلور الأملاح.',
            estimatedTimeMinutes: 45,
            problems: egBacStemCapstoneCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'egbac_stem_membrane_lab',
            titleEn: 'Advanced Membrane & ZLD Crystallization Simulator',
            titleAr: 'محاكي الأغشية المتقدمة والتبلور الصناعي',
            descriptionEn: 'Simulate forward osmosis flux, graphene oxide nano-pore rejection, and ZLD multi-effect salt recovery.',
            descriptionAr: 'محاكاة تدفق التناضح الأمامي وحجز مسام الجرافين واستخلاص أملاح ZLD.'
          }
        }
      ],
      solvedExamples: egBacStemCapstoneCh1SolvedExamples,
      exerciseProblems: egBacStemCapstoneCh1ExerciseProblems,
      databank: egBacStemCapstoneCh1Databank
    },
    {
      id: 'egbac_capstone_ch2',
      chapterNumber: 2,
      titleEn: 'Microgrid Synchronization, Flow Batteries & SCADA Automation',
      titleAr: 'مزامنة الشبكات الدقيقة وبطاريات التدفق وأتمتة سكادا',
      descriptionEn: 'Virtual Synchronous Generators, P-f and Q-V droop algorithms, PEMFC overpotentials, high-temperature SOFC/SOEC, and BMS Extended Kalman Filtering.',
      descriptionAr: 'المولدات المتزامنة الافتراضية، خوارزميات الانحدار P-f وQ-V، فواقد خلايا وقود PEM، خلايا الأكاسيد الصلبة SOFC، ومرشح كالمان لإدارة البطاريات.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_capstone_ch2_l1',
          titleEn: 'Microgrid Dynamics, Advanced Fuel Cells & Battery Kalman Filtering',
          titleAr: 'ديناميكا الشبكات الدقيقة وخلايا الوقود المتقدمة ومرشحات كالمان للبطاريات',
          summaryEn: 'Inverter droop control, virtual inertia synthesis, PEMFC/SOFC electrochemistry, and Extended Kalman Filter state-of-charge tracking.',
          summaryAr: 'التحكم بالانحدار في العواكس، توليد القصور الذاتي الافتراضي، كهروكيمياء خلايا الوقود، وتقدير حالة شحن البطاريات بمرشح كالمان.',
          theoryContentEn: 'Decentralized clean microgrids require advanced power electronics control and state estimation algorithms. Grid-forming inverters emulate the swing equation of physical synchronous rotors to deliver virtual inertia during load transients using frequency and voltage droop control. For combined heat and power, Solid Oxide Fuel Cells (SOFC) and reversible solid oxide electrolyzers (SOEC) achieve electrical efficiencies over 85% via high-temperature ceramic oxygen-ion transport. Simultaneously, Battery Management Systems employ Extended Kalman Filters (EKF) combining dynamic equivalent circuit models with Coulomb counting for sub-1.5% State of Charge precision.',
          theoryContentAr: 'تتطلب الشبكات الدقيقة اللامركزية تحكماً إلكترونياً متطوراً وخوارزميات دقيقة لتقدير الحالة اللحظية. تحاكي العواكس المشكلة للشبكة معادلة تأرجح المولدات الدوارة لتوفير قصور ذاتي افتراضي أثناء تقلبات الأحمال عبر خوارزميات انحدار التردد والجهد. وللتوليد المشترك للحرارة والكهرباء، تحقق خلايا الأكاسيد الصلبة (SOFC) والمحللات العكسية (SOEC) كفاءة تفوق ٨٥٪ عبر النقل الأيوني في السيراميك عند درجات حرارة مرتفعة. وفي الوقت نفسه، تطبق أنظمة إدارة البطاريات مرشحات كالمان الممتدة (EKF) لتقدير حالة الشحن بدقة فائقة دون ١.٥٪ خطأ.',
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced STEM Capstone & Applied Innovation Thesis',
            bookTitleAr: 'مرجع البكالوريا المصرية للابتكار التطبيقي وأبحاث التخرج المتقدمة (STEM)',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-CAPSTONE-G12-CH2',
            pageRange: 'pp. 65-128'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Inverter Droop Equations and Electrochemical Cell Polarization',
            titleAr: 'خطة الدرس: معادلات انحدار العواكس واستقطاب خلايا الوقود الكهروكيميائية',
            gradeLevel: 'Grade 12 Advanced',
            durationMinutes: 90,
            objectives: [
              'Derive microgrid frequency deviations from active power droop constants',
              'Calculate thermodynamic cell efficiency of PEMFC and high-temperature SOFC systems',
              'Formulate Extended Kalman Filter state transitions for battery SoC estimation'
            ]
          },
          worksheet: {
            id: 'ws_egbac_capstone_ch2_l1',
            titleEn: 'Worksheet 2: Microgrid Droop & Fuel Cell Polarization',
            titleAr: 'ورقة عمل 2: انحدار الشبكات الدقيقة واستقطاب خلايا الوقود',
            descriptionEn: 'Solve quantitative problems on droop settling frequency, PEMFC overpotentials, and BMS passive balancing durations.',
            descriptionAr: 'مسائل على تردد استقرار العواكس وفواقد جهد خلايا الوقود وأزمنة موازنة خلايا البطاريات.',
            estimatedTimeMinutes: 45,
            problems: egBacStemCapstoneCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'egbac_stem_microgrid_lab',
            titleEn: 'Microgrid Droop & Fuel Cell Simulator',
            titleAr: 'محاكي انحدار الشبكات وخلايا الوقود',
            descriptionEn: 'Tune droop gains kp and kq, plot fuel cell polarization curves, and simulate battery state-of-charge filtering.',
            descriptionAr: 'ضبط معاملات الانحدار ورسم منحنيات استقطاب خلايا الوقود ومحاكاة مرشح كالمان للشحن.'
          }
        }
      ],
      solvedExamples: egBacStemCapstoneCh2SolvedExamples,
      exerciseProblems: egBacStemCapstoneCh2ExerciseProblems,
      databank: egBacStemCapstoneCh2Databank
    },
    {
      id: 'egbac_capstone_ch3',
      chapterNumber: 3,
      titleEn: 'Automated Hydroponics, IoT Soil Sensors & Biosaline Crop Engineering',
      titleAr: 'الزراعة المائية الذكية، مجسات التربة والهندسة الوراثية للنباتات الملحية',
      descriptionEn: 'Ultrasonic aeroponics atomization, closed-loop aquaponic nitrification kinetics, biochar carbon sequestration, and CRISPR-Cas9 drought wheat engineering.',
      descriptionAr: 'الزراعة الهوائية بالرذاذ فوق الصوتي، حركية النترجة في الأكوابونيكس، احتجاز الكربون بالبيوتشار، وتعديل القمح بكريسبر لتحمل الجفاف.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_capstone_ch3_l1',
          titleEn: 'Aeroponics, Aquaponic Stoichiometry & CRISPR Crop Modification',
          titleAr: 'الزراعة الهوائية، معادلات الأكوابونيكس وتعديل المحاصيل بكريسبر',
          summaryEn: 'Piezoelectric droplet physics, biological nitrification biofilters, biochar soil porosity, and wheat TaDREB gene editing.',
          summaryAr: 'فيزياء تفتيت قطرات الرذاذ الكهرضغطية، مرشحات النترجة الحيوية، مسامية البيوتشار، وتعديل جينات تحمل الجفاف في القمح.',
          theoryContentEn: 'Advanced arid agriculture integrates high-precision bio-systems engineering and genetic biotechnology. Ultrasonic aeroponics pulses atomized nutrient droplets (30-60 µm) via piezoelectric ceramic transducers to maintain 100% root oxygenation at minimal water consumption. Closed-loop aquaponics couples recirculating tilapia aquaculture with nitrifying biofilters (*Nitrosomonas* and *Nitrobacter*) that convert toxic ammonia into plant-assimilable nitrate. To safeguard food sovereignty in desert soils, biochar soil amendments sequester recalcitrant carbon, while CRISPR-Cas9 targeted genome editing of bread wheat knocks out drought-sensitivity repressor genes to sustain crop yields under saline stress.',
          theoryContentAr: 'تدمج النظم الزراعية المتقدمة في البيئات القاحلة بين الهندسة الحيوية الدقيقة وتطبيقات التكنولوجيا الحيوية الوراثية. ترش الزراعة الهوائية (Aeroponics) قطرات مغذية متناهية الصغر (٣٠-٦٠ ميكرومتر) عبر محولات كهرضغطية لضمان أكسجة كاملة لجذور النباتات باستهلاك مائي ضئيل. وتدمج أنظمة الأكوابونيكس المغلقة استزراع أسماك البلطي مع فلاتر النترجة الحيوية التي تحول الأمونيا لنترات تغذي النباتات. ولحماية الأمن الغذائي، يساهم البيوتشار في حبس الكربون العضوي بالتربة، بينما تعدل تقنية كريسبر-كاس٩ جينات القمح لرفع قدرته على تحمل الملوحة والجفاف.',
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced STEM Capstone & Applied Innovation Thesis',
            bookTitleAr: 'مرجع البكالوريا المصرية للابتكار التطبيقي وأبحاث التخرج المتقدمة (STEM)',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-CAPSTONE-G12-CH3',
            pageRange: 'pp. 129-192'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Ultrasonic Aeroponic Duty Cycles and Biofilter Nitrogen Balances',
            titleAr: 'خطة الدرس: دورات تشغيل الرذاذ الهوائي وموازنة النيتروجين في الفلاتر الحيوية',
            gradeLevel: 'Grade 12 Advanced',
            durationMinutes: 90,
            objectives: [
              'Calculate aeroponic misting duty cycles and droplet evaporation dynamics',
              'Dimension nitrification biofilter media area for closed-loop aquaponics',
              'Quantify atmospheric CO2 sequestration resulting from biochar soil application'
            ]
          },
          worksheet: {
            id: 'ws_egbac_capstone_ch3_l1',
            titleEn: 'Worksheet 3: Aeroponics & Biofilter Dimensioning',
            titleAr: 'ورقة عمل 3: حسابات الزراعة الهوائية وتصميم الفلاتر الحيوية',
            descriptionEn: 'Solve quantitative problems on aeroponic water reduction, aquaponic nitrogen loads, and biochar carbon sequestration.',
            descriptionAr: 'مسائل على خفض مياه الزراعة الهوائية وأحمال النيتروجين واحتجاز الكربون بالبيوتشار.',
            estimatedTimeMinutes: 45,
            problems: egBacStemCapstoneCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'egbac_stem_aquaponics_lab',
            titleEn: 'Aeroponics & Aquaponics Nitrogen Cycle Simulator',
            titleAr: 'محاكي الزراعة الهوائية ودورة النيتروجين في الأكوابونيكس',
            descriptionEn: 'Simulate misting pulse frequencies, fish biomass feeding rates, biofilter nitrification, and biochar soil water retention.',
            descriptionAr: 'محاكاة نبضات الرش وتغذية الأسماك ونترجة الفلاتر واحتفاظ التربة بالماء مع البيوتشار.'
          }
        }
      ],
      solvedExamples: egBacStemCapstoneCh3SolvedExamples,
      exerciseProblems: egBacStemCapstoneCh3ExerciseProblems,
      databank: egBacStemCapstoneCh3Databank
    },
    {
      id: 'egbac_capstone_ch4',
      chapterNumber: 4,
      titleEn: 'Multi-Agent Autonomous Traffic Control & Green Building HVAC Modeling',
      titleAr: 'التحكم الذكي في المرور متعدد الوكلاء ونمذجة المباني الخضراء',
      descriptionEn: 'Multi-Agent Reinforcement Learning (MARL) for urban arterials, CFD street canyon ventilation, Phase Change Materials (PCM), and ESP air purification.',
      descriptionAr: 'التعلم التعزيزي متعدد الوكلاء لتحسين محاور المرور، ديناميكا الموائع لتهوية الشوارع، المواد متغيرة الطور (PCM)، والمرسبات الكهروستاتيكية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_capstone_ch4_l1',
          titleEn: 'MARL Traffic Systems, Urban CFD & Phase Change Material Physics',
          titleAr: 'المرور الذكي بالتعلم التعزيزي، ديناميكا ممرات الرياح وفيزياء مواد PCM',
          summaryEn: 'Graph convolutional MARL traffic agents, RANS street canyon aerodynamics, PCM latent cooling storage, and Deutsch-Anderson electrostatic precipitation.',
          summaryAr: 'وكلاء المرور الذكية بالشبكات البيانية، ديناميكا تهوية الأخاديد الحضرية، التبريد الكامن بمواد PCM، وكفاءة المرسبات الكهروستاتيكية.',
          theoryContentEn: 'Intelligent urban engineering leverages computational artificial intelligence and physical thermodynamics for sustainable city living. Multi-Agent Reinforcement Learning (MARL) coordinates traffic light signals across metropolitan arterial networks, exchanging graph-convolutional message states between intersections to prevent gridlock. Concurrently, computational fluid dynamics (CFD) models aerodynamic wind corridors to naturally ventilate vehicular pollutants from deep street canyons. For thermal resilience, building envelopes integrate Phase Change Materials (PCM) that absorb excess daytime thermal energy via isothermal latent fusion, shaving peak cooling electricity demand and filtering ambient air via industrial electrostatic precipitators.',
          theoryContentAr: 'تدمج الهندسة الحضرية الذكية بين الذكاء الاصطناعي والديناميكا الحرارية لبناء مدن مستدامة. ينسق التعلم التعزيزي متعدد الوكلاء (MARL) الإشارات المرورية عبر الشبكات الشريانية الكبرى متبادلاً معلومات الحالة لمنع الاختناقات المرورية. وفي الوقت نفسه، تنمذج ديناميكا الموائع الحسابية (CFD) ممرات الرياح لتهوية عوادم المركبات طبيعياً من شوارع المدينة. ولرفع كفاءة الطاقة، تُدمج المواد متغيرة الطور (PCM) في جدران المباني لامتصاص حرارة النهار بالانصهار الكامن وتخفيف أحمال التكييف، مع تنقية الهواء بالمرسبات الكهروستاتيكية.',
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced STEM Capstone & Applied Innovation Thesis',
            bookTitleAr: 'مرجع البكالوريا المصرية للابتكار التطبيقي وأبحاث التخرج المتقدمة (STEM)',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-CAPSTONE-G12-CH4',
            pageRange: 'pp. 193-256'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Multi-Agent Traffic Optimization and Building Latent Heat Balances',
            titleAr: 'خطة الدرس: تحسين المرور متعدد الوكلاء وموازنة الحرارة الكامنة في المباني',
            gradeLevel: 'Grade 12 Advanced',
            durationMinutes: 90,
            objectives: [
              'Evaluate travel time and delay reductions under MARL graph neural network traffic control',
              'Calculate latent cooling energy storage capacity in PCM-integrated gypsum envelopes',
              'Determine particle capture efficiency in electrostatic precipitators using the Deutsch-Anderson equation'
            ]
          },
          worksheet: {
            id: 'ws_egbac_capstone_ch4_l1',
            titleEn: 'Worksheet 4: MARL Traffic Delay & PCM Latent Heat',
            titleAr: 'ورقة عمل 4: تأخير المرور في MARL والحرارة الكامنة لمواد PCM',
            descriptionEn: 'Solve quantitative problems on multi-intersection queue delay, PCM thermal buffer sizing, and ESP collection efficiency.',
            descriptionAr: 'مسائل على تأخير طوابير التقاطعات وسعة التبريد الكامنة لمواد PCM وكفاءة المرسبات الكهروستاتيكية.',
            estimatedTimeMinutes: 45,
            problems: egBacStemCapstoneCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'egbac_stem_smart_city_lab',
            titleEn: 'MARL Traffic & PCM Building Physics Simulator',
            titleAr: 'محاكي المرور متعدد الوكلاء وفيزياء مواد PCM للمباني',
            descriptionEn: 'Simulate multi-agent reinforcement learning traffic lights, urban CFD canyon ventilation, PCM latent storage, and ESP particle collection.',
            descriptionAr: 'محاكاة إشارات المرور الذكية وتهوية الشوارع بالرياح والتخزين الحراري بمواد PCM والمرسبات الكهروستاتيكية.'
          }
        }
      ],
      solvedExamples: egBacStemCapstoneCh4SolvedExamples,
      exerciseProblems: egBacStemCapstoneCh4ExerciseProblems,
      databank: egBacStemCapstoneCh4Databank
    }
  ]
};
