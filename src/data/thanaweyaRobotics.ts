import type { Branch } from '../types/curriculum';
import { roboticsCh1SolvedExamples, roboticsCh1ExerciseProblems } from './textbook/thanaweya/roboticsCh1Textbook';
import { roboticsCh2SolvedExamples, roboticsCh2ExerciseProblems } from './textbook/thanaweya/roboticsCh2Textbook';
import { roboticsCh3SolvedExamples, roboticsCh3ExerciseProblems } from './textbook/thanaweya/roboticsCh3Textbook';
import { roboticsCh4SolvedExamples, roboticsCh4ExerciseProblems } from './textbook/thanaweya/roboticsCh4Textbook';
import { roboticsCh1Databank } from './databanks/thanaweya/roboticsCh1Databank';
import { roboticsCh2Databank } from './databanks/thanaweya/roboticsCh2Databank';
import { roboticsCh3Databank } from './databanks/thanaweya/roboticsCh3Databank';
import { roboticsCh4Databank } from './databanks/thanaweya/roboticsCh4Databank';

export const thanaweyaRoboticsBranch: Branch = {
  id: 'thanaweya_robotics',
  titleEn: 'Robotics, Mechatronics & Embedded Systems',
  titleAr: 'الروبوتات والميكاترونكس والأنظمة المدمجة',
  iconName: 'Bot',
  colorGradient: 'from-indigo-600 via-violet-600 to-purple-600',
  categoryEn: 'Applied Engineering & Robotics',
  categoryAr: 'الهندسة التطبيقية وهندسة الروبوتات',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_robotics_ch1',
      chapterNumber: 1,
      titleEn: 'Robot Kinematics, Actuators & Power Electronics',
      titleAr: 'علم حركة الروبوت والمحركات وإلكترونيات القوى',
      descriptionEn: 'Forward/Inverse kinematics, Denavit-Hartenberg (DH) convention, homogeneous transformations, BLDC motors, FOC vector control, and H-bridge inverters.',
      descriptionAr: 'الحركيات الأمامية والعكسية، اصطلاح دينافيت-هارتنبرغ (DH)، التحويلات المتجانسة، المحركات عديمة المسفرات، التحكم الموجه بالفيض (FOC)، وقناطر H-Bridge.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_robotics_ch1_l1',
          titleEn: 'Kinematics Modeling & Electric Drive Engineering',
          titleAr: 'النمذجة الكينماتيكية وهندسة المحركات الكهربائية',
          summaryEn: 'Denavit-Hartenberg spatial frames, homogeneous transformations, BLDC electronic commutation, and H-bridge PWM motor drives.',
          summaryAr: 'أطر دينافيت-هارتنبرغ الفراغية، التحويلات المتجانسة، التبديل الإلكتروني لمحركات BLDC، ودوائر قيادة المحركات بقنطرة H-Bridge.',
          theoryContentEn: 'Kinematic analysis forms the mathematical foundation of robotics manipulation. The Denavit-Hartenberg (DH) convention defines coordinate frames across consecutive links through link length, twist, offset, and joint angle parameters, yielding a 4x4 homogeneous transformation matrix. On the actuation side, Brushless DC (BLDC) motors deliver high power density through electronic commutation, driven by 3-phase H-bridge inverters with hardware dead-time protection and Field-Oriented Control (FOC).',
          theoryContentAr: 'يشكل التحليل الكينماتيكي الأساس الرياضي للتحكم في أذرع الروبوت. يحدد اصطلاح دينافيت-هارتنبرغ (DH) محاور الإحداثيات عبر الوصلات المتتالية من خلال طول الوصلة والتواءها وإزاحتها وزاوية المفصل، منتجاً مصفوفة تحويل متجانسة 4x4. وعلى صعيد المحركات، توفر المحركات عديمة المسفرات (BLDC) كثافة قدرة عالية بالتبديل الإلكتروني، وتقودها قناطر H-Bridge ثلاثية الأطوار مع دوائر حماية التوصيل المتزامن وتحكم FOC المتجهي.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Robotics & Mechatronics Curriculum',
            bookTitleAr: 'منهج هندسة الروبوتات والميكاترونكس لمدارس المتفوقين في العلوم والتكنولوجيا (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-ROBOTICS-G12-CH1',
            pageRange: 'pp. 1-64'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Forward Kinematics and BLDC Motor Drive Design',
            titleAr: 'خطة الدرس: الحركيات الأمامية وتصميم دوائر قيادة محركات BLDC',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Derive Denavit-Hartenberg (DH) coordinate frames and transformation matrices for multi-DOF arms',
              'Calculate end-effector Cartesian coordinates and resolve kinematic singularities',
              'Analyze H-bridge inverter PWM duty cycles, motor torque constants, and gate driver dead-time'
            ]
          },
          worksheet: {
            id: 'ws_th_robotics_ch1_l1',
            titleEn: 'Worksheet 1: DH Parameters & Inverter Analysis',
            titleAr: 'ورقة عمل 1: معاملات DH وتحليل قناطر العاكسات',
            descriptionEn: 'Solve problems on homogeneous transformation matrices, joint torques, and motor PWM voltage calculations.',
            descriptionAr: 'حل مسائل على مصفوفات التحويل المتجانسة، وعزوم المفاصل، وحسابات جهد PWM للمحركات.',
            estimatedTimeMinutes: 45,
            problems: roboticsCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'robotics_kinematics_lab',
            titleEn: '6-DOF Robotic Arm Kinematics & Motor Simulator',
            titleAr: 'محاكي كينماتيكا ذراع الروبوت ومحركات BLDC',
            descriptionEn: 'Manipulate joint angles, observe DH coordinate frames in 3D, and tune BLDC motor PWM duty cycles.',
            descriptionAr: 'تعديل زوايا المفاصل، ورؤية محاور DH ثلاثية الأبعاد، وضبط نسب تشغيل PWM للمحركات.'
          }
        }
      ],
      solvedExamples: roboticsCh1SolvedExamples,
      exerciseProblems: roboticsCh1ExerciseProblems,
      databank: roboticsCh1Databank
    },
    {
      id: 'th_robotics_ch2',
      chapterNumber: 2,
      titleEn: 'Sensors, Signal Conditioning & Computer Vision',
      titleAr: 'الحساسات وتكييف الإشارات والرؤية الحاسوبية',
      descriptionEn: '6-DOF IMUs, Kalman filter sensor fusion, optical quadrature encoders, 2D LiDAR Time-of-Flight, and OpenCV image feature extraction.',
      descriptionAr: 'وحدات IMU بست درجات حرية، دمج الحساسات بمرشح كالمان، المشفرات البصرية التربيعية، رادار الليزر LiDAR، واستخراج معالم الصور بـ OpenCV.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_robotics_ch2_l1',
          titleEn: 'Sensory Perception, Odometry & Machine Vision',
          titleAr: 'الإدراك الحسي، قياس مسار العجلات والرؤية الآلية',
          summaryEn: 'IMU gyroscope-accelerometer fusion, optical quadrature encoder X4 decoding, LiDAR ToF ranging, and OpenCV edge detection.',
          summaryAr: 'دمج الجيروسكوب ومقياس التسارع في وحدات IMU، فك تشفير المشفرات البصرية X4، قياس المدى بالليزر ToF، وكشف الحواف بـ OpenCV.',
          theoryContentEn: 'Autonomous robots perceive dynamic operating environments using heterogeneous sensor suites. Inertial Measurement Units (IMUs) integrate gyroscopes and accelerometers, where complementary or Kalman filtering mitigates high-frequency vibrational noise and slow integration drift. Wheel odometry is quantified via quadrature encoders utilizing X4 decoding. Simultaneously, Time-of-Flight (ToF) LiDARs construct high-frequency polar range scans, while OpenCV pipelines process visual imagery via Gaussian smoothing, Canny edge detection, and Hough transforms.',
          theoryContentAr: 'تدرك الروبوتات الذاتية بيئاتها التشغيلية باستخدام منظومة متكاملة من الحساسات. تدمج وحدات IMU بين الجيروسكوبات ومقاييس التسارع، حيث تحد المرشحات التكاملية أو مرشحات كالمان من ضوضاء الاهتزازات والانجراف التراكمي. وتُقاس إزاحة العجلات بالمشفرات التربيعية بتقنية X4. وبالتوازي، تنشئ حساسات الليزر LiDAR مسوحات قطبية فائقة السرعة، بينما تعالج مكتبة OpenCV الصور بترشيح غاوس وكشف حواف كاني وتحويل هوف.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Robotics & Mechatronics Curriculum',
            bookTitleAr: 'منهج هندسة الروبوتات والميكاترونكس لمدارس المتفوقين في العلوم والتكنولوجيا (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-ROBOTICS-G12-CH2',
            pageRange: 'pp. 65-128'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Sensor Fusion Algorithms and Machine Vision Pipelines',
            titleAr: 'خطة الدرس: خوارزميات دمج الحساسات ومسارات الرؤية الآلية',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Implement complementary and Kalman filter fusion between accelerometers and gyroscopes',
              'Calculate wheel odometry distances and angular heading from quadrature encoder counts',
              'Extract lines and geometric features from camera feeds using OpenCV and Hough transform'
            ]
          },
          worksheet: {
            id: 'ws_th_robotics_ch2_l1',
            titleEn: 'Worksheet 2: Sensor Fusion & Vision Processing',
            titleAr: 'ورقة عمل 2: دمج الحساسات ومعالجة الرؤية الحاسوبية',
            descriptionEn: 'Compute fused tilt angles, encoder linear displacement, and LiDAR distance from ToF echo pulses.',
            descriptionAr: 'حساب زوايا الميل المدمجة، والإزاحة الخطية للمشفرات، ومسافات الليزر من نبضات زمن الطيران.',
            estimatedTimeMinutes: 45,
            problems: roboticsCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'robotics_sensor_vision_lab',
            titleEn: 'IMU Kalman Filter & 2D LiDAR SLAM Simulator',
            titleAr: 'محاكي مرشح كالمان لـ IMU ورادار الليزر LiDAR',
            descriptionEn: 'Tune Kalman filter noise covariances and visualize real-time 2D laser scans and edge detection.',
            descriptionAr: 'ضبط مصفوفات تغاير مرشح كالمان وعرض سحب الليزر وكشف الحواف بصرياً آنياً.'
          }
        }
      ],
      solvedExamples: roboticsCh2SolvedExamples,
      exerciseProblems: roboticsCh2ExerciseProblems,
      databank: roboticsCh2Databank
    },
    {
      id: 'th_robotics_ch3',
      chapterNumber: 3,
      titleEn: 'Microcontroller Architecture, RTOS & Embedded Systems',
      titleAr: 'معمارية المتحكمات الدقيقة ونظم التشغيل المدمجة والأنظمة المدمجة',
      descriptionEn: 'ARM Cortex-M core architecture, NVIC interrupt management, FreeRTOS tasks & semaphores, SPI/I2C protocols, and CAN Bus 2.0B.',
      descriptionAr: 'معمارية معالجات ARM Cortex-M، إدارة مقاطعات NVIC، مهام وسيمافورات FreeRTOS، بروتوكولات SPI وI2C، وشبكة CAN Bus 2.0B.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_robotics_ch3_l1',
          titleEn: 'Embedded Real-Time Computing & Industrial Communications',
          titleAr: 'الحوسبة المدمجة في الوقت الحقيقي والاتصالات الصناعية',
          summaryEn: 'ARM Cortex-M NVIC priorities, FreeRTOS preemptive scheduling, mutex priority inheritance, and CAN Bus 2.0B arbitration.',
          summaryAr: 'أولويات NVIC في معالجات ARM، الجدولة الاستباقية في FreeRTOS، توريث أولوية الميوتكس، وتحكيم شبكة CAN Bus.',
          theoryContentEn: 'Real-time robotic control relies on deterministic embedded platforms. ARM Cortex-M architectures integrate Nested Vectored Interrupt Controllers (NVIC) that guarantee sub-microsecond interrupt latency. On top of the hardware, FreeRTOS organizes control loops into priority-driven threads, employing semaphores for task synchronization and mutexes with priority inheritance to avoid unbounded priority inversion. Peripheral communication across drive nodes is orchestrated via CAN Bus 2.0B featuring differential signaling and non-destructive arbitration.',
          theoryContentAr: 'يعتمد التحكم الآني في الروبوتات على منصات مدمجة حتمية الأداء. تدمج معالجات ARM Cortex-M متحكم المقاطعات المتجهية (NVIC) الذي يضمن زمناً متناهي الصغر لتلبية المقاطعات. وعبر العتاد، ينظم نظام FreeRTOS حلقات التحكم في مهام ذات أولويات محددة، مستخدماً السيمافورات للمزامنة والميوتكس بخاصية توريث الأولوية لمنع انعكاس الأولويات. ويتم تبادل البيانات بين العقد المحركة عبر ناقل CAN Bus 2.0B ذي الإشارات التفاضلية والتحكيم غير المدمر.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Robotics & Mechatronics Curriculum',
            bookTitleAr: 'منهج هندسة الروبوتات والميكاترونكس لمدارس المتفوقين في العلوم والتكنولوجيا (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-ROBOTICS-G12-CH3',
            pageRange: 'pp. 129-192'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Real-Time OS Scheduling and CAN Bus Protocol Analysis',
            titleAr: 'خطة الدرس: جدولة نظم التشغيل الآنية وتحليل بروتوكول CAN Bus',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Configure ARM Cortex-M NVIC preemption and subpriority groups for deterministic timing',
              'Design FreeRTOS multitasking architectures and prevent priority inversion with mutexes',
              'Calculate CAN Bus bit timing, bus termination resistance, and message arbitration dominance'
            ]
          },
          worksheet: {
            id: 'ws_th_robotics_ch3_l1',
            titleEn: 'Worksheet 3: RTOS Tasks & CAN Bus Timing',
            titleAr: 'ورقة عمل 3: مهام RTOS وتوقيتات شبكة CAN Bus',
            descriptionEn: 'Evaluate FreeRTOS task preemption sequences, tick periods, and CAN 2.0B frame transmission latencies.',
            descriptionAr: 'تقييم تسلسل استباق مهام FreeRTOS، وفترات نبضات الساعة، وتأخير بث إطارات CAN.',
            estimatedTimeMinutes: 45,
            problems: roboticsCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'robotics_embedded_rtos_lab',
            titleEn: 'ARM Cortex-M & FreeRTOS Task Simulator',
            titleAr: 'محاكي معالجات ARM ومهام FreeRTOS',
            descriptionEn: 'Simulate preemptive task scheduling, analyze CPU utilization, and test CAN Bus arbitration.',
            descriptionAr: 'محاكاة جدولة المهام الاستباقية، وتحليل استغلال المعالج، واختبار تحكيم شبكة CAN.'
          }
        }
      ],
      solvedExamples: roboticsCh3SolvedExamples,
      exerciseProblems: roboticsCh3ExerciseProblems,
      databank: roboticsCh3Databank
    },
    {
      id: 'th_robotics_ch4',
      chapterNumber: 4,
      titleEn: 'Autonomous Navigation, ROS2 & Industrial Automation',
      titleAr: 'الملاحة الذاتية ونظام تشغيل الروبوت ROS2 والأتمتة الصناعية',
      descriptionEn: 'ROS2 computational graphs, Nav2 path planning, Cartographer SLAM, PLC ladder logic, and industrial collaborative safety robots.',
      descriptionAr: 'مخطط حوسبة ROS2، تخطيط مسار الملاحة Nav2، رسم الخرائط Cartographer SLAM، مخططات السلم PLC، والروبوتات التعاونية الصناعية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_robotics_ch4_l1',
          titleEn: 'ROS2 Autonomous Mobility & Industrial Mechatronics',
          titleAr: 'الملاحة الذاتية بـ ROS2 والميكاترونكس الصناعية',
          summaryEn: 'ROS2 nodes and DDS QoS policies, Nav2 global/local costmaps, Cartographer loop closure, and PLC ladder logic automation.',
          summaryAr: 'عقد ROS2 وسياسات جودة الخدمة DDS، خرائط التكلفة لحزمة Nav2، إغلاق حلقات خريطة Cartographer، ومخططات السلم لمتحكمات PLC.',
          theoryContentEn: 'Advanced mobile autonomy is spearheaded by the Robot Operating System 2 (ROS2). Built on Data Distribution Service (DDS) middleware, ROS2 facilitates robust communication across nodes, topics, and services. The Nav2 navigation stack utilizes global planners (A*) and local controllers (DWA) over dynamic costmaps to steer mobile robots. In factory settings, Google Cartographer achieves 2D LiDAR SLAM with loop closure, integrated with industrial PLCs executing deterministic IEC 61131-3 Ladder Logic for manufacturing automation.',
          theoryContentAr: 'يقود نظام تشغيل الروبوتات ROS2 تطبيقات الملاحة الذاتية المتقدمة. يتيح ROS2 المبني على وسيط DDS تواصلاً آمناً بين العقد والمواضيع والخدمات. وتعتمد حزمة Nav2 للملاحة على مخططات المسار العامة (A*) والمتحكمات المحلية (DWA) فوق خرائط التكلفة لتوجيه الروبوتات المتنقلة. وفي المصانع، يحقق نظام Cartographer رسم الخرائط وتحديد الموقع مع إغلاق الحلقات، متكاملاً مع متحكمات PLC التي تنفذ مخططات السلم القياسية للأتمتة.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Robotics & Mechatronics Curriculum',
            bookTitleAr: 'منهج هندسة الروبوتات والميكاترونكس لمدارس المتفوقين في العلوم والتكنولوجيا (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-ROBOTICS-G12-CH4',
            pageRange: 'pp. 193-256'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: ROS2 Nav2 Path Planning and Industrial PLC Ladder Logic',
            titleAr: 'خطة الدرس: تخطيط المسارات في ROS2 ومخططات السلم لمتحكمات PLC',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Design ROS2 computational graphs with pub/sub nodes and configured DDS QoS profiles',
              'Tune Nav2 global and local costmap inflation layers for dynamic obstacle clearance',
              'Program industrial PLC ladder logic circuits with start/stop latching and safety interlocks'
            ]
          },
          worksheet: {
            id: 'ws_th_robotics_ch4_l1',
            titleEn: 'Worksheet 4: ROS2 Nav2 Planning & PLC Ladder Logic',
            titleAr: 'ورقة عمل 4: تخطيط مسارات ROS2 ومخططات السلم لـ PLC',
            descriptionEn: 'Solve quantitative problems on costmap resolution, occupancy grid memory, and PLC ladder scan cycles.',
            descriptionAr: 'مسائل حسابية على دقة خرائط التكلفة، وذاكرة شبكات الإشغال، ودورة مسح متحكمات PLC.',
            estimatedTimeMinutes: 45,
            problems: roboticsCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'robotics_navigation_plc_lab',
            titleEn: 'ROS2 Nav2 & Industrial PLC Automation Studio',
            titleAr: 'استوديو ملاحة ROS2 والأتمتة الصناعية بـ PLC',
            descriptionEn: 'Navigate an AMR through obstacles using ROS2 Nav2 and test virtual PLC ladder logic circuits.',
            descriptionAr: 'ملاحة روبوت متنقل عبر العوائق بحزمة Nav2 واختبار دوائر السلم المنطقية لمتحكم PLC.'
          }
        }
      ],
      solvedExamples: roboticsCh4SolvedExamples,
      exerciseProblems: roboticsCh4ExerciseProblems,
      databank: roboticsCh4Databank
    }
  ]
};
