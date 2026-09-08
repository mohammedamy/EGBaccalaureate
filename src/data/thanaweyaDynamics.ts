import type { Branch } from '../types/curriculum';
import { dynCh1SolvedExamples, dynCh1Exercises } from './textbook/thanaweya/dynCh1Textbook';
import { dynCh1Databank } from './databanks/thanaweya/dynCh1Databank';
import { dynCh2SolvedExamples, dynCh2Exercises } from './textbook/thanaweya/dynCh2Textbook';
import { dynCh2Databank } from './databanks/thanaweya/dynCh2Databank';
import { dynCh3SolvedExamples, dynCh3Exercises } from './textbook/thanaweya/dynCh3Textbook';
import { dynCh3Databank } from './databanks/thanaweya/dynCh3Databank';

export const thanaweyaDynamicsBranch: Branch = {
  id: 'dynamics',
  titleEn: 'Dynamics (Applied Math)',
  titleAr: 'الديناميكا (الرياضيات التطبيقية)',
  categoryEn: 'Applied Mathematics',
  categoryAr: 'الرياضيات التطبيقية',
  iconName: 'Zap',
  colorGradient: 'from-rose-600 to-red-800',
  chapters: [
    {
      id: 'dyn_ch1',
      chapterNumber: 1,
      titleEn: 'Differentiation & Integration of Vector Functions',
      titleAr: 'اشتقاق وتكامل الدوال المتجهة',
      descriptionEn: 'Rectilinear kinematics: position vector r(t), displacement s(t), velocity v(t), acceleration a = dv/dt or a = v(dv/dx), accelerated vs decelerated motion, and integration for total distance.',
      descriptionAr: 'الحركة المستقيمة: متجه الموضع، الإزاحة، السرعة، العجلة جـ = دع/دن أو جـ = ع(دع/دس)، الحركة المتسارعة والمتباطئة، وتكامل السرعة والعجلة لحساب الإزاحة والمسافة الكلية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'dyn_l1',
          titleEn: 'Rectilinear Motion & Vector Differentiation',
          titleAr: 'حركة جسيم في خط مستقيم واشتقاق الدوال المتجهة',
          summaryEn: 'Kinematics of a particle in a straight line: position r(t), displacement s(t) = r(t) - r(0), velocity v = ds/dt, acceleration a = dv/dt or a = v dv/dx, and accelerated vs decelerated motion condition (v . a > 0 or v . a < 0).',
          summaryAr: 'حركة جسيم في خط مستقيم: متجه الموضع $r(t)$، الإزاحة $s(t) = r(t) - r(0)$، السرعة $v = \\frac{ds}{dt}$، العجلة $a = \\frac{dv}{dt}$ أو $a = v \\frac{dv}{dx}$، وبحث نوع الحركة متسارعة أم تقصيرية ($v \\cdot a > 0$ أو $v \\cdot a < 0$).',
          theoryContentEn: `### 1. Vector Kinematics Definitions in a Straight Line
When a particle moves along a straight line with coordinate axis $x$ and origin $O$:
- **Position Vector ($r(t)$ or $x(t)$):** Specifies the location of the particle relative to origin $O$ at time $t$.
- **Displacement Vector ($s(t)$):** The change in position from initial time $t = 0$:
  $$s(t) = r(t) - r(0) = x(t) - x_0$$
- **Velocity ($v(t)$):** The rate of change of position or displacement with respect to time:
  $$v(t) = \\frac{ds}{dt} = \\frac{dx}{dt} = r'(t)$$
  - Direction of motion: particle moves in positive direction if $v > 0$, negative direction if $v < 0$, and momentarily comes to rest when $v = 0$.

### 2. Acceleration Formulas ($a$):
1. **When velocity is expressed as a function of time $t$ ($v = f(t)$):**
   $$a = \\frac{dv}{dt} = \\frac{d^2 s}{dt^2} = \\frac{d^2 x}{dt^2}$$
2. **When velocity is expressed as a function of position $x$ ($v = f(x)$):**
   Using the chain rule:
   $$a = \\frac{dv}{dt} = \\frac{dv}{dx} \\cdot \\frac{dx}{dt} = v \\frac{dv}{dx}$$
   *(This is a quintessential Thanaweya Amma exam formula!)*

### 3. Accelerated vs. Decelerated (Retarded) Motion:
- **Accelerated Motion (حركة متسارعة):** Speed of the particle is increasing if velocity and acceleration have the **same sign**:
  $$v(t) \\cdot a(t) > 0$$
- **Decelerated / Retarded Motion (حركة تقصيرية):** Speed of the particle is decreasing if velocity and acceleration have **opposite signs**:
  $$v(t) \\cdot a(t) < 0$$
- **Maximum Velocity:** Occurs at points where acceleration is zero ($a = 0$), provided $\\frac{da}{dt} < 0$.`,
          theoryContentAr: `### ١. تعريفات الحركة في خط مستقيم
عند حركة جسيم في خط مستقيم مزود بنقطة أصل ثابتة $O$ ومتجه وحدة $\\hat{c}$:
- **متجه الموضع ($r(t)$ أو $x(t)$):** يحدد موقع الجسيم بالنسبة للنقطة الثابتة $O$ عند اللحظة الزمنية $t$.
- **متجه الإزاحة ($s(t)$):** هو التغير في متجه الموضع من بداية الحركة ($t = 0$):
  $$s(t) = r(t) - r(0) = x(t) - x_0$$
- **متجه السرعة ($v(t)$):** هو معدل تغير الإزاحة أو الموضع بالنسبة للزمن:
  $$v(t) = \\frac{ds}{dt} = \\frac{dx}{dt} = r'(t)$$
  - اتجاه الحركة: يتحرك الجسيم في الاتجاه الموجب عندما يكون $v > 0$، وفي الاتجاه السالب عندما يكون $v < 0$، ويسكن لحظياً عندما يكون $v = 0$.

### ٢. قوانين العجلة ($a$):
١. **عندما تكون السرعة دالة في الزمن $t$ ($v = f(t)$):**
   $$a = \\frac{dv}{dt} = \\frac{d^2 s}{dt^2} = \\frac{d^2 x}{dt^2}$$
٢. **عندما تكون السرعة دالة في الموضع $x$ ($v = f(x)$):**
   باستخدام قاعدة السلسلة:
   $$a = \\frac{dv}{dt} = \\frac{dv}{dx} \\cdot \\frac{dx}{dt} = v \\frac{dv}{dx}$$
   *(هذا القانون من أشهر قوانين امتحانات الثانوية العامة!)*

### ٣. الحركة المتسارعة والحركة التقصيرية:
- **الحركة المتسارعة:** تتزايد سرعة الجسيم (معيار السرعة يزداد) إذا كان للسرعة والعجلة **نفس الإشارة**:
  $$v(t) \\cdot a(t) > 0$$
- **الحركة التقصيرية (المتباطئة):** تتناقص سرعة الجسيم (معيار السرعة ينقص) إذا كان للسرعة والعجلة **إشارتان مختلفتان**:
  $$v(t) \\cdot a(t) < 0$$
- **أقصى سرعة:** يبلغ الجسيم أقصى سرعة عندما تنعدم العجلة ($a = 0$).`,
          formulas: [
            { labelEn: 'Velocity Definition', labelAr: 'تعريف السرعة', latex: 'v = \\frac{ds}{dt} = \\frac{dx}{dt}' },
            { labelEn: 'Acceleration with Time', labelAr: 'العجلة كدالة في الزمن', latex: 'a = \\frac{dv}{dt} = \\frac{d^2 x}{dt^2}' },
            { labelEn: 'Acceleration with Position', labelAr: 'العجلة كدالة في الموضع', latex: 'a = v \\frac{dv}{dx}' },
            { labelEn: 'Accelerated Motion Test', labelAr: 'شرط الحركة المتسارعة', latex: 'v(t) \\cdot a(t) > 0' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Dynamics Textbook Grade 12',
            bookTitleAr: 'كتاب الديناميكا للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-DYN-CH1-L1',
            pageRange: 'pp. 2 - 18'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Rectilinear Kinematics & Acceleration Chain Rule',
            titleAr: 'خطة درس: كينماتيكا الحركة المستقيمة وقاعدة السلسلة للعجلة',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-DYN-CH1-L1',
            bloomsObjectivesEn: [
              'Differentiate vector position functions to deduce velocity and acceleration.',
              'Apply the differential relation a = v(dv/dx) when velocity is expressed as a function of position.',
              'Distinguish between accelerated and decelerated motion using the sign of v . a.'
            ],
            bloomsObjectivesAr: [
              'اشتقاق دوال الموضع المتجهة لاستنتاج متجهي السرعة والعجلة.',
              'تطبيق القانون جـ = ع (دع/دس) عندما تكون السرعة دالة في الموضع س.',
              'التمييز بين الحركة المتسارعة والتقصيرية بالاعتماد على إشارة ع × جـ.'
            ],
            prerequisitesEn: ['Chain rule of differentiation', 'Basic rectilinear motion concepts'],
            prerequisitesAr: ['قاعدة السلسلة في التفاضل', 'مفاهيم الحركة المستقيمة الأساسية'],
            keyVocabularyEn: [
              { term: 'Position Vector x(t)', definition: 'Vector from a fixed origin to the particle location.' },
              { term: 'Accelerated Motion', definition: 'Motion where speed increases, characterized by v . a > 0.' },
              { term: 'Chain Rule Acceleration', definition: 'Formula a = v dv/dx used when velocity depends on position x.' }
            ],
            keyVocabularyAr: [
              { term: 'متجه الموضع', definition: 'المتجه الواصل من نقطة الأصل الثابتة إلى موضع الجسيم.' },
              { term: 'حركة متسارعة', definition: 'الحركة التي تزداد فيها السرعة ويكون فيها حاصل ضرب ع × جـ > 0.' },
              { term: 'العجلة بدلالة الموضع', definition: 'الصيغة جـ = ع (دع/دس) وتستخدم عندما تكون السرعة دالة في س.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Hook & Conceptual Foundations (15 mins)',
                phaseAr: 'التهيئة والمفاهيم الأساسية (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Contrast displacement s(t) with position x(t) by showing that displacement is zero at t = 0 while x(0) may equal x0.',
                activitiesAr: 'المقارنة بين الإزاحة ف(ن) والموضع س(ن) وبيان أن الإزاحة تنعدم عند ن = 0 بينما الموضع الابتدائي قد لا يساوي صفراً.'
              },
              {
                phaseEn: 'Chain Rule Mastery: a = v dv/dx (30 mins)',
                phaseAr: 'إتقان قاعدة السلسلة: جـ = ع دع/دس (٣٠ دقيقة)',
                duration: '30 mins',
                activitiesEn: 'Derive a = v dv/dx from the chain rule and solve classic exam cases such as v^2 = 5(16 - x^2).',
                activitiesAr: 'استنتاج القانون جـ = ع (دع/دس) وحل مسائل امتحانية كلاسيكية مثل ع^2 = 5(16 - س^2).'
              },
              {
                phaseEn: 'Accelerated vs Decelerated Intervals (25 mins)',
                phaseAr: 'فترات التسارع والتقصير (٢٥ دقيقة)',
                duration: '25 mins',
                activitiesEn: 'Construct sign charts for v(t) and a(t) to identify intervals of accelerated and decelerated motion.',
                activitiesAr: 'رسم جدول إشارات السرعة والعجلة لتحديد فترات الحركة المتسارعة والحركة التقصيرية بدقة.'
              },
              {
                phaseEn: 'Exit Ticket & Synthesis (20 mins)',
                phaseAr: 'بطاقة الخروج والتقييم الختامي (٢٠ دقيقة)',
                duration: '20 mins',
                activitiesEn: 'Administer individual exit ticket problem testing the a = v dv/dx rule.',
                activitiesAr: 'حل بطاقة الخروج الفردية لاختبار تطبيق قانون جـ = ع دع/دس.'
              }
            ],
            commonMisconceptionsEn: [
              'Believing that accelerated motion merely means acceleration is positive (a > 0), ignoring that if v < 0 and a < 0 the motion is also accelerated!',
              'Forgetting that displacement is s(t) = x(t) - x(0) rather than just x(t).'
            ],
            commonMisconceptionsAr: [
              'اعتقاد أن الحركة المتسارعة تعني فقط أن العجلة موجبة، مع إغفال أنه إذا كانت ع < 0 و جـ < 0 فإن الحركة متسارعة أيضاً!',
              'نسيان أن الإزاحة ف(ن) = س(ن) - س(0) وليست مجرد س(ن).'
            ],
            differentiationEn: {
              struggling: 'Draw number lines with separate color-coded arrows for velocity v and acceleration a to see whether they point in the same direction.',
              advanced: 'Analyze motion where position is given as x = e^(-t) cos(t) and compute damping acceleration and envelope frequencies.'
            },
            differentiationAr: {
              struggling: 'رسم خط أعداد بأسهم ملونة للسرعة والعجلة لمعرفة ما إذا كانتا في نفس الاتجاه أم في اتجاهين متضادين.',
              advanced: 'تحليل حركة جسم موضعه س = هـ^(-ن) جتا(ن) وحساب عجلة الاضمحلال وتردد الحركة.'
            },
            formativeAssessmentEn: 'A particle moves along a straight line such that its position is x = t^3 - 6t^2 + 9t + 1. Find when the motion is decelerated.',
            formativeAssessmentAr: 'يتحرك جسيم في خط مستقيم بحيث كان موضعه $x = t^3 - 6t^2 + 9t + 1$. عين الفترات الزمنية التي تكون فيها الحركة تقصيرية.',
            exitTicketQuestion: {
              questionEn: 'A particle moves in a straight line with velocity given by v^2 = 8(9 - x^2). Find its acceleration when x = 2.',
              questionAr: 'يتحرك جسيم في خط مستقيم بحيث كانت سرعته $v^2 = 8(9 - x^2)$. أوجد عجلته عندما $x = 2$.',
              solutionEn: 'Differentiate both sides with respect to x: 2v(dv/dx) = -16x. Since a = v(dv/dx), we have 2a = -16x => a = -8x. At x = 2: a = -8(2) = -16 units of acceleration.',
              solutionAr: 'باشتقاق الطرفين بالنسبة إلى س: 2 ع (دع/دس) = -16 س. وبما أن جـ = ع (دع/دس)، إذن 2 جـ = -16 س => جـ = -8 س. عند س = 2: جـ = -8(2) = -16 وحدة عجلة.'
            }
          },
          worksheet: {
            id: 'ws_dyn_l1',
            titleEn: 'Solved Worksheet: Rectilinear Kinematics & Acceleration',
            titleAr: 'ورقة عمل محلولة: كينماتيكا الحركة المستقيمة والعجلة',
            descriptionEn: 'Past Thanaweya Amma exam problems on straight line motion, a = v(dv/dx), and accelerated motion.',
            descriptionAr: 'مسائل امتحانات الثانوية العامة على الحركة المستقيمة وقانون جـ = ع (دع/دس) والحركة المتسارعة والتقصيرية.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p_dyn1',
                titleEn: 'Exam Standard: Acceleration from Velocity as Function of Position',
                titleAr: 'مسألة امتحانية: حساب العجلة من السرعة كدالة في الموضع',
                difficulty: 'exam_standard',
                questionEn: 'A particle moves in a straight line such that its velocity $v$ satisfies $v^2 = 4(x^2 + 1)$, where $x$ is the position in meters. Find the acceleration $a$ of the particle when $x = 3\\text{ m}$.',
                questionAr: 'يتحرك جسيم في خط مستقيم بحيث كانت سرعته $v$ تعطى بالعلاقة $v^2 = 4(x^2 + 1)$ حيث $x$ الموضع بالأمتار. أوجد عجلة الجسيم $a$ عندما $x = 3$ أمتار.',
                optionsEn: ['6\\text{ m/s}^2', '12\\text{ m/s}^2', '24\\text{ m/s}^2', '36\\text{ m/s}^2'],
                optionsAr: ['٦ م/ث²', '١٢ م/ث²', '٢٤ م/ث²', '٣٦ م/ث²'],
                correctAnswer: '12\\text{ m/s}^2',
                correctIndex: 1,
                hintEn: 'Differentiate both sides with respect to x and remember that a = v(dv/dx).',
                hintAr: 'اشتق الطرفين بالنسبة إلى س وتذكر أن جـ = ع (دع/دس).',
                stepByStepSolutionEn: [
                  'Given the velocity-position relation:',
                  '$$v^2 = 4(x^2 + 1) = 4x^2 + 4$$',
                  'Differentiate both sides with respect to position $x$:',
                  '$$\\frac{d}{dx}[v^2] = \\frac{d}{dx}[4x^2 + 4]$$',
                  '$$2v \\frac{dv}{dx} = 8x$$',
                  'Since acceleration in terms of position is $a = v \\frac{dv}{dx}$, we substitute:',
                  '$$2a = 8x \\implies a = 4x$$',
                  'Substitute $x = 3\\text{ m}$:',
                  '$$a = 4(3) = 12\\text{ m/s}^2$$'
                ],
                stepByStepSolutionAr: [
                  'المعادلة المعطاة:',
                  '$$v^2 = 4(x^2 + 1) = 4x^2 + 4$$',
                  'باشتقاق الطرفين بالنسبة إلى الموضع $x$:',
                  '$$\\frac{d}{dx}[v^2] = \\frac{d}{dx}[4x^2 + 4]$$',
                  '$$2v \\frac{dv}{dx} = 8x$$',
                  'بما أن العجلة بدلالة الموضع هي $a = v \\frac{dv}{dx}$، إذن بالتعويض:',
                  '$$2a = 8x \\implies a = 4x$$',
                  'بالتعويض عن $x = 3$ م:',
                  '$$a = 4(3) = 12\\text{ م/ث²}$$'
                ],
                teacherTipEn: 'Students often erroneously compute dv/dx and forget to multiply by v! Remember: d(v^2)/dx = 2v(dv/dx) = 2a.',
                teacherTipAr: 'خطأ شائع: يشتق الطالب ع بالنسبة إلى س وينسى الضرب في ع! تذكر دائماً: مشتقة ع² بالنسبة لـ س تساوي 2 ع (دع/دس) = 2 جـ.'
              },
              {
                id: 'p_dyn2',
                titleEn: 'Foundation Problem: Accelerated vs. Decelerated Motion Intervals',
                titleAr: 'مسألة تأسيسية: فترات الحركة المتسارعة والتقصيرية',
                difficulty: 'easy',
                questionEn: 'A particle moves in a straight line with position $x(t) = t^2 - 4t + 3$ (where $t \\ge 0$). At what time interval is the motion decelerated (retarded)?',
                questionAr: 'يتحرك جسيم في خط مستقيم بحيث كان موضعه $x(t) = t^2 - 4t + 3$ (حيث $t \\ge 0$). في أي فترة زمنية تكون الحركة تقصيرية؟',
                optionsEn: ['(0, 2)', '(2, \\infty)', '(0, 1)', '(1, 3)'],
                optionsAr: ['(0, 2)', '(2, \\infty)', '(0, 1)', '(1, 3)'],
                correctAnswer: '(0, 2)',
                correctIndex: 0,
                hintEn: 'Compute velocity v(t) = dx/dt and acceleration a = dv/dt. Motion is decelerated when v(t) . a(t) < 0.',
                hintAr: 'احسب السرعة ع = دس/دن والعجلة جـ = دع/دن. تكون الحركة تقصيرية عندما يكون ع × جـ < 0.',
                stepByStepSolutionEn: [
                  'Find velocity $v(t)$ by differentiating position:',
                  '$$v(t) = \\frac{dx}{dt} = 2t - 4 = 2(t - 2)$$',
                  'Find acceleration $a(t)$ by differentiating velocity:',
                  '$$a(t) = \\frac{dv}{dt} = 2 > 0 \\quad (\\text{constant positive acceleration})$$',
                  'Check the condition for decelerated motion ($v(t) \\cdot a(t) < 0$):',
                  '$$v(t) \\cdot a(t) = (2t - 4)(2) = 4(t - 2) < 0$$',
                  '$$t - 2 < 0 \\implies t < 2$$',
                  'Since time $t \\ge 0$, the interval of decelerated motion is $0 \\le t < 2$ (or $(0, 2)$).'
                ],
                stepByStepSolutionAr: [
                  'إيجاد السرعة $v(t)$ باشتقاق الموضع:',
                  '$$v(t) = \\frac{dx}{dt} = 2t - 4 = 2(t - 2)$$',
                  'إيجاد العجلة $a(t)$ باشتقاق السرعة:',
                  '$$a(t) = \\frac{dv}{dt} = 2 > 0 \\quad (\\text{عجلة موجبة ثابتة})$$',
                  'شرط الحركة التقصيرية ($v(t) \\cdot a(t) < 0$):',
                  '$$v(t) \\cdot a(t) = (2t - 4)(2) = 4(t - 2) < 0$$',
                  '$$t - 2 < 0 \\implies t < 2$$',
                  'بما أن الزمن $t \\ge 0$، إذن تكون الحركة تقصيرية في الفترة الزمنية $[0, 2)$ أو $(0, 2)$.'
                ],
                teacherTipEn: 'Notice that acceleration is positive throughout, yet the motion is decelerated for t < 2 because the velocity is negative!',
                teacherTipAr: 'لاحظ أن العجلة موجبة دائماً ومع ذلك تكون الحركة تقصيرية قبل ن = 2 لأن اتجاه السرعة سالب!'
              },
              {
                id: 'p_dyn3',
                titleEn: 'HOTS Problem: Maximum Speed and Inversion of Motion',
                titleAr: 'مسألة مهارات تفكير عليا: أقصى سرعة وانعكاس اتجاه الحركة',
                difficulty: 'hots',
                questionEn: 'A particle moves in a straight line such that its velocity $v = 36t - 3t^2\\text{ m/s}$. Find the maximum speed of the particle and the total displacement when the particle momentarily reverses its motion.',
                questionAr: 'يتحرك جسيم في خط مستقيم بحيث كانت سرعته $v = 36t - 3t^2$ م/ث. أوجد أقصى سرعة للجسيم، ومقدار الإزاحة عندما يسكن الجسيم لحظياً لعكس اتجاه حركته.',
                optionsEn: [
                  'v_{\\max} = 108\\text{ m/s}, \\quad s = 864\\text{ m}',
                  'v_{\\max} = 108\\text{ m/s}, \\quad s = 432\\text{ m}',
                  'v_{\\max} = 54\\text{ m/s}, \\quad s = 216\\text{ m}',
                  'v_{\\max} = 144\\text{ m/s}, \\quad s = 864\\text{ m}'
                ],
                optionsAr: [
                  'ع_عظمى = ١٠٨ م/ث، ف = ٨٦٤ م',
                  'ع_عظمى = ١٠٨ م/ث، ف = ٤٣٢ م',
                  'ع_عظمى = ٥٤ م/ث، ف = ٢١٦ م',
                  'ع_عظمى = ١٤٤ م/ث، ف = ٨٦٤ م'
                ],
                correctAnswer: 'v_{\\max} = 108\\text{ m/s}, \\quad s = 864\\text{ m}',
                correctIndex: 0,
                hintEn: 'Maximum speed occurs when a = dv/dt = 0. Momentary rest occurs when v = 0 (t > 0). Integrate v(t) to find displacement.',
                hintAr: 'تحدث أقصى سرعة عندما جـ = 0. يسكن الجسيم لحظياً عندما ع = 0. كامل السرعة لإيجاد الإزاحة.',
                stepByStepSolutionEn: [
                  '1. Maximum speed condition ($a = 0$):',
                  '$$a(t) = \\frac{dv}{dt} = 36 - 6t = 0 \\implies 6t = 36 \\implies t = 6\\text{ seconds}$$',
                  'Substitute $t = 6$ into velocity formula:',
                  '$$v_{\\max} = 36(6) - 3(6)^2 = 216 - 108 = 108\\text{ m/s}$$',
                  '2. Momentary stop ($v = 0$, $t > 0$):',
                  '$$36t - 3t^2 = 0 \\implies 3t(12 - t) = 0 \\implies t = 12\\text{ seconds}$$',
                  '3. Displacement $s$ at $t = 12$:',
                  '$$s = \\int_0^{12} (36t - 3t^2) dt = \\left[ 18t^2 - t^3 \\right]_0^{12}$$',
                  '$$s = 18(12)^2 - (12)^3 = 18(144) - 1728 = 2592 - 1728 = 864\\text{ meters}$$'
                ],
                stepByStepSolutionAr: [
                  '١. شرط أقصى سرعة ($a = 0$):',
                  '$$a(t) = \\frac{dv}{dt} = 36 - 6t = 0 \\implies 6t = 36 \\implies t = 6\\text{ ثوانٍ}$$',
                  'التعويض عن $t = 6$ في دالة السرعة:',
                  '$$v_{\\max} = 36(6) - 3(6)^2 = 216 - 108 = 108\\text{ م/ث}$$',
                  '٢. لحظة السكون اللحظي وعكس الحركة ($v = 0$ مع $t > 0$):',
                  '$$36t - 3t^2 = 0 \\implies 3t(12 - t) = 0 \\implies t = 12\\text{ ثانية}$$',
                  '٣. حساب الإزاحة $s$ عند $t = 12$:',
                  '$$s = \\int_0^{12} (36t - 3t^2) dt = \\left[ 18t^2 - t^3 \\right]_0^{12}$$',
                  '$$s = 18(12)^2 - (12)^3 = 2592 - 1728 = 864\\text{ متراً}$$'
                ],
                teacherTipEn: 'Emphasize that the particle does not stop at maximum velocity! It stops at t = 12 where v = 0.',
                teacherTipAr: 'نبه الطلاب إلى أن أقصى سرعة لا تعني سكون الجسيم، بل يسكن الجسيم عندما تنعدم السرعة عند ن = 12.'
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Kinematic Velocity & Acceleration Curve Analyzer',
            titleAr: 'محلل منحنيات السرعة والعجلة في الحركة المستقيمة',
            descriptionEn: 'Interactive tangent slope analyzer demonstrating the physical relationship between s(t), v(t), and a(t).',
            descriptionAr: 'محاكي تفاعلي يوضح العلاقة بين ميل مماس الإزاحة والسرعة والعجلة وفترات التسارع والتقصير.'
          }
        },
        {
          id: 'dyn_l2',
          titleEn: 'Integration of Vector Functions & Distance vs. Displacement',
          titleAr: 'تكامل الدوال المتجهة وحساب المسافة الكلية والإزاحة',
          summaryEn: 'Definite integration of vector acceleration and velocity, determining velocity from a(t) or a(x) via v dv = a dx, and distinguishing net displacement from total distance traveled.',
          summaryAr: 'التكامل المحدد للعجلة والسرعة، حساب السرعة من العجلة كدالة في الزمن أو الموضع عبر $v dv = a dx$، والتمييز الدقيق بين الإزاحة والمسافة الكلية المقطوعة.',
          theoryContentEn: `### 1. Integration with Time-Dependent Acceleration ($a = f(t)$):
$$\\Delta v = v(t) - v_0 = \\int_0^t a(t) dt \\implies v(t) = v_0 + \\int_0^t a(t) dt$$
Similarly, displacement $s(t)$ is obtained by integrating velocity:
$$s(t) = \\int_0^t v(t) dt$$

### 2. Integration with Position-Dependent Acceleration ($a = f(x)$):
Since $a = v \\frac{dv}{dx}$, separating variables yields:
$$v \\, dv = a(x) \\, dx$$
Integrating from initial state $(x_0, v_0)$ to state $(x, v)$:
$$\\int_{v_0}^v v \\, dv = \\int_{x_0}^x a(x) \\, dx \\implies \\frac{1}{2}(v^2 - v_0^2) = \\int_{x_0}^x a(x) \\, dx$$
*(Fundamental formula linking work, potential, and kinetic changes in Thanaweya Amma).*

### 3. Critical Exam Distinction: Displacement vs. Total Distance
Given a time interval $[t', t_2]$:
1. **Net Displacement (الإزاحة):**
   $$s = \\int_{t_1}^{t_2} v(t) \\, dt = x(t_2) - x(t_1)$$
   - Displacement is a vector quantity and can be positive, negative, or zero.
2. **Total Distance Traveled (المسافة الكلية المقطوعة):**
   $$D = \\int_{t_1}^{t_2} |v(t)| \\, dt$$
   - To compute $D$:
     1. Solve $v(t) = 0$ to find any turning points (reversal of motion) inside $[t', t_2]$.
     2. If $v(t_0) = 0$ where $t_1 < t_0 < t_2$, split the integral:
        $$D = \\left| \\int_{t_1}^{t_0} v(t) \\, dt \\right| + \\left| \\int_{t_0}^{t_2} v(t) \\, dt \\right|$$
   - Total distance is always non-negative and $D \\ge |s|$.`,
          theoryContentAr: `### ١. تكامل العجلة المعطاة كدالة في الزمن ($a = f(t)$):
$$\\Delta v = v(t) - v_0 = \\int_0^t a(t) dt \\implies v(t) = v_0 + \\int_0^t a(t) dt$$
وبالمثل، نحصل على الإزاحة $s(t)$ بتكامل السرعة بالنسبة للزمن:
$$s(t) = \\int_0^t v(t) dt$$

### ٢. تكامل العجلة المعطاة كدالة في الموضع ($a = f(x)$):
بما أن $a = v \\frac{dv}{dx}$، بفصل المتغيرات نحصل على:
$$v \\, dv = a(x) \\, dx$$
وبإجراء التكامل من الموضع والسرعة الابتدائيين $(x_0, v_0)$ إلى $(x, v)$:
$$\\int_{v_0}^v v \\, dv = \\int_{x_0}^x a(x) \\, dx \\implies \\frac{1}{2}(v^2 - v_0^2) = \\int_{x_0}^x a(x) \\, dx$$
*(معادلة جوهرية تتكرر دائماً في امتحانات الثانوية العامة).*

### ٣. تمييز امتحاني جوهري: الإزاحة مقابل المسافة الكلية
خلال الفترة الزمنية $[t', t_2]$:
١. **الإزاحة (متجه):**
   $$s = \\int_{t_1}^{t_2} v(t) \\, dt = x(t_2) - x(t_1)$$
   - قد تكون الإزاحة موجبة أو سالبة أو صفراً.
٢. **المسافة الكلية المقطوعة (كمية قياسية موجبة):**
   $$D = \\int_{t_1}^{t_2} |v(t)| \\, dt$$
   - لحساب المسافة الكلية:
     أ) نضع $v(t) = 0$ للبحث عن لحظات السكون اللحظي وعكس اتجاه الحركة داخل الفترة $[t', t_2]$.
     ب) إذا كان $v(t_0) = 0$ حيث $t_1 < t_0 < t_2$، نقسم التكامل:
        $$D = \\left| \\int_{t_1}^{t_0} v(t) \\, dt \\right| + \\left| \\int_{t_0}^{t_2} v(t) \\, dt \\right|$$
   - المسافة الكلية دائماً موجبة وتحقق $D \\ge |s|$.`,
          formulas: [
            { labelEn: 'Velocity from Acceleration Integral', labelAr: 'السرعة من تكامل العجلة الزمني', latex: 'v(t) - v_0 = \\int_0^t a(t) dt' },
            { labelEn: 'Separation of Variables with Position', labelAr: 'تكامل العجلة بدلالة الموضع', latex: '\\frac{1}{2}(v^2 - v_0^2) = \\int_{x_0}^x a(x) dx' },
            { labelEn: 'Net Displacement Integral', labelAr: 'تكامل الإزاحة', latex: 's = \\int_{t_1}^{t_2} v(t) dt' },
            { labelEn: 'Total Distance Traveled', labelAr: 'المسافة الكلية المقطوعة', latex: 'D = \\int_{t_1}^{t_2} |v(t)| dt' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Dynamics Textbook Grade 12',
            bookTitleAr: 'كتاب الديناميكا للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-DYN-CH1-L2',
            pageRange: 'pp. 19 - 35'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Vector Integration, v dv = a dx, and Distance Calculus',
            titleAr: 'خطة درس: تكامل الدوال المتجهة والمسافة والإزاحة',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-DYN-CH1-L2',
            bloomsObjectivesEn: [
              'Evaluate definite integrals of acceleration to solve kinematic problems.',
              'Calculate total distance traveled by analyzing zero crossings of velocity.',
              'Apply v dv = a(x) dx to determine speed at specified locations.'
            ],
            bloomsObjectivesAr: [
              'حساب التكاملات المحددة للعجلة لحل مسائل الحركة المتجهة.',
              'حساب المسافة الكلية المقطوعة ببحث نقاط انعدام السرعة.',
              'تطبيق ع دع = جـ(س) دس لتحديد السرعة عند أي موضع.'
            ],
            prerequisitesEn: ['Definite integration techniques', 'Zeroes of quadratic and polynomial functions'],
            prerequisitesAr: ['طرق التكامل المحدد', 'إيجاد أصفار الدوال كثيرة الحدود'],
            keyVocabularyEn: [
              { term: 'Displacement', definition: 'Net change in position vector x(t2) - x(t1).' },
              { term: 'Total Distance', definition: 'Sum of absolute paths traveled, integral of |v(t)| dt.' },
              { term: 'Turning Point', definition: 'Instant where v(t) changes sign, causing particle to reverse direction.' }
            ],
            keyVocabularyAr: [
              { term: 'الإزاحة', definition: 'التغير في متجه الموضع س(ن٢) - س(ن١).' },
              { term: 'المسافة الكلية', definition: 'مجموع المسارات المقطوعة بغض النظر عن الاتجاه تكامل |ع| دن.' },
              { term: 'نقطة الرجوع', definition: 'اللحظة التي تنعدم فيها السرعة وتتغير إشارتها فيعكس الجسيم اتجاه حركته.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Concept Check: Distance vs Displacement (15 mins)',
                phaseAr: 'فحص المفاهيم: المسافة والإزاحة (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Illustrate walking 5 meters forward and 3 meters backward: displacement is +2m, total distance is 8m.',
                activitiesAr: 'ضرب مثال واقعي: المشي ٥ أمتار للأمام ثم ٣ أمتار للخلف: الإزاحة +٢م، بينما المسافة ٨م.'
              },
              {
                phaseEn: 'Position-Dependent Acceleration: v dv = a dx (35 mins)',
                phaseAr: 'العجلة بدلالة الموضع: ع دع = جـ دس (٣٥ دقيقة)',
                duration: '35 mins',
                activitiesEn: 'Guide students through integration when a = 3x^2 - 4x with initial condition v0 = 2 at x0 = 0.',
                activitiesAr: 'حل أمثلة تكامل ع دع = جـ(س) دس بالتفصيل مع شروط ابتدائية.'
              },
              {
                phaseEn: 'Solving Exam Distance Problems (25 mins)',
                phaseAr: 'حل مسائل الامتحانات على المسافة (٢٥ دقيقة)',
                duration: '25 mins',
                activitiesEn: 'Work through splitting integrals when v(t) changes sign in the given time interval.',
                activitiesAr: 'تدريب الطلاب على تقسيم فترات التكامل عند وجود أصفار للسرعة.'
              },
              {
                phaseEn: 'Summary & Formative Assessment (15 mins)',
                phaseAr: 'التلخيص والتقييم التكويني (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Review essential formulas and assign quick check problem.',
                activitiesAr: 'مراجعة القوانين وحل مسألة تقييم سريعة.'
              }
            ],
            commonMisconceptionsEn: [
              'Integrating velocity directly without taking absolute values when asked for total distance.',
              'Forgetting the integration constant C when using indefinite integrals.'
            ],
            commonMisconceptionsAr: [
              'حساب تكامل السرعة مباشرة دون تجزئة أو قيمة مطلقة عند طلب المسافة الكلية.',
              'نسيان ثابت التكامل جـ عند استخدام التكامل غير المحدد.'
            ],
            differentiationEn: {
              struggling: 'Always plot the linear velocity line on a t-axis to see the triangle areas visually.',
              advanced: 'Derive escape velocity equation from a = -g R^2 / x^2.'
            },
            differentiationAr: {
              struggling: 'رسم خط إشارة السرعة هندسياً وحساب المساحات كمثلثات للتحقق.',
              advanced: 'استنتاج سرعة الهروب من الجاذبية بتكامل جـ = -د نق² / س².'
            },
            formativeAssessmentEn: 'A particle moves with v(t) = 6 - 2t. Find displacement and total distance in [0, 5].',
            formativeAssessmentAr: 'يتحرك جسيم بسرعة $v(t) = 6 - 2t$. احسب الإزاحة والمسافة الكلية المقطوعة في الفترة $[0, 5]$.',
            exitTicketQuestion: {
              questionEn: 'If a(x) = 2x + 1 and v = 3 when x = 1, find v^2 when x = 3.',
              questionAr: 'إذا كانت العجلة $a(x) = 2x + 1$ وكانت السرعة $v = 3$ عندما $x = 1$، فاحسب $v^2$ عندما $x = 3$.',
              solutionEn: 'Integral v dv = Integral (2x + 1) dx => 1/2(v^2 - 3^2) = [x^2 + x]_1^3 = (9 + 3) - (1 + 1) = 12 - 2 = 10. Thus 1/2(v^2 - 9) = 10 => v^2 - 9 = 20 => v^2 = 29.',
              solutionAr: 'تكامل ع دع = تكامل (2س + 1) دس => 1/2(ع² - 9) = [س² + س] من 1 إلى 3 = (9 + 3) - (1 + 1) = 10. إذن 1/2(ع² - 9) = 10 => ع² - 9 = 20 => ع² = 29.'
            }
          },
          worksheet: {
            id: 'ws_dyn_l2',
            titleEn: 'Solved Worksheet: Integration of Vector Functions & Distance',
            titleAr: 'ورقة عمل محلولة: تكامل الدوال المتجهة والمسافة',
            descriptionEn: 'Exam problems on integration of acceleration, v dv = a dx, and computing total distance.',
            descriptionAr: 'مسائل امتحانات على تكامل العجلة وحساب المسافة الكلية والإزاحة.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p_dyn4',
                titleEn: 'Exam Standard: Total Distance vs Displacement',
                titleAr: 'مسألة امتحانية: المسافة الكلية المقطوعة مقابل الإزاحة',
                difficulty: 'exam_standard',
                questionEn: 'A particle moves in a straight line with velocity $v(t) = 3t^2 - 12t\\text{ m/s}$. Find the total distance traveled by the particle in the time interval $t \\in [0, 5]$.',
                questionAr: 'يتحرك جسيم في خط مستقيم بسرعة $v(t) = 3t^2 - 12t$ م/ث. احسب المسافة الكلية التي يقطعها الجسيم في الفترة الزمنية $t \\in [0, 5]$.',
                optionsEn: ['32\\text{ meters}', '39\\text{ meters}', '65\\text{ meters}', '71\\text{ meters}'],
                optionsAr: ['٣٢ متراً', '٣٩ متراً', '٦٥ متراً', '٧١ متراً'],
                correctAnswer: '65\\text{ meters}',
                correctIndex: 2,
                hintEn: 'Find where v(t) = 0 inside [0, 5]. Then split the integral into intervals and take absolute values.',
                hintAr: 'أوجد أصفار السرعة ع(ن) = 0 في الفترة [0, 5] ثم قسم التكامل واحسب القيمة المطلقة لكل فترة.',
                stepByStepSolutionEn: [
                  '1. Find zero crossings of velocity:',
                  '$$v(t) = 3t^2 - 12t = 3t(t - 4) = 0 \\implies t = 0 \\quad \\text{or} \\quad t = 4\\text{ s}$$',
                  'Since $t = 4$ lies inside the interval $[0, 5]$, the particle reverses direction at $t = 4$.',
                  '2. Compute path in interval $[0, 4]$:',
                  '$$s_1 = \\int_0^4 (3t^2 - 12t) dt = \\left[ t^3 - 6t^2 \\right]_0^4 = 64 - 6(16) = 64 - 96 = -32\\text{ m}$$',
                  'The distance in this interval is $|s_1| = 32\\text{ m}$.',
                  '3. Compute path in interval $[4, 5]$:',
                  '$$s_2 = \\int_4^5 (3t^2 - 12t) dt = \\left[ t^3 - 6t^2 \\right]_4^5 = (125 - 150) - (64 - 96) = -25 - (-32) = +7\\text{ m}$$',
                  'The distance in this interval is $|s_2| = 7\\text{ m}$.',
                  '4. Total distance traveled:',
                  '$$D = |s_1| + |s_2| = 32 + 7 = 65\\text{ meters}$$',
                  '*(Note: The net displacement is $s = s_1 + s_2 = -32 + 7 = -25\\text{ m}$, highlighting the essential difference!)*'
                ],
                stepByStepSolutionAr: [
                  '١. إيجاد لحظات انعدام السرعة:',
                  '$$v(t) = 3t^2 - 12t = 3t(t - 4) = 0 \\implies t = 4\\text{ ثوانٍ}$$',
                  'بما أن $t = 4$ تقع داخل الفترة $[0, 5]$، فإن الجسيم يغير اتجاه حركته عند $t = 4$.',
                  '٢. حساب الإزاحة في الفترة الأولى $[0, 4]$:',
                  '$$s_1 = \\int_0^4 (3t^2 - 12t) dt = \\left[ t^3 - 6t^2 \\right]_0^4 = 64 - 96 = -32\\text{ م}$$',
                  'إذن المسافة المقطوعة في هذه الفترة $= |s_1| = 32$ م.',
                  '٣. حساب الإزاحة في الفترة الثانية $[4, 5]$:',
                  '$$s_2 = \\int_4^5 (3t^2 - 12t) dt = \\left[ t^3 - 6t^2 \\right]_4^5 = (-25) - (-32) = +7\\text{ م}$$',
                  'إذن المسافة المقطوعة في هذه الفترة $= |s_2| = 7$ م.',
                  '٤. المسافة الكلية المقطوعة:',
                  '$$D = |s_1| + |s_2| = 32 + 7 = 65\\text{ متراً}$$'
                ],
                teacherTipEn: 'A classic trap in national exams! Integrating directly from 0 to 5 yields -25m, which is the displacement, NOT the total distance.',
                teacherTipAr: 'فخ امتحاني شهير! التكامل المباشر من 0 إلى 5 يعطي -25 متراً وهي الإزاحة وليست المسافة الكلية.'
              },
              {
                id: 'p_dyn5',
                titleEn: 'Foundation Problem: Velocity by Integrating a(t)',
                titleAr: 'مسألة تأسيسية: إيجاد السرعة بتكامل العجلة الزمني',
                difficulty: 'easy',
                questionEn: 'A particle starts from rest ($v_0 = 0$) with acceleration $a(t) = 6t - 4\\text{ m/s}^2$. Find its velocity at time $t = 3\\text{ seconds}$.',
                questionAr: 'بدأ جسيم حركته من السكون ($v_0 = 0$) بعجلة $a(t) = 6t - 4$ م/ث². أوجد سرعته عند اللحظة $t = 3$ ثوانٍ.',
                optionsEn: ['12\\text{ m/s}', '15\\text{ m/s}', '18\\text{ m/s}', '23\\text{ m/s}'],
                optionsAr: ['١٢ م/ث', '١٥ م/ث', '١٨ م/ث', '٢٣ م/ث'],
                correctAnswer: '15\\text{ m/s}',
                correctIndex: 1,
                hintEn: 'v(t) = v0 + Integral_0^t a(t) dt. Compute the definite integral with v0 = 0.',
                hintAr: 'ع(ن) = ع٠ + تكامل جـ(ن) دن. احسب التكامل المحدد مع ع٠ = 0.',
                stepByStepSolutionEn: [
                  'Apply the definite integral definition:',
                  '$$v(t) = v_0 + \\int_0^t (6t - 4) dt$$',
                  'Since the particle starts from rest, $v_0 = 0$:',
                  '$$v(t) = \\left[ 3t^2 - 4t \\right]_0^t = 3t^2 - 4t$$',
                  'Substitute $t = 3\\text{ seconds}$:',
                  '$$v(3) = 3(3)^2 - 4(3) = 3(9) - 12 = 27 - 12 = 15\\text{ m/s}$$'
                ],
                stepByStepSolutionAr: [
                  'تطبيق قانون تكامل العجلة:',
                  '$$v(t) = v_0 + \\int_0^t (6t - 4) dt$$',
                  'بما أن الحركة بدأت من السكون، إذن $v_0 = 0$:',
                  '$$v(t) = \\left[ 3t^2 - 4t \\right]_0^t = 3t^2 - 4t$$',
                  'بالتعويض عن $t = 3$ ثوانٍ:',
                  '$$v(3) = 3(3)^2 - 4(3) = 27 - 12 = 15\\text{ م/ث}$$'
                ],
                teacherTipEn: 'Always verify if initial velocity v0 is zero or has a nonzero value in the problem statement!',
                teacherTipAr: 'تأكد دائماً من نص المسألة: هل بدأ الجسيم من السكون (ع٠ = 0) أم بسرعة ابتدائية معلومة؟'
              },
              {
                id: 'p_dyn6',
                titleEn: 'HOTS Problem: Separation of Variables with Position',
                titleAr: 'مسألة مهارات تفكير عليا: فصل المتغيرات بدلالة الموضع',
                difficulty: 'hots',
                questionEn: 'A particle moves in a straight line with acceleration $a = \\frac{1}{x^2}\\text{ m/s}^2$ ($x > 0$). If its velocity was $v = 2\\text{ m/s}$ at $x = 1\\text{ m}$, find the limiting velocity of the particle as $x \\to \\infty$.',
                questionAr: 'يتحرك جسيم في خط مستقيم بعجلة $a = \\frac{1}{x^2}$ م/ث² (حيث $x > 0$). إذا كانت سرعته $v = 2$ م/ث عند $x = 1$ م، فأوجد النهاية العظمى لسرعة الجسيم عندما $x \\to \\infty$.',
                optionsEn: ['\\sqrt{2}\\text{ m/s}', '\\sqrt{6}\\text{ m/s}', '3\\text{ m/s}', '\\sqrt{8}\\text{ m/s}'],
                optionsAr: ['\\sqrt{2} م/ث', '\\sqrt{6} م/ث', '٣ م/ث', '\\sqrt{8} م/ث'],
                correctAnswer: '\\sqrt{6}\\text{ m/s}',
                correctIndex: 1,
                hintEn: 'Use v dv = a(x) dx. Integrate from x = 1, v = 2 to x -> infinity.',
                hintAr: 'استخدم القانون ع دع = جـ(س) دس ثم أجرِ التكامل من س = 1، ع = 2 حتى س تؤول لما لا نهاية.',
                stepByStepSolutionEn: [
                  'Substitute $a = v \\frac{dv}{dx}$:',
                  '$$v \\frac{dv}{dx} = \\frac{1}{x^2} \\implies v \\, dv = x^{-2} \\, dx$$',
                  'Integrate both sides from initial state $(x_0 = 1, v_0 = 2)$ to general $(x, v)$:',
                  '$$\\int_2^v v \\, dv = \\int_1^x x^{-2} \\, dx$$',
                  '$$\\left[ \\frac{v^2}{2} \\right]_2^v = \\left[ -\\frac{1}{x} \\right]_1^x$$',
                  '$$\\frac{v^2 - 4}{2} = -\\frac{1}{x} - (-1) = 1 - \\frac{1}{x}$$',
                  '$$v^2 - 4 = 2 \\left(1 - \\frac{1}{x}\\right) = 2 - \\frac{2}{x} \\implies v^2 = 6 - \\frac{2}{x}$$',
                  'As $x \\to \\infty$, $\\frac{2}{x} \\to 0$, so:',
                  '$$v^2 \\to 6 \\implies v = \\sqrt{6}\\text{ m/s}$$'
                ],
                stepByStepSolutionAr: [
                  'التعويض عن $a = v \\frac{dv}{dx}$:',
                  '$$v \\frac{dv}{dx} = \\frac{1}{x^2} \\implies v \\, dv = x^{-2} \\, dx$$',
                  'إجراء التكامل من الحالة الابتدائية $(x_0 = 1, v_0 = 2)$ إلى $(x, v)$:',
                  '$$\\int_2^v v \\, dv = \\int_1^x x^{-2} \\, dx$$',
                  '$$\\frac{v^2 - 4}{2} = \\left[ -\\frac{1}{x} \\right]_1^x = 1 - \\frac{1}{x}$$',
                  '$$v^2 - 4 = 2 - \\frac{2}{x} \\implies v^2 = 6 - \\frac{2}{x}$$',
                  'عندما $x \\to \\infty$، فإن $\\frac{2}{x} \\to 0$، ومنها:',
                  '$$v^2 \\to 6 \\implies v = \\sqrt{6}\\text{ م/ث}$$'
                ],
                teacherTipEn: 'This model demonstrates escape velocity kinematics where gravity decreases with the square of distance.',
                teacherTipAr: 'نموذج فيزيائي راقٍ يعبر عن حركة الأجسام في مجالات الجاذبية التي تتناسب عكسياً مع مربع البعد.'
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Definite Integral & Kinematic Path Area Visualizer',
            titleAr: 'محاكي التكامل المحدد ومساحات منحنى السرعة',
            descriptionEn: 'Visualizer showing area under v(t) curve, positive/negative area cancellation, and distance calculation.',
            descriptionAr: 'محاكي تفاعلي لعرض المساحة تحت منحنى السرعة وحساب المسافة الكلية والإزاحة هندسياً.'
          }
        }
      ],
      solvedExamples: dynCh1SolvedExamples,
      exerciseProblems: dynCh1Exercises,
      databank: dynCh1Databank
    },
    {
      id: 'dyn_ch2',
      chapterNumber: 2,
      titleEn: 'Newton\'s Laws of Motion & Momentum',
      titleAr: 'قوانين نيوتن للحركة وكمية الحركة',
      descriptionEn: 'Linear momentum H = mv, impulse-momentum relation, Newton\'s first law (equilibrium and terminal velocity), Newton\'s second law F = ma, units of force, apparent weight in elevators, and motion of systems on smooth pulleys.',
      descriptionAr: 'كمية الحركة كـ = ك ع، التغير في كمية الحركة، قانون نيوتن الأول (السرعة المنتظمة وأقصى سرعة)، قانون نيوتن الثاني ق = ك جـ، وحدات القوة والداين والنيوتن، حركة المصاعد والوزن الظاهري، وحركة الأجسام المتصلة ببكرات ملساء.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'dyn_l3',
          titleEn: 'Linear Momentum & Newton\'s First and Second Laws',
          titleAr: 'كمية الحركة وقانونا نيوتن الأول والثاني',
          summaryEn: 'Understanding momentum H = mv, impulse-momentum theorem Delta H = m Delta v = Integral F dt, Newton\'s 1st law (uniform speed under balanced forces F = R), and Newton\'s 2nd law F = d(mv)/dt = ma with metric unit conversions.',
          summaryAr: 'فهم كمية الحركة $H = mv$، التغير في كمية الحركة $\\Delta H = m(v_2 - v_1) = \\int F dt$، قانون نيوتن الأول (السرعة المنتظمة وأقصى سرعة $F = R$)، وقانون نيوتن الثاني $F = \\frac{d}{dt}(mv) = ma$ مع تحويل الوحدات.',
          theoryContentEn: `### 1. Linear Momentum ($H$ or $p$):
The linear momentum of a body of mass $m$ moving with velocity $\\vec{v}$ is:
$$\\vec{H} = m \\vec{v}$$
- **Change in Momentum (التغير في كمية الحركة):**
  - For constant mass $m$:
    $$\\Delta H = m (v_2 - v_1)$$
  - When force $\\vec{F}$ acts over time interval $[t', t_2]$:
    $$\\Delta H = \\int_{t_1}^{t_2} \\vec{F} \\, dt = \\text{Impulse } (I)$$

### 2. Newton\'s First Law of Motion:
Every body remains in its state of rest or uniform motion in a straight line unless compelled to change that state by forces acting upon it.
- **Key Mathematical Condition:**
  $$\\sum \\vec{F} = \\vec{0}$$
- **When a car/train moves with maximum uniform velocity:**
  $$F = R$$
  where $F$ is engine driving force and $R$ is total resistance.
- **If resistance is proportional to velocity:** $R \\propto v \\implies \\frac{R_1}{R_2} = \\frac{v_1}{v_2}$.
- **If resistance is proportional to square of velocity:** $R \\propto v^2 \\implies \\frac{R_1}{R_2} = \\left(\\frac{v_1}{v_2}\\right)^2$.

### 3. Newton\'s Second Law of Motion:
The rate of change of momentum of a body is directly proportional to the resultant force acting on it:
$$\\vec{F} = \\frac{d}{dt}(m\\vec{v})$$
- **Case 1: Constant Mass $m$:**
  $$\\vec{F} = m \\frac{d\\vec{v}}{dt} = m \\vec{a}$$
- **Case 2: Variable Mass $m(t)$ (كتلة متغيرة):**
  $$\\vec{F} = m(t) \\frac{d\\vec{v}}{dt} + \\vec{v} \\frac{dm}{dt}$$

### 4. Units of Force and Conversions:
- **Absolute Units (الوحدات المطلقة):**
  - **1 Newton (N):** Force giving $1\\text{ kg}$ an acceleration of $1\\text{ m/s}^2$ ($1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$).
  - **1 Dyne (داين):** Force giving $1\\text{ g}$ an acceleration of $1\\text{ cm/s}^2$ ($1\\text{ N} = 10^5\\text{ dynes}$).
- **Gravitational Units (الوحدات التثاقلية):**
  - $1\\text{ kg-wt (ثقل كجم)} = 9.8\\text{ N}$.
  - $1\\text{ g-wt (ثقل جم)} = 980\\text{ dynes}$.`,
          theoryContentAr: `### ١. كمية الحركة ($H$):
كمية حركة جسم كتلته $m$ يتحرك بسرعة $\\vec{v}$ هي:
$$\\vec{H} = m \\vec{v}$$
- **التغير في كمية الحركة:**
  - إذا كانت الكتلة ثابتة:
    $$\\Delta H = m (v_2 - v_1)$$
  - عند تأثير قوة $F$ خلال فترة زمنية $[t', t_2]$:
    $$\\Delta H = \\int_{t_1}^{t_2} F \\, dt = \\text{الدفع } (I)$$

### ٢. قانون نيوتن الأول:
يظل كل جسم على حالته من السكون أو الحركة المنتظمة في خط مستقيم ما لم تؤثر عليه قوة خارجية تغير من حالته.
- **الشرط الرياضي الأساسي:**
  $$\\sum \\vec{F} = \\vec{0}$$
- **عند حركة قطار أو سيارة بأقصى سرعة منتظمة:**
  $$F = R$$
  حيث $F$ قوة المحرك و $R$ المقاومة الكلية.
- **إذا كانت المقاومة تتناسب طردياً مع السرعة:**
  $$R \\propto v \\implies \\frac{R_1}{R_2} = \\frac{v_1}{v_2}$$
- **إذا كانت المقاومة تتناسب مع مربع السرعة:**
  $$R \\propto v^2 \\implies \\frac{R_1}{R_2} = \\left(\\frac{v_1}{v_2}\\right)^2$$

### ٣. قانون نيوتن الثاني:
معدل التغير في كمية حركة جسم يتناسب مع القوة المحصلة المحدثة له ويكون في اتجاهها:
$$\\vec{F} = \\frac{d}{dt}(m\\vec{v})$$
- **الحالة الأولى: الكتلة ثابتة ($m = \\text{ثابت}$):**
  $$\\vec{F} = m \\vec{a}$$
- **الحالة الثانية: الكتلة متغيرة كدالة في الزمن ($m(t)$):**
  $$\\vec{F} = \\frac{d}{dt}(m(t) \\cdot v(t)) = m \\frac{dv}{dt} + v \\frac{dm}{dt}$$

### ٤. وحدات القوة والتحويلات:
- **الوحدات المطلقة:**
  - **النيوتن:** القوة التي إذا أثرت على كتلة $1$ كجم أكسبتها عجلة $1$ م/ث² ($1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$).
  - **الداين:** القوة التي إذا أثرت على كتلة $1$ جم أكسبتها عجلة $1$ سم/ث² ($1\\text{ نيوتن} = 10^5\\text{ داين}$).
- **الوحدات التثاقلية:**
  - $1$ ثقل كجم = $9.8$ نيوتن.
  - $1$ ثقل جم = $980$ داين.`,
          formulas: [
            { labelEn: 'Linear Momentum Formula', labelAr: 'قانون كمية الحركة', latex: 'H = m v' },
            { labelEn: 'Newton 1st Law Equilibrium', labelAr: 'شرط قانون نيوتن الأول', latex: '\\sum \\vec{F} = \\vec{0} \\implies F = R' },
            { labelEn: 'Newton 2nd Law (Constant Mass)', labelAr: 'قانون نيوتن الثاني للكتلة الثابتة', latex: 'F - R = m a' },
            { labelEn: 'Newton 2nd Law (Variable Mass)', labelAr: 'قانون نيوتن الثاني للكتلة المتغيرة', latex: 'F = \\frac{d}{dt}(m v)' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Dynamics Textbook Grade 12',
            bookTitleAr: 'كتاب الديناميكا للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-DYN-CH2-L1',
            pageRange: 'pp. 36 - 58'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Momentum, Newton\'s Laws & Variable Mass Dynamics',
            titleAr: 'خطة درس: كمية الحركة وقوانين نيوتن وديناميكا الكتلة المتغيرة',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-DYN-CH2-L1',
            bloomsObjectivesEn: [
              'Calculate momentum and change in momentum under constant and variable forces.',
              'Solve equilibrium problems under Newton\'s First Law with resistance proportional to velocity or velocity squared.',
              'Formulate dynamic equations of motion F = ma converting accurately between gravitational and absolute force units.'
            ],
            bloomsObjectivesAr: [
              'حساب كمية الحركة والتغير فيها تحت تأثير قوى ثابتة ومتغيرة.',
              'حل مسائل الاتزان الحركي لقانون نيوتن الأول مع مقاومات تتناسب مع السرعة أو مربعها.',
              'صياغة معادلة الحركة ق - م = ك جـ مع التحويل الدقيق بين الوحدات المطلقة والتثاقلية.'
            ],
            prerequisitesEn: ['Vectors resolution', 'Uniform velocity concepts', 'Definite integration'],
            prerequisitesAr: ['تحليل المتجهات', 'مفهوم السرعة المنتظمة', 'التكامل المحدد'],
            keyVocabularyEn: [
              { term: 'Terminal / Maximum Speed', definition: 'Uniform velocity where driving force equals total opposing resistance (a = 0).' },
              { term: 'Absolute Units', definition: 'Newtons and Dynes, independent of local gravitational acceleration g.' },
              { term: 'Gravitational Units', definition: 'kg-wt and g-wt, requiring multiplication by g (9.8 or 980) when applying F = ma.' }
            ],
            keyVocabularyAr: [
              { term: 'أقصى سرعة منتظمة', definition: 'السرعة التي تنعدم عندها العجلة وتتساوى فيها قوة المحرك مع المقاومة الكلية.' },
              { term: 'الوحدات المطلقة', definition: 'النيوتن والداين، وهي وحدات قياسية لا تعتمد على عجلة الجاذبية الأرضية.' },
              { term: 'الوحدات التثاقلية', definition: 'ثقل كجم وثقل جم، ويجب ضربها في د (٩٫٨ أو ٩٨٠) عند تطبيق قانون ق = ك جـ.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Linear Momentum & Impulse Overview (20 mins)',
                phaseAr: 'مقدمة كمية الحركة والدفع (٢٠ دقيقة)',
                duration: '20 mins',
                activitiesEn: 'Derive momentum conservation and change in momentum Delta H = Integral F dt.',
                activitiesAr: 'شرح مفهوم كمية الحركة والتغير فيها كعلاقة تكامل للقوة بالنسبة للزمن.'
              },
              {
                phaseEn: 'Newton\'s First Law & Proportional Resistance (25 mins)',
                phaseAr: 'قانون نيوتن الأول وتناسب المقاومات (٢٥ دقيقة)',
                duration: '25 mins',
                activitiesEn: 'Solve problems where a train moves with maximum velocity and engine power is analyzed.',
                activitiesAr: 'حل مسائل قطار يتحرك بأقصى سرعة مع المقاومة المتناسبة مع مربع السرعة.'
              },
              {
                phaseEn: 'Newton\'s Second Law: Units Protocol (30 mins)',
                phaseAr: 'قانون نيوتن الثاني وبروتوكول الوحدات (٣٠ دقيقة)',
                duration: '30 mins',
                activitiesEn: 'Drill the strict rule: in F - R = ma, F and R MUST be in Newtons, m in kg, and a in m/s^2.',
                activitiesAr: 'التأكيد الصارم على الوحدات: في المعادلة ق - م = ك جـ، يجب أن تكون القوى بالنيوتن والكتلة بالكجم والعجلة بالمتر/ث².'
              },
              {
                phaseEn: 'Exit Ticket & Debrief (15 mins)',
                phaseAr: 'بطاقة الخروج والتقييم (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Assess students on variable mass differentiation rule F = d(mv)/dt.',
                activitiesAr: 'تقييم الطلاب على مسألة كتلة متغيرة ق = د(ك ع)/دن.'
              }
            ],
            commonMisconceptionsEn: [
              'Plugging kg-wt directly into F - R = ma without multiplying by 9.8! (A fatal exam error).',
              'Assuming Newton\'s second law is always F = ma, forgetting that when mass varies with time, F = d(mv)/dt.'
            ],
            commonMisconceptionsAr: [
              'التعويض بوحدة ثقل كجم مباشرة في قانون ق - م = ك جـ دون التحويل إلى نيوتن بالضرب في 9.8!',
              'اعتقاد أن قانون نيوتن الثاني هو دائماً ق = ك جـ، وإغفال أنه في حالة الكتلة المتغيرة نستخدم ق = د(ك ع)/دن.'
            ],
            differentiationEn: {
              struggling: 'Provide a unit conversion cheat-card: kg-wt * 9.8 -> Newtons; g-wt * 980 -> Dynes.',
              advanced: 'Solve rocket propulsion motion where mass decreases at rate dm/dt = -k while expelling fuel at relative speed u.'
            },
            differentiationAr: {
              struggling: 'تزويد الطلاب ببطاقة تحويل الوحدات: ثقل كجم × ٩٫٨ = نيوتن، وثقل جم × ٩٨٠ = داين.',
              advanced: 'حل مسألة حركة صاروخ تقل كتلته بمعدل ثابت مع نفث الوقود بسرعة نسبية.'
            },
            formativeAssessmentEn: 'A train of mass 200 tons moves on horizontal rails with uniform speed 72 km/h. If resistance is 8 kg-wt per ton, find engine force in kg-wt.',
            formativeAssessmentAr: 'قطار كتلته $200$ طن يتحرك على خط أفقي بسرعة منتظمة $72$ كم/ساعة. فإذا كانت المقاومة $8$ ثقل كجم لكل طن، فأوجد قوة آلة القطار بثقل الكيلوجرام.',
            exitTicketQuestion: {
              questionEn: 'A force F = 5t + 2 Newtons acts on a body of mass 2 kg initially at rest. Find its velocity after 4 seconds.',
              questionAr: 'أثرت قوة $F = 5t + 2$ نيوتن على جسم كتلته $2$ كجم بدأ حركته من السكون. أوجد سرعته بعد $4$ ثوانٍ.',
              solutionEn: 'From F = m(dv/dt) => 2(dv/dt) = 5t + 2 => dv = 1/2(5t + 2)dt. Integrating: v = [2.5(t^2/2) + t]_0^4 = 2.5(8) + 4 = 20 + 4 = 24 m/s.',
              solutionAr: 'من قانون ق = ك (دع/دن) => 2 (دع/دن) = 5ن + 2 => دع = (2.5ن + 1) دن. بالتكامل: ع = [1.25 ن² + ن] من 0 إلى 4 = 1.25(16) + 4 = 20 + 4 = 24 م/ث.'
            }
          },
          worksheet: {
            id: 'ws_dyn_l3',
            titleEn: 'Solved Worksheet: Momentum & Newton\'s Laws',
            titleAr: 'ورقة عمل محلولة: كمية الحركة وقوانين نيوتن',
            descriptionEn: 'Official exam problems on Newton\'s 1st and 2nd laws, resistance proportionalities, and force conversions.',
            descriptionAr: 'مسائل امتحانات الثانوية العامة على قوانين نيوتن وتناسب المقاومة وتحويلات الوحدات.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p_dyn7',
                titleEn: 'Exam Standard: Resistance Proportional to Velocity Squared',
                titleAr: 'مسألة امتحانية: المقاومة تتناسب مع مربع السرعة',
                difficulty: 'exam_standard',
                questionEn: 'A train moves on horizontal rails against a resistance proportional to the square of its speed ($R \\propto v^2$). When its speed is $36\\text{ km/h}$, the resistance is $2000\\text{ kg-wt}$. Find the engine force when the train travels at its maximum speed of $72\\text{ km/h}$.',
                questionAr: 'قطار يسير على طريق أفقي ضد مقاومة تتناسب طردياً مع مربع سرعته ($R \\propto v^2$). فإذا كانت المقاومة $2000$ ثقل كجم عندما كانت سرعته $36$ كم/س، فاحسب قوة محرك القطار عندما يسير بأقصى سرعة وقدرها $72$ كم/س.',
                optionsEn: ['4000\\text{ kg-wt}', '6000\\text{ kg-wt}', '8000\\text{ kg-wt}', '10000\\text{ kg-wt}'],
                optionsAr: ['٤٠٠٠ ثقل كجم', '٦٠٠٠ ثقل كجم', '٨٠٠٠ ثقل كجم', '١٠٠٠٠ ثقل كجم'],
                correctAnswer: '8000\\text{ kg-wt}',
                correctIndex: 2,
                hintEn: 'Since R is proportional to v^2: R1 / R2 = (v1 / v2)^2. At maximum speed, acceleration is zero, so Engine Force F = R2.',
                hintAr: 'بما أن المقاومة تتناسب مع مربع السرعة: م١ / م٢ = (ع١ / ع٢)². وعند أقصى سرعة تكون القوة مساوية للمقاومة ق = م٢.',
                stepByStepSolutionEn: [
                  '1. Use the resistance proportionality relation:',
                  '$$\\frac{R_1}{R_2} = \\left( \\frac{v_1}{v_2} \\right)^2$$',
                  'Given $R_1 = 2000\\text{ kg-wt}$ when $v_1 = 36\\text{ km/h}$, and maximum speed $v_2 = 72\\text{ km/h}$:',
                  '$$\\frac{2000}{R_2} = \\left( \\frac{36}{72} \\right)^2 = \\left( \\frac{1}{2} \\right)^2 = \\frac{1}{4}$$',
                  '$$R_2 = 2000 \\times 4 = 8000\\text{ kg-wt}$$',
                  '2. Apply Newton\'s First Law at maximum speed ($a = 0$):',
                  '$$F = R_2 = 8000\\text{ kg-wt}$$'
                ],
                stepByStepSolutionAr: [
                  '١. استخدام علاقة تناسب المقاومة مع مربع السرعة:',
                  '$$\\frac{R_1}{R_2} = \\left( \\frac{v_1}{v_2} \\right)^2$$',
                  'المعطيات: $R_1 = 2000$ ثقل كجم عند $v_1 = 36$ كم/س، والسرعة القصوى $v_2 = 72$ كم/س:',
                  '$$\\frac{2000}{R_2} = \\left( \\frac{36}{72} \\right)^2 = \\left( \\frac{1}{2} \\right)^2 = \\frac{1}{4}$$',
                  '$$R_2 = 2000 \\times 4 = 8000\\text{ ثقل كجم}$$',
                  '٢. بتطبيق قانون نيوتن الأول عند الحركة بأقصى سرعة منتظمة ($a = 0$):',
                  '$$F = R_2 = 8000\\text{ ثقل كجم}$$'
                ],
                teacherTipEn: 'Notice that since ratio (v1/v2) is dimensionless, you do not need to convert km/h to m/s as long as both speeds have the same units!',
                teacherTipAr: 'ملاحظة ذكية: بما أن النسبة ع١/ع٢ نسبة بلا أبعاد، فليس من الضروري التحويل إلى م/ث طالما أن الوحدتين متماثلتان!'
              },
              {
                id: 'p_dyn8',
                titleEn: 'Foundation Problem: Newton\'s 2nd Law Force Calculation',
                titleAr: 'مسألة تأسيسية: حساب القوة من قانون نيوتن الثاني',
                difficulty: 'easy',
                questionEn: 'A body of mass $m = 5\\text{ kg}$ is initially at rest on a smooth horizontal plane. A horizontal force $F$ acts on it, causing it to cover a distance of $36\\text{ m}$ in $6\\text{ seconds}$. Find the magnitude of force $F$.',
                questionAr: 'جسم كتلته $m = 5$ كجم موضوع في حالة سكون على مستوى أفقي أملس. أثرت عليه قوة أفقية $F$ فحركته مسافة $36$ متراً في $6$ ثوانٍ. احسب مقدار القوة $F$.',
                optionsEn: ['5\\text{ N}', '10\\text{ N}', '15\\text{ N}', '20\\text{ N}'],
                optionsAr: ['٥ نيوتن', '١٠ نيوتن', '١٥ نيوتن', '٢٠ نيوتن'],
                correctAnswer: '10\\text{ N}',
                correctIndex: 1,
                hintEn: 'Use s = v0 t + 1/2 a t^2 to find acceleration a, then apply F = m a.',
                hintAr: 'استخدم القانون ف = ع٠ ن + ١/٢ جـ ن² لحساب العجلة جـ، ثم طبق قانون نيوتن الثاني ق = ك جـ.',
                stepByStepSolutionEn: [
                  'From kinematic equations under constant acceleration, starting from rest ($v_0 = 0$):',
                  '$$s = v_0 t + \\frac{1}{2} a t^2 \\implies 36 = 0 + \\frac{1}{2} a (6)^2$$',
                  '$$36 = 18 a \\implies a = \\frac{36}{18} = 2\\text{ m/s}^2$$',
                  'Apply Newton\'s second law on smooth plane ($R = 0$):',
                  '$$F = m a = 5\\text{ kg} \\times 2\\text{ m/s}^2 = 10\\text{ N}$$'
                ],
                stepByStepSolutionAr: [
                  'من معادلات الحركة بعجلة منتظمة والبدء من السكون ($v_0 = 0$):',
                  '$$s = v_0 t + \\frac{1}{2} a t^2 \\implies 36 = \\frac{1}{2} a (36) \\implies 18 a = 36$$',
                  '$$a = \\frac{36}{18} = 2\\text{ م/ث²}$$',
                  'تطبيق قانون نيوتن الثاني على المستوى الأملس:',
                  '$$F = m a = 5 \\times 2 = 10\\text{ نيوتن}$$'
                ],
                teacherTipEn: 'Ensure students recognize that on a smooth plane, opposing resistance is zero (R = 0).',
                teacherTipAr: 'تأكد من إدراك الطلاب أن المستوى الأملس يعني انعدام قوة الاحتكاك والمقاومة.'
              },
              {
                id: 'p_dyn9',
                titleEn: 'HOTS Problem: Variable Mass Raindrop Dynamics',
                titleAr: 'مسألة مهارات تفكير عليا: ديناميكا قطرة المطر متغيرة الكتلة',
                difficulty: 'hots',
                questionEn: 'A spherical raindrop of initial mass $m_0 = 1\\text{ g}$ falls vertically under gravity ($g = 980\\text{ cm/s}^2$). As it falls, vapor condenses on its surface such that its mass at time $t$ is $m(t) = 1 + 0.2t\\text{ grams}$. If the raindrop started from rest and air resistance is neglected, find the equation for its velocity $v(t)$.',
                questionAr: 'قطرة مطر كروية كتلتها الابتدائية $m_0 = 1$ جم تسقط رأسياً تحت تأثير الجاذبية ($g = 980$ سم/ث²). وأثناء سقوطها يتكثف بخار الماء على سطحها بحيث تصبح كتلتها عند اللحظة $t$ هي $m(t) = 1 + 0.2t$ جم. فإذا بدأت القطرة من السكون وأهملت مقاومة الهواء، فأوجد معادلة سرعتها $v(t)$.',
                optionsEn: [
                  'v(t) = \\frac{980t + 98t^2}{1 + 0.2t}',
                  'v(t) = 980t',
                  'v(t) = \\frac{490t^2}{1 + 0.2t}',
                  'v(t) = \\frac{980t}{1 + 0.2t}'
                ],
                optionsAr: [
                  'ع(ن) = (٩٨٠ن + ٩٨ن²) / (١ + ٠٫٢ن)',
                  'ع(ن) = ٩٨٠ن',
                  'ع(ن) = ٤٩٠ن² / (١ + ٠٫٢ن)',
                  'ع(ن) = ٩٨٠ن / (١ + ٠٫٢ن)'
                ],
                correctAnswer: 'v(t) = \\frac{980t + 98t^2}{1 + 0.2t}',
                correctIndex: 0,
                hintEn: 'When mass varies with time, Newton\'s second law is F = d(m v)/dt. Here F = weight = m(t) * g.',
                hintAr: 'عندما تتغير الكتلة مع الزمن نطبق ق = د(ك ع)/دن حيث ق هي قوة الوزن = ك(ن) × د.',
                stepByStepSolutionEn: [
                  '1. Apply Newton\'s second law for variable mass:',
                  '$$F = \\frac{d}{dt} [m(t) \\cdot v(t)]$$',
                  'The only force acting is gravity:',
                  '$$F = W = m(t) \\cdot g = (1 + 0.2t) \\times 980 = 980 + 196t$$',
                  '2. Integrate both sides with respect to time $t$:',
                  '$$m(t) \\cdot v(t) = \\int (980 + 196t) dt = 980t + 98t^2 + C$$',
                  '3. Initial condition: at $t = 0$, $v(0) = 0 \\implies C = 0$.',
                  '$$m(t) \\cdot v(t) = 980t + 98t^2$$',
                  'Substitute $m(t) = 1 + 0.2t$:',
                  '$$v(t) = \\frac{980t + 98t^2}{1 + 0.2t}\\text{ cm/s}$$'
                ],
                stepByStepSolutionAr: [
                  '١. تطبيق قانون نيوتن الثاني في حالة الكتلة المتغيرة:',
                  '$$F = \\frac{d}{dt} [m(t) \\cdot v(t)]$$',
                  'القوة المؤثرة هي قوة وزن القطرة لأسفل:',
                  '$$F = W = m(t) \\cdot g = (1 + 0.2t) \\times 980 = 980 + 196t$$',
                  '٢. بإجراء التكامل بالنسبة للزمن:',
                  '$$m(t) \\cdot v(t) = \\int (980 + 196t) dt = 980t + 98t^2 + C$$',
                  '٣. الشروط الابتدائية: عند $t = 0$ كانت $v = 0$ ومنها الثابت $C = 0$.',
                  '$$m(t) \\cdot v(t) = 980t + 98t^2$$',
                  'بالتعويض عن $m(t) = 1 + 0.2t$:',
                  '$$v(t) = \\frac{980t + 98t^2}{1 + 0.2t}\\text{ سم/ث}$$'
                ],
                teacherTipEn: 'Remind students of the rocket and dust collection exam problems where F = d(mv)/dt must be utilized.',
                teacherTipAr: 'مسألة امتحانية شهيرة جداً لقطرة الماء والغبار المتراكم التي تثبت الفهم العميق لقانون نيوتن الثاني الأصلي.'
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: 'Newtonian Force & Mass Acceleration Dynamics Lab',
            titleAr: 'مختبر ديناميكا القوى وقوانين نيوتن',
            descriptionEn: 'Interactive simulator testing net force F - R = ma, mass acceleration, and resistance curves.',
            descriptionAr: 'محاكي تفاعلي لاختبار محصلة القوى وحساب العجلة وتغير المقاومة مع السرعة.'
          }
        },
        {
          id: 'dyn_l4',
          titleEn: 'Newton\'s Third Law, Elevators & Smooth Pulleys',
          titleAr: 'قانون نيوتن الثالث، حركة المصاعد، والبكرات الملساء',
          summaryEn: 'Analysis of apparent weight in elevators N = m(g ± a) under upward/downward acceleration, spring balance readings, and dynamics of connected bodies over smooth pulleys with rope tension and pressure on pulley.',
          summaryAr: 'دراسة الوزن الظاهري داخل المصاعد $N = m(g \\pm a)$ عند الحركة بتسارع لأعلى أو لأسفل، قراءة الميزان الزنبركي، وحركة منظومات الأجسام المتصلة بحبال على بكرات ملساء والشد في الخيط والضغط على البكرة.',
          theoryContentEn: `### 1. Motion of Elevators (Apparent Weight $N$ vs. True Weight $mg$):
When a person of mass $m$ stands on a scale inside an elevator:
1. **Elevator at Rest or Moving with Uniform Velocity ($a = 0$):**
   $$N = mg$$
   - Apparent weight equals true weight.
2. **Elevator Moving UP with Acceleration $a$ (or DOWN with Deceleration $a$):**
   $$N - mg = ma \\implies N = m(g + a) > mg$$
   - Apparent weight is **greater** than true weight.
3. **Elevator Moving DOWN with Acceleration $a$ (or UP with Deceleration $a$):**
   $$mg - N = ma \\implies N = m(g - a) < mg$$
   - Apparent weight is **less** than true weight.
4. **Elevator in Free Fall ($a = g$):**
   $$N = m(g - g) = 0$$
   - Complete state of apparent weightlessness.

### 2. Connected Bodies on Smooth Pulleys (بكرات ملساء):
#### Case A: Two Masses $m_1 > m_2$ Suspended Vertically:
- **Equations of Motion:**
  $$m_1 g - T = m_1 a$$
  $$T - m_2 g = m_2 a$$
- **Common Acceleration:**
  $$a = \\frac{(m_1 - m_2)g}{m_1 + m_2}$$
- **String Tension ($T$):**
  $$T = \\frac{2 m_1 m_2 g}{m_1 + m_2}$$
- **Pressure on Pulley Axle ($P$):**
  $$P = 2T$$
- **Vertical Distance between the two masses after time $t$:**
  $$\\text{Distance} = 2s = 2 \\left(\\frac{1}{2} a t^2\\right) = a t^2$$

#### Case B: Mass $m_1$ on Smooth Horizontal Table Connected to Hanging Mass $m_2$:
- **Equations of Motion:**
  $$m_2 g - T = m_2 a$$
  $$T = m_1 a$$
- **Acceleration:**
  $$a = \\frac{m_2 g}{m_1 + m_2}$$
- **Tension:**
  $$T = \\frac{m_1 m_2 g}{m_1 + m_2}$$
- **Pressure on Pulley ($P$):**
  $$P = T \\sqrt{2}$$`,
          theoryContentAr: `### ١. حركة المصاعد (الوزن الظاهري $N$ مقابل الوزن الحقيقي $mg$):
عند وقوف شخص كتلته $m$ على ميزان ضغط داخل مصعد:
١. **المصعد ساكن أو يتحرك بسرعة منتظمة ($a = 0$):**
   $$N = mg$$
   - الوزن الظاهري يساوي الوزن الحقيقي تماماً.
٢. **المصعد صاعد بعجلة $a$ (أو هابط بتقصير $a$):**
   $$N - mg = ma \\implies N = m(g + a) > mg$$
   - الوزن الظاهري **أكبر** من الوزن الحقيقي (قراءة الميزان تزيد).
٣. **المصعد هابط بعجلة $a$ (أو صاعد بتقصير $a$):**
   $$mg - N = ma \\implies N = m(g - a) < mg$$
   - الوزن الظاهري **أقل** من الوزن الحقيقي (قراءة الميزان تقل).
٤. **سقوط المصعد حراً وانقطاع الحبل ($a = g$):**
   $$N = m(g - g) = 0$$
   - حالة انعدام الوزن الظاهري.

### ٢. حركة الأجسام المتصلة ببكرات ملساء:
#### الحالة الأولى: جسمان $m_1 > m_2$ يتدليان رأسياً:
- **معادلتا الحركة:**
  $$m_1 g - T = m_1 a$$
  $$T - m_2 g = m_2 a$$
- **العجلة المشتركة للتحرك:**
  $$a = \\frac{(m_1 - m_2)g}{m_1 + m_2}$$
- **قوة الشد في الخيط ($T$):**
  $$T = \\frac{2 m_1 m_2 g}{m_1 + m_2}$$
- **الضغط على محور البكرة ($P$):**
  $$P = 2T$$
- **المسافة الرأسية بين الجسمين بعد زمن $t$ من بدء الحركة من سكون:**
  $$\\text{المسافة الرأسية} = 2s = a t^2$$

#### الحالة الثانية: جسم $m_1$ على نضد أفقي أملس وجسم $m_2$ يتدلى رأسياً:
- **معادلتا الحركة:**
  $$m_2 g - T = m_2 a$$
  $$T = m_1 a$$
- **العجلة المشتركة:**
  $$a = \\frac{m_2 g}{m_1 + m_2}$$
- **الشد في الخيط:**
  $$T = \\frac{m_1 m_2 g}{m_1 + m_2}$$
- **الضغط على البكرة:**
  $$P = T \\sqrt{2}$$`,
          formulas: [
            { labelEn: 'Elevator Upward Acceleration', labelAr: 'الوزن الظاهري لمصعد صاعد بعجلة', latex: 'N = m(g + a)' },
            { labelEn: 'Elevator Downward Acceleration', labelAr: 'الوزن الظاهري لمصعد هابط بعجلة', latex: 'N = m(g - a)' },
            { labelEn: 'Vertical Pulley Acceleration', labelAr: 'عجلة الحركة الرأسية على بكرة', latex: 'a = \\frac{m_1 - m_2}{m_1 + m_2} g' },
            { labelEn: 'Vertical Pulley Pressure', labelAr: 'الضغط على محور البكرة الرأسية', latex: 'P = 2T' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Dynamics Textbook Grade 12',
            bookTitleAr: 'كتاب الديناميكا للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-DYN-CH2-L2',
            pageRange: 'pp. 59 - 84'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Elevator Apparent Weight & Connected Pulleys',
            titleAr: 'خطة درس: الوزن الظاهري في المصاعد والبكرات الملساء',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-DYN-CH2-L2',
            bloomsObjectivesEn: [
              'Analyze the difference between apparent weight and true weight in accelerating frames.',
              'Derive equations of motion for connected masses on smooth vertical and horizontal pulleys.',
              'Calculate rope tension, acceleration, and pressure exerted on the pulley axis.'
            ],
            bloomsObjectivesAr: [
              'تحليل الفارق بين الوزن الظاهري والوزن الحقيقي في الأطر المتسارعة.',
              'استنتاج معادلات الحركة للأجسام المتصلة بخيوط تمر على بكرات ملساء.',
              'حساب الشد في الخيط وعجلة المجموعة والضغط على محور البكرة.'
            ],
            prerequisitesEn: ['Newton\'s Second and Third Laws', 'Free body diagram construction'],
            prerequisitesAr: ['قانونا نيوتن الثاني والثالث', 'رسم مخطط الجسم الحر والقوى المؤثرة'],
            keyVocabularyEn: [
              { term: 'Apparent Weight N', definition: 'Normal contact force exerted by scale or elevator floor on body.' },
              { term: 'Smooth Pulley', definition: 'Ideal frictionless pulley where tension is identical on both sides of string.' },
              { term: 'Pressure on Pulley', definition: 'Resultant of the two tension forces acting along the string.' }
            ],
            keyVocabularyAr: [
              { term: 'الوزن الظاهري', definition: 'رد الفعل العمودي أو الشد في الميزان الذي يشعر به الجسم في المصعد.' },
              { term: 'بكرة ملساء', definition: 'بكرة مهملة الاحتكاك والكتلة يكون الشد على جانبيها متساوياً تماماً.' },
              { term: 'الضغط على البكرة', definition: 'محصلة قوتي الشد في طرفي الخيط المؤثرتين على محور البكرة.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Elevator Dynamics Demonstration (20 mins)',
                phaseAr: 'محاكاة حركة المصاعد والوزن الظاهري (٢٠ دقيقة)',
                duration: '20 mins',
                activitiesEn: 'Use real-life sensation of feeling heavier when elevator starts moving up and lighter when stopping.',
                activitiesAr: 'مناقشة الإحساس بزيادة الوزن عند بدء صعود المصعد ونقصانه عند التوقف.'
              },
              {
                phaseEn: 'Formulating Pulley Free-Body Diagrams (35 mins)',
                phaseAr: 'صياغة معادلات حركة البكرات (٣٥ دقيقة)',
                duration: '35 mins',
                activitiesEn: 'Guide students to write individual FBD equations for each mass and add them to eliminate tension T.',
                activitiesAr: 'تدريب الطلاب على كتابة معادلة حركة كل جسم بمفرده ثم الجمع لحذف قوة الشد واستنتاج العجلة.'
              },
              {
                phaseEn: 'Vertical Distance & Cut String Dynamics (20 mins)',
                phaseAr: 'المسافة الرأسية وقطع الخيط (٢٠ دقيقة)',
                duration: '20 mins',
                activitiesEn: 'Explain what happens when string is severed: heavier mass falls with g, lighter mass continues upward under gravity before falling.',
                activitiesAr: 'شرح حركة الجسمين بعد قطع الخيط: سقوط الجسم الأثقل تحت الجاذبية وصعود الأخف لحظياً ثم هبوطه.'
              },
              {
                phaseEn: 'Wrap-Up & Assessment (15 mins)',
                phaseAr: 'الختام والتقييم (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Exit ticket on elevator scale readings.',
                activitiesAr: 'حل بطاقة الخروج على قراءة ميزان المصعد.'
              }
            ],
            commonMisconceptionsEn: [
              'Thinking that moving up ALWAYS means N = m(g + a). (If it moves up with deceleration, N = m(g - a)!).',
              'Forgetting that vertical distance between two vertical masses is 2s, not just s.'
            ],
            commonMisconceptionsAr: [
              'الاعتقاد بأن مجرد صعود المصعد يعني ر = ك(د + جـ). إذا كان الصعود بتقصير فإن ر = ك(د - جـ)!',
              'نسيان أن المسافة الرأسية بين جسمين يتدليان رأسياً تساوي 2ف لأن أحدهما يهبط ف والآخر يصعد ف.'
            ],
            differentiationEn: {
              struggling: 'Create a decision flowchart based on direction of acceleration (a upwards => N > W, a downwards => N < W).',
              advanced: 'Calculate the maximum height reached by the lighter mass after the string is cut.'
            },
            differentiationAr: {
              struggling: 'إنشاء مخطط انسيابي يربط اتجاه العجلة بالوزن الظاهري (العجلة لأعلى => ر > و، العجلة لأسفل => ر < و).',
              advanced: 'حساب أقصى ارتفاع يصله الجسم الأخف بعد انقطاع الخيط.'
            },
            formativeAssessmentEn: 'A man of mass 70 kg stands in an elevator moving downwards with acceleration 1.4 m/s^2. Find scale reading in kg-wt.',
            formativeAssessmentAr: 'رجل كتلته $70$ كجم يقف داخل مصعد هابط بعجلة $1.4$ م/ث². احسب قراءة الميزان بوحدة ثقل الكيلوجرام.',
            exitTicketQuestion: {
              questionEn: 'Two masses of 3 kg and 2 kg are connected over a smooth pulley. Find the common acceleration and pressure on the pulley axle.',
              questionAr: 'عُلقت كتلتان $3$ كجم و $2$ كجم في طرفي خيط يمر فوق بكرة ملساء. احسب عجلة الحركة المشتركة والضغط على محور البكرة.',
              solutionEn: 'Acceleration a = (3 - 2)/(3 + 2) * 9.8 = 1/5 * 9.8 = 1.96 m/s^2. Tension T = 2(3)(2)(9.8)/5 = 23.52 N. Pressure P = 2T = 47.04 N (or 4.8 kg-wt).',
              solutionAr: 'العجلة جـ = (3 - 2)/(3 + 2) × 9.8 = 1.96 م/ث². الشد ش = 2 × 3 × 2 × 9.8 / 5 = 23.52 نيوتن. الضغط على محور البكرة ض = 2ش = 47.04 نيوتن (أو 4.8 ثقل كجم).'
            }
          },
          worksheet: {
            id: 'ws_dyn_l4',
            titleEn: 'Solved Worksheet: Elevators & Smooth Pulleys',
            titleAr: 'ورقة عمل محلولة: المصاعد والبكرات الملساء',
            descriptionEn: 'Exam standard problems on apparent weight, spring balance scale readings, and pulley systems.',
            descriptionAr: 'مسائل امتحانات الثانوية العامة على قراءة الميزان في المصاعد ومجموعات البكرات الملساء.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p_dyn10',
                titleEn: 'Exam Standard: Spring Balance Reading in Accelerating Elevator',
                titleAr: 'مسألة امتحانية: قراءة الميزان الزنبركي في مصعد متسارع',
                difficulty: 'exam_standard',
                questionEn: 'A body of mass $m$ is suspended from a spring balance fixed to the ceiling of an elevator. When the elevator accelerates UPWARDS with acceleration $a$, the balance reading is $35\\text{ kg-wt}$. When the elevator accelerates DOWNWARDS with the same acceleration $a$, the reading is $25\\text{ kg-wt}$. Find the true mass $m$ of the body and the acceleration $a$.',
                questionAr: 'عُلق جسم كتلته $m$ في ميزان زنبركي مثبت في سقف مصعد. فعندما صعد المصعد بعجلة $a$ كانت قراءة الميزان $35$ ثقل كجم، وعندما هبط المصعد بنفس العجلة $a$ كانت القراءة $25$ ثقل كجم. احسب الكتلة الحقيقية $m$ ومقدار العجلة $a$.',
                optionsEn: [
                  'm = 30\\text{ kg}, \\quad a = 1.63\\text{ m/s}^2',
                  'm = 30\\text{ kg}, \\quad a = 1.4\\text{ m/s}^2',
                  'm = 35\\text{ kg}, \\quad a = 1.4\\text{ m/s}^2',
                  'm = 28\\text{ kg}, \\quad a = 1.96\\text{ m/s}^2'
                ],
                optionsAr: [
                  'ك = ٣٠ كجم، جـ = ١٫٦٣ م/ث²',
                  'ك = ٣٠ كجم، جـ = ١٫٤ م/ث²',
                  'ك = ٣٥ كجم، جـ = ١٫٤ م/ث²',
                  'ك = ٢٨ كجم، جـ = ١٫٩٦ م/ث²'
                ],
                correctAnswer: 'm = 30\\text{ kg}, \\quad a = 1.63\\text{ m/s}^2',
                correctIndex: 0,
                hintEn: 'Upward: N1 = m(g + a). Downward: N2 = m(g - a). Add the two equations to eliminate a and solve for m.',
                hintAr: 'في الصعود: ر١ = ك(د + جـ). وفي الهبوط: ر٢ = ك(د - جـ). اجمع المعادلتين لحذف العجلة وإيجاد الكتلة.',
                stepByStepSolutionEn: [
                  '1. Set up elevator equations in Newtons:',
                  'Upward acceleration: $T_1 = m(g + a) = 35 \\times 9.8\\text{ N}$ (Equation 1)',
                  'Downward acceleration: $T_2 = m(g - a) = 25 \\times 9.8\\text{ N}$ (Equation 2)',
                  '2. Add Equation 1 and Equation 2:',
                  '$$T_1 + T_2 = m(g + a) + m(g - a) = 2mg$$',
                  '$$(35 + 25) \\times 9.8 = 2m \\times 9.8 \\implies 60 = 2m \\implies m = 30\\text{ kg}$$',
                  '3. Subtract Equation 2 from Equation 1:',
                  '$$T_1 - T_2 = m(g + a) - m(g - a) = 2ma$$',
                  '$$(35 - 25) \\times 9.8 = 2(30) a \\implies 10 \\times 9.8 = 60 a$$',
                  '$$60 a = 98 \\implies a = \\frac{98}{60} = \\frac{49}{30} \\approx 1.633\\text{ m/s}^2$$'
                ],
                stepByStepSolutionAr: [
                  '١. صياغة معادلتي الحركة بالنيوتن:',
                  'في الصعود بعجلة: $T_1 = m(g + a) = 35 \\times 9.8$ (المعادلة ١)',
                  'في الهبوط بنفس العجلة: $T_2 = m(g - a) = 25 \\times 9.8$ (المعادلة ٢)',
                  '٢. بجمع المعادلتين ١ و ٢:',
                  '$$T_1 + T_2 = 2mg \\implies (35 + 25) \\times 9.8 = 2m \\times 9.8$$',
                  '$$60 = 2m \\implies m = 30\\text{ كجم}$$',
                  '٣. بطرح المعادلة ٢ من المعادلة ١:',
                  '$$T_1 - T_2 = 2ma \\implies (35 - 25) \\times 9.8 = 2(30) a$$',
                  '$$98 = 60 a \\implies a = \\frac{98}{60} \\approx 1.633\\text{ م/ث²}$$'
                ],
                teacherTipEn: 'Key shortcut: The true weight is simply the arithmetic average of the two apparent readings: m = (35 + 25)/2 = 30 kg!',
                teacherTipAr: 'قاعدة سحرية سريعة للامتحان: الوزن الحقيقي هو المتوسط الحسابي للقراءتين: ك = (٣٥ + ٢٥) / ٢ = ٣٠ كجم!'
              },
              {
                id: 'p_dyn11',
                titleEn: 'Foundation Problem: Vertical Distance Between Two Pulley Masses',
                titleAr: 'مسألة تأسيسية: المسافة الرأسية بين كتلتين على بكرة',
                difficulty: 'easy',
                questionEn: 'Two equal masses of $m_1 = 500\\text{ g}$ and $m_2 = 480\\text{ g}$ are attached to the ends of a light string passing over a smooth pulley. If the system is released from rest, find the acceleration $a$ and the vertical distance between the two masses after $1\\text{ second}$.',
                questionAr: 'عُلقت كتلتان $m_1 = 500$ جم و $m_2 = 480$ جم في طرفي خيط خفيف يمر على بكرة ملساء. فإذا تحركت المجموعة من السكون، فاحسب العجلة $a$ والمسافة الرأسية بين الكتلتين بعد مرور ثانية واحدة.',
                optionsEn: [
                  'a = 20\\text{ cm/s}^2, \\quad \\text{Distance} = 20\\text{ cm}',
                  'a = 20\\text{ cm/s}^2, \\quad \\text{Distance} = 10\\text{ cm}',
                  'a = 10\\text{ cm/s}^2, \\quad \\text{Distance} = 10\\text{ cm}',
                  'a = 40\\text{ cm/s}^2, \\quad \\text{Distance} = 40\\text{ cm}'
                ],
                optionsAr: [
                  'جـ = ٢٠ سم/ث²، المسافة الرأسية = ٢٠ سم',
                  'جـ = ٢٠ سم/ث²، المسافة الرأسية = ١٠ سم',
                  'جـ = ١٠ سم/ث²، المسافة الرأسية = ١٠ سم',
                  'جـ = ٤٠ سم/ث²، المسافة الرأسية = ٤٠ سم'
                ],
                correctAnswer: 'a = 20\\text{ cm/s}^2, \\quad \\text{Distance} = 20\\text{ cm}',
                correctIndex: 0,
                hintEn: 'Acceleration a = (m1 - m2)/(m1 + m2) * g. Distance traveled by each mass is s = 1/2 a t^2. Vertical distance is 2s.',
                hintAr: 'العجلة جـ = (ك١ - ك٢)/(ك١ + ك٢) × د. مسافة كل كتلة ف = ١/٢ جـ ن². والمسافة الرأسية بينهما ٢ف.',
                stepByStepSolutionEn: [
                  '1. Compute acceleration in CGS units ($g = 980\\text{ cm/s}^2$):',
                  '$$a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{500 - 480}{500 + 480} \\times 980 = \\frac{20}{980} \\times 980 = 20\\text{ cm/s}^2$$',
                  '2. Compute distance $s$ moved by each mass in $t = 1\\text{ s}$:',
                  '$$s = \\frac{1}{2} a t^2 = \\frac{1}{2} (20)(1)^2 = 10\\text{ cm}$$',
                  '3. Vertical distance between the masses:',
                  'Since one mass descends $10\\text{ cm}$ and the other ascends $10\\text{ cm}$:',
                  '$$\\text{Vertical Distance} = 2s = 2 \\times 10 = 20\\text{ cm}$$'
                ],
                stepByStepSolutionAr: [
                  '١. حساب العجلة بوحدات السنتيمتر والجرام ($g = 980$ سم/ث²):',
                  '$$a = \\frac{500 - 480}{500 + 480} \\times 980 = \\frac{20}{980} \\times 980 = 20\\text{ سم/ث²}$$',
                  '٢. حساب المسافة $s$ التي تحركتها كل كتلة في زمن $t = 1$ ثانية:',
                  '$$s = \\frac{1}{2} a t^2 = \\frac{1}{2} (20)(1)^2 = 10\\text{ سم}$$',
                  '٣. المسافة الرأسية بين الكتلتين:',
                  'بما أن إحدى الكتلتين هبطت $10$ سم والأخرى صعدت $10$ سم:',
                  '$$\\text{المسافة الرأسية} = 2s = 2 \\times 10 = 20\\text{ سم}$$'
                ],
                teacherTipEn: 'Do not choose 10 cm! The question asks for the vertical distance between the two bodies, which is 2s.',
                teacherTipAr: 'انتبه: لا تختر ١٠ سم! المطلوب هو المسافة الرأسية بين الجسمين معاً وهي ٢ف.'
              },
              {
                id: 'p_dyn12',
                titleEn: 'HOTS Problem: Severed String Dynamics on Pulley System',
                titleAr: 'مسألة مهارات عليا: حركة الأجسام بعد انقطاع خيط البكرة',
                difficulty: 'hots',
                questionEn: 'Two masses of $3\\text{ kg}$ and $1\\text{ kg}$ are connected by a light string over a smooth pulley and released from rest. After $2\\text{ seconds}$, the string breaks. Find the maximum additional height reached by the $1\\text{ kg}$ mass above the position where the string broke.',
                questionAr: 'عُلقت كتلتان $3$ كجم و $1$ كجم في طرفي خيط يمر على بكرة ملساء وبدأت الحركة من السكون. وبعد مرور ثانيتين انقطع الخيط. احسب أقصى مسافة إضافية يصعدها الجسم الذي كتلته $1$ كجم بعد لحظة انقطاع الخيط.',
                optionsEn: ['4.9\\text{ meters}', '9.8\\text{ meters}', '14.7\\text{ meters}', '19.6\\text{ meters}'],
                optionsAr: ['٤٫٩ أمتار', '٩٫٨ أمتار', '١٤٫٧ متراً', '١٩٫٦ متراً'],
                correctAnswer: '4.9\\text{ meters}',
                correctIndex: 0,
                hintEn: 'Find acceleration a before cut, then velocity v at t = 2s. After cut, the 1 kg mass moves upwards under gravity (a = -g = -9.8) until v = 0.',
                hintAr: 'احسب العجلة قبل القطع ثم السرعة عند ن = ٢ ث. بعد القطع يصعد الجسم بعجلة الجاذبية (جـ = -د = -٩٫٨) حتى يسكن لحظياً.',
                stepByStepSolutionEn: [
                  '1. Motion before the string breaks:',
                  '$$a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{3 - 1}{3 + 1} (9.8) = \\frac{2}{4}(9.8) = 4.9\\text{ m/s}^2$$',
                  'Velocity of the system after $t = 2\\text{ s}$:',
                  '$$v = v_0 + a t = 0 + 4.9(2) = 9.8\\text{ m/s}\\text{ (directed upwards for the 1 kg mass)}$$',
                  '2. Motion after the string breaks:',
                  'The $1\\text{ kg}$ mass now moves freely under gravity alone with initial upward velocity $u = 9.8\\text{ m/s}$ and deceleration $g = 9.8\\text{ m/s}^2$ until it reaches maximum height ($v_f = 0$):',
                  '$$v_f^2 = u^2 - 2g s_1 \\implies 0 = (9.8)^2 - 2(9.8) s_1$$',
                  '$$2(9.8) s_1 = (9.8)^2 \\implies s_1 = \\frac{9.8}{2} = 4.9\\text{ meters}$$'
                ],
                stepByStepSolutionAr: [
                  '١. حركة المجموعة قبل انقطاع الخيط:',
                  '$$a = \\frac{3 - 1}{3 + 1} (9.8) = \\frac{2}{4}(9.8) = 4.9\\text{ م/ث²}$$',
                  'سرعة الكتلة الصغرى (١ كجم) لحظة انقطاع الخيط ($t = 2$ ث):',
                  '$$v = v_0 + a t = 0 + 4.9(2) = 9.8\\text{ م/ث (لأعلى)}$$',
                  '٢. حركة الكتلة بعد انقطاع الخيط:',
                  'تتحرك الكتلة بحرية تحت تأثير الجاذبية الأرضية فقط بسرعة ابتدائية $u = 9.8$ م/ث لأعلى وعجلة تقصيرية $g = 9.8$ م/ث² حتى تسكن لحظياً ($v_f = 0$):',
                  '$$v_f^2 = u^2 - 2g s_1 \\implies 0 = (9.8)^2 - 2(9.8) s_1$$',
                  '$$s_1 = \\frac{(9.8)^2}{2 \\times 9.8} = \\frac{9.8}{2} = 4.9\\text{ أمتار}$$'
                ],
                teacherTipEn: 'A favorite HOTS question in Thanaweya Amma! Remember that when a string breaks, moving bodies do NOT stop immediately; they continue moving under inertia and gravity.',
                teacherTipAr: 'سؤال قمة في الامتحانات! تذكر دائماً أنه عند انقطاع الخيط لا يسكن الجسم فجأة، بل يواصل صعوده بالقصور الذاتي تحت الجاذبية.'
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: 'Elevator & Smooth Pulley Dynamics Simulator',
            titleAr: 'محاكي حركة المصاعد ومجموعات البكرات',
            descriptionEn: 'Interactive simulator visualizing elevator apparent weight, tension forces, and cut-string kinematic trajectories.',
            descriptionAr: 'محاكي تفاعلي لعرض الوزن الظاهري في المصاعد وحساب قوى الشد وحركة الأجسام بعد قطع الخيط.'
          }
        }
      ],
      solvedExamples: dynCh2SolvedExamples,
      exerciseProblems: dynCh2Exercises,
      databank: dynCh2Databank
    }    ,
    {
      id: 'dyn_ch3',
      chapterNumber: 3,
      titleEn: 'Impulse & Collision',
      titleAr: 'الدفع والتصادم',
      descriptionEn: 'Impulse of constant and variable forces, impulse-momentum theorem, impulsive pressure on floors, walls, and ceilings. Direct collision of smooth spheres, conservation of linear momentum, and loss in kinetic energy.',
      descriptionAr: 'دفع القوة الثابتة والمتغيرة، ونظرية الدفع وكمية الحركة، والضغط الدفعي على الأرضيات والحوائط والأسقف. التصادم المباشر للكرات الملساء ومبدأ ثبوت كمية الحركة وفقد طاقة الحركة.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'dyn_l5',
          titleEn: 'Impulse & Change in Linear Momentum',
          titleAr: 'الدفع والتغير في كمية الحركة',
          summaryEn: 'Concept of impulse as force multiplied by time interval I = F Δt, impulse of variable force I = ∫ F(t) dt, impulse-momentum theorem I = Δp = m(v - v0), and impulsive reactions on floors, walls, and ceilings.',
          summaryAr: 'مفهوم الدفع كحاصل ضرب القوة في زمن التأثير د = ق × ن، ودفع القوة المتغيرة د = تكامل ق(ن) د ن، ونظرية الدفع وكمية الحركة د = دلتا كـ = ك(ع - ع٠)، والضغط الدفعي على الأرضيات والحوائط والأسقف.',
          theoryContentEn: `### 1. Definition of Impulse (الدفع)
When a constant force $\\vec{F}$ acts on a body for a short time interval $\\Delta t = t_2 - t_1$, the **Impulse** $\\vec{I}$ is defined as:
$$\\vec{I} = \\vec{F} \\Delta t$$
- **Units of Impulse:**
  - In SI units: $\\text{Newton} \\cdot \\text{second} (\\text{N}\\cdot\\text{s})$.
  - In CGS units: $\\text{dyne} \\cdot \\text{second} (\\text{dyne}\\cdot\\text{s})$.
  - Gravitational units: $\\text{kg-wt} \\cdot \\text{second} = 9.8\\text{ N}\\cdot\\text{s}$.
  - Note that $1\\text{ N}\\cdot\\text{s} = 10^5\\text{ dyne}\\cdot\\text{s} = 1\\text{ kg}\\cdot\\text{m/s}$.

### 2. Impulse of a Variable Force (دفع القوة المتغيرة)
If the force $\\vec{F}(t)$ is a function of time, the impulse during the time interval from $t_1$ to $t_2$ is the definite integral:
$$\\vec{I} = \\int_{t_1}^{t_2} \\vec{F}(t) dt$$
- **Geometric Interpretation:** On an $(F - t)$ graph, the impulse equals the **area under the curve** bounded by $t = t_1$, $t = t_2$, and the time axis.

### 3. The Impulse-Momentum Theorem (علاقة الدفع بكمية الحركة)
From Newton's Second Law: $\\vec{F} = \\frac{d\\vec{p}}{dt} = m \\frac{d\\vec{v}}{dt}$.
Integrating both sides with respect to time:
$$\\vec{I} = \\int_{t_1}^{t_2} \\vec{F} dt = m(\\vec{v}_2 - \\vec{v}_1) = \\Delta \\vec{p}$$
- For motion in a straight line:
  $$I = m(v_2 - v_1)$$
- If the body rebounds in the opposite direction:
  $$I = m(v_2 - (-v_1)) = m(v_2 + v_1)$$

### 4. Impulsive Reactions on Surfaces (الضغط الدفعي على السطوح)
Let $F = \\frac{I}{\\Delta t}$ be the average impulsive force, and $W = mg$ be the weight of the body:
1. **Impact on a Horizontal Floor (الأرضية الأفقية):**
   $$N = F + mg$$
2. **Impact on a Vertical Wall (الحائط الرأسي):**
   $$N = F$$
3. **Impact on a Ceiling (سقف الحجرة):**
   $$N = F - mg$$`,
          theoryContentAr: `### ١. تعريف الدفع
إذا أثرت قوة ثابتة $\\vec{F}$ على جسم خلال فترة زمنية $\\Delta t = t_2 - t_1$ فإن **الدفع** $\\vec{I}$ يعرّف بأنه:
$$\\vec{I} = \\vec{F} \\Delta t$$
- **وحدات قياس الدفع:**
  - بالنظام الدولي: نيوتن.ثانية ($\\text{N}\\cdot\\text{s}$).
  - بنظام جاوس: داين.ثانية ($\\text{dyne}\\cdot\\text{s}$).
  - بالوحدات التثاقلية: ث.كجم.ثانية $= 9.8\\text{ نيوتن.ث}$.
  - لاحظ أن $1\\text{ نيوتن.ث} = 10^5\\text{ داين.ث} = 1\\text{ كجم.م/ث}$.

### ٢. دفع القوة المتغيرة
إذا كانت القوة $\\vec{F}(t)$ دالة في الزمن، فإن دفعها خلال الفترة الزمنية من $t_1$ إلى $t_2$ يساوي التكامل المحدد:
$$\\vec{I} = \\int_{t_1}^{t_2} \\vec{F}(t) dt$$
- **المعنى الهندسي:** الدفع يمثل **المساحة تحت منحنى (القوة - الزمن)** المحصورة بين $t_1$ و $t_2$ ومحور الزمن.

### ٣. نظرية الدفع وكمية الحركة
من قانون نيوتن الثاني: $\\vec{F} = \\frac{d\\vec{p}}{dt} = m \\frac{d\\vec{v}}{dt}$.
بتكامل الطرفين بالنسبة للزمن:
$$\\vec{I} = \\Delta \\vec{p} = m(\\vec{v}_2 - \\vec{v}_1)$$
- في الحركة المستقيمة:
  $$I = m(v_2 - v_1)$$
- وفي حالة الارتداد في عكس الاتجاه:
  $$I = m(v_2 + v_1)$$

### ٤. ردود الأفعال والضغوط الدفعية على السطوح
بفرض $F = \\frac{I}{\\Delta t}$ هي القوة الدفعية المتوسطة، و $W = mg$ هو وزن الجسم:
١. **عند الاصطدام بأرضية أفقية:**
   $$N = F + mg$$
٢. **عند الاصطدام بحائط رأسي:**
   $$N = F$$
٣. **عند الاصطدام بسقف حجرة:**
   $$N = F - mg$$`,
          formulas: [
            { labelEn: 'Constant Force Impulse', labelAr: 'دفع القوة الثابتة', latex: 'I = F \\Delta t = \\Delta p' },
            { labelEn: 'Variable Force Integral', labelAr: 'تكامل القوة المتغيرة', latex: 'I = \\int_{t_1}^{t_2} F(t) dt' },
            { labelEn: 'Rebound Momentum Change', labelAr: 'تغير كمية الحركة عند الارتداد', latex: 'I = m(v_2 + v_1)' },
            { labelEn: 'Horizontal Floor Reaction', labelAr: 'الضغط على الأرض الأفقية', latex: 'N = F + mg' },
            { labelEn: 'Ceiling Reaction', labelAr: 'الضغط على السقف', latex: 'N = F - mg' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Dynamics Textbook Grade 12',
            bookTitleAr: 'كتاب الديناميكا للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-DYN-CH3-L1',
            pageRange: 'pp. 115 - 132'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Impulse, Momentum Theorem & Boundary Reactions',
            titleAr: 'خطة درس: الدفع ونظرية كمية الحركة وضغوط التصادم',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-DYN-CH3-L1',
            bloomsObjectivesEn: [
              'Define impulse and state its standard SI and gravitational units.',
              'Evaluate the impulse of variable forces using definite integration and graphical areas.',
              'Calculate the average impulsive force and surface reaction on floors, walls, and ceilings.'
            ],
            bloomsObjectivesAr: [
              'تعريف مفهوم الدفع وتحديد وحدات قياسه الدولية والتثاقلية.',
              'حساب دفع القوى المتغيرة بالتكامل المحدد والمساحات البيانية.',
              'حساب القوة الدفعية ورد فعل الأسطح المختلفة (أرضية، حائط، سقف).'
            ],
            prerequisitesEn: ['Newton’s Second Law', 'Linear Momentum Definition', 'Definite Integration'],
            prerequisitesAr: ['قانون نيوتن الثاني', 'تعريف كمية الحركة', 'التكامل المحدد'],
            keyVocabularyEn: [
              { term: 'Impulse', definition: 'The product of a force and the time interval during which it acts.' },
              { term: 'Impulsive Force', definition: 'A very large force acting for a very short duration.' },
              { term: 'Floor Thrust', definition: 'The sum of the impulsive force and the downward weight of the object.' }
            ],
            keyVocabularyAr: [
              { term: 'الدفع', definition: 'حاصل ضرب القوة المؤثرة في زمن تأثيرها.' },
              { term: 'القوة الدفعية', definition: 'قوة كبيرة جداً تؤثر خلال فترة زمنية متناهية في الصغر.' },
              { term: 'الضغط على الأرض', definition: 'مجموع القوة الدفعية ووزن الجسم لأسفل.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Concept Hook & Real World Impacts',
                phaseAr: 'التهيئة ومفهوم التصادم في الواقع',
                duration: '15 mins',
                activitiesEn: 'Analyze bat hitting a baseball and ball bouncing from a floor.',
                activitiesAr: 'تحليل تصادم مضرب بكرة وتصادم كرة ساقطة بالأرض.'
              },
              {
                phaseEn: 'Derivation & Boundary Formulas',
                phaseAr: 'الاستنتاج وقوانين الضغط على السطوح',
                duration: '40 mins',
                activitiesEn: 'Derive I = Δp and establish floor, wall, and ceiling reaction formulas.',
                activitiesAr: 'استنتاج د = دلتا كـ وصياغة معادلات الضغط على الأرض والحائط والسقف.'
              },
              {
                phaseEn: 'Problem Solving & Guided Practice',
                phaseAr: 'حل المسائل والتدريب الموجه',
                duration: '25 mins',
                activitiesEn: 'Solve falling and rebounding balls with variable contact times.',
                activitiesAr: 'حل مسائل كرات ساقطة ومرتدة مع أزمنة تلامس مختلفة.'
              },
              {
                phaseEn: 'Exit Ticket & Wrap-Up',
                phaseAr: 'تذكرة الخروج والختام',
                duration: '10 mins',
                activitiesEn: 'Formative assessment on ceiling vs floor reactions.',
                activitiesAr: 'تقييم تكويني حول الفرق بين الضغط على السقف والأرض.'
              }
            ],
            commonMisconceptionsEn: [
              'Forgetting to reverse the sign of velocity upon rebounding.',
              'Adding weight on the ceiling instead of subtracting it.'
            ],
            commonMisconceptionsAr: [
              'نسيان عكس إشارة السرعة عند الارتداد من السطح.',
              'جمع الوزن عند الاصطدام بالسقف بدلاً من طرحه.'
            ],
            differentiationEn: {
              struggling: 'Use visual vector arrows to emphasize opposite velocity signs during rebound.',
              advanced: 'Calculate variable forces given by piecewise functions and parabolic impulse profiles.'
            },
            differentiationAr: {
              struggling: 'استخدام أسهم متجهة لتوضيح إشارة السرعة المعاكسة عند الارتداد.',
              advanced: 'حساب دفع قوى معرفة بقواعد متعددة ومنحنيات قطع مكافئ.'
            },
            formativeAssessmentEn: 'Solve a quick problem: Ball of 0.2 kg rebounds from ceiling; find net ceiling thrust.',
            formativeAssessmentAr: 'حل سريع: كرة كتلتها ٠٫٢ كجم ترتد من سقف؛ احسب الضغط الكلي على السقف.',
            exitTicketQuestion: {
              questionEn: 'A force F = (4t + 1) N acts for t in [0, 3] s on a 2 kg mass at rest. Find final speed.',
              questionAr: 'أثرت قوة ق = ٤ن + ١ نيوتن في الفترة [٠، ٣] ث على جسم كتلته ٢ كجم ساكن. احسب سرعته النهائية.',
              solutionEn: 'I = [2t^2 + t]_0^3 = 18 + 3 = 21 N.s. v = I / m = 21 / 2 = 10.5 m/s.',
              solutionAr: 'د = [٢ن² + ن] = ١٨ + ٣ = ٢١ نيوتن.ث. ع = د / ك = ٢١ / ٢ = ١٠٫٥ م/ث.'
            }
          },
          worksheet: {
            id: 'dyn_ws_l5',
            titleEn: 'Worksheet: Impulse & Momentum Theorem',
            titleAr: 'ورقة عمل: الدفع ونظرية كمية الحركة',
            descriptionEn: 'Practice problems on constant and variable impulse, rebound momentum change, and ceiling/floor pressures.',
            descriptionAr: 'تمارين تدريبية على دفع القوة الثابتة والمتغيرة، وتغير كمية الحركة، وضغوط التصادم.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'dyn_l5_p1',
                titleEn: 'Direct Impulse Calculation',
                titleAr: 'حساب الدفع المباشر',
                difficulty: 'easy',
                questionEn: 'A constant force $F = 60\\text{ N}$ acts on a body for $\\Delta t = 0.4\\text{ s}$. Find the magnitude of the impulse.',
                questionAr: 'أثرت قوة ثابتة مقدارها $F = 60\\text{ نيوتن}$ على جسم لمدة $\\Delta t = 0.4\\text{ ث}$. احسب مقدار الدفع.',
                optionsEn: ['$24\\text{ N}\\cdot\\text{s}$', '$150\\text{ N}\\cdot\\text{s}$', '$240\\text{ N}\\cdot\\text{s}$', '$12\\text{ N}\\cdot\\text{s}$'],
                optionsAr: ['$24\\text{ نيوتن.ث}$', '$150\\text{ نيوتن.ث}$', '$240\\text{ نيوتن.ث}$', '$12\\text{ نيوتن.ث}$'],
                correctAnswer: '$24\\text{ N}\\cdot\\text{s}$',
                correctIndex: 0,
                hintEn: 'I = F * Δt = 60 * 0.4.',
                hintAr: 'الدفع = القوة × الزمن = ٦٠ × ٠٫٤.',
                stepByStepSolutionEn: ['I = F Δt = 60 * 0.4 = 24 N.s.'],
                stepByStepSolutionAr: ['د = ق × ن = ٦٠ × ٠٫٤ = ٢٤ نيوتن.ث.']
              },
              {
                id: 'dyn_l5_p2',
                titleEn: 'Rebound from Floor and Total Reaction',
                titleAr: 'الارتداد من الأرض وحساب رد الفعل الكلي',
                difficulty: 'medium',
                questionEn: 'A ball of mass $0.5\\text{ kg}$ hits a floor at $8\\text{ m/s}$ and rebounds at $6\\text{ m/s}$. If $\\Delta t = 0.05\\text{ s}$, find the total normal reaction on the floor ($g = 9.8\\text{ m/s}^2$).',
                questionAr: 'اصطدمت كرة كتلتها $0.5\\text{ كجم}$ بأرضية بسرعة $8\\text{ م/ث}$ وارتدت بسرعة $6\\text{ م/ث}$. فإذا كان زمن التلامس $\\Delta t = 0.05\\text{ ث}$، احسب رد الفعل الكلي على الأرض ($g = 9.8\\text{ م/ث²}$).',
                optionsEn: ['$144.9\\text{ N}$', '$140\\text{ N}$', '$135.1\\text{ N}$', '$74.9\\text{ N}$'],
                optionsAr: ['$144.9\\text{ نيوتن}$', '$140\\text{ نيوتن}$', '$135.1\\text{ نيوتن}$', '$74.9\\text{ نيوتن}$'],
                correctAnswer: '$144.9\\text{ N}$',
                correctIndex: 0,
                hintEn: 'I = 0.5(6 + 8) = 7 N.s. F = 7 / 0.05 = 140 N. N = F + mg = 140 + 4.9 = 144.9 N.',
                hintAr: 'د = ٠٫٥(٦ + ٨) = ٧ نيوتن.ث. ق = ٧ / ٠٫٠٥ = ١٤٠ نيوتن. رد الفعل = ١٤٠ + ٤٫٩ = ١٤٤٫٩ نيوتن.',
                stepByStepSolutionEn: [
                  '1. Impulse: I = 0.5(6 - (-8)) = 7 N.s.',
                  '2. Average impulsive force: F = 7 / 0.05 = 140 N.',
                  '3. Floor reaction: N = F + mg = 140 + 0.5(9.8) = 144.9 N.'
                ],
                stepByStepSolutionAr: [
                  '١. الدفع: د = ٠٫٥(٦ + ٨) = ٧ نيوتن.ث.',
                  '٢. القوة الدفعية: ق = ٧ / ٠٫٠٥ = ١٤٠ نيوتن.',
                  '٣. رد فعل الأرض: ض = ق + ك د = ١٤٠ + ٤٫٩ = ١٤٤٫٩ نيوتن.'
                ]
              },
              {
                id: 'dyn_l5_p3',
                titleEn: 'Parabolic Impulse Integration',
                titleAr: 'تكامل دفع قوة تربيعية',
                difficulty: 'hots',
                questionEn: 'A force $F(t) = (6t - t^2)\\text{ N}$ acts on a $2\\text{ kg}$ body from $t = 0$ until it ceases ($F = 0$). Find the speed acquired from rest.',
                questionAr: 'أثرت قوة $F(t) = (6t - t^2)\\text{ نيوتن}$ على جسم كتلته $2\\text{ كجم}$ من $t = 0$ حتى انعدمت القوة ($F = 0$). احسب السرعة التي اكتسبها الجسم من السكون.',
                optionsEn: ['$18\\text{ m/s}$', '$36\\text{ m/s}$', '$9\\text{ m/s}$', '$27\\text{ m/s}$'],
                optionsAr: ['$18\\text{ م/ث}$', '$36\\text{ م/ث}$', '$9\\text{ م/ث}$', '$27\\text{ م/ث}$'],
                correctAnswer: '$18\\text{ m/s}$',
                correctIndex: 0,
                hintEn: 'Force ceases when 6t - t^2 = 0 => t = 6 s. Integrate F from 0 to 6, then v = I / 2.',
                hintAr: 'تنعدم القوة عند ٦ن - ن² = ٠ أي ن = ٦ ث. كامل القوة من ٠ إلى ٦ ثم السرعة = د / ٢.',
                stepByStepSolutionEn: [
                  '1. Find interval: F(t) = 0 => t(6 - t) = 0 => t = 6 s.',
                  '2. Integrate: I = [3t^2 - t^3/3]_0^6 = 3(36) - 216/3 = 108 - 72 = 36 N.s.',
                  '3. Speed: v = I / m = 36 / 2 = 18 m/s.'
                ],
                stepByStepSolutionAr: [
                  '١. نهاية تأثير القوة: ٦ن - ن² = ٠ ومنها ن = ٦ ث.',
                  '٢. حساب الدفع: د = [٣ن² - ن³/٣] من ٠ إلى ٦ = ١٠٨ - ٧٢ = ٣٦ نيوتن.ث.',
                  '٣. السرعة المكتسبة: ع = ٣٦ / ٢ = ١٨ م/ث.'
                ]
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Impulse & (F-t) Curve Area Visualizer',
            titleAr: 'محاكي الدفع وحساب المساحة تحت منحنى (القوة - الزمن)',
            descriptionEn: 'Visual simulator displaying the integral of variable forces and corresponding changes in body momentum.',
            descriptionAr: 'محاكي تفاعلي لعرض تكامل القوة المتغيرة والتغير اللحظي في كمية حركة الجسم.'
          }
        },
        {
          id: 'dyn_l6',
          titleEn: 'Direct Collision & Law of Conservation of Momentum',
          titleAr: 'التصادم المباشر وقانون بقاء كمية الحركة',
          summaryEn: 'Principles of direct collision between two spheres, action-reaction impulses during impact, conservation of total linear momentum m1 u1 + m2 u2 = m1 v1\' + m2 v2\', coalescing into a single body, and loss of kinetic energy.',
          summaryAr: 'مبادئ التصادم المباشر بين كرتين، ودفع الفعل ورد الفعل أثناء التصادم، وقانون بقاء كمية الحركة الكلية ك١ ع١ + ك٢ ع٢ = ك١ ع١\' + ك٢ ع٢\'، والتحام الأجسام في جسم واحد، وحساب الفقد في طاقة الحركة.',
          theoryContentEn: `### 1. Direct Collision of Two Smooth Spheres (التصادم المباشر)
When two spheres move along the line connecting their centers and impact each other:
- By **Newton's Third Law**, the impulsive force exerted by the first sphere on the second ($\\vec{F}_{12}$) is equal in magnitude and opposite in direction to that exerted by the second sphere on the first ($\\vec{F}_{21}$):
  $$\\vec{F}_{12} = -\\vec{F}_{21}$$
- Multiplying by the duration of impact $\\Delta t$:
  $$\\vec{I}_{1 \\to 2} = -\\vec{I}_{2 \\to 1}$$

### 2. Law of Conservation of Linear Momentum (قانون بقاء كمية الحركة)
Since internal impulsive forces sum to zero, the total linear momentum of the system before collision equals the total linear momentum after collision:
$$m_1 \\vec{u}_1 + m_2 \\vec{u}_2 = m_1 \\vec{v}_1' + m_2 \\vec{v}_2'$$
- In one-dimensional motion with a chosen positive direction:
  $$m_1 u_1 + m_2 u_2 = m_1 v_1' + m_2 v_2'$$

### 3. Inelastic Collision and Coalescence (الالتحام في جسم واحد)
When the two bodies stick together and move as a single combined body after collision:
$$m_1 u_1 + m_2 u_2 = (m_1 + m_2) v'$$
- The common velocity is:
  $$v' = \\frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}$$

### 4. Loss in Kinetic Energy (طاقة الحركة المفقودة)
In any inelastic collision, mechanical energy is converted into heat, sound, and internal deformation:
$$\\Delta T = T_{\\text{before}} - T_{\\text{after}}$$
$$\\Delta T = \\left( \\frac{1}{2} m_1 u_1^2 + \\frac{1}{2} m_2 u_2^2 \\right) - \\left( \\frac{1}{2} m_1 (v_1')^2 + \\frac{1}{2} m_2 (v_2')^2 \\right)$$
- When the bodies coalesce:
  $$\\Delta T = \\left( \\frac{1}{2} m_1 u_1^2 + \\frac{1}{2} m_2 u_2^2 \\right) - \\frac{1}{2} (m_1 + m_2) (v')^2$$
- When the second body was initially at rest ($u_2 = 0$):
  $$\\Delta T = \\frac{1}{2} \\left( \\frac{m_1 m_2}{m_1 + m_2} \\right) u_1^2$$`,
          theoryContentAr: `### ١. التصادم المباشر لكرتين ملساوين
عند تصادم كرتين تتحركان على خط المركزين:
- وفق **قانون نيوتن الثالث**، فإن القوة الدفعية التي تؤثر بها الكرة الأولى على الثانية تضاد القوة الدفعية التي تؤثر بها الثانية على الأولى:
  $$\\vec{F}_{12} = -\\vec{F}_{21}$$
- وبضرب الطرفين في زمن التصادم $\\Delta t$:
  $$\\vec{I}_{1 \\to 2} = -\\vec{I}_{2 \\to 1}$$

### ٢. قانون بقاء كمية الحركة
بما أن القوى الدفعية قوى داخلية يلغي بعضها بعضاً، فإن كمية الحركة الكلية للمجموعة قبل التصادم تساوي كمية الحركة الكلية بعد التصادم:
$$m_1 \\vec{u}_1 + m_2 \\vec{u}_2 = m_1 \\vec{v}_1' + m_2 \\vec{v}_2'$$
- وفي الحركة في خط مستقيم باختيار اتجاه موجب:
  $$m_1 u_1 + m_2 u_2 = m_1 v_1' + m_2 v_2'$$

### ٣. التصادم غير المرن والالتحام
عندما يلتحم الجسمان بعد التصادم ويتحركان ككتلة واحدة:
$$m_1 u_1 + m_2 u_2 = (m_1 + m_2) v'$$
- فتكون السرعة المشتركة:
  $$v' = \\frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}$$

### ٤. طاقة الحركة المفقودة نتيجة التصادم
في التصادم غير المرن تتحول جزء من طاقة الحركة إلى حرارة وصوت وتشوه في الجسمين:
$$\\Delta T = T_{\\text{قبل}} - T_{\\text{بعد}}$$
$$\\Delta T = \\left( \\frac{1}{2} m_1 u_1^2 + \\frac{1}{2} m_2 u_2^2 \\right) - \\left( \\frac{1}{2} m_1 (v_1')^2 + \\frac{1}{2} m_2 (v_2')^2 \\right)$$
- وإذا التحم الجسمان في كتلة واحدة:
  $$\\Delta T = \\left( \\frac{1}{2} m_1 u_1^2 + \\frac{1}{2} m_2 u_2^2 \\right) - \\frac{1}{2} (m_1 + m_2) (v')^2$$
- وإذا كان الجسم الثاني ساكناً في البداية ($u_2 = 0$):
  $$\\Delta T = \\frac{1}{2} \\left( \\frac{m_1 m_2}{m_1 + m_2} \\right) u_1^2$$`,
          formulas: [
            { labelEn: 'Mutual Impulse Law', labelAr: 'قانون الدفع المتبادل', latex: 'I_{1 \\to 2} = -I_{2 \\to 1}' },
            { labelEn: 'Conservation of Linear Momentum', labelAr: 'قانون بقاء كمية الحركة', latex: 'm_1 u_1 + m_2 u_2 = m_1 v_1\' + m_2 v_2\'' },
            { labelEn: 'Coalescence Common Speed', labelAr: 'السرعة المشتركة عند الالتحام', latex: 'v\' = \\frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}' },
            { labelEn: 'Loss in Kinetic Energy', labelAr: 'طاقة الحركة المفقودة', latex: '\\Delta T = T_{\\text{before}} - T_{\\text{after}}' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Dynamics Textbook Grade 12',
            bookTitleAr: 'كتاب الديناميكا للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-DYN-CH3-L2',
            pageRange: 'pp. 133 - 150'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Direct Collisions & Momentum Conservation',
            titleAr: 'خطة درس: التصادم المباشر وبقاء كمية الحركة',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-DYN-CH3-L2',
            bloomsObjectivesEn: [
              'Apply the law of conservation of momentum to 1D collisions.',
              'Calculate the common velocity of coalescing bodies.',
              'Determine the kinetic energy dissipated during inelastic impacts.'
            ],
            bloomsObjectivesAr: [
              'تطبيق مبدأ بقاء كمية الحركة في التصادم أحادي البعد.',
              'حساب السرعة المشتركة للأجسام الملتصقة بعد التصادم.',
              'تعيين طاقة الحركة المفقودة أثناء التصادمات غير المرنة.'
            ],
            prerequisitesEn: ['Newton’s Third Law', 'Kinetic Energy Definition T = 1/2 m v^2', 'Vector Signs'],
            prerequisitesAr: ['قانون نيوتن الثالث', 'تعريف طاقة الحركة', 'إشارات المتجهات'],
            keyVocabularyEn: [
              { term: 'Conservation of Momentum', definition: 'The total momentum of an isolated system remains constant.' },
              { term: 'Inelastic Collision', definition: 'A collision where kinetic energy is not conserved.' },
              { term: 'Coalescence', definition: 'When colliding bodies stick together and move with a single common speed.' }
            ],
            keyVocabularyAr: [
              { term: 'بقاء كمية الحركة', definition: 'ثبوت كمية الحركة الكلية لمنظومة معزولة عن القوى الخارجية.' },
              { term: 'تصادم غير مرن', definition: 'تصادم لا تُحفظ فيه طاقة الحركة الميكانيكية.' },
              { term: 'الالتحام', definition: 'التصاق الأجسام المتصادمة لتتحرك بسرعة مشتركة واحدة.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Concept Motivation & Newton Cradle Demo',
                phaseAr: 'التهيئة وبندول نيوتن',
                duration: '15 mins',
                activitiesEn: 'Demonstrate momentum transfer between billiard balls.',
                activitiesAr: 'عرض عملي لانتقال كمية الحركة بين كرات البلياردو.'
              },
              {
                phaseEn: 'Formal Derivation & Sign Convention',
                phaseAr: 'الاستنتاج وقواعد الإشارات',
                duration: '40 mins',
                activitiesEn: 'Derive m1 u1 + m2 u2 = m1 v1\' + m2 v2\' and the kinetic energy loss formula.',
                activitiesAr: 'استنتاج قانون بقاء كمية الحركة وصياغة قانون فقد طاقة الحركة.'
              },
              {
                phaseEn: 'Guided Multi-Case Practice',
                phaseAr: 'تدريب موجه على الحالات المختلفة',
                duration: '25 mins',
                activitiesEn: 'Solve problems with same-direction, opposite-direction, and coalescing impacts.',
                activitiesAr: 'حل مسائل التصادم في نفس الاتجاه والاتجاه المعاكس والالتحام.'
              },
              {
                phaseEn: 'Exit Ticket & Synthesis',
                phaseAr: 'تذكرة الخروج والتقييم',
                duration: '10 mins',
                activitiesEn: 'Check understanding of mutual impulse symmetry I12 = -I21.',
                activitiesAr: 'التأكد من استيعاب تماثل الدفع المتبادل د١٢ = - د٢١.'
              }
            ],
            commonMisconceptionsEn: [
              'Assuming kinetic energy is conserved in all collisions (it is ONLY conserved in perfectly elastic collisions).',
              'Forgetting to assign negative signs to velocities pointing in the reverse direction.'
            ],
            commonMisconceptionsAr: [
              'الاعتقاد الخاطئ بأن طاقة الحركة محفوظة دائماً في كل التصادمات.',
              'نسيان الإشارة السالبة للسرعات في الاتجاه المعاكس.'
            ],
            differentiationEn: {
              struggling: 'Provide a structured tabular organizer with columns: Body, Mass, Initial Velocity, Final Velocity.',
              advanced: 'Explore successive 3-body collisions and ballistic pendulum angular deflections.'
            },
            differentiationAr: {
              struggling: 'توفير جدول منظم: الجسم، كتلته، سرعته الابتدائية، سرعته النهائية.',
              advanced: 'دراسة التصادمات المتتالية لثلاث كرات والانحراف الزاوي للبندول القذفي.'
            },
            formativeAssessmentEn: 'Two identical spheres collide at equal and opposite speeds and coalesce. What is their common speed?',
            formativeAssessmentAr: 'كرتان متماثلتان تصادمتا بسرعتين متساويتين ومتضادتين والتحمتا. ما هي السرعة المشتركة؟ (صفر، تسكنان تماماً).',
            exitTicketQuestion: {
              questionEn: 'Mass 3 kg at 4 m/s hits mass 1 kg at rest and coalesces. Find common velocity.',
              questionAr: 'كتلة ٣ كجم بسرعة ٤ م/ث اصطدمت بكتلة ١ كجم ساكنة والتحمتا. احسب السرعة المشتركة.',
              solutionEn: 'v\' = (3 * 4 + 1 * 0) / (3 + 1) = 12 / 4 = 3 m/s.',
              solutionAr: 'ع\' = (٣ × ٤ + ٠) / (٣ + ١) = ١٢ / ٤ = ٣ م/ث.'
            }
          },
          worksheet: {
            id: 'dyn_ws_l6',
            titleEn: 'Worksheet: Direct Collision & Energy Dissipation',
            titleAr: 'ورقة عمل: التصادم المباشر وتشتت الطاقة',
            descriptionEn: 'Problems on momentum conservation, rebound kinematics, and energy lost in inelastic collisions.',
            descriptionAr: 'تمارين على بقاء كمية الحركة، وحساب سرعات الارتداد، والطاقة المفقودة.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'dyn_l6_p1',
                titleEn: 'Coalescence of Two Masses',
                titleAr: 'التحام كتلتين متحركتين',
                difficulty: 'easy',
                questionEn: 'A sphere of mass $2\\text{ kg}$ moving at $6\\text{ m/s}$ hits a stationary sphere of mass $4\\text{ kg}$ and coalesces with it. Find the common speed.',
                questionAr: 'كرة كتلتها $2\\text{ كجم}$ تتحرك بسرعة $6\\text{ م/ث}$ اصطدمت بكرة ساكنة كتلتها $4\\text{ كجم}$ والتحمتا معاً. احسب السرعة المشتركة.',
                optionsEn: ['$2\\text{ m/s}$', '$3\\text{ m/s}$', '$1.5\\text{ m/s}$', '$4\\text{ m/s}$'],
                optionsAr: ['$2\\text{ م/ث}$', '$3\\text{ م/ث}$', '$1.5\\text{ م/ث}$', '$4\\text{ م/ث}$'],
                correctAnswer: '$2\\text{ m/s}$',
                correctIndex: 0,
                hintEn: 'v\' = (2 * 6) / (2 + 4) = 12 / 6 = 2 m/s.',
                hintAr: 'السرعة المشتركة = (٢ × ٦) / (٢ + ٤) = ١٢ / ٦ = ٢ م/ث.',
                stepByStepSolutionEn: ['v\' = (m1 u1) / (m1 + m2) = (2 * 6) / 6 = 2 m/s.'],
                stepByStepSolutionAr: ['ع\' = (ك١ ع١) / (ك١ + ك٢) = ١٢ / ٦ = ٢ م/ث.']
              },
              {
                id: 'dyn_l6_p2',
                titleEn: 'Kinetic Energy Dissipation',
                titleAr: 'فقد طاقة الحركة في تصادم غير مرن',
                difficulty: 'medium',
                questionEn: 'For the two spheres in the previous problem ($2\\text{ kg}$ at $6\\text{ m/s}$ hitting stationary $4\\text{ kg}$ and coalescing), find the loss in kinetic energy.',
                questionAr: 'في المسألة السابقة (كرة $2\\text{ كجم}$ بسرعة $6\\text{ م/ث}$ اصطدمت بكرة $4\\text{ كجم}$ ساكنة والتحمتا)، احسب طاقة الحركة المفقودة.',
                optionsEn: ['$24\\text{ Joules}$', '$36\\text{ Joules}$', '$12\\text{ Joules}$', '$18\\text{ Joules}$'],
                optionsAr: ['$24\\text{ جول}$', '$36\\text{ جول}$', '$12\\text{ جول}$', '$18\\text{ جول}$'],
                correctAnswer: '$24\\text{ Joules}$',
                correctIndex: 0,
                hintEn: 'T_before = 1/2(2)(36) = 36 J. T_after = 1/2(6)(4) = 12 J. Loss = 36 - 12 = 24 J.',
                hintAr: 'ط قبل = ٠٫٥(٢)(٣٦) = ٣٦ جول. ط بعد = ٠٫٥(٦)(٤) = ١٢ جول. الفقد = ٣٦ - ١٢ = ٢٤ جول.',
                stepByStepSolutionEn: [
                  '1. Initial kinetic energy: T1 = 0.5 * 2 * 36 = 36 J.',
                  '2. Final kinetic energy: T2 = 0.5 * 6 * (2^2) = 12 J.',
                  '3. Loss in kinetic energy: Loss = 36 - 12 = 24 Joules.'
                ],
                stepByStepSolutionAr: [
                  '١. طاقة الحركة قبل التصادم: ٣٦ جول.',
                  '٢. طاقة الحركة بعد التصادم: ١٢ جول.',
                  '٣. الفقد في طاقة الحركة = ٣٦ - ١٢ = ٢٤ جول.'
                ]
              },
              {
                id: 'dyn_l6_p3',
                titleEn: 'Impulse and Rebound Velocity',
                titleAr: 'الدفع وسرعة ارتداد كرتين',
                difficulty: 'hots',
                questionEn: 'Two spheres of masses $300\\text{ g}$ and $200\\text{ g}$ move in opposite directions at $4\\text{ m/s}$ and $6\\text{ m/s}$ respectively. If the first sphere rebounds at $2\\text{ m/s}$, find the impulse exerted by the first on the second.',
                questionAr: 'كرتان كتلتاهما $300\\text{ جم}$ و $200\\text{ جم}$ تتحركان في اتجاهين متضادين بسرعتين $4\\text{ م/ث}$ و $6\\text{ م/ث}$. فإذا ارتدت الأولى بسرعة $2\\text{ م/ث}$، أوجد مقدار دفع الأولى على الثانية.',
                optionsEn: ['$1.8\\text{ N}\\cdot\\text{s}$', '$0.6\\text{ N}\\cdot\\text{s}$', '$1.2\\text{ N}\\cdot\\text{s}$', '$2.4\\text{ N}\\cdot\\text{s}$'],
                optionsAr: ['$1.8\\text{ نيوتن.ث}$', '$0.6\\text{ نيوتن.ث}$', '$1.2\\text{ نيوتن.ث}$', '$2.4\\text{ نيوتن.ث}$'],
                correctAnswer: '$1.8\\text{ N}\\cdot\\text{s}$',
                correctIndex: 0,
                hintEn: 'Impulse on first sphere I = m1(v1\' - u1) = 0.3(-2 - 4) = -1.8 N.s. By Newton\'s 3rd Law, impulse on 2nd is +1.8 N.s.',
                hintAr: 'الدفع على الأولى = ٠٫٣(-٢ - ٤) = -١٫٨ نيوتن.ث. إذن دفع الأولى على الثانية = +١٫٨ نيوتن.ث.',
                stepByStepSolutionEn: [
                  '1. Set direction of 1st sphere positive: u1 = +4, v1\' = -2.',
                  '2. Impulse on 1st sphere: I1 = 0.3(-2 - 4) = -1.8 N.s.',
                  '3. By Newton\'s Third Law: I_{1->2} = -I1 = +1.8 N.s (magnitude 1.8 N.s).'
                ],
                stepByStepSolutionAr: [
                  '١. فرض اتجاه الأولى موجباً: ع١ = +٤، ع١\' = -٢.',
                  '٢. الدفع على الأولى: د = ٠٫٣(-٢ - ٤) = -١٫٨ نيوتن.ث.',
                  '٣. دفع الأولى على الثانية = +١٫٨ نيوتن.ث ومقداره ١٫٨ نيوتن.ث.'
                ]
              }
            ]
          },
          interactiveWidget: {
            type: 'statics_friction',
            titleEn: '1D Elastic & Inelastic Collision Laboratory',
            titleAr: 'مختبر التصادم أحادي البعد المرن وغير المرن',
            descriptionEn: 'Interactive simulator visualizing conservation of momentum, coefficient of restitution, and post-collision trajectories.',
            descriptionAr: 'محاكي تفاعلي لعرض بقاء كمية الحركة ومعامل الارتداد ومسارات الحركة بعد التصادم.'
          }
        }
      ],
      solvedExamples: dynCh3SolvedExamples,
      exerciseProblems: dynCh3Exercises,
      databank: dynCh3Databank
    }
  ]
};
