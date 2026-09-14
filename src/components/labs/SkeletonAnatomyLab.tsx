import React, { useCallback, useMemo, useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  type LabDefinition,
  type LabTelemetryMetric,
  type LabViewportState,
  type LabParameterSchema,
  type LabPreset,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  Activity,
  Sparkles,
  ZoomIn,
  Info,
  Layers,
  Compass,
} from 'lucide-react';
import skeletonImg from '../../assets/biology/human_skeleton_anatomy.jpg';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type SkeletonSubTab =
  | 'axial_skeleton'
  | 'appendicular_skeleton'
  | 'joints_biomechanics'
  | 'skeleton_atlas';

export interface SkeletonLabParams {
  subTab: SkeletonSubTab;
  axialLoadN: number; // 200 to 1600 N
  respirationState: 'inhalation' | 'exhalation' | 'neutral';
  highlightVertebraType: 'cervical' | 'thoracic' | 'lumbar' | 'sacral_coccygeal';
  cavityType: 'glenoid' | 'acetabulum';
  forearmRotationDeg: number; // 0 to 180 deg (pronation/supination)
  kneeFlexionDeg: number; // 0 to 140 deg
  gastrocForceN: number; // 0 to 4500 N
  highlightLigament: 'acl' | 'pcl' | 'mcl' | 'lcl' | 'all';
  selectedAtlasPin: string;
}

export interface SkeletonSimState {
  discStressMpa: number; // Compressive stress on lumbar disc
  herniationRiskPct: number; // 0 to 100%
  thoracicVolumeExpansionCm3: number;
  socketDepthPct: number; // 15% (shoulder) vs 55% (hip)
  jointDislocationThresholdN: number; // 450 N vs 2200 N
  jointMobilityRomDeg: number; // 360 deg vs 140 deg
  achillesStrainPct: number; // Strain % (0 to 12%)
  achillesStatus: 'normal' | 'tendinitis' | 'partial_tear' | 'complete_rupture';
  clinicalInterventionEn: string;
  clinicalInterventionAr: string;
  selectedBonesCount: number;
  tibiaLigamentsCount: number; // 3 (ACL, PCL, MCL)
  fibulaLigamentsCount: number; // 1 (LCL)
}

export interface SkeletonPinInfo {
  id: string;
  nameEn: string;
  nameAr: string;
  categoryEn: 'Axial Skeleton' | 'Appendicular Skeleton';
  categoryAr: 'الهيكل المحوري' | 'الهيكل الطرفي';
  count: number;
  subBonesEn: string;
  subBonesAr: string;
  jointTypesEn: string;
  jointTypesAr: string;
  descriptionEn: string;
  descriptionAr: string;
  examTipsEn: string;
  examTipsAr: string;
  pinX: number; // % from left
  pinY: number; // % from top
}

export const SKELETON_HOTSPOTS: SkeletonPinInfo[] = [
  {
    id: 'skull',
    nameEn: 'Skull & Facial Bones',
    nameAr: 'الجمجمة وعظام الوجه والملحقات',
    categoryEn: 'Axial Skeleton',
    categoryAr: 'الهيكل المحوري',
    count: 29,
    subBonesEn:
      'Cranium (8 serrated flat bones), Facial skeleton (14), Auditory ossicles (6: malleus, incus, stapes), Hyoid bone (1)',
    subBonesAr:
      'الجزء المخي (٨ عظام مسننة الأطراف بمفاصل ليفية)، الجزء الوجهي (١٤)، عظيمات السمع (٦: مطرقة وسندان وركاب)، العظم اللامي (١)',
    jointTypesEn: 'Fibrous joints (immovable sutures, ossify with advancing age)',
    jointTypesAr: 'مفاصل ليفية (عديمة الحركة تتصل بأطراف مسننة وتتحول لأنسجة عظمية مع تقدم العمر)',
    descriptionEn:
      'Protects the brain and cranial sensory organs. The large foramen magnum at the occipital base connects the brain to the spinal cord.',
    descriptionAr:
      'تحمي المخ وأعضاء الحس الرئيسية. يوجد في قاع الجزء المخي الثقب الأعظم الذي يتصل عبره المخ بالنخاع الشوكي.',
    examTipsEn:
      'Ministerial Exam Target: Foramen magnum location and function; immobility of fibrous suture joints; brain protective box.',
    examTipsAr:
      'سؤال وزاري متكرر: موقع ووظيفة الثقب الأعظم (في قاع الجزء المخي)، ونوع المفاصل بين عظام الجزء المخي (مفاصل ليفية عديمة الحركة).',
    pinX: 28,
    pinY: 8,
  },
  {
    id: 'cervical',
    nameEn: 'Cervical Vertebrae (Neck)',
    nameAr: 'الفقرات العنقية (العنق)',
    categoryEn: 'Axial Skeleton',
    categoryAr: 'الهيكل المحوري',
    count: 7,
    subBonesEn:
      '7 articulated vertebrae (C1-C7). C1 is Atlas, C2 is Axis. Median cervical vertebra is #4.',
    subBonesAr:
      '٧ فقرات متمفصلة متوسطة الحجم (الأولى أطلس، الثانية محور). الفقرة المنصفة للعنق هي الفقرة رقم ٤.',
    jointTypesEn: 'Cartilaginous intervertebral joints with limited movement; synovial pivot at C1-C2',
    jointTypesAr: 'مفاصل غضروفية محدودة الحركة تفصلها أقراص غضروفية؛ ومفصل زلالي مداري بين الأطلس والمحور',
    descriptionEn:
      'Supports the skull weight and facilitates multidirectional head rotation and flexion.',
    descriptionAr:
      'تدعم ثقل الجمجمة وتسمح بحركة الرأس في اتجاهات متعددة. الفقرة الأولى (الأطلس) تتمفصل مع الجمجمة.',
    examTipsEn:
      'Vertebra #4 is the exact median vertebra of the cervical region.',
    examTipsAr:
      'الفقرة المنصفة للفقرات العنقية هي الفقرة رقم ٤ في العمود الفقري.',
    pinX: 28,
    pinY: 15,
  },
  {
    id: 'thoracic_spine',
    nameEn: 'Thoracic Vertebrae & Spine Center',
    nameAr: 'الفقرات الظهرية ومنتصف العمود الفقري',
    categoryEn: 'Axial Skeleton',
    categoryAr: 'الهيكل المحوري',
    count: 12,
    subBonesEn:
      '12 articulated vertebrae (T1-T12 / #8-#19). T10 is spine median vertebra #17. Articulate posteriorly with 12 rib pairs.',
    subBonesAr:
      '١٢ فقرة متمفصلة أكبر حجماً من العنقية (الفقرات من رقم ٨ إلى ١٩). الفقرة المنصفة للعمود الفقري كله هي الفقرة رقم ١٧.',
    jointTypesEn: 'Cartilaginous intervertebral joints; synovial costovertebral joints to ribs',
    jointTypesAr: 'مفاصل غضروفية بين أجسام الفقرات ومفاصل زلالية محدودة مع رؤوس ونتوءات الضلوع',
    descriptionEn:
      'Forms the posterior anchor for the thoracic cage. Provides rigid protection for thoracic organs.',
    descriptionAr:
      'تشكل الدعامة الخلفية للقفص الصدري، وتتصل بكل فقرة منها زوج من الضلوع لحماية القلب والرئتين.',
    examTipsEn:
      'Spine Median Vertebra is #17 (the 10th thoracic vertebra). Floating ribs attach to thoracic vertebrae 11 & 12 (vertebrae #18 & #19 of spine).',
    examTipsAr:
      'الفقرة المنصفة للعمود الفقري بأكمله هي الفقرة رقم ١٧ (العاشرة ظهرية). الضلوع العائمة تتصل بالفقرتين الظهرتين ١١ و١٢ (الفقرتين رقم ١٨ و١٩ من العمود الفقري).',
    pinX: 28,
    pinY: 23,
  },
  {
    id: 'ribcage',
    nameEn: 'Thoracic Cage & Sternum',
    nameAr: 'القفص الصدري وعظمة القص',
    categoryEn: 'Axial Skeleton',
    categoryAr: 'الهيكل المحوري',
    count: 25,
    subBonesEn:
      '12 pairs of ribs (24 ribs) + 1 Sternum. Pairs 1-7: True ribs, 8-10: False ribs, 11-12: Floating ribs',
    subBonesAr:
      '١٢ زوجاً من الضلوع (٢٤ ضلعاً) + عظمة القص (١). الأزواج ١-٧ حقيقية، ٨-١٠ كاذبة، ١١-١٢ عائمة',
    jointTypesEn: 'Costal cartilage connections to sternum; synovial joints to thoracic vertebrae',
    jointTypesAr: 'مفاصل غضروفية تتصل بالقص عبر غضاريف الضلوع، ومفاصل زلالية مع الفقرات الظهرية',
    descriptionEn:
      'Conical protective cage for heart and lungs. Ribs move anterolaterally during inhalation to expand thoracic volume.',
    descriptionAr:
      'علبة مخروطية تحمي القلب والرئتين. تتحرك الضلوع للأمام والجانبين أثناء الشهيق لزيادة حجم التجويف الصدري.',
    examTipsEn:
      'Sternum has a cartilaginous inferior tip. Floating ribs (pairs 11 & 12) never reach the sternum.',
    examTipsAr:
      'عظمة القص عظمة مفلطحة ومدببة من أسفل جزءها السفلي غضروفي. الضلوع العائمة لا تتصل بالقص إطلاقاً.',
    pinX: 35,
    pinY: 24,
  },
  {
    id: 'lumbar',
    nameEn: 'Lumbar Vertebrae (Maximum Load)',
    nameAr: 'الفقرات القطنية (حاملة لأكبر ضغط)',
    categoryEn: 'Axial Skeleton',
    categoryAr: 'الهيكل المحوري',
    count: 5,
    subBonesEn:
      '5 articulated vertebrae (L1-L5 / #20-#24). Largest and thickest vertebral bodies facing the abdominal cavity.',
    subBonesAr:
      '٥ فقرات متمفصلة (الأرقام من ٢٠ إلى ٢٤). هي الأكبر حجماً بين جميع الفقرات وتواجه التجويف البطني.',
    jointTypesEn: 'Cartilaginous intervertebral discs with thick fibrocartilage annulus fibrosus',
    jointTypesAr: 'مفاصل غضروفية بأقراص ليفية سميكة لامتصاص الصدمات وتحمل الضغط الميكانيكي',
    descriptionEn:
      'Bears the entire weight of the upper torso and head. L5-S1 junction is the most vulnerable to disc herniation.',
    descriptionAr:
      'تتحمل الجزء الأكبر من وزن الجسم العلوي. الفقرة رقم ٢٤ هي الأخيرة متمفصلة وتليها الفقرات العجزية الملتحمة.',
    examTipsEn:
      'Lumbar vertebrae bear maximum physical stress. Vertebra #24 is the last articulated vertebra before the sacrum.',
    examTipsAr:
      'الفقرات القطنية هي الأكثر تحملاً لضغط وزن الجسم. الفقرة رقم ٢٤ هي آخر فقرة متمفصلة في العمود الفقري.',
    pinX: 28,
    pinY: 34,
  },
  {
    id: 'sacrum_coccyx',
    nameEn: 'Sacrum & Coccyx (Fused)',
    nameAr: 'العجز والعصعص (الفقرات الملتحمة)',
    categoryEn: 'Axial Skeleton',
    categoryAr: 'الهيكل المحوري',
    count: 2,
    subBonesEn:
      '5 Sacral vertebrae (fused as 1 bone) + 4 Coccygeal vertebrae (fused as 1 bone) = 9 vertebrae / 2 bones total',
    subBonesAr:
      '٥ فقرات عجزية عريضة مفلطحة ملتحمة كعظمة واحدة + ٤ فقرات عصعصية صغيرة ملتحمة كعظمة واحدة = ٩ فقرات / عظمتان',
    jointTypesEn: 'Immovable synostosis (fused bones); sacroiliac joint to pelvic girdle',
    jointTypesAr: 'عظام ملتحمة عديمة الحركة؛ وتتمفصل العجزية مع عظمتي الحرقفة في الحزام الحوضي',
    descriptionEn:
      'Wedged between the hip bones to complete the rigid pelvic ring and anchor pelvic floor musculature.',
    descriptionAr:
      'تستقر بين عظام الحوض لتثبيت الحزام الحوضي وتوفير قاعدة ارتكاز صلبة لثقل الجسم.',
    examTipsEn:
      'Count distinction: Vertebral column has 33 vertebrae, but represents 26 individual bones in adults due to sacral & coccygeal fusion.',
    examTipsAr:
      'ملاحظة امتحانية حاسمة: عدد فقرات العمود الفقري ٣٣ فقرة، لكن عدد عظام العمود الفقري ٢٦ عظمة بسبب التحام العجز والعصعص.',
    pinX: 28,
    pinY: 42,
  },
  {
    id: 'pectoral_girdle',
    nameEn: 'Pectoral Girdle (Shoulder)',
    nameAr: 'الحزام الصدري (الترقوة ولوح الكتف)',
    categoryEn: 'Appendicular Skeleton',
    categoryAr: 'الهيكل الطرفي',
    count: 4,
    subBonesEn:
      '2 Clavicles (slender anterior ventral bones) + 2 Scapulae (triangular dorsal bones with Glenoid cavity) = 4 bones',
    subBonesAr:
      '٢ ترقوة (عظمتان باطنيتان رفيعتان) + ٢ لوح كتف (عظمتان ظهريتان مثلثتا الشكل بهما التجويف الأروح) = ٤ عظام',
    jointTypesEn: 'Ball-and-socket synovial joint at Glenoid cavity; sternoclavicular synovial joint',
    jointTypesAr: 'مفصل الكتف الزلالي واسع الحركة حيث يستقر رأس العضد في التجويف الأروح للوح الكتف',
    descriptionEn:
      'The shallow Glenoid cavity allows extraordinary mobility (360° circumduction) but lower dislocation resistance.',
    descriptionAr:
      'التجويف الأروح تجويف غير عميق بالطرف الخارجي للوح الكتف، يمنح مفصل الكتف حرية حركة واسعة جداً.',
    examTipsEn:
      'The Glenoid cavity is located on the lateral angle of the scapula and accommodates the head of the humerus.',
    examTipsAr:
      'التجويف الأروح يوجد في الطرف الخارجي لعظمة لوح الكتف ويستقر فيه رأس عظمة العضد مكوناً مفصل الكتف.',
    pinX: 18,
    pinY: 21,
  },
  {
    id: 'humerus_elbow',
    nameEn: 'Humerus & Elbow Hinge Joint',
    nameAr: 'عظمة العضد ومفصل الكوع الزلالي',
    categoryEn: 'Appendicular Skeleton',
    categoryAr: 'الهيكل الطرفي',
    count: 2,
    subBonesEn:
      '2 Humerus bones (1 per arm). Upper spherical head fits Glenoid cavity; distal condyle articulates with Ulna cavity.',
    subBonesAr:
      'عظمتا العضد (١ في كل طرف). الطرف العلوي رأس كروي، والطرف السفلي نتوء يتمفصل مع تجويف عظمة الزند.',
    jointTypesEn: 'Shoulder: freely movable ball-and-socket; Elbow: limited-movement hinge synovial',
    jointTypesAr: 'الكتف: زلالي واسع الحركة؛ الكوع: زلالي محدود الحركة يتحرك في اتجاه واحد فقط',
    descriptionEn:
      'Long upper arm bone transmitting muscle power from trunk to forearm. Distal condyle forms hinge with ulna.',
    descriptionAr:
      'عظمة الطرف العلوي، يتمفصل نتوءها الداخلي السفلي مع التجويف العلوي لعظمة الزند في مفصل الكوع محدود الحركة.',
    examTipsEn:
      'Elbow joint is a hinge synovial joint (moves in one plane only), formed by humerus, ulna, and radius.',
    examTipsAr:
      'مفصل الكوع مفصل زلالي محدود الحركة يشارك في تكوينه العضد والزند والكعبرة.',
    pinX: 14,
    pinY: 28,
  },
  {
    id: 'radius_ulna',
    nameEn: 'Forearm: Radius & Stationary Ulna',
    nameAr: 'الساعد: الكعبرة المتحركة والزند الثابت',
    categoryEn: 'Appendicular Skeleton',
    categoryAr: 'الهيكل الطرفي',
    count: 4,
    subBonesEn:
      '2 Ulnae (medial, stationary with proximal cavity) + 2 Radii (lateral, rotates semi-circularly around ulna) = 4 bones',
    subBonesAr:
      '٢ زند (عظمة داخلية ثابتة بها تجويف يستقر به العضد) + ٢ كعبرة (عظمة خارجية أصغر تتحرك حركة نصف دائرية) = ٤ عظام',
    jointTypesEn: 'Proximal and distal radioulnar synovial pivot joints; radiocarpal wrist joint',
    jointTypesAr: 'مفاصل مدارية زلالية تمكن الكعبرة من الدوران حول الزند، ومفصل رسغ اليد الزلالي',
    descriptionEn:
      'The radius rotates semi-circularly around the fixed stationary ulna, enabling hand pronation and supination.',
    descriptionAr:
      'تتحرك الكعبرة حركة نصف دائرية حول عظمة الزند الثابتة، مما يسمح بحركة راحة اليد للأمام والخلف.',
    examTipsEn:
      'Ulna is stationary; Radius rotates around it. The distal end of the radius articulates with the carpals, while ulna does NOT directly touch carpals.',
    examTipsAr:
      'سؤال وزاري شهير: الكعبرة تتحرك حركة نصف دائرية حول الزند الثابت. رسغ اليد يتصل بالطرف السفلي للكعبرة فقط ولا يتصل بالزند مباشرة.',
    pinX: 12,
    pinY: 37,
  },
  {
    id: 'hand_bones',
    nameEn: 'Hand (Carpals, Metacarpals, Phalanges)',
    nameAr: 'عظام اليد (الرسغ، الأمشاط، السلاميات)',
    categoryEn: 'Appendicular Skeleton',
    categoryAr: 'الهيكل الطرفي',
    count: 54,
    subBonesEn:
      'Per hand: 8 Carpals (in 2 rows) + 5 Metacarpals + 14 Phalanges (3 per finger, 2 in thumb) = 27 bones x 2 = 54 total',
    subBonesAr:
      'لكل يد: ٨ رسغ يد (في صفين) + ٥ أمشاط مستطيلة + ١٤ سلامية (٣ في كل إصبع ما عدا الإبهام سلاميتان) = ٢٧ عظمة × ٢ = ٥٤',
    jointTypesEn: 'Synovial plane (carpals), condyloid (knuckles), and hinge (interphalangeal)',
    jointTypesAr: 'مفاصل زلالية منزلقة بين عظام الرسغ، ومفاصل زلالية محدودة بين السلاميات',
    descriptionEn:
      'Highly dexterous manipulator with 27 bones. Wrist connects to radius at proximal row of carpals.',
    descriptionAr:
      'تركيب عظمي دقيق يحتوي على ٢٧ عظمة في كل يد. يتصل الطرف العلوي للرسغ بالطرف السفلي للكعبرة.',
    examTipsEn:
      'Hand wrist consists of 8 carpal bones arranged in two rows. Thumb has only 2 phalanges while fingers have 3.',
    examTipsAr:
      'رسغ اليد يتكون من ٨ عظام في صفين. الإبهام يحتوي على سلاميتين فقط، بينما باقي الأصابع تحتوي على ٣ سلاميات.',
    pinX: 10,
    pinY: 45,
  },
  {
    id: 'pelvis',
    nameEn: 'Pelvic Girdle & Acetabulum',
    nameAr: 'الحزام الحوضي والتجويف الحقي والارتفاق العاني',
    categoryEn: 'Appendicular Skeleton',
    categoryAr: 'الهيكل الطرفي',
    count: 2,
    subBonesEn:
      '2 Fused Hip bones (Ilium, Ischium, Pubis fused together). Meet anteriorly at Pubic Symphysis and form deep Acetabulum.',
    subBonesAr:
      'عظمتا الحوض (نصفان متماثلان يتكون كل منهما من التحام الحرقفة والورك والعانة). يلتقيان عند الارتفاق العاني والتجويف الحقي.',
    jointTypesEn: 'Cartilaginous joint at Pubic Symphysis; deep ball-and-socket synovial hip joint',
    jointTypesAr: 'مفصل غضروفي في الارتفاق العاني؛ ومفصل الفخذ الزلالي واسع الحركة عالي الثبات في التجويف الحقي',
    descriptionEn:
      'The deep hemispherical Acetabulum tightly encloses the femur head, offering immense weight-bearing stability.',
    descriptionAr:
      'التجويف الحقي تجويف عميق عند موضع اتصال الحرقفة والورك والعانة، يستقر فيه رأس الفخذ بثبات هائل لدعم وزن الجسم.',
    examTipsEn:
      'Acetabulum is much deeper than Glenoid cavity. Pubic symphysis is a cartilaginous joint that relaxes during parturition.',
    examTipsAr:
      'التجويف الحقي أكثر عمقاً وثباتاً من التجويف الأروح. الارتفاق العاني مفصل غضروفي يربط نصفي الحزام الحوضي باطنياً.',
    pinX: 25,
    pinY: 47,
  },
  {
    id: 'femur_knee',
    nameEn: 'Femur, Patella & Knee Cruciate System',
    nameAr: 'الفخذ والرضفة وأربطة الركبة الصليبية',
    categoryEn: 'Appendicular Skeleton',
    categoryAr: 'الهيكل الطرفي',
    count: 4,
    subBonesEn:
      '2 Femur bones (longest & strongest bone) + 2 Patellae (sesamoid kneecaps protecting knee joint)',
    subBonesAr:
      'عظمتا الفخذ (أطول وأقوى عظام الجسم) + عظمتان للرضفة (عظمة صغيرة مستديرة أمام مفصل الركبة لحمايته)',
    jointTypesEn: 'Hip: deep ball-and-socket synovial; Knee: hinge synovial stabilized by 4 ligaments',
    jointTypesAr: 'الفخذ: زلالي واسع الحركة؛ الركبة: زلالي محدود الحركة تثبته ٤ أربطة صليبية وجانبية',
    descriptionEn:
      'Knee joint is stabilized by 4 distinct ligaments: 3 connect Femur to Tibia (ACL, PCL, MCL), while only 1 connects Femur to Fibula (LCL).',
    descriptionAr:
      'مفصل الركبة مفصل زلالي محدود الحركة، تثبته ٤ أربطة قوية: ٣ أربطة تربط الفخذ بالقصبة (صليبي أمامي وخلفي ووسطي)، ورباط واحد فقط يربط الفخذ بالشظية (جانبي).',
    examTipsEn:
      'Crucial exam calculation: 3 ligaments bind Femur to Tibia (ACL, PCL, MCL). Only 1 ligament binds Femur to Fibula (LCL)!',
    examTipsAr:
      'سؤال وزاري متكرر جداً: عدد الأربطة التي تربط الفخذ بالقصبة = ٣ (صليبي أمامي + صليبي خلفي + وسطي). عدد الأربطة التي تربط الفخذ بالشظية = ١ فقط (جانبي).',
    pinX: 23,
    pinY: 60,
  },
  {
    id: 'leg_foot_achilles',
    nameEn: 'Leg, Foot Calcaneus & Achilles Tendon',
    nameAr: 'الساق والقدم وكعب القدم مع وتر أخيل',
    categoryEn: 'Appendicular Skeleton',
    categoryAr: 'الهيكل الطرفي',
    count: 56,
    subBonesEn:
      '2 Tibiae + 2 Fibulae + 2x(7 Tarsals + 5 Metatarsals + 14 Phalanges) = 60 lower limb bones. Calcaneus anchors Achilles tendon.',
    subBonesAr:
      '٢ قصبة (داخلية) + ٢ شظية (خارجية) + ٢× (٧ رسغ قدم + ٥ أمشاط + ١٤ سلامية) = ٦٠ عظمة. عظمة الكعب يتصل بها وتر أخيل.',
    jointTypesEn: 'Hinge synovial knee and ankle joints; plane synovial intertarsal joints',
    jointTypesAr: 'مفاصل زلالية محدودة في الركبة والكاحل، ومفاصل منزلقة بين عظام رسغ القدم',
    descriptionEn:
      'The Calcaneus (heel bone) is the largest tarsal bone. The strong Achilles tendon connects it to the gastrocnemius calf muscle.',
    descriptionAr:
      'عظمة الكعب هي كبرى عظام رسغ القدم، وتتصل بعضلة الساق التوأمية عبر وتر أخيل القوي لنقل قوة الحركة إلى القدم.',
    examTipsEn:
      'Tarsals have 7 bones (unlike carpals which have 8). Achilles tendon rupture causes sudden walking inability and requires urgent surgical intervention if complete.',
    examTipsAr:
      'رسغ القدم يتكون من ٧ عظام (بينما رسغ اليد ٨ عظام). تمزق وتر أخيل الكامل يعالج بالتدخل الجراحي العاجل.',
    pinX: 23,
    pinY: 82,
  },
];

const SKELETON_PRESETS: LabPreset<SkeletonLabParams>[] = [
  {
    id: 'lumbar_heavy_load',
    nameEn: 'Heavy Axial Load & Lumbar Disc Stress',
    nameAr: 'الحمل المحوري العالي وضغط الفقرات القطنية',
    descriptionEn:
      'Apply 1400 N compressive load to evaluate L5-S1 disc deformation and herniation risk.',
    descriptionAr:
      'تطبيق قوة ضغط محورية مقدارها ١٤٠٠ نيوتن لتقييم إجهاد الأقراص القطنية واحتمالية الانزلاق الغضروفي.',
    badge: '🦴 Lumbar Compression',
    params: {
      subTab: 'axial_skeleton',
      axialLoadN: 1400,
      respirationState: 'neutral',
      highlightVertebraType: 'lumbar',
    },
  },
  {
    id: 'socket_cavity_tradeoff',
    nameEn: 'Cavity Depth: Glenoid vs Acetabulum',
    nameAr: 'مقارنة عمق التجاويف: الأروح مقابل الحقي',
    descriptionEn:
      'Compare shoulder mobility vs hip weight-bearing stability and dislocation risk.',
    descriptionAr:
      'مقارنة المفصل الواسع الحركة قليل الثبات (الكتف) بالمفصل عالي الثبات الحامل للوزن (الفخذ).',
    badge: '🔄 Joint Sockets',
    params: {
      subTab: 'appendicular_skeleton',
      cavityType: 'glenoid',
      forearmRotationDeg: 90,
    },
  },
  {
    id: 'knee_cruciate_strain',
    nameEn: 'Knee Flexion & Cruciate Ligament Mechanics',
    nameAr: 'انثناء الركبة وميكانيكا الأربطة الصليبية',
    descriptionEn:
      'Inspect tension distribution across ACL, PCL, MCL, and LCL during 90° knee flexion.',
    descriptionAr:
      'فحص توزيع الشد عبر الأربطة الأربعة: الصليبي الأمامي والخلفي والوسطي والجانبي عند ثني الركبة ٩٠ درجة.',
    badge: '🦵 Knee Ligaments',
    params: {
      subTab: 'joints_biomechanics',
      kneeFlexionDeg: 90,
      highlightLigament: 'acl',
    },
  },
  {
    id: 'achilles_rupture_risk',
    nameEn: 'Achilles Tendon Extreme Tensile Rupture',
    nameAr: 'تمزق وتر أخيل تحت الشد المفاجئ العنيف',
    descriptionEn:
      'Simulate violent gastrocnemius contraction (>3800 N) leading to complete tendon rupture and surgical protocol.',
    descriptionAr:
      'محاكاة تقلص مفاجئ عنيف لعضلة الساق التوأمية يؤدي لتمزق كامل في وتر أخيل وتحديد بروتوكول التدخل الجراحي.',
    badge: '⚡ Achilles Rupture',
    params: {
      subTab: 'joints_biomechanics',
      gastrocForceN: 4100,
      kneeFlexionDeg: 30,
    },
  },
];

const SKELETON_PARAM_SCHEMA: LabParameterSchema<SkeletonLabParams> = {
  subTab: {
    key: 'subTab',
    type: 'select',
    labelEn: 'Laboratory Module',
    labelAr: 'وحدة المختبر',
    defaultValue: 'axial_skeleton',
    options: [
      { value: 'axial_skeleton', labelEn: '1. Axial Skeleton & Spine Biomechanics', labelAr: '١. الهيكل المحوري وميكانيكا العمود الفقري' },
      { value: 'appendicular_skeleton', labelEn: '2. Appendicular Skeleton & Cavities', labelAr: '٢. الهيكل الطرفي ومقارنة التجاويف المفصلية' },
      { value: 'joints_biomechanics', labelEn: '3. Joint Mechanics & Achilles Rupture', labelAr: '٣. ميكانيكا المفاصل والأربطة وتمزق وتر أخيل' },
      { value: 'skeleton_atlas', labelEn: '4. 206-Bone Macroscopic Atlas', labelAr: '٤. أطلس الـ ٢٠٦ عظمة المجهري التفاعلي' },
    ],
    category: 'primary',
  },
  axialLoadN: {
    key: 'axialLoadN',
    type: 'number',
    labelEn: 'Axial Compressive Load',
    labelAr: 'قوة الضغط المحوري على العمود الفقري',
    defaultValue: 600,
    min: 200,
    max: 1600,
    step: 50,
    unit: ' N',
    category: 'primary',
  },
  respirationState: {
    key: 'respirationState',
    type: 'select',
    labelEn: 'Thoracic Respiration Kinematics',
    labelAr: 'حركة القفص الصدري أثناء التنفس',
    defaultValue: 'neutral',
    options: [
      { value: 'inhalation', labelEn: 'Inhalation (Forward & Outward)', labelAr: 'شهيق (حركة الضلوع للأمام والجانبين)' },
      { value: 'neutral', labelEn: 'Neutral Resting State', labelAr: 'وضع الراحة الطبيعي' },
      { value: 'exhalation', labelEn: 'Exhalation (Downward & Inward)', labelAr: 'زفير (حركة الضلوع للداخل ولأسفل)' },
    ],
    category: 'secondary',
  },
  highlightVertebraType: {
    key: 'highlightVertebraType',
    type: 'select',
    labelEn: 'Highlighted Vertebra Group',
    labelAr: 'مجموعة الفقرات المختارة',
    defaultValue: 'lumbar',
    options: [
      { value: 'cervical', labelEn: 'Cervical (7 vertebrae, C1 Atlas, C2 Axis)', labelAr: 'العنقية (٧ فقرات، الأولى أطلس والثانية محور)' },
      { value: 'thoracic', labelEn: 'Thoracic (12 vertebrae, connected to ribs)', labelAr: 'الظهرية (١٢ فقرة متصلة بالضلوع)' },
      { value: 'lumbar', labelEn: 'Lumbar (5 vertebrae, largest body, max load)', labelAr: 'القطنية (٥ فقرات الأكبر حجماً وتحملاً للضغط)' },
      { value: 'sacral_coccygeal', labelEn: 'Sacral & Coccygeal (9 fused vertebrae = 2 bones)', labelAr: 'العجزية والعصعصية (٩ فقرات ملتحمة كعظمتين)' },
    ],
    category: 'secondary',
  },
  cavityType: {
    key: 'cavityType',
    type: 'select',
    labelEn: 'Articular Cavity Comparison',
    labelAr: 'مقارنة التجاويف المفصلية',
    defaultValue: 'glenoid',
    options: [
      { value: 'glenoid', labelEn: 'Glenoid Cavity (Scapula / Shoulder - Wide Mobility)', labelAr: 'التجويف الأروح (لوح الكتف - واسع الحركة قليل الثبات)' },
      { value: 'acetabulum', labelEn: 'Acetabulum Cavity (Hip - Deep Weight-Bearing)', labelAr: 'التجويف الحقي (الحوض - عميق عالي الثبات والاستقرار)' },
    ],
    category: 'primary',
  },
  forearmRotationDeg: {
    key: 'forearmRotationDeg',
    type: 'number',
    labelEn: 'Forearm Pronation / Supination',
    labelAr: 'دوران الكعبرة حول الزند الثابت',
    defaultValue: 0,
    min: 0,
    max: 180,
    step: 5,
    unit: '°',
    category: 'secondary',
  },
  kneeFlexionDeg: {
    key: 'kneeFlexionDeg',
    type: 'number',
    labelEn: 'Knee Articulation Flexion Angle',
    labelAr: 'زاوية انثناء مفصل الركبة',
    defaultValue: 45,
    min: 0,
    max: 140,
    step: 5,
    unit: '°',
    category: 'primary',
  },
  gastrocForceN: {
    key: 'gastrocForceN',
    type: 'number',
    labelEn: 'Gastrocnemius Calf Muscle Tension',
    labelAr: 'قوة انقباض عضلة الساق التوأمية',
    defaultValue: 1800,
    min: 0,
    max: 4500,
    step: 100,
    unit: ' N',
    category: 'primary',
  },
  highlightLigament: {
    key: 'highlightLigament',
    type: 'select',
    labelEn: 'Knee Ligament Selection',
    labelAr: 'تحديد رباط الركبة',
    defaultValue: 'all',
    options: [
      { value: 'all', labelEn: 'All 4 Ligaments (3 Tibia, 1 Fibula)', labelAr: 'كافة الأربطة الأربعة (٣ قصبة، ١ شظية)' },
      { value: 'acl', labelEn: 'Anterior Cruciate (ACL - Tibia)', labelAr: 'الرباط الصليبي الأمامي (فخذ-قصبة)' },
      { value: 'pcl', labelEn: 'Posterior Cruciate (PCL - Tibia)', labelAr: 'الرباط الصليبي الخلفي (فخذ-قصبة)' },
      { value: 'mcl', labelEn: 'Medial Collateral (MCL - Tibia)', labelAr: 'الرباط الوسطي (فخذ-قصبة)' },
      { value: 'lcl', labelEn: 'Lateral Collateral (LCL - Fibula)', labelAr: 'الرباط الجانبي (فخذ-شظية)' },
    ],
    category: 'secondary',
  },
  selectedAtlasPin: {
    key: 'selectedAtlasPin',
    type: 'select',
    labelEn: 'Selected Skeleton Region',
    labelAr: 'المنطقة العظمية المختارة',
    defaultValue: 'skull',
    options: SKELETON_HOTSPOTS.map((h) => ({ value: h.id, labelEn: h.nameEn, labelAr: h.nameAr })),
    category: 'secondary',
  },
};

const SKELETON_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_lumbar_vulnerability',
    titleEn: 'Lumbar Vertebrae Load & Disc Herniation',
    titleAr: 'تحمل الفقرات القطنية والانزلاق الغضروفي',
    scenarioEn:
      'A weightlifter lifts a heavy barbell from the floor without bending their knees, imposing a massive 1500 N axial compressive force onto their spine.',
    scenarioAr:
      'قام رياضي برفع ثقل كبير من الأرض بوضعية خاطئة (انحناء الظهر دون ثني الركبتين)، مما فرض قوة ضغط محورية هائلة مقدارها ١٥٠٠ نيوتن على العمود الفقري.',
    questionEn:
      'Which group of vertebrae experiences the highest mechanical stress, and why are thoracic vertebrae less susceptible to disc herniation than lumbar vertebrae?',
    questionAr:
      'أي مجموعات الفقرات تتعرض لأعلى إجهاد ضغط ميكانيكي، ولماذا تعتبر الفقرات الظهرية أقل عرضة للانزلاق الغضروفي مقارنة بالفقرات القطنية؟',
    optionsEn: [
      'Lumbar vertebrae bear the highest load; thoracic vertebrae are braced rigidly by the thoracic cage and ribs.',
      'Cervical vertebrae bear the highest load because they are the highest in the body.',
      'Sacral vertebrae bear the highest load because they are fused.',
      'Thoracic vertebrae bear the highest load because they connect to 12 rib pairs.',
    ],
    optionsAr: [
      'الفقرات القطنية تتحمل أكبر ضغط لكونها الأكبر حجماً وتواجه البطن، بينما تدعم الضلوع والقفص الصدري الفقرات الظهرية وتمنع انزلاقها.',
      'الفقرات العنقية تتحمل أكبر ضغط لأنها تقع في قمة الجسم.',
      'الفقرات العجزية هي الأكثر عرضة للانزلاق لأنها ملتحمة.',
      'الفقرات الظهرية هي الأكثر عرضة للانزلاق لأنها تتصل بـ ١٢ زوجاً من الضلوع.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Lumbar vertebrae (L1-L5 / #20-#24) have the largest centra to withstand maximum body weight. Unlike thoracic vertebrae, which are supported and stabilized by the ribcage, the lumbar spine lacks skeletal bracing and bears the entire bending torque of the upper torso.',
    scientificExplanationAr:
      'الفقرات القطنية (الأرقام من ٢٠ إلى ٢٤) هي الأكبر حجماً لمواجهة ثقل الجسم وتواجه التجويف البطني بدون دعامة عظمية محيطة. في المقابل، تحظى الفقرات الظهرية بدعامة صلبة من القفص الصدري والضلوع التي تقيد الحركة المفرطة وتمتص عزم الانحناء.',
  },
  {
    id: 'poe_cavity_depth',
    titleEn: 'Glenoid vs Acetabulum Evolutionary Tradeoff',
    titleAr: 'المفاضلة التطورية بين التجويف الأروح والحقي',
    scenarioEn:
      'An orthopedic surgeon compares traumatic injury records between the shoulder joint (ball-and-socket in Glenoid cavity) and the hip joint (ball-and-socket in Acetabulum).',
    scenarioAr:
      'يقارن جراح عظام بين السجلات الطبية لإصابات مفصل الكتف (مفصل زلالي واسع في التجويف الأروح) ومفصل الفخذ (مفصل زلالي واسع في التجويف الحقي).',
    questionEn:
      'Why does the shoulder joint possess significantly greater range of motion (ROM) yet suffers a drastically higher dislocation rate than the hip joint?',
    questionAr:
      'لماذا يتميز مفصل الكتف بمدى حركة أوسع بكثير، لكنه يتعرض للخلع بمعدل أعلى بكثير مقارنة بمفصل الفخذ؟',
    optionsEn: [
      'Glenoid cavity is shallow (~15% depth) favoring 360° circumduction at the expense of stability, while Acetabulum is deep (~55% depth) locking the femur head for weight support.',
      'The humerus head is smaller than the clavicle, causing frequent joint displacement.',
      'The hip joint is a cartilaginous joint, whereas the shoulder is a synovial joint.',
      'The scapula lacks tendons, making the shoulder joint inherently unstable.',
    ],
    optionsAr: [
      'التجويف الأروح غير عميق (~١٥٪ عمق) مما يمنح حرية حركة واسعة ٣٦٠ درجة على حساب الثبات، بينما التجويف الحقي عميق جداً (~٥٥٪ عمق) يستقر فيه رأس الفخذ بإحكام لتحمل وزن الجسم.',
      'رأس عظمة العضد أصغر من الترقوة مما يسبب انزلاق المفصل باستمرار.',
      'مفصل الفخذ مفصل غضروفي عديم الحركة، بينما مفصل الكتف مفصل زلالي.',
      'لوح الكتف لا يحتوي على أوتار مما يجعل المفصل غير مستقر بالمرة.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Joint stability and mobility are inversely related evolutionary tradeoffs. The shallow Glenoid cavity allows the humerus to move freely in all planes, but dislocates easily under relatively small anterior shear force (~450 N). The deep Acetabulum securely encapsulates more than half of the femoral head, demanding over 2200 N to dislocate.',
    scientificExplanationAr:
      'توجد علاقة عكسية بين مدى حركة المفصل ودرجة ثباته. التجويف الأروح غير عميق فيسمح بحركة حرة واسعة للذراع في جميع الاتجاهات، لكنه سهل الخلع بقوة ٤٥٠ نيوتن. بينما التجويف الحقي تجويف عميق يستقر فيه رأس الفخذ بأمان هائل ويدعم وزن الجسم ويحتاج لقوة تفوق ٢٢٠٠ نيوتن لخلعه.',
  },
  {
    id: 'poe_knee_ligaments_achilles',
    titleEn: 'Knee Ligament Attachments & Achilles Protocol',
    titleAr: 'أربطة مفصل الركبة وبروتوكول تمزق وتر أخيل',
    scenarioEn:
      'A footballer suffers a sudden violent twisting tackle of the knee and an explosive calf contraction while sprinting on turf.',
    scenarioAr:
      'تعرض لاعب كرة قدم لالتواء مفاجئ عنيف في مفصل الركبة مع انقباض حاد مفاجئ لعضلة الساق التوأمية أثناء الركض السريع.',
    questionEn:
      'How many distinct ligaments connect the Femur to the Tibia versus the Fibula in the knee, and what is the mandatory medical treatment if the Achilles tendon suffers a complete rupture?',
    questionAr:
      'كم عدد الأربطة التي تربط عظمة الفخذ بالقصبة مقارنة بالشظية في الركبة، وما هو البروتوكول العلاجي الحتمي في حال تمزق وتر أخيل تمزقاً كاملاً؟',
    optionsEn: [
      '3 ligaments connect Femur to Tibia (ACL, PCL, MCL) and 1 connects Femur to Fibula (LCL); Complete Achilles rupture requires URGENT SURGICAL INTERVENTION.',
      '4 ligaments connect Femur to Tibia, 0 to Fibula; Complete Achilles rupture is treated with bed rest only.',
      '2 ligaments connect to Tibia and 2 connect to Fibula; Complete Achilles rupture is treated with oral analgesics only.',
      '1 ligament connects to Tibia and 3 to Fibula; Complete Achilles rupture requires knee replacement surgery.',
    ],
    optionsAr: [
      '٣ أربطة تربط الفخذ بالقصبة (صليبي أمامي، صليبي خلفي، وسطي) ورباط واحد يربط الفخذ بالشظية (جانبي)؛ والتمزق الكامل لوتر أخيل يتطلب تدخلاً جراحياً عاجلاً.',
      '٤ أربطة تربط الفخذ بالقصبة ولا يوجد أربطة للشظية؛ وتمزق وتر أخيل الكامل يعالج بالراحة فقط.',
      'رباطان للقصبة ورباطان للشظية؛ والتمزق الكامل يعالج بمسكنات الآلام فقط.',
      'رباط واحد للقصبة و٣ للشظية؛ والتمزق الكامل يتطلب زراعة مفصل ركبة جديد.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'In the human knee, 4 ligaments stabilize the joint: the Anterior Cruciate, Posterior Cruciate, and Medial Collateral ligaments connect Femur to Tibia, while the Lateral Collateral connects Femur to Fibula. When the Achilles tendon undergoes complete rupture (due to sudden violent contraction or loss of calf elasticity), non-surgical splints fail and urgent surgical suture is required.',
    scientificExplanationAr:
      'يحتوي مفصل الركبة على ٤ أربطة: ٣ أربطة تربط الفخذ بالقصبة (الرباط الصليبي الأمامي والخلفي والوسطي) بينما يربط رباط واحد فقط الفخذ بالشظية (الرباط الجانبي). في حال حدوث تمزق كامل لوتر أخيل، لا تجدي الجبيرة الطبية وحدها ويصبح التدخل الجراحي الفوري لخياطة الوتر المقطوع حتمياً لاستعادة القدرة على المشي.',
  },
];

export const SKELETON_LAB_DEFINITION: LabDefinition<SkeletonLabParams, Record<string, any>> = {
  id: 'skeleton_anatomy_lab',
  subject: 'biology',
  chapterRef: 'Biology Chapter 1: Support and Movement in Humans (الدعامة في الإنسان)',
  titleEn: 'Human Skeleton Anatomy, Joint Biomechanics & 206-Bone Studio',
  titleAr: 'استوديو الهيكل العظمي البشري وميكانيكا المفاصل والأوتار (٢٠٦ عظمة)',
  subtitleEn: 'Axial (80), Appendicular (126), Articular Cavities & Achilles Mechanics',
  subtitleAr: 'الهيكل المحوري (٨٠)، الهيكل الطرفي (١٢٦)، تجاويف المفاصل، وتمزق وتر أخيل',
  taglineEn: 'Comprehensive macroscopic bone atlas, spinal disc stress & cruciate ligaments',
  taglineAr: 'أطلس عظام مجهري عالي الدقة، ضغط الفقرات القطنية، وأربطة الركبة',
  objectives: [
    {
      id: 'obj1',
      textEn: 'Classify the 206 bones of the adult human body into the Axial Skeleton (80) and Appendicular Skeleton (126).',
      textAr: 'تصنيف الـ ٢٠٦ عظمة في جسم الإنسان البالغ إلى الهيكل المحوري (٨٠) والهيكل الطرفي (١٢٦).',
      bloomLevel: 'understand',
    },
    {
      id: 'obj2',
      textEn: 'Analyze intervertebral disc compressive stress and typical vertebra anatomical architecture.',
      textAr: 'دراسة إجهاد الضغط المحوري على الأقراص الغضروفية والتركيب النموذجي للفقرة العظمية.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj3',
      textEn: 'Differentiate between articulating joint classifications, knee cruciate ligament attachments, and Achilles tendon rupture protocols.',
      textAr: 'المقارنة بين أنواع المفاصل، أربطة مفصل الركبة الصليبية، وبروتوكول علاج تمزق وتر أخيل.',
      bloomLevel: 'apply',
    },
  ],
  defaultParams: {
    subTab: 'axial_skeleton',
    axialLoadN: 600,
    respirationState: 'neutral',
    highlightVertebraType: 'lumbar',
    cavityType: 'glenoid',
    forearmRotationDeg: 0,
    kneeFlexionDeg: 45,
    gastrocForceN: 1800,
    highlightLigament: 'all',
    selectedAtlasPin: 'skull',
  },
  paramSchema: SKELETON_PARAM_SCHEMA,
  presets: SKELETON_PRESETS,
  poePrompts: SKELETON_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Axial Compressive Load',
    xLabelAr: 'قوة الضغط المحوري',
    xUnit: 'N',
    yLabelEn: 'Lumbar L5-S1 Disc Stress',
    yLabelAr: 'إجهاد ضغط الفقرة القطنية',
    yUnit: 'MPa',
    recommendedPointsCount: 6,
  },
  supportedInstruments: ['multimeter', 'oscilloscope', 'stopwatch', 'scratchpad'],
};

export const SkeletonAnatomyLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [dmmMode, setDmmMode] = useState<'axial_stress' | 'joint_rom' | 'achilles_strain' | 'bone_count'>('axial_stress');
  const [selectedAtlasPinId, setSelectedAtlasPinId] = useState<string>('skull');

  const selectedAtlasPin = useMemo(() => {
    return SKELETON_HOTSPOTS.find((p) => p.id === selectedAtlasPinId) || SKELETON_HOTSPOTS[0];
  }, [selectedAtlasPinId]);

  const lab = useVirtualLab<SkeletonLabParams, Record<string, any>>({
    definition: SKELETON_LAB_DEFINITION,
  });

  const { params, updateParam } = lab;

  // Compute simulation state from active parameters
  const simState = useMemo((): SkeletonSimState => {
    const discAreaM2 = 0.0014;
    const discStressMpa = Number(((params.axialLoadN / discAreaM2) / 1e6).toFixed(2));
    const herniationRiskPct = Math.min(
      100,
      Math.max(0, Math.round(((discStressMpa - 0.3) / 0.8) * 100))
    );

    let thoracicVolumeExpansionCm3 = 0;
    if (params.respirationState === 'inhalation') {
      thoracicVolumeExpansionCm3 = 550;
    } else if (params.respirationState === 'exhalation') {
      thoracicVolumeExpansionCm3 = -400;
    }

    const isGlenoid = params.cavityType === 'glenoid';
    const socketDepthPct = isGlenoid ? 15 : 55;
    const jointDislocationThresholdN = isGlenoid ? 450 : 2300;
    const jointMobilityRomDeg = isGlenoid ? 360 : 140;

    const tendonAreaM2 = 0.00008;
    const tendonModulusPa = 1.2e9;
    const strainRaw = (params.gastrocForceN / (tendonAreaM2 * tendonModulusPa)) * 100;
    const achillesStrainPct = Number(strainRaw.toFixed(2));

    let achillesStatus: SkeletonSimState['achillesStatus'] = 'normal';
    let clinicalInterventionEn = 'Normal physiological elasticity; no intervention required.';
    let clinicalInterventionAr = 'مرونة فسيولوجية طبيعية ولا تتطلب أي تدخل علاجي.';

    if (params.gastrocForceN >= 3800 || achillesStrainPct >= 8.5) {
      achillesStatus = 'complete_rupture';
      clinicalInterventionEn =
        'COMPLETE TENDON RUPTURE: Inability to walk, intense pain, heavy foot sensation. MANDATORY: Urgent surgical intervention (surgical suture of ruptured tendon).';
      clinicalInterventionAr =
        'تمزق كامل في وتر أخيل: ثقل في حركة القدم وعدم القدرة على المشي وآلام حادة. العلاج الحتمي: التدخل الجراحي الفوري لخياطة الوتر المقطوع.';
    } else if (params.gastrocForceN >= 3100 || achillesStrainPct >= 6.5) {
      achillesStatus = 'partial_tear';
      clinicalInterventionEn =
        'PARTIAL TENDON TEAR: Partial laceration of collagen fibers. Conservative protocol: Anti-inflammatory analgesics + medical immobilization splint + complete rest.';
      clinicalInterventionAr =
        'تمزق غير كامل (جزئي): استخدام أدوية مضادة للالتهاب ومسكنات للآلام + استخدام جبيرة طبية لتثبيت القدم والراحة التامة.';
    } else if (params.gastrocForceN >= 2300 || achillesStrainPct >= 4.5) {
      achillesStatus = 'tendinitis';
      clinicalInterventionEn =
        'ACHILLES TENDINITIS: High tensile fatigue. Protocol: Reduce strenuous athletic loading and apply cryotherapy.';
      clinicalInterventionAr =
        'إجهاد والتهاب في وتر أخيل: تقليل الأحمال البدنية المجهدة وكمادات باردة.';
    }

    return {
      discStressMpa,
      herniationRiskPct,
      thoracicVolumeExpansionCm3,
      socketDepthPct,
      jointDislocationThresholdN,
      jointMobilityRomDeg,
      achillesStrainPct,
      achillesStatus,
      clinicalInterventionEn,
      clinicalInterventionAr,
      selectedBonesCount: selectedAtlasPin.count,
      tibiaLigamentsCount: 3,
      fibulaLigamentsCount: 1,
    };
  }, [params, selectedAtlasPin]);

  // Telemetry metrics
  const telemetry: LabTelemetryMetric[] = useMemo(() => {
    return [
      {
        id: 'total_bones',
        labelEn: 'Total Skeleton Bones',
        labelAr: 'إجمالي عظام الهيكل البشري',
        value: '206',
        status: 'normal',
        descriptionEn: '80 Axial + 126 Appendicular bones in adults',
        descriptionAr: '٨٠ عظمة محورية + ١٢٦ عظمة طرفية في الشخص البالغ',
      },
      {
        id: 'axial_bones',
        labelEn: 'Axial Skeleton Bones',
        labelAr: 'عظام الهيكل المحوري',
        value: '80',
        status: 'normal',
        descriptionEn: 'Skull 29 + Spine 26 + Ribcage 25',
        descriptionAr: 'الجمجمة ٢٩ + العمود الفقري ٢٦ + القفص الصدري ٢٥',
      },
      {
        id: 'appendicular_bones',
        labelEn: 'Appendicular Skeleton Bones',
        labelAr: 'عظام الهيكل الطرفي',
        value: '126',
        status: 'normal',
        descriptionEn: 'Pectoral & Upper 64 + Pelvic & Lower 62',
        descriptionAr: 'الحزام الصدري والطرفان ٦٤ + الحوضي والطرفان ٦٢',
      },
      {
        id: 'disc_pressure',
        labelEn: 'L5-S1 Lumbar Disc Stress',
        labelAr: 'إجهاد ضغط الفقرة القطنية L5',
        value: `${simState.discStressMpa.toFixed(2)} MPa`,
        status: simState.discStressMpa > 0.85 ? 'alert' : simState.discStressMpa > 0.65 ? 'warning' : 'normal',
        descriptionEn: 'Compressive stress on lowest articulated lumbar disc',
        descriptionAr: 'ضغط الوزن المحوري على القرص الغضروفي بين الفقرتين L5-S1',
      },
      {
        id: 'achilles_tension',
        labelEn: 'Achilles Tensile Strain',
        labelAr: 'انفعال شد وتر أخيل',
        value: `${simState.achillesStrainPct.toFixed(2)}%`,
        status:
          simState.achillesStatus === 'complete_rupture'
            ? 'alert'
            : simState.achillesStatus === 'partial_tear'
            ? 'warning'
            : 'normal',
        descriptionEn: 'Tensile deformation relative to resting length',
        descriptionAr: 'نسبة استطالة وتر أخيل تحت شد العضلة التوأمية',
      },
    ];
  }, [simState]);

  // Multimeter reading
  const multimeterReading: DMMReading = useMemo(() => {
    switch (dmmMode) {
      case 'axial_stress':
        return {
          mode: 'voltage_dc',
          value: simState.discStressMpa,
          displayString: `${simState.discStressMpa.toFixed(2)} MPa`,
          secondaryString: isArabic ? 'إجهاد الضغط على أقراص الفقرات القطنية' : 'Lumbar Disc Axial Stress',
          unit: 'MPa',
          voltageDC: simState.discStressMpa,
          voltageAC: 0,
          currentDC: 0,
          resistance: simState.herniationRiskPct,
          continuityBeep: simState.discStressMpa > 0.85,
          isOverload: simState.discStressMpa > 1.0,
        };
      case 'joint_rom':
        return {
          mode: 'resistance',
          value: simState.jointMobilityRomDeg,
          displayString: `${simState.jointMobilityRomDeg}° ROM`,
          secondaryString: isArabic ? `مقاومة الخلع: ${simState.jointDislocationThresholdN} N` : `Dislocation Res: ${simState.jointDislocationThresholdN} N`,
          unit: '°',
          voltageDC: 0,
          voltageAC: 0,
          currentDC: 0,
          resistance: simState.jointDislocationThresholdN,
          continuityBeep: false,
          isOverload: false,
        };
      case 'achilles_strain':
        return {
          mode: 'current_dc',
          value: simState.achillesStrainPct,
          displayString: `${simState.achillesStrainPct.toFixed(2)}%`,
          secondaryString: simState.achillesStatus === 'complete_rupture' ? (isArabic ? 'تمزق كامل (جراحة عاجلة)' : 'Complete Tear (Surgery)') : isArabic ? 'مرونة فسيولوجية' : 'Physiological Elasticity',
          unit: '%',
          voltageDC: 0,
          voltageAC: 0,
          currentDC: simState.achillesStrainPct,
          resistance: params.gastrocForceN,
          continuityBeep: simState.achillesStatus === 'complete_rupture',
          isOverload: simState.achillesStatus === 'complete_rupture',
        };
      case 'bone_count':
        return {
          mode: 'voltage_dc',
          value: simState.selectedBonesCount,
          displayString: `${simState.selectedBonesCount} ${isArabic ? 'عظمة' : 'Bones'}`,
          secondaryString: isArabic ? selectedAtlasPin.nameAr : selectedAtlasPin.nameEn,
          unit: isArabic ? 'عظمة' : 'bones',
          voltageDC: simState.selectedBonesCount,
          voltageAC: 0,
          currentDC: 0,
          resistance: 206,
          continuityBeep: false,
          isOverload: false,
        };
    }
  }, [dmmMode, isArabic, params.gastrocForceN, selectedAtlasPin, simState]);

  // Dual-Trace Oscilloscope waveforms
  const oscilloscopeSignals: [WaveformSignal, WaveformSignal] = useMemo(() => {
    return [
      {
        amplitude: Math.max(0.2, simState.discStressMpa * 2.0),
        frequency: 1.2,
        phaseDeg: 0,
        type: 'sine',
        dcOffset: simState.discStressMpa,
      },
      {
        amplitude: (simState.achillesStrainPct / 10) * 2.5,
        frequency: 1.2,
        phaseDeg: 45,
        type: 'triangle',
        dcOffset: simState.achillesStrainPct / 10,
      },
    ];
  }, [simState]);

  // Canvas Viewport Renderer
  const handleRenderViewport = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, vp: LabViewportState) => {
      ctx.save();
      ctx.clearRect(0, 0, width, height);

      // Background styling
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (isContrast) {
        bgGrad.addColorStop(0, '#000000');
        bgGrad.addColorStop(1, '#050505');
      } else if (isLight) {
        bgGrad.addColorStop(0, '#f8fafc');
        bgGrad.addColorStop(1, '#f1f5f9');
      } else {
        bgGrad.addColorStop(0, '#020617');
        bgGrad.addColorStop(1, '#0f172a');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Grid
      if (vp.gridVisible) {
        ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 1;
        const step = 40 * vp.zoom;
        for (let x = 0; x < width; x += step) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += step) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      ctx.translate(vp.panX, vp.panY);
      ctx.scale(vp.zoom, vp.zoom);

      const currentTab = params.subTab;

      // ==========================================
      // VIEW 1: AXIAL SKELETON & VERTEBRA BIOMECHANICS
      // ==========================================
      if (currentTab === 'axial_skeleton') {
        const cx = width * 0.40;
        const cy = height * 0.50;

        // Draw Compressive Force Vector Arrow at top
        const forcePct = (params.axialLoadN - 200) / 1400;
        const arrowLength = 50 + forcePct * 50;
        ctx.save();
        ctx.strokeStyle = '#ef4444';
        ctx.fillStyle = '#ef4444';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 160 - arrowLength);
        ctx.lineTo(cx, cy - 160);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - 10, cy - 170);
        ctx.lineTo(cx, cy - 158);
        ctx.lineTo(cx + 10, cy - 170);
        ctx.closePath();
        ctx.fill();

        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`F_axial = ${params.axialLoadN} N`, cx, cy - 168 - arrowLength);
        ctx.restore();

        // 5 Lumbar Vertebrae stacked with intervertebral discs
        const vertebraCount = 5;
        const baseSpacing = 52;
        const discCompression = forcePct * 3.5;

        for (let i = 0; i < vertebraCount; i++) {
          const vertY = cy - 120 + i * (baseSpacing - discCompression);
          const vertWidth = 110 + i * 8;
          const vertHeight = 28;

          // Vertebra Bone Body (Centrum)
          ctx.save();
          ctx.shadowColor = 'rgba(244, 63, 94, 0.2)';
          ctx.shadowBlur = 10;
          ctx.fillStyle = isLight ? '#f1f5f9' : '#1e293b';
          ctx.strokeStyle = '#f43f5e';
          ctx.lineWidth = 2.5;

          ctx.beginPath();
          ctx.roundRect(cx - vertWidth / 2, vertY, vertWidth, vertHeight, 6);
          ctx.fill();
          ctx.stroke();

          // Posterior Spinous Process
          ctx.beginPath();
          ctx.moveTo(cx - vertWidth / 2, vertY + vertHeight * 0.4);
          ctx.lineTo(cx - vertWidth / 2 - 38, vertY + vertHeight * 0.7);
          ctx.lineTo(cx - vertWidth / 2, vertY + vertHeight * 0.85);
          ctx.fillStyle = isLight ? '#e2e8f0' : '#0f172a';
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(`L${i + 1} (#${20 + i})`, cx, vertY + 18);
          ctx.restore();

          // Intervertebral Disc
          if (i < vertebraCount - 1) {
            const discY = vertY + vertHeight + 1;
            const discH = Math.max(3, 14 - discCompression * 1.5);
            const discW = vertWidth * 0.85;

            ctx.save();
            const isHerniated = i >= 3 && simState.herniationRiskPct > 65;
            ctx.fillStyle = isHerniated ? '#ef4444' : '#06b6d4';
            ctx.strokeStyle = isHerniated ? '#b91c1c' : '#0891b2';
            ctx.lineWidth = 1.5;

            ctx.beginPath();
            ctx.ellipse(cx, discY + discH / 2, discW / 2, discH / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            if (isHerniated) {
              ctx.beginPath();
              ctx.arc(cx - discW / 2 - 6, discY + discH / 2, 7, 0, Math.PI * 2);
              ctx.fillStyle = '#dc2626';
              ctx.fill();
              ctx.stroke();

              ctx.fillStyle = '#f87171';
              ctx.font = 'bold 9px sans-serif';
              ctx.textAlign = 'right';
              ctx.fillText(
                isArabic ? 'انزلاق غضروفي بروتوكولي' : 'Disc Bulge',
                cx - discW / 2 - 16,
                discY + discH / 2 + 3
              );
            }
            ctx.restore();
          }
        }

        // Typical Vertebra Detail Panel on Right Side
        const panelX = width * 0.64;
        const panelY = height * 0.16;
        const panelW = Math.max(220, width * 0.32);
        const panelH = height * 0.68;

        ctx.save();
        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.92)' : 'rgba(15, 23, 42, 0.9)';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1.5;
        ctx.roundRect(panelX, panelY, panelW, panelH, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#f43f5e';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic ? 'تركيب الفقرة العظمية النموذجية' : 'Typical Vertebra Anatomy',
          panelX + panelW / 2,
          panelY + 24
        );

        // Superior View Schematic
        const sx = panelX + panelW / 2;
        const sy = panelY + panelH * 0.45;

        // Centrum
        ctx.beginPath();
        ctx.arc(sx, sy + 30, 36, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#fce7f3' : '#831843';
        ctx.strokeStyle = '#ec4899';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        // Neural Canal
        ctx.beginPath();
        ctx.arc(sx, sy, 16, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#fef08a' : '#713f12';
        ctx.strokeStyle = '#eab308';
        ctx.fill();
        ctx.stroke();

        // Neural Spine
        ctx.beginPath();
        ctx.moveTo(sx - 10, sy - 14);
        ctx.lineTo(sx, sy - 65);
        ctx.lineTo(sx + 10, sy - 14);
        ctx.fillStyle = isLight ? '#e0e7ff' : '#312e81';
        ctx.strokeStyle = '#6366f1';
        ctx.fill();
        ctx.stroke();

        // Transverse Processes
        ctx.beginPath();
        ctx.moveTo(sx - 16, sy);
        ctx.lineTo(sx - 65, sy + 5);
        ctx.lineTo(sx - 16, sy + 18);
        ctx.fillStyle = isLight ? '#cffafe' : '#164e63';
        ctx.strokeStyle = '#06b6d4';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(sx + 16, sy);
        ctx.lineTo(sx + 65, sy + 5);
        ctx.lineTo(sx + 16, sy + 18);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isArabic ? 'جسم الفقرة (Centrum)' : 'Centrum (Body)', sx, sy + 34);
        ctx.fillText(isArabic ? 'القناة العصبية' : 'Neural Canal', sx, sy + 3);
        ctx.fillText(isArabic ? 'النتوء الشوكي' : 'Spinous Process', sx, sy - 72);
        ctx.fillText(isArabic ? 'نتوء مستعرض' : 'Transverse Proc.', sx - 55, sy + 25);
        ctx.fillText(isArabic ? 'نتوء مستعرض' : 'Transverse Proc.', sx + 55, sy + 25);

        ctx.restore();
      }

      // ==========================================
      // VIEW 2: APPENDICULAR & CAVITIES COMPARISON
      // ==========================================
      else if (currentTab === 'appendicular_skeleton') {
        const isGlenoid = params.cavityType === 'glenoid';
        const cx = width * 0.35;
        const cy = height * 0.48;

        ctx.save();
        ctx.font = 'bold 15px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.fillText(
          isGlenoid
            ? isArabic ? 'التجويف الأروح (لوح الكتف ومفصل الكتف)' : 'Glenoid Cavity (Scapula & Shoulder Joint)'
            : isArabic ? 'التجويف الحقي (الحزام الحوضي ومفصل الفخذ)' : 'Acetabulum Cavity (Pelvic Girdle & Hip Joint)',
          cx,
          cy - 120
        );

        ctx.fillStyle = isLight ? '#e2e8f0' : '#1e293b';
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(cx - 140, cy - 80, 70, 160, 12);
        ctx.fill();
        ctx.stroke();

        const socketDepth = isGlenoid ? 22 : 65;
        ctx.beginPath();
        ctx.arc(cx - 70, cy, 55, -Math.PI / 2, Math.PI / 2, false);
        ctx.lineTo(cx - 70 + socketDepth, cy);
        ctx.closePath();
        ctx.fillStyle = isGlenoid ? 'rgba(244, 63, 94, 0.2)' : 'rgba(99, 102, 241, 0.25)';
        ctx.strokeStyle = isGlenoid ? '#f43f5e' : '#6366f1';
        ctx.lineWidth = 4;
        ctx.fill();
        ctx.stroke();

        const headRadius = 45;
        const headX = cx - 70 + socketDepth * 0.6;
        const headY = cy;

        ctx.beginPath();
        ctx.arc(headX, headY, headRadius, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#fed7aa' : '#7c2d12';
        ctx.strokeStyle = '#f97316';
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.roundRect(headX + headRadius - 5, cy - 14, 110, 28, 6);
        ctx.fillStyle = isLight ? '#f1f5f9' : '#334155';
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isGlenoid ? isArabic ? 'رأس العضد' : 'Humerus Head' : isArabic ? 'رأس الفخذ' : 'Femur Head',
          headX,
          headY + 60
        );

        ctx.font = 'bold 12px monospace';
        ctx.fillStyle = isGlenoid ? '#f43f5e' : '#10b981';
        ctx.fillText(
          isArabic
            ? `قوة مقاومة الخلع: ${simState.jointDislocationThresholdN} نيوتن`
            : `Dislocation Resistance: ${simState.jointDislocationThresholdN} N`,
          cx,
          cy + 105
        );
        ctx.fillText(
          isArabic
            ? `مدى الحركة الفراغية: ${simState.jointMobilityRomDeg} درجة`
            : `Spatial Range of Motion: ${simState.jointMobilityRomDeg}°`,
          cx,
          cy + 125
        );
        ctx.restore();

        // Forearm Pronation / Supination
        const fx = width * 0.72;
        const fy = height * 0.5;
        const rotRad = (params.forearmRotationDeg * Math.PI) / 180;

        ctx.save();
        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.92)' : 'rgba(15, 23, 42, 0.9)';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1.5;
        ctx.roundRect(fx - 120, fy - 140, 240, 280, 14);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 12px sans-serif';
        ctx.fillStyle = '#06b6d4';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic ? 'دوران الكعبرة حول الزند الثابت' : 'Radius Semi-Circular Rotation',
          fx,
          fy - 110
        );

        // Fixed Ulna
        ctx.fillStyle = '#3b82f6';
        ctx.strokeStyle = '#1d4ed8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(fx - 40, fy - 75, 20, 160, 6);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = isLight ? '#1e3a8a' : '#93c5fd';
        ctx.fillText(isArabic ? 'الزند (ثابت)' : 'Ulna (Fixed)', fx - 30, fy + 105);

        // Mobile Radius
        ctx.save();
        ctx.translate(fx + 20, fy - 75);
        ctx.rotate(rotRad * 0.45);
        ctx.fillStyle = '#f59e0b';
        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(-10, 0, 20, 160, 6);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = isLight ? '#78350f' : '#fde68a';
        ctx.fillText(isArabic ? 'الكعبرة (متحركة)' : 'Radius (Rotating)', fx + 30, fy + 105);

        ctx.font = '10px monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(
          `${params.forearmRotationDeg}° ${
            params.forearmRotationDeg > 90 ? (isArabic ? 'كب (Pronation)' : 'Pronation') : (isArabic ? 'بطح (Supination)' : 'Supination')
          }`,
          fx,
          fy + 125
        );
        ctx.restore();
      }

      // ==========================================
      // VIEW 3: JOINT MECHANICS & ACHILLES RUPTURE
      // ==========================================
      else if (currentTab === 'joints_biomechanics') {
        const kx = width * 0.32;
        const ky = height * 0.45;
        const flexRad = (params.kneeFlexionDeg * Math.PI) / 180;

        ctx.save();
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.fillText(
          isArabic ? 'مفصل الركبة والأربطة الأربعة' : 'Knee Articulation & 4 Ligaments',
          kx,
          ky - 120
        );

        ctx.fillStyle = isLight ? '#f1f5f9' : '#334155';
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(kx - 18, ky - 100, 36, 80, 8);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(kx, ky - 15, 34, 18, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#cbd5e1';
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(kx, ky);
        ctx.rotate(flexRad * 0.7);

        ctx.fillStyle = isLight ? '#e2e8f0' : '#1e293b';
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(-22, 10, 32, 110, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#cbd5e1' : '#0f172a';
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(14, 25, 12, 95, 4);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(-12, -2, 12, 16, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // 4 Ligaments
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(kx - 10, ky - 15);
        ctx.lineTo(kx + Math.sin(flexRad) * 20, ky + 25);
        ctx.stroke();

        ctx.strokeStyle = '#3b82f6';
        ctx.beginPath();
        ctx.moveTo(kx + 10, ky - 15);
        ctx.lineTo(kx - 10 + Math.sin(flexRad) * 10, ky + 30);
        ctx.stroke();

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(kx - 30, ky - 20);
        ctx.lineTo(kx - 25 + Math.sin(flexRad) * 15, ky + 45);
        ctx.stroke();

        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(kx + 30, ky - 20);
        ctx.lineTo(kx + 20 + Math.sin(flexRad) * 25, ky + 45);
        ctx.stroke();

        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'left';
        const legY = ky + 115;
        ctx.fillStyle = '#ef4444';
        ctx.fillText('■ ACL: ' + (isArabic ? 'صليبي أمامي (فخذ-قصبة)' : 'Anterior Cruciate (Femur-Tibia)'), kx - 110, legY);
        ctx.fillStyle = '#3b82f6';
        ctx.fillText('■ PCL: ' + (isArabic ? 'صليبي خلفي (فخذ-قصبة)' : 'Posterior Cruciate (Femur-Tibia)'), kx - 110, legY + 16);
        ctx.fillStyle = '#10b981';
        ctx.fillText('■ MCL: ' + (isArabic ? 'رباط وسطي (فخذ-قصبة)' : 'Medial Collateral (Femur-Tibia)'), kx - 110, legY + 32);
        ctx.fillStyle = '#8b5cf6';
        ctx.fillText('■ LCL: ' + (isArabic ? 'رباط جانبي (فخذ-شظية)' : 'Lateral Collateral (Femur-Fibula)'), kx - 110, legY + 48);

        ctx.restore();

        // Achilles Tendon Simulator
        const ax = width * 0.72;
        const ay = height * 0.45;

        ctx.save();
        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.92)' : 'rgba(15, 23, 42, 0.9)';
        ctx.strokeStyle =
          simState.achillesStatus === 'complete_rupture'
            ? '#ef4444'
            : simState.achillesStatus === 'partial_tear'
            ? '#f59e0b'
            : isLight
            ? '#cbd5e1'
            : '#334155';
        ctx.lineWidth = simState.achillesStatus === 'complete_rupture' ? 2.5 : 1.5;
        ctx.roundRect(ax - 130, ay - 140, 260, 300, 14);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 13px sans-serif';
        ctx.fillStyle = '#f43f5e';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic ? 'ميكانيكا وتر أخيل والعضلة التوأمية' : 'Achilles Tendon & Gastrocnemius',
          ax,
          ay - 115
        );

        const isRuptured = simState.achillesStatus === 'complete_rupture';
        ctx.fillStyle = '#dc2626';
        ctx.strokeStyle = '#991b1b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(ax - 20, ay - 60, 24, 42, 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(ax + 20, ay - 60, 24, 42, -0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(isArabic ? 'العضلة التوأمية' : 'Gastrocnemius', ax, ay - 60);

        const tendonY1 = ay - 20;
        const tendonY2 = ay + 65;

        if (isRuptured) {
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 7;
          ctx.beginPath();
          ctx.moveTo(ax, tendonY1);
          ctx.lineTo(ax, tendonY1 + 25);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(ax, tendonY1 + 35, 10, 0, Math.PI * 2);
          ctx.fillStyle = '#b91c1c';
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(ax, tendonY1 + 45);
          ctx.lineTo(ax, tendonY2);
          ctx.stroke();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#ef4444';
          ctx.fillText(isArabic ? '⚡ تمزق كامل!' : '⚡ COMPLETE RUPTURE', ax, ay + 25);
        } else {
          ctx.strokeStyle = simState.achillesStatus === 'partial_tear' ? '#f59e0b' : '#38bdf8';
          ctx.lineWidth = 7;
          ctx.beginPath();
          ctx.moveTo(ax, tendonY1);
          ctx.lineTo(ax, tendonY2);
          ctx.stroke();
        }

        ctx.fillStyle = isLight ? '#f1f5f9' : '#334155';
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(ax - 35, tendonY2, 70, 30, 8);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.fillText(isArabic ? 'عظمة الكعب (Calcaneus)' : 'Calcaneus (Heel)', ax, tendonY2 + 18);

        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = isRuptured ? '#ef4444' : simState.achillesStatus === 'partial_tear' ? '#f59e0b' : '#10b981';
        ctx.fillText(
          isRuptured
            ? isArabic ? 'العلاج: تدخل جراحي فوري لخياطة الوتر' : 'Treatment: Urgent Surgical Intervention'
            : simState.achillesStatus === 'partial_tear'
            ? isArabic ? 'العلاج: جبيرة طبية + مضاد للالتهاب' : 'Treatment: Medical Splint + Anti-inflammatory'
            : isArabic ? 'الحالة: مرونة فسيولوجية طبيعية' : 'Status: Normal Elasticity',
          ax,
          ay + 125
        );
        ctx.restore();
      }

      // ==========================================
      // VIEW 4: SKELETON ATLAS CANVAS SUMMARY OVERLAY
      // ==========================================
      else if (currentTab === 'skeleton_atlas') {
        const cx = width * 0.5;
        const cy = height * 0.5;

        ctx.save();
        ctx.strokeStyle = 'rgba(244, 63, 94, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, 140, 0, Math.PI * 2);
        ctx.stroke();

        ctx.font = '12px monospace';
        ctx.fillStyle = '#f43f5e';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic ? 'فحص الأطلس التشريحي المجهري' : 'High-Resolution Macroscopic Inspection',
          cx,
          30
        );
        ctx.restore();
      }

      ctx.restore();
    },
    [isArabic, isContrast, isLight, params, simState]
  );

  return (
    <VirtualLabShell
      definition={SKELETON_LAB_DEFINITION}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab as any}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      oscilloscopeCh1={oscilloscopeSignals[0]}
      oscilloscopeCh2={oscilloscopeSignals[1]}
      currentXValue={params.axialLoadN}
      currentYValue={simState.discStressMpa}
      onResetSimulation={lab.resetParams}
    >
      <div className="space-y-6">
        {/* Subtab Navigation Bar */}
        <div
          className={`p-2 rounded-2xl border flex flex-wrap items-center justify-between gap-2 shadow-sm ${
            isContrast
              ? 'bg-black border-rose-400'
              : isLight
              ? 'bg-slate-100 border-slate-200'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              {
                id: 'axial_skeleton' as SkeletonSubTab,
                labelEn: '1. Axial Skeleton & Spine',
                labelAr: '١. الهيكل المحوري والعمود الفقري',
                icon: Layers,
              },
              {
                id: 'appendicular_skeleton' as SkeletonSubTab,
                labelEn: '2. Appendicular & Cavities',
                labelAr: '٢. الهيكل الطرفي ومقارنة التجاويف',
                icon: Compass,
              },
              {
                id: 'joints_biomechanics' as SkeletonSubTab,
                labelEn: '3. Joints & Achilles Rupture',
                labelAr: '٣. المفاصل وتمزق وتر أخيل',
                icon: Activity,
              },
              {
                id: 'skeleton_atlas' as SkeletonSubTab,
                labelEn: '4. 206-Bone Interactive Atlas',
                labelAr: '٤. أطلس الـ ٢٠٦ عظمة المجهري',
                icon: ZoomIn,
              },
            ].map((tab) => {
              const isSelected = params.subTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => updateParam('subTab', tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    isSelected
                      ? isContrast
                        ? 'bg-rose-400 text-black border-rose-300 shadow-md font-black'
                        : 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/30'
                      : isContrast
                      ? 'bg-black text-white border-rose-400/40 hover:border-rose-400'
                      : isLight
                      ? 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
                </button>
              );
            })}
          </div>

          {/* DMM Mode Quick Selector */}
          <div className="flex items-center gap-1.5 px-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
              DMM Mode:
            </span>
            {[
              { id: 'axial_stress' as const, label: isArabic ? 'إجهاد الفقرات' : 'Axial Stress' },
              { id: 'joint_rom' as const, label: isArabic ? 'مدى الحركة' : 'Joint ROM' },
              { id: 'achilles_strain' as const, label: isArabic ? 'شد أخيل' : 'Achilles' },
              { id: 'bone_count' as const, label: isArabic ? 'العدد' : 'Bones' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setDmmMode(m.id)}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer border ${
                  dmmMode === m.id
                    ? 'bg-emerald-500 text-black border-emerald-400 font-black'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Render Viewport or Macroscopic Atlas */}
        {params.subTab !== 'skeleton_atlas' ? (
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 overflow-hidden shadow-xl bg-slate-950">
              <CanvasSimulationViewport
                id="skeleton-anatomy-viewport"
                onRender={handleRenderViewport}
                minHeight={520}
                lang={lang}
              />
            </div>

            {/* Direct Interactive Parameter Sliders */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-rose-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{isArabic ? 'لوحة التحكم التفاعلية المباشرة:' : 'Direct Simulation Controls:'}</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {params.subTab === 'axial_skeleton' && `Axial Force = ${params.axialLoadN} N`}
                  {params.subTab === 'appendicular_skeleton' && `Cavity = ${params.cavityType.toUpperCase()} | Rotation = ${params.forearmRotationDeg}°`}
                  {params.subTab === 'joints_biomechanics' && `Knee Flexion = ${params.kneeFlexionDeg}° | Gastroc = ${params.gastrocForceN} N`}
                </span>
              </div>

              {/* Controls for Module 1 */}
              {params.subTab === 'axial_skeleton' && (
                <div className="space-y-3 pt-1">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-300">
                        {isArabic ? 'الحمل المحوري الضاغط على الفقرات القطنية:' : 'Axial Compressive Load on Lumbar Spine:'}
                      </span>
                      <span className="font-mono font-black text-rose-400">{params.axialLoadN} N</span>
                    </div>
                    <input
                      type="range"
                      min={200}
                      max={1600}
                      step={50}
                      value={params.axialLoadN}
                      onChange={(e) => updateParam('axialLoadN', Number(e.target.value))}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs font-bold text-slate-400">{isArabic ? 'حركة التنفس الصدري:' : 'Respiration Kinematics:'}</span>
                    {(['inhalation', 'neutral', 'exhalation'] as const).map((resp) => (
                      <button
                        key={resp}
                        onClick={() => updateParam('respirationState', resp)}
                        className={`px-3 py-1 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          params.respirationState === resp
                            ? 'bg-rose-600 text-white border-rose-500'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {resp === 'inhalation' ? (isArabic ? 'شهيق (للأمام والجانبين)' : 'Inhalation') : resp === 'exhalation' ? (isArabic ? 'زفير' : 'Exhalation') : (isArabic ? 'راحة' : 'Neutral')}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Controls for Module 2 */}
              {params.subTab === 'appendicular_skeleton' && (
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400">{isArabic ? 'نوع التجويف المفصلي:' : 'Articular Socket Cavity:'}</span>
                    <button
                      onClick={() => updateParam('cavityType', 'glenoid')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        params.cavityType === 'glenoid'
                          ? 'bg-rose-600 text-white border-rose-500'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isArabic ? 'التجويف الأروح (الكتف - واسع الحركة)' : 'Glenoid Cavity (Shoulder - 360°)'}
                    </button>
                    <button
                      onClick={() => updateParam('cavityType', 'acetabulum')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        params.cavityType === 'acetabulum'
                          ? 'bg-indigo-600 text-white border-indigo-500'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isArabic ? 'التجويف الحقي (الفخذ - عالي الثبات)' : 'Acetabulum Cavity (Hip - Deep Lock)'}
                    </button>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-300">
                        {isArabic ? 'دوران الكعبرة حول الزند الثابت (Pronation / Supination):' : 'Forearm Rotation (Radius around fixed Ulna):'}
                      </span>
                      <span className="font-mono font-black text-cyan-400">{params.forearmRotationDeg}°</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={180}
                      step={5}
                      value={params.forearmRotationDeg}
                      onChange={(e) => updateParam('forearmRotationDeg', Number(e.target.value))}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Controls for Module 3 */}
              {params.subTab === 'joints_biomechanics' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-300">
                        {isArabic ? 'زاوية انثناء الركبة:' : 'Knee Flexion Angle:'}
                      </span>
                      <span className="font-mono font-black text-emerald-400">{params.kneeFlexionDeg}°</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={140}
                      step={5}
                      value={params.kneeFlexionDeg}
                      onChange={(e) => updateParam('kneeFlexionDeg', Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-300">
                        {isArabic ? 'قوة انقباض العضلة التوأمية (وتر أخيل):' : 'Gastrocnemius Tension (Achilles Tendon):'}
                      </span>
                      <span className="font-mono font-black text-rose-400">{params.gastrocForceN} N</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={4500}
                      step={100}
                      value={params.gastrocForceN}
                      onChange={(e) => updateParam('gastrocForceN', Number(e.target.value))}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* MODULE 4: HIGH-RESOLUTION MACROSCOPIC PHOTOGRAPHIC ATLAS */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-2">
            {/* Left Column: Image with Interactive Hotspot Pins */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div
                className={`relative w-full rounded-2xl overflow-hidden border shadow-xl flex items-center justify-center p-2 group ${
                  isContrast
                    ? 'bg-black border-rose-400'
                    : isLight
                    ? 'bg-slate-900 border-slate-300'
                    : 'bg-black/90 border-slate-800'
                }`}
              >
                <img
                  src={skeletonImg}
                  alt="Human Skeleton Macroscopic Anatomy"
                  className="w-full max-h-[640px] object-contain rounded-xl select-none"
                />

                {/* 12 Interactive Hotspot Pins */}
                {SKELETON_HOTSPOTS.map((pin) => {
                  const isSelected = selectedAtlasPin.id === pin.id;
                  return (
                    <button
                      key={pin.id}
                      onClick={() => setSelectedAtlasPinId(pin.id)}
                      style={{
                        top: `${pin.pinY}%`,
                        left: `${pin.pinX}%`,
                      }}
                      title={isArabic ? pin.nameAr : pin.nameEn}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-black cursor-pointer shadow-xl transition-all duration-200 z-10 ${
                        isSelected
                          ? 'bg-rose-500 text-white ring-4 ring-rose-400/50 scale-110 shadow-rose-500/50'
                          : 'bg-slate-900/90 text-slate-100 hover:bg-rose-600 hover:text-white border border-rose-400/40 backdrop-blur-xs'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-rose-300 animate-ping" />
                      <span>{isArabic ? pin.nameAr : pin.nameEn}</span>
                    </button>
                  );
                })}

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[10px] text-white">
                  <span className="flex items-center gap-1 font-semibold">
                    <ZoomIn className="w-3.5 h-3.5 text-rose-400" />
                    {isArabic
                      ? 'اضغط على النقاط التفاعلية لفحص العظام'
                      : 'Click on interactive hotspot pins to inspect'}
                  </span>
                  <span className="font-mono text-slate-300">
                    {isArabic ? `${toHindiDigits(206)} عظمة في البالغين` : '206 Bones in Adult'}
                  </span>
                </div>
              </div>

              {/* Pin Selection Pills */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 w-full">
                {SKELETON_HOTSPOTS.map((pin) => {
                  const isSelected = selectedAtlasPin.id === pin.id;
                  return (
                    <button
                      key={pin.id}
                      onClick={() => setSelectedAtlasPinId(pin.id)}
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all cursor-pointer border ${
                        isSelected
                          ? isContrast
                            ? 'bg-rose-400 text-black border-rose-300 font-black'
                            : 'bg-rose-600 text-white border-rose-500 font-black shadow-sm'
                          : isContrast
                          ? 'bg-black border-rose-400/60 text-white'
                          : isLight
                          ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {isArabic ? pin.nameAr : pin.nameEn} ({isArabic ? toHindiDigits(pin.count) : pin.count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Detailed Anatomical Breakdown & Ministerial Tips */}
            <div className="lg:col-span-6 space-y-4">
              <div
                className={`p-5 rounded-2xl border ${
                  isContrast
                    ? 'bg-black border-rose-400'
                    : isLight
                    ? 'bg-rose-50/40 border-rose-200'
                    : 'bg-rose-950/20 border-rose-900/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-xs font-black px-2.5 py-1 rounded-lg border uppercase ${
                      isContrast
                        ? 'bg-rose-400 text-black border-rose-300'
                        : isLight
                        ? 'bg-rose-100 text-rose-800 border-rose-300'
                        : 'bg-rose-950/80 text-rose-300 border-rose-800'
                    }`}
                  >
                    {isArabic ? selectedAtlasPin.categoryAr : selectedAtlasPin.categoryEn}
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-500">
                    {isArabic
                      ? `${toHindiDigits(selectedAtlasPin.count)} عظمة معتمدة`
                      : `${selectedAtlasPin.count} Accredited Bones`}
                  </span>
                </div>

                <h3 className="text-xl font-black mt-2">
                  {isArabic ? selectedAtlasPin.nameAr : selectedAtlasPin.nameEn}
                </h3>
                <p className={`text-xs mt-1.5 leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {isArabic ? selectedAtlasPin.descriptionAr : selectedAtlasPin.descriptionEn}
                </p>

                {/* Sub-Bones Breakdown */}
                <div className="mt-4 pt-3 border-t border-rose-200 dark:border-rose-900/50 space-y-2">
                  <h4 className="text-xs font-black flex items-center gap-1.5 text-rose-500">
                    <Info className="w-3.5 h-3.5" />
                    {isArabic ? 'التقسيم والتركيب التشريحي التفصيلي:' : 'Detailed Anatomical Components:'}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {isArabic ? selectedAtlasPin.subBonesAr : selectedAtlasPin.subBonesEn}
                  </p>
                </div>

                {/* Joint Types */}
                <div className="mt-3 pt-3 border-t border-rose-200 dark:border-rose-900/50 space-y-1.5">
                  <h4 className="text-xs font-black flex items-center gap-1.5 text-indigo-400">
                    <Activity className="w-3.5 h-3.5" />
                    {isArabic ? 'نوع المفاصل المتصلة والحركة:' : 'Articulating Joint Types & Mobility:'}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {isArabic ? selectedAtlasPin.jointTypesAr : selectedAtlasPin.jointTypesEn}
                  </p>
                </div>

                {/* Ministerial Exam Tips */}
                <div
                  className={`mt-4 p-3.5 rounded-xl border ${
                    isContrast
                      ? 'bg-black border-yellow-400 text-yellow-300'
                      : isLight
                      ? 'bg-amber-50 border-amber-200 text-amber-950'
                      : 'bg-amber-950/30 border-amber-800/50 text-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-black mb-1">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>
                      {isArabic
                        ? 'ملاحظة ونقاط امتحانية هامة (الثانوية العامة والبكالوريا):'
                        : 'Key Ministerial Exam Target Questions:'}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    {isArabic ? selectedAtlasPin.examTipsAr : selectedAtlasPin.examTipsEn}
                  </p>
                </div>
              </div>

              {/* Quick Axial vs Appendicular Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {isArabic ? 'الهيكل المحوري' : 'Axial Skeleton'}
                  </p>
                  <p className="text-lg font-black text-rose-400 mt-0.5">
                    {isArabic ? `${toHindiDigits(80)} عظمة` : '80 Bones'}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isArabic
                      ? 'الجمجمة (٢٩) + العمود الفقري (٢٦) + القفص الصدري (٢٥)'
                      : 'Skull (29) + Spine (26) + Ribcage (25)'}
                  </p>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {isArabic ? 'الهيكل الطرفي' : 'Appendicular Skeleton'}
                  </p>
                  <p className="text-lg font-black text-indigo-400 mt-0.5">
                    {isArabic ? `${toHindiDigits(126)} عظمة` : '126 Bones'}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isArabic
                      ? 'الحزام الصدري والطرفان (٦٤) + الحزام الحوضي والطرفان (٦٢)'
                      : 'Pectoral & Arms (64) + Pelvic & Legs (62)'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </VirtualLabShell>
  );
};
