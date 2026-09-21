import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import type { ThemeMode } from '../../types/curriculum';
import {
  Activity,
  Layers,
  Search,
  ZoomIn,
  Award,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  Sparkles,
  Shield,
} from 'lucide-react';

// Real Ultra-High-Resolution Scientific Anatomical Images
import brainImg from '../../assets/biology/human_brain_anatomy.jpg';
import heartImg from '../../assets/biology/human_heart_anatomy.jpg';
import skullImg from '../../assets/biology/human_skull_cranial_anatomy.jpg';
import spineImg from '../../assets/biology/human_spine_vertebral_anatomy.jpg';
import kneeImg from '../../assets/biology/human_knee_joint_anatomy.jpg';
import lungsImg from '../../assets/biology/human_lungs_respiratory_anatomy.jpg';
import kidneyImg from '../../assets/biology/human_kidney_anatomy.jpg';
import lymphaticImg from '../../assets/biology/human_lymphatic_immune_anatomy.jpg';
import maleReproImg from '../../assets/biology/human_male_reproductive_anatomy.jpg';
import femaleReproImg from '../../assets/biology/human_female_reproductive_anatomy.jpg';
import muscularImg from '../../assets/biology/human_muscular_system_anatomy.jpg';
import digestiveImg from '../../assets/biology/human_digestive_anatomy.jpg';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
}

export type AnatomySystemCategory =
  | 'all'
  | 'locomotor'
  | 'cardiorespiratory'
  | 'visceral_renal'
  | 'neuroendocrine'
  | 'urogenital'
  | 'immune';

export interface AnatomicalStructure {
  id: string;
  nameAr: string;
  nameEn: string;
  latinName?: string;
  systemCategory: AnatomySystemCategory;
  systemNameAr: string;
  systemNameEn: string;
  imageSrc: string;
  badgeTag: string;
  primaryFunctionAr: string;
  primaryFunctionEn: string;
  anatomicalBreakdownAr: string[];
  anatomicalBreakdownEn: string[];
  ministerialKeyPointsAr: string[];
  ministerialKeyPointsEn: string[];
  examTrapsAr: string;
  examTrapsEn: string;
  funFactsAr: string;
  funFactsEn: string;
}

export const ANATOMICAL_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'brain_cortex',
    nameAr: 'المخ والجهاز العصبي المركزي',
    nameEn: 'Human Brain & Central Nervous System',
    latinName: 'Encephalon / Cerebrum',
    systemCategory: 'neuroendocrine',
    systemNameAr: 'الجهاز العصبي والتحكم الإدراكي',
    systemNameEn: 'Nervous System & Cognitive Control',
    imageSrc: brainImg,
    badgeTag: 'Nervous Control & Reflexes',
    primaryFunctionAr:
      'مركز التحكم الأسمى للإدراك والذاكرة وتنظيم الوظائف الحيوية الإرادية واللاإرادية، وإصدار السيالات العصبية الحركية.',
    primaryFunctionEn:
      'Master command center for cognition, sensory processing, memory, motor coordination, and autonomic life-support reflexes.',
    anatomicalBreakdownAr: [
      'القشرة المخية (Cerebral Cortex): الفص الجبهي (الحركة والنطق)، الجداري (الإحساس)، الصدغي (السمع والذاكرة)، القفوي (البصر).',
      'المخيخ (Cerebellum): الحفاظ على توازن الجسم والتنسيق الدقيق للحركات العضلية بالتعاون مع عضلات الجسم والأذن الداخلية.',
      'جذع المخ (Brainstem): القنطرة والنخاع المستطيل (المراكز الحيوية الحركية للتنفس والقلب وبلع الطعام والقيء).',
      'الحبل الشوكي (Spinal Cord): نقل الإشارات العصبية الحسية والحركية والمسؤول عن الأفعال المنعكسة الشوكية.',
    ],
    anatomicalBreakdownEn: [
      'Cerebral Cortex: Frontal (motor/speech Broca), Parietal (somatosensory), Temporal (auditory/Wernicke), Occipital (visual).',
      'Cerebellum: Body balance, posture maintenance, and precision motor coordination with vestibular apparatus.',
      'Brainstem: Pons and Medulla Oblongata regulating autonomic cardio-respiratory and deglutition/vomiting reflexes.',
      'Spinal Cord: Bidirectional neural highway mediating spinal reflex arcs and sensorimotor conduction.',
    ],
    ministerialKeyPointsAr: [
      'الفص الجبهي يحتوي على مراكز الحركات الإرادية ومراكز النطق والذاكرة.',
      'المخيخ يقع خلف المخ وأسفله، ويتكون من ثلاثة فصوص مسؤولة أساساً عن اتزان الجسم بالتآزر مع العضلات والأذن.',
      'النخاع المستطيل يربط المخ بالحبل الشوكي ويحتوي على المراكز الحيوية (التنفس، القلب، وحركة الأوعية الدموية).',
    ],
    ministerialKeyPointsEn: [
      'Frontal lobe houses voluntary primary motor cortex, memory centers, and Broca speech area.',
      'Cerebellum coordinates with muscle proprioceptors and semicircular canals to maintain somatic equilibrium.',
      'Medulla oblongata bridges brain with spinal cord, containing indispensable cardiovascular and respiratory centers.',
    ],
    examTrapsAr: 'إصابة النخاع المستطيل تؤدي إلى الوفاة الفورية لتوقف مراكز التنفس والدورة الدموية، بينما إصابة المخيخ تسبب اختلال التوازن فقط دون توقف الوظائف الحيوية.',
    examTrapsEn: 'Damage to the medulla oblongata causes immediate death via respiratory arrest, whereas cerebellar lesion results in ataxia without cardiopulmonary failure.',
    funFactsAr: 'يستهلك مخ الإنسان قرابة ٢٠٪ من أكسجين وجلوكوز الجسم رغم أنه لا يتجاوز ٢٪ من إجمالي وزن الجسم.',
    funFactsEn: 'The adult human brain accounts for only ~2% of total body mass yet consumes >20% of resting metabolic oxygen and glucose.',
  },
  {
    id: 'heart_cardiovascular',
    nameAr: 'القلب والأوعية الدموية الكبرى',
    nameEn: 'Human Heart & Major Cardiovascular Vessels',
    latinName: 'Cor / Myocardium',
    systemCategory: 'cardiorespiratory',
    systemNameAr: 'الجهاز الدوري والدورة الدموية',
    systemNameEn: 'Cardiovascular & Hemodynamic System',
    imageSrc: heartImg,
    badgeTag: 'Hemodynamic Myocardial Pump',
    primaryFunctionAr:
      'مضخة عضلية مزدوجة لا إرادية تدفع الدم المؤكسج إلى أنحاء الجسم كافة عبر الأورطي، وتستقبل الدم غير المؤكسج لضخه نحو الرئتين.',
    primaryFunctionEn:
      'Four-chambered muscular myogenic pump propelling deoxygenated blood to pulmonary circulation and oxygenated blood systemically.',
    anatomicalBreakdownAr: [
      'الأذينان (Atria): الأذين الأيمن يستقبل الدم من الوريدين الأجوفين؛ الأذين الأيسر يستقبل الدم المؤكسج من ٤ أوردة رئوية.',
      'البطينان (Ventricles): البطين الأيسر يتميز بجدار عضلي سميك جداً لضخ الدم للجسم، والبطين الأيمن يضخه للرئتين.',
      'الصمامات القلبية (Valves): الصمام ثلاثي الشرفات (Tricuspid)، الصمام الميترالي ثنائي الشرفات (Bicuspid/Mitral)، والصمامات الهلالية (الأورطي والرئوي).',
      'الشرايين التاجية (Coronary Vessels): تغذية عضلة القلب بالأكسجين والجلوكوز لضمان النبض الذاتي المستمر.',
    ],
    anatomicalBreakdownEn: [
      'Atria: Right atrium receives systemic venous return; Left atrium receives freshly oxygenated blood from 4 pulmonary veins.',
      'Ventricles: Left ventricle possesses a massively thickened myocardium to overcome systemic peripheral resistance.',
      'Valves: Tricuspid valve (right AV), Mitral/bicuspid valve (left AV), and Semilunar valves (aortic and pulmonary).',
      'Coronary Vasculature: Left and right coronary arteries providing continuous myocardial oxygenation.',
    ],
    ministerialKeyPointsAr: [
      'جدار البطين الأيسر أسمك بحوالي ٣ مرات من جدار البطين الأيمن لمواجهة المقاومة الوعائية في الدورة الجهازية الكبرى.',
      'العقدة الجيب أذينية (SA Node) هي منشأ النبض الذاتي التلقائي وتعمل كصانع الخطو الطبيعي بمعدل ٧٠ نبضة/دقيقة.',
      'الصمامات تسمح للدم بالمرور في اتجاه واحد من الأذينين إلى البطينين وتمنع ارتداده بفعل الحبال الوترية والعضلات الحليمية.',
    ],
    ministerialKeyPointsEn: [
      'Left ventricular wall is threefold thicker than the right to generate systemic hydrostatic pressure (~120 mmHg).',
      'Sinoatrial node (SA Node) serves as intrinsic cardiac pacemaker generating ~70 autonomous rhythmic action potentials/min.',
      'Atrioventricular valves prevent regurgitation into atria during systole anchored by chordae tendineae and papillary muscles.',
    ],
    examTrapsAr: 'الصمام الميترالي (ثنائي الشرفات) يقع بين الأذين الأيسر والبطين الأيسر (دم مؤكسج)، بينما ثلاثي الشرفات يقع بين الأذين الأيمن والبطين الأيمن (دم غير مؤكسج).',
    examTrapsEn: 'Mitral/bicuspid valve is on the left (oxygenated side), whereas tricuspid is strictly on the right (deoxygenated venous side).',
    funFactsAr: 'ينبض قلب الإنسان الطبيعي أكثر من ١٠٠,٠٠٠ مرة يومياً، ويضخ ما يقارب ٧,٥٠٠ لتر من الدم كل ٢٤ ساعة.',
    funFactsEn: 'The human heart beats >100,000 times per day, pumping over 7,500 liters of blood through thousands of kilometers of vessels.',
  },
  {
    id: 'skull_cranial',
    nameAr: 'الجمجمة وعظام القحف والوجه',
    nameEn: 'Human Skull & Cranial Osteology',
    latinName: 'Cranium & Calvaria',
    systemCategory: 'locomotor',
    systemNameAr: 'الهيكل العظمي المحوري',
    systemNameEn: 'Axial Skeletal System',
    imageSrc: skullImg,
    badgeTag: '29 Cranial Bones & Sutures',
    primaryFunctionAr:
      'حماية المخ وأعضاء الحس المتخصصة (العينان، الأذنان، الأنف)، وتوفير الدعامة العظمية للفكين والمضغ وتثبيت الأسنان.',
    primaryFunctionEn:
      'Rigid bony vault safeguarding the brain, housing specialized sensory organs, and providing dental masticatory architecture.',
    anatomicalBreakdownAr: [
      'الجزء المخي (القحفي الخلفي): يتكون من ٨ عظام تتصل عند حوافها المسننة بمفاصل ليفية عديمة الحركة تتحول مع تقدم العمر لنسيج عظمي.',
      'الثقب الكبير (Foramen Magnum): فتحة واسعة بقاع الجمجمة تسمح باتصال المخ بالحبل الشوكي في القناة العصبية.',
      'الجزء الوجهي (الأمامي): يتكون من ١٤ عظمة تشمل الفك العلوي، الفك السفلي المتحرك، عظام الأنف، ومحاجر العينين.',
      'العظيمات الملحقة (Auditory & Hyoid): ٦ عظيمات سمعية (المطرقة، السندان، الركاب) + عظمة اللامي الوحيدة.',
    ],
    anatomicalBreakdownEn: [
      'Neurocranium: 8 bones interlocking via serrated sutures forming synarthrodial fibrous joints that ossify with age.',
      'Foramen Magnum: Basal aperture transmitting the medulla oblongata into the spinal canal.',
      'Viscerocranium: 14 facial bones supporting facial musculature, orbits, nasal cavities, and articulated mandible.',
      'Associated Bones: 6 middle-ear auditory ossicles (malleus, incus, stapes) plus the floating hyoid bone.',
    ],
    ministerialKeyPointsAr: [
      'إجمالي عظام منطقة الجمجمة وملحقاتها ٢٩ عظمة: ٨ مخية + ١٤ وجهية + ٦ سمعية + ١ عظم اللامي.',
      'عظام الجزء المخي تتصل بمفاصل ليفية غير متحركة؛ ومع تقدم العمر يتحول النسيج الليفي إلى نسيج عظمي قوي.',
      'الفك السفلي هو العظمة الوحيدة المتحركة في الجمجمة للسماح بعمليتي المضغ والكلام.',
    ],
    ministerialKeyPointsEn: [
      'Total skull complex comprises 29 bones: 8 cranial + 14 facial + 6 middle-ear ossicles + 1 hyoid bone.',
      'Cranial sutures are synarthroses: fibrous syndesmoses that gradually fuse through physiological synostosis.',
      'Mandible is the sole mobile bone of the cranium, articulating at the bilateral temporomandibular joint (TMJ).',
    ],
    examTrapsAr: 'عظام الجزء المخي ٨ عظام فقط، والوجهي ١٤، بينما مجموع عظام الرأس بالملحقات ٢٩ عظمة كاملة.',
    examTrapsEn: 'Neurocranium has exactly 8 bones, viscerocranium 14, and complete skull assembly including ossicles is 29.',
    funFactsAr: 'عظمة الركاب (Stapes) داخل الأذن الوسطى هي أصغر عظمة في جسم الإنسان بطول لا يتعدى ٣ مليمترات.',
    funFactsEn: 'The stapes inside the middle ear is the smallest bone in the human body, measuring barely 3 millimeters in length.',
  },
  {
    id: 'vertebral_column',
    nameAr: 'العمود الفقري والفقرات والغضاريف',
    nameEn: 'Vertebral Column & Spinal Biomechanics',
    latinName: 'Columna Vertebralis',
    systemCategory: 'locomotor',
    systemNameAr: 'الهيكل العظمي المحوري',
    systemNameEn: 'Axial Skeletal System',
    imageSrc: spineImg,
    badgeTag: '33 Vertebrae / 26 Bones',
    primaryFunctionAr:
      'الدعامة الرئيسية للجسم، حماية الحبل الشوكي في القناة العصبية، وتحمل ثقل الرأس والجذع مع إتاحة الحركة الانثنائية والمرونة.',
    primaryFunctionEn:
      'Central axial skeletal pillar protecting the spinal cord, bearing cranial-torso loads, and granting multi-axial flexibility.',
    anatomicalBreakdownAr: [
      'الفقرات العنقية (C1–C7): ٧ فقرات متمفصلة متوسطة الحجم (الأولى أطلس والثانية المحور لتسهيل دوران الرأس).',
      'الفقرات الظهرية/الصدرية (T1–T12): ١٢ فقرة متمفصلة أكبر حجماً تتصل بضلوع القفص الصدري الـ ١٢ زوجاً.',
      'الفقرات القطنية (L1–L5): ٥ فقرات متمفصلة وهي الأكبر حجماً في العمود الفقري لتحمل الضغط والوزن المحوري للجسم.',
      'الفقرات العجزية (S1–S5): ٥ فقرات عريضة ومفلطحة ملتحمة معاً لتكوّن عظمة واحدة (عظم العجز).',
      'الفقرات العصعصية (Co1–Co4): ٤ فقرات صغيرة ملتحمة معاً لتكوّن عظمة واحدة (عظم العصعص).',
    ],
    anatomicalBreakdownEn: [
      'Cervical Vertebrae (C1–C7): 7 articulated vertebrae, including C1 Atlas and C2 Axis permitting head rotation.',
      'Thoracic Vertebrae (T1–T12): 12 articulated vertebrae bearing costal facets for articulation with the 12 rib pairs.',
      'Lumbar Vertebrae (L1–L5): 5 robust articulated vertebrae bearing the maximal axial compressive load of the torso.',
      'Sacrum (S1–S5): 5 fused vertebrae forming a single triangular bone articulating with the pelvic ilium.',
      'Coccyx (Co1–Co4): 4 rudimentary fused vertebrae forming a single terminal vestigial bone.',
    ],
    ministerialKeyPointsAr: [
      'العمود الفقري يتكون من ٣٣ فقرة عظمية، تشكّل ٢٦ عظمة تشريحية بسبب التحام العجز (عظمة) والعصعص (عظمة).',
      'الفقرة رقم ٢٠ هي الفقرة القطنية الأولى وهي أكبر فقرات العمود الفقري تحملاً لضغط وزن النصف العلوي للجسم.',
      'الفقرات المتمفصلة عددها ٢٤ فقرة (٧ عنقية + ١٢ ظهرية + ٥ قطنية)، بينما الملتحمة ٩ فقرات (٥ عجزية + ٤ عصعصية).',
    ],
    ministerialKeyPointsEn: [
      'Vertebral column contains 33 individual vertebrae forming 26 distinct anatomical bones in the adult skeleton.',
      'Vertebra #20 corresponds to L1 (First Lumbar), enduring peak axial torque and gravitational mechanical loading.',
      'There are exactly 24 articulated vertebrae separated by intervertebral fibrocartilage discs and 9 fused pelvic vertebrae.',
    ],
    examTrapsAr: 'الفقرة رقم ١٧ هي الفقرة الظهرية العاشرة وتتصل بزوج الضلوع العائم الأول (زوج الضلوع الحادي عشر يتصل بالفقرة الظهرية الحادية عشرة رقم ١٨).',
    examTrapsEn: 'Floating rib pair 1 attaches to thoracic vertebra 11 (spine #18), and floating rib pair 2 attaches to T12 (spine #19).',
    funFactsAr: 'يكون الإنسان أطول بحوالي ١ إلى ٢ سم في الصباح الباكر بسبب تمدد وتشرب الأقراص الغضروفية بين الفقرات بالسوائل أثناء النوم.',
    funFactsEn: 'Humans are ~1-2 cm taller in the morning because gravitational decompression allows intervertebral discs to rehydrate overnight.',
  },
  {
    id: 'knee_joint_ligaments',
    nameAr: 'مفصل الركبة والأربطة الصليبية',
    nameEn: 'Knee Joint & Cruciate Ligaments Architecture',
    latinName: 'Articulatio Genus',
    systemCategory: 'locomotor',
    systemNameAr: 'الجهاز الهيكلي والمفاصل الزلالية',
    systemNameEn: 'Musculoskeletal & Synovial Biomechanics',
    imageSrc: kneeImg,
    badgeTag: 'ACL / PCL / MCL / LCL Biomechanics',
    primaryFunctionAr:
      'مفصل زلالي محدود الحركة يربط عظمة الفخذ بالقصبة والرضفة، ويتحمل وزن الجسم أثناء المشي والقفز بحماية شبكة أربطة ليفية قوية.',
    primaryFunctionEn:
      'Complex weight-bearing synovial hinge joint stabilized by intracapsular cruciate and extracapsular collateral ligaments.',
    anatomicalBreakdownAr: [
      'الرباط الصليبي الأمامي (ACL): يمنع انزلاق عظمة القصبة للأمام بالنسبة للفخذ، ويحافظ على ثبات الركبة أثناء الجري والتوقف.',
      'الرباط الصليبي الخلفي (PCL): أسمك وأقوى من الأمامي ويمنع انزلاق القصبة للخلف بالنسبة للفخذ.',
      'الرباط الوسطي/الإنسي (MCL): يربط الفخذ بالقصبة من الناحية الداخلية ويمنع انحراف الركبة للداخل.',
      'الرباط الجانبي/الوحشي (LCL): يربط عظمة الفخذ بعظمة الشظية من الناحية الخارجية ويمنع انحراف الركبة للخارج.',
      'الغضروفان الهلاليان (Menisci): وسادتان ليفيتان تمتصان الصدمات الميكانيكية وتقللان الاحتكاك بين لقمتي الفخذ وهضبة القصبة.',
    ],
    anatomicalBreakdownEn: [
      'Anterior Cruciate Ligament (ACL): Resists anterior tibial translation and rotational instability.',
      'Posterior Cruciate Ligament (PCL): Stoutest knee ligament preventing posterior displacement of the tibia on the femur.',
      'Medial Collateral Ligament (MCL): Broad extracapsular band stabilizing the medial aspect against valgus stress.',
      'Lateral Collateral Ligament (LCL): Cord-like band connecting lateral femoral epicondyle to the fibular head.',
      'Menisci (Medial & Lateral): Crescentic fibrocartilage pads shock-absorbing and dissipating contact stresses.',
    ],
    ministerialKeyPointsAr: [
      'يوجد في مفصل الركبة ٤ أربطة رئيسية (٣ تربط الفخذ بالقصبة: صليبي أمامي، صليبي خلفي، رباط وسطي)، ورباط واحد يربط الفخذ بالشظية (الرباط الجانبي).',
      'عظمة الشظية لا تتصل بالأربطة الصليبية على الإطلاق، بل تتصل فقط بالرباط الجانبي الوحشي.',
      'المفصل زلالي محدود الحركة يسمح بالحركة في اتجاه واحد فقط (الثني والبسط).',
    ],
    ministerialKeyPointsEn: [
      'Exactly 3 ligaments connect femur to tibia (ACL, PCL, MCL), while only 1 ligament connects femur to fibula (LCL).',
      'The fibula has zero connection to the cruciate ligaments; only the tibia articulates within the cruciate complex.',
      'Knee is a modified synovial hinge joint allowing planar flexion and extension with minimal axial terminal rotation.',
    ],
    examTrapsAr: 'عدد الأربطة التي تربط الفخذ بالقصبة = ٣ أربطة، بينما عدد الأربطة التي تربط الفخذ بالشظية = رباط واحد فقط.',
    examTrapsEn: 'Number of ligaments connecting femur to tibia is 3; number connecting femur to fibula is strictly 1 (LCL).',
    funFactsAr: 'يتحمل مفصل الركبة أثناء النزول على الدرج قوة ميكانيكية تعادل ٤ إلى ٥ أضعاف وزن جسم الإنسان بالكامل.',
    funFactsEn: 'Descending stairs subjects the human knee joint to peak compressive forces equal to 4-5 times total body weight.',
  },
  {
    id: 'respiratory_lungs',
    nameAr: 'الرئتان والشعب الهوائية وتبادل الغازات',
    nameEn: 'Human Respiratory System & Alveoli',
    latinName: 'Pulmones & Arbor Bronchialis',
    systemCategory: 'cardiorespiratory',
    systemNameAr: 'الجهاز التنفسي والتبادل الغازي',
    systemNameEn: 'Respiratory & Alveolar Gas Exchange',
    imageSrc: lungsImg,
    badgeTag: '300 Million Alveoli Gas Exchange',
    primaryFunctionAr:
      'استخلاص الأكسجين الجوي ونقله إلى مجرى الدم وتخليص الجسم من ثاني أكسيد الكربون، وضبط التوازن الحمضي القاعدي.',
    primaryFunctionEn:
      'Ventilatory system conducting atmospheric air to 300 million alveoli for passive pulmonary capillary gas exchange.',
    anatomicalBreakdownAr: [
      'القصبة الهوائية (Trachea): أنبوبة تدعمها حلقات غضروفية غير كاملة الاستدارة (على شكل C) لتبقى مفتوحة باستمرار، ومبطنة بأهداب تطرد الإفرازات.',
      'الرئة اليمنى (Right Lung): تتكون من ٣ فصوص (علوي، أوسط، سفلي) وتفصل بينها شقوق مائلة وأفقية.',
      'الرئة اليسرى (Left Lung): تتكون من فصين فقط (علوي وسفلي) وتتميز بوجود الثلمة القلبية (Cardiac Notch) لاستقرار قمة القلب.',
      'الحويصلات الهوائية (Alveoli): أكياس مجهرية رقيقة الجدران ومحاطة بشبكة شعيرات دموية غزيرة لإتمام التبادل الغازي بالانتشار البسيط.',
    ],
    anatomicalBreakdownEn: [
      'Trachea: Reinforced with C-shaped hyaline cartilage rings to prevent collapse, lined with ciliated pseudostratified epithelium.',
      'Right Lung: Tri-lobed (superior, middle, inferior) divided by horizontal and oblique fissures.',
      'Left Lung: Bi-lobed with cardiac notch accommodating the anterior displacement of the cardiac apex.',
      'Alveoli: Thin-walled terminal respiratory sacs surrounded by capillary plexuses facilitating O2/CO2 Fickian diffusion.',
    ],
    ministerialKeyPointsAr: [
      'الحلقات الغضروفية في القصبة الهوائية غير كاملة من الخلف لتسمح بتمدد المريء أثناء بلع لقمة الطعام دون عائق.',
      'يحتوي الجدار الحويصلي على سائل يرطب الهواء ويحتوي على مادة تقلل التوتر السطحي لمنع انكماش الحويصلات عند الزفير.',
      'ينتقل الأكسجين من الحويصلة إلى الشعيرة الدموية بالانتشار البسيط اعتماداً على فارق الضغط الجزيئي للغازات.',
    ],
    ministerialKeyPointsEn: [
      'Incomplete posterior tracheal cartilage allows esophageal distension during bolus swallowing.',
      'Pulmonary surfactant synthesized by Type II pneumocytes prevents alveolar collapse at end-expiration by lowering surface tension.',
      'Gas transport across the respiratory membrane is driven strictly by passive diffusion following partial pressure gradients.',
    ],
    examTrapsAr: 'الرئة اليمنى أكبر حجماً ولها ٣ فصوص، بينما الرئة اليسرى أصغر ولها فصان فقط بسبب وجود تجويف القلب المائل لليسار.',
    examTrapsEn: 'Right lung has 3 lobes; left lung has only 2 lobes due to space occupied by the asymmetric cardiac notch.',
    funFactsAr: 'لو تم فرد مساحة سطح جميع الحويصلات الهوائية في رئتي الإنسان لغطت مساحة تقارب ٧٠ إلى ١٠٠ متر مربع (بحجم ملعب تنس كامل).',
    funFactsEn: 'The combined internal alveolar surface area of both human lungs spans ~70-100 square meters—equivalent to a tennis court.',
  },
  {
    id: 'kidney_nephron',
    nameAr: 'الكلية وتشريح النفرون ومحفظة بومان',
    nameEn: 'Human Kidney & Functional Nephron Unit',
    latinName: 'Ren & Nephron',
    systemCategory: 'visceral_renal',
    systemNameAr: 'الجهاز البولي والإخراجي',
    systemNameEn: 'Renal & Excretory Homeostasis',
    imageSrc: kidneyImg,
    badgeTag: '1 Million Nephrons / Kidney',
    primaryFunctionAr:
      'تنقية بلازما الدم من الفضلات النيتروجينية واليوريا، إعادة امتصاص المواد الحيوية والجلوكوز، وتنظيم كمية الماء والأملاح وضغط الدم.',
    primaryFunctionEn:
      'Filtration of plasma nitrogenous metabolites, selective tubular reabsorption, and systemic osmoregulatory balance.',
    anatomicalBreakdownAr: [
      'القشرة الكلوية (Renal Cortex): الطبقة الخارجية وتحتوي على محافظ بومان والأنابيب الملتفة القريبة والبعيدة.',
      'النخاع الكلوي (Renal Medulla): المنطقة الداخلية وتحتوي على أهرامات كلوية وثنيات هنلي والأنابيب الجامعة.',
      'محفظة بومان والجميلة (Bowman Capsule & Glomerulus): ترشيح بلازما الدم ميكانيكياً تحت ضغط الدم العالي (ترشيح فائق).',
      'ثنية هنلي (Loop of Henle): على شكل حرف U تمتد في النخاع وتلعب دوراً محورياً في تركيز البول واستعادة الماء والأملاح بتأثير هرمون ADH.',
    ],
    anatomicalBreakdownEn: [
      'Renal Cortex: Superficial parenchyma housing renal corpuscles (glomeruli + Bowman capsules) and convoluted tubules.',
      'Renal Medulla: Deep zone consisting of triangular renal pyramids containing loops of Henle and medullary collecting ducts.',
      'Glomerular Filtration: Fenestrated capillaries driving passive ultrafiltration of plasma devoid of cellular elements or large proteins.',
      'Loop of Henle: Countercurrent multiplier establishing corticomedullary osmotic gradient regulated by vasopressin (ADH).',
    ],
    ministerialKeyPointsAr: [
      'الترشيح يحدث في محفظة بومان لجميع مكونات البلازما ما عدا خلايا الدم وبروتينات البلازما الكبيرة (كالألبومين والفيبرينوجين) لكبر حجمها.',
      'إعادة الامتصاص الاختياري تتم بنشاط عبر الأنابيب الكلوية وثنية هنلي لاستعادة ١٠٠٪ من الجلوكوز وأغلب الماء والأملاح إلى الدم.',
      'هرمون المضاد لإدرار البول (ADH) يُفرز من الفص الخلفي للغدة النخامية ليزيد نفاذية الأنبوبة الجامعة للماء فيقل حجم البول ويزيد تركيزه.',
    ],
    ministerialKeyPointsEn: [
      'Glomerular filtration captures small solutes, ions, and water, but excludes red blood cells and bulky plasma proteins.',
      'Selective tubular reabsorption recovers 100% of filtered glucose and amino acids via active cotransporters.',
      'Antidiuretic Hormone (ADH) from neurohypophysis acts on aquaporin channels of collecting ducts to concentrate urine.',
    ],
    examTrapsAr: 'ظهور الجلوكوز أو البروتينات في البول يدل على خلل مرضي (كالسكري أو تلف غشاء الترشيح الكلوي)؛ فالجلوكوز يُعاد امتصاصه بالكامل طبيعياً.',
    examTrapsEn: 'Glucosuria or proteinuria signifies pathological pathology (diabetes mellitus or nephrotic damage); normal urine has 0% glucose.',
    funFactsAr: 'ترشح كليتا الإنسان حوالي ١٨٠ لتراً من السوائل يومياً، ويُعاد امتصاص أكثر من ٩٩٪ منها لإنتاج ما بين ١ إلى ١.٥ لتر فقط من البول.',
    funFactsEn: 'Human kidneys filter ~180 liters of fluid daily; >99% is selectively reabsorbed, producing only 1 to 1.5 liters of urine.',
  },
  {
    id: 'lymphatic_immune',
    nameAr: 'الجهاز اللمفاوي والأعضاء الليمفاوية',
    nameEn: 'Human Lymphatic & Primary/Secondary Lymphoid Organs',
    latinName: 'Systema Lymphaticum',
    systemCategory: 'immune',
    systemNameAr: 'الجهاز المناعي واللمفاوي',
    systemNameEn: 'Immune & Lymphatic Defense Network',
    imageSrc: lymphaticImg,
    badgeTag: 'Primary & Secondary Lymphoid Organs',
    primaryFunctionAr:
      'خط الدفاع الحيوي المسؤول عن إنتاج ونضج وتمايز الخلايا الليمفاوية وتصفية اللمف والدم من الميكروبات والخلايا المسنة والأورام.',
    primaryFunctionEn:
      'Defensive anatomical network responsible for lymphopoiesis, lymphocyte education, immune surveillance, and fluid balance.',
    anatomicalBreakdownAr: [
      'نخاع العظام الأحمر (Red Bone Marrow): العضو الليمفاوي الأولي المسؤول عن تصنيع جميع خلايا الدم الحمراء والبيضاء والصفائح، ونضج الخلايا البائية B والقاتلة الطبيعية NK.',
      'الغدة التيموسية (Thymus Gland): تقع أعلى القلب وخلف القص؛ تفرز هرمون التيموسين الذي يحفز نضج الخلايا التائية T وتمايزها إلى أنواعها (TH, TC, TS).',
      'الطحال (Spleen): أكبر الأعضاء الليمفاوية، يقع أعلى يسار البطن؛ مقبرة خلايا الدم الحمراء المسنة ويحتوي على خلايا بلعمية كبيرة وليمفاوية.',
      'العقد الليمفاوية (Lymph Nodes): مصافي حيوية تنتشر على طول الأوعية الليمفاوية (العنق، الإبطين، الفخذ) لتصفية اللمف من الأجسام الغريبة.',
      'بقع باير واللوزتان (Peyer Patches & Tonsils): تجمعات ليمفاوية في الغشاء المخاطي للأمعاء الدقيقة والفم لمنع تسلل ميكروبات الغذاء والتنفس.',
    ],
    anatomicalBreakdownEn: [
      'Red Bone Marrow: Primary lymphoid organ producing all hematologic lines and mediating B-cell and NK-cell maturation.',
      'Thymus Gland: Mediastinal organ secreting thymosin hormone driving naive thymocytes to mature into helper (CD4+) and cytotoxic (CD8+) T cells.',
      'Spleen: Largest secondary lymphoid organ filtering circulating blood, clearing senescent erythrocytes, and housing splenic macrophages.',
      'Lymph Nodes: Encapsulated filtering stations arrayed along lymphatic conduits containing follicular B-cell and paracortical T-cell zones.',
      'Peyer Patches & Tonsils: Mucosa-Associated Lymphoid Tissue (MALT) guarding oral and gastrointestinal mucosal gateways.',
    ],
    ministerialKeyPointsAr: [
      'الأعضاء الليمفاوية الأولية هي نخاع العظام والغدة التيموسية (مكان إنتاج ونضج)، بينما الثانوية هي الطحال والعقد واللوزتان (مكان الاستقرار ومواجهة الميكروب).',
      'هرمون التيموسين يُفرز من الغدة التيموسية ويعمل داخل نفس الغدة لتحفيز نضج الخلايا التائية (تأثير موضعي).',
      'الوعاء اللمفاوي الوارد ينقل اللمف المحمّل بالميكروبات إلى العقدة الليمفاوية، بينما الوعاء الصادر ينقله بعد تنقيته.',
    ],
    ministerialKeyPointsEn: [
      'Primary lymphoid organs are Bone Marrow & Thymus (generative sites); Secondary organs are Spleen & Nodes (antigen-challenge sites).',
      'Thymosin hormone acts locally within the thymus stroma to direct T-cell receptor expression and positive/negative selection.',
      'Afferent lymphatic vessels convey antigen-laden lymph into the node sinus; efferent vessels exit at the hilum.',
    ],
    examTrapsAr: 'الخلايا التائية (T cells) تتكون في نخاع العظام كخلايا غير ناضجة وتهاجر إلى الغدة التيموسية لتنضج وتتمايز هناك، بينما الخلايا البائية تنضج في نخاع العظام نفسه.',
    examTrapsEn: 'T-cells originate in bone marrow as progenitor cells and migrate to the thymus for maturation; B-cells mature directly in bone marrow.',
    funFactsAr: 'ينساب في الأوعية اللمفاوية يومياً حوالي ٢ إلى ٣ لترات من السائل اللمفاوي النقي المعاد إلى الدورة الدموية عبر الوريد الأجوف العلوي.',
    funFactsEn: 'The thoracic duct returns ~2 to 3 liters of filtered lymph daily into the left subclavian vein back into venous circulation.',
  },
  {
    id: 'male_reproductive',
    nameAr: 'الجهاز التناسلي الذكري ومراحل تكوين الحيوانات المنوية',
    nameEn: 'Human Male Reproductive System & Spermatogenesis',
    latinName: 'Systema Genitale Masculinum',
    systemCategory: 'urogenital',
    systemNameAr: 'الجهاز التناسلي والتكاثر',
    systemNameEn: 'Reproduction & Gametogenesis',
    imageSrc: maleReproImg,
    badgeTag: 'Testicular Spermatogenesis Architecture',
    primaryFunctionAr:
      'إنتاج الحيوانات المنوية والأمشاج الذكرية في الأنيبيبات المنوية، وإفراز هرمون التستوستيرون المسؤول عن الصفات الذكرية الثانوية.',
    primaryFunctionEn:
      'Production of haploid spermatozoa, seminal fluid secretion, and endocrine synthesis of androgens (testosterone).',
    anatomicalBreakdownAr: [
      'الخصيتان وكيس الصفن (Testes & Scrotum): تقعان خارج تجويف البطن للحفاظ على حرارة أقل بدرجتين إلى ثلاث درجات مئوية تناسب نضج الحيوانات المنوية.',
      'الخلايا البينية وخلايا سرتولي (Leydig & Sertoli Cells): سرتولي تفرز سائلاً يغذي الحيوانات المنوية داخل الخصية؛ البينية تفرز التستوستيرون بتأثير LH.',
      'البربخ والوعاء الناقل (Epididymis & Vas Deferens): البربخ يخزن الحيوانات المنوية ويكمل نضجها؛ والوعاء الناقل ينقلها لقناة مجرى البول.',
      'الغدد الملحقة (Seminal, Prostate, Cowper): الحويصلتان المنويتان تفرزان سكر الفركتوز لتغذية الحيوانات المنوية خارج الخصية؛ والبروستاتا وكوبر تفرزان سائلاً قلوياً لمعادلة حموضة مجرى البول.',
    ],
    anatomicalBreakdownEn: [
      'Testes & Scrotum: Suspended extra-abdominally to maintain optimal scrotal temperature 2-3°C below core body temperature.',
      'Leydig & Sertoli Cells: Sertoli cells nourish developing spermatids and form blood-testis barrier; Leydig cells synthesize testosterone.',
      'Epididymis & Vas Deferens: Convoluted duct for sperm maturation and motility acquisition leading into muscular vas deferens.',
      'Accessory Sex Glands: Seminal vesicles secrete fructose-rich fluid; prostate and Cowper glands produce alkaline neutralizing fluid.',
    ],
    ministerialKeyPointsAr: [
      'تتغذى الحيوانات المنوية داخل الخصية بواسطة خلايا سرتولي، وتتغذى خارج الخصية في السائل المنوي بواسطة إفراز الحويصلتين المنويتين (سكر الفركتوز).',
      'الحيوانات المنوية لا تستخدم الجلوكوز مباشرة لتفادي الاعتماد على هرمون الإنسولين لمروره إلى داخل الخلية المنوية.',
      'السائل القلوي من البروستاتا وغدتي كوبر يمر في مجرى البول قبل مرور الحيوانات المنوية لمعادلة الوسط الحمضي الناتج عن البول وحماية الأمشاج.',
    ],
    ministerialKeyPointsEn: [
      'Spermatozoa are nourished intratesticularly by Sertoli cells and extratesticularly in semen by fructose from seminal vesicles.',
      'Fructose is utilized for sperm motility rather than glucose because fructose entry does not require insulin facilitation.',
      'Alkaline secretions from prostate and bulbourethral glands neutralize urethral acidity prior to ejaculation.',
    ],
    examTrapsAr: 'إذا تعطلت الحويصلتان المنويتان تموت الحيوانات المنوية خارج الخصية لنفاذ الغذاء (الفركتوز)، وإذا استؤصلت البروستاتا وغدتا كوبر تموت لحموضة مجرى البول.',
    examTrapsEn: 'Failure of seminal vesicles starves sperm of fructose; dysfunction of prostate/Cowper causes sperm death via urethral acidity.',
    funFactsAr: 'تنتج خصيتا الرجل السليم أكثر من ١٠٠ إلى ٢٠٠ مليون حيوان منوي يومياً في مسار أنيبيبات منوية يبلغ طولها الكلي مجتمعة مئات الأمتار.',
    funFactsEn: 'Healthy human testes produce ~100 to 200 million sperm cells daily within seminiferous tubules that span hundreds of meters unfolded.',
  },
  {
    id: 'female_reproductive',
    nameAr: 'الجهاز التناسلي الأنثوي ودورة المبيض والرحم',
    nameEn: 'Human Female Reproductive System & Uterine-Ovarian Axis',
    latinName: 'Systema Genitale Femininum',
    systemCategory: 'urogenital',
    systemNameAr: 'الجهاز التناسلي والتكاثر',
    systemNameEn: 'Reproduction & Endometrial Cycle',
    imageSrc: femaleReproImg,
    badgeTag: 'Coronal Uterine & Ovarian Axis',
    primaryFunctionAr:
      'إنتاج البويضات شهرياً، إفراز هرمونات الأنوثة (الإستروجين والبروجستيرون)، تهيئة بطانة الرحم للحمل واستقبال الجنين وتغذيته.',
    primaryFunctionEn:
      'Oogenesis, monthly ovulatory cycle, gonadal steroidogenesis (estrogens & progesterone), and gestational fetal nurturing.',
    anatomicalBreakdownAr: [
      'المبيضان (Ovaries): بحجم لوزة مقشورة؛ يحتويان على آلاف البويضات في مراحل نمو مختلفة داخل حويصلات جراف.',
      'قناتا فالوب (Fallopian Tubes): تبدأ كل منهما بقمع ذي زوائد إصبعية لالتقاط البويضة وتتحرك بداخلها أهداب لدفع البويضة المخصبة نحو الرحم.',
      'الرحم (Uterus): عضو عضلي كمثري الشكل ذو جدار عضلي سميك (Myometrium) وبطانة غدية دموية متجددة (Endometrium).',
      'عنق الرحم والمهبل (Cervix & Vagina): قناة عضلية مرنة ذات ثنيات قابلة للتمدد أثناء الولادة وتفرز مخاطاً مرطباً.',
    ],
    anatomicalBreakdownEn: [
      'Ovaries: Bilateral female gonads hosting primordial, secondary, and mature Graafian follicles and ovulating single secondary oocyte.',
      'Fallopian Tubes: Muscular conduits with fimbriated infundibulum capturing ovum, where fertilization canonically transpires in the ampulla.',
      'Uterus: Pear-shaped organ with thick smooth-muscle myometrium and hormone-responsive secretory endometrium.',
      'Cervix & Vagina: Fibromuscular canal with elastic rugae facilitating copulation and serving as the dynamic birth canal.',
    ],
    ministerialKeyPointsAr: [
      'الإخصاب يحدث طبيعياً في الثلث الأول (الأمبولة) من قناة فالوب، بينما غرس التوتية (Blastocyst) يحدث في بطانة الرحم في نهاية الأسبوع الأول.',
      'هرمون الإستروجين (من حويصلة جراف) يعمل على إنماء بطانة الرحم، وهرمون البروجستيرون (من الجسم الأصفر والمشيمة) يعمل على زيادة سمكها وإمدادها الدموي.',
      'الأهداب المبطنة لقناة فالوب تتحرك في اتجاه واحد فقط من القمع نحو الرحم لدفع البويضة المخصبة.',
    ],
    ministerialKeyPointsEn: [
      'Fertilization takes place in the lateral third (ampulla) of the Fallopian tube; implantation occurs in the endometrium by day 7.',
      'Estrogen (from Graafian follicle) drives endometrial proliferation; progesterone (from corpus luteum) promotes secretory vascularity.',
      'Ciliated tubal epithelium beats synchronously toward the uterine cavity to propel the cleavage-stage blastocyst.',
    ],
    examTrapsAr: 'مكان الإخصاب هو قناة فالوب (الثلث الأول) وليس الرحم؛ أما مكان استقرار وتغذية الجنين فهو بطانة الرحم.',
    examTrapsEn: 'Fertilization occurs in the ampulla of the fallopian tube, NOT inside the uterine cavity.',
    funFactsAr: 'أثناء الحمل يزداد حجم تجويف الرحم إلى أكثر من ٥٠٠ ضعف حجمه الطبيعي لاستيعاب الجنين والمشيمة والسائل السلوي.',
    funFactsEn: 'During full-term gestation, the human uterus expands to >500 times its pre-pregnancy volumetric capacity.',
  },
  {
    id: 'muscular_system',
    nameAr: 'الجهاز العضلي والعضلات الهيكلية',
    nameEn: 'Human Muscular System & Locomotor Anatomy',
    latinName: 'Systema Musculare',
    systemCategory: 'locomotor',
    systemNameAr: 'الجهاز العضلي والحركي',
    systemNameEn: 'Musculoskeletal & Motor Physiology',
    imageSrc: muscularImg,
    badgeTag: '620+ Skeletal Muscles / Motor Units',
    primaryFunctionAr:
      'إحداث الحركة الكلية والموضعية، الحفاظ على انتصاب القامة والاتزان بفضل انقباض عضلات الرقبة والجذع والأطراف السفلية، ودفع الدم في الأوردة.',
    primaryFunctionEn:
      'Locomotion, posture maintenance via tone of neck and axial muscles, joint stabilization, and venous blood return pumping.',
    anatomicalBreakdownAr: [
      'عضلات الطرف العلوي: العضلة ذات الرأسين العضدية (Biceps) لثني الساعد، والعضلة ثلاثية الرؤوس (Triceps) لبسطه (عمل عضلي متضاد).',
      'عضلات الجذع والصدر: العضلة الصدرية الكبرى، عضلات البطن المستقيمة والمائلة لحماية الأحشاء والمساعدة في التنفس.',
      'عضلات الطرف السفلي: العضلة ذات الأربع رؤوس الفخذية (Quadriceps)، العضلات المأبضية الخلفية، وعضلة السمانة (Gastrocnemius).',
      'وتر أخيل (Achilles Tendon): أسمك وأقوى وتر في جسم الإنسان يربط عضلة السمانة التوأمية بعظمة الكعب (عظم العقب).',
    ],
    anatomicalBreakdownEn: [
      'Upper Limb Muscles: Biceps brachii (forearm flexion) and Triceps brachii (extension)—exemplifying reciprocal muscular antagonism.',
      'Torso & Abdomen: Pectoralis major, rectus abdominis, and internal/external obliques supporting visceral wall and respiration.',
      'Lower Limb Muscles: Quadriceps femoris (knee extension), hamstring complex (flexion), and gastrocnemius (plantarflexion).',
      'Achilles Tendon (Tendo Calcaneus): Mightiest tendon transmitting gastrocnemius tensile force to the posterior calcaneus.',
    ],
    ministerialKeyPointsAr: [
      'الوحدة الحركية (Motor Unit) هي الوحدة الوظيفية للعضلة الهيكلية، وتتكون من ليف عصبي حركي واحد ومجموعة الألياف العضلية التي يغذيها (من ٥ إلى ١٠٠ ليف).',
      'انقباض العضلة يحتاج أيونات الكالسيوم (لكشف مواقع الارتباط على الأكتين) وجزيئات ATP (لتكوين وفصل الروابط المستعرضة).',
      'تمزق وتر أخيل يحدث بسبب بذل مجهود عنيف مفاجئ أو تقلص حاد مفاجئ لعضلة السمانة أو انعدام المرونة، ويُعالج بالأدوية أو التدخل الجراحي.',
    ],
    ministerialKeyPointsEn: [
      'Motor unit represents functional mechanical quantum: 1 somatic motor neuron synapsing with 5 to 100 muscle fibers.',
      'Cross-bridge cycle requires Ca2+ (exposing myosin-binding sites on actin) and ATP hydrolysis (energizing power strokes and detachment).',
      'Achilles tendon rupture results from sudden explosive triceps surae contraction, treated with immobilization or surgical tenorraphy.',
    ],
    examTrapsAr: 'الشد العضلي الزائد قد ينتج عن نقص ATP الحاد فيمنع انفصال الروابط المستعرضة عن الأكتين أو بسبب وصول نبضات عصبية خاطئة من المخ.',
    examTrapsEn: 'Severe muscle cramp often stems from acute ATP depletion preventing cross-bridge detachment, or erratic CNS motor impulses.',
    funFactsAr: 'أقوى عضلة في جسم الإنسان قياساً بكتلتها هي عضلة الفك (العضلة الماضغة Masseter) والتي تستطيع إطباق الفكين بقوة تفوق ٩٠ كيلوجراماً.',
    funFactsEn: 'Based on mass-to-force ratio, the masseter jaw muscle is the strongest muscle in the human body, capable of biting with >90 kg of force.',
  },
  {
    id: 'digestive_visceral',
    nameAr: 'الجهاز الهضمي والأحشاء الباطنية والبنكرياس',
    nameEn: 'Human Digestive Viscera & Hepato-Pancreatic System',
    latinName: 'Systema Digestorium & Viscera',
    systemCategory: 'visceral_renal',
    systemNameAr: 'الجهاز الهضمي والغدد الملحقة',
    systemNameEn: 'Gastrointestinal & Metabolic Organs',
    imageSrc: digestiveImg,
    badgeTag: 'Hepato-Pancreatic Digestive Axis',
    primaryFunctionAr:
      'تفتيت وهضم المواد الغذائية ميكانيكياً وكيميائياً، امتصاص العناصر الغذائية في خملات الأمعاء الدقيقة، وتنظيم سكر الدم وتصنيع الصفراء.',
    primaryFunctionEn:
      'Mechanical and enzymatic hydrolysis of nutrients, intestinal absorption, glycogen storage, bile synthesis, and insulin/glucagon homeostasis.',
    anatomicalBreakdownAr: [
      'المعدة (Stomach): كيس عضلي تفرز بطانته حمض الهيدروكلوريك HCl وإنزيم الببسين غير النشط (ببسينوجين) لهضم البروتينات.',
      'الكبد والحويصلة الصفراوية (Liver & Gallbladder): تصنيع العصارة الصفراوية لتجزئة الدهون إلى مستحلب دهني، وتخزين الجليكوجين.',
      'البنكرياس (Pancreas): غدة مختلطة (قنوية تفرز العصارة البنكرياسية الهاضمة في الاثني عشر، ولا قنوية تفرز الإنسولين والجلوكاجون من جزر لانجرهانس).',
      'الأمعاء الدقيقة والغليظة (Intestines): الأمعاء الدقيقة تمتص الغذاء عبر الخملات؛ والأمعاء الغليظة تمتص الماء لتشكيل الفضلات.',
    ],
    anatomicalBreakdownEn: [
      'Stomach: Muscular sac secreting hydrochloric acid (HCl) activating pepsinogen into pepsin for gastric protein proteolysis.',
      'Liver & Gallbladder: Bile synthesis emulsifying dietary lipids into micellar droplets, coupled with hepatic glycogenesis.',
      'Pancreas: Dual exocrine-endocrine gland (acini secreting digestive enzymes and islets of Langerhans producing insulin/glucagon).',
      'Intestinal Tract: Small intestine mediates nutrient absorption via mucosal microvilli; colon reabsorbs water forming solid feces.',
    ],
    ministerialKeyPointsAr: [
      'البنكرياس غدة مشتركة (مختلطة): خلايا حويصلية تفرز العصارة البنكرياسية عبر قناة إلى الاثني عشر، وجزر لانجرهانس تصب هرموناتها مباشرة في الدم.',
      'خلايا بيتا في البنكرياس تمثل الغالبية العظمى وتفرز الإنسولين لخفض سكر الدم، وخلايا ألفا تفرز الجلوكاجون لرفع سكر الدم.',
      'الصفراء لا تحتوي على إنزيمات هاضمة ولكنها ضرورية لتسهيل عمل إنزيم الليبيز البنكرياسي بتحويل الدهون لمستحلب.',
    ],
    ministerialKeyPointsEn: [
      'Pancreas is a mixed gland: acinar cells secrete digestive enzymes exocrinely, while Langerhans islets secrete hormones endocrinely.',
      'Beta cells comprise the overwhelming majority of islet mass secreting insulin, whereas alpha cells secrete counter-regulatory glucagon.',
      'Bile salts contain zero digestive enzymes but emulsify hydrophobic lipids, dramatically expanding substrate surface area for lipase.',
    ],
    examTrapsAr: 'خلايا ألفا تُفرز الجلوكاجون وتعمل على تحويل الجليكوجين المخزن في الكبد فقط إلى جلوكوز، ولا تؤثر على جليكوجين العضلات.',
    examTrapsEn: 'Glucagon acts solely on hepatic glycogen breakdown, having no effect on skeletal muscle glycogen storage.',
    funFactsAr: 'يحتوي الكبد البشري على أكثر من ٥٠٠ وظيفة حيوية مستقلة، ويمتلك قدرة فريدة على التجدد والنمو مجدداً حتى لو استؤصل ثلثاه.',
    funFactsEn: 'The human liver performs >500 vital physiological functions and can regenerate to its full size even if two-thirds are resected.',
  },
];

export const HumanBodyAnatomyAtlas: React.FC<Props> = ({
  lang = 'ar',
  theme: _theme = 'dark',
  isFullscreen: _isFullscreen = false,
}) => {
  const isArabic = lang === 'ar';

  const [activeCategory, setActiveCategory] = useState<AnatomySystemCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStructureId, setSelectedStructureId] = useState<string>('brain_cortex');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  // Filtered list
  const filteredStructures = useMemo(() => {
    return ANATOMICAL_STRUCTURES.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.systemCategory === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.nameAr.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        (item.latinName && item.latinName.toLowerCase().includes(q)) ||
        item.systemNameAr.toLowerCase().includes(q) ||
        item.systemNameEn.toLowerCase().includes(q) ||
        item.badgeTag.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const activeStructure = useMemo(() => {
    return (
      ANATOMICAL_STRUCTURES.find((s) => s.id === selectedStructureId) ||
      filteredStructures[0] ||
      ANATOMICAL_STRUCTURES[0]
    );
  }, [selectedStructureId, filteredStructures]);

  const categories: { id: AnatomySystemCategory; labelAr: string; labelEn: string; icon: string }[] = [
    { id: 'all', labelAr: 'جميع الأعضاء والأجهزة', labelEn: 'All Body Systems', icon: '🧬' },
    { id: 'neuroendocrine', labelAr: 'الجهاز العصبي والغدد', labelEn: 'Nervous & Endocrine', icon: '🧠' },
    { id: 'cardiorespiratory', labelAr: 'القلب والرئتان', labelEn: 'Heart & Lungs', icon: '🫀' },
    { id: 'locomotor', labelAr: 'الهيكل العظمي والمفاصل', labelEn: 'Skeletal & Joints', icon: '🦴' },
    { id: 'visceral_renal', labelAr: 'الهضمي والكلى والإخراج', labelEn: 'Digestive & Renal', icon: '🫁' },
    { id: 'immune', labelAr: 'المناعة والأعضاء الليمفاوية', labelEn: 'Immune & Lymphatic', icon: '🛡️' },
    { id: 'urogenital', labelAr: 'الجهاز التناسلي والتكاثر', labelEn: 'Reproduction & Urogenital', icon: '🔬' },
  ];

  return (
    <div className="space-y-6">
      {/* Lightbox High-Resolution Inspector Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-2">
                <ZoomIn className="w-5 h-5 text-rose-400" />
                <h3 className="text-sm sm:text-base font-black text-white">
                  {lightboxImage.title}
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono border border-rose-500/30">
                  Ultra Hi-Res Medical Atlas
                </span>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Close"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-slate-950">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl select-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Header Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-rose-950/80 via-slate-900 to-indigo-950/70 border border-rose-500/30 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-black uppercase tracking-wider">
                Official ClipSAT S3 Medical Atlas
              </span>
              <span className="text-xs text-slate-400 font-mono">100% Curriculum Grounded</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              {isArabic
                ? 'أطلس تشريح جسم الإنسان عالي الدقة (Hi-Res Visual Anatomy)'
                : 'Interactive Human Body Visual Anatomy Atlas'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-1 leading-relaxed">
              {isArabic
                ? 'موسوعة تشريحية طبية بصرية عصرية تضم رسومات ومخططات حقيقية فائقة الدقة لكافة أعضاء وأجهزة جسم الإنسان المقررة في الثانوية العامة المصرية، مدعمة بتحليل فسيولوجي دقيق وفخاخ الامتحانات الوزارية.'
                : 'Ultra-high-resolution medical anatomical atlas covering all human body systems with histological breakdowns and Ministerial examination trap warnings.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-end">
              <div className="text-2xl font-black text-rose-400">{ANATOMICAL_STRUCTURES.length}</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">
                {isArabic ? 'أجهزة وأعضاء مفصلة' : 'Detailed Organ Systems'}
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isArabic
                  ? 'ابحث بالاسم: الجمجمة، المخ، القلب، النفرون، ACL، التيموسية...'
                  : 'Search by organ name: Brain, Heart, Skull, Nephron, ACL, Thymus...'
              }
              className="w-full pl-9 pr-4 rtl:pr-9 rtl:pl-4 py-2.5 min-h-[44px] rounded-xl bg-slate-900/90 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
            />
          </div>

          {/* Quick Stats Indicator */}
          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span>{isArabic ? 'النتائج المعروضة:' : 'Showing:'}</span>
            <span className="font-bold text-rose-400">{filteredStructures.length}</span>
            <span>/</span>
            <span>{ANATOMICAL_STRUCTURES.length}</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-3 pb-1 no-scrollbar select-none">
          {categories.map((cat) => {
            const isSel = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-2 min-h-[44px] rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSel
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30 ring-1 ring-rose-400'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{isArabic ? cat.labelAr : cat.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage: Side Gallery + Active Detailed Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Scrollable Organ Selection Thumbnails (4 Cols on LG) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            <span>{isArabic ? 'الأعضاء والأجهزة المتاحة' : 'Select Anatomical Target'}</span>
            <span className="text-rose-400 font-mono">{filteredStructures.length}</span>
          </div>

          <div className="space-y-2.5 max-h-[740px] overflow-y-auto pr-1 no-scrollbar">
            {filteredStructures.map((item) => {
              const isSelected = item.id === activeStructure.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedStructureId(item.id)}
                  className={`w-full min-h-[64px] p-3 rounded-2xl border text-start transition-all cursor-pointer flex items-center gap-3 group ${
                    isSelected
                      ? 'bg-gradient-to-r from-rose-950/70 to-slate-900 border-rose-500 shadow-xl ring-1 ring-rose-400/50 scale-[1.02]'
                      : 'bg-slate-900/60 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-700 bg-slate-950">
                    <img
                      src={item.imageSrc}
                      alt={item.nameEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-rose-500/20 ring-2 ring-rose-400 ring-inset" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-extrabold text-white truncate group-hover:text-rose-300 transition-colors">
                      {isArabic ? item.nameAr : item.nameEn}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5">
                      {isArabic ? item.systemNameAr : item.systemNameEn}
                    </div>
                    <span className="inline-block mt-1 text-[9px] px-2 py-0.2 rounded-full bg-slate-800 text-rose-300 font-mono border border-slate-700">
                      {item.badgeTag}
                    </span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      isSelected ? 'translate-x-1 text-rose-400' : ''
                    }`}
                  />
                </button>
              );
            })}

            {filteredStructures.length === 0 && (
              <div className="p-8 text-center bg-slate-900/50 rounded-2xl border border-slate-800 text-slate-400 space-y-2">
                <Search className="w-8 h-8 mx-auto text-slate-600" />
                <p className="text-xs">
                  {isArabic ? 'لم يتم العثور على نتائج مطابقة للبحث' : 'No matching body structures found'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Deep Inspector Showcase for Active Organ (8 Cols on LG) */}
        <div className="lg:col-span-8 space-y-5">
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 shadow-2xl space-y-5">
            {/* Title & System Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono font-bold border border-rose-500/30">
                    {activeStructure.badgeTag}
                  </span>
                  {activeStructure.latinName && (
                    <span className="text-[11px] text-slate-400 italic font-serif">
                      {activeStructure.latinName}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
                  {isArabic ? activeStructure.nameAr : activeStructure.nameEn}
                </h3>
                <div className="text-xs text-rose-400 font-semibold mt-0.5">
                  {isArabic ? activeStructure.systemNameAr : activeStructure.systemNameEn}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setLightboxImage({
                      src: activeStructure.imageSrc,
                      title: isArabic ? activeStructure.nameAr : activeStructure.nameEn,
                    })
                  }
                  className="px-3.5 py-2 min-h-[44px] rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                  title="Zoom & Pan Lightbox"
                >
                  <ZoomIn className="w-4 h-4 text-rose-400" />
                  <span>{isArabic ? 'تكبير عالي الدقة' : 'Hi-Res Zoom'}</span>
                </button>
              </div>
            </div>

            {/* Featured Real Medical Image Viewport */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner group">
              <img
                src={activeStructure.imageSrc}
                alt={activeStructure.nameEn}
                className="w-full max-h-[520px] object-contain mx-auto select-none"
              />

              {/* Floating Overlay Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-bold text-slate-200 pointer-events-none">
                {isArabic ? 'مخطط تشريحي علمي فائق الدقة' : 'Hi-Res Medical Atlas Plate'}
              </div>

              {/* Hover Quick Zoom Cue */}
              <button
                onClick={() =>
                  setLightboxImage({
                    src: activeStructure.imageSrc,
                    title: isArabic ? activeStructure.nameAr : activeStructure.nameEn,
                  })
                }
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-rose-600 text-white text-xs font-bold backdrop-blur-md border border-slate-700 flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'عرض كامل الشاشة' : 'Fullscreen'}</span>
              </button>
            </div>

            {/* Physiological Function Card */}
            <div className="p-4 rounded-2xl bg-slate-850/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                <span>{isArabic ? 'الوظيفة الحيوية والفسيولوجية الأساسية:' : 'Primary Physiological Function:'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {isArabic ? activeStructure.primaryFunctionAr : activeStructure.primaryFunctionEn}
              </p>
            </div>

            {/* Anatomical Structural Breakdown */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>{isArabic ? 'التشريح البنيوي والقطع النسيجية الدقيقة:' : 'Anatomical Architecture & Segments:'}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {(isArabic
                  ? activeStructure.anatomicalBreakdownAr
                  : activeStructure.anatomicalBreakdownEn
                ).map((segment, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-5 h-5 rounded-md bg-cyan-950 text-cyan-400 flex items-center justify-center font-mono font-bold shrink-0 text-[11px] border border-cyan-800/40">
                      {idx + 1}
                    </span>
                    <span>{segment}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ministerial S3 Exam High-Yield Points */}
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>
                    {isArabic
                      ? 'ملاحظات ونقاط هامة لأسئلة امتحان الثانوية العامة (وزارة التربية والتعليم):'
                      : 'Egyptian Ministerial Exam High-Yield Key Points:'}
                  </span>
                </div>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-200 leading-relaxed">
                {(isArabic
                  ? activeStructure.ministerialKeyPointsAr
                  : activeStructure.ministerialKeyPointsEn
                ).map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam Trap Warning Box */}
            <div className="p-4 rounded-2xl bg-rose-950/25 border border-rose-500/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-rose-400 uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>{isArabic ? 'فخاخ وصعوبات الأسئلة في الامتحانات:' : 'Ministerial Exam Trap Alert:'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                ⚠️ {isArabic ? activeStructure.examTrapsAr : activeStructure.examTrapsEn}
              </p>
            </div>

            {/* Medical Fun Fact */}
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-400 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <span className="font-bold text-indigo-300">
                  {isArabic ? 'معلومة طبية وحيوية مذهلة: ' : 'Biological Marvel: '}
                </span>
                <span>{isArabic ? activeStructure.funFactsAr : activeStructure.funFactsEn}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
