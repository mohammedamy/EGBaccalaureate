import type { Branch } from '../types/curriculum';
import { egBacIndCh1SolvedExamples, egBacIndCh1Exercises } from './textbook/egbac/egBacIndCh1Textbook';
import { egBacIndCh2SolvedExamples, egBacIndCh2Exercises } from './textbook/egbac/egBacIndCh2Textbook';
import { egBacIndCh3SolvedExamples, egBacIndCh3Exercises } from './textbook/egbac/egBacIndCh3Textbook';
import { egBacIndCh4SolvedExamples, egBacIndCh4Exercises } from './textbook/egbac/egBacIndCh4Textbook';
import { egBacIndCh1Databank } from './databanks/egbac/egBacIndCh1Databank';
import { egBacIndCh2Databank } from './databanks/egbac/egBacIndCh2Databank';
import { egBacIndCh3Databank } from './databanks/egbac/egBacIndCh3Databank';
import { egBacIndCh4Databank } from './databanks/egbac/egBacIndCh4Databank';

export const egBacIndustrialBranch: Branch = {
  id: 'egbac_industrial',
  titleEn: 'Advanced Applied Engineering & Industrial Systems',
  titleAr: 'الأنظمة الهندسية المتقدمة والتكنولوجيا الصناعية',
  iconName: 'Wrench',
  colorGradient: 'from-amber-600 via-orange-700 to-slate-950',
  categoryEn: 'Applied Engineering & Industrial Technology',
  categoryAr: 'الهندسة التطبيقية والتكنولوجيا الصناعية',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_ind_ch1',
      chapterNumber: 1,
      titleEn: 'Computer Numerical Control (CNC), CAD/CAM & Additive Manufacturing',
      titleAr: 'التصنيع الرقمي CNC وأنظمة التصميم والنمذجة ثلاثية الأبعاد CAD/CAM',
      descriptionEn: 'Cartesian machine datums, G-code canned cycles, CAM adaptive clearing, and additive manufacturing (FDM, SLA, SLS).',
      descriptionAr: 'نقاط إسناد الماكينات، دورات البرمجة الجاهزة، التفريغ التكيفي CAM، والطباعة ثلاثية الأبعاد.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_ind_ch1_l1',
          titleEn: 'Digital Fabrication & Multi-Axis CNC Machining',
          titleAr: 'التصنيع الرقمي وماكينات CNC متعددة المحاور',
          summaryEn: 'Comprehensive mastery of G-code programming, cutter radius compensation, and additive manufacturing slice optimization.',
          summaryAr: 'إتقان متقدم لبرمجة ماكينات التحكم الرقمي، تعويض نصف قطر العدة، وهندسة التصنيع بالإضافة.',
          theoryContentEn: 'Advanced manufacturing synthesizes digital product design with automated multi-axis subtractive and additive fabrication. Precision machining utilizes ISO G-code routines with cutter offset compensation, while 3D printing applies layer slicing algorithms and topology optimization.',
          theoryContentAr: 'يدمج التصنيع المتقدم بين التصميم الرقمي للمنتجات والتصنيع الآلي ثلاثي وخماسي المحاور. ويعتمد التشغيل عالي الدقة على أكواد ISO G-code مع تعويض نصف قطر العدة، بينما تعتمد الطباعة ثلاثية الأبعاد على تقطيع الطبقات وتحسين الطوبولوجيا.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Applied Engineering',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الهندسة التطبيقية',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-IND-G12-M1',
            pageRange: 'pp. 1-52'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: G-Code Programming and Toolpath Synthesis',
            titleAr: 'خطة الدرس: برمجة أكواد G-Code وتوليد مسارات التشغيل',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Write manual NC programs using G01, G02, G03, and canned cycles',
              'Calculate spindle speed and feed rate for titanium and aluminum alloys',
              'Evaluate FDM, SLA, and SLS additive manufacturing process constraints'
            ]
          },
          worksheet: {
            id: 'ws_egbac_ind_ch1_l1',
            titleEn: 'Worksheet 1: CNC Programming & 3D Slicing',
            titleAr: 'ورقة عمل 1: برمجة CNC وتقطيع النماذج ثلاثية الأبعاد',
            descriptionEn: 'Generate toolpath coordinates and verify cutter radius compensation vectors.',
            descriptionAr: 'اكتب إحداثيات مسار أداة القطع وتحقق من متجهات تعويض نصف القطر.',
            estimatedTimeMinutes: 45,
            problems: egBacIndCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'ind_cnc_machining_lab',
            titleEn: 'CNC Toolpath & G-Code Simulation Lab',
            titleAr: 'مختبر مسارات التشغيل ومحاكاة أكواد G-Code',
            descriptionEn: 'Interactive 2D/3D toolpath plotter with G-code syntax interpreter and cutting speed calculators.',
            descriptionAr: 'محاكاة تفاعلية لمسار أداة القطع مع مترجم لأكواد G-Code وحساب سرعات التشغيل.'
          }
        }
      ],
      solvedExamples: egBacIndCh1SolvedExamples,
      exerciseProblems: egBacIndCh1Exercises,
      databank: egBacIndCh1Databank
    },
    {
      id: 'egbac_ind_ch2',
      chapterNumber: 2,
      titleEn: 'Industrial Automation, Programmable Logic Controllers (PLC) & SCADA',
      titleAr: 'أنظمة التحكم الآلي المبرمج PLC والروبوتات الصناعية وأنظمة السكادا',
      descriptionEn: 'PLC scan cycles, ladder diagram logic, timers, counters, Modbus/Profinet communication, and SCADA HMI telemetry.',
      descriptionAr: 'دورة مسح الـ PLC، مخطط السلم، المؤقتات والعدادات، شبكات مودباص وبروفينت، وشاشات السكادا HMI.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_ind_ch2_l1',
          titleEn: 'Programmable Logic Controllers & Factory Automation',
          titleAr: 'المتحكمات المنطقية المبرمجة والأتمتة الصناعية',
          summaryEn: 'Systematic study of PLC hardware architectures, ladder diagram programming, industrial Fieldbuses, and SCADA data servers.',
          summaryAr: 'دراسة نظامية لبنية أجهزة الـ PLC، برمجة المخطط السلمي، شبكات الحقل الصناعية، وخوادم السكادا.',
          theoryContentEn: 'Programmable Logic Controllers form the central nervous system of automated manufacturing plants. Robust automation demands solid grounding in scan cycle timing, memory bit mapping, deterministic Fieldbus networking (Profinet, Modbus TCP), and SCADA telemetry.',
          theoryContentAr: 'تشكل أجهزة الـ PLC الجهاز العصبي المركزي للمصانع وخطوط الإنتاج المؤتمتة. ويتطلب التحكم الآلي فهماً عميقاً لتوقيت دورة المسح، وعنونة الذاكرة، وشبكات الحقل الصناعية الحتمية، وأنظمة الإشراف والمراقبة السكادا.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Applied Engineering',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الهندسة التطبيقية',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-IND-G12-M2',
            pageRange: 'pp. 53-108'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Ladder Logic Engineering and SCADA Alarms',
            titleAr: 'خطة الدرس: هندسة مخطط السلم وإدارة إنذارات السكادا',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Design ladder rungs incorporating timers, counters, and internal relays',
              'Configure industrial Modbus TCP registers and polling rates',
              'Implement fail-safe interlocks and emergency stop safety logic'
            ]
          },
          worksheet: {
            id: 'ws_egbac_ind_ch2_l1',
            titleEn: 'Worksheet 2: Ladder Logic & Fieldbus Networks',
            titleAr: 'ورقة عمل 2: برمجة السلم وشبكات الحقل الصناعي',
            descriptionEn: 'Construct ladder rungs for sequential manufacturing stations.',
            descriptionAr: 'صمم سطور مخطط السلم لمحطات الإنتاج المتتابعة.',
            estimatedTimeMinutes: 45,
            problems: egBacIndCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'ind_plc_automation_lab',
            titleEn: 'PLC Ladder Logic Simulator',
            titleAr: 'محاكي برمجة مخطط السلم PLC',
            descriptionEn: 'Interactive ladder diagram builder with live rung power scan, timers, counters, and motor latching.',
            descriptionAr: 'محاكي تفاعلي لمخطط السلم مع سريان الطاقة الحي، والمؤقتات والعدادات ودوائر التعشيق.'
          }
        }
      ],
      solvedExamples: egBacIndCh2SolvedExamples,
      exerciseProblems: egBacIndCh2Exercises,
      databank: egBacIndCh2Databank
    },
    {
      id: 'egbac_ind_ch3',
      chapterNumber: 3,
      titleEn: 'Applied Fluid Power: Hydraulics & Pneumatics Engineering',
      titleAr: 'هندسة القوى الهيدروليكية والنيوماتيكية في خطوط الإنتاج',
      descriptionEn: 'Pascal mechanics, directional control valves, double-acting actuators, throttle speed control, and hydraulic power units.',
      descriptionAr: 'ميكانيكا باسكال، صمامات التحكم التوجيهي، المشغلات مزدوجة الفعل، التحكم بالخنق، ومحطات القدرة الهيدروليكية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_ind_ch3_l1',
          titleEn: 'Electro-Hydraulic & Pneumatic Power Systems',
          titleAr: 'أنظمة القوى الكهروهيدروليكية والنيوماتيكية',
          summaryEn: 'Physics of compressed air and hydraulic fluids, directional valve spool configurations, cylinder thrust, and accumulator buffering.',
          summaryAr: 'فيزياء الهواء المضغوط والزيوت الهيدروليكية، صمامات التوجيه، قوى الأسطوانات، وتخزين الطاقة بالمراكم.',
          theoryContentEn: 'Fluid power engineering harnesses pressurized liquids and gases to transmit high force and mechanical power with superior power-to-weight ratios. Industrial systems combine positive displacement pumps, directional valves, and speed throttles to actuate automated tooling.',
          theoryContentAr: 'توظف هندسة القوى المائعية السوائل والغازات المضغوطة لنقل القوى الميكانيكية العالية بكفاءة فائقة ونسبة قوة إلى وزن متميزة. وتجمع الأنظمة بين مضخات الإزاحة، وصمامات التحكم، وخوانق السرعة لتحريك آليات الإنتاج.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Applied Engineering',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الهندسة التطبيقية',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-IND-G12-M3',
            pageRange: 'pp. 109-160'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Hydraulic Circuit Sizing and Actuator Forces',
            titleAr: 'خطة الدرس: تصميم الدوائر الهيدروليكية وقوى المشغلات',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Calculate hydraulic cylinder extend and retract forces and flow rates',
              'Design meter-in and meter-out speed regulation circuits',
              'Size gas-charged hydraulic accumulators using Boyle\'s ideal gas law'
            ]
          },
          worksheet: {
            id: 'ws_egbac_ind_ch3_l1',
            titleEn: 'Worksheet 3: Fluid Power Circuit Design',
            titleAr: 'ورقة عمل 3: تصميم دوائر القوى المائعية',
            descriptionEn: 'Complete all actuator pressure-flow equations and directional valve truth tables.',
            descriptionAr: 'أجب عن معادلات الضغط والتدفق وجداول صمامات التحكم التوجيهي.',
            estimatedTimeMinutes: 45,
            problems: egBacIndCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'ind_fluid_power_lab',
            titleEn: 'Hydraulic & Pneumatic Circuit Builder',
            titleAr: 'مختبر بناء الدوائر الهيدروليكية والنيوماتيكية',
            descriptionEn: 'Interactive fluid power simulator with pump displacement, valve switching, and cylinder stroke animation.',
            descriptionAr: 'محاكاة تفاعلية لحركة السوائل والمضخات والصمامات التوجيهية وحركة مكبس الأسطوانة.'
          }
        }
      ],
      solvedExamples: egBacIndCh3SolvedExamples,
      exerciseProblems: egBacIndCh3Exercises,
      databank: egBacIndCh3Databank
    },
    {
      id: 'egbac_ind_ch4',
      chapterNumber: 4,
      titleEn: 'Total Quality Management (TQM), Lean Manufacturing & Industrial Maintenance',
      titleAr: 'إدارة الجودة الشاملة TQM والصيانة الصناعية وهندسة الموثوقية',
      descriptionEn: 'Shewhart control charts, process capability (Cp, Cpk), Lean 5S, waste elimination, vibration analysis, and MTBF reliability.',
      descriptionAr: 'خرائط شوارت، مؤشرات مقدرة العملية، منهجية 5S، تحليل الاهتزازات، وموثوقية الأنظمة الصناعية MTBF.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_ind_ch4_l1',
          titleEn: 'Statistical Quality Engineering & Asset Reliability',
          titleAr: 'هندسة الجودة الإحصائية وموثوقية الأصول الصناعية',
          summaryEn: 'Comprehensive statistical process control, Six Sigma defect reduction, Total Productive Maintenance, and FMEA risk ranking.',
          summaryAr: 'دراسة متقدمة للتحكم الإحصائي بالجودة، تقليص العيوب بستة سيجما، الصيانة الإنتاجية الشاملة، ومصفوفة تحليل المخاطر FMEA.',
          theoryContentEn: 'World-class industrial manufacturing requires continuous quality assurance and high asset reliability. Statistical Process Control identifies variations using Shewhart charts and capability indices, while Lean tools and Total Productive Maintenance eliminate waste and prevent unplanned downtime.',
          theoryContentAr: 'يتطلب التصنيع الصناعي العالمي ضماناً مستمراً للجودة وموثوقية فائقة للأصول. ويحدد التحكم الإحصائي في العمليات مصادر التشتت عبر خرائط شوارت ومؤشرات المقدرة، بينما تقضي أدوات اللين والصيانة الإنتاجية الشاملة على الهدر والأعطال.',
          moeRef: {
            bookTitleEn: 'Official Egyptian Baccalaureate Applied Engineering',
            bookTitleAr: 'كتاب البكالوريا المصرية الرسمي في الهندسة التطبيقية',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'EGBAC-IND-G12-M4',
            pageRange: 'pp. 161-215'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Process Capability and Predictive Maintenance',
            titleAr: 'خطة الدرس: مقدرة العمليات الصناعية والصيانة التنبؤية',
            gradeLevel: 'Grade 12',
            durationMinutes: 90,
            objectives: [
              'Calculate UCL, LCL, and process capability indices (Cp and Cpk)',
              'Evaluate Mean Time Between Failures and Overall Equipment Effectiveness',
              'Prioritize failure modes using FMEA Risk Priority Numbers'
            ]
          },
          worksheet: {
            id: 'ws_egbac_ind_ch4_l1',
            titleEn: 'Worksheet 4: Quality SPC & Reliability Analysis',
            titleAr: 'ورقة عمل 4: التحكم الإحصائي وتحليل الموثوقية',
            descriptionEn: 'Plot X-bar control chart data and calculate Six Sigma process metrics.',
            descriptionAr: 'ارسم خرائط المتوسط الحسابي واحسب مؤشرات جودة ستة سيجما.',
            estimatedTimeMinutes: 45,
            problems: egBacIndCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'ind_quality_spc_lab',
            titleEn: 'Statistical Process Control & Quality Studio',
            titleAr: 'مختبر التحكم الإحصائي في الجودة SPC',
            descriptionEn: 'Interactive X-bar and R chart generator with tolerance limits, Cp/Cpk calculation, and defect rates.',
            descriptionAr: 'مولد تفاعلي لخرائط المراقبة الإحصائية مع حدود المواصفات وحساب مؤشرات مقدرة العملية ومعدل العيوب.'
          }
        }
      ],
      solvedExamples: egBacIndCh4SolvedExamples,
      exerciseProblems: egBacIndCh4Exercises,
      databank: egBacIndCh4Databank
    }
  ]
};
