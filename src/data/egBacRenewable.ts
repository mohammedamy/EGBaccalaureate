import type { Branch } from '../types/curriculum';
import { egBacRenewCh1SolvedExamples, egBacRenewCh1ExerciseProblems } from './textbook/egbac/egBacRenewCh1Textbook';
import { egBacRenewCh2SolvedExamples, egBacRenewCh2ExerciseProblems } from './textbook/egbac/egBacRenewCh2Textbook';
import { egBacRenewCh3SolvedExamples, egBacRenewCh3ExerciseProblems } from './textbook/egbac/egBacRenewCh3Textbook';
import { egBacRenewCh4SolvedExamples, egBacRenewCh4ExerciseProblems } from './textbook/egbac/egBacRenewCh4Textbook';
import { egBacRenewCh1Databank } from './databanks/egbac/egBacRenewCh1Databank';
import { egBacRenewCh2Databank } from './databanks/egbac/egBacRenewCh2Databank';
import { egBacRenewCh3Databank } from './databanks/egbac/egBacRenewCh3Databank';
import { egBacRenewCh4Databank } from './databanks/egbac/egBacRenewCh4Databank';

export const egBacRenewableBranch: Branch = {
  id: 'egbac_renewable',
  titleEn: 'Advanced Renewable Energy Systems & Climate Engineering',
  titleAr: 'أنظمة الطاقة المتجددة المتقدمة وهندسة المناخ',
  iconName: 'Zap',
  colorGradient: 'from-emerald-600 via-teal-600 to-green-500',
  categoryEn: 'Sustainable Engineering & Climate Technologies',
  categoryAr: 'الهندسة المستدامة وتكنولوجيا المناخ',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_renew_ch1',
      chapterNumber: 1,
      titleEn: 'Advanced Photovoltaic Physics, Perovskites & Bifacial Tech',
      titleAr: 'فيزياء الخلايا الكهروضوئية المتقدمة والبيروفسكايت والخلايا ثنائية الوجه',
      descriptionEn: 'Shockley-Queisser limit, tandem perovskite-silicon cells, bifacial albedo gain modeling, and LCOE techno-economic optimization.',
      descriptionAr: 'حد شوكلي-كويسر النظري، خلايا البيروفسكايت الترادفية، نمذجة العائد الانعكاسي للألواح ثنائية الوجه، وتحسين LCOE.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_renew_ch1_l1',
          titleEn: 'Perovskite Tandems, Bifacial Modeling & LCOE Calculus',
          titleAr: 'الخلايا الترادفية والنمذجة ثنائية الوجه وحسابات LCOE',
          summaryEn: 'Quantum efficiency, sub-bandgap harvesting, ground albedo reflection formulas, and Levelized Cost of Electricity optimization.',
          summaryAr: 'الكفاءة الكمية، استخلاص الطيف الشمسي، معادلات الانعكاس الأرضي، وحساب التكلفة المعيارية للكهرباء (LCOE).',
          theoryContentEn: 'Advanced solar engineering investigates the thermodynamic boundaries of photovoltaic conversion. Tandem perovskite-silicon multi-junction cells transcend the classical Shockley-Queisser ceiling of 33.7% by segmenting photon wavelengths across tunable bandgaps. In parallel, bifacial solar modules utilize backside ground albedo reflection to elevate energy generation per land hectare and depress the Levelized Cost of Electricity (LCOE).',
          theoryContentAr: 'تبحث الهندسة الشمسية المتقدمة الحدود الديناميكية الحرارية للتحويل الكهروضوئي. وتتجاوز الخلايا الترادفية المصنوعة من البيروفسكايت والسيليكون حد شوكلي-كويسر التقليدي (٣٣.٧٪) بتقسيم الأطوال الموجية للفوتونات على فجوات طاقة متدرجة. وبالتوازي، تستفيد الألواح ثنائية الوجه من انعكاس الأرض (Albedo) لتعظيم الإنتاج لكل هكتار وخفض التكلفة المعيارية للكهرباء (LCOE).',
          moeRef: {
            bookTitleEn: 'Advanced Renewable Energy Systems & Decarbonization (EG-Bac)',
            bookTitleAr: 'كتاب البكالوريا المصرية المتقدمة في أنظمة الطاقة المتجددة وإزالة الكربون',
            grade: 'Grade 12 / Year 3',
            term: 'Full Year',
            officialCode: 'EGBAC-RENEW-G12-M1',
            pageRange: 'pp. 1-56'
          },
          lessonPlan: {
            titleEn: 'Inquiry Lesson Plan: Shockley-Queisser Limit and Bifacial Gain Simulation',
            titleAr: 'خطة درس استقصائي: حد شوكلي-كويسر ونمذجة العائد الانعكاسي للألواح',
            gradeLevel: 'Grade 12 / Baccalaureate',
            durationMinutes: 90,
            objectives: [
              'Model photon absorption across tandem bandgaps using spectral quantum efficiency curves',
              'Calculate bifacial ground reflection gain under varying surface albedos (sand, concrete, snow)',
              'Formulate techno-economic LCOE sensitivity equations comparing fixed vs tracking mounts'
            ]
          },
          worksheet: {
            id: 'ws_egbac_renew_ch1_l1',
            titleEn: 'Baccalaureate Worksheet 1: Quantum Photovoltaics & LCOE Optimization',
            titleAr: 'ورقة عمل البكالوريا 1: فيزياء الكم الكهروضوئية وتحسين LCOE',
            descriptionEn: 'Advanced analytical modeling of tandem conversion limits and lifetime financial yields.',
            descriptionAr: 'نمذجة تحليلية متقدمة لحدود التحويل الترادفي والعوائد المالية على مدى عمر المشروع.',
            estimatedTimeMinutes: 45,
            problems: egBacRenewCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'renew_solar_yield_lab',
            titleEn: 'Advanced Tandem PV & Bifacial Simulator',
            titleAr: 'محاكي الخلايا الترادفية والألواح ثنائية الوجه المتقدم',
            descriptionEn: 'Model quantum bandgap splitting, bifacial albedo gain, and LCOE reduction.',
            descriptionAr: 'نمذجة فجوة الطاقة الكمية والعائد الانعكاسي وخفض تكلفة الكيلووات ساعة (LCOE).'
          }
        }
      ],
      solvedExamples: egBacRenewCh1SolvedExamples,
      exerciseProblems: egBacRenewCh1ExerciseProblems,
      databank: egBacRenewCh1Databank
    },
    {
      id: 'egbac_renew_ch2',
      chapterNumber: 2,
      titleEn: 'Offshore Wind Aerodynamics, Wake Modeling & Fluid Dynamics',
      titleAr: 'ديناميكا الرياح البحرية ونمذجة الاستيقاظ والديناميكا الهوائية المتقدمة',
      descriptionEn: 'Blade Element Momentum (BEM) theory, Jensen and Gaussian wake models, floating platforms, and aerodynamic turbulence.',
      descriptionAr: 'نظرية كمية حركة عنصر الريشة (BEM)، نماذج استيقاظ جنسن وجاوس، المنصات البحرية العائمة، والاضطراب الهوائي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_renew_ch2_l1',
          titleEn: 'BEM Aerodynamics, Jensen Wake Modeling & Offshore Platforms',
          titleAr: 'ديناميكا BEM، نمذجة استيقاظ جنسن، وتوربينات الرياح البحرية',
          summaryEn: 'Discretized blade element aerodynamic forces, multi-turbine wake deficit calculations, and deep-water floating platform hydrodynamics.',
          summaryAr: 'قوى الرفع والسحب على مقاطع الشفرات، حسابات عجز سرعة الرياح خلف التوربينات، وديناميكا المنصات العائمة.',
          theoryContentEn: 'Offshore wind engineering demands sophisticated aero-hydrodynamic modeling. Blade Element Momentum (BEM) theory resolves local lift and drag forces across radial blade sections. In dense wind parks, upstream turbines create downstream momentum deficits and turbulence wakes described by the Jensen and Gaussian wake models, dictating optimal inter-turbine spacing to mitigate yield losses.',
          theoryContentAr: 'تتطلب هندسة الرياح البحرية نمذجة أيروديناميكية وهيدروديناميكية متقدمة. تحلل نظرية كمية حركة عنصر الريشة (BEM) قوى الرفع والسحب على طول شفرات الدوار. وتخلق التوربينات الأمامية مسارات استيقاظ (Wakes) تسبب هبوط سرعة الرياح وارتفاع الاضطراب للتوربينات الخلفية وفق نماذج جنسن وجاوس، مما يحدد المسافات البينية المثلى لمنع هدر الطاقة.',
          moeRef: {
            bookTitleEn: 'Advanced Renewable Energy Systems & Decarbonization (EG-Bac)',
            bookTitleAr: 'كتاب البكالوريا المصرية المتقدمة في أنظمة الطاقة المتجددة وإزالة الكربون',
            grade: 'Grade 12 / Year 3',
            term: 'Full Year',
            officialCode: 'EGBAC-RENEW-G12-M2',
            pageRange: 'pp. 57-112'
          },
          lessonPlan: {
            titleEn: 'Inquiry Lesson Plan: BEM Blade Aerodynamics and Wake Deficit Computation',
            titleAr: 'خطة درس استقصائي: أيروديناميكا شفرات BEM وحسابات عجز مسار الاستيقاظ',
            gradeLevel: 'Grade 12 / Baccalaureate',
            durationMinutes: 90,
            objectives: [
              'Apply Blade Element Momentum theory to compute sectional lift and drag distributions',
              'Calculate wake velocity deficit and turbulence intensity using the Jensen analytical model',
              'Evaluate hydrodynamic stability parameters of floating offshore spar-buoy platforms'
            ]
          },
          worksheet: {
            id: 'ws_egbac_renew_ch2_l1',
            titleEn: 'Baccalaureate Worksheet 2: Offshore Wind Dynamics & Wake Interferences',
            titleAr: 'ورقة عمل البكالوريا 2: ديناميكا الرياح البحرية وتداخلات الاستيقاظ',
            descriptionEn: 'Solve complex fluid dynamic problems regarding wake expansion and aerodynamic efficiency.',
            descriptionAr: 'حل مسائل ديناميكا الموائع المتقدمة المتعلقة بتوسع مسار الاستيقاظ والكفاءة الأيروديناميكية.',
            estimatedTimeMinutes: 45,
            problems: egBacRenewCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'renew_wind_aerodynamics_lab',
            titleEn: 'Offshore Wind Aerodynamics & Wake Simulator',
            titleAr: 'محاكي ديناميكا الرياح البحرية ومسارات الاستيقاظ',
            descriptionEn: 'Model 2D blade element forces, Jensen wake expansion, and array spacing losses.',
            descriptionAr: 'نمذجة قوى شفرات التوربين ثنائية الأبعاد وتوسع مسار الاستيقاظ ومسافات التباعد.'
          }
        }
      ],
      solvedExamples: egBacRenewCh2SolvedExamples,
      exerciseProblems: egBacRenewCh2ExerciseProblems,
      databank: egBacRenewCh2Databank
    },
    {
      id: 'egbac_renew_ch3',
      chapterNumber: 3,
      titleEn: 'Power-to-X, Green Hydrogen Logistics & Clean Synfuels',
      titleAr: 'تكنولوجيا تحويل الطاقة إلى منتجات وسلاسل إمداد الهيدروجين والوقود الاصطناعي',
      descriptionEn: 'High-temperature SOEC, Liquid Organic Hydrogen Carriers (LOHC), cryogenic logistics, synthetic aviation fuels (SAF), and PtX.',
      descriptionAr: 'المحللات الصلبة عالية الحرارة (SOEC)، النواقل العضوية السائلة (LOHC)، الإسالة المبردة، ووقود الطيران المستدام (SAF).',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_renew_ch3_l1',
          titleEn: 'SOEC Thermodynamics, LOHC Carriers & Synthetic Aviation Fuels',
          titleAr: 'ديناميكا خلايا SOEC، نواقل LOHC، ووقود الطيران الاصطناعي المستدام',
          summaryEn: 'High-temperature steam electrolysis thermodynamics, chemical hydrogenation in LOHC molecules, and Fischer-Tropsch synfuel synthesis.',
          summaryAr: 'ديناميكا التحليل الكهربائي للبخار، هدرجة ونزع الهيدروجين في جزيئات LOHC، وتخليق الوقود الاصطناعي عبر فيشر-تروبش.',
          theoryContentEn: 'Power-to-X (PtX) converts surplus renewable electricity into clean synthetic molecules for sectors that resist direct electrification. Solid Oxide Electrolyzer Cells (SOEC) operate at 800°C, utilizing waste heat to lower electricity consumption to 2.65 kWh/Nm³. Hydrogen logistics leverage Liquid Organic Hydrogen Carriers (LOHCs) and cryogenic cooling to enable long-distance export, while Fischer-Tropsch reactors synthesize drop-in Sustainable Aviation Fuels (SAF).',
          theoryContentAr: 'تحول تكنولوجيا Power-to-X الكهرباء المتجددة الفائضة إلى وقود ومنتجات كيميائية نظيفة للقطاعات صعبة التكهرب كالملاحة والطيران. وتعمل خلايا SOEC عند ٨٠٠ درجة مئوية مستغلة الحرارة لخفض استهلاك الكهرباء إلى ٢.٦٥ كيلووات ساعة/متر مكعب. وتعتمد سلاسل الإمداد على النواقل العضوية السائلة (LOHC) والإسالة المبردة، وتنتج مفاعلات فيشر-تروبش وقود الطيران المستدام (SAF).',
          moeRef: {
            bookTitleEn: 'Advanced Renewable Energy Systems & Decarbonization (EG-Bac)',
            bookTitleAr: 'كتاب البكالوريا المصرية المتقدمة في أنظمة الطاقة المتجددة وإزالة الكربون',
            grade: 'Grade 12 / Year 3',
            term: 'Full Year',
            officialCode: 'EGBAC-RENEW-G12-M3',
            pageRange: 'pp. 113-168'
          },
          lessonPlan: {
            titleEn: 'Inquiry Lesson Plan: Solid Oxide Electrolysis and Synthetic Jet Fuel Chemistry',
            titleAr: 'خطة درس استقصائي: التحليل الكهربائي عالي الحرارة وتخليق وقود الطائرات',
            gradeLevel: 'Grade 12 / Baccalaureate',
            durationMinutes: 90,
            objectives: [
              'Derive thermal enthalpy vs Gibbs free energy trade-offs in high-temperature steam electrolysis',
              'Calculate gravimetric and volumetric storage densities of cryogenic liquid H2 vs LOHC media',
              'Analyze carbon mass balances in Fischer-Tropsch synthesis of clean synthetic hydrocarbons'
            ]
          },
          worksheet: {
            id: 'ws_egbac_renew_ch3_l1',
            titleEn: 'Baccalaureate Worksheet 3: PtX Thermodynamics & Synfuel Mass Balances',
            titleAr: 'ورقة عمل البكالوريا 3: ديناميكا PtX وموازنات الكتلة للوقود النظيف',
            descriptionEn: 'Perform quantitative energy and mass balances for green hydrogen transport and fuel synthesis.',
            descriptionAr: 'إجراء موازنات الطاقة والكتلة لنقل الهيدروجين الأخضر وتخليق الوقود النظيف.',
            estimatedTimeMinutes: 45,
            problems: egBacRenewCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'renew_green_hydrogen_lab',
            titleEn: 'Power-to-X & Clean Synfuel Reactor Lab',
            titleAr: 'مختبر تحويل الطاقة إلى منتجات (PtX) ومفاعلات الوقود الاصطناعي',
            descriptionEn: 'Simulate high-temperature SOEC stacks, LOHC storage cycles, and synfuel yields.',
            descriptionAr: 'محاكاة خلايا SOEC الصلبة ودورات شحن وتفريغ نواقل LOHC وإنتاجية الوقود النظيف.'
          }
        }
      ],
      solvedExamples: egBacRenewCh3SolvedExamples,
      exerciseProblems: egBacRenewCh3ExerciseProblems,
      databank: egBacRenewCh3Databank
    },
    {
      id: 'egbac_renew_ch4',
      chapterNumber: 4,
      titleEn: 'Carbon Accounting, Life Cycle Assessment (LCA) & ESG Systems',
      titleAr: 'محاسبة الكربون وتقييم دورة الحياة (LCA) ونظم الاستدامة ومعايير ESG',
      descriptionEn: 'GHG Protocol Scope 1/2/3 inventories, ISO 14040/14044 LCA, EU CBAM carbon border tariffs, and circular economy metrics.',
      descriptionAr: 'جرد غازات الدفيئة للنطاقات ١ و٢ و٣، تقييم دورة الحياة ISO 14040، آلية CBAM الأوروبية، ومؤشرات الاقتصاد الدائري.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_renew_ch4_l1',
          titleEn: 'GHG Inventories, ISO 14040 LCA & EU CBAM Border Tariffs',
          titleAr: 'جرد غازات الدفيئة، تقييم دورة الحياة ISO 14040، وضريبة CBAM الأوروبية',
          summaryEn: 'Corporate GHG Protocol boundaries, cradle-to-grave LCA impact modeling, and EU Carbon Border Adjustment Mechanism exposure.',
          summaryAr: 'حدود بروتوكول الغازات الدفيئة، نمذجة أثر دورة الحياة (من المهد إلى اللحد)، واحتساب ضريبة CBAM الأوروبية.',
          theoryContentEn: 'Decarbonization strategy relies on standardized environmental accounting. Life Cycle Assessment (ISO 14040/14044) quantifies cradle-to-grave environmental burdens from mineral extraction to recycling. Compliance with international market frameworks like the European Union Carbon Border Adjustment Mechanism (CBAM) requires third-party verified monitoring of embedded carbon intensity across industrial exports (steel, fertilizer, aluminum) to protect competitive market access.',
          theoryContentAr: 'ترتكز استراتيجيات إزالة الكربون على نظم محاسبة بيئية قياسية. وتحدد منهجية تقييم دورة الحياة (ISO 14040/14044) الأثر البيئي للمنتج من المهد إلى اللحد. ويتطلب الامتثال للآليات الدولية مثل آلية تعديل ألكربون عبر الحدود الأوروبية (CBAM) تدقيقاً معتمداً لكثافة الكربون المضمنة في الصادرات الصناعية المصرية (كالصلب والأسمدة والألومنيوم) لضمان النفاذ للأسواق العالمية دون رسوم عقابية.',
          moeRef: {
            bookTitleEn: 'Advanced Renewable Energy Systems & Decarbonization (EG-Bac)',
            bookTitleAr: 'كتاب البكالوريا المصرية المتقدمة في أنظمة الطاقة المتجددة وإزالة الكربون',
            grade: 'Grade 12 / Year 3',
            term: 'Full Year',
            officialCode: 'EGBAC-RENEW-G12-M4',
            pageRange: 'pp. 169-224'
          },
          lessonPlan: {
            titleEn: 'Inquiry Lesson Plan: Life Cycle Assessment and CBAM Carbon Liability Auditing',
            titleAr: 'خطة درس استقصائي: تقييم دورة الحياة والتدقيق في التزامات ضريبة الكربون CBAM',
            gradeLevel: 'Grade 12 / Baccalaureate',
            durationMinutes: 90,
            objectives: [
              'Construct comprehensive Scope 1, Scope 2, and Scope 3 greenhouse gas inventories',
              'Execute cradle-to-grave Life Cycle Impact Assessments (LCIA) using standard characterization factors',
              'Calculate financial CBAM carbon border tax exposure and design decarbonization intervention pathways'
            ]
          },
          worksheet: {
            id: 'ws_egbac_renew_ch4_l1',
            titleEn: 'Baccalaureate Worksheet 4: LCA Footprinting & CBAM Tariff Auditing',
            titleAr: 'ورقة عمل البكالوريا 4: تقييم أثر دورة الحياة وتدقيق ضرائب CBAM',
            descriptionEn: 'Calculate industrial carbon intensity and financial liability under EU ETS carbon benchmarks.',
            descriptionAr: 'حساب كثافة الكربون الصناعية والغرامات المالية وفق تسعير شهادات الكربون الأوروبية.',
            estimatedTimeMinutes: 45,
            problems: egBacRenewCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'renew_carbon_accounting_lab',
            titleEn: 'Carbon Accounting & CBAM Compliance Calculator',
            titleAr: 'حاسبة محاسبة الكربون والامتثال لمعايير ضريبة CBAM',
            descriptionEn: 'Calculate Scope 1/2/3 emissions, industrial product carbon intensity, and CBAM liabilities.',
            descriptionAr: 'حساب انبعاثات النطاقات ١ و٢ و٣، كثافة كربون المنتج الصناعي، والتزامات ضريبة CBAM.'
          }
        }
      ],
      solvedExamples: egBacRenewCh4SolvedExamples,
      exerciseProblems: egBacRenewCh4ExerciseProblems,
      databank: egBacRenewCh4Databank
    }
  ]
};
