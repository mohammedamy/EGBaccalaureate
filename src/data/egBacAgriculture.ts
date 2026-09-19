import type { Branch } from '../types/curriculum';
import { egBacAgriCh1SolvedExamples, egBacAgriCh1Exercises } from './textbook/egbac/egBacAgriCh1Textbook';
import { egBacAgriCh2SolvedExamples, egBacAgriCh2Exercises } from './textbook/egbac/egBacAgriCh2Textbook';
import { egBacAgriCh3SolvedExamples, egBacAgriCh3Exercises } from './textbook/egbac/egBacAgriCh3Textbook';
import { egBacAgriCh4SolvedExamples, egBacAgriCh4Exercises } from './textbook/egbac/egBacAgriCh4Textbook';
import { egBacAgriCh1Databank } from './databanks/egbac/egBacAgriCh1Databank';
import { egBacAgriCh2Databank } from './databanks/egbac/egBacAgriCh2Databank';
import { egBacAgriCh3Databank } from './databanks/egbac/egBacAgriCh3Databank';
import { egBacAgriCh4Databank } from './databanks/egbac/egBacAgriCh4Databank';

export const egBacAgricultureBranch: Branch = {
  id: 'egbac_agriculture',
  titleEn: 'Applied Agricultural Engineering & Agrosystems',
  titleAr: 'الهندسة الزراعية التطبيقية والنظم الزراعية المتقدمة',
  iconName: 'Sprout',
  colorGradient: 'from-emerald-800 via-green-700 to-lime-800',
  categoryEn: 'New Egyptian Baccalaureate curriculum for Applied Agriscience: High-tech hydroponics/vertical farming, desert reclamation megaprojects (Toshka, New Delta), agricultural biotechnology/CRISPR, and sustainable animal/aquaculture production.',
  categoryAr: 'منهج البكالوريا المصرية الحديثة للهندسة الزراعية التطبيقية: تكنولوجيا الزراعة المائية والمحمية والرأسية، استصلاح الأراضي بالمشروعات القومية (توشكى والدلتا الجديدة)، التكنولوجيا الحيوية والتحوير الوراثي، والإنتاج الحيواني والاستزراع السمكي.',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_agri_ch1',
      titleEn: 'Controlled-Environment Agriculture, Hydroponics & Vertical Farming',
      titleAr: 'الزراعة المحمية والزراعة المائية والرأسية وتكنولوجيا البيوت الزجاجية',
      descriptionEn: 'Greenhouse microclimates, soilless culture (NFT, DWC, Aeroponics), substrate chemistry, fertigation monitoring, and LED photobiology.',
      descriptionAr: 'التحكم في المناخ الداخلي للصوب، نظم الزراعة بدون تربة (NFT، DWC، الزراعة الهوائية)، كيمياء البيئات الزراعية، ومراقبة المحاليل المغذية وإضاءة LED.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_agri_ch1_l1',
          titleEn: 'Lesson 1: Advanced Hydroponic Systems (NFT/DWC), Fertigation EC/pH, and LED Photobiology',
          titleAr: 'الدرس الأول: نظم الزراعة المائية المتقدمة، كيمياء التغذية، والبيولوجيا الضوئية',
          summaryEn: 'Closed-loop NFT/DWC hydroponic engineering, EC/TDS osmotic balance, wet-pad cooling thermodynamic efficiency, and PAR spectrum tuning.',
          summaryAr: 'هندسة الزراعة المائية المغلقة، التوازن الأسموزي للمحاليل المغذية، الديناميكا الحرارية للتبريد التبخيري، وضبط أطياف إضاءة LED.',
          estimatedMinutes: 60,
          theoryContentEn: `# Controlled-Environment Agriculture & Hydroponics
## الزراعة المحمية وتكنولوجيا الزراعة بدون تربة

### 1. Hydroponic Systems (نظم الزراعة المائية)
- **NFT (تقنية الفيلم المغذي)**: 1-2 mm continuous nutrient stream in channels sloped 1:30 to 1:40.
- **DWC (الطفو المائي العميق)**: Floating rafts on aerated reservoirs keeping Dissolved Oxygen $> 6\\text{ mg/L}$.
- **Solution EC & TDS**: $\\text{TDS (ppm)} \\approx \\text{EC (dS/m)} \\times 640$, governing root zone osmotic pressure ($\\pi \\approx 0.36 \\times \\text{EC}\\text{ bar}$).

### 2. Greenhouse Physics & LED Photobiology (فيزياء الصوب وإضاءة LED)
- **Wet-Pad Cooling Efficiency**: $\\eta = (T_{db,in} - T_{db,out}) / (T_{db,in} - T_{wb,in})$, dropping when ambient RH $>65\\%$.
- **LED Tuning**: Combining Red (660 nm) and Blue (450 nm) maximizes photosynthetic quantum efficiency.`,
          moeRef: {
            bookTitleEn: 'New Egyptian Baccalaureate Applied Agriscience Grade 12',
            bookTitleAr: 'كتاب البكالوريا المصرية للعلوم الزراعية التطبيقية والنظم المتقدمة',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-AGRI-MOE-2025',
            pageRange: 'pp. 10-48'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: High-Tech Hydroponic Design and Photobiology',
            titleAr: 'الخطة التدريسية: تصميم نظم الزراعة المائية المغلقة والبيولوجيا الضوئية',
            objectives: [
              'Design a recirculating Nutrient Film Technique (NFT) channel system with optimal slope and flow.',
              'Calculate nutrient solution osmotic pressure and TDS from electrical conductivity (EC).',
              'Evaluate the thermodynamic cooling limit of evaporative pad-and-fan greenhouse systems.'
            ],
            warmUpEn: 'Measure electrical conductivity (EC) and pH of varying hydroponic nutrient formulations.',
            warmUpAr: 'قياس التوصيل الكهربائي (EC) ودرجة pH لمحاليل هيدروبونيك مغذية بتركيزات مختلفة.',
            activitiesEn: 'Students simulate NFT flow rates and CO2 enrichment responses in the Agricultural Technology Studio.',
            activitiesAr: 'يقوم الطلاب بمحاكاة معدلات تدفق محاليل NFT واستجابة النبات لرفع CO2 بالاستوديو.',
            differentiation: {
              support: 'Provide step-by-step conversion charts between EC in dS/m and TDS in ppm.',
              advanced: 'Calculate required PPFD and Daily Light Integral (DLI in mol/m2/day) for indoor vertical lettuce.'
            },
            formativeAssessmentEn: 'Four-question diagnostic exit ticket on EC osmotic stress and NFT slope parameters.',
            formativeAssessmentAr: 'بطاقة خروج تقويمية حول الضغط الأسموزي للمحلول المغذي وزاوية انحدار قنوات NFT.',
            exitTicketQuestion: {
              questionEn: 'What is the consequence of an excessively high nutrient solution EC on plant root physiology?',
              questionAr: 'ما الأثر الفسيولوجي المباشر لارتفاع التوصيل الكهربائي (EC) المفرط للمحلول المغذي على جذور النبات؟',
              solutionEn: 'Elevated osmotic pressure inducing physiological drought and blossom-end rot (إجهاد أسموزي وجفاف فسيولوجي).',
              solutionAr: 'ارتفاع الضغط الأسموزي مسبباً جفافاً فسيولوجياً وعفن الطرف الزهري لعرقلة امتصاص الماء والكالسيوم.'
            }
          },
          worksheet: {
            id: 'ws_egbac_agri_ch1_l1',
            titleEn: 'Student Studio Worksheet: Hydroponics & Controlled Environments',
            titleAr: 'ورقة عمل الطالب: الزراعة المائية والبيئات المحمية',
            descriptionEn: 'Exercises on hydroponic channel design, EC/TDS calculations, and greenhouse cooling.',
            descriptionAr: 'تدريبات على تصميم قنوات الهيدروبونيك وحسابات EC وفاعلية التبريد بالصوب.',
            estimatedTimeMinutes: 45,
            problems: egBacAgriCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'agricultural_technology_studio',
            titleEn: 'Hydroponics & Greenhouse Climate Studio',
            titleAr: 'استوديو الزراعة المائية والتحكم في مناخ الصوب',
            descriptionEn: 'Interactive NFT/DWC simulator, PAR LED spectrum mixer, and CO2 enrichment curve analyzer.',
            descriptionAr: 'محاكي تفاعلي لنظم الهيدروبونيك وضبط أطياف إضاءة LED وديناميكا غاز ثاني أكسيد الكربون.'
          }
        }
      ],
      solvedExamples: egBacAgriCh1SolvedExamples,
      exerciseProblems: egBacAgriCh1Exercises,
      databank: egBacAgriCh1Databank
    },
    {
      id: 'egbac_agri_ch2',
      titleEn: 'Desert Land Reclamation & Egyptian National Mega-Projects',
      titleAr: 'استصلاح الأراضي الصحراوية والمشروعات القومية الزراعية الكبرى',
      descriptionEn: 'Toshka Spillway, New Delta Project, East Oweinat, calcareous soil amelioration, center-pivot fertigation, and water-recycling treatment megaprojects.',
      descriptionAr: 'مشروع توشكى الخير وجنوب الوادي، مشروع الدلتا الجديدة ومستقبل مصر، شرق العوينات، استصلاح الأراضي الجيرية والرملية، ومعالجة وإعادة تدوير مياه الصرف الزراعي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_agri_ch2_l1',
          titleEn: 'Lesson 1: Desert Land Reclamation Engineering: Toshka, New Delta, and Fossil Groundwater',
          titleAr: 'الدرس الأول: هندسة استصلاح الصحراء: توشكى، الدلتا الجديدة، والمياه الجوفية',
          summaryEn: 'National reclamation mega-projects, Sheikh Zayed canal hydraulics, New Delta tertiary wastewater treatment, East Oweinat organic production, and biochar amelioration.',
          summaryAr: 'المشروعات القومية الكبرى، قناة الشيخ زايد بتوشكى، محطة المعالجة الثلاثية بالدلتا الجديدة، الزراعة العضوية بشرق العوينات، وتطبيقات الفحم الحيوي.',
          estimatedMinutes: 60,
          theoryContentEn: `# Desert Reclamation & National Mega-Projects
## استصلاح الأراضي الصحراوية والمشروعات القومية

### 1. Egyptian National Megaprojects (المشروعات القومية الكبرى)
- **Toshka (توشكى الخير)**: Diverts Lake Nasser floodwaters via Sheikh Zayed canal, reclaiming 500,000+ feddans for wheat and date palms.
- **New Delta & Future of Egypt (الدلتا الجديدة ومستقبل مصر)**: 2.2 million feddans along Dabaa Axis, supplied by New Delta treatment plant ($7.5\\text{ million m}^3/\\text{day}$).
- **East Oweinat (شرق العوينات)**: Center-pivot irrigation tapping the deep Nubian Sandstone Aquifer, producing export organic wheat and seed potatoes.

### 2. Arid Soil Amelioration (تحسين الأراضي الجيرية والرملية)
- **Biochar Incorporation**: Elevates soil specific surface area and moisture retention by 25%.
- **Deep Subsoiling**: Shatters calcareous hardpan layers (caliche) to permit taproot elongation.`,
          moeRef: {
            bookTitleEn: 'New Egyptian Baccalaureate Applied Agriscience Grade 12',
            bookTitleAr: 'كتاب البكالوريا المصرية للعلوم الزراعية التطبيقية والنظم المتقدمة',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-AGRI-MOE-2025',
            pageRange: 'pp. 49-92'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Mega-Project Engineering and Arid Soil Remediation',
            titleAr: 'الخطة التدريسية: هندسة المشروعات القومية واستصلاح الأراضي القاحلة',
            objectives: [
              'Analyze the water conveyance and treatment systems of the New Delta and Toshka projects.',
              'Evaluate the sustainability of groundwater abstraction from the Nubian Sandstone Aquifer.',
              'Formulate soil amelioration plans for calcareous and sandy desert lands using biochar.'
            ],
            warmUpEn: 'Review satellite imagery and topographic elevation profiles along the Dabaa Axis and Toshka depressions.',
            warmUpAr: 'تحليل الصور الفضائية وخرائط المناسيب الطبوغرافية لمحور الضبعة ومنخفضات توشكى.',
            activitiesEn: 'Students explore water budget balances and crop rotations for the New Delta in the studio.',
            activitiesAr: 'يقوم الطلاب باستكشاف الميزان المائي واختيار التراكيب المحصولية للدلتا الجديدة بالاستوديو.',
            differentiation: {
              support: 'Provide annotated geographic maps locating Toshka, New Delta, East Oweinat, and West Minya.',
              advanced: 'Calculate tertiary water treatment operational kinetics for BOD removal and chlorine dosing.'
            },
            formativeAssessmentEn: 'Exit ticket on water recycling capacity and desert soil amendment mechanisms.',
            formativeAssessmentAr: 'بطاقة خروج تقويمية حول طاقة معالجة مياه الصرف وميكانيكية تحسين الأراضي الرملية.',
            exitTicketQuestion: {
              questionEn: 'What is the daily design capacity of the world-record New Delta wastewater treatment plant?',
              questionAr: 'ما الطاقة الاستيعابية اليومية لمحطة معالجة مياه الدلتا الجديدة الحائزة على أرقام قياسية عالمية؟',
              solutionEn: '7.5 million cubic meters per day (٧.٥ مليون متر مكعب يومياً).',
              solutionAr: '٧.٥ مليون متر مكعب في اليوم.'
            }
          },
          worksheet: {
            id: 'ws_egbac_agri_ch2_l1',
            titleEn: 'Student Studio Worksheet: Desert Reclamation & Mega-Projects',
            titleAr: 'ورقة عمل الطالب: استصلاح الصحراء والمشروعات القومية',
            descriptionEn: 'Exercises on project hydrology, water treatment capacity, and soil remediation.',
            descriptionAr: 'تدريبات على هيدرولوجيا المشروعات القومية وطاقات المعالجة وتحسين الأراضي الجيرية.',
            estimatedTimeMinutes: 45,
            problems: egBacAgriCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'agricultural_technology_studio',
            titleEn: 'Egyptian National Mega-Projects GIS Explorer',
            titleAr: 'مستكشف المشروعات القومية الزراعية التفاعلي',
            descriptionEn: 'Interactive satellite map of Toshka, New Delta, and East Oweinat with water balance analytics.',
            descriptionAr: 'خريطة تفاعلية مدعومة بالبيانات الجغرافية لمشروعات توشكى والدلتا الجديدة وشرق العوينات.'
          }
        }
      ],
      solvedExamples: egBacAgriCh2SolvedExamples,
      exerciseProblems: egBacAgriCh2Exercises,
      databank: egBacAgriCh2Databank
    },
    {
      id: 'egbac_agri_ch3',
      titleEn: 'Agricultural Biotechnology, Genetic Engineering & Tissue Culture',
      titleAr: 'التكنولوجيا الحيوية الزراعية وزراعة الأنسجة والتحوير الوراثي',
      descriptionEn: 'In-vitro micropropagation, MS media hormonal balance, Agrobacterium Ti plasmids, Bt insecticidal delta-endotoxins, and CRISPR-Cas9 crop gene editing.',
      descriptionAr: 'الإكثار الدقيق في زراعة الأنسجة، التوازن الهرموني لبيئة MS، التحول الوراثي ببكتيريا الأجروباكتيريوم، جينات Bt المقاومة للحشرات، وتطبيقات كريسبر في المحاصيل.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_agri_ch3_l1',
          titleEn: 'Lesson 1: In-Vitro Clonal Micropropagation, Ti Plasmids, Bt Crops, and CRISPR-Cas9',
          titleAr: 'الدرس الأول: الإكثار الدقيق للأنسجة، نواقل بلازميد Ti، محاصيل Bt، وكريسبر',
          summaryEn: 'Cellular totipotency, auxin/cytokinin organogenesis, Agrobacterium transformation vectors, Bt crystalline Cry endotoxins, and CRISPR precision breeding.',
          summaryAr: 'القدرة الذاتية للخلايا النباتية، التمايز الهرموني، التحوير بنواقل الأجروباكتيريوم، سموم Bt البلورية، والتحرير الجيني الدقيق بكريسبر.',
          estimatedMinutes: 60,
          theoryContentEn: `# Agricultural Biotechnology & Genetic Engineering
## التكنولوجيا الحيوية الزراعية والهندسة الوراثية

### 1. Plant Tissue Culture & Totipotency (زراعة الأنسجة والقدرة الذاتية)
- **Totipotency**: Every living nucleated plant cell can regenerate an entire fertile plant.
- **Hormonal Balance**: High Auxin/Cytokinin stimulates rooting; high Cytokinin/Auxin stimulates shoots; equal ratios maintain callus.
- **Meristem Culture**: Shoot-tip culture yields 100% virus-free certified seed potatoes and date palm offshoots.

### 2. Genetic Engineering & Genome Editing (التحوير الوراثي وتحرير الجينوم)
- **Agrobacterium Ti-Plasmid**: Binary vector transfers desired genes flanked by T-DNA borders into plant chromosomes.
- **Bt Crops**: Express crystalline Cry delta-endotoxin genes causing midgut pore formation in lepidopteran pests.
- **CRISPR-Cas9**: Guided double-strand breaks for targeted knockout of disease susceptibility genes (e.g. TaMLO in wheat).`,
          moeRef: {
            bookTitleEn: 'New Egyptian Baccalaureate Applied Agriscience Grade 12',
            bookTitleAr: 'كتاب البكالوريا المصرية للعلوم الزراعية التطبيقية والنظم المتقدمة',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-AGRI-MOE-2025',
            pageRange: 'pp. 93-138'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Biotechnology Vectors and Genome Editing in Agriculture',
            titleAr: 'الخطة التدريسية: نواقل التكنولوجيا الحيوية والتحرير الجيني في المحاصيل',
            objectives: [
              'Formulate MS medium hormonal combinations to induce shoot vs root organogenesis.',
              'Explain the molecular mechanism of Agrobacterium tumefaciens T-DNA chromosomal integration.',
              'Contrast traditional transgenic Bt technology with CRISPR-Cas9 targeted non-transgenic gene knockout.'
            ],
            warmUpEn: 'Review somatic embryogenesis stages in date palm cultures under sterile laminar flow hoods.',
            warmUpAr: 'مراجعة مراحل التخلق الجنيني الجسدي لنخيل البلح تحت كبائن الأمان المعقمة.',
            activitiesEn: 'Students model T-DNA binary vector construction and CRISPR guide RNA targeting in the studio.',
            activitiesAr: 'يقوم الطلاب بنمذجة بناء النواقل الثنائية وتصميم RNA الموجه لكريسبر بالاستوديو.',
            differentiation: {
              support: 'Provide diagrams showing auxin and cytokinin concentration gradients on organ formation.',
              advanced: 'Evaluate biosafety regulatory frameworks for genome-edited crops under international protocols.'
            },
            formativeAssessmentEn: 'Exit ticket on hormonal organogenesis ratios and Bt Cry toxin binding specificity.',
            formativeAssessmentAr: 'بطاقة خروج تقويمية حول التوازن الهرموني للتمايز وتخصص سموم Bt الحشرية.',
            exitTicketQuestion: {
              questionEn: 'Which hormonal ratio in MS tissue culture medium induces adventitious root formation (rhizogenesis)?',
              questionAr: 'ما التوازن الهرموني في بيئة زراعة الأنسجة الذي يحث تكوين الجذور العرضية (Rhizogenesis)؟',
              solutionEn: 'High Auxin to Cytokinin ratio (تفوق نسبة الأوكسين على السيتوكينين).',
              solutionAr: 'ارتفاع نسبة الأوكسين مقارنة بنسبة السيتوكينين.'
            }
          },
          worksheet: {
            id: 'ws_egbac_agri_ch3_l1',
            titleEn: 'Student Studio Worksheet: Agricultural Biotechnology',
            titleAr: 'ورقة عمل الطالب: التكنولوجيا الحيوية الزراعية',
            descriptionEn: 'Exercises on tissue culture hormonal ratios, Ti vectors, and CRISPR crop applications.',
            descriptionAr: 'تدريبات على هرمونات زراعة الأنسجة، ونواقل الأجروباكتيريوم، وتحرير الجينوم بكريسبر.',
            estimatedTimeMinutes: 45,
            problems: egBacAgriCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'agricultural_technology_studio',
            titleEn: 'Plant Tissue Culture & Gene Editing Simulator',
            titleAr: 'محاكي زراعة الأنسجة النباتية والتحرير الجيني',
            descriptionEn: 'Interactive auxin/cytokinin organogenesis workbench and CRISPR Cas9 gRNA design lab.',
            descriptionAr: 'محاكي تفاعلي لتوازن هرمونات الأنسجة وتصميم التحرير الجيني بكريسبر.'
          }
        }
      ],
      solvedExamples: egBacAgriCh3SolvedExamples,
      exerciseProblems: egBacAgriCh3Exercises,
      databank: egBacAgriCh3Databank
    },
    {
      id: 'egbac_agri_ch4',
      titleEn: 'Animal Production, Aquaculture & Sustainable Agribusiness',
      titleAr: 'الإنتاج الحيواني والاستزراع السمكي والاقتصاد الزراعي المستدام',
      descriptionEn: 'Ruminant VFA nutrition, FCR metrics, dairy/beef cattle herd health, Recirculating Aquaculture Systems (RAS), and agribusiness value chains.',
      descriptionAr: 'تغذية المجترات والأحماض الدهنية الطيارة، معدل التحويل الغذائي (FCR)، مزارع الأسماك المغلقة (RAS)، وسلاسل القيمة للتصدير الزراعي والشهادات الدولية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_agri_ch4_l1',
          titleEn: 'Lesson 1: Ruminant Digestion & VFAs, Tilapia Aquaculture, RAS, and Export Standards',
          titleAr: 'الدرس الأول: هضم المجترات والأحماض الدهنية، استزراع البلطي، نظم RAS، والتصدير',
          summaryEn: 'Rumen fermentation energetics, acetate/propionate milk ratios, tilapia mono-sex fingerlings, recirculating aquaculture nitrification, and GLOBALG.A.P export logistics.',
          summaryAr: 'تخمر الكرش والأحماض الدهنية الطيارة، زريعة البلطي وحيدة الجنس، نترجة نظم الاستزراع المغلقة RAS، والاشتراطات التصديرية العالمية.',
          estimatedMinutes: 60,
          theoryContentEn: `# Animal Production, Aquaculture & Agribusiness
## الإنتاج الحيواني والاستزراع السمكي وسلاسل الإمداد

### 1. Ruminant Nutrition & Herd Health (تغذية المجترات وإنتاج الألبان)
- **Rumen VFAs**: Acetate, Propionate, Butyrate provide $>70\\%$ of metabolizable energy.
- **Feed Conversion Ratio (FCR)**: $\\text{FCR} = \\text{Feed Intake (kg)} / \\text{Weight Gain (kg)}$; lower is superior.
- **Egyptian Buffalo**: Superior heat tolerance and higher milk fat content (7.0-8.5%) than exotic Holsteins.

### 2. Aquaculture Systems & Export Chains (الاستزراع السمكي والتصدير)
- **Nile Tilapia Production**: Egypt ranks 1st in Africa and 6th globally, relying on all-male mono-sex fry.
- **Recirculating Aquaculture Systems (RAS)**: Drum filtration and biofilters convert toxic NH3 to NO3-, recycling 95% of water.
- **Agricultural Exporting**: Egypt leads the world in fresh Valencia orange exports, complying with GLOBALG.A.P and MRL limits.`,
          moeRef: {
            bookTitleEn: 'New Egyptian Baccalaureate Applied Agriscience Grade 12',
            bookTitleAr: 'كتاب البكالوريا المصرية للعلوم الزراعية التطبيقية والنظم المتقدمة',
            grade: '12',
            term: 'Full Year',
            officialCode: 'EGBAC-AGRI-MOE-2025',
            pageRange: 'pp. 139-180'
          },
          lessonPlan: {
            titleEn: 'Teacher Instructional Plan: Animal Nutrition, Closed-Loop Aquaculture, and Export Logistics',
            titleAr: 'الخطة التدريسية: تغذية الحيوان، الاستزراع السمكي المغلق، واللوجستيات التصديرية',
            objectives: [
              'Calculate Feed Conversion Ratio (FCR) and evaluate total mixed rations (TMR) for cattle.',
              'Design biofilter nitrification stages in Recirculating Aquaculture Systems (RAS).',
              'Explain export traceability protocols and phytosanitary Maximum Residue Limits (MRLs).'
            ],
            warmUpEn: 'Review water quality parameters (ammonia, nitrite, nitrate, dissolved oxygen) in an intensive fish tank.',
            warmUpAr: 'فحص مؤشرات جودة المياه (الأمونيا، النيتريت، النترات، والأكسجين الذائب) في حوض استزراع مكثف.',
            activitiesEn: 'Students calculate FCR economics and nitrogen filter dimensions in the studio.',
            activitiesAr: 'يقوم الطلاب بحساب اقتصاديات التحويل الغذائي وأبعاد الفلتر الحيوي بالاستوديو.',
            differentiation: {
              support: 'Provide diagrams tracing nitrogen transformation: Ammonium -> Nitrite -> Nitrate.',
              advanced: 'Calculate carbon footprint offsets and cold chain energy requirements for fresh citrus exports.'
            },
            formativeAssessmentEn: 'Exit ticket on volatile fatty acid functions and RAS biofiltration mechanics.',
            formativeAssessmentAr: 'بطاقة خروج تقويمية حول وظائف الأحماض الدهنية الطيارة وميكانيكية الفلترة البيولوجية.',
            exitTicketQuestion: {
              questionEn: 'Which volatile fatty acid produced in the rumen directly fuels milk butterfat synthesis?',
              questionAr: 'أي الأحماض الدهنية الطيارة الناتجة في الكرش يدخل مباشرة في تخليق دهن الحليب؟',
              solutionEn: 'Acetic Acid / Acetate (حمض الأسيتيك أو الخليك).',
              solutionAr: 'حمض الخليك (الأسيتات).'
            }
          },
          worksheet: {
            id: 'ws_egbac_agri_ch4_l1',
            titleEn: 'Student Studio Worksheet: Animal Science & Aquaculture',
            titleAr: 'ورقة عمل الطالب: الإنتاج الحيواني والاستزراع السمكي',
            descriptionEn: 'Exercises on ruminant VFAs, aquaculture biofiltration, and export compliance.',
            descriptionAr: 'تدريبات على هضم المجترات ونظم الفلترة السمكية واشتراطات الجودة التصديرية.',
            estimatedTimeMinutes: 45,
            problems: egBacAgriCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'agricultural_technology_studio',
            titleEn: 'Aquaculture & Livestock Agribusiness Studio',
            titleAr: 'استوديو الاستزراع السمكي والإنتاج الحيواني وسلاسل القيمة',
            descriptionEn: 'Interactive FCR calculator, RAS nitrification biofilter designer, and export logistics simulator.',
            descriptionAr: 'محاكي تفاعلي لمعدل التحويل الغذائي وتصميم فلاتر الاستزراع السمكي وسلاسل التصدير.'
          }
        }
      ],
      solvedExamples: egBacAgriCh4SolvedExamples,
      exerciseProblems: egBacAgriCh4Exercises,
      databank: egBacAgriCh4Databank
    }
  ]
};
