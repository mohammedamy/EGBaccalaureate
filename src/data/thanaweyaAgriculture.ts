import type { Branch } from '../types/curriculum';
import { agriCh1SolvedExamples, agriCh1Exercises } from './textbook/thanaweya/agriCh1Textbook';
import { agriCh2SolvedExamples, agriCh2Exercises } from './textbook/thanaweya/agriCh2Textbook';
import { agriCh3SolvedExamples, agriCh3Exercises } from './textbook/thanaweya/agriCh3Textbook';
import { agriCh4SolvedExamples, agriCh4Exercises } from './textbook/thanaweya/agriCh4Textbook';
import { agriCh1Databank } from './databanks/thanaweya/agriCh1Databank';
import { agriCh2Databank } from './databanks/thanaweya/agriCh2Databank';
import { agriCh3Databank } from './databanks/thanaweya/agriCh3Databank';
import { agriCh4Databank } from './databanks/thanaweya/agriCh4Databank';

export const thanaweyaAgricultureBranch: Branch = {
  id: 'thanaweya_agriculture',
  titleEn: 'Agricultural Sciences & Agrotechnology',
  titleAr: 'التربية الزراعية والتكنولوجيا الزراعية',
  iconName: 'Sprout',
  colorGradient: 'from-emerald-800 via-green-700 to-lime-800',
  categoryEn: 'Official Egyptian General Secondary curriculum for Agricultural Sciences: Soil physics & chemistry, C3/C4 crop production, modern pressurized irrigation & drainage hydrology, and Integrated Pest Management (IPM).',
  categoryAr: 'المنهج الوزاري المعتمد لشهادة الثانوية العامة للتربية الزراعية: علوم وخصوبة التربة، إنتاج المحاصيل الحقلية وفسيولوجيا C3/C4، هندسة الري الحديث والصرف المغطى، والمكافحة المتكاملة للآفات وأمراض النبات.',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_agri_ch1',
      titleEn: 'Soil Sciences, Soil Fertility & Plant Nutrition',
      titleAr: 'علوم التربة وخصوبتها والتغذية النباتية',
      descriptionEn: 'Soil physical and chemical properties, texture, CEC, pH, essential macronutrients and micronutrients, fertilizers, and soil amendments.',
      descriptionAr: 'الخواص الفيزيائية والكيميائية للتربة، قوام التربة، السعة التبادلية الكاتيونية، الحموضة والقلوية، العناصر الغذائية الكبرى والصغرى، والأسمدة ومحسنات التربة.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_agri_ch1_l1',
          titleEn: 'Lesson 1: Soil Physics, Texture Triangle, CEC, and Nutrient Availability',
          titleAr: 'الدرس الأول: فيزياء وكيمياء التربة، السعة الكاتيونية، وتيسر العناصر',
          summaryEn: 'Principles of soil texture, bulk density, porosity, CEC dynamics, soil pH regulation, and NPK macronutrient deficiency diagnostics.',
          summaryAr: 'أسس قوام التربة والكثافة الظاهرية والمسامية والسعة التبادلية الكاتيونية، وتنظيم حموضة وقلوية التربة وأعراض نقص NPK.',
          estimatedMinutes: 60,
          theoryContentEn: `# Soil Sciences & Plant Nutrition
## علوم التربة والتغذية النباتية

### 1. Soil Physical Properties (الخواص الفيزيائية للتربة)
- **Soil Texture (قوام التربة)**: Proportions of sand (0.05-2.0 mm), silt (0.002-0.05 mm), and clay (<0.002 mm).
- **Bulk Density (الكثافة الظاهرية)**: $D_b = M_s / V_t$, governing root penetration resistance.
- **Available Water Capacity (السعة المائية الميسرة)**: Water held between Field Capacity (-0.33 bar) and Permanent Wilting Point (-15 bar).

### 2. Soil Chemical Properties & CEC (الخواص الكيميائية والسعة التبادلية)
- **CEC (السعة التبادلية الكاتيونية)**: Measures negative charge density holding $Ca^{2+}, Mg^{2+}, K^+, Na^+$.
- **Soil pH (الرقم الهيدروجيني)**: Optimal nutrient availability occurs between 6.0 and 7.5.
- **Sodic Soil Amelioration**: Application of gypsum ($CaSO_4\cdot 2H_2O$) replaces exchangeable sodium.`,
          moeRef: {
            bookTitleEn: 'Official Ministry Agricultural Sciences Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الزراعية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-AGRI-MOE-2025',
            pageRange: 'pp. 12-45'
          },
          lessonPlan: {
            titleEn: 'Instructional Plan: Soil Chemistry and Plant Nutrition Diagnostics',
            titleAr: 'الخطة التدريسية: كيمياء التربة وتشخيص أعراض نقص العناصر النباتية',
            objectives: [
              'Classify soil texture using the USDA soil textural triangle.',
              'Calculate soil bulk density and porosity relations.',
              'Diagnose N, P, and K deficiency symptoms on vegetative foliage.'
            ],
            warmUpEn: 'Examine sandy, loamy, and clay soil samples and test pH with indicator strips.',
            warmUpAr: 'فحص عينات من أراضي رملية وطينية وطميية وقياس درجة حموضتها بشرائط الكاشف الرقمي.',
            activitiesEn: 'Students balance NPK fertigation ratios in the Agricultural Technology Studio.',
            activitiesAr: 'يقوم الطلاب بضبط ومعايرة المحاليل السمادية في استوديو التكنولوجيا الزراعية.',
            differentiation: {
              support: 'Provide annotated color deficiency charts for nitrogen, phosphorus, and potassium.',
              advanced: 'Calculate gypsum requirements in tons/feddan based on Exchangeable Sodium Percentage (ESP).'
            },
            formativeAssessmentEn: 'Four-question diagnostic exit ticket on soil porosity, CEC, and pH availability.',
            formativeAssessmentAr: 'بطاقة خروج تقويمية من أربعة أسئلة حول مسامية التربة والسعة الكاتيونية وعلاقة pH بالعناصر.',
            exitTicketQuestion: {
              questionEn: 'Which soil amendment is essential for displacing exchangeable sodium in sodic alkaline soils?',
              questionAr: 'ما المحسن الزراعي الأساسي المستخدم لاستبدال وطرد الصوديوم المتبادل في الأراضي الصودية القلوية؟',
              solutionEn: 'Agricultural Gypsum / Calcium Sulfate Dihydrate (الجبس الزراعي - كبريتات الكالسيوم المائية).',
              solutionAr: 'الجبس الزراعي (كبريتات الكالسيوم المائية).'
            }
          },
          worksheet: {
            id: 'ws_th_agri_ch1_l1',
            titleEn: 'Student Studio Worksheet: Soil Chemistry & Plant Nutrition',
            titleAr: 'ورقة عمل الطالب: كيمياء التربة وتغذية النبات',
            descriptionEn: 'Exercises on soil texture, CEC calculations, and nutrient availability.',
            descriptionAr: 'تدريبات على قوام التربة وحسابات السعة الكاتيونية وتيسر العناصر الغذائية.',
            estimatedTimeMinutes: 45,
            problems: agriCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'agricultural_technology_studio',
            titleEn: 'Agricultural Technology & Soil Fertigation Studio',
            titleAr: 'استوديو التكنولوجيا الزراعية ومعايرة التسميد والتربة',
            descriptionEn: 'Interactive soil chemistry simulator, NPK nutrient balancer, and Penman-Monteith irrigation engine.',
            descriptionAr: 'محاكي تفاعلي لكيمياء التربة والتوازن السمادي وحسابات البخر-نتح لمحاصيل الحبوب.'
          }
        }
      ],
      solvedExamples: agriCh1SolvedExamples,
      exerciseProblems: agriCh1Exercises,
      databank: agriCh1Databank
    },
    {
      id: 'th_agri_ch2',
      titleEn: 'Crop Production, Agronomy & Plant Physiology',
      titleAr: 'المحاصيل الحقلية والإنتاج النباتي والفسيولوجيا',
      descriptionEn: 'Cereal crops (wheat, rice, maize), legumes, industrial fiber/sugar crops, C3 vs C4 photosynthetic energetics, crop rotations, and seed physiology.',
      descriptionAr: 'محاصيل الحبوب (القمح، الأرز، الذرة)، البقوليات، المحاصيل السكرية والليفية، كفاءة مسارات C3 و C4، الدورات الزراعية، وفسيولوجيا البذور وإنباتها.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_agri_ch2_l1',
          titleEn: 'Lesson 1: Strategic Cereal Production, C3/C4 Energetics, and Crop Rotations',
          titleAr: 'الدرس الأول: إنتاج الحبوب الاستراتيجية، مسارات C3 و C4، والدورات الزراعية',
          summaryEn: 'Wheat and maize agronomy in Egypt, tillering dynamics, C3 vs C4 water use efficiency, and 3-year crop rotation systems.',
          summaryAr: 'زراعة القمح والذرة في مصر، ديناميكا التفريع وتكوين السنابل، كفاءة استهلاك المياه في C3 و C4، والدورة الزراعية الثلاثية.',
          estimatedMinutes: 60,
          theoryContentEn: `# Crop Production & Photosynthetic Physiology
## إنتاج المحاصيل وفسيولوجيا البناء الضوئي

### 1. Wheat Agronomy (زراعة القمح)
- **High-Yielding Cultivars (أصناف عالية الإنتاجية)**: Sakha 95, Giza 171, Misr 3 with yellow rust resistance.
- **Yield Equation**: $\\text{Yield} = \\text{Spikes/m}^2 \\times \\text{Grains/Spike} \\times 1000\\text{-Grain Weight} / 1000$.

### 2. C3 vs C4 Pathways (مقارنة مسارات C3 و C4)
- **C3 Crops (Wheat, Faba Bean, Cotton)**: Rubisco fixation with photorespiration losses.
- **C4 Crops (Maize, Sugarcane)**: Kranz anatomy with PEP-carboxylase, doubling water-use efficiency.`,
          moeRef: {
            bookTitleEn: 'Official Ministry Agricultural Sciences Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الزراعية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-AGRI-MOE-2025',
            pageRange: 'pp. 46-88'
          },
          lessonPlan: {
            titleEn: 'Instructional Plan: Cereal Agronomy and Photosynthetic Physiology',
            titleAr: 'الخطة التدريسية: زراعة محاصيل الحبوب وفسيولوجيا البناء الضوئي',
            objectives: [
              'Calculate total grain yield per feddan using yield component metrics.',
              'Contrast C3 and C4 leaf anatomy and water use efficiency.',
              'Design a balanced 3-year Egyptian crop rotation incorporating legumes.'
            ],
            warmUpEn: 'Compare cross sections of C3 wheat leaves and C4 maize leaves displaying Kranz anatomy.',
            warmUpAr: 'مقارنة قطاعات مجهرية لأوراق قمح C3 وأوراق ذرة C4 ذات تشريح كرانز الحزمي.',
            activitiesEn: 'Students simulate grain yield projections under varying tillering densities in the studio.',
            activitiesAr: 'يقوم الطلاب بمحاكاة تقدير إنتاجية فدان القمح وفقاً لمعدلات التفريع في الاستوديو.',
            differentiation: {
              support: 'Provide illustrated flowcharts of C3 vs C4 carbon fixation pathways.',
              advanced: 'Calculate Land Equivalent Ratio (LER) for an intercropped maize-soybean planting.'
            },
            formativeAssessmentEn: 'Diagnostic exit ticket on C4 water use efficiency and wheat rust management.',
            formativeAssessmentAr: 'بطاقة خروج تقويمية حول كفاءة استخدام المياه في نباتات C4 وإدارة أصداء القمح.',
            exitTicketQuestion: {
              questionEn: 'Which cellular anatomical structure enables C4 maize to concentrate CO2 around RuBisCO?',
              questionAr: 'ما البنية التشريحية الخلوية الخاصة التي تمكن نباتات C4 كالذرة من تركيز CO2 حول الروبيسكو؟',
              solutionEn: 'Kranz Anatomy / Bundle Sheath Cells (تشريح كرانز في خلايا غلاف الحزمة الوعائية).',
              solutionAr: 'تشريح كرانز في خلايا غلاف الحزمة الوعائية.'
            }
          },
          worksheet: {
            id: 'ws_th_agri_ch2_l1',
            titleEn: 'Student Studio Worksheet: Crop Production & Agronomy',
            titleAr: 'ورقة عمل الطالب: إنتاج المحاصيل والفسيولوجيا',
            descriptionEn: 'Exercises on cereal yields, C3/C4 comparisons, and crop rotations.',
            descriptionAr: 'تدريبات على إنتاجية الحبوب ومقارنة مسارات التمثيل الضوئي والدورات الزراعية.',
            estimatedTimeMinutes: 45,
            problems: agriCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'agricultural_technology_studio',
            titleEn: 'Crop Growth & Photosynthetic Simulator',
            titleAr: 'محاكي نمو المحاصيل والتمثيل الضوئي',
            descriptionEn: 'Interactive C3/C4 comparative light curves and yield component calculator.',
            descriptionAr: 'محاكي تفاعلي لمنحنيات استجابة الضوء وإنتاجية المحاصيل الحقلية.'
          }
        }
      ],
      solvedExamples: agriCh2SolvedExamples,
      exerciseProblems: agriCh2Exercises,
      databank: agriCh2Databank
    },
    {
      id: 'th_agri_ch3',
      titleEn: 'Irrigation Engineering, Water Resources & Drainage Hydrology',
      titleAr: 'هندسة الري وإدارة الموارد المائية والصرف الزراعي',
      descriptionEn: 'River Nile hydrology, water budgeting, surface vs pressurized micro-irrigation, FAO Penman-Monteith ETc calculus, and tile drainage systems.',
      descriptionAr: 'هيدرولوجيا نهر النيل، الميزان المائي المصري، نظم الري السطحي والمطور بالتنقيط والرش، حسابات البخر-نتح لمعادلة بنمان-مونتيث، وشبكات الصرف الزراعي المغطى.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_agri_ch3_l1',
          titleEn: 'Lesson 1: Pressurized Irrigation Hydraulics, Penman-Monteith ETc, and Tile Drainage',
          titleAr: 'الدرس الأول: هيدروليكا الري الحديث، حسابات البخر-نتح، وشبكات الصرف المغطى',
          summaryEn: 'Irrigation application efficiencies, FAO Penman-Monteith equation, crop coefficients, pressure-compensating emitters, and Hooghoudt drain spacing.',
          summaryAr: 'كفاءة نظم الري، معادلة بنمان-مونتيث للبخر-نتح، معاملات المحاصيل، المنقطات معوضة الضغط، وحسابات الصرف المغطى.',
          estimatedMinutes: 60,
          theoryContentEn: `# Irrigation Engineering & Drainage Hydrology
## هندسة الري والصرف الزراعي

### 1. Crop Evapotranspiration (حسابات البخر-نتح)
- **Crop Water Requirement**: $ET_c = K_c \\times ET_0$.
- **Reference ET0**: Determined via FAO Penman-Monteith equation.
- **Crop Coefficient ($K_c$)**: Varies from initial stage (0.35) to mid-season peak (1.15).

### 2. Pressurized Drip & Drainage Systems (نظم الري بالتنقيط والصرف المغطى)
- **Application Efficiency**: Drip achieves 90-95% efficiency vs 50-60% for flood irrigation.
- **Subsurface Tile Drainage**: Maintains water table at 1.2-1.5 m depth, preventing secondary salinization.`,
          moeRef: {
            bookTitleEn: 'Official Ministry Agricultural Sciences Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الزراعية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-AGRI-MOE-2025',
            pageRange: 'pp. 89-130'
          },
          lessonPlan: {
            titleEn: 'Instructional Plan: Modern Irrigation Design and Water Accounting',
            titleAr: 'الخطة التدريسية: تصميم شبكات الري الحديث والمحاسبة المائية',
            objectives: [
              'Calculate daily crop evapotranspiration (ETc) across growth stages.',
              'Compare water consumption between surface flood and drip irrigation.',
              'Explain the function of pressure-compensating emitters and tile drainage.'
            ],
            warmUpEn: 'Demonstrate drip emitter discharge uniformity under varying supply pressures.',
            warmUpAr: 'عرض انتظام تصريف منقطات التنقيط معوضة الضغط تحت ضغوط تشغيل مختلفة.',
            activitiesEn: 'Students calculate daily irrigation water volume for a 50-feddan pivot in the studio.',
            activitiesAr: 'يقوم الطلاب بحساب الاحتياجات المائية لجهاز ري محوري يروي ٥٠ فداناً بالاستوديو.',
            differentiation: {
              support: 'Provide lookup tables for regional monthly reference evapotranspiration (ET0).',
              advanced: 'Calculate subsurface drain spacing using Hooghoudt steady-state drainage formula.'
            },
            formativeAssessmentEn: 'Exit ticket on crop water requirement calculations and irrigation scheduling.',
            formativeAssessmentAr: 'بطاقة خروج تقويمية حول حساب الاحتياجات المائية وجدولة الري الحقلي.',
            exitTicketQuestion: {
              questionEn: 'If reference ET0 is 6.0 mm/day and wheat mid-season Kc is 1.15, what is the daily crop water requirement ETc?',
              questionAr: 'إذا كان البخر-نتح المرجعي ٦.٠ مم/يوم ومعامل محصول القمح ١.١٥، فما هو البخر-نتح الفعلي ETc؟',
              solutionEn: 'ETc = 6.0 * 1.15 = 6.9 mm/day (٦.٩ مم/يومياً).',
              solutionAr: '٦.٩ مم في اليوم (٦.٠ * ١.١٥ = ٦.٩).'
            }
          },
          worksheet: {
            id: 'ws_th_agri_ch3_l1',
            titleEn: 'Student Studio Worksheet: Irrigation & Drainage Engineering',
            titleAr: 'ورقة عمل الطالب: هندسة الري والصرف',
            descriptionEn: 'Exercises on ETc calculations, drip hydraulics, and drainage spacing.',
            descriptionAr: 'تدريبات على حسابات البخر-نتح وهيدروليكا التنقيط وتصميم شبكات الصرف.',
            estimatedTimeMinutes: 45,
            problems: agriCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'agricultural_technology_studio',
            titleEn: 'Penman-Monteith Evapotranspiration & Irrigation Simulator',
            titleAr: 'محاكي بنمان-مونتيث لحساب البخر-نتح وجدولة الري',
            descriptionEn: 'Interactive climate variable tuner, Kc growth curve selector, and water saving calculator.',
            descriptionAr: 'محاكي تفاعلي لحساب الاحتياجات المائية وجدولة الري بالتنقيط والرش.'
          }
        }
      ],
      solvedExamples: agriCh3SolvedExamples,
      exerciseProblems: agriCh3Exercises,
      databank: agriCh3Databank
    },
    {
      id: 'th_agri_ch4',
      titleEn: 'Integrated Pest Management & Plant Pathology',
      titleAr: 'المكافحة المتكاملة للآفات وأمراض النبات',
      descriptionEn: 'Fungal, bacterial, viral crop diseases, insect pest ecology, IPM cultural/biological controls, and Economic Injury Level (EIL) thresholds.',
      descriptionAr: 'أمراض النبات الفطرية والبكتيرية والفيروسية، بيئة وسلوك الآفات الحشرية، منظومة المكافحة المتكاملة، وتحديد العتبة الاقتصادية ومستوى الضرر الاقتصادي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_agri_ch4_l1',
          titleEn: 'Lesson 1: Plant Pathology, Economic Thresholds, and Biocontrol in IPM',
          titleAr: 'الدرس الأول: أمراض النبات، العتبة الاقتصادية، والمكافحة الحيوية في IPM',
          summaryEn: 'Plant disease triangle, rusts, blights, bacterial wilt ooze, cotton leafworm ecology, Economic Injury Level (EIL) vs Economic Threshold (ET), and biocontrol agents.',
          summaryAr: 'مثلث المرض النباتي، الأصداء واللفحات، الذبول البكتيري، بيئة دودة ورق القطن وسوسة النخيل، مستويات الضرر الاقتصادي، والمكافحة الحيوية.',
          estimatedMinutes: 60,
          theoryContentEn: `# Integrated Pest Management & Crop Protection
## المكافحة المتكاملة للآفات وأمراض النبات

### 1. Plant Pathology Foundations (أسس أمراض النبات)
- **The Disease Triangle (مثلث المرض)**: Susceptible host, virulent pathogen, favorable environment.
- **Key Pathogens**: Stem rust (*Puccinia graminis*), Bacterial brown rot (*Ralstonia solanacearum*), Tomato Yellow Leaf Curl Virus (TYLCV).

### 2. IPM Economic Thresholds (العتبات الاقتصادية للمكافحة)
- **Economic Injury Level (EIL)**: Lowest population density causing economic damage equal to control costs.
- **Economic Threshold (ET / Action Threshold)**: Density at which control must start to prevent reaching EIL.
- **Biological Control (المكافحة الحيوية)**: Utilizing *Trichogramma* parasitoids and *Bacillus thuringiensis* Bt bio-pesticides.`,
          moeRef: {
            bookTitleEn: 'Official Ministry Agricultural Sciences Grade 12',
            bookTitleAr: 'كتاب الوزارة المعتمد لمادة التربية الزراعية للصف الثالث الثانوي',
            grade: '12',
            term: 'Full Year',
            officialCode: 'TH-AGRI-MOE-2025',
            pageRange: 'pp. 131-175'
          },
          lessonPlan: {
            titleEn: 'Instructional Plan: Plant Pathology Diagnosis and IPM Threshold Modeling',
            titleAr: 'الخطة التدريسية: تشخيص أمراض النبات ونمذجة عتبات المكافحة المتكاملة',
            objectives: [
              'Diagnose major fungal, bacterial, and viral crop symptoms in Egypt.',
              'Distinguish between Economic Injury Level (EIL) and Economic Threshold (ET).',
              'Formulate biological control programs utilizing natural parasitoids and bio-insecticides.'
            ],
            warmUpEn: 'Demonstrate bacterial vascular streaming ooze in water from an infected potato stem.',
            warmUpAr: 'عرض ظاهرة خروج الإفرازات البكتيرية في الماء لتمييز الذبول البكتيري عن الفطري.',
            activitiesEn: 'Students simulate predator-prey dynamics and spray decisions on the IPM curve in the studio.',
            activitiesAr: 'يقوم الطلاب بمحاكاة اتخاذ قرار الرش استناداً إلى منحنى العتبة الاقتصادية بالاستوديو.',
            differentiation: {
              support: 'Provide visual comparison guides for fungal spores, bacterial ooze, and viral mosaic.',
              advanced: 'Calculate Economic Injury Level using cost, market value, and damage coefficient parameters.'
            },
            formativeAssessmentEn: 'Exit ticket on the difference between EIL and ET and beneficial insect roles.',
            formativeAssessmentAr: 'بطاقة خروج تقويمية لمقارنة العتبة الاقتصادية ومستوى الضرر ودور الحشرات النافعة.',
            exitTicketQuestion: {
              questionEn: 'Which threshold represents the pest density where control action MUST be taken to prevent reaching economic injury?',
              questionAr: 'ما المفهوم الذي يمثل الكثافة العددية للآفة التي يجب عندها التدخل لمنع حدوث الضرر الاقتصادي؟',
              solutionEn: 'Economic Threshold / Action Threshold (العتبة الاقتصادية أو مستوى اتخاذ القرار).',
              solutionAr: 'العتبة الاقتصادية (مستوى اتخاذ القرار بمكافحة الآفة).'
            }
          },
          worksheet: {
            id: 'ws_th_agri_ch4_l1',
            titleEn: 'Student Studio Worksheet: Plant Pathology & IPM',
            titleAr: 'ورقة عمل الطالب: أمراض النبات والمكافحة المتكاملة',
            descriptionEn: 'Exercises on disease diagnosis, IPM economic thresholds, and biological control.',
            descriptionAr: 'تدريبات على تشخيص الأمراض وحسابات العتبات الاقتصادية والمكافحة الحيوية.',
            estimatedTimeMinutes: 45,
            problems: agriCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'agricultural_technology_studio',
            titleEn: 'IPM Threshold & Plant Pathology Diagnostic Lab',
            titleAr: 'مختبر المكافحة المتكاملة وتشخيص أمراض النبات',
            descriptionEn: 'Interactive ET/EIL cost-benefit curve and virtual plant disease diagnostic microscope.',
            descriptionAr: 'محاكي تفاعلي لمنحنيات العتبات الاقتصادية وفحص أعراض الأمراض النباتية.'
          }
        }
      ],
      solvedExamples: agriCh4SolvedExamples,
      exerciseProblems: agriCh4Exercises,
      databank: agriCh4Databank
    }
  ]
};
