import type { Branch } from '../types/curriculum';
import { egbac_electronics_iot_ch1SolvedExamples, egbac_electronics_iot_ch1ExerciseProblems } from './textbook/egbac/egBacElectronicsIotCh1Textbook';
import { egbac_electronics_iot_ch2SolvedExamples, egbac_electronics_iot_ch2ExerciseProblems } from './textbook/egbac/egBacElectronicsIotCh2Textbook';
import { egbac_electronics_iot_ch3SolvedExamples, egbac_electronics_iot_ch3ExerciseProblems } from './textbook/egbac/egBacElectronicsIotCh3Textbook';
import { egbac_electronics_iot_ch4SolvedExamples, egbac_electronics_iot_ch4ExerciseProblems } from './textbook/egbac/egBacElectronicsIotCh4Textbook';
import { egbac_electronics_iot_ch1Databank } from './databanks/egbac/egBacElectronicsIotCh1Databank';
import { egbac_electronics_iot_ch2Databank } from './databanks/egbac/egBacElectronicsIotCh2Databank';
import { egbac_electronics_iot_ch3Databank } from './databanks/egbac/egBacElectronicsIotCh3Databank';
import { egbac_electronics_iot_ch4Databank } from './databanks/egbac/egBacElectronicsIotCh4Databank';

export const egBacElectronicsIotBranch: Branch = {
  id: 'egbac_electronics_iot',
  titleEn: 'Advanced Microelectronics, VLSI & Industrial IoT',
  titleAr: 'الإلكترونيات الدقيقة المتقدمة، الدوائر المتكاملة وإنترنت الأشياء الصناعي',
  iconName: 'Cpu',
  colorGradient: 'from-cyan-600 via-teal-600 to-blue-700',
  categoryEn: 'Microelectronics & Embedded Systems',
  categoryAr: 'الإلكترونيات الدقيقة والأنظمة المدمجة',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_electronics_iot_ch1',
      chapterNumber: 1,
      titleEn: 'Nanometer CMOS VLSI, FinFET Physics & Integrated Circuit Layout',
      titleAr: 'تصميم الدوائر المتكاملة CMOS النانومترية، فيزياء FinFET والمخططات السيليكونية',
      descriptionEn: 'FinFET subthreshold conduction, DIBL effect, static CMOS inverter noise margins, dynamic power optimization, and DRC/LVS physical layout verification.',
      descriptionAr: 'التوصيل دون العتبة في ترانزستورات FinFET، تأثير DIBL، هوامش ضوضاء عواكس CMOS، تقليل استهلاك القدرة الديناميكية، وفحص قواعد التصميم DRC/LVS.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_electronics_iot_ch1_l1',
          titleEn: 'Nanometer Silicon Physics & Standard-Cell VLSI Layout',
          titleAr: 'فيزياء السيليكون النانومترية وتصميم خلايا VLSI القياسية',
          summaryEn: 'FinFET short-channel mitigation, CMOS inverter sizing for symmetric noise margins, dynamic switching power, and physical layout extraction.',
          summaryAr: 'الحد من تأثيرات القناة القصيرة في FinFET، تحجيم عواكس CMOS لتناظر هوامش الضوضاء، قدرة التبديل الديناميكية، واستخراج المخططات الفيزيائية.',
          theoryContentEn: 'Advanced VLSI design operates deep in the nanometer regime where classical planar MOSFET scaling encounters quantum mechanical tunneling and severe Short-Channel Effects (SCE). 3D FinFET and Gate-All-Around (GAA) architectures wrap gate dielectrics around multi-sided channels, suppressing Drain-Induced Barrier Lowering (DIBL). In digital standard-cell synthesis, symmetric inverter noise margins dictate a Wp/Wn ratio around 2.5 to compensate for hole mobility deficit. Dynamic power dissipation follows alpha*C*Vdd^2*f, addressed through aggressive clock gating and multi-threshold CMOS libraries.',
          theoryContentAr: 'يعمل تصميم دوائر VLSI المتقدمة في النطاق النانومتري العميق حيث يواجه الترانزستور المستوي التقليدي ظواهر النفق الكمي وتأثيرات القناة القصيرة الحادة. تحيط بوابات ترانزستورات FinFET و GAA ثلاثية الأبعاد بالقناة من جوانب متعددة لقمع تأثير DIBL. وفي تصميم الخلايا القياسية، تفرض هوامش الضوضاء المتناظرة نسبة عرض Wp/Wn تقارب 2.5 لتعويض انخفاض حركية الفجوات. وتتبع القدرة الديناميكية العلاقة alpha*C*Vdd^2*f، التي تعالج بحجب إشارة الساعة ومكتبات الترانزستورات متعددة العتبة.',
          moeRef: {
            bookTitleEn: 'New Egyptian Baccalaureate (EG-Bac) Advanced Microelectronics Syllabus',
            bookTitleAr: 'منهج البكالوريا المصرية (EG-Bac) في الإلكترونيات الدقيقة المتقدمة وتصميم الدوائر المتكاملة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-ELEC-G12-CH1',
            pageRange: 'pp. 1-72'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Nanometer FinFET Physics & CMOS Inverter Sizing Optimization',
            titleAr: 'خطة الدرس: فيزياء ترانزستورات FinFET النانومترية وتحسين تحجيم عواكس CMOS',
            gradeLevel: 'Grade 12 Baccalaureate',
            durationMinutes: 90,
            objectives: [
              'Evaluate short-channel effects, subthreshold swing, and DIBL coefficients',
              'Calculate CMOS voltage transfer curves and optimize noise margins (NML, NMH)',
              'Compute dynamic switching power and quantify clock gating energy reductions'
            ]
          },
          worksheet: {
            id: 'ws_egbac_electronics_iot_ch1_l1',
            titleEn: 'Worksheet 1: FinFET Modeling, Noise Margins & Power Sizing',
            titleAr: 'ورقة عمل 1: نمذجة ترانزستورات FinFET، هوامش الضوضاء واستهلاك القدرة',
            descriptionEn: 'Calculate threshold voltage shifts, dynamic power dissipation, and layout parasitic capacitances.',
            descriptionAr: 'حساب إزاحة جهد العتبة، وتبديد القدرة الديناميكية، والسعات الطفيلية لمخططات السيليكون.',
            estimatedTimeMinutes: 45,
            problems: egbac_electronics_iot_ch1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'cmos_vlsi_inverter_designer',
            titleEn: 'Interactive Nanometer CMOS Inverter VTC & Noise Margin Analyzer',
            titleAr: 'محلل منحنى نقل الجهد VTC وهوامش الضوضاء لعواكس CMOS النانومترية',
            descriptionEn: 'Modify PMOS/NMOS channel widths, supply voltage VDD, and FinFET parameters to visualize transfer curves and noise margins.',
            descriptionAr: 'تعديل عرض قنوات الترانزستورات وجهد التغذية ومعاملات FinFET لمشاهدة منحنيات النقل وهوامش الضوضاء.'
          }
        }
      ],
      solvedExamples: egbac_electronics_iot_ch1SolvedExamples,
      exerciseProblems: egbac_electronics_iot_ch1ExerciseProblems,
      databank: egbac_electronics_iot_ch1Databank
    },
    {
      id: 'egbac_electronics_iot_ch2',
      chapterNumber: 2,
      titleEn: 'FPGA Architecture, HDL Synthesis & Static Timing Analysis',
      titleAr: 'بنية شرائح FPGA، توليف لغات توصيف العتاد والتحليل الزمني الساكن',
      descriptionEn: '6-LUT CLB architecture, pipelined datapath design, Verilog/VHDL RTL synthesis, hazard mitigation, and static timing setup/hold slack.',
      descriptionAr: 'بنية الكتل المنطقية 6-LUT، تصميم مسارات البيانات المتسلسلة، توليف لغات Verilog/VHDL، إزالة المخاطر، وفحص قيود أزمنة التجهيز والتثبيت.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_electronics_iot_ch2_l1',
          titleEn: 'HDL Register-Transfer Level Design & Timing Closure',
          titleAr: 'التصميم بمستوى نقل السجلات RTL واستيفاء التوقيت الزمني',
          summaryEn: 'FPGA 6-input LUT logic mapping, pipelined datapath throughput scaling, hazard elimination, and setup/hold time margin analysis.',
          summaryAr: 'تخطيط الدوال المنطقية على جداول 6-LUT، رفع إنتاجية مسارات البيانات بالتسلسل، إزالة مخاطر التنفيذ، وحساب هوامش أزمنة التجهيز والتثبيت.',
          theoryContentEn: 'Field Programmable Gate Arrays (FPGAs) implement high-speed digital architectures using reconfigurable Configurable Logic Blocks (CLBs) composed of 6-input Look-Up Tables (LUTs), dedicated carry chains, and flip-flops. Register-Transfer Level (RTL) descriptions written in Verilog or VHDL synthesize into optimized netlists. By inserting pipeline registers, critical path combinational delay is subdivided, multiplying clock frequency and computational throughput. Static Timing Analysis (STA) verifies that clock-to-Q, routing, and setup/hold requirements yield positive timing slack across all operational corners.',
          theoryContentAr: 'تنفذ مصفوفات البوابات القابلة للبرمجة (FPGA) معالجات رقمية فائقة السرعة باستخدام كتل منطقية قابلة للتشكيل (CLBs) تحتوي على جداول بحث 6-LUT وسلاسل حمل سريعة وقلابات. وتُترجم توصيفات RTL بلغة Verilog أو VHDL إلى شبكات بوابات محسنة. ومن خلال إضافة سجلات التسلسل (Pipelining)، يُقسم التأخير التوافقي للمسار الحرج، مما يضاعف تردد الساعة ومعدل الإنتاجية. ويتحقق التحليل الزمني الساكن (STA) من استيفاء أزمنة التجهيز والتثبيت مع تحقيق هوامش موجبة في كافة ظروف التشغيل.',
          moeRef: {
            bookTitleEn: 'New Egyptian Baccalaureate (EG-Bac) Advanced Microelectronics Syllabus',
            bookTitleAr: 'منهج البكالوريا المصرية (EG-Bac) في الإلكترونيات الدقيقة المتقدمة وتصميم الدوائر المتكاملة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-ELEC-G12-CH2',
            pageRange: 'pp. 73-144'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: FPGA Pipelined Datapath Design & Static Timing Analysis',
            titleAr: 'خطة الدرس: تصميم مسارات البيانات المتسلسلة على شرائح FPGA والتحليل الزمني الساكن',
            gradeLevel: 'Grade 12 Baccalaureate',
            durationMinutes: 90,
            objectives: [
              'Map complex boolean logic equations to FPGA 6-LUT architectures and carry chains',
              'Design multi-stage balanced pipelined datapaths with zero execution hazards',
              'Calculate maximum clock frequency and timing slack from setup/hold parameters'
            ]
          },
          worksheet: {
            id: 'ws_egbac_electronics_iot_ch2_l1',
            titleEn: 'Worksheet 2: FPGA Datapath Timing & Pipelining Optimization',
            titleAr: 'ورقة عمل 2: توقيت مسارات البيانات في FPGA وتحسين التسلسل',
            descriptionEn: 'Compute setup/hold timing slacks, pipeline stage delays, and maximum operating clock frequencies.',
            descriptionAr: 'حساب فجوات التوقيت لأزمنة التجهيز والتثبيت، وتأخير مراحل التسلسل، وأقصى ترددات ساعة تشغيلية.',
            estimatedTimeMinutes: 45,
            problems: egbac_electronics_iot_ch2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'fpga_timing_sta_workbench',
            titleEn: 'Interactive FPGA Static Timing Analysis & Pipeline Slack Visualizer',
            titleAr: 'منصة محاكاة التحليل الزمني الساكن STA وفجوات التوقيت لشرائح FPGA',
            descriptionEn: 'Adjust combinational logic delays, clock skew, and register setup/hold constraints to analyze timing violations interactively.',
            descriptionAr: 'تعديل أزمنة تأخير البوابات وحيود الساعة وقيود السجلات لتحليل أخطاء التوقيت واستيفاء الشروط في الوقت الحقيقي.'
          }
        }
      ],
      solvedExamples: egbac_electronics_iot_ch2SolvedExamples,
      exerciseProblems: egbac_electronics_iot_ch2ExerciseProblems,
      databank: egbac_electronics_iot_ch2Databank
    },
    {
      id: 'egbac_electronics_iot_ch3',
      chapterNumber: 3,
      titleEn: 'Low-Power Edge Computing, DSP & Embedded Telemetry',
      titleAr: 'الحوسبة الطرفية منخفضة الطاقة، معالجة الإشارات والقياس عن بعد',
      descriptionEn: 'Dynamic Voltage and Frequency Scaling (DVFS), fixed-point Q15 arithmetic, digital FIR/IIR filtering, circular DMA streaming, and real-time scheduling.',
      descriptionAr: 'التدريج الديناميكي للجهد والتردد DVFS، الحسابات الرياضية بتمثيل Q15 الثابت، المرشحات الرقمية FIR/IIR، تدفق بيانات DMA، والجدولة الحتمية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_electronics_iot_ch3_l1',
          titleEn: 'Embedded Digital Signal Processing & Autonomous DMA Telemetry',
          titleAr: 'معالجة الإشارات الرقمية المدمجة والقياس عن بعد بنواقل DMA الذاتية',
          summaryEn: 'DVFS energy harvesting, Q15 fixed-point fractional multiplication, FIR/IIR filter implementation, and zero-CPU DMA circular buffers.',
          summaryAr: 'حصاد الطاقة بنظام DVFS، ضرب الكسور بالنقطة الثابتة Q15، تنفيذ المرشحات الرقمية، والتدفق المستمر دون إشغال المعالج عبر DMA.',
          theoryContentEn: 'Edge IoT nodes demand high computational capabilities constrained by extreme battery or energy-harvesting limitations. Dynamic Voltage and Frequency Scaling (DVFS) scales active clock rates and supply rails down during light loads, reducing energy per task by over 90%. In sensor conditioning, fixed-point Q15 arithmetic replaces power-hungry floating-point units, executing digital FIR and IIR filtering using single-cycle MAC instructions. Direct Memory Access (DMA) engines autonomously route high-bandwidth ADC sample streams into ping-pong circular buffers without stealing processor cycles.',
          theoryContentAr: 'تتطلب عقد إنترنت الأشياء الطرفية قدرات معالجة فائقة في ظل قيود صارمة على طاقة البطاريات أو حصاد الطاقة. تعمل تقنية DVFS على خفض تردد الساعة وجهد التغذية أثناء الأحمال الخفيفة، مما يوفر أكثر من 90% من طاقة المعالجة. وفي معالجة بيانات الحساسات، تستبدل حسابات النقطة الثابتة Q15 وحدات النقطة العائمة المستهلكة للطاقة، لتنفيذ مرشحات FIR و IIR بتعليمات MAC في دورة ساعة واحدة. وتتولى نواقل DMA نقل عينات ADC مباشرة إلى الذاكرة دون استهلاك قدرة المعالج.',
          moeRef: {
            bookTitleEn: 'New Egyptian Baccalaureate (EG-Bac) Advanced Microelectronics Syllabus',
            bookTitleAr: 'منهج البكالوريا المصرية (EG-Bac) في الإلكترونيات الدقيقة المتقدمة وتصميم الدوائر المتكاملة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-ELEC-G12-CH3',
            pageRange: 'pp. 145-216'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Fixed-Point DSP Algorithm Implementation & DMA Data Streaming',
            titleAr: 'خطة الدرس: تطبيق خوارزميات معالجة الإشارات بالنقطة الثابتة وتدفق بيانات DMA',
            gradeLevel: 'Grade 12 Baccalaureate',
            durationMinutes: 90,
            objectives: [
              'Implement Q15 fixed-point fractional arithmetic with overflow saturation protection',
              'Design digital FIR filter structures and compute tap weights for noise rejection',
              'Configure circular DMA double-buffering channels for multi-channel sensor streaming'
            ]
          },
          worksheet: {
            id: 'ws_egbac_electronics_iot_ch3_l1',
            titleEn: 'Worksheet 3: Q15 Arithmetic, Filter Taps & DMA Bandwidth',
            titleAr: 'ورقة عمل 3: حسابات تمثيل Q15، معاملات المرشحات الرقمية وحزم بيانات DMA',
            descriptionEn: 'Solve problems on DVFS energy savings, fixed-point rounding errors, and DMA bus throughput.',
            descriptionAr: 'حل مسائل على توفير طاقة DVFS، وأخطاء تقريب النقطة الثابتة، وسعة نقل بيانات ناقل DMA.',
            estimatedTimeMinutes: 45,
            problems: egbac_electronics_iot_ch3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'dsp_filter_q15_analyzer',
            titleEn: 'Interactive Fixed-Point Q15 DSP Filter & Spectral Analyzer',
            titleAr: 'محلل المرشحات الرقمية بتنسيق Q15 وتحليل الطيف الترددي للإشارات',
            descriptionEn: 'Apply digital FIR/IIR filtering to noisy sensor signals in Q15 format and visualize frequency attenuation in real time.',
            descriptionAr: 'تطبيق المرشحات الرقمية على إشارات الحساسات بتنسيق Q15 ومراقبة إخماد الضوضاء في الوقت الحقيقي.'
          }
        }
      ],
      solvedExamples: egbac_electronics_iot_ch3SolvedExamples,
      exerciseProblems: egbac_electronics_iot_ch3ExerciseProblems,
      databank: egbac_electronics_iot_ch3Databank
    },
    {
      id: 'egbac_electronics_iot_ch4',
      chapterNumber: 4,
      titleEn: 'Industrial IoT (IIoT), Edge AI & Hardware Security',
      titleAr: 'إنترنت الأشياء الصناعي (IIoT)، الذكاء الاصطناعي الطرفي وأمن العتاد',
      descriptionEn: 'Modbus RTU/TCP, deterministic OPC UA TSN, TinyML quantized 8-bit inference, hardware Root of Trust (RoT), and PUF authentication.',
      descriptionAr: 'شبكات Modbus RTU/TCP، شبكات OPC UA TSN الحتمية، استدلال TinyML المكمم بدقة 8 بت، جذر الثقة العتادي، ومصادقة وظائف PUF.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_electronics_iot_ch4_l1',
          titleEn: 'Industrial Fieldbus Networks, TinyML & Hardware Cryptography',
          titleAr: 'شبكات الحقل الصناعي، الذكاء الاصطناعي الطرفي والتشفير العتادي',
          summaryEn: 'Modbus framing and deterministic TSN scheduling, on-device TinyML neural network inference, and silicon Root of Trust security.',
          summaryAr: 'تأطير حزم Modbus وجدولة شبكات TSN الحتمية، استدلال الشبكات العصبية بـ TinyML على المعالج، وأمن جذر الثقة السيليكوني.',
          theoryContentEn: 'Industrial IoT (IIoT) transforms industrial automation through deterministic fieldbuses and artificial intelligence at the edge. Modbus RTU over RS-485 and OPC UA over Time-Sensitive Networking (TSN) guarantee bounded transmission latency for robotic control loops. TinyML models, quantized from Float32 to 8-bit integers (INT8), execute convolutional neural network inferences directly on microcontroller silicon in milliseconds to detect mechanical vibration anomalies. Hardware Root of Trust (RoT), Secure Boot, and SRAM-based Physically Unclonable Functions (PUFs) safeguard critical infrastructure against cyber-physical intrusion.',
          theoryContentAr: 'ينقل إنترنت الأشياء الصناعي (IIoT) الأتمتة الصناعية إلى آفاق جديدة عبر الشبكات الحتمية والذكاء الاصطناعي الطرفي. تضمن بروتوكولات Modbus و OPC UA عبر شبكات TSN الحساسة للوقت زمناً حتمياً لنقل أوامر التحكم في خلايا الروبوتات. وتنفذ نماذج TinyML المكممة بدقة 8 بت (INT8) استدلال الشبكات العصبية مباشرة على المعالج في أجزاء من الثانية لكشف أعطال الاهتزازات الميكانيكية. بينما تحمي منظومات جذر الثقة العتادي (RoT) والإقلاع الآمن ووظائف PUF البنية التحتية من الهجمات السيبرفيزيائية.',
          moeRef: {
            bookTitleEn: 'New Egyptian Baccalaureate (EG-Bac) Advanced Microelectronics Syllabus',
            bookTitleAr: 'منهج البكالوريا المصرية (EG-Bac) في الإلكترونيات الدقيقة المتقدمة وتصميم الدوائر المتكاملة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-ELEC-G12-CH4',
            pageRange: 'pp. 217-288'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Industrial Fieldbus Protocol Sizing & TinyML Inference Deployment',
            titleAr: 'خطة الدرس: حسابات شبكات الحقل الصناعي ونشر نماذج الذكاء الاصطناعي TinyML',
            gradeLevel: 'Grade 12 Baccalaureate',
            durationMinutes: 90,
            objectives: [
              'Calculate Modbus RTU transmission timings, character delays, and silent intervals',
              'Analyze INT8 quantized neural network memory footprints and inference execution times',
              'Evaluate silicon Root of Trust (RoT) cryptographic keys and PUF entropy generation'
            ]
          },
          worksheet: {
            id: 'ws_egbac_electronics_iot_ch4_l1',
            titleEn: 'Worksheet 4: Fieldbus Timing, TinyML Quantization & Cryptographic Keys',
            titleAr: 'ورقة عمل 4: توقيت شبكات الحقل، تكميم نماذج TinyML ومفاتيح التشفير',
            descriptionEn: 'Compute RS-485 line turnaround delays, neural network compression ratios, and secure boot verification steps.',
            descriptionAr: 'حساب أزمنة استجابة خطوط RS-485، ونسب ضغط النماذج العصبية، وخطوات التحقق من الإقلاع الآمن.',
            estimatedTimeMinutes: 45,
            problems: egbac_electronics_iot_ch4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'iiot_tinyml_security_console',
            titleEn: 'Interactive IIoT Edge AI, Modbus Protocol & Secure Boot Console',
            titleAr: 'منصة محاكاة الذكاء الاصطناعي الطرفي لإنترنت الأشياء الصناعي وبروتوكول Modbus',
            descriptionEn: 'Simulate industrial telemetry traffic, run INT8 TinyML anomaly detection on vibration signals, and verify firmware cryptographic signatures.',
            descriptionAr: 'محاكاة حركة بيانات المصانع، وتشغيل نموذج TinyML لكشف اهتزازات التوربينات، والتحقق من التوقيع الرقمي للبرمجيات.'
          }
        }
      ],
      solvedExamples: egbac_electronics_iot_ch4SolvedExamples,
      exerciseProblems: egbac_electronics_iot_ch4ExerciseProblems,
      databank: egbac_electronics_iot_ch4Databank
    }
  ]
};
