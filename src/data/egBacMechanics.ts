import type { Branch } from '../types/curriculum';
import { egBacMechCh1SolvedExamples, egBacMechCh1Exercises } from './textbook/egbac/egBacMechCh1Textbook';
import { egBacMechCh1Databank } from './databanks/egbac/egBacMechCh1Databank';
import { egBacMechCh2SolvedExamples, egBacMechCh2Exercises } from './textbook/egbac/egBacMechCh2Textbook';
import { egBacMechCh2Databank } from './databanks/egbac/egBacMechCh2Databank';

export const egBacMechanicsBranch: Branch = {
  id: 'egbac_mechanics',
  titleEn: 'Theoretical Mechanics & Dynamical Systems',
  titleAr: 'الميكانيكا النظرية والأنظمة الديناميكية',
  categoryEn: 'Advanced Applied Mathematics',
  categoryAr: 'الرياضيات التطبيقية المتقدمة',
  iconName: 'Cpu',
  colorGradient: 'from-amber-600 to-red-800',
  chapters: [
    {
      id: 'egbac_mech_ch1',
      chapterNumber: 1,
      titleEn: 'Kinematics of Particles in Curvilinear Motion',
      titleAr: 'كينماتيكا الجسيمات في الحركة المنحنية',
      descriptionEn: 'Intrinsic coordinate frames, Frenet-Serret formulas (T, N, B), tangential and normal acceleration components, osculating circles, and polar coordinate kinematics.',
      descriptionAr: 'المحاور الذاتية للمنحنيات، معادلات فرينيه-سيريه، مركبات العجلة المماسية والعمودية، دوائر الانحناء، وكينماتيكا الحركة في الإحداثيات القطبية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_mech_l1',
          titleEn: 'Curvilinear Coordinates, Frenet-Serret Frame & Acceleration Decomposition',
          titleAr: 'الإحداثيات المنحنية وإطار فرينيه-سيريه وتحليل متجهات العجلة',
          summaryEn: 'Decompose particle acceleration into tangential component $a_t = \\frac{dv}{dt}$ and normal centripetal component $a_n = \\frac{v^2}{\\rho}$, compute radius of curvature $\\rho$, and analyze planar polar kinematics.',
          summaryAr: 'تحليل عجلة الجسيم إلى مركبة مماسية $a_t = \\frac{dv}{dt}$ ومركبة عمودية جاذبة نحو المركز $a_n = \\frac{v^2}{\\rho}$، حساب نصف قطر الانحناء $\\rho$، ودراسة الحركة القطبية.',
          theoryContentEn: `### 1. Intrinsic Coordinates & Velocity Vector
Let a particle move along a planar curve $C$ parameterized by arc length $s(t)$:
- **Position Vector:** $\\vec{r} = \\vec{r}(s(t))$
- **Unit Tangent Vector:** $\\hat{T} = \\frac{d\\vec{r}}{ds}$
- **Velocity Vector:**
  $$\\vec{v} = \\frac{d\\vec{r}}{dt} = \\frac{d\\vec{r}}{ds} \\frac{ds}{dt} = v \\hat{T}, \\quad \\text{where speed } v = \\frac{ds}{dt} = \\dot{s}$$

### 2. Frenet-Serret Tangential & Normal Acceleration Decomposition:
Differentiating velocity with respect to time $t$:
$$\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d}{dt}(v \\hat{T}) = \\frac{dv}{dt} \\hat{T} + v \\frac{d\\hat{T}}{dt}$$
By the Frenet-Serret geometric relations: $\\frac{d\\hat{T}}{ds} = \\kappa \\hat{N} = \\frac{1}{\\rho} \\hat{N}$, where $\\rho$ is the **radius of curvature** and $\\hat{N}$ is the principal unit normal vector directed toward the center of curvature.
Thus:
$$\\vec{a} = a_t \\hat{T} + a_n \\hat{N}$$
- **Tangential Acceleration:** $a_t = \\frac{dv}{dt} = v \\frac{dv}{ds} = \\ddot{s}$ (governs change in speed magnitude).
- **Normal (Centripetal) Acceleration:** $a_n = \\frac{v^2}{\\rho}$ (governs change in direction of motion).
- **Total Acceleration Magnitude:**
  $$\\|\\vec{a}\\| = \\sqrt{a_t^2 + a_n^2} = \\sqrt{\\left(\\frac{dv}{dt}\\right)^2 + \\left(\\frac{v^2}{\\rho}\\right)^2}$$

### 3. Radius of Curvature Formula in Cartesian Coordinates:
For a trajectory given as $y = f(x)$:
$$\\rho = \\frac{\\left[1 + (y')^2\\right]^{3/2}}{|y''|}$$

### 4. Polar Coordinates $(r, \\theta)$ Kinematics:
- Unit vectors: $\\hat{u}_r$ (radial) and $\\hat{u}_\\theta$ (transverse).
- **Velocity in Polar Coordinates:** $\\vec{v} = \\dot{r} \\hat{u}_r + r \\dot{\\theta} \\hat{u}_\\theta$
- **Acceleration in Polar Coordinates:**
  $$\\vec{a} = (\\ddot{r} - r \\dot{\\theta}^2) \\hat{u}_r + (r \\ddot{\\theta} + 2 \\dot{r} \\dot{\\theta}) \\hat{u}_\\theta$$`,
          theoryContentAr: `### ١. الإحداثيات الذاتية ومتجه السرعة
عند حركة جسيم على مسار منحني في المستوى بدلالة طول القوس $s(t)$:
- **متجه الوحدة المماسي:** $\\hat{T} = \\frac{d\\vec{r}}{ds}$
- **متجه السرعة:**
  $$\\vec{v} = v \\hat{T}, \\quad \\text{حيث الانطلاق (السرعة القياسية) } v = \\frac{ds}{dt}$$

### ٢. تحليل العجلة في إطار فرينيه-سيريه:
باشتقاق متجه السرعة بالنسبة للزمن:
$$\\vec{a} = a_t \\hat{T} + a_n \\hat{N}$$
- **العجلة المماسية:** $a_t = \\frac{dv}{dt} = v \\frac{dv}{ds}$ (مسؤولة عن تغير مقدار السرعة).
- **العجلة العمودية (المركزية):** $a_n = \\frac{v^2}{\\rho}$ (مسؤولة عن تغير اتجاه الحركة نحو مركز الانحناء).
- **معيار العجلة الكلية:**
  $$\\|\\vec{a}\\| = \\sqrt{a_t^2 + a_n^2}$$

### ٣. قانون نصف قطر الانحناء في الإحداثيات الكارتيزية:
للمسار المعطى كدالة $y = f(x)$:
$$\\rho = \\frac{\\left[1 + (y')^2\\right]^{3/2}}{|y''|}$$

### ٤. كينماتيكا الإحداثيات القطبية $(r, \\theta)$:
- **متجه السرعة في الإحداثيات القطبية:** $\\vec{v} = \\dot{r} \\hat{u}_r + r \\dot{\\theta} \\hat{u}_\\theta$
- **متجه العجلة في الإحداثيات القطبية:**
  $$\\vec{a} = (\\ddot{r} - r \\dot{\\theta}^2) \\hat{u}_r + (r \\ddot{\\theta} + 2 \\dot{r} \\dot{\\theta}) \\hat{u}_\\theta$$`,
          formulas: [
            { labelEn: 'Tangential Acceleration', labelAr: 'العجلة المماسية', latex: 'a_t = \\frac{dv}{dt} = v \\frac{dv}{ds}' },
            { labelEn: 'Normal Acceleration', labelAr: 'العجلة العمودية المركزية', latex: 'a_n = \\frac{v^2}{\\rho}' },
            { labelEn: 'Radius of Curvature', labelAr: 'نصف قطر الانحناء', latex: '\\rho = \\frac{[1 + (y^\\prime)^2]^{3/2}}{|y^{\\prime\\prime}|}' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Theoretical Mechanics',
            bookTitleAr: 'البكالوريا المصرية: الميكانيكا النظرية المتقدمة والأنظمة الديناميكية',
            grade: 'Grade 12 (Baccalaureate Level)',
            term: 'Term 1',
            officialCode: 'MOE-EGBAC-MECH-CH1-L1',
            pageRange: 'pp. 12-52'
          },
          lessonPlan: {
            titleEn: 'Curvilinear Kinematics: Frenet-Serret Frame and Intrinsic Acceleration',
            titleAr: 'كينماتيكا المنحنيات: إطار فرينيه-سيريه وتحليل العجلة الذاتية',
            gradeLevel: 'Grade 12 Advanced Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-MECH-CH1-LP1',
            bloomsObjectivesEn: [
              'Decompose total 2D acceleration into tangential (rate of speed change) and normal (centripetal) components.',
              'Calculate the osculating circle radius of curvature for algebraic and trigonometric trajectories.',
              'Formulate velocity and acceleration vectors in planar polar coordinate frames.'
            ],
            bloomsObjectivesAr: [
              'تحليل العجلة الكلية إلى مركبتيها المماسية (تغير المقدار) والعمودية (تغير الاتجاه).',
              'حساب نصف قطر دائرة الانحناء للمسارات الجبرية والمثلثية بدقة.',
              'صياغة متجهات السرعة والعجلة في الإحداثيات القطبية المستوية.'
            ],
            prerequisitesEn: ['Chain rule of differentiation', 'Circular motion kinematics', 'Vector dot and cross operations'],
            prerequisitesAr: ['قاعدة السلسلة في التفاضل', 'كينماتيكا الحركة الدائرية', 'العمليات المتجهية'],
            keyVocabularyEn: [
              { term: 'Radius of Curvature', definition: 'The radius of the osculating circle that best approximates a curve at a given point.' },
              { term: 'Centripetal Acceleration', definition: 'The normal component of acceleration directing towards the center of trajectory curvature.' },
              { term: 'Frenet Frame', definition: 'A moving orthonormal coordinate system consisting of tangent and normal vectors.' }
            ],
            keyVocabularyAr: [
              { term: 'نصف قطر الانحناء', definition: 'نصف قطر دائرة الانحناء الملاصقة الأكثر تطابقاً مع المنحنى عند نقطة معينة.' },
              { term: 'العجلة الجاذبة المركزية', definition: 'المركبة العمودية للعجلة المتجهة دوماً نحو مركز انحناء المسار.' },
              { term: 'إطار فرينيه', definition: 'نظام إحداثي متعامد متحرك مع الجسيم يتكون من المتجه المماسي والمتجه العمودي.' }
            ],
            teachingPacing: [
              { phaseEn: 'Curvature Geometric Intuition', phaseAr: 'الحدس الهندسي للانحناء', duration: '20 min', activitiesEn: 'Demonstrate osculating circles on parabolas and circular arcs.', activitiesAr: 'عرض مرئي لدوائر الانحناء المتغيرة على منحنى قطع مكافئ.' },
              { phaseEn: 'Tangential vs Normal Derivation', phaseAr: 'استنتاج المركبة المماسية والعمودية', duration: '35 min', activitiesEn: 'Differentiate v * T vector and derive v^2 / rho using arc-length geometry.', activitiesAr: 'اشتقاق قانون العجلة وتحليل مركبة السرعة v^٢ / نق باستخدام تفاضل طول القوس.' },
              { phaseEn: 'Radius Calculation Practice', phaseAr: 'حساب نصف قطر الانحناء', duration: '20 min', activitiesEn: 'Compute rho at vertex of projectile parabola.', activitiesAr: 'حساب نصف قطر الانحناء عند ذروة مسار المقذوف.' },
              { phaseEn: 'Exit Ticket', phaseAr: 'تذكرة الخروج', duration: '15 min', activitiesEn: 'Calculate total acceleration given speed v, dv/dt, and rho.', activitiesAr: 'حساب معيار العجلة الكلية بمعلومية السرعة ومعدل تغيرها ونصف قطر الانحناء.' }
            ],
            commonMisconceptionsEn: [
              'Believing that if speed v is constant, acceleration must be zero (normal acceleration v^2/rho is still non-zero in curved motion).',
              'Confusing radius of curvature rho with the distance r from the origin.'
            ],
            commonMisconceptionsAr: [
              'الاعتقاد بأن ثبات الانطلاق (السرعة القياسية) يعني انعدام العجلة (العجلة العمودية تظل موجودة في أي مسار منحنٍ).',
              'الخلط بين نصف قطر الانحناء نق والمسافة r من نقطة الأصل.'
            ],
            differentiationEn: {
              struggling: 'Examine uniform circular motion where rho = R is constant before studying variable curvature paths.',
              advanced: 'Derive 3D Frenet-Serret torsion tau and binormal vector B = T x N.'
            },
            differentiationAr: {
              struggling: 'دراسة الحركة الدائرية المنتظمة حيث نق ثابت قبل الانتقال للمنحنيات متغيرة الانحناء.',
              advanced: 'استنتاج الالتواء ثلاثي الأبعاد tau ومتجه العمودي الثاني B = T x N في الفراغ.'
            },
            formativeAssessmentEn: 'Ask students what happens to normal acceleration when a car drives around a sharp bend (small rho) versus a wide bend (large rho) at the same speed.',
            formativeAssessmentAr: 'سؤال شفهي: ماذا يحدث للعجلة العمودية لسيارة عند الانعطاف في منحنى حاد (نق صغير) مقارنة بمنحنى واسع بنفس السرعة؟',
            exitTicketQuestion: {
              questionEn: 'A particle moves on a curve with speed v = 10 m/s, dv/dt = 3 m/s^2, and radius of curvature rho = 25 m. Find the magnitude of its total acceleration.',
              questionAr: 'يتحرك جسيم على مسار منحنٍ بسرعة ١٠ م/ث، ومعدل تغير سرعته ٣ م/ث^٢، ونصف قطر الانحناء ٢٥ م. احسب معيار العجلة الكلية.',
              solutionEn: 'a_t = 3 m/s^2, a_n = 10^2 / 25 = 100 / 25 = 4 m/s^2. Total acceleration = sqrt(3^2 + 4^2) = 5 m/s^2.',
              solutionAr: 'العجلة المماسية = ٣، العجلة العمودية = ١٠٠ / ٢٥ = ٤، العجلة الكلية = جذر(٩ + ١٦) = ٥ م/ث^٢.'
            }
          },
          worksheet: {
            id: 'ws_egbac_mech_l1',
            titleEn: 'Worksheet: Intrinsic Curvilinear Kinematics',
            titleAr: 'ورقة عمل: كينماتيكا المنحنيات الذاتية وإطار فرينيه',
            descriptionEn: 'Rigorous problems on tangential acceleration, centripetal normal acceleration, and radius of curvature.',
            descriptionAr: 'مسائل متقدمة في حساب العجلة المماسية، العجلة العمودية المركزية، ونصف قطر الانحناء في المسارات المنحنية.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p12_1',
                titleEn: 'Standard Problem: Total Acceleration in Circular Curve',
                titleAr: 'مسألة قياسية: حساب العجلة الكلية على مسار دائري',
                difficulty: 'easy',
                questionEn: 'A vehicle moves along a circular track of radius $\\rho = 50\\text{ m}$. At a certain instant, its speed is $v = 20\\text{ m/s}$ and its speed is increasing at a rate of $\\frac{dv}{dt} = 6\\text{ m/s}^2$. Find the magnitude of total acceleration $\\|\\vec{a}\\|$.',
                questionAr: 'تتحرك سيارة على مسار دائري نصف قطره $\\rho = 50\\text{ م}$. في لحظة معينة كانت سرعتها $v = 20\\text{ م/ث}$ ومعدل تزايد سرعتها $\\frac{dv}{dt} = 6\\text{ م/ث}^2$. احسب معيار العجلة الكلية $\\|\\vec{a}\\|$.',
                optionsEn: ['10 m/s^2', '8 m/s^2', '14 m/s^2', '12 m/s^2'],
                optionsAr: ['١٠ م/ث^٢', '٨ م/ث^٢', '١٤ م/ث^٢', '١٢ م/ث^٢'],
                correctAnswer: '10 m/s^2',
                correctIndex: 0,
                hintEn: 'Compute normal acceleration a_n = v^2 / rho, then combine with tangential acceleration a_t in Pythagorean formula.',
                hintAr: 'احسب العجلة العمودية جـ_ع = ع^٢ / نق، ثم احسب الجذر التربيعي لمجموع مربعي العجلتين.',
                stepByStepSolutionEn: [
                  'Given tangential acceleration: $a_t = \\frac{dv}{dt} = 6\\text{ m/s}^2$.',
                  'Compute normal centripetal acceleration:',
                  '$$a_n = \\frac{v^2}{\\rho} = \\frac{20^2}{50} = \\frac{400}{50} = 8\\text{ m/s}^2$$',
                  'Compute total acceleration magnitude:',
                  '$$\\|\\vec{a}\\| = \\sqrt{a_t^2 + a_n^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ m/s}^2$$'
                ],
                stepByStepSolutionAr: [
                  'العجلة المماسية المعطاة: $a_t = 6\\text{ م/ث}^2$.',
                  'حساب العجلة العمودية المركزية:',
                  '$$a_n = \\frac{v^2}{\\rho} = \\frac{400}{50} = 8\\text{ م/ث}^2$$',
                  'معيار العجلة الكلية:',
                  '$$\\|\\vec{a}\\| = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\text{ م/ث}^2$$'
                ],
                teacherTipEn: 'Notice the famous 6-8-10 Pythagorean triple makes this calculation instant and elegant!',
                teacherTipAr: 'لاحظ ثلاثية فيثاغورس الشهيرة (٦، ٨، ١٠) التي تسهل الحساب الذهني الفوري للطلاب!'
              },
              {
                id: 'p12_2',
                titleEn: 'Foundation Problem: Radius of Curvature at Parabola Vertex',
                titleAr: 'مسألة تأسيسية: نصف قطر الانحناء عند رأس القطع المكافئ',
                difficulty: 'medium',
                questionEn: 'A projectile trajectory is modeled by the parabola $y = 4x - x^2$. Find the radius of curvature $\\rho$ at the highest point (vertex) of the trajectory.',
                questionAr: 'مسار مقذوف يمثله منحنى القطع المكافئ $y = 4x - x^2$. احسب نصف قطر الانحناء $\\rho$ عند أقصى ارتفاع (رأس المنحنى).',
                optionsEn: ['0.5 units', '1.0 units', '2.0 units', '0.25 units'],
                optionsAr: ['٠٫٥ وحدة', '١٫٠ وحدة', '٢٫٠ وحدة', '٠٫٢٥ وحدة'],
                correctAnswer: '0.5 units',
                correctIndex: 0,
                hintEn: "Find vertex where dy/dx = 0, compute d^2y/dx^2, then apply rho = [1 + (dy/dx)^2]^(3/2) / |d^2y/dx^2|.",
                hintAr: 'أوجد رأس المنحنى حيث المشتقة الأولى تساوي صفراً، احسب المشتقة الثانية، ثم طبق قانون نصف قطر الانحناء.',
                stepByStepSolutionEn: [
                  'Compute first and second derivatives:',
                  '$y^\\prime = 4 - 2x, \\quad y^{\\prime\\prime} = -2$',
                  'At the vertex (highest point), $y^\\prime = 0 \\implies 4 - 2x = 0 \\implies x = 2$.',
                  'Apply the radius of curvature formula at $x = 2$ where $y^\\prime = 0$:',
                  '$\\rho = \\frac{\\left[1 + (y^\\prime)^2\\right]^{3/2}}{|y^{\\prime\\prime}|} = \\frac{\\left[1 + 0^2\\right]^{3/2}}{|-2|} = \\frac{1}{2} = 0.5\\text{ units}$'
                ],
                stepByStepSolutionAr: [
                  'المشتقة الأولى والثانية:',
                  '$y^\\prime = 4 - 2x, \\quad y^{\\prime\\prime} = -2$',
                  'عند رأس المنحنى (أقصى ارتفاع) يكون المماس أفقياً: $y^\\prime = 0 \\implies x = 2$.',
                  'تطبيق قانون نصف قطر الانحناء عند $x = 2$:',
                  '$\\rho = \\frac{\\left[1 + 0\\right]^{3/2}}{|-2|} = \\frac{1}{2} = 0.5\\text{ وحدة طول}$'
                ],
                teacherTipEn: "At any local extremum (dy/dx = 0), the radius of curvature simplifies directly to rho = 1 / |d^2y/dx^2|!",
                teacherTipAr: 'قاعدة مفيدة: عند أي نقطة حرجة محلية (المشتقة الأولى = صفر) يتبسط قانون نصف قطر الانحناء إلى ١ / |المشتقة الثانية| مباشرة!'
              },
              {
                id: 'p12_3',
                titleEn: 'HOTS Problem: Angle Between Acceleration and Velocity Vectors',
                titleAr: 'مسألة مهارات عليا: الزاوية بين متجه العجلة ومتجه السرعة',
                difficulty: 'hots',
                questionEn: 'A particle moves on a curve with speed $v = 12\\text{ m/s}$. The angle between its total acceleration vector $\\vec{a}$ and its velocity vector $\\vec{v}$ is $45^\\circ$. If its normal acceleration is $a_n = 8\\text{ m/s}^2$, find the rate of change of speed $\\frac{dv}{dt}$.',
                questionAr: 'يتحرك جسيم على مسار منحنٍ بسرعة $v = 12\\text{ م/ث}$. كانت الزاوية بين متجه العجلة الكلية $\\vec{a}$ ومتجه السرعة $\\vec{v}$ تساوي $45^\\circ$. إذا كانت العجلة العمودية $a_n = 8\\text{ م/ث}^2$، فما هو معدل تغير سرعته $\\frac{dv}{dt}$؟',
                optionsEn: ['8 m/s^2', '12 m/s^2', '4 m/s^2', '8\\sqrt{2} m/s^2'],
                optionsAr: ['٨ م/ث^٢', '١٢ م/ث^٢', '٤ م/ث^٢', '٨\\sqrt{2} م/ث^٢'],
                correctAnswer: '8 m/s^2',
                correctIndex: 0,
                hintEn: 'The velocity vector points along the tangent vector T. Therefore, tan(theta) = a_n / a_t. With theta = 45 degrees, tan(45) = 1.',
                hintAr: 'متجه السرعة يقع في اتجاه المماس T، وبالتالي فإن ظا(الزاوية) = العجلة العمودية / العجلة المماسية. وبما أن الزاوية ٤٥ درجة فإن ظا(٤٥) = ١.',
                stepByStepSolutionEn: [
                  'The velocity vector is strictly tangential: $\\vec{v} = v \\hat{T}$.',
                  'The acceleration vector is $\\vec{a} = a_t \\hat{T} + a_n \\hat{N}$.',
                  'The angle $\\phi$ between $\\vec{a}$ and $\\vec{v}$ satisfies:',
                  '$$\\tan\\phi = \\frac{a_n}{a_t}$$',
                  'Given $\\phi = 45^\\circ$, we have $\\tan 45^\\circ = 1$.',
                  'Therefore, $1 = \\frac{a_n}{a_t} \\implies a_t = a_n = 8\\text{ m/s}^2$.',
                  'Since tangential acceleration $a_t = \\frac{dv}{dt}$, the rate of change of speed is $8\\text{ m/s}^2$.'
                ],
                stepByStepSolutionAr: [
                  'متجه السرعة يقع دوماً في الاتجاه المماسي: $\\vec{v} = v \\hat{T}$.',
                  'متجه العجلة يتحلل إلى: $\\vec{a} = a_t \\hat{T} + a_n \\hat{N}$.',
                  'ظل الزاوية $\\phi$ بين العجلة والسرعة يعطى بالقانون:',
                  '$$\\tan\\phi = \\frac{a_n}{a_t}$$',
                  'بما أن $\\phi = 45^\\circ$، فإن $\\tan 45^\\circ = 1$.',
                  'إذن: $a_t = a_n = 8\\text{ م/ث}^2$.',
                  'وحيث إن العجلة المماسية هي معدل تغير السرعة، فإن $\\frac{dv}{dt} = 8\\text{ م/ث}^2$.'
                ],
                teacherTipEn: 'Connecting vector dot products with components along the moving Frenet frame is a core skill tested in university-level mechanics!',
                teacherTipAr: 'الربط بين زوايا المتجهات ومركبات إطار فرينيه المتحرك مهارة محورية في الميكانيكا الجامعية ونظام البكالوريا الحديث!'
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: 'Curvilinear Kinematics & Frenet Frame Visualizer',
            titleAr: 'محاكي كينماتيكا المنحنيات وإطار فرينيه التفاعلي',
            descriptionEn: 'Interactive WebGL simulator showing particle trajectory, osculating circle, and dynamic vector arrows for tangential and normal acceleration.',
            descriptionAr: 'محاكاة تفاعلية ثلاثية الأبعاد لحركة جسيم على مسار منحنٍ مع إظهار دائرة الانحناء ومتجهات العجلة المماسية والعمودية.'
          }
        }
      ],
      solvedExamples: egBacMechCh1SolvedExamples,
      exerciseProblems: egBacMechCh1Exercises,
      databank: egBacMechCh1Databank
    },
    {
      id: 'egbac_mech_ch2',
      chapterNumber: 2,
      titleEn: 'Conservative Force Fields, Work-Energy & Central Force Motion',
      titleAr: 'مجالات القوى المحافظة ومبدأ الشغل والطاقة وحركة القوى المركزية',
      descriptionEn: 'Conservative forces, curl criteria in 3D, potential energy functions V(r), stability of equilibrium states, conservation of mechanical energy, and Kepler central force orbits.',
      descriptionAr: 'القوى المحافظة، شرط انعدام الالتواء (الدوران)، دالة طاقة الوضع V(r)، استقرار نقاط الاتزان، قانون بقاء الطاقة الميكانيكية، ومدارات كبلر تحت تأثير القوى المركزية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_mech_l2',
          titleEn: 'Conservative Forces, Potential Energy Wells & Central Force Orbits',
          titleAr: 'القوى المحافظة وآبار طاقة الوضع ومدارات القوى المركزية',
          summaryEn: 'Formulate potential energy gradients $\\vec{F} = -\\nabla V$, evaluate conservative vector fields via curl test $\\nabla \\times \\vec{F} = \\vec{0}$, examine equilibrium stability, and establish conservation of angular momentum under central forces.',
          summaryAr: 'صياغة انحدار طاقة الوضع $\\vec{F} = -\\nabla V$، التحقق من القوى المحافظة باختبار الالتواء، فحص استقرار الاتزان، وتطبيق قانون بقاء كمية الحركة الزاوية في مجالات القوى المركزية.',
          theoryContentEn: `### 1. Conservative Force Fields & Potential Energy
A force field $\\vec{F}(\\vec{r})$ is **conservative** if any of the following equivalent conditions hold:
1. The work done along any path between two points depends only on endpoints:
   $$W = \\int_{A}^{B} \\vec{F} \\cdot d\\vec{r} = V(A) - V(B) = -\\Delta V$$
2. The work done around any closed loop is zero: $\\oint \\vec{F} \\cdot d\\vec{r} = 0$.
3. The field is irrotational (zero curl):
   $$\\nabla \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ F_x & F_y & F_z \\end{vmatrix} = \\vec{0}$$
4. $\\vec{F}$ is the negative gradient of a scalar potential energy function $V(x, y, z)$:
   $$\\vec{F} = -\\nabla V = -\\left( \\frac{\\partial V}{\\partial x} \\hat{i} + \\frac{\\partial V}{\\partial y} \\hat{j} + \\frac{\\partial V}{\\partial z} \\hat{k} \\right)$$

### 2. Conservation of Total Mechanical Energy:
For a particle moving exclusively under conservative forces:
$$E = T + V = \\frac{1}{2} m v^2 + V(\\vec{r}) = \\text{constant}$$
$$T_1 + V_1 = T_2 + V_2$$

### 3. Equilibrium States & Stability Analysis:
An equilibrium point $x_0$ occurs where force vanishes:
$$F(x_0) = -\\left.\\frac{dV}{dx}\\right|_{x_0} = 0$$
- **Stable Equilibrium:** $\\left.\\frac{d^2 V}{dx^2}\\right|_{x_0} > 0$ (local minimum of potential well; restoring force returns particle).
- **Unstable Equilibrium:** $\\left.\\frac{d^2 V}{dx^2}\\right|_{x_0} < 0$ (local maximum of potential barrier; small perturbation repels particle).
- **Neutral Equilibrium:** $\\left.\\frac{d^2 V}{dx^2}\\right|_{x_0} = 0$.

### 4. Central Force Motion & Angular Momentum:
A central force field is always directed toward or away from a fixed center $O$: $\\vec{F} = f(r) \\hat{u}_r$.
- **Torque about Center:** $\\vec{\\tau}_O = \\vec{r} \\times \\vec{F} = \\vec{r} \\times [f(r) \\hat{u}_r] = \\vec{0}$.
- **Conservation of Angular Momentum:**
  $$\\frac{d\\vec{L}_O}{dt} = \\vec{\\tau}_O = \\vec{0} \\implies \\vec{L}_O = \\vec{r} \\times m\\vec{v} = \\text{constant vector}$$
- **Areal Velocity (Kepler Second Law):**
  $$\\frac{dA}{dt} = \\frac{1}{2} r^2 \\dot{\\theta} = \\frac{\\|\\vec{L}\\|}{2m} = \\text{constant}$$`,
          theoryContentAr: `### ١. مجالات القوى المحافظة وطاقة الوضع
يكون مجال القوة $\\vec{F}$ **محافظاً** إذا تحقق أي من الشروط المتكافئة التالية:
١. الشغل المبذول بين نقطتين لا يعتمد على المسار بل يعتمد حصراً على نقطتي البداية والنهاية:
   $$W = -\\Delta V = V(A) - V(B)$$
٢. الشغل المبذول عبر أي مسار مغلق يساوي صفراً: $\\oint \\vec{F} \\cdot d\\vec{r} = 0$.
٣. انعدام الالتواء (الدوران): $\\nabla \\times \\vec{F} = \\vec{0}$.
٤. القوة هي سالب انحدار دالة طاقة الوضع القياسية:
   $$\\vec{F} = -\\nabla V$$

### ٢. قانون بقاء الطاقة الميكانيكية الكلية:
لحركة جسيم خاضع لقوى محافظة فقط:
$$E = T + V = \\frac{1}{2} m v^2 + V = \\text{ثابت}$$

### ٣. حالات الاتزان ودراسة الاستقرار:
تحدث حالة الاتزان عند النقطة $x_0$ عندما تنعدم القوة المؤثرة:
$$\\frac{dV}{dx} = 0$$
- **اتزان مستقر:** $\\frac{d^2 V}{dx^2} > 0$ (نهاية صغرى محلية لطاقة الوضع).
- **اتزان غير مستقر:** $\\frac{d^2 V}{dx^2} < 0$ (نهاية عظمى محلية لطاقة الوضع).
- **اتزان متعادل:** $\\frac{d^2 V}{dx^2} = 0$.

### ٤. حركة القوى المركزية وبقاء كمية الحركة الزاوية:
القوة المركزية متجهة دوماً نحو المركز الثابت أو بعيداً عنه: $\\vec{F} = f(r) \\hat{u}_r$.
- عزم القوة حول المركز منعدم: $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\vec{0}$.
- **بقاء كمية الحركة الزاوية:**
  $$\\vec{L} = \\vec{r} \\times m\\vec{v} = \\text{متجه ثابت}$$
- **السرعة المساحية (قانون كبلر الثاني):**
  $$\\frac{dA}{dt} = \\frac{L}{2m} = \\text{ثابت}$$`,
          formulas: [
            { labelEn: 'Force as Negative Gradient', labelAr: 'القوة كسالب انحدار الجهد', latex: '\\vec{F} = -\\nabla V' },
            { labelEn: 'Curl Test for Conservativeness', labelAr: 'شرط انعدام الالتواء للقوة المحافظة', latex: '\\nabla \\times \\vec{F} = \\vec{0}' },
            { labelEn: 'Conservation of Mechanical Energy', labelAr: 'بقاء الطاقة الميكانيكية', latex: 'T_1 + V_1 = T_2 + V_2' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Theoretical Mechanics',
            bookTitleAr: 'البكالوريا المصرية: الميكانيكا النظرية المتقدمة والأنظمة الديناميكية',
            grade: 'Grade 12 (Baccalaureate Level)',
            term: 'Term 1',
            officialCode: 'MOE-EGBAC-MECH-CH2-L1',
            pageRange: 'pp. 53-96'
          },
          lessonPlan: {
            titleEn: 'Conservative Dynamics: Potential Wells, Equilibrium Stability and Planetary Motion',
            titleAr: 'الديناميكا المحافظة: آبار الجهد واستقرار الاتزان وحركة الكواكب',
            gradeLevel: 'Grade 12 Advanced Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-MECH-CH2-LP1',
            bloomsObjectivesEn: [
              'Verify whether multidimensional force fields are conservative using the 3D curl determinant test.',
              'Derive potential energy functions by line integration of force components.',
              'Analyze equilibrium stability and calculate small oscillation frequencies near potential minima.'
            ],
            bloomsObjectivesAr: [
              'التحقق من كون مجال القوة محافظاً باختبار محدد الالتواء ثلاثي الأبعاد.',
              'استنتاج دالة طاقة الوضع بالتكامل الخطي لمركبات القوة.',
              'تحليل استقرار مواضع الاتزان وحساب تردد الاهتزازات الصغيرة حول النهايات الصغرى.'
            ],
            prerequisitesEn: ['Partial differentiation and gradient', 'Line integrals of vector fields', 'Newton second law'],
            prerequisitesAr: ['التفاضل الجزئي والانحدار المتجهي', 'التكاملات الخطية لمجالات المتجهات', 'قانون نيوتن الثاني'],
            keyVocabularyEn: [
              { term: 'Conservative Force', definition: 'A force for which work done around any closed loop is identically zero.' },
              { term: 'Potential Well', definition: 'A region surrounding a local minimum of potential energy where particles are bound.' },
              { term: 'Central Force', definition: 'A force whose magnitude depends only on distance r and points along the radial position vector.' }
            ],
            keyVocabularyAr: [
              { term: 'القوة المحافظة', definition: 'قوة يكون الشغل الكلي المبذول بواسطتها على أي مسار مغلق مساوياً للصفر.' },
              { term: 'بئر طاقة الوضع', definition: 'منطقة محيطة بنهاية صغرى لطاقة الوضع تحبس الجسيم في حركة تذبذبية مستقرة.' },
              { term: 'القوة المركزية', definition: 'قوة يعتمد مقدارها على البعد r فقط وتعمل على طول خط متجه الموضع الرأسي.' }
            ],
            teachingPacing: [
              { phaseEn: 'Conservative Criteria', phaseAr: 'معايير القوة المحافظة', duration: '25 min', activitiesEn: 'Evaluate 3D curl on blackboard and establish potential gradient F = -grad V.', activitiesAr: 'حساب محدد الالتواء ثلاثي الأبعاد والتأكد من انعدامه وإثبات F = -grad V.' },
              { phaseEn: 'Potential Wells & Stability', phaseAr: 'آبار الجهد والاستقرار', duration: '30 min', activitiesEn: 'Graph V(x) curve and classify equilibrium points via second derivative test.', activitiesAr: 'رسم منحنى طاقة الوضع وتصنيف نقاط الاتزان بواسطة اختبار المشتقة الثانية.' },
              { phaseEn: 'Central Force & Kepler Orbits', phaseAr: 'القوى المركزية ومدارات كبلر', duration: '20 min', activitiesEn: 'Prove conservation of angular momentum due to zero torque.', activitiesAr: 'إثبات بقاء كمية الحركة الزاوية لانعدام العزم الخارجي.' },
              { phaseEn: 'Exit Ticket', phaseAr: 'تذكرة الخروج', duration: '15 min', activitiesEn: 'Find equilibrium points of a given cubic potential V(x).', activitiesAr: 'إيجاد مواضع الاتزان واستقرارها لدالة جهد معطاة.' }
            ],
            commonMisconceptionsEn: [
              'Thinking friction is a conservative force (friction is non-conservative because work depends on path length).',
              'Assuming stable equilibrium occurs at maximum of V(x) rather than minimum.'
            ],
            commonMisconceptionsAr: [
              'الاعتقاد بأن قوة الاحتكاك محافظة (الاحتكاك غير محافظ لأن الشغل يعتمد على طول المسار الفعلي).',
              'الظن بأن الاتزان المستقر يحدث عند القيمة العظمى للجهد بدلاً من القيمة الصغرى.'
            ],
            differentiationEn: {
              struggling: 'Use 1D spring-mass systems V(x) = 1/2 k x^2 before moving to 3D gravitational and Lennard-Jones potentials.',
              advanced: 'Derive the effective potential V_eff(r) = V(r) + L^2 / (2m r^2) for planetary orbits.'
            },
            differentiationAr: {
              struggling: 'البدء بنظام زنبركي أحادي البعد طاقة وضعه ١/٢ ك س^٢ قبل الانتقال إلى الجهد ثلاثي الأبعاد.',
              advanced: 'استنتاج دالة الجهد الفعال لحركة الكواكب المدارية في مجال الجاذبية.'
            },
            formativeAssessmentEn: 'Present V(x) = x^4 - 2x^2, ask students to locate stable equilibrium points (minima at x = +-1) and unstable point (maximum at x = 0).',
            formativeAssessmentAr: 'عرض دالة الجهد د(س) = س^٤ - ٢س^٢ ومطالبة الطلاب بتحديد نقاط الاتزان المستقر والاتزان غير المستقر.',
            exitTicketQuestion: {
              questionEn: 'If V(x) = x^3 - 3x, find the position of stable equilibrium.',
              questionAr: 'إذا كانت دالة طاقة الوضع V(x) = x^3 - 3x، أوجد موضع الاتزان المستقر.',
              solutionEn: 'dV/dx = 3x^2 - 3 = 0 => x = +-1. d^2V/dx^2 = 6x. At x = 1: d^2V/dx^2 = 6 > 0 (stable). At x = -1: -6 < 0 (unstable).',
              solutionAr: 'المشتقة الأولى: ٣س^٢ - ٣ = ٠، إذن س = ±١. المشتقة الثانية = ٦س. عند س = ١ تكون موجبة (اتزان مستقر).'
            }
          },
          worksheet: {
            id: 'ws_egbac_mech_l2',
            titleEn: 'Worksheet: Conservative Forces, Potential Wells & Energy Conservation',
            titleAr: 'ورقة عمل: القوى المحافظة وآبار طاقة الوضع وبقاء الطاقة',
            descriptionEn: 'Challenging questions on potential gradient, curl verification, and potential well stability analysis.',
            descriptionAr: 'مسائل تدريبية متقدمة في انحدار الجهد، فحص القوى المحافظة، وتحليل استقرار آبار طاقة الوضع.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p13_1',
                titleEn: 'Standard Problem: Conservative Force from Potential Function',
                titleAr: 'مسألة قياسية: استنتاج القوة المحافظة من دالة الجهد',
                difficulty: 'easy',
                questionEn: 'The potential energy of a particle in a 2D plane is given by $V(x, y) = 3x^2 y - 4y^2$. Find the force vector $\\vec{F}(x, y)$ acting on the particle.',
                questionAr: 'طاقة الوضع لجسيم في المستوى ثنائي الأبعاد تعطى بالعلاقة $V(x, y) = 3x^2 y - 4y^2$. أوجد متجه القوة $\\vec{F}(x, y)$ المؤثر على الجسيم.',
                optionsEn: [
                  '(-6xy) i + (-3x^2 + 8y) j',
                  '(6xy) i + (3x^2 - 8y) j',
                  '(-6x) i + (8y) j',
                  '(3x^2) i - (8y) j'
                ],
                optionsAr: [
                  '(-6xy) i + (-3x^2 + 8y) j',
                  '(6xy) i + (3x^2 - 8y) j',
                  '(-6x) i + (8y) j',
                  '(3x^2) i - (8y) j'
                ],
                correctAnswer: '(-6xy) i + (-3x^2 + 8y) j',
                correctIndex: 0,
                hintEn: 'Remember F = -nabla V = - (dV/dx i + dV/dy j). Do not forget the minus sign!',
                hintAr: 'تذكر أن القوة هي سالب انحدار طاقة الوضع: ق = - (تفاضل جزئي بالنسبة لـ س في اتجاه س + تفاضل جزئي بالنسبة لـ ص في اتجاه ص). لا تنسَ إشارة السالب!',
                stepByStepSolutionEn: [
                  'Compute partial derivative with respect to $x$:',
                  '$$\\frac{\\partial V}{\\partial x} = \\frac{\\partial}{\\partial x}(3x^2 y - 4y^2) = 6xy$$',
                  'Compute partial derivative with respect to $y$:',
                  '$$\\frac{\\partial V}{\\partial y} = \\frac{\\partial}{\\partial y}(3x^2 y - 4y^2) = 3x^2 - 8y$$',
                  'Apply $\\vec{F} = -\\nabla V$:',
                  '$$\\vec{F} = -\\left( \\frac{\\partial V}{\\partial x} \\hat{i} + \\frac{\\partial V}{\\partial y} \\hat{j} \\right) = -6xy \\hat{i} + (-3x^2 + 8y) \\hat{j}$$'
                ],
                stepByStepSolutionAr: [
                  'المشتقة الجزئية بالنسبة لـ س:',
                  '$$\\frac{\\partial V}{\\partial x} = 6xy$$',
                  'المشتقة الجزئية بالنسبة لـ ص:',
                  '$$\\frac{\\partial V}{\\partial y} = 3x^2 - 8y$$',
                  'تطبيق قانون $\\vec{F} = -\\nabla V$:',
                  '$$\\vec{F} = (-6xy) \\hat{i} + (-3x^2 + 8y) \\hat{j}$$'
                ],
                teacherTipEn: 'Missing the minus sign in F = -nabla V is the most frequent student error in physics exams!',
                teacherTipAr: 'نسيان إشارة السالب في قانون القوة ق = - انحدار الجهد هو الخطأ الأكثر تكراراً لدى الطلاب في امتحانات الميكانيكا!'
              },
              {
                id: 'p13_2',
                titleEn: 'Foundation Problem: Equilibrium Stability of a Potential Well',
                titleAr: 'مسألة تأسيسية: استقرار الاتزان في بئر الجهد',
                difficulty: 'medium',
                questionEn: 'A particle moves along the $x$-axis in a potential field $V(x) = 2x^3 - 9x^2 + 12x$. Determine the position of stable equilibrium.',
                questionAr: 'يتحرك جسيم على محور السينات تحت تأثير مجال طاقة وضع $V(x) = 2x^3 - 9x^2 + 12x$. حدد موضع الاتزان المستقر.',
                optionsEn: ['x = 2', 'x = 1', 'x = 3', 'x = 0'],
                optionsAr: ['x = 2', 'x = 1', 'x = 3', 'x = 0'],
                correctAnswer: 'x = 2',
                correctIndex: 0,
                hintEn: 'Set dV/dx = 0 to find equilibrium points, then evaluate d^2V/dx^2 > 0 for stable equilibrium.',
                hintAr: 'احسب المشتقة الأولى وساوها بالصفر لإيجاد نقاط الاتزان، ثم ابحث عن النقطة التي تجعل المشتقة الثانية موجبة (نهاية صغرى).',
                stepByStepSolutionEn: [
                  'Compute first derivative of $V(x)$:',
                  '$$\\frac{dV}{dx} = 6x^2 - 18x + 12$$',
                  'Set $\\frac{dV}{dx} = 0$:',
                  '$$6(x^2 - 3x + 2) = 0 \\implies (x - 1)(x - 2) = 0 \\implies x = 1 \\text{ or } x = 2$$',
                  'Compute second derivative:',
                  '$$\\frac{d^2 V}{dx^2} = 12x - 18$$',
                  'Evaluate at $x = 1$: $12(1) - 18 = -6 < 0$ (unstable equilibrium, local maximum).',
                  'Evaluate at $x = 2$: $12(2) - 18 = +6 > 0$ (stable equilibrium, local minimum).'
                ],
                stepByStepSolutionAr: [
                  'المشتقة الأولى لدالة طاقة الوضع:',
                  '$$\\frac{dV}{dx} = 6x^2 - 18x + 12$$',
                  'بمساواة المشتقة بالصفر:',
                  '$$6(x - 1)(x - 2) = 0 \\implies x = 1 \\quad \\text{أو} \\quad x = 2$$',
                  'المشتقة الثانية:',
                  '$$\\frac{d^2 V}{dx^2} = 12x - 18$$',
                  'عند $x = 1$: المشتقة الثانية = -٦ < ٠ (اتزان غير مستقر).',
                  'عند $x = 2$: المشتقة الثانية = +٦ > ٠ (اتزان مستقر).'
                ],
                teacherTipEn: 'Stable equilibrium always corresponds to the bottom of a potential well (minimum of V(x)).',
                teacherTipAr: 'الاتزان المستقر يقابل دوماً قاع بئر طاقة الوضع (نهاية صغرى للدالة V(x)).'
              },
              {
                id: 'p13_3',
                titleEn: 'HOTS Problem: Curl Test for Force Conservativeness',
                titleAr: 'مسألة مهارات عليا: اختبار الالتواء لمعرفة القوة المحافظة',
                difficulty: 'hots',
                questionEn: 'A force field in 3D is given by $\\vec{F} = (2xy + z^3) \\hat{i} + (x^2 + 2yz) \\hat{j} + (k x z^2 + y^2) \\hat{k}$. Find the value of constant $k$ such that the force field is conservative.',
                questionAr: 'مجال قوة في الفراغ معطى بالعلاقة $\\vec{F} = (2xy + z^3) \\hat{i} + (x^2 + 2yz) \\hat{j} + (k x z^2 + y^2) \\hat{k}$. أوجد قيمة الثابت $k$ التي تجعل هذا المجال محافظاً.',
                optionsEn: ['3', '2', '1', '0'],
                optionsAr: ['٣', '٢', '١', '٠'],
                correctAnswer: '3',
                correctIndex: 0,
                hintEn: 'For a conservative field, curl(F) = 0. In particular, d(Fz)/dx must equal d(Fx)/dz.',
                hintAr: 'لكي يكون المجال محافظاً، يجب أن ينعدم الالتواء (دوران ق = صفر). وبصفة خاصة، مشتقة المركبة ع بالنسبة لـ س تساوي مشتقة المركبة س بالنسبة لـ ع.',
                stepByStepSolutionEn: [
                  'For $\\vec{F} = F_x \\hat{i} + F_y \\hat{j} + F_z \\hat{k}$ to be conservative, $\\nabla \\times \\vec{F} = \\vec{0}$.',
                  'This requires equality of mixed partial derivatives:',
                  '$$\\frac{\\partial F_z}{\\partial x} = \\frac{\\partial F_x}{\\partial z}$$',
                  'Compute $\\frac{\\partial F_x}{\\partial z} = \\frac{\\partial}{\\partial z}(2xy + z^3) = 3z^2$.',
                  'Compute $\\frac{\\partial F_z}{\\partial x} = \\frac{\\partial}{\\partial x}(k x z^2 + y^2) = k z^2$.',
                  'Equate: $k z^2 = 3 z^2 \\implies k = 3$.',
                  'Check other components: $\\frac{\\partial F_y}{\\partial x} = 2x = \\frac{\\partial F_x}{\\partial y}$, and $\\frac{\\partial F_z}{\\partial y} = 2y = \\frac{\\partial F_y}{\\partial z}$. All hold when $k = 3$.'
                ],
                stepByStepSolutionAr: [
                  'شرط القوة المحافظة هو انعدام الالتواء: $\\nabla \\times \\vec{F} = \\vec{0}$.',
                  'وهذا يقتضي تساوي المشتقات الجزئية المتبادلة:',
                  '$$\\frac{\\partial F_z}{\\partial x} = \\frac{\\partial F_x}{\\partial z}$$',
                  'مشتقة $F_x$ بالنسبة لـ $z$: $3z^2$.',
                  'مشتقة $F_z$ بالنسبة لـ $x$: $k z^2$.',
                  'بالمساواة: $k z^2 = 3 z^2 \\implies k = 3$.',
                  'التحقق من بقية المركبات يثبت انعدام كافة عناصر الالتواء عندما $k = 3$.'
                ],
                teacherTipEn: 'The curl test is the 3D equivalent of the exact differential test M_y = N_x in differential equations!',
                teacherTipAr: 'اختبار الالتواء ثلاثي الأبعاد هو المكافئ الفراغي لاختبار المعادلات التفاضلية التامة في الرياضيات المتقدمة!'
              }
            ]
          },
          interactiveWidget: {
            type: 'dynamics_motion',
            titleEn: 'Potential Energy Wells & Equilibrium Simulator',
            titleAr: 'محاكي آبار طاقة الوضع ومستويات الاستقرار التفاعلي',
            descriptionEn: 'Interactive potential well simulation demonstrating particle oscillation in stable minima, barrier escape in unstable maxima, and phase portraits.',
            descriptionAr: 'محاكاة تفاعلية لحركة جسيم داخل آبار طاقة الوضع مع بيان نقاط الاتزان المستقر والاهتزازات التوافقية حولها.'
          }
        }
      ],
      solvedExamples: egBacMechCh2SolvedExamples,
      exerciseProblems: egBacMechCh2Exercises,
      databank: egBacMechCh2Databank
    }
  ]
};
