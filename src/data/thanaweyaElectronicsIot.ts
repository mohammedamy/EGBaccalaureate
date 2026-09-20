import type { Branch } from '../types/curriculum';
import { th_electronics_iot_ch1SolvedExamples, th_electronics_iot_ch1ExerciseProblems } from './textbook/thanaweya/electronicsIotCh1Textbook';
import { th_electronics_iot_ch2SolvedExamples, th_electronics_iot_ch2ExerciseProblems } from './textbook/thanaweya/electronicsIotCh2Textbook';
import { th_electronics_iot_ch3SolvedExamples, th_electronics_iot_ch3ExerciseProblems } from './textbook/thanaweya/electronicsIotCh3Textbook';
import { th_electronics_iot_ch4SolvedExamples, th_electronics_iot_ch4ExerciseProblems } from './textbook/thanaweya/electronicsIotCh4Textbook';
import { th_electronics_iot_ch1Databank } from './databanks/thanaweya/electronicsIotCh1Databank';
import { th_electronics_iot_ch2Databank } from './databanks/thanaweya/electronicsIotCh2Databank';
import { th_electronics_iot_ch3Databank } from './databanks/thanaweya/electronicsIotCh3Databank';
import { th_electronics_iot_ch4Databank } from './databanks/thanaweya/electronicsIotCh4Databank';

export const thanaweyaElectronicsIotBranch: Branch = {
  id: 'thanaweya_electronics_iot',
  titleEn: 'Advanced Electronics, VLSI & IoT Systems',
  titleAr: 'الإلكترونيات المتقدمة، الدوائر المتكاملة وإنترنت الأشياء',
  iconName: 'Cpu',
  colorGradient: 'from-cyan-600 via-teal-600 to-blue-700',
  categoryEn: 'Electronics & Microelectronics',
  categoryAr: 'الهندسة الإلكترونية والإلكترونيات الدقيقة',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_electronics_iot_ch1',
      chapterNumber: 1,
      titleEn: 'Semiconductor Devices, BJT & MOSFET Small-Signal Amplifiers',
      titleAr: 'أجهزة أشباه الموصلات، وترانزستورات BJT و MOSFET ومكبرات الإشارة',
      descriptionEn: 'P-N junction physics, Shockley diode equation, BJT small-signal models, MOSFET saturation transconductance, Class-A/AB power amplifiers, and high-frequency cutoff.',
      descriptionAr: 'فيزياء وصلة P-N، معادلة شوكلي للدايود، نماذج BJT للإشارة الصغيرة، التوصيلية التبادلية لـ MOSFET، مكبرات القدرة من الفئة A و AB، وتردد القطع عالي التردد.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_electronics_iot_ch1_l1',
          titleEn: 'Semiconductor Physics & Active Transistor Amplification',
          titleAr: 'فيزياء أشباه الموصلات وتكبير الإشارات بالترانزستورات الفعالة',
          summaryEn: 'P-N barrier potential, BJT hybrid-pi model parameters, MOSFET saturation transconductance, and amplifier small-signal frequency response.',
          summaryAr: 'حاجز جهد وصلة P-N، معاملات نموذج باي الهجين لترانزستور BJT، التوصيلية التبادلية لترانزستور MOSFET، والاستجابة الترددية لمكبرات الإشارة الصغيرة.',
          theoryContentEn: 'Solid-state semiconductor physics governs all modern electronic devices. P-N junctions establish an electrostatic depletion region with a built-in potential barrier (0.7V in Si). Bipolar Junction Transistors (BJTs) operate as current-controlled devices where base injection modulates large collector currents, modeled in small-signal regimes by transconductance gm = Ic/Vt and input resistance r_pi = beta/gm. Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs) act as voltage-controlled devices with infinite DC input gate impedance, operating in saturation above threshold Vth where drain current follows square-law dynamics.',
          theoryContentAr: 'تحكم فيزياء أشباه الموصلات جميع الأجهزة الإلكترونية الحديثة. تنشئ وصلات P-N منطقة نضوب إلكتروستاتيكية ذات حاجز جهد داخلي (0.7 فولت في السيليكون). وتعمل ترانزستورات BJT كأجهزة يتحكم فيها التيار حيث يعدل تيار القاعدة تيار المجمع، بنموذج إشارة صغيرة يحدده gm = Ic/Vt و r_pi = beta/gm. بينما تعمل ترانزستورات MOSFET كأجهزة يتحكم فيها الجهد بمقاومة دخل لا نهائية، وتعمل في منطقة التشبع فوق عتبة الجهد وفق علاقة التربيع.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Advanced Electronics Curriculum',
            bookTitleAr: 'منهج الإلكترونيات المتقدمة والأنظمة المدمجة لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-ELEC-G12-CH1',
            pageRange: 'pp. 1-68'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Semiconductor Device Modeling & Small-Signal BJT/MOSFET Design',
            titleAr: 'خطة الدرس: نمذجة أشباه الموصلات وتصميم مكبرات الإشارة الصغيرة BJT و MOSFET',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Derive Shockley diode equation forward bias currents and dynamic resistances',
              'Calculate BJT small-signal parameters (gm, r_pi, ro) and common-emitter voltage gain',
              'Design MOSFET biasing networks for saturation-mode transconductance optimization'
            ]
          },
          worksheet: {
            id: 'ws_th_electronics_iot_ch1_l1',
            titleEn: 'Worksheet 1: Diode & Transistor Parameter Extraction',
            titleAr: 'ورقة عمل 1: استخراج معاملات الدايود والترانزستور',
            descriptionEn: 'Solve problems on diode forward drop, BJT hybrid-pi parameters, and MOSFET saturation current calculations.',
            descriptionAr: 'حل مسائل على هبوط جهد الدايود الأمامي، ومعاملات باي الهجين لترانزستور BJT، وتيارات تشبع MOSFET.',
            estimatedTimeMinutes: 45,
            problems: th_electronics_iot_ch1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'transistor_curve_tracer',
            titleEn: 'BJT & MOSFET Characteristic Curve Tracer & Operating Point Simulator',
            titleAr: 'محاكي منحنيات خواص ترانزستورات BJT و MOSFET ونقطة التشغيل Q-Point',
            descriptionEn: 'Adjust base currents and gate-source voltages to trace collector/drain characteristic curves and observe load lines in real time.',
            descriptionAr: 'ضبط تيارات القاعدة وجهود البوابة لرسم منحنيات الخواص ومراقبة خطوط الحمل ونقطة التشغيل التفاعلية.'
          }
        }
      ],
      solvedExamples: th_electronics_iot_ch1SolvedExamples,
      exerciseProblems: th_electronics_iot_ch1ExerciseProblems,
      databank: th_electronics_iot_ch1Databank
    },
    {
      id: 'th_electronics_iot_ch2',
      chapterNumber: 2,
      titleEn: 'Operational Amplifiers, Active Filters & Signal Conditioning',
      titleAr: 'مكبرات العمليات، المرشحات الفعالة وتكييف الإشارات التناظرية',
      descriptionEn: 'Op-amp characteristics, inverting/non-inverting topologies, instrumentation amplifiers, Butterworth active filters, and Schmitt triggers.',
      descriptionAr: 'خصائص مكبر العمليات، المكبرات العاكسة وغير العاكسة، مكبرات الأجهزة الدقيقة، مرشحات بتروورث الفعالة، وقوادح شميت.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_electronics_iot_ch2_l1',
          titleEn: 'Analog Linear Circuits & Active Filter Synthesis',
          titleAr: 'الدوائر التناظرية الخطية وتوليف المرشحات الفعالة',
          summaryEn: 'Ideal op-amp golden rules, 3-op-amp instrumentation amplifiers with high CMRR, Sallen-Key 2nd-order Butterworth filters, and hysteresis comparators.',
          summaryAr: 'القواعد الذهبية لمكبر العمليات المثالي، مكبرات الأجهزة الدقيقة ثلاثية المكبرات، مرشحات سالين-كي الفعالة، ومقارنات شميت ذات التخلفية.',
          theoryContentEn: 'Operational amplifiers (Op-Amps) are the core building blocks of analog signal processing. Operating under negative feedback, the virtual short concept equates inverting and non-inverting terminal voltages with zero input bias current. In high-precision sensor interfaces, 3-op-amp instrumentation amplifiers reject large common-mode noise while providing single-resistor gain adjustment. Active filters synthesize precise Butterworth, Chebyshev, or Bessel frequency responses without bulky inductors, preparing weak transducer signals for ADC conversion.',
          theoryContentAr: 'تعتبر مكبرات العمليات حجر الأساس في معالجة الإشارات التناظرية. ففي ظل التغذية الخلفية السالبة، يقرب مفهوم القصر الاعتباري جهدي طرفي الدخل مع انعدام تيار الدخل. وفي واجهات الحساسات الدقيقة، ترفض مكبرات الأجهزة الدقيقة ثلاثية المكبرات الضوضاء المشتركة مع ضبط الكسب بمقاومة واحدة. وتنفذ المرشحات الفعالة استجابات ترددية دقيقة كبتروورث دون الحاجة لملفات حثية ضخمة.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Advanced Electronics Curriculum',
            bookTitleAr: 'منهج الإلكترونيات المتقدمة والأنظمة المدمجة لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-ELEC-G12-CH2',
            pageRange: 'pp. 69-138'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Precision Signal Conditioning & Sallen-Key Filter Design',
            titleAr: 'خطة الدرس: تكييف الإشارات الدقيقة وتصميم مرشحات سالين-كي الفعالة',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Analyze negative-feedback op-amp circuits and compute closed-loop gains',
              'Design 3-op-amp instrumentation amplifiers and evaluate CMRR in decibels',
              'Calculate component values for 2nd-order Sallen-Key low-pass Butterworth filters'
            ]
          },
          worksheet: {
            id: 'ws_th_electronics_iot_ch2_l1',
            titleEn: 'Worksheet 2: Instrumentation Amplifiers & Active Filters',
            titleAr: 'ورقة عمل 2: مكبرات الأجهزة الدقيقة والمرشحات الفعالة',
            descriptionEn: 'Compute differential gain, cutoff frequency, and component values for sensor front-end circuits.',
            descriptionAr: 'حساب الكسب التفاضلي وتردد القطع وقيم المقاومات والمكثفات لدوائر معالجة إشارات الحساسات.',
            estimatedTimeMinutes: 45,
            problems: th_electronics_iot_ch2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'active_filter_bode_plotter',
            titleEn: 'Interactive Op-Amp Active Filter Bode Plotter & Signal Analyzer',
            titleAr: 'راسم استجابة بودي لمرشحات مكبرات العمليات الفعالة وتحليل الإشارة',
            descriptionEn: 'Tune cutoff frequencies and damping factors to visualize magnitude and phase response curves in real time.',
            descriptionAr: 'تعديل ترددات القطع ومعامل التخميد لمشاهدة منحنيات السعة وزاوية الطور في الوقت الحقيقي.'
          }
        }
      ],
      solvedExamples: th_electronics_iot_ch2SolvedExamples,
      exerciseProblems: th_electronics_iot_ch2ExerciseProblems,
      databank: th_electronics_iot_ch2Databank
    },
    {
      id: 'th_electronics_iot_ch3',
      chapterNumber: 3,
      titleEn: 'Digital Logic Design, Microcontrollers & Embedded C',
      titleAr: 'تصميم المنطق الرقمي، المتحكمات الدقيقة والبرمجة المدمجة بلغة C',
      descriptionEn: 'Boolean minimization, sequential flip-flops, ARM Cortex-M architecture, GPIO, PWM, 12-bit ADC SAR, and hardware interrupts.',
      descriptionAr: 'تبسيط الدوال البوليانية، القلابات التتابعية، معمارية ARM Cortex-M، المداخل والمخارج GPIO، تعديل عرض النبضة PWM، ومحولات ADC التناظرية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_electronics_iot_ch3_l1',
          titleEn: 'Microcontroller Peripherals & Embedded Firmware Development',
          titleAr: 'ملحقات المتحكمات الدقيقة وبرمجة البرمجيات المدمجة المتقدمة',
          summaryEn: 'ARM Cortex-M register maps, GPIO pin configuration, timer-driven PWM generation, and 12-bit SAR ADC sampling.',
          summaryAr: 'خريطة مسجلات معالجات ARM Cortex-M، تهيئة أطراف GPIO، توليد نبضات PWM بالمؤقتات، وأخذ عينات محولات ADC.',
          theoryContentEn: 'Modern embedded systems unite sequential digital logic with 32-bit microcontroller cores. The ARM Cortex-M architecture maps all system peripherals into a unified 4GB address space, controlled via atomic register manipulations in Embedded C. Timers generate hardware PWM signals for motor control and LED dimming without CPU overhead. Integrated 12-bit Successive Approximation Register (SAR) ADCs quantize physical analog voltages into 4096 discrete steps, while the Nested Vectored Interrupt Controller (NVIC) delivers low-latency preemption for critical events.',
          theoryContentAr: 'تجمع الأنظمة المدمجة الحديثة بين المنطق الرقمي التتابعي ومعالجات 32-بت الدقيقة. تعتمد معمارية ARM Cortex-M على خريطة ذاكرة موحدة بسعة 4 جيجابايت، يتم التحكم فيها عبر مسجلات التحكم المباشرة بلغة C المدمجة. وتولد المؤقتات إشارات PWM لقيادة المحركات دون إجهاد المعالج، بينما تحول محولات SAR ADC بدقة 12 بت الجهود التناظرية إلى 4096 قيمة رقمية، مع متحكم مقاطعات NVIC ذي استجابة فائقة السرعة.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Advanced Electronics Curriculum',
            bookTitleAr: 'منهج الإلكترونيات المتقدمة والأنظمة المدمجة لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-ELEC-G12-CH3',
            pageRange: 'pp. 139-204'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Embedded C Hardware Control & Peripheral Interfacing',
            titleAr: 'خطة الدرس: التحكم في العتاد بلغة C المدمجة وربط الملحقات الإلكترونية',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Write bitwise Embedded C expressions to configure GPIO direction and speeds',
              'Calculate timer prescaler and reload values for target PWM frequencies',
              'Convert raw 12-bit ADC integer counts to precision calibrated physical voltages'
            ]
          },
          worksheet: {
            id: 'ws_th_electronics_iot_ch3_l1',
            titleEn: 'Worksheet 3: Microcontroller Register Calculation & ADC Conversions',
            titleAr: 'ورقة عمل 3: حسابات مسجلات المتحكم وتحويلات محول الإشارة ADC',
            descriptionEn: 'Compute timer reload values, ADC LSB quantization resolutions, and interrupt execution timings.',
            descriptionAr: 'حساب قيم المؤقتات الترددية، ودقة قياس محولات ADC، وأزمنة استجابة المقاطعات العتادية.',
            estimatedTimeMinutes: 45,
            problems: th_electronics_iot_ch3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'arm_gpio_adc_simulator',
            titleEn: 'Interactive ARM Cortex-M GPIO, Timer & ADC Hardware Workbench',
            titleAr: 'منصة محاكاة منافذ GPIO والمؤقتات ومحولات ADC لمعالجات ARM Cortex-M',
            descriptionEn: 'Inspect memory-mapped register bits, simulate analog sensor voltage inputs, and observe 12-bit ADC quantization in real time.',
            descriptionAr: 'معاينة بتات المسجلات في الذاكرة، ومحاكاة جهود الحساسات التناظرية، ومراقبة تكميم محول ADC في الوقت الحقيقي.'
          }
        }
      ],
      solvedExamples: th_electronics_iot_ch3SolvedExamples,
      exerciseProblems: th_electronics_iot_ch3ExerciseProblems,
      databank: th_electronics_iot_ch3Databank
    },
    {
      id: 'th_electronics_iot_ch4',
      chapterNumber: 4,
      titleEn: 'Internet of Things (IoT) Architectures, Protocols & Wireless Networks',
      titleAr: 'بنى إنترنت الأشياء، البروتوكولات وشبكات الاتصال اللاسلكية',
      descriptionEn: 'I2C/SPI sensor interfaces, MQTT publish/subscribe broker architecture, BLE 5.0, LoRaWAN Sub-GHz telemetry, and cloud dashboard integration.',
      descriptionAr: 'واجهات الحساسات I2C وSPI، بروتوكول MQTT السحابي بنمط النشر والاشتراك، تقنيات BLE 5.0، شبكات LoRaWAN بعيدة المدى، واللوحات السحابية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_electronics_iot_ch4_l1',
          titleEn: 'IoT Cloud Telemetry & Low-Power Wireless Protocols',
          titleAr: 'القياس عن بعد السحابي لإنترنت الأشياء والبروتوكولات اللاسلكية منخفضة الطاقة',
          summaryEn: 'I2C/SPI bus signaling, MQTT QoS publish/subscribe mechanics, and Sub-GHz LoRaWAN Chirp Spread Spectrum communication.',
          summaryAr: 'إشارات ناقل I2C وSPI، آليات جودة الخدمة لبروتوكول MQTT، واتصالات LoRaWAN بتعديل طيف الانتشار بالصفير.',
          theoryContentEn: 'The Internet of Things (IoT) bridges physical sensors to distributed cloud services. At the physical layer, microcontrollers interface digital sensors via synchronous buses like I2C and SPI. For edge-to-cloud connectivity, the lightweight Message Queuing Telemetry Transport (MQTT) protocol uses a publish/subscribe broker topology with three Quality of Service (QoS 0, 1, 2) levels to guarantee delivery across fragile mobile networks. For wide-area infrastructure, LoRaWAN utilizes Chirp Spread Spectrum (CSS) modulation to communicate across 15+ kilometers on milliwatt battery budgets.',
          theoryContentAr: 'يربط إنترنت الأشياء (IoT) الحساسات الفيزيائية بالخدمات السحابية الموزعة. وعلى الطبقة الفيزيائية، تتصل المتحكمات بالحساسات الرقمية عبر نواقل تسلسلية متزامنة مثل I2C وSPI. وللاتصال بالسحابة، يستخدم بروتوكول MQTT الخفيف معمارية النشر والاشتراك عبر وسيط وسطي مع ثلاثة مستويات لجودة الخدمة QoS لضمان تسليم البيانات. وللمنظومات الواسعة، تستخدم تقنية LoRaWAN تعديل طيف الانتشار بالصفير لنقل البيانات لأكثر من 15 كم بأقل استهلاك طاقة.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Advanced Electronics Curriculum',
            bookTitleAr: 'منهج الإلكترونيات المتقدمة والأنظمة المدمجة لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-ELEC-G12-CH4',
            pageRange: 'pp. 205-274'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: End-to-End IoT System Design: Sensor to Cloud Dashboard',
            titleAr: 'خطة الدرس: تصميم نظام إنترنت أشياء متكامل: من الحساس إلى اللوحة السحابية',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Calculate I2C pull-up resistor constraints based on bus capacitance and rise time',
              'Construct MQTT JSON telemetry packets and select appropriate QoS levels',
              'Determine LoRaWAN time-on-air (ToA) and battery longevity for remote telemetry nodes'
            ]
          },
          worksheet: {
            id: 'ws_th_electronics_iot_ch4_l1',
            titleEn: 'Worksheet 4: Bus Sizing, MQTT Payloads & LoRaWAN Calculations',
            titleAr: 'ورقة عمل 4: حسابات سعة النواقل وحمولات MQTT وتقنية LoRaWAN',
            descriptionEn: 'Solve problems on I2C bus rise times, MQTT handshake packet counts, and LoRa spread factor energy consumption.',
            descriptionAr: 'حل مسائل على زمن صعود ناقل I2C، ومصافحات بروتوكول MQTT، واستهلاك طاقة إرسال حزم LoRaWAN.',
            estimatedTimeMinutes: 45,
            problems: th_electronics_iot_ch4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'iot_network_mqtt_simulator',
            titleEn: 'Interactive IoT Wireless Gateway, MQTT Broker & Cloud Telemetry Console',
            titleAr: 'محاكي بوابات إنترنت الأشياء اللاسلكية ووسيط MQTT ولوحة القياس السحابية',
            descriptionEn: 'Publish simulated sensor telemetry, inspect JSON payloads, and test broker delivery across QoS 0, 1, and 2 in real time.',
            descriptionAr: 'نشر بيانات الحساسات، ومعاينة حمولات JSON، واختبار وصول الرسائل بمستويات QoS المختلفة في الوقت الحقيقي.'
          }
        }
      ],
      solvedExamples: th_electronics_iot_ch4SolvedExamples,
      exerciseProblems: th_electronics_iot_ch4ExerciseProblems,
      databank: th_electronics_iot_ch4Databank
    }
  ]
};
