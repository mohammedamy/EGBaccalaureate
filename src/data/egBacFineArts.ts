import type { Branch } from '../types/curriculum';
import { egBacFineArtsCh1SolvedExamples, egBacFineArtsCh1Exercises } from './textbook/egbac/egBacFineArtsCh1Textbook';
import { egBacFineArtsCh2SolvedExamples, egBacFineArtsCh2Exercises } from './textbook/egbac/egBacFineArtsCh2Textbook';
import { egBacFineArtsCh3SolvedExamples, egBacFineArtsCh3Exercises } from './textbook/egbac/egBacFineArtsCh3Textbook';
import { egBacFineArtsCh4SolvedExamples, egBacFineArtsCh4Exercises } from './textbook/egbac/egBacFineArtsCh4Textbook';
import { egBacFineArtsCh1Databank } from './databanks/egbac/egBacFineArtsCh1Databank';
import { egBacFineArtsCh2Databank } from './databanks/egbac/egBacFineArtsCh2Databank';
import { egBacFineArtsCh3Databank } from './databanks/egbac/egBacFineArtsCh3Databank';
import { egBacFineArtsCh4Databank } from './databanks/egbac/egBacFineArtsCh4Databank';

export const egBacFineArtsBranch: Branch = {
  id: 'egbac_fine_arts',
  titleEn: 'Advanced Architectural Theory, Parametric Design & Visual Culture',
  titleAr: 'النظريات المعمارية المتقدمة، التصميم البارامتري والثقافة البصرية',
  iconName: 'Palette',
  colorGradient: 'from-fuchsia-950 via-rose-900 to-amber-950',
  categoryEn: 'Official Egyptian Baccalaureate curriculum for Architecture & Visual Arts: Vitruvian theory, Le Corbusier Modulor, bioclimatic design, computational parametric morphogenesis, Voronoi envelopes, biomimicry, Deconstructivism (Zaha Hadid), and digital LiDAR heritage conservation.',
  categoryAr: 'المنهج المعتمد للبكالوريا المصرية في العمارة والفنون البصرية: النظريات الكلاسيكية وفيتروفيوس، الموديولور، التصميم البيوكليمتي، التشكل البارامتري الخوارزمي، أغلفة فورونوي والمحاكاة الحيوية، العمارة التفكيكية لزها حديد، وصيانة التراث بالمسح الليزري ثلاثي الأبعاد.',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_fine_arts_ch1',
      titleEn: 'Module 1: Classical Architectural Theory, Spatial Ergonomics & Sustainable Urbanism',
      titleAr: 'الوحدة الأولى: النظريات المعمارية الكلاسيكية، بيئة الفضاء الإنساني والتخطيط العمراني المستدام',
      descriptionEn: "Vitruvian triad (Firmitas, Utilitas, Venustas), Le Corbusier's Modulor and anthropometric scaling, bioclimatic passive solar design, and sustainable smart urbanism in Egypt.",
      descriptionAr: 'الثالوث المعماري لفيتروفيوس (المتانة، النفعية، والجمال)، موديولور لوكوربوزييه والنسب الإنسانية، التصميم البيوكليمتي السلبي، والتخطيط العمراني المستدام لمدن مصر الذكية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_fa_m1_l1',
          titleEn: "Lesson 1: The Vitruvian Triad, Anthropometrics & Le Corbusier's Modulor",
          titleAr: 'الدرس الأول: ثالوث فيتروفيوس المعماري، القياسات الأنثروبومترية وموديولور لوكوربوزييه',
          summaryEn: "Vitruvian architectural triad (Firmitas, Utilitas, Venustas), human anthropometrics, and Le Corbusier's Modulor scale unifying human dimensions with the Golden Ratio.",
          summaryAr: 'الثالوث المعماري لفيتروفيوس (المتانة والوظيفة والجمال)، بيئة القياسات الإنسانية (الأنثروبومتري)، ومقياس الموديولور للوكوربوزييه الرابط بين الجسد البشري والنسبة الذهبية.',
          estimatedMinutes: 60,
          theoryContentEn: `
# The Vitruvian Triad & Le Corbusier's Modulor
## الثالوث الفيتروفي وموديولور لوكوربوزييه

### 1. The Vitruvian Triad (الثالوث المعماري لفيتروفيوس)
Marcus Vitruvius Pollio laid down the eternal foundation of architecture in *De Architectura*:
- **Firmitas (Structural Strength / المتانة)**: Sound foundations, structural stability, and material longevity.
- **Utilitas (Functional Utility / النفعية)**: Efficient programmatic circulation, room arrangement, and purposeful spatial zoning.
- **Venustas (Aesthetic Beauty / الجمال)**: Pleasing proportions, symmetrical and optical balance, and evocative emotional resonance.

### 2. Le Corbusier's Modulor (موديولور لوكوربوزييه)
Le Corbusier conceived the **Modulor** (1948) to rescue architecture from dehumanizing industrial chaos:
- It integrates human bodily proportions (a stylized 1.83m male figure) with the Golden Ratio ($Phi approx 1.618$) and Fibonacci progressions.
- **Red Series (السلسلة الحمراء)**: Based on height of the navel (1.13m), dividing downwards and upwards in golden intervals.
- **Blue Series (السلسلة الزرقاء)**: Based on total height with arm raised (2.26m), defining optimal ceiling heights and doorway modules.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Advanced Architecture Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات المعمارية والتصميم المتقدم',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-ARTS-MOE-2025',
            pageRange: 'pp. 10-48'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Applying Anthropometric Scales in Space Planning',
            titleAr: 'الخطة التدريسية: تطبيق المقاييس الأنثروبومترية في التخطيط الفراغي المعماري',
            objectives: [
              'Evaluate architectural designs against the three Vitruvian criteria.',
              'Calculate building module dimensions using the Modulor Red and Blue series.',
              'Design an ergonomic study workspace based strictly on anthropometric dimensions.'
            ],
            warmUpEn: "Examine Le Corbusier's Unité d'Habitation in Marseille and trace the Modulor silhouette cast in the concrete facade.",
            warmUpAr: 'تفحص مبنى لوكوربوزييه السكني الشهير بمارسيليا وتتبع مجسم الموديولور المطبوع على الخرسانة المعمارية.',
            activitiesEn: 'Students measure their own reach, seated height, and eye levels, comparing them with the Modulor mathematical standards.',
            activitiesAr: 'يقيس الطلاب أبعادهم الجسدية (طول القامة، الذراع المرفوع، مستوى النظر جالساً) ومقارنتها بسلاسل الموديولور الحسابية.',
            differentiation: {
              support: 'Provide pre-calculated Modulor scaling tables.',
              advanced: 'Critique the gender and cultural universality assumptions of the original 1948 Modulor model.'
            },
            formativeAssessmentEn: 'Dimensional check of student room plans against human anthropometric clearance standards.',
            formativeAssessmentAr: 'تدقيق أبعاد الفراغات والممرات في مخططات الطلاب للتأكد من مطابقتها لمعايير الحركة الإنسانية.',
            exitTicketQuestion: {
              questionEn: 'Which three Latin terms compose the classical Vitruvian architectural triad?',
              questionAr: 'ما هي المصطلحات اللاتينية الثلاثة التي تشكل ثالوث فيتروفيوس المعماري الكلاسيكي؟',
              solutionEn: 'Firmitas, Utilitas, and Venustas (المتانة، النفعية، والجمال).',
              solutionAr: 'فيرميتاس (المتانة)، يوتيليتاس (النفعية والوظيفة)، وفينوستاس (الجمال).'
            }
          },
          worksheet: {
            id: 'ws_egbac_fa_m1_l1',
            titleEn: 'Student Studio Worksheet: Vitruvian Analysis and Modulor Modules',
            titleAr: 'ورقة عمل الطالب: التحليل الفيتروفي وحسابات الموديولور',
            descriptionEn: 'Comparative case studies analyzing structural, functional, and aesthetic harmony.',
            descriptionAr: 'دراسات حالة مقارنة لتحليل المتانة والوظيفة والجمال في المنشآت المعمارية.',
            estimatedTimeMinutes: 45,
            problems: egBacFineArtsCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Modulor & Ergonomic Space Planner Studio',
            titleAr: 'استوديو الموديولور والتخطيط الفراغي الإنساني',
            descriptionEn: 'Interactive anthropometric scaling tool calculating ergonomic room heights, doors, and furniture.',
            descriptionAr: 'أداة تفاعلية لحساب الأبعاد المعمارية للأبواب والأسقف والأثاث وفق نسب موديولور لوكوربوزييه.'
          }
        },
        {
          id: 'egbac_fa_m1_l2',
          titleEn: 'Lesson 2: Bioclimatic Architecture, Passive Solar Design & Smart Sustainable Urbanism',
          titleAr: 'الدرس الثاني: العمارة البيوكليمتية، التصميم الشمسي السلبي والعمران الذكي المستدام',
          summaryEn: 'Solar azimuth and altitude angles, thermal mass damping, window-to-wall ratios (WWR), natural ventilation convection, and Transit-Oriented Development (TOD) in smart eco-cities.',
          summaryAr: 'زوايا السمت والارتفاع الشمسي، التخميد بالكتلة الحرارية، نسب النوافذ للجدران، التهوية بالحمل الحراري الطبيعي، والتنمية العمرانية الموجهة بالنقل (TOD) في المدن الذكية.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Bioclimatic Architecture & Sustainable Smart Urbanism
## العمارة البيوكليمتية والتخطيط العمراني المستدام

### 1. Passive Solar & Envelope Physics (فيزياء الغلاف والتصميم الشمسي السلبي)
- **Solar Geometry (الهندسة الشمسية)**: Designing overhangs and vertical fins according to solar altitude and azimuth angles to admit winter sun and block summer zenith radiation.
- **Thermal Lag (التأخير الحراري)**: Dense envelopes (concrete, stone, adobe) store heat during the day and release it into the space with an 8–10 hour phase shift during cold nights.
- **Natural Ventilation (التهوية الطبيعية)**: Stack effect (thermal chimney) and cross-ventilation designed using windward positive and leeward negative pressure differentials.

### 2. Smart Sustainable Urbanism (العمران المستدام والمدن الذكية)
- **Transit-Oriented Development (TOD)**: Concentrating high-density residential, retail, and civic amenities within a 500m (5–10 minute) walking radius of rail and BRT transit stations.
- **15-Minute City (مدينة الـ 15 دقيقة)**: Polycentric neighborhood design eliminating auto-dependency by decentralized co-location of daily social infrastructure.
- **Urban Heat Island (UHI) Mitigation**: High-albedo cool roofs and continuous vegetative sponge corridors to lower urban ambient temperatures by 3–5°C.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Advanced Architecture Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات المعمارية والتصميم المتقدم',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-ARTS-MOE-2025',
            pageRange: 'pp. 50-95'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Sun Path Modeling and Transit-Oriented Master Planning',
            titleAr: 'الخطة التدريسية: نمذجة مسارات الشمس والتخطيط العمراني الموجه بالنقل الجماعي',
            objectives: [
              "Calculate optimal solar louvre depths for Cairo's latitude (30°N).",
              'Analyze how high thermal mass dampens diurnal temperature oscillations.',
              'Design a TOD urban cluster centering density around a rapid transit hub.'
            ],
            warmUpEn: 'Use interactive sun-path diagrams to demonstrate why northern facades in Egypt require minimal shading compared to southern and western orientations.',
            warmUpAr: 'استعراض مخطط مسار الشمس في سماء القاهرة (خط عرض 30 شمالاً) لتوضيح اختلاف المعالجات بين الواجهات الشمالية والجنوبية والغربية.',
            activitiesEn: 'Students draft an energy-efficient master plan for an Egyptian desert extension district incorporating solar orientations, green wind corridors, and pedestrian boulevards.',
            activitiesAr: 'يصمم الطلاب مخططاً عاماً لحي صحراوي مصري مستدام يدمج التوجيه الشمسي، وممرات الرياح اللطيفة، وشبكة مشاة مفصولة عن السيارات.',
            differentiation: {
              support: 'Provide solar angle lookup charts for Egyptian governorates.',
              advanced: 'Calculate the Solar Heat Gain Coefficient (SHGC) and U-value requirements for building envelope compliance.'
            },
            formativeAssessmentEn: 'Analysis of cross-ventilation airflow arrows on student architectural floor plans.',
            formativeAssessmentAr: 'تقييم كفاءة مسارات تيارات الهواء وحركة التهوية المتقاطعة في المساقط الأفقية للطلاب.',
            exitTicketQuestion: {
              questionEn: 'What urban planning concept organizes high-density, mixed-use communities within a 10-minute walk of rapid public transit nodes?',
              questionAr: 'ما هو المفهوم التخطيطي الذي يركز الكثافة السكانية والأنشطة المتعددة في محيط 10 دقائق سيراً من محطات النقل السريع؟',
              solutionEn: 'Transit-Oriented Development (TOD) / التنمية العمرانية الموجهة بالنقل الجماعي.',
              solutionAr: 'التنمية الموجهة بالنقل الجماعي (TOD).'
            }
          },
          worksheet: {
            id: 'ws_egbac_fa_m1_l2',
            titleEn: 'Student Studio Worksheet: Bioclimatic Modeling and Sustainable Master Planning',
            titleAr: 'ورقة عمل الطالب: النمذجة البيوكليمتية والتخطيط العمراني المستدام',
            descriptionEn: 'Quantitative exercises on solar shading geometry, thermal envelope calculation, and TOD zoning.',
            descriptionAr: 'مسائل كمية في حساب كاسرات الشمس، والسعة الحرارية للأغلفة، وتوزيع الكثافات حول محطات النقل.',
            estimatedTimeMinutes: 45,
            problems: egBacFineArtsCh1SolvedExamples.slice(3, 6)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Bioclimatic Sun-Path & Urban TOD Simulator',
            titleAr: 'محاكي المسار الشمسي البيوكليمتي والتخطيط الحضري TOD',
            descriptionEn: 'Interactive sun-path shadow projector and walkable TOD radius density calculator.',
            descriptionAr: 'محاكاة لظلال حركة الشمس السنوية وحاسبة الكثافات العمرانية الموجهة بالنقل الجماعي.'
          }
        }
      ],
      solvedExamples: egBacFineArtsCh1SolvedExamples,
      exerciseProblems: egBacFineArtsCh1Exercises,
      databank: egBacFineArtsCh1Databank
    },

    // Module 2
    {
      id: 'egbac_fine_arts_ch2',
      titleEn: 'Module 2: Computational Parametric Architecture, Biomimicry & Generative Forms',
      titleAr: 'الوحدة الثانية: العمارة البارامترية الحوسبية، المحاكاة الحيوية وتوليد الأشكال الإنشائية',
      descriptionEn: 'Algorithmic morphogenesis, Voronoi tessellations, minimal surface structural forms, biomimetic structural mechanics, and digital robotic additive fabrication.',
      descriptionAr: 'التشكل الخوارزمي للأشكال المعمارية، تقسيمات فورونوي والتثليث الإنشائي، السطوح الصغرى، الميكانيكا الحيوية المحاكية للطبيعة، والتصنيع الرقمي الإضافي بالروبوتات.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_fa_m2_l1',
          titleEn: 'Lesson 1: Parametric Morphogenesis, Voronoi Tessellations & Form-Finding',
          titleAr: 'الدرس الأول: التشكل البارامتري، تقسيمات فورونوي وتوليد الأشكال الإنشائية',
          summaryEn: 'Computational parametric algorithms, visual script modeling, Voronoi diagrams, Delaunay triangulation, and structural topology optimization for performance-driven envelopes.',
          summaryAr: 'الخوارزميات البارامترية الحوسبية، النمذجة بالبرمجة البصرية، مخططات فورونوي، تثليث ديلوني، والتحسين الطوبولوجي للأغلفة المعمارية عالية الأداء.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Parametric Morphogenesis & Voronoi Tessellations
## التشكل البارامتري الخوارزمي وتقسيمات فورونوي

### 1. Computational Parametric Design (التصميم البارامتري الحوسبي)
Unlike static CAD drafting, parametric architecture defines geometric entities through mathematical relations, parameters, and algorithms. When a driving parameter (such as solar exposure, wind force, or occupant density) changes, the entire associative model dynamically updates in real time.

### 2. Voronoi Tessellations & Delaunay Triangulation (مخططات فورونوي وتثليث ديلوني)
- **Voronoi Diagram**: Partitions a plane based on seed points into polygonal cells where each cell encompasses the spatial region closest to its seed.
- **Architectural Application**: In building skins and lightweight space frames, Voronoi cells dynamically adjust their aperture sizes according to local stress concentrations and daylight requirements.
- **Delaunay Triangulation**: The geometric dual of the Voronoi network, forming non-overlapping triangular grids that optimize structural stress transfer across complex double-curved surfaces.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Advanced Architecture Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات المعمارية والتصميم المتقدم',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-ARTS-MOE-2025',
            pageRange: 'pp. 98-135'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Algorithmic Cellular Generation and Structural Meshes',
            titleAr: 'الخطة التدريسية: التوليد الخلوي الخوارزمي والشبكات الإنشائية البارامترية',
            objectives: [
              'Formulate the mathematical definition of a Voronoi cell.',
              'Demonstrate how parametric algorithms adapt facade perforation based on environmental data.',
              'Generate a responsive canopy mesh utilizing Delaunay triangulation logic.'
            ],
            warmUpEn: 'Show live video of parametric algorithmic facades reacting to simulated environmental sensor inputs.',
            warmUpAr: 'عرض مرئي لواجهات معمارية بارامترية تتغير فوهاتها الخلوية آلياً بتغير شدة الضوء الساقط من أجهزة الاستشعار.',
            activitiesEn: 'Students calculate seed distances on coordinate grids to manually plot Voronoi boundaries, then manipulate parameters in the studio widget.',
            activitiesAr: 'يرسم الطلاب حدود خلايا فورونوي يدوياً على شبكة إحداثيات استناداً لنقاط بذرية، ثم يتحكمون في المتغيرات عبر الاستوديو الرقمي.',
            differentiation: {
              support: 'Step-by-step bisector construction guidelines.',
              advanced: 'Write pseudo-code defining recursive cellular subdivision based on a solar proximity vector.'
            },
            formativeAssessmentEn: 'Verification that Voronoi cell boundaries represent perpendicular bisectors between seed pairs.',
            formativeAssessmentAr: 'التأكد من أن حدود الخلايا تمثل المحاور العمودية المنصفة للمسافات بين النقاط البذرية.',
            exitTicketQuestion: {
              questionEn: 'What geometric structure is the dual graph of a Voronoi tessellation, connecting adjacent seed points into structural triangles?',
              questionAr: 'ما هي البنية الهندسية المكملة الثنائية لمخطط فورونوي، والتي تربط النقاط البذرية المتجاورة في شبكة مثلثات إنشائية؟',
              solutionEn: 'Delaunay Triangulation (تثليث ديلوني).',
              solutionAr: 'تثليث ديلوني (Delaunay Triangulation).'
            }
          },
          worksheet: {
            id: 'ws_egbac_fa_m2_l1',
            titleEn: 'Student Studio Worksheet: Voronoi Geometry and Parametric Envelopes',
            titleAr: 'ورقة عمل الطالب: هندسة فورونوي والأغلفة المعمارية البارامترية',
            descriptionEn: 'Geometry drills plotting Voronoi boundaries, Delaunay triangles, and density-driven apertures.',
            descriptionAr: 'تمارين هندسية لرسم خلايا فورونوي وتثليث ديلوني وضبط فوهات الواجهات وفق الإجهاد.',
            estimatedTimeMinutes: 45,
            problems: egBacFineArtsCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Parametric Voronoi & Mesh Tessellation Lab',
            titleAr: 'مختبر فورونوي البارامتري والشبكات الإنشائية',
            descriptionEn: 'Interactive real-time Voronoi cell generator with movable seeds and load-adaptive perforation sliders.',
            descriptionAr: 'أداة تفاعلية لتوليد خلايا فورونوي وتغيير مواقع الأنوية والتحكم في اتساع الفوهات الإنشائية.'
          }
        },
        {
          id: 'egbac_fa_m2_l2',
          titleEn: 'Lesson 2: Biomimetic Engineering, Tensile Shells & Robotic 3D Printing',
          titleAr: 'الدرس الثاني: الهندسة المحاكية للطبيعة، الأصداف الإنشائية والطباعة ثلاثية الأبعاد',
          summaryEn: "Biomimicry in structural design, Frei Otto's minimal-surface soap film mechanics, tensile membrane structures, robotic 3D concrete printing, and material computation.",
          summaryAr: 'المحاكاة الحيوية في التصميم الإنشائي، فيزياء الأسطح الصغرى عند فراي أوتو، الهياكل الإنشائية المشدودة، الطباعة الخرسانية الروبوتية، وحوسبة المواد.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Biomimicry, Tensile Shells & Robotic 3D Printing
## المحاكاة الحيوية، الهياكل الإنشائية والطباعة الروبوتية

### 1. Biomimetic Structural Mechanics (المحاكاة الحيوية الإنشائية)
Nature optimizes structural load distribution using minimal material volume:
- **Bone Trabeculae (بنية العظام الإسفنجية)**: Bone fibers align strictly along principal stress trajectories, leaving non-stressed areas porous and lightweight.
- **Minimal Surfaces & Soap Films (الأسطح الصغرى وأغشية الصابون)**: Pioneered by Frei Otto. Soap films naturally form double-curved saddle surfaces (hyperbolic paraboloids) that equilibrate surface tension with zero bending moment.

### 2. Robotic Digital Fabrication & 3D Printing (الطباعة الروبوتية ثلاثية الأبعاد)
- **Additive Manufacturing (التصنيع التراكمي)**: Extruding formulated fiber-reinforced concrete layer by layer along robot toolpaths, completely eliminating formwork.
- **Topology Optimization (التحسين الطوبولوجي)**: Finite element algorithms mathematically carve away unnecessary material, reducing structural carbon footprints by 40–50% while maintaining required safety factors.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Advanced Architecture Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات المعمارية والتصميم المتقدم',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-ARTS-MOE-2025',
            pageRange: 'pp. 138-175'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Form-Finding Tensile Membranes and Additive Pathing',
            titleAr: 'الخطة التدريسية: إيجاد الأشكال الإنشائية المشدودة وتوليد مسارات الطباعة ثلاثية الأبعاد',
            objectives: [
              'Explain the equilibrium mechanics of minimal surfaces in tensile architecture.',
              'Analyze how topology optimization removes material from non-stress regions.',
              'Design a robotic toolpath for an additive 3D concrete self-supporting arch.'
            ],
            warmUpEn: "Demonstrate Frei Otto's soap film experiment using wire wireframes dipped in soapy water to observe spontaneous minimal surfaces.",
            warmUpAr: 'إجراء تجربة أغشية الصابون العملية باستخدام إطارات سلكية لتوضيح كيف تنشئ الطبيعة أسطحاً صغرى متوازنة بدون إجهادات انحناء.',
            activitiesEn: 'Students design a tensile canopy utilizing hyperbolic paraboloid geometry and evaluate its structural reaction vectors.',
            activitiesAr: 'يصمم الطلاب مظلة إنشائية مشدودة بنظام السطح المكافئ الزائدي ويحللون متجهات قوى الشد والارتكاز.',
            differentiation: {
              support: 'Provide tactile 3D printed models of tensile membrane saddle surfaces.',
              advanced: 'Simulate structural load paths using finite-element analysis scripts.'
            },
            formativeAssessmentEn: 'Evaluation of student structural sketches confirming the absence of bending moment in pure tension members.',
            formativeAssessmentAr: 'تدقيق رسوم الطلاب الإنشائية للتأكد من خلو العناصر المشدودة تماماً من إجهادات عزم الانحناء.',
            exitTicketQuestion: {
              questionEn: 'Which natural physical phenomenon did Frei Otto replicate to discover minimal surface self-supporting tensile membrane forms?',
              questionAr: 'ما هي الظاهرة الفيزيائية الطبيعية التي حاكاها المعماري فراي أوتو لاكتشاف الأسطح الصغرى المتوازنة في الهياكل المشدودة؟',
              solutionEn: 'Surface tension in soap film bubbles (التوتر السطحي في أغشية وفقاعات الصابون).',
              solutionAr: 'التوتر السطحي في أغشية الصابون (Soap films).'
            }
          },
          worksheet: {
            id: 'ws_egbac_fa_m2_l2',
            titleEn: 'Student Studio Worksheet: Biomimetic Shells and Robotic Fabrication',
            titleAr: 'ورقة عمل الطالب: الأصداف المحاكية للطبيعة والتصنيع الروبوتي',
            descriptionEn: 'Structural calculations on tensile membranes, minimal surfaces, and robotic layer deposition.',
            descriptionAr: 'مسائل إنشائية في الأسطح الصغرى المشدودة وحسابات ترسيب الطبقات الخرسانية بالروبوت.',
            estimatedTimeMinutes: 45,
            problems: egBacFineArtsCh2SolvedExamples.slice(3, 6)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Tensile Shell & 3D Print Toolpath Simulator',
            titleAr: 'محاكي الأصداف المشدودة ومسارات الطباعة ثلاثية الأبعاد',
            descriptionEn: 'Interactive form-finding simulator for minimal surface tensile membranes and layer-by-layer 3D toolpaths.',
            descriptionAr: 'محاكاة تفاعلية لتوليد الأسطح الصغرى المشدودة ومسارات حركة الطباعة الروبوتية ثلاثية الأبعاد.'
          }
        }
      ],
      solvedExamples: egBacFineArtsCh2SolvedExamples,
      exerciseProblems: egBacFineArtsCh2Exercises,
      databank: egBacFineArtsCh2Databank
    },

    // Module 3
    {
      id: 'egbac_fine_arts_ch3',
      titleEn: 'Module 3: Advanced Visual Semiotics, Modernism & Contemporary Aesthetic Philosophy',
      titleAr: 'الوحدة الثالثة: السيميائية البصرية المعمارية، الحداثة والفلسفة الجمالية المعاصرة',
      descriptionEn: 'Semiotics of architectural space, Bauhaus functionalism, Deconstructivism (Zaha Hadid), kinetic responsive facades, and interactive immersive media architecture.',
      descriptionAr: 'سيميائية الفضاء المعماري، الوظيفية في مدرسة الباوهاوس، التفكيكية وتكسير الهندسة الإقليدية (زها حديد)، والواجهات الحركية المتفاعلة والعمارة الرقمية الغامرة.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_fa_m3_l1',
          titleEn: 'Lesson 1: Architectural Semiotics, Bauhaus Functionalism & Deconstructivism',
          titleAr: 'الدرس الأول: السيميائية المعمارية، وظيفية الباوهاوس والحركة التفكيكية لزها حديد',
          summaryEn: 'Semiotics of built space (Signifier/Signified), Bauhaus doctrine ("Form Follows Function", truth to materials), and Deconstructivist fluid anti-Cartesian geometry (Zaha Hadid, Frank Gehry).',
          summaryAr: 'سيميائية الفضاء المبني (الدال والمدلول)، عقيدة الباوهاوس (الشكل يتبع الوظيفة وصدق الخامة)، والهندسة التفكيكية السائلة المناهضة للإقليدية (زها حديد وفرانك جيري).',
          estimatedMinutes: 60,
          theoryContentEn: `
# Architectural Semiotics, Bauhaus & Deconstructivism
## السيميائية المعمارية، الباوهاوس والعمارة التفكيكية

### 1. Semiotics of Architecture (السيميائية المكانية)
Architecture functions as a non-verbal symbolic language:
- **Signifier (الدال)**: The tangible physical manifestation (e.g., massive stone columns, glass curtain walls).
- **Signified (المدلول)**: The cultural, political, or psychological connotation (e.g., corporate transparency, imperial majesty, democratic access).

### 2. Bauhaus & The International Style (الباوهاوس والحداثة)
Walter Gropius, Mies van der Rohe, and Hannes Meyer established modernism:
- "Form Follows Function" (الشكل يتبع الوظيفة): Stripping historical pediments and applied moldings.
- "Truth to Materials" (صدق الخامة): Celebrating raw exposed concrete, steel I-beams, and structural plate glass without plaster masquerades.

### 3. Deconstructivism & Parametric Fluidity (التفكيكية وسيولة الفضاء عند زها حديد)
- Breaking away from the rigid perpendicular Cartesian 90-degree grid.
- **Zaha Hadid (1950–2016)**: Replaced fragmented collage with continuous topological fluidity, using computational algorithms to sculpt buildings where walls morph into ceilings and circulation flows seamlessly through space.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Advanced Architecture Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات المعمارية والتصميم المتقدم',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-ARTS-MOE-2025',
            pageRange: 'pp. 178-215'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Deconstructing Meaning from Classical Monumentalism to Fluid Space',
            titleAr: 'الخطة التدريسية: تفكيك الدلالة البصرية من الكلاسيكية إلى الفضاء المعماري السائل',
            objectives: [
              'Deconstruct the semiotic signifiers and signifieds of public monumental buildings.',
              'Contrast Bauhaus minimalist functionalism against historicist neoclassical revival.',
              "Analyze the topological continuity in Zaha Hadid's fluid architectural forms."
            ],
            warmUpEn: "Show side-by-side images of an 1890s neoclassical bank facade and Zaha Hadid's Heydar Aliyev Centre to spark semiotic inquiry.",
            warmUpAr: 'عرض مقارن لواجهة مبنى بنك كلاسيكي بعقود وأعمدة مقابل مركز حيدر علييف لزها حديد لمناقشة لغة الخطوط والدلالة.',
            activitiesEn: 'Students select a contemporary Egyptian civic building and author a semiotic analysis of its materials, form, and cultural messaging.',
            activitiesAr: 'يختار الطلاب مبنى عاماً معاصراً ويحللون دلالاته السيميائية من حيث الخامات، وتشكيل الكتل، والرسالة الثقافية التي يبثها.',
            differentiation: {
              support: 'Provide a semiotics terminology reference card (sign, code, icon, index).',
              advanced: "Examine Jacques Derrida's literary deconstruction philosophy and its direct translation into architectural form by Peter Eisenman."
            },
            formativeAssessmentEn: "Assessment of students' ability to identify non-Cartesian structural joints in deconstructivist sketches.",
            formativeAssessmentAr: 'تقييم مهارة الطلاب في رسم وتفسير الوصلات الإنشائية غير الإقليدية في العمارة التفكيكية.',
            exitTicketQuestion: {
              questionEn: 'What fundamental architectural maxim was championed by Louis Sullivan and the Bauhaus school regarding the genesis of form?',
              questionAr: 'ما هو المبدأ المعماري الجوهري الشهير الذي نادت به مدرسة الباوهاوس ولويس سوليفان بشأن انبثاق الشكل؟',
              solutionEn: '"Form Follows Function" (الشكل يتبع الوظيفة).',
              solutionAr: '"الشكل يتبع الوظيفة" (Form Follows Function).'
            }
          },
          worksheet: {
            id: 'ws_egbac_fa_m3_l1',
            titleEn: 'Student Studio Worksheet: Semiotics and Modernist Architectural Theory',
            titleAr: 'ورقة عمل الطالب: السيميائية والنظريات المعمارية الحديثة والتفكيكية',
            descriptionEn: 'Critical analysis exercises deconstructing architectural forms, Bauhaus manifestos, and fluid envelopes.',
            descriptionAr: 'تمارين نقدية لتحليل سيميائية الفضاء، وبيانات الباوهاوس، وانحناءات زها حديد الحرة.',
            estimatedTimeMinutes: 45,
            problems: egBacFineArtsCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Architectural Semiotics & Style Deconstructor Lab',
            titleAr: 'مختبر السيميائية وتفكيك الأساليب المعمارية',
            descriptionEn: 'Interactive visual comparative tool analyzing semiotic codes across classical, Bauhaus, and deconstructivist landmarks.',
            descriptionAr: 'أداة مقارنة بصرية تفاعلية لتحليل الرموز السيميائية عبر العمارة الكلاسيكية والباوهاوس والتفكيكية.'
          }
        },
        {
          id: 'egbac_fa_m3_l2',
          titleEn: 'Lesson 2: Kinetic Facades, Interactive Media Architecture & Immersive Environments',
          titleAr: 'الدرس الثاني: الواجهات الحركية، العمارة الرقمية التفاعلية والبيئات الغامرة',
          summaryEn: 'Kinetic climate-responsive facades (louvers, origami folding), real-time building sensor networks, media architecture skins, and augmented spatial design.',
          summaryAr: 'الواجهات الحركية المتجاوبة مع المناخ (الكاسرات الدوارة، الطيات الورقية أوريجامي)، شبكات الاستشعار الذكية، الأغلفة المعمارية الإعلامية، والبيئات الغامرة.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Kinetic Facades & Interactive Media Architecture
## الواجهات الحركية التفاعلية والعمارة الرقمية الغامرة

### 1. Climate-Responsive Kinetic Envelopes (الواجهات الحركية المتجاوبة)
Rather than remaining static barriers, contemporary building facades behave as dynamic living membranes:
- **Mechanical Kinematics (الحركة الميكانيكية)**: Rotating louvers, iris apertures, and origami folding panels driven by servo-motors.
- **Sensor Integration (التكامل مع الحساسات)**: Real-time photoelectric and meteorological sensors monitor solar azimuth, lux levels, and wind speed, continuously adjusting facade opacity to eliminate internal glare and optimize thermal comfort.

### 2. Media Architecture & Immersive Spaces (العمارة الإعلامية والبيئات الغامرة)
- **Media Facades (واجهات الوسائط الرقمية)**: Integrating addressable LED nodes and translucent OLED glazing into the building facade, turning monumental architecture into dynamic civic communication canvases.
- **Immersive Environments (الفضاءات التفاعلية الغامرة)**: Utilizing interactive projection mapping and spatial audio to transform physical architectural interiors into responsive sensory experiences.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Advanced Architecture Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات المعمارية والتصميم المتقدم',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-ARTS-MOE-2025',
            pageRange: 'pp. 218-255'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Designing Sensor-Driven Kinetic Shading Mechanisms',
            titleAr: 'الخطة التدريسية: تصميم أنظمة الواجهات الحركية المتفاعلة مع حساسات الضوء',
            objectives: [
              'Explain how kinetic facade louvers alter thermal transfer in response to diurnal sun movement.',
              'Design a kinetic folding panel inspired by Islamic geometric Mashrabiya patterns.',
              'Integrate media architecture elements into a civic cultural center facade.'
            ],
            warmUpEn: 'Show video of the Abu Dhabi Al-Bahar Towers with their kinetic computer-controlled folding Mashrabiya screens opening and closing with the sun.',
            warmUpAr: 'عرض فيديو تفاعلي لأبراج البحر في أبوظبي يوضح حركة الواجهات المشربية الذكية التي تفتح وتغلق آلياً تتبعاً للشمس.',
            activitiesEn: 'Students create paper folding origami prototypes of responsive kinetic louvers and calculate required rotation angles throughout a summer day.',
            activitiesAr: 'يصنع الطلاب نماذج ورقية تجريبية لكاسرات حركية مطوية ويحسبون زوايا الدوران المطلوبة لتوفير الظل طوال ساعات النهار.',
            differentiation: {
              support: 'Provide foldable origami geometric templates.',
              advanced: 'Develop an algorithmic logic diagram linking light sensor voltage to servo motor rotational step angles.'
            },
            formativeAssessmentEn: 'Assessment of geometric shading coverage in student kinetic mockups.',
            formativeAssessmentAr: 'تقييم نسبة التظليل المحققة في نماذج الواجهات الحركية عند محاكاة زوايا الإشعاع الشمسي المختلفة.',
            exitTicketQuestion: {
              questionEn: 'How do kinetic building facades reduce annual HVAC operational building energy costs?',
              questionAr: 'كيف تساهم الواجهات المعمارية الحركية في تخفيض تكاليف استهلاك طاقة التكييف والتبريد السنوية؟',
              solutionEn: 'By blocking direct solar heat gain in real-time before it penetrates the building envelope (بحجب الإشعاع الحراري المباشر ديناميكياً قبل اختراقه للغلاف الزجاجي للمبنى).',
              solutionAr: 'بحجب الإشعاع الحراري الشمسي المباشر فورياً قبل نفاذه للداخل، مما يقلل الحمل الحراري على أجهزة التبريد.'
            }
          },
          worksheet: {
            id: 'ws_egbac_fa_m3_l2',
            titleEn: 'Student Studio Worksheet: Kinetic Envelopes and Responsive Shading',
            titleAr: 'ورقة عمل الطالب: الأغلفة الحركية وأنظمة التظليل الذكية',
            descriptionEn: 'Design challenges constructing kinetic folding geometry and calculating energy load savings.',
            descriptionAr: 'تمارين في هندسة الطيات الحركية وحساب معدلات التوفير في أحمال التبريد السنوية للمبنى.',
            estimatedTimeMinutes: 45,
            problems: egBacFineArtsCh3SolvedExamples.slice(3, 6)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Kinetic Facade & Sun Tracker Studio',
            titleAr: 'استوديو محاكاة الواجهات الحركية وتتبع الشمس',
            descriptionEn: 'Interactive simulator modeling dynamic opening and closing of kinetic Mashrabiya panels across daylight hours.',
            descriptionAr: 'محاكاة تفاعلية لحركة فتح وإغلاق كاسرات المشربية الحركية الذكية على مدار ساعات النهار.'
          }
        }
      ],
      solvedExamples: egBacFineArtsCh3SolvedExamples,
      exerciseProblems: egBacFineArtsCh3Exercises,
      databank: egBacFineArtsCh3Databank
    },

    // Module 4
    {
      id: 'egbac_fine_arts_ch4',
      titleEn: 'Module 4: Heritage Conservation, Structural Restoration & Digital Museology',
      titleAr: 'الوحدة الرابعة: صيانة التراث المعماري، الترميم الإنشائي والمتاحف الرقمية ثلاثية الأبعاد',
      descriptionEn: 'Venice and Burra charters, material degradation diagnostics (salt efflorescence, rising damp), adaptive reuse, and 3D LiDAR scanning in digital heritage.',
      descriptionAr: 'المواثيق الدولية للترميم (فينيسيا وبورا)، تشخيص تدهور مواد البناء (التزهير والرطوبة الصاعدة)، إعادة التوظيف المتوافق للمباني الأثرية، والمسح الليزري ثلاثي الأبعاد.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_fa_m4_l1',
          titleEn: 'Lesson 1: Conservation Charters, Degradation Diagnostics & Adaptive Reuse',
          titleAr: 'الدرس الأول: مواثيق الترميم الدولية، تشخيص تدهور المواد وإعادة التوظيف المتوافق',
          summaryEn: 'Venice Charter (1964) and Burra Charter ethical conservation principles, material pathology (salt efflorescence, rising damp, stone spalling), and adaptive reuse strategies preserving historic fabric.',
          summaryAr: 'المبادئ الأخلاقية للترميم في ميثاقي فينيسيا وبورا، علم أمراض المواد التراثية (التزهير، الرطوبة الصاعدة، تساقط القشور الحجرية)، واستراتيجيات إعادة التوظيف المتوافق للتراث.',
          estimatedMinutes: 60,
          theoryContentEn: `
# Heritage Conservation, Pathology & Adaptive Reuse
## صيانة التراث المعماري، علم الأمراض وإعادة التوظيف

### 1. International Conservation Charters (المواثيق الدولية للترميم)
- **Venice Charter (1964)**: Mandates respect for authentic historic fabric. Reconstruction based on conjecture is forbidden; any new modern structural interventions must remain clearly distinguishable from original fabric while blending harmoniously.
- **Principle of Reversibility (مبدأ الرجعية)**: Any material or grout injected to stabilize historic masonry must be capable of being removed without harming the original stone.
- **Burra Charter (1979)**: Introduced "cultural significance" (aesthetic, historic, scientific, social value for past, present, and future generations).

### 2. Pathology of Historic Building Materials (أمراض وتدهور مواد البناء)
- **Rising Damp (الرطوبة الصاعدة)**: Capillary migration of groundwater up porous stone foundations and historic lime mortar.
- **Salt Efflorescence & Cryptoflorescence (التزهير الملحي)**: Evaporation of saline moisture leaves crystalline salt crusts; internal sub-surface crystallization generates pressures exceeding stone tensile strength, leading to crumbling and spalling.

### 3. Adaptive Reuse (إعادة التوظيف المتوافق)
Repurposing obsolete historical structures (e.g., transforming Mamluk Wakalas or historical palaces into contemporary cultural and craft incubator centers) while strictly preserving historic character and minimizing carbon emissions.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Advanced Architecture Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات المعمارية والتصميم المتقدم',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-ARTS-MOE-2025',
            pageRange: 'pp. 258-295'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Diagnosing Historic Masonry Decay and Planning Adaptive Reuse',
            titleAr: 'الخطة التدريسية: تشخيص تدهور الحجر التاريخي والتخطيط لإعادة التوظيف التراثي المتوافق',
            objectives: [
              'Evaluate restoration proposals against Venice Charter principles of authenticity and distinguishability.',
              'Diagnose causes of rising damp and sub-surface salt crystallization in historic limestone walls.',
              'Design an adaptive reuse project program for a historic Egyptian caravanserai (Wakala).'
            ],
            warmUpEn: 'Analyze photographs of the restored Wakala of Al-Ghouri in Islamic Cairo, identifying modern lighting and accessibility interventions.',
            warmUpAr: 'عرض صور توثيقية لترميم وكالة الغوري بالقاهرة التاريخية ورصد كيفية دمج الإضاءة والمسارات الحديثة دون تشويه الحجر التاريخي.',
            activitiesEn: 'Students draft a conservation report diagnosing salt efflorescence on an archaeological wall and recommend non-destructive remediation procedures.',
            activitiesAr: 'يعد الطلاب تقريراً تشخيصياً لمظاهر التزهير الملحي والرطوبة في جدار أثري مع اقتراح خطوات العلاج غير الإتلافي.',
            differentiation: {
              support: 'Provide a visual glossary of masonry defects (efflorescence, alveolization, biological crust).',
              advanced: 'Calculate osmotic pressure values generated by halite and gypsum crystallization within limestone pores.'
            },
            formativeAssessmentEn: 'Scenario-based quiz on ethical dilemmas in archaeological site conservation.',
            formativeAssessmentAr: 'اختبار دراسة حالة حول المفاضلة الأخلاقية في معالجة واجهات المباني الأثرية المتهدمة جزئياً.',
            exitTicketQuestion: {
              questionEn: 'According to the Venice Charter, what must be true of any new modern additions added to a historic architectural monument?',
              questionAr: 'وفقاً لميثاق فينيسيا الدولي، ما هو الشرط الأساسي الواجب توفره في أي إضافات معمارية حديثة لمبنى أثري؟',
              solutionEn: 'They must be clearly distinguishable from the original historic fabric (أن تكون متمايزة بصرياً عن النسيج التاريخي الأصلي لمنع التزييف).',
              solutionAr: 'أن تكون متميزة ومتباينة بصرياً عن النسيج التاريخي الأصلي لمنع التزييف وتكون قابلة للإزالة.'
            }
          },
          worksheet: {
            id: 'ws_egbac_fa_m4_l1',
            titleEn: 'Student Studio Worksheet: Masonry Pathology and Conservation Charters',
            titleAr: 'ورقة عمل الطالب: أمراض الأحجار الأثرية ومواثيق الصيانة التراثية',
            descriptionEn: 'Case exercises diagnosing salt weathering, structural microcracks, and adaptive reuse compliance.',
            descriptionAr: 'تمارين عملية لتشخيص التدهور الملحي، وتحديد مسارات الرطوبة، ومطابقة برامج إعادة التوظيف.',
            estimatedTimeMinutes: 45,
            problems: egBacFineArtsCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: 'Heritage Material Pathology & Restoration Lab',
            titleAr: 'مختبر تشخيص أمراض المواد الأثرية وترميم التراث',
            descriptionEn: 'Interactive simulator diagnosing moisture migration, salt efflorescence, and testing reversible grout interventions.',
            descriptionAr: 'محاكاة تفاعلية لتشخيص مسارات الرطوبة والتزهير الملحي واختبار المواد والتدخلات الترميمية الرجعية.'
          }
        },
        {
          id: 'egbac_fa_m4_l2',
          titleEn: 'Lesson 2: 3D LiDAR Scanning, Photogrammetry & Digital Museology',
          titleAr: 'الدرس الثاني: المسح الليزري ثلاثي الأبعاد (LiDAR)، الفوتوجراميتري والمتاحف الرقمية',
          summaryEn: 'Terrestrial LiDAR, high-density point clouds, drone close-range photogrammetry, digital twins for structural health monitoring, and virtual/augmented reality digital museology.',
          summaryAr: 'المسح الليزري الأرضي ثلاثي الأبعاد (LiDAR)، سحب النقاط الكثيفة (Point Clouds)، فوتوجراميتري الدرون، التوائم الرقمية لرصد السلامة الإنشائية، والمتاحف الافتراضية التفاعلية.',
          estimatedMinutes: 60,
          theoryContentEn: `
# 3D LiDAR Scanning, Photogrammetry & Digital Museology
## المسح الليزري ثلاثي الأبعاد، الفوتوجراميتري والمتاحف الرقمية

### 1. Digital Heritage Technologies (تقنيات الرقمنة التراثية ثلاثية الأبعاد)
- **Terrestrial LiDAR (المسح الليزري الأرضي)**: Emits hundreds of thousands of laser pulses per second, measuring time-of-flight to generate dense, sub-millimeter accurate 3D coordinate point clouds (X, Y, Z + Reflectance).
- **Close-Range Drone Photogrammetry (فوتوجراميتري الدرون)**: Algorithms (Structure from Motion / SfM) stitch hundreds of overlapping digital photographs to reconstruct accurate, photo-textured 3D polygonal surface meshes.
- **Structural Digital Twins (التوأم الرقمي الإنشائي)**: Periodic laser scans allow engineers to detect micro-deformations, structural settlements, and seismic movements over time without contacting fragile monuments.

### 2. Digital Museology & Virtual Preservation (المتاحف الرقمية التفاعلية)
- Creating immersive 3D digital museum experiences accessible globally.
- Virtual reality (VR) and Augmented Reality (AR) exhibitions that contextualize archaeological artifacts inside their original, fully restored historical temples and architectural environments.
`,
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Advanced Architecture Syllabus Grade 12',
            bookTitleAr: 'منهج البكالوريا المصرية الحديثة في النظريات المعمارية والتصميم المتقدم',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-ARTS-MOE-2025',
            pageRange: 'pp. 298-335'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Processing LiDAR Point Clouds and Curating Virtual Museum Spaces',
            titleAr: 'الخطة التدريسية: معالجة سحب نقاط المسح الليزري وتنسيق قاعات المتاحف الافتراضية',
            objectives: [
              'Explain the time-of-flight measurement principles of terrestrial LiDAR scanners.',
              'Differentiate dense 3D point clouds from textured polygonal triangular meshes.',
              'Design an immersive virtual museum gallery layout displaying digitized Egyptian artifacts.'
            ],
            warmUpEn: 'Show an interactive 3D point cloud walkthrough of the tomb of Tutankhamun generated by LiDAR scanning.',
            warmUpAr: 'عرض جولة افتراضية تفاعلية داخل سحابة نقاط ليزرية ثلاثية الأبعاد لمقبرة توت عنخ آمون لإظهار دقة القياسات الرقمية.',
            activitiesEn: 'Students inspect a 3D digital model of an Egyptian architectural capital, measuring dimensions and identifying weathering fractures on its mesh.',
            activitiesAr: 'يتفحص الطلاب نموذجاً رقمياً ثلاثي الأبعاد لتاج عمود مصري قديم ويقيسون أبعاده ويرصدون مواقع الشروخ على السطح.',
            differentiation: {
              support: 'Provide a reference diagram contrasting raster pixels, point clouds, and polygon meshes.',
              advanced: 'Explain the mathematical bundle-adjustment matrix used in Structure-from-Motion (SfM) photogrammetry.'
            },
            formativeAssessmentEn: 'Evaluation of student virtual gallery layouts verifying logical curation flow and viewer ergonomics.',
            formativeAssessmentAr: 'تقييم توزيع مسار الزائر وتنسيق المعروضات في مخطط المعرض الافتراضي ثلاثي الأبعاد.',
            exitTicketQuestion: {
              questionEn: 'What is the primary format of raw 3D data produced by a terrestrial LiDAR scanner before mesh polygonization?',
              questionAr: 'ما هي الصيغة الأساسية الأولية للبيانات ثلاثية الأبعاد التي ينتجها الماسح الليزري الأرضي قبل تحويلها لشبكة مضلعة؟',
              solutionEn: 'A Point Cloud (سحابة نقاط ثلاثية الأبعاد).',
              solutionAr: 'سحابة نقاط (Point Cloud).'
            }
          },
          worksheet: {
            id: 'ws_egbac_fa_m4_l2',
            titleEn: 'Student Studio Worksheet: LiDAR Point Clouds and Digital Museology',
            titleAr: 'ورقة عمل الطالب: سحب النقاط الليزرية وتنسيق المتاحف الرقمية',
            descriptionEn: 'Exercises interpreting point-cloud resolution, triangulation meshes, and virtual exhibition curation.',
            descriptionAr: 'تمارين في تحليل دقة سحب النقاط، وتوليد الشبكات المضلعة، وتصميم قاعات العرض الافتراضي.',
            estimatedTimeMinutes: 45,
            problems: egBacFineArtsCh4SolvedExamples.slice(3, 6)
          },
          interactiveWidget: {
            type: 'fine_arts_architecture_studio',
            titleEn: '3D Heritage LiDAR & Virtual Museum Studio',
            titleAr: 'استوديو المسح الليزري ثلاثي الأبعاد والمتحف الرقمي',
            descriptionEn: 'Interactive 3D model viewer and virtual gallery curator displaying architectural heritage models.',
            descriptionAr: 'أداة تفاعلية لعرض سحب النقاط والنماذج ثلاثية الأبعاد وتنسيق سيناريوهات المتاحف الافتراضية.'
          }
        }
      ],
      solvedExamples: egBacFineArtsCh4SolvedExamples,
      exerciseProblems: egBacFineArtsCh4Exercises,
      databank: egBacFineArtsCh4Databank
    }
  ]
};
