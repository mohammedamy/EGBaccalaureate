import type { Branch } from '../types/curriculum';
import { egBacTourCh1SolvedExamples, egBacTourCh1Exercises } from './textbook/egbac/egBacTourCh1Textbook';
import { egBacTourCh2SolvedExamples, egBacTourCh2Exercises } from './textbook/egbac/egBacTourCh2Textbook';
import { egBacTourCh3SolvedExamples, egBacTourCh3Exercises } from './textbook/egbac/egBacTourCh3Textbook';
import { egBacTourCh4SolvedExamples, egBacTourCh4Exercises } from './textbook/egbac/egBacTourCh4Textbook';
import { egBacTourCh1Databank } from './databanks/egbac/egBacTourCh1Databank';
import { egBacTourCh2Databank } from './databanks/egbac/egBacTourCh2Databank';
import { egBacTourCh3Databank } from './databanks/egbac/egBacTourCh3Databank';
import { egBacTourCh4Databank } from './databanks/egbac/egBacTourCh4Databank';

export const egBacTourismBranch: Branch = {
  id: 'egbac_tourism',
  titleEn: 'International Hospitality, Museology & Sustainable Tourism Systems',
  titleAr: 'الضيافة الدولية وعلم المتاحف وأنظمة السياحة المستدامة',
  iconName: 'Hotel',
  colorGradient: 'from-amber-600 via-orange-600 to-yellow-600',
  categoryEn: 'Tourism & Hospitality Studies',
  categoryAr: 'الدراسات السياحية والفندقية وإدارة التراث',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_tour_ch1',
      chapterNumber: 1,
      titleEn: 'Strategic Hospitality Management & Yield Revenue Optimization',
      titleAr: 'إدارة الضيافة الاستراتيجية وهندسة العائد الفندقي',
      descriptionEn: 'Yield management algorithms, RevPAR/ADR/GOPPAR performance matrices, USALI financial reporting, asset-light franchising, and dynamic pricing.',
      descriptionAr: 'خوارزميات إدارة العائد، مؤشرات RevPAR و ADR و GOPPAR، المعايير المحاسبية USALI، عقود الإدارة والأصول الرشيقة، والتسعير الديناميكي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_tour_ch1_l1',
          titleEn: 'Yield Management, Revenue Metrics & Asset Valuation',
          titleAr: 'إدارة العائد ومؤشرات الأداء المالي وتقييم الأصول الفندقية',
          summaryEn: 'Algorithmic dynamic pricing, ADR and RevPAR formulations, GOPPAR operational analysis, and management fee structures under USALI.',
          summaryAr: 'التسعير الديناميكي، معادلات RevPAR و ADR، التحليل التشغيلي عبر GOPPAR، وهيكل أتعاب الإدارة وفق USALI.',
          theoryContentEn: 'Advanced hospitality management applies quantitative revenue management to maximize total hotel asset yield. Revenue management integrates demand forecasting, market segment willingness to pay, and dynamic pricing algorithms to optimize the trade-off between room rate (ADR) and volume (Occupancy). Under USALI standards, departmental flow-through analysis isolates pure operational performance from financing costs.',
          theoryContentAr: 'تطبق إدارة الضيافة المتقدمة تقنيات إدارة الإيراد الكمية لتعظيم العائد الاقتصادي للأصول الفندقية. وتدمج إدارة العائد بين التنبؤ الدقيق بالطلب، ومرونة الأسعار، وخوارزميات التسعير الديناميكي للموازنة بين السعر ومعدل الإشغال. ويفصل نظام USALI المحاسبي الدولي الأداء التشغيلي المباشر عن تكاليف التمويل العقاري.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Hospitality & Museology',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الضيافة الدولية وإدارة التراث',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-TOUR-G12-M1',
            pageRange: 'pp. 1-52'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Yield Algorithms, RevPAR Sensitivity, and USALI Flow-Through',
            titleAr: 'خطة الدرس: خوارزميات العائد، حساسية RevPAR، والتدفق الربحي الفندقي',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Formulate and analyze RevPAR, ADR, and TrevPAR under shifting market conditions',
              'Calculate flow-through ratios and evaluate departmental operating margins under USALI',
              'Design revenue management hurdle rates to optimize hotel capacity during peak demand'
            ]
          },
          worksheet: {
            id: 'ws_egbac_tour_ch1_l1',
            titleEn: 'Worksheet 1: Hospitality Yield & Revenue Optimization',
            titleAr: 'ورقة عمل 1: هندسة العائد الفندقي ومؤشرات الأداء المالي',
            descriptionEn: 'Compute RevPAR, GOPPAR, flow-through coefficients, and contract fee allocations.',
            descriptionAr: 'احسب مؤشرات RevPAR و GOPPAR ومعدلات التدفق الربحي وأتعاب عقود الإدارة الدولية.',
            estimatedTimeMinutes: 45,
            problems: egBacTourCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'tour_yield_management_lab',
            titleEn: 'Hotel Yield Management & RevPAR Simulator',
            titleAr: 'محاكي إدارة العائد الفندقي وحساب RevPAR و ADR',
            descriptionEn: 'Dynamic room pricing, occupancy sensitivity analysis, and departmental GOPPAR modeling.',
            descriptionAr: 'نمذجة ديناميكية للأسعار الفندقية وحساسية الإشغال وتحليل الأرباح التشغيلية GOPPAR.'
          }
        }
      ],
      solvedExamples: egBacTourCh1SolvedExamples,
      exerciseProblems: egBacTourCh1Exercises,
      databank: egBacTourCh1Databank
    },
    {
      id: 'egbac_tour_ch2',
      chapterNumber: 2,
      titleEn: 'Cultural Heritage Conservation, Museology & Digital Archiving',
      titleAr: 'صيانة وإدارة التراث الثقافي وعلم المتاحف والتوثيق الرقمي',
      descriptionEn: 'Museum curatorial design, preventive microclimate controls, 3D terrestrial laser scanning (LiDAR), photogrammetry digital twins, and Heritage Impact Assessments (HIA).',
      descriptionAr: 'التصميم المتحفي وسيناريو العرض، التحكم البيئي الوقائي، المسح الليزري الأرضي ثلاثي الأبعاد، التوائم الرقمية للآثار، وتقييم الأثر التراثي HIA.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_tour_ch2_l1',
          titleEn: 'Preventive Conservation, Digital Archiving & Museum Architecture',
          titleAr: 'الصيانة الوقائية والتوثيق الرقمي وعمارة المتاحف الكبرى',
          summaryEn: 'Environmental parameters for artifact preservation, LiDAR and photogrammetry reconstruction, and museum exhibition scenarios at GEM and NMEC.',
          summaryAr: 'المعايير البيئية لحفظ الآثار، إعادة البناء الرقمي بالليزر، وسيناريوهات العرض في المتحف الكبير ومتحف الحضارة.',
          theoryContentEn: 'Cultural heritage conservation merges materials science, museology, and digital technology. Preventive conservation preserves delicate organic and inorganic antiquities through environmental control, managing relative humidity (50% +/- 5%), temperature (18-22 deg C), and illumination (under 50 Lux). Terrestrial LiDAR and photogrammetry construct sub-millimeter accurate digital twins, enabling non-invasive structural monitoring and global virtual access.',
          theoryContentAr: 'تجمع صيانة التراث الثقافي بين علوم المواد وعلم المتاحف والتقنيات الرقمية المتقدمة. وتحمي الصيانة الوقائية المقتنيات الأثرية الحساسة بضبط الرطوبة النسبية (٥٠٪ +/- ٥٪)، ودرجة الحرارة (١٨-٢٢ مئوية)، ومستوى الإضاءة (أقل من ٥٠ لوكس). وتتيح تقنيات المسح الليزري (LiDAR) والفوتوجرامتري إنشاء توائم رقمية بدقة مليمترية لرصد الشروخ الإنشائية والإتاحة الافتراضية العالمية.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Hospitality & Museology',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الضيافة الدولية وإدارة التراث',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-TOUR-G12-M2',
            pageRange: 'pp. 53-108'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Museum Microclimates and Photogrammetric 3D Heritage Archiving',
            titleAr: 'خطة الدرس: التحكم البيئي بالمتاحف والتوثيق المساحي ثلاثي الأبعاد للآثار',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Evaluate museum microclimate standards for organic versus inorganic antiquities',
              'Explain the LiDAR point cloud and multi-view photogrammetry workflow for digital twins',
              'Formulate Heritage Impact Assessments (HIA) for urban projects adjacent to historic sites'
            ]
          },
          worksheet: {
            id: 'ws_egbac_tour_ch2_l1',
            titleEn: 'Worksheet 2: Preventive Conservation & Digital Museology',
            titleAr: 'ورقة عمل 2: الصيانة الوقائية والتوثيق الرقمي المتحفي',
            descriptionEn: 'Analyze museum climate tolerances, 3D point cloud resolution, and HIA guidelines.',
            descriptionAr: 'حلل الحدود المناخية للمتاحف ودقة سحابة النقاط الليزرية ومعايير تقييم الأثر التراثي.',
            estimatedTimeMinutes: 45,
            problems: egBacTourCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'tour_heritage_explorer_lab',
            titleEn: 'Museum Microclimate & Heritage Conservation Lab',
            titleAr: 'مختبر الصيانة الوقائية والمناخ البيئي للمتاحف',
            descriptionEn: 'Simulate artifact degradation risks under variable relative humidity, temperature, and Lux.',
            descriptionAr: 'محاكاة مخاطر تلف القطع الأثرية بتغيير معدلات الرطوبة والحرارة وشدة الإضاءة المتحفية.'
          }
        }
      ],
      solvedExamples: egBacTourCh2SolvedExamples,
      exerciseProblems: egBacTourCh2Exercises,
      databank: egBacTourCh2Databank
    },
    {
      id: 'egbac_tour_ch3',
      chapterNumber: 3,
      titleEn: 'Sustainable Eco-Tourism & Destination Carrying Capacity',
      titleAr: 'السياحة البيئية المستدامة والطاقة الاستيعابية للوجهات',
      descriptionEn: 'Mathematical carrying capacity models (PCC, RCC, ECC), marine protected area (MPA) management, Red Sea coral conservation, Siwa ecolodge architecture, and carbon offsetting.',
      descriptionAr: 'نماذج الطاقة الاستيعابية الرياضية، إدارة المحميات البحرية والشعاب المرجانية، العمارة البيئية بسيوة، وحساب البصمة الكربونية للرحلات.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_tour_ch3_l1',
          titleEn: 'Carrying Capacity Formulations & Marine Eco-Stewardship',
          titleAr: 'معادلات الطاقة الاستيعابية والإشراف البيئي على المحميات',
          summaryEn: 'Formulation of Physical, Real, and Effective carrying capacities, coral reef dive management at Ras Mohammed, and vernacular ecolodges.',
          summaryAr: 'حساب الطاقة الفيزيائية والحقيقية والفعالة، إدارة سياحة الغوص برأس محمد، والنزل البيئية المستدامة.',
          theoryContentEn: 'Sustainable tourism planning balances visitor access with ecological preservation through rigorous carrying capacity modeling. Physical Carrying Capacity (PCC) is modified by environmental reduction factors (coral vulnerability, slope erosion, seasonal rainfall) to establish Real Carrying Capacity (RCC). In sensitive fragile ecosystems like the Red Sea coral reefs, tourist quota limits and fixed mooring buoys preserve living biodiversity while generating eco-tourism revenue.',
          theoryContentAr: 'يوازن التخطيط السياحي المستدام بين إتاحة المقاصد للزوار والحفاظ على البيئة الطبيعية عبر نماذج الطاقة الاستيعابية. وتُعدل الطاقة الفيزيائية بمعاملات خفض تصحيحية لحساسية التربة والشعاب المرجانية للوصول إلى الطاقة الحقيقية (RCC). وفي النظم البيئية الحساسة بالبحر الأحمر، تحمي حصص الغوص والشمندورات الثابتة التنوع البيولوجي وتضمن استدامة الموارد.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Hospitality & Museology',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الضيافة الدولية وإدارة التراث',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-TOUR-G12-M3',
            pageRange: 'pp. 109-160'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Mathematical Carrying Capacity and Eco-Resort Lifecycle Design',
            titleAr: 'خطة الدرس: الحساب الرياضي للطاقة الاستيعابية وتصميم المنتجعات البيئية',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Calculate Physical, Real, and Effective carrying capacities for fragile cultural and natural sites',
              'Analyze coral reef preservation strategies and dive quota management in Ras Mohammed',
              'Calculate tourism flight carbon footprints and evaluate desert reforestation offset mechanisms'
            ]
          },
          worksheet: {
            id: 'ws_egbac_tour_ch3_l1',
            titleEn: 'Worksheet 3: Carrying Capacity & Carbon Footprint Modeling',
            titleAr: 'ورقة عمل 3: نمذجة الطاقة الاستيعابية والبصمة الكربونية',
            descriptionEn: 'Compute real carrying capacity for marine reserves and calculate aviation carbon footprints.',
            descriptionAr: 'احسب الطاقة الاستيعابية الحقيقية للمحميات البحرية والبصمة الكربونية لرحلات الطيران.',
            estimatedTimeMinutes: 45,
            problems: egBacTourCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'tour_carrying_capacity_lab',
            titleEn: 'Destination Carrying Capacity & Eco-Impact Modeler',
            titleAr: 'مختبر الطاقة الاستيعابية والأثر البيئي للمقاصد',
            descriptionEn: 'Interactive adjustment of spatial parameters, rotation factors, and corrective environmental reduction limits.',
            descriptionAr: 'حساب تفاعلي لمعاملات الدوران اليومي وتأثير الخفض البيئي على الطاقة الاستيعابية القصوى.'
          }
        }
      ],
      solvedExamples: egBacTourCh3SolvedExamples,
      exerciseProblems: egBacTourCh3Exercises,
      databank: egBacTourCh3Databank
    },
    {
      id: 'egbac_tour_ch4',
      chapterNumber: 4,
      titleEn: 'Tourism Digital Transformation, GDS Booking Systems & Smart Destinations',
      titleAr: 'التحول الرقمي وأنظمة التوزيع العالمية والوجهات الذكية',
      descriptionEn: 'Global Distribution Systems (Amadeus, Sabre) commands, PNR data structure, OTA channel management, Smart Tourism Destinations (STD), IoT sensors, and AI predictive analytics.',
      descriptionAr: 'أوامر أنظمة التوزيع العالمية (أماديوس وسيبر)، بنية بيانات PNR، إدارة قنوات OTA، الوجهات السياحية الذكية، ومجسات إنترنت الأشياء والذكاء الاصطناعي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_tour_ch4_l1',
          titleEn: 'GDS Reservation Protocols, Channel Management & Smart Destinations',
          titleAr: 'بروتوكولات الحجز المركزي وإدارة القنوات والمدن السياحية الذكية',
          summaryEn: 'Command syntax for flight and hotel booking, channel manager inventory parity, IoT beacons for crowd management, and AI arrival forecasting.',
          summaryAr: 'بنية أوامر حجز الطيران والفنادق، تماثل الأسعار عبر القنوات، مجسات إنترنت الأشياء، والتنبؤ الذكي بالتدفقات السياحية.',
          theoryContentEn: 'Digital disruption has revolutionized the global travel value chain. Global Distribution Systems (GDS) process billions of passenger reservation transactions through standardized PNR data protocols. Modern hotels utilize channel managers and metasearch APIs to maintain rate parity and manage distribution costs. Smart Tourism Destinations (STDs) embed IoT sensors, contactless digital payments, and AI predictive models to optimize urban mobility and personalize visitor heritage encounters.',
          theoryContentAr: 'أحدث التحول الرقمي ثورة جذرية في سلسلة القيمة السياحية الدولية. وتعالج أنظمة التوزيع العالمية (GDS) مليارات الحجوزات عبر سجلات PNR الموحدة. وتعتمد الفنادق الحديثة على مديري القنوات لضمان تماثل الأسعار والحد من عمولات الوسطاء. وتدمج الوجهات السياحية الذكية (STD) مجسات إنترنت الأشياء والدفع الإلكتروني والذكاء الاصطناعي لتسهيل حركة الزوار وتخصيص تجاربهم.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Hospitality & Museology',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الضيافة الدولية وإدارة التراث',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-TOUR-G12-M4',
            pageRange: 'pp. 161-214'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: GDS Terminal Syntax, OTA Channel Parity, and Smart Destination IoT',
            titleAr: 'خطة الدرس: أوامر أنظمة GDS، تماثل أسعار القنوات، وإنترنت الأشياء بالوجهات الذكية',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Construct complete Passenger Name Records (PNR) satisfying mandatory PRINT elements',
              'Evaluate OTA distribution commissions versus direct booking acquisition costs',
              'Design IoT beacon and smart mobility networks to direct tourist foot traffic in historic precincts'
            ]
          },
          worksheet: {
            id: 'ws_egbac_tour_ch4_l1',
            titleEn: 'Worksheet 4: GDS Reservation & Smart Tourism Systems',
            titleAr: 'ورقة عمل 4: أنظمة التوزيع العالمية وحلول السياحة الذكية',
            descriptionEn: 'Formulate GDS terminal command lines and analyze channel manager rate parity metrics.',
            descriptionAr: 'صغ أوامر الحجز على أنظمة GDS وحلل مؤشرات تماثل الأسعار والمدن السياحية الذكية.',
            estimatedTimeMinutes: 45,
            problems: egBacTourCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'tour_gds_booking_lab',
            titleEn: 'GDS Flight & Hotel Reservation Terminal Simulator',
            titleAr: 'محاكي شاشة الحجز المركزي لشركات الطيران والفنادق (GDS)',
            descriptionEn: 'Interactive terminal for Sabre/Amadeus commands, seat sell, ticketing timeline, and PNR generation.',
            descriptionAr: 'شاشة حاسوبية تفاعلية لتنفيذ أوامر أنظمة التوزيع العالمية وإنشاء سجل الحجز PNR وتأكيد التذاكر.'
          }
        }
      ],
      solvedExamples: egBacTourCh4SolvedExamples,
      exerciseProblems: egBacTourCh4Exercises,
      databank: egBacTourCh4Databank
    }
  ]
};
