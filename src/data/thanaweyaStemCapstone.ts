import type { Branch } from '../types/curriculum';
import { stemCapstoneCh1SolvedExamples, stemCapstoneCh1ExerciseProblems } from './textbook/thanaweya/stemCapstoneCh1Textbook';
import { stemCapstoneCh2SolvedExamples, stemCapstoneCh2ExerciseProblems } from './textbook/thanaweya/stemCapstoneCh2Textbook';
import { stemCapstoneCh3SolvedExamples, stemCapstoneCh3ExerciseProblems } from './textbook/thanaweya/stemCapstoneCh3Textbook';
import { stemCapstoneCh4SolvedExamples, stemCapstoneCh4ExerciseProblems } from './textbook/thanaweya/stemCapstoneCh4Textbook';
import { stemCapstoneCh1Databank } from './databanks/thanaweya/stemCapstoneCh1Databank';
import { stemCapstoneCh2Databank } from './databanks/thanaweya/stemCapstoneCh2Databank';
import { stemCapstoneCh3Databank } from './databanks/thanaweya/stemCapstoneCh3Databank';
import { stemCapstoneCh4Databank } from './databanks/thanaweya/stemCapstoneCh4Databank';

export const thanaweyaStemCapstoneBranch: Branch = {
  id: 'thanaweya_stem_capstone',
  titleEn: 'STEM Engineering Capstone & Grand Challenges',
  titleAr: 'مشروع التخرج الهندسي STEM والتحديات الكبرى لمصر',
  iconName: 'Cpu',
  colorGradient: 'from-cyan-600 via-blue-600 to-teal-500',
  categoryEn: 'Applied Engineering & Grand Challenges',
  categoryAr: 'الهندسة التطبيقية والتحديات القومية الكبرى',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_capstone_ch1',
      chapterNumber: 1,
      titleEn: 'Water Treatment, Seawater Desalination & Nile Basin Security',
      titleAr: 'تحلية ومعالجة المياه والأمن المائي لحوض النيل',
      descriptionEn: 'Reverse osmosis membrane physics, Van \'t Hoff osmotic pressure, solar MED distillation, Nile water footprint, and Bahr El-Baqar treatment.',
      descriptionAr: 'فيزياء أغشية التناضح العكسي، ضغط فان هوف الأسموزي، التقطير الشمسي متعدد التأثير، البصمة المائية للنيل، ومحطة معالجة بحر البقر.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_capstone_ch1_l1',
          titleEn: 'Reverse Osmosis Desalination & Nile Water Security Engineering',
          titleAr: 'هندسة تحلية مياه البحر بالتناضح العكسي والأمن المائي لحوض النيل',
          summaryEn: 'Osmotic pressure thermodynamics, isobaric energy recovery devices, solar-driven distillation, and agricultural drainage recycling.',
          summaryAr: 'ديناميكا الضغط الأسموزي، مبادلات استعادة الطاقة متساوية الضغط، التقطير الشمسي، وإعادة تدوير مياه الصرف الزراعي.',
          theoryContentEn: 'Seawater reverse osmosis (SWRO) forces saline feed water through semipermeable polyamide composite membranes under hydraulic pressures exceeding thermodynamic osmotic pressure. Integrated isobaric pressure exchangers (PX) recover over 97% of concentrate hydraulic energy, lowering electric consumption below 3.0 kWh/m³. Concurrently, mega-scale agricultural drainage treatment facilities such as Bahr El-Baqar and New Delta supply billions of cubic meters of recycled freshwater annually to bridge Egypt\'s national water deficit.',
          theoryContentAr: 'تعتمد محطات التناضح العكسي لتحلية مياه البحر (SWRO) على تطبيق ضغوط هيدروليكية تفوق الضغط الأسموزي لإجبار الماء على النفاذ عبر أغشية البولي أميد نصف المنفذة. وتستعيد مبادلات الضغط (PX) أكثر من ٩٧٪ من الطاقة الهيدروليكية لمحلول الصرف المركز، مما يخفض استهلاك الطاقة الكهربائية دون ٣.٠ ك.و.س/م³. وفي الوقت ذاته، تساهم محطات معالجة مياه الصرف الزراعي العملاقة كمحطتي بحر البقر والدلتا الجديدة في سد الفجوة المائية لمصر عبر تدوير مليارات الأمتار المكعبة سنوياً.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Capstone Engineering Portfolio',
            bookTitleAr: 'دليل مشروع التخرج الهندسي لمدارس المتفوقين في العلوم والتكنولوجيا (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-CAPSTONE-G12-CH1',
            pageRange: 'pp. 1-64'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Osmotic Pressure Calculation and Membrane Desalination Design',
            titleAr: 'خطة الدرس: حسابات الضغط الأسموزي وتصميم منظومات التحلية بالأغشية',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Calculate seawater osmotic pressure using Van \'t Hoff equation across salinity ranges',
              'Evaluate energy consumption benefits of isobaric pressure recovery devices (PX)',
              'Analyze agricultural drainage reuse capacity of Egypt\'s mega treatment plants'
            ]
          },
          worksheet: {
            id: 'ws_th_capstone_ch1_l1',
            titleEn: 'Worksheet 1: SWRO Osmotic Pressure & Energy Recovery',
            titleAr: 'ورقة عمل 1: الضغط الأسموزي واسترجاع الطاقة في محطات التحلية',
            descriptionEn: 'Solve problems on Van \'t Hoff pressure, PX recovery efficiency, and GOR in thermal desalination.',
            descriptionAr: 'حل مسائل ضغط فان هوف وكفاءة مبادلات استرجاع الطاقة ومعامل GOR في التحلية الحرارية.',
            estimatedTimeMinutes: 45,
            problems: stemCapstoneCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'stem_water_desalination_lab',
            titleEn: 'SWRO Membrane & Thermal Desalination Simulator',
            titleAr: 'محاكي أغشية التناضح العكسي والتحلية الحرارية',
            descriptionEn: 'Simulate recovery ratio, feed salinity, pressure exchanger efficiency, and specific energy consumption.',
            descriptionAr: 'محاكاة نسبة الاسترجاع وملوحة التغذية وكفاءة مبادل الضغط واستهلاك الطاقة النوعي.'
          }
        }
      ],
      solvedExamples: stemCapstoneCh1SolvedExamples,
      exerciseProblems: stemCapstoneCh1ExerciseProblems,
      databank: stemCapstoneCh1Databank
    },
    {
      id: 'th_capstone_ch2',
      chapterNumber: 2,
      titleEn: 'Renewable Energy Storage, Smart Grids & Hydrogen Distribution',
      titleAr: 'تخزين الطاقة المتجددة، الشبكات الذكية وتوزيع الهيدروجين',
      descriptionEn: 'Utility-scale LFP and VRFB battery systems, green hydrogen electrolysis, HVDC subsea interconnectors, and SCZone ammonia logistics.',
      descriptionAr: 'بطاريات LFP وبطاريات تدفق الفاناديوم، التحليل الكهربائي للهيدروجين الأخضر، كابلات HVDC البحرية، ولوجستيات الأمونيا بالمنطقة الاقتصادية لقناة السويس.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_capstone_ch2_l1',
          titleEn: 'BESS Storage, Green Hydrogen Electrolysis & Grid Integration',
          titleAr: 'تخزين الطاقة بالبطاريات والتحليل الكهربائي للهيدروجين وتكامل الشبكة',
          summaryEn: 'Battery storage chemistry, PEM vs. alkaline water electrolysis, HVDC cross-border interconnections, and ammonia carrier economics.',
          summaryAr: 'كيمياء بطاريات التخزين، مقارنة المحللات القلوية وPEM، الربط الكهربائي بكابلات HVDC، واقتصاديات الأمونيا الخضراء.',
          theoryContentEn: 'Grid-scale renewable energy storage mitigates diurnal intermittency from utility PV and wind generation. Lithium Iron Phosphate (LFP) batteries deliver high round-trip efficiency for short-duration dispatch, while Vanadium Redox Flow Batteries (VRFB) provide multi-hour energy shifting without capacity fading. For seasonal and transportable energy, proton exchange membrane (PEM) water electrolysis converts surplus clean power into green hydrogen, liquefied or synthesized into green ammonia for export via the Suez Canal Economic Zone.',
          theoryContentAr: 'تساهم منظومات تخزين الطاقة في استقرار الشبكة والتغلب على التذبذب الطبيعي في توليد الرياح والطاقة الشمسية. توفر بطاريات فوسفات حديد الليثيوم (LFP) كفاءة شحن وتفريغ مرتفعة لتنظيم التردد، بينما تتيح بطاريات تدفق الفاناديوم (VRFB) تخزيناً لساعات طويلة دون تدهور كيميائي. وللتخزين الفصلي والتصدير، يحول التحليل الكهربائي عبر أغشية PEM فائض الطاقة النظيفة إلى هيدروجين أخضر يُنقل كأمونيا خضراء عبر موانئ المنطقة الاقتصادية لقناة السويس.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Capstone Engineering Portfolio',
            bookTitleAr: 'دليل مشروع التخرج الهندسي لمدارس المتفوقين في العلوم والتكنولوجيا (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-CAPSTONE-G12-CH2',
            pageRange: 'pp. 65-128'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Grid-Scale Storage Sizing and Green Hydrogen Efficiency',
            titleAr: 'خطة الدرس: حسابات سعة تخزين البطاريات وكفاءة الهيدروجين الأخضر',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Dimension utility battery storage capacity and daily arbitrage revenue',
              'Calculate Faraday efficiency and energy conversion of water electrolyzers',
              'Analyze ohmic losses in subsea HVDC interconnection cables'
            ]
          },
          worksheet: {
            id: 'ws_th_capstone_ch2_l1',
            titleEn: 'Worksheet 2: BESS Sizing & Hydrogen Electrolysis',
            titleAr: 'ورقة عمل 2: حسابات البطاريات والتحليل الكهربائي للهيدروجين',
            descriptionEn: 'Solve quantitative problems on battery round-trip efficiency, hydrogen production specific energy, and HVDC losses.',
            descriptionAr: 'مسائل حسابية على كفاءة البطاريات واستهلاك طاقة إنتاج الهيدروجين وفواقد خطوط HVDC.',
            estimatedTimeMinutes: 45,
            problems: stemCapstoneCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'stem_grid_hydrogen_lab',
            titleEn: 'Smart Microgrid & Hydrogen Dispatch Simulator',
            titleAr: 'محاكي الشبكات الذكية ومحللات الهيدروجين',
            descriptionEn: 'Model renewable generation, battery charging/discharging, electrolyzer hydrogen generation, and grid stability.',
            descriptionAr: 'نمذجة التوليد المتجدد وشحن وتفريغ البطاريات وإنتاج الهيدروجين واستقرار الشبكة.'
          }
        }
      ],
      solvedExamples: stemCapstoneCh2SolvedExamples,
      exerciseProblems: stemCapstoneCh2ExerciseProblems,
      databank: stemCapstoneCh2Databank
    },
    {
      id: 'th_capstone_ch3',
      chapterNumber: 3,
      titleEn: 'Arid Land Agri-Tech, Precision Farming & Desert Reclamation',
      titleAr: 'التكنولوجيا الزراعية في الأراضي القاحلة واستصلاح الصحراء',
      descriptionEn: 'Subsurface drip irrigation hydraulics, Christiansen uniformity, biosaline halophytes, NDVI remote sensing, and commercial hydroponics.',
      descriptionAr: 'هيدروليكا الري بالتنقيط تحت السطحي، انتظام كريستيانسن، النباتات الملحية، الاستشعار عن بعد بمؤشر NDVI، والزراعة المائية التجارية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_capstone_ch3_l1',
          titleEn: 'Precision Desert Irrigation, Halophytes & Controlled Agriculture',
          titleAr: 'الري الصحراوي الدقيق والمحاصيل الملحية والزراعة المغلقة',
          summaryEn: 'Subsurface drip hydraulics, Sodium Adsorption Ratio (SAR), Penman-Monteith crop water needs, and hydroponic nutrient control.',
          summaryAr: 'هيدروليكا التنقيط تحت السطحي، نسبة امتزاز الصوديوم SAR، حسابات بينمان-مونتيث للبخر، وضبط محاليل الزراعة المائية.',
          theoryContentEn: 'Reclaiming Egyptian arid desert lands requires advanced irrigation engineering and biosaline crop science. Subsurface drip irrigation (SDI) with pressure-compensating emitters eliminates evaporative loss and delivers precise moisture to the root zone. Cultivating salt-tolerant halophytes (e.g. Salicornia) permits utilizing brackish aquifers without depleting freshwater. In hyper-controlled environments, vertical hydroponic facilities and IoT soil sensors maximize crop yield per cubic meter of water.',
          theoryContentAr: 'يتطلب استصلاح الأراضي الصحراوية في مصر دمج الهندسة الهيدروليكية مع علوم المحاصيل الملحية. يحد الري بالتنقيط تحت السطحي (SDI) من الفواقد التبخيرية ويوصل المياه والمغذيات مباشرة لجذور النباتات. وتتيح زراعة النباتات الملحية كالسـاليكورنيا استغلال المياه الجوفية شديدة الملوحة في إنتاج الأعلاف والوقود الحيوي، وتضاعف الصوب المائية المغلقة الإنتاجية لكل متر مكعب من المياه بنحو ثلاثين ضعفاً.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Capstone Engineering Portfolio',
            bookTitleAr: 'دليل مشروع التخرج الهندسي لمدارس المتفوقين في العلوم والتكنولوجيا (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-CAPSTONE-G12-CH3',
            pageRange: 'pp. 129-192'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Drip Hydraulics and Soil Salinity Sizing',
            titleAr: 'خطة الدرس: هيدروليكا شبكات الري وحسابات ملوحة التربة',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Calculate emitter discharge rates based on pressure exponents',
              'Determine Sodium Adsorption Ratio (SAR) and gypsum soil reclamation needs',
              'Compute daily crop water requirement (ETc) using satellite NDVI and Penman-Monteith'
            ]
          },
          worksheet: {
            id: 'ws_th_capstone_ch3_l1',
            titleEn: 'Worksheet 3: Desert Irrigation & Soil Reclamation',
            titleAr: 'ورقة عمل 3: الري الصحراوي واستصلاح الأراضي الملحية',
            descriptionEn: 'Calculate emitter discharge, SAR values, and greenhouse hydroponic water efficiency multiples.',
            descriptionAr: 'حسابات تصريف المنقطات، ومعامل SAR، ومضاعف كفاءة استهلاك المياه في الصوب المائية.',
            estimatedTimeMinutes: 45,
            problems: stemCapstoneCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'stem_agritech_irrigation_lab',
            titleEn: 'Arid Agri-Tech & Precision Irrigation Simulator',
            titleAr: 'محاكي التكنولوجيا الزراعية والري الدقيق في الصحراء',
            descriptionEn: 'Interactive soil moisture profiling, emitter pressure compensation, salinity mapping, and hydroponic dosing.',
            descriptionAr: 'مستويات رطوبة التربة وتعويض ضغط المنقطات وخريطة الملوحة وضبط التغذية المائية.'
          }
        }
      ],
      solvedExamples: stemCapstoneCh3SolvedExamples,
      exerciseProblems: stemCapstoneCh3ExerciseProblems,
      databank: stemCapstoneCh3Databank
    },
    {
      id: 'th_capstone_ch4',
      chapterNumber: 4,
      titleEn: 'Urban Mobility, Smart Cities & Environmental Public Health',
      titleAr: 'النقل الحضري، المدن الذكية والصحة البيئية',
      descriptionEn: 'Monorail and electric BRT mass transit, Webster traffic signal optimization, building U-values, PM2.5 monitoring, and urban heat island mitigation.',
      descriptionAr: 'المونوريل والحافلات الكهربائية السريعة، تحسين إشارات ويبستر، العزل الحراري للمباني، رصد جسيمات PM2.5، ومكافحة الجزر الحرارية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_capstone_ch4_l1',
          titleEn: 'Smart Urban Transit, Intelligent Traffic & Green Building Physics',
          titleAr: 'النقل الحضري الذكي، الإشارات المرورية وفيزياء المباني الخضراء',
          summaryEn: 'Multimodal electric transit networks, Webster cycle optimization, thermal envelope U-values, and PM2.5 particulate public health.',
          summaryAr: 'شبكات النقل الكهربائي متعدد الوسائط، تحسين دورة ويبستر، عزل المباني ومعامل U-value، ومخاطر جسيمات PM2.5.',
          theoryContentEn: 'Rapid urbanization in Egypt demands sustainable transit engineering and smart city environmental design. Deploying the Cairo Monorail, LRT, and electric BRT removes millions of metric tons of vehicular carbon emissions. Concurrently, Intelligent Transportation Systems (ITS) dynamically optimize traffic light cycles using Webster\'s delay algorithms. Green building engineering further slashes HVAC cooling loads through low U-value envelopes and high-albedo cool roofs that counteract the Urban Heat Island effect.',
          theoryContentAr: 'يتطلب التوسع العمراني السريع في مصر تطبيق هندسة النقل المستدام والتصميم البيئي للمدن الذكية. يساهم تشغيل مونوريل القاهرة والقطار الكهربائي الخفيف (LRT) والأتوبيس الترددي (BRT) في إزاحة ملايين الأطنان من الانبعاثات الكربونية سنوياً. وتعمل نظم النقل الذكية (ITS) على ضبط الإشارات المرورية ديناميكياً بمعادلة ويبستر لتقليل أزمنة التأخير، وتساهم المباني الخضراء ذات العزل الحراري المتطور والأسطح العاكسة في خفض أحمال التكييف ومكافحة ظاهرة الجزيرة الحرارية.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Capstone Engineering Portfolio',
            bookTitleAr: 'دليل مشروع التخرج الهندسي لمدارس المتفوقين في العلوم والتكنولوجيا (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-CAPSTONE-G12-CH4',
            pageRange: 'pp. 193-256'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Traffic Signal Optimization and Building Thermal Envelopes',
            titleAr: 'خطة الدرس: تحسين الإشارات المرورية والغلاف الحراري للمباني',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Derive optimal traffic signal cycle length using Webster\'s formulation',
              'Calculate building conductive thermal transmission loads using U-values and delta-T',
              'Evaluate PM2.5 particulate filtration and cool roof heat island mitigation'
            ]
          },
          worksheet: {
            id: 'ws_th_capstone_ch4_l1',
            titleEn: 'Worksheet 4: Traffic Signal Timing & Building U-Values',
            titleAr: 'ورقة عمل 4: توقيت الإشارات المرورية وعزل المباني',
            descriptionEn: 'Solve quantitative problems on Webster cycle lengths, envelope heat flux, and cool roof cooling energy savings.',
            descriptionAr: 'مسائل حسابية على أزمنة دورة ويبستر، وتدفق الحرارة عبر الجدران، وتوفير الطاقة بالأسطح العاكسة.',
            estimatedTimeMinutes: 45,
            problems: stemCapstoneCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'stem_smart_city_lab',
            titleEn: 'Smart City Traffic & Green Building Simulator',
            titleAr: 'محاكي المرور الحضري الذكي والمباني الخضراء',
            descriptionEn: 'Simulate arterial traffic signals, vehicle queue delays, building thermal envelope heat transfer, and urban heat islands.',
            descriptionAr: 'محاكاة الإشارات المرورية وتأخير الطوابير وانتقال الحرارة عبر غلاف المباني والجزر الحرارية.'
          }
        }
      ],
      solvedExamples: stemCapstoneCh4SolvedExamples,
      exerciseProblems: stemCapstoneCh4ExerciseProblems,
      databank: stemCapstoneCh4Databank
    }
  ]
};
