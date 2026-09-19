import type { Branch } from '../types/curriculum';
import { indCh1SolvedExamples, indCh1Exercises } from './textbook/thanaweya/indCh1Textbook';
import { indCh2SolvedExamples, indCh2Exercises } from './textbook/thanaweya/indCh2Textbook';
import { indCh3SolvedExamples, indCh3Exercises } from './textbook/thanaweya/indCh3Textbook';
import { indCh4SolvedExamples, indCh4Exercises } from './textbook/thanaweya/indCh4Textbook';
import { indCh1Databank } from './databanks/thanaweya/indCh1Databank';
import { indCh2Databank } from './databanks/thanaweya/indCh2Databank';
import { indCh3Databank } from './databanks/thanaweya/indCh3Databank';
import { indCh4Databank } from './databanks/thanaweya/indCh4Databank';

export const thanaweyaIndustrialBranch: Branch = {
  id: 'thanaweya_industrial',
  titleEn: 'Industrial Technology & Applied Engineering',
  titleAr: 'التربية الصناعية والتكنولوجيا التطبيقية والهندسية',
  iconName: 'Wrench',
  colorGradient: 'from-amber-700 via-orange-800 to-slate-900',
  categoryEn: 'Applied Engineering & Industrial Technology',
  categoryAr: 'الهندسة التطبيقية والتكنولوجيا الصناعية',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_ind_ch1',
      chapterNumber: 1,
      titleEn: 'Engineering Materials, Metallurgy & Mechanical Properties',
      titleAr: 'خواص واختبارات المواد الهندسية والمعادن وميكانيكا التشكيل',
      descriptionEn: 'Classification of steels and alloys, Hooke\'s law, tensile testing, hardness, and thermal heat treatment.',
      descriptionAr: 'تصنيف الصلب والسبائك، قانون هوك، اختبارات الشد والصلادة، والمعاملات الحرارية للصلب.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_ind_ch1_l1',
          titleEn: 'Engineering Materials & Mechanical Testing Protocols',
          titleAr: 'المواد الهندسية وبروتوكولات الاختبارات الميكانيكية',
          summaryEn: 'Comprehensive study of ferrous alloys, tensile stress-strain curves, Young\'s modulus, and hardness metrics.',
          summaryAr: 'دراسة شاملة لسبائك الحديد، منحنيات الإجهاد والانفعال، معامل يونج، ومقاييس الصلادة الهندسية.',
          theoryContentEn: 'Engineering materials science explores the fundamental relationships between atomic structures, processing routes, and mechanical performance. Standard tensile testing measures yield strength, ultimate tensile strength, and elongation at break according to ASTM E8.',
          theoryContentAr: 'تدرس علوم المواد الهندسية العلاقات الجوهرية بين البنية الذرية، وطرق المعالجة، والأداء الميكانيكي. تقيس اختبارات الشد القياسية إجهاد الخضوع، ومقاومة الشد القصوى، ونسبة الاستطالة وفق معايير ASTM E8.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Industrial Technology',
            bookTitleAr: 'كتاب التربية الصناعية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-IND-G12-CH1',
            pageRange: 'pp. 1-45'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Stress-Strain Analysis and Metallurgy',
            titleAr: 'خطة الدرس: تحليل الإجهاد والانفعال وميتالورجيا المواد',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Derive engineering stress and strain from tensile test data',
              'Differentiate between annealing, quenching, and tempering of steels',
              'Calculate Young\'s modulus and yield strength with 0.2% offset'
            ]
          },
          worksheet: {
            id: 'ws_th_ind_ch1_l1',
            titleEn: 'Worksheet 1: Materials Testing & Heat Treatment',
            titleAr: 'ورقة عمل 1: اختبارات المواد والمعاملات الحرارية',
            descriptionEn: 'Complete all quantitative stress calculations and microstructural phase identifications.',
            descriptionAr: 'أجب عن المسائل الحسابية وتعرف على الأطوار الميتالورجية.',
            estimatedTimeMinutes: 45,
            problems: indCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'ind_materials_testing_lab',
            titleEn: 'Tensile Testing & Stress-Strain Studio',
            titleAr: 'مختبر اختبارات الشد ومنحنى الإجهاد والانفعال',
            descriptionEn: 'Interactive hydraulic tensile tester with Hooke\'s modulus calculator, necking animation, and rupture diagnostics.',
            descriptionAr: 'محاكاة تفاعلية لماكينة اختبار الشد الهيدروليكية مع حساب معامل هوك ومخطط الإجهاد والانفعال.'
          }
        }
      ],
      solvedExamples: indCh1SolvedExamples,
      exerciseProblems: indCh1Exercises,
      databank: indCh1Databank
    },
    {
      id: 'th_ind_ch2',
      chapterNumber: 2,
      titleEn: 'Manufacturing Processes, Machining & Metal Forming Technologies',
      titleAr: 'تكنولوجيا تشغيل وتشكيل المعادن والسباكة واللحام وورش التصنيع',
      descriptionEn: 'Lathe turning kinematics, milling cutters, metal rolling, forging, foundry gating systems, and arc welding metallurgy.',
      descriptionAr: 'كينماتيكا الخراطة والتفريز، درفلة وحدادة المعادن، أنظمة مصبات السباكة، وميتالورجيا اللحام بالقوس.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_ind_ch2_l1',
          titleEn: 'Machining Dynamics & Joining Technologies',
          titleAr: 'ديناميكا تشغيل المعادن وتكنولوجيا الوصل واللحام',
          summaryEn: 'Analysis of cutting speeds, Taylor tool life equation, metal casting solidification, and welding HAZ.',
          summaryAr: 'تحليل سرعات القطع، معادلة تايلور لعمر العدة، تصلب المسبوكات، والمنطقة المتأثرة بحرارة اللحام.',
          theoryContentEn: 'Machining processes involve controlled material removal via shear deformation producing chips. Turning and milling require calculating surface cutting speed and feed rate to balance productivity with Taylor tool life expectations.',
          theoryContentAr: 'تتضمن عمليات التشغيل إزالة الرايش بالقص الميكانيكي المنظم. وتتطلب الخراطة والتفريز حساب سرعة القطع ومعدل التغذية لتحقيق التوازن بين الإنتاجية وعمر أداة القطع.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Industrial Technology',
            bookTitleAr: 'كتاب التربية الصناعية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-IND-G12-CH2',
            pageRange: 'pp. 46-92'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Machining Speed Optimization and Welded Joints',
            titleAr: 'خطة الدرس: تحسين سرعات القطع وتصميم الوصلات الملحومة',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Calculate spindle speed and cutting feed for lathe operations',
              'Apply Chvorinov\'s rule to calculate casting solidification time',
              'Evaluate carbon equivalent and preheat temperatures for weldability'
            ]
          },
          worksheet: {
            id: 'ws_th_ind_ch2_l1',
            titleEn: 'Worksheet 2: Manufacturing & Welding Calculations',
            titleAr: 'ورقة عمل 2: حسابات التصنيع واللحام',
            descriptionEn: 'Solve all cutting parameter equations and foundry gating ratios.',
            descriptionAr: 'احسب بارامترات القطع ونسب مصبات السباكة المعدنية.',
            estimatedTimeMinutes: 45,
            problems: indCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'ind_cnc_machining_lab',
            titleEn: 'Machining Parameters & Toolpath Studio',
            titleAr: 'مختبر بارامترات القطع ومسارات التشغيل',
            descriptionEn: 'Interactive cutting parameters calculator and workpiece profile simulation.',
            descriptionAr: 'حاسبة تفاعلية لسرعات القطع والتغذية ومحاكاة لمسار أداة التشغيل.'
          }
        }
      ],
      solvedExamples: indCh2SolvedExamples,
      exerciseProblems: indCh2Exercises,
      databank: indCh2Databank
    },
    {
      id: 'th_ind_ch3',
      chapterNumber: 3,
      titleEn: 'Electrical Machines, Power Distribution & Industrial Safety',
      titleAr: 'الآلات والتركيبات الكهربية الصناعية وشبكات القوى والأمن الصناعي',
      descriptionEn: 'Three-phase induction motors, power factor correction, transformers, circuit breakers, earthing, and OSHA safety.',
      descriptionAr: 'المحركات الحثية ثلاثية الأوجه، تحسين معامل القدرة، المحولات، القواطع الكهربية، التأريض، ومعايير أوشا.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_ind_ch3_l1',
          titleEn: 'Industrial Power Drives & Occupational Safety',
          titleAr: 'محركات القوى الصناعية والسلامة والصحة المهنية',
          summaryEn: 'Motor torque-slip characteristics, Star-Delta starters, power factor capacitors, and LOTO isolation protocols.',
          summaryAr: 'خصائص العزم والانزلاق للمحركات، بادئات ستار-دلتا، مكثفات القدرة، وإجراءات عزل الطاقة LOTO.',
          theoryContentEn: 'Industrial facilities depend on three-phase AC induction motors for rotating mechanical power. Safe operation requires robust motor control centers, coordinated overcurrent protection, power factor correction, and strict compliance with Lockout/Tagout procedures.',
          theoryContentAr: 'تعتمد المنشآت الصناعية على المحركات الحثية ثلاثية الأوجه لتوليد الحركة الميكانيكية. وتتطلب السلامة وجود مراكز تحكم آمنة، وحماية ضد زيادة التيار، وتحسين معامل القدرة، وتطبيق صارم لإجراءات العزل والتأمين LOTO.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Industrial Technology',
            bookTitleAr: 'كتاب التربية الصناعية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-IND-G12-CH3',
            pageRange: 'pp. 93-140'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Motor Starting Circuits and Electrical Protection',
            titleAr: 'خطة الدرس: دوائر بدء المحركات والحماية الكهربية',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Analyze synchronous speed, slip, and rotor frequency in induction motors',
              'Determine capacitor bank kVAR rating to achieve 0.95 power factor',
              'Explain Lockout/Tagout isolation steps and Arc Flash safety'
            ]
          },
          worksheet: {
            id: 'ws_th_ind_ch3_l1',
            titleEn: 'Worksheet 3: Electrical Drives & Industrial Protection',
            titleAr: 'ورقة عمل 3: محركات القوى والحماية الصناعية',
            descriptionEn: 'Complete all electrical machine circuit equations and safety hazard classifications.',
            descriptionAr: 'أجب عن مسائل الآلات الكهربية وحدد تصنيفات مخاطر بيئة العمل.',
            estimatedTimeMinutes: 45,
            problems: indCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'ind_plc_automation_lab',
            titleEn: 'Motor Control & Automation Studio',
            titleAr: 'مختبر التحكم في المحركات والتشغيل الآلي',
            descriptionEn: 'Interactive motor starter circuit with relay logic, contactor seals, and overload trip simulation.',
            descriptionAr: 'محاكاة تفاعلية لدوائر تشغيل المحركات مع الكونتاكتور والمرحل الحراري والتعشيق.'
          }
        }
      ],
      solvedExamples: indCh3SolvedExamples,
      exerciseProblems: indCh3Exercises,
      databank: indCh3Databank
    },
    {
      id: 'th_ind_ch4',
      chapterNumber: 4,
      titleEn: 'Industrial Electronics, Sensors & Applied Control Circuits',
      titleAr: 'الإلكترونيات الصناعية ودوائر التحكم والحساسات والمحولات',
      descriptionEn: 'Thyristors, TRIACs, IGBT inverters, proximity sensors, RTD probes, 4-20 mA current loops, and signal conditioning.',
      descriptionAr: 'الثايرستور والترياك ومغيرات IGBT، حساسات التقارب، مجسات RTD، حلقات التيار 4-20 مللي أمبير، ومكبرات العمليات.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_ind_ch4_l1',
          titleEn: 'Sensors, Power Electronics & Industrial Instrumentation',
          titleAr: 'الحساسات وإلكترونيات القوى وأجهزة القياس الصناعية',
          summaryEn: 'Operating principles of solid-state power switches, inductive sensors, temperature transmitters, and 4-20 mA current loops.',
          summaryAr: 'مبادئ تشغيل مفاتيح القوى الصلبة، حساسات التقارب، محولات الحرارة، وحلقات الإشارة التناظرية 4-20 مللي أمبير.',
          theoryContentEn: 'Industrial automation links physical plant processes to digital processors through electronic sensors and power electronics. Solid-state switches like SCRs and IGBTs regulate high-current motor loads, while 4-20 mA current loops provide noise-immune analog feedback.',
          theoryContentAr: 'يربط التحكم الآلي العمليات الفيزيائية بالمعالجات الرقمية عبر الحساسات وإلكترونيات القوى. وتتحكم عناصر مثل الثايرستور وIGBT في أحمال المحركات الثقيلة، بينما توفر حلقات 4-20 مللي أمبير نقلاً دقيقاً للإشارات محصناً ضد الضوضاء.',
          moeRef: {
            bookTitleEn: 'Official General Secondary Industrial Technology',
            bookTitleAr: 'كتاب التربية الصناعية الرسمي للثانوية العامة',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-IND-G12-CH4',
            pageRange: 'pp. 141-188'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Industrial Sensors and Current Loop Transmitters',
            titleAr: 'خطة الدرس: الحساسات الصناعية ومحولات الإشارة الحلقية',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Differentiate between inductive, capacitive, and optical proximity sensors',
              'Calculate process values from 4-20 mA transmitter current readings',
              'Analyze VFD variable frequency motor speed control principles'
            ]
          },
          worksheet: {
            id: 'ws_th_ind_ch4_l1',
            titleEn: 'Worksheet 4: Sensors & Power Electronics',
            titleAr: 'ورقة عمل 4: الحساسات وإلكترونيات القوى',
            descriptionEn: 'Solve all instrumentation circuit problems and sensor selection matrices.',
            descriptionAr: 'أجب عن مسائل دوائر القياس ومصفوفات اختيار الحساسات المناسبة.',
            estimatedTimeMinutes: 45,
            problems: indCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'industrial_engineering_studio',
            titleEn: 'Industrial Technology Master Studio',
            titleAr: 'الاستوديو الشامل للتكنولوجيا الصناعية والهندسية',
            descriptionEn: 'Full 5-station engineering studio integrating materials testing, PLC logic, fluid power, CNC G-code, and quality SPC.',
            descriptionAr: 'استوديو هندسي متكامل بخمس محطات يغطي اختبارات المواد، الـ PLC، الهيدروليك، الـ CNC، والتحكم الإحصائي بالجودة.'
          }
        }
      ],
      solvedExamples: indCh4SolvedExamples,
      exerciseProblems: indCh4Exercises,
      databank: indCh4Databank
    }
  ]
};
