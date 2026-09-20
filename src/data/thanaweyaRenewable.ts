import type { Branch } from '../types/curriculum';
import { renewCh1SolvedExamples, renewCh1ExerciseProblems } from './textbook/thanaweya/renewCh1Textbook';
import { renewCh2SolvedExamples, renewCh2ExerciseProblems } from './textbook/thanaweya/renewCh2Textbook';
import { renewCh3SolvedExamples, renewCh3ExerciseProblems } from './textbook/thanaweya/renewCh3Textbook';
import { renewCh4SolvedExamples, renewCh4ExerciseProblems } from './textbook/thanaweya/renewCh4Textbook';
import { renewCh1Databank } from './databanks/thanaweya/renewCh1Databank';
import { renewCh2Databank } from './databanks/thanaweya/renewCh2Databank';
import { renewCh3Databank } from './databanks/thanaweya/renewCh3Databank';
import { renewCh4Databank } from './databanks/thanaweya/renewCh4Databank';

export const thanaweyaRenewableBranch: Branch = {
  id: 'thanaweya_renewable',
  titleEn: 'Renewable Energy & Environmental Sustainability',
  titleAr: 'الطاقة المتجددة والاستدامة البيئية',
  iconName: 'Zap',
  colorGradient: 'from-emerald-600 via-teal-600 to-green-500',
  categoryEn: 'Clean Energy & Environmental Technology',
  categoryAr: 'تكنولوجيا الطاقة النظيفة والبيئة',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_renew_ch1',
      chapterNumber: 1,
      titleEn: 'Solar Photovoltaic & Concentrated Solar Thermal Systems',
      titleAr: 'أنظمة الطاقة الشمسية الكهروضوئية والحرارية المركزة',
      descriptionEn: 'Solar irradiance, PV cell semiconductor physics, I-V curves, MPPT algorithms, Benban Solar Park, and CSP molten salt thermal storage.',
      descriptionAr: 'الإشعاع الشمسي، فيزياء أشباه الموصلات الكهروضوئية، منحنيات I-V، خوارزميات MPPT، مجمع بنبان، والتخزين الحراري بالأملاح المنصهرة.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_renew_ch1_l1',
          titleEn: 'Solar PV Physics, Benban Park & CSP Thermal Storage',
          titleAr: 'فيزياء الخلايا الشمسية ومجمع بنبان وتخزين CSP الحراري',
          summaryEn: 'Semiconductor p-n junction photo-excitation, I-V curve characteristics, Benban utility-scale architecture, and molten salt thermal storage.',
          summaryAr: 'الإثارة الضوئية في وصلة p-n، خصائص منحنى I-V، مجمع بنبان بأسوان، والتخزين الحراري بالأملاح المنصهرة.',
          theoryContentEn: 'Solar photovoltaic energy harnesses quantum photoelectric absorption across semiconductor p-n junctions. In utility-scale installations like Egypt\'s Benban Solar Park (1.65 GW), high irradiance is converted to grid-compliant power via central inverter stations. Complementary Concentrated Solar Power (CSP) systems utilize parabolic troughs and molten salt storage to deliver continuous nocturnal thermal baseload.',
          theoryContentAr: 'تعتمد الطاقة الكهروضوئية على الامتصاص الكهروضوئي الكمي عبر وصلات p-n في أشباه الموصلات. وتوفر المشروعات العملاقة كمجمع بنبان للطاقة الشمسية بأسوان (١.٦٥ جيجاوات) طاقة نظيفة للشبكة الموحدة عبر محطات عواكس مركزية، وتتكامل مع محطات الطاقة الشمسية المركزة (CSP) ذات التخزين الحراري بالأملاح المنصهرة لتوليد الكهرباء ليلاً.',
          moeRef: {
            bookTitleEn: 'Official Renewable Energy & Clean Technology',
            bookTitleAr: 'كتاب تكنولوجيا الطاقة المتجددة والاستدامة البيئية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-RENEW-G12-CH1',
            pageRange: 'pp. 1-52'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Solar Cell Physics, MPPT Tracking and CSP Storage',
            titleAr: 'خطة الدرس: فيزياء الخلايا الشمسية وتتبع MPPT والتخزين الحراري',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Calculate solar cell Fill Factor (FF) and maximum power point from I-V data',
              'Analyze the temperature derating coefficient on PV power output in Egyptian desert conditions',
              'Dimension molten salt thermal storage for nocturnal CSP turbine operation'
            ]
          },
          worksheet: {
            id: 'ws_th_renew_ch1_l1',
            titleEn: 'Worksheet 1: Solar PV & CSP Energy Sizing',
            titleAr: 'ورقة عمل 1: حسابات الألواح الشمسية والطاقة الحرارية المركزة',
            descriptionEn: 'Practice I-V curve parameter derivation and Benban Solar Park capacity factor problems.',
            descriptionAr: 'تدرب على استخراج معاملات منحنى I-V وحسابات معامل السعة لمجمع بنبان.',
            estimatedTimeMinutes: 45,
            problems: renewCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'renew_solar_yield_lab',
            titleEn: 'Solar PV & CSP Yield Simulator',
            titleAr: 'محاكي إنتاجية الطاقة الشمسية الكهروضوئية والمركزة',
            descriptionEn: 'Simulate I-V/P-V curves, tilt angles, temperature derating, and Benban Solar Park yield.',
            descriptionAr: 'محاكاة منحنيات I-V وزاوية الميل والانخفاض الحراري وإنتاجية مجمع بنبان.'
          }
        }
      ],
      solvedExamples: renewCh1SolvedExamples,
      exerciseProblems: renewCh1ExerciseProblems,
      databank: renewCh1Databank
    },
    {
      id: 'th_renew_ch2',
      chapterNumber: 2,
      titleEn: 'Wind Energy Engineering, Aerodynamics & Turbine Dynamics',
      titleAr: 'هندسة طاقة الرياح والديناميكا الهوائية وتوربينات التوليد',
      descriptionEn: 'Betz limit, aerodynamic lift and drag, power density, Weibull distribution, Gulf of Suez wind farms, and wake modeling.',
      descriptionAr: 'حد بيتز، قوى الرفع والسحب الأيروديناميكي، كثافة قدرة الرياح، توزيع وايبول، مزارع رياح خليج السويس، ونمذجة الاستيقاظ.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_renew_ch2_l1',
          titleEn: 'Aerodynamics, Betz Limit & Gulf of Suez Wind Stations',
          titleAr: 'الديناميكا الهوائية وحد بيتز ومحطات رياح خليج السويس',
          summaryEn: 'Kinetic energy conversion, the Betz theoretical ceiling (59.3%), tip-speed ratio, and Gabal El-Zeit wind farm engineering.',
          summaryAr: 'تحويل طاقة الحركة، حد بيتز النظري (٥٩.٣٪)، سرعة طرف الشفرة، وهندسة مزرعة رياح جبل الزيت.',
          theoryContentEn: 'Wind energy transforms atmospheric kinetic energy into mechanical torque through aerodynamic lift generated by airfoil-shaped rotor blades. According to momentum conservation and the Betz limit, theoretical power extraction cannot exceed 59.26% of available wind stream power. Egypt\'s Red Sea corridor (Zafarana, Gabal El-Zeit) capitalizes on steady thermal channeling with annual capacity factors reaching 50%.',
          theoryContentAr: 'تستخلص طاقة الرياح القدرة الحركية للهواء وتحولها إلى عزم دوران عبر قوى الرفع الأيروديناميكي على الشفرات الانسيابية. ويثبت حد بيتز أن الكفاءة القصوى النظرية للتوربين لا تتجاوز ٥٩.٢٦٪ من طاقة الرياح. ويستغل ممر البحر الأحمر وخليج السويس بمصر (الزعفرانة وجبل الزيت) تدفقات الرياح المنتظمة بمعامل سعة استثنائي يناهز ٥٠٪.',
          moeRef: {
            bookTitleEn: 'Official Renewable Energy & Clean Technology',
            bookTitleAr: 'كتاب تكنولوجيا الطاقة المتجددة والاستدامة البيئية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-RENEW-G12-CH2',
            pageRange: 'pp. 53-108'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Betz Limit and Wind Turbine Sizing',
            titleAr: 'خطة الدرس: حد بيتز وحسابات قدرة توربينات الرياح',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Derive the cubic power relationship between wind velocity and turbine output',
              'Calculate Tip-Speed Ratio (TSR) and optimal blade rotational speed',
              'Assess the environmental and annual energy output of the Gabal El-Zeit wind farm'
            ]
          },
          worksheet: {
            id: 'ws_th_renew_ch2_l1',
            titleEn: 'Worksheet 2: Wind Aerodynamics & Turbine Power',
            titleAr: 'ورقة عمل 2: ديناميكا الرياح وقدرة التوربينات',
            descriptionEn: 'Solve problems on swept area, air density corrections, and Betz efficiency limits.',
            descriptionAr: 'حل مسائل المساحة الممسوحة وتصحيح كثافة الهواء وحد كفاءة بيتز.',
            estimatedTimeMinutes: 45,
            problems: renewCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'renew_wind_aerodynamics_lab',
            titleEn: 'Wind Turbine Aerodynamics & Betz Limit Lab',
            titleAr: 'مختبر ديناميكا توربينات الرياح وحد بيتز',
            descriptionEn: 'Interactive aerodynamic power curve, tip-speed ratio tuning, and Betz limit comparison.',
            descriptionAr: 'منحنى القدرة الأيروديناميكي وضبط سرعة الشفرات والمقارنة مع حد بيتز النظري.'
          }
        }
      ],
      solvedExamples: renewCh2SolvedExamples,
      exerciseProblems: renewCh2ExerciseProblems,
      databank: renewCh2Databank
    },
    {
      id: 'th_renew_ch3',
      chapterNumber: 3,
      titleEn: 'Green Hydrogen, Electrolysis & Fuel Cell Technologies',
      titleAr: 'الهيدروجين الأخضر وتكنولوجيا التحليل الكهربائي وخلايا الوقود',
      descriptionEn: 'Water electrolysis thermodynamics, Faraday\'s laws, PEM vs Alkaline vs SOEC, green ammonia, SCZone green corridor, and fuel cells.',
      descriptionAr: 'ديناميكا التحليل الكهربائي، قوانين فاراداي، المحللات القلوية وPEM وSOEC، الأمونيا الخضراء، ممر قناة السويس، وخلايا الوقود.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_renew_ch3_l1',
          titleEn: 'Electrolyzer Thermodynamics, Green Ammonia & Fuel Cells',
          titleAr: 'ديناميكا المحللات الكهربائية والأمونيا الخضراء وخلايا الوقود',
          summaryEn: 'Faraday electrolysis yields, Alkaline/PEM/SOEC technologies, SCZone green ammonia corridors, and fuel cell electrochemistry.',
          summaryAr: 'حسابات فاراداي للتحليل الكهربائي، مقارنة المحللات القلوية وPEM، ممر الأمونيا بالعين السخنة، وخلايا الوقود.',
          theoryContentEn: 'Green hydrogen serves as a vital clean chemical energy vector, generated by splitting water using renewable electrical power. Faraday\'s laws dictate that hydrogen mass output is directly proportional to electrical charge transferred. Downstream synthesis combines green hydrogen with atmospheric nitrogen to produce green ammonia for export and maritime refueling along the Suez Canal Economic Zone (SCZone).',
          theoryContentAr: 'يمثل الهيدروجين الأخضر حاملاً استراتيجياً للطاقة النظيفة، يُنتج بفصل جزيئات الماء باستخدام الكهرباء المتجددة. وتنص قوانين فاراداي على تناسب كتلة الهيدروجين مع الشحنة الكهربائية المتدفقة. ويُستخدم الهيدروجين في تخليق الأمونيا الخضراء لتصديرها وتزويد السفن بالوقود النظيف في المنطقة الاقتصادية لقناة السويس.',
          moeRef: {
            bookTitleEn: 'Official Renewable Energy & Clean Technology',
            bookTitleAr: 'كتاب تكنولوجيا الطاقة المتجددة والاستدامة البيئية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-RENEW-G12-CH3',
            pageRange: 'pp. 109-160'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Green Hydrogen Mass Yield and Fuel Cell Electrochemistry',
            titleAr: 'خطة الدرس: إنتاجية الهيدروجين الأخضر وكيمياء خلايا الوقود',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Calculate hydrogen production rate from current and Faraday constant',
              'Compare specific energy consumption between Alkaline, PEM, and SOEC electrolyzers',
              'Analyze the stoichiometry of green ammonia synthesis in SCZone facilities'
            ]
          },
          worksheet: {
            id: 'ws_th_renew_ch3_l1',
            titleEn: 'Worksheet 3: Hydrogen Electrolysis & Ammonia Synthesis',
            titleAr: 'ورقة عمل 3: التحليل الكهربائي وتخليق الأمونيا الخضراء',
            descriptionEn: 'Practice Faraday charge calculations and fuel cell energy efficiency problems.',
            descriptionAr: 'تدرب على حسابات شحنة فاراداي وكفاءة التحويل في خلايا الوقود.',
            estimatedTimeMinutes: 45,
            problems: renewCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'renew_green_hydrogen_lab',
            titleEn: 'Green Hydrogen Electrolysis & Power-to-X Reactor',
            titleAr: 'مفاعل التحليل الكهربائي للهيدروجين الأخضر وتحويل الطاقة (PtX)',
            descriptionEn: 'Model electrolyzer stack efficiency, hydrogen mass output, and green ammonia synthesis.',
            descriptionAr: 'نمذجة كفاءة المحلل الكهربائي، إنتاجية الهيدروجين بالكيلوجرام، وتخليق الأمونيا الخضراء.'
          }
        }
      ],
      solvedExamples: renewCh3SolvedExamples,
      exerciseProblems: renewCh3ExerciseProblems,
      databank: renewCh3Databank
    },
    {
      id: 'th_renew_ch4',
      chapterNumber: 4,
      titleEn: 'Smart Grids, Energy Storage Systems (BESS) & Grid Integration',
      titleAr: 'الشبكات الذكية وأنظمة تخزين الطاقة (BESS) والربط الكهربائي',
      descriptionEn: 'Grid frequency stabilization, battery storage (BESS), Ataka pumped storage, HVDC interconnection, and carbon accounting (Scope 1/2/3, CBAM).',
      descriptionAr: 'استقرار تردد الشبكة، بطاريات تخزين الطاقة، مشروع جبل عتاقة، الربط الكهربائي HVDC، ومحاسبة الكربون ومعايير CBAM.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_renew_ch4_l1',
          titleEn: 'Grid Frequency, BESS Storage, HVDC & Carbon Auditing',
          titleAr: 'تردد الشبكة، بطاريات BESS، خطوط HVDC ومحاسبة الكربون',
          summaryEn: 'National 50 Hz frequency control, Ataka pumped storage hydro, Egypt-Saudi HVDC links, and GHG Protocol Scope 1/2/3 carbon accounting.',
          summaryAr: 'التحكم في تردد ٥٠ هرتز، مشروع جبل عتاقة للضخ والتخزين، خط الربط المصري السعودي، ومحاسبة الكربون وفق بروتوكول GHG.',
          theoryContentEn: 'Maintaining power system stability requires continuous balance between electricity generation and instantaneous demand. High-penetration renewable networks deploy Battery Energy Storage Systems (BESS) and pumped-storage hydroelectric facilities like the 2,400 MW Ataka project in Suez to regulate the 50 Hz grid frequency. Long-distance High Voltage Direct Current (HVDC) lines enable intercontinental clean energy trading, while corporate carbon accounting quantifies Scope 1, 2, and 3 emission reductions.',
          theoryContentAr: 'يتطلب استقرار منظومة القوى الكهربائية التوازن اللحظي بين التوليد والاستهلاك. ومع تزايد مصادر الطاقة المتجددة، تُستخدم بطاريات تخزين الطاقة (BESS) ومحطات الضخ والتخزين كمشروع جبل عتاقة بالسويس (٢,٤٠٠ ميجاوات) لضبط تردد الشبكة عند ٥٠ هرتز. وتتيح خطوط التيار المستمر عالي الجهد (HVDC) تبادل الطاقة مع الدول المجاورة، وتُقاس إنجازات خفض الانبعاثات عبر محاسبة الكربون للنطاقات ١ و٢ و٣.',
          moeRef: {
            bookTitleEn: 'Official Renewable Energy & Clean Technology',
            bookTitleAr: 'كتاب تكنولوجيا الطاقة المتجددة والاستدامة البيئية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-RENEW-G12-CH4',
            pageRange: 'pp. 161-218'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Grid Frequency Regulation and Carbon Accounting',
            titleAr: 'خطة الدرس: تنظيم تردد الشبكة ومحاسبة الانبعاثات الكربونية',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Analyze grid frequency deviations using the generator swing equation',
              'Calculate round-trip energy storage efficiency for BESS and pumped-storage hydro',
              'Perform corporate Scope 1, Scope 2, and Scope 3 carbon footprint inventories'
            ]
          },
          worksheet: {
            id: 'ws_th_renew_ch4_l1',
            titleEn: 'Worksheet 4: Grid Dispatch & Carbon Footprint Calculation',
            titleAr: 'ورقة عمل 4: اتزان الشبكة وحساب البصمة الكربونية',
            descriptionEn: 'Practice RoCoF rate calculations, BESS round-trip efficiency, and Scope 2 emissions.',
            descriptionAr: 'تدرب على حساب معدل تغير التردد وكفاءة البطاريات وانبعاثات النطاق ٢.',
            estimatedTimeMinutes: 45,
            problems: renewCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'renew_smart_grid_dispatch_lab',
            titleEn: 'Smart Grid Frequency & BESS Dispatch Lab',
            titleAr: 'مختبر اتزان تردد الشبكة الذكية وتفريغ البطاريات (BESS)',
            descriptionEn: 'Simulate grid frequency stabilization, peak shaving, and pumped storage dispatch.',
            descriptionAr: 'محاكاة استقرار تردد الشبكة عند ٥٠ هرتز وتفريغ البطاريات ومحطة جبل عتاقة.'
          }
        }
      ],
      solvedExamples: renewCh4SolvedExamples,
      exerciseProblems: renewCh4ExerciseProblems,
      databank: renewCh4Databank
    }
  ]
};
