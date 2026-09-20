import type { Branch } from '../types/curriculum';
import { egBacRoboticsCh1SolvedExamples, egBacRoboticsCh1ExerciseProblems } from './textbook/egbac/egBacRoboticsCh1Textbook';
import { egBacRoboticsCh2SolvedExamples, egBacRoboticsCh2ExerciseProblems } from './textbook/egbac/egBacRoboticsCh2Textbook';
import { egBacRoboticsCh3SolvedExamples, egBacRoboticsCh3ExerciseProblems } from './textbook/egbac/egBacRoboticsCh3Textbook';
import { egBacRoboticsCh4SolvedExamples, egBacRoboticsCh4ExerciseProblems } from './textbook/egbac/egBacRoboticsCh4Textbook';
import { egBacRoboticsCh1Databank } from './databanks/egbac/egBacRoboticsCh1Databank';
import { egBacRoboticsCh2Databank } from './databanks/egbac/egBacRoboticsCh2Databank';
import { egBacRoboticsCh3Databank } from './databanks/egbac/egBacRoboticsCh3Databank';
import { egBacRoboticsCh4Databank } from './databanks/egbac/egBacRoboticsCh4Databank';

export const egBacRoboticsBranch: Branch = {
  id: 'egbac_robotics',
  titleEn: 'Advanced Robotics, Mechatronics & Cyber-Physical Systems',
  titleAr: 'الروبوتات المتقدمة والميكاترونكس والأنظمة السيبرفيزيائية',
  iconName: 'Bot',
  colorGradient: 'from-indigo-600 via-violet-600 to-purple-600',
  categoryEn: 'Applied Engineering & Robotics',
  categoryAr: 'الهندسة التطبيقية وهندسة الروبوتات',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_robotics_ch1',
      chapterNumber: 1,
      titleEn: 'Robot Kinematics, Actuators & Power Electronics',
      titleAr: 'علم حركة الروبوت والمحركات وإلكترونيات القوى',
      descriptionEn: 'Forward/Inverse kinematics, Denavit-Hartenberg (DH) convention, homogeneous transformations, BLDC motors, FOC vector control, and H-bridge inverters.',
      descriptionAr: 'الحركيات الأمامية والعكسية، اصطلاح دينافيت-هارتنبرغ (DH)، التحويلات المتجانسة، المحركات عديمة المسفرات، التحكم الموجه بالفيض (FOC)، وقناطر H-Bridge.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_robotics_ch1_l1',
          titleEn: 'Non-Linear Manipulator Dynamics & Vector Field-Oriented Control',
          titleAr: 'ديناميكا أذرع الروبوت اللاخطية والتحكم الشعاعي الموجه بالفيض',
          summaryEn: 'Euler-Lagrange equations of motion, manipulator Jacobian force duality, FOC d-q decoupling, and operational impedance control.',
          summaryAr: 'معادلات أويلر-لاغرانج للحركة، ازدواجية القوة والسرعة بمصفوفة جاكوبيان، فصل محاور d-q بالتحكم الموجه بالفيض، والتحكم بالممانعة العملياتية.',
          theoryContentEn: 'Advanced robotic systems require rigorous multi-body dynamic modeling. Applying Euler-Lagrange equations yields the coupled matrix equation of motion M(q)q̈ + C(q,q̇)q̇ + g(q) = τ, where the symmetric positive-definite inertia matrix M(q) captures kinetic energy. End-effector contact interactions are synthesized via the operational space formulation and impedance control, establishing a compliant mass-damper-spring response for safe physical human-robot collaboration (pHRI). On the electrical actuation layer, Field-Oriented Control (FOC) executes Clarke and Park transformations to decouple 3-phase stator currents into orthogonal torque and flux vectors.',
          theoryContentAr: 'تتطلب أنظمة الروبوتات المتقدمة نمذجة ديناميكية دقيقة للأجسام المتعددة. ينتج تطبيق معادلات أويلر-لاغرانج معادلة الحركة المصفوفية المقترنة M(q)q̈ + C(q,q̇)q̇ + g(q) = τ، حيث تعبر مصفوفة القصور الذاتي المتماثلة الموجبة M(q) عن طاقة الحركة. وتتم صياغة قوى التلامس لنهاية الذراع في الفضاء العملياتي باستخدام التحكم بالممانعة، محققة استجابة مرنة للتعاون الآمن بين الإنسان والروبوت (pHRI). وفي طبقة المحركات الكهربية، ينفذ التحكم الموجه بالفيض تحويلات كلارك وبارك لفصل تيارات المحرك إلى مركبتي عزم وفيض متعامدتين.',
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced Robotics & Cyber-Physical Engineering Handbook',
            bookTitleAr: 'دليل البكالوريا المصرية لهندسة الروبوتات والأنظمة السيبرفيزيائية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-ROBOTICS-G12-CH1',
            pageRange: 'pp. 1-64'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Lagrangian Dynamics Derivation and Operational Impedance Control',
            titleAr: 'خطة الدرس: استنتاج ديناميكا لاغرانج والتحكم بالممانعة في الفضاء العملياتي',
            gradeLevel: 'Grade 12 Advanced',
            durationMinutes: 90,
            objectives: [
              'Derive Euler-Lagrange equations of motion and formulate inertia and Coriolis matrices',
              'Apply Jacobian transpose force mapping to compute joint torques under external tool loads',
              'Design decoupled FOC vector control loops and tune inner PI current regulators'
            ]
          },
          worksheet: {
            id: 'ws_egbac_robotics_ch1_l1',
            titleEn: 'Worksheet 1: Manipulator Dynamics & FOC Vector Math',
            titleAr: 'ورقة عمل 1: ديناميكا المفاصل ورياضيات التحكم الشعاعي FOC',
            descriptionEn: 'Calculate Lagrangian torques, gravity compensation vectors, and FOC d-q current transformations.',
            descriptionAr: 'حساب عزوم لاغرانج، ومتجهات تعويض الجاذبية، وتحويلات تيارات d-q بالتحكم الموجه بالفيض.',
            estimatedTimeMinutes: 45,
            problems: egBacRoboticsCh1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'egbac_robotics_dynamics_lab',
            titleEn: 'Lagrangian Robot Dynamics & FOC Torque Controller',
            titleAr: 'محاكي ديناميكا لاغرانج والتحكم بالعزم FOC',
            descriptionEn: 'Simulate dynamic torque trajectories, investigate Coriolis coupling, and verify impedance control compliance.',
            descriptionAr: 'محاكاة مسارات العزم الديناميكي، ودراسة قوى كوريوليس، والتحقق من مرونة التحكم بالممانعة.'
          }
        }
      ],
      solvedExamples: egBacRoboticsCh1SolvedExamples,
      exerciseProblems: egBacRoboticsCh1ExerciseProblems,
      databank: egBacRoboticsCh1Databank
    },
    {
      id: 'egbac_robotics_ch2',
      chapterNumber: 2,
      titleEn: 'Sensors, Signal Conditioning & Computer Vision',
      titleAr: 'الحساسات وتكييف الإشارات والرؤية الحاسوبية',
      descriptionEn: '6-DOF IMUs, Kalman filter sensor fusion, optical quadrature encoders, 2D LiDAR Time-of-Flight, and OpenCV image feature extraction.',
      descriptionAr: 'وحدات IMU بست درجات حرية، دمج الحساسات بمرشح كالمان، المشفرات البصرية التربيعية، رادار الليزر LiDAR، واستخراج معالم الصور بـ OpenCV.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_robotics_ch2_l1',
          titleEn: 'Statistical Sensor Fusion, 3D Point Clouds & Visual-Inertial Odometry',
          titleAr: 'الدمج الإحصائي للحساسات، السحب النقطية ثلاثية الأبعاد وVIO',
          summaryEn: 'Extended Kalman Filter linearization, 3D point cloud voxel filtering and RANSAC, Visual-Inertial Odometry (VIO), and deep 6D pose estimation.',
          summaryAr: 'خطية مرشح كالمان الممتد، مرشحات السحب النقطية وخوارزمية RANSAC، قياس المسافات البصري العطالي، وتقدير الأوضاع بست درجات حرية.',
          theoryContentEn: 'High-performance robotic perception leverages optimal statistical estimation and spatial 3D computer vision. The Extended Kalman Filter (EKF) fuses high-frequency IMU kinematics with external visual odometry, linearizing non-linear system matrices via real-time Taylor expansion Jacobians. Concurrently, 3D point cloud processing pipelines downsample massive laser scans via voxel grid structures and extract ground planes and geometric obstacles using RANSAC. In vision-guided grasping, deep convolutional keypoint detectors paired with Perspective-n-Point (PnP) solvers determine 6D workpiece poses under antipodal force-closure grasping constraints.',
          theoryContentAr: 'يعتمد إدراك الروبوتات عالي الأداء على التقدير الإحصائي الأمثل والرؤية الحاسوبية الفراغية ثلاثية الأبعاد. يدمج مرشح كالمان الممتد (EKF) الحركيات العطالية السريعة مع قياسات الكاميرا، مخضعاً النماذج غير الخطية للخطية الآنية بمصفوفات جاكوبيان. وتختزل مسارات معالجة السحب النقطية ثلاثية الأبعاد ملايين النقاط عبر شبكات الحجيمات (Voxels) وتستخرج المستويات الأرضية والعوائق بخوارزمية RANSAC. وفي تطبيقات الالتقاط الآلي، تستخرج شبكات التعلم العميق أوضاع الأجسام بست درجات حرية وتتحقق من شروط انغلاق القوة للمقابض.',
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced Robotics & Cyber-Physical Engineering Handbook',
            bookTitleAr: 'دليل البكالوريا المصرية لهندسة الروبوتات والأنظمة السيبرفيزيائية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-ROBOTICS-G12-CH2',
            pageRange: 'pp. 65-128'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Extended Kalman Filtering and 3D LiDAR Point Cloud Segmentation',
            titleAr: 'خطة الدرس: مرشح كالمان الممتد وتجزئة السحب النقطية لرادارات الليزر',
            gradeLevel: 'Grade 12 Advanced',
            durationMinutes: 90,
            objectives: [
              'Derive discrete EKF propagation and Kalman gain covariance updates for non-linear robot states',
              'Implement voxel grid downsampling and RANSAC geometric plane extraction on 3D point clouds',
              'Formulate Visual-Inertial Odometry factor graphs with bundle adjustment reprojection cost terms'
            ]
          },
          worksheet: {
            id: 'ws_egbac_robotics_ch2_l1',
            titleEn: 'Worksheet 2: EKF Covariances & 3D Point Cloud Processing',
            titleAr: 'ورقة عمل 2: مصفوفات تغاير EKF ومعالجة السحب النقطية',
            descriptionEn: 'Compute Kalman gains, RANSAC consensus inlier counts, and antipodal gripper force-closure requirements.',
            descriptionAr: 'حساب كسب كالمان، ونقاط تطابق خوارزمية RANSAC، وقوى إطباق المقابض لانغلاق القوة.',
            estimatedTimeMinutes: 45,
            problems: egBacRoboticsCh2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'egbac_robotics_slam_vision_lab',
            titleEn: '3D LiDAR Point Cloud & Visual Odometry Studio',
            titleAr: 'استوديو سحب النقاط ثلاثية الأبعاد وقياس المسار البصري',
            descriptionEn: 'Process raw 3D point clouds, test RANSAC floor segmentation, and inspect VIO camera keyframe trajectories.',
            descriptionAr: 'معالجة السحب النقطية الخام، واختبار عزل الأرضية بـ RANSAC، وعرض مسار إطارات VIO.'
          }
        }
      ],
      solvedExamples: egBacRoboticsCh2SolvedExamples,
      exerciseProblems: egBacRoboticsCh2ExerciseProblems,
      databank: egBacRoboticsCh2Databank
    },
    {
      id: 'egbac_robotics_ch3',
      chapterNumber: 3,
      titleEn: 'Microcontroller Architecture, RTOS & Embedded Systems',
      titleAr: 'معمارية المتحكمات الدقيقة ونظم التشغيل المدمجة والأنظمة المدمجة',
      descriptionEn: 'ARM Cortex-M core architecture, NVIC interrupt management, FreeRTOS tasks & semaphores, SPI/I2C protocols, and CAN Bus 2.0B.',
      descriptionAr: 'معمارية معالجات ARM Cortex-M، إدارة مقاطعات NVIC، مهام وسيمافورات FreeRTOS، بروتوكولات SPI وI2C، وشبكة CAN Bus 2.0B.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_robotics_ch3_l1',
          titleEn: 'Hard Real-Time Scheduling, Deterministic Buses & Micro-ROS Architecture',
          titleAr: 'الجدولة الآنية الصارمة، شبكات الحقل الحتمية وبنية Micro-ROS',
          summaryEn: 'Rate Monotonic (RMS) schedulability bounds, EtherCAT distributed clocks, CANopen CiA 402 drive profiles, and Micro-ROS XRCE-DDS middleware.',
          summaryAr: 'حدود قابلية الجدولة بالترتيب الرتيب للمعدل (RMS)، ساعات EtherCAT الموزعة، ملفات CANopen CiA 402، ووسيط Micro-ROS.',
          theoryContentEn: 'Safety-critical robotic systems demand mathematically validated hard real-time execution. Rate Monotonic Scheduling (RMS) and Earliest Deadline First (EDF) establish formal utilization bounds to prove zero deadline misses. Deterministic communication across multi-axis motion drives is achieved using EtherCAT distributed clock mechanisms that synchronize motor nodes within sub-microsecond jitters. At the edge, Micro-ROS connects resource-constrained 32-bit microcontrollers directly into ROS2 computational graphs via XRCE-DDS client-agent bridges, enabling seamless embedded-to-cloud integration.',
          theoryContentAr: 'تتطلب أنظمة الروبوتات الحرجة للأمان تنفيذاً حتمياً موثقاً رياضياً في الوقت الحقيقي الصارم. تحدد نظريات الجدولة الرتيبة (RMS) وموعد التسليم الأبكر (EDF) حدود الاستغلال الحسابية لإثبات عدم تجاوز أي موعد نهائي. ويتحقق الاتصال الحتمي بين محركات المفاصل باستخدام ساعات EtherCAT الموزعة التي توفر تزامناً بدقة تقل عن ميكروثانية. وعلى مستوى الحافة، يدمج نظام Micro-ROS المتحكمات الدقيقة مباشرة في مخططات ROS2 عبر وسيط XRCE-DDS لربط العتاد المدمج بالحوسبة السحابية.',
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced Robotics & Cyber-Physical Engineering Handbook',
            bookTitleAr: 'دليل البكالوريا المصرية لهندسة الروبوتات والأنظمة السيبرفيزيائية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-ROBOTICS-G12-CH3',
            pageRange: 'pp. 129-192'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Real-Time Schedulability Analysis and Micro-ROS Client Setup',
            titleAr: 'خطة الدرس: تحليل قابلية الجدولة الفورية وبناء عميل Micro-ROS',
            gradeLevel: 'Grade 12 Advanced',
            durationMinutes: 90,
            objectives: [
              'Conduct formal Liu and Layland RMS schedulability proofs for periodic robotic control tasks',
              'Configure EtherCAT synchronous PDO cyclic motion cycles and master state transitions',
              'Implement embedded Micro-ROS publisher/subscriber nodes over UART DMA serial transports'
            ]
          },
          worksheet: {
            id: 'ws_egbac_robotics_ch3_l1',
            titleEn: 'Worksheet 3: RMS Utilization & Deterministic Network Cycles',
            titleAr: 'ورقة عمل 3: استغلال المعالج في RMS ودورات الشبكات الحتمية',
            descriptionEn: 'Calculate task set CPU utilization bounds, EtherCAT distributed clock drift, and Micro-ROS serial baud margins.',
            descriptionAr: 'حساب حدود استغلال المعالج لمجموعات المهام، وانحراف توقيت EtherCAT، وهوامش سرعة Micro-ROS.',
            estimatedTimeMinutes: 45,
            problems: egBacRoboticsCh3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'egbac_robotics_microros_lab',
            titleEn: 'Hard Real-Time Task & Micro-ROS Network Studio',
            titleAr: 'استوديو المهام الفورية الصارمة وشبكات Micro-ROS',
            descriptionEn: 'Verify Liu-Layland RMS schedulability, test EtherCAT PDO synchronization, and bridge microcontrollers into ROS2.',
            descriptionAr: 'التحقق من قابلية جدولة RMS، واختبار تزامن EtherCAT، وربط المتحكمات الدقيقة بـ ROS2.'
          }
        }
      ],
      solvedExamples: egBacRoboticsCh3SolvedExamples,
      exerciseProblems: egBacRoboticsCh3ExerciseProblems,
      databank: egBacRoboticsCh3Databank
    },
    {
      id: 'egbac_robotics_ch4',
      chapterNumber: 4,
      titleEn: 'Autonomous Navigation, ROS2 & Industrial Automation',
      titleAr: 'الملاحة الذاتية ونظام تشغيل الروبوت ROS2 والأتمتة الصناعية',
      descriptionEn: 'ROS2 computational graphs, Nav2 path planning, Cartographer SLAM, PLC ladder logic, and industrial collaborative safety robots.',
      descriptionAr: 'مخطط حوسبة ROS2، تخطيط مسار الملاحة Nav2، رسم الخرائط Cartographer SLAM، مخططات السلم PLC، والروبوتات التعاونية الصناعية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_robotics_ch4_l1',
          titleEn: 'Model Predictive Control, Multi-Agent Fleets & Digital Twins',
          titleAr: 'التحكم التنبؤي بالنموذج، أساطيل الروبوتات المتعددة والتوائم الرقمية',
          summaryEn: 'Non-linear Model Predictive Control (NMPC), Conflict-Based Search (CBS) MAPF, OPC UA semantic data architectures, and Gazebo Ignition digital twins.',
          summaryAr: 'التحكم التنبؤي بالنموذج غير الخطي، خوارزميات فض نزاعات الأساطيل CBS، نماذج بيانات OPC UA الدلالية، والتوائم الرقمية في Gazebo Ignition.',
          theoryContentEn: 'Next-generation industrial automation integrates mobile robotic fleets with cyber-physical production pipelines. Non-linear Model Predictive Control (NMPC) optimizes robot trajectories online over receding horizons, satisfying kinematics, velocity limits, and dynamic obstacle constraints. In dense automated warehouses, Multi-Agent Path Finding (MAPF) and Conflict-Based Search (CBS) coordinate dozens of AMRs to guarantee deadlock-free, collision-free dispatching. These cyber-physical workflows interface via OPC UA semantic information models, validated in high-fidelity physics Digital Twins using Gazebo Ignition and Isaac Sim.',
          theoryContentAr: 'تدمج الأتمتة الصناعية للجيل القادم أساطيل الروبوتات المتنقلة مع خطوط الإنتاج السيبرفيزيائية. يطور التحكم التنبؤي بالنموذج غير الخطي (NMPC) مسارات الروبوتات لحظياً على امتداد أفق زمني متحرك، ملتزماً بحدود السرعة والعوائق الديناميكية. وفي المستودعات الذكية عالية الكثافة، تنسق خوارزميات تخطيط مسارات الروبوتات المتعددة (MAPF) والبحث القائم على النزاع (CBS) عشرات الروبوتات لمنع الاختناقات والتصادم. وتتكامل هذه المنظومات عبر نماذج بيانات OPC UA الدلالية، وتُختبر في بيئات التوائم الرقمية الفيزيائية الدقيقة في Gazebo Ignition وIsaac Sim.',
          moeRef: {
            bookTitleEn: 'EG-Bac Advanced Robotics & Cyber-Physical Engineering Handbook',
            bookTitleAr: 'دليل البكالوريا المصرية لهندسة الروبوتات والأنظمة السيبرفيزيائية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-ROBOTICS-G12-CH4',
            pageRange: 'pp. 193-256'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Model Predictive Control and Multi-Agent Fleet Path Finding',
            titleAr: 'خطة الدرس: التحكم التنبؤي بالنموذج وتخطيط مسارات أساطيل الروبوتات',
            gradeLevel: 'Grade 12 Advanced',
            durationMinutes: 90,
            objectives: [
              'Formulate quadratic MPC objective functions with state and input constraint matrices',
              'Solve Conflict-Based Search (CBS) constraint trees for multi-AMR warehouse routing',
              'Model industrial robot kinematics in URDF and test physics simulation in Gazebo Ignition'
            ]
          },
          worksheet: {
            id: 'ws_egbac_robotics_ch4_l1',
            titleEn: 'Worksheet 4: MPC Horizon Optimization & Multi-Agent Routing',
            titleAr: 'ورقة عمل 4: تحسين أفق MPC وتوجيه الروبوتات المتعددة',
            descriptionEn: 'Compute MPC quadratic cost values, resolve vertex-edge robot path conflicts, and configure OPC UA security nodes.',
            descriptionAr: 'حساب تكلفة دوال MPC التربيعية، وفض نزاعات مسارات الروبوتات، وتهيئة عقد أمان بروتوكول OPC UA.',
            estimatedTimeMinutes: 45,
            problems: egBacRoboticsCh4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'egbac_robotics_fleet_twin_lab',
            titleEn: 'Autonomous AMR Fleet & Digital Twin Simulator',
            titleAr: 'محاكي أساطيل الروبوتات المستقلة والتوأم الرقمي',
            descriptionEn: 'Coordinate multi-robot AMRs using CBS path planning, test MPC obstacle avoidance, and control virtual factory twins.',
            descriptionAr: 'تنسيق حركة روبوتات AMR بخوارزمية CBS، واختبار تفادي العوائق بـ MPC، والتحكم في التوأم الرقمي.'
          }
        }
      ],
      solvedExamples: egBacRoboticsCh4SolvedExamples,
      exerciseProblems: egBacRoboticsCh4ExerciseProblems,
      databank: egBacRoboticsCh4Databank
    }
  ]
};
