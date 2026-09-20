import type { Branch } from '../types/curriculum';
import { tourCh1SolvedExamples, tourCh1Exercises } from './textbook/thanaweya/tourCh1Textbook';
import { tourCh2SolvedExamples, tourCh2Exercises } from './textbook/thanaweya/tourCh2Textbook';
import { tourCh3SolvedExamples, tourCh3Exercises } from './textbook/thanaweya/tourCh3Textbook';
import { tourCh4SolvedExamples, tourCh4Exercises } from './textbook/thanaweya/tourCh4Textbook';
import { tourCh1Databank } from './databanks/thanaweya/tourCh1Databank';
import { tourCh2Databank } from './databanks/thanaweya/tourCh2Databank';
import { tourCh3Databank } from './databanks/thanaweya/tourCh3Databank';
import { tourCh4Databank } from './databanks/thanaweya/tourCh4Databank';

export const thanaweyaTourismBranch: Branch = {
  id: 'thanaweya_tourism',
  titleEn: 'Tourism, Hospitality & Cultural Heritage Management',
  titleAr: 'السياحة والضيافة وإدارة التراث الثقافي',
  iconName: 'Hotel',
  colorGradient: 'from-amber-700 via-orange-600 to-yellow-600',
  categoryEn: 'Tourism & Hospitality Studies',
  categoryAr: 'الدراسات السياحية والفندقية وإدارة التراث',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_tour_ch1',
      chapterNumber: 1,
      titleEn: 'Tourism Economics, Travel Agencies & Tour Operations',
      titleAr: 'اقتصاديات السياحة وشركات الطيران وحزم الرحلات',
      descriptionEn: 'Tourism economic impact, tourist multiplier, travel agency classification, itinerary costing, IATA ticketing, and charter aviation.',
      descriptionAr: 'الأثر الاقتصادي للنشاط السياحي، مضاعف الدخل السياحي، تصنيف شركات السياحة، تسعير البرامج، تذاكر أياتا، والطيران العارض.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_tour_ch1_l1',
          titleEn: 'Tourism Economics & Travel Agency Operations',
          titleAr: 'اقتصاديات السياحة وإدارة شركات ووكالات السفر',
          summaryEn: 'Economic multipliers, balance of payments impacts, licensing categories under Egyptian law, and tour package costing principles.',
          summaryAr: 'المضاعف الاقتصادي السياحي، دعم ميزان المدفوعات، فئات ترخيص الشركات وفق القانون المصري، ومبادئ تسعير البرامج.',
          theoryContentEn: 'Tourism is a cornerstone of the Egyptian national economy, acting as an invisible export that generates vital foreign currency reserves and creates widespread direct and indirect employment. Travel agencies operating under Egyptian Law No. 38 of 1977 coordinate complex logistics spanning airline ticketing, hotel accommodation, ground transportation, and excursion guiding.',
          theoryContentAr: 'تمثل السياحة ركيزة استراتيجية للاقتصاد القومي المصري، باعتبارها صادرات غير منظورة ترفد الدولة بالنقد الأجنبي وتخلق فرص عمل مباشرة وغير مباشرة. وتتولى شركات السياحة المرخصة بالقانون ٣٨ لسنة ١٩٧٧ تنسيق العمليات اللوجستية المعقدة بين خطوط الطيران، وحجوزات الفنادق، والنقل البري، والجولات الإرشادية.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Tourism & Hotel Management',
            bookTitleAr: 'كتاب السياحة وإدارة الفنادق الرسمي للثانوية العامة والتعليم الفندقي',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-TOUR-G12-CH1',
            pageRange: 'pp. 1-48'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Tourism Economic Impact and Package Itinerary Costing',
            titleAr: 'خطة الدرس: الأثر الاقتصادي للسياحة وتسعير البرامج السياحية',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Calculate the tourism income multiplier effect on national balance of payments',
              'Distinguish between Category A, B, and C travel agency licensing in Egypt',
              'Formulate tour package pricing tables isolating fixed and variable cost components'
            ]
          },
          worksheet: {
            id: 'ws_th_tour_ch1_l1',
            titleEn: 'Worksheet 1: Tour Costing & Travel Agency Operations',
            titleAr: 'ورقة عمل 1: تسعير البرامج السياحية وتشغيل وكالات السفر',
            descriptionEn: 'Practice break-even group size calculations and agency licensing classification.',
            descriptionAr: 'تدرب على حساب نقطة التعادل للفوج السياحي وتصنيف رخص شركات السياحة.',
            estimatedTimeMinutes: 45,
            problems: tourCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'tour_package_costing_lab',
            titleEn: 'Tour Package Costing & Itinerary Pricing Simulator',
            titleAr: 'محاكي تسعير البرامج السياحية وهندسة التكاليف',
            descriptionEn: 'Interactive cost breakdown of transport, lodging, guiding, and margin optimization.',
            descriptionAr: 'توزيع تفاعلي لتكاليف النقل والإقامة ورسوم المزارات وحساب هامش ربح الرحلة.'
          }
        }
      ],
      solvedExamples: tourCh1SolvedExamples,
      exerciseProblems: tourCh1Exercises,
      databank: tourCh1Databank
    },
    {
      id: 'th_tour_ch2',
      chapterNumber: 2,
      titleEn: 'Hotel Operations, Front Office & Food Service Management',
      titleAr: 'إدارة الفنادق والمكاتب الأمامية وخدمات الضيافة',
      descriptionEn: 'Front office guest cycle, reservations, housekeeping room management, food and beverage operations, and safety standards.',
      descriptionAr: 'دورة النزيل الفندقية، أنظمة الحجز، إدارة إشراف الغرف ونظافتها، تشغيل قطاع الأغذية والمشروبات، ومعايير الأمن والسلامة.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_tour_ch2_l1',
          titleEn: 'Front Desk Cycle, Housekeeping & Culinary Service',
          titleAr: 'دورة المكاتب الأمامية والإشراف الداخلي وخدمات الأغذية',
          summaryEn: 'Guest check-in workflows, night audit balancing, room discrepancy resolution, and food cost percentage control.',
          summaryAr: 'إجراءات تسكين النزلاء، التدقيق الليلي للحسابات، تسوية تقارير الغرف، وضبط نسب تكلفة الطعام.',
          theoryContentEn: 'Hotel management integrates interdependent operational divisions. The front office coordinates reservations, arrivals, folios, and departures. Housekeeping ensures spotless hygiene, sanitized room presentation, and linen management. Food and beverage delivers restaurant, banquet, and catering services while adhering to strict culinary food cost control and HACCP food safety standards.',
          theoryContentAr: 'تتكامل إدارة الفنادق عبر أقسام تشغيلية متناسقة. تدير المكاتب الأمامية الحجوزات والاستقبال والفوترة والمغادرة. ويتولى الإشراف الداخلي معايير النظافة والتعقيم الفندقي وتجهيز الغرف. ويدير قطاع الأغذية والمشروبات المطاعم والحفلات مع الالتزام الصارم بضبط نسب تكلفة الأطعمة وتطبيق معايير الهاسب (HACCP) لسلامة الغذاء.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Tourism & Hotel Management',
            bookTitleAr: 'كتاب السياحة وإدارة الفنادق الرسمي للثانوية العامة والتعليم الفندقي',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-TOUR-G12-CH2',
            pageRange: 'pp. 49-96'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Front Office Management and Room Status Reconciliation',
            titleAr: 'خطة الدرس: إدارة المكاتب الأمامية وتسوية حالات الغرف الفندقية',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Execute guest registration and explain the night audit balancing procedure',
              'Identify room status discrepancies between front desk and housekeeping reports',
              'Calculate food cost percentages and apply HACCP critical control points'
            ]
          },
          worksheet: {
            id: 'ws_th_tour_ch2_l1',
            titleEn: 'Worksheet 2: Hotel Operations & Food Cost Analysis',
            titleAr: 'ورقة عمل 2: العمليات الفندقية وتحليل تكلفة الأغذية والمشروبات',
            descriptionEn: 'Calculate hotel room discrepancies, night audit balances, and culinary profit margins.',
            descriptionAr: 'احسب تسويات تقارير الغرف وميزان المراجعة الليلي وهوامش ربح الأغذية والمشروبات.',
            estimatedTimeMinutes: 45,
            problems: tourCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'tour_yield_management_lab',
            titleEn: 'Hotel Operations & RevPAR Calculator',
            titleAr: 'مختبر العمليات الفندقية وحساب RevPAR و ADR',
            descriptionEn: 'Real-time room occupancy simulation, revenue per available room, and average daily rate.',
            descriptionAr: 'محاكاة تفاعلية لإشغال الغرف وحساب متوسط السعر اليومي والإيراد لكل غرفة متاحة.'
          }
        }
      ],
      solvedExamples: tourCh2SolvedExamples,
      exerciseProblems: tourCh2Exercises,
      databank: tourCh2Databank
    },
    {
      id: 'th_tour_ch3',
      chapterNumber: 3,
      titleEn: 'Egyptology, Tour Guiding & World Heritage Antiquities',
      titleAr: 'الإرشاد السياحي وعلم المصريات ومواقع التراث القومي',
      descriptionEn: 'Tour guiding methodology, Pharaonic dynasties, Coptic and Islamic architecture, and UNESCO World Heritage protection.',
      descriptionAr: 'منهجيات الإرشاد السياحي، الأسر الفرعونية، العمارة القبطية والإسلامية، وحماية مواقع التراث العالمي لليونسكو.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_tour_ch3_l1',
          titleEn: 'Guiding Ethics, Egyptology & Egyptian Heritage Monuments',
          titleAr: 'أخلاقيات الإرشاد وعلم المصريات ومعالم التراث المصري',
          summaryEn: 'Interpretation techniques, Pharaonic temple architectural axes, historic Cairo mosques, and UNESCO heritage conventions.',
          summaryAr: 'مهارات التفسير التراثي، المحاور المعمارية للمعابد الفرعونية، مساجد القاهرة التاريخية، واتفاقيات اليونسكو.',
          theoryContentEn: 'Tour guiding is the professional art of cultural interpretation, transforming ancient stone architecture and inscriptions into meaningful historical encounters. Egypt possesses a peerless continuum of civilizations: the monumental Old Kingdom pyramids, the New Kingdom Theban mortuary and cult temples, Roman fortresses, historic Coptic monasteries, and medieval Islamic mosques.',
          theoryContentAr: 'يمثل الإرشاد السياحي فن التفسير الحضاري والتواصل الثقافي، حيث يحول الصروح الحجرية والنقوش القديمة إلى تجربة معرفية ملهمة للزائرين. وتمتلك مصر تسلسلاً حضارياً لا يضاهى: من أهرامات الدولة القديمة الصامتة، ومعابد طيبة الكبرى في الدولة الحديثة، والحصون الرومانية، والأديرة القبطية، والمساجد الإسلامية التاريخية.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Tourism & Hotel Management',
            bookTitleAr: 'كتاب السياحة وإدارة الفنادق الرسمي للثانوية العامة والتعليم الفندقي',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-TOUR-G12-CH3',
            pageRange: 'pp. 97-152'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Cultural Guiding and Architectural Evolution of Ancient Egypt',
            titleAr: 'خطة الدرس: مهارات الإرشاد والتطور المعماري للآثار المصرية',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Apply Freeman Tilden principles of cultural heritage interpretation',
              'Trace the architectural transition from mastaba to step pyramid to true pyramid',
              'Explain the legal protections and repatriation rights under the 1970 UNESCO Convention'
            ]
          },
          worksheet: {
            id: 'ws_th_tour_ch3_l1',
            titleEn: 'Worksheet 3: Archaeological Guiding & Heritage Legislation',
            titleAr: 'ورقة عمل 3: مهارات الشرح الأثري وتشريعات حماية الآثار',
            descriptionEn: 'Analyze archaeological sites, temple layouts, and antiquities protection laws.',
            descriptionAr: 'حلل المخططات المعمارية للمعابد المصرية وقوانين حماية التراث واسترداد الآثار.',
            estimatedTimeMinutes: 45,
            problems: tourCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'tour_heritage_explorer_lab',
            titleEn: 'Egyptian Heritage & World Monuments Explorer',
            titleAr: 'مستكشف معالم التراث المصري ومواقع اليونسكو العالمية',
            descriptionEn: 'Interactive geospatial map of Pharaonic, Coptic, and Islamic UNESCO sites in Egypt.',
            descriptionAr: 'خريطة تفاعلية جغرافية لمواقع التراث العالمي المصرية الفرعونية والقبطية والإسلامية.'
          }
        }
      ],
      solvedExamples: tourCh3SolvedExamples,
      exerciseProblems: tourCh3Exercises,
      databank: tourCh3Databank
    },
    {
      id: 'th_tour_ch4',
      chapterNumber: 4,
      titleEn: 'Tourism Marketing, Event Management & Guest Relations',
      titleAr: 'التسويق السياحي وتنظيم الفعاليات والمؤتمرات',
      descriptionEn: 'Destination marketing, MICE event planning, CRM guest experience, digital transformation, and smart destinations.',
      descriptionAr: 'تسويق الوجهات السياحية، سياحة المؤتمرات والمعارض (MICE)، إدارة تجربة الضيوف، التحول الرقمي، والمقاصد الذكية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_tour_ch4_l1',
          titleEn: 'Destination Marketing, MICE Tourism & Event Organization',
          titleAr: 'تسويق المقاصد وسياحة المؤتمرات وإدارة الفعاليات',
          summaryEn: 'National destination branding, MICE congress planning, Net Promoter Score measurement, and trade fair B2B contracts.',
          summaryAr: 'الهوية الترويجية للمقاصد، تخطيط مؤتمرات MICE، قياس رضا النزلاء، وعقود البورصات السياحية.',
          theoryContentEn: 'Tourism marketing promotes the intangible, perishable hospitality product to international consumer segments. Destination Marketing Organizations position Egypt as a multifaceted global travel hub. MICE tourism (Meetings, Incentives, Conferences, Exhibitions) represents a premier high-yield market that generates substantial counter-cyclical economic stability.',
          theoryContentAr: 'يختص التسويق السياحي بالترويج لخدمات الضيافة غير الملموسة والقابلة للنفاد لدى الأسواق المستهدفة. وتعمل هيئات تنشيط السياحة على ترسيخ مكانة مصر كوجهة عالمية متفردة. وتمثل سياحة المؤتمرات والمعارض (MICE) قطاعاً عالي الإنفاق يحقق عوائد اقتصادية ضخمة ويعوض الركود الموسمي.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Tourism & Hotel Management',
            bookTitleAr: 'كتاب السياحة وإدارة الفنادق الرسمي للثانوية العامة والتعليم الفندقي',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-TOUR-G12-CH4',
            pageRange: 'pp. 153-206'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Destination Promotion and MICE Event Logistics',
            titleAr: 'خطة الدرس: الترويج للمقاصد وإدارة لوجستيات المؤتمرات والمعارض',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Design destination marketing campaigns targeting emerging travel segments',
              'Calculate Net Promoter Score (NPS) and evaluate online guest sentiment',
              'Structure B2B hotel contracting terms for international travel trade fairs'
            ]
          },
          worksheet: {
            id: 'ws_th_tour_ch4_l1',
            titleEn: 'Worksheet 4: Tourism Marketing & MICE Event Planning',
            titleAr: 'ورقة عمل 4: خطط التسويق السياحي وتنظيم المؤتمرات',
            descriptionEn: 'Formulate promotional mix strategies, event budgeting, and guest loyalty metrics.',
            descriptionAr: 'صمم المزيج الترويجي السياحي وموازنات الفعاليات ومؤشرات رضا النزلاء.',
            estimatedTimeMinutes: 45,
            problems: tourCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'tour_gds_booking_lab',
            titleEn: 'GDS Reservation & Event Logistics Sandbox',
            titleAr: 'محاكي الحجز المركزي (GDS) ولوجستيات الفعاليات',
            descriptionEn: 'Passenger Name Record (PNR) building, flight/hotel inventory queries, and booking codes.',
            descriptionAr: 'إنشاء سجلات الحجز (PNR) وإجراء استعلامات الإتاحة لغرف الفنادق وتذاكر الطيران.'
          }
        }
      ],
      solvedExamples: tourCh4SolvedExamples,
      exerciseProblems: tourCh4Exercises,
      databank: tourCh4Databank
    }
  ]
};
